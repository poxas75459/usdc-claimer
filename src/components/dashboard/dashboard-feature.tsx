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
    "5Y2Ctpm3d1AHahpqbHphnhzBSRK1UsLBZ96WTwejrQxqenK7tiG2DX9hwEvdPsJnPLsevEjbF992Ku8Q7oX5fTye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mRnXM1P1awReQHQ4nouvLSN7TeXng7UAfVnFDUyhKzT4xaQkyQosR3BzVSVhNLe9A3z3caNe1M3rbirR8bgBPQ",
  "key1": "2BCoFYWbzLrmSVj7v554xzuXRxhkNAC6BpVAa35y1jUPf5yXxpS3sVwKHAdoccT7BQovKBDV6rGbKNUxfu2udnxW",
  "key2": "32AzdYVJy6Qfy8atrj8RDxn7SEHyD6pgt21vEYDnVgBWF63UivnP3dTvieLvaTqWpEd2EHLwWvxpJYmxHVuWsskZ",
  "key3": "2AHz9EoFwBUxqnfKPp9GMmqtLdvjXhXocsznMmUrcz3mN2SpyCg3kgQ382rYDArpeeFQWGnr8TSdYb7wQ1DMwxR",
  "key4": "5obhRXEDFumby7RuvimSoo74hmoYszKb1ooPcnnHrt3MT55cTm9JFttiLN2P6SuUFDeKd2k5AU3RbA9V6jwAQnMN",
  "key5": "32ucM7BD3uX7YAosDvGcy9BQnJqVZ6ofQC7ePZoJ1MJrT5Wj9b99pLKPLSKWMLwTGnWYHCTspu6q45y1q4vuiCi9",
  "key6": "4HaKvSn3WYKaqhfzdfB96ocNZmSzZraek4B9tsmqMn6WhMufLBmMUhj5jPYrVgj2MCWschfZpYUbxwfuCPYL9WP9",
  "key7": "2DNtejqqNiwjVw5iJU5H3UdANTqFYGpiF2nJV9UHJRQHcXP7xuhBDBBqR7zzmrVLLVEfEF9dv6eDDW2KdMje8N11",
  "key8": "PbGdsRDS8PbrkrymEtqXun6NiewENULAaFBB2U6od12YBgeQqdgibnM1VfEPpWkTUWwtMYCngFMJuTZidn2bC2j",
  "key9": "54c5Sng82igY5vZDhP8zJG8VJDhTPj2hDnw8mupBMxYuBcLBWDUYFBGYsfGJzFpdhQn5uBhDo59Sn5LYVDHmnTqx",
  "key10": "4YtPHbk7M6G7e6T7W3jiBojinGXHdwgRACKH4odmqKTsMtnqrkGxhst79JvDwo2pJYAQmwKUA9TLTrmbWwfPM1h1",
  "key11": "3g5AmdJoeho69ErDFvKzpwGATkMiwvTawYGatT6AN5yVDE9T74gvyDNmnoS2bWmun9zEGseZkCk8vTwL53cYmM1q",
  "key12": "duoqAyBM5xW6UQdawktSPoiFQ3ahVgkrJk58tV2JSHPQW7a5CSX6HYhQccxWXEjSyQPoL7PfDRtWvbijQNynFEE",
  "key13": "z7JAzdNM7otaFF843E3nsv7PMuSFQkPSkpdP7UMGMV79vw6usaBzmVkKgRTqbTyimRrGrvUDUvbLYAwrdPh7VcC",
  "key14": "iBVBQya8zcozjoR7RUPfKjqRiRqdBwsEaQX1QmyidZ4uyJswtpG9AG1CSvLYygpg1UU5ZuvGVFmT6svFQwGt6XQ",
  "key15": "R6GdLZoLbjuEfHDoQ7FciJKUSTUUWH2Z9Sys99Cz5zWTfVtWnDLdfZ6xyCyBGst9Rs7CFMqJ5sqAvMLU49fbzJ1",
  "key16": "52oCKbHXv6NmVCnU5cRcY89Y3faeoQJnxwypj8JvjAKt1cSDK3Qse4wwUdBvqxD5ugd3RQUNeSCRirfZFAsSqFAX",
  "key17": "4eLZ9NyLefoV8BK2aj2NXV5aeAhzKpPHYahRVxG4mzqwjEgfj8tNLZdi45tqn9FG2aVuv7Mdbsh6Y7KEeateDdSw",
  "key18": "5xF94PNFqQYKrL1ieTME81APVG744kswPu6wg1PWWw5AuZWktaGAYHBrRrf5wFfdtsMsDEGohyXgVLv2BAHFsKuW",
  "key19": "2Fm6bqYaMpkgnr9WPTqcKETZS79gfkWAzA8K47QETTqXtNcunNG7cMo5dH3RbnwtKFoubcZfZG27PTssmJwM6f2T",
  "key20": "635odqhVFnt7eMPJkqooUyyvYBXLVQ8gcrM5m7yhbaPb8ohrXva5929oZYQrFVqeTMFohdXRvUPEGqVLqxaEhSQ",
  "key21": "2cUhEcBgJRcBfbRRradLdRLEjcphzRJn3h5TpGKX82zUVLgS9JoPYZzJHLzmPVxd92Kzv2kW5A2Aj9zStzgM7vwR",
  "key22": "61FVMt3zzwMvD3ouEfa3juaFzUNRycAiSecw7rCtq3XBZk3YapAFE8k8UNoaDwtm79UivNi1nY9cuKE9FftD69Bh",
  "key23": "2Ui6hiWi2kRqT4QSEpDtfUNYig1Ad1RK7vVLFzzi7oMv9gkbME2T2z9waiZaVV8rkRvjEb5ZkKAWXvreTPMTqr8K",
  "key24": "3urJWeAwjbHh8oKD3551sUkHdxr3oKN5hUjmyaN9CVNQzPGkFjPkujc3zxPyZ8Ym2PS1fo4gZc9sX6eUMKE4xqNw",
  "key25": "56BeNLaETE37gftSEN46tkapfejMEXmkek6w1T1ycFuF3X9uaFsKqZ9cCKqryujEB5ZPyGzHKrhPeLuFsvQ7tiEZ",
  "key26": "4kch8zAjZKBzk7CDEHGArp7jnCZAEt12w1w1YM1r9yFA4WgPPQYtuHgKyM65ja9QzvipND3qqamRCJLeD6MMW2c9",
  "key27": "2vZYh9x2uZ5yZCMh2xdeJaMtxYmfAYGUkBf2B3mGAyK74am3gdXF3n76eCS7W3fd6nYYCobkA2mx7zZYib1z7P4C",
  "key28": "5szmPGrnBbcEkwsPSP5Bmb9MgAfFACjYJVRuDXGvgVQR8NzuWnM5zk5jkMmf7WAa7WUxHmR3QTcWgtHMfYU9Qggg",
  "key29": "fN2KWUQHNgUWifrKi8M11pKTv4VudAwHjacwaXhGevdJMm6yixaBAyVR4RjiZqwWY3diSAz1Jx5AMXjXpkYfftx",
  "key30": "2HoZC9VySvfnDP88DLfhsiee98nbT3k6wuQH3663ckF2g2HZMMF3GeCcWNrB44MBZp7ZxTwTznqCU4wnJZuK6yFv",
  "key31": "5ZBkeJ4KPdKX8oxS4sVWYH5W8kYuaZEx1tfaXmbrVs2ufwUpsibiJuZXTcDoJNg8baP68QCScH34DeF1AHVTdZtQ"
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
