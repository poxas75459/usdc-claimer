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
    "5v7px3U52grcwWc4gXnzuoez734pwhWyfJtAr9QZvqkwjFY9njvdkJA3spf1gyDF1na73Kq32Ncu6VVnKTcPiFod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jPX7ESfDbz9ZxdbDuo2ykUTPNDRMPvy1SkwhcKN55ezTFbgCPkrsb73cKn3jJn5JMJ2aNSheeMipy63jVPpnjVA",
  "key1": "nUNzmbY2mAGvnNr2v2DU3tzWTsWkwcrSPNozMkHuJkvkmMfYsPBKypaBz4mACNGDefpqEBRhzXMM3s1yaYERVmh",
  "key2": "bAWbQped6TVKqd3ZqRkULgRnf8DBRme7tYnmQfevt8ATpQwYSALvZK215PkhEgSMqvuhTK8NiRRwAkKFiQhwjWB",
  "key3": "5r2RUqJZMWfco6KUBck5x7yZkBi5CvEMAsUkVNg1YXyAbTNBATTUZXHbvhzFuCMQX9J6PQBqn5C9u5JZwMzEidGC",
  "key4": "4yiREhectEFBVK2TWxu5v76FQPGkF6NCjqwLG1CBSwUTVtKfDUQMExb4AQTMz762zEYtXhiFDNbuNG5UgJrdX8oW",
  "key5": "4Z2g1u1zo5k4HHBavirYhmUYvVMFZXzU6kj2W4xH5NGhnZM1b5rzmE2rotZhcGmb4q83rXFLF972ufG9rgQzjsCo",
  "key6": "2yZUcdVzWmpJwtY9FCVPbnA9YU1RwnNaWPhPLpqUqskp1dWLqdw973JiMYNTKYKmCYmtQbkc5SU7yLQDff5jYMW2",
  "key7": "5VWsSGEDhYZ3xsZu5YTVN8Lbm5De2o9px6yPyyTouqGJfkhH6feVPmNpS1Dfdy9n3SueD5X5x15LFBVoYjc4msEb",
  "key8": "2YiaF1Lav3B9kF6tMAdg7oXNfirE31QhU7QF9T8o29QKcPJUfxWx49n6VMrJp6jTA139QZSYHu9ERuH8etQ4q7Ec",
  "key9": "5vD71GU2uoRLK3VjpcjFq8XegQgRW5GjxY4MbKGvmZVqJkuAwEQozdgcK9BcmhJdRiKbQJAuxsZ1jzphtXQGMEwL",
  "key10": "KBSoE56mJEeH2kKwcDEX7VwSCvpjeHxdUMyzxVCNpQTEzcjyb8oeRCshetNbcxWBHSasffB331cYeeKyxzjQzij",
  "key11": "2kCG1EGK3eziLVYr8nf9siEydTkd4febiYZjjNTAGYMRr5cEaK3TkDE7QfGr4GMoNz6EKbNyvUxrp7Rq1NV3U6Q9",
  "key12": "D7rWBsX9z6G2xDfRRnNUb2wKGuyizw9uzRSk6h8NMFPp1vbBbaPo416CprUKK1Roko6jtPAK1LNvcadr5L8AGfh",
  "key13": "3QXP2f1ER7Q3THNv6V3a16YGQrHJ56AnB8v6QyjBH7yydh7TGwTo4AJ7D8BLYcQz9p1ETeH6t9eqaPZuVDADUk5M",
  "key14": "5iu8uveFqeHEoaNCXgohrrY9w4Ua39rbe59Rncsy7UMrsd9aCbPPqiNV74xe6dDtTza7V4ySkVyq6Pt52Mo7RPVN",
  "key15": "4d3Rq1aVM65sJT9LcfPZ6LZ7pPquBD5V8QwfDRrDd75yBArh1ipatpTywpBKa6JYUYXFHqHUB7R7Xh33utNduuVv",
  "key16": "5Rt9uNrwPJ7L4kAkm8bngso1ey6UxvajQ1YfftjBMH7gSNSA62m3d8UdVfMMkMK6KKvcQauwfgu5hzyobhH41zAK",
  "key17": "5iJyjC9q6sgKjRTL4cywa4x3aoVX6NPUmX1WhRetQa6VngRWRXR2tpe9434uryg9Ji2AHqbrVUmdJ9oZJKciCLyc",
  "key18": "w9hDMxmridoWFf5DCyQ6rsJE86vojwsL9frkZtpFH57TapQwL8Kc4S1goJiJ3rik3A1bS7iB3TomP8P8nfqFnye",
  "key19": "3ekRmJ7XuEaRQ3omp59gsjQzSwoFbNoJdvEXi9ybRJF1phSH6jfUk1qVvctXh7RZSTWbjL5Bvm4e3P1uM4Eg859K",
  "key20": "3o5dehy6NFg4WswFVtzqkVgoQR8JfNorgj1BwDY3mPWAu9WUoFuQej4MRYEi6NuiPdBCzAB4cTwMfbhZzgSd9jAM",
  "key21": "2oXfTkTp3PAJ9VHGfm9p7H6gxZQa8NbqBASTmjzWrdVdWwV1bwzLz6jois8zbEcoEe9yE3bqBFAymGHi3pgV36Qe",
  "key22": "TZ8ie8WtnZXrBRBfeUTqK4mH3Bq8JictByMwjSjsFvK8emZxGG8UYa2q5fJ5x6BQHfTbaVG6n8d3Jc2TrLVkNDn",
  "key23": "2z3vqEBW6QmaDxU4KuQ1qXQZXdkibVQFYV9prxBxXsTd73UqSrsQx5mGkSwgLZyPwiR9RMzpND8pvmJ6PsagiERQ",
  "key24": "29evg4BCgUEmv1WXNjnLHADGsJey3iPJLhRpBUYom326rNdb5wQ8YirNV1EYYfp79RGxwz3N2xRXwcbbAT7v9VAY",
  "key25": "46B2BX36YyzreEDb64Addw4MmRbKx967RtifdEoBNV3nE6vnKff5RAMUeqcJNxixdvCL87LjQ7Sd7hBqhZ8RGomC",
  "key26": "4NEUSokdfzekYnhw8Z1cRt3ArZc8uN7z9w41JNtp6Lge4w2hAvyQpDH58Vv1Bpyzf9W8aKGoH2yj1jnZk8DtkSUE",
  "key27": "4yt5zH5B7zQAWBRjJXZ4xwJfj4xjkVh9VmbwkqniX78u7RJvMLdDUpuhdXg6VK2pPMQTTSTpKkGifoRTXyPa34iH",
  "key28": "5Wj3daww3QhvwHG7M69Rg4S874E14AHGhzeHpUW7W1DJpqFg7gmt16GUfukbbimQ1gvjP5bGcUFVkiGbADYirwnr",
  "key29": "444rVpzqTmg9WkA4MD6PJCNUrPZd5oA1bFZtTtRr3GJVdRobDcgS6YhAL2V5eEJLPFx96sxPoyBB1n5X8hSbHwwL",
  "key30": "jZV52yesCJJTRXrSZJWFhwXMKjCzBoWCZz1GALjJ9vLttnpHokAprZSjHypsWHAjVvMMdBs4vNntaHCdYELjskZ",
  "key31": "VKYHSSTH47d2S8g17NZ1t3QSKe9dTVEjnKjaQX2goM71c8hYDDMiksC5kedFEGC1QT7iDKZKtFFSLUofGAFaZgh",
  "key32": "Jd5BbSE4bnySjNmiHc8fhChwWzmLiHdfpjeN8eKbfz9D5Y8LoafEtTgZg15SSK6Ux3yCuwe8kNFRiZamF8oyksW",
  "key33": "2Zef5dYRoajhc8sWUzqLr64Y8c74USyEXpaNTQ5dkwcgvEsK6sXxENv5z6datPwHH5HBRH1KHeVbb8sCE3qZC3vV",
  "key34": "qbP58K35BfoVj6zN66zZkd9nh8pFMqpQjqHgr7dSPdJTPwCv92NkrMyvjibTZVUXUx16bc1V9A8dfR65UzcZZdF",
  "key35": "a3MPE4kP3YAiLhvxRwBSKzfX89HYcLbuknNMqWe3nymCy7Uva4k5BrnjYnCCJMsEdFK1F5UuitPkhtA1GqAheWY",
  "key36": "KeFQWDcqaj4SihjY1JLAsgQuofbTPSm11bdgVAuyzFC6rnoWUpzTCMqSjYxxQV6bJRG974qJddF2yKVpQVawLGc",
  "key37": "52REPgSjtJfJz1Znwtj1LDHiahftZVpqq5ZQRwi5C4xWedT9YdMnhdddNzc3qdqtgJEHDq5FzjGBfSU7YoZ8GCpV",
  "key38": "4vPDPNYS1QzWrK3pDS3R2uVDScFAiFXPVujAWfs15DmSCDe7W6CPsGw5YBA3zhkR3uRwbSRaYGLVXRpqcJdA6zJw",
  "key39": "2xdZWTLtfSbD22ERPw5qK4BArqRsPDu1Sh8Jv66AvqWnJA5wTQUovEwUu42bDyPb214LXKZUnRmyyG3cC1fEozPi",
  "key40": "4Cpe5G2UJrTq5vDUXvi6YY5GdrDTW5B3b4A1SeYkbPtfGeX3TMrZaEKSjtWJKAzfWMd7jNjd9ZVeUZYonxM9XntL",
  "key41": "2eZSiSzfSJv6qR5tkVnXygU4fXDszdxWQPz867yEtKLRbhEmn9AsGmt8gjws4hDTxqWM21WdmEY88gbQ1wAYtQ4w",
  "key42": "gLiSjtKC1WBtdHbo5JbkDoszhfHxyZq36Zkhn5nosBeigiCJxbwhT1F7W6ERR36L34fep3uGUrTH3pqtd7Pp7SK",
  "key43": "2E2qRVCG6Y4vtGQmPHFVCFLfCi4fYb2pH9fxBhrpQ1BgJQMjiuNWuoP89ZuYCMDiP5ibc3p1Znf1DsYuDjuoPjpu",
  "key44": "2a2AjwYmEydbDxgiHdFMeRTzeLpoAj7aDzhqP83ANV9kNBhZNHXRoohDpThgK1BXZZs3jUh7yyZrKQZHBbVpeCr8",
  "key45": "tKaFxq6B3Pcph6rSbDteP4QxmLb2GDSV35dxDUBrNNpcoVyJwtSb4ozFhSSy4Fk4LvDzVj8dWzvcjmgAz2MUFdw",
  "key46": "VWgX91bazAsDVPvtQcEQCjnbsNy4ZzKq4xPtphWbtTYNuPirCqX7V3djc2TbuGjBX4GBn1spPcUM6EAnkFGvhn9",
  "key47": "4D2GHd8bJdSbonkEKr1LjspFEwhAxTCsNTFwHv3HfefgH4reec6RzzeKZhTg92Z7QKcYQwo7MkJPKUrtCXdNgq5M",
  "key48": "4qSQGARM7gtmPqDJNyPMnnMQ1SRNU7xysym3HzjBnMRNRyKS8rxJ9jFoh5G2Kg1QvDCFeKRzkapanRwWsEFiVLj2",
  "key49": "5cKDGURc1gKNKbkLGq8mZKnYeEEom8EorFR3eegC4GZGc16gvFoJQuJbCZo1wvr2KYcTEbLNjEF91MSPBgdHx81w"
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
