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
    "4bAFEVfUUPnASAnSRTxuWv5c8S2Mz6y9xZ3GtuEbHXZW6SnUSQnf3ZbNCnCXAzMWeKgQPrrPZXHFuuuuqN8GEbXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GLNsVvexpv7Nze8GZ5V7LwXCUVaDBq2YBxCJvZR5yh5siAKo3jgDE9YMEXakMJwQZkvGr5mddsqgFDwNGHQX1z2",
  "key1": "3ghePGmHDupDH3ffyzaVUrkAL8xvn3nPo5scnthztm8zdtfWVJeXo6N11cBqwEjX7mUGALjAPUvq69fTNKugtCNs",
  "key2": "2uYhPfPBFebicrLXNQE4tNKw259Eqn43VUu46soaqaRN9hSnUFiLKtQM5ptFzfDzJoV1saCNNuMnp36aWoLACKUw",
  "key3": "47sWhgkFCfTEWX1b6VMz7dhBvAophyB81qeqpeAKeRaXXAAsxK2SoLSehXbUhG39B42Fk83FFer7Z1SFrzLoJ7yw",
  "key4": "52fCjFk8vcGKrQd5MroUDhLQdRE9ZtFUXvg4mEtcTsvJXkngWXVo8kMv9AtWVsqfqdjwSD55MNZWM2T4GPj3Axm5",
  "key5": "53FshRDRGrRroQvxyzMtgcdCrfCD4GxnWhYBFhbxRjL98iWfEt4oibtstQgkHjY1TbQUUNUSsdZ3Y4vbKKAJNG7f",
  "key6": "2AVZyFzVRrpwMrh6CuVSj1DwaauoSHiEAKH3x3qwk4aKEsx4iZhG1yNotkNW8JMC2tYEx1rWc2ftrWCmheZfq2B7",
  "key7": "2Vmp41oixSC54NoDgBsykqJszBaMsucfsEVx3kUiPw7844aeq9Chyq3ztWnJ8SqZJkBCxrA2edUvY2qyDryDZv3m",
  "key8": "2qgmD7zVhJMPSGE9v1sjVQVABkmJVLcE582sZ3h2tqFfbBSMapEYRhpBuWcL6EP9BWRszJFudAdF6GtassDQHUy6",
  "key9": "2v7gx8dy2g6a8PHRKTJfAwjK5TQQbNDMMp3BAhJVCwP8MYBc6GprGuoYkH52ptCwtyb8iMABWFEA4sVey4wJ9Lrv",
  "key10": "gVBX8yday7ucPz56AfAaA979YxhL6gX86Wh3anXU5eA599CfuXcrP5ysLfFZdeeq86PgYSeUDzPskHQwWGFaTyq",
  "key11": "58mQgKQ9c19r2fdzsuSBt8vYBGTXSY4hnUYfccj1sHUj66cdczGXjxw6bKFkyU56XuqWmitpJSsaaAX9JQSm1p2f",
  "key12": "3F21RMyYJigbQee325DWZGR7u9Pbuee9a28ctK8EpsR2GXE6N3LWU1zczQwumyDauKYZQnsNLJuVymJkF639wsDU",
  "key13": "4W1idfpCghhnEXTsfMNzrxFpxyneXtRb4S1vaVNmWGaVnRmfPkkpqZb38rmkoMGjJ1rBYPChxajoNKjX5rv2Ce9E",
  "key14": "aq7LcH3KrasQt1J7CEVWZYzZZK8SAQTJTufpPy7TPDbca5gZSZQEX4z7nuZJxxmgjpQix9skK7XqihFdoEhdSWv",
  "key15": "2mpRPXMbPsyNvBWvT28ZMuv8XKSVENLKa5cvDXbp7XiryxDdZR2R85grzg6yGuWi1pA5EXAJPyWZjinNxcvSKKKx",
  "key16": "5prNmYxStqMEt2aJCgtuFKKZsHTkgLgNEKqQHAdx8mjMyukbgocSwp4sWtL9zUteD2reuASG3axfh8AH5Vi3sEW6",
  "key17": "3siHNrXb7mrXd1mhiGgV7qGnEHxfaJY5k6aaxzxnv9oxSEnTG9LVQuaiQukhUjDh89ZXYx67kW15ZvqpECXMEoJJ",
  "key18": "2WwYH5X1vhe1uSGnrjCMnDQqHdzxrDS9dRed6kXZGWDQ6x6tsf3crfaeW6mjBtuxsvdDjiFaTrfn8oWyWyMbgoHS",
  "key19": "43YJcMv3PQhZacoe2Af95p4NBJjYVxMZFybvbUMwduNpigyyA1be7D7L3hekdCNJsXJ3RBermtQnJQGnDT9fWsSP",
  "key20": "3niPveVRyDzbiBrY5b9fSQoVkRXuMM7R7ibQ73GppJ4ekSFd3ecNhLm4DAvevkjBhefH9Zg8LXK4gbY5rP9tmMD3",
  "key21": "4mPmzBnFjJ9fVgcH85ET93WjwCVUD3GTdwMseijmRQgCfZgBfejoXNbRvJ9PN31t4DkdTw83CZSPTh1h1EDCaWj5",
  "key22": "3Dt4ih2QAT91tHxvKE7eiZi5RwEkG2FvfWoFgiTNMctvNYEzh8vYYNdtqbpNfbSnqTsk4R4Pr8iYjgJiWGCPkS88",
  "key23": "5ztE2RRLnxvGdJYtLmmb1sH7fnh6Lg9p2QBDsmzir7bKCzKaR3CTMabY3q5yQ7TPPL3cyjHQkyUfSqTBPicyA5R8",
  "key24": "31FmUkjY1ApLpWFiufVpeuekJoSY93vvKkyKpdphzbhDbC514K4jTyXHjaJjMUEQ7uXvv9QaK5f66RigN5BC6vbD",
  "key25": "5wGxn9qeJZxir8grr7fNtRZ9zY9xXUimYboNUUJFR1NowLHZjRXhEnKVvxDFdmVyhEBz2mXo8iycgnZfCJJvC7mS",
  "key26": "4fAUnTDajZzqK3ogaMt2PJo6PXttoTaYEH8sUYymUV7JaJ7Y7Qnq6DyiEpRXSgNsusbYeWiaFKCnBg9vPQiLzHsg",
  "key27": "2QBb5ANF2L8ZB3Wup4x74fx3GcMXZuYwR5TEDY6PZPL7uoch6muc18rJAkrxhRspZmPLYz6wWm6oWWjGG6Tv7gk",
  "key28": "4pkRmnDNcuNxoMGSxG7Q4Sh5sCP5VC2F8YaDCU1XYVNqXdWxayJMSSN9z7Jmpahe3KST2LyM3NBB3bJ6D6MKpV1m",
  "key29": "Xno1GbmnpFRjVAxT6dsCriBMcJxUD6aGou7wMRBVEKRSeQHG943mTjUzNMbPhvfMmr367z7bjjHZk8kt9JbEuGC"
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
