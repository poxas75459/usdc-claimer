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
    "61hSoyUoSvz4FvSc427UsBU2VXdF3s4HWy1u5iCoKUBdU4ex7ZGdJHvzy3p6KXtmygL3Ngijwpi1ZD6RRtcd96f1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KEGJYn5ambpjwUhav9XbWd3iUKFsyVxhHVqAhjq585qaXA84HFX6H9XiZDofgMQcExfyZdSwMJNf1akdbFaY4nS",
  "key1": "2oqMzL1NFD733DMa55aBPWNhL52sMfcFRFPg2kun9qZWekTLPo3RzHB4mD7v7KTvAxfarRpVA3eQn298RSh4XHBg",
  "key2": "4Y6Qb3KjFsT9PQDorfPqM6tvPbC5jemJ1g3yJxgUhqN8fDg9dzWNf31E2jzGcgjdKevc7RczFUpfwNGD97F26MMm",
  "key3": "LM6Wj2961jtcNzypoCwCcJan4tvdfHUGeQWzjH5d1UQMsNM9AkCNKAzRRTopNAJBh7DjCJZuRed5zW5UaP5VR3y",
  "key4": "5tqgdWP7yeFAgcLe8bJZKbyaXrWCb8ArAFRiodwAyJ4Pt2qUxoPvKctmX8PY4yUTvv1gcarnfVNcoAd5eqvQiDBh",
  "key5": "svW8mzd93Hn3YsvDNgHhfFs4yeu5Fu5CdDfuBwuao5w7S81UoWCEacxXV386Kf5CsEV1jDGp9djHXa895A6Nc3e",
  "key6": "d1cLVxQgcWVf8H1eQZMPprWo3ui2j7CAPrU8rHdQ6XZYY8EhUqdm4ta6gsJLrktmbFMhcjeK8s6Q6b3dh5abbou",
  "key7": "3bCETLxHEfYNwPHYGP8fW4WFSzvZ5dq8i2Cpcqv9nL5D2LchHcMR4RFw1HqBoyLtfrFdNrJbwszp53VeDHVqdZx",
  "key8": "3w9Ny4DYuBUftWhqEaXEfdaUM8eKU9MqgjwdXq7GbeAkcW1h84CvogaRfMf8uqqHKDZaatQj9k7oa4zXsqwAeVAb",
  "key9": "3uPZmhfQ5oacvccB6yjoDVPbekWsU7NvTnYdxEankzB2obyoqqXyv5iZ8oKBfXH1uzBuvMG9Ho6co9AsB7pQzbPN",
  "key10": "3WVx6NPSGb9po9DJJwWRH4GCCCzqvNc7MaTyfWBDkCk819bGvcEzWrndbikFshvMXrYmicK3z9xgWQy2K9XrmroN",
  "key11": "2cyxDxS2dmg9Qe6MXSkDndRVmFfTT4HoVLsMPRX9e4dneJfvD8EtwyVtjB9z6KN54qT2p26mVbvxSHQ9GYB4c5Kt",
  "key12": "i3om3va6iwrKGrM3UUJmwuxReakXxvk1W4JAg8xVNV44uSbyf3QqGaxUmAdDPLmpWjYjWh7mrw3qhuBYAvgjqxL",
  "key13": "31yVmedd1ETqkzTDyph4wtqVVzr7UEWjQD5CugRMzqpvmSfcbHsP5dvSMWXVCu3yKYC7FwCJRvkrNgq57ajXUCmq",
  "key14": "4Mt7ACLrKoVxjGEX962oLLgTFoqe96xWmtUpMgXC8BDUJHdtthU3hAr4aNTueiMMHKgXZdnQrQqVx4qDgJ5k5NYy",
  "key15": "653m7q42WEeqmM4AUKTMLFBdsCc1ZhqYJjw1jZTMzDNrWSsLAeVHJk89Y8KkQuUYsce5QtZWtev9PJUZvLEBF3bu",
  "key16": "37iEPnxXLC8gn2FFnhdSoKzgc15MXh5mwiiSS22PnpJVJGhzwHYEXhSfirvrYBnDipHpKRevmneFhW1D67QYiode",
  "key17": "4AJuE1cefLEZ5jQ6L6MSRzbXYEr5YnhTFwhcRE4n4WMdhUzMsZQiSy9nfeYkKAP7Ne26tP4p2TmPFPB5mUXEi4yG",
  "key18": "3ajdxVZd5DXNd1MDEiMXis3AwLtNCHCDSWTsrsbPtPMDDr5dvr5Dk2RpH3JaX2CK2qwohTt81GNAGhRj4LQqXFQ",
  "key19": "214YtpRPXBkUJ469qKSVgo8TCHd9rnDoskabDSPyYEcVqzLSKZzK219yaNFkRfwAE1eH9pgvsFXmmdUyBhSr5JPX",
  "key20": "4yBtDe9nWm4t6xBaHQ8hzWxkqmwfKhWAeBko4rgz54LirYLZeNbaQURWmApx9SHuFRGbfjbEXpTAPnxmoPmPsT9C",
  "key21": "LWaWTpkPPjfMZnSKUyYzvSSV5maJs6bDZstnhX3Pyc3jeMYHthE5UUwP7kGWQRgPZw2ty4ywTCexdu9n2Mv2imA",
  "key22": "1wuueKvjvzz2t1qW5zVW1hFBB9ZAFK5Dei4XCM4GNECrdiGcw3BayMLGUgCXvdpbbqcgxVxBYyhYLbyGUZJ5EXd",
  "key23": "67Uapb8STaapvNuB3dMmboSWzvQZE89rC8R5tczcFrW3wZo4QXxLWLSWm9awDzu4tfvAH9AadHCTzSCEvXqK8Sb5",
  "key24": "5m5WStAqzNxF9BPYwCNL3sSCrWQER5Sm61pDZ9ipYn1QXDPi2F4V6rZCmTX2u1PFgtuieVZobvqsRxt6nz5k7q3n",
  "key25": "2qzmmyucAAM3gBw7ieBLbSZVuGzaUU5sbQ7JR8vuQfs4VdZTzJF2FjvfqrhKhPkxBMThXpHeuZvjFSVVMv48cQ9N",
  "key26": "4qD1XqugvFgjRjyp7aVAzJiRSZDY7Co48ywkRZRibCoaw9S4dY6xy4uSzR9YaPZNSnWiCpAsKXn369oogxqMMFp9",
  "key27": "5Ze9Ch75q2xfYYFbedPM4TCXBZCCTYrSzc6a5WEeN2mUCetNenpxiXd1Ysx714jC26TRLHkDFTm4yrGyGvMzfQ4X",
  "key28": "2RdwoGK5TTBPgcNS2UXwszhczzht2asW22nvrC7VS7PUWARjR3xAnsX3VGJAPwVDR3Vp4aDR6uyTZ7ivR2AHJ2qw",
  "key29": "wB6YsMUsAD6UzB3P368ZnrnKUYXD5hZDcKXnZ2SiWnEJuzmthFzBNDyFz9MnbNBrvHDRwK74qxzx3R5fua44Nu8",
  "key30": "3CdGQf7sjcRy82KCveresn4b9kngnCS7xnJgAGeJFQhSBNqLUzUWzPxg6VxxQgcuCKXrWEWDkLNUAgmgs5p3rkT3",
  "key31": "M2mPCTZwc1jPSAV1CvDa8GZndarWmVbDfY8qy1vpYPjRitQbRAwgVLUbQNXEBL73Z6ivEJKQ8s71JYHD5gUSWDk",
  "key32": "J7duT4ZU8vB3c5gR9BXqFNw8YcHJQhxvcVchNvaaN2xDvVLt94JoxeP2GusA3v1y2eYcYy1LgNvDmyrWPYSWXVy",
  "key33": "3oZrzfE3GCmZxb7tGjJrDfthgZUusNvhg3T1YgdbVvYoBucS1fNVAsNPpArGCtebU8YDCKhmYGM7bJ4YeXRg4adB",
  "key34": "2j3uksTD7eV1AGmbovSeHKoPo27Ro4ANgc9nF3hL5XZ3McrFRKcC8aA1EfPTCgo3SyNAttLEzjTUUPbx88KEoAY8",
  "key35": "iW7GiztVpNaREgxvVvu5HRtvqUbQyiADENQXaaG1y4AEzbBvFhtmnSbfS9zGQy6u1BnN1iahZKGGG5NaGhnsJHA",
  "key36": "3xrPxAYgoyPgMDti6gFTjXczC5EVw1r2hpMSWVFbYSGurg4XaxEqwfeUTEJuQw8F8ZtMFjafS9BrU4qyGsKFXhjC",
  "key37": "2wpGdFSUJYTVQinLWEpGReQcupamcnijsfj1cLtE1d5xcL8ezohLKkh1gResQHSapCkEtvUUhAch6vjo5pDoEtgC",
  "key38": "5DZc8dtX5wEijX5DQmAni5BY63rgfEew9yKmhA8Pcd2uRXHWoD1BNsudQHcYuHjVnARfUzWmRQxDzHx1Yx2j2bkM",
  "key39": "4sMewSAYDvwvKATHLCGFtfjpTaat7GqdQkZ6CSnFzfeeu7Ehca1t9TTedzJhy8HLfSt26CC7eQ21nKyVpHPFkRT2",
  "key40": "QCnmV7usVhcnYVRztEeZr9FgEGrReBn8PebVz2cu7FgujayJFsYqL2qSqN9dwXfqZ4mHDEQXxSFuUAunSaXXYt8",
  "key41": "2scVQuEfQcFFDzNz6a6PUe2xtuDMtHPhX6HYpiXhWGrguPi21jZC8P1YKonP1CvdFr7SxycxBTgZKVbbfhmrhA2t",
  "key42": "EMwhTLuBWg7gebA21L5BVKTRQpd3Lvt9q4P3rzKU5qui5TJcMMEjbLpKeuJUvwhQsUJSF14dKFGijyHJrVxx9v8",
  "key43": "4fbHyj3eKBiGJRN2pfACjH7z7UstZcfmyJWinTyGBCoruLEVKupdxY51CPL5F9bsQnTU7aUARin49HtN4GhSMsvy"
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
