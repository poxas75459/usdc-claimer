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
    "5Rj6C5xB8uMDWd2q4PacBVcPPvKS9rKKd4KnoN7vDxUZ5bMCZcdndT1kCaYvHkDunZ8vAzxoF8gtPeYV7jah6KEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YSUD1kCreuyAPZYzmfKW3A4dhr3mJfTDvm6yDHBS4ASDxHiVYiG5qmsNWMbydCD4GnouCnUPqJMUhQf9ddKGtMC",
  "key1": "64FwVQk2HzVsteqg4hQ6XH6ing9Rk8RevJXAf9FNGuksav1WV2CdeW4yFA1gJqsx44dN1Fw69saH6oVtAWWAeMsc",
  "key2": "KzKwspMh8R97cyKqo5paHujpQdEdS7UK7uVjnqhdt1xupf4VgLzeFc692Yn4yNHxB8phGbBX1fFXtKxBdBqGeVn",
  "key3": "53pEcUY4jp9tqk5yiwUgHzpKY4SezTixnTzCzgaCFMZX3bQWh1kU3oS1P4AgQ4phaZM6CVajXddSDDd7WgScdLWk",
  "key4": "2cPV5diXCMRfecFyVeLjmPf9Vk9ugErePHndmy4AXKrPYcpm7dRSqEx49p39ZTC7Zfr1zZQYCJQYcUjHSgrm6e1m",
  "key5": "JSVaEMnnAxaE2gf4VXutS2GmpL2QAudVJ3vSZahJaEwMAPwivBi4Ae5GPtHniV3PCoPbEQFsWQtaZBDyAhrPrBV",
  "key6": "2cJCB1w1wbDhjodmABWxgsNmeVdjD6JKmLpBuzRm1BnLcqsTdWXRgE6PEp87B7mnXnLK5UYfid1849cfqdWiW3Cj",
  "key7": "WxKmRmWeyghHaFqQPWsy3Ymeunb4w9YGC8p8karf6HvZi5dziUXxninWd5ng1TfApoJdYtAnHjRoetcZF55E4cN",
  "key8": "66A6PGwbB6zFmxN32S1UJorqSPSQ8StKDrZSPLRemz54jUasDf5giPfV2Xcbd4pyQsjP89Bh9rDGxjTBdr2DZquj",
  "key9": "Fmk4mmgsTLEePfNp5qeP4TBUiMRX7HEcHyVxnkyNJXUih4giYxHKZDdY2AJoz7bRJ3THpaJFM44iUuzMxx4hivh",
  "key10": "268mUG3utqbkXQPh3EXMTctNNgmHm4ezgCeqAw7TdKkZrYBHo6D7kC9vpjDjBdADg15DGNGtkRvQjcvmauZFoKQ9",
  "key11": "43T416UDpe8q3qsDgSBwcGkwP4KZqWnomvxRkPRiPkdin5Saff1KnSiP32qRmpNZFSabSDNq3ERQnXyWYELogaGo",
  "key12": "2QJrgskZEyULLXBr6SG97Rrm6vDJiCCASaYGz7Y4SZ9G2SMF9x4dxbhC3oY56p5kjE2yEtrGVqzmyPkDtkeSS5VT",
  "key13": "4GRPi2rYSBA9Qxm5TxbNSzSDjEPY8nC6kkQ1uKZjMa7DJwF1ZPBgUi7m3wJ9dB11AcVzBfYWG6cUUrRRnUiqfXjh",
  "key14": "4EmeDiQG7yZ1hi9P2bzmFezJsr7j5mHG2cBcPFm6y1woaaj6we8z2eaZVjxoR3JHpaf2tRfFYUNEGwdtEDHws4FV",
  "key15": "4qqSv3aoZoEnkMjtvDvmvZpG7eh3b789A7QfWHF2SEAm7Fh5qFTcSE4TN8MVgz8i8BQyzbdiJCKDgCSo9gg7Z3Rr",
  "key16": "32CeoFbPqFKqXxyjoXFr1d2Dqk4gCc34d1iMMjTZmQiByLcECJhreCYn1wUFsyF5jkjReE2DNiU4mAJKBGbksHBw",
  "key17": "2zxn8DTwPMdiL9mw7aupbkXeRphApcFxkQYjrdiMxPs1dz9RqcnpBB48N9jSVyhNvRKHSECxDna69a5M3nJvgc2w",
  "key18": "64Cm7r1F1Nxg9F83ztYRxGA6DL4AqrTP4Mu5ZH8TG8xEKr26T5aBTJDq8GSfgRkvvZFqCzAWYhyCdsJe9jGcSuFd",
  "key19": "5oFASDGBduKrDYg1nLhprbMqb8Z5HvhhtSCVayanuij9DgGM8M24g4hcRXjEcREhEdvvcq86g9BMPyUpvyFgrUB8",
  "key20": "SNZeqSJw25gEifoYeYyY5ChakcdaCvhmKCjYS2dkh1SDJEfqc435n7YScjPQ5zQsovqPujZEnECx2FoxywTBKJ2",
  "key21": "5BdMZMfUU15DHMXSRF3mfwS38gTsddquVFNfjyiQEZnGofq4YkmwteGkHtXKDhAD7LhQXipeXf5bohwrzAXecyK2",
  "key22": "4nCqMUcopJusgkMBNTMwtdsiZDCKyaCtranxpyUevcUob2Jvu1uxd3rae7ef97sgf2jFnB3Lq7eLBXgCEA5qaN2X",
  "key23": "5wn8qSQPZEy1xdtvyjkpi9Ysz3azv7hCeVHq1tpsSifNM4t5awbsNS6ieW7Z4tPTyFUvdpDTrJuiz7e1R3Ji5VAK",
  "key24": "Pbv5grbkQyimk28YhQmELZxxgVvp5KYMhYeoEWZzhs5yVbcCfscuXsDGP4PyU745J3wAWykSJmqSsNWgHJKwzVw",
  "key25": "3bAdZPVkTYQuYEQ7RrfCvcHsZQjer99uNNnZbJuNtPvEYxGRaxNp87GFU711A6v2NgR7FsrvWKJ8UcNAwhQgt2D2",
  "key26": "46G7wKRLarTJMPfFgS2NCZQq1FRYppcx9DferB5m2Ft6dTK6EsY84WYd9NVKz7D9wiwFvV7DQmg2Gou561Ndx5u2",
  "key27": "5fYusDm2uJbZUxawBAvcCBF1RpUDkQcdFjTt8G4Xn4jF9Y2eWdTZb8rBztXXNNWZSngoYWg2SW5vpukenWFaF7Wk"
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
