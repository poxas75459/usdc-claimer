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
    "55KtdoDRUH3gvpFcMQm1FyPTT6FMHvciZ235iwx5HE5qmD8M4HX7MpVhJcYshbKgqgF82nMbJQv6UufBAmxw7a9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29dojS5FDJCMjuSfpA3wNWZ5CepBnFWwHpvLSjREPpkeVHfAtMVXKXXWCHcJG4Xs8kPHLFQwEdarXaEyj9PiVpSZ",
  "key1": "2Mkx5reZpfCEEcGJ6nZ3A9HGnbzLQG2wE3ULHVFWDn7KeY9G6q6VdzD9rGYw81X7WvmXfa3VWMfx2j5Nx7s6FcDE",
  "key2": "4dgfHDqbxJMiKuKr6iS668qN4wkb8ZD87BDyMTWxrjBjjCB951JqrH3XTNJJUou5GsW7WECsvvA4rWNP1SgbsU39",
  "key3": "a6ZkMvHaPMaYVj9HiLLjLNL2ugZGzU8qthaxCK7rFt36JFjXhckPAiuMtKHj6qFFj5K2pfe5PsLLrkFeoKPiyau",
  "key4": "39a8UBz2VWZ2BwYS92VWvK5sQXaY5dXWbJRtnuAWvLTiBv3Dr9dNdZ7crLj9j8sjtAMqnM5mk7wwkMAvcKXf5Why",
  "key5": "3JcYwP6SHffn2PctAnW23TXEsVNHMxwwPhZioqg8qzvczMXifbW9ZWFmAMzRBmeB3YzQLM2C3dhe3ZLedFpoaHLB",
  "key6": "3gkzga1pbmt5hjzyo1sb1bRwJPwyxT2sKerbzbCSCpTPaRkpyDV3iVPUVs13aG2LFv23eSeHkijUq9ftHVFgtgh9",
  "key7": "2FTucCWofTLwNetWibagjcnqZLgx4ZotdqG4Tr8uZxwRL6s4mkGgsYwVMhsqBuo9etauJ8SqgUE4wxGY7HYP4Zmb",
  "key8": "4HUuuSp6LnVNzMDYSHoNPcx94XEuirWFCeGSHLPzbaWUeacF2LjMWrKTiE1myCbuYDX5dqbJy9G6PuNkNYzgoVRh",
  "key9": "hvfKFuQnVeZJQVKWCzhzoE7keT7kTfGby68hRqmJe643zzctWsBHaTsN7xQwNXT9Wxk1ZS7u7TFTznWQ36SXrdr",
  "key10": "393VwxmHXbvRNWSHMNEgvbnJksKrcEoRU5yNWAYmK5MgcTXtsHHFWFdg9DsF8Dwt6ovKz9ciXDoFKpwSkgMQH41y",
  "key11": "2ZM8gkrHR6xqSFkZHPFeEQ4CiFteNevUeKkiMycy92UNvyacHo2BpY1bk8JfK1ETsqLQ9aGDEYq1FWvYGsEie9WL",
  "key12": "4qtETsEzTYPDVEgnmPZ89FnbVzuv7a1ftDES2BmjabeecpbWdf6bhVrvXHPbQLxDQpTGT9cavtB426LCjeBxua7k",
  "key13": "4bHsNVUBtenMonNuSKDogQbHWEBN9hCEECRVsB6KddT8Gtjyuu4noMrRwf9ezbV5gCJnpeghKJhgerd1PEQq8iAk",
  "key14": "3hUkHB5ihsWiFqxwfowFZLnJa2inUKvb1i9wK9sR2A6ay6DHKvvYQmvsYqkHFNvcnLVQ2tJY2xViPo7216Aii1kq",
  "key15": "5ypALZ8kXXuHQEtfLtrjZWFux5QbQDyL2gExa2j5TwbDxBHkXbb7CkembCPUwLQtgaqggpNq8gVrLcfPMUVpdMe8",
  "key16": "3GFWzAuSgeJcxBfUBooWWj3skjd6NasR1FHaYk5hYRsZtFkKeuNXR8WEkz89XuabixAx8D7aXdGrUH8HJBcxP4YE",
  "key17": "65AbRL9i8nf9e7b1Y9SQRg8uMUakxSHkhm95brhmRFymonGkGtZb2YiMUVd3j2ZMPGgEQjohf3zUXZxW4KFaCYHy",
  "key18": "57mkkznFXRtKtY6ssCdBtQr8Stj2c97shFhWRPqoevSvHgB5A5q9TvbYYwoo68ABX7cyvPcYTbmNC2e33cqQTqbq",
  "key19": "GCXHpQxQ9LybDJzuFnTquFbLmBv52epiiQuQxN45qmE2CFGKn2P2iZEFJbQYp8wcuCEEAvAo5pzqDPQE4WoLTLU",
  "key20": "32arQqMwh254DodbQFNkjRuoEh2UuYjwG3x8avKvuKNmnrvDk8hktWwGLiit1h88vRfprzkrFm4CR8hShUH5cR2b",
  "key21": "4r1WPc2KyC8y8GjBbza9XkZhCSB3BYZyw3RBDiufxhuHPJYPrS3DiQFJ53UW647PRiRXhByN1nUWtNGfXYo1Lfft",
  "key22": "3ZZtyBxwZNPHSk6ZhZV8jXY9LRNJCyoRn31qg1C33Ac6FLSsa1CqKgLjegsJwTXWbrqmhkvreo4r7h8gk7CZ8g25",
  "key23": "27RUtZYJYD79HYHGMo7AcTjgnjBV9AN7Gmgb5uJbECYcgoN1b2sWHTq8JdWWzSKPGUkT9sGdG12i4C4am4JitQ1X",
  "key24": "4xpVsV7982YsBwqxXEtatcmYF23SKsvfKLHaA6HZsFVg5YBPEmKcMYPv6iXG4fX63DGWFNHfGvQJbJ8ZDi9yGsUa",
  "key25": "XcgMBxsDqSNPnwj9ufJev8Kpiv67Z8hwmGRCCZDqRH5Upw46Vn6vnK81hdhtApxmGXvrNMPHSTwCvE2nREDnqkc",
  "key26": "z4EdMktyP2cpDXvCcKHm9Rp7miNTUWxtZp6TeTbQQowJdLEYWXGpyLZdkB5R3Ns8SLzRgk39dXeUbFVzwNiqNNv",
  "key27": "aQRdLZMsDazE63nPLKFuJd1AK11fp6bENDaJZLDeTE9oMeJfHq33phenwNFF6jFjbmFoys6tgPrWu72rJazcfMs",
  "key28": "HWHvNnStijLY2hsBHqGmPsdvbDZ33QX8Hrmnzfum8piyd2oB6CaCXKGrMojTSCNNx2vFw3jt6RYaL1GdZQtaKD3",
  "key29": "WkskFnbD8mutunaY5aews2MNqngHeKsq8JirPDpQ9ari8REbhqy693S3CYubhRK6KySv48xNYakNdziQgH7sd59",
  "key30": "akkXiEeU9p12apiGRknwTsZWQzJiTy2ns9uoDkmLBe6zehubNjExQJDMdpnGapXPGMcJmxJ27NRxMVuXAoA47UZ",
  "key31": "LHSKfZ1Qdu5zFwLxANT97owUwF5kei7zzXgfApB3JWi9c5V8wbz2KD5K2TeXDyQE5A3cjYQ9iucPqoAaxotE52A",
  "key32": "h3NZEdtpA3Rc7SGgxBh8RLgaHgstk4eBYwrCkqFUe2Mpgc3u35LkLtdS5TGYRw83NJMRaMzgyt4nLEyDELXy3sc",
  "key33": "5ebBUaQt55v4uSsSbrNZ3QAc5GUDAHjgLLgRTR6vcMjoJjKPAdTZmEQgQBj8SJMv9ntWfVb3WzeMgG42RgafHjqF",
  "key34": "Kd6Txtkhbrr4gx9aP2sojYQrh8anP4ZLfdDHgrze8s8kTmJcMc58esWZgW7ERt9xh7HLK3nLzMB3vPPCvnEbycg",
  "key35": "5tg4EymKnMoVdnNoDfn5KHLgx44hyiCzFvUskee5ka8apSj1dqqpBL2aGRy8eS2KKjHs3qG2SHy5G37AXDXeEbwJ"
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