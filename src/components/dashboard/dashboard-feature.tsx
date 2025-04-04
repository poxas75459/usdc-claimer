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
    "3XRjZV2DDDg9PgNANpJMBfSd6gF9BX2mnaABqbKyG2h9Wniyq9PerasjBpRr9oauPDSPCsp13zEvc8TsGybwY29T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rsw85a2zSiNswu6cMLev1QcVMdUiBFMUiMkrpQERowoTT4pUFtm82LRnrY4keVdDKYzfH67SiAYanPUvq2FFFVr",
  "key1": "4y4Wym3ztvGEkmPZEhZswvVZuDs94iqZurfo9KqLaLDDst4WSKkfZTYSJi4yCcLge8rDSpKN4FPKckXdMMj8mRsP",
  "key2": "MePGkCzw8rXtMmwXLpDiMmD741iWRaUwiAr7C5mr71PyGxy8UqHfrLwN9F3cnXoLudQMtu7VZJo9z7w3ra9tLtr",
  "key3": "5PV5wq7kbicRonj3owJCUeAd33cHBuBXakukgTm1FTnGU1eW2YXxE5evRXpEDVsoafjFqDBE8DdptMm58YwhF71",
  "key4": "5uDAttPbuoJveEuHhGBXUDCYXYM4StwYW1DosQva6x5HTv4USecL8QBGKkiv2jUbWW5PP5aU6tH5ChbrpCWJhN7m",
  "key5": "5zTNUZdT6mgbBt4BQWzJ3E3C528tNP7ZGrXgnn4DMm6KEpTuZXtjvtdpjHzqrYMEAD8mwKhRXigdwfPsZZ8uAPUV",
  "key6": "4xMSGsujLEjgYKB1Ca5cHDo1XcR1iXjNRx2Upf7WQb9qg2GShKa58tEQdTHCxaXfTVMK6g2SuxC99sfUF5i7oXXg",
  "key7": "39s8SF2URviepUkV1y86YtnRNnQPJnqWsmE8hSrDxhubVMVHTndTKTQMwa2A9MmA2fBLUBJz247i6cRckw5RXs45",
  "key8": "5FfX9gN6poypt8gkAxLiznQSZHLXYxdgytYsRgBzL9bxvpmqgEpDPcCSKQmpvptMjw7m3ym6JA9fcGs1LTzDG2Bw",
  "key9": "243xMpWyu28MWcCNwkU2UahCfD3w1kneKTgjKMLZ4nKLQQAy4nMTQwBrLVBeEZHqiLrRzFvUaVfqgz67kkcQobaj",
  "key10": "8n4MPKubLSTkPjzFDW5pV8emRnAJgEnoJKbL1H2PSupV4Jkc4SZuxhu66wHGJmm2LLDDwtoNB36hFtbWFjyuq6M",
  "key11": "5u6xtbfm5yP39jfivcKM8RcZ9zE1ozGgc4z5nXwZrJUagVkvRpU2BBZnSi4mjUPTFrgU4NgnWKzCzfetb2ZdosE8",
  "key12": "2rntnNTdyMmKFgAWzFWH69AqPVynLAzht62qnn3Nm4naMtomobxM1MyrXV3EZrGKyHDSWjZ3ouDRDb6xWsq43xhx",
  "key13": "ugycKhBgWnwKzFoAiRk9s8CmgyprPMHy5EKz31MAfwFxdCMJ2qJ6pSi7P6NK2DhsHuddhSJ3it8UmqSkqzvvJZ7",
  "key14": "tjwWrtLjtHEMYbFS4cmXhxQxujCei2kocbM1r9fRQJ3j6jiB9dByByrRxadxFxnnEtCCJxpYZV8KwPoHYXDx7FW",
  "key15": "sqhqpzNVUSYCyRhk3ghrpPk2buUPT7xVjfC9NJgFacWXrwHeAW6NqhHqY4iXqKemQ1DtZggvBThw8PqAjMtmaU6",
  "key16": "3A8huKXUmQgrNnHAnJa3p2rTHcVjUVC6nakCUbqJP7iQkkmRgVyxES9oL7gLaw6SAYX7ygBrrx2BNdp2nf46Zq8N",
  "key17": "5godGFS3pLt5yaqsjdU1AHp93N5BVcYCYHMKFSekArutxdLSswiQo4yLL7DZ1W4TDm4ovF2Unpv87TRyERYYmgcg",
  "key18": "24kaAWspyha3SK7n7DASWesyjM3SZCJ2KQsr79kz1jYzkWduS7LXCQUfe49MnqSbUQfQfrJcPLubDFFZxtULanvE",
  "key19": "5KtsjJM2Twopj3Mg914iyuHJx1qsdXvmma1fVfNLCmnZCmziPzM76tGZ8S6g6yX645g5xUayWt5trdM89RLS4xHK",
  "key20": "5g7CGXKHxKNgHxJtPqYPHu5GwEm38xKayJ9tQTHggonhgrTG9n8kimd6cSYh7XcR3XH4DnYUa859okFQiE2V27wX",
  "key21": "4vtDe3WEh7Qm6NCEsPv4rPtQskdvAWM6Pwh2Hrrk2KEAFEnRvbXeBYmFVLEbJfytqFxSNoZhnPhd1hpY8XJxQJgY",
  "key22": "4NagWo1FtfAxTxt9bhZMWoKgNw5iKh4v8ZubeoeSvwcSViogiCtuAoy2giUNXfPmueY7KDQgukEQvdo8nwmBJ3bT",
  "key23": "3NGxezaQVPALzA9tkXgwxKTUTbDfGXxtpXeXTvu6xuJ4YLqsJ2a91T3DLJWYBzZda2tRPng8G8ac8xf9fLkvCVcr",
  "key24": "eycN8mdFsxS1YHsvUE5No6S59qShdKBQ7qsNcYgP8mkySACodscHZaomgvth7ckNNopJwvc2CpoaHxpeacsvrLb",
  "key25": "xUvmXiMjzgwKphFvVwS8JipubfePbRrGonxNA19QcoU2cbWsxcjpM5oyr9QaW1aHTrRvEAr85RGDRzZCbcBRc4P",
  "key26": "2Szt4vCQpohZyjfHAvVF6R6zqGpMTDVwN3F8nroTKhf2Pv2W9NXJ2oeggeGGdrxsSRQLrXhaNtL9Jj2dSk5i7g4T",
  "key27": "3EsQSqePovq23VTr5dZUhmdF4rjwF5Hvqdbc7NqJuZK62XZ1DUQM65uFwmJCDBxawac4RfBqTCLxtq55AAjVTsaE",
  "key28": "Skxk7HXaArLqrBya32q39c6Zu6LE3NCGgVaBQxib81NJJbDUt4WZNy2ERgFgQYPzvHX9wg1YyKprq2vdxgS8Nuc",
  "key29": "3W4LUSfFDXgegQyNVECvEEDxoqQcXV22HdkvFLVGUDfRGLVkCKkz5NcRVnmKKiKLPgubwUVGSiSjDfUVvjcKiJ7D",
  "key30": "2d6KzF9nvNGv1YVAF1VSDVtiFAYPB4xpB3PVh5gQw62yviMJEYjXYc67PpP4q5F1KTJRWGN9sSyzRfySzyerhkaa",
  "key31": "36RnUBa9rdNn6ampFPUMHQyeez1APHoQz8148wjMNDsQ3M4EB7edr2MBgPjhkLrhRMg8j5jEe45sE3XdLUuW4d9C",
  "key32": "3oUmeAbsh6e42KSCoxaZdG3K3qYnx4Nw1PFyoRzPVwH8czu3jvEFQt3KhrZFrYw5HGTqyTgZGUYaAJsjLiVKwamY",
  "key33": "28jUzegL1EsRSfXS7sU6LizVSBYBffVYYmZqKu25GXtiyjP4g1bXkjKM5Hxz7ffgXZ73kWWcvXGCubN6ytZXQAVy",
  "key34": "3yfg1JLU94TmNKcUPxN6yYPMVjpGeJnjAxhBfNnVx2gu6a7TGMFD9PbPjDjEkUQHDdEydWU9g7AepdccQwDSrKTx",
  "key35": "D4RCmimXH1gLQY6ZX24L4jFAs3U2d8rFWfmAAGzNPndzFttvsHsi2bS3iqESYxF1m4mAyjCPpv4NrAViYC3BTkU",
  "key36": "JVsevje46SJ61TN3NSEzmvdT9riV1h6NDDPZf2dDQ2EMxgMgwvzcJEo7wYbae1yRiCBvfGjhHzqqUiQ9M3Kkoqr",
  "key37": "t21FcZhMNTu8vTEgACk5usrrCQKejRETCFe6fhzsVMx33X9Ar2zbBvDbNAF3RBmhdJAQNsT2NQDgG5n5hhU4RM7",
  "key38": "F2V274HiEzYfp8PkVxywxAjH9Sv5sEsXxqro9NjPZ48RXFP1XguzFp7LNVp26PtjtT2DWKPzNYTcReDcy1vAebT",
  "key39": "2kCePFscrhekeHQzotd678j3Sa5TW8Ce4YBS3R8xuVaLHjwRse4UmgauR3rbLbPS4gdP9PeXY1k1wptp3aSzF48f",
  "key40": "2dFtKFncYyri7d4k9waifU5tapw8j6Gxu2kiDMWETcEedSyuzaVUKxVKgR3VZvS9owy9dZqoX95rsoCcAUkPjsN3",
  "key41": "3jU7LgoRsXc4V5ntguopFh3VW2taTrxg1L4DpHWZSZDT63Wqm4Ah5td5xAWrW65hX66Kz2kL75NuhFtWZrc18pyE"
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
