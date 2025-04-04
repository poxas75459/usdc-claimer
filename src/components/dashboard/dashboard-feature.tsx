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
    "5rjaCi4wHoSp55P9DmHGQqDRUzfsDGhmTaCbZR4bCxcEz9tUawM4t2Bb8f3UNkxY3gGLxe7bFkCkKDf3jzjbJUpf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51xmkCbGpaGuDF4amBEEzXEGeDnjgjMyBPkhc1QcVC2jd5nbaYsktWB6yYPM6xvHTKSeeuT2Pc1oQpUCkXPEN9Rh",
  "key1": "4PLx5SDsF67xB16LNzGv9aYwnJCVHadcbEhtFibE8pf6RoTNBKhcWrR1TV8LXRKSP7uEXDt8HjNj9MXnY3WQqFCE",
  "key2": "VwH7tf1Y53cj7TfzN4Rpph7Lc84oR4G3Ctfa2s1fDqtMMLD3odtiK7LSgRSDGas27KTYUz7BFGJGuVAVo48LjpE",
  "key3": "21HeJD2ssNGqhCbU6ogNKT9uQsJH3eoG6mguV9opQoLfrtEh8nSVshtn5S6QNXZyYikaFEpGvUYBq98pCy8Nek4F",
  "key4": "2fkoP5sCw1A2FXHgk4G7n1NraZx6CfcGC9FiNuZidKY7gJ32tJUeREdST88USJ4ELzihPzbRofmHrNzwqiN4evHP",
  "key5": "RWttqrgPYSu2aimnYLvi7TFCEPfsGsLRMq8eYYmwh459UDcuQw9PC9fbMDHqz6ZowWRPZouBpyhDQU3vC5jiSga",
  "key6": "3mHEdf8LdaFU3b5SAvtemmAFJLZdbeYgvUBtbR6TbAnMpw78NhJSnM1Q5jacEsTzBcGq96r5mTrz2kYbDa3GNJwt",
  "key7": "4V7TenP1tY8QLaVxehqVX3yV8iNyQoGVEpJKV26BwhbowmshZfGvhuJ9oxUcUQYwKfGSXAgpjDFyMSd2NxQweCNR",
  "key8": "8MY4qUNpUrcgjfUkJq8vP77LzJ6wYzkhzhYxL1LwzM4FBsZhDsEkVm5XMKTXHpq3MsoAkpeZPDYAcb3BiUSNCHr",
  "key9": "q7bt3FsUCWtL4L2ofXXAVMBANkR2goNR4vDzFvmffYUHrodT1yrJHaFQffxZGEXMC9RNtt3t5kZQvNu69BkTVt1",
  "key10": "3PxAjCwHaUnZ3bRTP1KMnbVC7y6UXXa6K495ssddJgCFz6ZTXfrYtqf2jdfFGmpPmdURZZcybVe4ywTqjHSWt7Vh",
  "key11": "wgP2Bt82UJhhycTotzRbNHoBYhWkvLC5GKa4dpdYFcfkFXAXWthmjag7ur6tSoNHV4jXgZFUiGH3jpq5RDECkF2",
  "key12": "2P8B8Nh2r8oZ1KshaTjXurtjuNNMdE8pEnkhFH8VEBeH5FCV3AiHdsLDKBgizywBqi4hJ8tTNMoyZfTMJsXSPr5s",
  "key13": "5n6SaVcjciWAqJYT7FZD8NHHYemMbrYah6wLC2cbLgoQ9KnSE8owiuUrGWtUGPPCEE3w1jhFnnB2AVCse5wkgHij",
  "key14": "4QzHSVidu23YTvC2AYtgdtCBhw2BBZyXGL4sEGCND3bZt7yUCEUL2tb1QndAT6qcZBZEQrSkHbgNUyq2UcCJ6SPi",
  "key15": "JNWotrUYQSTF8uM1VE93agr1ShLsDvdnsF3DEUgVEYvqurWi3tDviFMiR2rX8WCfDzeeBuqt1sMDgtNJay11nZZ",
  "key16": "5WLAMzUnszxerzfaAMJrHfgdhzkpnp3F3HVZpRYToiutftPDTLXqF3mWfxNoTMZJR2btaqrmfvRpmSh5Kkd1M3BX",
  "key17": "WVhKSQdAeAkgheuPhecZVSLDsgYAc5nwuD1LGxhQrQezf4bFgzQiX7HzMDxxukNFoNiuw56yJQbvQSEE2efv7GA",
  "key18": "4KsNUY4nvkajphTbqmQH5y7kMiri98TheSpFkmHN5vLbVj67hJG9QbFwmktvHPJcPguiBurFEbfYUZt6Z6HWcGyc",
  "key19": "4euV6F6fBZVYs8dMFKrkJ12Le78VSbi13Y44Ln64rJ47TV3GpigEFu6GMXLQiQNEtfVS9ygKDuQsr9wpmkF4rJW1",
  "key20": "5fr7rCXzLW3w2gyt7vGe4JDYczkcgPqaXBaneMiw92BxH7r1t3GUvAFZn3fvFyQQXUx4jFC7wFJXutHoQyCNkcA7",
  "key21": "22hkRywXnBovmcXku2r7wV57eZAXmr1FU4PCEyb4kB5AEYnkLfRuNguc2fvktGzUb1TJgcVYfpZ5HBZVhhbbgHRy",
  "key22": "5tSnXi5UMVoWscpZMU7tx6zTmjsqTCWVUAbL35aQnubisgKA9fjP4CEK5wrvgo42hfymv1CfSpk1f6VT1LfWCwEs",
  "key23": "3Harj76HEbuBkVodGRS6M86CTegkh6PL1i61NtNGu5SMxuw9dfeS1X3zne4y7m47tsmgU5BtGjMvDi5tovPENmb7",
  "key24": "5dDrpTGBvQYUBm2e6wWnkBxxVuH7TriWYKV2Vwwb3Ryi4GPzTkxudbzauMAuAcSGhZ4YKKowBBrWp3wiBmg6mwPM",
  "key25": "S5u8Nqagx6gZvS9UK7qztHgtynacqcQZ5nBJEioCJAg91KL5JBpiWLfQjcdFo1jWk2NCFhVe53HfKmaVFkfVGKT",
  "key26": "2ymEr8MWZAPDhH8DSnR9PvQpNT5CRN3VPPUcKaUkFAQcUubczMCGY8LTs2nJCbysAcTusdH6sDi8NhNu5RTmUpzD",
  "key27": "39wRFSz1X1NnHxNZLR3ecQd927mqhyDxsgCB2Lqhts9QRzmyY1HXGb7hocKKBgKWgWJ9mzyZETPcxDnqZamrmbqd",
  "key28": "49Nt6xeQNhJV82NYd69mymQQp2DgRRaVA9cmhW8yxq9FZgqEmD3SD5DG7aUVvLvnWZX5Quex5EZzQqAvDmXRZWKS",
  "key29": "2Hmb1owymcnEAiPefL1DEba2roNrS2Z2sZ1N4vya3YRpF8Sf5sK7L6od5S87p82eX6prYRCKFbYW2Bq9zzXLTksZ",
  "key30": "2iPxL9Jwx1o1ynA9pfZuXaSLPprTdnNcCnkzDoszzshJqy8LzhwnixNKPAftMQ1oY4YtsGVL48q7tkMYVzxahZbe",
  "key31": "b9AszwFfEgd3nZFGJvWK7Dvyz17TUgtc5qt5oWySAy9KNpwQnB3TaUvxKuL8VjAZnPJRkmtgPrRj1wxkhtMQNkV",
  "key32": "4qXQ8jr3uDYs8XaFNMgeNiFhQa3tQAmnCexJz9yjqoQXq9wZ4YJbRLcbvocS2Po1eQYH2YXQy9RKsoE9iEWenfTb",
  "key33": "55Fmq64PHBvJGnLxKnMqy6Tz5q5Hjt66k9eF1NXXmDJoSygFodnsMcKoKnZk4FNjdZubLm4FjXpqufFbTdGmSvGu",
  "key34": "fsz7tRxiNUt58aSt1HZFssp7nAjxBSp7hnUh38x3pVq55fUmNedtkusRJrJe6MoCnRdKcTkyWtvFKAcZrFEtGHt",
  "key35": "5fwZVUd8HZsTeHgCK1nvWVXsaFJYxMf6Q1FYKMDnyyvnYfTxdxxNMxGRfdBwXGg1L9BVx44F6hHt8bgtn4Yxq8YL",
  "key36": "pAitpqHxUp27zy92taGVn5US9C9imji9oR1R2m9C4ykGh2EM9k9jKkEK9GWf8oEg7Z7FhbmGS7aAN53iBnL5MiM",
  "key37": "4d7iQPVSj9wQZfABqGr4i54SZtmMyhmBRfcqEpukR3a8YoJVQjeRbH6jk7GTwey8HN5frDmKCb6LdRWSqs65Dpi3",
  "key38": "aBoGk2h2QNGPnL4o6U9aJZkDN5SXrXHzH6Bo5C6R2N9esc4zqedUhytvUwyjQF21uasVYYDhPyft5arSHCv8hxC",
  "key39": "35TqizBMWkiUPn1Wq8WfWMyxi2eoaTSytAUrrHZZ2EZk3QLieGtk4r25LZP9X21ez5PiMYmxpVHJ7SZM3M6RhaUm",
  "key40": "4TxG45QfjaGRDQt26Y1TybS5dZ1Da8y5xTKXkQN3Mts53z8cad2xDUnJxceHeYv1TgcNj6aYBmy114D8nbfbGJrH",
  "key41": "qBtKCA3vfXN2qFXzjc3UGHyxLs1RSyRKQKXfQ2oNN5bqpC5wd38a11c3hCx5og8fBEg74qdfajTXC5X84vwkDmq",
  "key42": "3Xb7TjCoU85mN7DMApE6vbh7BZpzSuqnu4YR9HLM69531nhkV4enp85scY7jjH5P5zqgwJXT9A5BCkpHmbBcAwmQ",
  "key43": "3g4bZVaRQdvipbzNzzT5xwgqZRahE5ixfVTfe2L9cAPsaTUrD2Ctn1WgTizxkuRWxHkdHDVnjLFcBtQJ7k4M7Co3",
  "key44": "55cZ5pasZzgMenMNXJ5Vb6q1qxnwbQZbsw6GkWUJTgMhH4UPpvGS5kRNbCqdTxoTnvT47m1JbqUtnXw1XRFQGSix",
  "key45": "2gHuHBVr2NbbRh7JqU31USEnMfeMdtGs2hyLUgfPb85aUiWna2paLLZDP6KfF2zzXBrBDJHH6JBUzVLArTMp2ZoJ",
  "key46": "5KXvninr9RVZWFY9bDgsyJ8oujz1chdvnjJR9CEmWDp1hLkPrKy4jVzCNDY7SSF2CqxcZmoLaHgHQDhn739Zj16d"
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
