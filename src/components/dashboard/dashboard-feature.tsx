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
    "3gqaJrtnd8uG1wyBx5uMuptwQeqZmQsQ9D9Dh6UAe93u59sL6yaxWikc5MApaZDCeMpekGWrHAhiMgoGKa1bZGaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HBZexrm6pweJfXjJWNBwmekvVHv38J29Awohrf63Z6mtR9QW7Uhgtex5vnPwcdhXxGDfZXXbpM484FzijANtwkv",
  "key1": "2T4ERZWCYGwqS677wGp52tEBUm7xnHDURpZexiMqzuECRvqYC1hKrKHE5rHCd1hXo6fp2e9fwfiyPQ7kXvRKVC34",
  "key2": "2e19hbvsLCYgLZ7cVmBS4dj1oCvuRarpuk7w3tYhu1NBcscHHTrynwZiri9FRNJ16XJCM2UjtBnqZoQat8KGk9mN",
  "key3": "4AJjgjWEvh4d4YYpp5swNWQZtBbRRCjpxwaSRLX3iswNDrMh99BVUXB9Hpw8gMEebMVACxBaFJmJvmS8KBMpQdXr",
  "key4": "3U6Gb9hzkJzvieke46i5ojPFMotUhJDCk1roPTrjq3FH8VCV3F5FUCdDZKEfr63KToAsZR6rMLnZHDjkwTGa9Fgs",
  "key5": "2BKXZVzDE4m51sBr5Yer76Syzz7GZ3rH3n6X1e6KbVubfVU5BUrK7pcE6AtkWvrevxT9BbdrreaVDBz3yUWdXv1K",
  "key6": "zaauJsp8jahKV53Dpu1Ki8nqy9KYNQrQ6m9TxC8QwPtTR6mK4mEdVxb5nbKZBpWQYtLum5mTEuZj2jcEvc9S8Tx",
  "key7": "2B3sXQAoAH8Yt57YPbtuFFPyvr7wGzro48dcpJ4QVUnLqtxPjndgHGbsrbkB41XLXg4113vTmybP8jSDpYdFmwiv",
  "key8": "akxJrauku3W6NEJ8JR4AfPcYtXBCqMfZ8BvjCncpHdzzhE4AbPcrMhLWxnGTXdKWr8ksa5zcQTngnwJA1U7A1Zh",
  "key9": "PiMsnv6KphjcriV3gGKYURGwCVBSDqDfs6YbjoEXB44AkksSU8qYFXkexMwmW7TbmAqLuuDgHeM5qX3Bz4UGV4K",
  "key10": "5RxUPi4ivvNTRb2d7Q8uABHiCTgGCgei2WUtgCXNZhLbNYehp1w9HKVQADAuvQGA79TvH6YzvquTDcQpCgWtoX69",
  "key11": "zP6LDyvzRV37su7qGU6BQjRRoy33ZBuidYhpqAwCryE6MbUceVhsdXn3MCygBKuD8LXkAPuKoXHsieU1UEibNT6",
  "key12": "5D4syKKVZVtFAUZprLyT3iZLNZ5C9V4PshKJ1fMB7YA3BtB3Xe5PSTYEirxaSYz9iMGCqrL6M2WtBKMmUiZCTbFp",
  "key13": "2eKVTXY6zQksujVpUK3iq32gPssDWdGLxm4wLumuZhuyDg5KvTYz5j67FyBdkS9UZRjCcugcxYHzPWNnHpn3jxoA",
  "key14": "RPdqayL2bLDrz557ddkNm3i5U2FmBmKDMJ1DsJh2jnjBLZ2xpnKSLXWvqCq4q9idNBocpeamF21h4x6HP8U12qi",
  "key15": "5yjPaCPunDBE7sVrSQqZppcGsyxrjSUDYTmzMNHKz9o3vtBYbweoG772HvhPwZVRd5WZ3qSzVbCVoiJp4b3kje8i",
  "key16": "PiqACgFBdK5yToqZYKxRwkfeBGYoiEJv81Gwh1kezV74tMPM6cHMDYX3CwpoTo7riJ97hR74TyWwoYnAA6SudiU",
  "key17": "3CsRFvKMMrpVYzfQgvDx8eDZLR4nBWWk8Q4Jt7eHg9WCMt46VDNLZVCfLJNuWJWf53WugLCamjz3psnscenTuWEj",
  "key18": "3iynZRYA3XDyhWQ99BcsoWat7KioGR2B2Kn5JnrfMJtCMAej7mQEDvx7oc6NMHBP76gmnh3yf7aWAtzKZqeNkXno",
  "key19": "nQyr7ZVv2s8XvTgrDwyJzcmLbUKjEMDLZdBXkvWbkX6aZEww15DwYd8Npbce4Ltsx12ZbGvGeCphs3RMCz6dPhx",
  "key20": "vLDR3ZzQWdkiTHsBtNAUuLhGA4VCNp2CyQfvZmGNWzCGZiZQE4dYLf5qsjYyUhuCGmfXcwCwi3m1vdU82JcBHj9",
  "key21": "2Msc46fSysidFmoRuq7SzXFGURrwpp8mWFmr4DyeF1FuFJsG6ZMz91iWUgSWQ3YdXMKLNcPBux531nYbZXU8LKLv",
  "key22": "5gwBtvhQTTURfpeUBwiDTTsfoEniLzQRZwp8uDbxqhsRJ8frbBsqfnVdapeHRhjjrmnyKSZvXmBkn94qd7dY5v83",
  "key23": "3kX8WaJMHmggJEvcDD1VdvJpHgAuSu4dXK77AVi98BDMqLwZfxEmosgjcxjhsKNRetrieuTvcnzf8g9UypfG1PsB",
  "key24": "4Bs4u2Whs9GzLF6UJwfmWkV4GWSL3FkWkSiMhzZ7TrP3Ed9ixYN6WTzvkx6qCAi1zEfyrLsrkV8xF1L6dRZz5DLR",
  "key25": "qp7Su3SWMiQashDQ8XyeS9DUkVv4qE6XBCU43EFjpZgDLWVBPyS1PMy8byqP3ojwACpkm1cWbwkV3SGUzePj4xF",
  "key26": "67YsEHdTFS8xVSS5KG23ZUsCKfuVLU8rRUcxwZYw8ritx5ahMVBQ4JPsj5wby7iq6Ztxkr9uiKEL2a4YFywap4kY",
  "key27": "4E8UjJ1XBNgdzJkGYKvagn5WShG3zNQREH5htF2cvim3qg4HWcMfhkE1Uwzim9rsrYvpuJLq339W6BKhSYzvm8Gd",
  "key28": "2MdkcnizTKNuryLDzwko7jX758pzxW1u32ecLvgpyzbKdWho8PiragP8ruUDCmvK75NP57AuLUzTq26z7erbbiAm"
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
