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
    "L2MbSuJoTrYtQyLtaJCNxzpdB824uj3dEiDBKDGSUq1p4dQo8wukSEQgFJBxQPysw9pS6m1MZW9LAmfcyj3rSxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JqUu4DemXeMxkpkQxepAWeBcBVcZ1hLDxS8Q1Ay6z43R1vuKxJ2UyepdSERA2EfPgPGTFJiYf2d1vYX9kEc4TqH",
  "key1": "3AEk7UFrReWcZWKTcjguu5ZW7UurwGHp55TqzGs5aEvPUnRbCHw3tYsoZK3PvzciALpBBDZm57C7zvx9NxYPVbLt",
  "key2": "49hNDAijD2akKaLtvm5gbCK1AxdAH7rNf38b7kgTbaVR24y5QaMb1EMVWnyjcbGnsaWpQA3KaQ5dPF8aMmmRhUWt",
  "key3": "5F12o6oBW1sWPKW4qGg7hRZ2tpSjYrE3xhLosQPQPV7uqBGUxm3CXVDgK772DvS7GT9o9as65XfkYxAVVSnFvG6w",
  "key4": "5bdPeVNBkgF98vNkCBZTUuQkvrDsJ2kv8KV5toaDsLWmcBKHdwmzSysAY8UAEJkTYEXLZjT8QoGUq1xEqCosBjmF",
  "key5": "cCCgmvobMoJ1F9Jviab3tqmGMPaGoUcwVKgXN148NpaBKuV1PAgw7aYk9nm4bcLu7QjHpDoUpBy5GopsDg8tLCU",
  "key6": "4vA1YnHZQF9Jmuo8zKtLS9v3CvsaAvb4YQgKPQAdeyK2LwLWhnpu1XmCikBH9NkcUJ4TrhT8UsMCCTHLfDQ79C8B",
  "key7": "51eowpYi8c5kHNVCELx6vP4ouL13idx99ri9jw5r7hsSHwxqYPFfn5htTdAmLZz7mM5kHTtGpAg2a7D8zRru61oS",
  "key8": "3Qid5A2Vz2W1To7r8Ce4tVEidL9vTgeCrfxPunsMxof5jRuCcP9bnJz8yKb26XrpPJYNywEdV8GWzspqVB3D7vBY",
  "key9": "3xQ88Z2CCbEriutXwj9PzLqh4938EDoeB6LDpL9ERJ8531dGCc3EuseSBrFi4tVZgMHPLgZnKkqPJhaREimMndPZ",
  "key10": "4AAsLd9mTL7afyZzJBE1Q3kxxQibseLDbTEAAsb132Qe3X4AMk1ZGk6WQ85EPuK5rzxCKemUo6WDfRQ6GdS8qmco",
  "key11": "5q3MJNet9gJnnwEjGD2hp24vndNnPRwRi6EnzCUmXiDbC3gQgJfDVMBHJd1ZbU4whAfKYq1Teme46959z7QSYvK5",
  "key12": "2o9jtnP96Mz1rKXULXJ57omJg1yDMR1ZjjMXbaNUzM96ncwKARMjKjgNzHXuUgk25FZzJBq4Fn5tYMgU4skqQbAR",
  "key13": "3YgjEwU2Z4x8YYDydn2yvGawqEKgXvPcVaMT8KpkdELVb8XHAugWM9BNDNDqpd3oLXrbNawWDHRQTnxCH35PzRF1",
  "key14": "2cY2AspMQ6hfG8kFHxi6mFnGzCQEtJ3y3JLnKzvehRaVGQcuh3csyC5rArW7PVxF35xjo3CPaQHLz4gQvEHLzYJp",
  "key15": "xDNPtRDazEaAYLSfng69cnNK7EtC4NGQMZER92hXenWLGa3WUNCYwAkCfaaPfwsqrwXoZ8EWGGNRN8buWCgTuvk",
  "key16": "5svkKRWwgKGTWGMuffJsRDZhiy9cs2Uk3fKP8cqJMRmjKXbRSBzzzdtxisF9939wMpPEpM47d2hZxyKzPugCqasf",
  "key17": "49HucuEjLX6F9E7va3vkYLekeh2b2EStV3nteSQtYX8f9NaoBMZwq7S7SuJxzoTpChM1Ryn4VhAT1TWwXEiJT8zY",
  "key18": "4saBDz5ojroRazgD6nnptGbUfc77pT1RcaGMiBR7cp8FSHvuzYh6LA5RKMjvY89Jhh3v5RoCU4x8nWYNofYyW4Es",
  "key19": "2EQgsVTm7guC7Kayupornatyhgd4RFgJVzv68TtDfYBV6AGo2kBMdGREsARrt5fYu4L5ihQcfHf7ru6cKM1Rndu",
  "key20": "2sVNJvUzQLRAuAQXPjbeYifoYbadgdpo5ZNsNkvT9jXGtYK5uEonVtxUa2pJmJe8tqbXKMQFwerWa6i7QD5UMU91",
  "key21": "4ZSpDoi8c7XBUns1YWTEAFcVRVPCgQBQvtL8gEDA45P3Bc8yCnRuXbs6hVvtb5X6YaFXPBR4MU51p99pmYmwdsJo",
  "key22": "2dJUhbPRoirFfdEhk9wbFAdMA9yWZTX6LtAVhS3pnvjZgqfDr89CbTMXZHkAQqd8jL4ViszsM3Zc3swgT186PmV8",
  "key23": "xZkj5T2q3pqQY3G7kT8DWFXLgS79cCXMjLmEZr2YKeGdpGCAwYMUAZywB9GRDachvcn7P18znNV56J7uRKEzJJ3",
  "key24": "293gYEGqQBsV1WLSEyS1djdsSVwGYaQYec42F14irxBvesWXmSno52QXeRpZS55B4oM8TtYciNrddbYc4taUxXci",
  "key25": "38FN5MLecYjUftcfpM5y2TNdVYUBjkRHc1w3uQh5xhiDq95iYBCbDAzJpuDx6yYVkDFp1i5pfdHzGJw69DVgwGqr"
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
