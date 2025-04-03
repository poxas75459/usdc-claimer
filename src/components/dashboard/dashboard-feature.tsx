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
    "3bJEndowfHgax8k9Vs9ST7hcDpwNYEiZZne1Sc98asfbeRnD8PtqkUeWRYxB26abaSxGi5bqS62GvJy2DoKtR8Le"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "526LtSAu9F8u4gHDofuybDxuSt37arCTcmeyaUJUiFpWrp5j93HFLYFctHGUftDc6Un8LxdtFCpyqdatBcpDnLFg",
  "key1": "5bhRfZ9ndtuFRkRFiuDcj9rGB6KLaNJL7x32ufZ8N8WTC7LibzvfhtV2wv48guVf36ayJKKUe11VYVNtLowiGZLo",
  "key2": "3r68Thdx892vaeY5JmTL4GAfRrrYevFtzpddoan55Zha79nQDH8eGTLbzEgm34THLACUw5Ab78Kpnwpo6j3Vmdcx",
  "key3": "649f7AiQSyiS2DHnroidRA6E3p9ZpLJiidoCAj8T9drgWYoCxnTmSvgvMRejJCbh3CoDDNoGWXFxXWLhRG1g6YEF",
  "key4": "3W4zPyQjsLzu6M4UzCbtAdDN4V587ythWiZ6c8XfojWprumD5MvpT7FDMxPMBKNAq8jxgawYJx1bQA3CREobdrWw",
  "key5": "49V86wyKjsuCun7CRG1qcFZzijATgVc6D1eUSyhB7krj71b6sfuqTpzJCjLDKBPBzTD4E9dKNLwoUKZq4ZKgcVkk",
  "key6": "38HtbuFJFR6SoLkXeXx81Cm1CXDhkkNZBy6M8izkmnv6LMEtyvDfSq2waxHpSV6wYRYzCNvy7fGJFqVa1iuGxkbR",
  "key7": "3wwvmTB3nYYbS4XMpmR3JP85vNn4U5UFwvUCQ8p6Q3XKn6FMD5wiJTCc4gX1Zrbd2s9TD6FJftXd2QLo2g7v5VnM",
  "key8": "57qHmuFp8oAGGfPZDw1ZLcdiXrgixZBkWUD8pxHbkmaYhzBMwRKLgym5xjP9aBySmHvhokiUcY2wC9xg4CThDTyZ",
  "key9": "5aoAVbhnv7hLHyQ3xmGFkFcbL2wpgxAg1uxR9ozSfkWAdPTTUTWiJMJe6pe6jdNTWDw7CLT5Wz1fziJjntnyk3gH",
  "key10": "1XCzZxtXTRWfcEKvABE4edDmtwM5sQjFrUDBLddQpHad6763Sc955X7rkTnpKHnHQJ4TSJHBq5D4Dy9DJNvkdA2",
  "key11": "2WsADsrkNacqzuZCBCF62qZbebHLDzuU2Cm6m7ARrBgmVuGjJVM6ayBeJ71S1qCMbJxR1fq4E7JRxwjCiFaqfyfp",
  "key12": "2HAEJQKbxnZXx3YGZ9CxTpqWfPxkiW8JYNmptKBX4yvwpetL51fvvPACbaZejN3BMSXUiUjf9pPVRReFCN4rM3gk",
  "key13": "22EdtrbBc8M7ukYg3EWMK5scQxehhS15DkwWNoUwAriZunUkq9QAE2Zf48DxGuP2YNuc2DzUNuGu9Warsy3rYBxr",
  "key14": "4KmtgHiaweCGB8CcgaBLqu3V2KqHESh8aA4FYWrDpPuNcomUEfkE8FES6VCQp5gQJBP7UMW4soCkjKackrFd6ZgE",
  "key15": "pz5WLd7k24M7bCVhMN7M6o2V7NxdDsd6rSry7Eiqq5AEQNYX4gyoCotuK8XkDxwVARdBm9aLDZFXZ65bezczXS5",
  "key16": "sFchuTTAdtNVm15NSxgeUmP9niCb4bF9ntQ8XNUSwd6arVHeeZhPt5wyYd94wbgEPpLApCDaexJLWsJsXXUtZqu",
  "key17": "3EVGojFqejBc1aYHAy1dCbCJi1KZBXr5Pxw47sYLyEncLjBQNKjPDUCm3wqexJct58VB8bKyoNk9gFfTGqfNG3uy",
  "key18": "2hD3EtUhAfrQ3nUYkSUQqfnbgqeBjkSnXbz9GhcDDon2YfGu9TcvMFweGE7zFdGdapwsk9NThqGxbpKkQzKGtsBs",
  "key19": "3Ne21dyKPiuF5xokJDf7noRr5vs3UXbLXous1iTUu36YNBknjLLS3wbiMmCDPfK1yJsWzqVMYDvW2dFbftiqbRj5",
  "key20": "526cBXvjzf6gqf1ytncopjkUvWgRPaH8bw5DcqYSyE2n8cHsiryh4iqvmdFsAfrrdJv5pX4n5EZAJw5BeHjXDt5N",
  "key21": "2Xs6KYkkEeENfsLUWSDuXVxDDBMNp9PzVzKMAcjko3DVzhiDHfNivMoMA3Xqhv5LPQYcnJbhnLSzUS8bvvCTFy78",
  "key22": "2VrWAZNP2cSqDkVPBGUorAUtBekKrEBjRWcRY2a8PjkHkGNErjUPBuPnrDmgRspBVzkehEFJ7wDcyAqPbMRYzs5d",
  "key23": "3VgxP2kJwGTks43kWcNqJ4TaDnRCYy55SRVVkunTsogFBUh6nR6rRNBTQBpsefMS5a6PxsZ8yg25iYAV7oSsZotM",
  "key24": "5hSXibjG8V9vqTJFdZo1YKdRnKWyegMHA9tBsa72byMyYeLfbo2W3P3dCbin3CR4KcN1GKL25dGc7KMYFJoDN2Th",
  "key25": "5gQoSKRsXHzEcq8JLzHMpz9H6ELRUQFEGrnMHNKo8e6qoDRAdR5wwNeWdFGQh6rDWbx1AFToaFtKX5YpvMhBX9F4",
  "key26": "33jLcRRAk1aRG5PU9CsLG56wEWWDYbb7b3SEZ8QVZTHW84e3bc548zS7DrKpoFvBpR1KJMVnzJUqvnfMvSjHQiY9",
  "key27": "4WPwNztzST81ug5Bsn8UnR9RTqrDf26mbU4kCRMqnv69WcoabYCRDTRB5TvYfQA4FMD2m1erzghnjvVLJ96eq5Go",
  "key28": "42Dxa8XDEecGonmRRr3SQTRysX1hZsafr4FUpmrrV1srDmgvEda9qi3deZSgd3snac3SW93kBMi998TQ3sv25xEf",
  "key29": "4jhqRUggCSdyMPWNL91PPbkRWNRkgpuAj6bQaNJKQzZ4LpNxF2U84CcL5HjCVU2GFvb1E7q9VxwPyLE7QdyVE1zs",
  "key30": "62cnskiVSwBZJfZ4e94yNExK4knx2r33uQxdDGQLB1sBbgP3GFcsZT6V6AZxrNLuLXy4EcLhK2Q3kebW9KXtzCK6",
  "key31": "YXsMES44M6Wp2cKaPUxe5bCKqfkY5cTZ5CcJnkZ4NAwypDPK5UUShFZ94c5w3Y2MPGhb1pcHPHWyGpDB7tJzc7E",
  "key32": "47uLKmdkpUopKREKwWfFynZY7BiH6R3h14KfQNuf8nUoZ8Tj5TLbuBjrgTh1Xsb3Bzp53SvzypubjQKNJgbH43qy",
  "key33": "3DDDv9j4D2TWrAde12drW8f5e9kQg7KSLLSsYRc7U1G5mYZrG5zPtLtSTcmJAAXG7Wi7PHQb4pC2kiXgZJK7cYie"
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
