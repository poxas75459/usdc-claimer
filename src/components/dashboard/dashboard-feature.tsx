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
    "3Ge69dFYCJf1b19FCaWTiW5jPMT8ArRwWTr3WSNx6ijjaTpZP7takLEREdL46rF7sGcoG37RKpuk2z4WNbhwuEkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gopE2mB8tAASdM7YoL6E2jWr6adBqpCm2E6kqC15zTNsJJpXdmSfbyapXgAHDTqgfoL1mbtTnBQ8WcCsHK1zTCu",
  "key1": "2vVTt6JQVWtBvPoLVoLz3RLEUBH7ndmA3WNtuYHxaBNRYPnE1g5rAaMMFX2ZbXQcuLPcQjmhGsupGWWXXtvxV9ce",
  "key2": "uBZAuyzxkR7dSC3dQXgdtaou8CdV35jAP1FH3NLitMWYmKrTzX3jtgTGGTNiDnh7bRjgATKE2vKN1nyfvQKf9bL",
  "key3": "2pe6vRSnBfBEnKx6R691pd65pyrLKGQRw13Nzb6gytsnuaxdyZQeFUHAUbHth4p3pBbf6TJtEuWEpU2qMcbpBBd7",
  "key4": "4s73YLEt9v3ahEtWd2xxuJqnb9js5DHeHbpkdHDXAv7WmawkZwZCV14qtM1K3uKUv7EsYTwDUTbCZ8TiQjc4hG9w",
  "key5": "3DoWgoihHNyX4KAvmQYBp5oSTPeiU4PFJAbs7XF33Rbf5VFYRqtbueHp2Mw2bPRGYGE4uGQEaEhYFtrCgVEBo9VD",
  "key6": "3M4FXsMbRuoW9dC9bRvTooUd45zkrZMGMuC3SU61rrotFSCjbhnrNNT8H3qbcXR1kcH6NsUCgCJST6sGv6fhJN6a",
  "key7": "4hsWmu9KnRjZkApv2SSzeTpdn2NCKjAbz733SBS4JdSsXQNswaqHYxHXLBtpFaeGDS2rMRkxkr27kBcA7fE2t6Cf",
  "key8": "5WAURVsUBSPog46Nod94d4gYAa4B4CMPUKmPHXWuskor9LjE6QPPZoytLrMUMiTDkYwRGt8T8b7UVctN6uiS1JSy",
  "key9": "mASCpLrR7dGoyMUeTVEddarQE5MxafpVU9ocFpC9p3yj7FrawjLZ6SdLDJDz4vPcPjsAya2YnvihSkSE8JgHLPS",
  "key10": "4WZTbWrZVabtVueJcQVoqtpQJqrPy39VcZG8CwrYsc2zbHTcaC4jCTbNb2dnWLT4gqSuwzygfEJYUPVa9BaUf9e3",
  "key11": "4QfxgF3byHU5jPp7FyPgbz8zvZbRP47dr6zqophdpSPsj5eHBqY2Sk5adtcEfVU3H7oE7GnaUHCzWfeFdrTu675w",
  "key12": "2vhKnWZmy6JCEqpkJguSWHcwQgiU9S896d5NYwR8xwHeR2zxEaj2iPYEJGofQ6p3ejAbdDE7pey4gct2vbGfp7Cy",
  "key13": "2AjvziPqArrXK67V95rB1pSSLgkBgh8HLEkc81KUTk2uSTjnxFnTajXLcMAkWnvBQwSrX8BBua9ZS3NCFgvsdR76",
  "key14": "55UmgN55d22z9mvtXJ98YQ72wbSLPTZph5zrs9RjwW4JTVhNxH5JeU2uMPA9Gsy4L9xDeC49tY2UWxVsSyvtGoPu",
  "key15": "3zBasHM6JiEWmpn7KUzREEBfkXJWNbaWuJw68Rp6nvZagXeL3A25rvdHKQaoQSQSkaBiXTwmVpgtf6gHP7mYLomM",
  "key16": "6nmrEwqUz4GvaVDSskjYe7Wjaz64nLGRZKmYtGwxiLbTZAknw9Whwsz1qdh1eShKiWsMhsGnhamYzXXTRTkk1GX",
  "key17": "9z6Fm57nHjKcGVPMXPGPKoPfc6tvW5EA4hGak3qvVzKYRn3ztKnXyt8S6vzT2j9oCv9tZJU8joGMd257R3azSHF",
  "key18": "4cyt96MQvoC7R24qwLK63VuAjEKzNcvPpXnKsVCGJC4fmq9KBG2epEj4eLnqz41WhEq8ZsSXQ1m8MHBCJkFVYDBN",
  "key19": "FD6e5rBYG8QdyyqpdLyF6up9y2RsAm5ttMcRJPvKFDjxw9Tp4Z1YYy49fjXh2pdHy2BZiLUwdp1R7ViCUtMJC5J",
  "key20": "k3A84PABjeSfqGGUJkLC4b59cWYP5g8xN6Gnb5hCAcVsXkFYEdpVWfdaxsWjL5ecBHckwqYJvhQtPeajRQJF19H",
  "key21": "dy4dXaDHVqkmFi7J8RyRyuyGKL9wCcEDeag5dtAcyk6FejAKhJqWGcvH2tuK6s4yeENoCmNfPyQU3rQsVRnUyHv",
  "key22": "b8jzBqPbdw8qbgrNReDrokZo3FSe6NoK821kQyvbyFc7wce1e9HPbd9g1fJFaaiyu2jnmk2AqKLd3ABotcQ3tGn",
  "key23": "4hDfk8ytr8LPhTmvtaEPQ2PNcB9Jp3YhnzCdGAi29gCbEL3a1oDe5E2uNHWfaQkqimt6i7Cr2Jk1CtbXS7HoxDRg",
  "key24": "3YRLcWzNP3QkjFk9EYjKtx3AqJvuiZWbNpbBbwSYFJgJquHtKixaJjmBTRwENM2y8AweDZ6ShbijLfMjqrRd7GLH",
  "key25": "3zLtkapJtm7xenKTgvBUPyokv7gBnaX28YHj93xsQBFd8PSUvFiJ8kCF9rJW1NVKrgkiCQYZ95bA2hPrcbi9eJhD",
  "key26": "2zoyXm6jVfjuNbRN3CvEbNEVPLoVCnyfcnb1z2ziasrVEWX5iZBJoXfP8xcgx2kUELtDXPfqfVsi59g5KaFwcZSG",
  "key27": "61tJj6efqexe5s3VBLVwGihQ1aPxZSq9yJpqjSDY1xt71GNg1n9ktz6e7aVHJDCysp93rMtvmdQfbKaJYH4UPFrf"
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
