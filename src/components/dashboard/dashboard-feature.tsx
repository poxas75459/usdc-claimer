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
    "5ZBihF5n5fBh495qTwyV6Qx1SoYTcRGsSbx3nHZcBEA2mq4QLFiQBLQZNAJP459sXcuViyAcuTFMeYwSfXXBj8h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CVofCanPxCkTFkGDSmnzNfhbPb4WLdXCAXq94VW6j48o2fU76k6h81dMNNnMmnTKowhm9mE5s9h2UkxqtdLrLsL",
  "key1": "4PWnB92dEH6bgWPD1yPAetNwqjGy52mNJpTruAQ8vtVdgZ7YRBRprX1PUyQoaFDXQjEhjyAaJG4zQaUeUarYHbD4",
  "key2": "4146YX9KNRqU8CMEDmtgHFBCDJ3MCjNGMJmCEbiF2eMYDGV4H9XsQKLMhfLh1KToyAphYRhnjjZubnuneFoQc99y",
  "key3": "3FNu2y4idqP5JjDX71fybqHJ57vjzVHvy6idWcYeqvF2cT4UwoBhFJ1Pmvbdtcwubsoqiu9xfBW2zUqt6R7Fpc8f",
  "key4": "5qkCkNxayQjrkMsZbjvhBHaa98Hp126RziiyiLvVELyLLy86ZVcTxwJs3zwRo9E9g8pFzuFYeUxxPVwp5jrueWGv",
  "key5": "5rud2qb4aLXxGWUTasqhnpSJnybiewWN1s1bx3epCF657sQuPjrSkWYKjyhkNtW1BAYJXza5s73QEEEAYzCFLLgT",
  "key6": "WsUTkCT9z2p7FXs27behqsGGgQLrt2xwD68bb47R5DoanbV5FKyr3ZMskNTaHnk6r5dVGYgzA5wHLGHGHn66imu",
  "key7": "3RxgB5h2KHXkCtYM1KAiT7Noji2MvSUCkQ8xVFjiZ7kQKbwCHJLeZuP5G1gyu8tAWdxqsC9NJazNUDdLi9uxbEb5",
  "key8": "4bmEzToCtEXyngsuWt8YvShb2bGkgLMWJs4fkzRpPTXhWyCGGURvswYnQsrujpynHnHtwGsdNN57tHTVZm8GLCQq",
  "key9": "5VzWj77yPaH3ryHaHJkrHLwcLdnLHwQVobjQ6UMvpHdyf4JYGDnD53WkEQxghWqMgT7NaXJV6TDZgaCdLUnywpGU",
  "key10": "2D9GnLVKf2KdfXT8AoBh5pd8Qq2DYuG4DaMdR4kNL9Ma2mW6XGkNqfwaXMgFRm24qzdwBM8CwxmQd3PZkKK1qe7K",
  "key11": "PcJhpw3ciHLhEce8b4Na9inzHd772esTPnkF5kfFAD3surTJLVaTWNCmDoBmDGhtMJKdKTiCF9PtGYUNe8wMyWy",
  "key12": "2zV1kPKeXSAjro7PD5aFp1Q1b98SmbW9akucYanQbDemXtuMGfQ4hoyJ5c3qFYrudKtasHrhSLA2ehKm5xD5J5En",
  "key13": "3sMN7EE79s5Fz2mMT24iYgZNQMMZxDY4hGHDDtfWAzdaJh1grbiFvDxap9j3jiMfb9DnUkzDsZ9gCuWuouJZYCxt",
  "key14": "3PX5KuJYPVY15VzEAsC5DbXT7zz11QEvunbvcsjUXHPFtiQMFkUz486uxP1oKHGw8UzcWoJGVsvEecHaPbRZ7Lt1",
  "key15": "44XeSD7Rwhidwbgzyr27be6dyQoAAPgUQBqA8Bbb3reXcr4FBSox7txmPXQmQryBC9WvekzDATRce5GsEreiJWz5",
  "key16": "3pG1TfJTYkuY3C9iscs4N6rGsu4sPmSh58JHH3vtEBAezCQMqzW9D3AegC1huRhDt7LcmLFm8Jb2wenvAbfJmvSL",
  "key17": "4wACsZDLNBfT4caE3WuHAogtrQbGHHkmgVkF9N5DE27dEhszkguZ46C1JJiKJ8Q4xBFQtxRShF2KRKMZUPkQodLt",
  "key18": "2uuJn3ZYbsYmJ9ps17TDWRbbeCFkCLuuMwd1RGjKxsrZfoFBDy3DFaF4HeWJxTENxzmte9taQ599xvYkN3hdbsAd",
  "key19": "2xiouBqbSYHVLSz4XD7tTvRivjjuEv8F5V4HyFinF1ZjApoXtGADnMtqaq2YGwecjnGgYLLBN562eAp9DA6xghfh",
  "key20": "3KeAHAXTJxzVUDCELErojmfD7N1f7pPCLbY4dUfuR5mVnoYr63jxi3FsW1ZT6Dg3ASCnu3JSgLneN32kBMt7YMng",
  "key21": "2ZaJqWqehigSZsxM9Ricdy86bWGX71iAkFGaHD1A9HtVWvjrJsRNVBpubnMMNX4e5atJ48VdP6aSDUxH3aowzdBw",
  "key22": "WPAar4V2UG3i6gdi5xqHLX5jPokhAvxqnrzJfHCoSEpENVAFze3hz3hrrsQghRmwieVaeFWHCFvej78CpVdGyAc",
  "key23": "2rmX1AEVHKbZDHtQeRXKcivpUiAHfh7HAXfMCnjgDsse6X7CL2tokeTU9JgsbR4eefcJ795TPcgw8y86qsqGgEzq",
  "key24": "Z4kVieri6VmRwQYG41SoEL2P1VDs8XACNKMjQprYkc8PAwzTfFtGUkbPpTn6BJjkRg9tLX3Cg9Nh5HBYzeRZxK3"
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
