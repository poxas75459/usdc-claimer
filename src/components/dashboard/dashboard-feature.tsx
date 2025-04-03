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
    "5Ac3rLcT1AxXF7rMMhdPP9DU2Kz9XcPDsy5iKy17dCTWfuVXF9BHGbB4Z4F8MYxPTTpfcxF7jt3Q6emxEDTzYHmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hh3CXgSyeadchBWYibf7RjKrWz1jMgBF7U8RbkezWiP1MFctsDpzKPQwfSHDNnxvcdK1rCTLPsB5Kx6CUi6kKKh",
  "key1": "48qNrkT29ooLrsnKGivhvMTVqNPmVCfUYGfeZ7yVEP4RXHZKFnXXeStCnaSbicWyP3WCDqSdFKG46fGU8h6QcvZK",
  "key2": "5gxkcKSzec8PnqRKLcxc7YvA6zUj3yZGuAKj63CZauerWynz36Pcg9NXPjysCL4EAzsEPyg7xLUCcPphPqT9asBw",
  "key3": "4pdCZsSTAaVdqEXDJqdTdq2NE32fu6gSyB9ZK2UhqXkXGVW8srHcXU7xNBjXtE7LYsZQsxiLRwj5BqfsNXfcjuRY",
  "key4": "5D66SCZG6QNSwEsTPUdzb3g43XXGsozNFUcMoPRF4V1aQbr48TmGJLrbuZeQDqm55c7pz11pE122uAJbE5nzibdw",
  "key5": "5YFi82PWNuNKD8VrLcLpCMdy218ngDAcdReaUFamiUwD6eSgWLQs5mnvYtMqvJ4qiMdiS5ttvobpFcG4FgWvAgL2",
  "key6": "4jAbjuyQvdAsjuQK34d3bqfg4eu6CLxtrtCx7R9oeK5iMQ3R9Q95k5ufVj3PKN3SjrfxLBSpFE6or6SRn8aEsHb2",
  "key7": "52UTch5SzmiwUUv9oQMhVrFb42gjyoWKwo7khCpiqxmFCT4wc57eZybiqrd1uk8jv3pec6imebsW5ShWBKGtBXCm",
  "key8": "2kSigSLcgaYXVpX18NfmERoomuRfwZLQY1cLE5Z75fhSXNttXdA4SAuUdy8wgTg9MKiPhmXxpWjKxy6ZZD5c5pqK",
  "key9": "22Zxz9PkpHhCavbaVENq4UbofbtZR74tLs38TYj9TGKfgstWtkC4P5jdGJFCpNH98uhdJXwjrMXDHJh3Z6RkB5Lp",
  "key10": "4h7xv37NdbGAaSZFM8asnn2w29g9tgv545rkRWrYq66XGKSVQkVyLtFmdUBAECnpymvxwYqz8o1aKotvxkjvXgHb",
  "key11": "5F3tfiVXG8LxatnYNkxrQgRr29qZWLggypgGHHRwkBNgFFVwnLAr1DbMWDzeHkgvD8zdCSPCAuV8Ej3rkwk8gXPM",
  "key12": "2bCF4as2jt5XfxbRHTgZ8QxMduC9NpUHtLEkvang8tFUkjQnAtXo1xM7t8j2ed7XimAv2uzdwkoRWsa7sckqNyyM",
  "key13": "3f3Bz4LpwNM1CHyUmYgdUZn5sSixMfacHDANCSnpy9qnQwfiiK2oXemQe4br6FihcdebmYek4nsBSFCcZxDzvwuN",
  "key14": "34LCz7CF3UPWWwUAr7oCdasByeZKzgkiBS8U69sffMciEGbegc6LwbyTbaU3Dmn7Y5apgp8pC9MCfComdHouR2NV",
  "key15": "2wRMJruct4Eqmt9U54qzgknjVVDLYNKPseS7P7krY3YWBGj4ozyj1aN5SZnoBcxRUB5bytdrdUMk3carudT87ExJ",
  "key16": "4rUQWBT619AKdchKvupprUAhPCJtKp6MsurogSx5ywfiHvM4cWGhWGZJxoL9asMWz53zXMSx5FTMTEayJVP4J1mv",
  "key17": "47MAhkvUtXAk8myiP2EUuvYsPZ7cf8Dr64X5gmsEkTkrE4ZSac1nobFUHmTCwTb9Pbb1uYsrjEXPkt79LRMD1PDu",
  "key18": "2xB9vFP1BNuTbqDZ5MMNLM4c73dQqksZQfDWbVtHVeUF7VEtKv8qVDXj4b1QJsQhja391E1mAcU4528mLjAPtRJc",
  "key19": "2aaVXxPCn1cEwG82eecXcSNyexVqZgPYLPG1i6W74c9vvsrgFmnc3UQztUi1Jyrvpgb24pRTBq7XVavHXWVJ8Ls9",
  "key20": "2c78d5h7ptusmtm9oEAywPcS75pbm8hkYPiB1Jg4zfdLqqTecxNdnZHfitWQLHYLNjbGB628kgxbqbmS27D4R7av",
  "key21": "UkHKz7uBJGRCCKjQ7EnVPa4tRhqXCrp8TndA2Q2eaKLVhA7KnFjHXGEEdJebtexHrhSnvBR7ssJ5nYT9RKFzett",
  "key22": "1uappExgiYYnzb3e3oUmiePTzgwUgRccKgLvm8iSaSGv74Zcp9a9uNbF6bFuwbz3tKqMmaQzJxrvxGBtcRhUvs",
  "key23": "22PpRQha5NGtwd4xRL2j9wTnBiCrh5ELLeNNF1ZsreY1bmHkdsQ6QFtPTNna8TXWxdW3byy2J37KiHiiYAomqEJj",
  "key24": "hjfn3wubokgypjMxt6qrhPAuD9q99namnFNWiDuyEYMpLv8cX3YZxZpZ6oZZwr7q6ZpUmzVkB7QTLKLaMWraAeM",
  "key25": "2P2wYUm21CLVXPDBbw3WGDTUV8XYG7i3CwwJcjxv6ZNKmmFfqCjdCT4dLUT75gWDbGrDgu2MzsTYJgvDHgXY4B6U",
  "key26": "4DaPgb5i4v2ELoDe3qaUCZp6JKn5RpeyW15eLZQ2FsaQKiv6WaXg2Cfp3nRsNYXutgBeXN67LUJH4PM3qCHAKkbu",
  "key27": "FMwC6tXQyoB9VLju7u3Zsz5imGNRZ6eVgJDFL5izMis8mtmMKLokLiPhZdcMQ3uL18ym2JhzYff7cBvmfrD7uJp",
  "key28": "Ew2o3a9reHPTYtpJyc8EwStBMGuESojgX2ByLL9jDPLmUYWog5U22jBLzvWXXCZoHrffPDEW6Jd6aEJ9U6dngng",
  "key29": "4y2n4Zc8pV8VGxhvKjWSVyRUK8ojYbLpGgyMkv8aG5st57zjKGrXfJW37GrJV3feDW1JLQ8YJ4WTgXuViT5w6PbR",
  "key30": "2S3UtGrRu69S5tbzp3PMxkCNnXr9otry5X537g7fZf7nn65vYTJTNobWoGBtCp1SQaT3qgzQyaNZty9Q8LAiRWG",
  "key31": "PpkBFh68MLDuikEghkmKznNnzYgGF2mU67ABFL5p2PtU6UgBvttXvnpuYZBxTsKqPMFM1vNXkZWZpaiPHnVE7EF",
  "key32": "3F6an44hfu4FnLB5UgxL4N8cDKEKG96MbkxCv9U5nf3N3gcXLTwjEB2QfKGuWp8jKHFf7b63oiK9eoEpV6MUnBVL",
  "key33": "tD33yApcYfnL9TiW9BqV9B2wb5FC5ezQH4qtRxBiWzyu665h6Dnfb7TicB8QdSDabYgEXCzpRH3mG3XqjtFNwZt",
  "key34": "NGUpSqCux7x1oX9rPwaHv48mKBFamVZuB4ESKx6KoX7EfF6RoK9GEarUe6KwkSEvNfoWkoKGzFJR4qxxiVvyJNK",
  "key35": "4J7TfVrQwJcSCb8NrQANzKFMKyekssbsKhEC69vgycJw3kXbutiBX8RvMLg21f6gwzFSZpDLpdr8rLyMe3tyt3dW",
  "key36": "2Xhdx5hBtRnJ4LFCv4phK3feGGmuuu496JXGcoNNpLvueZN7duYsL9o4PYVZ8AssKNtwFGPVUVpG7HSLi8ZNq4Cw",
  "key37": "43LpurF8pxehJtk3rw9eSkwX3VxXQuqh51UwDY1rZji9ougarppogmnzZkWkitSHb1WtZxAxoQhuZRsbRDcRej8P",
  "key38": "2ipo5TTpXuSq2e8L6MeyWkki3GLTjWFgLWjuuSWvfwbmy1AmLxTtSNTqLTaQyuycHHnnybaZVLTahv8Drd2YtABs",
  "key39": "gMbYKNPAZ4SHGNHcBJz8ByqTL3NGGtBbypEYGAhmeHEw695MU6Me58a52bpEguH91GvPF2iqFegmAqvVpeLzg8h",
  "key40": "NARQgGkngXfAg8PMkdttjP7Eu9MxtCvyxmBuK7RNNhokmitdPiUXQR23zJDdfwmxdtJYVMnEPqy4XfHamRmgu28",
  "key41": "5KWzHY7ASLeMLUXTVUi9eDHAe1RGWb3PZShwcDzfK5ZrcyPA3prKJDPWtNELXVq7CciTnwM1QFhWHGoN9JHaHhLs",
  "key42": "VtkePgjYDmfA4UtyXyqGdEVK4JnREzCNiQTXFhJvAmzqeGL8YPRm3vrS74kbd1qTCH365FBLR2GLNjU8JYTDTnj",
  "key43": "5hTGwRkZgCBgvdeN7Vva5MRWvQaawjSgBTUQGg2dn34ucEb8gZ18ScbqsxXDfWjU6RDr47va6a7ZhkB3R4ka6YGY",
  "key44": "5J4jo9C23EAccQCnSz554oAfKwtqxaTYLb6JdyBfkmL5T1VFpMGJT9hCF8ohCQykwJcFh4SPi8HJVzc1ykNDJCui",
  "key45": "CLzBip5uvEdX1UV3tNw9HnR2gPDMzUBZVoLoSBud8RVc9htsiQtx1ZRoxyu6Bbge9Upn3Wgq2zDLfWkCLwRNmaE"
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
