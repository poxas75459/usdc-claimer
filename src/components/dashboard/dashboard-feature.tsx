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
    "snSkSR1TLR3p6QCyWKoZzahW9xuQLGFWFkRAMo9rcB7Ror8ei7NdsFfC8bxNR3WRCnzzrdVJF3NAL7t8xpHfEdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594x52QK3FQUxkub7nZH9pRHEpygZKqnh6eC1ySwuc1QpwDrx2NqiiTJoWVZgcXJcx7ip6WZucudqD1rTsznozDk",
  "key1": "2apUC4ZKmZWonXjGF6vzT8SqL6DG3Zw9BkcV4owEAS7FZkht3uTkGYEBdFmYe17jyfACW9NRYPffLhGctuGJpjTU",
  "key2": "4wERuaxjVA7yKmqZ9YdvHM26BKb2XV6RQGqVgZhM97jFiHdkraUgBoywYriYBsLayeLZRTxUuX1hdTBq1VuKmgNL",
  "key3": "4EPTFuwRS1JJmUbdzgPvnriKU2yjRJDviAhB5TecB9B8iZjVSBvU1g4QS2pLfKmTioNqUaAoJzYnP73fiBxMLw3h",
  "key4": "TTZSHJVJQ3upZKcArM7S59sfUCrupyjnKsyBTpjiAEHtzCRCxB4uGpCWWno6crbCFqR3nQP3PVnMzojtqMKGWiP",
  "key5": "2FCyhyDowyWUWf6weJTszhBK3WbYBS9npACmcw4nMEBF9FkxzsgjAmv6wjt7D9rbn8VjkAchwG9SkpZzZkuZHxzL",
  "key6": "3YjN4295cBTDEs2Jt6XXDreVyXPopDpS3BBLCvPb6k3uPwxg5hg4ZwKQ1VU3VkESGtQv86SS3rV1nVbrMJUuWir8",
  "key7": "2vaosnyq9Vpn3tcFVNJT1c7N5dFNVVznU11ERDRQWYjk8EDHHGoMkCej8EAxygnQJAnjyZ8FAdVhBM2kq16HYrGi",
  "key8": "5qcLQ5NYSR69p66HgcqQNoek1qj5NfmVonDkmPJ3deFCrt5gHWkq8XZ8tZq9mvf2zsXFeJeagtFpwy4PEm7i3MbE",
  "key9": "4s4QFboZnEiLMgP3zYvYfpdswC9LFxMs5PA8ouWgLJQw29yyTiP7rFcqtG51Sr36AwbVD4fyAr1EJNpsmfNQB8FA",
  "key10": "67jM14LCK6EfustRPbCDknrc8vV59ydkPY7d2VosBu1bnTPFfFQBxJ7dkYRwasCn3RfxnxTdBqdvepNPMua6FfqK",
  "key11": "5qPKmCqVSKa1ikDJuKHjgTkJZQ8etErCyQBRQgVyha7v6Ldww6iSfEzZGBF6mupAdFAEeL15buNu78NE3iBVnasp",
  "key12": "3BSf1chMFunrvLpgJd7WouJwFczyoBosv5xTdgW6i7J2UzACwW9u7bvmkKMc9FR2dKgQirDvScEAEMdjrtKu13qd",
  "key13": "QSn1NZCPgPBPMNQWhAsJKghy2JEQpbreANNEGQW5RjLL1ECWXKGmDKJi8U1kkxp1WJ4viWMhWL2QKTQXF26SfjS",
  "key14": "5Tx74fTmSeQzoJ9gYSXzDRJryQUuvXgmk51dDUEUTGFenyS9J8GqBiWK29jtzD6PDtjdbbf2U1SBop7TmkFRmvT8",
  "key15": "3jJaaLYQosEmAn3n1uCB5GbXw8EbYB9PrYTv8xe1JGJQJjo2tBiRnij5W2vGUxmBjCdpjgYC9pwghP9oLKJogJRv",
  "key16": "44KBGBiADWSkkywLsjxiLQMefYBC5hGvPxMeQdTEZWrveJPxExzGazms8w7fR6NTWLK866cg3bcKUgnkXJB1xdK1",
  "key17": "2nhADAMyPskJARKnnZyVEhB4GiirRL6Y8YA2JzuUhiGuWcnwAKXSvZ8kJx72zMRf3KZSSQ8zvhu8ZQDJL9BzGkek",
  "key18": "4ZrQ5sMp8u5k3WS9qrkbBzkfFF5SrQvbb7YgADXNaJQikFcpndcGkuAZXtNThfnnx24bt6nS6z5jXjA4PQnsmWW2",
  "key19": "5GgL8RCJaU28LVKvHmptfKkkB8jeeWgWW5k3tQuCk6XpZzBaMo4WFHDSNYmm21aqMXsy9zcBFpoHVWzMB9sDt3RU",
  "key20": "5WoXHMiWvzpRJRjn7zbAtPmbHTRodEV3a8Y1SeucHqFtNYgHVhUvWKhmvHkRrivx8VucaTU1vHY9iCUqtc8Ep9Wm",
  "key21": "2hmn9LsKNTMUebcUDyRdY1PgE8aArAvJnqTeX6xzB8K6aDrmPoZgtP1kYDMWk3Gs7187STdFMEAxkwpLKNCGkm8i",
  "key22": "6125PFLtxATwA9aVT5oSrPa27mGPDJEzGFYPL5oggzKCiShw2pJWGLb7PEoGRxnQXiJmiTtWGwVuepn9WEv1s4Ca",
  "key23": "5hN1uZE3JuQUwRpmXxTNSq3t5pbghZfXUPKp3JSReuZPufxo9Rges7Dn7QZKPLS2dWDSrbpV74TbX9uFv4ZgnuAF",
  "key24": "5kkLR1mvvno8XMgGgBsR6GHiwunpJHSi6JG6HeMk9zfoMjXdK7oRe5R1EZ3V54YCouZpZEmK4tVL9CfGQdoDYRXs",
  "key25": "riGmZ5kQZMcrrqWWL1eFm7CqqQFkYtLtqYiB7pAZBjAC8CJZhxqy6QdB8kxjL8iidDR95nCtLo4LYS5ktCGJsNk",
  "key26": "39rb2GkokLrLUxqJbR5dYaPAmptuvMhimt91GsLUjvL4Cqr4bZJmUSJZtJ3BrCYGpgiQznz7EDs67C8eNaHdUBp9",
  "key27": "qjpcxCLPSRACqXFTn3agY6GPxRWsJaxc1y4z9NB4oLMXkmbXdnMuCgqLWttG74aDMGVDCRAs2r5orssrrTjz46M",
  "key28": "3dzK2J24S23uqRJa2WAWmz23sPCEGQn1Ndwfsq5XBjnadkZKgBeSwWHiwZwMqnYyUcMqz5ECJ8ACgv3VUD3krM4i",
  "key29": "oVBiA3H5DZhUegMysBAGccjSzWetvXWHF9MqytDNpBbzpooKdwaEA3asSsjReQ8SryoP2WyuihGo2Aipb2ZxrcH",
  "key30": "B4iVHLUoA8MmvzkwPKUWJwTth2C2pQBFvKmc7ECYvuL8kSzTywQpkeTzMxwQfrh2kQYknUsoLquCoY7DVfCFYit"
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
