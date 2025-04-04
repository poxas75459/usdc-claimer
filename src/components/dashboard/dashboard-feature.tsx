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
    "RgvUCHjkTorbWBsb2EgPh6em6n8fsiiVdQY4L1SxcWGAPvfDNMGVzUiQVpgQrivEebYVzg7mP4pdWQ1k62jvr6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptyMGv2eLYsXSpiP1PCxNmg6dRMMjBC2WB43ZYNmrmEE1PmG1GqqE2rXuXtkBfHeDL6cC4MJPVc2z8JNjhGQLVu",
  "key1": "aw8ha9dTixQ48e2XMByKTZ9DW8D7UcGMjjKKHHSZk7LJBqAUcJApaRSaqMK4CTA2bUHw2Eh7YFWfzkXHEmx6DLz",
  "key2": "3ced3noK1JiGabaREB4yErJqQpCS84gjhYmcRM99EAv1YZ188kGkbr4WomsRXZcyQ77sipkRTU6upC8qyAb1oQyR",
  "key3": "3xk4cHypjaydD5Mk3xS2PruYbQQjxyzKx5651ATnrArSphSZQGTWPP3Q467sHmk2JwiXg48JxVzPZvswHmKuWLrn",
  "key4": "QH2xco3SKJkkNMu8XLhGzcMRCxnB7QC72ahDYVEXe1qk9AK1WveSWB5E2QQUEAiuN9na8S6v9KBPZ7nRoancc8F",
  "key5": "5Hw9G34Q6ZMw3pFT5X9j9SNKPSJhHarQCrJ5r92BWGeobsXqLGPA9bhYd5duygUWPYzE31wKdEanrkNULyyjWffz",
  "key6": "5eScs7vVSWpLBvGDMj76Uw6AdqDpgBJ3xULsoUkDJSqg6BJiytA2gvrTZsQ5z93eSxfaYuzNSYTd3xsBuMVfFzVt",
  "key7": "5tkHB1QK3mL3tc1WabzgHvRoG8KB8s1C8cL3sPfu89beSBY32kqih6Z5LYKivGrLmXP2sb7j7n1CAvFwhT9zCntg",
  "key8": "3RQcJikt9dLonXeSzKmzWBEY4fCH5PEhqjAYWhC4WtTwKdr9744ApKLAw924SWU73SLkuT352NL8mWebm2jPfu9",
  "key9": "btCdyNjbXKA3sxd8SCN3pb4BoT2ktZcScBVooZMboBFHi6qTvxxNncbPqYW7V24qNXVV2aRFCVWfbadFtFL8gCC",
  "key10": "5y9kxnS14WXi95WiVj9sTQAKgX7joA8PxS5fLXYiJrXzP4h8iDDSxxp2nVQZpgRfgmWyr6HNREYZHp6npBm5pJ6B",
  "key11": "4chpim7RqpoNmYiKYCvLf4SpRjfP9SenT9jLXRa8E33W1KUxZTZCknoq6bsdQs2aAa6xVvhsMKL4vcen4nSwXfnr",
  "key12": "49dGxK3VnHJDzGhbLXU4pyj9CZiJDvgXbXNtwJoRM3MheoZjphWQj5wzFEmU9VZnsWDKENpQQF64CJ3bY71worrQ",
  "key13": "4GYubCEgt8YHT6NBhB9X2fqdRUfhVmEo6JcM23mkJUQST8Se1oLpUKkQQKxaRwULFXEWxE7rjCkvun3Mmkro3vUo",
  "key14": "2uvFE6R88c5sf5pTro2wXGeThjpoYXgZhraHE8SU8AwBmDeotb3y2mhD19DHvZJV6sSA9E4udW2QivbmniAmeUpr",
  "key15": "4esvx85nRKw4azqGG2Dk4aCgovTxoZWNrmQ9ebKYR5ixBzbVStwsHsJ7Jeqb6LnRELwdAJsyiZcSdrW7cFfWfJGm",
  "key16": "2pnAG2SwCZVaUdzmEexWxdviw5aNHMsvyGDKoW84uDxsgAsMdqrFR9Zyrw5wytR5x7P3kBNpnDBBjBuh4xxpkD26",
  "key17": "4J4vadPQpZrEV4UJm6fUsrE8GB1X3JdRJcU7hapkdLBe3Zt6GMFnQ93BQa4y1idcnpqQtU7CFPgkaSix5YVXHFQW",
  "key18": "53N9YkV1MLJDXnZaTWYjQ7peNmaSm3UD7U4FRvAERVViqu1SLPhSz6bwGi6N9kFBR6fFEdExWBMinFhhZqjALjxg",
  "key19": "3DWTjGSvSNXkY1qzRetTPSK8f3Nw7mV5yogWTggbbVHctAdtMm9Z6wE4UPDuCtGBQbLfeBvxXvZ95cZVeyejNRgk",
  "key20": "65C6x12dEEytUKhWQqzFBDMkBHL3A74JZVeVFK2Q9RRbMgweZVD77toeMRjgDfguvjKKaK82LNkw2n58RwhNNTS2",
  "key21": "4T58GEpWspEY174AxHPpbSRJC8bJC5F79hMsVqdwrcWW5GC9qNZjnP1wRZyZN2Ls3KGMdWw7js83hSGhxNcE8JZ2",
  "key22": "xTq2fRBQZBdKAye86sRTcQCGJwMnVfW6mdt7dpyLsXnoKiNXDzPhucKvN6Y1b5EevMz6QHLthb2hWpQrX5Cduco",
  "key23": "3jZqgB4d8Wg6Y2iwX2R1xNvsbzUzYrVnbnMn59nDJUWPPjTkA64a8wBVr2XYAtyhVBMwxqK99CLtp2dCx8pSGcoP",
  "key24": "4zP3tfjekxVAntwSSNSn5gvETceNLGntA3iGjYrPbysxN63jaYEqEo76himKCoGLjzzCAPp8uDoWSCs2nf67YK6P",
  "key25": "3D21QYbcMQBq31rBRkVHVkfs8Tkfxd4Cy3AnHLeTtwsU766oQ9NZtvT9QUwL8K5myzceDuGxLSXLauJj5hnWxSX2",
  "key26": "5AyyhMzpt5g7KrUQH7CQuVyDZUGDc7GF9wt5GhNR5eQCzwMGEZ3rcEo6tYafubjFhiwBGSXWZ6rpHJrN17R4uZk6",
  "key27": "4Z8Fh4KLShBWjNtaQ6PfaWfU2QFTFieViHzcJ7NjqscEFf5vMixzuZxeA6KtkZX6pNppWRw6Ggkd9ASvP4iPfbxK",
  "key28": "UGkTSLnszwEBg9DhXmboTVayn2QbQrEptzJWtN9Xmegq48gXY8nZFPR9MZfZdsjXFuBJeZSSPbENYusckucQHHj",
  "key29": "3HWqQU99UXPAgDFH9XSytJEZAXNrW1pSnsXkjnSzsgMfBE1QqMdNVakuR62i1HnU8DixuEgFCxVMyPtzK5p8vKjt",
  "key30": "58zYjxzmu5MDDb4vJBXbAJwyMzsCdUhP6aij8iW3s933GbV642nTQ5LuaKicrtu9b6Ty4mp6qqn6e9AfNqBreavW",
  "key31": "GUyMXuUKC4xSGoU1qtpStX9cXrXYDTCN7xSJbkBFq2KigRUrR6J9CQLSattZNnAfS3FJeWsYpkEEF68jYLsJ3KQ",
  "key32": "4TsfJwzyFWYAmmq5HHa1kvdvTTU976KaHuBmCHo9d9BCx6kLinFnfZRZnU5VBBdNb1Gzd3TFhDMcV9B3pB98sHE1",
  "key33": "2TPYWL6Z242Mh2gp3Nt1h13Uw8RcMsW2XypmzVnzMgNbbRdKvftPWzcbTPKuMEpfcGDiqZTG5dzSrNUoRWxbtgn6",
  "key34": "47sueP8HMJRCBFugB4RxzYhjouM9wt9VW3qPcbJv7ub9YZuiaEzgRxznTqkS9gQMTmKFccGzhLQj5sgW3DHbfU7e",
  "key35": "3Guexswsc696XMJrjZQFEvK3TgCaTfeDdK91L3D5F1pPsVAAZvZGFYQnZHbEtwcRntM6YudAankpbbQX5d5DNGmW",
  "key36": "3hT3yiN1iTbyU5b6Lm7qcCABA1WacbN98nr2Rg7YS26tV14HCn5QRFfE1oPyBj1NfM6tZzJbXrwFSbw8PjUX8tu7",
  "key37": "4or8VkJ7EtbfdrrdkReY7bGNnqr8ZZNhVwcFDgbhRMqW2ZqNCEVAoHAhvjN3t8JfTFSk32cJC7WSeM6BDTs5hE6J",
  "key38": "4Phn7jbz74Px2k2Jy852ofoPSBZuYZvZgfrAurWURRUNCAsPSdatxe87L2d1hP7pK6hFQVTdM69CkDacTyV38oEs",
  "key39": "4CYZiyjQiqZb7wwAv8mMzEofWkCbQbEYsUQxjaqaiqForARRnPUzTBHXxMQBA4DLHurmjW5yYuDjtq1ieRU9ywei"
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
