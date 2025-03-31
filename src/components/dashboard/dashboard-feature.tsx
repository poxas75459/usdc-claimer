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
    "5dEn7QzvCtcHMExNo8vba3tFmG1EarsBoNxHVNPgzJTsMGEbFCvBKieP9KTapvZRWNgF2aJBKtE58fUEdTqsM2QW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fzTbRb3rUemohvhktRhFUakGj2AVkssVrkm34P23Re3s8T8D8b4h14MWukMMhZFtmRUqKAcfqTCTnc4zD3esTXy",
  "key1": "2oxRrvwzDZ7bxZADScYz9X2Dmr38Dhvyjy2nn8apS4TaUpyAuTemnutcPQxEx2d1zVXLyNHWZG4MCn7P7dCBQ8kH",
  "key2": "29Hb4EWDu2SUBb73ykkJMHAszbqiA71AYnSZw8qKZhaSWwyuNDuwFagBB8miJVt96N18DShjxfyYbyjpKUWgS7zb",
  "key3": "yfTNDYXRZw5i2sfUAPtYSVstXqXJVxwa1CCptkjoTdFcB6bmH7WiWYtUiQjpbzaScF6fdQzaP6oyT5iu4eNj8iq",
  "key4": "5VPVEjvN2BXMarpob8iTJQQxH4vF62oPcFMyAvBTKY4LQE9wo4pqxXt8KpwCGXRbLTtjKcS1MYiZfUTYMyvEYqK6",
  "key5": "3i7yrtG5W3ibV5PNVtaXr2Y5NkUYut15X73xzq1xGvp5GP4hJnYA81yda8vzmkr8V6XKpfy7drsCa2kW4uUdowtm",
  "key6": "5Je7XnoPdPjgW1r59gqf5F3nQheSWeL4wQtAokF3J6DiGGTiaPA8vt5GX3aa7VR3DoJxbfyy8rqhMJd3KnTgqpqk",
  "key7": "2TPstVH3HNMEYCFGHUCpgMuFm9nVkWwehvMmLxHvZvHpPrGmMQHtjAbcc7T8oYhnMdsAE19hYpiTUc9SoRaZWc4A",
  "key8": "2gmEboS9mdPLj5KKgp8FpMZHVAwpN5JE7ncgofmnHpQq5pPSLHRR2FRFEqrP5PGpgKd6QdwBLEGLxAajE8CZcQ2D",
  "key9": "4BcsdNe1dKrMWiGkqYBSkRtJRL5HCFSeb7yeKNBrZxyLKPea4cSVyEztYLuP89Wp1ADTAjWnBKAhzzxMcsPyarNy",
  "key10": "3yQQW1FsqrfNgjQBoGHrMfmjiXAsz8Z7bMcQEqh3WzpaGaasp7pRE187umByfVPrHjtVsvcr7xdBHNBwptxk6Vsi",
  "key11": "3CEp41WCV4zXdv97WKxaCs3ZSR9yaQ9hiX8dbEjJ4FfJhWhVDQgm7uFX1zG7kiUPssAcuCdeQdkVUYzm7mdiNUfh",
  "key12": "2aQK5qQ8eTmZBLuMM1VCqyuKcrzWbcNS6rVaL5bR5naLdKXS16M8P9iB3duQXiGUUnpvSbjaoamQShHxNaJFhrcJ",
  "key13": "3GdmvEBkyEvTDEMKZjdNfL2vukMTck3yzNWqf2bQiW11k3grCBPssMCVy6KZ9Bk5p87CUetfRvdDw6DkfBsdpbRd",
  "key14": "3WaJ99c6onwvRXhtDGWWMvYuUFCUt1kdpc6R5UAHXv5y2yujiWWBUuo8zvhiYepEpv2pxzuj4b9GubYwLpRtdGYV",
  "key15": "2CbKuu6ZWaN6w9wfsKV8PSUpRBEiPFgn1r16L5R2NXnx6b5yiSUkAiHaBsWzEcYh9gbzSzvYkaMS4DnXgPpC6g5o",
  "key16": "5PfrKbdmF9fdvXJ4D61PMLMRGFF7nZuj2RKDc5FvSLEhAUyN8Lg7oSirQ9WLZBMx5hgSpusGpAVFZmYXNe6npYLW",
  "key17": "3Fj93tC7D4bH8sPKpqQRziBj4stNR579GzoNWHsve8vpsFJSLf59fDcMq5bkxLvE85ogmoNgpBqdR6R3YTfmGo9o",
  "key18": "2YWML5fszUm7QVrkBuUzExHf25N7Lrra5dyXZZb4gVzvYfKX8dYoAzhFgu2fuxdSPkPUoFM5Nof6tyH3L37UEJ2d",
  "key19": "39fC7az7NKv49NjvfUUk3d91SE195gYCBVz6pNsnZPMwaTUDDxdC4hRikazLRHFp8z3dgAk2mk7piKHVLxwFVezS",
  "key20": "3fYmgvZZj5QzDSsFN4paPbnkL3MGsLCHcDzvnffRVTNdXqwXe2FSbkTypGCFXmXtCNnUPSvptPN3CpbFk8eB8g8C",
  "key21": "5gritGomSes664o1VmSBQo8ECXFF4Lxgy1kB1oLYjvRs3L48aqRbVhwWQ1fPRRnuFBLACsWM9s4xkAzm1BaieZrV",
  "key22": "kXqMx4jd1LFumAHq1FwPEj5xZANF8yaAjrRgZEV2E3mZbCU7M6MsFxjAu8jHPhBsSip66DH2HwgbNTvZMqEPb8R",
  "key23": "5zXJ8trdVouGDnHz5DuLoKvVUG7ok3LyDR1YN2D5834YStizQDK86iWiWTJdfLMHSeZpmktTmYdgSxo4HbCUoJjm",
  "key24": "2gBNQjbH4734VjhcodN1JK1tWvg8jPFusaFMMgk7xhq72yLrB8MAjJLcR4bdjJAaWnW1axnsmP6HWJVWGPzWDSQa",
  "key25": "3CLSo2fy9WAhhMLhDnZ49xKLGNe4x9pPtQ61VRa7ARAy5Z2zwsEUTtZgPBdVvkdEoescQgk33Foj7jzosAL5gjfo"
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
