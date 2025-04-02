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
    "Q4vJRe4jsKbzqUDd9cQk1h98Hidc24ZSiSF54t5Qh1xhcptqa1SMYjC3XUCWSBYZkRYG1gXer4KWChjoGyfk1pR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUKuQ9PCDQhRiTty26N54AzV8cNLiGeKTPBSQEG75MwZSRFaAujMzW9ak8q3aen9xTToBwURaViHNv2rQXz4ZYD",
  "key1": "57HkFqSYGeeGRTxsrFyEaADraczeAdEp24Q2JJqovCyRo5f54rg31hEAcWdFrGRPoR8cacLGd4bqoNCUQ8N4XZu7",
  "key2": "4wE3VVCkyhkNWfkPdDzycnQX1bm4NzNptE1wxymog6EFH5qT6TyCFEoGESwhjVUeZMC77zdtoeqtW4oDQ5UdpB6a",
  "key3": "3TTBY5jmo8ms3qGZNSVUopVQVGkp9q6twwMzhC7JAke4A52pQkZszqrm6Z1w9ngsuP8S1VvcKf9PHLbTUves24kS",
  "key4": "5hfciHifJuryma8cKRHTJxpACDvWtnCRXPxvAFPH9T5LmjoW1BrhtJpZmoYSerXwmQ1v4UDPAL1wjonyXmBtmZuk",
  "key5": "61iB5fyqkvkhZEPYUi7NE78d6zPBmU6zgPbXAmYobHrwaxG7QTPFmC6jV1m961pvEN3zRACFi168wgRfQ9Gk2evw",
  "key6": "5iuNSQCktQgc2TgG3SL8e2UyQ5RDssQw5iB4GvboW6swRQhQskTCio16xPLdjXH1Fa5wCesHA6HJLpagXcfY8SxG",
  "key7": "2zw8P71xmKPfHYszQ8EGVuHNhtSnkzFKUavnVRpCfZ3v7PQx49jHs96sk8iuGZsvYPdCBAv1yo6aPSXoi4aunZ3X",
  "key8": "ZfH8yAUuTTVqquQ3XLUjpcZwfUfWHgsjKLo7Rxw6VhWg5Ccs9N2rBYVwAD12RWFDcdiK2fHXDDvqgZAMaKAdEQJ",
  "key9": "3ZFjWGenRFmUvUNroB4Q4N4ErtHKnyP9PaDovL2Z8hKEYK5rnKTG1VW88DosmcGKyMSoVeXhsT3qCe6goWWN61Gs",
  "key10": "3FT75opzUBVHkWqaoPTEEnkr2n5oEywXrvzqPRsJNM2nTymLMQWEQ9gJHTVFgX1qqbV4zNu9ESBvHmkvvjjsbgLN",
  "key11": "3U4v2A95kund1Qw7wpX29S3ghumrrzzYcJNfB7qiPyWmSFre7imE3b6kNSwozp46C5GVqYSkMkG8qqkwR2YuuEVR",
  "key12": "3JeVWGotuefUw573Ubd12X5B1RVayiKknUM9n42qHyCaX3bZxH3vSWGhvXy1nJbeiJCaBS612NJ4Jhf2Lrq1t3oV",
  "key13": "iT1HScAJqZF2hhhgfSurpfoRPE4kSKUQyeg3iZ2T3KjSankqmvj8WKXV7ZqxXhKL4WLWedkPPahQyGMT42NrMGs",
  "key14": "3C33otjUhFvx815d2WNL6aDU2BfEZppqiYGByx8fMwT4k2qEi7Q33Uf6DZRUyw5iCtFtZea4brJ9CAC1rJeFd5LP",
  "key15": "3v2firwQmGW5eAsnhu9AYboxacLeBuuSKG4psLcHRqUKXypinTeUCHoqq6enMZ21z39PpgzcjAPeWjWKxYYavSRj",
  "key16": "4r866JL4Eo1EBuupXoGvuunJEoG25SFfoUxnzW2twZtzsmDrzMBejP4n6ED3kLiSKwc7phZMPu52Pq5tLSszzGUt",
  "key17": "WSs1FuAz3s7huzNnif6DkZhNj1rRUgUz4eimXxewB8Pre92gNkna8UV7aL6Z7g2BDi1E6cGYtaPg4AnNu6tV6i2",
  "key18": "55s4XSQfotKWS5Q1KxW69AZMg1bAmAAwpwtBqEgarTHrMpyQnAkDdzqwtq9yLY9qUh3FQrvx3HRdHYwmq9Hzkn2o",
  "key19": "48YYqgciQFXAjsjctKvZZ94mLxQxZcUNQn7HY6zdgxsPBvvPgnKwqsfjtHkswSkXNkEYFHiz2uco8rCLicV2T1Nu",
  "key20": "1314ah1RWjvLZSz2ZsQTEzWvHipDxuzeQYQ7XBBKERdNRbdEmQSeFxKEtZD6jwXK3S8JLVMxjyTAeE7McCDq67G",
  "key21": "3C95NWud1MoxYPqYbQPkzCw5BFtAQ6w8s5jyomGYTZ9op5q1gJTq4E5gErucN7gNE5b14tmj8PRRmj2n3RJErrQK",
  "key22": "4aDwcidR8rn4o644DiCg3cTBZ7vk6TBfJVCjFcdyet6dtoxSHtMxnZGkqgBdgmZBzsV4iea1QYcQ1Zr8qvbnML7a",
  "key23": "r4XEJ5MV2D8zZLr7DwxTFq6v5PAbBcLYb1snSrF3fcH1Zo8fiAdRGcXKGuvtgJFcHFg7UY3ucaKAvMuSEKopdYM",
  "key24": "44vmn4867QDXHMqjMAqx1QZHuN3FAEusLLaGuTopzgUWCX65vBpzG81uAp4GuknxnFzYb446jTcBpovxxKoiQShw"
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
