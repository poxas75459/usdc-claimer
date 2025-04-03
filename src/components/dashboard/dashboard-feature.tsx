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
    "67BBjxjT5oKnMp3GkPMX6fUHFhEs3jbbSM56yCtM4SvqLifJXzdTxnu76SrMpv6Qq2KqEKkwEwRTwmHqnsTsxYMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3bFBHKaZtTwJiVx6tTsAGsF95vVAvC7FNycGqnDLdY6EQSkMooesjqZydA1tvfoReCsmHTvv9zdZUmggwKH8eS",
  "key1": "3RXrdStTnd8CQb4n2yyQ1yFBi8hnYjJpKUCDQh2imRZkQ7mmJXSBQDkj2cr8FZB2VT5MEqHuUcj2EZ3ytKd2voKK",
  "key2": "27fixiRvCLyK2jFyUT7GBZCzrf5cwBJehADde4veriXYF7VLQEXCdnimZPyeDujvCT3LZ4sfn2QoPBMehDshjTDo",
  "key3": "KCo32TZPemV7ri2SyMoJy934cF5KQ5rBBE5k6kYLCTgyVNrL1ozzP6Deuu2GKTXgKyBKroN8JL3snBFuCarrfws",
  "key4": "3KZgMF9QtAFPwVPooFeextxnidmFBPZWdiCe37ZcyoGszLMwMpVw4XhL744iVdeCNxTTretxphm57zeuWc7k4h5e",
  "key5": "5ap8RajHs1PT44N57TsMf3kVSLGjHXtkjx3qHf2dQcsG1VtC3JUs9uaZ3B91sK65o3wJbC9JBAJsRnGRzq3dEChB",
  "key6": "3XMbKfWKsdKZ6G4uqAcN5eSBGeGj8XrikYGzrcmfNqjdsZnTb8kfibtQUaAhuVG5iRnVTBReY4aMzBYHzXENeHbt",
  "key7": "3fUmN2Wqq3DxpTXWzEarfZw8cNjVZU93gsn7b3XZmsvtsX98BSWnyoAVtmDBviVXSztpqeuqcafg5vc6WWNeuMyw",
  "key8": "4nmXafAvziapnDddUnGbgEncn2TNdkoRi2AU7qu5EKHcdwf8jSbE7Qs6kwzpgXCLGdDfVeRQxmiLzFAgYoTycAWG",
  "key9": "3sVYoxxHVZcguWFK36nYUVGQuHxwJHHULcYQhzZSspATNzgn6BYYDLZwZhgcHSm47tsWUCJRx2UhcRP2wAPWNYCR",
  "key10": "2imKZ1QMZZc4XawHhc5ECZ1qyFZoT1omcLwPVhubVLW86WvtcCJb18bu7aSnaum3Gupr4hauU9M3UdJLiWwtyREm",
  "key11": "58km7RB7VjGGtMU1yKYVZ9MGEsKQie9qZDXPdMiggBPSkfiH2k6Wv3TvbKVrmffKygm7LbUZBv25xKz5cuXSDQA7",
  "key12": "296MucPKYK3sCjE5iLQUGjjXsxRR5zt5jXSpnx3AQQ8Z93edtNRuTNAxNcYY6ojFTZv9uX5QKcjgtuaySzD1VkjL",
  "key13": "2UANW2Di1KydtuRMNR3LAVFAkHGddm5Tp7DjURFiTZAHLiLxbP3ghbUsZgfqWSBQHCL64TuN1XBnNpL2Vk4pXydo",
  "key14": "2Ccyk8HaKMsrv9gcWFsvK3CtRMWgmck32vw4RWK61EvALay4oqUYkokvtW94YfxFZ5piYKqT3d24Fs5wwrroVUux",
  "key15": "MgTbRzeRWioDWziccrSDysvVXDYbHvbJ1CQTwcgMtSrcxeP2fpKkE2es2vu18ooAwsX8uhZJRPcmD38HRTkD9ue",
  "key16": "DYyrRYU8zsMFGpJbcMUEtaFtabBQ7qZVoHiShaKAGsAK3p7y9xiEJ2fccYzLmuWWZoejfL22xbW847n3m8Df7dC",
  "key17": "xpkBpWMHoBLmGrMciLYSo6AWLn2oXSy7X5aJkFD8yk1yfSxNqFfaV2wiS35vMVDFgSAp6TVEycuk5boKreZnomY",
  "key18": "4Rug1wctFvStaB5JsXRmfrrsr8CbfuEHwHjukEXsDgiTaF5cYykhPeRYgojmuzucMVXa5SpeBJPXYPhyeiQuuVyu",
  "key19": "5tEbATy15khpjJr5s3NC2iD3gvg3zaN5r1dQDyp7QcoYVUmAb9dRGzRQiwWmsnFHRgBnkSj5SQ8c1zsQEQTuiqmn",
  "key20": "2Yp354pNVuAAZXa3i5vhTbxxcLqutgPzuctmESnTtXJhegUZSkBFRi8JV23ngUQeoi8BiJSWcGtsZmjDGiaaW4Lh",
  "key21": "4wMsRCzWvpf3QzgBkdWSpgJ9m8mMdTr1RgXysKqNd9keDzFoDjvRqBfFozAD4dsvTeuKUuZFLfKaovvAD3M7opYN",
  "key22": "33rvD391SDoCgbCurFvdaBcf16u9epzB2dLHhSbxw7uhFPXDVxktLGirQY8uhNFL8wpNBFk9QbZZADrK7SUG5g2D",
  "key23": "5oXTzokF5YN1dAb16izzo5nzi6coArpqARWybT15ups272aj5EQwHgGyo8miaQSQZretHzHkKwJ3JsRq9TpjXY5K",
  "key24": "dh4ikUA6hL6a7Uve4hmHB1K1ySWCCx7ZozoQPqVVDt4FBGSMU2bWX3QPnC3i2usnC8WmyPMR8VyRshvxmQjJDsy",
  "key25": "2nRxW8WNgZuRvfy6sKLRgptJqmrgMLHVhrdmeViUggJ4pT45YHFmrXJMt39dZKTcdz6wbcbjAso8L7Mav4vfuns2",
  "key26": "2YfWFWCeEyyJgHewqRjjZTsvS1veQ5CqJRBEA7PukSiPwaECm1mL8hDWAMC5HwtfQPBBadTMHepN3toxBgo3dug8",
  "key27": "42vyRywEvjXB6JaGMX8hfwhwuxXYUF4BcVyd2b7DDFeXXtJvRffoLZw95v95yxSA5EtaHHeRYsQUfemPZSTxmfQT",
  "key28": "4DrmQSmf3xG2pVyL7LEwZve6NLMv12HrYutQ83sySQ3ZRPaGb61hiS33Bx72pWFgpnFzT8Pz8zkfmP3SwNou1x5",
  "key29": "5LTMWC5yR52DoXatpWh2xNbmhb2tF3knMgWa4kPdHfVQQZzfbU7WJx3eTvStWySoua1W5dFsF1hpggD6kcEix5Eo",
  "key30": "3hFriT5LMTyNr8iXbP2cGLCDy3paRy9AyXY7xEfRWDiciqpbLnDCtU5srtVYFhRjWTWYVExACxkAcScuP8ZroCMA",
  "key31": "sL3gf1nhPuTBccuMVQtuT88SLgi6HFzRAtMjh7Gk4emhkx9esUyai5J8RKVRNgHphksiZeSVSAHbdW5XC2mKBxU",
  "key32": "438MWjrA2TtbojPxM1TykWpBmgYzzoTSkW5b9rxBjryugcx1cxEAKCGa4NeB7yhLsULrL7MGms1hcTcyHRmZRmPV",
  "key33": "35UDLGuCYZCP1jYLVWusJwV7kEApRetyaT9MYQGaWc6rxKv2Z1XVLvvVytpy1cPk6THqjChJco89UGaXB6D5kh3J",
  "key34": "4g23vg2d7j6yKsYFoXNhh7xUVcty2K1oZoArHW961xZxWsz6MGSM6APQPbHSG21PuUApjiZwRdssqVYFvCETYxpn",
  "key35": "3hV8guKsmJVwj24P8dCLpYa43j4zJkNryHuQ1E4yVWoiARHJXJtuKnq7PCPktqkzPHs6AgW9txU9Wq5mLJ6BAvCw",
  "key36": "3vocKLxcSfEsxrE8Go8CJeLYscxknbCs7TZK3aKUVU5kikKStsDmEhNkpqgNLgjK5MpnroAhFoyWgHYxdGvyityt",
  "key37": "3duUQ1Bv2tfAmQBzK5VXbvGAcCWEtKKsePtAJgYkaBqCUErmYX3WNo3eVzhcjAQACfK65CAwCtkFEFEv6qqXYBmb",
  "key38": "2tttNTsykcgFVSKtXQPDfbXR4EHw9JTGujhjF8Xhco7fXSPwHvnkjDnmndcvouLE7TSeyTmMwspP1NpyYgF9wdJk"
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
