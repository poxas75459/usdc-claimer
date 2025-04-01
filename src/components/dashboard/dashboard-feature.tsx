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
    "62ZxRDCAbX1hfHnTBkWhEf7Bq3vDp7Gad4QpZaHpeXmXAzk51exRHVAMevjHLJtaGQK9TmTdhcvqHyE2uYxWRHdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rnszs5Vv4UiVDJs5qvBGD4rxG4FHyJwiV1y3Yx2pJsMNMtC1pCKccH7wyUq4XUSHt6ohDTwTG9wnuwU5D4E1VVg",
  "key1": "5ZgcjDYzkdU4MVRS7Gfogn9g1V6EEaSfXw5cBk235TCBodkAGeijbDyG6hD5EDk3wFBTEn5sxn7FC7hXtXw5bfMr",
  "key2": "yxevvCU8DEeMHwArWvBbhSMxoWwbjn9aUPjaBTxF43uqFLnz4vYGdkxH9Mk7r5L94bmbU8GoyKzsuiDwZkxJ6Sj",
  "key3": "5v4ZDFgRM92wXNLzVbbjvLFFrfa4PaKwaA1ttg7SbEcjdKoWw8u5p7iCTRJMvxRBnTYTF2ExFdMe3BmXyGuSPsmj",
  "key4": "jXcrfbx8szRtW5m9vFAuMzhnHPHHPXbNDXqz3t2mHBPMd7DPi8uig5i6R4CypuwERZyKxyF7PmNJytiTxtNezrA",
  "key5": "qoG3ZhJETZZG4KfTjGh3Kpp319Tcoz7vBYE3qqr7G6eHT3zxFUKR9so4tyaPtQdcskiron7MLa5S6rjH48KdpeL",
  "key6": "5zFyLjKNx6YRAi8NUB5eCjDVBwTdf1ZiTm5ZXPhE2Nhc868mPMCanqmiJbphxWieb1Tm2QbRDx7FGUJXJ5zLz5Hv",
  "key7": "3QkQH8QjikPnKbNMbW2FrGZaHzMgPSnL6LjiKUJP388UN3kB8oYgMb7toxnDzqNgXzBjbUQLmhkLvykEwNX2aPPk",
  "key8": "p7uCmSykFS7zXoQkhYaEtEkxJyaeewU5pcTnhri7sxt1B7aQ5py1J2eTLxfSGogvbWxqN2bxXnNgncCVkBzUJvF",
  "key9": "33xyP6A25AyWZxYN4og69htb5VzLM1NBfoTPYRVTzrDreWoZBrNH6KsPcfzKqU67rW5UjLEvdFPPtgshkiZ1PenM",
  "key10": "4AQbrzB6KejUyYxtTaG8iwcqCSrVX37xyzVtji5pc7ZtQfbp17aSg64XfNQqrSRT2tPdmwWUggFhvfSBYyZDUWKR",
  "key11": "Nis1cxu2kRubRWo2inkKSE4SHf5jMqytMdJJTB87ZWXgvT2KfP2T4siHspTUjLRCnhy8DifrFZcXwBpkhWeDTiq",
  "key12": "2oqbr46BfnhL7k56pyUUbRBLyhg3DShLaF7cx2nyN5ip3qQxC2NeDw4LaewCgT7DZLWvnthd51gyWL9umAeYhinq",
  "key13": "3cBZT2SnCcn9PburAiPRT5F7wVMeFrRGnP1fJXfCCDrsXmCJeiGkyBxUFwUFs92Tx8BE62MujafofY7VvqQgdcov",
  "key14": "2ec9fwApSNQnEyJRQSuxdsDcePPGFm6NVNq2fh5Yts7X1SvARbTsFMPMG4PJnXbjrqwP6tmzfCWQzoHw7g1JafsY",
  "key15": "38m7CkCccfoT4L444MR5pDoMH5vTmDYAHPWw9R5XE4NAWZwNFYnaivBVfrLvpEFZGZ5hL5Np9Ca3wtfxHLjq2QDB",
  "key16": "26L3SKUe8L7KxBcMf1GbBSBDwjHoNwjXdxZDtZ3XNF9eAFb3NFktUSEVDjem2onyYPQmaL2FCko9vtBELFBMiqJY",
  "key17": "4VkU2WgwBTYo7G3Z8YDFWdyiJFyBXk3hQEMZZz4TySfYmGtUUozJgDzbwP9vh5soo14Javj56wXx7xPGrGdZsvqS",
  "key18": "3NDH4gQ6JfRAdUEBr6nqoLAqVhE574dry7Jzd48HYCZRLwHBqeFgBFxtvxxZZdmDGspXxMAAAz81F2cL5WNBdjU1",
  "key19": "2nyuyTtLT7siKQuab4W9sessoTcpyMTsdNC2pauEqxGa16W2dQWXVP4qWYF9UtBS6DswdgAUH383SrpnBpVfp8wH",
  "key20": "4TEYj8BU5dAg2e5FirLNTco1Bay7zLagVpaqAjJ2FMUJFo7SixJBVtwyv9umWGB7RM7uZaUUvHVFtHawKUd7EG4z",
  "key21": "sdQhfTU8E3yhGiUYRg3KsFFhpfpvxRhEbKAnRHp7iPNyRanUUoY5dM3ijivWvEstQCxFPSMXxnSP94L3cx2YPxV",
  "key22": "2dLMDNrnWUm6epX4vbp8e5oLa8TzNLq3HtHLtXMsMRgQjsrWVPBHxaSPdd6ETg4qb1BQtH1r3GVWJzAfSkgcvuS1",
  "key23": "48UnHpBrqjEhfHfPCbSjNwXwGBKZHG4VZdfiZ7arB7NSjW7BzbfAPfKE9VTyrUpv1utwkdiag91Ss9aFAEHPVaYp",
  "key24": "5H1fm9kYE2ZRoPQfA5ugPhJa5QvSr63V1SwpEKJFdLp77wRFjQKK42aqkRMCg2hhwLq2j1tzagESr3hBndqGU8HA",
  "key25": "2Hct2r5nz9RiTUrBrbtA4t14T9jZn8fPzGVm5aRp26aZKXh1GDVzUgdiHo9vXovJm2g57GQvHH25KgVYh2YwGhyz",
  "key26": "jHJeGtiKyWyoMAbG6z4E9b61VZ2umJupGC4tkHWFQWMrBacDrQYQ1Lmj2Qr5pg3sS9BpJEdddNy2wCBgMmjL1Qc",
  "key27": "7MhmAwabtU4ck2YkAUvjF4DZ5xMdxAje4cufaXcJoADYtQAcyhzPgp9r6qAZF3m8TM1WzMzVzqawh6mjEmMNqZM",
  "key28": "5XdLoBuUNHgKY11BTB56gPXZzWSmbCgkXkhFgojXy9XPBZyZooFU9Y2rqawfczMWvLMT6a9osSjjBAcfgdA1AA6D",
  "key29": "uCHHy9tgdshjNtSuyzcqtARqpiApQSQ16qmStyxVB4bMx9788Wz5HE3QznxiRwkWmC17bsuQn9vekvD7R9gZbzZ",
  "key30": "2k8fidArHoqu5GzTBbvfsVZa48pDAjvPZbJjTB3Qn9bKkd4LQu7W7L9CWWuA1MAzGdUcpc4i3xb6nvxsumgHYMHY",
  "key31": "4qwv8NPvPcWGRzEqN1AQUfNdYAnFDRW15vshvuoQvL4RXEo2HyHeG43C6QqMtFujADx5RWvv5ME3GDKwMfe7Xs9b",
  "key32": "3NDG9xQhYXySv98sAGwsxhTUs69MqycE9y1t4UbR4nRQAg4M3RCsizUuWoeZmjq6C22rkG45hkodUfEkiNECSGgP",
  "key33": "5Ww58kkKtdxf5GDK8LAntuLzUanuyaLem5kXMsGhAw9WhXMyekJ7bn8mphsFsse5H4CTvEPbx5GN6TrBkLUZP4HM",
  "key34": "4NJ9rrAVtHmrZbwxHCUvgBxP372JAd6Yx26VG478an81hVrC4vCteRrsWd5g9VbRAgiyXKySoRpJRKVnTaMFere2",
  "key35": "3Ak7XX7D1q5pBSjpvRmZaZrbc8ssnYuh6FCG61hdkjThaZuDARtn5r9ZJqHce75mUx55w85JPEyDQE5nGdEQQri9",
  "key36": "2eeWYrhcp3SnV9T6tg9hQLY3NSAzcbRkBwbfWJ1dmB7au6tyXx3HAPfN2chNWX3Ft2RRSzewznrhjDaFpFCUHmjT",
  "key37": "63A4VA4C2oDvuasaAt1rXhq64sL8aEd895pwnSxabPubUpqA3AbbP3mEW4KNxZosLLsPvD9cbM6k8ktwdoPnxFMT",
  "key38": "4feRj749VAXyH7paUTeU92ey43Qb1MS8PX2yUJwZDa1N7SWQsZZtcRjLNLuPGoySTQYB2DqQwL87hMUFh3jNJ3Eg",
  "key39": "2sZHwDJ95rKEfnKmvyXh4Q5FoPzyfHaFhBtMogd3dxNgBnqbMt5gewfCWGJNGWhxqU2o1Epv6eU3AWGi6PvxMzDf"
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
