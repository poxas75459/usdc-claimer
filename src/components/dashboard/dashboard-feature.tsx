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
    "26KHtF8dhoQf4awPuA7i5kMSzTaFZgGHJZTPySaGnbnCNi55j6geaBtUXRHjFGo4V5GotobiK3f4TBq6BnGH7Dam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qjg2qqNSutmfxFiBGwwVYhb9RTZni2HUCfBtbdXWSEGxnwJttg8k3yLDUPdMHXPwTZLedkBmBtSP1M23Y2Romzp",
  "key1": "4ZWVj5SPhtgWdfJCSpsNkuoXKGo3gpBsihEBhFogrGR8RSnAaJ4EqKb7UaFirvaBG9EyJ7kmcqbtnBCfMATZBLei",
  "key2": "39oUjGzY58pYKSMpSmhcMuiDGW6t3ZYYQ1KhJNVrCi2fghLeFb7Cnhh5SoYDTpg2ML9PNL9vCs6utKomJ4e1XABn",
  "key3": "32jdYSKrncdbe8eJx925qsdthQcpJUUz67tWDfpmsawGzpQ675FMaeP8mPePHguowrfYtyYCrSCyrpP6ERHMVpKy",
  "key4": "4UdLDLCJJ27Zw6ewtuqbhfsZadPS5yNgy7q2MKVZw9C2PrZmT176p2Q1GbQ8rJ2py4oSH5fmn8AUN9gFJjKuiMS9",
  "key5": "65dcyEdKqWevtKZLMgfVqkUtDcpEJaDgAL4ZKKDYaccisN81Nz1UjB849936dB472UUePEzdY445YhmmMiXAAd4W",
  "key6": "53JnYqSA7fg39FMdDoAMuSLCaggfCPpD78qSWxnoKZMz99wGxw6tm6AL58nvjvqpEvnrEgHL3nQ3PMPAeuFQVNei",
  "key7": "4jeLW1y9vpdXsBkuZzAnQCFrYhVbySPzwWJBWKUnx1WeE7DdpqfkVeWaHCBFGkv9KttCdFpBpmgHgSM1L33djVny",
  "key8": "5ufxyY1Xq94BiZVmsYX4PjzNDHkeHPhpw7QhPPUAMm3eo3umfLAdBCT24T3VXcB5KAcecQ9pZgm2BuvkAHheKxcF",
  "key9": "3hS6psAjGwWC8FhGdkW6F9yWdf9DCjphkJsSCyJ4upW3tuXH21qVo3SxNWoPZsjL2FUNsBsyE1349weN4VreZUnb",
  "key10": "5gGnskm6azS19fDUMmtjNWpeuUF4zcu9WzXcDpVnnWEvbaR28UAUXXdgcjtsV2gfg8MBMFYmvc2r9gHtxK4B8xnX",
  "key11": "5hmsP8ER2SmsgnBbPhp5rnUXR8bdYBegGbonwRgKYXCT7MpP5QvB2WqWmatJpcCYPqZwHDkrZ15aUQQ6HPUQk3mA",
  "key12": "3T9kMUB8bt5PdG3Y9VibNZk3SK6PmyzyEBkQi8HsZmHBUnoWX4EsfrC4Pm4z2BAbmcQq4gfpFBXoTFJ7US341fQs",
  "key13": "2muroUxYHycgnfWofHAbQRgsicVD9pon5WPoN85etzEko8EXJwFQezxoYaymToepaGjFbBF4KoYR5gc1g617N2b8",
  "key14": "52ctz3RctPVvrDrwFzh8PoZtHNTWvXhTyUzBCeCB2N7dbKyc3SKj11x2shqQhzidUGBNMP9vC5pCV66YtAe5Juk",
  "key15": "32UD49TR7RwYveRj9FAiXqsgCrRpuBBeYXtpXW1YNSN6ZsbHEDPY7uRfP5YQhrcoY9TaZp3H24KgvrcAMbUAREy4",
  "key16": "4kP2RMaaeykGAvN4UhQVW5YtLYsX55QumXNwABDnVZhPKhPtsM5scieeWogsnuBQpB36D9vkPBQfUy5jMEkykmKh",
  "key17": "5wNKF6ddRGyr82aH5Ba8RH1ri1PtFVCuDUtWaHbwGWW8n7dbvBy8NaLBoRaUBo82nGVUeysYAZohSU1ptRLUEprj",
  "key18": "hsbMymcAuXfnUJdiy2YCAjwKL3CgTW9Xc4xavU41gjkUQtySKvweRfxDfdoUyMLYRkXeRj4EzCvtvVbNaJ1NZfD",
  "key19": "2f5PdxrcFEKTD7vU79SjcFTJD6DXwgtrq3XC1wJ66rdHN6985gRJRXHMz7hbU89ZxYwbg8amqe4YC3rrgn65cyWw",
  "key20": "5mwn71td4ZRzA1s6Cfshgov2CqUNK9cnBsRJXF4GiG8THM57HYMbYL7FaJKSoWkBjnUHrKbUdhc3jWYzMYefSKRq",
  "key21": "4u9kfXoA9gcxmAVhAt2MvPSDFF1yHo3x5TdJZv7UUoWJdHyAet8C8CZMWn2GAgcyokDxZoTWbbuxQFj8fWdWpHd9",
  "key22": "3h4L6Vu93pVJTemToTncfL1iiNCQEkMWyYUVC1f9s264rMvu3fFLvfoASHsuiTUPyruvyJXj1VnyKQqakxWuiiZJ",
  "key23": "642iZbpUaxSDrC2sabXa3XtarWg17era9dVeW6gEe5HYJGQg9yw1U9gZMQxvR2LBPKv9sns51nCfTToUwueXFxpY",
  "key24": "2i73CM2jRCPSdsJMehjoVNCL33BARoF6SBbJDnirnndHQMwoATroHuwBEXYp3BUyip2ahb7zbd5fosNNDBSUdG1w",
  "key25": "YzJ7KFisdXpwK8TR14mSQLxo2P7qN7HctMi7sE9rWBsDLhS8PAUUNgjqJTZDf8afeJBgmGxTVXrYpnQN3Tf91hd",
  "key26": "2JpWY33koANeS8TGHMnS3D4HEPsbU4u3keoJ3BNTg26YcAhhJMaAGNd9wNTxfNN8HvjhxyRAHQiLTCMvPxAAGWHn",
  "key27": "2VWN4mGAAxT5RxrAiWvewNNwSnXstwWy4SkgZj2FD9qQsoejNvLAwwXLdxexcQSXanRhdBKq9SN4RhHgRfPoHe44",
  "key28": "WAcokhDLwA8A5hpFZUe5db9MQtkiknxTLJVru45cgQSAuMkVsqqou4V8MhN7P2DRtMJ81u5vWZLdHpA96m5uSDZ",
  "key29": "45DKPa19hQmTu51TV8tA4mv3t6ULoUR89ZC4fRMi22AYe4zqA2D5wypbLiAh3HZ7Gb9TQcqLZakD7C3iw3VxjvEw",
  "key30": "4DXdWFBNpnTcVNzYvdfUf2UWXk2j7ypAtVUFDxNWZYUTSD12KLkW3fnizXRrDbKnNjxAX92iEqqf5S3SnjJynW1R",
  "key31": "29iaL4tjgPyz6B2HPGnBFwtK5KKS9qPY54mm2VFcvVnCLMKu4X3iqyeAmfxz5BQBHCqKThSjCecqSya8nHXhAh8E",
  "key32": "2FQbyedRKATsFC7YiFGm2cB8NchqLoahybor9R7ersSb4iuciUWvNhvRF6xJgzjBbqgQxVUW2qLEF6RLRwHaQRAm",
  "key33": "6612uPDPtKB6amHq7h2YKLoGT6DDW9i4qweP6NQbrJM1jxJKNdNm8b8dvzhL9MTYYAaWZuEwTqHdm5b6JATqTDwv",
  "key34": "3rPAeoskSgh49FfKmrLYSz6GDeWwwNcbwwKTDWE9T3LS4xyyCWJhEGQ9LnMB84arf3ogTKYyjdCjjGM7MhxqE9PR",
  "key35": "J6FgzAWvGzgbXJMNoGC9DsK8TtyQikT63XhTnvoNwnPmbXQtv1xVd9ec7hJDbZbciCWD7mtssxheLstGWxnVAvK",
  "key36": "3fSgUHC7ReWVaHTEXW7xnLRvhsnjXiFFic5HuRf1Dbta8KErq7Pgo3P7YZvyRsxwuuzwvGNhfQRqCGjrkmawzUnU",
  "key37": "5Nd23gGpuEse3SFFD43bikRj4yFssEAW2kRer4ua6hKU9ZLahRZZdwezyZNPWfvHrfGGGhg9JTrzRTrctZQ5uQHk",
  "key38": "3kZHGtTUig4Y2JrEU7XhXyFKoRoroks8T5VFdcQEzNMJCGP31R5zpgwzZ4ejh45bZqoGgKeW72hryg4DgchTFTge",
  "key39": "3Hp9WyxwUxxdSDth9ihKtebkoXpX8V5UacSHozWzvPq43fXtwrLMC9cL88vjqWxTEdf7zQomVAcHJ1d4G7S4Exvr",
  "key40": "3MoTCMC9hS5xqSReRVnehJdQEPHY1reMrYzUJCWi8cVya5LtNCPh8myN12nNX9HQi7TaCwzkjj2YMmSN5HMUbHps",
  "key41": "4gZPM6s7Jf9v4a71W8puZKB9ZbtT3dfs5KHfdbv88ETuZnSNZfErKgxr5Gd2Vh6uF35zhHWjaoKKbd4MJrZgVEMn",
  "key42": "3UbBvbM4CXjLbeh2cVWkqK85tMcjYBqcr48mxptroggz8kJ4JpFhJdtBhq9TtTBntN33zFNgEaCfSRHW4HoVHpFW"
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
