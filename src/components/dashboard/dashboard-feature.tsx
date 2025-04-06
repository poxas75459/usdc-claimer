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
    "5kcMEo9hdqUtEiQLT1NyddWVgTupYQ63q84vr3e26Vcex5FRBFyydor6wabdmTRjfGeFGY8pF84sAuAQ52rzSxHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JZnGHDukq4XgTiu7iQTqnfAR2UVdwmDHV1bEPfHGL3hahDWhtjdYDDpoUaMbbFDL9ZibUaxzimt8S8aLScDYoQM",
  "key1": "RKQhWMSrq96Wqqca1MyfGWMo9yCDDc9EcGw5oQup34ntT1VxLwSuEVCRwfuBqrvJ5z7Nv39iSso1rpU8cyPko35",
  "key2": "5budaXA5wFWmVUM99pSbNbeqxqs9Z7gu9XdDFKtTDGjmo2fCCUyKgXWqQjDgKRBuoy1K6eAhnB2WCoBi64bxSJbB",
  "key3": "6H8cqpkVYjTdqrjfZoe35RsKo1RMuBBWfG8iS2THU4jqugtfyzaGAR6u3RqCWru7fBK87ALSNwfHisoPCMKX9qe",
  "key4": "2DDwb8KQq6wS8XpiSik9wjyYBxkSFQHBVqC8xxd1XZdLehAfpoof4BYDHc4jLKp77MNHjyD38FMDco7MBvjhKs2C",
  "key5": "LFhz4RYmZRjSkfZrRRXYiBoXHmsNHSjUNhu8PJXBYQQ5Kt2kNSRSxiHprci26SuxWSts5RVAJBU7uJaegikGMgX",
  "key6": "52LZ74fcSr1Y3jNin4EgtQwc2bVscrH4gQrAafm9UsagV766Xf76xsvNKspvk1Zi3v44aALVoiQHDWasLYcvyEMf",
  "key7": "2XujxXy2QTvfAKdcBJ2gujBVQedVDXY5G5ZzFHekgLLbaEAqqNm65aZwtRbepGTXSSGS3FKdCnC2PFzmjZwN7Xkz",
  "key8": "3XgsfVjvj1x1pdBV3YTnuxdWmBNTAZZzN1ikBa94RcNCdGXRgzn5QXHvcYUyhHk6UD4fktvpdpnDJ5dkv2q4LKKQ",
  "key9": "5JnXh5c3LPVrtn8URNghTwrBE7NZm4u6RvuXtKg9tBSTGCArqVjXvEesTCJFKKyogdhaZLeZYT1gaEfq6TsXcq88",
  "key10": "3atQ64sfQicKUuzjpjgYmWw5V8gkBNUd9jdmGhkZJHnAQAaP18EtdUyh1w7n8nmaYd8JgzLwotS1Na8ycGeE1BNA",
  "key11": "5Si3ExQ8PnYSSwGhbrsY8XG9xSC7kWJEAign9XVF9SEHsZigVtkNkjrdWVYHo7JfaP6YaJ2KUfnD5Ag3bH1NyGbi",
  "key12": "73Tm6ABzdvJM2grkaa2i3srk6nGz5owD7vAEU4ANTyqy45vEo1DN7TAaENmFn3KYGkjjLBG2MzdVLyLUoN8oaeV",
  "key13": "2ytuZDgDc1wAJHsgSaRSVLogQZNcyqLGw1nV3uVcEJoiakf6h4jyBhGjDo2h1Hzy6y6qUAHRcMkRkeHFyb37bgGN",
  "key14": "35ytJaibJ2Y486fGH7pGiCcx5xhP8EcSnRc1FHoUqJTVGLB8dAbQRdwKYjwPnQ9sLBnQQ5NeNsZMP3X9S6BTLRYB",
  "key15": "3tKuKZqjLyz9ZWdBBkav8cL5F3SELVyPnVC7QnJUACAASx8oCndKPs56hRgQfaRUhTvbSZ6FGBPtQwDYYe3Y7dHM",
  "key16": "H2VXNDEoT4ZhD6QKH8k45St9wRQQvv5acWkFXCkFsWzGYcaiFJVZb1Jp8E8tuziYpiegeyZd966hVCa1K2uTbSd",
  "key17": "yp87oxgEmiDg2UibyMeDxR1zcBdDBiJEqJKXALSfVtvj2aA9LeCykKryfnmgdEJ5rrQZNxZrxa7jzrJNnYFcdf7",
  "key18": "5QxT18pRycK1gYtTAN2PmS5sWP13iGmJn9S1X5R2xn4ut7beCgN1SQpGv5pt31sLcKt1eNYJGBHphTkfeCPrmgs5",
  "key19": "3Y6B23PsX2Gr7pqFxRwtbnHezseyxHSVHeMoDDe3mqj9Xp8aGh5ksMfkANYbAW9FfcP9Td4P1kw3yBMEBFn9R7hL",
  "key20": "3VJCYSunNQEe8zAcUEr43Gq8VXxWzqsbX8Lt9iRoTVepwKGfDL7azoayAFaTWJhdoQpGkNPZFwWeK5ipXGyru3g1",
  "key21": "Cf9JnE3d25zjWTpguNByUUMCfcBWstALHxit3vSpoq5oedA8csL2oaC9vDDAiiXKPN5YGA6K8yu5Ppu8C3wcvtA",
  "key22": "hfEbPMhSiXPwBhqQkaNzAg6wdbgDrTDRMS4BkitBF3ZX14fm1LAHY2cF6Tc7MZ5LirKrq5nwiMxi2SZhBzYuZXm",
  "key23": "3modL9JaGCVT1Amznrr4cpEGQYhSHHNLWSxmfeMg6uz654r3c7wwPPntZZvxe8fryNei7KMa8cg954YT1sAKFWmo",
  "key24": "2ko6WgTAjbcR3CREw9jKxkyuGmzanLsfJrB3J7vHCHrbtKfikhNv1CX6R14a68JSDhrRNqyfg6nbXMdDdosb76tr",
  "key25": "5uSPEQQbed8mUMRPX3W6Jx1652gi4gabTtV1mQUML8K8ewwg5TWCWTeHosVuUoMcaJzUJWGM3VUX1vWzC2iPMJfe",
  "key26": "3Q9RMyrMcTzZCbhiD1YttSN58nWv1YAt6e82K5avhpeGqtMghwKUeXHwk8s8wFVjzME5imx3tREfVHTabrqv4K1T",
  "key27": "4cipDWVi2QTUBs7zm6thLXmAQC6zpW8njZk8rMXA6dD5eAsjMxq1f79mvuoqBWPccFSawzu8Rg2FW9GyxJaHAUsa",
  "key28": "584h7U1CNEmRvQ91AzLoq7RYEFpzPPcnLQs8eizzfDSiz8pNrwZGiTCkHAE3Yu7tUPWqrxD7vtkU8P7PAnT5t28L",
  "key29": "a9fJsitULo6ckNZZBCzqRUJyZPtpctNUhkp7sMmGBiHFbMU9krjB4ozKWECwA9mGQ7pXauLYoH7UnYJYuvcit3w",
  "key30": "3t2Dcq54iBrcGWbo6RLx4zoGG6ftXqi7bSkvtSh48VwWRg2pYYDrDRXaJJGtWZHdfftkQAUHSBggPXDJPiC1wS8G",
  "key31": "3FGXDZThdRE2hYfFdbSprtqvV9hC4pWuh41VwJ6vJ3rTuJWZ6spXnA4p8bV4J46uoupmT7rEGycYbe3aJyfvjKYr",
  "key32": "TAZ1e3mFNC7W7XiNkY9AFKrWYtPTzNFWAC2gbe3hL7nUPdeqZbtEC1QvqkzhzNbJtFA7XpzGYjPKZ82CUstKj2k",
  "key33": "n5sKZSpjyMr8DvYeXgWYwYD6tMBNEEwkCmUWSKb71JJHGqFmRnJ4M4chANHMJRuLh8vWyUKUgAMWN1KBFCQScJd",
  "key34": "2VFiER92tHKxyd9sw8aNDtJYC1aqxPE2FmNoSpJEVtbKBtp2m4iNZYidZ39en1nxnNeBTpPf5KY65ufxJiS4PpMB",
  "key35": "3nQsnk4FFK42v63UHXVYZvTjeBRgvbVJVr4Y6XiYc9zVZz9ZNBzT2Az84A7MttHcn3STacyLpyY5d4HqsGgmst7V",
  "key36": "4UDc4vjSogr1zUUhhkLw7bBpK2xgZ8Z8sozLHzxx7Xj2K7v2q3M2MZY8hWp2vv9CeDQgPLCA8xQLoLMNZY4fWGLz",
  "key37": "uzP1Z7CBkc3DroqdwhJhqPTrnndGfeY2hHqdtVCPUguGckyPk9EZnP33yjJPQmxH4H2j7whDXChwYtVx9jPnBFe",
  "key38": "4xcFoDj8L9KxTrWz3waBKfWwcAYvmuECMfxH3Er8HBHQzS2EBGha7FY8zWKxoNsK7XZzVPEuDPx4Tk29nC2F1Ydm",
  "key39": "nNPMk3VAyGibJQPbSEcab8r66ms13QbMg4Su3vmgwnEo6CL5yRfpQTUgf2kWbvU61K9EHYk1yWBS1who1zVLy3y",
  "key40": "531hdCics37tZyhsKb4y2f2aZ7GEy2kFPVe4SL7UD5BmCksEPajM5RxfhBT4vQut82z6Eksoswy2GHNpBe2UeyHw",
  "key41": "279bWJMXzRghNk2uch6u1AQ4BLVoP3VWCRatzAKSEtJ9EzqY4gCpFyX4RkHREghbLveQ6PNGTaiCFQjLMKnBXesv",
  "key42": "5iny4nuF85ZwXSTWqPz3rr4gt4JqrbroNbHE4iDa9y4r5UtVYJNbauAicN7eS5QSnEaM1f7sAwqxQMFiQYus7asR",
  "key43": "23d1XVUXh23YP9ALT6DaFxwfLeK2KqRAvpi9R1AJHBF4nb9n7vR6sCHAsidxkepMxY1eEmDvFyVtgF28RvLPgLpW",
  "key44": "5ecByUwwLHwRjkPvEBRrpQ5bQPo3B6AUzNiaXQ2SpKpBNXkaDqCRGr8SH3XMe7pitA1f398ofLr7tDgWzz6Ekmmi"
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
