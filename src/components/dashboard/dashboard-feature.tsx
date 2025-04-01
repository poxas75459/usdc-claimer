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
    "hGD5WPGDQAgV6pTkVxiv8asDnP8xN3DqYi62SESWk2bfrVHhAvKEXLXiHYgmPPUGx1AixnrG8TUr4Q4WvDhSbXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4or1Qsu4DTSW4m58qFMw146jg1dzbJdNeSvQG1wAVgicrR6T8D94CV3P8Cgamq8Pg36WtFp36nL1GuASZqWCcET7",
  "key1": "4jNKKWMqv3Yg4jrXRMhLPRUHVvjqeK7ZUNMfp3LL3MYQQW8V4G4Ayeb5Nzn2Qvx7snczDTLcmtmxudmtJFwZ2s1",
  "key2": "5ykRbxcf31UKRrNciiAUKkHvXmbSKcDSK7rDTFaC2MUHGWxuV34vRHjszMiD3MobVHFpoyPqdpYUgC5UjX1DFovy",
  "key3": "k2v72XnzZUQBU4ioj7sajhGVvmXhidKEKrYeuJC8TeF56t55X9x9vf74dXT3oJLbPiLCFmT74LABjEEEzwnLiCt",
  "key4": "5joMMLk8qtmKmq6Cs5hBMaEa5uR2xyUm7BPuWW3njaLHDfssYRGc1SYf3wdsid8uACXsjL8kgMo73oNodKsE6wJ4",
  "key5": "2eijW3z23jd9TqMhjqEGkaycH2rXfs9G4Rozb7pM8wvcdkstHbfyAxYkE8kxZLzCZeDegmXSHaPhvjhcVN7dgcoK",
  "key6": "5PhJcWHwMkn7aL7B7R9t5226KWyCEZVFFDr6DaZn1uNrDa717Z36cFpsYo1N5ydBiZgfC9UYznBy18ZJGgXmqmUe",
  "key7": "2QAa7nRoKiMJzFpVKV5f8EbPhnSpqUoBwkyExNrww8Qsd1y4Vn78nJHauh695XSBbXvtq1dzLQmweRMitrWEwR3V",
  "key8": "4pG56YqLprpFoYg7WTPduosXSak4MgF8eR8quEHz8Uqz1ZRDbb5g3xtHrzP5A4THQtakdGJKcJb6g1wS8vednNXf",
  "key9": "2JHA8hhbj9K52purJVVaRwpBkYmcoN4pQhv4M2SsxRUfCFb7rX8vBSDpnS2QdyAMAP9nYR6x9mZbX8TdptRgtnP2",
  "key10": "2bdSuSivKVsoS4oqCFDUSn59914RZLWS6iNpLRsWu4JCm2qWxPEimGbbYg5m99XfS7kUB68sHEQKgojesA7rUpKH",
  "key11": "4QuCrz91914iBhRHpaK37UStCVgeimbsBaMWiB9YxmqnSGfPoznJUN4xbBTyHn3TB1tiDPvJmFShpu5w8mr2iHpD",
  "key12": "gdJ27HvWMxJrnG5jCVRJXr9R5vAVnSVhxC5ncJ6KGzZbXpvHAHgu4iUzbGkv5HK3EfUAgXNqUMuQjWUc14HcQGY",
  "key13": "4PW252Z2VncyZ1v8Lyj6utSJhYRtmDREKY7zDkCok2Tc9Nztzovg1P9Yzrd926kEickwBNgXPFou7DBP41DG642G",
  "key14": "2u7jEKNNqoJ2gyfbJhxZPphe1TmXhDFQdVPZXW9fBPrNW44XtqBHvbEXhTVd1Mq9Uvt5cVcsds6iP31zMoTKWoCL",
  "key15": "2XT2DaBVPqqkmCkoz4WrNEHhBBBPDWzNqvwDuDZD9ySKuVViWXFj8ZLn9jKvx4W2DFuke43k4BbvxQfnHpNFEQmQ",
  "key16": "aiwdJXBVjdmxEjCvCN5f89XaaoAHSnG8iVTSsHSqSUJ3FhbzpiDvE1y5cQSJFo2iTQepsBwtU91tJAdEYYCiU3W",
  "key17": "RQVishTx3G32stkPGKyqBF3auxxCo3LBwMhUh5XBtWdxNDfPf5X7gca6fqo8eAVRT6dNePreJYZHqR8uYkXPWvg",
  "key18": "3gwU9SymYfH5TY9KVCaMQJpDRgDSiSRvZzmUBm6YjuhvUyQcoSL7UT3j965UCbgYzay4CADcdoEmVQyTss1kKvLA",
  "key19": "3Xf5XvdfH4bbJhvTmnJtrQ8dT313NhixvgtDbMoBy4VLjzhwxcdDPd8rwdU7shDBs9mx85xJDotCuhyvU8G72YRK",
  "key20": "5vPS2iCsg65KL8FKC96W5QH9ysRdjyuSCrcJApiXFtPtGYM582DaDBwmkDGt1Fo4zHuNBmgJNTvnBaP7qPu46PLx",
  "key21": "5RPzhkFS6RJnz5E2VDrop21BJGWBgcxRi6euEpnarAgYKFq6ESuoGt1noefgEpiYgVMXuo3E6k1k2MA6yvQnhYwE",
  "key22": "4Qz43nW1yupXwR13Nb9SgfBXdGnRCASLpTTGarjmH7WRG8bVEuaWaBPbmArcKBzDQxsXHVCb9dtgrLggYXKrjbJW",
  "key23": "5RLnJEsCkZ9gu8M5qHGtcrRe5vG9LPujPgME4RahLr2KZKJe5yLsMbBEXzhrgxWAJSAFUJjhBvGcpBj8otG6aVJJ",
  "key24": "3DYCnudpFQaNt8m2t7o3w6pV74uvRSeMP6obn86iRWsjN46eapXQ8UZVNyS9APdca9tZUZSfHzjDbHxJNuwruLQ5",
  "key25": "5m4DuZ84RJxFRi7zgYtwdzmpu9pD2im9Bk4bnrd9V9yGeqQs1rJEZwvWd3bzzHwHzywUAih3cdQmqqXHFVqj4mhA",
  "key26": "2akUGwvyiSCwFpvp5SiJztuWeVZHj6EzdpqXTRXztcT78wdTQJQngo6YwPxLc6rDJcZFwgYZp4XW92rJtjAFZYEG",
  "key27": "2nHbKPV1ycRvJSKrTaE5J7rjVoVEBjazS3V8qS7yHG131DBS8fxHL7bz1AT2rx2vSDrH9WEBtEku4QBBkTrKPUM1",
  "key28": "3GAMWee5LPPbKRwFkzjqAqfugMBHRKzknuCjGm7xCGi6tK3hcnJkxfPemiNFADAPC8p9kqzyB2RCcGgqqJHfHogC",
  "key29": "5VGE5Gu9UUKrwx5HB8EwpwTKtJB2ivK2r2WmdFHfr1k4K6Yf7ggEdtiwBoX28976QBZWJogrReViMY1bbGkCoe2y",
  "key30": "4u9qdW2BpZNj87QmDG3F9vb6dbM3gUxHYGVoVKCAZaYUKyaAytY9LhMpQtcMxrHGbBFYNr7khaazrRW9JsWSn8NG",
  "key31": "4vnQEDQLyyHQHzeBeV9qL6z7HjcFVdsUSuzkKHhvZxSECECb62eut81z1aaqkzRMsGKYbEzMvBxhweR9oXJhZT6J",
  "key32": "4p2Q9wzCPjQvK4PiRYXttLrLgW5aKEac92oCHyr58kuiukJPnbvr9ehPfuNgvJDR32YCX94a2S2f7q4mDYXbH5Gk",
  "key33": "EkrSRNLaRNYJgSNZPACFAfjCp7GWaBYBqFoNmoQYCWTDaTbwbu3owPq96NF2BHkbD2QF9TyiixA5mFk8DVaUy9u",
  "key34": "5aDu9Dm7ZSymbTsasuopJBMxnGURBJ7RQJpBVG9TBMm2YXBB9tKPUi7X62vQjBSSyWcYc8xoQaQR4VNk95E293aq",
  "key35": "5Hx52CvETni4HYdctBwsGC4tuJ3NmZnoTisSc84iikasPq4vJmcMMSG8UHXSDdz5XzJHPo4FerSbyFDa4YRCe1qm"
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
