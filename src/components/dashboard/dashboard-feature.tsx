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
    "38PQjQZBCFN6HbBazU1Ys66ua4ejQjp5SbCDm2mdZ3t5QooSepLJJB1US6JjDV3q1KyZnHuxNtcGzNBSZGoHUX4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgRrPMJvfuDnkBH8NQVQRd7eurbpqZEJ1ieMKNvJ9aE2hbgPZMcbgB7TU2AZ8HpqdTfaABbFuhnVF87m736qmY4",
  "key1": "3yRdJgTfzktoGH2pFiEsdDWK5ftR2w8TrSjtt466DGqfW4K4UzU7ahWUPNWqVSWjGJqDouTTg4Rj1Zggjn9ppqwe",
  "key2": "4vM7RhPcGnoe8wcUbUE6XyNZdgubQs4EcPSvXnSkArc13WqVBJUViEB1zKrFQGbVcSiqqMucnjh8SpiQUdikLvpZ",
  "key3": "3Ua6xfYvRrbj1T4xBXiN5WUZYGKEtYdT1P8cWYq4vEpo727iZ1QNqFuKmFwEJ7KVEZ42VTyPSwJbKFPcjvqrc6ms",
  "key4": "2geDB1qT42z8V4e8J3DCCbBhEBySuD3f2Wk8fpc7vFzBwyrecjcUZBqf7p6ARkLw7in5Ht2eKqdSWhg7bNSKLXyC",
  "key5": "5bjbNi9YrJh4pSZANDHUUB1MQeUrNF1ZCpGVEfrxqctdXrmKiGLNERt8zbsZ1voDbXWFGQh42n5diQ9U33VNKyzd",
  "key6": "3Hbq5b3CEKykf3Ejuchr7krx3SmyBiUxnhTjPUpMyYNwf4JrmtperPoiPKQ6QApdvnzViRMZrEq4HN7c7P1YkBAp",
  "key7": "G3a1dxR2GhWt3M5S6Z8SfnpWoLCN3h4ZuthuEACkRiaMuBXqiGZ9t1QNQBUpawvkoGFmJptFRZYZKBPmbfmmBaF",
  "key8": "2vJXNq6MZA4BrtqmsuNLuFZUhhoRTHFCNBiwCK3GkLSjcfPgi9JQu5hg2ejoEijbb37NLaeDRNzJVM44ma7ruzcW",
  "key9": "5qyFzRna5VzpWk6o27fQXBV5s6iKzE7mJNeBp4ahCyvQ61zWMo9A1QEZBaUyLHArwnG8iXzRcuidGwPb5MV2wuSK",
  "key10": "3tLMkoY4NtGq78XAaRrki26viHypqoouGxwARh7P4FiZjHsKikhhenpKWhPfCizkxWhoeJZNg9sJSNsCHq2JWhE4",
  "key11": "3kU5Mjf51FHncKB2bjKTctkgh9AXkXfi6r3t6HoX4NgX9xuhBb4qSf55oeRssCw3FFYcqst2bQjMy2WqdazyKvm9",
  "key12": "QyTiYk7mnpCfF84g4vbqhrTH8iPNFjfbY8S7EuRucmaQ6KhuwSbU8DzWqZpb5pmPQazMaGHj8VmzXDohDoD3Ae9",
  "key13": "61CC6unyhRiwnhbNt8Gv7bkwXX1G8oiKtYsoGHKtt74WFKfdCNCzSi787bBvmqdp2SmXcd722cdoc7m3Xpkacgru",
  "key14": "5X2dso7fjg5eoyhXX4d2NW6wuEetxGkib5rxSKcqHuCnK5sfVGZD5ym7pdnuzT1JZ95uALGKA3vt9UgeZGUPXJvE",
  "key15": "4P9MEdVuizrHhnv2Ecr8k5ZgjW9cbLaW9MLR2dPjHBbWcSXCUD3VrCuqivfLj3nGWHGfskuiN6Q65WGWtnjWT2Cb",
  "key16": "5X6hnci3aY2qiBGgk3LzkGKKX2JqYKqCmXXTqxqLmqwrFFnPSRKo8y86BAnncDrCNqDAirX5fzddwBKxT5u7Yf5Q",
  "key17": "62tkeDyX1YQ2BdqNseGHV5SXd87uk9D9fq52sJzSmLcLro4fvJuVhyWcSU5y2ReRzotQHirS8Bp8Sn169CLw6YA2",
  "key18": "eCyxtYUWXbeph8HmSjK4JycBNcm7gcMCuEEeFLUWsADSAELZJLwxnpqFDsQuubL3uQAd3e1s2r8oRgSL63huH2u",
  "key19": "2eJHJLgsV1BuUBd9m7mmjKfBwdadBJmU6kYQu1FpSVeVGKkzWJwEpk78SXt94MQ9YeoQNZkbftfwpG8xZFfqrfe1",
  "key20": "3X4uzVZ6tdgsHVTDvakUN8A1oPjCn9MhLpQq8zYcjzrWRPUoTCJvtDuufHZT9r3wLy29tEdAacY496sZVGtaLgC8",
  "key21": "2m2tpqKrqHN8arWw8FqCJUGSsntnwASRG5vVoMUFShTEsjSigckv4Y6zAKbZGD1SqoSSyisSPzLTk5MdyYZacthV",
  "key22": "Nz9K2HyL6GVYCwY5W7LxLFYqgD8PrdBdAwNa4H9hVy4MmcVCX395YLTDYXkfcuDzNX38W9azV1CDoS76HfaDXUk",
  "key23": "4V2XFQcGNwNwmU9B9Rsiv8VWJwMKwgyMKp7c4gmyprkTxPWX5H7HGm7vhYfRrqDdR4m6yFbUEKvqKwt9As2cUdsp",
  "key24": "4XTHPhtkPWyrb3K6jhHsJoomG6n5sfupjEnqRMcPCHKskz4QWopth6Z3QbndsfLB8YhN8K5kbpwRfxufctUXz2ua",
  "key25": "4LYS4E54PGTRrCXu1m1BdYDJ5YhUyBc6KoZMcSubGLGDHJSKKd4UUHa2SwksFaKh8UwC7XFbFSxUGHp81EMZE9GQ",
  "key26": "9B7CKbmy2oNeYJNMNXddNNbWxJQTjVyYqjHMmeYxPtB2WPpRMCeDsXsrv2ErNqxoHkYQC5L739p7mW288K6C79N",
  "key27": "63VgymxLkTJB9AuZAui4TzfduUPSpDNGh3mePio6HUVMh99mkzqV8EpYBSeHz4H9HWDyAiTL9DmQWJ7xHXts5UUn",
  "key28": "pGfpXiaFp2W2GUMvWKWQqZsLzuyGJUsKspoSpMkEbdT8AdVGzhKQFK1vr7TcK3gxvd21doyQALozHfhXmXWpDSM",
  "key29": "2fbGkHTVo8kjoUxDAsPQo2hwbFWfVaYMm3YCeXKpTcHcUZhHQYHhriJyo8cbBFcQge1znn25oAvfC8cBEm6QRbkC",
  "key30": "4syUwkp6FCD6FhJuA9eqXVTcf1PgDRAHd8VSyie8Ln1km2QWzMAt8qXowZEmwpxjwzKpvwRhgsPojRnxgmfL5cHi",
  "key31": "3XaNYWuUpRfvwNQGZZhTiJwECCx5Pmssq4xbEkN18pvrr2rmpcEeUsGx18QkyB6WrnqbT1cusqfSmE6Dszbp3ghZ",
  "key32": "5tzhRGM4z6ZB7jFDWD7qW83mQLSVQJi2eRAmxUM9kTtmRLyqrf2mwPGEn2irGYqbc2ByXwrem4jBmrEMAFaXHAsT",
  "key33": "2pkTJckkb2Gks1d8uqHdHJ4FFKLv81N9tNHa3zuxEL9kAHrihcxdNGDo1SfQXTTbyuYukcAVNj53PyzTATMsG1Gy",
  "key34": "21ZqSK5fZNoG6M7TA8kKcYynUcV2fW1b9WTwJWADFVLGMxBMxz6QPP2hLkW71wY1dBJQv2PbRPUJEb6R3gz6Z97y",
  "key35": "5R15wdoQdm5FJi1ozLdKxLaiWbc6W3MAR3BHgfhyMBJH1Jt6G7zB4WoyRPmoMLZgJThaU7vKutVpBw9xtCHytwR2",
  "key36": "5qBpYAE8CmwhTFSpvj7LPw7fi7tvCq3RaagR7DeCx9gTh56mzNQvFXfTqLysjJdsiiYUiYxETLGBUrcNjbUduRQP",
  "key37": "3xUttzHdVPJViCAm1UT4s96x4bnV9fTUSMkKH5dBrZTiKeuYoLf3XgUwFN1QEMypmVSre5VR633Febx7BfJZjREE",
  "key38": "5i3PUgT6naLij83Xx41qLZbPiXYtyeVotsZh2ieTBxkgyLyCz6p5o7ALkUkM4fqydBMSsBEbMkQxY4zSQezo7SuR",
  "key39": "ocdnhZunChVr2bL1RfMjBDB1dgeKnr5XM7UREzhipZsNGthbAYqKDzbjHunDxt8fGh8Z7k1iKtMb4iUjKK5s5bw"
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
