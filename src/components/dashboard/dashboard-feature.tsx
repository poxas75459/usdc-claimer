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
    "ZBpmzQisEDPGAXXiLnibARjxFsWimeynqgWBfHTUVTQdjyZkwFKHs97oPN4Y7SVQaubSoEiesgPUYwmUwMLSRKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2Nx7bqHmQjXTuvaw9RCV8kD52WGF1rzkj6Ax9rZYsUNQkyFZFkUpejY55VsDT6P8iM9ARAL6n1WA5NK2pyjvKn",
  "key1": "4FEB2VNjFqMkf4qi22SJg4S9Ld1RCWzAVE3pENyXGN2muufPqcHzoTbSSHjwLvgg1G8HQZWh9H22y75gjxmZ4FPS",
  "key2": "2kGMUYWFEAA5KzY9nUFeKjnnQWBA2MUQvWvpqY1SkzeYYcMqDyJzxHbNudf34J4Y4iKb5Q9uymtQKDNtmeGMM4iQ",
  "key3": "GQ62Sxz6Xi2qQqiiBLVRspw4aK5m8gDKZYryB38kXf7KAJrDWZH879GZuuQU7GLNHQSCGnU7vYq6dHjow5a5of2",
  "key4": "47A5o8TSehHqSAJ7Fyjw4x5hWRgYGTwm5t2W9nAcCD3FcCng2XBjqibog62k36yBshWpcX1BuTf63qstSNYLg2KQ",
  "key5": "4zJSQTwfGBJvRZxvCZLfVVJgz2GBdy8gQT5Gav6hDD99XXXSgBCPvusrjoAZk3GBpVpjAjKebjEAAaLwS1G53GUm",
  "key6": "3HYwmD33GZQvVqfq3VzEx9vsP9oPbZ2X9e3mSJJhatBMM4Sz36z5Hr7CovdBP3CYxsy8YxpY2JSg8nNzsqTMHCMW",
  "key7": "3AbHsUiFGFLJ1jqwWJL7Tnc8qea8acwh4izWjzALofgyD3e7f9duX9uzjg65D1dGmJ9pgP55639SUr6NMRcxt5nk",
  "key8": "5rXeyR71fdnjGRasx5PSkrKq531h1GBd998CKs83XbptbeegtwBEGZZaS38eT7P4dNGq9FuHR1xZqZFsCFVfk29T",
  "key9": "431hjAwEwj4VYq23NESWWA43CFQ4vyp56fNwU9L4uXBTh55H59zVB1xxYxFkEcuJRHUhN6L14i6e8PUVsqM2kecG",
  "key10": "3acWbWxgntPiY5edbYykzxv6VdVDPsb1dNayvW58dCnNMfP7Qm4pzLDSy5ePyapNPz7BiQ31ZZYdNShwgYsuwApB",
  "key11": "3WfaHd2rQYx3bbfU6rgc2AhjucuzmeyVFoNsnAjsNkn9LBCiLfpyTZiJp2qk1U65zVYKj1PAy88k9ywsMrm11Aa4",
  "key12": "5bXDHMCXPgnMtBjgiUoJEDUDPTq6j3BmJQHfVKdkBj6QR5YecfiWuPcgoetSLrp9dXuVHce8Vd4c1qwDgLPoBjnS",
  "key13": "5HWNYQvz3MCuKZdyhkg9whoLe3u74W8fj35XDVUsLCxHWvwGytNzfw9G9ivdBndQE76tBzPPACTw4NCsUf1GzEuJ",
  "key14": "2PJHPGNm8M4dqgJU2PDYDYPfX881op4PNp7wd3ky9JB3K69X9AZYdq9eLYWXrf7XpPx6KcpaUnW8h3mNrxg4thym",
  "key15": "5kMzi3K1k6pHA8jJDmxr7s336naMhmeHE4Zey76vrVi5vKi5KUnRavCa7dbc474T4PPk97TNJii3FCdJ64aFij5K",
  "key16": "3nG494eHNuDerpPYNjzx9uCRBGACrUXYZC122j1c4xhEs1hHdQWDtefrzyJSBhiSxyjQVjMSu34fjYpaiuRqvbyH",
  "key17": "35bbEaaJi4Rdi9ffxJTzMW9pwCFNekMDxwjfy3tP8CPHVCHLRG3U3KYsdArqCXP4n4qksPkemcdUuzFEfvjGnv2L",
  "key18": "2k8BJWH4ps792UZmNjzgFBftGDCkc4vkkFPrpKvaCVfzwjawGLeJT596Sp4Pwz8jyBandeGALTzyjmQwae8k8WWj",
  "key19": "3C24nrFxhvNu4n9w5Q27cd7CSsP3BGUxvvqxxyYzpGfdpUYr5Qp1oj7Kgg9UhWjXQicHuEFkkY2RUAwuQpueU1au",
  "key20": "4dcSY1nNgQTxNS3iSa5DSoNSscHL4JbeJgTCPYEH44sjXVqNSfQbzQ7wvY4Jqzc3NXxwiE1LBh4CWmtBvFQbbuPP",
  "key21": "3VTQeKUdR6xgBBPXwrLjy1gymDGn1McGt6ZQip5dw8dhy6URaCgS7pJLszn6vrNyDTJWVc12EBahez73HfSpwQMn",
  "key22": "4gqb1Vg1X5izU8G5j6V6vmYh4zNirbKpKwgb5hx4dnH6X5sHrsoFaCafL6YZWmtGGxdvvebBm5KTJ36Dtshr4bk",
  "key23": "2JGYyMipMhCRwJdq91chKkSsuhhZdqyj88NmXx2Sk4vRKM4iftGXgB3X3RD5UqGYhkNfYm8afaViuzNZDbWcofy2",
  "key24": "5TzLKsgRBGb2wZjoLDAPuJw4TXCio4vdVf5vAFvx4s3xRbBLutkEcNexbBypz9M1peVifjiZbAaLnbm16Q2Z5keM",
  "key25": "2JBEG2HnjwuxgdaCYbaysaESVVQeUXgpP8xcYTTYxWHyD47s14Uq89cN8eNvYRUA3whJkdbY4kzyBfgwgszTBAAW",
  "key26": "55GtoY4fhbmpdLU7GGZ639UH9tECCW3BUqEuAr8bqoEumer5yuDNhj8yLdCEJ2KetDyvDMQJEsKEXcfAmitPYPVS",
  "key27": "GSvtENwXDSRMzVBSLgFHk2xz4KYD1MfbSs8b8srNCuggyMffi9FhYRYuYfoMjfDDCQhcepBnJn2Fz7R4fgFoqi8",
  "key28": "4xKEYEs7SQR9bhgcpLC1bLDS9HF4NMCjxmLkSDrRmiP8hwQ9FEvkw2xAkK2ZyxPTodgvuCJScBGDkMKxQsK5fBTb",
  "key29": "361zTBQfTSQxViBwqR9tPX7bvxfVdnNzak8yGj9UCLPFhj6wHGDXKNyZL3cYYQBEo8QCsNXpcpWVKkE8HTJxYugs",
  "key30": "53xXL9SZd1rLVBpPYTV3MEjWsHfs6V3vmh2DLA5fNystirFBDKonWAjWnX5wUVVwuBQueRsySaP1YhR8etcjhYpu",
  "key31": "GHKpxUvxgYQtx9FukqsQQy5AN9g4rEcWy21YhotkZkotXpPTXkmtkodGR7Ee6RNZ8RrZMkpU4D3vS7CxMEnsXYL",
  "key32": "9pRCZUqsax3D8NkeYDQh4Fh2RCrDrSBaxhDk345y7nhX5oYCU4myyEVoTszSVYwsoTPSmmsrkLCMwWWHgZhaUBH",
  "key33": "2DBs7Hfmu2MBq2RHoWaYEzN2syd1QvSZx7TBtfSWeFmRRNorBHBLzy2v8G18r165f7rrn2miCUq1PxTr1jHxw1vP",
  "key34": "VBy1JDyoT7NhzbRNjYD3LFTCWUkEcz8M7Mpf5yS9esKmHwzrDZue1RoCMxeimDU8VqtrjEQvr6GDfcoTqgscPL6",
  "key35": "hgq9t3v2AtuTAAJ5NygfsXEB5rZxXNqCyegWeWxXKJL2R3pyeJcXNfBEF9pVewYbxAREwZ59kR2Q4qQkh5SAeDK",
  "key36": "4hmZ9LHtU4PDFqT9rT63sDQiHoRKAgbxdXoTTSb3jbdwhkNDJiMwDc6gvGLFP7YWX4YabmuD5aph1aKGj9sd5EDq",
  "key37": "2VvECjKhVQ9wDJzEXyQTsZV6TFCe6RcAahucaSYYTKqydLXM467FwWfZSh8bmMTVCbTUENEFGoe8sqEB8WLj9dXn"
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
