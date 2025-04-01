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
    "219KR62nqnRCzNPcWru2FX9Sgdjm1wczQgHZp7pWpRoytn4pbXhxPnq8PTdHg3jXacQNjf24MEQQs9JmdSfXX6Nm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmAKU3wsH7zdHKudftTLi519c8PCiHhdpkbkCgxUct5XBBapczitoJuR8mB2iUAoCoJJxbsz1SJHrj5B7px8def",
  "key1": "2dLiMhMSsMQphEBAiMxSWB2z1s45nXWc89SwT8TgNvA9qj3tPySFnRM1gLT5t8KyWzHKfc5rch68vZYAMhaDzQwJ",
  "key2": "2dAqjsKyuWZA9pn1urnRqwNRyf45Cs4nj3NTTQo5kur4bRciTcb5JkfB4aqmrBQgvA7Mf8k86LFiW89JD78WdZkw",
  "key3": "2W8QGwo7PnzSnPDZHMiY7YsZHaWt4iGRF6QLvAdmydMo2hT9JEAe4dhNxbFs41dbhtprQpXVZwtcSxgLLxHiDXxD",
  "key4": "zAZrdtdXqggEqe23mgfgomAdUy8vpEBpZ2swVqKyd3hxETRvmm1957cd5DX2EDX9NFGQpwQon4XvfkVLhWD7tPn",
  "key5": "3yXGPkZZrKFGqRwV3mKFt8PuWKGSaEuv8cvXotMjxDuUUNxVpsNUCUo5Da5gseFwkwjRszq56LLn9MWk7hqUdKBS",
  "key6": "3jQ2MLVet15Mq4FmcerUzAGwPU61jCefPdkJZq6ou2hveUwG5wDoZxAyc4ZswgE3wvcUdsQFGMbCRy48QkiheLJM",
  "key7": "3aA2SuaG5jAMUX4zBfb6i9J9F2eUoTLkK1xvdDyTDDXyLDNuFee23gSV8qRbv9CJzYc8RZSFuDt5qU5spPMGTNRx",
  "key8": "wiJfdWxAZUrzBRywTJRn8btDWsjNjdD6ajp1b9Tq79W1kz7SDYiYZUZCu5YsTMdHi3GSskEiHREGdMcGbMfZqw2",
  "key9": "5uaK2bCwYNYUNECCGJB6R5WaRNJcnZzrtGWu5ZqJRZ6R2Wxp8Ky9aWYNrBuzNMsAbfEGBVvVrdSe1obeoXQUQ9ae",
  "key10": "Wr5ZcMgXMoEwdrfH5L2epGZssgW1SHs3ApCxkhy7gZb1G4H3D9Yt7QXnES8ZeLuNopJD5iuGjBz7ssDDo5hS2oK",
  "key11": "5q2oYD9NW61t7zrfoVGZ3F36exQMEej4tG9PHXnj5aPvpf1zBiPxQVRUHdpTgqYfdtfQrGHkqxKxVeiCvJLMhvqa",
  "key12": "56PRyt4k1dsnCKnvWigQJi9aBWRvdMpdQU1uqCRRn72QK6n66Ln3cxt2KxL8pPbJ7yLTAhWxkjWA3krpHKpowswX",
  "key13": "4qxschnBwet41pNGXgHcDAwCtmdDg41JCvUDka79bu2DwRi9YQuaNisiyoCHFAZztiKLaKkPmGGxnuvpNmtjJtEm",
  "key14": "5Ct89SMxsPcerateg3q6evXLUrw8n7mWvNBZPDN3kGJ9254upuv1D2KjJFxqLb4T4LBKB9XissDJbxxT9MV7dVuW",
  "key15": "2J6DtSqbXgDvaCqYo4KpCg6gGXYchSv4MuQTLKa7UGVfQhrCjgfCSE5CgCnb3QVJBMYuU2rB3pohmpL1TfNnX2mC",
  "key16": "g2phvvPomLjnfStX1sdcvV55YCwE9Wt7NyA54rnSQ4nHPSiHZFWre9BeCbSCyFxRhgzDKZ3HpGHCz5Cd3f2q3MT",
  "key17": "4SHf659XjE4vXy1qorC8iJsqTPnUkBim56PvUF4T3NMbf6akVxjxbLFgTF1mAvyP65ycFcYGmNoFkogRDCV8Qfy5",
  "key18": "4nS1LvccuymcJjd19QDexV68K3Fn5tY9KTwkdvJrWFRRgoVT81mnx2rEmczB7RaAHpQ5KZEBKUHFxu6EJvhkRQ95",
  "key19": "4GSb3AcaAi1esRe7nc1ASteGKF4BytZMbJPutQeZEvEczQwiLRMp7JDtmQ4qvCDFXsC2hYJvQgNQiX2YzahD6jBD",
  "key20": "2FRWNvjKHj6nJNK9wq4xbaFGnpaNq68pL6UDQcXeznhbRsohFDcp1h6i915u7g3u8bDUxfcTn9AHiAuQiW6MXc62",
  "key21": "J65kkERgtZQYsXTK4anxnHyAF7RioVrAL99YvoSfmhKTTCs55Ha3eC27t4fna5ax1zvUQnT8bxucsuNkT75s6Fi",
  "key22": "5YVuVwY6ArFKxffqNcC6JhZ3cUgkRtSAbgNhTYLuqREyYwzrGLqb6jeE5nKsR7G2L2qAw9mdmMBuuLTfoQ6NsxW4",
  "key23": "4FcbKRBwnL9fyTAb141XQrNhJ1A3NjXz4RtttKd1ftgmUPRUUDsqMVfdJQ1epixwaux8rgGCEe9d831CPN5d6Bt1",
  "key24": "4irugtR3jVnqJPpWdh5aUSkaDHyttD1N5vfHrvyrmcW3QD79RM8g5mCZFQtbScbcSCzbLkSYoovDD2V91rEUt428",
  "key25": "4WSnWJJCrZ8kz6zCiG8oeqfSdoq6rYMQWkDwRC7hegEL4mE4dfnefMgdkEvssEbk7qRSgCTXSLLU1ZeqGioF8qFP",
  "key26": "3QaYSpA2mdJtqVpysemmLFh1HMBHWQPN87xWn38PWm2MSNxgh8cu8bLcuf8rBNGbuff3qfBF6mbaJdpan39z7CPa"
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
