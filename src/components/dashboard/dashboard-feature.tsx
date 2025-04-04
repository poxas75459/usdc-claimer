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
    "37ZzJLf8RmsUxB867zMq6SQ49trvCbNiJUmHaCsE8VFMfAvKYGTWRGojY9vipePzh69u6PC8Jfrdfe8Hb1rRb2YT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZLaTcC4mQqKHjVtLiEcLHUdMUnGx1JXMcFWZfKxZyiEWBcEbz6Rn2ZHk4gtN2QdjP2h9EdKWy5XabqdQMcgXcqt",
  "key1": "2xFLsGyQJEK7JureAu3ZcFEeT7Cv7hXzarU9Dm2a96VHP2Mtw1LgW3SwwkX1eJqwQYi6z6YqGAHo2PZ1ipDygc9m",
  "key2": "5xjURZVKtuQSoa9NxZ2jtcp8oxjWH3SzWXxtfCzkPDJhwneW1AavRDcFwYs5ERUDS5j9ia5kMxdFLWFfAWauVBRB",
  "key3": "2YgpmiiZnirek1tENWoxhNDGGTb1GcQbbFbNjKcft9iqQXx1BzNtsQ4vgK3x1oMVkEkoVxvT3bDVnD8ost7tqHQE",
  "key4": "66zB88VMXWcAxxSm1vmchqWTmtjQQk4rsZuTsk1RVMkg6GbevfRNbqU5C71JmcqXXE3ABV3NfNhknoyzEEsUC2jg",
  "key5": "5DeFpwUEtb1rrRhHQjaeBo4wSAio1iD6NvSu2weMrNk1RUts14kf3uXPjegQeZXxt6f9JPKydgDAyiPa8GX2MyMe",
  "key6": "2FFeMZvTTYi5Pqu7mLpZnoCeuUess61vwN5wdid1kvAE3KmvFTC1p97LneQxe1eB4tSgKM97T57sWFB6dy7yCwSR",
  "key7": "LmM85bGA5K3QphV6BMjDkV89QMtXbBYejGZyptDwA5RUjXCQmbyHQ6qy8vG1RXJ3FHyV4Q7ZNV1PRiwJG8wHaFY",
  "key8": "5QGYcPgVpEmd4fGdiQqowpHmdvARpG4eaKnoTfvrivtJvbNHeKvy5mo4NtVuSubrXMSvzq24GwxFH94bJaPbA1P3",
  "key9": "bDvarbZrUuusSMz94mRnVdBEbtojrAtunRe3KBeCAcFj5gSPRGFzXodYSffg4Zn27n8S7SAtMYJJiQPrrJ8boNt",
  "key10": "4rzjFUdpYbR9DfCNNxrRs5Gju77na1db3hQJPcRmTrR2gFq4Rb4U9Qr4otuQP1euxSKtDHMpByTJDstyRtizQksk",
  "key11": "3QfuBdiK9VTCq9PZabUrJdjjDEZV5pLPFCT8vW49M9X1L5AvVTFoJFeV45d5svNcsMQGJyehrBr2DuSYmeEnfKeH",
  "key12": "5FdJ1uiwPZZiPSMJ1jCWGyCq9yXHfZgNLYsensV1baUqgZLZBkHcub6K3tGgMiSZtcPtQojLL4xiNR7ghfyM7rde",
  "key13": "NfWMaj8qNfrDX7Nf4fX2E7DnwPyD78c5ey8aAT2rW9YwheVPNbwctbapdy7qDmosWY3aPWnx4WNyB6Q1jxwGfBF",
  "key14": "3Xh4eXdMdrA1wtJmYzDJonchuQcPndEevWTBQwp6ArCYFgqxb8P3BaQTxkuidbUAFCUnUHssnvkFamejbCkqsZD8",
  "key15": "3XF7RD2Y834FmiGXiTRN3YVxv6ryeHAyaKLf7RknCGGdmCKCrjQRcoFnhPpv14htbfH9smyv9Lva6ieRaNsgxHac",
  "key16": "4vVsEvhF9qSt5wmDYDhRF8ncAXFRGjKgrJiuMJrJgvQYbd4df795m3XfZ4S6eYwpxNmNMzBMj7dmGrPiWajVbVic",
  "key17": "oPa1YsZVM2cL47xrSUc2LW1E9UxpvvPG2bLZqsiPPo7xUMbE1VHSzhkFTeooeQ8sUadv6bUQ3FFdFcsZwN5R2RH",
  "key18": "31FEJTfUn1dgnrzQU8RcBzWtLjywFMUqRLi1NdVQjrT9372WCBWxsEEL7rVybRyEwz1zQzfn1VouKetnTEWAaqPh",
  "key19": "2jPfDaEqpuAGBC4Ra9nJADCRw1TABUByM1Gr4srnTGyY1i5Ej6BFNcAf2A9mGWXDaJkFc7qD5TVDRNoogV4rxnRu",
  "key20": "4NQLnTw3oL7dNCwX3Gkm5qcRYpWnpjWax68WLWySkvTB7EqExwwHGDqykM3K69wEUqU8z6EvjAMxHCd7kAwc8oAm",
  "key21": "51SB6AU8YSp7HTssUaTGQepiDogUjM98J2THjFZHoY1oy93tek18L7cWRp7xASTbrMfZYrH5kzRuEyFUkuPUFjWj",
  "key22": "4gZnhq4mQ9RUkMxD6yRQcZSDxiPAqdyWQ4HrroyWLNysQGx2E4GMvHWcHttx87kvNN34n43bowMz4i29ydr6gVf6",
  "key23": "5fVLxzJXLqd4A2W9ZJn4xw62LH33kEiGuSA3foMG692C331ryn5GBxHiA1Vpj9StjHaPdoxKCg2uC18X6v7axAyR",
  "key24": "RH81UYMSZC4Joj3PUytP29FsZgz5iUoF5tQYuWgWDgeGDKzzKui5k3NqxZmueCTeqcZm69KQQqx9LMHbG6ML1pS",
  "key25": "3UMYywdJBC9VqHMuSqkGppTfX99rocsP2ogtjcKC9D66ZnMcBWsJkPGQKqeXN2RWhftjmVHTMUYBRcNJnvQvQjAH",
  "key26": "4Dozkidr6ZPgqhsMLNeJ8LNAfwN2iwAYRjuM6ha7WZumJjSMSg2wnEhbYJ8VvDEHX7ujJ3F2zwdygVMbAWyMp8qG",
  "key27": "4ASv7jfy7npEcaTqUfaLGpgPnxJVW3ScYeVxzBXyshY8rzCHf8UzuiWMx5CXa8LWaFewHMdyvAGi4tpmk9Zgd3UJ",
  "key28": "52ERytFEZjd8W42WLxQeUdy4ekmQnX5EqNRVUKX7YsqeZzFBnREtKKYx5wpJ9Hq7yPax8bBZ3Mg9QVpaxVvrigru",
  "key29": "45j79wqxnPqDLwW9BVKvniXFcFXKdgDGPrF7zdWC8axVyHiNiVoe9pBJiGHTZmP1569gf3VFpihrK4fn4fnD5omw",
  "key30": "5GqLYckPEWt48Q53PpJLK1fYf6zw8xUXugbezUyGAtynvEapLVf1CatkXPqYR7T4Qd8YrdK8jcikXSkw17ddmBr6",
  "key31": "5c5QYUe35HPCbm4QXY78Gcc1dqFESzFG2UdeWMAonU7RhJ6TCqeikB2zE2KDhYrKBYWQyMAZo3TAE8fKj83727kz",
  "key32": "Lj3whK7rLWPae8BSwoS7uExt29KzJ94evoVK6V7dztXDPYsByBvZZAnFqydNQiNMMLYAXWnyEjuBpTUYABjkd99",
  "key33": "5GwcWkDsb9HUsKkTGLxvQw1U8LFBPVeyms4xoNu9DC7pWzQanLUyLXJCp87bwhrjmJAFaZHmRgUncD7fPuGiLU8K",
  "key34": "34oJhts3v7KtcKX2UAgwhU8wRvrBnwf8gbxQ4eLzMzR5E81zVY2Eaopb4UhMHDs7Wy7v7V1MFDwm8bWKvCg1DfzP",
  "key35": "4TCZ8aTx9M2pGQ5SHEyAgLrqUy7yJkGJTUwrLMfhiLq3WqdYCsWKUMrCQHpPEnYCW6EQo21kejuxdMWXgenMT7uR",
  "key36": "4DQ5LxetreJAhRGzyik9ng25toZnz1hBxkH6dG9FkA6mywc4ozGE8ewpLocjv2CMwtvyUpdKEoFF7QdR3NpNz3AJ",
  "key37": "4815FdzxaoGVJCA7wNpuSuSSfCqh6RAobRBs1MtDkMAeVLkNEibsK33UCPjtUy3Ejeop2PmixvVXmHHNcxQH38md",
  "key38": "2ySTkjy5zKnfu3e2UiprDkBK43xPMVjUBbsTVwoveuSmL9tK5XGMYwc279BjwLrCE1BNLw8aWtb4R9T3sGCGKqBX",
  "key39": "2JcNRptGrv61GXmk3muNaaYuLhpD4KBNHMh7emnqdTgXNsJdj61dqZRwsZmooSio9ycD481vRAfsp6jpEKGdm2Yj",
  "key40": "56RVHdMJBNjeMNw49gx2VJ1FrGbDKhaEb7bBfp1dWyx4paCbja7kUHcFcbugtfpskXguWKqHcMeUVLcBmbHR3JNE",
  "key41": "2MrFvJnFvUhctPeEh7XGamTCh3Whas84ezqNBG2S3xFfp72ixRd45sm9vkq2rawDNY25oq6AX472KooPbqnwVxXp",
  "key42": "4QkVS4x3aAikRq1FzC1jBPSq62e7jgZVB6fRp2TJZCTiv6wUHuSYBZBbxcPzPQt1osx3xqjTSC2viGHkv7tLviha",
  "key43": "2aooNejTNoXKzNPrPDMEN7NZJKxNZMxaQm73CVgAnVACs56BaC92TvhT1Ts3mpzn1hfvwAGhdGN2hdzYFmTqdiao",
  "key44": "2eship7khQo1CWZ3usBZy6sTSrMN1ZAMqQw3q9GiM562qHkmfh8zYeURPQZHLA8ZVyA1khVMCmAfT8xtCG6Mn58j",
  "key45": "3LvzuTqLNC8ZCreBzVUdunQ4gTncC5UsD9b7DrBnLLho6tpFJWRy3WMPWkmn4z7sQJFHen9fXoiUPNfVy27sGtc8",
  "key46": "5UusLzibESGo2jPqNxhnsE3EqLbX7aFZAM7xEcqE1vszmNB6PJYGB5fFYPS8yF7HcsJLSGztr14NTJykKxrskjGj",
  "key47": "5WPd2ojYCmZhwery2iHsrxZtCNd8EZ74KWLNczKjDPrA9MtuvXX336sfACvUoFNpgFhQzKn2zvYWVnhqei31TnCd"
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
