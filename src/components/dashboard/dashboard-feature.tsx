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
    "EDLBN8Tu1LFGXBNeC2eAy2uYS6tQbo2A52exMGgfwwFX5GRiogGb12715poZts7qVnrDU8DxWgYZk32gGhddTcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kv8kvDvwsmCLHP1gLUrodc9S8ePTVLtvBqCcUkriZYjmQPz4qrk8nU5xP7aTfEDx26YyGLpskKHLsD8xkvWoUa3",
  "key1": "4G8rjbCbfV5AkH54A6LgLsdneascCFp1iHicrwqNMcvyNy1hREcd2jNEcckK8CygJPPx2ovceCAPLVkPyy44Cjfc",
  "key2": "5b1cv4DDu4tiR2tz6Yx74Hidrhjc2Nn8EdJxtUhasr6SKcYQimA3LdhFDeuw7ufr7RKPqFBUHZhDjSTywCCzpV61",
  "key3": "4fmpqHCDsM9my1uV9Q9N2oHjZ41gisqpXJyr3nEauSnE3yJciQQMutDqDiG7hv4UqxGJBrbWzouRqk2rKYzgLV7G",
  "key4": "4Xq7WLX3YvKVUU3mWugd4xSnnyUASSDWhfzUkGhkm5D4NCfAUqhyvmbb8Q4VCvGgcAFoMBaKGXj6nNtBvA3HuY2R",
  "key5": "51Kym59oSgrxEAJSELNoDKegVbqLiPm9xbNbWGg7vD12Wbt2RgnwCKheAiLhfDT6RFutpUDNSRY964m1yvj1tMj8",
  "key6": "3sYjMZwLenUxCXWWytvH9LiYpPPiw9jCbqGmYEvwSqoHS7PTkvCkwqLF2d1TjytqhiwLic4NqezLpxHhL1n3ppGS",
  "key7": "4jbXUKKRFjnxsD9GLzX3J1NAo7GFNVxmES2FiCAhaJjv4vDQFDXKvYP1mXk66U1owctVN4KdGipniQDYCdZmWXTC",
  "key8": "3ubybjdFYdrc5onwt2JVpQrq7NobFV22MpKqc98KX4CLMUPcx4P5xn6EPc7VAvcgEU781PMJ4eG8EKdwNBvGE8hT",
  "key9": "3zoUDYWzaHYMbsz4oawS342Zdx98GnUTpk9kJvY5RHbDj4Usx3zxGeVc3S6HXfkv991nJAhEXUPArJWp6YcF8LGU",
  "key10": "5puHSUvGic41qKjoGJn3Y9EBUEYdthkg8H1tZNsJ2bKL79wcFrXoB4eVuRABpaFfJjqPAtW6eiiaQ4Jde3k5p3mG",
  "key11": "2GXQXC5oEctqADLYtn45yKzFnxAmMdigBApTnuzpHVzd31ZCJy4bUqfdDGgHfiHeFUcuCA1eG9auL3bDC5xZZzpy",
  "key12": "3ectrnpGYR7HzE7AuMJxA1dV78sjMFor4SDXJFhp8L713ehAqEh4q3LZfi6HFXooMU8KadbLSy6UVSMDqCd4NU8o",
  "key13": "619bCdHEeFCKx1MCSURxHAXa4v34zfAbacHzVoSjFQxBRoEByVyTAdeAjUMekf1dVFNKSbgNDKWbnMJyTiEvEbVF",
  "key14": "MudUnjQ8UG8hXpk8tMYEcWmYbiBKbRWLzczcz1zZqrK5DPc34sUdz8dC6DejDEJSPWEXp9eSbHXUDC4DWo2qTzC",
  "key15": "35KCximJLphewcucpSJXowyn2LmhKQKnKeZu3FBwhZo6FS1MkVhXA9FcjcHqWYGbyQrun7s8fufUhyQ74GqtKwSY",
  "key16": "5dha8VnsiyKdriPUHmsE9iFufY3SN8dQEUVHSkv5p4EYH5hTszKPgwQPiw5oFQUXRWgzwWXzehAcT1pbFkogNs97",
  "key17": "5pjWCEnh8ytacRooF1SYWWqvd1PSW6ZCixd798cfz5D6B8YqkTHPTXBbijGRm8MoLLZY5c5MQRCDi7gB6HRMARct",
  "key18": "4M5mZwn1suJP3W3xPjV54NePV22XKr3t2r5HW2bhDtRiwidaWpr2FFoaLJDQn5nKkg7e7oNND978ThWci9KbH9Nz",
  "key19": "5797YJRZdYSuBkwJX4F9fgdFzNR3YnXRXGK6dHXMVT6tmUU2anw4KLQePKnYgXXX2knpbcZpnrJAWFV7Xu3UU7c7",
  "key20": "5tHLRdsCKxV1xwvgr3wXrpMxPt5upiXZfg37AW2g8wVCwUvLoUL7WsofGFU3qHcJgrncgkzsFyqVPL2JStoZMWLs",
  "key21": "2sTkRMHngUZzUfBSeZ4jNTdQQ7YRYb6FDNzgvXGAixgzZHfvngse1ZXHJgCt2XGCKBtaDFEyU3q7ChucjGcAeq3A",
  "key22": "5UbHqCWWY2NtTCtLVgsDNjQmR5vDjj47VP7jDaD9DbzCYHYRMMH2JnHm9zhKP1yTS2QhzzsHzfcBuaWPaEFtXDtj",
  "key23": "2HNN2vc5rCN4Prd2QjpXnis5umpzae93V9PQwharjQVwEEriBuD1Tqy9a272WJJG3Q2Let7Lzx2x9c2qHNzpinv",
  "key24": "2woren24ppERtCBSDovwok5bbLpoqohBb9B18UY8oXS6cgb29WYRAnwT97QWkGe3FBUTwLvyGPcJLQMRHZ5FwPCj",
  "key25": "4hQKkMiJhiQwABK9hSyMCDGgALA8XajVC9C3x94x1eoi898uqkAJTgk7vToGLByty62iBVzErW7UMsM2BfqiMejG",
  "key26": "3xagfKxdC7jaHpAsyQ88hN8wdMRL3KKn2URT111rARXVWsZ5pg5aNTN3CQrkRDgd3mSJySkf7Xh7VCqKDsURHiXu",
  "key27": "4MUbo35rg9aKYReAgYqh1oZzUVDa4jd93ssYDW4zefoBP6zoBDUhAagXWWBDv7b1WQnwQvxAqmi9w2QkG7yY7ZxB",
  "key28": "4w9BhndpbTTb2Fo5v3t84HJaQ1xL1isxfvNBVQ91EgV58MHzgyTGRYkU7We7PknCQposiT2CmAX5jdyLCaAdK3Yx",
  "key29": "2DDjTjLURyBmHVgoVgMCkZ7YNvJwUQnPD8V9y83wyv8aM8eVdURXgKXwpWkV85G77rzDaZDRhcYD19Lfimh8mttz",
  "key30": "5quU1zkySKWR9YxnftHGd3wiMbsmhZzPeVMn1vzDgPiVuVb9U8Xu3hc57Khs7EjiaLhPQgY4GEsP6C5xJsjMzace",
  "key31": "35KbsMj59VTZoH6GkuWtLFsTjKYkvegHY3TnkpxAvwJKKEfuNwUY4LiyxPqt2mKG6LuFkG4LFtcAojnm14LgGj1Y",
  "key32": "RvMyUwwT9sYDoaVLHptrUrn8sjGhd8T5zLjNspxatMZCkY1dK2ZxZScyqiquqNDh9g47zzWPZJXRJLUZeQLfebQ",
  "key33": "34pMinKZXwgbxamHp7jSwRxahE5LD8RvqKmeDX4BVXyPBqnA2V6ykBs7WGPx8KCkMZFu13kMeYP3nVcyYq1hkmje",
  "key34": "Mrhz2iyoDnfHqgXpyW6aQZhBMv81marVQ8kVPS4zVRb1V71DKZDCoW1Ex3EaMJs2Xn1o3bTUYf3qH6eRpACNMvx"
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
