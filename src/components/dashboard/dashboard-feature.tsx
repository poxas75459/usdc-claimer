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
    "2mVWgqpCnFYU8KAKf5sxdZfANzeTYmPbHc2uBn1U4rPriteArepPFv3Qnif7n7yCo1T9UwroUDxKeGY9dsYPwCGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yWmfA47mTLayAWLdPYNQBn23XEQ3AA5A3LvRqsURymcnXURDxwCnb7UScMyidCRSN8NQHqRm9Kkp2EjsLwxj4JM",
  "key1": "5TMYjT78huXb7TjW5hRgWxmSwGTGzykxB2HPyaa9YHT8gJfphWunT2iWwgwBiNuPTgn4TxQxPFVT9imLQhRbQaGU",
  "key2": "fwNsyat69Sr8r9b2H2qvP763xirkueo3hgXJykLuoCUPqA6nS11JJZrVkrJpLxzC9HZAfzyj2wyGMvhBAoYv4US",
  "key3": "24Xm4g9AiRXcj9wJJp2zzJDuJXUa8foANL4ss7bSujYaNuMKhM5eKF1Tr2PUuhf8wqzpsipMSgPeCyDfTCZxRJka",
  "key4": "3TK9MQbYaznvjhrRM9HD4C3v9YFSKjcvCukhaAm26aoEcP4XkSp5kRvJaauNG5dXhuxzcvzSBqWxfnvHQsLiwYoC",
  "key5": "291qnsBPk2YXaf3c6oy1RPRCEws3wcq5xZmBB9NWAz5TFsq8GcQuHFpBjsv9Npw6kjMyNjFNJZoPZxQq1NNmw6A7",
  "key6": "4ivqw4qDqfgcuYmESbyXiUtjjywEvhP4LA3bjmGhgxkApcBvspJs91NmFz9Vo6vnK7K5Xxs6PS8GovjuoXme4aL5",
  "key7": "5dGLu1VTEF1QU3WwW1GcW4U2Cg9pwNduGBq1XTWg75FWkXKiKhJHrxo1kWf7vndrhhiGnjfYVf5KNVo47x2e2Y1W",
  "key8": "2ZmPm2QxBxSGX9Zv5d5JWwx8BZ5UssjgnCSkSxbfp7bYV3cpfkFEi7g64B2f8MtEMmcECYkzncVFY1ocPX43YVqe",
  "key9": "6DPeXhytpvGtMJPgGT8cVuN6dVKjobuV8BJS6hqSWz6cGhJApXT1LFhkCpZn7WpKDtfqiWwSPTH7dkJWK7j4DGU",
  "key10": "4LTJEaBecw7Nnam5drjEPjVFtLo8XtV1Vifrwkkm8vEcVDjYDL4ucXXA1Jv6iPvzJnu6G1JQ1Xhx5wHbhnfUopP4",
  "key11": "2ZUxyf7zva3M2rkQuAHpCFUFNyFtNLmEYuNaxSRYUnHVHF3otb8Yru1fnPZHTfLfUcuS8QVMwWRgcJAzN3N9gojU",
  "key12": "5EVPBMmq6hpwKj88PETM1SttQgrPUQzgGNBodK9AT91fz7FpEJh5jma2exMcoKq9Ebo8CEorj8LKU2CZBd4cZCSn",
  "key13": "43irumSyE4A1gRFwYtYasyyQMq7uCmDfkE1YPAY5yGRRdvy4cSdgLSGGWYmyKj9tjyfrtypVZYKbgWirt9dyCrLN",
  "key14": "2BeXifzNp2BpZizasrjG2WzryGYiBEiKYDzKk3Z5LE5zjL2keC2ueG1BE968qTBJ94u9jvgDPWud9KCNV1MNJAK9",
  "key15": "3HaBYmRXzLHihThed6HrQY84zbjEoifc2EZJc46LEH6Q7HMfv47SBDBq82KM2srj55QgqWL6hxtgumHkAxbEoDJ9",
  "key16": "3q2FkGa1jRYFQTymZbaWJNKBpQw7a45xKhBfCm1zMMFDBQTk7DZ4cfMocwcnars3rYw2zdZ1AsXce5hjtyL27kXm",
  "key17": "2WBsGNMxcoxtPUDpPycBqGMQAN7HFi2fo55JDpiSTW9VKjoZgZ9rk63JAAoQ2hd1edCYx3KpDry2hUA4RLS32e31",
  "key18": "4ZoL7t4aNN9dHSsCGZ4XUbgqWJyVNwukiEdbbFntR99ZZ7AvzgBvzJxMBhf4PMqJLg5uYvz8Qka6SgBEWMCsQygA",
  "key19": "4P2WyN21ExJa2fe8owEiANKQK15WT7Uw5cWoZgbxZ98KSJ5ZAGRQqGBYNoR4YJB3WcjKM9Sk4qV4Vxts26JUQ6Es",
  "key20": "37gQdUDT3xk3B2XnKgbHL9aLMkMuCffhYMbQftrowFg3pYqxKReKMQ8BQ8tiGXayj8drWWJWe9KWhkbwQ1EgPdS2",
  "key21": "5NY2pAVHzDgpLkfETaXgVTBFrpgHAYBVu1DrFPA8ygj1dJHW9a1tk1KK2Ww4BHsrUbkQKayik9NVn83WBfxNnbfH",
  "key22": "2bLdWvBmKBHLfvZDpgcPRUGxwK6E89zhpEYVCtCMtjpcWutJQEL26FB2ByqhSjEX17LAKVdxwRtAMKkL6TsNWeau",
  "key23": "3aKyHmp1Fr4XqQabXyYjFbw99rKkcor3Vq6GPxuitoajFX7aUgfq4PhcByNwXCdnkkzhXi4QNaHMXuf85pFtnH3c",
  "key24": "4YBza1jHKw6bC3wze7xtcgyVB52VR3XzjcrEDXnLT8rczY9Ct4CWvwk9tydM3kgJxFjDABj2XSvbgCoa1F2mo6Yj",
  "key25": "5Zx4ZMUgKMqoLfRxT7zxn9HkjLsEKcgATqvoxCXLaLLfwuWaJS1ZALg5DsLgdRrLdr4AbX1VSYxoQcyM2yv3nb3d",
  "key26": "2S31YtqEbpPZpEncAEd9oQN5NGSxB79RkYhs4TewnQkvudhRFxyHtANJXNrBaKK19YUuGXi3ngAehu7iAZ69AurR",
  "key27": "4JuFoADLKY5AnVVYWtJBJ94oZzYXYfjsxpW2V8PnfsN8RNB3AfqHcEvZnRvXPEixeBRsFRBN9jtFiL6wNeVEAMH5",
  "key28": "4p6rrkXhi7xJSxbohVPGTHx4yMnRFdn32ZFm8xfXQkkU16RDKtV22FmX4A7aRYhvLrEqmK9dddsMs5jKZKB9DkDu",
  "key29": "2UXYLQ1MDzZzfcwCQdowMA58AhWFc7uHigVAwmacy8T2c41ZxeNSF9TiPiGyM7Da8FNvpXrnSF3hNwvbjCEDsKp4",
  "key30": "2QX63GQSfsQsuEDNe39SymguN8DhgNrkTZctro7Tn6AceV8w4io5oc7DjFYxbcBXMiSk21SJ7e1c2L9Z84ezes6g",
  "key31": "dXg3RcGiSqKoHshzFw3uysAJxDXsEnqty7ce446SNodiUPyi7q2sxCCeYGJw5z8tmrukBzjnnQ5rnrJKin98Trq",
  "key32": "3t2ihPruAY7zx3YGQoW8RvYQXYsHzZNznKooK6CqK7Y6fA2skRKcaX55qKfh7eZTGWeJVtgm3w7wvcWvXqhY9Sjh",
  "key33": "5q7fmpwGUqUqgEYw5gyZMq6Q9dapEmKGp1Rso9X5KYsLBvknfMzutG2zfnMkV5Rz2Jf6QKa2ecFqMVyefSRoKvKM",
  "key34": "2QP5YRWJEtuH5iBNEuzvRoLF5L1abTFJNHm8meKYc3XNWcnDk5AZJcjqviQDoVTUYRzFbfJUYRkZEcz95bVghSkg",
  "key35": "58m28zJSjxfV7Ajpu6XsXB72eAHsfGRJi6D8VU9qTCKJU5Jw2ZEv6LrhAdKrLi1QdECyGoVn9LdLNq6ztLzNN9HN",
  "key36": "5DLLb8DQ1v9ifh2EdNmpccesH1kpjxYkTq2UojdZYoGufd82PC37TYv44TeWdAbvDtpbzK1KtQkGk394iyKJN2o7",
  "key37": "5M4X1G1gWZZ6w9TA7CppeAJfrnRbAbjC8MXsPAF1jiMZPXcDQ1cJ963rcsS9iBoETeCRhL295rtQcfhwDpStW49J",
  "key38": "56VfY9uyEvqiTjttAnnpX1ReXTqwCnY4noYxLXdgfa3fZUpX6qB9ncw9s8jPJuv5UEPaoyURUa3RXoKAVjnEnMWo",
  "key39": "5Wy2M6MEwNzkYTXZDbikTCxXjaUJX3YLRMSLLrh6pQYQPDbCMNzDvA6QGni1GrkgxE2BXTSoauFoXDezYFKqru2c",
  "key40": "5tyDkSg9K9NxmMNztbuY5Kx8WhfU1cXBWWnEoXwoL7VqBpV9FBgKiEpdKzgxzuncNhcQcfymR7yeCZsnnjEuDSF7",
  "key41": "mWxGtfKc2QYXS29wknUKchMmitHqs58fzrLP6sWNYYnMohgnuAu9SEhQkU5WNygZEmMnRpi2DgehwEChMskXpKk",
  "key42": "3NRLkrJKbypa48upg2KD8yYdDJWGGsRWsqqQXLCAaazyswhSaHxxxBZnCfQXc4vyvp1xVJTXrfoAw5uhZb3syhTF",
  "key43": "4yY7idkxiDMnAHVckY63JfdD7np455PisUC92poiZvQjTtrDDKe9sxemkcvT2ZpeguHxELra24RWWLV45QyjwzYH",
  "key44": "4ud8LvJd1C8ugv8QVPYbcQLJQ1y797djhyBHTSnahxsCauN37CRpRpaviKmNVJi9sGt3zaTUbr1xB9Zuc2anhDZJ"
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
