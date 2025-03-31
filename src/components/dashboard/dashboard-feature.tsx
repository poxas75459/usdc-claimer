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
    "5ttf5dkBTFA2LLCm3FBKzkSyqUoYwR8B3uwJFSxBCEYax31UaRY8NpuDfK4Kg8NoDLxCVAKYk7XiZhMYPsfbbcjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQGX9nVCWZ9zTtSBWPvt7iKGaq8RJ1dPtQ1ASZEM4iBHbXhJUL5TuLQ4azPJzAEvLuiPiyBypxaanMdvQP5EMHr",
  "key1": "3ossSHFVZXoQn22SnnyWp6pJ9AaFBgLWLMNAzMjg8Q5PvESz17U5MXR2612NeHt1ecuhf9W9MWHwRzBW1cFyMReV",
  "key2": "5NvNmyvRQmmQMknXvESmSReKz45JcHLy6MtxM7oueV5rtEPdJh7zwCSuRf14ZCzGJ5LuNnhKdinHFN1R8ecxyYd9",
  "key3": "2phyVMskKMuE5HeqTxSw4UVdJkL66TmV4YxvoeCvq7RgtgzKwf1394NGLWh5LGh5Lf8gXBeTZfjdvTGeWiTGvGrt",
  "key4": "4ZAzKuEAysYtomfcuNPSx9LYeVzUwsxR3RxRGRP3EojacmUHWoiQHVmFJZzfL7jgZYoCzpJWGJx3PCrDYbxwuvrj",
  "key5": "3fxPFZTJBsQNm3jxL5tKKcRyArqNK9pM4qeEjqyR33bK8eYXwiapAvY8Hs48762krqcaXgpKP666NaAVuKRtTPTg",
  "key6": "3eTZrhv2jHmdF16iGETtaGv1uU68sQmF12XFcGes9eSSFsGaNbdN8gyRG256PVpvga4BQisJsse3i4Q3ZmthS3ut",
  "key7": "43ZAxHqFskjAdRwqq6uYKRLXibwUYBqT4vjqWrMEzdGuC1vLviHxewyWZdBnKZBBFpUNp5VpQFC1GVrY8yUZkdHG",
  "key8": "5h9mNnAfmGXivgBzqN7p2WJSaWTd5VEcMuVZ7BiGHQRpRf5NidMcAaKMzF96M7MK6UK34PpNtxjZsZmpKVVab1Ca",
  "key9": "3yHRrknyq8SGnfN8pjyUX6h4uoFfNTKqNjWwxDmnyCnPzcg6r28DpeKNnjshfRe9ndpjxvx578FuymEbZyhLeD47",
  "key10": "ZWD7gn5vWQdQtsXhNFv4DExMbNSZNPoT5PYZhaYhp4KdFLHRyXCmymQ5ihQq7H9XJRXDJQgsMiY8qtWNwLnacvg",
  "key11": "4wgccEoDRURUDuvaj1Qgz9gUFcuk7Xoe1pKkbFfhRkykQeiM8K7b2iiqtq3rUYPTztVtVQp4CDPXCizDV1q32jwD",
  "key12": "5nyssqUSscVPA7CopXkzYrN1vkeFEeNXC52M5z8RGKgiGLXuU7vbBD1kn7FrWMMKb7vKqj5db7ThXTHizVzSo4qp",
  "key13": "2oT4zUKiGo5ypbHhf6HodWAQkr349BFeW2AbEJyqLpZ5Ho81Ug2bwyundwZZ6TCB6ZFea6xhDzfvxNFTNEpL9oky",
  "key14": "4ixfWS1VF2PTkXPPAmU5MNA9L5VGezWnniizvfxV7Phi9gToP4Sq82zXHoM95f1oKdK1cCQiF23i6hMAJwSFYj35",
  "key15": "3SG45fS67YWqsFUbqQi8aiVqVJNcehv3MFV66EBHksC3sxduAfa5mJh2mj4jVoKEn5CUPbjiKmskoXEx5zTLhNNq",
  "key16": "5M8pkUDAeztApY6Cx9n1ZhW9H9wC8gU8V1FNETVu88m3EZ6DMjxi4iXq5Yg8WcBhLc7q6LRefNBqsFNXLRcpvbEG",
  "key17": "3mspEw2buSM9n6up514bkY6UZipd5HFbpUHdRpckpZsdapf6toLA9fkixKrVqj8pV99KzvtQAh2CzN9zFaJPJPks",
  "key18": "5kbgZpdNs2w1ZPjoJ5fCu9hwEJkj2ow6Va132yKZBLQpRNuss6s9FUwR57JMdE4aje9WakEuZcRcUtQPmAwfpBEq",
  "key19": "3sLGMnNemyFZEzyNDzAj4Bi8ZUFPED5aCsTWsDWNB4yUEQ9yw1na1iCKA3XKHsd3c11PrWnXaLCdGALF8p5wQngB",
  "key20": "4Lf45L25NutnEvre1LGawpc2bgeNnYNrCboy3b5EXTuh59Wmm3TvPdUWBk4PuzgBVhmpY3CnqJVbeJ6eviuSWcPk",
  "key21": "3nMWQerAsbZPodoTF4DNFULcW5w3Fgrymqgty1RF7V3F6mZuLAmoe1JgqTqydwbeQ7F2tmvuTa3GtBMzPZ5vMf8X",
  "key22": "4N9Me6bUYvm4B4qaWi2CeVnTLqx82sN16nC5nVmMZgHf2C5Wd4AkazKtwS5UKvTCQf9ZaqdvuhmEG1Ez53oyNwz1",
  "key23": "NFmw7WdfahTyZLuemgERnYj4mhWbwWhp8SQMyc7i4wXZXAQajZVCj6hETZCbAprbAwT3A2g6gRVbDGvUU1RdVNE",
  "key24": "4YMVZVE9QrTaPMQwBswGts9ckB2mwT2BfcEC6XitjkQp4UxBxPWMjmswThK21oJ5sKeXihJRujEhsNFYL3puDom2",
  "key25": "5a8HnKK8XnMLkTz3KneGBGuGuvGes6dBsbyRwko4P1UQsM1zEDpSJhce1hWqGG5dGpSbgkGK12qQZbUEWR6W7Tvb",
  "key26": "3eoPEqEALE9t7ZsbGmoi5oSpy3FrX5FDxFDAiLpqxub5BN3c2TvPSwqtDAXeDe1y27YSWAcmstuh2Ta1ZZm4Lwdu",
  "key27": "RxNVdwQh8BTEtcrj1WXz3jdPbNnGaCQ7BwkwZSEwGqvRM6i9TAx8GoyYELePXvmobv8fpqrXjeGyPPyAamWNQiP",
  "key28": "2ovtmdAKurRaSJadDuoF2tKMKQ3BYbb1kRJzfejDGZ38UCr8UEs6t8J8X8wEgxjRYhPFcVrXByStVEozGv56awEX",
  "key29": "62itkepbuaj4spN297TsVEB1pCm65QArUS6EfCN9ssyAezWkU48tT1jjCHDZteDXUsMAqY411Ejmfb7jvFAdKijs",
  "key30": "XTYARbv9CuKAGDhd4CkJ4diwxCWtsAJBAFbkPnzb8aAyCiomeYY6aRi8zQFNAZAF3bCRD2b6CVmCAQYN2WMSQwi",
  "key31": "2DxdJLqz7TdVoxFnQckciR47uywN8WrQkaKWMSpFwEJQFzx75VwboSNX1Ss5KYuMwkbJqADgQ111qpQxphMGTkMf",
  "key32": "3j3BynkYuVP28yHDB7KVPKZWcEkopEQSTwPdyiE9WPEtrVk3H7kRcv7TJKHW2T21Zm2z7zQtP9QjGYzAE9y1YSEX",
  "key33": "KDUbysqHhbsbtz2BHeVNQnbjAqiRCvi4ZU1UnCkBrDL7KZL9hy3mqrjd41zGDTTp7a6cGQiHNaTZQoHfqSPNUc3",
  "key34": "5ECQnc2VxQvRxJajEjbUyFuN9h2QX5TAugwUCwgoGAmd3zKoTw5ebMhh9s1oS54p6dMAUo1gCkUD2EkNGNgkHeNd",
  "key35": "2y62XTUrezr3Cx8tKmmcZ3hyv3FAqFQxJzDTFN9vBLMLGoZU2nakaVxqhqRXcKh1GpXALc5gBJi1uMYDF6v2iZBh"
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