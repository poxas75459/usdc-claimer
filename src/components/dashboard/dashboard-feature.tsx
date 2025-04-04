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
    "2yCigdsGRL8GQJ4UJT2ZcyxVYGMsMbCTV1y6XrzdEhe5HYKFLCkHiBDW82A5wU381npm5VmShZmZPWkqFwZvc5V6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3htVb5s7GxGnbq8CsfRjNhG8nE9241fnN1ELJWT3RrgSMxANFyoWiBtMx4txcPodR3fKAPAqyUBHnaeQXziXkaqp",
  "key1": "2hnjLLLyKUTYfgYmnwTXGCZ9ZKZu2BRrbqDWkPzgRkUcjEFamK8eKJFwBkwsEdYobi1m8j6fVaMaSBhVaMnk5axz",
  "key2": "2d2oRyzKAGDb14jVy56gza8kLBtpdWvBdVbDfWRckXz2ucmdRVtzGwUfMADpjaLenCV6apWRfZbZRCJ7BcndrZeH",
  "key3": "5RW1JtmZGjESNcXnf7xypYcLYaCWnKd8BNqb4bqnUsTdU7uMw9rnrMCNxKpJPSEtkxJiMYV2KQevtFkwfEXQZVwv",
  "key4": "5DSj5f466yCDyE1TPgv2xi6g3cCwzcy3xNtvBroiyB51aUHNKEWHC4xrCVYwciPEwwxQTbUVmALYrDh2VvaDvFGA",
  "key5": "224ZPi28aVSBDiu5stSz6drVzBTsaUhKQmifwKu9BLhbhJGNidMYqEdCkpduWLA52Vibh7B1zxDVgmsZUh9KbLwC",
  "key6": "5JzYZGyHMcR26bRkUryCbhWmy3ZL9h3RZhCXJRJ3ZJYqwZBsDKcf3vcZHBhAHTYwqmhr8mrvdXYJTL2AZzp5eqPc",
  "key7": "3kh7Gz6pLreuxj91SYNGo5nKf1YyYY8xEph1aJdzaR9X6PNBVjaxeBFYBtihiX6viadmnhiYGj3sVfjiVtpU9Voc",
  "key8": "QbauJqmyRTsQh5eBEKxJiYgcLJmoWosZcaL6ktreEuA1VUux1LtqBk2tYsZY5vPHfMYqGS5ANaWUFZNLQz8gVHf",
  "key9": "3Q7FRWNb9hmoA69Bj76oL2i2sd8h7fRDh66iRR9v71KjyZorHuRPbiHZ1bT9zH4x3fW1QPBdTtpgX7DoLLZEj17C",
  "key10": "3F4sZrTXd76tWsA3q6E9NRBCjGD43T4Hkk1n2Ss6LFpJRoDsuuGB4VbL8ShEKVc7CMy24mobAJD1191GkR5YGgQS",
  "key11": "2ASwogdT7Aknz1mXMXrnXpsowi3ZXdKpxFSLPvdaD9jAk2VXvT2CuZ51VJ8AX8d7BBbyU2mtLUrwmuNsoGQ9NEJV",
  "key12": "5UCi57EjSi3kDVaWxyxBLL46mCEh9GjJfBmnA9sRh87MxKiVbCtywu5eUUwoqzhosEsSNvaUu8YBcUZkxhLm6mB7",
  "key13": "46XVYhauTurFRSfCDWPLRmzM3CFVvkEwitYgyMLZSXH3HQ7BketHi9EEzfHhb8Hr4G92hSZPHCjDqy9sjbcSFtPH",
  "key14": "4MDTSzMBnst3YRHpsXmC6HC6s7KHcWAkFrxcJYFer18eLEMthsTQzZrHtfkwby6mLpajw6YMcFSiiopNX6YXMb1d",
  "key15": "3hgFJbSZRPCAuQ9k2ayfzqrjburMzWPVyKcVtzRp7L1f6CKdSsXWunHwPKAWhyALQPWJSuGX4TLxRwm7AGqWvGoe",
  "key16": "2tVbtz9iu1ribrBEXKLMYgBjY1mFTjtnwFyBbw2zTC8WU1Af333hFDXeuNbp7Lp7Z28kii1B9LMcbUM3i7Ny2XVq",
  "key17": "2dLLq4RLReThrzv4h7L9ekX91jk8Gd3ke117RqdgsaSoCQ2wUs7zHn4HUeMzyrTrsZ9qReuLEEVmigdsKYJesWZH",
  "key18": "5ZbXqKfUYEUGnq6N9iXNjAHqsM9VADwekKb3smEnmeXpZqvbqhN9zpWRKYsjfxKT2ZrNswvrHJpwbYRWseTDieDt",
  "key19": "2MNzoitqSQC47awFbMraPCeoDkhfuf3mvFhbKw6Ea3WuPiCmN5TabYN8g93ggg4H1E2Nfmvv6FMtdYfJRDMs41x7",
  "key20": "MTJ2Qep6pMxHMnBkPGq6mk1tRZrE4PR5qcxReT4wmtGNHuWrNpJw9SRWdktnHCyKCbadumie9VMybmdKUWQ5M83",
  "key21": "3ptS8q9FoR9PRfXKarRCEhcjVYtzCD89wNJHfXeKioM9gbuwqWX3a4S2TnzH5aQCzgpYm9SXCWg8oSkyA9Y3SKZp",
  "key22": "5eKhg3sHMycR5WjSzViQBMsWEDpeugYfA9JXMLmcUnp5SKmBnkrgjmNVdEjMF9wmHVkguoAVRXQC48RitJ74oeBv",
  "key23": "5Tj2L5HdkfMDSsMtVWXFnukPMK2nvpRaWXJ84VpaUqrsVdBjoQdhE6NK2mrBX5bxcTZ9aA1fi69peMJRGEWe7ixm",
  "key24": "3A1UTo3ajY8tJEUHpnJHCZN3dfemLYU3VVtE9fuARBrpUBxFnG3iPiZSt2CZkyQBt6iDDCLU6Tg2z4a7FkgKPoLY",
  "key25": "3zDjuWdTpdAzz4mthoX3ohBQqETsemFNBUDnwpcubhWC6f4XQLdJHgFBG365NxaeKqLDfvDRFfKFHNCN6UR7tk3A",
  "key26": "sDVGVZZQnM81W35DoNB7ggES5FYUPWNvYpQ4vHEP71JV9hsbobGReTn4z9Rr3whL75fYVuPCYymNrpECXVcaAKe",
  "key27": "56Mn9aL9UTnKzm8nS1DB2L9qSHq5hNkUtKJ6TudXN1e4XNs1Pe1rbbbf1W8mvSCLVUmhAVHQjc38BLep6yXbqX6p",
  "key28": "5c15rs4rRBbwQJqprHiAcba9x9PCj7jAjTrkU4N6QaikooWJC1VqaovpCFa4JYBcsacUJmRsiThzJwXYFsPqQRKX",
  "key29": "4aG3XnaxbYMRcYFj6zquQfK6nUPb2xW3VYLbFeecFum7wmr2FDbVXYMerMYPwmiTwCF89x2m4wtsxybeUoMbnDsp",
  "key30": "2ZPgCsn3vV6JEBySz2tPBMK2pmjntPsyhaYAYUT4WMT54D3BF8aEiEpGeTDyJxzBTMKzvLx7vxcsp32prGjyWZ2A",
  "key31": "95BBt4vJRcSfPQPa13bxbPdKtc9LAKPF2VsPE1xduW8AGcHyjZV8k7i1YUgYxYKFD74R1mDLgMbaFf8ykf5YBiJ",
  "key32": "2tjcXb4siLycw5RXtgLSuW7Z53SeJHZce1Webi3Uf3GLEgZLUuHZe3PWXjuYCRqB6sTcdQYitJR8EhgE7FhQ5EaR",
  "key33": "dHLCq931CD262ntY8rbXFuB9UtBFKVXpeCPMjVW2tkSPfjUoEC9DZPkmRncPC4iUq1z6vnXAGT9iETJresEvi4w"
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
