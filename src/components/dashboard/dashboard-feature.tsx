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
    "4sf9QCTpY56F2JbSejiJSES3s3yD1ZXfgmms3mNRKxUv8LyGkgRNUDTdakWiHnXRRsQxm2N7nrp8WAse296C7BPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QAZyWzfQeWdEXdsBvzU6DvLscBprUip3bbMT6CL4dJYMDgFNhwiSHtJAWkF55RsWcQQbuCcjcZSdrFmAoAkemVx",
  "key1": "39a44HvxvxJKJEkeUhzMuQdDcmB9S8w8Lfvt6VMZ8xemaQxtGPYf42CbnVmdvV1cyRcebqGKwZcTNaCVDAtzsP6",
  "key2": "PinT8V8rsb4rJgUcTusCeWXLHeg7ux2Xzo2r4tjvZnftwfeqWQVuWqbM1KkYnvb27vyLcm7DGepfxBNSwpLrrmD",
  "key3": "5Yr3yyUTRkhYSoaSXQwgjYjtDJBpironJvYwEDJpwaVFmapmc9eehWBgtUk9s9eGTbwNc2o2Jd6CN1bQmNuyh44G",
  "key4": "4LTSGbaRSQpLPg1cpHrmgE3ms6xLF2CPzmuKWYgBiDqCodsgvgTv9jvY2fVsoC6jYwNcU68c38LA99it9QnMfEyK",
  "key5": "25ao2onzdNFQsmWUpstY5iQGrhce4boCnZ6tiSiDsLmsVVNjsZVBFUB8jEnrXuqdSLttfatUA5EuDotbM1FwR3ba",
  "key6": "5FavZE9uBz4BBVMNRQruXMNaCsq6R8et9moCrSkdBQg5cY2u2diwWeaxW28edAyLHVaRQmjgtXtZo7wAtpWkHwtJ",
  "key7": "4wBLAi8RBfowtttKvu468q8bB6Nd3wp7HJgLydri2yWVZwd8toiANhfbhoZyPqtZQBDkZ2qj6SqP4LK9UvnzKhCY",
  "key8": "249B5ygDSnihokS1G2XVGt6BbXNH2kGc8PNStZaSH6VrSw2pRdyi4V1S6Cmx9eSN5sUa6Sca2Ya2psQyWe3Cg2sz",
  "key9": "PpcKFWjAmztxUTL5qtwcaigUU8nzTJExzJqdKQy2LYmuF4fsm34s7doSrJeTFrSof6eXH1LwoynWBqfcBESoPRE",
  "key10": "4kPi5C9oe6Zbr38UehmsPSkwMo2ZeW9h9ZadoRtMkpfZCb2DqRn9maK7HbYEHNQjw5EFhMa4A5SaUpW8gy4orvg9",
  "key11": "2Hm2iPR357rkfAp6VX4PcfmGMPKHo9PXTWANR35EvYCEBfkiLsTqmKQC94ujneTTUuPD9Yr4N7nDdmQmaAAirvbK",
  "key12": "3qzGacMZQNXNHTnZ4BX6NCNJtr2T5uW9hMrctQRDKz6DGu2bmgS1RqBBSabSoWQjJdSbekn7ziLsz6evijKqg7rR",
  "key13": "5DHQv2tKrt2K8qWVGp8MWZXrxx35manANGx9qBHoBpxsQhUZWQUho8fv8mbmDpwrkDWeCwX7DDwXTkbBFum3jkg6",
  "key14": "4Uuks3pVxocsQqxkKif3fSvFBJ31qrnLHqswBUpcNc8TyLhNS9ftcVFT7TQd8wFRv68Qy2YFVuSdCU7JMYfrGPss",
  "key15": "5wWD9vYdbAQQt7Ue1HPXMrHYD5jh9bzjLLcB8wyLcu3kb219xyAwKCpyzS7tmo4WrL5f7CQ1q2iJW3SemJCsVcxe",
  "key16": "3ysJwCbPfRHaSiFsB4DEz9VEZqKYZMhqBvjdWnDJ6bnvFUzqM8u7ZbsNUFqmT2teTqWfc1FxAFEEmQ1EVNLiGVGT",
  "key17": "48sCf79NXbYkxMjrxbx2ebJgVcPsKBMNdkKgshYTgmdeskg3mGhFLaQonaYTN6cpKWxkLYE7E3MJ7V3D6YdLmnMk",
  "key18": "3imx3g2YDPrSHJyg1b9oWEihzxqqyX2oEjVGRRciXviiW7XfFa7ScGaWBM1h7mFaRZzYZpgyBA15Vc5nUoFXeCyN",
  "key19": "5cK1YMgRENFTe78yHaufeEBBKfWExmmMZuSeJq6YJTom8giYRjWb5MxLhUfYaxn2ZmrPcPqxNPiiMSgwoBeGy3Xt",
  "key20": "49KMW92jD8E6XwPb9uV7uQRUXUFT8oGctbEHCreTRdMZQqahDVfJEiChg8dfW3baGu1bTkH6GjkzpVUDCnGAHQ5P",
  "key21": "54yLi7y8z5RaTYujLUpT1CumMp2X8q28kDNCyA5bkZAZvcKA2RfDpRK7NKuaBAiX3Q6stQRqyegYbfRcWxZ4DfEn",
  "key22": "2EHQN4wtc4L585ynNigPizx9WsxTiCFZWS2mUw922aUzpg6doHZFDjzareYVRBNpKXNJXNs7rjDXM4x5ixd3Hn8d",
  "key23": "2kDrQcXeRbkAoPjQtCtfsTcQttNocNBiUXaQENqi8NWHUGitJSfzMzYQdkumihXRfPUgBRNe4FTVRbiCcv24n2UN",
  "key24": "2nq5XXn2SyXnk3KByTWizxoHpUPiaMQXnbtyiRa1F9idUAmRc9W3w4dyZHDmRaGryRJPi8WMjHXqxpVxxJq7oPif",
  "key25": "5xwgtRVuxvFgFKfHwWtthK5w3adMvs4xxxVePfuTEiTJp62otiLbLJWXfyC5gf9EHVx2inkUnvKHxLsEidavfFeh",
  "key26": "5SAY1r52pkyHf4h1qut2DvUCc1iBdQMiqMNGTiEndsYFZpdsqNPUkT5NKHwZkmY6Au1zN2DjPxTs5qAAzK9ENQ5x",
  "key27": "5QRQLTd8vnoYfRmfSjK4KccBbeiipbitb6FwYU9tJJZoeYhyfoUrsjxpeRmPwC3oZ7ECZsjVH94Qr7pT5vVcZdgk",
  "key28": "3FSuQpW12guYHAkCtsHBkgje5GZ64USf3F1XHVtuN5ciszoPpAYZDFTcnRdyhNnc3pEzYBGyf7Z2JRdHNBRFV6c4",
  "key29": "2z5hQPTo31ucUCB9ixkf8LDRgFJ4YG3gfCsYgE1cvW7StMM3Go3g87sxH7RXPEJFDk6D1USKp9sVhcFjeb46KJhr",
  "key30": "VVcjfzEkMtDoJPBTKLfb4pcDdTaYgM7HU1Y2EoUbogdeZaJAz4FeFJnaPmvhwcZScrTdvMrDTzeWEjDvxpbzwo2",
  "key31": "4tfbjddiF28q5KfY3Pgtm28sXhenKX6NW1SQKDmibi5nGiUhwnL2swV82Tu392CKntFgGhS1A9KH6fKXKE1iDYKW",
  "key32": "3zdjfLa1HRmbw6jzzZYajNArPxDyfA8PAUraCpAhmTFg2Le8WsVnnn7ZXBaprtVYNkKZBNw1BG7w5kiLYagVZHxZ",
  "key33": "5Gq57MszYgt2Ag3osX86URd5KJNFuJTBeoW6WyKtrQ6NRFrZJsSJA2m4Rnocp4ojtt8Bqajr5XfvQz15nChBnBUD",
  "key34": "3MWvXricD22fuzMnCbGSHRsRpkkTrDTf1rQCGEbkKKk43LvYwgRz5t67XsBNRHjKQ9AfgddBG4oTY2NMRHtTnnVQ",
  "key35": "dADNh8Z1zE3MyNvvCG1BxAfvaAT397FJE6tLDYizRx1moerWkYrAURu1HfUZeMCoWgZMdmGncbjBh2KK7kLN8Jy",
  "key36": "4SXuP9dYxFbbnNrQHsmBrd47K73Nf2vP3bAtjaRxzmVNJwHoqXUfqNczBktuwwkgzqu2GUAJAQNuz1Va3PrWFD3z",
  "key37": "2nDPgViEhEp4LyJxjShsciWNuGTYub5pWCk6y6DRwwYkMk3WgUZ8kDRu79NRF3wgbvuvUqQqu7QRWoKaaCqGQ6MD",
  "key38": "jT1CbwrcVTivYYAhukWDwqRZ45hu4zAjdwT2w2s3qZiabUDbwxSQbQpqtxdPvHHsPMWmniuQUQReomouXDbX1Tv",
  "key39": "3e3B1AoRFCmGVBxEoRkzNjQxTuKtW2cDN14RgoqDabiozQt22Q78E4RCUELmTBCuTMyB885nvTdmuyvggv64tXPL",
  "key40": "n1Z16zkHYwy5NSn58oY14p3dPFhGw8Ad4zEyDBg71Arvc1ieXqLJfSS1Mtcc22gaU9S87H9ooD51ZbMHTSfHhpP",
  "key41": "p8TVGkP7duYbzeBNNKbJd4w9QVt5qEc5yUk5MpWFirUvmHgrVGWbJkJboGmenyKYXch1H6k8X78L1yWKtSfFXom",
  "key42": "x7ASQFvKQKGFGGLHXP4YypqKmzY3Fk6RoMe6ejTsrL9KkDGyTtnwaahbkWXPujB4wNBBFeeqNZ22ULfM6qFKWLi",
  "key43": "G8shG94JEA46BAiEaHUmawUJogPmF4AkDdaPQEdo82bbsqK82eN9bbUSUvutgJ8vewSgyyijYDByrCNHD1Wo5SE"
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
