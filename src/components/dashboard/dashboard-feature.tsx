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
    "3KkmhRXFmMp7TrWj6Yk3863wBFiwETNB9Sia9kRPHnJvdcivChfTCNDajmAWaKLFSBDCsVfRm1fqhkoPYwkoif98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HLA3wYJURS2Je7SuvTh2Binfg9bmK6hdrTUD69dFNnpn4xcjnvPdwhnjWMCmrszGUtHjfeHhE1g5hdCSf2Nb1gz",
  "key1": "5Q15eGertuKSpP26yVoEz9k5m9SDiYixx9wanaih7bL7ErpRaDmNEcaPPLsLxpxK7m47o6iDYPUt4QGzSyc1nmn6",
  "key2": "3QnqNAXsSdjzUmDgp1t2r9i5ahGqybUg3Sub186yX552y1aoWSWKCxYqzkSMDyqqW7WBpapr3f359UQmWMYKnfwH",
  "key3": "4a4pcwtw2EM2NTyLFPBbsZVFnwpozv2YoT4KDkZESxKY4tKTihGje5mdq5MMkWffWHdfLqYQtCBBz8javPTLcu7M",
  "key4": "5B2vhZeRNDZ27PmwAZh97fEKzY8FNrwBTyDCZcgZ6raNk9XfLFKkdQNxkUwAxV4NYB2TYUjjD814Mu7JTJzDwWKW",
  "key5": "xaoFE6E2BUZiEQtWQpPjTvPe6VoXrBGi9BZxkoWeFsjFB45SNyFrVjZgLQWPZawbArHFFKCA4ZQLoC3aj5FC2fq",
  "key6": "2hgHrhacMesXJ6jWYToB2WFEm7FKKXm9es9fTdnorPFWCjxbw9arpdjbu5neXXBZBezuvLZFifwJVeDaxhHZvhBi",
  "key7": "38AesiKBoVKHbeRuAhiocYnUzs4jcLUCgPDy9BpZeV6s2iTadJocizQjRFVVhwrTDfBqMmuvmsbGhV1xsbXTds4q",
  "key8": "3csRi88RW9Hdt71U6noK8fLkwLW4spXzmSAqUYKZt7YHiSEmfEGE5RRu8WNANmNfpBR6qZ9bfeSyPWmvAr88Cwb",
  "key9": "ocdCGbmYBdwUF5SefYaFFMrVcDYbHkqxQkFnceN8xv1xF9rsyzNbGhCcs9iD5rjeK18xkoNGHmC6R22SKwywiSy",
  "key10": "2qTSmCfF7oEDh3DRPji4TyqtSKwKaTnS2FMTvF3WxUV5qKQj5t9pzEdd6r5uVB9jAfHj7mLBim5CaGB96REQdnmT",
  "key11": "2FPtSrhAwygn5kK8fMXdeby3cww3wkzkCUv5FJL4TU8MFA7WrdFAYxY22WqBzfTK7yUoC7jdPMuxZzofBpJD36qV",
  "key12": "5gfif8YnboSpatRDEKLTZEHcTEsivT74AgwbFPUnrfkcAPToD7VFdehF1i14qWyezCATVEMZZTk1JSbR4bgdPxQV",
  "key13": "MB7inVULv5sXMgsVew8LhPgBQ4QDVCZjpwXqwArbWbCt4ZZodxFSyvC1UwNJGyxTZitJ5UFkpnwE2LveFJwoJy6",
  "key14": "3M3znWrcHyEaVgwcQr1pCxs8iyGuSgCFiqD2LCQAK5ZeJ3xyWgdrKqcv8mixyiNEtKWxXFcUDhSJds19NorADDF6",
  "key15": "5ibPdp1rM8R15HiS3G483kkpR8iSQtZ1bxxSMcD7LzMDspAoeWbbi4tccabdFsiXdtNnvrR8PojpjK2PAZeed8kK",
  "key16": "FuZu8G1NAHKZVPJUUCrBTcwsiTfHS98yo1YyR7LUQHuZweSNtTh8maZ4eu5xuqxms3wask3ytRTaG7VVAVFwFg7",
  "key17": "2yRkrVJTAobEDAYRjCH32x7PAsF4V1HeWJRvRjwbe5c28V6oniS9K1Et4yhKcf5NcfjUxpTjGgyEvb7VFMNYhToT",
  "key18": "55E9hz2hn9cvciVjZ4GDzbUpA3p2vvqpmDT9bT6YLMVngKSSeAGQPQ2pD98j9XJBA71LspCQ8SRpcrfZUHWi2RQz",
  "key19": "2QxnUAyGjGJHp2Vx22Z6FDShPQagLKPfeXWM4hwsCpvM7MKqu95s1zytymQrchfDFUEYpj7NQQLr1mwcQyn32ePH",
  "key20": "5bujiGruP3pQX1sSPPR4Hrt5V9FEBCtLzj549oBMBJkJHUPKA1wq2prjMsX2kjC3Mgs7g5b9nECS54y9XC1x53e6",
  "key21": "2Z3XxFPtV377tDiLLcPK9PadGxrzsoPytgLu2o7LdAYWgLX9fvkvUEzF2RFbuG5i1WitgGumUcYXDR4Js529aSgt",
  "key22": "2WTsh28867WsCUGDL9VjVUuhBwajuUdRXsZZftm6SPTAF78cnFfDsUiEkTUFiVmPhSttAMSN3ou4eesMAauJdL85",
  "key23": "5zkqc6qmGhJoH9YcCxAaapR5otTzXUEEvFczvGLUUCrYFWUk6SsdThv4bV2KWAJbyKQJ1TUHJvQUoeh4C3TgKrXW",
  "key24": "2BMkUWANKUdMVungJ2kHh8SnXVySB65fwr55BUx328Zq38LAQ17W4kejWYtKPBhKhoFjaKv26bf2uHaPsuC7eqC7",
  "key25": "4vVVtmNjSKXm3YDvn5QTRjKEiQfw65dJ88PSnQ5kwtjxMWaCu9483mLA7RzpPES2qJB68Kh5cGrvK2qgDgAX4sgd",
  "key26": "5VP4L9FyfVbmT3uhrkmCkRgUjKAxZFqyTzQYGUcMvH7s9UgDAgr7vZVoC5Pauq2e7kZPDxBoeNoFz73AMY369Kmp",
  "key27": "4waK5JKsYsdpcHhi5AoAgWLVTMYgeZeVfVe7BpxdzwD5DK35vAAGD2MuitdPicLCjBcVH5mNGCw8imKeLiviuZo6",
  "key28": "WoYf8ex1voERqSCf1z66m95rtVevtryqhdwYEtDWo8d7zhAiRvhrhWXPUJ7dqzxHKTs7yqLHejLuMYvmWw7y2Gb",
  "key29": "3AFWC1ZDzsk4Cn5BrPqvvthPg5zCshNeYSpRPUTfm8daN3yNtM2s6GSE3W5cUBTZ6QYh6SLzQGhJLBrwrgV5iBQb",
  "key30": "31qQATBZKLEj62WKqUGZsxajrhpkVt2G2wzEYWdCQpE4sfjvrxRGxTFGqPVQhaEhfiyjFmUAHjN9zHwGzqgaXRgn",
  "key31": "4TyVFju3xJMtsCUjzErRydGZzxaw3Vg5vuavFefMszRAgiHGrCP4sXgcAcYWMUmJUMEE8M2dh8cZ4HYoEXHeDNV1",
  "key32": "3HGfPicBk5bKFac2bDCwuFSRdUKRQz3xeeusAMsYXtK4PYyiuSeBD9SgBrGZPJtD5roY6tmRbNCTZ4zdPE2CsLzW",
  "key33": "3i3KiAADBWihMnXvuS1z6NHkUUtcziRFZnQhGFZABZpeCjPTm2tM3QyFZSBrnQVuAL99w2DZNf8grMc8mJ67JANS",
  "key34": "YwTDjemUa2evjKazRwEhHL14N97A9KFuPZmTNuNx1Wa73asECkosDsLAD9m8BfX6KZjoAZyAkPGi5j1N9rGvY2K",
  "key35": "2Nn5qMUKAhQm3HUVypLST5HirKq6UexVqaSSW4N52hd2jeooxoFEfvunfVBVgZ9v9skbedxWscU3o368aRndnq3t",
  "key36": "2uMEM5PKuY2jz6Usui1HVnEXA49uHMzziFsUvquRGkwUEQHe7JhDqWFM22ptALegukiE4E86w2aSwY93wFa3dBSA",
  "key37": "5gPz69yoNqb9jY3PktQKZXvqHUSXeY2TFDwaPt2A7bK5YrvhDgXdZL8bHuRh1b2K4uJockLC4FtAr7i1BabXb8ZA",
  "key38": "2yYS31MktrkGsWZ7SqaCNs8fipUEo1MFpWuEveqput2sYWEm4xhrx6dJiSmTpJqL9hw8xcBCfMid2qhm3nzi1QBb"
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
