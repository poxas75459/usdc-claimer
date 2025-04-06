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
    "QR9jo91g9NRpZDDUJq4Y71jRQ7PZtVhhmdzo7sdjbiYGpe4SDSHAb2ogBze1JsK1dCJv439VtEJX2QwBCpS8ZB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aWeNCEhwRxCVz3Ka2ronKMsJQeLyqJigbU9s3Qsj7BGXdiyKLEm86trisN7rfGufw3fL3oMnveDSVJkAB6SLQEN",
  "key1": "BMc1tqvcHmjpeYtHmPxcmwCjxk5pNppoHyyMPrKiopkiFps9K7YXKm3qSKwWqfmKYR7Y4DLnY3Pwur4FsHELa3C",
  "key2": "5UZzwbzPG3aSjbdNoPpjCYBkC1m6RtqmbmhuohcQ5TXLJJDS58sKGz84G3sg4ZyqeuXbAq8n3KMxR96k44UzhYv",
  "key3": "2N8jmrByHWWu75CJcFkuKtZvSvETStEkpNnGYiAkGFNP3UJ7XFNViBZxn6bMURMuqr616K3kUBDTMC12XSquDa1s",
  "key4": "2SAMvCBZKF3R9bgrn2LXMxA6ZzKY3aisnnRwqjoFzMBB49zb31YrL4PoLhfYaW2y5aCaYp8ba36UxRDHjtWPhee5",
  "key5": "4RGbn6LyprfW8tUPF5mgEy1cGPTJsZpz6TGFUdwyNeyjcrUSuG6B7U1qqf8hd4VcRxCx3X67M2CLLE4DQCEpKaA9",
  "key6": "2YUAKUzkxrF16EFpa3hFuoxWeipbYRuZ724ExXdN9Y6eBcMP4N6C7SXzL7KpPjrZJjXJ68xsVBtWTe6aJpSnuBuR",
  "key7": "3xcTPNWMwxcYfFRbgc93fFLe1aScksCFZPcRnUzTU87Z5UEc4EZRDmsCHBEAsFdoLuBWGvP2xovARZxMmbb9MmXh",
  "key8": "4KBstx9dCyCQ3ggBgXbo8bhT7aVWamgyo3KPk7XRF8kYuxXY2pVMDv5PeADttb797XW8mKfcYt7RQpsDHtqdwkEs",
  "key9": "orP6pyb4vGoFZkjR8xjwpQ4h1UoZZ6tD43rmK3GmTJVKHv9ijZYw6g1itwA26ArWsQUuhPf8NXCJsfK3qBrk9SQ",
  "key10": "38ntjfKmNPy9orwoXDn1KbnCooY1BMhjsE9VHGEv4FQqYeDdHtPZCuZBTqMkNCd2y1EXYEX8mNX8vtGrtS48xDbV",
  "key11": "UBoDCf9AY3GxYRMQUepVYf9FpJR7yEz7ZExrbE7aZyYywG98bh8b4NCfGeBq7S7VHE3uL4PP2UvGNiTbJgvnCDh",
  "key12": "3QXhsEpyi6cchGaWmkQR4xuJ927D2AVWo43WP5UjZpR97Q8Z4kyJPayijrppn3h8MitTG8y3QsfmwQrEMRSFmg7n",
  "key13": "3BJ9dbswjMmQk8TRn3StncQXMduo1bHh2a6GFLXYjxfG19PWjtZcT9cg7EMh6w5PrzXaayBiEDQAWkPUkr3gu66f",
  "key14": "2Xa34xqA97nYubqkYutgdA3j4uBySVpsM4VC8bFCSpE5G5EGjQxStDB3MjtNYEyLeNPb2yXFwWkN96NxKu9XYYKK",
  "key15": "4Gdf3wHWyVSTnb7QTvcfX82tFRzczVCPB8HXBzcUkLYBjUyNcMPozDsPqeBx4V9L21tHSNvbjeLrTfxBb6C346nc",
  "key16": "5L2Y4LBDByasmdkKsUf2eCmSWTcS1q5SvtA6NU4vQiBFpRRvjv7m2dEJxGLi7oj4y2Scpc9VUWNdEuNEEDRTUcz4",
  "key17": "P9tyuvP6hYHQur4tARNGB2KPu9xAAyDsS6otzDK9hcEpq7Lojoone61hG7DJYZhoMjbNfN8Yg724yJmAhQeLcME",
  "key18": "5jrGHQbrsTbUqSHV8h9xU8SLwujcAEp3CSPiR3o8gYqQ3cTL5o3HLToVukXbYxZyRR2vwzZaXXunU2ptheYJg4am",
  "key19": "267peq35gUCLZfHMyThcfBkFmDdobwz6poun97QVdhnyTmKPzD2C6GRkF2cAfDXox9n2F8GE4yHm6vuJ8891bTqk",
  "key20": "4vULY26aSc5MqJ4w4G2V2DmpQKuKsoYMRnPTxekHAKCt1GDEuAwJM9qpTmVgRtqrvyFkXE8N1LZChDenMVmWnLJ9",
  "key21": "bJcgniPxUrtrj3TncpnEuZrj8TBW1NjqXN27BURHdpGYveXNtzu54BFzKv3nRJWP5rD1EqYHiLPij74RL4Lmisa",
  "key22": "5ZUHCtc8iMiBzepTDsU1dtsBvb69VAgDzndLnzx7ptqJbkvN4RbbTFMX9ZyABVzDi2c6wHBYFkpiW2Y5tvjdRhEm",
  "key23": "3Jo65CgwEyWnngnG1ShHXGRn9uVtpLKPSkAV13ZGC1zQHX94VBLB8EsyCDM4oH8xnjA5ayj8QLHQtK3rv7EuxiD6",
  "key24": "mNkNzSkjtkBtnpfMh15M8AgnG1Ugha8n9LaygqKMKVKh49hREHPeyvsPKitjZid6mQG2n8U7cwwSHyXnhKZXuTE",
  "key25": "63joXR4pdi9gVdEZTxpWfZvJZghDcafikRBDAF1aigW5oqHfz8iy2haDX2hSN1RedJYLAzHWuKJMGR5RN6KkEqcA",
  "key26": "4wqyGqBZDs7ff9S56B2hczvT5CQwunmRSz8JeEEP5Zc2jyibdnXVpfVXU39DyQUFbxQyhcao7KMfAbMJNHg6SpZH",
  "key27": "5swpbP5ZjrUNow65d2AbDPbUCMGY96uabEYgFnVPhYWUJP62bY1BUWxbbRcVsUzWfsg9aXpixmbqeviACha7S8fE",
  "key28": "3J4NNQH1j1XAY72ES6Fx9tF62RVuiTTpRXzp6GmP3URH6mesYWcRLFXKHx8DywYKknNBc9mdjGXu8JiTUpftWPvJ",
  "key29": "45WtvCwgLLqcWtEERG6QvARWgpJRGa8U3UXbPHHSiQYfAQpP5eWR3xJvSWMoCj9e3mGePtSHDBKJNfRSPnKSfoLk",
  "key30": "6jcGdb5pEhhrpTo4Yx4fk3pVesuynJvLeG8435aW3g27Pj6makyL851jc1LZUHqwVAZ89jdJrAgYapfzWfRHrUN",
  "key31": "3rnaAyajQj5gsSDPnwVxg8Bip23EBu1g8hPKJHyoLTtUs2zh4Ukz7uJdTC5fcs81KHG6peNmax3qZEeKDATXX9GX",
  "key32": "3E1f425EE3rrdXZDLf1NmssWXD1ghnt2ZJABgDXqsd7D1yNscBQDSH6pRUA2ReTpntZ1dSNEnxGuhBn2XT1vdycz",
  "key33": "itWGYUM6JiyRdB7ESfLd4htBW3CqYucat3v4aDCzusZCyQV6sPHSY4xSHHLdFzKDTLyZCozGE75Z1rd9juKjTEv",
  "key34": "1c9PgcndNcG2i1GAa4zmWvTgaUxtmqGnJuic9SgGUdm8w7jz3JYjoMw1L7UZxGWaTzkc7HKAL1bjwfa3EQt67qj",
  "key35": "4TobUpvDavU2r76t9yERoukabhCCTBLG4fK9xgNSRoGx5dCcHiLEL79KYmnBxc14AB423uksbTFNYPvRQ2JZ8JBV",
  "key36": "4dTT2M3SFZgFrZP3XaUZPt31KZKGRTvrQSJd6fRKYnrKzUKg8J361YPj4CtTBDXdzySMNrcvVgfYqc6gWeCBg9bt",
  "key37": "3wF48CVotGerm5u6REk8V1JrKQL1k4VFeSQD6mfVnLBY8MqnqL6fxQuoz8VYgDgtyHBnkBKY5JMTxE6oJ2T3js2X",
  "key38": "5hHt9hL6JsKHF2gxmnK7qFpKPExABvNr5UCrLjgjRC7P1HmdbWYWZRTkHXa9q3MHTiVTqJaJrKwcTASVvv6RSM59",
  "key39": "3ra8jWcqwjyPVkP5TLZxfUzWXAFZCkTVvyQPdaFB72cvZ66bSkWNMQu6LwhJFvL1W2XMiSDRa2WdKKourU3hyqQj"
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
