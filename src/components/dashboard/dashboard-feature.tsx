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
    "kkYT1DHZ1AYyUxY8rta6XjonLbqmHAfrbzc3S5XHRyUYupGr4FHGVCHg8dx91A6ziTxn26PcZks7U344Qi4ygcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dkhbiiKGStvraZsU9RNWcPHSGCeqWnd9D21C3E7iRgFLB8tP6pAcA9CNriz2zccVjJQJQXTbeR3Xk7LrCyvezz4",
  "key1": "2iDbRVsoGdag4AsHguULiYv8oYKG9Y8ayx99MAbJnG7hRHPddc8WcKiCWw6XStAR6FCQ9Z3QsAh7THerVvwKjzJV",
  "key2": "3TKJ5B26v4XabosmPTgQqkWkkFsM4GP1jam2iRGToEBoWben7esEzavWbBVxyuGCJMtCKT92fxkBizWZEHpUFx2x",
  "key3": "3QWLekGEN9EiiYQJhxjCcyTZ8QG25q2WwXNR11S2YMpxovhaNa6QKyDjfL81TkaY5FMgBdwUzDyjC9ES72xDW2At",
  "key4": "58nDNHECHYzckLq2eBngyX2adywF86YvR3pBPeKq4gN8mCX6CVCt2cYHtdbRiPjnoC3UDbpYiJhWbHvA6ToKyk62",
  "key5": "52UaFnBUT3BcBVnU6pwis5itpXQeXgBixL2S6qo9UKUWnvHi6SV34XnF8y23b8ZCiphm2A8EKQYtyDtt81N5DDJQ",
  "key6": "4f2ojhzLphw4DctnKTaXfnFwrCD533wT8p85sh6nNJpdNADDyEH49BEhxV8Twob25TNh6jBv8ifiNiLiApp2nCjf",
  "key7": "4Y4cMTB4ESBrzidoS2cH4nCbpzNAsoxHdZqQQK5u5R34YbvsskDuyQHGdYSd4FzYGt85APq7THTMGCEfTcqK86U",
  "key8": "2hWbQWxNCoqNTQbxp5NBQsyihYVZfWWxEbT9wKffVKJqp3WSqRn4k8CorVeMmcingL2bXxrCKpayPeBukhzzcMz1",
  "key9": "5TS8KCW4NrZBT3wfMQLarU6w8QYkUMsBiq5ZypV7Gk69xciMck7jA8qtMZ1iTMKCFESoJeNav72A8EeA9TwiLjjm",
  "key10": "54ge7qqJAf9k9bJs8AKiZZhJS9mHazQDfrZ6EjrTsCUyPqmqHxFCvokhsVzrvqdVfR9Kh4jCFNJdMFuq7kivriMH",
  "key11": "APjhrbVobKsV9aDKcUqVNkNJUCZ8HxN2XPC42vgwwRu27ivj7N6jUDQvGy1ictgP35Hmr9CVVkFPKU6rofaTKxj",
  "key12": "3N4eWPavutmrdpNXvLrSYCi45CzLBw4tKriMpSLb5GfnjYNnc5VypBVUv8P53Tn2jKxdQ98Pa4W4mLnYpj6F5LU9",
  "key13": "35VYeP5NMB7v7sSKVMDKq2uKX22fdE8hDqDtdRGKV8BKx5PwYvk457scYLYrQVFfo9JTLnyQstbm6YBSTR9eGhCi",
  "key14": "5MbWCTH8k6cFv7sa4bmP5d9dwB7BnyaSnDGFwqwBbBUX2MLXKA33hG72zHrwi3CroACUQ2ah2H3xLDz93tuVr3F4",
  "key15": "49U4C1fuDxxiC7N3ePZKNFUAMBGEu6gV2BrqevDS2uUeqUTqhdrDArPJAMXB7pGkvh1Ha8WRx9XEKhN9YRGYZwBi",
  "key16": "3rz9ZYgqa6bMfg8UThs1DZwrRPjk8ApbBKjDXWtNdTiihrriA3FXgAWLv4NAzoHzrBA86WdwoRLVtEGR1N8FQttY",
  "key17": "3zmV99ahq5GVV4GSPaPfZGoRxT9r8emA7R1eZV95J4Ah6c8u3LcgvVMnBy33Rmpxro4MjfmQaCjcG3mbkczaMhy4",
  "key18": "U8MUje2dfTAy2quMFh2hz3nyPD6hGAocCn3exTUQYtv79o8odSBiuVrgFkh5qg2fizf5Fjnf4PpLJqgJYQCJKuX",
  "key19": "3n5LSaNJ9LrVXnLFikGx3rcbL1gUQjWsscuR7wR1LX2oXVCNhRczNS6RVa1KdjDseqbs6WsKyGgwb2oqhoraQHFh",
  "key20": "3bYak6qyCvnUrVWsFngDJjHUtSkozztjg2HE9yqKxdp2SPjdhUsY6ab9Vpmgwnz1r3qG2uAfKT3K1LW2HsCcx4AG",
  "key21": "2sh63rBxjeQhvWKfC3nyU78oGYGhJe5pfmjHtHYiRrGmoMEB6k8tdbh2AJTkPNVNkQSKDcvzUgbDQhrxE3EmNPVF",
  "key22": "5cKwbyv8U6Fd61afUCVY6mqjDKMLGrLWR9QXjfyLPWDXprxN5cyCCaG6faQGy9WpFkw1qsmZVqk3A6sskdU7otX7",
  "key23": "2xeVBQ6uZa6xgpXFTF1hezFBdtCpZ5A99wYLrEpXuc7gFG49t3oQmPnkKDs9JKRhEiCqNQwnqav3zd2Do7Y7QUzV",
  "key24": "27U5tqJFq1AnwfvSe9YghLvhEvaz5kzU54H2pQfvgjvVZF1eeappaaiEepqFBQ6VLh6wRyMFBWcZ3DcPibVQK3xh",
  "key25": "47vHs9YwGFNk4Yes6MBwp9zRWdJKmhkNL28xCWRRTgQS3BxwwhMtpJTXu4Cz7u7jnK8KfwXKUjZCfNKcP7Ptooet",
  "key26": "36QhkETJCt9Ft49Y4r114TaiyoyQWxDC8AjrtvgbGdGvV9ut8xKZPnP3vJXy7B7HUKfrqY4iMbdm8kgZDHFaz4VR",
  "key27": "3ecxCyEhcubMpyZ1SySPzvYmb7KA37FbVVrDZsKrHnLM8Dc4k4pTCByPWnMy6JQeu8z5daR1xF7zEQPgXnsx9oyF",
  "key28": "2r71NbTHX5JgeW4jC9UtAu2Lx2KVKRraEoKkqxwo4ZW5fYiBJsH2RWR5VnqGynf92KautH1scd7VgX7wcrompxjy",
  "key29": "2h5ybXav95srj8zk7ouDXurmYpKXmoCfaouu1q2vFRTX3PSZ2ZA6NQC8vERU2XbQYZp7cFEam48HkdWrqbFuRvWU",
  "key30": "5ccHpbXnWvAgm1RPxLWrDpk9XeTJzGTvPHhtbx96yQHJeyiRWD3AwNcAXBAd8e9ZLFzgTrxtz88NMasfMVUmZ2Zi",
  "key31": "3MLmcGpHi3QgL9ZiVBaPYDK57VZrXAk5WB1C6EnDQaFEUDXU3vUQcsGBpd3g4aEKusbbJ16ABWVNk42dk5dv46Zm",
  "key32": "5yDoLFUhsipZ3KHzLPWtLRu193p4T1DB7gMCRRPeTha2ooQ7siFKi1kQzoStofkXGKzB9mpv7dmBrrWY7EJ56mFK"
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
