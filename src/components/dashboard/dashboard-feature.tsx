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
    "5BFiq9yQDM6JTFaDeBME3Q56HCFFG6EpQtsfAiTf8tJK4KxjgiMFda3ghSwYNv7MQoNq4cs98CbxTR4eyYDLb5DS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xG9dX69kxWbK6dyCgXif4NX6SEGPRymhMZGYz95QHVdxfuSXdbLvjg3f3jVRLmfhBofQ1kbJxSpqYUECL3dbxT2",
  "key1": "4zHoHnzeESrF1fv4JbJDZZtbd5QJRaFXW8p3EnTPSpYYkBQZNBdjdnXV3LX5Eg3adTv535YAx5rEVyNGZqbYMbGN",
  "key2": "4poNjASeEHJbSwPdf8rd6tjRJaay2kM45CxJGyExCW6cT7iTC1eM29tvCrHTvgRY5BZ7n1aEDZYejcpuk9cH1WRz",
  "key3": "5Urof9kidFvnxsSZQMsJfdLm1JSFWDKcz1SxBPR1iqZgdDuYLbaV3PUZndgNZE5pgebqJxoxsff9we54TUP8AtC3",
  "key4": "5aX1XLTW2PxQSHjGWZKcKyb5DtvwtVh6oD2XkBX1w7qFHg6ZkPcuzDu6EjxJwfyFcK8eLzygSHU5Cs1cJBVvoAtf",
  "key5": "2y2t1Pzy1dveQBnjYRRxsyVnz5ymDHjvCXMk6NEzcfhmGTmtSomoYiNKvXBG3uZsMBJgUTk3d1ubHJDNRTwD6C8U",
  "key6": "43qWrAunBnYX1bfV3MmVWNhH2WnFQJQmRSR1ys7varP3ze3wMw1HEEsCJZDyTNUgoLB32HX3oWhKhiFDe3PZDoBm",
  "key7": "38VZZh1aycwXeykMFSWKPi9T9yJwoizLHM8LNEXai8vKp7Mqeu5fLWsTJmpyNDTgRma5uMiqU3WH49PSQRdbHejw",
  "key8": "4yr6ptjGn5DxEYeHW9FvcNBG7s7Pd4VomNN6gqHoV6KBC5McRCWPZVF8sYX5Lck2coitfZ4vvTB6ob356os32XFd",
  "key9": "HaUjbBN7EnEnAEZ5L4wYXoopF6oViKvBEVNyE3iswRnkrzrY6rgTSxrD8bFTkJupaPQ2hXs1jdxrnNrK4KBkhFd",
  "key10": "2GzMzGPkt2xnr3cvQJE5zkHN4e7couJvNAnS1uYPwJEFUNrVxMWftMXd9Z8kmsLNYYYFEqjnHk3hZqGTdgRvBDgc",
  "key11": "qKp1zatzNFT3YUaT45Rx9BRQRkFMegEpbbars2bd1QYRXdN52hDhpEKhP2Dozhye6wj3b76vxqwVRCmDzT6Jxoo",
  "key12": "5fBZreJcgL37EVv1h6GZx92v1gAMhgSLjvGDWHmvPau9DxjaVKfdXWVQHCzM6REfDKyus3ULSKvHFjFUmMAMSjif",
  "key13": "43PmSMrBTMJxTYBGmt3KPkHy6hKbbtdPt5SmuF6ZACsgyLEAjg5XbepCTTSzSJm2xHgW5qC6yUk9CNHrzHibv4n",
  "key14": "2ABHDkpL9YNhPzwsAkxKAvTLRbPaev4ANa3PciLyMoacvbZDsWRwqNy9NQDTULsdHhTE7wKjBeQ7TsgWY5KFapmY",
  "key15": "2sqqvNBDwWEZFy15S5xH2XJPndh9GEnPHQZSDDKYbGU6XEVscBrngiLTKaL3huqs4sZeKidUChfosop1ZYuEYVS5",
  "key16": "2VwTv49bHDph7nNxeHjC7NSgFtQ7HSvSf3EotJ27NpXt3tCxdk29jQ4JpET6mEgcVEjbc95oXhiCQ3Rco3HQbSLm",
  "key17": "4HuBZP6YR62jvkDPFuxgzM5fNog9ConZbkj9uUx5Q5etdpGqKhAUmJV8MZkmAjena4xuX94ShJVzQoRwYRgGHuEY",
  "key18": "3fEnFPi3Ck6wi47h9T11MXW4cGWSnF9chnsykz2yJo4s6B5EroJ7eovXWUgfhaTLSLKrVrGUN5ZwzmsaHXX2Cb1h",
  "key19": "6ehqfa2DW8BNeZiLDUmi7cUMnu1CdaNfsgYirgpHctvc8FGjpbu3LAx62UqDiiW2pjYz81szNLMLuPGTSA8cxZn",
  "key20": "5Ea2yL7ShiFoiP6uZPjBtNjtVJqzeGUipqSWfocU6TYtcituigPCtyVG4ifhrj4tBuucHt6d6mmbuCTiJ5Jgy4RM",
  "key21": "5JgzsfcdRu5DFrFx3TLvLDsT1bDnVQyoKAw5FKtfVgytgbRZit5UsmgzLp2eejbpvxaL1SKnPvmLFmqoNCr2C5Zi",
  "key22": "4rEzNDtbTvVAcK2c4fAGhiyy9L6JKwdEthAfy8UJnBwFiXbzm4yAeUKqmKBEKcZPs2dXRHYvC2ewmqb64jt5YpqY",
  "key23": "3KMg1kuxyzXccMJCXck59hqsYpG5qbFuoorwknjhM8CQVb4vN7syzAY6zyNwnJXj8vGDd55JnjL3yMYeKKikR4rQ",
  "key24": "2G1SHkzo2PBtzWByegA4XTNqZ67aFuY3P4Qq8bNzqkEpVvsgvskPcfMsCLq6Zw4f2G6HeBpByQxQXrr8tsSoruhm",
  "key25": "3ouSDtiXXvymHuCz2x29n56Uva5QNjdC3MgoDfH6EKAzScSqbtYpyDKo7tx4P3xspzTpVFzDcoZSwtr3kJLGhK7u",
  "key26": "37UcqvgR3SR6Aoex75zeT6mXq9PiDeQjcEsrqHqrQkfFBYEEjjMuE8m88dFUYqghbJfNSP7yK4g4fX6W1JwVeDzY",
  "key27": "5CWZbp73VCmBNZcRnmSGhpRTkBuHbV9ktexeqGfUbjScErYGJ3ktWJ5fkTejb6DgyhTHV6Vnh8DubUPtYfwkLqop",
  "key28": "2j69yMbxQEGwpP4ueTd1BRKpn5Qv7AM7x3sfVtnpR5AanvNKwhqtDZeoVvC23xHM2HN2UcGo7Z7n84N3BQYZaiXn",
  "key29": "29o1xkchaKPa1NYYcW3efR5uwqyNJYU5mPW6CyUeRGCbbP3WLMGHtTQtLawFzeoXMsQF9Tnd38Rcs3Wxj3y1vQLK",
  "key30": "4SrrG8HNimQgWCDvPGExW4uBXRYZUmqYdD1gdybDdLeGK79tvzYkvT4ENksPg6QVnMT58ib9htKodU5qLHZG3Q8Z",
  "key31": "2rd77ycURCDTSonxRzFjoqZFye2VVdquCUtXdH8fo4PY3ZZmZCiATsnHLJyREyx3cma8wrzBsfnDasiiYZFffrfY",
  "key32": "29LeHBpoYj5mWWh9zZtmAMwmfiMMAMU8Gex8X2fWcCbjkg5Zj34g1AF8M1FWxuegWpJz5dz9eCQ5EFAW4QvZrypg",
  "key33": "5Gg5vdro8YXzYtXCoVZRV1RJTVYh1ddwRbForbyFnwxANvERsDkeqPANJkRPfL2qeJPFfGgSc1GaqLEKb7eXQz2K",
  "key34": "2fBqJL9MXVvrW27HxgSRJgj8bmXm9Lmm1z4gT7r11MMtw9QPDZgPayLnu7sWPXkX5ucjeXfQXVNGRguTTBmcU11H",
  "key35": "2z4VASwm9JhkCwZTcLWHoX1firQTG9kpjx82Ux1txdWfCwSxXjYRtn52jgxrXt4vCKjZregmBMWeybALRHs9Gsdk",
  "key36": "37DUR2p5Z9VGzx3QWunXsUfm3g7wcMHw5K6wvLLrbyC9ftGLDGno8engTnb1vqf4By7p6pKupfkWEdF6kGgrJibb",
  "key37": "48KuKjsshekHWhkNQdkL1Fo8yJycDrKCPqNZsjzwtvz9tvUp2q8XkTQiCA8K63j4QsK3HZrB9HAjabwNF6k6fhQp",
  "key38": "4x4do8ck28fXW1mkH1kcvkphdQHKnzLarFhAkTEUEVsb6vKxWY9ynNye7gbYuG6JkeDwQjK3G5oFy9p7eUJHYKy9",
  "key39": "5JJ3gzyXQ88sDmRc1P5hgsT1jZX4haNNKbX7UASUFnsqWPFxFZcNFBN5Sb8dxVWHH2oJY6BGCL4q9L222H2gF7kX",
  "key40": "3D2Qrf9Yqw9WoCQW1eBMrb1FGicnGQ7j9bGqRYGLU7pbtn6thWorYrA9bNvTPKq7WuM6KmgN426JpFweAAHomT8y",
  "key41": "Vuv4MfTKyjcJK5WBkNzcGQTdg9ndcU5M4zXGdBEVviPgGR2vWGyc7a5oSZHiy64niXZYUB3Ej9ZdzoryB3i9gR2",
  "key42": "SDw2T356JiDBAwC63Qrvu8PrpuCRLWnPvFz1a4fmQzKuy2nWLJaef5F5zKkM5As1v8XTESg1cJfWvDHVVV6676q",
  "key43": "5GnWmUAdmP4aXtuzJC8cPsL3XKjPgBE1HmMz7djCbYJtuPFn5T8m2XCvHS1qSrCi8pDUHmwdhY8cHrZxbwCkt5mw",
  "key44": "VtEeNW2KBuPkEMHBqbVTk3pMUcn6Zok9fc6i4jqiYrMiZMGrratoNyYbBXtsNbz8z4pg4B2oqai2UK2t4eM2Eop",
  "key45": "3sRSXTzwzSLPuFxuFug7Dw6wopkW52hVVZtBkgEvmhevTkvqh5LoXsB8n9vra3rTyLa3KFA1TvMadnEGEaVbQ49A",
  "key46": "5HM9T2cMp2c9Sqaun8vfbYbPkVBF5YY6tTBsrTPFnmBPdfCER6eGR9Rz82e6UpB5arELTWrtYFXgyQvSgFGDoFEu",
  "key47": "3pJQk5gXSRmtZkp6SM18pdG3viXK2foUwpzKfxg5KZhYEZS9CezAF3cMMbKruHdAjPvB77yDqp8LEKM4my3gQNxB"
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
