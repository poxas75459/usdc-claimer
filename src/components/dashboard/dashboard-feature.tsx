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
    "4gHx9kWiyc3bkGgREAAFv3vSemx9ep86252MwsuuUVvdeyh6VrmkVKNpuZfsGbhNLQLH8wTafaadKJ5u67Q7uAz9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RaGnLquRzTGJSaUoMS6Kf71Uaxo6LS1UiBi3UVVSqSjhKKsbyYY77V5YxZF2p4oD1LTKPGWB44UGJD61frahM3P",
  "key1": "29u7Q278ozwGSxyTJK4XgZKGFA6wTFVd8V4qEzfLvK4SPNsdmV8KNfekM3Xv1nry1SUiMjTRajz6joo2no2bUhEM",
  "key2": "36iUsnajep7QmoGeBVVh2dxz9ESb8GD1RhNwyyUxVeKeZjAGZEZgtFAXX1qrbLEJTSrXXjyTVF7BMbYn5x9PRaov",
  "key3": "2KY948D6hk4eZeZMFja6iHCueGF3F79EPoamTdqSGDLA6BZZdGErpLTajuGqNvBxFdopywtxbeYoEv1ysMm22ayH",
  "key4": "44zPwH3AwGYWJRwtQyF4h5PtHkFdNxADQDEAEfYaqWFmttcczqaPevoYpCzV5LTk9iSYQhu2Frj8eS9Kb7TnxeJu",
  "key5": "4T27BJgAZhWncCC4HEkPFmhYs1xuD8wDANnJ5ZBzj9UU8jR1sJLstCmtKq7rLe4VV5ddnm7JmoukU4LZ5ao4v4yT",
  "key6": "zbwDEh483C6bpo8oBr2Pt3ZDurrGbyhzBUH3b75CoMyq8yfenpScEc3kSuF5KWn8Bm1XfgmXQaKX9Uppw3wT2iV",
  "key7": "39JjvuAq2MJqqGv9sCLWDSobRbHFXz9Z3XMFCXu8cD3K7g76p5S4VRSaehHvwJ7pgR5EPhv5bwvZUizHVYb1RRD3",
  "key8": "33hZw7Mrct8Vc7NsqAPHyqAYYMQoyvqVT72E5sPvTVnK5A2jqrYTS4cgs3rPiR6SeXZiGQkbY4oe6uLWx8Z6DQVd",
  "key9": "58JQR5RxncPzoSgBC8HkPV7GaWgQSL9cND67tXSwKr2rsJB6bUq7GFqQpBT7tLBFtM7F4zqzv1LpaBbKDTDwJ5Qo",
  "key10": "3xW2FAX6KhrH5URWSmwPqnGupGDUNRpE7B7GhazDysrmxKMPX9WcJv1YPzBeDSrY6cLLv12xFWbJnRKc73eZyBKV",
  "key11": "4skko4X8QxaZTCzh9keKSZ7iWLft3YVN4H85sY1XC3eqodWSb8cncT8Tw26UctTt9x9hL54RxqJyTUTnPEyXBQTH",
  "key12": "4FHJsQwt6zGasx3YtJATnSRNxULWNwrjfV3cX3Ag2DfxjEAtNjAq3K5T4kYAjE6cR9LZYU4dZKsuiq4VytyPVCYF",
  "key13": "5vA55KZVUyDAjN7TfyFemzHEvPJo1UQpqXTQ8hpXR3fHqBKRkembBvq9zAo1Yw9Cc1UhR1s27N7G9a8stJgk4s6S",
  "key14": "2iTVafYWaQb2g8M9UuM5LaydhCww5noZY2yabhxKhE7GFi4bojuVY6xUqeaZtrxBuxwAXvdLiPUJHFjLVE3Qv1G8",
  "key15": "3zMstRBv8dosbAemkgKjjXeXn4DbXNvwgJvLrQr1Pj7t2oz2iibNYrJfnEGxZMMaH68hAg5aj8UEotUL6wfPYn5j",
  "key16": "5wSNJJZMc6gXTMWZLpALsJniz5K89WMuW7JgYNX76Z2LiLv18mZRdLmDqMtLKcEkYJQqYTDAZF5CJdWLrHYTm8ie",
  "key17": "52FhdEfMgXG8TLsD5YRukWQJyV53SqYZKTYGkuSiXDUrE7q6yiVfA8KnRFknQsWxsjsrkbvWXER7NjNEup4qHj7b",
  "key18": "3S1d2WLyr7P34gM1n2D73zFsmBEGYnjDaCDH7LvrShRkvsoiPXa21Y9KZLGDKutcybAqBYHiRPartENU9a2Dp6rY",
  "key19": "36GFozcBm8d3DL5Vvx4NNXb7ozcuy6cMHrPwvqWLxS7ZAMEaRjdY3PD5qdyeCAfY9MoYPw3z9a2Pjk1GSUSf6VMb",
  "key20": "3ujwji4fRQXcNSac21qyVVSknaksRQtuJXuj1z3Q4xojHPbodQe1x4cHZdnuA6ZXgHJxn4PcAEsNV1ogcFnS4x7X",
  "key21": "CeDe3LTW9x2L5NE9juUAaBUPUvrYZ5qhUaDqpZ6RuV2gzz8TgeYj9Zft7c5hzwg1VEjrmpPXr5Gb25sV9M91NNN",
  "key22": "3qujhDtZPh5EjeVH8NtTBuUuyGbn6z245YEDf5MpiC6DBtvE9apxGq37eS9MbTJ5VXTZnaid9RE6pKXCQLTEVq7e",
  "key23": "4evTSMD4U8L3kqbwMykgoN9AfVeuBApV21tet6DyB5LyT6GcnMvXZCxFQBYYT17gfHaV1ue3amn8y7orpmmmmpJC",
  "key24": "S14cokW4Dx7yKBjPMmSgRcaWCioSq2gWpybtPgRSvRD9kArbUAGozBE4VivDZJCgAHJBUEDWvTbuNzJKHipTRWn",
  "key25": "45urytpVPjErtMZpiCGqTqiz8LA2Sgi29Evkxaqp2dvHWHyZcs5q7tNWFe9NnNDjKzJTd8dBTUfmqU44XosWBqZ7",
  "key26": "5wTQj9VpmTngvEBpohrhnaJtDrq2Sn82o5jcHG9yHDkzJ6eECrgEYbgsgJygrgNKruqbvYXhaYrPqp9c6WJ3gUN",
  "key27": "3KrCka2MKZYLkAMu3vvJSu76EaRu8a1mYgWrjYGdbdpwYuGmd59HMv257fsrNfg2fCPXqppmdKSaEMxebpAkVjhG"
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
