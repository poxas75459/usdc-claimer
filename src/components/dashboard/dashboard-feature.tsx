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
    "3jkGGrsRqxi9jfSGGkYktwW26HwkSJKba8XZaaP41T6WRnQz45SZ7JyaHTNPsTKNtU1Ko1XcZRquR95pTMMFAhs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uogEGLvSZro6wUDhvMryaoHt2BCF8dyGeTnKhDd52BvwjXtTADJWB3BD1tcw8LkVusCQ2brjGn2qX1fPL539L4r",
  "key1": "LkJSj9XwdTkVdjfXpPmepi7PKPUysfYhGqD1DEJiAiGsWv5w4T7dP6yxSe4tw1ZgVqfRrtXuFxve3Z8R9KeRGHK",
  "key2": "41RKXGbFtNzjUu1zxS6jQJ85edsRmJFvvMx3cdW79TwVCB5RDwWHXJEHsB3wXY838mDGD7DhEyw5frWktoF4vCjt",
  "key3": "5BABEKnZ4DnFFQrG2ib7Wwz8wiQbB9RP76YZ3mVaMAdPfdUBxqsez85b8Jec4A1PiCp3yc3Px8MoqyExm52uAWpD",
  "key4": "1FsiLs8bsWTdpHEBtZJcR6NYUhy8PdkYtpds5Bio1RResVfgeESNDqnxckix9RcG5U1qM2mtiV6cAs7CQahjyky",
  "key5": "3WqrSrqauo9rf1yD9Q1QTiaLzcHEZBN4F4FdGkbHjdrge9Qu48yxmE559LJdSJ1sKC7mfudvv1K4Jp91SdgZsQjX",
  "key6": "2xzu9BcweVvTiPzeQrmvc8Zjjt8JhNLtRMHfMWv9roBgpnduX5YSqt7ep2PL8wKaPszzW7vhtfspFScqcdcbfk9s",
  "key7": "2swkV6kVB5WYgcB3tpryZ4HnTfPSeKWPRWrDhxA184vg8Cy3n9buvh7Sd8G9KdDdGP1FWBj8h1UQy4R52Ag3L2D2",
  "key8": "2bxEsSYGqpxVMCh1AZvxqv9i2bEbm8FFGwaBMJrz94cAYgQtvrjSA9VXR8qGZ92LcUDUdYbsmoNrVzYtwBU4ogak",
  "key9": "4QnhKzfK1jYzDQyPZMQ1CNc3tRZdssPbssKDdEp7JAwxTrrjy6YwiJYSFqiARfsigeTEU6ARo2EBTVgiw67wMcqV",
  "key10": "KCwCdnsqLLWLMFsAZv8ktJyp7KdjRK5ctSf2fQy3HJzKpM7vZ1X2f8c5CXmZ1N41FbpgqDGqgbuRKmwAj9SVBvR",
  "key11": "28aTWm2UdpNz54AFVDWbGChW66ZdQRe8gnT9uBGUB7Tm8a6yUWJwrjmwmRt32GnGy63jmAYqRJAdRsFkZxyKxNqE",
  "key12": "27NQ1ZP8EhwUL64dKbRaMhfLQVjdbn1MjGNYdRNVWMNjboLia8YWViFR2FeDMxRgxBfCJhPbu8fKPWc8iL3SZtyL",
  "key13": "5PVr5MysRoPj7SSsoCUSDLpPyotUaXaRu7GH3tU2LkBtGNhDnyrMSDnDnoW8tyoYftLbhBg2739BLxuQhHkcxTFD",
  "key14": "4N74zGzXKRLNJqx3vBysvmrHB8eTQ358jd5FGo3QnWkd1zxqrawdXbxWQsovenG4mB71eHu7Wr4y4gWy9mq5vxiV",
  "key15": "4CZZSr5TgLFGDoqgzTxQSxpPB2xzZHqCwHTJiSnHXhKLRCtjX6MXB42S1J725TKRrZEcNUqbQ27qcwCWfYHqhNc6",
  "key16": "cYDbnh1otDLJxt7rVN1LzoHJZBbB7g2wpXLf3HeyXeoV1LaTGXBCc4JQenSc9pnLoiqqrdSof7dWRAJx1ZXzMTz",
  "key17": "j3ACAYpdrYLuzGBgME85mEbgensmcQeRis8i1ANxcrXwV63t1m1iJty9bbWNY5vKuZkwHonCBu3dGmumfYU61ph",
  "key18": "3yGkTCJCf6SkeNPoxUPYwXhpTp61ZggkfBf2VYX4XGuvM2cs9TR92EyX7YCvzPyoKm1GY5zPehSRPACzyoq48LDd",
  "key19": "2Apc7b3Sa6vj6DQBAV8DjxSSPWwVFueiMpQEoBaeL7hCRVmy2uvs258T9YQ4F356Rma5XHfgxKcW13fLYJk2XVcv",
  "key20": "3YiRLMgkQZu5RecLMW3XDxvKAc95UWFmLnPe6JvN4QVQJaiWi9fBQeXSH9QqGDGYSa2XCcJGbVBgjqYZdQtQdGFs",
  "key21": "3TQMxDKxVSEMAqtpgFkx3vAYqusjAhi1sf95N2JgpNK8gCwzga7R12YC3yJijxvnq9HB32w5oqqFwpF6bWQkqx4e",
  "key22": "4hUMqnzgjkTp46dLm5Mbh9kmy5ypyNTf3gFrM39Yrzcfovxs8UzU57uj3F1eenjYQD1CqtRZeLBXXQLfagoHeVnd",
  "key23": "21BmAaa5MdF9XguJszkmxFqaNktepUcEemXUoHZyYG2KR2whCz3vVRKmwiA9ssFUWirLHuk7Psy8uC1D8audX7mh",
  "key24": "3vzkVB1exYF3KtCSNsmCHS5aLLeJj2jkXgR2NKoL7g4UeW8PcWHm3EaSkaazKYeKobPza3mNYRQbgi9sSG6J1QuQ",
  "key25": "33HqqfWHUm3RiYM1dK2rzbG4bqERPWM41uYqPqJ8Kv56S4vkbq9iJUcoKSQ93JcumeCrJruYRnatP9BT4bRaZTfA",
  "key26": "2dK1skBeJHYnuDPNeL9ih5pr6mE2faGkhXJQ7yDXgkxekHqtRGmnwJTRvmeB8V1ARjnkRtkf2XQVS6Cp3q6UTTWC",
  "key27": "2u4AuL2dD6hf937qmJVSDCYaKkvAXtD25df9tdK9H4Qpo2fYGjttGjDJbqJJuuZcQ8fN2KkgkSG4nji5rdREmhff",
  "key28": "66wcrUTYM3WCQsQkNVzBjQ5i4Py16DvvMmcacLAaAE255JevBpNFWgpxg6NeSksRDJ9MGgx6R3v7rreeH6JPWr8F",
  "key29": "3LKj3Qy6KV4eDvMuAXuctNzfnczaziqB1GtpUF8niMGofJfsaJ3MGryPHagtRbE7eqPcceMUB3JK1pncZq1LNQDY",
  "key30": "4MFUxL47CNCAksxn74EXxgVBFTTDAxYGhLqcmJjN2cqHTaXA5iP3YLG1gSqzHfz3yL6fGz621vZYPQUk3XvL1f89",
  "key31": "54EnZL1CRodDWEYsCrgtsZS8ybBviQHokuHHPCivNbBvWn4MP2nEjQNjm1nsEhkvi5RbwoVKpsGLU25FErELtQxr",
  "key32": "4Y6JtJPYbfLDi9ttzJHXLUtm9NkUX6ePNzpm3CPZLRdGATW46iGqGbqS4bSXZ7vkfSCw2vhiqx3dbTquwayG6Kw1",
  "key33": "g6vrSyUhArSDxvTWp86ghAMPP3RVL7YKWAQfmMpJe6zsweF4kZmngdtNmW1VuGEYtpwzHraQbbe6pYTwtw3bUhr",
  "key34": "p2gFAAftgu1ggcpTtH8RVLZ7PjYabWVuEWZmNhV8dsv1TrNyGkW74mubftNAyTEqTc79bFSzD8KyHAYFa78sWiv",
  "key35": "4kpthteu83Df8G2iJtA6ioodT4pMgG44QpY4VBgPx48r3xcdrWyHZ62jp1NbPa6MxQuvmwv3gQWfPUa3oMsDa3Ni",
  "key36": "3Yrs4JXk5VA7HUMD4SbnSskrPBo6uzwzNeAimgQjX6TFNePR6Vsa5dx7cK3PPeb4jx9D1yiBJKvTUpWQGJE5yKiP",
  "key37": "3vuS77HWmc9TAQAGFeR53BKesYcg6Je4rV4LbcJS17eZ7HLwD3yphUTJ4j5LYibaJynGzd8Z7dcmwFrLEusanQSr",
  "key38": "24HNkLwj7wXKeWRfjaACftnfjDEszkJmf1Ha1MKSDjYGY5ytAQ1kx4H8FK4LmuiPg8PMPtQYN3FJ66UqvMAhMxNo",
  "key39": "3d4EYi57tjVw1JNT1pQycC9gx6HsYDFUNsA4EefDdxwhFhU9j9c6bTBqYZJaede1p3RVqzVk8xcUfGdY2EiRM3Am",
  "key40": "5VCetjXWQVmikYSJnkH66bu5rAoUJTztaDFBa4FnsqgdK1outZw2p4A8WZ26GGwke44EJgU9XYUQkbLFKmm6ykmj",
  "key41": "5JYwXcEFom7gnro6mk28CvksniEEpJX6oVYBHLrwVHuANmYUrid3pYvtic6vKvkawf51XDCQiQEo1wGgqUX2LjSw",
  "key42": "2TUyeKxhar1ycCyrpFyZmS95dFHjQcz53nzXCwvXJmH5VwE44yHEkN1Hms8FLyvQuXStRxFHYNQ1u1gp9KqNAq3v",
  "key43": "2UuSyMAaybNfNbipUhLWHikVPHDRzxh3v3PEFVKzMVqsQZA8BugmVovEQeXkMZhw9jtMVGGYkNw3XZuX1S9Yfa1M"
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
