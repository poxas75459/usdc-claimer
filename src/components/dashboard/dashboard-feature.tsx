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
    "2H3n5Cu2GzAPeQZtoxujgkc4REAc588ATysgTkT826HMdBKcbLQEQBLr6VFBm7hJquNRRyJ8UsV7uR77vckZBPEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVYjLTF4mcjaEMiFDitK7f4ma2L4mkxeNnUxaSXuvHB4fP94jDyWJ2rS4qJZ6ihkEY4CaJpKzHRgXBErpvaw6Gu",
  "key1": "5TfYfRNgZAtLZ86jQreMvkucsJhG6UuGrZGWovGYDXCQEGrkKfbb317MackLBXJ9jGV6kvKH4SHHPCSqevdGRQNu",
  "key2": "3whccqNAyW2nBpH3MxB1ygSsQ4U4CYJJXv4mb8fhuHNjQCunXBtvfKrHoNAi7gMWip8G9ZRoqwSzfr55W1NDQuZv",
  "key3": "3i4e27j4Jpe2aBzwvRdsbm8bZ4dEx7ZpUPMoh9EYv1w4AZLRRtjTpWt9cdMMCEBSUQzr3LvnMxedNLRoj9dCXrkA",
  "key4": "21hBUTtxmfybrZ51vbeQcnotkLNsm4FVyWzycXEAMDXkTvwZiVD4LJ4V6JKu8HwKAFg7KpxecZEQNcNM66s8fbaM",
  "key5": "3FcskkpkRBY6SgmW1cVvsRxhhmD5FeH4CafVHVzLFxVQv7djc93PbA8Kp7w8paor9MoAmzA2amD5K6ynaHjXrkRk",
  "key6": "5Q6CdXM6aKRUEy4xvXYQ4Esg2TVMtuQJiDxdUF3Cpj4UMZwiKxfTrgGRxJb52YoGSiCcs273hWiqYZS9MsiKJetR",
  "key7": "2Lp4d6bAd6WeHaSKKXeX85fozWhXACNjS3sKFxBxAFVSeZBzvTSB2Bnmx6N136mYkF1ikp3ta9phEuJCipGDY6Sf",
  "key8": "5QwUWsEVXEEiGCKuT1u9XYRvSdXo82quo1fW943wn222Yi2nmFweeFAVRa2zb1gnMpMvCwrQr1aEk5UPDBydBHiv",
  "key9": "2XEyHQwbvPXZizoDmP4wLaZYPcTFo4jAmo5EiQNoxYNEbzyZXXybPm1EdordHzbcwUz3gs6GC5mNbNa9Y8wjv3Zt",
  "key10": "Z5RzQ8VvvLZZvpNHEphF7sSHfpudWBQGomHC5prTbvJR9FBE5X54pQcQpVCQdERgXhfbpxMpmbrq8W16R4dJdTj",
  "key11": "4ggYQVRGL194NND99K9tSsQKKoaznmwuaVqwMA8f5ytbeA3PxvLb7Pbsdeqi9f6gE78tWYVJzkuc7yjsnGdkhNQe",
  "key12": "5G3Xtn9tMU1DgW8DtafLBEZHJvFoCa2FVhuKqPgc7qHVJtGyLyKnotFp3RNFzcAe6D6ofvYN5fA6oDpAv8MXeocA",
  "key13": "55S1TzJtvqz8CQ2mSXdjtHVi4GTi31hNRv3YVWszasx8UL5je1zxJcWeEb19UzbBoM5sgivCGGKGj1r6542AvyqX",
  "key14": "4pYpHbpZJM3cNsaDsNnGfCfzb4qHw6PqJ9rgjYmGSfozHxKnuskL3RZQq14v9HsvkmiHBv5MHzC4MQ5uw8dkn73D",
  "key15": "5L43MdHhZksYhURAC6TZ49PkvyEhqqdtajau8UpUT7w4AsMbBj2m8cVmAU55GYs57D54WqQTPMzJPNqkogXFXRWo",
  "key16": "2yiNis16KdfujDcN6if7qzW7dccUkbFyH35AQjcX8DRYUenH1gqeBHpECGEoPgDxMNBg9fSaCeWmXX1GtSDD85vx",
  "key17": "5suZpj6bB5LYyZPgmLnzSJZ4wnVDPmJ2Wn5rdZRn34rpw9CTifHjRriTZSdMD93615Vhnb9FFxtchXF1ZgS6zYYw",
  "key18": "3KooNBJySXCDfadUGSWTuw7VehEtZgASGETdDmiiwWLsny7yjNb4FFgt4r5Bhebdrrjwu1zZBL7cpBAA8u22533j",
  "key19": "5vDYPLTwwwAaCs2HpkHi8BHzeVTfJ2iAdxsLbSvPxccNgUebHXFu4nxdaEuiXj5yzNVrgYGgzEWRG9ew73aBJTAg",
  "key20": "37b4XgduneQsNUDAxrdt4pHRUH5fxRxCbPGrxWeEXVnkXVfYyNtcqgrKXB1sjo3bQSF71UJrhdScs3mJu86TwDvJ",
  "key21": "5hLVu3XT2sboKq7wB9QThFR5ipmUYVwe6t5WdWF4EYhB2aU6S2pKkcNuzU7WojtHm5bU1bfCgWXwX8JjdpVzWUk9",
  "key22": "2LyEaH1P8pCTEwdPRBgm6nxv988WYCwVSMY4xv3aZ3RcXiLUNZqp2Arc1gpkQLRjugQGpQYAWjjmvoy9tSvKbuRL",
  "key23": "ZxAPnz5xcMvEws7MLfxdfgPBiY3MwJZSnbQj8tApgcJ2ZSPGg2D5JXQKPok2ukGkerXUnd8M8sFZNANqfHADZVw",
  "key24": "4trbVMfvy5ifEEsDon6yqZBwjfFsseL2krdJLtcDsv2TqeKzo2Qy1kecRLKcudjFGKVWHzrLe5f8FdqZBj5T22nJ",
  "key25": "wCy8fwzwc4Uk5GVEYaogARKNfGtUnoUyh9mvgqL4qBXDdg9HdDJ7h3e7CjtE6TfKZiDSVN5hnvgmYyUi5fx5uvM",
  "key26": "5rtEWixvrMTVRn6kVEqHceyv8XnVesH74NqDEq1y4FtB6vExYKLVKVWz1CwGFNNRsKEMUuJt71Ly9fYTSumWpHXj",
  "key27": "5zsWkt5GcAL1CyagWKjUwrp1deMGAuBbyRKReGtU5YhxSBsFKWhVcm5Yo7Fgu1jaaQ1V52Kv4DtNtzzk9oiRdf7w",
  "key28": "tWyNbSn62dtBEfR5uyUyfxtC5RxzeuQ4q2dYvxDKb42YPkvsmLkjiEBNMyMcSk6Rwv3DG1Qo6isTGkEBMjWoDou",
  "key29": "4zcYaJ7m6xZrd8GtKDptD3Dc7v3YEpcx61DyyvaH5vEkXYMaMAeuaFH1STDVDc6Em4Hgjc7erJ9GcboMyDhwAB2d",
  "key30": "2AJNymEAWhTFDqjDe2rp3mFJaXGkQqxJqnreU7cuXg3j3HserDfLs1igpwGsk1yuRSuygVKAojSQYxYEGfzSfdSP",
  "key31": "4CP2buiXf7FD8FRKcrvDywThuWqYSDswUuMofnZfJxdCEX3aGoYnDwtXQkrNtLEzMeDUTx9CziL1ovMcNS6ePzNf",
  "key32": "5BoniMmDXPfbRkWcSuzDJaydsUS9qT8KvptnspCuKPgRAqaE3Q8WqQno4i8zxMoexx9xEKPLFcsYxaBLnQk8ERsy",
  "key33": "DaqJAbTXWLRHgUz2ZAbDe3DpTdr4rxZAcLLSoDHWC7QuFDQoVpStASsn4D12QiRnPF9xtmCeiGx4X8kGHD6xrkG",
  "key34": "2jk5uuREXrEgvxfkgqrGjjQFczChcJB1iuxA3wqzBPrK6MMwmCs2whwgYPYCbZWvcehe86mvEugCcCt1Kz64zado"
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
