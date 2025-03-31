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
    "4jyXDgfP7aDhZcyugTnr346v3DBNRXqsK7AXPdPEzhZAWz75AxWt4C7FWw5W6cZdFCAhFcoHKpzxz12b61pfSzL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JvBS57d2GeRVNhi7MvPaGTPicR5Z7hmfk8qXs9JrYknUdsMmjREh3E94FaiGpNAGYDpRdsAX4xJTVFDcXBSyab8",
  "key1": "4twPRhqpZ2UNbUWzSMTH2Erb8Z3ePT3p5fDeoRLq6uKFRvoFv4pdxfkVMz3V5JCvnwsLint4UXh528djn3mBZreW",
  "key2": "2PLZk9L54RPFc8rtCEvXDUGR7cVzppUqHTbrMu2BeaH24QTsVua4r8py7nySFEJMB4epmeh8C1M8jyB8UVvv1PV1",
  "key3": "4EbSAu6HaFZvS3bRcRDKX4ukgTGi1TXCBz1tbkT3wi8CSGSgFpGpKT2y681RMtQsujY3Vc6eZie96KoSS4p1R8Tv",
  "key4": "4X8YHXr9eVAS1htLnxmpnycNtypZVBXfrN6xaDHCxCKF1VeZHjzRF9exL5RDfejpi3dZshV2DoseykmgBKBaBAWh",
  "key5": "32ZppntvUQhSFnpoho2mJEwzZcNHGPR6gWNnPqDXzTsjSyi5kiR2e8BHYYBeHiu8AE51xMtdHe8B6tCK7wkJ8SGX",
  "key6": "2tpgi1bwqHBTCK2dwZthSVC2bkjHKhDhQtemCmEepvReQkxtPuCD1u26fVn8AwegCJBoMotiLjrgdYR1ML8iaTv5",
  "key7": "2wURnkDH93g11EooziSc9mNhtiTy6fHTnFy7YNmrAvYN439VoUdsaJC4P77RnM3xG31gYmb9Mk9U6832EaKFSkPV",
  "key8": "ofTgKCWv9z92gZWuiqczJc3mCZpDjyDuNVyWXN5yvR4nRTsv8oJNMe8mqD8pHS2iiAjG85XbSJB8PczRaMqGHmN",
  "key9": "3AkMWfoLxEqZH9am4qqt4xj1YK9kDHeDFqCdqsamT3kxvd2dkfzF4pXAykiyQU41AQ9f9CcND5d9711ASKKcA3MU",
  "key10": "4JXAutgpT3GZvJXwEtVbq3aEkZHb26wrCKAnM2EFQHAC397Cegb7TH6jbsNbPdyvSNtbf3j2yjXrZ5CP7nP6B1GD",
  "key11": "49DHNAD1cDA9WBfc8NtEjTxLVJJgHVbnSBvpAXdMvaFAZjYAZF2m9x9Eh8T8jnnE7qCm6g9KSa4jHNVV9SsY1zgQ",
  "key12": "3hL92LVbGrk2bJf7gjRa9MJAbtwytKVQHPkx6WkbLHzy1dGgQuVEb26cJuakebRMftTyJQofan2G3ReBhZvh9hmR",
  "key13": "uU1zY9qNqxyxdQWF9XyBaEBLDkpGxiuhNgryFHFkqYoabBYRbr2J1Q2sFJfBUuDraJABE2H1PiSW9V8rhHs5wVW",
  "key14": "54rSyvzRzwW4f8VRweqKH3mjK2mnPm1UuapvHHJ2viPzTBUXW7QrjhwBeVpiJa7oxrjMeAqW2ksxn5N7JTd4WaYR",
  "key15": "5KdtNhciozQUhfBdjtJGN2My2iewDGnUipdsDSZoRCDVKGSg47NQ7A3cw3ApZNPqtvRkkvBrJFVKKpDWfLqGAcZH",
  "key16": "2PtD3aLW4aPsSD5RQXzGfcs2Uk8TMJ99guvbspa2XtpYqkvtVExX519FDdDznHJw2prXyTqQGYJbEV8Y5kDYfabY",
  "key17": "4XfgyzW28estcxXZK5Tt49Wpx7rypAoJgxVCtjD8iZwnZEo3HYdafGQwgPsB5mFPwFh2tb5CiurARPZavV2QCmaw",
  "key18": "WuDGk7bzrvDfXUV1fZ1djaeKag79fKLB6DbVLXYgHKPMnCkzY7xdQ5uAAk8xLNsGz1wmCYQc74vmmKjbmdU3DzS",
  "key19": "59gVrBM1FoibqrNQcXz7UFWWV5wSu1jJ3bX3PAPrR26g7EkkiZBu5d7STW6RALnaVbNQyTZYxEmChsrF77BCSnF7",
  "key20": "4R1pXHBvtW1MUaPdtHhpHx8pJPhMZEVUF3bUYJaD1xrgWzDmx1CpyQFC73BMR82CL8nDGern9NzmwaVUZZdgDkzf",
  "key21": "2bviAzJTs9sXtBhfKJb5tCQGbR7o2u8dRa9puvtyxAJRGZhVn1EyEpXCfudFxX3o5iGEoGhJV4H77rdiBGSUgQ77",
  "key22": "VeUeC9C5p8XHLJcdRArQPLhmkoj2TGqihRGXHWSdvheHhWAc2RDYwiz5G771MVUobzPfCpztpWFNux9gcsut2Hn",
  "key23": "WnG2gwQBo2c9LoGGcjCgUNoqoWaU6PMoR2oYFN4W8d2ziPhzTPkazNSvbzz9Z9F2vvtzhfpNAphVZspqK4WLaXb",
  "key24": "3c7wM8bVhMvi1zuFAWn5iXkuwQV8r1FAQD7JD9g9WcW5gnuJmtYWLtR2aYCWc5EE3D7crN2ruGHQRHdPRNNfcAez",
  "key25": "2gAr79qtho1GLC1RPDLv9WLvfN9UBFBUaDPJSL4fcLaRjnV4rnp6TEJkCjCEXWuFMquoyAGtvRDVUGkYac19viRi",
  "key26": "2Re2gDBkYwU48YyxvSxuPiTEaSYLoEGV1eri8QKsRNifW2YTSVdhMsfqXbwdPWs2rbzKUThpVMkDvPkFqQdVFMvr",
  "key27": "3Z1mZE9PA1n7dP9nbDW7ky1ptA4QQfChvJ8n94cJap7FRjuMTjVG5QW6fuR8AB2x784cDQxRLQaz7PTYwdZzNdSq",
  "key28": "43sERZCDhaLhtFXWWtLMppzpL6S2QWFBJor5woRgv8ZXedAgWGsMK5HvtA7sszLJGxGLL79QBnnXCaF8S8NAD3xm",
  "key29": "44vyp49tHVcrhZSEwSvKpoGnnFA5tDRFmxPgGmcfvFRNR9HdmzzEH8q8XbjPCgzorRYg6A8zjppLwqMPZFrTgCrN",
  "key30": "2GPnPCx7zSnx5gSCwqRFEt5zMRtCFgwNR5NVWsj3CK2wsSGUmEiAfSZUeyVA2voucd4NUb6x89Mo6L9vqsWorXux",
  "key31": "ejAXvqrSpVeKTUFh2miyKcB9itmnwKsKWjgXAeezfdcU8RbCraNfC4q9TYnkTckeWKcYqQkgJczFLmhsjJpyF8w",
  "key32": "2fBhguF6p3z4DRgnx8Uj5mkA11Gx2MFFjNJF3yfbpKxWjPEQonwkDAG14Z4YtgidSYyWYTd69JYkTMR8RRuopp7y",
  "key33": "7NuN2fnQPAGfahNPRK54WS1tqrvAV9E8DQtwjwMNjiJSApTxhczi1qvSknMNWSNneHo4pBPxw4S7D8KdpCemY9x",
  "key34": "2DAiBQ1AQ2D5wvhFFHfn7xbvzu3BVoyC3GmUXiqjzXCmo3XFZHAyZEMMR9qKT7RhSVnApRWkaujFPiDCiM138i4s",
  "key35": "QWgwWyuP1igJsoDy9vJwhQweRkcRjx2FMQfVW7gTyxzLMrHLJUGtHBrGUWjVoUtyf3Q2UkPYMN9Ayq1XjcCTA7z",
  "key36": "3HYbfCTRznWsFwot6bbRSZCvKR91wbK7koKrJ96qh2NXfJZsUT3Vx25xYp8h2fAMc2gAj17eNeKoqXD1P6RRgeiD"
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
