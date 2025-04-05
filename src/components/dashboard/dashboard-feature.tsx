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
    "3md9CYAtfQyedAtmVnXEobLzquQirRMGDHoViNY7hEhxjSwu78J5rWt9kHW9om8VbpvNbjmryC3n9trDFepo8WNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3j236wQgc3ktpMCftFHqEsU4SB4ePX9UmQi7eJDWtqd1Ua27fAiqpGjxTsjL9gUF8hc9aN6Qk1XGebe7wnxaA4",
  "key1": "5oNgbYGZJf2x8XhimbJpyQ4NvBPMkLY6LgjdkRw2kZ8zxtXaU8hxgwEXZynq6kRRgMLELnqHKuLKQoTYjewauZHy",
  "key2": "2kY7968zztxZifWHn88f3bJuPmXJZUbSF7TVB6witJcN2RgaKjiUH4zcUawkriw5pEypJeDBCFymkCgx7NwSdzaB",
  "key3": "3njUhZC6vPKjsybXc9X1GWB51VUnr7nHd435rnfr7JhM2Ep6QkdwSFZsMzw91xqUUVcmRcK7tD93saDpxo2F8S6D",
  "key4": "5pjnZa5v5MckyLWiDfgrJVE57zV1MGdc5CCXXyuWkzFi3G4ADk9kZQUAx9FKh44R3MyqG4YVDVnUXfYujyPN6AsA",
  "key5": "3hTbXExpPPeLKictw7RCUEQGdrJDZ5r91SwaR3ZjLSoSf51fQAQ9AHRgRWBFSWEfRDDUamfWygNcGrP1mdu2t9qB",
  "key6": "PFS9KoRJzZKvfYBFEDWyAQiVh1smAB9Ab5y7fcjTfhBUkdJAEz8c4EZTHVULJHeajb5rCiUCEKRgra9qGQNjWJm",
  "key7": "GHxq9DPQVHAzcKaX5o3f3Fryxznd1NvQATJ7JssaABL45EZ8zSiNjd7Wwceae9s7MNYf6PDbAZF3ga3HCkGbiUy",
  "key8": "wQuH1zeuvVKCGUYBNCu4fuJ7zPCmiKr4LCvmJXRH6uYJn3eCwqZiLBV27YHcGMjoMm57mSYtA5qWAfgut2KbZAk",
  "key9": "w3Meh4AbFDffUhFzoeNhoHy71egNKrUtygzbyDGA2WanPAHWw6KpJqx8GYDganVdhYgDYnPsKVfSC3wqbbBugBN",
  "key10": "3KxNQG2JJzaSsoZRtAXx85FqvgqKghvCzgzEnKPPdZarwmxREWH13q8QXeDKYQXBqpDRNBrymz6LzrApgWWEAVZ6",
  "key11": "5ydrLeCK54eXKTnRW2JAme3otf3oHQc28eCCMhfNFpHRUz3h5Dr73p7vAfzuKEkiSV99tyYQfdq2o16E6dAjDm9W",
  "key12": "4NDjmaBMLHcLLsffvVJ5b4QkAPArFRvUoX1B85eKx7Fk8auhndGBMaF7kqqNmxoec2JxZQrX8uaJ5XoCvF7A9Hs",
  "key13": "BeoxLfrrQ7jrmdcC29sDUHAzqt5RKTj8mDPQ8gX9Nk2QhT2SqBw8eot6Rz4LMGSFJJFNyoRbnw2tR3dg9t37ZAQ",
  "key14": "i8YKRYNm7PDqPWgKTH9XToPGSPNMmWwm4QKeEQaWs3Jm8kZJ3yDKL2fqZeCYqAQQQwBMNgyf7CGNk4zpdMtZMaL",
  "key15": "3f6C5mMfG3p28VqVzYjc8wmTzLh3it2XPSpSaYLuZYZcy6M4GsYGNjtZc8oj9aAL65dJzJY7nzPmkp8KNSFpiHiE",
  "key16": "47UAqhtqhXVjRgsAQ1nErNGnqsZVAfoMvWKULn8kq1Ex9oFrTRSy7mBqaTMhMdwEK15THnkpgFD7PuTLgYgspmy2",
  "key17": "3RktnazqhfBsqZGmpNXjnrQHjVuhxFDKMB47hCk6FaECJ8ressyZBw2pnGv3JBfz6P6raq5beMwAC9kJU6cTqmQ3",
  "key18": "55Vo9ats6aNSqHmRD3zLcqUn5st9gfTigpkpGAKxYU2Bog7ycfYT7MeUyCS6gUo1Bg48oY4ZusSZALtYSs1XRNeN",
  "key19": "4ZRgbvuH1BXHezUcVULbejeDpTQNFDZLjtZwhA6X99oWe7nr4dgWsqDzK5NR6NfjTDydmrjk23XJ17ZBvwvwBX2a",
  "key20": "5LpK2wZFiha8zPk7oAgnuUaLixJiLTz5Q4LQ5rCDEpDDe1zmvPUZFGFLvuwcA4f83X1DqsNLXHLEn7vp78zUuLR2",
  "key21": "576MHqomFocZANcCoCRCidbuDZE4aNGmUKKN4z3nq8qUo4cYNNzyb3k1gVY6ozoZYgZj7Af9LVwecSaQm5DHPDJo",
  "key22": "3QsRC2zP6SUZ2dMaq5K1jS9z5CZWiWcjqraJ7nSSnkNNn4nDGjW1oWSnd3LYQPZgnk2KG3KWLwA8gmtpqCozL6Ub",
  "key23": "1PCnhpuo7Fsii66Ftsf4nCVZUyF1vd35QUvpqTNNYAVuiMECDEnsZKA8VJSrDvd5VBnKThpXrgMwiwQTw6bhivm",
  "key24": "h8QRq2fZqcM43J6LYQC6UREnnNEyrebB3xXy5NTnc1MafWBhzWQjj4Gd875ekJ6gQ4tZ42k7DYRtzJHhThTmDNg",
  "key25": "2Ky677nvE5J5AT9HhwA4qoecKum46RwVhvtjKDofmRcE1G8skWRFakDP3tZaHz8vRP3DDdo2rrWhXnfS7ttz61Zt",
  "key26": "4VRjc229eMRVun8cUcUqWsK3pmJn4zMWhHspJfkfi2a8YrVcLBGecAJGhNc7MZzRkgiXg14c5fuhwFbLDgTsGLd7",
  "key27": "3QauqGCaF9DAKdxDja118Ahz4QHxx7XqjcwHbAjMgJqtgPVSXgqzKkkJTDmXwYPGDDjRxkEqcAEPuvDQNoKUFH7r",
  "key28": "5uWpRszg541nvRBXoCPNxinuLVdh7bN1uedAYYCUtdbiggc4BEYjKd1H8pAjnKxPhoioLQr5kAvtxPZCiR1JhShs"
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
