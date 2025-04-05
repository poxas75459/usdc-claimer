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
    "4mXF21SgE1RndqeVgp6k8sMZWKaraBk6JcV3hfCJPekA9N46ptybbG48RhUNWxg5u1qwkb6XZxxnVA2swk13CQUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZyZhcLtotsMzfNfaehZu5DQaAoumBqgTjRxFpVcUWJY13FQ1GQknAbQDJUtDvF6i5s3VDa9BdZ4zMZyfbMDzsG8",
  "key1": "33sYqVWgYkv3zSWwd9uhBeLDwsad6XbCqPiWpEoMDDqb7qzqux2h912egEVwY5vhcoggFHH2Kat9ZkGYyhwrPif5",
  "key2": "2YaRekAgoaaYj3cdWBoMsqNUEuF1iHMQJhVHeTcUSRqfbSNZtBfGyXjipAEtB56ngf4VoGocrCKPXGSe3P5mFziq",
  "key3": "3WAdodrdZGYaNYww1UNg7L7BmPgUzv9oareyhreUFKXSyRYtfjfuq487QVtQFNHgPhfiraVvYeuaVpChK3UgyEqp",
  "key4": "3XmTvRZxxTMuWsYtT7zQ23eBdPGUmLCba2EQDDU8DYBbKVixu75anTzTAgLvoFW9bW1CjfLwVKzm3dng18dYHbTX",
  "key5": "3vmYxYsfrfpggGNTftpTieZeiZiePGKXzjrZUg27WtKnWWyc9E5bhTy4Lq88PeXhnpZ47AqGBgQ9TUpveTiuEwLu",
  "key6": "3BLrVfA5WvZ7dS2QodpPqpup8o9jxRykTRWsr66C7C1tzCGuui2EPnp5esTX1fTq5ZyTmwz2ZVyGTipAz4sN1inL",
  "key7": "VVt92BvsXD6QaArbA8wKjztKwGtc4Q6i3Hsb7E7RwpkxuxyZZZBcNF1bJrh3xVpmzuxkVJc5Uj1jzz1Bv4HHutK",
  "key8": "5EPLq8ZroGFEWdJFe1DXo1wMxSBYTLUQjoC1JHyz8LjnRuyMYYnpQfVBRnfQo6e5faADg83B2NzeK1z887VDTxQj",
  "key9": "56rew1xke8BM21STjbYSCWMzCwPArg7ExexW2zZC2nCMEjknyFzo6qS7odFZtJmn1fQPHbuuGXvHquenPCWsGZ9Q",
  "key10": "43BzV7AEDFARk3RZmwjsaMPRThVcQAr5QMSuWHNo9YM6QpAWBuPBmQA7MPSKJSdCq8vveLiGwBzzZHpXDQpsVgox",
  "key11": "5KTPfrWcCBVqxE9We3H9CefAoRLtMow4Uw3X9ULRESDEP1fYbHxqcnDd7hDBuzatKSNr9MXDF2exkt44eDyjNaJW",
  "key12": "4qohTS9Wpd1qmMiFM1JwG3ZWKJWNpQeCvZ2Jjfmqb16MSfSpF882piiFZnKmX8qn5jeMMJJQH75dVAJQ8RGwGHF5",
  "key13": "JwJ91oHHB4Gx4vdJdjNFL8zAyDCozv6xcLzE1NRiYACDNd5qyeeMtTNLTGeEGmPzYoKnkrA6b1LvLkfcUQZnKJv",
  "key14": "5BMDJcRbZL5ZTE8X1eFLDknrfWmBDTdNwb5QvPr7ySscztcx3qtfN5mEzP3KA3guctr7YCtT66mPFWUyLLGdFken",
  "key15": "4n3EtYjzHYhDwFCvbejD1qgbQvs5t6kGbUsVVhKykbRmSiEoUzu6mqp8B7ybAFWu9WzJUduGfsaxTBCAiLK75WdL",
  "key16": "3dbVWaGbHgqJQsu8W7BkBYj4jgT8G4VmZ9dMvwnPRiG1cBhA3GRHTXKvPMDs71B6cvWfYHB5HqPCVmJvoWEb5Xff",
  "key17": "4925bHydqeZnMUB3HPpvNm4x5em7GkKgKYYoBdh4XKkMGv3r3qDnJWMWEx1LuvxRuqWzTGjCKQmD8MMxo1aXaKEr",
  "key18": "WZccFwNW2khXY1EtDhtTTcvQRbZWogruo447sRJn48Jb72mroNSVtXsZLN7pNvHgQgPrz2wBFwdiMpCDPRZy87H",
  "key19": "KmgzD2aAz2BQUPzbRmKDugEMKWWH2pgDCTS3m4tZpisxithCa8QwmmCEsudwHea3Zy9te6vigNZEvj8hk6eNDVg",
  "key20": "3cZwL1vz8d4DJucgFMzbbxLyc1WkFvTdH5hZdDfywUN5omBCEQFhJJVVuQwGjyYkZYrLct45pkntPrbDMAJXC1jM",
  "key21": "3XcQDMA57CKkLbjwJrPLZWftn12vmREcz4uNLvrtNJpL9ePgYdqtLoJwH6FSscxtx8URR9a6qrHN53nUM4AnboDm",
  "key22": "N7CbFQEYRKNJCrKPE9H4ex7wtFqbKy1oFtTgapB1gN6k3DmW8jS7Hqk2vLpjVp4LCVEJEcHGRv6Gi8fCYfKLA1x",
  "key23": "Vkm3b4jAkZMQh24iXFo4pMuQCW7sACjMsnSzh6CitfZ67AwtDwapDuht1Af6EUfuo79x6ckK71hKuiCCDj3s34M",
  "key24": "52D3gffhmfCB9STLd44AYrePeHfdH8WdS9DoKUkyCfvANrmFJJwg7C16viBQeCJye1ip9DWw2ZHyReVoFenzAAV8",
  "key25": "5DAxhPGXiSopX5tNkGwd6zfEN5WxMGsLrimRoDzBYttMrnqLZiZs8qT8GJnt2uExRpLJfmG6csSuzjCQ5wJtcToJ",
  "key26": "5HqGzGrE9tkYNCpogr3eibpBu7HtrtLoaihR2j9VG3RWmhXbDk6PQF1eKP7Gmhae4VPTPSMgKxg7rhxfFD8dX8of",
  "key27": "2Uys5SBxzHhX4AQa2H7So6pUw3m52v6fxsRiNsDwvSKBUfC5nN8Y2wPQR68shMD7QnswwGGMLNMFsqeQkzadM9He",
  "key28": "GEiHJKNDDb2GiPwL4KQLYUqW4JrnF1WXj1SMyTrcmoeWfvmW8k9mfrWMJCkfr1cfRbeKpT2b4KUodWNUN8jVQCy",
  "key29": "4vc6YMsXcdsr7RPqjDqXmWJ51ysiuGn2PLwmxe66sTA6Qiy3dF6BULfpvLrwJR1zYGqkNhTmYfroa4RbTVCnTipx",
  "key30": "5R7e2mjNXoyxVM3BUf9T16vuC8iaGbqtH7zGiJJmZxNqUhr4PNdFd2Zsk6FEjXCPKcGv9pZ3B4pitfwYzsYrxRJv",
  "key31": "3Qbg62SDGkAnQVvFmQkptaK8b7WDtFa2VthHcDuQSWn4ydsXsvGCxHPReJbMih4rDVRKuZarcJdRsiD2fuoQRHFy",
  "key32": "2BbofoDFT7CKvR8gvT59hnQZuBjiAMKebH5RnrTv59TBPLfpHHVTeLU49Ht32T7FVthmxXGyDv6gJu13RkacrPUD",
  "key33": "2RcSPLdXdF6qDdBKGmoKH9AxJjqtP1XB3nFPqMGPV2iv4B3dyXd11wLP3qgWyFzExY7UyR6Wap1i5uzmL4fnMN1a",
  "key34": "sCkn1EweNBLE4HeoZuh5etWStzGU9uBKYBVUTNMuXi4QCZDwUAsW8ox1tp7EgqBMZkzo8LDeJGWPvrJTTuKsZXi",
  "key35": "4hgX8bc6dnQ5FfytgaTuYF1pVapMQBsdY52wFhUfKHTJ42dJQfw6DrKYcjguVvMwTE3AdqLWnyH45KFuKZ5JBRi5",
  "key36": "2wNWZaE49gJMw3Jk9MY965N1jqZWvbqpCwXqjhjoQmL8ongy2oV2XuRo5uygJFWZuQgY2vVuicrePUTADC31Cz6R",
  "key37": "23dHNHBwbeyEjD6fCHsS5wVFYGXeWhYdLvXCi5ehc9mGWkP5YjJFWBtXp6dkCRH5f9q2UTXp6QgtMh1ornBMMVdW",
  "key38": "3AUbA2K667DukCJswhMVpiv838PnNMSxfYPDwkdT8ZYMGjNHNSejedP84ugt1YbWJJs6esBcLdGukd5L3EgT5dx9",
  "key39": "553ViRPqJVGpBWVUWXchMa3LvUjeikdPDYJmN7ZWVqyjxyhfia2foE7xazjokNtZX7gCshr1u57sybwPFWbZ426Q",
  "key40": "5gGhwe2rAoCGgiHwu7AuKMHTaj79aVgtTiHbrNMAZjFLdruPHVdMLW4STMrF9KgcJnXB5AmM5eikgq2bcWH5rYZV"
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
