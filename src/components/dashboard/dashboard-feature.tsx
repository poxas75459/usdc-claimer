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
    "4Xdwc2Mf9LRUSKWvacRrFvEAwdsCGMFvi6YNc5krtiLvacAMqc6NHyZTGoekwmPi7xmnVbudcSF3ybaDvQVsUKC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vD4xRzt7NVGmeJuqjQ5a69fF9LzedWYPpM43PGBGAAYUsr3Ki7WK9vadsCDLj4bDSUokiUHipNncBz5qVQBvBT5",
  "key1": "4FMhV812T1bnvyRYbmgb6Pz8vHMuV2R5q7BzoKapscfg8jY98bXKbopVe6Qks7TAJGCE4m5MVF1Emw4iAsP6wgY4",
  "key2": "1kLewPGAEBXAzys8ZP6ZnnWQoYkV4VAuFNwAzWWtKjz7mFsio2QVUVodd7HNMUVSHtGdtn4c8y9EDAWeVtodPmV",
  "key3": "3VfcLgUamhpEwAkrwrxwDm3FQ1hQtijooAneNan9v57DAzXkHbkcdEaCAxwGh7amDsepggjRVKqqE83NXtLeJCRB",
  "key4": "8FiM7wCZuuvn2B6q83jvfet1adErYi44S2pfnmjK68cuEKgrLp5w4PYjPvpvqVYA3jnHuPQwzZHn4G85D4JL7Tf",
  "key5": "TVc6PqxB5vybLQ7Udtak2WGLALB7prZPMRZgmXZ68Um1eHjEWMozNNTXnQtGBmoxxmuXRobiZQC2xCZjAvrVSaW",
  "key6": "2yL1TGNikDES9Myo4mgARtk44ivWByW8ixwTgLzsRXJ7j4CvW6JPwxoGHS8vnUqSVDkMkwhhrjKX7XmLvEiuqtwn",
  "key7": "3bzHJrrTPyYtL1iNpbP64J4k8G9DgWkXrgLGJvJzy3ozV1kZEXzyjnHE9di6P9GDvxEioudqUDU397VVXioVgCq3",
  "key8": "5dSR8HaH6ULV1sBr4v3zDhwAqKNZ8c8WSBAw6h2VdJL7zE3hrgCZVhcnat7ZexJa1fjK9nVeXBr71uR6k1praEfA",
  "key9": "5wGrBSz33T5VrQriHJNi2TVW8d6NXGsS5ZWAccmTzKGSJMoS5yaFFNhfwsNKe1AAHAFk29gPvZZDcHwHe8GweDYm",
  "key10": "66zdJTtfr8J1hDdUi2Rx88BiWz6VVydJhRv9jkTroYQuisqLdzrK6vfjkVx1yPo44GK63bU8aJRmVFjCDoXr4z3x",
  "key11": "3M6pvBs4LM3iWzZnsLe4h8NmjvUk7ML395Z984ZgP5TfHP9JxkgHVuKCtPtuBRxkiv78PfNL2eLFHGd6EvJZFxDm",
  "key12": "5DHWQiNPJE4hd7V8nBspk2YSAjpvKWhTFhoYHL8fravZcvdUd1EWHJHpYjtac3vWTp9pQmiX9ZW1WCNcYgQcgoFJ",
  "key13": "5HDfh94kEaMbgYbDrGFFmCSa2tFqGQVgXmqmXfVeULWG9YZ1fweR5RMmANVvpyz6vMgwxPBNa1XunoJMM35aa3te",
  "key14": "m1fgRqhYwBqKRwxiTxmen3qRefPZqfj5p5SKmbc4CcsUKtakmXAzF23RHB2TpYznfF8atNNNxAC314DMQqJfNMA",
  "key15": "4urghZRikP8hB51QSegkccM4ujYeKzeqfcTp1NWFmQujV7DNk2rRcgXavwtpGwjb89tUE5gTDok88LXmTqPvTMaS",
  "key16": "2HMscqRqvveWpsGw9v6sqt9d9KXLBSH2rCboSiX3bUBqQ7ZLVradz6wmfuQbRyFrCsw3pj7buoWV56KJRAzfNV5S",
  "key17": "4op3nEtZu4SQDMTeoV41Zgwjf9HtgH6ae2YH1AyTg4ej8Xxq5J4YYangT4vE77M2j7kmCAWPzW3ysyqv6uFbQ1XN",
  "key18": "5VXnP9dnY3K5mwTn3QWuRr5p9GW7SirUBQfXySWvTTeP267Q9pEwbJMiTm4bMGiyVB43vo9wjhr1oXgh1PUa8fVG",
  "key19": "qrsupFgZaMAum1pWya8gqTYnKp4w1JsoUpie1pWupJ2ToyiSYtHPKNQ6S26ssDtYN48TUh8nEspiuKPbFPaYcHY",
  "key20": "3HS8X5Y1P5zT6oWeUQgnKP8cfxVZA9ud6vHyckEkZysSVMLDD7qpgRZgtMjrr6dhNDPVGVkyfPEcHJiHVvEmL1Ww",
  "key21": "2rNQo1NG4EccUGxuvXvAPpcvARJzRqqWeonH6rnxsf9Nu5SGCWNkv1KfwuGNMbR8KChnn1QZhZmBFheHWtFAN9Sg",
  "key22": "24HnY3x18dxGShYu2A9HJvizeNuQH1CZS2fh2RpnLrnFnyP4pNbMziYeNynDaPirEa6chQsRQBoCLw441n6PiB7w",
  "key23": "2gbJgD3fcFR26WXW866MkZvKxzVMRqcX6vu3iY1xUTtpVN5ZQvsW3GvS72dv3L4wLAnaF6gHHZkNPHmz3EGEV85U",
  "key24": "2zfEo6ijbREQdfmmSG8CFz7BQsA3VKtti7sYefR9jRXjq7edVufFeTTt85REqge36UrZ9iwFipBru3AZ4AwKavbK",
  "key25": "3KvCAqBhCviSMv1UTRTypipAAzvKTv6tuDVXeTxa2zmEn8dNeWrbWgy1eFK5H6rG8BZ5hbfj8FuvALYoHZYDk5kf",
  "key26": "35tgwURjjGbgZnaDDsAjWxU2Pyuj7P7w2hthDEzW2yHyZdAwRzEWL6jfQQx3bHKuGepBqy4yVbzYzwyaAx7W8JL6",
  "key27": "5GdoCPBh68S2BsVXg3Fh3rwSPjuFTNduR835J2agUzmwNnMUz61J6uKsHNJiHqyaBQaEZD6e2Jujx498jEp4NZSf",
  "key28": "RTULS1RYAvBUTtZsQANvg2cTvbdRTUsJckNArKytymc8vrNs3z6ri123Uf2zKRZWJYffb3pvpewUsdmyhnBRE4c",
  "key29": "bcynWU6vCKqPo8dXbHJNgc1iW6fcmfpWab7pboAWxA8D7MrCheTAyzsUZmnACUpCpxi1WWpwMh3rXnpgRar7JU4",
  "key30": "2BcpzcUWybgQAMyhqYx7avjpGQgV1gx3yAFTmYKKXYHX8Setnp571wJqgcQeDB8G8PoZSbcz9cJtKd36dCoaC6Ly",
  "key31": "4zkcRNXiJPmdnTeCLFmi4p4CybzLKahPKCsW5VEJDR7Jnei8gGtNzURWHkAqwC2b8B1zRZoEUdTLeALtt7cwEVKF",
  "key32": "2uZgBRFsyiDYm3xBBNgM2ZeDSEpuaAvyAqwBBhm2tcVCZb6aPVMxCRL4tCtoaNREue5kSMbZd5d3SSYdLU5k8aBo",
  "key33": "5rCNw8dVUeP9tznAYBYQLVS3BMD3JE4GWLX4jwAKyVaHJWwNSVpdYSE6o7P2qwcksgDm9hx3sw5FMDrPuTMDMQi",
  "key34": "28W8toeJGk2tfbVgU6C2MaKSZyKb6RZjQwAdAtV4ZdwW3B69v5KRDK8EmroBasnk9k2X96FLkJYewi6oiiee7Y62",
  "key35": "ni263VAiTtvdeeNU2Bcw9ayfqSpFpPqAuJq47cfFMqbgcPs2XLeM2f96onGazXyCBkWiCHfYhRarde5MwSZW6zU",
  "key36": "3x3nDbs3vivWR68b6WHpdwg8dwzSVLNxoWQuxWWXvr3UUbvZuFsF9jDdZVEwSXrgSGYjMMeRsBjPHfDpu3Wq1RkP",
  "key37": "3uqgHZtdqmW9cshDfLyNaFTBUvhbwg7H5nPD47SGAAWQkjy2nQjQHHbybS8n7FvJyU4nDvV6V4MxY97JY5HuR6UR"
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
