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
    "2uHw1UqU1uqRtZpZ8Ci9YUwKsVZTvibYW9eoxq4GKG846VU1UV4d2hvujz5FeNneMNcJ8L11Ci4BgGPNX2L3ksEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LH3rwJgzgpFnLH2aX8jb4TSGQ6EV2di4SVLbahpjpR7qMU4rhcTjGzYKqotLUDuanP3Y8QPnyAk7qzKmTM3Bpa",
  "key1": "2Lujr8pYKP3kU7idvxx2gEN4BWm4whK3DQiysio372sF1jktuFFTspk5mRPr61Gsv8ruWeXZziYyVPuuYZ6KrG39",
  "key2": "5MVgkFhkkFRqa2tMy3A8mf7xj1mbFqjW7eBKH2EgmDcCAVJPGnQPeWFTMwJ17eBnZqzxD44YX1s5A22viUGU8MVd",
  "key3": "22rXGC8qDPH2pJ14xobi7jAN6HuKeSBqUsemj4CFksNJBNhETuyt3mtTmYFG7uhRXxnzpqe4e6tMpYbhdzGm14cq",
  "key4": "4d2wYhVoj4dNNtbuqpnAhnSWpm1b2KJSS9jekvzH6WnugZtFrBFSy7h2SQUZPgLMkDSouAVNbVybWzVCHQhhgHGW",
  "key5": "48N83RwHdwHgFkyVjK12nJu2YFKRh5EqZGfXckk7vcwRL1msau59k9uda78WVHba4vfVScPiVTJGLA69SmnaFQqC",
  "key6": "5Xx38eh1D2TxEhkw1ysYnf5i3RuqqEfCqXzmkg4Mhn2aHMaAZuGdciFozsWZTJX72NPikkLPM2XcYXb5rjM1YAHQ",
  "key7": "3xCGjcy2LiZ8qh1Ba6UeQHKTfV7MMSL6o85YXJnm1cyZdmS8wqqhqzdHua3evk6fhJWgPDAX6BFJPwsCYRLG5Le4",
  "key8": "MkmpYyFTPXCAUptWu6sFBjams3AyQMoHYZaDR51ZR4VHeDSkmiZz2Tzsd6vE8aDtgFz59pAfzvcJNwEAeubNtvs",
  "key9": "23461ViQt8ahvCaW1cMC6rZRnaWj3niSkStH8EvpfQFuQ8SsT7sXs9kSb8u1AUcypiLt98CzvshHxnVsk1fjFcZz",
  "key10": "5mcWiwWe1QTmXfe19nEa4rzBeJvitcvL2tej9gyksCCzx4u1unZGcUYNhtjSUGE4qXZ8rcB48yfJ5YraUywEjYPE",
  "key11": "3msPjWNDHeuCYjvA6f3SQ9kVsftda4v2heXNjo9maDMrowErJo6Xbb77iwnYCkxbMf2sQGqTnzxkNp8MnUVPShke",
  "key12": "3nHykP8jPFEctcyqMaYoykxpwu5FK9E5XYrLgcPaZqbfQQWMuap8mZ2E481JGqAnvxroz1E2BJnjENH6jcBueEH2",
  "key13": "3wvbwdnJ64srvk8gq1x7WamBonhvDkujnQYfojYuADcvQXeEazHRMk6cCvz3QbkuQxrx5FNu61ioeUrFbhZiVwhC",
  "key14": "3uWWoHXXpAhGAT7Y8JbsRJ4xEFaRBVshfDgoy3s6TRX6QVyLjfDKb6eHRDiNNnj4wkoYckZBPSxd61XJPdb6FvxQ",
  "key15": "3sSneRYoXXd6TUxxwh3dGvrqgQeke5ywN3XE8D8ZRJ9WasLuuSgbjv1ZgDUdnPHg4aQPLpLYset16ZWC9FHmAuTV",
  "key16": "2vRoc6zNQXHQH2DGrdao6uN7XHvcdhhttmMLc92t18fhanQAszkMfQjUECrHSUcJZ2rkCoX1wYQyHcK8EbNCNXb4",
  "key17": "4q8VefJKvVeTASYCi792EVKdwfP7kUk6FAiiB26nS4PsXecVhAQHsQ1tqR8LHEeG3d8v1wjP4i9iNAf6bzMWHTY1",
  "key18": "3dRgFwSgsG3MaU7mjf9krLtqArB3gNFGGo62TXbPDMhQfRpm5hcmRMs7YCBrjSLW5n8NNZ7bwPnnZbnb8NHMNbEG",
  "key19": "3ThHNvvPbAkezAULKyrK1YDGXTrCwtCkQM4Cc78GVn2Uy8X7G1tUiAT7EzkaAwkcHSbWp7bmyoUoXXvVNfaEkQ9A",
  "key20": "5htFtAKZSMd3gJn9SqxfdAXU6J6URnkvQCzEhyE46D2EK5kJ3JxDWp25sCFpmtBQz4D8XKyrJhWsZLLP31iCahwT",
  "key21": "5LykkPEgK1TZohcmCpvvKS1eXG3A6SyUbiGVZNYyrTmydNdpoErmcf3pPYnUSf8LBitEuvu8rYEPncf5J9Wz137X",
  "key22": "3gMADjybdqmqqGdpxoWxvfpg63st3fy6JbsyGnFUcsedg6JZZ1UJdvCoUT9B54R2k2WJdrLpnAqz3h783o3Pguxt",
  "key23": "CHcvpdnw551YWHfkijMnJ99RtN7XTtd2jwBfQhRGwjPdXgF3tB3XV5PhmwDp9MT9zyvJ9bz4wpEp4rB22oUtWwh",
  "key24": "2sZ4dK8crfzctV6FXEpBgXEecPT3mYsza46RRaiP7ToZEQce8XXmfAG6z6PotKq51PPq1poBXrejn35BQfXciKMS",
  "key25": "2AXU6LdRxNBfhWoPKcAfMKC6vVbJ5o4i24gSSL6vuGfNSswbuj9y7WcDoHXSjoJsot4ZtPChzTZZgAn16m6Wsn9i",
  "key26": "3VGy4ZMwhraBXvBXFnWJa5xGbFs4vxd5cU8V3qvaKFqV9Zmo5Mjyt7rNVWo9P4Rdo971bUrNXBVUjF17ide8tWm4",
  "key27": "2DgVQMHCTUBVMCGyyVheo5u14nUM85UsXNCUkKDAQZPqMzvpnUFrh5RwmQAEZyoRVcqh2Fb7XdqxxdERzLc7iiwf",
  "key28": "4gJFBz7jHfFjeEEHeQGrTJuc6SNhh3mjT2f1qHUoV7NoF1Ukiec9NC19f8Lsab5rxwVF3fi72Cm7VLq35MxcNho3",
  "key29": "aFsp7BzQJbEpUvV8sBtMRsmhcyw2kHBi4xMd4FTf7rmbTKfgDCGvboumCvQKuNZrFjzbEjXWREMHATMaby2noSQ",
  "key30": "5x4tTTa6BD1HsN4wc7sjYiswEXUMC7VHxXZzZxHy6kAgv6634kG3eF8VJHPb2KBvWUrBdiJoEuyddkcDzD9xEL3b",
  "key31": "4QiLUes2AsrnMpDmuaqktSxeaASzaNVZWn55CxS9KHrhGXnN12wUXmP3PBDZMQiMQ1qzu2ahL9LfQQKdGWEiZHk",
  "key32": "2azUh5UooqL4btuUjnb58e1k5eJMzTMSVcLRqGujTRfDv7jeHBUcPb4UNHXANVfFSxF7kEPunh2S3ZojSZDsNbNo",
  "key33": "5HGwhowgnCG7VCTXMjUKfTvnxei5dP8LMzNUo8rpBe7WHMfLJiPsnin2Z6HjiDYYWmyYkAkGVatiephbTCaYUzXC",
  "key34": "53DB8ma2sgqDwWaYFW29Ukgge1ARboXQjdGaudfAyrb7Akfovnc8kMeeUAvgiSCKN8WVa2pAScGBoXXyySeduezE",
  "key35": "2EifHeQCBCkL2rbnhsUYWtvWHnGkNJk4RCADTXxxVtGjVVmQgNCWkM8poXhVKiJgdtAWNvuwNCodQwKv1vbFs9w6",
  "key36": "2fazUmse3jDvF1N7x5DXfoSW6i1FkWTZXpYJ2PugXcozAgpWjcfx91pG45YUMZ9NehSSkSsnLP7nKbCq9dF8sbvr",
  "key37": "4Ktfz3UFB12346JKtFMMQCNToVgiiY6wcf1ypiZxbBhgpyQbotmSCsQVWdz46TEdyzLUnr8r4akAtiKGJ6vgg1PJ",
  "key38": "27HaTdQyhxGhfNyg2YQpFgtkZAM2Q6gcVa22sscb1beCi5ehf3YyqaU2ek28vJvH7hLH36AVANvPcDgxUDo4Jtz7",
  "key39": "XP4pop6rY12AfnNrNyd75HBx8Witp4EuVPd87CQi5WevMndsB7pUesYtWCkLBSnUEquGJx4f1mSgzqs2US4AWsT",
  "key40": "5JrDpwzZf47AHiRuR3mq2gniNXBxAU9xswNKMonRPW2kgkjAHUvoaZju4Y1Z8NuEZcvnNPAaQqBqrmH9udkgoibv",
  "key41": "475tBcZVtu6y3QjyZg3SJmigPxjeNoXeNhkYoSXqsnw8pdfidVTYV9PedKXTxEHhF23SaYDqjDhAgy2HKph19pCZ",
  "key42": "Yy4TUdHudihQmYzLuyCwJAN2jMSWy9wbRHK4ss64ntX6EPMeAFzBtmJy24ihAYKuTtHiysiZ2EHjB1fZx3zRpLC",
  "key43": "2sXRVB9787UwsW2Z9UfTHjTKNpek1hmbDH5d6WJzBsUNNhDXPLGAtzMXZfJSy6q7dhhciE5svbL1AoMMSCBUv9r6",
  "key44": "2hdoR9HBLZvkNz34w1j4Sq9zjQu7aEd9iHz494zxFZpar9Dm6kzfTqaxMSQP11LfXpwWAoVjyLVFsq1b2K4fr8U"
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
