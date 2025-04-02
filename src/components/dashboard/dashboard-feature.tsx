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
    "m2CYfe4aLdNioYDsELPQgk4JztyemkA9cUREp2x9aCCDF52tGgYcACngg2huXv5sPCu6z2NhQnEkRGEAdykgqBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E33AQX2WB6XKerpTovk68WAwwwyN3ZmLJfZuLhFqJrZgGpYRagjiZwU44BUqf7AxtV5K8R9Vsc4kvosTcDyrEX5",
  "key1": "4ZH1GkbhPKqqWyUZRbejoXbYJR5CjDQTEAXsXLhGWsKcevxyeuV88SJQM8wYM1Wd8q6uLiYW5B3TkaPkS6umvACe",
  "key2": "4xPq2uVkrfEKzqUMgP9ujji5boNP6zZT8a9uKQt5C6U1Mehe1PbsQQ54gzD4vqypumui1pGB9W7Qy1iQs1TqbcPx",
  "key3": "4FyNWsKFx2AVmgwW71uwgYeTWnhVNcYrmqbiT7cVznUQdegAvgVoAaVPxmaom98Dp5yKwPxJMFLsTJbhMZmQy3nj",
  "key4": "4qyLfJp4XSpB2ypQk12ST6PFwQj41eZT7AfdQDHQs6MiV71Pa9ze43qtnDiE4LZCRj12cA6buedzLLiTLzgai4aN",
  "key5": "2YiGGAzBmU5ZtrDSZEzNrKs51Bknu1vh9joKZzUuPMcPV9KcC6PqiQaYkaiNbrN93Y3asrSVYXTaPkezAnLyDhSZ",
  "key6": "4BstXHB7fw4iqxCufP79sFdqADJJxXTaM9H9JYkKQMD2FEv3Fo15BPYvUKnDvMCzWjb9yvc1dWhCEgxDwYsKVcYK",
  "key7": "GgHmntT1meV2zzkVQ9sNXDSWUaLo7JfLtmeR11TguJtABb7EAUG62qqnbRU4zkkkZvDGGvonEhMZYKYHZGHcC1x",
  "key8": "28fNsj1PSjKgLTkbqjrW6NW8UX2VhuStjGa5G6T88PMndHFvqHTWmvPNSkDbuZ8s5iSWmCVTnMrbw6XPfHsb3t59",
  "key9": "4jxJb4Vqm48G2NsZTfjE3SFW6bs78gDVW15q9tKNPjKH3GVBbHxXb8D8Ni6dEqepAnYT4y35HbEws1UuQfCKjpPc",
  "key10": "4Ldw3Kq7puQgnsxSiUgcDMDJzAZwjjJZ9nuzV94EwceYrnSZQrE2eeveqNEsAXow1P5K9sKSNpBgiLRkv33n5Eo8",
  "key11": "41GYQQgFVhedbaz4YFXXrfS1HbbLouDnJF51YFFGf1Xbipo9QC9UPxhAQvY9wbWDasWJRiyYYKcoWuQsrNccn3mu",
  "key12": "xYx9CXhjvD1LWvvUiLDoZBwPdPotj8ZbjS8FMKAZgwboT2AmPP57Mnj9bN5AgrwCHGMuWdGPXPajkvh6pdGTweu",
  "key13": "2P7wkQHXVYgZ1iiZSN4UsWvmUqDAJ7JhVqXTPSMjPBFG4GJpAckcCB2We55pmPnym8KxJ9Hpnm8hmLCPPCj3B2yD",
  "key14": "2hQ1mq6BWf8aHCMQQAxdWc2z1Es65mMedqgdYxYHHgV8kqv7pdeRJZ4uAP3HyGNN5QmrDDANs8zHdC6ognWukueg",
  "key15": "4Jx2xMEUH6ZY1ZcduCca1uRCW7m45PedtxA4wKKUCUW9oFsXadqQTVu9EY6gfD1LQtZn6AHEpce7K8gR77o3nYVp",
  "key16": "4ZBubAZDs8NThPvSgHzCSFEbvBuNMYaBEUVSkYxGiR8EszyEu1LJeS7LEa1FDRPXFjhNTywWrVkCwDhQqnrrmKUE",
  "key17": "5fSM9b1ySBAVq8oyLSrgRiVewAVnWpHUkkSNwH82URHKv8PxPZNfc2gzq4E9w5v5KAdcxQGyk8KW4kTrUMAtmb5E",
  "key18": "3rhVGNJmaLcWPDqiuAnDPeu5Gm9MsgszWswxmQv8LuWtVNWwkP1m9ekCgyfGMqkndrnnnPrz5BDcgLCx98XG362o",
  "key19": "4awFoYZs6EDEq1AYvaETGs9xDwDnMy8r4wzJjYL3z1X3dsQ37tbig3pk2jc6rcXGTYDWLnYhXvPYkjLNRB6H9DXi",
  "key20": "4P8ESMCXM77QyGxwwxh1Tr9DWTHcTpufcKNMhS5Qv8szrxCuTXdQ9vRwbYGGFgLo9qxyu99LUzaaodvrqpXoUvR8",
  "key21": "2mRvk6cWvUYB8tts66y8vVDeeShhysxBErZhJiuVjy1QZP7vDaXnmqMwuvNam4UEw241vGdqjmV7v3XK3E8DezHZ",
  "key22": "a3tyUr2fjDnDDy8ULJdkSXVbnaKTZmoX3Bdwha84Vm59E4UpFkxyumwfxre58fLkL4WsXfdcSVzbj3Pn2M7ZaQw",
  "key23": "wLQun7mQPrxf7zTtd85vPmP1Bq37LxrPkqpBq8Vtq2CnoNXf9HB6PthNwY4GLGVSqYUDs17pypi55KuGcYN1R1j",
  "key24": "2GEKzvwkwdT3pRgfkS7Cat5jrT4rdCHg3HugDyLekQEfCvq6CTQh5wxsgukG8za66X5g3QEwFKp2uzVuNAeLoEUB",
  "key25": "3AdsJUTcQ9mWnPGaRZ3JRvbdt17hTHgDwk6HzLAyUx9eCcnMt2vhFknmGHRypQ4F8pybUNJn6SFdSenCJ7mT1J1X",
  "key26": "aQHb1Qm6k8bLJwidNe9VTTi6GFZfxZRVGV55Egnoy1TaaZeR7Ex1KarqS8iUz5TNwtXML1j7CTt2EChHDtVeA4q",
  "key27": "XgVTtX3QuMjDLw6s8Ai9fGGM8t3upbhbjUcA1mg5W87dSxen2qAVzUZuJZTyAAYJLtG7B7LVvNxercebXBf86Pf",
  "key28": "g6f9nLH1qsRPazQwXanjkmmNoQzXEb1nMQLQ5qhx9VB7hjiPFWDH5ns3SfLqU3TxoKAJwi4hQByJmdMw8C9tPD7",
  "key29": "9BgvzZFBHSJSnHGJJdoWWmNWLRPx3FHzDV9D7qcPWTMXmvBD3UiiPgtyFTU5V69ZBdzud3qcWZCKwBzY63cNNCy",
  "key30": "44hF7bjSgH8XbJD1du5c472LEKrR1DYNxaPQPgg8kwZvYELiJSQZ3pFJkBXG8rous3VQfy4p8JbfSB5mqn1qAgDE",
  "key31": "2T2Tw23PeNXd4ByqKwoKi9QvQou4Q8qLoSNahEU316deoPn5Jo9maAu4SNn3meiGFs6e5546UgLcUmgZmXrJ6xBm",
  "key32": "2vHc8GtnnT5WpQXof1rp7qTjTyLZYc4p2yEnLpoKhMcHS55shMP1e3y6G4eF9gW96RA1uLoahd1XAQ67Ka1Gk4ij",
  "key33": "5ppyoARFG7qymtbvMHomaKYGDhMj9xLJT6zzLcFp3Cu3KarUQVFgUAVntaPn8Lb2oVaKxuvyF7TNajPpNebS8Cud",
  "key34": "LJ1QZLygkCawTVhe28FmCpwQKm2UKgmtu9YDASitUyw7vkfDk6sJ7swfAXX2Na5bWZgYZPLF16t2aXigxecDypm",
  "key35": "4syhF6DTi8ECKEaZnVobN7rdMXszt1hX6MvLkgPnAfCZBLcU355gnJsxdA1PTtfhuPagnTyHNCHCytnj2TE11zbq",
  "key36": "3UNAta6mUV76cx5NGn2aC7uA79TLZxWqrZo1wpVmN2mQNJZPbpqdMDB9kY4Q89iWb3JcG9FN9X4Nv2rEgYpouzY",
  "key37": "5q39LwoMqFBXQSfD3xz19nH12C35qu3F3djPLa9rGhybg8wukga8JjqpmyTtgJgFm7p16MUS7VetQ5wp7h1k2ZvJ",
  "key38": "4QVtTNTukVpmojkXWEKHtSE8fWpLFUoGAbC2ZmK8JjxzFbwLvLP3aZhoBQPcahye8Egr2uk6WKygPjaBvVrgeFBS",
  "key39": "jyk6LirSsLRrRAuWqjhwDnU8dNHwyx8S4j1Y51FVotn76XogEjwGFLaQBsot2Z3yfsyubQmHXaDq6qoEcHE5Yv8",
  "key40": "3p9yCcnXacubruRDJpbXthyJAzhWruP24drL8g1GPDmmAPvsdJLRGsdjvsswZqifrtQkAfHgWseNShxfuDmtKvog",
  "key41": "4PQgBGBecEFBRKoafaijgCRauysLgHT3Z6YetgN6d5G76jgHQHusMxAmtQ7qt2xfdYz4tBxvXUtUMs2pzt6ivM1v"
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
