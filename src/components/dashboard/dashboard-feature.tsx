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
    "5fcFFPodqAxug2Cd6dHACDoPPib1jo1WnKQBH2mQN7aqceMPzdafc17W7hWM7HgH4qZ82ihHPAtRUXD6YZcy7iBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1SboXNe2Ftd4WSFd8j9WcjNZciiJCn2LDFsg7rjdgqEH6MVr26uo2EqKhwBwVThvPfwpSXREppsxTjNqU6qXwG",
  "key1": "5aVDNoU5qVfaGLHbuhKQb74jaeLK8VNUgrniNVEXYEnAHwVqZm24enAzyM8NkaRAyyVoY34CfCJSumdqGLBPTekQ",
  "key2": "2Mb4bBFJNgxPaGMSukhaiYGA599CdGbiVbqf5ZruzkQkitsQw9CzrXgdGe3WwCxJ99qHSLaE3dcDosYvEf4beNDB",
  "key3": "FTuB5Ny8ZST2U68XG5SNu9QcNyyHqNA5GayMdgsv9xziwYh2L98GM3PGeQeerk7ua8e2QqUZ7oKLYVQoydF28zF",
  "key4": "hyXA5S2t88tsBrykdRjd381iF2apJgVKnJ1woTYNqRYsjGvJUQ3EaY5NXaSPQ6scgXq4zFjkz9aT1DBN3LXW5KG",
  "key5": "3m9UjE77L2eSkF7Day82dtqWu2ykBpWoo7Vm6ncYxFj3ZeLBuqt7amH5cPTuLgRQmxsbJjsqg1YU2tDHzZ7YohKx",
  "key6": "5PbpJfFEn9XhBiRmaEutwHwCMLTPNsjw9Qc75ZK8eJEH9a4waLW9r8tAKv8v8nS1k1FtVqBV5jWAsU3zqpfUp4Pd",
  "key7": "4haR5jukqRHjKN23eXKW8dHJ5GoYajn3L14gVUK8uqKz9YQYA1saZCbqkmx2rEfEQmFJcV3hpMxLNwQEoBeeQNo",
  "key8": "4uouxbEugbK71857txZT2QBt1kNZNTipN2Cte1zzDbDw4yRNvyoLLum7d1J8rEvmFZ7dLRMd4Ezb4uVPz4vgJtaf",
  "key9": "3R4A5LXtc4Yr9YnvGEERjacToK4mnKXWvL6iuRgSKzvdKN1ggn4kc3wbrWABHoYkfqq6hYd3DbPiMAHK4qwwyFAS",
  "key10": "2zU1MvMBqTH7Mhi3uLteRc3TsGBMav16Mr9VY4KHU85Mn7F8hqFa5nSA5P3XkPKFZLyr4v7ayN5u3aBUYem8ozgs",
  "key11": "oKxeicwZ8GLXNp8JQfzLePSPkF5WSDkoGM8tuavYSEzpueJhZc6ZtRXmysjdLqAgrwpN5qhmp7JyA58R1eoHfTX",
  "key12": "2chGeNj8JmFnj24PqgwfueF9EeF6s6StBYkti7xR8Dk5g7ZYg4Qo5p62A51pTb7UgJ7HSBmf1yLkHd4rtRDm5MBY",
  "key13": "5nRx9G5KnvatAnj7uMpzCe23Hw1uKeEaWruzQDBDoMdb7dbK374KL7dqmo52dFTVFtzY7q539AoHJaYAaapTAH35",
  "key14": "VDf71PEj7TV2vBv17Fuffrg3cBouqoDGLhVK558gRF3RH8asSV59xRV6s5bCZz8EvkowQmTPmHehpMvKW5vaHYH",
  "key15": "H5LmsBvkc158fJc9nzXdz2bc6MYLr13nHBRk9Rvr1CpWjAtSjiXLHRtFqHFtCq1hZC6AuZBF1X2pQ1tvicBwrFz",
  "key16": "36UwJD4Tf9YWv92F8xL1XaFeNmNGpmWFKGzEUKJoyUD1qx7n6bNzjJ6RV3qPgiwa8E8F1JwP1jtxYUcSWaWE72p7",
  "key17": "j5KCtTbn8uJg6iG5yRmy8Pbjmmbwc3wW4BFEcGvi2wmH5VgCdauHhbNgrevKtXfY94LwW3jGuGLZiarRMxBhSzu",
  "key18": "AGB1GabEvvZj8g6iQsZyeFDub3bnMxfitMNQgAHNuB8cxF2sLBy6skpMd6pW1ptVNAAjziTyoRXBbpp6V96RcdC",
  "key19": "2KUia4hVGWvDgPQHPt4PzviDqG5NWmhzPwpQDoJi2Q2cSPboi8tEppiYemaGMKoRV3ySzt6bPe3uksNF7dods4RL",
  "key20": "2S5Ns2NwY7pbTfY3KZPvZ3LgUFKqKKmy3VPPWWyz6EZHwuYkozp2n4YJ4qRTkvx97ejrCE5B7tMrkviEKRXCrTdp",
  "key21": "2V5zz3qPVbP6myJLNRw1crWsjJT57Kggi4Xxm7WPgJmdGyV6jxVZpukb2Btjp5V942GT2BXk3H4HtwargmfLgEKt",
  "key22": "dkonRtA57R5YuTyH9TkyqgVcUnyi8BtnTteuCv9yDAQnUjeqsGsTeBihbqtHwrUfan1fYehr8PBBAKygpcKVYR4",
  "key23": "2ibVrRPj7L41yxM3H3975ZkgfAsqiUXDprfZq8TMGnunPC62VvMLqfsoa5j4mv2NkgbQRuYd1BGzjdedgPSt5zu7",
  "key24": "32eecJPvDx2JNiNsT3fPWseFYR6a37FVCME1UB25ZqHbHcQZssrGRh8eYyQk2w1cuRTr4w693kJpGebCeduGV7L1",
  "key25": "5n2CYiMihDCXSjd8kifGpPpY5wWQELPqgYCJJcyCytqoEGv5wXSf2R9FSCQwKXMJRUMQUNinKhjEqLQ1i1D4kh2j",
  "key26": "4qZP94dkHVhiPQciLUsTTTTe9iAuRnJtCbioAhEBQzaB1QYHLoS3SPo4Rvva7xcoQbN9S5VgCvkmgpziacjmCcE7",
  "key27": "5KgYK13eAfLLz7ATVGKgn9SqW6XAN4VgUhCqGbQSwU1BBKBKm3aWqxqyayTcdcQ9Nk4u8ZJK8LtwWbxP4TGnVhyr",
  "key28": "4QZZ9m5R8p6qMDDNi9JJNEfRdadJmpKn3q2ti6Eg3XLMjxtExfQJiWWrBPGTFFfzbrXP91roR3yFoTQWS6KAoo8L",
  "key29": "2GXTC3wgnP66RQqhfZRiCbKjeQ3ji1DdUsC7fJth1Ef8ZwETCUnnVhwDbBpLz5419N52tBW6vAsomyUA2teKyqpV",
  "key30": "5SmUWdeKo58fTJv2dptZVqN3BgYx2SLtje5eqJc6n9udZPKg2oEJJRKy3jhqJyzduzwXYUXgQi2kz34g1Pexw9mu",
  "key31": "4nyUZMyWMZW73mbPL1T3eNcgTteDqa7LcsfdiWhKPxaVyDgrir9ppda2qHwPgwaB55ADFhj86er3WDY2FbR6QzsL",
  "key32": "3jg3UDe7XJSsSroUcn8emeAST4ULPwUCVXrund3MufvjvJ67Su4owvhJsZp9hK4Qt6mu8GRbxqq2sguKq5pp7Jix",
  "key33": "3RL6oGHcM5kXooHd8S6YcyRnw5j2EtqHhmHeVYbQxYbtHfNM2TyoNaygB8GdhxWzW4PXvTi7kD248c2YKqFUGfoB",
  "key34": "5igH1nP5cy16mDDdWFBzKYa1guUKfhxsmwaboQaiRUwJjmUVpGuPGKZaXTWhqZEWWpUudNoVxFvVgdunZwQVjxWn",
  "key35": "2bB7AiVmriWFMw31iPQKFDU4aprTpFKpHqXkFQ4p9qTtRAAoKEJTxcVgy3pdTceYz6XPCkzjdeXZMfrMJdHiiLUL",
  "key36": "65QHHZU9iqSD5RmajeFm8N6vbHHLFPpm45qaHjQJ2vYwzh1RdVBKX5xBfieY3sc3ZQ51emsVz9bno1z4fzK8hLM1",
  "key37": "4s8Fghw5HLpU7efAPF4E7bQwxmmPJGMY28aCM7VwXCBBQM4kxkRbbvxjfPxLZwK3Bd9EjpNSAx6FSJMCjeNQa48w",
  "key38": "ExP4Ke3Djv4RpUQkwaaDUDjtreijpG186rnGWnr26P7NQa3irsGNsX4dcFv2sPccofHB73Eqmo6eMVsamajDteD",
  "key39": "eFhaR7qqjQKGtpBhLQKu1oM89Ayh9vF8nXJ2RQuuQQvLpQ5Ffbqccjiwv1NDWjfeU1Ei4xS63RZuu1RT6gD13WG",
  "key40": "BmNM57YR85rsdr8z6FSANvGATHeGergKB1WouJEzJHseDbA47Jka1oiukAtUmTJk1VXTSFA27fvJCUoj8S6onqV",
  "key41": "3AmFforkMEkKZvxDrs3kj61kRXCJJ7ZYni89WamfeAdUpvx9qm9qSj5ZLYq1jZ3z4FpaThWpYcEjHyXLEvfE28NF"
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
