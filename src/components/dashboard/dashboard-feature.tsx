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
    "hEXpAE3EWmoMgdbXq69CxW7ZCWYj32ziwM7REwHxioATFQHgCFufujmY5psV9zxDzeyRgy7ATEDfxxZNMtjKu7J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39zp4hq3DKF5jtgNNWyj5BeHjVJrQwJM4VBdw9iT8KreDbVwhFfjBm4gymJLJFBoXrFpznLHnfBSuM11cLdr7H3d",
  "key1": "57CKbknki4Cmu2LL6Mom8fifq89sjhsH3A4HunKWY8FBDT2SPYgY2oELkUc4gGv5ndeqkf4Nc7Y7VgkkmU7M14SE",
  "key2": "6NXK22TPrR3x9vVDgw3B9uFMzwh5T9pmSHw7xYHCy8FZdXsVNY8pFhg1VfLiPwfvCJLuiQrF8tDfLi3zmhj5KyF",
  "key3": "4DmJBMNb7q6NzdSHE2eiyHfiTAMvYCZxcRKT6RLbdmfYMkcZwGHSRqnG6da22yS5s2gQqgtpDPeKhYDhYXWHTZhv",
  "key4": "57iT1FN5Jb7DdnRYw67hrUhrGvcNtaZzxAjLiBs7RDTEpK1nx47nZNbTNs4JwK3UNSEWiQ2mmAEM2Tx3op6g622W",
  "key5": "3CvcpThqNciRCYV4ZwmmN8LFpzKYQrKGH5y1Jf3HeheeR1v6VrvyL5bJKucf5WNtswwQobkuFB2VvrsHqnppYpGM",
  "key6": "4dM2PDGPdEJSoNd34c5CLM2LN8jwMS9EAjwLq2sqzVvSeuEw31NbusaDf3csZnJzCUJytD8QXgeuoRfJT3Knj6fc",
  "key7": "4r6XXcHSUmdBc7v9kQCUGrV3Q46qv8qqdMyFHHxrt5NVg8QwqBRQiuWpkbYyh3G5wHYuWoEcX2uQ3yDvLTxhwBEu",
  "key8": "xsTXvoiPbmNFFV32rVVigtNB7ETMXt2TvtKswbYPrghFRe1TFsykuvB4efca4YYXRWUh4P78v34iMnK6AQXY5Jo",
  "key9": "DXqS79BtvPCyR6H73oMWqnGcBjUFAzvivHCHFXQ3626qFUH8ijtZ6j6XipjCRXCbcSKYbzunvzLcUasRFrxmbTw",
  "key10": "4X2B7G6x44mq7uXJujBdziDjtVPNtRHzhW1VL2QqMFj2zKEfbqVrabShmvGBgMsv3AEE84G8hymQHjmZ66vFfGg9",
  "key11": "4PNPmuJr6i2RFZfTyAh4tUDAqCZL3uVzPvAZcAmkQ3zdv8VaRnN886jHf5UNaiQ5dacBQkBgpVoQo7QJXCxcv3Qi",
  "key12": "iUfhGGXxmEgJupShysSiY4jmpCLHTfa2k8UaPJ1tW49uDFU8rbNFGN5YruFW4HJHF1CYPUmDiYTDTLZvtmCCjH4",
  "key13": "26u4tEvEPd4SFsNADHGKATrM73yoXfH6Be8wTJFAq5zVhZmBkXGpDGDkPrKWP4CEZ6f7v7rjgaLZgSwNWeDcB15R",
  "key14": "3HoDEebeLJ5dU44yhR7c5XYC3tc98VxaZFvhspherqZhhRimNhjC8BdmBtd43yJLeHmhLiVyPWmke4iGgPWQKoBv",
  "key15": "3YYgTse9TaUuV4hWwBjQM61sThgG2F1FwmyXMRuDWiCC9E2dJiW4gjHnozRCvDZZH7LcADutHN1Wj9VDjCz7MRZT",
  "key16": "4WJtGDQQHCeDeS4tTnqn7Ui3GCVHuraPeXJoMqqehuqE8dDBTUXRft9wpYdeB5LkxUHj7KscZFmDTBLu97ctydhG",
  "key17": "26W2CADkeDMFTk8ye8jh1DmxRoT8RFA4u4tTrqV1jpKBWCkCvPk64BC2FUqPhQ9hRXiiqvKmuNP5VVyZNsvKAEG2",
  "key18": "4JnCwy4yYjKHf8LwHgLNeT2nX44FVqx2uag5Ld9dGHck8oLi9T7vkMeR2ZSorvKRG2gjBvmSXEXUJDJaHsk2YZef",
  "key19": "2EYmru8fF92inEmM6DNHdoNb7CBQCKTCDN686qng5y8EgePYEGV7muRewSDc2wqc2khoHXTfZeu3pjhRQiAdh58e",
  "key20": "2UHv8ptP4DMnaKd6f8rXuEBMwFgvkbKfuzEvnBas9U1ukNvNA15xBHvrjsUYAb6Xvx3ZFNo3KwPjpBfDX2DNifTX",
  "key21": "5fZDrWuty1QK8xfsr6Wu4SzStQG8CRCADMPprsz6goQmnuXqJmWxFUesDBZYRDZ3MBUTL3UrjshDPDN9Vs3K7AUp",
  "key22": "VFnNXzwByvzGcvaXt65mLfVw8TveTCcwZEtGj6N5HPUxsRyFatbxBEemBqySc82uBfeLRG9nDsF8wvUi7PkiVgn",
  "key23": "3khD8g9xn9CP3BuJVhjMBvgfNoC49hLDE5vpgt4iQ33qo9APEdY2yMF3n6Sa8ZvqmcuWvGgvzhgW3gC2GwdJdGaK",
  "key24": "2xFAmgpQxovSFBaxB3ez81tnxSUj43w1X8u1ULVSBswxAuFG1CSzxLdL21cKLHmVzCVcAfbZmHqA5e53xQieVjiH",
  "key25": "2cJusiHmkRjMa3dNwsZK7WPPVLpzFN9suFfGGTgeLvKFeXi4WD2FcVFnHqSszVQUNRGavP5FfEidrKAXQvAn14pQ",
  "key26": "FHQ6McoTRqVMPYtbT7nqjdYg3NwEB2gfpQwfo8VY6kbzKRT9yZHrEGT3E7ME86LbUeez7h9PqgpLVkLMCXX7Pu5",
  "key27": "3ZbHwXJpN2SGnitxeHWYyyyEzQgwHko4iijQBSp9gN26X4BmeAJVuFE7W2WsLXAwVjuHJom4yhkaQreeN4rSr6TT",
  "key28": "5Cj3C3fMH52tRvJbVewM2uTrwoVzBEMpfapg4qJH9P39kj8zGnTqcSUyQrvkPfZ7ytK6qtqSEqFuaS5NhRJ569mH",
  "key29": "gDhoekZf4DfCrq8wSbX5scjhM23Tu4EYu2udgNm1Bk5z7euZVksyGUH42FDGNuLCCMy567gKhz3zrqN8GkKnJwV",
  "key30": "4NnyCGkjWGdpzEMvKFBXrwTvQgw2r8rwM5JwRnK4PUjsF1UduQb5EugF6h61A21dnB7p9jeEfonbMRTTWn6kAm7K",
  "key31": "5oB9e3gEY5aVBMSNEibsAUu3GGAXVc7AgmsaEtxWc345mkpAkkrH8H4h4DZ5sd5gmbXW5BVwHQHVCjV77EZhtQS6",
  "key32": "mt21FMzwbJgUyEpFoyngPbP6WJva2XtdbXxUVxvmrrXgCT7KVF7XC37JjBRP885ydwbCcGygty1JmXuTmky2wgF",
  "key33": "jq32giMvWkFsAFhczzRPpWGSb7bMScgj3Q7eXyjiAaqxqkEiAoKVYBj43CfMvxtjHE8PEcoK7ic8sDHv7jdpmjK",
  "key34": "5j1gBG9BZ5okENVso7ACZdPDsZr1qgSK9mfgkgrBGPpCWp8C1eLUmvDDfvqPrnPB48yCCLLRAfZo9nLifyf4q8Um",
  "key35": "3DcM84Dkso353GZpVsbNiWmeLzxwvL9VTADZTXZhVNmzqqwZaEex2LnJf3LJZuQEh6au6Q1TnANQpwtaAfU8zK5z",
  "key36": "crDsYA3RENs4rCRKQwNzcEenpLticnSbrM7LZyrzZBJG5pjq2LJYPJc1BFzrdAtjc2v7gbUHmLNdvYJRESKRpqR",
  "key37": "5QKVS1VeC14Uk84pPnefKpESfdqJ8YxvH9wdzHZznrQaZTVXRtgvhj722sUh2Y3AwcDxtrxiDoxUVawRukti6sK2"
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
