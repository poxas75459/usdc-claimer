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
    "2WgDHEznqabp43FAfTqUpj5WW7L56ZkWXTqEZTJRJ1P64hRsRpThzot4WHKPXPr57J9JxCwyJ9md6qmQHVADPsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3Vi4uEN5KXpNZiFWhmDuhBqKKKke7a75o7mL7eDo7KF4fto8cFx9KncYDeXF7n35gNRMWtb8SUrSfwafkfP75J",
  "key1": "4wDwvY4viMtntxhXeG3ZjFLvwoUfUjbXzcamRERo1wGPB32sMC9MTRjDvRgP4R2LND4dHUM6jTiR3mTThdnoh4jX",
  "key2": "D89q8VuVReBFNuKWnekr7jdgQ3yxCHDTw8BT5sXxTbv3FKtNJmzKjtF6BfsqVxxdhAGRWLKoGLjQ7dPDCnJUunm",
  "key3": "5UvLkDn5moxFkrFYPswx1HZxSZXbx23x6XsEJdvnfnf7oeTJfj4NSPWcwg5JGysthyZMa9xmRRXfBnWgWkNuQSfc",
  "key4": "CjMPYruszSrSWZPs2M2iqshV92KBmAbxDCX37WyLfbXi3WsvctkDneWrVYaNpP5HD9Tp1h7UZBZWt5HpBhit1TV",
  "key5": "3DtcvpCSN5yY9fuLDRVUCNiNaZVcU5iXvuYZaWoinJmSUYyZeSknyq4DMqM5voafwhbzTuN8azszxbQWPaybNTEU",
  "key6": "5oACTk58VJwxRad38dL6qcteGzmaRQViDYKQFUnzJRp94xaNbcADpY3Cv3F9839e1WXpWPcSRhBqcNGzPipUdpR3",
  "key7": "5Xu2ypjr7Tq6wrFoBP1sCMUsKDJGANUrRZcgUbg6hAvZ3fzzfNQxy3Grf7hwdj1VGoFaCbw2Af65Nx27Ft7w1Kbv",
  "key8": "5XjsxhoFfQojqjgGSZaGanuDHbMcpbDpG4YCS8UUrNKE2s42ccR7Q8NiHbB9yPDhkP8CDn8Yf3UTxCoknEVD2RvT",
  "key9": "2dVZZjxErM64S9BWFZUtGx3NRdD1AKtDkgu6RoHm81kdiYQNwTsVyshdk6cYHbWjQvczgsd7s8kKLpW2zMcoTaqQ",
  "key10": "HiNcCYucc4PEB78Q1pe87wdEghrDZJYyb6n1GKxrUT8yHNadThktj17uitMNZh7VdK7DzAtvL1TpgsaJbMUukg1",
  "key11": "65wazhZ5zucyX1nhwQAJTGw9UHhUbuNimeex6fS6mrXPkbWtiT4ZnYsmRH5S54YdXEFfT37kkMop1UpdejWNikNj",
  "key12": "qmgZV2bqpm1MzSakeLfyc9uE36reTJtHQd89HUXZArNRrniHWnmuaGMLsghifztSEuucM22mqJSFihDExPZCCSx",
  "key13": "3wspH27hu3jNMC2uTLg1TgARbcWqDVa6WoZWF5qjfLAsuvvAj5PwbBJJv2YLZfDjHhzF5n658D9Q2fUgdpdamXNG",
  "key14": "thg6pqGYCk539Q5vrzLP4UceyL29SxKbqCKML7y78gCCM8tE3aY4bRZXgAQu6DGB5WDeoLBvbBRDpVnymi1QyTd",
  "key15": "jA73oFdBh1TR4rP4pAL8fDXNur6BN7ztwAezTjy6gMf44USJv356cgZPZx3GrujNkQRpYV9x1kBuxYU4yyhSN2A",
  "key16": "2AnRcGgjtj6RQSfBk18HSnQP8EFLt8MPhc89wwqfrZo1gM1FKsDx6zJJRJnUTCJ4FvZPdVTHdjT84aXqcd8dKNpf",
  "key17": "5QsMDiL8QJAwoAbpNmqpaDWLKy4iwBoiUoGneT7nEhsnMPjjViqoVdp3nb7tdz5VwKQSh1TqarrmvJMXNeLdFVsx",
  "key18": "3BzhhgfhzhVVRdPMWJx9sEeQuLPb263G5QXys2m5rKgCs1K8D92AQK3cg4vn9eFRWUiU5Ye68sp8LCuZcgyucVvh",
  "key19": "2ZZFibc4hoh8Bz9g1uM6zeNAweawz1YJR4RjomDcKG23XYPtuK8B8Wpam7qHyjY5jmdshDV9rPFGaWVfaBxGCRct",
  "key20": "5fio4xmUg61Fy6GyhwbKHScA1PiLJF8m1AuZSVJtriaK6Q5bwDMVGisUWk47h97572gDMgUT75nQEz57VnQNWxfT",
  "key21": "28cNnjZ2RPZ67Jcz76zBQi3D5FV99Gx5aDrzv6NEomtXXGYz97cVzb14KCvHL61SfzP6NTzNZaAV5dnuXbL7v9BU",
  "key22": "4wbmzrzy5SyT7HZgFhS85yrkXmgeancgNWsMh1NU61qAhgMpnCgjXTYMHvhozg2ZsXTV9p6nVmbuiJ3AUBduNsD9",
  "key23": "4EjQ8wh9DuQT8TVVi7pSu2H9fa6wm5hPsv78jCfEYdDfdok8ogduFJLs5AQ91PdTqEbVu1JXWkUmfHvKJfaZcnuz",
  "key24": "RQ1v66tX8VE2WwktsftkVkjLEPVVxLQXML3sfsTb63QXJ9YJ5FhJo6jDcYQjZnXJMYdU4NNYfV3W2ArrH6rE8pe",
  "key25": "4NJmkpkMmYrUwdnoPfNanrwr1AqSRAToDDECeXyMjCqcJA33Wxj7NQPgVAg4FRd83NxQfpChmPF4zT3pM1hWCo8V",
  "key26": "45Kk4M3iW6LYes1ux4KzgmJpDHLwqAF3duDgrXFkvEz432Si5zuU32Av5v7mbTGCsp9dyV4WgAr95seVEy4s4RnZ",
  "key27": "5PTi4iGBAn6WFm3xDs6huJ4xRPU8uDxhpofVFyvuQU28cd4VQw7n1fWbLBjrzFniyia1WhBUz94H68LfXvPHjhCo",
  "key28": "dSux9DNXzjC9pn5VXG4nFppuj4bRFWhrWfHWdWxuJcyTaiUWpNVAXXUFejzYFwxRmMjbHG8mjjNBNXmXNJqf1Sm",
  "key29": "2xuhBJ7LSqteeCPQ3WA453qVh6mw9Md7VurdbzbZofHAvAiuf32bXEKQYNjUxdJQofoKxToPs7DfkDSivgRUjFwx",
  "key30": "5eHdMnDrD7gdVbu7tS293PWjGTXHUMx8F7ciEXo3cmRDZRRvheVmQ1oZuxUZzxcBm7EeZd2fku7ZTziap5mGRCXB",
  "key31": "5rTYHKugZ7sutb3V5CJRE6Eoh6M3EGY4DEMXbPo2LdwWJmAReztS12wnFdygMrz2pR7HRr9urRNQV1NmfPpHMf8L",
  "key32": "5cVvhAUWBXAZ7MJPRs9Mjxn8KTD7sRvQpCxkrAKKxM715mnnyJSfxRVW4cs1CoXiPRauz49ogY42SN6RkQH4ms9j",
  "key33": "4qAxfgDRaWJCq8WjzZRFmYDwGHYVac47Swcfce5c91H8tgbX6UuEitQKpq2TsM9mqTHsbDLtVxUnm6Mk3BRPoThU",
  "key34": "4gcpsBM3hMNXs8bm5fmAHi3E4PC6Qv1JGXLTA9ef3dyZSxNf5VWNqToZE3jpo99YN4ZkgNmMwBFyut6tamiW49J3",
  "key35": "5p9NSsAd4f1BfnxTn7yXcpeC1bNo6Bzx5W9HRkEWwjsRUqUDdwf7j5DnU9ZB2zytJeLDdvxSMsEkgPSeiRYyS8Ca",
  "key36": "2dWiLC8Zgv36ZtgMgmPgudjW46AzWw1ebBhgy26ngAQm5nc98w3gsiG4on5hRsZp1R4N3sbsUYjrBTWeEj64h25Y",
  "key37": "5uGUL6WA6KejqGm5DQZyd4Xh1Y9Gby5y2jE89emRcpaVmyU5SGVMQcuhmB4MWza3Po4Ags3qJQetHDoGmFk7goYK"
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
