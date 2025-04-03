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
    "4MjpF9Ayh7hGTFQX2JPaqbAWs6UrBPwbXpT92af8XcmkWFVAGhCqTorGLC9HZYcMhGpqKYxK71ujGLgVPmb2Zoyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvgMrvrPTYChTrU7Z64DGCcxLfKvnxCD9Vfg9ZKfA3jHxGkwS1m7LybZ7WP2nPwJocQ1vKVZMsutHR823aWfQe3",
  "key1": "2xpw9RHNkFjzEvnwbk8SbS9HXexnzrYKuqWPnnZFx7VEAdxf5eWSn3V8BEgpZpHwLiusPXe8aZJPSszZ3EN1x5HM",
  "key2": "2BqjyHdMACJDYrRroViUHYwSrqsdnaWq1kzid78vjt8hpW51Msi9UUZudUQqJoQQoTcKPZT3HWn9V8DkfvNiZHLg",
  "key3": "5pygT7jFn4BynAGzKb7RcBCe4EnjA88UemVVhWGVAiv1dpCkCYQ3ony7G5wLEo1fynuenGwCAXaEUrKarRwxKDm4",
  "key4": "43TBBCdCftvoRGD6YiQHn9xYLuCVpB1c1kEzpHf9V3whWxgbsYfKgqUmUwFhZaf6EcgU39PGS4kgHPtgojuEUcKL",
  "key5": "5vBzP2xqXyHiixUrMNWQ4MRT6ANP5Dhzg2a1EidAfoG5zqdCfaqPYuLmiVniuU2CyNfQUvvX2BrGWQypyPBcwhHt",
  "key6": "LFXPgf7TLdtDkhFgJzaW8D3qqa5xuwoQnUww8tvQxjmVdcNNqqwd5cPy7iTajx8bXeBDT8DVbKPFdWLW9xLmJte",
  "key7": "3YEH92UfnLimtfdxmuqZvNoUtGxgzCstBprK1xZrUP4MC22e2chiW17xZ9muNpV6KKJwnpoqn4UsSBnaNx7LM2sr",
  "key8": "4tLEJM9XzeFijX6RC8bZmVMexWkAYmXrKtY1q8rgkMMF8y9CHuudoKGFLBUXJK6mJzCBuZRf55vT4Zw1kawTMf66",
  "key9": "AuU86Ty93Ka6nsS9zYHvYpNsvUsh5bcvVYPoRwruebZjEu43nq9bMBsZ6CgR1cooq5RBPCyJBj7XuUs65aQ3pe6",
  "key10": "4RvZKFDNSZyiekPQjn7HtMRYWAAVYBApVDHPcZDxzpynQNbSa1Ss4gv1JrCG5kJDZyk6QFDrxSCuuEuLqoyc81Xr",
  "key11": "4Ki6uxxHjdV3myNECgAURucED8KPHXiXL7B3Q2J5LHhXsmtSwsAz4mHhcgSH5Vu59ondxg52EsJFKYZAeFzkUGnX",
  "key12": "wepWFacohH4eZJhAmEdpFMPvvN9wDNyQBaAJ71gKB7RFNJbTkzSpkMNXVw1AnG4PhzrcYfahBZDFys5NGEkeNhk",
  "key13": "K2n1MK292L5GwA5hSqS1KwjV3mxEmTjhka9cr6RcFVsavXuFCYVBvnYVNEVNdgQfnNrkGUTipXyEqvHvCP8AXAP",
  "key14": "3BZDDmp3sjkteWU2zydLB1m8uUiVBTPgnA8tiGm24mzg67sLe2EKW8ncjRTtxVkspS4jY9avGYYQKDhToy8L7NFQ",
  "key15": "65bVFfxo7YNijoEa1SZpYTJJCUfvCk1VsmAC3G9FoPMSFKzkfSjm8HuVWfnsLHYmao7R7GdrWwW9xkB9MUL83Vv4",
  "key16": "4pmJhWvLs1qDSoR4mwqMmra6EKSSqdMAkoH8bZjdDFc9nAqU916YaJ5yYL7qgZsDGzWhhjeTUaJZwg1nDUbUdb8M",
  "key17": "GJdASUX9HmtZMzc5TQkAhjTbLmD2FEyd4E7hXJnxmWJQuf41bT31FQDQyxx8pfLWURFK8U4dVgebcwnyJZp7H9T",
  "key18": "Yjchivei6QwYC1nQkhUwnshfAdhXtxVtjXTUw8Yq6EuzZvzFcuYseFQLKgJXkwewJRZS8J8gLTZiWahJLZ9cdmM",
  "key19": "H7PQJX19z4RmC8fj7NYLQhAEqhNdYD96qgoSfrqxaQEuWBiThKL8xEgHiUqq6tPHLR3Jf3cUkDSGeBGKX7b8QN9",
  "key20": "4zvnCTbd1DP1Zc4HnDHx1QWjyCH1PjFPoEKM9MrnPouxC6tm6TfTniTRshqHt9GDahhU9ZrYgqSUoBg9MmybeMBS",
  "key21": "37Nfa69EWkXpNnFGfSQv2Yw1M5NazMfwHFQ1fUzaANmzx1LAm9FWfiT3UYyoC4qLXEK93Jnhr4nMYS68nKshxLjB",
  "key22": "4SbmwxQwigAxtbiaLm2WHYVMhuyQjGMUZMuw6W5ZwBeHrwSV3eZeduUe2eEW7MSHGLeubZLNMHTr5NHAc6G1pnTz",
  "key23": "2uCzu5nb3QmxUwRXW66xpzc4mWEUaG3vsJ4FdH28dmxRwgJCLPyovXGNfzU68qgZVmMV3zkJuNUSdLSj5prnw48e",
  "key24": "hg8pT4ZukTF7XcnQAdZvNWet5EjY5rdJF9d3zY5wuXocZzjofwXx7PokKD2qoiko6PK4B4ghK8TTda5cZudyMXw",
  "key25": "62TjFGDJNDWfKfk5Z4USyKZ2vkSHxQwFMHwSiKAS8AWdEzR7GEJ6tqL3aWu7SLg4GsChqHihFk7XiFbwAhXx5cK4",
  "key26": "mYymKAhDyf8gjfWvYKE2muqqz3QX2GfuMFvndBwiSV1jPvzJgjaje8g7xvUsPfv1hGqT5TUGtTaCxBezbvgrivF",
  "key27": "5PkWGGNGZFwdfNFUm6PwkmuUEE2bSx5h3epKso5PpAs8K1zNZf1oZAXU45qfzojwY85ak3wtAqJMp7p4jCVqeEdb",
  "key28": "XTNW5anwHFc7biLA9S8dA1pydfuAjAucXzw3BvL4UBRCiVt9nwgquB7s5hQ6YKBhbQuoFj8qQT6S8WL9UE5MQPD",
  "key29": "4QndyjtSVK5GJy9j8jnM1tP8ZhmwD9wZPLknf2DaxE5b6ExSuHhtDZ1WuxdE337VxL39Y4BKbaJbCsgjckGhDBjE",
  "key30": "5vaHesRxHVGVLgCkzyn5AdHrq6aPDMEhsqmM5n2exYywBUHWJu3TJrHthZynfJoFExtkMFkMPDEBqSRFHo3xap3",
  "key31": "43RDaCAzvw1bFtd5iKt92CaieygJQ6yjVPf8diQC6ngHpb44rpQJPDUjFUQzEBsLdjyg265cSUiDD1VmkwuyXihM",
  "key32": "6vHpSS2uGNBJQibxZP2YpptP6UQMypPitt4vmbcpDrvVXx4RVJW9d65jMy8HD9RYFxAdSy2yn1v5cikG9CJCNYu",
  "key33": "wJAYpvy62ARynamHT2G1FJfvwDULcjmfeatfKCqedmBDXK8CVr1S5jc2R8GnPEZJnmwApk5TYMYq6y8LS8idWME",
  "key34": "5b1Z6oNoXx6UqcDEzinyWrKZsVrLFKGubaoehRtnhgQ4mG3E8wcfdd4Ehx5VQK9ejxVY8exhRVxbNEtcqn4VDg2p",
  "key35": "3tjix3QeKsLNMuo4FZArBiTTzwnbidkNke6gsNfzuDt9we75GHHLV8HaG8LmGX9qsGzAn3DP97hoyYSZMJQTN5EJ",
  "key36": "5SUmZLM9cy8zRNPas3TEeBRRkXwGvPgTYzzvbanPTrQ91NGTdQAUdDHRPE5pmwpGeFLhWKrpc4cSm2LDKGy6UgnM",
  "key37": "2NGgqppMSXWuTbqrBx8rtwgPffgdKAdLFKvqbXcyQGbGWCJBaU8kwK5Hr7SaBecmPVVkLfyAjxQqpjKznxiukGQr",
  "key38": "2ZDxmPjUiDZtWsBvJSEgfLfGMhYfQFjA5WATZCbkQfGdY31xyhtAEputgzaEfyLCQYFDJc1zrKv3h6XUFkr3Xmni",
  "key39": "5ygFeJcuXUGW8MReFstnTzjpmAR746R8F5fSDGdpU5nfpF1ndKZVuYKuqp9j6q7KFy48duUEHSWEZzpvrCsYtfaw",
  "key40": "4mhWp8fehBFzuaVEdEiC4zz4aPVBBPqQqC6EM9jvjsR2UuhaBQLZaJEzijDRAFSvHbsNw481QQd3siDZk2NFtTGs",
  "key41": "3wwrrdnn11bc392cmwGQ8NvLVp6TNpz1mRaFA9zfXUUw2prnaNBk64D9HBP8zMWX2HgzzQ83SN5Tz7fV2zwfQUky",
  "key42": "4N1kNyMAKTvJjYp6DFMjTveXvku98DFGNFEDjUxwBKHyiUyijadZUNGGCjqRtKhkqkBt9j6D6b3q5wUcKQ2mY6Dq"
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
