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
    "8KCNqtSdqPcTovFvkqqAGWW9bBbKh796GdiMqrBxcWi4KrkUct7ThQQynfDZMJZPcUbwwRm2xXYp8kpejnucE6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ykuXrHZTqUPvNkFySbLrAW6JC34JMGGQEvnVx64RSMGMWUmvCgKBSngep7a29X1ABihHY48WydQ51MrGQBrra9g",
  "key1": "y5X1We5tM83o8KrPaSskRGEdHP4pAEfpQgiZMB2SwCMRNhL5ZzHqVrbcYT4WBXZJMz9GFF1dVsQ3wXH1YFJ6PY1",
  "key2": "2htZsLjjNBqSDVMAiXKPvMnDHF6UPcQAy227tUSYKpruEZiNvWqAA6etyodZNw8UNDMTZuaoEtdyXGzc4b3TUayH",
  "key3": "22mXZJA8KQQqsmU7PoieKYEja6CuJCku1Cpf5nQufcHgzyg9i8kMUwDbQ1mAojoa7nB9UDSWkjrpCfVNCZz621n4",
  "key4": "pUBUmuYwhbk3uyxnVebG4aAkDQG3qUrDd37canzvVqK3R72eTQicoXuSMuBTHMzUCPJk1scJ77dL4bvP6D6rpgt",
  "key5": "5aQyvzyebjqSiHMwHE6vc4M7HXkDHaJQkcBFkqV516aQ8venACPw62AqMc2iUG979YWFugMZiLrFVN5wfTLBkdg5",
  "key6": "479mb68emZdCTiSKZ97sPejrEr2e43kZZoeRAQ1jRP4thKfzQTfTzg4p3bHWtSFottcU3Pq5Z94NPZvxCrPpoDzA",
  "key7": "3DULfwmbP3MJEuzGh3ErWCSFhgugV5CfJChpnneNQpVTy6qHoQYuiNqsMn49iQcfHuj479SKc1QEEfv48uoauQGh",
  "key8": "o1spQvhqUVgkhzxuD7qMv7zNsPh64p7MN8TrH61ZNg581aaut9Gqr1EeuceQCwM4DHtD8AcDZJ1moPmvwA1hV3P",
  "key9": "64aisjZ1iotciXJvmQNgVe1aEbtdJr2pq7Sm2KHkqA41bwRnyD5ZQBJvYMEVRSFw9WBzYN8N5domegbA9886ftBU",
  "key10": "5zGssq2rQhGxx27rrSqoEEJzgsMngACVPw7kx2jXhNZ8Mz2KW7zQod5pnDvZ66tvKvVfkjJQz9MMpTvBNJS1FkMn",
  "key11": "8wjFKsnjpfKvk24L6f1HbJvSjJYUZzcWK5njwmoHzQ9VS31Xv178BdzJ36eCbZ5SvhRi9YctrZhvmXSHLNpXoT6",
  "key12": "45EzbPF1jhTDWREBbRaFwwr1vkPx8s9N6DxvqVFLw8CV8ZPR78csNJCorVuAebfsSz6kPPwyfmxg2o5QVgXaeVNa",
  "key13": "3gKgmP3gSkHWfBuTznSwxqEekYu7DVWZ47cZpk76X6bpqU9JyuWcgMrqCvQQfBRmRjFfNRiTpNTKA1S7tVTyhxyr",
  "key14": "NEzMsuM3NJpsfwqce2jY5cZMFUrSDjgy9wVGsx1qP8uEDsDTzuTJzZ7Q3DyxtUXoFHcMiT2ZRAyjFjjyDnRjKxU",
  "key15": "4ucraUudNrb9s3eg8tb978UvwATA2L7npX7UraRiN5JJY2XdVWqebmJAgbgbERrrkxiXyaHgYLvjUEh3WHzmyqCj",
  "key16": "4AnLsjBeVEeK1TEKhsi1ku5DK6xdtZwuYGTV7uAjneE8wDhwtvAYQKvx9L69wankHMt7B6kaWaWMq88Mp1Mdnzyb",
  "key17": "2LUvdEaiDy3mpA1qY64VXmDM4rxN2zyZ7fcjF7zH3NBU4vMmfALzUaPzLir1UwFyTL8UMGQuihAP3hQEAyM7B55w",
  "key18": "4DV15FjAGFvzmp5LoYrxYsTPM6BrBL6ro9fr6wXBo58cvso2voz3e5HYS3XSnv5areNzVdNauxxVrAo1dqiioabW",
  "key19": "2zGTK6dZTnUrWXWt9vsE2nQf875M3Z3QxtwvDoTY6tVVKaNhzCBx3rFvitdhPiceQ2S7cmHKu22FhKfnnyVdPSDq",
  "key20": "5VhUyKq9zL1q9KVpQMCLJ9pqEUQNGMvJZYpMfQcHHC2j81hfc7T2kCLpgyEWoxpTFQWEMTuo43gqPz9pdYYbwrqo",
  "key21": "PScrNd4NCA4yuZPPieMqZ3zwqta73zr1JQGZhyRYcXS6Q9TQDktEQ96EVN29oEL18MHazGR9LRgnVKCCDFX9eVM",
  "key22": "EtFbpbScbn3WB2DwAzAvuUWieBeyX8Jz1hkXNDS1oryyWbNzexz6zbKYssTZZPr5TLozFY75czhiJXbVUT7Zjwm",
  "key23": "5RircFSvN29DVQFjr6TqCCwK11PmqR3HP44afrVfDahSGRBVRB9Q89mzWYSRY4CoV9vFbuK6y9rDv2f93WzCnWfV",
  "key24": "2Xavai7UsBawNLpMoEo7PAYou3gXFp6WEPiEHHnUpgGsMZg7hcMye2mf4By6bkb9krNaAVZnT9hu2pB96ufwg5FY"
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
