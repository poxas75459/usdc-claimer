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
    "4jbQXQYPkBJ1bt8B4xW4a5oo4qNh1DwQHEv2N7bMUN4M4K9D5vBbahbCx2nVyihTG7j62WqT1geQU546QHeqsN9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VRB7SxJUx3fEjmSQyZd3Ld5RwNveQpEwWDmi4PA5ZQ3AAsztBdv5gpA2hwnb9hm8k4bDkjSTZ3gdQsjBPZe8bfa",
  "key1": "2FS1EUuhKmwJiJkSSgkwzbeaJnz5jqJ8FE8pvrmYgbEgXnS1tsxd3i9Lezr99uwKsbCi7d2ghHPCvzHFkYuVxQZc",
  "key2": "amb39b14LDyyRGWs5piFAWH6kMtcQED9iHrhjSKA1LReKwiF4cZ8emRkgeUshyF3z6dP2joMMsTEb3eMtfaVa5o",
  "key3": "wVbMaQWtj8YXmEg4dki9mwsNkgDp5ZrnTmbsSytK26JjnYNchNGdCQVdBrLkem9LmsBn434z1FZaf1H68WtYE1H",
  "key4": "5ij667YN6Z5XEuZXt6aSHXXGvXWRoXwq1kZyz9t1Yyhrb6FfiXrdpmY27mcqSekc8mb84EsJHRKdp5XfXiitbohh",
  "key5": "3NSQ3UC7oEGTacn3NtuWktLEixJHiiBt38G4WNE7ZR2TiUWg7cdKV9ayUZmg3UeMUR7aounmCGipSykUSaGvyt42",
  "key6": "27QR8fxkcfJGf7UmyMhSk8Xijm5iLo87wkvN8e9psE4vCPR4WqQHF3K2mpujvEGYGX83U4WoEESfbvMrvRkiWv4o",
  "key7": "39UvX5G8HM1UvBKUHxxjN26znfxah8ARdShDuLYPRNAbeZdBiwSRJWKQSgBZ4PzQ35BozHSV4ccaFfHMGgSookcj",
  "key8": "2RhPvYYwZXdPuyEne4DwbNYrqq1EPQLdCS1uqnRsRMnLmKeYy7oiTFdguNJmEXpmAyzRRcEwMttxzZT5Pnwi1rME",
  "key9": "2DFV5qHNvEMMctyxV39AzJPtNnccYHyzXtza7nVJYyvxbVuU6S7U5Jq9Fxss5MyoXoDt6FDpQfeNLrNGJ8A243uK",
  "key10": "4TodwJaeVHBxy2YUurQiWG7uUMh46WJCryzVCgj2Ke7heTkTZfMGsyXiZoNvNb8fTJC4u8k7sgKQfiJ9XLXCL34H",
  "key11": "4P3LD3xGe2efHugZyvWDVzSjzAwCP4yfQkmfnHVMadxEdVeqzXvksy7HvXVj78aHBiQp6xzyTiG7BPKSWmjbk43",
  "key12": "64mj1oar3UGpMTokhCtRvKd9BwSkCivDaXimFQi6SmpB4QzHHbpj4ikSkbt9nGRKKsHb49EQmWRmJVx8CG5b62bL",
  "key13": "3EdajCGPjePur2SQveteLgA6YYSURXeyS6DADqyGTMoZVeMrirXiSS2Bu5vPcAeRSbCPDTDhLvbQ7Nt6upmMLeyc",
  "key14": "2pQSRGkkKp6RwVRqEwwQRwd6j6tuVjob6ndndPvPhjTPYpDqQ3tLeNv4uob7VeeXSDGEdUEjhWaS7XNHH7piPjCX",
  "key15": "3TXoLYABSdyiCuMJ3Pr7dSe9K287TreB3dwJXWsTDUm5upE7qec6n5RayFSBV5AVfyKbgvM6nGkeJ3fctoo9kYCg",
  "key16": "T2EaH58AeFw5ghJqUnccNpL35cXNmo3TJVG6zniRVUbUjvCrbiyXynWu2cTRcepKna1WHCqWZAJpv6W5DrWFvMP",
  "key17": "5PDj56xtfnaLQzrHNiBh3QtTwiRQHJddeHeWEZmKwtHk84s2DBWEWL7BJ4CzjvYnTbow7hdY8k6eSQgy3nuQiynn",
  "key18": "Z3JZQL6cDrtRmRGxFfER559CEubJEHLT9JhoWMS4gtw9BNhRdRtG2Sjsnz1bCi8RVJ7hW5D43sciFTsrGvnP9SV",
  "key19": "31jfz6TvPTJzqcAdLvUDc9ogECBUHpbewUYRNC2vsZ5otGqjdtmYVqYYGYojzNEfAuzUHJXXVk5SMe61f4NtScSy",
  "key20": "5MfbKv7GvTieMFJyTX5ZVECAy3h5o12jBw4MGa3sbJqQnULFsukv8Y3LKGLyYej2tAvEazks6tLXGY3P5kwXdxvG",
  "key21": "3d9MJREtWvV9WdwMccQ7g6HVq51GrqwN7aqJaB3FEMTL7pvJvh6MUAnryhwUMWR8iP53Xfth82XM5g6dyeVGrSKq",
  "key22": "wF5eCsMrCE2jQEM5vUc4B8hjT7YQTtenPVonRx1HXdqDWTBJUSzJaXUA7oj1rWUwqtmVBu18WhaK7CHddxcScYF",
  "key23": "27XuoKCq9R4EfX9LvJUVsMai3me5R3X8MccW6ju9XLNfuPsj7pXxbJa6dBcY6zzz1RnDz4UCGhaD3tWxguJNgDr7",
  "key24": "2ojEqSkcYNXMkAAoGUrfMhb1X3Ti4w7t43evnkLS9XfFicmt6RN6hiKAX7yBciez9CPZ39K12tqvaA3PS1DayR7W",
  "key25": "2zFPeqD1jL1QLvmioQS5GGeDAqKwHaC8b9r6prTbWb9C1JrReT1jjWaVHN5vQh5F69UvFvfc1Vsixh7MiZAW2JoH",
  "key26": "29LA7Xc4rdQzoy5rE4y93784y3QnWbCvYmDMv7qKCWVGcauY2LLoUMQWcCMn2Pwaugh6few26FytXDpXwiUasJBe",
  "key27": "5fGxRGiyWXK5wRmJVmQXn7QwqYSgq9LBMQJh8G8bB9qqaRmaWQ15TuJx93w8foNWJYi9XNBipD778EHm41YupEoN",
  "key28": "4nC3mYL2U2vhs1dESJQ3BUVA7W8gXoTMHJbMY4qSAxMzaRnwubSagnf3zMChMZTqc1Hqn6hGCYxWJmh9aG4CWqn6",
  "key29": "393FkrsEwfWWm5DPU9qvVaz3bCUVkuJza6QCAFETyUXBcafxt53JYQ4741oPHaixmAGX6XEHVTtTkncnjhadPQ3q",
  "key30": "3mWmyWKrGC9qXphCc4ry4j3HNxPdGdebTRskt4X152TmFeaJtWT7V7rAAZz1sgSryctg1hyfyH77onWvXSSLV4a4",
  "key31": "g2hG4gwiggexGbtLuapLZreJuNbKKWu3i1xCKip6zP31yppX447PMLcxxLRpPKJytAoRz2zXbxhW3m3epghSvqP",
  "key32": "5VaseQ22u4kJt18H4XHinwmtwdpHee7rLVqsfhs5HSAU8gecZmCxh2CSLdaCd7UeRzHZxeBgLfwGVwuKywbY59s4",
  "key33": "3GpvfSmmHkMQfMULnaNNKuVSNsJerB3uHc2uuwZ3dGAGed9XUbRqzAC5Fn2LBBZYDmqHCBQgwtTiDnpn7UfotK8c",
  "key34": "2HX1iWf7pPzxoBnpJXcq5Xfgjv9x8PrhuMxU7RrtNbCsy7uQH2vS6v6Fpsrm11PdMic5k3Ue3sVAQyykKLLFPmnv",
  "key35": "44UYwCPB2pVABzQkPXZSJ6v9RQCXmv1AcuwsJbGbokUAnNPHzbCoGK2kbxq523cbPQX2Aeda8ei7s3Cz5t6wWNGc",
  "key36": "pZhtCY52A11np1uqhPeQe3PWGGvkz1Uu1P87Bv6MUgd6wtzMiLTD4ZoNfhaPaxaoYeH9kKVWxyaf1e4XExR1Sei"
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
