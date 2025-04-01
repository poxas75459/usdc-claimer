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
    "2N1eTCNMg8JnC49UQhvYCshqQCTs6N6gQ9sdnx9L9GCefdqiSVUjHdVm7xoBXkRMsHcvACvWBJZtxjM1qazyZ5DP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55QVG73zsyZ3AvQVgABsc1GFMyeywTkWRXXNLTmU9jmS1vo4uheWAV1hd2KCxVfKftpBdc8qSGr64xrfAA4qn11r",
  "key1": "aTYbsHFWEdxNgAnDb8GznHrx3LKrpJ7SXtxE3Noa1RqR8jHHXvXCT6rSjMsaLX4noukP95L5ed5khtZPDeujxK3",
  "key2": "3Ny6R5toCmwdo2KAktiiP4AZPg5pNTomULnojaMhGyYhPK9u83e5RzhbuGcYFzL5v1onXViT4JLwWS9w6sfkRqLE",
  "key3": "5CQ2ZkKaHSpgUEXypda3z6Ry3qsCz2M6EerHbiXa532kGzv4AbBDxZuF411dRju77PcsAc4xUVtPXEivVE59CP3p",
  "key4": "5aSkeAvGaekLecPaUSgdwfEu6JK5V5mbxUNEH74ThT2Ck7evtA2YJTmtA2NHsSERJwtcVRFDFMR1rdLjp5LrUtQB",
  "key5": "MpayUz4h7AVkEWc7cu3db8eVgeWfwdUiSp95bKtvKdXFDAy6MfFaBsJUNWQ6HCbSvpYmiJd3RH7v5Mwc2C12RbG",
  "key6": "p9ctVYJjb9ynkb6ykmjVZ5NkkveZwr9RRJmwHM9JYrjcqyWMY4qAqLKeCYecANskL5uLL9Lek9rrKfe6oBZyX4V",
  "key7": "53mGikCduvXAiKnGRmNcZ1JNGky55JHmJDnqAPgod7BVF1MVzywWV9zVjYt1mvDNd1E7BiN3XPvP2wTmtLUHXqKP",
  "key8": "2QsCcJEC33pYBsUqvPMJuXxTuAewsrWiUpftmCXkyV6nD6hE99X7BH98Ns7mDXKLVxKNZBi8kE2fY8bzMfMCpSVa",
  "key9": "4VG5Db7kF65T3GnHrpVjhNfJ7fwBk4PrVR25GNoQqpt2PAYbav16ctd7Ces16sJS5rZhcxG23MUVJHDq2WZBaYPf",
  "key10": "4uaDHzk1kWLxQahWcRUctXG9XczWH7DAmyxLuZ92RisvvZYPkZnVm5g975so9XgJEj1uLFDHiinhypYv932FFexQ",
  "key11": "4WuG8Pmm6wuvBLFU9rGC2VFDLKAFvm9hoLadbKCVMmRq5XQbwJjMAsV4Rs4VkgzXJP62UwpAzEhbM8zYSmqQuWcR",
  "key12": "N1SjQCHLeeJD3rtiue96SYTCSaSi9Qaa57vEJXZssRZXdk9to1dBrwaE6t4Qw8djsYV9McCxHagU1GQqpyVVUtu",
  "key13": "5obPsSKG2tavF8Gj4dsTfqqmn8KabAUfKEmmwU7VHjhHETPue2m6c4ASxf3idxNMgrZvKiNV4ckDdLBJmgjHLEJA",
  "key14": "4x1zecbD2zcdsN6TECx3zdHVQb313Dz7Xg1nqYiBC2dVNG358D5LUrA5rsCdgXBhv9jPJw4tWbZMbu5Y9WtiCFJ2",
  "key15": "nr1rD7ugP25zNEtB2zCoCZxXUfHmUagfMmFmz3KDj4jHE7gWXoeUqYZ4o9MR72DQQ28RU116zCMXPUJ5iKdQmhz",
  "key16": "2U3myahbJDLvTB3VdaUHRqgznuBE47WS97GiPwBUoeRVV1qhna1Bp7hpgREUGMVix4W3NWD2xmgzUkKRvmaofjto",
  "key17": "2oBBeeawGHYWLFgvNKo6m4g1h6uxmWBVj7Mg7eQpzCGS2iCgoLxQo6GEryUd6n5pDWgqjJJpsoC31S8PqDtYnhmw",
  "key18": "5BtVasaJAZAfz7CRZRnNrAZrDxMoRT6STN7zc85BHg5F6BiiXqvH5brpb4M9twtXL1KnpKXrtzBwRFdFcUHyGmif",
  "key19": "3gpJCfgiy2MPewG5UFHWaSUK8ibYR3m7modq7ewjiMYqJhrnic8x65AHn3txzhhy467AVEFUL7jT1chF8M4HiRAn",
  "key20": "aVbVWgm8ynzuWebfbwV2tjFxhPQBeVpQSsYrPZRC6UEqPvjBiyHVsC3TLMR2XX2WZFwFvGbhnbJPnBuaU1u4i1B",
  "key21": "2mRt8Du89mf3Q1ZG9QxCRe53JnXWHJfseMAYUrreV2TXJasBNh7E7DGBUZWsWgdyFg7j387x3VirsHRwN5WRU82q",
  "key22": "ZhZfjzvsNck7tMgbQgzoFJBqaWwe9pkZ7wmzrpBNJc7rJtmiSkK1eRR8roUeK5ZMsYeaUFerjXUbQdq2vUTxdsT",
  "key23": "2CRPqWcG2YaPuYc8fBgVX1o6Eoxxf8JGYuyz7eSiqxdv52Wz4PJ98tx5w8bdYYCMyi6jEXyW5kjmKSPRuHHBCGRZ",
  "key24": "5sA6nFDWcQwWRBCeBBSRGULz1fKQVYgKow58v8EhcoJFurtccv259kNShhGJGeHd2TJcegoMa1HxTgXe7cAKDSNs",
  "key25": "3CmGcWh9R5kETA9YQcex6LTHHqzKh4q1Rzq13paCEu3fSQi3irpwBoEHp1GLzgzUzw1M8knJKA2cPnMkoGXr3qdT",
  "key26": "43HDXn2s7UnES2TivT1djpsgsv8dH2zParp3GBwBTZyztn1A6Qb1Szyi3FSCMGvxvVVrp44yFif92gN4v9iQqze3",
  "key27": "55wrfBLbLapscpX1T4xBX1AT3HdaEKNreGLVFKqyRUCxXyCJNVRcMiLcgQpv3qK2sAowy1Hy6vJBWrNruvVCQmup",
  "key28": "2Q6LcyYDiiabbAdfgCXuWCrrN8itFFVBCuzdNHMAzbQr3fa2UXqBgbTsnRmtsYo5hhkMahEiqRzb8GcmRbTvDJhB",
  "key29": "5yogoGF963efVXV9MZeC9sqXY8MioXdhuifWYJ6eZYGsBydDpP5UL59cYNQJsCer6jMg1oNedP7wEH8Lz63mJ1Pk",
  "key30": "akDb8AYUYuTMS6Axyi3anz8XViA3ubxJwW2PuJutr5wkZ1RnM1E4GLbjEJHgunaeFeTB3GcAjmKthf3Xo8Gt7oL",
  "key31": "5a9VAMVzQegobhRwyGhxb3aH7YxNLenFsw7SAAcHUcyr3P1GQBR3pmGkHgGX59sYzVBawVoHp1kXs5naBPnHwnFZ",
  "key32": "3Mir7EQtztmg9RvUixEEihMyg257aPorkdut53coD39gNYu8wLWq96GyCJ8yTHTP66kmAVCYPDHCVuedFjMzeWHC",
  "key33": "2V7qHHgsHFPH5KbA7eE2ZzT3UVrXksvRmAs2d2WCtMqw2uhNHUJVXYVyNbd5WbQdz51sMCTjr1fUoywMDJt71Meq",
  "key34": "3Tbbj1JWtPVhxPgaCSSveTsqVL3Pei8isHQeoh1enCfwMKsPmdhvrgLoSkGwECR6HbqJ5mZ2KaVNjs88mzs8HCTA",
  "key35": "4VEYyf3sR24zurNZHUDxcs7BgbHBS6Y1q4HykSERHo5ieuXgMuVn7mkKakaby1T79brZmFdN9fG9Nrrmun7cXVx2"
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
