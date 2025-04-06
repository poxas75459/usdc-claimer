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
    "iR78AKKV8zpkK1vZ8YyvbVXDsFzMc5ZwBt6RpUtX4f1huekQ2KgnJxmeJsiWekTcD2iUAzA7TUJkRedfg9bvz3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qq3StjRz1UAZERKY1TWjimz7bAkRWg8YEXo7YxCFGaq3KxccREwigV3gCzNB967steEP4mMpkSAeia7kdUET6BE",
  "key1": "3GH6dpEF83s9BKxSDBDPfCNZDMJ8etEgN2SG1N41SqXQFTXwBcLwA3sQDisugHDGvtuhqmQsxhXwamKfjF3EcH69",
  "key2": "uC7qF39iV2GZXbcwa79o4aPC3gQwXW91mvYxVpGUgNhwp6YdrmjrS7hgMkyLCmZ3hvBfUdgFr5or4rNiBs6THF7",
  "key3": "4m1abFiG3faQy7KqewEhNBumca9HQhtPcbeeVoTLdeJq5J7szVF6itP33G4B4LaCita6PgEv7UTPbaqUjTE1Nkzp",
  "key4": "37BVGg2Y5RmsH6w4jNBwYb4ebLQThMudAEhsMFru5kna9C2kEN1dBtkqB1pDVPLyYrENUczDmKugPSfy4LiCT2Am",
  "key5": "4LgxmJj6w37n991M7S2MYaQ3PQ6BBtMpCeWT4UikkxWCE1WH1dtX5pAK4fF3ucWWj8U575NSgayWTF9WiW3wztJA",
  "key6": "uRWM5MzVPonrEJArqxu1rnm8fSSeezDWbdf2jeh9dJQ1yJo2Feg651e1toP89coFeonzLxXvsTBdjEumBmTpNhg",
  "key7": "4PT4GwMoJp4qWs9kupKoCLo6NF5c1Rzj2hTfWTvnjyXQPmPPaq6WcLQ4DfJwLp3yWTF2Cky2GZVJbwVVDhceRDvt",
  "key8": "SWHef3omDCq8Qa7qKMiFtCUdWJLuhizUsRCdv29QxjbTi8aNtkpoQsyxCUjsWjoo4FnF4NCjwPX69RYSTJUwBeP",
  "key9": "5iCdbrhkuiEUQbHrVBdXeUHzmSeL6FzcWpf5canbQzU5hMrcSSwNoyrFaydVb2CLwhLy2YY4f3M1UXPVdnAV2mVd",
  "key10": "4EX3dX9MvjxAUiprYJUPpjKN6DWQzDdTLabDzAvryynivp46uKHdNAtTWKiwhFC11SreUWNthhEuE1h9iY5RbeFq",
  "key11": "3r4XxgBd8qZbNNahbQFXKW4RYDdLw7BgZpiVyLBkpESxpdAXut92fNEVsBS36mTGA6Y25HKFNngzjbTgQferrWgs",
  "key12": "2ESxydN2efBMNAg34HE6j4sdShUA5eCyX1EBinBhhhXP1YLy4BcB3HFUXWgd4vcTHD5yi6AXRvQQxGrqkmzHDeWe",
  "key13": "5yCMzARsbFmzvjVuFYiABNFf29dZ5yXucZNhgXWNB5jvexyce3YtEX5tQwaC2Nk3pFaDLNUVKGGja2rnvwWWvJeu",
  "key14": "3cWLFmsR7DyM5LMdXAKPXsArg5vRWQ1pMzbdffEbePr71iSxPpcDcJhLJJCyD6d3yY62buyBtux7FqxBS4dxCkKE",
  "key15": "ZGRphH2o3cfrZsDwo3S9DC4ZYhiPe6RFZSoyGexsHz4PUyZCLYpzJi4vYW4XkwyXK8WaZRq3Qj3SbRoZoaxC3SN",
  "key16": "3ZiN1RzZ4DQGhbMJmgc245RhMH2djuJCHHx56PduAcBHCYZnogh5JFk186ysgqpqaYwQQRcEcmRazXLBcTyktEtQ",
  "key17": "4nVDmVTkhuKcx4mc62FggnE2Ze9RLo5jwkcrjfYksSVQPCh5EKTNnGbJy4L3oSEPL3QJ5VmQj8pzEbF3yatou8f6",
  "key18": "2CJdq2wP7Br5wj5BynbGb3b9nmLMF95a6DyHmfYgZkPUWgSMET1xDaTuaY9otULdR661rSJk281ZQRQeWbTX5P2c",
  "key19": "3us5N2XxSftiGFpVy8oEgcVVKuVUx2e7HwvyNKpMCjQFHm5JbXm2hszYAo43F3GFaNXvSjkBVumVkVSqEYcFXBh1",
  "key20": "5H1qbJbwMcg6ztQXidEx8U56ahwi8ywXDnuJMSUtm1YvicNo8UDVqZr6vJ5NEMbQyydYUUx1uCvbhVvSCnCe174V",
  "key21": "21xutyDBYf27Cr6w1ubPdmJfgFnKS65dVuBz3aaX619KrFioTqfZdAfizB7h1qd3ZzuRvckBB3wfGVdhxAXiJrGm",
  "key22": "3ab6Sw85AJe8PhENYnWpUwFSfgZRgj6QwVubbquDBWnvtPYG2dERm1X612cZvDC12pE3UNq87Upuhzob42xzWs96",
  "key23": "24Cazyim4Y7T95qWtpJw34ZVWsKvaaT9hLh6qyLijY5z66ti42xv5gAXVmhMWnNpse8XaBPagA3cEJjRNdyTU42m",
  "key24": "5mhT5Lfm7Azm1e5q5jDk71aBowqzmd6U6y4jYSEfn5pYwcuZcEMKsgWViNGoi49z8EGdaSdH99sm3GjdomvEEQeZ",
  "key25": "5qYkXmbuX6QS4HsYRaz48ckEEjxL4K3wD5MpgBbkhKqpJR3HEwmzaoxtg62CEJnRMVHVEF5rVJkPQzFCuPJjSxay",
  "key26": "3EfM9s44Pf6rP79a8FuRrUhK4bkzZeszLaMbvPSp5m27zuyDsPf1Ba3V6HXugMpw2qcYKrf73EZPXTGgyDkfki7G",
  "key27": "2f5PUEupJBod7gd6XZWLcwKmq5Q8kNDMk5yJRUjHkXWFs4szKjMHBfVcgsNa1CQyV8Af4JPXkwFW1e51vAWpsJ5P",
  "key28": "2Eiu5Hupqvd9jj4N6FJBkNj2Fkpd8k9ZeFBDVkJVrLofNRL6eWmhVKz4obsWTH5fuLTmUHasjZpe8Wa85af2XfJu",
  "key29": "4yn4aDMzJYfjRDsso1PKCFxr4Tf1jeXwABuSqSzL9N1ZMMo5eBps1VtF3Ta3QmfanRPbNuzxPQyQRp5L1iR4Cz3",
  "key30": "2w1vd1wPnAUKGeoPvZp4khTgujrHoScUL3jaZAhvecML9HFVzKtqu2LrwDTuTypx6ogwYqdgAZidcqk7PMUewEjf",
  "key31": "EPyUxSFBePM3kzgemAmD4r8N8zdCJDrcet6EGTswrx1c35kZHuCj67FRJMJcNEEedNU8vE8je1xwRwrazbLhbCb",
  "key32": "2GHzWnSvQiWNkQJmgre8bY76HwSzeveyqk9m35YeF2ZV9oYqqi83avfBxSQMLANmuqyee7uGKrKPQCeATscnx48M",
  "key33": "4kzaqJXcnm2b31wNqJPtsExZo8hijEeVXZLbuTBr4CmrXfvdUbn7nVEMgbrFJ4gk4hB2833bGyvbhWcbwudMYkGX",
  "key34": "zMtU2AXoSAAXnc9PRM5h12ndQDpqzyHfE5yKzGQnHQfqizyw3ihdcimzT6b47KSYG1kH49QvuiHJwcn5ttaGxkH",
  "key35": "57c8a6qC3yuCSo3241eiCRD7K4Jy2hDbq8d4beAMQ3x7KX3uMK1RHYjew4NdiXQ8VmDTfpySbT6v5X6LdArk8GVU",
  "key36": "3NytEZvYQMw8svpiyKQiae7ZGFgLxGrzoXQ6HepDAagQw2JsuEHpXTkAQYyrEoFRx4ao8gFvvwnrjhXc38BWQgFP",
  "key37": "26RE6xRJEjEUz5pzzBigwrW2qD4hF5tPayMevouDKVosbE1gy9qDk2hNvATfNPpSPQT8bstTuqkB5GX35s4d5s1j",
  "key38": "5WbHgXgdhR8vF9Go9s5ntzxmHVSCqNR8q7wAZ4XbhdQcd4SVJuhea3RKfD4jvejPbrKeTcRzH4BFUwrCLuXcey4v",
  "key39": "3bSvrWvxo7MwYagVxHDpUK47fL7peuT6eT5VMvmFMb2FB76NyfkPKmzC5KjBrCdxiSFo7FCv4y2yGeZcYBL2VNE5",
  "key40": "AnhYmngng3yPxxTVmki6ScJRvsAzvLktZSgHavQ6vee5zyrik6kuKiksSqkeffmEUzmHcVVjoh92LiXuMLZjmbN",
  "key41": "3QRUBrYGDPUcPnNEyBuDm8rJn9giMsjVsiKW3L6ASzVFtqwwi9PmTFRyZCco7pKBGv4wV2XXjBfEWaAfBYQut7fj"
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
