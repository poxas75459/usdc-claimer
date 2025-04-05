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
    "31LQhdNET8DzdBZmiBRuzR6H5eMLdVTUChBKpVyiTgv7GtKpRfcXb8su3AtsaGxJfcvyn9XQRApHH8swbYJrZm7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zL9QvwRcHuqQBt5Tn6xGYVPVqUARsJkZMAhicZzyhubT6sSMJZ2Xoor4PT4tAai81VGE2yqbz4K21N5jedokm2X",
  "key1": "5vPD1dy25n3bHgxN2pei6xQAja36r3ihakWqS9uw4CvzCEiYAhMHbPf2Sz5gq7CKMypPM7gfBxim23MD6NuAo4D8",
  "key2": "2DiMrZ2HkYPVwAh8m1UxAxoRkNVvibf1Lf8gVj3ft3wcC53qeNJjPeiZxTQ7rdDD34MN5eeaeSkMCUfCJEz1JS7P",
  "key3": "5NFJ1GbuVUruAiFFFJ33L3XHXvCGix5bRVPw4K5U8CQTWfFeypoB12w8VsQrgTNgLiiRcz139JfuMvR8K7hUHaFm",
  "key4": "25GX8APKp6go1Y2fL43ATXuisniyfuRF1rhRWb6dedmiwaFWUKSyjcf6wPs6pxV5GvSqbZ2F2uppXAmJNgoN3dmH",
  "key5": "5wQ7NCTC7LntmEBSe7t8bWMy6TQNsNtYGAhHvo2u8ALwETKHhEWuNG1TL7Pz7ubkjRvSdRgjiiK16YKfP4meNnpH",
  "key6": "4zHugnbRxDmiSYRoT7ExNygYgyRxtEgiwJHfgkCAaKZi8HYHd7tv6MdruveZAS824b4dmAQKkfDEY4A9ZcMavEGu",
  "key7": "xto17h9uySBvyHGXTCLpiYn2ceUFeBuBJx12N3LN53y3FcqBqRC6a5CxAPygMv3DxRcSAtZV9NuurxEUSj5QpWZ",
  "key8": "4DrW8zUyyKCNmbcb84H5asYA34euNPMne18NawvUeHnKRstFKsYHaghrV2Rgq7jZoigVegx5Gyu42KofZxowdEyw",
  "key9": "4y8yGuUPQ6iPGCNZiKBYC5zafBHjFCfMLWqMXjccsg81hRxHcqNG6QqSkEnty2Vj8pnQuDrvZabQ21oSYZAmdxzb",
  "key10": "BZWvuVRRGJLc6Ci8k3gRUyapNnPyGBuXor8bgDnJXbksNt2nQNT5J42EmuDGSrXPuSVrYjZv9pnH4tp5hPeRmz8",
  "key11": "3TkfuHWs2zXLvwyVFSpcMc2ohHojGbbHnX7162y6mtbnZ49i49YXDkygZe8mmtTNA4G1ArxXrc7RjY9ykpS3fqCi",
  "key12": "2ZNMgfgq3AiMbNqVoAhQV3HCHvZnLevDuqNmR8r4dBTbJ3TwZGGCyrqiEHBvJvF3CPb2J8TKFkqoeA5F49qYQZvj",
  "key13": "4z7wsfYKYjiHg9WWSCi1sgDfiA3fGp5BSZHxF2La4Zmu4ir2WpD9uxDMEpooqCKBLwqgRLBxeXQyMHjfHfhuBjYj",
  "key14": "4KWr8c1JbHcGZrEKE36ESVhp4Uyqg8MhsqMnDeFinyuALnRQRjrQz52om8N6aEifbJcB1TjViyeh46VTAgsxexc9",
  "key15": "5WscwKHdxgXDsVGu8WJrtgsfNMoofpg65hDJjTwQxUviyoNZcdJVu2gabtvTdYZMoBpaCVHNL4eHRmTL9yTXGGTi",
  "key16": "5pNcDaBX95Tp6dZMEdHgExdKHRzjLnWVivWc3EYgseRZVqFotQfn2gtABGPNngHY7Qvm3wf4q1E1xhSDWTb27QKA",
  "key17": "3S4oMaLLuQd8Xqew2B6gumpMRfhsFihcyDN6WHkhzJnvhW7Pn8jU4oS9FDXyTdqZaqFpj8BgTUtqXZptrh5MX1aX",
  "key18": "3u8UDXNdUsBjHP1WHfHbq54ybfLyxGqG8YdTw5ZP26Epcx8APApyi7qgxPaWxJQbo8nEQxs5AQbxbCfjH5q4NRxC",
  "key19": "NkbAFGMhwxQkFoTw3KYP16zT3VFwLACsbqRi5QoyzvkWKMUQGTBAR23V1sXJ4RKpeAj3NrDGokzyh8FVqhmwn6B",
  "key20": "2ZDNYKZsmqRoJVY8DHvPwmBp82M5ds9Wg6gCpNsNpFnUnBRs8eJgHfg5CjYY1TVSQxrqyWfD4tYfYccKwbP23FdV",
  "key21": "444hjZh3nWJWW12RuViRqDncNxUNfRBLoquThTsw6WG71rZJoQV2Gu2vrW5a8wbTpL2zWV3KHbnSyYLamCHyFuBe",
  "key22": "3SmFvLq9kY7eFqTCVFTxYvwnQUA4CryR7uYrvVkzp3bxRnN4q5WWX1puYvAq3NvtKw8fdwtUAtPVMjz6jG62DkSo",
  "key23": "4pHh6EdFCrWUuVHhkACqKzBdAi2pnhVPSFCc3UgLQUhtSFtoc3bXwct3oDpXzdSA5tdQ552D6ow8xKvWVNXbM5yf",
  "key24": "NfPoAf7cPHvMCsFfEysniWcG3X6pnrT3R3rfSUcd5ZWD82zNASDRNKpnQynTq4hpVSU4ZBcqcXNrSs4eoLVZyeq",
  "key25": "5se6964E1Urn79kKHFY9z2zKv98WL17QJy5NYsN7bSJyqLpfLhiHMGBmbh7fZEknSCdrPbdPQmvjZqXntgAgixAD",
  "key26": "2541FAu47mnCAG8SX3sF3AfVzfL9Babd7ekPgjmkwonhVXifvSrZ6CK7qR1TUxs8tYoZyEMzjCA9DgVqyga36CbV",
  "key27": "yd3D9VhHqPnL9VJY3Ev1VQKKEYYmAoY1FV8qrSdjXCvYagWzThvg6Q57c3ZUvsLpHv2J3VK5ANxJUXvXXhbSYQd",
  "key28": "3nDMD5uDXXEG6qbBGQ3unuh8Ag9RqUuLze3G4whvs5yuC5vqTzSPBgFbUHsWYB9FQhAvE636chNSXkBZzVkxwnvq",
  "key29": "4k3xogPVnxQB7m1AkVYpd1qS2EFs4DEYB5QvLVUMFNRm4uCDsajdnzxzagRm252xYvgRoW5saP2cSfqf2Zd31fh1",
  "key30": "3MmN38otPjy2L8Mc9cPcnCnfA77kwdN8vrrQt6juu28DTFuAu65cmnFL7PkTQmJq6Fgix4TDDbofvuAtub9yb9Fc",
  "key31": "G3hzzDTZKNEvjWtMSis6NtN1U1ZaoCjdcdFK6d2d3kPphLNNawpvQx3zHhsAGKeUJTzZdN8NPQN62w6GXShrNrV",
  "key32": "5ue5KJK5NvXs1xP1ozGpk2aUZXqkW6XkLmHY6aLaJfMpWdXJiZsuFXndcWL3u12FytTWZP28sNdoFXUwxXqW6vfA",
  "key33": "3T7MVAGND4k7CxU9DJcLVPxV58RVCKu5mdMqQc4fnbzTp5wqhtknaFxEtcTMXp2xikMBtMUkCHDCBwc61dqGwdvT",
  "key34": "qpJuGKuvK8osRciiaGjh7AYUQoPHsEnfi22JkVvBBPqhoPrVtzit9t96z3ZKvG4BqQeQ4AMkf3TgMQUzYgxDWdB",
  "key35": "4knvJi4b8WteX9fF4JGpBpXh2CA5P8H6GNw1Z3s4jsyf9oPkRLsBWyg1NgwU6TYpSWCRZfpWvH7GkJB5vX51MDFe",
  "key36": "2oMQStY5ioeqTfyE4Nuud18W7pLj8tGzSn6pPM2xqNojrachCKJJfpR7nghMdqkHjRrDvRz4QJHAc3oLEkWnbZqi",
  "key37": "51TRcg2Z6b7ai7z5gwRaZcb6zEZ2W3cqyUr8X6tnGigaiTQKVqFChzcUEaWb92sYQJ9rFZxKtXAFTXfE8LPoyikf",
  "key38": "27JNj7W8TSQrudFuV2jpJTnJ21WvUrP5pzZmGhgXNTuJHUeAFAZumQ8tXAecocm6JPutCE4YBt8JN32fhcgL6iYM",
  "key39": "3iiZfmhiUs44f6eV5NJqNeX19f1ve2a9nWLEuz235K93owodS4MQcFNtiLQC7Y5Lh2oSezi8MauNNgh4dkuEEZ4r",
  "key40": "3ZVAzuhHvp494kAXVM2AUpxMhxS4Q26j8bNsMprPPvfr7RmsLHEHVhjkLJCTcbAtJcjioeYU55drLqG9h3mPopEf",
  "key41": "5B5FHzx9hxxYvkr4UYWKtnKqzeM7LznwwmmKwXV2mgBM4d4WnRC52DD4jdfUp9cHTSf2uULpjefuAfQ5tX1X1UUA",
  "key42": "5KZpRoTe8VFZhcVJpeNzx5eB3TmAGpvGwgYxbqBUDEiUpmLCXNzYW7yKH4iy3Q9fsPKNjwQYozfZBrq6FEesGFKS",
  "key43": "2HJoa5CQxFVRxKDAzNA3yWuZQmBYeAx9LU2imgFJ5DrLUQdbvMw3mQUmqSs2gaEbALz3g9VQbajDCkTthZVF36XW"
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
