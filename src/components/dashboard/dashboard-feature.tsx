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
    "re5eGAZoWNbGnDarEXA9poKG5GeqqfizU54LtrNFrH25QD7mQY6YQCkMxMFrLpsGfrituiZjCuMfrUkTGHBoiUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LvSf9WnZoEe7MEDCWBHPCCJf5VE1BKTqdG4hnFJqve7QBMLvyGDZ6BhpGuvweJYF8xW1mPxKDokZM56PbihSP9",
  "key1": "3ocJ5aqErNnTEQ4M13YAs9ojgz1yo5x16T55QDdfjMcouCYYQeF3xj4wanrSWrfwy95e6UYGdMdjCqENqnUHzdC",
  "key2": "366TxyS2KrNEWg725kyAvmUV6qtTePUQRMaXi6CNSoehNza5S3hAiPd1zHTmQmdGwpLDLUahfpBmFUPeyCw8gdjZ",
  "key3": "4eiqjGKaG4ncn7aQ5mDXm2SqkHKKCGxTCPks3fxo17g1E9jttP8FfsWn88uv93C3PNxNXtUARuexvpW4eU7JaZr3",
  "key4": "3T6YosTi6yJPryWZKLtcoui4BGi3NW2k8HVXvgJfCq2pX5ykXphjeBJjaG3VSeyVLpevLSz9y64e3Hg7q68a8P6m",
  "key5": "634Ff5x7D14inuPVpRty9EesLLYFP2MWvRzL8PmmtzWKbVzTK8ZJdjse9urK3oiUCraQDnCjrEGYYBc6aHPuZhQv",
  "key6": "3CU75NHgiNGnmGhG8XcD8zLF5WV1N3b6XGgxHebJ5B3Hsk3nz49opz155316C1Jt25Hf3Bw3A4A6YQNMWfgDzUuY",
  "key7": "4Sc8NDQM7B8y8isiKW6XYbFeZDxs1CWaerSonvNqwmgC464ZXdAXrRY7kmEaDGL9zmGZsMitusFyS579Lvs7V5UX",
  "key8": "4hufJVF2QZdv4KRwAee9dCvPJCCabpViRmESBQKZRQyzdvdzYsxy4jViWZus6pdrnuBkHHNjHBjvgEs5SZ1hpjJk",
  "key9": "4bmJqbZbwXPiQgGRtmh3tqBxLKFMnCRQcw6CHe5cVL9Z6e6mz5QZB6cQY52Hcg4RVQ2dEWanwAdxva3zKsPepAyq",
  "key10": "RMB65UzRbRtdgyZow6U86j3JPX9hXYjKonxcTf2j3VTNx8acPUq47kgWhai17kZMqTytHLb5bLoV4Wrwpp2Tszt",
  "key11": "4cdedSwpdmVj6ECgpXhh6N2NenNF3srHDDrb1poRdyWt3DUSL4etpB5FJpLDYpUzBHzbBuvgHH9Hcbov4ofazKnQ",
  "key12": "NoPZaiRLjXdb3tpeAMppXqFpHEU46kM88uwhuvpk8XQvfeJ8hY9t98fYfH2w5mNgCNDJaRncY8yjhUqaXixBqC7",
  "key13": "4UY7x3PWq4npqgQsKiVTFU2uecyD8DLJx8siWw4ma5oFHutx8bB6yGD8d14zCJMqafqBJZuipKGuTwFDcVaWHbhf",
  "key14": "4ozAt1X1GGnurgsykJDmFaz891oskVJ4KKBTRx2Q3Q7wnJaaTaPqbw8iRWR87zKV7gLrv8ripSw7gQDPRahHFzby",
  "key15": "5H1Q2jtvna39riA7GGmdXjiHSPW8yhGSVPjiKABR6odZ3sZugeDSUkdML8DinLQSBSkYf7wAM1TXZEYpxDmyHwaF",
  "key16": "3eBC5YHJ3nKsExBQjyu4tj4r51AxcSTbRijyvaBkZMsNzLvm573T3Nuj73cau3RJtTeG9YRwX8PxcqdE9y24WXjU",
  "key17": "2aQRChNYLj2WpgXNthTxr8qrS9BzdNQoW3G748E27RjDy8AYFdnTKHi87X3PhWoUd8t1kRtY7ZjDV3fq2fBRPxSw",
  "key18": "4xrH3cTT1Lgs5FhGPrFALkFx1q1GHySoaECoiRzKoyCY2H8NLxenWBFgquReujtM1PNepNBtJNmvh8i4GhrpMV2D",
  "key19": "2y9TnbWJxQwX1XcYPn2xffNaYssqU7yzFdM8FgAh29h5L8nLo7X8Xgi9aXpCe8GVmJNG5EMUex4PdQic1YfbiyRa",
  "key20": "GVpgrpazr1xNGCJrqviyMhRzDsGtAPiuF99EovPGR6dNRZhVdUA9AVQoN6mx6T7xiQz91R2SJ5K9zCRLkyHaGNX",
  "key21": "7niguQFuZtwuvwGDnXLFA8vVgto6FJDZGUZ2c43L1m7JPTdsa8mVaofkAaoUfdULQKyvqhWKRAtiu9xBzVDnkCK",
  "key22": "21ijtgEFSdkQadyczusFtSvPU1yauZGWxvesR1WvS56nP6eU7xZZVvG4oZywkhZQM7qyFrqugr1ViGFRmVcKJaBj",
  "key23": "41De7BmnFtfTNhFFEtgY1x1CEETxxHEeTKaiwBj1HuMu9m6Ezze1VmT8o1ZuXFt4Pkn74GkDfQCnzzr54Kb9ueU9",
  "key24": "3L3ouoqw1NAgYS4y9y9dTMXjJJhpcyCkwdi3WFAJ6mn7sDKwqRSaDUYapFExnx8KaZUf1ciFzicAJyhe5Dt52k5E",
  "key25": "5yr9GDfh2vDTVHxSpnK3BZCi3rzjzqoSeB8izhwhjPxLAmwXwzgFL4H8RKDHzLckxYvFGvVnR5Dv3Z5ERRpKGHNA",
  "key26": "4EDoo81v6Zx8LpqaFwW6ktzJaMeYVSAgZdKzbNoMAvccYLnVfrNYH4i1eNye9KwMqyzBNLRo42PdKffbvDNE7qyo",
  "key27": "4Bxu8fNqmdGgrGCmRPxVo5mVBjcD7uj3LRiNiAN2xcpfYdgfvXXEGmxsuqznXYCM89NytM79ZPwBSP5PAKNXg2Au",
  "key28": "Ut2wkkt11nF8AxYLu6SgiGGQfMFVB9Zoxh4A2SV8bM3xrnABCHcgvhKKH5Ka7n7NHoDVPFJEZ1TSKyJbTPUMuCt",
  "key29": "2ut5ZKyKN1gjD5agVgrFT8PyUnrV7fvzcvJsLVRhQCHzFWcoYAeY6Xx49bX3sofvKkwp5f1Ho9hNk6VNGBZ9iQ69",
  "key30": "fXmRRiHHMc9ojV6o17cu11YyDLuXYzu1sjTGVLKzZebfJJ6DBdR9mAM34BS37L1XtUeES5MDNHSPaPFjve6iYNj",
  "key31": "2cEtH9ft9HsBqZnAxD8F6B3f3KgP3SEPWCpmt9eU8VLVnNPZPZTtHBLbHfrnPQbSNyxPZbAgwF8QZuVazA9FB6f6",
  "key32": "4MeuDa7ycVAaxXsWeQT74REQ1yfXvtcmfA6zR6sdojNhCGMSdtJvciQ6gSoVDj3Acxjaxk8GqvmVhVLxhT1ojfeF",
  "key33": "4sxJuvn4ffBgA2w2aRinavvu6gmMpVLGng1s8KUTr6k8AUrsbBzhVh1F3f9wLN1k7Z492XH7NJ3dCRk2bzU2GNp2",
  "key34": "5TZa9BdRzJWpu1NFA7sVw3F8Km4FhMroqHePPjWV6HevSpg2RmyDDwfbvjZ1SQtjoM662i4c1uJvV38WBMWdUVxq",
  "key35": "5g4LV376ELGRsqKVyygVG26wy6NkrFAhLmDQ5KJYpM6uXJbwtwhmem9KawubCgawFDtD4Z9suxx42E1vDJ4X5t4H",
  "key36": "VtQ5VfGUjQk8sSdcC6hmz1PGLaDhkLwucEhxPfvXd3yovtcywgiE2LQmoKjLPkmLjnv65DMDb164AzxTXTSdBGF",
  "key37": "3DHFUeBdYSJj9FrJC4rGURyUimRentBqEE9TL6NdrxErcw7zUPh2mveC7rCKEDdvRSVtNKezn2CdWcZ8Gx4oWnj4",
  "key38": "3SsQKmyMVCjMGRSW3g5GAqsW5uWYmmHe4BLjTDenLGoJ3BD3W9qZVtdJU68BZqdVGq6hBC6L5xSPNUeGyTuaBYDL",
  "key39": "4x4WHnvSH7hvMDvCEAreTPaG2EdcRYUNQWDLLVD75z82DoqhjYW8iXiXMPHuVVfS2Vuas5FALjfFEXxbmN1FBX7u",
  "key40": "5Coe7hjhX9JmQ97qL67SXAbuAAkPv3bUJTB6NLbJ8tLNf5qwN1Kf7LGJK3DQ6BurGezEztEdT2QaU61aPprHDnUM",
  "key41": "4QsnFsEgrfPgG7kKLpcSq45a9MFoDHK4fNNpbSzFdeAGiVH8qjN3Lbuhn52tPtMKCfup3DVeTYfxMxKP5JEYJiSJ",
  "key42": "3vf7chvYMUWz3Fp7kUeTHQdsCx9ys7cKXMyNo7cMGtGasqiWYkVg8jq7pi1sZybbK7hJuwQdHLwpyuPyFuJmaioN",
  "key43": "xyLSjE8ARiRXZU7VwBRBREZohUBKvwgraBzYYBAFLseLyHFsE7sGqULR9hE39TJy2GJguUiKNQ5stYsbEiu1FZT",
  "key44": "4yy47awP8nBLxNMnse4PQs1x3KXCjTHWeH9y2CcguoywcMFdtkMRyiuVz5crCz6WLy9efgD2u4G3oxyTUSDbvfUr",
  "key45": "5N1N2NcXwG56n5iiMDTCQPuQ8y3x4F5ASkrS9ekz9FBn5YwaN7fayUJLt29whoC72KpAudnxHDHATLFfP5YKzWqE"
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
