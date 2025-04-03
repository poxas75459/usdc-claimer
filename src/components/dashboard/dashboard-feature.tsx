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
    "VscCUy9nynftbqz3Qb7AD9zoUvTbSq9oXjfVYKLpjBxjSLrRL4eWFWFBDoBCcSaLWQcSHbCgyVfbzwukhf1S68M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GAxDtBkQLoMyP9tLeXHYfwVkzYKGEufcRPWzKbZCHFJP5UXGkpcFM1Wu4CP2yW4iXEojb9DymoQRKhUYA7wSGy3",
  "key1": "3VQbEobLeN5PFZaqmqWvKNW3gFjTCigAgpo4Ahn4ikgvS8spGSiTphBvug9eCHyw36EnHriRSifHPifZ2XNDxVd6",
  "key2": "jBfaiHxgyCzfmrTqu4RxL5EF8oJDisjCXg3o26wDn6mqJ9DnYJ9Fk9yXCSkD88K7sQEQerQvK87otoUSrAFobic",
  "key3": "5mnZap85SvFKiDd26Rktw5excnGk9hqbayQkKDGC7uegdBWPUXatCQHuAP6Pa1YqsRg2ZgS19zEU5KwhkmXiob4C",
  "key4": "4KKKAMbqabs7QyoSRsXtYPr1WjJ1okY8s2ydRnE1755quS2YVZu9LRYajjeNn3y9XFbLzEDdeai8snGACV3YqAuh",
  "key5": "4vU8DiGTHeYUYuQgxQVn6zd4x2CLFJvtoFArknYcfyuuBvg56CvRYZJQYT3pqcAirggCUGEBXSi2LdxRkDFiq3dT",
  "key6": "2S2YjEKWEmLenpQJqB92Lv7Fv9e7UniyQA3Ve92ngUTJseEPvpHi1NvQsdWUQE2HUystrPwBFeGL7Btwo1dysazS",
  "key7": "4j1hPcr9WyLAU1ZXdmXUfeznsup1Gc5BkFVZzYmENuTLpPyTUDb6b2SprwQMzCst2vL1Bdz54Lc43U9dcstZJvgi",
  "key8": "QSbiRAT8Ufjw2wJzqgGNeM9eBuQ8GfssYUHkU7Wwtp9QEEpD4w5ygBZbFAo27eAmYWb1h8HyB5tduHt9z6AxtrW",
  "key9": "4wHZD8HTextxD3kk62TYyDBcAtxaTUZFMmvjUD98Uyt625KenosE7kGLgW4scF8vUuEJk5VeeiREPCYBxevugWVk",
  "key10": "2aCcLPR3p9ezvprKuD1i9GPQUgYdgPLSbMEQ94XLpBkAv6gR2J6wG7ZP42JomKujwD8t64zTkAdxjugN9xN8e3vS",
  "key11": "2UFd5UnD94UGLFPPsyFpqE7MUpAKX25gfqUH2y2pPbynCzhQ9VeML8766DE14njVZXYfNJKCTdafJDoUfbTnxfYq",
  "key12": "372BraYLdWSuoov2kyU8CmLZhUr8M2q17X951ue3ndjAFmD64HUYsYAKYKnSgDruuvhfc356SQRNXgWX6yyBuZzK",
  "key13": "ShZFKr7T6aaYRmM4jG5hbVVi7SbkLKwY5Z4uUyuSczG7hNpSAeGChcYnfeTcMSPtQuGWWzwF2Fpr7MxLdFnEjAq",
  "key14": "3BhJEbQKujPR7VnDZpHTfgHE3aPbUEjDdxEeoh2vQAF8WL8chPRHPr9GXvBr5hwvAU679GHq9KHjo9CNbw29gKNU",
  "key15": "5QHfKn8AYn7gCv2rAA3Gaa5meYHJRm9Mk89s293e2YV1UytvsXxeuotHtd917DmL23XmQ8nNhtJVpjVrjqdH5koH",
  "key16": "4QhoL9QAtSdEdgyDXuw5BBrbCfin5z8rLEhYFH4iMApcMVY9uDzMrFehqzJQgMQnaVhaQX8jUrbMcTzKXm1cDEC5",
  "key17": "4PGF65qXEW1vJMrPoVyNFJaaJ6bL7qkJaryQLXQoJu7Drm7o9rbM8fgFXfYCyeoGQeiQQpp1tjdSbW4hxKYubYwM",
  "key18": "4NR1zfR9qrAGnu9T5d52jhUizyjXxy9Mn4bQZpvPpKXUAvHNFtBaRMocqCxMoGDNqZ2kSEkMwrjFuMFRq47QZwZo",
  "key19": "opueQ63Rq2QkjFiRwwtyaDkpgUtPP77roV2zTKaFhd3FGQnLLxrik5CMxcxuUJXNpRC3T3KFKW8sQULodiRSG2n",
  "key20": "45agQn5U1muFzZmmwXoPzWbfKdePopzBhM8YovkWm3FDnVNoSqBUCLybKy6pGMHkdi26hwM1UR88xLmzVb5jcRoG",
  "key21": "2pCdE14zLyfD8SxvuzCjQ5PqdxZMzMBqGf6gvaS3fykXzhPqd2FkZnYM7t3tULVUmNy2NW4gxQw6XyTumvtMaUnR",
  "key22": "5usnsch3WVv6WJCXTgBeBSzQzgZQSCMYi67N7nGxCTjPyRVo3KznXjEX6dk21GrsRU4Qk3yDPARTi1v7oJNsZbfb",
  "key23": "K98ueA9hcGuybCGg6tcio4UWjGmTnb6XE6YH8djuyfBeNxr5XuscX152AjApEPXMzi2SPJ8d913Ya9sy7T6Vuxh",
  "key24": "3mSpMVJedUe7FaLJvEcpPgPwB5zPsGvcd8LnMys3aiiutztgn8WKxZrfFutiWrRjsrpKQ4N8dxbWbT1RfAQA9VKC",
  "key25": "n4E8iwcJ1B2rTWqCZX2iCx6GLpZVJHynFA3Uq8Bjc7hcR2XhRmcQMey46sp4YG5wLY9J2pAyNrNEzuumLL9d38y",
  "key26": "4NBSHS3FGvoDqcAiumoWzsQuUWuVokzc7UYNBNYnwEuu7crgdUXR9Fi47w7S9ArABXD7ehsohwJqdcQFrgxW8XHF",
  "key27": "36w7vn1zapD8KAymWhvAu2xdcnQ7tEaEnvCf3uwX8cEdDTZKNUh86KsdbkNtL3sH7WdgfFXHrWrmFZWc8qgDWdA8",
  "key28": "4SrqRicebSjBgF8goC5dARBdnjCtg9bcd34m5hCETXkGuWM7JCKbV25rVG9uUqR7b2h33drDiBTxMYtwrDRNFw2w",
  "key29": "4PuAPRYqaLVr94Z6Trix9tgrcVoaQTFDANkCPdBHDesg6FyM5muxvpWiAXuhJkE9tSNewzak1FtsTXJNkgEmf37L",
  "key30": "3zB6eAQTk6ksAjAZR56rW5e1NYkhNjt8YdTKRMKFVUi4uhh31WqsrdaSbByYLxB9ybvzPwFvAMf9guusYgM8uswm",
  "key31": "29fqvSAbVKF4d3FMkSoMRSnw77jv4fzrcAtDnW8hoCNh3jgKimKCEy6cxAdy25oAScGhyX9DbLbK9NFoGEEiXxZc",
  "key32": "43eCapHVE1dL7ghZZQXsK8FFWpA8c538K7Qm6E4B7HGpc1KVf8ahg5tpeQAuTkJ6ErAJgETVkyJYK8wBzmRgYFL1",
  "key33": "3DowwU448Ye3DoSjuFuR4Lf2UHfhXPPfjEVHNk9ZpxMSLUoUVU5ua1YFoLmrnVa8L7qCGUebniBCYsvQoeApzBBk",
  "key34": "2PUDBYwQ833zbqMTJebDULouj3TEutKhW3Lv3v3QvJKwXe2cwVuiGssX2445Hjo3swQnBXYiRVM19q2PSYwLgQDT",
  "key35": "65UDQ4qUfCTTvwfvba32XsmSXs7wUezgMRZ5gS8zib3ksmkD4JybFP2HMdpYHBWaLTk3DmiK1NjVWteSqkoR4Z69",
  "key36": "XZGf9Wg4yChVSSWe5VsBLdueDNkvUgUosTkUHxHH9e3A4QqdfG35Si3zkEUFgqmBgsyCxNR5PVgaT8i17C31xNN",
  "key37": "4yRnLyEpFVsiWVWbmMXT8G3sPaCGYaXo4EW5R67nsVfHKesejQy8WZpsVgbLGcbPyF9DykQAZMwLrA6MKip1A1dm",
  "key38": "4iSvmbvtc2S5j3NcXzY2UVKRzYfMZNGnD5UvcfktBeuLgw2HqZ6rtRz5FhRBVLwWnR1SnwxJertXVcuptGY3P1u8",
  "key39": "vnRJPBkD7zSUseDLPGkg5fRJJhUJDnMynL4EfLrbR9W1g4nTeBGaHF4BPMXFaeTUmB5kj5aHT3iZtjnM2FmYufq",
  "key40": "5RCjFSfesAU4AHZ4mAbCPfPznbVGe8dfr2fC7s1CHMiDDhy4F7J9h7xbkUcu8Vjow4KTvtuv89LcDgqafNBXsfCY",
  "key41": "54JejU1gHdUFC2jm6jhk2hr6ijeDE3nYX8XEqnzGdPQhKHGDoy2ar9TLi7nVED6xosmYjzN5FLb6NG3J2VSdPcQQ"
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
