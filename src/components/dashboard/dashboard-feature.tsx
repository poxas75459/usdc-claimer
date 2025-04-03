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
    "3ZhE57LNVMGsg2G59kaC9YhtHij7PQDSujUvUNyhu1wqy4JeMmtMbJUD9UeKzytEnPAKQSAD9C9UoZ89E4Fk64o4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nUA5omPLprSP8kNYjHfS3zXBT23uAgxyodwqf4RFJnnTYcJ4VdcQU8jAstNc8fGb22gy4PjWZRVuBxyNzoiM3k5",
  "key1": "qHN3LYsYmi54EbxYhTNQ6U6gqVd1Mpkpc1q89y1pvMHTNjoRap1HqVzh4gjkXkwKHjckBtx2xWCrPGYxBgHgXRb",
  "key2": "41n1QxoGyFHUibr5RBZikic9vkmMNP9gPdAF7GgYHsQhzmZpYcmoxQx1LkL9CRCYU3KDny5tXJLqgSXJS9fwS6cG",
  "key3": "5duZgG6JRQLfcHqyNbbxvgU8448d1eggbptvCJ5p68W9hACLqF2xzUhmZ2P2cERjfTPvLMoEL1aS5mSwNefTh3bk",
  "key4": "gD1m3qWEMubKWvJfoTm7qKzx5cTRvLPbxR96A9dfDSGK3oQoWsf1nMDfbBCWWsQU6uX3pkMWrrKPatPREfcsd2y",
  "key5": "j2LegRL8ayY3Y4FMmKSd63Yqc41rw1gDWdeagaesAta98QgSmev3DrLwa7P8BHXJtXh4pU4Jbn3cfVFJFpKcpi8",
  "key6": "2ii3XA3R4s9WsvSQPBXJhw6K8JGWyKp5ejoYRrh5vDrgktswNMR8mbVqfijvxryJGEtvhboPF15JRTKRFd4yYa6n",
  "key7": "4p4KHGgBnxp8xkg1QmVZj8eoQU2jJncU5o36VhCibmaGftCFtWGryySdiwu8D1rFdoyt5U9uyjzfsgiKCtmNrmz8",
  "key8": "3UPLBKT19Pc6Ts1drS51WN1L5xSA93Z6kNSLHY8z5q1PURfTxzU56xPYPGpb1xMas5B74TyCdgemiazfGjU4wmch",
  "key9": "3Coj6CPJ1VyeWcWVc5BxSbPnpm2bGk7rDY53ue6ug7iLkm3UaZMWDfzvUkrGcQjyV27ePX5s7QPPcMsKF1teCy8k",
  "key10": "636LAmoMxReWcGhuw1n3gUStnex8dRt85TfQCNvazGDq3eRvivcySJwEFQPk6xvNZ6nCP4RDaeh2mNJpwobqgz9M",
  "key11": "22wmT6ejD1RUR27EQCdLFRX6RtwB6xD6QbjHTNW7jqnS46qmMXyRVn55DpFS2Tz4ktMCy3Rxm1yqxduVnNEKEFkV",
  "key12": "54gErD6bY66S8WiBBTF9DHCrjMHKUs2iX1mQpo2tg9JPmoze8s45FQboi5FoGZ3LLDQ1tWDoTsNS88k9Twi5rNvw",
  "key13": "2FUSRwPPwKjKqggmJoNJTGcaHPgjJ75r1ZjcvHSJQpzptb7vpU3daZ4Lsmhw4Qu7Wm7ixy5XVb8eUKgrDHzY7V7v",
  "key14": "3jRiYJY8RTU5zuaEugmgVp9os1CRQAoq9Z691GdUAvGJhcnvPCJZcNoQa9eaKuVPZ5dywBWcv8uxpTFgxsAbtoYi",
  "key15": "3Bk4F4irbndZ8ktHkoXUkM9x7BYeRc5xMLmSvnrjpDmSwWQWAffQpTMXZv82wfJnQ7RgqxvPB5GWt9hL1kNaVgMt",
  "key16": "55xP3x4fTj3UuR3Hm1Eqfoi1pLFzvPRRLS7EzAPpY8E3vhSpypm1grCprwi5nHapNjAJBuwnmJVvPMhDgfNWcmeP",
  "key17": "eaYfmUtAG6PU5kQvX9m86TaGUc9XUbBpMp8Am9PaJBYuamEuUtyF69k5PiucAyVu3qWwsD8gVKSmfNPXXVM933T",
  "key18": "2depNZECM7zxaSRMotj9qwAM7vAaESb4kyu73btvWyc1W4Du7zwPayhXcQWUrbNmrLSLh9KBL41LhwoHuM3i61je",
  "key19": "4ALLBwoVpWfpanHvfM8Hpkg87U6RjvCmbAbwqypvL32ABBXEPWGC7aQeoMiDc1cfSqqxrNSRfkdow1Sy1uZZERtH",
  "key20": "4wmakdYEbswMVP35Xi2az9E5gy4Ht91V2hzyGPjL231Gsz4Ez1pf7vP4qmvmZroq8H4XEtaCh3UDzqPxwnqheYKB",
  "key21": "3e9qtFLQeE89MvQzsZcoTCPFknHWdrQMft422YnhhcshB8spbtdx8m12uh6Zjv82n1QuavkcYtbYCw5p3AQzuPZM",
  "key22": "6YcKWrGFUFKY6t7gMWJtF7iAB6SSKtmw82G1qYM2XuFg6NmRaxbGuLBwiGkskgXDM2kXMVPSLP9LUHKCRDwL6Yg",
  "key23": "5EjHmBy5wdLavmJHQkdUvhvHsdLnrHSgFxtWidLKRqkGZ3CoRkmoYUkbUf28X5beRKCn2ny7kogT6N2PP2wmVPb8",
  "key24": "63R7dp7jhYbLr8fw5GBLcdfskz4H7GUkRnunHYz1WALCFg3cjUhgbo2GUyUG1Hk3n8r5Fp7M8gceKf7CsSjvTBR5",
  "key25": "crZypZN4NYKSAyC6Mmqyn932CBSwaAVUMDRQzQXeJZagdVnxB6DdFH7PuBtbZHiTjHsvWfXXphxVuxaSBekoAcD",
  "key26": "2QSPgxoVWmYREtFvCz1D1VKLScFQMvYFXvtm5GvX8N1tXkwCQihptSQa7S41ygu6hUqM7BugoLf946q4i9pctvbj",
  "key27": "3bPLe5qrF3abLuWwvsQN7ohy3W7xRpm5eyKuQ2ZHdut5LHZnBcBKoVD1GzkWQNhDLb7v9YC1aTKEehLC9JsRHYd6",
  "key28": "3EodUaK3YyyQ7CMgZ7onbGGc29AM7Z766Fj1tEbzQNZeTfvCr44yJN74xoP11Vbm8F2hRczisw3YWnqYEvwNbTbd",
  "key29": "4Uy14VFHf2EtRqjkiJJW8hnEk2yLbaqBe67PZgZXinrpCw4o1tr1mFNJPdDkN22q3q9iu4oyGTKHK4M55d243Lgw",
  "key30": "4BspTLs11KCSzqfvXLfRYdmcHY9RFuk4dJtoENuLH73yMNL8LkvyRhtCk7CZw4koJbnTMnAksGvfB1Tnd4y4cjmA",
  "key31": "5WWLGE6obWFN69ouqBu814FhdkkKwMchBoSjEEg9EtbDAzMTnDyqePe99wojeNAupYZMsL8URDG9xp8NsmuKNnvi",
  "key32": "3LHXQNLqca3yac4zA5EAEZ13vbvB1QrV8KcQyyQqxq6t6STSRA74uT8PigUsQv1e3K7oYnoVjVGvsvt6vv8XEQMp",
  "key33": "4JkZ7TgnpzwBETCB4JXBjjYTeRu4TNTaeZJgRzzvoS9jFf2GvWYANHAfoguHesmu1jWYYMkBsF9E28tited7avxr",
  "key34": "Se4oa5VK61sYe9nFFHQJbMXQEz4ABu1X2wFQ6TUsEV8uBwi7BgyZNCUBezBCMMfQzmenSFB1nkrQF4FmcoedhqN",
  "key35": "5EAtKiXRDCfAump2SCBecGbhUcWXBXwGZxrUytBeMUT2uqYyfvTwXfiMC8aWm3VfriXesieGbJtAdaJKjjxGtzet",
  "key36": "5oMrCnW8k5ju2YtdtA2sCSYwnXNQwqQRBxfV56piHYZ5WRF6PVL9NHPrZHq5MbqDRRQH9JBzj65LdHntS1x6vJbG",
  "key37": "5DhyEFEBn2NbCdS8f8utNqeqzRARLVSVnZRejLBr4gYidrqPdx95gAsxt8q9soWkdV4kce23LSLoJCDKRebDUtat",
  "key38": "dyciqnQY6Zmpjz22cpDqig4XS85wZJ3M2korL7wtYWXdWUquTUMNBVhENcMGf4SJ2mvpgAurEXD9b3zfmKxHwFb",
  "key39": "SqZs8D3tDNu3hNdofyVRsujTFX6oXXJpPNiW8riK7uS1Tqud5djfM7hhz8xrKrvYrGwKJ1vC8KdeU9PPj74ZAXf",
  "key40": "5Nr7MfGMXppVBM68SHRqtMyAQQSp7N2wzRwsFqPaLWvrSAcWL7KGDgMM9gtyto8gRwNLHMPP629SNyFxgYqD1k6",
  "key41": "47bz3HiqkKDM9r86UWWYNpo2wdJJWNBq7kSuLZuev8dzgGRN13UeYhMhwo4gm7G8hDyjjVWNCT2j7cPzaAWaLTRw",
  "key42": "3s8e1Jz2BkquBxgg2MKPLvQ1fPdZE1e9vCErYnbKnWPdqGHTjciRbb4nm5F4cvgMNj7nrTd4jhspbJy4mq1gWnem",
  "key43": "41fUQeiEfXqGdZ1KJZ7ih6X6AfQH86TMzakpvWb1AgeDpjhHTcgiNmV42KWnyyVQN27AWiegcJkkDj6sSu9oeEfv",
  "key44": "2XVpAswp4bas4M5MuTPvvPvahEZUKNjekEXFZ2nQ5iRRFSFLrjTVcReUy4kzVijbKiVvVvmYKJxrNNQbpzEe1ZWa"
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
