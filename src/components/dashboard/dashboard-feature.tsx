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
    "5DoMa1YYTmKYA6W72vuFdav8m9ChG8pQix1e2FGKf4px2YefyZnsLzLWTYPK2AvkDbkezMdHPSB4BJCVZoXt2LFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESYxQ6ZbxtNyFEWhcW2hEUfoaL3LQkN1xgTRrEXN71UcDwyHsNyJGMw1ZkNE87wCSH9GBmxbGBrRuAWuzABXWD4",
  "key1": "123Sz9dqunUAKNW8keuNWXTAAhJ7bCfRe98PywwzwRyJwadhQnhoZqPZxpQZ4Fe4bRsu9f7W61YUbPkgjYogvycF",
  "key2": "5ANKrA1v7GnenxEkiY2NAT7PbLdUA6cQxvByDAy2wFxdMFY5PAa6R1cNupHdqQsUE6AMHUmvgJjvj9D9YCqTwVqb",
  "key3": "43VcYgfjweq5mTEJdJz9SK18ynTjX4bKa4cbhQXNfT8gM14X75YUh8Ks8M15bRKfDt4PA9J89rv1mZzdeXPNHaY8",
  "key4": "4MUWZ436Y6Xy1uQ1rq2pQSDw247tWjTjrBjR3DQmJUuqk9brV5R1UkqAbmxV4Kqi2Sxz9yfDbaRvbS3Rt3j2S2aS",
  "key5": "48VhpDZtDiVvvCnJ8wtyvXhTqvTJUJviaKfMVhq6AhYfJEmEdCMhKKQkujy84XJFMBvDVREuttmE3sP5fou1hQDm",
  "key6": "5FHJqvLribdSJ8zHJmxSPL7sfdaHYhxd5K5i9oe59t5CXhmqK6PhiaqnAQmqa7YuHsBqVYWns37nkbe9XU6jDdhu",
  "key7": "3uqTRbj1A7XWFWeFhrQW2e3TMaK7J6LbbcWpyjGbpthD9kwcXYBT7NEGjKQdzCFDZevj6aoQBdZVaKjF8mCvsnQ5",
  "key8": "3gXgRNSShB1eyFFCXmzejjNe1Ssb1sQ9VhN7NA7LGYxxudfVZGr8qabdPodYgYiRVF5X3tUVV72kg2t1hCKQc96P",
  "key9": "2845M5jiYJQawwYxwKVof8Jn8qNX95fUr9t7FaRD5fQc7ZKKScM7uiFsh7PTiVwez95rrY4euPBG2x9X7bZaE4yu",
  "key10": "Sqibv59URbPLXU3dNmMKQi5HogvHJgHdVHsmkKrLfWzLvWnbvBPhKG3MotPZYizs4awGeTvUwuX73u3Nhp9oRj8",
  "key11": "4g1DBynmV9WtpwyXroNYM3tycgetGbieSd46J47sND3XCxfsD16NqH73EMcFvGjrcn9qdBt8TeHp7LteRxMjnKvz",
  "key12": "2Qh4VpaZ2nR2eqVDsFZUCFRohzuBo1mxe5Ne49fofR8hdSDwhigXZZudZ3sPwfTx6RchFf9VHqtzHT9AhCoig9ji",
  "key13": "3N6SBiDwW26iaR87ATthCQcv8qaRZGkmveBzw1oVJ9KznNjYCSAzpnrUgaJMf8cyVkUWCAfbhs6fT26Dqs3noXBB",
  "key14": "UhNW2P65yJofS8r8YJzYzfLJaXQMEVDKEcP89XqW7kxM568yEyVetTY2yY6DLU11Xza1FzgyQbHqZieJzw7xtCe",
  "key15": "5riXvk4NAACB5eqhQE76Q7bHdtey92cb1jFUiESGXWkao4P17Rbgm8mjQ8Ji2Vu9BdtoT13Fqv5eU1iXx2diEUJ9",
  "key16": "5nFC7W9VrVDRMF5iMBPEJQBCuML2jE6sobjQwZWb1mP7tR6rK8t3Qkzqe7qCV2fouVZc6VdGWJttnxJPib6fCqLB",
  "key17": "9JRECB8w7QLQHMCBVDLBfLGtNfmtqL6abrYYJ1xzzujaCoTXuz2zdiBCmMLoWrXVi5D8i4HBeqZyKjyE5Cuyf8f",
  "key18": "RWNk4jA1uABdy3MHT8LfNoH2ZzpH9bvh6oXpKPf19vb8vkPkUhDZ3WtXh2yH1yXt1XjqgRA5Vd4qTvGYdsamf4V",
  "key19": "4ZUxXx96QHMGsvs4bzaCxpJmak983Xe88PbjrDYyLjA8K3yDTgUDCotURSJEwsWPK1sbhXUCpiQvqkfWVVYBNj8k",
  "key20": "5wREWC88HPRxRXhQ9UYArLHjx2jeDyyHv9AgcMVFUg69PRqGsmEGHzGPUH223miFdLZrAQ53JPP71n2pMQMqnedd",
  "key21": "SALBHTWz9KAcqLSAvBJJoH8nA3wC6cN1gimi3HZGEZFJBhLARJ4armzFqvEJaHrzz8rJAxf38bDyyYSDN7BjG5L",
  "key22": "5xEDUG4XawEa2J6a8jGMS4egVhzjvUrWvrzgjrGgMao9ptBUQK4vFEfx4ZwNss2Frh7P8mJCzta3maBpP5gkdkKY",
  "key23": "3v1bA7JqnVJH28AzxUcn81dKXnt16zq8H53gmxYNSraLjSv1V2FXuJExcgxkj7wK5haLRZjwPKpFduD7PENALt6H",
  "key24": "42u2SrR2MxbXbg2PncZnvimigr8zPZGZFgDxiTteQuXLpa69hNmvJtdheDsJPkX6Au2YEicosxCNxWnUFBQMZ4Qy",
  "key25": "2B69AfhZDXSMjJPfS75Tj11D9PtLREeoToYAokSeW95Q9Nw4ASiVcLYBQ6Kuo2MAghTq8G5GzG2gQpy73tikFFpv",
  "key26": "QL7AgZMArohxgg9coPU1mTx6WuJmdLJ4y6KxhYwHR6r6BBCEyJWbokRSxyztrQbaqBX3ZnrhnfHmGqXQDXZWAnw",
  "key27": "4KR7DgMoVYsDtsDDcnvLtaJBAA73AKKYFD5MwfFsWE5VrwHkbHBUsxnP6bJtEsqA1ZEW6MUVpukf1DLFSn1US1nE",
  "key28": "2YnMe6muSj2yUDzJ7u8EM6kHKTUxXw4wRJkBC4e6qywP2Drz14JhyKNQVaj4AHhYukkmmLSKK9zPM8xpiWjyupKz",
  "key29": "52jqk3nP5xLbfffdPU2dT6dBNXFm9bDwN8i1AgbTpKwDw8NxZrREnxkjpTsg1oDHSW5kvFe6kcmNaYfk1kAt3xN2",
  "key30": "46qpfUvQhfDud3DBbNrhgZFSYGFzuCcFvUmXELLh2ENKjBKBV3rP4FECY9yx5B2q7s29Hm4oNR46mDU9BiQiYWp7",
  "key31": "f1hphoVzDEErGFj5RgReWFytHfkdHQNfrzS3ZcRzYR3fzw9NkELh6mmZrVDenauvXchsNcazoX8yngQXWGw1A8D",
  "key32": "3CrjjLiSCAqoJPb82tvC2TpzxBajUYZYoifXX6GNnnK9Lsy3yGkrRfJQm1mBCTitCzBgGuQ2fXnP8JCsoNEN1ZQf",
  "key33": "5EFmYVrJ3Ny2nHQjD4mmhz8hi44THwXSMQUP4gywagzfawoyL9XkhjS4Rv1FEcYoBdNXhBj7ETqQ3wvjhgqgh3dp",
  "key34": "3J4or7PoD6SghcPnNhiC77yXNauLpxRKrgEC7YwE7u8rZ5yk5kEiGbebLGqxg7prdT7DbkudFJmH8fmCLFRfXrkF",
  "key35": "oWknFTpdaQAHQ3nrS6tm9pmvetmPzD8xsE8gLtQgSdoGQLFP2UuKNZK3yCbsooj9V8oZSutgNSjFJpMoFAior7K",
  "key36": "2wSX8UtNMg7xHEMJRVzJmps9m1HRZKzPJQidTmi7JH3c9ANmDhZfHc2zmfvDvg7bv8De6z69pWbxn67BgFTV9GsP",
  "key37": "25x8jk9oLnc5NjB6akBm9vzDyZwoy6ksx6SiZpfBfL82pTu9vgZj4a1Qwcw9E1ZpKVDu7AYVEWVQ6UQ3ierXHHjm",
  "key38": "4LegfsszsKSSf2s3Mse2k6dW7fmxRr3icdsbrarRKVPAyrVSQAeNMnexb45Rcmk2eS8u4ey1kdFdJRbk1epvqFKd",
  "key39": "4GUdSBCbDnwwU996wrzP12i353gb25okCeMNycZxRUfcRDsE8SitSTeGF88gK2hPgSXRckR7y8UrEh336V9qmXAx",
  "key40": "MdEBwfQGw8LUxvwRjteWEJJ8XXmvTezCbribneiT345cLhfLg56WtTEHtaSxTfPkoGoPJFffvd5eLP8uDJtN1Wc",
  "key41": "wo7VgZkyZAnweGa7VCweFn2dtW4UEB13mRJuw8eteZzkZnXKmcaC8eQE11rdjcwfDkHvqwdY9VoLpEuinA4YUgF",
  "key42": "4qG5kWJNCxtCGa8UpH5KAuQkQGV8YndAbA5tT91fSQ4mQTw3gFdJ6CQoYZ97XDHzi93u4FZDiJCRyfYpekjj3dx8",
  "key43": "2pifSeC5gwnMDq8GkgzNMCkVLhQLKCsoZzUhsskyyvaF2C1QRyxvsMEcMMH6sUBNAR1c2e66b91vQ12d1gKBsxZm",
  "key44": "4DKpom6L6czmiZFh9ev1kGjpC8jBNQPJhZiYmNMnMjHbxubNogj1KFTG8FmSzfQsf3cT574EQhewoJECSBveFz6K",
  "key45": "22FLw6FU81ZHo7U6hTuLYSsKaZ163JxDoPMjfYjqdrQhmQNKGofVCsGBs422hZwABLrNHdNRDYBcPrL8pp8Pbw1g",
  "key46": "3h6gitJyuZxftVmveaXLmwanrmxAGzrYzy7dXUMDhvtrnJWiyEDuQK5QAeu1nQwmV3S5T6TfZ1aijmWDTNw8bd66",
  "key47": "FBQG2F9GdzG8vU6tG6nXbL57oHz3reRCYqjiU3RUcTtu9BbbccvmDJPvNoWbaVBrGx9SpKcMVnzVnvMf84qUszn",
  "key48": "4RLA6bRuAz4KKiqy5hv1VT1gKHKqQqJumPKvyTpkmJHdzeaKksrJ8ggnj8FysxDcUQPXHwaHrJ2MQzL1mJadmMyY",
  "key49": "2ETGWai18exFCUo8exruSfMFdhvYHR1SsY2YkLj4MnKrt6VcZjxsBinpnBn5Czhp7X1qWkmeZN6DYyuuoWsjf8cW"
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
