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
    "52mZ6ZCNXqD8vSCF5os5dBV9qwNHAmtW69wdLNXcyefhaanm2A9NiH5N8vGm13ozA5rUGUzuHUmZN7wQWnwzR9V3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61mwbfCVof9ihtESEZPV7tkouqypVzJWDuJyEfMJuTW4gBVi9EZUhBgGxwnsTVL6ypmew2tTHqk1vf1XZJ3Ch5m9",
  "key1": "3ZEqKbfNwxr1F6J59qgSE1WABQcyB7EjRwoRvYBPsJgqvu6jtRVyNLxjQx7xSYY3L8tobmp6s9Zo4PwL9YcHC93K",
  "key2": "7djdZoHuyuHScYWqWG8DScRdE2VtTcJSd2pi5kzkbF4srTPwpkuR1ebm7MwkxNKNsVvHrPCu12sJuJR3hAZ33ou",
  "key3": "2cFg3qaVJux2Ys8ZQVKSPG2VLfc1kEd2ejo43zFyMkMm9vpc6i3vj7T9p1Wki52cv6zDHnWnMZ9rGx7FfneVoR1d",
  "key4": "21zrDXx5F7HLjaEfK6JaRJf98NoLVW7B5SJjmRLWHQVkUqKvksBMaJE9aMKMCz6bgREu6kT45huaEL4aRSyGMwvi",
  "key5": "xLSs4bUMx28xTzRkMYQ1KoTMuvDcdMiabxpTJvQTsQB1ZcRj7oUrxUVvtzm4Dui46FajaZ93DE68oNmHpTZ51xC",
  "key6": "nr99yonThd1T5Msd37usbX8pkwwLaMJsgsGDNMrVV5wB7T21LQszn7wm3S4XaRKkK4KwQDpqYTyavoou7HDiR15",
  "key7": "2ijVfqrDnxvjNo6nedZq5jwtKaUsGLucBtUa9ZqPvAGnb9zfXNQoZbNBaiyykDSdVrQP7BvLPghP7FMxaTEJBCfZ",
  "key8": "4bBnBfaDXPXeQN4cvKx1vtxvgWiaYPdWv3rpi81i2MJADNwweg9ficYpKF3r3HaZC95vnZ9oVw3WpwYWQHfmdENd",
  "key9": "64tERvHr3SUXkESGWtW7xfKQ1vt9b6wJUceAwF7FS7azQF8sViDbtNDP1fVhtQdcnCPhj7kWNhwyGUEGp9Zd6P6A",
  "key10": "3rdvZvSF4zP5obiG6E1xpSbeNZYQ5rJW3JGySEpriYPcLpokqCNvg6nowds2GssNjNiJwc5JsGQFjdAvKhS9ahfg",
  "key11": "5cdoy3yhWTpCJSLuqst3ffv5EZ4TRXKChiJZAsLeHFAXaAvCSHiTESHhFCjuiJC5cUzQk2n2uN4uEApbuAJLyk2a",
  "key12": "2mL1UGyUy6CJMi3ftjV4r3iHvkZxZb1GdUqJHRREUU7S6rGzmeNn9W5NHQAsX71rg1v9mZ7ZZNkK8ALg2YuBEq8F",
  "key13": "27tBjkfouRW1sxpknqjcvyBQUqSsff7ghcf7ERoq44sADoFECdGRtoscitjXfLu87vM1zGV4mKteTFtrq3TqreR6",
  "key14": "WUNRuQjuSQC79MYfuSvuTXtw4WyPEoeD4aFzRj6ExG7s76N8sALJDNEd3hYgLaWDoXx9ZdSSeH99DwoKHAHhWv4",
  "key15": "63M2eMRvPE283q3mQd8oLuRnnDtHuuMcLZZFaxLTXMj1PbsDD5WCPsG5BFaEjUjmNYyaq22KYjLJmZYux1qJBXHm",
  "key16": "XVt6ZkRWorZZvn6xwU6eHWAefzxi7ppskP6sWKcSBC8h4X7h9bFguHXbTEX8jLCuZgsvPjCzJ34dUwk59AHtJGj",
  "key17": "4j3EP1xQiUNS6KsWspnbboF51jKfvoTMfcPysNoFhX8DkWwyxrVYFBrdcS86EJdk28a3X1Ee5DRmDXuQcBvkhXMH",
  "key18": "56x9NUtVCobmnoXNZGugzk1CRGQ6kEkRBLhgxNyn4tywiJ4UdAnijRc3sFtGf2ShDsNraa7EagDSXSj8BGbijrMt",
  "key19": "5GSFbQMHNbDaZ5XbNeSEPayH9B84h161HPoCbmrgmftEjQs9n8dQ62FdfNTiYKJL3ScKcpBBubnPHLYkuxUSn1Vj",
  "key20": "3gJ7sDEPre46ShkCvCKzMjfUniwHeRWPvRHeMCS2ZG9YfppdJqSqXnoSv7pJY7FV3RW7RhW43qqFu83aLT1waVKt",
  "key21": "3o4q6RhtsBmkQ2fb75AFguYpVqyrxK1mjH3TK5sZ8UPY6EwkjMm1z3Moi2sw4SdiwJHcF4SeuBB3enPcvD3Mdujf",
  "key22": "3m58AH6DeKN1TaDjthx8HWxh66mtqqzvCGF1QtR8BDcueEFL1oqpTTxC5k2V81qgMmxQVsmkn3iFM8GwjnqpTK1n",
  "key23": "8rwfEHrw5gefBLWfQkRiGmpr1UQU5uJeKt1KmxSz9TDJ61MYGDATPHbZujmbyEadiYENNiQk1LXZcH9fydNo4Pt",
  "key24": "5SQM1KSjPUCX4iCtrFnigLFHqWz6RKVVbeWmvHUZRFbiPmTgSzyfhvstbzhb4zdvnNrk75LXHu7CfCu45A9Z5PmU",
  "key25": "3T6D66gCvPiGJiVtcsHb6NayZA75Z5rnGvczTpfoH1cA6YjGu5mgo3uv6QkvRxQBH7W9Z7nS6xmmiC8sVTCUTcdR",
  "key26": "39JzL7ZuYubnRGMfaeTuFzNTDEu92dZxEZdM7hwSiBTc9TfU4w5A55Ysu3huiaX8Xk4AGWnY9xgiFag4mqG6yisv",
  "key27": "2CzngUzAWmH7yKjk2fNszyeviz9Z3yqPGvoxHDkuPVUfAR86efTM3HQGHNMExNAkPxXhfA5YsnyeLo79a1AJa6dG",
  "key28": "RdKTP2TNbP19EWSvPRsLPHTYSygrr9KDX6v6HEd67hNSipptMVMpu3KEUJmy13QiYsU6jh6zgwsUQibGHsgDV8e"
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
