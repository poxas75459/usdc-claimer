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
    "EBPBTvoGfY4hczbEisSRYtcHMzm25856o68ucqLFYxCAy6wXrD8FrXi7VVWwZ1ACP9sDpdThinsHBrKEP5xWEoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YxpzkeF5dqXWKnMhN6p1zVdB6xGYdcwVFhvC52ydWWZaXvo368Ch4VXM5EQXhduD7uitMQWN6XHWg3fTT7cafeP",
  "key1": "5bjeWFkASjtEXSdT97NkeVqw1Ck3tXmEsajwktXLTcqC2rQRtioSWzJrF5yE34GGCbwqTQNz6UEXTeZ6JvDrYqdk",
  "key2": "4M6pGmzzQxCkw3QjZeFgUm1qochLuqogXwctvNQx1GjqinQC11tngDYKvuHXEY6m6AqfzZhQcYAwx7fxzQFbMbhC",
  "key3": "3VbPgSArWdGZXVY6SpdKB5y1Sas9bN38BocYEqPpDuBqqR1JZvipHane4gVgwAp8u1wZ2VzniNsytxDGGkkhrFPG",
  "key4": "5WW46T58n8SY7xosZudn146MyopoocsCQsAFHdXTFytiNooMHsmBxRKhw5nM4CDhXFhqdWY2b8SKgTxJetm8MYGM",
  "key5": "A4To3nBUKBev9KXH2jpmknKEx46wNzRzFiV7kgP1wbgHhyZcXWD39n6uv266WsX29W1PmeMcnDC71yBWfdzMchf",
  "key6": "2AFu8dLjiXBX124DasyhiEN8x5ZgQjcW7gtJzy4cjVMyNEVBzt2wNE91dRQiAjQPz4hwx6VdPhdKQb7u9AAYpssZ",
  "key7": "4yJAknnb7r63SzhdLuS1hHKjCyMp9io8UraM1XxbgYMA2mhuTBSssRa1iVUmNC3HkwPc7xWrQ9spEXN28orpuShr",
  "key8": "3nBFDFv1Vf2AsNLnSayhjrLPPXR3GcC2sLXW1FrvVevi1XTfZbhALm3TMreiFEDLkyYnrb3utRgyPXWHU5LMSJMT",
  "key9": "2kMCZG6khPkVJqZwjp1HuGTvTNwzMyte3bQZZwBAWiPa4AGCYWbj8rkFaWAqabSyXfFhdGH1esuyCNe4MnEnAFr5",
  "key10": "4T68gAZ6nx57HAGeLw7orUa688ZcMdsNZXXGE8FvHrYF8hZGLBGFAqPWJvyUKZ4CD9raUvLioykJUegcB85KwEKP",
  "key11": "63ep9yBwMLNDBZ1kwE6RvHX8nR23GFNMeDPV76mGHE3tZ1rohLKqBj6JdyUJe2NbguHPwDJf8PtL2zcxKc3KVuzp",
  "key12": "5Rg8aNFdnturABCVvHwiEABGWpnqcnigYA26DN6PJZbzJBr3guVNrh9ZAZSG5TpS7acTfAvt8XHELPTUyiEajPdz",
  "key13": "4d1jR7KL1CBRAHTvRDaspAMsgRzdZMW5YoESNDkv3CYeC3uUjEvD3P5PaE9HzCRhe8JNycNjm3AAfuA9Lxyd33Qp",
  "key14": "3xFLs5WKGpr1yHHBNUYPKQx6yh9dQ8Wv8Mb1P6ZJLGyrdtKXVGKUVHoznpQU9y7g2h4TdLw9dNe4MHoy5XegVF7D",
  "key15": "5oeEqbDVxWD2GDUC6PhEZ7PzszpqnygQi7fw3zzszbk3qXJZT7BBixoCU3CQm5Ekp6fh5LKyGypaQsS4K1sZ1is7",
  "key16": "mU2Yj8nRcyoSYw5rUVCmryvu6YZXnraJcQkZcNNrvzi7ktVab83PYBAqPSoPqZEBVPbDwkZ3T8uReNhgQmPGKof",
  "key17": "ZyFmLoY7qTE1aJkqtdoyzuTdxAP8oSVqzNudWnLjsKqYWHyWz1T7PmruNrdZxDXNuentADm6FkBDxwki4d9MhCx",
  "key18": "5Uwz33hDtor3JhPyo6QRdkhtEto2UCodrpvAXm8uNumXs6a7Qv6r8End5LFvgNN2QSbWHgsAnAmZN9tMPuoQSVMn",
  "key19": "koDZugcNYTZstBRWNNYRKFELuNpptjpjERL2QCMVGGRLGHdtLEf7HDNwrxRxnKwujb89bCupjxXkujx5h4DcPJw",
  "key20": "4i3rGy7aQzYsJ46wdTozzJ2KbrhDKmohtqMgdX8K4zPFZnyqbF28id3weMEsXY8dvPjaVrLjSwRnwsNST9HpKqNc",
  "key21": "ybqP8YvGRQqxLirSmS9joipfT2qQgyVw7P6Guk1WM5ABCJwDhkZtjLRnLTCtwQAfujbWCDx1DDiDNcsC5XVnrQc",
  "key22": "4eSMx3B2Tn2vAY6imdY8gDZCK4J8qdSHBQQLgE4TUAvo1Rze2Yog5VpsYUR4vTcsyd34ht1MJW2bMnYwi2cEN9jj",
  "key23": "MX7tSJ8twymUb9izbj25tBg1ojpw4CKYpFn3i3uGZeMGDQGgvgUFt2vz46PVWTaB3Jf1PVr1iSGd2Mt152UeH52",
  "key24": "5W2QhUEPSVVTYr6CHrvCmtUeQ2wUVNGVS2bmwTZtE472XGgRC3fbJPRwYsn5Pn8oinqShndRkJqahJkB5Yq7P3E2",
  "key25": "5YLGHJPMfNzCVWJwBFTUPBg5QczQwgQFzrCDG2xwtKZJVwvj3y7jfc67fiYg8wRBA3n36QUCfTo9vuYwdg6kmUqn",
  "key26": "2VvvjZPxcpEvoYMBqy8sKPB8PtrdTSZphwy5mKffQde8Rv9q1D4WFRU2MjoCPNHsG8Rbixznajj2uL8ifWQUJY5r",
  "key27": "5eLRhWQEbgoa5YuTbmjJBekNW75WwnYtT7MbVvzeedgiBnTDMFs2HvpyW2Lk3sitzw53Bamq3eCj95gfyVSimgK",
  "key28": "2fANYyHLT8vQdHXaAy9TP8QqeqRVWdtwZpy4NGPmmsohFxqzsYazxHkmEErbHTY9NYhzgqMLixkmg9wMftKMyGnm",
  "key29": "3g1JhYz2T3sBYQQQ58MMgk5AGWx6CTqFXbL3YbC3sdmGEATLEiyNZ8yn1BynBF1mqDQBJYX89dFbhc2QerobaWyg",
  "key30": "2mZ7Wg3rRSgW6JnJbXJYE7JuDUB4K6brG11eEg9QMsVR4shXU8G1GL1yW42xwWKSQ4ivvX4JBf8TzTuyoGmmKW8n",
  "key31": "3UUxLFcMafCKTbeJwh4K11cujj4NPz4QX65zy7otWW4ARkrDcupY9NM99aJkp1NyU54MPjQ3Rhvy1ZvCLYVDYL9v",
  "key32": "2nog5AcPq5VjRJkPF3BgADa1mAUCWApQkCuDLr9BEjwJRTMoUBQPjZg4D1z22aDRfTHXSjjThXzWxF8V4rq2nVNr",
  "key33": "4Ycme1eK6t3JyvgZPnp6uxj9FMT2o8SrDdt6xZi6tr1by6wPnEetqLu7Vma2n16GVp9vZcgeTsUmUqjfGEuhzwfb",
  "key34": "3YaxH9WHG5TwtRtckmCrpY4A3qL2h4y2xBVMkE8e1UKJrYuyK7eKXsNGrwUXZ8cmiixZR6qxuPd7JNUaH1NzmwgZ",
  "key35": "5Lsb7imrC9jEdJJ61MsLybo5BxpFAPoZNGwJe3w3CgBNT6pCVNHMNktWQp7ndHZDSue8YBuNtdxP7h2Bd6WyBuda",
  "key36": "pQ2D83NaMuCnQtARD4Cfoh6hL7uScYuByFcxGfKPgYZPRWUq8Uh4pNY1ZXanUabAnxwjaRUX1onY843sanqGX3c",
  "key37": "4FL7Yeg7jyGXbxF1V1jnyqughKbR7PS1WstevAdZ6zRiXHPDfjeJsFG6fW9HbohsUavMbhC8VHfBikLWrv5n4nMU",
  "key38": "4mUXcBJa7J6mNp5CTZRwVMigKLg2QDV7gG682kdRexsq5jBDY1Yov9biYd34zq2k4J6wCZn7Sm23HLEVk5zX8Ycq",
  "key39": "3mu4eejprzYRP9UYn5ca35SifEcUbXvbVtAXPzyCviHu7oyTZ8gcjGUthQpoX7EFdtYjmynaB6XWXhkbURHtNcVf",
  "key40": "4rGowx9aigzpXDXSUt7ox7qga4Qw1xeGjc92NLRiHcHF9Ht4VE5xffr8b5oBAmxSYAMGqPJ173n1rLDmXfVDHBu3",
  "key41": "3scMU2YcRXizEK4S4CuBk8JXhBTgqGA8t7YFfNkBAq2ezpJaGX2VGQwc8rYyrLpqDHF9ajW7hXs6Vekohs5LwY5y",
  "key42": "4XdALobQGFFGJqsdhP6bLaBQQRNdzT1RZDLdaQiNs6wL8Wu2xfWfLBN916j4GMSvjsk6Vpew8x7no5WqW6UMjYHJ",
  "key43": "2Dci9XwxnQUGqmV8yzQEiF5aNgng9jW54ZNiDbP2T1H2Yo9E6fvGnzA3meCa6BVPhRWbdYEmYAQ13WvWCXJrE4LL",
  "key44": "VSCzwTgnA9pwxCeCdfEUuNNydtSXCWYAQA6Xai8Egv64mf8keNKYrgYkvY6Ftct2uKdXdT582q6Tmp6mdXW7gzP",
  "key45": "5VnRj8hVUqMjpAjWXTRFx7izw1aJcPhrXFV6PBaLnDWngXYoAB1BFMUcSoX9DmFxZpECfLocZegjwUvFP1acZ6Pu",
  "key46": "2Beq7ECZ5g435p9ooJEG1U3X4SJQEWa5pP6XJsz4Dby1ZBZDcW9dWgEnR2BFo6BEWVPE4Qv6onyUkvHKLWnaA8sq"
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
