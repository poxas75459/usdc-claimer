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
    "2kuXY4MaQRay2ss3h6XbKKfNBG6bxr8rU55aNgrzfA7wwYX4CZBbzphPsSidwpkc9NjaFYtcaKhUX6JfKxiFnk2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L15kUvMA2NAzur54m4RQH9aEvem6eK8bw6ebPcMmUyGjuLQSUziym96mGhDugJnpmczQA84Y6WEK4QjT48oV4RF",
  "key1": "39A4QS4d1FKDSB6YgLnewHBHRnMRzjJPmJH5dQEJr3QjPws3vZY1qYESFP4YCZtApFAYA1ZUZLa9DjVSvg3Qg94B",
  "key2": "bbjuR5hYQTaSo3SQZim1AmvPCoToo6RjgCFeYLWh9xTLeTCFjHL1KrQQGHVbVhUdrzUeHATTQb4cqV4MJSir6GA",
  "key3": "5oVN7PPaLskuvfFnrDF5W2Pz4GF7f2oZXTgFbuu7kMZP5BPWani8oL4U1kfo2HBYcSgU6Uk44zd6B4m23DS6onmN",
  "key4": "2GA6Q3JwsuKvW8wUDGsQ8KgzvpDpxFFY46UCsSWGuD2UBAgXguBrqoMT3k5EGc96CGcb2RnreNhJ5eHiceFjTj7M",
  "key5": "4mCz5sQxjrBZNxA5up6ToZoSiSsdfPm7XRahEGuWgPFcsDi5YC64g7Kb2mzcJgPqyczVqA72rUBgc5K1bT84iQVC",
  "key6": "4NLGnoprz6KaWiJeFGxeZvwDQ9Adanip5Ap7QXPaYQT9gjgGiDnTt9e2LQnhFc6QJLTofiQdveBdzRAom4tcdR8k",
  "key7": "5tLuVprbkRt1cshngjuHta6dVN6f6u6HksRiUCmSaLpk2XXjU1p3uP31TZKhEw9us17LjRsTtuE1qFe6JqpPUY6A",
  "key8": "5VST39gMBiUsrg7qQp7dvDNPMKHUmgUJQA4ztfvYXDcVxVFeSQHWjmvBHjmpdmaPp4HoRoLduVzrYUBUNMweSnqh",
  "key9": "23cphhCwMBgx8MQ1k5AMypAyiD9tf9npgZSVyELjSxyLJdNG9JX94iVeeB5W3vUimjTrxn6ftMqzUqDSTmue9nsi",
  "key10": "hp9b2WoBQfocdVZrmTZ63ksnKzZoeS4R3oSRa9zrSomR44Mwp8yWP8WTKU316uytXBMDWnCXufdD5rAwwosSz1H",
  "key11": "2cb2xkSwvRULh48DvMEHymDEnXEPTtZG6gGPmNmcbwTycb8scKGgwTuNerFNjdRGquZJ6RLRtHmCquXAeXRx9ccJ",
  "key12": "4HGsd7qLW4y7tKkYz4nheCHPsr1euNuUze3pgRXW4VYYsPuu1Qs784cCLuSQM1LoisQbaai41UWmUmbuQZ54yEVv",
  "key13": "2dHPBgGCp6akcycZN1iSo8uKHUiwU5Ut6Dip8EMBudKHK4eg3AtM91fyu6tYydV2t7gUsLZJirpq8LEeP4GN1DGM",
  "key14": "3QajgNPX6UjPcLMGDz5osbQrmJ64mfYCFQEfHtrdCS4bnfse4R38BVnxH3Ko2YiAxm88RUNPQ6SA4R7yf3hSJ7VT",
  "key15": "VreunSXXErk5NvDhJo7Fuk7tjAhmy9jiAzUF9Q15P5MfHZkB6ydtVCT9Ws1dz656FcPgQ3VhPkAF9qo9ELFqSEq",
  "key16": "2P7oXBUpp34k5he697eRDBMQddJ8N6wDzcJYxcxKPghkb8yzEzzSbySasbjyHGfHhvx36cmSbjjkF4j3gbnmCuEC",
  "key17": "3aWFEgZq5pWdEF6BRDThWPRwn3nq48kzujeyE2x6CJ8Qz9bdVsJv43TaWYDaTKMwGZw4HUXbME1ZcGUA5Y5z1tMV",
  "key18": "2AchZu7s9Vmy763vQj7zNStkKXDsTWhaDhwkNntm8RRzRiMideYqCSA2Ndfw3FqAmKwpE5XvdNEm7Qyb1vZvxX7",
  "key19": "3cG7Pc1JBQEF7zYfaKiU3E25vLBsZKXHcDoHjSdtj34BKBkkBNSGqUtHoaHLKnV3DTKV4Zh2hXqWtPAr2vS4kH2a",
  "key20": "2LEDDdBf4Yg7kySq1t4v2NidnfU1izzWT7te9R3d8quzKeFe93372G8wxjiQLFvPvuKaYzd8ArqxjNm6TPwabE7s",
  "key21": "2YZKjhH9pL8ZtqtEDCmbqnm69DHDFfH1otfdmrKm59Ne5PWcHLpQGKYDV2KBJqwHv4D9Jbps4PobEqrwS1Q98NKK",
  "key22": "2kauhNtkhGFx2W1G49skotBYs5VWg8xvF5SZsrcvXvLiCmJhrbhwN7RC7GVuR9gbXGEhCf6PJTmkBcHwgVVnoQhd",
  "key23": "tQJc6pSCP3dvzDnapkAtK3kiV2j2hL266mP4eiGb4wtwwWa9T4hYNNoKyRYJe3NDGrYeDydrX2MgsvZSSgTryzP",
  "key24": "2wUdDoG95n2NfppMUzTVZDyXJiKxPJ19XtLSEU87SC5V28QNVwtHkAX6aFAhwHzccP85ocKxXxp5T1S3pGLBRduZ",
  "key25": "2ckfJctvE2r4t1MA7WCjVropWTYJwJG2dU9GM1wXQ2RYwu6K9nSe24YY9wsmXDu1zDrpQvZJ4XDAGww5Fzm1PAZe",
  "key26": "3yY1pBd8xjPm1JWkooxqF1Qi6TAseaw327QnVYAiE8cysAAt9aBp9DUXoupbhf8yo7HszWgwnp6bh1PDyUZTfMoD",
  "key27": "HDyr4jPVr18GN7nBmvtu8XsNRcydzwL4M6gzC45THKzj21b94mQJ2TT8xCSAyV9uQxhvwBbf6eWFppEZsmrrCCa",
  "key28": "4QoGbNDYw3H8uxpWMhihskg1eRrjkqWdaTqrmkT9SzdJpeA3h9hJsTgtuuAttTSxvs22QmQAEF1YnUY1RXRa93DB",
  "key29": "58kuDSvXWCrkyCu1rv4M6sQsUuTQEo55Pt5uggFMaprBASzMo7hbryf3U5cLNowsC1KgA6JQJkf3Np1vhnZv3UMC",
  "key30": "5bKW9By2JdQYemthrPpd4xdx94Pd3yiS1zGMQRUz1XAhSmNmWGMfAtpdggVq6HDXtCMzUmppMDRYfh3YrXDvT64q",
  "key31": "2ZkbMJXCSuDrNFXB9GcEgckiRRqLK8uuup5Zv3a3J28WNoQi7USfDZkH4gwjsrtdEgvPUBkam35s7zfZ7Wkechg8",
  "key32": "5qaUb1ivYs64QDhEWRgsZq9cBRmL2T2zPvr3c7jssZAGdrghay8WH2ZGVDPgjsjkPFg9PW1qqhS7UUAeKKTZMzmC",
  "key33": "2uDipykD2UnkPjaGiNEkx6WXzfDYQveonxvTigX4gq9PGJM4nTgfz5bdLypHTVXBG4AkYz3btmnLVzbZWcszEH35",
  "key34": "THtSXrzpKzeVD94d4kEbsLaiRcuMSkFJRHQFnXg9ZbRDdEMkzwXpeDSfmRfW6oTbZiS3UrNqUu3a2SojYCBEALE",
  "key35": "2farjWDA1T5xtvyiPgbxX9o73b8hEE27zgTbN4o2BLeHS4ugyRjczhaHg4u8F8EXgXs6gdKCGPNQg4cvAW1o38pa",
  "key36": "57kc2RN7BQ4pNVgWvYidJhcEMztLYKGiUGoGVw1LeUMcYDXEUpujVXnvaPCZC7k5CyWk9UKYzSSwieYwwNoPFyXx",
  "key37": "2JhL7moFs4VHPACh6DizeR3fXGhSS4pBCcU5hvrQ2ufDq82QRmCfY1GWGtj7nc3Arxkn6x17JGUn723m3kAjv6qp",
  "key38": "4QnApirS4YnM8aSBtGD4di244QyEHRTgcLBL6uXgcoAzbrBCAvNXYwbNTVbfcsubRyZS1geqCCZLdoGC5UFJ2Fnt",
  "key39": "awJnGP6fji5AxB89jFaNFJ1cRoo5aDLL6YvfTo2cvfw3nzV8hU8LmH4CbU4LrwgvmZdqCUgA657CUs1Z9Myqwhy",
  "key40": "2ZamKLKfV8AmetKPGfsENBWDLEnX3fMXHrYh76vpcmrfhucqHWAiHtVdn6stsAuwNKM1hjxkGCEyBUAKAzw5DPkP",
  "key41": "1Lwm6jQVSS6QYk3sFkSXNDStCRgkqvyrV1CohMtKuy2k3P2Ekvb1LbYrH7Wi2DGQ1j9at4tbKwrrT98v6Dy1EmP",
  "key42": "2SE3nd7tVgeYtpKupgFtWVN1NKJMXjUFhbbbM1Rj1bJrkKiwrkvXieAPisABAGnowUuYzmN9MM5QXFDTK1aECM4V",
  "key43": "ZWFxRamJm5GFa7ppjjNRCmV4bkPuBXzjsoM9RVXuTxzj6PHSyscg2ipGG2UH6TFnoezajuE2136vvm7eSwzzZrh"
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
