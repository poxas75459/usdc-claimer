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
    "TJwovwVMRo5iTptnfBC5BEzbiaHz3ozrUN2SXLPg54yTcfWEg9fpAX37ffTt3L7cNergYZfqDUix6FCP4GCDzF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ic5Mt3t9yvWRFhUNFkh5vVQMZwa98HwHyX2bXEP9esctavo632MHbeK55wEdw7zX82nHHFj8YEP24ZrPUUwHso5",
  "key1": "5LSg3wY2FLqBqCYDfUvkkncJMxHGAKwQUX5x1ewKmMAw2rZARsZZg4c17sbURa9yMi2HahsBvs2wyCsiyt2PNfkh",
  "key2": "3Yi4b74ovmdoDVUM33MNyVRhKLZesJkbEwpAeTPcaKgDm5wt4CEEPNPDcSuFe9FpmjY6KoeT5hZxaKfLoLY7Uhr4",
  "key3": "2so7qUPwsEsQ2w9Kaw4N2giFezFG9ooj2Hzm1oJptskGwbKFA6RNgcFTboeS93r8Bb5hqr8o4mLwaXd9LDxdR7VS",
  "key4": "2LEqTVdWog2Zneuh4bnicLRjTVK5wvqWYudYfwaJnywWLqgAKxCA3ijZACjQzHjg1vPRewcqS1QMgg6nWWCGryE7",
  "key5": "JRvDjfuCRMUNovpuxLQudXEsUgj89mBkj3je1vh3Qv6sb7B2CEAtHqDM5K9H44gzEfC5MdaQGVC9E4VknKrgda7",
  "key6": "4cZ9i23cZX1SidGqqLrYsVxrsBnBL5ktkEPbam3PsfKBjPh7Q3C3JAZ3feRVUNdfWA96Cy5BshhD663s89x5xzwX",
  "key7": "x4tJUeXY5zKzDuWnwNXQ7mdgh9KVjVNKuBqEhhyNqEh8nRQQo55hXqAnTz9jVnrbPjeAUyHbm2kEVUbP982Fm1f",
  "key8": "5oPdaEPHEbMZrHhNHhoXcCSxDhgEAZH2a1w5Q1aVWb3hBwrqiaCZ7pjVhpWH76in6RAesFnkJ38sBNwGje8i8jvj",
  "key9": "2iDU2cq5MmzwZgLrP7Guybi4nDS3nK1offy6bAmhxPfgw1E76A5gn3CSdJDCcboJhcKjQ9zYn3xP6M2GL91iGWNe",
  "key10": "4jtKKPGj5NnzLyxqXnEViX9ehydTnHGNmpywHS6KsWMRyhphPR7vZJuFcx1a22JGUktdt8fJumKf7Km4V6bdZwv8",
  "key11": "2Dq7N1DnjV6qUH2Qo3Nq64Ae9waUpHafmnuTchXxPqgbHeLaVJqJZDNe7iBHJQNj8rbE6qskH4Bi1Dx2p1dre3tC",
  "key12": "5G9fUVaPnJGw3NbQEPetWUGf8WLyAeoqyGFA27NiWgpwxH585fYdTpVnDVnVUepv2WRrWmr1ZfrZuzgGz7tn1Zb2",
  "key13": "4ub46bMbwKvw3HyRjGQEXW4eMTBo3qouF8Hqcqs9zDdUXEEMnUpRwoLpZJXh58iS7RjYtqoyCKfmDLF5SmePKDQ",
  "key14": "55dCYQm3j2M8C9KgJ7oURcFcDUZp23Q7zUmbxgpEtMLatVk16dk1RftC7zQfrLUbH3oJbGis5tjqpRtqk5h5hctK",
  "key15": "JpTCiBMpz3mXujgi4fdxEsd78XqA5vJtDbcfCcuSRqxqLm5evLBqEMPzbVSP5Kbc73CQtF5yF371kDt18d2fK4P",
  "key16": "32zoDyJcj3ZCG2w4e3gzcdvXvHko8oQm65fh4opn1RHbkUeJ2A5xG32UNDFJSLvSV6qKEdTscp4EsLuFTP24EQXT",
  "key17": "235yFr6o1Dxu6rTF11HUQsRu8CHYo1Mr55t8UxHf3yQtkwzA4G7pRy1VZHrvCY9PDMcXac4C47Hohkf36UNDKuHd",
  "key18": "4EBKKsbCPjfeE1eHLXUr4zToYJ94nAQHrhb8ydbXAQM6DXnz7T5fZavfVy4NVaciKdkfB9TX9fwq6Lx2dY68W1Jg",
  "key19": "47S6QRCsG5WYdWqCdce6bYe8rrPj6Jw6REarT4R6FdD7CHp2LaPS55LYtNzFL22wCKddvraRphDWK9BC4KxRdDQz",
  "key20": "tCfcWgh81iDbEE6CSEegoGuETwhygQWpHTKzjqEvdr6idkHPtu9icLdTfRffbf7yVheRk6WxzpbLWZ1vrTpjC6Q",
  "key21": "2RYYaenhMuMrM3RCEcDwy4hXgoaast8NDgMqGQiMUUtQTvSiMKcJXvm5ycPyijCDn5MgkkoECyH6ejXSa32udpSj",
  "key22": "4AdBTe1CZG4aGewh8qDqizxhYKq3c1Z1ea5nAR9bkb42wzo9RhPLLMCUFGkDkSmRRzosEiahHjzRkSmhLVHq4irV",
  "key23": "x2k6dHAqDN7mhnjeqVyGfRLzFa33aBjDxaNBxczzQGUQrBSr43GvHjow18SNx8errVRiSxHhJN9KyaLgF8cAL6D",
  "key24": "2ck29uHsdPKNPR49AaED8tr7axe7ENwT5D28i6T2VxveSRoJ8TtZWaGFuvuKQPjYpFgXuoCsYR8HawZm4CGKcipk",
  "key25": "gXup8XAMdL4HC9bRj58NJQeTNjxPXnAc2cvDXUS9VYcKyXueLmTZRipe3ViiwzAq1gDzPKnYPcDtADoMRBELf9o",
  "key26": "5PZXb2TXbtpcVdXv6dWAFiHrG263sR7jRPSJ28JPhfijQFaiWbuBWbp3MMoGG8Jrhm13uDhGdc5cvrveNs53eUp8",
  "key27": "5rB3XtLVWRkMNQp1GNaeiY1d1636JCGF2GJiTKdpKgu4s7cJrUPpnEs7apyS7Cep3QxaPZX7PxMN8K6RYZN6bCZy",
  "key28": "5e6JrTWSH9V1NDVKaSQjK6vju6zUG4Q1L6JC46rqzeERomoX4BGUYrpVmRwSpiTEJED5YrETuU4ArjFTK8oyi9Wm",
  "key29": "574tc3pFpoNkHkaWXJ5gRvnpgDapdaajurxMWQyk9ApTidUvKQmW3sRdGojYPXh6hTSWYRE1oW7qjX2EQMLJVosj",
  "key30": "3rLifxQRntc4kHbJYojKizod638XVXa5eoMP4nw7mwYod6arJty3hHQTWxzY6JRR6Ssrh3qGQapv6VvbdeJCe3BC",
  "key31": "2dRrvCjEqzKU2uaXQPEQgLgZWe3cr8k7Xp3aj1zCaJFqkiRNcyGcg31LrGu6cbmBqYW9Aigmf7o9rM8CVBcMiz8X",
  "key32": "4GJzWfaGZ2P8rTjUnLkkfLDj8GvrnK6V6qV4ge9HzAALLe2bQGG9xUUJmzXkj24HgdisUMLbgtbAVTmLzg4ykcJz",
  "key33": "2mKfGyQffnu9ZgCiWAqPnPAhzXP9AQVcyiAQuNj8N6jQ8HLqzo7rhuLnK5x72zTnwEgQAeb6YXgFCSakkPPEQjQC",
  "key34": "4cwvE2V9XHRx7exTBQQe1TjQ1zihZvJtCTaWKCtNo6bSLSU42cS89cS42Wk66FBL5jUT7ge8ER4f2BeapqckYiak",
  "key35": "2qd6JaGe6Uxi9LAMH1q6XQrS8TGms25mkCLvdeVMbfPesmkrPRYCAoLAJsonW4iuJJevhgjxWkod5pZ47edcqdEF",
  "key36": "2EQFEcphuiHV9NRqKo4x51ZPjTFdDzJ5mFDvpJXBn332ECGBrZzpS8PWVZcsDqSt4Cd8zPcc8B6jvLxifKFKVFju",
  "key37": "MdGeSLeDDsghbrhXU7aPZ5YbqNp7Qtca9LFDE4qBBaqUhkvRYedppMywbX9w12AjdEvWhrW44LowvfApoh6G1R4",
  "key38": "3tyVqpAJSqke866aCGRnzHT4HhMbmzxxybv4CEs6BXqGLYWRW7kYJwiYUBo6FcdX4Trfvgpg5Szu5ZofptWxmbkE"
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
