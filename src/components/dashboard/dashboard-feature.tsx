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
    "3c53zqH8MtHk3z1h7kJmpuJcuAeWemN5UTVz8NhStRpd1v4HzTy69hEqandjKPJfwq7zxPCYmS18BNnATTcZcm7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sxHhtFfEKgX8B58iyyFA6ohXt9r4Mf4nVHkpSzZTmrVLnfGRuyMjBW6Y12mZ6YtBSkREJBMLFFY6bJxwkHiThtV",
  "key1": "3JuxKYuCcwi1W23KB99JpFjoKghwa4W6nMrNodRyhdjAz8wKkHZMLdsM9GL9V68t24PBXRRk2NzT6uYGEJtkiLK2",
  "key2": "5YpT6yjpS8GCrV9e5byz2RLZQ3sw4PdzgrpqvSee4tKFvRMhsKs72SfAYfBE8bS2JpcnfyHgqK3K3FZfyWASBYyJ",
  "key3": "41XVcfnEc8A9MzXEbcH6MvZebvEEpZPWeTTwBD7vnrsRkxbzwSTZFQMBFR8h4t8KAy5wuvmJhFmc33R657BZayZD",
  "key4": "5LBdbGsV9Qfk3U3NpXoDoLnzEXNS411zbLNY8Pb2steKCh1GyYxhjNwU6xrFkDrP2rYAG86Bmi7sjVVibLyC1MEz",
  "key5": "5cvs52Tdg1jFB5g4uxUaa9Z5eo8aiqmQLAyAWot2ghatwCLA7jfDApVfJpHTcQf82c8Cja2YMz21wFj8bqKDRS7C",
  "key6": "2PvNV3dWEJRrDe6udo9DU5onouT5FL6Ce6m4MAWprZ6NRbpouoGjk9agZs3NDc9cjxXtmHrv7aUduCZ53vseTxZv",
  "key7": "y93WgLCyiT7JjEV9VpmQrBYb1Y127vk4WF4qzis87mUoUoisTxcY51SWdfPYEx7NdcCWC5oha25RQnGVg2VtP7w",
  "key8": "35wpMDDjdFD4dhY7hdVsqeVRiWpyz2vJSVXK1ft6CeoKCXgVd95S9xV1GcEqK2TW9LZT491ZdEbKoCB8n9eKqek5",
  "key9": "28KhqF7fDsboFvefuQzCe6fwoofC1DGJtRYmdp2BbdePe6FYbZbGgHs9ziXA2uRkAYyATFA3iq4QbS3J2CCMhLzU",
  "key10": "2eZSEZnfkh3vTSBwDQA7g3YdpiSaPbbapEmytSpdS9wwbCeqS1bKae5FLeBCTn3QjTNJtHf9to8bkCvc96jSTMMM",
  "key11": "2vVjzQRr4DEQ8HjeQRZBBipN8SVefLdB1u1na6yFrBGrFbW1ku5xybDncFAJhXkqqw41LrJGemRQcQwb8sQfTDHh",
  "key12": "2nknEKksqURh9S227oTyRJcEPZaddU5oEUiPzrfwvw2URrBAdHEt6KzK5CgxzCJonLgmBWJmgCevByF2PdRSof3W",
  "key13": "4MtkszucYFPFwWTBaEeuNU9XhnS5vR3CT3fECsSroxtrKmJL6883prAnrRe6Y75eWZsdvvHdgX8FVZpYcuG38ZPo",
  "key14": "5FPd5k5QZgxkouMHfzLSxuXqzKcqKZTgW2ZTi93mFtRx1h2gcPCkRNL3qyBMz5QFefy3iRgdekmqRoGnHCWJapB3",
  "key15": "4ma7EUKfJ6aUNx4CE7R7CzyZeuyKFsb9TpTrTYaRVBZx84jv38wK99XqthasNfKxAq8j3R2sH52JrRpBouYkDLfk",
  "key16": "3Ls7FneWW51iiF3bsWQZnAgk65biDeGKBeHjijUs2FnQxARKibMhw5JmnTWMymXM3ec7Wq8FWLH6UzK59NFMxTG6",
  "key17": "nxzJWhqHpCX9CoxiSeATGp9g4kAqCnSAbwQRegUu66W2yEh86KBcDgWm9aMeZBnpmf51ZK3mXS9aAKgG6wxFC52",
  "key18": "49zGuMjq3tvBXJJ8PEmkE15BXKSxYAdQeseZZwvxSmZcVS5CaTmVtFAoC2cw6p1h7eN4qZvnwdhqYzy6xcrjNTq8",
  "key19": "23huzKE2TcGuBV8YKxbYivgerFLtMjfKvQqVCnTZmpqPPiVC4Q2fx8YgNXLvnSqw2FhkDdSTuCWF7s7DN4MU4MRe",
  "key20": "4G1PWZGfkJE8jfpdzrvB6Ct2WWV4PKTLvWm5848qTPhhN6Y5Njzq1aWZUH8WZLHMrrDRj8rvPXjPDhuURiapj8rJ",
  "key21": "3VemmepKnRnoBiLL3PjKNMVN2WyaPQmS4t7S7xkm5RyhFS8Aw6zt9D8UebQMWU9jbARqNWMDWZ2qrYapVDzNwtjt",
  "key22": "ubBZusTbgWzpov847tp4epcXjWj6YQxsHKscmY42AySwqn4J1GU8ZvSc8okEzLkCDDVDAko3q9wmeaQx6NsaPAF",
  "key23": "3VBma4Ud9WjtwGwfRAdnoipZEAG1RZmMNBzfTYnhQavBUj1vyHrqRW9E5UzVvdZGTyLrPNLPGvpWwWtfqypBNAwM",
  "key24": "5zPGQig9KpN6mhdWc8XLNoZ2cV3bCs5U7RRzrgLZybJF4oSvRz1S8p5fVUeLCGN3cg4n7eHWzGidMY68waDnEDy2",
  "key25": "2p8gUowYnarDgQwTHKtGrCuVwkkkB1etVEYhFKKz5tPQEbefRPhYfpoXznTGZVfKnENEaKK1kMStQ5B6pTKPTkv7",
  "key26": "4t8JTTk7bD2fa82LZpEewDF3X4BHvXQMHaLdm2MhpXxBbaK6nUDqthRSQxhXCJNLBBsLqcm7kYp7PtDKEmKE4428",
  "key27": "5HBfeZSV7TNVvTYb8gmz4ckJkJJkzLZS9usK1SEJ2ZbbmsNJNcpeDD8n415yjmTmg8LkxCHUTWWDBDCgbkJbLymQ",
  "key28": "3K5tFS5YVZuLjGz9uEBPHGs29ZcXpBVK6WHAeyKYJeRs5v4HrgMVcj3rUEY9RUQXiXjjjbW1qG1RnoR65KHYQDiG",
  "key29": "sYejJybdFyYXtHgZnuEZt6e3qCjE9tLXXfaNFtnckCk1WrgsQPobAp8yydcpqUU5nDe4K9naXpYpqZYEoSvRvqR",
  "key30": "5RosGWcGieTMyCJMdxjPLo6oKzYCbnBN5aJxtH67YUZvkJumYn5Zr1Xjb9mVhMj7FkRDAKQ15qoyKkmrm98tBshs",
  "key31": "39Ej2Lx8YYenw2w298GnARTR5xHpZTC1YdoyCuo1ZjJeXCgXYGXF5R4UaZGqJF4YNzS7GxtSNmEuXLiTuEeGAJQ",
  "key32": "3E8Ck6qxyeT51a9r8Afvi5VXPz5EgrncekKrjCgeRPALmZ7u6VdxXD938F2ecMBQU2SuyuW3ndHZdeijgTeoxzyp",
  "key33": "27DGMfCozjYiv3ib78RT49u73LDjHaQ88tekVUKHXARDFjHjuBYo2tDR7oBetTqEFikahzxyxJSEccJUJQ3txBE8",
  "key34": "3Np4FwFFYwrQ4256siATHrjyxXME9zFkVwADwJ6KoiB7wbF9URSfYUFY1roUrKJcLBBUNvNGFFYHSYT8BEEeMmve",
  "key35": "2B6uaedPsE3qZyrtQVaoswUGSfXiSiE7dhienqkAzhuyUyE3XgEqBsGy5F2aGEKeWBDmRVAiXReTrAhsjQ5pT976",
  "key36": "2Dmngo6Jw4yN8PBojxnjLDPCYLsHBxgzwQ6ZYCcib9ccxFwGMMRKxCW7qgwm2QeoxjjAubv1aaZZqv6yDJ24dQjQ",
  "key37": "4EA6MsQKqym7XjLqKzrdwD3NaYPnhnuFnBVq9gw5fsNtfPrxqQ5iszESkHTnhhKuGVA5Hdrg2hmN8wWt9yfEjfSF",
  "key38": "5GD9fpxHpeAMPem5erxxNMrBWUrY1b7wSxpVPFyppZNDccGPYhdBVtH5Loqpu3eACETxmsspbo83LXd4TM6FDGm3",
  "key39": "3PUfNo9JLuWCpiBcuNnaWsQgpNwUgkiG1VUKz9qjpMPf4AZRt5k46uZSLX3Kj18g19W4iayRmxy7wgDVPTecVrXs",
  "key40": "4TQNXkH65dFqVnyPDwibKszaxwXfjQ1R7wok3aQ9W8unaEX34WUYMRLMuAceDTi1JK2KWf2ohBWMR6LJYcbYXMy5",
  "key41": "37SA3K5K6JNTJXjQZBbVEdSWWwhxFGysgoHJwAt1wUGby7y4tEQKyFZtiKW3PiFZh1ZQURycNfdGNhpAoKZQXB79",
  "key42": "58c4Wuf1ufb99v2Ny6kodCpeUFXzaNaDm1gbAGLR7HrowUgzBAWVPsCe8VYa8qj9oP5Frh2P8gXdemTN4wxQKNCQ"
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
