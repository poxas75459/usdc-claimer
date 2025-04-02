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
    "3ojxFWYyJeXRQ6xrwyda2pBcBqnCvCAZsz8u8n14hyVGqftpJoQ6K9DueUtmReUc5UMGU8uAeK76KbFL5YpwXXzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TjhkBRiWd71ADc7QzJYTBhak7RvfHAcxPHtNi7ad4NuJjAxG1R2rRQYeckn317LohmL8gdW5acExkY34M7ibMhe",
  "key1": "4kjLPXHTKqQCtXUEcWfxfcq6jS5yuXShJrMeUxMf7ivVzSEzzpAzyZuTWaWLJRhxUGWkX1T51BDRDkPyHGR3CTWr",
  "key2": "5XtUpPMeZjyo1yXmdchWMdWz2LyvvWvo5W7rc1UWHqf9KJMwg6RXGCWaKX4v4JXPufr7BRL3okemThZDhBSgyPbA",
  "key3": "3bgAJeVtfNMPRTCSt4gixjDiJi9X2tRsWUJVA18qFkHseUy2SKungJr1Z1pypxAzgqSuCvwSjbXHN8W5hxtVBR4p",
  "key4": "5h9i876G3hJtzrJSjhFzrRXXEmQn29pnRnXPTntcznbzKzy2Kqfxjp4gfGeSbWyf2mLavjStGy1XAi5xCMkwqrjR",
  "key5": "5PbXBLQ1jgrHjaeP1Y7itAW1yUihTiceMMPytMX43kaBVRXA4x9e1UarFRgaRj165K4kVvbkxW86NraD8E3xw3xZ",
  "key6": "5SFNKvU4YW3JBHtxFaZYoxsst6RLH9GGk6a4zKKXgKBSCfK7zAwfhefDos8mz6YyufbxSBjvbqrF8PWXh3cpzTNb",
  "key7": "3TjfeAXDC5iym3sf68gpvxWjKS3Y46Doo9yiD2RbBVgr2fwkWAKQ48fgoubA9LcSMiVLyo9NFuLFFqQfVmj5effY",
  "key8": "2W3pmzpYz5FmSrX3q6dRewGFqWz59Y4GqNiFpnaK43S1WQf8d9WKZppWfw7aUTS1TPpPabjhhNBrYuEfDwn3aW9A",
  "key9": "41f2kXz9HGkJHJSgjfHxGmuZgk65vo2b9y1uTBQRwCEjRMmCCY9bUH2jmrcVtPVfXvYdTpJAwob2oorkHChxR8uk",
  "key10": "PX3JQhGkhYGgxqqY3rq9mMUn5sfVfTpNcTwnEUEXh8THjXt3arKmxTk158PaomNJbkidRxQttd4Yd6wE4mRmjrS",
  "key11": "45GKxCXH12w58j28XdtQ7bEv26rfYfB8DKWUyXbdDKh3dEHTzdTtLyjgXyCh9LQyuvSz6FENZ3oqmGtQuarUPnQc",
  "key12": "3A6umsmiQ6vHXALd6s1GQkze8qZh2XSpaKLo8kQYNUzrJKxE6RV6wbkeucHWyXWsbD71HQg5UJ9PyrFCy43FXkS2",
  "key13": "Zue2vuQxLxE7kzqyfPxABDnmKCFzBXSHNBysWLZwVt2jQrcL65Xocec1HHi7Lek6AFCbeRMRc1gKoZ6uQDHhmiV",
  "key14": "mGZRQmNCThfzmPqTmDJdLKTXR6gLaPiqQbdb5ZNfQtbVngirEyKQ2qXzaTCzoQGJrhKadesyuKVkTko7DpntRaD",
  "key15": "so4VLNZqLj4UwmzrxPzfugrQ1wUzwJfTVHF3t9eVZCz1JRSEswZYsfvSKnKhRm7quFmkg9XB22gmXZEKwrjNEMF",
  "key16": "5s3JjhpFka2d1tXQG3qMUFqYHESz29LBZhHBNmb7JHbfP5FhTsi2R3Qs9YnkqTLoBHKWPuXzihJXojhuo581mQGk",
  "key17": "38oJY5gJHkWej5C369Up7aUe4VWuWUW7KtMUJc7kM8ELMaDiCxDfHnJ2SAEMm3LSKYpVPu9vfvwA5WudxaeEofke",
  "key18": "3tzmfPsCUEAq5SaBegF8Uyfk9q3JebWA9Pxv4Z9gi6M1b5dVbQFWSe3xsXKoVLWMnrzmrixch6xLiH8oW1vxMCf7",
  "key19": "27crXNtgE2C9ewj5XkMvmCpUbumEbMkzMFbhCfibiS6P11raanFFsKz9kv7dHmXe9Zk3nrD38JicMGCUVfu5mNVy",
  "key20": "5Uu81oZfRP3bstR3k8jgD4dbqunBj6pGPbNWZsgDB8MFgwnkvQHQL6aMWh9tjmDBMVAh51GQ1pSN8YdYLrya9KSb",
  "key21": "3sm2aotjcb7HdTP8JMSStB4hZCRqfq5xXesaycQEhtTwrKtZ6vxbKdHuT1DAuL6GJLwy1qDi2HcGBsyPoYXHTX6x",
  "key22": "38aDuUVGuLSrytpmXvfiXr5rJXgZU1HjcJ6da6tqCeGswz76cUmNG6gcY1LKFK9ffLU9tScyLLcPGVonUKy3LrHo",
  "key23": "WEiX31qZhixnsfBwA7p9KZNgfYDMzvVSE2DFksoqcHE5a784yamheMkwSbbXgxsitEeRXkeVURyUYwz8ZeVfFjr",
  "key24": "2Lvbc7XxBxZsCaL1p73VEqs81fUZPFL79XyHK6F2xyAXkZD6dUQq9jEFBf8vUKK5ymyaSjmWrmbq1PQAi7PWkHxr",
  "key25": "3EAvjLJFC4C9nxLJeamnVQC3i9hDs1f8NHxk8WR37HWKm4rNw87zr8yhwBnq9CAAY3ZMkp12Sm6o1LShhrcSWAqo",
  "key26": "4CYxpM3X4To2N55GQvyjh2LXUK9xJjcDeMDrhnAQKaZARna2oPdxnKY8WCbnNHgjuYLjQdAkmfTHQKSsX7a1YAPy",
  "key27": "5c9ZxqqBfmaCwtf4Wm5WRHEfuNTryCC6XdzqQh2MnytKiBq2ULSSqKYdBBNmheBhGHCnpXjUuKZVFx6274cpj3f",
  "key28": "2oqCFppfMe6L7oSt9HeW7BAWXuFLnhPfDmWyXYF3vMtx4LRGzbSwxZKwLtipR4UPNDMMfJdr9N28kFQw98UfLedX",
  "key29": "55tT42rghcbVfJRwgYvdQqDDXxFRoYNzXW6BMbzLNrTkM7VsUDnZMGuhRW5NhV8KoQh5ACQYzeYNCgwaH1Vvwr3d"
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
