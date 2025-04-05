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
    "2XcSZjmhNu5W24iinHTkVWQKES43FXskwFx2vbXbiLkMFqXiGjduozC5k9ffhv2Q3Q4j3HTwr9ptpxZE43CQd1b5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SWSzK3kaKZNmuXJhXXqwztPDFywwbBiYhXbBgpPCRsuQ8XNy5fhXq32AbxRhrY8qKkgwpSvXxyaghcNaCywxmYw",
  "key1": "46vjeK3P36NHYPZsaajydAY2sPeD9CvRT9Kn7rSqkc4ku5uXxFXggEEKLqmJByvaH1QNV5FNHZd5stnc6RbA3aFq",
  "key2": "4xr5LxZK7FgqnZjcshGzNFLWQShRqJQa4cBrvJ5yStpVNazdtoJ6kkhCqJAfDEmyN5F5acw14AXWXqdkHaPsQpn8",
  "key3": "35VjSFhG8xK6dNAjpuLVJK8vhgGdqyp5M9NX7S2oR1SmX24e4ixKzCQpZKUd5X8fkKR4D9jDh69nnWKVzFvvr4ET",
  "key4": "2YEknfM5e2XHtqdKXaLtvQF8TQip6iDL9J9kf7VQ1SMfFTt78BVk4Ud2j1QJ77E2NmjcBB9agxnBJ1GUosjqUPg9",
  "key5": "2gmnoepxfnyQoKRGXJ3fH1dPQhja1KyQYsjVML35mnNYXvBp88qzZw45RpsRsZxnTy2k12mQcg1YWZrbMArdFi5v",
  "key6": "35Heue2Ym2x99SqukMAJ6kLP2WsLZuTK3zAiyb75df8p5JFWPAYcTZtezR6aAEAHtayfzPYSn3m8eT2FWv7WuBpc",
  "key7": "3CnEX8NjAZyobB5b6p6vazTs3TrzhzozLicQmyxfJ6tEjDC2euyHeco3c1p5AHHG9riifJUbTCCjtQRLR7T3Fc5c",
  "key8": "5E6bHmriuyEaS5NaTYe2SafP58GBjZrWgZdDpNbk9LBubpGnPfvm34nFU4nAAKxQjThAoutabkiSMohwxJpnAmi5",
  "key9": "5WihfZ3eFgM1Yjnuoh29hTGZTcPJs4BgiLByCnYHXfAJzDDaPugs6tvVXE3PAkU1SEYJ5M5RAgGfuUdwYCLfgBVi",
  "key10": "3ZCWqQowYzwTjamemef7Eo3GfHNDnyj5NmyaX88cwSR7xWgLUdpewYKZkBeUHpy74RRVw9Jdz6t2Pw9uidEGFQUy",
  "key11": "44XcwST7QfCsSNxMKdx4AhYoeNadfuP4xDEQpmmygAXVUzSGt255kMUh7QG21B9gLWUPXZvhtuFnYfoy4M6iwFBP",
  "key12": "t9CR8G6V9TYfxvzVqHQAbAbYMQbpMrbk9GDXGuryUHP9XqrJ9aYcx8TZ4fsuJV1de4yRVdqFmsZULtX65wZfXZD",
  "key13": "BimDeQFvbeJnQLHP6Mhe3MpCHhJhMNXXw1Qe7UYbCMFGgPbevYmyuFQvq3wiA4tG9NsxHi99t8Uxwwa81RNXc5z",
  "key14": "4V8CaoNFEDcRJ5dXPPRNwmR9gMFqzgQYXVRLwhkuKRg5G9vmwqodj22HFx9NECqr63bn4EfX8ynsKJ7P6gBV69Cc",
  "key15": "2L6VG8ZTHJXqSAEoUSDBydwDytD7dSquNgFDSMYzjytGDVThV5vL7vDPVLck4tVZv3e6DmySVWVSbDRNcBnP7iuq",
  "key16": "2Y6UK3EwCNeivbkp2CAgP8PHRA7oQmbeqWWAfc66mRDu7XrUvkBFTE3fu9yJhWmfFQGdbDCxdVVR8Ff4vE2Mf656",
  "key17": "57KBeYW6PXc2atY6eJzVDSR4nQ2vQ8tWPshhUhR4UkVTBMarrajLCGhg2N4Q4JxGwwV4ic39FhVSeQjHDUsvznE5",
  "key18": "5F9DmScJLZWjD4Ko1DHa7QBjdmW6ieUKUHSXAPQqg9VE6X4aPjo7mN1q4ogg3PuzLhPb5kXX91Vt5fYPPPHP1F7n",
  "key19": "sr3qFHQmCYbSUmjsLB2fztAYdN776h6cDhWegG5b9QuEMRn5G3obHS71oJeb4TNrtajPtj2c9hoa4YDG97L32r1",
  "key20": "5PHbFpVhRsMBh6nkiSvZMtkEJeAAgUBTPTGFxRh4r59NXY2C7x3DNoRnFDnXVe7dzBK3aXyX8CC7RSrQSWNry59W",
  "key21": "DJeXdkGG4eorqpXT7fKCWEN18AthSycufQ55yATvNppE61gy9oW2VUdxmbXMvjtEDC7fXgYQFuzSobf99CJPT7z",
  "key22": "2UuYeuVfo8hP7UaxHKZdqiRqVgjYmLyEPBqMFmGq8PFEPhaQXB2SRkWHvhQqQNGsUCpFpJh89EuHFiniHZX6Xf7D",
  "key23": "5aEhqzjRzsQ8NyrXDZEESTEGcJtZ5rEJd9jXyEAcL5NKedBJoAEnYFXLjmNoGsTKY5Kthk2Q7YsMMvGcn3HsSz8z",
  "key24": "2KraZC7BRxvpbNf6SbZU9i8bTqGQoko4zakRqtPwfutGKW58B6HNNmG4nUBiSNQX5mtLxc3A4cwZUNjX9CL4a8Ap",
  "key25": "25XP5zipD8gpr1KHvt25r37xoVH7FprmQy232ximyccGCWYKsN5yu7zYK5Ncvw4Cw4M6w94WY1V2z5vdfn7m7oBg",
  "key26": "62FHZmrn9RR5wuRFay4Z68369FWRMc9NDiFcaeEvmPcXnsYfKRjUDpNtcrdYcZNYCsvthGTjyU5VgFvYYh9RQguZ",
  "key27": "4AMuA3g33hr4EJPSEScjsKZCEF61Fv9gzod1p5KdMNhiv6vUsoES6VtZdmx68QDexaMAh9yHo3Net2jvyvRL1pj7",
  "key28": "5kvwq6mx6gz1PyuMN1CiHxYwztM32nohQ2YCvPQAztSyH84GQFvQcDFB9dDnhdUVqkSC6fGeM2zU2Mu5AsPGEr47",
  "key29": "2C9DwNTED3e3F46tkAyxHSmA6s1tqQ4at67zS5qe6EfNVDdLwv4HSUeffH78qGzCWB5ySqqDPPg6zKh72ANUciE2"
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
