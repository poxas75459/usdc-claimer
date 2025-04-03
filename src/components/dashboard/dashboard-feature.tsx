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
    "5NiepExKCDE4HS4vZYaeAKb2b8n9EmTDxXvPp11EQmUZBL96gkxMF1QFVDYq7QwG41gqjdBR4MkesgBdNEnAfGnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LAeHoiEPvUsBtciRSyFXwmaxwBaZhYJinAuaby9BdrjroTqsGcwhcB8B9AnUKxx6CvNVq1oZr38QjhSuLNSum4c",
  "key1": "5YVVi1pUn1UymsAbDYkSDbTpEELdxW8MY3iRmz7RxkVKz7XmB83QcyYHzLejqyoMMrRGMG7EcXJFMMA99HtHaDTY",
  "key2": "4211C6U5VJ3GgQCWMasfw9YPc2rTXKYS8pdDvjopXe3SeTAQz7Mpxukj8Kqp6YhJV7h61qndgtv9PvipPd6FpzVw",
  "key3": "3LWsfavFqdEapDi4n8sLBS3prm2W9KnEjvFc99hA888vJVBxgHUecRugKYPnCKG6bNMPKdcUmwgMc2jm8gtoF33k",
  "key4": "3jPvessuQCwWi3mNmVThhdrGLdZCE6USRRkfunxqbNx663rbVjH6wvhJEPobtpxZuujgwzKfJLXj7rXRtoWjrGcN",
  "key5": "rcmzVzPKJgKrY27SyEiA4cm36tTRxyFHPkbYiovVBTGBGPedTNtAQNReoE7VUcHBSuMHi7yMuREaVWX3yU8otg9",
  "key6": "4DmRJmbmpriHaAhX7KuC8ZnYM3wNfzEFw3nqZQ4SKKaJdWjpZySLyUazf3YVSKnxVMnXmUd9WyNMguzHkazPCggh",
  "key7": "fGRNBq7tasfAgvU4tMy28stxwRthxF15WTb9txsmRoJw4jbJpj5WhPzM3Q8pVRQ7aahr7efzncx1qUbKrehU1CL",
  "key8": "56H2umrmzYjSewgM6eM2QWGPQErJ2nwRY65h16tqNMZBToWPe4sJVb7HfTFy9CvYzJ82FDf4B9WDhVxmoSagKU5Y",
  "key9": "5brmk9mB9kKYwDxRH5mnCU7JFqD4UPTTUekmkqmJ8kea1GSoEnjgodJRGH6BJqd3912UXKR2K9ntXREUC5emdFcn",
  "key10": "Bv4VdkzshUYsSWBAnocuHXnRofq4H9pWvDgUVF6i6TfP3F1quMU3v4DYi7aTfJWSrJ5shJ8vV8cDRqwBPmWyfMt",
  "key11": "2shZyAWzMtPNPMH871J42uv66zDNf8k8PurMnkgyhfmqk7Vc8PZ49RVfsXzeZ2VLcwMdL8MwNVR8hsZhRzV3eNNw",
  "key12": "2Qj1bYfsaNEdY1pV8V1S93PdExHHej7CKmrHKLwnvimHVR2cJj5ACB7zT8n3zcLW6GUKjGZrmK1WWpPQRnbxLEvA",
  "key13": "5AiM1RcWtoVoyzGM2JSRq8FQSEUYUtPRMcgaQ8LiS4GWx8xdEaK25o2xKpEX86GPyTL8VY2aG2nrAFFXomMUTDfN",
  "key14": "zdtcqsPYb3N5b3Edn4ptAwa1fwBnx8TzGWtvFMRjgPgvffNSuF31iT8opBUGLiKxJdLrsMoD4qoqKTTHHJ1dJL9",
  "key15": "21XnEi8Zi6mQwqYjdhvpLf6pC1kWfMK5FKcfcy15xiffkebtfhJwe8Xjttv3a8Fsd9xaHBzhUR9sWeekn6BJ5mXF",
  "key16": "3TZg3vG75c4x5848kvFHR5DrTb4tkHDJWqG6Wz3E5RC55bwmoKMw72Rxnz7UfHL7N3ASKnS2Ktt34f2Ni6Y1GCMA",
  "key17": "28mWt7GxYicqK9nNohTuRVg7TB4HtJzAQeK94XV3djXS2iMDGhXxbFr83fANk2cbz11B4FExq8DMgWxfM8PVvS7u",
  "key18": "55CMMjEDNVxdamP4xznpAySfWnoWLEZBj3a5faVXHZpRXS4GSm8j5sMJB5aXkN5nwAftYaTuuQKj4cMrm9WF75rx",
  "key19": "3rLSSX3xMoEbpbXMaHz8LuRKcdYudkecc1UthC2X42KjGwmtNHDtFF4Nemz8okdpCUvhUa3aRuTtRR9mg4yghxCU",
  "key20": "5q3hFmWEBbMh2XoUmwepRAaL5bmRvy1m1zRqexitpdGJzvQ24E3UxVwa4Dc6CiZagJyXCG89VASf5A6MRqP62yZB",
  "key21": "3kmqNwfy3gBfAYgofVNmEEMzxiC31GQENBrDf1atEwBmMsiAosKP2QU3NbVKFNkoDDNRebb74cqzo8xLpr9KgWjs",
  "key22": "66CLpRhb3T92KtJv6DXcTdHFYMcWniHpb1HYR9HR43hrc3NEsBsP9dkUHDeqy5pS9WRPFVa34tLTEeAJ5mFB7J7F",
  "key23": "9X4SAQw4Cmj5vrN4YJFRiyS2HK2BJXFFxF4taZxkcxf9461STfQbesKXkUAX1CprE23GrXgvdwUeQxtZei95x8z",
  "key24": "5RRYfNKAjkK9WZSC1paABFBrfW5MXMRdtzXLuTfUt5T8UkZ5Jd5yCboEu7CXUyRvPq9iBgm7136VDSdnSt1neTVe",
  "key25": "4dE26BdVEmszzdh7fzGCWiHJcdAZEZusUmmCdGQYJke3VbU8DTfpvbBgi8dHyQXiHR21twQaqbWTjaB8yb5s1h1J"
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
