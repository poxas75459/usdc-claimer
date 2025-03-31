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
    "39u1mF6g1xxeefvSqW5BGHzZwNt2C6pPDpQptKWsXD45sw71J6czLoA7AHfUGnz6p3SbPoZbrMktVQp6Hp4uyzUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GBqX4APFsxRiWBHJpoQE3yWtEaJkEoHBKSSCmHLCwJ1sjWgyWmCiXanHhVLiqgiXR26n8Vtdn1aLcLPU3WTSL",
  "key1": "2ACpERm1uyR2dD9R2cFs3MjUnvKkHpvur3hqEs5Vonh7UTKVV7VvPUKL8ydFUoxwvmWkzWS2ngPiQb3AQv3YfEww",
  "key2": "2BVrQUzjqBG1G2BcZhfdGui67BYhiuCw7Tq6hwSqr6XahyAtgYxjqbgvwFKaQnH1FNfCSgK6MeYRKVvce1WoQmqU",
  "key3": "5FxzDNeiEWHd8yg1YK9Qybz62Cxaqu5k4o1WS5DGubGr9WMxNuE9FLrgveZzMYhLyzJCSNnCcfGFDzfTYdfL3WK9",
  "key4": "5JqNUd9GJvMzuiU84EnbGvXVvifFY1foLq9H6iqrnaJzF6BWqp7iFj3bbhBdzhyygmnvoiEbX7LqoaZyKMWPkPeV",
  "key5": "2QYdmMvEGDwCnyXp9SqS4sKr7Cgo3WqRRMCGm9YX1kTtwGLM4Mnd2CpJALYsPYBHx1a8xe25N2d2d1Ns9J7WrX9e",
  "key6": "4YWAHKTXP7nvLayAXg2W9Ney25mfL8XxtMgRut2s97WnpPA8YWYF9ucqEKENEdtF5VY6ERgot2utnmm8AEkxb8hm",
  "key7": "4c2CfwpF8PvcQBR96RudfwE6s9TS4rD1qD6EjyajioSrLcsXgQ8MDeXPe31vqDsCap3SpUQEPg8dmBqBmB4dTnDE",
  "key8": "4b1apNu45xaPLz273GYkJFr8UK3a3Kadm6sAz4xBipxJCeEZqZKYyVdzisps9DGT3f5mZcgeQhUbtzgAP9qTXjLS",
  "key9": "5qrSgxt3FyNdvhr7PxmgtTK9hxJTvkyrJCWCUD221A4reDw4zQJ833CGh7YwZ4PUp3GRaP5UrkBXc4U35T4JXuNv",
  "key10": "31osrW4Ts1j59nL5boYY6Kv7E3NXTUEVzMxLWf6mgYKcJZY8KoitDmmJiW6eEMW5Dte7meHS3poQ66kMH8mxBhkg",
  "key11": "5RPBiyqKAtCefkr5fBGPrNAxwD9DZJJomLcYfGQt5wtPRztJChDr45YdPAH3mCamErbsooVsfCcZWQmUHThPD6KB",
  "key12": "5mJWLE5jou2iF4RfBKphjQPYSTX4xquCpPggxWUFB6Vgc2Ystb21tNVXX5qwMfC5A1o2Vde7vvtFMVHnBuW3FjUJ",
  "key13": "442CsxvBnYxzH89CkTjmj3k6e8opXaFb5ecSyeFPKwEmY8jzbkKcBa3CA61P3Sps6b2i9u2KAaaPwwFg63YNFZc",
  "key14": "EQPJjtrSrJVKEBLT3rCnTWK5rfCJt2QKUu37d25yUnfp6XnbGw8q5oVWZi7vK44b51ehqH2ry4ujCeEisammsEV",
  "key15": "5fVnsj8UC59fMcFUY1FxX5VtZA2LpWTHinDvpveLEZnDVH7TpoU8Whv41r5pfdytCJG7atXqd8fL89iWGBpzgUUV",
  "key16": "CmYW3kFRsa8jboMVKqGnWnqMyFNgm8dDf88rK86X7BBBxDKE2TdYqeX28mrKGceR55uRjbTfMkA3vTL5Ze6oUyj",
  "key17": "5kr79uuKLqgCKBQBkC6zPnQfeKUAvozCtypU98MpjUyfthfKjMdnC2NVLBdBw3kD7stMHJxqC2vPpyei9Eh1aGQV",
  "key18": "ETgStVNw34EeCc8KeTPd2dNzLqRYGkYLbFPwhudNQxsDRqmvaieYc4BDGcfhA3EaszaE2ndvz5i7roa1Lsi7n8Y",
  "key19": "FGxWHp9JkmvGBZJWwkQqfuZ4nm6GDrXReyRs5Z5jmiqwTLJndBr5soMDg5fVypXc3JSDumsNYYfgiaoQojutFhh",
  "key20": "4GtfX1KbEW5nbBc8L1yM4seFqBtniRqXqnxuVEbJcyzi2NkAr6U9uuhg8F3Fnyi3VVg2Pfqw4gEpkv1jbSvqJLxJ",
  "key21": "3k4TcucveDKueCiTzDLdztTQFAhtYa9Wo61jYKo2gbsbUK95EJAhRrgSCHdGWobSAja9wyqcrHwY1goLpMZCvQvF",
  "key22": "4HkpisByyxcLAFaxELKFjqn9dGmC9jtxory3SEbJ5ADSUYdjfZiFS8LMyvd6Qj6agunMxSfR7GSxFkrJTvqYYv8m",
  "key23": "2iGdJVma6C568VxhZmKoEmtbDKtcRRhkR4jyPJZ4BYYk9zBsYqBMWEyGPdYUFhKCcq29fXcqZBNb7KW16vVWERdr",
  "key24": "4dGcwow9zGXYswug7z8LcUYCzRmRWyBvnkxysnVSecmfZXfvCJETty32AXPDeJQWM7Hbgi4xjdqeuiMDkrhtvXmK"
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
