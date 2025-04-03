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
    "4R8fnk3kZZ6iKEEt4b4sebVmitfzABd8XqoJXTLESnWdxUav35CcYuwiDMt7iubCVbWKZ8CKZMUQbtZwDbmXsATf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjEcb4AhyJ5WJkMVFf11sjV1zocaBkDzkgVifHnkJTfttpdEadS3BcyNY9L9dvyQCZcRgWtSAi9R53FZDCmju5m",
  "key1": "33p2wZhZQ7GK4Lf4UEcvAYNGt1q9Wp8ai58rgF7Rn3Cqz8nzyzCd9PPGf6gTfspcXxGQMunYNyTDGz1dGveiZM1F",
  "key2": "5TJbEB9JaSUrwMCdTbfgVgMUNKY7jDtEQvE7eQUXEcdCH8wW7SDp1xBzNgraCif2yRFuUZmwq1YkwkJQjT3VkuG3",
  "key3": "2kzGfyokSQ68cPPEgmtnPe6mAamTuJubH74LT9bpwv2N7ZVy2VQyNkturvmbNB2669fuZADdW7JeB8iARNyMs53V",
  "key4": "57mD7f4e8SijLGAeL2ZRXGrJGgRdCSDujCd4A5F8Qn5zrsFned7Fy8oV7bLJPQGYci5MNUppbzRzerSVZiRV451F",
  "key5": "2paWyyySrYEYyb7uSZnV93GRozrGzZUuJpxThXd4ds4kM2Yu48D9HzKhahYc33LTspKp79F8e5Ugoi6nxzC1BitV",
  "key6": "4egoK1hKAupAxH7WPqtJS7iB8kCs3NTH8w2R5QHspnFoEzNEkMBVgLMoQLyjwnkhPCge51Z2NXtAnhtXURywK7Jt",
  "key7": "QRiGsrPaBUVKf4573mmDMzCwcnoMtSiu6SpVudivUHspQ8rBm27kCo4RrMhpJw3MEgKn1fZLyBDj3dLr1z744Q5",
  "key8": "56aq26AD8di9a6Weu6E5pDhEdSb9pt7hMoTnRw8FtFc2PLx9hM4GQzEVsUnFLB5c8WpL85uaNs6eZXU9BDrHM6yj",
  "key9": "4kvuQ21LrGffTcEWiCVXyCfcnqGs6237gsY79vxQLkPmZ5XvHb3Tbnag2jeUjuNS3Z2uCLAyVvsrQiHAZi8DNDd5",
  "key10": "bvQYQWD4Zw2tqCFP97gjaSgMCK5XH4Q1o8FqmPU2Uv2FaFV5LQSFkJ13WJLgge9sXxvYrMbtPHXRvmhtASyhRRY",
  "key11": "3THj5CsNZaFQRfxASV1KQcvzeRVHmzeqRyeLptwZ8YNTYycEf4QBhYiqaR3MmBttP5C8PQDwPM5pSVVdgNgoGiTs",
  "key12": "7SYMhKYhBmf4cw9bWqdHb3ENh4JGg4JZdy5crMhS4AfCFNYMG24h6TaZua5oMqbZfpah3zuLsHMu5FNS3d2K7rL",
  "key13": "3v1VDQtvTYByWsTuboXvro8pvNbFPU46UztseKiTXKahCXGbsFyFVDjBbZez8DqDwrmvbo7a17sDeeEB9JUGuMQ6",
  "key14": "2kn2nhgw7E4ZpLasJRG3wqRBdMyRYywg3KECZBBh2LuQ2kp1jL8UPjdTQ7UefGyJQ7BG4eNscgzjaEJnZ7QGKJkR",
  "key15": "yube6n4gnTrrQH2HAa4fd2yF82kRaR8ShCvrAaFPjyDGmDXo1iNpDftD1WE5JzJC1r4pBweYrDbBzQuoC7DZQoV",
  "key16": "3iX7Fv7pRAj4vAxH8F2dXRyif66AVzC4xWQ76RscBEbUShjiRWfy1uyMATpLUXVRdfUodiXyH2ZdLQenJRiTyMAV",
  "key17": "59fLMFFkXiWEJSEU2iusF5mQCuhpUJXkVjDRjbYtxZR9Nb5AVFvWnvYambdhrv88SAtChR4RrzaSdCU2QBB1hGAd",
  "key18": "85PoAPCJZB3U8hre3Cqo23EM9fi8w84MCVNRcRvAFijAn8SW4rgCCVoAKtuKPrhDPK6xcGNz62325NEA6tUu7bu",
  "key19": "3WnFzEiJ5A7qQFVPdUXXN3XCxLHX3ukETkHd34cLfpAqpybU9U7mNokbfRjkqd1pzRrXP6Y6swPmYrz7mbDzTExW",
  "key20": "2qZjvaE65N7iu7gzHyejHTNjrwzG3Dt2qF9DErFJKPEJwy4RWcH7Kqn8XEQJekVofPhGKwhFjzowyxWERQetZc21",
  "key21": "RmzQ3qgCPcrPpfVLgN9GHfXYiEKsxrhVpB7PevhrDQgHZs5nsfMHf6d5tDDRtU72JNqaHkX9NJ5w7W215NGkoHx",
  "key22": "4PkPo8NyZTq6qwC9bDXVp9sACPpGXfJjsp6EWSTV368RWWAiJGPUVwEFJsWhLcPeD3JC86FXv1baNokMDhdhPM5V",
  "key23": "4RCeXrm6aEgYzqMjS4yUooYhux7L8zQzBA9Rh3JRY1DumQjSy6nyeVpYyNgqtGPTBBHuqFGQEWHeK8MmFnBgCmgG",
  "key24": "3MbXYPunc5rxUi7hZ1XHZrLB3H1xy6XeAJPfP1LFMB1MgQKrSVbT3Ycwo21xW5D6kPYPnT6uTRrUfdL1e9VdHyjo",
  "key25": "5FPbSdG1sdqkcvBg5Gm2s5rUtmyGqT9LYqc9dVPtKVwgw3n4FRDZtNvgLgsEaqXQQFsUsiiFFzdq9yaJrSwzQjFV",
  "key26": "nW2Tnstf3ZwuVLB9FsCxyctihbZnwxAvRJRU97HDXCghJY2ZbyjNCdbh9H82tkRmYZLGjs8i5uhZvUMGvz8j1pZ",
  "key27": "4rTnqW8my4WPRXDMxmhUk2mrzY45Lpzi59ezPFjU2DdAP2JhuY8Liimy1tzNrQdqf87SJo1G6zyp8NLiWXqhru13",
  "key28": "2RZXatTEf2jqZ5n1W6iFbqjGkQUQBMPSYC1JQz4PqzfoAtwZhKUDnLFZbeQ6gSPBT5j7Gk1k9dyqmR1mBEWbUkX3",
  "key29": "4immdAQ7dKxWjDSF7MDNTP48C27cinNt5vzWV3U8uS2JsxqAkuvQ2TnSrXM2aBYTGJdrvVX7RFVRt63TdkecFuqZ"
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
