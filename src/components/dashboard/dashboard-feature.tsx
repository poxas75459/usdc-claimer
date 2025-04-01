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
    "3KJjWoQ5WQT6uQcUY7eHytrYm2ivKmDvk6p3uU17bmX1N9hdkutnN2Q3jiYFsGM75xAuxrSk2862Z4BoVetcbHjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8qF7RHafp4ikw81wZNNWJJE7BCuE391x2d2c8RyQcsa88dzK9YBJzvgxvZVSDpuNSCtBBj1b7ZP1THC7hRxxgk",
  "key1": "4AuDdmFWj4JKpWjkuAVyP337Ucw1z77kC263aiiEBYcj4G8AxP2fM4aYbAchLxiAXdwL1cHysy5H2fewfmQC1qoS",
  "key2": "4cjQT4YNSHoQF3Fz3nuUEPCCtFRYBE8YxSGErwHq1CxDAfd3GD3E1T3LwcaqSgatiZgS3r9pYiMQLpqfZVqKWL85",
  "key3": "4ixsJ8dmS2sYZ4bvkJuq6rEfLAP4vswctPfb7qzW255Zke1SQsmJg8sPT94LwPGf2RTgromiiWgA8FDs1YBPgUME",
  "key4": "4HiK7ZgxK7iBg3oNQqbNjXTjuVrWejmwQGcRNodbjTo3Nr4SJzVbBSHTdyZDBZqkvxdUF2VCZN4HAMb55as7VZKj",
  "key5": "SJixCgzSc7B1NV9gaX9DiydMP8SjGPp3xukX8eETuaA8rmWLcLfCzTBEBST4dT1ZMDaM5DXxSxs3LjBqXxZF59Z",
  "key6": "29Ef9fhHQzAu46ha5ivG9UuwtTGuMQuWRWhTRpCpKktGCzzoFhtpZScSpa6zkA43GRvmDGD1tdcZooxFPBUUSHKd",
  "key7": "5Y1Sqaqihdp3f1VWStv3Mk5ck549w8CXQznePJXzkwLAKaD8jXnvX5eEQAp55Ye9tLJ7fuuFNg6j7UjyU5drbLik",
  "key8": "v11curxiXv8SRN7mVuQZ6gANTjpiDPmn3fkHJ57WT2kEx2tj3QhJ6eP4A44KE9oyYni7cqcermG2YRYpbGVJmKd",
  "key9": "2UxFgFje2rzRMoWm89toUyTsfq33mRdxg7iyJYXsubgZVfUSLnhvi4oHEeYTK2CRYbCdvLJERxsfh1SHGHpCB6mo",
  "key10": "86iVg8AP66yfTtA3geNhR6B7YV4kksXWe9V39Tc4qsMNnTfhczopuwU7wHRSYHuRwLePHvTcER1XFFMNJGs45WH",
  "key11": "bcp36H3kggHZWibta7J6xGwr15eApV3cPjCMb3RfYhbNNzg7Bni2gXc9vWTv6yYmCSa9af6rhH5stiMcVuweRR1",
  "key12": "2jJqKBrqiLpLPvkHjbP4wG8mQ2BuuDJLUF9ocb7LqxttSE5RPZnKeq8yyf2CK4MKLvAXXMWfBr2mwtARD3j7i3Xa",
  "key13": "2E8B9UhSMmvY9fbMM7doTKvPVtWqorr94M1jULjsvGpF6J5W5pZWTbxjePJeBTSCTqDThW6M3MoCnS5dWBU8PxTU",
  "key14": "4DZfvvn1wr1Adtj15tNKmcEmP2xxJ3aqKAmb9iagiX1GVvbTFYhfuWgLGhQhSugc2cPA1vRdwDfHSGQdM5HtFA5k",
  "key15": "4jbBmbcDe7e4bP38CGP15icKh4e8CdUXnc54dP82YvrCr5ZyBnUbqc7K3AzAoBVa9DtjM5jT85aWHKsTzFizpv4P",
  "key16": "moJgw254ucMckeKo5cRERC9quV46i8XTDFeEdcFhMC2k3Dtc3ua2F3o7cRJ6bkK4MbW2rdM9SMtCWNzTiKTEnh6",
  "key17": "53zdvpeZqhPBqew68tgMimV2y1QX9GsKpM7s5uURJCncD3vS1dBv9dXdmdH9d8YLYcc6cY1fm6dq1iWUtyYCv1Eo",
  "key18": "5nDVUyjESBJSuLocBrLjiZgT68eWq5ggQEHqGqyMFDmVTxy8Mwr1XfqzRDuf1ByT4SpGtcZt1SYvZyGkuhc2mU3q",
  "key19": "3gistz8v7s1kPEe5NbzPZTcLaZKJiVHsVpqvanArgrnaEhbnBJ3k9g5jpWmFS1mVNzGp9Kq4LRYP6Xw6wRKuW9gA",
  "key20": "2btoSYYxTCRL2akxPcXPKbKiAaMvaxzKSFK3anZSkC9LoHipvYXqMqKabNpZyyFgFoeUfxRBqvBDoxDbDW7VAjfk",
  "key21": "5qqJB1ouzcggg1opeosQzmxpCphbEq58AkQhuwBxLTDyYLvj8ozkjiqx5AD2HmuG5zBbP3tCx12SHvsMYtWq3KqB",
  "key22": "nNqrF3L42UudeAS5QZz4pPGXnhPF1xzpb1uMbxXCMuxcWdv9gpwpFxH1oVC6r1ReY2ALhpsfEpHgtom8U32irrS",
  "key23": "C3zthy5ngNSF2CdQr9PYytocrWQGMmFajVLReVbGrwiRVKBzcGPnWLT456xo41ApYsDWV4dPj9CTdpYLTS8By2m",
  "key24": "3gg7x1vVpPUXFaQiY1iVF1LaLuL9iNJAo3Fk3GCKt5dSbziM5mWzZ1r5oMv4DUGmBWc4TSZtjPHFkwXLdHpBV119",
  "key25": "juewr86iYVBc7rqXkjwqrmMwHzFjrxsxa5u2rwF9U3XxeaxBfENK8fDb2V1LPHHNyeg8PkzrTeViMwgMvSfZ2Tm"
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
