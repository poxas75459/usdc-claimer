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
    "3ri3BYGbCNKaAzVn9JxaMh7gFKxWcgacb7M7duZxWSWN1mjZDRVKTPDNR4oELxDQvnBUM2XjZKuWKeRafySf4bDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QNa4r7ooPtwr2roAFEtoEBKhrpGPA44qKNHVPxjBPXUq52eFwqRRTHm7tUHKF56AKivkCViGvPDVjoc4RPUra5F",
  "key1": "gAxHWJx52zN9hkb6SKNogt6rRTZ7tHnQqLv5nfHLs7Mg8mg4YGRL8bu4LH3joqmANUesZ3NTNusZgFDRwNFzJEp",
  "key2": "21wEMe24NrCJEZ5bfn3D5iSwYjbaPSPHhqdES57V9ZVTfd6yCqCLfiiTDUxVvZmBgbxiKDJ7B1s9NmPJiRSmq6ow",
  "key3": "5zCquMsgqdznxnNLeuaVdt8em2WuFjemUrAqaZM7WfDxbRags3uf5HdT8m17ghZKxX2P9R4NHzDM3pP6Zuzc8UtW",
  "key4": "2XPm1KFZTCYrtmF9K1MvnYM4Y1J5MTbaTd5sfBDTaXqMBmwWthWNKqZjsdM91BG65Jnr8um5EBez8FLnULDVQ4yT",
  "key5": "62MBDoE4Hu62xP6Envun1aozLDCBXvnTGRorsumw9U3uVUQsPwqx14enc4MbR2MHVGUy7EMEh5r9s2gai4fJ1cU6",
  "key6": "62zzQEGFhufJLMGmGdr2MEuiqNncamCqnxcTGnDgdEXUEg2XzNgc9PH9fykrzueddCTbXSpB8skiVZto2SG3nAMU",
  "key7": "499n5gG6sYcLzzn5bAJ6dqMHz36Woo61USuL6V4VfpjgCQTo5spqV9DTpwNLeGLBTcLJ9gftFrhtDW1r6xqeGhKW",
  "key8": "2T69JdLBEqEPFZJo4sesypshq9ETbGEbPpBj8X6hyDyD6wCVDJwcP6Uy6iEP9v3gki9r2gYREFr7EpC3CQexvLCv",
  "key9": "2cBWgBmMB7C3JnNu1fmjQsfDs5pt1PWoqHGHM33JhMypoKQYc8qkrv9vVM24dZBQzG1fNfQs4ref5TEAoJgfkNkP",
  "key10": "5snE7j8isgVFNMdftaWbVbpomQhahF5p3BtxYNC36EuX1tNs8Q9bo7RSCfimcgjdY7usosSBNBEx4iowmBkRheDF",
  "key11": "3cPzuKAkDZ5bobvkeKG5K5v8JDPj3SwcKQ9GBSxcxtQy7DGYNqJYLb8UdKpE4pAgjCULJi7CjvJmbjBposP4kXYx",
  "key12": "5KGFobzKDMahAcjuq7AGTibwLoEwmnJtSRKzF1cgWpcTSbEDTQko6tBAtw9G92f4GoZb8P5SCpC2bEtHYPzXMZPz",
  "key13": "98FZ1fRcBeyAKeakQkPcnrkBUFckKnWAzbgAfjBSMfZA2Hjstcg5yd6LLpsnb8VnA9WHW6nFWk6DasfkeMey6eY",
  "key14": "2D6xRQJjDfLbCVfAL4cp8FV8WroxM93LwQSpLTQskftDpZEzP1wy6kXyqBmjjLhyhK6GMrV7Duwhc5VhU8kTL8u1",
  "key15": "4UTqhdcejw3zBSUcVnvuw2R3iTXf741XkQ3zpF3k35Nr7h8fr8TPNe9RJPW8KjTmiMGgh4rauj57pymdYrxeuv68",
  "key16": "4V7Vbe2TpemMsyEN97jZnt3hMegYmxqUWdqrbyBD2bZxUjPPZG4msEzp5xrUdbP7zgUtwvpJLRRsABJg9TRaJ7Kn",
  "key17": "2WUnviMi26bQDbnt7v9ryAuZihxzA1eDXfev6avi5GDPPd4yhjvSxWGKGH5cYuNyMkJiPEh5RmtDHsRXDDa5ayGt",
  "key18": "3yNCAp6soFhrzAnEWkdaBbf9XRNufSFKF5Q5qnATEmWFwAsiHjtiecTvKuVTMmtvwgACuA5YHgtoYNmViXFGtVGS",
  "key19": "JpRWJRcgcUbp9QQRS9wNpEvfgHStTR5h2fQVBCkh48ma39gkxnSHdv3AUbSMh9EhaC5XneoksF3PN5cVJzexaLS",
  "key20": "22rgrYWvAEEqLjETk9kLZVfzwVgxK8adAGqkYZJ19a8mgCDnPbXzTNQv4m9tQXF51Er2c9CorHYkRJd2EdjwXKab",
  "key21": "4fwzLauMRbNonchYwtRrw2nNevG4MmFKAqCazNPX7NPYQmQ3saVK5ofMyPBvH7uTxsaEa2xaZGWMMo3Y7ewxAZxW",
  "key22": "5sBFKZ4uAsW9qphUREZVoezqiB4cXBaVJiHwiNvbL8kGYJPBrzvWZJsHSqrPqPsJzzoowAjqvwGoJW65WfMKUtnc",
  "key23": "4LdLkypMxkc93e7GNsF1yx7jNN765PXaxy1dogBgWeZYmq4ACsexmHpNaiVMN6E6MkiuuMoVhRHCEv3yQQXV78oz",
  "key24": "55NixEWMDcJwa2ioFzAV3jAhLZXjiqecBQWoXxxb3qrjHzGTzNNswtXnGmYcRgdUeBpjdLJhejJWCQ9PsArS5b7V",
  "key25": "eihSFoLp2Xu3VtBs9meg531cQH7SC8CpXUbsCe5RhA1vS56TafKYgTgYbGJnYLPt1Bms1NQHuLYQ47RAwfoF3Tc",
  "key26": "5h247ncRhJn8CDRzNYatbvqCm99nZqkfWq8nnouDmxXPFUi9YDUvYCZLz35KsM2Qz4WphCGuhudBNSMVuPyA3s3m",
  "key27": "7QEtaN71bvUjvNo7xhd9J4YwXWn3DfGAGTda5xQoxRMgnFsizDQn28BkisyvoJ3mMWUqpkcvZiK4TY92He7WXDx",
  "key28": "2RJiWpKkaGYqmVK7ndrMyMtWC1VjWRHPaVcH5D8qNkH5HqXXWPJz7gRZSCrHgnK7HkzqA5DPA3PaB2vYr4ZB6ikF",
  "key29": "4g1KEGpzCA8sLmgmYkUUxDXGMErdux5UFUwkEoc27PBJ7MsQ9kfQ7nF5MxEdX5V7VbhxibU2evc4QYziZJrSk5mc",
  "key30": "5o4t9so6n3uMDTc2MzkqQSqVTjgPxhMayQ7ZPsDnTSjevFb2ab7JWdNPavNfQmKTg6beYQ1atozfWHW2ssWNaPKg",
  "key31": "txxm57ThXCu1EnrafwxC5134owLGDN1ncrSR2kZhBe7zYdgzfgbxXUXR91eESiSxEfJbJijFvQ29y7AwTJccc7b",
  "key32": "ptjoXAt4325PuZM3z7oFYK23aSnetZbSrjVGGfpCveXd382vwHm6PZqQK1C6UmjJQhCLvidadWc2qKdKjELVy78",
  "key33": "ZHeGCxJdjpag7hpkKWDFHLoPBmsHtHLSKAqXEbfBRhzrVa6QSre5oxteZKUF1rJ8JhTdqo6hm8RbLZBdYeifzVN",
  "key34": "3PQVoKb8iQ4VjtKqJSqBVd9ZiHzW1ZWokVAjPNVE55k338G8xW6uw8pbr1NDFdjj2fWUoKt5TtG1gDwrxpNHpLrk",
  "key35": "mkYMN3FdFLPkv8M8Zq4YxcX8Dd3rHy3FQpCrZrM7Njmtsofyr1sFhPtc5xmdCFadDgVTjjTZ4eR6thbBKLaR5hm",
  "key36": "2PuZcEJsqB4pBVgsA868mKrJLEMHdVJJkSKfyYxZFfkrWar93mHqfzBqRzqp7dtM111nvxaxtz49AggxCw11BmTZ",
  "key37": "28ZFoDM5EuWUymtBsPk68zbQGGN16Zd6z3K6dN5PhxPNPy3obrhcYumtmfnsuvxZ65rWxwmMKTEitTmygVmnKKP8"
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
