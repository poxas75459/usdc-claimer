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
    "4muLuU1nBGdZMGFxhR4m8UxRJuakk8aZ6mo7KbwHNkNwsgQCZVNHZazXev4Fz6iREz4YMZCbA3C9Mo6bMS4iBD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gW3oKqeguBCseNWDC27ZGf5owrokt6d5jE3kfPTHtcDZic66ku7EdVidCGf5EhBTKZ5fktmt58KGP14koDSEVEj",
  "key1": "b3nCCtF1CyB5hsBpxkdvmFWyoJo6ihCLaxakHfn64qLstov5xXj4ZWkgdw197ER3pDEH3dcYEGAdx11AoFQhFMW",
  "key2": "2j6JejyBpob5HXHgHapmQAVFxD4Qv7cjCFFqbrpWMDyZTHvDwfPMDPwZM6UyZHzmSjWdMbX8S1uJLLHLgDK6kk1Y",
  "key3": "4wodhq7DiMKU4hno7HrPpwfdRjjyfG91XEXST1QZNke9gEcGS23TQQUUm7KhzautT9DzRwjSKYy4v6qZpLGpFKro",
  "key4": "niB8xSh8En6kwvAbBEwKFfxrxJFW381t4bCy4TQLM7GhMJgnrq4FQVBkyU9hVAFnPw56Cevtbi64k9rZT4t9cFB",
  "key5": "3ZCpanWSx3f6XftTMEhHJRMHpsSXm8QrvoGksSb9iGWXqsYbo4areq3z93s42QFrS9ziSmyiz84VEth8BnGUr9xz",
  "key6": "4ai8oeRrkCv7xQV9Tr467w3Y6dQEuEhDvwXT5wVoyaEFq73HcbHK5HDvs26QPYfvGmLNWc8jLcAfS5VsA2ygL2Bs",
  "key7": "43iJbUJJHCnCuy7bE1AyfXtiuwcM6JQ2CDS7XFQ2VVLntd2WVdz1m3iMEaa2p7boRwsGc7kZsnpAQEr8iiW8f2n8",
  "key8": "UL6my2NN42swxAyd4GCVTDoPb9wtLWMTEnpQP4oqBxLnCMfnZnHyavr5Nb4rNud1wQuXPdy1LioPAXfN79sfS1M",
  "key9": "5NTZ3SJZx6oZEn6crZgMDBvuLmXggLjwJU1hZfvNAMv6rjmjLMTCgFPEr9ofXwYZS4vdnrcaeXzyTmcgwRRX9oos",
  "key10": "4VSQ4EkbZLViNuSaAyemeLSP8XcmdDz48CkyWJaNJqASi48urZw5SDedMJjn9xToxcq6ndGfeZovsKiAAy2s8YCW",
  "key11": "Nau3YovAQ3PWX1EpFUJ1gWng9kaSGNoNqRBL7PvTmGjaswLcXRLR6YUjkGToDHR5ggRrSRVLxuRMJhH6MqH1s5j",
  "key12": "2KBS6SJfyGWF6HKy1pTvEh31ZSLaRP9xRijXbJUBbZfbuUVvc9NdDR9RgWv4YhCDhAv36JXkrQosEHc16Bhh7N3P",
  "key13": "2JB7i2khJ6mn3nqANUp8nKpeUj3EBcKr7umLtRSfqtG6nJ1mksuMpzz3z4RAaLfNNV7tmUdneABu4xkPcDawGvcH",
  "key14": "4nbLbXQ8jCoF3S6dxfzEQtfF3UjYys3sdjipJbJH847hXGsh6a51C4HpSRMxxVWVDmuaZzR4Qu4FUryspQU2GMcb",
  "key15": "2wVpuFobTzNrRQcazmhoUvLqeefhfhMvfBugs5fUWcHGyemC9ckY6TPgZe6pszgtggtsuXfyUrXsgsYGHeD2aoVL",
  "key16": "57a3iXcY2dHxaJYGgWaHGjfWujs95wrzYeRNjLHA9FvVhdqdJqg8e1yEt9J6qdV9DsTeCQVMzEWW9SL9Q81BqU5R",
  "key17": "2nxVHCDeXyFnSNd78KZM4ke6NpjxbCZgdDbWB44TToxw4Mt5SPQedusrDFoPERjCYkvoKNuVkUZJo8ZUtE1P18LM",
  "key18": "4C7PW5tHmUnbNSBkgSmtiffADLFLhZasvJd2uGaFW9caYyjRu4rtsYooAifMQjFz9VszQRsuUbuAME3TFaxm3Umq",
  "key19": "mxfmJX7UJ8KSpno3QF61x4JfeaWqEsdrB3gUxCtWRquqKSaJDqL6YqBcHGEp5aYLhs8wEboBMUfYTqAWCgDEjdY",
  "key20": "4v5fUXhQnUXEQ8MLLSDMxDe9jftXqnaeJbds8hGnhCNtkndMp4rQXNJCpL7ExFLte2AyJZd8MW7z5fSL8kZzMVaZ",
  "key21": "MAnPi4hGFCmhNR6ipRHP9wfsST6zu8YNi5tXaGU5fyyyXNtNGKufmnhJR9KoYvAu5LskvnZnX8jLteq5RU2BvjX",
  "key22": "2Dh2pu1LSNfbedQ8rpfymN3tTqNcPurQXmYDgnwGC4FRq67VqvtEhXfPH2v51d9dy1ywZULt1pbECXi2pYM1mwHF",
  "key23": "46YBg8erHHCw84Y7WmWHssCLnSq6XZNLSnBCUCCKs3ZCxyG3QYfd3YSLqZYyK1cb3ExnrwXkyqYst3abVkvED5Ew",
  "key24": "3aZ7xFCAET5WLhjrPmedafvVJBMot53Ex2v6xz9b9Qec5GyEAuNKChXgCR5h4NPZfxJ3qJm1xJPKWu6wutdN7Caa",
  "key25": "MdBikTA4pWayNrNNYLCRJonm2STkgQVt6TXYMg7xGCWx1K12T3ibgGMrZ14U3yoP3yd9abqvzLfgV8yRFLKZP9M",
  "key26": "4ucBLpruJpuQxVuBG7sy46M2n3pkohW7QZsKisAEjHqv5HVpwWTMLs7uqzHJAzRYNYi3AsXip5f5cWAhBEVYLE6h",
  "key27": "4oZPmtUPr68BsKPtz43StuhiVqnrQjCmjyd6dvz7Q68paSzEWrgWfCP5WdqWNtwQmmo69ygCo1TT7dAHDqTksDzt",
  "key28": "5VUznKk34cRGH9hkCvkrNkGDPDNUPN5RCy2Qe3bvtAXbCzezRFqyp4tSk3yvRdE3FKNARX5eRJG4UXB2nB3Lc7Jg",
  "key29": "39cz3i5yrqjPM2bwxYPK8vK3LkYD4brCb6Kif4RogCTjLxkLZLD3MCNjTUyGhEvTNoY446uBdJmbCCWPN7ij7sVi",
  "key30": "4fkZvNBupemaECRpcZdDUpwYCfk1kyBoMjyKzcYhMSCB5P8BDNsTmqQUPGnW8q2AKgSRuXvWnyjGo1bNSwu14Pnh",
  "key31": "qPKVz3GCfvVtXifpEpPYvi64wikvV5GyvBosGA8AYU6rffCdeBxn7afTfSW19X8AnBJYceTDHzgDKv8kw86QDgT",
  "key32": "5zv5TSNjfrruMYzqPWv3ZkkNdNZb5cnwtUjejgKTnuNEp7gBda1ZNPoFLm9eiig4UsP2wycywjKNEUVLv6uAP2ky"
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
