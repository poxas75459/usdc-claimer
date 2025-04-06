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
    "2kQYBPCjh1Fznoovfe71gm2jjbHsUHWtWiHp1Bi8xTwSGFtPbBwcng45mdEcEkyhojs6iWsgaEJwLxjfQG3UMd7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53oCWSvZ2TxrKeGhKkK5ZMQFWMgJMS7CucBQSVv4UgAeKR7vsNgs1n5m8cxjrZjzbSnbbD2E1dYw8UqeWYNjnGhE",
  "key1": "5cyHZx2PcgbVnTBcocEFy8dZH1hKQ53hzsTjLmGX7J9rxUFrms7rpP3kPcNCcVcc5fLrfTnts2xgsu83V4zYFzP6",
  "key2": "Ea3qQeFdip1iBnt9fjaaNdBAzNkzGLqKVQCD9fFbhkyX6WgS9d72oue8cdhrFogNNcuLHYyqYX5f1qgD7kRzoFq",
  "key3": "4J1K1aPihpbBuS2dBSvpQwhXgGafySxbriUPFMXwo6pNwTFRB1HMw1craK32CfCkstpVrwLkMz9pa4GpPFURvRT7",
  "key4": "4tHU7Mw66x9UrouK9BK9kvUayBuCsB8DDR92KiP3HrWkiJnMv34nT1ToeX2XQj65ZREQS56LZ9zdHyVKvrXzGf7g",
  "key5": "4REmEvqFHm3dLYsfztyhPSEowVuDKYX9JT7ytXPGpqsLTzuSDr9PZsv3rvSr4YcCV28L5tBTcMWnpVVQxXhHatp3",
  "key6": "39HWZcJe85rKhYAqckUgDJo1L4ByShmwhRnHQyjpyFEz3eqFV7Hm4216FckV9S6xuFqwq9L2UrGQXgpyfsy8z5PS",
  "key7": "4Un6G82mW3bcAyGe3YyNsHfZSpoSRe6wUvSuZXpUU2BfkRdMYyTE6urYvHVhEzoCJ2X3AmoH6eowoMePYkkS5ef7",
  "key8": "49Pim2AukPXgZaHbZzXaSXZ3G2tb3P4oNSuGFpCt771WmLoY6HkCsW3hUcK3XfF9ZbJnEypr2AfdWFVnmW987mLV",
  "key9": "3rLk9DykpwYxj3UqndS3faxM6pJrnAb1E2r29LmkRk4CqHLA6RVe3oTH3DTNf9w2aUPLnE3XdnUgmvXpPGQdJvXE",
  "key10": "3We4hniHmzmPNDDkFtJSRiNXYNbfw1zW71MTptMixA21iFAQse9tMsjuky7mW6MwCcmAhjYHCoJU28w9uMRdrVDG",
  "key11": "4Yey92tEsShvDmJSjd1VKF1NfxhuPjnxvcuL3qzPpKWQAU8UoLNaTxr6CTD9GpWYVPh5xiBoSkUBchq6zsdYpqA2",
  "key12": "4bmqEks4C6ptTEesAUk2Tbukw2DeogTr3wS13v4onUHXKafQdVBjp3BtAszWvnjmURHWhaQB8XkApGHAbwW5t7oC",
  "key13": "3rwYQuJiqDJW8Xo5bLad7yMnYWq8Z7ppvvC4jhqWnquR8Pjq4EnVfsApZTcp2wKuWSs1tvT4DP2NJiyZrRk7DJLZ",
  "key14": "43xdxF1NDMN6icDePDqTM1zShccdX2v6JgjA1MZ97ZSNdrDnvXmGvXxARyszZw9caLMwWWBtsx9gQp8oL5RUHuDx",
  "key15": "XWFQo7S6PocALfSVA8XuDrEoSFYpnAWfAiePTCE3y8gHRFiNhnjYLsYgCnSNFLbvRXyXfEm1QmyXi1W4opgUdax",
  "key16": "5AbCbjMRNjssy96SdMd8G1EsJKUDdj6TqajLk2jBxxu7yKULacbL1X7LrDNSpon95uyCGy5qNx7wjSDC9g7GHs15",
  "key17": "2TksuE1VwyVYumss9GzidqDtTjM8bGjxmwdyiTokbxR8uvVgJM1o6BnxevEs1wwFQB6Xy6frwE2PJScVUVjyCyKP",
  "key18": "3W5bYWwi3GmBdoHFDVxNVpQUFacVFEpvjtfYiCspmhnVnRmJXATyVQYxqqiCpAvJcjjbS9vZ4gtWPbKVtpYLFrmF",
  "key19": "3zzABFSQe4mxCnMDNhBvn7nU1hdWiNWt5HG1WwqkoN3gRq8EVvpzD2BcHoaqKokeXnMdHYYFz6irgCeYFEvR6nZd",
  "key20": "2AFn4nUY57Cs4GbYzPsamfQSJkf5hMq5nmAPqM2qX2oBJqe78B9Cv4bys8R1k5zcGYuhFHZDerW8V46MwNU8o8cD",
  "key21": "5Cobjyc2zU9BLkoGSGeVinhVwpxboWEhKRUyhRR6oJrZ8bwBzL7cfSnj2Hcd4uBDLU4F8f5BQk8ZxoQD3jwsh5eJ",
  "key22": "24aV7Mi8GxruWweiAFxLe6UDrgw2iQiuqQ3hT6Qug9QVvFs31vVFWXEWp8e2FChZDBVaMhaX8XEQqP1EdhoKeJwK",
  "key23": "2YpxJtpp2wkDpRRCbCHo73zZMD3A8Sd26kbaeC2aLsgKXzqKNBhp26L8EV7t2Hxzn52rCHNWzMuckH9Wv75gs1Gf",
  "key24": "2g1q718e4bo88K4sQ8S28tffCyAjwnUkcPsYURouo9m5BE94KsuBu9AJQGzwEa7ENhBwy4hjh1nJj87AX88uUM3W",
  "key25": "4S24TWkyUQzhSunBAmENoxLXWMpzFNgfqup1Apkt6ZLuvDFzpTHZXhEewMqNeM8tf1aY7ae3DhuPukBZ2tmUatGT",
  "key26": "5zA9zowD8FC1rqkox8fbpein6kDabZXNypvCKVKM6PP2uN667gM7MSFce9szm9dLjjfGUJr8x2vTuDqpQ9PBzCw",
  "key27": "5G68SKzWkLA8DjZwza3ghjcRdJdEtF39Vha9xXdUzqJ4UXkJBGR7vk3s4zvntx3y6a5URccsBgyvyuxmUYfw5R3B",
  "key28": "51c1N7mxiyp2FxfjT8urTjwcHTXRtsiJLoBYGseToGfULu22BSrhLS7Lc9FxAPuPVpU7LQJVXBbJi8dmCoXzCU9z",
  "key29": "5fMNiD39zRJJKPPtXDytvKRsA4XTfW1JpSDvZrgmZtTwHxw7sZL8g39mh5HF6T1JPnVzKtZKqv8yi8cuTSuW9PPv",
  "key30": "4NSCf7Q26MjxScM57rZieXVuhq57SCMBYVf2mUcnJzxLA2xLzQ6Xaj32hBwCYsX1qHvRVzfBEuLbneFdqSA4vtVJ",
  "key31": "5R8woaaaTjRxdkDWL4uizLejsDxevVsuAe8FPywqiDQJ4LHkVyVetRJeumwEGnv7y2cjdZrBLt2aACTHHYW2KrpL",
  "key32": "5TMQfZopxHrteogCX5o9ediLLRcKhEhk65yZMLnvUnva4vELWBnBNBJtmDVt7vRi9bTuDSzYkh6CUFumB28YWphg",
  "key33": "5FNpit9CnzB4k4ai7SAgtsshaRXj9eYPwvqKsG7QvxAbeBnC5ug1AuLVMumsKXYa5BiqMHtvVZyZVKK2Csavk11m",
  "key34": "5sABBKrWeFNuhA2cs7c6hX7kDHo9f8bMKstxqhtpp449cm78kXghzCXzVscnc6VQkXk6sUSe6L8vwikaDq57Fsua",
  "key35": "4DzVqAwQGDnzdgWPDcmyEdr829gLByDJEepUcawvYs9CF9fTE6wnbo1AT5E1ZbwdGbsEJmhA55hMp7ymfdbYdpFV",
  "key36": "4eVtybWAr3cxX22cF9m9ioFJyYM9Rv1L5QzrD9CB5WGQKVeFHCE9ajmGN4Z8XZsDq1XNSTZdc2vfeejyq7fF1VZq",
  "key37": "R3hZz7yoF9Mzp1sgBRpayrT6eHRkJ6k5hhz7cMLUHXizzaKbNM1AqqACHCaRXtEjpDjkuN7n5H1MgvzquSKgdh6",
  "key38": "3QyFG4KGFhJP4XRA3tfWmVeJzqN27sDgPAfrNsoxWYir7Dq4vzdKTZMRWrNQhjYwfnbkokSgq7BwGrdmcQCt6bxM",
  "key39": "3a3xGuyu3SsG5ZfoczEMTVVwXKLzAEwxZdf9bfFxPQ2s7gfCcXqToXy4HtqCn11d8wnvPw5eGyExaCzzSWy1R3oL",
  "key40": "5kqF6rHGJwr6em7o7fuJZmrQBSJtQLu8NLZpSbbmjG61J27G6VhzAYXhXv2u7HhxNSbYXoqRoJXzuS2eEgiLWJsW",
  "key41": "4Cv4sJc3VkGinzrfUAqg92V8YMoKmbYAzer39X1Yt78w5MMP9AGqAmgKniJwXWwgpNR52JTxB9ctH2CPqvpxqhZh"
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
