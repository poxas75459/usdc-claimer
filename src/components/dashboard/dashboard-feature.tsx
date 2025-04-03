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
    "611bunBTQNK7K2iqfNywBKARjwF5KNuFUQU5qTWjFw6hqf4tM6ZHUyzDJ3vCfDJ6GouTTEBaFjMt6arwjay6iW7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QSdfQD1PUwmqQaXQkinA9zz46Rv14hPfHiVhy1ZAEii4PTMAABgsDctggFKj4Czf6Zn5s17e8h1Ht3rR8bSXJmf",
  "key1": "3bzUjdWPpbuAydCJDgKTMv7EN5WtNk9wvfhdVyVkpQSpdUko4qGb3iwMkZA3zswek7gkQytDpvCL55CmFTSguhnP",
  "key2": "3pNR8zfpniNFi2um8QPoKUV5y4JfXCxRuhSP5hM71XycoMBDgw4MZAJ3gGQEAZ4KN45PYhzefEdNtKrb1d1YmC8d",
  "key3": "PCDWnNA8gWBh4N9dRTcTVwa34YdC3XcpUov9YDjej3BzNgi2MNqkZn6EwPR9YeQR7WVw7fyic7qeJCwBpGCBhTB",
  "key4": "Bs6weTPNYbwYqiziESiZmYbfo1mcjdXYM65KvrZHaqutVo6XBE5t7WDPAP3jzr9FP7iRB361HjtWFdMsBaUx7Av",
  "key5": "tdd3vagiU8eja3zmKU5FUL6C8hPazVXfep6frS1sVsZewbQGG7bYkC52YvYhrkEY8DpgfHPQJvMeDgy9DLoKM6E",
  "key6": "3pd4RHwG3wEex7oEQyRkLCnHNwJaVVaAiJLt73exrM4B2vG8Yq6fNW52e1QTspSnf5CG3nQPtWoocdDqS9b25th2",
  "key7": "5JAAqpWhMrxzk21qGdEwEMnn35XJozFHLqCyMmNomMWYboaQb6fZbzqou2RCgTMNffzyUmsqcqvK29LydZ8FihYV",
  "key8": "5vyJG1pCduh5StwEzXxbSbAZpVsMat9a5wXmSgSSrKY6PpXQbvvCAh4GjB3yxZdoAfBQVptvWs47FByXYc6SLUDZ",
  "key9": "4d4ubbmeKwae74hsgkHSQR3BFj66KgQNRSxjMChHLsPN7hsgm3RMhgQ8Mj6A3bLpbS5dS1DnFAAcBDiTyo1DujFP",
  "key10": "4p2aUjv365HVrVSxNifeUNXVuJBxgkmiJmVWabTZoEm4ZnNSjhV4pnf5JgajgcjgXBPNeuyKAN8r2VKLCuerCXLq",
  "key11": "2N7H2yo9EuKNkuLpnDzLvyNwBjDG5MNnDrn2zEFfqpWuugfT1RS6m7Av4Fm7hykFLaKr8dtPy5h8x3djvr8DvzZP",
  "key12": "D84uqDkDjqYNhe8d5iE8jXj3VCXBnBaTyaaDqyobY92c7UTVGKY9pSpGDqdt3SAYDYqxopWbPebVAv2RXcCqbYq",
  "key13": "3CmcodpJ8dUvCUpFN3w1aSc3U86Tz2f5vXVWTAGvukV7h7sg9gnP3t888g6yQT5X1c1Bsa5AdQJH1wsEhTAAZcQY",
  "key14": "5gpi7rcM5aU2D56kwpD3ejz2dvdwa4eonQUnibMkgA1JX2aUFAjE465pMu35iZDmKK7ixDZ1Q3zCzRQGQyhZXdjY",
  "key15": "2yUFmSmT6EUJVnBW5nVL4vXCHjtRKkgGfz2vYwxGrSWtnj3drP5Gbpf39V5xxUCF7tCeZdAML7jGpUag9WSTNVDh",
  "key16": "53gjJUe9VCUDtT1Sa1ogtsAWjav5CQ9XqFKKo1GmCmYygdK9njasxt4rBUfJDC93y5y8scZSeBUcYcc7rEgup6GT",
  "key17": "4Gw5XXsajaEscvVzkDvNpcUHtg9byTNazVgRDXx3qXt6uV5GG1WvJZQcSzJ12jwBdxcMxkMsrcYBdfZwRdDiYKrH",
  "key18": "5nnr7WTTHsyRvJwFet1NLGvCCf2CJcYwJdFva1ne7x3yUNXCViLUjhqpgeqprUCF2bwHygiCKBifJexLMPK92S1c",
  "key19": "5FAns29TcUZFWg9ynUjSwEjo5gwpXwkXTs8yawMYR56NWiRzCa6YJngcsEarZNpeRkBeoCtV4VBsLQeCqtJSjUUn",
  "key20": "4hriE3u3VBtYT19UW8iRxv6hFpEabncNnejEKSK4B39YH6ztJwQwgbePBnXBCsagP4mvyZQ1sRfE6SpwJVuQrJvC",
  "key21": "31ZKVymSp5QCJjhdFXftJ8ab2x8J4gwvKCwGBcEQaoYQ4FpZ5iFbxow8Z4cmQzd7a77c95eacmQoBGtDn6nstoEA",
  "key22": "5qS9pSBFErgeyx17WKLfGbvRieLQ3yqU78JgF7vgcCjGayKq1rnPa1DBdrDvzwBhGMFr7Q6TbGfQER3x5M5nrjpF",
  "key23": "4hP3VJvsRa8Mqc6Nj7jiAHAHZhJpe9CeDpG8LgmcFqnAjaJG5n76S5CHhNo7cii14exdcqDXZwpzUgbx2FTcoABM",
  "key24": "4FyZHFJvuvDdh5o1SYmsvpdd8hhp571BvWwYkcfgAccKveCxxvkpi6T5LPBqH5b34zdXRefThkwBEPcrjwcBEx8L",
  "key25": "5k1huD3riqkUdAwtWKA91aSfUmPxz46zcFcJLJArBSA4kVmoWHZrLeoT1saKMChw1Q6prPqC3pifAVXEcsuwBfrW",
  "key26": "3zw9Dc1nKNDvDzzxe3s9BmgbAAeLceNCfUqvqbuwT828W9mvK72WV78QP5GCTwJ3SVBMReqsrbvaScMkoAjjk2NZ",
  "key27": "4J3VPqPfz1FoshLTUEPBAAWQ2DHVe37Rjm57B2Q2TrCYGDD2awxDSQpJgLbpzqyABafCXCXmM5CG1yj9ysLcu4gh",
  "key28": "381JXciQLdrGNpLkXqmTaCu77ZLuwACHwvR6HaDt9kLmF8zJGkJ8J9R1KcpsNouMzp2HZb4Hnt57n49NyPtZUL5R",
  "key29": "4zqgdBUJkmSijodwRAV1WiYff9kRvKoqVBcWgLi4GukaaFj9sQVgG3QKSp6p6nteQMGEvQioRAe5ak1V6WTXiJGx",
  "key30": "3jwc8ToWVW3qEpt5G9wBVQZ8jd3vz9iwjQDBDFKgNXhxSFNd6d3hRGN3Pt1JpUULcNaLmMgVCAyo1LuxSp7RqFWS",
  "key31": "2g77AajG9swtXUTsWtNJ3k5wDCMmWDhfNDXqNf3C5Q38FqMKtViCdHBQq8Hthjts4GwfzUuN3JRP5uSqtjzpRcB8",
  "key32": "gouEEKksrfs8HaVQtynWNGBzC5ikYaZZc6b1hztQ1v4U6xZcXRKoQaWo7morFbQPQRtkYG1ivaqnN4hJeHq9Qnp"
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
