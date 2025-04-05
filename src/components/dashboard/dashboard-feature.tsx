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
    "2kFaw6ayutW5yc1m3kzJKcJZYQ3WCqkDDC4nn6N9WF3conADQV2UytaevhJcmrDSsTFnG9E1ToXQwh1tiJjVnkqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45q5swi48R2NRSRbDQJAhJcsTHku7eGexPmU3eE6Em2JW87Kqcra2p2GdpdxFkMdQX4Wur75Uf92ZemBn4aKowJN",
  "key1": "2u8PEv9isD2DJmz9ZiAg7SYoXimWsn9DhL6gaT4ehfyUQawgD3XxVynMbh9vHqE3w5cmzsoB9KCPjpvoBHd1uhWc",
  "key2": "2jhq7JtjABrMRpGAFj4qDL4cA3bNuHmVFAhKMJPhGwBtirPtdp26a1S57reoXvueq96YDz4kubE2fMK1rrARqLZb",
  "key3": "cugx6nXs82qgx17Lqn9q5g6ucS4uMW4rZAmowBE1GWXcrKyjz2g71hEqh2Yu4iQigKVFNf5KSYjvi5E6ynRuZh3",
  "key4": "4VXTZqtdciKd3X6xjSBZwKLxX7USdBrfkcwd88dvrQfYXUQW9Xh3VHkcKxNebCdm3y5dgsUhksrnE7ReQ2osxvsw",
  "key5": "5QzCSaJWGMhrniawCwcoA2aVmiPM68WtHDMhn5Dih3N5tjxUwBT5fUXGXpK7NReasMDNtCHHsVyMiy3dRiutRYr7",
  "key6": "56G8WfBfpLtmkPuMKZ2GukV5nMPoC8HXZgnMSxpoTp9ZPxp1mHMgXQM5NFanzBMNxRABdp8oWPRJVdLeHRt65gHH",
  "key7": "Zb2VQ7PTXWmsC2eabdz2NtNpVBmBD1dvkrpXUDUCYoDTwoFW31aLVb3Um1NncEN9ShJ8SGi56zrGQpQnK8LCGtr",
  "key8": "5Q2BNDNXNAgvAdXMAX14G8YLYdXgVSojaGRnSqY6kp5d8LrKB6soPhCHguipZFNsCmMpeBEigYDBj26zJ1qBvPiy",
  "key9": "dKD48dPGZMJbj5wAFB3nhqGUVpdZehU6vSa8dC2Yau5QK8LBdRhpSET9p58DX9F7AcsiofLfptGEB8t8SSmaC6E",
  "key10": "4bNdvUqTe4bw8eWd1BFE1CMkj5uAnLDxCbihBVCi6yqYMsuGj8wqaZBdGX7gq9cowTimo6HhGZBRJovT2KJK8fAr",
  "key11": "65TnWYwyVvQLKQuoHptM9N5PRQgdspm4FLkfNDDD4aPivmaZK2YTF9nYVtxXC3sa28me48L8TScGroxAhbGvApPd",
  "key12": "4YM53JpnkBwAdsPNgn6Eb4eRAKcRJsmXTkwmPqLBRN92RDxRZppcB7PSkAvLNNDGbjbMEeDhRj6z8kd3QUkhpHhd",
  "key13": "4Wz95uPZVEQf9ZgKqfe4EyYwYd3fvefcaR1jSDyG19CP5pj6xBuYCzHdwrnfgcn1HD5pyQAo4mQQD2oZDk13WkaJ",
  "key14": "5Qcijr4pDj5mUXKCxnrLv98aKexGHo69iy1QRuG1H4wus3LZRnxUzdYAc96NCaj3Q7wnxgzNkh4wsmJe4V7oVXcY",
  "key15": "4WgEpc6nraJBinc5ctTt96L48kSb2Eq3WQkqDtZ6pWpC2vCogPxAPUMjTyjEPCJjZNoPtNzy9zdiPgjd73dvf6HP",
  "key16": "5xk1bojNujKxySDog8Yby3cvnKJfbZBqDiwRdLdLpc2u6sKepNd9PETe6LAWCVBGQwv45ZtgJTXtfGhogFjkxJDp",
  "key17": "teAAoFjzjXSDYjCbpAStc8jwyH2Pfpy8fq55pXU2isGnjoi7bZiuinLYL77mGAdj8sXxiM5waGi23CCd4449M49",
  "key18": "2EHUekqAdnfdRPFBdvKUY4RtEUGqMsgwQEAy2rpWPEafQm1zwFDfKR1SMCqySLLe5zYdF5v2cDrVawoMwGspLqff",
  "key19": "4E3LHzs9owEW7XsZdpA1QrTRaoYB5UijXkjhQe5dHN4pib1ssx4Z24GnKukepGLrsPbrLpmED5v5CY4YcLYYdxXp",
  "key20": "4aHprBb7ZXcTKoBxTfnGUei62BmHf6oLu2TXzf1H35sGv6FwJw6YGsFqDnB6SQufMWyzL1sHzVHCiVgRjuMLWN9z",
  "key21": "3KU6Pt9YNVPLuAGA9Qga91DhETB1B7fyVqrLCyNHRCzR5V52epGKKssjnTaxG6EbPMxTDsEyVGZM2jRALHcR7ALm",
  "key22": "5spgcCMNB4noygHfsQNNzJR7cqY4yHy5EpDE3CitDeCsZkLxqzxaiScNT7r4FKAu7qpV24zkR9nbLFviK5PSf7ac",
  "key23": "2C6yLKLbuqnfkzJrgWDKKX8R47MCpnsvWYMgzK3uTV7YFpnex32fkKvDECNEwxjJrFMntcuLw66yQ8nC1EWifYes",
  "key24": "MCDJL64JxZHdMSTcH4V9kM9hPxDLsswJMFDQjrnNwnXSzf83pgcvbxPJD3jrNPPoZY1R2BDmABTFWwosLz7BUGJ",
  "key25": "2uL5B1oQLNnZtgdak2mMH9cwh1DYUz9TrTEbyW8nVo7i6cuvLqYS28KxLdBMa88oB2xaV82QNYwSjNNnKfT1m5Ga",
  "key26": "5vmbqpeH5jrKxQrMYVUJYX3XhZnqr75RgdditAiGfYCkXaW8ECtnWDiAjx2KE3QVWj4pyNtEFf5w9qqUTGcqmXxz",
  "key27": "42RfSkSVX13vzLjgDACztyfc11YrfswtMkwdCTiJfPn5ZzcJFYgWHxw9o55ogLpxQ5VXZrRcHq9bzyBBJmEeSiZh",
  "key28": "4bF9ptyrMgej2oxXrtHPzt5uNcDbTPvaZjde52mSQuJpjsUQ1iyL3Bs3EwPy7KdJyuk4gsNXj2JmV7WxJgi1Cfix",
  "key29": "3cjcRUmFHwQfv3BQGDLtF9vrRnCnAPKxhKESzvvcxryn433cBBWx3wsqrKdT5usEyKfX3d5N4P8pNUy2mUTVVum5",
  "key30": "2u7v8whMwKoQBtXgNtkhEmgnEgpW8duPhzerKHkCZ15quzsekiXZQWv8qJ5a9UGcoCc2K9eTuscvvQ2u5PuY24rg",
  "key31": "4a8U43QxYEVStidLZdbUNY5iojRZUs7fAGGwB66pcBeFqL7yJ5xpKtyP55ghGwZXX4bV6JSYuaprVC1JHat5zd6s",
  "key32": "3aDZEjZco2FVV11uAmREH4cJd2VENxGCDKUNbe5uUNTnCDoYGu4fAeDW6fGvyCmqhRoS8g6jHJH4E9h4TJ7haFT1",
  "key33": "f76RitFwTckaYr7KN2zR3DTV7q9B4dTegr8y5TSV2WWeCTFkwVtBr28x3UShiqPZdqouFbDpmEddaSNz6o8eTcG",
  "key34": "2yHsDpsx8e8Fv4VZARb5dQeSspiSX7qUj531AHdyau9GxdNbB28PCLFeX5boH6RucpumgFSC9z2me4aQPGCzzxnj",
  "key35": "2WtEwB1rtRjZRpvaoeMuaCUr6vSN7t298sPyMzj1DaNhpaj65CYfKoBKofcg2cLVxkLfZkF1zBNTo6nfQCrzaMCJ",
  "key36": "4DAWuEXxasK1viiS4qnvi5BPye7QFsAufU1B2Cf9CVqyH8YUYdTj1xbYBNVJvipSgqXSnsW6C4YTnUfQUsfhihmc",
  "key37": "5P4t4Gmh7z81DDNdykNHBDg9fxj4ShZuFe24s7D1TmdH5zCszQ35eG7D8FvVAHdqqDjoBFhXypjjhUYL2h5fMqch",
  "key38": "61vT5GDX7ckZL2zKtx9KC7aLhKo53WwkfKHV5LR5Q4Wwnhy6H7s5QiQ7m4EFtKd2jEf2ycuZRs3fKzyK4mf65HLZ"
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
