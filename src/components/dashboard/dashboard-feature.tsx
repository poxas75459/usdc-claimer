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
    "4p8Xm71ZpcZ49Qw3ekkqZBYm37CeuYg3Q1x9vN6MaCBTQi3TPGonpi9me5igei3Yp3irXNh4FBpMHiapRjpfurg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KroVVoGfi9sPAGuPui78BHx3vRi1Qvz8y3P3eiXSkt64fpTwjKMNStkS8DKd5KQrn8MgzL8TtMPCiZ4r89spG63",
  "key1": "5niKUSQk2on1GrSW7TmhBvgS4d2bSXgw6epq1ugknUgb6o45hXJMjx2gWwtYoCPFGTJiexe8ekAPP67F43MDAjUp",
  "key2": "5r2FSbY5P7gAa7NQFXk7wEaxXki1guCstgTCCgcs93jaN42XPEHp9nhLnrNmRgYKXUt2djoJhoCp6wu3PZHhTmbe",
  "key3": "5pTEa6Uezfx83iDkYyzLyUDJj1dbz7utncGVkv8da4qAT2FK3Ks9xqxNgxCzVnyfLZnVzJFJFP5uErHwThGXeS27",
  "key4": "FhXMfvJbj3ejg9HZrqQiHBH1c2rh1RF4mfgYaUu3VxpcyDFGEA1rAA9nGmhwksqMG1EFoHUEW6TuYfHC9uGcw7U",
  "key5": "3VQEKpCv8tyR1U4GgXEp9rkedYFk7B9rRKS7346tpqLWEZsb4hAvNTnrrsvxf22uLPaXRmqsxMWckTvohqH3Rwyv",
  "key6": "5uWVuVrEurZPZbhmGPNy4gbhFJGVkVySmL6EkK3X97bJNsX5pkm8Jhm1FxGEAU34uK3Z9NvqvnbdaEFVfVpQfTSR",
  "key7": "2c1wnjtk9QFJepfjrk8tnLLMi3pJkhq91JMG8Gw1ePKBxoyboyiufuMX6tSDuy4uRVvmgiwrQvhs9hCMoUDV5Q3H",
  "key8": "Y3AnTz5Z1HZz3aidmW1DmCBhzqkDU86gzQx76cUbv75ScSbZdmTHefAzM2JJvgvbGoBhpVUGdq7BGLrr4WigikD",
  "key9": "TksGvTkGwHm8RJV1ywdjTVcFdft5dN9cHBKvgHrACQWGrxSfFpwA7KHLNPPCzTJYwxFbUDoVpHU8gtK6Dd97xvo",
  "key10": "2f51P1YgqZ9hc7v8JhK7Fx4AYzkGqv5CCAm4C7n8DfTdLq1kS2SR1K5eztqSWwgv3kFqWHU6revayKEbsADsBJcP",
  "key11": "4k99oKhoKf16z6FNNKXd8zktWsrSdnHEY1LjoJhYmshP2sw6uf7hpN9XCYgGv8bqt6SYCyVSESSr2KbAgVFEv5Uv",
  "key12": "499V2ZCDGmQzQ7isHKjZSEsEwWvnGEHc1sMiR65PDdLG6NkdKxoPyknqTpddrnhaKoekcRVCie8W998g2CRProSu",
  "key13": "3CF4MyTCiYoRey5rRn8MzjJNL9vZbHSwuHx8jR2LwevPcwdUXSV2awnLwtuNKaZswPjnprFMXAjxNYzRCYgVBZYW",
  "key14": "oodw5k4RuiGVfRo2NSfc6UUrBU8TsY5s4bZehHdBY8FcBLCjuYCuB1GM85BPiyPCheAe5zSS9JEdGbjvgQXnNCW",
  "key15": "4YVdibvBPyUYazgTaxHUwDz4STW9qH9yLZKVuyqpeS8B7DKrmVd2CGDvb5NQpsYo8k78jC11NbYKhx8Em2nNwMKu",
  "key16": "4HBg4fyKTep19QZC86ZLWZr78MUfBKXsNQR3KpUAEvDJ8mnUtHDPg6LPFAwAdbdhHBJvgi3N6pyDvbnae5SeosVg",
  "key17": "2ecy9sHsgvRPvhjNsXRNFGqiWwB439rnHWYqyQGw74XVJf6rmFCbB5uhikhuQq9x47MXu9siuwHiKfcqogruepFL",
  "key18": "oSVYN1NvCXrQQwpCU9Akv3k7LMtj44X4qJ78ZKMuL7wqnDq3Ws2UL1XLvqoy52LKZQeUZWfFzo2wgjn1gFEdbWU",
  "key19": "3dGMfTgkqoQQDVs6qidsPc9TmAWirhbSMvUdDX2nsqbZ13qjoVgxBkS6qy4omKZQWZcFgYYL2vryBgjAneqV73Ha",
  "key20": "5Zh3KeCU9jBeTs2aUe3CiuaXq3VLcwNUW24SiKbS6rcQFVwDbvZRsAcypNnomKJy8m7ST7aKjuMBe86rc2PKQLdq",
  "key21": "2QVtsE3MPjD1zLjY97574t6o4DMoznFV63jFLb4gQ9a3QCqXjLDrH2m5CHGx9osEAZmprPstzqN7GoBvzkTAugTk",
  "key22": "5fcjBur7ym1sg5J2NuJ3vUdzx6wEDY6ReRmiaTEU7MVuZf1EwNcvo5VhhoEuQNBnZyArJVjLocdJvUFKaJgeAFxy",
  "key23": "2orr7diFdTRwiTYLCufk3nB1rpBf1sy2dZdfByTy5Km8kvpFwp7PaUdMA7ZHBzPj5ftXBpdsavNHJxGdpWTu4RS",
  "key24": "5rZCxib5Hz2HB64THxPPrgm8xLiXzjFMQj6ceYcME6tUfnwWuTiMEwSFqYt8Ke3auKPdYSBRsVXNsGdoP8rdBHVF"
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
