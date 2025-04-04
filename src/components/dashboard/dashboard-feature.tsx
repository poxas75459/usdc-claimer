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
    "2nnLWpUJyUgduhLZTQwaC3hQf7rKbFuy71TfUvb5UDsaTf2zkeBgYw9oZdYcz24RnoDCRgtZW4NLvr8tY6CPxCfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpcCCSFX9AiBmtGtRxmo6qUJJoS8cuQaMGf24D5zvhCACBanT6kYwX37TErD2isvMogtkobf1VvG1HTCecz6dsn",
  "key1": "2odNTNSG89nXd1DkbRkimdp2T7VP3Kq1TEA7xejUqsuuntyLKAJeM7ixiDWaX5gmcewtawmZ1Dj2bmVKHZKikPuu",
  "key2": "4PsTJgTyRjqttP7YNZrBoqdhpwoapj7siXyeLM9f3rYnG4T1A3nVuSrRieDq33ADoTFFGkMTUsMXiJL1KK5XTkzi",
  "key3": "5qARgc58r7HU8uK8QoKF2nVnesVn4EmhnaUMhzDhGrDEXCpxCmgyCViF8B53t8hqR9XafeMqB2WSXx1AYihQput",
  "key4": "4px9JRDj5aZJ4Jej21KZ5Q4upeuJtJ86R6RTjvGGw5f9N7c26XT7Vp4kSzB31yRLLUyGUfvZi6D6cp6RyTWbBpUx",
  "key5": "J9nACF9JZf1Bemu8YFHEhNpM5LxaoJebNWVu7CXFs6876rtmkT4ZNM33LLDrf6XytyHEnmLRASGNNFH7LF2PAxv",
  "key6": "4TonSAqpXiS5Am1uknXyRXqMFrA1fujJExA3EkkBGXUGmbhWf1dtkKTryYMw2f7vqJSrJBFFKRahjo4o29L8yjga",
  "key7": "2jn3PpPq4DhtPUy19Ytf47oMMF78A6eas4aXeHuVzfEk5HNzF7ibU3srGeb3VJUem8ujJzaoXHoXVAnkNEobj47M",
  "key8": "2AiH11ogmadEyvRf6Ns2z5iJh62LisrDr8QuRF5rN3AEb2CspP9NuSSkAqH37a1Xt9oc7ZwYfbt6BsjsDTFp2ZhY",
  "key9": "FQu9EXHHbDqMSmha1BxrgKDLu711j8eGrCW5PruZUKbkLGgnFv9yRXodEQuCc5T6zKQwBwxt3S8gvhAWgeFcZ6n",
  "key10": "2W9a84d3uvkHgD3SyyDsnWpLDx2PciPXZN2AKV74JQomYJJyvDe7tjwjsDvdhpbDXu9bkZGFLK8hTXaWEXFGaaB7",
  "key11": "3uzDSn1sFe3XakUDrPfqT8Q42Yc58W7XYv4N83XvcT7t4nLhQ3boMF8xyCXbFnPscKhDSnqZyeXwBh7Yj7VEq3ow",
  "key12": "2JT8fSrTR4qzPJ3KSNLsuWee58Nkw3a4VFc2j4FH5UDTcFNMCWYDsCjGX93r8q3Nac66jX7qUvjsV6SL2fZbE31G",
  "key13": "2BokaGeRLYyr3F28bsqc5S7Ucbe5vBB9f9wnQJ6cPCegW8LgoKwqy8q5v3S9MjBznwrMb9141rMjeww5DSUuy39V",
  "key14": "2nHjRe55HktFz4Rw9nofqzV8TK2LPzaHjwMzyS4kH3oLg5YVnpNzRGyLNgB8RFBJwewMizfrFqZcLaqW52BTb2Qz",
  "key15": "5nUaM4TJJTXKEK6Gfaid4bfc77wYS62KY6SBWoN36fpp4egp3v6dxGZBa5gx4LZ4vdBYMiswh6EWnW5hFtNKuPcn",
  "key16": "28QHk9PfAKjxGSSneAcZR8Y1VPfXnqgFVgwjiS1j3c1ErFfkQKW2ayYzacFzik85HeKr9QnuGEDt6z3Gqoa6gwFh",
  "key17": "7GFGrhTKEDr9Bc1WoMxMFpz2qtPv1N5Ujze9BPUwr7P4xs1yYuvhpYKrGWmYXZ3FrjPke69KvaWJE7SDaGWWSsS",
  "key18": "3f2pvqPtHFctU3NB3jhb5mkvraKHtbMKMeFGS6eawY153RNxNdCUnySE9CozyEQu23kUbqRoUXB8gS3L5PLe5itR",
  "key19": "4mNq7sMGPD1ZJgESXBGvcc8qZ7nQojGxsHNcQPJ9Pkd7ZbGt54omcMEAGn43zkdacWxkEj37gTJ5Rqt7m3e5FS3Z",
  "key20": "59baiCa9aQv8uwwUZCef26CjPxL9ehSmRHHYMh6mcs97z13kZf6c9EgbH7LyXRgostprdJQsJejxjSdp6AUijka5",
  "key21": "5D2Dc82Rc3sGxMckbcpvLQDjpxg8He1sBxqFqMjH8TaimQTzPnskUu9hYEscUeiBPTn3sg81V3vdKV5PZGMpfZS7",
  "key22": "5D1XoHjASpTKZvAiCacSo5VyeZrAG93PineMbBiDutzchfKMJBfCBvpx657xM4N2RZU2i3qdEVkUz6Lw25m7QnLX",
  "key23": "62LLBKyw89ys7JHYtA7CmWuC2bcdfxpbkCY6zbNjVw4uJX51wqVjQJqxTHZCxLsBfZeZCxe5cNfjhosZbhCEVqjL",
  "key24": "q7oKsifPCxzHCmmaZKf3kgk4Y9tGt3sNjGKbLaMnKcv918ZLDp6UqdAHuYnKvejZia13tE6rCGvVzHD7b97PFkq",
  "key25": "4BSpsE6sjZ13LgWGR4DykVZtWCfn6PPBinRLNUjPayaENXc3wUwTsqQoP9QxVokNZbfRFsXhGKWrAuF3o2sNXrsh",
  "key26": "4RxuAyGWmWsXXnWsm4MdXgwx1SSFyPnW45EXEQLtiCxSUameE61Z3vRDGQk6QY5FKmPLCi4C4D4AowWQnRQKRRFa",
  "key27": "4AuH31e6aA5Bqw8KfWiSJAtKCQbd4DD4V3WtpwuWabAm8N62ZybGXk2n2Gm5cBA6onBkrYc6X7ypGy2iSkkMJLTo",
  "key28": "4c5ieEKYfGE1FCzekNw11v5GYP8FAr7zEHZhesT3wDVQxoA9cAjmTPqaPjcp2xuhwq4haqRRnKWAVFhGV4SHXy65",
  "key29": "61Dppv7QBadPLTFrzTFWsHAiwCokhF4XD5gNDoJhb2eLtSeqExMJ56xnYRq589oXbk4n7CxQBLdcgbRX9Ar5ybdE",
  "key30": "3Ygx61KkwhLfEuGaNQG1s6pLFD4oQiX3AY6VJJeS2fuX2Ly9XkPLgjw71HuNgdryLAjWZboqynPVQbQMwsLmCSrf",
  "key31": "23AknWLcKWN5HxHtomCEzKWanqbCWMHnkj77UqM9wVD7VSuo6iBPVPE3c9YqBB1QKpSf3g7XGMdRu5JrXnzhz5hT"
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
