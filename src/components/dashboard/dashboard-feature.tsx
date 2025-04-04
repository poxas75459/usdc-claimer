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
    "3bMn69YiL18FamooZKPYtR6H6jaUGysT3ozEjLVh7Ar2S9ew8qCdBTgiG2Jm9GawGxppz4oeXHZsDGQq2LMKwBJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foawPtWH4L75y6WdqaDSB92GCgi2C2WsMwtExotVH4VsJzB8A1yDZikRgfpB6CsKBAdsZbioTB85hrF7ZJwzVpJ",
  "key1": "gQX3N4MAMLwKGMj117c5JWDdgMb1UwrWtSjE88wCmJxW8kMTMfPHnPDSunf5jfVwYf8ZyZkSyqahGxNzS1wmBH4",
  "key2": "4nGLuKhmxw5mW2KH2RkGpYtrhJpQW3y3eKLsQNbpFg5aTy4BiKKKP9qEfa7RrSJbMiBm3VjFJZarasAusKKhgQnV",
  "key3": "3ou7sV4qqnngKR6PZKD22vY4m7SPXjXNjU3oXRZ35kyECE5y2NPuuksfsHQrrdLKvPdRSgNTJVH8V1MwbAAomjWH",
  "key4": "4NxqVkWQYNAu4mEAtHfmhBZ5j97UPBqTw32fknFnoXtrQxc4yzhXfHSB42FDHqMjD8KGVUQu8SxZenAG9mMCwVGF",
  "key5": "2ZnXddaSvodC3RtNwU8hf7M4UrWfVVkC37MwJqWyPJxvLbJHVo4gZZLmJWsvAJaBvsgBu8j9e8T5Yxjokk6eDKVQ",
  "key6": "54adsZkLJyecfzi5cRAmwy1rHCwQdj5Du5DSDkfUyRDtYhL81ApjWdLMfcCp6VfBg8o7vxch7CnCYJCANxxm7XEz",
  "key7": "4orXCQJDTZekB6TFVb8nFhDnDxSQSA6PakBs8KJcSWLc8rMEKSHNHWafvfyM9NcFiU8gwTTGjzweZCRR45NzjxCg",
  "key8": "29MBVV4APtveeH55dfBwuKZ85ikLGyCP5XTx9GiFD9jug9BE5jStiHgoathHWMFHswNn52FxnvfGEPZsYprqoAoR",
  "key9": "5aRKR5p3HBQCJVcTtdyBxkLfKBppx1Xd3NUx3o5fh9Kz1f4sN67kPJKXruZWaVNwGBGNVW3xEvNsnY7nUrmfYhdJ",
  "key10": "345dyN4PUPF2uSFRuapYMiKhuE7LYv91AuNw2qUL6xb9J38Z5ybT1rrdwBuqGmXngzCmeM3ULs48FR58dfEyjQmA",
  "key11": "4fPkBFcurHWzSX4Q4vdmt4pALEKij715jMfuhY9ce4BqhDJXgxaupj1dU2Y1QnJjgCxFc2Dr1T7b42KGPdwDsbQh",
  "key12": "3LSmtMVUFD4WYnKdra6m1yizFrshu55V5HuNLzsnhg6cMVFTGQHWAP7B8QZFqj7Za9K1v4JPbUHA2cU1vhpbNFmB",
  "key13": "2f3kJKPkWUezETgg74KZ3umvxWDo4MikfrQaE4E5UD1hqy4LZXGakx8DhCtxnwxpj7JurKTwbRJRGuhthrztRdNE",
  "key14": "61BjHG1nwFiVVpnkNp5qESn5R2Sy92VVqLmxbvo3cz7uq7h5WvfAxnJAFQ3KKpmYZiDpkNoVMLFLdRRvXgXAjaNq",
  "key15": "2m3d4mY6zmJcTcYuvsuwtyXcMRptz6Fm9NEpqobStXzMMxsL48grFMqAANcEQEqkCfTPcvYpB2MZkcxeaRQEx45M",
  "key16": "4pmDesT3JUbHPfAT945CX5G7uqFu4vmSvdtyPD1sWJur1Y8ucZpmiUZ6nh7KpE9VFdPe3vRAqRy3tUsGuKtvZxU4",
  "key17": "3TPGQhfYasQqeumbxcYk7w81xmby8biUMv7QocfmTrv9K7YTXhWuYC6Z1ueUB2sbYhJNA1GNZQxb7QDoLQ3uULPk",
  "key18": "5wBUdCHpAJt1ekMFdnSgaEga3e54qhhhuXjs7EwvBLfiqd4YENy34SeYjwXd3WuNR5N8tHX5GCdcsKA2tqzeWGhp",
  "key19": "EwWo8dHCm7AQRXakVRN5Eq4NJxA52fdbqxJKNe4RoYZNPbGq2J8i4FB95Dvuo6Wdf64jKcikqKJDKNPGzxEDBhU",
  "key20": "47Xd6vWfdMGRE1SfGpdyEvqJ99Y1rx9vXGhjGeZUwTcZPbZQWkiUX4fu1iLy6w5bRLxkTYJXDJ2Q4iV97cMA7613",
  "key21": "26AEu7bocxbeVPMZQaBQKwrRj5boq45t3jd6ARXLadBy2DXWcNBcmkqD59czs6GweCaFM3PDoU1ASrn18wcxjgVV",
  "key22": "66Gex74gUfirdfAJGmDDSLoSn1J3fxVwAiZtpBBmSgPFkdgt4WxdyPLQCgqtUazMvMQPWLWLRjHZrbJFSpXTEAma",
  "key23": "2gdDrUCwRxznt2F8eztW5oLsK1kuaD8rHoAYiEiRFoRedVGUnf3i3d4ewEWGsF49XaGRo8vGnvpXrJzRWBmEMVHb",
  "key24": "bZwZA3M6ATsKXsSkstzev9xVHGFh8k1gkBgEicr734q3SNKttHgF4Whm5BbLSejDYJbj63jx1feNoAUg9HFgzUL",
  "key25": "Vj1es6Qm97XgUXqxxWzdCnBsunuhf6ChaqUuazGdpFeFnoiievigqwRBwicotVVJv5NvjnVhTQA4dzrSwSWrc9K",
  "key26": "3aTpnzQWxGTnVFsHpdLFLpr7UrDpRZukaDXr8xERiTR2iDeonQcTTx4m5aZTmi9mUbbNhmLCPaauXAERjzmkWFU3",
  "key27": "2a68BLLWRsGPBN6p2taNdSKuf5xRDotTe9cX8teg7bz1bfMp1EjLYGKf8G2CAtDkxhrRTsomdMEXxcCt6u4PWC5W",
  "key28": "3dgKiVsGDCPjo7U3mciBHi5YmTT3qWKWEyxoSB1JLa6rnAsPTUdqDxrngrh6tHrChYSat2FRk17PG4Fc5nHzcKFE",
  "key29": "Ja37Xj5ZbLYqvDHcUz2TEABgLvrGcELj7i8vbeQA4K1o1RSYsV89WXPUNabKRUwm71MEs6oAsneq5rFpgyTGgnv",
  "key30": "4RLnRbVbGya6UMVULqB6HUwiTZEziDvvT4YaRoq7iFQWN4ztgQD2XwBvmgUMFy2YTbPKJHtJvWgA425JeZF6H82U",
  "key31": "2fb9gFAiNeiC2RDfFxZUD9Jr6QmZwbrvaYGMNJgF9qSbRq6VHgtT8dv9HErW4wWi9YpY6ZZ2QEmCVPkTuKYT8Mps",
  "key32": "2tar3rs3vqrBV1gEjoWd9L2iGGGCMjsyEjK4vYcGzK9DzgdUMKgs8MAH7xHHWTGjJqMjkkQpLy5n6qqNfLgBbPro",
  "key33": "2gc7ydv7ykgouP81v4dQWpj7ojmNT6k1TgYnrkeq97Pn1ARbke1JsHChGXXbxGzhKK4zhTS6XZYyKfeqdL9bMTZZ",
  "key34": "3tYgMTFa13P8pKnnNa5u5dnbgcKHBa3fJHwWXkXdFTDaGxea4CzsNGsREhQTSphCXFuY1CeTtVt4c9gNqgDdGVaZ",
  "key35": "4RxFftpoocfsRSXqumQHxwTepscACSo3D6wAJAdA96avhTdJ3Zp47izQQQyqo2vrWopCQGbw9p59FSDxRA4iDzuo",
  "key36": "3grLtGKmfgtbQXUJ71HdY9HG1buDXTv27gKqvCUHBkgp1EVTMLb8GZuGqpX1D9eqE52C3XfRTfYT38iDpyUUj7AR",
  "key37": "ZiqkwkgPEei73WXB9UEeBmajuQjYEeCcXiLsRD9jEnoZo65ZgeM31FVxa3dtteBP529EW6e6VXaeHdmhXMrmuny",
  "key38": "4C7njzxi9pMFaqRfTwUeBnHjkvGDTehuv6RyEWqfYAF6qdtkUcRD3LwxnjdkXgb3pupr6S2JNRp9Cv8kTDrXHnfE",
  "key39": "62LEh1mWBh48j11LrAgf99Rj5VGvWMXH63BjM28rFYPrh7oDkGVT6y5ha5MQvJk15tCqcX3jGgrsVmdYwoZkCbHX",
  "key40": "4HJTrFRVfzv5KtKTNgmubVfKg4rQK31wgEqt5Y4oSPUv6cJc6W3YBdmHdEuMdTYtnQAWa29ohwcSBFZmVomRKkAo",
  "key41": "5BpsbtSQKBqBLa3edCCdu1UbRkG2azLEoHebf6gqnaskRtDPzaNcFU4c8ASYD6SgcmpJA6qb2VShY96U2DuYY2Hx",
  "key42": "3YefTJyskK69Bry4PRhvBQJkhAwZY7fKH1tcFR14rvPqvbRfiNCT8CnUDfHUvxvDhtKTkrv8kRH67FMTi8MDdnkr",
  "key43": "276KmGqTxd76YyKzW9CogVCa6wvpxqL7TLvVxLVcTAW8gkFJKMvQs6CaQ5NAmgoghUmJGwD1Tr8zNaS4Vu2oB5Fq",
  "key44": "37A6CZtoEuhEkCBWRN5cgmEf9HBJ7X4D74xwH1oQECBm9QMDAV6PZMHTn7LZuq1BgQmKZk3jURsvaMgDbyYwFsTv",
  "key45": "5vxpnCpxmScsgzKiQksX6xmKzLqNmgvcBhPMnq1g2Uj7vWw655eynv181qxFuapDMNhw9TwntKHtb4tSMvw399Qj",
  "key46": "31zYT8PwxJXXsuQ2C877B652bLNt5imcYZZcXfx2rwqbPtTwq9K6Jfnx35jBcLLKFG6kZvzby4d7dRkU1ejLaAvY"
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
