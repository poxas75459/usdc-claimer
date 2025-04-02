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
    "5Tr5M5Gw5wZxfg9uBwjLvxg3cxeDwCGVbpbawpFYjRHGtC2h79d8GF3HA8LqcNJzpFtd69b2mbAygnhn7Ay5Mcdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sNN6q81NLokpEjqR2v4uh7iziLyWiQQGk59rQDz8h98gCb7S6YDy7zAyWRhS5YZNKJUZX9GDFqzAgWf6GWSwxtb",
  "key1": "5hFEYSCpTCnwE2nFTJPzEjWATBtcaeqJcJi9jps6dQzPbSxx3dN9KXJZhjk2YH8fRo7UrE6tSkA28U3CAe4CXjtG",
  "key2": "cPS9gyLckRqgt3U1F1SSTUz9PcJRBPCg3sXTFJewRmWi4WqFs5kta16A6dNUk8S8dp3AYYDiaCh3RoHsuB6vHEY",
  "key3": "3TxB7JpJepVCHdHi3mdwybAS98qGR3FEVD6ErN6AE6BxPeBNxtCMZ12hgCrhNqdRoWJfZb6mHQpQhQP8mrmqMair",
  "key4": "EbX7ZY3Ah2qKsL1QAJKiULwW6sMMLYYVSgXy7ymuphUgpuWi76VKnwi5C24Fw8nsA5RMQfT5iJmy2Fa6PfNXs1X",
  "key5": "5yriXJkPusoKsUfo9e1qrhZfcSjGAnshVYzTXvnrYvPQ9nfeQ43TbBsqkMMoiAkksqJqMCXrzrMHp95ir4R3AiH1",
  "key6": "5AjcjWwHi87Cpw2HZLPhdbxwHqdqJNkwGiwgca8SzeTja6ZwgZ7ZDc7UHDfoXUNa6PmkKKtemER8v1NtnyEr6AEC",
  "key7": "jdTLqA81J4qVUxg9wxCGeASAsr1G4Jgjx5gVnNkFj3waEu8P7rG2yJxjfR7ZZkegakZHRvJvQJjwq7ZrkgD456f",
  "key8": "3CFAciWyzwLBG877jvr59AiezGK3TzHwxbRagte3Xq9yDHN6vfAqYY6DDauVoyA7uAaj2M1goYhW1matUSNwwi8N",
  "key9": "tD2DRHaaQfAkbBMu3qrKA4qXEi2Gu5aSdcpbwPCUHACDVjnseSqbDR7tBagB7B6jnssdqFDK7qc136k4AAPdu4x",
  "key10": "SM8DtyEBazK43SoEwoD1sod8YoP6CEiHtk35XqT49aZoVzYR4HKbir55BAkY6FZBWaRr3v34e7FHPjCqLGmoczE",
  "key11": "2AMgRdtYFRuRdiXsKpSoyMrdziMqL2mRMMsK7AETEdt5ntsWmnNjBeKRMf1j8nKztDBjeBaYCy7LPejiBMwP6bFi",
  "key12": "VSBDcN2UUmRM9qqBEzMCAzPCbvSPJM3VqhgjWePpd7AbvgD1EAtkP2qqAJjc3ypDZNGE8zX7dnvATj7JgP4mUvZ",
  "key13": "62ygnDbeGsPDrLgsPB7aTvc3xz6RqgqJaotMCa3mtdRqQ3vruPV5CAnohvpYfMWJiMVetqSsCCCwZza5MrtxMR4D",
  "key14": "2X1trqr3mpEGKYyAYUSZXqu6TGSihLfWRGKxViJtpZ3M27nogqBtrZujF1DKXWnoqXnCj8bCTfQjNHzsCjaNVUyv",
  "key15": "4yvX51NNYhuMvFryPjfVbbG4smPQgUcZznQ3bmL48NUBnPDsa9ZtkmmyckKz9ZxUuBK2B8weoeFY9iEfoGtseaSH",
  "key16": "4d7EjJq45Ce2WCHxKeKYjx7rfg81yJbsJz7rtRk68jRBe53b7AWS7iDUfg1WNex91aCJ75UpCt8KdANhoZFzixxr",
  "key17": "3t1HficUXCi4B1TQT9q1FU18AqebcTn8F5yukmJXUWrMZyTM5HDE2f47JLd7Zaob5rNfEqN2MNRkPNXhguNhUyYt",
  "key18": "4G4LeG4xNvSesmZVzumZ2kwFQZY6rXq5msVRAjp8e7t7E9sHhXP25EX9JBCf5miok951qBMrkoXBksoPsnQWfvy1",
  "key19": "52JQ4DYXhF1sqSUssRKcqzUbnyssH7etRKkXbeCMm4XGkBbaLUdFsAAQcBTYtnuhDgTKFgFwEm5W8WQzPMZcGeyC",
  "key20": "jr2A1qNPKRc5ghDn635j6HBThBucq3HG5e6GNcstGPPbTq6vQuMTfG7UBxwKRM5P7WQ3HX7UeUUCV6DFRL13G2K",
  "key21": "67fPAYK1R6Yd7YBxw7EbR12c5PzzUmEbCWXDrPLw1pShzK6d48nBU6c49kcAbiyjrBuVjDRk7p53L6HyAsmFnDgr",
  "key22": "2jDurePqhUETM455FH31VtbMebtPWk7w4pJigBPRYhA8ZxwaKzuYiyDxBzgCPxswRNsK8heADknfXDfzF5fWpbNc",
  "key23": "42ELfKvNdja9G6ibpkvEek6iJM5RGKFsGLGAMrUJLAnkEZRk4gL9gmEfL4mG6eT3YhUJcBJsgrn4v11p4Pp5Uq5x",
  "key24": "4KAYTxzyn9RnokPLkTfj6mBHRdfXoCdWYpCdJzC6J1UrRu7uaLjy33VevWYekJncdfwVcyuEVvreYLbxyBw3yYXs",
  "key25": "4PVFHzNYQcrDT7wozboZJimanYjBxBE9zP45nLyzAD1gB4NmrpP7pGQnzte58Big8kD1o538QHEfrEvbu6BGJ47m",
  "key26": "29icCTN67vdUgTTgQKBTySYSfQnH8VrDwzEctctHDPeZRQjaQdj7PNSQAXqVEe8b6WTZ8xxM9CmXoZQ3DG9qQcBU",
  "key27": "5d2J9BZEoYyPx18goH1Cq69AFHBC3UDUnaMgnewEa1p6nzd29TkkFDThq95ZXQ2bTNHhaobJcJLUs5bZRstFCHLK",
  "key28": "7SnerbcyKneXWJyXJNGRFdXXreY1gMWQXxtrnDdephZKooRMQtptDLfLjH1saqfGivPwpyucsk8WH4Vb9BWt4YH",
  "key29": "4zTe3QK94q8H1uKQi9EPWfC5XTeq1PzpJHvR5uhiZa2YZ8H8mHCWTr9nF3Gi2RpqwjdnPLuEWKjnkYTNV9rYPK5m",
  "key30": "4sPopVyA6Cs33Fq2gYv9uhST9RmZsC8ah3HAMf3uFbWrsTJfrWLvpwzzjkBkWeTqTr4izWgDAfpDocTMR5eXu7cw",
  "key31": "5BHdQoDeLxW47aAW8osELhLGxceCk8Jmet5zvyiUwPrp18Kt1UVjd5Pff76Fsgcd9AE2XCn83YhctHdoGCGrQpfk",
  "key32": "Y24QEbWE1Bp2zcmfMyKVxwPdK7Lr4LT89hQ7huERo2PSTTXrsXQD7WLjepWfw26SJyVXWCkDBuYEGp7HiWLHz7Q",
  "key33": "2FjE5vygf6BhdoXzxnDB1UuXdSZ7RSnv46Tup3Tz2M6XJC7m61dnpRzoSytWQ9YAMoo1Q3RNFSRVPLn99e1u5F3v",
  "key34": "53dSDg7L6AZufrtGojmnEFGpyqZuZxXxU9VzQE97Xo8RvJKp4kpwP5figxPB7TNffGa73JAes8qMKEVNdWe95q4D",
  "key35": "5N1KAY3xTag3qgk4HkezSVokbNBPpgLtq6TFCBZt7jFAsFtryxJGtdPsoA5cTxfdKvQL6coq5fkVZFrn8GbQDo74"
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
