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
    "3Q6vjCxHqQDn22w6rge75vQg4U3SqaKdyDkfVyZoNWRuYQZsUSkcsmQVz1B6zF5S7VZF7fdBXwcaLUJo4atWddzV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UKqf3P1HiE7eiJJ7hrELKkCAmfq5B9fxr88Fa69JVyB4C6cgJRGNAkP2jF1D7o22apcnhjZ8vycuJHMPRYX4Pmp",
  "key1": "5TKWFyj4st19auJEJmTpwtWLrHf6ShqM6J9mmxWAtsBc7sy1Fyam7eLw5dp5ZBaEFbwtdQk2do6ccPrCN4u8rm5",
  "key2": "61nAJ4TmFPNWiECFeH5ZiZrjBMdX3EEtLYx8s48SXyfnZpNrV3eNuArvgigEeNK8qnz8vjzbcBbgvCHUa2t1DX2m",
  "key3": "5obkPL8iGM5KWYPDuffja1p6xRYrfxqjaxW8NaCKxw9fm6r44LP7RXM7s3o2PZztYxfbXpH6AC341bhAksAKJ4co",
  "key4": "5vNaTVwME6hCUbKceE8edB37VsXiF6eBKQcJ8om9qM5Uwy147t9EwzBjbSFt1FnM4wjthuz4QaDpkPjhBaCmsQYn",
  "key5": "2k1Knwh3pYLpwoSUWgUyRaoEeduZc4mPNiF7W4JQC18wB6i4vqomjHetjKJsaSgaYfQYiyQx1pQjHTmx5TMo4kY8",
  "key6": "2m1kSLDxf6VDEPcUVrftqP7xn7pYo1KJoYfSriYBSxUFpJnXxQDaUNW3Rqke7aYDeJ27cMF5TWgNrPmrqQLkMSo4",
  "key7": "4hxmUrQLis9sge6M4QSzPkARHVURjAmfN8ctd16NuGFG9ruf5mQmRZJe1mkNEPcfNowP6E6SK6B31JNsxT9iKVKW",
  "key8": "4ZKuAm9MeDi5ti45aByWBMjYEkYbd7oHZuxEur2KH7E29qSCiLAs4vZvPU53vYqsBVoA5DaprjYbXJTF6Y6FDDMu",
  "key9": "5Gva9EvPxppUnccv8LWiYXfxWJMBeCFZ5SLXDXehAVrftGpaCafhvGsDna1RMrgtSiLt9QdpH6fnJQp1NiRGNKiH",
  "key10": "7vaJbjEuyDf2SLB78rWEYqntRLdSK3e4fFHQgmiyf2o6foKVK4HbMW8rxjPAof3cQCYfANzFiXWZZc9kuSRJr4D",
  "key11": "VwzbZPneDKzsL6NLxMNvWfy1opbGHshFzbW9oQphhPue4daaUhhMrA6pBYdPDMWMBoHhWahiB2CA5QmiX2qwMHj",
  "key12": "5upYf9pa1wMkSjrAy9SoddNSaK595XkivJPxqwZMF6EpUEWCUtaRUsLGmZnxRWVLcz6pv1MsW8BTGqa3afU4EZxt",
  "key13": "4sA7cJVyQ518hXZgGoCpsVmBNrw2FpdrETmm7ws7yknGGc83edoW6BpP3QT1tMHwhwy9mGBanqkEhEzu9iENnW8Q",
  "key14": "4THqhv9QAvHZCCVQU3oiuMJ3EGoUCHPSp8ayenW2uHQFaiMHRvt2w5y3apWzVBR7RFuftRdX3tS1wwh6CLdYZZ8u",
  "key15": "4LxBAv158ch2eC7TtaRam2aawBq7tYhxesW8dvpojM3RsrUZUYxkRTk4MweDRSso3EAy7yq5sckz3XQdwy8KyLDi",
  "key16": "66gdXhnKhdeAgy948evn28P3cxm2vohCDwQ4T6CYT4a33UPnJ9XQQdxbeoSdhqF8CJuvCH9WzvKgeZtNLzcW2pnN",
  "key17": "2ap5TaV2CkgRvzJvDBSSy7gEQe3qdtW79EpuumUqbKY9rGWLzeHZUwasQirpu2PTydwtLw1k2hkd8YKvR8BNhWoy",
  "key18": "5oG7nnd6kMeY7JwABVzvvbRdmZFFtc1wfLciEesU7v2hZBUaSLLNx3uRQ7RaZcEbvLEFXXRWcxZdMZkpV2SizpyX",
  "key19": "4RC6WFrba3DZ8YsfTLmqwrAfdMSnoH59ejivNaSXwraCP2PaQvnJDaKJSHMYS64LUb1DYB7hfJyyEWh8JFqYjB1Q",
  "key20": "2Jv2TMe8qx1csaknQWqXprfMZ4GsgWZbEV5NEwHcdc95FNzgW5hrHdZtDXFj7v9KJydmTL2SvSGzEiaWmYLRg4y",
  "key21": "2EQoKeSsrhUbnxMrS8pisThpVTeCbC5GVeQGzRvXTmFbxTEQKDYLEgWrvBFd7kQ7ZiChKgazTC53ZrHmcVtNVZqf",
  "key22": "4Y3TDn1dqgaJykzqemHvTRDTwa6oypX862bBwXFJdH44Qh8Ps15CEJ1DzJ6GCgJNEfE6Rn6iEW7g2gZDdrEdQVex",
  "key23": "3Ls4kEvdFbuRAwbDroF5ZsSWpLATHVm13LmLe92UqFDRavURUcU1kebi1q3VG7tHqWmReFXdjiJvaKb6WtHPe4cV",
  "key24": "5nHTFJAYEg85eSo4oCJr9gMobgfKXeyuW8qfg72sCoT7JLzdqChViQnpPpafV6Hz3b6WsWdTbdwLPheXEv1kY3U7",
  "key25": "2tNyc3LFuhzJvXAK93U55KzsrtrU9NViLNkSPudWEpqzCWkzmHL8ZjaG5go91AmexEYxmpuwK2MChnVd3RQ8A2pB",
  "key26": "5zPCM2rDCTXFFNtkWjyYMYQFxh54hjNZJitj7z7QDCg4G6S4C9Sa2scVTLeXqMjqa9fuBZaJVGc4a6VxhZmmdP37",
  "key27": "KDcgEMADDet5LrvD5r53s2C1pNQjY1ce15ksBvQujVEYwig7AiVuTKUkox9pzYMU33kWwjc2FNuvDsWzCUm5F5j",
  "key28": "4p1g3L5v1ar6oJ26UBVwDYwtEgqjqq6tQq75gosxn8aWNHpoajd3X2vvPuExj5djs8uinZuR4kqj6bdv1jacN8sg",
  "key29": "2rAoEaLXcbYDfMCwAfjDivYq494H9cm7BFLJNAyCyGre4Y6qwQGgWHb1zNVddJESXugaLP6UZ5r81AHDG7s87XpL",
  "key30": "XJ3teJK7dB2SY7tphDehgML2eeeYzRegyfQG3F7AGzxfzDqi9JGQXGo8xHbu1GycyxyeCR28Dcy14XR6WEmjmij",
  "key31": "5Z4D3RAz6cVbgz3z8Rgn3N6NmuUwkZBPgfMHhNVcS2MMC9TcfiSpVWivKTiewECVtsCjerDFnJFfwLh6NX1AyCAF",
  "key32": "3J8QH9SM7x489naBxZWDd7fQGccishhCpyywLYu8Q19gr3N9Jk5e8sS1eGmF6w1Y7fGT7HkzHXRAk1T4MY5xEwom",
  "key33": "3u2t6fEujSxNP6EKXJ55qnGb5M1Zc3QyQ9V5hmKJFT2raPaYMtKixadRoN47pbxunTAW6U3NpaioufiCKXLzNHhN",
  "key34": "UvvF5Ct1UJ9D6PdN7koZZErjEzQYUexwWbWaE9ekhbABz5NzBxjcc2Kbmd3pz9khVyfE8EwhA4DodhTo1UFb4qz",
  "key35": "3Gpim8WcppdxQBoSLrisnuXi5yJwSC1643ZoD4dbn7Y7zxXmtoHNPU3xaVqyuBpC5jJhbx4urUUzey1xTTJ19Rsk"
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
