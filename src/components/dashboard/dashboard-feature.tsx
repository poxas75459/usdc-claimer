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
    "5AY58pG6HcbCbUkDAe4UnPF3iK2oMna34TC3xcRjJ35ohfSAQXsNX5VS81eoUjxKyTprJUSbfkXCiHcmsbvNrkAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZUjShk5gVhAkJuhJDZeDhBBXXkc363rRz9P7zu3UdLGv8E7eNvA9mZftNK4Rn1LdSaht4XD3tYoVJvvELif9eG",
  "key1": "2ZypaZbXw7eHER5Vb1jn4BYVw2KrvvX1WEGsJPe5eRBTqwwmG5HuRAJM8Co6dTsRHyRjNFj91gnatyZWWXL88r5h",
  "key2": "5wrcHUncgWQQD1uC4VFC3jshktf7FzQbkg6wp3RHRnuHM9uHRwbsZsNBtbegcwm35hRuYwyu8AHmWhk4JwGz3Wqv",
  "key3": "2DB5tQ4KJHXhUkbYPL8UE87uC3YykRzT5NC6CSZWRZKQPiPfrFGkwkpNdF38u3jbeqJFU8YzEQUYCuw8nieroGmw",
  "key4": "2snZcuDVqgKjQNztfkzz9niDmpuM7oCAvQ25oWJq2Uxm6Jviq5PP7LLKjrk7zSYcqrcEAyRRKdU6NLHieNp1Mdj3",
  "key5": "557HQy4joCYRr7RYBi9YymKrjGb2ijEUxK5Ae1QreFvEVFGU8B3kYWhVzowyYSk9iu5G2DT3W8MMxxhAAo9eEZkb",
  "key6": "3kQTvjUBi5EWjFzpXr7wZcbUokChsuADcbKg5cuZ4JN7GKhgSaWe75pTsSoxa7xJ4qY7AUU1zQYjV5HmdtF8yocW",
  "key7": "9hhp3ZJuF1x2HwgnwkyXBperEQGo5qubx48Z5KdeJX7z4ByyHBf7JdB87CA8LervibvCMfwpV5iTWBt6rDopXKY",
  "key8": "xbNf64cpS2aFqq4m19hHRQkUWVaFRYEFivR8zSHQB7KoZCrdM1sY9MTqLCCqgiWYhVB7x4Ms6FrAkjqn2GGjjHr",
  "key9": "4XGXxossGfG8KkPLzSuvzqKmtXsdbEF5eqg2C2EvMvyfs4x5Z9BYeBhrivT2nANTrswaLNgQZL2ipEpiUHinDWpr",
  "key10": "PadzJMY3RYut3oMLhvBYMehbaRhPzMB9FWSx8z1t2uRRjxqdT4RXi6dH9bCtZJBsac6izu1JGRdY6qwtLLFLurD",
  "key11": "4eXpHEKbDYF6a2T9HqCD4z1vKs7nMH3Cxtf8FveK6cWHynth88PYDdg2TnAqc1WubmjwTccsRwpoaXpQx5sszbhe",
  "key12": "36YygocWmZ6GNTjorenEYHxpneC53Tdp9DRrCUbeTuE6CD7FR5xWfnrPfoDzJBLRsaZ24RUYFtDXWCtTMC8jo4sL",
  "key13": "5Nvb911wT8F2UCWqpUpsPPHMPvSthfgqsH6bTTY2RL4jnsHQuqi8b61RCxFaiWtFsSHrE5VaKJ7YbYAbQsGFmdbe",
  "key14": "2Gk1DV3brk7vrdZtGPQf2n3m6abui2VBJxG9G48AmFKQ4Y5u99HqW3uPAnLmufwPH362Nq358FYRYRv51XxWm45u",
  "key15": "4BZcXBvg5fVJdMvy6WtfMGEnrjGUZ9oxLmWdEKv9sG5a4gkWFgtMqoW9r6n3xoutv3g6pi6kQTMDLA3nanWwmikg",
  "key16": "3vW1uVGQg3aHiQzF6VdacyvH3bB5xBPDWZ13SG9sgpLV6CVmpX8s5rT5AEY6Av5w8CHBVxojJA4oHzjdWqUyJBsA",
  "key17": "5cPwNFySVniCoJuQ5nDWd8Uzq7ct2B8TGELGtCgcmzLq5BVxczAB76H4RDdYau9sMtz4pYaFCMgomXWyor2DSkgj",
  "key18": "vt8xm5sTv5c6hhz8F9reJ7vkkD1AwjD14BRv7VoWHLvJR2xgUEKSRNLZiTNMCbUPUvaG1y57DSTpHsTV6LU9QfU",
  "key19": "4mXiM6efEEVEhMeUuwufSMAMS4wJ791kSsTgFdCSWVTpLDwBCXWf3gz7stvcgWEw4RwGSGRuxsa49exF3DGhFBfd",
  "key20": "2FowwWcV5cbvFt9H8ZLZc1jqBkJSjtRtDt9ADvRCHg2aVNS7it6FZ5GoFyLDAE9u2mfoAP97DTxKyAdm9N8iWErY",
  "key21": "4eNwxsVqepWoEeC8RBpDJqYwkwodr6cCdeYTntZRMLK42Jy21DaD7QXQW2dcJtNQTMwxcurXg46AWfJ8cySZjmuC",
  "key22": "4YEkSRo56Uf9GayFdEGA32ckNkPohFfXdPimgaaDJDZ2mW6CesXM3NYbML2j4hNTVPVtcd4GjVAguyp8M6j3TqFg",
  "key23": "3MiYr1UbogqxBPq5NVqTVo8R2qpZkzknvFG3wjwkBsZUVuopdZrJH4xKCELHxsigwB4jTCMBRPg5PjhAsYt1yGMw",
  "key24": "CxCP4w1eFut9fQsUgs6qXLowF4s2n4Ej29WpGPDTG2d7gF8rj8DzQNSducuddQ9svrSXEG63aMuoLzGbw9mS9EQ",
  "key25": "5bS63YLiDoTYhABtUMFhsd45sqBWTMUr3VmcDbBmyaNS5ehfrjSSnV5i9TESJ7vpYYWHqjeR5PQTvVWMGBk5AXQo",
  "key26": "2WgwcC45mvEeqFgJgLaZJPSkkBpj2gYVaVypADQ79Y95VnqLJzMmxpjF533Rhz9AbxEuzfX1nMWidkuqEhW1Z4Z9",
  "key27": "5abyeszpuC76jcqMWV7t5Q95bajG9DCxFRDsnbvt7DuYw6PxziFWrLykgHgwBibwgw1HrR6YWZA4usohAA85hwNZ",
  "key28": "2XTRv8Qa8QWYWaxAyKKBWD1pBuPuBWuaJVCgFukDGKKbdW8fC1FvX3rZXTHQYnssnUkuPf2cSQV699baHjSVNyku",
  "key29": "54y9QmRths87JYRP7FTQonudoLNaYg2jju816ZZsvPuEiA1VFMa7uSaFpsqyptManE1Vu7GxyjvvossXVUFfeKDu",
  "key30": "2EJwo8xpS3tTytybchDCz35qKXK5EmcrNjEeVuFMxsx2KwdQVwLXRFjkrLgdGSvXE7e74ddQyTp27EMJfVY8UbmF",
  "key31": "QVs8rWXyJR4KKwRv5NyfZbrMyDY2TxSzk6p9oK7Nkye7DP3uSFtsatF6e4S9mhCJdDi2v6wLJENHuBBEr2VjXqS",
  "key32": "r1pqfR9fmwSB4VzLwQami2fujmKTEXRUrZLxZtmXs3vszQ1PG8hYF6TD95NhTZg4WvmuVDXhp21SiDjF7pmdEiU",
  "key33": "5apxowQ91dZm29sCQdxDjpqYgg4z8RFMfykQBXHs2j77jPH89QJePq6eegeT2tDNXEfx8Yy7SqKWFEGzS7CYi6Lr"
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
