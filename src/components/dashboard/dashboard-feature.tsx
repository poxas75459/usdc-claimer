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
    "2Ya2jfKT4KgAEJU1gVCHrUZEwtr3akUAkDuBgNMmNcaj5JhoCoCwMDmjoXxW8LSb78CEUu42GEVZBNAsjdq4bwUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAfeUqdkJazmjK1w6r8r8PGYcchtU4ZtgZkHJsKkwao5cKUUv1Pg3WLdfaCzE56ePZb2YNAk41ZbjJg5Kmbtygh",
  "key1": "tw9TJtjs3aXb9vM662FzN2Uudfa4mFvVd5PqW3VPa4xgB6hAL2ESKLMgWMUJXKrAyvXyvSE73CaiNKhh9rurMse",
  "key2": "3Gxb7oCKJEGAeHoRu2mQ3rTaYRNNQFA6cx6zp1yAUTL9RvB7RHUUH9LpsVgQpDtmYr3iurHUgY5EsXMJ3JrtHKMc",
  "key3": "3fNotmb6Nj2HBdJorqdVdXxz6qZJvXvRfZWme4BzGyY9XBY84RRAABkhJzn22GXA7sq1gWc6bAu1MqLsLtBwjsRp",
  "key4": "4CkgRnp5TChe5tvuwVNgQyEdCTNNL7rJP4N5A8MJLk6ogJwgALrNuYDCMBpNqripVUHJ8RgD6kdfkfxRS951VeFw",
  "key5": "26mGt8xaNbmTcmY9MNMbc2SXHTmqmjhuDShk3aJ4cS48zs6CJUate6MYM3VSr12HL5r55gnxN7Bbq4Xv19pdKBTk",
  "key6": "3bq6EFFHbdx9q6XaPwDBJaHcHkCAkoThRoh69Vtr9Q2Yk2HubRaDxWLYdvQc3Y6X8a3ha6bcRaorA3iF4eh2Qzcx",
  "key7": "2QmdfhvFwYsFdJxwXJBP4n3aNs3sJHEwnuE86b3VbQWrGeNe3rDJzqGAVoq6GcdMQ3qfN2CacvTmYXyAUNHdDFQv",
  "key8": "5j2aJ1ekKpsf8Hwn2DkHT8N4XERNjrhqvnyuw8LVFFwqBuwCNGSS6KnaButPRJGvSy4BuqYwEcbu2CQnPincqSoM",
  "key9": "rnrPfMGdQ1xATEB8xmzc6JqqV9SXT8ahGxrLjYXHCXjVEze1F76VJ3z1DeZzeCrZZJNmDT1wzoJqFFG1UnJynM2",
  "key10": "3PLRgEmM6PfLLTBsYL7zTouGerxDPxsF31X8afMrm2QKNxs1bbPBKjLMvBHgPxaUH73pYirdud2f1Qv2Q8h2ZWLL",
  "key11": "2CUwnz2KPrKLEyukRTCqus8aArekUnC1rzYtwtqABDLHh44BiHJZRTbc25KCwzAiJs5DBPimv4PKgAGxfdkAcm1E",
  "key12": "1q1gKEuZgdZJ1LGyJfDdKSPkDxtB4bWcromhmvJrhxjPYg7vu9E8F5mTL1ZLRFtzLjEvfmWXB2szsZEweaiU1pb",
  "key13": "2PghebFMdoC2Wf2VrM7Jb38QDHPUwK83kMXVpipZAyD6WzQtQeNWtVZ9BMSc6YPN4DoTWwoNCXvkwSZ2EhxdZnDw",
  "key14": "5PPFhGySXjw3zDyaGscZFRMZy4A8A6AAmcVW9qkUfigq7QtnsZ7L3iA818433xPM6B1uerV5og5kDkXJvGgWLKrm",
  "key15": "4p4sSyZPL2nP5ivs1HCr4tEkHffp77edcHpx8T715y9k8MqgzVk4TCv6zF8s2TekYj67TfGLcvAGKJKiNaW5DxjL",
  "key16": "5p66mJAZdjCSqYrtFVogXRNspZYAtM3AU7virCMUcm2KzKgc7D7V2yCYMdanLEo94eM6ttxo6Wx2gG31mvgeEGmi",
  "key17": "2TL16AFb9GvED4ho2rKE8TGZSBmRAuKGp75F34umoSpdirRr75QKR9gKeDAy4YG4RfWjECHSJUrTzLTnhVcWcVp6",
  "key18": "58ZNotjYs5EGenyxAy2RoXzuXRM15G6kciPBDPWxT3WTy1HvbpU42Yoi1jtFJXX9dEhzp8xDVvg6FKtPr2giPfRM",
  "key19": "vGzD9rmxN3nr5tr1WfQbxBa3T8dDVENXxBLyb8UezrC3T79TR7tRbtv7nW4MKsHqq5VgBRkVWtfPa6YFbHmWvBd",
  "key20": "cPsBGao46T55rH9zQaAFyHykEXLc23RctDHkLEsR9mSMFTYEbZD7BkEcYuA8aNtR2fVRU8UuzqLu2qzhmiS3Rbb",
  "key21": "4c7H3wo4CQuxQ6MS5eE8Vva1wzU9eF4CdD1Tnbjop2QrAWkMtrg4jKiZPrdQaNNzYZpFNeJ7CooygQAxL6FyjUTk",
  "key22": "3KcYFKerJ4tuYMyVgiyx3bHnGSR48G6wVnRGuDWWRBzxQBzyDK8MvAP8rhwCHQjxY74sbXKHwCDZC641jBP89Fqw",
  "key23": "5yRD9MUGuzS6mJhtJfVExZJnToCxC9rcHe8UBuAmERTLL1XKcr1r6dpvDZHtnyVi3bLLk4zFhLBHBJphb1CGzGKo",
  "key24": "yqvhsPRmDV6qwhBxVj9MexjuwUkWfw1z96fJuvLLGeE1X39P1MTpaoZEYNPLzsbnEC4A2kc7QrHRUh1mdLLN3iA",
  "key25": "6Hnf4shDQjAKPcZ9daD6HrGDEm4R3xCAmtwbU3QEYphYvu492Ce2duXW1M4hmGNjLD6MXCTDCdZei6c8VyHDMey",
  "key26": "4mpDh8Ykm8mA9AYdMXKksPtXWHbrP2r6oXw4beaB7bmskVPfPSjW9V2iLUsHYF8zSWEnmLHYksANvGDU8r8CDs1d"
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
