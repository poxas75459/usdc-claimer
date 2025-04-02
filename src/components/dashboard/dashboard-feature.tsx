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
    "5oE4qTXi21AtptRvs52swwp6p6sxpoHWyDRdiKRfYghXW9iuviLyDkP2oAU7Ep8CLaVJKwetL3u63aPYvBPPR27Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDHhcESjvR5iuNNNJuDyZ8V3HKNGgRHeG8MD2FTZwdbfQ66k7JsZfLfFBsM8agoKRhRjpvsKAsjfxharxSmXsMU",
  "key1": "5gFPk3BaVYfnJ6nJ3sJFcTYjSvZAELfWqhFBEpkcqJ59xxATZNr1xCUuqzkBmL3BM6i18gWncuQmF3nNeJGEan5i",
  "key2": "35xvSEoe3Hvw4dihYGMhq1npjtjxGioY11qnpGa2EQEztzN6V2s8o23nay9AD9eis4m1aZgZcrHV1QH8Poxo6NJ7",
  "key3": "kqTNg7NsfK2EYKYkR69hmEwPoGAGokRoZkqgHD8NJy2KecmpaW3o8nw1uij76meM8ogFcEJGy2c1Ksk7faASxLk",
  "key4": "6fLGgoSvSW83WmGUNZEzKRVXjp4Dv21Heiep9TPXX5idJTKxKoF5MkY8QNL83mQcZc6oTESeqGwiiv8MjfTs876",
  "key5": "2AWHi5av1d3u65mYwVdAZstub48Tn6Gx9k2suAae4rPSYoYisZTHZD3CBjctLA4fGdk5AkuPMozL1nHgkBpV55J8",
  "key6": "5p6VWUvdycdw9dgQqZmQxQeRNcMqcqhNTztP4QmMevtWaLvHi78Nxrwi38b23jfvieQ6iEvVLCbALXaarmK2k5NM",
  "key7": "4GGHzTm8nWZ1USaCBBy4MgR6sW7eEUNMmnDEVVhXYpzZDHdbbrAEDLbYQ7x5Hp3btmQvpgz197FGS5hXRgE4YxRY",
  "key8": "3ByHMihC4e8HJkXKjZuMSw73nbPdo81LQx8wSS9uJTZqKEmHKTGT5ELGsxdskQ9upQ4SXR3GL1eQ2XYx4iw7QYof",
  "key9": "2hbBcsedfYzQX2phQ14SeyAzGT52Laqr2k5jBP4UH1fzzt1XzPx4KmgWyqufbqMUhnf2Zk8xo4KK98b2nAn9znVi",
  "key10": "5HjfNiU6moAqphg3o6VCqKtfZ8MNp9WB1bCc8a2S442Wq3zZ2P6WLeiBHXi4DSG4Qo5rqWfBDPbXYXyGVqGniYVn",
  "key11": "32bzqivdP6FzvHmFeDyT9Ly2wz3Zd2RPN2UfcPykHRWe8hpkHH1njhXtwcM74Lpxh9LEngxPLKhG7cQ9wZ8hgPF1",
  "key12": "4d4u1fWMKrfg7DkY1MtVydEBbYiHaJT5fG11siKQTCCokuspuo4vnmCKPKaX9tHk6vxu83qB7soPWvSi37fk22w9",
  "key13": "2LjdSvnYTeSMRkjtcQ64vvZFQwYsw8ycCwGbq8q42k7WQBmq8UpsEegMMxasu5obxjnL4SkYo8VAqjD6aQdRLGMp",
  "key14": "5Y7UL9ZtfDuwYFQkdnRXb2KXjpNidhTTThU4YwCmQXVNHnWm61bhCZMWh8Sg43fKvB4YS1niBxr8m5L68qwhbeM8",
  "key15": "5FikCVDVJ3yoxBiSfTKsYZ2W2zv1qDXHXuHRWEaxQNG3g2ags7xdYpbsraPsfWx775PUF42snXs7KUtNQNBvHg8u",
  "key16": "2xrSvWCBmKV4coxidhBjryqhESdQoYpSkp1wxtriHrDi9ckLoboZHVaFiLtVcXJ6tKsEC2Wwn23shc47nFASqvQv",
  "key17": "31nheWsF4aXycDU72MNjwsjeVi4dETnFtpFY9jsLCFQT1cSwiDyDk1aV2jFicyDPmFDtkYR3X2psuU26ZniawHdJ",
  "key18": "56cpRJxq2xJotJHzHLxewuxoddjnZzJs2Koky3DimG4x51JyiiWzrAotynrD5ScpGGhgx9CVQojgqnRL3fgECL3P",
  "key19": "4ACgsovj2o92WJxH1J3ypq6oa8wsSWpodAc8fniEcauvSM2NaG22G3VhG6TRhNzo1yi8ETmBygJ5BzfjG7PEdKn1",
  "key20": "3E4vVUHAUT6HnTgDukKTUKfuizV8mYXb5mJzXxXHQuEcJmEuz6Ws8SPucgdPRzxEf7rN89BsNpQ9Liix8ow6kXQJ",
  "key21": "4PcuTj9fMBMfJJ7VDDUgAaRh6onALrfBqxeWStm6cUKpbqScPqXgw5HkintQobLnYv2jmtv6ptuKmxE6wt1pjuu8",
  "key22": "53WtcS7s4H5xdeFLBvTGabRzr4q8HA3uv5P7huKT7mTHaRvHUew8jpL3q6ubUEKHKkSH6qxQoc3BFoELZ7Y3NDYw",
  "key23": "5RiL8iw73uhFxKAwS6T5Kgi635AiuJLfRr9JVv1KH6go8KunSCYqmhRRcRCGaL9hSj9iYRCJ38WtPkbsBmpoLYaw",
  "key24": "666bZsb323BGTZai39FVnvQxbNM7ZxzmnMMperp1P58MH5HAyeZeU8uT8EdkxS3WaGVoLgDDYCRsDWnXR1zudbTP",
  "key25": "32dbdSQGEBGanei9iEzTDc9C8PMaoHSBifoWv8TFk6MV4pVN1A3UumNAnczrtQFMuvnVk4xyzU7X4GfK9GSdQQ6c",
  "key26": "2dc4znzgf7wSuQcd7p2d4h2SDtYvnsXJD9G5hyk2nuy99xwrcH8ttAPSw5fW1gvayMe56DywRJkvZgkFR9XAaTzt",
  "key27": "4wpR5R92wzEqNcdsZjK2gjVTDMVJDYtebu47swkke5NLYCwsBi1oZLPCmUseuA9YZ61KvquuoRWCHxbNkW2krps1",
  "key28": "67BJiyqP2zVPtN1uUs5XbkCgqxj16BYukLQz4RmXTv1qmY8xmCnMzefUUccV4k2jUBFsd31DA4xYCXVYfsvcTXym",
  "key29": "3BxbbWpnqa9bwLNei1FrGUFPrnKXKHVMH9XkYtBvrb27ZiaoQYER6ELCp18s5nYGZS8o9f8gZQnpcn4X22srhn37",
  "key30": "4s11ZUEsvgBeQtuVudgvtV2Bf3pNZgqHBZGrdcbmPZxFFf6V8zXguAsH988Wrb5rpFs6UkbV5hb26pzyatEKoVEd",
  "key31": "5w2d1EVakeGkvdyFG1JdHmdSVvD2A78JiL958SKddYGNP4jFPD5PRyfSou88RTAM6umMtH7we7qiA3g6zMrpqeJE",
  "key32": "2nZ47HQBzNUwbDeRa2GdYzUC5qPy4PkCa5zcny46yznDFMmrsTKLXg5YDbXPxx5PSKueAAuMJaquNLkBKLdct534"
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
