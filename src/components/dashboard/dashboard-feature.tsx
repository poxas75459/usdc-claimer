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
    "3kLhj9zDNpDVzrUXScygRCwiuUyBRifFzLJxu2NEq4UABLUPXtVm1TW4F7Z9WJQbLSSD4mdMBmBcN2dmkAHiLTk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECew8yzR1o5fB9gyiWodpZoxyxT2b6eC1FXiXBhoTZBuBNpFZKRGNcoz4xUq7ugn4UmahvPa1WL8uZya6NKMkLv",
  "key1": "5dvqcTeNsroDbXsKB57ZsY6Ab2sDM8z6TXWAwTYBsSDdeRuVVB3ZgL8G9PMJnXKAGRiZqQ73C73VWYzpJ2m5szr3",
  "key2": "3mv5NafNRBe6wVZbmPJGL38AErwnYwdEq9LtKXUPAVmRGYHRemnjo4LWANxdbhKy1CoGuDmUq8uc7XxmWx5h4G1N",
  "key3": "2VAa9AGtpv9FqaJ18o1qpSuEYh2QutWPwvzkxJGhwZHv9JN41ZyDZF5zBkoAMz3csLH4dtC9sTrJ2E3cPH53b5jc",
  "key4": "4ob8eos33JhGcdsC2za4v5tpxz9X9iUoTEBUVYNsavBcTXKZWso9jbteG621mAGRuGtEyc7c5qnjm48AA7ucrwMU",
  "key5": "BEKZhHcDV6gjjoHn827XPzKu779fkXBbshnKnJ8zuGfDrF3nfjxdoEviuxb5dJUGYyXcAmNrHoCu7HKhvafKRuX",
  "key6": "4ppY6ndWFVg5k3GH9zx9TwzKkf7TxxrpCUVaFsBpvVDzUSKcf18rJEyvdkRv9GECJH5Y6uD3TmbpxC7HDYSsrqqC",
  "key7": "2qLNuDeQYHKDRisWPTrgjisSXLGpNeGdVeoCnHk9PnfZ8bMTUPbwQZkyYTpjwEsXHJ6cSgaw4tpYBXnh683d7PHA",
  "key8": "2xxe2Fyxa3LbJppSb6q4erKHSEm5CAuu1JEELCcxbLXEUtamUdERuJfE3KKnjW2v8ej3gFoPG1z1kjnD5TMz9Zgo",
  "key9": "2Y1RD3x6vEcne8LsaXpQn5upVMsg3JJjFPcr9qeaThrspCWn1A6BQQvsq6nN5Frht2Mp7FcEbNHxC5mciwRuaq9w",
  "key10": "4wQZBZu2eHVfyobbdmNWbAidFHdTZSead5VK1WvJJFyYfejDnksqiMYEMNAbUNjPZgQkijaVN7hy64TJnTPKqkJt",
  "key11": "4ifUB8LzxT7hMm264WtH2GCNvBSY4edbeekpGKzS9cdAxz8R4rmi4JPvycBDUEifmwiUmrN7rqgHmFw16p76xV8a",
  "key12": "59aVVpZcr5CG2eU8MM58CSnu9pwAzYzFBXEv42YiA92iAm7cueQDJa143JKhq5sM9N3CWiH4Ti2oP68kegRgkERL",
  "key13": "2cR3njBmZUN7jgjcVfRyRkKk9rLrtcaD6aXMfn29vX9rbh9HZKSbFLAUnsndU4FkgaPBfb4JzXurJV7YSWErCQKm",
  "key14": "5hjQS6xTqQyoVxVNkdxtnuFHPcn3NW8BvXp9Ruot7AqvSp2kh6bmx2tYCuetkTsp4FAEjjayGJEgP18W2ixJpHZt",
  "key15": "5JQQjfRFcKg9RiprcKaHenwareY6ZrmFrVG3B7eBDwMPVTTMVpZ2RUD5LmGFSUqJu9oMMsukk7GYmiepZ5CFTsno",
  "key16": "4JFwaBf7f2arwWBut9iNgHp7s5aiL9GTPmHUiXJddTVWa6CNjYBEEazZjmhKmdTb8ATRyq2vxgAh7s6A9s6Xi3DT",
  "key17": "5MQymgz7bLBS6x2yEQes9ie4pEZVAsGMeTT15gAtMin63cP6fjTK8rhjQaxkyLBHxWkq2hVBeMP3Ku898fjY9fxM",
  "key18": "25Eu2foSMRxGJqwp6JDgt8Ai7x6XwYLsu4ttAFBDhGxm2gtwU7Jg4Ab9Hnaskno2TXgcuo8XCT45kGSWvfijuJWc",
  "key19": "5Mm6HRLnu6xvE4WkK3ZBUMJepjZ9WyrKuKfppdZg8LtoAxU51YZsZ9MtMjWHA8Qdb2818eXzgiD16CQL1vw4kxnf",
  "key20": "2jqFghMWnQB7kfpp9wnDy2jwNiGWaP2RLcgCeHbtb9b9R6ZKfmiXV2i9BUbzrLtMguM23FN3JvFaC6zWWYGhLUnH",
  "key21": "4oLZAJoQEZW2gJG3g9jCoDVZsddnnaKWk3YjT3VjXWQgDNgRV5LKr9fs84VSggMJG1rq9Ra8aMhMXJa6LhnKf3TN",
  "key22": "5SDfzy2MCwuL2aapQ1KQM66MBmX9ZZH5xgMvQHQYAVDcLobRUBmxsA5RAzH13C8ycebsxWWSTAZsadX1xJ7kporm",
  "key23": "5bv75adtmP1C7h5TU1kKKMYDhYh52g7adJR2aqgiZhP6W1cG8sTm1Ya2vFBodeSFud1pNpmCTKZaP8Q4gv7ZBTCY",
  "key24": "2ZjxNxXkFX8n9sqtSxTxFhuAkmzybiAW4fwz1vG332rbVgSq1ABFzmnJoYB1RLb89hCjdrxtwJsth5DB4abhXtLh",
  "key25": "3EAiCqppCcZrNDVfo4PK7VY3aT39U6KJX66YEfT4bCKiHEfDcJ24sszveTJJU1wWfWpVPwgEyK2jjwhJsWuSdMD2",
  "key26": "261zMu2mRqyeLeC88vysj98nYwAvRqp1WHLdcKLDcDz7tpD9iYwW6ZEtTwirR7tThqEQKPuNXr9KhsSToNmFHzHf",
  "key27": "4Ebqmz6hQcqkV7RB2CF2LwgDaEeeSsKorA9Ji6Tv9GUQWFP5WNdYTnuHdsA3z3GZSTNAXMAiHeeSeBVBwjga7Qu2",
  "key28": "9ddGkUZKVNAJHNs7aW8mPKTHCQ9v6WfSmkAbuUEnJBfpjfG2hK79Y8Dw3XwGpdLbnKusHBAQq7K9xxL1ZXLW3X3",
  "key29": "5rdUfSXMyQ61crsSmydapF9ujTjF9vrr1GympbhdVpQi17RZXHj9MmQc5ja8kRQZ2ZyqpRqR6LpAVeeRoZQyTqPh",
  "key30": "4uCUEu5s3TeBWH8CmfAzAyFeeuJYpaGEazzJvaBJFVehGhEJZ4r3QucPwKomp9L4wfwG55FZ46VB5LReRRVNSyv6",
  "key31": "4MfkqRicrv17uiFhrT96QnAw7bEnj6fq7XNnJRzkuieb9abs3bVLvSjYrRV2eYHG9SzJ2zvGFUuR24FFJjKjabcn",
  "key32": "5eSE9GcttPZmxxsvByHm3yofKE4Rx7aHR3mWvDy8x1X5ejUFVHJDtfhsSd9vCfieWcgeMMg4r67aBB4VJ5kYps9q",
  "key33": "4EP9aydFhjpqQkobqXj34HvaQzocRVZNnrnCgUS6tSgtYCEzm5oQUXP2QJU698R4sUSgrYpHGzjXWaBMCb3A5UpD",
  "key34": "4aTPFwFcLtZHqTGcYXVSYhuetLX25qZ26b1hu5hLCuZvsr1TcVw38Xv4g5qci391Uj7pFK9gDGGByV67AoJUWpSE",
  "key35": "V7GYDWqt4E9J7wJSnwkCcXB69vBCv5rvXhBGDAT1YfXN8tosNvPL3vo2tdFYqc5JhExYuVQ4LNiun4m5cHCpC8w",
  "key36": "21DXXnhU1yfuhRMoobMDtcbVLF3EPnW7JUhCKKTqDG7MxQoCVuHboL6FtQvJu68mo5PPbTpN6iqYsKhGMq2RGoBJ",
  "key37": "3SeDNGQg7Aty3TKTd9RbvZ7CLKD566uDKMo83p47xyuBLr1VeFKtQrSEbbD64Y4KQpuDPK7zvGwfxYscvjkidL9T",
  "key38": "tRgQWHwuTniNDSnhpLFZ41Ed4EJP16WbhNet1wFh1wA6nFuoeXiAZTFFg3uAzVgYfZk8LvBP5fvbT3q9Z9sRKmw",
  "key39": "2QoMyRKCnYG5GgzuDhekd4aGnipXE7GN2xdntGsgJQFKNnPDZEErqm29ggvGRm6tsA9yZTcAMUhMUzeXTs4o6Vbo",
  "key40": "4t7eBTrGLk3X8ZfXpU6Pgsb5SYuvyHBpx4nCaRBHzzH6zsfSepuZLFs7XimPwTyvB6r1eUtLEBQ6MBHMRcpEgPXw",
  "key41": "3Bj1ioDAZkiUb2vwCjksdUXAF423PaVemXzw2PsrhNSuDdh3wMtvmQKJV5vmB8HwCMJ66NYtjmXSv7JLhpgw3aPh",
  "key42": "3sTXHHzCkxss5piLscGm9uSZpDEEwudGH3qbXeXntj3rxEzZrKwDWeyUKnnzxyxy5CGLeTuyPR9ZtKHuaH8qWkba",
  "key43": "5GDMf9B5xq4MDPr6KM5SjrzEjowaHhbqKCF5i4yDiotRvxeJBWYLyqdkCtqzJqX3ejHtmLRErh4ymSbfwdmS2dFx",
  "key44": "4XukeoQVTpL72KP27gASubnUNSa6WyyEFcobMx5GDbfn9nAitnrwSDFsQdVht4xwxeUB1Pq1TdhYmAXnsrMt99CV"
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
