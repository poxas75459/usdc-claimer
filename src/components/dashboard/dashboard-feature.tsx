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
    "2ASvwsNhJHMsfvHZZgyz2Q8nojjVMfgS6g5To2LxqQxcFcGQwPq7QSTYt5cMVEuD3cigqYsTaAQ7FvgcGNrKdwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZA5gVzjjkuXqCgpTictHsAX3doBX67JRmfBZLp5UtSpEPChe5P8JQVBMgkWnms5ipcjxVRU3eCsFaiwDD9Hj61P",
  "key1": "2R3msj4f7rwicPoxFxspgfmA6YHuxtygF6vsGnB2dv1SRoMnSLPazx7mYS6tP3QU6vNV8x66offBy3vwcJBj98v4",
  "key2": "bGf8pBos8GwGXQtiTjUJQcqYVQ8dz2G2c6UDrxePtkM65bagTCfHfMSkZ1xcPuLq8rEs1GfGKUZSykwLFANRwmB",
  "key3": "L7k9fj7aWfDFCpeXEFgnfLBG4rNpVYBA6j6PcNe7yCCsXLGoVWoK1S623qimihgNTEdgduGYftxGdfds3WZRNmD",
  "key4": "2KaudUVhaXFRs4Je5Ffgw4wyKam4pXWjeHRphEZjAUCmRqCAecKmPZjMoTEiiGj2MRE5XwmNjCNFy9W86nDPS2ue",
  "key5": "22p6e2zWygDr48TB33J73QYLNmBXUeFDzaw9xN9x2Cvc4J5FwVqKqPXAnzkFyjYLqJtJJDhHXQattrQNjK9PJrdM",
  "key6": "Rp53FAXHdCjUg1fM5oPhWMKUqt4Nq23EtNnm4ozQmbbza1Dh5rP8S1TPaXZFKhCRUd4DpjxDynU5vqr7vCmuxG4",
  "key7": "5x7DX9eyQsAFtp5Pm3VFXK6VQf7qnBASf7PHAphMcC3mWkYEP4GZp8SCTN9jxXxfZRqgpKdGGPmhWh2NFR5ACAJR",
  "key8": "2JjoAhy3FWCwRbrxJLuC3fkmhV6Sc8RzvqL4qgsYNe9GZ2fmkXySwLYFc1HLNK4AXu9W5VNotLkExRAEWyefNrUM",
  "key9": "Hx7hcZNeD9JsA3inEJAxG7zsXJeZt1QEfKotNAwkxcBpHAK8Ys9rQykcerVzgWrdsXBdrM97fXm3CJUiYLiQ3uD",
  "key10": "2ZRBpcvYDvta5eUPqNLWetMEHAL85o6MWqGJWoGgecb4QQryPLBH9U7WshcY97hbhpeSeR1s7gK2oaXayzSNqRuj",
  "key11": "4YVXU3wVhtTdsF7U3veYaM4gjEKc8xL4adZQUob4dYyAZgjNMZqSFh7qQAgGDdkd7t1VqwqNxctpix2aJuqemGSr",
  "key12": "273gVYxsFhkCVEKNKQYFp7XTpNCeXMhHQQEhfHGmEXYTQxCFVPSjTXnR8zLrdL9VsUqDEcPEvfvHVxAncG3PXQbt",
  "key13": "4dS8dUkZAR1YjmHG3CXWZdSyShLo8S9bNCzDuMQFrPRefibEdTU6btwB89Yov8UceWpeMwcnuYgSRdDMY6TGKUab",
  "key14": "2VAaGQqbzdkSyJYMsRBPNHQEQ2o3YYT5sbs6XSfeXvGqeFGvaHkMWk6XSPw2i6YEjPskFTz3iA7e5oQea3Q7LpgY",
  "key15": "5xSH73UiqeanY7NrGTFcpHsMmFY4wT5Hsz8t9BKmnmdHj3qUCP8jHDqWTozipvvR3PBV6jFHpTAAh4Zr3PYUbwWA",
  "key16": "3vnU6BZKTVHtoetNdEvpTCeb71dRk4agVGN9fGsCvTPUYgmcfn16fbWhjAECCthbiWZMywhtYC2BsgRfbkhZxp5e",
  "key17": "35vH1ksr4to9BxtGqNXP25WZig1SYqEBNP1KKWD4ViNBWUYyDy2F9DVNc9jvdoBJTd221A4E4BehScYd7uzEzaqA",
  "key18": "5768gTCFNrzmuTeuJqDCrbjyWUW7EDUW9cdk5tLP6cUw5R8HQJST47E8FCvKye5jn8P93VGtxRQm5GxjnmU94y8E",
  "key19": "3MQNRhG5nDZew7ud9tceTfMzRipg79jf1wjwyiJkL5t1QwZVSFDcXDei3GQA3LX6KtxsHFn8HScyHJthGmoLc2YE",
  "key20": "2JowXkM7yp8KjRFW5vD7z36nsSBtxFX9aZnmGMjvV35exYmuVE9sDhncY8Go1JYay27wegxV18n6g11aMCySPJW4",
  "key21": "4kiXmgE4KSvgnpJAN1hj4xaB5yY9qzB7aPuKBw7pv19Gb7ADtxGoEvfuZ5WdLvnpvYu3ivxoPoHx9QT2Rf5mXwGS",
  "key22": "3GK82cTeqeTENyaQYgBjtRBiYUYPAYF44iLYMXzexxFqC5HaQWqnrAEngQ8sDqRa1JT36d3VjSSGXKYfjUbUgPJF",
  "key23": "2ed5btVKwyf9Aix8H8tYzGVoBq7HKqQUS7412Hx2GEdSVbjUdmhGjho7mWd648twhNwWiHrhVJQE2jEQfyH5ZSmx",
  "key24": "26t6KC9ZmYc3QE4v5phWH5Javz7pcj7MTaRF8Pt5dyEn95wcwiXPXCgqqNB9angRk33yJEiYpRVH5YmfLPy9ehmy",
  "key25": "45cCLXsLm8xbgDVZXjNea5TM64fVNx2por75kumWtxoLH6WMeBsqt7L3dQm3Q34HRTeBDfSn6zw4Qj1o7DB6EhDm",
  "key26": "5EAyACaC4Zr9C3ru853B9FmWygsrXccgEAoN5HdPh8ho72RqZfCbbi5vyZKFScPQpmFm7iKknrvgXXarKjXCEiyq",
  "key27": "3177t4DL9XkcLTn7iCY9Vgopmw37ecdinNWkBVmTAVUzTzDfG6X9ggR4prbdSzbzP7CgkgNuNRo4VdcpEmBCSzZx",
  "key28": "2VnT9UUukX2JvfPLVtbauU3mPJpaQekrjEr27PziXVvHbkxjLc7JFBpVDCnLMHUmQSQ8B6u32ZXYdxZHKyAKVgf2",
  "key29": "hLaigwH4WXjfAiDoBBnthPpCUSVVSzh453VejuT4y7p7Jxj7LmrAvxz6KYwxyAfNzZYSDekocgRYruKEfG9Wkoe",
  "key30": "2QZoD9hMmeDCgCA8HXLqN8CfcyMgNHEQUJPiYDeQyB6KbDX427uonVikr1jmKa9wFokrhVUNLmJcjrAvqy4u3tZF",
  "key31": "28ZbxraHSB6ZSjqn3erY31Rvvfok7CAj1cJtGeFWkBHbGPiy8GSWyrTUDMfWFHdkAMg1Wf6WZiqbFu2iysMfafuJ",
  "key32": "2FSsuvtAkq1EvKwCaakaHirJeH9ASfp3M6t8QsPqkbErtgsVXTDgxi1j5ofc9nLLnY3hYBMeK9cXZLCzxkdmjYFJ",
  "key33": "2zV5rMkYL2PJN7chSiXtcQ8MCFb69FiCZLQSaZpQoGv4kHVD3ieYPhsBT3JiZhSBQKu7XdwvPmi3Jkz7rXwmmCvF",
  "key34": "4fSoz8oHGJWcFiwr2kBgBnrMcLNCxWKFgPPYpDiitnnXFFphuntFbi2sQnaNBQxpWCYdCKTeLBcuovjLxU6S3CDL",
  "key35": "Hw3zvpY6F5ntcSuLZb4QoUMWCBdUSpc1HtjGQbLc7aX633oT6sUDomMj5EkPgYEfYChMrBa6Jz1nvaV9rJRw8Lv",
  "key36": "3dcHJhQQyKyKJqJTiKFVyDhpX7YgzXADvyeHzqM7QQStvSgpMWizkWmJFePoAC1Haut5quUpBbbqKXKPz228qoH7",
  "key37": "459xnhLwCsFyPAbFMNGb5eepB6bE1KGE6ereY4mY4Trpin2RPQbf2VMShP6YmSryyFZwb9ZCATbfTfLBwZdBQ1zy",
  "key38": "4RzaQ3uqmtAi6kjb5cXfKBifCP2iZb7XGwqx44vt4Bo8tKVT4uhxQBXihwFF2m9WWJaiaCPnaabsUR8NfP58C85U",
  "key39": "4aHioTqFajQiUfiFzbHQzzxJ7XDdZfteVmP2SwcpoofPunJjdtXRGF4YH14bjULfvJGG1EJYAh1DvXcquZrGjkuH",
  "key40": "23FZ9Tdk5JH4b1yRfW2hVM6uZrkAV4hD3NTTxnsN2b9LwM1EtgWFnqgWKeEY2azf3gJiAaAZ1rnfdPEgAC7GJ43S"
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
