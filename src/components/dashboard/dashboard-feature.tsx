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
    "4cFBXnW2bJm9bsEmicA1LVXFarf77Yop3a3q1mYnVe6AMB3pn7KnbZ7oroqba1W5KuvxUSsedVeHTv4mh3KjwAwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nNZo5NTJxUmqYBs4VGGPpb6nJj2kX7kmyXnaoDhAucKcy4Dfv9MnMM3TSze5pi5cfiv6Fw1Zk5avrj8YjVw8C1E",
  "key1": "23RWEPoWnxodGL3GNwoxGqzavw7DSifYr15t11uR4Pm9JoXE9uKRdEc7KRDKaUQihyfKYY4hTbVma4ZjDWTVzMh6",
  "key2": "5pF7MWrkHBvS6eFydAfMuysLC7wBvn5hnAwFvZs1RM2J4eRFgUckdA6Ye483ezyq5Jz99ccW1zvuGfcs77CVub6w",
  "key3": "yfrCqRfBfxSwdgY5LA69jB38FQB7AWy7Yx7wPSa9Wn4aAZeyfGsrK3ePKgWfWZHGb84AuD2nRKyUAJNqwtCDueb",
  "key4": "zYL5hjg2RgThzjabjFELxtVwap1oqx2R42oavh6DxwuKGXeGUffemzreaGGgmMfJHGVeGE3r4a76kM4dp9W9oNG",
  "key5": "37wEXEiBzdEqiZcmtughC53EctYB8oFJRT1F7JSc4EWwoyjwSLRzzFnuna7mTmXzNkQ5w4gAYdjCea3JFniPmt4H",
  "key6": "2PxGMQRf7Yy89dSdRfMkkadQGKwyPhFuxePY3hrJkwpPoDAKZtEzWEAd6LKzmdTeQmsuhC6Fz6L6fKG8Ry3aNaKx",
  "key7": "3tNRrqPDiVDy3e5veXViLH85z8uRT64JpkhY88pVDpzGAVBpoVqTMyvBiHhf986VoGYkoRd77bEzEsPxoCaiXTUH",
  "key8": "4tpf1uoksGDvoYzPUzKc6SvWBEtgocp1J1LF4DfVKzKDiiAWE2ePrjwRLXuFdnhra9P9aCUGnwDLer5MNkwQDnqi",
  "key9": "3YQz4MfnCKtBiB6EbABWcqVKhDRpfDaKQqsHbetKW4kV5wZF7uBU8aBRyx79uS7KAKzE1Fhd2ykuK4DQ7gxjLGtn",
  "key10": "2nubJnNsn6MabMnt1aUySJXwv2ZYV2pmUdSVD28YJR9eB7ojc3oTCQaYMgKtET88aLARccxJydi7jTYrs5GBobi9",
  "key11": "5uN78frVm3NGiLtjc3AFAGJpUTbkd7tZythUpgjvbt8fUSjTGLFNc3mGVWvnsBiX53vfgi4bsAsEDjQNawL8nid4",
  "key12": "5BXB7VRGkj8yosUbS3CJQqSaStP1136voiws8SXev68wscj8Ug1Fy82h77v3otJ12XqxYJkaNjFELkcpooSefoZq",
  "key13": "5khNb2Jqq3N1Vb9xHr6FPpY9tL9vghr2zCdAnwpqdcdws4SFGNS86dmGHbZqGh7h5RzsjxAyDYSJagsL6z8Xech1",
  "key14": "2i9qfsuzvPvxjwNkPmBtspnhzr6ntuvZnX5AVzg6PU8c5jfK2BcEPLAXeNYDocqKeoJh6i36ntberLq2WjQiwMP",
  "key15": "3kfjx8wYor69V34TAM557wgzgZC76guqHsnVFKGto4zT6D71ARpiQBuXc1Qei7gXPCdMXvuJjQV7TwuaaHy7Syxn",
  "key16": "32ewye7hvxHqBbzBPv5BBSUBtSgW29jHqWiYFCmGmvFeuyqMvs7AG7AcFKYjhzZFhtKccApdmvWBtru7WUTsr7dF",
  "key17": "8xJT8Brje9Z7rMbHMkEK31KGjguYWnQLNyFG6toEwMW7oNmPJncnGZV7MocNmRwBhwhHYCQXfx4MYd7PvVEzPEX",
  "key18": "4mtQXrG8ScaDk2QnvSExpgCUUhXiApJoFF6kcKd1hqnnWgNJoGsbf5WF41dqbWf4s3DJzWCgjBbrKbwKpJvjCMud",
  "key19": "3XkPDshxy9Dh1UDYUsXrBh3hBvEX5uzn3S4U9k8xTosVQ2LXKyoR4uvU6furxvvNcwML7wGvAoc6QEUmHyCyfqjm",
  "key20": "22QxSQaHQ6T2yhfAnPubENaWKWP6bKpNtHSb8uG7p2kg1R3Cz4gN8EkCzyQU4xfJCpVYYE6eEwMgHBaDjVv4fB83",
  "key21": "5DYx3d2KPAbXUKmbs2pVtjqyrUYCt5J9SnTbJHLm2NQdj4Y6ML4yQfVUdtmuXmVZpiQJJ6EbmAYQ5VQm99z7GLbj",
  "key22": "2DronUd86WF1DkZzC8n6744dpR6MYHihxzbA3kxkefbCE1ZeF1ZabYKjXs6uCvsWUGAk9yUw8UDLgmZ7gecRaPk5",
  "key23": "3Dj4gGohT5KoMJVaWBteGo8WN5DGfjq5zXdZnYhQproahVmEs8UCLp77EkuTE2bRPr8UPNJaUPsGjzGPbDPXQgpo",
  "key24": "2hfMEDGdNVTeFDMAmm2HQhBW1wLRFPEhPcJsnkroPenijeAnMeeNV1Lh4CEuTcU7eCg3udMxATtptnyYzxoADaRu",
  "key25": "5mCETYao3cBjfHDi1sRC9PJdPqBdFfbuQxJrmMbCy7TTdKJdHpVJHu64n8MA1j3ryW3qhgapkU5JzGuswtMPMcYq",
  "key26": "4UHYqtSDQYczRi5XdVCNQarU9Q76ABPzELgxrD7ucQtixF5q4LPuUDTHRr8ppcWoGmXVSvQpg3pfzwwpTogq6XX9",
  "key27": "2mNMC5G59scwWBBYaYb2ebkq6j1csbr5xXRExtLxEvLVUKYmKmNxGW8zszKAxySZVVuMoJgPS5oxGGUtHgD9n4E9",
  "key28": "2YNhbMdw2ZDbWe9yT7mdJVso2SpLbU5DnmviuqCsLJfH8pBB2HfapaUaEzDT4bmpAUyh7Xocxs4hWwpbRYinVncP",
  "key29": "5LmVfp2gRxCYZFXeymNNwMAeoafEk3HhPisiE7nK6B4vGT7MGiVc9j5YHgN9xH88JYkGGBt5srhspeFhMfc9RRNB",
  "key30": "bXa8ngQvcpH12t4ougr2o3cPEioRqDDaGB9N5M5PB2VqRJpoSrUaQDpbfr4jwyBLYb6m5feJGmFdc8Wm2cjC7XU",
  "key31": "4rPN7fMqFKCKJSHga6vxjmP4n1EHi4Wwa5MRdtzd3QxfS51bjjtezpe1op8uZtbvw5DcYoE7cQxNbLgtzMTMmxc7",
  "key32": "4R8RUAWzATFN6dV1pLcih1yMqbgUoERBDkwUE68xzvEYQuVHxUE5gvN2ew5KfvQXUWNtwW2jHUhazukuVyoa9NNh",
  "key33": "4moruPfzrvYTm2XSd5HpbZVVxwtLpDiPd9uDDcQCtrKHnmcn6UoeEPJ7r9jN3qSUJj61LEW443CCUFy4tWApTEwV",
  "key34": "5mXr5Hqm8ew1kLLCvYqYjMn5MXxKZ5VuVwapbnLJHjU1ELJUCidjkSm9kkKcWjuWQ4YhLoJaTKpqLwX16DdTkzoV",
  "key35": "3b6ZMx1AdzfYgimHZajKr4uhqKuesXpMjod2Av9k46g6YHuiGvgXFPaK1KBeTPJRj6yDjb81yYQV3HKLg59RidRL",
  "key36": "33yJ6kqZFi9bGXSAJP7EL2Wt1rBf8mtyWFpDzwBk8KzubVq1YwkDjtPtGiyLnTbmBs1fkDRK23xQH9xnh4x7LbXQ",
  "key37": "544s8bCWrDr2WCbPhN5FpJ2wao38RsHmejkWo2uYEj7MWrA1iS5V2wWCvb2xTnQaXDmMfnvCGJu8QjCqYMr28SEk"
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
