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
    "NSbVcoZ2jMjVqSaExWM1T5GnUUd8KS5vhVmAf65Bbi3s6TB2oVsthVwToy3VoGQFeiAZy8ptMuT3A1v2mKbaDFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MXg2rg72tB47UQmhvd18FCsBCqKW7PbM8JRyUx5NKaYXiYTYKfNtLRA1z4cnfTu8oA9nEC6u99tYftY7Q5ehY7D",
  "key1": "5GNmC9LjSuPBaAKUFomKTjJKAAFHqUEjEUPNX4Av8FteuMdGudmvRh4nns4P1eD5LrcknyiHZWbP5fc4oFmgE8LK",
  "key2": "Br1V1XWqFqsgt4v5uAuj3PBaWwJRBm4SWb27sEoRhJSongS8xo7S7Ahn47N4ss4KBQ5MxBx5UXUHnydDxiFFWbz",
  "key3": "ys55bWE8oFmskHE9PMc62QPCJfvY9YP4Amxsd3q7WdiiED2UYdGNPo88AzTNHbJSYVh7q4USDPM87NxSLBWVfEU",
  "key4": "3oAr9wrQsjFZw1rHjXNAVHyDAZYg3gQUKBr5oEYWci87AhEN5LfyMvkBCbGaqVYNWnXcG7t8QitwoUHCXHY3xkGy",
  "key5": "GfLNpagw5ac2gJVqmWoXCTkr2M9kYc8Q3iXViw9vM4TySCXkMKwMnTQH3hcJVK1iNN1PCVT9NWNYu6N3QveXnxk",
  "key6": "2GGZYQX2ptgKhRsqTPCCdpLTwNf5zYUDorFR1mFCCEGc4igsCM1HiGGpYHJtPCHT3bKE8VkfR9JKmxhewfiVaDv7",
  "key7": "5qbFpo3VKWmD2gqqQ7C16m5CQX2mgLx5gGaVhv9uCtfE25N2Zh9S3zKsdzdrdtM8i6QtmJDwNHsZdHMkmxLJ2Di5",
  "key8": "23SgHXBsMBzxmP43kXmj6yTMyfKhyE5rMNYhhbJner9GxDa2612Kr3QwRgoU7PzqSBYFEg23DxfQvq3ArAk1Xvi5",
  "key9": "5yiDaH6zsLGvfgwJtgaeXfxAmtBKJCVGURTRG6aba7d5HAEQsdM5VAZL4tJMJz4uRp9kRHhd6ZwPdYngdGmAcDMZ",
  "key10": "2cDxxe7LiYX4MCvWBWBRjbhLiy2zjkPvPu8jW8x2SdJyuXEgT3vA7tFztHM6PivXBkaeK2g4kPuMxBSJjvDXzETH",
  "key11": "1QFTQX96MqqFkQfcQY61UNM1hgDcdpN8peWg61V8SmqG3QQ3556Gb9Kwf1UkKCqJGieZKcbnC3cHXtMQirnX545",
  "key12": "2SwgtHxGn87gPcRAfXbTFUPReo4KbSx16KCxTsRsFKXujtxbuAVMEXGVLPxbbTnC678WAyCY3yQnb5MrY3TP3SG",
  "key13": "5nA4pBMAryXMb4YJeTijnvWn3H3LDyLZ1rv86hCuKVspkyzy6djJHiA89ZwWBKP8nJMhevoyRtGwWfwCTSLj23ip",
  "key14": "37wWzDt2AxY16ZHu9PC4EBNHTz8DkVNQFYxXGHhrHRS4qMWuwNBXZ3dRqENnzgAEuBQpx6hVnqTYPT6zcMGndTw2",
  "key15": "2pC3Q49VVXEePFkSQ6v6avAKr9nFtuPQrfcKdvSEUzLRMGY1aTpXXT2mipwsZikTBqt7jvaJvMv97oUkFGFgKY6n",
  "key16": "2eTBWvuXEvFWUmMaDj98hsGGimU9zfpfr9pB8EDkRWMCRMd6oKZZ4mod8yQFP7eFfot1se8dEuWje2msKvDkD6eW",
  "key17": "55Z5K9M9m5WdK2GHtomaYsafu22k4hP4QEZpitbQpAnHxY7ak4AhdTUDsZsNfnJrLANHMRpMBbhXyhkEt9HnGXTV",
  "key18": "3DfzFVaAouqLrewXpUp69KNGcF24YaQufr1qwcAb7hC6gZmr9pK4n7ivk2sqcCM1bd1H9cQCeymucjyatPZBN6fP",
  "key19": "47X6RBwdFht3FiqmgQPWhVmrLJ5yMv8xtCBDKa9swiYxgp8J2723f2q2Gk7KiEvNDKF2p2N2SpvCpS869G6VX8ow",
  "key20": "65zyYGtTJQaMTzRA2pm5kzhT95AAydvjWeHS6Tow5gRTEtd5vZcabh5mAssUBC5cmKao2he7qT6HDvfViwbcxA37",
  "key21": "3VuNbD1ZDCt8qLuauJcUSmQZ4mghgwD517UwtJoAkq7B3m8xF83LBjQUENQ2xbjBurZqvvNVmQqtkDqaCbFkNYrX",
  "key22": "64eX7A6Jb6CTAiBqyoAyADXLFBaP8zTFzaT17cAv5Q7m6U76C2dnY8acimsxhnLgjF6bM5JNEuqtaY1bhhUmUZZs",
  "key23": "2FzegpSeTCB95QWRULCTzDrHpmYkLyRVWg4R4di7rEVXw4Jjb84t1SrJNP37T4Lbnkbs9Qwsg57HX8yR1goM7Tak",
  "key24": "5cmwyv4YKjmwCjj29WaxGFxFC84zWxMkAvqvLniXr9akhsnNTRGjh1zJdEoqEVRn72AGiBxcRFJ6xjB3AZr3xue8",
  "key25": "3UpCzeJV6atnxMtroo13MaMS5Zewo5UCESpymeQuELurSQmQtyV3XwUVaTNYrtgpyH2mzQJkKHTpZc1taySuQfQ9",
  "key26": "2CuCR5wbw2Fp1S4XBuRoNmbViFg6XFq6ntPvbUhUKzstUJxHFKfjQBQe9AGWKzhF6QuNBpfU7U2WPBYxEy4nPwmT",
  "key27": "3Thy9UzevzNaSiUQYxNBQzkTopPRmAihcNFa8NcjrL1uCnsy3uaia8xWDaWDVfh1jvciq4kS9wpwEThJ66tVWsQf",
  "key28": "2fbp2Wkyg4mRiBqR84ycZAb6bo5jF9oeCvexF4hnUnGxxYQmvJ7aUA42gM2W7rpM94ffZuHN1KFWSyJrYzPbGicS",
  "key29": "HtpifV1vAi2Voc53XWV8aXv5Kwqo526eK1RGiPP7aDBmrHaN8yQXzZrEy5DbraUoTsLBvRNqePtRLMnBkKaQVwL",
  "key30": "3C1KwURhPwYqdH7JXSU9GJUfKPyBLitvFfKXRUBo7eEfx9deYSWoeyb74R1yEVNgXLkooYAes1pnDpE29Z3sYuGh",
  "key31": "5iBMEgLSsGJXagjCK8XtcxCFNSym9Wi2mbGV3R5nngjbF8qZnSt1p1fCozdizJPZQh2yooJkGhm7orR9xsDgqCNJ",
  "key32": "36qjrBFiQzKajQqB1av87XQ8cfmAAQJseKy4WkgRGn7EUeKfw255BNfckQPoCyPk2Lm2FdTeM23GT6KL1rtVVgan",
  "key33": "UkD7gDGRkNszYRhKJAjQKd2XPfzQ6vDSG9yosncbAfwLr57c988eiBkj6fWGQZaZyaN2EEAYUPtfFbepSVjSUtq",
  "key34": "5BT6nt4dM5SWA7GirZUKEmBtZbZCnNpT1v9DQatKG2zHoYUAxvhVsA3Kvb3ZTqAmXWRXKrq3DcVe9X6cYfgP2mX",
  "key35": "34cCHk93n5CSjWgN5ERv3PBe5pA9w4GforYjEpDuyv37N1aMYA4SR9DbkJyFUqtXW7Wn1ipPVPjy76LKQRSTyt7H",
  "key36": "3JbrNhn4i5cXeetsoc1SyR2W76xdLJ9zBEtTw8k3hPWXxU588uiVeYBtRbLtCBHjxueGegH34dUWiAi44RAxxD7g",
  "key37": "uyq9uwcbeQaoTsvpp3NXw3M42VYaEqM58jLXJaeBg4RRfvyeRnoG6Vwo1DWuCpNPT9WgBGr5oWqsKB6xRpueNS6",
  "key38": "4s8KRfS3ry9ewdonL1mRPA4Qvp9sYF3LFscKrD6GETSfu45Q7nG3tCjLyM1pjH5pZGqsafFacbjKtfTSh63tVmSy",
  "key39": "5bTvzwj4zB6KRFkB7JYGLaZESpUQwhiVXhHmU9frtxu5x1yZQuQkPoSQME3YQV4WS4Lb3kLtCwnphRpVWbEose8N",
  "key40": "3inFNJPiTWUQFB6BsEpdCnAVvR7zV8QMovuyvFCaRMxTZ8xRC8in9eaSjca2njUzcAnwJLfW6QMFhpgckS328Nm3",
  "key41": "FFZhDbC3z2ATnWkDirVp9ChSLV6V389UqMsb1XpUYnHNkJe1q1v2zNzThLdBoF2W3Nqen36KeCqLu7MmvXTdqwP",
  "key42": "4TchuoNL4RMwqkr79JXnBrZZbmWnhxrfgWoBpAzQwfsG9qBQjJ1RxCsu91JiXFDqx61L7yAL1pdAZAf35GTRqJ3S",
  "key43": "5WNwTUEeFd5tHKAyCdComqz3rGFpzYcTZZFV818SCZmaXwDs2ec6KjvzRkkS7wEGQkQfa6aCYMKLWYDNdrXuCY5K"
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
