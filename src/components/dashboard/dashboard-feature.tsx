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
    "5es882ZUZwc99PsTeEN83dUAkPJ3ZPZPhWRQzKBdZZbLYKX5HKxwAq4USqfP9ZGL8zbuRm49mg2MDmJgUCwaer3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MzzbkPtskCXizDw6KeBbQeTYJMriu8fHuqvMB1Cj8c7d7GtBAuznbXUBsffAtsFeAnxVfKwxWRKv6pPwJFtmoEg",
  "key1": "47RgT9ydRVCRTMjvXFfTjU2cb44Jv95NJ9LN51Sfbmo4f7EY5vC7RV6MiksaESfkNXDtvtaJdZQBHZ1CRHr2ZAiL",
  "key2": "5ET8zEjeevuqSdjHS9NWGuRn8Wm1CscRkNm5Dp58vKFy52hXkD1giKdUoQvRh2qYf1LeT1ddXGTH38ReMuQReEBT",
  "key3": "5W5WmrKBgJu6HtiGHW1oarPBVrznEwMqmzXgoYZ4A9jv9oVuoK386b1eonSmmeUDixkPMLxMc491NFw5XoQ3tjgh",
  "key4": "2HZ2JNqWJCA661eCFhJb5vSUY7yRC9YU1kyio4Jn4U4D4b5FwHMyDo6Hkir2D961PzYsBbze5WHYMunbwQ1FyHgp",
  "key5": "35eE3z162KV86rFa4zfMNgKrymdSxqFTTfKatB22TwSriNoVLJxCU2xW9Zn8Rp2iRXuTeWKrTqobBrpkd7JGCBFz",
  "key6": "5NgR4pyRBZApxZAs8cRbGBhqioP79eEixvt3Fm2BByyvuD9R6Bg6X5mcS9HaDMKCtrjbdyDBQwz3pSnyZKLMfKjF",
  "key7": "2KwV8BVTrfEabkRjFngU4Q37GzTvzGN9kSVN5D9W9gJVBrd5UYQjrDbg2s9n2ptNNfuA4UuXzBELUbCKoosfad97",
  "key8": "24DkmDvCZ1vSASCRLc5UicNdKkk4Rh4sb9oDtECaybXF8MQBwgjZe86fKiRhRCPDCf9NMeHBobJRYzB6Z9HEPqrE",
  "key9": "62Fceed54JZEMk5xPuWycKRX8pBoPKE345o9j4kGRviKKGFrnhLEg6YtKTP1azD9emBdoFNWuEEi6cKUZZyabEcp",
  "key10": "tYQBb8B1FdQX5N5CkFtBqseQP9uG66Zgq8ACUwtBaskLZPdZkDzXMWg4KTtzQcotfGFtdBkYxkJth52HUy5RaUJ",
  "key11": "5pNLZAZdML8RCz93BRrt1tYxVopkvo55cHWmWkeWPNkkQMGrxhsw4hj3x8nYijpTfVzZWt2eXtWmDHKPGb8KCmo7",
  "key12": "3BhoUKsgp8A2SWAry1t112Tw1hh4d7EKmfG2SSU7tZCpDwdxf2FiZSheceLwdx3UZbxDKcSsdeT1rQwn1hXb3kwk",
  "key13": "4KePRPDBc6A5agT2snyXF6EkrYrUfpj3A8ojvCTw7EZmDDcEvGgJtQkEtpnAKuw5xwJvLn8wUbzmZQjZNGeJXTqi",
  "key14": "5a27XMdXgct8v86s9aNZyAi2XhuWCeE4EVu7ztz14do9pjCZD6pEFy8WZPC5fKWTzH1ZJZQmsjscTaosTGV3FkQV",
  "key15": "2XTSR4dezD7cfAhKLtUM4XE7zyuCXj4HqdDoHir3SBoKV4S23iEjvVGLVv4LkaH92Xmt8sLp7jmuA3ivPQnf6HGY",
  "key16": "28MzeiBhw3DD3iwB4oxTdREmC8ynT7NENzjr1rFCUyYpGanmbmJiyaw9ihZ2hgnwYh9RVBxxS47c73wM96rJKjoQ",
  "key17": "2pdfDwtRfFudRKAiSVWoeJjjjU9KG6vGrib7gye5iTh7hqpxXZCRv5RfFc4LTEX9ZskFrnN1SvAf3tG69aniREJU",
  "key18": "pqUdXbqyeJaX8actfkJVG37hyL47cUzHWBxLcRsHdM1LDgv7BB7SyqXAeMP2bUDemQUT1pCn5EQp1jBuHEHUMrY",
  "key19": "5kcaT8JSumtmtijd8djuaYFUavdw25YuhCw7nECULboCC94UX8sEDbEdoifnbAzLr6KxinKd2WGHdK5WdZzki86p",
  "key20": "4wyQZdQbjuGE3P5vrS88Z9FsBgeBBuqUiSVUiyZxLXc2mu2ybdeeTR9Rp4SStckCmzUamfEVRZajr4P7dia3LKtE",
  "key21": "qpSKVDYrq7HSzR4fEvskwg5tV3p2KTFqYo8fhcZjQVn651zfUMZGorLUfR2RKSmXjtRTaW6f5Mk3r3z58k2F8Wo",
  "key22": "YosfiUjM9T8HGKb2BV4rBTVm5sJ389o5acPeSD41SCa9TzMJJgrpjqAKYogkZNYJRLxY6XtB8QZVFcgTxs7iRvG",
  "key23": "4AagN4SdoEdRGcG4mu3RGwEeiQZUb8hivWMJM9o9PXKU7ALvEAGux8Vgg6GHhWs2KcurDWTj1wjtKSkTDASGTMKa",
  "key24": "2zrAfPCiLpcj1wBPi5tV4HWajV3pjixH2AuaNv9pakSjHLT3grMTu3ucpvJ9r86H3RqBRRUYSEBV6QCZXa8pc1he",
  "key25": "H5Zg8vSWkHxVfTB2tkUsKdoSroLW8vfVzcG2hMeym5QziNyq5VuziZuC9gBtu2gV6rqFVc79NzBVVivamtumFzZ",
  "key26": "MzWwhhRNfWEgA2rmUZKThHjD9ucpKkXk74xxHVxQ3ZYbBuobDkFmNXXJcNmYh5Kzo3NBtQU6dqhS5Y5UpeW2KY3",
  "key27": "hsRHfeP8k1Wp1ZyNU6syoR9UUiGFKrPNeX7wvEeLjTrDshB7WvACwWqe8BZE7PSN1Zf4g4GMkXPQfnux3eYMa4p",
  "key28": "28UAW8V4cQgd5U99shKuTGDzd9tYgMCjKtdn1SwazTcgo72yWKp7dMasBDEssmRhaAU625HAPui3HdUu9sUHiFPv",
  "key29": "3QVR5NRJTqPhNcV81CvjWHCqWx8pwf2hao4Az9pZD6kVZaGdbdQAPkgw7Z8oB4HGkyHG8hDpGpCmFyooPL5qPgvU",
  "key30": "5Wh8jDQuEsXQpChXnPvibEzeCHASfDpms6q7MHvA8knBfpMZtGd5HwbpYEEKiCHzmuNzGGh3L6rKyGJaaQdyAtEX",
  "key31": "2bf8McgrTDzn4SNtRbHHQFySr7EfqES15uJA3foHZm4ApW8Z5M1AYuz7NtKyd9KfA7hav4rsNT6DBGhuqK74DQec",
  "key32": "58C6VWwzA7DB9SdefJFksErTw6cgFMzSoi1Rex41SpEsy64nc5Y9djGtcuiZS2wodmAG66gQ86JsXMQA5AWiHQBf",
  "key33": "51wd8SbJaNNN9HezrcNmcK4yiDVYEsNKVwyZDNQStZ6iJZNZwX2BUkjpgV8aSM1NXNhKq3DXJhDM8s1aJf71ycFj"
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
