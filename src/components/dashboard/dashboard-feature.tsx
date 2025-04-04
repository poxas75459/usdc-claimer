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
    "485Jz6MyFhQLPBzigeDHWztPvKaDwkifEbdArrY4dcsyf6oJjnFm1oiz7krH5XuMqrjPw8NFhJBvciVegC22AGHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p2gjDD3ZwMD4njmvZSQJb6KWFmaPLoMet4pSEjRWsSXjXs1xTKWM87Cqv1urxG92kFc1y2nSJTBxNaSRnpVR2v5",
  "key1": "5DTPuxygkWkABLEbDVFH8z6wVhVMaRPgT6wAFwb2zYm74Y2PwtNwGKzm3wGsRXCcgs5fEonVpLmQbF2rNJFKd2tM",
  "key2": "5VhBcaMCTSHcrRry8WNhYWDcYjZfSqUd2FTEhofGPYKCGgXD8qfcQacCvBZeswXcZ9cnVx2GkQHwmZrZJAvaBnhj",
  "key3": "5eXLjC1TN2z6JfdCRRU9k7eiA5Pw9MfLdBw41AUMBpENNQDpZa1KdJqBqbtDM74PixofaCLDmNKA7nxffDkMLBmx",
  "key4": "E9D2ir5W1b4DqhFDBWXrAK682SigENMuFz8tfgkEg2R5yRMDxyzdp1WDpYfZyf38ZVPGaFshAN7ACFBULrAe4KA",
  "key5": "4K5N3EwtPXQARn33mu3TCLkqvG8ydnNshoNKQ1V9XdCrTv1K1RMZGWGngdyYqb3fm5JZWNdauh4r6Swz3WRv3pAr",
  "key6": "46HZVB7hadvvNLQeY2cad7NFJLCjRk24xzSefyXFmQP8LPe1KyA2Ttixtb2uAqgcwTDf12ao1KcNYeD3c5DAeABn",
  "key7": "2zx6NF7zZrTbj2ec4oQCjJrq1gHB7pGnpVQ9vKz2CKGR6Fi8xznd7HDxxGQ5j8NxRE7ePSCGMjjBL4NcdnNpiwrs",
  "key8": "5WBj2GuDRuR3Aon5h7XuQRvZzp6s8AKkQXSiq2soshqcCBGMHFhAjBh5YsiT4JyEpPPwuMtN8Eo5Y6WFCbXNvPgw",
  "key9": "4NAcym5ULY24WeCjbJy3LDd3KLt58pgk9CiDP6NtZK5nYLG8gAjFJ657Wr1aUXRFVhm6xi8AvFU3i2zkzdmX9rFX",
  "key10": "53gUQCDa56i1zJgPT9GpLBV2fMgCSekF1LrjANRmWJpBaTZNUm89KYJMRkagSyMUYZ3thY7fAs6kS9BfHAoPMyyu",
  "key11": "2B6P2WnX9Ecnzt5sTAcJwFREdRDoSG3XLkRVF4REnvgiET5QjkYYkUWUbFpng8pkBrqgwFV12dJhksV65onZDZcw",
  "key12": "sr21c3LH5Q3wGf3xCeFSKrsTuwRpogXtprSYTA6moRkhE2myckTghd2SVoYJg1auhr1bZ13Nie41nbYTkm6orxP",
  "key13": "2WGKCdtQQK8rnTsdbZERaLWH2yqUMhNdTYAWHq5HEFdUQ5ks38ptPENone2er1j5kUTdteEtgpoTycQR7Cfbbk1E",
  "key14": "kN9fngb9Qpxw5pvk2vd8Xi2GvmSJefWjs7erxLgDJsujpSLPRB659PJVxuSY5SZLgo1xFDJAa7ztUpgy6gEVju1",
  "key15": "Aq3xoX21e5Wko5ciArMK5oZwvjib8tjJHEMmCQVJQJ3oddw7EPai6e3ZwYY7VnrLxhWoRjVxnFQarFhNeULD3jN",
  "key16": "2tNe7ADydzyVxW7PCuTRm2Jv1BmEhS9GhPuWWgpNjCu2oiBernKQjFLQfmM6xWJxTLdZDhNqioEsN8KM3NGJY15C",
  "key17": "3ocfZfGHURPQFPPBP1Q8YD2mXPjuGnJK7DimKrvZgJVJm4CiTqBGtxFeL9mMXtsPyNnpfTQEYv3974zSYCDnCab6",
  "key18": "5QsDNK71MxW6wTsuRk5Dsj6cRKAjB4AXQZd1gXejMLNHLCyT2JQ68JRni2zwB5Fi2YJxSMymFBug1KbgJwRJg1kj",
  "key19": "3xRJw1AgzycVu1R4jtxH5QPjWQZ5sESYQo8Z3B77wLY9yijMnLQsgLepyRTM8EKXpaQmF7KbasNcC3ddnWnRJz77",
  "key20": "5rhc7tsQfWyirr2FM2QF39JA3GTbEqg9MDY3ws8f2qjf5DZ7tE8TxL7y6EMQhdamkZC7va1KeGp36BFi2rm3Enr2",
  "key21": "4FAPy3GU63nCeiqrg1FoH3dvcUezx85m3GZFUZuqRCfNa9h19oEeYr36JXa2cf4BJ5fLpLb6Sgp5gmJf3jMab1sL",
  "key22": "QhiSaALWfGy5iQgpFagcD4gTo5z9KLQcTTf56SPzxyCdc6RSfmuVVdYr1tzWAhk7B8U6i6hbCzGkPZ3UbLYvFE7",
  "key23": "4gdRuvJZn9wbPg5ha6ty1q4aVFSWQAhv28bxuWfMiYtzqpD4kT1fbqvvMfX7BGs96qYr79iKhZq9uUasvoR7dZ8m",
  "key24": "2eBqDvazQw4T5jpJmpAZfSiEvfY5kFjteHVJSYTLtrqmzCBuBghQAaQtW5oy3FR1Rj6a4Z822iRmUeCyVuy3U4WR",
  "key25": "akmMba2vrEbfy4qmRrafDieDLfsnkeW8GQDNEwGJ7bAczaE75WSVq1ESf4ftpcxW6RYRdqCQ22cEWBYCEA9noYr",
  "key26": "yUmUG1b1goyHvgLR56HYyK9ENArzUJ4kmntcAYRoEHwTQbhETp342eUW6RBvkXBUew29JJPm7MpXzBpihKXSFfP",
  "key27": "3WdKdqj6U4QyHPuB3CvxXFSkhfETCF4UmqPGoxxeMi4aRcMJ3KYiyTkWom8JD2FF7fDoX5YKw1jEgGDpXMKikQhw",
  "key28": "2udJmmMvb31mKTYfFz27yV5ddg4giATaf9yoxgAmas6m2kttoMp7WFaQxNjReNNoKyJfKAWFrHZ2tbpaykJgtYQD"
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
