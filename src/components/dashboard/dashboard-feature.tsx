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
    "3idhRNLnk82jqTpHYTMAKHjtdGbphrM3QiwinRE2rxm5UH4gwjvUBQuDFeumVCd7YVkvPr5Cqh54heE6zx8UivF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ad7PV2DXkWJ1cYRYo2dRmg4udtbqftPnf26pxWmyzKNmUgMn1beLZJv9KgRbNRpSEuGzvoaye9ngdcugkmMNee4",
  "key1": "4FGDBW9uknmGCDezioFWaMVnj9TSdpmDjCWunmJjZiEQh2thRjp4nmTLMG4WXXrk41oBPShJEKrqUUBDrJvBxE8q",
  "key2": "59kYxp8ZAB2ZC78Zchqj9P1jzfYiYpPbp6vDadAzWp1aM4P5gguekXMyg87Sg5vnxdLeG7LQEhK4AnXbmEHf9Mg6",
  "key3": "53VzpTeMTkXEA3bkhfcxu9WJJZfXCyDkNAU2A3PpwUPxukuzWmayRJUp46xJxnoC4QCKHp2cbz9R3KpciM6Q6RVe",
  "key4": "4L3BFVJBUHf1QpTLaYREHi9EDZafLYp7kNdLxXNmNyGSto22m6Nfy3yRtrCmYU4Fv6EXYDGPUvQthQAhqYnWCGjo",
  "key5": "4BEHgQnYEMmo9jSiQRLdzAQkrHCyi4BKEGk2cEfPEwZv7tTwUZMihTxZaeC2o1jtDpEHKF2fR1rx1DJ5sZyrQYAu",
  "key6": "3uzvD72yjczV3LpzMbGxB73dnB3ZqA8rPk1Tck4vYo3iG7Pp9acHCVe6QjcRYW1kdUKD2tzR5XfcEfAkoBF3TCqs",
  "key7": "4nS9y9wdzJQyF4AvbqRARrvMKpR78Rx4nuUxezbFxbkBSw6tFLgGoCKGFSfHJSR4vjkq6Wk6nRvq2H7VPiFMVNme",
  "key8": "mSbDPm5xUh81puBH7phVkCwAGAywKopPswp9AMeAHXcwkNGDDayQPjVH4PYDipczRXpPcyfxPiEqjyuWXjh3CFL",
  "key9": "3gahAL5icpKHfiZWkUUV3cp2eVREtjhGqqaghFh23ovqbbQ2pLjhSvYxayj7cc9spVfQMc7xZvCwvtDn7EDz4v4B",
  "key10": "5ngQ9hsbBgAQxyK8BWtrcP7kGF5cvTMkMPiKz41sEQsrcNtwqmqpRMQLj7NEib7nMiiGEfU8gzwhLk81ZmdRqRNV",
  "key11": "4QPXB8Rez6uXRrZ7LfPq6tfGqQUFrCuzeFMYfU71JSmkgy328Sq6wc2zBtNQSWZ6N7c4wRuLkJkvzqhDP7PCLJCx",
  "key12": "5HRXPmH9QLGqhJwVi82EWXApSs55g521VJFc7sBuygEgtM8keCCeQ36gr8chCTU7L1XML9pvFnWFfSaD7gLCQRSq",
  "key13": "2VxitiuHhfCMADaQxF3W6fa8YLEzo9DY6eGxLia96Fd2vvF8dD4W6gYnNgk1SewkTAjsioA8JyHWHeEu6dwRJ3PP",
  "key14": "67eKd5Vry6ynE1h3RQy1hHP83beXgBq7Qbt2b3ZknPWZ69X3FDYaQTrKZA1rZ8yyu5497pxEzxBWVPCYKULoZ5wj",
  "key15": "gaqVyJ6a8EBEEShJ24Pgy2RU3moqmwPZC1mttbFjJofCreBzi5ByYr56paoWvc8Rs1sx1wUTGkZn3ZFoo7TbcSJ",
  "key16": "22S4eDwUr6RM9AzsrBqYqVsRq5Cgad7QjvxcrDyVnQ8MhGCDjCTAgYuwTpueXyREeNR8aLEENdbNCgLbz2NusHT8",
  "key17": "4KSzutbPhqjeCRbKzExyeD87XzUoJcHAkE7y6i3qahZSLQzCgEtytfJnKJWRiT3eF4Vsi7B6Gq1RroyKU3dGykuL",
  "key18": "3D4xcDAAHYub4GZNEAAcmYddDYsEjcUXrbsaasBcdVz5DJ2qUR7qVTtQWsBtcWYwbhFSvQUxUejanMcgu1KneqXh",
  "key19": "2YeAtN2vfDVEkAsX39WJoGw2NsRqHvRC24WYrXp7Kt3xWhNh3B7NqXXbztt3yuHfiL5bqLsur7xKudYovdVVDCaS",
  "key20": "5cBTbSLarQhqZg85CZfSuD26yYTXjYHGe2rQ9fA17pDoJjZGTA4BV7GVHFc9jXcNPFoyPyBgb5bwndifGruKD1cA",
  "key21": "3UTzRo7RiYsrbY3EKpECnWn3uP8XWDbo1dsvJBcHYvGDR3VzLGtsh4eGKoS2S2v3nXMEFN6oPHA4u8TSmJKnLzTm",
  "key22": "3YMacmQCtU8r6pE6WAxpBb7JzLyiNHeUcfGEF56s9c3YC9jMnAxURvXJj9tmYx2KygdtXQikCTfZxv1DnwsdBRQb",
  "key23": "4MKezLAcZRVPAnr8Bn9fGtdAvmC3TWiCisavoXpmfWpLWqHBGYEYHBh8dcqVsxY6CABj3MeX8JjDrcZKLWH8AFCS",
  "key24": "zcaZr3ToE6dqyZx4Ay6PHLWKoNtnWnmCagH99arfggTewy6F6zjRkeDLiwFVyBPrLmrUedgRSUNbYre3vaLTeyf",
  "key25": "3a4hkTZrGB7VCSZXs2TNzwbJoAnd9aYRFWN7K5oTNQXGSJRanXrAija6oYeRVWq5ufXKisH2mVN1osko3kug9iua",
  "key26": "4JDBWPet5s5DGzxvmuRkTRqYSwQjoAzLr4EDZam4P8mc766SWiAhPk9fhRqL7SMAQ8WDZmQGga1iNhhZ8GEeVmnY",
  "key27": "57siEtzmXbmVNU2r1YBq2sBnNGsfBWBa1YeMssfu222HMBwH4XQn4RizviMMaGsFsk4BPEnUFjocXiiMBgyXB3CB",
  "key28": "5CfNeQzDPBEhm8kyfaZYXyRmJewvkZh9PCpiZ3FC2TLjFr5V637khsHc5hGu8n9LW1xZKPdkbNUuvkomAPxvcuDM",
  "key29": "5nuHqaZQykeZaPf6FEpQv7GsoxQxF8LYicGTDBcJEdSowGHPjyzKiEmK8bP92TVCmEBaVfTw5ViRmEAnipxDWV7E",
  "key30": "43YcffiDfkx7eWEWacptJ5Y3Qbogv9tXpaVR8XvCFr89s2Q1KPK87iuJgHYg5WM6Qte1JdqcrLgY4GTLG3U8zzfn",
  "key31": "2h1Zsxa6zVPXTUDNSaEd2XEaiM8FsTaf8zrMpDNqfeeDTYGm5eQ4ThEtoYyKoxsx43aS4PfhBv7Uz4wX5NGEDfxY",
  "key32": "5ryY51Z3WvajPvqWr56xJByPey6KbNxKDhD8ASg1hKznAP4B1f7LCXnDuF7F7iwfMeQP6fgbuiMAayLGuYFFfJFm",
  "key33": "26swDJcaVUZK81qkpAUbpZr3nnEc47K38x6waEHkzpc9hdTo4XZg2tAUm9AQD9qfRBsZig6n6nA9TncZ6BqLjBKP",
  "key34": "21SoGM1KNAa3FXuu8kvKykRJDFFKk5kUw4cmFDAwKMor1BF8qehKioJzkBzHk3eN4sScAyAei7xdTsWi7WmpLPsX",
  "key35": "znqARK7ceTAgYQoH6z8X4awntmuTwu6fi9X8E47sA5zer8RV4WhxxuhLPGJ7dg5Gg4MtFu6HLr1FHFVCt2k87aQ",
  "key36": "52ABuuhm6D5rPrqDhCDRQssP6sznUeVFEd66pySHhJfSnQT83HDrL8sQXRrbTdNw4EkE6xR89y9xuQG4C2DfVFqz",
  "key37": "5VK7MuogLGsDNhEFzhm5q5RbuNxizznbd7QkNqwVogTCzejs1ZpLviut6bvoLmbXcWuRtXZp4wG9CN6mqNf2RXz9"
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
