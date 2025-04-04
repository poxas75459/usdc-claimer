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
    "36jAaYLvHA4cGqbwDTzb8gk8fDCwGaR9uKVXV7zwYaBrgXHD17rxda2XTWzMTGuAbJY3fA3F5jNTGMvNtntAEYJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2PtUYQc8PCu1LxDB7zQGBd3wgVcCoo7KY2db3HNcafAM5N9Rui6UKbQabsUsxhinW91FRLMX9XtFrEAfz24vqu",
  "key1": "2sp3ZYy5trcymd3osidVAcXb5CH6Tu1vPZRGnkC567aiFonssX253BFg4mEjkSNokLvT8RXeEReccFku7uy3QXsB",
  "key2": "4vTc4qPUc4YRhpftAq67FC6oC7Vmge5TeJ4VCKwd2W6fCLHoYXfL374CEjvpZtsDSsRj9zPP84VaX4MTqz487LA3",
  "key3": "5gDzds3mXUUjiDYviX3HE9qVjPipQpMFbBqBnLXXa1BBM4PxQfrr4QCCuSMbGkXFR9E9gAwPz9dmDwU1w8U5F6w2",
  "key4": "kPJmdCptVt2cYfdsFkUhZ1mK6eyRDMrxn2HFCeLeBBjUvXnV8NMjjeyCT83QNJLJS5B3oJGZEz6631on39Yi88i",
  "key5": "63JeFdjiHet8DKSpcip5VHirt6HiTJ9g7SdHmKiQGx1sDpmJx7CeVwptTBJtHJUXAUHvqw8FhykS4nC1RZG7FVkZ",
  "key6": "ZY4RHgCtYg6Npa2GEweqtGspbDj1bsazr3A7hTPBdzwCyxdrkJF38R4rUMnZ2T9fRxBBAZfRRaEQWAWmpEavLNg",
  "key7": "56tC773DACHEBMEAwADD2GNTGonCpeG9u4ej5mjxW5gsurryMR6yG3CzP31npG5kZPjpdbqcDRyPrM3rMkeNo7bq",
  "key8": "5fyFyv2MxxLq4T8YHahPYH8VkkSk6afwg2A4vyVNsvMQSqc2Zj8ngTbbAUh1ejAm1JEqw3CCzeeM1xLh9AxvZyiu",
  "key9": "24U4YEvFi5NjyawBUDKK99bYLM1t4KUXDAWofCDAWCUR2JzjkRMEBsfmcuT24AJhC52vWf9Qpjrn62gzZ5tgApZ4",
  "key10": "ZwrxqxN7e2C2aP8jFkbVnivB5hs1N1XFvoxPqApXtWnc7S4TFnZw25XmaSAmQBAmU9nixfgxFFYHEwU3bqnU6kd",
  "key11": "4E6ajihpkV14zZkJrdaUT1Pggm7ji5cpcLsfG94i2xTtV1i8qXdcVJ6H7rLGJJaE9zoj5nWh3gHpLE1wLPwr5HHn",
  "key12": "5ZJ6QeRjRxiH5rVTjyX7bb7nhv8aHkRXpz7yBPxFcohrw1iBBu243TKnQL9FzZDhjZg1zjG5DE5PSdzNCosQXxih",
  "key13": "2nj5hJgFoxhd4EQke1ivrvf4E24zph8mqGaAyFQtN3eLQCrPRAo9c6Qeg8zLPfNBzCrXfsKEVHzhKk2uP98WhfwH",
  "key14": "4AGCZUNAypb3TgYPjrqzaDhrtF35Sg64WYpsgoyGAHSX6ErVrYUcNQc6fVNKmkS1kwNxAhdDxcMjELy8TDrpvWEW",
  "key15": "5A3HTaTnWnWS8Wr7THJmuoZhaM3D93EerHBHEMUEsqoYpEZddA9BF9tpjmLLj926hiBWSgNQj3ELQqVvRPSimqQp",
  "key16": "3Y9z1RYgKaD6uCEZHYsauJwoUHyy45LajXJ4XvKkvKdMiwfAhmE1YJ1qmMfZJ26TiFLEd6rWUb7kWcFJYuBXsEeU",
  "key17": "2BFKfbywTu8YoTXPcM8mNjvu1vTJiCMrxp3G3EZz6zj8LykA3Y98UcBQS4QrHYyopzuuFUseb4yKVDLAe9YMN43K",
  "key18": "5m9g7Xrg1538X835NfjzwZ9xmqSyEhp7HdV9RZYS4VmtSTwyUaWeZ6HWpGQ2aFVc2Nso39yUpJ6kURSscGYRQGBJ",
  "key19": "usZqkxJDXWjGbjnSV6t1gBhP2nNB4VBjdVXN3ELfvzCtcBss31G3KN2x7SB9Tqd7yfgy8axn3GiHfX7yWaeLb1L",
  "key20": "UdTxnhH7CBpgk9qa3oPwj4HqtTcBrdc8AYM1YoCoRDWoeZHERoeUrz77DNfc6moKTKjP8cQPA4SowBPteEmp1xZ",
  "key21": "5EfwH9Ft7Jmk8Jen5X2Q1QpZpRJYAS2tKAmHLZYx2hPbkhsRv9FXYfjHHMExJJZQkUioUoeyye7TwoioTHZgd7jg",
  "key22": "4frgLfri6Rh5vJXVCTycRC3zaMzWMqqkKy6vtgB6MGmzVPndQ4pnbJ9gRB5GscRwqHRPnQNY6Rv4rDLDWYbDPmEu",
  "key23": "5sknhkcPnDL3oSVYpK8JqYz3Nv8xRJkkfrLvmRswdeRt1PkAwtb87pkth7Utd3LyuZ4QJUesmEtSWBZv8Nk9SiQs",
  "key24": "3ERbGH9jhYDmfTrUwpNk2LEKpQoh48VPi52gKiw7cMxCDWQ6jGcECnPEuZKJTJKdBCmwWMEmZmZgFGXZ7bKsiarS",
  "key25": "cmSPBUicALSDmx94HDDyNXTmEYQk534fs1Gg9RAXUCsAcEau4QKF8sfRfWEpHTLZLMikevwLyhEs1U4SQNaGBJc",
  "key26": "32zuGfHnXKLwdog4FMoffkb4bU4te9fj6otUm6iRbLLcKbhErhzVC8G4TtpkJTmxXC5FBo8GkxHazvuGdqTDRb7K",
  "key27": "5ZjEwxkWFo4RKuPMJhDHb9UuuWwzN9kzeZN5VKn91fyKHpW3fTKutJaNiKGQ7erP1xRPKwGiEsHAdLBRiKvnJEEm",
  "key28": "4CNsLjaZbizVGE36uH6KFJGMZVprot9F3Q8ykRNxPJAENTxxQ4nNBi1SRAthfs1HbNu2qWzjasP5wmD2MCH92eud"
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
