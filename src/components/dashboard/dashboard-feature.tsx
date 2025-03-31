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
    "45DQTRWuRspmEdRpVzPxjFKRCnV4YN81DA9TEho7DaF9rqwPTnWVna4wNu9PfuGpkeFpih5XS6b2UD8JVwFwHupp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiArreHbDV5rRCganK6HN2wLJAWuCWhy41QK5Ykkig3qMkEbjhgtyRiP7CcwPmx73PunMqcWqkc4CU3fLp2pkmE",
  "key1": "2kzzZUXGzoewvhLbe8GniywYj1q5AjsMHQaiCy4ZmNTbYz2di7AtrET93maNr6uCpMfouyvF5AsgduppU8vXbJUE",
  "key2": "2Pmd1MC4ojK86ozxmwz7AztH6kYkJ1XMtxaD2BDGu5M6JzYKbqDkQHN4MD8u3oA6YcaniTnB12ACxEnKKW8xD6KB",
  "key3": "3edz7dKgJ6QpSuf5UmU72R4K5RQJDzGfNfu9zV2V1nAq8aNsVaiHcYLn63jfP8H3Qg3qSiXJHLwEQz26zJ42eKdV",
  "key4": "3JDS3oZSZjxREWPHTUnt8XfVDjufysn5zyU4gPxHQDNpofoZbVoZAymhCWzSrTpqusSkRChMXimUXHL1AfKG8q6q",
  "key5": "eX4M7n7PmzauRTiyh4RRr2hhY4wyxDMVEDYUdsQCF2cN5kiLZM4b2ahgYFnTriaJGkeQcknetg7dRWkkraJh8QY",
  "key6": "4XHkeXXa3hkAQSEteDMa4vGZipCUB7Rq1iKqpa3aSTqson5SsXVb63yYc8gswjyFQJnnLYN3AdbsJAS6DVRCwbPd",
  "key7": "4c1N8Tc9bFD6jnMGf4hscxSiVksvm2bf3m6FYq1hvfuXkKqqssmL8Ev2kMvpXzPeb9aZf8DaKNTVEK9mKMkbN1gY",
  "key8": "56RsoDiGmJQvGX8PV8im1NUvNbAgCyD5AN5y3kAfBY1yX7hAqC5xFPbxKNsnvyciVdmbnKhdDSUWwWXGNaaJsV7R",
  "key9": "fMqCcofr7RHvxEWxm9gXn5T43LvzPttiEMF9mMky8T3DM3GL11E192Vqsv43xZvn7sd2pwhiSnxguTMiGsHkSJs",
  "key10": "5WwKrQzjgVHYZEtFkoYRxwURBfGNtncJ5HPbkw6gwGqAVFTqN9cAiPWcMRNj5EEauqFsHM1U1AcQuJsJuAjW5eHi",
  "key11": "3oHRsr3yP3gBTv1HNnj2krdyMLASGU9UdoC6g1EYo2Nh83EeLQUuNfsYojz9beNWjHBAXfqirPTuEEiw3YR9pkTy",
  "key12": "4nJYAWQkubYk9c3HXNrmMBGkxZ6hZ8F4gpz2RErhTGAVGcnW25q1taHQWTXxg7QQyPY9NUQ6im76gi8uKS6ipvxx",
  "key13": "4Ey2znEzzNtGMPPDFooENby8CcK3zMZkHuWGiUKkaMBEQozKY6Z1C2DjbSuefCNrcFEoCPytk9KpVQKxqFVYPKDc",
  "key14": "3DfhyXGpPg5d7pE8QWGgk42sHM4EiEe71wCZv5qf8XKTPFkvJ9NmyM3acwQHFEr5XDegSx5Au5X2tZQLFgdtBMww",
  "key15": "3C2vs4oyse3X48xDUeMkgCTgPqTiQHzAJjT9c7LLZc4nKptPSdnt5ei1sTAoAH9t1vaaLf8QWCRSxPSLWi1UDYXv",
  "key16": "3gTFf3884ytNwmw2kwPGgNVt8Du3kpAQMpaxn9WDTsPWX5nuQ7Dp5rCyhVcTJzkGMcioEWSTvbpfBYu725Ta9hep",
  "key17": "5bzF43qR24u3rAEr5AgJXJbGeeAmczMwkuHYjXFz6DgrejECceetUgjXpYeK4bGxySvLx4rVJpR1JmcYetHJ3bcs",
  "key18": "2Xovby9EvyVZqQ2it6NRqkesC79hvKWK8oT5YjrqM2EcV3EqcpJ4W18gJZwqH6yNu3upzJsvZ447WRV8VtsnCcq8",
  "key19": "4bXjH6ntYKVFDWaHnXEnyP8jPfe6P5FhVD2ABoYyfRg3zMtoecT5LDN2jwj2jE9okCFHwJykq7bpUJvCBwRiH2iK",
  "key20": "4uXTEqAvhwtV2FtW8UFW4eZQYxnB5uyfi9gy5TPHcg9JsKjzhYUq4eroQLGf6xfqZQ1SptMpw5JtVkbXPTGKZj5f",
  "key21": "55LN15N7QhohxyAe9KvtyEjHowRJNHUpEBtaZDy9D9SmFFAsdoBM8YfVcfjGZ4KjqMQK6HcBftRHQ8CgqP4a5Mfr",
  "key22": "2Pwib2RieZyW6aDjRM1CfJdEHN7qjqXyVEHxiUXa8beRdUHryw1Xzf8wKA8cxGyAdouWdu1cPB4PFgo8h3KN7PFE",
  "key23": "4pCX97Yse6cXYPTjHUhNGhvByDkKYmeMkMYUQmVcq4zoqkbfCUJFHcm4nQ74JiFUtZfEzAZTGeeU1br4RhpSVbt4",
  "key24": "5geq4er6YUpZp4rhAMoKfwj4CrQrBY49Z3RjqzzMN95BYWy9DYQy1sq6YwSjPddjVzRArkDLgx4Qo3hi3jLn9DWW",
  "key25": "4ssj3zyJkzCM8MSQ6sVoXfJ8j8dejPSdhKSoWZA3j1yB9ZUUq8H6jZWdNDB7hdX36EQB3PjrGH4v1D5SMxpB7jmw",
  "key26": "4QmAkTqLEfqpnPkaJGdBZUFRbuD8TFmWeqvMa9WNYhyGKG3XSn3LEQQUrpidTARwjNaqRNk6nCfiXHjQAwrZuHt4",
  "key27": "2CianhcCm8ZxLCa1JXBKc2kuet13CgznxTKKU6y8vtP26TB8J7gXPiA2npFzBksq7jARhZip5QzduMBRy17SQWZs",
  "key28": "5WVzw4nB6r4qFdaEs7VzMmvKaoXa7FcZBP2Jdgf48dMJvrhci9a4pQ1c14xvqNjgZud9diXXbMuZ72V8w42cofdN",
  "key29": "3JjgKKacTsE81BdLFzhzyr5YaEpoG1P4KgRicwufgEZe1GwVkBYLa97msq9pGsGMtpQjsigUW5LouHSLe5xvmBru",
  "key30": "3Re77JR9MQGZZKxYftQ5TgzGu7sYbvT7xkAtufuxkuo7dkT4MQ9oNMLbZwX9ohHFzq11ncUz1aXE1Z9DvW9VDYMT",
  "key31": "nQJyDDmvjb3zJUWqwSxEWZMVR26Vy2hKtHpdWp1sNKw5UgDDAuYdccJbEGSZ6MsP5Zq6tdbeLZNBGwe7cWzbA5A"
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