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
    "2kfVuJZcLs8MDnWokr1PCMgNCCUQAwCTWZ1ExvqNrYaKU8Jv8tJxzpWA5mT17FpvDAAgs8VVzsQA3V56f2sCmULr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2edeJt5YdJoKHqgavoMkczLZmN1EV7Cuev8nfuBkEYEkPoShrYyzCkjLVWBHyznnWsQyHgkcxbt5Fs8pvuktUj9s",
  "key1": "5V5MVoZ29VmREcseAoVBRPUqdRgwqcDg5JMzDu2EfBB48gCJUbiiqzKhMawCToM3kBPS5st5HJ3Yrdg7WcyreG66",
  "key2": "5TW7hfnvRsyExXFbGkjWcL56HR7oswrM2W2oLqnjbowmduqQ7qv5vdRh2RDLesMepW8KY8TPU51ygjBbbBiYA3uB",
  "key3": "4oGKGNvTVaPPWTq5Cu1rFbqup8LQRwBCUCXiHZFhnW2L4fEiHQShGa7nTjcQcHCh3N4Zs5xCbBVNm4iGMa44oRhm",
  "key4": "3hmbrTSzET8jEwpi688SwpihARG2ANJ94NJda5MtSD2KaXeJrmV7wtGxMp1arew65gqYbYghDqn1CrFAMPHC4Bjd",
  "key5": "2DhHMeSkFzExdgHJjS5xCpAyrbqKRk1Xp13mwTmXSyoHSpqLMzdZgw5rNLzdXczE7MtmcWGoDDW9BiVLALC4nKjT",
  "key6": "4p5ocovQcwtkoJewg4fTJafo94TvKpoPjmZ8PcLMdv7TQmdYBmvAwQBA8jToad9F6Cd3waZALqchgjqXESMpHAD2",
  "key7": "4UsY57PBkExEpDcZaRV43QtAbmu4uhdCPntiNnEjgrfq41GrV52Khi1Ha2hji1myGGpNBDvwxFREoi8EdRNEpS6L",
  "key8": "5LnucVjsnA2bcQ9xmvAoAdECV3UDT9FRqADf44TRADekU7iPEyqbZmRTCUCscHpPheukKDwPW8eLMdKSQuNiN9v7",
  "key9": "4bWoCPiqbQU5KGu5kQEwYZioqgjrP19Kq4zHnaFVppe7e1qivDgPtyMeL6WTf8YxC1pLHKH4gm3yVvtCNyt34DTt",
  "key10": "YPq7jFbbKD1gXzbEMaig98trQvcwibD5zgnf5Nwd3mjVvKjiRGpGbi4rg8xuGEdSjSaJt3Xgfo57X3L9YoXANb9",
  "key11": "jh3r2mcbG1Ze8AQYaHDvEJ5LvtA718U5oXuRucgkti4XC79oEn1JfvfmbtDo47fZpif7xTXUvba8Q4koPwPD69j",
  "key12": "3Yb73f6psotvQ1vvFBh3ZgALvhySa2oFQB9Go6BAWSPjDyMkxtp6ZKqdvveq1Ec1UfJgtsKPXd4voUm3q81L7NWi",
  "key13": "r7QEgawMsLCm3PmPZsvd86e7ndkQ7uoy9mUcBHLGgaNwaqNfuxJKXJTGtq3WGf1uEgFpqr6xjdH6in1FZT7QkSH",
  "key14": "5VNAjxxD1td84mw1bRtR1vfAb3ZvQukKT4wjJnBqvE7mARRNP69j8X3r7tg3PXJdshdbgyZWUVMEUKmTT1FhwiuL",
  "key15": "3H1cxvv7p3LVhb4iJSpD9FqNiafRYKkFL11hifRcCXE3ieFR7CxisgatboLKTRiDwj5G6yTtys4b3Lii4t9ad5QY",
  "key16": "4zzJEWqVA5RZ3fcxLnFeVFmguuF5g9QCweR3LGoS29eRPfWnNFFU4S5Jwf5DPZbMHF3xwtN4j6BFaJUiF9VrCDaY",
  "key17": "rRnWuq2Hks89JcMqixHtHHuEuzJRCMVpTzSZFGMGoAxUiH61BsU6E2Hj3VoBepskzc2bBkZVDRn8TAcsqDpakRx",
  "key18": "jvpBpowE7FsgvPzL3E7F1ye1EFAp39Wib2Yq9UGaKevHMqQdyuGaBk5ZqAbqsFtFUm6R1VDSvytG3LMSx5jWpVo",
  "key19": "rfAansppDjfzWKa2wBRbXCkh9QByQeUB17TDLFyDFb7FU8uPi6UVNKf659eSHxHzxauEPhc5gr8DGNejR2L1oCG",
  "key20": "7XdwfJo6XSLeANRRUrbcfTJ8mKzqjqud5gzvNywKE6vojHzr3P7qHxqxmrChVJi8PmMvQ2KwFjafYAHZ6TS74CZ",
  "key21": "5HwCK9YzRqQSGHr7vQ3czKzwRqy1NoJi6CVmHSTiThh7LmomA96HLbMBMV3vHbcAa1NDV9mNHwyGo8NiufbkQGvA",
  "key22": "D2vM1HxwrvVfCUeuEHmSyQyCFJWJdxW6tuAfRvb7UrgDyn3KU3GWbPPqmqGQQBaAJVw2AMoS2SY2ehn9Y37iYoF",
  "key23": "5nee4WJKWqgm4PZ4fWctd6Y4JE6yfKRipS43Kg34MPJzVkSKuZ57p3GZYw2M4swgqDrx4fodjM55EiCDB2333cS4",
  "key24": "43utsoAQ23anpQCJP9uftZmQTgyyiXSbzWqL4P1YxePi1pYKwoeqnQmR3itkrTd3d1dNJwiak5m84vnn3eSWYxhp",
  "key25": "4YxZRx6Lmkp52h1q2MvguMhzZhjhoTv52ssMAdeZiPn5af43kRM5hiZEqeANeiob8WDEQwdongcaeLPPtNim2nzK",
  "key26": "5ca9ntbMw2BzJ7PX2KpKRUjwYYiCgiv1WZX4PTUmrhjESCfhp8bDBYb4MZh9VzyBUtUJadjW9FT29oe25eWjCifV",
  "key27": "3pukQd6bSkXjRxqhs4AnKLEWQnGhGWKhacaf7EsL4Q9QxzbhVxvfv6ZoR6FAEq7tMQn4j3D6oGc9FhgfhytcNuHu",
  "key28": "61gNyTPiT8ZPaf9jmP6Nbp4UWoh257d13atC8taGYRibTGybdmMcTrPh6LmRToyfQ3Fi1ASi9xKxi15uH7d6A4MU",
  "key29": "4d7CZ3Jrk9h7t4C3xr5xw9LozaNMDGBLMZfFoyLof1nLnR5CeUjo2eG1bXuHhFzCvqHrnEqtXByf4N9gqBKi6WVV",
  "key30": "vif5A9q1soTE3tSvXSsQPGFctBgTRzMYQ5SX8VA8hwcLdeHAEZQQAGBdt4qc1rhFdNKpRUanrvutjsVomCQfqcq",
  "key31": "2YEfWAkaWonzaXAgRj2pJDR5k6SLN7yukLapCxGXfnJGzxSR7uEDFFow66PbAoy729o5H4YAvm16vpz65wj5cegp",
  "key32": "5Wfzxt9TGY5yuarDU5jBRUgd8MEeK7UEGZjLM3vCFDcMykWwfvrefF8C7awwSQtBfQUDDJHnk2eLDc935HxpJ3oF",
  "key33": "2VngAC3GFbMe1Y7MaRKjHxCvApqHfaL4LzXdbsReUC3xChwU1hWURrGnrvLQ3UhNoEZffZmSeQKC6FLuB6hmR7Md",
  "key34": "tn5zRPGfEPHJqX7fqrtn3kGWYgwbzBf1BTbXQjbYrBTehuuUyVJw15SWzAN6ofFyESf43N1fUQFaXrFLy5pKPNc",
  "key35": "2cKsmWqGaTe6rrPH3V388fQQ6S6eMWDQPAhx7okMP77fswWKJ9RqZyUCVYw71nSNVXPrAQVvKayX42KivmL5ze7r",
  "key36": "4T3dhnndheWewVqSJKbcLSykKZrVQwfhgqkJnrHMkqf4uodkAoChkPtip6VVUXn6ZeNeQb4vFjYNu73oNtPSWekF",
  "key37": "3z9gDfsVnuLYwnXZroCriyik3xZ6uY1ib71zBMiwucqALJJQG3Pe4oWLwV8fa191wtrjEo5yw9t2RcjrQ65WYa2D",
  "key38": "4pUciVhvfad4hnFc7hNWxgmU2rYMhL154YYHR2tboPRGiTNJc3xbPNrVsTcvpNg5jpW2m8ci9SiQ3PNjcbJvgk7X",
  "key39": "27xZ16mo5dCStgdHCkrBTDG4nDVtXpHULmMWFBSByLTSKvTrHtHKAKsT4inTPGM2VRHDicfP4gu6i836XZ8Pa5R9",
  "key40": "4Mee74jYTAKZAM3a4eH7LDNCFfvd9KzvQjbqVson85NEyJgmRDNecNZZ9yDYBtu9dzAxEiuiU8JcgWTZJtK5hTKq",
  "key41": "5m1AbMyJ99rmY7wjR9FqyuC63ToVHHrhgqqmLP3gTZ3sL26r4wjWEKuEb2G1XDPyUFMxKkAhBbZXiHi4Uq6fpKdN",
  "key42": "55pywES3ZEgZiR23A9VxnTtjs3sc6WrfPuzeBJTTNWnhiYRaS1JYov9BMbToajN4RdR3NqVepLKBV8i5LLfcsARg",
  "key43": "2yxtJ6M9DBPV9kRfjQwTe3CExnx5J8VJK7Y8cCUXSwG6nk5RnMYLcj2W7vHHmu2dPeTwRL2jcSFeiUQcr1mV2Bmg",
  "key44": "4u8NGpyrhNsdLtTj1ZKEL2nfgkmc3qc5Y1mey3YSRPGNXJodETJyjaMkWT6iQFm4nNnzQQNqUQPytSJwGLdx3D4G",
  "key45": "329DCJaKhokyS2UtTEwUEk54v7dsv6Lsru6GpADkwVECwva4yRoGiNjRJgxSGH4yAdg4fLXMQEbKiJAdpZGRjk3p"
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
