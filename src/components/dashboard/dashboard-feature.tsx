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
    "4ce3KzLMrNaL8C2Yip2Sfvpz8S4V5NWVz4PduobcFgNVnB24otMhrGYeKN74mW1WA2CWkpB3dBjcPK2cZRSJsTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMqdLxs3EMdSwZQh88TeLmFFc95f6kLeZQ6it32D45n3T95LEtao35zvaXU1YiPUW9VaFTyHoRXbGsx9pUx8abJ",
  "key1": "63EgzKtToddnyzTmZNkKAFzr2wwseZX7b5Qp2Ktg5giWy3py3REE2pZsroQGDPMtJFjfs6ooRuZsEQwYtMq7XNhQ",
  "key2": "3s7oNUjt6pqJ4Bnf2RaeFfYnCcsErsTGMVSW7PT7VScnqY4GFwPRWVBp6yQdZgU48sy1ipsYJ1THQv94p4LFBVag",
  "key3": "5v8YaZ8SCXHSAQGjgXqNKJAmppQU8o1b72xUsbfeme8HDvyosd5EFSMGANW7wyny7wf4hpD8tT9vaBJAcRZudBMK",
  "key4": "2VYvdRt2Z81iBrvDQ5giCPinLLziiTpT6yCuFBPBh8jcqUZUkWWN9tE2vbAz5qyHgxJQ9ps14NYhpkSZXQ2pfbqb",
  "key5": "4FU57YtujwB6fBw6cD7FmZfgp1NQhtBdb5azQusUnf4zq5LkncV82mgL2vTwbKH6WkD91X1FseHZLeJ8wrzLUUkA",
  "key6": "5oFztMiqoudeKHFktLiXVr6fmWSUXdsELEBtcR7hWSieQgmnrKi9xqgswWdqY4P6vSP1nN9J368JYy6YswoPdBfF",
  "key7": "3nj6GqkEGmxGBtY4ukypUkvZ7Xkysfn8JgFK3L52fz3ZFLRYocxnGpYhfF5tfUwiBfWpSW7H5bkzYBj77iCbuc5b",
  "key8": "4w2TwmEchaDLuVH31P6gkCKxzkYECY4AJZJ6ck3pTA9Y4MMx52WW8sZpgyhePqgkZQTDffpEErQqdavHudvqEony",
  "key9": "3Jvjn46q4gKWpxmuvEexmcz3E7fPQv68DGCxdmFTkDngxLDeVnQbfwfmiBZZm2xF2BJwWANNKjQEP4fDPfFVmB2o",
  "key10": "5tyTWr6H21qETjJC8kor5u4ntRxZUR2oNLzSm67tCBV2nwZWc2XSJq7Bj8TUF7omxPcnF3F2Giw6j1Xqp7Bj3SgV",
  "key11": "DDVgdPTWDjXLxc2tDq5vYHXRYasx1gJCHb4ycpqo5aBTHACge4PcdeKUCKhrarRVHqkMbNmM3CWTKVSydm3HPGX",
  "key12": "2v2EQk4BY7akYMMZPx1CEkVA9USETyhVLxuszRAYAMNvyfcFDZLLZ76v71MEASNDuNatteFHjXZk6svyvyr9gxu8",
  "key13": "3jkgZ2yqaMKz4HsB5rGG3YVZ3FrgxghJH4ZHtX9fXvJKVNgsB3yC7ZKiep3wtqHvfdxEDRQRDA3mvLYgfeZyWCqf",
  "key14": "43Di7YCUVRh8mNL54aU5Eyvqex7Bb7poapxF6cj77F91Zp8xis5v9QBUXRKCLRQD1KtyiYeHDZugYspUSETTTfW1",
  "key15": "3xw5Vr4pHZG7ZmCSZkaE7CCnrgMgmFTZC8kvBKE7JWBQeN7FhN8iW5oaCjT94zsCWfRx8KRJg7cAPoU2JvDcbx4r",
  "key16": "2JiTEfA7Bitkvzr8LfGQ1TBxvXZsVQ4CZr3vtrb4N9DB1Qbzg6D4ztp6h23y8eoFc47ProouFAjjdHWcpxgVSc9y",
  "key17": "2JaCm81B7rKoCuTWuLJuGafUR6ELvzikp51JHAvZy51LT29YmJJnNu5FARPtLFWkdbUKMRj2frKVAiKVxYzeE2Fm",
  "key18": "45yyBCSa2JMEzzC2i3RpNHqRUyrKhSZ871THb6aj41NcwnUy3fTrdKkwzskH7i7q7jd3SCjEXB88nf2xevxtBDtY",
  "key19": "5HHy3mEJkgHMD31mdodysm87bbNvHCENVs1YDJxghgaxiy4uWTfGG2JpAZYenjcZfAig7x2MwQCMf69FwtB14zpQ",
  "key20": "53MR2ghWa4jHKHjv92MVkXEArcyjc7hhyBw6PSLV4QpKbuME1DGpr6a7X8YgSKAPYxQQtJyggpxCVfKRd5fhE1VC",
  "key21": "3zAF5GqMvRdQYvtz7b21YrpPerVHAgCaPtMeBxc8TsdSWmem8oy5zYH613ypfB5ouKdCzdnFPptGRioTvFmmMKn9",
  "key22": "51x9bGjgtj5ucW6XwhanRJCFx5DwRiD9DS1efCejbv4YVYQu3GRzugdDMWCNVhvGoFa8wS6nMAnDaDR3fhVzWQJ7",
  "key23": "56pBdowTB6P51ZTKtQkcXEfsELmRz2FgAHzosqv7AEdKi6mERU5JzS5F41weyFoMAJkXHjQWqag6i69qx5adzyBc",
  "key24": "2dpw33tKRFj9T1GQbTDDuNjFn62vV7i5rmqATsXJc8tD2qsFBTAv4wBpovXgY5niRfmUdRBV53sRyNfjZjP38Sij",
  "key25": "rGrnsRP5EvMtrwGt4yKoctF42yMMshSJH6LQbGsBKR3eNQT1gU4Y1bHj4KCLuMUC58N4MU56YyEN5inwRzMUhvX",
  "key26": "5huZtEUGof66EQFxLLwgpJSRfhTXHYJ3DM3HEeg4d1JEWCdnAQareuL4b23UU8t2hxnuWHrjPjkw5CmKYDP99FjU",
  "key27": "386AzmBaVAfcprC3X3YXrgAjfQPgqcmDNxA8HTESSczv59JC3qnLbyLXvmy88seJZRWi2SE5vQEUtRyS6pd5xJAy",
  "key28": "5hXAA7zz2h6pBVrrmPev7MiCjWcY1f3TUHM3U3gby1X3tepnyRoNsTHVK7XdsJSdt8Hk8YmYiptjeLZKgWyLc27h"
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
