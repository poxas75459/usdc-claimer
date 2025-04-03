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
    "3t677RMHFdVUGB6DbNn4JkmJq7YTAHbncGcvcBxUazXCNiap6gVNvVZFjCaLuqbXZggdGKUa6nKSykaw2R35QkWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DE3Fo81NF7b5ESVhVnL741pd6brNzGP9Ap64kAeuuJwK6zztRztD9f4gz3F4gJYeW97c4gqAMTBz5XoaUfY3yjz",
  "key1": "4TKuC61UCFbvarFUKYktbg8P1F8xp8HfWMDoBmnawP8wAskFkf4Usz6beGutqWHwtXMc3fNy1tvZmGuDqVwSBdLq",
  "key2": "6E8sCFHuTQhcDgw2SembRtpmL6eZyx1xzLhLoSX2ymvi9gnxrLinD5UJU6pKgpKeUwk1UaPKH7bQ9DwLkVpMw2A",
  "key3": "5BAHetwiaWx4pHLjKe8uNhgu8cMjFf6sPLzZEmXaKvZ66bJJG3WLDHNxJBUCZGVi4vTXpkpk2uA6ZZeqE3sJxGoA",
  "key4": "3e7D5dQQpQQJyEV13g2xmMem2PH41iLo3XUzQkxhU4NipX5u1w6KCHabxQkquMHYpgZNazo1cNdaexB7wCnMzBr1",
  "key5": "3DCKr7dD6w2tU5XqSquQhmLQHRRZV2jx5KZXL8N1HHbKYFVhtYZCptvXzbVM9aJ3z8Q4QddiHUjm5Re6YTsFMNfN",
  "key6": "btiCUHAAFZBixNAs5jzcvHetPfzERRcCSBqpHSzwvxRt7RGWdUKZ9QzJvc6mdP5neckr5ckGfUrNG4e2Jz3NuLp",
  "key7": "Nf3KZqnLmiY58NBk5BsuxrkFEh9MBdzj95xUWYjkNDq7VqfBideEkzPtZcTDZqbiKNxFRCVqDjJKGXN8Rqzezkn",
  "key8": "2qtm5FUd1zCwSykt4njDBLUxPg4w46jS8QbxJjBXGaBppDrxXwEYQQRGvw63gGFaL6RUBnUesVxYkhMGBPSfcjY3",
  "key9": "2t48HBGQADNtK1Xy8oaTVN4f6L1PZZuV9kK1N6bMFzhXNrURHmcVF67ekxy1BZcwhtBShwKyMQqD8f6uyFnUVjqP",
  "key10": "2VXcJH2sVDDqanE28R1zC5xezZCLG5odpNbGozDjwDo7zrXdr5MSQr639BPn2E6Te8jA72MZdrXs7mTdi4wsZz9v",
  "key11": "5yiUrYLE9hJoQ3eRz1iZXLLjWcdR1Kzvb9CMJ5RRrTHvubFqaWMqnkFHrBWyi8Dyo7prEraiHoEC2smwe4ijCyA5",
  "key12": "4RnMHcSn4SJuatg2RpZk5xPGtKKp9PuRd8QTGj8zrGnCcy3rTaTSmASjgjHkm4knVk9wwuh6k46wY2tVBZTL4A2B",
  "key13": "2S457YYGabCDXBvxqtqSiz7YGc1eW5akD5mQTSC7i7gJLMdqnooNkgBNRNLXDTtUzgn4kWeYZ7PhAa8G2oDyZe88",
  "key14": "2944qiPv5dkTBxvW2bqpVEvGG5buZQ4BZmeD5gHE55yPZiKasvxDHy4sFdTzBYy2rq5xBSB7CBYvxjK5R7JsBrnc",
  "key15": "5ZqEPb2riz2gBopuvVK4x3527DbVfNreci1B4QD7Zbpu72mZ5AWLmtCHYH2A4oEZZcdKzQ1QHZVRTfjrCrBruTKG",
  "key16": "4UtjEb2AoArVGi9MhREkGyiqP6sxK6y2UsVXHsZej1HivcaKbsCHG2cr7KWfNj2jNjSrcMCYvQP7qTfhRq2iD93L",
  "key17": "5pKcT651w5J7EbYjSq4uKQUvUpVxCrXszofDvHBJLYPd37DqPCzaDtUeUpGufVC1vZ1SDCnV6yJRUakipJEK52xM",
  "key18": "5Ec8hDFWwwEt7W5PjhixPVAhdtVw16u2GfjuoBiSbkodqzHpA7BofpjcSU12QLiTesnXjyLFG7YxpjqbCycHtTrX",
  "key19": "4LEuPjM5CmvFymcmuWmBfv2ZkmXgLTJJi5AP3PjxVuKWLKJSks7Pj9TNRwr3TRh2fEq8uakrmNhfw4gxQ9ECzR7F",
  "key20": "2prt9iDN5JujAhjGJN7vqpKAGwWZmnhi4KyZ34d7ctesFXbEyt4ASBucdrqYgBnHZQs7vfeJ3jpqPhXbxQFEtRbp",
  "key21": "HekN199VRVgSJ6YHc63m5VYftRpWj2WPeJjZhs8Z45hR9gWDhZhmLGFHWz6BaYfr2ri8gHbepJkv2kytNCwrVih",
  "key22": "5kQXscouNvF2YDARWfnc5QTbUFmLshVTX3HRQzUwk3AZQ2S7zS1jmVj7Gy6nbhLdaGkwMcFZSgK9HvimGVapPpyH",
  "key23": "3VawUiQFpzBUfr7WkFvcWbyDnxo1fMPUnCtS4de73h37Su8tpxpZirvDkwajNLu4MKVi3Gekr6kMknms9ZgCqTmh",
  "key24": "3yZYjL1GFvct9ZgVmh2U2QWf8tQSZgr1fmCiQREB6cUbhgJovSqJpLNAFs3h9b1LFmik7viZcyeHmFYqgso4UcVe",
  "key25": "2y5j749AHUo5gxEaLT37y5VV3g32a5foQtMJ2UvjcU2wraja2gPHFzARKFpcWf7saSvzWRbmabYgv6vMBLNExzUy",
  "key26": "5uVMK3dPLgwkBMmDpqrCHu5xkitT2xW9GKRNQpwMhaw25xc6SetcTKYnNBKY81E2zS5zChMnX2eAXGsdn8KSyEpQ",
  "key27": "5NfJA8nKMaCYi7Cvc3Vw2sj1EUKvVUjHQGp6afxjq1qGsTxspbf5EuMefz8fggprnhU68PJC6xvrcKg5dEFZVb6E",
  "key28": "5CGzaPqSzxMtdFn7pmAn1sZFk76cD9ib1bch5kZoSZBH23PbJ8sjvUjaqoyFfyhqgakYJj6mvXh2N9VAmfUB8kz3",
  "key29": "P1wQBs4bGic1WtAH8LM5UoiXfEnsUxkjouRtyPT5fbWXsao5PTRQCNqx9Y9NXen9FgdWvitAjSMvSiLzLpaW54M",
  "key30": "47bZRsrmgTZZSMcwV7U7LbSoz4JGUJAkBb1otcktfoh6F95XEQTSqi6x8sQKk4phsaFkaPMjoKYsXsi4XHx7MVyU",
  "key31": "5x8aBne6EEeGhXy5CmJTQKnUrSN7dLKw7WGKJE7npsLjDztC6dUdivePKbd4JGge4wa29XPLGr5XDg7bNqoQnbj2",
  "key32": "2ZHv4KVP2AmVck4j8qVSLbwPMk1arNGBuPhUDJVfgUG5SRK4EzpBUs69NCWmoBuwcWENFRycK6BzwXXFBvSUKKuw",
  "key33": "3bULPq1p3dnknr6NAzEYvNpGT8So1uHo2q5U1Qoo1ULAyKuD63igriskcCFfb3s4yLADoqJNNPRB8YEbZ2dcRUUm",
  "key34": "34J5Ui2qxJXsk4aQ2gz5CmhSWCwEv6PMVKoyNSzfp1ckdfqt32c71PFFqQEJMbVGASRaMoG5p3Ykkrabh2nnebTn",
  "key35": "4afvzSwFWjzJyhokAxFEgyJgjgAU7FSUq8fSkLMYoS6CAZxCDQdVu8Dd4euDj8ikjSyt2mg68v3RDvKinnLFH9vS",
  "key36": "3hCmHFKdmK7YpVbdVJDKJtKwYSrRU7PRtqps4imkHTi7Ww33K4j2Y5ffs8LUUYnSuUB4ytC7iA2JpdCAyFV5YWjw"
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
