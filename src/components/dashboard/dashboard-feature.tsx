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
    "49rshKXJwxXr8SZyFhjxKLaYeS4iUexNzDHRYZP9VRfgiuDSA49X6JGD7kt5FdRLZqnHhJTn3ywrK2R55XsxFV5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pykr2qjroQ1j6SvNZ4JDDRQqKbhi3AU9RkfLSSawCS8XXQJedeFKuAdd2xaT3tBrwVXFfEYjN846qWBwwvC6jjz",
  "key1": "3aHUgNcSEovPtNTeumH85T46vxGBFaiW4U9Zi9ebUmVnA1x9pR9AACTGvCzfzqLuE24RTtnvjmPu17DK7rGzhThg",
  "key2": "4bXfZvCEB7GHj5Szj3zgfgFSGckLnA1FtrAXDXAEJERvPTs5GJwCwxkzQX6xAM6yeMrHzVhTpyvj7yv9b1cQVEHy",
  "key3": "2d7nYaEPNbzvRRGf3TRbciY3fvaYpKFK7yPsgTnVUWbuLei5pmcy3wuszZJJNh2viCDSfcnPM7dm41nJzq1wYFX2",
  "key4": "5NT2adP6gdy3mrWjiU9bACNZNsyyz1MqNQwRhiAqCQhRVUSmm9ey48V47xfwpjJZDBeEejMXTZc2pJfi4eAMJUcw",
  "key5": "5b9SiiQSbSMynezGcXASmKmH9nZXksgvZh2QaxKyofiDogpAXrn6kwvc3pT1agU4Gs2FD4qwDuj6QMpL1GG6LVJC",
  "key6": "vYZxAGARLHNgUiYFnpiENshxyY5dQdBjMCq3EjKKc5HXHHWJQHesxTWrmgkECu2mey12XcxtTw7F7anjiTPK4zx",
  "key7": "4D6qYaDm3wKZ6t8r4TeGpLaYv7RRgimpGLSkChFGvrEQDzxFjefLayEgMBLnKHfznRB5nPC6mU9eeeJcVsAEyyJu",
  "key8": "2QQYUTLAAyNEt9twMjKq3sudc3671MLfWM7E4SfWVVBKMHBYHRTamv7AJT3ecQzp8ctteSeCf1jxom3JmZE7G6ii",
  "key9": "2VBmkkajD1h3MR3X5ChKnpVm625We33fbcbFyYDMm3oPzNv6e7FaiwmnnM6oLDoStKH7g4Utrcm2d5cqTRoPBPk5",
  "key10": "2byGPoQZN729rMdhTCCPY9u24GFh79U9zdNYUGwioRxVth9ELfzTqTV5zQg7atiL9avncMF5vSdbdPQYaxDfMvBp",
  "key11": "468mvxeRQoHTV5NHVgzYMEUiGaei5HbcA5k5JvvZE5JmuYaLhPpvrjzEywXPp7HYmqBUg2XEvZPweivdy6ZecZff",
  "key12": "2BaZ5BsehN6STKBF8o17PN51j4cFpkx4yN6YBvLvsxJoLJWUyL6VhjWnyZ88ByWK16Zxnr6VV3tbR2WMnXqoBxac",
  "key13": "2qugKthLotJtAvCx1ffKHk2AGwSMXJzHHMcG79LJEPnduP8r7e8u8hJi3XzUyMMBXqtwjms5Z7R8hdC2ujFsmLk4",
  "key14": "4MSffCCR34mujXXgDieafnKJKNp167u7n3icjiYcgA1x4atCBKvvzBZBubkXEg41J3LnTrVPHVDHmpnUVSi1xEQT",
  "key15": "3LdMNRvtHXz9W45ZSDQsyMq2KRi456AgwiPUvbhvG6w4xQtsZiNcWecxmR7PKTwzZbmxEoxxencPsd4EBEjkHfzj",
  "key16": "3PrLKcQ1ACsTurFQHH3sJvcTy1B34pCpKp6yiMrqFPVpUEkH9DUHs8j7qbE6jM9YS9Y1HzdUJ1PJ4xamHEFWxpno",
  "key17": "3KmcoaYuq247jCdjDcz4wCDnC7db7DuB5CPqDfThyooevNowgVLB3ntKJHvhuerpNeZzB7cLUFe7cxUgh24zgq4r",
  "key18": "3MGntwQC4YZXjbPK8w4GEryiqMxUEacQ6QDS8EzM6Ca6sRghQdBAhvHo6TvALXrF2SUbj9ueBhajU4x4HqeU4Uzr",
  "key19": "4njmYjvV5sKsZePKPqSzR76QafHyLpxf2MoDcCJwGYRYVbTi4D9x8xtmmn4DFycJh2dXYz48qfPRkBfmn96CvvU9",
  "key20": "22So1s98QtTGT4a7Quqz1T8uW3gXnuPoJwtrbpoeHemCaY2JWufFvT1YyhHfZcwNYSNq6kbKiqMjffPH8JeQCJdv",
  "key21": "4EkGRtXA5GjLUUM1uWkUttAmDQWQFoYaFSZ1WHPkmhC2GV3jkbNYFFuzcSuEmAhxBxSrjYoWa4DVF2bMSiJ8R7YC",
  "key22": "5sDg9Jjfs3k8VszRmKBy8wnTFh6rB2YWkNeghRSevvUyfbbhyu28gVLTNZp3hePcuZ7p6e32y49P9sH3DWc9rrQi",
  "key23": "2XRWAyb5SAKzWYByyR9qrbXoX3NiT1YX1pZH5nXF7JVmmwhsjES7mwGxpQT1rQy3dP4rM9Wu3LNhuWJnexo7MVBC",
  "key24": "4cYBYKR27CqMZZKnsQzoXNarjvFmDAjg995rqF7q5iT7v4rbjNJAsgJ4WQmd5pzr4WVu36zrxHHGVgrbH14jtCRu",
  "key25": "8JyR4kSmU2KFMyLh5eyAhhb9Zb9XhHgW9XEyh8XD4j7rJAZE33KMY9ve8t8uh768KRnEAoyx3qP4BqCcuu5haVj",
  "key26": "34i46qpd22vdyyb9tT8LP67fuMEUM513AoE4w8aFpXBKpjgHwzG4XqTw3bUmBeaptrCx679RaH3tueW9UqiBm7jR",
  "key27": "5pgy6bJubhmHDa2RmDFGw7dd13UFurCgiAGGAWbBYnshLppunxbVhwRW6wrPpGypPA99zetKhUuULeymCKwbfiwV",
  "key28": "3nYVzkmoi2o4SoMydFSyTEdVURVTBkEksJiYPjgVHkbAtkoCzwJM1taxCfT5TShchJNZJusJXa2WAEQA4tiq1cDx",
  "key29": "3qjv4vyyvbeLs9Hjv6LkU2wLriGmAG3VBwgnto1SbM4p3vGRNek5nsHr6YRexf43ZVjaZTWWif3Z8BUGiyp38uwp",
  "key30": "2ETM7KJGrUNiETJuboUWzbbaEYJwpKeYvcjhvLvTnr1CZAkxLqze2DbPEj9cYaess3X7k3BfFWiFf4nU2ckpPrav",
  "key31": "121Vc55QWFLzC4W19mdENpNjzwPPWgXiTtcLrg1co1eocy4vtCq55AAiLeSkX7juRzYbHLDPTdJfrZHUALPGiFBY",
  "key32": "52FrzEDWCs8BZLRXTh5EvEbrzJzRLnyYmatSckqMD82ToB1y8uPHkJU54NG4nsiAJzL7PjHaUjh2e6nKaT63CNb4",
  "key33": "geumcRfWqLUd9m4sEhAXHaYqVX94gsRnzAL5JxhbtCG6ttspN7sGtx7Tks8hSuBPXbeEvcRaCjoApJj4L7PYGPR",
  "key34": "4yWa6pSoji8jkLcrHsN6pAzzLypojHDcYXLsxN424ZMw5woHEBKx7268MQFfP61Xu1uHHfmSvFTmDFcNETLKM5Ne",
  "key35": "3t7NBU4SwZBwkqwkUPRaLUoqCLMF3iHAHhNV3rXcKqAZSQRmDqVLmW2BfMTBTxjbnZsYGTcahVuZ55nKV9jHYxe4",
  "key36": "5pZE4wH9TrpiWQf5aLZmAtgFMGaF7VEnLECwXswrQNAxhiyfyE1MYoGu9VfczUREBGhyZWNNjiyDMBWsVa5VYwFB"
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
