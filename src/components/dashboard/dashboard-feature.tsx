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
    "56c77mr2JooJfyYZKQntvFAahXBNKE2hVShqo4HiGEJYCdSumJd4wqN4r375koyVgoGyqsWjzQbDZPyWHiUDydeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gVGoCfD2HC7xdaAedfw5PZgx5A6xgdQerDittWNb1ZNjRm8yCvp3GpWYPycfxFs5M71LAP2gjtEyraTiWXpo6dC",
  "key1": "2zZuUsCPEjEMMhJQVUKJCXb7CZpKbCdeoaDDahdr64kJqGBNFQP3rcwvfwjxxwVZ2hNAWidE1Au27bHzzQGtdfdY",
  "key2": "2NDR71KqFgvTCgwpbpULNWCdJC3xn1nnnoMWJxvwXPtpk5XmMHatsE7Hkeq6e9tzjE7hHeotSCnTHnHnDyG39oLj",
  "key3": "4bgiuFLLndtZ6Wx56ti1VZFVqauv79VKD7e5KYDgrSzBY1KDZJUcJBHCBzP87mAA3rqGnU1hcxzRbkDwzZaXhZeF",
  "key4": "5oBFPQ4B3SH1jrSqNDATQZrcWyHX3vgzKBcsGHaqZGJaJTNRt3P7g26GkD2VrcVJiVmMQ7XkxX1BixE4s9oHUCEq",
  "key5": "4ACNqP5opnJ5idf9kp6HHcobJk8K5zr2JoQJ6WfwinR44f9W6z2KeJGM77fBu4g1QiGRhqeQJnSmaMXmwo3aeiAH",
  "key6": "4AsXpSYqaVvVGuzZGvjoNmWwpJyJF8fXcWZXb8ahGs2ih8ZRLcfiV77AmjaYpz1bjLSic9WdWWWGSc2DdbNZY9b6",
  "key7": "3VH3Q7kFMux2wHVwmBzQhR96VnssV8iju8UyRTmg6jWSJZikpeGTmvinesxpkHJPLgkWUHXvUMMWo8YLgZ9ZTHTT",
  "key8": "3FgiqLdSqiFcRMuSCnSdT7i41PrPfJErKJSPDnAQ8xtMrRFKSQ4d7tn8N413iQshSbdLqnFDfWf5aMN9ZxwQ5xwY",
  "key9": "4JQSWecKtfc81qDv3qwjWm1aJFypAfgDWzWYjRK14hiihRToUPQXwGrrnGidix4DCRfmohF7Sp4MfyPPJndHyjPB",
  "key10": "5vxoQbn3oPx67EcAFmdtt3Ucgo2yYa7YZNoZJFjN7F2ED9xD6dD3qHVqtCF4fYCFEvJQz3V7qevVTwBqFHuW2cr2",
  "key11": "64Ph2ejdtw8BzbgGB75ALYCvanuoNnqgJqBq7juwcdeYB5Vc5m4fCmNbCk2tPuTAQKo2p5GvFao9Uw1RfcqezKyq",
  "key12": "3YWYsvz3c4SrUwGtfLyYRofc7MKQt3rhntfyyiU8LACJ33DmMe5gm9fHe4VbMGKp6d3SicuV6eb946sB7vnZ1bms",
  "key13": "43Qvr62eNSjWk8TJr8JTbaJmmURz9sWDNvzUVGgZogi2iWgAvGCxf2io4nSn9hXYZDVwchzLZecTCjgV3Fa55aFd",
  "key14": "2DFyBvjtKz5QF12vrs4aqHUbhq5dT4vY4CsYh5Duntg2D3P6SuXrNxQA6S58iJGDDctAurtM1sHpEWxdeff1DdkR",
  "key15": "3J8fBaJv343rsq57Rp6j7LNEpt7i1xexXnST59FdVgJTDhkZfWHcb9RZoD4tAtHJ9yDtoXPtA9UCxzDrLCXm9uQw",
  "key16": "TPPuwsjoAHW6HZYQf2m9EsoCbFKjoCRAdDiEMwkiesDdqxsekZVxAmTZTZHhiSEJ9pDhxn4bs9mjo5k6LsM57pu",
  "key17": "41TGmc8YQcFxWUMDFnSBqgdE1rmwZq1SKafffD7MQLL1pfEzFdMUJdRZVQXSha9NCs1DJcejV47vuqX8VtPDkG1s",
  "key18": "5XAJpPxP923snS2FyZUsGjVe5JZAYPJW5YT43fFq62Umj798DZvm4eUZNe6NyKN62FSy1tnq8Pk1g46LFXyrz4Wc",
  "key19": "wdcaT9x8zbQwNaBHEucoEc1yQCDCF9wZh2zLqbcrbTHZSSqYuruPhbpEtKDZxbGS2HGPj45BYQ2B7aVpZftwzgA",
  "key20": "61t6dyMR59UqftrRvoiU4nMdeDeX1zdYo4p91wEcbFTkP1qJCJCPxBihANkSxx8DEGuivPzpnhwya3PzhSE31pHt",
  "key21": "5Egq5WyJXwzvMcnMdQC4VXXCDpfH86bwK7GwiC4d4wsRMTNnQLM9DFeM5R7kGZzuK1DEwwf4rGXEMJt9CPHqGJUD",
  "key22": "4WgMADAzuFHJiDstEYAeYPKH8ZGvY5qeVZs3XbJJKuZKYE2z39gSBLj7c2iBdF5FWXuKcw3zuTTUtNovGPBePtBh",
  "key23": "3KtnQvhUcmxxPrQmstEod7Kjf8WhYi61LKiVT3y1QqpjQuHztGRY6rjUt2CUUxUX7HnpdBrTYhSMi4zszYoW3eoD",
  "key24": "3MKL8uSJPFspUjMWVJXibrxXJtf5UCbm1YLEXni7eGwqfCru4cVXw43GsVpGyC14sL54usJwkjYjCnYSiPCDZr5t",
  "key25": "3pSu4S13PkpKgmppk3HtaUem1CynXYutkgqnr3mb3XCkKwoEBqdc9GbQrDnxu5SrSVDLmhjUEWB7yiydRDYqFPya",
  "key26": "5KPPzFoEJSzf96n9kaFsTcvwgCjU9Bm7ZngoVRgn3ruhMFACBTPeFi4ZM4onij9KZMCcWQHxS3tDrsTPbzAmH2NL",
  "key27": "DaCwdSZGm7WFjM1BBp9L4RTQr1pHhB3EUrFPYNZpkVM4WB95emZPW9AbHpvw1xfSPxhtLFAiBpk5LC2em6MrrF3",
  "key28": "4Kkg5BHVR6tPftrYZwQQvv1vMWxvz4nCUJvtfw9NKw9QF35EYnDqNoGDwa9qtg52GQQqqw7paNwmnuvtJKX76enb",
  "key29": "5diuwbDnbL9QRCD8NZWxT59BMwCFS92BnxQBaj4hEwcBJXHYKPfuRfDcE3pqfJXu7XC23ZY4cEzBtCEXUJAJsqiL",
  "key30": "5uVkMikm1gYvK3xCXvAfocC75qF5oZnLACPEenpBw2rcFz4fkXbsDM6oYjdbF9q5CmR1bNDHhsgAUdgckFhdTqn8",
  "key31": "4LCbjEeQm46f5Zbdr2Z4Y9X6euGSWXqpyZqYfmwrfMzKz3Zg3BFdy9qiLPHpdNtG7NtG2pC6x49SyvWarVT1UUDn",
  "key32": "jGznER2w6RRLAtWB1s9dTJDG6bkHLMbRu3qesfzyS3dfty3bhiE1vjEbrVK7XRPNypQRX9GiVaJjKjemzsrkvVA",
  "key33": "2ptUVrgJSChAs7fRPivCegMjrZw5QfJi4eceuqb6dzpDZK4auqYWv8VCUAswWR6SvgYDYAaM3u1KN6SBiKAXVkQk",
  "key34": "5mRQH69syoM45w7EZ3oAVGoRqcX6YVCbsYpDqykWMdRYkRDu6LgqoEHvg5XMx7iHGwW3UG3c6sUn3TWHT9J9NWqF",
  "key35": "3c5ajzmMx45L5bjcFozwfa9hScZzZ5ut43kCX52JvgxEmH6FpF5FMyjmrr2jceQkhJ4qvTLzqvBg22fa5gTmYZtJ",
  "key36": "24PQuFvzCWFReJpvKx7XhdpBL4U3xrScahRPdNw4rcYSx9F3kKYok3M92EYAsYBCPqQqzkCd2PQFimmZfoJXaEL9",
  "key37": "63pK1oNojrTLg7YiqVLm4oYMxg4B1eUPAmAWPaWQNuHmgMQwGah7T65ENtsoir3QdRp8vdjBwpH98L3BYuHrpakm",
  "key38": "557EQHpyARw8LUaamezR6mqYaTjwvjD1EGZHEmMdSnL8gc8U5pcRKshZg9CkrZw6YGdm2iubEXFv9qXojvRnJFAz",
  "key39": "apzb5nMdiEWETDXn7wSo3C9twhstH35ibnxaqrq195CZ1VKum85XkSyy5Za6RXuLDs6Kpb7pLSnXfd35RniG76W",
  "key40": "4jRqRzYDFxS3NCHgDivEqizJvwFwrygnibTfRrRZw7u41K31pkUxw4Wqr6tyRhYdx5N7F9sDsHKvx2iuWQZ5qgqs",
  "key41": "4GRdPVffvJUeQNxVE7NbAowh6sDHbKBic63b43dhUbfFXL4CqeHHgWT4hRSCEyDpuAub8n3j9vPLrpp43qSLe57b",
  "key42": "3uf8ERGF61tHThQZcvjncD8zwfi65XUKMuxXjgsxrSsddSJk9exzyxjG2J3gRcj3m3Kadvwee8oXaMfn6PdGA3dL",
  "key43": "3t9vDLFvVMiEw2r9GS1QBbfC1TwsTRxMC7UtyYKcFbnyPeEKoSEq2ydWXQfsn33iRGy86wDzKhDBw8ZM3fR99gk",
  "key44": "5xDCu88EQxRyQ52DawJLDscMwYjnvsPDBwMtm49Xc5eXnwMjTQxq5dJuYPzGPwkNi7QhKPXcE8YdbFumvHCqBXGq",
  "key45": "5upw4z4AtDwU5LQw8ym2FvAZEBAZzL3aWKF2w2phZnKAtjt9az2LvAgDG83M6yKfDSaK78DXbUaSJMyB2cucu8o3",
  "key46": "4rdRW3zYSAXMaUtqn8asHq7HYfLwqVnezNAu5xRfGiS22gxHRF4Xt8oNX83WPkQLAJuuWukzwHQdUJv28zRB8vmC"
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
