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
    "5E4gFev7NHyLvNfHQvK5AW7SCPuRx1Kb4c276dpVeu4Q2jETUNCtaHkkkZtHaVLyZWRqJ8EFLEFvx7ybXQwJxK7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNiTprNKj1Z3x82acViYga9tzsJQtFAgTHmLguLVkUk14Bm7tPMdcip55LUwVtyufec3NssRWuV3ZF5kyVFJog7",
  "key1": "3R3HYRdzvx5GXxp57KkvT2x2Jy6xJrYauvAWQkj14jx2kyyEGT4XzMxThBFbTzT9Cnc5JY2Mxbnk743LXZDMVYiH",
  "key2": "4id8ec11pwSs8233UtFUkai6Z6MwEccHqRGyXhcHH7sr5EFLKKaCdYsgfT16kW8t8KS83xVvxp6b9bjnnwZdJTwg",
  "key3": "5HRwmWJ12nzpYmiba6Fm4mHLGRNwUY6c79V2HCKGWfwrrZBX6wEnKMmwuwkJfbcKCSxrNJt5b9Tb8yy2vAK9fYHh",
  "key4": "VjYpwyrTBVUFsNkbAiqVcNcEeNxtm2xHYyAymS1LfDn2zki9bmwjukNsGGE8pk1dapdJzLPf7cHrTfmT7vwnUa4",
  "key5": "59HyizrdyJ2ovGpogDhWxzYgZfrNS2vLtmfxvj5ck4vhEiUZqdY7WZU6fxx5GCHsPXa8euwaVDZA7b984xcbwS2t",
  "key6": "5uP9XE3TKrutNXjD9SroAJ7U2uweDmdiDMj37rryDmTTiMtrWV2hs6pRNz2ujd42V75LRUCcLDGpgcTYAVk2npLz",
  "key7": "3zyEqNPbdows2evhDhJiYuqWu5SNXPbJ3wtG4kiH4XGEA2HAVFRfviSF82QSr4drxXo154rbDGKDPzQ7eP3WvLP3",
  "key8": "28FshLWX66RRzLWtDx6e41pte72JHXkvK5yv4xqKgLPX3EGEEKhKnSEU9b42j7VCJH2ar5XqF892vogbUdoryFYu",
  "key9": "3cnAMxqP3sKcdWVNpZPetTUF45urSxASvxT47PR6icnpGCJhT8X2K531edJ5o9MCAU5JcnBTDavQwjMRVYsj6Duv",
  "key10": "4FpP1rW6gtcdQur1KibwZUhRZWrrD6d53j1ugrKvJPdae5VnHeS9FUeNBdCytnLaLgwpfV8wE7SibYRtS4Y8z2wQ",
  "key11": "5exRWC4Tv7y4M7UXUFHbazZ1TZoAKi48uxJCvxGrBC5kPBfLKSgqieDo5UUE3LSB4upgN2iGp6xSahXiqgb62Pcb",
  "key12": "3FUe1ErZhdAv3Z3BVHmpYoqXwGdwx2TWNJHvJRukf4hmjf6fjdzDqhJVTSJ9USAMzpxJp2RK45YEMVqvX9jhwLqn",
  "key13": "5nJHsTMNYBM7dvrHc4oAw4JhQUDrptFivLdvHTfTw5r4QUWa3pwWjKMe4ChsMjEGDfgaydB5wRdU1xyTPe3KZecr",
  "key14": "5bnTS6xSKmxEdc8ptJ5kyfsqTe4QTCSpJoB6xv8LyifuCikFNjQMoWhYkNY4JCCe59atVcHtYj5xjoW59NVqDY5a",
  "key15": "twyaiXzT4X2rvoa1SLUw95tPvM9ewqHTWmgbU917Jx6KHRgYJELpMfvATzAV6n7pnvVvvp4eyQBBviKMft5Xsac",
  "key16": "5Qq9RXtz1JwSBzUsARd7wy8B46ujTYCLAB9swyCrPcBTn3BTaJotfeUqpqWqVmTV8Q7XJfY6UxqzftsWfC5r2yjE",
  "key17": "2JHg1qnjW47YpvvdYefkJq4d9tTgytUrkkv9mrLhhK7e54MpZ2HqbtwQA9Qjwt4SoM2DkgqJxeUH5vgG9fpUZDmm",
  "key18": "4uBMp4BRSBmVpdFBpk2Rw9FP9KJybptYJ7r2AAs3YDeStB1eUtes9HMbk2v7YzAWV4aqDUhGp239vbChu5W4YG7X",
  "key19": "3xmm8iAW55etm9tnF2BuJ2iBewy2BGoWXNsTj82CnuDyCFfUABU3ZyZ3Fjq8dQdUM19XJqeWqE7mi7Q3JZBgZECd",
  "key20": "5rCiFjgnC9G3TfNsUiEP56PHfGwNUsdZaG28Ak8NteiZMj4RwXq2WiqqpQwYkXwW2Q54YQapj5URGKDcWHoNyKHb",
  "key21": "2fFu3SLdM6czqyX9uyneEjkEfmNHsHY81RJd23MzJhMhmWQP2ACsMkdjrmy4HDEXPxVPJPbvAiCcri4NKp9tFUvP",
  "key22": "3e7DidLiFS17h1bHyFCMwVYricmh2JZvL8gwG77HobWti6sFYERYd4Jpr23YbavuJnCwh78omJQnN5jVhRPTU5Yn",
  "key23": "3Zpn2gbGRny1hpMosqjcotuhy1YdAALWWqE7guvgyAf1q31pWLA7nPKXQ7Mh9Jf7DZ4b2yMESfzmwJ2wo4fcb6eA",
  "key24": "4MX2R2w5toAUsiWFJWswYHBMR37kA3ECRbt3nET4z8EJrJnev3bUyMeANfY3eL4kNq5TaZhKkqnBGF3PU5sKB3qV",
  "key25": "ZpFR6Q818KFbEC7rwU82wo2RGQLcVPZFamS2cJH1M3GB6nkttQ4vjG41G5gJi9Hzc4qKG8DuHNSZrnZeTcojyns",
  "key26": "5SznjEqBYdut4n9Sgv6YH3iGn8cPZk8kP1T5MJvyNtnrdfaRd5uGydvkp25XSxNDffnimbguCyksYNJHDqBj84jL"
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
