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
    "4BWVrMdWEDB3YwM5GYV42mG1JEVwcwFe4SZL5ccFmfts3ibWMUWuBy3AGLMXNtdLW2mbKAWsSeMEJzxa9d5hpkdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Scwk9anbJ4LfViGwMQv1dyijdKf47SbGRbfGtUSrTQTET3YwVsgMrpYuD7RinEdMQe2vaam4VutSxFX7vU5k6ZP",
  "key1": "2EZzJKT9h3zn4Z2j7RzDfF2wppUtSsgNN8gCywod8kQyLm7ueWRU8Dad35VtnEC5i5843moQUmxf4AwYi6tY1H4N",
  "key2": "2bkm26MafHQ4ZHDRdJSosfQkZDHx8kHqH3ng9vKUkBYXXvbs1gZ8wM3aK4LGp5WNctvFb9ctZ7zVkWmVhZ4Mov9p",
  "key3": "3M1DUiBDDTkvFqA1fxGR3NVFVky87EJWWszz7D8LQ7PasPeRpN8yQehNoS5Rs1C6qEMjDzCj7Js2DBwr7SE7Kb5m",
  "key4": "2Eh9L9TyU69ytLTWNJoDnNCp1A7RdrPr6nYUg9RGmqW42QZLa73vtAM4BcpUbKVrmjdrokrdC8Pmnp2YxxwM3oFP",
  "key5": "2nsvQ5h9dWoYr6aA5TStVpkcNJC82XwyPH6bGeANJVeBHQb2w7E9NgVxAfcdmgJebkjwWPyLchEh4RWGtdvZWPEk",
  "key6": "4SypxNgyBwGemC648bkSUWsoPUE6WDuhVVbSbxijNDK47cr9gDLAjyiyoSyG1g1S9HRJRn9J9ja49cxJy65Ytc3y",
  "key7": "vK4zLVpUCypauNnfTwjELcwTZPcYNpYF5cinbKwt6pXURu2rqnviq6c4cuTdQTrxmUc4DBmCDBY8nd8rsX8v3ox",
  "key8": "5H2inZbfK1dTsQEJEbcuwo3Cr98dYpDge7azntt8pYdMaybugXDUFUfT98LgK54zeL2nEdrWf3XEVR2F9hY1Lmsq",
  "key9": "4kEBZrMKk2YJqPbdJaShFuknXygoD8tc7rbmtum9j3bHFRPtmfs2LZZPtdd3oB4jCXY8sqAX8jRq3GQmYr7VQ6HH",
  "key10": "p1sTdH94AoHJW9XdFuST3Ga6qdrPyseYyU6L7JKpP9UnN3EwhGFwS2n6CqNzFqiPs5yC8WNnH5adkgu6ouwBS1z",
  "key11": "7iUjPTv9wKbNnmJQmPnuYacmULeYUjuLq63v1QALv28o41NUJ1i2iyGmYd1Cno1VSicArRwe3j28uEr7CvPjpha",
  "key12": "5DtrmrCqRwBdSakk491MTR1XNghTo2KHNJPiu6tX21wPeh8JMWFcYJmoBM48VbRBvyeYrKpAbmPwQ4QGDSSQRRqC",
  "key13": "2sRcnwB7ndJTf6Hi7UtBahQe3fH91EaY3uuDBK51ZidJmyaGeubdaRUQ4rDnPTYVUQpekFHvc4TZZPcKcDqTEv3n",
  "key14": "4GzMcFuWWRL23tQoR5pv6WsBtNndsJGYvoaesnpypUGFBpC71fZERj4konWivCN6AZnNqDqr6mBajsZBfrPvvmDz",
  "key15": "3XfNzAiHSyr4TN61tDdxzcL99WqHEtgzrqheRLDtDPYT5npwy6UCgKBojqMn21kAfcQ6nXShyFmcbM5gcy6cPQkN",
  "key16": "2DxXQEbcH9wqEZqYa17n6PXZUDGosq1iz1tV9MneSxLpnvaxjBRsAdYcNeEwcBB6BTf5bpj18kiy8urAXTGSzm8L",
  "key17": "4XG9fVdahN6qd6wnTosxq6NBzkbCWHu9sFZSF1Lr8WaRUM5HVbK9SLAydkUr8BWjfHu9poQ9TfmrtvhUrxCGQf9b",
  "key18": "3b5zDWMmsmceyuoB2pCEhcyF1W1AeoZezAyyo17oCmBBCK5fu1B5JnNgSB8b1Y3ez9MLx3enzEUfhb9PFRDRv6sM",
  "key19": "3iWTBRv2kK1bRuDFThQFLkXDQ9WL93WJJzHJVLrMpFn18ZGFWrr7D9KKF6gbevBZpK1zGQW8XWu9Jvh47XL2bGRG",
  "key20": "3LSwrq6QnaRgbQTPEaQJPH2NbPY2AztZbxm8d3budaoWeHgQFv8hzfVzKj46hFeRXGnjL884nbaReGYDd15Zu2mq",
  "key21": "3XHjJPRHUhx5wXnssuMwpjLeWB858EX2RHGZetHgRZTZNdDqEFhYE3uiSX7hgPz5QPyHRA4NqMCMxV2ByP79XdiU",
  "key22": "Ybnnxy8EBubRNzzUjwFVE1CdCBPDg8FSNwzVAUqvMwtT8ajMbuJ16Z6ZnpX4e5NECYbuppcy9hPava55HGjG1oL",
  "key23": "5KMxz6df3bWEzpJqU3WDYJLvmdEZYDRe7JU2JHpvpL3LJg4uJJExhy8GBA85dw5Udcm3iWtnivEBTKpUrSz6j9ed",
  "key24": "5FqpfbJBZMswbUQmE88CNed2BnJKgVKUm1LirhFyQShShoBtg6LV44bVf4HjBSD6CwouWTRsX6DCUppRJFhFMrhV",
  "key25": "4TXUKwZrNQQCJ8ryBksaCVKmqnzWy76KxfBdeA5YGzpdFrL3coBJ67mFh2mLBmP1MsXWAWphftJKRKfE4QeD3yDi",
  "key26": "3xYDBhvvfGzQ1jCoNBRLEfCttiaiCAzX4MogP4HcMmwNNMDXv4sQaJT3PhtnankZLzWmsyVKdSkV4xGhZUF7FDdu",
  "key27": "2RhPPKEfesUEjeZaPtLSxNAJ9PgDerJDBNZ4hqbMYL31iPixegYc4T8yng6X9vZwV5jbkeoZWXyvHiMANM43UWAQ",
  "key28": "4P81SxdhuRC2mc77KZEJQtKjbR4gQjQM3LmSAXB4f9zwnTcBPNTEuMwpRYvA2qeyGbvyhcoPHkAtVYemstNPPtAa",
  "key29": "4Xv7bvHL8qKUP5uRZyC3Jm9SS1qcM461YbHn2HSuQPozg137dgug1TXYNEt4Bvdacvz2dkGEUecJ94QcE3bciVoF",
  "key30": "2N8gWPrN1LoS9rBzzQJ4PNo4HhqpTw5NZEc9oEQVNWAet6o8ed7jtQt9QGbo4wQW9qHStW32cFQxtPP7Z2vuCVL3",
  "key31": "5oU2HzruApHELaf5CLpVo8yYVEegsCrMmzvUC1Cid7Wr8FGJXTeS2W8FGsTZRAUt6zoBgrCZMihmhZHyfZRspmzE",
  "key32": "5yywUT7Eoy48EntTBiDe8dV35Y1idvyaXPyAn59FWWmURjsQo5UMqLMvNed2cDus6BXAe3BWEoiwNJUt8eMm65Kq"
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
