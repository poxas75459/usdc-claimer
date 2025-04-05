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
    "5YEkBHVQGfFjLfrYj4RZsPCp4P3csmfN7sorHij7wH88mjcpvnAwxLR4XcTDkg4bGFFFLCKtkpHedAB9zRWFznGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e3op2LeGMcy2QaWM2nYvXg8A7B6J5dCVxAkYdbYdbZjDzq9XncS8iXsVgBTNZxKbBtdPqrKRTMQqpXTEmhskJLD",
  "key1": "3oi1ztf9g2qpc8r8ZhNDm2uB8ffzj9CMPzkRqYxqJntjeYrmKEsHacBYb1zzagGYzjtdXS8rhYANAujTs4gjZwXk",
  "key2": "TnYAr1MCyVbfMHtJjZf9dUzRRTzan33YMecRjKZMUNitikBdQuZqNTfGHpGS5Btehzp8HewudFjrJ5hwmyK4dC2",
  "key3": "58soh3uhJufZGqmA2nxaMdbkKDmJPEajiMDAQYYqYkW5oxRjYfEKFo5LrY3BhAa3JqFgrjM1rMc3jsHEv18H8AJc",
  "key4": "2Yy2LY4e7R2XZcw2XALPSvBW449HcNEd7MGkCAwNWiHQUtnzfYm2m54ss559M9Mmut4bLnZUL5eH48d2hCUZyXHG",
  "key5": "SH29tpWCCaZ2rX49BGZt2F5Qh36fRFU5H2ALjZPNBPNY7PyspygP4dr73F3HTjND3dae8UQKvnmb4r6dcq92x3T",
  "key6": "3MBET2xx4US1ajzHs3ZBjSbcGpnTcdWwRJDZFPHFkRGmS6e3bs9WHNUoCvQAoqGqZDMoKSeRxHmVvrrZHgPoqZNV",
  "key7": "5VmzgZY1FibMfpaZxU8s3yCaiiXiCvz8riNqoS1XFqKbjLr7WAyY8TCEWzEQxKhx6AspBf65dt7pRm4pDUyaRsoq",
  "key8": "2qRoEnjiBRpBdpq1yp8RrPfhYXcw7SGBdBpj4ngLDKQXbDuLgJEVPVEEpKPwJhpboFvLFH643UgtH7yB3b8m8tMg",
  "key9": "2GhAkWPRhDX5MUhzSM7uZZB4Jm6A2PdBo29BA7JoNDE4feb2nFjKpw1MEBNiMkWg89KCZNgoXUzUTVfRaQumTVH",
  "key10": "66DXp5oPuD383CsHdj9jWZYjHGdggFQyavjqHLs7PnQ2794Lz8mjsZzNRVfiEnzo3RJLnd6rKPDb9yHY6WmF56rL",
  "key11": "4sytyM5W7EsHf1JhjJ5QgB1cowGrdaJukoY92mnGebn2jEAnFfr8ZbJksLFqA8x3pccTttzdfLJzSVMFDv9mPXGP",
  "key12": "4WyK8BEkkAJW4oTc7NSDd7sBgXuAn8KHF2jngLd7hN4G1vmQTj4Y6jgU3zeDfomxTVUWpgxpN1g5URDu5PSpNh2J",
  "key13": "3gRtLX5gV3Zt2WE7NSVT1HZaGGaEBhU3vaSYF41HT6wF9Wj9y6CDYCuKQRs9Fezy5M8PCTVtFHXrVpA97BC9dqC7",
  "key14": "4bEN6rPWh4d76YRq7VgPba1oWrGmyzTpR5zb2xQCJ3Cr2qaRgcE2rtQ8iqwmZYE3x51xHk3wwGiao9MkRTe5Qpvk",
  "key15": "LN2Mf64q8PjG2v7Z58kB3Fn9kUE4zvr3qgm7hUiKuoQkN1UnTrrpM5rUurTttjThHtsaAmiJCe2TD7LV6xZD3Nk",
  "key16": "jfK8rVRaCS9kx6C8McYQt36M9usyR46iYS5C5sWzZRWMDeudwvVTuHmc8a13e8QkNpnn5van6jDSxgcCyQ65ezh",
  "key17": "3wzyZJdE4GFVnn11q8RLYeioW3VS6kXMp5C9ZGDWCsNegUvpDWC5c9fGYgrgG9BnYqeC78pEBnoMpZYSK461QDhJ",
  "key18": "WnfnH9aF5wzz1QJkqRxj6USFzpjgF2JoJLUVm6nHyGGJWHSF6m6XDgmzfqB8Yyddouj3t4GFMLqhn7qiWUpK8Bm",
  "key19": "4mZpd837MwdTsKhoNh7YLfCf9HTZDFMtp36X7MgfwPsq7naFazK6DqYkJVPV6FRBUBkRE2EicUA9ESioPMpqDBJS",
  "key20": "RGRTWnirMkdU7v5aj3mPmXxcwWjxT5dq3Q99KFkbnc4WcHTPbdbVN1oA3r6qz5VnbeU1PhSiWNxVXeq8xzVqTWQ",
  "key21": "3n7s6UxxKpHw6ih5iAUevpVzDnMmz5i4tBT4742DrPBEVteJbMpsfNvJ5qUHjcVtfMxfAgkv4NnPxzEPtXu9Nxt",
  "key22": "2uivtk6w5AiViCFEotMxbiQPK6rGkHN9MF2y3F6Nj3hmJULuwAaFUuvmVHwB8E8efj5sXy9ofF58ikrYXtRuuUyv",
  "key23": "wDMz7KKcaa6ih9KtAv3dmxzUaEzeCeBddQQoeYnkZkQfaYkrpJ5ft4JGEKzXnTjqvHhQ7mUKQsAwYaXmreobtXR",
  "key24": "2irL9Jh4WQwi3dcYLR2kKBmwpcwauhQersVMdrTKnm4UHz7e5z1PV7zX3iLAwfdygSPbq2LtLdJsPVFbuVi9o4K9",
  "key25": "5rN9Gv8fjXjde5vRoAUs59PwNEGNZqznxiWm9oakaaCNavN9ABb4xYiNuJ9rSLYm6QrffRHvteS49mMxU9LNgduw",
  "key26": "3t7Pc2TNG5HjEWNKToqa5g8MwyyW9q9jeio33Z9YdYoSp7KpE6181UZ8uUFQ84AZ1TMnfDiaMH8QdkLptBVCWxMp",
  "key27": "4ajXXXgdgzxV2sd4Bo7poEXx6LoSA86ZWyiUk3zPR48QoKMU7yJfo7MuxqP1xSvkvAxFBXsPskihg1H4MFxEVzt6",
  "key28": "5WVNABrZYv9sS6bzBSYhpeebrcNH2ppZoCdbHJmZ8WaZTC87yPQy1qH9kQ9B8NbnkDouuNq5YPvRWS86sVXBLr2D",
  "key29": "v5Yg1iuHXmShADdUjAcgVUfRyHjMZCGnvLWGWe3TGcQgKqs27aWyZJGgYhwaAnzbWX7MFF5u5xnAkpdXbBK1UGZ",
  "key30": "3xtv2q2vKmwApAapNwQCU4tEGfummasVZQUjxQyWUaiV5VQjBLWCW9sfRQgXP1HNpuxKDjYMRSH2eC4oscbVeWYU",
  "key31": "4PXcGCMNizo5UKoNnauYGNKWaMC6jVFPGmTUMdzEGv9VC7EZQjQRCuS5HAxBmuuNnAEbuHWoEeV2TQ4322W3gvVT",
  "key32": "4y8D28TXozBwSjMBrfuHyVr9ivaAuJVVgP7VtahtU94ekEnsUC7LpNGSJPVibPbEvUsuM8UoqhZkX4cRofqUPSjJ",
  "key33": "3Yj6Ay6vVXLyyMvA5Zq6ZCT9DwpJXEanSku31hFvsby3tLVwYZuAYbEfcnf8qqxhkiMFFxFa4fw1GZDCQukZ2bkB",
  "key34": "2qs4Aj8Rz9pXea6JBzB72J3NEn8kNJWCquiH8fqMPpzcC95xhDbGkTR9QxFpaQpCHHmD6nve7sBHSfwcFypSY3tX",
  "key35": "4oKGYrLrA9q7UTiEyMXhiojArpabU7kGZaZDj8ZQR47YRhKw8Fw1Hdgh23NjTwme9dBg3Ut1yogVcqDhHQ328t13",
  "key36": "3YyeQUVVoR5rjTufC99fgPYX1BZhKfdMg1UDsdYCZzQUsm7WZFnppnbN2WB7qt145n3eHJdj48KZABwaGGESm8gz",
  "key37": "47am4tywHii1GpyWuALLWjaGt8fsb33ftVpG7F1pPxeCNpvduHXsk4TASAjfxo4NgdGC3NoKgHBcZ3FWwEbJaJx1",
  "key38": "57TdzRvW1VBEKVmx6QvMzhCgr6fuh446mqzKaJrcJFMwYupxryGqtWuXWLv34Cx5vnNGsLZToCs5BwtSYc6a3kqi",
  "key39": "2ZbLurpuvaZLXy4UcF2c2bj8i2t29dUJ6uzHq5gac2sd9kvaNgTnaUQ9WNSMd99xNKwyzXRuc4UKSYZbCCL4E57V",
  "key40": "2Buq1dh54FmrGrRETB9Sw7UvxjjzoTxBTKmqdjsMaVtRZYoP3VE2yctXBPjNBtKdBDAAYdyotrS2pWewnG9up7By",
  "key41": "5M69F7YzCzsuA36NhnWb2NV1htGESbD3tSedXw5kmqCSTR2CDL5RfZPadC45KjgbpRLWGr4arAak8VwMifz87eX4"
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
