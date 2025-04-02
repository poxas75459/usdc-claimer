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
    "3ZMqjbG5J5Z3dV2DrTp6yC8mTWUEDi7NsSBc3Lw6M5AMs7QAQwCWVHJxKiEVNCUmzytoaBJ2aUnM9gooVTUXBsJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37dzntjUSbgdPmc3jJ8kiZZ3eFBB8WzDTLvu9r5Z2WirC31xbFW3YURVgRCezyJScHJu4zZbhhiiGTUXsKinmC2W",
  "key1": "2i5b2SFAYCPmVj57ufLtrRmzreY678e2tDnKNMxd5yvrp5R6ZJVTadi2mWtsnxmZDTvTteCqrDD2m6RgGJBeGHix",
  "key2": "3bCF2Ne9Jcfy7fupr2QQMkCGAfnhmfQT7VGV9T84cV5a73D7zs2MhWQF55UE9DAraLqjQ9EY4UFjtZfzbHNKCzto",
  "key3": "D7fs8uZ1RuA1rND4hzqaAFRBW1jzpCUWywc63DMwkoLjRBQGB5ykhi6xjpcAUhie3tm9YrwMQbaAxtg3awGLf5W",
  "key4": "AK8ME995wVvCp81SwyY3YF9qFxSU8QhE1xNYUbA7ynYDanUBvzvpoJeqJAJkAcwuas2nbgpM77yEC7fkdXmFeqR",
  "key5": "SMWgPau1TxFvuH8XEcuqM32knBtZ1VMubTTsgotfMeFUSnYiaY1saH4xErZKZdJaTBwxAvVbv8BroxbNhQFmN4D",
  "key6": "47G2cHHt9Fd7VAhFGDjDN4HnaX3EXz7bFDps5Kmp6HjFAYYJR5FmMNC9BdGRjNtstre4refgfyj9i539aYVqGXHj",
  "key7": "2vnNtd6oJDF3nvvVJ9jFZzf7gz3PjZ8BjmuprPd2T3HUUESfDuN7dVrnrRtyDrtZwWJiGCVELGnAL6HrH9vZfAPg",
  "key8": "5L5w2kfdtzyjox5i96b8nnSMUdzMF2u5gJQQRZq1qtKihFH78P6rQ3NEqKwjMA8dstmyays9LxHYwLwM5jNJNU9c",
  "key9": "dtxHz88JjrHNtYDTwv5MLDbDBXFwpLunNxPsi6YcMMzNvVWd66fnu47rtTDYxZe6xcd51QtqKhsJvM1U7s45ZQT",
  "key10": "nfQpnKRrWWiqWgMJqHzDn3p9fkjhtcz2sc5FC2caV8F644ukueg6V2VMntm9EYAdS8s5mgfRtrMXgnipRcevc4v",
  "key11": "3uUo7dN784sK9DY4cNPZREDxj4EP7SegoKHWwpaA98Em1zZjfWsqkrsEiEGWWPaEhkxYL6coawTpAxghRZqCAevS",
  "key12": "4fxMrbQ4FNF5wNc93nHdhT1CTomCT4LHTf1XEARDQnGzV7sSuVLfRZcZVHtQ5hMwunJVNVpgqYyZaF7KjZtWMFfH",
  "key13": "5CxPRBt25AxQQzDtezNYJGPRbhrimJ1DEDhMcC7M9mLMw9MSvoPgAMANGR4wmUZyYPeaUGM2uz2ekepd4JEep3mj",
  "key14": "3pLP4bt3XuWpFqx5rQb5UySL6Ntd3rdfNgcgBFz5wrjpb6pxDHVviPZ4HdkH9cNYrKQxEQwem2yvX18HtNfveEef",
  "key15": "264QYhqSrwJbzeifwmR8sEaCLvcrfZooWUixhzVVQxxrofgAggNNHyrVoMPugZaxnAoQup78RmtcK1zhrxd9PUaV",
  "key16": "xNSrtXY2rkpEaC91NXN25ZxmERicZ7v2NTexabDXWgoEHjWhcAJ4LJKpUMC92hion2RRHqaLf2m82HMPxQAkpVy",
  "key17": "4s55iBZ7Vid8iZbPRxhEERZDPPSr8B8VqXpet8rnpkVuJMndb2H4ASBDD8Xi7vEXXnTTFF8kiM9qaZys9Xn4U8Xy",
  "key18": "5AaBFfDKmC6BHa112bLZAoD6SeyR5gNYtJsbHJjNyb2SzJLkAT71PVc4xQHijjy8hqzKzAtJ8z7swbdtxQ41FDAn",
  "key19": "4hyRWexqaKnYbiFer8nMhSVgkT1FUzxW95YsYQKFXFiqM5tm3YxgxnXayGsVehFB2tNefb453EkW65sQMaMTqJtY",
  "key20": "32tcSiw2G2P5d93UHf951xkoF3TQRzHW3HwS44XX9aXVwDskrdDoN9PED7ctuKNezYXhLQS8j75E9xczLQc9riGD",
  "key21": "3RRj43mGw31aR92QPRzJyQVwDijgwgKRLTq3L8s9CxGJNjdz2w3vvTLkp57U6V8GxbY7qPXSFa73di2ZN1bgT3Gi",
  "key22": "2qnT1ib6GukcX1D31Ljkc1XLWgYzUwyeSWHYhJjvEbT5toDZPtWocyNyLuVJUyJZDmugTJBimjfeC3KrRXyAaWBb",
  "key23": "5QS9zk7xoPHj8GVwQx2pMxHTG3iNALwKTeYcQfuYczF47bZpCGWMmCoACrpXUKb9k1cV36SUpsMTEx3ak88HynJz",
  "key24": "3bdENvmABh7uEZ86AUd1csiFdXVHS2Es95wQ4bmy12nmWikQ35YmTWWPaUdTH9JNk7QJHCmrAUvw9fHUgG4qjsEe",
  "key25": "5Fdr4YnjkbbGE3n45MkMTKe69KgjfbowgVaJLcKi6dNyXZPy9NBR8z3bqWYLV682duuQacVbsVRUgVrMVZcnBdDo",
  "key26": "5be3LuxB7s1hdmLHwAQDQJiMAPtCCK2BeyZ8FubtX2kkUDtaW2G6LmTwHQPTQTi9yfKEKoASC6Swkd3CrfRRUbb5",
  "key27": "42S6nVXSoTuj5zPj4VHg2zXXa5gfCKuG3qcxinHWmDXEVyF61EGCZe98Pr2xHStTQLjvG3LpgJRSmsABeTPqBrm2",
  "key28": "2bNUKPyXV1r3UsRspmiEGbSCKT7HLCCq4TYtXpXaqGpCqX4LDRR9ViaycbLQuEkyZn5uYn4KmQUvgjxsQNWr38Zm",
  "key29": "2LXnhEeHMm5PYFiDPoCCdwApA4xwMVsmB4usBJ4beaFTN7BCh6AaBrCNWsTUBeXdQAsPJqcYxkGLYSMP4TZBdBue",
  "key30": "ujbYVyNJAzrsun5ZF3JLzP3VUi5yhDaWaNdxzRA1mvQfX9Zv67aQsi5C5WwfA2x49pgJSJ16TxK2Vh3DTZBJZkY",
  "key31": "2k4kjGUnDSujAiGJsmGHZTadGt4RGUwhAvUxroUyxiZ9BWC29Upx1R11qKdwDpBKFAHNnfBDr5KyViFS9urwYGZ",
  "key32": "ycyxhHX371YFVD5YKybVmyQN3av5n7qTWam3sMQbPG7Vp7PdD9ZKAT1oJ6u3ad5nhuRu1iTFA1YZ7iDKTrcnkUy",
  "key33": "5oMR46Lr6fbM95FuXiqn9GsrmnNRSsaCDK5Knc4dcpY9ubuJjKXs6yQFYaMfr8QrrKwbAMLs9GiWjRcGief4mbnB",
  "key34": "ohmQyfMkTcbFqHEtZr1j4uwMX96fCubVMDNAv6Hmz82UYg6HHwfiirEHQ93bthwxgShc1qT3198TUfQbLDy8ayC",
  "key35": "5xurmjekxCgoQfifp9wJDUm76ssDYjh9LvpNraFMdH7tGopd1WHSeBiU1corXCA78vk7Pfz9QMCo8iQtJn6n9sum",
  "key36": "RkNkcNJZNZDDyREhiyNPtjdUGr8bkwKbnwGUuebFk5F6zdcAZjxb8kZ96wcF4sLxtkYD3FWdA1qdDXLjh1RuCx1",
  "key37": "2yWZYwbFvifrnJzRjfdUoYPME4tz4GxWFWwHRDgCsRSdEvrADofL9tEu3Gsrugs2iyWFxaBy3HBm6SuKYdzDrWGG",
  "key38": "27DinuvtxFTgN2Dp32tLTvyjKqsMjVEKPX5KiVxWXuxgusbG7ETno5aY2ssSFrNMztzAPVzMouAPvTcTNjFxVaxb",
  "key39": "5irVWcbEynZGWxEPU3e51iq9k2ZMSMifENpC72terRoxLKYwbwxcLqxsTxdzKVCLzaWyFGeMmTqsweC9tJScc7Cc"
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
