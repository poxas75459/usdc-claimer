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
    "5Q39gB3juR5g4nk4SzLHwSCeCngaWRKTrbiAR3tMyc4FXttc2Fk4KF5yPpzfyUBLEwS6kDFDdjyMA81BqKX3K5GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuMjSSWcq6mGWqeRJdb45f2QTNL6AisxRESjyyGa9ZP7zgD7qq5BQvAjdsDhKsRFV8qRV1JazsQJ6jvQFdf38T8",
  "key1": "KHaQs9WrWNAListA3dpqv7VisT7bdR7FBcuX8ZHoJTCvSYc2mHjaRNzW5dWJX5BiFF5hcdCuL4ro67wmSrX5roa",
  "key2": "3GnjLbYxwR9fFRcMA7xd2Nhfjxs2eyysywaZhUPSnoAzVCohPP4YYdPqyg6irTyFZ1PcFbioS5Yz9nozkaJhMqgA",
  "key3": "2GMnGKX1h2mDq5pMaAQwFnFZCcS5L6pUbkD2PCuiqce3C8gQpXb68uEDZ6oAxsTUTV9iuAEoFbbBNu3CDziu34wM",
  "key4": "5pJDz6iBqBcCkHLvTn87VhkG5Fn6AbN5Lyv7GtZMMC7P37KDRqNicBjiAa48BwBVckYisVdwYpE2AbwFfrcLYn6q",
  "key5": "3tQRUF89JGDQD2SJqV3XTyDXXU4L4UYukLAFSGFNunR35CUkYkYPiv76vTLn3iPycuuSjwcYju4ZBRXDxuvJ6JiU",
  "key6": "52pNfWoGHE3Tfkd8GVYuckszMeP6FHPaaVyY6YuXppF8V3zNXfLNdtZ2qmwWehvxTqED7Cu5uWXBc7HYGSphzNqS",
  "key7": "4HKeYkTeDvNeB9tREunM4eExhnE5hRpZmvxDroqCoT4U5M2bFZQQx6JfMeR5HRURztZp5bAjUir1erRGe6xGyNo7",
  "key8": "2UpFx8rJDDTphvbBE99Qpe4f6SU4j1g9ku2EXHEjZ97PXVVdxGsUaqQpdjUTRSbV3dGPjsG391NdmTAdCm65x6Po",
  "key9": "45o6aP3Vdx6hh6wRAzGfQ2Z8oCyFK9BSeh3Lg4djxXxYJMm5JsvXdKbaC3MPoaNos8nvFdRdr1vttwnKQqcXqaDY",
  "key10": "29rz4jZTpmXQ1By2BWLKwZBTxbJGUsVbp5ST7zKgGPcLYiS8s4jFcFVjXCK4hwZhGWFQ4SQzq1nwTZKRgiqRC7wB",
  "key11": "4en14RgDBh4kqJ4sbMKJbqnT61dUPQCT6zraNdHgnU4kjTsKtLjDh3HcCgH62snB1S8F1VMSKhmnV27gxwx7BjvV",
  "key12": "5ovkqyGmH7bfyGfNtJyHV4uCLjMzancZPmDB71727LVqyh8ZNP4BYibUnKtDQqo86RqG7b8n2hM9uW8rgxKaojgA",
  "key13": "5iADpdEuwfSYBJdzf6P6neJvsBALCJWoLLJEQd6fMjYp7ApjQxpcgoy4a7QmcDyRXUAUcyXrhZapZtmjWBmv1xke",
  "key14": "3M73WWWb35pooRfCPwL2LEfycHWHuJZuR9ziBp1PdeSahheJ7ERto8GZrt8s7r1AkKmoT3h6RG3MZyEgdnxpdFqd",
  "key15": "2sqot1dP1bJyFeyneevVda6usnqbuvkQujxME5UaGQys5HLuiXodYyHn9BRVbwSZ8EJcsPDA4GJZzTRgWHatwtud",
  "key16": "4EgacMQQp5nKq2tSK7LCED9UMCuGHguBWHbhDXayh2kh8CzQCsNoyx8m1KTULtitzLqKADf4rRbUKj3s8LaYazSY",
  "key17": "2G3vWNeqBv1JarxBaZ47YuFNkXLHzjULswFZS8EaeDumaiYMXtoCBadEnxy43ysMEGzjoXJwSBAR5kYLGdmd4Qko",
  "key18": "44aepiR9cqX5NYkYzZhcjbbXWJCUuWM8sdFTd5cHJV3ZsjErs1bCfne1ffEk18wPURyoMzyiCkwtWgxBmzJW2JaV",
  "key19": "2eWRFVGUHeyoXUKTYVBqosij8fDXUnc141cDDXFNU9hJnbASbV7GyJrZMCmmzgxLwmAEeGMKwuUrFHJ4h2oTQs4e",
  "key20": "4brmna9H1FpnmMTEJ6SyhGdCV7or9UfA9DEec9g43ueFHAWmXKDENETRhWEWtKpAnxJ3oSgXM3tBoZULboLqB16Y",
  "key21": "5Bi3nbmKwrqU7oqdKPZe79R2feUPt3hM4X3GwtA8oQqgfaSu2RBnojYyVrqVmDSAbCrxn9rp7aVJhzTEGxM5wHSS",
  "key22": "5tiqiHkRfzfYEGihsP81Mhn6WeyMR67Txm3AiNCrksEGZxt3VZZV3piVvEMzD5W9gQitJ6Bw8vb6xUZyun4CozFN",
  "key23": "3B4ubwh6rBNRcQz9FDRxeRWAs2ak2DYTKFrfFQRakWeej5WPDMD7EQwi3GZmBXis3dxE2eiiE7D5E8SSMRqyTWuu",
  "key24": "396wnGozBDsLNdPj576GYZ5cJhPmvJWPtjgfGSZ9BVsFeCTGcJokZvAX4FMHnFsesAyc6QxXAHwScqqKqEnkur7R",
  "key25": "QXxdkoC1K1zwFgfUaum5zumX4tN8TP5Fh7MgxULvPb8HGkaFNffnk7oteZCmswNQdENK3ur6rviiuRpcMVBQxGw",
  "key26": "2AWAYjyN3udZoPmqxzzTGviaZBirFqQrCtcem2vq9Gtr5tTt8XjAxFJfqEZUwn5MkYmpJ1PFuLnL6HG47L9mXhXJ",
  "key27": "21zSACzugV3ggEmRUKErsTfBiNiqt78RChe1Qw92ch2u9R6quJJ6efqTqrS6JXhmja7ej2D9TyjzA1rFrYXsu8QM",
  "key28": "eeViQuq7qmNKnfHbP8dk5wS3y2ajb3q2zFmEs1D3njwtCkfxu2mvP95gXsA3orRwKiSLBgMNskq6i3h6bJJTnET"
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
