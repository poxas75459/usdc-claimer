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
    "51Fr82EdpSnDAHdt7MWeQne2ioHmVJeSoDhGJBR7NNKiuLLDSUa4JPgvTKBpwnrjztxiXWs1b6cPX2SVce9qPSfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bgwr7gXQvjxrP8RjWe2m21Mrm3fAaqjkAvzpk2hk68i9mbJ6cUB8dAaEHYQers6q3pX9F64pdejq3az6QLXdvqV",
  "key1": "sD1xznYDCtqeQDYVutRBayzyJkCSfR5LoGtUua1oGC9vaVcpANBPuUsJzDGQ7ZfrRAhUTV2JTPto6qqa1R2D1Vp",
  "key2": "2WdsbDQt6wXt2SWKDSuH4ibUGuQfmJPMisf1UiWxxz7oHFMkEjJL3ttLEsuKAZAwmafvh5gUu3gMZRjHe4E4cw4F",
  "key3": "4sLoDCLhz4mrvmG9FBymwkW4PJE8a4nUa3gffsRE3oGMd17z5iSc534VMdaS4C1emWaupT3K9rKeVZFbkSeF8zcX",
  "key4": "4YsboW4RswFX9s2ADxFGRnnao3sAvtoSNzJXQrWXhRqwSd5H8WrPYzmvTfY3cpHp3YyhVtyTtBfVPLsFvypc8H8T",
  "key5": "4ZJvFPXEFTrXGuqbTEHn36aFHY3Lh1abhyDXecooQ5Lm3D81jx7J6npP3UidFLuN2t29KWaPqk6j4fvrpgx4ksBS",
  "key6": "5eYY8XTfXRFqTcoGUKmy2VR6jBbueJvY5zoQCTfLjvYNHAKQcQyPDLeSiZGjnopAgv58yQpKfuRNE6YA5QpEMWLh",
  "key7": "CeKJkj947xPALkyXyPMynibMcfUq5ZBJVcx1ek4KovNb2pjqe5S4hGbcHn1Q3VxTWE9zcgwkc58wwaUQjKLkDZR",
  "key8": "qgUyPvXsgASdJhYbSpKLXupEp4snLVWaY4BdorVUobsGqbgL9G1RqPtcuGdRQVBqc2RXYyLA5GxDgb1GKudupLi",
  "key9": "67MoaN4YXUjWcSiGPAKpur5P65GqXeXqxhcMqsnXynk7D6TQ4yZqMuyu9GpEPRTwvmyjiEgUarwezeLY8GcpWWWp",
  "key10": "sA5xAYm91j8k5qkwBA58LxcWtYj8vB86xDw2Bpu4EusNojfCnrYDQdPHNxz7hTyNFjK46An3FzTqaWjfVxFkKnW",
  "key11": "ATVi7BiTu8U4B8vaPDFYaYgsAakXgK9Gd8NWGR2u4a4r7iAv4kV1j7KYsWwV1fmwYKnToyL8K2fwtFDHMamq4QK",
  "key12": "4cvfjMD7VomDrFZY3PNoXpAjbnbAF1WyhmzB4iA4LEPT57r8KGYp9ppN9YvDZ7TEx9E1UetZbXWkNi8haGjZ2dfs",
  "key13": "3Rfbn41tinMSiPGazeoDxTXhYVtBSojPWBRqCFS8RUXFexJfM2tUDbM7c4ZtpAfxTjn7RSbgPT1w8MF3RSoN6XJF",
  "key14": "jn6jqKs5mNkn3xmDqd2mmyF1jzMQ97EhV55SpMRnqvyCLEhTbbnUrjWEK96fNkQoewZWst7AwVqecHnYRC5CfCw",
  "key15": "3vHJLFaVQkG9VxtF6vvV8VdHAAMmknSdn6RQZBsKZM13Un88Zge3WgQeVBJ9vKkLe794gXfXRMJ63SVhE58cEx4K",
  "key16": "3gdqSVWX2gtZwHgJdohL6bebnLkd9PwX1zZTBgtHeQqH1HxHy5uSmfUC7aNSV1yQma4eqDKCXHxxW33sKsmDR85A",
  "key17": "2fvSeLzvJ8HJDCGHWcmwUDF1Cn2uiKTz5Y785YbeqsSnfkks1hNFsg6epGeXDF5nKvh68ZtcbML3tY7MGuRBayDW",
  "key18": "AGdZWfoyeCUbK6jJUKa1ana133HuXL15CbBan8S23HChBqFnpet9yBJXr5tpPUJuQEuF55xvm8FRGrkLcL2ohdX",
  "key19": "51BWaNorhgT2WTscQSw5BAKrYTs4gCDJSaekQnE95Us32m1U1x5ZiUdF61ZWtx5yCBggEVixSc7fxkD1mMQBvGZQ",
  "key20": "3pKEU6ZFTD8b1XX5RnBbxh6CFSGCb5Gj5gBoJSC7GF6Gsd5fwvXiBLfcnnmFkrkJWEC5DAiQjtQGZ49G13SLtXQh",
  "key21": "647tqhBfP4sUoubLqCXTL8cdRFn2dF7UDaVUzHQoAWTbnzUkdUt7wqK44K5kz4JDr8M2oHUSeu3usHrymYPaNm41",
  "key22": "3dLFi8zphSA5cdNU6cm93eZhZzaK6JSNgCcJ6wikCJ6KkTr4Do3RxZFkyEveR35PH2Nf5w2yA3Y1bqdRKJpXc9Mi",
  "key23": "2s7SrceHfaiGeNz14Q4hL9R1ySGk3mpa76bWLFaMuCubZ85qGek7DG973iKwervoMxXAArByxRb3jPUCkTMXZ8iv",
  "key24": "3R7moSkP9Zpnz879eEFEh3U7knoiXWbRnCH5xPhMsPmP3CZjExU8eR6gKk2KkRAkG8nVtqGxdnwCXiS4TFAJCF6Y",
  "key25": "YeYmgpkv6PHQu5mBr63VzDwdor6qzMj1wWLq6DUSab3XUYevz6HSgvqVpgPCXVaRXYCe6p2b87udBhNiU6oygAF",
  "key26": "4H1stGyko4HVqGSqJSZpEiQSWT3Rpn8tA8GbHmMjkFhynfwPt6gshEAhJj6JNKS37TPtZqhjgFFSWxTNEYzt2Qmp",
  "key27": "5Af7gBzhK89ZGinvKKteh7xC7bCa2YSaeg9qjskQMxzhBpK3L2N1HKQf4TfpaatAn2dbD7WwXGedR4KsRBHtVMaP",
  "key28": "3MVhoo8ss9VpbpYFM227UGThE2tbmXzX2qtRPpYLXYFqLMsr341nTxuE5NYDCs8u5PKiyiqNWbeJj4womdSHwqk",
  "key29": "fNP7mVRUNZDHmyZwg4tmSRcYzZK2BqqNNrLmnBre9cGfYRKu9sniDXGZEBscXMeVoBGn1nLf97NDuJ4rcxe3xYY"
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
