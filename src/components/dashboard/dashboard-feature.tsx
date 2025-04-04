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
    "32Qfn5ZfqCZdC938Nbtyhurdz1GFax1qKsyL9oZCsyXx7urNfzs3ddda53NpBWNKfv7jvd3yEzkNHt8ZhuHcKK52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySw2peZZRsR3UAuD6bdXnrwhShhCF5nmKH2kVpsPSknQNeKdSNGk2NCwFekfHMFzRvkTeJVN2CC5wvA7LjxLJFj",
  "key1": "5h2QzJNcSGXo4xiny4cywjscj6NDV9G7kVdJXWJmYG5KE9Z1QNk3H8nfyNjHhVShdgq5zJvdYd1cRRXpNHAGYiv8",
  "key2": "2Cm3SQgaT4aBqdTphqKpNaPqhvAozcCptTWyaDxzxkZmSsDqGTZtmgRHTzYB78KPLpPAR66q7te2CdKUcYmRBeYA",
  "key3": "4KazHSTUDqoTHQryxYKbP6Yd7NBfsjWvbi1jUsanGANqToS9cLHAMDTXVrCABtX6P1YLzwRsDYuHuUtd228cgC3H",
  "key4": "3A3zo7qDpVWmnKyspcdtVUKyKgPwHrjdwKjT4M3rVYuTySH69NSFidVVcFFzEr3VGEwkwS8pvi8zjt5FiYx2KFbU",
  "key5": "3G2NprKophWX1mbzxy8V9RFNp3n7fL8EtBi8ApgRvPHwv1jdzLYNTFhmg3iAFqqCcwairesGMFJgUjTy3DX9uh7",
  "key6": "55gvjkHJsd7MnXSVKXzsfWgeZPPUoJyPj4WjwGiMsatUZRyXMXeq3Hxiud6v3gFMZNr8B1ckEJiiJGr98Wjxc2zo",
  "key7": "YE69vFRoN5ZLC9amSVUknqWkRV5JjBFadJDLgF2UMAKex2HY2m63dUV88zgrrVuBUAB6TzZAYa4NosHkBEfFgiQ",
  "key8": "4RAM4gdRzuQ7NdPkaCEXcp5myKwQm98KEoiuSBtwXFEcGzRGberEnSdH7mbYx5z8iFtjtgqgadMPeJeTKemYm8Di",
  "key9": "54YnWPADrSpy7eL3SNUwfg5r7neQnamEcJJAGa7DWxDU6YdmgQHNgAeVh9MGwGtcVbaiktAtsHT4LArgmXng9DhF",
  "key10": "5EN9BRamwn6jtLeBdsX13GpQEKemJiMskr8Geng6m1mrBRmmcm4vJDXWKpJ6ByTvQx6oU8jiH4ZA7sQUore7F3qh",
  "key11": "26rjqFZnf69Qc4V9G9yYeuhe8STtnxepkCbfv6Sx5pwT8LAsmJixunvEEvixX2oHLPL7rDoRuaSu9EnMKTFMTk4p",
  "key12": "Lpbjx6ZT9REZcypCXCo6zXBgw4D9ZA1pDt4WGJJTXZQ7AxHuCo7ufW92Tss2dW9t6hV3HMUGEsmU5dwjC6fKdex",
  "key13": "md2neVJteGsZxZ94vaoQ8uJWobtPrro3kLEfXH1mvExtKX3x43pfPLzYhQERUYwA5wPPxgFsBAwmRewYj734eMg",
  "key14": "hzbwZmSuU6HSE2ZDvXMf9zcZfeM8Tfqtzpm7389trvFv93YaT1CMVvvkMhNYnWsGLCzKo4Nb1zqJcFARLgozCdM",
  "key15": "BABRhdLVHaFxJpz6LmffSExsJFYtM9ny1iGEcxjkH5GCiK1sUuhUvPhGz8U6xXNnHyYUYRutrDpojVMeBGjqrSn",
  "key16": "irioCBg9uY5LStMkgD7Y4VbjFxxpn6jmjt4nC9EjUH2UVnAQopxVTzjeNPgB9HX7cEfBAo9dkNGCe6GNYqUa3SE",
  "key17": "5ZXL3XNhuTMCyvAcgmFWSx9K8997yXaC94M2yke818jzzpATv3JQ9bv2LaP1h5sZMhFJv86C2aLBRgdvJiRsyjzU",
  "key18": "2MFt48BJNoAaibuhsqQn6PHFmS16XMBcV2orDG6ikPWMLEy8kSE9EEqCEz9CFN2s1vdbKjBXkfxYod52baQ3cabw",
  "key19": "5YGuJgyRwn1qKekh3pPiZ6LPRZKtkXFcxbRQcu7FcVkQ1kwAspifZQwG6Au54dD1gVQbDZPJ9FmcCLNoAKaXNhkX",
  "key20": "3wyQkf48b1CiVRwxwY1CxAvHm1jBf9uZmQiDEhn1vqvXHpNE5rDydiBk6WD61ebUzjvxhmqKaA1hAUyghRqPHDBk",
  "key21": "VcdtACKVf7WUqraE9XUUWzGCwGmHeqzZZ1zP5KeFnswosxyq6nGM9tYWWps2h9D8NrCGvHLLvWgdvuP3eSgecrN",
  "key22": "2UqJxe6Mw6R1jzhnWVdmv7TNbnaV88W8q47AeozYrPtKmycFakk4G2CDRtos996qhv6LBYjdCAtDC1QioGzghMrU",
  "key23": "4i8J8WrFmvnG1Z5XsjieCJU3oLpZSi6hFMESHwqGmjYZRjcD7sbGFUa3agT6P9NyEYdNpg2zHcNVSndxVABfqk21",
  "key24": "24Xy6xhXfRN2AEFPj98jUzfapisHsViM84KrG3hQBZ7CtQ3dDbY2fAfvcg2eaGXCjL3CW7nCwxUXkgkkYtmHWNqm",
  "key25": "2n2EntzeZi3FwvDNkWdWYWcgaJDrYgaKVo1VqFtjcvi9KFCKuiqAzhhmZrLfZE2jDWVkTxDjFS63SKiogCNUFJKM",
  "key26": "5TbnavYsjdJM2p7Dw2JrKSFieSgtuBVcTVxoLwsNWH7KM8ZcKonxQBVeimHGqYKSMoG2BxZvjduaHwgkX8GHPHJA",
  "key27": "4DUPJdbfAVjKeN8k2tXsujGt2fg8jw8AagnDD66D3DDNzSdNizGv2U1JXVRn1qcszNy9Vs2HD18pAVL1hFXGkf2Z",
  "key28": "4AneaCL2zbiZWis245GX9Uvrz5kK9PxkBW6UDWag5WavvEod2tvM1YJ45a8wsLAS5CTFMU19RWKwscFphjvNJxre",
  "key29": "2h6C5XJWjibZoGE3aFGrYHqjhjjMZ6tKiXXfqHaowWP4H1xKBv479Vikb3PsyhPdZg1gsKvYYxPHRUmvCZiGBgkF",
  "key30": "LVEvQLWBo6av4qkpFSKbeS4UdsZqGEycvTcgodVTa9KE9Z64egzymptBUtjxN24S214T5bwAtvYgHrdqyWfoDko",
  "key31": "HEYUv6jjVPozm7Lo5bmfA7zKQMibD3GBRCHVxWzD3yU1xTLBV5bjNGHBBN9zHeZHM2PRCDDD2cqTCptRJv1ZmNM",
  "key32": "3sPGNdqhoWiH4nFNJAgYm1oJGFRbYN7zEJ7rxziJixUJZw4CizFa6EqGTv3zagWcukdxJKdTrrVRUCo4hV5g9drn",
  "key33": "54hLPukER8CDVomUj5uRRNu6WQfwnhCm1ZmFiS6XEFB9UGWA9tTWNkihT6mrXxCBNy2P33ouuUgg5ApB4xBJ5qHd",
  "key34": "qANrDRRkYAft2W3ka96aGaTCyHGqvDJDZPh3Mgfky7exoBijKeGr6eHGYjmj2WyXXU4LTbyCBFAqjaZunZiN54k",
  "key35": "yTqt8nyA6Q3TuknvpkNXGYLrHFh86oFzwCc7rQkZN17UEVmMYxFZpb4hyhD3aEfPq8QkZgAWhcgGe6XcDTjJQbw",
  "key36": "4JaQCyuroAGQcDZc8ZDgAF44puY35VK5fPTQr8D7rrJxY6Wr9WVsNSw33oQwXjYMwXjgKzCzSBKPZRjGShzBqV4X",
  "key37": "42Ljstbt2UAcWKJciC9ecYVUFTgDziZZ1UwP8DdsyQgRfkFNmGRPbkkWWECBMovoejxtkU9LuXSp3xGLxVNMwK4W"
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
