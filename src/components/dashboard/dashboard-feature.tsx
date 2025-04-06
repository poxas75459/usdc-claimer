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
    "29hoMmGhePwToUoL4zocEvtqeUDvreZTAjnXCQTX2nL8wwQhEK2grgrnvbkLznYeSFgX89YwL5KXunQ3pN3Ty7Vm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NfKGbLnoaDmQi3zsVYZSgEUP1W2gsC6TG5vr7TAVRvgCXg8cJuVRdNc2WDgGaK8h9qyajT49gBxXwXXr2U4t9au",
  "key1": "64AkW5ADqpxurXziCFCzcvPBFoUGm6qZnqNmPfxoG81Cyv3Bgmm98iP1w8wzoP5sEMbQ6DctDeSyZAmKH7KNRCBN",
  "key2": "25zbXnGqsMfN3asjQim1iweaD8HsojkUQJmvzieKnmho3b8i7sG79vpVkw3HohF9p92uqrmy45gV3cuVY7PwETok",
  "key3": "4QMjRVCnZqggtaduEdJCF92kyR3ZTr7vRC122jaFV6Z6V2fvnuSLbN5T8RLK3y9X54AKFc1gcfUU8WKUbpuTddkP",
  "key4": "3jkH1r2wGRDBw2y94r3Pd1trPZXqD45pP8yUh6RKFrsP3yWAtTKvbdGRxWEYdW7PT8YfWghmHr2zZDPkr28xbyht",
  "key5": "2vjQranABahkoCNLWAwQsXSPNhXpTARAeVd6fmXRLArMWzSx5aiGfPfmRrgW5MTRu9YnUgVkX56TeS5nbkAVshFB",
  "key6": "27e4nm1bZS8pX7M9bPZ2HqDn9pRaCJ48euk7aBqHonDKS6qyHXx6ETTkuPuNaHY3Yvx3j9RXVUMGYLyy3aZRUy9y",
  "key7": "JdNugT4RurZG6xxuQ2uwL8bmeF7rHy1z223msP9jLmPkaEe6tEedzYWncc9tTd6hZKhiL5CjGECMpJN7adjHPPE",
  "key8": "2JZXmoFVv1YCogpknYsUizeqMLq2XQyW7MNGaExGzy5a1mVYhzXFYBvBAejeZJsQTmZu4vaErTR1YX4kDd34RWcj",
  "key9": "PYwYXqm5S3Zm6qQJsgRXESUYG5x2Do6DcZbxSbsVKYH6Kk3PJfoD7jhBnz4cu783WsxYmRfx3NDL7bY9kebYGmn",
  "key10": "K4L7p14bSfNGodkcTkJY8m2km5o31keg1CiDM2pQt1HouAveJyZjtxdKxFRw6KVMxtgUbbmnZutpCud78ZVyvNy",
  "key11": "5iP8myVrqaU52VB8c7P54WyE5Hy8Gme2tVRHr9vptWBrq6ecdgohgkLn9zQ635fdXiQYHWXv58afm7AXG7fyKFyX",
  "key12": "4zWPLpYDRhbMK62M5zwYP6aXrzDYguwg5giaaF3FJAB75W5Khn7TbHRAWfBStxkQo1jAbyZDBZaKtQgrDJGLhPch",
  "key13": "2nSDkfS56NTKkKTXWt4ps3aGasYxJFkhaju7SiQLLtjbK7fXSjKqEb7P3CN1HFfmtxjjsnDN7QCQ37ueUcGsM9aa",
  "key14": "t3nLUZMDaT9zT4n7ub1ZHCCPYqjXgv7wQ2orH1PJMGtKzbd72EoKFSYTR9RqiBqmvWQZ81WpEsrzNaZ4vRQ8t6m",
  "key15": "4XxFFHXTDSpHkZDpqNiE2NR3HzMP1K7XgjnQSLuUWYTtHWYdJc81odLYCpM7xSU8PHvDF8YXY8QjyyMvfSYuS2m8",
  "key16": "uUMuBzD8BmVeHggSZG75KKZ6rTyY6fG4EzwPrzPsmV2wPvfUu6RRV8SDMJELyxbbk83BjC5RJAQxJ4viE8ozrCc",
  "key17": "4qRkhBFQL87f4bNmLT3BDaPN4HQGHVf1JSb2sxFTSVHits7Bd5trjzdmaLqN7nz4aWgAKoHUqD4aW8EV9DGH4nKV",
  "key18": "4cFNpgcp96vfLEumDwKmKWDUoYS4AHZverzvjmtZXBvAEV4c8C5gqn4ec26KeDBu9Ho1Hnt1npKciej2rBDrqFdB",
  "key19": "FjXrvF7v9hVyhXUjAtHiBJN139HjaeATSaKtfPdZmMb9iLaEzanm5JjQYkzDaeLtnPaYN2Dh54ujTMApoAuR92R",
  "key20": "3a4QJ8NaodHgqp7fXxiRnp1R4junQqcBic5W6yfAwAC8QUqxwbshxEVT1iE7VC5vX7tzR6UTrtC55A7Ecw7BbHik",
  "key21": "5Bc54iv5DNAze5bLY8UJw4fSs5beQn8mJdpmGu6aptU6hmKu1wmzwwRCgwWy6db7Uu3aXLRKhAgzhpv6zG7FcQeK",
  "key22": "4DT7X2ubpyLJYpZLHsGTjgEcgfNAkhbvvksRo4cDRfP2eozsD49GafiMNSV9oH2Dnekj7rz3rxaQMitujFmRSykf",
  "key23": "4LcCNwyhrU6f9fHUTaAyRGUYKyMLxGHKndtnziFRsDjJ69BPzBVKVHthJgvDp4DvtpZTCrzvbxPB7arqWYetm9gw",
  "key24": "4ADLyRMEzzuB1qgiUJ8PbF6671KV8F19bYsnooZXy4T9Z4bq1W4MmeRMcqKbW5PWfadxWmZbfEjEqVx5vHJshDSx"
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
