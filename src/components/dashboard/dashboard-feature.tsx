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
    "3mwJyZhWKZ9yYAM88sLbtBRnCLpAQKXnhh8nZgvrP7LZBzuyAEaFVU1SX7whgUV1KZ1BYZF7R4HNuNzqzEFBGiXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cVzmFirrjk5bieoMtJRN6GaCirEcSmDmgHA9JRHuPeCxdKqH43Cyq2rdMY8XJGoqAGxHXvcLP4gQ2nvcCvFjH6E",
  "key1": "3kECyyWJ9t3zKZvTCdKMm1DYSX5p3fN1TAFEVSiaaQ9Ad1McPGFnw6VvzgEmhLcoV3mq35dwjuYBbUEzfsb24qp4",
  "key2": "4QtV4afxui2YE6sPyznMo4AsQ1kVev2LgrTRaE5ATyBeQysGoSiodRdE2LV2n9EZdMfbuiDTn61YFSZk7eqWf1Kp",
  "key3": "3p6GAn4PRVqBKWkGwruQu8JqoRYkRKKfrmkkPDPDVBWUQu9mHKh3YTRrEtZPn6MDCCxzZNtqM41NGRBz5CFQGPop",
  "key4": "5vgTRrxKNcdhXhYECk8VuWd7HCTSqytyYSy4FBab7GKDs88B81Qv9pkVghPDnmw1KMFhq6SdMd3hoa4jz7BTBqbL",
  "key5": "2bHV53axGGfhPQ291PTBweTXRgzEudsXYxYr1FRWqs7tp73ud7e5Pvo67xeVTPGhyNqsGsd5hLXnBt4mRuh5J16A",
  "key6": "GfseCFLvQgVMiL8gkU8WUfSK6C1QpQfwXAz5hox76YKjZXFkzjjYh4QbUbnrnq98BkrdmoCsv56jLVH3zyyRSFd",
  "key7": "5qXsC2hRLhaLQ86aLicKqrn1f856WWVoNVBKnPy3mqz7BrVuTkUaq5ci5unQw65zkQ3g2g9NBZ7d5k2JPfPbQAN1",
  "key8": "3ZnxWRxQ7JJB3m1PW9oQj3Vp4ZiT9LBxttrjhyGszXzRvUeRDHBT7w1MdecVRuSjGv7Ra8PCwoUa8Tsm37ma5d3",
  "key9": "5dxpKvVJsXKbSkQTw2s4Rk8EiBZFedqPhhmmvE32ji2QmdgnYJTrepnbBMgm9QdwaL72u6W4Gf7YcR5bVDYADney",
  "key10": "5CvA5gnNLfcpGNaeeNXXzdZuFYHQJm4ejrJKknKKx71169XXhxk9MbH8GXLKMUDiYi7BuyRbqbvkw2GvCrawhxXz",
  "key11": "4GTbriALdygEUjSrFhDVsiLTSeYYvreN2cgARakAsKnpPMgKoKBDQkZV22Qwd7AhPmki9hLZGoCo9vpfTWQ3hfzd",
  "key12": "59YPCjUhmKvaLYddHfUYYbcrB7jtDui5V9dD7nUrcczN4fgrUr6EgKCj5ZLfuabARE57k4TNRkLoEaHq8kh8Tjha",
  "key13": "45DapwCkJ8kL5WXBY3S14iUdimdAovVvEAJfSD3phn23sbLBmfxBxpJSohk9QTKra4bYQTwni8o37Vupm7rT7xVT",
  "key14": "3JcxKVxo3w1FBEEP2FkGW2yQJf4Puv7pHxjkJcUGiW72JjecH41sspu5SE3hh48NRXx7neipsAbhjPVYtArFFjBR",
  "key15": "3k8XNXBztP9udvXki4qaT2yiunPEVAvQWy7myyYBTq21qHExCr4xJy72GHvkiwaHHpLdqhDQjQr4CRjK9skkVL66",
  "key16": "4vidTirVJ2ywUoTcfUhFoBRPGuWRT4iQdd1AXuJpzrcBKyrhg22TNkdEqTxCjdqLYuepnm8Gr73ST9vtn9EC1Tp9",
  "key17": "33KURRTf8UMpoYSXQLDGj9ThAvGqALGj2T22dhUucdCXqFuX8YB6CeZy2vsfoFSeZz3RDyBR1GR3pznrotPHcE8Q",
  "key18": "Vtg93mqRG1GcYDNfQn9Nw7hnknd8xJVLW3BbDhC4auWnYKF6G1fZnVDs2qCrdu7ffTXU1xoDQ1bfyzNErxukzsy",
  "key19": "2Nzu3eHNTkqgWPbowiN2axBDJs5bEC9Bczuctj3h9XJSgxEqd5ktifFQmjPh75cmJjJZyASUp5LbAFQS4AYWjjuP",
  "key20": "Xce3fAvGNTRFyEwY8FGWK2rg4uyqdPmVGpk4zm7WTeCuNLrV8Ctj878V4o1np7PdSSh5WJUZxi7nJxF5NNqNcNa",
  "key21": "3LYZApo9tmEAivj1uDFryvo33G3LYDby3khUvBMJqi5pog6zkh7C5u7guhBKypZMMvErkhzhZTVRtS9gvFJirjuM",
  "key22": "3zK7Um75G3w7qj1pFLQNpnFmJod4KRX5bDhtcrjDoN6crXf7aBbDAU7MFXJBSnCtbuVRWCrGMUPnrFe4xA8ZjLna",
  "key23": "5Es7UC3kghwEf8XqV9hf95AhQDr7qATXCFBmKh5D7s17FcZRD7y6NMkT4sYoxAodu7XME3rr87iorFXBuGeBQfXb",
  "key24": "2zEZLzW1gWnmqcs9e5zQQbu1RsYstLFbBWNoTz5kUtPzBfhzn8S3JvkDfYmsy1cy75vfXjLxjCpS9pr4iJ7Zhiww",
  "key25": "7nciYDLyYF7gPp4J2hyKPdf8kGAm1hf8qmaUEDq5HSUht9t1atqfHyD1TWh5dikMXm9mQCGchgaiA2nuQaEvMW4",
  "key26": "3u4jT8imECdD6BYF87z9oqA1wCrAZzuv3K3AHBPAEHXVU6bfEjXYR8cxbBnXKbJmzzThP4VpA4vH3cDvA4UvVHpd",
  "key27": "aGt4RK82LpFe9jKNcYSLgt6dBqTDFr3vm3moiCB2QG11JFYQfRv3tyxLWEpoz8ukAE6AdGKmiP2s9xFSgi1YkjY",
  "key28": "4Wj5pa4SPbCaGogVzY7HMwhMpeLCNL1TKVxGWKG7bCkpTEGoLbiYavJFES19zcqoJCpbcBz6j4CuC9TFRE3AqDvP",
  "key29": "56TMyne5tqs3Qmwx1A2jX3TCAzAK8wmbRzwUBUdQjys6BLPWYE7J9Twt5LL8BAE9SEBhMGUYXJbbXG3Wo44oE7W",
  "key30": "2kkVdqBi9TvGqF6AvBVPn7qP8cz9M43rWVbq9WqSF5CaD91veHApE7i8uUTjNy8e1SMDiTkxCRYeFLhj8QQKcX3D",
  "key31": "4LXdjgpwNAHqA9hVfXzRr71uxuAH6hMzhdDessx7z7LXXiAjxpXBQPf26myesR5LaZdxsCXXfxC2z9hmFFzRjTsY",
  "key32": "2cxM9dtf9581UwVEAsg5FcgT3c3QXUzAskVa6ZKbxecLLCkYMzAqbi6j858WwiV2TaqaQT8tzbVRsVZfhCGLc5in",
  "key33": "3CQo9CigVnBv479qSLDLVtEXdLLnMbjJcbhp8GpNuGLpPrsjDysrDmiWwfKbBUCsozcocVT59fDmuD7erbuieC6M"
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
