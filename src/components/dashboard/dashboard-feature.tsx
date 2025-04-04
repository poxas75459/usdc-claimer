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
    "5L55fquf3zcUK4eHJNhqK7XQzZohZ8nD657AattVQ4UVuAaxDgr8TR3KM1fshVFYHk48NVhUKktbAdZ4MSvh4o1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3huq5jMAX8JnrYrZAmAprKKU7ZZbDCPcq1eHwTncRwgKk9b34pR7FEPkpbQNDBeXA4z5aEVzojA1U97jPJ5FEXnP",
  "key1": "2Rh8mwhARuMDFrRsEzPMrQprtxDb8HhuxtCqzfZV4SJ9LG8UURoSrJ6WfrdcWtXvVgG5WEmCx94v39eVjgZ4Ket7",
  "key2": "8ZTGyfThrSpNQ5fvy9HKdFG3t7zPxFfpN6WvuQNi7zkUP3ZMHf1baC5R75852JtpqMw3ReB1CMnGM8mv7fdwKG5",
  "key3": "4KUaJkHvH7QDLjuhALAtVcRDmQgS2JdXvsNCTzdooB3nYkorfQjic7YZ21phHsGJhmA7MFaQVzd2wtRQ9oB37nVz",
  "key4": "itRRM1xD4kE1vW11rfzrGKgQTvwuTF6DdzXCovPeZy4Hm52rFq1cjL7CY9q3WMA9V85GjrBZGZ96UpGi2Azxh3f",
  "key5": "3Lrip64St1BXbgEaBxkBwmtoKZRnkjGNNYfzHu8Sc615Sb6KvXrpZ7N1xVJFQrbWev8qnvYpumaLHHdJAxe4QFuq",
  "key6": "2gL46ZonRgWHLb7NRyjafcG1kcPbmTVLG2DG7xRDQgmb4qzQ736KryavuQ2pXn9BodCWwkxwcAAZi1BVCYjoAWhf",
  "key7": "23NDBAZ4nVKQwrdAfAAuKwU9PxFt5HVsgvBZZ5yqjAsNrPTbu7ax8Ynt4umNLn4DMcRec1VU2LJee2Zq2Z1mEB2H",
  "key8": "p7Nqw12V19GBRCLZRAMG25bzbkwvoTcCh69ynBzTo3v4wh38vyzK1b8pynkUHEavMP5nAv9mE91k8ZxXiVMLzqA",
  "key9": "47q5FMbtjzVG2mcF589QGyfdyjpkgCxhT1CQoKYFj7sgJH6VNmJKWQhJnSrttzCi1nXPXKe7sE9ErAwNvPZiXjmS",
  "key10": "3xPmQZ4p4iv29zzBBdCkq4gQW147HPfhZEvnRfngLzhJyNwqAk8vciHaC4aKH1kFBWwHyXiKXRv5sAaZs8BoGgT7",
  "key11": "4vYFienaHg1CEDzG8jD5NHqJdvn6oH5DGqCGBoWvF5EEsgVEBSWLyc7NxLcCtLbWynZGxPoWdsQm4tXeeKegM8ys",
  "key12": "4mZ35SrDT6KQL83UjjardY1xdkn6AzDsgdzqGBMcMF5dPe2Kw9JMU6kfJN4HEWGmWbEhjZn4YqPyJMCVzeGXPZWw",
  "key13": "3SSjHYoScdH9QPjcVPtD423D1zeepQv6vD2jzkCM9uq6sdQqjszPWiSU3XUkhD35aBM2wzMrdMtxBxW97Ef8pAV5",
  "key14": "55S22TYrSKhoKS1Zo6g3WrHYUbPLGerX6Fp3afZ3zmuVaAnbjVuXJRJdXZ2L9HMKBaXGKXKk2LULUZRiiwxvKcwV",
  "key15": "53ron5pB99ev62Sf8dPZ9hz4J5fZm5YxGrYuPMMHohynP7HPsocEdvtELLrAAG6AbrKM88p7KxjA6ZUoQnPwH3tt",
  "key16": "BwPy3MoJJHYSCGRvfqkAQMRRwgyL1sddiLRW3CauJN2hVg9QbtBJvZEV6D3crKhAZnzvVWG7M4tWTG7ekARQ73j",
  "key17": "2UsPPWwy5kzgYuxaxWUWMbpPSAjFwhgL9QnFkUouf7sGw8ki3gciKw6V8bofxoyjjcgs4pBGSEefn7BRDhAymgnT",
  "key18": "4brtXLDqeH1znqoDEF6pTiUYynWgGA7DmcDA8VNqF7LDW2bXuXuQi2juf1Dqm1K67VapBVecBMzsGqq6Dj1dbMUY",
  "key19": "VuuzQAwzBYdgUsLtsmDE4QMP6AU7pMZEqhdGCXr6rmfmSiEi2KyJASthhHwsqVGyihsWc1qxD2BTNoKq5oPu7zj",
  "key20": "5Uro4AogGa3CK5CoNHtoh5eq2r6x62f5RDt8NF5ur1XGmMPJAFgXyjTYgF1bzebb1vWNVA1T51GSQ3wX5NGfJM7z",
  "key21": "4vxVb55LxEkkQHH7k63GiSVGbWdiY5T9ESntSBsYazVDAM1cT1p2FJ1yH6stbaXgrGgSMVNEG7izFjBhGGHafQbY",
  "key22": "55QFWQr5ckfpe55TX1DkKZFc6fS1HJLtkZpBs8Utxanfnf4yKV8ckvpQo5TDxdctKbw7jDvTr4pt4Hi6TbJBeKeu",
  "key23": "5prwMqKVbXRQ3MNX8SSdSGck6NmAhHb7LDobHCyB5T6ry1hFtb3JNPfXiNGQ7wJLcNXce2JDPaD9z2EdeWNp8FBX",
  "key24": "KXCeXnKCCAa7KJefE4nSkGzCfsLeTTH5e47NXDq2PeGawEYmmwt3oXah4GutsFpyiGrbFr4KYCPZAc9UJiB7quz",
  "key25": "4DYtS7eDWykzx8cx6ncAQBvX3sePhcRSo7nXirky3ddDSpn7j24z5da7XEUyBctVMjKP6etaUsTTa5QF9efDqvAA",
  "key26": "4w453Rw5SSJ3QGkcBiSMbcP1sUYqosj7jEegmvpKAydTbBLF4sSiupmGt869gUi5uUN88qzJmYZZaJSmmj7NCgHz",
  "key27": "2msRREg1PKz3K41kFJSRaGaiKCg5KawhhvzsfoR1DC6PCbGZo5B2fTn45Xv9yM7uLtZAtZmPpM7rW464CU7g6dnT",
  "key28": "64podv959kVyxPifsVVKtTSXqt9nLzZNFjfxTetRoSpvmVZEpv6kKwdq9y5dQEHDbYV21M77fDKJuXxsbp8znHNZ",
  "key29": "uvzrLnbUSs5tDN77nxgWWkqFT9iia9uADyXzQcwWvzdxj7VJaKxyP33Ssi9EJgYvYuUFof7G8MQitHzZjKcyGJP"
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
