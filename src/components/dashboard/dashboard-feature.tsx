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
    "4eDyxf6QJQ81CDqFDiTvseYXpCtAazze6xPnRem1X9gp371o7GycWdpWVAWCAPXdDF7DGCdWvFhTwkkuKJtZvLx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8BybxjMJeKcQoPZzATaeUYeFW8TK3CnJykQJUj9Ue5mD8BLYQq5yNDi1rPnqRW6xw5hRukxfC5SAqpXKx4fbMkH",
  "key1": "38RsaPWoX9g8oQuhuUKeDGAE86ZAz3ekR7o26LTeFau7snu2zXw8zyoo3fex3T4sUujR3TvuQrAgyQEJdYFEmB6K",
  "key2": "3jwYZNuRpFyToRoja5PEMKZBMaAMe6KApzcyoXGz4j3xRXRZeAztAL8VFyFjXx2HFRpP794vEhrXZoc8Xj3de3aq",
  "key3": "4CSvHhTD24z4qQT2dk1D5Uq87mm1xCTqJdThPYa6EL5Ja4izRSKUiexCZMRLLr53zgJoqnNcs7nFjAYFtYZLPJWU",
  "key4": "2uodjwCA7m2JhvzMsz2bExj5p8xRX1U8tcNf3EJSuSzNEmdC927v31MXDYCEyabdxozDFAdH1BeMWDXAgvuL1FZP",
  "key5": "3SLby2RTvR9z3TZLuXmtRHWyTGRW8aGL7pTYoWVBpz2rEpHiknJNGzDkU8trfQeFkkHpuoMnKg3ASHTwxqHwhkUY",
  "key6": "EjNHfUbZxhZ6njdBz9FkVLLyBaiTNUKn2n3fcHgi6zNpn7GS8rUbcJ5i9EgZNKN5faN46B8LWfWjbQkLWDfoQzj",
  "key7": "3MGWpTSKtH2TorbkBK6gq4PwvYWbnxUGJCSXUjwC9hRJWBjj5DKBxsJ9yhkWSBEJtrCZHHPSLMbhkKzBUBXJepX1",
  "key8": "B1Lst2jubexccXk4bTS75FpEPZcmi1rUGcTuagzH5umA9wTPwtY8B1Ktsb7yU8iBTziwSi7rHw4ktB5noXJCS1y",
  "key9": "2s1NKomhPXkVD3mGVcZiHY7Ac1MPuzpCzAmgDC3qc3gG4iTy4aHK3QquvCNasf56y8DY1hLRoYvLyGLZuP9C9KCW",
  "key10": "3kG2rnmwEprG8KyWj8wf1ZPYXF8F9acTyP2RcWuXnHsNEHyoxerqN3ztmpJgmRr461Zc5dFY3r4YxNH9wH2JT6D3",
  "key11": "4WATXMtBo3T133iJVHjV2Vy3TwVsM8x1fD2HLtJGu5oi6mJAdZajx43dd12xeJGmk4WVxtaby4Nb3SgSq5NkCjSJ",
  "key12": "4hUNz5axpjHNVgdVk36ekxR6DAVBSaEbXi7qEMQfi6UKqLJs3nDS91GgM1S1E8WhmxuxiBuB6rU2w2b2t4rVEJ57",
  "key13": "4ELpdy1Xd5Lpxu4bvwwhm8kRykwz1kz4hCPnZGRbnYAmMA4mVxC9WbkzHpZ8WvBVnTqds8qXrqyHjsgikPpXWBNd",
  "key14": "35WNRmwSjbH3oXDAwACKtVyWTLZNQS8LXP7iGgRkob9nf9wMYXMeyDxM9k59YJxbVPRmAztXZGKKaYbX8Zj5k9EL",
  "key15": "2dRyFPANDMqBVEkw65KxTSaKVo4TLGJgAvWULEecSk4PN3Ysz2ZzTH5fb9HhCENHsEP51XymjFUGLMquELhf2PP1",
  "key16": "GKU4Lh6CzvBLj7u4q5am8F84NkcKUdaiU9GjTNoQLy9DgqrDXW3GkUZhwFfTKX5yeyjWHnXBrhFWtVU1Vipdg6a",
  "key17": "5bQ1WoKoDgW7ZPiBTm2oTjfai5YfTVyBA6ASYgFYfr7esMc9FYZqx5RTjdDhYpgFrGVWxqXSj6KZ8t3hTBL5HUuj",
  "key18": "5kAZruF2JCUt28BrkAHieuscLkKzjqyAefmjEzA83AW41gRHAgRun7bL6oMa5etDhod1v9EPz6XcfWfe2zJ1PFvB",
  "key19": "q7FsoV8k8oHtxDkf6k1zN31Tu8Cog1dp2XvThVhNUFVkzr41WNWPzY9EYWxQ3bhL5iMEAzGCnGkiMc4AkTwWVnJ",
  "key20": "2m4WKCz4JUJkE8Y5fPbHZfJqJ4poGez5c1MTDREeBYsNP6T5dmNcFQH63vYUBbiwSouyAydQ3sYu339PN3fjJYyC",
  "key21": "5AGnfy22yLQVPXi2ipGxE1d8xSJ1zj6xb2QJnVzsRhb9xYNipggjb3M6qUg6hQ2T7LzCqJe13H1WxNpr2XmUMkNk",
  "key22": "qd2TyGvP5QM8dQFBrZhQCosW6SDB2JwPGscEXAWoAHYQhuK8BgUuDhxUPwdbRZX5rytsDYSFMCoibohB5CrQMwF",
  "key23": "63XBzAbWNB59n5f6Gfay9NW6YwcNhpZAFDud2oKW2QiACc6xPKhZFNrPn4pXVfcUrADTKd6cxhp3emnfjtXHzzA2",
  "key24": "4FGKiCTReuDaHhYzY26LaKSJuQQLtKAZUAHysYsvcjVwFhcHLfG2KLARkLQoeBSWygNzz9x6vBCPedgAzd94XBgM",
  "key25": "4EHtq79Xr9jPYD2eJbrPrtoXLTmfoxSfYi3PbiYPGWufyZaaCWdkvn9cchhA5mhAHMpWdEx46wKHQjJt6wJp93C3",
  "key26": "5TcqjaF8J4jSTTqJTZhc5eW1cdRvkPEoo9zfAh9fRruLdtrPYboNBL29r3TCFxcUBdS8btgLkyZQJGi8f5np51xz",
  "key27": "5DYAKCNyEJ8q2rFSdpj5uS1ktZSM7zq8QvMGtr8kJbaWqUrndwGHCiQkUJMHAxrDBqGEw9aiDTiBL82kQLRi6mKe",
  "key28": "3p2rgtzPLkAoCX3KzteKfvgmgJxURsswspkLBqUKy5qWkkpPHxdqAB4Ukjhhgn5nH1WTu5KUQD35tpeV9ZhdWDqF",
  "key29": "5DpxWsMBAEJbNac4wMZAWrk9A1chMS5tqRLyS4qpq8MSLU2JFgUdFJhKQBpZ4JenpX3H7g6x35GqMbqGUe5km2fS",
  "key30": "xGK5XvnkBa8oR7bt5Xi64i7dszxsMXGrWLbyaiNSh4S3eVoQ6NdHBg1rJUUcPaHW9ePZkL1MsQz4AbAmAwwpJF2",
  "key31": "2UGL71yyPqHRT1UK9aePijg1mCZjUMAjtjo9gCKuUcC9dgt67XepjSHSA8Cm7VBss3SPxzeLbV2DSp8LBQTiHD9x",
  "key32": "a5nQrQL7RqEj2FnmdTdTWhRLoCV1XBVNveQ5vcMkFZ5Yf43fd6K9ewsucYYXrJMsKqeHjdpMkzGaCPyPc5pEZ6A",
  "key33": "5Dd8otJYyoMjA8rLa5ekyW1pov3oh5u7enLytqeCNZ2fEY7XGTtyfauaUpqaz7VgpDAeiMDbe65oudu6CUSspReZ",
  "key34": "9Vn9BNy1Y3MxKiQR6oH8LaLyVjSmSVkcpHTvRMYJydHstKj7qFezpW927eymJW5hnuPJHAZHerRc1enj617NbDC",
  "key35": "2gLu4w5Lo4sNRSkNAnRv3Vtx8afG6QP7QLSpQ5M6s6k1ei9gLPXUSVVtNGRSKkD5or9qY1tfVgXorF2v9eHB4frm",
  "key36": "4zBNGqEdCsi6SL637iHqnZvVbKeto18wyKfc2q95p8BuEYXfGgyfUEzwai4c4rCUSpxfAUZNkg1kKHBjgmaGRVC",
  "key37": "4wggHYELinikcWqBNCfAr4onEkZwEcAGMDqb3C7kM9dow1amzCinH5etV5A5Yj8xDwiN378uNpdUJBYJHGkZL1Xc"
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
