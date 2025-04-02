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
    "2eQQPAa1fxZu1wvx2SreLkSByKCjTbxke1oZAud78f2s6JqUdkJwpUFG4QVjG7ceJBhzfMLyRnA5ChUQQ8FNuycv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsizHMfMSmPggmEjrFFp5CHXmHeFYpV1DoUqxJ14zuBzAhH6vEZCJzAgSAPf3WtBf4EvQuJW67JbKKUqBootqV6",
  "key1": "55dwF1PjiLYzuVt7ufQ4DEQarZZsf7UBp5g12wMjNGyEpcSk39oMvHaCdzxUH36u7JhwdPM8ZCv39t7gF5RBsyJq",
  "key2": "3WfKwPqV7EdrvKknf2xL1dHVhmr2KkMEsbpKNX9UQkgN8GTuZ2AVqcma8Ug7HMfNMpPgXF59Wkd4mBuqGHbUSJ5t",
  "key3": "3moycSvqKQyzUdarhxokKbz7Xi7nvPWewmJk6M2E7K5MsZgt75m5F3b3j32ksdbdTh62Vwr8BAG8qD4usCt72u1E",
  "key4": "sjD6duEP64faFnD794BnsupUNM5vtKSuEPm8ZXaS2Cuqe8we8PHLngNHXD9jKiPvUWXMyar1678QkebnhmFBVwK",
  "key5": "4mQQPivQfti88rCKwaXGZoG2vDDkYftMGmfV5sPAJibpQsWyRnvzvBa7QXf5JFBnfoknuAZFch9eAAMUqVat5p7k",
  "key6": "2LX3BDiozaw3xneFGbbKC5CMAniX2s3dHqARmaKd5a95btmCYY2gk5USEK7KxMq3n8bCkSNpns1EbrqnSRbfRr6J",
  "key7": "5HqgsVVDje14QXHn7u1VgmMQ5iE123rts6odVNJttDPrMi8xcENnJdf6MceKXKmGrDoDcaWxjKmQky38aNgUMAn6",
  "key8": "3x2G9WrDsq73nhpX1psKxeWQw7GyrZ4jk1yoebYBuP4FUM8FAxQZVkjsjVKKLyevXFqvTg5oPUyvvrDPkNA6dXCn",
  "key9": "4nWx5g7Gz1NoDJdCTs1LRM6wN9URTNpZiS2yVaWCbSMUUxhJVMdFEpYURW4G6fUhGobKiBnyNCiT5n2Crdew4d7S",
  "key10": "2vczh8AnS7mbJWDAVBrUvBZvac8qg8C864YuKEet4R5GUdBzmR6Je4nQoC7eTqMdkgNY6Pmj3vSw3YMoob5tWZCQ",
  "key11": "2S2r3qcLTFxsQXUEt8eaxP2bfX72XVBSDnZrTWnz1mV13sS1mwyhUsAkx4VrPQtgJCzyRnsgsPTEFV4fKDqrNrbg",
  "key12": "5DiUd6pDPYWm7QHNv1QnXrzF5wNULYnYrfPjHX8haVXiHkwWFutG3mULvYVGeRMusT2JUqwX8SmiHCTT52Caypzw",
  "key13": "3BuCDQ4Xzvei7F439ECC7n64rVjt2Lee5Dum6JPuPQkp1Z2YHqAysdABhNHi31A5QiHbFLTW4uoTjfoJs6m29UQD",
  "key14": "4ZTUA4JcUL5KCzE7XubgYG3EkHA17t4urSC3S8NoqBWRmwfK8E6BAr3g1djEcQiA8ZKvC5a9duMGhdaEte6wbTg5",
  "key15": "Fmj4tSRniXC2HCK3Mr53utTQ6w8pGC4zPZZ6qpcCpuCweM783bNGnHuXpa5YEzMiPKccKgu9j3H1T1CPHDzP1vD",
  "key16": "PSRbAWVSDjf593UpNHDMUFc3JSbHhMN98Aqg3UFRpF1qdY9ehRc1EZFLDDomMqwLR7G487BLuJ27pamqre2ZZhW",
  "key17": "33HWzbcCsMfoCPcfTZi5EwUaeyjb1pbiXaZQHD1Z8DqoGg2NNisdaGHkHSWXbE2EjKNbw63A8yB2o5NgxipLJfzT",
  "key18": "2vsqjTuL4usJmLsAXxUkQPFSMWsEHFXEuWKjwPh4PD9dxMLFN2RALofR8tASPmGzvGLZwgP875keAhhyacJzd9jC",
  "key19": "JReNxvG4HyfCJoxrppYehNcT2VciLpeMP9cRNJSxaxT5cex4oW8vzwvCfb2QiZ9Rw2Hpd3WxaXo8QrPEy9c1P2Z",
  "key20": "4bT2fZYBwaBmvco1kXaWnBm6uhf24xG2qB2ycbNhW71tpS6fayjg25b57PKEXWCgt3rC72db9g9hh3WdQUK2Jjjm",
  "key21": "3uwruBAgVQ4BrWq63hxvt4mf5LkpQhGZHhsG9AXCvhw5uGKGwnNAbBXBvy6TD9kxKL7k1L3KcNRWxefXWYg1CSAB",
  "key22": "rJMyRcYh3ynD1CnuMZ3SjLN1nY7c8wxzMTmfYYcrKTwEgUEofsKxJRYkZreyFXE2uj36gJ8UPkba8EvZ9eYGaDf",
  "key23": "3tDodQtkJVKFbbxSj8HHm8wftTtGggsHmxFQGNjWw6pJ4HTEm1Fao73su3qLvmSNPVHXxFJkVsVca11Jsd93HmkG",
  "key24": "4KwCMWnovrKgHzj1qZ9N1Gz1MLAdckYrHRhUMyS47tr8CpHYiMBUTURkMxgxjjP22zVSb2kLRFDn8B7ChX3a8875"
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
