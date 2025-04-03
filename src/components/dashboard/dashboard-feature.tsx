/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4yJTCzCpGEtqAFtCKcCxf6AGe4Sv1hqfKNWMha241MuDTfbHYu96t58QtsLENPSJf2DC5x6Av68GFVQEXjFmcePT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WsRxCa2x7RAJqdFWpNKogqGnk7d62uGBEvMVSFwVVLuUhGrx1iaGYwmbHVPJNVja262xCpmy6fYCiUUXEehPenS",
  "key1": "3WpyhVvUCUZqwAkoxmmBbcDUzL1L89RGzkFxq8VKDL8LDnJRztuxSdUnCDJVubA8KwARTdhjNPNcnZMqb4gshLTi",
  "key2": "5RRXRfiTQYR2nnpArJXDL76citd4fLGgbkmrhFH5MoWeKDTcai459XKEna5227X3UaCaDXoLAWpnKVajeVovuKTs",
  "key3": "5yM4B8av4XaVEXjp63mguRgRydDGRxC4wyPa1NgtFV88wewDNorEWUDS5kDc4dT7etSwttvH8eHDGHwj2VpHwo8g",
  "key4": "33tvpe5daiFGZfYvNC36mo4v1ppbSDQvKYdTtyfqfc7uB2rKp1BESBwWmUKgt4GB8iweVFVyMLhskTj5kY6a7zVs",
  "key5": "43QuW7mSUHYsJgMNSWNCbiDfN4xA5CLqup3c4Q6KZknL7RVMoJsGgZU9hiuwVQiSuAo6oMc2PK7CtzDrx8Ac3MKF",
  "key6": "426GkefjRmSkWuVN2QNWMLMJuHoXcuJaGfpr3LoYd7oDh4hUxoeR8GxbjJbV3K6KH7PRQeS3CQqqPdcwp5ysvMmg",
  "key7": "38teV8pg7cjfeGdaUxiNEQu4pxrwmhg8faidXbVrUuMCmBdvZ4jpgr6J74BhEVMMFePhLvAPGMYC3SGUWHmpzvKA",
  "key8": "61HQLPUvfxSZSafp7zUsF12p7aYqe51ZatN2uwH2fZoeVuozetLqCXCrh1Q5BPR4grVSUfF5sj5s5rTUMZge5rYm",
  "key9": "25wFgh6LZ386MSVmyUXE3vorXEs9zFkYovjpnfWzAu5nnfFejp9rRhBbEtEVxySz2Ggvr82Z9eSAr8mKK7cbEtrf",
  "key10": "5Kq3CezfJXibo1Zb6dL6HHkPLz62yaRGqvvcBSaE4cBGf6SCkSQ6o51jz6YwhBBRBdfGUPxG4geqJErgZHpGfke",
  "key11": "2f8Lypg85daFDi1utzWiBckpGgywnqNr8zRgGNwBVRKNk7nVtCuhwEbARKopzAz3SnxHQLXdzSaGjSiKLMW2ZGzn",
  "key12": "2kmoNthQT2cJQQAL3YoWUViNG9kKidJLUfhVxXCzWvcez3DTSJxt6mYe9EBr7FZmEcEnHR5Pk7MvzCLptJ3ZfWfQ",
  "key13": "2CwDx1hPLDmpfBifW3ezaq6aypXHerRQ2o8ajkFwL6YxBYG6P2bXdYKg4Basof3cVhvabm8WeHUxH2wZZmcBnavW",
  "key14": "5WYc1wSFBtNyDuSaMog649EL1paLLEt8RcQvb4RuvPoDgvV7U98XD333y3sL46U2ZW3WzyQjg4jXDnhA5ZJfvdb8",
  "key15": "2XKH43F3KGdNkcAQJGhv8wW7nLqn8i6MgUbAjeyictRCBo6pbR3pwZ6RYrNNuc91f3WWskSYuz2SDenCdqQZFhrM",
  "key16": "5Z77picQjdSJ3Wdwom91imi1zFBCNHh8jxwcbigcU6qD6UPSKbtJKGFgQBB8aq1FQhYoN6qZmqdkjP1U7c1WAohD",
  "key17": "4ewhKWMr6hqZbqZe1nhyutMxijHGNiGtg85zjshAKbMU22B5SB7EGNLWPBvaif2oFfj9qzRriV7Lbh7mM4TysWzW",
  "key18": "223Vskq4vPWvMaxQWUwYUZdj7eaKb8jKEAEiqNy6H5tvewmK2QTGy5wij3p6WyqgbpHcYTjFQBVXKMs2afmg9cJ7",
  "key19": "3esyJfVrtdcHqrUidvSg2g86rhiJ1oHxiQ97YGvtn8CzxXEmW4JYMEisXtNLM4jv2FvoZ1fbHrNgeziWjZbvd6Wa",
  "key20": "1C5EgWrwqyRbgttGVJGPJwYB1NrxDFMKNGTw16tPrsSa4GH9yMYjiwLQs3h37LXWYsDubFtvB24c635MwsPrtSq",
  "key21": "3QBXcwgZy6zDMKKEWN8LUHrMNFaJ9vFJqK4z3ibHA2j6aSDApgwjGXR8XSUBXVe7FDUDXgnuQgw1uvLYpS6dsUqE",
  "key22": "3EbqyMUpikho6HMoj96ugZbUK26kb8NcG8iYUpkEL8uXus5MXX5whFz3YW6kpq3GDteHR9uGJUH88MAvBVUy31df",
  "key23": "2xYrHPiZjNYo8sS9Pyj5bbK72b8ipx6f43PxxzyaXE861frZ2w4BwjXBjH7emkdnP7jpqGMN5KExEVoGx2o5UvU1",
  "key24": "52YGZfmmDzYeQQCinsLSCrzrcyWqyGwr3cCJA8euwh28Hf4cbNgnGn6iZCQSBzbguTeooW6nnMGKLkr3ZsENmfu6",
  "key25": "visuSg5TGrf7cua92m5QutGnwZzBN3vRqYAFufmmHTH6s5giFDp4EvSx1VNR9PMUrAFkCq3DcALcVAs8KP8hhmk",
  "key26": "2tb9u4pxfhxxCEzh8Z6V81zSQGDcBFwaHaW9eqBF1AaKmvzmZSdMxe4MMoC9BaRhXqX7SAnK7J8VEjpyjd55MR9K",
  "key27": "b6f7cyXMRBxVZWyELWWKHTkn8Z4QrV7nhcsPmTYtLX2uiNafkc7s5y1gUMmmaMa5qWnArkWgFpB8gQCgh8xT6WJ",
  "key28": "3Wf11yo92kRiwUCWvg6JDtPrXfV6ztzCNy58fnYJct2EH5XPTXcPVHqxVSZBcSxn7Et7pCsfw9dGgrUKBYNEd4rk",
  "key29": "4X4RPAtA92Sp54oDjtKQ9KKLRZ7fWyynfgVq3c7pHMZyWNU1ahyyki3ww9hcr3aBjiKLB2SuVjJBArXCci5y9wNb",
  "key30": "2PoRwwRyQzkGtH7suYTpaDHBF8iNF7N9U1mbD7kGnnWTSsGxkAxZwttCrYUR7AM9FhuVt62JpemseYqWnMZSdV53",
  "key31": "4oUKaBBYRS81da4DFofJepxHTeXWq3baPL9oLiY9JCVgu5AUT6aFkURrm17NLTJXgTN2denoER7MJnAUqugbbcW1",
  "key32": "3VvHj91zjZ2veYzD1B4pLFyN7eqFbuPLEoDmKdPjdK5sa4XCxcCFRKF48swLLDSmjELWLzDgdj8h8N9nPTzpLaJa",
  "key33": "4RrQeZEqJdNPSG3QysMmhp9x8PyfrS53QwLDo3zJ12ABEP5JKsiw8Y9raqMFD3yWyJQ8crZN5qLx2gWzEkSMWtmk",
  "key34": "2TYeAYN9LskFpxRZYxurAZK2WkphXc5tiYj6y4YRL8EG46oAjyC1fwSJUhDCE9gmdQPKakhVbCgzmdp4xn6J2m2a",
  "key35": "3YcPi7FtQZGmYUSZt3xbnar9RkNwtHTjwMj1gGCSVJ69f2msrohRUzhnFNZsVJej8kiChx6DDBSdNtLL3hzQH5RY",
  "key36": "28hyi5d9PgKNygkox1dr1oGMnFkLSjyY7pYEgSSWNwnKzdvwkux7unTAaPtij6bm3F94kY4L3SuAraKQxTmvr98W",
  "key37": "65ZacSqvX6i3RP1J95mP4R684z6Tw5kc4oVz2jPCgbVdyLVX8rKNUMYRRVEdW9iB1zJXyCKkdFmWMTkhDosMKCwZ",
  "key38": "58f7tkmt54RTTX8JEqQN6HDRWbDTrHqZWe1RBbMM9AA2GfyUNjZtzEZCFtwMMsGSxXGRM9yDzA2dY3p8EK1s5rYF",
  "key39": "24L3D7Rk9z6FJA4XC6KJjys9N1DxswB98SJtaWxHXPXWvD3B5hVeuajEm5DUk84i76yRbHPabMdW4qX5dieVKpzk",
  "key40": "44YYd9u7vHBbECGuSB4U1gKFvBLitbXk4w6e5kzj253ChHmJmWyy6ivuZG7UcF9drkbZnRJGySc9rn9Dp7nxyiEq",
  "key41": "63ENp1rFgDZGLXKaU57MfXtG1FmH5PgtUQgU8ryHmpxcuQFzg7K7K36nTwF9yWYpLWLYhZYDNzU6TWGwdzrzn9er",
  "key42": "29ZJ15NDCmUm6sMfdr8Nz8dx7x3MJuaHpm9VXiKp3vmA4GqunFWxw1sx9WpnxdMXsabTVJHXj2KYpb2Sp64gnWYP"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
