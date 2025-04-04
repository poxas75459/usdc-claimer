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
    "3QXKz4ji4EdwL1gAm6LoDVxSe5wddGkp5UX2J76hz2Jog3RhULiwFuT9KZET3r9sXhzMfKuY3YJpg8BkhcNMQZp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugL9hGqNWwq58pjDjfPASz8ca4GgDWKFGmxU1UfwheuqZNLmNmPng1nD3b2w31bUkQwwqv5azNFe82Jzm3Bt2CA",
  "key1": "499KfM5dHsN192PUXPCXs5Fb3QbMypE9nXTJiBHcxnXyYTRxyViL1gAL8zQ1sW1sfBTmscNwwFvovzF7sR5GjoMw",
  "key2": "4KNLWzVEGdE4otERqs8agEv6eyyXdBAT1v5HiRJiQpaDR3fpaJi9o7EYGMWpMeBzku3z6tv9Vy617jo4rQb7ikUC",
  "key3": "k2H99brEA33bmohTzrRT24JrxVYiDsh92jMBpsrut7wkTrwTwGwjfX8KJaEtUEyHNzUfvrzFXpLb83DvZL5rdBM",
  "key4": "33tGa4XQwtC56i9GwMTr6uii6BwPVX68D1nDHczb3VvV54mw2FckZiisgJozJcxrGQdwPJ1Tqo2Qm3TSGRTrBz82",
  "key5": "M7JKh9Q26b6NYUdG4MTQRSiYeejkdD2cjGR5maLw4XHXHPmM8sJST8ZKpZqkHfMrvZcKU1ZCBHZ5GSf2aFa5YrM",
  "key6": "5TJiPb7R5D7RrMvqYhYMMnNWorAhSA6F2QRYvKsdft6XZH9gK1sBWDfBr6QCJLcb5W7TASE61oF7QKc8oQ1wvZpp",
  "key7": "2EKjZCvGzwq83rTuFYiVTzfHZRB14Kh3UKk94ck51LkKNcoX6vCMvKAiaMz3iAwQKmmmdDnJnmNKPizMVjy1mWXu",
  "key8": "5HV73w6wWhgvr1Ra7NGfJwM4S3Q1kCX1N1mtRN3bqkCwZPMfGH9kADF8yUy4awSK2sSWnWXbiPihdKWoaj5cJDK5",
  "key9": "2XfnAVyxSgCGt3dvkrb7H2iUFjBjVBf1b5qVz1J5DFGHZVZqcJjBM3CpCzWyDMcSsimntRtkHore6EPNLrHsQcig",
  "key10": "2Tkyr8Shuj3uD6EdfAWtynBMknmyei2GN4ZPikbSiJMmvMPjephNT99sf4pjnqRfqEEKU8iUS8ztbv77RBCLvaZd",
  "key11": "3PnhUE7DA7VwSpiXswiubqK7S1Ux5oBDxYFt3xz4kwuQoGPDwtWn2cC2REzyjDcrJhSqZiSdhet8mZKSufggPm2P",
  "key12": "4gTy1cUkcnSe5o6fV2bx8Kz4Cx7uLkovRje49KNqFrMPwFkhrc1tTG5Nzkgyi8ZdCW4TRP3XgCaf9QL4qXKio6P2",
  "key13": "4jtfdAv9ZH6RbvBvgadWJPqN1wishF3AtP2BvEYxGa1ncDoXio2SxxxE7TSX9d4NUu3CV96qe5PhuaVGCjAq3xmB",
  "key14": "PtwGTEWBDLCCWFmLyy3DDwpf1ErmBECt5CzEy2PRZTCydiG3cr45K4Vj7cPrKfzFAn4vXTUk66cyr5aUgdfdrHL",
  "key15": "gw15wtdg8LzdUguejPRuD8rchNJUWCyvChcgWJHA6QgmGwD3DCczf1gC5B4LRDQ9FDcjVGGgDo5WZDE4Dd9MXuc",
  "key16": "2ubsqdUpHbp9zxai7yFgBQBtG9342ULRBrNQigZAMkZTG31MQ5JpMqBQwNgUUbiRRVx9FKjfG5db1AP1eKPZ73Pp",
  "key17": "2WBa9hQMq9fDhHoKBpcnkw6bchitfANefbHMJcJBXFNja85rrxCt5co8rvVNAZWY7UszDfZdQyynsncWXK7xDTue",
  "key18": "3BKDE372yEps15sxNwZ8ts3vC4GZp6yLWixaKgT28Xd1NREuJ8VoG4vFCEFwrHbKUfd8poJgZrndqk5DAVhH2dyd",
  "key19": "5wA1SQHuwBen6uz6WNUsbpKd1HxM58PgaEKuPcYcggZGZHLbVeNii3ZNiwTRF6fZ3yBRZv6i4n5ecfcGFAcbHhwE",
  "key20": "3tii8KoabsPcRw89iTRC8i5GmvrMdhY4EJk9Zef4hNzfZqf9d8CL3nmd5zDyyugs5gZ8Hf3YLCfUHhgz4JEzZbRw",
  "key21": "2KYDm2Pg61Yo5hZCrYmQm1ob75T8m4JKuLV2DqvwbKY7dYdpKtxt3tgiXsgDywzm7B8EAPDYfVExgVr5ZRFWCSVm",
  "key22": "4SYFE5hbueAMk3T92eEQieUVoYp7LKsppWq34Brvpne2R7srqFFbSsZ7HBm3hfMZQ4K7gqdhBCBRdpw6CTik5gLa",
  "key23": "fH7mzPFC8Ugqbj92iXbgfawEWmGGNQAtmdaHEEkcXff6LFXscJgsPeBWmA9NKS5swKKa1prFkiucEVhPr1gPVxc",
  "key24": "63H8D7ZjNgys7XZfgjzx4Mny1zqsTMwLMgKgkDTc1WoU4KugbNgo4ARaXK1q5wqA6oC3PpvuSPQikuoxuSCxwjEb",
  "key25": "5gyt8Usj17QQxCtBNPacbLKiqSy7GNhm1gFCjMPKbLfu8JciucpDps8mKLaEiTACEXTqQHAiDyHpnPufMAYpZwM",
  "key26": "3Qp1MRhnpBTeweb1sqNh6YdpnXth81t8qxKmWGAtg2WPL6ACtd5vLKfYo1U7LYjYkckZfBaBHmmEJ8tvNjf8vZpu",
  "key27": "33eTVzKmNwRKvX7ZikXadnBnDvWAnqfoea46WJBpLouMdnx7hXhCdL5uFfX1XpPPx8QWw9iNrMbZMnGEk9se2dVg",
  "key28": "4cWdTCWYGMtPdKTWsFBjmQc1JT3SVyyVnrgjmhj2AuiqDNisMET6GptVZAnDkjkigiDRfZdtiug4SBuh6o4gFNx7",
  "key29": "S55bvBv3wMM6bmsSLmD3RSoc7R5i8YGUs6fHPcA8b63wqj6SV9CLwGi8kJXvcsDVQHG7MFgrAKxa2mMwJQJpXnY",
  "key30": "4BVi9Mb9RrVnrKkaiR3u1H4ewSvF8xkq3N7Pj5gBUFyEZMXpY6So8DYVKd3yrEtWbFcZXfYJmtjy2JXtYHbEUkSb",
  "key31": "2hY6gzcX1yhiwnr7mFWM4b8DuzMt1yG2PDA1h81pcKX2LBQUXHA6z3uJYz4pS6bbfToji634Ap22A9N52Dogrbyq",
  "key32": "3278TdVyzrVz4FJXjo59b1e7eREqzuisx7W31gfKM7LPedEtGSLXKDe6RhmpJ6ymojB5YV2gJBVFzHYadPi9uhAU",
  "key33": "3y2VyKPhQsbiwYocjAP3TEGwXYg2XqiEzLiDeg4eHXgsz3TFGJKJveAB3i5XJdMdMkz8r4QpYsdTEPknattJMp5Q",
  "key34": "65GvMJr598Ydna7XaaVcMGQMx1vQofq57ztQm5PdyqsM3wvnJfkmLKrpum9KcnSuRDBiEKUew24YeRsasSuLqSrf",
  "key35": "Ynxvb5rScGjiGvSADqUDvy8PnU33PYYP1e8WkBtXNU6Hzu6SQeDNeC9ZttCA8QK3PGZ7QxmFPmtJJy9AB72S1j2",
  "key36": "2MNWykfnn5ko1g9aZ5f8nbbB1qYgkwgDXFEFEG7zJCex7q8CtiHih4PWD56HMfieLxjM9CfRvx7RZsm7XBKEcPu2",
  "key37": "3DKmUgeb9VdPZACR6nKxXbXRqGVwBEDihgkn5P5DXBWS1STssvXRgLpbrvwmsdssPZuDsJjeY8GW9NpQLQcGzhbC",
  "key38": "DSz1zbvted8tWShFKP839FZytkDZzCThFehUZjjhxvc27LMUXkgBcwXk38QFPCcL4WtDUa5whepSgNtnEP5ujrZ",
  "key39": "53DnF4hbp8iej1k2TTqUi4HqHMqusYm9LmULd1jCCnTfjMciyZeLB8ea9Pty2JPazbZ5HQnGadXeGpZLEJ7eKfxv",
  "key40": "4p2xDZnNhFUqjNdLaXCXSBqptZ6Pe1zZs7bwUES1AXHzvqBsyJosN2KEJajLQ3mbw4YzFRZTGHarYWWdXeRhrtzx",
  "key41": "5oRtBuZogeKSSNQa5JWo8tWez8TDbQLvs9FSjzQSip2xqsGtmxk1zsVqe5myZhaN43caKDWXzCPLsCVjHWjMDG99",
  "key42": "37YGEux99spdU7fksD2wWgCatvTUmEmT8GvS9zRipumSK2QHBg3pnfJLcnphRvUk9spCybFqGAe3h1Ag6UpDMW8n",
  "key43": "4vW7XszK9uEHrp4wBNtwCgLG1iLZ6RcoQzZwr8R68avUdJJzFCyxxsazfGiZ7pbUTkQfZCr5GUFkmVpkqfo83v7J",
  "key44": "oJnGKbJGHEh3BNxwnddD4o5882SxDqPmcSjphSgcNwy9jxebVhcF9LUqAfRxJZ1Qw5cyq6iLStr7HibHEAzUyEs",
  "key45": "5zN6Cc4on7QuGdLHQBWk8ExQLTuVQuG6e6nRGdTTHCEigxyjK26XTMWcd5ePcocBwbWu29q7jtFqbAy7vK5sTWyS",
  "key46": "5DrnY66jT6KVbVkncrP3bCUyRZLjaG3Z4QKk1rpoB6ikwyvrwF7BKDUaNrX1Ynm8tkLLauaDSCd99Z71cBVa8Lu8"
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
