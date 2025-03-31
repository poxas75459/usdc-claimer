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
    "2Bw7bskaLRjmtNvHMMCSuMBwZfxNb8H2cYucmnm8Tmkj1HuPbJm2Th6qcm3hTFPBrx8BazCvXy59tnFB5FcnbiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V2HgMwiagYEcbBjzEYioZQYNxqsCokjwrW7hA96Yiayau23vCfSR3JagyDumuTMqyismg58XJ5fgmMc31AQpZ4y",
  "key1": "3QnhqxJdknex6gR298Eqi3N8hdaJ3xcwyakcK3jr5n4eXrqm151fubCemeUvTqffQzXL9Eeka33d83dhqKhKizxw",
  "key2": "5suEEZKzS1nKVMkCKJWaZpUSknC9NhCxaReAuzTKysG1CmnngbYbVwmpufuKQ4KjzMmjVK2zmKY3SxhJvFtA1jBr",
  "key3": "uP7QeHrtBRKMTh2ZkuzeMKMuaXdcazxvHTB7uFKXVrx2wHjLDGtGkbyP12opwxGj9Yw16dUNGBchMfkkYGENAzc",
  "key4": "2zJRQfNyjFBzPTUFSEGy22bhFjYBmaqjqf75EW6RiBGnBf8QbFMQLtiTMcBnEaoPLNQcpB3hDm7LsGLG5537bd4M",
  "key5": "21uzrfABJJmWeyqPM3c24U7X4g2qMJUbD9t1PNsn3irt4PbpYzFp46DLgMTRqT2ioJVH5m5fQ6GskpRySEmf1dCR",
  "key6": "5hQwGkHEy6QPGynQD2iSyf7tSztPatGqe5HGkQs5U32JFrB6GeWe359Aa8z2d6XWV7qaLCH6jnRayby8onAfjpPW",
  "key7": "4YvxLMEuzxXJSL1LByzhyaghpVxDoJf8Go8ZAbjnAmYnrtbkCrbvz6TgrcuRGPtJPDyYZmfzuqN9dt4zQddts3ST",
  "key8": "2b28hyDhBpz1nFYWrVoPvMHTbDSpoqf7Lndq4RCK6wn1YWx8Y3NrdxMNyvwxSqe3ECdaSWUc2kdDezDzUow7S3Bd",
  "key9": "2LMvrwvhJaTwu23R8GdihiY34mRw7rJtsNippdqXnZzquxWF2WyBecgGwvnU1v8yuVjiiPsovvkpaSfjxGER6heo",
  "key10": "5CbxQ9Lr67iT4jpCe94owQphZsBRHk45AwrDogyMecm3p3rxecxiRWPuUJ9m46zg6bn3rMvrC6nYjqXYee78pzSo",
  "key11": "5sV9Gcsp3GhMegS4H6xKLbLGBStLNFmHhc73RHaNXd5oV8yEyVB9FpZobgWNqeio74UeFtZGJnZnAPwT3HEdyyGw",
  "key12": "23gdj6aXoKraCeEE9d11AYB7tQQAt74Vgo96dkbi4xtBsHc6FAAiJsBz1ddG1PPPuQsUWQjpdynzYeSZYBKpjN8U",
  "key13": "3VcNyZvSbaywWJ9NKNphBypT1K6X2nzHddyJ75wSjBA2fz1prHPnxWZqU9h7M22SDfZDnCx28mmCsPShQpJPSeGm",
  "key14": "3bnE8799VEgjrMxf9woRVqyZYeDyN8v4W4Wx9dVRuxf9iMm3rCEA2SqQYurtsdsvXiksPkNgFhhZraWsTgZLX6k",
  "key15": "3CN7wj5H7WrCJ8DNJxStd2yfNrAjiKPXMBPTVRYUj6RriBJMge3UF5LcKBHway6idjzAYm1ogu5fPRRoQRaKL9Xo",
  "key16": "2J8vL43DA5s4Z5QmC5iv6kbtwcU6E9Mp4j5G6ujWdDotRPkyte7aK6NU6BHw6uP39m4LPbCvb73t833seAD74KnN",
  "key17": "3pEvzoobdMSqbngU4dFruaws5Dse7iDFmnya9QZHMFgi4fgoHwZzDTg9EJ8PZCB2wrTRAbDkkxf9R9qPwJq63rGA",
  "key18": "2ZxgmgtT58JjUySADdfJSkQWGvLNmktLFnNa2X7S5r7gpoBTw6grEvTfeqGXRGhjYJahBZtPV4xXXaBwJKV7nXx7",
  "key19": "fB1ieoJURNfjwhQ7tKgvueUrbA5krc6nRqcEfgeNdSMcyLJ3LRSX8mQ5Zir6XsDZvJ3YgXyvb9VjnDNYWTvUhb5",
  "key20": "3V5J3r5DyGP6nPnEdKCVgyNnd93Q5fo9uRVyohkEQsxpFAAtGhBfNyrMhWAjzc4Ak8KaFnqEkkFDKeJtF6SLeZc5",
  "key21": "5ENHqJR8Ac2icTdeJcsvuqfi45xA5TNaULcZbrH4d15VCfSS4aJedFV3oi4fHtEa5EeHzaKNUwJegJUEpRb1L34y",
  "key22": "3tzY9xDE2P9poYhRNzGxv9J2KPfyK23auSAaxjnrTsLppwFwmmdWJzPEFNdhCuEonB6NjrE1X589UHWt9eQTrAnv",
  "key23": "3XY6NQxTHfmbgU8Uf8NQCRPteyQyF5vuMmWKTxVhHCP5Ft2P5UWRUGg2AHy6B9pjuFu2ApmRkms5JM2fCNJY6qiL",
  "key24": "5DmDKq8LVTLL6uV7jxFQz1ERpmxbP6TFdx2ijSmfkNEv2N8gg25W95yRExhQA8uATYPzVMikC9i8d43hPXjT95NL",
  "key25": "3VCWxBPnvMHc7sc3RMuZFfYGuvpwkYjEon6B4Sx4mJLcZiT84Wn4YKj4Qk62RqTUM6wGhZBuKC742yULgd6dQoRu",
  "key26": "3suUKzJAa1xwgVYZGVXhRV1oRqUFZqQBTHHpEQq8Li1vyPFBu2nSBXtoPmeY7Ayfbi2rTfwi8qEouLJS2SYzoeVD",
  "key27": "3KM3YXmJGrjwvZ9ek9w98Fgnx6x5xqzf2WhkU3haybWrqwy2DPtD9fFKpNU1mGDmD1eT8XQNGQcTmHPh1C7bjAyC",
  "key28": "3fzDvj6mp4v9NWKaN2taQ28NnBnESCYLTSooSWbmhShRU6qgrFXMRvJ6YE3o7YL4S8sJERgr1NkE2gEcmJEKCeAM",
  "key29": "2qKnYomuybGKB7yA2YuzFjuHQrrPaTBCkTizmtimnbVbZ8DsbRRoUKug277G4udPh9R6aVcf94j91hAdqSKUmF1Y",
  "key30": "3VNT1Xm5T4irVYuChxySAw8XJzDuCfmJ6Y5sFMq7eJUbDwMtM9BuMrFsHYHGdRPZ2UmXFQRVPqaXj6PWCyphAeUL",
  "key31": "4u2VdwtjQdhiPY8Jd5r7TQKiWQCemxrfPWvKHEXT7NLhhJrCUGWGy3uDd5xR1WJZ3idmQ8g8kQMJd8QiCKXx4WZa",
  "key32": "4u4xV6JmFzvFD9k63PqcZ598s4Ue9J8rTcWdpgNb6Ufpjx7pNQpdDNVL56eWHTsqUtyvDr9meJHXKnA118YxfzKm",
  "key33": "4X8MoV4XyjzwiRcQH1vb4pcE9kmEC7armwKo91EFLwY4KgFDLtLr3uVxQCQA9vdjM16a7EVJ9R3sNLubZGbPABCZ",
  "key34": "WbZkxffUsX5L7YZd1se4RXTePay4sizj6z5bHdEcn8SLPkcGncyfzvrRabVyMJXxp6YPrf6jpXzzEPo8kCDTbVy",
  "key35": "5yHgwgcnGNnqteLdBTr5TsY8sie9eWw72Dsai41GjRGp1W4tPrWxjWwnWbB554FDQvsnixe4yNFMKT5rCpyCkYVA",
  "key36": "5naJFz3eC15xrXCEyR9msU5nfJdpc4QGh1UHhcfGDUXGToq9SpXAHyNihhPBb9eX5iQq6Gh9edX7KxJ3uCFN5a4L",
  "key37": "3ERJZSwvrJTqFySWDe4JW7oHYpLQ3pHarG2W1qG9pyBoJu8epNp9YjZxqhbKND34RzCwDHN7DkdWaewjo3vzxFK",
  "key38": "4mtYBqjD2vsovfAZXWr5yUA2kvUFzLUrsUnZfwiFoJm5c2cXBbo1H7TD7r8j49KEusqQomj3bagxD9mJnj2pqE4B",
  "key39": "2dmb5rhaFjZ8yN254Fb6qzNSHhJxNTxWEMAy2zNhLw42KsXtDrf4L9AAGrBGtW2PPxCRx1J2ogdQPZZbZhStGjyn",
  "key40": "4XFo7bjqBXJziwPtSnyPsxamiR5ibvgxEJMQNeYapB5YWaU3sT8MsGfPT2jmkEAnbvZaoPJ1rYdGwCJaAXvaw1A3",
  "key41": "3HaupZQ9URBtCoVYiwnndR6aGRwrB2hw4AuJK4m1xGk5SExzK3rqqmVTphVqWsB8ByBs4BdfZWTckiMWEmXevJjg",
  "key42": "2yGQrNckbdZ1pXa7kZH8uzA2BRHCwLxzTtjSopi3aKYeCeYwuxhCp9PxvoiwtRiukShTqZT36yzHNvuRvZm5N9RB",
  "key43": "HgRFqaDzQEErwxkNfWzV478QWAdDPmrpHaHvmTcduLMutz7MBQvJofPdNpqdxVbu5VkvM1BScvevm6TQkHwm2Ab",
  "key44": "3FzvpmKjP7Ka5JCNfNPtDWrnNYEZJgUmgeos5WjziV7XHTwUL8HurALZrT9gAcE376JsnewFfgjPcMuBuWgFbBuq",
  "key45": "584wsQqzzoJ6dfoBGUmLLVJZFAkL8J2XbXBZhTfQFBVy1mcu2neuRP4bCssyyFnvmCHafE2pDtXYDRb54GTmaWM6"
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
