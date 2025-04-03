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
    "zFrDnb7UrN9K4FMFbGDQjxe6phaTFiDxwCVcYt68fBRJ6wPrinz1ZL3qWUWfxavh2pXs5Z3KhitzeR9urvzhQwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVy5A9NvzKJcDvi644coqQXFScz1A66UCqBuMmejLHHbfyxbYPD57Amrkw9z5xLhTCPanx67ktVdSDFEtrKtD4h",
  "key1": "4G3jEunpfsELbsnh8wY6mQqv2PKRuU3UfBssohBuYNimNsC24voTL84rFNAXiDRw6oeeJaVuF5Nrmzt5dpKAz9hT",
  "key2": "3hnwhdovDdNHpvC7EwsLQxT2GvJuLCT9XmvB8dcVYJwEwPouJCtEL38B31ZjSScYpdxSdJFSyqddMi4Et8pN5EVM",
  "key3": "GyibjbH3v9feby48kekFt8f1M5qJ4d5vfiHWj94yyb9e1TQH7Jp44Zb7eAtd3fH2CJiikMYoiumnaTgM2VbL1hc",
  "key4": "517Fx1v64pSsUCrtJGE1zoqpAu1Xnc632JfedSoPio7366wt1ibvcLJDgS8wwkdSq8bh4BcigpWnmVwiSF5KzBJB",
  "key5": "Ct98nyC2S52JUhvX8gcZH4jMEGKHCYJGUcYpjTgU9DZmJzcBVTsVabWeRnujtMhFVF3twBAbxU4hHUr5yEDYm47",
  "key6": "3yhhSmPGAQnuQE8Gc5u9TvkgcAwLUrU8Wy17LuaQaVmoKLhDFnssskLsx5WQqQHMQMDikMt1yBJE17bTysGUgRq5",
  "key7": "62p1VHW1WtM4knTRn8zwyik1BwNoWMjUryDu4UM9gSenfD3VtKr7d4abtiw6DFENRQhEiixuay3eBRjzY59ykQbe",
  "key8": "55b9uToPbdEXifefvVtJ11oHTM215yHfkoyLjbpR6LVKaZBrY3d92EUGJ5dmniRX9K6bUCAJ6yTx7JTb8ZpgYckg",
  "key9": "5dCigh5J3aLo8bgmcgsboPK5QSQTbirG6kAzToansXXjozatFR9cJw8g2bnTeoz12WaXHh8rBWQEfaXHn5bRYR98",
  "key10": "51E4BfNpz7iHB1Bko4CpP4aRBAzr76paGZ9Tv2wW48xsgLPzZ4MX9DDM6URvwptmpSLN53uFqG9fvuKR9pftPHKp",
  "key11": "4THLkeyk3CvuwKyYYdarwXH3HG2nPpZWwJunbTjwBP9zBsEUWUHcDSYFicqAYvQnHaWSu9KK7xFj4N8fbQvmuCpB",
  "key12": "4SCCc44JqLyj26Mv5eCBSXgxXuAGJXxMkMvowHTFDAStiem9EmMsGwoRhiFwxpc6ee1au6scC31nR8PoNT8FL7be",
  "key13": "32kpj4iupEtyJ8fvAEdXDuuFEEaAkV65foEZ7Em8hFZ4vAVzTSb75rwdr3opBzTeH8FYewASB5cpgRMTGaJniAiL",
  "key14": "4Hd2485eUSXRuapKeBS1FbM83e6FDNg947JN9MYvSSfvMWAcbzekDhAb2rDqt7xr43YcYvG7t2KzFkohqLJ9m7yL",
  "key15": "4oJvGTauH65jsQ3Ui6CJiKJtdhYqsWMm1Aug3YTboM6rjQpEKdhumjh8gTNE92whUkEytE2epqBZTgpghkhHRdWx",
  "key16": "2MtNRJbCgk2Nqktr7owee3Lbzj6qfQWWDmaqvzSEBUYAR6eGDsTvNes8ec6Hzwwwv8EwMfhVY12Y5P5iYLDhBrLY",
  "key17": "DFj5TTkKKHP2r7QvtUL1KyiXGTQvyMNi32c1FJk4aNK2WuMXL4tazh7jKqAD3F1FZ69kBse1BSujdtq2kRh8hCz",
  "key18": "3Vdnzco4aiDkPbJXeV72ev9Aomzh7CFzTYfAkFP7SPaTeBN4V8RQaogqpxKBNyq4dHucDBVR7iKfkPiVqS9KouuD",
  "key19": "2BeRdshyHFPLfvmrD7ZiZtCuU344aRRHFukwu16pya5mAztdKNpXP1G8W4GfZ1a97VkGcEv7XRcKNS1BtHN5WDXJ",
  "key20": "2VKTXdjJT8Dvidm4LuCkw3eHPjejNYQGYkkDi2iU5HKZwVE4JNndo4JiVEHC8mdq2rbvdBKzpQ4CHnByErqtVa5o",
  "key21": "2JwzAzRtPoVuwNLncZkqwRfEBLhZNT6VLWfrevaJxRqTFXUGFg8moCFRu7CpNuNvDLAuHop2MjP8Hsiva9yf3H3J",
  "key22": "2Jf6tFPZy3iiBhMhe3Ax8QumvrgP4oaxCBZSi6PEzPZHwQqZtD5LTABKCmnhypYTjj2dEQ9BWcBVvwWYUUkMw3eZ",
  "key23": "K39Z8ohoYyhgmDPxm9hWew1YYjMVBEDE7iX85QKHr5v5Qd7M5WCKbXXZLbFd4DNruUwQAJh3m4MitCp3PrbLoxj",
  "key24": "5jCxe3L7rprLydyUgmrCocVPhhgdXR8mX1mmDBieSgnPoJKPKuGEzv13786QWHgB8jJEMphQGSFtQMnF4YtNGpmg",
  "key25": "4CsqTF5DrnMfbD5zAiXXrujGw42xFGdzPxpEf8x6wCC59vLb4Z1jjSZj8saf1mCmKWjF32k3UbqvTN8GxRuvrVTm",
  "key26": "5wbPQYMXLpKMd8WA8izyyLQ7fkWmZFSUW9PzFmoLXa8XwDxXrzoL6bEA5hUCULNj4MkZrzJAiAWim2xR7CXbe5Qk",
  "key27": "57S7VVJhtyvdCtSP6pY2oe6W2WMiXE8T8KqXNUTJ6mzhTDMprpddQ5Sm9FvvScs8M2EkaNb42oAfXMM417B1E7bW",
  "key28": "5Fbv9D1pVZydEtz8ntRr7Tj4rks2ZqMarngeEkpEXGpc34kuFGTxUpDcgPuEFJcLL7d89sL9GSzkqtx8jzugSYHw",
  "key29": "5K3DnNzrc3PZCLceWG2ffHQrXgA1wGKndiAB3FibPDCM4dmVijYYLG3zNKPqGJ4ZKzcjhg4ZRfgNVh2t9dbp2Rra",
  "key30": "3nTPS4VsHpKahREfyh1PV6p5gSiy9Ne4BT7sYPVhMheNt8JSZtPQ9FYaX1wQoK7TpbadkBpdYuamhe8r9f6jcx5e",
  "key31": "2mGfqFnhSqWY8XJGCrDJNG7BaYocZf8a7wHhJXWnq6y9F4fAoLi9qn5Tpi5PP97R7nHqk8A4UU4DtRKrAe1ucGtA",
  "key32": "2g7twy11hm1BrotUiBgMzb5VFBworp81ua9QfrDkLcpHhKH2hHaYM9BuoE3zsg88vPhfUi1dt4w4Faavodvivu5W",
  "key33": "2MgxBWwR5NM1NpHMmPWPfjt3EZt4UzTXG9QmabkZEBMFiBCdBRky1oipfvax8UDqUmL5ows9MJSmGaFUao5wsf1P",
  "key34": "2adazCVxajKPAbxQXNghycf4f66BGxyDgj63E4QF4Btybr6PQLTfYHBiSJJTVGegVkcKyXKAFVMnVvimtp7gYGVe",
  "key35": "YUFXf7qkBCModrRVDH4mwzESGGAukh6cEbPYPNMjpvuxoZrBet8NVeyQHWpjPetmMRDsVfjw6eKzdkEdgXBFmei",
  "key36": "321X9eXLTiWdDVfhhUd4Qq7veZcg88oFEaH6NuH1WeCq4oARtcUxun4C8uCMLwWn4AsER7sYuifqXHjFRydXDMgZ",
  "key37": "dk2TcoQSFzxhFC5gt6izXo7AFe3tvymSR4qiZkaGtMrqwuw9xHxuSqyA736bFGDLMzkgnNoiJ7L9XY18QrYPpN9",
  "key38": "5wYRHwzP7UQC442tJTLSHhM29qYxruQ5H38SFye1qQeEcvnAXYoATfCqCnJrf73WWAXZwFPFczHyJANk3utxd7NR"
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
