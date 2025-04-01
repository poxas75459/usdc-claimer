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
    "2BjZhvTmFi8z49Zk51eFD2xocemRKyskj12WkqcDjkVvk1mQykCrQmPpX3KwBaP1svork3NbXFkoWaRy9jYLeyza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBYPpJRomKM6ETMJ5KDDZLpBJ3fTis34dZLRUva9SR6VX74GKyWQBoRYZ8QDqExJTDR1ejXpfrrJLpEpkwEZBXE",
  "key1": "2rAyNH5ZY9M5Apj3DL28xsu5A4dRKuN3QfMaGiH7tANDgtngjUpWcD6LT8DSuwXhCqwGP48x5YP1gUtYqWbPdZBh",
  "key2": "5xK4MosZRcAZEQHrUrbXZzek3w2gGWXNvxRDe29LAN1hk7rCwwHQVehPtoppaZVMfAb3Z2HEcPY84iLufojRGM94",
  "key3": "T8NJHMtEEMC5jwRvYPwApN5aAUr6oNgimH8qSPUiPRy44b1UAukqZkqeRoBGEjMbXDsAzJYM7aRSTAvcJeBKmN7",
  "key4": "3T1bjmKzW61BvwFP5FFiVzownF8ymc7NYVBWM6KtCFr24T4mMa9NRtTrFPSAPRcVyGXxEhANZAp6UekMyPL3Es9b",
  "key5": "4y2Mr41bYSm7KUGdTedRMVqdD6dWHHb97U8VLph4FLCmYZeDadAGiCSEHbvrLEdnBtqbGeZ5HXDNT8538gGkGBAS",
  "key6": "rGB6FvECUPysH2DG9tqktDCc9XiEsHFakqCT68FK9vPCyukbjvEXpCogh8D16jkxTbkCGDV1w1rVnuDDr28chGX",
  "key7": "2RsVi2HeamFJNEhGRtXV7cJYM1n9jMEmAiZiHgbHhiAUYAdHGTXPEpAS7L98Gr74NefQWs7H4oo5vayUPNvfTWLa",
  "key8": "2NaewxoPUm173zzRr4D1ZmwnrgdvXLZCkTR9ijoJKgpEZQZtkXphz8p5Men23716URduQrSe1N4XUQCJskrnVsZ3",
  "key9": "4rMBEs8RuKSTAjguW4FoaryLquowKaHgFjNQScrv8ZZxVwSMsETNzV7fohmWpeb7181u5t7pR8vaYY9Kx1yizp3t",
  "key10": "3tfcTeGQs5KRxooviSxCvi22Z2NLp3eca3e5CvkjwuR1BqVUM8ezthqtT4rXisXVduNaMEgP6sHesAG2oQsayDyx",
  "key11": "231r7FS8SZSXWK1kwoGYXiUfZkUxCydrk81D8cEXad4VK7xoDhHF4zsfWyTNYJ79zszHSwuExcjRu2hZWDEp4i51",
  "key12": "4kHDuUfn3oa7UbB63b29why6FXj9TFzdM35WCwBdhfAGGHrvBtu3giSy1iMeY9rdZmDz98RwUJyijn9DbCRWH6Jt",
  "key13": "5B27ChMUK47nz1Rifw5423dYUiZ5CE5zSYCjqoJUJ1fHBGJLyj8MGzivsAZLnEcu4MJT6tFXZmM6dGQefRnZWMPr",
  "key14": "5rrW9v7DCrj9kmJidxAjYgU6cccwzCBGVmByDnX5Fr6QVoXiBipjdkm7JYxBGEXWe9x8x27fSmvAzdnG8iesZFsm",
  "key15": "5qqovkzrAYJtDyh6dAyt9epKYqXicmB4GhpC4WToSEWKpVBw6nz5v3f7j21nTCE2rNbuSwBuvQr4Xxk6LErgU9p2",
  "key16": "2VoRxjxHpe41jWc4EPmtqProesm8S2rX96szUv82h5rd97YNLHYv5EgAazFXH6HPUNdpqAZEwFvrRhS3nEhSLTtS",
  "key17": "5WLbaeSW2ZZUru4SmMbSMqKB2wc5aDXfvT7BsUHNxcFsSJAFBFvhGCVyZYP55iLD9Fef7qN913tWoCBC3G12MFT5",
  "key18": "4HPkB7rxHKY6ZCeQkvWnLpi2mZVErBSEU8oeFYTeATTp34Tf27gSYbhzy4DqFZ2LzujqaqriVgmHF3yTT9BV7Dyp",
  "key19": "4g5ToDS1HgACuH52Zbzk7JkjaiR3Ji9awkcwVnknQwRMoqbXw6HXPVEHsq2bqTVSYcRfKGyZGXCxedQ2XUfSpq15",
  "key20": "3BzEDo3PR5iv5SKN6NYaF87dj45wybEueCLA4JJpndavgdzhG9JaSHo2Ppp5JF9vA2ha4ZaFBabgnN21FfW7WQXq",
  "key21": "5KrcEPPtNpU4mfZBLRgbpwF32t188jnTUqkA73WWewLJRsBCFYew4FGXxtQ2m8Bp2S5R5WdmNTKRdaMUNijsCJxM",
  "key22": "2QSARKYxyqNvqsvTiU7kbGfts4Vp6VgQYNgiqEorKznYqmhnsLXfPV92v3YYVQY6a9cPyyqnVk3gGTGK2Ri9ZNuL",
  "key23": "2SEGPqe53YYM92jyuwEjXQdRru5sxdtb7XqpNroYnk4LAsqCVqvhEBM7zenWQqUbnTZwAsVuo3aXsxrZJvDTVJGv",
  "key24": "3r8E8MhUHudh5kYZzMbZCuta55LqMErwt596kuq25wbwPomL7WehnHL42H33xL21M3bhjhpzFiEHnHt6CpJQKUZ3",
  "key25": "Z8Y4TLSFbDoBsTk5WmLwgBJo3uTsyFTr3c2GqFE7R3bzbTARvVSgYiHXnfgiqVU8fmxrbQRJe9apEHaSkhjrPZA",
  "key26": "5G5rfhucFkhWEgdVv7FsPNLGVY156xVitAn8MfgkpgkjB7bHjhi6hQbq9Q1F2DP1CogN3XVMS8ao2uXnMNDnSRsC",
  "key27": "qVZ6hB2YUZMEU9mP1vcuQf9WgQauGwDZviKxAecChDhuu3Xd1T7uZnFipitr7HeF31THMis9STZP8hgfjekgydZ",
  "key28": "2xGDPWboRwWHBG9XMXgHKEudAg9HvCxavYPGaR59m28L7PxojMGhV9Nui1XC6HpCkmisqsHpcaY3AazaGyERPmvG",
  "key29": "54B9YGt6mxzL3TxwoKEaFQuxs5AYnBuMwqg26ZUh6gpHK1HdP6Hd35fLUDmnREWNeyudUvoBBnboK5jSSnsFK26d",
  "key30": "33Vk7qFMafQNdEU9JUkxWSdMfdsnjoqLpg6tVtrumoE1dHe5WRKp9MAbvCQ9isi5jn7rdjPokGycrHLhwsnPiF2M",
  "key31": "62baZABsPH9VzTuWaXyZ6TJSFLep4PN5TGfwk1dSguhSQL91tvo7sESYM5oq7gCkodHhRPt782EDku72DtECbwtP",
  "key32": "PV2TFEyTC5qVwwykKEnKmTc9gn37vunegmqJJCE9zLuVaGEavsEAy43W9FYK6MajvqrQv6ARHeKdx9C7Wm8adQ6",
  "key33": "2NYa5jtujEnzoGC8SJjA5pZo8xLWe1WnTFQhFqLH7GQus3zgkZzqKwEyVAhPDqK6DRHnHKsBN1ipgzZDHQACouk4",
  "key34": "d13g4BMszAQEfgKttqdSKwftZhGps1heBnjnJkCoBbMRHpxM7X6mJiHTphBLBXSh5ymiNe3ghx8PmGkEwZ6xTNo",
  "key35": "ZAmLEjUNaik5Zp5N7EUz3VsCjMpJcxdMQscVAGK9JC1rCfACwoJtRMut6KEiYSGjguwjrHoyKRPHbjwPqaasiGq",
  "key36": "28s4xHAvmx4uyVbhr1JetZ641da4KKAF3a9mLkYqdu9mSEgtvMcR5WwhWXSYm3hLVLwij5vA1NxGmfE54QGyzi1L",
  "key37": "Newp3EZSDTPDA2TikSDmwWjAFpSaGrv12khP3vJGHQrXh9gUv6nqdQSzCtQyJSjUkkoWGejPZMVyFPi9EKbZvaR",
  "key38": "3tebnavVX8t2xnbPaAVS4GbUH7oeNaemFYQfaBcPMQnvLKNQ6sexKJkcjrzggazjqUayVkiL9QecD3KNiQBweQNr",
  "key39": "3UJhcBLCJHEvNr6Kgo9iTWib2HTCbhN858Wgcme4AkHK7dieFcWbfjPHj7BUfXVP1y5zCsX6t8dTwP988ihe5fsj",
  "key40": "4i9GgyXhJvwpMJeNWZoUgi78MNgqCepwuB2bnvDD5pHZ1kcMKXJiGTTmfdqY58FvPi9XyeSGRqU76px1vXGSiSrF",
  "key41": "3uf6SgmBtqBTFqfK51dfEsLbPc5FSP6ch6HHhnc5uMEfRGNh76NSKfv7Go4E2bDQ41Rwk3yKsevP6DG5F3CQvhYH",
  "key42": "2vJL6GfBoC9Ueet9y4p5pnzLf5AxyHauYFcuF6ah95pZUP69WxsCeHwDbg7ixyaf8p5Bpp3oaL4iKGzKDapkRGMX",
  "key43": "4LFzWb57wxaKTRqLyPk2cxQ3NTrKTpkdhhWidhqTkgjpvbErLCv4wAoqjbn1mh5foe6Fup5Qbc9eum6qCDChGwmU"
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
