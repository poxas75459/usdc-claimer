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
    "2oSANXnB1St15SzRnrTRL3yj5E7iAoGipRSpPfCQoj6jWhdyfunbFFW5gaz5X2hkW6iPMuxrhH2ba2kQKtb3mgLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iEfVJy7EjL4fEixmHBwJpM85zg63PnVEvLFB4momMLMHeLLFLkXSWZycgRYTVszH4d15YAogE6dKP31zVvZPHPP",
  "key1": "4qB5LkmeZ7oqHcRbgd7Eupxf7nxJrXykok2XVuqMn6yvmcpxPP6Hm3Dsrfc2cRrjdeLoyAkUw4kWKajTz7rqZr9h",
  "key2": "4H7U2MzUK3eXYYKnBaBCzuTE8UBXn6vkd1CPtUUfNKqG1KUVwY7NA3a2kMaZkGZVbcQov3idNJNSQDV2Z5r3Xxor",
  "key3": "2vC3KJN2tvdGM92u9V1MoKq2TEZZDkJGrwYfc2kXV5Uz5rJTZ7G9t2LchV2LEmMbPNsvTbeujLerJh3jwHsa7RC8",
  "key4": "2MNwqkfjJYGbEpenaoPoTBZaHWsGsEgcZfwE54z3UFga2VkpanhACdb8uNVRe5MRuhaPHS5pWNSPRzvAXtcBfw7P",
  "key5": "34ayGcd4rwySikwu17zFDkueEX3nvLriVEoGCs1LWXvpKVg4oGV2YFzoYNQCw8hucJXRbYxx1iGM8FsWEXgxGfU5",
  "key6": "3QtCZQAWMzzs3ZerGhZvHcnZqNdY2j7kH7PU22z3bJ8EE95axBp7PnN1tTrKfboD9bAHfWp4GDXR1LjEYADMb5Pf",
  "key7": "5LxW38Bz8PokKaZNiZ3MG1pS77JHLk8mVKCmLpyxtATM9a7942Box4sTc684CiqVMRrUbnmHkfpJoGfAi6wS2s3o",
  "key8": "3TbYkWLTCnHKtoekXSjTEwumt1y9b65yYqBHnzwP9oxdPX3S9C9MMosRcTGT5mWFsRYbVaucLRsmxEVqSVEcNvsW",
  "key9": "5DHrVL2tGGZ37tXEbfL6MtoybeUSR9hyFSBt8MmtPiFXhJJsVgTuF71npHc6oGi3nuSkuFGrguQBj3C1Q6dD4Fpw",
  "key10": "4N6dbSzdoLCeUf9rfuq8gtmTwgGsptgT2fVZYoceKRyUD3jp5eZrxQLoioFpWvW1Nkf1haxw9v7VjyDFeX62ZRaw",
  "key11": "3RfxcQ99zzzcXkQB7o2f2VMFqm58ZDKGgxtbgXYA1bzs4hb8tYKZht1nkB7uWvwjZQyXkJafwN5MXX81Cx9CKmf9",
  "key12": "45oF8enUeBazyxrYrd8egjt5kG3H1UajiXGnhvcnp2QQ7D7QvVHFvQzZZGdueV973pmHVH7ZxgdzXbfjqBcBVXjs",
  "key13": "5vbhdet5nG9kn5uYmhwLgkxGV2MG69yTEHHHY82DUX9eLz3LVGSYfhcr8XSKr9MZnxn9vMUxFXiqGAYNRhYaQN6k",
  "key14": "5fW9kt2UyJXBBG2zg2Yk4omqvbzUAkvPRFaRbVHTTi1v9vYhV3yuPiWnDpXo3gtyv4ruNgpLTHYNzhian6kCsd7g",
  "key15": "4wmggXuEriC8DNuGSnmkPEAqNQae1pdofdmjiry15yEwStPMPpYpfm3kx85xU5oLoiyRkopc2Pj2pRXZgSM131kD",
  "key16": "3eEhVGtTwA4rgvoGt984HnZMJ6nxrpdPphcH455iV1EXBixqHtXZqKy25vsb1KpCPxGtWUxzXijZmsPgBHep1XKF",
  "key17": "64kp9RTDve4tBG9ude3g28vvQs9hZ1twKQjBc6SMVeVyg4zcEaAvEw8xCSdM3rDy7J64YFh3Jfab3bWG5QJvj74X",
  "key18": "dYXm3Kgi4XtKveEkUQkc1F35ZP2qcPwRVcVtd3MbosdqSRsxTNuFbsxwfJoHxqmb8CAXUfmysCXr3bYKL3iDDeq",
  "key19": "5CB979oQ3dUUXMiQSujYzViYcti2Y11kiuudNFCbMppVqBKzz4xeActBnARAXDibww7wS2ERLTDUYeknCcTD3us",
  "key20": "cFAbqUGPth1L8mLEkvHTWUtr8MrmMhECv6aErHezKRytNrgNcoxfEhiJHtie4J9YSsG9mPFZyVfGmpqDqsgGHud",
  "key21": "4zY8jBMfUao6SvhR347n2e938pkrK19FStBD2p5dMB2XZmkoVir6JKr1HoA1WLjLWctTQp3P37m4qWRe2wUS83Md",
  "key22": "3wcxdpHTfNvEwmyAAYRRjEYDJH6AVTrr5KQbET6cNZr69eoMYviipjVXV9d6Vvy71o3bsXfVj3CTXvRYnt77YD1u",
  "key23": "28teoJw6wXTMLm2Ymhg6nrkQ92ZJ1g9LdMo1R9wsqMBoezzWm9mL5z9ZibdMFraz28X5K8RH3QfTq9EUaZGa9wBT",
  "key24": "5JiGgb772UU8Pc9pz23db4EgsE8kbCZ41StmE1jCPnzjaDZnWrigiN5EetuqSWGy3imhdZmPRak2N7D1XHqBAz8x",
  "key25": "3BKn3DcSMMY2yd7g77uD7qhzWTvYk6n6ZHipwcp7gwvzyQ6QCFA7827NQhZbdby6jHLNW8PSubUyyyTChmv1Zo2B",
  "key26": "4qHBDFTPeWcJP2zGXbWE53jEGASCZshJXxrbDmY2d8Rdnw3dy54ecjgAKBfr6pp3YDAGHSqxQSkpTS8ix2GyP6NX",
  "key27": "3Y7FBScajdc9wXdzLqFdeQMuyKBLGLPJuoVnu3bcZGQ5TGkkQafkeTpeRCwSHeLFPRxCqV1TZ4yf7DbTt2UjJdjF",
  "key28": "4TRpvGdAeE2ZFqCULfzHgYvqZFctdWQbAjTDbRsU1v3Hidqs8zjtfcjmHuyMcH3haFkvJioQGX26ETsHt2U1uxVm",
  "key29": "ojT1MTGyXgzbBTNcuEgoT1jtt4SM89ZXMfBV8yrAEz2RB85FgrWaTF6k6Byz8PhNTfMLtoHg2PrZ6ckceVQf5jF",
  "key30": "5a85xQU3XAKAhw1Nti6JevZ1HsaUDUdPczuTTGx7Jf4KxvUWexCNeG1etneYXd7gK21sTmhJhXNciKbmpmaFnmqQ",
  "key31": "Tq7js5QiRWh89SfEjyZ2ukkTgqazJyWA2PZGzfMpU88EDQfzcDyKcT9y1tEtWBF7BGGskdQwVqAC3e4woxJrchq",
  "key32": "hh7fwDqnM8pjvQYqgUhJ6PbEuQogPuAujKSNMMZszmjqq4jhGGwbN1kVKBFmebT9SigqarjBMyrKn4uU8dTmX4Z",
  "key33": "4x2TZnudKpwmrgTgdfc3HtKZ9pWhs4ZKTFcEHmwAr5EgDHhdu3H9hsM5mLYXBn6Yq7dqZC1hk8KD3ERqhtp69KD6",
  "key34": "3Atnp2ZuZyiZ2M2h78EmPZpYr7avxBRL2JZqH2TXmNyEwVmcMtpiTMguJgtJcE1s1M5o5pBjQFj2m5ZyFyxLGscb",
  "key35": "2ZzczKUg91v6oRRjV7bZitS8eGkv2B1MHZ4yi4ejdppsGD4CUNKsE6bR1GtCaBc6QXgpiBkWzrbdGTHzMrZ87MqS",
  "key36": "49x44TSScR6E4kCzAM6zQTfrUgUSkNTgonLhoGvqx35e37GSbvirhgNaX2APTFSdLtfKuiiM3c4p4FzhXr2anC5z",
  "key37": "3Z7S8rJjgm9Pb3NzA7rhPsUWpbpDAhW36253xBhATZzdPc3oununTQWXvCepZybb6g4PSubgghu9BHzMAFue5hoT",
  "key38": "4rRbrwa7SR81DgLyp52iKbXYUGEuobrA3zVuCZR6tHPTwx7R1W19JbqQjVHpSKTb4VQ892ZipzL48ekc85KHrWUa",
  "key39": "4VFPirNuc3gwLh1zKtCk18xAd4hUHTSrRnGTHSJN65BhMVHJkZAyuCCwKumFHjfqm7g2xYFwUSUnQf4yRyKuLAjR",
  "key40": "3KpaND7DbYeVZp3cNRzr1DSvrcTdopT3PR99kXbUga49AttdzQVf4somR2eTzJMLRsMnthr3YcepChiM7SjSeZik"
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
