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
    "3RXn1jXaJrBM8oQ1NKc3f38TmuBrzZZASxEL3rQKSUWuDCPqGpMk7BjFcoyosbFQYDTdNSwodea1bKJtGuq7oV5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPz4poSJHCrcQ43fzefyp24GJzTU2MSLpFombc4GC1uHQTsbbs6Na7PLG7YPBM97Lu2WSTLXyJiAdNPYqnpsUmX",
  "key1": "TG8fr1qYpPatZq3kB1duix8YR5JJe7i56rsYtv479kRjMA2SzUMMQn5JWqk948aK5FgowRjQZc9rHzEBpr7dooV",
  "key2": "2chhxXMFwDA5V9sfSRe11hjJF3bp1v5KXhY2WvB9mnYtVRwFidUEaU1YsCrWWPE6vvbGtcUsFYSH8mhoEVfEv6Cp",
  "key3": "4Ahy1oVtCiMyfb11NAQpm97K52j2gB7pghzEh2WHLU4sAYzrpPNk264TivSwSKkxUus7SkUXJqhAhn2b7bYfbR6j",
  "key4": "5tpVhLmeJCG3iZqgiQvf7xHuSDGKTDnZ2du8z3oaf91dmahM2zLazfG8TJn1shYq3jb9MTH7Srfmfxe9fhvxwywX",
  "key5": "3JAzV2SRqwAGp8P9arNy9bdbbKBf1h2fm87ccShsVc6BpWxppcAo8aYdYqtCAnNiAx4CqtUC13DxdtEH2gL4be6S",
  "key6": "5SLTbNCdngpMyaoFGkWyk8g5ewMpDPcV2JG2Sc8g7ceTdVpctBtbwnTCaC9dfKjLMK7og8wJ8M58ydQSyV97wCZu",
  "key7": "46mGNmkJMtZDmoEQMpgfmBxxhWXNKVNWPSFzWsYyMXpSCZMYBpEqCUwafcZqSKRkYVobS1YQ4LWMyQATp2UpkHVS",
  "key8": "4LA3987i1dsLqS6sNJHc4ZGztacKHsHgwvTgm3KoBSoXb8yQQDDs1JtuUdm3zZ9B2xaUGCjgHiRdyCh3ubEGL4sc",
  "key9": "VwrgAo4E4zeyVvTZeVhmy35JBcWPEuWz7Gcgt9LRKCXXGtonHiF1W2Vgk673XqKaocqx2BcGjhGrsvhudnp2BHi",
  "key10": "3ruoWznLvdRpAwy2EjWUgNwGASTaSNh9kbKckHyedLAoTJZNHVBRAMx4GSAJ6X7Cy57G6NcHBTVmioT6rGgvoxSe",
  "key11": "26teYCTqbzphrhfqTUHfn7D8A8WjbeAAEKRrtQ9bLJ6YCnYTL6u9jkCFVnaw8Lqqc33G3PmATMH7RxYxvKNU5M7u",
  "key12": "FJ9TwBcX2CVzjtvgWoYuvZWvXEAnV3ytKzngavc2LGkdphaJ7cuWtDkL1H1KMUKmAeFYyp7K9YLWz9adNasigDJ",
  "key13": "nvLuoQ5RAoViz7jR5HMnxPrCmyzvic6E9UXsRXcec1E7gzJxeD6KN232Sb5KF9nKcKKLHxUGXuMSbxuTr6oahWC",
  "key14": "2omjsf4TyJmV7Xjvgt7yeY9acWZuKitstwMS5Qs3vepz3SmZftCqkMkSD3AWam34EgUoJ9agfz2QwN8gjp2gAdRd",
  "key15": "Y3PVoZBRdnXtWmtNiydn82Uc4bM15hg8Ni1gTtQzkekGRgZUVX4QX2QTd9poA1JTzPrrB8Xoi1DC5gj4vMKqhb5",
  "key16": "564nvdS9fR8KjAqfL2uQ1rDW1mrfKdwXRqA6L52h8Wr5p3aBr36xpjGC5fE9TqhFivdDS6Jf8Pi433P7p17tuHYe",
  "key17": "5o8119aHenYZZygUeeDT4CFpykXL7HCwk2jLDo8qz8jRjgX19x4FaYXSwFp4sLaM5uonw8z9m7g3EJm4wGKHvEp",
  "key18": "4TqNmgLsPmRzEWqcyKTKvridwXWoLQunMzCgaLRvszQJCWKhw11zxSFCavWvYDVJqWZmAdY7G61MEqcxSKLPJyvc",
  "key19": "41m91mkyatupBUqY52SFs5YPtUBnsHRo5kA6MQiXuVoezdXgs286yKCh1UBtKMwDQ82uS7haULzUF8TRCGrGpWyf",
  "key20": "2X2Jp57ybvvEbkzcE7GLaGS4oXkjGjE3yq3Gb9kzXYDu791yeGs5KWkHrYX73mogdkS6Dr1ymPPSUQ4KUjFEpPWN",
  "key21": "4XWEyKdf8rhWAw4R4DvGuZ63C5ABMeuNJVorKAaK84w7EhtChzY4aPeP7w9Xk2gMURdmzcV9gKHdQ2FXZMjXNsFN",
  "key22": "2SDHN9vF7BYAwbES8oB741rAreBZUmjbKGDiQX1mKjsuqJq6HrvDDWGXyQdwERLgZZnsxJtGamyfhp18tSPAinqV",
  "key23": "5qnNCMHzaoqL1J4VSpEB7rM7653XYW5LCm4JbgDxYXqqbuMh1ePHsf89CXAT6UppqCxBB3gNUfnmnB2YMJ8AmhoJ",
  "key24": "3MF8DjmLyhn8csbxANANWuM2ch4qmCGRSE86DtdZ5f1u3arihqrTdV2jLNsJQwg5aY2o34jm5TFGz6Uwe4L7Ghx2",
  "key25": "5dN7couK8HhujKzmVyYjgERt25jiYWbgXUEAQQ2zwZMNrMqdBfZaib78p6yBAFEjNrXns8gr9qXpa7AhKKabxk5n",
  "key26": "5AeeknFtSYGGs2XNAk6reDmV4s3jA99zu6ApEtQXmoHajbMaRT6pfmQDcA7UrGqtgeXzEFhEK8HTy7nxSF5DySv7",
  "key27": "5gf51Dw57u2aWTzEwgyzUmNxNZkNCdnBYA2c1VZjMywq3AY3oHgC26DmFBg7HVkUCtu5pBmQj7pHZcBL73iZdoZ2",
  "key28": "5cARFyiTDC4YHQj2xmvLVG5TYRehEf3Cy4KJqvuay767yw6tWBkYCAsRCo49adroUciAGc9zPnBhX8jE4xGShxMt",
  "key29": "5ogAM3gkLQBsom9uDVfUxcqCkLkL52zKrQmL6EckyJm5TATv7y1tquxqFE6DkQ3AfB7ufv2E56tNfdeE58sjfpQx",
  "key30": "5EXURbfsD2a1eQ3LnBnvKBqU4e1jJwX2he3ZwMjX14TEmh1zdKG8inHj2H7prmeFixLCKWs1B9m1qM7hYLTrHntw",
  "key31": "5Xe42qZCjS9K9vHi5DrpbBP5rR4XxtNGbYrFVuksFdUtXBUaNosM3Gms4F69zF1MxvSxJjeztZrawJomhdmBt9yL",
  "key32": "4EQMQWyH3VZKUmFTbVUx8tEGa9VHoRLu9dtSqQX2cX8SSL1WdPSV57bwehsD1EnGuJGxMo1nZnvbJw2vw79zPHLm",
  "key33": "63dUjLjCdPePhaAq6z4EC4qopKCX98jHaNiGRrgRoKzDYgKj6YS3tkpTrmyXebLxPiTQAFALntPUbYSvKUhCVNEV",
  "key34": "5TobcRr4mqB4dVe3aUJ6NNTEuj5fWJKgSc5CZ6PrHVmET7MtwTeT32xby9etb3zLGohJojGiqbQbpRj5dWQQqcoX",
  "key35": "3p22pSo9i9osDLuWvJcu5VCJySAmxNgv2ZtcVfhLW2MDqXA8gGr4exUK76r25s9UhGT1FKRwtUt2WoaYfpp4rgqn",
  "key36": "2Ko89hfjMibCanKaF84mofLVtuaFcnXu9qxD3Y9rfdi9j5WC49eKG1qaDPXLBBPY6ru4wKe9YbAByesWq4mUGunP",
  "key37": "3pUp3CY61HsRdPQSvxyYRmqWmNS6VuzonSnhxQB6BPv5vCBpPhK7rs2B1ue91CQrtuC9FyV5LAqqgpjAmgEhnqiE",
  "key38": "YB6quZjx1417hSHbW3CP1PfpNWZPoersLtoomMnLMbBU6z8hxBcyDujUEA5uWCDnbJhg2LjMPe2PbRrDU6C7PAo",
  "key39": "2QJj6qisUM4hNSGzzXKPWC1cE2bHsrBt7TfRhyjtCYxkNnDuksgB3JoTePRFPdNqpdadZiicvG78msqsP2Y9U57s",
  "key40": "4nvVo48pHjGncY69zSZSgeR2WsNwRYnN5xtdN94ycd7Vwk2kzbs7F9FaHL7LBwMVFX7UvwuBRnGPTQeiaf5Ef3JR",
  "key41": "4EtZECCm3HQ6fV3eE6DpC29BfGX1HXaRyusU8zMiN2tp4zr5ky5zkCkq8mbSdbKfwfLV7i2KCdkXVEZcakwC9Vug",
  "key42": "5jYWucn4w3vpn3aW9eoEZSVZ7cpknsWN48nQNGodqa6wtWTYzbtAQpQRC68JxtScHVPtjT15TqrGgk7FJwRkCjH7",
  "key43": "3iXXVULaYF2eG6PT3VDTzx18UKCd47aJgEJBQcpdyMQWeeWGYNoV6SP61PnhcAao5q1UijAvcHthzQ4tvz4zRYh6",
  "key44": "4eRDwkcJL1A3asZHaYQwxkMVuPmnLDcCutFvc15GDRSeqNo7s41urzhV4ftmT4g94zDcPLRjwZ21FZKyKyuoAQKk",
  "key45": "4LVAYbbw28imTZ5dXudGGK4suHwEpJWYF7q2NfHr7c2YBPXngQ4hQ3A3KRnecujN4nPJvZxB7thrqKd7kphbKrAJ"
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
