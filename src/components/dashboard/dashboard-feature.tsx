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
    "dFUrSENqvYXMdeDGrxmJxtKMUGZ8Kk5DUCb1PvBUzVzHpBTnm3AJbV6itrTbaDXY8A595pNQYaMnfiaexP439iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zu3YRJN4aB41Di6cUAYAB1PDmQxQd9uu5amEFF8qSGowd3jFb4419oyjc1QANDuZUoWJ7ipNffjoru4NbfrMhCu",
  "key1": "T8sooh2Ei8FyBcb5AU8fvhXTEiBS8QNVp8v9YwttCfjM5M6FTtUgPYwkSG29jFYicjbcDy5djqpmY9LJ7JoydAM",
  "key2": "AWvLhMo5mQauQCWKs9aVGwq5AjBqHLpcsT5ZGis5HGMaFUqwcb2ekPVsdAqFbYcAJTtibZu3nBkFwFJj3dNQTVT",
  "key3": "vxn3r9xhDhRHF3z2mN7GH1Hq4HaKdfNZwV3pL1jXkmFSMxwed78EGz4FPUchhy19N7c3brMs9hKY6saeMn3VcrG",
  "key4": "j6k9iMeE3tYNnEYpR31JxQMSbdHGuJN8g3hDot7YvMKj7YgQ8eph7ooLBYrZKW8homdUz7tRxCosNdAt6LqEvsr",
  "key5": "4fmEYMFjpAFrheyFh9FLy2JN51FXSCioqxn91NVhwHPmnU1sK2VP2x192JXvaD5ShQATeDXJAUwkprg6hodYEvia",
  "key6": "4zkYgGbLWo8E6L5m2mbkV8BYCjtUEv8K3SP2kG1Sbk8WJT1AEc7eZoAXfVCUPwgpRVfi6CLrcXvSkN2Bz9SMLsD8",
  "key7": "5WPnRbhiLJ5tL3ZhgzqF7Kja1pyowJv7TsQ8tfdTVx8zQqAvKywumLxnKX6GWqzPxowfHwSVhM4e3vAmktpXj54L",
  "key8": "4rCFNHdYCEM4kwr9c4C6VmZe3N9YXMzZiizJEE6RXLfRNDeaRUAfjFmxEbwK5sZcTDxKr3s1fFfuyaMEEq3fA7qT",
  "key9": "3r4qR3gnz5vp6n2kipxA1tzncsmd5q3fwB1gGEnLnZp1LVot3vzgyRGAaB3Wn3596qJrHgsbPV5RL7N64AsanYDZ",
  "key10": "5x12E1dyJ7MMyjamT9asjPynxHxJSRZMuGcimdaVzC5kLfCchCxxhuCsw2hrs43WNSrDVxDpmjrgNP9feuoNT1gv",
  "key11": "45N2QHfD2o7AZsmvJpSt4u5Hv6cKhRgDXwkVsQTdsq4wsXvmiW4KNF6WYDsVB3oj7ENqb1oGtatBWL3BykV5UKhT",
  "key12": "2nDSfH38b2pHr4EWn8jpgSCXYpu5M4FYskccbEbRXpytHK1AugLA1UrrrEjd5ELmBkowYRiNZbSuc3sP3wcbVVk8",
  "key13": "489V3CH5vj8DyKnTg4vYtmGmTCMV6V9VU49gHCgr3NcXHno9WXgQkjiv6jd7zm2qeDBwhpof24SGu1sGZDASTtRH",
  "key14": "62RvtFAC4py2Fde8yZJkrrzn1K8dYGDRcCj6KLkWBZq1ezDhb3HQTWnEbjDGJnUstUni3Kwu5LzUBKLdFNGDRDXM",
  "key15": "3qBW9Xisq5VJeGuM6UBG7n7xQQZA47VT5b88zUhvvjZtQUQvtFKp84poDmv1ARhoyBPds5ZCxMMPYv1otjFGJ7ip",
  "key16": "3sgq1ouqbaNtHX6R47m9LLBsoe6xQjW6LUiVgFtc2TQNVTxZVs6hmaSXwUXCaTZjdGcJcdpxnBA26RZJGQHUmAMN",
  "key17": "2aV4mgZprd51rAirHPo5jQZeRY4Js8ZEwvGyzUgR2pCMfDgvVbk3tvcVvii8LyH6PRuZECzaG576CCFjeXfRrXuP",
  "key18": "3NHt25D9GTySGx5SUv376kEE3scv8FSzVBxAV5FBH9K92MrKuvTWe5kyeS6KmRK9DzfD6Prk5Rx8ASsRuxhG3dFM",
  "key19": "5s9PBkAARQjkATCzD1SNfy8unLnz893W1BcYhGFGVoeR7TCCB4PWWAhrc4r9ctfkmy4DwcQ8rrZhBMRmAaeZ4LQa",
  "key20": "614ouGcWb8tHt3Ny6RkwSDS7ctEvBHukq2XFn58Ey8x1MugGppqoka9oWXeySRywrNrKu9XFYQ6FMGUzynaAhpZx",
  "key21": "2fVy9Ea9dode9sbfe7eW93vzBmZcVyonY6vcLKYcqVFYLQvNKrPcgt3MoaJxUd9hc1LuCjEaUQnubrXhYc4AJSZr",
  "key22": "24AxXnCHJjXhu9QgVTyJAQ5x5JSgwkYmGcEf4w7yZsxgjNNwnZ5DHEcuRaZAcz9E5ERprmoJ3xkmHYa1GzdGjrsG",
  "key23": "2VTtjcJJXWAF1ARkGAitccdHqKdhgZNnYHjcBacCxy1BtByVjpS86qVge8kPBVuYKRzNnKqFKcFmHecYR9R7cmzu",
  "key24": "66MSsmnmJKzxRR2DuDWbsi3geogRhcMSj579UzmaM7jYaZiBSxRCqEhwvwicuH9URP6Zu2M2UZM3884DACQDS15N"
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
