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
    "3BSbW6HU48pGKpYSvi6EcfL2HEkfyxhph5SHc98F4VGW3By4dDJkKSKWnXdLM869QF7WdUG9FsUwLeGzkX26uHA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BpaxyvnjQ4kH876FGT7xbJWgYztJgFKRPSUwCF2D7eNPVy3BTGcxn3pYsFJWsMq28s9YJTMtAf32tL4g5ryBw1u",
  "key1": "7RphimTfTC33oA7b7WAEvidYvJv5nmciFXbhQtPm2YVLF58h38KERqYZsobnDfNDSJbNs8iCA7E8hpFmayUbkBo",
  "key2": "3uuUHPLKzSvNGfrLGRVSAeTJUGZfVUq7DG5qhtAGP7gALLrdpZMzVzSJmHYxRoSwYpaGN7sdYUKwhmpXdfV6EdEd",
  "key3": "mGooYgUDPbgm9VjrSTSnKvSxbafiJ4pG7APoCE2iggLaek3GFNvi1YpUbjUFtDapjWu4cYNh3cWWwivYEPQmbjf",
  "key4": "3Cr8HybAweaSHzVTFY46FVAvVj6knSqKvgzDHtb3hfPKwyuN68ZoSG3QtYFt3ADmhTbpKZt3zDHbQcXcWNJwvoBR",
  "key5": "3z1KbG84fahk5xSezyArBSR6Sgv3gR29uXAw83DKHbW4MCJmfpTxcYdseDdGKNhufdEm8woFo3QWeLA4NegJbLKz",
  "key6": "2gPRMQQ5Zwy8hmpfLMmJckaLxpGTRAEqLHJtgVcp2aFQ6MFRpXoSLx2H3FyBvKc2JE8Be57vWr1ggvbBbqYX2iDa",
  "key7": "4asxYTpk9vnR3Pum7ZSt84jtVTMHRtqBb3EPbvgk7GLGKbdfyvgRz7DBpwtE7KZWTE4WTkTBNreo4GZ7sJaF1Dbp",
  "key8": "3V57bnzQKP1n3NFi5tZNZcemsYFEbqxZU7J4KHxXeX4mB4oQ7rYvsWCRKkVt3ZyrjZJ59UpCgsyaWeTUKCp3jwL2",
  "key9": "56D3eCdY5dS68aWAqgGSkBfjsec4oN5Dxgkmwcx67m65LvpCuVXtJqLWZq8p874kJ7J3ZYuLuqeFancBscSP6oiq",
  "key10": "4pqsuGyWoEQUw53LManaWPWyLaWebbHXCoVoLd6D9RwahU17GiFqFzM3QGnnWyNvDqnXi1x6kwEfpEaFJtuNvMmF",
  "key11": "5pZmtxvd9XMCuEeKPVtCc91xm43uWKenXwxH1Pm3Gfs2A8yeRLE4gS9U7sUMGVvb6UueVMuNMrdsD2mYbJabjjff",
  "key12": "4Xd6WLuyg6mXQfEqHKeH9wMApnBHLAWPrFiSPYHGJGNYDsrPDoKL8p4UhHpYnSiHVdV43BDMJ9Ew54aE4VGqd45a",
  "key13": "4SxASBJM3ELC7QuG8orpKNUvVzZj2zRhzBcRrX3BnxCZwyMdCqCbLBgdEc49nDSgrTQwvJKwz7sy9NXdu2h3mbhK",
  "key14": "2rSsn4kKkroMLZ1QRMveZEfbC8qkpSMUpKCmyN1ghZFvs9hZikjbmxHJwjJSSHFGJyJxFw7wXB7HaT4BkVkviZPj",
  "key15": "4NW61tfJV2dAuFbvzEEM7gyVdfJfFG6RHumQ9SJ2ZLyZSSBRqKPVCdFe2i5TQJbb27dAetaaudsvymhLEBH1noad",
  "key16": "NqUFSyFH6qHmGriLNSq9xE679RsKasfmDg4yFXJFAFqEQDrkEjjVbsvhtKEHTiwMPMhSw8i9yLLXrWqrrj3v2ay",
  "key17": "5iGisUykHqVvXSNLhHFd4pwetGsb6CjWh7m3SdcdKLhrWQnXRk2Py23MzRHNvAZv9HgAX2ZpMQExKRToaw1PXrrZ",
  "key18": "xtjxRV4Fo46Epz4VAJj3SbWYLrKcM7baVqMgooeWp8bWg9p8UYUXd3PZcYfJBMJF7jN7ukwBMRJE7KsU1VUW6vn",
  "key19": "4w3vtGDu6SqNKeeaTacXNqRa2rvrrzMc6GQV2jNgjq4H5Ws8aLYnPmESK95Zs7zsPgHHNc7f8p2dX3RwUTUZtPJc",
  "key20": "4LNkKzxAMHb3FNSjm2Ldq7nghN2Qbnk3hJLQgYEu6ejjU3oDD63f7RTfUXpPFziphSTuCY9anSk5ZEbm6VgVbpEp",
  "key21": "5BRJsreTeZTqLCiz2Tr8TEzUcdrHp5c9aU6mdMiziGWsYZ5MMXQR2Zuw14r1tEqcnMtnQPseu35XmeJAGS2gKUVf",
  "key22": "465cUR1RQnub7su4CWznVJxS1rWpBoaa7JhwXt1ZKnMNcbXbmQawQvJCi4ezMHoS9kGNPUWcmkxt9LXvAsXGsQSm",
  "key23": "Y3pDSjkStn7LecUF9xwEL7V9Qbpd7iaJNRXqP2tqDZdkVkoP1odBC6ZedDNMaj439pTwfSfbXdMKJ6QLCTnRru6",
  "key24": "41zSP8KGYewVioLrQT71QesC2krM2YfeZw6QD9j2zed2Mijzex3SKUWWWW7jti6g8F3gWV3YYCemYcTZDNTb26pg",
  "key25": "6TfLb43XFRsJ4LQHLmYrSpmgp5iH3AXYGrtnjFxaND9oxpgNukAxqs1Z8xH7gpzf3hUqG3eyCowi1zQGbTyNLD9",
  "key26": "2bDaS9AghwRs1FLdYFjRyFR7MoSv5XFexXD3g2UpXecfpxySuHXdbd4hHiDuo1zcEpiHkguR7XburMHmsJwEGxRD",
  "key27": "Gscs2WRMhE8rGJsRNDqpQeE5AmmBHdWfKTpGjxVVkBp6Sg2ojqLgdty4sXXMgHZW19eNH8v37BcrtSRoq89tmuj",
  "key28": "3rdwMNB8rGbacEExioeRLnRripXz597aHeVdQu5qDzjoE9xrJyuKNy12gAJVkpTrCD9kanPFAVqDwpzYVVpxbNyx",
  "key29": "2gwiA2qpbJdddaf4E46xt37s2ozmHiQPf7Vufztehx6QPWg6Nn7cf13aeekwLHX4ivZ13VaPFZHqoS3R8HYKKdka",
  "key30": "5jys8ffJqEfF32eBT3T6wAQNnj4cdQdjpYLzRw1L6m454iGTdgcugJACBqb9nVxJmZKLCKGoiuqHnHqUvSpBUG37",
  "key31": "3GQ6o62P5xUk8Jx14xJVkH8ePpJwWTujvczBbbEhabtN91BfweF1VoDBFUkceA9T5HbHLdKpnoUxYU7tGyMqoy2F",
  "key32": "oYtECUhFC9hc6UmKsWdzjBvVStxTj8TPiE4XxLaRNwgnpk1kSGenDDjKNgRewhzM65NTw3qWpSxAuG9kREKABra",
  "key33": "4vCDscgs46J4ViRLvFGf5FiQuQTmjADjQ6asQQrPJN5WfdQtmLN8zw2zdrj78fKj1iKdx1VwZ5cR11AANbUZ1D5D",
  "key34": "2bCopwNaNvQt4rH1sDZbzfjkS7fqwYiNkRUH8xtXwUAfs5188TWGu9uzUwnjQkgvqz37STENx1uN9cpqnNv8BooR",
  "key35": "2JPKciTeyXX8VHsKmVKbRMe1qQR48BxmrzLyjtfrLyKhsohB3vWPzNK6TZD2R1bh873bw4S2243C3BUAPofNykPJ",
  "key36": "5iUGmbiNDQrR76jWcDBMbyrRvTALsjFP1L6vzTr1Cigm6pYQRJkAVk5fBDueeBi75ovE3TNnkiQc6X7ZvE1yiTUQ",
  "key37": "49Znwzky9sYh7hEGTXDRCaudQXoxNjJyUbn8PF9mstCbZ1Cyp65sFeNH12vmFjPzG6JJUHrxdDxicDQJ28cqGDby",
  "key38": "5tcBG7MkpgM5DZp336gboXEGfR3pKZpitRTa8YCfDmRZ5hnycyRqGoo8rT8pfUH46SDNJAh79n3Rfe646hwrLqo8",
  "key39": "3oZTqtgDhZdsWrAA6aCbNGRTqv65WWXjYaznpxxHz2d5vVpQg5xg9Crb3YkJAGKhGQAdRSF9WPxYvAZpmdtm2zTD",
  "key40": "3DP5aENZjPruKWEUapj5QSuoFeWBh3ESZZj7WmV9V3Y47jnyVPDCWhHqdWgeKXdQJN3XHyXUERdWCRRvAg4rCd8r",
  "key41": "2K8ukh2aBaxqsef5W9hWzViux6qbHfFeqG2kGAPrYdYFLiomQCZixdG9KCq6cSM7kcsPQ1UdwokwGGSiUd5cqfAF"
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
