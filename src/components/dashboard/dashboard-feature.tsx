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
    "5aLii5YqAuxZbckYcRYqSncw4qTQGpGSSRD9xgoY35umJqJYZoKK895m34yQNzA4fdYURawsm12qyUka8nSWvsFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FHeKpirsv6MKCT1Ni7KkXNWLche3LAcAruidrPizoLceCb45X5fZcLYNSvo27kJLxwpuNgteWXbXcTGnuY8Bucu",
  "key1": "51HjU1UvKnJndhE8H48PuRYU5ZgETwtqnbCMJwcjTtMQ19Nx18uWzn71kXpTBpfmPwh18uzSFui4YEoKtPasSrmH",
  "key2": "54U5hbGvxco94zSfonWPrZKvnu1iGpNVrbefwRfvxf3fVYuyTDGgZKcp8bACLS6VDyvunrAd9wCd9dfHWcwUnfR4",
  "key3": "5prVFNvi2xp9Cn7yZHLhLDfPGv66J6UqTvDaPCmF92E8rEZ8KZCAT6anQngijUe4yCEuA9HUmEC8yDqc67yp4J4U",
  "key4": "3xJZmUB7XiEyr3QVy5yappymuuYphqp9GRUYziYvKMLAFew7MHZYLBRSh95wuyocKZ7QgCrSJc43Yw2qcEdTfv2R",
  "key5": "6e1pSqYiRmkBe8p97XP2AgYovHF4fyr169Lyvm5GeqHHkRHvxs2hzSz6JFjBCa4FyNb1na9uM1E5qFMv4yogztE",
  "key6": "g2wesWSfdzEbvuhi54C9Jpm3VGt32JP28J3TJ9B3kGNidr3vLrLBoewd4CEfa3rbycvjcEPdCy9UhVLkDHrNanQ",
  "key7": "4bhWMqYVfUhkbUoGtMcBtRvyxeCBfsSZsd8KnSD3cVGMLRLs6Y2ePDCpSnsK5JNcmkuP9hPFegPLnLH8b1JzkRyN",
  "key8": "4JHd3pcAXRTX1uQCrCw54FEVNN3QD4bczVJawdnyFwGJtHuNxF9hiz8PyhwZUvnuGA4rxpcvvueaAbUshpom27MP",
  "key9": "2XH5b3tzmS2pTkvxdhwPCechbEb6HAoLTFU6QRwimak9kXVTCc2bEGafgUNUBvqoHknTyXA2VP7NLLd3Z57fJSvn",
  "key10": "3RnjkWEjWMGwtsZJvDLGWC7oZXfNwJF6nS8zjXiG1dSTzAkZqZkkriaJAs5ZynmkTFbJn19f6aBA3hXuA8SH7Nxi",
  "key11": "4S8HA8yUjDSx2if258of6imWQn246QhxZaW4r4xqUhags9mzRF1obP6qepR7U4VNaN9Lsek42shhE8tfKvwa38HV",
  "key12": "2CidtwVzJ6mnweEym8Q5ei32QKrAMNBymxTtfRDw3zCuV6RkvpP5wi7sc47jjEzKAmYQ11JoTBysx4V9e7Sry2CR",
  "key13": "2QFeHaBrkaChKRmsPePSkxyEHs39H5jTu4HKCPLJUpjgBwaV4mCcyVmNr7ETJw8c4sVsePwPgsvBAS7iYh2VeZPz",
  "key14": "c9EeUkmpaWeCTnwFmosdvBojE9gmb92oEfBu3V5bBKEf2Xh9zs1qJTFbuHn9CcGxFP2EgWYweePsFSunXgo1DpS",
  "key15": "qDLfouveYGSRyt66yNuA8CNPLYbUejZVHdab2UzNmHMzLC6SzV9mDfRuKqYV93LfuyB4HErFUvJmEW3LckWBsJE",
  "key16": "TCCrrnjjs8gvq6bnVdzn5xUKps2duXH7GNtefbwVmBcNn51RFGrpjVbk9ysUvpoNnhgXJmYde3SN352nutzcXbw",
  "key17": "4B1sXrBWAyGQZhtUdmCCHYHeNptemY1WtDaTYDizjUNm9KEdLbtN7MQAQQvx4yH9uEJciWLbdJWuK38UPaavTVHX",
  "key18": "4S4E6Y7GmidH4Gae2jKh4soAYxxMdYq4N2hCtxX4gRTMJA6W7mhpcxecBbf8TBZBbmfp5CsbGiAvDFuPrcLRMgw5",
  "key19": "Lj55xJE8fkCJy5AWZ26umZbYtV8xAbcvhzZjYBtKuq2EeHTSWRVmmp1RfcRm8CW2E5LCibvGA35ymJeq5VZs5uR",
  "key20": "2PHn4XfpsLVdkMkeCDcUGAYnNPxMK598d5vqXdewbtx95mtaaDzfdDdH3bAKdCoyf9GcHKodKyGVGeEc8Ga44cFf",
  "key21": "MaN3iPAned3xfxUWJRVssMS3Vu2JmUskXdDR85S8UBwg4LwEn6vksGZrZQJ2PzyR65e2mEcnwTj6h4iRiba2yNa",
  "key22": "49M4cQ92xVnHfa4A44JPhP8iMeUBZL1wVsnq5raz3tDQ2xMZGRw4su2u1LK2nSDdnqNXhwCf8iHocg3vNoDXf27R",
  "key23": "36YqMVcAXeX9D2sFjvfB5wx5FgNYPTJv8y2Pdfx43DXpT4intjSJ9DQxJzf9vkQSyEiQSmEj8MQT8A4XwD1J2uzT",
  "key24": "5RKqT4ZpwSNvK2SddtFVuPnjNbctdhrMxS7sW3xCyU5xWc9Y5UuMZ6RrGMXGkxAuRvb13w9P21Bbzya2eHb5TzdT",
  "key25": "4gBa6zBmEWz4RsMrq7Psp9euLB4AWMoH18xUH4JiyG8vCu95stbLky53SYF2AxkKwDoCkb4WXeHRWD13Ui9mQQSM",
  "key26": "3Q64Emq7RfacF57vtuqYQs2z13Sj3RYJxckFXX4V9hPud5t4cdq5YiDiPd69222jNGAtGnxZdbfZNYX81x6jw4rs",
  "key27": "Mqu1j1U435MugUbXsr1JX1Mbx6pfWAPjcivfMGZgRJJW2GXwB5Y2amjrAhwp41JwJbscN3wbGEzs7XEodd6NHSL",
  "key28": "47aFyL99Y7X4ot6dvvhk5U2HmirmrgBxmMyPQC9g4LcMWcj6GB65XBpW3ZScJSLjtHfJAEc4vvA48ZtJPEGiuftN",
  "key29": "4MSQXJzyVDurtnnMfCjpiUSB6voemeR7dGr2pJheZq8VazjUpPHEUoXohY77R6bvJQNb2vdQyvruD8xRE1uHKjNu",
  "key30": "2oGU47XZhAtSasQHXKUDWDvPENsxEjHCHnRmbB6HMAMwmEZWxAUc18P6jjrE6w1b9g2wHctchp2Qxy9PDYjHtu8P",
  "key31": "4GKaA8QQ22pSAb47NjuDAxh9bAxyWPEz36y2YidscHqkfc8ZvpdeK5QU2SfuQiA3ft2nNUWWZRTX6exuRKQvN3jV",
  "key32": "5MtZ2jGvSa87KEu2iMkmHpe3ZyXi28AcfB2Hrj1pEGCbcwJYoVxTRXhrt9ZSnMtmcY7dMfKr5sKCrRCXQ3YgkeUX",
  "key33": "5YJqbEMfDMWKD9yDSiVnBPNGQcYH945TMpH3ccpnRLAijsdsjQLhrtRi1ttjxk8a1x99f8v9Y1xQCeittwtgo8qH",
  "key34": "34BjHHgr6pMhgivbU3LYjrxZbDDdnncYxHN3V43BRsA8qeKd3GWAU9b8Verz6ZjgjfcddV1i5PUKegaSopUuVNJY",
  "key35": "3Uq3AbJVHP6g6sWGdUat6jWfpJjBKX2WarkYRsHYTuCTw6XYH7VYW5N6E16MBxc6TtyVVrqBo7JHzqpu1DmeoCvY",
  "key36": "QL6n6cJXXDThXGU1t7o2ye5fqPbE79kq1BkPezn1VqBcnRh3J3DioQmpNPjPjAfkeoqmQjcuMKL98irX7UN2waq",
  "key37": "CnMARPyy7U7Ew63ZQoemJ7TbR4aqzwz2ZH24B7MwCiC6RuFPb8VfDzyMsaRfSeJmhzbHHopNKihSz52UewN6kGN",
  "key38": "DTBAGE8Vtu8GCGFSJbDqjpMm3oeyMpJTW3fnoLP96ur7cJcNvR8yHSyVf2tgftMqGWAqvCsa8Vx32k1Yo9gMeCu",
  "key39": "5R94kQFG68ThawfEB59v8W7uqbCBP441CWsyUSe6ZrC6REA8ftV8A8VN7pLCCuwnY48PfbTyKNi59hJE8zjkXbj",
  "key40": "2dYEjm9K3BeEupH4U3q8m3u2ysezrupXR9T6Kp1A3vqUFm2wjXeBcJBtr98MCFJKRg51nuZ4Q5asaGMBimyCxBoU",
  "key41": "3bwvY49j3TpgdezXK6WFMNAjN6Jp5wpRYW8psF9FdE6Kx8UqaBgVXdT81kM2nAnuYDtH2F2AtbVK91LSQ6dF73Dd",
  "key42": "3KMdGVc66u2GDg1Z8LYnoNZj4M1Sn9nP5RAQfXUa8oM9EupZApdJk5rFFPwdfj6huMafCL2DawnPLq943MQtn3rU",
  "key43": "5raRAm8Ga5J3v6gziV1UbE3TpaVVrdr8p2GyyQEGEuUfmzaM8xUpdnaMK2yo3rhoejmMB4y8BJDZ6Qut47G36r18",
  "key44": "uCyU2HYDXN1DcQmEmQ7WtRohQVUNUbf4MifHt76ddLD8dXb2znNEF4AyQ6eukbsBRVv6MynahKMu9YUzatgCVyP",
  "key45": "2hEEQU1iF8dVjLRUAxPkpiwRbPVkvKfoZENLciQxJSqaXLSiXsqYmpp6UBLuwzd3xtLJb4bpBz3daQUXqmQuxk1y"
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
