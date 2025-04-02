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
    "4gMwnLLsXHpcj5zuQsRonS9DL3EirCvPSSMrJX6EQkaNiYtrRfhCfM5m1JVe1EfYaikUgpRKtJ4kkRvLF9PBEiwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oKrCUqnY2VjAkvzQcgikD1qzHnv82GGSxqDFwpUSqS97PFVmC8J2Uh1aM47bp7AtdiW6LcQbAWmxTNxtnsq7mBf",
  "key1": "2jh5rBXCuHSPRJKdk94dZDDnysnHkSq45Uo9jqRDXughaBHgz9e5i78ar6ppT78Sov7hLA146buLNn84aKopwXBe",
  "key2": "KEFnpzA8nXDs8QbiC9EGEJPCPo3XsX14a4swP64Soofs98NqcSAHogdLj1JGvgPrd3TMWC75zTh9hfxXyqEBVsN",
  "key3": "riz9jE5Ufa6mU2mzkKrvCHwA9uQhNnVN2rLk846PTLhPAyNofHMWCrjEzKSsFUxPEhA8qac2Kv8HHK2owc8oREC",
  "key4": "2cFRKyGMxek5avYtyMHhdGPbwNwxmgg2DTLJjLnFU9kpWVAkUrGQMQUicS6fSq6fCoLGrwFNepVpgRW31DUGbzKT",
  "key5": "FWnvkPucMaaRiGBTVY7tBHZ5R23iuRF96eL5FKUT13fr4qWkxHugo1bwT7nc7zLARiYyA72XcYv3BT4GD5mddJp",
  "key6": "24TchsmgraYfTPfNEm5akfNHPnYqSa8ZSyDE4eJe7AVYHVibMEssHYHkQHZKmr6DUuWfJf1wYebtbZYSoHzfbF3E",
  "key7": "F3zHTovt7229ERtaBr4VckjHmaayW6y8ca9bhri1DHwZvwXWYBSA1PfScbuS1cQFXMC5bbXNb9cL5sXU7fWnqEk",
  "key8": "34XinZTFuAiq6WPyHaA6Q1ycwy52j4yfPdHqg3ftCwtUhBACPoAntMgy9o6tAN96NtuatfD2SPzK1akqdwVDUSXF",
  "key9": "gDBAnjSXevAUPyvZYyDTszviU2JYZDpf5WZpzqv54YYDuh3xivWhLKtrMvzquFJ7muiDWBULkCHKf6iZZeSS736",
  "key10": "2jGM12LF7gHCBmCpu7zujvPSGoLriGNGYSYqYqtHoWRdRCCF4b4pFT7nJqiW2cKecjn2cVq5VmzyTFLRCmjoULz8",
  "key11": "2Nvxcjjn4tPvtzHopBbP8qdBy274soAhx8i9RcZHkfevdk8onBV64wFcRXiEoZ77Uxywe6BYPoZqzanVQuc8G87N",
  "key12": "CS9CCwYyXV1ALtMibVtUqu4SicdQaptxVWbcKjhtgyuAynZHdTfTqKN4BGcWFkQKWWhgvAruhzP5nQQ7gpGt3XB",
  "key13": "JahCTUdHGfJwbnSySiqSa9nnVp1CctGk6SjQLzKoUxXJanjdnZ2GWcmgdP476CkNEknBYjAduTxEvnTiqmVXz9f",
  "key14": "5xiYNfS13yuKHssgTUTqK5BfiQMJYiZRvKvkGCWkuodt766kdf3aWsxfqawJJvrtfGk8LaaKGkQLkBV7fmQrhsyY",
  "key15": "nAGuH3tnmy43qWX1SSW75VWkXPqMBcYmPixgJQQRg6Woe8W9QJRQmoLDMo9Sqz17iDBJd4AfRSxvAhdkLdWDcHN",
  "key16": "2NfD7v9WxcDpPc8pmeHUbdgwiGf6Fdbjg5exWfebi5k1mFRGcGpbJHm8jXzhBfg7Dyj7xGRUzNgSzQd1ahYehyaD",
  "key17": "29ySPCJgfi7sXGjZcXZwCsXHDkR6iga7AQusyEWhANrB2QoPwWhJvc2uoY6dLKkhedVpArasSpxFYdeGZ1eVfqN8",
  "key18": "vnwfocajwtVWFR4FPFm66waCFQqrHLUwESvgKtweQwyUxCaVVRCdrMtFjmCEvQWHcy3vsTi8YWW43cQMsE6N7xh",
  "key19": "2kPz9R21QmP3H7LAxPLNBLdLxf7u5h4QzR6G3jzph1FLfae7ey4ZG5XcSSLDQdTeTv4xVZdRAcbTtbkjjjievMdi",
  "key20": "5umJ27Gq1UaXuXta46uBz1djQUGKfzkdf4cEcJ95oBGDu4VyRm81vYZf7NxkRQTN6q5auEQz57bwx8wNiJsSyRrS",
  "key21": "4GfqBZZddJKFeLTzTULQ6VN8PsJgENeGnRazHx9VWXStYqPB3RqdiPsPuzwWo69qtX2KsmJLx6rDDXSro5i8sQSD",
  "key22": "6KvGGJgBa7G3fbV4N2yq3WyKkanevTvt3zSoo68ooA75mUTgnjDEsvGMizjpVk6LMgCsRcAs3yn28iZhy9AP3td",
  "key23": "z2wGWgfrBr6jGd67a8cXG7pFAhbizmMu3oRUdn9YhQYjWoiKk7XfUB6G5NvkmBkV314WfyKJQRSAr5a8iHhPt5J",
  "key24": "3BGgQCPJq5xxVQQi7wGeFG7JcvxxrEu73t2v6qbZJCGek8MTVW1d8Z2zkxP47vch7sXxEjkZUccdr5VjqmjVfcD9",
  "key25": "VMxxCJZcHxMDD2oLbgtYWRuxgKtAuEGcehwhkfdUzzLEn9fsms5Uz2PBBxKb7qByiPPdFS4FNmTBD3fgHRekusu",
  "key26": "3xvsmYyD9bf5fGHc2kdLc5FYUHxb9FUobad6b6N5tJdeemiZT6kvNAbWCd1TVr6R4p3fLa6RVATpFWCTvyzFQzdF",
  "key27": "4r7gPQQZcRRQHdLRUSfpeej7iYftF4sQoC7stKDjZVYG2kfpoVeNDRhzHZYtw4FSn41s7TVt2f4DmKxnyVbxgHVV",
  "key28": "225ZQmo5jypYTmt6PQERJJ39wKEXZxTv6i1ZNRRp1K8MKwAQETAksHg4NuAyfDWLoePVVbmGFzgUJMh9wYE74e1b",
  "key29": "4R1HuCRaugoewceGUBNgoJ5At2crugbe1Fv4NP3gg5r9WKF3W4mHTQbLj1fCHuWwhx5CNSz3yFN2AzW3B7Xzd5LS",
  "key30": "42Gy9bmpn5Gt1bad9PGjj5kxqLtFP4zhHPfEhEEhtXQUbRe2Qi5ptBRjusbGqwVsPJ92Jw8GKnK7zxokgyP1EN9D",
  "key31": "3egAvFx7n5QbESZypFHGxxjgQ2RoGFx79jRonkXNbi2cGEDiA7fv6GB6ziWbvG2Gv7p8gdYa5RupEWA2KnAX5858",
  "key32": "67om1nkfsg1MLxm8jvKJwiZnUC9uEF61Wu8jN8xr97m9hVfA3jRsWrZujhSMXGMrZRqzDmNYDBN7zqEPayqR2QQx",
  "key33": "5Gt5L8ajb5Y72zc8dZZdhz7q2N5QvdaUMXpdS6Dr8Qms1ckBuV5RFiKuXcejvqapJXurVpDnkXPbwSh1rFqpT4u6"
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
