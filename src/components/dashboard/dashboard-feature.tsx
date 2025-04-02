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
    "2UGUuj65sUnJvfiAi3BierT4SyaYJSFczPBwYF2cJVw3Dyq5wod3DhzsS3fe274v6e4gjeUs4YXZaQ3fZYuAiApJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6WBeHzUuUPiZB8DEK986mAH95KcshdQU7GkcSTWs5XsRYUzGD6LBpoJ5XyCdL81MYkm73FyqwJrdiNcGWHSybX",
  "key1": "3dgizZu37p7R9AtWudxcZafjtJj6PifT8oP4pDKKZ1UNDcQqwiKRyMKWuTReAUXHP4y2vuHHxhcjNC47LANKXBNi",
  "key2": "2ZeAyx1UdSXhzpp9hQ978Ni52mBXp7FCkyr3WKSub1mo4VDATcYdetgrWUXFuagxH3zMYX6jHuMuXeodTXxJb7qG",
  "key3": "3k7t23yqQPgXvNAREPbjj3Hzvyo1FCp6MB6UuH9L7sWitoqBX1pyVhVQ41CaUM2KeavwyZPyBU76fBUsp6VgT5c8",
  "key4": "2qPttqsDhUE5bReagArpj2TwvUFcnhJJt9JvHoLwDAFfyZLxGyLoL91ZdtTV8hopa3enae2NvGw44kVQhCmxi4zb",
  "key5": "aEzKG3WSoKeTyvXLJY21cbf6MaN46siXAUKLVPmSUqqabXxTPWWRrvtYzwYj4Fym7SYUM5G3e1PrRf13eYxZ5Jf",
  "key6": "2JaEkK5bdSBiN1sYN3Yy3Wox5i1aQPCm8AakDTQ5qSdNmXExdD5MfiihztDAUqvzCRCraMA8LL5RJSeggEDWLFMt",
  "key7": "4afsjxrnHTy18QZJ3b6xysq3AVm6a1CCCa4ajara5gTnf81HymYXeS5fjkTbttE6t1voje959Eox3V7b9JacLorg",
  "key8": "432DoqpknUzeRnQnfa23DLY9K6h4EF4kWxiCEDdRKK8wAC1v9oKQmuaXxUAJt2bWuMvX8YMH7iFuF62Hn4EJ12wN",
  "key9": "2EDpWa1deQz5rzRkAcTiT5oCbigxu8FGwzbKazfyUN21WAWPd2nT7vHewi9wZGc8fM2gVFbAFjo2qnGEWZa7UQvy",
  "key10": "2LHMfMpYHepV9eGYZURb5soZiTgM9X9qb1yRQbKJbM912pipYr85uUNrv6vL3jxKT3baDg3XFxW6Ndsrf4gGFnev",
  "key11": "5dzHYdqjiea2VNHF47LaaBL7uDwAipTWseSZBUwxLhnJp4TvR38q1Hay3BADHWk9HF4Gc24Wsy8mZuJnTsNybFuX",
  "key12": "vDPpcpHvyjAdVuG6Ti6B9E4v2fmeb3ArnkvCYH2jAfGKKuwXJU6WWM6XCB1gPACEkjcGAkMSxiPmUgp7dV25KtW",
  "key13": "5nCjroGj11q2Ekbz82WcsqzksPA2XkJQhx8ZgYc75hwvpPFpgQ53Qo3hK6omhZ2qhq3tCK8rZfJeLDuodG7SsoQa",
  "key14": "eLbmdjb8NmvWgA5TtcCf6mai14xkVb8Tp6ZvTnEMJwXSMWuLRELH7K8TwnmD47JV79ggedaV2VLbvzcX5Kmz4v5",
  "key15": "43tBpbVcdYVJfX5qDmxqnnikN5qeKv1v13kJR4YcSkpjKaYdS5hkKAmfDBmiUq9E2L9BHok2kdrJxBVEkdP3BLSH",
  "key16": "3bmL7wb8XnkoAHaKNZuPWuHf4BxLLETVbRQbAShk4oKaEue16bUNBuDSUM7iToLKXtJy42ubY7uQbpYPMcBqYgZL",
  "key17": "3jcnE2uHpLSHx9pDDsvKxKcU6gx773hc3vqnVP1oNvAKChoPGdxpWU3kP1GQoszibgiCVFuVe4EcSTuErzMjQYqh",
  "key18": "2SCJrzVsWiHhTiW9dvfTuN12kAiLMaXfqAFqk5ToaUiAjFf84bYh1dagqN4Z5obhHWgTEaLDn5EnCjKVHZH5idc4",
  "key19": "4xj3JUutw2v75gvn4k75yeQC9b7reM3sGq5LwSbqHAkRchdDdHJNRKYp2zW6VWPSfTXKhH4iQAJoBkuMntupxKLY",
  "key20": "38BXryCz5ZMFjkHwJGQfi1yiH7iCNYeDQMjgGrYUSGNqWQqJCAZWFnmyJXBnx4YDAVjJWodoX2T8xwP8M46neHac",
  "key21": "3QoSNEK7kDXTc1B5HVf2LC218syWCKRWBxUb3KaZw4BdkF3KyrMNBKRWHzYokahzNUGZhFFypGBjZsQEykvRW4jE",
  "key22": "3JhCMjBoxaJPasMKTBmCntnNw4jrWSiuc72sQT32kk5aSCurTB7vt5DC6r3JnTw39fVqiXjaJe4CxorRqj7tMJbR",
  "key23": "5d7GAkwqU9gEpkL4SyCgXB3NJyWdRUycSKZhFLtZF57Qtni73QMwP2SLKdnkTHhH5B9ECyT9dWmKvvAKVFdnqk4t",
  "key24": "4GDVtREZNYeWXC11VrtWU5aBbcXbVB1qWa1bKtfuB6jSmNTQg15F6xNTmijK7dhPmRHGjbQzaeKEbMUGN3gDaTVY",
  "key25": "4GLdHU8JVLEG7cvrQQAnEPHxDsfrTb5Nkm4RRvWofLgPLEpXRhzroDapZDgTmFd4n52K8WmZJ4XpHR8Fv2s3erLp",
  "key26": "5x72jpBkM7Ciirz8pmcsPKwfSYT1bAUfBcFbnBzDRqXeQYqQYenEEwitSAwJutf8qs7EYunkjqHYBXaVjkksE2B1",
  "key27": "5YVy2TMSa3kLRNHaM5yeKnjr1DD3Fu57REegQuomw7X8NuPNo8qcu7MBPfMPEMGpWycQ9hJCNhbiKrKrT8thpdDe",
  "key28": "3pwajanz5UB4uyecXpDLHyaSdfpy1mCBmVuaFH21PiE9GqCv3qSHHopFvQpgutceWpdfYPm5PJVDtao15r3w8V5T",
  "key29": "C2YnBroajjUpmHD48GZX5wQhxJVsuEwF668xQaUJRdXxRT9jy1cD5QdCx1C7hMdirdrhKbrUqUAKdwaoWMySQeb",
  "key30": "4FJqPhVhiJ7Fm3kezvr74b6CK3QiJ5giEHbeSMeuDg2nyjezkkRYtN8khKmFfbdGt4o8zyynHSmuvCud2yC2mkE3",
  "key31": "3pAkTMvxj89a45NnF1E5xw9sg5t6J44MVeFo8i3ccFqqPNgSAhXBg9bLmryqSqBaG3Rn9biEZzqbcrimPYLPf1S5",
  "key32": "4T5HWiJeXoKEyLYkJSsB3HMGKmiK63fRiVZSmsfpxH1gBPcQGhEmz1MoZGwemtbXdVJby1cMkB79cmoFxwNc26ui",
  "key33": "3CtEGJzHqtJ8jwt3iQEbouJWHfnVk83oFD4bHa95kz6KYLe4ZUMACU8ax7PArKqFnYCLypaXk44DF1RZbPw1UpXH",
  "key34": "324MrNS1PiVk7kJTp3oNvkDnMpN5ymk2KxCzjoNXvYcfxa7Rn95CNb9rrA2yxSqXTMPnf6FzCTusSQYDFZrx49Cx",
  "key35": "XeqahZXKeA6YtFkr8iVd5rr6iaqEnwUQihF1dqHTChjUr4mcohTee9k6k7NK61dmqmLZJzLdeA8h7HM1h7PHtGh",
  "key36": "3FAt9rb2uNWio3fEK7eWZeg81GUGhtyVLGft2WuvWCkDiiQhCX2WQ75cByb64dpzEg9wSfUmmRia8Cyv3Ug3CunU",
  "key37": "53ZG3KWiJfkyMr96w6Gm98mwGbLQPBubuTHUWL4rdWm9iS8b6y597KsrsVVMBtpty9UMBetQoZELirWdV11PZL1c",
  "key38": "5H6cFWnqyDrQbjjq1RKpwFGGVP5jyKQ5Hqu6K34jmvrL68evhTCjLFUVuL17TwCChGyGHB8ruwvwPWca425WhTX1",
  "key39": "32xaabTi8xqoMbbbkrw45GUMNDwDeSqzXehTDHUvJcMUuqayLKJmf9VYvhSU6Zb8462jL4mWp9vgpbG7vqQF1zp7",
  "key40": "3kESVmhJ31xdgz5WWBrdio7HTJusTDgs58Tu7hKDbiRUy4Xs7JrTtNFdCLuz8bryf4rkhHam39GhPgCFBvrHC9t5"
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
