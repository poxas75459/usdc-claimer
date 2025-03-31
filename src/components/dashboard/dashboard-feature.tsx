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
    "3KyM3b28hBcoQnb1ZEXb8zoGbLGSEUtGLd4Z7robkxP5JBw9iZEoFPhJFwDNZYFZvWDVmmq1gCoyHoz8B5QQ2dW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wa1wu6LEFJ69wagRoWivQPuiKqcUs2WXVdmSCpMFoXMCiTdmtKBfcRdHFVFMoJZbgSeme2ijqr949MV14kS9rWp",
  "key1": "5r6H2Ln3WJohhZpJwVjxqanRaGd5UEkbkrgV1WFiNTPJ694c8g1DQCrcmVxq6AbtBxhsG4Hr5cZu7A24ZX3g67rn",
  "key2": "3Lft4U63mTUkjLGcmNWUH53P3ckKEAbFTSVvr5XxfbUrM8t4kZU3GEAT2cA7ofN2sJgzSh2DGTseAAefWyx6Lb6Z",
  "key3": "2kJJCfBYtJr67nya5GNFjEPCNkyUre6Jj5Y33psme71wDTnyWGaoqpNJFfopJoJMUCp7s75pZALbCTxQwuCUGhgJ",
  "key4": "3bLhGKdJXP3aW4i18ZQgfQRqVVPu46Py9FmdvbtnxApbr8AyPqEfJzQYj3kTCj4ooXfxhd5zjkMvPVmdyQhEfksV",
  "key5": "cMeYa7sTmqYp7bEppmHZEVUuL1CCBDeMrLcvT2QTTnV7pZeKMYgKQEg72CRpb16W8rS6PrFaAtXT6kDVwDUWVrB",
  "key6": "3NnMUEo6ayHdzQ77jNZVbD91ZxX475fDx7sGuLt21QbVGjz6KastBskeuYLNDSdGwMCBaB9W7EVpuwRwr28JGscE",
  "key7": "wehPrNWWK74jRr6EB84wE78SQ5QZXH8LzJ5CBreFodnNkoYHbGDcWiiJa8g2s7MgtvYUY6QjGFYzEyw6dqgFeaD",
  "key8": "5TuKb492zug9YqGqogTs8wvakxco1XUbzVDFn5hkuKZc78ENXKT5SwLKPK2pcc4eRwo8LeaLsSXyhXbJBqdVyUZH",
  "key9": "4yLe8Zrpz3e7XiAsafieNPofDyYadiCTwwa5EUs9McQrxQncj7U61we1iV6PsgPdswZLRoVDDy1ov3vjc8uPDWQN",
  "key10": "4VwqBwFGEqAXHW6grftPHBbaVSV7SSpWsqRB1nf9aBS7Chp5mJi5xL9HYa5nXagdZ6mSt2ishJDf5yxDp4Q8G4RY",
  "key11": "2UnZT8JTxJBF5xkQPNPuG7sSaAEFZpLENdwfPoENDwGtvKAtwRd9RMNhGAwgNV8kBUSzJmSz5egnhpM8At83N3uW",
  "key12": "2WRdmhwpWAeQp9jF2Z8j2oKmosQNU1keB9jYSS8yFRhLdmuDM6ax5PwXjHoXceq28FPDiDT8vZQKSy9j9cttVtKm",
  "key13": "2qwFQ5F5QsJWxjrqLPbByZAvdkWE3jyZnK1e1LUHq7QH3n2Eq9Wq1GswTL7rqpKZngjr3T97k7XtNzYKBJ73NfQT",
  "key14": "3xWwcQFkMcdiYx9Zf1bib322uGsjLnxMgMXMgu2i5r1txwWPZVE7f54uv35v3c5DZaUv6hvaq2sbuSAgbQAr53eM",
  "key15": "4hsdXvqna2B8inPGHWmfd4HfRs5bqwuPcHDfWMPUh4ogi6mgnwuRc7gFijeZ9Yk9qTSVaB6ekPcadgd1fzRMssM5",
  "key16": "yQzvNSpZKSojVkdxR2718nXp3cQhXDN65sL1CBffhq7nNkixmjscAxBCntJntxRMNBnUF5MsuBWAF9Ebst2YVVA",
  "key17": "4BybMMZ5eCbr42PoHXz4UsBLJyyXaQqj7DrdYYA7FuDMQscjc3ZHVkb8whpTEWGbwtQj93suHEHduaTMPbmeWSNY",
  "key18": "66siAh5G5f5r8BfEQcyhWxvAp2RoruiUHUUvAnkgQx1Vgz564ux2CD8Ln1HXyENQponhq3VjA9a4Aamdyu6RfcKa",
  "key19": "4juCZdBhHZZpBP3RTASpe8JVwGyMFUGaLu3jUL2hJbGdvkmfyrqDQYDELmcQC69JSkKejghKk6bHnxoyi1c4cBA",
  "key20": "yhyLdsFz2AW7KuBxqj2VjWJmu9Cy9y4nDNhs6bbPm2Fmquw2Su1uR82cymofeYtep9KNidYQhzaU8zymrva5cb1",
  "key21": "3yeqwiZW3yLLoGrYq5moDeTo7TvoKmrvCA6dRuNxSZdC2LrJL6FXBCmMLexXDP9U2mtPfTLqwEeCZ79rPGMLtAJ9",
  "key22": "4UZh7KQNRV2L46wXqZ9dPeH3ZaMrTeSVqQRAzHgNKVQL9ja543azQ7LD98GuSGwkbNJEgDinPoG5pghK4gJxyTuD",
  "key23": "JJiHKMskTsaaicLAJXDypTuR85jJiiLzdVhnivBcuQ8RsbTx4MAz6tS7HThvPWCXD99UXxiJoMsUEzkUobWZBBa",
  "key24": "5xPxH2WDGDdnJeC6hzdd4AmQ8R5dU83u7e3ot9nKSYaeA9Mo1jnc4yoG8s2frYDsmTiT7KNBoZbBxZ89c5Huy326",
  "key25": "43t5hH1zQ85VUvMxbrrnf3cn5vaSFo2551UL8o22FcrnQ72BX18YgVZXdDdtFnAeGey9aQcabnkbUEQaoiZh9Qg9",
  "key26": "4ZYY9gTMY9RBth1LdanauXNfL8SvkLEaGULqkaSzphN36u6Xq4jztHFHSdKg2cq5n1EhFDBcTdVWGewi7pFVUCgg",
  "key27": "5CT2Z5VM3TLksyLSQtJEHhyN3tNUyknq23fT6vZ4jUGcpzNAps9psYzB3BXrvvgseNcTqDJvdW5yAJ1TfSrPokeV",
  "key28": "1EKFr6xXNgzCko1aVJe46ZfmwJo31oUxv3xvX3e1Rwiw27dsehTCSqtj56PVB5bqbuY3uutaZCoayQR5h2682d7",
  "key29": "2dLvQJ8CPFowdiYFWZMrhTauKNxztWoDSbhQfmZE7vynbSbWeJt4vWhfRuWbzyjSnubMenXLJKCmAcJ3XS8dfLJL",
  "key30": "kYQZuQefLLC8rsPFZuPKUZ99qCPDV4isrB1Ap3QRcktZWWPvrjysLLgor7LCXiHhHvUn8Je4oeDjd1Qj6WEViu7",
  "key31": "2YWTeEfbY86rF6nggHzMfL7am7f261yQNVmmAcd5DhFBX55qkcFZwvK8zRd9nXs3Cm3ETDJKCMfLgfhRm3id4tP8",
  "key32": "3kGPaRLQe7KuosuLYH9RKgaYjAfTjPswSZEdtcaeTyqgRFctZNjomLepMeFB6a7zwAZtLVdWesZqFyxtMHAqb6Tb",
  "key33": "46wF2eVWpyc5NPrwomT6FyqoRWVDx2jXpVbrgTSRo4BZSV1vYFr4ept9uZPwkUfo9siMf1bw7h5gPuEHvtcVjWZy",
  "key34": "3JoVL7ihf3M9BEBwkbuMGKGSBw1n4yYgFoQmYwjHBjYQZ4jcQ9H2kQFJv8NiS6AV8mcwahchDx6uDjLFvN4SHDGP",
  "key35": "2fZagLjwpBHKddfA1y8eqwJpw3z8FbBKMLLJ3NBHu3ojD45d5gkuZZrxNpCwXnVQv5A2kacr7DorJ6pQT6rhHcgL"
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
