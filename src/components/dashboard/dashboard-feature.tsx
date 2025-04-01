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
    "2JjnGrNyZ8nkVizwwEVVzrBBwYeodpmvrwcPCFjuPgE8EgSBbaeKhsXjED3aMqwZRcwiLFtaasjrBHfFQBBtdJ32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kUyYtyQLDgJa31VekADUumhg6gDQjE55NtrJxfyJdvmhrLefYM1fd2zmiRLUD9WJKRvFsWF2jYci6355Aoqu5Fq",
  "key1": "fwLwSXQ9J4tExrLN7jz9w9RXtEkFSBw42Es7BJpxK5WoDBhA1pBUara7cb9NSawmzmqrsENZ9zMWfgZTN7uqWnC",
  "key2": "5aAi9zcyLRAAVoPuq4w4cTEd4NQaBF9W9i9ZCSVuiYG7CqPkFTW3xnmA45vw9yUC6Egc2PyLUQCoViLkLaJfm4gg",
  "key3": "2peVu9FuC5Z87inW4VrzgnAXDQxscowaMaZsu3F6pYJ9FLQV1Gk7SJcYPhgukeeYhu6Tc8JGHHKyYmzZXEqPNSRY",
  "key4": "5qSJERf6HJZDyyBbwU2B67ykq4YF5HcFXWBMHv8xc2xJWXR43kjDG7PtdruCsCF48MtSkJNapH3bELRCPD1Wb3M2",
  "key5": "2pjJ3xnZymg26bWetiugz3bSNSdeHWCZtSjWz3CkgcTZD4gEmVmhLQssrBHV8dFW7Jir6zy7LMruSNn5NpuNL97N",
  "key6": "3zAZTTW5CXAsNcBwBDFbcr4UwMbPstGPtvy9HE6VLT5VAs9yjL3tHGsHRe4R9EBVKoRRkUsJ5n7vj3R6aGALgggs",
  "key7": "3CiTu2SgrVx2k8vNYmSzBTexUKH4h4Z8cTbv7WHYzarQHAmvhQurUE4fjp8fUaMiQkk14biJ2LNGajyS2w5Nek9S",
  "key8": "5yF6nkfZ6yHyJhZ1cJDPGKRKKxVJGziKrz2LFirdph9pjeUQgkZrjj6KdGY7N74MierEMoxvWvHsXhVbCBvL35No",
  "key9": "5KLssXFofFRj483Hijz1fN3VDeRzhv3AarcM2kQQS94JCbFDxSHpDNWsZjsuyzgUksdYtKZPbNg8FP3i2FViZW8S",
  "key10": "LqPHhCTrmGyGEyraasZdPJZLEmFSF21ZUXxGKFbqGsuLskfAnXTsUbJtsJDeujn6nFYXEzCX16ufSbBemwMXCeh",
  "key11": "4H5X2JgiyzXqRR7g7GdV8UHTx8fqyoPkTyb9d32JdckCuDLzA2vopNbiCnx3HUKmT18DhjeL9oCrheLH3Jnmkh9V",
  "key12": "23dCbQ5YW53DHhPujfxTpXkvb2cWnVt6gKnGnumkaMuaaJmvUwT3fnm58MSynsWeH9rsBLjgKCSNsctjpGbJRUFb",
  "key13": "JDMeeVV3nYz78LU6trA8uAM6MDrGavig8E2ssVtcHXm1EC7B98294mW8MPtyZhzmzrXwE6Gzn2C1reLYg2jtP9S",
  "key14": "8JDgA36aGkxLMczi9vg2RetZUdi4PhNuVoXBvKKKkDAp6aAtFyuBzF9WLQy4DqDRafyAb43PA7FfbunfMApwLvi",
  "key15": "55rgpPZqj5J5wpBFPsm8rZdvRsfG8A6F839hoTJhs3xPmc8S3qk9qUhXuSjA4JKgWwdkJ5UKTHUJ1LwuBB8wsJPm",
  "key16": "3cNd3v4DUB5F8xcw4u5wyzBFiRE9chJGkbZA744J89WY1n8ZXiHy6HSH9FTEfdZamU7QF1wzrNeDuhdf3ZX8ia8P",
  "key17": "Nq8QTW5HJYtxd517G7tgMpTZKNR837geEtumwSSuuDTdHW4H8oX6xgHSW2Zxjqs37BiZKLPYK5pB4jqy43xZPiB",
  "key18": "48Dogde5WNmLVoTC8wdYSRgMxeq7TdzGDew5yUF3q1UuYHFAhfAXKkFS9FtXnbwVrg4iuMHhjBmvCPpsZgUpk8xm",
  "key19": "55TkzaMAvsS1xVLw9mHwEeL1pdoqt4m1oCwVkS1RWWtBmF3C423Ci3GEwFd3MypzuVwVk6K1yLusue4jkWPfKLjT",
  "key20": "5tNN1AVUvPbkfnPLwqtzxSNZhDiy6xdc3HTqDuaWnMkkbDuuauEwdJPJoUdo6smkGrtFmDGucD4WZAXcKDMVzmVg",
  "key21": "JhEFfQGpY2wh8qkdJK43kkS7iVPpF9fuRuyGb3q9EnJrHGjA2H6TgpCxJYL3mC5u9efVtKzebBTaAZPfzjwbuRV",
  "key22": "14Y5Hqn1VczN3EWyRTCANJAR1Y2iHLf77cDjCTkoZ7ZDsTSzsQ91GPJT4CkTeWCA1Q6SeEy1vjEGNeFnNn6k3Pi",
  "key23": "2LDRN9Lnz2YtvFebCBkzpY2kxjgokgrNpnPL6QyEjmcz5HnK9gushytuohxoTpSTxdRJQZMkiHqF1Es4dEbruHHg",
  "key24": "RDDjmGWfDoqLqZBZt3FuuUmgSAxGnxbz2zgonGT96uE8CBoM8bs6LVvMfWd1hUGmnDouP36UGQRAqqKgamfZpBv",
  "key25": "FKdStwWGHkaqcMGYSqgrscHtq53q1bk1vfSn47khiLP8vzTBUZ75dfgUqLGUj8kvjuKPFTg9RPCJgGwTPSeSYuE",
  "key26": "5vBoFv5sVXBu9jPByFPZUBSvgiRaSEVFdzoDkXEkZmBiYsTNrU6XA2GyRpSigCKYB8Z72iizUeBtJBrvLjcq1tmE",
  "key27": "3b2GpXZ613YhimtKc6YFg8txAb7X9e5sFpVLQGgzDUKeMVPvqJHEszZ5JsB6U8zfQdXAsaEEe8niPmmq5DAuS1B",
  "key28": "5tQcJjuZfbrdUR9yi43StentBXSKhWBQW46x4SWiHpcsuoo91rXFXgX9TTmuFMcyXDrjFWUVAQ6LiNz82VzyUx2S",
  "key29": "5rV1gKRnLoRKf45SJ8nnDrmD874S2qAzKmLqRb8WudvCdER6H8i39xmoNZoJRsYsYft4drViCKrA1MEyu5brCaP",
  "key30": "RYWz3TZJW3MJpYfCzpFwheG96BW3odJhV658QQwjpYBkP9DxNXvpEgz8SPwNyDCXnjRTLrXuGzvTFAsHmZeAofY",
  "key31": "2Ly3u4wqx4v7yzTyzPVXJJvQ7SLCnaXGo8fCiptEg6DigwmpvNRrgK6nZSCfZcwRZ4coBUp4GTEH3UvGAeSTANkG",
  "key32": "2aYVH5vGFEWX6cJ2t3XzNG8AKbDV5MYREjnQXQsxLyvSkHbAFVXVcMkGxqPc6kPvcU2Lia3ZPE1VajLH1NfvwTwg",
  "key33": "5PWzQogY5coByVMya29VxEk4HXofejDhMenVA8MRW4v2uWb4aLKDC3PL19Ppfm3qcGdc6APAfKDaRWqsPcqDrKi5",
  "key34": "5KiEmNULvnpNPYnZ4beReW67Wnrkqn2e2afjBGRJKwuAccKTQ9VsgJe4d6jW5p6PzDdMHrfNcLpHvaY3L6miSMH6",
  "key35": "uzQoz6t6piW6MUaftSYnY9VMDkqYwHZvqG4LNA4aRyLSUkkK5fUJjGG2x7a2RgKjEKn7BYUCubC1FWfhNwNVwYP",
  "key36": "uE2pnSduGQk3WQB8FAJd96z8ayaDBL6cJ5VVHxqggmjL7wgTHSvss8DYjh4ubB2b7YworXhdp4Rqxh5QXwtmv7c",
  "key37": "4BhF7Wfgtzbf5FVN1QeztdYjqmt67MLwrsv7noTb7mgWJ1MHuLYY7rNjpG6wxyfebpEtt9pkqYZ1ZcSNJbmi5SAJ",
  "key38": "2YNRpKYKKpezkrPoo4wqydrkqkfG6TNHqR6Nffg4cPMp4NBNijAU7xJRpoUN9rJF4uJmW1PqDh4taV6A8H89nrVZ"
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
