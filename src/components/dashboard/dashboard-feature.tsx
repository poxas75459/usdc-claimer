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
    "7Cmp7gi1jowSxaa1FTZJ3EycYZVXP2JoJ2zUgVhxM6YN9MkLdpLRAbMKnLkYW2uFBweVzNQ8m33nXaUnzXZjiso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yzzda6tuJ5T18weMmuCbpXos6uVEAxTe2h7eSauXicG6sf316iCjgePx6GX5jETcihssTwgtUSHYE3R5iGtTsoK",
  "key1": "3Xq9Md6cB5VX9dcEjdTNR6BawVVueQiLQnGF37s7G9gX2FRTpY7ibjd8m2WoQSJYHN9tJ36nTYNEAWx4XRT97av5",
  "key2": "4eYeWn4gDEUEE9T3CQnJPWbgBymS1RqaQmqhA2qbMo7XDDyL1fHU2b7PVaLtA2kLMrEQxAjFSFw4oBCykuCoxeUm",
  "key3": "4BgUaMzSbKt8mG2XNdWaYDh6NNhzsWVSgLwAAnkcqXM8kN5cBsHvXfZu1sFQvSSwXSfW6URG13FRjNMsiSRg5ZBV",
  "key4": "w6ZyNhhKCcVcgzzAV4njSa43ztQ1nEm17rbcJhnnsSrqZFQcqcess75cm4HA9RZ9KGZnyBLvSft8uusphHbMpd6",
  "key5": "5jwia6e3EKgxwzMr841q4k7DbXw5yK73HmvWHsydXpyh6gGTaQtERcSdtiBB2867bigWLBahsrN9dyXS2kXWf5PT",
  "key6": "5D7gdkqN9SUBFw6Y5e2mBtrkUmXP8FXUQwZ21R4iKZjV9M6dZUokbmCXWKo3ur6wq56D1Fxc3XrkBS3ufD7rf5ST",
  "key7": "5NxDP92ameJGkdzKGMzQGCTKofMr3A1UPmiR8T7MMfAqBrrpA8pTxWD7VKmMAhX2qts7QQ8iu2DPFTxSK3dukWMA",
  "key8": "5CxgEsL2Rnnyn9DZPtpa8ZDMHiAkcikUeHi85eAnCG6S71trSYdv51EpnpkJ1Hy26cRFAxYVoWhachcWdrcRi6Eu",
  "key9": "5KgcLHJierXZPrhidh5wztTCGMR3Af4qWwuiohEucuqXWEt4f3F648weCQbjYPHcCWj1zWojMJm8deNSpdKqAZd7",
  "key10": "3x1z5DEvxHw3Dk9sRMcBNeag1GWBGPhVBzkPHft6DqC2Fkx4kwcpa3sxXdQhEamRBDEFWVswjLv3mdUNG4acqGd1",
  "key11": "3PcGtV5J6tuknPoPTr1aEAfvDeLHu3scTW8dhezSRX3fwJFBCvktfe2A1X6XgGRiHqTaUaNcEXX1fBdsm4UcVGQS",
  "key12": "4Sn7RDAMY4qtoMzQvPLZapukvCjNd8tQZ6BHWW5yCWDi9bCEi9yRzUcnMXi6yfFoShuKYZCyA6X6VE4PXptQyp6f",
  "key13": "39j7teQ2yWW2HzJhzEnKdh8yDgz3WQCFtPkAgVrs6zvSBCnRnv3kYHoGfJe7mUcRZP1479X58VGMYPxP2BWKAyuB",
  "key14": "2LJeDTj8z4zPfkXbswasmwBDnxsajbrczMCkFwdqPMcsVjTD4hR3caMaZDASk4iayEapwrcameYqNmLUyTy5wFs",
  "key15": "2Bw687vuXPPJF7ZaUp7xJp9K44aYvpx9jqRop3hdjpDeX2SrGtWyuq9Hrfoqzs26M7bidokyXhTxTaDxq7PczrD3",
  "key16": "37j3dkowcFEJHbfT7jFycGiZdB1JjsuGsUyWnwPaJUYFBS64TwsVK831rA1biBQ8jYDKYn1wuFmwiqB85R4qdY68",
  "key17": "62jFDaUmVpHJ8zjb7eRzneYBjG2DTNwyJiazTGdY79rLzSDEFyQTvVXTVmFkJFEU2xMUqPMcrDEfCz4J9yUpbYoz",
  "key18": "Mce5gYgucaPxTShSZS9EKcQR5p4yZ2HyTee2n6brouGxXw9Q95DyHQagxr9wjfe2vCUJXacVm9bBAfgT5TXc7tV",
  "key19": "K7o77PMHbJT7qJbToF1RfqB8Y9YKN5AMeNsrFtwN52zWpxHdBnBjpsSKz2inhBe4ys7y9aee1MteF19nHxsvnp5",
  "key20": "47vjA1GpReewcRcPy5qpw8JxLcT2DnymPoiVD7o1f2Ke8Adm76VYUqx5rtStroPyqhhfkVFohoBKusKtSABYVmnU",
  "key21": "4AiNbRRiNxTj87VSSzyBPoTYksBk8U3nc194tRpo8moq6Dauas4MVCd9Q9sUDWZJ9xzGHhvJfshjDdmXMS5H51tz",
  "key22": "62MA95kvYUTFpHj6GUSbCdpZohwPHEuxm31MAbN1vjtbNhsrPsSmJQ1NMGso3bACfxmkpZCbgb3NwNePcZnpxG2E",
  "key23": "3JsKi5acgfUdffzLAsXLKVGo3EKX8xPe8r1pJYfqax2vgUMap4rQdH7v7Ddr5VroPh3GW9R2ERG6cs1dUMFMHyTg",
  "key24": "5wi84nsAMKq7hfS9HS21TmaQBmGpEEX9ttSvUu1WKZYUp87M6p2nRhPXUsyVyUUf3oGmp1j8S1uR2fxn6R3bvykM",
  "key25": "612MvPXWMC2Tbk6gQDXZZNBsDJZomDypW6asMeXeiAyu252vqWLd15g7STaknz1CR1Vs95zi8Pc5uhXFxeoh7dU3",
  "key26": "4aPe4ikZott8R9h9Dkm5VLvwEo5zU8pBqs1WywBLCR4t5FKRy2Rkv1j2noS4r2nzxPWeixXbT7E7UwdawU3ALJLM",
  "key27": "2KAXo6yAmygdxZtQcF6qzHenFtRFg54fFXMGoPCCrVjTP13dQ6mHGGuGzrtGXSx6zBwXA7dFhBywPdJ2sBpF9PHM",
  "key28": "3Mt1ggGgXvtxR13H2LmyM2ZyriCS9WjFbvPVVvcam5Tj2mRDSN6eTxFNAi7wwjmk5vD8K6dooyZ239twuJTG62X2",
  "key29": "3ZUaMeHnZ3y2i3Js3rYn6hwLxYcz6xLWdKnjSnZjykbGUCYdaq7gomfAXvtbB3CS37J9U2q1YQf2WTh9NiZr5D5K",
  "key30": "2LPDi3S5NcWoFf6xuEUh1NyaiAJuq49nAMN1JNJPZcd5YbdHrkxxKyaLothprRMd7MfXVemGhraPjSbnDstSPKeA",
  "key31": "4Zj3FQHvaxbn29APZkoVWZpfgW7sVM5o3V6vpePYmkg55BTm5LMRJWRusve6GqkXjZeSbQ2kn6nsRxzUHMVJ5Gmd",
  "key32": "2mWqKXzrnBj5biAmDZKoy36N4JbPTfVsqRgHksVkkFYK11PVTC4fc6EgL617MmHmujbsRjrhrgtENadeVqKDRdnS"
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
