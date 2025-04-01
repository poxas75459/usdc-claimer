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
    "2ZPW1ahVxqmzfcoX3YYhWCyCxZ3jReikdjNQPM5UVHismpQrZWqnVEDVjQyieGNrjeJviUkzj17TvF5sifDKctB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yB3tJC9TLj8vz999uAU7gxVjw2H5dvnniXxxoG1RsPiNdozncaMqxwzZMKPPHDz3FZTiLjKkS4WpZWZpJiqdFp",
  "key1": "2V1WB6FfrQSbLpG66frahfXr63pdxtHRFbxYERyzQt3FGfddp5krGZLdg9VJZswRSPEtgzS5CgcSJh29LeXR4K3",
  "key2": "22WRphVRQkYijsqSNM8Sd6Kcgb1TMmSTECL8ECcreggGPnbCEdCDge3C6TDj2af41F2KvUHLAj6GUmTLuEYJWMPP",
  "key3": "2ouVqHFv6c26pKEEb9T7Hkwq9on9NGoTfcM8EVRN7YkweVYTZDkcHxJ4hWprKgxBJo759afm2nMXDvT392jTPjMP",
  "key4": "4dLZmzveMqSESRSrMJ8xFAncMFbUD9K43eK92RQbYoRnfXqbRhYMumYde28TAKcB9fdrKb2CHhYR9WfVajtKFCiD",
  "key5": "5Mb4U6brKViRBrAhSgqEEng6fmkHHZ9s9itiSDuXFNpjeDR9yk3RpuvwNNfo1tSAKi7pZw8RiEUsaFcATwJVavLE",
  "key6": "3Ay7cTEZYhxXaWyGDzhtVXN9EcxwFDFHneb8kDum1gVkVkofdwifgfem8GAJZKTsCDSriry3byFqWFQhGVNsbuey",
  "key7": "5j8PDZuf7XGwtf4vQ1FyoVSMmbk54STp921T2Aay5FnhNUWQGAbMFoubZYPcx8Vf9VzPUiczjSooFNS8eAJ19Cc7",
  "key8": "4K6s2G2NqRDiEnibUNVuhEnkR4f5qV4n9BqWmuwkGksqhWVGQc17Yd2sknSs149pq9emk1hAZxmog7R9Q8VqXa6E",
  "key9": "5Uv3evSvUDeGFhV9EnrcyEt7bJZEEysbevHWFKotCg3g1jA4B9V9DkMPXGkp9DDqvYKMMB1e8XFCyXY91ASt4gac",
  "key10": "D3v6ju14ZyAWhAoGjk4XsQ2LUAEZ2GRXE8awKkQJnqHQ1TfwkFXbP2SXnjLh9ZHKLe5XVvjminegKQaiBpLgsqV",
  "key11": "33vq5YY1F4m8WMyAFqBrAkCd2PbRsQH18Hp1mrvUGXaFXKhzobHm6ZC7WHkuwwdjhNRBEMFAmEci2qpWZSH4L3r2",
  "key12": "3uPbAbw2yxJKNsDsipWX5FkR6irKGNsrE49qJmzmmavse2V7XmPH6bb8EcAFRAWFcU5Nt3txFNawKy96NwnDFWxV",
  "key13": "zk4gGogdBpWoWFLMHntRentSpYB1ePmNDy6FGwEXxGNG1JxucfGNbNdLEusjJDj97C2JAEep8nS7QLQbJKqYJpw",
  "key14": "3qsZBaEBnkBVFBxXGpi9KGeDj9wiRCn8ibu3tYGMW9MXaryx4kEoPNYc6tjXCRwjtTVpyXa8p9pj66kPnri8hNEy",
  "key15": "3ALQtWBvoGhTFCSWkbFRJB9H1vriqsXN7Ps8YPDvh3jde52YrFgxabxdViFjEtwacv57CMsW3dYAaXYJxNoxTAsY",
  "key16": "3xSjbXoejcvnXuwksQSuSRXfbfo3Tx5cujNMzVbFWEfaR3gA7S1CtGuqBvuUqct13XFpxHKhr9Ensa7NkiBPzWvb",
  "key17": "1RxkbDB7z24UVoeYmtiqyhjvYP8MR7R9wYzVHR3B85wivZeQ24S6Ya1kFSV2ZAPUndSBBoHv69ktTqaVRopcqfQ",
  "key18": "3b67S7kzXXJzJUzyHjzN6juc9GbJKuXxgAmmEhbxHm5CgZYPu9EG7znVMTchgm3QPRVPvUFHyiJMJtgXXcEC2bZ6",
  "key19": "52QtV97TF7H96eb3YC5PBqjcAhWNXCZUYPY3c6XM39kzAb9hvEiGUWfiv7kSqtj63kSyj1BccYmH1sHFehDLbNB5",
  "key20": "3iLAL5xKH1QaH6yN7JQ9j6xZJz1qznw7Q4ZE89pEtTCDRJqWNEwF6HQMNeXddZP6hZzLMkK3XApXwVXMm1b56Hn2",
  "key21": "aSjCLLpmi1u3xWvDMW9cJUCWfYvLsMUTDCDqKrN28XikT3vKhc1LteYRtYnK1NYVNYn8dfUQvvEZQQHeBTyrcXn",
  "key22": "3sn3tgHQUQKqZ1srxjt4oxQaQrVD5pjZD1xpA8XmhCMvXjViiKLWXwbQRF91YVpZijvfDgyC1DZKgRb2bmXApXyg",
  "key23": "5rp8o7WBa5Y1iHXFmZUy5a7v7pQA8XCCk9YQcKYhMXCkwzsYVEyJjbR52G61eBuovamJg3JgvxzuGJZMiRKCaga3",
  "key24": "4P3QTeCZt5kfUdLtzyHB9e8ijnSetnB3jRFbUBcag6Ysi5RA4EfVpTmA7nZTWhcSMrvxnDA3nt7VHUr5EU4wyfB5",
  "key25": "AKpC9CoHmMmYsNu1pU7JTwxA9AN6LhwNw3CjmZhYPc3tgW3N5t35B345u9dXr8LoKCVZ4H9NAhZGCb7y5pTT7Br",
  "key26": "abxhjNFis9dPjb4aKeq2JZXfpFm1gvXkP9k9C6vqfEYFMu5pxLMNJWDkdnWYyuFrxB3Sjs5KdSbMed8Xr4fiEaY",
  "key27": "4qRt8RCmm9JQWUF9f58XQQpytMyuh2UJaUVxrE6Jgmyk7xhDyCZBeYbug31HTCUfGeRUHAn5p1nKJ49YwdmgqVvs",
  "key28": "36wA5teV4KU7sPBJAW6p31RrDRQSm84DWm7mzj554mHnuSCgqodGLdzYJ7hrgucP1QFB9DChDFT7U9vRHRi6Svdu",
  "key29": "3fkFEdW3Zz5fNoZtjcWJgCLfYferRLKai4vLjsLh7dyKuFJXzqa2BwwvtBTn626q6GgRyz7iqZui6fdRJYy88UBp",
  "key30": "PvZsY456LToytCEKtctrFPQ1MN6vbouiSWtYqH8WgUzJ15q44u87Vuk3sYCqKK4xqzFXHNurGtqhdT8ys9xnTZk",
  "key31": "vfYQYdnD4NS24JQDdQvensnfuJbLzSAe2vrCTPMYo6iC8hszsY9vdeRoXP3ztaeQMcy9i7vXqLgQSZ7TwF1gk2X"
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
