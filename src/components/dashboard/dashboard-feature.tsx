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
    "3iSiMfdpAyqtVwQxytbj9rNz9H2p4TzJenhezkZbYX2RCwBUr4Tq4FcrczNy42TTEHguWz2cqedoD2CF7D4noAh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VWVWzzbD8TQJper5FeJBfEM2J8bjNe7BLEahHzr4BScHgVzjgThLu9VHNuSUZjWFsEpDKASrzjCBSGHW87Y4Ku9",
  "key1": "3kU639Qhp4SaqB7s9JGzMcjxPnABTJCojA9eiXTj3p342vHpaU7n3XW6fHSDwF8vdjGyGxd2pDCjwKzHuiH8zboG",
  "key2": "bccvHuCa2wfuJGzwMy8Xhryg657dJ7oQeRSGpJn3BiF5EXtdA6PyRdi1KGoxHWQjkyNtPK72yE26UX6PxLhPt3V",
  "key3": "4BbK15rmPLXTUi7UA1JT5Ji8skvTN5Tgmbghx5Hn1ZL1TEDjsXFFMWA4pNmbxG31y5iDUJXwumB7ShVfSsqaxXW6",
  "key4": "3yu87d24QYRyiHyJtf4gjYnFPCZ6qveVxsLK8d9Z6sczr8wEjuVMzqHU31bH6sxKbTkkRd72n5e8tF1xU111awV3",
  "key5": "nunrk3yVHZLxWCKuYeFTdsa2KY81sMCwmAJVPLY7mrMagDoTgyX8JgtUqvD3x8dXrXNBNXFKhzDz2EAScPnsc9R",
  "key6": "WznqmRstrTgV1qz2QHSHnYNbgRtDRyCG82G5tkr57vdfozNoyYH9BPpQbp6LXtQ7fy8Ytx1NhRV1QDR36bRXZaW",
  "key7": "41RouoGm6fzV8TPQX2t9oWKCaqkWUXCEvy91Jpp3fSDPzVuBsCKVbe3EekmhoB1ciozCVUp1haQZDDiD2miZszaP",
  "key8": "4XJdHmCeixySss7tiDzepMPCaPjaR1xZrC32WWcDApEwxrMoEb4SWUpPRJqxVpc98NFjjiuzHgKCGmJBoaNLbEjM",
  "key9": "9FUWVcZSqPY8NfrZeP6UuxhapXMVegyKg5KueyTogTbeahJTbLtHF7B33UfYwcFYGVmzWf71kreWJLAKJmbh2NG",
  "key10": "3RjKEovy58BdJZvAbCETZaWoPFHJ7s2tepEnDwJ5kbhDmT8VAtRJm61t1tDkM2VsVWrn44aNEHVpk2qu49WA8TFy",
  "key11": "kMMKw1cfMgkTqfjJfNbiCYFnTqw44bcNcNCVzg9ABpRfqo5Pkwn7nVf6sT4wZq5zVxqBWYHQNTy3PdAA8VRgX6J",
  "key12": "5DtaRZRAvM4h9GtdBfQ8XubmzS81FX7ez1zjaAvJiZYApF5FAMfNVEEimideU6suqYEvFitwZYxG4Xy2rZs2xzvg",
  "key13": "5QwJkxRo1cTu6uR7rwexzucEJiHQiVoUyk1m5NjHPSSDder4KTiX9hpB7Hovmp67hrSBMrUdWAS6kpSuZBbPsbm4",
  "key14": "4LhLJ4hveudjGuS88ZWRMG94LNQcEUbeHt31rssE1LQBGEcFAJ5oTyVbsdxhAoQG3mEcZNsQ2oAFqtQsoKbxpSBc",
  "key15": "3z7S4LbrdpFcFMyQoUkqX8pVn5V6j3dy3RaSqeK59haVXLPipCL8aCsrm3hABfe9ifVHeCTNfZnyvXuiTRFvqQts",
  "key16": "2XZALp3nbupsPQtAsj6eQLDyFTxTChHizTcrG8dFW9Pj3sfNYtLmBKv5QfHerKbtSiXgbUzMDUdLYZqqRQ5q1oct",
  "key17": "2y8oK7XAo8EWFgJmPsfpTciDPT1JrUdr23hZ4cEx6UMqoqR4dD3zxP9xeXR4Jb7frMbJpwMBKrEGbzv8DC6gy98C",
  "key18": "4uL4sVDCfjhh7WUrNWszEkCuZJZ5gMGHaT1hctrd64QL2AfZss15Y1yJj4Jr8yWmLSacz8ZhWGCs5dvNmZfgaLFE",
  "key19": "gPqmpbmR8Ee1vgL59soShk54JLfaqqgxqQWpSjG4YkEQBX8BKGba2BEzzJST145rLBTuvxGwB8o5AUHapP5xuh2",
  "key20": "3aPNYnP4AyuYc3H9W8KDWLo3XoF7AaUXCsp93cnM4Fj9f86RvTG9sNDXE1yyYTM1LuidUM2eaYrPhEgJo5ThUZfR",
  "key21": "5jU7A3wPsd53XCw8KnGJPmrEVctU5dtR9daCi4iKF6nME278Tox8fDQ2nYknXJQKAnUWr562TgSbTDYSVUWciabq",
  "key22": "5MTrp6g6CsZ4Z1fmPqLUMJQCvNkSsqjCwuZxj448sxU63SVHHqhANG4ygXJHbSzkyK4dBNK1gdM5oq6q7qmTq5Lb",
  "key23": "4oszU2scR3dcvgtXjbzMrMLE68ZRNrCqMSz1qNy8tFaq54gCq4XJZZfyxy6mEaSeR93vRVqMtazQhLtxZeXiMP7A",
  "key24": "FSJbVbo5RH3Pt7izg2uZiJeCLVAHhWEqtmYL47UY2FrQhtXfdGahgUPUVPY3nwFSiYKitRooEQnU7548AS4FLrS",
  "key25": "3fxJBTyKH6DN6h9Cv9hQ9VUsJ66jhbuXfhrPw7VgbPnexMCDbm9dYon8594qRZMiKQNTp4hB5m6SprBDq89A9r4e",
  "key26": "5Sh7fZGHnvaPEWcc5hijE8vgmQhXhKmAbAQDDFtkdCEzLXkFhqytVVTUTirTvSZtZBBTaKDSS9XXYjGT7DaqDc8J",
  "key27": "431BUq7YTaqoJSYUCTvaHJrqYX3f79GiWHNhYC8LraYaXV3CXidXtVnyhJAbJK9kmViEUTTsT2q95TER1YEHg7yb",
  "key28": "4PosUajW9JEoNsmj78ca5dotcvHou9RMea5zDFSh9Z2Cpv6bGAAUvkDNK5rQjNN6dE2axyAjRwEDqYTp7xUaYQGH",
  "key29": "3YYThUzsqVUnTbYNnkAASbRJCPtVwi1zHkqzuAcdZxdovP1KaDKUiik38Lymb8wbctBsZxGeEHShzuqjdfPVga4D",
  "key30": "36Wt1oJcE8PpsWoAJs8JLx4SA5xHzpMyRmWwdoM6xLYHAwa8JYd68yrUB3Nv84XnzfMVFfGVK5QLMrUfvdF3bZ3P",
  "key31": "4iZAPGK9MRachW6D6Qv2PoGoH4EZiLGfjDYE7NMaYgEmmGMaEakmsnVviL49VRVxJt5prRGaBjHfVcE4M8p77prx",
  "key32": "V2T4fcrMFs8aUHWfLyDB7YwaLjqArSRR9nSk9owYV4gPDQaduE4CzvrGWT9jysXZB8c2B13dkbjevq4RtJNdDLE",
  "key33": "31nRfyv4VzeFjn1vyZQYPHfHnzPLZiSCYVGUXtwpVGKdbMNiCxBy9wfU6xReEhhPZagShnP3JqXGGCeJoBPAZgNj"
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
