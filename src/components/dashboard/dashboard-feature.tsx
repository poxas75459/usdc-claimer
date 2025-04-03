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
    "3mA3rg3ggYbiHmZPH7niJsXcf1ZhmHfuohUS2xQR29efYqRv2uCf8R8UKq6ai7dLrGD93Z5ZgBdrPFYkTs4TkZnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNsXRfLrSV2U1FyKxAvH3zVfewbXmxJjEgceZnU1UhNCvmAVwgexyzZZfyUPu7XHo8UBghaQWPdPBNyou3SZ6SL",
  "key1": "5yTbVxboYYBRiTh2MYEzZRVbDFpbAhe4nQtLV5WyPDxski7iaCAeu8fNDLhPUCSdMzykTHkW44ejBmqWgfCEGigm",
  "key2": "hHYun4ADSZmjXHQbF5w3HbZMwJc1BprwHo8avDHZEcmFZXLa7SGbZ9awBuEhmckLHVyfHvqzs1MfFVahr5Hg7TH",
  "key3": "wckmCF3p4aP3wXA2mNM1yd869zJmCnA5vrK8eJ72JkcY5wwGLB4V6yvQFmqS6H4aVpVFsDwsvnbSsHyXgMEizyL",
  "key4": "4LwvJYhSjFoYpbcTSyntXAfPjkAF5qM4DG4V9yzrinMM2sbKbYKZe21FgpZpfEWmxDMqZNUehXtnqWL5FMkZYbo2",
  "key5": "2c76BEfjD439FNgij5koHGvgq81KPAXZLnFKC1Fde2qNJzdqF5L74jaP2vZSFgRLXC5hr7Zy1DWvc5idgJD9JrLq",
  "key6": "5BW4KR3swsoK7tNC7gAxXZf2bafsHkS3ynNwD6B1yRdoE52XeS2TSZn751WwzEq6kAYNTpuKe3vrUMc7Ezmi679s",
  "key7": "29vzCa2G4jBmGrTgLd95RZJJVuYXtmgQqXHeuX9g4siCH8eMFPrjRiuXvGeezNrGFS9yg2K1CibeKDV3DigYB6F4",
  "key8": "3sfKPerpjnEwdK3x2BfQBDVVDwzjMAnoB1A3TCQDTJLuEtNNrhZaXD388pbnDDPFvR9MAfBPhqJASLe2E5JRM5Uo",
  "key9": "4oJHdPy7CjFrJU2hv7K6P2hUKDDNtm1hHAoYumhRet2qWbpymknDc23i83cJd3BshZFJ7fsphEm3njRzuFUWmseS",
  "key10": "4EJSdSiCuT9nvTJe2YKHLoc31NJbvfU8qfhTvVNZfNhKq3UqWqgCht8HRqa6WAAGWcCru4due3kXyXh8vV9UL6Gd",
  "key11": "CbmSLd3mrebyDGADFjtmxx3DGnauQdryydXns3LGVBdqhxxNh6hCbXJvtGktGDHuiq8tUjaFRMA72RhT7oJDbSg",
  "key12": "3UYEaxExqLyiGisRM1B115YjvSwNDZQBNVk7YmbweosHeKNhybYTpqocsB6WBbtnnwAfotaBqhN8ErNUwAmze9NJ",
  "key13": "5wA4Xb8MGWtTb6htZrgfFQXxXDN7AY9HPtUmwT6sxv6SA3t35RdbBvgZh2tEyDQJ8tASf6rgKYH6bSNpJkRBUbGB",
  "key14": "5N1dTBRPbvgoVbWn2FyncJisaTRFG1NhSSNpu8LJE3a9JiTaFTdfk43bv8rh8vUbaMEE8BUyrWYP4ECkcL4o7N7f",
  "key15": "5bqsShWQpHhgPJGtbRCtTfpJ7Jq8HoR6qgYb3wZECD9eAogCnAkkMd8VeFbaZKWHm1vxU7CNY9qRAZwDjzNAmrNR",
  "key16": "2R1bPvRU2h7vXqMdzVz721juDibBkuMfSJmPU34oyYRWSv8PvKcfhWn8v89UiswmJLWkHAKMVcB1WmwSbv4j5Vyw",
  "key17": "2NopYDDpTetq1RH2fZ1whADpEqBNw1i1m23pUeB6Nv1fMkWRxD6Df1YTvpCaMzYmeVEBMYgfs8Kn47BLbKNkzFcA",
  "key18": "4hJ4pgmTTpXhrarUCiYvamLVCMNULpMjG1YuzBrAARiTa8Sr2k22xBvZ9TGhGxdQS9N3q9pYNpNjDVKg16nZF2fN",
  "key19": "4mHESxwJ61oEcGwsvp2KRQtG9UpmFM4qvwEemWwJtoREGPyGkbkPRxpUCyXYw8ctNkF2ijESQAJWNKwwwaewygoa",
  "key20": "LCy3mcUgNnkKjzXqX6dasaeiQ9rTqNMSXtmVs6AknWDeiGczV23nQsKbe131WCxLK5GX3gm2xYb3WTk4sUfFusn",
  "key21": "5zULUEgp8v2tX5MKs1aEqqMDdWRpANfoA5j6ziFajUkLZmkY62x8aPedgHTD9VhYDXi9B36bDuwtGj2NvkWCNpcA",
  "key22": "Duf6G4naEfA9nHvHkvPjANgm8mVN9vjBjH1hdS2wzcNPeRrfVipT6QCbMVAiuuXnj4KUVuWBZjs54y5bdiuAsyJ",
  "key23": "44u2b3ScfeKn6bPPBhJ13g324B4mfiQ4SMBe13V47twzqvHctkXXF4TJiAa3pjYeBafwzU98NDrVo1qwo9AeebQM",
  "key24": "zLKaHGHtNS715zsxPS8kUyyXtrjyTmkpiH9fRNCQ6DJojpuPdWYEj7rTJwzbBJ6KJYMXctHSnapnsHGbJRhUJTn",
  "key25": "2H3DazepcuHPvYLD97QEdhAi7pXa3GVtD7DNGE24EmtBxAMjvgmrumcAVAzigsCZHKLxFaSo4irQPmTr69u3CeBy",
  "key26": "eRiUieV4zZyy5zzUyzFfpobMHhwMam7EWuWfFeKRdCwLX9tA7uyMna1VAC7D8WSZRkZgDF5oC21MhPF6wK6DNc3",
  "key27": "Vbr9ThgwZ9xQJ5BMHnPgkMkpTBoGiWtojVXa49PFrcePNdzrttR7prt9exKjA8K5HFZr5cgvzqaenjGWBTvPvDV"
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
