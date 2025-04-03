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
    "5z9yUN3AM2MjfADhSdAB4RFBQF2bG61Y1okgnrNEiS5LmdiM5Xz4sUzRhrjQB2qM8xEfBbHi7Bj3tbycq1pcMQdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EGz3fCffMwuW2pEyRskLYeVyJj2iQ8jgDyoMDtArVNzZpG5AxsfYYwTKweccFtaUfSFjBomx2Eub9wVk4MnjNdk",
  "key1": "5tpzFRnBYHffombCwe7cG4SEHCQq5aJVTLxb4q1AbLqXm9ZztmvhyHtqNphvidZ4zd472nxsJ5haBAqAH2nanBaJ",
  "key2": "3gDY3sEwAfRGXhPPRohy83byGdmB1ZUZ2mQvYr497xVxAXcXmJtMdJRJ1XxXZ7y1jt1xdciL3aeeJQo9WKFq2ivv",
  "key3": "2UYLva5CMdM9s59qM1gcPW11PZArFEF1zQQREYdUPM28nM2RZxwVfi453L2TZ6HEXUi3FkSGa1ZXtHWjvUZYDgvs",
  "key4": "37F8PTZztqXECgqHUoC9zuf7HJNhmZftkLjW4JA1411vBLNieZNqTimSoS3wDvN71M4haUYiyBDKXfskKvyqwBU2",
  "key5": "5c3FoXSURVHtq85f92r9HiFyLAteDuBv2WF1oL2KKRhpYjoKnUPX8nysX5j6qXQtj2b4DLqBBPYhvQfcGEDVWHz5",
  "key6": "2BQeAYPLzqMFgXCQhJCc4AWRpBcdXk6KWeHd2nWXPzaiaQcruVB5D6JpUHMFLC1fqAvfM93qTM2V5fpJyrNCajWX",
  "key7": "5bhM6dwzrWXUU2p9NQqa3KNAAVipnwfj4dKtWpktZGMudUSQJMFFyfUsNcWnbAejftMdhczSGdra3ZJ456jZV28s",
  "key8": "4RtZELBGHimyfyzKK5jrGEwpzDNi1FJ5DQTSnzP42gAZStjf3wpaiMmexX4ED443xUUnurgLvLbP9hnJDxsFwK4P",
  "key9": "4gN3Pb6CsVVy1UuheaVQTqTzxaKjUnZMpqSuGZ7h919AHu8vDJyLp7Wa1QMkcfknpYmgNMbnD51L7pKY9GHiF3Lm",
  "key10": "2CHqzsT9NBMk5wUsLTxxgVA9aiSvH3EnjeR9p29oqC3hHX5GTHoavNNjZrjpZokNSaX49FtogzKw4ne1yUEdzEao",
  "key11": "3eTdbg8LAvYFnKmtcdwsashdenaCqhQuBb6Vq3WYPEmZixDG9NnTXDAHFuoaAYWt2kPQYT8qrM3N9PVv4ivSXJEZ",
  "key12": "5RFNYdE16hcy7nD4nx8j9JAvs3qe9p49nGA5vx6jTFEUTHR3CXnweVTGgNtHFTDjGpendNN4fja2sHJse9ibkbSW",
  "key13": "KH3nZKeePm21vej6ZfJCnxuwPnXbACU64rF7FVXFVH2s5GtUGpfP9vws64D4zuW6Cq8xkxkEtR7KVZMLknUAxB4",
  "key14": "34zqfj8nFu19UwjeTj41nz365NtWkxSSBDgPgiwTVnim2wCs4utieTrwUkn6SG67PPaJzQn41B6nbqb3sjBH1vXM",
  "key15": "5LXSfXP9XjKfA2biSf3degmQ9xNj5rrj8aCjVH7RN5WELkxHA3kdaYWM1co5zdj593qL6Rg6PoWWxQHxCeTBBETx",
  "key16": "5YGcJzqJiNDgdLivydwzjCsVoa4Sf3N8TvDCmAcvoohSxhRsD6RMqCjauTvsswWfSgbtGMEoXUDe8ZHB9uB1Xy9o",
  "key17": "BUCVVkRy99cD8xreBz2HKo6LudaLKLPPi38V75gNZAj7vDwdstvMvts7PPDRMiVAdi9ee8NVZn2Ryngdj3tHr8k",
  "key18": "33jC5qKGmeumGhoHPEMETWKZJz1McUp1dhN2bzReVemKFm87YX3jUBGrJhjWmbhuXYAMcBuWu5ctgCZuP6zAQLTM",
  "key19": "4TAezhNZhG5pF4y14GcfJzp89PJgdDKR1ZyKxvrzAPPPWcGuWQLr9iBDwS3vAARtPdTW4yAxaPHhcEybfKHfnQiP",
  "key20": "2BPkW5obtVEqgkyv4kmETZaKX2iSbL9ZZbT2wV91Y6grCaKNo78995fyNF39Ayyoq2cb2c5SQT7EUkkAiLMzFGvC",
  "key21": "47bd5624KJJ9cSxtMpn9KSvQMkKHdyRRTgFVCMVCwFp9oo3XZNYBnPmyzCu1LGTSihAQYdPE56gYr2fwwx5dvash",
  "key22": "2NsXiU9cZ1rTSGpxrGFyb9cEunUGYyeS9XbdSuTS85zhLDxyHai63DMHKYMY4yP3bjXeDsbCjhe552w7P4mFdJVh",
  "key23": "23KjJ45hXWT2QffmKMjcn5ZNor8sb3ms6Z1vfaMcEB8xcHnnK66C66YbiBYCH5bHa9SvtREbmtcQkTVxTwKW3rhr",
  "key24": "3EoTfknwAhJVBKpLLstCbfuSs84CUbt4bQpSQZsjju37o9zXmp4U3yPDF8steEs34kZZBbacEnRpppbcAAp7cwe",
  "key25": "KzYJEEvwrDU4V9xVrXrmmqUCUedvFVNhSJW62kE7nzVDmBG76TGtcpAoc2GtxvxMv22wfpif7k6NCMpStY1iUSp",
  "key26": "2g9HAXNvCh9dUpYkC86p6Sjhf58ApWZ9rJ7Xa1QP5KGR4HkL2yBP9GPPSPogfcAdESxVjhpA2qbosSE4MPZcDj79"
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
