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
    "4XCNdb3wwttiesxg5bLwHtcFdT5Fyd3S6toZA2Pd4pQD5buZZZHvV4xbXTevz1hLCtdjcZ4wymB8hKvWuzmJ155V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GTPNr5iRWSK17qBYzBxhdpXPBhfUTeZQj9qhJbUYF8YrDtvJCZdz6tn6zsx9XvZ8yYHcnGpT2eszeqhaiafAa84",
  "key1": "2ca4f5Yxsk2maefgnG6Aefhm6WEEzzPbhskHBT5RkJDoxrzbyTDQkmx2U7zKg7zrmPdJsUyf9XTCgkNSea6vw5Lh",
  "key2": "ErwmUGcH84LSRB4Eq4wGqaz7SDxQUiVqHqBNK7V3G9pxYBNvWBhS7yFcFwqvVRW5AvMpXX8oFSk6dYVKQkaypBN",
  "key3": "2pDPsU9BNrJCtxzVV3dVVDeD1BJys5o1cAXmT1cNg2t3qBuGUxZAhAHeAJjAqBG6fTkZ5BPR8RsnQE9vTUnyb9CF",
  "key4": "89YrbL6usjRivqwda8pzhPWZ5h9bBGJv7d4cY1XAcQsxTXSZaHrYaa5vHZdQVmowHH95pP6FwXCJvK18kHF5oM6",
  "key5": "2FCPDumzwxEgkMxUTZoWmM2ugTwLUaENtpKSqy8B2zVAVpoJAjUGwD5K1GkSp6AievvXSVPkNiqhYXRf1kGowq4G",
  "key6": "5E2uqLQrn3z58tyuzUbBJgz8sqYgEdvPCkLkYhT8Lf7dPjDqwbA3C2ybS9nBVc4i1p4KTw28ysL43Sqpvm4hsurX",
  "key7": "2TWkCAkhbdvounCR9E1bZwYQfY6PGF5MFRTVxjcwbQaDeNig3KcHBeah3oEg8Z3G2irQ6nkh9cwPJAHLdKTfzVtz",
  "key8": "3xUAVhCYAYUWSTECKtphNM7vDmyuPh6QQdxSXrcihffMotLMCx8tUk43U5gxXDR58GRWeUFvyLnM1qELs5jjLBCR",
  "key9": "2BWEpF3qptVr9VMAuBdi6fT13NiEbpziCEkwByVFbj6NQg3f4wBAsRkaKPnPeFhwdx95nhv5wc5Xhj758vfvFNyv",
  "key10": "5BiLavo2ejhDX7WUSjtDMJL2kZbVfen2xQs2NvVZxb88iGxF5iAWFdw8C6moyBeTwWthGTtN4BYH1oKinXsRUmch",
  "key11": "4rP1jkwybADoBAXw47tWK29UaqQL9qNmudTy5imL1btrCeaVoAEWH5fGvJgz9k72PrwsxgbuJccS3xvqYPkkvhkV",
  "key12": "3baF5ZBD1RzndkYwCRM15QSqyry8dX3AUBNgDwESRVmx7JmwjdL32yBeBCWiP8ntM2rwgnkxeNGkpemaTQht9sST",
  "key13": "Y2EooCU7GsAJZxTUnfUFS4YkoxoqBQ1aetFf6pYbVuFokYbXjCPVxY4jDhQ6R4fedaC1X781MCyVTMBF3qg5Cr3",
  "key14": "25Hr3knfJhwSFht1bGNDsAnyzEFzYiThTRiRmrJFEUyH2pBBJSh28SDngCbxBsXfex5Xrq1yAdPkkWUsyuaDE75n",
  "key15": "Db3jG4vXP1pwmRbMDTGGepLC2KDV96FC9ANFm6SpNBESj52CJYwJNHoWU9tic565KgW3VCqn8Yf1Ed4zPJ247fw",
  "key16": "5jWXY8xAkbxBXLrsjAkQW9SxuxypBjifzQqF5zk1fgZGVvPTsARuu5KCmfsGzzrtQWfbvKFY2VJRksKyzMh67Dag",
  "key17": "2tU9W5J8aHsPDPzjWaGgCjnkC7eEszWNZZph4gkBaiGYE2RLA3g1DJvFLZv454rqDhxb6HYGwV3wYTfkiMNT7qT9",
  "key18": "3dBmbsqPCSqEz912PERGVQqmRUZCCwQNtxLymUiq4W2eZepxykxtchk2freYcuXRhiYepAv9FETpLGMrrHeX5bWP",
  "key19": "4zJoEYj9VUeJ1Q3Jbxd7MDWp784s3gXNV5AJ7GXzFhKgdqoTPt2rdV5dmFXMoNS8Vh54yF3oK768ZeZLe2GY3uyC",
  "key20": "5htB9x9QV2EpSFC913RdpBYAAC81ESnF1fT8v7AVj5Tj65bs49qQgc3h943ntAe1vQpaaWWK4FQeEKMW17YyzAq4",
  "key21": "2P4G4QYiBAT7zqhS8Jchgm4gZQ7sa5ZVMGrJ7pAUJ8NgfkSy8kBPezN9C58g5Hp2cdMDU8YTMHgG4zHRS9ndJxWB",
  "key22": "4kTZBkoftzQHLf9twFe9JcyECjfkwNDpgNRUcNqKvqULb1X9txPctjWPZp6Vm7TbEbacim7nDKL3eZevCLwTxjU2",
  "key23": "3XMNPky71Ca269CFXe4JG6FQN9RzXXB6NSHpVvTP7YMDhRevyXmB4RtyAJDfhQW2mq9hs3ycgaV5xD1arymYDxjc",
  "key24": "2jFsFq6FwodsGRJazqz9Xfwvw23tzgWXTLLyxA8BffnBHYVqg7i4BEirt7N8iLv3yv8hxL7qa8d4WBBYWfU9i4A3",
  "key25": "4i1c53C5hgD6toZLwgKw74SDt5TnkF9Jt9tTbaq1YCqyQFvtg7zfvzcesqVyBEhAc8wdBouLjacSqmGHqhNayYMq",
  "key26": "QBGuwTAe7zkA2L55Lv1c5uhqVSs2YUTL8i4rfr41rUPLJM4ZbHDmpH98UREbu3ADZepJcZ9dohCVNLffRBj3kRJ",
  "key27": "wyNHfNicAMenaoToe7o4KeFJHNT2ANL3U57BkZX8p23awjidrCbmHzAeKTXyb2Ro5ey1GYMCbX2cHkmaVd3prwC",
  "key28": "KTAJeb6g2rkrsu88pj1iWLdvE8SrkhTg82QXf9NeqMUEMsPFkEE8Rw33DgAJg6yFfYF89kdtDQD52MLL9iHNePN",
  "key29": "5a4HyTNbaqhxaAJpwnzTTV8C75ywhGdxFun5b7xaVzzwzAFEEAKgMnwPy2kstJ4bgoQg8yueUi5UUfJ2qQGiz2PQ",
  "key30": "3MdSvfPmCJU5aTCsixcz7Qjobefd8ktADxyAcsjX66wSgFEctSDhYrtVWpKN2pFR6weisvpcfaxAVctLLoz7Winh",
  "key31": "5PdyG5wAiZX5gsch7zN5z6XMyVtTxMTfpNJYGg6LJfNWxBgWHPAesK1sDjiKnNgtcXJQnUjqeViwawDLv3qWYbPg",
  "key32": "5f7TV9C4TxzXbuuCbw4rKNC2UFFKMbduw61xFDhWrDBGgEbnhHmV2im6bWLxmjzRk3idVkUHsAC8GJ293VBDWebE",
  "key33": "3YFPzM3f3gkKHTZyyijNUPGxREQAe78tRiDkvcLpwnYijWN2eNvWEh1uCdsM2cbzQeHiqPFfMEJYXHTkBCbofxWY",
  "key34": "aWVPVn4jkymntgQKYS6wqdwHd1XsyfhPeeTE5wD73BvygTcoGRGF3AtXS2eJrbH1rKP1uaNYKj8am4yPqqivvhy",
  "key35": "H6uyav8rhNJnV8JAXP5RGohrG9jA3XUuCAXmTSxuQ4d5QtQ4nWz2dcRMUpaxvXireY5rXrQn2WxaUKKAqJT7yU5",
  "key36": "393nURQm5BTR7QEJZNcHg88Ua2TDQS6riJf7CBzcs9pJgM8BW37uQJ8Hdbm3iXEsdkVq6ddFaD7FRjczaygjivnv",
  "key37": "4c83oCqQGDFJJhFynDp7AbLJTAZDLDr7rU8qHZZ44C7KJkzGhEYU6x7qv3rbJcGHT6HbrSF7i98nLaPs8eDyy3mJ"
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
