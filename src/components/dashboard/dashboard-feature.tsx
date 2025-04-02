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
    "2L4gnprHSzda9WY6vb8TFNKHjg5MvYL9crWBGqjkasbRsf6MyE7PBn1C3vsEnkuWgoua5jP6UoMoTYiAKEs8Xdzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Yfkc6dezpaq2apnYwvSMrvWGUZ8dHgnZtstfuAKwV25ofwFfYQVuKHVqFoxUMEcU246dcSGzvo9mcxynkdk1vK",
  "key1": "46qvG1RTTFexUz57D7od6tnBuznTZdpz4Bda6HURAU5HMcGvoXZTTZPNaU3Mj2sT4U8bGNVbixGEMd3nfjxj5ru1",
  "key2": "3Ta918xqbRbQ2MMCJavLHLd165QE87TtS84AgJSnrZFHiUz5JMdHgfgtdRMG1e9uj77FqoeQorMNp8gzomsUJ73u",
  "key3": "5KBXk2KsqEeHosfQjDW2cNb37nsbQbcgkyZb1Q7XCeo4QFcPjzC42627u6dE2Nv99rKMCFXJkTRzibK1LJBXHqDd",
  "key4": "5WgMkwZ6fp3j2R88HNBJngGB9uGqFxxnkbdxpAqnD2kCgv7Ef8c2cWshsFc1UEbqfPvhd2hyocQo7o1KxRMzVqFD",
  "key5": "2AcJc9yGAWAUbsYwUDrftXQy3xpVEUrUego14zvaV7xhxtjqZqLSCUJj8dvd8H6mEFmo1jJMEHSC3bdXocWj13it",
  "key6": "2Tsumspbxx4fx3EcraemJwyznyivmFSfuKMrvTLjcCfHDcXjrA7xtxaJYGqQdbtAD653MtD4Rw3nrb29V3XtvEFu",
  "key7": "4dfGfbphrrbt7ftiyBCC5brnE9WUQS5QLNDPf4a4YETxmGRey4e1KSeWSHfzhSmmyf5LLRTtqfxKVfhniEFNqzBU",
  "key8": "4EKzXTrzGuJazXZpMyR5XzMdHyoK8ioQtP5xpMtP9x9rUtoB7snmNxqV7qY2pXauQp8g3hM415PUCFqyAzSySLtD",
  "key9": "5bGNEYe9fEtwsjc6A7F6UH7jV4w1vQSQcJZpQD8eerWp2pNQifjhsm3qnbNxkiMc3xxzQXmqhzWp4K2HMwKro2e1",
  "key10": "4FxrakbLt4fMK3EHhc6ESXYeXerhpP6ZnLdEPDNG9VxqzXyNGGyKnyYXCjwDnhpH7MVs8b3jrrochGdhK42K9wbU",
  "key11": "3pq8tJj1RhJpcrc8DQPLegDhRoppB1NnozaxG9FpU5CDTor7PnL7G69XEXTcUEecECg7MvCkbhyTrRw2km75fZK2",
  "key12": "dBGNfnSTnK31hkmjTbFkiuFJDvcxqTGWdEoa27bKy58vTx2uqYtYvpQV6u2Agz96ANM1n5bpneYxKJY587yooih",
  "key13": "65nxGHYsgi6hmU4MV9gJKbDcE78uZ5qbc3qvDH6R6xKKFSrxgPvLED29shA2G9zhB6vcGb8SreJ19eYkmrszybSE",
  "key14": "664YmBnpbLAVpQDuTQ4YSG4GZymVkYrXfhmXoA6tA7XSwiNH5sfda4dHduzeNKUQL2jSeN33BY3yaumVVGdCr9T9",
  "key15": "3qMmNxYD2EDph7HbbhBHFPBjP5YH4SotrTcCVetSgsHY76aXvDCQV3MW1hWuYVPwGscqZVW7k3FUYpso8R8rWbGN",
  "key16": "DDZPoxo7D75rjQUZ2zwwggQsxmKK9RC3d8JWzBG16tvaqwM9PZ1Y5p1pabawZRZSpSCJnQruuPhD95UVjMdcAaf",
  "key17": "2WKiTh6BHtYpCktmnixQwPJb3u4wPCZ6mRf3VRcEZLERnnJiGtAnfvcthBb6WpcnPZ8FscFMWf1eYa1rbtwJZVto",
  "key18": "2FkZGFcVT3cmUiKbb3krkCuDpzdER8xz9Zf394biFSWx7yLUvawkdQu3Fg5Ji4YeQQwhH8KStRYtUm9JxTb2nxVA",
  "key19": "2ut8ydcDcqUZ1MqXojFY4mCyv5W69VWCWN7LqbcUHaKZDLqLFVeS6yKP9hAS9mfXUYT47ZgKrwq1svZKexn6Ysac",
  "key20": "5NR8n1JERcnqfvnZkxknRVB5veGWnex3whaya7ZtAnDF2bJrA8V6zJzpSTT93SiUMD7FLBiBCVH5Y5ah9p3iGAKy",
  "key21": "3xBcCuPmyihE4zZ9WAvcxwb8sD6qFpcLDKRZpfDNPERunqTs8HYZhbf2p1Sp1bdLZYF6VLLJu8QPb2eXu8TCx167",
  "key22": "33Nqy7A6E1bMN9Q11tNLzC3KwjfagkGkL44aF1sUGjExxtMcgpttrqEktFrCpUiVTELtYrCKcW4prjyChLHq4Ktd",
  "key23": "2NtCexsjQddc4fo6vkgjA2L1rH4boN7a3YZ6ZjhDdiUFLEx6Mmy1u8N3WMMqGjAUc3gKfynDhLzkexNYeKgvooAC",
  "key24": "469w3532JDP2CLhjMuFyZz4Q7vqE572hUmJ2wQKUbCs6F1biodUsf7csbAVf5xVCghhKvsHCEDfeUJNfQaJXWMu6",
  "key25": "4A1XPkQnQiDbXX1WJnG6b52aeForvhqvH88Jkm9tqWdCKZwDgoei5SXn7RvScZSr7neobRmFEjw14gr9JxcUE5BS",
  "key26": "5uPbv3Wqi6LDszWKHQHU3GtXdbRdqFmpG1DMctpGaCwyH1LzCLZtAftTqazH4EvQaKKz17EdRjfkJcXH5bb8WWhr",
  "key27": "eRpYw2xuGUjftEBNPazoKKPjYthC4rvYjBAhi4UgWCWuXDxcCsKQtMKKncod6tibuwJYgkdcC7MJLED9uFhDYRm",
  "key28": "5Ka5G7mipZyQ8N8fLRsbi4Wn8fTQNcmc4knvJdrVJmvAAg45GHB6cLZPu6MJrUuSQPGiY6F6pf3FrSckkYu717dB",
  "key29": "4GcHHFzg1cqQuhA5Am6DK3RoxqEMLL2MsRGrvWPDshWjgnXSy8ps3AjFcxA7122CJc2rjhwTsPgHNAsT9PU977cH",
  "key30": "53sgmibkTK4iQHTvgtYnZBC6FGTBbrr5QxUP3iQywrFS6iF69AngwQVP9uYSfyMGgaDuABtJSJidHW8GLA7WoRHE",
  "key31": "oo2TzqgRkxi4UDXDQhqPtetkDUjRjFViCG2jbs79dGZXVgqXF8vin6bNL7U92CAp2npXne9WUCwJinBnh3z72qQ",
  "key32": "64VPtgjRthiwzaZ9EmokkXAqvfc4M7HxBsQY86ARCcEuj8te3H51FErVWMwZukxuYnc8nc7eU9N5Qc1yb6pscxYh"
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
