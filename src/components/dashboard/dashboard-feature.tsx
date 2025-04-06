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
    "4m2aA3dV3aPVKCt1j3rQYxPSgui969FUspxd2UiXb9pkffKfCqz2yHV6Mv2U8Ux9762nVvaP7qQH2jBfgyYXAV8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Cv3kAZaR7Sa4mdmL9AzSXowCnP2MhTnWDhVUr95uE98c25SbmPXRdUG7Ma3uJse661FkoNoH5DbVYSeh4ts3ps",
  "key1": "5DuDeBGjGoq1m7pw9dFyvdCj2NRHBgKYDWn5MMTiFeNQfpD2X6rH1JKVbV45cpSLbPoRTtUZcehfRGbAe1XfzntH",
  "key2": "25FS9ALsiWPtb1Srpm1mAjAYTR9nna3Jap3Lva11ur4y893DEtLj8zbH4qmY5XzfbrfZStjoCBUyUR3RRd4zk7gu",
  "key3": "5s6yJPCKG4t26YyVLPnqdDkc1Zmt5iqPRE1rccdzipuNTSdMAoDtBBbMFCumpYtNH8wD1aHinbpxDiEpPhAPCh6H",
  "key4": "47k2CaQpoLTFQ3noxC76NLDCGhQ4QCnVRqtf5RzZeBwERjhLbMWELck6YcYfuKacHNMXXFaFhQjim8a7HADV8CZW",
  "key5": "2ASJt9r3oC4URWorKoofRkrkREAH1mRyeEv4TMSwaaBHvqKiW66W1bDLiYd3SF3JCgUM1erjptMaUzXcR2dZt71S",
  "key6": "4j9jiZgykV34sBMS4KXKAQDiGcHeuAr4Y4PTBvz1V9xjxgbS1fnMSpoXhp7dmj8Z9o14enSwg8hznRGqd8PSJ2LM",
  "key7": "39SUmqoj4jXG2git2PCMn7G5vThLfQ2YrQpyxj731du41C4YoeyQNBDVPg7hrHtz9GvTVUraAAZn5ZNj6kr6gqJJ",
  "key8": "RdzDY19CHqnEpVL6qt4Ly6MMMj2Uz7U4GTW54dMLhhybD6VJmY6yfB3UsgD9hbXBuVeMdA4kwjcUtaTcv769cHM",
  "key9": "yFBciDmta6CFXswLTiqFurahCE2p3ih5xA2RrxiXgshPDBe7rnZ2sLfbTv56ovTLgfciPXnK3PXbFyhC6MHr4PL",
  "key10": "A3Z7BPNpNi2wwbfKCpUzCv9zyRKCUArXuTmM574YVQdUHmnMVAjUXiHeNEEcVCtZT3DpSCPkYJdbr2MzRBynSGt",
  "key11": "3F1EtKZbp5xV3Wd34u9rREde75K8L3XZ15FUF6ghDQukx7kn7gzm7aekokz2Jmef2HSfsiB22AqkZG6ifBbf1Xv1",
  "key12": "ps1JF7yvjApdV7RFwa4wLPSrZVNVhtG4wR9RDrHiTgczgSfpBr9fHFHgkuP3ZNQNkev5rUwwameXf4JKj4VAnpW",
  "key13": "3Zdt9V6rYzsE51cNymwopypC7mtLxM6WBS6i3vEC3Vy2FAcXtu3RFnz5urbaY8UtEtdwaWgVfNK7mZBvmopHSf6J",
  "key14": "2vcwhtfJ5MCeF9qTGuP7VZykEqpdz3uitCFPFrsFr24nUU4tmhK7vfLLiUZSsDeaGBs3FkfScv7TszkPqegeWe8W",
  "key15": "42XiqKtjRH3UzPtw2pSfBD31PTJuLYWqzjUMSUgmFYhaSkpYgxTctkKrN4AEexgTWGn9ML6Dx92B9ubWsPtX1qqZ",
  "key16": "5CoHUqLUmEYRJuYXFTuW68gSkNXiyokKGAv288BtUkTe4vKSUtvGyaDUHqDYgCWxRseJJUKVdG3LFt7XxYcVy5Q3",
  "key17": "3sceVW9Rmi2bGf2RDxpxWNyHUbRW49aZt1Yt66Ec9TboDQj4UuoSJjthPRgKzFQcsMBVr8XYPqYgCVtAYX1JA5cg",
  "key18": "3ZkqWxrkdTTAucisHbxnvx1fc6ByJ4rgoDKmfYnBdwHX6v8QYkw8RVJT8JYogZcVi5Wtb8m53WevgSWt8o4bw2eM",
  "key19": "4djJUxsdCou6uWUDVTfFNTWwqqVmGttTYycwpSBf8JY9JUjLgWgzLNyUW9C64Rm5H2NWpaAu9VEQij2c39McNNzT",
  "key20": "CQUG36aHvoYfkMVEWE3HJ92iV5bGxSLQvHUXUhgdKpfPdKcP28iup4mg2aXvMQgbEnvyitiQE36nq9mHtSDozjX",
  "key21": "2KVz9MRCareLMUo5vMEVd6GVTpt45j5DYZkjpTg8KFZuufrdE2j4tAJaLQLSXNMVu3m7zA6kDFLScWeBhKiFaAn2",
  "key22": "AV6EtkzgsirACoRdCqRvag4Uhaiq9ayCP1zUeK6sod1Z4hqFxDakoPZaEidosrXBHknWstBMpRKNAqRC7CvEwmR",
  "key23": "2UATh1qvZY3fatRUEuWTxroGUwiVUg6d2SbmoMvuxtpT4Eu8LfRruq4J8x5Layt64yj2NdoGFBztrsW1fv9jnykp",
  "key24": "dXjKzhwaP7TsWdC49j6M3kVLy8PE6DfJ21AeWYzrmSGeEB46Fr25zdU4WqB7Pa2tEsnFBGXQeFF3wp1YYPacbd5",
  "key25": "2uzh4w8c6pfcG15N4Csb1ot2S1BDr8z9JZ1kcDpLdD917pB1DE29gdgsJKacb7xRK5TdTqY4FtoSWZic9MT8GbLi",
  "key26": "2kHC1Wf4eYR2jM378mtb4zCs68fE8V2nNruYutQwEmRVXRe3qnFWNLtwztMxgsVWQWmmzg4Mys2Qdw4j8TivSEhG",
  "key27": "43XbPiBbTJ2mWEVcZwTiJC4fyJKyThKkfuCFQPXroEgLsH9uKiTq6UYjgrfhsHzvUz79KP3Zkn9s9obRyLHbiq6F",
  "key28": "jvKWf3devR3Qw1xuvWK8SaHjjBYgrFxMt8iFhww96ExjFyDAg2yBHQVWNRg7s9YLvYh4kz3JuAMb9XocHRzLCVF",
  "key29": "5FE5uf2P9wSHrVZphHotpT5ydzQiHyPyqccesaM4PsrQsuoJt6zgUDKenXsX4HxkZ7Ye5ja5cKS8Tc2HMxrCAymE",
  "key30": "4Sjz3nPPVnprwW7fxtkoSALfo7UZMPK2sSNy4ybCTXNAL1H17iCAMJkbf1QqB37MG6iqPZYTub67JrPUiPu5b99T",
  "key31": "9PnfoWwkWV2GB3CXuoskbBD6EkKbxY3uzhavShaToBNp9psdP7fgYuj1v1yGetqbFojWr51oRvLvDtByfF2b59X",
  "key32": "25je6AMAQMGAwUSPCsLDmSxamoqBpcbpn9ZV1hQgCqhtsbAi9eq392VLqKxvGagpJpXV6CSsZPPYoHoyqzh5Eu59",
  "key33": "oqnvVmxeKPbeEGNBAQpe83H62ZkiB5mjJ6xKLQuCNKDByUP2cyJhEzP8idYsyhLWWgULnFMEMmBf6Hf4DSVLV9N",
  "key34": "5gDXgewp6tQQdZddPp3rjudsnmckEiC9671XaxyVfRvzywF7kmycfJe8ehnfhPSbPAq16knUGS3oJcKJQJAv3XaG",
  "key35": "25SQmRCx2u1BSzSGQ9WhLLRpACW3WbcdmWQQx4HKBwdBzspZWjCN7PAcN4biNuyHJBTtWZgE1RtuXoRvijm9xQ8u",
  "key36": "4rGLSaG5S14TjbbEgukzB4cbn69u4MNiRcBmJ3ZLEAxKkyTZRHiyr5hArbzr7ZAJtkd3m96vQwP2P53k53QFqtLk",
  "key37": "3eR4jN3bhz8hxu5J5pndwhq9n6x6nSw3rNTiNMMjyiZNQoUMM8dXkFZMAci6G8UYDU3evfVzj92bqWuS8iA7nSFu",
  "key38": "2sfGGLzEbv7bwPHhYStGH5SAxveQW6R4SErb4cLxG128jpuuKekKYqtdra6HDaV19o61Dbgr6qFmjN6HvFoDATrw",
  "key39": "STQqovLicJS4SBVAEZ61Wd8sJQQTsWjP2AWBFewQrRXWibnednPnmuYW7jwgxiiAhWVyzPQeWiS24Ns2xTs2nWS",
  "key40": "2PAEFZP3jnEp1ivfD8XQFo3nFdfSeUabsemDLrWFn6WdDheVxBKdrXH7fF5Q8QvncXv2sApLXxJeaGc9K91A6zdR",
  "key41": "28aSdQ9sce4sys5iJsQg9VpgL7NPiYiVNFrS8P4Pnwbh2dqJ6cjJfch3Xj9dD5iRrDMPwwYx6b5QxtZCwrBeqYTa",
  "key42": "4rkNhD3eMHq4sKuUhApdvhHySBHNcNxMirtgdwdToPzNhmjJ8JZPry7aYeFtyKrxRZ15b9pjneXdWMUbJ38b5KPu"
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
