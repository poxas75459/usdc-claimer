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
    "mswTMwjDW96d2ingtNPYhL3wqWAJ4HTQ9PWNxWsuLPeAYx75hoKuiT5ndDPqJHq5Hj4mxCjU7QRncfpTgUSo1a7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tP8vJGyTWMUysW8gPZhk2rbzRwdaiZXXce8DFuh9rgA2VH4C8sYEhh8RPNbx9ufwSu7VfZmJBvEYgLfgMtNw2pz",
  "key1": "5Rhi1km6nPYJJdYDA7LuuYc6V3yvXMHmMZMxHNcuaavzPoXdmcTv3c3dZM24RwMbUwj4F7XQhffRCzr6scnsiFtJ",
  "key2": "5s4eToGp4rLZuBPHo5wjVBgy1mFRvo28dVpB8pYyLR4bhnpParZ6YFnmgSfeyJP1Gi4AyBaKtm6GVGLHaCuD14ey",
  "key3": "jSnuwsZpYnhQaqMwy6eFBQTujcgVPq1wU2JiXG9rXQHgqMp4Cd3kYiKRX4s9TLey7Ey6YGJxAFSmbdaTAfXc2mC",
  "key4": "3w5QnmfMEPC7gbwn82JJYRaerMsLoMqzC5GrXM9qkXpReuVSygZ5i4vJwy6JM9ppVSAJ5PxvReCfYTdUnqaE3AZ9",
  "key5": "53d5h9k2RYYSECtPjcJFnr89zAhZWbigVPz8QerEEv58ZALZSPB7Ap26a38AszFKt712Qn9f8QRSKV9LdVFyWA2F",
  "key6": "2SBX2oNiyHwfoXnyFSdGhPqcrmFHuJqGMC4qe93PfhtKpHA3fNaNz9myiECjN6sukxriT1EJmmF8yP4VPTRCW91q",
  "key7": "DjusFubQPRZ5bS1vLCsVv4m3FDqHfBCSvnEzhLFbLGmNbLRrghhgRJVGDPGdoyiASLHXE5gRjT5nDKX7HAdRUgn",
  "key8": "3WmkDiqNmccuXVs7RenNfdm96w9eSTdq2moAxuy4M4EDXUuwjPD6ELncXQip3kAx4mtUapqhhZcZyeGLM7SZSsgt",
  "key9": "4qXJBT2aCoq9PLznfMPGSK9utDkd8LeKhViH93MuouLubig9cAGZxLNZtCKcYuat5aWTNjzMBgVfdrGmn4Dv64c4",
  "key10": "3dLyCHwgXcm7RwEjDWcfHn8AYN1sTeVAyKwkGpyR6LkXZLLaNrwr1KKFqif6aaD17VPpuGE2CiosvF7Y3kVBVxfL",
  "key11": "3WouwuZFqdoaiDhAyyNjUzkmKEqHkhVMemu2yRSGSn59epnsVZ292QZAs9D4gmqv3NBCTS2kYVSyK9wcKoGMJUn6",
  "key12": "4PpBxCWY6v8a2BNq1sZpUyfM85J8cHE2kFE6SVV5tL3yAiD9iESM7esDFxq65y8JrwLdEQehWZMqNquDGmxJKSxC",
  "key13": "62Ug6wZH6UKSmbZV5oswXDQ6MA1VvkJGTiDMw4zfvn2uJpgNV92KdpAZ1H4Xq8mMvqeP6gkk4uPMhFowioY6vxJT",
  "key14": "3aWWL6gkUEoedHEboHQnhQEkX8UYEjJoc9KgRGefKuXohudDZbbHPen5GTFXf8sA75D6cK1vLhdFoHXtYYWSnNS6",
  "key15": "5eeyBMiKrcSa73Sbu2cgsFG9GFFJrPJho912wcuwgPmzzTTfKEaaAM2V8VLwosjmFzB73kqnPc27wfnQLJhgP79F",
  "key16": "43C5GQFtbkbg6CjAeNx9PHUxGtxPcNzEPBSxYURfW6qvSAq53TZgZsQaV566wVLmqFNyRUTtjJxfn7VMhfQhXBMZ",
  "key17": "4Udns8rB2mhbCFcCsEsGLdi8Mu7cRfMT64jJQ1D2CA1DeCfwfgnMRvUVeQTE4TreuG7iHuhYLJATFUpgJoZdAmyQ",
  "key18": "zR5oDpQB338j3AXKUhwoiGFPZksZELAchU1LVpyE4xrcKBcr2agqreabZV2NdLrwyzqLSNUAEFCSFb5QdyDaHei",
  "key19": "4AQNSHh51UhbWgQMrbH6YZ8fpdNpd326DY2Z5op9ENLG47Xhchh41B3XXyJ9k3asX2moxpo8qvpkVu76dcbA9HzF",
  "key20": "5wsXTC7W6G5KuerVhdBRc1A5o7JKMLCQm8FoJUP47p4x8XCckmX1QVDgSsKRCkE7sJsQRSQBBKf16pk3xES17cEP",
  "key21": "3jAPFGk7ceQ8jYdCwWTp87GyZtGDJjCcpo4MjWXx3XY1aLcnp6Eewtv6FWrPNC2MQ9jD9j7Ur5ok1L92LDCwG99w",
  "key22": "5kyNG9sQCKBJ4zRQM1JcBL4ZhbuAK9APcgmfHieQD85CUGZwFeKUuH3VwVyqY6rGGUz8ZESGqDy7fMWTAiKTJxZ9",
  "key23": "5pzuTycYfzyt3CSuAByu4XcXoBTysZjoc6AU1hNH6kVYKkpdp9AC3Krs22qEbjuwXssmk2GLQRzx1EZNitQeuz4v",
  "key24": "3x7fFhPqbsJC47rRcrw8wTh26Y7egcxhfA6EhrzEPpaDZZpnpBz36CNXjnyNdBpk2qYa85qcUWtWLQmY4cx6MzKF",
  "key25": "56BusQpBgffF84tTzvdeJ5ce7BtTD68C1WWPvoVL3inKcbnbx5FhvAXQr7exhet1UPE9EdmD8fNcxzwdcShsuc82",
  "key26": "4UYr51ySdCGZduKUA4iAzYujfYa54GTL981GAjS21CkWbgsfsj4b761jBSsEpqqH1dmz1d9LQAQGW2gNN84ktcFW",
  "key27": "2FgGEMFL7yAzA1tWQLJABVPnx7BHw2NhpGjB6AXsemvnAXwG2KjYVRnGi3eVSd2bDQT11o9vyf6zf5DfmdbQW2UN",
  "key28": "26KURXyY6LY7BYLtUYddcyhxhE9MmKLL1MWarzLFNd7WisoxACuvdbMLrBbTtEQhQSwrB8sbC4yPtBuSnFZA6o1w",
  "key29": "5qJKFtw34FFGBKNkkSU9eeV23J9Cc67puSFCyTUu3hYZqgn2Lq2c4et2hMnYZEtPkmxFbbGtGaXjddYgQ3uv6BQr",
  "key30": "4yjumqTv6mogN7QKVCiWwJMguw8H6fbczimQyfkGPsqq2ke5Gba129Pb4tLbQcBqCq1jfFX1hWysfBJEbhUM9AAH",
  "key31": "3DvS1sB9tZBhAoy6khpcXcTWZfWUZL36Vf6pJk7U4fvEgwWoN3wjZWjSGx5LK12m4dCqVVxDgcKFJJbt2s7gYJub",
  "key32": "3QrYaagZmtrKzAfzkggimULYpVgBe2mbJuBvCjR1AdwJeZ7us7YvSaVtUdDuTPEZecqDXGDXuB5viypGLtorzaMN",
  "key33": "5DwVwcNNakEa8KTJqk4LQcBL1pFReRU1gAXwLrmqaK4LXr67WWQBcSEGQVzPkNc1EcxNDqjYYKDGiw9TFkyvCq2t",
  "key34": "5ssr9hCbzPbfstgr14pVpnoGMxBTZ3tTEWqjnuKuAgR8ktFpm2Z1Gx4Yyh5DzvwD74suo4eRMm7apF45Xk5KpN2k",
  "key35": "3b6CmANtkfgg9xNTPzbhgc9ADpDzSLa4RTa4UbJ6jpRcYumjVzYRaPagkUeytivYiLZYtrx5MMoMED38zQYhXaJS",
  "key36": "2pw8TeEs3KwaDmCJqq6EfhRmb5m3w7mVEGG5rYVWPvqTKPkbkSuydWz1HgXqkZ4pGtS9j6zc98EeRxhZdLQgyr7n",
  "key37": "3zWuF4C5qpZU4wtX7d9yGoT87xwufw5Ho6W9ZgRDk3txERvYPPq5ksS2uiDouns7tQ8ftCrxvpoC6quuFLBuTnGS",
  "key38": "bYrPivvqazYEyirP1hdRAsnY833Xc3Nb9CEy26fXjfHbxTXyoNzqPPDzatamsWesX7F5Vu4j4jedCJmLHKt4j5W",
  "key39": "615M7W5ftZWBBDcRSChLA6LTmEvQ1thMvubj1i8oKQLoc7E8n2sP1uE2d4rf8N4RhobzbZ9toc8cJWE8oGPu3S9B",
  "key40": "3s4QoJXivN5Ym2qjiKM3y7YqYZof4ovwfva1M53Sj9jYWGfrh8aaQmMWgY4XWMZtRH2qYtVdVAkz66twFvcJ3u3N",
  "key41": "2qotYenouuyHApcbLM1Ne4mbZxj1MAVhw2somjLcG5LkgcXoRcfLdo1pyj1TZDcEg3D54byhC5yyy9bFwyqHhEax",
  "key42": "3LRLCuYTxymzhokFHoQf5X87ZgoAX31nbBBGVpDxgznGdrAQVqbV1pNTnXTvfvMCBUga1MQohF3HXUNuftvzjU4j",
  "key43": "4U2rB6GCDqvE31QSwoJ3ABXUnEMaKXiWRutv2ChNTfE6xnSqNfb5jm2SDg51YvhyYowD5QXHNkWqmUYEc9N3EZTx",
  "key44": "3GnDvTZNCFr1PE2Lsm2UnHoTLJMufA31e7hQwCACbcrSix942fjykrGo7mPtpwXgUgMBCkpAmskMDQKmgEzYmXse",
  "key45": "3WuSj2Ag7HjSFf41A1HoG4MHzFZxh5r363NoDGtFnwMWND412nEj28nN2S9EFnKQtaNYjsX2jh9XQZQHQ1g1rEHB",
  "key46": "2euZvndXiPfjt5KXe2tNZJQQb9ZqDL7xLXZioZVo9EuyysCMi41bB6rf2RShXkThTKMLJr6dGKRPstHmkUNzVFtz",
  "key47": "uCnWr8wbAB3eVToxyu39vsFfEFowjAzxUpK8RQDb2puygSain3KBKRtZexNtmiBVw3X5owmQeuSHCB1giBtojHv",
  "key48": "2SYy2Ws4DxMcYbUuNvbkrZ82ju7e13Kss25bUNA4zDJbrNR2n6CUhVxH76m1kRmgNMSXTEHq6Snp4gNCLKag6uAx"
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
