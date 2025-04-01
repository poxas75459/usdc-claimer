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
    "4yBGVrrTjwPugpSHSGeDLu6mfi25cTCp6TP7rpFz2NCBUa8kteYxxfWB4e4iy5i9FQLe9NH2jEdkBns8uZ7bqXDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9Hq6ffFEqPxhvSqnzMNPSUq2KG5Amr2vgepBMq7LZx99j9CKjYLuQ6RU45JAYXmzejsx7isEWYGokym3yauabM",
  "key1": "tgC6ygPpen3o7qwWwuzrq5japxqrYY5e3g7jV7zJA6mZPT1vVcGFX7DWB4tNY3wDwPvDAFg8PVmyMotX6D3SwBD",
  "key2": "3xXKqMLqoGRLrMF6xSFxbAt1Y7prQav6Y9kmA3F48nc81SapSJhvpjGQfeZQ7b2awL93zcJ6u2oWPDJAo2u87ao",
  "key3": "5Rvqk7ouj8s4A18zXoDPJEjpgudRKQudnoznG9Lt9mmhCFGcaeEZPtN5eBkH1w7Apfif1A5kEWv4HNCSWSF8HXJR",
  "key4": "RQtEmEjdNUQ57SsjVvcpDtAV8Zr1rSaiZBQZfcyWZRDVqRZ7h3aKQeHrzHFMi2JU1Ty7zAnSsqHB1VxBZZA95sW",
  "key5": "4iQ8P1dWptJA7ZpoY8bWUHKzXZUYynmas4gkxMxbWm5wu7jMvyVqiXKZ7yMMBSKRoSJN8C2NaaNhBxD6y3iEMhnT",
  "key6": "5fE55BSkEvgSURco5aUt1zX7NSKCq5CsvsuwzVMoafrWzRdw6s1sHcwRKznJ6st8qNPUCdSVpunieRWghnsKLWhU",
  "key7": "451FrbjccWNKVSzgm6WhrpWhDQTx7idGERSNf286h4g8yEph6NGQBZZZo13mFFHBkseSS9eRVMALV1zdke6kgn1M",
  "key8": "3T794sGqwjr4FRA8nXw69BFVfTJwNbxEsxyZjQHbX9UEMBxfKjX8nThuzXvntbXBMHk5LV7iE5mvmtMVYwVDAsqD",
  "key9": "66FU1Yqnop4Utw5QygdT2GBU9HT4y3hCzrdekLGGoKr38vsQxcojeVfPzvDRVqrK4urZbeXhT3yAvXChGPq8SAaH",
  "key10": "2dgSejLy1CEmhqAV8WASbE3kv6qbcbhDCerbfHai7LxJqj8QepGBzT1JaU3g8XV5RDffdEswWmt5bmQ1bp2YCbrM",
  "key11": "2CRhMrrjQ9SGW28hf1ssZHkqVy1z2VaxxfsuwEfaTnqZhZz57r6zaUCUyFsmXABV4K31epLwYKEAEXQ3THM5mRjs",
  "key12": "k9GF9hTP7bWoQx36KtqXjZWWimXgpAfTRyfyjPLaqrtRfA3owfmhgc6t4ZxT7tp6z7YnJffVVquBDhEEyNprRQF",
  "key13": "5oahdPiUBs6g6uakTpUuDgPQBA93xaGHJnEKkM1rnoXDCZ4iZuHcMGgqb6bTck1fGAJKbFmStUTg8ZMkR63Mfak7",
  "key14": "28Vtb6z2pE5jZG7up6WyuVV4Nb5ANfm65PQzFTQpPGX25QgtNTx6gmE1DuWNxiJxipGhj3g1BPX761q151qvExtH",
  "key15": "4bHCACGMi5uFC91jom1eG1Au9FNJK1iPN3UjRDH8ge6KkB2Efz5LFESFeGTcSDV4ynvBvFhvess68wHaHtqsm5hw",
  "key16": "4QA55NtRR4WXsKFsGpUaXqk1dHDfudViJLBwzCigaqoj9BCc9urrS9vyraZLu9FdCYJDjaNVerMTWVF2sSuvGYtQ",
  "key17": "2PXR1Ww8mUgGfKYEEUivcRmE4NBCvvfXYM7dzGhCgvu3PyeTnyaXnMVPrkUEqHw9i968ejiYDfBDNbHV8fYMfMvw",
  "key18": "cKj5AoSxnaQECnrKw1hXeZ4HDvj2fodod61FsSSNiAJTko5ZoQ3pNpkGSgvPQhdZT7yG48ppBvbvebKLgphXAjW",
  "key19": "5CHTsu4rxbC92WJhT1avjwqXDkGCTrRRNhCSdat83ghGGAf9b1owGVPYMfbUVQdJ7ijESEhWBTCF8H1jQ6t3JZ8g",
  "key20": "TuApRZvkQhap7pHTzVQRg4bUyk4UDqYkcYMwJig9SHrqRQ3BKqC5JcrpcrBsJ5HV69RUjjf6FRbtzSd95otvGA3",
  "key21": "wdXUPVSu4Az7MvHHvkYFttYFDcD4wWL8Dv9hez5PMwsCJ2c78CiZ5KFoetugsAiFQSnfzV2TPbaQfL4d6ja3Rcg",
  "key22": "5fjJtkQryqneMgZ19EWeTTp9RsJbXu3AYX51ABnM96Rv46mgJdLKk1BSKx6hbLTM1ujibsBgtd8z3Bi8ZSK3LfR8",
  "key23": "nLui5E5s1xXDJDSUXSXtaJ8UPkxpQd9Zoau569EnpQTd8gB6WTqVZ4unM7uCoTmgDmw1nRCWT7Hzx8m8uYWtZws",
  "key24": "WcN2LLsrbAsHhutzQkch9QEU2sNm4B3m6uNs7fZRDmZ3omEB3LUSmah6Hv3A45rYogGzWShkEMYWAogMWCbTYrd",
  "key25": "2AuU6LNn8yLQXfhkN8r2sGZA29UiaRwjGketQUUrzSttGGaVh2HTRM4tVHx32a6SvnQxAbfQpqVUPWFrW91ydi9g",
  "key26": "9i68GLFcqDdaP7YamT7QA8dV4jYLpyZG6m9RyTBwzm9LT5C1yXe8uMEEQXRUmTiK3uhTeyEi7LVVP2Xh2u2rVe4",
  "key27": "3gVy1KnxsiFSAtcnTbFS65g7EL4fSehZabxUYGbNM4qkx2epo8JG2XdaYwUE32rhx1LCiQXvHTYT5ApjZtkqk9Xk",
  "key28": "3DeEUbuf3nb34r2JRAQJtDCAaHzJWER1yUdoHQyGmqRFcLCbqz5EUKFCW3kQqrKxt12tt6s74LWJUEDC3jUgkvBv",
  "key29": "5aBuprij4Lrca5aU1ZK4W1eYeptRfBAqccMVTa4SZEh5fdhwefaGc1YdgXAazR711WH9giNKSFG8J48mPTMEKJSV",
  "key30": "46hsn17nwTLokUGrz1C1JHzXtgVDB6pmskpsEHiazo7FWfAiuxmEVmqNYy1nTitkjJRKX4Hh5h15zgQiBZZT38xr",
  "key31": "3k84Hof41GCbkRGVBmRVy53PmW7AMW9jpQdoWN5zAX4Q2BmstrxfmHQ7L6mQT2bLV9QjinhDBY7v7tEAzeiRvH3G",
  "key32": "3nDdgn1yzTecX3W8WcmBinBQYtd8NbZsuGfjpETfqHxaA9j58zzfnn1bH9b56qi1W8uuZLPR6PupVEjs6ukWVh5e",
  "key33": "4F6M6y3GaXgNp4qwiPKCZqrov4Uvjs4WRoyf8HZhU9vWVeHzg3oce9mYi9ArfRqJ4k637gTeyHTtns9fHLbRgmwr",
  "key34": "65QYmBA5WzEDjq7QfnZRsZfVHohMPN4QcctfUJsnyT4hwZHxxkcVSakEtfiHyWnxs5dNiFjgzTy47LK7q89MCAJp",
  "key35": "4NKiBox2eKHZh5LHktW1nJYSMb56wRUZ32Ri4ixihxi1a1WwEnBfFGAqqF2FmBso4ymfjDWC6TSJcmcVAsGpXv75",
  "key36": "2pmGWT1DCQN9Hy8Zta7hwpKAZ8dcp3SGtq6DRpsH7jW1j5ETXug73yJLY8JHA39zb45g1MfMFtSKfCtULSPeA8b7",
  "key37": "2RyJA1XpjyoZbpBMzBhWRmTLhZGSMGdYzWijFFZUv1KsUkLeu9zdTTXjQU4e5qAdXpSL4hFTiJoThKFd5otEsDiU",
  "key38": "52T8DWtRa1tKG2mSfRigmBL4X5t8Lrkp2HypHdLq49AKDbqk1ENig2Ej1Pq5hoxS6AA2NhnK342H26uJDtA5qiX7",
  "key39": "38KWKnBJPquKrA9sJwEBP1c95ifg384kQ21XQowjM8WcGvb149u3LaBuCvxEYsztuFbicFbPdBqydhWWBv8Ryft8",
  "key40": "57Mu4aFNwfHTnGTarUQvQrHL5F734JutkusHQqxCfxbkmMJextmVpXBWj3enc8Ko8d9wiGPqGyDVEyXG3QnSAzbs",
  "key41": "3Vytv4FYJfAREgFvRjS2gLvk1c7NSsy2Hxjp2WRm6CUg4uLV8svfbtwki48j8jA8gTb63bsNiVFgnt76JxT7WRNp",
  "key42": "3q4dbU65DJ2soMqucJB2Tbe79QdKRamndi4bxcQZwUogPTkJNV2LgMALp6yfq8mgNWJWGJ5dv3hviaK7RiTvavXn",
  "key43": "5Cye4DSnQdUnpDCgFVeFCWorYadvAtZD5akvKcY6L7pG4Qf38xXzB4AigiYMsbxRLHVgZcARuAnpXdrP7kaer14y",
  "key44": "H5Ua6LLvvfnfSF6tMgdEh1uspTrGk5WnuyTogb7YoMp22JGdejBNMeFrQbvh7f8VKe6ameUstL49gucSwfTJXeu",
  "key45": "2rkGvVt7kaF1L1A7DNGMdo8tw9LeMG6NpsVZTmKUmLuPhzLF2c7CQ9cGFnuNjiL43DPLYZSm5d5BMEPUzLUkJ9VA"
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
