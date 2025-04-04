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
    "63EqkwPofTcgPA6JHe8XJ1HFdwG8SWLWvVzzFwbqW82Azuz6sBye4hDouNSqJvZmeejrtsTU2ypMaNE7hxhkknCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VjLxqXJT1B3yPTG7RSavu5pcPadmwPBy3q3tqG15TDFMn81BaXNPh3eHTu1yGiZjZxQRwB3GnGK9ZjZDBWT3PXN",
  "key1": "4jAhwijtV179T7PsgMDoVEJCwRVjKg5NGp8UPjUSa6eLkBwqY5vbfU7vdZ1jgHP52Y1jcfSSmtxQZmA7niVcoczt",
  "key2": "3KygWuD6WSn6iAE6A8mCXUWy41Vsb2gr8AV9tD87ATKth9FAdMCFPKute6Ghd7fXsGjwCya4U9oBchPXmVFwXpvf",
  "key3": "2UqNsoMkzAY9UJrNgBivKZ8iKR9evnv5KwEB9kCDmjnYqrCCTumJ4ooN3jjj3hHmcnrm35LQFgnyRESu2fehY92B",
  "key4": "4ZXPvB23ecyGQAuEk65ciLqB2AEdSqVWN5YUMxHFdbnVpsZPmNaDAxApzPQUvh5yk6uFNBmhaCFa1NJVQxdvQhgX",
  "key5": "2nenLzG8GKJW2DDetHKq3r5KvQF9gYdg2diES7VNS1iqXZ3wU6xSHpNba4LFmuQze4pwC1oSnXzDDEcz2AZH4yaH",
  "key6": "4F2r9eq8ynroJkFABPNMgF98gNLPcGFYjr171Kbj6E5YxhZKYVbmgWBK3sENXgJk6eFc4nMt3NhcocUcyKG4PoTq",
  "key7": "3a5vj1rNc8NYFBZw21EBRCJWX5GfhSyLm4gt3UCNMNYegoa2TUyZzGZufxvs3hugLHkkg4bNeN1hah5Qaw9hrVQB",
  "key8": "MoKzfd7KEuE7rJsw7u2akCNwZ995UhwGp5wsYLcLc1waGBAw9ZmWhFxFCunAKpJs7zdMM26q5eT4UsiVcPUcTwp",
  "key9": "3meTbJkU1RcTMSiEFDmsKdy3WAFgSd7rU5iLnf2ifnC64F8n1MWVVg8fqarnCbqKaZ5ZZHTUcYTUqBcouuSSvHJm",
  "key10": "54bY3NcjoXn5uhvSvTEcy1UozCZEnmrNiUYuK2hqmd6zxnVkFaiD1oTM5JRkVS4jVcj4XgQtNQfbxpv8XhNfLouc",
  "key11": "2icSifJWJkDokvJQQRgSt5zdJ3ZvoqNaJACYTyyzsjzdtME9TsF2HCR5qqzxC5szJ56TfQREfbgC6Gmi8RzDUocj",
  "key12": "2jB3MX9Y75Ym25PE95Diw1sB35NMMGZgFbNruQ2JdtoMgvgv6xtwhsdZmNwN4c4j4wpSTHD41h1sGGAY4eeT7vXv",
  "key13": "47iTAF66Qf5mXf5YxYCpvUXZS7Wr47bbDQAFcD536Kt9wn7PHtW3EBeo38GxqpUd8oX7krNw7bfRVizXe7mxAbn9",
  "key14": "4UGbg2ifz8q2w6xXatjuRAn9vapQh4t7jT9LUc7XJxGsDaVKmYScCSuqXg1S7aEG9SHXiH9pEyyuQu66bcqrTzbi",
  "key15": "5t7dT7Uztw9spveNYjFHoP49bndf2spsknisReiFoEpRhNYP5ujRE9f4avtVGny9L2TiiKmPitCeuzodnexBwcrN",
  "key16": "4pPMMVaEBxX4BAcAeeP7zsUK583Q5tsbFN3yfqDhuNuyRN5QKJpdMr15JxEH3prpoqtdXc7spCfYJsLDdznB742v",
  "key17": "nVXVKtGpyk6yfT5RPUsvknfWTpkSXTuw71CtCNAtjej9zyp6BzxHysMxknoBov4p3oT2ek6RwmB48BvkeF3TwKJ",
  "key18": "5CFusxcRawoyLYGdKgrbBokvxtsFXsEE8RRJyaW2sdjrM5mMGuWH5FfY5Ji1tWSCExYc91nij5gijMNUtKT7Phjs",
  "key19": "2Zq8VvGnyGMHmdF96ytShM2Npyrn2Smw2nVWMYWy9oxrK4eJghBbLi6Dv1vvuXAzbAs7dkAfY1zqZ8UNXgDFj6zo",
  "key20": "3egGpyZujfoYVjXuiuUMpVcsBv353kicFzHCrCb8XCn7h8EzZD45TjmBhGwzfJgAbwJb91HhP5wNACQyenM2dWz5",
  "key21": "5mSiXssVKJ225AKL2SjYkiLfHqcGAqFRFso1HbCMeksjGyQqhtU3ZEvoA4vhchfWKckv5Et41zxx1AsuFw8Qz8iF",
  "key22": "8ywUPGgH9Nx5yjHn1TCLnxrytWf9bpjRAyK4dvkZTCe4QHi9cGDmZGgPHQ1rz9qG13AF9Tu7iLYTGE4CajZqeuq",
  "key23": "2skXJ6pdpR4bQgxZvimSsBvrDJPzrNjEznnA2fRBHZnm1nNrkE6HvvwR4kgNZYGFC2VhDvqcgesBicxX8XAVzPe2",
  "key24": "3VLhm9m4MkZe9WXve57pTAKZaUoVdRcLBUS1KvZvdPDgpvp1Ka1FKjg63MQRj1qv7krYtnQ9eg4YWe1LH78jXX9k",
  "key25": "2jZ6FPSxVTMs4qUMMkRGNyeptUoGnPR7RW9fT9Xay21jEmMAaqJu5n6n6cerC1KBcfHBdsUWbRLe3iMq9ojn7WeD",
  "key26": "2UpWQCkXsfJtCXPhbyAViCLxFuR1n1C8kZE6W1BGDkLUV1FMrbikhLUJh9NkEP7cS4MpyZt4m5At4vViXSqrmxan",
  "key27": "UQojSUtWHN4jZPfoHsiMnpDb46BQCBXbfmivt98ccfLbHmfWxB2BEvrQpuHLiWY6guNvhyGJbaThUG42MgPkPwq",
  "key28": "2Frzeyk3XHADp3AFbsbWmtUnmo5FUeg9Nn4ms6ft8pWwXXgenYRNsTgyYmLgbSjwkpfyQiePVT15i9JS7RCr6wzJ",
  "key29": "3Wpd3NaU3ZfPu5bybd15pnUJtwwfDkwUTDwzBHFHDct6spm5p4inzUZQMQW7f3iw7HKWYmCkEzLWSmHpqpoBS484",
  "key30": "3vpochnF2UdDko4sM8Qh7U4A8bgnNkATKGwvCoJRD8jwzJLaVKvH9FUmXgffgUP1mFkqqrjoKJDKNDTcJbwBLUgA",
  "key31": "5VnM7Gt11JBe9odTzo4uVGKQMB74xth3Q2BJZC7rMN27VJgFjGxkzYyfq6DAdvyvNeWpZcvKqoFF3a7umyhSTakh",
  "key32": "2D7zho2YqQVvHLqY9MmPdtuT1FSgqEgvyDt4g3SFHAMTNN54pdrz7zTMNXHqEWP4vgdqFew2GuT5uzG14ztsMaqQ",
  "key33": "5S3sVTtDdCVpqAWSBvXT7QmCwSq8qoYMdRENBnTjvhDSAhLkjkBBZMeQMT5bYkLAvYp2aNuB7479nvZvRua3ZLrF",
  "key34": "2C3RXXpNSre773MCMbBJ6AB3g8fJWrsS5YuNmBtESrzs3nno8Dw1fudjxzDu41tX6iasmMZFu1sNiKP8kJUqMGfg",
  "key35": "RpaaHph7XNAMhkmh11cSFkNJgPEjoxdZf5PekdJAnQhcKe77XdYzhtF5HL6Jvi8bPWpLovuwEMvQGKNpmRATxuC",
  "key36": "5LevQ1N165jj1oqqtJ1oSqF76TFK3FATuWUWkTxwhFpv74WoriF5qFbV5jPXWVWt5rHtxdNA8MoT9QbzL2vLd8bi",
  "key37": "U8UCMGWdkM5xXKtfHVppbfpvom6nK7szrDgSXHZzQUPZ5XKeGHYbMa5GgTFf546Jvy3wnyhWYbfsJc8mHCfS9q5"
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
