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
    "4qfPWWRE46P6x3mZBMMByYhHZQBEHfo4qSsds2Ut8eLdG4KH2dLui2U6W1JJvE8pyDNU1FmMCiGrB1REiPZLTsFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bChVoSDJZda3bFapDJRH8xcuM9n3kxpBmi3DB2NEjfvjEMxX4eCjjjeHc5izXFPYsSwr2Uo9G4hLvfiRtYyDuKu",
  "key1": "5cWM4DPV96EWVhvLj1j87XEcinoHsxoZvRudRKR2xEs7AwNAEMpBaXBiCmnJpyY9sTNnUHm8AHaXxx6MFmz8iAv1",
  "key2": "4aK8w3G1eESvXyWww4XJ25JditCZ1AqE3ixRo4CXmjD4MxUbyvzW3D1S4Sat9hcssNuYQJrJwr634dHfpygM4xnJ",
  "key3": "Fa2mcUPecGUHUVLe9jeUd3KU6pRAkGXvuK6Ku1741VJsjV4n1kJXcfnBZHtz4ovEEEoBFuLmSDjAxnwaCAQLvpH",
  "key4": "2d1jVWF5UUr6QkL42TFfD8VVCwr5MwCTkmcK6G3EtL1Gg5Se7KQbRGPLEoKFdAv2xgNhMkZmavHEqo3Uxyb3ecf7",
  "key5": "3JJFWZSSjS9F5qH94jmwALGGJWs8jy2hQcxyc26Yj6FHsftjwGXXAJgtVo5CcGodicFY6RAn8QWDtD3WtvxNdzTo",
  "key6": "2kcw76sTKMp181TPjMUbCxaFp6ntVKWaB2Tr1yTz3rgtHCD9veXaMLoWDWEQMP6d7w1GBK4Dx19wbhWELUGWCY2C",
  "key7": "2HsTzoyqHUg4BbKwK4m2Bs9buSYiTrAr2nFPh3jJFzcJvwhkWqKz4HmjqMPj96y3kStNG5GjGyLhkbD4HEsu9zGm",
  "key8": "4mi3bYBUTPKUXxzsCgD1BfyP2FJkp7PXBcvFDy4V62jnd1KXXrWFW6tih7k95PJLszizYNqeoTSx7FsVxbcmQNau",
  "key9": "4xTN2RJWYLyXN7jf8NXH8ZP9cpSszDTisZnVwjN6SHkouVmyKTQ7phUCM7CmLvQJDGejyQPtfrhG3nmiZyrr2Ta",
  "key10": "2WHpmw2kSEUQksfGWkq9Hg4vCsbc72yg3DWUBAk1Ej7weXrdQekbEDmZe6bDqPMfQ9AV9bU4L8VHo2smQvfq8JZB",
  "key11": "4CoRX28LAvuiMmMDq3M6QXB4Y6Bn3QSotCQh8m6Gm9Q2nytFWLXswge1qm3hH6V5RcCyNYHz8R4N3BmaUwffaHN2",
  "key12": "4BuyZU8dgtiB1R8J2srLKdJgL4UDy8SAMmErEatr5Zuz44LbojoBDNSM3Lqv6rN9u6FUJmSYcT9dYBduFjMKkTPk",
  "key13": "4GcdKrrgpcdSyDQQerfTfMNfwQhcLSukfRffs3hgL8MhyXfJK5uaPs8rFQWtY5kztBNkg6CscEQXD9oCWsUzK56E",
  "key14": "2Ry8L9r1MSMi2jyvyPrLV24DiMNs6MkrZZFj2eZWZgKEwXkcKUBfmDttusDyJWzKtfj9Bm979BhdkwZAAsXPNnmd",
  "key15": "5pmDrPD5so29e3kqoqSYprogNt2rCbi6BuSiVfrCBY3VNhb7XVgK67qxJv35sizwY7n7KfXBcGhJygfWmencCLnL",
  "key16": "5g7GARwkmAENHhn5snVAq1Notfyc1Z3kmWzYs8f1okpUxRZeVwjwyZvYH1NPmVjxDRJCDZKuB8UvTqogXqXHRoSE",
  "key17": "LxFxstxKANFxR4cyS1tbwM2cuvwcJr5g7YXJMoUYbStWoPjGATnGS5uKHgSg9S2JDLAt2bamD6b5qoSbEra7tud",
  "key18": "4VD2RAMkYcHYm9ytUiaxt8Rk3gGnMAEosL9yg4GWWzHWbTnAJpjSuQVJXMnT8McwTFeZeskQ6ECMexz5J2ksrzGr",
  "key19": "2gptz3KrsHcxaZHDt7ZWxCXjjixLe8fyXph7jQEAUYampafUkx2nXGU1vExXa39DtBKUus1pot4DRvh4TCe8ssuQ",
  "key20": "2rWgyesjzY7RV8MjdPZC6MabJJsbtN4ZioC9Qc5DJP2VGhbZePrtFci4Fqk3HuCaFeeocQyaPmaY1WyVc2N9SVJJ",
  "key21": "64vrNfYJwYJLBgZfTg7NLLMDg9WyPree17uEg38KdJfgwtxM2U25tU6XH6ucyMBDFGcyS6YHbQKh1ABGmUTqyfFn",
  "key22": "2HXC49MBND5AYhW7gBvs7ADmbJQiSvkutcCpf81An4a6w2jHP9NGHpg4CERcjAP8ebwWjBHsfRh6QCaUHaSKSdYT",
  "key23": "4TP2tRkDZATD49jBmifHFGkbd9N4YGi7qR9uhDUTuzaMnFMzyD4aEMcV5KCLSKVXjtqzyeuvowotBdx3XfRgHnKR",
  "key24": "5gK273RL3rpqCia9NgRbmMwqzrewiL7s1j8JVZi388VcoidxpEQP2XmoFAi2xNfnqy2LBa3G9JcwqGHvS23ybpux",
  "key25": "2YEU7ecL1secG77jZ1uCB9htBTLZ51PAuZpALrtdYsfzkNqY3PKYQiG73DL9qAsYWH62iZUwSEESkMZU1uAwyPbw",
  "key26": "2Vg99qzA6NQqu6nQau6Anu46P9KenTAYzNkqiMGAD5KawE6y7xGyX9Cfm4dNqnihmyFgnPJm9312nQ19Lz6nNyKz",
  "key27": "2siQw4maP9uK3HnWhCrWfHSHQGJnMCmJGHQew49p9E9TQCzP8Cr35ePB33vvHPQ5zY2K1QNvMnbw3hMUqt4GCRYf",
  "key28": "369wQJkdgcnabhi27so6MFmU1RZQuN4uqcwATS4eX9FGPh6yhsLn6tfuy2F4ekeovhQnGHfZoKFmdvZ72GgK5C31"
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
