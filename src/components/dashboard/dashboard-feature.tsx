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
    "aqBPDas6BVapk4Q6Y1TumTATgzUbegNKMi1smmPcKXwRYy9WRVeVhFiqVLFog37wWFwicLY1q9C58GL2P1ptpYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "97T6tSeZVa7ZM4aZnHe2F7nJchkJxhCP4gZausgtWAVDvzqCijEdUep6UApK2djzndd9wNTMBBFMnu83KDMAWJk",
  "key1": "mkEPe3yTEr1CWmAjZDQ2cU5dAZ7nxuqfBE9p6StL17wnbPzDoFRmJ8siqe7SGvh3zWrBYMS8Gk46NAyW91t9DFp",
  "key2": "ihWxprazzZJ5Y2SFmdHtcU4jLc46ARvoJ1Mwnj2A9Wz3PdVyhggSeggPPyo77D7vSA8sAoXTuND1qVCWCaUutTP",
  "key3": "2z1KZm2JwosJY1TGqMDhK9KbJUBtqcsfhefDqEeCj1LnahJvkkBKQVksbvt34oSaAM5J6hKvZF9zMHDYFzX7RBwP",
  "key4": "3xB2FvwumNkV1R4Cd1iiSSGT1DdxyxSfkwXjuSpJRGvod7BjqgbL8mk26TtxJ3S1Fk5pEmMNWNi2R1RBpMuNxhq9",
  "key5": "4WtbPM6f2y5bZoqanaPsmamVyRXfV4V2MH1AToTDsoLTEow3CMs23KbodKV4vgA63N86rZhAypBz32sjyt1DouJK",
  "key6": "2USURoccoUBdnprMxtWbb5z3tBuU9oN1L5vEw6grnVZ5nCPKTXNud5mtH4WRUr6GDh4CS5HSnFNXPpGqLzRwb48N",
  "key7": "4cA8pMNsQ1CWJsKDgvuzBT5jNzZ2Mc8Q249NR3BAfFyWnftNWVVJXyNN1ZSrMSiyGaPbTP6E4DmRrbbsj43wpg7F",
  "key8": "3HezCsN1P9F2FkU78w86jL1VkH74w5gEPDVznsDtP2Dc1YgzfiNB4ZeJoSyatBgWFerTbv9AED84EDV3EcytyA61",
  "key9": "XfMfE21GjdpHPrTSDe5T5y2EM79SxYyJv9J5JRfcshvb3F3tagRSwzyUoAUtcQG1rxrimS2p2wHZyLmGkwjmsjn",
  "key10": "4S5f7ytHaVrRx9utnYBcZntjVtALt8Y1Fdycz4e5323quWTajf66foAYZEAn2pLczGftzD2Pa6RDRmuFKL8gsanr",
  "key11": "2ecmc43Y3vQt32trvxS4z2rMazuve4KbAcdY4jn8GyJeK83XSJ9C5EsiMqCAKFtmtEec1nRUo84GuXnxGWqZh5Sc",
  "key12": "5uzdJb1eEkxr4SShQ4ew1zwE91A2FkAy5VafwSvCrAdsQH6CtNwEJxKTYBYrS4ptiGoLm6tX4P6Vhh3eBDoNYvM7",
  "key13": "5d1Ux5DPF6AXrHPTJpttvHYiE51TL6vhoePAFWmMeqDXByuTcPTXyMvH2oUVqz8KUdQ7FFrcKUEdxfRgsnP7dbeH",
  "key14": "4x2wteomq8agwkh9H2YfrxpxmaApyKKQEttwyiXNL8rW4CUvDnCPD6kZCdRBp2hVujQ94nioPgJb4Q7y8SMn6oZD",
  "key15": "2mRN8ZUhhiUtJyhKS9y3NEuVEnwUEQC8AEAzRzeahy6ANQW6wgbLVhAP5mRjUep6t3EEPDqoqvLBHewM88DhVMGK",
  "key16": "Hurk7dL4puC6B637bMBguF9RSZvPZF8idDV1C6F4Di2Urc4auuA59PE7HpRQ59fkgJyz6eS1EpvSfn7tDE5iyhy",
  "key17": "4yZd6rVKcp1etyCyMGP3NxP5ee48di6wAag47N4gEzx8R9a2Fo2MZ7nJDiBSzk9cigGJA3skT1J2hYbzZBSM9YfP",
  "key18": "5d97aKGjhhFjtng9kn6En4ci3AagajdMRgMmrRsikqPwpwcqX9rvvT9h1PCjdBwY24x85jzPGr2bVsYgBFjdPaxv",
  "key19": "3MY2jtTg1e5cwVwTxvWjL3dbFGyxbyNeu4CzvCVsGcaXaTcynez449hXywew6df7tKr3KTe8wCyVMUqD6CHWNMt1",
  "key20": "33FLnZWH8vVMSxYheXSC5gd7Daa5NjeQdLUTK9RGKYNSa5SrRRswJK4kKGp1U6nUB2TJyFRoSQYALttB4t5ZtUa3",
  "key21": "dSw3BXPy1Vpcxda54Howkk3fdVDZkoXkBdJJBkUtxeWLE6LfR7bgkNJaywGbHZWXUzhZKSuugvSzAPpVDNt1ABL",
  "key22": "2SeTXHB72ta5hxe5Gp83QBpcisyv2BHXD353mF3bciEEzjd35Zbe6W2yYhH5atmouboNefTfZPmr43sMo2iqSwQ2",
  "key23": "2f8QqFV43jpNu4bN4KY73VziZDAPK5dQNwb1YR5aDkym17PKbAoGPWwBFHbQnhiHbdaiKJ2BozA769c7WpXJMT6o",
  "key24": "y4dumVZMKp2kYTyG4GZK19P5Bm7DzSpueU3eHEp8dKFbZ1MBpPCSFGK9heDGH3tBF21fT5Tpfzu4y7RPArSfME4",
  "key25": "2KRqhTTtxu656LMWedv4zUtwuc3g3whKL5xBpjMuyEaXtsKJZeZDnbrgL96eypJ6nJE8Vz4rezYt4dcaqz4dEJTJ",
  "key26": "2a7zur4xFVuLmsEBiNUNxjBZvcBPZs4waScN4K6nH2pJm6TkCHi5EP3N1RBcVoNvB1oJNYaNyEijkaNTwEQzyBUX",
  "key27": "5KsszXH4oqhF4H2PSYMns32cKHb1kaeNHtr8yoj7kCmN65zPu6QMN5pqXgd6fG9XjT53raTcY1Yi8iwyH1LkXRRq",
  "key28": "37bobWg46VnFno3H8Gbqi68UGfpizDR2zusHmsRQNtdMZnythEKcSCDpcet16Y2GPgppB7nXhcx9Z4ndNZdFPNxJ",
  "key29": "YrxYb78UjXB5R2B7uSs4GyAhdNHKMQH1FiJztrCS5nKRecY57DxjjtwXAKwnBkYF1bN9HZkAWv5dtvYwFwUVhXE",
  "key30": "5UBttaMCo925V5AseRpwXXsLPUZr712dRTVdptU4CjCdMKHYvmdgMtXN9X7AffRuBnHEtGZiTv98UoiaDJMVsdhF",
  "key31": "4PTaEE5oFR1nUoXGgrxCqunBJnUKP8477TBAG6ta987L7HhkRvVVNnEfquXNj12cGsdR12iXnyZyrzPjdSTSvC6w",
  "key32": "2HzxUJJeHkexpp99gAbtupNVdSiimD9g1MVXa1p3EjZzMm1XcmscGGQjURxg8jVmkJdRjC2UHYdnrkxJ2v54fKuY",
  "key33": "47thtZj1XYFgBJqDpu6MqxHYEZ3yCeBbMVvnfvHfKp8Ydrm53YFU9XgYMUp5MxTRcR58kit2HHWVcnEyX7T3VAUA",
  "key34": "3UPzCqDCkPeBBJB4kJ2nKLr22zWLpYQuRpW3EL8dfQnnmZZbQq9YitmgjRcwJLHrnfUr4WTZnRgY21VDU5fjnx7D",
  "key35": "5CGpM7AjA5hZkERqLRqXbJhXsqgWKCmeSUE7wNdrca2xN7hpnDGZAw5hZKLwNYUikbdhBsd6rxX34wmeFgvGXmmW",
  "key36": "4nM6MxB7KL8JkqgcZ85Z5c1ZXRMh7N61VhKmYW55wFrHPHST2yJBSjBkkKiYQ9xs74g4stw7N5DwahgAVxf2wzfL",
  "key37": "2QtexJXwhoNvuwGKDpNSRHG43DJvGucfqpATaMKfehVfykyYvagGPKM3t3JMTLzM939BWtg1JjhMj8ohwkQfN21g",
  "key38": "2F8nheCBf4QA5bKtZ6A72hhobm2MYfCz7bSiNffmP25GdtZs2CtwwSY5ErhQKpjEMai9n3oUxmffg5okmrQ6ZjQC",
  "key39": "47KrTviHagzEqe7GE6QUpY1ESiDEY5MZZxYK3nCKoYvo29xnonNzCbsyzUtchgf6i52dRyYGuSVdsVo2h4Rmthbc",
  "key40": "2D82VjkRDMtESvnehnbFhZBGDnX2FfLwTtyjr1mqJi9kB2RLKG5h7Lni5FzD6fBLTLBF6KGcLUmvrnopHsXmhGLQ",
  "key41": "2NaVxQsj4RVmAe1AXfYxeT9jwChUyrirCjv3bzfCpB5mXf9Xtn1twm6zSYBe5vbaG5WMrqccciwEa2J9TWSs7CK8",
  "key42": "4giHaMu465ifQph7jW5RuxoD29TLtJC71bDMRX2DArbrDJjaEEdWUniSg4ZaR621E8kHhUtF9Dc3AxrHeyn4xYqV",
  "key43": "4kFNbD9MrhDiP9hNJZNDj8nvk8rmMZtb8ofsoEzrYJ6Wwj92nyu2HMTStdDz49GPLowmQ3nhph5fieVnSErNCWpt",
  "key44": "5KS1dnL75yumQ1zWsnoAaq3He2pwTsHktMa2mcRMgi2RhEXiRFdcs31XAJbVojADS2zZ77ZGq61pvoYHG45xhPpH",
  "key45": "31hK7X1jBbyqj2R7bMUvfmgqJQQMC5P9iYYySqxostsyLnXGYu6BzENx5d3auSM7FV6TGAMcZQQKtiLVsgDDsSJQ",
  "key46": "3hTwtDMVSFPgdoVQsbMaat2ParNxHVfg5zmJNZE4KHWPqQoWYE28S9AQomCDu78rLNofmd3BczDjRTTudj8SAkKr"
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
