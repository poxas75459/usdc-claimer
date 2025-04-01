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
    "46LmaaSFkVN8TaEG2DSLQQkV3YvXpuE7AwXLJyt9JdjvckYdiReCXt3x4gXdBDw8gJRP85MBKj6r8LnJ956b7YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xrMWfwoQTGhgB9ouWvkjw7ANncGL39kL1uDJAtUfUYAxcB5z2Xg93oVA9QgtuxxRsVoyTCXSKyXJndbaWBwukf",
  "key1": "5vEdHNQ7JR7A835ogZKF49BZ7Hu8tmN1bng2TC8SAotF3MF2g4MZXb1fns1R7Aunrw8MDoVVWwnpQXpkU6GcvV6b",
  "key2": "2KFJ9cQxPPrfoNw2zA46R1nVDWSo8bxF4mutVyJFYS6FK3Uh8vMQMFVA4Fhbjm4mcDAToNiYFsgJYBQeT8wp2ynw",
  "key3": "3cnax7D1jAHyT28NDSevgJP5dyE9jAHtFrsvMiRRNqbeRuS7k1W4R2KuYG59evapzNxcMipXReX5Trc2EDT9VZLa",
  "key4": "pa7zaVWdwS35BL3s4YVWY8cNas689sf85VQfHoEc1AdMgosr7D1MYP7VJ7dZKcBzYhSFcYY1bnKbnqHjjVybMKb",
  "key5": "hqxMUmiBFfJTeUL3ugVbpp3UyPap3k5nzk4TyyHXFYercY9WLBR2RSpshg6qNoMg1uYUPta2Hh4qWggrNcjcuyD",
  "key6": "R7dXYWAy9tkGK73RapfiHx8fQsrkk9vfp9y6HfH71qwWcoDr57cBL1cHjNcvZi8Hv3y2V9oUVx5V4Xb2Q7jmggf",
  "key7": "25oJqAacJLWao9A67uUhpAVazRwbAK3WLJhoGHBzZNSKoKgGUFajAJTcAPvxzLVwXp5ktTKPeMNSMBEpBbbQQ4qG",
  "key8": "35CN5MdQTGHWCTFJq2UCKzUhW3BQq7RacTgFEFLJBPsur6jzuum8RcM47f1unEYuqA2WbfNBp9m7SdXYWnza7D5k",
  "key9": "2Hvs5wSPXSeBqdfdX2yn9mnsuUEnGfZPXyX9wjyjTqhYF6KYoowNRNfG7bB6erhnU7izzSiAfP57f6zMwYf6frA2",
  "key10": "2izP7ngjSCUc3akuP5FQE2zEEzCcsY6PPd3HrVpL1H1vEka1VDgaVRFPkRAG5YS218E6n2wvyuwSvK1phk6BBkbn",
  "key11": "3J2qAsmn9ZuVre4dEQpkPiCQvrozwyjJbiYA3rMqyVYBCDLzWcpsCPSwa13tqHpjHDJX92N6h2QYTsdioAGSs9L9",
  "key12": "5aeckFCYCq8ANY6BNNv7NXSgeiL9LQFU2qasBSeG4Z2BHq4AeMsPJ42nPT5RFR16SidgN77CtitiRRdU3hPRnSA8",
  "key13": "2Zt1UZkqTFdx79CyF2e4WvoL8VfQA7sUYHpW4aYE7i15KLFJ7zL4XjxFZu4URCuKK3sReXNBZMALEjbrSQHoynvB",
  "key14": "dGzKkRqcs88SrvGG4Pcwftf7AU6AApDommDpUeWrU9kP5RLXziebbMPbCnb3HKswUjGsVEmgZcyEQRBQg3hhUUk",
  "key15": "YiWXWjZ7X6HkpamfazfaxnmQUYgYALqTBXJCL5iRvufsXN94B8GGH1SsvBPpeeJkoJCsHwey1a6Zb1hpao4U4Fo",
  "key16": "7ogS5Namtc2tSkd5EjkpRArB5ebNvCZNtiyDQTTpk5iMbGnHAqnZxZUnopjz3DQrdBgawrQZ91ivTu45ZK89adP",
  "key17": "3nurQqTUnuG7YZKDuFCwzK6g83NbqedQGQsGAKtbaa4Rj6fU7z8Ho275F1iw3iRE3nGKNh3eSYj6iFiypynv1aBh",
  "key18": "45uLhK39wVjGhJgRD3Z2kTxmkqx93uMsv7dQ3ihmvHi448sdj5iGBf1Dg23ra1d6P1K3HxSK5psntiRrshWuaxx6",
  "key19": "N9ptGj8hbJhEAbS3B3tyUiMtpStC9N44JAwCCTVdoFCVf1UE7BVMPV6ctKdC4zedq77ANMdPe1hniL2WDPonxj5",
  "key20": "2kmWQrWG6opSVYmey7Vqjx9XfESHzc5fhwKqaxPBn5pST5fB8MQz2SSGUNSiynzJZxGmfWzh4jP6HodZUGSwB9uc",
  "key21": "3mSQuMTP87Rr1qXfBD6j21tMRzXBjSJJtBT5ectbwwcHcYVJU5mY4A7i1ZsWbqJ6pZUBQnWFWAkxWhayFzP1Z7kH",
  "key22": "2tgbSY1ZNTnDFxyLX6dapnbTcSR2nn1EWq3gNqkGErYAAAUp6gZWECkD4RVJGPZ7NVhfUm5UxcMTd6ShXvxCn7oX",
  "key23": "3JxzusgHf5SADF8hrRghm7tbnxAyyasaVDJEKAVw8goq1FeArV7HL49bq7FBmKLZpKbnTZhjPfgdXx7gXHbiJJAa",
  "key24": "4PPbkExUkWYxHjjzmmxazqJMh76rdcvjq7RRNWRGcVXwpgErvxCnE2xuPe3Qx1yNjji6W7nG1dRk9tLvk3jHoThx",
  "key25": "5gvrAZtjpULGb2Tpj87CguwUmGSWEKeezcdvcNaKRnZtJynxx43y2KRGprpAijSVN6pvTht2DpCt35RmEXXuLYKE",
  "key26": "5yR3kEqJ4w8cZHTjLdhgft5eBNNyfJbP3pNCsT16tfQcWDMsG5hxdQ7HyaqHsAbDQNNy4q85su1FfvZQcheQ3PHA",
  "key27": "4Xkyu8bpAQP6BmpqKNX7LujYcTfbHxrSBkKtMkoda5CeXky96iyfVzek2qBkhNGkNeTtFYYy3RZoXVoiuM6VR6KD",
  "key28": "2XH6oLiVQtXn44cNFDbDnQqdEWU2G9ERTxm3N5dWZqCLzHgyPjnTD8h9iPoQqbMCkDXb8HYfgZGsz37QCACBnGTB",
  "key29": "3qvNWLtTB8aQWwmEKgm8oun5XBCcpXYoGSf3Cu5Y6EtdoiaGer9osdWU4VXxuWb7mDLE2kKSnvd3tESbUNmYMHcT",
  "key30": "24hUQ9cbA2eXATHqFCRBvTqkivX9qjKaUokQUMJT7Yc2yD3WkqgiaBp9YEhEMV2M6rnL1SomYRnY7hzohB13RffE",
  "key31": "vEkYSVf6gqw2b14TMdMa45JuFq3qK8pRBP8jmV9YDB43BHEME34bfp764qRK9E4osSEocuNK1CV8SQAzvxmZ6nS",
  "key32": "21QGTCfrEPrhd1HekwrJvWQzCBcG2oA9YN2FEn6axNsZrie9rfWWL8vpPKPJWEZDh178PaUNriEKMVLkcAg3TuHJ",
  "key33": "35xdaNbTfQtNQgXmx4N8pQjZxgK9AmBviHJAHVbym8ksLiDFgENB5ruMXdAtWGcrq23CRdStPwZPs8ZZiV1wcEEn",
  "key34": "4PDoY6gZLE315PqGTRm7AH7vZUex2SfS1xZ7RWHTcEfAwAadZ9oBT2ofo3nbRV8JnXCkkHwdk5HnsCbjGv7DuGuL",
  "key35": "5iTQRfGfNMWVWCe6WdeaR8jWa1bmDZTTwy2cjebf9HDrkeyh4j6inZT7avJTjYUNySE155gS3MpLJEF9ukGqSq8p",
  "key36": "44QkioQFpvJBSs5R2Rta5BUS6SaFbJPTbSEkjvYC9bVpWE2pQ1THgW6MKw1a6h9ksPYRg8DjfH2CPF6z9gpVRXB1",
  "key37": "4fQMCD8tRooyA3SP6yjs3CnXpGzuJ2aD4LAzyY3vAqnDAoLZFXgzm8v8WvhB13fbj5tkjgtroLtpJ6PRmvvebdNz",
  "key38": "2ZwtwDWimyEQePZsvCHPPPoTKUDiVQSgYSbSriWFbN6UAjntAoKDg6AaAyMZfNRR4riPKuuUfgoTfTMfEyERtcT6",
  "key39": "3SdgxZA3SsXSajT5DT1WxCqZa1JUfP5sBw8xBDed4TBByaVneq8j3DKs9K5hdURFYSmewYHZcytwvrvkj7m75FKP",
  "key40": "5pHipCBf9SBHxXuKfqq5C67UGwzUjMtX45N8j8cWk9RghdCsSTe6XigKDWor5ZbvD6QWRJLPqdU28L2YJqW6q2xA",
  "key41": "tBZC84wx3DTfSb37uBUfHd6sE19K5JN2m8qapYEHHjHxuk5BakQyUBdMfRgi2q1fFA2vq6b3EpnjgqwnPeyqroX",
  "key42": "4Mkm3XZJPhVwD9yMkCYmyf6at5HUz1EJETCn8RuJfJvK3c18Jyu8gVQJVD4iubcKvA6D6aLQB3Gg3m77uDgedRGs",
  "key43": "2ofzxu3YvxH6dD4JaMKRKjQZLorZ3y79XMVex5WirM8BJxcd1yKWywgHZsEvXxBcrAxpT73rLtUUtQdk9DXBFKtG",
  "key44": "4dmKPvGAseoEfsLqMqAoPEUrkwdPX1Q5G1WgWTu1QwZrDtgNyUkijWuVG7aK7hKAXxCY5B47S6QqJGAdwmkTB36j",
  "key45": "2twp1xAbvxrGSg6q7toN9KAaMnam6DMw8V8uUg5oC8KW8LA4heX5sWwHmBzv4gKVJNvx3YKghFufo2tMu9oh4Aaf",
  "key46": "2UEkeJuAD1gC1BFz37jTDcgXNswXzNarYXiogRhCMorap377ekLSHtQ7Je5JkSftfVNbfTa3HCgJf4fPCtbQfH2y"
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
