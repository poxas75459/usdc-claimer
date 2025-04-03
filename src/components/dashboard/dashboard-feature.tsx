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
    "3bmrfkVkiQogYGz4aKxhM9dRiww8TLv1f6XRk4iXVAXJBJ5T4DE4EMiqDaTSpkmwCKEfg31BpiQnjeHEq6wXUX6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLLr2b6x73VKzdcNDKHPPmJkq4A7KmM7YiZr5oTW6sWAeHmmsJ43gBDsmgYhRUhEMtCyoTPzzTgY9dUfDMrfuMt",
  "key1": "267816fjFniwwWk8kpyXPh9VFA8qYRa3jV8PptEJ3w9tqJj4dtSZFtg81K9Rebcmc9URtqkJX41cxRYhRxyqtdfq",
  "key2": "4srD7HUeY2Au53afBJT7dm2GaaghQnvNprEcRoLRzf1mWA4HzfR4TjRRGZzPskFgVXhoNcbFg4KkVLwyEs6QiYs1",
  "key3": "2ir3eUaza8tCMdMP989X8DGJEEeDKumWD2JmN9dLSnJCLDuVJwyuUs6HACPvH36y7V6Zj5pcEA9BtMyBxQuTqnCD",
  "key4": "5pbon2og8CsEGppccQta3KKYtD2BRqo12Q5mAnXXnunNH3qfoUNeDMeGtrMa7VFvnUcsPNaYUysjw8qPEkRLukq1",
  "key5": "4gknm59htAEb19r6PpsrVfzdSoCnG8n9r6ppEmyRtbTPadwmBimGa9efMajmqzd2YNjBb2ZMDP8DSivr331Qy2y1",
  "key6": "3k1qUsQdSfXswVhUXxYMuwQww9df3uFxMNwPqGirceCa9pqo3cVX8JqnDASx7yAEStgeLPToRQmebjkmaNqEiDSH",
  "key7": "YUhqpsLjfVuqysQKvTUHa1i3Eeh2jv7shcZgBWDNx8jgB2p8NsMBAq3k3pd5mBd4V1ki753zj6UzbKXAba1N54B",
  "key8": "21qwPuhquMLUe1nPzT8pUKavRFxtREhnrgxH3TodopQ3SrcANwwjfa7SdNEMeSW2fGgp2hSVwKFDnQXhy8KDytQA",
  "key9": "5PsnRx54riQC3kE1YmqkpxbMvR7SGLcbRtNxZXWEyxf4Lo5j4DEeN3uPckmupVB6ASDx2nMZ3wTxpVdCAmRKd32E",
  "key10": "TAvkyeHmzJaibmzaoSZQPB1CWPYHgmACFzw9297GQdRJBxeuSAYgVft2Ao2Kys2DD43KkhmxrySU5byJjPEHYvs",
  "key11": "2hSbyTcgzLLkxf4X5moQz1QpLjh1C6MgKYnWX5TB1QYcP4kaq3wS3wdxgxicCUoeE36XhRu5vsjzNS5rxVrRbzLP",
  "key12": "3tm2TQZrYjoLGXHi9GrXU9XiNuE4uaCo153ZmfEkqyRzJxUSv6dCb2or8Cc9L6zN5EWCEZSHJbeNwQKTRJvKHBNa",
  "key13": "2qu8pcPzAw6yq63Mm4xr1QfnaqJyi7AhphfURZMJ5PFAwwXseVd2awkqrXcLWHD8QT9vxXnaq2VnkgKdD3KtThdH",
  "key14": "zcdCTuWBhoPVX7wJA2GXU7DWqttWj5KWKVARfsgQ7gou44CCn4PufCHEv9GrL4d4DAMAU6qUiCCKqC23vTSQUuQ",
  "key15": "4YmZi4fmchmCfNTfjX5avs2pB5ovjxWAu4gAQSZV6wS97wkpNN4u8P9TWKqbcgfqQDyS1NRVYQvugKxaBStmNuqj",
  "key16": "4djWp54WrvNsAMb4KG8ZpWvgwQV9E7CRvHBSYGyQ9iewo8SoJPzdoJb1Edt6XEY5yq8nPCi4smd47yHJzSAYDJPa",
  "key17": "LyK2hTtvYast51BbKuK1hxDyVkupWGaM7WLUBAZxm4554o8SgTdJtGsDW1XQZBjY8eacnQBBqHjhjFbrki3CkKM",
  "key18": "5QdS4zayPHi2QWV46rSGE6oPZjcLfxWaRPRArEbmryZsUzg1nmsLKu5h3t8kBX3dVjQVXaUf3K3GmvWca6dw4vEF",
  "key19": "5dX6GoDn6WJue2N3MEhZFzdnZPHnc8SQQoVvHRVLGaTNNkcmJafbTpRbbzU516JR63FJcqTcBSUo69FY7XV5hvTk",
  "key20": "2yErKaHaQQRSKXT3FpfpvHkANyXkTc74C8VwnUa2mghEZHYCfseTqAy4voCuG8CmLLHoVJeMYdrTnSbPWPfF1RqP",
  "key21": "23u2ug5wqRRK4YEHmFCpVxVF2SKiL7ApTTizKDuT35kz22tafRbVPh5v9CQ8GW1Erij17D6BQ3qD2ms4oQSZuvZ1",
  "key22": "VLpiNaj8zUyXKxQtLnbYaFQvRL5WzGKYvcM7Go7DLkjTJXw6kkAfATi8BQV7NjmQYFtS2sWsJdkydwAb9rmVAVw",
  "key23": "5KRydznkFa3i4V8qyBr3GrrfTnhg8iYzYQ3hbqq2t8Z6ecPwRKJm9RFKraZ3EKQGpFgAV1dVY2Wk4htdk66RFn5k",
  "key24": "ELpuLWjDtftGedpKKi9c4P95GTZjPuwfAN2r2p9rZv6xDqBLhwmk6y497R88vn5b8hab54fWJpewBURCDoS33pe",
  "key25": "4DA8jPM6BLKLHtEd6D3jU9iQLTabLjajSCQatH6aL3fLJK4oMy6Vof3XwpTbkoaw6HtVKySSaj4ZEwC5a2LqSpTs",
  "key26": "4mc5TNQKxzxqLaFJmPeeF56Y1KKKUZrHxKQvehx2HEL6cL2R4wvq7PBZq9wtk2eY33kUUfYA8vNL54vzect8c3YJ",
  "key27": "517La9yGwcoVtHdTaUUYqmE5YV4AEFDCsyDMWeGC5qcuMcChimmzmc1gRymmHqzCfQuVU1xJ119CAw9QhoZpYZok",
  "key28": "5wPvJb8MLCVVYDadfp37sy5JcSLBuiJNAhzzkmn61whVMG4aY8aP7VYJH1cemc9KYRA3Shdg2BR2AxBv7KhvTmPD",
  "key29": "4hx8b9rS76gs3mi8Ap6NAV36zfd9UY53eHQCeNYH2bqE8w5grvJ7mCQhYxuDZkX1Punp5F6GS4pY8U1Se376UByv",
  "key30": "ZihMTDThtB3ybLbaHVTBKcBbdQe7XRL1r8V1r6v2Yo7Nj22dHpWykKfY3uXkwJkTyy2e5YNjGzbgRkffGWJ38eU",
  "key31": "VhY11oNYcdum4M1HW94chRnzEG3Cb7qn8HmbPupW62XS7BvDvackQifx3xJprsYTfFR4b3Np5RmwPUcLkDxhDrF",
  "key32": "QCv2aD8S99kN6Q4tkkMX5xVidEpk6CDM3oDKaEYLYRbnqFHzsPFFMcvo2Rqgh7hUch51xQPhkDkKQavSBF4C391",
  "key33": "484i7ZE87ca2nb4Xu5kXxJ5DH2WVMYsamyGYPoeysttJTCgN9y1SzSnyjsJrbKjYA4DqZ7PYvcpxnYjtvsPx7XF2",
  "key34": "5LF8wBBFQpTudH9HS59NUHCjZUZQxeAjrBUAurxw9vCCXZ8o9PwyytNFd4nsT6zPoH5keSmJ2NyKm1qSQEUW7Fc9"
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
