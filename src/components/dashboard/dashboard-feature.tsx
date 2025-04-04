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
    "52yyjcy236DfA3tMCg7NXpeGyJgvNtuCJRitFzK33P3hycAMGQ8S4dpv7mE56cYrJLGKt33MhNZyppXSpNYb4pnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fkkDsessZqrRB7RWJT8ke7BHVwuZzmnWgpuMd4FpAHtUAbjCQ4dFKtMok9Gg84sbTjyPhUqsFPTFRWtekmaGcXg",
  "key1": "5VVc1DsSGkAvBaphYU5YDuLHJEf4RxNbFTph8UCYTDGJfq5jNsc77XcL6AGuXdwY7vJWA2HpDRHrh2UsiGtMk88T",
  "key2": "3rBfqa12PkeTgFeCWFa9VjUPwp82H3QVmExZ5VYb4h1Xc7uyaHXB7N8kTsg5XZ3ybmD3aXw7iPFBKgBMrF4inRKf",
  "key3": "3dd49KRtJ4qxwGrbUNfdkcBxHP3DuoNaKZXfxo2nTB4PaGTtEbxJQHmvKLsAXcAwRp3pHJv26bE8SfUUDxHm1fJa",
  "key4": "L9mZSa6vmGrgwS7UXuxghZ3HaGHFUoH8VZWSNvzac46hGAXuBjBrnLpexR9T5KXwFdPod88Cx8FeXJhQU4tV6wY",
  "key5": "3fafHvfq54AU5Z9zuxqr6XFEoKCa3t3JTSmi4cjYXoX6ddA9DtKbp2WSfnj1CFtnVMyzeEZ39jBChQYMw614EsiJ",
  "key6": "32CjvCxGYB6KEvWSi89sCZbS6VYzfngSETkMGcTUmARdUGi3BN2XaLBucek1ZyZNJvtUCYp6THLvd3QCevZbx2Wj",
  "key7": "34955L47wkoicwepmfnXSknmczThyzb9e1AopAWj3hn5PEFaszrQMToFTwxyTCiaQowmAK3AGHeuWatGattrCdnW",
  "key8": "3gGvWaRqSFxz9BSKiZarTxdokEArXUvzhY22XjynSfTAozzZPrWF3KwKyFam9YPtoPMBMaE6jqbuDCo3cY6QZutX",
  "key9": "5A9Eip73GYW5xKi5hDPpLaqmud5KohBAyboCmiTCP85mLzDswDmVDM5UydBTuZkMrARvBCMyYK3z8G3cqQ73YuQE",
  "key10": "2YrbhcE3aKhSpmCa9yd8JmecWV5AavdaAtgkPqaq9w69SPztAruoUcWwvCPpKhvZ6SEpT59P1wQ3nQZVHGujYWrS",
  "key11": "48SASeibyJpLeVLm9M1FjxwLYPSpkmh4e6YbqnsQ2mLNv6fcJ4k9zv8y63cPDfAdoTRvEFQTSiS8RiD82RWTFAg",
  "key12": "61SfuqYQ7hiDhMtpMYTwcdmqNVpJRpJjgaifnSvmQeQYUorcAcLnTZSML6PjN7bE2p1XVuFfK1zxHUrMUfSeA2Yy",
  "key13": "3q7TFfuDbb2o5ejMPjzkMmR2EMR2Njm6MVptaqG5rFmZUXsPsPvEwrSYHRgVj3qXHCxogMMyT5yHzi7mxrNg59Hc",
  "key14": "2FERwfE2c9JiUPEJ6Luf8Zj47ejHEpn9Pn1CbZ8zC226dcPpZxhsVpEBagQ41N9owEUUEAwV4iVVtsRrvSLmy5Ev",
  "key15": "X4M9b8Mb4DomDzrw92LkzjkjiZyruV6892DuwSw5db1fMk2C9Kju6GA78sUaPB6ufgNJ3i8S1QQUYDHAA8DD7gM",
  "key16": "A3pfJjwQuHSsEvRhoH6ebJecVUvd7q1ufiaBsf6adLyFWVwULQ8NDwtd1Qg7jyxYR3vMGzRPhgg76JyesTtFm3R",
  "key17": "ryZ31b9zWekp5mCk7dZL5NMLJy3t86t7sxuTfJR9J7WxbY555ecrW8h8hNB3fejNDkMHLdsRUG2sDErqV3bwZQb",
  "key18": "4L3ceoZeNGaeqNZSDtNHkJULgWd1tvtgg9PsQu7h7Wd1YEmRUaHQUkgrqYVZkUcTdwaQvb7gLwp6sMkRBfRGzn97",
  "key19": "35TBdXXusfpz4SmWv79FX2nktVTAnfoVRjshsSHVacv17StfZv3Pn4bvZFpWRh4vXMbJapvUajMhKYvhxFGCnPsH",
  "key20": "5BZL1FEueUJhxVk1DKqLLHkx3r3BndLY8HDr9sGb5U6ELofZypaJ4sxP2CgmHUP4P3pnWCbqyxAoFneLHAArK9Y2",
  "key21": "35ngCttPNxBg3oczRnQrKT4mzfDVm8Mck17VFRB9DG16Du6CDReFj9bWT3bEPBfc8D8ungMJVA4ukHgj8zCKNKx8",
  "key22": "31Zowwb3hcBHhASkT9cNAfwq7coK2nrPFqSiDg38SgHsHcXbEe7fLQqRKudmzXMY1K3pku1aRMVnqm7Zy98r7Mat",
  "key23": "58957eczWdevGpknGqcMjP8tbhmtjfgHZ9SgWPMYvzUwF8ZyR1FnvQKsCsMs4RyKkjYq7hGoVa1JNQt7V9pcQ6ia",
  "key24": "2rzvjBSnn2ucqSbboPHu88JLgMT1sFHKeyWGxtsBjqnxRg9BURsAJfspfuYCzNYRTDuN4UD77iP4CFXWbtafXW9H"
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
