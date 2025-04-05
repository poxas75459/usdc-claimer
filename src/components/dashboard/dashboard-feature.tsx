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
    "4sqCKvCZGWXqTxXiaXHBYNBWijiovwPnpzKS6bRcd1h27PGdkvBp6gNs8Q7mxjcHYwb85exLS9U23m8mfpahGAyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d4Fxpt1DEGnronL2ukVUquZ3tTZJtDPaj6d593c1mYmHXzcogq2cHFSqkeaAGRHJ7nPDiRg48w7nZsznVWGHHtU",
  "key1": "225BYaAUfRjXz4tVS1gagmWSWDn2tFKEzgVwAnpYynYXG8AK5B8r9u1Z2EeBAwApvqCzTRqkzN8qhfYmkWonVa9t",
  "key2": "4ixWT9vLBkiastZn2VmGvSN3bWZHAxkebLLxLbATShvpwtvEvJudbr7DEAkE7ZziYpBonjLgZ4Z5sMYFeXri5djf",
  "key3": "2WwyKmmhzRDMDnhERkRPEbBUWW2yfckYg4HZ8gycFXH7uQ2BMuuy1WrH1QpTxgPqn7bkBedUy7igNGVfswFWbf6",
  "key4": "wMhrHif6s2grFnStqn4kMdxXUXvzY3WASDwdDHMgq1JaYGm46WL4mw96iKU6yJzCfDY63g1dZPTveDRCdMgyJ67",
  "key5": "3VDDZtNTGSEzmGSNnxwmFEY1my7Pk6gNcoEzbimT7nezMgnTKbygkhAC15D3DTJRRnAV554R1BbVJhzbJHDAdUx6",
  "key6": "2wtby1YWTW8VCLDYukgPDBqhz7Ch4UuwfNMaGcrgvgmh49uw2NBknebgouLm1DQYT6i8Zc8KEmRo1W1WKygGFS2D",
  "key7": "3LqLAKoZdBoqiqSoR6Ph5oGHbfCpTRLPkgLUEUsu5RehHw8zQoJPihiReJJZjB6c2prMTcTJyZBAiynKQH2hkieg",
  "key8": "3VpvgCo2x4Dir74EsngkJeQmDMcvfz6HDwjeLZGasp1SKj84cWY6nPqeGvJJMtMXVeSKRRLU11JFJVpYCzBEo1k1",
  "key9": "3u5Yfq9tmN2zxdTBUW3wzetWcMoLoQs9bWz7ZZXZrF43niCwsWMU8w5s3BSA6TEWFDbrGPyy2WbfZwBbU8A9JakH",
  "key10": "2CU8Xa7nEdqsSfgcs61gAu6bfqTBCMDNPw1ohyFZeVrYHyxwePK6Ti973RAbpYo7U3jYhmM2UmuvfEd2qoXRZC2y",
  "key11": "2UMt5d3L2mnCTWCnxjqG8BfMGPGvnxkRyCDCJ3GZetpaEnTVEz1U4pxK27mBAj3p5n4PEoHvKKnVLU7SvEtYx1h4",
  "key12": "2W8hCqDu1BPSbM5BemCW4Dy2kJctgQEHxVehPE9nBaJgpibvW6iHaDuUBxA8L4UfsU53wzJcZD4PepcyAdoE8Xro",
  "key13": "3vUa154314gSUi7q4tmNWf6ZgXP1zFCG6tMmPR7cLG2z7uUQ5hcKHMhQ5eRbXRD1PAhn8XDeUzJSYDmxKLKYNRjc",
  "key14": "3D8fZcws66WTqq5Ui23HPpzsqfP7KMSD7GPGJos5S2HpAo9dv5Hsz7XEMeVwq4Y3sxj3L6Bgri3DQL1hkcwWA58u",
  "key15": "562zfUFKcTs1AAVo4urvxJRce4H4VrKbFHzkDdhBCHqMqxdr4wx42JxCh8rjLfi87dMZRW24mnUrSMJyCDmhqKvj",
  "key16": "2gyp67wYkLu97htSg3aUcTZhsF2ZUQsUkfzGJmXUGXSEukyjqbYFF4WJXY6FLjzHBfzH8GFftg4GtGpKdd4n7W6t",
  "key17": "3UK4SET6578b75DwMoTVw6vcdSBKeqEhZ6Uj6akLh1WFDFiQL2QMwHKJcHWpaFt3bb8eNSkkUKokczbXxvECPg9S",
  "key18": "4Dsy3M5Vx3fU9CuZHpgdCHyPvt23B9qJ2uppekUREtJTPQkwSEeuwpKsoWKihSW3PSCxub88L1yH5dAdZRVgSej5",
  "key19": "sfxzShfmdqAt7UXszhWpFXpTns9LpDK5gqwryCD1h1WZKXo1LcCt4qP6wDaRXHjamEp2ihvEQNzGMJE4Khkivqd",
  "key20": "3QDQpNwSMAMA1ENuvWhx9n7ZdVFawqRYpHu9JoFyAJVoudqmTHrizCEjYaKLExLV5pYF54tL5sxeVcwC7pBmFzyr",
  "key21": "3YyFGN4vx8j7iVuBx93PaBSpvUhFSbjMtPSThGdkibVSMugoXHyMPxtWdBjFeEog9CXZfhGCZnVzooGkBARuZLWi",
  "key22": "3ccyCy7EvmLd2z7UDVgzD9WTKezYiZMTYYC1JQ8KLSAQHzQwtdtn4AN545PYrfuEBWXE1cLJRqWA3zjtcyRMfcR",
  "key23": "4PhfurHXhv6ytiBFVRSajuejvN12h3BjZjANDiaxi5xNiiR5r6Wvs56s9cGGUDDdAjSWt6GMoHWaL7K7a3GspQCk",
  "key24": "5Z8XtMuBcTJgJEENxyzbL8bKEwZ8jb3ATAoygZsr7RQw7ny3C9ob2VJmi7A8mjpMQkq3RA1pgUM26f4kgDiwr8KL",
  "key25": "2Qj1dYiSLaWNuhquWgj6HYfTL6dwqEppJhix2oJ9NnrjS9hMp2BVbwcwaHeLkHuNsCrCkrVvdCJHTgSujjcjvpDo",
  "key26": "2eWbESnrZX6bvHib7T1Zw3JTbs6ifpW9iNWg6zjGmrQSz7AfvtKWib97cwJNRH1oqq3iXfYvXcPKzm99yp95Buev",
  "key27": "5PRKXC9AvpCjtw2hNTdCVSyjmEYsshP39uQ3HkbXqQxWQJYjir1NpTzFBLZCfhGP8gb6MX1mGMcZYZBw4TExkMpE",
  "key28": "5CKXy28M3wZPyd6CvrZ21ffnACWQ7x7unQTq32zBxaGSHRqKLDCiJEdqAMY7rR6ZkR9PNmLs2HbfC6T2SJsFdt1X",
  "key29": "58dQ5SXjqLteoSzuNchRoyuQ4Z4VpdcjA1QkiT147NEBPQ8xEipssn9u1v6F1NNLPKDtSfAwm8bEtc8K1kyMw5vJ",
  "key30": "5HHUXW6TBEWA4aGTWm2syyJeMtWeWooJwvHJhuyfshRwafCzWyEURJZDr4atw6K7dxq4NX67nUc6g2dJ9zRju8Ji",
  "key31": "4aUob62r4Ht9vXtCxwQCgUP4ZzYNDPkqckJg7A2KJ2T3dqLSij6bRbTbkfXAfZPCRhR7Ya2Fnz6s2PY3hzXF3bjt",
  "key32": "5vaqPewbqUVLovS2ZYXSNjtvSuATJLnjzHCKWQ8GHnybhA1cu1BuqQXFJM8S2ZbudUc5P2vjEGVNBLc7hCu5PSQz",
  "key33": "3ugGCDprY69ysddtSJmhmg4wgCjCX6AW78bqqihHsrzbzatfvv24qxCyDcKasCafyQQ1dSYsngrHNvqidsHfpDoK",
  "key34": "2vym53PHkvysyh6vhMPUQ8BFt9LGW5vqGXFh2sZ8Qb1WAxgZRdoPjMDoX7AhKH2qUekNKJUQ7bd8ATb58AvfobQM",
  "key35": "P57SVuNKXyk1WzHefozCG9DETG1xRhd1rM3m5yBqtBaQ3H7tUFPiCuNUP9PTWtkdqTXbUK9c1dFvMMp4DEB7Rbe",
  "key36": "5uZHu5TtoQ4LV66FoDrwtcTRjbtWfrtjXzLYz6Wihm45iBx5fBuxpMoCfZBL4H3cKjxxMKbXWSnprvGxSPo86U5H",
  "key37": "5CXTT6KKbtT7KtX8eUGFSYydz2FVEcHJK5PpgYRUJeRkKfx8Li3W8YghyVMvXpJEUMiTLefMxnohYncAo4rkgcBy",
  "key38": "5hRkaGRmWK9oSw9a6unWywNJd8vs9ivTRZsERx9f9gMhJLtnFa5awgzgfFxkpuq6acoeyqmJLcYXcnBgzhtWcSAS",
  "key39": "2LtYaTcYKNVKXF6X4YPbjJJKp93G8NCwTCDw5JWM5njz4m9UDzYC66WkmZbTJqXjfDArbJrzAwy8FNdQHNZ8zg5W",
  "key40": "4zeniC1SxqbndVhCBhFL7nzs5rnTNw3Sur7AueVcnaaLgFwrFmNvugqCkDXfrBdtowkcND62617C4XFHdSTZo3fv",
  "key41": "3uvhMu2XeaeQgManWLtYk521KrDggSHgZTJH9pA7ksaHutMYtG5bNGdNzyTrHFdVov5ZLdTsUUn16NXkfnZNzPTR",
  "key42": "vthEWNWjNKSuMFuv6eyuPApWzhKNnNWZuduCpTQaFPK7fHN9q26uUhr8tA9qU3RWQy8xL94azvWDo923H3U8cyZ",
  "key43": "576B3y1ajbWRsr6momZ4QmeigE1SKPjaXF2mCuze9HnHFDPkZsqEVFYPdFeHZ2eskkaq9CDpGDBXLX463iK5Na8F",
  "key44": "cBEgQmP2PQZjZjzvMqfCT6gdV7uxGDAUtegrHAW2XoECApiscvKZti841E158Wgne6Tn42uLDN6f8ni1aNnWwtH",
  "key45": "dg66Q8wbGs6iQZisFmh2UnSg9Z8fTCCztmb2pj8VCu7gytBaGzypRiAi6KAPrQVTnUDmtNn5WsFojELwhvSiNNK"
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
