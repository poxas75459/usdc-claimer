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
    "42Yho1KYmK5czmALjjkdghJdYeN5815mSWDqDdoKPAbNFf3xgRv7Eu3EzsJ7WHNbS9Q3NcDYUTJz9iaGjgJ6HvYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PgMbY8jeSiCcMFAdxam86ctj2fG8he9iF32cgF8ULL9e8exgS1BPCHbo7S4MSkHUYrMHFA3vA5B3YurvaaEiNYw",
  "key1": "5EDHxzUKqAhF49EGowFt9W5PjMeBwnn3imAQHJ2u1y4zvbggZiN35VntomtmnmNjXHFRJHSVZouqwMR8YDcp4dDC",
  "key2": "5hjWK63QXTocf6yefypF6X5TQpdJVRHh7nsLiqXcnkdqaSotFQzmTnCVRK13bFnHhagFHrY3y8wu453oTerBMGMw",
  "key3": "4rZfyGWtihAsifAeyyzsP63QfbdKJy3vtXDqyVyhfiaTkvvNr2YU4T5xkevTx4UXfVkkdVVmvDRfK72Ei4VEpSTW",
  "key4": "bfzsjzMttK6PHRP9EZwouPEuKN9Li1o8ZLsoQy91TEvc7jxPNvStiNXWobb5xeCJ53beibqL6iAPu1xKHgYFUrg",
  "key5": "4bJFd8w4f5FDxYNx3da3BLXoUgdncXUYutEoja7zRA62X1FhPCyz8uEsThnseChsVQ3pb1LJ9b1cL7hfxXhKj3SH",
  "key6": "5iNYaSZdFSzfTNSQfjs2bYNFLyokmHpzRR9Fd9X5wfLv2VqTK4A4iXmVFLnxPyVTy6tVzbGWYqw1sK27ZfvkTLA8",
  "key7": "2b8XoNTN4THSPYgvhguD6AmVXFhV9mmrqZt6K8j3t6KPQtb3PieJgah47mcZKH6RzYM3yR81LCyiJmUChaxnJ27W",
  "key8": "3Z94u89QfvMBDKVnoU5tUfyS57VRg3khR5Lv6W5Ei5RhiSbgxave2PwNq2PdrvQ13YAqJPSvWGRTzEmkZCo2XpeU",
  "key9": "4jyAXw1zUT2pEPFe4qKyijiWoXB24PEtN6TGYkvw2be7HAXbTn7WpdYtHGFjzojmonksGxXY2tpKt8qz1UF9epPC",
  "key10": "2f8cJQU9ehVwKxHakQesJ3WBrg7ZR2NqLF6STeZHh5T3VKUGrzojRN99MMC8omJo1Qcvwv4uf9CJMypb1Sxdc7yL",
  "key11": "4m99KRQexdY1B426Ra88AWfS71qSLt8vyR4iwnvMW3XB1WQEdnzKE3KUWfNWLrNPfVbXSQ58myVbvungsvZbDq5y",
  "key12": "4QiDNjEhwssQ37NZz2Cr7RshnD3SVSiyQ8sP8Pt3iYoFS6Pp6eSiCkWVb7GiuvyS2SRTxSxgkXiHUey7U8bKTomr",
  "key13": "38orpEgt3JkA4UidzojcgvACfqSVR5Yj7XLiuKY68Qrrz99XVfYqrJveUYd3KTZA1jxt5pRU8ehtf8CjieKr7HR7",
  "key14": "4ZEn76XDYs3FBpMiMKQrSdy7DsM3jdfYXiW6EgTGWwes3ZZYX2E51LkeX1JawdpvtyahxWoZDr3635gAjHjmuNTX",
  "key15": "KHqEzBGrWMurTvm1ybAMhNyuPV6QhP9iVvimu8SrrmkG7htNxSc8adAzNDmf3EB5Zao4LMcJyEVL1Lg7E5NeaZq",
  "key16": "2LHCbSFy3PX54uHkqHATp3Me4F4bMLddqG4K3C9LE3rg6uEPJeZ6vhtmn1NDVnWaCEPQjHjho6urbVN8daCNR15P",
  "key17": "4VvxXijSHNPZ1mAydEgsArLuRQ9EyqKwJMvA9ds8CkXTbxWir5pg2avY2RfFkwhjbtY8zB6PsCsGFwTTg6Dft9jW",
  "key18": "R2i8ensRmPJGyjVtG41xWQmwqArsiMko1uAwJ3ARCACoskDXMKjFEkBjUXvuW9zv8UrrNb2qGBbehGpzCT4txqg",
  "key19": "5GEkXEFAnqy84E1AcztNEY5kH2LPCciVa6j6mGNj9sju7D13s5eYcf28GjQAXYfWZmbEuPkw7U8WneU8w8BG1iVL",
  "key20": "39ceChocxPh1WRpP6GTsU8n9chCPBDFpbCZZM5s1BnQeAawVjkV1DjEMPeEhAijZ4b9p34YonWmo8ZbDWaJxgbzs",
  "key21": "5DQ6v67ZuSJ3YWmTWNJBByh9HLgrLan88xLpUV1ePDJouWeYYiRgN71DcSs9wXwSyybnKC4QVQBiAengXjpHKGK4",
  "key22": "4ciYrcHr1w16r9mD6BgByLFxVtG4MMr3Xpae3q8Bf4dMRxPDBZKucoJHc5BtKq3devnfFuWAjuCFsXyoL9HSXzQQ",
  "key23": "4mLy89pXNYiF3DDovWEzW6PBMMBykfJWURG2Ej6xRPM1dHAvzC34N6ZWYY8hxE5aZ8mFdA1g7qvDSWPU7gYn7hR3",
  "key24": "2RpPXW6AQVp8bf2axrUeajwvvz17xisuHpGh5Y21CNuf8MP75CUUskBsx2XgwgqF6UXnY8iAKAbNrEUo2ETpuALX",
  "key25": "5kBhHHcyJNshn9UQ9TfYHmnMrhTCVCBEs9YH75SZKhhzNq8xFQZZ8WmhUAAUScjmpAHM2qcsU5xagkwjgW8384Bg",
  "key26": "3tQL21188ZEx2psM3UEcMKKyyVD6WnK1emh5F1iCweev5HhrwqyBPVQxva3kpwNPbufN2xdQ33ourDsjbXEMfjDZ",
  "key27": "4AgV6vzMw9HtLk46ptBh1G7N966A9LBffaRvtqbTHapfVQ4Kp4rWWej6LSX4vsZKt4dyFhP6BFqffxTcbSeNy4Nb",
  "key28": "3PKUqLG3BnwjkRyTa1HPNyUgRxbaABxvdV9myCcDe4JftnJy7d9BZ3zUA7Em1j4VW4E2T6qf35rxbi1oPD2PQjr9",
  "key29": "2zP8yZfUdG762ehVEr42kA8JHzEktFX1XJQyvV3JZ6bQoJnVDNw2YKRXoyVn1CJ7wJLLgws6kLYFJyh1Z6GSc7UL",
  "key30": "2bC8QFDxKZfv4n7ba1QgYTH8mReLpcQWADuxL6U8jY4i2Hd7xnZzULPGhQim2pEsCQtD1Z4BoSUwFsfropUpuzD6",
  "key31": "44FRppRDWm1jBXTwVC4zoL4CgYsV2HLcsr6FuSaBDcYFDTtQVSkACsAXiu3G5giuMx6vCsYXtZ7RPa82ijaWdZSq",
  "key32": "55VjVso8C9PB7boGh3N6UuY2gD4jwYVefkJekuyuBoE8wcA7GZaRKktK9GJgqgU1w4vvT8bmPmBipZkCE72wTsy9",
  "key33": "5quB9Q3oZoVmU5P5p6gjayCYP1RaraFnh7jP9zLTupawiEGgANBtzte7GiU8vf3duRCDrLoF32h65cnx5uGkwoLU",
  "key34": "kmd6dqee5Shdg5RzTCohA2c7KfrAgRdAi4o6RiqAoz6Ad9ZisDdAUN7ya6VKoeXdatrDaZ9m9Yjodm9RqJTv429",
  "key35": "2TZ8QoLCCWGeA4Ssk1KFhNtL1f3cp2DWYJYypzwjm3hajwn4u2J5MPiyjJexkwsbN7QGtSVGnPFTGfGHSNkH2km3",
  "key36": "4wy2Gm3jizSKmMTavGpjHWv3QBBsvySAMZDJkf3fXcXKW1CjbxmWGpb9Qby4ZzPYdqkn6jwJ7QCyMTrPinVs5ATR",
  "key37": "52otgvkL33KdYTgLwmy43zU6vNCu1hyVqRWS7DTUXdQQeQ1mgZtCFP6xbLmgeEACVZzLPuAuCNnfcddBLjyGwxRb",
  "key38": "5QzEKifmquSPrt5AtRBaaWq4NfzL4oLa44ur6E6SpoJsMapvrX2EMgHoFgSPMdgTH1E6PA4xPaELuFBrXgeeuneK",
  "key39": "4qWQmHHjU85RpkBL8jWFJEnh2sPr4gD5UVKEQR8DByUrivXHk5FEU43DfuCK2XSymrVwhsDwD4UkrgBL2HDH6mwe",
  "key40": "28qYrVjFWeu37YkqUP83Dc97ExotZrF6mJiQLm5ngzAedrkFBRNaTiDH1i9f2quWx14nGDDHFbbiRJXChkfyMmRs",
  "key41": "yvMv4MNV1rAxrahidx2sBjdfbwyHiNGmRqcwZ2PoYtcaTLZ1jDMNEggbC7scmvY3z3HRR5T1hyAUCgS4Se1suUz",
  "key42": "5vqG2kEw8iieBaxrM1ZafRkrDCRwXi6Jknj4sfmjHJuP4Tw1C9LnbGgmZm6at92JF2UzDVFprLAtPZYu8zhZvBzA",
  "key43": "XufLmaJvLM4JngyQsoZk5cykeC1Jq2KiQWqHf9DHFjLQ7PNYSJfnNhqhP7A3bh2CihhdWQdMa98z2RvR7CLYoWG",
  "key44": "RCuPzkWKPZfzZLHrg1ifLZxJvj7GPuqZwgaBPtEzzNAdhaMrXLM1yaLY5969u4spf1JrQ7oBKPFNn43D8914AYd",
  "key45": "2R1PzGhNSSJRHu7TLfmhP4d3KcsCP6N4xW5LTDWTPVzTVTxLHcETFXZupeFhA42pRic7JFNsLrd7nWQpEeMd1LEk",
  "key46": "cmDYeQnS1xSSFPAwNSE1dgvGYQfgZTqns5i4hhedXqQbX1hmdJ4yoJf2FZmnqzFvoTDb53BMFC2tU6pzcfgV9vi"
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
