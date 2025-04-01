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
    "4YZUXnuvpkJN82XwgYw1tenx1Z1c4myXcvYrc94wHV1t1tYLz2eGvd7Lu7sdwz76XReT83e9ee2cxEzYPR7X5oSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fMzCqmcpmL5GmyXFbFZ8n9Cbn6vq3QhCmagWgRnx6BpfNftFmWczmzTqGDbPC57eUrvjXH2GZrFwb2zpB4Gy5aN",
  "key1": "24vfb9dnCq7dhRvAKJjtZnPuo7Nwma8GLRuKgKa8CQSeLeGb7Ks1Uz5XetiNiPBMo4zKX6NfxoBckWNaUqbAMfd4",
  "key2": "5rE3Rx2xGnLeXk4H9Xia7f5BumAB7W14KRDPiXw5MVndAdaweE8qWnqBRwvB3bv64nNwf7KCBozS3z4EBjBsGZsq",
  "key3": "5ws6Ca3Q43nNt717eLiw2vZotkBKTjxJYpaEH5XMNU7gkPArEt4XsLhPRDDjnRML48VraxCfDx8s3JJaMzCPQt9P",
  "key4": "59UttyhVWHxRswE51vheUZJUwJuzHvq9AhKGHgkx4tJHKqAGDUhCdebdebHrHdUdpxjbmJEwpSmp3Ly9NBx8yjQ7",
  "key5": "5wwDtSG77BtAAFKs1zfkg77qiRm8MRUW5eKWVRYgd8Zdexnb3NVer3tXMTbjmHNHEBJMhDy2WkyxdEXRp2ewB5Qa",
  "key6": "4cTQWgC2Pwkc5hRm2FK37uNqoLV8ZRxo6XVtjtEk3yT5i6WyomQTc58NwZYXKD3TsWhisPRpDxwVHVu4WCU3wF15",
  "key7": "25evrJFpuRYmeK89cAzyfsHq8JNzQ3feSXyYtTvb2dbUsy2z6JEqG1ZqFoCSJSkwjZMAxdNLLE5CEN4F5Rr1THY5",
  "key8": "5CCP4kMow494X8gwE3MCisrHb12JqH2Y5UmgXBcjzPcUubAN1tvunr8uzs71x8CtvhKW8dM9ihiRtapMkM8BGvV7",
  "key9": "4AA5c7qfDbv7BTz8HGjEqzLpmLndkA4JxBU5kwFoU93o8XDBUQGMgg33FMPEnmeDLDV1XVGR7NDcnZhMU3wYWA1q",
  "key10": "zS3oq8SmK3GwyVg34ppk2VW9hUmiCPs3wDifPzdhCiHBR2wNiAe9PJjK58h2Dyh9gaBNbLndDS37UzoqNPHMdSJ",
  "key11": "4o8YLmPWSCDFo8cVjgG8aKpJniJ2fnmuUHQRPKZdfJHsndqZoLzuasU8m9vfZpNL9yPSrk5fR8g3ZqMEWfMJRWvD",
  "key12": "3Gh58y1PdeP1McSgo713GW44xbcEypmrM8p4UdFATx1Xqq2QQfuvTTreKdkcuZrL1JPUvB7z7wHokRU8EWFsUatx",
  "key13": "5PDr1NckJDZCu61t8GUtedhnm8jTsdogmjt8okTXFQZQQqTYRztfAgYW5rHyzkZm5TwqzHE41aUqTmNgxJo1W4mx",
  "key14": "5J1hVnXmQptRua49BmBeM6hGUYLwBJARWyS1H53HGuhRMQMkJsggaS49tHee1zFdYNZpyDvFgSBfVvzUHMZnQbyJ",
  "key15": "4S4EHHYKV5ZEZjaWpDkmc6MDXe69REBCMj8S3kLbE5kjH9Pv5EXfgF2mGN4YjABd7cHKVoKGELaJFa3vUCUfoD6k",
  "key16": "sUNYWT585mXw9EcPzkfK463JNjV8ZXKzgTCkPwskmYjbUp1frSjA1FzDiCTj7DBdUvd8K5QCxadCYabccr4fo9q",
  "key17": "A3p7Lo5i5qAdBMPTPRTf4rH1kJWehoBm2oom3oqx9wudCVej3skE5uSuWVkdGSjVkjcNNQg9ZcKD9YJaGx6LEhf",
  "key18": "2AVHeDoYPHFYhRBVnD2riuC2gG6yorMP5F7kf4pmY7ewDnZvQXLVcxcQR4MTaxXZRvv6q66dci5uatGqzdEs6Eay",
  "key19": "5aS1DxwtRmvcC3BtNutBzyLrXdLhxQ6JtwsTbSD9Cn5tHcr8PhJxwMMzFANYpDb9N67qtsVU2eqT8xmL4D6hg2By",
  "key20": "5E3pvRhhbaZyJwn34zFnSnduzb9DBUHhTdB8qXCd1a5tbWh79zTNhREVXSzMQtGeusiSUmEptDPg4AcaifxbELgW",
  "key21": "4xo4N17gabxF4NxD2Jvoq32mWxWtdV4nKC8dtJfQSzsRnuSZTvKKP1ug4AKKqbcCzuJbn2Q7A3EuJ4eouWpWLwJF",
  "key22": "4yPwjZQFM153ABnGPKrnvYv48iMJzAsgeVH7EabPP3ycFCaYq3wUsX2EHpg1C8ksVacmm8QG2ULAE5fwobnrhYWX",
  "key23": "2xDKNx148at753taHCM9puxhPQQKX7bnxSw7g9dmBn6tFsgrYiqCmCdZZaJmhmK3G4YmEWDEM8xq8cZYHEJcvYTY",
  "key24": "2q3SEGBK7wcRt7WpnAW3LsWioaicMQ7JAEiEHHQQw97giKFzEVqHogXn22ryfuqDhDdkgjJ48Tc27zc6wxwzTYni",
  "key25": "5TW457PxzW6D4VY6AAFSj21imohD6HRDnq6jXGwCTDPHn3WhCWG4B5A5oywRNK5xwzR5kJfxB4TUPYqLEJEqbtuK",
  "key26": "5CGjX7uW4VAgf3Nf1a7CzZA66QSgByusudfKmsfYko41KBmLtHuRuQYKHTZt1U7rWnTNustLxXJUraeca4rkUAm4",
  "key27": "3tsc6mCtJCKvAcWSyq6ac8qyYWQejaZ23KaWoHSbE5CMxRT5NG2fzEBJUe1xATN4b2kZDyzZqcNDt3ttc56iMSQ5",
  "key28": "4vZnoFDVcPvQ427q5hsws58HXBYj9hzNoWZE7szYcUmZ3xsEqkSpCWzRhYm44NMZA9pLC6ELH7wx9LnfW3FrTUNN"
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
