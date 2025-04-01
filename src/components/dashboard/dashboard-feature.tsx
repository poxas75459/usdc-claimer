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
    "3bf4Vs9STJ1VSL6uUPiLCyZrmNV4tfnR9okQUZMq5SXeSJQFUBCaWGMUdDeGL7ffvSyLTWzDiwk7kMHXHWVAZjWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eAzEXT1Zs3VT3YoMStNC2oy7cUJcsCFgybpbiv1oVv6XWDrzGubqS2fqX4DFmZtPdzUdx55Yu8hTHVCfWzGF63Q",
  "key1": "3TKGrh2wT99GvhcxjqyNboaFg4DpfVcsW5ek86r478mTgXQPB3Fnsrx6BC39hwS2qchYgarg8BXWUvbsfG6j8iBj",
  "key2": "Y3zAA1C3cwjK2tQUd9kSpc73iWktJVMoSV5RNDrvUDzwhAa5SWZWFq4eNj7UxL1uJcexQhnRXeLKnrFYzc7rTh2",
  "key3": "5VvhNv4VZRvb1HPHtxjiXdTMJrAqtA9f7PsWe33dUEr4sEcv9nLxh5dNPDEeFHE5mtf56F87YQ6nd1rP6gibH1Gu",
  "key4": "2zZWb4g5vvsVrQK4gn2WQshekHodaFjTATAEC8gRLNLVE7r4aFwF5CkfBRJqgm4NuWs3nTtAqoNJsyRECDjSv1f6",
  "key5": "3fTqmYGqSYboFvCapUecd9mgKtSkaJ58n8SnSXYKmV3vFGUyNa9i881thtX2tfmLmNhLFTj5vFnUP3SWN8wCVJLj",
  "key6": "3UTYgcJjCyu2VLSJLkgG2BFWXbw1cWAXFpSW4SFuaV5255sHDDUUmBhYQP7PBCNPpLaKbfkHZenEPiTFWKfzsBiv",
  "key7": "wxoKc4V7bh529Z4PJxFBUsd81ZbdwtLuMRCJrvoWt4BnJ8cNNmeSq3tsmQJ83kciHgBta1PP2gePYsNdVyUf5VS",
  "key8": "29io52rS2RnAsb1C1ZSL5UaEGyBDcceuDq4L5VcBx5YMRCm7Soc7XbH1GtVGJ5jRfN9bNVcQzGt77dtxatfJCqky",
  "key9": "4msN1AY5ExJnBTaKGckEXQF42YCwVtkgLgcjrhvEuKTyNDihSgdb6mnVqueCx29tApn4QaEhvsfve2D8y7QGSQqe",
  "key10": "57spv8KjdwK1GWG3qqkydxnhThZwhveb7iNa6DhT6baQWrNDn1ebm2ruCv49bBecvo9199UZUbmybYf5Bp9vJWL",
  "key11": "4Vn7aXudV36i6oELM3f5Z3d93VrDE5DzXyckYpzpSX6UG2J3VAuB5UBPyjkPPKVKkUTUHyRNrXdRG7fDvd1Ptb3",
  "key12": "4H5MpDntna5bTM2E4tqznYQGjbhWfiisE5Ye1STqXQD3p8xTQLhzhTkv4f5iKRgcavXVBZwKefeJSHaccaP4YpZf",
  "key13": "vxbLS8zdU5xoU7tzK2TA1L2n87RAfw5PztrgeYF9L6GNZ5wN6JWdHTXT3nZ3Z3KtWuzY6Mb7GsuU5iKjfTfv9xY",
  "key14": "BoMchTFjNNdNEPXendKM9FM5rYzWJEfTWQXQiH5xgUc6RKQ1Kv7uUYfoU2G3RwRxMXtA6ffU8Qo4GZCWUv3zsUP",
  "key15": "5PBTJ4xK5qMVKWUmtuYUERxXS71C5PBXhpFbk61ERvtvbDCu6jnA4qVeyYTun9BtuvZmwfastKeS11xeKSgq2Qfn",
  "key16": "3HFYr3s7rR6zEWThuWFFBY9DZVGsY2N1XppmaUPMPite8vUecyEmAxJz4PvNckKtmW8ER1eb3iWQBiJEYpL5h6LT",
  "key17": "22c5gYyrUEdKEBWBHLnRoy7G4m1uLWNKgWwzEqMDMMKN3uR5vYs46ed8jAJTNgjig9pYDQgE7oQ9E3TKosUJVseF",
  "key18": "4mevXZhRPKmD3xU3ciY2p6c6XqzDkTHneYLhEw5gHfackuwK28rKGtfdchFx8HSosDpnd39a4ktErUztYRSHcm9j",
  "key19": "4fjsMXsPW6QnnRtw6YKpPPgDV3VyEk9QjJEEHBwBU38ZkFQSSDmheWcXRC6tq3gZQNcb27t7fiRfPUuQuLZgfy9t",
  "key20": "2HEeWYZ1Gq9wALznZH13k5UT2GnJQminThSK7XekhpZf9AoQmYLrd1apfZdi4AbwhXQPcN4CtMvKcx5j62Jiyc3R",
  "key21": "4XSP4SS6gN9sRKCnPCyzo2FcnZD9iQvZRvDQvCwZHUVtE3s4kLbAtHAM2nbnY2UX8YnLfW7V4bHMy8JoGAazCwJd",
  "key22": "WurdeHCqAYT7ALRs6dTKhKivfZnrVTbjeQ6GDHGLkivCehstaSfe2kuzqrbY1s5nsRDVacVTqEwttR3Bf7XwLmQ",
  "key23": "4Dc6PaGRFPWB4zchvvaKEAK4iKxG6NihnVBeW8drhJpTcN2fvhErJ1d6CBHbtiMn5URM3xCEN8ELvr8zh3wVNGJj",
  "key24": "mPEpa5FjSSuTjo6xvASoQHqk1UadAigXuuSWBRCLYQgKQMD1YoKKk8gPDsrzMoosKq1xbTiPXrdAmhfqenCknbe",
  "key25": "49LT7LEPrfNGWUVZ1gaYNQpaMexERsvxgMSBtDKeDQLZYH7uJoKwFaAFjRtSTYPcDCWHnrWHDArHqH2hhRPtQKxW",
  "key26": "2xNyG3X3jjr51ERcWoUsPwGN1STry31e6QUoyxPMos548eSqvTVjQh73AS76gz8F8XN8C7yDSKNy5W5ovRYpxZkE",
  "key27": "4q3JVhHBdqiPUTHXgZoVMUjaHgKyEfN7AavwkP6UdZkD53ErRYgbBxQLJPkgx7D8N9HjwSqhPsYc5MJTY3qSG68",
  "key28": "3665K8NyCvbdBZ1Ep2eU31fcjmySiY41Qf8Thcak8YMBDrXQTEySPPokFWWuAVuQHeE4m3cYCxK5DKuibjVLv7k1",
  "key29": "8syEKqG2HJuiWacXw8aZUdzuVnLFx2oGTCRUxZmCwFoQxWG39rTsfdbqj6ovEPnR4XcePyTow9Qhi68cEJ5G6M2",
  "key30": "3LVyF8YxJHFEThXSg73rahFYPe8vuR3kSJsHZg6TPWqW9pbGoLnurg3bwqQHzD5HNKp18fust1DC3JMix82uptX",
  "key31": "ngXF7KGyoXhiKRkjFiBVEzNEj6tZH9gbVcQ6YaETW1DLpH3kXjVdY3km71WsvTURxR2SYQWaTJWrDwj84BbZpg7",
  "key32": "3yE9XWgn2cBuuNmp47ox8zChcoq46wuNJC7o1Yhid1ectr3japwrwvyfY1FL4Ummg2FKxmankJ8ZYfwvfTupiNUk",
  "key33": "5kc12ziuHb9vuEZqW6B6LiofComoHA7yadca1R96E5K3itRaZka3JFSsihrxwm8cGR8CfbzsrLnFiLS4N4Q5fVko",
  "key34": "3aa2ctCrwrCWodBSToccKjGQtC52U7fQGGqXaCPKuttEt1FwE94LHBjUB5g655FkxqryjJS5E5GffuVtrzRzhX7t",
  "key35": "5tkXspkDf2LkbMq5zjxZTq5H6AkXztWupJCaUJbtjcEcvjYNyxHKojj7VwZfm9UqBZQ3xtjq9GFTTGRtkHuimwkk",
  "key36": "5iaiTu7fFMzUdrGjvHY1HUEi6qZbmPRYJdnz8q32Uhw7QBsMpFPeuCKQ3fR67Q4QKg7q9X88pNp2php6LNvSWCQK",
  "key37": "3wjUmaqVYq7yJAq1mNmDWZ52TSMzjjkxiMc78VVUPsKUmY1ehtqEdCDFF1iMEMCgQqoHjbExZBok4YGuT8mnL33e",
  "key38": "6tN1hHdRGrHBn7gqC6MsnZMTyefwVxM8Ce6FdyzRVVpu2bTGMwRoNtvwfVtCVyJMLYUS2mbHUGAGSWRi85jDTQF",
  "key39": "518Scu48B3SABxRAmkxFaySFf1nAqz4u9pNiyWdo6X7j6dDNKVi3W6KBQ1nQeBM1xnpa8uRgfZ35jfPeBdJpSMbz",
  "key40": "324FBeUjP5Y4bF8YzZdAFDvgUn5hzD3knvLU2mFZZWLhAKgUB3SQ7fZH9Cmbv5Rt4tWnpmwD16ZYZxqyfXHjvhN1",
  "key41": "67Efb7xCtJMZtLr65dr6vfUybfwFzx8pqd1ZrDRjQr5NgH6euy5nnqL2Mpg8eP1v1Vswudeav8ZiQRW9qiSr9ZcG",
  "key42": "G7dX7BzxBzEweBNjK5EzaXA4ZHt8WMdRvJqijNNmR8o9dJsjwtGhSD3euBUizm6kZ3ksq7nQB9Q9uEPQoLGbtoE",
  "key43": "2pkWgt1Wxg2eU6euH3LqDkW8pZ3W6vk52r3wxfAJrbiFttFyHXRqcCXrKTy7F4N7ZPrDGgS5U8TjEA4yG8gcscMw",
  "key44": "37yARmED2fG6kPgQ2t2LvBuC6HAujQbDtKU3UoTABfF2G6bN5mxMT2c4zQN3wmtJSYwWPR84M2YLebUg5Sda9WrN",
  "key45": "3i1zJjZcnJaebJroGQdaoDVrXmXjn32bT5AGmxvL5zNTgLgdbxU8mV7Qw56Kmq3roNsykL1bBE6qoCrsiRfQAs3d",
  "key46": "3tSsqHhBhiSPSvh98HozsitNP4EoDuhBuQmYYaAjDbpim3ZXnSgkUSWLgWGNc5VUoTygngofyEHAzMfECbcjbqXG",
  "key47": "2xhQroa29ppt8PheaoTGbZyJ4BP3nJ71377gV7c2j2S3wn1MbU7pWWrbN3j3Tb5smpj3qX7ZvwkuDfoPwoSykHr5",
  "key48": "4TEESmACLWyCHfstuzUbunAAQeUEp66NxqHQBy92fpEVN6e8hmxDi8JDJe3VeLpC4fgr1qvqyEpxs5xJFgrCcKMQ"
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
