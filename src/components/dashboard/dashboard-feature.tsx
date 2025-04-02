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
    "bcaL82p1g5ccHaAH5ZfFG5tFGAxWkNxYMJumCJQz9nx9QScfAKPkWKB5kXwjykyLgwZwf3Uu41eHeWh9k23LjUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51bke9D9CkCgKEbfu4fDinikF2LavHU6oGUksSPUM9dp29t9EvPTNq1gcPNWDbGxRMSZYFdSujqh7MeRcet1pQcC",
  "key1": "3NXBWbRaikqcsz2B21xixpaURfsmjHWptEx6bQgYwrw7an8dkiqVq4wNMZKiGn8XCVfe4xd2Wox85eb4o7GdproX",
  "key2": "4vZJDURwKq6FVVzbcGGvtrRzjnV3HwrrLr6mAAP1KVRWWn7iSusMJLhQ7oh7DBbBucHBz7L1EsyWHFQccF2VNjZT",
  "key3": "4VmkBFM9wpBw2djZvBN6tk7AhotThAwi6qNNSsbTQmfy2PaRUdqD6NwyrRf4dfJi3BKWjrCP8PaYsCxA9pecHqDE",
  "key4": "4HmcrjRTeshwRpHq1RgKauHgTQ3zof26kaCv4xYZ8jcB3GBb7pun5Pr2FPE6ao9fZ52LxvqBEENgV3hvmaSkqHjH",
  "key5": "8ovmRwpXd5t8CxsxKgRuEvTa8yHh7uhoNmjSENQZcWH1vrisuvGZNzEVjEuXwb9xbLRvENQDCMj8CC3kyYa7x7r",
  "key6": "L4AAtVmJYZLyjxXpm7C7sbfmr2JyB1EZdzFziJqKEUaza8TZoeLdSSuSCsXtu53SjrUktBcpzxJXqmNbWAFHGDz",
  "key7": "5avRf8VJEArXFcZ4i5Bk6kAbshahf77ws49Xmv8jZvGFcJHG83eNKEmd33E7SowwRGfzw8PaU6UoVGRJBZDJbXJJ",
  "key8": "56TEeqoyv7cAUjHfPGgdnG7ZBQ645gRnZnUKxaBXPirMVNscsXeRKBe1cBooCCrtkNzqmvZfzXAeWsbxZnj61fav",
  "key9": "5xZafRyVdsdj6KahqiU7pyzLgRdRpyDLRwrQRF9UQoaAbqeUMenyvDm2nZg3vVS8MpVr5Vq19LEg2E1mFXSESov2",
  "key10": "3wSNCY8QBRGmiArjqM2AWE65w9chdKV86bZRdhfNdNauhTXsBS6E2gMmSAGtpp2jxnX6ksg7A6S91xkpWsiJqdxo",
  "key11": "51ZjVbuoAYnwzJnEzEMwKZS8VzNupkf2RrMNPQ124TpxQ73zMjDSq9F9212KsETDALARipTA1hfqzheYmAiSc1nT",
  "key12": "37D9v1nvDXNd6nvQ7B3eEemp52brdgbCuv8y29p5xzzGcp8EX2XSj5gyB93B6y5rKwUH8bmBMJSx7PaUSipeSGeS",
  "key13": "5fgfcBon2akjqYg7GU5wDEfqZHKUUJJPygxSpXdtjGaR4nShACCcBurFKXzda7LruGZT3kB4ayHE5bB2FwHk3YoR",
  "key14": "2dWJcXYspgyD7yenja8FUHowxCpnCN2vYe91fQ1ZSP5H5PmkcF148w6agZ2erANhyDTiWPZnWQ9SVPtFBxmu7EB",
  "key15": "3jREoDaU2Y7GMXSVPZBZzWDekEGfp5cU2skswWWJ9sLnarS1RwF9HQ5CFJqKzkdCF8VDNnP9UEhTHAhqSk2mRtPT",
  "key16": "5ivbMvwsTCvh96pdiyzQDwvNY58jhcf4kykE4gjUCR4jN61gNR6HBdhvZJUQey9GRE23JLMZb8RmPboeGR3hVpd2",
  "key17": "4atKAUB7wxheZVyp1pK11Afikh94YFm9fcAr3K7VqzBBucDHoAdZVoAyGKzsxs7jvbD33jEPGiuFTG5jvmydPPFH",
  "key18": "73M8DYWAoayRU9f3JHy4YZ129rct64PpdHqUDXegbSo7Ww54ATubYy9M8siChngabpVAsshpJpGjt8v5vMwj4gg",
  "key19": "fB5hPaCok3wMPXegFNw2xHoACuijNsnDjip94kN6F7g4NTU2SrsncyXfJkRRYCVXku31iUMJz9yEDLx3f3q7w7U",
  "key20": "amESxX8ZMUBVZAmu3Yq4yHemmU6ZwV67bMPG3jEMhAySxCfQSekaDqnkzZtW8tHJe5MY65ipaHHxZwVWq4Euywt",
  "key21": "4VubxXbs8qVxFy4iFRPy7Li5LYoiidJfdCfWJBjoAPCpm8rwRfT5btBa2pAC2EyWG7wG59UwnqeWxPgMyzHAHp16",
  "key22": "5R1b5saQ9tm5UaKg9FMK41K7bAAby5JYrWNUq9NYMs9MaAX6wMrmk8iHGaxmnPzRyKchfnNHvmodCQ6jP9ozhSmK",
  "key23": "9MuhtcVq2Bu2D1anjhmUKmLpKb7j6y6nMutPe6yALWgUBvZentQ6wZiinMCwqmZPMx2juSSLdXFpWUaVa4Lvn9E",
  "key24": "4JkjpbW8TyyZxA5gVxaJfGcBFUSUyZdQFsBp84RHgFW2Hn5stX5sEsutQJrLMLGWXR2Xg7CNqi95o8Lw8FPSG3xT",
  "key25": "2vVkNUpG4shGqNMca7rBWiLo5Vq1GmPHMTFgw92T4aiqgoHke8Yg9aNzhoctgJpNUK7BvSpCtr28jYm9dYkX2wBz",
  "key26": "39gSeFYoFYZbbgMs1of5pmNxGywtky22SKycFCU8hf5zbQfW9itLr9BKqemRgNpkhuE3W38SYHmnnCJDoxrW7G4u",
  "key27": "3kavsRQBWQhY1MRQ1wv8oTPjPgNHZiKWehUbdVWAXNe21jQXJz5MEuQLmrgrC7uLj3ge7Z5a63FHJwNL3A2Fd1Ak",
  "key28": "3ve2Aom5EZnfrAeLeFhEDJcKwfWSqpFQdKLfYLS2T5jcqktvewNT7SN5vBdPjNVKyspYYc72YKnsXb6HTrvtCWet",
  "key29": "5LZxq8cJHd2B577a9EfGC2uQ13s7t1UyQx7Kp9Dxpm36kS11DymRKWQMHZpXzHrijXWzmydSVM4pkqSA1UH7sh2L",
  "key30": "2DZVoFXFtbr3LAmmGLeaeu2BDt9EJ3DXkQQqUVgsQMtHjjbvwEjXia9wdVc7gH2XSRp87jduV8wjF9URXNZS6EZQ",
  "key31": "2doziAzSuYao5Dj6rMDw4usZXmnpm88hsoYgTyVYUF9rRWcj6trBgkqbg11HizbWJGKPAB6c8kJauoi7nhGCaqeo",
  "key32": "51AJGa9vBFdEtJJ8Lnxo6WryRdT8isKgWYfa7CbsRwkA8CrnKLvHNsMedgkSP7s6XUJeKALgaEC3iv2dc1XNSV3T",
  "key33": "ncEnWVUezcjn5cGEuL753as9b4yCQMj9dZ2931XS6UDSH1chN56Gi7MwkkiMD6w9vbQMrXGwNAuh5ymBuT3mzd5",
  "key34": "2Xy6ATQcC11zDbbbwKswsHbLE9UoRv5q2j7EmfVZtdsVF9hLwYiTobxJP43Smkf5JZtXRegpdWAP3MUPGJTM1hiY",
  "key35": "2Av5ja3vWUibAmV7bVoEZjnPEcadjFYvtVqptpQyvKk1iSbwEXR3dKNWi68Vm1FDBL1kKz8LoPUUekzQM626UQ3Z",
  "key36": "2k3qT7hT1T6YPzW7Y8ZMN5M9SDe14C2cpdJfYaLDPWg4MAfCejFd3woNAQf5q6N2MMLkRpAu38Ju2xD2GW3ihXNJ",
  "key37": "8i1fMLqNVLsrcRTR7mTtGtDdcuQhPXSNqKcANpgHDyMEFSbmrwA5AGzsMbJcXLeKyPtwJWicrxkPjChb6WGcWpZ",
  "key38": "61724GJjx65ci5G5TpsQQD1g2udqJJiCAfim74Wb4sn7amvsmkGFcruVDAJHNr3gxrKqcxyc9v9QKrbdWcyDqPzp",
  "key39": "3yyg6cjw13qhVRThwAu3MQQTUecusZQuUUcWC2y2CfYhrGCWDg9sucMTtczfKtxHmgG5jtb4mote74ohuUsTsFBF",
  "key40": "3UZ9HfhV1Z6z6jjBeb1fRhcWjHjKt19WocLzeJQQ91bUejmjiHxHg8yXCFMfDkf3SbbMa8TqAvwQ7ujF1LkfLDzd",
  "key41": "3RbcLXuZGir84FjpfbWVkadJVvgDVDoHnQ8BGUPJsghFc1ccBUvy82625DuqN8wB5jiRsEZ38NEjs3GouEmkVxn8"
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
