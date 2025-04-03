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
    "4V8Ycw798siAZxMR9v639yQr3uNZZMdvLrQ2RnyRyFmKxwqWhLCqbfS7sCt1LNCwYgpqDZGyQ2b54BagBVHt1wyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24KiGRXNEAWDJx1vLYuJKq8zmRmu3BCFHHutbvojk9Fd2UbSmuSp5RWrXC1QPzCLq8C7g1rikvgkhapViuaZq7oF",
  "key1": "36uXJWT5PZgtd57ReajuzWvdxV9XuDJnf3itzzpE3esB1oHrDGjSfaR3iL4KSUYujk7p5YCwzsTWPioJyYBBhPhh",
  "key2": "S1hqDt72sjhDeo9YsCjVy9XUkhwXSvR9dpHRWesbcedVyg2nfXCEKQVdrm7xz6WjrdeJPNFATRBGigZdx1VJBiM",
  "key3": "49DNgySqtqe1hpoKZGqbjkcPpNc6YtVbmg9GbDq7c7SVPibYdKZ3LC5uNWEJcZ4Sk4up9QptdcDHp2KtdNZVaPTa",
  "key4": "hTzDz5ABX2peArCmeArcjCr7i83cxsZLFK42QM9zEw63UxPc3r1yQhWWCT5TgqZTdrQzr71Mve4RgH5pRnYz4hY",
  "key5": "veBekyDjAHtxedXbabjFzisq6gtaQnianXLQd3VRUyMeMrWRRoKyZannzvvddCgLjLMMqSoxrcvMrKvMTY6yN1x",
  "key6": "hkbwq2xm4dr8io7LS2TZZKcuAeKQ5WjCAFf4Z9JUNauKGCrftmMZGFaAS5gm7CWRSzns3qarNeNrXCRyRBPVGRL",
  "key7": "NX2i2eRYtpQcbdTF7XLMdfceyA3i5awug4S5QcvJc2rPnW2MNsigYoL7WeYBZsYJLrRPd7Ldz3SiJpiDe7PKtjD",
  "key8": "P3b2jbuwshEw2FPEALuFUj5LX9mgCnT489bonuyjTd4sMznVPaDmUwKJVFEwxXdu6JD7W18e5dGckpwAQiz4QJY",
  "key9": "7nMbpGLBJ7w31J6RttfEGhsYoFe6g3c4kvEjtXJ45q2SRpiDCiuxsUHxeAfdd83W6YMJqC7zNsTrsvpVaD5qnwo",
  "key10": "34r5RWfdt11FZzZ2pDvVB5vZ8UsyRYWgGEuXnYnSRJqpq5LPeo6jWsWHGgTZFs23T1VSewxC8PUMi6b1wjpZePa",
  "key11": "49khBLbdVUxccBJM1C2DrgUDin5kg1zrdUFLAEeh2NwrKpJSaMCrpkVmTXoJH8Jk62awjZ7cf4qQmU8maKds9X2N",
  "key12": "5DHc76u5UPXoCewYX2SfQGhPwz8uxFidJv6onoRTJ9WT2Greh1e5oVzCfbhUQGF2gvshdRYU5MSYGdA98gwSQSpL",
  "key13": "3Ko8k3MaGjKEKnxwEB51KwzQKzHNtWRyb4rr2h3cNp8r3jTPsEQrDtp6VfugiFeyiZeFthG1fZHuYPyMjHE9KYJK",
  "key14": "pZpcsV1McBbvqDuGaDkfgspySkvHDJnAyntYWMoKVW7qyr7G6VBJyvQ7uyLk55NdZdjp7AGwVf2PWdcpK5pV57i",
  "key15": "3DwtxLPD6rPe5HtStoiNnAXZVAU68WNFquALiLBWqgDYQd6Keb4zHy8CeQ7osL7jSAzy9tqRje8joKUKJibMS9ER",
  "key16": "2iQy1YUMzQvinWjvV2eDA3WcT5X396NZasyBfBCEgPkWhz67MraF6bfmPV1j2co5mDeqhoVz2AXs79NVPqnZK6hG",
  "key17": "5Hsjgh4QfZ8psXbpVyW2NnnjAQypUunocZEjvnZzNTbTB7UAqodfEPUtd8TG91PNkTcmrTQz3iaWRohcpMKAWRoi",
  "key18": "5Jm2SeQ9Acet3YEZgciPDex6ExhvFpnEjFw7yES7U1dWMQWeDjRoeWHGEy7MVn6aznzsU8qSRLG8Xg2M7SeA3mBV",
  "key19": "224ktxKPyV8gBXYgjs9GtNFGevs5AgkfrNM4fXibehT3QVhjMHUwkv2TeifN7VmucUgULZpdkc1WvNdso5wb48AE",
  "key20": "4qs1TTTacmU3WLfB2JwdGchiuMSsUhBSmVPC56nXrFipcwSWKkZbpxWZHZnb7o8JQhHNVKTbccdrVRJqB72rfxtE",
  "key21": "22Ry5hHSAzAxP7cWTxjqHGacYRsCdTq1AXoEKaKnJVjTgJQX5EEBq5iHj66NmEgPpTUBdVXBPGjWkCFUvrocgiki",
  "key22": "215iAa9yPvDEgw7Wdtq2UsoNpj6sQQ2cKM2YM7UfJ2fAxUpuRoXJSkTXhaEocQ97G1nBbLE575x1joWt9ubWXjGd",
  "key23": "37xfqhW8ra5iZ8UVxVTK1vEDbS1744dcxj2gQ75B6tkWD8JGtWDQr5feigjfZbyursT6bcpjtAt9vksrFwfAB6RZ",
  "key24": "2n1QQahLseRL1wo9ZtANkJ6xGwdoxMmyitfuuEebT671Fwszi3dLT7LSstyJootLrpNxgyScbtnCy7WtJRmbAUnB",
  "key25": "3aUAwarhKLMB7g87hE5oVmVRTb2SAoeoKyjy6C2mJyaoJECcUf5CNZPm9nREQNzveAfm1U2tx3F3aJAGLMymRVqn",
  "key26": "3jBUeAm3mpWoVM22qs3nyK1XaH7N5cuXGw7J2pccmxxvkw1ryyGYMKmkDLiShBzhDoKb7epxzQADdMSEiffCj6Qr",
  "key27": "3FuFYiKvzfzaP2uf9VPAZkLsXq8QhxbZhE19KRMGcbBpH3LMycJvgK1VYmx35KbLdpRkCTW1ae6T5eYwwCEggZ8g",
  "key28": "2ANJdHbrDW4cibBaGCZXdh29dqqWbEBR3F5wQZ7dC5Z6LnkCLnsegmRev3tWKrQFVPcTX8oR9zitWeCskKyEzA5J",
  "key29": "2y6c8ot9cQVeaVK3PzbyNbn7kx2NVPjoT8KtUPvZL1KRGzLuVxn2VwLueLTbtjd5EtxNJjdWxGdNnyWCgcWszpUK",
  "key30": "32XN6bKEFEim96zWfY2zgEzUZeYxJZBSu9giMaLb15oLNyEEXiNTi2aNvRaJNdE8jxoJ3nZK7VZM7ZdjGVoZ5Ymo",
  "key31": "dALXF7weAbqoy3xPxqeycaSxVW2nKHP75bnrfJDWzGCdQ41gVCFnAmiKYPWSErBqbmHePxmdK1gUjxRc11QoSq8",
  "key32": "v9DCYjJAyZaL5hbJTABXyZs8HupZW5bcdnEzNT5ejNaRwvUKVG8BTETZtAkVKgtafEsQt3i679jQv2GQARcNQhL",
  "key33": "dsbZAv9Bnt7RzpVKdo4odG7F2yeCVoDhEgLeLAFC6eg7rFZ8WEZBE1RfQvCTNNur1UEJLAkEnkoQMMiLYecoxdi",
  "key34": "41X1eqjujhuGHwsQcBGzyzViDdENfHTgzk4Qgo6HfPdN5wivkuA78hqpRLhFvHk2Zp7eof2AZfjk8c3njCKtzVVm",
  "key35": "64UEasBcFdHvsG1DHEaw2XhKTgtCNgDf5Kab9xn5fpUhYva9E23hQ86kquzMHDc3hSrC28wDEf7JBxQU81XWtP4M",
  "key36": "JdmtoXDWzPBWiXV18a3fNXUsdBZS8j1ku4aHrPtBHG8iRak2qxF8FBSh7ujKL7zVCDXca7EbkJuJJrYK97K9BYM",
  "key37": "2qfchxRcRbNeS4tbXadQFQh3PFBiyhuvZeezafv4UzCXDTQZ5J9Kzpdo36CYy216vXkj78zrd5Ks5zYYzEB349sG",
  "key38": "3jsNEt9688Wx9XpzvEQmdAqaZbVZ9xdBW4Wcx9AY9fJ7oMe5KVycaNcb35BLyvCuRXJBjWXzXPrDSvhsho5BQRfv",
  "key39": "271gX4FWeX7S562XK9YB54DgTdYjZ8crAtbHWAZXqyZ66i1EaQUFrYyRRMoYMJ8bxJTZ57vvZjmCd98i8FtYiLnK",
  "key40": "2Ux9UGDd8F2Q5VK9v5JCXmyVg5U7T1Em7TreLKSwaQSp8oLMZbdAf8XgfMA4x2uYS9RGj29XpJc3MHGdk5VHCLVp",
  "key41": "oB1522ue16yQbn5fUQB9gf2v7wN8qM8gbuiiQ3BUq3gDXqGXEuXnWio8mk9oiumX8EZAYmLE8yRxFBwx31rb8VH",
  "key42": "3wGias6qLRdCEF8iAd3KWuBT6MBJ7QWT4CiHC4k4faP6mwRDtsjvFY3QYhwxQb8p6f9t3Hu1Zj3ihjCAvdhodz6w",
  "key43": "2drhFPyyvQwdjzFfGPkz13QsUnYK97YGYYq71D5RjiqgziYKinn9YS8b6wX4p7n1E2YJge3t4htZ5vXKe3Sa7HaW",
  "key44": "4xks5Up1kdUQE411foRMJjz9vaKQr6QS3Yoxv8UocoTyKvk9ZSxkLYbmZ6UQhpMjzU5FKcxLFUjFBNHA86bWCvCa",
  "key45": "5kpuGNyTh1XH8oqkkg3Z4jRuNRzm8HXW3SXLbrrGooGFhuAetmXX8HGS4dc5hEMpX258WQw6gufGu2hE7o7QGStz",
  "key46": "64xty2W9nrUSwtB138wrfLHAjHZUp2wxwHCAFvRyutxuGSarT5LQY1cgJ3aBx5s3RYEK2To54G43FdZgTw9gAerU",
  "key47": "3x7EYeYwT8XonjFG1TQsNEEbVZHKXiHnntuaP4Gn8NbhN7DWKXLvuaUxraQDm1o4cWUa1wGRhfmj1D3jCtcQQiKc",
  "key48": "3eX8iJAUvBuzEwvQuBVmMKKxS6bYxBfJTxsXuzNeDtpfB9xiVpR8fhyEtVUn6xYGoFyE8WcEAh8GtaptrSoJpvWN",
  "key49": "45TLXw8WXBF2R6TkyNkvGB7Wv8YDdGbQCq8b3sf3RUZLGCPDoXRV9gKT2Y8t2zx5pBok8eV3C9Y93TuZyirgQH9b"
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
