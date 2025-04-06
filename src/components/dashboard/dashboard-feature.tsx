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
    "5157kiX1T5ufAeidLyYCFC4jqZpyyDFACuCsCYWHcQDnJbh9fNaYZkYMVVL5FSKNnAmmDjjqNBtK1gmF4QytHG3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpsgUMUHvmvbjnDsUefBX2jfdmKEwgs2pLtDW2aUmKopQcvdW1JjqgpTKZctocQRi3Taq4R4siDfLT1aPpzNXB",
  "key1": "5C3Gr9zMN9JuXu7TUYf3HzHmfF94X6JFU1o8kXLBUjzTr4eiKQ1goHHdHWptPyB9e82LKXeXzjrudAM4D6on5mqu",
  "key2": "39eFENuL3X8gk4LQ1hChGrbFLSsWSH9KbvaapwkVSAauaEz12oswDJGhhC6MiEtkjeYxrVhhoHPYJR4UjCUBT1PU",
  "key3": "2LXHYPFKTTaCKA5W7rMM7dcLD4wHczREGdJdhfDdGaymohGyRMK4YqwcenEZiL64iuaRGGswhS1HdgK294sqmvvK",
  "key4": "4TyqatBgVCbFi3YQ84TPmYZoKB3wLH5gCVvMnbK1n8G7DRDJoSrGmeq7rHh4dJegmoK4vh36PbbU5qN8dzvE17jJ",
  "key5": "3iHxKcnSd1285wAabUtFwabteexz9TjTnNm7bvcnJtb5ZC5EBzfuDGmW8KDMqMybrXYmY6eakVonczeTXvTPsu8s",
  "key6": "48dy61iTjGHgR2UgZQqmLEYTdyjYZK1wqEKZxaseuesZ2hXQ5YhK6uMwgyEU563jwuyngVWee1MxRBUjeFUXWitL",
  "key7": "CNbLkuzBbkSdCdBjjeFp6prSJxMNitoNwSKBbM8RceHGKmeubE5PYWPpha9L5usiBNNAKt17mYnz9JDaxXbxLSX",
  "key8": "5GLKjQWpEV23opHXechE7svVm6qrFVzBkYw1bPVkwKMphSvZkT3QjokTZdmTvTsTZEBQhewNquwQJGqY68G4mdhj",
  "key9": "GYgKJh6p4tHFrHkDkUBccGNTHk1vDpeGm9r9YYmSMp8xbXKg88bjuKckgJMkLTJkBrfuiF5YcYcGcK4Z449kd5o",
  "key10": "3QaRRKvwZVZVfQQj1h2uRJNHz5JoeZxXeseCPwvMCiMRuCTbojXzun7GbNAGENCS3zVtW4UQy245jt69uJBsYeBH",
  "key11": "3wzvShsMUmtnTkQouVKPwkTUUJahmfoJ8rtgRVKUDy1ryduyqzB1oY8rZAPgLuUSv2gPwrBG9NJzEqL3JSTNpG13",
  "key12": "32RknGBjfCCFqUm1K97VyHxw4snkq9nkNZSRbBF61i5CphwR29NXQ3bqmZS1y2vUW8uLSvwNiRZcQ9TfFDAUZCMA",
  "key13": "5Y1zsCtuATTyaWvHKxK6LShTiJEqZSi7csWmB5rvKrnCDkyNF6g463cgpyXjWME4RWcgqqW9gofoejoHmpWSCq1y",
  "key14": "52UEM7ExE6V4UbvqXv5596kmizeqdZ4o6acckCNHeV44NPWEeDzrZUyZt694cx6f1f8fXTS2PkV749GifaimdNKz",
  "key15": "3aHgAoxWdL3vMLLrP1yvi3smTKLiCLqVFsxTRKWYqU3e9zihSTNw2gqwTuoYjW5wpck4pnqCvwx3u4tWLvqP1B6s",
  "key16": "5tDa7BGoh4pFUGKjriPwmEZrzWKXjBBGUsWm8aJiczeuK3vjXVoYz47yPvi4365Qpr2u94kNnzgPpzQCAD1Fgkmp",
  "key17": "4Cgm8ZnWKfVtKpkKzpuAeL7Bn5kgTD2kZUMAem7QPzeXy7tNEnEApJb3xiJTjufEqzMn34rRGVZQ5LTkN5hqQxUw",
  "key18": "59P24YoLsAQjHR3UsFf6zRiRoa6jyXRUqiZotiRw9JzKhSfmnpgzEttD8Fq2EWJHEUEXPrsRv7bd7S8GsvcWghJM",
  "key19": "4p2kywNNtHQPiXmEDJqRp42kWAegYjfEmvWdv6FUN9hBqtSKKwukeiGPMk3iB2Vbh6EVMCEXykZxWQjBMQZEb37v",
  "key20": "3Fqyy1uKsbs3k5X52A9FKybtS9eF576J2QCUjtCwBrjgT6mZ8anr398eP21nzorsG2n27UUvG723tfMy1monMPdg",
  "key21": "2s92xWjMiLrqakRB5pvMkMnKgNGxJGuwqntuEVZuYW9P8X5q55kN9kY4JKTsNMPetr8FCcJuLTdks74JFSuDH229",
  "key22": "5LA5FEqSZWuvuUAaDf5a5KfX58EVP9KMeBkDML5UxkWTKuEmVyfAM7TvovCv9XTxAdsjjQt6CbYWXnv6hjm8WCVc",
  "key23": "qQyLxVyjKLhwWgxmLq21Umr5K3C6bn6ENVXmHPSTU5aFsh9nD5wwpbi2mEZLczKULadxGLpHrysd4ayX7nEYt7b",
  "key24": "2j2wf5PpAdZpuXRa6SaC4cKTr6QXtDUUZCEpY1mReiepXBpY2SSruFGLXmbFmnCJeopbsZmGrjBpUXnW65fe8HrL",
  "key25": "3d8sPuxQPm8iLfYEBGy1eGG8ySF1uKNcgGa3TDgSP6Z4Gsov17xhmTUpCvqiT6gRYndmFqdvF9kkqGYdDKZpVgJd",
  "key26": "4v4pnThbWpoezGQKVtk7uUE2MuXDMFx91YCwSJrrhosT2qNmw5uojcTjaM3LetSJ6X52f7UEMgEdi6DQyTbJ3mzx",
  "key27": "2PtKnCyuQANdqZvCp1wAQJuzuo3wHd37Sza6r95Vz3jp2zPoDytgnmFXjMPDL9nWsnqSYdfdgPuAFCkL7HEC8bWz",
  "key28": "4w8t7ui5MYzodUSk6JX4Nw1tbQwY47EK6GoZpbcLojm3WfLuGxxqvTZjKScWK5gW1TUfZeFd3F741eKyeVnj9Wu8",
  "key29": "4vo3Ew1e1UwuAKTewWHC96YoKCZNJ3rKUWm68Ty8V2jd1zv1kTXRPxGbnLeyGAgfVKxgwYG3qTpD7QAiWbgYS6qt",
  "key30": "5JqKErB1j8T2tAZudUvbrz9fqsReqvCpE4tdtL23Wa2vSNi3XN7fVVCtGH4GtZJuY9B6BjLhB2A2AuszLT4XaYAL",
  "key31": "3ByoAmBNTGMm6DKhjc8zmeqkcxADZrHxuFpA9uCVko5NBKU653x5nBhkciAjZrkYUVBNNoL77VhbfPEDJBLjp1k",
  "key32": "3nyxs3CD7Hqc53ou5sxzQmxXzKhVY92um9bu7YtqvMvijzV1S82BJQjkzczmSuLyciuqKXcYYAkhbRJF2shkLAA8",
  "key33": "5bYbeZxouRiE7UnK1c6eCcA8ZcGGw9V7X8GuaVXHLcHUkgh8Z14swBoFhPRdFS5qjhjahoB9HueQYZ3BsBsfC1hw",
  "key34": "2e3J3X683VagQKUf36oejKnTfb2sYrqcooCJXinTgqduXFjQcwGYnn42kFuAFTnFssZvAeNrwTgm5ngitvTovbF1",
  "key35": "4BkboQtyGVPNMbHfEej278cmonahr4N68DuwLeefBMW4PUDivMBhuMvxEvMHdWYWXMRZKnZqJwjtn4BXb9zYQhX5",
  "key36": "3aVEMPkB1Ko5oGXdQatdSfa9jLExSc9vYwyT3LhaFhEUfL56wbF4yr3NhpZMd3cBoDqCW42p5M9d8396KMwYTQkz"
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
