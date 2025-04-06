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
    "3DhY5b7Hz69CUj5q9JaPEaBwkeb4JQ9qfLUJrVJW1eoMdWcdvNKJYxQfLdGZGiquJw27vTCQ4c9Qytm4cFUhUXZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EA1nuoDXehHvdsCDZMmiNDG11oTyQycHYXx6Ew5bmijxFkYyguNwezxPM296mV9G4Y6CjbgQcg5znKCqg6Lggj9",
  "key1": "5rYRRvEtUqGj43abqTD3FkW3qYejXNah4C5JbJN6AePMMn2GvmPu5btzpBnMfzE2DhkZKosWSd17G1QZFW6bWAi6",
  "key2": "5Su7MV4MubewRf94EFEvqaPUuSqevLwwTs1MV46PoLmEYRR7tnhySb215nq3XRMu9upNeVcMrejcJJ97C6uDTCo7",
  "key3": "1qhXd9YjzGSi1NcKDPBsxBjz74tYboRndCYexfuFTwP1TFtKErC9tUD5eiB1SBP1m3R44Q8DETTJiCiR6NPNNkq",
  "key4": "42DWmQu6L5niAu5RSJaA6HixEYjGzSn4NvDfPpr8KNdw1p1ZpQVfxsHGdLfq7XqEvNmHkkfMXhU9CbwVD4ESdrSr",
  "key5": "4NGMKX1oPjWVQzCUM5FikSTxVbNdPPRBgfbZh8RYY5sG4nbkbuQhaCJUC3GDCJzEdc2KSonBWGVt6BL2JUykGRyx",
  "key6": "CYVktnpEmWrSro4HG9n47xin7gi7ANXp6rbFcTVTBsPxZSd2zuvpRPfEwdTEWRbzeuE897xeYCVexToQqLZPvgr",
  "key7": "3L4DA7s6oKiSiFfQJYejdaM8bMgnUL9EppQVyaYV5V4Rg48VYCnzyrh3LYzKXY72a4ra6gegBc7VysjDDbfm7nL9",
  "key8": "5Z4XWdBH1Kd2VJVJTiKmcyngyyUCugV9aLYe4cFNo5eWYwrWMZJUQmJTZE8K8JP1RcRhV73V2JCenCjYPupb7NfZ",
  "key9": "2kEfSXsqF2r4FL4UyMynqmGD8K11UnVpshLCTruct1S4v1HVNfhjE9jBsLcuGL47jyjGx5L68ApHtwBYUiy1bDCH",
  "key10": "61gw1LqouvVzz7nZaPbfPWbM8kr7a2tjuP4536Uq52WWkdPQ6N4wHojPreXWHy6dAphKU6LhafFf5zZdY3R8Qtg5",
  "key11": "k8GUWtRNJETYAuPUxMFFr4yqgh85EthWiEsrYxAhxija2EvZ6NakkDMdJeLtj4JGqoWugXQLsrsimP3A3Qyi75J",
  "key12": "2RGqaGyFq8b95QN76qmhnu7TVHPxhJZDRerSdwfaMN4mHXugpbg5r56V74UVVR9M9JhLb7RKxotHjtqhJJLWpvFq",
  "key13": "3K5fCNenepBE4E5ckSYeojsqgHCf3XDniNdfym2TVoAeNSxUN33BavAmUqk21bgQLQrvRZL9zfethKVgRNzMwB6V",
  "key14": "MZuf6fQ3NQKFYNGztAeKUeGS8hoKKC1kBcVGP3GHXcboKBME9gcou25n5tWpapBa2Mg4NBDtjE43jaCeqcvCEbM",
  "key15": "BW9WQTdX3zLyB9zgSQHZUNq8XHHnWBgw9QpoGkJH9FixkdmPSY3dRMjY8t5B1g8DBBLokKokcAgUuJ4RRgM3itZ",
  "key16": "3oEEia1id1UFNHBc6xvYaEhF24iBVQe7CLrw38ipKcNytwf5oHNJ2gsi7KqQNoAquGvBV9U9ETLmVSjq3kkeqnBM",
  "key17": "5ycAjmG8q3nQRkpDhNHV8LcMSfyBKNTzPtZ4Rc6ucx6441sApSiUzk1g1ntWD2PLkPf9EdZ3KRhxySYGoiSCawiH",
  "key18": "3TvfsRV2uLPJgTeYn7zzjphyWDVpBV565oLzsxY2hQQmPW8j3PNAaWXeY1QmaFLoAXBAXomrwssaD98vEWwLd9tv",
  "key19": "NMeuDSQDkeG46rWKVG3Uz6vKJS7QDE9xjX71UMTBWpEsgwEdxMo6Uy3EnAysjycKZ5RVvdP3fgneP3CxJptdeFy",
  "key20": "5ce1AmyagTd9kHu5NuomteDAy5s3JdB2ZcGnPRUoQXtnsxoPKpNcR74p6Be5mCH3raerdsHEijziSVu2AEwM3CJH",
  "key21": "5r2qjk5YTtwnKn696i8eSc2qfngHXRFbAtxp4FrjdEPy4aeHZ62mrEB23BfNdnwDU1kdrgdhbsVSayL4RwzHabt4",
  "key22": "MW76AkWYULZgMqvkZPeso589S1Tb1v8rCRFbsfxpZSjR8NWoGY4ay21tT1xzXRPjDaN9Bws2yN8e2wgua3ZH5jH",
  "key23": "5Mr2mEVNdJ7PrLQjyC31afnULn2ZLKE9iDbBCDAUeixEe499vXT5VKKencWXrhv76QcesX498PckfqQEfvFzgVVM",
  "key24": "3egi4JgrVRusoFKwjXJcnZxWyuaSKQpuLLzC1WJHJeyNBhaA5qj5rvD4UJd2P5gamFXLtCp6tpaY7hUxpaLpF6Z9",
  "key25": "3Lbqtk9NkCn6KbLTaaLhYZH9beHBK2KfLqgCQ9Wu6ddRyVRF5GfVXtgiWyyjDYPCfnFehQt3jzsd49GJsXB2ocb4",
  "key26": "dpdmuCazYMaFZGVXJ8ZcAperFC3hTU985aTZ45EMvCcxapvNgQFe2yRuEDCuvS4hm5BY7W4Q5k4jPFywym1m1Zh",
  "key27": "5EQycG7E2M8B65ArnxbhKzXXHG6762QkeEVHEatzGghv3feXVCQRwzvoHgJmAXfJGjpeBcZD2YLbTfmH2n5Wnaim",
  "key28": "4sSEpLndjfNu6QJZcgUwfMMuVF3yGUxokq7KytB216yS6BNiVYmMGYhDsTBiADtDRKf7YfpzxdVM1gBXrNW8nHgM",
  "key29": "4X8vPncRxtiUByfX4uErqPESCZ14FJZtkLqDC7otmydhuLpgTmsA9625U3CChG9aS19PKq9ATH43fyXrhHzotXqM",
  "key30": "5T1Vm46iCPEVzAoeZhF773ifThvPnAL7SHRZffs2nMMZkNEU8w9DAajqfRcpNL5zZecxNMWSL5gcJruVneeza52Q",
  "key31": "5RfTzSVSgQL4KE4B6H5yXW4kxZmFhUBwFg4RNDU44B56XNzwZEeYHNYgcPkmv5yfe39yuLWbz3FiY1f6ogotKpY4",
  "key32": "2G69XnN4WZfYB1Ux4VVYiu2tE4kxzJpqPpPza2RCaiko2gnJAAzhaJXeJeqRGYN34ERYUYVGtdf1XToXSyaFiB8M",
  "key33": "QDLXzHEXMnQt4UUk5cyQmZF2tvUr7BtHNWx3qcu79LgTqpHBesJqQnAYSmkbHZkHtnk6LLhDwikAMb1vZSoAYSs",
  "key34": "hMFotCEv59BJhQ7CskgT2dEzbdfz43qZvRikfssnfhCLTJzr11qtqbQktbEU4ND1a4CB9bpZaDfAQx32cFMAVv7",
  "key35": "5XbHamVABZA1tfRaD2oyWmkzbrVjnvjsaQpetetA3CNvYj22yp38Joj9ouo8DcRfdkExsDFzMQTmkDWqXpx8CWkY",
  "key36": "5oAtDYnWJnEQiWAGfjk62EbvVSRHGZJzT6y6te1MXJU5ak4ru8MBxZ45XCYkV17GFZHcfQevWW2HABC2rsYnpzrS",
  "key37": "5tg8WWH5RH2KCyaJZ5akrjuA8WTwcETLvgvtfxLBsLErB9Kx6p28aU6i5wnBejWtjxFvMFQdp27DfoNp8eTEv1jH"
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
