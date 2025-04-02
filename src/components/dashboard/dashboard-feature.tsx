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
    "324mPwjwmCDMLmi5BgnN42PfUviiG61TBtcnq6X2JHCzwAVXLQeEgruZ1FEJbu7ThvRkJPRXfUu3Kt2SUbYVTJnV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLTBcotbvfcEb7h7iBUVmzoFSdJpaJyujfdRZpJnD8Li3Gc4ffZvztMWRJBoJScKhZrmmHfrFJ5rdJp8noqgjZg",
  "key1": "27wpyec8wL9KaJtpyLzrJkuz1rj4Dnnx6KDXFBjGjzwWLB3MNQTGb1QqVxSmBQFcSf1kq3pp2b7FY2eoqvSvm4H5",
  "key2": "jCoRNqa9Yn5YoQdnyTwG8Kmfun5RrfBaEsanpbXmYSkdsUJEPR9AMfyjGLPvH9SvsoTi1c15CJUkB8eQkSf93kC",
  "key3": "4kHS9fuqQR9K2UKbHYD5xpYrHuzEy3YPUh9WSRTwWeeUxqK2KW3mHR12ipqqUUq7y8LiuNeKtoEN6PvxeyNNrigy",
  "key4": "5hY1Hd7hjEJNQUyMET7wCQSzdqJDzFpvTpeeSts97sLj4iaaF7UPvcqnTGinUkMm5Gxs8bg3PiFj2E7wh6JoePd7",
  "key5": "7wky7fzCXNB3bUuQ8vMw2a1q3cQy6PtShTDYexdnLdYmCJVBaFpMhtoUuG4Zfm85UVUff8keFZd5UkyroPTcAHX",
  "key6": "2DK3MufGfBVcJqsv7tRjt3nMJshy6U3KoPPrtKEwLewfFhzYqvLokWW2wmamMPDbAx7wwaKwnn3ZFgRfyJ5ToyPm",
  "key7": "5piimUZnJ8kPs2vpeRxgxCoi23pyqwdxNdVo5d9L9QDnQBuULP3QL3P6wVWJnQoZdWw3jV6VxW3BVnoDgHNJzAFV",
  "key8": "3gpWU6x6TEeMXY3Hw5a4dqHheHr44NfiPKE5sfaaQwR76K5EeuSZ4kae4goZ5pQW6fPNAfSzZe5p5J4Rutzz5hDG",
  "key9": "RG53egxUY6YN2WFcdDvkJL1PA7PJgLHSJkSkenKHMdJbb4m7e3UBYWs4xskF4FEG9PVgsoPzEBhCe7F1yktQidB",
  "key10": "5ovkwYmgm8jbq1eCCL88uVZPwr8BZz2qMCAcAw3XACByB7qunUWinD9NUMzktcCYdAcgUAh2X3CnGDsvNynCaFZf",
  "key11": "3Y1QPmLePcTv66VN3yxy4WE1De6wvXAhQ6FdqZbzkL8HfrUZx9z7zF5cTWkYU7Ywzi7P8iAuTvWtC4K8xa6jMVQa",
  "key12": "3D8NDE2Vx5QtXa7LWENQHUFgRkgCRPHMsJS3VPxLUmDgdKFb4hVFnqRR4ekcD7p8zUvw7YNhQCbymYFgLWqbW7Ey",
  "key13": "5e2jxqPkPoqNq15b6jC6MhVsHUbyBemFn71Zk99jVw7ppb3UprVHXQqD54UKPhAZYowsvFEJncDqzngtRELQxAfk",
  "key14": "5mXgNQBU8Jy4sotBmNxdeEeLZtoMckqBvUPxVFUkn2QsxCLy9FJP9UAWuye3Pcoky8TVJPTWdNBbKsznYfRqeTtq",
  "key15": "3dp6UTSwuC6H3beSsjEqpZZTUfTJrkvhpqd2wio5fYRFiQRuDDTCV9MYLKoDaophywPmSEppZ5QE6bRSDDESJRo8",
  "key16": "ornTjLtGqyACMwKRa7wWmMvFViJhSgLe8ULSptLQnmgsvadSqU4cUaRUKQ8KjyrKuGos3CsU3nyWWYXYMC73tjp",
  "key17": "5TPLgvFLifFXUDbzhJvb2KwKwd2Ah4BNt1oym7w84P3aUfXELPvCCTE2B2MgtFWG7nHroCVuL3zfxn1nakdPHuD",
  "key18": "3vyG28hbDG9K4TNPv6MzZi77tHdKD4T4AgBpoFVxp2qtAGLMPkChdAGesfQrPUorKoGBz4xht1HMtmuggGRhw61M",
  "key19": "2zfSiD1aJYfumAX1an2tfVRLiv7GRSnyotqE5jjBAPSYUo8FeStu6Z8Xqnrwz54imMmpKBNCnUc66Mh7RHvC9nPE",
  "key20": "4vpkMEzu43V8NL5CxZu6xiB7D6keVaByWstxBg3daXs97WBQztDT5Rch5YVMM7Ko4wjbzsn6PiKGrLruo19qTsWH",
  "key21": "4inbXj1rJg26EdaVG85i4SBYFwkw9g3DFFJk37BxjbQjufUt2Ze6MLsvNcXJEV8WmBso3cLNDVi6NHZQ59TjihdD",
  "key22": "2qkSpc3tVVrBHUytuSHLoVE3oxXJxNJCJ7GtgpkZB1WXNzCikuvd928fxbTEMoWvznotnDWc2tVBPnoGW6PsDyJo",
  "key23": "HYRdpLRGdp9qGbXH4Vb4opiLupxt1d2CJRNWF7b1egJVx6eaPREKKKjc5rZt1Veyc9h4L4ByqM9ztDp3q45Yp3U",
  "key24": "4RwvBJjPRj3JAwE2RNu5kcAPJZhVaaX4zYRgkJqJe8tXhb3g6mtVpVTVTqHTjAhLbe1XPgnDJCNGyuesrX4Fis32",
  "key25": "3W28cgX5FjeDcXy955BX9WrkXE2UgMv33xuQ9JSgyEtHspD1rXoWsz8LUHoYyPMixYMJM1ZHJ9sm8FXdjzPofoeL",
  "key26": "2YkUkN26sYGEStrqu2J5MQBJDqEYQdXLfGPsLc358Z8iTbBPGhu1sjWeQMiFEW1JyeD7bo9ZopyMMfiKCaoLg3pL",
  "key27": "2Ejm2KjGg6QFi733avnQBuL4eDmYHL67CH9GMMNXztb59sCDmgT3gGuWLkNESLtPkyXorEXnaMYo1JZ1iVDHvUwm",
  "key28": "4xYw1yxzsx3aL915Y7Z5Mc5hdDbcNc9NQTvjPeZ6uyKtZ7sKHThHD5ZfNrCCZUVt88naDvDJ6rxESVvupmw4Yfwk"
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
