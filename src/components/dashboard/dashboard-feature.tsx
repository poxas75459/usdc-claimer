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
    "c2TvUjMvGimY6BiipuC2PJDrdpp4PQxymdMHxZFHrquwubmkW3tX9kpzcXkrGnWsyRsTDe5oWuFwHKqUSYqkiN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHbKsjDUzFTiMUveKCNj44s8suMS8DHVWja4cBUs9QGAtGwUjUki8sNjAt6esSrKABUAy3Z682qJxMCQUydj36b",
  "key1": "4sz2adp6ZMhNXwxq2vNKuAx67T2QoP5DyPj3F2yW8SQgw16ZidJJsrg1ca38ueD3twDVeEGrU9P1z889e2c3gdq1",
  "key2": "3yVJtaG5bKehxivC26BUMsNCmoHTKw2h24655yQsPqSf8fB3FgEK1f9PXaXWdw3HaXkAtq3TaDfpHAC7dEwGUt66",
  "key3": "EFzLunsTcpHTmFbzFKmwJGtMuZfBwiEAbYHArNDBAw3B5nqEdxJXTQTrrBheyS8x2QNZ4C6bunJLjRBdMH8YUQx",
  "key4": "3zU2jXtFvNU8DAxw6t1BnpUzn2FMDHzYPt2dd4EKsVBNeKdCRjJdjGQgQ9pBjJQzC6tc1P3aHYQZt6HGsb8i4YGh",
  "key5": "JKLTsYgnvQLJdcFhVWPn8ieqbK3xjXYV73MvQhcRSdLeGvApdf8xrY9H3oug6JRrDsatvpiCdW2Tm8spTZrt4W4",
  "key6": "2G63ZRqqWwh1iCCic6uEr7huuumAcHjrxdzjbaGVzTdgyNTEG7bX69mWtf4SE97xD94B9eoKUcFnrNBYtiQFtayR",
  "key7": "J3u95kFELe9Rk1qWRE3X6mLzJvm3cKDz28C3EqA13pc3vT73myZmQuzvsFt9KKL9qaLtL8jaU4sEq6UEexdwQK4",
  "key8": "4wLvDWdwQwB7LV1KKH2hdUdaBcBz6wJ742XZXFXWeVeN9K888jiXpwpufufvxvWdaDPMKRUiet2ddDADeDXce353",
  "key9": "3g9RgmbpGpnFVkV4uUEn5Cc3D3m6CijiRJ9Rk64qSW3ngf4uY7AF69oc1gByfmc6vdgHjMMo1hzLZiwd6nxTSNEA",
  "key10": "pRp95opLZzdo5vSN4VWcfxt6hZybN6BEVjieS3N51QS1GnECcXrnR9oHyEq5669GrqTrxYpn77de9Em4669hV28",
  "key11": "4LcVYpRT5tnCvjtvJXoLqKxo15SXhAQaoZkotHbPSm3RThXDDeU8s9Ha3E8JvJEL8c4VWu1yLGCqLbxaiMJU8e7B",
  "key12": "54yN2UYZsejiqzK1mCtKXKVpkvdchcRE21aRsTA4pr6zFQB8broaLSC2MRLeDC6xatwm7VHpAcpQ6zjwpezysVaP",
  "key13": "2GcLRZ7dyfYF75saXqdBo3LYyiExfcYFzNFGJm21RSVeYTd3xburV8ZYAKEszweXQVhsoRcgMm7u75oAUPNTJtFM",
  "key14": "3HvVTTnPo5VZKncrdvExkuEVVnY2pjvQbDJaVUmamY2KHoPSTGesPcygQqMtzLUhQsded8hpqztt5TMArCW5F9oc",
  "key15": "2y3fDk352eeQCTLNCXUx7bHi9wTimMosbGmex52bmzPCebAQ5btj3wpxm4hvDCKV5mBfFDRm724NgmdWxp2Cuho1",
  "key16": "29qFb3dhRX8xHCMrmSPWe6XpwPNrT292HvAciZNbAhMfjDcN1HeampPtmK2T28aRYVKzw76kd5gR1DnjEf9YS3UJ",
  "key17": "2EjXkKH18xtRLNjSBrPYo3mFAuAf9vpkuFuDS2ggm6LxDCRGNJVTEJstmfC748FpPaVJBY8mJPQfKwr5eu4UMMk4",
  "key18": "9ekG7S2pdVgMGCVEKokeh6M7kXqfzRJ4vpwRJXrUhB6s3KbHM1xAdBwyEfE8WraqFw3UanhWYCSJbQwug3qeugC",
  "key19": "5eH3ePcBYfwUxgkEqaZC3FEKf2HXT2yLWm524RmaHGmzDFmt1ZELChJTsRCAcXvXeeEqkZFesn4PCVYFpmDmVbJf",
  "key20": "2PJqb2PiKKCDCXMnLsKGnufzHALU6BWKdcavRB7NLSvpGWdtkSyHEanNhVJWwmRD3B9vAzkDAA7xbv3Ge3f9k4st",
  "key21": "53wYHYF39D14U1wf34ecNLBrP1ikhK6qy2gXsevjWVRHXeC1P2oPvEtakiYwm7pF4DAenxj8iwy3fa8yMtxoYyEp",
  "key22": "63Hf1Qcq1GAzgDm7Vvv8Xq1zxv2HEsqCk74avtkLfyUpusJBGTxVd3X7B6yaCMCU95AMxmZi2tRiqq7LnLSLpS7i",
  "key23": "uxcK7zVeSs6Y5yPjjtyn9dfyXSbF3yrHDDNmR9BP78A8FxLKiQYGs5J6qY8CNpKsW7HXQsvv236gHkBmvLcGjeV",
  "key24": "JpQtsiUfN5yqYFWWz2oQjHd2GyXd2UhQuKDtcpbHwfLVHXmr1XwioUipb7AoxMus4JMjJjerwvZcpur22iVcRCK",
  "key25": "3jtWUTLq5yTjUuuT9uvMBDgubuLg5iUTafuEmCmHCLoGdyDnPjGk4EYkpLetEbKjgfRTL3LUA8CNu2VJAAP7qtrg",
  "key26": "5mXDhhJXRv23Nh8LvxN9GxcXRFNJeYTd46DcV4d4uAcJb328F27MkqzYKfWkUeyX3RgxbJVo4eczbqcj2FiKPYNT",
  "key27": "ciCgwoWgGdK9JY4ewKEoxLsrtn2PiiEQCipxyh1x7sKjwPiYbwiByx8sENpq2go6S6UBBzQcbkXSgAi6siFanUQ",
  "key28": "3U4QU6TtvXQsCugemEZGi3P53V9TbHJPwXE1AQ2BDX9t3QxLbahjvZs2NqWYi5KBuizpypvs1rHfKCofDAA1KbkB",
  "key29": "4Mcnzcb9xZYDoWxX2K2Ki5uWCqSXcaLB72nipbsw17hZAoijJBafTxWUCR2YrE8vo7xw75EDvRv5ujE9kL8XV6Xv",
  "key30": "48dNGWL4hd1Exe5bvW3CDHuh74iRFRudToWkFUWGPFC9S2j21WBPDxUpDqdtLnUaFPBisuBBr45pmjjZrVjy9CQw",
  "key31": "5ma17VNJWzdfCDTCqy9KC4EArYx34Rp1oTFZMxeRPcpn3voTFS1Xa8Z8Lfes8d97C7N29UAuwrNVQ27Ei1pwZQzA",
  "key32": "F8kQLwD6U4vYytLyqdSNaY7eDGjPfK6e63eiTE1q7yjQHLAfVDCJsUsg1dgTztVK1ZCuWFUSpb77UucbhjnZJ1e",
  "key33": "5Yx5ZCv8iCPjAUifUUSFfsG36NCcGSVrY8NV64mGAqzKPFcz5BZGYfUJRiX67wcasD56tMNai2eDhSi3fCg6zo76",
  "key34": "j3htP8jF3YQPLNeVJBWo42wDPu8QKHBGEN5vPrwdftx3T42HYmTQPLSdAK8CDcqjV2ESM1hEeimVDzduZNs8EGt",
  "key35": "5exJ5dVS5nrjxgAb96uKLBqc1kv3XDUf82zCJz8e7sKM3b7nYJVPGjYi4N9yUMXxrwMSaoChhDJeuxYaePVdEkNq",
  "key36": "5aKXPhWyHpQmk9auBp95ynKKuuDHqVLgB6oMKYXZkBRn6vCztzwB6U1J2WnauLrFaEUCAse7fuEob91noQfodRAZ",
  "key37": "5kmbRrLUWhp1RcmrRuz9NtwA7CDi3VasfaLGH9ngkmH68SVPeqAePireuqcXCYHQXL5RdodVVyZ7o2tPuqKm1sVF",
  "key38": "2fu1ey8dy83SfJfmEdqqS6FttxZsan9dZY62HmCLZVuggAKdDmzfyhcH3ZgXk4y4nLYKdKdgyFFzy6g6rh1rMpJg",
  "key39": "54Bdp7WPagbLHJdnRoRd4aUdLfy9gqvvWrWrdyV5qbcNt8RmUHMytKgwC6m2umMMDSyKphWAoZPBdh8jKEF1tkae",
  "key40": "2fpxtCsF4Ur2YBAyvc6yRyTo6GHPE6EVuZmfwdZhJ3j8DJ3epgnHATM6kQrtmzm4P4tcjX2Z8jWfPDu2G6gRfnFJ",
  "key41": "npp6ABJo5q3C8nX7f7mx7Sgo3GC7adKYSnneboE38fnXRmH3ofuxhPtbLNC4XjhqbHBeGgERXQaCbaj4Vthdjj6"
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
