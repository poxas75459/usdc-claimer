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
    "5tTPBrGanaHkJgwWz5xNtVxtmmtpY44YbAyoRueC3t13kURD25NpLAYH25UikbPXqEs3C4EoaFhbWfFWfuGuX7qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nhdxBZAyxpYft8xFxA46e6KFBD9GwXsgtBYVivdZ7qo7UhQJMWTn41z1iuTBdRPwdiRGdweCJVYgxLGmJDirnbD",
  "key1": "5kyoXkQKS1mL8Wqx2Mom7NZBjeQSazNrEmvjrXQTE5LeNmFuTbuCfZn3aaVgz11RT5SJ8RgaDYN685HQHeJdyitp",
  "key2": "2ccQoGZxbhJNu7TJXynhNbdAZUZDb6srCNfh7RR7yie12fmS6JuBbt2f8P6UWWJGLN1ZRnwEj8usx9woANahGAnV",
  "key3": "5mjrsS67ZYaNLaShDFvKzGxPxaVEB8Z6SiQJqAwZrXTNixVCLYxZPRh6R79ksQpxaeWbYhBaZnab2c45K9K8BTVn",
  "key4": "vsYFy1NJUX3VNf7iFMdUEGaMcAiUuWg1iBbqZNv328eWpFve7yyQogrvRTCrNS5Bze15Jnt3gf5mf6WEgDo5Hxq",
  "key5": "5Za8XRkvRES2YB83g3Kj65ZTid8Kfmz2vnmF9Zp1bgTmeQBxwsqwwgrMqeaKCp7TbHZyeN6yyTuFB9aByrknyB9t",
  "key6": "iTpB378X64QjqRr2QE8v3RKXi7QdLUSLQokaiHJWBRkh6z5jyto7cGWD7vonApgE3EVLGrMxBp3YLQ7wScSLqdf",
  "key7": "4HsbBm6EYAKcBQGuf4eWpcgePEViXM43aDAj5Tc4DCSCdsXNAggXQTyyXNqbpn5ht3DBDcZ8aujcstYzwmkanL69",
  "key8": "3ZU631uRTefJyw4D5nvoPo1pmUt9yGCcBJoqLrJng8FNnagpg145dyiAiCDvcSgWs7Yayz7EtFsjEQDWRMehtVKB",
  "key9": "pzotZNBMEmYPJB3hjnFKMaq1NpY6EDrRUJqxC6Xebq5sqSFiqBza5MZkPhDpbmqvuwccRw5yyEdngjQ6dK4giXb",
  "key10": "4EfYeVY9ujzEvG6Rmv25cpvAd6V8NhZHU6buYLoR6njUFtCbhrQADTiGBeF5Z4EeiTfuG6DB7aW98MX9vHURLrKV",
  "key11": "5Vm86fRpBQrTCbCkrMiYutYxvySfRFihBncHsmkefPt7PcxzGQp24ca78Uo6a5eSJYaVG2vvNKJnCiMocGSJFMfV",
  "key12": "NNLHYvQ1F6D2nacTbubkVnGRaFu9aZSKizz76fSYYPCdmiRxgraa8dC2uciMSgwneyTp7TefwRBySpxKoSyAd1S",
  "key13": "2MLyBy25Q7kXc4uXkftF28jzvTZyn2byExaZfwfsA69chGSMtZVwVE8TsVzzqWetXoeZLZNmeD8H6Xo7qAbsv2dx",
  "key14": "4HwSzFesRKqrtEBJJEEfd2fBbWkURpngVxRM419NLj6LyDhJqbmsqtQKSzGYedBzses9ZTRVc4hk4rfWZtpkwzQt",
  "key15": "9Um8vrs6GkaaLiwNS1UbTR3nVWtcXkNkdomLvcUBs6aPjfXmkofvYwn15UZVZ2YtUpbCZSbJ55oUmjZj7bUiP2d",
  "key16": "Ht3JLNrZdUGEjwqT43ft2hmX1JgwUQvbLsReu1hfeuddQYBxebEpbZ4znnXotmsXaGG1Gqwehfb1H1jkJ7JhZJB",
  "key17": "2YPX7ZB8JwqHn4xb5i9dfdJAaiUxKUyoVyY5SW5QCxQfu2DiHVmJJcgCoyvQrejXFLtRmffNWYui9Sjt3B3oTWGD",
  "key18": "3uENjKgadVQdf5XZUd9WiNrQr7sY7g6RyAi6SeXHnbJJQ3W5crY3MczKNx1dQ1T3pZRh8pejjMd3Ti6deDrchFHP",
  "key19": "ECrhbUbS3vaX8b5joRgRWoHPQuPQEc7VPfPB3Yx4aLPPWZQD5n1J8abXkgAMVvqvYuea9Ukht6nibmPvb8zRqC8",
  "key20": "5qC3ZyMwBS2ZhogCaQBZ3jyczFGA8ssBXCD9diepEfVEhjY6vqCV79RbLqe3fw1RoxTLMWaxA11v1SgUAGhCRqAC",
  "key21": "4eGHwwGNXrfoAowFkdEAJk3jJ47JrtGEMBmtXzQRYw9yjp2GcoDwpNv2sBSSg6v4PyJpHCdKBxUnWoeXzTBf7EFT",
  "key22": "2KjfFbXNUE2FxY45GUz8XxgX8hMfCbh6fQmLeRDNbnF82skL4ZxVc3bRhghFcumkrqeeMaXGPbo3dQcvoFc3R12L",
  "key23": "4CXyNS1LMk9J8hJG1LGtuPhHNL7ReCCTJMk23DGmpwpGciUUDnHmu7PdzJGpe95vCCwoMeLALAqz8bKL5CPzR1i5",
  "key24": "KZuC4myGRRzFEMGQz2q8f2XVH76nknSv6wp16UexYWHkwPXmYaJL78bmLJc9ULtXRKwFgHbjRsGw9cHkhxg3DGN",
  "key25": "5k8u583YPnnkrnE2JGPsyf6STpvCnAk3ivrPdVHqevE9AjAg8AyAFf3FLqGW4RfvfGcCiJUaPG7cVzDtL31dRfe5",
  "key26": "2f476J5jfjYCvQrMLjc6KvHcBd7Vhi1eEzoUEvZv4CfjMhrPnWHBdeCYFaZR1GnoTBnHG52K6PuMtxyqnQCQzPqS",
  "key27": "2BThdJ6Rvs9bYX5fTFkgRFdj7p3MgEE9SKfcog515LHeYLrL7W9Mg3fNbTmZ4EqivpgU7D1hqi58DXGCp8Fx7V3b",
  "key28": "5UekQ1i7Rs7qgnvcSLXnFL2HpLUuddMbFkvzpA7ZfFKUR6vB1Zobe4jzSnpAVYpYEEy7rid69WBmPqUVSriEgiN9",
  "key29": "5yW7AqUKiA7PiNYoAMfdifztLh9z8sREBvhAqfUotriQq69zVpmqEeQXSUyQie7z22Fy5TbMqFswYx7Y1C4Dazhi",
  "key30": "2FRQQhfpJ6tq36xGe8yG6qJP5jfQY3R7g7asMqyZkcZmSEhb35wcsnKJsVdZbbW22pbUvE8ycduk445JfB29LQXD",
  "key31": "39eSocQkeKTohjNDucPVfmJKshSzTuvyEztSfBma1byaLxn1Z9H91fNfxVm7P198Uo7SPCnj54dPT98B3YENWD7u",
  "key32": "3JWqNRVhUod6snCLixb1pVX5HhsGQxhfkkaiKNgMLW3hALMoiM22924tuU65F23mRWEDcQLPdVu3aMaHQQUqu54e",
  "key33": "5saqEV1hfczL1caYNSy76aZL1SxUSYNRGDMzcbzwGWWBfUgLhEJFy1q6Ln3CREJFFZeELUuX9HkZQxjshpv4oCen",
  "key34": "ELkg3R24DtFNAi5zocqKqoq3m8vKG54imMSG4Vu6kdSNywZE5RMULBNzW6D9wKGUSGgR7SriJiTrCZ8jVPYpYBY",
  "key35": "3C4aQYmbEL2aHsYJdbsZz6gReipYQT76q32vxYNbqLmJJakcryPnT1CUM367JXjAbXe6F6UFoaXbkfpvmCgixHug",
  "key36": "3jsXDcby4sqDnbscUrSkksPWkSu6JhN1fmHvAGBuRksrMReEtnFfoNSpdJNjHEeHV9Ef9RpnFoFZLWk1L9HU32hM"
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
