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
    "5Mj5KfD5Fk9hjxo2SVcZecfjFsx5CpXxqeQ2bnDBwF2txtkyxwfs1TDofYVSeF6dCervKbtoMzviuSZmvjwVosyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9SwsjJDXNwNVV5PvfM2LFHJnrAjYXkfQjojcc4fHSCzSwrTrEM5JZvL5BfkctyJZdWEVFUqwdnnBY8uRL1RNzQP",
  "key1": "3aFU3GUdHFFB8gfGDAdHmj3ipaBGDkeHzrADxYfSc2KQzCQidDyJEhqRzLZb8kHDDQ8s3hppTzLgSDiFGuH8TkCb",
  "key2": "2srmkDPGyLWro5ovc9sQKxJcXwQJpRdF7TSDqVwvSCnUB1eHeatt3rKMN89AaBNQD86yCNtVq9ho3mDM6SHQqDSP",
  "key3": "3NdykU4VUMcZRszUSXbRfVAy7dAs9dt56zpSCtE1goodTtpAzC8kwrTBUJRSHuwEK36qR3zJKbawENfT2BXGNBi7",
  "key4": "rwjKbKrQYgkVn686V4oTf1yP5J82z5NqZR4jYdj5CfWQpQFPFUak6DNJmz1WJXfWevjqPWZKn6GKt63Q7veca1j",
  "key5": "3xneDVswL4BvHTJhVQnDyfYBUdQ2Hq6AgkTVtrifhXKdNiUhzYEqWvyGTKAHiptP9Uk1uUpwTHauxUTKM3hguW1J",
  "key6": "5opjq7vecabSjiQADonfqyhHrZMKK9p3bJ68M9pYfr2iJeDoVpzjTq3v4yrZBKyjmkuE7PFxc5nQJtwzv66C5PNN",
  "key7": "4kb9VZe4bxxdTxSd9EvHwMeLJ6tLN7DE8rfE91cYN18TovzP65aDHjMT2iEvRymn7L2VRCPPUboBf3Ww4P98x6Wk",
  "key8": "5tsxf3z6jfiKHXsn1nsbbTF5nXzh3YQaXm4PT9cMM8QvFStHM7sA12ErR47xmQGNmAviLS63mpmnKxPtfABhhDir",
  "key9": "2NSFYNfve6Fd6fmJRwiGoaPDpv9bcbZp4teFhbBRLk5oJ3YbHJX9hEvAwXRQz678oTMZNEezFTybNph4ifRXhprv",
  "key10": "5csyZQ5efNv9pKM9vZFNaXmGe8oK488Ziqi6EjLQYFpgdmK1KUc1v3BCzVqPpwivQqcK2VeFrRB1H1AGUdgHhJzG",
  "key11": "4txe9xoargeFz4FYYAWMJ99Zz6m8MS8zZa7Pqsnd3qtNKkMUo8Xb3uDytirQruZtRh9hAfBYS6j87PGX2vi6TmEF",
  "key12": "njC41VpLiH5BS8XMtUExhozfHBgRsLtJ4rrjA7ZBuv6F9baiWLkBUN2F2GKH25FyuCoBkFRgTmsuKuxHfPSnxYq",
  "key13": "66nC5aKb79aDPwrjiLNE3hBJL7Sy9ejNmx6fiKXupkohiL9Hdj1ezvNRdPn2e9DBzJuYFi26czHc734QAzUmKjz8",
  "key14": "2iaPTpkYt3i27CKtiCLowSLvhtzZE3bgSuA8wCbant7TkH8mAXR9qfSX1kRs6UTbEdAnfkU5XyREz2Yk9ds83veJ",
  "key15": "3xRubwz1jyVTSt9VvFfVkV67yLowVVnoiC5T2u2FmHgGYN1XNPFXAxvQh29pAHHqf3inxm2F3Q2L8XNFk5rXBy42",
  "key16": "GNcDmcbMBR5ro3AEr66C93Wi7cuSir9aLtyaX8E1FmoHGD8diebbixkeCNxaTCHWSrxEZ624iZCe46GhWyy6hF7",
  "key17": "3GyBTvr6TJVo1GbsRBg16dWxxQyzLvoM9bdMfoJZDtR6Taorf2VvxE18bgncHLnJz53u4hRVNuNwhHVeNA1Bbv2v",
  "key18": "CW5cdSi5Vu1uQCEEGkgm8xQk2Re3GqVPedPQRUQtuFUcHrcm3oq42V2y1r8n9YYShrzZ2i9HvJYMeXb9F1twa6W",
  "key19": "4FGS9gdg6hqHtx8ejmKNiaxpg6Tb2TYyUX9iDkCAqiELBo5fQjDmZZ3NpQuni7iUV2HcjQ6GPGGCKAoRVfhBQUU8",
  "key20": "2rMQ66d8XNZ6FqqhsyniEF7gyJCZ8odJPGX3WsDETK4G8fF5kUAJK3jZ9FGXqxsmdfeqDKeFPs4DfMt4wfCHALrG",
  "key21": "rpzouaNoSRPGaxH8pCe4YDS6BVBDSJrLLCbGXj51Rr7Nt1dN8ivTQdyBrX3pzzSmPzBNkLitPN4oMvJFsXvPooR",
  "key22": "hRa8wipxyRpNkMwGW5TYyZ68igpu5dfK9JHY3vzqFDqGGHhLDKt9HKUGXVfmS57TxS6eNivRH4SwVMfsAXBMGid",
  "key23": "4kRMfSEM24L5CCmpZ5cEG5shTeXotoZtX7YZ2DQwWbQPGTTgvF3ZjQiAMm1w2VQCawe71nd43DLLNGCEbwp6kN3K",
  "key24": "3bn8C499gtAMi9T7SufHgkeSCbk9vrimKDcsfxnKQVgc2wrbAi7wt3GgRobBtzYVYncAReS4teuZfgyaMoXFB6Vs",
  "key25": "4quyEeDSuGUoDhm6oiW4papxYJY4aTaBBZFLjNHArKBpR6AYUQ4UCp4MBfvFmFhNwDVtZMqgE9M4k985fB5gfhui",
  "key26": "4LAUtWxK5cefv7r7kFnvjRczB9G6FE6YSkuzoreQbkXXuRC4K4y4DAk69ubxc53EYsMzM8gtTgxJdo6aDjBbNSjJ",
  "key27": "3gz9HEeaC8p4byPCTqXtJT1DPmbtdFBGGe1ZmTLD29UsiVvcM77dDy9CBfdiEnFUb4nfqoY2aWBZZrh3qSS6fPaR",
  "key28": "55BxickNbdXcp8dohiB2TiCkE5fGGv3zeHo3JWQw2Kt899Un6SHiBExnZTxynYRukaoZwvnjyatyCUM53Y5sFHfb",
  "key29": "2Lyg93N9d1v1zXQGq9MvGyuhoSiGHWwJS1xwN4JdJKJ1qssUE2iDHSU5RuvWSY169SSKRp2LEkznaKeYKvVNVPsW",
  "key30": "5yregDqPyUZwcLdeoyGYakjiE6Crs8MC2PWHrmGyeYkiYZgaQe2oVzTawWKxkF4kpETUWjwjqmihv9a1phZZSQch",
  "key31": "81PqoVxNmdhxdBDtSp48bBmUvKY7WVv1XwrecZmZxNCy2WzfnXdQXNjK2qxfj4cdmFoHWhC4kmXBfrdm3ZuWPz7",
  "key32": "2gvGaBfe1n1bFtJ55BN1Hk8U8n1sj2yXWzZSJaRhrJV52VvuhBZ7KCYb9NkdUDDo4BVPB3Ge89JRzVBGpqdK1uz5",
  "key33": "57ji9sjQMX93JgQPZnDmKZMmGa97u39FBca8M6bbRHx4ieZfHYzg9pgWEAs6SYMZg8szeXmdpMJAs7aSLxSt57hN",
  "key34": "4EcBeTWCQn8eYboAMcvTQbarcSuVvkgDj1easwq7bEVbZZUpHD5VTG3ZY8Ac5ySRiZMUUJyKh35HkzkN5VJbEdbE",
  "key35": "31zJXbGg5oK22DD5Sy1WGUm49ft9KeSRp95tEqdWK6SLFt9V2p518T8PS6jCvQfGAP9BPEsmakcp8pPTxnAXpBrX",
  "key36": "BPprjRCRjtXQ3PH57cvJhEoFaHa4xMQPDrA25yxKyVtKStfFF1dDpdU4wkvqL23rVQargKABnoiU5qGzojcYghD",
  "key37": "37aAQahyqy3fSUM9vVWWr6PqdmAcwkoD6azit662XnqLQQBr9kbjEfvKYL48KTVo2yTPaPk4yPkJtp6jvucgxmmt",
  "key38": "3QKzN2ZXkeB8VBUAYL1TbdpPZgwu34zUcVr9LmGjtmm8MhHHUz2475Y2u91jnPyF1wiqyQ1McRQdRxfMCNfDrGFV",
  "key39": "3qnUGxebf6txiUBAxwS5qeS9h8UWfJM8fPzt9P8ND9nhx59ccuB4XWEB3LtKvXSZnBKeHxLCa3U4DXRhiz3fCQm9",
  "key40": "39mF8H82487dUYFBa82KuzxdMtySizNQ16k7DDWm7opQLrgagfs9xXbQwPP6fFiASMvc9cEf8DnwUCtoNJADSJ5F",
  "key41": "5kbGu37iWRUXUPo2iKPZQkaj1MJHhPrSahkyehaj89fmw2FDziJxdBrRW16BoExaN9dJd4Xz4wpbLG55FZqV2PLK",
  "key42": "4rSkwQVENZgUwV3fjkKYCKioTEtEHBvj9hLTmfcmBNGKWzTTKR7VH2HnUshgs8YQCaA9gaQWPxr6SDZTmE3tSauB",
  "key43": "3ukspghjLHYoUwHoua9T14joVdfrMbV8Uimhiziiw7SFodVv7pxsL6MHF6Mt9JzBr8qciNHbCwWVZZoXSwJtADm1",
  "key44": "ebkxFDVPUkeHbEuhzjY7WXuW7UYRFnmtpjveMZwmcmnaPuWyLmWCaP9knxNCc3jb7FdXEkek42qJmFeGEZqUjdq",
  "key45": "4XtSoaKpzyJK2xZ2DWMtEvNA5dmTgUykCvsGLANdMJfmEgkqyTLmCf24vCNSnzegMgpFxMVjLPMQm61M3LCsf6nH",
  "key46": "FUM224aqNZXYMfT2f4yaMZf5c6SZHmfpTPtKqpKiNqXicGjKfnfNSttf8t2VqjJGProUdTe8CKDJqPvJPfpQpsJ",
  "key47": "3A2cYfqfYXsB4Mj7jYXmPqtDq5ss4UfiEEuQEsyUho5fzzmSPJJGTuQ6KSNpzRQhXgTjMbkQkWmvmxwhMG4WCHJg"
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
