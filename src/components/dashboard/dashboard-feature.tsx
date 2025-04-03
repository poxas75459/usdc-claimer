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
    "4eG6xsB85cJxgRo34kHHBXWKzdebQbbh8fRfMwnA1DYLaxwvnJfh6xo86TcfkW8d39yqQc81rerYWy6bg4Vg3fW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kdabPXisi3tWNXr7fhNYRBggiBAVrCeYMjxAFBv1ufcyzASrdgAMeZGzHKowLn3pVppckGodEnt11dCC8LpQt4",
  "key1": "4QJ8VgyKByBVDhoDszNJ4TPjtYAJZpTbkV1CxegWKFvuxUk3PX2QXwfN2tzNQcoah9LCLdoSmNboGGKf7DZgAdtQ",
  "key2": "526LTMAMVW5NykYhLDtES7Aan1jKPuQrvv53UeSWKH4sJNFh1kaZkQXUkZyy7sB2ijtmTwmehexNrnEPWVeK7UQw",
  "key3": "3pcPJ1FYwjP8ZeK9BQTDHP3XpS1dRzTh4TWZPHkVV227oYKsScZckgg7DiEZxk86ZCrdF44UikcjX3ELi7KcoriQ",
  "key4": "4yjgKSKANDczW138PTguu48se2yyW8f5CMAjaeprZXGpGMPsfziaEgLQLvhmyW3369yyMhXmzDwiobST8vdUGmtP",
  "key5": "3mJyAh3DgD16rQdRigP5T5MjcpKedMrMsAbYcbrz8czoY1ebEbAaC8AUJnsUAQ96BHj5Tp4FafM6SM9ZPkUoRwAW",
  "key6": "ccU74LBAPHYvQSWZhaG7tHg6jdSWrPZsSjL56gGoHRPjiDxQUXC4PSn8mVpP845a3FWquAU2dU235tDCKmDG7gu",
  "key7": "AYzrpwmuJUc6NShkki2SZfASMRDkLr7XWK5DqmedCaUBYAe3DWo4pgNgm3C8a8SRGHZqQB7v6WnXU1pT4r1879S",
  "key8": "MhZzfCyg5jsZHKiqxQemPsvdfHiYfwDFZdtZXkVRNNPfEi4Nboi6zskHv5YKC3HEdvkRTnLC5faRyF8RxxDxp9i",
  "key9": "2dkypkxZg2vC8ifaHfX1N7npZ2VfGXdxR3rPKcqdz43CCYJctQCqoRt5aMkjDNG5XN5GDxNj6mASsemYF6MaPCE4",
  "key10": "5y13JHYD864EDGvydpk67BuRfHfVdySSxvX79jZMT8ieiu8QFKUNY8Y6G8SNAxWBBKmdp3TKCqMttrZTLLdfDBfd",
  "key11": "4J2NqV5xGYuYEFiXtqRgPwkiCbGdVL4cctCRwiiFMP4417YFwoNbfH3T19i7dGgEaZdUGYf9W8yDTXN2hsVwWbP9",
  "key12": "2in8ZN3sTuJ5TbSBi9AK1bhP4USiYrpnoBQVC8UyxbcGfNpkeyK4jrPyTAupJgfPLng98T7fcQHeZreBZyyX34Qj",
  "key13": "qSAVQ7bQzVMQYDb412SMp7oXZC1CDodK76SYsfefYT7Qs3oEYHR1HnpTpC9UQHU3PFPSfkxgiGHSX6xzvDX9qLE",
  "key14": "5ifVqkprisH5zYozcC2EhBAPVAfuQuJ5EobajEfh4xonx7TFW6jE9dPEsAHKoyq2cjLSnEoNd15bb3m59LG8TTCG",
  "key15": "v1UnHBHM2LHS6wNeaY6h6U5vCwnxeUXiqRVvC1srFk3G2h6iRfCPcrKF7mGWWjDiMJ2R9q4XPRQjmuDSJyLk4zq",
  "key16": "5eBq9Lie5q6h8HdTx73G4wPnWGXA8WhP6KL2YPXjrF3dr7MCtYxDrGaeuTMjjsXEaNPK1iT26HnuFgsQbjunYkJL",
  "key17": "9cujMXotbstNFHeLmToi7PA91NAuZizYtNpZSWeZdjKWNhd9jXj4aUNq14hcwAbgV26yYQXdN8kd3ZKBqGtMY95",
  "key18": "5LMQHQZicDAc4TYGqEmkJnmxNd7KayinTDh47B2QNYLpfGk5ZLMhMpGmM1UhE6q79aDtSKBcy8aGb2BYrbNVRdVu",
  "key19": "JTNFuUgyixX28uBNnYyDVPKDqZ9hsPmitk9nekzLQHBpZuyXmfysJp4khadmnVwT2q4gJu2MSKiBnzDHCrFtdaU",
  "key20": "2KWwEas4XgQveNDT3Yfdn9H2xdLfdqHyYwSoLxBrasiqspcGYCAkL7sgy26o2pZsiVGK2odaBbeycDoDn2U289YW",
  "key21": "5cpVrEQpx5bBY6yufuDBTXKSDfQtUAbFSnEwbZUyKB9yKaLLPrMLK6MCF89DwgqxX8urpUCAWdsfmW4oTGuQaodT",
  "key22": "5qjFkMEkmhHhvZHWfhBWi91ztcVAr4FHFFGApwe29xiNYUUs96p99UpB2xzGFxrWsr3e5uqGZ8qfgtH3sFHwncmN",
  "key23": "3GGFUkpozKHfFxmKhQnL8zcbRUrjjpAbLkgUdCzeJ5sgEvUGaShRoZ2v5t2hasDftGtzMKH44UMJTCkUyv6ocMVP",
  "key24": "4i6m6SocnLectw9vs3X4W9EbYE42pgFPoFv4rvNBGneSmCKYWUJwtFUEnmnpMN9ZBWrK3FF3ucPKFRD6u4eUTUjj",
  "key25": "9P7KyPXMk8iaaAgm9uPkJS3J4jfQ7qs2bjeEBvPdzjKEKjVLuvHdTLqA1r8k516h9ZD1ziftrx1bnGEEFEXhPzk",
  "key26": "41wGy3eygGs5iKxrNXxvy2RsJ31Kb2V3GeuQ3qjTL4JZWnhaNxu4UVDhMgoTj7QZcsdgkkmNwAnfHGc4hmbQB77y",
  "key27": "ZACXGojDq3GWs1ccqxtRXzwdSwg1hN9CzQgPVngUL2XbTBqpcKhB4TQjejy3feP3TckFGnpXWVupkWfypn3uJEz",
  "key28": "wquXmsmfWbx7Wb4PzLJcnCoJKp5ach9R3e5oHcyEc5VxSMjMbxMWnhBV44iXYAGV7Wc35RK7YyQ32hfxJ94T5Cw",
  "key29": "2w9rH3yyB9WDZ2YAU3ttvCWJ8NxVayxEtTk4ouxhQgcLfGXsdJNmD4f1EvXM3y3Xb4L4RXxNexmTaPSFRw4MBndx",
  "key30": "5UcabM24f9kRYyHnxgStTFkApsvw59hvoiNt8FettcYR6r8ZmYGeXZ61wnYtfytPw73jpiGUWGUcmbVhzVnqGdyk",
  "key31": "5DVcxVt55t3rDFPijVYyMBBdiRGDkuHUBP9jQF1LiYhRgRD3xQ8UrKiS62VpiZbFGzAEYd6RKyHs44Yk98A9uEmP",
  "key32": "4jHrp5YufKUmkhUiynJsJ9e6UJ5Yckqqox5gvMPsgNnZGZNX4zKi5ur1G8zjuGkKTRrUMDRN1ctZTN52U9QhvffV",
  "key33": "3V3ekPy8C1F5TGpvGW4wj4XLmfqbY5V6ux4UkJ7qPSCmCdgLvkiD6bBX5xzumUroy4vL2muqq53zck62RPNn1v1d",
  "key34": "5PjAv6uYgvsxoBwjDnKNP3w27JBCEjf3iscMLQUbf5cULdhbkwyTJQaw1Xgk5yv1FDmhJ9tBXSpstCK8YzSMo14G",
  "key35": "2kfmwEhmVmGUpuyq3h4ZsaYcEDunQ8XwXVqHLZU85tfnwe7kWGy2ocUfAfJHgz7tLxhNMLhCCyh8aVkhgd7vMUUA",
  "key36": "2JG65E5kMZ79HAu2HU1JM2eUmtGCAdWSMkano1KKvevL6qqXGxU6kfYRNXjNEmz1qpaUeHsmqyw88rTNEtU4RP82",
  "key37": "4dC9Zppe3CjLEpXBP7mkH5NSKyiHVMmaYbVvmBqj4emc6wCmgSPiqAQmXwJbRhZzCMQryE1yFW4RswKD5cs5Bdw8",
  "key38": "L32dxZj2pmxy8z2KVZ2JSeGC2KVF3EhjY1AtEdTMcXkn1ES7HuMb6Z5DdaoqwhNpiMsGvMFYvdbVm71ryDwE3iH",
  "key39": "3Ewh8ZNWLhYLEF1M5TWvVFVoKbrGYXLd7wvv7QNRinj1L1V6yuNJVtpxihApxWvypxRYip72gVxE2ex8T5BQUvve",
  "key40": "5rXNZoBW9zE9kx4r2fHAs5smyuwLUeiUvSpnsm6GCfntjThax9i9ddTb9zEARZqipnRDDDq1EM6NQgukX8FCgDSZ"
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
