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
    "5q5aasuwdUVodv4edNHYwGPRQsoRUE9YC7YwjfEqKNG5viExFYf5eAsyYKwTfrPdfy2Jefd88wMpY8KzydCUVGFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zNbsCThTRmNzJSnH9UegoXQGmPNJ31cNk96rKTFMP7jFAzv46bMXKktG6gEwwHBAr9cFjGv45RJzpyEx4L7GNeN",
  "key1": "2urazZZUxoFPcPwux73Vxdpbga1M8oP95KBz9Joe8D7Ghohk4KMYPyfzgkA9YNbbeBAU8RrqyvRLPPstg7JmiWLr",
  "key2": "49JuX8bJBjvNUyuyNH4mESS2MN58LYX28hQNxE83C9t6GsaQZDHhkT8eHEX6MudpPNjD8sYMF8aqWTqhvabDpd7x",
  "key3": "2AsJZdQwcMdYCm7arny5LQKdgP6GqcCEmmXHpxn8aaCpTosgamXhxezRstwARDE3refcbpFmmZa5BCkvfoArjxEc",
  "key4": "3q6U5Y1X8jGSgoHBkX68ceuuKLKyb1hRBatGXXrUKZEUP9xuoTMxEy7vyMxpFwtUF24DDEd3kNPC8V88fBJqnFNa",
  "key5": "4ZVd1iKKQygteJNoJeUkKMgUt41QuWipDmWhE4XZVyChgR4VmYYm8TwcZ8xjS1mULKNfvPkQBrS9gjvEqi31tCer",
  "key6": "63GY2jonHvNk39c1JfbVQu4DkBDCrYdKpEBRBq4dX5CieZSLY1wAEGpfS11npLxwCGdgQU12b93bnNCK1C4fZmze",
  "key7": "3RYFiTzvEQ7vjUKcpPhx75QzwqJe2SbSXgsMW4PjVjH8R3cK8nW2o3Qgb56oHCECYBLsyPWFokfhY3EgQNYQxkHU",
  "key8": "3hhNTGHvXJcQHaeExYZSLKR7rvzVbEmMg5Q6Ak3SnRHEULxcFccgMrFoA4rgtho53e7ipJzEdRs79fWkneukghoG",
  "key9": "4C84eFgTxNPuY6Qaso2DKGSCWMC4aZkB1BFMVS81y4HzZYAxURfmfSj1Ri8DUyMS94wUcuzML8xFtow43vELorcR",
  "key10": "5CfwJe9NKQWptshaiEXQ8ibUudhqo6vuzKHwhhSfzGjVgm7SGEE97z5hM76ovCCwj7Yt5AtDEAqoMkatU6cvzixb",
  "key11": "5UhyccLAVe4w7uazRFodEoPhT1aDoiUHijC1UjUivSLwhm4fJLE2uMAizK8yjfWGNnaAKJ5DY8XKNGg1fKn54Vip",
  "key12": "3N1bvb7nAaESXcUuCDw2rboXbBB3ijQPJBFNVcBxBtWvee7zSUHmLZyBMQ15rb5gAwGJkNPxhxCv1XZ9oaHpJ1Dg",
  "key13": "49pAeFqXZ6jKVJPFwHveya3Xyxp3i1W2dZiosJB278t9csCyrb4q2GsAmaq1K2VsLqRF7HHzuppjJymZ9xN8XDE3",
  "key14": "3CzL1NhGWgpQRJnnY78gN2WmTU6deVeeZZ6yum7tQuaikkhL89caAWWnBhu93p3tqcn47fiFQTNQExuumoQFHfB5",
  "key15": "2KSQpAZkH1LuMvs21RAib9vm1yjUnAaWfUYegVL7Am1JBTxdCcDvEFSBuQpFfiUgh4PYixqYTVAFS6j9qpBgFzPU",
  "key16": "4h6yXcp2mfmPGv9WT8A3ERpSNM56N157tRgPK5BCBbHyBsAbxaWEK3Ffd6gsPyf6t8PqLbG37gmmZmxdnpAe8ggu",
  "key17": "3sfaD6dX3zburFUdnNVvL7zeqoPfUYErh4ALJV8NBYY3iDT6PnfchW8TauoDy5kjQqiEWPchvmArmuXW9Dva8Qkp",
  "key18": "3c4rnkF92svgcWzJT3Zje3zG7To9UMys1a1qgEsRwHro7Ey8YHiyxchVpdp4A2ZM7rMM4zkj22VSm7oHkuEb4CaN",
  "key19": "4VDcxcJ51iT14zwnfk3L1Y1Nh8VYkYrV7LdUBGoXg7abrnegBfDw1MVSokUwLKuRdGGWuBNo172wWFLNoLVSc2Hz",
  "key20": "fPSv1ZMCnhCp5K4ocDVp6WXBojp5fJ1ZaSrqhYvSwwdgMTE71cZAHvd2AvnVovqo1QRcrXYvRBa6USusi4yW8dr",
  "key21": "NeM6UihqZox2epYMHc9GeeLMkrWmBMtrMPH5H1hTk4rfDaMdE4dmkCLRnMj1sTwbihpsKrgzjiYSGs7kLL2E1tC",
  "key22": "XPqWMnuPsfxR5JpGBfUjehtuhGJusKWfBEhJRjYrinw32JSBrzRyNbzN2uijQ9WbCNMaFk9yMZ61xMBigp5tdoY",
  "key23": "2Lx9zfbAqoFPRjiPFpKqW3qgfon5aHqHJw8SVS7zJRMwJ2tcvRoXKJLK5eWb7k1EMygGNJm8fmiiAZRczG1VgqH2",
  "key24": "26KwnX7wNhfAhtx7Ey8fTf7v1Re8MUczVKTBobXRCoBsYJjhoeATX5Ubb5jGhRESYEVrV4m7hrJmpbUq6zCq3dkA",
  "key25": "5qFGKJeUvzEkrvtho1k1TVzbJGuqeYb9BhrmaAamDfWyWjGF5idGowtJfV41s8LpWMKXDKyfLpEJxjNzrTkY8Y2L",
  "key26": "5XP22nkuS5HhNz7cy1XHfiVbyakjc3ht9tC82REkq7E8EmUVhsi5z3bN8a3LzA8pC773qrLXCKkWE855ZZZM2eA",
  "key27": "3N7YU5ZkB2DbBf4ZrTQ1Gz58ExwHjmY5sDWXPj6vivfZ1eEhmLwMF3CopEdSBtMstToBUUxL4rzVVrvQLRdANsBz",
  "key28": "4b8Q5rpFxNGGwhDf5vrof7eMAn1achRKxmqFjsj7ZobkWmdhTko5pLgkkUgUcmCDzJFneELoFKFbLdV6Py1SHxyN",
  "key29": "4xgywFdHG5QN4EPDtrNd79SoszyLrXmEmvhxyMSkUkV5HZm2VAjwwjza6jPChJhjhaD1tMXQaWiLB9mbGLkYBZPU",
  "key30": "4KP1xAqbY4iKXPA96ZynfX2tM3CveikRK4YxQUrxJms2isLcQwQFQJMWw7ZqrxTYvVRkojPjqhU7vs97M6w3Jbf7",
  "key31": "CyL4CKFSJjmi4UqU5CY3jrmHTZ883WGsPE8438PdPE2vCGYphxmaJ47TgTG8cedtXBPuRYW1uK4hSSmPhAr55Td",
  "key32": "486Ex27QkRHpUyNxPvWTvZ31rsFjTPdcxmaByp4KpD6Nbj8DzUNKthiV56QmLDoz2jnZBW5LUxWE7zvWtZXH2ydc",
  "key33": "7KtJZMDfK8tj5tR4rDnwHn8JM2BBFB8D1ds3nxQ11WWKTcZr2iBZgewfx4PTdg9SBcTPFFKEoujy4ij9e6JuJed",
  "key34": "5j9w4ibUdXSu6FfkaCUTsSeTBqFMFcnum1FsV5GqEgxwfgSQjHjUikRrGDXb7D4Cz6R6L58vMeK3PKTmzZtvj6bt",
  "key35": "3FMJwN6mkg7ZXFZRuRn6XfbTFn4B4VF1BQT5zvP4FA25h7xjR8GcYgSGKv9SL8AmtTmLc6qKYwG3THTw1PTgWkqx",
  "key36": "2vXq5zGS1RniPDhes47TizgUYwtFBiVJ7bNcQTFi97ALgMVFJCPPvqtcvM8XPfUtV3mEJsfmr12g5zQszrYgfasJ",
  "key37": "2fLrt5MrtBtPqSFTCRN7FjtKcxqEFGSxzEBGYgVWjPYP4Ga6SLeghjC6uHTwzn2UanMmQ2WqbMRxPDSMY2aJ8UcL",
  "key38": "26es5zwuqojH3UvB5oNL3wvhaBm9dQJATPCLkGD5Ph9WbgRbNDPXaE1YeBQwuMqU1cNLNiJBWzwVRMNEKyoFtn6K",
  "key39": "4Q14vpFNC8UGdvEb1U28dRnURJM9rkQzuEuerBvVLVTJaUCGDXZgbxDsaJDsXKDzLNHigTriadyE6mmP1DYjCqHp",
  "key40": "37GnmYPdkzvEzQcPSjqSr2TNg9gB3xbiFsoxiNaAe1Jf6LYgmdMibhE62XsXy9RtqKr6UZX6iduYKfY3ri1Rae65",
  "key41": "2NvHwkaFjvCoNhBCrkrp7wzTosgq4MHT91yQcqUJbnyakj49J9vvDsGsJQ57FR1skp6oJx4zpwHwCGu7naRJMpQu",
  "key42": "24YqKqTCyrPcnNMZwzapKz3y6WmEjYsGT13XVphjdfPf9hBuPLDboi2xVtjwcvqD3x44xhR8cTrfF7rmLszt3jzA",
  "key43": "61cXMytxwuREAosv3WVuEYo4xKYMT4bdRy84HtHNh9hAi4RZZ6oexQ4qN1mYwafTbmVGjThvPAwsB6TFc5zCc45u",
  "key44": "3ZPTMA9h9XRS7vhUFPKMfFALchKYp8uGBgjyDcpomyNN5zKEhSB1qiZpudp7xfW1acDmCb99iXyT95oz1NEiHjkB",
  "key45": "4UbP9imenVYuiSeTsfoayjmrqPCwPdcrZGoCBV4atsP6jiEVQHhF7sFNLmFsZkzpCunu25xfma7QD5nHNn9D4nuV"
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
