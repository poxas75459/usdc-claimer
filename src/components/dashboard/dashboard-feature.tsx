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
    "58ZTtUCHykGBqgfX6vcuFEMCpuYydMxY6CXQRti44Joe3GaYfR7sXi6WkagiKKA1KC51EKKZmuNG3FcgR544ipUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PT1cuoa4pT9Ns9kBB2Nk6EA8xB5CF6qzV74cv1ndkbM8CcavaTkwNLUcE8XEFVvE8cwTVSzZicSTXShTGPcuKc6",
  "key1": "4VGcWsdF1VTesHKB2dKKoMij9Uff8VofsD75wZiMtBMkFAAENBKJC9FdBcApRTBZ2iPf3iC5z2Hj4byGo9sb8Sn2",
  "key2": "2RqrPD9Nep9p9JV9Ri3g2E7gqihVCNptZJLnmTd8EpD9GWdMywTGYtQTV8Gma1PeAxbMRRMYhn68oCGA4Q2qap2c",
  "key3": "4FZGY1mbeRFGGjXy4Rdn7cTx7AzfANpsTVowmfynr5HDmUBF7bwfdmz2dpm1BCETUxSMjXCPWXtuWi4MTQiUwgF6",
  "key4": "4kRHEQnVELbtCVniKuLCxkSTC3qZiDuWBXDBZLFXrZJCfaHT4L6v6ENH9mD7SKQ3dfFjBWf9RGZUCH4t8FLL4mUk",
  "key5": "2syViMok3Lr9mfZwQEqfAofNpAn1UQjrZvx6CXaRQs5KgZvfeP3c48943Y7T8QA5pEjWXWLLXxZjiLvcSWk4QGMv",
  "key6": "qJVsvWeFWVwcC4U9paNJHPYJD3udvJHdeALsyxWHPrCnaKCuJ2kFWQ6RyrZMT6PnEKPxfxTCRUb2ayPB1k5BiSC",
  "key7": "5dJ1TNMGdJarMXzigRNfLPsbdQy9NgsGE3cjpTNB4HYRxA42DKmory55zqwbTD3C1sDiZh4ie3gvDBSRodidQ8jn",
  "key8": "4JZo2yv2E4LJv4mpVqktr5KQ2xMV6xCLWxw5DK6ZFKz4PXriKfs9nkzwaCkHHC8TgAermqSSx3brf1kNBoSYVgH9",
  "key9": "5YzMdkdxFqDz68TKXaQUvS51iAFbhDEZwsN2HXL874ozpczP4X8S2gj9QbwhKM2vLrK35XDvUdiNB973V4SN2RsE",
  "key10": "45TUhTYY9brJbwUtUQzNuVocmvDVMCs7A4yuUfnERuG7BAiWttHiKQvYSNAwX1Qz8VvtT881dbGrbgW9miTo6qKy",
  "key11": "kTeLyKipttB7WTVGgoBqfYzDfRYc1c5KjVYtaKKf3Gzhi87hAVLPbcvhqQpAGHQJ1GsZQ4UiVUZa6Du5nbDCVZs",
  "key12": "GeTbV6dp1bzvadnu6ZTKhu3y4Zqf3Kkb8gZbbW6DVbkSL6s1ghaDEwFv1HXeT9pYyhVpDHJcFkZj6PNBPABsUuW",
  "key13": "5qnpqGNaz3Qo2YMg1CyfrKcH1gcikn1UZ9QRCKsb4NJkh2Sx1MgDBEorh7SY8Qvv3pbEDcddJB2EMbtKjsFZGqBU",
  "key14": "2ZZcqtUQByRFifCrk7KYkRP1SXLrwZ44NN3txNhSyC6sz3GNaZYvq7cX9zxeu1NTqEwTsN2wtUk7YqnyMzSebpSC",
  "key15": "4xN6W2QRZvLfB2iva34jTkffnFeBvoLSDzf67G6GTgAd5XUrnS7VHYuoqSKYrgrgc2wPMFnCnueA9cVMR2kETcdf",
  "key16": "xZnEydYWQKKdsdPX7WhSb8dTFpGZbCNu5eAYyhoY2r3K77Jd6Cgwb8SD4caVDqbGvqVrmB3cWQWSKgbMyMPtemW",
  "key17": "1TtXV8ci5p8VKXdEaaAgX4SjM4ECHvhYXaNLJxeXzB5nx5r6fQ3tTbLstc4uR5wbdx7amvj9csDvBSwaGCjrTmx",
  "key18": "ATMYUMR4Nsk9Yk8K2MMdTcsSnUMVhL2861MZHsydUnFWyZkjQnuzC7sFfChZhurgQc2m4i7tYBe7poFLAKXFdSU",
  "key19": "2zayPNaUmJrU8RWND9uW18axiaMmmjNEJsG6Gy8cS2Ygoy3sYsu3viJg8Ac3aeQ2GRwAb6rXHxTyr8mXpY93rF7L",
  "key20": "UrzL1k2cGn696HhgnneHJ7me8cRQDBHpCABKR3a36uTZb5taNUHQBLrCBKYN5fLXk7woCYZjeY1EMCrhq1dvGM1",
  "key21": "4Uw6b4aD2oUKvMAYxWM3drUmJhoAaQvsJuB8yfbfimnWmY1ZudZ7UczULHuHef9eqC8bEW4hpm3g2XQB3H3SWjfy",
  "key22": "paFE79x9CvyEj4ksDhn4obKSsqWFG8bbaonpnyqgEdC3mjofw6yQDSTC3gCnKAifwCFPRZRRkQvjh2ZPR4G168j",
  "key23": "5jsdNfK1wQWGFzUsVDE1uM6NtxtEFaC7jYGB4qPqgCy9MyyYnKCiwGXoGXfwUCEhA9HASs2XafpXGNT3ZwYU3TSX",
  "key24": "2t3GDBB6tAiPgJg8UM4g96tyPU516BV8EAm2PwsvhU8tUWBixsQK8AieEs6PNBsQZgq3PGgn4EdCfTMnZNSRgbhG",
  "key25": "5MUTnk2ZTzktBaNHxapDeQCNfdRHQ5rboYi5mGVNkxcBZQm3GNiSpvgkrj4rZ6dot3dXsW1cXmBT41R1s6vYA2ti",
  "key26": "2BSi9ypT7X12CBoYxLxWgPYdVzpGAe8rdTLoHmGC56z8rD1jiBpQZkK8YFu4vz6heDiJZeHUYy2cUYpcggR4wQw7",
  "key27": "38Xef52No1EtUBzLonfQG1pEbwimwbYTjQd11VfAQjAr9G9FjYdz2hur83RwekNF3GGX17cyL2YFyGUAzirbXbD9",
  "key28": "4LCS42wM3qAGrkhCEBAxhyDYXubA5tscHAcewCjFKC7Gq7RzcS6QnoAR5cnwLZW8Mou7rQDaBL7Wb2FKCdRjp3XY",
  "key29": "NiAzLmZexsthZzFakyynYpy6dxvPv5hMMewzahW6BsxmrCdioHBUwSXMVPAPn6ER2Nph3ePLsE67uVPG4Tgirha",
  "key30": "42NgmgHRxaDFLm44TyEonrR8JAaisjyjisC31nyj2NdxjsBrsqGjWycUqdRCfvndXQPaEituKJdzT2JXVuhhBkWG",
  "key31": "2Eh4emrB8ggnK9mxA4eD2LEWr9ULUwSu99iUYsz1PmjsyrZ6A2AMu2hTKtg6w8sqaPcjYRwh4sZQ9nK6ZGEEuEtS",
  "key32": "24brkFHf8sp9c1pvLKDeejLgfTXRQNSAu81smWG9yS86GUrAk8DruDAymF5ZKXeKS7NfKV61YLfAPQBJxcx9egs2",
  "key33": "2fJtGvUy5vt9ePacAhgEd7KHrkeUZGjpgSAWDh3BTm1gQrKrhfwh4USR5Vr3cLAoZ1kKB1iavE1Lra9kgLFEyvSK",
  "key34": "EdzjLEdbJzLiGPxiCdbCAWqDZ2XJqXN52js1o8jrSHiqY7BVGPqVWjtBQhRqqVf38fUEgJZ3Kq9WVCMy25xxvrM",
  "key35": "2V8szvbeE75U7JVjzsxt3QLmE7qZNPqzZf2YvoyNjK77pvzWVEsmFv5QK1iBMtuoUFdYY1wJBtgppBye39WJHRX9",
  "key36": "55EoEQJLr68NtSs3btmQZjxi7XTtPivk8uTEueX8sMAn6o3jp7CF4WDuZup2ayWRJmD5cDCnSXjNDVKruFfEpL8o",
  "key37": "4sLghRjwkKqTqQ2fK1USeSWgYSBbxaFFqnaAU6HtzcRTzATE2x6dcwTCasGFWf2XCDFmMkASbLdbXfwpmyAyqx8A"
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
