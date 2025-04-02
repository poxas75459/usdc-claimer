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
    "YXxkY6FMtorrUEGboq7JyGQBwLxvs3FXFJKdN6mD7MMzcCaZH6cqR5ucZvdVB4Y6aC17FVosveeDbHDDsAQEsNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7C7g7qeXZ4Y4gqzNwVayDN7xMqzUtsmV4FQxGhCeAVZCYE5EZvg9oBhjLKdNtBC9bADDm1ostDePAjQAjEix6SG",
  "key1": "3TLXf3nSit1yJdoYmTKskS3MTYHzrDHzbLCvPwJ8KeRAVXxEd1m6qEgEBrtbLjg59qEZ7AkWEMH36pqy44fsz81y",
  "key2": "4WQ3mMY4zgTfSRjsAkCmuvAC52QJkUdiGCWno2SqejjNWNdqpDYt18r5VzX4k2TVKLFWZcoj88uQ1HLZD7BKqZr9",
  "key3": "37wKgc69nxY3wPHsGzh9i5UHHpcofQn5yhF15gfNthq8siFdhKPeXKfNNZ769E2Q3xLjhM23trvZWv7rLKydk2jm",
  "key4": "4cyKFzU9pmdcrVuTJdeW7d4KUnDLMpQ1nP3NAB5D7MPofq8a9LVSK8sJijxD7Pk4Ub5egiFcecAi4yM5fmU5H5tR",
  "key5": "4DENDg4B99HEhcSPA2BoWoUU4CS86Mg1wCbAC7e46HCNibpFRWfdDrr4ADo9fBZo9eeZfZHLX9eGy45215zq9Uyi",
  "key6": "3Em2aSwj8MnWYE3RoNKy5pV5hxXX3maYaTrUBu6txwmQVY9RmWhAQ6hdD3wC8dmRsLkSst1rZBYVjwMcQ8Nw7H4W",
  "key7": "393tWTGrWDNePDA5scyH4qfNeHiYrxgf89hwo8zj6dz5G46uyEQ8KBYZVbV1BGa1KLChXF4VPkpRo6tMhE257fut",
  "key8": "4dvQSGAbm8ezNxLbxipeMNX9xuq7EUZQRxZ8xEQPgyjGMybU5hUtYV8FfQ99ASKt3UierwwUj1Tzieycgk11t6Yt",
  "key9": "4bCEeHvrZd1LXApi831fq4JZpviacsLtHingA3gvv7MVSzPRY8BLnhJh78hgZtjDvJGSMZyqc2hdZg9YMvhSwqAV",
  "key10": "2VTqwNe9mA84aDtgxEPnj4SYPbpsTTPFT5dEhUXC9R7CEDZP1tpv91tEV2SPEaHzmEVyStLXvu1cYSiX4iByuFCF",
  "key11": "5N7gHu8UaSMgSvq9Wgx5ZvatN6iRFLLkTTtXXBvxveZLtcMpZoVXD79T6ERTG7YS9bX6fYaVD4D6dfkvFGEqu4Ep",
  "key12": "3jomu11NFoVhsndG8NeFs98oHJ1Xp1YsQERPeQ8ChGZDmML86sVJYajkJGpEt2DeEJ39Q5ovNutqvkJMrfWNc4Jr",
  "key13": "3nLaLHgTj2cxTpuhAtRK3H9DXt3hF4vdzDERG7kyAYDZNc3hNeSuJJNx1qZp3pFnABu1NXqa3MLTv7pwj9jwG6yL",
  "key14": "2rbiGXiEyNJ8cHW8C5JCZBFTXgzko9kt2wpPgsskdTLVt3yAgvfw61D436TkRnzTL1xd5YiJQ8v5okhazaSeXrXR",
  "key15": "KJxDb6Lc2z2gNtE6nWscS6SWrGNaFLxXM2Rvw1qcAfYGtgySeZR1CEaqBBDaGTDTnPp8cQj1gf9fGCk1okwuWZB",
  "key16": "2uGWDaenWchfjqUSKZd66PP7TcAEtE18Ls577xv2NdHsU6SgyEwmSBWo7TxHumbZb8xNCW7PhgK1SvxSriMXXN6B",
  "key17": "UeaAi6Utq8ZhWK7UjEhgz8PryMpKGUcZ7yYZbjbWXFNKrtCckQc5NmXu24RV1ZqxAjWhjit8925iAV5bErLgpvh",
  "key18": "5bwy8y6hA8ttqoA6TiNsq2s45pX6BxVPmC4qPts8R2SnrzHKZs3VBWvsdrnYQJcr5HzRsPkjFkpixhJ7CyimiFFe",
  "key19": "cSzga43muRqSQ75XcX6kEbcUL8WGj2L7p2oNZiC7gv3G7GeqsjP6m3ehnfft9hkVjzswwFKWW9a14MFcb3kYnSw",
  "key20": "59UeCu8MUZux9jyLakMuuyotFqeeDT8K2vJCuHBgDPMYRk74LBU8CvL9ti3UwAjLGi4kYXLCivvyKGyxTJTyLeCp",
  "key21": "iADEgC9fCe2tv7NVxawvgCqTDhCNafHuLJ934TwvzxfQBXK3tCWEFHwPG9fvq7WU7n3H7yMoKQupyRUFPk3x5WW",
  "key22": "33yy4pEZiUqfGzGH6b1Afw1GoFhtbhhdJWreHzqNrU5xS3hqW31UC2r4hfxT31s7nVCp7cvUA68fZFjSDaBk6RnS",
  "key23": "67HY1nTYBNveQAH2XDvasscUE1pRxna33QHnrkYrkD6MSd6JGe57cNW5qqfehpHr7T2aEF4KDnYZ5rXZWwfyyzi7",
  "key24": "3B9UmbtNzD7YptP9r1K1RSQgnk9LDBR6SczWsRW3bbTqRNf6FYCw6Eno9CertYY5KME3SCTdtabqwCnoLSzVHocc",
  "key25": "5DaRJkVioJmxXsLAJuE3tcoq7XC2WpD4DoyEZ51purQMoHZUkHZbmZtHiQsnwip7uCi9875oFPUeo885AyYKQoa1",
  "key26": "3BwnESwT3CK4X2kFSonAZLZUNf8sCquQkLsynyhqTLw33XN8htqVwiZvwf14qxs3JAt59iG8P34AApKumNtrnCBG",
  "key27": "5EthijREQdSPB8eNoKSU74jq2LNhaLFSPz34MShsheytHeRPKZcGYw8TD7fqJfq9V6LqPYKoqyVT64wheRQzmoCm",
  "key28": "4k6fvaJSykqhbdmqEktajHunWE5zj1ZB5NPfG1LRgupEEV6eGdSYmw7C3YMwt8gDPDFomDQMkFgEKhtWLbH6oU3v"
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
