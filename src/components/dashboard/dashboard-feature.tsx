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
    "4WsGYX3tRyZEVQGXbNsbSFiVd9Yu6L9CPLdEP3fzkQR7T9YgUMEnadzwjiy6VuGr6FNiESBXuYhmVtzk57EsM5KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfujd2hjpJ9XftpsutVSP42g5bGhR6EF8mNYRDJRExyDvocAdiy1RoiQ2Ej8c7gou1DN5txhUFHHiYhytgQD6Bn",
  "key1": "5URpsY3FUwuC1cGh6cTAQCrBGT1JoKNnfNbCJJxpCXYM1sucm3Lx87aHUDVmnZjw8PWM3sS3VZrk6tnt4vsdW7wx",
  "key2": "jKWM5rmNPzkyFtarNroGhvSgA6Z7S8ZK23kwYxTzo4PrTkBrPWbR7jJscU6noQsJW43ub5V9NZ2iGyC5fHrbqNM",
  "key3": "3bCj4xTeXwYmhR1rxydJimWr7ck6efxELHacRYVoq5XKtxAdHQoJ6nnVbmBf33mi5mnUTgATGaL2Pv3QkD6LkZjz",
  "key4": "cN8enc7jZieGa4ANXXFLfjEhYSK4BmjVHiSiWZ2JgesdFzMdAhhGjkYK84RWjdfQmA3PRvg9k9YAj71H7bnvsYD",
  "key5": "4n6mTsW7rNsWGXdPZYg4NihiysfBexgLPLdGBKY6bYEcAjQreNt336zkWTRJxohctitEFa6MQL2eufKjqZPGHSMw",
  "key6": "2QNRNQf8LzeqK8gbHt8FUuq3pfMWjesQvk1Es2pMKiSoVS6ZjfHgabUnBkRNHps42SanGLLZcCpVLtA9UVye3FZH",
  "key7": "4y5d1wLeMtQATAun8xTtThrbBcaW95bAm849fxGJkvg6ww37sGpgdoafpWYXmvpowepeZyby3QcB6kDoxV4vDmEn",
  "key8": "4M5TfJQEAVUbdPKCWBo2Z2PwKdKiAusV9nfzbaYRaj4RVAK6eqn4qm7qMBzVhr5anfRGnKSGesTeFHpn1STqSafh",
  "key9": "3EP4TYFqWYq6T7vsPw5UQAWc5d7oB6DygNRXQqKFQRSta8nzd889MQmJi2BigZjTXhLnjChP3vAkWmcaAJJwLy1j",
  "key10": "2U6PFa6tgcGYzdNT2Rmoyff9FKMnP1u7SCpdUbhhK79ARctcraXRLtFMbotAxpTDLKgVKVcejYYEz2N4wgc1q4uF",
  "key11": "4DDafeC3VLogbNJTMYWm2mVtoZJxQ24znG73x37B5a2FQpjMnaEK2vv5SXJcP4sZPYFHBypkYKBqXedEJ58Jyec7",
  "key12": "2dR5bk8N2D7xLjDcfJVc86CtyTrg94Awhhu9kAgHzrxyb6vaEfvKpfFXT56T8rGZZdYLYPEPMQcUadmfcXiqoJoY",
  "key13": "5A9gke2k2NJ835JXUNqXhGpHRyz6KtKgg3siPCL7PjfePFdZGYXC8jjTYYzSHzdnvra5mDwUb5vT6jcTyPb5FVAT",
  "key14": "4ZMvRne3QCuWMBwQA3kV1nDCbobgFXHHpYkGYSk88fo4audoMn6kofUN8jBDLmNN5jN6X1WR94zyZ7ZtGbaFZhb8",
  "key15": "1CmN6TvYWSh7tyozDYDnXo9FTbwfwpWbNP7Vh4aAgEUx7ct3BxteHFTaHrebojDzWFJu6aQpfVxSJEKYJvzZZXr",
  "key16": "5aCbnLDkvRS84N1wQEKyHz6kwZWjAgrfV2g3y1bvE4zA3QwtZJisvtQM8hpWtbGy26J9db1mPQLTHpjYFbnnGXYF",
  "key17": "4mvYTVUaBVqMxYhJqXjDuqb256jG4PGcUocZuyAW15UitBwPhzvkePT7fv3Lz82LCdPwHiJHRidwpiU9Jtck9wGW",
  "key18": "4MTm3huWzNL5SkaaDqWMPR4mFQUaXnENwnpYLHtQTxUkHioZsaGmTBGoYVf6YUSAefAmKmfo4yke1xu7aqdWfFrX",
  "key19": "5cpRmbJibM2DEikkMp3AmK8eFpcZYQHymXd8J5V6ZPzMj8MCRYA1jhWstJBGSxLpUnythyZe2owWpfu3dawECnij",
  "key20": "2eqxSUHvc759m2SBi2J3n2r25o14NRJxMHdTPCz89tnuSqHBtKKg6Wc2rFkESTBJnj24SWnLhGSuPYmxKq2yZsr3",
  "key21": "4JBZES5pj3NJR6yrJrh4G4Lm2UkGFSwANhXzMKzZKSDcDNkmBh2naSZJzDqMkiqYHoyRRBjk5Gv47iTgr66Sb4am",
  "key22": "3pHfvQvmpDPEDm72ReFVqmYWGitYvSVz8TAGC6B3rcpQ4p7VKby9rE7S1CnjvjpT3kqeWYexeePhmX2x4yKHV5kS",
  "key23": "5aJEZvM9J3UmRbHCMvFLuZsKMuhr56JGXAo1qRR5GTZeFBaLe3qpjh82HS9khN9Z2KuH2XiWH4oc2eHLaR2YGTAa",
  "key24": "3tSRVVFLPJtJ9NseKJTNkZb1GDqVkeuv6TcRNpNpJ8bfqD63KftEUz86hzPo8hTE5nJwCowPeGN6MKi6Bv2zXwkN",
  "key25": "2nGr8eLAMbXsyoaVzZCx9p687Y32BycoWac1hgkgRWckUq4v4YszZy76CY1tieYzhUyGMg4YeWcHGi3cBTAg6L9Z",
  "key26": "a7se1axgNd6CFH4djJnRXWRwmaYn5g8zeMs583wYW6xnyrFUgUjH1ZthTC46irTE7nYfPxKNQ8vJRxparQSDHYd",
  "key27": "2kGYexuuGwvK1Czupn288uhbNCaXNXYzQs4QGhjUfvNHrxAj1YuMs9LRjU5FqX1DpYZUFwAXqwivcwCvBej7YJmf"
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
