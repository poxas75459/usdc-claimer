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
    "3rhM8NRbEJgYYHrE3rBrAQU24xDN82v8rNkibnwKCzBDuPTCzmCJ7hGVCFNVbmT49EaHckPCDaNBwCVnBN2MN4kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RVwqW4njmSha3z2nxRbd1AqUWANpjGa7aD357ED3EyLFxcGSxRzzK8M7r1eCRgsBK5xcehNzNRwJ7oSrVXbuio7",
  "key1": "3mmJ26eLAu9zhChTGWh8YfDLnsPQxT2ngbZMpC6ESJukiURNR3wFBNBePGs46D6yXoyZGLA75tqdds7qKyuWknCn",
  "key2": "5CvXA6ZVdza6FisohCR6WC15KwC5AfrZvjHWrGvbx1mbgLRCn8Z26CFghDbY9ZnB9aNE8P2VYkzZDXsYvLMRPp7y",
  "key3": "4NitTHBWJXTarGE2Xt6LfRPvmZ6aqyoCv8RA88grdEHHnmFdXf4m9iv5zmxoYnVvJEVHsabPWtHRqUisW56SL9PN",
  "key4": "5vsHYBa65CsQyuPLYFvXuae7dT99SULxmFeC1A5SGn8Sipr312wFPxEEfUmxVmvNXXFWsPXmKynRTZBfMJeVnS3x",
  "key5": "4CWP4sTUVGstwqiHaXqicmTJpTN4iZ7MTeHyEPJkZqYPa3MggLRr95aZySADtYxDTC1e454DHndRLnRWoAjSUhf1",
  "key6": "4dTTFijyEsAHM3ipHUVroYzfzbnPbmkFDdMpyEZFQsGcCP8hR4gc8RrDAMPoRPbNu3ZxNZix7tgTciVY7CPtmeg1",
  "key7": "3uYFFbkGo3QfHYXUYUPgfwwEfc5cHw3qfXJ2s9DchUG4EJThPmKxvjHPhSLZm425hGvLFoT8jb8pkG2F1USVq4ga",
  "key8": "BJry66zA3t7SwYK1tomCbh4g8EjdxdftyYs9dhymMGiVxbpvxQ4Jp5jSMnRnLgioiN2nb68zVLzfGNPUURL4RNk",
  "key9": "cDiHaLWBQS62TP4nqafyytZHcXjAuaAmAAxANMnDnPThozHnTFH41B4BNRiUP8jznh6hw7duBgQiAZRrtW9zRso",
  "key10": "LtQxKp2qzfWTmX8yswDnf2vp3LXZr5TobSYHZL8pFm5kBbqk7hetGPfgjHJddYwNpQJ7fKNXZjWeWJAT8HeFaGP",
  "key11": "2hgfgKTuktENroo71PeZEQrnRtVttGjjzyD43YzRgJBYaCAQfvSLE22q1uCsQWYDk6LmuWfaKKPSFDjFKRGrtkrW",
  "key12": "KsCu1SUgjKjuUn1jxGATSvPMeykcXWJWHW8W5VYk1SevivgjK9c6yQVyQPXEGiuH5J5pmCADr5Cz37mDNdwzvPN",
  "key13": "5SsWqyYv7amqsUWPFjDgy3SK5WEEwdLSoxZDQYk5TxHCCzkSpevgBGQceVU7mqPYbt9Q7eS5nQLrs3zJodAFcCfE",
  "key14": "5CjyE91CtfKHNRp9nSEkfRG932dVvEBtAQga7CXb1WGMVdyrPCeh3zyLHkrxSP7FwtR2saLaeVkji1nDCRb83JbL",
  "key15": "3xRrGC7JspfjocsvSaFG8Ndbr6NPqZM5cVT2B7EGTtQcgGs1Rjxnbq9aPXNQGtC27ByzJmtS2QVNC9ZLRg6b591a",
  "key16": "4LJFf3keJW8gGZDncZQn3GoMtHsyS2vCcethv59J7gNVojkJo5UwLbL2VBgh4nSxUZsrWeRUdVMwm8EqCnU5WyK2",
  "key17": "fKkXHuhAtzK357SsngooK1Wtin99gYixbmqJseunyqrPrRUDDee9UaorpLtscQgDDg4tGLtEdWVtAiGBuUNnyz2",
  "key18": "2g6i6qTfmju9h7CH1kVPNxz6dUUvoaW31PeGq2bJGWSB6nHSHbVL5in6Unz5qndcBPx7vcHPTkNWThjjiJ857UYf",
  "key19": "5HmEdxg699t3L8BGMGRUw6HekKAquV5qiLHupRoiR9YDSLahzzqGMdwaWEshsYTh9Gw5r7J4rMwZW8HJPbc2gUQT",
  "key20": "i3MsXxiwVrbKqtgSqZH423WcBCWcSfVayYNaMZStpcjNUp5VMZUKjRVmjRxsKqpKuttDRPDj87T9vj3jUaQWSpP",
  "key21": "4SQbS96HsAqHvSrrAcv2hxyjs3Jccs9MM1bKBVUwf5eDp1J6u4yfcg39QEYUrG8UV18EwnVa34axmcBvdqBMEC3j",
  "key22": "6JvBmrYNQ6xb9QhNWkh7eSdbYdobW5nHWHdqbo8Uj3dvbj4mgx11TZC3TNDsYfDPzgmvcDkvGyuW1T16CF1W3jh",
  "key23": "3HHBXxF5VsLtMcPNr6sE7hjjJPAg4c5oH7qfr6eXzjgYmiARsmBXHspZkwNjqDBAQqaaXpTuZV5aDE7pGjVH16BX",
  "key24": "4XM8RLwhD9rkqKgLRs3JtVt6bEsxWBxzUd7mtDAZTU6rP8R3iAA8kpRXE9HJb1x3mgJbEUmx6nVo5sco1AFrMjbw",
  "key25": "58fALHf4kcCMttYRoyXqgQNWRYycBfLGaTnGuHT26TmiY3BJ7XnFZPyTf5BjDhDbkH4uZ7A5Pa7Dyc9EF81W39Qg",
  "key26": "2QqzffAfFCuyE547yUUUYUrkkxaaFMBqTK8MkQ9fP8GS2ncieLuNT5M9dTg7CKUHNrpr6w2xWxKndVZBifBfX9ZJ",
  "key27": "ycTiBLRrcoBm9JPsDXdnPoKTEdxQ7YGyq3HVdd7UL863ku66cSfvmqEije29JUCm7ghJhYw67WMwonbgcWsAP5Z",
  "key28": "2AxrGpsDHbgA9GjT51ZnXpHGtKn15meDGWDPrrTetXf76nX9jsG3BuaD2FvSPRR9KsJZMub7C8niAwT2rpBG9yNY",
  "key29": "teWe7kwefAxWxsnAw7Y8qwndi5yktJZV2PwcZq7NgrrXTihui2iwJobEfjcWaCmy3QWN7xJTL4rAnRN41EzD1fQ",
  "key30": "E29LE2DJ9bHEHVHvWMvzdFXdJsR889QbYdDWCPWhbLmmtWWAu94Q248A5njbcaeEojTrv6nQttcdYwDGqg9AGND",
  "key31": "2iQQyBW8hRzHndoE77wcn5t9L94EVpCXQRhAQRnX8jENLETYHSaTXJLMABuwpK6bgE7MQiqjnLPbU9wWT2qZFGQH",
  "key32": "447n6gVj7vGW8sEpZu6teRb9He3jwnype4azUAW9rRwa8NMHsAa2KG4nCpiF3Vc9reE6zCpVCWr3mCThLaJ5q8Ld",
  "key33": "644DnXEA1LGf9GdDN4bcHMFDtVYktwKMhPTLRCKLPfa4nAwXrJbPyNozmEPikEygroWjDLQoBbbB2B4nuPJLfpvk",
  "key34": "2YR9E1ViLeSmL5PwPZUzxjcYJUXw9isyYYL3jq4QNHBZM7M1AHGpqaXdwBfFDR7htL6RX9SjzhTCory7xgCJjCNX",
  "key35": "2VV6bfE74L5Qfk5anheuaY87tiwPPt56fyVomhzmdkwyKdpw2cNkeqWS4Dd6G7rQKssynReeGNp3pmJZ8EUZZcLC",
  "key36": "4Bw8sBZH1228bZbi75khdXp9Kqmr11jwfU4sqdsQo4avAK6T18DYV2mNKR2dGgzUgdK9iyjKEUxie9Y5AMz8BgbP",
  "key37": "3d5djM12ub3knHPdmQ2DUQzCGrE9i8TLmpsaxoBGz2qCD3159bxTY8QrYmR9kWTkXAYvPqc6wb59x7CqrxvyFA1V"
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
