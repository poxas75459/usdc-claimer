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
    "3RWMpxnFUkCJeincvdKpbfVT2EFAKzfoZuME53PpHsqRiFF6vMMResjW6UD2eQzR9WGo21AroevuvLzgm6fWjKq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7zxvLRv6AGFTqbGCsdoMjVN3pLynQjYnU3yA51t5dVf3vmQtMBVNz1ag7khTWQuy19k3PmbNRfk2C7oWPhGmYt",
  "key1": "45nnmuuBjKdhswX99kGJuUZz3FYwtshtHNZqbQoeJjQ3GYZuyXJxEdvk9w3NUitqyzUEojktDx7otWsLnobZGXxw",
  "key2": "VvkCMCNZLGztUwJq5pBL6xdi4YjKFLo4PK1FWFg1F9qxhxqcZyLxK3hgeov1SJ7JV7Q88PMh6KyuJpwi6yuymMF",
  "key3": "5p2R6QJtFwyazAXn6nZJvb4qyRkx7puf7MByktbdmzncKTPybvW42SdFYgeHXm7pZHf4caAKXsPSK76bgYBAH3eD",
  "key4": "2Z7fXivPg6WTa6Y8Rh7fJzNUhpjiKWkCunNdD1D1s59YCzgjKs3umHeCruu9csjGsWmjkwTXiHZAS4orGhhcWXXW",
  "key5": "21mtFh7z5c9qaUtvyjoadTPgFB8F2YiVes4UXC31E9Fn2933M55xw5gxADBd5ttUJ74TG4KC8di8xW2Wv16ssMAz",
  "key6": "3VzpyMMP7kC5PFeQhDFs2pAq47aQEBzsJz7brrQsj4w1VP9nXaip5sAfFG6Q2WtBmGTgHG7Zgc3dbhTtPaEUB3VM",
  "key7": "4iqpFJEEC7zSNNuDrJFoL2zGDvd4scbCjCk1JFE1tkNijb11p6Rf8qtnsmAzjvfLKWoxxaN1H26csZqtFPKntome",
  "key8": "293RCy1gend2nRUKRx1NYu9ybxMdpDwHdRsaDwA6pbfPccxZpeEWSYCU1g7gHxxDKPVnotGPa9Jb8JiskSM944aA",
  "key9": "3x4VUUW1i75SJVcTocvd4V19Z8BZhamWQBkdxMSkoZZQKk7qyQdbWT5oKBqF5K7EdeZPuK35cWZFAyQrTLddsNCD",
  "key10": "5qiqJh6rc3wWjcraQBrwxy3ZdBK2VE5TtFfgfUYZk1E6PwUERpywmLG26sgqPjgbtSU38smoEgU2YASEXiyyDaYc",
  "key11": "3d9Zz3kiGzye4uaCtaHBg7zQmTLG8iFHrfME2AnL1Szy2bAteYXZfcZhwkeSZvosD1BhdPm4QeQ2JCMLoRiPedTX",
  "key12": "3JWaJdtkoBbvK8ZyFkyrKqoogPHAU5fWcSj2jfbX918FEc22tUYKNhCFDXjPA8LwdmjSx3gCwAdyizXY4ZTfLkmi",
  "key13": "5eURAkfXBMEbMfvPNxorMxnvqqv6xdAJVQhJBBfPNyfCbPWUj2PSFQotGfDXuSAASfbWiei8NyGNDXQfzZGnTAeb",
  "key14": "485GeXBEcevCTySVbaAs8kbDVewJHU3pZvYdM9VHRf6HPDfyURFrwdPAVzyyGZagxrKcXffw5ky9rb8oKaQK32WN",
  "key15": "3GtqvpYFJhDdaPt5BYXa4ffUn26Gk4nDgDUPLC23T8eEWjyLBpL5wtip3YkiWHgL3RpweyiXpzK8JByUoL9KHBHt",
  "key16": "2vKgAJX1PwKcPAnPACgtwRpV89DGLCuKgNszmRRerCQ8wsq2mXqiFTcuAtTWeKDufbBwEKFPAGE2QBDj4Dxb97sc",
  "key17": "3TcrGfhWKxU31jSu9Y7BDEe3FDdWnqEvH6MBGnMBsxC1yVqVKA39Zjpi3EDndbRx3ZRe4u5dFpk6S8U8k9rgDoHZ",
  "key18": "3SmRGQ5v6njUoubE47SV9rYUcFth6SpUb7UsgNorsNQZ2P8pG6rtXC7MA91rUUnC1iJjdD3t6QTMSyr6MJMJzzeB",
  "key19": "5CxTwz6kuvnRa7HEKX547Cz6kMtrQLpn6xcaFCdqnDWGRQFSKZWUCEnT3UM8TfLRZ8FbmZxyY62SSo74S7aQnV24",
  "key20": "MZq9YTi7oh2smtWM5sgBowMfan1GuW7YPzVrzboqKFERofJpp8o1i2cjFTDrjHBLuw4oPEBo8VPkDPvUdMRLTci",
  "key21": "3DgTMnuYuxykdcKE6LQgEkuNJcPoubo5kTiuR8nvxSaDXyWXsE19C8gf4eBukpFkUyjMMcFnu2dA8mgXp3UMuaHu",
  "key22": "2qEPJZKVB6uMZi2EHpsdKCxSm57Kb1VJv71Jbm2iafUjY2oHYxS4vnFGdBxMp6NT9TEYm5w2bUEYtmCrws4intmQ",
  "key23": "2doSrJ5qKifXbKHrEBVxef94YLbs674b1dxrAwjV9vXa28Hc29JbfeT2E5GCKf8qxzHnDxdLprbDZFkpq1PqBE46",
  "key24": "3qrTcvQdncXvv4wWsYGdekSvTk9ZehbUA5u8AquLLYepM13V5GgYjSFbFV331wCDX2VxWAfT2L7cntYYpBohrdyj",
  "key25": "3hvd6CoNxmtHhGgpCFfmk5VCGLEBdXxabqD5F4RVoahECYdG8RYdDnyU8por1wrrQsDrMVaVdkVDZe6ZiJe8F8HM",
  "key26": "4tESgEZpQGJLAXMSBfnj1UjeudZiPrq538S1iRgbDrG4HVkGnZvbfag53GA5JKZBdRAJXLZWS7R8SiHRSjv5M4Nq",
  "key27": "2eacYTbgxmDKwonuYRYfzPxaNJkZsqmzv66TQJWHCXVy4f9USQwmkV8mL61KCU1qvw3nSgJMGtBm9Df3RjNWTgMA",
  "key28": "2fnDjwT9Jr2dAvhhMkLW1WQ9jNZqHPEvPWNgSXySdUU2vRCzNszKWkUPGWVWwm6kGdAZ8McCas9qsVwuE8BeGXDS",
  "key29": "2R3yZ5vMbqsXLVs8QRRjXCK1SM6fVox7v4SKWGhWbmsCuHSHnP826oMqscgBoUCh4UT41xrWUPqCT5vTYNyEVbpx",
  "key30": "5esMrRz6yhUxj3NzkLiT8UK3KUS3UHS6scYQFfexABKP9nWFaVFcyEJiJ7rh7ZncGo96kXfwFZcaExoMVD2caU3D",
  "key31": "VvjmAXria2gztMDFegQBeFaULrmu2T1jWPBuLvAuPmGuxZQTCu1CQ2YmsE62H3UH9wUXvVChK956h69qHmfe3j6",
  "key32": "RowZNo6BktT94Vn62CbF1Zy8oSNnHB6GmpU99A6oMQDJoenDyY7GKw9ie9TecYmY7vm31siyZwud59ef8Ufgqkm",
  "key33": "5y76RJ1aJ43jTxXYzznPoHEiHLSKHAtHNjSD3YmXSCjfvAj5YWo6eScpnDx8MwJEMKAywQeFPgWWra6GnX8TCutU",
  "key34": "3C4FxU2q1thoigA1sxXAMCmctiRCoKuUB6GCcxZyjRqQTJ4AsGzaPjXdV7G2kEeR9ybuTyartHZXW1BzbCJGYPjc",
  "key35": "TrPuuSuyQDBQYFkgHuND8vD4zmJ5cFtiKxR4ES53tu8ga1hREvPAcFKoyc428eMuyS6Pmksc9Kx8NbTwqGLrqp3",
  "key36": "2aCqhxchTxbXuH74wADyZ8tYS1NzoeNXiLSTRHYBj31W9wz2ixn3dMA7AQi4re1LeByFmTyegUyYSdrG36QTu613",
  "key37": "5RZnJu63F1ZvHLguMMY2UvnED2hN32Q2tuQbadRuP7LzXoTchjqh21kwmoSeb6wtHyYEx4UuKXKhzZd8Uu6LrAGF",
  "key38": "2GLx6c41we4wZbNqRMETNWTqccoreeLvLo4uYpv4a5CgVpJ5NPkvAMEi5XsfuxzXgkdrC1PmN89SK5G2zW37urtN",
  "key39": "5ALUPxeZUULW7UCbhMF6MbxSEKqi9CcERnNmxsvqonwHpjAv7bqEMS6yVg1ZhvHYYg7nyon7XJ3oiYoPDHsdGBmK",
  "key40": "4QJqyFbuaq5WLEvaWLSNpXCoUqhwBX3Nr3QTM5TnHbnkUAEaK3aycUkZwJarDKrBAbMo7i2gKdEYDuVTC9NJP7Pf",
  "key41": "2bZFqba3RLUMHrQyrgEjsxxURG3dS5B7THmnaxLgEV31ZQLa5J6ZcknQHUssrocow6KBECzuwaYZ4CvUi6roX6zt",
  "key42": "5SVHr8qp25KKMSkcUy5o4FSHSozoDjiiHhgFXueiFc3whLEiifzXEPweFKu4vtD5gfu3v2WdVXdTkr5VMbRwarh6",
  "key43": "3pyjU4CEk6jcU8Jpqy7RctiFVopq9LZv3cLzLCBvtsJXucNGxHE43fBTuLokD1iKYk3iqu9wbkQEtiudfAFmbs6Q",
  "key44": "3QYVAhVrLdpY3dwfaytqNF8NzVaBkZhNBszMnYdnt9vqTi5umpVRrxP4DT13eURpDnznfaa4H9uGVVqXXBnsRTAk",
  "key45": "4VCFBnUNjn3ydFkDSkBdXKskVZxMVjDJ9f75L3MKFPkWL1Q3iHcmWGoh9Jn3a1qVpm2EpJhBbrU5MC8cLzBNxhEY",
  "key46": "4fFdEDNUD79eAzApRtnZo36bc4hgu91vDNf3ZBCzLcnMJFWX42kDa8ey5uBBD7VzWkqjcbD7wEX3vquHHzhvv4eX",
  "key47": "MHv2QdsxE6eYpWjweKUmJQArgidvPwxL92A2dDpGeqyxub2Nism5tnmZV5CtcwoqfmKQL1bRddeLSMrqVTmkewD",
  "key48": "2wsM6MwEkix3DLy7VgftQzBUndfksCqtoszB4cX9op3t9hLuHbam5D3uMNNwnFVhPBM5uCQRLzvGSK6UpuK2jDrr"
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
