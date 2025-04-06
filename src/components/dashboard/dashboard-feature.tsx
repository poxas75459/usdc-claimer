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
    "21Vvc9ABCU9c8WZFquUMTsDt7vsfn1hZ3uECDfsNvGkj42NEUbJqjVhq9nEqNSiuzocu3GCdNq78HQvq3CijcAwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A5G7St3criEDjQM65UXiK2Afe9fQWRKqwr7gycNUYcskbSdnVe7m45uQKf7WMjji6eny4fCAv1xWUoFvYCQw4vW",
  "key1": "yFDSuwwLUzL9SGHxeVoATNeJ6YMZaKRWRRAW4F9wDTSFpERcjoAj3fstexp2CRuX5NyRj4eH3HnzTas6uFFuBW1",
  "key2": "5XhRpEPe46eZX87AEugWCgaN7uYG9Pgu1Lr4nBkHzJYzguy9EBecPntEJg7Bcn22pR3cCiboEWLDr4tTt697r7rq",
  "key3": "kbcboVA5PUoaT1AfCCLiyeciUEAvfFSdqzt8DTdQt8nErai3gQWRowfwkpJgkbcGwuyXgeES1t2bJnzyfqA9Nqt",
  "key4": "55yMQ8StCu2GosnToPEsq2DH98v2q6chV3HRcDujPqniGJbExCdzrzFny9vevnWAPzKeKMU4arxz7AGa8U2rT4KL",
  "key5": "wnxCVEZrXf9HtQNcVLcg4mCWkLW4844vpmzQ8g8yLrCQKSZNRN3VuW3gB8eThAzTsCm7HLfSMnrjnCdZ5fQg7Tw",
  "key6": "4JmxtQtHT7igBX6q3fonMcBc5K1gPgioxz1ta7k8vNAugWRwRJxAUYMsACLJZ933wpUgCZ5KGm9YRN8JsaxrbpTX",
  "key7": "2tA5zEhf4L2ECqavsNNua9e4WkjQYFXs4FpWGb6SuhdxhbZ8v3ahouFGaAKGrytqwPZMrTR4V2yxv4FVRKsFkhTf",
  "key8": "gKfyDwa4adx5mxvjSTnN1bwTRxpARhWQUtxStXWyz8XoAHwaKxexNbrfs5AqVMyhhTP3TPAK6MM9pod4VnS5Tuv",
  "key9": "KRenpAEb6X5yreq32wBW37F3VcrY8sFcXt2DD3BezpgsxYkPbkDKrQMzKjXUYHNXyb9waxEwMZQ5XCyRUjvQoWL",
  "key10": "3TpzXJjSoHVC84AbstKZyToYceFdE1dHmsDswQjxbXo6iXU5mmNZbp2hGavnWKLov6UYWRuFoUethbycprqtQbKb",
  "key11": "2SS8fpXFwkb8SDToHjcbinkykMC3Vg2gzgxg3nDCL6QBpqT2aLHSbLzbc3rqMcUGTpBWnVaH32cZvP5An8pUtGSJ",
  "key12": "4GggsjZqicFtUVoJNaskiDNRzjdDiZJuV9yLGqD5mJSYd95W9amBXkU5WFaaEdGi7HdVLis7Xv8HK6fAJ9SeNGkk",
  "key13": "5Z6HrFGMQbpfzaWxj8nQNFBMzhhnEpuLHoaEZHxB5cFwdpwX8DkqqaJUfcRrAn8Ji1dvmPJRp7noJeyRG9Y26Vhs",
  "key14": "4U44yUtRoKhruW3JYJ9BHFyP56ut6GfYE2NnQAH1bvfvbE4uqrouTiyy9E8f2bBhDDomZbHqz2PAyjZpimZEBJpA",
  "key15": "4swNcB7BSKc9sL2EMCFLAzTRDgAWtvHEjWkduWdaQWURVJ1AS8DWPfkBRjAiASvrvkmLxoVghgNh8D9bqD7ph2AR",
  "key16": "2ueKFf7fSRbNGPfmNczhAG3KUSJnYx46RBcLt2VvXTNZgv866frUQjMef6ujKyHEmJMUfSAfqeYPBuPvKDQPQ6YQ",
  "key17": "2qFpigzcEJcSEYbZUXmrsn8oBDV5dpWTzzGV3ERruuLuJbrq883rThTJ7MMPCCn1CZhdGDAXtvXJBy4GsjbNETrH",
  "key18": "3V5tVuT91oiZCMmstXrL4iPxKWH18HSgba74heci5oWuG9Gec5DR8SH9KrPG5rAWKLemU4KFdnP9LH1VuecYAGRZ",
  "key19": "2nSncmfqLsrCaQSsXAjSW1aWXR64hqLHsQswS8oyRnBCWM9JTcE1qiaxRGmeKXvV2F5ywm8Jv6vhEZ632n6EDkv",
  "key20": "sfXyswofQvUUVFRDTETHGNk1HoS74a8bzFmQEfgSz1b7NGm9AToDBnBJUz6EgZFaiQu8WYvqfQ5ZgXtE3VvmmW7",
  "key21": "3fBVJevYdRWpJJ52dH1uYW2sfspXmn4XzaDygHNVvxGSU3EbDTkRTKH2qYDBJWfCVDztRCwGFDu7HK5j3FS8f9pF",
  "key22": "2xcehRe8GHvkWpMdXvVXAMyCqK2RgqsYMTQjauDVBHx6XNj4PG9dKBtr5pkhsxULvSbEqwN81gCWgCjNFLTU1ju2",
  "key23": "4xBCEnZP9rTipbQugz4a5Gd6Mc1WUBYPYbxnZAHEWnQkuJjhfpndXt4kA8qytfChfCTZ7kSeh8EKVM89GmXsqvYB",
  "key24": "5KS3rReQY93piWpc6ehRJ3hLwXAYvg3BFeRDhEKyoUjwnYRXqcpAF6Tn3m8QTP5DTf3DWhNc3TNQTNkyiBAQEYyD",
  "key25": "29F71VBN273v36BBjycvwyp8scrhT5Yu7NwEJ2saz1dQpDE68vENVerCr5c4fGVp4y8xn3NDddiuBuQ8RFrBM8fg",
  "key26": "28jEthZksYrMrshvvxVBiW8x9jvDD25gTo13iGZqTmy9KcKWSnHi8R7Ychwpz3Jjjgx6sG9yKog7taZR2Jay5oHw",
  "key27": "Fta5S1i238Mmo5Wx2qQvtJgagtYT82aXPDN2bkE2hwxe1HtuEqvpjRYhjd9jZC7cWxzHCKF7QU9GJJdrfJ5zs7Q",
  "key28": "5kQwWkcXCXJKKhgWvRjZgVNUcTwWng6qEK6WnF74jSEWUcbJ4aerrNyZqYjyikTAvXNfcRbf8p44eE6sSY7hew2Z",
  "key29": "3d5e7n4UbD5Uvzbmp9TTZthWEdvFsztQaAkHhvH77PXR5SxUwSDVcgNz9FVmCfX99RbdQBTW645NDGGrobBQevjz",
  "key30": "3jtQpaQcLkSg3N1MwSjLJdAJs5NpTYkYEU8jDgQTsLVioQzXq8XJWhTgbJEvDCxT6C2SBW4NcXPzMfB4iF35tUxb",
  "key31": "v4oPtJXRUFXhzLfGxLrf8KdBS2HkRLEvTg64w7XuNGQSY6jGZLRGqXrHWMdpcoX8QAzh8BpF19ShNcbDL64MgHL",
  "key32": "3ro6dn4JjZxzvNsrqLKHofyWXHKGT5fjsd77gmVVtaYiaWdjJeFY7F8R8wwCBzksf7oGCerKSRbtoLwRBCdTNRfR",
  "key33": "3dr6ovSABxCSWCNKFuFioxNGvnfhJQHscEutAqtPKHwCu3CtrQHuuJGSatBwmSPFLqtQHHquArUpw8Lzm4kR9ZgR",
  "key34": "52hGyXd8PHnH1dwJEqz7Svv8ouZuS6uW6nqtiN3f6kXKmb8i3LTXn5gKaWENHP2CDvWaQFjRn4aizifYG1EJBxmY",
  "key35": "3iduLhntwanfcYqbUp1SGtcbBmR7AuYhaeUu39PSj3o73EoHw1Eu4VHZnbwG3Uwdjj94F9mBymw1CAPu9pdeG8TN",
  "key36": "5EpDXmgVKiP17XcAG3PWNMTksqX71qfrFGccWXTsutgQyhHQVzdhAwpfrH6mQnaRBt5f7fZdxDwmiGpxn8djcJa8",
  "key37": "32nz2PBKwsboQDzFkagoUiZA7QdL54AkgnzESWw2X3CpYHbuJj7EPBDfzt5ZWpaag13WWHVs2zzFKXJREKGpFtCB",
  "key38": "HhapB8fyCWzmhAFR4NiMJ31LhsBPCTGHjG57XvCBJQ5p1jCxR33AuQGZUqNH7yH2DdtdeKse7qNtharF3qZ3ffw",
  "key39": "21E485hcksBrWwLHhozHwrdYbzmAT33DgVWUXLW3NvpvDpnjYLdiKzrcrUnpHL3cKextJ5n9PZee4jBgm8zBVb9K",
  "key40": "3ULWtJxpVWPrqw8YoLxfvJjyF3AbZWurNVucc6k5JnKvdkd9VRw6GJkuddBPSMqABEmUJkRuZiohhWYEj9Euuvez",
  "key41": "3zkWaqNm5GEW5sm5teKiaQXtC3aqcjPasDyHHcCBZToe6bzMYxtZEd1PZMqKE9T7QKhkYMendtVzo2VzK9RhAiiy",
  "key42": "pEw4nVvWCHs9YMLMW9eWEdZrSYxFbzYq7Xe6XUDZGo7TDu1suy9QrZCEBS1XvwRv2HAmpZqNwNwSQ618h3PcmnB",
  "key43": "2qjNkYytWiqwVvc6YArtVcAU3rfqSvyCmW9QYsYaxgVK3A54Tz5pjF2Q9GxFNkJbr1kKFffay1en3oA5YmbH7A1p",
  "key44": "36CJyfbBYi1SMW8BRRRNPw1eNqnRqWznZYsbEEkhbpmjaYxxPdQzmQ9CnvGLJQuKJrwJMB2TaXDvjER2PKEwyvfb",
  "key45": "3g2gcnwkUG29cFhqXQjshUciViiaD15e7aYLQhQRAXPxR9ukURg2uGp6rEzg19fuS8GpJFGfDiJeA8FSyqFJpjq7",
  "key46": "24p1Gp6owkaD1fZqdQEM3qFWqaPpZxBUrz3qgjsMfBg4BwLe8qV6oxANkZVc25KjC7dAaMTWM1fr3AMj7CdmnbsS",
  "key47": "4WSG7NiZjU54687jM6Fjqj6Bqpmd4nRgKEMtR9tLvvY844zujZiP7MYcpMEAayCKUn54t2Nn4aWCJTgA9cjqFErN"
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
