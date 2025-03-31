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
    "5xscHBE5W344FsbvimhRwTMdBUtQ49339BTUGD5zpxm2gdpyTvEYcRuQWE7xfgpvTGQgRVRVDWK7Fm7BMBJBDDZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gjn3ryEtjpBy4E3nRNazKh4NfXanEwEbQgmm68TQKtyZm5pqFYwJ3jyD1cVP1qY1RBxUud1ibiBouKjzn4nJFJC",
  "key1": "237ySjqxsW14KxAvQnEnWhwNsExBz9JjqQxeMTwcgc82oSh57rJqD6wyxkuEjrxQYGa8ZG4ujQANdKizqPgcjDL4",
  "key2": "5Rd9MawPBHDWQH1ar6t1k9E1sjvM2ANrUbe2eYLQvBdhDfscxDSoMHaGdbpD2WCYNtV9zj6j1F2wYdZZC5Zm1DdF",
  "key3": "5jmEEM3DGLfbjHDqqi28HuKucodpAvM2mLL5vRg6gae6M93eqRcw5gq91U8YVa1UZBdAsBCPAUFNEPgSyTysWAqd",
  "key4": "4mibtQhG75JvBQkkWRb41gveLEA8QdC74VvGXoFTywo4Ps5k5qDRYR9vrmvvxNprTvWUR5wRGCMzsxCxaSjGETab",
  "key5": "3Ne1hceEm7dSqoGMnxMwMunFFYXK6HhnxwFp5adRZ1aCEfh5w9ZUCgD9acEFWz5q1ab1AB89ZdpzokaebHJKH5HR",
  "key6": "3536rqiq2XtWN3wTJrKp1QZzebVr9kKN7PEiwY3YX6njfGkzhuQvzBz7neTCPpYRspYWqFRcLEgV1Ux7UD7HorD5",
  "key7": "6etGgz8ftQzwVgRk7cVK83bEt1uxcPmo5Nu3R6yQJB1dPzog531epYffvL1r9V3qRGJTbPAe6t7ot3Wu52Xki6B",
  "key8": "RDcYCizx4ZYEBoGHFF551w3ctR91D7JRwYrUdE2vHMjXRTvyFYKN8AYCFBD8tu6aAajW2TeQj5a7h9qbJFkX9GM",
  "key9": "4vUN7ke5Z2HtEaYNGJj2v6vfgGv58biamuoFZF9DNFsxYj1fzk8XwvVmzQDxZi3L8cyvMB9P2QChQwCkqX3AEPPf",
  "key10": "LcBfdUKVyeXNNwgYNU8GzhbYQwqdVqx7fTQrHt4MmbCCQpk29uQB8x9LSgcvagwBubYCmVWQMnxpK9UAaSjFJ6i",
  "key11": "34NUJhsmwpBP349CkvqajyLMTgtpWmHqFjbmxrHFDKLxWmdLRPZUVnJZHqSuJRoyP6dLxcbJYKa821ae3Kuyi5xk",
  "key12": "pPKfGWCswAAqhqT7wQQiExPRGFhyBTTUQwH7YdmBwDtfGWqKaTMEx3xMAWXJuFu3GgsobVuqYzdt3CApAyUmvQd",
  "key13": "384pJbD9m5HcJWfuDv9kxCQMfb6FWHmekC1VECwWvvBap9KQAsWeBmqaBjdLwyqEeKSsTCtRqaNGJjk6wK5Y8Ate",
  "key14": "37uyxNQMJCpwSojECiWerxABdS7FNTzVFPScT3Rp2kkG9oaL1zFkfeJEpJ3eKGUqoiioAcvuY7oeCki7yfy1f7nR",
  "key15": "5pmHdpVs4Qbkc1D378hbefXvNbfsgwgTzkoi7eJrELb5yU57E9mHiA1pJpGqT3iaNb26bysFjoB38tDMTHuwmNoa",
  "key16": "45CRoWjeCQzW5HAWiksNwxy2Ek1TQSASrhZZrfCrh76x3H2kT1LNzH1i2jLQnE8zZHDAgGoHujFgp8bNwNfTDM4N",
  "key17": "2LQaB1TS6Tkk29GBsaT2tHUxMWG8RYuY8YVzr2qRXVdShAhYMVtBWQFY5tncwbf9Kp6D685JXxktEDWdToLcHjGj",
  "key18": "z3QbBo5rwei2VVp9suxqEdUQXxT7uQrEN5dVt2DrcpnkDDthfYP3DhHob5UkSRdrVARWXZ78BMoFoMPxpa4s4aQ",
  "key19": "4bYiKVMf6gsc5XYbnpQyn2r4YzxxNAv9fMqbj1xvRwSRzGE2LiEkdn6L7b6ddAePzSHnsqTR9KWXs7XLpKTAsjrz",
  "key20": "331sHzCWxCgoA29PN9aYQTExZ7pEcjxbWNpDV7fTaKrWyGF3riSKZDK5ax7yEYgM1Wt5DH1wvVSjND8Z6c2Mg7qH",
  "key21": "PA3g9hLL2bwTwj5ZogCJTprYonaF8XqAE2XTe8BJokwBD3MgocCPMNUR4uaP77FLGuTuFbXN3PJvoPsFSt8CoeX",
  "key22": "5snVnhs8rs4svkiRxtBmV9zrPtWuYg6TQJZiRZBADJfDMvoG49GMJQRbS44rcDR5pW28Ww32yTmuxt1sfjswaHXX",
  "key23": "3Uu3BsZ4DRHNtgbD1N3vYRn8WWPSaRhDJYi8vteNYcTPjpSHREspvrwJxnLDaEReASCNt3mXmBVNSfcuQDqrboVX",
  "key24": "575g8Kmf9RgWQAFjif7ywHHCdDLsqVjxScff8Lzu32538c836HfvY2TffLxpxdXzYPs4swv9wGWpQjqkNoorgKct",
  "key25": "3RYxsd3kF7umuyWyRqKrhVNzM28uXDUqjyupvRBQn4iNFnREz7imKkMAD8M3w8vSVUQkhDNA1Ez6frptzQr8khpy",
  "key26": "3sBN6SikSNM7aBTEZPURgngZBzxfSo71jx38SaREofW7t2NnWU4dYurFFgAegHfNGRgYxASdoK4eTV1e5hi2Kbtr",
  "key27": "2btfWVGraMQVdqayD47nCszDNcenxg8PXcHwWRo3A7DZmerp8ojxGi6BqFkFTRUZLwnjUWFyNxixs7CAPju14LXf",
  "key28": "2f2WYHc1EZ42r7Y7PB1qagC2fbQwjhhh9eDySetThj4n1iHyT4Fxu3XqApCvQXktk3rdiPVzbh4UbN7AHMc2dWoZ",
  "key29": "67mzbVFriysKDSNH78uRcr8nJpdvqpDmUwsKJnYFYr2VjV9QLjGvxTQ2SL3teB7oaWvkSaD4qc2eDA75exxU9Tnf",
  "key30": "28QX6RUVZDPcCfBGsQESYnrRdaQuMGcVruSCNwcN58SLyUBxJpuAkf9fjiN2n7sgYauXK2BTL41fiW7k5a1SWLWT",
  "key31": "3pD4yZLDdrYrW6FpsMmuVFq1VNYN9yhpBzSBNctjKAMRCcs1REXAAQD9k7j5ToFrjVth2eWYGCp7aHRn7YNc3rcc",
  "key32": "518s3bVtz2nLdvPGsornYRhuozQwvCTsrxWkA7xDmrySszVfw3A45GJRqju5xAttw9pmBwfAUMc6L8HTnEsbNTMC",
  "key33": "4k5sM7A1mnP3Mnrwvgb2utnqz25kbpW1fDEM5KpnpSADkKoNBXACTM5W7RW46emr8RzGPdLSj9wVfyUY5WcNRVfU",
  "key34": "2wNRBcRiXZJZ1JYtKtCva4avLDw4czV1PD3pS8pMLirnkYJZQQ6xMjBacGNbpw7V9WkW9J8vcBmiiRuQ9pvB5ZRU",
  "key35": "58xD8NF6yK4NDqTsA24MWaqnCkCjGUKeu2g5rfVwSGhpr8UESEJn8xVwDoHFfZNuDoY2MmEarVN7SE7n4f1G9weE",
  "key36": "4j2AXPNdkwSgNRFHkFAPHyrSiCqtuYqqHMUVKK1cyeTUFtiqqicafAMaArmeB4Vf3JsjAYfK8PiP449cHeoYUPc",
  "key37": "5NbDUn592aWL8aeA3nFCzxoZtyVhaPpztVFuWG1nJ42Uix14A9jyE7BGpE1gpUD386V79tQrnuvb2ENzodEVGTfW",
  "key38": "Q9ZGgzT5gbbYgjsceN1oFBTYWjTjk54RurJ2NQRPnTtgDDFkpvUhegBQNKSUmErkH4qPFNP1SK6kEfKBKy5XmTh",
  "key39": "4bFYWkuNYarc5x8gQY1ESfQFwXCukNuvGGFK9LVcnBobPQaEkbE9dXN8kvwRUCoJ7dJKY2r2hj2yC8bjuxZphKVo",
  "key40": "q3C2Etf7yeKnMngaFgBwPptx7VEUZDXQKp1bR4hePLR2mrQeUsQ9VC8FGHfWxkQFR1ZBvVc75ZyXbuzWQfShTu2",
  "key41": "fEEuyRERdg9i7yiq1DCGTKZdjrdLDvH5W8B1aVoPwAb3sEipuyDUuMAmSUYYZqJa7yrTpXv6sJYh3KJCjq3igmV",
  "key42": "5uczK1Fa7zxurHXBCMEqMyvzyRMgivsFfS8Ws9xU8AGPwXxVP64JwSJ5dqNkHkwQGKJcMo2wwBQDEpiqTA7v7Zeu",
  "key43": "29MK7q1r4VEV3jzSXuiEMydM4AGvT1WxwynNKf8FPHf79wvJUwodmJa1wRBJcHqUQjGYz3FPrUDDHEqbWgQo9LCG",
  "key44": "5jvWH4qGJhKQo1RzDGSovPbwECodQMjwB2ZP1XQ2vzMeMmxr7JqhYXGBMjhEKi6YLYwbzXkrjRNp6ZJuxQ4DhJHC",
  "key45": "4sveA1zY5H3mt6jFWa8jNg3cLLbhMpt8YkhuL7Zw8kCdgcY5FQGeidi11FHcnAmoNaNosctU4kywKx2NJQeXwmar",
  "key46": "4b2KxZ4aPhC6PPd2UrdXy421Bav5pEojGDDuhbm6Sq5JCsypvZ3fSZGoEBYcooMGkJDpuNwwCb6RcnWBE78QWEEW",
  "key47": "5ESajbyZaE8ZmhY6Vc2a6DqKR4Ye9DasT3JWmAmg3jxJ9gwyeNfq7CyM86uGSW7JiMdw7rcqY3nvpittjuEM822T",
  "key48": "3pqtjDeYoJbebphWMGVadMsFc23Wct21JaHwMCoW7ajWgA9hVHMfYUdqNS5cYH2YSur3HtDqhRs98Rc2HM5MtZaY",
  "key49": "gt2WoisDPxetmevB4qJCNYkxSPZ6CK6UXhEWBusNtRg9F1J6y4hSsWS8qtpRKN9oiJykyzYVXyJV3P5gsiaLTpV"
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