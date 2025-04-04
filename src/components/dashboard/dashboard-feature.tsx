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
    "5C4tuL7cwy5UxJVfejBp9o7E9D7UXX9nkrFxWHJHukpN3TpQV3B3UatLCfhSg4yDdUtUy5EMcZGXWifUmBwQF4Pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SC6QcMT9cdUWw6nL8mLmMrEj6LqHrGkPW14ngaWeSZrw32MBGkdJYSkFemJygMjCUD8VJxQyowBuHFn2Aj5j9Tu",
  "key1": "6NpG2W1d8MRHRjdVVGnqiL5mdMAd7xqqsAYvXWJgWjBUVjyJH6KSkEFw7WmE9Fr3wo2L827ywRDnq9ySmbeJh9N",
  "key2": "PJNyXvJ7cw7Pyg3CpDXm4MfGsa814DCYbWmD99k93qF1Aj1ZQRoaKNxGdZnsMKBd2gCN9UHKanN4TBGrxoKau67",
  "key3": "dxmBGuvuNYvNneVXebGgmsYGtyq9azBVhLkhVxGNEVSQojaens2JdhfpzVwtVmREEsXnymwdhv1oGEdpV8dDJmM",
  "key4": "41njDqLce4nSBsZGSiQiukgszHee8ybpRt9JRzhUg7hxqpQCphPTWkAR2qPbUyckys4imoXas7n36JV8UBuHhDbQ",
  "key5": "28PWfsdtLnakgmd1eFLwsqR1oLMeiEdwksPvF7RE4vwG2eiBY9hZnxWfPwZt8am6y6ZrVad5bMdDvt5Hq6E4TRXr",
  "key6": "3TP7dn4kTjBwNicMQ8Xn4Z7de3V3aPwdxp5yUMPFs8f1p1RHMZmqUkdeePtQbzrKybbsJMAAxQxgJkCb3EaMxCFo",
  "key7": "zC1a1uh5gLvNtCoKwwLGPfpasWA8qqezpT4FP677bRQJDG8k9RFpxgZPLrFpR1xpp9ZygCV8pQ12dfpzY3VhypK",
  "key8": "2nFmXkEz7qagDDH2z3UoYMKcPaG1y8vHzEy56P1VEGJSXSz1XkKMmdAX1FsA4kenGNo74zBowJ2ojqARg9veMWxu",
  "key9": "3fWcexZF15FbMDtEqa3Xcb7ErE5izadtCLyPXYgTHcWQVjRPvBjiN9pDuwFHxyd9jrGgVsaK5S1W5RT7U7rtx6or",
  "key10": "4VDQxNEtBUSCg96B6Ve5GDWNnTChmsdsrc8CvT8FqahC7RR4bqrCVSeUCxr6gToef6HttBhiBLyBjzvgzgzapQLt",
  "key11": "67iw7Bkp6x5SUYHQjJ1MZSMVHnbf5aMLtAHEPD58HJez9A68F48ttcXJWzTHiCUYajSKbLD1xEX5XagTX5Rf5uV9",
  "key12": "486Z8HQq7LVpfUZ965Xfv3ZmvLvBfQSLmz9QtmyXsptk5Cpr7AWbVZ31EpAoPxFhCgcxZWxQZHL97tCWDyeYYxWQ",
  "key13": "3mPbzRAzpvMgefsFRDcqkeQusEfqoafgT3YifBHT89HczbHVBpmVgEka7hXyBnivAtepYb89CLF5zCmmqC9ufW1b",
  "key14": "5QEAu7mQXcri1Hzd9HRjYaZwy5nkZ8HFBgznB8EojZrmYAwGfsRDxtxD6P1Vg6DPeNRdJpm2K6Za75QttrjrKcac",
  "key15": "5XXV9FKEC5xUkyPjNPbA6kmgya21PtoNBGLJEUQAemAM7mPYFJPvyzgMbaWt1Wq3T1bp3HtD53X3cmWRZTZH5Yvu",
  "key16": "5wGpUyoH9p2rHpNJWH14dCg24hKkBtERmeTSjwPX1mSiiqNZndajh3DHi9TWaS38ULtzpyfZDhKzgyRFsedqLcSr",
  "key17": "4sKcicfCUZMT71xkLfsQJXh1QNbHutGvvVPQjCSDHSzocXpTMR35S9fm6tYJkjtvbCKDC1ui8KfFc7J8QMyKx9s",
  "key18": "2Xci1peATo8B4pnQHLaioEJDYFrBNSHitErk1sAgo5g61UKux8M2yqdFb5vvYANN3aVBdJYuFAayHJjb4jpJJrQS",
  "key19": "KT36wheijY6DWHpbTLRQitVNg5MkDg439Y1imK2kX6AYJu8qyMy3rmP53ZohwYngX1AXLfebQ3KB8gKt5gxZASF",
  "key20": "5xVXqowd9JsPrP9ZqzJv8a1nZ5VDLVZwrT8cfyoUtyuFaMxLNjWtWTh6LLhiDwPJyHEh5tZ2N12MiYZKirrAYU4q",
  "key21": "38q4zXaQnQuc5Fa8ARhqpdJEHanY7TYi7idZi4Q1UxK6sMRHCZ99KWYXfbq9qVXwS5eVdvAhRCUEwgcYwiGjDk2A",
  "key22": "273dUtWCuCBrspE6RF3NdgPJgNKcMsXjhZctx2TqdNN2zYBxuVVB2uswySwATze8LqxsEGTJ1Y7Z1w79T4CMfjhE",
  "key23": "5WJwQp4frWMETDsWboDtSyFq92uuXRnCW6Mc3TGfRkdZ78qjyoS1jjPyc33W4kUiVBuqx8xEaAHcqusSmR3i97gL",
  "key24": "3ggmSzpCe2b4dAw4Sge1aMiYi3kfe1K8uj1s21i5WnvSnQ8rG3k3nH5R3QkiFL9F9xJXa34EEtZdEBvksZP9trBh",
  "key25": "4NcNQqM2rfGiMrrm7bADXMYPP3S6V59CZYmN58M8vrd59PjK5UcYNj6E7rDsp9Ge9LsopDaBy8giHTLMbGK8pn6q"
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
