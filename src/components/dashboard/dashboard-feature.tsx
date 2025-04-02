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
    "3STQxPpkX64X8XnzBVsdd6sTBf4iiwJ6TisWpGN88RhrJeR7Gc2dYjd6fgWz8aqTm5zRbzTNQFkE2CrN4h9DFjbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptTxuZwUmvsm25oqARnsESvSaxgh7ptoDvoVhkW8d5Vwir98ozWGpH5rAp1DycrXeeiEKqoh7kryxNHjs2VVZC7",
  "key1": "3zWAihqSHEQVMLFzhE3T22EQRQc7ETNjaxahC8NxacDBeZJLBiHTRbv8cBPU5DzsUA2EJ3WwpCrkXa9phkPPXy62",
  "key2": "9haf2sEentK7CVTVmogftK8iMCHXvv4F1yiVUJeednkcFqJjwrUDMYKenePEQ1CoTu9cEwstV5GonFWtZF5kkiq",
  "key3": "4rPwFoMLHALJsezk4r74rvVDE9TrLxHwcJVskMGYE6FXVpJ5k8MS3Mtq2SCYjYT4bXrDaRFPQ8wyGdy2yLTBdJxT",
  "key4": "vQMJKTUB1pxuif2vAn1cFhWGGrZETgSrxy2cGM2BmT3vAaZKdpx23MmSsC5opHbP191c1st7faxG8iL8qWdHKKD",
  "key5": "RHkCMUAetn5XMpvyrVMvnHSTLxDXbmeAr7D5kZQX3jmbUYiUdP84gBYM1SAvJ2CgtKmQjw1yrvkZ3Eq8jsL22aX",
  "key6": "2HX24xUJ694avY4WfaQmhwieWWBA9nguoMywxcQTQURNWLv1niDcyiiXanbB5Z69cY2sp1rNQc9DFNDZGpQ3NL9d",
  "key7": "4JcgVRLcs5bJXsqttzSMQ8NJasDroA7v87Pj6f4fCcu99ZdTN5DtwC53UZXHtcxssV19dopXwQKPMZMWPe28SDmv",
  "key8": "anfFfJ4BJq3gL799S7KPWXicxME7HyGnt52WYHhxC9reKKNNVd5gdisaYzeznbNrujBYBFgBgXZyzV6uvXvemC3",
  "key9": "3UnHMGDVt3Nx9pxpiomHDjCZM1XVS4BE39JNM4puF1qtfxbQ1XHJ69HPacvPNEwBrCMG8t65McUtkyNKFdy9fcu7",
  "key10": "2UEMaECqAg5iRqekUEgo3v2En2Ar4pcm9MPgia8rkUUTipPLmSrBagN3HVSNySySHhyhe3mstWFjJQHqauoyBDES",
  "key11": "vXLKfh2rYQUbQmDj9zrcneXdHEDKKYAekSQr6uVsZyttTk9yKJ2woPePVeHSuZKJCVs5cDujq4pj5D1LZ6GdHUm",
  "key12": "45PHyNHLyULMMvZ5HA9eG9piT1EUT1hNhTvhqhiFDEDdgzixBdRWKDkhzSiTigNNsfMzNcZDhyBBHS5g61jJS2p4",
  "key13": "2WoMLYqDVAjpxQcHvYcKcxPpwXgqVB9UvyqwXj7DfpdnopSdjVjgBGtS1qhWRLyeuVa9EJCQvCYQweG1BEbvrzo8",
  "key14": "4aMTvRaQW3ryQ7VnAsdKAcMfTcNBSB64e4FkocwdALQ2mDgHPxmYmfkF5C8sFK7Az8o23bUwuC3U8Xjfjqy3mwDp",
  "key15": "4Zgvgt4S3fEbRk61NBGbyKyqqmF1iwyr385oZ1yEFAJfBSnPRSwFYSHKeUMXSskpozJLza9KMhom61dFraqmZQSN",
  "key16": "hmLWeUKq87nxxEfFwF2VeNijp6n5yQQQFxDhpegFR2zp9Ni9u6QLPmjBBurwVAeeThcGy4KrmfScVfkgMTvnYiZ",
  "key17": "EkCmaJ3DVc1UethHzFCXzTnYZtEjB5kWd7egeGV8QLJ8xyrh6GpTy1TVqoQVF7A8P2B4jfnMJkwVYRecVLkudKN",
  "key18": "67Zb192yvuf11wXL3PLoqb7d8pd29nqoHKb5ZVwXNHvdNkgfFmbsg49PXTLN74Pgfv8KfBCfW2VpoEzaM2L2hQUs",
  "key19": "49Exnhhur7pSJf2kfUjfa84aEBVrHTRTPeGHZZuvQxDG2r3GTFYUvfaYLob5YwFR5KS3q17wTdSGURJua6yXs4uX",
  "key20": "5CWR5SaTTmo74EYZLNcbEbnpVyJZWeL7BnGE3xRGsw2MpzE56jAwVRCCFyvGtSBbWucHkadDzeUYeDnmgSwknXY3",
  "key21": "51V4suoxHXpgxQfSJtgEF39VcqVnA6JFVTRchFSbBf5s4CkKffCnTT9Rj7jexrkuifBCdZq1koaTxVKLRbBYrGjS",
  "key22": "4ieZnHfqSwfSbwCtqdGzB5BWUcrs7VtdWyJxaKh1o3KX5P7YH91zS4nZSVZNKPMC6KppQ9EEddcFTtzENnGkN4eK",
  "key23": "3T8vtctv3YVhohkLHnQdhY2HW4hSfypPsBZamFPgsdPGSgyp5AJeRMnHe8kQkVopqejK7D23KadbVH94ZjUbbWRF",
  "key24": "3rbRLXmHdtYH5xrpoXcMmg5pNhTyemFD94GCBVL91QRJT98QChqUjTH1vPsrdRsHcR7Rsur5HZeapuQiGA54gmUf",
  "key25": "453xTyesfa3Bu7sjLBY2w7uFek6BWB6mvF1ncLysaJ3gsAzTH2YthpuUz7kRBifBGLCxuESJ3SXPG94KZXgBnB6T",
  "key26": "5yKGtV39R4oFZq4eXPA2ZBuaXXnmon6hXnhaejxyAhaJGQd3NKF43iq5H2AmbUBzCcwvz67fvqgMtbnqeQ3cgbRD",
  "key27": "5BwxZHr8EYiqWGDanrHWLQ8kZoJFKRnuXRxtz8r2bMKj4CEW7WKG6s24VFaF6LPYS2sc7UJRN6jTXXNHLzDogpXm",
  "key28": "2rrbtxbcQrCbo5rSQiBcw1BBMsLQ4yuXhMqE5pkQiidZEGJwj4kUpbygcgTjfbFszfnThXLXrruZodnVQkDkbj91"
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
