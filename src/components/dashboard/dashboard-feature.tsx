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
    "Zxv2AZpE7w3rZZVaUESgBrcGrgt8NQwpCzH4ReA6z8UeRw2TVvikRnEMeA4UhbfbkeGAevawajYP8nSGyzHDUSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJzccyqJN6x8RoCqmU4JH4uP1911GFzFBSHgGufYtrEanHVC5QCsPdFDCdNkDPtWrmoeYDNGoKU553488eZbW55",
  "key1": "4ZUDPxAg1zLjXabK5pkURgw5ShX8kCd5yVxy7VM9VcZg1Hgb5N9nGXb3eADj6yVFp2sGPB8EVrETKA6SxBM9AmTe",
  "key2": "2SXbvHqoAmqbUBrqvPsYPmrcJgq7PW87gpPrKChaXLD9E5Tefm9VcYDuAJZDj18Yh5mrN1XYBNVzY1EG4eMzhpSw",
  "key3": "3iZ7MNQwysiPG6imQqSPb9rHamMb5JZK1As7SQWXyRJUBGnXH1tZZjqPFdt2yT5bzvM2CtmVggy4mkbAr1iS7eLB",
  "key4": "3bimcW3j8VJaYsBNt84Y394wJQS5tv6jPf2Zs2RjJ3kh3Uoc8poiAZdcSF5VjDph5aBwx3vfRUevGcgtzxoupTdw",
  "key5": "5eny15bDYb2UJcRmFgCkHXPiX92REjFqBfrpv3JGLWfFFNJUSc8zjFFrSmqAmmUyqPdMLDp6NmWD9U8X6bzikGH7",
  "key6": "kDPpLZD9gYyQN6CLFEsTnRZcWFDJHKzdC6iBinFs16FwRZnTJ3QNM9wPRY6hvRYVGrQmYeNiWytgWsyFzq4szfe",
  "key7": "3sV8H2wcZgNKqiahYA6wCUCiYxSktG7BNer9qVPoQpV57gjWsJpGSuvzxQJwK8PHVnSsMAgsgT7z6Zc68J7NWhHd",
  "key8": "cQvw65vduzjhBNhpMPepCsrcniCepGumQf1ziakSEJpEXxCRwiPpNStjqfq8Hmk96JymNt6PndWiZgN9agHyqgn",
  "key9": "3xZ58XjrB8z49jFQpbppmGdg2yeYM1EJnHcemAFqGGwdm7ZN5KhSYBN2hYQUR8j2ac5sZybvjRvKwZ8SvV8MpYAx",
  "key10": "MwPgQBcFBPE1a1DwVnr3KwVjKEG8p7pSuKxqNeDAwbZcq58s1jemyoEDCQcdge4GVNh76xBhM3T4oNsw2kiuviJ",
  "key11": "26Csupg4FocqsJEM4qMiMfHJRdkEaYs9UbFNzNqobHb6TQ8SytK1SyR9nkD6Awi4V3nYqZxm7o2k57qiL7fcFGwb",
  "key12": "2B1syTfzocjbqDYMgpze8UhfXNdVTbqjMRpauPVHdU4BF38EoinzaboW77xXrDvjFF9kf9by4BVkKMtoa4fkdoTd",
  "key13": "4L2PTQTykcNQTASzQ2fQjn1DWGKN5cTea32EAhzvmtN15UunruJ4RnQtoWpA71H5cqXjjLqRXBeWj8qGaWanJHgc",
  "key14": "5GKb5pwoSBw1HjrrCKBbhoxnZnf55A8YLm6rEAXeXQzLVW3ESpZduTbT8AcjuCv5DKuWu5qFAy3qUbq6VL3bSrgZ",
  "key15": "3hdScLr1oUL4X7b2KJDka4rc3o2jy5RJsTMrfNKqhgQ8AMg9kUQJpJJSLXQmGWD6bHsg6E5aGmWUMnWzie57jXA4",
  "key16": "4WKMadrWQGP7ohnGju75814LkPuUZ1iXPqbQQqUermyvNBXPqSVcLvCcLyf59hJcKcoDoTnwK1qNXGjEzB1hbmZa",
  "key17": "3ij88Eyo3d1zuTRfcyg6YKb2LaozLWdDbYxZbVmVXHqWAPzhXnbcxx47nC9Kzem6mFyhpN2JJ6KhDqnjqGYj5HdH",
  "key18": "2LGXqUoSYXnrySumWJrmntkxQe6sRDG5GLJuzZ4XDhSw4nyff7oM25p68iksizS5otDCFDLUuPfcGYNeuujP4rVE",
  "key19": "vN4MmZngcyTjFUiJdPxHJWkMeNZNTZGEG7vu7P7WV6rotUTt2MCFxdq94LxHmKQFVX9rAHCRTMpdnC1gkMEBYFD",
  "key20": "45thpnzY45HFSY3rzuKXMJdR1jF18THsrM8Z1SEawgS7DcLVio1gf46852z5i4E5EGF8MgEz7fyCLwiaJqVhnPVV",
  "key21": "2k5xfNpLu5eVrkyTxsuKszAXUKJnrFpfJ3QTT8XNwd1bqzQzKRujXdLosCCqYHYiWFPLfyDMh37ger3h7Rop7rgG",
  "key22": "2gRkE8ANzZ34SwhkeMZfPZWcMh9iexrE9J45Ux5MZtwmgzBcjabhyvYFF4JmXgxABZBHESbYTCPQfWZcPc9M4tb9",
  "key23": "379acxmgPyf7sXih6ySXRkzso7Dns9Pga2MCADfQ6c2ZMCFeDtAtiXnZ4vNkk1QvKKbLbbRX88v6E6e3T5z7wdC1",
  "key24": "wWexuxL28XBmRaPsmpU3FJUd83hwoHSuQ5mqP9cRYEgGMSyUzzm7vdZ9gB5LCfbEdzSP7MX35BgjFySrYgQXQWa",
  "key25": "3GYCyQciBMwoEWYnp9yV76hZhKQ8qqmH5qNxR4Q9wrCmy4pEthdvUDcZAG1sjFvrhEUKTgJbDdQ8p3LP7DaxEx13",
  "key26": "KwfjmwunXA4JrZwWABtCMrGYT1xMV9vZV7NZrvqHkpAhtaNNxPYQN8F2eYWRxye1v6KUaTmruraMPbBGZjovEjW",
  "key27": "5G1tBQnP8A2xPxYJoq9chFRDKmsdNabBcHrWZHmrDKwSjzjuoqXF9iCPLLjHeLNdhz8uQGyjunyuRAWwAgWt3znM",
  "key28": "5vexiLvCJqSehq1dKG6LKuP3FUWKYLZjvab9BiA9NGjgXANQZsgDXYJ4r7RdTvinCzNpQ2YgYKeGfh4fEj2ZD8Sk"
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
