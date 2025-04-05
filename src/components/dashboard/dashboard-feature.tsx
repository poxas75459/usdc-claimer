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
    "4FL2MZ5NHBJcTR5MTvzVGKuTccvm5bV6XmFHHnVQC4m1YjQ85NPb6oeaec1rErdMf2k7SUFmjDvpiyMUXXW7yfHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TS9UtZHsJq1oFEV1TzYnEr7Pd6fKMdwQQDozKrqLgyXU8wwAEPubsfFjZL4HQDX4ZhBgbNLtW4s1CbgEZcWZyPb",
  "key1": "22ob8ZKSnXBj7Jme9AL2q88CWkj6u1tnYfCUWQckBJNVRi5HLUpQosFTwYBvj1Xdv3KaJgm6SRPc1Ax4QumPytXD",
  "key2": "37ceHPdXtkkg7QMihcgjEHoRLdbzenV7KAWeSDDzqPSePAuZWFQuMGSkGpjwprxc6fjsjiK142XdEMy2aXgRM4Dx",
  "key3": "3P6oVGYL5Ud8FonnFw5yRfAekP7VmsSEzCvHyUV2h8ZZvB4qMAyDSadi2CsgPyG3bbUaL6h7PJgrphJJEERWNKMb",
  "key4": "1DWtosPmFYGnLKnLnFF7Nyo9Evd1BMU5Wx7fFvkwSXchpaoncbqftQUUaiWryBrP3JN9egRsaXHQiEro4LrtLHY",
  "key5": "yNGqPY1ZB7y5gbCMWYR6xYtHj9A1YmbCHXDxLg1NTZogyA3AZ6iThRtfwHbT5WkrpUKFNTCuiBpfFbiQT8zoYJp",
  "key6": "2trHUVUBMmgLAMu7E4vAD8RzugwnLKEjXyGkEMDHTmetRri84tr1Xp8ooWGY4EwRJLYdJFwimq6qqLCTKqbBbotA",
  "key7": "4FzKgGYjgzuCutTKB5VP1Qx5cwtChjPZxjJn2fn2u93CSLxpj8bRr27e16zPnvhZ2YMAFKAwivxnLGd3zVzqfZVS",
  "key8": "3Ya9JDEgtqqQGTAz78yfMBMLodPfLLQ2wkA15A71YjkpBUfzXG75p1jtx67TjabBFs54Do2bexyfdBXHN8S2Egi4",
  "key9": "4Va5aH4LidWkV9ZJWrEUFDEvvu8dqRrkD21KL2deiWwCgWiV7AavN19fjdmrFznBbZjmwJF4iZxhyN7uM47DLpcY",
  "key10": "p15aZ6hgqV7B7WdeXboCRmKmoifgys8sU255pELwqokzB2qxmBeFSmV1fqHA1111JKi8AxDEFvXYJ34xGgS5Vmw",
  "key11": "4h9JrKQMxpw2pPmxkpuMtdWXTFHcQvgEXfjX7RrC6zvNRNusL25hvJoS7D9PoaSpuAP1jcJMWYwKQKjPWkejQja8",
  "key12": "48c6biic9Y9nxGKvTJuDNagSpJcgUvurVpzvyju5hEQSwgZfxYjvSJzgj3mPeCvBkTVgUp3F87vZWNHktUYME7P6",
  "key13": "5MBTDQ6Rh7mz7G4FcUod8c3cFRWYez16rF2c4zF4XUizULWunaYPQAGeeTYXBju3pRxXZ62vtNh28j1JcKfPihBs",
  "key14": "2K2ND35K6Vw51B5FZwhsuWcFdjo4E6s88EqRj9c2f4Yp3tNTQFX33WtrSRRHSrKzzDUwjRGLzvbLULRy7BRkZyPj",
  "key15": "4KmVv1HkLT7Q5ckjzcHDBT459TMkrkpCjYWHSPVSby45YXvLqsVJ73ELZRyiHiL7vStfo3HxPZ9T1eZ3buxJdYn2",
  "key16": "2Lp2x7BV9BTt672pUfW73H27w8L266ZBPcYE6ts4ZZBx6YDq49JgqUZtFuUMyGu57N6sb7hYxsvfdFYKKMcAg59c",
  "key17": "2hWDsYi7vk7dPhpeBACPaxsc17VcYu1BCfPH5JcYwSw8SzxHVVEanZoL8JgsBuzx6kmoid2W1H8mknshbsvfu638",
  "key18": "2WLNUJMxCdaRjAAUi7HVa6W1nnVFwF7nbasgH4mn387NkVKMTwcehyew4nt5RjBUVZSW1i3YrWwpWQZhwQY6Pe8W",
  "key19": "2T2ibQzSQ5pDY9LKp7ggW4UsBbRgopUvUkRtD4BrcEmRiCbTZabdjazq81hj9jc7P1maywzhv3WTjDafyMpoCtMU",
  "key20": "3VybKEhBeWdEAWytrsYTw3KHUJJQmpWPCjEGv6VooUcTwg8uyb2AuGGgvRa7wZfzQCvqy87DRUAfr5ZG1c7fPjAd",
  "key21": "4wF72uvN8Fy1r5xCSXthsvA3qcw34Tw736r2XEnmfHyaPVFVBhCcMtNwrAMu24sTkHrFjDQkghHWpL4EYxj21KAG",
  "key22": "3FnpW6AT98Rkt5mU5432W9rnFzz6cRRnLJZYzknanVxZxh54fPQXuj2QTaZCLzQWESpdpWVwSHqR1UuSpVhuDKry",
  "key23": "322kJPT7f1Q9sUNK82dy4NEXCyvucprzhwr7fcFMAwkCPHmvFZRbfH3JJfizXQ7eyV5wRrTtKp82i1uUEg6NHsZB",
  "key24": "Q3WkytqbX9DBZy9h6gWmdJavUBbQse6VpwBSrevm4sfHw1EzSZ4WcYpXpfbwVKjSFFc76H35Z4DTozizmxVYNpQ",
  "key25": "26AnDdvTRf6MFQGgXySYF98qf27J1BTpoR7KEpop9vmg2opNMPCZbKkpYmMc7Q6fEVRHuohRy1n9PyeCLDSQQHkw",
  "key26": "58ashyYF7y6JaphTHDn7LktMhf35CoAjtTsqgSGvAnwkeC1jzCMHTHeCm3NGmTtXtEhNMi2MirEVFgXMfa4YLXJs",
  "key27": "71mnXJYBdYJ9KzueuH1wT8zX3oxgL13fCigHDpbXcq8h1Je4EiervmCGcU5DU8nwB1f5h8xTJykZsx6H1Qsj5Aw",
  "key28": "yGU2kwBKjxBuEG1aDchC16H5FTpBTAfeSdsvDwt4ZTGbT7EEJkWiWNamNCkWw1L1mPHorSAEapHbiQiuUehvM5f",
  "key29": "65jb3iNSwFJJxyJKsJ7eDJhra9LfoYQC2q8jJPNYNvSk5ieFUv8texVDrivbqvYU6q9xnH9BvKc3V6GeD6FEtrmq",
  "key30": "4sKd38zJiaAewaS1e1K8asVgCC5KPoFJuN9XdVnd6CHsioeVBGaiij74EuxjY7tJqTbqe4m1zGM62Lo6k6iLAS1k",
  "key31": "5jmuA8GxMxtc4SsNXQ9YMPd9YPbtUMpWeUZfzjJtNXyBcefCP1cYysiNUBmhjofBzBhpS9FHhtUnLpEp31VudFnL",
  "key32": "7WSuXmfUKwDXFN8BgPcNQQHv3j8nwaUND1SWHJMHK7DsdfakA7GbNhLumS6N8LAxKh8hpYSq4Q7c6Gt9rMcfLpR",
  "key33": "DXuBisg1ZD92wHkdwfV5VsL3uScMie7ZozAJR3oMbpX6Wnrj3JrJr16dGgRtb6H33C16JtvgGXKWjuuUmSEbHgj",
  "key34": "4nxwsf3jyvkov6twA6uhWMNg5BugQuoCRD3HyeuQ3xTJRQgzKjBUhQ6K8qRGKazDFqu66DwZa7QSQRGk53RqyuJA",
  "key35": "2aWMfE1Ct8TrLEjkkUdzzcCLjD7M1wV18fvRscxgAM6hz1q7Y7XZMxkryxH5uZnNz3QoH3x9tM2kUFc4aPbu9E4a",
  "key36": "K9c6mrnoGiuMCubwNAeASGdjMnV2hmuXK9CSoqWBx4dRNgyNVHBpFeHN99CqYAq8kvkng82pL5miWmrUHdCkjDp",
  "key37": "2pkSsfPpwysNN7Y24maVuaGy3CQHdYwny2gVVy8p9beg9qKasCv5VcZdmhnT4WVL5xcktyxSVcHEkbUvWiHPfVE6",
  "key38": "2Ndtxnd2sNfBLBUkNdrDrSPqAxKmbWuuU6JFFGJZ8QQgx15egYowbwcwRSsAkMfwDreFEja1PKGZveVk7f5ohnJS",
  "key39": "5HBdHziVjGqJi2XENhhDiTNyCx6XYtCAAVyPLVUfBcTzkWE83y8mRqTKi4XFhjuPALhnH5JhAi1Y15YdAwomkuh3",
  "key40": "4m4NeupdH9vE6RtRebM2wDG3php9vr8rxZQPGWPxmnVnLMD6xDSxwKF1Ewm839o7tpWkkbG1CqkNG3F2ahQQRWTu",
  "key41": "vGBjKja8szywPeLA9bGmcEmZnTwz4s7oEHBVaaSbyidisymKgkYCoUaAgi2VjjZ9fzDBB6YS6U2QZ3pN1GFyZ31",
  "key42": "22sbEQ5nXa77BSnMgTYo3wnB4WSTAgFvAvWGXGoFFCsdf2LqcCuppSaDSDLnN6zoxgw28fGzGu38R9ShttkGwXJY"
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
