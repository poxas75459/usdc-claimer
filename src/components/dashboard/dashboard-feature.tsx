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
    "3EomgNCkFX93JnmyHPfWvSgMhNF9TYeGAz7VY9Dzp2eNfUkYWzwHjqZGwS3BEyGt5YPMYSMFmyybRzpKEaQmt82a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dHYbd9y7iA7skj6NtQvV9dsR39uYE5EMD1ZUYxehxC8YaLZ8JCkZJZVTBVjhbukHJXFoV1byGgHZP63xo4W4jeG",
  "key1": "26JNjWznj58EFe5Q1jnGgCy96umJBPnufxaFoFDDA74RHWmexG7rRbNgcXCvfHm6442BHND4mc2pF4FXAduHjdtT",
  "key2": "2Li7sc1K4mNaQbjDE15BLs3xtScdBCfUuSs8sJZ45CLN3X1A3VRp51apsD1ei5hzKZV8uSaqLxM3xdD8FTKTLX7D",
  "key3": "2X8xzyHbpU5D5WBWaTuboYSoLnJXsERY29BLH2UXaFYfKAPq8atYh7kgWKDHEEPvRnD2fi3ZdzxQ6Sa9n1qqzf8Y",
  "key4": "5KdPJa6BVuSbfjFZpr8eqDbB4geEjJRmdJeupGnvtcxHkBuPCrVrb3FCJCMLtx2mDiSjEnPy1zT1D5v6Kz59zpP5",
  "key5": "5SEpySFtt3taknfpyenHwqkerr8VSRLHjQP2JV8efuyD5mYQ58sgtqrwMgQPLq1DUZmyzs9fAfThHYMpAUasDKMj",
  "key6": "qtTi3WtebftJY7ywVzwZrBHSPBGDQygXy8vRMswjhDHgDEyCsP7mFTLduSpRDV6TpkBsZTfdpm9UqkdUS72FPWo",
  "key7": "DPax8KopeXRcnJwre48mzRYHAySzP3R7vZYiBY7RTzFj2VdjxDaTz1H7hFNZFrxWTM8gyJqiqwAAiubC3mAtyvK",
  "key8": "2xWBGa4dPXr5avoWndkuRmujjF3B5hcRNDmNrsrMw8vohBknPsowf83husydsHbuQBkWQurQ4GiBuCJhwnJJZL82",
  "key9": "2kfjWmceWz2PXtjh6nuEZUHEW17s4wExnQzQrT4Uq4YAtetsyuPXPZKjoXedv9uxiYpP9zYKNHTN3HG9L1tHDPgb",
  "key10": "rXSoWfcaYM7BxfhaBd89Xk7Lc55269rYKX7kgrp62RpY6ac5DhaYBcJfkgRefL3aQGFWE6Hk2tNzfw8PTPwTBWX",
  "key11": "fExgveQpEKH4Xaxqeoyyfie8eua7uqSSe3VEFeYNufs5PuHWT8uErky2aNDatiweFB4PtZTNWwWziUzhccSEseZ",
  "key12": "3K8tSZ4LxGsZZvBF83uW4Ax569VP4N5ozQQWtySQurXjbtpbKLxHHnurcpXKkukLYrn7yDAbRwKuoeoKFESKV43a",
  "key13": "3TgkwWjWR9QgbJgJtiTBfxFUDbMKuJgby5AfdgAghSnCAjm9THMfXXiH7zRN4KDUcs3z8GSvdnvfRmnWG3J9rv92",
  "key14": "3b2qBSpntUBUPnLrbyoSqWNNxZwR4Q65dRZ2J3f1X8hvgWZQPvyUTyRjDa3rgJvJmKcTeZ73xhudmC9LzXSvBqR2",
  "key15": "2jb7ASKQaT7EcCCZB9Vx32MNCaZof3bpwRRdJw36nBL1tTKe9U4tndWyZGdFWvTNDR6xiSmQf55pSfuNZApkLfFG",
  "key16": "4QRtWGd4gm4noRjd5ZNmNGvVeedZfnLhFcei8RGS74CmHzDYx4W4gjiw3nryFHxUJEvrsvn37u3yNoBvi5Uc9cg9",
  "key17": "5qMcEMioF2SHX1bpg256dcKYv7LPiEZaRtzMMx4ZmmBLhvaM7dbSGoSdwV8FUhBxuH7gjfSwr4d6JJFHM4GeSgi7",
  "key18": "pUiinceXuU5r4z9MLm6aFjzzzZRu7KVz8xqLukSgijqeEx7yDX2V8CiByNHRVQc7YdJV1SVVPpYy4V5QVvmG4as",
  "key19": "FTasRwYhJo3bUk6xgFx6QxM5pJbcNUHs9HXcVb97Gxe25z6hHFBNqnWiiwTBT2aovYu6rkHbevgXa5LQf7boXVc",
  "key20": "sivFnGAdpBAVe6yHCmcmqB7Fuz4EZp3a32X7r24kJHE6NYTuNYw3bbk5YVPn4sbsyA7CHHXMQKEt3gTytkzpCiD",
  "key21": "2QXrh7RUGcTEFK4Mo8ehktRUzvuGhP77tR9otNuTMN2iUuDTy7AgLAWeLGdoic4jjhNoFB4aa2dyfqksdswccxfZ",
  "key22": "449p1has79ZXW9mFHkiXBsReoYGh49NDpQ73MVSQxnTdLgqq4vFwB2JaZzD5J6My8j9yWyvh2LcsfWjprQQyDYKs",
  "key23": "5JTMJZzUe6EHJAhPGcJkvzfz6yXnZGcovcybkM5nKDs8BzvPB5iFiHAyQ7aswXAP8o7h7miUhRcPZx8Vmuz5eDsM",
  "key24": "5eaqcSNW5GvGzfavig9ASfUCdth9sLRaMCkxSRgokmNmBuoQ4ZV25jG9jUXgntRyrRJe2QUdD3FYcZAGaEtCHzmg",
  "key25": "3YVBNLRWx9ffaE8V5jKXWGGNMwZyq36TpvYTxnpFna6G6DCBFycU755bFc1VY4b5hLpY6pdqSa28ptBE31YwMuqG",
  "key26": "2mkmCpN5gH9CGvYyHzej2b1fxy5KX4juzDakLHSpJRX9P2YLPNpsJUmmEBoDB534ATygGhciqymqmjbGBakmuJ6P",
  "key27": "gNfs2LhFbqRqPS3tmNEtbnE2dHqdsqKtSr7SVnAwHV6x1jZ6XpibxLDDUALXoyx6NLUWDVk9Abhia3VGEC8TXQP",
  "key28": "3JZHp1gvLS3yjbMyFEDuc2diKqVTH2HUs7P3o2RYFrtXKyNLmndNC7LgxirE3kD88WZPmcomWjEc7ugLJwxQfuR3",
  "key29": "2kYTjBVgJrvdqc2PxQpfQwxTHP4kq7WoZd35WC7z7MrhRZ8cHrcLAqGpsVPYHxGRuYiwAW7QY51vqiHsPqLcmxRj",
  "key30": "5gF9qcigMRPWUzJ4BWdUYm3n2gqvic4oEwkvkin3kP4mZMQvXNZGw8uEsC1NKVwSezF3ehgoKc8znALmt7pwdC7T",
  "key31": "29naw2Ftiu9astz7KDLRSa1bJRkpm4n6tAUwUQkLNoDo9UnBkdae32GddcxGwEPwhZbfX9Xv6FcFUiUAzsVoviTc",
  "key32": "2XvZ5ULiaY1nNELfjXjmKWyb4bfvEWpiRFAF3EbZ6uqmUdnyw1QMFa4nTReNyCANjhnxb7Gvf8o2eS1E8MLpxWSr",
  "key33": "3ydofKi9fcXVm6u5hwfd7tqkQNTMZZxcnJ3t8UiN3z8BrtSY8wKPe55cEfWpDJkz2LT4r3zaSPiwZvdhVAoE2mNk",
  "key34": "5JmBiY7BtkW1CkAhymP78rHFQv4umUc7eFuSJFEVh5eENV7BDVFkbnqvrbtyGUX6TBX8j6F9s5oKAYVABLR3CpEE",
  "key35": "5m45wnUW1vR74GUBr2qg64sVHrawkkwYR2JfHq1QRB9tYWGZcCyGpUKwEKgDrM4bYQtPKyvkttrk9xd1HHEKiUhW",
  "key36": "n6daGtVodJ7x5xaDaAXxd8ZwcSmDeJQPsFyjzHPC31xp4JNztdY3YBtisTqyWEeWomwUSfbcXNjab44t6XWft98",
  "key37": "4yU5VELuyPa8BKHL7qLDKFJrrBxkq2vnLdXgyRwCgcZD5f4ph9UdxznaY1tc7LBRfQ1SvLoR8qjJRfwGitQ2FFcs",
  "key38": "32xE8ZcifyhfpfqadDRXfyD2J6hw5QWChMqBaszr5xJmQtYN4TJCi1KVqHm9uaukKYxP7QcBFLXix4KhR4UnxUVY",
  "key39": "4QyavruBL7kB6RvJcDA8z6zDV9twvgPabmf9eWqeKhoFVSnPdSQHygkt2pvEcKDXgjhkMWBNE7K1C4oN6Es9TqfM",
  "key40": "25J7wpre3vKNt8JnLbN6ejMvjwBRsFiJPZ5DvaioKAP5UzUSA3awzC8cjx8yo3evENekwu4FtY6L7YH8YhNt3xnh",
  "key41": "46Z72crQkJ9iU45wULgS8zCGK16oass3aR8K16gqWttWxCHBtQuXuJN7NGvEom4WwqZiwrNssL2oi546DhTLKh6r",
  "key42": "21jYSiUqTmwcLA5ZeEpswToRixuFta4GX4tmezG21yn3TZPseLGxDfxVMs2SZg4J1zMLb2j4ZeuVBxpnHmWuwqma",
  "key43": "5T4VdzfcavHbQA9BzBXNQpFr6xSB1VAhwYy9icXJcaWHjRwEE9QcTCJPrWdw2SNiRQGQwmjW8TJWguwbDN4xDkgv",
  "key44": "ixxP2NuRQ2oEApJT6j8RdgdXmvGAb8WnpKWu752dStQoY1rXYjsvfYaB6wk8XQP5AHEX53eA7s8CG9kFnV4sg7E",
  "key45": "32HbUuGxVfMuvifLavBYFQHkn4749ukfX9H6Mw8oZZtXHRhsjVRb4xsM7G3VCAzD6ECxhpK8Wwg3nD6jSDkTPkdR",
  "key46": "2pUVHRMRZrpcGXRXdanLZurqacchPqTKsrWHEKmiqgVE11e4s9QryDcztYdMPvFTv7LKxL122KiUjPB4ARaE4Ew2",
  "key47": "5RXAEoHGKNEpg4JHG12PiEtmn2BS2PE3pB6W387Xrpq7vUKgC4XcoFL9fubgmppCaMgi7ykqAViySvsdef9ycUw8",
  "key48": "2Nzop7z7B4Loxf59p7TiDT2gPQeeXHfvk6aqu1fUFjt5V8ZumZx4fVJFvgPNDa666bfHMRSbcDfaWzy8br5xGX1C"
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
