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
    "32mYJoyCVmsvwR1eRamm8aTdvGiei8AhwLXmpgA4U7ywBQ41EdFb3qMTJnyqA3QRtmB9cVbAhH71qUofn5Dk8LKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bnkjdoSGCqDZbGHYVVitYPhara1H2F68LHvCocTAmP6FHksf8s6NH57MEYowV8ybfajrbaVUtDrZ2neWJQoPFpm",
  "key1": "2sigrh2rKRKwqctoWSUxGZUh2DYxAaxk7t4VyAhvfBU9or7zjUxN9CzyiemQGzNba1UbUktUicTXeksEAsGG6Mk2",
  "key2": "EhM7qFp3qSapMokZAyum9mB6BZKpqpFGQafaCwdt4XTzeqP7ecp45MTJeKLySCacYtH7s6EiuDfuDeC9kgUoZw9",
  "key3": "2BBUXeGpWAudF2VyfJPLvBHy3KfZTyLJNRehCbn32jmwxQnLpMYUx2WsnxsYZ3Yp6U7FRDERoD8La5xZE3CAyjgy",
  "key4": "2fszN14uvXYqC2KcjgdGQ53m1w2tiWGVixrSBi9iyMjWm19Bm2pbrmn9dqNNEiXHb1M7LJ7hMd6NKV644TJRuXNJ",
  "key5": "3XQy7BQuaJJN1gNrQhJQ7sRBRVYXj9btAft8F599f3LhG89Bti3XepGdQ2c8A2ALJNwSr4MkQzSCewMJ5tkjMEKd",
  "key6": "D27wwP2T86WdM3naoj6UjuUi7DiiRKMoTXBJCQ43V1GHiYKhZNzvSoKFVeLng6PexNKQPEbWhMgHPYyopoEKEzV",
  "key7": "43VQjHt3TgPGfuqCnACDA2rxqxfQ79fKrReTq3QtgELL8Zt7gY1m77ouNmQAW7vwRokUrMs5zr441cdvLyAxA93P",
  "key8": "2HQsPKaUwya7DS1zANbBoHU1WuL2jsujVoDyTwvaidmMhFx3C7YEJjhRwzLgAQgn4bxoRMNQPrSbswsxHfbz4TF6",
  "key9": "5N8BmMJ54T5Zscp68a2u8ukg1Fkp5Gt8k5L941b7vp236upBAeZqJeYfSp9FjWQGkGUSb8chsmLGbVftbhf954UK",
  "key10": "5cXNUf4mg2aKyPgJrRop95SASZ4L3VEen3VVdKFy3N2iaTb2S9BuAAMbBt8HZbNqLS85kypgDc9JXHjJpD69ufwx",
  "key11": "o37TAKJ96ScKrwKyQnR9g9Ff5touimY1HEfr2Knmv67M2BKJnMu3wLBKQVtcy9ZpeTgTtJPybnvt6aSLrx6EKJD",
  "key12": "24o2vEDKu3rfaW1XdcVhdf794UUMJYw28njMisaEQXJ2TdjSAxQ6s4FTcNLTpwPVAhPMASe2u366prWVaTPKGLWD",
  "key13": "5enHs8bbnEqQCbdxaot2Gva61SyGJFmLxoZkUt8zt8r5uf9qkUPW4qWaRGRB5R2MQnmrsRLpZTU2GxEpXbG9entA",
  "key14": "5BUNdLEFHge53XwzUf4VTqPFPoo1CfLqPPkWUvkTcu7Y4eXWfc9jtxSDPMhWoMgq88rYLRbY7uq4UvYVvrmQKcHj",
  "key15": "4HQggRMvACc7yncZ4paBNf2bTNgP1kBKgfAyjp7NZ5pACWbrCekGhCTg2aA8Kc8PAFrYbrGF81MZwoCgWMPUn1pY",
  "key16": "5b3QBBMbSNrhAPU5Tkgm8K9EBjBMB4omYG7M3UNERGZbzWMMXyz4vLFATunyJd26XzqDqQD6yzUcvvAuSrR9Lirz",
  "key17": "5SMeTsT4TTLijCBuQqjnqa6tzssSF72VTQdYN4F8XDjwVBiP5x9cPcB1an4ygKkUYeaeRB4bGL3rrnRAVixnY4aT",
  "key18": "5rHXgYKPZxYkxBcYtAk2H5PcK5Cib1JK8kk12nTHxqmDFRtrSoMyaSFUWuzodCrgNow2AQzqujJniCs82TfQC1VZ",
  "key19": "3zawYCu2SVXQZTGyeAa5vBzvSt479nWyVsLiuCctSoUnk9HRdFFHqNUEU2T7CQV7snosUxvmdceaczMESmw6XjDZ",
  "key20": "2Fj7aWShsmLt89zhL31qtD2EroqNFR4KcVc1tFECfQsGygz75MZbbESDwST6Vbx2f2zwMfuiBDuZ67ckoEfgMUh",
  "key21": "5r1nYcoV6EX4Ddf3B3iBCpMBcC7QGgVdUWfUxyDmRJY2R4Q2btTyacUJ43haG3qT7RntPE34gtie2XroPW2524C2",
  "key22": "5WbLRbjyHJojKYvzZFs9v5e1Kz4PRhkwuGNdrYLUDC7mdGrgoMrA9rvExt29c983kTsw3xFuYqr2DndeA2SXbm1G",
  "key23": "KmYBHga5o8EHujALv6i1iNx8FHPU9QqPvwQD9imAJ8YWXdSkBCKL3UMBAEQvTrWX7ZC4YjAEjoiExos4yZHcN8X",
  "key24": "qMvkZNAp59svrqyuXc1ZY1YxtZs1TKZsKj5tWREvoY63FD4yP9izawrENi1zhyNjW3Pr6kN6AS1BnXL4XdvKx9r",
  "key25": "mvNAQdHC5b4s8PXyeZPLgFFUDfF4YERBieqF5akomgA39AuwQNL7gjqtf6XU2Pmrrh2rVRBNtw2fyjNRAsKVsgp",
  "key26": "2VFYysHbEeS9NeYwh3MX2qLWf7GYZddX3fAhLyk5MDVHtuWfGckbNTNxUoNxsUuwu2Eq9DuYo88wUtiJcPHs7CMn",
  "key27": "jrMwKbpmr4Hwc2WQH9RyUXU242o29hnLPPjdFJdV1oWh5VJFUs1VyG7mbuafRNCRdqcCFfcRpBi3i2Kk9ftCLMh",
  "key28": "3RrHBgpJBGwvGqs31KagS25LNuxNUYtFNYFXCB4XK5JCBDGUrBdvZXdC5GQAtLasEVqrhTPoDjG5zhu4jiAVJYEN",
  "key29": "3FjJefRPM746TakEpnKBKcCee8V634pVDJF9a3tMcYxcqAXsF3cVXdKY2mRsYhH3UtGzJyKgmSLbGJf3trUKdYxm",
  "key30": "5kXvgg4uNfHvhRvzThxWFgr23ydXaALGw5vKokFWQ3HoqW2hhe9og48JNbw1Bshojp13VSPAXkAxdYEVQoaUsGeH",
  "key31": "4g6wsk2nGGxWWysoDhCHA8Rk4qkbm3qPQ37cTyy2zRvkiuoagDDbfgCD8fFmRAbrDoTPCLauu6tdSeptWyUQep6C",
  "key32": "6rvEqTNMc6PRqRoqLyiMHufTyP3khMyCaUFXHeGLDp4p3GBChCM7a25xKW7EFz4FHN6U1mukZDWTyj9w7UQto3o",
  "key33": "239448UKAfhr3zcJRvB6P3SfC9ugxwa3GMpxHzESxKMuKwm3idtc9x5dSzNryRnqEL8e48KPNNck1yhNVFBPzUiz",
  "key34": "4D1xDsLgvuzep4XnZQC823BDoKfTi9LPJhFFoNxW3tFq3UcherMpMTMY4bt8cQCn4Hoc2uWqBehPV2EGF9fJFfac",
  "key35": "499265TrpEQphNxXovYATrSrm81q9fRksS4gV3JBTouMDE3nZ29Z6obA4Gg4kLyZwKHmKacfXyNx1xcVvHfGrG59",
  "key36": "27pU7NxHgrEANUpH4RsCFGxKg1A5F3b1FhsTDgwVbLsMQzveZbwzEBxXEtE8FsbUQr6tUbKSMqyugUprwSztdVq8",
  "key37": "NbdLexeqZ7W7mZAQBrJqv51K8bd5MSkmLdfG7vicve2JAA6PxWV69f9ky6VKbscTVk9ekYVccRsEUzNjVCUaEuK",
  "key38": "4iDUgCTsSm2jwDtSqBxSkyntYgorVhgtWYmppRqP7ZjGoXan72wmdWtcovM71c2g4xziimH7Jd8ArXdjyGsUenfV",
  "key39": "3HHPzP1y9PKtJu5keyVZdXJ365j1gBDUTuJBe74ZfXktuQftWnSSMFmULcfWijFA62UkAoRujMbovLf7H6aWjyog",
  "key40": "G4PZhY3WuiqQ6Z8JHfvJStwwxdiPNNu7NVrw6dBVS5DuZ2Bjoehsha1nu7yfhwGG4QGm17BWabWeeFQA73MxoZa",
  "key41": "3H1VyBP1ZhwJobf8VymTztbqapofSn6rvDCS4TW1K6hBXUaVw43f33cj1zNPHzEKmmSXm4AKRy4nsY5XHuUEm5N6",
  "key42": "4aDbHJBNgDpruiH4B1AVKq2AJk3WM8hasiFRiMM9kgskFueHvfRqt1b46jegUf22ooDMpY3E8gGz4WLZ2ExECn1H",
  "key43": "2ibYm7WugNLvCywZp97fKtXYzgu19MNdntKwtaQTGDjLRQD64UUUiqYvbxLF7WNbmHLRyvaemm9RWHu82gGGS9Gr",
  "key44": "5nk9xaGjtE6TFugnUetic7vjRR36Yd61auXcR6GbBZc38S9XFCgaNyHD999AS4ykESpujmnXpZ8tibwPA78gEF33",
  "key45": "3gYEKQcqxBQFmCi9W8WaNJ224cLtkxVoQBuzWzVEcoRGQ2nZqyWmEiXTs3XBSLPFzizV9LtG2gXtMbV4tmk4547N",
  "key46": "5bWPHn5J6LiEg2tArRS9uvNsw7MFhPBTfZZpRfUVJihrR6yqwiVLdrvjVdxgfGzSuJ8V1ojF3MBDpPcwi67b4Qbk",
  "key47": "jTVM5g9irkUdgPpVgvmGPhUZdWm2e4FfPicNLvb2vz2wKe9sujQ4AtHu8VxA7vGqW2mPfZi4wzmRheA9WxZyuqE"
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
