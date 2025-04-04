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
    "4aed5LwpX5hP3vRCBouyxUuAuAodvSCr7mSk5eS4Wn598K9E12sPSCug6xbjaHV2MiLQcY9wZZFN65SGXPJBUvNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKNjuYWQC7NPVbQwUSniFfZiJMHx3rTS9KKdHd8QXF7YVdk1M2psRj8nCoWc2RGkVmu4BtCfNFfvaCvHQn1inQo",
  "key1": "57uMcfat3EeA67fEfuc4avR9wueAHrsEac5nkrTfaNkUa6RvgUtC8WrzjEUZ8z1BHMLzv9zQAYzMye9ejNVpfxcV",
  "key2": "5HwHbvM1MGR61WbHgFxGQKVsZ5w7qSmXPzwy9oP4ePT7A3dFgrDvb4G7sWhoicebtVGBs1rDXsQMEjzAn3frkMvz",
  "key3": "2mUM5UHmRUYBfA3TC1ynfmoKa8TkAR8EWhBtxN7i6AdSi2zzob6MLZkpwXaTPdrAsjNo87iERHnH3pW4zJ6aCxrs",
  "key4": "3YnFeQY6A2DZ6NSZGyz5PFpJojjxAfEU3PeQr6gs3euPg13JS3XCiMSjCfRqRwjHLoY78JSKcBK9rpD4EMs8gyXS",
  "key5": "5cLJGdzaWGEHAtwZ1eXG83Dg3t3qeGEuQGG3fAjwUDTfDD7As9z74FvUzACh3qBunZRzqPokgyedaVMd1Ni6kubx",
  "key6": "4GYYAb53oFMBZfk7RVjW2xGeJaucEJY73qfn3EkEBG1wbu7MD3habTG9K2hKvjZRBPztcAUMHgyjbdKQBoPpZ3tH",
  "key7": "3A3q2Cz9aySdrznLh2PWd3QtLkKBBthMTDjbsmUA69qCJEtJtMYy7jzMP29JyyPaeFRUbTtYQzoMuTvm6pC1aEU2",
  "key8": "4rA1eBLYUehTJrktQygJtz6yWWW3hTTrompLoqYGMmmox4NiHfoCiqmVoL9L59dCRjF6T8WzDtDcRsoRP9qktkhX",
  "key9": "5RnvKMUQF5Bnj7YQdwepRmy7hu2rRYdqVMrB458KsGZeN6i8eWjZxziPecMEis2HmPAXgaw7eMSb3e6x1gvafcga",
  "key10": "5ADwUkoSBiU1yYJDFEcs8BqC1AptfSoURdThKfUbhvnrdHDM7szQYuDcAiSHLLqsPSNeQnV3brbFYuKoTZCSt6U8",
  "key11": "3sXqHV1xJgPJRpbuGnE3pFfyTEWapbgabFV4hn4znQiSs5rcBjj1C9idrE6qiBRLpny7EbHMEMUWwzqCDmntt1fZ",
  "key12": "55Ekr8Gy6sQQeezMLmr7SLcAZcc8JdkFsLymkjxGcDViLoVorJTrvFpo5D71BDn9BLbDdXhE9Fex77dwfLAtMCfY",
  "key13": "5jBFANaybNFrWitKhbMCT2SsbtrDViaqgMMJffGputpxpfsNW5tsvPFeM2Uc74nJbJAYjTX2fVh1QgEVmg5bHyZG",
  "key14": "4nCKcf8fKu2ucdrwQpoFfkzoC4GGLLK2AVPUtDpjd65T1dEfZs4fSy6YPAY1JaozPecNYSghubwVwdFJF9uuE5g9",
  "key15": "4DHsfw97SBVZvo1pabe4uzfph7y6RpeeFYudpz2JrW1raSzMKgPkro35J2yL9devdJwoY61BUXYSPTe8tadBrRNv",
  "key16": "qUreVAYCwdxpeA464s8wCWeX83wXQpbkGSmdgWnRiHqBVmBZ2Pzmh5DenGCJrnxALiv6jBjzKMQp6ciqa4i7vW1",
  "key17": "3nGNr2BGjE3UuMXFtdG1nznUTwmBqVoSqpMSSksQRChBhryrx4rXTeUHxLR7oeKR7BMEdMSkDFLihtrkwyD1Yg9j",
  "key18": "3cqZvLV2SpNx51Y92LxABJnHMAQm53GJJCtX5Wsqce5ZecMNDvd3nVWqPmsKwLUKY2oCXKPNLbYDohTAkB5ZifzW",
  "key19": "24s3pChGqFcm7k6nMBVvFc2XNaCfYLnDMkSRgwfwUHJkXomCzEDtcchgJ5BBGwd7mqXAQJtVMVBrGF7CKx4KYLMs",
  "key20": "3ZeUN4VGAVDSH1Ci3DNHsWrLej9PmuNP3gCupUJE6ShVQb9oPgiC3fNAp9UbBmzjnxeSK6xv2oMZR88hzy3H5mfT",
  "key21": "3tDFT2Kyi2Vp2dAuPWSBkU9djsLxDXCHazPVByAhyF99pRfFT64u1sn9mNrqBuTFrpRPMifpKPSBE1BQzdkfqd6N",
  "key22": "2caP4AA6MnwdtgJ6HpR15JMcne5JXCSv6N1Av39BCrhhfcKpfMjzi6UxcMVEg5k3hjpEciKfCQsuwZXt1HqbmyQA",
  "key23": "2NBmhpna1m2yEo4SoWUZ8o1BScJkL59mvz1MGmaC8CCvEykQ7ia7ugximuPHgeybkHCwUhMUmmUvTFQkvb28BgtV",
  "key24": "45BJPaecmSnZ7BZqRhPHc3VhjohQUyc332D2vAEiE6UKToWaDN5iuDNtFhZZ39tEfKt4R5anKNQG7sZ1owUooG41",
  "key25": "CerXJxAT4ByoGtEd5hhygB438L7zTVoCJTvTtCCeAnuWaYs25k5AaroGxY5CFKcpGCU8xZirN3ZjcKzhf35mhnP",
  "key26": "5mNN5HyiXTSGP3UZ45WvZJpdtzjvzZjtAQsYX2PvNbqhsqCavaDTBJTxjgZfNusiW3iRPctEKo35YUK9UbipiM66",
  "key27": "5mRTT555HoeQaPru9qiapENjBm3Y63JqZqk6KumYmgB1ZMfJJSUnwce85UfL9zjtFKCWABvnRWaHXzn2hGb8cVPC",
  "key28": "FY5DvDmrsE7rPUptYvPCMufQ2mmaiKd65mKn85jz1LapFwPAf5nYzXQf66jjeoJyRY2UsWjrBNCW1Yd7LDEZaoe",
  "key29": "42KKwSjumjhjTtfjDW7Hoqsgwt4EpTysXkrbrAGgBC43q8WasNdeSTmicSqGRSCQpT2Ztod8atSF6jK4nWrq3tTK",
  "key30": "3tj8YcQsFEr9kyxYJ7KWB8MtDR6BwobYA26sQr3zBQpczEhSR5nGHi8hecoF5hUcLnQGmVm4KAfVnv4VqSw45tez",
  "key31": "4NgLcXNxMg7Bh8Gbt2VhKuT2edyt6PRDQ4pqXRpM53Zk91oBBrwyaBpCJZcvPQy3tKApN5eXoT5xzSj2D7gqg8jA",
  "key32": "28Pf4iJ3KQKbBn8Nf77H3JVU9rKiKSMdGgRgcZk2XpiQvAqKfigFxFVQJ1MKpCCUBHMG3kCpf8fasuYXQDLwNN2z",
  "key33": "2cLDVTJbiPcmkqJi6sfRDj4RvUdN3ZrJJLJkVjXwE7J6JCY2dA751FaiECzqQsb6eMCwiFAnQb7bF1YfYWgKCszX",
  "key34": "3otiqf4shAJYiUBSELB6z8FsMJGzNfAQSMeBvMnqF9N9F9jRnQJ1zpPYuqivcFkzzLTy191ZgUkZdaZU2HccrHqy",
  "key35": "4ohJWDh3JsACa92mxfLRTNbko6nGFaYPKeZPg8QSbzEmz4yAAVCRQBbAV8yQEzgkoWBFKkGW2wEGrUf5WjqGuLUT",
  "key36": "5JWHdZxvsXYAK2LneiPea58E2y9uYLJmA5m4ULXAT59s6CLqm66SU1o6633CwSgakYJHjkrxLXutNT8LMH9dp3ft",
  "key37": "3hnAN5bDtkFrrfLwkaAkcc4dB4WfwgXZia5eojcCVqqjBTZrGCNLkPKrMtF9t3LAhTKwoKSKJz3z6HSfnFrZ6tT5",
  "key38": "5E1gCV8ieVheWSNzpNpmxM4bd5qUVApD6XWJGY2gQhvb5XPXycSu8WZZuRJLiWrNMw6N2kErsFxKXDEjWxCJhsNK",
  "key39": "26YKTMYunxgGzm6qdxoiHcz5zrMJnRTfiuCqt5QoLxZHPz7RDiWKZkU5ToSnLRdXwvHrF6Cvue8kGEzucebbnxBJ",
  "key40": "2axZrDWCY5h26a8sWTq9PCnUA8PJbhCxqTRL6sX5DTkQhYLU5x2so2BnkCfm8j8Svx9TpEvN7tYGXotWchFev45Z",
  "key41": "2PWkbwtnYgARH5CQeCpgRZovRc4KQtf7L4FpotwYhBdXX3yWViywcsWKpoH2S6jtHSMhKdrJwqKY5REhQFz737tu",
  "key42": "3nRUkJsz2LrH6AUf95USizHxBBMr5PNkxBprEfG7h2PcjvDuAszphdLUqPSYsM6yyKUHpnEsG79CnThEp7h7wfJV",
  "key43": "4rWXtDuutM9LZX1wn1gwXMV38oE2JC5AJBMdv3iWeDoUAx1yUZ1oXkXasP2bFQdftpnm8b8MfHwwDboaNZbD8YVS"
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
