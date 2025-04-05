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
    "4AQ96qWnaagQZMbxgN4jPBwXpHhEXraBmNBgo1A8ALpHKkLSN3eZ74sEEQk9gMv5kzde1iKmNburqY8hYo45P4Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogbS8if2o4Pjj2qtdu3w9qYZkSUV6dRdXWBrRWGNhdjhpQJ8617o81XvasrXvnnseqAep7urs5v12t3SjJUhX2s",
  "key1": "4qJhynpB6uz6YYUmrxnqTAZyBqSwbfJxwP4qWYLmCW7ZaRoLJ99pT9SRfkQifiMC5RTzK8odHFdsCH7trMJV5WNh",
  "key2": "557vWb364XfNLKrqjkHXvhjAUE1VwNy8oB7SVXAkBuosZiY14WiLHndJ1mrWg9Te9XhFuxqN3jLs26DwjNfQosC1",
  "key3": "2s8y8xz7gcT3yxbJ1vLKjNSo2k79j1j41RPVv9BPqkDCLDfSZtCBeyXHLf8FPX1QYgnddRpZkKFNXUDm8zQwUCpK",
  "key4": "4p7j6j7oHjrofcQubV4w1t5CTnSR3pmnfPfs354KiVygEtVW8dU7u7KnxC9m2o6voFGWG6jwJ5LMpL27i3gQtM5y",
  "key5": "2TFCqS6afz7gwQa5erezBNagwRAATspojLU3zozTDWcs3dEB7cazc1SSZtamTTekeho2ygqGdfZq56qUFtUtjFfh",
  "key6": "5PTahfdWLKREZuLJ3tCZgNFfGqRCB8yxqjMaXLSQUUPsoDt2MEHH6uu1QJopaAnsLEs3VLkY3p3YnudqqRAYyEyk",
  "key7": "3xbu8j62264qp94vbf5t4CNc4AuLHWdt394nvfCN2a3gC11TJYycLrJ3XP8hgPiq2aDayb4GxB3YZyh4WcVpZdd8",
  "key8": "39HZnJpE8VR2ameuuKi8kEGAa1Kdfdq6RDrJn5V5qu1zvseVmkSsfMsSSDcapXqTTFTM76onK2eK8FEG587akmfA",
  "key9": "5WK1FjAVTuhbeEYpo7i9AqJWNCnz9hMWir91YvzNg1g5cfghur5XDMvfK7H128FXyKRYjpDFc9GrTnv1kWsDm9PQ",
  "key10": "4riDQnvmABj33TXiQCNTep1XyyMg6Ge4MetPj2h3GPNSAwRzf7dsHyaibtLBtkRDCkXhvmE74PzJmddjZVx4ZHzL",
  "key11": "2SsDkx12HfghpzuwTs92cu66qU2EPwMJL7RUYAYhT77vH1dpccXE3BbzUnVcSzp8cXCo4F8bQx36kGiFoXMsz5B",
  "key12": "3tnzRNRhvxfU1q73Gwz2sXFdv9TGZDuheFFrLNmY2vQtasAXxAxXhof3i7tFE5jX87rQ6NubZKPnEBTBMKnAEsVu",
  "key13": "2N1je68z2QzBjEcn3ShWP2eTqLkbe5MLDEgftqh9YLickEWKRvgwCDWJiycJwU4CeHoKcEXeVwPefEUGjiRDm5VZ",
  "key14": "2zJVQTUaHtxKBmPttxp8KgJYKCxvz6vbHSpkKCKd7Baw4xQXMtFmskjSeango12PARyq2RTe6VLUKEVUq4Go3xZy",
  "key15": "4ViUqMV6i8eXaA7uxt5j12AHBmWVPmxcM3R5Z99RX2A8CVzbznmy3ADyr9T9TUjhRUdqnkNeYDt3MKFMMh5UvCRG",
  "key16": "45kVZhE6W98Wcem28uNrbgdSF7BB6z44F4U3Bey8m2NDtUheyEbPJG3YpcStoULZ2jVBaXre3i7jxcZVdF5fA16p",
  "key17": "622z5kz6pLphAKqPnwQNKBgfpgvrKX6HQDT3LgVCKbaZiUvFqDjiQ3KguAQTbZ6CtMstL965fFWN1WDtVd7Zvxb9",
  "key18": "2hDByet1yQ9EJ3jsdzbRNFQyGn4YRWKpPhqTpiGz6Mgw5kdJz3geZXsvAVAoSnhyZ7zY7JLEPcDYdj2nq9TpjNf3",
  "key19": "2JSfMQSv4QFg2ocNrwaZDw2wStNvJhdhNheiyQdbC8MGN3zfVYduPJStCmw7NCeAjjVxhmDjwDhrUGvciHJWwXVj",
  "key20": "5TuAwrxuVzahag19bq3ZGdmFjK16E6WNNzdgE4zuEGsRT5Zi6GPFr8yM2SUFH6MF2rd1MPvTzayPrYGBYf9BymED",
  "key21": "4GDgNfQWyJ7ykVNAkm9BCnBmEKW5biy75XR35BFc5RrZakmQhvR7mAGqexcmQjnpiqWE7Gm6BrwFydoKpawjugbE",
  "key22": "4EHBZjhiYTAskymGNpXNCeTjNXfdheHchvmx87iqRUNRK3J59Fc6FbSY1wmPnYvXZVoLjnatpa5eoGjjKc563Fsy",
  "key23": "27ggcBzybRCReDvSFXTA719tah57EmFyWKnyEYUzudNzZG4ZmBg3tdXhD1TWhMkvtqTePcvgUCJ4qqvgwgyfrtkB",
  "key24": "4XxoNuXjc3eSSpnxMmeenHxcfhTt7S68VPwSmaLghEiZqmLCe8GBpps45R1G7BBeQKNiMAP2cU9rDRULtTAn5ECE",
  "key25": "5iZmF9LKQ1BeGU3k1TdvTBZ3iCQtgeQpvskC2Dh9xHrFHq6v8rHnKcC3GghJDUdpxizyKQYBfKEDk3oGpBn1pDfG",
  "key26": "2AbtN6cPunJULo1hZ8gmTwzbf7rKAmcJHqcQ3UWTW2ZfpgLCi7HZqH5SAHRhZ6R1YpNnf7jFN9upsjPzoWiaz1Rk",
  "key27": "5NsEAwE9hDLVAM8oTdykrPPe8sLhZUrXGoCBv6m8bufftk6PNTx3NgQDEkxhRmi7fi8zD5fd2DKEZA9Rd3TYwz4c",
  "key28": "Nd4UzdXZ6dus3AvPQYJmax8JTbEWt1YRr8MfULqwFN8WP3o3eT3tAFmX4Qo8G5G4msHGVqT8wou6fYgT24pBbWH",
  "key29": "49RwGgzL85kF8x3WzUhd71SQACJsUeM3tt4TvXtyNNQ8YNPV3GgYiuQ8PBkrdcfFG4aCwJQJz5R8VdJGandxmpf2",
  "key30": "5D8F73R9vMv8qb8iYSfBGmiUCWX5hHSMo3HminFVvGiXnQZUDKhxpbJXw8Cp5JfzjDnhfJg8fmSVW6nFgS9aNjca",
  "key31": "2V1uWmeZSBx5Y6R7Z5JH4jtViWX6EHzC4JPUWhhofVwjpHwXEfkdawbnCthVafn54dgeABPC28M9pZweNHDVZ7Rk",
  "key32": "59dMmsZngDPDuHTmUs8KEaLwpTT5dLMhD3PuKNoVT8X88T9RMUknmoraqjJ5hbaYQsb7o7jrpAeW4XxvVxVgMuqn",
  "key33": "3m6tvUNjFCEUs7mnHC4Rg8JMVih7uMsWUkWdRUkFX6NSLCz26CfpwUm4SdUVtudwJ4kA8fp97BHZNNLG1Bb6WxJx",
  "key34": "46EPy848g69QHBCcMdZkzQmQzsbRzTELMQUYX74Pb2ot4H62m7eLztaMSUtNiKXFMnxadMeU6s1pwaamhwbC5NnR",
  "key35": "4q31NKKAadx45NM5Jmjf6F3RwfuMrAG9k7bhkJJ8E65qBiAgEbW2bywB7YzvfBoxTN9JyW3RkHeX1idD813NnBsT",
  "key36": "2LvhpNmYHDidvoVqKMVxuWXi1nesXjH9zvsjNDDvxrANRUs7Qow2CYqgfcxZXBRDPXWMkDyYnLrqvKonjqUXZUSm",
  "key37": "L9epeT14QhKArnpcjGiDWq2v3bkPwjmJ4f5S7vbfp1ZTUtSzRFDWUqaAQwHyEwnF744sKttZt52Ch6CYc3a3AGH",
  "key38": "5F7VETJG17nuEqA59kb5foDUgM5vergEt7izt5xJQcyubEGFMPKmjQR7xk9JCPUjNpss6tRAB1Hs5kZD5coDgNFZ",
  "key39": "5orZjWkspWLSfqLPNinpd5wZzWFbeso8uQCZf6vDC9EjwUagWvjwkAV4sCoHYRfdHUV6kvKVTgxi8mvUKx38HA1f",
  "key40": "3aCsWczt7KBuLFCsEbNm1Xq86GjHBm3yLYgg26YDhN4CNJcn256mPK2YGqvwMkZr68J1SaybXUr7tjKYfqYwG5UM",
  "key41": "MHZecPKziehH5Djwvm5ss4kkSmUSEovfPccZCLtay71sPnmd5Fp4xbTVALrxfZhLfFLVk9bMHRKNY6vTU6PzuNJ",
  "key42": "5YmiwiwGEhqFAmhhvCnA2snjbBXWMMq2UEAhgiyweDvJ6hCRdVEjuz9mmDsfe9wqqM6LzvVBDJkt5sbrV6uJGGZR",
  "key43": "3ci5ZtdzbHGHxNXJSt6NTZvdqZid3LH5BXtWdNg534JyKcZiUJJ61fAbGi3neAWNFLWum9JtLcPgCMqo7cDzW9WH",
  "key44": "dGEeRKDqPKh1FiQTbnv35gu6MVhy8EcjCCJB4DvPoU7LB72WHnFJXZeyuACrs2Hc7LUHMd3tEzSywHbUGFRe4L4",
  "key45": "28gotnovnwoW5hYVyrRwKkJ8nfqtK5im2ACtNQiL6J6baXxrnPkmLfeXwnxgCUyi7x7h9yTTMrSaDUFgii9pfRXs"
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
