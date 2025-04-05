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
    "3VQi5i7P4ykc89Ykk6o1JB9TtkAXvViS46KnAoGkSvCRWeDm3zRpKXDyiG4EzyTCYYYXM99hJrkELTdnfNQs5j6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RX9uGDo9LBTh2fQXAwPzQn39dnASoLHBBj1rPEjpnnyjTocKPcqa8UCFcdZ44xNn4coHZvL6PadVUZ87wxySzRY",
  "key1": "Q3qupm5kBRcQe6e5F8GCeJ2f8tzrPnfNJqz4f5ifoDV46wWSSPKbW1fzcXBT7AVbhtNzpD4WbRVxiMr27rJdyXs",
  "key2": "5FSZzJikqFwR3hdT91m5AAN5pjraRRox93R4jxADDgYzXSGhjqD9fRF3DEzw5Tz5xjDojtk37GTcfiaMGoqcJBh1",
  "key3": "SRq4aAr9RBg2btGrrdbWfjqLU8MXqbRCkv2hd66QqEp4hgRyCARJcKp1UKXhxJwnPFHJjR7NKh4Fh7iMkw5GfeJ",
  "key4": "3xSwjSTVYgW9spEuPukURCUbPw782HdvPnsY4YMjU4bXWiTspyxsLhsv9LUiH2zfUrbdsKxqmtEC8RV9DpPrEkmt",
  "key5": "5wNras1xXoU85Pa42R2GMq8iUyPbwhssZbiMY9wtV541KJYCN4jYb6UgagE6Zzomnik7r4YqUGx6eUyK63XM374m",
  "key6": "4qkFE3z7SWWwy2pJeVaaUBiWTMZGuzvaz9hbDFu6JDgS3mgSETXPs2MsMK7BGgdoBkf6yVNWQtUhzLGs4x6AEYC6",
  "key7": "2LJjC6rXnciPxkC7rH61t7HKoMQHFCaUfcTTUyKRYNGpCMG4wT2Jg2uiHtvAxVwKjK77Z15UfAF7Q3jSaX1susNJ",
  "key8": "mFWnrWkJYs5hjRG3QhQHRBo6mh3Rjfa2txBSA3Wt8YrjfFTwFNFsXDGjw5ybURKu9PZ6pCVu9MC3M5qZm1824LC",
  "key9": "3otENmBT9HKwDqcK1Br3ygfYrKXEMagdgauUnaG2eKKVCgCjiQSjQP6MrSEdgjeAiMbSXS3VPWyyTJMq35BHfHTd",
  "key10": "5SkZV4K1BxPcPyNe9deFC79LtJTC8UTxhz5LcKRAzY1QjS4mBX1RVZ3rX99KTCBQVLDfuCjs1gwGG6oCoueoPtNs",
  "key11": "2q2KVuusiJhpXXxJdNkeUpPSsaQRB5sf6shojuVA9CC4FC5VmnVhWrMj8Hz46G7dBwsEEngTsaByBVB4A75eAsP6",
  "key12": "4ifsaGY6quMWbhVdVhA8W1rRYKXNU4wQToiKQ1yZL6AVRvFoLPSxTCbERbWYA1uES3nKyZV92QEbwuy6w4xB2UbL",
  "key13": "4athtXnaKxCg6tRbBNsQVyFAA6um9XiYpJFS1fG3jjDaTesuuXk4q3VdFC8pBqbFC91eWLAV2D6rj1aKdKJd9gBQ",
  "key14": "5wr1oXP1VUnjvSauQWwZW6xBrKeCzr3APrD7HHkfXvMopuWjVwc4wjsUsEhenoFpfzWuA666t5xHvv9ouGbeebNL",
  "key15": "4uWXGDyfXAtLqJHtSJkNd8LYqKXVQj1xBmdP52hELHFtXtX5j4M4PJZoGi7U1rNK9NTXqjBoeF67XQkpDxU1x9UL",
  "key16": "4hCQXfjM2Rpgz8vXUGmb2iFnJCr2p94qZqEAndbLSx5ipa6yFHxa7fMJM2xj6yiJMBx3gDzRGEgWqA5pJKFNjRTC",
  "key17": "5TKKEBBHL8PQsNyqhjjsRn8GsmmniFQ27qKz1f5xo4PLc5UrQoSMw33strHAjzJvxMp4HyKaW61wYdMAnomKkxeX",
  "key18": "37TU1bLqxMYqvnHHwAZeaiSx7t4zJ8L71efx7QsRq3FQAPnFn9D6zja6CsoPeoZCyZ14NFi3XB1abcmxUQQarHzY",
  "key19": "4s6dz5ggjKtiUVcbzkVfJriEDLcznvnxWb3vd3wREKFcKMS42EG5zBJWijBY7HmUpekjBZyXfghzekxfS8WMLK9Y",
  "key20": "2VjDgbhz1WpjfG9QhmLjr7QMH6EY9pLwGtk7DjgEY2jMQomEPuFhJrYhH1T8KKcy11aBETxZbqa8VrKWMZuGrBg5",
  "key21": "3tWAqoa8dj8d8wWdmuc2AewiJfsCGMqyXNUAgecsnXFNzGXPJfcmFqtcgCCiuBnS8zwUBwXkLQ6cMVpxgwMbaEEt",
  "key22": "24RsyomMukWzpSxiaKuBkoNc252nhnQF2VidMsuCkYeoHHvMP76HB18DTWGDm1VZ3YC8R9Dq5Yc8aYeDhpwqR9WC",
  "key23": "5Eh4v1GxK1LNrYiZ2egPjDVvWttqLc33f5c48nq1FaVYr7MRGU7T16gMekUnEiFBQTeUrbeaW5TDWuMk2Z73xZto",
  "key24": "5XmMofKLtxzu7EHpwfC15TMsw1kLYrq8jj88Vg2HCGpvSiM8skCJ7RCHWjL4WofQzAkimkNFS5HqhG4D8idLdL9C",
  "key25": "LPwH3eCeToAbKCCG8yFUkJF1Y89km8nTVvAd6j5Fae2Sp3aJXUibyLxPH9U5eECockjCVRzH2obaBjDhFTxTK1o",
  "key26": "3xMHs3eLa4mbnfns8MwToSXeFJad2CitGWzCVVkGdf19uAUmsZ6ShWmMPYfbrxBAS7BYPeYZjcRn1MKj5RpgCCKA",
  "key27": "2eF9qpAK3DBNtDyXiK2V21rqx9L52U9L1nmqmiqKXXTTFDCev2L7YZG5YJRqDV6To1R4mshizEvcZZre5ENumLPW"
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
