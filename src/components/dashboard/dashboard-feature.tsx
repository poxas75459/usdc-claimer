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
    "3qxBxdbkyPGgMVgSY2NEXFg8CsWqxUvcY3xCKJWT8ePWhAdrq9eSzZrBgBdtLTzE2HUWA2prTNqYbhMi4xLriKj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hAPYuEiWPmSg8Movb86x4suNNZ91teP3kMWCMbqGwrpeRA4weewA37LnxpVPe6LbJf162t4JzP35j4pCRSEG58p",
  "key1": "3q85gF9eHWaeu3GLz5gqWE4sQ5iEhpFWCugZUjbzrq6jUcSFvPvzTKFk6hf24CDbxejQS4txEzBxfUJhehoqJ5GW",
  "key2": "2tjrR3BBRUpUMtDxnVhVYg7Cu7Zs6EpX75ksvwYxeAYKh8K1KDxULMHuKgZVgFd2VPDqtpexbcCUWJ66KtReYpzb",
  "key3": "2Qt2fmvHnmzN6fcdKt6JDTfP2zPLhgNqYsMF2XzeGhTotDk4yYFqCvoK6XXG1A8suvVH8GTKYbjAde3qgM5PLW3k",
  "key4": "3HEwEmAtBvFg7VhP4oqy4wWpzkB2LcpizL87jtQG8ayG3hPPNBKrNwgGrpawPZkjPmfonFLFHmHWsmD3uEKBBEEw",
  "key5": "4NqYymiKK6baz26p1SCJsN5GGDL1eauBzwCqAkPjYd1zzUxHXgR9m839SREbcTC1SXzisENSDJtUBrYhZWTUixKu",
  "key6": "4oxNrXPCUYMZRT4jNDcNaTtHwGm1DJutUVvnkrX76fGjuET4Kgqm5qUkwJPXFKCAVmUx2oTGmUjch4QfQsjjURHB",
  "key7": "3pexzLinkyopf7fwGkoetLFUiurCQAFFVDXXtznvJUXPRbfJF4e72H69GoTZYuQcTG6qxSKWD3fi5eHaFSWvKND5",
  "key8": "2NErbUYSpUeKUrNykBuF8sQeTkrAjbeFRT85bFfCZHKbXrKpeWdVsUNzqXBtrMH7krnZrbnEJhm5NAXsCUpKTPms",
  "key9": "4sFDuxWBmyjV5WDTkQrCs78baS6Mu3H4gxdHAGpxRuZA6zxKsVAWjkBbACM4ck1D2Fmyc99R7PstpAdJp8BxkK2L",
  "key10": "8DfWoYd1FvrJjneMTnh6EoTGqS9BKPrzhFsyuwAZm2Tb3nTamKWHV39K3YHwqVW1ADHnefo4r92xuo7Weuekc3S",
  "key11": "4rKoBJ2LpPXFdc25n4aJ4Vpe1gKcengkWke9rC5ngHYPqdcX1QjBNn9hqLpeGtWi8Ppn8kUuP4QScAf3U5RxcKDW",
  "key12": "61KGKFY6pmeW5TGjWYhKH4Sz7GecxAgAFYNi7oSc4neMsXrreJZK6PtmE8PNpzKxmuKXj7LjncvYuaaCuZd4Q4vZ",
  "key13": "4MEoNAZjJiwVQYWcoV2UBHKz8vCBdwUXWT8kfzusdX4xye2MnnkjP8mffeSvCggySdksDP1sUuMTDWoQhSSFXbah",
  "key14": "4YBHXVd8qCzrXwuqCwxPnNLu5DmRzKhAb2FehddB2wqdFpJ8raGoVaAwzxeT4XMFi43tfiu1EaAPPbgr2JNj5oVL",
  "key15": "272t5Q6uv24WLGwF1AbtCuns1HmVVpktEaUBqapfSz5o8tkPmJwbB4gFU2b9sk7g1BFWdmP93G38NqD2ZvwqQeNe",
  "key16": "4q9sYcvVHRBESYjuB97XaNoSZwR9831r7RDDrHYstME22ihgBzS7MPFYWrUinm5gqapXhZARtqFbLK9RhJYoJjUs",
  "key17": "3jXNpMYsMMY6fJd7avgtDGvLJE3gYhEWttJGgYrKgMLL2MbVVU41iWyH94ykBojn3cKujFEmDwjxtTjo5SdyaSoR",
  "key18": "38ehaLuj4pMGUovDkyRQzudKdT2yoFSzRaz8EJ2TdpGdd9Q2xSquYPe2gGMqkVpxD4QHKNjUC6C2qyoYTpw3uGUR",
  "key19": "37CButZXwFiPNxxArWbAaxu3i558PCmdk4V5pa1iqTf5yPyrhvtVWVuKVJWcH5U32fvLCwSntKG6g7P5Bb7AAD67",
  "key20": "3dqY8UMrAYSUWue4YCMRP3rzYbV8H4DW2UqqgoWNQrnmnqbMeofBXgU1pGi7kNgyCqFxAg9uUX5WjmojPWB1R6UM",
  "key21": "5r2K2QkTRQUwBTQ9E6WDwmCzPEnGpfn9ffJV1gWQLY6y5jniR9LWu7DF4ydqiMws5xUZbRiRet9rcgJnKijNrW3d",
  "key22": "5JzuStGHwXeY5PUk7wm46L8WhzvKcwQGyELfyTWXpiccix7j1tuQY4yiex5eR7u88u4pjyoEuh9a3nUNtJaSVKz9",
  "key23": "4E28uuadowLfxgdoUkDqtMPzJWC2bteRt6UyfygRtfzXJtTqp4WWYXfZe6eLA3AkTBzuG2JmzGxJ31gAa45bnmok",
  "key24": "5HMLmcjZBqCd3Eobit4ZgDACEUkQftmtrFgop9YDF8axyy5GwUt1nHRjE4rPVKSV5zwBrdFNqKrrgovYMFENju8B",
  "key25": "2tg4D2W7VGBRVfxAzwKDkj2DcYWCeFziP84RSMcDro9VVdnXkUS8mhjPg71NkadXBYLCHn61PCj5QSyQMerdsuL",
  "key26": "3nyrykaRzsbrLUYprSwUaT6WsvP1TFTgMYD8FGqoCJi3dRBRsSdeL5j4BXDApVkJvdv1trz9m9PBphcfD5awWfuM",
  "key27": "44miTUS8M3v7YzLAPtmrcMsiKthk8kBPEHXDZ3F2QtKkLsbciqnKfo1CpY8svPUtLkuveGBgTSqpuz3Yu25VBeQz",
  "key28": "JRS5LnYbitJuxcrnWyC6DxykPtddAhdYVj3cHEFQyDmnhuWvYsyJqrzkBGa6ZXHdf5VeJ4uZqWRpWN9vDLiNDN1",
  "key29": "5odLxVw965Pei9vTb8W2jMPjgbcKr2gnaQwazQ2wsWVokLRa8CsrM5U8UNSsdo38VzkJjyynadw1JQAZn1tykDnn",
  "key30": "4sS9cPQg7Q4yjVyy5cfKtBdXXrDzR7KViTShjg53TaiXCuKmqASuYqJ9rtu5GASfnXmXmgtyUqHLzewi1dLdgfvf"
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
