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
    "3nULtKTYh55drm6Jvgi3EqQtY6Hzisja9rbRFGQ9y4xuaDnM4EGFKUDMpoDoUpsHQMEFe95oDzCiGvFi93HdikrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BSeT5EhBQhhDViE4RMHGYaPLpJpygWJunZakXCvnd6DtdHhLnV1ZGNz46q91xpHU8XYQ6Nb7iZbH1tENAbX98KJ",
  "key1": "3Lnj96MyZTS5t2aioLfoKzgir9QYuFuGfest71mZgSXw3pXqSs46zyGY2h1Xhd1XcmsMpYBG1PenzJCFXBk8CiR1",
  "key2": "MRziTAvvqRTmEwDHN1ynnhzdhBUZ68wpoTxyCud2NAn89ThDnU7GSXWioR9BcuZSjAEJbAKgPJkC5MCWUf1FbQt",
  "key3": "4WxeXk725viAaGoYSfasYvQPqQF2GccAsivqGSANZ91o2K2tyQx5NcorHxZbCATvZS5EytBuUmRBTJ95AZwd52QR",
  "key4": "2Z5cxVNWtNv838jTDa5wVvyhUfyZvxZjZ4WEdzdugsTUx2bBJBUFWFEaarnHHLTDvF31tAZDGfSJ5wLAfsyyLtMV",
  "key5": "5aypXjovLLR24wWJxHNco5GFsUsvGpi6Zv4YqoGjN4mf8xjbWv7rqY3sk1ekXoQatr46S8nyQNqU82JWgJdKPL8o",
  "key6": "67GemDS2jXvRMSu8dUwKwjt2nH6EeFu5GHRtxpdfdg9f9C9txFMZ2nGMGMaZWkAvNt3CdXxo9V3ZLqNwsHXzMvge",
  "key7": "5yxzNd1SdofiMoJgKJz2uRvZF16kPHjQ8XswCYSJoRzX2onpn4QwtniEdanfSkVNNkUbiPTKSdu33a3V3QjLaJ4n",
  "key8": "4H5GWSaq52AYjgZwD47mC9U9gp72G1qtaa4P3nawLNr9zWisUCQHyzkQ2bKpGEqGwbrHCXomLvSLVJzLjgSemLVm",
  "key9": "5CFq835zVfuhstByhsATHVBPFdLzkG4WovxuD4ymd47j4Pw6FsTjgCj1EWnqEvNjcVHNCr1oDPvHXeRWXnz4MZp6",
  "key10": "45j9eNQF4w2vYb3mYZ6Ctx5Dw41zXbViBv4ZAEt4ebyixZmq6gaCtkML77NbC8q7FzNHjJXnEHFnL6aBi6WvNESw",
  "key11": "63Jq53i6tJFMYb4E2kfzm8x5vBdHy62eFqAzfuvaKiv3dTpjujb4bS8Q72VY5rfN8AmGzsvuGU31BJHJGNoySrXt",
  "key12": "FWPetYRfTp49oATfdquf7WdFy9PCahCkBiadFrikzUnrtxLtrC441m61jK2DRzeF7HEj2vJ2PoLmc3jWkUEGcAE",
  "key13": "2v6LQzwUBDMM62CsboNDj2YyBrDaJZQLAQsNYAfp2YemXLtLC9LnZsaknqPcTAGC4Ddv57a96yBMjJrStDnPM5zt",
  "key14": "3hESH6SpPKNQuyfD55w4GuJvu6P8pGRbTPuFHsiWGrTeF4SWC6JenNGFz5nBPc1rPgmY6ptCTiRX8Kzt9tMXnwku",
  "key15": "569sxgLKXBNK8ymbANrA3Y3iFToEG98geB8qQWXN7RM4vfMP791zeTkCW4UPaa7B13jSdhFToAQLNx61337ULaYP",
  "key16": "iBXzU9uXuqZDU1xGRp4vjKAkWJyfbW3UXbB1BARhvTf5cryNPsKWVcbKCngc2mNkYxYc9wrWShPsmRn9WEhGBtr",
  "key17": "34UogVJTFoex8CNL2DXERLaf8tZgdrt6Wnwiga5PpH2oRPm9fJ3153JHUBJwNVr9knWy4nHqwRqDeSN74MnRs4y6",
  "key18": "3RVR8pmGsqegKxaLRjk2jVvPP2t6iSj3Eupo2e1Ye1DDKjaVbVongeh9MbLnp12gimJ3wDV2aPLXdEjqzdSWsuzf",
  "key19": "375iEexV6o5bL949si13tCG4suVjaz4G83y4UipuqHVrDV6FMsajf8yWceJA2toNZj4PxbLmKCuHpUTCUDAJLxjK",
  "key20": "2weeihUvbLGsVSQDsmDt4TCrm2U9jKfmfCqgt3RnQZo6DNFbthmdzfdxgpiCWJA4nm7y8To8BwwnvFBQ3H4r6EFS",
  "key21": "5zZtnZxFTyuhHksquG5DatMATbHPXF1ceXCeLDxF8uY5Q1P8pnYfT6oTUpYe3vsDYPByusDLLi3VQ3JpotbPvyyp",
  "key22": "5hDywsLADDxVLobWbiXp2PJifjpjAiGC47GJK1DEoUWy1wt9S6sUbKeXTsw89Q5gL5SHKaYaQTwTy6PYARYs2tJF",
  "key23": "4wtDeU9yscu1gVV7FpL1SFwGCxpVCsvj1qL7HoQmisN3xy1qnZCdKpjEt6LzoewAXtzyVYoH8dkoz6JZokieFLQu",
  "key24": "2yzq8DDM3mCJmFPXkwPYHU5SbLZuRvP5Y61MfRSq3mKhkiHqgt4VrG1e6KGxDidhy8WWsC6FnVccrTkrwnrnFEqo",
  "key25": "4xVSnwJFNizqsgwj3zJUMZ99bY45nseYj9xE1uSfqxMjBn7eFt5Qax9h7qMvs9xxFYtcKJtgzCtMqvXwb4xiZSGh",
  "key26": "2hygZ22s8d2VjF4B3xhX7APsbfZWssxxGFaqkbXGmmFzZSeY1HYERuordWwSrHwnf8b2Tt7kPq1f5MXXHAo9sJkd",
  "key27": "63PnZXabdsv5D7jpd682XLfq4rHdGk8DHPnsipF3GTzfzkR7u88PsmvJ3d73RRbKnSS1Jb3AEwxsUcK3roXckguz",
  "key28": "2UEEtLuXd1JRLS19kYZ2vTzq7jvSGnwAoAcPTFyqdTzcT2ynyA2fXYztGjT1hbXfe2tQGht2oSU6UJpSBFVEeVs8",
  "key29": "3HEY33vJnqhznjKnKcbmVwoqGBGTHa6DQ1pEipYx1WE6YQvPobB2gpj5tofNJWhAudy3mfMrxLt89Q9vSe1wi8en",
  "key30": "4gDRCxDXiRS9aYLxyrQ6qC1UE3ZcNafTUPdbwTsXhafPRhwAKkYbeqo3DevLjr8XYpK3a8y11rYXjohFZtFFepZM",
  "key31": "3H1gtdK1BYHRLGrX4qMyoVHiudzyB6BJCh363rq9ayVExRw9uXEF1rLZtWxD77i1wGq2mNYE8KNbbJkexyvZA8Vv",
  "key32": "4NBNMdEqHHmVKuq1R6oZ9fKqYZ1H6hpSuVGviRuwBTgyfrVymCbpfn2aLZr9epsVAwgztiy5uwuhm5Tbbqdr2hBz",
  "key33": "3TpEzjWDmCUBntDxgUPdfooqabZSeSSpzVT1zW1fS6Jmk3o7tfSZH4MPBRqdAcXhxGnnhFPZPasf2suBRVkFmJ4L",
  "key34": "iyYVKk2mCTGt7wZdA59KxZLqHp5NKL79EbYC1AKSAK6yWJDQEZfCRhiMwEQyc6tR7okCCQB671oa7YCJuYce434",
  "key35": "un5vZpMrdag8mM8656X6iWdwqYT3vUBU2oniCExVTdaHNWYa9sVooyEwvQmkZ378xyJMZsE7Y758erN5BGzTzYA",
  "key36": "4XbuaoHiXJBRSRwRoUerzkZruqaGbMMojZfzCykXhZWKwJbYbKjCDhXSrnPen2Ve2jk62CFF3UZLhfE4dkiCecEb"
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
