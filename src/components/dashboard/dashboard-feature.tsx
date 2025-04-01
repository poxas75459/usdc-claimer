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
    "27sD6St5i9tEcW5Va5GHRnXxSBDMnXvWm7LiAErBS5wCjA4NBMv7qzq27czdjqrJ2rnMwvinbZRLJvCdewtQsuUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EaLqt4ER1XHVSX6ogkywbQhSykJN8vr3GMgG2o4hdJ62jZLJVWjQvVaoXLhNdrTfirg4BL3DaJuWAQnrZMMr1CQ",
  "key1": "rEZYMR4bBXjPS26y7w5cFkCr8cMyA8DZ44Mj5xnBnyHPkggUtiQVzCQhVGmhHJSXvgrTBEB9swPx3JVtzvVnBZd",
  "key2": "3Yjjmb9YMA4Ed9KhGJzihpYhkG7ZsaZm7Zvi3TJwzL2F3nhtQSTi2GxUzz6pz77y7aqUEK65nWGpwFJ3Ea2vmeLF",
  "key3": "2XSUbvaVXNV2peRfyVB3kHzDxb9eFUAXWeNo8dBEBA5UwrqwMSrzdQf3rnxfhq3rWVqKY6HN1t4vCKLGWiyJF6iB",
  "key4": "4d1dftt9kVCSDbU7q2qNkfLf4sQTschq2LqkTJbHyuND825PCFrign6rbhSJAkqtisTPNEG4zoEoC7sidXRxUT1X",
  "key5": "gCwxR1ibbPxnj6yqgZAWTh7U1wG7cfpKTvqTGisCysHCyhsNqaaCY7WRf7RdawXvrcZT5FPw7M3rB9yYZdeNUD6",
  "key6": "Fab5u7pWP8w6zNwK2HtZcAo6aBAbivHoSubbMzHJjGedJjt5BU6Rq7vbbXRGh7mpRn6jZvoWv58gBbATbe4xm1K",
  "key7": "2cf5LdugsMGKrfVkqtwp17e6KbNokGfsvNRd4GdhaCRfH5SCK1JXNzf9zjAntonUEEp39KyEYGc9h2KK9iJX5iPU",
  "key8": "2o4KxMTSbnmq1qHQAkD7cFjxzgYvdHLcM51pS1TEijTM3iwDUKYsWXhmqd1ZyFS8quDaNd1cc3XK7iREMCbytGja",
  "key9": "2xCmAwYjN6iGAviNtqHNFkbxBjadT3ZqRhZfwqEQJTY9PCvcqiTNZWNgQWeToKiHL219ExPT5xA8EaXdHFpm5jvk",
  "key10": "3GJZYX6oqikJcgHU5FnQ9gTd8VgUAUbzh9doNn7qn6rUfbMbLgCAaH9znwdNWMi3zznnFBtv1Ven9XGG8SjGYLnx",
  "key11": "48F326DxpUjJ2WFA3td87gHEro1di2Dciay5dHe55a4XixeCnBc6pfHnprkzjF6CSYCrsrPdJroeiJNSU9yPehBn",
  "key12": "N5in7jpjytckqA4xmpFiEVJUdw3Bmf75EwFeAKqbFQcgbGVRJdH4wGHcYqB4D2AMzcYdHRXYnxpyZViebFkxVpN",
  "key13": "2gMQCgeqenf5KLT8Ztnu3v3cjjh98ND6DCTQS5wdYCBxuqPkXWH7x8wKRy9a4BfvMnjV9SA4jALZfsnyyobefXbV",
  "key14": "5fmKiWRa7dPpeE5AkRz3jipyDMLynhDMFPAdqcvowER5Y1j7bffzSzz1ysLt35dMvNhzGVKkPw74UgSyU5qw5ufq",
  "key15": "LUkNhScdHJxvwK1F39s1gFtEPymvZfkAwVkcajWnhwsUxDA8xWDfqfw2ZVmT38XqnCu38toNGHrR3fRterBXbG4",
  "key16": "5aDhXTzW1eaKhLkDu74m1uU1VtZ3DqkCiQSyph31AvSZnRnDV6HXsDhHmPVsZEurLFppEWCkAUoPPbuCUSfE38zN",
  "key17": "5oyo3jBn74dHXppXUQVfnyUcwigGNpwGLDNuUDnCVs2JPnQ1wLrzUGuajNpx5yEqLntusyL1WkAMxJaPWWcrsPpK",
  "key18": "jiKKJAMefTtkbUe5DDcdtPh9X3qiE9pri7vhi94bJg268JmNMDvrn6rPTGi9Uu5MHXckwYvqtq3ApZjhStXv2Kp",
  "key19": "3iGfWkvmJD9CzzQ17zB2EfKvMTFHYX9rcTQN9Y934keF46mZKHxadixzAEtsSiG7AM7zNtB9fYsz8bJPbFwHSWHu",
  "key20": "37CvTPY72cuWaYGY5tBXi1ki9koyDc9VX9WaVM2k2xvyjSgRhVrNCB9tWqmobbz7YKna6YuAsL8MDmA2rY2ywKbo",
  "key21": "53ActhXizT6hx7bSPDyUv9AvdSd8BZ41aWxo8UfBPCZunRBkT7sTkmaVCUd6B1nGvErqJuMeEh2S4cWKc15mkQ3U",
  "key22": "5GmpM5yUs5K44zyKg9JHJntpvHBPmqcHumHs1E7NxapVsYTd7efM7sKFqHZKegTpFXc7QVpdWrDhuC5cHnGPsHVD",
  "key23": "5oVf2Lv8EM5kK3PkwTADqsoAdTB971kz1MVPkhidNqJv1Aw75zkhsYAkkZxTXYNLY2kQpXPbLpBHjJVZjbeSRUjP",
  "key24": "2i3anVXbagGAhZYw5NB59T2kmwsn2gjDddESLCgMmCutdVSfNRGamb84euwFBB3Bu8gVZnhjnNDhvkJzDWKkNcsq",
  "key25": "5CvCgrFwussxhJ8Rn8Q9A7Qj965GUibDvPH84uRpniDW1Fcgq8ET7U7VtDbM55YkmcVX9eS1LqyCZzryJoWkph4s",
  "key26": "5b1i8muMHo2hFrdBniFY3pjyeLg5pbCZzAeKLo1xXnfRMZfmmCqGt3pVY2RBSUpkgSyhrALCLyL9HbwCWPkTu29e",
  "key27": "3WnSGWZ4AfpAJpnpvnw9tRtS3MbUMKMSKiQs7sHZbT4shcXiffnJ1uidfg6SQ9GKMiAbkv2ChGjidqEj8CpJ8vLk",
  "key28": "5rTs3WtKYVb29QhDhUwhAZ5ACAw3zKqgfbYHr4zKBJZatZgTsiFzaGHv69ECgNEUq6Nuka8GH5saomNKjpf5HjE4",
  "key29": "61wVWRGm6bRUMPaVz4zZfXv5N9LKfxxHboKcFEnggJXeS5trUXVpdfg8pX8GeWhjnC8YFTSQvhYHNwGaMt8Qnkmi",
  "key30": "2rDKhnyMF1n7taUBGqwNXDxJffu8f2tML6F7F5vAY38m5maq5wjs2XCk6vj5fGbA9SveC5jeEkFXCjtbyTacJ8hJ",
  "key31": "54cagowbCLsmYVnyPRjWN27YfcrW4z98GjWzWScWppuAqBfwFFe3bPPZMVTBvisLaaQreGF2GW4ZUYLXtNBtZLRZ",
  "key32": "2skpJic4eC5GaLJHCKfUBUpkQkh3WAkJp2WTfUPcD2v9np1cur4LTf6H18A9e7ZxxZCVn7RVhv8rU2yGyouqf5G8",
  "key33": "2B2YQXGjPoeCizm7sRyLSJDeCnsTu6yWXJTyfKjjkvQWZyiVttyT2nnA6Ri3h2zyo6UwN1d87NRiBFM7U5TJdrS1",
  "key34": "P2cDRW5UJUKBM4J7VCF9VQ3VRCtv5xykqbxNoHpk6BBN12TCSw7ZzyzPBfoPtQPMd4prA5Hyeh9b6ijUBjKeT89",
  "key35": "4CWitp1wfpNxaAESvjkVCLBZTBE1GJdvVfJZb9ARRENj2uH8ufv6QcyD9bw6rPqg8G1qnp4sqi5fgjCzifUqZPzL",
  "key36": "5P4koNKudefsGUddcmq6nW3BuBpoyPNg6vYz9ANvVUtWQQPkmfVgywxnnFWoATLgW79AFdYzkonDwG7rCkTnGJph",
  "key37": "5a27yV1NsJLCz3fiuuStQYh2hRJtWwmdRq8Waeq6NEnmgaHbqJbHTAfSupDvSY9JbdKQFqv3rU5QRKyM6QcT3SKe",
  "key38": "5whGJpyYVG1Uj6cz59vLr9kyFRqduXeFtkJGDE2ZXtsaZdcje96eHV3TkrX37bVwzoWWkzo96zkn1eKg4YNBDJ2U",
  "key39": "4AwsYq4eBvCMHcDUuPJVLFRBPncBiAcXgstuXgUsbJ3qZ3mpoovP5TMhsmRKigp8LxMgnZqa31a2onVH9eCLMYoH",
  "key40": "48wBRSBCj1WkuUqLEpUkA5BoTf5cXtSLLbYgbmrXYD4BMkYM73d7iYTkdP8w5uNBf1DFeKfGxAqKJCqXpdiQ6rb6"
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
