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
    "2GcKh3py99yCH7s2wFJrRX4TUMuYnnkmx7KgkQx9tRdErLFiU4n96CfDosWaq4t9iLy3AjdYnqmMxcsaGqZTkxKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P9ke27wXhXRxrw9keiMFDbVnXHZRfq6XmPhcq1xqagyEPAMxUreHR2cHqw3FkkcS92kqppEueQbrTK8iXHeSZHj",
  "key1": "4B3vAtxXMBngsJreAua52LUjeeK5TepysLFXpREbbghv7Lv4pAizHrvNdJp7nwwwNBMdjxwMMZB2bLc2yTKXNRHB",
  "key2": "CXizpVq4HF9toVZfwo314Nuwbn7JqN9naTZ8sSoJLDU6R8YWKBRLB19KJsLnbw9WtbU8ink3QnqDDcVNaLiwQfG",
  "key3": "5SJPYtfyLB68D4csXmubKwJbEa3Jwk56Nz7sx5HMNViQfvYhY4YAUWTvAWzVYQ56pQ6gU1PR7hqF6DwWMv9yWDGR",
  "key4": "4i6RQLZtpMoL11ah4qpTKijt3erngxZ3STGvAqSLFxdcvYGom4Kp2i3gc8ieFHJQBP9YRUVVk94cVwE4VhX5LDDa",
  "key5": "4rL4Vek64wKmjHRxkMWFRmFik5ws3KAu39dMaXKgE5K2jnsqw4xYCqgwcjb5LGh8NwkHys8CoC4Uamat4osmxt9v",
  "key6": "39gnYkiCMyFZ6Nx99bEfFcBjvKrnRCepjJF8AvUsoS3vTNHe5ksV2GjQZdXZ6bsa6PQJCgeZrfJV2xnewQzsc6ai",
  "key7": "2Mz3QxoWkD2oyjjQpcKD4GtjSRv1A9wMdYDXQwHgYnR4PgGAnHJ8CjbwmzL2huCtQdDPJHTKrpu9K3tgVENuwSES",
  "key8": "4DqxArGBN55ig9MraBqDxt5LnQLKeUAaHETdWfM3zjTWdE9MEhbSpZNKpLNAa7Yjk2v8StAVMBYt2qEs7ELjuVk3",
  "key9": "42um2D4ySFENuafkvu5SLehcK5fELcH1miCXbwB7JQQYVo2GxBbzfvgnvqM62P9e79GFPR8aBMza8ZpvrHcifptQ",
  "key10": "4TuArEQMujfckjRukKxYBTKeCNEXSsV76wU1mYrp1YFFhdpVewXmUSpRTebL3qqykaKkJt47p4CxFV3mtZAp73ab",
  "key11": "2AHJ2vUtTUCgygXBC6tjRzbCYugeStnQ1AV1EMtefewAgvB67s2iboG8qNQVoKhz5FWNMpWuCbRiCCXkxauPaGVS",
  "key12": "4NZN3J8uUL7p16coMX2GbY2sa1mMFQkyJT3CRKyDnGtK3QzBQzmd4iWSEfqJupyvBA9EkP7iyMW5J973frvX56R1",
  "key13": "5mCRUMFd76xW4PLz32SGFR8NwUcKtjVKUPUqq8EKDNUdMyRtqw8e9nyD5dqPinZpXWZyqrzXVcnUb2LfFdEbmDyp",
  "key14": "E1JPm5qhyBbutiGQwR322U91G6S2xFZjpwUyJGd3ow7VEXTHtujJc97TwXBKgEPMuc6M24LtVGYenDq1LPTnpFd",
  "key15": "66BVTJJhwJ7WcBX6JoPepPjR1trGiTHDK6B7p94JXHhnYhzvDWubEi217iKYpRBiSV1ZLx332Z5j9hux33JsnMG7",
  "key16": "3J5TAmrSudfJcM3qDtLbjP9HACfWJ1LCVzgkX7DtNWrqhGuBuzwYoSewEZCd3W4uiLQEzb6n8RqGygZxTb1HRqCi",
  "key17": "2yLpck7xNQKsitK7A8MH64wP8nzJMr3pfpRQHUtWaNHWPWWUqtfSorvNvD5jxZD4L2yxiB4kvRKgWwy8QLnctM6D",
  "key18": "3dz8TyxYsz4YGwJsrAYug7f6RBvc8Fnee2vQgxdBpuoTKGtYtntwqeajUZGaLrQtAUGhEhuCKquQV7hSVjxB12gL",
  "key19": "3RNtQSyKM7j7YpHnjbuYfZrLJSVmFgG2iiMjoXHVJyYGLMMnD3Ndk2rXPd56HrdrbFASzTTzcStPAxekdXkKuA81",
  "key20": "5G5Hv1dbo1B2QqX6pKKzkFU2oTyqrn9DgxspYxvTNdFdpSMV8Gw2ycp4GTufq5mTojtUo2RjBY7Xd4qifjam4WMA",
  "key21": "2rsXF6CAF53cUAkPHQXzsMssWM6CFmVzw2oAfz9NtPvH7HxeWTHUKN6akBkBjVHprqgshgBFsPJqr8dv1izFNfC9",
  "key22": "3SWzuNg8BRBUVmNnwcg6Lm9VDVRM2dgD6vnoGdcQeGkgK9CKVd5vqXMnVMviknfs3q1tJwk7khhj8dinsoEDF8hU",
  "key23": "5AG92GYEJ2p2jEYEJ5cAr7TvzBBVTACkhwcniyYQAMiJWu5aAF2RrWyHvMapFVkGhM3MQqo9yBEF1SxyPLJkBzKJ",
  "key24": "2Yi9n3bTbD8T1syPQQQgbE6STjT6Ubin67aCaVbjGaP3812rgf8APtqJxn7xmTiyixMZoi31v3rBaR1Eu7PpobWt",
  "key25": "GYQeoCbXrZzbSaoC57jH5xjHPW6yGEDE88A45hZhMrruqt4a2M2MuZmLDs97heFWsrZikBFHHVjps4Xh3kvZwR5",
  "key26": "AioKgcQ6Zu9R8x14zLj3WHsyaC27Aq2npCSFqJSLzzCuYULtbBNGFauGku7vFzhpDF1pEcwAVQFiTt1T1h1gTgG"
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
