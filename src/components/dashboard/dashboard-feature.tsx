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
    "2zaizNfgdj4E3XQH3BEAHc3v4DdKMy5GFUhaaA78QhxPTFKgAjKovhdHrRC6JMZ8TxDjuHjYnekgHJitjEeL9kaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xn1ApGErSSs2dVG8AxVZmpAWWaiN776uR1DhKjXzRSGXw6PGUtNHN4aUVRv7pJVZuToKBeZptgoGrJ57nk4XqAo",
  "key1": "2XRzsqGTRA35hduke8a6qBrsN3xLabgGm1bvbXv9cm9sYTCaikdLrGePZP3VRb86qjvnjDz2cgkXJGzYxEBf5arR",
  "key2": "KRRNmtQCWfvZCsgEzyjtJLjJFGZFTuAcGZQ29tX5mSRqE2b7Rw9EvjbN8AkLQ65GT94UmD9w4icZskoqhW2kse8",
  "key3": "ugTayno6DM9yBGLxPACFXNK57qpbMt5ccdF58LNYoLFaTjNoDgR7FoHmxKy7nQ3thwzJgBcT2e72zhNE2pQGJes",
  "key4": "5mrBpyL8D7qtjyWty77TEpvcEW9vL6mzE4ZwzUyvBkgbdWHSJwzvyWwSGtqTf35ojBWr5TobDhrvZ8167B7Rcj1w",
  "key5": "2WpPQ7U4rWhebJsf1ZBp8EEUsUXa15B7HhrNbVKdaW8pZPQV7NuwkYyDZqzzyu3kcdbrkwo43BQZoo1sn1MXvuMj",
  "key6": "3sAbYKyjuFH14HXjDbVr72eWB9w77e8iCt2HuduUkVU25GEZLP4HigHXG1yyYLxG2TqNKwUXJjS64Yb8WqPHQGCZ",
  "key7": "48de6jr4f8LVEMEp8SZhj6coJ38Pbc6VCGPQGD4WcZ5VwVFHkevXZ1eYrqnRmnhdEGZYNSFLXkhq6BUoLc8J7kmL",
  "key8": "2iHgYZ5CFEajRU7S5vsT1v57PK8xMNPGQiUnBLVtxPejuJwsP2uzwUf64VMruW95QxFJn8DPtHd7Uqh82KJsjTn1",
  "key9": "5droWpPMLhZXHtDg1P4B7VQZWuKvwhpQu4MRkgVtz9ZtbJYFTXCtNSRhpVEJhmeDH9Uh7txFPvBtPkSnM1qV4vDA",
  "key10": "4sUtZVJjPkMfSb57it6jxoMa5CCervcsC6ry7zEQ3D9mFPE1Pz246nSAkxsnvCP8iGPiN7a8MvfnJEBh9EHDkfMB",
  "key11": "4o5Jbdrpj7FkXYVPWWPgn2NjKhSBuzjxdcU3BNKAkHG8uXsne12e7qUyU8VJkHLaheubNdE3VavHVM3pZcrWuBXz",
  "key12": "3hrT9Fa6K9M2iD9M1tu1v5r4Y4vk4ygSVHzZA6etcBEqqvpg7M6UPmco2GmHUcAynHdDxVgbcGzht952o5e49aYi",
  "key13": "52fTConZSz6aje33aRyuRN7f3Hur5F6B7ssA3LFiWoA5MfQoJq8x8EKvMvmeSYKa4bWt7F71NhfiJoAwVAMiopHo",
  "key14": "4JUnhmHcnpLyb1FUnaTMMBPFHXqDHj9pmw9JR4uRNPM2GDk3kyjyEuqFmJafbKsirtFpVGHmkAN21LAcowafeAcU",
  "key15": "3kv3HZLRfRFUkAgU8U6RPP55pf64xjy994i7YMyAW13LmFFj3d2PeAZsH3XERdqjdbQpaCBHiSAC6cX45b2iQ4Kh",
  "key16": "4QNs55LoPE8wLSgh1ee4rUdJyaY2nq2RXw2zRYCkE3tf69SCt65UzcYGcwsfRknbPu3icQm6bFmLz6murdJUR3Rb",
  "key17": "WbuBTM9PopPE68Tv4aFs8f4qk2iVULjsceYkvtMQdvPXAb1Cdd8DAsf4XS2UKnAxYSX24VNQ6fEbjRshiZtT1sf",
  "key18": "2djJU2q6PHPLMMj9YoWy2P4onKTXHAsXQeuDxod5cR9rirZmwKtph4U62RsmNTpPtoq5aKjj8aULdk5QaHTDZ4mt",
  "key19": "2VCS13u1NbFsy2aiu64k6HECCbt2Dq58zu5TK3Nhqbk1KexiSfVvSUT9G178WEQLYzWkjHhKebEz4GucDQWoxSLD",
  "key20": "5YpKU7N9NAKbToopDxpd85s9Rwv7AHFvVAjLatJA25mH3oxJhosDDvvNJuHD52HDabW7opT6WgKLyxNV7N7Cuhio",
  "key21": "9pjufpVe4H6RWVpeeFmUjgeqqoRq4MfMh1HpaLT8CReDgBa94M8JNqaZuqRqZKkjESBuUJ6UpRMKYUSvp8bedSK",
  "key22": "4tSJfccvZHaCCpXsJQjzjsveKTgFFDmnw557ffsPTa5yroM4UdZ6YsYCKkmrVeAEXPvBCNtKxBKG48meEnNfXJyL",
  "key23": "21v8uiLMt83ULzNGUwHHPparq2rEruZybkvpQdL6Hkv7WFFQuUwjcJgRAMuaoNGtd7HKaXRPahYB9WQRypexCvZH",
  "key24": "3eriRitG6MsHdSd1mWrWSW8oFevyWDvAy3bBJTf8jU5ppYgnoLE1p6DibDCftU3NUcTcHmeEcUcXCJ6rbZyTbKMZ",
  "key25": "3geSDrQGxUNNJZ8vVwFD7F7WCGXmY91KVcrxvYZTrGSDuHrfbnxvaQKq56osfBkc4QhA82s3Tw8f1Gud3cqNbcyq",
  "key26": "26NHwAUKDkSxtmwCS3umkHBfvtCJXHYknordtPCREp2RBVvobprhUvF8DcemnwmV4Drtjtez5vqYK7CcUx8i2wmD",
  "key27": "5GsdXcK1UhMcain61Sd5tBr5sZb7dvGsUWmQzRFbwkUaBfjpc2XknBjaDNz5mdeWRgeBm6Bg4is9Mh2AJQzC95Eh",
  "key28": "5fWWDwBe49UT5KbhYWbPC6XdNhYLnYF5Xo4pCDrMb27uxHEbw65TwrrRwLrXxTnnK7y9CUnsQT4vTTqvKuWED8BD"
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
