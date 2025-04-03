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
    "2o1vYV37qd8dXud8tjLiVKp6TubZavqkytmkuZ4U12k6jyeK84MznzcqAMoXxWykXUYsH7sc31v7SRzFYrV5p7pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jM6ExN2vWWyzcHdRLmD6Jv1uAEL1S1mrJLDE7Wa3UynnkLr8izxPAHbDFsLdW9mY3TGZKqXuTp4BXiEnNR4YBDT",
  "key1": "4E7e8m8hkHUvzN6xxexZGKB8k7g6je1h2Z37RNF3q4vutmZu3BQ71XmXVVmmEVxRgNjEZvv6DbphCmAF7njps251",
  "key2": "2H94pWtET9pPPD1TUti1eHDqBvdTf9SqM1kzNPT58HabzvvEByX9Hiiq7324YoHMknqXkjmcBJyjEff1KosYkMMz",
  "key3": "3Rtp68S8KeWHahwWtg5GiVTHFuKtsK7mvU7HbquGzBk8GpqoLtkChjbs9fJxVrCcrhjLSouA2jaH2A934F7E5bgb",
  "key4": "3yYsjz4be1Qm9QHJa69YrzheAP9PDRPaR8Yvr3htvmX4EGhHNfz5oVEbQurAk5BPjyVyQRhws7JHQneA37B3QTc9",
  "key5": "5gAUXr6k87CQzR8K5Ce7MbhqVk27VizWeZSTDjkLbPWDf5gjLC6o5xJMir55c4K3hc6xakvHJ4Aoma8K6bMqo2Px",
  "key6": "UY3JqjE9oSkrpF4GCWf7RyWFhxtwj8icbhMvdwduyjqJ1jFZEre37Ykxh6VokC9MdU67tmKFQ1hX3RwGBntR27s",
  "key7": "K4yPBYcnFQMvhN6rfaMENYFDqPGAS5TQSCy9KaYkTs6wUAvmxtJCD1wdWsR2RswGs6CE4br7j8pZYvmP2ioq4qB",
  "key8": "39SmNxpEY4sAs4Z7saeHbmmYzT9Qe91NoikM4uzKoupgeh86jpGfdwi6HiW1UhnRxBTFm2kf49bT4M6efFWs4ceg",
  "key9": "5VDJATJBabn7VqwCdzN66MBR1VHfKNuG2AFt6aidtsGssSCB7BsZicbG6WbTbYpjgdfSkytj213D7SamZFwMnP7Y",
  "key10": "4upFm7CSgJoL97KFphgaEphdbawHzad11XzkihL7PhMiRRMNhxaZCZYt2d1r5VzxWXzfZ4Uhd4FoosTUpUQB2QyS",
  "key11": "2EaL2YDY84BZax1enVtN53EfFbdqRN2695qMDaLxYwdEmnDApJ39GDo8W5sMXa7pCRadosyeGnrsMMkoDL62NjNA",
  "key12": "tAtjX2hiQHe8g9qxW2BeFw3nejN8vk975Uq3xi22nsNRRb6drE4NU74QU9j2356ysVtXAqXvZKUxB1VDudPzxvY",
  "key13": "5VmWFGjjBa3rZWE3ExEjQC77wsbKuXurh7VE2VBzS5XWVvZoKc4krGvbFvaSQ6vQhpecWredYq1pVkegy3ofT2hC",
  "key14": "5k2t2BwYzkFY4JaLNRRonB58zvLXZdQFJ2aN7pu6VBZULcB1RxKwuyAz8yBf94zVkKomVBqsx3ngSB5XchTwApio",
  "key15": "5FukYLLudvnu1P5LAgpNN9of4exFA7nfTbycPN5yL8eqeBt1yxp6TzRoFExcEz5JiWt6CYRyC1BAvoxzjcifuWSv",
  "key16": "76WrMxsLvaiDARNLSJrPcCMTkKSVKvsR5DGL9NpFLkuGPYQQBwW4NmMtWriowRvAnXNQAzUzJ6WD9jPriGdhfk4",
  "key17": "2jTwHFDax1rgJqfJgSLRzDBeCJZQwdLJVMMkDmtfqPvsACYkoAC6gU2XmYbYRzzPPbJ4hATKJEr1AWuowEYJCLVK",
  "key18": "4GwUUzayaymTKzaXhS7WAzwHdFvmZz6BRnsuNYQb9SX9wWRAoUEMZWrQux1X2bwGbi7q5hDLCCVeNQCRfWb2xyZn",
  "key19": "pJQ7Abh61FPnDyrm3UJh1YkQ1N9FoBdExypd2Qv7etMS6inYdg3YHboWKN6fEUFy3EbpvsGhoDfiq7Md82hiWSp",
  "key20": "2ztb3AhEBPVKS3g7arKXi7EYCVDoN1SJJFho7KKZRh5m74RDr4m8Xo7SPE1N7wVzkDNWmGVNKuh3Lq18F8ko43xo",
  "key21": "2zk1ovQbNcAfS5URNU2rvtzBG4GFsuKYMxZ8JZQNyAP4oTpSwyZRYRaR8pK9VNqRscFKaocTqiT4f1DAEwhDiSBE",
  "key22": "xEzW6smFzSWqr42jUHEPCk7YwmmxdT1L6zCCDgt1g2fFEcwbAVoFqKzS5mYgnRAdPdPBzX1hZanT8buTnFQFPXz",
  "key23": "2LFPPjDVNrDKCsTRr8pq4prwynmD7kUw9TwvHe5A1uPbY1CzsQC9ZUVnWyVMUwdBeCKQgXdPgDiZCzGWo9ms6Jif",
  "key24": "vYWN8rEYbNCbMUABxQgMVJpYtCJWJYJzC64LguC1jvncev53VEfgoanAnJEz695vyR3o4VdptFWWPfkv6bmdp4x",
  "key25": "AjTD4fAoWwVJAHdod9XtRhvjX2JsNDMAhM1jvGWYWjmQUvF8G7rHtsWCxu6QYSW9HhvkYRhVgSswvJ3NKkKCzY7",
  "key26": "4ijRuKx93rem9WiHR7nvb7M3NXP6pSNMufrCFtdiwqiArYx7ZXdKvudLXPXwB9EtxjyXjrXmAcsd1LPpaGji57QM",
  "key27": "nRjF1wYFBAZ3z6fE3VnysRBW1MyKArCNdeqvAN3V9tEFb88EDUq8LRruD7BkLq7mpyuuxpVjmXoNiKfcCn28F6T",
  "key28": "2sxWuRByQCXhAyQzP9LXxjQYyajFtLaNK8NtrsdKBL89Sc8A4zPkeDisWQoZ3zvidZys46vXu8k7BVuog4emQkBx",
  "key29": "4avCgP3Ykqe573o6WejDUhB6jA44odbXyGD3HQUA1uKWpKXVzgM3THn8EaZNrqApwg75xdfFkFFzFmko8CzQJhmq",
  "key30": "517BuRvbWD5CvKKfMJZmcuxrXNuFMZJRs25ASoRNmZQNyxAQuU7NWz2jvYdfWnYmYk4QZTH7Sxhq3ECPGUKd4WyH",
  "key31": "gvbYAanLpoxyXhCLKdW3kspyrEWhveijCaYqwCTJnCPVLjPJVR2QLSKDfPFqHewH2QsFVM49cGHb8PWKv3Adj2d",
  "key32": "4E9HxyUHrqdDFEWPyszF7H1bzo25cZCim3KMUPhw1eAhn5adGFxgnyo2oQXBWsYbSnJGBS8JLqsUAk6UNk8uNNs1",
  "key33": "388CBGd8KwwdCrgFUWzhq4RMZyiN6T2XKMuUu5ZaSeXdkk5KbT2dA4kmPNuFLRmjjDkbCK9o2zkZqk57zThNgsfW",
  "key34": "RrCe4n2ZfaCPEcC6G8rjWRT1477RKpbuph9hU1t7ThWB7SFyQRJLYqg3iqPrMFcDaP7gcMgAvLW9pYQqhGMKVpa",
  "key35": "3xyKrmC2kYLE2G3QzavcKcjpPdpWt7sXVhqi5g9vsXUEVKAWjgXReDrp5LMUm1nU5Mp13bbK2FHTTe2FuywtNuoU",
  "key36": "HBEuamyetzauHztwa3dAnxtU7hjRPJSbb6exuyXYGwYWWP8aS2A6N6gyYoyNmYfR16NAgb1nCReW4jtYS2R1Tyb",
  "key37": "5mZJN9JgEX6Ri6eWzBchuzNNFBFRqHafCx6KERcRoYkX7JTsRmPpbJEAiZLUkRnm58AAufgJ3HTK1qDP2JYaR4Q",
  "key38": "3ofB9bubqLRGPe8zrSvfgojdKj9JB4E5GDNYwfoQAkpeFyNs8nQyr8aYzGnb6s8yRQU3BtRwgPgbuhkYpY15L5TV",
  "key39": "2utLiTDPVH8NzRW6UoWkdAwzhAbdk2H3NgcgPZannSLHFuf671drhiSN6tebDXciiCXxmX812tNh33Gkz2NctXDt"
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
