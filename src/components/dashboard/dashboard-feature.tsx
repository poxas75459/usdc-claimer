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
    "2yLbVitp9KGL44pYbx8HzDasAPgidcMgpAUYm6zLZfSy4YhWCpYnrLZPWFKBVRJungpF2sbxQSSmehorFNzoXrJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nVbdCvDKQhrbHrNG5Y1rKzVQsDmMBKR4nrr47PAP4fajY3RcLdEvBLhdFVfDYirzFFRdT5mPjWo3UcA3jqfsvP",
  "key1": "363sQX6Kt24JgXLrSgeJU1qacu7uMLp7uoi3EpGaWGAjU3rVpsmqbBa7soGuDtRdq6MXWCvn2BRUJ2VmHF1hRCbE",
  "key2": "3v78khsPPXD7QYe2hdVYmJtpptDALsTLANjPaot5he23E9bQb44XE3EVmNa3FgwrshqvTcFCMPEGtSrWZD1pR4P4",
  "key3": "3g5Pu7G2Eps6dNnyNx9cRdpMDajLQXt5dQeFHYaif5TjDoq3SKC6zLaAP78F8H2aLbVgs2dQY5CjkLN7WLwNSwuY",
  "key4": "4mMP9chN4AbY7TQBr1sL3QAmv2fFzN4LeHiLNp5eyKRtorKL9GFzvevncRW56jEvtp7DatnLaU6FASKAHnk8eA6P",
  "key5": "2FHZfxrLa92NUXGjxk7jWexkRDBwAYmz9kcmiFCF9HGNxWBte3TjFTwV5YBLauyR3KkwTQdCTdAguMv1ANs5kUKu",
  "key6": "g8NhP739tXqDnw9EFTCpdDshmUeuZBMeNWSkMCgqGhUN8L82qLdJSsXD46itBqnQJ6dreV7xYHrDAdHqT6ud5mK",
  "key7": "3rSkHJ71Udvto7epLLmT38s9PrDXGkmdssZppDpuYcy92wP9Bx6QJt4Hi8bpNSKkaZzKmeBwRFesHTKsQc8vKbd2",
  "key8": "4F8j9nmGsAbdNUWKxCfN5ESgDs17PRjFoFZjiEXpQKyp5KKyN77D7QY6dUs2MJqkTxmyYWm7Pwxbaz1vEfAwVrNS",
  "key9": "5Jb9isaMwwEhMkJyevcHjXE6KpNU1i5BkLRqRj6ri4Ytb7QkwWru54dUzG3cbT7VN6QvB5m6pWjDUMgrFiUU8uAs",
  "key10": "tQNPexGgAQJF6uCqUSLfFYaPsDesbXVHe7jqYLUB1EKPANtxWmU2ph71dYeVsgajbe5R2peZxA6Gmh8aYxjYdr6",
  "key11": "4ZiNPvdXffBmvw93hjJa18wD7azwYpRTveP6pRkNYL7L4szsJXdLR2qJRXfudTybka4g3hSSPK1FM8f9Z729ny1h",
  "key12": "4yxsAoBEh4zrcThVNZuwvwbEYEsuLKFQxuGKwJwfJUxxDeksWNigUki29gapDEctfVkgqJdbwRVFxYUVFe3EqKJJ",
  "key13": "2NhkWqjN8KwRo1U3AC8GT5CJsuH251JDPJoz8aRtwDTZymLVmEto6DH6L99DRTquFM5uUbHa8GmepmfBQiRTENBb",
  "key14": "f2uiZsQfrQDTKUod9mF6Phi4K7hE3SBi1v9TxHxCiPVyzTPxFKR2j7FnsSMNfY3p6UEmvZGQmRhBXpHEBHiwf9m",
  "key15": "5rJQBm4Gbh7gth18qCSRRCrkV5YZ13veMrR4i5wZqc9jQ3Ua5HuwDk5KZENgTYU6hX9CZMsExwti9viKYJRw6qnS",
  "key16": "3fL7TJzQKXAAfoKPWNaQ5XSCdnZp2dghJRVbUkd94gpSjVzyuT1wqV1yiAjbE9fGfErpxQso3RRT7VLRa7acHqHC",
  "key17": "2ke16nCDvj4QNmAFfpAFUUfVLREB3t5gRjFfGsedF71jX89nLpmdKZkWKYDrnCaMFgNVpkE7B1JJ3GLehWeexMgv",
  "key18": "3eVhfCPG6j5ikEPpiJTykijDRvQ4Ne4cNMYDsSMm91My8qFRVmCref2fDHeBPij5gcEHZANHTNigUvhFJ2zvCByj",
  "key19": "mrr3PAVhbNdpAU6gzZDsiqnZ4UiacSzaiRrUurgt6mzLECyjx3bivo6ZjJ727Kg5Hnb5cXjoJnJqR2fmEwwv2CU",
  "key20": "22AfidPWmi6cnUDkCpFDJ9Q1ovQeZqbWdYh28YS3LHEz8pLvGbXpVeKAjSdKGLSdufmL7LhiayaKSH5z2teP4tXU",
  "key21": "4QBPpnLav7R7722TV2hjaeyTcbFwuR5nFj8fDvoyTWbNYgFfj9Hao8FRxknFY85xobKPaQTnwLZJLe2vTLWYbeVU",
  "key22": "3peYACcJhMV3vMJ3U47JFvnuzPCmSvcchdY47YyBHRvokTbjZ9NWhLPhzx7vnkrGyxunHRtsvsRVY9LYrfbcpULg",
  "key23": "54cYVExBj6zffDJNWRf1KFWwdF9pcap2oQxP6fAFRZwekRz4wX1Gs2p5Te5LUYtGepVBr3LrKFvFas2qKSy2jVaV",
  "key24": "3WjkuzNzX6T7mSz6pgY4FCd3Lx9sqSaRPjxxhGSBhDVotsVYrJEvzmLjupT81Lk99zaD6dmpfjnfWDhWNZ5pzov6",
  "key25": "4KH4TTHpFpvCmPhhsn8kuginBJ1VfQE4A59Rgegv52ap4DiEzTkvJYDBTZCa388T1C8F5A5qsNA23ecx6zvCY9Fm",
  "key26": "3smqR2uHfkHycNA2z2xzr1K2iSKW7QQPRc22sD3F9NakE3J5GkDt1T3RHqzTFmnWTjZBxEJbpdtdHwkg1ggpYHQt",
  "key27": "CjN8SGZrWBh8nWu3kwPX5Z9C9S4E9eQaC7NAarV9BZFiguXUaKK1aSDvxDy1VtE1i32wSW885irpsAZwUb29xwT",
  "key28": "3UKuXZKBey9zmwKsExWsGj65Nm2C9cFTVkJgHLBDxdBJ5M1EVs1Kbx9HUEY6dpW2T4kuowTdQwkY6Nyb1JGr8zx3",
  "key29": "2P8EeD1VzBi9Vcn1CXGQ6gcZ4FPQuULX8eKKP43WbjUkTd1u3H8vgfsP1YLttYEhAGgUJxezrSS6zTsKK5gH6GHr",
  "key30": "3WZFCQRTcui5SMTQJqty5GsvSJ4sXim4Zk9tyB7qReTYn3Qmx2gyRnKZTmR5cNDjRr2vX7q4SuABARnitDNTBLnA",
  "key31": "4XbDRAgDVMNkmVtWZbAgyP3uaLo1shUqKRRD4rdLbBgSiYCts2V3cKvKi4SL55fF9BCzoKGr1P1hngAYA7X7YM7g",
  "key32": "sSjxArCUvMRXwgy61D19cTobCbYbKdZibJF4v5fDaXeVJUFSD9XydwcZZLDSyB7LLzLKCC6ccQ2YMAzshPbvp9e",
  "key33": "61vC6CBwJMK5Kuc5qzkBcxDYmk2QL73PJYKhf5pVK3R14WiPue3VcYfqziTPrcHkNXi4pE5iwrqsUvTFbRatG8g2",
  "key34": "MhD6QGxsRPMq8zqFFvkrD3KZivAAUUkNceyECuZsAMAkTmf99aXQVkVVHK8S8FtVReGz9hGjUKhvtFraX38JkWY",
  "key35": "2Ffr5R2LcuWycqNbJMWuV31iU4jNgvwWme8tHwVhdQ3DnyXqKspShvKD1L3sbuatVeyEN9c3Sqh4f1wxf9jnLbMF",
  "key36": "5qGq4GVAiuVjPADH5tiHYSsh5qgRewyB4nvAR4V8YtXYvJzcGMSgscPDkx3e9GyF6azTFKkWc2aMQLNLA7kyhuLQ",
  "key37": "5QgmWPfgLmNn1NrTrAw2g3XwNEP71g3uGD5wg4r9DWpU18TLHLwzVCfi2qYq21XhxXNgmdUmatYVSgo87wdfH7Fe",
  "key38": "2JZnKdW6diAuK7TX6H1HNHo7Cm3a43xpfj8ahgBQ6Xzyrouq4g2kmUqxZDCGJxSMts5giHG6jR83B12FGSXiyhoS",
  "key39": "45Kj5dHLYwGvzk5TpsFfwubUJwEMYpf3ANqsFTRQcnskaCDwPoMxbaYbJFvtsA9QGSLAphVo3qHqrS2u3e9314gb"
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
