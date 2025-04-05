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
    "5PbDEdWaCK8Q8j6gPdMzcnHSRe1o6E7c4Qtd8t2w3vSjN9yzrAEkRiM9aWxjdSBczk6CVx8wf3ayW26qrR8gENXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NMbvdfY8zHRgcD361wkmwHgq5WBXJm1GYNd57ufFnPckfFaTrCUdjdLp34Tv4Tk8kgNKeS8vxknExoVLB8Y2ved",
  "key1": "qybLNwhVW4hoH5HRZ9iF8Xzh2whuEWFfJatTNhtq7oNKAgf2jFVdiKhLaY1TzbaCtHinJEQYeboLSuakEoatzyY",
  "key2": "5nRu5o9gYJBUh1xozM6mdFcJCSJYa8pqBirvGhzNUgtTe4daqTdC4TgUGSBBM2Sgu1gWPVMo9qt3nU5W4jCSnPyt",
  "key3": "2A532eDFxBrfL2zk9aLX8U8YA8cjSXfJCTQ6688DPtQHXQrSMRJEC94DRgNpg8p14w3WgGYDJG2x5TfK3p3wR1nB",
  "key4": "2VEk8dRf5Zhgu6sKcqcqKi4d77fuCgehfCscisgfQbMBpieHpsdhriWAA6TKkKhxWB1SgwpfnhQ6D9BTNxZ66bzw",
  "key5": "FwuXT7okDsCAtcQubJpPrqdJwtcRD54w6y6VrwQptPqwYw5ZgSk9ha4Ug4QfmnwXyzMQk7KyXiCdb1nF3Qag9RB",
  "key6": "2CZYNAbU9hfx32Ecjc8e5hbfGREyvHQtGuzhLxJbLF3puxJseKaMiC6KX4Pdd2X49FTLG9qXZsYQJNT2V6WPJgyQ",
  "key7": "2xobVmLNpzep4PdVzVDge3mxTgzurNf8odnfM6wdUkkc1UhkafXgTrJpXoSthbxMesJJP1CgAhw7Nb8sQSCgKuDx",
  "key8": "mEFMGsjXEsmgSaA3xtNabbkjFxUFHznMJsyZJHk9JeP1R8XR2nffb2Y2wLacXdFjGc8cHL3vnFTESMVkBpTw2Hz",
  "key9": "29Zeh9YjJnqjpQx8Hi9i9zmeH6QnS1Unx3ktC8B3KHWUnxL9FnWVqS5RWoPKJVs1naHyS5kRfJzM4qKaRCo9HBfe",
  "key10": "4sRgBnSrA6GDBo5yJs8xKGLMtWuvmoKQFBUqTgJjkg1mGRN8MCn29vPfVXZsrpZtt4fqT7oyWFnGYa7TxZE2wPK6",
  "key11": "4wAwyfUCH5EAT4J5fkPac5syGrLRbdWWBbjoLeJQgrBNzGAuybDuWjJjEVwgFsnKkdfwj5q14X5oQcHXqVxJdjPy",
  "key12": "2X6CkdS69agyQfE1PayAfVyiTcnpegaXJ2cLTHXZupYb9F5pmKHpJnWyjiqJfa2ZuMigJbg1h3vkdbJp9LKYDT6c",
  "key13": "5WeeQis3y6ea5Q1tP2TqXg3DNFxPR2wuag7hkAKq5HB4SjLCpTPMyK9ZLEFcNNJ5vTKox38Jkk9oxW3RqGkFd4n4",
  "key14": "raLbn3JUp1FtRRymRHCQ9Zw8qHJ4sXT54ajma4b7eDjGte9TftzdVATx2KUCjdWM9ZpHS73GSGegyb9txWT4tLi",
  "key15": "orezWQVz2PqgtQRAQTbx3YBC1uNPREwaPeAcUQAb3c3D4BcThZi1CycziSEEvKzXUQJiAdZGarTpcDv3AQPjnb9",
  "key16": "EuNKvuQcbsoXrD72x8fHnkrEgHeZ8vMr5AH9Nd1R5KazHDwXHpvVtqdTZKShQTa2rod3nvRBsjQqamcnqEYRorB",
  "key17": "5JhVowhfo9cjcYmS7HyZHzAbta1SedxqxFJzy3YfGGEp6tirCp6XnLbiacXTaau3CDQ5V4d3H5KdfdWrkJhqXB3R",
  "key18": "5YCkq2hVS4qoPJ7PtamqtvSh3VBUHFrfCzPN3MJ3TDpVMGoqGoWY9yusWfHqD1PL4uzFXuXuf28PUMdegyLQAnVX",
  "key19": "16ahMh98Gr4o6BZCnifbRom9j3nryrYC1yD9Pb9ffs1fXT64ofqfWuqP2RKhvzSaTx8c6Lqz9H88uPHQr4wDsrM",
  "key20": "2igHJVdQq8h6bTJqGdAsSqhmp6FD6MLbMb3Sb4DdcyhjrKu5fA3SfxPgSaeA1gFJxzAoPek8gAtnH8Jg1MWquMVA",
  "key21": "2wiEosqnxBDA8HGgetqT8a1m1SzNGkL2MpXwHzRRzYBMMo9BVsEYZmVYJdDwcvjBw4eR4ZKLE8t6AAQfg5Rqm3WJ",
  "key22": "5CywMueF3hBNGWwhKmf3NuFgVsJpY272wmmHGf8ZgHu4mooBHujww9jXDCBSMuhvnB4QdRnqeNQm8Bew8v623oF5",
  "key23": "2fNWnrAPnHj3X9iduXzjDmYeve22DHrXNDV8x2pDNAfTVTo1iXMuzBt9cHrCsQ372vMKHkhPXaQ17YyomZ5RQ4VJ",
  "key24": "44xKUxq42yQZsn4UaJ3F6G7fzykC7WCueqwbCSGsWAPnVNR2n4U9tehLGrytFTdkCDwZhBZnJv3nYneemABQhbAD",
  "key25": "9HncR9jrF2AhDmJHztynudp9hiwrUvxLbvovbRWwdz2dCRnWUnJqbbhbys9kV5por6GjcKevYc1WjPRz5mTQUni",
  "key26": "4xkuSh8ewHWT7h7LP2n6dEd728Q2M4YmWDVCeTqvoMry2mYKywdxEfNQDyfWCrVRthquVFzj3kM4ssbFuKAumzwp",
  "key27": "3Pwn2kZXxLTviZoTwYbz7MGS6WNrBC2kfCmcYaVZe23pgpneroqbK5arczaRC8cxu16UyL4i3TiKYTE74RQNMscN",
  "key28": "5YiegiKBA1PmvzLydgjfcyJyQayLEUBV94aEFJr1vTbmG4yGfVweysbgDp3hwJjouRvhcosYg8fPh5dcMCJaDM3",
  "key29": "29DomABFyXGMMFfk23oekzcx4mRA52Sb56pdsFtpqJKvZrPo2F4tETrsFmufsr77iBteXEjPQV9fDszW1ETzxAmH",
  "key30": "C2VUTWyUGTtrBKMCCKYF5VGm2Eau59gBxEoSKCCZ2EGXeYYpNEYLfLvau5FKNyhpchq4vHdPrE2J1q1QHL4CoTb",
  "key31": "5KvLusT8WjUacY5E2oWGGQXLHpesNpk2mXVtNu3tESPWecxc5A4HeXxPEcbtLydRpnUPdP4TXrFKKM5gfzSa2S69"
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
