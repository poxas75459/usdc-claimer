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
    "5ggviLqiWzSNUUn4K8oA928HVppxYUMW3zagsQA9M5G3JJyMAHJiB9SKhdZozkc82LiFESxPwqufaWwWX67izSFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZy91jWBavSAVbBKrjKb3jr25JFT1JUZzjt1QB35FiV1oT9qkSpjb7FdkYusJ3YBya9DwFgi2nXGr7mjsA4CNxs",
  "key1": "3JPm5KRHdNgQrvjinx5aMWPytcMU4oPeiYZnv1YrxCKNcCBMwoimFXBHqYRjDgKoiwgMdavML75fv7BDVyLyfXQE",
  "key2": "4Ma9HUqrk5dRe8BwRGndFLcD4dvXN39b86eDT23Ckb5hU6UEbhw9aJ5kQ6Wuhwk4Wd4VUSnYQBSXuV6jVSEjcjsF",
  "key3": "3EESkxGX8LPxhtFevbWaKr9kECoBZ5jpLntUgGT5sJ16SWXSD1Uzqn1PpFqxq9PxsxV6AGL4ygsDZH4eb5H22mkQ",
  "key4": "4yRUrhYLsyqDuENr9eF4feiq899DtNTVqaTzLV4HfgKNLCJ7KWDsNRWmbYVsqzpK98XHvPA3XaDU3jXdJSryZDdL",
  "key5": "3fjmbogqtSc4Rm29vHefqLZybe1BLpWfXYi2SLZBcoCLfHyRe9uE11uBcMETXcpR4rsLmXMxQGJUoRviEESA32J1",
  "key6": "L5qgLwghzJ277hn4cm2YrhQLkCg6CBSpFnqKiaz6MSLRx3gqFJFAviYcCcr6mwYa3qs7neCM77nK5GLTjvyd9Nf",
  "key7": "2Jrr1uBoiFeZy6nrjrCJ9UCtSu1q8egJzhqrVZChNBC1bs1XbQkKypW2Criwg8L4V52MEYNzDgXwwekGDeeXyBtX",
  "key8": "4CPCVbMzZ55cyBVrQ8Jty2Xoo5T4AVEAZ8KGNg9mvKfFXFszMXHJbz8LvafTj6Y9PEiXE3jhJPU5fDoHXmeJRpMA",
  "key9": "4TE6U8g176N1dh4NSFj4YFXX9pS9iaPHWG1HdXjPzrsbaER74cqweoB6XJAi5mnGypyjEnpGtRPLVNQpGQq86wvZ",
  "key10": "3QdK9vSUT5P3LsfbDx3vuKDKU72jRbn7kTDNzcSRa68Grs1ndYWsQ7a2VZm5kc78x6MbbCzJjXGVYVdnMLvr1AUJ",
  "key11": "4iFSgJX5gQCbVJJmBfwou2f5bXwg41bo5yfZ1mGS1no32ZFVNwHuxTyHkTKDaHEtEbyb4cVReqi1UBj9N1xuG7sg",
  "key12": "3fsXR7t7v5oZnJJTRNqWJVhJ5Ro4Lcun2AsavaXTafrkDZY4HjM9EqWhRdRkpbWwZzKy6tGf28DikJkYvX7Y7McH",
  "key13": "4oAwwP8zrYFFPkSHs2rnjZdg8W91ZkFcwANFYeyJZAoZMc5nLcvhcJ5wvqP78Z5HgpE1tedkvr4EpnZCh29JmRSV",
  "key14": "stnzjrkbyidQrdHZMjDMK5xobiVgcnt3RS55FpexjyT8tze5oAraimVqoZtBoxiudVXYZZtj9ZsBCU9d8zPEqP6",
  "key15": "HSUhvhoH6bzoxV6AGcSsj2pbMFygck5jmUYPnWz6hatMjixTpVdr455xhy2LowfZKpk6szh5zQW4eYgUmbYzvCC",
  "key16": "3bnsXqS3Z7oPpW7xX1auHYwZuCNqojAEvtMxa3wPpZTMfHkzLEpoLAMcX6eFTvJb9o3grqVVczAGqnGC4RZEfb9V",
  "key17": "Ab9HftzjCgYTiHzNrdEQvYoVUVEtjvCbTJXaxM4fZqCaojz1ha5ri98nJLYAhRdKaVRD2qdiR81cRYneyekSbvX",
  "key18": "31J9JsQxsXH9pjYbutsbzGw9AuPXrqDeSUDmH5WnE3Y2ybr82wtGdUorJPZzkrJMLCuufgycsWUif3oJnKpN4K4X",
  "key19": "22Hopf9nx4svX4BsG8fpnBYhj6x4Gtxa2Q2S4TgFn8Kx8Dkhiv3cZBmaLrHBfisLFDjmtFpnFsLsBJJvbAUqJvBG",
  "key20": "BL2aYugo668kPcSgqDTrayPCQrHcxCi6Jb1uibc3VX5PhaGkHX8CEbVtJZ31E17fj8E282XK7umpuhMqYpgDyBB",
  "key21": "5kp4DYwN9cpti4NncKuiA7kpkBcgPEwA5MSxZXyquEXJiyVjsDhFmR8eSBVuCMNVV2mZurk6WuLz9ZaVFDfyvJbB",
  "key22": "5VgxnCy4ndzqBZBMed9iwHVz6vUu2cFbdJwvXmPiCvYgVYd5KwwAweArHAmJEMbynDGqyQKUjN8d19wcfQBTfyKC",
  "key23": "4cR6XintKAoU1X6fVnYvfMwoSZtZkGNUAP13foVJdR8kBzxMn48E3WJBLqXmvDcdnAQ3LRTAspueCBMgszkWRw8S",
  "key24": "3EZmP5jqnahk1JfwhPNMiMjU2zrHE1u7ibEGHUbkDC3kw4DqvpozmeyjoqtscxDKcExV5SgJyM1HLUb9C67Pbd11",
  "key25": "V4edQNmaU1VPXMS4pabm49L2jjhZFJhX6LdSeAotbGNKuHEeGTVuJqnNFWXtWg1Abmc41zjoEBfoDNswwijjYjg"
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
