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
    "qKRnexS4N8EA3Pyp9pCTKoZF9fwhags8xC3KRUzQpvUMdMQSLo7PjgCJRGxJtSqAzWRWph3KFwFZ8mvdrS2ELa6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpYxDWYXAoie7nsuKz9easepvo46QX7uU1NSdbiwRozDR5EKTuqaE7FobhThs7annxqDMVcLEUPtdJ2ftCEjx3H",
  "key1": "2fWikkt8XvJ4DNQesX12XA8edMNFh9GCJ2LdDUHEnDobd1HRtS9GxdMgeuytb4zsxXSUa3b1MoEwGSxQcEBeGmge",
  "key2": "3Dn4YnyzERKsFX1kxTDgoyWYPktguaT1mSuTbR96SpfvGx5CHesBtm2nWEPmKSj1ELbtMfYUNxA8hfzXKUQ5Yay8",
  "key3": "4vWULKaAYmY9BzUxx4yVRTJT5Te6A9y98E5imZEhvdaNqpMCrNTf5t3HmGu3jMQJbrsFQAcFiyU9je4sSb5aegHS",
  "key4": "3GGzBFcd1UDGkzemDF82hKZMAGSF1cdNrfRerQqgfTWUrKZyU4yvcWBXmPmRxcLKcKUmqVxgfV8N46GcnxnUZ5tf",
  "key5": "3ydLfHym9byUTjTo7YpF49Dh8zYypiPY9kRByGS4uhShgsnpHE9roVeUj1929S4mN76cmqMETPeuvVFyWTDkjwnm",
  "key6": "2RAGQXrQmePTGytWPaZrtnmTJxGN1WHKAtWHj8xRLGNSXwG9vBXYJ4H97QNNoScoysDCx6BWKLCB5B9XiK8y4zQt",
  "key7": "6f1vWEPcLYxX4kwE2pkii75ZTpN4VPwfpKUifjo67uG1m41UWdeZGvyQUsiSDvXZPGhEYWsr4jZeH7sSx3zWLXL",
  "key8": "Nu1CWz2kJPXxi16gsdhSDQak4KsHNWctpKFdsVvbnJrJs5SEEJAckLg6tWPdLhzSLdEMpLQjargFkeqE22nEb9t",
  "key9": "23YkVp77xvUEncCYcdtqds7CfNgMovKtYMmEcamwdAAPh4usHQLS2auLN2WjWP3HgiNNk9zNDBYCTtcXuMu8ppff",
  "key10": "5h8ZepeKKfoa3ym9bJcZGtwGthaokvPnibmqiHpg9YFhhkpkn2SQiRzHFyN3x6PHCoZ1cr4KfdvBTkmGjKaEHm1g",
  "key11": "2TALDexsgfEkup6koW2RijHzCJdXqhUHVF93XQVrcZJM4HhPSdfDdX9PLQZGzigJCtHQAppaVJRjdeSCDKxnqdkG",
  "key12": "4bvXAmrHiUj6tJj9HDhYphmVZBWbsLckkm6G2ydycA4efT7Ah6uXRj18r9y9k5iUXcvdbR98uMn4LoqgF9twku2u",
  "key13": "5j7cuc6EHbt6PvsxJd32LDMPdAMbAG6WnehYDFRwfyLZQgbwEVuWCZft2zxui9TS5roVg4UWkyyJQNMEThDwTrh8",
  "key14": "2dEtzEY3XNSrx3E1zvRgTSHxQUs6r9kiCu9Xspyxc5vBY12dPzjRwginvkGEeY6HpMhPpMfV4bK3LtK2RKXhY3AA",
  "key15": "UoZAwDVikHsndW6WbdSYUHasKPGaktnt3M5DXykTPeNaRQF4nkUMAAfRrx82Em2Ycsg5n65KMkTgXA3fThyjbuc",
  "key16": "55QgadYbcEvMewiQAZjzpBeWTs1sprF2oY8hPiJSPxqPZC4CfTmbStw1tbePJGDC5vcHdfEuCbshWgfyU5QA6PtJ",
  "key17": "CXiGyj4RBwHAjksfS7Nx1jMfqatPcgerdExoEXy9nsRabrHmiLRjgzwwz8y1yJ6xicFz1QNMZQUDzYPQzsrXRha",
  "key18": "5EvgHVqMfNC9gquZDxunCQHVe2LiKZS7d3CbPKufHQrxbZH2RiM73Zt2tZ4GafYB1ZWzYvXCr4x2H2WfKVb2JsVm",
  "key19": "1oPhW3k4hdVLeH8hoxpqpnFd8dDy1d5c9gH1ke1QeHX57z9A6ymk7vkJDLPeTmjQpiGNkJ1vZ1UW1iS3kRXErqE",
  "key20": "FcFCLWAEQD9pVjLxxCfhVUW3foitCPKGfV5thJHB6WpGqBVuPuxCNF18fqmuRann7ZbDbkX1GXZNMN4wZnBBvRA",
  "key21": "5oVQ1kNzg33etUHJZ7zNV188QMWYogpkdQhXUSNURCYjQFvDPtMtg1aQewHyam72zEWeoQ7fPYAmG6mzV49r3tB3",
  "key22": "2oiwuF7kH2J4nPx8PfgzTdRTe3W9132kTjX1wTEDaoUayv6wT9uWofPMpc2hUUm53g8eDJ5ykhWK1dL9yeeujvUz",
  "key23": "5kf6xYcTu6USek5PAK1rA7gP2cjuS3hSg46iNCQr93q6HcnoAaP8DnPFgK969UTUQeCj55wkmPyQ68sDBwgrfga8",
  "key24": "3ZDbbKoz94MXcYpyEHEs4NfxSubrWp2N9uxLZqzXjBUjP3Y96zd87MCQPbTyfAbZcB2h4so1vfLENxtLxt9P9idt",
  "key25": "67ikCaLCQVRbVpnV66RRuchJLfvSfhBkW3BETXEhNqSez3AM83NT3zQHGuPh4X4rxZGYdZksDHJUzEhzcDkGVZ7V",
  "key26": "53CAs6JNpTyskjWeE7zGyJLwBL8z5wJX4SUsixWzKL27G9A8EEE51qv6wSiydAH6gDQx9jVosLboKCWzgU6HzEa3",
  "key27": "4jX4JrDWWrKn3n1Qer2JTDFEC7BNEY7HqTtS6TemDfhMUQhaSQh51fesR7dBTCKc1VMmzAhzYbZ5fz4a2wT7Nkf6",
  "key28": "5ncXqCKk6qrm8PdmV2D2rS5Tgr6k1PMMJqATwsYgU33Xc3pz2kmbxuTbArLaa6aaCM8FpMKDmXayY1ZUtMg6kPdk",
  "key29": "4ynKGWwhQvagWCGSSiQD1by4ofrmQukrzvNxg7yui95Toa3yV5et6xQFzc7E7m1ZxVPFiUcbhqbZEKSYz2ALgE8V",
  "key30": "47sFA8d8gZjVNoGrTjpKXEx4WqL4uKUUqafEnGGEjZQN8kYv95DXRauFnX5meu9oX1cKNc8WxiCBUfYg67yAjGbA",
  "key31": "keNQEyXq9UjyXsotViRjXZtw9bCZupQyqK8WbdrHzGdG75tz9oHJxqkzNfwKqKRPNNZ5HEun4J6pwJrvWoWYQht",
  "key32": "2x5pqRNex5gF8RsCGxsuFNMbZ2zsm4wKBkiscpDHze1KBPbvWJjmAy2EikYkwZmxqHrJqJT9Ei2tLABYTb3L7o3x",
  "key33": "41oYoWLoYb3oTUjdLibQJEhmkADn51WugZiufs96RMiJoAgf7jChNJa6vyvNb6mxoTi2fiPT4PPXwus1uQysuRZy",
  "key34": "3tKNS5LmfJY1xW7aZ3DjWdZb5VYpJkLf5Tam8MS3v8gYdYCUV2FCFL5Xk5Bj5YCVcsW7ddp3SiMn5Qn5heXPV6tT",
  "key35": "4srCzXXz9ureWbTLH3oimwLTeZ2pjK7xC9Ts6aJShWiffnf3v2SYTFsMXZ89QNwtg7WUdK6pbhj9vLD16BT7jjQk",
  "key36": "4rBnom1ve5HomNS6kn4Juf2XiWvxjbh81ZngKERUZtAGfmwHvp1F8QjsipogMwHLy6WqVENUWzdpQVm6RLKo9RHa",
  "key37": "6kjqb4Xa4uEYVHWeaDamtQvc6b2EMbi4URAJso3xUPwNn1ivr5fSin6qwT6XEWQNTBmdoKEFzs5ocKd1agECdS2",
  "key38": "64sihhA5TY5vniUkMYWQGdXiThUHBLscRFHNH1RHntg1uqtcFkVZFhTPFLs3KpL9VwwBRKPSUopNEyAgAQJM5UCi",
  "key39": "NHG3G2jc2bFYMwPec5tKxeE4cHaW5E1EBEf3S8V9Sg53jCK5fYMuSNtfPYxSQHdcNJrpvcJBvCzj4CVbwKEtLbE",
  "key40": "28cAGXcXtHbhrN9Yu9ARrKpDaeBXgdo5ZJqQ44S9VJdexFyRGXuckbRj1qLw8QTPnHCPyyWoC4LpAA3bVJvcZJv3"
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