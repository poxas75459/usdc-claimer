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
    "5G2Ta6HyMZTMBUmmeyE3CXt9Yne62PEzSSDQZbamNBis15mgLK8FFYr6s4Ge8GQbps68RM9oKXoaiwhEQhf712ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55W7141dBUC5FhqqGXCYPv27AnuJ1VREm7Jao3QecGgmfqsn93m8enfMPCseYHBiyxReP77PaqjXnhrjz9Ux9Cm1",
  "key1": "3MReFxyyx9rCeghc9ZKXxV7xCbUFB68TPqFpKB7A6cyDE97iYDgDjSPVbf3bemkCVYqJ5EgMZ6atJdd93inbLqgE",
  "key2": "47exGZcw7dczqiccPUXKej6XoL4qZ8JpVsDbEkLCFyzFBxL9fMrsniZjdb3RDWasyTfvWtztmXh3Y5PKBENvw68a",
  "key3": "5GeR2Tfu4Hdj4AM82XB3vTuufgyi99aScUjpJGe4aVpwyPwHXx5LFA4K7QH9HgqJ4sVyW6t7pmKrAmcnDnfT1SXY",
  "key4": "3Bsa2mLCXEpmaDAoSESjnvqvBQmNMYviQbpZbLPpZnW6TfgGx6F74o7Xp4yUVXcShP766MwmJnhWEfYjyaX6xfKe",
  "key5": "xDbTpbDyebBGre48VBfxZqnCK6GUW3YUg1Ds7KS9YwQVRnKgu8yoa9Paaey7yQyZ9S7DyBCQF1389tyNqFNp1Gn",
  "key6": "3mXr7Tn6W2Td9ehGYs12pzvFVkXPSPJjmcXGq3PdUjE33PtDAmpfhW6JzAg8CYNh3QHmDq7xVDuS5eYkkyyTLmU7",
  "key7": "4PZts8BPaNkphFLC8U9hxQCG9cDdRiSBhpNKp5BbEwF5XUe4twvdncTevk7Vx78HZXPePrisdAXsWLNcRTyypZKx",
  "key8": "2Mwwq6i3Hbxq9yi1roTgaTwoKSBMgRZoaomFm4qjE4X2vUCTDs7jDxqKcUhc1MJ9TksdTFriiKwgQDk9K5UWWzkm",
  "key9": "5JG6Hk5FpP9rvvXNppPuWgLrRKEv9WZ9RVoU72mKdom1NtSn1FJAfgGjHPx611ZAA2ZLrWzvtrq5GhRhxY9y7sVr",
  "key10": "GHVDhz4rfF9qxsbyVgEw1aP5UyaaQ5MjUyYXLuYgai4wn6Pv6HSRYzoKBZtHszCSx54k8yhWLivr6BryohrxudE",
  "key11": "24fQncSSEVzi1Jy8xFGRZQd1QaLn2hMMZ6YbCFCiY2zh3bXh9AELwgo3eCJcvwj4cDCWodvZWrRuPZx2C5qdc5jf",
  "key12": "55RN3g2ThbdTEanpBcF8eLgqyKMus9UAXUHa8vs1xH6Jz3J8JrqgDsXGSsAdTRNBSUFfo4Dp2DeZk34mqx2ExvmU",
  "key13": "2ajkVHymmrdSK6kQo1EGZCVq9PfTHjbWD6drB65vb9xfgyA1JuD2PuNc855oUDNUmRoSL6K7red1UiLBp5ud9qXf",
  "key14": "4TcDyUm2kxTTfQ7rLD1ahtEEPpuDQQDQPMwZT2zqRJfvt3wDwvKybnEHNCf3kWC8QBQv8mfxZNJdFryJawZWxyjq",
  "key15": "4FE91oDVFoie6vyHSWqy9TCX7EtzpqfWiLek5KZSMSEnKjB6EQYwdy564HcxydVfXHMatj1VwjSDHVL9fSqY4G19",
  "key16": "2cgiwm1wws9RNscCiWXr1EBTKAmU8phJ8cz1mv5LpHASyezR2zvLQt6v8WAYXGPeik1TdAY28Np7JZS1vD8eD3UX",
  "key17": "31L6Qr3Jm7doGUENS2Hdjmh4kNLWfR2UrxypGh7oKW9xNJkmwLkYaHf2GADPKynrNjHDq3XjiNTn6di9k18UeLAQ",
  "key18": "5yUZBkeNWRJ33wEjRSgutDEW25jHN8rS5cxfkVHQ6E2VH6ARjMMaesarHVWUVgrdVntLQg62DBKsgzQDoYLVTESi",
  "key19": "2ioxJr7kXrsecHUQfvFNiHeUaNsfKXqeVkk5NMJ9GWLC9RsK6Aju3pcSQuteofX2SHgPASM81XxAgGWxNG5w1bSx",
  "key20": "29zKj42KsYUrHTbG8iU1oD5XA6EruoXpeUCDBX2ePxkpEBYpkjov4HVvvm2Kpz8HCoYrz3L4vC17FjKJEkLhzgpv",
  "key21": "3wjRcV5a3ZGBKX6MHG5WsEKcWr9cswZj16C1sSpvhLEyfavG8Fi2SsEM3QFi57Doyviz9bM41rxk1pgbibQRV8Ah",
  "key22": "52fZumDgwfXtRSoaJzam6MZgEfbffjwEbatnkV5xkVUi5jHHXN9Yb1kgp47iGrgLoLQsydb7yPKmMcixoYUmVU5H",
  "key23": "5wNnwxoMNbsuxoaGuLuwbiX5payrk6ChKr63ihG3Z3DSTdjk6RUeC4ffdQMw1Me4MzRrnRdegdZfrhyX41qRbTdm",
  "key24": "4Defjzg13naxg7wdhk1zQN5HRiZJ448T1GDoeoiRo3VxQW5aFFqhqN5Qedqm9eELmcZyv526mEeSEm8skfPAqq29",
  "key25": "4NicVKHNdy5PBmvhnGP5cjgGTuxoruP6VKCvQxDptW8mAnGHjKV7rXu2zeK83PB71dU6odC5kECmmn5UKr95MwZD",
  "key26": "2TMDWSdhrZw28VZNinLiQrtpsJG9u73SYfDfsqyR13jr3X3CFFDeSyRGoMR6GScMVKfBx8UDAcq9TAvM8QHWiVsj",
  "key27": "4mULRS8PWzWiC5117tT8A1mMitE51Cmq2cwudnFBoy8pBQMVeMV187Rh5LwhLPthhJYQArBw217Gc7oDJDrY6aRv",
  "key28": "3ta6ft6EMU5KwMx3u5VwMKL9TCmSQ8cNxcXjw94MXA5qwLTeQ4Yfr5TLx2kVPomc4KKo6JnhGxPs1DtVRr87y18u",
  "key29": "xmLe3CvAfdMTKdK9GX7bSWmEZX1YoigXfzPVAUWHTVv1ebNRJRfxNUpoijouCHHdf8Veb14X7eXpM5budCa3BUa",
  "key30": "4AqWQWwyrcAVsBFC7UHcbsRMT3259MUQF1iJSSfR4HPhSkVBHXb3wxSVTofHesEV1Pw5JWb8H4kPcUPKcbD2NQW9",
  "key31": "FhDuDrY44BpCGx5Yft2jkmjcZfGkzCtinx1ncjWkNhSZcZkLfk4LUU3K7gQxhNAjSDshxSeXh3tm55c7oKWBxjz",
  "key32": "4tMSwZqVN37hZEaPgVSjrSKdpVuwh7W7uDxwPsEPugUMNHxuRLQ34TYL6xEKoii61Ec5GaCNc1EicZbb1worho5E",
  "key33": "5EfUjUtxy1eeSUifFzw4KT2yMCQAaHd7J1Q9K5X7ARrsC11suE3mcAbNpf3oY9aa411Hi2oV6XGk99xG1fg6B2ph",
  "key34": "4NbNc2JdLF6s2SHNoYmeJtv2a3ZFtTMn4f2GNXkAdBqhm3tpHQruzGdxuEnUADJAWYYEdtSGqhMdgrA7kuKsbtqp"
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
