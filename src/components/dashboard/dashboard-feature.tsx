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
    "4ZbXR176jaKVSoocKfaWaz1WfaxaLdFsSbfxH3btmad68h61edfzJNP18wyweaWZGzGYzCTp6fTydPA3brr8hSW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "258qnMPsTEJwBaHLmemdRaSE8Ca7G8mRkptUaZCrAPxmkwdXxKDptwhYWD8ShZ5Z7wg1A3Xx4F3Dqb1b1Kk1B8tq",
  "key1": "5Gfcqz18aJ662P7NxB1Bx3CrwdaVX1iG1khCGoDwQV8UAhTEFVqUNixXaiXKrWLxFfoVPrF6Kt5LtYfZSaviHpiG",
  "key2": "4gbsF6X4BqumrPUHEe3YXkUgyCSq4ELuJCJLpGLXsBtidwX2rcumjjpTzB9uR2fwKbsVe3se5xvr3fzHTUtYMMRA",
  "key3": "44aYttYWmQM8Dr1F7CgQ42ihqX3PuqpBmaDRVPE3gTcG9kViWLFtJq1NUNED4vEtXREEL4Y6FuPycvZgVgoqcXSr",
  "key4": "3DuSuvqQXHyL2tW1prL96w8cwBnFpyHmyXs1BeTJDXsMnHav57KNuGXBrreQvSH1bx7JArC1DseMe7MZU6g8f9i8",
  "key5": "4u9mpq6QJZrmqm9HNr8ehH8SXmPnnWm5aDFowrzjUiq9bbg4ScE2PRUMYCcCasyJXxcTQwtdBndo6n6UDg2Mfcpt",
  "key6": "3yk9ECHoaLfWKqCQyEbf547jXZPaa6nAE9VsHq6h7hvTy1V8CAk9efUaNE3A2a3eDXqCNAeQBvncDArUgfmsZxyq",
  "key7": "2zdi8kXHoC1GiVv4GBYbCrY3kqzTpVLDjpijBYaVgfWnp5Y2pXpNAYwxuPTS4PKjiwY641KmKo35Y5ieMF2diBvA",
  "key8": "5bHMSLvAdqa8gsZCnP2rzhWN7M6zgBKy5aADWZnZ6b3ZfP6gFs8HUfxd8nTKTmQqQEGpj9FRCtVTNCzTzyobKXc9",
  "key9": "5GoguVu7cfveLjmfocaXzs1EfSAgoysXzhJot12jgUekzupBWsWdtSLznJbDHGoimgB1c6pdfMv5RJKoXWAHnLkv",
  "key10": "3yPYrm2LJLMBqbBoWoEqxZhe92Kf3UVUihvPMnbogJViQyrg5CgUZ7WUTADc5cb9PfYdewPCmo6YZUA1BhLHTuFq",
  "key11": "3EeP5ymJvVxr4dhy7U6eq77LktwJvX95KnUfG3gvwZzktvZkFj6YgokKtyje2HVrKvrWrWz7JhTcJ4uq1qHiArNF",
  "key12": "4Dkvpx4LojhxEfvQ9dz5zyVgzkHdmNPgExtLoCqTgVtapKMf9LVsNdcyFkvaHPDABGjgk65KBzmJ5E5BFtD5YHTk",
  "key13": "Ku6ju9v8YCWhLtZq6ydtbf6qmy64C55GXgEdoxG6vVGcBvniN91RJ7tfUJufMMbip3BXJ3owAvH9Kdyg62fjALK",
  "key14": "3RmwYziPeUNX253CynDfx1s4gB1LQbKbb6abkWJdRmwXH3kUrkUCGzM3VYQq2YBdd1j6rkvsvEhHmR7qLpSMy5Fc",
  "key15": "4SuJZ5d8XNTmubUeX7yWUWawVAowWraGGo3Lz9x8G9SPvrtZZQoqqohthmtrHBA3ZHVq2Kwg7VMyDvhaYgpHyc1X",
  "key16": "2zurHpYC4uWPNvjPckchjhmZf725qwnV62LEV2LHd5wJ8iPMNQvRpC3K1mzXuAnLJ77tSNR6tjCQjqdhXsS2L1cz",
  "key17": "z9sDCC3fmbs5tzDGwx9Zao7k8bN9zkL4ENTGzgSBp1PMEpouBixZb8MnqNzPz8RVQWmLNNknfiMNoGWcQea1Kau",
  "key18": "v98D132pGxGMg3bjaGeCKpxj5GFErEW8JJqGfscvRJX5v2LnShVvA3dKLpqQjNC2wgCuyxg6sUdMMAjVYEwkZJ3",
  "key19": "2aZyAPJtHboGxEBporg6Ay2FwLyJ3YQXGcwEkrwx9Xct9zw2GgAy3j8AAZUCrWSt5fmvsEDREkxYZ2Qw15MX3EBm",
  "key20": "m2reVnXzo3LWwDszSJWdsXtVp4FGRgGZeRw95a59HmRMk4K7xbmYRuPG637JsitVWKoA9gNuzgMp7nQjT4eAXnJ",
  "key21": "3NxsmPfZUy13JCyQUVMtoKNeZF5SJPv4mhbQrDPM3DioguwaqiRJxyKPwD1u93ZehrHScAzQMFaeYvAVSzY36bud",
  "key22": "2VyoKE4qF23MEqCwzGHHn6zBTgwdpWZ6tZwoPC1kBYr19Po58uyA4RLvY1uSGLftpeHYNpYbPKZzdGgnHy8C3L5F",
  "key23": "pwP7hhbcRd5BBGRntqAXUoRGNiqeLnE1uN1hBFbfRAEVHFfZEx9GLfx2b9c6UyVMF1E18ndWa99WJ6GGiwjBkW5",
  "key24": "34PCDkPV2BYeqYtksfRNuRhE3ajMMQuEdStuPoUW2FpA8LUAKfHccvbFfyXUXP8Yo5dA9ETpQDp69cirrAZ9b8BQ",
  "key25": "xNMqTB49RkXhbGbUf2mt7WoD1J1xjH5KQimi7EMMsGmHmN7LY6dQrp1s1GX5wzW9BBcZxL6HXDr2qbbiVL88zW2",
  "key26": "vB3gHoviNv3sVBUSAW1pMXeGhGWuG2X6FHJkM8e311TovgzXCMHAHuz7dJ6xNnUXJfW9eS3fxM83rYgRNjmLZnS",
  "key27": "65TG2GnZV26C1a8w62MKuhsMj3Tk4rvkTFYC46F2GduCspNohTxcLMcZuUpT1tupJ17Efqj4TEwwPoVSt1KmY3Mf",
  "key28": "3YRTLVzg4QBYLbesEWsMQgGCSE7MCF6dyroYeg7TTzemBKJjCDC6xEr9mkMuNQb5pPwkVxVKj63vuCGvsE2kzV9g",
  "key29": "2EXME2KnaXnX1dPkvPkbKUdSozdTmGmirs2Je6i4PfVM5gC16UYh7LfBSzCcCjonem3eyK8sWtLXUNXA2gVU45Ca",
  "key30": "2t2rVK8xNSdJp9SgUzZvBUyfgPiqeD6tjEr4jDFKr1kZgWDjpKuTUBqdRf98LEReS9pCMYF2AiqSy7WNKGPFjQUz",
  "key31": "2k11hDfWSrjtwFdmupd8nZA3dM5tcE6fAAhu87vp47QbWCyeNYwQHZYniXBC4CXVTzwfBfgoEmH5JkEEijLXLLRx",
  "key32": "5ycA2M4h5VfZxZULfBVMo7jXENUUfVdJez5yFHL65LqfCnddFtAUjAQuG2dFSbUaMvptTX1iUeEbUZUACCpHMoaT",
  "key33": "4XTTFZw6rRGtV6p67mavUjgjRaJMBb1pFpMoYyzQsvpPsrY6MtBdj45oNPJwVzwDbb5KJ44jmkYNNvSM7mgPcgjw"
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
