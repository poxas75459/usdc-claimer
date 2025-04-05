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
    "4mDJchVaE7dHVAkHdGCA9s2YMdwXPYHA2J5bcamCzJmYHwH4qQbZm1aZaeoF5pw8UbjHmDJf7K69vrHWw7ctNv2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xi7NZzr7b6HeAkniS6WzdNX1urrmCuga6znXR1jeRBN1kxeKgDBgLahZvcLSQxF38xazkYtJZ3benvFBcQrjXr3",
  "key1": "5XtX3z3BGc6pMYT55bxYJ1cn9XvedsbXRp7nm65nXFNJKDo2ktXtLYR9dwinGSJuo86kvvbPHQ3jXYBPuhVhbDuk",
  "key2": "4zEQUySSJP5UNVxVNE1SQK7w2tvwWTEQPCvhzU8YLwSbDpA2gpiVhABKdJDi7UhcJ4fdxHSMMQYtAwmvwV5neCjg",
  "key3": "4S99SGVZWXsKqV1njr3G47vBzLg7tDYgsPApbixAVVGzPH5QG6Vf88zd7h3tmB2XofvXrGXbhKhMdqHBLEriGeh2",
  "key4": "8isaKpE5rsN5UkqhbmNMa5zsMNeaCjRnWEqMKVj6174Vc3w871uUiiSbDYv79ECUmveXSYPQdkNPLuU41MtES2R",
  "key5": "feKbzUR71frQmwR8abZhXwSCbMK772SsgiTjJNioaDF8yVwiNyFPVStcPHpGe6wWJFJvzECWLK9926TKm3WF8DE",
  "key6": "64VpnLbWdmW2Eub6cdJ1UENJBAB5Wfs3ynLiCw2N3ntVefQ16jSj6PcEsPFArkD3mp82Gvxtoyd6S88kHd8PdHRN",
  "key7": "J7TEpQ1Q3UddFqDQ92G9gnFFtc5C35g6rw9NtGsp4AGmuZopfEE8mDTXFuZtHoBUaGSo2SixiyWuHXPgAJBDwrm",
  "key8": "4xUTdMF6FY8D22KbMMZjJjK4P5zoT9FjzZmAhG28zqqwUqJ6Ksy4ma58JcctxSDzwKjccKcSPDftdS8N75yidXeT",
  "key9": "5KsUYT85ksQRZ3aq3CpU1zeDRewiMbzQNv4e1w7XevUFsCCnuWup6c5wJb4GQkzqT8rDcuF4HK3Tjcb8kD1u9K3A",
  "key10": "3ztEduA1Y37HsSD3YBPtRkwsM2jNJyNEsBH2Xht8FeGtsP4p6b1GWDziJhPdRki2itikr3t5iQXpSCx7rJLEUC3F",
  "key11": "57BDy2cfQuKGrbExkAUXxF92djHiqHouuSqVYvants7s11j8BXq969PJkncW4sC88P1UganY1FsQDUAtrKkkr7xV",
  "key12": "4SXsBbvUDVM81v8JAmJuZYzFa6GnWdcgvbbPPC8Zx9r5YCXFaU6PZg7dE2PmFFHfxHj6BLvxZPRgexNecHn43pwQ",
  "key13": "4moC1TMcG5Hr8t6NN3kMg1Vib5u7pnWGzQFBRikFTgZLPPmqGa1QD6w2FNsk98fMJJPPxFV3EfzGig2xT3Y4Z4b3",
  "key14": "3BLJd8Yd5i9dor4LTGTcxyQsqEexTF1m8LZ9eMXDXaXREAGhDaVs36nBkzeWTaGPUoQ2SHHCg9Gx5izVcp6gZvan",
  "key15": "4oUQ2S2UNySPDg783zFcEc7TAoB8re1wstpyNKKVUiWCDP4T2fUzm782bT9VS8uJbPGH5FqkLbZwi4CV3kSekF7r",
  "key16": "cBpTvWG7r9YX1dxAZRnK2QRYGJsLB89NwVDs9aBk9GVE84RQPx6m5MirQeG47kTWNRL8ezzmxUq7GrUFU2Kz1mc",
  "key17": "3HSW33eBBhRSR5iFqaxqQJg6gysNSUBtjrseSvSwFGekodCRHqRuGNNPbxHYqWp1kdQgRtK3D9huuvJ2YtLcYHs6",
  "key18": "4CkNPHSN6eEKGZveiziwoPLth4BWAsDbQ393DBUo8J4RZLPujjAWa4xVYoHxmpv4UTiH1FFvX6CBJo3EvG1iyRUn",
  "key19": "4jBFr7fdENihaBJcdPTKJojJTngbGr5BwMKR3SJmtAKyRT2PmrsFHCW95xsqeUBitNKKqfhJWAVErWpVjLEDV8hp",
  "key20": "58FLt3cdbcBVUNmxRQCmGZe7ZxHqJTtqS7Qg1S38qjvigB8FtaKPVmmBDPjJKpcEEDMeXbDXBqwh8qBcCb2wpvEv",
  "key21": "3Pd8qSJhVKjvr3UVLJ1dJANqS8xeWzkjByyxvw6NtkQ1tYGgKefgJR95jrAovqQjNFXme5D4napoiQnTUfkZLAjK",
  "key22": "38PEzmBNQaWtEkunE61L9Cf7gaVy7DfKNJG9aLENNV8iwceimtZBfU4hgGnZZhoehE8Vp3huhAyiQDX82tCkHUWE",
  "key23": "4jGcKGP1P9q8kpMA3o8CWdLmk8ytLyqFVvx9o1y5D3nTSrTpUHU2chNRM97Q4t5Hov7HyUtfgJcST4hw1Q9zJn2B",
  "key24": "5TTwbDYb1ikXNSZcb2oXgFNE4XFfYT73DxzWkqcim41iPKKNELcGvYzXneEoF3qKsJj3LnuszG7V6zLEsY785FEL",
  "key25": "5zXiBDPbP6i84K3vsUZnhjzrbsPCSGYeBLkk9FUwi3MwhC3mtfzFF19ZYaiM3B2LLQ5sFGb1sBEZQvpBXsbVUadB",
  "key26": "2Ffw8mRKSZoEswHpv8N5uN6RGxrEjt6WtrGS4WuJw45RdiUp1LHs4spaQeTDFRyhM26yyAHLcSPe1oPT9SPTu96L",
  "key27": "2tzgGhkJWMkZbBDfe2excDtbX3BGLvtrHzqFdTcBo8zmx27FZnEtvKEXegrYJ4SJCekuBRaJ55aucnTwqerEKrzT",
  "key28": "5aMnHxCTfK2TgXwtiv1fLhHbRnZhhgFFDGnRnJGxgcKpMXJbbHjYoQ82yTdL9jp7YA3vWruyeGxrw8JxMmx6amcF",
  "key29": "UVBkNqRiZPYpy2DKUqhaBcUipSTbt7Ep2VyDNKJUi4gfPH8aYbcyNJcRf7P7EaaiL1YmcJJFxVPGC1TeR7noHgE",
  "key30": "27aeaRJji1bP85EBDaV1NFR7BPuR56nFsTESPoJQg56F2pRdFGU62CQsoE1wyvKPsSTznb33Sz8tcDSX5KoMtpBT",
  "key31": "5r2SfNnPpCXsMpBSMezZa2fmTUVBrzi58XYoT9vyT4sFff1A9U1EBPioF5u1NnvXtSA1QhSbqBgThncomz3DJhbX",
  "key32": "4g9Rb7tofXdtju2B8FcZyC9gvJN3bkZJKN7v9Cmj23VfR3wW3vZRa3Jjf5fyu8tgJFkVo7XMG9fnUp7sb6xgKsyC",
  "key33": "654eTC4967cxJx2H4ZGn3eCrye2htwkHMGtdwvuhPEaBGQbeYorhPAhfocmUptySuHZdHY81Af2VF121DQ5omU9X",
  "key34": "3ZZsLmWsMsEFYdmmBTFkwSfecT4A7q9erSFcqUY6Cf4u5dq1bDFCr6VViaVGiJd7nc3xxDn8sjcyBGgPjuWcoeTa"
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
