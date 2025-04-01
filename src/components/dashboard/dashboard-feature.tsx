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
    "5yhyXGC2eGFoS4Kvt8sSrrRwsN3wGCLBR9iYsw9hPZnR42GST5GjEvqcAe7EFR4oMpAtR2fYJKXVCswi6mxyJqUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ucj1KPTjcwy87x49W1nxuk7eWogYMGiwXpLRrBGzEA5WCdS4EkQPkmtUQ19xofH48wDxEdoYSaMpKaX8NKWpnVe",
  "key1": "5t6jJeAdKXjmQ94Me5GhuJ4j1AqLiw49W5jppcSURJmQz5MfMDgDgUFsXMf8RiujR9LbLogGDLd9boGfN7jfijQP",
  "key2": "3Yz9v51WxFrcTE2Am8jJpnp4Uf64wEcx5zYMvzrc2pE4E1PFhShScr5FpVvK22oC41YvBuu1MSb2AjhmQow1Pt1Z",
  "key3": "3ssRZULHdrSLXaphKDCqo4ou9i1U6J8ig7dbzZebjoVVLfkAgdtrG7hUm93oGgeg62KikTGuh43ZsTsj8Yr95s6r",
  "key4": "4QLWMn5vnSP8hfYbsPQBPNExt8QM4qNfv5uPAECpdAzMwFzNPC32esy39GKT2sjgcFwpPDuj8o2uB1v7xJkXjJpA",
  "key5": "61ype4sus9iV4NVAcp5mtvAknpQNxyfgw8izNYATkgmfUTTVQMpa9SfhffKeubT3F8eXnnLqkForJHftYP3udh19",
  "key6": "534Xvw1WwvMVfEATyvrt2xgUcJLpUPgX7fbRvzka1LbALeSGJdJn1gpUTKgZmEz63StXvtMc7a4PMqk74zxw3Hq1",
  "key7": "4uhBqrHYyecnmSokRKmcfzwh18DDRkPWmB14nJyesQczS3aisZKBQcZ5N7bvHNf3vc76Z9x2uNtXWf2QU291GxNj",
  "key8": "4LNmWPTUy6HXVBoY9P8beJqy7auNbpPtN9odhpQ4zyoC3cU9oTszZ86XcpfESVXXRQZVWv3aVC43pvqxJEa9srJE",
  "key9": "3BwFL5zBSMyS7p3kgnGVRM9MnCvg4EqpzcbLo72RmRXYhwvNit44JiHwzVHP7vqaD67jkGmR6H6XSk4SvGmEkCxM",
  "key10": "2qHypoHS3XmqTFCJEV8Uuo6StZ5BQA1kkG2bBdH2XUJEukcu9Ws8WpZkybyFYSKsBPseAFwoQcv99ecSkdDwshyT",
  "key11": "4qhycJkHSS9rZaSpYG1H1sTQUGXx4SwtoAqyvwCM3eUQQMKyukDJWhpWy2PgH5S6kpVY4n1AtomrcsziLTMCa859",
  "key12": "4j72EdYexMf4UCRwtPsGu1U9KUKahvGy8ufZ44BnbNVam8HAQUt58kQQ7BKzyfasB59481C2bSrfzdGL7L8Uk4C5",
  "key13": "21hNysn5B8pW8zLW6rPkphLURK7pUQCzJXJC2q26EjSWPtLTUsv5hbwPxWus7bwN6ZRbJTVCFUrpC2n7pW4qNsTL",
  "key14": "55tG9a6UXfTgsL8Vaexq84KwVGv1fwvKfkMmEwMYechvLUmnkXjfFCKgQsb4Qig3k4AMyFhXKgFgcPL24bxuQbL5",
  "key15": "5cYzuASWJkopp4eFPpiQRF57gHxWBKpP3tka8a7UnmxoRtcV9zNo1H6mJgkuz5WuaTENn5DMJU184TbYt4oXxa8b",
  "key16": "2fPzitk5d27TSKMwKtcorWomwGFSf7bnVJcecPAJmyVSYzFfWEVxRFTynENpZNfRAkrhhb3uxS6aYA8eyPyxgEno",
  "key17": "44KArfb4r4d12j1i1qZpURXVsKzusfGhjk87wsSQtFW1b9Mq4KMSpXG96x7fCJHqUvyhMctkTsdmr4YQe5Zo5mi1",
  "key18": "5KSdqBFpv7de22X4PMwWTb2nmCktnH7obR98ZM7g8xuCNpNbR4iCsvBPjBTrBLzpgV6gLKQCMAaoHrjfzTfpk7Dw",
  "key19": "5KzMhsfQobZNjtfNJTTFW9XDEBhqnGv7a5YDqz4aYd9DHfZ9u4MEJJAsAKDiRam5grfDF85asCjP3coGQ3ZDaWEX",
  "key20": "3rzdSMuLskBH6M6qhdU4bptrG55boxUEX7UY7XksKspSdUaeofV6TQEovGrY7Hd7TfhApcTC37jaMQ8UN83GtZDg",
  "key21": "2BA4WvCwjECGzjTGX3sgnghtcUwxdMT5791nf1WaNRxi7ku521ruyQ7NdkPENoDbiaf3JX58yfCER359gVHWgKoZ",
  "key22": "YY2ZdFNKtd38h5tqzLDengcaLE4R2yEjkGVCGQ15NtSgwgEEGVV2FAQdob5r8M3XXqBYZ6JGg5ni49KijvFPLzK",
  "key23": "4aoY63rFTKjiFqgoHiGfc83nsMhwPBKHV7ys6d4cvCv7U1JjSZb5ToafiQRTQF6tNmn7js7MQeCx3svyjKMSWApn",
  "key24": "4aaetCJqND5S6PVE4EdGqNSrnHwo9vpVb1SeiFYz4svPWNc3WKhXn3XYbfE18PLxYwUzqFpAwUQznmu1NJenDagL",
  "key25": "2BPWu5TsbNHEaSiYaC8iwLQyipJzF1iX5exhQ4K2bdpSo76zPACNRitifpTLLqMLTuRYdcqdMhfuwbd7rVXwzMB5",
  "key26": "4y4MDLwnTw1gYLuDrb65FFAdNcPQm4rnmFZ1FfkNJnkTBX993uKCRH6qT6sEQ6haiGBAPuHA153123YLMU7DATcb",
  "key27": "qaP2d4v1uNknS7bmwBdhRo9wVo4JDTCsuRwyJAFm4FbZDxwXJVAf89MvJFcadmgXEj8ZiLHgWxqyTde8jsrnHDU",
  "key28": "4wChaWcEBUgwitNrahvdRLWkAgfYA3XBwBS8bF6YSLQ2heZ2exxWPQDxnp4UQjiT55Sdkvst5QrSVoTPTi3TrKaB",
  "key29": "3Zgpr1itpbMYmkEH7z8n2Rq91Qc1vsPYRTSW25PbK1RAKs1EnmbWURJuS76xursNhcp711eX1gDtMm2xn5FjsxRG",
  "key30": "5XCnz277jpVKiDVeMyHWHrcqVRA2bysHwcwjGSYtRyLDnz9LfBuLsRdsuHD3rcpawtC5JzS216bAkXMQf3qUwJeY",
  "key31": "2o9s4GyEYB4jmTyD8gVADNdEc86fjmP8Ni8sJJDgqGfW1HHXyGG9921uRcR3zkRdmL81sPyFgknGWA31q8Nw4Mx9",
  "key32": "2kU6A3YXo8EHQ2RRzPoUam5TZ1hVePb7jAeZ9AwPMfPAsvKt3U4xNptkDwqsVd1gFrtydB9AUMQYCAX8933429rH",
  "key33": "pchErX91UC25HnyW3Wda7t6AN6erm3WThX83xMnrHz2sdr2os2iduzitqtB7yC1GhDqnpiP9cuaRjWWFjPPuqsH",
  "key34": "3xa89MPbKSKRg1HPknJemZGihm5desyZivGhiRVJ14oKdxVCtR3HWhF3j65kv4wGJBnrzCA4Mg56DYP1FcA1ztxd",
  "key35": "4jttfPm6n4uZHyuBcWHURqoM7G6wXChv4HsSsnv5VridXq5BMKjZmWpeQqgos6X6XsdYnmurEwfKrcs77hEZWgC6",
  "key36": "3D4dZsUe3iownsUV7UFihXxr3moPaBpEZ2nPrBHzKxoQTqPeGriWZAU571PNs5zFrvZ42XeS4yYDEbU4AmoBzXbm",
  "key37": "559vFGnfKm2R5728ijrZJP5grh8SmeCYiZWCh1r1Msqk7bRyCdbZ7UrYAsoTUSveriXGfM1Jkvr2Jus8U6BayZ3h",
  "key38": "8HGSbD557p9nuMYWubvZcfTrCmQdM2GyREG4Vt5YkizGboHgmAmJ2NJiEihzALgXf2tU1mt6JD9zuyC5pdUFHqW",
  "key39": "3vi4jRD3ja8pNFDQ5SHwc4dQffZAQgsB25KX4W2NwMjT4rpqr5x629YKqVjibCFpSNLMFULLNsEzYbJDdyGdW4Na",
  "key40": "61UF6mqNHVMfhkeFjpMtNgrskM4agm42vWMYrfy15s4m9B1RFqGc4zJNbQE8tkJEQxzJsvySMfsj32QJgJp339cd",
  "key41": "2MdaXUPj9bRgCkzW6Puwo72gEXF4kLiiRjKPN85WbPwhnAz1d5eTPhnGfvfpq21zzWSqxbHubSXZ17BBZoqYq5E3",
  "key42": "3edNppyc8QS9bJW2hzds9sEQcFoACBhyvABHdWBarU23jE1G5P5U5y1eob5P3nA6pMaigsLu2hb99ab1p9Z8nfjc",
  "key43": "3jkV9nxoM134zMvhySZi7UkDTS1Q92gX9fvGrgGp7R1GtVCFm69ZDAnVKk31M5MrZG9G1dUqCUQSxPQUdPfFdveA"
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
