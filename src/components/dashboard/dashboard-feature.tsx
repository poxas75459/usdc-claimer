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
    "R7XUhfND8v9dKnq6r5MMKMm4JKbXn79HnK1aKffkSU6yYXaQcYD34J7G2wzK1JYQXsGTyG2BeoXzVYUtg854xto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8P1nJoNS8xQEdfBJqo9kPNDegRnGQ53oqADZVtey7Ldc9NvT44GrqtwQk9GuqLRswEsfmBDqGHc42kFeAaRJrk",
  "key1": "3oMQuppxnt1PbgHhZ3cwm43L1rY6cW62kmsZVPxgAAFCccvNjSoCx4a5sCBK3n9ukeL3ZTX3ckk3R81bfDvEXEEq",
  "key2": "3uuScHBJurUx3Gb4pMgzn39D5Npt3Gz1Awhzmz8smAXMhTUFbDJ3sgTvtBEyXYVh2Fy4kxHypGFoZN5y1QKb6b3w",
  "key3": "3QX8ZuQ1oNNX5eUnuFG6kQ4X2sn5K6eitzyQG3Ft5hNektNutp8QECeewMjm5r3xE2d6u1JYdzfM2REqdTsEhE7V",
  "key4": "8WmQFs4S7qSjj8f2HsoTkX2ZeWZj2gAj3dwwNXbA97YZGgqKjuXmW3UUyjgYFpCzCbDLchU933ZBBLUXAmtukLe",
  "key5": "yhUPcZ6DNk1YXH4QHgzC3QS4KnJ7C3RKcQmudhEN4AaLHNPmANjjiKWbqq5PW1e2XG8bLq6jH1DqUAmfTsLJUzP",
  "key6": "5GkEXsCJhMQYXf1uvQM5VVYWoffLQxXRpG91CXRUWKRKsvhEpg4Wd6t2e3M7NxvxFn5T4bRhqzN5TVEaosqYo7aM",
  "key7": "3PkhZBx9JzoDonskWUJTYCxPn6gS2cFgyWC2Ch9ZoB9Ugy2dTqagu6NoWKVvRT4PGf7uf6ieFitevYvrqC5uVbN8",
  "key8": "45hb6MbXAPkaVvJQw88YCjKiZiQK3jgXA1cnR9MVdtFadowv6WLcnLZj6Rqk5X7wcLxRCJiiPNkSLWPps7jaYiks",
  "key9": "5setGWY2MBe7kN6eW7M9LcqENDm7znUkPCqSDScfKrrk98Zwc47V5427UwrhqZjWfQsHLP7Kg7cMAfuTtvGGkTxV",
  "key10": "4qaSuwGtaXQTr5isYprEfaTCE3q9fXLULf2VsosaJJ8xy9HLk14kNwyK6ha9k48hmegHrm56GyhmFTApNDCHdqhf",
  "key11": "5WhFB5PARY18cAwbtDAyiK5E8hbjAfX3AbzLG2Dhau37uRGEurch5eSLYa7NiRNz1pTihMtNj71Vjvn1AbRzg9h9",
  "key12": "5ocV3q1sS6FaZwiXKE9Sbdp8daXxg9Bf3sHEJn8LFFowWxAaa7xpCPbvFbqumE38XYgRRATqTh4C5SqGSEfM4EA8",
  "key13": "22FifDQWoc8vhsaaGTifc3xRFNSpcfx2QX2JzA4iZB6MVrtRmECqg6a6B4KxynJFfwVqYRxn4Vihcm3D7c6CJB1B",
  "key14": "5ZVYQnfpr4MspEyDehBHbGWjUrLWCTVx7Atwp8zd9qndXh2u8KYGmtB8Sy6mq7mv34QUJP4et5n19oz6A8xkKdEC",
  "key15": "NqZAZgLNjcXKUPUtDbMH89YDMRJphoHfkAP9REtNyfS5meHYTBYdJ4ro4j3fLjSN6ZqU9UmV83HKTvPRck88UUS",
  "key16": "5a3FoSTPBSbrW8Qnk7BVM3jHqEtZDTWj66bSJg3FTpWhxqkzRMLAU8VPUjNPX4VDf6JrKT3RncLoCCPj1Y9fpRwE",
  "key17": "2hGyKeq2KJ4wLESMWYtRD7PM9p1kDakZeLjcXPHrmEyAE1RigYvRbHPMui1Zr3g5AkPeTeELzHzLJotczMfRPig",
  "key18": "xe6qPb7eGaXhJCNqTmkdYDNx6Cgh8NcyuY2jmhwPDpV2ZW82GtpeYXhzngFtEazNJdUopGRoPjUbBZTQFtZoxBf",
  "key19": "5oyQm8PUvzjuoUEBCAF964cUUpNwajSb5tzvecgXKgkbYctgEmb2f8td3GzkuBgEGPpAM5ioNAnCbTmzfpgV71A",
  "key20": "5ovJUvksHrGvHRZz5dZ7gELN9nvVQEVBXJL3HsviKa5pLTGYcgj9J2pDzpfjyDLbn8Va2LbT1uiL9a2XUnKKx2cu",
  "key21": "u6yKwvPi8hwsqRyQAsPy9Tj78zywvAXiGvKWTPNSyauUoZHnLGhkce9gVw2aA7VF4rePPCvB1sK3u5Wf7UhkDRz",
  "key22": "3gxquNsxvPzxVniKZi5mjqeJB3nAnUNKUwE3gxGViz57z59JtN2V3XqKgrGYfVCUhE29rtrcgLJqWWBWLbUx1xXN",
  "key23": "5E4bms8dFEKJ8MAzrryja9moNWfFESdpQpnh4mCqNVSWrUewT6zXAW8ercPvLM4df1A6U2WxNEhP5roBNrSWLJt6",
  "key24": "2aS2KtsDLuErT6rw6firJCjGfUAZWXjr68tCzaowrPruqRHCbDXrjrAoYXCPBG3AaPMyMWg4PsiB8zTfVXYTVV4q",
  "key25": "3gkURZ7gvyYi1RpA1CxnLYif8Govp7LiCf454sFRmVvmdkfQdKAV343tZedAch1HqAqsLa8gp21cejn5AHa6ZMBV",
  "key26": "5cUzf94rYNcscK1FM8uphEtTvR1JsNq3oB4sdemWoo3KEggBb1WwysAcoee2Ve9sUo3r4bKeSWP1aGCMy2xSwBMv",
  "key27": "3gXvB236DsS9d1qXJapkxXbXqTvBdi542nnhV5LsK5X85zjqP4KxDMvRpYEenoLsjZ5pA7EPrY47xREJRHzZWxwh",
  "key28": "HLCrHm6LZptr1AWEqCUF2yzAv8cq9qdxitwMRLUW2NjGtfHPK3SBbxacqBqhBpycJ7ciSL672oeMuCfgkRDQVAY",
  "key29": "3VWfJaeBoez8Rry1HA3Sk45bE1SGbUZYRQRVa3nF1cnn5PcMRCYmqhg5RjZ3fuNRGBy8oJFXEKzBK3wa1qPz4Enk",
  "key30": "EjCYwtmdA75paTaZVkF6DW1eGSkTRgtpzanSWQYuD5JmabX3mXwNBMKuQSshchLN8uN3B4gr6GU3y1X8zHeNZse",
  "key31": "w421vMXeEKnT6ogwmy16z5Skdy5943WTHjGj25p3p4Nt6dpiuDZ2psf1EmFDKcJqteCE1sUL3arrjShynd8eRYw",
  "key32": "Kyb7xi4xx96S6PnQgEZdtSPdAbo94mJPUniw1NgTHfsAtecVXNVBgyn3BjtPr7Pc43WNQLRUmoY6R7DKLv9agae",
  "key33": "5JhRr4MC1HESc95sJuDnGo3rDf3Xj6SPmoFWvC6Fvfdc4qyjEFcK3maRhexvscSCW5GefiZyWFrZRM8LzWNvmkfi",
  "key34": "DBoEUx3adJGqsg6oXtHhcaiRx5XxGYW7M6qBv8XJjf1UYES5x1KE5kjQPUAeHU7tnbmdxaZ1Bi3rV2WPMKvuGVa",
  "key35": "2zWXmHduJRMbq2zKVQhN3pExR3USc6jwczhQerXUpwFMgfy4U1t6z5eRH61WPLqgNn3DLN8smsqcqqu7s32RYDnC",
  "key36": "2JSvMdzXdhzWYwuELkngND4HnithSkYDsUgNfH7JigdmobLSGCL24kRzg6KNE6zeJmQ5urHhfSYmRcax2Kh3wDV3",
  "key37": "3f88RVgrGHmaVA1m8D3ssJZAa4WqC58DEMPjHHDviCKV9c4JWDBnXwPKocGLPyEUnoi1S584cXFknqcrkumquxmf",
  "key38": "m7XGkCQKxgxvbyL5xCrHjmXUc7afpYEx7CnjZbnMpBThcpb7dwaufHRzdAP7TTvNWH8RMZrLGa3NYTatsHFPdCK",
  "key39": "2b1AkTtvvkMzB8gGx61QmPHACfn5ZkBuTpAeyKi3AQbLzjxkYZzmAGAvwgq8eCnTHctd7TSCEE7F8MJtrp738dyB",
  "key40": "4pRmdfuiwEDqzRiREMueoS8mrqRtGTJhupWMLuJk7SCMjn6qC4kAnjV2Yo6EUsMNm61EFe6VEczu7BeU2XbzoSJy",
  "key41": "4o6FRo5YAz4azGnEP3Am3R2rFLhg5c8rtwRwtQzdGMizrdkAkgb5tybBThQx7zdFSxCdkBcx5rsggTpruKddwgCr",
  "key42": "54PPMYo6jpiEKPSbm67iAhipR6UUnaxbUABDDN2yQtQ6LTESVXPucBiP5Fp14mG1Di8pVb3WdAJsiAAbExu3nngF",
  "key43": "4fgEL47rimJaxUkrAuhGax1o9DcFcRuSNCzvMgCin2TfuPyvqgn8CpWXEC1H79Zns6GhuZSG78adyARRpgAWR39a",
  "key44": "4iLQsXWKXPMoUvfdxjFSkCHkfZCvExxZ6eM2c62UUtiPDLqR5cTmVzGvLXP4yp7ZqXDHM9RU57smm8hGgoAGYjz1",
  "key45": "63rwoaMLEr8fPGz3JzRSGgRTE4YGdC9NJqR5Jpx4ryxmdgdjdF33hSRXGZjRnrUWh7wPE8SWYj9icrmseiXWJzy3"
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
