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
    "oi7NkhAyXLZkecGMw43uqso3aMmpQMMZtrdc9xxzZnvgVR7Us63hFhokB5fS91GryGVpPRcHVLUUxCctNFnzNuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2Vgeqi6CGGCC7xbHBs393hseDLLJcjKsjxYQpgvoxwdvTsZzKhUQcBEQx4UHXzvUpyZRhTewfHuwvvDpZ59iKy",
  "key1": "3Fze8h6pLMXzoQTzRnU2iSCfwUaLMrxBK1ZML9tsHGiwZ6Sbx4i2fcTMFKKAoNdfEF8422EgB696mM271vMZCPZh",
  "key2": "4byyXuvrGAK3DbeECEt7UoW5FzaBqvuNy72isatverYFAEovKiWu9b5fvWtf3j1m7EKoReo2cfUCzBWaX1sY7tBf",
  "key3": "4FHV6WLBoshkUo6jk6zpZqBZG7ShgBFsYkzwwsUEqt2XtLMPhrhmCHiEM9rtGBSMULqCTmJQ1AgC7PXJTNVTJhCx",
  "key4": "3yt45HuDuxu2VEh4e8vB82pmoLW7yTGj6V4N1B7mJajxB4e4WpWgtzezv5wnDtvmBJKJ7czAMdsECXNecEiBHNWM",
  "key5": "5ZDq21eFRvL3cqMJ6FLKqL8K1NPXsRYp41P6fvBmGsW9bSaqHreiecPmS1LiUfJXNKfxvsXZvwffwy42pibrwshg",
  "key6": "4uCahX7SZt38hJ43eUNVMETZXQy7nsAJ1YYeVw3DcW7FNMibL2JiDm55iBW24Kz7f7YfBxexbqvtGE79mUQca2oo",
  "key7": "5k4gtFik4UgRquh4AykcfB4YTJZ3NUgxhhcdXskinhNzQsZHoNmNUXSR7kNSqu2tWjswJGSjcEpJwFM366EXJmAR",
  "key8": "4aQSfVsb67XB7GE8XLsddwmQRxso77smLuDD6GFbirqnmPDJ29jQtLTMvPur2zJJekRhVt4wGP5g5AwaXHQpLzeC",
  "key9": "26guMsd2Z4Rte3BsYNHEmCStQcS58ncR4aoPSzkCMv5N4gfSi7FHZxKTURngzsM3N3swXfBQ39py4gcZd5kH4HDE",
  "key10": "3UJqpjmKnDWScPoo1cfTnvgTodkAw74Z6CcdpbVzPTMgk5EYygz8SH2t8QHztPD9D2gSdD3WDZEqpU2k8vDQMvY7",
  "key11": "4C3BqBRW5dfisvws4UVkZW1XMBFH4bXAi6RXHWVGy2ucuXHQ7dvn1aLBEDBwFif7rxgSJ7yWNzVtU9cu1E3jeh6n",
  "key12": "BYBK9brcZEtVoCriQGusR9n1H6mhWsTgzDh4upjPkMkrkE6qE2FwLozjneiDj5TyA1kpqfpD1BSFTTmu4TAc5WZ",
  "key13": "3DearbLMiBsuMkibZMSJFoNwm6YQf6v3BSMVpeCpQeFvBPGP6TeRE9j3TSWTb452t2ykndHofM5b75m9uggAsJsz",
  "key14": "atqBsKcoxW3mgoEYVqSdftrwvqqGawpUbGd1BFxV1KhjKQZhggwc1CpsdgM2rBtCaftsHJByKWj12ME8UUi83xL",
  "key15": "3KXyPYDHaRS4XazACBRqshG3hjYNdmxJ1xmnrs8QKizhDqiHw7yMU8h8ioe3pFUscv19q9Qwm8WNNE8pkGoFVkiF",
  "key16": "2xZBUWF3NBoxFdaGXKAgKGqaPvTCQP1Pt1PmPe9oedCfG83ahFKhh5NEFBaxPYoso1S3ijprHNLaT5WZLXphiEAg",
  "key17": "2VSB4HDsKcECqo8TAq5DwSiKzZxcYRvhDeUVCR4SKxATDgHz2wjcg1SN3fnrgAPu96Zo8w2YJ4MLEpNFCKMd7jkY",
  "key18": "26HZu7SeM1ZfpdfxyBtEzYaQHpNHpyuaPXvGM28yucD7ywfsfN4NEjGj9VzJjWbTP6GKQsQtYrVbUAAbNqB49Kih",
  "key19": "5eDYKxqyebSycPs1YbmuxfnFmKcABudTCzP8yxcDsT1cyktNh4WftXWYhx7AFPrbcMNb7SNc8ifxHV25KwC9Rorb",
  "key20": "47rhrdWbqLQpQmSFnMxQ8qqywma72ubLimDo9ad1kEdqw7TbSWS45EqtdTPpiCznqUhQJ8eQTUtQACkLTuMWuFhy",
  "key21": "5P45q73RH9E2ERbMNDjK5g6NoNXrcBCn53ubFTbBjfD3pruEcyx1PYsVXhAxB1Vncjq2BXUiP5oTaKGAsajsd7bW",
  "key22": "5M48Tu8tNXtSvJgy87qVqEGivdBYaNgxxAm13yDc8dWh7mbyiVXa7frbHj766koK4Z9k4rNpJUHVSD1enzMZ9CJw",
  "key23": "Si38xsoYg8B8RX3Dch2spBS7pPk7jayFoBaBYzyLNR2NBPavrvcyCYAK7NQ8DKnA9GtpKHos8hTGXQQQCJpJ4ht",
  "key24": "5LsjojX32PP9S4dLZDYXap4jSAEKKaxmKLEmrQZiMwVL9Z64TGR6KsMWURAKGMssDeyRNSXXByek1YJd1AkkNxbT",
  "key25": "5YaHuczCPC4H9SzYkRtuEwhAjgetmTjeJnzUYRzTDn9Jxo1E1W9HiRbiYCE6pwWZSMudXngY9zna7xzWsSz116qV",
  "key26": "3QNi6WiWzLhPYgdX45GgS1AsKio4eBoWLo6PJBC9w3TP6iqTjQ8jTc8qFbdd5HQD1WixU6fJdmTenvBzNtF3cFs2",
  "key27": "3BFA3Vd6dQSrWZokdAdqygiaFnoX2fsm7fiBUThTZQKWVTAat5dKrWamcRvPmzcgDsXY1G3jLx9qU17SS8hdtLUz",
  "key28": "3yHTHr5ZYGnwN6Gir2bWqFLHNLHdqKEhxN5Pvfgb3j8F9PmsPQVc8da3jxJy65Ji4jrTqaU9MhgEfMkPpRyJJY4t",
  "key29": "4UiWjvT7WTSe8MHLqsxPP1eYRRT35nLUJ1auwDsWB9fy7GRCD3i4tKTkkqgDqeYkmNDjxgqjkeSPEQreycXLLSEy"
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
