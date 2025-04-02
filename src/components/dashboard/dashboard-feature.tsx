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
    "5nYjUmPQaT6iAWQEaZKjj2HUnFtG6nMUCyxJdzJSEfnxdT2FVQv9GuECbmFkKdhrt8RzQq9Ud7bbBK1FmTZmJ81j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srnDjsK9zeN6JpgJAFK49yR6cy76AFQ3QwmLNbbUdDZubdsp1Fr7ra5u6NfwEN3aADTezbe3oAmEdjfyDg7xLnF",
  "key1": "22UZLcRcxECd7P2qB4ZzykBZnXpGFG2aUsuY3DwNnPHndJXX95NuzrsEEWad89DoDq8taKunpTdUAHioGnPHVJHj",
  "key2": "45zRGwbqg6XCL1qz1NGG4HjeFM6h5nVSr14SKjTB5a7TLBfqZYtVhV42g18DF6ZwVEEcrHEs1WfrHPeyQiYYVTQf",
  "key3": "3YeykKpnn29QVwgDxQLBig6DSyJVXbbEEQpnf9UX3X7HpV4E4EziyDm6dbVEUKCj8TT4HXzn5dThGDFrqgJUDMym",
  "key4": "KexsTkdmPTRjbdhkGJHbu6VNw48YoKkKSJiUQj3kvc3M4v1WwRoktRtHYkDKf1H1vZWA4PgxEfQqFZQcfHB39og",
  "key5": "4UMPEs5oCVVETpX6HQ4nHvvvdYqQ4MAKDvQbU9R4MLi49ZNrNaStEaU2ce8ZwnNFAk6hsd1poFy6o5kWhEpN8Q5S",
  "key6": "5D763hmmhR3jQNoZD3vWobooHtBgQL7HoAcPXHRqpttzV5DJLhfBjtokpR3pmsNKsfHerCxjxrw77SR65Mi5CbZj",
  "key7": "XrAH6dH2WQCrXSrwLZEnkXm3xgeWMmTNuXZ6CoPRMgnFWLfgiCYECnzHwUqZhQ6ci1ccZqgNgrzqZNzJ6qchRRh",
  "key8": "2m3m3FH4ccMW6EmP3urUjehtWozLwNjZ4PHZQLPj44jHPVu3vYD7nbkX776dmqA3b6HkvRUeQvnz1YkMJ2NEEynf",
  "key9": "671GHkxuKBYE1J4e7xfxV8PKmZde3BWaxnvbrQbDcSitC44T2q9MkQA4nHdHBctBkcbheWiadNKLx5WVQFHgNTJz",
  "key10": "54NGGueUnJjHiv5TsVH6NP4qvEEoAn5pUCrzkSWE9YWnt4NBfea3vBf1dCVDAct1EywcchyrgACBBSq1ipTeLmy1",
  "key11": "pe9NXBAFhU7hu1Mc8CuwX8QNV3rLe4pkBkaKvT9yfXzjLTVTCKNdcho8yqByfykMznFGWE4WSYtFwCTbJ8quwgV",
  "key12": "23VTt8QEzcYLmBhMSA1NRyZD7NraXbRXaJMjiQk5QrGYgrPfgKY596FNAxzMQuXbeiheu6MWTD2mEtZsxQ5ViNp7",
  "key13": "2ke6gnBTu5KxUSWExpDbAaPZRtxnGk8pkEzXSQDWPVQHndBraMQMZmUQnzy5Cgsy6WpT1Wf4eLWKQk2s28vCi883",
  "key14": "5uHV52vkvcpMKzLBF45AWozGV7GQ1HnPPfJTnFDrPNmAZWgohUQuJth5ih99XfrcuZynuQ7s4xevdvrp9pUG3Udf",
  "key15": "4z9gm8pFL1PnDg7LzPiDTB4nLeyQdQZiYwd9bkpopwjjqoZ4fNdV5xwT8fVkdFMAuYVXmEHE8YkXMsyVroSF3i5C",
  "key16": "21C4Mq7gm4YfsxTzrk268aeqdhJJhV7nuwL5V58sNPmMs5oLbyY4JUULUjVxjJYuFKkeJBnyiGuo82bSz5NgHYs4",
  "key17": "eUxb9wzpJpDETNqVWHGe7MGjWw516NXzdmhTAVrzL879Z7n7P5MmEv1V2777Jx98pM42GRq3YEJD9onYuug3xZa",
  "key18": "5NYzT77NkFvkQ3gdZMGEGZhW7UfXfR3SvLEw5rg76Spjwr9etxDMR9YKSaPV6MBn5VDF8xNvuoYGBnhUU7NjMjuY",
  "key19": "3qi3NERpTNGfYVEuCU59XsfX6QmJ2DsSqeSVCCKSqgF1pnJZHbd9LU27YPnbuBvzC9CUpvFXwPWBAFBYsQbXQFEP",
  "key20": "5qA4GkkxN4NQ7cxzsrNY4Hq5kuTHq7YyxPeq7VgiiHyR9iPQJtSogW8k8ynF5H22MkBxBAhEVxT4Tgmm6eNXsHaW",
  "key21": "4sEJXMazNRnycZggKgck4FC6HKE32T2JrQRGhYwSB45vcWyX637Y5AJWCgmWekoRpm2cf2um43oDwK849nkt5xXS",
  "key22": "2qqVQ1ETpGhXCN31pKCLRLzmm6MpA5YUN8wchwZPVofsHYbypLeLEjVKqtpDrDhTvZwpMqiVJjVLFd5dS2P66egk",
  "key23": "3v2rSCafA6dQhgwpgsGXT6GgDAzGHADc3tQRYc7qPn9xACqTBxfsRCWVac1PEqojFeezNjBLz2zRXYm2qtnU23Qw",
  "key24": "2q2QXn5i4PeXSgiVjdiWEv5Vh1U24ubMoY8j3NABmuagVsS2axpbcXX77zp3AJ5ybjP7dJKxwtLL5Q5VRb29ejUb"
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
