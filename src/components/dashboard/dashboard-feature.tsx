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
    "3pa5V3qWLijXmGRmiJGkq1gUJ7J57ZHBxs2ymzATeXGpgGngERRxiwvqcj3f2iephr4G7bRrBfdyc4oxjKkEnpoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36rXJUpxmUdVhreM4JiyK8BUbfy3rHWQVzoHQn12nZUd8ASKNYJ6rHRu256farmmA6DDGh7MU1v6jsvEH7UQqJ2b",
  "key1": "c4m4mfthTx9ASWZ3YypgiWD56JnHHgjSMWMsu2VmjaKKsm4VeqDXMjB2ijVgreKChK6VNnrpZHj2gg97mQYHxZJ",
  "key2": "KybV4qN3eyw7GwzyE5FGVt24RAnCyziJcSPgx56moDvbqsx2uzck2y9ihsMB4Hso4nhcpD5aCgcuxoNwY2LZRuX",
  "key3": "j57j2BUDifi8EDi2RdL4MNCCecDAnHygscCqZB4ucUn95BmBNzDWXxoZmKoXtrBwKUvXCaqqdcFVcjvLsaMm7VT",
  "key4": "51E3Np5Bx3ZHuzDLbku8a8xifC7cGGJgCZP7qXTfxgoWHTgvudEJgKVNE1HVds95StBt1ev1DC6C3PdYvZaamXYq",
  "key5": "59DY4VJiAtm9ejCdZ1NmXtCMdtNQ5PSms9HBF6GQ2NJzWPEz3d2Yyw8FS8xF7SAPUKq7DiWXNdYnU6ZUgUKXz8P9",
  "key6": "3oQcWCaUforgHXdnn5qHePLAicKdUbqG11rcC7ga5Sarte8x4itC4gURNEkDNT6sB49W8Fpm1pvm1G5aph6bi21b",
  "key7": "Ts6K8ZT4BiyAn1BAe8BytUXdss4hFQdGbVmDntJT6rgYeMZzQq3vpbQU8w3kQnqeZq9rd6SCZQf5PcDLjqMvToP",
  "key8": "qncgxAUVjwVLhhAj7eiayvsgjrRJ4sjXrDVN3Vv98KgNh3iY14Jnpy8G7YCJifVUXyLBt8YTEpRpXp2GQcP5336",
  "key9": "4YBXv3KsKPHznSLbYzvjwKxwrcJ3cDLAUm9UJ9RNeEGEPEYZpWE2S8j5t1F4DLbfkcv3V528UKrkvWgn8H1SArKX",
  "key10": "5dM4XZ5pp2VitVRbuwaGDxZe9386iCL6braWudDV9k6wnbsJSkKt2F6FE6iaeTZ18bG9t6HtB711C1ePojYsuvtd",
  "key11": "ueXdXYg8XqJrdqc2PV9czakxmfPx9SxDe3GFuc83GpPPLgodq9YVFMevmioeFEm7iBXQJGSMsULQFqEmnzncjj9",
  "key12": "jJNxxmRneUwtkhXhfnjnQWhLyRsGM3o7cUaVCa2Bus184o8dgH2etMo37yFT7XwV5SU3EFW35ryzneAwMAya82D",
  "key13": "XPCb5EwfPWGzfteyNPtZyTVQC7jdEf47gn227g2gJXq6LP3GzT1KXMtgghKZcZ7kpwLkUcismS8fRr5xHWPXeP3",
  "key14": "3EhuNLbd3sjgMHMgY6M4cN7KGESusiVQrJtUK4BnmpYnm1jpqFNDAUeiwzWnQSd1m95YTL9Lp6h6s2KNiMYFiJZ3",
  "key15": "5Pp396TsFtagqofF1BFZtyAsgWCHAmqC4icjLARbCT8FGG1agcMhB7LXPf2ChsFfvcenBi2shqhPnkEsvqDkENY3",
  "key16": "2L5xQByDd9ALqViRfuEAu6A5cYTXYrw89AbmDTMHzeGsFhxBkB8sVUpC6Sc26cB2qWubZJ8sgn85fRDQNDiTao15",
  "key17": "5ebmjhBGJnC5YERE1V8e52oWyVBiNN8YrfH25UokiBCsriS1n6jiTZdeytSKCd1roHHCSoLyKzUEogaBQR7dYeLN",
  "key18": "4Whcf8jiaasLTsPMUHkciEMUzFvVbkGyhQMnDp6woGZUnbtwVufWcSgvnSh3AWGYSfzBnbMSGVPgsYU5o31VXsvL",
  "key19": "2QJfgni3yewK2hAQcpASDAMyJtQLQpskWfss94q5c4psu385BQFcAXhwLtbsaEFgsj3UW81WKyNnMMVad67E2936",
  "key20": "25UyFSeqRDQTaS3gNoKNfYWnYm516dnD9aoJkidhNiXBZNtnyBbE8WZbq67F6iAGwS9zdyRWuvGVZ6dEiVp3bgTC",
  "key21": "2ThKiUUPQyEpL7Mfdb6Hu2Rzk8VzQ5we4uK6VJnAi3uHXyBdGRJGWBY6ytj8SThdhtLJargPZLymuq3QVFAL3s7m",
  "key22": "9QAWK2o5zLvFXhb6nj7m4CkEyJ1KSdhUt97YcZ2pM4PSKEHu6QYaB3BpuJNUZYWFPLvaRGfNAYz6tWe7hELgW44",
  "key23": "5Kzg29WrmEsfinkcxXSfzfzsEKEMMtgnQgGY12qLKRQnBGXgGVmY6rP5sYgmQitxR5DpRWuVvnULyeZKd7T34daf",
  "key24": "5C16pk8fHJLx3qJWCt6MKHpeWiEDGihGMweNMD2tDP5UodxiRPkHowkeMZzqhu2MhpFwVEksr3kf5tvmHAUkDukJ",
  "key25": "44VpExYToj984ac2ydbEmPbMQvcbxt5fSHPE18Ex7pj7U5kCKRwSDzwQgZUZxyU7Yj3THGnfo5kxz5TJHhfK2BSa",
  "key26": "4qmWyu6kincAWWdccdKzdYRugbhrFH66g8WxcMHgvsRAnsNPkoXEnpPhsyT7YsmnJdMG5XkTtLoTYA5b2pj2YKJB",
  "key27": "CrXQZLnf1Pw9f6yS2LWKQEoyBzrZpjmVuKHncvpChw6RjDMxcBCfH8m6JZuUW4LwxKtn13MHXdBvwpBXyXis4By",
  "key28": "2EvBSJVwB4NyL5b4hatNXQ8j6eSxbiaVUdQJmaHwZgpyJR9meuPRqBshHsUMb7ggzXyNLH3fTYdM6aLELE8vcwrb",
  "key29": "2NJVwD4UnnHELaQx8g1GnTdzxKqeMd8bvAB6r9XLB5FnHYYJMMwsGDhScbbcXqLJ2XM3jo7PCxLStZd38Ce3wwTG",
  "key30": "4pLUuZLwRQQAkPLgCm29JkMWhstu7iF1YZNWEzLsPZJPwu51UVevy9ZTeSZs2EUbcCdDLSFpSPJexQVVTC58pWrH",
  "key31": "5GxD47VYKS4NYkLFa6LPe63n8UQz8pFqniP2CdnoFwr1sRomTHZsZWZHjBC9nJHKuoaypTWbxzBmu3iS3mUbuLSJ",
  "key32": "4u7CTbLHhPZYnd6RyhQvvdt8FgJKmKng8fT5fd7JKJ2k7xEGrySfsnSiVfYjo3mr9Vnh3DtU5bYQGStSLj7vXrY3",
  "key33": "3WT5w1YKE9a4Q34eACTDGnHfARRnSfMHbyg7uyRDeU8ANUGS1xSbFGKHK3Vmy7gMN4PfjR5Q5A5PqEht6ZricScy",
  "key34": "4S4VyWqVeqheJcKTSe3QUM8Nzf924HBFdv3jYFsJykb5JjLprvLXLcqxscsAoSEZ1sZuASahdL27cGPtZXoySsNZ",
  "key35": "49UhWNJnvLiAUgeouPpN8r7b55rLLdmX1PzLJvzVydNc7hfpxRYaWpJQSNd2VfW836FMnSyf7PBXWw85KxYQWmr4",
  "key36": "s7EjBMUpArikEvJfCKqGba17BE4J4XMogNC4bYpmfBFNNW7bB6KBqo9vfdQiT1VrMpWeZiLAo47wR5EWyDJnNQV",
  "key37": "CqZva7QZdYGmXtAVkYYLjjaTogtWWdQGhLpN4G3rFtWTULivoVjCFQ8L5QNoJHqA31XzR7LnVLCq2a8v7Bqb3mL",
  "key38": "362ndKgNUGhUBSKVmFwNQWNQihsW7cVRwfWUg5arsTVXdvt1upTzcaSSi6ucwShtFgkZf7R59er7WwhzjMMFtceR",
  "key39": "4W2Q5t6wBWZ5ZK85oBCn3ucJxpuoYXA1F3rGmGASgoF5pBfc7aAshzncnpkVYt8akzHRu7pUrH3emSzB8E41vj3v",
  "key40": "5ZwExM9cWUgQpQ6XmC5yL6iGvtEQcDT6n6sgGowc4V2hVbJddM4okh1Lqqj3y43CYwri7YFQLkVswtbJ1wov91h5",
  "key41": "3AoCTrrUTFPdbbo1xfc5j5aFLhnX5jL4XJaAsDRYSDYmcijRPkdhKY19FEoXmFhoyfVs3DWKHTqeAsMRdQbSWxj1",
  "key42": "2jK5FJ8tPVHtwtTAEdVM8cvPSa73nouXr6pJW6k12SzhWCqLuCjc3Hrmv96e36QaQf3s3JjmRHZQ8M1q9K9ygNm3",
  "key43": "3dNLGUnkWEgw7sJ6Pfi4FucxjrvF7ri58Zb2uzE3Tp9iBy7Gp12jW8q98zQ3KtoZHUREJjTGxCaEdyW1ihvH39uW",
  "key44": "24VmbcNRuaMpwsMMA4cb6Bhir6KCYAKBPxYHaEHofDTYoaoAv8XY3XPhmwTZM9baj9koGWCF6SjyCnWfWfWZ3YoS",
  "key45": "pDVKkkrowcWCPVL6LsNfUkKUMB5tqDVpbqeSodA7qR1nA4QdtUjbhUMPeZcf2phf5wwDCN51Cd8K1k4HCZUDVY3",
  "key46": "3nuHhxB6P11p77UGND1PRAgNNWDL5XW1GwCu9uEnFQzBXsUJdHHP8VdpU2uHFRs5oncQb3SUpKKPm9ov1XYZM8Vs",
  "key47": "46nXK1Dsb7NqGcF1QjoeBR9QHvEnMGH26cZhrbJy3F6suQpbaTyAseuoKFfrKWzfRosKYeX3M77riVLZm6sskvq6"
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
