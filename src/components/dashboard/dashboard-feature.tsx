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
    "3aczRscRo2K7ZecwbPai8gQPEL3NGhYM7s5gSYmgPWs5hVFrNoyGYdoPRcbFFXx6AKa8o2m5iWRjfEoaqbcE6GH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W5sRULxAF1rdtMYw3LKZKjkGuYCpsGgy4GFxzc3rhGzWfwKY8TRW75a94QRDMWR85Lg2N4axifLxKHhg4ksn8mR",
  "key1": "5SDaExrkoWWfWM5S64VJrGH47YxXhMs3G4YPowYAnfxhuUMUm4gqN7wuUV7fbuQJhVqr6Fzw76BmNjk6qpiQiiW5",
  "key2": "4irt7Q2waFwdCob8pyMxKJ21YSVPM8Simxv3ppMJyaLsk5h9pxg8pXTn3dgBBpztGLKtXcm3PhYXGpSNF678GY2d",
  "key3": "3yeEWEsMsmVcA513RNanCHuPVvJe3yK7eaaru5G5iJ9qktTh6BwC7hbZ2w5pPVp2GRLbu5D5ecSCvCNHHiDtw5HU",
  "key4": "4VbBTzAJvbdEjhhyuSF7CZSN8ayNt7byLYmBZ6Sb3qzqdtZNfJLpZZAE1G9oFApJqD8f64dT7NC5Abb72P7YaetP",
  "key5": "28ugdXmj9ZSesFK2uc8Trwqj58uw84VJgiQ6tVhss8F8rSst7xzd71s8e1cxgMoh22TTve93HzzKeTdoBLz7rhKZ",
  "key6": "5AtVK5RimT7vRdh7eyHco1qU8k7y8xuz7znPqqV6XFWfneffSpWoutN7qbYSrGWTvg79u4SKxmVV2DsASMuWs1RG",
  "key7": "4vqRNqhd4xMwXrMtmpQaNWjfVZdTdmMAN95hyYX2EoDuPd2aGbt3YH6NqNqoV7y45s5dPCTqXcCPRngsXJj47Ztx",
  "key8": "2M16ZC5irfBA6qjfrP7tQXSr87gYUztWdMQeaqsKsWbxGdWWgyXEorKesViNQLxdyuK2RLCJg8oaUfwHsAfdvo8y",
  "key9": "2BDJ6pWw4kbCGxoz3LvRbyoexVPPK8QdDtVsyrvxJSP6nHvCdBvJT9a9XVi464327du42prBD579DTDjHoj7u5ov",
  "key10": "3DWNjdJis2kDiha6TLMRtkAGKAC58S4r3WAad6c4hHH7YcQtb8sQigrDmnpBxZop7Hk9cj67rhx8ZtYb7vkDdt2i",
  "key11": "5XVWmcnnfowETinmQWeXjWoLXyE1EsEScv4dKc8M8SAPkb2Rb8VFHevF5Ws2ucwiCQHP3J6wvwcXNBu3V1npQU37",
  "key12": "425mLkimgNqR9AQEgkKVyYq5NokgoMTNevdtkUAAvsaSsDHdB4CygfnKwYc1se7KWA6ckwj5dnBoS4Kbu1BY6Aas",
  "key13": "2bqHEFXTXPyaCETRTEKJ9iz65RNwe3HNArh9GADjVGToTfEsQ8YAixduijvqGMEetYAypbf4m1PXqErq24U8LDjd",
  "key14": "2ZZbdaHSkJtvSfUgZQX7aj1Kh76VHvJF26KQPjwTAQ2CHKdK6B4FLUrQp62y7ktQb68JbKNQZz6R3LXTuvr7rjzo",
  "key15": "3BZsN97scLxnVjc5kiJP5K7Jtt7S6AAd5H6Sk3wnkAmzoxy4nimuZ42mLKaSYgvoiRCzcmaqX1ddkmxtPMKJugdy",
  "key16": "3itr4VNcswm23ZFF2BwhLNZBVPvaMn5CYWAWYcFbsF3sxMsyGZPXSmhfGghutG8rzdmezM6FLLPeSE6yJwteh1Nt",
  "key17": "5pHP3WiuN6RC9vzg9dCGfRmX5kdWMr7RxZ2zThqmg6dUmVQ3Gaxo3hLvVzQzVTP2i2whQiG79wUGo24KZBrARMig",
  "key18": "3LukLKxacEubaNA4KQirVNQw6hWUF3HFkHddVoJrn1XgQyBifgma7FCPiQDyMX1pyvtZ144Dc8XKaqZTKD1NjvDo",
  "key19": "414sKz5x4aE9SSxge6GCk1HHRqKKxWMeQhcW5JZXoXpxRHdLnaiyCihpBbXf2tZv8B8Q7mSfamxgcCn8vTRd8KLb",
  "key20": "3Hi9pRMzBKwVSTTQREeDNoJGHjAcxEctj3VTjs9aRnhcPHa3os9RoUnWvoErgm8DD8zD15avExXkxqZxxti42fJA",
  "key21": "3X43sj1cG15Q8WjvDoJcf7b45QYyg4swLybF8kDY1VVkmppqWj5dtG4XHUZSLePAmRMvJTB4ScnXVCBv6WwJaUZn",
  "key22": "5qX8abXsx2jJpHfweVzg3sT9inYJnwwpAukwc4s6cv6AiP1aySFNAgHaYJ43TJFUXhGfHWCRreyzLZZSJn7XhSXT",
  "key23": "5W3AGhihZRFkDDt6DSRAEHZhwUNtkazEsnLsi8w5gqis2gPpEKeqxjqdaaMFBVUQLzcrQYgtq87KM62peLSeJc6d",
  "key24": "26fsffnVTuA3eniVX3P7SbvPL1Rw5ZbACdngVQnkUYw9rFRBfz5Q2kDdWUKqEmtid9wDxW2zNgRBkFXwqftPEbyr",
  "key25": "4c3hPvT7pD1xCBqS8NedQ3vww9fJA1jSr7GniHaUCgt5RWGj6hDE8C3MD2p7xMTseagrAyxvFEeWcyeQWN73DZYT",
  "key26": "BpzRnPuZXxd7sWttK9hY1oC6cAwhH97yhWubF1qGEoPxLj23X3KKBR1NHfwZfux2vndPter4LssfpyFUxHq18Qh",
  "key27": "4j1hscx6mBSVX2FFsYxsdGj4a252y1KHRmYPLQNMjU218SRd5DX3v3MCh2DEDGN3vvJtFW6kQeX7wpPFcJpjjC6z",
  "key28": "5eWNauqT9ZpPh8YW2QvonrNCHNWU11oAK6pZjESGGf8JzgehQRJijRJZDDmBU4ddJNc2hni43pATWPbeb7U6Nq9z",
  "key29": "48nptPhYyUezfbUPmyGFjpz2WNCzugcLSXYwKxpyupvzoYthf5dhHzadRKp7LoT9KM2W25PpAawHmYbaMLdh3Kqr",
  "key30": "4rev4srXWFzUxqL4ZMJsaoHFJ5ecmG4u2AAovwRuHqTLD93jjo3nh31oXASeat37j92PAVn45aom2zcAgy3NyfGf",
  "key31": "iPSWL5wivfUwS434FwePKUUMLGTosXNS31k7Pnoc76au5uynmUkXWdk4exT1V1EuCzZaeMojg8N8UbpRzuDWyYi",
  "key32": "7DUX9tevSScbC1eWF17uJKcksQNGJbRjYTzRN1i6PiGjcj7VbRK4qH7abZFVWvgkbe9xJym5kuRofdoC2uxvTXL",
  "key33": "4C5Qg7Qck1YuEah3f7nxEWJE1QDwiXRW2FvD71To6WnvmLPQNmivUeMfuCYdGpKyKiEExVGkbaKNkM2d6n6tqcME",
  "key34": "2TMDSrv4T8Eh1QcYE72EsP1TRrhXZu7KUZ6Hn1KVC9tHLUztPou1pZ1KQpC3EAEHdyd48MQ9j7jXpAhwnEqyRbAa",
  "key35": "UmFcCGGXqQsAjnJT8dyPHp8jTVhrWdYasuPyKqZwvuhNdsRpjKtpXxm4PH34yycMQMZuN29cui6ZY4iAQvwSvTo",
  "key36": "2AJYBKWqMYyrzDmDArCK8f7VNYRjVfDLvoPJZFjQbeZP3TzgjAhsnjN6jmuyTMYUBv1HsTq2fikoaAZz6RQ3AvH5",
  "key37": "3jxve8Jz9Fv1CsQrGLrU38bBEmKiEVvz6vZEmAtMGPYZVQve8pn3kkRnHX1yBgMrRfQ3dd96v93q8urcKwgBvQxj",
  "key38": "Evx8mmtAW269gZfeHM283Sv7JRrBK5tW9h8ErwzV7qcxMkP4A5uHJYY5xvJi1WN9RyhQSsUBcjrL5eMVTex1xz5",
  "key39": "5xe8WXwPfEHF76DJSq29YwWYmra3AXQaYBYaEjVWRqGQigktfaogxYYNAd3LuZvRZhejbueQHZa2ixsS6iqaJhxD",
  "key40": "4cmgqosn3QHQEkZWPfWdN9jWFpcSNuMAvYQCtukWvGcpFUmXwj7JwNdanZpfgT9EJBp3CCKiaiq8mRb5h7dJmLJH"
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
