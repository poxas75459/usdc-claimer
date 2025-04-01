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
    "2HJHCDhJZHxHhZu9bsR2ZzsS65FEK4YZeEzRyjqnhmEiHd1TN6ZN2EzWa7th8yt7y8qBeWiiHQLDYgAUGLCkrzbj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mPwkUQiFbEo2KSdv1W1XNquFzgKrTSxtjNZipE5Le8a83Kz1qsVfZ9pow7T55uv34qnqJ7mqM8kyQ5bzCypMosj",
  "key1": "5FtSEUDpGw9WLgcUBEZXaRfMkC7ZugsbK9RAF7QmDPht1yXqiHEbh5Ja7Pb82kiL2EWh8DkSkuBiMg9x82Y6QNrH",
  "key2": "3mxm2St95YdUbiNchoNpYWZhc8WtSTkDupHcXVbWt6aHy434UfkSGVm16Xc5T5sjZ5CSEYEe3jVK8NASr32K1uHo",
  "key3": "5qsvfeE8NfCotuKDQhJNz9QxzTCMNxzw2h4oaw4jiSfvzEV44g7EHJaQFaCVzCFiJSR4drUByw7zeWXJaV6kBu4B",
  "key4": "3xtgfWq3J4GeZRYtCURTX2JzLVjVm1kK1AETer15LPpeMUDJw8UaAbgyP8uT5RvAUwQTzQAzGBhysh5GAneyJu47",
  "key5": "3eff7YgYjhwJkAhZAKt1isdTQwxvVknAWxZFondqFHPuP25EMhsNui9BJAtxyE5Cm7T4hK2khWBrfVmDaf8Gva2i",
  "key6": "2V4tvyTkU7iVhz2Ec361KucudcBwDcCYvcfmW8VF48QqMvgrFzZgr8Cxs2mtiMGhL9i4ivG7X72vY9dKv4VAUP4S",
  "key7": "5rSjNKwLeTCcjtvzsoumpD1XzkJFjahf8XjtRdPGSwPT3XvDrbNZiDBG9nmStFTSeF5Yno9n3to1x2ETeZM696Gc",
  "key8": "45gSEnJXqaEkbdAWKV6exvCwHbm6kkm72dkdpjU7ZhD5oS5UDMLTBb93GubZSJNGzCUUou9eWieNKXMXfDnchwLt",
  "key9": "4djDevzrsj1HWwdaN8819G4RDferkuDUNJqRCMoReZYmB2KH6zgbeYwQcT8N69z387ZcU8wXUEqdDXXLGmrsSYqP",
  "key10": "4RcFiceKe5iSBVrYKGBsn15sTRiYfB4JNJYCdDJwJxkJevSJdsiqpnztSn6V61FbzBtPj6jVDSokg7hh6VGpFYJN",
  "key11": "3HuaT4bzCCWEjaAr1cJLWGgzw5mAqWaXwiXrz2jwJ2cPS7zmnxJXegjwEoPfKrrZJpRL8VqJrLFSdRUW1wLNuohJ",
  "key12": "3D2KtTCmLVkpaWeRMFB7AyYokVPoety8gAWokXHV6hPLTN1v5vLetpaV3VeZ2SH4wv6ocTiy4w2fd2hL46xVyDeG",
  "key13": "t1QwgkM7u1LCbdQeREaWxe4Ky3m177Wpb4QUe5WonVujyzE52J6nJyC8uJHDPJxBwkmhEHzWF6uXfk17Ctx1F7W",
  "key14": "4M5RQNhnz9LvfBWcmDfEv194qCFAcvJguQBAejCwA6kA62w4xvfu1hM4LV8G3ndVEkn2btCKywdE6Y9tNd8vp69r",
  "key15": "4Kq3jekfh8YP1ytUuCpLHeuyUjEyxCKAMMB2NTrMjo8FW23AfmARHwaiG1yAckAypAFKUQkJrJeqjfabTMqG5WS8",
  "key16": "5stM59FeBtRDRF3gLw8jg64XTZoQPy9zy2HJPSXkGoaBkf3jtxdmQCm72EfW8LDyQJusdbQPsWNWuRgc42sBozyR",
  "key17": "4HJG3ZwJy8nwi6Cr5ceeETR51XK4D3qa1AfyZ5PWcz64hsJSXbtqz5R3KogkkmW76da171dSPa4gtHmY7XNdXVhp",
  "key18": "5ZfMSmLMokJGxLHKYndZXzHMbANDguHu3XUMmKgg6sYnqz3E2k1EuXkrA5UBoR9NenbnZtqbnJLDZqm2bT6a6nPQ",
  "key19": "3NScCS1trwGHHAzfxPRdQ9YyM1BHQuj6yEPQb6PpuM9XziukBoG7tnEja6ADxbCjaCw23J1VFXEgneGQPG1Vd8sH",
  "key20": "5CTjdFBNrTfxNncZnqjwFzEmJDrsWR4MydnzHu9XFuFN4SrurbPQQZFUKom62usxEWxD5NGFLwY9tpQTaPYvLiV4",
  "key21": "3fdNUYokUSZvHdHCWzFzhE6YWDws5AMdQqHJy76fFayiFzWzTfS1eAoVZeox1bLsjsdCVDabSXVKntTkqqYBFqBn",
  "key22": "37RWst99JQKuicdJ9EUxGoWVZSQ3tCgd9bkr95b5FhhNysgsHQcsG9vVtQLFbyzBRnfLH6sVhnZhG8XsnNWHvjHP",
  "key23": "3aXyYNZD6ZxjcSGHPgFPTUWAaJiqXhLFH66n7KHg25FBV273YeA9DNSxtdHFcd8fxMusWxkrH8xbMNcsGCKfgpap",
  "key24": "2avinbYihPtnUe4Qj42J6a4AXRxXFpAgeJtxU1PC5MFyt34guRSyzwsudnxdNdzBhmWPAgbhWzoEB2GWbe1gsy4x",
  "key25": "dUFXbgfpeoeJKF1LH8qtZMz49Ugk9JhRMZPTimwV57PShwfyJHQbXBy69CzqynvsAwj26oezEheoMPUcdV3PjBK",
  "key26": "2Fz8PrhoMRcWwKy4hWx31YSrMeY3QZZyjWPv2gJnTEiXASvv9mrMVPoAoziVVJqLpAeyPWzuMRJTu74AqV4wxnMn",
  "key27": "2uVFXWLEyjTWcwGd3VdVCEj1AsYih2iEjA8NY6UzHyU3hLesEyB75KhfUsZMTqfLfN9MhYGwcDo1ZKuLytubgo8X",
  "key28": "2BDnrFzoWagMDrn1Z5gTzPiWj2v8NbzdujpmFdhyBpsp6X8fTqseJDRPyHywgESLwUyivPzfpNCFy43KuyufxvJY",
  "key29": "4Giz5f62adcAFetnLYQMxu3VPGVW42cJH4pjqTDMZN42H8XfH1TbRk1mMVdMWSUPRjkrSQLJU3oGGVveL13xqwW5",
  "key30": "3wGbmp7sRCaeEUp3yhmenP7kbGeVAm3MBjW7weLbWArTeqe4WGuj4EVbw83JZ5vsgk85okGiERGphMS4bwiKqfL",
  "key31": "3TW7Tta5J3jtyZKHk1ngEvNHjm2dfRnS5yqprBLyXSAiPkt2vTYwkNDMimaPk6GhL4cbL1BqK97WiBcpnCipZ8V1",
  "key32": "9GT9JPbokAtamf1mVfhqS7RRB1PERVYehF1KUxzbLRDq3XiFL8jcikT3f94Ny12saED6Cu4cgfVeJyxJxDaH4qj",
  "key33": "2GYSKULLNjkVaydvEQR3RyooUCdqFcTYQKqhhd9kmLFQxKv4bN1fZPTdSL4DoAJqvR8kiLyPsvxfu9G7PnFkmbto",
  "key34": "4xQLpwhbbfwQgPN5YWWTJzCa6aLHyufsPLsCkhN1yynUD8bVvDrK9K6YWita3xqX6FA4dajNNuB31HGtMq8PgeEA",
  "key35": "46t1HhGwktuiDgin1rtog1UjhxZWzVBr55aY69uaAvhRNUdXQ9zB1rwkutVLqpVLMQHTAkxvc2N1iWkVKdckiUUe",
  "key36": "5GU5bTgKs6Avr44J4X8je1xJnZ13wLsegJV6cRJRvUoLzdHyDWo3WjM3xYoe64rmdUgXHAeADWVjCRfmmVmaz8Ze",
  "key37": "64ZuFjVkg1RGm4r2TnR53AvviYwPrVDXEAcFQLWCTiyA8bJaK4c1awghEFq1ESuuS754zJrmjKE1y3himFV3Xm1N"
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
