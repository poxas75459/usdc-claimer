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
    "2pRkAZoFzmFXKYKHa33gasCbjKxpvMFDdq4qXyDWYU2uoJkiew7nA1dRog6B8AbWt5ygf7zioBHmreEmVMDCvY4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqC46TxrumgAEsnoqiSkg3uutvsMohoVbE8c1TkdGcDr6ueuXeA6G7x57jdYeZRexHGiaGzfGg1TeFfu5DNBhTc",
  "key1": "5Yxu6y87VY9Kcx1mVdbowuz9Be6viesYNRnedh9wspEcwtyUxedbkqW6vmNZnB41ujewMA3JC5b9FZXj7q7QDzED",
  "key2": "4pdjJG3BfFRPMoj9dW5mLwUiASKCgggHNWUcNQZGJxMDULLQXhxwqhhBjsAT3KX7b5ATiPdrLZRK2Y8iN26dN7hZ",
  "key3": "4uMtNgAkGH61UsZcXf69qsZZgWVWJKF4b897o1B4rAsuKzDdR4i5LuMwq87P6tTTK4aJ5JYktqFT42gbzKSoYsfP",
  "key4": "3krxhTXCf7GEKakYQyRADmungyCu8GkFBP6tMUy9SFbVqNz1QHqE3RsVFE3C4g9B5V5mNBKtFYjeRMpxZ4SXy5oN",
  "key5": "FatnGjcYzmJ7GhdSQ2FqqfhnqBiZmbTGSHDJXtgWopDFTo4GCFNXnQgnmnqLXKw2haAVzjBmwaZNwFom7mStaeV",
  "key6": "5xh6wbEkjxvM6YNRWtsyyU3GP59fzWhQBvcPiNqH3RqE9jAQwFAtjkHqZhmzmBQ3hZhKU1iXFbsW1HQ2CDjFPFde",
  "key7": "4sfgGdfECptrYnXtHFapHdiT3mikuMVcGQ2hAYQA9biUkXifWDDb7MqmobjNNTwPX5znJjeMMzJY8iX42sYPooWw",
  "key8": "53yHhxcJrWbZU9u8tVrmxH8T2yLxbTzPztrdFyixpgEcRwMGpVQ2n32rZwu7DQVQosgWV1rMWhjiobk6gqkWJqby",
  "key9": "4fGM6asBUFTssjKgbFLRtuMJZNxARLv8pj9RLNaoh8fYC6PeMmoMiXkfdhEn7dsJbeQ2J1eU8FpU8JdbP2P68tUT",
  "key10": "2gFpAaj1EUZBfZHZHc7J98q4EpWQgKsDjmrXq6qGe7tZtthsQzuhETBf28aLNXdLaJywd76DJSqKbj8yBTzGeFDB",
  "key11": "5zzQesWcxDfwQC8R92L74QWkF4xQnWwCv29yFJyQX73Da1ceGSfetxkvaky7MN9GTcxxhXgYhE4dbAPfeTAduhtE",
  "key12": "2sJ9JQAynu7d4NmeWrYyNnmrGKkBcxNG4Ci21WR4wxdyVK91axo4ZRruJ7yUPdzWb4qyQF2NWMWYQGKhsHDoyZi1",
  "key13": "3qfh7thPtJVBezhpwXzYsY8qXH8sEVQwo9wGqnPY42bBT9VHr9S2jpjKwMmrwGoBevApAL38473ANWgTU5hdKnvB",
  "key14": "wEFJiUh1JCQHigiquGjLXuAGe8RMPAfdKqy64xY7rGae4CPmUAuQi3ZP4BfrAee4mbE3VfPKgR5J1b4uEwFxEUs",
  "key15": "2PpW8iYwYAPZEc77DWhuzFV8oDyAJfUS6Emfj4nFe65PEqKsttjVa9UrLF2P13ihw2LW5EvVz9VMfxjD9PnrLhG4",
  "key16": "5qJt3nRGsGoFhZG19EPtA1RYuovcbLKEPBrKipemifBjxgu2rZbAwcQSTztmNuahRqnBA9zr2rKzRg5LiFMq6rFi",
  "key17": "2SQuPj7rZhhwirE728BMP4UDKxTTRe53VvA1RM9hy4LSrwLtq8Dgy27QfxwTJ1ZisgcbeJSg9yUm2c1qRzf2oL7Y",
  "key18": "2D5HxJdbqqkZY8fuLGxX2iDddK2feN2K5GNRTTKPEyAAoNDej1bDJntBXhEdfRUkrHaiwYExCnG4R1HjCTCKRSKr",
  "key19": "3Mv2Gtwke9ELDoKunvxMaqP8pYoJoba1RdNd8jcnQFjxW4DtHSc4YuWk95yQSwVuoZbYCoeB1Md4FanKVp3JEXoU",
  "key20": "56MY45fVXimWudnsX1Rar7zppJEmXUiFAnVjryU5E6BA7hpKKTJ6ypqfwEAUvCaA81h57TXPebvTSBSzwhyDYSQP",
  "key21": "4HWd2XTidr6mQzXiNd9M9ZkYMQXxxfgRJSdhcFdqVi67WyUp9xTS8jW6UJjuh5MipiJDhur5D7DA2xcYREcA3cBC",
  "key22": "4BFd4iHEaHtKhvmjRBZNTBiydVnFxcAsWV8hPRrYgasVHK75RswZqFTthqouYjsc19S2ZGwQkMf6yWDNYsLCHrrT",
  "key23": "dSwUT7kkwh3RFHL7kyW8WcXEYN55it8bmHckyuwb1cWpKAVQjH4XW5KWeAjNcY5e6nxG3pDfhVVTvYjMkgAx2dX",
  "key24": "5VAsvEjSqerWvhToKJpZ3bzRjKL6Tof74XgxktQeGept2QbMHjzQN2x7P3HBkh8McmGw1N6rXpWWzJxQKkjmXJJ5",
  "key25": "5f9h42DemiycLgqZYWe6ruRn33wekvZUGU7CrDEbYeey7bXbwiBQWqKqS4C5B1fMSXTLwdSUGW3EdWnXNsD1S8hg",
  "key26": "3Z3DAD2aRhKJ5kgMnCfN3zWu2qaBs87PCbV2ZHCj4hsDdy4dyZWRWTcWcGXBxKeh4uTUcJ5wPbC8Eg7bkfC5MF1r",
  "key27": "5qTXoZgRvrQmsNyrL5yVzSCQpKoweWhgKQFYrDkvQTiz6KasADA3m63gq8UHqxsiwBcSqWcaFFoH4Yh31N2TDYgQ",
  "key28": "UTK3ktwLKnqgSYVFJhcmE9yqKtxRMvgY8oVfNExXyEzokTPwg4YaznNmTNNjKU3npzbCPbYJjGvqReVEp2jcB8S",
  "key29": "2xiG5MwsWY9jAQdhZh2yuv8NxdzVCA95hyazMScc55vrV8VvRRCHd6KCaGzw1AE7AnqZFQ17sGHVnYBuLH2Wb5fW",
  "key30": "LEGFqCLdwjKqGe3EE6JLKNRfJs7gzg3kGw2MPmWAQcg1thbdhmWfqjURKFSeo4td9jV3mdR2HuXS5qQPTs3A3jo",
  "key31": "DcK7SfMY2mXJVyMWMzmKbWCpqGwqtzE3eKwccmHwiN37fBhXyVVbw3Zjn8weFDL5UPZEegaRgt3hSdxy8ujr5Jy",
  "key32": "2oGi2GSCui7474KDLxvPgv2JJtnQxjDaZ2aq8DKmg9q72aZUgvhFz4Zm14JS8rBhSWTD7dQz4159NJRmPMogYE5d",
  "key33": "ywQM9CwA6M6RqxL1U66NpfNFzw8U4mEom6g9CSHszCHiWapLx3TPpFqQL3DenisD3wNRaUJZQLNrszWdSGMzbEu",
  "key34": "4KHZVX7SsLKanxUbVJcCZzMBGhCCbdv2pJiqzyjDdpAu1edH5A582nFAv3oJ6bY2uFpAWki8KU1pvKSPuJxLH66k",
  "key35": "2qV2Ams7uFsKnnDTmpP3YtY1Ar64Rmdk7QZeg2CnSV3hVjHEfXcqQDL8HggQJY4PppXQQGdLXfMfN8TDAhYCoq3N",
  "key36": "2E468P4brdbQFnzWjwyrA9TvLwnE21dQYRzu4cejmSMHgbPCMwApJirGyJMADBiHncqipmyQfmjN6GXQ3Dk3gciZ",
  "key37": "5qWQgB8ESFqQt3AWtrMtFVaonAqmX9TbZLeodyGmcCfndo1hggVjgzGniD6bNhSHuoo4r2k1Rnv9a3PpBNBi8jXr"
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
