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
    "27CH361nUmvsQdY29VtVwqo36nexe9chx2NkzVWK5xcoPPoCQMb4UACHNQfZsvdCyJycDzJ2A6hpqao1Mdqvcdeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qb9xWKgNrFc7oYg9E8dtAjdLESr3CpSKJGGuSLkRSCruT3kxFjCaTXDLEGc6ZTyUznK3xcVvVw61c3SajJU1zuc",
  "key1": "4F2shgAJLZX4CoxEeWZhBR3JwAB2U6qo9Jp7mUoXKJvv84aDwNZesEd6iokf9hc6XrErpVJJNbtGBoA3HwUxmH4c",
  "key2": "62eUryScNDWRizLW947dmif5UT6pBxzbgvGYGa9bejeVX5XX3FUG8iaJue6Ykt4VKZSvjyNkV2WMxzDbMmK3k8gn",
  "key3": "4o8NLk8WjEZ7wN97f8HRdC525yJcJRdgW5EX2CZZ85pSu6nuheZUvJSnCCRXCXYs7BQ7osPe9ezQC7Xdz4ycU6ua",
  "key4": "5tRwq3cuTjZkp2DqDM7tyTie7bVpciiZF1KvCxP3tyi5HGbZHBvzWSKSHKKGgDhUGSHp9CY6LRtyHMFR9mYDacS4",
  "key5": "27PQrbZDhocYvmDgJcN3ZAqPHPA3toDaTTTponHn9MvszT6hvwT4G2JLwBbRdb2CxcTsJCXG48jyJvsywWt6YxMu",
  "key6": "4VEH2DoR6hEthYKJ7eRggx3U5WhowdGFnLXEkfbhTNQCYeUhC3zPv9ZmMwcKoS1sBearzJVFzhks4aXKvYGvMHV1",
  "key7": "2mm32zWhEQ7BNz5L8zLhbvSBduHF3a6mXuJzn1w81CB3AAMEEG6z18Hr6TmfkzoA4mtZ1VJAobEjzusnEX7kJQYC",
  "key8": "4rnTMH4MY4tSumfcwvKNwE6JiBS4kXuvaBu1vw2TS2UC51eGdbevPxJXj4faB1uSctCDpZ6wDSyjwjca9UGzjXHU",
  "key9": "2xVByebnC7FaVrsyn9MxqvZ4diFZDw5tDSemJjqXAAGCddpSPoet9vsXZLVAs6DVQaMVG43ayo83JGSRTinHa8Vw",
  "key10": "5XVPRTMznCdWTJuZm1YyVKH7Q8tUaZL7qkweA6otzhc17sVef5fCaEas4tj2X6TS6LzNHft8Ng9pukpEwcCwgkgM",
  "key11": "4ftRPeuB8AERQc7H43wvebUWBS3rV3gPApGoAKnXEo4AHdUaxs7zFbrbX3oJo4z4tC6CdrcmV3oPFqnZA2J6MRv1",
  "key12": "4wwMdYFghHxb12rAgQUeXBnSx9AZNV1DbL1iiQKMbqPEeAQ4KRdNVsVrU324c6JhbcAm3NTobuuyBNSNXug63EFa",
  "key13": "4u6A29d9wuLo6ravyvVS3mTVRrroUA2yzve7sUjugCAR9GeZqJgTt2T1u1QWwQU9Wmt8BfdaLrFwcjmrMECmWhTx",
  "key14": "35H3z95sFSLw5PuL3r2PdHufRBRgPHKHzc7BiQ2FkcqA3hoNg5RfeYHf5UpM4SaT75JDTwn2GHDsSRZbjtTWCAkb",
  "key15": "5oxquR3kymQTuAMfGWFY9TMGeT5sH24xZNv96rARbVAi8J1xcsxdn5arpLSNsPwasvwSBxDoNjvK6YrBnJ1XMcdM",
  "key16": "4dN7Q5236gyHWKvnnccWnhbsNUfSNyY7SxyeBJXJuNSp2TKChVEnxGpUGMZqNzpYf8rtsJiJAKh9pwUsv27T6Pc5",
  "key17": "4DgX4btSoAXwyhwVSW9Ew4ECMRJVUJQ2Kqfm9xBcixJaCW1MiBjVCmgzNAiNUDrE2bSZuKuUydTnuksVdEsb36zr",
  "key18": "4FWcyYpmWJEkTfAE3t1a3njdWGrGNA3x2FHz7vMEnS4ZoVFFqV2XY4XkJs7qNib6Zsy6LqzNUwafgVi8RSN5KsRM",
  "key19": "5U4s52j9WyNgpP81hPMuPJyoZrt6t3R3Lp3mCtM5y6PVQwMMYdG658W7uWbpe1enuJTwHtwNFUGnqcZ6gVR4rtAJ",
  "key20": "5uZsBSe7vRKw676CxGaN8eVxqEk16YGE4SkPjAj8X2huFRaodgGQ7hbi5BHGaCpKqfJv8zc3eEj3yzwFapLWnsGA",
  "key21": "5HbbjfMuR81SN2PjGichcjiiZrkhLCPvmLXZ6UeR65sM1WLh2T3S4HziAZjwA29ggmT6bM5b6auTwvsx4RMQc3g9",
  "key22": "4mCZrmAJLWgk28kHX5WLgQpSh5HHzdjimKkGZZgoEPoNeEu6aeA9KQKfHgpz68ABpsNYn37uksKt5LpXC8VMcPRX",
  "key23": "2YbqRSVm5LiV9LDa5DNyuectqyHcy996fbqxKsKC1ubT6PdSCET8MUEqXSoScogcbGJp3uERnyEX7HreBmw8Pyrx",
  "key24": "4TArNP9CN9sUVNXsXH6JaNUWCSEwqTCqZGuWivRb8cpBW5mEcU1oymja8BC4F4Utr56eAFnHhm81xUuiMppEwTKw",
  "key25": "3qEV9ZHpvSe24CM4yNmMdfHtR796BSLBtJEQC6DuFi1ekYqsTRZQqF6jWmtuMw1YcVvbds18cmB4hKJbqD9B94Q2",
  "key26": "3SA3h2eiG7HHsZP3xGw9Kui3kbrujYsBU51wsVrP2QCQaFrXZ52PWTkHoSXGrA9DcUmXiSgsJkcyJXJhgbmFFpeQ",
  "key27": "3c8cP3x3arMK6swo1JsmkyPkAjSHdgQYrMR5uXNoDvDQtUS9r7WfweGnd3iFKiMLWgtbTn1dfS8pZzNJHAXwXcBr",
  "key28": "4eRH5fLu2Tpvazw5XkMvo4ndSpVoBcpFpwPtFSZ6Hdw2aC9UCwVXXSdJ6bHK58XMfYi1onuzP5MBS85WpYjjdPyF",
  "key29": "5hQjA6H7iCUntKFSXFTp3ixuVb5ZhtLTLMingNMxtFrDgEuZQGvTFxPCJekpfCZQcHRGRVK22Ke595dwhMcL6u56",
  "key30": "5GJz4ngatwrLCsjwJxC6APZJQnWAyTQB8yPiHP42UpP6xrZqgFCkgTFr7aqc4su8pggpN7JsbyEuj6pbNmjAXUj6",
  "key31": "53mJd1uMyWfJur7bLVEhSSAgSWyHLxvmrLz7CD9RvCvexdGHUtzxafiWzKP1HHVaN4n4yFyDHeeqWjAc4rsfc4SW"
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
