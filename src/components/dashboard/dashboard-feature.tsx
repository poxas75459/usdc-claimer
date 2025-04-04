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
    "gqoiNXki2yy8P4awrRcurKaSx38Pj4FYEYFA9VvjqWu9SWuUQA51AQaUAY6WXUaPWTN4HQKpc4iuJjiLb3sgXc3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXMT2oqDFyMKCCSxG61hC427NQS2uS3WUWbexqxDBuMdN7iXaQPGC7t9nRSAcrDHur5hmAJ82gmfoPmXoUtHcfX",
  "key1": "FkjWwJGEnjwZbK3EZTpEYU1sKSrR5JoZdr5JbUFjSKtNE5TcMaiQXch6wT9BrqrN58naHaKZ9XRqF2nd6CyKeTM",
  "key2": "2WbQ6jc5S3MtqNimm7hed9yVLekHsKthVqXJ48LGhdiBehsFTWh5yoakmyLzq4CFqmKQscQpGywaq6JGgKfV75zc",
  "key3": "2dgUBLBwEHmhyBM4nfJ3qG3XembZocU19rC7ExxdBzPGRHfsdKRuLBZoZQyZgWRWV2V4AbqB9cGTHw4zhFrj3cBp",
  "key4": "3LwUbe9JEwHmmfkVjUiicwRiikFo6LzcpGTw8gtMkpQNo991UsAJuPFt1yn1a9SSxAmHzK8c9UDnMV4cxCTx7s2g",
  "key5": "f3xssNsTKoBioZMT9vKjWaXG6eLSV4D4F2BBZQkdUbY7e8Gw4YNsWMQVpRextjQyoU32FPmioHjBxQHfK2Fzs7q",
  "key6": "4WGs6XS1beu4CrPCxCejYWRUK1AXKUHGAqaZjJxAsGcFVWUxVVt597MxuqmQSEQ7ayb1u4S38VMyg8kLubRXUHiY",
  "key7": "XfdAmfUomvWvzwUeVyM1UEK8HGk3XeY5zDzz3tHvGp6hQDyee9PVrU34aNRbVaBHNjJLRZ71MmDhdQwhWCAf3pX",
  "key8": "P24twZREgCbCj3RyY2t7TUmnwiME6tzGve13pqRgLUJ6MmLTG9DRkg31eqXq42JLPqowZ5hKpHFTEvBcyzqhaEN",
  "key9": "3od4XNip2RC6J4KwSc7V527LZYnWNGvGqSa9r6HtgAfkMWt5gUW7WbRf65LpMdvFvvJMmtTv22CNaDLKymq2S4ho",
  "key10": "5ihXhHpwcHu6vvByr7P27uHMD8ZgErEnJ8sVAtcFuDTWsE3mQA4cawhPzebBoFPEePpgAnCgempL9ZSNPBeyAz9t",
  "key11": "Eh8xtYXwccZc8fJds7EuphJrmZFwbZphbcaPuzymgBnzxBZfT8TrvUeJ9VaLGJS3j2BTX7x762yWPvaxKKkosfs",
  "key12": "4mUJzaFPWPFmKxDfJcmCwj1NcwQFRmjxsHn4LjT5vp8AfLMjkXM3A9mifak3spUJ3kBKMMa3ee5jqGmeP63VoRmU",
  "key13": "55AsnXfzXsaBL1YwZvSZhWwpFuabPHGVW7HJbPHDHAbvu1y4jVJBXJxHVjtXJHHrZcnoFm5tLNM2vtLCtSj5NX5L",
  "key14": "3xyF2PFeSJvDt6mL5uSW8LMCNo7dy8Fy5K9H1JmrMxqPPonpQeK1BkYLzMsmmLFFHbX26u9V6cqYNpPYWLKeiMTv",
  "key15": "BLdVmk62TDaSnrEsc71zB4vRepHG7Nw3KACGZRQoV2PnwY5PXEFMMnDiH5hdFihLY5mEPWu8zXuQq9LnX4QdQF7",
  "key16": "UdyXJDXhKKHKHXHc5YgAYopeZ96ZSWDLDsnyoN5oBZ5oX614od1M41esGZLG3YXUhfGrbZJAUY7nzmBEQ7c7wH3",
  "key17": "45aK3jfKWrWa96rwWTXmAiHThpaa9emCNWKSpLM8bP8mgtQBNu82jBSGbaW1W8DFY2deUJUENWDdAjoqHdauyXUn",
  "key18": "2R2bSxn68p2uSkTLPETWQmN5wzMNYQf7ATLMktZwJb1nVB9YFYsCa6xFmjGvGchJwb38XDynxZZ4h4TMsUaMY9xg",
  "key19": "KjLLykA9fm4znRAYT4tmsa1inwNKLYwuY1X6vrmYpHDTkz99kxseRmFAakri152yoMmn6Pn2vgKcYBpKUXUwGMC",
  "key20": "2oMj2yFdG5mSXBTVkaLDmJVc4rct3k9JT63N3fUsMD4cKyYbCuNGjjKTMsrqyNLs2ayMYKXHBK88mroeJJZKB8dX",
  "key21": "5mcp7iwiXFHaRM5tqkexuQ8NH7aLGmRiFgCTPES6vYSsteM4RudZqytNcGmKp3z2tf63yKTWWr3eixyCUJAMtSDY",
  "key22": "3QPvLWMuF5AnD21nrEt51QbhFvCxhBFXLphsXzo6kxEzgopF8XKHoNq6dFTjxwPjf22L89ZJHSgKxGP4jz6aY4zz",
  "key23": "5X4xZ8CjqGvCo9wbdmWdcDRdfA7iurQJmbxRztej2Gav1FEpY9KENfBwHWfjASCXu9ziLwnDHjC949Vdy9HwK549",
  "key24": "X4EmMniiPwHibnuCyfdxZrACmo6y7n7Ev1AtjFF6EiQfZ9zwxb6eC7JFs27seGPCq3136NiaaS62iNRJVmqfNb8",
  "key25": "2oxzURiqc4jy7xsjovYFK2XR2k6YCeGHEeJ8AXHLxvAa1pfmycQqP98FvjwTAfuciJjSdXKMv6quEZVDQrNWfhgr",
  "key26": "4FL15eDGjprnTjEiRQRwq3nfUg8DZvha1CnJKEJaEaYVwUTnn6NVChLmutoqUpRQwDK96KbpARa8YY62phKYMcrA",
  "key27": "5PZxNQ1qGSVJUFyu93GUn1mTCXX7TBBy57Etuc2rgurextxNmvwo1J7uqoQ5X4rbd9PD6VaoM4mGqZHCKXGH41pZ",
  "key28": "56njj7GAYMHG9ATKDnNkyJy28FCz3BWbcC1C85HqrjzHqPAU2BwoRXDYz3HDShmF87LEguEWT5CLFvSpB8bCucz9",
  "key29": "5Wawx3E21afnkx63WhNbLZvrvds3KjFUrjLtvSxCKJ5bUbtzdpTwaK6No3bPSeA81YqroCnB78S3YXJ4G1RmKvdQ",
  "key30": "2QAqqFz5LGC2EkUNyZ3iPmjrNBRPE666W3pFsWL4D1Yv5h8p8TD5nJZ3TTxtvqW8LmK7JEKkomqTJzxDygk4jg4g",
  "key31": "5m3KgxDd21Gf8og6jKmhsTjHi4AbaQYSQwV7nokqGaTSF4x6vKH83c257UM26bjYr7sjTRpb2DLqq8dgrfy5RSt7",
  "key32": "36gXGxZA485ooM6Ay4yusy3nKsN5a39saf7XSFEo1Qw1RdMNmwS3F72EoBnqd9yn1kq6ckUF6ivPViQX8QhonSpd",
  "key33": "5t7RUQu753BA9QFrv5cwCDYFh9CjgSDavt5iZoNXRG9PhY42rSSL3ddfuoUnb2je7m5cy38bsK4uhR65Qrk2BL9E",
  "key34": "RKd5EqoZNpHNGsSP2UMwAefN8xEs28XmNzjMGvu5DGg86AvnzCQTMnyjhAGx57eTt19Y1i6UUXACCVjcr4dAZPu",
  "key35": "3xw5sVmix9pmMxfbJMmpBPBmx5tVF18Tvf6tVyHGe7eQsrM7NCnzrLYt3UZt8odSp8UbXb93PmwMZS9ZtShK2CCG",
  "key36": "2aGEc2RuUa4rhrRB92jarzdomqwqb8PfYgtoVz3nvxh7quppceWvZorexvrBTyVggTq2NQo8HsZBqXt2tQwnwM11",
  "key37": "53hGYZpSVtnwEgpuVwuJQcHb7yptkatcpB9QNw3nRX5pVaqKTnvv1XMargo7tWEKhFk4FehgM1pM1pMrCAwTM8sN",
  "key38": "66hPGAaFAEbi6xRDEcsoYwJjFse7fpkc575Qckx9W16Uphf9xFU22m4eEXutUBo2QUW5n5ok4TSEf3vNQSgnwQnv"
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
