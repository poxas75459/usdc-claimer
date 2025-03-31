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
    "37QdN9foC1EyvXu1wqZgMjs8K3PQ1YBcwyjTXzydqatuwLQR8dNDy82958nq1XztmsMMcL6kJbvJqcCr5UMPspFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RtU97MnjuJFcQ1gzQ5xU8qyPnfsbWeHn9uWpkX1EgKDF3DGhpEfg3yZEiX8jzT8gE37mf66A7FZ97Aa2cCWkujT",
  "key1": "39S6jhaiHfV7fYPyNLSVWWfimjHmv9X8a2VNNZwPx6aUv2sAKYkFbEEys9ekYcw1MLn6UmRGQss7MFWfqRk5827a",
  "key2": "zR8QgQFv7dCAEbpUR739KySPCrEQ7eUocsW392w1DehmwgA267Vu3QCcsq3vPFkcEfTPtUvmx6SXpqKpVkSkBa4",
  "key3": "5yWDdZtshskqDV2hYqeba3u9aEtVZLBAumM9xifSNA3jqHXzizKkDAZZMDvkqHBYFB9DtdDjok6Rx9avsZPk62PB",
  "key4": "56oTD57jPy7jnaYQoJkZMdnBVCHDeoweKJ5sVAcppb1Fv3B1vGpZ2D871WYebxWioGv3Rs1RBZRczVRUrSrQQQj3",
  "key5": "4tzXKnMfief8Knk4AMjGG8VvWbGQGXUMAXXBvDysXt5hNTqtnyECgz9WCXnz2XVJcZVj255hEaM4FZghFvf7xgz1",
  "key6": "2ZyH6Cd2TcH8VpF7JNvys2UmUYvyVNguGNLdaUYxY6BBze3bJHPMXpoeAowu1a9M1Cmo7Nh38E9htpq5UoBpmKzX",
  "key7": "53G777HsmBELw6YD1TWERyPj2C1TnFfEJVwz9HViDyKyNoo6LnYPk1jWR53tedLM27P5tsM6GfuwiCAbNS9fNaNh",
  "key8": "4RuuXCa4MH5cFz7YzEesUTxqWJvdUPhCeEVZ1Ziu7mtjVLGQE8pg7Jcm7Uj4gVMk84H3sv2jy2TUvQLPn3ScMkpd",
  "key9": "4xVXXrGaxx2XVL1m4We98q1Hf5poECuPCpfa7iNopF2gCshYr2SJcDq3RNMB8eD9xBWp5rgF7jViDjajzSbJf9Cq",
  "key10": "3w2p5Leq96fvceiL6VGdYsLQKJg9YoDxncb6DsWySRBtRgAhGyUcdZ4uFArDkx13uSWqXEoz79iuiysHJgWwkhKA",
  "key11": "58CfCHdkG1S28gnqLBGfDkRMkjz5SJScCHVgGxdh6X8tp9ezEuDHAk67NQje1px29Unkmc1x4k8kRiPBHAMzFt52",
  "key12": "4BzJVrMRuHNFp5BrWi3srXqiM7QLvBw1DAeK34ZDrVAYufkKwTxTGncy768VdeZrgbWsSs5JG8Fj6KR8cdTZL56G",
  "key13": "1THGt3tiDREP3XEkfQCCyk8uct76Yu6JKxPsVhWQ5wFRLPhqBeKnoj1F5xVwgrELhvNEANiSsL9ChvFTETBRFF1",
  "key14": "3NLu4QxWRx4mgnvSvGgzvkWvg3XgdLanHYEMtXkwG976RUbKi1dSv6fSaNRXEyL4TenudNPz8wSTBBfC1hXkechF",
  "key15": "5zk5fg57mCZwNKFNfmm3mGKQBdxKupXGP2AVhMxcqfKdeKA9oW2iKuvS1Ejd7ZSQUyLkvpgQPRK5Ldvpf1qgvKp",
  "key16": "3iW8CJEfBH9HiVNwTMkHzsFHHjDcjowuwgA2sq8Bit8GSU6hk5VqjiNUQLzyxa7JVKMXfc4eXjQWbeNGDVcSxPcs",
  "key17": "4Z7Gqofgw8Bg2HARu3b8zHNB7b7wFS3VZARC95Ln3YkeRZvLN5zqzVsSMfLvZiCXRmB9y6N5FXhJjD2ajxan7ye",
  "key18": "22yE3H9d3kPY33npKYfXUb6jAGu8Ftd5TGN3BAmMrZMqFYqbfUnoHhXWqg48AkZmS7hd1xwg5ZGrqcgiGT3bWqwP",
  "key19": "uzVrDj9yov7q6Zqpq6v2PATTSVveuE3JFxebYpt2MaNPAa3YyqWmtYLu2FtJ4dioteHrcTs6wvrdnoKs46bQCM5",
  "key20": "bbu2LX4jc3Hyu75eGBx4DhBAYALUKjNuHYpkaHHaqnXYnV5du74CDbBTpvYj4kBNGwT9JxCc3ZjMVpjTEgoST8z",
  "key21": "2N4LGD4zdUpxcjtdiFeSWFcDwTJdPdXM2Fue7AGFgYF6JJa1kbzxD89RXTaCsQ49ExMvMsHKZdcPpNQg9xLeyRGR",
  "key22": "5pDmi5Y3AN8h17nY8V489jW19XzAAdhqdBC3vNC5DVhpnKpaoXz6Y1gWpngeur9gpQAh43XCThYaohCHR8ni5qK7",
  "key23": "CbbtZXc93tYS1rojHwbH8gc1ApVWTw2anm5dNwsDBdKDQFd33FqFwa3mx3wnDeuSzZwZpHAJdcdz4yF5G3NMAg2",
  "key24": "57Yro6PCvSV43QNH4CDRifTnFXfs7ekjAvkzte1GZvfXG7ExoiV2htmCKhavq3MTUHLCrVEJzfM7u7PZrD96X2th",
  "key25": "43UbnbnJ7X1ma84MPq3g1wjAsjKfcCt9HAY4Gu5pf6iNi32ZeZoP5cPMRH6KasjffeTuXQ5QF7d7ZyCXWSQ9y869",
  "key26": "4wtKYf9sABTZESG4oaUX234TCgan4xEqkip39HVGSkeGgmVUFbcwVTTnroS84CPj7U2SEAVdkuYfsaK56RVGVAnW",
  "key27": "9M9FrhffPsQgFa3Wt1WT3SXjgXX8uTc5e2oyEznb99p5rvvfjKMbBaWeZfoFspGcYHuSX224YnhMeSYNMYbx4zz",
  "key28": "3XnVQqdJkwN1dXWLmZptuX8qQ5ytmxzWGkHDqtJjMMxr1C3Su1fHqaDUjYR8GyYMoYUHA9dapgBdiNM1vR97vkhF",
  "key29": "55A6Zzmgv7WgQPAef7DdJhyeiHTbBkF7ppJWUhqUA8snnTm1FWRyn3jcj2xZ2PwMq6LpFqyLJDgee4NnpP1TiJKt"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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