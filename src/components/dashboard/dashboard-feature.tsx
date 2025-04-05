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
    "5FbHfXCp7LehUKdSPRzL4ZYXsPAQZjUTNSxZWcAgpbvaj5AT1wykaqB4eRGGYKofgEsvwg1tJ2SbHNHPu1pkyzkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kXeRpJXFJDSUkfsAXW6aAMHLYJ414w8dMooFCnneCBLwJz2Q2qhCQJoRtgSYtEuLfitbD6qqAQAQYEeE5DFvcmv",
  "key1": "AYQzpJfdQf1ETa5NqDTirxTD25z9zTKeRJ69dv2YDurBW5rLBtK8pHqsrXFvqvJdR1gCrPBXYeHcW1k9LL14Vg1",
  "key2": "2HDiYY96mrML3FYcBz3xV5TByohymk67aHuVYszS6EdhtE7NpbCBcDiqbc1QAHBB4hvWquqsum54zaPusV24oDH5",
  "key3": "2AA2eWkLfL56tMiti15NAtUCKCc4NLTiPpX7NVyPmHnQRU5N7LWFVK5E2QPeQjLtyzYJ4B7tZgm8gEkXrttH1t5A",
  "key4": "3vuu9vbY29mBxakc1STLJJSRveQEkBGHfkR4GBXMNLvuByBZw4heop4iH536nkQYwhntiUR4VT3dBYnvmn9cyxB9",
  "key5": "5EN7rTfTEJPQtdDDphkptHnKmGukmT52FqYjruyB2eWXWNnLQ6VXsj78381YgFvvN3QAzPHk5UZpFawE5xJZ4ZrK",
  "key6": "5nUWBkLcJKT6MrYqZvD3rgCygGPVaUZ5WkWQHafN2UjSwVx9t22Ktvfhj6Yg29aFM8xiynfu6xENNJoBbrt2fMa1",
  "key7": "3jLhv4H7hfF5A75TzbGxvEwa7amXmu1CRFmMxqUXapckypegjTPJiZLB5DC5xmWU3GdMeH5nL1uGbVxSJZyGnPWq",
  "key8": "3XTDuYd9iMkU1fhw5vGxjr6Kq7PFYS1LsEGK2w8AtEr2saw5NrNwxV1SYZqac2ohT8BxKSXiLYt7Dy56LEQ5Dq5C",
  "key9": "5paKUoVasEKZgP5Rmr8pTzYbLAx1nHsFL1Rfx9L98nrGR9JWhH4Q5Tmq59KfwLJNannUjnKSxPRCxxFxYpXcuKhx",
  "key10": "5omzigFQAjNGb3fovee5Mmxq5gNBFp9rfn2AxuuATTsxc2ZyjAj2gE9oPi92WicgwmPj2bFzWYarPvoAPJddGCFk",
  "key11": "2i9LTmXVo6DFMveVsBEykkcresP1tJRCgAzzthgrNxqfEAfEzQ7vS8B2PkMGLVxybbWN6sr7THwW8ob7bor5w3wo",
  "key12": "3XcyGtCMEXsrbNBZipF8B2BDsGC6zm26SY9ov3JTp45xNoF3NAQRtWiYvK8s7PCH5aQzD1w9fLHuHzBx5qXiRuXw",
  "key13": "5b7c299rsVeSxQGnPcdWtsiYH3BKZ4iEBEES68vPxaM8Eednfot9dq3pHywgUjcXUjGufsVg7k3FaYkdGhtGsbqG",
  "key14": "3yjEwyKj2VN3ESkx3Er56ZzyiySBVqdBrvQSPs4qmA8Bu37VFXmWzSqZQfxa8KmSWfH7PpDHQAkutJ3PAoW3XV2c",
  "key15": "2R1FrfcrkLy6Sk6EdnAGqXpXDTLaqW3KJtSnzWxkv2APF9USBUsYp1jHKvZF89hFUB8WKRBGBkYt64JsS7fetcns",
  "key16": "3efrd733bvvXpRvjWrxBpLLQpPAzCMra2W7vGVTy2GjDCqBhhnvF1ZPmExTC4nhYNUKTGamBMjE49q42gCSXoHwW",
  "key17": "47dmgeuk1beCCMHzWoMXtnosZEqs9Ve5SRYobwuc2pY4mZePbSxwyMMX86TFbQZuZfeU1uSXkPA1HkUjZ5faAYmj",
  "key18": "3d75bDo5jYvGBBzz2qM1rqptpgt2P8NTSvB7bddYqodNtr9Mfj67j77H6Yrd5MheKW94fnmiVUZJmQRd5nMdGZjW",
  "key19": "4HVHix5w77PSRdQEbXDKNThmYFRW544e4EHAXFg4LLRmnVUy6eLzcQ6CnmSQHAtgUxkyJcBr4EiX5zVJKbhtMFSD",
  "key20": "424TXLjcgprDCeQzwuqRCqGNZJawWTB1DaBoQw6B1UqkcmabcUwccuvviQfb7rAyeoH3CZvxmjuCSTVpVWr3MYsR",
  "key21": "4gA8FrDgz7t43uhYiL3NYmqhGFtJze34RGjpGHyrFYewy9RoNpyhWpbvMrNmCWk5WDoPHTCxQmTvkLoTCENSu4uF",
  "key22": "5ZmF2TyR754mSU41n4oq5j5AWjdCMDeXMySBderGNXMnvz3vsRpR2VPRYkZ3HZH9ugm5ucUuvHCmmkYcEcmM6DKN",
  "key23": "2Hg1kzXYB8Mdxt9fNTkj656wgYuzHc7rdsitAwCnQ3XxwbovXjkQcEBM8k2iUfmRzAquhmeKF2uJG4DwWWfZU5eU",
  "key24": "2LGVXEQfh4diyoKf3k1uQxmFdYoCRtwCyiKXM9hUhjxU3dh7YBBw4dQk2AxsnxSYzHak3UB33kVf1ALMBxzVE45v",
  "key25": "2UnBs5FWZdK3PbRB22vToR6YSBwo56QNW61XdoTctBa6UXWtdEgznb2U9QrhPYi2gvCWRxNAMSUAp9LSpuEVDcSS",
  "key26": "61Z7u2ho3CywA46CrsvQ2BmzAkmud5FHKyx4Tp7yrRANaYQsuqsN6QehnbnVCmBbfzYqWMPsAZDvfbgxdzb8bHUT",
  "key27": "KW6MMhZsCkFXPpefqQw6KkRaYymGzW159vGkQRmst3W85zkQRveoKa7cK6XGoQhK3wmWiZmeva74M4wMVDKsCPy",
  "key28": "5tJcuB1uKZRFEfbKB7gxpdYyGUT2uSREZRzKWHAzFX84Y3FdmSu1RNwarPbT6tYmHqZ6Kd8GtqwoD3VFeHhpRMna",
  "key29": "3ULLGTZyQJN1FRW211RvFU58FhcnPJZ6bgUmzsD1ZdMSeTHVU1XrYJiY7aZxAat6nMLqWrMT1ApQwPPZepfFoQgR",
  "key30": "41BJyWyeQPfUkevEA2LbULz1HPmVpeSnKq47DkZL3eL24re7ZA4Swr9pH63JfiX6bs2z7Xuv9QWUhmGLF26NvjVf",
  "key31": "43XdC28QVDE4eUPe8MJYeP4kdZtmpo3yJfoYEA8pjiG5oXPAQfzHqwTqY9EmSpP37yGnMJcZGxJAZH6xNrdbEYco",
  "key32": "3NBw1VMi8Mpsj6FwHmQj6ScnSMd7nJhWiz116aiGTEjnrN95TQm9i6rCVfHpFwzoxoWyuRPpahbNsm4vQJxSEBRc",
  "key33": "5g7gK5g4ke9AHsCnJC17gLCWVnwwKGBwbuScGhgZSbj2hBXsegPGByDh1k4nfXq46iyj3e1bN1ebyXAbvyuUW71V",
  "key34": "5V2wyQiyiyoDoHPERbVVVNbApdntW4MhAEHudZFYnuTSXnMjd1w1aUqAe1qaPDQvyA4jC4hLrmAnHFKsMRBwZMw",
  "key35": "urkoZsadkMQhyvzTye9EL7QdcyM34sMrgKfbPBcLL5y7PQB9NXeEyvfjcZCE8JoCCx19fLnfCmbKWpYcz1VK3uB",
  "key36": "41zqkRPbV5GiNmpoUXZPVd8YyMDBESCvfK2Nsg8ebQzj6vTPzEfsM3DLV5qrzDY6khexzZ1CFhVpKZUK4p3qrs2z"
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
