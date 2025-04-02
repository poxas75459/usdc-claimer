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
    "4wr5r65TPaCV4tJknTmWfpk16twjoTeGWtSQcdqcSChjzGT2ZXjUgT4wYnWTbSUmVYHv4eKQbomL5b3nHTXaxn89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XReAL686iE5ohcDPm7EEUPoF9rf6MHFfimAst5znnDZKPo2ZYGtuxPwZBLdR6131NB3H8BnDAJLyv46yu3PVjzc",
  "key1": "33K5VkBM6eANanuqbJFng222MY485asK862JVhmwtAzqYXT7e7TqhWrYkY4UoXo1WUwChCjZDqd4iJVsKvtWwCM8",
  "key2": "4fWasV5ayqMBAL3oUrScGfdoUEDZjkmetFtGTLLQEZTHuYy6aVoM7FnKvYvjUUvDdSHsKQDjdyAEC8G1KCn74GN6",
  "key3": "tnWL1QJhxZYnZJWKYJn4C6ksAMCpA38V4PkbfpED7gkcjzaqSmz3PpVcm8Rmtz4VfLZbgfW4ysYrLJC1oHgRZka",
  "key4": "3sF6LBkA4Pt1DaUtWwHZrSt4fPi3ny4vm4xNzqJU49TMepVnoXdJaoVfBDChyhWWrtMo1ARpZAheiKK46W5qQQM6",
  "key5": "LmeDM1Q9xUDzYY76BPmLR3ba6Jvy9gbHYAww6J1Jc6Vrzov1arw8X9gKMzGowHpcSySxgPPrbwBSC16SUNtruK3",
  "key6": "2wc83Y7sQW5YNRsNdiJ74aaBN9VUymxxnpTsLWzAPGQnFjAVjicGP16jTUo9wf5QZFs7jxKeUnb1GcuKeGC9K5zE",
  "key7": "2XWcB1XdwobMW3gR3b1bdVZ4ubHEGyMoc4jDddgai9xJ2b12njh6xwMYmnQBZXtuDXwtup1Uy9j48sDoR6HKRiXN",
  "key8": "3sLfbMQvce28AzL1z1qLprqoZu7H9Dx1QVsz9ZFfkezR6PpvBmcBxeAWKUvogATrxU7yJNBqFcpPsTtLBpnetnGF",
  "key9": "3kXgK3hzfXSnU4evkB9NU5ZfkiWCNHB6isD9BVMhupTjC2caU8WLFEqfJA1ma7vwAZ12PTLkvTqEjmt2nvjxrdZg",
  "key10": "47PPrzeAwAsXacyRj9ycDFzv6uCnQixgxXduW7sVF3Wx6YJNjjfRCQrNRjVwDMmvogvivyEn4Ad1NDs9rakCv7p",
  "key11": "33HcnNv9zz61TLmnNH3xNPYMiDrxVU1n6Cu8U6r5cCEu7pDeF25AFPnd9rP7VsbVvN8kCMbGJC3FJpH8Xdg7ZEeQ",
  "key12": "2fzTBS2NSL5UZsNo7HCTdFVD3k5AeBcRHZEggVwCospavYUmet34S5XQJQqKj7V2uvfYS3SXS4g59ggS4t3Dx69W",
  "key13": "4ncmNdf7NvNXhYF8TdqEJxx629HL6B1bc3nnCjSz5koPTLzecQyF4y68SkYioCrQPLimyFXdikbRRPXn6cErYgGD",
  "key14": "2HnDb5Ko1vCizyShW7BPuSMnxFaRrpffexSfxJsuwdp7B6mmHPA2DmYuqxwMMSTv9T8KGsmHP1jmwdaTrCRR8BCB",
  "key15": "5h1r7Gzg7a7hPeDrAAtdw3hHgJwfsLGG9XxZm2bDR3JXgMxFtydaiwA2aGhWGfsW2deiWSA8qLZGW6CjMtKKKgPj",
  "key16": "2WLVWuavn3ntgqpgN6nVo22phfCu5zXxMERLiacYBBPbPNvWTK51ksfruLCRWFrJJMPF9m13sCaVXYvAGR8aFgKN",
  "key17": "2Bhe28Cj6r9e1wj34FGnJ5U94JrsZJXf51Ut5JSGYhVKSR6TUP2hikkpti9wjom4SM4oij4chBR9fo8yAHVEQ73Q",
  "key18": "4myA1zN72sS5Q4LCokPzxtrgtLX5R4UATQLhVuXuCPnHupCqgKeZnbpv872XFPgME6mRTzPGtG1E6hhx6VAFgmS6",
  "key19": "3WTGLr66zBNjTwP5aYWfdVzqBgmKeMoqx2eRCMNQVeynzb6SzcjtyAzXgcxZercjgcqN5eDmF8PVQdNKsoZyULwE",
  "key20": "4NWF93YDaq6BnHHx4eGEABWbsJLBSuJEcvFzUmrAcEu9jgb7RiZQnCNE1o9S6PboJU5KAFvTaPYK51RbicDhAkna",
  "key21": "3Jttn2qgqNi5dHMAfuUhxocY8j1rXyHJd2Z9EB6JHS7NxBDYU5mZJxBBqKZEJLLSgb7hfrpDH1H7daPspWi7UBRG",
  "key22": "4RE5VHSDvssKLxNhKQ2RixiaKjNUGTwDWrozxbiU9dQsF1hXy2G6qMbHT2WyvrX1AaPKKTVt14uv6b1gHDBf33VQ",
  "key23": "2HdnGkTckW5LqaWCHHrEbHVBQuRoUThEStDqNhZLBtSGkU7abHJ6Z43jxxvWfM98ogJcuz2iWPHHSrjpmauCDEWc",
  "key24": "2X88rdZyBHy1G6gqfCkZo49PBt6EPMYgk2n5sD1CsG8Zy7ABinBnZTTWFJaoGjkEfgv44peYoSzsjuXkot9TJ1h4",
  "key25": "3ubpdAUDJg1AML7jowS6djHyAAb55CAZKjio1qYeNeHyKsEx3366bu4fZZPRB4DCyg1x1Cq2o5H9sV6dWGAgmP5d",
  "key26": "2sMzobkYLwyKeKVaA66SA3NrK9mrMmYuN2xUZeXtCB6hitXjfb1QEXbYLoAoaxNiSsth4uybWM9GA8SVrEQT3bK1",
  "key27": "3B6ffkFN2puZFkkHqzsMa326Q15AUtc1qd3iR9uFqKhook3whRB1us9HH7EYicH4dPteRi1mLjuB18ApCeFiopUd",
  "key28": "5Uk5g4qrEJjZGt9HFUFTTv7U8aqZYJGpCUPBK3yCmRSmu7CbhbeW4FbX9UdDbTEnKkpzpLFCnXZ4psZjZUHcvshA",
  "key29": "4ygYVUDAbSspwqFVYUCJW7ABXwa2mbz7hiQa8QKU439D87kmH63BXiD2AX4vXtstWVJvWk3TsaDnFUpWFhybRiR1",
  "key30": "5PEtP7NTJ6xt4ydxFSym7nMjTht3T6QaTacve9TzqWZrk6K251Z5RtUqRCAhy39zLmFbs9D63H9BGJ2fJ8mkwubh",
  "key31": "3HKDUZfsG2YcZLfPa4e2hboVM511N6fBGrRZEQZye6ikjmYhzWZuMA69Zsngxj2mszn9KjsoXdHyBshF9cLXRjWn",
  "key32": "2HkkhUx7SUNvy2tyYsLhNvZt6HUMoKFcbpJJXgNXkPFJBoJTwzPWsWXZhrLspszJyf4KZeNS8XojhzQsgaSfiRmE",
  "key33": "21vwdLRPBC7bBh9fgQ4hXKHMeeLCRYrXNghzvjxi4UxhKq8XJEM356UqavoazAS9S21j8YoqwNUm5iv9YJBhwV24",
  "key34": "2dAsr29SsHWYBbtbd8qkisLsAN5dc2MMbUExiEjiz1hXZS3fmcLqmPeive3r7NnANLfV23oxX1xrStfSTUgwj3Nb",
  "key35": "q2gCZXGVGa74HLwZP7mQRtHLvwUeLyQPZPZmfULymyd1JujUX7gsSoGSByzTZKz3B1guK1iwrVXSKjfqGHWjy4m",
  "key36": "2iPwxPeHSP8rsAJKVV1MiiKuamyzyRP7nnEYpoxiNvhrWAaX2qZEV9nyjGekmtRQFN2cSyxSEJxzmgNfqNb4Mfga",
  "key37": "anfCEeQ9SMdQJ8VbYwtEYjLNKS71DvFWKw2N5ofDS1BJ8PGJQQ4Grop6ZRtpBCrFg9KEstYssVx5zWT3NnN2iur",
  "key38": "2ZyLnzYXyr6KNFaiTMLdZm9bTHK5QLm4nqdX8f7pW3eG7g45BKkaoaz4dcGWYJvefPDU9E5UoCrQZhSfLsTUuuso",
  "key39": "4gRqSaJyY6EWNDAenbqA7EeoEwfacPgiTuodM79PYhJDSMwueQwiEpoDMmiF2JgjzXb1euLhomPTp1V2yj7Rr6sW",
  "key40": "3SzwB6j1Z6aYhxow43Tc9Vee9x6Jcf7jFyFwNpGzaA5L8xshdKQBC9MgM5Qdwp1Jg4e8Puw2V5sjhQ8Gp8tEDgza",
  "key41": "2H6dUyvAHBcK4fVcoC4V3gbihe3K8KN7FiNV7VPxQL9hfcQX8KWZvGt1wdax6YZ8o1DeAo9mNnfRvL7MrkVDcyZp"
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
