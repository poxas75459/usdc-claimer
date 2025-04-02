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
    "3JNj4Gv7Z92mpELBSwDBqEJXLu6eHLiGoL7gMyGbrG2RPBNCBFkyqDPHyioevdT2zJm9CdnrxdTNiRQHovNUFMUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3k21aX9heWY4KgtEESoYDGRH8yEbiYuUsxReDCPQtDanfXaSnVQAtbNVj9XXatMrA1NAM1jpPh9mPVtFujMhii",
  "key1": "5kssNiByog7G1A3U8iqnkCae8MXNtWJPa6KQWtNu6BgZn1nuR6ZyeXutwj6Sma9vFx7LvMsJxYsXABRMFcNC6NsS",
  "key2": "21PZP51AktzeupG3pvsE2d5FkdDNoc2JDCxbWWcttjDE1DAREERbn8hhUN2qAR6tgr6S63611VsyoXQffML7ipsa",
  "key3": "5HkCaJEPpwApBo93bEvnLqHbHmrCvUzEhzGzYYfxuH13TcC2br8E5ciYTkv7HwXecgWWnkRpvkwfibBCH9a6mpfb",
  "key4": "4V8nbMnamt55VV6cgmQZzkYMCcEShiq3xb7VCkJ29cU9FNkjPjaDqkgqsTfDRhV5LEdZahHhSUy4cXASmxKUwCH7",
  "key5": "5c5dBJExrNapxENtDidmnAALEU5tVQLk7kAteCS1KvVmckkxq9adV6JnaLMwuCUeq6mrzWGXyDy7L2j9xXWUuu57",
  "key6": "5bmT7JhbHgTzzVviWJ9HY8UwMghvYpFFU1gCqfhsXZRMwQ9CEGmPntXq37RrqJPqhcF22ZFc5seQ9LkqhqXZk3zD",
  "key7": "2Z1XaafoEW25fbrrb6aFjaWCEC1dJcgCZwWEiRL7rFLf3WqE7ghVd5AqSgXzjNmD83H82n1THXgjMMv7VYi731R9",
  "key8": "4TzPGSmvgqjts4UsGHH8knrrZoViukKJVTGZV8rXpcxSrMLKBFGduTMNz1dsG85SqdTHdFf1EYwvkTNFbNSaT85V",
  "key9": "5nPph17TPpoff54pSg7X6oA8EyV6nYGJA8Avb9WCmyHt8WKYNwgsyFxonpLRRPfQkhDRBHy5dhytCbAF9obcRKv",
  "key10": "GMkLLyTabD6G8arH7KvrpryWrQ9Ptrg55hz43tfsrhh5EMMAYre2egUntjryxarKF9ewqzozwSiC5wTGa4DompE",
  "key11": "3rc6RCBR8oNy4im45Tsm89oQXP2ko2YjxVVzAks7pqQ8qhbMm3MYt1pUQe3M8rLRf8fcjCuY7bVMQ5RFTRBdU8ry",
  "key12": "62pLaBBv5CS11PEZZRdDRKxPwYV6mPWhUJTWsEPBRpubUcwUH3ELkUwgfhTXaN3iRZWFhLnsfJQZU4aWMG8UuGxm",
  "key13": "28ix4zp2cJt5dZ2AYopnwNoURp3jZLmmzFxCMvKmLtLJgtiG9jBtWbLqQuXq14igNatSwGQ4Bf9cYs7erFAjrXJA",
  "key14": "5jganEPWpQreeZLXZQ5PFsVogsKFy49YLa2CetGE8DauJkPoLFgtCZP7o3ucanKktLow1zJdXNadbEbwBUdzoYLv",
  "key15": "3TyMNqH4CN8fTCV5bR4W2rUW9F54xexc4BnMZ9n6RmzMt9b95Cm3vqsXac68XbRcLxpkZmaftf8RgFNnsmnFuqBD",
  "key16": "4rVsWxzqj1Ax5jMUD4wBLPaJA89usBdmjm6cGJxfjxDd6QJ1GxhfocmmQjGchfrd5CuxSeV5b35cLAtXzmdc3nrA",
  "key17": "6Hi16aAyFGwStBSPJzEBfEFVWo5c6es3AdVGbn2EvGm6jRDH8p2v2KC4bpee72LmXuvWzXWLKjL6Yj236EU9x5G",
  "key18": "4P4iPojCrfMQmaZzeqbyTkDMNCU5u4RTfnCodr6eNJei1hZhqBKztAaw5CxBMmBtHhspcjbD4q7k8mn3X5GgcT9r",
  "key19": "hkcQo2EUQbnJJ7FmFNFVppknZRMZCDkXhdv9m2xwWFm3PZjgLgLxLrRSE2nyD9pPN2qdZQsC1EkqpwebgLzNwuF",
  "key20": "5yVAXA7tNuQUF1MnVpWBs2tmQceV4cHFQ8xWwD4cMXfRRiro9gvoBqL4yED5ommrfkiGGzGG4Z8SJ96rZ1ikGKxV",
  "key21": "2xfVsiDVQTCwtBDEiF5aT8n8ZpnW75CNatRQ3xDNma1VStbHc46wQcjauuvHSfdQzTGqegJaaHdAiRxgpNevSeW1",
  "key22": "zYLFWe2Excxf1gfZ26FFHhvMA2RyN6FU3SNYzJTXaUMYtxJXc7RP4nfZqronzAc9b4T1FJWnQpgL2duxDXrFDjt",
  "key23": "2QPYY9LbqssvhUd2pTW9gkB3zP5vi3RVYXxJJDXVn4byKuME1txQos1CQmSTiGCD3tAvj9Q6CGuWf7R1QZCgQF4B",
  "key24": "38CG5wYBFUyAzFUbpRzfZ6Sn34bF5daxgoTVdNqAXHZ9ntZQ7VBPhPb9KijdLx1JXTiXKDPtK2Dkj4wQvHcbCjV8",
  "key25": "28C6nf7Yph3K9R35RSDrUsNA2L8tPuJyaLCnqJzbmqng74PfpYwqRjYr9mPCNeYVt56x6dkUp6uDQoG8ENQLDNi7",
  "key26": "5EE4dstY4jPgTxHXqfStQPAJXi59nhNAAbMMnTMeqfjKvPEiGK2x95ZhQiSjCqMVQTH8un6mR22EPhUGRofrHSxH",
  "key27": "295yugg7uRULquZYvx7gptYGDeZNWga3LdftqF2wgqej1RZSNQm68DcJcFmmot3Sgq4gKtcvH1JyMgr558NvBB1a",
  "key28": "3RDjBjUPC7aM3QzHsdCasrnrMm7HF597AWAYff51Cupv9V9719vvK1i3tKNrVfbFGnhuzQMS5gJC6BT8vgh1vuqZ",
  "key29": "MKMYNJp43XnZHxhy142i5mUfvCxPzE4V46aY1BRo5s9KGt8vbqiu4UWbrBV5bvwj1jBCt3kmSzhYSdRfAd5yrfk",
  "key30": "4EZ9RXQsKCMpQmnyA7TEqLEetq2m82hZ8WpMMY5Eq85ggaWjwxgtpiZ886s86o6d5YBsMuYiYwCRLJFhwdGoe39g",
  "key31": "4DtY7mH4gdgqGUd7oLB2dRJfrXkSHE1GXHuYTmUdDGtkQhD7JbdC4o7pHf7XWN4XGhc5AfCPieGp2onYa3jCsLgJ",
  "key32": "4F8pZkY1DzvFG5r6atrzDZtojXtJ9AzgxRT5EY8tqrRX1MXRnjyCadZDc1rKJEsv5L13y9uhG2WWy1huQEhxcMLM",
  "key33": "3m9eCaDQiZjqxYvxKKfViKKvrHa56EP1Dz9WufSYAC3Cg65uLZiq2bnDgB6LojcHMpoojqxgGMExgMDUzZFNFBKh",
  "key34": "ViC5ARPCboFbFACbazroUxiBEF3DoTLpwqXQ5g4rSBTB3sp8Ze2sy8SuZaRHh9wFuyFV7jyfbrSc5C9kF1niMiT",
  "key35": "4MDygnUDXQWVkAzRuMZMkofmLtaGYhGZkBuCkWqLZLDzpWt6UmvT6YW2D8BPwc2MS1x4qNwzVv8UfHdyau2MacMQ",
  "key36": "4mqhNvn9XPySyr7ixESxo947goW9vw71RVKhDsF1x3PyBxTbWRk8EzXkREKuuy5eCGQttKmH2ict9StzLMudswyp",
  "key37": "4yT7P6TbMUMZ6fuQtwDBHhU7N5RDASdmtCA8WwebLULxvjFBJhKB68zaezHzLB39SxrJQm8AKEBkbfEVKKNTeEeV",
  "key38": "54rvnaeFyTcwGk7cihjcmuejaWSaJJuCSiQ9YF4P5oJCitE8skGHtq114rKFYZvFzPmA2dP9BZWNPTXctwk7hiw3"
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
