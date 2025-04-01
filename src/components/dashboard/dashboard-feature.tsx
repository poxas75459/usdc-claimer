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
    "4xR9jw1UGrT6xJZJ4NfKLdvnLcCTPCorWxD7WNA3aNkFtpvujkRHD512pNKZGd8z1t6eDKEV74jwxrDERmvi689A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XCLZXXUJTD7Fsdu3yLgn8mbXo1ToPoH3PQ5qqSAt4ba8hg252zU7ZoeF1ULGbVUgH91dVDwTNWpTwMWWNr8CMgX",
  "key1": "21PQerTkiD7qzo3rC5PVkJfn7WUgTnyP292CLonQraQaGQmsGAFuz3fXKxD3T72pTn3Yz3Pski4hVdg92wk9Y6Vy",
  "key2": "29rv22VgkpVHgxdeUW4bGgEUjrZkYekFdaraRkecxtmNLQRxZ2mW8jzJkmigockbzpeLXghYTj8QTUAE9Garz2Gz",
  "key3": "67oadppRMyotRagYaHVT8JmcuJjUE66XHHFXttVefSiS76pHSzcx1x2FzEBMnUMqZVXs9NaZNRzJaEM62XYVYrMK",
  "key4": "33svRL82BVhPEU92g3GNCKEN6K2uvwJSd6GYBr2ayWJbYeRNnN17MdvE6yfFEx5c2NpNHSHwymTpYvpEoej72VDm",
  "key5": "3w82idXKMGTQT1ArcUsUie4HmhsttdZYjkAu9xfkRR6ZSaDMVS686ZVpb5qamLPCDUTFdhEEvdZ7bHKF1ovkTgLd",
  "key6": "2S5dR9eLrHAZBkeRJgbHGX3ppuuJXWM1CkywUrgAnrLjdzGbbAMKduNCii1px89NDCpfPDHByaBHAa8jU1H4FCcw",
  "key7": "5R4F8PYRezJWoc4YpFtjfpEsJJy3Ce6RNstK5dDfniM41mrU6Ru6qHQWiKaY7r1eWZvrPKBR9Qvd7uZPWjjaA2z8",
  "key8": "6rNDDTvbvGXjZCLGCFrWsbM1Ugx5u7f22PD8i4DMcCC1gLhK17bZkkoARND57yhDUCiN866ZJDwFJXv3QW3xzn4",
  "key9": "4EYsfQZwPKcxu4GyHqRkQpj6PAwinPfc6R2xsu1TyDqGgDzXe6ZDRabW7xNMRjHNrnLSVqJYCuRLmA2ZgWwnTKvd",
  "key10": "tNbSBFCmsQRwSftitBc5VF7QAAY2KQwg3sFMjKwxnH9n1oqQxPBGDL3RSYK7s9kcpTkLwJ6DxE8ZjWdcPR2QusE",
  "key11": "2WZNSnJ3MMP1WTQJYKXQu2dHcRAxBYPWUoZm3GtkV1K38oPMc3VQFJTAgKUskPKfEABjsnBfWbi4yH5EFAMiSh28",
  "key12": "342jsJb5KfnPLRz6vw8z1oyHLAKw4YL8Umipbu8hPCgjfjsJMm9NhKDhuMVZPWexJkkTzdPaw4zsVzNaPWGbb5qZ",
  "key13": "BowdB4DiXkiARqYjPzhtD3ZWjNAdq5Rzqgj6iF5yf3txaGRJvrCwYDoAYr9gbZK7YLH1AtdrCTKzmHwB1hqnh79",
  "key14": "3WbGxPCRjtX2P288WtyKBCfosraxVnuyj51hbmc8a6aBNEtqRp28NDj5ac1U9tYAVtnQXEnkM8dS3tcNXmD3Xqyr",
  "key15": "XicvVc3rRsTHEd6UqXesmHufLXFKYhWyytnPt8pWf9SWR74ELLf67mwi6tDoVs8GXjkEG68JLyrANFLnwgYBAAH",
  "key16": "26Zfnr8gs7Cef6eYUvY689VFg5UkFSWEroUD6n4xiJbWmzGPKbSKVvfAGQLanExQJnrpSbydyL8f5mfzYFD6QHie",
  "key17": "WSxvBqfvxz1grq29WmHu5WfwMD34pfxUGUnqzw65eajStFNeNBAeZeRRWK3LwkeeCpBMLK8dsWAE95DwENR9qCJ",
  "key18": "5Hmj7R9tR8VdAtXGAKKzZDgNFgt8vGzveWq9xPHQcC34HyumSX7cf5Z7LcXaB3U5HhbR4i16sNNsjMgeAVpq6QLC",
  "key19": "2oMMvGdjJmJXQaxrXhCJCtkboyTuNDcbdTiddpEHZ7BNe7pCNctTcpSQP7yWx6WzJq11ciDJHkrtbkDC4fam6hTy",
  "key20": "5p3prMGj2EXqEuZdmajZZoqH2jdzBbSkFtaL8rhWqnsByuW7Jqz7vgAGGU4A8y7QSuTto7QjMuX2ezCR9TGzPpsK",
  "key21": "Y2n1ZdAAx42HSKEcfN1cFn8h6R7mGaHhoH7UcoBbeF6JwS2dh2EGtKdHDxrqwgQaJEiUdYhwtSL6Jw52TsbFMEc",
  "key22": "2eKeReR9qfLS2PHdX7PUuQ3X9GGPxC828qsAV6XNtzPo3JSQLuj79zJyWECMkSN9HQn45HRiabm3W82eqBkdjp6m",
  "key23": "5g69qLNKmhNLwp8nKEFMQue99fWfigFrGLTzLGFU1Jh5noTGkTa5cUPFdxQjtuMS89y4uthtreY8UAnf3GVGDuhC",
  "key24": "4fH5bF9Gz7WP8bvmpxnTnaFdokDZZh6Qh6dbqGd81sCDo2tuiskKgyHbdKCk24sx9f23CEMASQktt6zSJBDZz4gQ",
  "key25": "5AvorxtrUtV2UupkJyVWSEXYcz2sRgmM2wkDmfipDMRLj6fDxYgR95Z4jSXLLVvoGG7pM5NLBdypZ8tYBxSYZZ2a",
  "key26": "5oiaYmdzPsxxSbV186da7UT4JJNpf2vQdJhcMmF9uSBjA8nte9n1Z2169WcPY1vgPhwNVKJXFk2CjUNrBAUJuj3p",
  "key27": "JxdTf2nPZnQgPbWhCX52V1Ga1929uBcgZtZTPWZZr3sFZBrEATe8KqMDaZ2kiiZyPxLuwVi9wcGWJRncvCJ7mVg",
  "key28": "4eZ8kGBZ138KhikCCQ7JogndPwdyeB1RvPjxnKpbtTsaWACJa5ji4VRfZKvTniaB8mTaTfYE4S54kZ7nWNzbpXV2",
  "key29": "25A1vLt3pityVUB1Y9AVinzs9WcsnYXWtH4gfstNvSwXSt7YZktx9EqGKTRGbkzb9G6c1YKRuUhPq2wHixwURHBw",
  "key30": "5qe7DB3sXJB2eRViwkKLqVWDTh6XVLQ7PMiHqtKFvy1KRaUC6CKUTzb25thUT8JRxNzwVMbKQbD1ozsWJUZj4wtZ",
  "key31": "2EFStgQ9jGWX74EGLkkEwd466ixtkzLPUiosjRJHJXepubmzgLKDNfhNjq7kw6A2B1oWj2TKDJE6yLtzBcZynedN",
  "key32": "fvT5Kh1qy6aRX4856gxnb38ZZjArLCM2o6Yjq7k3sHXpskM7j9HFh8SXZkTaoaxsBPiX6BY6TTTkdZN9USEvtTe"
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
