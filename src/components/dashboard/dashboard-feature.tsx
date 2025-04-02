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
    "2QDd5euMrmdmG8GcmCJSaSF6qhRVfFDRGx4DcBE8aLqc2PZmvNrhAMd7doGK5yPqBYirx5b5TfBMpa7SG3UKYWD2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TfDNthHgcb7A2ruphDeJu9aqx84rZzwaHPBZTPBa3gTEEdPdeApq4mtLNqmrtQtzvHsz8S3CvC9JvpbtorzcF9A",
  "key1": "2GYM8LYxD7sANtVF3jcHcNrMyeaxQyzLRotdw3MvHJhNkSLmoCruA3mwHMLggzoExEreR8p4JdohCA2w4R6fPF88",
  "key2": "3RwxfcgsCtD2w4YTawzGqhP4cmoqEm4aNh3t3WuoPkb6PEre5TA4Y8ThBvv18UEuu7fkoFxCtPnsJt6QbLx64Tk9",
  "key3": "2qSBLGJFwn9xc7RJZbdJKCP13NgnZQNnSRvKXJhpminPvgbPdP848FuMQXXfv5gZ4VUXyFpxfx7sJQWRyjcv5Fnw",
  "key4": "61u3usBsXjpt9J6Ydj1aWr8BrE7ndayd8PZPjSrbKzHGSKGiZRkWxfDKgnAyw9WhFYabBtbpcEJKjyEi1AkhuDLz",
  "key5": "376BRWd7fZigfn3XFruHmfukfCnXxFfRwRdz5wL2ALYPQsAxVgWftuizqBVXtwfveCkYdczaadR7cR8DnjKJGbtd",
  "key6": "55jfTWZYcz2TKbyJKE22VD21XnPzr1eGq4ojZ1bT4gGy2Qjo6ZW79aTtFmezL8YePHWUqLo2ze7zGzwi1kSKV97a",
  "key7": "4uVFjWSzqrHEG7DGkgW5PCdkv69WBCyiMA2CvJHzZR5skZt2mQeArFSBxwgvbinJ8ya1a1654UG2bxfJgmN2UKVN",
  "key8": "5X5Piuy2LyA8SPvXjenZRuhqf9UnbGqv4oLjRgAPM87ZL194UhfwE8k4a6sXMnL6t2ojFNvjrjj6iLjTsur6bYp5",
  "key9": "3y7HvZj5LBxJD4eEb4G4NtrqfJFfmcUcczRWRFnfFj8bgwaFVH19fStgXh4zefRKttE5zoYCKqeVLcG13xp4dEnZ",
  "key10": "2DyGko4DUcMZeTYP7XBHdkQZTu6c8G9WQPZTYMUR4iCHR5Di4u3MjCq9hPSexoSAyowXqeeUGV1BQokCdhBXUwFw",
  "key11": "dv6wzKGdoB84MzuyEu2UmwPYNpV2wievi9rrywqffh9zTeMgbLADqeRr9teQM8HMsS1goN16tYTtSyHhVMaZREc",
  "key12": "53JgjqXoee3sL2ntMyds2yF33hDEQwqBEt86GCu2tyfi4bJnTWzYAr3Le6X2YdiH4w9LTvW84VjwgM4x9fHc8irz",
  "key13": "537uMM7qDtt3ZesBjJmdXQFcUS3Qp43pV8XBUJwMVAFSzhgXjYw5nGCVKajhJ8CpSwTny1YpD7b8GSeTBgDEQeup",
  "key14": "2yXk6kjsw2YBFVBvdLB99LML2W53gePWRxRHCKpce2VRsJBgGt3kaSGdGhTyUxSoxfbGW4bcxMSirwnqW2har5Bj",
  "key15": "5uFSfqzSDdvV5EMLtmNtc6xiekH4Yn3DXywnvZy7HWq1ynhiHuqGEWJCapYRn9jbohdUeCXqNNXKRdD2UNTdZvjz",
  "key16": "rp4FeKVPL56A2NZMQuMu7UKtS3uWcg71tXdmyLr7xj53WtJQYEx7ejayoQSUAc9cboP3HKyJG9mFz5m8jVW5MrA",
  "key17": "48qcCGtL58Q8GPTvWLV5jSS7wLi2xfgZp1Vn3F18i9iDNFVZqHP3e8mWBCZigdPKdiz7LtLo7JxzRJsnkEAoBmAe",
  "key18": "5MhUDzgvSL9iPk3v3Xiu8cL6R478VJLkWGSBtGzHE9jAaz4284kSvHCPMm8uLxrB8UyGaJAdJrii4ynSw7Ru8y7p",
  "key19": "WZ8bFfjSSHVsKjY2fFYA9663Y6TZff5hnT6sj2nC841ihoiVRAQLdt3qyVQ7EmVvKzv2VN1cMHZg1rexNNEfEY1",
  "key20": "kMw5wkkEJ92JcR3o8WhR6vMSw5FCC2vEpZoJk7dScQvpvd36GeYbad1L7GAA8jSppPbWbEEqFxwBjhAx44zD7x3",
  "key21": "2CTLeevjCgT325ujCDgDAEPkVBV3BdGtCqKwXGeNPmjQdpBq9PQgXiWtJHwqKLWDjKPKm2XEwzrCdfKfG8B1hTdo",
  "key22": "2zX7amTDRzY8a1HKDnkXUCCqKRbhC37CgPeDtrrUFj1aAtfy6XQsSsH4x9ic2Lu4pHmGqmrpQQbVLe6rdYYhyGZq",
  "key23": "459aShgJcnQRgJYWHUcoDTdqRTzj29VJqTZg3wJ4WGpddeimZffDDTdTrF1WRxKUPxeWfn1GF4KASFmbYftWLJSf",
  "key24": "4Lqed5sw3Qfct9T267vtPQDgr3sRXdfajH4UgVbujmiHXwEjBBH5oeE75NneL6PXAAbmwLkzWSaPCL6XAVq2WuNM",
  "key25": "ztRbxUVkjya7uPWBdPz4ugP5nXFsJjh5Uj4mjc7gBCknJ1xhqwypyyQvoTpiiELaMREnKo9F3Y4hgyuJH4eSzEY",
  "key26": "2GnJYCfuA5zy2SBr8VwB6QBEcNkx34ZZwXRr1KK5bta6nCK6zscsai4bDL98PREMYvoVu1xt1t9hUskZQhnuo3a9",
  "key27": "2tZuAGAyhAdBATjmgdHjgFQ1i5dzKbxP3nWVthZUpMN3JvPnHGiuULZfTxHEXuhXAWryKFKEgLhZ27QwSSq5uxA6",
  "key28": "5eX4KNSzUDT9kvcWeTGVnGMbQ4FV3nnXm58kSMehjMXbGgfh6w5Bpm1WNg3kKjSwA77iEz76EJsGfX5Si2R6k47n",
  "key29": "55pVmbd5zUpJYGZcMqfUHxYFUAW4jdeWW88E5MWK1R7YNc5EKs4ZkimTdFFQm7GXkg48XfzWpN6R1CFtYGCbv3Ud",
  "key30": "5UmBFVxWfsviSN5d72ZdsBkKe5tFFAeE2FHogwiPCeY7qEUjq487qndZkbr8wEYsF7K5dcdcJjdWAKApzEpjnaPC",
  "key31": "F4xFJh49Fx5jFAY7BGG2F6EVpcSmrRN6ymHPkPuWJmqZUWDagzG5BwBFwT94wbsitNqwrJqcP3b5Ggrv5nQzxLH",
  "key32": "YuoTYjpgQmNKoRnbLyUjmUerFbSHVzqgai1LpZMRPsopP1HUUnxFyJkxhxZdt9YT5pGDaNFMgcvSFEzF4KziZU8",
  "key33": "31rF4t9ecQKCHetsYnTRQsBysGh4ZALuc2VduBtgJQNz5ZAm2umMWQbdBdh2DqzSeXvi1yhSuRhxdEo7UVrNTXWJ",
  "key34": "4uHvJECw3BP3CQjZvaAAuqwQW2JWPs74jUJGbbXd77djg4k9E38kYTujykhqzjNTjhZwHK1cYWin3fXuDFy7QHkn",
  "key35": "3HUa6qqyVe2Vb915pPF2AiNSFyxhDVAFudF1UwWfvcgxKaaWseMenBiTFLfi1mJsRHm2d6ytvFEUuXNJVYuPbU8Z",
  "key36": "45L9n5uVsCf8FY4d3Ga9xHsYoAXuouEnqGtBuepomwkEtiUTKxXyLBAWE3NMAvhhvcAXYXDjbhDipSZ8df9wgGsR",
  "key37": "3JKp76V42ikQNHKyNQm3rSAgQvAStFcsRKrn1de6MsjQYtqNnHgwa2gDde9GNTYq2a7Hy3LKnC6kS2QhShBALRFu",
  "key38": "34Y2if23Yaxk4ZVc5DG2Jf3yKPPvw2TyU44bgFE9PLFGk4oX5tV5WLFqEUxaaFFGrhH3JssqxJ2iaGedSJoAw2We",
  "key39": "5s1K2oAJ4d4LkoT4qKN2J6vnCVdje6HebkrBsDVJ9uHgXWUTfStZtexWgR5aHdxWDyxisnbev8EDxau56hjVAAJq",
  "key40": "Rkzu8KQJ9cRWoxG5sX7tXsQXLPo9sNh6oMfNTUBgBJGaZnCi1Zd6cbBLD7q3sTPrKzwJ74D4A3dLFnmdng33uNy",
  "key41": "2sEBLtrPhvXJw6BUgPVnaco7BbGvmKYbWDRnw9VPcBfKtTh7T6szBa6cUjUdzcNVWVp2YzEXH96oZqRfVy49qm3M"
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
