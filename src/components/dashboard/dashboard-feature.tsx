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
    "4mVNqPDM1CdcbecHaAjKZDRrKeVPZLD12nMsdwKb1JLsX9DZawFKn6QQkFi477TjkiykvhuGfAaGMZ1AAG6DTosA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57oafzrEE7uLXeTFKwoQStr25trwe38in9GfzKTxTFYXtWDSynDnZNnc6oikf61QLVp1MtWLaHurspW1S4eVRwFd",
  "key1": "3cmpB2Ba1LLVSFXcCoEzr48EuHrbt5Z6tu6GNnbcEe8zZB4LtyZQ8dsVkFki2ZUCNHSxRvN3Pu4fZgvpqtBfUni",
  "key2": "3CGDoV3RzUDSrx2Wn8PyWMn4WHDwQh4WzaVixVdF4xNDwrheP9FenRW6QfyWvBRYTyCxnv72qfpHcJeaHCqSp3hz",
  "key3": "Ne22ajxbYZ5qdFHYjDivf9TKErLiUZurxbfLzRyfSUwekfan6mJPQgpBXCZeZ3bsCHaCv9SJEAhC3JDA5utmdfW",
  "key4": "3Ev7UAjZi8Gb9L525yGzKQtYDt8Ry2RwZeNzaoLV9YXP5hrD9rJhLH4JuQkzZDGPupBmTr8zhokCjvkYL8MvqBKG",
  "key5": "3bpWjWdr8yGzWx4YcH6FsHaktM15mXBMzcEE2NbG1rizGJ86gaSn7WHt9KGJ45GPafqXvUdbgG9f4vS4SsAhY4ui",
  "key6": "5SjQUXsnkPdmKKMwmEj4N6hKHYrdv9FJH9hVB9YCJeozGxpw2dLq61XxFC8R96G5F7eiFt5sGmfma955hYkLUmpP",
  "key7": "5jt9HqTyM2w7fyGzk6wYzmu7sBHTUi1K1rDshBbgdSUHWbFZJfqfbqWuDbMvQWaCaww5sKJH7irYFrJeY2MXpcK7",
  "key8": "3pPJkfyUzjxbfS9gB4y2Wp1v8yxSMnwg2BigFm6V4zYTi2BoEd1sYknswczWhwqmmSmJCiKNmsuDzgQpDYQarD6H",
  "key9": "3pnbwPk8gN4sZxB5tcNbHkwfeirz8txjY7kBdLjA98c5soXBD2BNVw6RrBhppgHvHwPZEVEKaaWiouQifxroiTfk",
  "key10": "3ttcUTJQLnpk8fro7z7m5V9szbW55uGVLpmCqB7L5bPGJVFzsb1T4AZSrws4hkZNmR9u8QhfdFBXjNW6ipQWb1q8",
  "key11": "21RnVzeGjBFpPNfHTCciq3PJqtTji3xi85W7c4m2JJo4ETxf9w3b2mppPq15Nz53nkaeVtYmhyREJZHTiSGFr4sq",
  "key12": "4gsL3WXvrDjpSMQJNgK4kpRP9i1JGGowrDjFGaMdvd6GMeMuqogCYxh8wed4RwdaNqek8krQtdoMjiF2B5zLanD",
  "key13": "3smzMdHg4Pgj5R5Bbe5c2DvkU3uYuF9btYwNo1FJ88c5swEzNQea48zyo4oRUKGohfJjVom5Sh4686f1wStHCF8T",
  "key14": "2XTDpAUag6xXML34oq5zDwq4SujGh5Fr5bfb5mxDZ27ZLNUBm9jYTF7ahyad8PRQVonZNtvdNHrqBe2Gi3aiLbJD",
  "key15": "3YwJtqB57i3LJhTcMJLekRiD27whLqntcnyN8BnaLyFNs3rwFmNqQYP1Ja1adNdCxgKwB5ffV4c8iVSuwHxUWY4N",
  "key16": "285BQHPUqRZgkMQ5VhmaVAEcLAACxuiECq5aVCxMwcQepgVKtJju2qsqS3heGgJvj6DvsmAq2zPRVMRH2ZFFJeYo",
  "key17": "2auykJC6Ku9qW7KuNA1QrLHAva3G5YUpDAXf8ER1tF8bs4e7AG4QLZ5DtpZbDP1EKF4iYiDHRyASTJJzuxcP5DLF",
  "key18": "5tgA2oyoaDEyHBsPkmyPYksyeRoFmA4ubfenBX7AGknvQmoZpGLsR3tcinZCtmry27FnzGYqpuZLo5G1hAiVe7AZ",
  "key19": "3GkJXDSSyo9S5xd1wheNDVQbCTgUq7A6p2PxZe9fmYVuAzN9t1UcycR7VF6ywyS3mY7DdghtawWcerDtTziAxyda",
  "key20": "5MZDCs3UM17dps4XmtM4LDe94RfDuEQ6omxGa7KSa1ES9XD7jRxi2hjGrdcHj6Uq3Wk3fgyP8cWRXkH6kJXpjGbN",
  "key21": "3ua91QSEdUTzRGHhBJZzW7x845EK3Q6zfqiuBgDE1ynt1V6KY1E52BbNeFjtkdxVpEyjR4wRHb9qmaTXpQjVcmhg",
  "key22": "2575mtUqwMN3yULBUfskAR1dEtaYYj4ikRgBGuWB37J6ZenUjV6NfMCMsZeE8jx2wEEfSConFgo8HbkupxChBs8Y",
  "key23": "5yEr4r8y4yusMqExYVgYSBFSiPXCkbbznop26coXuZybzhndWWoUs4bs6NjcAzmNcE5c99kUfuBgxzxyNFiCaUKh",
  "key24": "5X8mvMD8pNcvXuZce277Y94q1mmnsoDEcRtL6fPwTE62sCcDfkS7BTTyRE3LRBUgZ6bXjxnRwkaKjVSHDBCEGfLj",
  "key25": "2dMS7bxP6zrv5AVC7ezUepa7MwrjzPdX6ytBVJjD5AtkS6wJTZVcqkjYxVPotFksAYdEqtPRtVNvXrFxe91jb93B",
  "key26": "uSpR66RHStjDqKJZCbuEu3FxyKuwkmZyd3MGVkSYMcpjAn1FjRUUDqPSqcQ2tYxnqxcv7MhSvTQeAmYd1xwEcVi",
  "key27": "3McEo3YBFCGTa8PkQhm6abFmwMve5jtTUdn8CJ2hJ2kzC7hhKaBBQ5QFgBePa9xLgVnbYscREGQgjZsVTLRADYvm",
  "key28": "M37iBSCQNGyfLK6oSUjVVfeYWpgRVLgbbPE3mr4Pevzqwnok7gpAsX4iet7PT7gxafsFK8fWJAWReGkfz2UvTQ8",
  "key29": "2UGwFdiakaDv28SqH7mqE71N3J7MRmB1GTUkVKqaj1kbK9umWq5sAsuYaEN8rNjNXfs9ip7wEkWicivk6orTpSbt",
  "key30": "5mJzLToMNiZm9Ym5hXepBWQtvPrhvC4b7Ni9CzXbaiFXoMUvGsS16yNyvaNuCta4bkcXWyu3M5gocWbudAKLw2YN",
  "key31": "2SKp3NZsKJaDq6QSRQeP5gmgQavZtk8LLTkknH2HR2jxHdZXmQP7rJPrWH26n1VZPMKvJLKBC3nSSKAUb3us63kT",
  "key32": "AacbZvj9qRh4snK5fD5Fh5H89jmpMULNwBTJcCecDv14DV9fvYKhuLQHEqV7NJzcMbTmBpD4egWjKh6S1mswfYd",
  "key33": "qfARr3X13PgESjui9VWDaSS2G9hgj97bTY1qPzRBZPAJVyZDTTAnLhUJW7TGrLkYmFkVwAt6vhsYVC8FP1Umq5x",
  "key34": "4stVrVrbWySRGtzvwVus8rSYPBQE9xN7XNEhVsjKaTGP92D1Mpi71n7gTqSGNb4UVNurLjPin1iPPLxWZz6Vd2G8",
  "key35": "g4yc5nMJqJzY2Dn6XE3f8ehsDWnzqKSNNd9iwKUfwSQHXmnu9qoTSKp7Uimqgqj4XjPkadzHYPjFWod145YsYnK",
  "key36": "2TidFKU3SSvuGqa1SzFGarDCyqLM25LU22n2vyLHHShtcrkwNo3QVQpbgKhrH2QkBJEJdPuYSTesDchb7NTwXC3m",
  "key37": "55SJauxTUnxCkKq2i6Pnc2vEE2KWeFQX79NeTfLFLWrbdGwUPAm8BDU3HpMUUWov2ESo1buEChEQ1csam6zQruqC",
  "key38": "3STj43qLhSCvc94u3pDEmPzqmwHAjmD5cgqH54r3FGdG4s7GLE7n9rcv8Gdkrb3DAtUJ5GMtgLUJzfJpF91sxAqy",
  "key39": "2wU4fdQkGhtA6NybyLxyHYxKcQAn9trP1QbGoSyG13qNUJ3nzy4LuqZrYozfDdoywzZqPK7euzF27PC4jme8ppDe",
  "key40": "5avN54H2cwLGAkfEmZ2ReoMnTBfNzT6RwLVKUTHNdCmKYRmHFJ6sJthvV8hzYt9Cd7mADqQ933s7pSpiCErH2Knp",
  "key41": "3agifeaad2CbHRD8eZ2srzqRAbtQ4WfDtd9dNGYwz9T2xcKX9JePsG6PaDDpFuz7vNtTpY215gsHFEnmEfy2Qw7s"
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
