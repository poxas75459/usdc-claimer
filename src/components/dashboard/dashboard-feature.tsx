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
    "3z9wEKVNFbRxF6FkcdVoFDDSvHW7f77YRoQNxjgF46qn7yLKWxwHabxugRLpWUSphELPJkW8UxXgaTqFq1QBmq1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pLQVTciZvc68eqa8SmLeFuKzMtESMbhrLN465wtFBYHzU24cUt6LFew565msLv5FJfVSomVtHmVof8hubHVqa41",
  "key1": "5ymqUr6SGrtUvrMkdAtDMs5aeuGWrjHQNwdGWsNXt3mpVrWkEj6NiYRj85DGFcDf6XLZNtuABUFBmPQaob28LxHS",
  "key2": "42fNS3yJhFojCY1PhUCe2dP1AysdcvVeS7qZwYTpVHU4hLxFBuVgQmNMMjTZvKUUp3ssSBCsSTq8pn2MxpUtyucn",
  "key3": "4XgzzJ2ysF2xS14EDy9TXWkUVP2ASgtwajGcH71FSD8JhsrkEtYiWmdYuFK4MAmLroUEYzm1fJ5TZRWj3ZsYeCuV",
  "key4": "3vLxtUhDgxwNSLBEwkidcAiShKUSCuDDsPL1WfPs9myRB8BmnSt1JPwat7bmhLJE63F6jDx6toWdL2V9K7nbSKWx",
  "key5": "j51ung3eKAGvDB8jHwgaL7c5DSz5cYQ8sCATtpXjwryw4pfVtx5UCAJXGJmBfjVvaN2nKCoEzLGaEv7BP5Zk85H",
  "key6": "2tmbuVsAvCsxYCkSZBnN6cQPezjm8x8PsxzeKgbDQttEX24L2AVjLToYd6oDJFS5mHn7D99WJVwyiVQdnWgYDn3z",
  "key7": "4M2NdCDswUKns7CRSUTQ319RkGakY1SotMdcZLX6nZDbjLX3Hmb5ycYW89VYj13L9WxbBDpZG62SC9vJfChqCxoV",
  "key8": "4WEpDe8cmokcrKH21Gpx8LA4gToEA7okZHuk9Ui6AL7mmtdyFvdkxgnhhCuTsjXVg6KLktDRBuD7nnCvPEzQWXiF",
  "key9": "44UgJ5sC5d1STfeyTJWTHDj41JzNRHYFMMBHgHNzdakrVfDajWc843MgaaigCC8JyCn2euPrvBFawDMjQTfs8Kpi",
  "key10": "ktZJQCM92EA18VWK542MrWXfzAvv7jS2JFhyUN6xZ7G2sj5veM6xKyZps7UYpe9CS9G8J7tK7fcvjsV8aVPyb1y",
  "key11": "4uY13xYsVZB9SZDfdgHJSRkzFZmSgsAbb7GF55XMjiaDpwyvKQLmCE2bHhc9hVkxmHgKxNjuZxUghwsKUcjGjMiT",
  "key12": "pxen85pzWnDqgmwKKXopjKVonBss3DhnENQXMCmxwxzvREAwSVa3uqgT6zZPWzbBttUpacJ1MihA2bNPGW9cYsZ",
  "key13": "4cRdMDBXs6NjAbpynSTEePVam45ZJNmkKhoZg6DMFm8Xf4dWNmoSWQ2jSdfqQADxti4bWGacVKKZQQ2uQHxSudw9",
  "key14": "4LMeYLLSKJwdWWSu5Vq7MX4NTEMzeM9s8srY6hLnu2CnheqBxnvBeaQEtERxQSFnRaTzrcuEV296Fzt7nTddt47r",
  "key15": "31xSC16JZcV8wVrzBZEZXJgDDMhSXKwWkTqTVnbsDRKRxemEn6QEo5pcT2S68oqtQCDqvwCS3DZviRu3tzS71mMy",
  "key16": "3WRTdrpWCuZtaarPgdCTEfTa3vFFU1GBfBECZuY177QfxRjTRF2Ue3HvWw1qf5UXWo6GtK2f8RuSPEHT4Ne5kZjp",
  "key17": "3YheeTcuZpGQAxtiDKX1z6mB5rBd1hUUN65DtJG96CTcNfxuhoUYN36gxAymWuSMhJRHm9iE3jEGshAd9WCRjbKo",
  "key18": "wndxW2xU5z3LTHXM7s7xGibaTxDkx9Bq5fubuu2yQEZgUXHN1uGJhWaNiFkhDbUs2nqifjqiE2K2Rm64AYvnEYd",
  "key19": "5tYgMekj63PVrJAoDu7eHjbg2nwiQWp3xaq42jCCFcDBSy42mQjkdTFUaGybXQAZ1MZEuFqY4AUJJbnkvny6vyHX",
  "key20": "4kxuZEoSzc7b4NYsp3UjYQcD1jjifCwUkq47YDAhBE2ruxuYpF8CtC5Zku56Vsjrrkb5dnYWeC75Jahbujd3R5ff",
  "key21": "HXpiuo8fG3jDjUL2gx1RtmSunXZ3pCjvgGdLZoRBVJJYKUhz9BPQqezmiBbmirpzNbmFfVa7czsYi4vcTiXT8Cj",
  "key22": "5bssyTR4yFFHSsG5wDSdEpMVnQ4uU9abKcCCYNo7cna9uTEb32oUWZ7AHjidmDAtVFsewzn4jLFutSwFDQG17Eci",
  "key23": "3CFqG4iqizEZAppM3Yee9WtgzhdWXaNiKFPEoTxSEiN4gDjRzj6KXjzAT34vD8LQQ5Q352K58EPuc9gSA7rzwiCf",
  "key24": "3Xw9JjSZ2T6vyjngjJY2wdvzC6pngDjnP2zcKMY94dEKHe4NrEoQF2a4d9DvskJyhw8GpFkqfiWSLdDRHXaCXjzB",
  "key25": "3poBLmHq3qvGTxcBaVMUPRnCPbTK3fookAK15Y7vRRGzJ52KB5LjJJBT2B26VosPnwXmwYm9rPjeVbFPK3kmdFb6",
  "key26": "5n95hZDwy6u5Ds53cgeKeumVorsSutP3bC9cNybka7khVK29JrbeCWK8cqTS8AUV2kpkjkEJyyo82eyqNgNs5jHR",
  "key27": "2ucvioKgA1d8MJPt8pWDbqcXxTvf8EGe9cw5HuKxsFNwjsaY1kfZh4LMiAwXW1uG7PFRKh9qv7m9C4XYkUhitn9y",
  "key28": "5rQXTM2nGoyEqLrxXhFW4zjnkSD17hCUrSsJumhL4DU9DyR1AyUVe1brLtqVMS186UxDZWABvub1sAgvgxtxo4zr",
  "key29": "43it4BefofRv5ooxoHT3yXC4NpARDvM45prdCJd72U9AtvnXydVrEDXtmduqzV6G3KDptEbTpdWafLw74ipGM9jW",
  "key30": "48fXwtGowv9GTBqRvp1t3QSWU3Si4oMHsB6Y3xy9avPPfTdLMX5K4mhNZVZixKgdffu9cJVyyu26DmAJNujPsB2a",
  "key31": "N6QCBHPidt6sVFc54brkZfsoz79FRh7XcsWt1AENZe46wd7E1H1AyM1N5k3nkKVyzxa5cDyBaWiobDVRgWp4NnB",
  "key32": "eZtmtY3VXC7WtcLVr7dLUCdtGsBiHrQVcqp72t1f6TQSddaqXd6kvzfPvUGmaR3cCdKA9NqDkYnAwURSyyxaqC3",
  "key33": "4GB3THqFfEobtibqgrHN87aM9YVrcEY7FiLaVSPWTk7JVwp6PcQ6gK2UbHFE9SuyxwjSCXtmsYqmufWEYBe4oQgn",
  "key34": "2r7axGU3keFTdie7hMDZjGAMPKZWnA8YXEzotzMhsvYnem9QXpNEUiupUBkFTDyziLc8cpDQRESTZJBNpZLbuWTp",
  "key35": "LfWgJYJ6aAmZ2bdekQEiaegdztriaABttxfHeC1vHXrBX2xqP23gJrcUY938KKAaRrvQ77NWaaYHNYbMmL8nev2",
  "key36": "54JHNbQRpPNFbt5337NpCs8TVj83EfKSq4DhZTEKPetQcQ12ZDpcfbhbf7JrhRKhsSqtrmmVEqAsvTpVPDw562KM",
  "key37": "4ceXfp6u3PcVPbbKBi3JmpQ2Uq5tywdLk3xSMQeUtBekrHNCyRbEucPirvxu9QZJqRKEBJd8WCPcHD4EVX7DTSuC",
  "key38": "5GaqWJUcthnePBxeaghJNdixoHEDjHkNRBzmJYke9JoMgM5hxuhwM87WNYYWMHuQHEYr4tH3839pevdez4EtUA8A",
  "key39": "3FWLSCxbPQfVpKrMZ6kqibcAyU4FZ5RxHnawGbKAGRGLPxTYb4pvyvDzurC4uDfAN4kNeYVLmReGQmTXJM3Wp9fX",
  "key40": "kHco9uiuMzgK8zogGoBiocs3PZEc4dKqN7ZNFMUmeSLDbUEhzDdbmnetx5ijDg5ogVajcWbAAJyQd7tWsmMmCD1",
  "key41": "5t63MW7pM2P2vaVpfmTDKgLgr8HS3vAkLdhHqdc7pdnYNS897PkfhJgjTv8rHRfc1Xgz6E1z4etJkq5AMZCeS86n",
  "key42": "4m8ogPXyzeQRWTmTGQCgTru3cj6Mc8uaVrr6Xs1XrcppFcVvWNXLGgbGAqhuNN8v7YJJDfzkkL9NC9JJ8Cqoxt3Y",
  "key43": "5tF3rqzdYMNPz9731XnYZDhcr7HxrASu7kupF8eAzg17nfEmUkd2eNWSLwWFxjehAVE1jPjEgJSNqy3u7sFn8vF5",
  "key44": "2KNPjMxJzKHQuPbiH7YJBUrWGRqjqnk1kGqBTAeUf4ASGeMdntdethG6Ng2NxPUn9GfXbDvZAZYYTvMoS8Xiq3rL",
  "key45": "5kiTpVu7nzHnSm7HzNnuq1toCB5XmnLbF1Zu36wKoGgs8C2L1Bp8ambEZ9gJdNJWKM2MRvpxwuh7X93D441vhZYG",
  "key46": "41fhJJW2H9CJYjuMKFR1HwEWEqSGTMJErAh1T4WBVYvq3dvxs6YG7Cz7K35NZ8VYxr8CEVmWGzL7s8YhWiMaUUPu"
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
