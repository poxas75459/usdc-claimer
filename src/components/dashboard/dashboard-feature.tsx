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
    "5SRDVKedoiSzXcEsvN1bbhsqXWojv2KuHUJkvGVr1HqfXFVM4sjMCAtuUWjtyuZ3obFVV14bXohCYw6ypk3Yp7N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kd6atPhZ2eerX2M5mHWuaPFmgGPxSq9Y9MULcJWzkc7iQV92mDQLryWQ6i5pugySwFUGYmbcBygaXZdsfKJ1YCR",
  "key1": "3sJNvDKyGJcQs4xrWV9tKzWfDTSSDd4VSCMDH9XAXZfXXu5Jnpi3HnFp5GXNXjqFmNDAas7xxRpRDt1HAzVDw6KJ",
  "key2": "2uFyPDKiBfYKvs2dy2KW1rKKy7J45apybhJghm8roz1y94591YNemjjwRiSkY897hTe1eJKrytRFjvRFiBitxgRn",
  "key3": "5myB19yvXtffae3v6f41717mAJ17XvFp87vLCqsTjEr959yfAfJ3rsrW3o2cAwmQcecfa4CA72VUPbMbDguz6Pcj",
  "key4": "5UQgYrp1cQYhztG2SzHSkcmch4ZuVYWsvEaupzEYHKVK5zuXTr5AcJ9PgDYy9vgxGQnY66s9p3hkFkH3h2fi9DD8",
  "key5": "3xtvscZQqQtetgN2XB5fAZrZmo3piVXzh9kMZ2QUozyX1GC737Wy5ggFNpNkowiPYgMymXA4w7NVZcw392dNE3Sg",
  "key6": "4xt2d7QKp43bXD39fFVjaprizMkfBKqRqZcGLeaUk1ADDBkeg81yFckrZBLzk16FVvs7WHdkwnhczLphXMfCyVrN",
  "key7": "2DmBHFvf7m8f3aAGtcq2k75pMJCKv2qXjRfMUhqBeCjaFdccr6WgdCve9yHewtSB2dKjuLWphCznYQB9zY8jBxA2",
  "key8": "5L1HC6yvnggXMTcaPnLibuMVVrge7xaEA3EZCbxbJWyUH2PyJe4MQFVZxruMpGjXVGDuFfRg7pP2sezK8bFoynwF",
  "key9": "FQbGcMx4h1jVLDnZrWZG6ZZxRtjeXfApTueZ8RtmQ58RDjUQQoWZX3xG6U4Y9bHFw5Ym1ddSYYLgpqtnW2cd6PX",
  "key10": "5fTSN9tpsDY6aVyYxAM94kW6Q9nSpr1KjEXJUXuBeWhVyCn6JAdj18bkWChG7hWWYwvvs1r7rnutwmtEPRxzfL86",
  "key11": "5s31rt5vnJdqUfS1P38239DqR7FoGRwxp5Qnu2X6ByK7ZsdvfGX2pjBCRyfHDLHBZ7o3hRKBojdECNZNsth7iVuQ",
  "key12": "UrV1vCMmnh2ezQzWzcozJvMKieZGG4k12zF5vSs3fiYjS9baMorKuHMDD2euJZ1iYamK8fNRhaBhmLKbNK6HNvE",
  "key13": "5qmRVQdd6xzbx99VKP2tW6UFyDNESS4EPABMfQUKAUziAZYbmtaH2VJLJfvJEMLRodhqtCtVZDYG9gMxVFCHrZzb",
  "key14": "xqWhkoghpJ8AhDUDGp7gkFfhnMrCNWcGo8XsmH1bSSYYBx9FGTT22xQfwGE4ZyAf2T51JuVu1LhUamN7E9hnpPs",
  "key15": "4uYuXB7ZDfP52beRFWWivnXm2EbeqKW6De92nv3dJMMLrAheJAhWShCExRfoAiZ6CGiYEbuFFdsLAswJ6HX6adpZ",
  "key16": "3TzmDugmCyyYYXDaZnfEya4qY5cHpg9a3J62rE4kJnvc7dKeiPjNZnBFJMbhAXFkRRnH7MYzs97odxnL3nZpeRS6",
  "key17": "VzpUdAcZXTQciouT74dJe87gFmUzMtA1VeyaWrcqwvFdQbAiznwUg5QmDvciBtM4mrNEd1y3BucLUzXm6mWRmM1",
  "key18": "3QkeMaUMskMxvp3NRJcguNeJsgFXUNrjC6v4RVNsLuLnWEa2k7odyknJqGezvMroGW1J2ADSQLni4ghzyuYb6KLo",
  "key19": "s8XDSkyDVcAzai6frSNZqT2ZJpgnazribU7LLSYnBtHt2dJMvrBPxHN6qzstPgh6DWyzB1hQDxxYTvE83tmFZv5",
  "key20": "5HGWpUbCEhfU5FzUmWpgjReBfQmVtgAjMzAhj4YQJJrentMfe4pmeqw3Z6GL3RHqdPMgmjYBsX8nxE7AndNNMsdL",
  "key21": "3SyDmpnRDdGkph9FqdrGiMTa73K2HfVUPCT5tnP1YcS3Sc4CA9NsNHFrutKDH2cg6P79g7aEyy5ZBgqMJ7dT2E9C",
  "key22": "2JsypSRAY6PXzJorGKYfjPzLz6RE6DeCXnma6Pyx3ZFQ73ZopgPjR1AVBR4KNyBqioNVRoHnnphid46xToLSd41L",
  "key23": "4ZoF95P63qZvAgArLXRFC43nWfmoWKC1UsQyAZg7Hw3s3zHTboXCoWqoxH5MijEmzeBDzx9EU18NyZfjwRL27KNe",
  "key24": "3jiFDTWDKVdZooCoGk2kLq3UtoDaEC1mNQFYGQgiD5MtLu8CUj5ouekBVwCRSyo1gbKR2oKKwPo8o7r9rAEtgG3G",
  "key25": "rKWf5kmvuN4E5NBVGKgPW1B4DhAMaWRW6Ze1rskEDdJ7c5MGFLFJNScwZhHJazHdzzgiMKTvB1x1mLDMr9YvEat",
  "key26": "4duMwee7jQh6eXzfUf1twZV47oAYUQPjqka21PNjzgSgkbpqX7G3oWC7ypYtzSjpZTVK9c9Rg9dhudbvgSVqs7mV",
  "key27": "4yRNwwBdP3UZGkHHQu28ofW4qLn2NpZMnxqt4srcqzfq5nAJTRNgWBhQe1XDpw4UR2PJSqw66AKyYndzYNnuBBrG",
  "key28": "3cXGKb8ThfhTCTh4xCvjukAiTC4sPbuy6WNq7VfMgFDEjBnzwy1uZSvTRZZqyUKHsmtwMPyxu1XuJ76x6MnUuLih",
  "key29": "4cs6NsTrjNZiVsVXyZVAsKJTRDv6rAodsX16RidnWiQNJBG8ivSr6Eiw5VP5yrEpTTzgcsjZ8Trfa2t5iMA5pj1k",
  "key30": "5Aa8zrsBEy4887X2V25wkdzP6PBoQm1b2ncWxq7dpXAm64r9CkrfbrnvDN7BVaAfHYuKi2nn1oCgytgawhZiJZye",
  "key31": "2VPwtsmL7n3CSB9pyRHYyNtRNqaZjrKy6rEP2pCsv4NXcFETgzTQNuK5VbE6WwWmuBgXHbXLHBigEfKmP3moCgJL",
  "key32": "5NbK2LwhwQLoLDmHNvaxpjZmq8wrWHZaUTbShJSB4FKY2X1FQkZ6QDWRx1gDoLDbJhG5yuKTjtL8HQLMvqJB4tfM",
  "key33": "2rswe2zcx5LVUNRBDk3uVeKnakzrP95yoy8F7eoHsbxxNy4JB6o6vKLNAN8MUdDcJYRKwnD3dSLuFwUVgN3c3vuf",
  "key34": "3fNABHXk1LbFMbHTH2yDfa6VWdia6GtPtuDciKkvMwSaxQng4STWHdpv4a4nqCY7m624jQMW1CZRKE4PMpiQQnmN",
  "key35": "4WUggZBxCfykk7pEB4783LtwNZxvp2WowVxXYic1SmmgAdXYnFqJzy82d299k2Jh3H2v2EN4XtFghoE97xA9CnMy",
  "key36": "9T6yziu3RcNrtydwwGgptpCDVrvuhHAy6VQ6S7dtoh1B2SiixhEQiTAUHpjBDxXoY8jSnaVEzWaejNZywzmxUjp",
  "key37": "66r4napcQEYXTKXjxPtZmmp9fGBDFAZSXr2TGmraJhfxG4qYG1jJJNfqcF7jAm3WLG3r8UHqhWKpkrAFXcNBWsF8",
  "key38": "5LxnvB7vjT5hwHh5nMVo4gt6jNc5TFyD1e3pjKxqEBrspxKtSKgT3eycA2LQggrRPZaNi1aEKDN3mzn9ugMMx4VD",
  "key39": "2AgZN3XVsZ5pVXV6dARJ8JgS4c7mYX9DtQzh5ZLEM9yghRnWNonGjzjk8ffHakL2FTnpxkbZ5UetqTedxuKJLfwQ",
  "key40": "3M8SeLmdFXTAaFvdVCPkkpXiFtkmxwPUNyzRWhot5Rc1FFwzE8wJuzNMEmU4jMWoYi6NRoekbUmxZv6NyxarU2PK",
  "key41": "5TcREKnXbrR58bwBxHuyC38nW7zNJoozob3wGXSFTKKmsbK47rU7x2p3pnmsnV1N3hd1b6SNbVyqKFx7HbxRpBgP"
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