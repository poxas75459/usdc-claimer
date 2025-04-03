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
    "4UqHdqS6EuQquGevCtvvtpFs9ppTCRNkPRr6LTYr2zdSEyjXqTFYLxoC7BuLaYfeMh1122DbrQdVxXgVKJSxGALB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qkBtA9E5SWvfMueaXe2vpMz8NCJvXPKLR9baLUdZPmq73uDpVYcs9ZhCint4magMbQszBHoHTUxDdt8vAiqScR",
  "key1": "4TkQgaCtCu6jiWJ79dN1MYfx5o7cCW4of3HFme7zqEzRZx6cAV7acnUZDwDQtyWC7BmVpTPBHMEWvrSt9FzfmUHA",
  "key2": "3vLtUYCdz5USvfuWima7Nc6gDcdkYRonVqJp6jZ65vYYbomPiCqHNx2aoDr8rzfLPggqbZd6sTjutmgGdbFAWyuB",
  "key3": "37yQRhJ57v2vyHyHG3WJ421z32Ann9mdiQv3QNdMr7U7US3GTUqmM7uwjLVxNjF8rcfPu9oBXw1swJi72YvBFPAf",
  "key4": "4SMUXy8KHLWN7gmeDcMRqwAbWCuCYPKivW1F5tqo8hFW7Ki3uzMSPEMpRSBJ21TCv5QhA4qz5oKd81PztreLemLJ",
  "key5": "4Yb6RrUw9Wth4mhF95kosKVWswC9LDBFJMrjc4Fkp2TrzDuGtuKG4Uscfkxp5YdfLHSV2dzRfCeGi4tvxQGmEpiG",
  "key6": "3nvPTZLdUBjA1B6Nh9VkPFZctGjEK3j6vXU7c1YcqDJ2zphBQtS6n4cqTR1MvT5VXRSm4rqQchVAJUGwHSNMW8TZ",
  "key7": "6MmWjn8awEhyahMTpsFy2KDf8o5BFeYCa6X95fKmfgUsSWSKL4PbkzJ5vBHBeYtZXu71HNBEHBkXNaYLj43jLxC",
  "key8": "5b37cbnaui3hCvKC4kb8VHiCtfrzGLtYuW8BJNf31pNYeAX9ynqToqUD3ExFghckDbNA8P1BSoQCLJNeA9PoB36A",
  "key9": "2rm6CsdvneMxBG6NGUVJhg9HiGsL3EdkFc4eszjmzZGkNc3MWTwJMD2wxBVSuKve5yuMHWTv3iUsktiU1EZm1YKR",
  "key10": "2eCW4CyN5yH99bSejt253UUGoxfPhT2JziBpARiZD4YdjyNjcPHc3LjpsCVZBzRfBLsNCgmga4xetDRbCZCcmJzN",
  "key11": "5a4bq145JgLmuhidBYhRGRutpCPGNLQeXKcA9ijmEYjdi6X5zjcdb53wEL89oY9CuaLRP2Dst2ZPq84eHNUrH4mg",
  "key12": "cYhj2hWafdRza2cr3N5GgAZFSBRaSqZuS2UFfMHCC1AW6ABwDrfkQnJJyHd42dxfxsDUAmymh2YGyemXiCsfaYM",
  "key13": "hZhK4M73nC1fk7Sykm8iCx29vTRB44h6GFEhvXtD3y2LwuhteybL1AWcTCXK2NkE87YuqEeccg4bKpy7wuPcAC8",
  "key14": "3C3czuHpkfq2ZKL2NX8PbauRsSvpaWZSQAuqf9Vt9sx6GZxJYS6bCVhkDQwS82Xgs5SVjppwCCbJtvA4BPC9aKkH",
  "key15": "4w8doG8rLd4Kj9EeSdhfrB86wibeQytsXjdBgo4HXsCP7117W2v6zD6gYNaACDSPZZyoCR3PR5n5YhZKFYpkR9a7",
  "key16": "4ETZyPMnG9CdxATWbviJHsFqLDn2rBuJq5XeXmHbnxjogYDJTueWY65HbPUEeECCDtPMhZQMEgYQxKDu3B7s8jsk",
  "key17": "2HdTtD2x2seHDXjjK4uwosdNfJhCR2MEfTrbdeb38SMSzTQJw4RYPyiAwcm5iuo78KqviNtwn64aU1vvghqtcJxq",
  "key18": "2ZM5YCpGYBnxg8qDMJnQ9bjwQ4PeKcMj9p4c3goBGJnF2uruuRrBwpGqYaxKiCi9FuzCxFrSbNXWL3JXp6qYjCUB",
  "key19": "3eusM1LEct9EixGCuaiiEaZpCTNAWkMPJSdbrLW7Df3s6moD1V3UARcagptLALJpVR4ASx7Vq4pa3DJC4mbdstnj",
  "key20": "3BcZT3kcEBtcHL3H27Kr94fTFfE5ASxkKWJwL3ao3HX3qu9uxmiZdvfCqN1ovSGVnp6vTEfX8qaoQicbGECG61QV",
  "key21": "241fHfND9EttxgLzVnQuFh7MmR1DRXHz6drV3eoHh61ALiG4DF25pzdZZ7krYDj2FoHBhg2v1NATS1Wt9AZNMLPR",
  "key22": "22zY9gBWkWnb74xGYQHnT7U5TsLiPuBcUQLS9QqirQyksw9GtAmnk1Msk5kaGXoKBPEqti7eu5ndMCqWrhEBxFGQ",
  "key23": "4GCmK4wvGgFkbBtUbDfjfcM2t7c5gz3pjtvjBXNmSBXYqsbWNCn6KS2Vmr5zAziav8BysDRtJUVivQg7BbLmQR6t",
  "key24": "2juu6WSGrtoWEAFDSmzQ7LHsavM8FNiXrDXofpzLP4thYMn5ohEeeePnMZhWfFn8RxLqDsmZFDdqeR2TGaRSwtmS",
  "key25": "56cm5A4PMdRhMMqLJRcP56nNZiJRTxKZLbPdNtaiJQxGbD1F3TuGZh5vDP74nyNcEVHhSGKS56aLm21aqGLHRqMb",
  "key26": "34VLtJvDg2rMvhcXaUQCs67YyqvVkmoreKSUKFPbgXdhzt6PAzA3uZFuZvbL66xhSkYB9Fi4hM4ySLD8KjjPbxpF",
  "key27": "4zW92p4Bv63QBHHq7FJv3dcWurDTQHyW741u2EcPgVoMc1bj9bdKyRqxeL9HVqyjqzpgByzJVgvS17XNuM1GXrjp",
  "key28": "3qSjRRxafDbwxmG49vzEQ6FcsTkKn2aUdsgAon2rcACTvrMifWYULrN3Eh7znctec6viTBcy22tRjMcZUNPqKXDk",
  "key29": "vbg2XxFGpETbYXkEbRvPbWuTFL2JYPAR4RDeM3VtsC26Zu5jJFNgQoE6Dt7u52N9UKWVrPPZ1prPD1BNowVgRzP",
  "key30": "2AjJ7rjWe6H1SdyAb5i4Asa4DJ5o8jcTCHDFwCMeHGobwffzqthTHqiysiETSXjwLxUpfJVexdaSPztkAMe4FX4",
  "key31": "4aNJhkUfKH953v9GHizpbs7L7YoC4HtXbyVRGLmhtTx2PRup3icsuoQ8WemcrnCfJ6JCTVHVGpJjGiAX4gh3x4Wr",
  "key32": "2mxeJyK94Egm9LCagNhJeYYCagkt9PB4DzunpGPmBMzk1AaNKhybe6psQbfsZ8Nt1gaySkM85VjFcZfpdpSeW9Cy",
  "key33": "3V4jfHXsK7q5JzNU44oD3ahiV23o3U7uyy9JDWant2g2tXbUapdKa5sNBPQ2YPZuuV6VhbytziQZkTg7EsnwPKMM",
  "key34": "5d9Hbui8g5hBEdBVfJSj49vnAd25wn1oieebdckULsLqp8QegEmdvTnFFjtrQCidaKgSQidaABWZmQAByzFZ5LBz",
  "key35": "RtXDV7HxppZutRH4evWPqDcnJNLfBxXqh18C6fAimppx8yRzJVxL1sRURcF1shbYfqc8AxwUqYupf8GorJRAxkv",
  "key36": "A8ZJB9pZqmvvB1c6n82HfC4zpRiuyqEG71oJ63D9NQdsU5ELGq1vnQ63KFrYj8Lndw3ZttxubdXYyqKBS6TUsib",
  "key37": "2JWWwANKyXGRdf2n8pMwdPru7kJsDyuHnfz6zozkbG4wborgSf7jTUpLCaL78QjDsYSNwm7ghmmYHWDGTtDgiNeS",
  "key38": "5GJXAEb4Y21qkw4n9o3jCHn9M4whCi1Yiw93N3uEeyxkxQGx4Wm8mv3EFGLLCTvbXVkTRgQVLu8pE93naHKMd9LG",
  "key39": "56BQpBuMEw6vuVch8ECnG1mn6NqphuUXZJy161eg4f7s22MLh9GsPU1FjytQMFTZSR7GSshoea9W6bdT5MVPw4de",
  "key40": "2W38iEKsXwh6W7gfxukmyZfaftBcXuQdsr9vRdZB3da6r5f2ubxEwjcu48x4Leexy8s8niYsiC7Mg3K4NPsFbFL9",
  "key41": "3WPwSxbZMrzdSV47hfafa8YHdLT53u3eY5bd5DYLNGwqUuqKZCW6eLhh3JrfJFYzcNatbD4a3qDE513LR5PVNfL8",
  "key42": "adhYsWPdGc5h9BWvP41oyZ15z5dW8yhSsWkPyvjwk3ZNTjowYCmcgVCLEcxzhhP7SdVMNUrgGEjqFvykhSRt7rj",
  "key43": "42L9YY8b59dxRqXNmvJmrBEEoc9FBdE8ShAYz66T9Z1PupvXXfZM3UremEZpESQrbchgvkv4zvUbXamNSRaxg6iP",
  "key44": "4WpqcvLyUrgibS8YkN8EMELZQuVeca8pgnrnUtRfqyAKqUouguXQAbvDTx6ANTeYNSrnLX4EBjTw3kEFxaBbkPiE",
  "key45": "5zNfKuL3Gzh7c9HTxFCatTTKsYeH7nLgEbVguD7azar6axJaqVjS2qhsjEPwcCWQQxni3oMAG3PF8QrKBc1CQMub",
  "key46": "5quVpPYdCwLBq8cf1A3RrkrSWZLZWvHkuiLgTDenabyHJt8FiHbvmeA6jFsD9nPG5jnBrYQHCRayJ16u1kJvoQVJ"
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
