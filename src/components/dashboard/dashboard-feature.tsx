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
    "3jwRLF8VZZr7tBFnyG71JmVFSPEZjv8KgwquQBiDpWFXc4iHD3XQYugpZkE2PEeQiwQeAzve4UGATjZdnns7EVEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TqRzdAohzQ1hwPLnMppcvstFDtgxhZFxAnZQZ6CSWGdoift2AVyrnZD96XrNt4ZzonsvTCPbTddBbibezc5NGJ",
  "key1": "44qDrp2xKgmUvJHpscVZ9CrEiSYEkG6T7t5Y8FtG4FhrKUgncmmnkapMYEq2jTT8veFZSkpcGU9ZCWE73bQY6V4G",
  "key2": "5xGd5HVi9CxzXgNftWzu7VHjtLXr5KKrgWyqUGafo7sG2s13Y4mJgAEbgR7XwSDzZrKN6KBgHHETSQdjjgHGJeG5",
  "key3": "Dr7P3sQQbZ5UE1Q8sAZ6WtTGWTN316j1v8a64n7bTSsuBfMKzsTh3BhjL9foFGzRV9PRywMwThonzjsVsRaBbUo",
  "key4": "3YTXEYTM4uf1gb1ZWp4NZAVYhQUynVzTt5ejqicRF5nM7NJRb6JwPFvrCZz6EZ8sDhyHEdFDJaoL8buAAQfi9MVY",
  "key5": "MoguXK2VZqTfDf9FGmoAE6aQhg8QquKkzh8xyQWCT5XyUtYMEr5uWCwAiN2sDmF1oFAeV5d4QyVn3GRvnVsteEE",
  "key6": "3yTRQznKHFeJmDPZjTonuNCoJdA222NbqDWoCndAdHbXFKwHUnjfjZmpBNCrywVMDGbnEjLDSbaMnBexUDMgCgSn",
  "key7": "5BKWQBPHfSibjsGYR8u9vM8C1ummHvJnYtZVQQkexZiht9nvXsjHw9gRfE4TUQJfgtEivXfzA7cnBUMwwmGSoTsB",
  "key8": "3wThswDSst5R4epc1Zyab4YxD1nvkVBdc1oTN3QiSimj3pvMN3exkPjobVZpaA34fN2h4kaN88Vdgco7gGd4Jmx9",
  "key9": "3R7WY3MpyFohMDKiUCVTVGLiuhG6HYrKiWPTEDeFSjbakm1RPNe1rLKLonR7ZgSjxHwbsELzNSpVcDNtiWDtGhby",
  "key10": "2ry1a8FgaXCh9NZu2r5CD77vQQMhH6jZvwpod8HY9Se9hnkVTfAYe4U9gpDniQKT2gXRCXKAM2uKzWZfjYJUhran",
  "key11": "FjwnkDjhRs7eD8xaHNpmgpHXxicYfbKBWF5fBvCwU2Wp7jSTs3N1npTHaGZtL9DrvrNKtWbvBiQBmF7TYHCYUsD",
  "key12": "4iBbNYFRjbF2KkYHm2xBTziBNJ2n8A4Mk575pXxoruNmMLMGzquRx3qCDfVyXPcK1FiRg4fUbaoyeVeDtxNTS42J",
  "key13": "5pFpz2nDSTpaZXJCzk7J15g5medJtJzJwotWAtWtSedzWdr6pyV7N1n1ZgLE8axzh37KCs7N9Xq4M52JDN4D8CDA",
  "key14": "3S7sWRNz2rpEMEz26a5FLCmyHXAaANKzzFP2imwqawgUM7pBF7LABe6ACXA3hGdTV5f22895ud1cnvwjSDTGjycw",
  "key15": "T7Ny3aDxc1KT7MQHuJB43WCYuoLVQ5nrHLE3iV93K5dp1BstUswwaccpdTczvPtqZPEWmPqMjs6wGnkjoM5B2j6",
  "key16": "PJjWRZdRc6taSFQQ29jQe75MnvKTSwKjgSkHcCcf4KrAwBR4VsisdnZAkxDbNZvEsAQuQLGJxXmkFr6LEjsH7k2",
  "key17": "45bqgKeZfL6jVbe2KtPNhTyDRkKpxSPM47DXygbeWBJEQgwMqWjrRFNFRYgX45s6xoVER3r7qBFYYKsv31hHYWA",
  "key18": "4XeR7TeLAkBDXjcLGemFVs6h8BN1uuA9rWqjw1LhCcvCL2vu7VtkWNL2qMtrKdqSHH2E8g7Q7wfNEYcG1LG6kqkp",
  "key19": "39Qqw4jMqypvu6q2QbZjEMaGAn1TLxgNAapPrkr9dMgG9P7RSTUv4r3PxhAwCqGh7jou8pnuwZhotUnd4gCbTSuM",
  "key20": "7WFx1wRt6fxjDPijMvz2Ez496exfrhgM26nBAbWeXtDuAtdJm7dYVur7hrdwLnsxQ5CPBHEayFcx49pRtHtRxTx",
  "key21": "5gPSoLULP9nQ3nMUEksa1stHZkassmAuNawQDJKJEA2WKPbRhffcTcPKDgM5nLgzc8duP4tSc1GrDQ2MHe4XY55W",
  "key22": "64RPhcRffvqSN4ScnKjvSL6ztCrJxkaAXhxMYmXmfNbCjJW6SK8dejX1rqkMB3Mm7Fr95ReQi7gDemrB4s1PKyRE",
  "key23": "27rbtiSHt1CKgz9g8e5qq3hnAVVtcZkk6rf5TbiaNPheZq2Nr7gQ5jPqt6jFhEkz2f7Hb2Xz4SZqLoyvLEyN2rGg",
  "key24": "3b1uwo4p1ayV3w8EgXhk45FUxfYNmQNQX4BHdgbB2J84V27DAWMee7r9eprWZLDhV35qszSQYFCWtcFsHGjoRBFd",
  "key25": "2N1oWz623LoZd2ig59gTeTymfF6TgdKvsKbFt1GmPWbEcFDYpQfgYdWn6CuhSqTHeTravVNCcfbqDfUvBLABcRCq",
  "key26": "3Pn14DLdxXAXgorsbToXWPSraoxvj58jV8sxrSEi2X8MwTd2e1WsM52kWi4DKGPEvJhsnXHMyfRZLNdDKy6K77LN",
  "key27": "3rNYH8tgrnVbByErzK5VCqy1xzmNSSQsmTKKZn5sAWphg1xE5jhWoersgim4M1F4p8rkuMu5X24H4JkHyNySSuNr",
  "key28": "22LKNetf1WM3L5ac3Fk9G6fnAgDSMibczEcXH9pe5agwhx8beuBT3yQjGe6Qqp9CnbxG9dNY9W2tBjfmQEgcLC1s",
  "key29": "5BbXzdScVr6ksdZXzZjr4rgeFF4hfayUZeFts6bhxahPgn6ZKmCGLAPSRdSPAtejdTEXFDdkBKne45YLcK9mJj9z",
  "key30": "5RPNSy5oFsuZJfFRJ6bqrb2rhzxgiE5G1PrGFXRREYocLDV5CJqcb5o4jWusvGA6HsRiAAh3Y9ML3JNbGgR28qc3",
  "key31": "5QPwj49bW1LBgPg46891AkMqd1xVsgHtmM5RN6URo57HVA967iJKzxtoQrUfuhQwYz5zs8g3rHmg4E4pERFSYtTQ",
  "key32": "r1bcYV71vE41yZeUjbkhSiXVLHTMgSZT6bxA1VYwKyqnJdAXNor1rVgGk4Hs2hkbNZRmqQkrp8xEvm2UjViBcoC",
  "key33": "3PFwgGjyvUPymbS9QmQ89ANfPrLNAAQCZSzWU2gGwE4AQPiKAdPhPYPVi6BFoSAeBsxjz7ZDxcAzvWP2F4vfSamb",
  "key34": "4ijLY1ZkHjBD8KMp44bED8891YNGUK929NdqVns23eymvo9DdPDfnXcs5pKWduan7vgSSmopkhS18D3jb42ysSvi",
  "key35": "4ekzT8FkgEu9zxAQN4NRxaVk2BrsoWb42yU6SiRQHi5FV99hVmyLaKnEUvvY68sVN4EFrtfpiBHp2C2GYnBjCxnu",
  "key36": "33n4Nx76t65RYNE3ydgJj41DRQkHmVxShuX7m628ZiDLMvjcDbNsUcRYcX7pRMz6WmBF5fyQsBzM3E3iMoYXdVgS",
  "key37": "3Uwv7TMAbd7P5qjgVgQS5X6javZhDQ3uyxfzpa8TUNSc4GYqe8UVUwQS25W7BLUwrjNzawuBezqT769hFonaUbM7",
  "key38": "57wDSyd51JVFv7agjcT2bHosDcgdtL2yLBtM3kXF4wxL6Xsg1tjvB5MAoCLkgx9xnEphyU8bC9X4frVrvET9yqg9",
  "key39": "4Kg1Ecq1EGescVR23Xc8d5WyRWpuHNZ4A3iS2MC6bhwou469qNULYw1p3oJvqYHMKkk5V44r4534Tgdssi8jGvjp",
  "key40": "5SSw3UGS5S8SngRRhBYnpnsYuoE3H7dCxFmHisNcMwcGjAXMUYgLmSBxWBvZYj8q9bmWaAjKzDK17CNPAW9Fw2g3",
  "key41": "3u3VpKexevtY9BYYGxpQ6DcoMCBtp6c1Qpb6ka9iGCndeZmhntUbXDL2BnPxzFJncY1dp6pc1FGc2ACpCptSpBbW"
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
