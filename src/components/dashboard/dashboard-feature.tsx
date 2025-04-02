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
    "4mnunT8L7q682HwR44aTfzwUvkwvVyqnpzmJpQJS14CWoHoZovqsiW1b7D4uXtcKXZZKyH24thCBgeAhD5qS3DTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PDYC1cuNhpUMxcDfBsqCFsymMnJ5VqB18xBfB3v1TqKtoRenusUr5AMGf2RiwyySdZTnhHEd22zEN94aXpvi4J",
  "key1": "4Rv93NSBxL2z2S4Y1pMXk5Ya755cUcimyTY5C8PbArLFqT18179m7fyhZimz5r3nu4QCbjxJx9ssrPX5iExtqHyD",
  "key2": "3nB4QvuNHfzHnYSwWMemDxAkgoNYFGdBedVAryYjQVpWJyMrYhBuhpjPSPcCnnzi7oBJihFtpnh9pBWq6Mrh4hPY",
  "key3": "3YPXCVMDK8AC4uvzPQ9mXfNak5RCcgBS9iwGBWCMDihQcWjLuhvdyg2NkShGpZvXwXW21LBq7EiAbUFth66Vrxyc",
  "key4": "4hRo87f1GmZGceRezYeJ8vX2SpnC2rmXirDtTSC3pUbfQq1LPdXok3PQaFfsU3QDdgNA5XGFtCyAt87fQFrUnwAe",
  "key5": "37i4TveHrRVBU6riZUAA7UvGzXv7s2t6ZoZYvTQPh5aMMTCqb4nEEvH7j3wfKc79jHwERyHzEw7R9UexTxF28pCC",
  "key6": "bT3QeikoJxfcn4v26ZwpbGRtsNBtg8wZZTwKuZA4ueJ77h644twJa6yVNAe484Gz3MZpAQwJvntffsnTNYFwKXM",
  "key7": "2SK8kd2WwHy9RNvBDS35cJ5SaZTFuNW38uzegeZVLJ8mg1jpeDyBFcfMW5Dierr8MGt2cxz2omaP8wRb2c4Vq11Q",
  "key8": "5UtcCvZNHV3GAU6PEosvVL8qq5MtZUYZepLPoHKUr2wRMr23W2Z4A7yTX6irV2CEcCHLa62TgeFiv8KCXZcjzz9f",
  "key9": "rT2GM3SuxmpRvshHG3mwtyZLiKcNPFMNtDVCzWNumRaT3M1C7nkdGpDfLN6jJQNKRCHdyRukqpGuCTv84oAeB1p",
  "key10": "5EAqvC3wHoxAGZ9hZqqMWHvgnTPq2bnCVHpZbFDdN1887cbtxetegtsRWLNqsveU7qmQCzZ7tf5JHaQxGCYb7hgL",
  "key11": "3YygMsbaBL5pn93K2euCeQGGAm3kdeHgJ3Mpfxx1GQxtH89SLQPmom8rBYWsq2ZA4edpF1w3TaRr8sP9PWwZmr2w",
  "key12": "5UnwVX5S5NYhD25EyLtMxZJUmSWWwD1xBSRJDwxWMPtRooDyUGCDgk9wKEZ6PUisfVhHkKNvAnT75gwC6dtQwkGy",
  "key13": "5szf4aEpmoYL6HUWj4escAm5o3iiGBLwALwAs6UCdLiHdnPCLtfoV9kXf7FzwZkXkQuZ7JfqYJjarTSfDzhpPykb",
  "key14": "kQEjjvFrg2awZo3ieMAwpE8Nai7HBuDvXrP39NFhow8jSX9oRj25xPjrPzJsyJTcLYM3ngCgXX54LjBJWcSzTnG",
  "key15": "5mHVbDpFdRfKhzdrKNNghnYsunnKTBJdNJHP1WewM1tPubBGZ6SpozGc5e3azS37G7fTgKHaEEPFYkPmsiYCYLRj",
  "key16": "3hqGWoDEszwW2gj7HTCEWq73toduj2wMiQPTD2DYL4TkhoyduoyPDjJ5LbqxaoVTuRUjcT2bpsSoKyK4wGf9RghT",
  "key17": "2pKCDgRUUAR5434Se26y37a1BWG7eVkz9xjfFFCU6XKt5A9h36Pjm628jjVXE1Yw9BFkv16mwtYvqXcpAtBTZhFY",
  "key18": "3RmgL7KHSFEYERQZ3pHHvb2pbCRDRQ951xmJ9rTGPHMtMByM9X74uoS7ZzortUzqZ5P8Q7ZEjXzyxPhQZBeKQLw9",
  "key19": "2SSQiSotm1jPUEQ27rDd23H637xDwrisjaua3LTWZ33s8KmY9QUmQVrnR3GkHqG294pVJEErVLx1srxSkfsixMXo",
  "key20": "BKG5dM559zKLMJaJdoMV9d7s8wPDysAXxqnYAfhMRy52mXwm7Ew5ezr1XCYAYja26JsRJgENR1q3Ak4Hrr9vZ4Z",
  "key21": "2rbX2FohBJ57bi7wDxGxyW7muV9HFgLwFvT6kSigLUn2Zs7vQCS67RrfSLfN35UCwbZJXMwViRNBWcHLLVuphJv8",
  "key22": "625sJns7267TnCyrZu3oXDnhT2ScQBb5aTYeBjmwWiVabLmGr3WSZFmg1Lc2DbdnCEtG24SF2zdmu1o3tpdpHumL",
  "key23": "AtcdqePtHNsNksv7wmn7YZ6ESDKs8MND7HeuufXGUrQLNdgAFpys9z3Fy4nPsFE7PF5Wus4mc4qCjVNrNQb2SzW",
  "key24": "4z4YibiJg8wNN5NmCme12NLhJuhomjhM1jdTaGxpYXYhN8oCZwb9kFoVLD9UHp6MEuJmZfkjdr6pNeFwyVtQqsh",
  "key25": "5U531Wnw2659JbLfm8uRXirJLLiP2Gc6fn2qeutWwo3SnSoEve6ow4YwLXxyW85rWguehpRyd1GiutZzdeWGB3bj",
  "key26": "P6ZietXCcDZy55LDadUZRoQbfvBZMWu1X17gMCgEByMhFttxYYyAuSkR45VkQJLFSj8bgmrKUwWc5ts1ixt2fik",
  "key27": "4hxa5eeKg3f69Sd2dZWd1LvjmDA3Rk7tmKTuXge5TNqbsobUbHcG3g8LSjoPoUny8ANBD8GkijGNfiqn64A7Y7hn",
  "key28": "3o6JchrBT5kV5Qk2QU5mAvCunGESihSRK2XZha2X7UQW4pe4vSZEsYi4DzjCUe487dfcwYqp9hKcduJLonTWEV9q",
  "key29": "2tPSTR11nWSFiZSVUNLB3mzu1qTz8Q6Ekq4UyKq6UTYMccdRWRYzG9qLCG6cGmgUF8xnCkwyTY26aZbP4Qg9FySq"
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
