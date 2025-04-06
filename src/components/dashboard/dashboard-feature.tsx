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
    "4527wVFTqKCcjHAU6BUHAjUffsrszTndRZJkv3cR4HCXoTDDpaZBtXvMkBWNZbiE9qerEHEm28RwZCkmmsqkJXp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AXYqwKEecUbHL8UtQHfbwqqNUNqPkVsQtAFyE99vVZDDuuH9xFyH8rsyny29pMs26mg9A1GiEHjTkdyzDqBq2dv",
  "key1": "3mMGkSJQassgkXXbG128zb7QZM7KNkvjkNfXouLpK3A32LFWHXFxqUpbF2uqT1RAdovPazrGKjShx8PqP52Qr6YM",
  "key2": "4qXsUNJ7wq3REJDpkNpjnwcq65uCFWwdtnU2heXrkW1ro3iKjf85ti2BCPiBDtCKHtk9NZEWkSwN66Xagebpf4Af",
  "key3": "2YeaBhj7r5UQ1tp3jVcmrWw2D8yiJ2fy49VHVsUmzTsJRrCbz9W77sjDMpzKbtjUtEYK3kxNivFPbhb1koky2KqM",
  "key4": "4ymnQLZrQKYa5Nw5SRNgh3nGCg5temAwTppmCiX7SuhNtB92NRpVEAyDZrfrYiyxQWjH2KjJUPD4fxDCd2Bnz6BM",
  "key5": "4M4y5UnUCMkspKZyMDTuYJPMHvsnT1hqv6y3mjpYqHDY4Dj73wnb7oF9NJY3Y5QNVXCuqPTEdoU62SwLtDY6NFR3",
  "key6": "5KgWfCVZHjbvv7mxMG4kX5TnPyWaKYmaiJrvy8yYUxG8PyXLSD3PKZ4WQuDtVesKHFPwcXRNZPdbM3H8Uc63285v",
  "key7": "5pFPR8GXB9AgcaeXX1zuTzqPboLX69Z2pymvR8cA8pYVm61ZZtxAt8bpfNWXB4ysiFFwCi6HHUWdgvZ6c6jG8JXy",
  "key8": "55zhaZPV2HJQP4xhkbzACrvBdjbZMBCZQcazyb8JQcPxuaPeSHb4dcHQ1d6SRQzdc2D2ba1KV3duvyFRpmmrxz4e",
  "key9": "3jVh2FiVTWfU3uYeocFvPNw2W9uAJsw7P9wq6Xm4Vu5Dk9Dd9aWJTjsTaeezUJAQYFwhG5zRb1NVEuE6h9UWww7W",
  "key10": "3Hbiyz7Gr8zvzp8hnqurRG4Lzy1BYtob9153e4xAG1kFaVFSibm86xFu1GAuqGzHQbStVAZRQkz7PEyS8wWXzEGQ",
  "key11": "hGAeTYkyBvGKNResrLQHHrrh3e3UjCLpGtCFR5e9WZm3YaAD59Z16s9F7AMT8MNNzRiYNLdDCy7nCz8vkHnzLJH",
  "key12": "3d6QH28GcjWj7eBZwWRpJz43ipTBVh912eWWE8VMZxfPpujFsGFiGSnePquPmH2Jupz4G8k48zvsDQvsifzuyif8",
  "key13": "5k94tcWytK3FFa9yumnxAuFSYVVNuwty9LLtYnaXbF5VHhLuFVHsPnR57W6iuc8AkN5PCLFbvkAhjt6urqUFfn5C",
  "key14": "2ZEYP9ztxUMhhzr67F9F33CiZFim1HZDrbUnJXfMN9iLwbHiU8i2BrBgBVLn6RxrcDxT15QzvZSCijytx2W6i2s3",
  "key15": "2GpGngeihzjkzPkmNUPPfBCDoFTckyaYbKVayqxKG7H97LgpDhGhcPDhqSkibtdvrySVSXRHuqvFEhAJDVMYNx9f",
  "key16": "38zGLMKgSbLqXBa4suPRJbowmoLJGXENYft1177iAwxSM8VuHFAEmy7y69yXsei5QxA2FBvRMQGRmx51aEijsvwt",
  "key17": "5srKuzLzDWZc4XMpbzmwkrWgMwFKbEKkZzuchcnFbLGiX4VafhXq9CyNGTFUnXQAiGAZTcUpa1Mh76r1WkQoCMJc",
  "key18": "DUXjyPwFhgWyQi3K8ypt7uJDhqB42peLiA2tstwX556PevHBdWnsoHby4e6JDKkmFqBfESDJnmyD6KADGWArKhF",
  "key19": "4TBAnLQxcyuNwDYUDKBfGMmjFXQvTSeWiczqi56iKdt7mfrty5mBsdpXoXkJtpmeKXq7CjeTYoYzfdLx8UpJCvG2",
  "key20": "5FwgrdKUU9SEJ8ThWhDUPaS8aYqN5TGxKHPGPPbGzT6MBUd9vhLTRYQ9SKJ5mPJibtJwZF5B9x6pboicRirQRzg2",
  "key21": "3yanFJcjU2NGHP1Jt49ejkAFUJN3aLHoRe8x1fuXwyWVL1YQwV3iZu8NFiCspker1c8pyqFS6c61fLbAwcufYdqo",
  "key22": "3WgEoX2PhUiWEGDXEMNYhndVpbKYpwyoGGynFQbhSTWt6TbYubcC7QVMcNe4WU66JjgP88fGBFd3NDnasFtbQzC",
  "key23": "4WEzqcbBv58dajZfv8tAkExXMy8jiDQMmuRs6nCTQZrm4fVea3Frdrq7HnznNPp5L6epRBJZGhnKCPG1tN9vJkSH",
  "key24": "3s2eLxnRrkDtCEQaN23hLkUxzAA1wpLRjRANg8Z6ccU2iG5TgZKLKYYzw6gkRhPkGeHJbpowAvcQQ3TzqgtL2sU6",
  "key25": "46RJS4hX1dyE2MDqbDQqsWwH7B3LRkd9GABS56Rh9QGNT98vKxgtZ6W3aLLTeTz6YzE9JrRhdDSXuge2Jp9R5uJC",
  "key26": "2NDw9H6uahzU8j8Cd8z1NhNVfYLy4ZpD4AfY7ds63nCMgQqCBEUxNiwiWPPopimyE3mwFCNrbqBCbfufpaJv9Bav",
  "key27": "46Y3P499BNPCRFwKKeqFDZzDQgiUi1nwQ4Y5LQVYG64n2CVafbiUPHUA5CthoZpcqPBVrsFBb9R4U1rwJ7J4ttz",
  "key28": "2Mfn7e4imb6uoNEv5cRdTvS5J1HeQEthE2BCJh88qinhrv5X1HFJny3pSr3iDMRnPTxL8Z1gydHt4nrKoAAvH4Fj",
  "key29": "4JPcC5rXZUBswSYA3Gjy2KQDme4gpFSXCgDT2QHgXj1VjKxkFsGko4dG3wD6wxaswfPxS5FsgvG5oEsRbMF98CP",
  "key30": "3ZwyoM5oBM1dv1dBDUgP1Yv2W5qmYJHbA2nbKJqvkmJo6hTB4hpbuputCXVHnTqSh18yBnn1MWYpiUNnuJRZU7iA",
  "key31": "4tEjkcHFhHM8RRCaDzsnNxJ6hA9d8SW4r2VFL7svgYyiKc1576Adf7JFG2yAPcbcN4nAc1eiYx1w1XxYhWZaDt8N",
  "key32": "4CDYZDixeE8gMfaRnE81ac9dyfKAQ2JRh7jMrzYmigtTdNzyDhemsN8cNN7ifGKf8rovc8vjavkG1ozQjzfizCgq"
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
