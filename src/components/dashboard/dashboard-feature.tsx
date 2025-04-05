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
    "2AYdzKaYU7Peot6WnEoZuzrJqosPgm2Nhh6szPZEhnLwNoZbpoQM2XASNWJ4fZg1VVeSsAcNAuzjG6w86dLt1r9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qBCdKdNoPMdqKDqoLCwM6VUApH5Jk4TA4znh7CnJfRr78F8XWH8rDYPTrmd4nxifYfRUajfqaj1irANuKYaK8RK",
  "key1": "tcHAL3dHnVKBNquLdHzk9DPXD96MfLGYVPwcZb34o9iPGyyDE5rRGxHBMnkME4hiazBMf4xQTLbQ3ABNcCrzRAf",
  "key2": "479qqgCD2miBTpFP2daPmH3mfDtLKXmxvQX1CaLMabmxL18gfFYhzzhUs179iWFdn1XYS82zZjYA6eBNvrmLxaUj",
  "key3": "57D5DJen3w6ftEwkZyMysq6rtbGihQwPNs111tobwjxMkPQuYhMtxJzN1iqzvUo74ndUtyw8Pi12cjj1aQHb21eE",
  "key4": "3tfWKF6kmaVj4VvUb8oEnhvArSdAse61qD78GMpouFyP46CGDGZab9WB5NDvvAZGE1cw8Qtcyj79aDve87s7hVNK",
  "key5": "39vm88GCHYMry4Pmt6iPfcVgexSww2ofRRSy1X1DK3zFiUAF3B3iWCLRTP97zEH2pK2u3ca3fS6GWTpaXBdugcq7",
  "key6": "2XzKMAfRmcEH3HCa7LdYgwz8ovLsmwSd6og7h7rd8itMftBs5fP724sxKoA6Aehru6Vcc491WAkRxmWKNzirLBoi",
  "key7": "4REveQeu9bofyiUiQsRuGEX76gTsnc1wZ9udxf9KxvjLwd5kudGDrpc4q1JcvkAktTw81NCVw7kYrGkBHmfuuoRB",
  "key8": "i5ThM8kDrhiAZcQjHJPvXjPcZaGwnFi2U588QbnKnTUXhGmTYgHaYX84bv5dCKbsptERgnqAbCWwgdx2gih9p49",
  "key9": "rnxySvNaexBPGbQ3v4CMoxCL7JTqc6R3pNWUZpmRPtJ2KXu7Ht6d1eRBia6bHQH1Y4s1v3DwWWSMbWAPiXUoeAG",
  "key10": "4aA7o2H9BCwNjNdEiCKM6Y3tand5u9ecmFWfETmU8p4qbmTjniLe4dUhneUWrpzmagucrC863RH4fCSwJKojPmnb",
  "key11": "29FfW83Ji9SRLiJVjK7158jFEDPPW5Tq3gEmDUtUsLxkLg4HBzpfyP5WSTAGhNdRZT4cnRhcC1jRRaAbkLudqy8w",
  "key12": "3zYk7saAxWLMT3SSArm1j5tFeQinapUZnzeXFzYApAq6QxXcVxQM5XsS1SbwYz9Knns1QnNTuXECoh3RXtTzqiwW",
  "key13": "3WhA61XNgEuS5hnNNPxU5bNMfXiRYQ8NmfB2TYTGptzPq8EjYzrZtLiVJJg4CjzidRAhWSkoepXmyMbp9EU43YCq",
  "key14": "2JtN9KjnJAEJTZof5PukXBUKiREDpw24hvsdT6x8q6tv11QCBcX4MvyW8s8uiAmmtT9QC7KWaQQMfUsCs4VjFbdZ",
  "key15": "2ZnF7bafMZ6BJ9oC7BvrEi4b3cGrVs8gthP9GJg5ZKCrmscyzvtibR7dXnUoMeS2nCGaNGxoa4JvFFMrNwa3gj8m",
  "key16": "5ZS7AEs6zRbZ9Q875R5BLmvPboomfpRYUSZK1Apv1vRjGSCk335X7faxftMbL7Gz3WUCX8SSgsdmUWxF7fudKjuu",
  "key17": "2GcoiGa6dAVqAQXPPJ9cmTS716jcWnSbegC9uoTBwrA2CxeR6osF3D9WdLTv8c16GQiHP6DgpGGBZgzMjcPZdens",
  "key18": "3awXj1Gw2SJG1EnKiFryjXoHHvLM7sdDadEvmobrBtK1gaQE1ChmjWgry8jV6zS7sFcL6pHxmbvJyCcFmJDtwfvf",
  "key19": "DJm7eyCxzPfpB9V6X4CuCgE8XYsSTpUVyVGvxXTRezh7tFuPSDiJpMcf6PaPiszhizyY9kEARHiYLKtBEG9Dczz",
  "key20": "2gCGTc2TdcghTtpW8GqVBjE5biQ1vTvqY41aSY4Fw4tr4E21E5sCQGmskdWLZLJL4FQ2moM673y81k7PV3YRVXDd",
  "key21": "2cZoFnVmjKvhWfD2XWntUzVCsqqV3pAaoGVnpq5AonWbe1PR4mYr11v36tozWDBYfVzwFsiTP8rwpyp3izLC4kEu",
  "key22": "2egkUFuStNHUjcT9CJ2xuhwPDyW3woCzRevnbJyd7qLzjBpgQVcnJXczeNYbNhBfsxuh2HKuB3f4gyLgjevUUYtz",
  "key23": "LEAtUAUTKSVY4LeEceVTDMYnRNv7cWXk6z47eUhCrzU6NRXfLwiv2EiStxjW7ceyVXtxq4PnimPuCAB8v5uDVGH",
  "key24": "2gTv7peWjvkz6BdM35eYKs4FTrJEeTXyii5pkSQ7jz85AZafozEss7NhtthboaksLpy4yTMptzMjz35RnRRXZQjp",
  "key25": "2v32s7hdDSUFw61e4mtoxJYLspB3mBUvVym3GLL1ZwtPuifUpiKFTAfu7xNYLRP3rBZU1k8cXzk8Rzn9c1bjc97q",
  "key26": "52yoQa21VXwdG5fHVZG1u3KH2pXebc7TV7bCLK8SB71FP6f9SDBWciC4UeexpovyhNNtSxLM1ZcpqoiYCcS5pnLS",
  "key27": "3QY6fAuejVGh9TsUgBffVNVWaXZ8hi1Vo2XjHt8pKt1hTmArTxvAhq3pPZHiovi5kPgDBCkzmbNYVv9ssvpopScc",
  "key28": "5uLL3YrSk12muynPtLzpStW7n1bzhrieExB2XQVG2kQmpgyhZhmV2MbrQTZDUHSzaSzYXSwH5R45GwqaJccmAB7K",
  "key29": "TVuN9SRywXRnjAEdZQkd6FTLCmCjQtUxWPebyLruhTM3ynqGJYu2egdLJ7NGzx4MgZSFX15KyXCXgnw8eiGmh6a",
  "key30": "wcyHmYeoEeuQUbL1VojyNDwTf6JTAkrgFVqaoPBWZ5sj4S9YrXze3GBhfswDenMiBNHJrznuHxaBS7wKMGVYDxb",
  "key31": "5Bk599SYzFT5cd4Gxqh2d5ayHBUwYeL9f7FpdVPKYUVgJpHzyVjSLqBrgNvbmcSzTDncdit24omfFVzPfU4girpV",
  "key32": "8z49oGpvxhxGdMqEzdQbd5DSSJdAVLARUNjxge2F4ZCZ31ZrD9nQxu9YcNSUstLAvU4zRM3D2ZPLKbm29mmYhnh",
  "key33": "jCXg6xN4b36GwKd6eG6iEWebWdqY2CScLNU1bv55LB8TwdUhG88zRT5ZJXyR4Ye3GafRcegycZ8hPFAQn6GWarj",
  "key34": "3GZWjRxQQ4vZ213FE6Yyjpc9k8v3dp9Nw2CF3k9gX8B8Ha5UB7qvdf6PeEtNtmahdnrXamY6XsFic2VtVfpg9L2W",
  "key35": "3Jei49rS5TtAatxLSFE9YiP3KEUBhJJd3tkLZtGZY7aj7XL1ZWsuduDHvwwVqeaaXDaSNvLs4oiKVbm7zfCnPgoi",
  "key36": "43Xm6LybJzdxvX3hbVXFE958eX16QMe8uqmkz7Q2NxkP61UvmJg4KBCw1GTYVM68Nm3r264ab8PNezhoLFxZ4f9V",
  "key37": "2KRVFbRKfZ6ZET3gufBQQp78W9tsH8dww2UVxHLUQnPPqrFwEE8Netc8i5o2pq5vrFU9ro5z4Myu8XfjaCCWHibE",
  "key38": "3rjRiQ23EpWhEypkkeknyX9CLcxPFLLvfJmYctTvn3DtiY6i6D9SJCte6TLtX1NpxJ8yRPTz8Da678nue1tMVmyH",
  "key39": "33ooA1Q8myQSErWQx3VNhzVFg7sVXJFZ1RZv5K5x6NqMKyt3sUMNP1S6j3A2UGPm4UwzbuqLopuB7Da9QTEkSZqm",
  "key40": "54UqM7nT7JpVsfme2vxN8rnG5uiAdbAcHCreF8vJpcwA1wKgLZ92ikFif9kzsqh87grFoKYRLERCA5gkeVoPpsgK",
  "key41": "2iQBaTawfN1suFDrmEzwbMcAzJW3dUfgAueDzGNKfjCqbfdL7N3WutS3NxUSByaPQNBkNzq7APquuzchpw6z3DWn",
  "key42": "2KWKLWQJgA2HVpnN4gCqAu5XcAikpK2NqxqRGG9Ad7iXm6LM4bB9YsjYRWftKyPYEkeXj23cWuWLs2uqGeJN6FEp",
  "key43": "4kGEQyWN7UVRWqxqvtQ7prpEnxD8HDYtvJeJcwk1qsB1reqVqkSj3eVXUK9WcprqrcuXp7HTSyrecsxDJ1qTq6R3"
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
