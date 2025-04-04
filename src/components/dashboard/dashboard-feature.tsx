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
    "45BkpRNXpdVRYD6X9gikrnABprEatMavzcRp6vvFj54NbMvcwZX3ZSG3GPbnVJLebn9yuoDZvPfaAXyrq3dDeFQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ruSytyeZin7iANb9pAxLHfVuDfYmD2b86JfgbSehuViw5rzmg4YQ5XDgNazRuJHoSuVMHzH6Lhog2TgMPkXQSJB",
  "key1": "2i6nq212zG5nUGPqcLdPVJsvhQYVK9KNi7gntW8ZPs5AdKwYqqUwiPQAu1Ud9EnJXkRLTd6J8hNisyNwuYs3BbLA",
  "key2": "2rCw7X1DM8Y8JtzaZh121rBFYxh2rXAGEMHbmiMVcS9UG9aUMmAsu37g51xNLQTdEvhfiFFFmLk9dCWUbMQxBK5e",
  "key3": "3F78FBrEqj5XkHBcxeZsgvs1dWJLbiWHYnpbGzyPJ3xEu7NqrMJSWMXGpjS154envEezUTBDBNPJa4nd9T2qdtA9",
  "key4": "MaA5obNLUKYZGKqkJmrErzTiMjPB66jvUbrjJPLXTj4qbBp56D1t9MHcGL6jvjRX3KT4TdXE5k1xwZ2xzSnKh7g",
  "key5": "iL1NFQ7dymSz4XE9uTS4UF3XaUEr9tVDxY3yvssKRTL8aP8N8PpqhK2Yzg7NdoJFEiL4rHpYE3eVSAvXBaQwizy",
  "key6": "42KUwbx7XEwMuw39EtRqq51MwTPhMTutYmrSwyFQ4EMuBTijMei6swGEapNBaKg9PN3frYa1F8aRoQibj2m8vVpL",
  "key7": "5DhBgC75x4nc1vvWW3BMSooEQqvMo56j8ZmuE2e1ubPKK1M3iCANcCiJkihUycXqnqYLfQ8gvuSWFxqzbiuJJQFH",
  "key8": "wQvTgpc3VWwhud5poQunt8UyZcpYyZrrvEKCgMArDhkXVammR4fb1bEEGHNS41m7eF884LBbrqtFFc92ivwaDU3",
  "key9": "2fHjDEkAcqDC2wYfWphwE2pk8hYMkub38CdKoqnJDQqNh9Vf6txRSX1dYNeQHPU2wXy5PfHoBKEYJHyYXLikWBFB",
  "key10": "5AEeWpimjCyS4YFEDKh1M1Acb5im2D64pxFXBwg5vG6peGVoFLjEBxKz9upxt9QNkdmoRRSnkHyJeuP1GxYM2FxP",
  "key11": "xGiCeXaVRzGTwR3269Rpw9AjYmfZJueu8qCVUbups3kKXzzrFtyqxrDfiz93vxvVfeT5hCxGb4EWEZyWfu6ZfPT",
  "key12": "ru8JLbkKZyMGx8DuE2ebdtPVh3N8NgZRKCZSMUWqS5pxBk5T5mf1FfQ9XPyMkimc4hYz3jJc5sKp3uMx5b6HcWG",
  "key13": "4bnxcQ2LyXJo9z27VvxMsFJYoCA1yC5KUmHTmLi9H4YPJcJ6awB3j9WWChDRkb2DAwDoxUuSe7xgfShFj1WXYw1w",
  "key14": "5hnt1vTpshLTrZttz5hGgwTYABpAkvHjYSkHVEm87v8iSWiE7fwkYJ7vmqqubm3dKxXEjZDd1XnuWPrBX9CrgDyN",
  "key15": "4wZYkMCti7ZGcWb5zTVHTaZG4EkgkqPEP186ALP5s7CH7V3ZhP8QFvBRDPMYW9goTGouqYc93gkDUrGNTS2VKTkf",
  "key16": "AvkCo5NXHtduQPubaLU9BFqXjagVRbV5w8rg3UW1spPEPEwvRsquGUSEkSHr4uaE4yKyP2LexJ2EYx3SYQ9xwkv",
  "key17": "2kEsYB1c7Lzkd21VHQcAx448WmtXamv9za7Btfu58VwnpTVTfRHgx8i5esTU9bScZernbu5jQavuFe8z1XT3k4Jb",
  "key18": "5tdH619Sp5d4uPdNtnRSZiPRNDGDz3SPnQjwbeD3QUk7hSLZNhbTTbxVYhkzGMUNSrLNKmZe58J2TuwFGNKvA74X",
  "key19": "2AXGADDChKoWYpsRGQw84YNyv4cus76jA8pbM1NA8Ca33RtzucEQduSk9BSFKg299UnfJqvAvQUiEWsjfCFbqh7d",
  "key20": "5xHVPfuaDSySBWSeh4WfpSs8QuShGwJrfjXRvYwmR77XjbXqivV71vu6ADE9eJEbFk9CEUkkkLxzmfbrtv9PTBwd",
  "key21": "5jMUK86enTnHJUhAbBZEWX9HgVPx2G3E6yNKXkgKxMADSxQaSZqQYdk57SBZxk9bQ6sTEHsfW5JmU2qCAc856Dn4",
  "key22": "2xq6RH3NgUa2trRUhp9GaDpoZYtUR4So161ePT7pZpJCCyGrPpZPqGiqkV3igN69GFU8fVbXMzz3fhvoVLtewn6N",
  "key23": "UKCBRKsrXeRFXxu2m8yYNhW3hL6F2YAr8AubgjtkCEnX7XmqwENbo64eE7vqpzqhE5nyH296UdmcrTtWru12bWq",
  "key24": "3sdSXGKGtPWontvJ3h2Vxj7jcqyPyiYPqZW9RS2fMXfDFyoVionypJLZvQV48VEwYKqKctM51gJ4P99fQCgKhuFP",
  "key25": "3TicCG2nAtNhEDW6hJvXm3Jyf7Bwpmc7Y2Lq2jyFrefnsAfybxebSiT4UB3okLMjieVqLKqoY5nRDHs4dvbMKcdg",
  "key26": "5iFQfs1GTpRJ7pEKjyoQrsMK6ZUrQU3M7uszKTRtLjsosmH7eqDsHV8TiECgV4vKkG4Tsj7ZQtUJ95nBBKQJ9wWS",
  "key27": "2EaG39cx2Hv2mUNf1W67D1LCV2LJRqYdkECvL7gB9Dn29Gdafo626fRqP7fRPtDEbsSUMFSWVUJke34kiyCntWVc",
  "key28": "5PiTpkQDBo1B9m8zzUAazqxDutK6qro6CGJAt9bG83nqdsLEUxarRDHkxAJGikE38RjgpPxNAEHR4AcXa1ozB2yT",
  "key29": "3aZhGaoJtVsG5AV9bfdDbKGxaAtbbECMEJeWkq57FHAx4r3uPWswrLgzMtXXdfCE1Uw4WbPU6a6RVEY9WNfBhUgy",
  "key30": "5Yg4vGHVAicJxHpXVa6W2MgV5yHEMVi9wCyoQaNzYzzpr7r33f1ojzRBi9Wegk9KAuEfWXkHXhexAHyKmPgriMZu",
  "key31": "dNgDZnm59zDEAvHsg6HdhDtJNvcq9X2RvTP537S5mHtrRLMhAwsCWQFH2apuaiE6yDcraQQQf8XJgFFT1pXb1BY",
  "key32": "3xgFT2jzp6p1rTrFebkzjca47jxhBFzpu8VdaGZwxp72M5Kse4Lkqz2fYy6frgzDnt8n5pfRbUpocFebrSnqoNLd",
  "key33": "3CweMweUsgt6czfL3R3RHAbTM5bw4qBWEYYKrrDeRduJcZsyi8qURoWNFfS6Cp3ti33sPMWGB7kPAUfBMdZGnMq6",
  "key34": "ucZ3zLgkYT8gEUER1CkXKXstk1B6t3h7SUwhFH6JS18vifGeuqqGMCMxoCDtChJ44zSN3JQKEJpR7WX6a6U51iM",
  "key35": "32LdF29rZwEEJqviHUhhdHkQyCke7rvy5onHYX6WTfP7XmYHG5jALDAimSLHg3a7DGsujCf9AfkC8M4vbbzujQKQ",
  "key36": "4dwzdF5XqsC1akXeux9TzqGFBgRYUNhbLDeWJuaCQbubwLvqkDbuvwDhwbeT9Sb2Bk7DBouJdDtNP8G4KcGorDG",
  "key37": "5dyQW3uK8TLLQQxYyDWXQbDBLL8fSH9oHGRXGx5U6Dbk7mbbLJu244PCMTsg5hZEAeiERVBTwaaFCDFCAyM7S8DD",
  "key38": "TNiQFekzzVMCGv4iK9WrEo8Gdayddv38pGWUd5EVjTA2LXey7dKJxB9WfG1ZdnK1wr6zWsazHnELREfnkMUfR5m",
  "key39": "4K3Z7S7p2Nd9APT18hdu5dNvmbwzCXi2uvdPq51umPd4HDdvr4wr5Mhi12B39S8AVJxUjnXXXiVCaCp64z5dKpwQ",
  "key40": "4vbTwJRoRqwLh4Jcm6Ny4f4UwoRwH4ZAnYc2eDfJNRnptmv7Xm5EwXXx67X5S7LE7h47RiQrxxWDiKCNRjgHCw9F",
  "key41": "Qjou1eFADUY91kxBNLzcfjin9J4GBu6QkJE9hpbRLcnRqMECARaLsRxLzhNTvRZFnjBi4q69BTvhS6jzchNMxjq",
  "key42": "2f2A6VR2qvt1ZKTLHBcJdqWoYrn2USmqTQSwU4EjPzqwZLMVQqTaTp6nHSG5WWyQXRYtHPTh6zrk8MEZ8PSR7w2D",
  "key43": "4tp6iTi5S3GYP2NFuAuekw69Bg4a5baDHCf8vXtRjLM1sd3oZJiotK2DiFGUFVkkCbxTo74JSeSgk4JhrHdq3PAH",
  "key44": "3bphNED8nN7B8bGXF6E7DydwSqyn9fNUHejsGSogXkDWXKSzBTEwWy4EyxdBVLZrX7XkamvBZmXzT2xy2AJZ1dRB"
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
