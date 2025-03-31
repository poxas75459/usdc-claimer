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
    "55wEXtMyMU9bMKa6yvtnPYFnJYuw257RL1LTxh6KfhcTQy9FtbJ3Nos5g9Nt8Fpn4MrsKA9uuqciwBJN1MPs4hXQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T3Z6WNubVmEfoxxarftrLFvhUzMLiUjTpdWz28W1LvdXKt7FdYKYVzCAfP8nzmCXySbsZJJmTSiGVrkgEBqrveC",
  "key1": "5D78atdZiEkihEqM7eoR7WCzdV6RWmP4xB2MxSWMMHrrZCWrFyzTwGpQp57Qn4Bdh51HVxjKnXZwAfTGZocmpYm3",
  "key2": "6Vgz4SzfFPUP2cDgx3T9oYs3GYvZDFNNycAnk5pqBH6qeCN3gMyXe9X3pp5NjuiZSJCKQmUA8T9ChPBsFzhKK7c",
  "key3": "5Xc8pafsmhAkezozaj5hsXAPds1jYxMPhmNBa5Fo66EJsEPRCfPMUJrLVrnoaJ3CpQ2q5wQaLm6GJ9c8QxBQLtr7",
  "key4": "4RQm5HmKDCNDUJZ3u61tqVfXL5dZenknoJKPVts1YcnNThXRYVcmx2UTnuKwYL1Tj3jzUUjZmZFVefGdwy6zd4j2",
  "key5": "49dFuinEk35uR8CLevzN5zoHhepm5tsjVnb1KFCccCiK3DQj1TJW3rg5f6LCbsNdad5NdQ6DzdqD3Dsizef7dHBe",
  "key6": "5thAnomvvSuDdtMeR3b3eLYw2eWKvRtVEakLtQnvLtZbSN867NBLEbKStYACyRHR2Co7aP6piuMLR3ZaatjBDjim",
  "key7": "2mdBrsSEM8ycEmAUikyhmrMNSPiNUFvyiCLMKMMLPNtvvuaraCer4FJvaGE7DvGa3MEjFBovsqPc34PitdkhLy6y",
  "key8": "3p26ckMb59uYqSQy3P2WtUboiLNacj6t5SqTRBLUzEjtfQTUdRVXxYQAEKaaifwBzn17wTgtx8i5Tw6akkTq4QbH",
  "key9": "mNyLXmaohcoUH2HHUBed37cLdLnHe34RPgdMzG3RwgxabxsJyfBJJx1JBciKnizfPCKTeFEHidEdcTB9BmhKzz9",
  "key10": "kdEztd3bHE5Dt2G97dVwHSy6tiZffsLLPPSiDZViE4r6Z9PQXxRwMzgYEzMJ8q84deuDzT5VNBSwV9VcTvPUkHP",
  "key11": "554PA8jqGkNZdSuLXqReQr437JGP9RbBmfsKSDBdMMz3koCT6qosdR62fJ4VgnSvPPT7haYaeDx4cgncbiN6WkMs",
  "key12": "sSUd1CGV5gUjwMfrpQpVoZsLgZzuACVLBEdun4QUqH32NpCRiKDskzsB48dnMijGsDUn3KGm5dApgNPQhjfiM2c",
  "key13": "5Ynu9MSx12iggf88wp5KJJoHz1ikuX1dVhUSMfGYUqNPy8tv1Qem1gH6dkNRGGCUjkvpfZv7ohLEF7MF1cuugkq6",
  "key14": "36YBjvHniwaoobD3PMheHDUYpBfqKVqV76YWEyzAG3BBEGPiDez8uX5n5CPLxmaZFp1bMfeot2js3bGJYPA7jUPg",
  "key15": "559AYfZCNvNJ8qu9qQoauKPBKY5JTV2qbSAoGJxrE4nRVQ9exzg6Pf4yYWiEwSdzbWYsgXzjvQpFGfx8DFTuEd6B",
  "key16": "3tYwV2t1qHQbxzDR4ZY9SVuiLiEgKgf7kueVWyuRHmNcU9A3ECqV6G9im8274ySfg1MHdES8mLHq5SgDFyCoEe9D",
  "key17": "igzgK5mUtSx6E3594gftTEhKc2jsYY32QDCPWC2HE3VxTLEBbvYiQrWNDaFHo8U8ZeLnKsZHyptd6n7NZfgGCNc",
  "key18": "3ptznGGJ2E3MCJGPaVXwDcY3ghq4DdascNnmxJWqEnZe4spuvm78WnVnC4gHUqciVWtxZDxYjQNcKgG2CtW1nTRC",
  "key19": "ne4Dyzp7wNKfPrR4TaT6bFbGvhhh21ve1t8EcVGD2JiDUY3uLybxdiY8iBBnGkBRrYrtX3QP2gZnvXuU4p2tzru",
  "key20": "4TKk86E7ruKMcTZWCMkW3DDF1gLS5QpSvnW1db28sjkNkoZUfTQoyGSVcUjFVmDDaoR3Zwt7NeJPUCy1junJitFC",
  "key21": "5n9YtrwqMrqskSNhudCRudZgkmTBqdyUSZrj44wx1BY8cLm3Je3QgUG3vdGzHHAga7ddKJDXkS9euGmjQLXGvnE5",
  "key22": "28D8JcNjyPayrWBBN9gXgHT1DDP4xEmqbnT1LuHT35163HgS8ZKEuojxEQtLdJRVa65oeQXWQ1G68ebzf3oXvDeU",
  "key23": "5vvtxenMdzksjkwwd8E4B5sMbmzqCxQZjB58E8dstjcErwzMaCyZt8UGk32t6T1A9YmdwvGYH3N2e9NzuRudgNrJ",
  "key24": "3C8oR4G7vswnzRbC6J1kBz7SZb92uxxiKYRpcgETZCyEMgYHYPXL5gmLvceNNFaXUXzbxAv7QbuBAMsS9hEucyE8",
  "key25": "4i9iTcxnTCABEoExyKPHiCJfhrnMumHrv2M18SiXUBmTomi1N38qzE9zimRb4iTMdmiURfJeuDypdMYxGchjkmev",
  "key26": "kDwj7cTjfvbNhyb4FMvRDe5VA9j4p3LFh31Ti3ydLyFG2VAgD8C1QsNEH2fyjrGrMmz6VT7ZCueuPTGLzbWQ5Tr",
  "key27": "3qJdDh2h5eCufqxqV6fKrTUh5514ZPrnD71ZVZUDeWP6Rgqf9eCkufpv16syY2imeyNGuMC4wwxG1BraWWcT4uyG",
  "key28": "5iJPGWJkjfYpDiFE2KhBX6c7nBzKC2VNifN9oq6JXn1sDKHgaEc592eCUjV28FkSVN5UDpDXQ57GcYov51cb4hTb",
  "key29": "S9Kr4dSnHZypzx6SaSSh67khoTtTQJQZQgdmFykEyGhEaLG5aBovxKM1Qn9QdiBQyp4CDFto7NmCG44CnmP7vFE",
  "key30": "2qnchVYaxqDLD12uCpgjpdWUM9yCQpF5jWjdsE2i7avXKgcGHZZ9QqiGnpnFFAxKHnV98nRYmY61xh7AZt4AYZ68",
  "key31": "KUA2jee9R7jxDpdfwwA5fvvSg5dvhE87f3HMgBZNkZodPVLJmih596TxEB6KPdUA17HmzKJ69Z4J4nMxuPZqEKJ",
  "key32": "4BwBGm5FdESwFp49Hfm954GE9kqToXtTPGqMNVYM1tx4LEY9aNRLZTpGJPc2mdfKPrP9dJGWQ6v3kWXi2JHHtPHY",
  "key33": "5XWDcgLR98qNqqKMm59ZG55rb9N6YU3BAToDmdvRNqLuuC53ejarNdr55yJQEBUMKzu39hUbGRnBKnEimyCy5RNb",
  "key34": "4RpnkAzmNweyNbW9hc8NkLsrcxcA57gNBMMSSH3y1t3atuzs2gj6Qj8uvf9UiuFcaJzn3V7JS3qeQMJb928WCEYN",
  "key35": "4wM9XeeTWwp6YhyJcABNCR7bLMncsnW2Qt1zHa2nphQmr6uigMAsqBmcytCMZFzrdL7h4qXEyPCjEU9ojkDCprpN",
  "key36": "MzcqFR6NkKZDucpD9Na9PZRWDnWBEQfJVtr3DAyvxmxMnNTkSFow2JzXzup7GsvchrFWafDtUS3A5C7f4TVUegd",
  "key37": "3HNp4hrs912BoSrv4sC4HwnRfrxmfWY4bRZLL8uRixtdUNj1NZkC4GT1G5Bjxs2SKq533Ks6osp8r8xcU66Ue1Cy",
  "key38": "3fCBGCAT1EDoJw1XNuUyBgKh4noG3ssvq2dpWsMe3oZUPYTAeZWfJdpfdaPs5cbb66Bp5VSMrcVpJCZoPRqjWzXm",
  "key39": "2JMrXaym4M1sRM6gqpPNg9ekKjjbUQcakTNmftMkKPHxZYco7oxVKyz1qHtquueGuqMgh4NYKnbMuS33mKE9QwGz",
  "key40": "p1S1a2CzaN8J7meiEee8vWqDYPcvMceUoQEchpewh1WfjFA2wFTNk5BvSoaGcfthUpf9G3TEz7RLA5hCDwFacm3",
  "key41": "RPeiYieh3cCDUbkTsJa5ebcTmfiGWCWqX5txqH2tMw57oYUtkwqLfmRZvrBW5n2UPYqyqYizNnieTeTfHjUhbKg"
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
