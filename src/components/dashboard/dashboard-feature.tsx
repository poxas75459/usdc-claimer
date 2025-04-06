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
    "4cfntg4SNgMi5aqPS2YD9p7TdKMipPY6oJ9AwJuxgsHagXf9nwesKXdddT21nmvsqK2qWRwVmNfwHvXnnYoPNJCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gh77camWvthkPQXY3zbUDDF2SbWVEsmUMVLo4zrCtiNgSN8gu71J4MephYG39BtusiNqPPrgWsxpUEEftNoBBdM",
  "key1": "3fXET14XQTEfQpnRgYjG5tJE5T2MfAyp2JGFhiyCE5z2P6YWMzESGkX29eY32njWx4T3AEkmG57Zqo1CmG28kePC",
  "key2": "3gJ5Ctqc1kYy3FScvikGbm22BXcpeCBE9msnYe6ZxG6GNy8xTQwtdgTC1X2p2sr1oejekLDf4ijMbZTEpr9xovZB",
  "key3": "1MpgAzXeGfAvsy9vNtJSK4u8g76SQS5TCfwUgxDJGtg4i6fjTd94JUGqMf9pfJydZnuaEnPPb4xt2sUK5p7CUi9",
  "key4": "w3a8U3jnfn7xH1YHxmPR84zcP4HgyaYwJoL2KVLdugPZT2HQG3pUWdFzgusgSeMPabRNzFQ6RJMjQiVbKkBdZEQ",
  "key5": "3evG2nrpVkBeX6fiGu1ss9rD7RNMrFqhBxKKAEW8NVJc1CL2ZRwXFgp32DzwPhWKnADa5ExFKkSx4Rrbf6oBjrPE",
  "key6": "4JiKF2KySTuHe45zb1HBj2vHywDWsLP56qXvs4mpE8yUnNKXHzXKTMzZVjLzGUzJpErBAWXC9zD6t5fjtWeB6ZaU",
  "key7": "WgnKPiS9L7Pb5tEPEQkRbTA3cn9EBGgs4yqW8DBrTa4X5FKxci2h8uVD6eg7idMrqgQSqSoYHbtwSpMM3h8te4D",
  "key8": "2Gi6oC793fQo7NX3KzmAWrz23eQysd9k37S9iQ7rVbk6BKdGFQ6D8afQN2m3RysJt7tgZaRjCKJKLmr7JgQkWyMo",
  "key9": "4sSUnapHhfxs3PGzSUdxeDJWuhE31rVdZjTwtrWGaBviLJYFcsdwnKW8YQUTD8xcojRKQ77TSBrXZVjKSwGfyP3G",
  "key10": "4Tc1oWeqCzV7BjciafhD2KT7KzxeBDyxj6QRaLMAFtcp4gkEm5Zzcgdcj7P8ymH8LV4Usbfp2Dv5ELw9wVGFiAkF",
  "key11": "tKR3d49EfvmvCNaS9JFUXShb5JPBXsqcLjNTgj9T6NXpt7FHqVxkTtorCNRHzQqUzywYg88Nd8FZRLhfkDncWWQ",
  "key12": "5kNMRBEnsdUxuj1E4dxuxNK9FwWwZA3QYjFav45TCyiSnshp5kJ2nhQ5q9EwtFyiWdAsXBd7a9tHXqDaPhATsyug",
  "key13": "4XiPe6QDdAdMkpyGSSTHe1p3we4ongpUHdefrtyji5s6ocHq2wjstNEtywcqWHSDrwFh9U7wYCYR83Ky522Px1Ph",
  "key14": "64JXAKMbupNexhfuEPUx7Y9p2zCwma1F2P4cYVoH5iG4FgdmYaGqYinGJDELUaT4WGhA2Yjb4wnkiNWubEamgFSE",
  "key15": "2xm22fMc2HFu2jWMxRKx4MkrhKyW2dDeaeJnXHQGMrKgszMiRf1aPmAqS2epoUGmGAHEn2cs6XF5oG1fHzc7dbWA",
  "key16": "3sgRfWbGjzAa1ga7St6biyJg3tQAq1xangC2NWfWAAfSGHCjBgWTkcNNymkPuhBjSR85rF1M9B7EGyCxVw2Dx2NR",
  "key17": "4yHoJS5TZRnggbLcExxueSCLHcGKBYu6zriNNgULXScX46zsGQWaSqEL2Sc3GtMH2F7y7KG4H3Z76QosQykj9g5j",
  "key18": "MH47NyagdZ26JjQ1deX1hjCDdF7tzVyCGsJRJbX7kGJ1SMtEGNF1PqGr4baiF2y27ZcUb4JzEkctKXRjPA8Ztf2",
  "key19": "MhGZyi2azSR8EhRAtDBjQcTqsukJsW6J6Vq7iyKvpejfy8EJvrKiCCwmb3UosmBshptUB4oMhoN5eq35WF4LhyW",
  "key20": "3XJtMc4zg6GTtn22HgCsifp1AAcq2pisbrwF6MrqHCYuQMKduGmx8r26ggtP4e4TRafKv6pCwGwEgUS1eVRqdeCt",
  "key21": "2yF1QuQfiup6ntyh5WcxPhev6GQFXsreDqFSmWNm9TcQptvvbNKWKUJwztjdcCSyu2iRxoiLPZSJDidpRtbnyXgh",
  "key22": "sXQ8234BTkuG6whqmu4o6XX8Jijc844CM7W5rTXBxkP1QSquCXTA4s4q8pkXSomTHa1Q5tqW5jgZTmGKH9iD6SV",
  "key23": "PuKxDYTJaKwykjYnP4pCcGN9AeCJHhE6yDtDUpimAsAHBkz5AjyoK3UpFut8xAo1vmiKHBGmpnSNm2TT4m1GKNG",
  "key24": "CT8FKoDz3KJUtyBKReoH7suGxGhxdXtWNJZ5bMZZXz6WrToo4geFF6hSnS1JLnLapG2FN7GL1LirMyc3cWoYUNg",
  "key25": "3xSQkNcFAvrVLaxLcLRbS1JDC11jGKF9sjYrMN6j4QSkqv2UtUzjj91B1tjh88RrwVjcgSvqmcqEUc4WUxakc2yj",
  "key26": "5qPwMVw9ENj7f8P6mXrZbKZxRSBUABRfFFQq6atPzeVNpZGWExNyimFZEBQvMuGoJ2WZd4UchDezhKaE6xB8x4Jp",
  "key27": "4cWyv2uc1tLsR9C9qmCaKR8fyC2nc4ywpTqj6oTyXdVP5FqCeNS9GdLRv1eQ1PPfg92oVCH9QfGtnFNWiYUzGbG1",
  "key28": "4oWutmBPmYAn7KsVPx3EXHna65gfBN8VNsHY3gryo4beLsrgngm7PX4JCEj8ppUDwxRe4HarSssPjdkiYRPtG2CH"
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
