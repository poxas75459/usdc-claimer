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
    "3F23HqyC4JMkD62QoALYmofRagrFk4AcAggFVGmiP11McFwJiK8kV8HRbPySCNaqLcRTPJjYB5sJNd6DC4HGbouG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyCXYqZ6oaoVYBoAX4pZnDCEtcEkzRi748HBptxuoWVmNpnjKYs5FzfuqZAvqw5vNEoDtfdy7KAxNAutUgPGPUm",
  "key1": "5J5LG4SMFiBJXvXQRtxTKHiZ36LphQ1Pp6y5yicPFeugK2MnQvoPdCA2SDc9t3tMgmp3xxMBwS9hqUBuw5YhFugV",
  "key2": "4vi6WDdPNRhj6JEZY7iENSMEjT252g8dFtCKhVGX1VwdPcmwDknrGdCvyZAnrJdVqBtAqt5bpWxDmcn6PGcL2TNX",
  "key3": "26LJnf28R7vepMktkDGpzc18aqpWqm2aVBQ1XNhyLHE6PfcZ1iBAiJgyeLdaaLEBKEAovSJ3eWt8ctuEYsWN5Y5c",
  "key4": "51ZU76povBoL5GjrU69pDArKfXs3aoDTe4k5KDwPMBLkDiij2zxxtmV5VBTpqHo96n5mgXCARYEXt2uJTAWH8L5b",
  "key5": "5hMTGdb789h116j1EBUdLquvfThV56CHkAq3RNe4gA6m7tqVmsRhxzUDaVZhc8o1j4ppGinxfGrQYvsA5kniA6hb",
  "key6": "3wNZBV2PUeD2zmivsmtGueKh5Z3kJQR6Myxq1b9SeQv7eB4iE2Kv4KVrpCTQk3g2t4QahN5iz2yMBDE469e6AniK",
  "key7": "4Fw37EFNYDVdkBvcfpRZy6PdG8BLHJBHfLzK2LH4Q78nG8DZ7cKrrXpq2MvNwWEK6XzBzuHDuiQvQETwwJLer1LK",
  "key8": "5E1F6jFFveUEfQcbAGnrsyqSJiYCp5AcQvQpaXmWCbcVDtA6DpCBoshZ28XtegXRFyG1qakpgvfok4An1oeYrCL9",
  "key9": "GQSG61EshvRUmu8yJsmJzy8vNMAqnpNGapViYtYyJZ6F1qsBjMVazMsgGopMshC2AbPLt2DhsmNZEwhFKtZcG98",
  "key10": "4gpdSL7tcme41ajAiiLkwUUESqRyJE8nKtJHD9159VChu95ZXrEMBFcYfTX57ExDRwKAVuNxhB3y2BnkZMqmG1Et",
  "key11": "zWsVkaT7MZzou7ALTWeVvAGwig2fDGvb4x7nmmJbK9hRUYMtDozdv78P2nzsDFgSCwPCeJ8gobTueU4tmYLQL7y",
  "key12": "2gzgP5fUhuhSxPJbuhV8TBNETebJqVvuW91bTpAUj5nvt9bD8Hz8HAa9HwELcGGCnJnUN65bxL8YBnEmco5C9Wzf",
  "key13": "4CDQrakKddstBCbmE3edHkD1B587bBE9XtaM3Q1BiCELuvB7GFuknEFopAeMikxqN9fgFVFKazsBsDz3kZXbALFS",
  "key14": "33YE5y8KEa1D8JwjnuFpFfW9QE34Z8PCBB3mdHv3wokpBFTNS2Cuw8FerhHEdrRhoNrTXws1vJYsCoHeAtQUxW3X",
  "key15": "3a1jX8jQ6Vts5xEwto2fRntcUBqNrhhjdkfneW2cQBhbekN2udM37pvaeiRrZhc2CezYtNBpQhgYx1RhZEUYJxwb",
  "key16": "FVGWLpEsqrz7BKbDGpWEQATTHgePLaSCVsW3XwyUrSDPwA8Y9RKd1LXvBspDxmUvPEpV8eGCw1yNJVSAuQF8MVe",
  "key17": "5sGuFrTZZWQ5YGUGze8YnxV5xwvDBnbk3meqYyvFuAjXoQYnuewDxjVSd5sEgFFCmfpkf8XfEXYK1gkPA3mxV4YC",
  "key18": "5YZQiGBxsAprjdGeMXfacsYSmDLAidcoLquhGWUjMHHE8ympoPYDEYobhwPq5AF7dABxVHUCyN15ouAXcegQ4qEe",
  "key19": "5pyXrwusk4E62AK7AaZLXi2u8QyrXUAJEVDGBUUWChDvjXQREz5epA4jMSb9rVkCBbK2xHkAUQmChxSgFQmQvB3r",
  "key20": "5kgV19X7FeJJBPSATWaRy2y6zEQySNKapMQCyTpSAD3WEs9CN6aGhkD6S3DKv1f8yyJDMrUhL814UbrA49kEGMSu",
  "key21": "3Ja7mek4TLxhHiop5NPeCFCP1a1tQuqzAWHYUXwvUTthcnoWi8WKGyjgAyzhaqJp4FQvNo8csnoyCG5gbBS37h2s",
  "key22": "5oaotg5daAr466we6QGXdbrSyDKVGsdie1byGp3Ha15sKP8yZuF5aqkunDh3rfzYadae9gvJ5areuDMDt2pjraJi",
  "key23": "P88K7tGcH1QFGHagcgqEzqrgMjVivMBWXj9kkYwbh3ihuXi51HWwcjo2tTm27aLUCLGrTkxPAx9fNT3Phq6D9DT",
  "key24": "3oUsxwmNkeBPcEf9HLqdyrRH6v18ivZqaKUpefVhn3mzqWBfmJqQmkQPPWzV25Phx8oTHxkE9dckdfMMGFUFd54u",
  "key25": "25WwFzKS2gEqkMtaopaRhJRe21aax7bWSYY2X3QEj9aAjf1Q33jy47Upf2fabK2MPwwYZzqsEKE7UEZPQUL1LgvA",
  "key26": "3jGs2fM8XZ5strmwFuEu1cpXUqm6Gm2vstNtBFvzsUhz8MSWDsqm8JLgSTb24mtc4btFmFC2zqFJn3nJ1cvu5iGj",
  "key27": "4yHoUuy25jtStzrrjBHKQYSC5iaWeXG73CysD3D1Zh2QVjder2s9xvEguBme44bJkFXbYDM8dSVrpG9Xmp4Fmv71",
  "key28": "2mntkkvgbEWsKVaakvS18dRtRkG2Hi5YeSjjXjv1k11NU292dZQ7Tn679KvvTrqoiNjvmM45YsqhijsWFGTceKy",
  "key29": "2N3Ddd3WNZwL31mK8C3cM7gCsYGnEYPHcJaw4TznePvcLjANvihWgNAhAkPq42a6uxL8FqSjBpTDZtRaUh8kFUHa",
  "key30": "3bQb5t9Ny1Q4QwnV7p9eKukmgZ6s92bwPPbazRSXLidiNpVjuMc5S7KvnsC16DRZQQYjxje7XDPNPaDmUFN6NL3Z",
  "key31": "2wtnFeEN5BTebiaMyBxToCztkzsFiC9xCQieTEJoABzwEaBFuDPMhrPpNSUv48gM3RmDyKwXDnWAbXoKCvit9pwf",
  "key32": "2tZsFdPi84gykGEvHLyicfmcgNUPtPNmWjXAwhBTyXyrRpwqvPawRNKtKz1P1qxbg4qye3UhpMKAxmDNh53BM9rg",
  "key33": "5K9yossPwDK6YBGgxDVNhD3oqxN54L6LLijbNjtiGQnBQSQv1kUfvRvge4MV5ZLR7XdbQ1qbYut4m5YDZMyLVCiy",
  "key34": "57x4n3DAp43fDYTtnYQS68a3zCK9Wdc8WnN6v5Feq3owNfPyBxTz882DkBuNU1dgQGmjkqsK8zWhVcKaN48YCuam",
  "key35": "34bhvNzsKscofJzgjqoBt9QoVBfD7k1SGhk4XiPovVsropYd3ejbSLYKQYZ3UZziZ7232XvD1nBVGVQRJuqsBGEL",
  "key36": "3sptYVbJGbFtd1f2Vqu91Usc1BoxNsMTRoZeYGGCJ5dANb918BwHW6baXHtq1K9q2jrNL2PKveJY5PwyLbQGa3vz",
  "key37": "4ogDNaVYfQAD2Uic3F5Aa19r5W97qbhKoqgqjD85V2Be1BPfUb5CpZLL1AzDqgK69G2H5FTyXgzLozpgqog5Tfn7",
  "key38": "kayaSeactCRtnDFd3abjNLDZBktMDKvck9GBCtzemrd7NcPXodeJ1UTAatAPyrXoNpdb4HNGUqy9c7PEf14rmQY",
  "key39": "4wfnXBmHoSbuG8Vn9ViCCcSJ8qom8taiR5cGz8x4HDbrbnyc2QCCRPy4Ur4s33Hrtpp6ghQWpgymCm4tXKDTigEg",
  "key40": "A7s4uREKoAsJdPXeHN6aYA8BfUzs2kLXzYD6Y4XpCQePqP4RMB9AFKbz2aeXbBAn6iF4xkiB9XAtHjipaXRH9zG",
  "key41": "4CX39o2CMS4w7CimEbdX5BfhDqeoJWnDJhHCzWrasnQDZotW7TLHrm4FQqfo5QVGqe1yGT2Hx6N6qPGw5MoT33NQ",
  "key42": "zLUx1mLVi17WFT1tggWEg6R8vnqkZV7C84kh2V8vhw9PqkCmzyGS8Gk5vNmcuVCiwV8AbDGUhCqcDc4i7KLfYPS",
  "key43": "2s3ny4qRYbtKMp51JCyM3551FZRK3HHKc1Z7JgQZeUpPp6VwCzSXNQeUYoSewDE32XoAiFWhYkGi7BNMicQKMQVw",
  "key44": "5WYZGxTznHsEsUNcUTReiVCKJw3F97yAxqiHEaA3bif2U5dM9QCuqsmSQKA6hV7dCqs4gGXHTVJq4EYyh1LFdri1",
  "key45": "oGoumEiCgjaVT9rM32wrgwEQDiZU2LKzjZa5S1TZirYsSxKsC9KzC47scYrj1iqFVDXBvm1HPZGzZXD3cB4LV9b",
  "key46": "J3Cod7Dqw4fHfKZgt8JXR3mA6ZSjj66n65Av79jyQUShzSyARqk7ZVkHMs22JnLBEQhUaXDXJnndxRd2QoihAi9",
  "key47": "2ertjjzfbNyMApWvFQobko8FBqNJQJDXnmBD26msdTLk7BDTxRAkSdqkHPF99CFHtTyncCLiPJ9Ju9k4ewpY1t2c",
  "key48": "2Kwvo1wnXiAQRdYdfL7LUYt3T3aNrg2bHEXteAfxxAmxHwZYFoxkvCiVLPtinhz8K4Eh9WSSArzZn1vffKFgfwLJ"
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
