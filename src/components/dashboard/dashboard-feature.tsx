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
    "2KtWdoZBrpuHQYjds4d1HxxBFk1yvcHR4wNfSLc855T469eCdQK6vrN8kynikUwN4siXsgvcwpByErfpfWwzD85X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMwU7DNbLLizCowWajMttTwPZSjKqqBEP8B9aAnrzEyNKRk59Saatc4SoFymAANiTxcvtc1yLVBp27cAjhmy2zZ",
  "key1": "CR7nAPiJzPVfwNXhgFtGfxDf5uHHGQQpFpPQoHkpP7wDqT1BR1pi9X3LDeLqHSb83io4bsxniob6jyn2FJ5NBzV",
  "key2": "41zWYzrzwuwLwFJpZVGJrL3Lrwhczk6k84HVjiCi7JdKaq31RLpn83bXCmCrcEbZDu8hXq2f4WaP14WsZTxvF6oA",
  "key3": "4p8e8wRm2yRK9PdYryf21QdrHX9e9bHQhZzqnh7g3PawicsZsjdtWGoVTQMC2cdY8GcWbdooF2FJJG3wsvdhNui4",
  "key4": "2KACAeUVCLaPSWoPUTx4toE983CTDbsYMPeL4Me3zEd7rS3ndQdW2CvFdiiZaxWvtJQHBDGB1FWNxghJ3iwjXAZc",
  "key5": "2nyk83LarY6kqeBHaTXVJMSXGErw2YJySkLCAwXsDdBh9dvQNJg2SHPxNGbgYAKVPc9pQW6NuCdeL49eEkBp1ab2",
  "key6": "3pVH7PtWVApFWmGpBxPUmikmRGsQtgcxUEbX6VaGHT6PgBPUxWJSVFqjRfMfEfSmJrogcMaQRCZb2wsRARGgZr1f",
  "key7": "21CsATP3GciCpsfNLbTdzNfmbWNTwRsRc7hMoh9EQExhHYtTntat3gF21mhgMNnubKkr29HpmGmKCn53D2yKUXUU",
  "key8": "27tTHfZzhFt1Ainhq9tTryE64Exg8txHBq7e9Qn8gjU3cdBRs693Q5Xtq8Bdfvz6RAPM8xf9qNDzm7HSddbtJKKF",
  "key9": "4MaFNgrvfBjxbzCsrajwZLA6nQaFPAWVicYtWnxQp4oGbDsCiCjmXGQFBHuZhnevDrzdNZ6xwBq5MFEnzLdEaiGA",
  "key10": "4K1nUSD7Qa4VbVJW7oiU9c6KoYVcMQbSriPnRnpt92zDMYr9fPYGBrygezCdMXozUL56hwPhiDVQ2tSEznsxHPhv",
  "key11": "DBcjseTcL1TNTtshAig4s5RdmMo6jQMsCWc3BGpSvxUqyyGsTmK1Z4Sg1jW4uumgaNYtjdUZ1qXBkcCxjmxdAJv",
  "key12": "5pnNTmF4ir1CvysHZdnegYB83xdub4gtcQMWYxv4QNcXSLepFd3xGdXASvRRkuqGWLyRoMgFjjNvckPFfPchTz7b",
  "key13": "46gp5sWRx6RZEaSikGoNYWTkebQe7551xp8o9ZeeUdqFvmPPcnPGFG4pS6Cy8mPHLARcwEsiEhJnkpcky5u5LZS2",
  "key14": "2m5QukaACGgqKc8mNEE7q8hRU28Z3D4ZLJ8ptf8D1GHaLssJb8qttn9rwWZSqiukqEU82tU5yf4F4LHzmkLmbeGP",
  "key15": "csn4fbicvuMnZVEESCjU5Et47qpUnmSVwfahzXLyq7z4cynQuNCzpKT1pFq9bd3ojJkcQgRTfWKL6YCr6pnvpRp",
  "key16": "sdENV6sG2RpQRkkmzknXneR4Xa81UgxuVpW9FPBZHacdhypMD2ixbGkDYz2RNK83xFaxFc2UT4yq6Q1KErpTNuv",
  "key17": "28cn5V92xkPRXJgH3GCTAPpY73iuFav4gFE3GKmVvX5XWhCMDkntXwJA8GLCHfrTKxqdr6ey3ctEnVD5YkW4bDWc",
  "key18": "3y4WMwdDrHg4gy4iXrd8xkNWXcJ2HSSF8m4eKGukA6jcuBhWoFmHtHJEP8mrRcorFQKe4JjnbjE1pyvXifcQdYVY",
  "key19": "59LBHeF5LuTDSvWdZiDpn5nE4HCchJyZBe4P6UNZ7NH5Sh17zfTrgZeKXoEdXD5dN3Lt2rT2KFNQ6XwGcb3EULrK",
  "key20": "4uLT4WVdrRXg2bKzfAqAQGy2bqZuGJiqn6KGHjGx2tfH4zW5ob2yT8YCbWpoKpeDp2oEhSnMaqDQZ6MERQJuJsZV",
  "key21": "eRhr2H8GixKgeCWWp8UepZqcRyAdym9oxamUmDV9zM2SMUhdHFn5tT928Jh72rdKBvFZHNUn4nWNTUzJBRkK2Cx",
  "key22": "4NrWAaMR9H487ReKooSJhrT9Dn9jfDEvNzYQDms6Sh9DkG78QEVFcEEgRxRHedztf3jtDYhrS55Tz1ysVH6j9se1",
  "key23": "3mnEAmVpxwMMxiBiZ9uxM4HtgjhYAyiv2yBKuxwJZ4P1zbHN7K9ZGGVsriPZJ4faoQaBWAZqThLnGWiq3tR7wV4D",
  "key24": "4Wpcku9LZQCKyvdbrXeceHbvJrfN2QAFdseJ4amb3RLCtdiYrcTXE5yZLWYnJtXA3DQ4CwfFnSGPeGEWjTGWzuEQ",
  "key25": "JNm7G4ohdQwjdZCUxeNvt4dofAUmNjrTreFVGFTv4Lhn7U27JaoqV4aEk3mc9DeWghToox4YUYa1gWVExpZVR2E",
  "key26": "2ggwZZxhiASY4q2X5JxhYpoUefhZTYBMJi9UVyMZYZqX5qxG4e7yKynTUFEb7Bi2mSc2DV8kHNCosb5nrWkyK3T6",
  "key27": "gRXiYDyLAvjNLVhcPVVGr4NFLZQFNSrgLFj2LBzxxDQaLYJcfrmpvGpgMhuutybjdXh2V3C5BjeQ7rNg1kaQ8X5",
  "key28": "3GY1s1KYtoVz8gjAciJZykVNFtrXYY6PKqg5GMooZvtLQfhNBCf6ncMa1qfP17yjuho6ZG6SGcwT6S7hr2gBUDtU",
  "key29": "3SbyFcjzSWQ9J24mpvKkEkoY4yiW2EdS6oBLmyhb39ZXfeoU4KpvYnQRnZSbvkczwhc5v32oRVjuz2rzGDjtJJXk",
  "key30": "2Wx5HfnGLQN2GHGhV37nfJFZCFUsunrXE8XVe5NNBpwZjRsR2vZsyCPUDDiGEBLdtabbeyjW8vaPMrpecEwffspp",
  "key31": "3TC5x2PBouShRp5SzB8scYYFdrvny5f3jtNBXf8YqwSBLDvS5o9DwVFUZV7gCu7NN7cGzrz4bHK26vng2tfkCcBp",
  "key32": "CpZtXXB4vfxkZRy8FF9WQMpkhH55ggSFLzcN8skNjaEbr3PoJHPvKNS18JHKtWkxvaCvCdNMHpRRpHXNySfLZbb"
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
