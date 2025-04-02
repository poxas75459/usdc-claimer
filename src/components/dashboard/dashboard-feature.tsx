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
    "d6Gbuzpqr8LfjQpo8e7Uo1YdVqvpCvGCDS47uvJtarRzTxxgbYRp6wKCvRMbhQou84w8cBAxUC1zCtRaKe79CCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbCb9WPGV3j2U11afrtjKFikmky8nHkQRF51JJGW7i43nsAfUQCBZEmf4HEeujPxUg8HUjXzDSS48KkruxXmfDk",
  "key1": "4jQcm9RBGP2ww16fdffp9DPeDqZp8FKfyeEEp2oCsCmknpaJyuXWR9UB2MeGjCxLQvt2tApNEy7dgWH9muRKdgS",
  "key2": "2FKurqvekGZviSwF4GwV7bes7QTrYV8KQJ6m1jvvtuMS2dYh1c7veCUA8z4pHR8r3xHrZ7jarhrP6LQfahyowdK7",
  "key3": "57ZC5DqVL87Etpfg7ugqJxjgrNz3uNTjtyys4SzdmZshMsHZB4Q9S28gzgDoG1vNxrf4ZZN2BqC1wUvFAuxwc3Nj",
  "key4": "GEkrr1uBMMffYUHvEBVj13iDVwdLXpuaWKf6fZfSZQzo862oH3EPCg3oH45pjbgYWXuFxYEyBUydYEkqAWdXFVK",
  "key5": "4UDgqver7LNcKQ24ZqZEdxP7W2rBneDVTzu36QiqVmCdYJrfg3T8qkJ6szjkPkNqxkXMdr373W5dfGcYPqWxjTGG",
  "key6": "5guibH9R8pBQqkqhb96aza3woRpdkwsqxUM7z3YBeSbwLAtNpNfEN4Epj49uYeYQsy7dLaqwB8MEswRwjtVws5Ww",
  "key7": "fU9K8FxuwiBsE2ortVkzvvqJRx13N6N85fHMKB9wRRZsAUyvSfN8eeuedj194PHo7Wkq2kAkLhPUbkzriVbdL64",
  "key8": "5iGoEU3MQFfVcA1q2hxd2NqGS46GaMPHsy76pN36Z1aQCvtzV9UZfRyAFB2Zt3baWzFiC6vutrFmHUKhGgVtLDrr",
  "key9": "5Ju4v6CBiboBCvJgz86GZSxNUxmnABnNUAyaqP2yfPRj3Zg8fXbgzSxf6zKowfwQoRgT3T9VoyKE68xvWUjHp13P",
  "key10": "3dmfQBPL4ysR5aBDbcpoDUgvCp8DKaxTMkcN6vPjSRbtqjosvzZfSREmVVndenfqRRpK3jnyCd6Cc6fdfHiLakD2",
  "key11": "4Kf5fLpWzQjMpNGz1qQHveEpKsmMFjJUtU8xaa3RAmUiejy63jrekGPSGT1qvBk4hsgNSnUHt8jRqsV46idY2My3",
  "key12": "32J8uVBKqKeLMshYhCyHJni6bEvhe3SAx5vhqQE9856HeR2RLSFNnW4w7t9pMYZBqAxCyERuG6fYTJtwQP9UWeJa",
  "key13": "4LA8T9Gt4BP7jQ7GmiFgZLCrYSUcQ3RLUp83jmwfukAZR7kWbwWCbV7zcXoaSuDQKcTWCXYVj4LME9Ub7N4km6C8",
  "key14": "4nucUQCVWdBadcsYA5f9FyAK3qJ35jCpDoZufbEVkSDE1XgYYjc4MRpA9GrQfJFV6jCcRvEyBHLd6fXEtysUCYGD",
  "key15": "2m3YHg9h6qk7TfH3optpBKdoTXLA4sjpuV4A6Xv5epHxKNvZT76uBEH6SRi2qotaV52k7y18AxtJUjrUYQARLN6Q",
  "key16": "4dFk4WxApG5g4WAeqrUYNeJSP5abmn3ur8xK2VQGD2L1sP3rCfTWewAeo5KaRwQ5AmADptKAKsY1Sb8EjETevNaT",
  "key17": "2EmoCwrE1XD5fFquyifTHTD6w52EwrUEsiF4RXpuUxkGd2MGUCuSALRd6jJVhTq6otUS2cpxjZaXby6yXjDQFj5M",
  "key18": "2Y68NECK7pRrHHN8YZjtPnLuKRdbDXbvT5jyw4GgCdG8WKhqP65fbGYFVcrxbhcPTnix4QyZRfGDSk6Vsvh7oCiL",
  "key19": "2j5MMW4NShekk4pffyKoHBqLGqtnHrTw4LqYdgmzxGMQJ9E6qY6rc5DhXQ9PieFk9ZRotvGJwt946czBj1vaNZjp",
  "key20": "2G38b9it31KWsFrEXAFksHJTP6YtMYt1m3nyJ4nYvXHLX2P9tjjG5cmdCGjgmrGbYsBsvEE8oiyKfGqujmUCKquP",
  "key21": "ZfFY1Y7kYbTxwoGE1QEym6XFCmhhUfASWugSXsSkFtWFy99Ymr6ngQc9YREXyxx1e9SfF68yEtmkEHAnEgFr1p6",
  "key22": "36UHwBbVuPtGK5Jax1UmriH5pFxTtzfkunCSzhqNHk7v2pj4Xb4p3QwjMRU2Ujos3jrj7R19437zqHmSF5QXVXHq",
  "key23": "nf7JmwuDw2GjBFHpW8vQg7XWFkKeZm4YSH9WzNqgdHUiTxVvQRpfdFgQjXMCYqvRRtLX8cKfiPanMQR1y9D9D9a",
  "key24": "5tsXK3fHJMWrouSbDAWCiyCJch3HSi4QEpKrFuuxa566pZ3rbTHYUGZxE2n9oorgdMNumCQrjgQXPinr4hKyCM59",
  "key25": "5jKeZj4Hv2WA7tjrTXFAumExKCVRMMUZ21PvMeRnyxEq6kSinfJoU7LYs1qDRApyS4yyQrqbejgEtyYoJwfnhoZm",
  "key26": "4TL4e6buEoqEbbuNJFkCXCohCXqoT81AzUbHx67LPXSLktxHAmWJKnEFuoaZosmmzJ6thyaV5kK46ty65PkyTbc2",
  "key27": "2tBnHhWVaYVXizpmpBt4zfUdieEDjFWEsZUAqRUfnGohRtDMr28JfYWUmHRrXGjzkJ5mTks1k5vZbWdoQR7ePc4E",
  "key28": "CWMKp6DAEJZV5QAehK1LjiNZGSFv5ZsWwYtviZBzL49MNUtUptzwHi9SkuhRuo5U15164Svoon4kSqmjkVLD72V"
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
