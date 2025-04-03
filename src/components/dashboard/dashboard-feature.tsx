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
    "4orUPB1KJ6nWVHTzSkSPBAgJrxMP9ZnD5acNKi6F2XB5kTeQDiuxZaPSdz33mEEQHnR8PCh3PpaWXDrn6XeeNbT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5taDyZ5yEV4ELuZ1M8KMPzNshKRds9pyowAnGGfm5Ww5dyRwRBDGPNdWszP5m3aGZ7NP9z1dun5fqHNQxrfKsnZp",
  "key1": "5ZA6mUHuywi2NtEBzUoLyxqv62aPNSn9EgyMKBPgWTEoe3VUcnrWYTXT7SMDx5tyH7H84YE29byLuycQiBJwUaFK",
  "key2": "5KFZtS9Xj4qs8m38FpGd1t9163YkrmGLYvgECgQ5kzyprjkSxTndtqFkUVtuaTXkzzCGiKHbzTNcLoEAtF2YFAuh",
  "key3": "5TJXxrpftzsELVFqq49uweQtoPq8WvVbissqzY4w6Wdjam7NXoxtE6Z5Cc3g6kpq7swshRYQKdr3utxxGtaVRDYr",
  "key4": "5KqrnkdxygCVa4N4iMQbRwrVs2fJ8TJkkaK436K8F54rVVtNgrG58j75Kqcvvgv4XjRZ7rpDey37hkajqa6iZB6B",
  "key5": "bD1FW8WNYGaBtNp9X4VKpm41Pa3JAbfaPFdC66CqBxRxXxzAp5LwxH8gCrhSic1Rh45AbDYqXcSCUfSHGQY6RBf",
  "key6": "5TfkvJfbAssELvyNFDLZLZGKz6FGP7XJMqyBXGipcwzv3VoB1bVWYboJXM4Q8mZWhNzm1MapWNv77tF1iobkU74E",
  "key7": "K7V5BF4yFyQoYMtesEpjtaFkTgCXp9Xgwf38zNjwtS414zfJkPH4vWFLrN6CVJ57hWyDPi3o3kMv5SDshmv1HFJ",
  "key8": "4EfmuRiDVyS6De4ZcZUJzt9pXNPgBC318438HxkFavdTeZ6aSnzyR2wtTzhPFxrzMNjAYiCP4YuNobBCpV3tckTr",
  "key9": "48fcKZtsNa7Y83iE9hHAkU2imR5Ph87EScDKdLQVRUe2WvyYP7NQEGbQm6x7eqnXZAYFW5oCDW5uhnbTZftJFerp",
  "key10": "1vn7CE9GwNu18r3ZUsocYGyPVXLZ9CvHvbz91P5KNvkrrDgBtSyGp4mZERYXNjmh1o5mzGkvCtAKttAo8Qu6uLo",
  "key11": "5WQFmgjqrmLeMUrGHyTM3teCMzTHozhBfzDVRTLkBg15iwhtNWnoWaJyniRyHH9bBWiT1AUdGSQ1GNYJMFwmDKiM",
  "key12": "3yJ7wJ1YWhUqamSu42QVpvo4Q1pyyKTYcpyiFJt8vRhfcwy4MaPJKwSGNDP8fcyrCm657kukhagEZycgQ7biGAbE",
  "key13": "444ayCwzkQjhHRXBrwS2ZvPWcu2G3QbP4SDaFjZZdK2re3wZpZbVLHzzJd9GaTa5kkzvPBW53ndR1ESgWvrsvUHQ",
  "key14": "2XauCLc85YEiv1hfzKArezJYQNpmTyA1q7jj66p2e7wxmVSXoujjEnZC1UNJ4NXKEJTm93AQhKWmbm7D438WUeTK",
  "key15": "35JUr9n1eLBmveE2PZY8g1nQso4KVhFxHe64wLS6vyUNwT3ryuyeAKQQ2M1s7craNuVSs12rCKC6R5LKU22Mccf7",
  "key16": "Qe3BULBM8wSHtBVShf5HGZTMeGM1KY8FgeBdqo1JgxLe9vwLKbf3cdgJp436BbGH78UByfisW9HmKgNfrvkGjXs",
  "key17": "2qmYQaRU1Faaj324onTHr3XAwJ5SGZphW478qr7tpAtS9q6nZAxSofzS5yozGXPHfFD2KDM216tKbtWMSh6kopu2",
  "key18": "5TvagaMi1K9WkNFniUJa79RJcSR3Ehm1V13of4Tfa5Y3zC4yKAmdVJ22z4d81Gae3Hm3ycdmrDHUaKDY9f2jfpgw",
  "key19": "4qSgpBQZqNfrXPuMBXvnD8okLLDH4QpAcFfgEt9Mexsi7qxurgHDqfhgPmYDd94kMVSJpwYbVzv6ZCXUAQKpfNvz",
  "key20": "518iiMg37cjwvMd7xHftKQ6wqN47w3DMF7HNtiTzfZk1wDydoHP4Vqs4fQu4cNBT8jBRT7Xn21HThFc6DTd5FYii",
  "key21": "5qEMvLHZS5cbtxSLjeZZ95gu8gt585w71oZbSiwt8CfGge4CQ9cv6h8ybv3cnqLhR9zLL5742dGWTd9TEEkRdS2D",
  "key22": "vzujuPEK1ATRU3NhuTPxRtxNZUMVkhfe8P8RvGRopYS69PF1SqyFJWi86B9NEBoekWy3peRT2FpPPcbCwyMpo8C",
  "key23": "4Kt8irwacWHLBw3VDF8N3zMASpRw7PzT7jtg3RF49ffV6gRkMja7Kck4cry3RfKYWQsk4k6CEJXSc5Lvty7XLb5r",
  "key24": "5bZCtajY1D7PJc8Z27WgDovchyzERodaTnKU9JW4VtQhQGoMGvNtBpcnnN7QkFi5UxT6m6sAqTFKbKdwKgajYs82",
  "key25": "4mhkhMTzaQyPkTWdp24mQWTLineQ5912tjZjPqDgHcdiLawERZo4fBcgSPzHsUnuTAAN9jPMFffmSyGC5wGxpfb",
  "key26": "5x6KKWWymMxBwDA4iM8TG1D6Xf2vw1fj8Pr18fpavrU3pNjHTPUq6hD99cfHjBeRT1RuQ7tCqbUd3MedaEHHbqQo",
  "key27": "2ThHBpgL55hFE3kshEGo3XsuM7ictuteQVYFcFPjxgYGPgXUYP5rPnvRFLa8eFCTEZ9BkjpjY6xNN8LR1GStncsB",
  "key28": "4aVQg8d7bBrZ2Cy1Wc8nmA7tB3abTCjLgKTUmwJoFvBYz7rGGBGo8Bf2hifWTybhNPPkogheigPfMSQegqA7RwCN",
  "key29": "2N1XyuU5RKXDQroDCX5JLfKmhVh1eujWQyHcDfzy3Rr95NmRwY1gPA5sBe6BNVtpXPyDvUfCebosbs6FA7RqZHt6",
  "key30": "qbSwnZeGtrpRvzCTGPxyGLpfrSKtzPvEmzMwH2dRx9KGd1uyYzr59b7D2qBbULQW6jEfk3zBMGRs2CarsNECotS",
  "key31": "3qpt4WQp14gQhALPY1ynX8XhmEsSemGhMqbdFJRdEZX2Duj1UyjtS3CFQZXYrhKCyGhnAg4ACb8xUVvRpXhN2vTF",
  "key32": "5dwzNdzTkkNGKxu8zqvwKTqZ3ZwUc3qaZoh5inrA1tnnGPJpuaSiHVhCefaw9owSrV1qPssGs82Fop1q4ZD3bB49",
  "key33": "41EHHUFfz58hia89jQgYmCzcoqsscmrKaeCRQp4ThNyyvWonB4aTvPkNpAJafVw6k6ff2CQD3H9eKMUgvQUEFecc",
  "key34": "62WQ68oa3DcVVXEfEcamCb3a2QQTUZmEEpWvu5sA5EpwdtugYUZyuxgoR68asTL4hLx1pLRsq1gD6qGMcv4Cm3CT"
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
