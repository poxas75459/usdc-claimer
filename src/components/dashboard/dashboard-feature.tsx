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
    "5KbNFc6vJuCF9XvuNcg4fLk9KaYZmg3AemqhSWNjArzAL3ZiuTiHR9ZH6aqEojAp7BzRRebipnkAyyWhMrWgMXUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WMYD4cJoHsGYnWaBsouMM72Kn9AH2jzMXEtuM99C6APHkEfvX1ZFLTDAgFsgoK6goMNp4pHA1bWGTVh8BUoSFYK",
  "key1": "bsWX9uQ4ywc9L4uyPxT4y7rJ5vCxTaUj9sh9gzwC3CNdhRDVXsErQfgQdr5ZnJ6AQLiRgj4erMKtBE65UfXQxck",
  "key2": "7CmLyDWbayXhkEnXtc8K2vtnLSvYBymPpuLSrB4t7HGU4ECkAmGbVQksDi5cGGGNKefyDuoGKZVAwwuJHA9V2U5",
  "key3": "55NxtTPZnQAdC14MCiyEbwFCsjhSLzNYEdVpYvghVgV5uatZViCtAP1vs2w5JGcf26UNSjiyQYeoPVFk6CdGcRyw",
  "key4": "2cHG2S88sZh4xCVBsLSf5PZhZytSLcXgcVfHgXGcFLogPg1oftSyjCQkZhrP9oTE33MuVQJhgyF8UfXekudnbXYN",
  "key5": "SaPbYLVTuVBLUEjJv8Ly4TVUwwQ4tdhqWrnxwjgReXEr8ziHJKNG9zXFD2qdZfrXX33TnDvojL4aR84VcpHq7FM",
  "key6": "5uuBRV1qCZSkXvesJ2EiXG5mi4YXAHTm4gNBrTWvY1hkZYDCATapGMJ1mZzudi1yQZNc3wpgHS799cBUJUa2B28f",
  "key7": "45eowhxcbTtfQCmYmneoU4fZC5mJeYjaZcZWwJATpM2Ez5cfh61XnDRCm1BA54od7JuVL1hoDjZ5t1khqchPnxfQ",
  "key8": "51M4MyXjteWieN4zj1BYsNQ1k8iS2WYcEJGM3b6McjArgW1h4VNRyxFq5qnNoW4DsszAuv7A7Ku6TEr3tMiNGjB4",
  "key9": "29ByxR1QL5XV2hfV2kwcMwQri22NY8ZnSZF3aQR9nxrXBfAH7J3ccKyxqpsAkNBE79rJSyHfxKtH3UuNSZYZPJFK",
  "key10": "2qU1UxEooMTQRiyWYCHbzusaGU81WpoMPdW6sm4VLXaQZtScLYdUTH4m2RwmrqxDes7d7PDhCfjHsMBg65UjcN4",
  "key11": "5kcGDJYiwZ5iDHcguSStV1v218prMFPFd59gNMzC3SkBp1mhKdfivFs58mgRkEs258WA4i8t3uAUXeg9o7LHZSgD",
  "key12": "5fh16rjao4oaMM2YsTyDtQTw1v4DrPzuKPzhrzLoHVrqZu4Wc2ccstJzS7M9ridk8NHrNQBauZ5QbF9AiJE1nS92",
  "key13": "33EosvNFL2ip4UA4Eop4BZ87x4jG2hQKw6mxomXgYYPZ2XFZaKkcuU297vkxSG4jPFN8tnb1JwXJjmrgrsSR5z6z",
  "key14": "4trYJ14JTjxmXFayRYqr3S8RvQDbTKEr6nAwRsuawftWaemdvLJ9FZ5NgQ6wUx6y9ZCjVdFXvCDXnrRsQ6aJbjsN",
  "key15": "32kJ5AXqQcM4qu9QUTEnXM39dCJssBmhCXJDVZEfjXwQSHk1DpTxiDaM941cmBYk52og9gj9FfeH1v8RXudskJWB",
  "key16": "67r6FcVFuCEwVy1F4e1ZPp1GmNNKnFvzFw69TAY46bQkeMvk6Kk44ryVa12W88x5niZZoUC9XP1VSfm4dPpmSn4v",
  "key17": "4UYcGZ9eWDwE1eaK9RoA6tF6ncNtN4xLsa4fMu1XUq2trUehdFLqJARi7rMrHK1kkHg3zqmLme1abfkhuSiomEZH",
  "key18": "3WXDsdyWjue2mCxzHiRmz4FBWmuB6YEGXtysDmyRpDG2VJuYwWCdUSEDF93kcYLsohuCxRPmwrCprUAN4gkSkjsP",
  "key19": "554jYoU8ra6Ci4TQCqtAG6Tk8P8QmqqcYBAEAWEkRAbdxUSto5ezaewxyJbrMWUt2xygmR5VZKDmJCEzuzm5H2AD",
  "key20": "52Pc3EqKxoR68G6QW7DgC3XKws8hcD9amvZ6zd5Jwpn4VNjCeGvWgsDF8Tvui7GL6XQ1hQZ6ShH1B4i1wwVXDtMh",
  "key21": "3SWYS6irFZfEj1zSy69px4H8spMBhtLLCQSbxBW4fWWf2vedLrpoWd3j1kGJhVrYCWd4V832ARRfjZ5W6JW1iLmG",
  "key22": "5RgHLbzqJqZLDWuFbGkEqkw992fv4WjkvYwvfMZWscPiyngJDDAK5NdPxYoTCwZfTJb3E6Cs3h5NaJZ16d83PAYn",
  "key23": "3MsQRbmuV8VBo8KBBWtGrUT9wa5ervWxUGpeBgPfzAHQN52RaWfnThaNsSHHDDBFDAePJAxPMSk4qhbXoQsaMmDs",
  "key24": "SwURMeNeVtmZNUmwCoAjv2FUBWC7wvSsGu6kaZWv8ipeoAyVVDjc1vEH79ux1CCZG2piKLuj5oXkDXAdzfEpZVf",
  "key25": "1b3VmJrXrpwcLjbUvQGy6jCXHGZg8pjkgMbQGspVewVmG2CGimSNjFEr365fzDprX1mZNpgGW1r4KNDsrg49WLk",
  "key26": "4szMKpYeec6KdFsnB8HzmexQWq7wtuNTR9T2su9JR8UzZ6r8LmHwb6AcPqn4WBLQX1tuSiSc472FZHxXMEy6FmA3",
  "key27": "XNzTHCB12oHBf4T36RfsPNbk9LN8GZWNnEhYpYAX8sxEufhenAaAR2wFpfcsCNSHGCV7W3dYaNHUsk4HmUwuZfN",
  "key28": "5sZrm7N7NtQ672PR3M1YdR44JbRELkhJ6Tpa9XGTkMKXhRD4pUpFPz8wz5uMqj7EXqkfL1aqciUX84JsnSGZ1EKj",
  "key29": "5Qhzom3itXE1imoaLPhyLKh1Um2ZhDEx7RMLay2Y2Nacp9Vjj2qxPDpWQXvB6fJkVcV9gbLJHpaFZp2wfqMzWL29",
  "key30": "3h3FXcixfYaxUdK2DBx6C5PbbhNxhJVc6MqAgHtX6Us3HQ3W1SGitQnypp9phsDhcKHtf13hNB7vrfJqabaa1VRA",
  "key31": "3cJN3bGjh3C6VbVUtTq2LeGotPmA4qSams3A3XuNR88QMFCoWnUsUecv2SohPJNfZn28emQFt1tFFNXnWyGKEK6d",
  "key32": "8kJWbgchGLPE69MB4e3nYwxMJmaZ5VCKfHSUcvHioVmjeT4Lq2Zs9Jk3kRPRghaBeFq7xpq5MwroTQXffnB3itF"
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
