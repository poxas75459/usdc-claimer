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
    "4tSmobfeiv9q7QW1W6qWNe9EfsZXP1LvvneFzHtSt3Y1v49kZ8YHPKUgmGfDXpSQQGgXaZHGDo8DypZvx1meHXJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38cwAqsjUQtPC4PB4hjcV5uMDNkSjiuSVA7Wv1Jtuw2J6n3dzYok99a3NWkYNp9QnWdEatbBfBsQp1EMAuJ4TqBg",
  "key1": "2xUwqTVAG79YYU1NmBnKrznJo535RRcWTH1Eu5qg6yzj87uXbwupaxfsgXuaUQwq2KZLVwa6dJYR54pMDBTws6ZE",
  "key2": "5etQqxUr834q6fow1rf5S19rFmLE2XWnmf1LPipqzKc4AS6YMAGonV8mh7iStPE1NqvxFmoWvGAj8RhgUHpyRki7",
  "key3": "4t7GUK8gXFXkbMTrw9JShC8XTYJGeWA7TXNeBWkvPdWVWQ71vZgcTqrBUa9L6aHSE2my8RwizuCoCaRTvZ6ur56R",
  "key4": "384vYU9HRtszWNemmuWoS3Z2zAJDkhip9umT95AxoK1YcKUvc9u5GeDuVGWo7vbopoA1RLgLx4Kdrd2fesppA27Q",
  "key5": "C66onXGLffaY5aRET7ruJLgdMEVR5zgJ1mptob9KHaWpVEEknWdgYaBvvyqiQuy3muat6fb3StmtuLtwtdnUwr3",
  "key6": "3r6rV3EscAZSNPzs7EeRLk1qNpM6KSvBhMdqaEdfqz2yD3rTXAtnUwHevk1Do5QdiFWb8CR2KpNkJVMVwAeQidcs",
  "key7": "5GwEfnMCc3SFABY8KVV2Jb9kgHAfprRcw3VfzyvnFGJucoUHBnwjcgYSQwyV57EeN217qJaCxwtHBCePQsJGA4Nf",
  "key8": "5DTd4z5ti6KhAjhE4EoP9tpKWHRRRDzSpzWQ9LYq8iraPWgEP5RRFSvPBcsAgiF1agqK2yvkHTVajbD8ZK5iMPSt",
  "key9": "5r4TGxvsmh4YdMCgdYf2bFGDhWevDEnbv19SAD2afiLARZYGMYqAebCp7XKyxGCvRHhMfdT9UXt1xrbMgFWTzrYV",
  "key10": "37CoRoWdrYKX8YLwzFKZnPbQNppsHPPGok6a7FLYs9gSah3Td8vmmhDrNDShATAwKjbiQ8Bto7pWKEmiD2vMLy3S",
  "key11": "PKqHcYSe8q3LBtZvByGJRvdTA7KRagF9t6RsPRg4zSDtQsPfsPpxPMsW8YkotNPgxe9WSpn9SD9mHnadKYUCWUM",
  "key12": "8UxArW5tpBaWtJf1ZVaYy2DARNDoshp8qp3ZoCTEE2U2PXoea83na4TLGPhfh4i3cK1F6Jn3CbbZcNhhBGHF2CT",
  "key13": "3BMz4gMKkrdabaN4e4rJeVYJ2WYND4Sbun8pkDYzGqSVetmN94YxNwDHjGuUjfJ24FwVtsTRKknRTtjLZy7V9GpP",
  "key14": "59zCFcQ9GaXLckNswp9xbaTXNqvGBXf4Poa3YdnfJusxZfNvXWbX5EDZYeCeMW1hXu6d4MxLTYy6qJwK1gZLaWkn",
  "key15": "3dPPHaSYNeeqFFi1NitMaxeERTtUqksu8eGSm69YRVTCmxYEE4A8ypRTcq9XetBv5fEFWBqjEG8EZa1xm6J8rkyR",
  "key16": "52CYkCxVEgpHL2C6VnHZYPZAfwBNJA6QvJCHpYJpCcacWM5EsNNAAfJR4nkicvaSNKdaAmFe6i7UksvcMXquEXWA",
  "key17": "4FHvyXo8z5spnXqaRQvGgkmTtAQjby3uY9t5WMW6ovVo3mR3mra5At95Vos79moS9STDAYu5Cyg9rEjSRt3jtX5G",
  "key18": "3ERn3TDtoytzw7D5hQdYop8KGkEcGCVPc6VMt7t717SPtTM3Kc2NjidxjbtSGufxjS2BZjueyPhn5Teh8tmEAnyE",
  "key19": "58odLz8QL4aXwaHizp3jXd9XnrVpbpqXuATb5NhEyhxmoBmdiZCcLLVGcD9vVgHJg571gqf4soYm7QWojfAXwDy2",
  "key20": "58k2xYEZSLrsVVM9xZGRGLsSPGJBSSmiqQxYJ5Gxqthqr5jTPWb8svw7X7777sMH3j9VcEmZzPutfppPAtnw7bDi",
  "key21": "5DkDgssj7AuaMeXsyz2xF4t2MXKuv54KJ1aiQMEYKZKhsGtuv36EpmHauqg1ZjrxApdo1MxmFBkpFyhMvqBBCWRw",
  "key22": "3hEtMUw24nq8749dehQNzEVPPz6cwaCgAYVE8MYRaBMRbPRjTLJvYiRKVtnNXZe2m3ZgtLmqNGhWqHefekygXNcg",
  "key23": "3o1vrZErva96TJEcMDAx8mmAVtnyu5zsgiYeQnDv2c78DZ4wQkAL5tU1rA4EAhtqmQyeXWTFXngAMuCMXdwrXE3g",
  "key24": "3GhuUhrFdHFnew1X8oeS2YBxoqpwKGmrF1e4enF4NFym1xA2M9NzvUV11Fjd4U437FGCDtFRZU3XxxLgC4rQCzpR",
  "key25": "4W1FtaCwLB9Y1LuZXTvJqn3wm1LkUKQWZYv1TLv6c51KcT45DJg57WSZxMbRTRV1tYgzyWQ9igVPKfrAD1LKqX6V",
  "key26": "4CU5Wv5xbUBfzcgGw2f2ciT89H5vSwLg31mGeaTadr2tLByF628txHT3gTrpLNsRoj4UkPsWsG4pcM8GHfipvhU9",
  "key27": "3mYdAh4dMc8yCJHSebL3T8RBrXYZoSwyHVXZLA53xct1K212zNRNGjzN6EnPENs7BzpbjoWNDtctrD8sUzekXiuZ",
  "key28": "5WbFtX9YUucFefyFDHwmc4kgLrV9vg9MeGCF3wrKMhyxAHaUgjcQpErHgLJTsSci14qbKd3R5DCP9miTv4KhqSaa",
  "key29": "4sQ6FrW8Cpt8S83LSLnqqtkNNmHYcCWwsvMRE1hUnr1f5VWAA3kWrfFDGPPzt5U4nJN2N49i1m4DcbAPooyndwad",
  "key30": "3zT6mHb1P8Xo1K1ry4VHNHEAjZX9ASYRL1sbH64G9P6Dtrr3QqfrwuzDspkN3zkgRAXtwtiJdxZJ9kDqz8y7q4tL",
  "key31": "59KgAbq66MLfdwokvWoiBuQP7vwZeNgJrxe2EGuigVBhnzuUaaNQ1SDfMps9qUhq13NxUUhEkyM2iZRW6V4uknbW",
  "key32": "Cki14xSs5F9xhoHyECTJNcFYFCqdQ6YriyKXpzsUtzaP1jyLr4vWLKMgxZvcFN8oo26bS1umYxCSAhT68uxsxqf",
  "key33": "2Pz9jLtSDnoF4YrC32eP7GBPKNTJqxNezZ37ixjjfFF1FDWBh6dC41S1KTiEtZ9CfCCfG6oHcA3wDRxa6Lr3gjrT",
  "key34": "3UZyvGCb8T5PUYuTjh96ZnjKvaE7y3MkNDCF7qwcNNKt9wqTcLUx28jnXWn9fbN8eGBBkRZrDA7YanXLndUHJ28e",
  "key35": "4C5p5LFQZQ4BjPCvUA96JZxtcuEQQ8kv8yeFvzmbpQ3aSMuzPurUkbmj3oYGLZtP8Xp7PF4fn812sfesJyJKr4DK",
  "key36": "4PC8mNdQszeX3vxxohzVamhUdeXmd5Qgg7DWNjeEn1XxiexdKvqvjra2C4kLcZNYvrekWyiNnTUjLiBW3nPgTVcJ",
  "key37": "4nPWSpSXfbSt7jVBoUNW1mnfYGH95N5UDRwUWqt6hDgynZpVDn2UvvBLyCy7xbckujBpvs2ruhC6YpnNRq5TpKKa",
  "key38": "gjzQ5ag4NA7iUd1E6gx7gyYH4BiVCETgTTh8remcMwK5Rnv8xBzowoAGfvw9De3ae7byQiTmaSvdsocPr5rHDnb",
  "key39": "bQRV6CyVxYNQGBhnZ74mh2RVmoA481S1LeCnHPZqWjvWe8vjkbqT3Fb53xuETvLwKe1A7aa7wcqWjMBoWg9xK7S",
  "key40": "4fZk5CDfcCSHFj7yKZ2Y6CHmf1iHnEirnDDkRGtExQjiA5ZMrJarLXCCDzx1fEozx9gZDc3H3sD2B6j5iDGY7pVh",
  "key41": "3ptzvirRzwbdmBdpkupxSvrSPS8Pskb8ntB62PEzSRLXL3VXpi5JGeQziuAnETDRcezRcsG7ZPPUvP2zFtUx2sj4",
  "key42": "534Vs2ANz61p6qYiijiNgDuZram1ma7CVXWgx5vaDVNJLWun4v3EHuS4NG89i2REpkPopZHQMBRNa3dRiHa7FPhu",
  "key43": "5qS4ZaXffYd436Vn9yqN1xkYBEjY3yccWzQMaEpLPWLJbfqAx8vJau5PAgHhj6BrcBJSHNiV4MbfQrUuCPUJcNzs",
  "key44": "4iTQZ3WBL88ts7FpKZDfjTkhGLgZJHypfiPrVuBrc2RcuVfa5rVB69vLrKJEoLPNnkGyFwH5dqMYJ1HSXsaRxBSr",
  "key45": "3yfq1BFmuk9FnnHxxxz6rSnzSy6whfziDoF5cCMKWEwkC1Ub2ALF9N3UpRM9L9kw4bY3pCzxAioSTc8CVn6TLh9p"
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
