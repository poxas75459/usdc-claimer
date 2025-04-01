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
    "4M67wZ1zYJZHAeXaq91vGTgrDAAC4nkVcjsWeiiXdbG7rwXCC3sGeVe6Xkp6VETHVjMV83p1LcXVsmqxM9Xwv91S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pfXm4UmxM5FQHAsMuTuR9GzPNVNCJsyi7s19Aigrua4MMpxDQMgFunYD2VCnbuJv7JnmbJo7uKnnkuBKT2UgUZ8",
  "key1": "3JokbtsB5KMc2CjJM8w8BQeDKvoB1hWQt9fdz1C6DGuEfSkuxe75iXe8XNX3GjLuabj8w4XarCaK2o6DV8Je5N2M",
  "key2": "2m8m2LYhRVMu46nnxWA1d4ve3q2DBgwBgXyboSwCwykniDSDojV3jpWPFhH69psqLB2tSfW31U5RqE34DnHFUgwA",
  "key3": "mZLEjEWJjSqWnukVtfL2DBXRFPLpNoDDp97EQCbmUU8VLKhPi7ip2m3nTfiWxU7r7gcEiaUARBP7eRX6PjVVNoE",
  "key4": "4VtYv8ea7X9aMrNp8ZDikFV594ku4eRSbRvpquw9u4m1ffNjCMBPHxkKKvgKTQbogLg78kiK5VgBoMJnw7ZWcptq",
  "key5": "5S2tDWN8j6zdw9uuqL1t4j27cuVgadxTQrqxf8Zof6gTnMbQTBBofnSMELdtE4y5ioWEcvaoUFJ5RRLHfN4XZNrp",
  "key6": "2YekHphakaRqQsy9RXHYZxcoXW1AmRPNrcuKkC6Rera79e3nwmZZFGc4nWXPafvmYNGJ3ujvieuCQc83q83emwhn",
  "key7": "5pb7DgfSoCtc19xXhALUP8fkFaTyC3NiZNZL2inL2rhKTVdctKK8PXys7hudMzSgJWBhC47LStvC4sarygEfTRPr",
  "key8": "rqPmvKVEbaeZgZJCiDvWjCVyPNxtuBh7BKT5Hpc22MMRY7i4phYH1YpgfPu56PAgxnVPbCZMjcK3VTMdF1SyxJb",
  "key9": "3mU9vqEXhHNskugPkrujfWYPNZrbkEbRancfLMAFFy8oF7xDySfTYUvLdgc9u1NLiS5iHFuu6xRbyNitVfvkKKyv",
  "key10": "vwaXRdPBGJsXQ42mb5LVLXyLXjE5kgCoy12eSdkggk2Nb9zHd4Kcx3cdRNp9K7uAqzTduCj3XJgVeeMfabVsQpm",
  "key11": "2WM9VA12WoGwRVTXZ7xwYeuZnBpEvcRV3uNZfkYKeA3ebAf1CYzgd39a6ZLTS317dfC1Gxu9jHA1KJNz2REqFKdY",
  "key12": "3whnG6iAPoTq2Cc5gusBoL1VeRbk8yyny2UVVe6zLDRL3TcgVekwTxiWewXNUskuPbEMRSUeMdYykrrbewbdUpnW",
  "key13": "54FSRXdTN2KGh2Mkk3vrbPqiGSxfDvgipybpctuRgcfRnajbaMpavBR4TSZv5FzyDyD8Y6RaqYi9H7eBxwHQJ3YG",
  "key14": "3gmZoH7p3Xg1Yuf1CBzwDPsizbAGt5J4rBGYwxyLpWtdrQ7UY3VneqSY9dE1HMFF61z5RHhVB4b7YVihSnBkn3aZ",
  "key15": "525xBJAiAkVGCoNk3XyKkNMS2sGnNK7Kkot8zuF4c5Hj2b2KgeLVzFxHub2KMowRJ3W9Y7gt5cFfoQcY8nAyisKG",
  "key16": "2QzzZYYtEVsK9tsf7YEZ75fxg3e8ZoFUdEPga6dep73maZf69GAvNrGmQpgna9gzcfm21BMMQVUNhfEzCM1td92q",
  "key17": "5UhKVpZrAZneD8aEVBhAmUBpL77ndnjRDcAqZikfBGLDMs2gUA1SHR89tRKhMWg9BTWPgpRMT85yXruu1px22XMZ",
  "key18": "4QacwiuDWiKWtyZ9UtHmVKgcx3FmgsYqVycPsarihE3vWm2bWRDz4X4opipzo7qsN4NnFiESKpeNW34WbBtbxVXm",
  "key19": "5LaBCMbTNApQmpDuUV1CW3Pu9AuzKPhNMTZmvr6LipNERxHCktbMrASeqWwvyg7dBYcJppRheFSqPgmdvjqz7egp",
  "key20": "5Ci4z9MatGoUstodmtpswYy7DxWypNHseUrdeYdemxxgwj4ua1RHMd4Xefm5CHBZcJHBo9816Kfwja741SMi5ZmB",
  "key21": "4Pmt3oSn488tdw9QQywvp9wMoVgGr6efKK8P6V1XKqo4pkUVhEhnKSLrfPiAVfYGLqBU3Ue9mfDshYu8M9uo4yy9",
  "key22": "3ayWqsJt6DgPGWvNpCePfTMLkoa9FrWxf5Jpq7dSw1b3KY6DC3rtXJRzY25GPu958FcYGGP6mELm3yq4AtEzETqP",
  "key23": "33R7s96vKQNVhwAwMmCk7wmLRQn1MP7jVZSoRw1wzSetRmoM7HAN2bARVpozmg8KQujA2geWWe2sDDnoYbGgei6V",
  "key24": "2Gw3CN5u1Nhx4pnQn6XSTNwJEFzU2Fq2vz825mw47FM2oduowJMMuKZF9riuqaDgbthy3dAwn8r8sgfQ9rAoEDaf",
  "key25": "4bh7PaKShqGkkSAiQoD5y4UxQiT7gSwj9GxVUWH4Uiv1fsaFsHDnqFDKMq45RBbqnGAPsnahQxZCpM3pTVEMaD3o",
  "key26": "371qEs1aRasbgFqBJHqg9hgh41BwirwzvpVZ8Kar7SAHjS9Fr11jskn8pjhGpuUcrobStsnswpvQTQ1aGLVTQDeT",
  "key27": "5Q6BW9UA4sg8ZUeQX9fJDD3tzDvE9BAHRMd7XjBUJFrUfyZbed1ZCwCYztX9X2Fm2CcFqLmVkmAC1t4AYDRYHkNW",
  "key28": "3cZf787h1JYbnDs5JARFPW8GdjKbSHzkJQ1EXPkk6rD6L9Ppv11n9EbWQLcmkVfeoWrBqXurJhhUmSHijKLeduED",
  "key29": "zEAmYtLtWc1ZwMn3GeHufZ9D5HNdEqzC8Bvf4KKzPfHnBEDEsLrobCUGwC9zyU8mwuG1CaotywBz7PNneH68Gxw",
  "key30": "4BzLyW5D2iAZ5sW9ovXgNkcwfWyasmVPro5ueQNTLGUcECueD4oKM726s1xduuc1wf9yut1uBojQQBucDwvZKxsc",
  "key31": "3c8Z9bzLDkU4ygyFVK629WpkwSDRvpvUfEoBGiTMJDLrUPZ54Ck2ZgiaCqqdqSoS5xtXiVRN8qyRRmdcit511yeN",
  "key32": "5fGJDFoXdbznQTokppv2YVEm1Wj7PWSFC5g8h2C2ANJC6jyrohqE8dUVrhK87eJByBzaCm6eaufmcnomXtFvS4aR",
  "key33": "63U2zZ41TqGJgD6uqT8KKRNCLwLHGyrhgmbis2knEZsToaQEYiv2SbzFNp7j19KUjnKgVimsBQbLeEXWo25UbCsC",
  "key34": "5xCt2roF3qyqw99LWBqnPS8wp5d7tUoVyEAfq2rrv1JBFf1EbH4zLzPj4dBPzFxFxnopwTbbL13iD4sBphQ61r65",
  "key35": "2WJAs7RerGA6zRxd57khLTC8qDRw4Jm7b1TPa61jZV4Zy7SXXAASeRr7BkWcKcDt5siMLjaRnqekPi2R7yADNpJV",
  "key36": "5t4B46XKNvUspnzgfmcgTJiUEnMNVV2MD8jz2PKaA3fa1t14zGAEdmd3ycATPBobNeaz6ZUWprwPyGb6tm1QNy1W",
  "key37": "5vVaP2Hs5gAxw9t326BjzYpHAohdukCXkUkTRkc4hwhN2YgRevaYxQLxUdEPh42Qsvr7xfZbgL3cs8k8Fj5HS4sb",
  "key38": "2nndRcm9NijzD5HKPVZc8UuU4hP7pjSt4qCcB2rdyrMrKoJ2VEZWzoSmN2VcJGNADpEKRXtkx8xpijrtxNRdnBJ3",
  "key39": "26NURv7bNKjN5BBWC9gM3ENFL3ZcMLBveY32Z91taVsAnRDCZ2jntJD9SQFjgd2i2LjnM3JoW3ZSgWoZSAntPSLU",
  "key40": "43AXfxYsevW9uta2m8FgCiDF7Kzkv3yCJyrdnsN1w6QtV99xcJM356AouJeXYFQjRxC5YML9jFZ4wZhgKwSS9sVW",
  "key41": "f35TgTgViAThRzGPkmdMtenDmZmRPmnAf8Xb5K2hRhq35gxeqDeNGhsayxvexVY4ndWhycTV5iPuMaxqZWiAScB",
  "key42": "51okhVTqxq4KkFzvn38gkCaT78vxmgJmXDyYkVXCqguZxFHLWVvMwimptGiWgYdk4uqbSAdbayMPdAyYbqD6SzCw",
  "key43": "2xRomX4NedLpXwxHKi47RbbkX5JrFTSddCJRaKqdFWNHqPzWLYovtKeRqr8Xx59EariDFzqZMeL18eZWtvBLkNW7"
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
