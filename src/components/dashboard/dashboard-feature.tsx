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
    "2CsHiNjMAGuDZa53HGSfBY8RrmKRKKCNSAeCq4QgpPk2gdyB6KmJvyNM8uKsCg8t6PtiHVvMLicoB1SD71uwm3X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43HHA15Fr4SrNkNUHbLFT5vQjh6NrCCSSEgDyNPU2r69xsKD1htNpumuR9KKkwhbwjoUq2SvQDhz7MWMixbsnb5f",
  "key1": "61XRB1Xbk1aPy7qHvAWgoCEPmnB3fNDW5MEtvR2Mah2228HA9RjvSFb1dk7L4hR2zC31mKxjkW6KsbPE6EyynuUS",
  "key2": "4mxA2tJg8io6jt5bXLctZ91TQhEtSzXZpeVcTAmbtpXG6eTxegBGrU7wVkdHJ5xcpc4pGphb45bKf6StZ71Hz9Am",
  "key3": "2dPYJsHMa2SfN9K73BioMF1bagfZxxga728Pyj49R1heePp8dq6yzf36JpFNEPPuJoXq3jmXkErmdshHwywYuthm",
  "key4": "57PcjT2LBzjQn2LArnoEiruwrLAZNWMCumRrMBPiDQCjnWJqDCtUHsf9MVVUhNuotWHqtR8CCk2tzwTCEF2jKYHe",
  "key5": "3ApqN11GGckTKaUBf2McrXr66s3m1HX3JGGrdwpNtyfVLR66KJCJBivLNcA2wTJpCiE99rGeqQzDWavt4vDmYPBj",
  "key6": "27djWWZ98ko6DQQEepc8JoZcq8nhLDhTV3fdu3sxZQXR4kth9eLsswqMZV9Sb3vDT9EBGWqoKe83gMvxZ9Y8sbDi",
  "key7": "4EfiA5rCwrEBNLgwpEZLnfGJaFbtAuzGYjVpsC9YR1f9qVQ6s22fu14KPjFDfA2LQQNvqWVhGPz5duXQuGVtwQEb",
  "key8": "27JNhSbh2XVcyFmahdwegy2MpHFS1QmNK7uhzt2DQAkUvvswvoYhKUtozDzkGTmMmTNqAt56DBeeP22x4fYaxXDF",
  "key9": "43KM5KzEzsvTbTM2sJG4Ub1z7vSWcwYb1ukffDBRku11yjuGX13HQjgdAGocizzofrBtvTe6dgLePa92YUQrZ94c",
  "key10": "3FKNbXvvU17f45xhbfXhuZTLkvwBMkyi7yajS3aHMRjHkZQGrpSh7a55zfz45x7HzTEaPmr4yyLEvqoCx5FuMjDu",
  "key11": "3MJBVGYTHTuoww8Tvud84exXZ8yrG4cQLgQy3eZJ8aETenYCrNp8DnU7R7hS6tXU21pnaCLWa53kRSGCeWPzgbMn",
  "key12": "23gap37dHtSACotCMZ9p8xnCi2KKyCs3HiqEM7rmGRPTVuZ5LWcDvWvDBQfSqPgDXdeYpTQ5vf2HP3V84pN7LUhj",
  "key13": "2xo7bNaNhkdUCeGwEr5HM78q9pp5agoEs1bmK38tkKRtyzNHzgjiXtftxRTxvfng3B4uU5yxfBZWViS1Hdphd3CF",
  "key14": "45tk9MeoMeQEzpqA9j4NHey18b1gc7c3P6rmNtVTwLDLyW2wLMpvxeR7WaczN3BssQmqgJNo14Z1J4m6CLirWArg",
  "key15": "5Qo3JTfLQLK59xwUiLo95tNanQ4HkzjLk8jctDS5LTc4r7rMtEqj7GP8Qgw2KZfsGhQWiubE1uTucSeQPycDSGSQ",
  "key16": "2tpntZkphBXGNDdkjnSNkDs2aEZk1df3XqFvPc2QE77jVmHvQZksEtibTDmjf8pQuxfAvMDb9WBHWwLjAAzBRVZA",
  "key17": "5CXnzCAMwnPeMvgDLDQAGyVPs7FYDHhrtfUar677xaCMoExWLXugX4WYVd2HVK9B1NQgWcb3vt8Q7AGhho5FxzM5",
  "key18": "4oSsjsWwhKPdHNi8rhwtvULLUKrup4it81DFV9YL7UXuoChdMMPTrMn8KLCEnVRSBHV1Uk7f9N6WgFzZNPLw6FH4",
  "key19": "JVr2Ju9pkGzUewoKG7fv46wpeGJ5s8dH7KawwwbMi5RV2zYuehUKZDv4HYoQ4KaCCNKdYaiLHymJPvPSAnwBE5y",
  "key20": "4RRrbstGTAnmhBDM9SGGUyfeaFXrDD7utAnMqVdYSuMmYYsHm4gwAQyGnmRV62DvuemosxM8EUYiiSpfL5eK3r94",
  "key21": "74GYyL8s6ESATrakbn9H36j5T4AvKPD5VU8oYWWtDFCoJ2UmHHCFNLX3YarnRPHGC57iUr78zeLSiEdheu5z7nq",
  "key22": "2SZwU38xwSmnp7hEVNENUmRZUYZdW63DndLKxQZpnMQTGPo1y9PuEiA4hFNasaS5omJTKYECJMxMtsGytDJAqyCo",
  "key23": "37fWYkNU1utaeaA7enjdJv6P41oDuuFq2vJLrdgtr2UBB2eAtAVGmMZBJFQJpzax44K1n6LFL9kTBzzTXpVuqQfu",
  "key24": "48JwnPaKL2u7o3AyNSu2LzCpd7ib67qZEcSfh2BzQFCgjG4w3L7LLVyCzLDXVj45W5mqSXRw8KjRUvgq8o8qTUAD",
  "key25": "3H75dJwvxwnMuUsYk44G3UmyJbKEdMQmLqtFM7tqs9qwLhkAEMfRt6Hg5UMpiWcoXJD4uyPznzUNoxVKX6s9Fgfn",
  "key26": "xLRSsBpP48VG614mdj1rvTtqqJjyoznvHmimKnMd8yHZxPQckgJ7b5qxrJQzqx1EKGLp1ARBKeEBryRzyuTPYHq",
  "key27": "onTBHtDEaW6fwbvJNVsRJosnkzv2PLPZ1rKgwmGNSghoB4u56ktLZyjc7HU8voVt1BzE5ap1sWAe2q8SjRtT6WE",
  "key28": "2tCFduZjDTZmrYAt5HnvxBQyrBnN7Rxyj9A8RHHTPrsk2CEfrEUNeLVoSKC8t54PqriFZzVbKVexwGyptKkKEt9Y",
  "key29": "4ssg2WbSRAS5pXRxMSVSKh5NnsvDFyCvy4M1Gphqc5veytwESnFa58rJR6znVxVL7YHPbKFAW9A4qWPmhEXeSSbw",
  "key30": "66KkpTVu35JPyJtWbuAKJZ2a1e2yvc4dgU8FTLFdrYms1gBmSJMpFwGN9rrC9UrFR6NAmUF4HRgUjKh7p3vZUpXP",
  "key31": "2NRSdBNKchhosPwBhi6bqkUFztUoRrxf68sBKTBHeR2qRywcBjswYJ73UtAR6DPJGPMhPAbKqHyERvJU9dPcDrxp",
  "key32": "4KCb3vGKw2xe3pcBvfNCXTTwe9SS1jc21RwkmWL66hcuYEWYZ1ZZNS26jG1MfptBmbc21DvcG6dSgd74tQr5y8jp",
  "key33": "2QCcT4fzHk1WGLgS1rDpsKHcVmdrwMyVWeUJZWXg5KsV96Nod8hDDnZYDdKwLHqm8XepJ59zjJkfzug3dRq7eRhv",
  "key34": "4KCKo8Yk5iQ1mSbB9mpUi4MZSSMSohU8JbSdFUMLwmXbBTs9eTeXhcmNhSn7RU2ZghJ7rbZ1VT7687xSg94jSiMK",
  "key35": "3DdHXhRfSSeQ37xYMmT8croBQcn59LdV4qAMXHipQ9KKXArZwyN1Ch1afAHyWrupspEYGz8iLKnH7H8S3tEVqX3h",
  "key36": "KMUBAw8fVCb6hZz89cuz3wkLKxc8LZjg1tLf5hivHrX9RcN7v5jGY9QjGBQZQVX4TDSXAttQCjnFaN7Hd1UD9u1",
  "key37": "sm45MkaMasoKdmTjhc9yxpdzRBXyDQ8yNsiajoF8zr342829EvJCN1aBabhgksVJAcaGj9JdpdLb5w3VYFBeHTW",
  "key38": "3WTuw6s5EHdvbTVucBYbEfc3uSPLZdeffUDLQtA5oNJ2Gz9KzuqmVogJLNtfMwovE3gnnycHjFa4X4pNiYJWHUpi",
  "key39": "4yWFxRRB7X6Ea4Yn6DobzUtHdPwtEisA94HbwgeWqytrCkSk1BbZP6Ng4GJDUg5y7L7B8gtck2euQrMTw5Yi8952",
  "key40": "4Hps1dmtMQjVaBJGu8gGkp66yBxGZLJVWSgsJMWXAgpt4haq2ZTG4Gh8wiuWWwBDXVT3CXZrnS9yfaV5KRJ4JpkT",
  "key41": "4YnTzkQhJrj3TrMGasMGgSGzKY46JvgzMcGzXWaHGYYitpbUtHUvLyHVA8oMMjwmLihjGqcboZQ9eGBbNN7VCpCC",
  "key42": "5gywH1RdVgnY3ad1e4jHETQmto3hqga7pvXkvDFoHk62SA8jjsRCVmDCBZx7e5vzBn47WJqb57MxN7YNCs8kDJCV",
  "key43": "57oGwv1K4MGeyvhCujE1iqYvpNSxX9a3guqzVUuu5MMNX3MjfxymSJv4bVHYtqu79hjF9W9vfNqsZsuwPNfWHwke",
  "key44": "3SWv3jNVYk4EbMD2gy4X5oqKPLpHzP7qckAR7yfYcCtKDGRgrMDxkphi4jfTmghrqPmpJKSvN784QN4TMcoVkgmM",
  "key45": "Nvq9Vc34YXGgjGyFuihU2cFmSdHuW4cJAJ365o1A2D3vhZPV3PuVVen61UYAGpVpH2XodzcNdG3Xc54XjNxf7xB",
  "key46": "2pRq7DE7aAvRcXVkoVWjKg1daaoKaeJajpAVFniYNDfXQnXrdLFT5QHvRsRqpdb2Q4hfv8EvcFiTHHD6ZJLVBnPW",
  "key47": "ptcDaTf1hD6o5sbQbXsfPo6e3wqo3FvScrhjntBVpzGAfeNiubtgQZK1G5QsXSDsDVw61zzD3CXY6SEkKbq3Q9F",
  "key48": "5qJQy1Jm9iaMAiHx2MVTuLNjvDga8jvU8R9gtdXEDUTMjdNRnDYvwbgkxPhwyEu8uHkt9DSSVA8jvcxmwhrZk6sx",
  "key49": "4KLjLs4zfxZFVbYC2AEqNAwbZj6ZEmCuaD9XCwo8fBgDWT4yBLXpX1R3YjbDZJAVqkdKUb9f4SjjGzCuNtfoD5XL"
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
