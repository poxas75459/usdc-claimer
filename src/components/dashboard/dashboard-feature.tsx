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
    "3BchWabc6qBdgjV5TrRSWYFpU2WGkqjPswJoTfropegK5CGDyE64UPEfc8ZdHu9s8X4SXjSHbzDvFoPxV1H3QeVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUAbtGPtSgAceAAxGYBTS3PTVe9tDMTJUrnFLxviWPSAAQfvUzuftU4Wz38CQTbG8nWuwBzpYb7Qznxu3UovEad",
  "key1": "5ToWVL8Dh6NfBYFWS6pHk1mvSb3dwz4TFsNv4UZxa2SX2d98ZvoNcYmntVwBru5DTCwwFr6enCvZ99jcDRqa3kUv",
  "key2": "5Sq9SqX1xKNEfDCMeByDLn5Zu6s7vAFBpDhMZpXEJqBQ23zvCEYdjdeGsaKiE2ZJa8TLeEQJmj5i7hPKDA7TqZak",
  "key3": "avY3oZzi5pEPwcFuRMYLuYvruHyrVU3j5F1zxyMy4YYw3zJsCanpQkCA2GSLRKwdt9zTr4Vva1DnYxmzgrG4TFU",
  "key4": "3dyqxFRep8ce84rtYW9GadvGv8sg5aQcUDLqw9cohSYBnUGUQ8L4g9jQkhpinizQ9R6Ls66GQkFmEYd1bdRvZujL",
  "key5": "2RbrRawjSR4Mj4ADGDpiZHGPaEcfy56KoYk3iu7eZroEpzYyx7ipGsjDv7NDrs6dzc17dK6R9PS55Br21d5juDmC",
  "key6": "r4bMLVw7UyRvMfFGqTBMrt2REFZs2vx2pbkpX8Jczp2zeRTKsSEUYAKHbRJAW6BywH4TJuHLiLpHV7ycCgks19m",
  "key7": "5NX8dVhRNRVXv69Ux4R6LckfmZrQggKAbk4BmizrP4SRhx2YgPbanyVj5FxmRKbcP9XPgNQP5h21haF7M6UPpaVK",
  "key8": "45e99Zff5RfEB6RP7pJm146oy1RFcW8WfRaoV8X7hvma5VViSCikqTkVUa7d12RQkiktfzLmTqDckVotWf98uPtb",
  "key9": "2T3txqDXr7AmmSsjjVPoNq4Uiu2tXor7AzaHTkKELXHEawgmWz4C59T3etTPcaQMmNM5n8egJCV4BZ5C7WJ79Bh5",
  "key10": "TMx875SXsVZE3fSZrpnZGxHbC244wf9eVjMom2YuKw7y1PQ4rkNVVe6TBXXnezcZPgJVicozoHBcwZ46h6VSra8",
  "key11": "65z7E3CC6Hmyg7cn5ngGJufsRhDNSGeKbyxmVBDx6LbfhxzMHVnvBiauSi5z3L62o19u2J2PhKTAEaXY3Xe9Uqe7",
  "key12": "5BYUGqUj92hhAhmf4HtduGHkPG7gj7aRHeLMA84iEnSFkYCFEiPSqgToBJNvK8N38JV1TpaK5tPHLMzQmL12S1Zu",
  "key13": "5CjBbQDp6msfXrrTr6xdDc3shbmGFTyhHptBs845tiNFbEuR7iVQa31viRmZ8WBM2WXyyZuB4mZDbPZFJV6bJYu2",
  "key14": "5FazE9WJqeRSJFgtAJhuV24Z4DwboGT6JbB7PftzKFiiFbv9BYJEax14fdnXNE1TmcgwW7AqAqmQUjJ3Fq5BXRez",
  "key15": "2UYXv8DewQS5TkGHUsM74EF1yECHLFC44ALFg1XXb6PEnzQseNBrNf94pmpX5mGQdsm1aqvJZ9XcFLkRYmAqa29r",
  "key16": "3ZZmP9WQcMu7RFQMyh7DkBFCwQ47gb3zT4KKzmb2Nb8NwuAo4mpAHbghX6yuNtzd6BYkcdhfifkBc5FxamNN1ZqC",
  "key17": "5sL6suMnk12PCUwTFQ8ycMvBkwBeck6YsymPufuuwxp2JanQ3KhzuYYjAakNj2mar5QZyjpPmo1C6rVYeAat7h3G",
  "key18": "3EDCo1b6bJmC9Se19qqQQMSu6mdtAykXdKomcKzJAejwk58SwzgA5uv6jnkSfVmH6Gi7pMzZbyTrrtM6qC15v6zg",
  "key19": "3kMjGXA3PKAoFJAfNToP6aipo1V8ewGRUcwSwAP6c6MY35X8MpH7Sdm8z2Mx8fFA2GoJzFVrKRL4fhENSrV8hQX8",
  "key20": "5ajHQzaDGcY6wNYcT2bHb4xZB54h8zyRfUDkfRNUoRXWaDyG9pHNMNicJmUNZt1V75HA2FrieVCirNS2xKmAQ1Uy",
  "key21": "21c4WwSjDWhwBEHgwE3Qs1wcbxYL7W7a125ChitPfW3wntPFeMJ9GtUANjQCJ3DNG9EWYMq5BSuZA3X9P9q9y9iM",
  "key22": "3bCn1CGVSMeWAeCoRpTEw7fGoi8T7R2JbnAPemWkZAwzwNZzNEo9jDdYKQsBkkoAsq4VZMxNeHfRhELy7YY9bG2c",
  "key23": "ykEWMhAEgaPsFRqjdnoHxUZYqor2Pjw8j39Z3coZQ14ti6cmcndFvicJjgLfowQdaCJBUmNnosDaUTEA9JLqTa9",
  "key24": "5kdPQXBbga22yfcKRAcD7Uv5Gzs9vWvGhgmGn2cHnzqwVimAfb2VyJmUbAt4mgwnDLESLzsjvpLBgyhBJnFRvd1a",
  "key25": "2SpxieoeK7uP6tkvWnR8avh2bAeW1Zwnq5N6su76cpsJWWJsivj5CQKg81g9C64gmf7yACNqEYDTtvbvt25TipHD",
  "key26": "s3vAJ4vTuwHmymLGFMcwgqU9wAtM4XJ2Ss9qjCPy1oyBRQUVFXvCZwnAEGhxDg2NUFrnNagwgEzrQq9uaBmubad",
  "key27": "xxTEMjpx6GqHq1FQETMnsWFZwUbg23tKFTU3YuxQLW4VcKmY5Mqba4YK1GRbXDjpa99B4qevyP1Ef28L9xN5cjg",
  "key28": "5qNuyhm2hcQxH9Abm35Cw5GcnZxcYnudxNrec7B2nwrHZktAAD3tkGT6w4mSAE1fHovBe8cQE19q9o6WTytcC31W",
  "key29": "2L6RrKoopDevvAv2Kmv1Hh1zrAqzHuYyu7wyz6zgyFbTMK3hfvPBSJssZ1wh6qM6BSCjmbCGubSVSiSz8ohVrWTe",
  "key30": "seQ1LiGbFfJUAUZAsHPD9QKpgbz5sNGF2HfaxmUtv8uKSN9ahvsHy9UZ2azCpuhcgzaL6aUoEF4EfvxCB5J1QSR",
  "key31": "F6Qocc5Ax1HvHxCuBe93Me1E3KNHYyF7BBnMDp5PGiYoQvyqUd8VCsPpSZoxTEVZ1rW5SQtU3MAdaEP7V4UWJjU"
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
