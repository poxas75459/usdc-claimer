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
    "4bWzbVHsWrMHsFD2oirafPbu1kdgP79n7vpsGadiCTrG8Dm53hKTcqEHn9qfrfuwjTuKD36ydxFjENmcs9odWXk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5GfuhREAPBkkFHCUoEQ2vKTnJcxuT4vjzxgSkPRJZSZJf3GNBq3T6ZYA4DiMeF8ELcdcNaX18qdqzebkaZ6gQL",
  "key1": "gSSz8tRVpsBpswsGECEM5yGcSKTfoiTa7dYLo4GZp711jPs67i2Nb3tjgWjFnd1AwF2JvywX1hwC5jLnA1PUqZN",
  "key2": "2mjHFJdyTa1H4iscEDcXBr5uDcaNgqiYPd4TFsCmo5ttrmmKDLop2iWSANs6hhdkeUrJ7ekXuWNcvEFgNr4HxKvA",
  "key3": "4uK3YTb7VBRtE9kYtqY11ZCMzrPKd9XPzRM4eUvkQXdhFRwY5rLMDUzUNKKfFr73LCgdUGgmyPTRQvTXyyN9rY98",
  "key4": "5HHGmsAWeKvaav42WbVFMg2HigH8LzdQiBfwQfXbzkqRpzF3hnGWThuA8HVCmwQUYLsDGnFc2k4VXU9QeRdhJbMc",
  "key5": "24pVpHRRN6ghMajM7yPEdtzHx4UP4C4gDoEqGJJheKexkaXkY4nDbTWNE9FSGCwDV8ogvo54RfktuV1zL6LAZPfG",
  "key6": "LAnMxDuJAaacdmh1G17GmtQSunjjCAQsrRFuJj8UGa9hVXfjQQJ9E6iAXAeroju2wLJ3gMKcBn346MjpQiUZd58",
  "key7": "3RkTKNorTVQw1RfTq66rVkXWRga14aq7b96GcKm6SeWhN8iKjf9fmJrQzg1qxxPcSC57dSx8wtyh7dieqe5eYSCd",
  "key8": "29aBA3s1ijRWeAtPCdw1mdcMFjFKkcr9AMR1qSV7vDxNxkVRKMR6cppp24rLWieK3PnAwhFpQQRMpeTeLcd5WKfc",
  "key9": "37GgtNzffjxMgCQNi8ZUhBcNstcTMMaxP6Vw4nWC4okVwCY1pFxumKqLzg86r2FqE1KyCsAFzmMijojqYMEYsU75",
  "key10": "3qeoLWj3TfUX3MsT5EmTBxN3kw2SYnDQ6PZ7vB96ECpc63vnPAgNxWjWQXAbhm9mSkBfcoFtDom6iHWrDb8iySRV",
  "key11": "RyPozakAXfBgYkRQzNm7sJJvjo26W3rDe9zRBciRJWNrAZjW7uFRjymfKxq6zu96tASiuicnCSHXM6gJc7bU6h5",
  "key12": "2NoLiytkbiH14EqnwXmEp9TRTPi2UEopdQzP6KZdCc7UdnNDyhQzLZdCNNiCbMKhSdYgH6BrUvrEVcBpaqstx2j",
  "key13": "27u17PNiMSWrfXRpRiRLSigDKHMkYD9D64TnF92XFWcHmNnU7cxzftZP9EbDgNKxzGWaF3cinAXUHtcuLLHQ8wEZ",
  "key14": "NCZZcwRevkXSXzFMYBw9Ntcvei9Vfk8a8nqnx38vokpAZ7KUjp8BEVhuqbeYo1mJbtvReVMEb3CPAZPt7vqAG8Z",
  "key15": "4qmFJhTjhs9wc8qmhrxCua5Dw8v6mSTtnArfEsrJNqXf5NEELvhbU2BjMANka9FebT13Zn1yjGrtpbfxBi1Qzbkj",
  "key16": "3CCA1dsKFDR8b4kk7PhG5qcaovNeNDT6qeUgLsinErKCBHcfnZKaHDFpK4vQdcvfiZ5r6bbfbru78BuvMhHDCExq",
  "key17": "q84DtDk9Ndypt2oCH1hU4bQqsv9QGUWJCgKJypvSEh859dkbsmnvAGJKP6SH8Js6vJL4mv3M3o6KyLbjhRKEqMh",
  "key18": "5ZHyFC8CKr55Cow5ZfiVybAPtDGQ3Tu4V8RZ8VajXXB3D85wtfp16h18hANghw5z4bZHX8BpwmQde54aRTXE9C3E",
  "key19": "5AjR7BpiNu2kYVL6Q566zLRSYsGT6njo979bt1i1Nh3Bd9QaRqdiJvsm1QG3voZH4PSWNAPEwK9qjCtZ76oHqsRC",
  "key20": "4LibnAZDHHCu9GMyHQjUatL2VX6BosrWjQXJLpAA8rULGtYyFvjBB6C52wipG7jN3sRpxxWhDsKbQ67GNED1RhPW",
  "key21": "67RLFLPDJrNDDztMJxaC6UKzch4Fn1Uc3TaePLrreL67Tv737Z49TCdBr9EMzSn4sroQpD8e13ABu3BRTa7KFquv",
  "key22": "2i4LEZwJEdxLC1xjqS4WrHrNboaaVuJ783u9FBUXEBDPiJnp4V16Rjxj4zU5U5z7PByUbutbMKfatTiiWdnEifRD",
  "key23": "3aEmr41gSSSoY2eDUg5d9EPWGjLtBgo3JL81AZsMRWJvWMoxE1EU7sM7AnqvHfGCa3y2BXjnJXQ8rWNh98yKxSr2",
  "key24": "5a7n2sRRvAN5ao98EDd96Qbo5am6m2fNQcGu6Ck8fZ4AP7r74ZvY7CYUpNKW7d1Emt77cbN3Qmftv5ss6B25XgiL",
  "key25": "2Hc2xYKeqmrFu5Mme7BB7EsgFk4FszvZm8X74caRxyciLU9LAe7PPkEeGQzuR1XcAssGqfNyZwonrTCHuXgkocY8",
  "key26": "AruXdEdUemsj31udVe7c95F42cYm7AfhpGdhT4izvFeYcJBYoHYy4n7LCGfmtEEyGyQ6KhCEJDRAoPo6YmAUj3T",
  "key27": "3a5PDatYo64y7RAfm5B9Dx5QcEmdk69fkXDL23XtFb3ogcHprxb29Din8u5gGwm4U3kjnkh5G7CbV43wsJGYs4yg",
  "key28": "2aMsJGe4aTifuACbKmnSzVqT1L4jhna8yJMEu67uyXnwxF2swnuX4wxEuGwBQX8tpowiJFFDAfKvqWk7FXViruRh",
  "key29": "ggJLFeDMiuP8z4AKSVuEY7oDCAwET161mXGooN8wZwdVmy6vhPQL1B7zAXXyfLvRA9zVEXrYBXK1d65DBWR7nyo",
  "key30": "4dZnHfByh5RK3aaCdwg65PCHjykw1JHi9jrWvqfbadRZifaKy35UiAZNjYhMqM3Z9vucLYbWi382fP2zb5qHmhEj",
  "key31": "4qBwe9hbxYTqTuopCpaQz8VEdkbYmERndN6cdibeVhjR91nGNjGAPkxpEzv97yJg9GVsDNUemFv3ZWMzbbYqxAcv",
  "key32": "5hXTePbXo1HFM7dAWJLFes5GerswWa5KDG4sAy3ZMzyaLd7nBNovUpHzEwN1rQ76W4FNoBHeUmThGaxotMP9bhvm",
  "key33": "3jZbdXPtxrN3Qk9YzbBxnYoe9qUWRxhpN3GhXZQis4LknMgoRxC97E3rDxfEE8tFfxWiksco9Hfe2HvtxX2betrb",
  "key34": "2X6HWe3V436TBYVKahsbvJBpPiRF7kowKDrkuKJaMse2bAJXXEp5HpdqzQUkpJtucq5Fkve1vgTXX7p8xPTat7Pr",
  "key35": "4L7Xy1E3V8bbHsdejtAb3UL3Em4KLcH7Xcy9zkWSfVUZByKEvErhF6eH23ZcyvV2Rt2QCDbTRnCzBCbtjKaCdRYT",
  "key36": "5qZzCArhEmrQ262Mp2rHNqg2RCsFaE2o4oUPkw6tbwQUoriHqqbNFVbXnJb5fxkV64gVuSebiP42vu2PfTnkbU8L",
  "key37": "1tfukPJQoqEFDBHg69Y9WTwgH1i9im2jHFt38FioEE7EJiytTMvMd3ZN8fPr1UWkDFeRy37xiZYEmMegqDUVryd",
  "key38": "2PYavMpUMboRaZFTYdYTCjbPiCqrZ6YdrMvZyZArDW68uDyN3zoZWAhEbov85xKsb3Y2tpSteJDSnBqu6MDUKVhM",
  "key39": "3oZ5wqA9VtCopkQemJWT18CuvRBYVFV2ZbcND4aa6rtoUgLfPyaLNqGZ1As4J6AJqZ73vCiT1CXk8RQG9hscEJhF",
  "key40": "3kGdTzbbPaFsE3fcsZFQibHDLFHwgQD9cFBQPFfARYQwwtcUPwZVDYS8pz7YUXoHG23g8gmnu4xSW1DBNyTRVCmQ"
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
