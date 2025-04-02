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
    "KcNPdJiLVRmt7qYDAf8e3WtagGu1JKgi4GzW4i5cquRicpnHM7hGYFnN77vTSwc7ehkF2V3nSsZ6U6vAS85m2tA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pZcsU1BnWfahfTgma3idJuSP8wRFo1skWQBx1LxHXk8Jz6EgNfs5Q7GYY1sneYMjDCX4HxzX6Xo9JRxuHowVt9",
  "key1": "4a6LPvtEcnAfqQzyFo4swDprbk8bGxNyWKbzM81LBqD7o4VcCN3Ln1wD4RCnmVL443Pwj1jqyuKd53BNJ2ySTiv2",
  "key2": "2yWtJsgzcHnBmXGqs83eRfduoQq6chPJff2rR2cL6GoPt1eucaYZRGM4EA4HKE5SjU77TqmxpGsvD4LHZ6B6MpGF",
  "key3": "4c9VtjYieiwMa4Wrbfe11mB4J886pWHXXoQkd4cqcEJM8NN2yerdJEy15iwwU8MSb8TPwvCtgNSufvazwDQx3Snx",
  "key4": "5EiwsKWXGVJT6e3sPnbnUG8wRyjVwn6CKxWZeVPacpcQCbXf66LFmnL1jjfAW8DfpgC8V88ueeZjdhYeKf2MFCjf",
  "key5": "23EcGmPmxMBxQz2VJBULnVZk6EiVpGs12yUmzBBMZxCw4AimhNBsFaeN5KDvQjFRascNffhp71ppBdR8vKMjT46P",
  "key6": "4EmmuYyEiNkAYKsb6odGdtXEWG5TaSf2ix2brnzEGYjyUTQrZK1YCbPkPpiAXKqUxUiyMCsz6w2ujpgM3KwCDjRx",
  "key7": "21EVuHXPQ9Nchoiz9FJUUTGbZfFz3rr82gczwb7zAkMAcCFhjHwFpPExzWKCWenmmfskbULt7wmhTb2KVv4NbzTL",
  "key8": "4ocwgaj11j3w5Q6mPFc3GeuJr6HPN7kZk97TnyTR2ugZyZsmpkj7Qnz5RLu9vKb4T8i5MYpDrgbHtziHpaWqxZ9Q",
  "key9": "2S1SBtYfXDXok8U8GXa8cGFRCpwkEzDqde9zwHgspNe7TxPrU4q5upJT9nUztoV84Y95oG4vLrk8iAaMXrqrBsEp",
  "key10": "2KmJos5RGAy1KofHfHuoEYJVQ9TsZ8ftETgfsDcH3YicbE99S3FM5geBjmUSxqupgoSnusvyjgyPHu4cvXQhGGH5",
  "key11": "GZVB9uVq68yRVinwJZwDsCouk32gXEDPEiHpvLx82TrdZaEUNx7N8Gi7xp3HJBhUQfiX7GUMusBvHMYjEnamZWJ",
  "key12": "PEjvm95y1CuuDuerV6Tew4KWL5R1eQiLW63dFezVjYCngEYaYcDbCEgTHgmzHDGykymKdkfpuvuvTL6jKTSg3uH",
  "key13": "4CmTj6onqxjRT6axix3mG9SeU3F1bk1PLjXksKAvDQQFyQkURRMUG8ieNCCisVQNH43yg8g4UADQYH5RCaX6f5KG",
  "key14": "4peLwvLMiSWcn7mQUv3yct1JK3iEoRkijSr5oAYPCqSCPRSFVK6BnkyqBV1f2uuLx5j86YovftXFtyjPdtNVS5H1",
  "key15": "4oQwd2Pfxqno563SmbyjrQm1DB6wHewEGphcsREWJC7BUbx9Dsn6zVpPPwgTQkYCKUqZ7KUPHifrrnraMPghCp87",
  "key16": "33JvFqiH8TgQ1qQh14cF32QRj4H6QqkbiDAtjECne19YhodpY1EvFrWSCrhkgXuZmHnF7ST88rYYZKFUQP3dyQHg",
  "key17": "4KM5Mzq3JraSEsAVfMh24nLTeC1xNa1doEfez22HXyUvJmoRWHq73LypgiHwi5gMSnVavyYpou6zwKHo9LvPJPrN",
  "key18": "3B83dzweR1K7kSo59TbKp8KZfjuTo2vgxGHaienfTHWfTcCVZpmSPd2Uuah6tYgAJmSbZks54Hzpr4sNcADuyA6P",
  "key19": "LnEhyBuuq4ryMRKxfAxj69xLLFk8F9K6H4r7wEsNNbe8b15AHfArmAyKwzQe9NXY8YqTqkdWgq6rneBr9eq7fYz",
  "key20": "5pUup4zmAbN55MwmZjbMiGAQAAVrz2FMiRSQ33T9scyG7xNJcASXSGkoU9fB9pm44T3MTe7DUAbw18VfoUMcAPTR",
  "key21": "5wTc7y38LRQpcmSECVE9Zm24f1S9rjRK6We3jZ3kamRQzpJVqF82ujzWGMggg36uYqw9z9V7KARUBfAoPkZvALdC",
  "key22": "4NcnvbcpDZBLzPiojRgZrStzM91NA8gSKP7xEKCU5FxoCZQcH7SA9NG97jJNoRGc6j3bsowWSk7QiwXqaoWrYFnX",
  "key23": "SbbYsBJG3kaQY22sHXDi9nJpdaBwinTjsx3DLFRaSghxaQhZR7dVoTopQMQrhRVsjf6FHKuUxJuEejSV5sh8cDH",
  "key24": "3ascEcK9DxhfaZPtzmYsT6wfv9EnTrBeyy4qzXmVBSUfn7tdaXUs52Q27mYAyQny3Vb9M1ZfYDinevPLUuYLSwei",
  "key25": "4YDhoA2gfEug4K9973SuxKcEMLTkniJrC15C9xQDeRhYveziicffbZcJKoJbkLsXYWHVHRyBX8bubKhAw45T3Kba",
  "key26": "eoHHpFiXpQCMsNV6dRpXPuhMnAnBtJZRyndDCbN5NQSdxWXMU6fQE98Q7Z8YXoBWMnhp7sVFo8mmGPoXPGg2Her",
  "key27": "5VXiM1DETAvQUrGvwBU9woTSdxp1FEB6B6Kz2xVg1AyFpUndKk6416QP6XCNmUHRmnx9G1331tEDpgJ6H7QxpksS",
  "key28": "5PwLK8i51sJ3En2v6WehnLC9ncbHAiFvtSbrrHFTqsJo2996b14SrueYMu3KTswiwa6MURiSu8qcC6dFK3VJEuyn",
  "key29": "2oTd21LjCyv9L6vp6LDQGM1DvvhwihUpvsU7EFWfhqZGv6vGme9jKt1D7GsduaH2A5xnDpmTgX3d41NHFWdwTAUz",
  "key30": "5hv48Yg2PR5CZByvtQq5PKbDUXwQ561tJAuYnjciEXH94rbznahpiDeQQ3Wk43LQWjFELrMuSq5VQw7qNFpgLCGc",
  "key31": "2iKJMMnQiM9H6xfnaVaaY7sUxDfkqM4VR3m72PbeZxmJNeU2JfgtWh87LUTc2eWNXvsaAVnyDRnMmF2qqdE3K6f9",
  "key32": "2nuurSLx4xUwmJ52XFjLFQLjYfAK9bKVAmLmn9RKn4T7YdATWcchbRtUamEUUFiVga3gXNvxJcW17cCjx2qZ4njG",
  "key33": "4J6gfFBXTuGozrSrNkkchS1Cywzspx7PwmvCLaoGQhMGQ3rkvJ1g5tVyEdGo7jGhgxw3Fe9FFZ3N44vjR5ZzWAoa",
  "key34": "31Pxf6vHX6Nd6tWPbP7HBdJzJsUwUp5C4ATsW5j5eJogPZ7i2CJBJUWmyTudqMUBj7HHoQLGS2stZhqz3GWBJAoC",
  "key35": "2enENc6XBMtBhDPGe8s4DLfPkG8y7XwXCqAaEAaGXN167nnyTHc8M8jnW3ntdhxLViAkuztyXqEB6tmykQ8325Am",
  "key36": "21aYY8YtpLwm87Q8CE79hjWfE5ugmgDXQNWEE4isc8WccKk31E6UxTr9L8zEvdJFP1inYiZNfJrH8DjbKXULgbrC",
  "key37": "4ByVC8FbgRbxrGLvVnfZvTxuHNhtPsmGtSuuQhW95jiQESV37wq5PrMCzx9zVknwHPNK4VJje1a228rDkzKMmMq1",
  "key38": "3nHvyosNLYLzwfgk7bTQVENv9XADvfV7z5dtcbfXhf4EQihRPmgRFqnjs1aJDZmK9GMMNnZEaGAsphHoBbAaQZXY",
  "key39": "4uEffC5xXTQQFkAR7qp1V2NmacZq7zBzN7DVVSGzJd8GN4hPVfrxnGSBmwtXLgzBZtmj2rT7RnxwtFDe8z43SF2G",
  "key40": "2JuaUE7ibF2ZefELgbqfZKZwp6HoVYwpzF5dnubENtkAmdMyQRNtXgHfXVLN1bJkwm5rHS6HikNABYG1Gb1a1bwQ"
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
