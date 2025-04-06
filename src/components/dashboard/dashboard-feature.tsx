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
    "4S6y9ZWHqTLQMcjopgwcRvigHdUMgEHuPLcG8hnjTtkBqNRTKsBeWnfoyVMrCuNhKJMXUw7M4VaySTJRjPUN6aLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ATyd3keME6nycbkQc6Stnt4V61nQVdoUhGP48bv3GBKtmbxPrVM1h7SUjW3HGkW5GwxbLy98GN8WJ7rRKBuSpM",
  "key1": "3UU3Azv2wmseDVgXPVsS5Bmit7MgqsNCf4f4yvfPQeshFfdbuuw9tuNUp7gwi6xLPFTVekRz3RkqF5V7SczDgkmk",
  "key2": "47yKp8AhRMEz6NVbG4yEVJK3ZyFtTXELRtNzBVB4kiPkR3ACMmKKxawcNeBTnpyx2bQwiFFeQRk23CzV3m37DQY8",
  "key3": "5vPLWf7T6bfiZUTdmzuYnX7PnYwPvSGcRtiZyAceZrxDBL3n2rN3NuCqs6VYFK6wbBw3ePRtswgnzxMPSKDN52AG",
  "key4": "3Ki4yJG4RSbxv4VbdU4To7BxfiwJPSB96zmyhcjMY6Am6pSorGpghf3JBnKBwk3hDLnyim26Hdet2br9N7e3PKai",
  "key5": "3FKTL5h8ndaehPUDvBEqBwuXgZe5kxJpXzD4DtuPSDiWiFesHNJe4SkmrbRZM6EzmT24SVfEUXoDj4GFr48cZJv",
  "key6": "5MqAGNHTAUJu7bvmvE6Rc9qnn1aHA3mHhU3MbLKXqj4tGSdrpRpTXAjL5mVjMXBzg8HQZnaGxfnmGEmypywskXo9",
  "key7": "iadunRMqHbna9Qux3CyhnVM7qVhNEAkAWPmPnHpVreKoadf9AME35SPH5CjWAx8xZsvmTPe9J8HQTsUHhdbtpJd",
  "key8": "rbjFnQKXLcbhRJcrXxDP5xmiEP6xUDjvJDoJuhLGDNi7dvTQimFa5i77tFhUdAEJrRYg3628tyS7BCBeEekzRpk",
  "key9": "PsZj7hxomhfGBot8mUZ8HTCD8AommHT8WxJA5ff92zDmsWhh9U1akiZz6yKyo2ntCBwM36pzMi5hwYjnbFgCL8C",
  "key10": "ngk7DGbJaNqDcMBZjhG1qiRP2kWChCX6iFzVU4WDAGc8PpnieNDtZaJCtkauqLDY7yVQWme5jM7hisuo8MLEGb1",
  "key11": "37fXY33DC89oux1iPuEQbsHfHUzdVcPSPAZfVrXd9hGqLojTRhwDvzkiMhVd9HbSpD3WnGTRS3Qvk7R79cjdxSZK",
  "key12": "48uw21HYUkXzy8y4Rrktxq67mHWM5hsBaRQcY5aDGdgHEGT2paEfwavTjT3dst7xAMp1G4YLPdAUWAbGs3HxC7fZ",
  "key13": "5JxZZ6n2CmtX72HL1LZ4cdDuw8fweriaCNxsEkgNEwr6MnEFr36JAPXpQRETLmAFdwEtE7CyFaoZuCD74jQv4h9T",
  "key14": "2x9kMgExAXrZDZ3zWkfiWbeEaWbd1oTzUMphHTKixHxcsHtgKkDd4NAoqu6Xss9oswgNGbxCbUQsgY9ZcYQixbRa",
  "key15": "42cvyfWaDt3zrTjDY399n5AijzLvAi6EV2L9fdsF1qh5eJ249oAM3Q7aKKsJViqETNugFg7ajbi2tfG1dTsB8ehf",
  "key16": "55PJNFx7zZjv1GcdqoWCRntrWk7x8FjwxEgNLsV9ofAbwXgTsugETvu3CcVkJEV6BCZ8zxHMu9YfYhCXPfvrNzaq",
  "key17": "56s7hbJrzzhxAMCmqD2VEf5uPjWe6k9R46NtJdCgrYuS1br9f4cftBnbWG52yxeCHH8wrCDGzy6XzAGUgzsZKkZt",
  "key18": "2qH8ugjB6CdCicA15kCHLZ3i2CnibBcDuCrzYf1pLNyhkgbsJyMUDE1Jbiw1YKsv67WMWWCwbAK9u2Rui3rrhuQr",
  "key19": "57JAiR6CSfB3aQJ1xnu1LWjPqmMhJRpJ8pFNA2wLCFUybgvEgsjkuiPVUnPHL5i1587FPDFonkZxet4DzrJEminn",
  "key20": "RxisNd95C9FgPcRHnG73Nr3twdsNQgGaar6EGGwJUm9jnDKMQzkLFjZZtjXXBMwqh7eZDogHodR2crRab7mivZN",
  "key21": "2v5ypeosRd7bYqWFsxL1jNHYNmjXRPZAYpUipwWbBK4bakmBEkDuvkkfUtHWyMDNQoMjex56TkqJ6e9dnRAPABbQ",
  "key22": "5j2yucH9eRehGuDoWQSoXp7J9S281ZY5VwxwAm9G1upyHmqtU2S4yo3LsnCA7tnNS37m2BmaYMkZCMzWAXfJpt1Y",
  "key23": "wa2yyHEULyytGKiSiRxKrJMPkPx7zGSAs6mcK9tfKYHKKZqDPWMokbULw2o6Yqhitiy8m4vMsFXt9Sa3AciH7Yb",
  "key24": "3PR4UeVhnULbohTBtCEiy2LGscF6M5i4dFwxXWqAescinFdmaWVTq2XqV5JxxShkskF229UzbZqGUD6p7T19S5zm",
  "key25": "2NHUPFoerH4SttEM9mZd8qTzf5LcstGGe55yj1XF3cCLRTiCxY5RWC8dLnKftvsvjwbMhUXBqZUwrkFamikqgWhf",
  "key26": "64XH6eF2j6ysdJRTUoAX7gJATTmtGxVgaCDT8aVrtCmcXrgSSDmBAYZLWJbyZgiPipareThDaWTiuw1HqapMZWCc",
  "key27": "4sD1873m4HUFLDWGbURcJbTkKgusFKTLwWUGXJdFm1YH4279gYyhchfP6ZufWfW1wPwW2pWjaDHBfyD46nxUPMnK",
  "key28": "3BzEzC9Qznw3EMEcJ9qYdATR2m3mmjREWWrLPaZndiw4XFrHpQToszYzQ9eF9F21k7mpKxYnVEDfcpZcFduGDsrS",
  "key29": "49BXDhbL35K396LNxt38v6rAGcrttvRE9VrGfwZFmJxBJoyahqUtVmJoVXmiiaLjd5tsb4ziAoX22Pm5QCkPjhEa",
  "key30": "2WgnNK1X6oQtb8cQAhounTz4oePgy8PeBA1QqEU1XBrUL3uVQmM9m3wiz6ZkNKH47WXVwGkS5apsSh75RfN2WwMe",
  "key31": "5Rm9cypn4tJxbZqx51uvxHPKdiHASrmqqmLDGN5wY9WEuCyt9AjcQudvfntoAMeA2XE3XcCAp3BGetVKTZEzTEE8",
  "key32": "5KNBPp5xQH1fveBfVCjJ5ZhhcEtu3Z8FUH8pToqeEq2eBzgsiJzDNYe4CxydQyc2utKGsDQpFHghYiELo3zELpG6",
  "key33": "tcAeeFiFPSEjHHEGTfafc2hQUkCPNHgsqK9gG6yKxKP2kv5H393D64FyS9BRVRevmbSseUhuRibmN5JdarZrvaf",
  "key34": "2DnSxhcd8iVQKrT5bzhsHNiFm3XQFYVq4CQQ1DSnPH9P8os1DrYxH4wM2bk3kjc3QYFXbPKRPcZDZ8V1XoEZLLKK",
  "key35": "65ns76smve7mAuray1zv4Wwdm7oFqP5fVqn6RLpQxKbB5Qp2GSPcTRY3pkSqscZxBX1J6oVnFvPTmXMfdgx6S6f7",
  "key36": "3cNTJAMbmXCg71bY9d3PjKZLkxaBa5hALExLyTss8MFTX6Yn4r65QVuFSGCWjPxnbjuX5ASkst69e6GHiGv43AFp",
  "key37": "3UbdZyBRRgC9UXwB1NfzsRzhKRgzdSfuEEoEN7CtrZoiD7pu5h1DeZbxTb4HUSnkXYZCJ3BJoGEfSgFJYybHCwnL",
  "key38": "r6HWtHf5x66o884VmZDFC58SgcLY7GfCKyhUFT8g6mCEixV3Z58JJavbjSwxaf7qnfuVYf1umvWmbJVLxLEAJVf",
  "key39": "iPxMXzGyN79bpXVhPW3hak4Y46w2J3viSCVUZH9jXBzAFuP4YB3Rxqca7NLRykgC8oZoR5GVM3yKAk6KLgzCsBa",
  "key40": "5wkyt6HnAMZ8Jy7ZG78YfziWjb1bKAAe8puJbVpBuVaBSLjGg7e4861yduh1eh4YUFCZ7aAKUfFa1mZkGcJKhjKs",
  "key41": "UHeBMp8nXmaZ151sBTWkQj8Y8xjyTy6dsdR4bWrkSaqSavhcbKbGTFp2R2DND8R6u84pxC5Vtr3H8PFVRwou5WB",
  "key42": "2k7opnYdL8cWGBY7bSo8gJEB62cU6zSS4qfkYvErSZRViY4mQdLnGoKJe1VZKW87zJtGC5TTxNR2APP7bYskgeQa",
  "key43": "3RQDCqpthhm6McCg8SiKyigikcfSCZwbztctnman7MomT2oCgDCqqMziiRqYuWJiqELokyKqSsc6Zb42Wb14udft",
  "key44": "3cHLSFQcFKWdHhcpafV4cvGEGg49CLN7m6NWz1QyzeNwggoJuUTtwdTAmJTa6T19SM3TwTrEHqv5kQMohgr5BRga"
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
