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
    "3VWJ2kSxmiavrdRBQ9K2McUNaUaXACFAbDjMjjBjZ2EK573FJmcn53YCLcCkXriQb8KJYYXyson59xXHcFdyrQJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BB8ULqvPyuQXn3n6iT1M7YFSaZp9Bx4d1JNsfNEekfKccugNkwhKTqowRDELUAuXFPp1AC76VZrkJeUDxBBSnVy",
  "key1": "WCcwTfYX6vCxFEzNV8AeVueVD3wr1BE2QtyWoxpdB6Wn2kNeofY3eeATJtxaRnKk4e5ihf36yaTrTFhqfP1ft2U",
  "key2": "55r1hqBrq1E6bMT6siPnWaZDsobsEZEYB67GhjAzCYSY5P9CaF6r53DcPoEo1NR5WWfTV9gd4bBJBDpzbZE5Lcyx",
  "key3": "4JEATfTmymJ4UYVGDqcHz93KYHL4LnXu6RCvkxK7obMoW14kxqrmrUW8LEzGCy7F9M3MzcphQo7H42Z9Esd5UkBf",
  "key4": "2Lsws2NJZxyU34WXLEv4DwTTyzuFC2fHysN9NM17u3rby9BNjFtk2J1vd4maofXAy4GukbUu8bqWZqA93kq6PbaS",
  "key5": "3dRobJyf2qZzxNnmDvTNYUwpcxtNHMogugCVuDMDrrNbMoW9y7BdntFsGtbGtuDiLJhuLAPzpkMynyFCCH73Kkhs",
  "key6": "3hYP7NNoQ6HW5uheP6wL9Q1yZ2pzf5oaQ7iaa5S1ueZogP5rguxqrxR3iGisPkUsi4qY3FYgjGAiGNZWUkozdZZK",
  "key7": "4qy3JY5s6q6YQeETzn8WPdPxDxS6vdCLrTN99HYcfqgWEtrvis517LfTyfqL2KtBGgP5XeYgvMiAvCHEm7akCT2b",
  "key8": "Bztk1a24DpZdrZ9biKGwfzHhxRYhewscNZPQ434mNobFg8mDdMd3Fe51Z3o7XSR9aTXQM8wjSgcYgUTviftfpq8",
  "key9": "3419ySxnadJZSWXhQBc9hkDYqeHemAW8DweHbVLBWMfrm9tmvjLaHHYRi9Ztm2LCSmRTFbnuRgD9PxhaHepTSqkm",
  "key10": "4VxTA14d3Yo65X4qkfQsJdN3r4JXJb4eAyHC5xDNg73y6dwN9TQi5oqAYaVQsAjGACfRiv8r3Twsutuxv3pJX4VC",
  "key11": "2ptKzWLDPo61oMeGFQcWdVAka9Ux8L59oJLTrbN8eYJTd84nDcqgRNKcGcLxwEtrrDrEAuX7Bh2XVTFGGSdb2Zri",
  "key12": "3A6ePfWByMPr6dxxuhV4Mvha5gbvB3A2CxfyKmMCie58MVAfxU8Q3qs4JXfKLNjveN2hAo7qZ2WgH7oVwVDhJwi7",
  "key13": "2vea4BDWdrwKBADviLPeYodzWpX2qL5NwHYPmqj74D2n3JLam7rKTv4TFKDurEym35prGCFmfdArog4KrKt8jHAh",
  "key14": "2CXdfN3jCELUjq2Rexw4hXPXc73orsNaKBHxEQa3QLnGki413ox7RL3bFM9JB3FxtwyEBo5fLNDuSFu2sUFA4aiw",
  "key15": "3gnCqdtWFdHQ5biGVpNA2pBFCNACJYjitmbjfGeqZeCTrbHdazxQEnWKeVEqsGtLqM2LZ71oDXvFH7zMdKbmZNEU",
  "key16": "2d72cYgKK6hnqKgBiUwYZs8R9GLhDoYWaEH7TLyz3TqQS667SdQ62rsGNSXZdwLBSDofDLUbhYX7m3wmKKiSdtoE",
  "key17": "SfGdK3L4m7TxLN6n5Zen4XXmGFXbJ6byzhfRDLZEpKZ98LrXaHwrrqM4XtRnYT7nxjEg9FpNvhZDca8HHDheTbH",
  "key18": "5DUUnKZyxkgkwcKJk67MiXdCpJW7XDw5kYQFDdwHiTxa6gnRPx9QYwuNR13D1VkmjTAEJRyBDWjr3WgHYQUaYFaT",
  "key19": "2MqmScKN63F7jSYd4n96SrwbjiDjAcXrZi5FSDJKzRdpoK5CAEjTPuvAPPwnt8kCqivrJjzSKcEaVo5bMnQ6RbYc",
  "key20": "apkyiqYTqPt3hwwdDeVM4UJeXVbvKWcbpQbr6MkBQMNQhUfGTnbVxgjJePXAvUeWammBsogvfooZpd5shY7dfsB",
  "key21": "J6McYtRUd71kjToekmXp5BHyrgu4QAywjmKBt9VMoJMbjbQfsZDdupepLn9aUcbU2RnB9VH5cdkPuSJYhK1EY6i",
  "key22": "WoQz4zFiBhH3pGA6bFLVX5SVieLu9LRh4UnuHvPHd37PgMKxsbqi9ZVMouu5WJ6BaCE7FptqWMDin3KV6Rif9yq",
  "key23": "4NvQ8QwTA3eCBHHVJmk6nQEiSYhczd64iBxxeqg4E3ndMGautsNRpc3nTrvdVDb67APcyDVpriya29tvhDvJaYQq",
  "key24": "44ZZh1Rb4fENnKRaq9ybD1zEJ8d311psPgebkwj3oiv8tT8yJbguveztrtJVyCQJ8WgY8FwPRF1tskZiVojdRUTv",
  "key25": "4jnWRtWnoPygK3oFy21pczLqAShv3VhhW4bqxb2Dvfwo4jg6j7kcbiPrBstYtjhCLssPer76S7Yj7XxpjFMVrtRF",
  "key26": "4KX2fokZNvF5EGxV8qz6vTT5vWL95pZqfLFJhsc8u5zyBDDuoMW374HwSCXUng4Z3w3yF2ZqeSyAcnfSVy6UbMFN",
  "key27": "3MkdibheWnmPVgfPpi8Vd4WPc2VTnANko9iCbDVqANEtEdY52qZVsAn2aLwCJG6yF9Rh4bZySkQcZr9EZpZW7Fbg"
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
