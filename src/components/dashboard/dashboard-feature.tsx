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
    "vQYVruEhCW9MT6ofaA5EKy39cxeNsJ7MxFecBCQ3v68JybFXwf3kGFYYMANj7Xb4u2QbagtGV6bMHYTEAxzDiAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32msFL3o2TWLeEea7LrmzKrWRZvrDPoLEW3cyLL9A2o4Q7t2KybVGJn8vWjBkZKTdn5RC95G9hsSWjHLG61ac1Sn",
  "key1": "4xSy7ngcGkLBSpJ7uofukAcGCkwHDoRRcWkRW59Hz1XF2RvaUyJe9vZ5octjSJCQ9xvCfDhgGqgxcuqdVAuStBA7",
  "key2": "buVM6wsr6jwhq6YLKXTokhdjakaxZpWoyzNA4UVbd3HPCxamGgmiazPidVW5jCRoc2MZc9KZrLqgF3xnJKD3FhN",
  "key3": "2n9qeyeP11FZwfpABshxFgQ31eQdSVyqsuJbLrExpzXTnRAVeNtF6LPYo5U9KfhCVeAf8PrucFjLTGiZdQnEF6yx",
  "key4": "3Efvz6zPsYokzN8DvVzpphdHedMvLvDqLVzfgVNx3Fm6XtxWo5xG1qnLFGYQ8bHguLDEQQ4Tx9ne77awnVURE53T",
  "key5": "5DzqVPEa4G62eUtCa3qqyLHW6NVNdkfEGJSSxz9VPWCZAUA84mCdJWxhGU6CfFBZTzapGDrXB5XGpeAK9ZJBvaZC",
  "key6": "38wVa2bTXPNfkm4DtMHGsb4xRzuHviDALxspkywoiquKuKNhXJYBZdHRufCLCEFfaS5UYYX29dZifWTAHzkF4kjd",
  "key7": "4uhh422zTT5SeSYRfRZPFTqJeLh27ZCj6XjjDyDxPP1PQvM1p2ZUS5EK5fjtBzaUHxvL4X9GbUvi6eKwdttcrYRS",
  "key8": "sHmkfcn9wA73cpubJFasa5tTVtkyFqUfr9xNeNmVnTk8jVZEDgec6AnniDkaHBZLm8FjVqB41WSe1zDMshXE8xu",
  "key9": "pB2UJ5K11MPGq2idzojKkt5o49QgcNRubnsAoPUmE2kugeEpbreZ8mvi7zaECewTuNHgoFxcKXMM8Bk4VxcjswF",
  "key10": "4aaoFVEZuUAX1bWfytLPWFHBTXHsX3KNt7MeDs5imV8nmBTFUWcHXP4UK3Efo4pe7BkSTuq6edDbnBkbHQmR2GTH",
  "key11": "3pSoZQbPeTLDgPMX25HcjqW2reyaYFikcugDiuTGYf5tuKHZVFdeychqwSJZzXH4a934KZ9vZ41hGDymEWrkyzEU",
  "key12": "1tMdqewRbgWW2ZS1nTm2AeZCBUKTf3UwE4tneUV3vFbCxaor4oNzGdiNydyoe3TvWhh88ztBNGrzcShSTfkj5vR",
  "key13": "2h77g8auGbiy6Aevx87xkPWFDVVT4FSoZEQRU9Th8JXcup3Nb2dnDGAPWg5CdYBhYV3ZbXoGnSg9WZgrDef3Xc6i",
  "key14": "5zHrhBNYMVSQX7WtwcKwSG5nR9MoFe4aYsbhDDXw1NQYEfsnuRKQM31uctowZFvJtYaLhSXzJFzbrHJMupMv7eDD",
  "key15": "5chymJ4XuFCaEE6d1hwgUPS7NLQDdbvUs3mqZrfjerM9g58rEz4hV2dMGHq44d9NogME5CAx8BwMAdyvUuK8xBpC",
  "key16": "5RxCM2oH3bMXzcLp6SLbAr9MPGXh8Jww3YuNKZheyq4W4zm473Edh8YPBx39kgXwDK58Pr2v74ehEk1DdoE9rFC7",
  "key17": "3TmgLMmgE3MojrxDqJML2MAcnNRENMTrnwKXu63gYy1WD6A2wkt2cy3vQhrJK8T4S3WqkeW1bVqieeDbPky5bh6Z",
  "key18": "44MDoa3qVGiFEaQnGyymc5fEcGnsYVyitZeP69YtN7NxR3ZuF2HMVTRybcrt2isymS9j1Xpu9KHHZhszEruyMRZ1",
  "key19": "4Xvtn23WC3ZAUvjPkLQEGhYQTaj6EmusxeYjtd2qDXiiK8hB8aVyeugMQdKcyacPDa6PRbjScS5zsYemhmqVhNek",
  "key20": "4yfE4kBbKoS3i6WdnVoJaqMN3y2WeS6TmyiseSfqux4Bijxta6LNoR9fcdonsN5Wxex5nA9B8Ht4AUoqrYTmetSB",
  "key21": "5c4tFMw4xadezcQGVL1txAKdz9tigEKfwXBYTGrvAjiVai76CVptD3GDLJtFeWeahnMqqmaLQcavYxrHJzX18B7r",
  "key22": "NjAxPVCxjBgMNt3fkY69iXtiGT6PMGacSpF3srWPweq8Hw4o4q7P84dw51FXW2F1qPUNcoBnu8NPHiJFwVha2wC",
  "key23": "37SpooWs435CGT4vasiCA6XsKz6m4PJKJUf6dwgr5DLCxGPsgUVQ7Unu49X1xMYxwuv4k5ELZ2qQBHRSADrYnE3t",
  "key24": "5DZPjTRFY3xb54XSjTvggbpSTrZPqsHiCU42G87b31xWj48KTmC6TAHEo8URTLNL3DVk3aPC11gvB61QQvK8WAux",
  "key25": "5uXV5VPFJCMKHSWf62LBwaJuKXq7A3DQyJ6NXE5JP1jc1wL6GQFSWgd2kM9oNaH4fh6aiKRK2d53zYhVWkmBqiDH",
  "key26": "5tgUAkbmfg9m9hN4prg5TfDFR4cxhHEvCUxbW28o1b98d4Jg6ZdfUa8xM8fv5eiJq5dQPgcSyeJsCJJRXKvJ8DuS",
  "key27": "4GDPCdFxfn2ybsRJfpkRmFUzcSgsoeZmxJi2MXPiGDa83D5sYC1TAAw1jqxichuS3Xvr2jPP8xtafsRXdgmuiuks",
  "key28": "RbPSnDWBHjxGeTS6msQyrqj2CmQX1pK6kZXVWs4rZBt5VisDimg9mu72W5At5Yh2XfDz9BGi9WZ1Z1Q8UfZw8f4",
  "key29": "2gwie1EPDc8CtcBuWzr16mD8g54juBLegghHitwtoHztwy697G4sNas9pon9hbtYJ87H5hJ1CdXZXckDHkP9CWE4",
  "key30": "2Y3BxDLZGxrAnXfQZ8wai7nXxyy3ehGkt346NfuJGUa48X8R62xDiJnAaUa4WG7TZBuN8e9t79cgVSERHhxnJgFe",
  "key31": "65WMHqeau8RSdzwNcRb3nfULjjVKSMG6dhdheayesNCHYgs9KGrZgJFmfXZRRLWK6PzhcLrF2aMRnr5kZKi3ghAg",
  "key32": "5gz5SwFNNpkuJwHVuVEuzNxQaErVHd5Dq2DYnMMPD3hYqiW61feUJWFpRbnM3tbSri2ZF4hcrr8ZPfE3VHc5apCZ",
  "key33": "2Zg8gK9ZLgQqkHdw3Qjynh8WC3uk4j9c2dfzwwMxxMKvKcbizLHARTskZdyKYBDo8uu4q58n7QK6g6yayZ8i4XqT",
  "key34": "5WfushfdHbYudJomN6NUc62DQ4DdVGUQ8bHA8kyjNBkyDigqctWShKoF2FELmGNyVzPTtXHgFPe7wZEp7ST82Xvz",
  "key35": "vhPoiR1GNZn3NwqNtzKJVHg13HFt8EFCztLoFqStDxRBhmTEhbm688dPvWHeGfuNCvi8wfJEpZBAygtuKW8ZUGs",
  "key36": "4Tpaj4kbnCJjSu5Dg2UeBEZQo1axAEsDhprdKeLLh5rF7fkrSvhfSdcGSNH8oyHBUu7q9rhJFwak6ZGEU9JS49ba",
  "key37": "3oAsZt73aMP1mkL8GnnQpXpWKNKZkj3YcogFPsTCs8LHNL9HJZL1GPvA89KhQMyaRYxoWB3q5uGAjkMMz2ed658V",
  "key38": "3ER1Pa5hq1BGCWyzZfykQgMQPFukXGQPRRvxyT7ympjZ6RUMyVDzLx4seqLwWuJKCBwbejU6Lr9FSavarrzsatqR",
  "key39": "S45RhupewbEXvLMtUWCsYXXLoKEmGbSXn756HQu8bgWie41SW1vKvWkSQkQAxpDA49yAvLnfVratkvc5A23N4Sx",
  "key40": "5QQC4tFHsjPoCCUH38ZR7rtVMKAt1ZUEVhgjjJ7Ut1ANvcfe7qVDWkz8iyFc1T2fDhNRDafMiS85RrJTkfSyq4R7",
  "key41": "336HHYVrBimUXRAiY36728wUzZueEcs2YCg6dxJ6PgYdyMBWzYfPQRanMurZKRkW9YBEK9ws7rF8tWLLFgrPCA9e",
  "key42": "3ZhAYVjRcdHmwqnHtAT4d8qY8dHHQ9x8YYfAN591Ygz17pyZP5GMetVETcaepdp2SQH1Ss1utK427P7FCgAf6zC",
  "key43": "2GdFHL3oKeVAcNYX8cSU6rB7wqymZ8d1qb9AC63uH3p9Pi7nRvAYfMJcnDdV6Exz3QxR9C73GMQLncihftRum1SD",
  "key44": "63Pnto7M9C9aRSspjMtvLHEmhAL93PJir9zbDVy8UYeppHRX4bBe7zcUHNqAx7XpctsNPvTKDvZAGEJT9QoCcNB9",
  "key45": "2qyzSdfEDyBgWLG81dQQKFxPVKQQDNZVBmNBK5uzxhvdC81H3En7mfeaKgF6fdQKY22AmtJ2shQHmxjTHihzpWaU"
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
