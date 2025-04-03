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
    "2pmhADvQAxB6sNewGGCpYMKTKxyqZbDAgCUG7khkctTteMC3PF7oeZmmTHCkEfnkkF2aXikwDLe6nEoQjb1j3F6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pHBWm31upevZjCHyk7Cb8cFFYtNNA2h8iy5TGvRbjii36E15sQzS4iM9diEWT9R9D7VAVnPLvpoqT5FrFDx7TP5",
  "key1": "5tmixdYEB1ZpNCHTbxwwqi62YG6dnAPFSXHSJiEBppUBtgMzVfJ9Ehugm7qC8MyeBW1kxZdivaRg8mA9gVJ3ZidU",
  "key2": "3Xq9pszRMcYpWgxKv2UsCFGVyNuNK7ewMXuF1AWDDs7EjN8FUTxcp4YhQeL52CuoidQbaGtBQQxWN2So1sM72uES",
  "key3": "3hQdCFeQKvGd2gGnRHKh5hBU2YodKx4gbv8yPWMhUXvpBjom8K8hLyvy9vF3ifSR8gwXNgSDQ8eBozVhBiSgUbZ7",
  "key4": "qYoN8W2YRvoUjihjxHHuAQ1cEC7UPsXyMAFKUhYKypEMopA59hQKchBsfXVwKVhVwfC888sRN3X6d9ZnCsvoKfD",
  "key5": "3JvYaLA95BNBnqqjJuG7jEJ4wMH8TsE7bBKLJ9PFcjgFmwhawUAYJJiKRodQFYM83XryEN7B4uB4ThFzkGXHVfAH",
  "key6": "246ZkNZ56qf8oEtRdHexeX7pF36JRg4iEvHzdqTSf5F7eitQspk6SqodWy7bA9gMVwiiTwtkgFfjhKvHTD7Vvky5",
  "key7": "ixZfhtCzfHkvaiSXhH8wm1rkmHJjuggTkHSnnFNYuQ64cUJTNgMg5KgWDGVV8P26mZNfgn2TMwgiQejP22PscHQ",
  "key8": "4dbPesCSjbPAd9JtyEKAikKcj4yLATcAagvyS4zEHaRHzj6imJs2kg7D7dNAtvy8VZYgRmWyTumdHMfKaBnXTFuk",
  "key9": "5FR1Qv9cxLDjSoZAxx39EvKccJYk2yumXRbRX3AyodHGT8Kga1GTbCTWyWXXrwqmisdZDDdUNipp2wBQNWfaVTxY",
  "key10": "36RVh67ynTs2uN8BhJWrP35QNhhTpfN9fKy17U1WskuGni7hEAixK5t9KXA7Yb7f5Mksogq4q8qzSNHCpxUqDWvF",
  "key11": "5aUbnJgPuvoNbpkqGo7ShuDfgMdQ6vuLfKzriFKfg3UazS1zypsUXjh1GrmFV67Ld4siL8U8Qj8eTQ13q2f5UHJR",
  "key12": "52C3DSL5qr1rH7h8gQebsMpxZ2WmxGtQFzhNuuzM5tvgs4Nwr8MhgHtBE3wGjzvw3oZqBb4KUo7EXpoyf3AMm8rx",
  "key13": "4tf79CcefBMGC6xgZ5ysDfngyuh7tC77uBVE3EfFLfwTn9HWEfxu4pHZkxbWRZRSSS7hHA6LtPW6C9VHZrCceX4K",
  "key14": "4U4waM9CzxNAVKbfb24RZLi3ecWum6okt9CV3St3UnjvWCpj7BTsrJtGpA8g7RzvDN13qAgJTPY316gNuHB3BF6G",
  "key15": "2ZX9yw6ixH7figaFKTYVReDx4jZQ6m7ofthuncPEfPGx952mqhNq7gEpaPL5iUUuEMCdc4whHEVQZM6HwWCu7p2T",
  "key16": "44ihGWHmfJuwD8V6PQNgaFsUREd1NVYNr2NN2kCuvcVcg5SiE7nX3Q4FApEwJv8PEcfd99ifR48jgpvLAEVX3q5b",
  "key17": "3te4tYU2LcggoXdgMaqKGf93UBasrM7oB1C5Ysg1PzVJMUxqXdgh4sG5AHKxadj3MUXu38Z4saovHHTPMtgFBYD6",
  "key18": "5JCnZBuuNU97Q4yEor3WMrzPp2Jvi4NL6HUyrvvU6r6Y8rzktjpH8kURQkDQKbVFmWuzv1rPqviAZ3LvgvkVpxVr",
  "key19": "5fm59aXYt8ppm34btPEPKMxwsqAiTiDfvGbyp4viBEQ8qDLJapYVZuJ1v1VxmVsXgpfNGpHhnMptfiAoNDydSVv9",
  "key20": "5hEuS3z5HW9Q3HHqcWDove2VnWrcgx1A4C7GnsHwU2BLSLRovZ13mWQYpEy5jtHeNEwfpSYHHYBcdbqchXkWb97",
  "key21": "4ZuRe6n87Ze8Y9ADXc2UVxv7peM8UAMQm4SLE6Cm4iftupPxh8tQCJ7NQcgcjENgYZ22fTorShUL4HWTxtaEuTsV",
  "key22": "5v6odSKgsgnx8aNmzVkG2eysepK4oVzq2XLoenj6bCuKjm5Yq8aT2KKR2BkL5x83mMTKNUvkh7oGvFynNBSZwdvA",
  "key23": "39HvQuTh5B21MB8ucd3q5xgPw3ot68A4kFkFqbiwo93z79y1E99j9t2ii7YvA2BHWvxjRCvVideuAp5W25SMp8F2",
  "key24": "4vRF4XJYBajJsbLnnopqaw11woUhdBgdYLuiVweAuxqktjWkfowXuVcTBpkAYPeJF6zCb4yxdAMfn9dfwPjCerpR",
  "key25": "2puLBZCfRVzsds1HevKKXede5bZ3xit7RomFKt37GHzFLoXbrM4awRSatad2Seu5yZxEkBuioUybbss8iJKXycss",
  "key26": "5sceWxZRpNPGjswMKLd37cyKG1FkwYaKVsYfTQcWD8wDV26hwBbDEtPQpvyz2jt5uzpMAtLab59eyr6b88VMf5d7"
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
