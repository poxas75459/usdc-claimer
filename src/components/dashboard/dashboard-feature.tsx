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
    "2NL1XgYd6ovffnjLuvhskTfVioNkdhzK92xM4DZX247ZkCeLNGCXSVE9KjB87kD61q4erzpxWoQXQu2BU7Kht7n1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GuoNAxWVAAMZ4cnb4AkFmtKHQKWZygHw9XNSjyqCDGBCUPLMWCfXNioChhjd4gLGvVo9BT9Kk6WLDpPzFC2AfcZ",
  "key1": "fgUSyjBQbJx1hPXRteLEB53K4y9QidPS5riJsC2wVvtYBhB9ELGDtkYvkBB4tYuUD3YnsbLuYuyuQE7AWheYEJj",
  "key2": "eMBJfpJu7vjVadHhSzVeyAi2LnYtycPuAt9t16be3P3sfE3RoUHXuVf3AftFcy3YKUcmLjVAKXEqL4Bbmhi58nE",
  "key3": "5ss9D1b567fWw1Wj4njBN8fdpu77SmpLhymjcjY3Y6RrS97afZwdLAfLrqC5Mfk1dtT2g1b2t29q9D42biKNp8TF",
  "key4": "64dWLS1EcBPKbDfP3KrV3jHwWzjGDGgwcwMrqgKMnYw1Te34Yh5NsAQNduLUwyMxhNXRDWcWZEQXonZu4gMqLM2a",
  "key5": "3M2VgkjspdHD1MgQHEufVXMLNq6jYoq58dBWXhc5vgg8pbNx6XDFRJGX9ubKaZDym4jDRxRq7cUqburV4hhNQdFQ",
  "key6": "5F9f61jp19JB19YGdG38Fjti1SVQgsaAKV4UwZcMaTB41W87yEGHTzajYNd55yWt9Jfzdi8KRsY8yCZAuqRARqoL",
  "key7": "5As3iUc1QdFnLMofXLVTpmJiGDzvk3d2TyPvRwrKP1HRFeUB9b7CPQPe8cX1DMLMMQP7J4wzdRWwtqW6xMCW29VX",
  "key8": "4j8jduxh5snE4tTNCaBmu6kox8m8DPxUczsvyhhjBcC2YXgmL2DwnpcWR9MMiYM2UrdUTd29VvXC75UsMvQDprUR",
  "key9": "384xxNf9uX5pqD9mUc2vPShqokb7GPpvKwVgiJFUyNRGTMKPHPfHDmp8K79Qw975XkDvPXNY4SiGjL4VhwzVNQe1",
  "key10": "2bxSSDNjYvGDPGr4nqTu6ienwM6ufgkvumGbGbqdWC57n1i9L8YEqqKquufqLsbkjGNKc4mAQ3KDehKSSF1t58jx",
  "key11": "q9FtocFYmGAekAKN4bMu3gVf38myWS2pkECNswASSmyhBg8sSpWr5N2is6fmE4bfxdmGy5BnzYVk3xrQob98iB6",
  "key12": "4b5hTUxH1NBgdh8f8kipVSPh2yT9bZjZLxNToMNqp2GupWjXwZhFsCwpqfyctjuRVBN49qokdqQzBWWVKFu7Jo7F",
  "key13": "2ozq39vNBtU34xhMWcpWxh7NZLV85zYHwWr4WHDa99BzBok3A1KGYht1iaBQPkTo1XX2VKqyWCjWWxTefX3mFb1T",
  "key14": "5hH8A5pbjDZziYqKNW5yxDBgBckbssNHdjFB3uhbPZYj2KDESfSZYFHfTmMypWuq9CJEMqZ8YwJyDxEQZueug9np",
  "key15": "5QdGYcLnspErkCKP68HqdL4BRJe9C8WZu8dg5fvYH5FB3kP43Xz7rdAkcULb5vQELML3Qk5QSWCZaiJ8fNK4nQQs",
  "key16": "6176BxdPDq3GDt5mHgXtUuy6UBAKnE86ptohC1TkhG9YdbwdqLUoFw2JYZCfA38T6VXMj5V4WW1FmV7AfcmNPjQk",
  "key17": "2T8KtLXwy3XZ62hQ5S3wpYjFnreRzasG53Z5xUzBMiJVa9ehRqxfd2ZpCWgDdgWq3J2PripTvaiVNMwRgvsXV5bA",
  "key18": "3eFmCoKusXnRUrC6aLpFbTKaaVsBeFa4RB4J5zKSo3Qe3i4ayyEk4LLQ7bA6TGcXwPaHRBWtkAGMjzZFxmrYB9KQ",
  "key19": "3P5dZyp7BfuKFthKTiZEhgXzq5MZkS292uf7mhBWxiyqrWto6p8TfFSjaCaroRgiRkfi1yZkK1BNUJ4TDPJhEypQ",
  "key20": "3gcuKXpV3nFFrBTNMnndB51s2diSXnkNp65exeoarBcgtBMrx5gduPhuPhS5iRkuNg2sqebE7wyqZ5cyLoCi6XeW",
  "key21": "7y6Tb9wJsAipwA47odvTZEq3m1HKjWDsScvvs3HdoxJVxGHL7XHJKZWTp9PAFRgT6VRDc4qCCaGBUGKy4ZiSYr3",
  "key22": "3Z8hfodpqoXopZuigBCs4P7YJwsaGweuMZo4G6UWomUFZPzSrhTjcnsNpP7KwynD7ZTZn8ZjSekquSkoBxLBv9Mb",
  "key23": "2a2HhUwGvVXvFVfWVg9o2fnS6H196j64mzLtxbGsXSRJihmAQfSGn5E22RpcnrMKRov4ytPdwgXedXKzLhapmSPR",
  "key24": "1MYSZAontGfA6eHUCnRym86MifWz3pUS9YoMXzVjfxZkjRRx5A6XqmE1ngNcuzj2VyKv6ZVuwkAYjKyNMiMx1W7",
  "key25": "52ncshswKScLyy8vu7te4dqZ5Xxvu5yftJrrJ3Nv9wFGm6axsdwZFcnbyEHzjVg3rqiCSeoqbqzfXYZTrxQ6mCWy",
  "key26": "26p5f4SAKNQi43iDe7WmtQarg2cr8K2Yh6EUc7E8ooTSHnMTczjXkGjz7d4iW5Vy4BAgsC3Tt86DNkckzYWVkzyX",
  "key27": "3RRQqrzgBcqTJToL5rTJx8vHQZxemFzScXumR8idg7ahT5SNqwa6irDNoQANPJ45wQVwyMcuZvbMDH7FmbLR1UZH",
  "key28": "5PXVraHeAzdGJik9cFFuvXMzqq1b7YzvYRNJoJzi6WL5Z5r4hU4ra52ekwHmoLkQSsY5RTECFZjX8FitiuhLmCnt",
  "key29": "4qqVdXQmDzQgqKcTLrCVBAPR4dF89HmbsFpKx3V7R61QGuFmKvJcFkwpG57ntrZM76SWC12CZfr29uDdbjohLpM6",
  "key30": "3SdmdHtrzwULszPzYvEzxDDeQFPVQFFFVvF7CfZdeBXafetoYPU1SsGAqw2V2GCK1fVR9zYnPnSzsRQmfozfNrZM",
  "key31": "4KyrB6jNTt12BnHNH1jghQXdsTnfu23VFyUaxdcDeLb4Ywt7ELnh4XQQBN9TEszdEpEkaTkco5xMYn1c3xqu5Fcd",
  "key32": "3J7sCiA43LWih2dsUvffmqfxnFecKUdpgu1B36A9MSXLEssWTpWYAJ3sbCUXXn2Hxof6HhNYEVazVDkpXEt25X7U",
  "key33": "sjJQi8yc6GjnPfYeZ1A1iS2Cv9ftfbJNo5o8o45zWRLp4S13K16DMzA4VPKN8zGgfHUYBTm7iiwkMp4EY1mwTVA",
  "key34": "5fkfDYe8D8YjiDaFftbTW9hpH5FYEU4Gu8fNVnHQErHsGoe2ACkCxwo5h6ZXzoudUPKZCrtsR5E8XLoLA8gKsgiB",
  "key35": "49x52ohYNKMZnrBEdizWiidqNjYftFyq8JWxD7wFr29pj6t1uPeZ57JLpyUoTA1JbLEmM15f1RViSVQafro23vnz",
  "key36": "3mnAmWJeyLheZSqyLFPDgYxPGs4KQUgkqRv38EyFjGVZuWGaBojSiu22RKpL9BCH715NAmKDYAS91ddintkYFDmN",
  "key37": "5sX8ZySk4Gr2sUicBzUCTtPxNobMNZQ9JjV3hp9CTocGmqezohK3o6g68tTJ4G6DRPnx4KMbzQw2ecFZ68trydeZ",
  "key38": "5Cus7azK7iKu8KAfLJBh5LnJ5EorF9Ztxt6FJA3WM8pEmfwiqGyT3rDtE3tUsZPR759RNhav3PBPVK12RmuMZYmG",
  "key39": "FNAd4aiTnQXBRGRmCuAvzpqrWXZX9D8jGC9rw57WDucgBqvzDAohQ8rR5SdkAGx7WL6xZvuWbHKLST3h6TD8USq",
  "key40": "5aVd8xYx5ALghqgMWRkM8VKwpJBPticuxTz86C85xvCUUfcCdJpN9G1wDuiJuLZtRc3goeFHuUmDEKy9bL3xaiH3",
  "key41": "319sspst6CaXdoao1NLHQikEY9s5PYoPfShcZBMRz6ZjPo4cyr9R8N4BzPRBciZyTVYzj9JrAMHYpRaEQnYzFvzr",
  "key42": "5vayuYtmgE8x9mGYWPgLn4Ww3LkjSwg4W9qV8cwETxDLzXEPP4oyDLvPCnLboiAT4GBs7UYVsbmayVFeSyoT3EkP",
  "key43": "4hcM1n2TTFNe9mziAoeGYJccwjQdbVp55f4ca5a7PRV1U1kwjzsCHx9RwsZMxq7RNnKxLun5WHfELEGsB8Cw7Pdm",
  "key44": "5mHwBn8XkoK7X2swA7Tej7Fmxio1YowL4xZ4Gt7NRk3s4wZoMM5J7NGo7aN6UecoNYKCnogSyRSV75xa8d1gQZQe",
  "key45": "2417V3C4AXTx6R8QVoVvWTA8hcLM94opVSoaJFg4Ws2pD7K8xjwQKaQHtaCfUA9NPuNxzfVssK34C2mxiYX7Nm6b",
  "key46": "62UdcS2iuCAudrGadorE41few686FkuUPMuuxcdz7vNxBTeQKCiLTGxmPvGA2T6GwiAwZpsDeYVvoUfzFUJ2hkPG"
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
