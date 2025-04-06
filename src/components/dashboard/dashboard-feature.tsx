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
    "4mwq2QyMD85e16HDocPeMBhzQGGkh7127QRLzrqUmkVWMn4CS2yYMsyAwcqtud6GuvtkDQe3Q7nKcBfXvszbavmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uV4f4hrqq32rbvS72STSqXA76oo4aE9mhUjXGNKCtHUx8FvKpQoUR1i2jyTHnqpFox8uqP5RnUtfkky2rXeepDF",
  "key1": "4Z9LacESYEQyNRRfAVFsqYVypTNT2LFdGGhC26WLfHNTgsgwNp9x4tvmQ697UyDyjbx9h7sadjgPqhjvTamLmUF6",
  "key2": "59MnQ5wtpH8YbMu2zQqjmWj8d6ZhwUo68BEMjxaM4FzFoPSjma68j1m43g75WueMPxJsVkYDd4HYTERvnHwRAoow",
  "key3": "5r7R4pfp5LoLatD4MbsrrypX6DNJ9TcUNXRzmY5CEJiVSg8dV185kphM1shJKUw4xhxJaZ9Kv7tXbgv53HngnxqQ",
  "key4": "wUeLZRGSBNFbiFq8TVwFqHqwU9Q49hKvLM4nB4TTqe2Q8iP7mRsLzL5KDNEU29S6pFXB48DEGV9FBec4drYiNiE",
  "key5": "37ig1AQnrtTQ5edz2FroKknRpCVGuBjn3dauQqmhbWPsPakmdovA9pMMkLwa9M7Ydw3kVd6yFCpDVLSxXtQqTPhq",
  "key6": "5fvNAGzGtWqr61jDKF2JXCvXGnWfHuh3Ct78ciVPdz6rHyRQkQEeCWTo9yy51ZsCZJfS7vXQF5bPiPTUZYQFKaYC",
  "key7": "2GQnGj6DGmhRYM2fQ7Ck6ETU5eakJQs3MTNdGJmuMZx85r2HQ9c1mkbLDx17ueGLANzKYqNRrwxtEGZitkjCG17M",
  "key8": "5gBmEwWUbeR9mCntUK2ynH7uUX5RGGphvNt3sjKGi1iKZCFLYSiTtN2CqbYDhF32fPjmwFf1LEt8XBwActEyCTtR",
  "key9": "2Z8pxfVzxsEFmGjrGzxmD2pB133fzVEd6TRSPcwAfWy321uEt8kNQDRYPCZUF5CcGvang9RiEggJYPPrfAPV6J7B",
  "key10": "SsikDmkUYzGW6B6ks6MHwydupm1Dhj6KsaLkYnfrsABHjvfbfjHU1aj8Aqig5uts8vnfXdkN4LivEmoc2ToezuL",
  "key11": "5aH65B8cJKJ2LAmxrSBREcqDQHvHQsyR23djsSdM5XqXbMs89wnT5DyKNm4Js1i46UHnNycWuHvsffH24PDhqQLQ",
  "key12": "2RYCrsQQQatSCf9EDhCTzthoVsGcLYYVoGER4GAZp57U4RAT2kv4taTAW7bPzx1w6utJ5DR2AsgDNHdjoSVCZsbJ",
  "key13": "2qrL6EVyjBHHy5BYV1unpjfxF83ANGxbRhY9MPfRp9YLHZFgF3V188BvfEbiPvsp8g1PonMuxyuVLJfxAxgjpsWu",
  "key14": "39dYZDh9rr944Kabd2ECG2LU6LxYZRzdKtEHRZXhF6ibr3Nyq34m8ZPvNMEk7g1tTRpg853kUzWYxyxK9pnBG35h",
  "key15": "4EDKaVYcgSY1BtRd5SYuQcuQB6aJHsqiF9gm6BQxcJUHj7ewnCBTafFX4Hda3YH8ag2m2kEbPYoHwrUAhvEhHYwc",
  "key16": "4spjhSfFGMChUCVCsEthJrimp2bfQKJCUKtx6Wx7g362wpTR3LCCEtmLxpsZ9iYryicQYCKsx6Kz7XUjnZLspTkb",
  "key17": "2C5iofNV5s8daYzFLQbX1mtW5V8fAckZj22apHMWrRz6vG7aVERo2dk5TMUzecJVP6413a9jdQFo5jWtxz6ZMUEB",
  "key18": "3bxuXksqt96FzPXCcMMktKjYqnMSdoxyMpUjx95utdRUxw2p8RjKAYZiXV7xPRYnkZvGmoUvHFsDEGSADdEJrGmu",
  "key19": "4KyC69hGs7t4Sb6QQGEbsWKgZmkxW7DzQc3xuQEhtTaeDJ9vAfbeaqkDsqiRJP3h8ZV8zQKB57CxsqC7qybF2Za1",
  "key20": "5MUFbAuxgxAAbzvPQXSwHz2BtWQKhazuKbLjiQnEDR9ezqbvPvnUF4N8t9DDsEs4wbKYcMbLmdJfzMJtJjLFMgLv",
  "key21": "3nQCpL12hjNy3xurhrBGUq6UJ78zJkJt7VSK4TahzVry3QrAaaQFMmiH12NTppAjsA8wjvo2Nq4ggXyZeNHB89ft",
  "key22": "5WUzqUN4emf7XJkKk4ijWishpLgbDH2jfoqDX3nHLDeRjag1Dqwj1ZZKZ3qy3e7yxX58QKvexceVWrc9d8t8khMG",
  "key23": "2gNqDMYr3dfoJVZcHD12g2M9U9sPVeTX5Sr1nbEY3bVj31jc5X2TVeimCUt8A3suw894PyWV1GVc16fPyyjHMWRr",
  "key24": "5p8LjJHLez6Q1r6mL2r5ZkvadwrwjTcs5f8RBKwHXKn3TFMFT6owarq9PCJpaNwdV75uaB3sVkTyfFAJrG7NtKt4"
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
