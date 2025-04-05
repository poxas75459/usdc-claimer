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
    "41EKuPDubvvWhDTJx6ofppnKW7Rgj7TQxPsXMNqwxepnK2q3nGRmaZqinwzT4YEv8wogUfXuppA29GaThcKAcaPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DWh2xp5KJovA76V9n8m43kFPLkjg5aDqCVNiG1gZrWWf4uoXr3tmHJKTm1KA5DVZPjQWKw1n9L7FFkgEUx1SHq9",
  "key1": "5BxtR5uac7LM63JHLfppQRsv9PCTLFHjY4nVdrhyy74aAkoN6RWK5HDToDD1m37hFoposFhQnLs522KroQYipHtC",
  "key2": "5cu8ZWLgePD2VfQeNVM2P6WQjDmvpCLQxsfA3d1NNrat6EhC5bH7NJSRFyeXCUSaybhB895kDgVfqKAMsKvz8HXU",
  "key3": "2BxrPJHkM9PTfbh5ngpevKqDSBHF7mN7GouDYVUpbsg6AU9GcwKCbWMxm1koG2mtscrpMLQHfz98sSfzRqLenFBQ",
  "key4": "AsHukoHZzaxeKAkKMH5Nb1gy768XbsXdA4PV2vmySZdj2C7s6rDbAwJBy1e4pcqNdTabyhBfFfotUvZtqyPbeBf",
  "key5": "56DjwFCpD8w6HuRAYz3ihoZWFh9a4pm7HkpavYHbtwp4cX5whssPhm8roRK7ReAW5h64wKy44B6hoEx9j2PhSe6r",
  "key6": "5w1yhjFGYtgz3kvrS7puKSmwm2Vcm6FrcRHnQtJdPjJKeizPZbESPRmvpdwqiDX6igDe668WjofdrLjo3SY7Rf7N",
  "key7": "5ARqsK4oRvy9dvGKkbkmc83RyxvVey7SNrCFs15haQ3iErGhAMmaRWTyCx6eouYz7NZzgxA3KtausVfSihbFMWiB",
  "key8": "4VtS9f1opET7vVaVJeW2GPgfWiYAsB4cF16saJzrGXgCVogJr8RMiEY8v5MeBZziuht31iRZG5tK3oj4xZQ4xQ3d",
  "key9": "4hx4ZUt3YtXvTfQJWQDrUxpcrf9uPpJvo6cRWziQK9uUMTgMgzGkTTMwVzPfkq17qXDKJRXzC7QM54yKmckbKM8Y",
  "key10": "65odrcrMoYoNygCT318hRtjRKuKiH1gjYaUGDctSaXKH4qBtuhrMWNjygKXhKvGqT2gguvHfPmcWD3RWN3jYp5PS",
  "key11": "2S5unfnaUdaZ5R4QXXb5qRGz7mm2v48j8cU3HRJV3wK3KnsfvUPUYfmFLoetTBRVvACGKfHgStxRQa1yJUqN339d",
  "key12": "5LKgQUq9UhKrRavcdXkyh2aAkXfCZyQzYJix5mJS19MXfK7vvMhEzqDqzafuUXgRCWYpMPAN7BPEW9kdBH7uMtvU",
  "key13": "5GGntwiGj5qthBozucoRDRVxsJg8ayPTuua9jYXW7SSh5M4FGRbwsdxF8aricUMYFYMKnU3KZ7R1NxAtUhaAf5Ue",
  "key14": "5rFbZGVy4UxtDMVTSpokNTJjoAMwHxhDsPNx7KPvtFqskW86b78MAcByTheUh52ixjoWJWLEoUQG5joMPnjGCVnz",
  "key15": "4evcB2tkYgq88YAhkU7qzCbCJJu3jxhQ43szot5mRZehmkmKN6CGrcrsszEC84fuYFTUQndwxBU3XKuEYuqNQft3",
  "key16": "4F9LV5XaFpsJy4SSRBLqEj9gnUxsLETkVXQ72Je2jCLrASvFaymJkL2wuukcL8JaALArvj6GzA3AwudbyyCP5rrp",
  "key17": "2Gnk5upmpHF5iRaXz6TRb6iMP7jsEYgt6hXBADgUUU4aRS8C2tnsCbg3DTRtsWP3ndqHmmPzjc1QDGGFEyS8ouDR",
  "key18": "2C97jqM84DW8VNkEjLushRcW1hDqSBGhs2wUvTpVNw9oZioVxkaCvEntNh5tRBhLdzwpyheAiJ3xGxsUpSmHzwCx",
  "key19": "4RWnibT9QgSnjpRzD8173xcCFnWZcBrTQYVXZTNWDNasvAN9aEUcSBuEtZGYG8SFwm5jwL9MKmxrNYNi9it7jLPb",
  "key20": "oN31ET3iXGtGbeyHTabMNd2UXH9GShJ7v22y4FNFhkKxHaFD98uLyuUWXxvaVfLTifdbfGytCrpVAM9qfBR9H23",
  "key21": "42qSP7qdoopo9R35yYGsP5VBnCs2ksWxTGLqFz3QBqtQujc6FyFBgDV2bTb76fcagrofueSwTusESPFbqUoPSVBk",
  "key22": "5xLgPZ5aesxcEDp1WdC5nnSybTD5eyx6aa7ncZ4EoXXy8v6NTwGLCD6wZMYaMnzj99RTaPYVbTHc7GrJZD7A6MzK",
  "key23": "3cg5eQtppTzkUfaKDhfYPDYAnAJy6VrdA4jwa7LrD3S2BySfyizTH4r2v9XC3u7NpNYCSGrzVqZBad7GUE6tRewA",
  "key24": "2383gy3PK9Np9NLHWs9CkfkRQYU1XCVFSTdWipBbocjmzCQ5AyJgmcNhH5xTUiv8aDN4JS1tiiAidhcJWAswYM5g",
  "key25": "4znSSWoyiTyXDme6mEKLz6r8eZxzruSyQJKhfjvuy9Xzg4nrghKA9o1j3SLVWGYQLsZSQtdC9GqFYqpDY17zV1ow",
  "key26": "2RkyZyhZoTDjN34WjxWa9LeBDNkt1rHRaRXAcBULbfFMbfwLF494jo4ntGBzDcWXskxgXpAwfbLAuTpfRxJt1HZh",
  "key27": "3bcULAGbKXypRkevCxCQKBYRW5Mh3vhHb4b7DfnxFvGfUKXksVYKZJBLpHj8VwxrKiDdxi53BryLxq1ssVj2aDSF",
  "key28": "67YhE8UP3nEZASHmCtpL7ocvTJTihdpWtrSULdrdG5t68Gx1NwQVKsXc4n3EbtHjprVGD7o17ha44z4D9F13TRJa",
  "key29": "47Pn6GxMK3coW6ACHXx4B9wnamdj3SLGZcpznZUP5a4e5BK8f7W27UfMU2s5FatnsYTbGieuf8n2KxAhTHyFGKnk",
  "key30": "591ncrC7DT9yLUJr9xUUkk3ZRpNZyjZyhuZfsc68LaUxkcQ9QFMiqwiw5QDC495C2yTQgoJ4J2YrH6AKuSPzCg8Q",
  "key31": "39zvYvXXJJ6JNBmNvBwyyWT83p2kqCEzuWgkoQA8zouWpNwBhaDguuyC5kwhL9HcjH5EmDeBTVbTiifpyPLVicbH",
  "key32": "599S92NWx1F8m6zQZj9CV7s2zZsRw2H6Pe8Dnik7k7n6Jdmao7Wpxe5jxBp3RvaDuTUBReNnktBjZX1fBhZahqBv",
  "key33": "CRAQ7PXHyCF3ZmrYwWhG81HR68RLWY3hRBjfpuxgzPzRzePvZQpSNm737x4Wjg3ERvLHoLPJ4WmQKRgu9e5SfcH",
  "key34": "5vLLtq8VRpqwtKjfXcKPCmjHxgeLyAtya2mGqLz2NoehSWm3is3HtnGNzpWgyZU9fmikTh8YhifWFJLRnhrcCfB5",
  "key35": "57U5AuRskEghdBrbvmSvk5BRNqEjJi89Rj9wDsyW3btjUv3nw3rJWLoDetwV5cosAAY9RLinWRpRGcYn1ZjKkZJr",
  "key36": "55RudJ1ncimMvQukdbMkhn9QU986UKPJ4uSEsKrjUBXudfqSVaSrdiUZz3B6iEMymtnsBAQ8Yzz1BDBW16Sut9LH"
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
