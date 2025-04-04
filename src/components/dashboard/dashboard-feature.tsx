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
    "2NwymboZPinkA8PLSDi3KtBCypTiFZbZDtxMRLX1GCdrsuygw3UQaZ5nMswLcht2KxL4ZqJy4kRd66XF7hbWxKZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVNamAtyc1qGUacrT75gP8mExHeVLZ5TWG6CuBfxnenSZn2kB61YYGfsWBP4VpPpZ6jyVDmXKRqZRLgTdygsbaa",
  "key1": "3S57nJLtS271GH4eopXGDKDZSE7U3T2dcDqj4iQgpwYWpNnHZN81Ap9auaCEmzC39CSZzaxdf6eDQCy5VkTysAdZ",
  "key2": "2SuLvb4xkZFTPxrCwtkiDiZqbMMhiwvpPRRCmcmF2oPW1wyto64zFBbBdg6n1g96sN3ED4rhFAjBb3E2f9Ru5VMg",
  "key3": "2rv8Y3tLoHw2C6sGXXbYQXe1Qe7ibZQM934SJ8yqfsUEVLuzHRN22nEFk8pZ7EXE4A5ANr5m16HSSHdx7R6pgB2E",
  "key4": "2RHSyAKpRyb7QWioqUoh8TXczWJkLTgjFYQtcLJSSqhWUwyHkV9eTZrWhhvdPuwGbqhzWSujJUV523Kt38xGYYtU",
  "key5": "2su2fACeR1RHhP9hu1DdR1Lv1k6Uzoim73ZMFNwAPkJuT6AyaqsJW5cDfczKYjQowHLtE9Gn489mYVwZnGu5MoFK",
  "key6": "3xtLSpxBtosHE2TfsMciWC7oFX1x7R79HcHNFUz5NAM7zyF7KwRc4E1jMZpuEwngYPYSk68uerENdsEXTH87ZXn7",
  "key7": "2kpbPcN2rVzWFzDbsVohBBxEfEs3tsc9HhnBuZNULoNH6oAXpwmvBG31d25B8XGePTsRsbuDD5r4eGiaGZmSXYm2",
  "key8": "3CtAS6WmiDM3fVzArCHvVCP6u4kBaSY6NE4EksxFzyx1XV8z3LyYB5dPe9PuBkvUaZb1zphmMnUuYRUTWJxghBNh",
  "key9": "4Sp74eBqgeyQCk5bYRhLZp21Rc9QPVYyfs9ht4y5DcNxkn7QJAx1Mk3Yy7HqaJvf2n7MAxzKmjj7bGa4MFMPur6R",
  "key10": "y54BhJ2jiUKy8bcvMpZEGrDeVdCRbWixRc5yGsQ2WpzvbePsEqYoHGMg6N3fpccVAL2pmRiYrVpXCMcKNurMT7j",
  "key11": "xqGykrshN7i63vW5ztJPB6sH9KXZ4AUPAHQfcX3nJyi6mfwpEKLkt7drsatKda9dCrzZjVVd6huaNis8ZQhn1Rx",
  "key12": "5ouZ5vYpQqEU9YeKaB1WWfsgqn9VNkVn2htW6UEaJxDzsWzVmyLTkoY1nBC6EgrUZBfLR55hjSEBM6CGmRsswvzk",
  "key13": "61WnXDni2CL8gJpXXwfbYr8cVBmLnzS8SCSzFZzHmgPZzoD1kRqNhgqXsqHGRD6dTSQKeHCUqv8Nv1q5MuBUZ69M",
  "key14": "55BcgNysyD2S6WpDAv9pkFEBt9bW1RVAXnW3nELmUGVUTYQcmRyRMUjhuwCygPjBzHiUEC8CFZNubpaPSE1Spf4n",
  "key15": "34oCdebGvaNFUndosSgQjUJxPVNtRZvmufNDdW6pvkpgC7MXvmLhWuVFsQ1bkpPCBP1rhYGas3KP4Z8Xf1AMH9uh",
  "key16": "2mwYNhsEmyj2x1qyDBsQt1ACFY4BKx7rVVokuuj9Te1jUNCETqN5kRQfWQj1m3ogd67sHMwkKcFg4hUFmVj1CvDg",
  "key17": "4YPYULLXde6UmDeMcBk7tWHvqQH7rgcnKUhTQ8vtvRC4zBXaWKNfP29ZxEWvYdPokVMguiwGSHwxFL2ZUv8cYM3W",
  "key18": "4dDw996gNDDFqjumb64tGubMvV7GzwNraV96wZ1kXqANQfswXo3VTNTzFAQ9TrANBteBVsSWm63janNWm7syGeae",
  "key19": "Ci1MFkDdi7FiQxhYwJ6dzqbtTVbJ29Dr36LN5Wb5HnPPy6y81sAL7WyYT4YueC9dpmPPmfvG5eBpmZzQ1gP14m5",
  "key20": "8bdCR2FCDUbwjY2tCuPUzweJ59K5ddYzaJUekwQvbKVW5zWMy71sPBwuM3XJjKjg6rFS3nQRJC5AyoNFeXTr64n",
  "key21": "4nbf2BivUCRTapFWPQRGFWxiQDCoUyCj7baXbJ2qCUYz5h72N3UKex511qckWtPy3US4t35dWhkqpki3wJcgm9iU",
  "key22": "WbBpUdyACpJmvmMXnHke6sxEMFB4kXMpvU3bDGxvtdboxj8qZDqtnartAARepgKFuXUeYpky6tx2CybN4s2KzPS",
  "key23": "21ZfMRPFcbDabXJWtzhu78QQXA9U5L5Ho3jhHZ5h8o5T62jp2ippiCfdGxARcy6xjqbnGtG97iJQN9xTUd8nXnWD",
  "key24": "ekeEZKuwdpgfumfzA1ywhFksnq7ka3RGzj34zjRyNTejvhb44Q9sBfcxMrH2Px6VjyaxVEeHMWtqRME4frtHRex",
  "key25": "5GqCkyHDirigjwzszFzphb7KmXLYZEdNW3GSmpvqvKV55PJzY7LLX1Fq2eaUmvBMuvhiPP53cUL75kZGA5h6cNhj",
  "key26": "5Lx7RZNYuw36KR5fpUxzrrNiV47EMXCxbaLkVNX9gudkQbayJQFnu3xXYiuQzZrwJavAGgbboBSgTJK2qAPd8b9E",
  "key27": "4PJwcN6eAQVqbpp1vBQBmeKa9c657SRcuPzEszGZG63DXFJjxKRrgGSHwDBdHYDDQzAgSgZxZHF3p9ktM2tSeq1b",
  "key28": "5JqsYon925LUy91TSiiDzQ3uNu3E7qmo9ULraDpQhPuqevA5f35ziUVFWhS8wpBVYkyDHMSEq5KAwYgF7hjXxhM5",
  "key29": "3htRbWfBpNXL16e91ikr6kSinwFhhrnvwTivnpNUiioaLDxVtnPrsss3j6KTkD4Bdc25ZAsadpjHpE1p6pKNjZi5",
  "key30": "62ACxAauUTkBNdBSeTtGhvMKqyeve4tbfbNFrF5DcsdSmgdAkyQQXRBVYN3bXLqyS7cxPWxHrZW5RsFHCHmVd8be",
  "key31": "52br3ka97JFLRrseNemy88SAWoqPK94QAyFCoeGE2pokzQJuoCr8hH3PfwQDNyQaNapoQcP1mVfv3XuEY2ifmKKx",
  "key32": "54HwACsaqo18NXyVtX4W59sVpfeBcFMF4WfV2Ah1QjQLzZPmaJUUkbAegqURyfWRYSnZP7Nv5dCEx9LMwFa4cuJ",
  "key33": "4jVCMo1Ego2UPchre3HQyBawCdcSkQxpFyqyFvfmZo5eNeVvZp9RT6KzaKMURXecNw35VoMSjRJt5bknwtVB9fjD",
  "key34": "5thUyUqwbtowpBE1yWjaNPQmGLNdwXXbMUkrK2ma4hTg4cFUfgjcW6RrXtrQoqTuxFDV9wu96eTZtKwwZjjq32N8",
  "key35": "5zYEm96RJT7vSExwNDCEYNYBgCyV1n3cSrHhD3mn8UPMRyyP4ssvTx9Y9g9m3rfbugbu1JS8EjD5EQgrpY8BV3s1",
  "key36": "39XvgGspqNeHdWZTbdHkax1isSTcmxWTJwNft1VNdJk5b1hva1zNV1tPYn38gsJapTPpYgF68pGSn6w7R851ay2R",
  "key37": "3VdarWTw8eXw5Jpex2PMakKzS8nMby7pcP9RgjMK6TMRbojkQXG4ywKtHWbfr4Gqmanj2UJiS7ptn3RajLedxA8P",
  "key38": "5Cx5JVYJi5PvYUzHG6fjBAp5RBpkw9EYY7t8eK3vciWq3MLicv1kfeC7CGTGkoL7eGBAGZBLZiegorQShPjVEBy"
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
