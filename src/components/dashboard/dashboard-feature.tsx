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
    "5UqEyU1q46sKtrJ5mvDjDSzHVmuEngzp7HJYLhzLXFzJEyA1YBpTPNmzGVHNPqG5bGKoV5JZjv3vPGgrWKS7uTmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yE76TyLHVQLvzHNXbaNQKzvaX65MEvE8mozWJvqrHzpQCqBhYNtykUehaSupCnSQFBgy3Tb9TXGGthy8g2P2JAk",
  "key1": "5JxRpHJ2Xm6kZxGs8pAtpkPqHpsgmbkdBt2snTNdkJLBcnqiRB1p2StX2mSzNQRN4HtQ4WY7LNwhSxKoeL63ToYe",
  "key2": "DJs8VHFXdMikbXJQRxbnCjckQRtmLLQ8YWaHLS6Nfdm9go2uUkAddXbyuFc3eozUjaVGZEmdf6VvD8nboMDfgS4",
  "key3": "5JtMQVLbvc39YLLGzn5EL9AhaqLhmYyACQz8uLgfgpvbFQ4AN7qFQaCmjLwbYC6sPrpScosrKZjLjo74dtYXug2V",
  "key4": "2Lc3WnUTm3jsnaYWqCTm4GhmzHQzdB689d9Qn7dRNuNnBoMJwZPoko4DgNCQaYh6EECeqYjzn74n7Y6FZ6svB9N3",
  "key5": "3DxvgYZrVexZjndk5gwEgy7FXSW5U1pe7gSmRCBppDZ18j4ebJiyDmj4j7QeqozEp6G3DrfsCEiu8YT115HRdfsv",
  "key6": "5VWLQdfFDxBfFVcMB4o3K3tfZL7UxtbJAcC5d2VvxGoTKkj5JHrDN8F4CZFHYrsXMANGbUNQ7eiwfL5rxef4Q2wp",
  "key7": "AfqvJYk9qAw73ZcQVT4TaMZrm3bufUDzj7VHDEMTjsTynxeEzZxP82Hq7ASbrjKJVYyHBkaWFYqoB5458WkSf1E",
  "key8": "2D9nuC1QZAqdogjJrdMgJf8aGfSyVQyLqQdwrKUtSEtUw1oFJkobPazn9XzeCk4PCQ9g8qzqPJMfzAvPnVZBsr9x",
  "key9": "4Ny2Tim8LyrRojuFZCnQNo92EPPoX3DJerkNXh5HakTS9owGoQ4ve8x9swXgerSo6q8haiK1FfFbgxQAGg9McDPR",
  "key10": "5aS6UAAuzfS1AxvMsfUxoR3EX2xgUusZeNDdbvDUbRDCtcL9cXM6JTaKnEQUSnEtRyiMKoFa2EY5gCa3cnViuLzT",
  "key11": "2HSfWZkqBMuDoULGmHNWpEWD5uUxu6ByP3CVFYsuDZkZUVSbdHDUoRcaDVEoQZsuFkJo4fhmiHQBApjm97idTYBm",
  "key12": "2JC8yexTTHyR44VLhhhcHkS78urF8QcAx2V7H4yAXuJ5JdMpJ7TjGQ6V948mP5CdZXeYcLzrUvxUc3xqgybj9GFN",
  "key13": "4juEK1eTUzBfQznLWJJL1fcdqy3kd6D4SGzEonTJvy2SppKvRAtwM4tcs1XAxvPkYBbnMrsBhKF9NYNJ3LjUeEM",
  "key14": "4ihn7AtmvJsmqaqJsgLUjkazhukR2fsfcbvn2kwHMQs3Y7F5jyhMkUvKpkMMPbFxYyJkH3Bgz1xFg5DNV5K7ecJ1",
  "key15": "2FfiCZts84PaEA28DTvAPUBqbMLdrMB3a6uXi9tPRoQugdTWL4uEdpGyRQp9HpXu8ynGAeZAZFWiVLQd2fnXPdkL",
  "key16": "5odcRXJqF7AG145dxUUzF8eJUfLo4kZcLgmbTu28tEVCfmYkon9oxDWwCUYYkTmnE4sU5uL6mmhFqK76h2McnFSp",
  "key17": "26Gfo1LiTzpqZsXZNA1VAEHgWujb1wCDZEBeYRzutC4NGaMJHJk7tteKdGZGEX2rmJrFPgefpcVMbv7MSpapiKYB",
  "key18": "56hx9MtFcrsQ94DNoJmAETYfw6joz1NT7uRpesta14fSAejJ8bHpzxruRY5eEFrjSuhUcCkKLL39S2oMyUestMow",
  "key19": "3MKfnFzdtincA65jXRYaSgHZfBrXSyLVhz31bZR7cjfzNy3C3XSzAru595VXd7cJtsnpKX9umdU91diZTRdPboTL",
  "key20": "4WJScJhVzDycP79b1sQvnSFLUoAM637K5ErMBB9auFDuUfXiDUzv4FCXqEoYX5gHJ4WktwZEKUp8aLZDf52hCiL9",
  "key21": "4fv725pck84oTH2v2zKqLhGepDCrSZouLFzHRqX5SqmCRHeVpzvcUg83dVn4y5dKeDTPkqK3WCp42hbij2C43HYn",
  "key22": "9dCXJTdEBJPATnV9dKxKri2ZFkp2eihaoNHXBZbPYm3Mr6NqJVWwHLFLVt2hcEu8MqRnvFPvb9GSDyh3Pendx5x",
  "key23": "dybSLPQYMP3uWV7s1TgTALrwKMr2cND6q5znMZnk3HteCfNfxXLVnRoMUcHRL4aYfMGpdqipDunibHFStZYTfTa",
  "key24": "4AQ4JXY2qvf1tuzommgJ1uU534gcB8YTUdMGbxDmVH1JwA3pnqECcZfv2heFJ3qNvEuzPbsDxmmAdJt3uSNow5SD",
  "key25": "1j89n7RVYZLRFkfVxJXTLhCJVkTYXe2eauh4X9yDb2cXgNsDBJip1s88fYkVkKkZD88jxnZqeVzh7uGVK8hCpie",
  "key26": "3Wyyoy32BGGQk3Z7yyG8dHg5aDafmVEjMjEqLNJFrmmEY67Zh9aoAqShyi88dxMKLvgey4bJLEQjRp3oDASyMYd5",
  "key27": "4AovhkzoR3yLgaRRhAbYB5PgyzCbYYuJJQ7jwSLEch43gwLtbDmqwG8eQrRnrFbZL7xR23QHBPnPudL2Aamg4eEg",
  "key28": "FwoaN4zQdFXFzzxrcP3a8z4RSeFCwazJztk7baRiWkMabxuBgFS7Kh3bNTi1w91Xzyp8BVyzCpiadRgFR7YJnaQ",
  "key29": "5Wgx1otNc5jDbW4FjSKAQKLTp39ocvWHaySXjZgYDY93iJJCmWnbcNn2c8rtyWL1ipwBTfDZ4x55NXPtgbDiw4Nc",
  "key30": "3HcTeNdB9g5UE8F28SdqcerSxHfn2HZjpGCZrpi3fx6rw3ninfMQJQwyww53Nm6eQ5VeFzkQTdBbmMB1NtM3YP5W",
  "key31": "4qPX2pp7vegZjMxWSBvPR3AJwd59rzkPomPu66iocPKMeSrnmAyjcRayhUzpG6DhrP1aK5Y3nt3Kbg9Gi3aQ5BCt"
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
