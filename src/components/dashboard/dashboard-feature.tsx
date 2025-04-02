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
    "4kAM4SWgNBMcu9Xpu2iXPDsFAK96Nonh8a3PxSnBoDgUQQZProzuVGiptPbLs8Vwc1UNbwDEWskoMgVWirU9XvHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exkTW5oCn9uh1RpTb5vGxRA9PP3Yi1WDKGMYzkGuyUM7JWjXfmyNcLNDak1zvoFCXamQKPK6umhv75tvrRHbsTM",
  "key1": "4esRTBFYBLc5VwnJaLbYPGdFA9M8xjt1eggLcWizreoYNMExG1UBkEuqeU1EqjuDFy143e2pLhXvXHg2dxDTPyh5",
  "key2": "2BwfSTuBMx3WyhiggtCj8oxmYWuSPQmQS9SVvRgLgzjqz7A9HeQeuXoVpptMRKXZ19Th4uFdCY4XG6RzCAMoX71s",
  "key3": "5UPoxqj4bJw68EhawiR9wPiwKyMHkrJRK4YR4rDB9ywYdat4AWWCibiRFq1zkzXQSBaBAnaKuKKfqAAPbxvaUp8G",
  "key4": "KW2G5vWjs2Btgr76CaY5ZfQNjR5m1S88LbUmzPuWo37sP5cLf2XFhtSFLUXpz8hkvhN1q549NZ2gYLkU7QoxoHt",
  "key5": "iP2ZeG3v5xjHxaxfRnACjsi5E2wg35fo4nVTTeanknrLLGNhsGFXYYAhHPrX1dDk2YZeNXKmyrYBjP1NmFH7TnW",
  "key6": "4tsvTnFmkJzuG5rnn15A4umqKydRWFQ9j6GyQTcA7kuuyRDbtDYLuP7oQR4kWe45FtpS1sdT4sf7DjpgGY7AbyRe",
  "key7": "3sUv7sTcXbEYjNXfbQYfN3qGc4tVMTZLEVVssA4U4DzHbZrBSrNuUDkMR4wkQoP7np4pEqMUKkUntHc8KanFjRMU",
  "key8": "4dSeiefMzXojxMgEfq2EKoYyTVYXs6jonVvgXBeuujSxCTo6UbnhHMygTbJ6xw83695nd13xbCRZuCX3k2Ra8iWT",
  "key9": "4oDLbLHTzcV34anKkhuifu6bYFwTkDRsqp8bBjC41jaX3dR4RwX2eSjMrewVo6689PJzHR977in2LMyrYr8y4epP",
  "key10": "3Lf1UHw3Kh5uTyjJ3sSaM2FZPdzmdbxDBhUCQWGTb2pYWFFaQzxzAJza4CAsMxvnZqKbeuNSnBXybieeN21jKWmN",
  "key11": "51aqZNdtf1HzhCUL4M82HbHdMU25HU6KMHXe79Sfw4Kk2SjbUJ95QcrVk14jtYcYLPQXea7vdZfxtKn96vcYx2wM",
  "key12": "5br4mC5Z1kUJ1RQkNSbpLDuJvgzKJzWjHvbgYTamwzCkh7b2JVnn75JqpYiVxVAQFm3pazGJEFvRjHpvGRnVFD9V",
  "key13": "zfXAwdfvYn7LWo2nC8J8ztEs4N9yJCZshj6W8bnacGSm4VNusUucwFLXMDi727mX1SU7LbwsWSznpY9m3G5g7Gk",
  "key14": "5GpfjkPbiwD4BYUaGYfeVu5LFrDx6VFnjuyokeHN5dpqWhp9MAktk2T3GiS19JBQ1DZH5vTYDRSULxSoqwaedEBp",
  "key15": "45suzNBTH4PSeuAmKzYz7J4K8oXECJbYrgDPWRnrC9KuJwapSJmLDAqKnkkdjkVAoRXHTfaLjVTXY8JrtSKspQ7v",
  "key16": "2yagnu27kMX6enpSPw7kumbWV87b9AS5yZQS9bpSL4Xa3cmRstnB5U2x6nPTrjyEALsZsza5gnzfKSVMbU5ADPdC",
  "key17": "21yLMnLexfjhHGGukMZEpoeTvy3s7fDvXHUzRed4wnXJ6FPKuvWTgF6LUq3ExfYd4UrTSfkvGuaFKawFPFGXoDYt",
  "key18": "5L1W1rupsy8cQA5t8WiC1Wq8GLYoGRPFpXSqCxy9NCNpawv3nHx591grnbGyFruckhWtfUdRYyWaoCzfhv2rdGHc",
  "key19": "pQBzENhHYjjieR5vfZtYtrM5J4MfeegMFfjUUHyrMQsM9iT8R3J7zVXQsr2kQHiiBB11moXgMZJqCzFg61CuHVa",
  "key20": "38gPV28kw57ayDtmKMG39ax69rDEeWLpx7GRQ9XBwEx3y2iSq1f8iscg7PSvTmnhqhsmAZw9pHutNZQtkGfzeVsV",
  "key21": "5QGeKFxbeLjBd1v4gtpdd3h3Qa1KiLdfneEAuDzGCsiw7zJhKyt3MrdnTUacAvuGJ8EguyqH4ESE5iEWuAjv4Hv5",
  "key22": "8jfv48ALyFMAfXKRPioH4j4afdZUVMYNoemPebpdrC9oKAyYVa5PE4BMTqgHwkigKBQj1PKx8ZkTe8T4GYuhyEF",
  "key23": "5z9hzoeSJpcFJMdEk5QxtcYUkjSdJnGKWAQukWEbp5uTbJWSPJs6bz1YCS4oCaKMEKPps9pQmW1cGPABGhzvEGFh",
  "key24": "3WJABKppNg5eintcorNNe4cgZjFhhKRtpMkiMRSg1bBmpUEEHEuC2ADx3xTKcRYqV1ak66gbNivMv7BUt3EcRzxC",
  "key25": "fivrzPD3mQKTp2LJG8MzrDrwXX4CthLCMzXBG83ZUKUtEYgPsWbAc1HjzrxqB3kv9rKDJ7M7NTatXuxudfQMh71",
  "key26": "aFFgHkP3EgBybMcMrmV4kB9SzEfT23jJrV27ZxxBQi2q1gQgNiVPYFFqgTWzHRQrQhDDH3NBQ1BESMotkZQGLJp",
  "key27": "2xtiLbLyDYJiAA97DFo55bVeziAEk9uJ2TwkJGmbFagUSpmia327Rv7NQFrK6uYpDJTesMx3brcRf2qPTxf9SmLg",
  "key28": "4LzcS1V93Pq89jkJcf7M4Kagk7R9T3SFR6fykr4wz28Wk1HuQLm7YzJSxzwah87kibD8GL1vcPkuKySpHc34pnqf",
  "key29": "2dPanSxWY2BA6JkQeZ812arjH929EMpqUMYNmUvaAyFQZt5ryHy5hs7p8PRW9G8UcKuYvHoh2C8eYZYyWwhXApeL",
  "key30": "1ide2FrVTkjUk6KPBpiJ36R4ZnzG4ANGZKiu5Kg21MoT6FdWQyeNhBj8eRK1cCkoKGqf5K7GYBGo1BkE4uTr4tN",
  "key31": "zMx2UxyFWhQRpR8oMjySLvbE9wwYtN7Xf7sv9n9ZvnnNd1hsJnyMeybKvinYyCTKfpdx4H37fjTGpCZhVU1zN3d",
  "key32": "2Y1aGPH6FNYUfVxVGEHNTwtSqqamxzskXcqCLvTxHJUWVu13WcKXKdpxRpsF129hNf7DhPecUxdL3y1PUWgXsTSM",
  "key33": "3W7HMEZ8bJNV4Vo4P3HRWKX4o5bhRumuKrxy42rfPtsPs8hAxvDUFUGQvvCNLav3Jb578x5RAvhZRyxKngBVuJF2",
  "key34": "2CdsaFekLUXESCPqWbTJwXjkspaGBtsmXSx3PKNUVkJ544z55WMUSWtE7YQ4zbgdEf4nYZTrdbXWGifJQdj1MZGa",
  "key35": "4PoHWTuzLdF9wwMCEnyRD7CN38H3viw2AxpBXZPyCjxbN4k5S1Tfp4zRSVgZEwvbumeoGsWEhSXKTRRDApj2CMHZ",
  "key36": "HjsqCFFC2CvxW3GZxgid8ufo2S22KdHxQn9WvQCRYLochhgy4kEhGQyQJomaZggagYzMdrkoQNYvQommFFtzLqq"
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
