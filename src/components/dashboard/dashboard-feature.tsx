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
    "4RAcWn9wsxxd7wgM5bDXVyGtPmEm4FxqddZxd51vwo6kG5HtsfmMhwoA3RRYukhA5fzJVEeQpwdsGZU6ZKdDHm1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h1TX8e4VYsC5bdSkAVJwDwTVjQWtMbchPmT2DZkhsr4LszoeWUruzydaRsHStN5dnGaSQQbxEe622x57L6TziSJ",
  "key1": "4uUFejY8Z6y3x5N4KkxCf35nGVkSzFBDT6WdbBvwjtsY3T76Pf7xJnx5e77ThFa8uvmUjVZChrqnJS8sw1UC9w7a",
  "key2": "4gzzdK9ru5ez8MGwBbbx6rCSVpsFYyaH7NN9jdAxwfyRafqRd528vWUBnvaSMJSdTChXoWVHv65835rpwcngiNht",
  "key3": "2Ns5QJZAmYoYEbwYT6Ngw3A1mtAK29ydfiyAWBUzNnSyQdPLyUppHgCD2oNcE56gtYMiVZeBsxBjD6UtdXyc3bdG",
  "key4": "YdUuVvM8XqVYV9orNsaYJfShiFx6E577DWSx4Fjxn1JNz6Xupmy7Y33WgWWmGvj1y4TtGvrdEeMghZrVEcNBq9w",
  "key5": "DVmVgNWJpPNgHoksqveyHf6vpFiX1wP9MYbYgpdj1BgfxTqTdm4D58tTrjpDYDiSAkqSDeM7Vt2wxCs8TZCjd9g",
  "key6": "3RmdP33mX6nHb2MUFLsbP9UCqxnbFet7cCpL7mQPQTZPCWqXk3iSAMA1cU9uYzW37hfv19rQaqMf9FvyNs99v73M",
  "key7": "LjFTMbKXvgsEkyA7oqYEV3VSkAQvJtAJpYSZriDYzZpGvgpFsViYKqBBDiWDgQ8x4V31WfqinKvUyoJFJvE1H3q",
  "key8": "5XbescsYnQ2MgpTBQpmRKjSXwJi7VCQEy1JDNUoD9fUaRv1a9RxmqxAKvqG1z23xqtsPnYeoZAbuniZzN97gjygU",
  "key9": "292iP4fqGGxREcXTq8Fs9n1qEEwTqn9gmvbLpP22cQNLNVmc9xMGuxprSUtaRj6tNxSekJeaC1vyvAqimKvd8YRF",
  "key10": "2ACubXxuAZt7En2BDMowU9hCzFQ59JchiYz93rniz8heD24ETUvejWG94EXKE74QFqnJrad8N2UTU7ncDKGV9VL3",
  "key11": "61gaegUSM3bwBX5xmg3EYAsLJCq2LTHsdpoWqLjPWyjtRPDj9vtRgtSGxNCca1Wb38s76agxw5kTfi2eCcfbm9mE",
  "key12": "2LiPvpHXXXMVrqxR66YoYz4zX1NG4EdjVHTP4pksGU9GyAZcT9ZRKHJBN4SM9CPkqXb9icTJ7GTdA9ipYeUtitCc",
  "key13": "4W5Pxy1VddKzLU2yWFFbC1t3eriJRMc5NeZgCZcEyemH7kjUodhrabjzGeJsUrHBZarPCUQk7RP2XfvHj9Np8cLX",
  "key14": "4wA9efgf7xKSJHrTcpQHoNGrDQEH7BcT4aJT4dpSHapTSGZA3r2wv34pohZxbcDCJeFMcAX2bt2dUYaq9EJpPyns",
  "key15": "4t7t8Ma5Lhm7oG5J7ZYQtAacQtZJbZwVicAkXbfSZrGj9Q9kLcJS2QSim5nVhvct4Q7p5KLYDJN6MCFAsR5j7rQ2",
  "key16": "3PsiBSLn38dqKrm12fq1wMeuzxHiGy8JSSGE27G3KHeK4hiHD4TX5JUfmniYTXDef1Kjvwmg3n46TVoPeQRkypzM",
  "key17": "4dm4ud1NrjmCZijxTxtx8gjzjRzRKsPCi24kJbQRdwJUxzpYkR5FkFFDZkkvFbjWibBZgwhDYuA7ioPwydqw7XXq",
  "key18": "3B4uFYxQP8qhEhtzfmXrPdXEPfzSYdT3LFZmtUGodAgaBBhna28uN6cQnpPGiNP7BHr24TvTRiXieViCVaVnReF3",
  "key19": "4ouSgHeNMujMGrWD1xfXTNmBWDrLgyMswQjuc6psvXDLwCxEyEE3E8QmtRNL9fFYvtJGy9miEbhoeXKTLYC94nbH",
  "key20": "335djK3XiefgwbVJVuazQG5MBC4t43h3vBQ7LuHVuGZEY842sSogNKDQg4TjeKsLwBk1SY8MuMyngtAs2x4dnACc",
  "key21": "2T9RqjgDjPuSgbpDu3aJZx4J3MiumkemShJZx2Tf7K3Sv7RCnTGiPFSjw9DeHk5qcfzg4mbw3Eo3AuUyfNXcXXm6",
  "key22": "A7QDVAnosBK7mh2YrhRoKZWuJC9osmrBBbKUYiCmSe4oDxg9LbC7Q1LB6xPFNQBJqUdKZ5bk2dinL9MHPZSiwgU",
  "key23": "5rRqFC3FWpX3uWyHsfRrHhCZ1o1cM9gUa6FTV8J1j95QwNoGzpGRZk3vpPywBNsPb8Qq2AJETFTU6SKakukaShy5",
  "key24": "2qT6qcC9W64iNfy3tsr35pvteaSjWTMB3mSXPUxiUMf3vXUNKAY6kGmcCG25uqNS97tyayCorACyVV646dxz5HFG",
  "key25": "2HUkMNgixqoTvR4ELyYHo2QUgf3cCQ4AGSbgEMhQyBkvypwwhoYVpFR6s6ivYiePnJnLWC8RHPHi2XDQog1jxg3B",
  "key26": "4qoz6fa3yAUx6YJzEdZvuXiq63HnxYd24TLHaHknGGHvRvvdCCjGSgeqf3r21syZLEqfvC54KgdTio9ZsKWXsTiP",
  "key27": "2mkasxG1ttWupVoSQBQcY5Tiiuf7vJ8mTQpKcTbUE1RVvCiF3MxuzPMT8NcxvRT9pbiuWPm4aakD3ZHzEGTA5Ygt",
  "key28": "2Nk44bix4Q15fCSPNC5bAxeEbxvnVCNvBTGZAQKAtE2NJKG6TToLk2GGthFcUYaaBaaC6bow3t2NnZBMjz2wAcpj",
  "key29": "BXmFDRVCGcGqXTU9NMoM98ct8EsCknmEkfA9vWsdTnxCmU5TmqszaiXUNBT5LKYhQ4dY2e14QzEGeQy23RJBTY1",
  "key30": "4wV9icY9xwhPmCKvvSE8iEza8LbHryg8HDT5faJ5F47zcKfi5qLjhiVRtPoFoTkjWtsgjZ7LdP4eAvcenF7rLc1S",
  "key31": "2mkQJeSsncGiNFYQ67QxQGZPsbPK4111QrtWfjxdXUZKGEiCaeNPwa7Hqo7af1RAMCyMe7dNnH2hUFSZ8Jv4J79d",
  "key32": "48hZaXVkF35pPveXWXgdNdiQCAkQPVm3Ze7yqhBrwZDHdwQP7nCnBc5Ck4Y4WJzSY9apWc9eqp3fMxzDJCX3TgCT",
  "key33": "5y82heT24FggE6fiwyt8jgF3uZjs47V39mVavGo9i51e6nthBqHqUzYyHqYgaMTGHqCz9vn7UPQLx6Lxqvmh5qDX"
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
