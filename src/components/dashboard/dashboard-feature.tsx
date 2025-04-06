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
    "cjribF1NwgUiPU1hb36YzyXau6ozXhogWWqCR8XvTkLo5JMHU2NCPWkFZwLvrXoFZuRyp4976H6xWrqk8t8o6y6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsuSji9mP6a6nrBhzSMvQNUbP43juF55PJ8WBNDtk614HChMGhTJauY66BR9zq1VJPmYMTGDd97UGo5WSyfNjQh",
  "key1": "c7BJnkcS81F7ZVjbDuPmSzoFfa6bPgJNRUbi15Jg4CSUV8KF5g82PWXEhqtgUujvuvEXGMfxwFCXV78p2oHRZdd",
  "key2": "4dS7b6emKia8WLKh2Pkw4FEK9RAS8p2Zya2AasdzFeRjwYvLVfAjdhYmKRFhD7t7QCZZJ1fTMHvoshYfFg7aUAXB",
  "key3": "2YRm1Wqz3TRpVn5uy4J8cZL2rKhzWK8ytoJpsvD9gZPgCwKAHD7EWPrJBEwj3cxaNLi7mTeYhw29dUFZEBnJ8rvw",
  "key4": "2Dk3p77wfbanJDTgCGME3Rszzb2KUt5WjUrfpwvdms5KoaiL8n9t9XfsNMU8F6BeiuwMMWLpZDCSygtr6uJx8PvL",
  "key5": "rNJQyRp5FwfiC6kdhxtTB2BPUPKB4Y39FmeuEqesDmGtYnK5MLHL1rBckTeZ7jVN1wBWGQJ6Rz3p2y4xmRJad5C",
  "key6": "A5nCBbyacjrocgGXtThDQvUotxqit5cys6WdJuDdvs86zvfPUVaeWCaxyrLPs83muCwcAtBFyq61MaZZaGsPfac",
  "key7": "3Ucv6kq6DdjHVFdpKqqnwDbmv4KjUDKHQ7YERVdi2yJdZQjuESFqJyR2VzgFSvzFUtCPTRHPYxPkpWkSv175tRwS",
  "key8": "2RvTNW1yzWrWj4A6YQCGAXcBpjGUsTetCR4ck2XtVnhdV2HkdcpmFRNmTCsfYyF9V9hpZRFfmw4GRAFqmNG1zQx3",
  "key9": "2vLZbgq7Hzyu5MXAPyntgygmHADj9LfzEDVHLkqGwxyMfyhx3yeSvvtKAB6Y4sm5YH4wgBRNMR1i1TQZvDHAs7Ro",
  "key10": "41dWDfFanMYfw71oCQCYrxGMkKcqg4eTDSTvjSaLgAWoP3wqYaiNb8fSHUTk5R2C11XgmyrjuKrhPB1oYNmLmQ2i",
  "key11": "EAXoBc456VHSq3XfDS1WCRH76cBBDFLpg4qtBoY9t2MZ1thraqNzVwTSwkQxomDoeCttH3THr7VmfW4ni5kYBrZ",
  "key12": "5aCCJTnyWUKpxfnHxFU1TzPatRnumUZQcKoqWnyN6MdmSRdrp6BZpH1tB5aKgELNc94tjTyo8VkoxRTZ4z1fcmHk",
  "key13": "61ckwG2MkTuTMkP6RYQ1ssochPMbCRZcrKtWE28D2ujtyPrcCjgvysVikS72LzgRormwzKpTDGS9PdWb4cdNtvfS",
  "key14": "4AsmvC8P5cXERcpFz7sXPvjczLLunramTBAKGtdfSD3KAZPn4yTALvnCqgrxgVVCiYohiAj2z7VEi8vjVvED41iu",
  "key15": "5rPi2VD8AwDSbPdLF5L8C9AwYQbmG3wUcwqtT4XfyqVcJhWQr14AFYArGrbQPYtKA3QxJzrJBEZMC3rkKN6gqFty",
  "key16": "4ztVbdLFSqUmeXGJTWwMoXPsQNr3SiZDiexAWAkBButhutKdkspqK1vCHZHvY7FjEeBcDZxHDjDNdD14NsrS382K",
  "key17": "2G2Gjd87g2aEx2QrNyVDgfSRimsXsS95XSyFMBPKmCyx2z28KJj6cAGJQzr4YPWvuqxUuDR7eYt1PR3pV735cqcK",
  "key18": "49TaspoVoj35Y6QRQBv98XyqAXmtq2zSkLxZQ31mD6tGQ3WW1QY46dwGVR7ZUcEhtuEU2TtFiBEG93PtjFtq7JRW",
  "key19": "3u2HGCzooKkGF7A7T7QSErVSVqXkTemdkX43vLwGxvxVnwtiAvUa7Zh2xnRRBKLngWiwn4KCFszUgHLBtei4nokb",
  "key20": "4UNsLYXWNUWviM4CrcZXA1XzEJ5EQ2kXobfZcbJThBTGMNumikNi6d8Ai5FKyXpmBPjsqczMUh6HeZE88BJwwAyB",
  "key21": "4pyABjNExj7rszKehDX5eSv3C8ahLWi8JpmhA5SXK8vQ2dceDZTvPLc5xLRhbwUXCnQp4cFvDzi2K3qEbGJvwXE4",
  "key22": "4TE1cPjbnjUZRNj4XNmHgGWJKV1JhFM79Kpx75UffXHHJvpnvMnWmiuskUE5HHJCrYEeKRtp7bKxKHFym36v4NbT",
  "key23": "4uL66na6uynBDYffVvxbnrYye4Xn9uUetFDXq5VtV4wmks2627N8RjVpcazCqJtX7bEFy3uvoya7SZhZxuD5CJx8",
  "key24": "37MuVwngvZC3bvyEdxrXm1V9dBccPR63xmupK1JPBYGDJyHzij6rn8kUGhw4Dt3trM968Zxqcrj4RbWty7xfCm3M",
  "key25": "5nESQDkoJQV8Vzvp99PXfhoiAmHzjAp9tuH7TVzG3ibPPf3ey5NUk5inFC19LCu4Udngoxn1E8C9A1nSqcLkN7mi",
  "key26": "63xAnVbfpnTpMATDamqPLD7Q3kRLJSjBevn9NnHnDkX4EqhZwuLCwFXkHN6D6Qg1CC7Jv5X2G9SZzQUPC7rRQZPE"
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
