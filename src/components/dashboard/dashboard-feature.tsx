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
    "597B6Ydfj5EzCVU1S4fZoSKQo93E7rXr3VDUMaErNrHPUgjzPGsCnhzgoSen7QcAG9yGRf7C2CuCCu6f4NQZc8RE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H29AuhiM62FXJHWCntoMNRwXN9iiNonqGwVthkKY9xW8aU88HgvNFTdCk48pYXMjLWFn7PYXUyMHcRzfsYJjsUS",
  "key1": "2f969oEmPecChwG4ogTbovEmn135E8sNXfHubTrGXV5LFbTcG1YJ4kyHSTbu77HTJEZTr3tw3WfXYVfnHaHPJAL4",
  "key2": "a17TgJLJSZ46jDZmtAKsRmGhsoiM8htkXS9GahL462a3YEfvnqeb59rwmM96endtsembiTzSX8qyHLoXTVnsFog",
  "key3": "5LbTt7PcXc2MZjS2Kiu8fvjiamQLTBQz5eoD2DTCMw6BbzfUW4419MrZCewhvpfdwXXdJUqWsXjzK8vgfavUsmQK",
  "key4": "4w1BP1veR35n3dgLsqNuJGiq5aDVtCAwtqRRvWG72QAXCKrA7ZWGavuL9WAd7AVfXNuJW2rUWcbAX9iBcSvWSRkf",
  "key5": "4yEZLmLcThPsbwpFrQUWqhfLCpGn3eYhjXRUfyY6ZJQwqJNrBWa94rt9SP67ZmAB4e9Ga9hbjbcsiCCcjQQ5kMgy",
  "key6": "2rG1r8YkrYUG1QrGEt9NvJAaFcLrjJ3S1jgdDbAoxsB4h1SLhp6qXcRkAT1t5NtSNRaCfidchy1UkvpoVS5f9TYX",
  "key7": "66Et9n3ZKqQcmjWFq4hf3F7UCudqdydtbF9T6cMermXtEdut2kCUUXjJreFU7Nw3ua6X7LBd6vE3Hy8dYjf5PYcp",
  "key8": "2edvsKGmxPVKitxndNxya8sacXqacyjFxnFD5hkaGeTBNcr2SjMLzDofx6eF4Xubddj4jxoebJQmKStmWuCW44M3",
  "key9": "2QmNttN4yywzmjTdxFVSSCAqFKHgTwBxf4QoisFQ69T8pQUnJPq29LZJdFugEX2uRapDVutaticZjAu4G1uZYPca",
  "key10": "5twganeWk2U4K2fZiDNjZ3sEmwEmdwbQuw89jDqAxxhGKzVJvxHPkvsiLPCFd1sWWA7sWbtBKdave65F489JCgpp",
  "key11": "22Nt4vRhu6ni5VR6eof5eBB5uPqroFR5Mkaiom9v62iuBn2nCbG4xEr28VbRpnCsCDaDp9CrqfPhin69GoAjcSnR",
  "key12": "381NstgAc1b1nKdJR2vwkczJheP9DYWr3THdQazUw2PZgDxqh2gv7dZuzoNEaWFMfkKF3fAzVpi6smBLAoWba6b9",
  "key13": "2aU5xE1nH9CNzsbVU7LptkdainfckM97TUy2ke5XgHSkKuq9hPDjsYtCyKPozRhuy2kJ5ph4DWsBP3YDeTLhJgzP",
  "key14": "4E37eYMFD1vbj1cu3rR7muaCJ2yaKCbNmRmt4wayBBBCKe7wqEQKGqrvZgM96zzRELpDkarwauRrrNnnGKoJHqEa",
  "key15": "3Qc7zQu4CiELg4LuzDdfW5jKFjgSWZE8MkcqhV8iFXKifRs1Du7z6iCYMBqFSwB7ZXpWfTjMpPj3haVzVD4XCp7N",
  "key16": "4ogZkFWobRoNBvKpLgCJrbx6gQd5uB32qZF64W6msVRmob7aTBChPGL1vxKixuAKS3Zpmf1dNMKVcfwc4PhAAVJB",
  "key17": "a9Nb7G18fECK1zrzakUs243iByv5u9sUv5emC4tiGAUL6JEZLVuKj3BUZCeVsRKXBQaJRsNpeVft6fUoQSQX1qc",
  "key18": "38bS635BGdSXfc1bYBMBxHSsQTF1WKoRDmrY77qBp1znCQ3bnpXxSFmugS7g3B4GL3RzB65XSiNwZG917T67uFp2",
  "key19": "5PuZEyGwBSTSvdxVc2BKNFgZTdiK878YfjHBuqZG4MNVpa6s9wBJPUnsRqyRSGRv713AqcdEoUBfMrPZRuByTBi2",
  "key20": "2hKUjBf35z4nQes4Yvh6drDszqdxv8uEAgBV7M7TMEd4HiQY6V7ioT6EgjannpM7nCwxu7VKi56LDdF9XYhsTNiE",
  "key21": "62JPfPvvH5Aqr2H1JJbdsipXEJ38TdMrj925zjqP5ho4hUkRtnACuKv32wyzKNUJTvN5en35qHt3HNsMh59QxFhz",
  "key22": "5MBmHGVFv1CgSjY2UniKRB6ZdVL3eLjXZi12hVvw9AxzaY56pLCvVpqJrNoGxhrCzqzeLJDi4MmU8te5ynXvLM17",
  "key23": "5D51zmQmMRByLsk4gbd1QTDVfHXy33Da694Zeokd3VJZqtFuxF5fA9ZRYFvqodyhwR9WThozFBEoEAkUsEcygRHX",
  "key24": "3zazA11JZdUWVVPoSpxAS1pZLWki8nTpS1ca1SoFNmfHj5jhWm2j4Ym97aNzZ7qEVmKAQSv81U9kmQgn8vRBX4JN",
  "key25": "JysRrGYfDXkLDPTZxc3k1qyp9e8KWZoxe3Tfs3NopS39ksS2KQw9EYByUKEy61dmPF2abRMihkBNVVLowLPSt2u",
  "key26": "VPZDgQkKtiej6k9yNCA9yXRi6tpPFEGFpdD5VtwNak1PwF8dC2fWF76WeBuvifA11DLBnjXPzuYttqQaapFFKww"
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
