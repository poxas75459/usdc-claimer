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
    "5otc94jPqNRG97QTAEkzg2DYtCRXtGVmJUyJkrrxDVVwAAcNj6qXWRQtCFtw5gGDJM5rNvsjfpwWnEPT1mTEndMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "puBsqUHKeNGmTzjpUx7gREpckeRqWbpVTQzm48UR8uEbAp9MGY7odBJmfmCUfbiHR1i3K1mhkSbEw6wdvojN9iY",
  "key1": "3og11gYjV13WmEc7xdR2vDW2xx6RYzcXyCwedC2VJ8BjJ9pDa5T6Fmsxen1bNaUGihggEqqK99Z3YtnTxe7neHjX",
  "key2": "2C7xJkVR5ER1SjyD3U7u3nnUhn4go2GKi6XrLWoGbUj6HmQCQTg3cTVtyamyYBautCKNkZrNyHZ2rQqcex9DqXeE",
  "key3": "41AwkdyFY5PCewgT4RREG9bsnzzf26qujJtMsNpM6itb4uZPrWaWkkWY1AeTntHVUMiyQAZYRnCsPQ6cxeR6dLw5",
  "key4": "4PfcBEuTRsQVuTMtnffwHr9qy7pNc1Js3oBCmeEUHrVow87MxVN6ZpotH5ysUBTkajpa8eu3RvTLfch5heCAv96b",
  "key5": "bN5K3vXQYxFHYca9wpXBTkExst5zvXQ5CUmEp34MX9CQGaQCEr1zqrpJaa9jwPS9b3497zeJkekDsuWEzqqKKPK",
  "key6": "5mTXBvarjpS8X28HyG1NekPK2z97194VhyqsSSecbkvdJ21hnUjRunwmoyKRwiCbzwEMvd5XGTYNeShDTRcz687Q",
  "key7": "3PsWhjhChWopiCpGaHPAxfudyL1WaN8r5TjkcLZpKPrGa46R1Yao9wbKFqRdxQtDB9a4rQZXWXbVXKr2YgLmUW9G",
  "key8": "5wdgyn52AxtRLZ4aM68ctaAZhnU6Pmx218wi1zfzoyGA2iGugmYgpc6vwisvN3tnTfJHmYCq6GwBxRr4iRqrrEYV",
  "key9": "4EB1ugLk1Ke1bUQos7XWXA5XU4Bu3x3DMVVYkp9ycbbFyN71yUhNiVi8NpPQSJTxd8PwLVBFxUCRMijpLM69rKPf",
  "key10": "5ez7rruaNLtYDWMF8UyyoYSihtCu74fcGQjNZAMTibLnVd1HEtq8W98Kpc6oMu3dBAm2y9wecYNJqL5gpneNv7eV",
  "key11": "2CRn1u9oroGRgK6YDcEfVPrJixxJph3NrFUpkUD5rS7pt2gmE7AP9fWH1wngGyHErawJ91fts3yxRnRnTF3d224d",
  "key12": "3HesuZeUDDqk7tqKmynHUkDdrbG6rACwgyoEuGvZ8qxVhne3C9eUnLpq5yayLB5bSaHzQcDcG7MRxGQvPDAfavdE",
  "key13": "5LNwkpziqgGzU1AWE8wi3AT1C7QpgSN33kEX81e5SGSmFmXa9xaPz6M8oUfti3dEXXL5WLW6VJR7gnUyaT6wzRPt",
  "key14": "3Aegpg7rEnY8YzsjENQDFetVhPyYB2BhvxhVC2tP8mfDnyFniSQU5tc43A3TkkYuyveCnoAg3ULNk6Av2M3ME66t",
  "key15": "3ScZBR9RBKTevN47x1Bagh5Bv57NHE16oEpfKPdSZcCdKUaA5wypeqf1DTCrJg6vsRpigYBrDgBYpRdZnyH6q7e4",
  "key16": "3FkwzaaKNS7RRVp37BabcqMEMKcVi8TmXtPmWPhxEumxgP2SfkZrzKLHLWaERf6rXesTDDDFbZgtmjY7vKEHrC4Q",
  "key17": "65KhYJH8w9V1rr4Hq1cbBZqPUpZeNtqudByJh8P9p7dUtgT1QVVpo13MrdNYj7WVEjcRMSMHVJuzZ7i83LTejLMi",
  "key18": "2LcnARV1QZ3fGS9Grwzd9fz4ijvDJ7geHjRj6C4du3NqR94hEsXobAmoSq7poFWDA2Z16cvtUgkdyEATNU9KyYW5",
  "key19": "5dssVAWX3YtHjCv4JBNRyFGy6Z7cmMwE6yfZS1sXY1dV7GqqoLGgBRZ7GiYnVSA53ZvfZTzhC1JJPpGhdRJwxDwe",
  "key20": "ZPZAVKNdueH6Z2gbvBKDd3uN6TR7su93uhecC9whfy1gCRCfNfv8142dNbkgtEAjxSi1zec6ru2xUSZEc29bHWc",
  "key21": "3wyN6eax6TQYwCW221kkWwuM1PnypmGPCRa9b66YuRNZsviw9tMnRcQ8YPtYcdQLdC9m4TNLBPH5g18Rwv8ByArv",
  "key22": "yRr4wENiRoqV7fACatnHJnD9x3YDu4EDgopL4zRRn6HNuyw6wwmo6UHMLW2YjPRpLEiF4ZrKVDdZYmJEivAUeEG",
  "key23": "2PDUqM8mkb3v1V22JiZiXCs4zKswp7PdsxAPWHeEvmMvbDATci6g5sueP39ZeKzDrtHFcyjVLkBUyD1VUXwbZ62V",
  "key24": "iD254giUCGc9rSnMArgfgEmj9aYqc8Ltj3v5HSEDDcEb8RxwXDxqCMbyiBtZEjHcDNHMFHvnTTGBhRRBpLMZtjX",
  "key25": "4WD3LH8gEvBasPyGAZihWa5FL4RvniPSDMc41UQJKu8VADMoW8Vb58tErBWvfV58f5p3U6m6QJVYcP9vj6eVkqHM",
  "key26": "2NvAQpW3Z4d4188y1RMZaNeQxKTzaPSsBTkxf8VCSkVdQLX4MHeBHXSbspVnRkcpYggB2VyKVHFYcmnJvxbS3wtA",
  "key27": "4Xf4EBfi8MGYC3tuJHzsZgaYQ56geFw4gs35LCV5k8ZEdhkwuD6x2n3SRJifw3yLWwVPP2BXXSE1CzyrcFmqU2UA",
  "key28": "1BLnhZQRCm7ayDzYfeDNUuHauzqof7To9N5eghwLvHZ4NU23ez5JYxjKf6apv6HPpmV9cpFDAXZgMyPKDxPQVYS",
  "key29": "5vmwKrhNhhvdLxDFbXxBjkQYouBSJ3CiFhafMn3aK4u2hbh8LZdQLSPW7FBuchuVwPB6phqZgG7pdWtsE25s2mDb",
  "key30": "2nVPq2usHbKSaE6LFhzhTUwZeem1QMz48NmA6f89uba9s1g4tVKWqBYRWAHzwUt5RZAy5LHMPcXAgmp5uKPaqjnS",
  "key31": "dVsTcHA6iqRGDsivYCp3maPM6HCyPRUEbJYr6XacJgKvXfxfxPX1zavfK7zwUUDMBu9AgrdB5SoZNrvse4xWPSu",
  "key32": "3xkXcvKBvWdA49kay6Ro6KRR2NQ41HbjTiN4RUptMnewR5ixtghQFpxq3c89d3fg5qtjunN4r5Zj4isJuUWCJYQS",
  "key33": "a38wgC82zowuh5mbjh4J8tv7SSmF4HiePHLhZ5HjmPrwggsqT596eJuG6nbFfycYgXAna41NmDYoBLg27kj5ZvF",
  "key34": "3rwizchbAJY42ksbUYUkgMJaZ3otmD8wJvrdoKhLePJqwq72xHRdftCxukHUb37XD9xqisFSwgdGqBETC1iNtaRw",
  "key35": "62EWfLKTSGTLVBzag2tyKodSPmyX8fTmVEWZYR19co9iSzZBvV21G5dt6Vji5bd2kxmwCTxoKkfhAnDZuLr5pZn1",
  "key36": "3mDdfno4rvxXMsDBHPZNZpDpUE5G28gKY1zYRHzcCEijRW1HynkRALxaLq72ScDWQ8MAQ4HpnErL2idpEQ6FFGcD",
  "key37": "3UmgkHBTFWh1seGCaoJJT9LJgWWhyY58eqfptoszDfuX95KKyBmCWoeEEqYjTm9QLdUm8W5rJco3b5ryNjY6YYHE",
  "key38": "4bSpmTejXXbKSwaBMaj7kHnZay3fKEDQ8y2ja1EZ2iUvg2o4VzwUtJ9xrprHqwt5P1mg9wkAVKL1ByAYvGTNBqdJ",
  "key39": "2PWuiff6QX5JgTnbsVm5axWpMqWLh3ngDW8xXhGQnsNKZpLvFNJNYwR4tdnz21VddU3VAcsN57iLb4RxFqVXfWD2",
  "key40": "5dgz8uYz8QXFNBEa8wE9gMn9QCroykmvFm9osNBZ3F6WQNPiYedU23rAH1dQqGZQEpWjfywToo3ru4EQrFVLAJWK",
  "key41": "3MERoNj6GBWhmXojCcH5JmEGhPR6PeYhL5xANXN36st1iJvRPZ73eRWTyreHcMuX7xf6Y8hiZGEdE9PR8qhoAj45"
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
