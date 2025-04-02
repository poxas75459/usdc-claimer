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
    "mu8kBPYTJnx9NToy5cnrXoKmjGvHBoTZiKkzmfx7UtgYxB5LMPG3sbVX8EMiTEY3hYCQCNHUVzz7pVEQ1tmtTiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FNtR6t6nALxRnhimxajAw8TM8RorcXJAJftM2eBJKDTHgrriDc8zdpAA2sJ94yaF9v3iN6iQXL6f3RhaRvgarPo",
  "key1": "3hGDTfXC53zJUnxpauqm9KynG6dbHn1WS5ahsPqKfV5dvj5ayTi3cHXhnjEFGJLKmcyFSa1R8tcP919aeXEUyosW",
  "key2": "4vGd3YxsPpTqhimSdm6SWmpmVQHeFMfWLqqCFrRtZdpjWu2HfKco4pfDcPQ7nWRKooiQmUBWBi6RUW7Ued5NguQB",
  "key3": "5N2AkrZmzPCcY19t4AgKeMhi9Tm4uEnFPTzRkurQvX7NruE4a3dpJ92YqTWTuWi8mqFFDeRrzkVZFwcq3MF8oPxq",
  "key4": "41S1gtE25ekthHBtCaoL1vhKxqdLUiafws9JdHXqVWzawkPy3AK4ahqnvoMexHaqjE9Zx3Ep75HKsQZPWaKMsvr8",
  "key5": "4DUUn9rLFX5vzCYjeukHX3kip6KMrxc4nZWdC2nu4y3p5ua7aU7u2uk8qyvK9rUtioBUX16CJUSaMx8QFqX21YaD",
  "key6": "3spHje4FYyYTxy4dXPQWK1Bw6KZ5SvBjF6M8HmRiYYbyCefiwTDt1dJ9JLoQbNp3PuKJyKh34LsMcf7AFNMHgf8d",
  "key7": "3JEA1VLvcoDy6WdfrvBwGBfDRqZcavdoeu7k6c8NXV8uoSR5Ad5vbpfkV3WbBKgqZhMzcCD1KouQK2QERwC8hPMi",
  "key8": "3pj7evZRHKK28ZeAPnEq7H8sKvm9rFy4ZmZAFS2w4hZeXQTLYvGLE6JH9FTNMKVgL1YNy2gEZ4g1JfygJ1bvfp6H",
  "key9": "2p15PKGESiR2vDkSoKPBUJcfDrT2DMcsm1So5kddJsoEB8mmHhDuFPkyiJ2WSLPvD689FCErwEBHQDdgRKXFjPpX",
  "key10": "3hRVKQmWnZnYzMXoPVm7zwd11pmw4jb7cBpQhffYaauuCzWTMhdRyuqNs1dR5uGqRvDKnZdCetDfsk2rhTTKu93j",
  "key11": "2g5hrZbXAoPdfSkxUCVmPhdnHm8ooaXRNePXqLRuvcZqSM2vDzG21Y4Ek5DSDZoBY7MQXyTaVZa5RYE82cVogYw2",
  "key12": "4FinJLEE7aQP7tkrkaLp7vovinybe8bDxQoZq7pamR9AD1VucYZCk34kUk3s3PTBzfMLbAWfC5K4QMBtgTWZCRSN",
  "key13": "oGq2dKWGDcAKyLDsQiv2uWzh7yCcSChXUEAHN2xD2JpYUn67vTiPoGbpj4P5tDzg9EryawKymfQikd8Q9U6XFsz",
  "key14": "5smZfvjA6pmjsj68iWbpUZBhWgyKheP5z9XY8au2FPHFjvV6E1uMX6ndrFZdL9diZRky8JewZEXgdoiinyXo3bnG",
  "key15": "dBPX3LWP4YEZCnZhZNpM423KTYqjarQG9Tm93jpbq8VN1UJjJSNrHEVu8kQkJZi5ssbSRsM9BAFMaaERAjha2CF",
  "key16": "5ngFE8GNVewWMiMTc6CK5F9peTPMM2f2DfxUd73AeXVMf9RSaFAfkzU5dQk2Xu7JLCUsnHt5zPvio9U9MAFR3Vdc",
  "key17": "62nY2r4Ebe6VCJZvDFytXGesCaMp91BGgjwX6Suzm4ztX2To3EYFp2CefAQAydKHwRDSLh6rpaymNjekJZqZi7ux",
  "key18": "24BcbmVokiKchpvx3V3yWaVUAXCH8eoRPkhkmTfMAQKQdacF7o2irnhS18Jg1hQiH34vgHrdJL3AqJg8tp4biT2Q",
  "key19": "3z5CZQfn4TNB5jxFr83bpDtv6XpmaER31z9e8bDNy3GA184GeAQxPSKEH8pEWhiMZu5T2wNYWZu7m2wvq4useRkC",
  "key20": "5TGnG9n2yn6wEnrWp6vspv2ujrGjnYVNo1EjnumfSEaA1Py7ShcJeXBYRhchYfrcYjs3nJF5zUw8HJkvMULZpmXP",
  "key21": "3mHN6zMXGJbbCHybR4qnCSuFjvQwXeL7PKewohtre1iWvq7n3TWdFrPkuNBFScfGrj7YHxhj2nSC32v5BHiR8uQf",
  "key22": "48ezpK6MwA6LRb1mRxYR39ncrBx4ur5e3uyAMyDCK6YN2Le2CkMffTK8VNd9F655G7g1TZVKnuv2FxmL6WyhnRq7",
  "key23": "4TFdnoaiyWhoVZZm5pDKQg2ugQR8DQcXRqYJSSfzLQEzk7ux45xUfZ1Mgy8UpEd6tYHic7LkNShGGKzUBh2Ut9qs",
  "key24": "NVVGYa2ufsSTHUHvv8zzbeWaHppFmATztwmtaXaYoPkhCPMUhDontVRHmAwuKcmirE6LsqazpJGJmXu7Ub1EsrM",
  "key25": "4EW2rV5cHPJibyLF97mPS8Zu4HW137yzR4NtwSeA5haz1JTAxGjRomosLjGKDaunQkskVQukYXoCSt5MANbdnuqk",
  "key26": "5sGBDiPbXLNfZeJsD7wXhQctZQ7N6V62nXh44iUpeTHuH1LctJhcSzS9ESzD6J663zmjfksdFc4V9ZRRGGXWaqmE",
  "key27": "32iczsqEfnGqa5w8jtvdPc7VAeEfDBamt8BrVbHozTYrMCgkyiBNm8Zfw1PkwU1r96fKwFeD28bGLyM8hgFycRUm"
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
