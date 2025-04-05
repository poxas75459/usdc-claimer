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
    "5vAdMsCvzWyfrfydD6hSb4SNigfvwvfHL5Lv42YAHPqqB8By5bLRw5EwVrY3zn1xrfCVzN6pZDAFXovWvKT72yPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9HavYuWFGq18BsD2ZpyD1SuNHgk8Vz6oVVFMCvqnZ8wkERv3UomkGiw7dZPNBxPMSicxaHAE9UWW2yQppCN7Hwp",
  "key1": "5vvTqTq8sSAjDBhPXrSxXyybkqbRNBcGVNPRs6QauE5pvLYDsRkSpHwc1363BUwGx6g8PDym1MWAmz1ah61tfr4m",
  "key2": "3c9Qumj4eWY59SHJGaLU7J897s4dnZ1zVFs8hQ4vk4ogZmdbtrtVGuh49WJcXLXAxf2b8oqRKMxKYxHDfhoAK24v",
  "key3": "2XxJX8jfLVuy1bRgFyUrdrP75ANSWJkxeYz6svypQ7wEp7sqSh2xs3yRzXFmTATGp198uhiPfav5gafvtvx3XtYk",
  "key4": "8c5Wx9wYSLGDeUMahkejwx5DYpbMiwk3qu4KUhFqTsRehfQxxLsg9WTb9mQ88FakLQi2XU8hzFEUoKg5yLNizXk",
  "key5": "TD48FGmB5cDQMVz4ZCGWGsMPAm8F2izKgLEZ1ahip7JRi3Db94ahytipcSrbnoFbgbSYNMii4GJAe4wEWR2xT21",
  "key6": "3j9T28MCPzsUpD6QnV3Nkn6tKjf8aa3z1owYtcVZrGr2CscyNQeJujF9G2KfVTMaEWiS6WsnjupD7Ntu16FSr7g4",
  "key7": "5kSNyzkaNFkZNgHusoq2uv9HYD47rLooJtNd9EFFHYDVNmK9hYLNW2q7543egDPmh8X6c9ei91K3tdo1XZt4dV8b",
  "key8": "4QEE3v2fhKarF699igCELcsZNtkkrta7hYEPxHPY6aRATubvpG2rFxdzkSwQWRzV3Jua3RiRAhCYTtg7X75Nkwtd",
  "key9": "5gWwHiwWDEXYUMiFz9E2wGsgKA33SALAJX77RXjCXe8X9C6j3qxCkNw4A3AKxKNMkrneiFVgzxVhGksC7QFiXR4t",
  "key10": "4YPU5XUhcjR5HBkd9xc4rF8VmZs98XeyrkM2WpCYVCJZ9oSsUGCixBwEHbjbKE2pjpcvgi3XuSiv8XcRXRbpJEp4",
  "key11": "49Po9ApCTfLEwEiaF2xcdRPHF6xpDojWyxUR59LZv34qsk1xXR3yMcaWFMgk1Z6f72qCqTxP7jp8u2sBmw78k3UW",
  "key12": "3pytZdj2nbgr3g2toAdNdPtFF1SvXCpD7cBTczeT1XUXH8xRb4KWNE8uAV5CRJ3wbmqofrNhCChSdG1JyFC5gaD",
  "key13": "41SQwPPvF7mLGexQZYCB8g4xLoSW7KEVisRri8oyghcv4TWz4tDdTyAFGoAs2RWvKatC58Wn2jyMP65tY1ZG7NSB",
  "key14": "5Z3NBnKadEa4WiKNSwcaPgN78eMHdZs81YbKPr3cPGb7YtaY35qtuY2rSzB4wDqbjq3cCWAkYzFzmLBTkgQShkWe",
  "key15": "pqsEhExAw4crgbNd5M3fkV7AqQjtnp19URDU61KtcpGzJ5JRkEH63T2fanUfqkSzokVSdG2ZgCASAHhocY1dihV",
  "key16": "67UryPkHszqk3psKDgkeFoAdJr2mYXzXZuJvZF16ETi8MyFCe2gMaMFQ6a7FAhZvGkjtooyt9ofMpC9i2nbQootq",
  "key17": "4B9MUKPdBUzFCdHEqXRQagQVkt1QETGk7cRJwPiXRQ19izrJEbtDL3vSwbEEbdP9Wu3AZwYK6Ss5fKtnPs6LHSM3",
  "key18": "E8XCjeUU3PBByA5r7wa3KNym28U8ZWrpAH6NyRPmE8bCFG2rCUZ6WQc2y1N6mizNEQvbqCEPqGEd7AZzBa3SNNS",
  "key19": "VwCaVigyta8dAHJWgdcWctwV68Uba38oZBz1WkjQGG5mpcL5s9hSE18PRukLmML5utSoJaQjp6zxym8FWrqWMfT",
  "key20": "5wmQ4R5a3u4uz3iurQEeFQczNtdJZb9FxPYyFmgoycJc4JCjEuYjCbbA8rmNkig2V35sJCjQTqPA95wPdbqu5EZn",
  "key21": "3pGBsUzyoGb8dfyPPp9pJt1YL3H4cQvVtX7yjx54HH8aecGzxyWashuyezXbvqatsQU6WNURHKvbeHgKZEgLZDFA",
  "key22": "3XkeFdckXZE598wx36YUMiuk2dV7BFdEgXjfJPCWTLWPTonWQQEDR4NVDRdxeEyAES4LV4baKtPdjfVjNQQJMcEJ",
  "key23": "3EV4hWUAYi1bderZ3PCUAAgqnQJgiKFRc65x7Kfzba5eroaE3ywau4xfYRphi7HnChUo9xvMQ4tFY35m1x2r2LUL",
  "key24": "4S6TeUeUXyjsdHmvq9rHH6S3JQvZQ2n6vwExEmvTWTVAWEY83jntxPmC2vD8P4FYzKBTYYRE8RoZN1TV4otZdqUu",
  "key25": "3dpYgoBf2DhZnPFAg6qqrBu88RUy81yyFAaVF4EWFHshsSJ6ruJ5dUcjck6XzGayucaNxKXtgeLMqRZoW5Vc8GPw",
  "key26": "3zB7QedCcVeYQNFoPcj7Vrma27pYLXnzmXV3pqg2cCrb9pV7jZuPPEp4ypDiyJHEjpZS3paNwMRHiRhAyASPcLp6",
  "key27": "3Fp1wa2Grd37rwZFuU6NWB5drRaDEabBwwjWLDuQr8amK8ZaxVh7f9bL3dL9qaonwfLn4DGJrVWBU2Mx5VntLVKp",
  "key28": "4G4b5b3wy5Eqeho1QajTbTrAfAAcd3N4oCiNDi23zUEsmEbWCQRQNyu6dDUXu7PHS5GpKifPj5Nh8n9hA8oboMVo",
  "key29": "TVJ5NzQTK4fVQrs94fFmazGvbqUmZKK5cr3F3ApSEAPSQ5ZQaHayZ87bAtDaH76CvwSp4quXaW4sHRe83sFLWxn",
  "key30": "3focErmc4spQMAMnDKLSUqq2jwuLarWvjBVC7Le2uSbKHENeXSxp9LVPBePcbxdwEw5vdk45vGWTktM1f4tj2TV3",
  "key31": "dzk7zACEbhjSHibwszh89nCGGdV9MnbYuYfYLZW4tiMPUVuBt9avBEhfvoK4ZnsLKeDjxhKEn5rRnBZRRjh3D9H",
  "key32": "5PSnrLa7kQNyjqJxwMEMku3yfKnBbdDEsryxKC7zHzqTAsJrjpYghReYh6crBYhg5H4aiAxg9SjUcsojAsWZK1XB",
  "key33": "5srRzCdQUMF4m2QwyU38eBX67wJSbtbXmLMrmgs7Mcfd8L5pP7WKvTk7dfkrCddhHHiBpspGiMJNT5kGshHeVUgT"
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
