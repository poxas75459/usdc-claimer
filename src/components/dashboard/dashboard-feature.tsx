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
    "4ZZmPfMugkwWgx5entdyAXLqbDy1vYBdH8xciA9KT2ZiCPFALhWfcCr3epMY6oVKc2SeLRqkzFvgJLaggts1Mjxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKyoEH4zA3JTNQES3GYELCVoM18Auqzw5mhAPKEptpe6nHGsNwi86oBDK8dEc8EnqcMwEDuRQKiMiJGNTh7Yd7K",
  "key1": "r71s9zdZdjBULd72LVq352ATazuBG76S6LQoPG7TquAe42dnymu3kFsHaCz4YT8Dr27rXDrPAZr1d4G3f5TgGAK",
  "key2": "LY8FpJaxKbJpVQGw7TgoMD8MXM9sgS5RSf2UyM2xCKovjAVxGiby2YWTfcnEC4M3gnkYtFgWd6wahT4w3umSugH",
  "key3": "4ByyuNJRWC7sHnXjkaPGzUJrJjakeEHZoEesv7LttHcJi7tUXkv1EueaJ18YRSjsmuA2VCQ3PJupRw9fKraY7gBn",
  "key4": "22NsAShoTdHWTnraDtwETcpzxYwo1wAnj7AtgmPCGzKKSKyDZj5qEHTpye3VzAa2v4LZK2ce8gdYfW18Di7TSjSe",
  "key5": "3pFzd4oKFB8sdotaWheNgBVqD7yKyjjAqdSDQPTjCg7TVZfi9qmFb4bryTayg2YjmwTA4KmUpcb6BDm2QyP9Rffp",
  "key6": "59xNrU7JTpyusVtyzpgU93ZxW161QnAsnuwGtWcdCWtmXFUkukioprbeZ9Sk62Cy7d8p6HGr5kVvDcuCD92rqTWF",
  "key7": "b8ri94GUPYLqyBYR2rzZ1GY2SK2W6vqL7ohftjkAJnzYShVR5qtgQac8BShvykLo2fMgJevhPforaUJSA7QNeoh",
  "key8": "8LrXjC1DU32sN3iPTpm6X97CSmnZYd7aLedxAjNPWT82y8PH11pUxpQSq6PegkXjaAtFYX1fN9FLAwX1UU7ft6t",
  "key9": "3jcnuzHtdHPQExJ12T2VCTwpW9nCjTTQ4MBF7SDo93e4X8c97bQU8tmKB6Q8VQ5mpzo2dSbVewCBhDe761ihnx89",
  "key10": "2DViG4W9dpYoMZUaEQAHVjVsVV2UVPN6K5GiruNNadfgzpuFstZxt1zK7TmwXxQQWHB3aPjCbfvji65T5fJ6r7C8",
  "key11": "4VEzcvtvkGapn6LWAfX7Sv4icv3RJJ9GSEaxfc7miXN3nTcGts5Z16yayUbxFtXDWEyTkKEsztuVEVn4yFKF56gP",
  "key12": "4QD9jujzrRC73eLLvFDKtW9k2Ce7gVY6bos8VViYSsQ2twKqpvqEQF2y5K81fJ2tNqNSX47T748SjLSVZcbtMU9e",
  "key13": "jWsF7zWrhALvDTN6eipu4QuhiAFJB13BQD5Y4AWqWTinKSGckaNigBRZ1VGWbN8v2voxCvKqYH1fpYSvkGfM9AX",
  "key14": "4oEaYcy1RVg3ANjYz2XvF5He6aP5wLUHad99XUdXfsepaMpyBLTsmb65m1KDkgFiHpapY6Xs4QPowun8F3VJz5FW",
  "key15": "2pvs3uuhpp5SHZmHPYkSaQSw8artftjCwhwaHTF8jfMgj6JwKfH19a8Ye4KUzGQMYMJ7gDjiCbAzA8x4mvuHHRQB",
  "key16": "4DYDXj9nf7DrhzURdAs4HfavheUHrwm6qAGjaxVK5rahwmcfBRAXPU88vVRfuX14bvkxXHho6T9xcj5KV5UquDmD",
  "key17": "5GDZgdk86gzPC4JEU6e6i9MZ6LXx4wyrtCU9TC1M4AyGHvHUP8Q7zDUZwBnFEq8faZPpxcnVmHicj3iqY1zUmSWt",
  "key18": "3hbrW7cQJUpYYRi7za75fUmtrjznE2t7NEk6hzreBF85kMqu2BGBD5S71DTobDxqbAWycqK3tScM8p2swbycER1W",
  "key19": "24w4C2oGjT8x9RVsaYvQ7kBLh8qqL2mxbXu45hHMRjV7BLbLicf2pYbKAZvBRM4YxcAk3FSUwcKRe8fivwdBDGL5",
  "key20": "3qVxLpWkW2QZka42jgNWve358Ns5nGBZ9DeH2hkBaMoa7PDv2bMpauX1E7krsuVehH9tB7M4QG5wjcxEwArKtp42",
  "key21": "5MhmugmqFaQALi9ovfaEdeYzkzZbNupM7D5xpQdRZLacYPqTNWgcdumNr8iYRNVmHWYttZ5MmQcmE9rFnjS9oY2t",
  "key22": "3e7x3ANCmsfyDcNwKKJ9Mqs2FQ7hugSkGHVhb6KZDPs9h5g7zVgBppVbF6CC48CGhhD4ASojPRMv18pTrGwRnsHD",
  "key23": "PPKjS5NnBtJWcnCw8w7b4pBgjnvbMSF1CUcJyAjzmVY9WHkwUKbhFNk3voxCEDUapndfhcfJoo6R52gTKjTx7tz",
  "key24": "54Mg6UFp8Q8LmcWRkKQmmi56T5VjqTcExLctq1qKSmmpCSGd6KCteF99g9xGiwbjiq4mvLSvJcUNp82icPXNKK15",
  "key25": "2yb4epKGJpapcKu8gpeL9SYtzFMyiyD65bGRt18qywf9UDWSebj248bmriAq5eNE9BSLRdD2iL7eYLgYNyppk2Cp",
  "key26": "KBzvZnEyHALkmVLKpaC1BcCguFhhvGrHkBN1ubKnJU5P2X1wQbh47DMwLDcJTNRtQ4fCERMbYd3h7yrb7jwjWLG",
  "key27": "rgxtWgGdfwWim7e5b38PjELSKEsZtFGUzw81p5qfT2LDPKhh62QkLPco7DNGHh9i8qFegYPwANKxFxVoRXmYcu8",
  "key28": "2zdeTw6S449Cjym1vyMwrzjrmkJgkEAHbN7SgYGdT8aRWK9ADYHgmFsgdGFy7Nb4qRV9QhQpAUs2Rw7eq1Ct7RTg"
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
