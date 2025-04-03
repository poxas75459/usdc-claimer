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
    "2KYgJBbxquHvP1ZZBgpHX7ZuXgGBNkVpKXPypDz4PA7RgM9ZoFf1jhvwVYmTemdH1WgAsD7QQL2uS7fk4L74bygJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pRFMAUFpTYhrT1WDg5m6Q1sDtnTVpundyzszYe3PuywShxMkoqKbdZXZbivMwRrwDCc7ixdUbCu4s5k6Xy1hxHb",
  "key1": "3TZmwCEiu8vn7Z6YLZP3Zbpaev9jCLT93BdEt2QT99ESJqRMFUkWy7DdZCb49xj3HPpEj6kHqdewsJU9netNchWa",
  "key2": "uKqejzmuUUgUVSid8T3WdQ7uuZCRegd2c42kW6oNNb2rUzr6dfZ5t3ALi8cpjxmBSuhwNEdePMRqCUBHyJoH81k",
  "key3": "hrsKg2NqSgRRMgZRDS9r9odTS2igJewWSXNpzm1CntYzo5xnCxxvVjcsC5ZDts9he1CLbMSDeWHZtiK1JNE5nuF",
  "key4": "3XpYF8TBtGCeK1uGZkxAmTbvFJZ3sRXzin6JJcJ8AeW4g1FrjW4JgnzXNBLTCJrP8QJnbUEBYVeT8VVwGWovMuZ7",
  "key5": "GsoVyLRtjxvL6kFdNXykhA1iq9w1zo8nKNmdVYhKjX4cizjqmaqaoYEWsjKEa21mKpgUKhqxmKYGmekHHq6QnBY",
  "key6": "4vZ1Do2GMwqk7rn4a4qDH9pS4crqywbH36euCGaeHuitGsPCkThZC9ei71cZVA3N1CadFeEmkfKqoSHEGifisNrw",
  "key7": "2yvEoBsw8UGZQu3p9Lw2yohvoE23Ghu3fxXYqsjaJmoej2F8hnamVC7qncQjDwSVixo2ZTd1RgCavcHahQ5oEZEP",
  "key8": "fbkVrQMr32HcCtJ5foXVSp6kbYHtQMpUbGHRaGSn48aGpNtf22ZNggKSB2HuMNbgdDT5QLH1iG9D5QjANXi7cGG",
  "key9": "5Aa75MsRvu7WwJzFGS9MJPDuwPugg1hX6Qi7CC5WFe5UUnXiJjP88osSc8s7k3cPPC7sgXkDe4TYFuaKSscg6eV9",
  "key10": "2FVwftAVsfJ3TQoCufk6BGTf88RYzH4KkoL1hyT57ucdjJNo8ATG9xou4mg1WjkFiH7zQoE9SP7TQLbcqdqrwBRe",
  "key11": "bXkPs2E9ygrBeDhWwaGaBmDBdXQXdcyqVhhJ4vb3mtNBydTetSkykAyeo6UJTNmsbFiFRrfV7zoLXFk63Zu2nvZ",
  "key12": "2oUEq7JPHfwuREvtcyysQaFnaoCVSpDuFpUC37yjwVeMk5ySx7Nt2KJsQXYDh8VEdEuTdM2FqG57zhpw9LTX6XMZ",
  "key13": "23bKnwW96aEdQhmowDCN1qLAM8zgPCyzAu7g29LCsR1PEDJhk91S4G8dskSRj8Z9xEGLCcjEy26f1dX7pX1ETSxm",
  "key14": "3fufiJXHcfSFHpgg76iQ2eS3p5D9MP6iDh92UHHWizGU1woG7pZ7KpeY4kX6Dr8wzyVuu8HnRNr9jENg5KABRXyX",
  "key15": "339TPijWvRD8RDtW6QEMzQ9VjeuuuzN9YXmncNwHTS44zY6fJmRDakM1DWrAysjoBHx6JKEvuaCJML7zWs7M9KWk",
  "key16": "sjxJsBWEAbcAwQ2qYfdZMFDrwZP2nHswysZ21BVD4MfqKfVEfyvGHkYNZruMHPozz83nmLs3JYPKDyQSsRZMq4D",
  "key17": "5gYqJcFJ5T6XziMfuTgfXxgWQ8myxz4eCZxrMU8aESEqhP7Te5mrXvrmPufCjemLZx4sp9Pnrc8u8YpYwrhWLvy",
  "key18": "4gqQCyVUADjPK32wfCvC2nq3TmCip2rHZNQf24GXecypJeaB4eqrd11Lf5AkHjay4JtcdDGhj876pYV37kwniSDU",
  "key19": "bQEVvNof3R3sMP9FAtDFWzu1cmsA983Tyjghk7DDq5PRETxpNrHvPGeBkcdRA8HQn8V2gdj4wnBSXzXQ6ckKjTD",
  "key20": "2vkazt6DC5pSkdCWxYWxDEopeJSLDKU5hj64NrCuGxz7ngbpT4yxz8XV2ffX35v86JCYLdiArZMhXeVKiyXqWt8s",
  "key21": "2vwqxKWhu3rA285BZjEvA8qm81Vh37rD21euRyEPaqnT3LWAjttrzduWBSZtvTKbgDYkZMc4SN96X49XYLjoogTX",
  "key22": "635kkYMahRJAWSrmPJcwrm1oPdbGqEFdsJrzGwRgktHxtsN8sdscXj6SyrA1MVRbXVX91xoSp6xRzHcsok3yCPAb",
  "key23": "61rTWAPQ2zWd6B39bztNCT8izbQCy1SvnAMc7vbRkfPcjkYGKG1Sqm6FR4ZTVN1FLLS2eh76xQpk8hW1TnZGjVVD",
  "key24": "Lf7TUtuPfYxHDzWmNU56jBb5mkMH1YxMws7KQ3oUMTXgQ5eCMy645KVZeXVSN8AWHxjRu5fMGgS6bWUNC9wPZ9R",
  "key25": "4YdwdBEjokSsMaZjhr9D6fvhygdPPva6dYziAjGafqnaMAjAU2KfRMvjQzWMr7AKYoQ3gSfxjM3K5gFVE32CtWSX",
  "key26": "2i12J7F36TzUoLeEP7n6NkCXm1DGRw17WdC18eAoz2FoyMZmtd3eDxxTKfLbQi99p4QCcPshsgdosrzN8GbyDcwr",
  "key27": "35cgVnAEiFru2t3FSApkP1kcd9zn7UJybvPpvH6uUUYbq9geUm5G6mHXNgUkKtzfgPrNLnZnSuz1rX5EmfxJd9gc",
  "key28": "4HZdFR2BzjAjGuoG6gqftUtHNJHCKjNY5Kbz9Qebr4kiU4GTG8M2sZuMdo9q13y7JPBVHW3xBgUcKPnZhiwgkgKh",
  "key29": "2GPWNVS6XjmVwDkLER5866HHXNqswXCrbsfAQTQHRau64JLmdJSu8oyfBUL6MQbkVdHs116cq35wEgW5PX6RZCa1",
  "key30": "4bF8Ej3xFEsfCRvYyCM8c1wRaSWyh2umGoa3biFpbjhyTbp3GHN6WRHoiQsY71QN2p9HWv7HzueUmpQbnBmaLUha",
  "key31": "4FEfFkQc6gCUBwAnmGmxsPB7Are3vDBMuaogTXY4iE1fMUmCc197VwE4toc4dtWtCu2xNpjLxjsafwmE2DK1X5mH",
  "key32": "4qbJcvyLgHRroK1oh2Age7kkZPUvApKAq4yBj1TdQ3LR3p3rDm1gvpaZLRQzLtX9UEnFNVkrqbjZFfr7CVupEWSH",
  "key33": "3qt78RX8KUej6NrqMzc7vRcfYVYiuW32zat4a7Jd228DEn2AB6Wiuf61uXQG6SQtkSN8RxPp431KQp34wboWxFoj",
  "key34": "3UXpCFYijYnxBM7KtU5RuTAdoACgpgjEoNtzorW4WER11obU3u6rRsZXwTHZ33boaiz13SSq3Bc5zxjFpAJU5RaW",
  "key35": "5rr9jidekWwBdcoEzmCbUpNqpTqr5ekQZ93xDrLCRfCTFxZQWY4mT3sCHEqxN4yD1FNuEYJHwg4YVon3NBmFwz8N",
  "key36": "5jw1xCZY8zBdtM7wsx9bG29uvJaoLCrmnRnmrpZiJn7NXapX7V7xVKbzkrWKxbAgCSDubrrbgigqKuAant24rdXi",
  "key37": "3zkCFUVsMzurXLPPeMf3AjWzpa9BxQrwx33hs1UraZWPE8Cd7Vy1y236xnNiUSGwi1romuBumaDQ7FWr16sgyaxL",
  "key38": "KSp5PpKw7JAbLo1qGXw2sVcV27Cbwnf5MSPvHEHre2A7RE7aMuEuFrUzNMbhUA5uX3dvyhFF4MrgA3oZzXn5zeM",
  "key39": "4iQHFMGVRfg4iHpRoPzeEwYoEpLNbxCR5gTfCSSnfsunhGZvsdi8j973RpZtDqF8GJuHFApcaNYUwUVoXtG5N7TY",
  "key40": "z7dTH7cHvsr98LauXjdEqm4q6mg32L2XCLfSxwofKTAP6GmCsCCPeHRSqUVZSy2NMpaot56tZzc7fqwpjZuASo7",
  "key41": "5RisEwwRwzYWHVybquviP28sucVWw8bCSmJUxBhb5SHuFqMtFUvzZAKHZTLLayoyvWRmVwYFCUdC8pEtWsfq56mD",
  "key42": "2b1trcZGmRxkpUjF4FmBMfu26qwTw2V14sc4EBErzVyssniiUP9Gz53AUR7zfVZ6kT36ugGsnBjqRDdDw21QcHsf",
  "key43": "3UqJCGhYvtzBJiyfjq1BXabqqzF65qCAXWoH8Pz4sF3TPVEkpcZq4fS1XQB8GnvpGPyRSMcMWu1dmHSge1LJbd4Z",
  "key44": "LjXM1XkMRG6shqYQ9sbYHKmWXrF4vUjqK1CnXZP9bMm1tZPmBXaKS5CM1M5vWKyKd3WvzzSQgoAH9oQgtcKvBz4",
  "key45": "8aUiM9xiYcwgUJTyppyev9ZgTsrWDZomuJMqA7RermFUz69qBvhn3BbsNEfiMuypGoq7Lv2q4z8YAkhFo4rXSJV",
  "key46": "3okRgyKAdEKrTV3MsEkEhZhs4EqFAxrdLXSKZ1qxb4YuAya7RuySKMJDew1gmdpVjWZdRjBCM3Rokc2Ua5SPQpxe",
  "key47": "2wxQ3fEmEkfU3WQheqbXD474L4fnk4wEXsWwLcd6TdYYzZFZWBLYSLEfC6WF4VFoMm2ATq7iPS1Fo3EhGa4jjyFg",
  "key48": "4N4RWeytomzQ29fCY55m78QXPLE9H3hAN4qAdsNrPufcSg26v6s3x5dQXQPzzc3BRYLZ3Drj43pATBBtaiL2WXWG"
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
