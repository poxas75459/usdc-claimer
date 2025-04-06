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
    "4mhhoa8XQ9tromQg5RgBEU2YAKFAuNWeRf1esvrcW9h9G9mHU4fL2wURajmCA7M3ZzdfFUkbWpshYJe2WHJqUJ5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zs6CgfcpveDmupkmeQDnAYguUVhdCgLBtBgNZGwXXfjDBFhA73HSHnys3WfHGLUoTAfxJ3Bw7cQxXU3x1u7BnVN",
  "key1": "3GmxzHAnyqnMVJJQmzxm491MNuGRPAPz9JVS9VxWjiByLjzVbxTYZeAAbmFp7iGK4xtu32JHhpqnSQ5mCAFEDGY2",
  "key2": "nC1hsbHtKzvjPLqSfat1ewyyEkC5FyWQKytK7pvu7VGKs3CCsYTRuTVBCiMi5TvWZNpNHEicQGaAhcLqAyHiX7s",
  "key3": "3sZU5XzMyvPTfY4ESS7qctqzvvz4276BDGeYtC2fDrGzm2FaZwoW7zYD1y87jfYTwxbfBs5nz5eVoLXsMFzmgvEr",
  "key4": "5bj4ZpcabewEjAScVMu696kJSMdLwY16fKzMAD2Xf9XJfXm5zzksh5tn4SEQhTwNnTk4ycctLYRcmqQjRoDvcyWc",
  "key5": "4G6ZZxeGwiC6UJPio8RzJorEgqt9Mh3CRUsSWrjTuNdG6RYMtFeE9bgBomMmvYwmjxKonGbY2VQXJiY2PghRo4Bx",
  "key6": "zZobgb4j4UCidWYapYAtMJPce6BByhLyNffiLRMvPvZ7BFiuZ23HTZb8ahPN1oHpm7FW8jAw8VdxfxZ8aD5Q4UF",
  "key7": "43vegXtzkKvJHiX5MexXY8jZXKipJZ9s5qz3MZLfBS6Ne2k2fNH2uATJkfPRW4UX5muhHabEdPJMiT34tDmeHP6E",
  "key8": "gGKos5PTAhqZHXJUro7KkYr7DwonHBXASScvmDJ97hWYfEGVM9khgVb66D9F9YJR5hKUzp5YvZnju1MHgxzaLx6",
  "key9": "4MHYjLkVH4n29YNE5cSpCyQSD6mQwuuMbiurf6SqASCRbs9GjnrZgrPwAbA9shWWm9zD4vMaPBeiqeCkD97iC3qy",
  "key10": "3m17VEq5GyXHsk91dddTKseHne2LWcKTxqmbceDyUGzAaJxihNmyd4s1bQJqxq6GVpLaKhSJ7VHxoP5GMa2XCvqR",
  "key11": "3uUP46RRf3L3Usi4wrmuw8U3Mv7X5AgUiEoBVCH3BcatDVtgHumnWkBcf9g2fSe25XWFBHVMycBbjxtpXHDwmQHQ",
  "key12": "5JDvDHyip95UbLUTvHM3Y8VVhkUXLrjgepb1SLJX1sV4A3mH3C7NdAUJpctYB1zgn9YEAJzjiCTx1XQNb3L5pEna",
  "key13": "2367b4aYqc34BqExdJi1ffnZc7QWebmx5tdQiUWaCHPuu8QzeSpUPHB1GbnSLxYnC53UxLiRU7B4EsGcykJetUoq",
  "key14": "2r4eNJoydM4bkFcFn3fdjhtqcTBAVYBF2dR5vGkxZz94ENbk4QZmSYLr4HJWc7U7L4mFzWJh69PAFuq9FhRHXHd9",
  "key15": "2LvupcVQXWnqSx1N4gj5Pn8LuYW6mhXfrs41B6YesT8nKc5JnTX6nH29CUV85QfDaYUU4VABRq9NpoZnxjBawtuH",
  "key16": "54mwn2rZdb57uCiX69zhPVhC4xKena14S5k924SYv2TEnkeaG66DRiQJzEUmNJH9Yfju4GT2t57MaAtvomTioneD",
  "key17": "5SB8LKYcyeLNbrTQXk5H1hg282gNv3gURoFfQmiJwn16K4QPmrnEfs1F6sk4MyrnjsBhBzE5YQ762kJfrLaFSk2R",
  "key18": "26ToGCxYG6t1TWCbDmqqEBYfvwMDadzC37t8NV2m8dcTXPLgJM96pwJhLrSbQwDe9R2bey86tncqxuauv3QRwvgR",
  "key19": "4PGcid9CNYi5ajZTWRhNSi99SAS46yCcjPu5N3Euw86R8LV5TY85zpTjSHLLnTJvNtcNgRnjd97HiWEtY3Dq47J5",
  "key20": "5NdXNSxqhh2z2C14EYvj88ab1pP7zJxRXvUxJie76PGQzAdU1fFDMGmxpNRFN7UBc2Hbaf7VA2NxPVQEzs6Q7hMi",
  "key21": "3pJZy1R1pTQn6QqJNQPHSJgrkfdCJtRNNA4MRFsAEV792AHpkMuFp3w5V8hXNergQzPJKbb2g2NrmVjB5MEcJ4Wt",
  "key22": "3ESsw8u1rdmr5RnKurmwoq689ijLdMoAqC72ZE7M4GhmTcbgGYDnJz3YYpCPv5xie7aQoB6mg1w6GN4xEA7cLxff",
  "key23": "4JBPfeXRAWwx6kQrFSxPv91qVQrfGCefkDYfrqbfEZyqSqdZFD4sMhLDcyeFAFVPBXwHe7NHEourw7qvbxL7WTat",
  "key24": "SrvcVcXUX4RaKCGvKBApokrLBjx8vvjDQNSiDwdZqNQRcUrXiBx1oMwgmxKH28f3ZTH78R6xwRBnd6ompBvB24G",
  "key25": "3wHWMqexEWe4UrXvq61MmLKms2skCeZiPxWKMcYhWHYyyAd47peDPBwLzDt67evYxzC7RXt3sBHQ1c6pennUWz39",
  "key26": "53wn5o3fbUr5VLmUu85rdEyab8JMpRP9zbVk92eCNSo18xPYpPUQ9CBKP5xkQPw6KtPERZ3ejWfZtSqLKnyd6SL",
  "key27": "2BbR2beBsFRXoeQ8V4mG6MCL97SNcezHQBj443JBzk73vLuyrUmRjWcaJzowXPFHsdaCjvdQBhJGVtNq1r1fgtii",
  "key28": "54YdNLjqMD8tyYrbR7qhhdScGA5mT61WpGfYJkHCsBziY3sMaCr65C1z1KRFWa5vG39q5MdDKfZWTTf5cFbNJiZe",
  "key29": "iVk8KuMAadMjS944TEHSLpNizxeXAgP6kVGjRXxk7V8WhVbXcnYWvpanxrwkSXAoQwszPG3RYPb2cfmwmauZhPa",
  "key30": "5deEkqcnnkFKA9XG9rzoKoR3iwQw4xcxeQXMKpM9jFVaCFHisKpVKD4ePSut9TC63Ji1MY4dMLf9FzSuuDNKpbNU",
  "key31": "4Vpq7FPTwh53FdJpyxahA6HskDxzM7b4sJfCTEWmjA9Q4YcisNMbR6ntRCVpbCMnVfTaDzajZBYLZKBE2kY244vx",
  "key32": "u2J4udB5E9hGQFDH4JbahrhauzJJKiEfj2XtQaUFQ3Lm3BZhGTWXpXoz2wMKaLQNr1fkTGLvKsLH6X2Tka36RHr",
  "key33": "5SAirFMtVuPp8kqFEXz9aKVsrzopoQA4wpLnfpFPjodQ4ruc9UfFkMHGhuAWAajYdNnLb6Hc1A4LN2t1jaM27voE",
  "key34": "5pjCPPp6Y4ByMegUWuf1hr5sQrZHQakAE5HQAY2qnBLNLBbm6BjcaeDupreb7wEA6VKRCaWCattfxQ9UG5orqehM"
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
