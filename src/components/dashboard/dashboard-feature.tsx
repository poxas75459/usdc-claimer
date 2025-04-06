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
    "GX4SLMTLio3Wj17e9vXGtk1DRpayhNAjvMcqAc1X5PNTzD9xWqpxxM5x2S8s8y7wuQvPkKcTQ9YHWwy5fUhc3Qm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E9Z8TqgXZ1456BuiJQTGKH8eaF9Doy1sMJ5Myqr7wSh9LMRuNfhi8KhTdUHkpxgg2UqHAL6Tcx8JGBFEjNBLB3R",
  "key1": "4wRHdeXtN3XF4vr9ssQ49mrFnp9LJjnSxWkLY6bZ1pbmDuM5H2nXNqUi52Yt5ALPg2GKZcjgjF4nckGnDqvnouTF",
  "key2": "4qwrB3D3Such2pbG8zNpuTms9PW7V47DsmyqonYBbzXAQdG6w856EeUMciimkRRpz4GyVUkd25HmS5GusB42VJuV",
  "key3": "3LD67gUxGqtw5MPrPUV54D3kyHZcq4QuoB5TzZN76CKaGLSL3bQVETtUvU3Y2f4CqGQdmbq1s8iK1DjWBkB7a1ie",
  "key4": "38SkxAUQgH8JrJMSAegMYYonwzAT2dkbtNXPSZQPfq53MTWEzmeDSRcFzTxXoNzwSQ1R98T8K4X9RTzE8voXVbHT",
  "key5": "5AC2tDiA314JhA1kLCE8Xk5mtXFNWGaZ2BRvjH9inuT9srp5PrxpwcTycKe65LTbVRawZSj7wHY6KSPKAXZmQVng",
  "key6": "kGu1ZozFrfNfoHrmRpi6HdS2muN65jS48NQkVxCFJ2rBQf6CCjLS24eV1FZaL8kzGyngG6gKaaC4gtSHkpgHy3V",
  "key7": "2Wv1Z3mtA7AmNSPeFrf22Eb7f8wFvoPPR7WVnhFMtEv8DGBMKLYX6AW5mWF3B3B3Mea1dMNPoaB9c54sFdSgKrBm",
  "key8": "Yxij4uGsewFtpH42b1dUykhp1T5qgJvWWFYTJrcCoBrumJXzQT6Uobqq3sFA1FJtHP2WQvYWcu1at84CVdVCmqZ",
  "key9": "3oemRnKeRvHFchAvPn95bWurWddFnMfdjJp7G6D8whkp6WX3Ekhw9tzXbuGWqgFYJNegN6wYXb3cpHitiaE6ENzY",
  "key10": "4d2p61wX3k93cQmqfWY4TbfHKrwGh7YRE4VwYgffR4aiDM66mZp77sn3yxDn5UDtkdCERn1kwzvDvMqJK5TBYVXN",
  "key11": "56NWWfQSxSMmE3Q2bCJibHqYe4zZ4vShCNof3t2s7kbDBcUbUiMUiVSE7NKt21qUvETV4uGMdL9ZbbW7V6kXQp4G",
  "key12": "5uiLUFTszY2FdWvQLYgQypSeEVhyxvdemdCk5J8JZ4Wh4M8Juu2HmywpqbjCfbtPF1GhUZhfP5Dd46wwH4CwQ9j8",
  "key13": "4QenpSQhdxvcEYJF2tcfAQ6KE7mbvgozdDNySXXxhe66AL6gS3qi2Woyc1KBYHzvbJW8e7ZH1BKCjecoXpnPibRG",
  "key14": "5jdPfLU5xyzGRWRMaovctJv4EwiSPhAwWZLEnb98ktSVZBATyXnNi6LHSU4inzuqRsGGmbFt5x5Cjs1h7ET88eA9",
  "key15": "3JbyV5Sb5qPVKVe8BmtPzrHS6rfWN3gqdCiH5RAtmqDzNNHsCNsJTm49ifKNTqEsSVN94PuoutfN8FgYMv6fMyKE",
  "key16": "3YfsAeMsYDbgLv4dzuGeDerwgWGruLMB5WtB8dKNoDxmkXLVoP3Lf1432MbbkvosW19iDgMNed6HwZFRsr5rDZp2",
  "key17": "5Mj1oJQ2KiXA6Sex3SYN3aFSH1mebYFHHytMQuxbis5yqKnPjus2jJLLnTTSzn4R4BeiEvKwpVgaNMJLbABH8KdP",
  "key18": "4LXHcLJ3diDDQ2Q53KwwimzCHVhBHyjymT97NM2WQg57VkDoYEWkVX7P56EBjgPL2ZWab8GgRCyaim2E1Y2DpKti",
  "key19": "Xo7ppVtLvXg5nT1KCd5RMpDEeTmyrrMpDYCmJHk1sY5511rXxtpoYfKT15UUgc2nwRZT7AkzA5mN2y2PNP4dTFj",
  "key20": "65LogMASe6Kf4CotvQQaJfxmiDjzcCzprEjAUkZiZBV8bWJ46mr6ZMgMfYyve4u36mhC9jd2jXiDQQWpz1qddBYJ",
  "key21": "gCTmnkaeB9jDfRYMtX3tDrPz7sYnPKrATMbKUp4UoZ8mJ9qvh2SAW4qNNYimojE8VQRvzUXX5thWiQWtxZZUe5u",
  "key22": "5B2K3aZtHEwotf83Ems3ZLRYJJsaXFbjWDhgzRTW9vsBN2Wzyj3JUCwiEupJb83BvwvJjE4xVAHyC4ApCh4nE4tn",
  "key23": "27eedyCey5kSk1Wo8GRsefmEb9LJeTHwLUjL56V4L3paGr3FxsHU4PatuhNjhYa2FGWKSv3SC93uatZ2nJiYJY9T",
  "key24": "uJx78Fz9pKJc899GLwwfv1uyrMvyXxt9DmD6C5uLzTBgEEXh44qKZ7YZAN8PFwoqQYYUnjLqKP6PW5s3nA66nmG",
  "key25": "UtBpzwc4aY7nx3MiZVhDPnZ2pfZbvNEytCCCM16J1491wLHjmkXbowhTQXQAahUQUJoqtxJwPWMah3zRKdWYRWM",
  "key26": "KwhbMeEZnLeac4gbnStt7vHMbTpLmrrPajSsUvd41swzB8KBm6u4vEcLqiTi7wwK46WGZZXaAzqcawyrwoE6onP",
  "key27": "4pW3CERNnUvLE6bbDgULvzFwjoQg4v1TKSXYjYCWvunga7KJ22wdnB4BD5CSLkpmRXy3cJdnmvg1inAquo61asd8",
  "key28": "iAmmhRQo6BtgSePcbj35RhHMEAW9AQA2xGPLCVqVAuUEXNjiCzvtCMajLBiB2UYMwDpP3P765zzJGf9x5ipUiF6",
  "key29": "6H2rtcP2RZAgnRoMv9pWpYuE3TijnnjJszWwoA5i8LkD2iLfUdpaJNKDXgTLd1eT7Ec1BehLqgAGr43C4sKbptY",
  "key30": "38a32o3g2xR2nvvPzCLPtRcRT9QZeYDT4wTqjCuWPaxdeNDya3BpA615aYYig7Y7VxVkjmq1MgYHsrctpCwF25E7",
  "key31": "4gFSCPG5FqzCR2GTPYzkovUkSixxLZiBPicryNPHajaTT4egctfyy7AsucHqc7Koi7EKCDrZYAiSvxfJwgmjF8os",
  "key32": "2YjsJR45fgJvfHuTcjcxPcrRtuZDHmCQAKNKPLQPbRugvNtWbWXRPsEiwoSA1gZE7SjhGgkYodpnrhUyyqMrHNq2",
  "key33": "5nUEt9c3Be3dniAApR8Vf2M6wsDeVZNP3bH1YZweBsT6NK3kNy3w9strvDSRFatbfnyxQVBsaLCdwrp3qUm2bvpL",
  "key34": "5SW7jPC5AJTrP3uvEKTurXGLiwcoyFQZRowZvX1hAVJAPpe5Evs4PLnh1MiioBAd5ESQbf1hc3Uw5pSK4oofKRyZ",
  "key35": "oE3Q8WJxF5zp8NpHu2rEQkRufLXWRHsber1TmUtkikixYAojNBpLr1wBnnjSZ2PGqamwpknzDTHBg3VyHkuopkf",
  "key36": "39tbVh2pgyLxRUC3jKESLdcBFHRNizhZUPJwJLSSCP2mMcDmBWrUGHDy18duJZD2cFPyCkZEA93DXqhCVWXjW4Em",
  "key37": "4xKo6cZPDhLP588NHbZNYT1PJQ9nFUiCmmZLff1gS5krtENJo9Ya6gjhuoT4Y2oQXbwNWXQK4sFm9dKmJ7HQ1EAL",
  "key38": "5eWKCzAbYwoZzZ3yxsaEaq4eGgbnwDt734yUzcsTj44BF3KeZbmKvT7jJi8UvkXcTZpHN3hjccUm1YfrD6QonkoB",
  "key39": "58PysLKwTgbFqhV7sBqkdRTbvtGCm8wQHbsCjKTcwSLRFvTgxew7HNK7kdC8ZaLXH3jQhgeqfYAiAu52XuC5h4Eh",
  "key40": "61PyHX3tQjc2Vqr9ExWwAFJz1RBQ3CQ8PPbYGffpZG8reB4brp3AQoq9JFJQy6ACViN17FRFuFjTertAMohfLZoH",
  "key41": "54uMeMoENrMuuiNFh1LT5Zk2WX1sFNxDn8HpEq51pSgdLtKFzJvwdt7UmWHupZ9QLCUMZU5yuAkcgZcc43GAns3X",
  "key42": "4SSNbzSixpfDsjiKmz51vZmhtoQpvUrbVSwjxfPMo1tYapS9JpXWv7MDApQGnMLVn6Yj7sUVXGgRbKAedhR28CH",
  "key43": "hJKbdQ5NgJBbdaYzSvE3pySMURBPFhEkT4jUQK2syy99gPHpTsa4C1UUyeBKpzd4tZhzqBSdopUn8CjGZ21Z1Qr",
  "key44": "5eYqUEmk4qK6wEx6cr7Qep39pTD6RKZ6oZuRHhGwzc9sJcJk9BtYCHPhPTg737Npkz5mYvZCxw9eggzxo9uDZw2c",
  "key45": "2S2t4ZgDrsMg48Ror1KNncNeNWPaehoYKTKTY8kLU8ec5fAbWU1FQj3dqkVFp5ENgPkjrdLw8Tod2QwDQxNw1yMv"
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
