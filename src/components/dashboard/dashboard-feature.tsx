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
    "4J1pTyFm4WJ4dJaxqWtKg3GpsoQKoHNLZHc1XtvRwJk3RUY14SojLXNQaWMYq8HMUHYFbpDie88SxnQCo3yoQws4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PZRtqBZnfpZjpS9zWLX9pFo1nwrgqoRCoxK1EB3z4ZwzW4wGMUDczYqVBQQSLXYSsRHreynxKhSVP6ea9j2TLV6",
  "key1": "5jGkyuMHPKrKhEsbnGFZL4fiLfhvwC5bfKun2yftpz5oyQveaNFLq76M3zXaZYBeyeXW2dNUaKcLurq7k6p8GPEc",
  "key2": "2xkZapZEzNivJWAgBDuXE4aqpLhLaPNU64qzvi5BaMD2sXxCT4d1HL4vgtu6JkfYxTi5HDa8LR7G33pQc67FC5mM",
  "key3": "hzZ2puGPUmM9TvwAsSeVAKYZm1xqJ92kHHZs48WgC5ka2kfMkiyLi8KnvNExB2WMFQcoDZi74cW8pcHrU34xt9m",
  "key4": "3cfeYw1ToPfGtaKwvHvLUs6Epq6nMMpvmtjsgMPRQ3oPitkWktMkk6DAg2bSBxeSQkhDj3PYbeYwxsWENJfpB4tq",
  "key5": "3GGbbasRBotfoPvQHSMnT6voWHKBxqBoVw3gFu79e3oeHV22VzNNfgSWc9UaURYnV71Rg9Q5jEfsod2xWrdk4dTG",
  "key6": "2SArEXKrNqJxt8jVE3twUjvkkHdp1tLixGwLReASqjQd651yrzg966diBPttZefJ9a4LzA73yrUVF8Wr4pyBKtda",
  "key7": "NemahNK8TQCwCTCTe8TM2qJbprARoNeHv5M4FmDd7JVJwJGwdoGMnCoCRPRiMNe8WeVkQ2oi5L8z2q67xArQ7WZ",
  "key8": "47YKhzBTijvruE8EX8V8WPgyZYhESx1YtDmSgsEypvC47ygfFLeKq6TN1L1mMiKRCu6jSxVFnjHkrTQ7nLsrQnPk",
  "key9": "2iCjUNLf4bCTh26kFXTtRKD7UukLxvRZv4J1bYJpaq5WqyErQvbMih7dtZT2mhA1CiYbnuMXutmcCgsLUZvNDJAc",
  "key10": "3we5W9jajnCm43Fm4aZBgzirFZgCHEMUZPpatS88muSTA62DnwzUVv9uX8vmKAJZERsQaQcHkmZDkgrw9EQc1EtG",
  "key11": "2pCyzoEuNEBrGz4fsziJBZT63W5Bim8jw97dFetAeZaqD82XCDvr5hBHoE52xrjhKwRa47fE6nRWyVcCc3iYWjk7",
  "key12": "43iCXCjUSz3u5n7CVvji5WtKhQ3yJNFueCGX3unRPMEChLzUEoT8kvuf8q2BNa1koc1nSvZ3vdd5KN3PS8A9vjsD",
  "key13": "2ZoALpSAAvoDm3bSEaXf3rm1Cnx8WG3Wri1W1QSzrrzHD8u6L18jdxk1gDyDNBhkb312Ly34E6wuLz77jr45y975",
  "key14": "59EJYTmnBYrhK6nR97q3XbKKW5eNiHWjYEqQEgXYGhxDeWztMrfGs7PuNJ2LaztUvqeQJgBeQDMvz15ELSAkPmYk",
  "key15": "5vPd2JPvbUeMW4dxHawBWfqACqoXezEey59fSihQpfxTgsXr2k1TDyAHerrbjeUo8ctDSr4mwyknxQErEeiT2J3g",
  "key16": "3cGpChpS2EPAjaiztR262TN5sMYji8ULmzkAuWUdtahTAiVpaYGPK9VgKWYfsKUr4AeaU79G9ZWmxGPaGc7inrM5",
  "key17": "487Pt86iJ21ffmkb89VWspDRssWrzU6uoQNnrdmtoD5CMKaWNRP8a3q1so8T9oLXc5BFMkdxy4WDWM8zz5SJ53wH",
  "key18": "Hmfj5zd8CDy5pS9HmfJtHCB2UgrHfFGust7S6XMRCjfxST5owWF3a15Fer5JoW1VMucFBhqxCqaV7DeHRsoQHvk",
  "key19": "5BjGWBPwVzRhmxDTYygdRqCSMHqvtLPiCuYgaWDuGrMarSzTiQhCGYCX2soKxYiuxvnJ6BHSAyuBFomPoExwHG9g",
  "key20": "41beUdn1Pn9s7XrWkYG8tsp8UoJ7fDWF489rVxM4sLHNsyS9AvaLxvA5eXaGdHaKQpK7K2Hru97jdgykHqQvjZxR",
  "key21": "3Eu9dpPyw55A3hRDjvNwovQvXaZW8qTg4j5JW2LHAmTRTZgj7n8Qp27mejrNky5XzgtMf5jGNjFPpk6j3BnRMFa",
  "key22": "2FpU62mq5hHnovJiwWAs8Wsb9Qmh6gUBGUh6BnRvVvUkMswgGgLnCot1C1xFbisqKAbutuLAT2rPvCh5NujP2QF9",
  "key23": "EedcTTPsJNUvBWPqwkq1UqCkdB7URfm6s3ygACrbhkbEvZ4inPKuTMh9aYtNTtcC8oamhz33xC2FJKmb9t6yEcA",
  "key24": "26C2EFjFbRTEkbC7zoX9ikRm9BVSNDuu3bCDQRsqnkXhrWqUhbJfLXgBNisUze7J9DbGVE2tEn8U3eaaW6NHSQ9Q",
  "key25": "gAVyH2ihf796TZt8n8GXaS497b5ipTCPfWmVzWAd7S8WGMCVnqNNQcbsmqyC1gAqHBpV8LrURoY6BALWQ91SyC5",
  "key26": "nQ9xThDCLVuir9p6kZS8tFNZs3NLsHxNC3MNg2P38pGRj78Rwgwcnm9g7weauWxyjiNYJDdfBsNsDanHQfsGXvL",
  "key27": "3tW2m7d1KgQUoxaavFBbK3Nm7XA4nCNzhMVsbyBF4Am669V9Pg5h62eWDYCCbyqPYcZCBE2T6CqEvjetxbpbXrFC",
  "key28": "5TfMwUvbEx8vio1XSLR4WYGhx7a3Vb6zyTF4dKVuVkToZdmKoss4jjk86CqVNVinPaRP1SUQV8xppPYW632Fm6CP",
  "key29": "4TfVzi15hqhjg7rKcF9fQkkvTMWTJp6m9nGAdG9UGLd6aJPG8vx34CsZShv8mh5uxxWy2oBf3rLnBFZWEQ5pNh4n",
  "key30": "2R2fu3rxqREx3RpzVr78dtE4ZZTg3Hht8gBbqL7YhrrKW17r9sPoXzkMb5sURrncZ32WUVhMAUUa3W3U1P6vrVm8",
  "key31": "5vUghm7eGbqusrqpGPJzkxQihZ9Xq92HZ4rnkY2oKeiQwRe9DAxVpiXoVoS6vF43WLurfpZtXJdRYGueCmi1FSa2",
  "key32": "5NsBKhPPPxLmvDUeGk4hhvc9iVEQFFYoJ5B3i2fMYRDYdMBSDeSMPWMURd7vVwBB6BWwHgpTwCAtzVHRgVczCHhn",
  "key33": "MLwQmiSHWuYmJgsu42XvrPMtSpzm4i3eDCWzn7XF9ByxXqhXvobD9iLyGb8xRYYFtnbJUBss5w2JmJQrgGihYAX",
  "key34": "2QLQofH3hCSHmVpwk1mF4pKrvRjYkk7Yj2Mdt62G1TKrVH6QKNKB1FYi1HNtXjSfWFHq8Rm8NrA72PNjHhXKxBkH",
  "key35": "5g8mPb3HUMnzDDXgboYk7tbU5hnqM7oLd5kf3ceHNyczqvwz1bFyp5YjNGLf3aHmajdEQRXZGFQW8mip1yvGyRoX",
  "key36": "2F4E7K58i4WktVQoGbgGipCmEHCHxgpa5RcE3bravbHDPi3qw9UWmVNKU8Fg7MLh6v2SKzv82dfZVstVVZP1ARyM",
  "key37": "ReQFDrn7cmcwGwTZedH9dGVGychktPpudH2WtChfvLPQihyygkmaBTG8xFJvJF4ZnweoUWxFxvaNb3TACJjpT7H",
  "key38": "5CWimjAjoTJoYEqBygJCALiJ5snJVTiESmpAgbY2YaasAVkL88iNx7TyJySM656z6NW47mMyPsW1xBBiB1YxFGKV",
  "key39": "4DRRWwE4EHr2c8dCAZdsqvH9QsKKDf5MuAE9QmzMHPMMDv3me1oZb8qV7Gqszo8q19LD4BNUwsdVtXFUdt788KX4",
  "key40": "4sXFSZrRRCANMNSUvXdybGETKKsheYmb5zNywn3TKWwVtbQQn2C5MgsuCJP1pu5VJdYioR2wfpDtAXjYDd53WTSe",
  "key41": "26d3qgp6rLpJXTnKFWkMqM17BUCPfKhD9M3E6ew2yGJQ58Neb76REt6ieBNNAFbLDDriwTvqgApG7we7or7ap24A",
  "key42": "5zWbU7YiRfZkFjfLaLgCQydBhdd8ydQbatRkEdMrbsaZTpUHHjsKfnVan9GNBYcCwEdgFf35bFXkx3ixZboZX78e",
  "key43": "zB7MiuAjUkxvWFXjE6QbeJWyL3BoTx4UvxY2FWUp6iFQzgoiCWss1AemcWLsx1AXKLdM8QdQhpJroJCaYBZQCX1",
  "key44": "4MrM38fDjjENRf76tCHtV5JNWD4Wb2v2q9LmyfsoHp1EB5anKyvLujR4uUp4DKeC5VjYSg4Es8crPFrB574WiMAp",
  "key45": "3xpBwsRFxepJRmVutV2TbAFi4BHNCS21n9nq3m9za3EuPtGuPaQjDL9zXHcBcN4pdE4yH7WTo3QukeuTHKKBy3nP",
  "key46": "5FbzxJvHiiDUxAgLpXgKrkspUz6YqPbGZsczV6M2K8nWy6X3j9Jfk5eNj89qbe4us1dnoYGLchJwVfnaT66gidM5",
  "key47": "GgFaPP74BmJBZPcJ1DynDHVHkbRgvCVAw4Y8tLa2JYVi3xGkRFrvpoxhaLNRFj3EKdMbxjT5APNyRTnqYENfNKa"
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
