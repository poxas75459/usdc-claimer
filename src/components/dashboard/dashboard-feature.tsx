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
    "5N5cXsCx2StTM8AkFdXYBZyUh1GUAf8WyVvL5Byd6kKpt1rsYVno5w6XooH2KBf8nayBy5eXp9Qh7fBpXuc8VZ5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E8s28dBZuvY82TdemELBjVLMXXD7fkSqZ8vmwfD4GTUzc81jbu7CLyQVkSmFZdHwkVZxMsJCcwphahcFjDoE7Bt",
  "key1": "2tCxafzAK4KUCS5KMypYUwsS2sQ4xyoxuScrro5FXCdmvpN6W1qLqREvi53cNfY31N6odtgtdBE5YDyoytKebEkv",
  "key2": "3wLGoaqd9aACBNvXiEJT57uKDFRQ9o4AX2NqaxgiwsgqSXKrazMJBJVfHztb1ki2Co8pv1ktzEySJaYggnepPuGL",
  "key3": "2jdzW8jTBcWLHbK83Zs4QyZ4mgjWZKJamFLjjCNpLPZ7xjKGzg87ovaA7qMAKPkqVcKsmzMHAh1schVqAAv4n55Y",
  "key4": "2QZTcS5jh1MjJuYhyj9TzBknqY2JUedb9K7Bh5yR1XDdCidTeCQHVU6s6KrTfstLqvHcmazqFo1QWJxVabnFQMC5",
  "key5": "5PWk5jPcpYZHwQ2q7jTAoxoYEaYS8ZkbBgLBxm1C8CNezaTpeobLRyjaEC6Cg5U9EjPHNuyawm4HSb1WzEd2HAkg",
  "key6": "4Rb3ExzaetT4TGdtFW343Hqos7WPVZJckSbQobLjLcYjqXHP11cJwYSNSXnCB43LRCdqM3R6H1UBJEtk3Rr6P6VD",
  "key7": "61PCN9idVmNqH93hRZhB6hDAa9smDJFGp5heKLfZkqpMt14pNWVF6NFCu7H8AkpQfcuidhiaA5iQ8mXbbZJSmwt",
  "key8": "3vygPPmi4BrzM6mBLCaGWpbRWsSvj8tVHdyGkgDXXvyhEgySZBB5NWwdzsBq88u56MTBb3RwDBMk1ZbXbHgPShqG",
  "key9": "5bX1bm9J47Qkr9wBAYtbASyX5cAYdewBiC2MF2NvChPJLzayUocV7xBRqoyVgpHZYyjPnvi3tJxhZNAbq9CiAonN",
  "key10": "2xDo3Yfwbro81g6tsHtGqpGnxVUK3oopW1qdxmFPtATy3AnEg2LQ9c8etzqjvDsSuBVPkYy6FDrbqREKkpPmN4bL",
  "key11": "2d2hawmgSgQZZgzCPkSvL2uT24UFiYMpij9ds6aroRpoGZMSf9N5vqFB7MNsrY7qhetcqtjgEMA6sfKyNAsznmi9",
  "key12": "3rdTVVbiJ48LH7j7HENMWc28abkiFRJTv6gTiwGhaDV3KsHALqxLqCSoEZk7yTKmPEfCG3zjQQUMG4iWY2oHoeLU",
  "key13": "4TT9Gmn4hDnXQR8C6CgAt4xz7ZMTtVjUYtXq97K7HuUbCNqL6PMzspeKZwcWgF1keyTPARKPXBTfrx1QVXkPVvW5",
  "key14": "33zHsQKPQpG1Xr5Ji3ZPx2VPMrLXdTth2KEMg8MVHWGpYwXF8dmRznefmERFFDb1WYgo82hTjgaQyB1JGTXwo9qA",
  "key15": "5wyB9DZYyheXrHtTN7f8A6Yv3Jwf5yEc2nFtLj5nrUQfW6tEbtXUK3Ab4dfqhu89nC919cEV9x4fcU6KF3hUq5nN",
  "key16": "264zMkX43YpXsiXXEteK4nWrxLeJZq5BfoNzi1fNZCMFyy3jbUTd9YsFVpvRXsM4V9G7SsF6VRJiP19GdGSu6a8n",
  "key17": "44VCAbv6F3gjWFfFhrtdrgvrPmmjrJAKQHqrnXqhHjwzXGUCLx5Pst6DXfQ9z7ddDRYNx1AySebCHdtWJv2pRJHM",
  "key18": "4aSWcKmTRGic7x4CeN61DnnQs5owdSnkWHzuVZGzmgkEXXAo7K5vdCydYZpvczAbmeZYTNZzY8FPJaFK2MGQid9f",
  "key19": "NSFwDy5ucqgeprRM6CUB9dRBxBeB6y53PCE2YFsitoCq6nMBgNBaTAU9DdL9ADivcWHeko5THZnbjveGxyU4U2R",
  "key20": "386rYXYbKSpfNqyGXeRKieLxaR9uGSzm6A6pXfFaSUYwirXzjcdE7afvNPzJQeRB73yBDniHaXTv7GAkaGbHZzxQ",
  "key21": "4LxrNDdBKDczVNeTHRbUc1G9A6EaXbBqULpsEHGjGPxp3R5nCn9GgqYifvKkDLurRBo4wxuADeHgtREAG21DLxn8",
  "key22": "4kHU13D5FU9eMYsoaeys58HarN7nXRZENiRZ8hLLNJusDU3WYaSBNheLg2KFuTKiS1o2GZ56DQtbADR6DndBdzoS",
  "key23": "B71K6bd2QB1F45ncGrTSeee5RHQShT4pBaqva1U7358gQdcmRHSevpNb5XfuVJ71cMCXiGh1xzP4oQzDw3zwucg",
  "key24": "7kMnzzNVkQSB7fjexz3PqcxML9bwBo8rNEcDgeZ9LZcwvzzAavHN6bn6QkfEUDhCvg4bVgUBDLfnB9xmwPqBLeg",
  "key25": "4uSbqNBZMxABjub3rEJ8LxFJiJvi3shsrz58t4cMvwoFwKbvYfFD2LTU59oY52ZCzeTRcJ5bpgiR7LsBL2wfiYhK",
  "key26": "1ScUDzRBhXVVWY89gXgmQ7YYh5cBDvE2se5V2Gn2jvwoTEZD1jzHdu1vVMj2QodE95Fx7xErNSsFtUmcqvDoi4F",
  "key27": "5FCyYWA6HC64KqJVvmBSmmUqQed3gzTW59TD1xVArsV3iEFiyab8LeCPYgPGkT7U9QSunjJFUD4kmW4Cc79x39fz",
  "key28": "3TqVW35scjNf7q6VuWBxgfxSR27v8QSru2GrFSGZGaCBYxtfSTAxSJt4tNCGF1E4ndoiLX7qNcnseyWmeWe635Zx",
  "key29": "5ndRs9HmTkTPvwpeK53gsA4mm5ufAvQawFf1GFrDbKuivofBhtvNK9teCEcoqs3v723bVkbRspV8C2gyzxcF9Pqo",
  "key30": "nwDXXhDxZAzM4jhCmAnrxZFnmpbdqP8VVM6uv4uJcNuoY3NkbhbUsG9g5UFaMVsEpxUfduMxpJ2wg3HbkEo8UUF",
  "key31": "54ttBA1X4qmS1qkXT7HKDoJMRvESRSNV7SkcWvAesRq7giCv5Ath5cnEkV89NquJgoZszBVg7G2J5dYFFAVwHeoL",
  "key32": "2wE51XTs3Vnw85krPY7HHs9K2jwutzgj8MgPd7jsbDLGebqy1XnTsrfUtLjc7ta7B2nBCvTcyD5ndST47LzDFp2b",
  "key33": "3yJn75Kp8NJP8QCjSrxb7mhATLSLgyXKeU5bxKatEv3mmEPMZzybuwiJoxmzYrriLeYVt54RfRNg9krHeAGUWcfL",
  "key34": "ankZqStEiWLGh836XN5ksmrzqBVL5AVkKA2mSFHD4LMPPWxHLuhYkbCmRvwu7jTsBWomYvXgh3UnLAqXEDyx4fW",
  "key35": "8R481TabLAZkSArTivVbGQCyh1MhaBvdbRWnwMoJW9ZkvVjaY2VybdVUZBZEDTZZpdeLrqsCVgkEQXCFJr1hDko"
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
