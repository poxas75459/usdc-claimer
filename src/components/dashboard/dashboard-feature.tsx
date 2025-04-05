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
    "4vjnAXqT3828BJw5epx5b29spvYUGhTFYL3wQ7AU5saqysfSPeaDUSA1sKaTvGAV1ggH8mKTtYs1kkSwG6kZYqes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MjjqsDVL7mKfZzaViNwt86QtJTSjMgCi5wQ7aXAgW1vTyeDZHjFXsrsoBLJ9uLHCQWHjvyS2rcknvcNaZBSD1vU",
  "key1": "3PYXoWY3b9xMwLnPaMWg5ByH1LPNZWPofHez7tV1sJTxpVYRq2A7mEfBTDcMwvbYuQZ9Dz4nRLmE9E2RcVD7vdhe",
  "key2": "5FnyteHuTG6ttr3fgCRHfMF1TjEFFCzfixeBsvhvT2jx8E5PLEQCGYWJUccunEmbWkusVAKX8a6Q1S4b3xCPREFe",
  "key3": "59Dy3iN5x8WnZJmRznPUYU3DY5d7vdxKEcjeV7LP4GdM1K79CpCUYpbF51ovFUqN1VNKdN4BRVDz7SyV9iVeTdXh",
  "key4": "2bUWowRYFucinRudPGnBDpymwpZXe9YSz6cuA5qRXyTQvgVYJnsxJ251vsnvKQRQMbaYWWmmwhTCrMxnB6PsQJbG",
  "key5": "4e47hAQ8fUYdfuPcjGtmDJKwWq1b8Su77gZSF4wMHmnthPusiPG6UtbYTGhZ5CKwXSvjzP7mEYHooT67e4ipHZaz",
  "key6": "2HN7zJT1e8wQpoQh8ks7xEePovhTa1njFz9NTif6Jrc965hgUoKfSbzU39xNgiLhSgczYg6hUvf6xRjviyBgNZrY",
  "key7": "3etTfbKnzGSnyHbXyzR8Cy8eGkVyR2c8e9VbnTR79NqyNa6iniRveAcc4ckuKFpZBHvxNFQaqhvSX6wzSWH8GcoG",
  "key8": "2FZ5NAZkoWURxWvY9ca1xJG677WjUiEvrLbZ1NxPtqbcS1ouyBHz4kDsnbv4SEcRMXd5jSQ6kdMdexsxKRG4SZf9",
  "key9": "53zNgU3kCG8NFcwJXsNzuXZwg7h8p45QzfyaiHnPJ1B2zTKPJR7u3ojZc9QxhWZcRYrXDdYiB6gSrdPVPhHjsA1c",
  "key10": "VXbXk4uirqNK28eFaap5C1rm3LBnRVBforEfn8NEpNdDgirHvmeffGpsAdMW7cGinAWFowhSeR99GwJbPhJQbPd",
  "key11": "4XCdYDfhrxLSgdpgmVrihWMW23vPcpk7z34TiSNppzdgnqpB7JC9HX5tY8A8iwN4Bk4nN2Q5mN5pzVMgBZoLkLH5",
  "key12": "2VRLPzMMX7ZcwqkoiuNkqWfSFom5qeLYRr9VHzhWZ1F9U2cgn6A1irivDReWY1BS3ssNfBRBAHQs8uqNk921rWFB",
  "key13": "2APZ1cfLuDutRBrDFgz6aGinDcoeo5nrMqTBVbh6mbVydQ89heHYGUt4Tw6Tz6RzHGPgHyJFbLX4rxox4Zq3hz3j",
  "key14": "nFSrJgk2TcRUZcyehnPFK8zGj3bJkDA9dJbyUxYsnAmmLLUmqbw3UR82nnuB8VM47f959H9oxxsEPrZsiSseVsk",
  "key15": "58wEL67yYpcMmMWN5LZXK8iH541qzr4bSbtHGgasqiCymYwEHxwts4icKLFDSKL3sEQeAVv6GzeW7EzEPvBYbdYs",
  "key16": "356cmjLFcQXez1fv3YtR3uGPV52nEi36vA2dQ63PQNBrmtLF3p6wDE2gGVLpW6yfdyexGanMyCi4TPsDGfD2jjPn",
  "key17": "et1aFXVHmajNLvGsYZEqNSUZwxXGPYypD6jnojBGi5ebX7sKoGhapvZzJ6JDNgMurRsqdmMFgyeHDNbCDdRSfDb",
  "key18": "4tk6a2Rr1BmGbidPR6tSm66EJb1HqsQH4C7FqfMEsKF8Mt9toYFruyHSrGy7qVEXdNMigao7xFtD4YkqZLvFbWVx",
  "key19": "2RFVq7fjmxqR3QSrTfNfPQnAE5D3eYUB8RrVJGMTG9CFrAFcwFpYwQ3dgy8aS8T9TMbUuv4pspRWdtNGtGtXSNMf",
  "key20": "3zsFWexPGHkLi1oqn6tKnSHsLK6hUPCgjEKB8Juxx3rHVTx3HwjNLa5r4wRsmpvGm2TeN8mEF4JRCGmtPtvedYxN",
  "key21": "5aaLvFEJUJyWDLKFGw8vdH7bHeEneN7eUmdraUGkddREzq4ohXi6QwUcuWXmAxXRKJokhW1BfrfMu3dH3ev3agVV",
  "key22": "i5nu6an3iU5WHvhucTeWruZzrTnrcfhLCuDSkhz84jnitCYnK3KpB2NTyrPRkBkjuCTLj1dyftx2VaVaUDEjE4u",
  "key23": "2y3GkuSpPoZqq8e22B1FZvfMshg97DJvhfg89qPecfnvCmrpME2yhK5eqKX23t5CAHvkGRx6FyqVT9jL5mwCszvJ",
  "key24": "2A6q4esfAijmdCHQ1A3HYdQBDNtB1ZTujjT7Pr7TjhfEnLBkWSZ4d3gupHNuouC2FTRre9iqPZxqadRnqMEMVycN",
  "key25": "jg9HM1abbtuA7jYWMGXMY7WVGYFKr5HHQN2vYEdtrqQHjhYZgM8FM3jtLvppPJg1AkfWmz1C12LwZERizaZ5Fi8",
  "key26": "54gwo2u4qJmNPMHAjUZ1tQDoC6vS1XABJCx8rb4qKv9hvKWRzvyoRPjF14tauwVPaM8bZNgjYATfVQdb9s38SKo",
  "key27": "UGYLBj6PEeHPh9jvMaSdpB7mHB63c6cusHNTq2GHu6QJFczK9jGRzS18e5uDHHG8oYrxw1DgaUchF72iii8orZz",
  "key28": "5qEuHqyDWw3tGkhp2S29jAVNhrsgENmeHdYLJwXg41dgjCRZQN5Q3q1qLi9wjoxf4e6iuDaLRtRFiw7zJgi3cuGa",
  "key29": "N8nnv1Mn8TP4jk2sm3xQB6Hy39KZHDtew7R9x3co6EyUrWFtVf8btwMPWuN2aWkQhJqtq3KW68xNrht3Q7wQcV4",
  "key30": "4p7tcbm8jaSyhqU8oqCi3aW3ssu1eMK9C5p4cYnz4VNg7VYHMstUAa4KX8snmnqU9PVnZSMb3sJw9aAWVCupLpmh",
  "key31": "3gJeySaWz4DtkzJwLw8x3tmASRyCtnETKtzdNAWAzE4FEZpBPzrt95zG8UhVL8G2Fwztyom46JK37uvymvxieRdp",
  "key32": "5fUscdaWAzKFVDCQ9Nf3ZDZJfY3bHhHUgVhUDoBsBucUYH9oau6cVVaqFukSCAja1ciHqxKHByyzQGp1YauSa2ss",
  "key33": "2gwbrAQkGqvNkQRXbb2hhyscsPWdvZkBbETp47YTTkeBDpbhhCUz66D2JUHWLYKbd7KMyu22jrCL1YsP6Fp9hPWF",
  "key34": "3hPJWS7StbASEPABiR55nchQs6Woep7VaxyptWVDsNxB8B7XChBeJsHk2YVkKpAYEeQCgr4947BscNRd5UaZbY5i",
  "key35": "4RUjtJdJmYTtURwFdXCEB371XgXhWQpWCdHWrtVer3ztAcwruMrbZufpXvy26aPcdzFEMWJBqRD3jMYzLRJg9TN9",
  "key36": "FnNdP49aNNkkBG9LXmVukNJinPeCygHTVfpcLAtC38ezVEYwtEKcgnoTgzZWVUyot89aPweukQDtuv9je7MqTfs"
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
