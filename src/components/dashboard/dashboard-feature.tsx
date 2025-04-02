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
    "4NGsRxQBUBfmB3Djhu1kEvcGsAJDvaEoS3gkHXVRuzMiNaa1t85XkDH7qFFaoQt12XwuNT5yUFFnR2g3WHfbdH1k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puUpzcGdyegsnCdjm4hScHdmRgfrfzteaBkjtRHQMCDyxWs1jQuM1MfZVN8Uv5rqnwL9SRXjvrKgGCxGueiahoD",
  "key1": "25WAhjAuGinumVqnm5HLThxW2M1auTqTp78y495eEVAR3Re3wVio3hwKCd4BPpVW7D2zEbUV6j1HojC7gBsaB9Kv",
  "key2": "3S6HM2sjHAX2DkqU36mfDGLb7SHRDfWkCv5xEtdf56sn4EgDNxpgJGEDEySy9JEnvS8J7RxCNsBn29N5BoQwkdCG",
  "key3": "2cAo8GFg6ep6aVZnXfx8LyUq5DsLFjnUNAxFD2PTcjBph62Pd7n58p7zv8V4ESC4c9mRgvDKVjdu8SsoqdHavL2g",
  "key4": "BYryPPopK2WgYS1yMaEcHmW3H7HdjpsUXYmkKDyqdHcBjTa5PcAEcpYkW8YcMSFq33PFs1eYdqHrmuZBpHmdGTd",
  "key5": "2pNFnh6KmU1aSWsqoeFfP9VvvfNAobaRt7dj8Ao9AmD1iQ64cLfQgH3X7mLBvXvp6v6995E8fd9q2hX32GaLV1Xz",
  "key6": "BbaWhrvp6EfCPQGr5WjCeet1tHpYYqbH6SDFbut8F14VgNTVH4UkGNMM8eDFRKmW9kAtLiT8BemnpqmUXgSc7Ax",
  "key7": "5dy3QbVCzsnuMFcmd4etTnhg3fC9pTjc6E8ri2EkwyK9c1ThTowBNsVUTaqdFJU2Ged4mHoi4kSZ6PouDEKieqU5",
  "key8": "34tKgYHxjQy91yQEfve46Hr1UoB2ynsWU7ThikXipykQNqVjCztz791Eg1cKvCMgQcyxbiuVM1gyagVcNgDdnhof",
  "key9": "3gVYV6Gmze1wsTiG8pZ6QNxNLn3TR4rpH6TQCpJsskg7aooSC4amMybCgeNZHNk3kvyLuopxT8Euaktx4cf4mwRA",
  "key10": "U8G3CVRsypUoGCGjxzURAvN1uyJYDM27uaYYNWdf1JhRa9kbsaSnoomb4gtro57TwUE717bWKdH9GGbAWt3J1FM",
  "key11": "298UB2wPy7m2n9G6x1qqmVFmC1bDKQuWNGX3XUg1wiLzpXLm4UpzE6Wy4sVv34cx13XfNrS3YorTXJYs1RWQP9D3",
  "key12": "yk2mV2bjC1MNL5MgfkBKq1FXhLFDBrX9UyUgD1fD3kF6Qs3C9xgec5ExdNncQt6Yh2uNrmj4WphmU8BhEqD8L7A",
  "key13": "4j3AGVnHXCJtqQavhifK7gDooTUqEQoLb2114gNj4UEhi5NWP27oXXTm51zZwLTgPoXh3VCnQ8nZMFGENpxnZ121",
  "key14": "5Ls3HME6YuxV5LsBLHTtihLZP1gy4iUzmGkxhuLUHWLqasz5UjZkcWFfakQXpwrYF5WXeL87ZxsT5t1tC8ZsLoFn",
  "key15": "4rPUuc8EcXyS1avnbC5Y4kqpcLhtiuDGvMwEeTPmYhWb6BzMwhQKyLVwqEP5xkgJrefMKD9fuPyWmRZe6b7Pbj3N",
  "key16": "4b4UQhrFmTyiy1qzZbtC98eKn5fVd5tFrtLF152xtiDybBkca2721SwUVnYxwVgL3C9gc2PFvFa7n39wLjgMh4tq",
  "key17": "3rEojE8UjFw3dsdymj38LxUhE145KHrnS33pLn8CfFdkipPV1P2epiq3FwkvbxFPrdVBEXYQS7sypK1wP194Cncy",
  "key18": "3ETpMcMC1F6gPAiUpGvp3ArMpptCqUYza2LKrazmqj3t73tjczD1m72DKZcbTXaTju6rHEMG3Xu4UGu3uMTkPzEj",
  "key19": "4uZw7kNqmMh1uGSzmkEmgYGjB4aevtPh9jtFhH4LoxpZZr36gzD8AKsrRvywN4RapEsaf47amvMQzXKGyx4YDNLe",
  "key20": "4X1aCnpBAJbfRBeHnixKJ6FJ2odix7wjRfratAdarfDTruv8unB7ESVAERDHjdkJv6hNiLh3dLAnxvksCQJ7FBc6",
  "key21": "3oLi3LvyCH6DfFHQuAEuWiTVAtNP7LNWUTZyLeshdx8qu9JJNLJSFJ4BfXBCE3umvXmXoBn6NVxynh7EV6crLKkT",
  "key22": "2Hf2ChTQPWQLLrs9vJbz1GcLJW3rHShpUHfMPBiWGfv9a2FmCUTNsNEkU2BuqRgqMMiHjSL8kqUMS54CcnwPDc4w",
  "key23": "4WUmKSZAKzbKY5bSmDzypddavKdftNh64VxMbHUqUeXZMSwtRsig15Nw3N9BJAf7F39qj3wr75T9HaPzETMQ6ZSb",
  "key24": "5nSf1XzjpMhxkgxgoKtAXjk5fxrth45enxK37HLfQQhbTxQACEbLkHML36HByJM496Td2Hv5H93mk17oRPCj7Xpc",
  "key25": "aNY6VseLxTk5BvB1At4PKnBPVLzzrTjED34qCPn2CfKnN5rRMLs2wgshUr8GaYB9qmY4PGZ9fVywUjktNBfipi9",
  "key26": "64RL9cHKmkhRmS5H458SL7CT9S62FNdTPsNc4nTsCt7542otURi6TTnzah9RodAg5igaeXc4YPMumMdFQHjnRp11",
  "key27": "3kCko4gJEjVh6xSt2o9evyVrh4VfDK4RCfHKZV4XPD3xkeyqGBSkgjfXp3pozVPFg7GwqQ2WApVKduSSmSJa9cbK",
  "key28": "isyHbigbida6RYhhpQWh8CjgxiySrT4ToaiXpimA1VXdKweMd5dTX3Jih1TeWrZ25P5Qro83A3QZDteovGcpPzo",
  "key29": "d51byULv1AQzwQV61iKx6CxBQmSjAsw8u61zf1mhDJsQ6Vorh4poZm1n7Q6nT1r44YQYroKHbSKGkS79GXgwgpv",
  "key30": "5TCjsgKNeDiFXYGFwjGFria32zexG1ktab6SRbkM7SKZiQJNTPoEsBN68zSeUEu1ejwERCpFBQw9cZiNPFMKYZTs",
  "key31": "4L7u5wcXcq9T9ve5z1XLyuTgVXhWA9Kuqkbbawy2Tee28RTG3jsgJC25gyUR61i5fDs3fACyKbVUYeGquReYXtXR",
  "key32": "5hQxaDNJfmG61zrT8xYys63w8wyL8M9DDip8yvCt3LUufe2av4bivP3R2wGZiTeoqgFrFwNEtCQofZzyERUgC1Dc",
  "key33": "2GmRgBY5PjztqQGG7giexnqxReeJLmwT5p3xwEGvDemsacBmozk5yZJZyGu6u1ZHgUQRrrBYNgWXG7ZqkknAVqjb",
  "key34": "2n4ktFCHkJEWH8bmvcbbRyQGSy9X9g8oqDrosL7HibTKbqk6hvUfAzTYSUUtScbHN5TTXGkPYJ9UGT8waFG56Lk3",
  "key35": "2YiKBEpXeD11CmKxmDqB8YKvg7SjLscszoSNPM1YUnzqiD6xSDxnNX58Ta286qKwE7ei4vFiuyrgrBEuFpmtxPuk",
  "key36": "2TQK9G3MstGEfWJLhXL4Ut5frkbK3myR9NBFnSbPwgYvUBW9ohyAFt6QKB1Goct3RN1jQ4691YctSkWmhPB5dsHH",
  "key37": "4JCG6pyR9PyZmwGhCVbifdXjCaW2sar2Hbfq3iQeXyEFbn6SsS4JXyZerXGHYnSdxe7UUKCiJa4dVEsjV2m6jbvo",
  "key38": "aMbefr3BVuUK8tJyMjDqEk7C53ataRy8JYMANzYk7ey3ombHDcN8jJWdhLWu2n3MXar6sCoJB5nGbuedpM33nj6",
  "key39": "2sZ7mRQUPg5pqQRQJ56wx8sUMmmzZJGfUrkZWiNVwFGTzLCmuNnZNFn9BnQhWFE17KzrJAWGwof9FWRNdLFx1E5w",
  "key40": "54s38h3i54rSoc6Z5TWhPFwSggLFBmd4hzR3Lx2fUTtNxLEfi7BSE5qQkoGBnzLec2TfXov65Q8EctNrPWy44YkM",
  "key41": "4xexpx2mRWPcyQFfAu2cybe2Y3yJY68KXb9VZZnpucq11zhWMAuwAoUnU7JR3RZipa69LkcFbCcwu5bLbM1UYuKs",
  "key42": "4NqmgyQRsy75PydSqjtgKpiiiTmEpwdm8YYPn6YFBmVuZ2FiMb5WtwCpFvQoax6Y3G842vor3HJ35o15PH4EPBCh",
  "key43": "4xqwCGs6uuV5r3aw2Z3GKJ3icy5v4MrcRGadSpF1rRQT7KjNRQDzs4QtKoUFa6jKUjoZzAj6gBjZFWfmTdZTpVYq",
  "key44": "rEdxjdba2635YZ4QanznxWPkt8MXriTP9GG6rGk1D4NNBNB5Df3rPGfiawYAGEnXg7YVyHEq9s1YoUy7CjTZbRn",
  "key45": "63KhcE9WgMhRqyxks7hdh5tXxaWj6TfuAh57mubBhuXJeokZQuBiebVLK3NGiinXviEtgvUoUi8K8hfvfCXKnFXi",
  "key46": "8Hh4hLTKgYoPk72bLc2E8U6krpxNU7pxnANQU1biWo1w1fK3XVrxFT42Ds8pJzrupXQmRrZUDzXLe67gMnrfQkY",
  "key47": "NeaRw2KZ5xa3ZXkXBP2Sy2HH1Wz42cdiaiSFU6ytJ2H74un437b3AoYty3HU4LqTJivj3VLN834GHYkQtM2m1t2",
  "key48": "QXANFCM2fJDSjZpkGwDixyLKC1kse6zXEETqFShT4Pua87H2eFbuXxw7bbTk3j5XNdTJn8cGRhKjqidEPfogs9k"
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
