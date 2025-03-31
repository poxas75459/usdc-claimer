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
    "3mgMCFH1jMsiM5EGEHdzHFKcWHkvevbgZGyksQGL7iFWAz7vFEMuWb35zJHoxuCicDPd2AdRMHxmKp13oDihMejB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394Lh7i8bwkZayvw8hqpdMTtrU35nEbQ6G4ftQXzmAAisw1dmwifey2mEzTbJwW8BJphMVXkYaYYZHAcrHo3nCMW",
  "key1": "JLntdCFXG9tLPjJU3FvmsjMyUNh1V15nfs2n5TuGSCMPyRfs9rEgM9Vrc9YbuwXBoXxtnzoABmvmMfpe1jP1wzj",
  "key2": "36aTbUj1nTAUbbjpdpxr1rDkqEmpZ4gD7cPRuzxJScErqky6HtMjYyGKPE3VBQwfFv9A3s7DWoPrbytBUbbnfohy",
  "key3": "414WkoByb4VMfbNNsRdB76ksTcECDicg6wMPa7DhAvwrRSXvnhds9H2NxR5mzUMUCyQZQmy2mtfQg41Sucd8UeCq",
  "key4": "3uTdXGY5WAH88Tfc3gmtM2XC7eAkMpQ944sfmUrBCafRYixkfHqVuvE7QYD2SVTqUDqZN8aUU6yfi877gazPjhpU",
  "key5": "461ca72WBokLBxBSv31pxiyXqtSE7JRGEY6yiGRL8rDtv5Qd6k5u5QUTNhifBWAS6ed3XhuxB5FoeAJJNJxDBw8v",
  "key6": "c5oZvJv93nXPHoJAB5c1qQM4B1f6ePqEFtm6NXegZ4aYBgRQaZsg2hPQVzTrpTjwAK4a9sKi5RjaW26WZFAMRiT",
  "key7": "2LumqJEhSTSH4HDeg2eXpqytXCEuZuw5juyRazdx9x9eYvN7svFK1kWHpUvRVHuf1HJ4kVQohYHHHL5TZt4GWxYP",
  "key8": "3nnSvxDjVCoGxY5qeZWH3rRYwXkF1J2dRjWCW2tQefZr9Kjb9qDMJx8i7yqLLx3rR7z3igkMJ8GQxE9D1E6KVirf",
  "key9": "39unAUAmaSpdatkHSdZCZtq2apdxwVHzn2ivXZbkHmxvg4ZiFVrkWbTSRCMwrkzU3aiscxX6FLkwUsgi7pnpZe1F",
  "key10": "3CaAHnWRNnRfDN613C43a74rZnwpLWHGuDDJ8ZcRSVGi4RstavbJUh23JnrWxsk1wNCukKkD7ypvw1zo842abqaa",
  "key11": "2dRb5TSCYEskn4kr2GUPaLrKDPj9Da3fZZYxPoJhBCnL7HPyaZfTRbRPkq3UdgRsfoXJoHLvSU75Fe6qoKEHGNDM",
  "key12": "5mRTh9asz9iHzkP7LkEoogNibXitESfVf6NHN1aesvFYerKtkQddCp6SHU35fRvirMEVLbtYiirJahPgwFLfU3YC",
  "key13": "f8cfxske4YyRGKN3Uadey3eAztj94bN6X36u5LZRqYFE9G8X4X8F1RK8WYLV2DHQoBoErVZB5S1LV1Zbqjnzdaj",
  "key14": "1xH1uDZsgb3wKc23ozD8GU13X7NJt6CuikbxMVmKjEQb6XyyvC3XgdPisRooxsTDPscYoHg3Vgw9icizqBfWqZS",
  "key15": "3AYyoodiNDeCYdjvEwtudUZhPq4MGYPsfGVzAh8dvqy8g74DJQJxfAXFco9gzADCpF3e5gpsZNJqkr7eKPuMwBT2",
  "key16": "21haer46Gi7EARUz1qsJe4A48iVRb8jybpbDXsKDbajWPA1bk2SPVY9PBJ2ZP8LxWYeFWjHXxDYKsAfGzq2Y1ecF",
  "key17": "54bhKBq4wFPy2CFEy5se4de4LQqcPVkHKMNYSDEq4ZLwsJv7MQTNafiLWJpb54ewKKKf93jVj2me9sf6SmsxD6H1",
  "key18": "2nY8S5QK5uqDic3bDeTXbPv1QWxtsFtLZ4GGysmdXBxUwNxXr3K658HBm8pbCXK9Y1G6zSeTEqYYozbDZpY8DgVr",
  "key19": "41SGiH1iivDvDUZNejFs8FapQFSheKRTRanN4KW5mDLWkPMVNo2o2MCu2USDr4JZHJShdShm5G6MLLmw1pLtpJzm",
  "key20": "a4exN7XjYo36a3pFYRtH2uEfuxHMZr3hK275goSvW9NbbjuQYcBGryc7L5r58vwm1cpYMy84z6KvzxTGxg4TLkk",
  "key21": "673muvAsQ34fV8vY6hCMUq8WuJVA65KhrD1PJWX2vtq8PKWJ7m6JsqS9hndSBpNVY2eNwonrxoBU82DZGM2XBWRr",
  "key22": "3MeDZwoUYyyjDRxxNSAu58qxhK2PKg5yQg7452M6pSfsVn3Pk5nG7V8SazLTFrMDrvrU9zYhdH3niqSedKdAWe5S",
  "key23": "2bC1tAsLZARRc7xMXuQV3qZf2AtAUDFNaW6nSrqxpZJPrnXV6oo4HNDLgy4ojbsqaPwmF2gqDmH15Re9WaB8YGhF",
  "key24": "47pWwpDrSnXQtYZZzDP1CfCZPGwfDMF8GrLN3vJQWA5qLFFn1xTNenmzDT9o9iKJnuRK6F6SZVa1Tn8TKcby6pLf",
  "key25": "64VbMxBtp9tJTtF8uh1xYoJY47RazTkuLiFisRCkZmbVQ2VaiEDPhDphFMCv3ofXMabjKHJBPNSUQ9xsb5EhWquq",
  "key26": "4ioitmZbKkxtZDRNrBQKCavDbrdYyHV91bG6WNFNB3ZE3iYnTcpJzQRh9DdQHCNCE12kYVHLnDMreePJwwhXdKtJ",
  "key27": "4s8pFhLuyc1f4EQTjWC6PahQFsJg53ZPHPnn5W4vSMWH8GWTRFRvAopFW9cGpzFdXMHLryULqj44Yf4EXcVPsZtn",
  "key28": "53Qu6CiRjMvt9TvDVeXeNgD53fuBhiEd8RmPGuu9G5pNbvjUM9dMHot84GcbhsrZYwdDRcmUfRBiCvmENUceKhBR",
  "key29": "5AkwNAPYP3Wif7zqNgZksFNjLhNRAUvaMxWkfTdCV8vMSViqctphgshFgc6QUny7HLKcTega8tRCqTChTShDEWfn",
  "key30": "2ahLTHs4MB96XV39EyroScL9Q7xf25pEwqLzraqVJPHAQFwkXeS4RTf9roQzsNMs4NT5RFtefTHkd9z8j5yDKfty",
  "key31": "3oZhTaiJpdyAwLjwHiPCj83HAXP1BuavW3bLfB2fcXTAjxMKBt5AF9coL17J93LRmStM3f2sdH5KKF27s6f4kdXU",
  "key32": "2W9EtGQPMYHS8NfNrDg8NG1xJYguTMoWqCtfMhuvgwqrKu59rvydntUM46ip7zG1dNgfBjwEe1NWxmCMmBnwcPzZ",
  "key33": "5CymjF1CRbVgiycKCxVDVKj3bguRjYtMiiEY1vhccWjDBdDq4mtEc67JBzJpJzTQLBCHpyHu7zAFngku2kYKSUoR",
  "key34": "3K3WjVKqSeeEnKbs3yfgoYGGJkSHu7YGPNqT5GuGxF7of2Xj3HJFUXMcHWA5Lc2JhnZyrmzqHMx5BjTdCZyNtrC9",
  "key35": "4A6J4pkvYrhcFmLXDvD9NM9yQRkZ1kqGp7Wp8TBXZ3HteGxC1UT5Xq4hyzjxasiTSAUSRE5rKTJ4FNoACFcH3E1G",
  "key36": "F8VowSPYrywUdcBRjWnxURSBGbMgKUTE9YmjTmwD3gyk73xxWbHkp8HdK2yfgfx3a98M2CVnqJPzy7dQDLAU5Qw",
  "key37": "4QvinMSP3CxEohMdJVGdEY4W3yPvkzNX8bT2GvY2UWe7z5ocHDNee44bzMiZGhDc8Yy56PgTwJHC26nNS2HJ7Eme",
  "key38": "VdiDiMPsJAdVbhkUnSAwnfYLdKh3KaiwZ5H6wmepw8cEBofoiEUUbSvkaH71EXjrk9u4VP2YzGDxeNxr2YTKt8r",
  "key39": "2xnydVPYMxyRBCdbRLh4r2pUYPnJ6dVkes7qDoiyPQryqeBH9UmCBzBRsJxMNKZQuCpUPRf8b2gXDdzN424q32CW",
  "key40": "2HGasnANUC6T6YDn92v1vM613AWT1oFrcQEyuMvQnznZ9xiEmgQSFdK3sDE9AxHDsSjmNSqYbUm6SWvsBdFXKiXQ",
  "key41": "4HD7TWzbzrbFgg4key5W6BZeN2aEBrwtVcyV8HFrZKR3Lg2DzqoFtfxQCw3LLvSzEZV6fmyfLRJ7xtQMTsyV9Lef"
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