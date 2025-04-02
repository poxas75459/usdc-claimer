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
    "3wRd7DtDYJQTzx578aaV9qXoAZBe6LJzshtRzReisS59nKttrAAbt11qqqzGRk1xDHstuzFdprHEcnZyAk5AiybL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTbPNNDES85R4rCiQRha38mgVqd6D94prjmKepU3ToQDSY3i15fbPSUUJZT8Uz8EhfahVhLGxFrYR4NJAqTJ91g",
  "key1": "3STRxJFPpDYpbFjh419nk6GrLH8Xyko22CiQ8ewAaTpCNwVsLBD9rKfoWYwkos78fYFoPaC6s21jCXUoP2jHjg4p",
  "key2": "5ecq1immai1Eysrx1UXhXjCEw27DTSeSBomMHmXexKBQzaeP8SfsdX93X1GQzaoJcBWhAyPyL5iR3gdG4yuwo3nA",
  "key3": "5UpzeBBE9p1NoZXHv2MBC7ZZCFjkGU5WqnfwHRZTwtNzsVK6JXMrDtsef6AK9XuqHWh6ZSyuuW9RZZPfi2iV5vyH",
  "key4": "QM1Caa9tS3Z43ViQMLACCs3Czk6FMFeoM5Vdy4iEcjvEVw2KTxLeXdAj5F1rxopm2RRR5an3DMbjAsZohzmuEcc",
  "key5": "2FNsenDFd6fg6BKDZKJEKUk8BMi9UcPL5coqs6b38dnwMRns4pDdykTMRF1UoyPjLQSFBUkhekzeDsaESsWENyTr",
  "key6": "37S42h6uiWoMrUit9xPgXnxogHGsjuW1zLcFwDmCRHbh2NCt9qRkuKxaUiNGnWE1b7CnwTWYVaqwHdBQgUyDcLWW",
  "key7": "5AYaSFNYSDWqEiPi7djCyxekVty4vH3kZNroQRnQ8SpGtfJ2xqs56tCTdpnay65tehmKc7JkKq4QePYZgka5xueR",
  "key8": "46Nq9wSTdfJRZv9YzTLmUETVh2cr2jjmi8U7SeTG4F2c5Ypav4YYpj28QLTCb4UkCCMzHzjrALCFWV8WjcrE6iwm",
  "key9": "3yJAVYDcvRvGgfkdssbCZhwMRB4BPcNVePGhj8k6V944NQfrd4wdGHZnERcBGuZeK4xYK8VqKXon5zqH4NnaGaKJ",
  "key10": "4rgimqs8X2MPsoGNTTQCRgBvQ85QKvg8u8Yszxq27T7X5koVpEfmVfZcpHL9Us1uwiHGYgY3tcZTZRLzQWr1f1sE",
  "key11": "EYY6f5uKqTStkW3KkYJEaixiWyCzbNkeaB7S5Zka26rzEaKmbGiWmimzscn8vEUFMkWjh6GF7iwfTohziwiLbZ5",
  "key12": "LWfRonPBiyvSPcBSWK9xoqxxeNrCSPTUt9RwTmnFtxSu46HairLHsESgqwf4SkEW5JbG6P8xFuyLoT6H5MA6Z6c",
  "key13": "RiodcdQuNCbDegFioNrxnSnVnJmmpCSpqkT9EVt1USx2C8ZxWe49eyrH8vsg1DiZYNcYJM4o8KwMn6fNGJ5tsDG",
  "key14": "52CGa15T1hKFfhpREL9iqnS99TGJs3vaciiF6fSHWCPiPfPWFGrr9j7G7P8QjdMv8R6CPYP2GqqcT4FyVVQ2ZgMv",
  "key15": "2YXtjQJsvry73aGPq7xVtq8toMWrf5gdMaACbseSdPFJnepZ97rFgPF5TKReD8eiFJRU3AwThxsvsaytwdYD6GHi",
  "key16": "36GmkLKajoht1wy12K3zp5uzi5bwTMyYAbrMo8MQ3wA9p1PjiVPdsyDnJWmyCXQYftgs8B71zYAh8PgPuH5dk3bK",
  "key17": "5B3WqW5tooQZGMAtc46GX55XdWFpzvT4hQ2kprUqaSdcGfSFz5bdrpU4qKbdi2gatTiihNbxN7shiwZ93kT3ttxH",
  "key18": "2RSngiUKpiWFbN9HLMkNNtHoK6z23zTShwf3orT3nJaatAd7HNL52J25wTZf7ZcApVE7y4dNR7mCMpBQK2hR28qy",
  "key19": "3irK9gpVXiTNbKsvhRcKz2yNwTmfHfVFie8NVGPFfbCxw36Y4QN4qkwXpLjLV9tPzPcHpyWegdrWqWuJbtPTuAEx",
  "key20": "bS4m3NhfJWMjFvuRV27jD3phezxXVmV7NxB8qy6Lf9xZPm3MWDNggjS53bXY1bfN96n3WQv48s69LRrSsHak7Bv",
  "key21": "67UNzMPqirgUFiz11gehpWvpJkMq4LDSofV3jp7mak798FeDf9T97bmHo1YWeWiEfFmrymwfeRcCEC9yqwvsTqD3",
  "key22": "4GBe3SPis8rfdHfvGTon1qdnzgr28H8DLoVs4eFqwB4MWsZqm2CSrh9GR1MbX4i5yNfKDyVLxMbcWVyk6k6xDF2z",
  "key23": "2zkeFVJ53p3SGEmHhaKA7zuJhTc9Sn1wSPavduFDEFVLrjjVuZcMGowqDkwL7r5Az5YeFA6FTAo47fMTUJfo9KET",
  "key24": "86Q2qriRiDGD68NVZoZ1NJ6Kn1kHNzCXyGoS176AiUNokWmGsXzMjDCB3geXWHiNSmivcBVZARv2251nbJ55MzY",
  "key25": "2SdU8fM3nPHy3wv55T4WEmnnRNr82DGSJfU5MkdJrGhiFeF2i2pxFHpdQKF4MEwqkMcrf6jxGDCZvbA1X7WgrzQN",
  "key26": "28vFh5sFEcERz2a2TyfMZxRtmg3vw17JdhHKVYbsn7sTkJZrhw3edCqeL43CGcXhJCmjAQimtgbozhiFQMDimiis",
  "key27": "5K7KsHeWD4Hi6DWfNhyHzs95GKS9vEFnBFG7NbBzhxQZW3yWqSYHMWCb49kxGuz3mfcu3vCSQuHhQr9dmjLiGt1e",
  "key28": "4SyZJyye8DLPyQVq7791E62Aseh6TfLr7hrPy2kkwjVYmGydswuagdbuU4qBzarbMwaZnugRokDpA6fMNH7ModJR",
  "key29": "3AGjTLPyA1eJkXdHgFt9YC7S7HcZMto66rHYNKJkWNx5gH1X57tmUVHiSCQ5CJT9s1zAzLtRwfXvggkXkQAVwJSd",
  "key30": "3NWg7v2pSqfE35XmpEmXq8chefdh5pPRrRcLSo8sXdqruLJGE9yqnEyMDaXnSKKYJCrqLSVaT5jbWfJeyS6rBV8",
  "key31": "3c2Eb9kssUUNSmoptLbj6o74Y7o1vkL7DkEBmRUAxH47xio1y8HRqtoaUARbvb6bFA5XoTi164F4i4K8sEANn5MF",
  "key32": "51crYKuaL29BgC3Sc4JKwou3h9f6khJdaJBhPmhtGi68N6B1fFYvZXTjxtjapn1rWuUR9yxCF8ZFx3NQZbqLFQKT",
  "key33": "3zFpFeCgY4gkbFiu6GQQHQhT9VJespJe3NyvLj4BQCc1GJBN5FL2Z6X3zBtPJNTeFrGZ4ixZwYa3wDURCh9tJtyD",
  "key34": "3ZTK4NT1TRq9KNCtpgwiPwaf32LRKpVgoYjkXAtiggKoybuxvvkM39rDbtkyX5BunJSq6b3nkcozwsk4KjLpw4Fz",
  "key35": "AU9eZtUwkzzPiLR2LbFbAvQTmAV6PUuz7NWDCxjcX8qkXAjfe4foVPK6YaHD753HWq1c3UG8eVNo4qxMfFn4gJt",
  "key36": "4itSxSMo5YE5a1Wxev93nucXycjW45Qsah49TiNcn3iLgeNLUyK6Zgjd9ZnmeLXtKK9s16fKSqSSH4NFeSp7eJG6",
  "key37": "4xkKHmoevCPtBisYJ8CX2YZiqE9Pdb6TSo7UCi19GK7aBJ6iN2xwsVBGbWLF1WdQTbMCF3SuRgzQsUYg3Xrc3NzH",
  "key38": "4gT8xNjMvYNWcjtTV5pD47ijpbtumd6MMVMDLQ4ypQrUiXF5nnLMkeU4fApZ6VTTwSBQuScjTHZ9mzn8GAdAGbCx",
  "key39": "2H6EpttaJskXD2qPxujn8ScFT143ovk37qwFPQj1FbjCie4ZeVLX7jZpqeS4zVYgsxmkJmeCNhjE2biVYxEY59xw",
  "key40": "2fUD7pnVqUZeqj9sS24WK7UGvg3HaJnBsakx9NAN79aETAgaqWTZTanBNVvMuq7TukJ133SC9yp16fY7hPQfsWG6",
  "key41": "3mDmuEo5KZxfqVhdQEbw6ho6hCSH1UWuCcgrnsUbTwhG1m48wJ29GYMM5WeiDgJeBxhKxspcKChYw3CXiMwfZizy",
  "key42": "2LsXUQx2e71gDeEws5Y8FZLF22HMxgJi9DqTmXDKi1PphykQQbdrYDAfb9DxPRjAsjoRwx3W3d5oVQ3iq2j3kFz4"
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
