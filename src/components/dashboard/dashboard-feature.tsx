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
    "33WMQzgZHdBRKgWTAEDRCQ1k7PSwnDYSodihi8PdLpnGSr9NMykZNugN8dNf3g4MBkYV76NRSUewsVsEQL14d4nN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvqaxBCfH6kToHDbxnkPSJqbMasJSNgbca3d2ra1F2Cx9QBQmpAdGySMPufuzHhEg9ieHTbDfBshv6RfPiHW6Q7",
  "key1": "3SMSs6pV3yZvosNwqv9yct4P81xgyC4imCBCymrxGKfsTRuAMET8fH9e5AR4KtxoyAJP3D9i3ykyoA2QTGJqhfeS",
  "key2": "3DeHiutMPR5Zp9KrKRrFWcZhBA9YkUsnBnCRqvjxzAQVUbkdFyrMnZum4gPyEnTybgwFe8FidXtY65yHEBvTFvRv",
  "key3": "5UuvSbtHWxyCr92MJ4PpjhbhSkNSnhvU83SXTpP2QyfG3S4jCSkpjeVRY1KCQNE8b3Dd7PDqYpDnFyKm9yeZ5Hzp",
  "key4": "5MLnsHDSScSNR9BptxKgDEgHzoGzpdcT8TMEEQaJzuyroe8ZPH7UhiGVG3iKbRQkY9USi4ZdBEHkTYLRKEEaawKD",
  "key5": "4BhVXDQACuDvo1jjPSCeEYfbP9qQn3fzunV3K13KhLPX9ZV3DP28GeX1Cmv278rxW328uLNiREnxRKtS8oT19zVL",
  "key6": "4BtXnMb6Km8d7G6xtgbQh5aM6a3YmYRvHDMjjtNfHGMUb4ggfTeSsANL9BXcFhYxzi54PwiC5qcrMwFaRikQK8xj",
  "key7": "4CTPneEwo55quzr1827v3hmfMRG8nkxdAECW1yYJDJLuvHAu72gPhnMCx1FjBaR62mnCJV6pWfDKFwq7PrP3d6Ys",
  "key8": "DqUTjaCS1GBM5ujNhX5sBH5SwwZ1AqERCBdi7v7iFKTua4ktkfT9sZvnQqcoknHA2VNjvmHM7BPkf2yYUVhjXXs",
  "key9": "5ZcyAHMmuGNPZ2cdfxD6nJCuEKRoVuyJSn7chpA7GB2imfVaDrPYUxVgrdYXJgvGev3EmAjqEGB8VUYRqLXymtUE",
  "key10": "4qcsGPA7HTTGwoLcG5GJJe2RpWqsPbFDK7WZaR4uNo4TZ3WATV4GjB1t1aeJTVFKdEpaA914aYNhiXt2xFsZByFg",
  "key11": "4WP7GfXHYGtmu4jg1uBXv8HKS62v4GaFymoCGZMtB9uktgeu4YZgcerdDW3GyVfhmGgmq5aJsKHmghz9hJVovoMJ",
  "key12": "2b6t7XasehgDse5kHjeqJuZDzwNwXag9xQyccv3n4fPBGfnr9cnpxETG9ZWFLcomN2JtYgxJVo49uTL3Mp7UkUH6",
  "key13": "392KkXCyRuHvBHyTmyMddjLvhv3Lpz9HU1pGRXzWrNazfmXw8Qs76M1UQnTr2si5N8mXyP4WsU319U4X9Jee7LSq",
  "key14": "2iG7DFUzUZBr6CQCuACsefx2sY1PqozDkPFBvRSMxsseSgjmcgu51Q1T8a8YtnrLb2tBkkr7AXkswc3gjSCJwKQJ",
  "key15": "4DakRkiqgvW8Tek2Ww3sEZukDo2fDsZmdGZrnstixnNu5kjE4cCSDHB39DtEGJcoxzatePF1gkbWB5WsXeYXJxWC",
  "key16": "4wwPveg2dTyj13JwhjBimwBDxXyaCzyZeCZmenUj3oPh7oZdbpBsWkYtfZaBu41Q4hnzU19mYaYBctMphXgbkuFu",
  "key17": "4VpxmCLMxp6dmamEPrzXtBPjBydyHwky72H1fD93Y3eme2gMWCfNBq8WtSko8nd8bwyjCv7aKRm3jvoUfB9YJsSs",
  "key18": "621CaLjx4Tt5cfPyzpmhLmFsgi8J5F1dLxGGex25BxXQn58daKG2PoiizDXeAq9P7R7cSRcB9Ztix7jrA1XsGWQ7",
  "key19": "5HggPrGzmFrGBfwJMUjm9DAL97SKx2bbnduJpcam1UHUd5GQptpE3TW4Gi5YQR8m1RbAVztKPAcbE5Dtg8D1vuio",
  "key20": "64pjsTbjbpBtKzEqBjMGA4gvVnohG6B5cEybjDgzhZNgB2RuMTyX8sBAetsHU9SNX5PFRE5rYLJiK1pEDFrtz7CG",
  "key21": "2JdY5ynRfnvPz6QEabLu25Wv3hxAgNz6GuPoxV6L1p3Cz2jvUGpgVydgRHeYrvwPqVGbMTfmDfDBHpidTEQeZSTt",
  "key22": "5aK9yWhn1esYZUQsiiMhBjMVH35mjcHqtwHSo88E3HvDMbaF17xv5gUtk3xWPmT7WcPPSi2gkALXvdMx3nSupNLG",
  "key23": "3pM2YmMhoR6GwgNzPdry4iF66XRv9EM2MnPWVx2kxcbmE4mAwasnUpnx37BFcC4NfENW4k9h7fU8Jhi2BdCx5h4B",
  "key24": "563cQxWyjgHpeNnuWX5N1wJXUZRtys9XhcNMCXvyHWGUTtyUe6QEPNia9apKNacWaJjMQJ3s916q2Yq2a5ffGPjK",
  "key25": "5Z5XNoT4Xaz6vRpN9urnEMQrgMBwBhRc4B4Hf1UKu2uBBu7MHnLxjXbU7xFPJX88wnE4ngwVKjPsRibSKf1DFcmG",
  "key26": "U2VBhCQaakQ8NG1z4WsRuxDcDsb1v9H9b3ztkxiHEdoSqdjZu8NduKiCJKQjBDBN65gDeYhw7pPp6o9HbEeTHKc",
  "key27": "353pWQ1TUZ7QHEhbxGtGDYkRUsKAcqU5AgBirpU1vRK2ubaBDksRPJc9FpCKYQgw8Lx1hpau8dz5vDahvpYphZqf",
  "key28": "EMpkDi1G7CiPWLiP37kXyqV5PiZBiRmCAPxvExwPKhW7rg4YBBbwpPAQAD3oaMtu7f95jFPG3zf7z8rqudvh92r",
  "key29": "3DxsUag4TntCNzBA78RGFc4rtkaWH7KUwxytxKxswPcK1Gxy9z3T6XzGP8fe4oY2AUuV4k9tkSXqm1s6kXMaCPvb",
  "key30": "5FAo4AzxSRHPQZd1iZzZ2bgxS4AW8b9QjbeEKy8jbmpuScyUWfWi19Z3bp4kJszWLcmb2H6QFELnh8N5gNxPZ1wD",
  "key31": "4ExrjmMKujC7sPmd2fbSeTE9UDBjArSzf7Ab8ExXoxND9TWg9KNow8YmDmua9tWG5X7wX4RJiLrRMW3WUY3kUXNY",
  "key32": "5Doui7yFyvaM79tLENhNNW77U16wEnB63H9mmdaMz3xp3zwwM6QCw8wCDytbAJNTncNYiVGbT1gVd1L6jfxm6BWM",
  "key33": "TAQrrJxDMoXSkUg81JdX4snDJr3nVayAXhqW7HxV9Qw8KnkMukhvE8b7TwuYTLvUjM4Qi4pnpraqCVjhS7JQR1t",
  "key34": "mpvzVBhqKpmGNf1gFpGpvJ6aV8GQqv8cTYwWgrW1tmuJf7SHMhE6ho9JM2P6hktC62PquynVX9CTmd9oajgwfBe",
  "key35": "4TgBBaZHkES3sYUXtbiPsNH2vT8r2G4YYNTLM3gaZcjgnG9THhzHnmW9CJ1jteVmF9V6bJvAnf171H2HsgMm7LNh",
  "key36": "44dqtEk6pHzfWBXqH5mcqb9zKgB4EtSoZKkfgWToDPJQEArTxjNqHVzZGJR758BmwPerGommLyjC9e64q8ttc55",
  "key37": "43FZMpqATb6meRYedC79SPePneR6JEgh8DNXqCdjQyHzdjpJM6D2XBjCduHxfQ11HK6MXBVYBLWKojuzK4dtaikz",
  "key38": "3iGeUeAdjx61VEPz3LY2KMgRFbFWVZMHTUoAdCHp2z7k9CXs31Jh7Y5eqGUtgHdWXjZwVoavDbKUkmNUccpDPcJs",
  "key39": "41AVggTbya5pT8k9ZvAAfCTkE2VuLaoeqoFg5j1iKBYadWYcE7wSup4ZHVXN2frKbPNxp7yAxRHeAjfEd7gLt8Xj",
  "key40": "4gByekRFRJww96XAtHVBgT4n8jhUo3NFGbYZyMrY7X98TeYi1qs9zrUWu2SQfNCK5BMhZGNXEJ6RRS4gcGzwjb3Y",
  "key41": "2p1jJ1Lvg4PTRroeTcp1zHT4rGKySpAt5oAMvdfCmMGHTkwwxuVSiGEik8tSjmwy7PbWxn7odasLu2H7ofBxwCNQ",
  "key42": "2rCMk5LxbGteQcECcWxHN7KMTeaZyPq985josQUE8nzxvqC2URUTpgK4SS4UEePsSrRoD9fgmkvXiLvYpGW3gFxR",
  "key43": "3h85gADw4qi97WfofDfdfahi3fNqyLAhfMxPKHyTpVuWo6GWX16LkEwVBPrumzjtVTEYuABAtZ8QVnKCD8f21eWy",
  "key44": "2PMocbUBRpm9VfD5P9YXrNex6j4CTZQU1BgL48d33t3xd6aG8Wp7LRD9iKMVf78BR2cChN5nTJPSutgHAxUBY5Fw",
  "key45": "5k7CDRasiYVGN1WNFK2RUjB6K5R6X12kW6pWvvHYQLqScNcBXtcoj99a9bQ992ktUciuTMbTEdUh5m89jDwv5gbp"
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
