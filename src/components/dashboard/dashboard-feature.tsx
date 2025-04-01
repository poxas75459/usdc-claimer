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
    "5TMULV6Gb5g9ZVoGYtayGtTL7dg3JZxbRTMnbTtLA16UakLa8YobnHEJo1gp5dDazxD3h5tuBsm8dKTjBeo1HSWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gCnpPN8RgbMmXCoFeAdFrQhBKKk5ayAKH1K3skjuzr3ezFt6L95ve5ta9GNue5hbKSxm79YPdJFKmwa7TbMYhtS",
  "key1": "NkEz65wv9aKsXKP293eo4d9FZdnne4V5RVK9eLDncQyTPdk6QNKRxShjqbmMzuK7WnLcmUUAGyMiAHCaKjNDhGi",
  "key2": "3XJeSa7tcPybJbu6a5uHi4WeBgh1rNnQVh6BhHYPrfuFPyGuJCKjZVUn21dLdNXv9jYsZyd8REV5qvcV1nxcbfre",
  "key3": "i4imDgVW2fifPf3bohdQHVS5g75WPXoM9XxHc42SXp5tm7e4ooSFJXih23gCk38MH59EFthHA5hDw7NAbAkbrFE",
  "key4": "4cYdq893gjzctqrw9S8VwcGXmXffHEPdsujYYYq2E1KnWkRyzzfkaKUgGPQouABt66tmuppGvFWneXUZw558JCJ8",
  "key5": "52BuCmap4QeQyPmWsd7c41nD7xpbPBubqtJ2T91f7acWt8zpw6Rsj9bqcAWHtUTAeCPHZ1hnTYPALVaU37MMzuNn",
  "key6": "3LG6DFadofMhqqZ98oYDBJMSAhyJAZ6HJmSBpi2DdpeXhJgSBHQVQx1zFA8WV8bKCZQmMER3rakMK6C7EYRnpsXC",
  "key7": "uoWQHyVUY4YJybrHYUjxXVdtePAVXjuKFgRiPXj5cAMWQUQ3puYaSn7nkY1idwPMmSf8SfWXsmnEZoroQ7f2DpA",
  "key8": "678ooYCL3CYxmXxzcP2yhaaN3Cn25JbVwaptHjUb6u3FVjYqfKVqtJcU4RWcTHcHnjZ6CabiZ1k78aSD9kVbDuWS",
  "key9": "2RMTDQDdZ45uZBSEFzjS4kaJZ3c2HGmC4dJyLryCkHKbj5bGw9LbKsuFp1Y57PK5bDHs6X6VvdoAiE9CASyBoKcA",
  "key10": "dwCxuSCKT6f3WsmPpRu5i8Zggh7Wx216DVF9tbFoQzF9tBaXkeTzt1DG6ft9Ju6NmxSBM1UdGDtQrFfHUmF4uy1",
  "key11": "4yrTMJVBfoNXbVq9bXt5f1cFq3qQeb4iGypyoGS37VeZGjQCgDmJjmEP1yTx5FXMhriYQrvGRVS475Sb2v6KbDKN",
  "key12": "3vUzHjCNkm3jJ2DM4RettGdoFD3uxAhh9mXmCrQMG2nrxZdjALEm6LucCmVqo7cYaPgvfpr63a9PCiyTN24s9nAZ",
  "key13": "4ZhwwMBJofH1CXcCE8on3UE6Jfou7MEkmDdMjK2ephwnBWSXkskNVXfsDMqQY2mN49evxYxGKeauiS7ui7JyRbuh",
  "key14": "98YoCJbCmL5D28cnyBLirjhpW6eoqPtXg4XvcyXE9A5zmsM5Yk3DVHGxnSayymCo7iHW7nGQwzgUTSHCt5qs3gH",
  "key15": "5axYTvZLoa6Cbn6KXFcvyH9UYRLhpo2gesE7CS2DND1hwVkepHES54W8mstk7FXQwyMAernpBpGeZzV3Kdtid3nb",
  "key16": "4XxWkRZyUEELfq7psw3KBgCYEEhjCrfdV17gNHMQEQNmeKQKk6WszGjPpDY8sNKoEUfcLLwZrRQck7dA9RMNbvrg",
  "key17": "3VELFKDDpQeYEswjq5BGySRr2bPPrQPnwtcYDSQ4hH6jsSU85nhS3Mzu8wQGZPK156YaEcbzZmKo7xsXMTe3LRz6",
  "key18": "4Bwrjd4zjuRwibgpLSSJnPKTbS9prpo2Ugazn6fHyfSH3BaoE4ycmkP32q17WESBq1gvaPXNofjXrwktHSvKufnK",
  "key19": "393SpfCdBY2PqjJdgjVCv7VQan5xNhUFgMFhv1U36A5c1TyRiUywBhCrPA3bmeP3CYRvduUtgH2PizcoHiiCSnFv",
  "key20": "2Jix4MjkyzmXu4DnAEG3J3xa7vzzsCm1JujiXojyawha95GDATUjhBMqedxW6BQxFriHZohd6BmHFzacCJ8p2xbU",
  "key21": "4BxJBjbCF5vmP2gdiebcxf161sUk76FG7csgZvR8V1uaj71Q3gGaPCgmoUmDgn4QjQpAD2Luzc4DxVuE4VXzD7tY",
  "key22": "2W2c3NBXrVFFkZNNUEwkP2LvEk9oUoEcaMh213UqziHWwJQYsrWM6WDbeZZxZoMiSymJxDG7KMz2UDFSAyERW5Zq",
  "key23": "3qgJGxLXv3F4HwzYvcQkf3jxQNWso1UFwTADRJKHk4Be9EM3t9AfSL3FU7BoSRH2qhYCwgdfeikZQGaTxJsGCe8N",
  "key24": "4MEmkG37NJWwztUsumJGHxMePJU4zThv1vwPQfmjyAKAjYxiGMqDd16ieLCJ4BEQ7f6AjSXuz27F4QpJcGgYNNzu",
  "key25": "42hBxquwgXt6BuzSsxiWEmiYXB1hS1ZnP8yCSSUgfVLGwmboGHTUBQnEw6bhPrFEC21d61u8wYvp7pxn1DH1cmRe",
  "key26": "2ePjoZC2H1Y3b3oprnhWxQJHh4fkswtEhzkKQueoFjaNgoWkDzA6BsbfG3JDck567KbnWx214JDv9HG1hPpcdPCo",
  "key27": "2brZbi5pVPUbwYnLVgnVPtrYSdBcfZfHTM1jQYSbfu6WureHid46QtSVQdyPpkWM8CuXmzuQ5C4P9nSDJhSK687t",
  "key28": "eC9HxKFLeupWi4Dx6d3mTQ86eFDgKoDRpdZwfn91h2PURFtEZEGcAk7tDmBWGGKF8LpWQvD5qv25AFqKMD5NGWk",
  "key29": "rRch9tVEjCu1fEgZQF5zBVw7GyCbZf6wbMQGs8Sx2KzfJB4tzfZWmFZ4qx9nPgPUF1ZJBRrbmNbH9oLKYvPbbD9",
  "key30": "5whJPaiTj79ZxFu3wGbCFVzUuvKKjuctB385vC3xHN3QMCCrUDRfsWWxjB5UmRXAw9mtC8UfkSLwbDj7MYTo52EZ",
  "key31": "wbDzmixaoMmMmr6d9UWXvb2P4QMhsmk9RC6Hq1edYKKA2UWKS8ufFynRTXxqetSq4YhuBHu1ts79XXka2SXxNse",
  "key32": "um2bJ9P2rkmjmHFjNFbpCUuMwT2praofjdpoPH7LYiKrLx3EsdYxG4iinBFXf4Ef8vY1sdhamKHi73AfRohc6F9",
  "key33": "3LVE1L1Sr8cb6jz5FuXiEWMb563kXBndmVPNMy4xF4ja89zU8HxhQaevuxyHZdUSukec8UrYNb2RWqfpqzWCZdiw",
  "key34": "3rnkXeNmctE9JJJ5qFFEqVJWuqFY1JSVdkkxRE51TPHpxtp7bMHtMX9mSSQ2n5rN3y1JR7XSEU9SboCFPVJsjVsa",
  "key35": "3d5mXvGPXWsr6irtRp6q8fNvzEeAufDzwQt88dDErxoAh6QvLt9Dbm2C5B24QnrfYpGX1eSxGjWBAgBV7RPiBXVg"
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
