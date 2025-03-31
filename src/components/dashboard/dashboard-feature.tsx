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
    "2dZFXuA2s2YSJsubo23cPHGZWQiWoUzJLZNVyf6PiNPd8wDyFUfo2NTt2z4JmDhhhygq6DseZEZUGcViKnJHCxCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BYLrciCixwfwSMZJ8Ew2egRy6ken8oqGvL7jQvbmTBSQrWfeobnTjKr5FQDkkyZSPfRuTDFgTdKwKh8ghkmVEFs",
  "key1": "5Nv8x2gdyQJfGEEiL1ini7Yxt3P1Wry6icErRe18NogwY1a3ZkS3S2MkqPvejfRP8MK7BQYDBW3fQ9PEzBFbRRqb",
  "key2": "jdaPdfNLp12NYia3zHyve3JWzE9JbJQPeFpt6Eb6KZrZRupNLNxkvj6XHbuCAxT4XTtMUZhjGeVv6ACf6Lf15rC",
  "key3": "3KkrXP96R7mVwFmy7BZhbQyzqkNeHZRYSzenHPVobCTS4Lr9wDxuBvtj3m5mgETAg32S9wQtdkuM3NXQuepqKBTJ",
  "key4": "2McnF5jpyjzaB6UNUmRFYDkqiJvLgTTYa1ZAJrzycou7baGhV98JMwmdaK3Zzp91sJEiNSVH5AASnLQWbye3LDAD",
  "key5": "3fNmbXM9wLk5pvxtG7EoD72ZcLHQDJuKmT4x3FufqfCEYHAixqkXpk435A2XfxaWpPQg58qz1N4ifeL9rCnSUGVe",
  "key6": "4vpEo7mY4PTs3U56s5xu75Ka67XhnYcCgfzCvfweyhc6d8dYGZwZWi5oxbVt48BpzEZUpMrTgbuBXutmChwTAdY6",
  "key7": "4yr2hUdrBTnTGgbimqZqtJgm3yvjsJhebuGnPExcN9fDksHPTJc35gtyhaRJg4aPF43SojN65jFyLBBaFijqQZQa",
  "key8": "2FHDLiKzMtwno6LpBRm6ChpS13AQyFZRGhYiUdBiPePLgawDPgKThGgYQSZh5cyELyRVyNpWPPLXBqASaLNabq5u",
  "key9": "4jK4eqqydD87ci2p8ZnVG6eE82vn6bKtofFgiHgnT5RCttvwEGozYw8gG1JQ9KPt9BZ9Y7z6LwfwuUwkhjfUNXsP",
  "key10": "2SRFMTpvfunmPYNV8aEvbs4V8MKCa8kNpgFHNA3qzpt5cGhG3F5hcDPXan9GGPPtoet5ZCcxnqu8sHkJji619R2H",
  "key11": "5dm7asNM9qvTL4dzaYc5mC7J1oBWxmuNyKbSrE2isCwg3M3Bck86FJHVG9rbpfYMYGkNFjmj7VfbVHkya4doYQsp",
  "key12": "LAy73NUkFxeE7ewH8DAyaaq8jdbou6asLBzeG3eeCj2zRgss8Kv54kEPyxSKhfzpGsi5zJJKqnAZyas2rAdHT2Y",
  "key13": "R6xTWKyvFbsRciooiBn2o2XALLgXuBZHRaAyvM4qyuZtsCv1agNaPc5Rw7aPC7KQVVr4CvMfDKmxr7LNtjMKuot",
  "key14": "5emcFQfvb5J8NWeezXf3BLdcPRuhJjNSj2arAJZC1UN3HPFsbbCmqP9BfJQAC63gRemrYUt82sXnAaNGCK7fd291",
  "key15": "23YcB67PtW2VTQ8k14nLgLPSghzFSJBH6mD2wvqqt3RFfoDYQ4tduomNK57unhq647HBvM4qytGiKoSo9DosNcYC",
  "key16": "4djgCwuipAS7VgUcbWnUZSVK4PyNiWU9tWgGEsb9aSkTURzuMdCNwehxJxvYdjXZTb9LJbUzwq6Hm51gxHiawois",
  "key17": "5K2fW7Dz89Q5tZXLwwC6UMc873YS6k5xUoWKQokz8d52KMX1ZPkmrW9nSTtW81Z6ffV4x8nuqtLUZHH4uQaQdvDK",
  "key18": "645X4uQrcR8QB3A65jtdapjRn8fiS8y2AP966ozR6neogt2EdX8r3cELTALvk5GkFquraoA9M8CGt1RhZSapmCEL",
  "key19": "4uf5fw4pjuVxweNEBoH51zqsjuwsm8MGCuncWgSK7JiemmGdQvdBPqCCKDrGwz2LK4jMg1vYMe5QTsJCjnCHcfvn",
  "key20": "2PpoTu2V3VJCdvjNqUq36hJJrS6g5FHUPF1mh2LcW4aR4ws7t5Yg2Yh3xxapQkehm5JwivGok8S2rj6b6hcSJQd6",
  "key21": "5UQJZhaTiQxKaZGc2dhetpgMKDwrroUVmt5gzQcW6bN2NwSeoGBaY3Y1XUxGuHZiYXBamTRJseeFV35rG2SwW84M",
  "key22": "HUyzq3Pz9pYt45odgt9zT2xE9MnruRfkqProK97mfyT4XhxsyxJ2JycjqBQz1bFhJZ2RMQ5JVfAVwYT6RzHFzNW",
  "key23": "5bVYc8jvcaz6J1U8cWniresy4ux8vEnW4tbMJqzJBEQr4zCXkKKhZg8MtqwzBTsVWXqxNDu4NCa8txwwHYK4cKcp",
  "key24": "3rtntyaNnEqvfN1NsbwcBNhDW3BRWbce4fjoRSZy2Nj16B9Qx4GatDriuGovSAoB3dsgH7vX941hjyMN3BSUt8S7",
  "key25": "ME7qgpDApEpQ73ax3HrK2CJXas4apqvveUdELU1PGgP3dt2epNmXa9pGisWW9bqPotanNaQytBfNnNy3bbtkoqb",
  "key26": "2wjqDEtCk1vKL22T244pNpkbPHzdXjdgWFfWBuxLCfZb5LRW2y8SwVSFTcmzPYHfAeT3czYEha8gtUpAfafDgeGD",
  "key27": "4NrfwqvsPw3amFDL5v7u6BVFBjZ6oYSCDgTmmzKSR9dEYRcm2nYSSbnP923MqcM5esqbPu7Swx9Zp95HURA5AVnT",
  "key28": "A7DoND1YL38bdo3vi3Zu7FCTTn8o8pmFN46jnk1jFEDfPEaQ3SFcfKMQGBSuYQXkwfXgoJmQHEirG1642ruRfYU",
  "key29": "4uaFU8yHgRvc4YpjzVL2Pe2WoVhUzA61fNe9UrEGCD6n75s2H6i6LkNCfMVQTk97MH79THDbFVBhzsMkG9RofpkE",
  "key30": "5EBGkMb2jxWwGZ23AQFeuppc3vWs1TUSpdSfhQvPN1y5Ksdepc1LtYhkFsgPEitf6xLvZVMiDCYZP3U6vTAkekxQ",
  "key31": "4RzD47oiGFmn5MHLGUx9ecRe1PVztMKJUyACv6nZY8XRyfp7P7uxJ1Vb7ZEYcDxWGqHwHhp3HwWEpz3qoH4i2Nzm",
  "key32": "4vbMXFss1VFLDzUvbxk5J2z4YAtGUeGjMn55chmVgYyK5qS6oaAXXRDG7esvBW95N4iec1GPTntHtQWHo7rhWZmy",
  "key33": "4yTDLi6c1h2pyXzqFSRtezJpqrAkT6NXmu8LkFrnWHnQViN6U4Wh9Mnf9ZMDtXA9BFdfwZn9BEKhhwBvjyLCnYrS",
  "key34": "9F2bJPwPCcUfdLqo5R7BjFfzxxBjcrTQBv86enPiXW8LVrpnR4h5X5wtHfxLUuq8HmMkWgb6ADU2piBPf1Qr6H7"
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
