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
    "3eBZryjc8rKog2cYtPZRkCvEDRkPkHum45J94iFGbyorG274nb2bMGCVPLRYPJ8Ddk1y4U36L91EkEUvf17ytatA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jPkmCRGCDGCTzKp3BhcvD2gaiGQ6UyCwerBPzx2YV15h1Yp9vF5sH3JKoPFiVcJMtLQbYr4AaghsjyB4WupKxiv",
  "key1": "4T22rhqWHun6YsD9pJzrD4YvSh4HvvfHk5t4cZcCffX9YoxkJQwbXpQMPGzvqKhkceVTUBTtT9PTNLzwKYRr5qF7",
  "key2": "414xDeCULAHPxZYKMmQJ8AfqV6yZJsCq9zrk3YN1gNFxNFz1dW2L75opb5p1AYtQpTcrrTTSquwrpcm76fuC11bJ",
  "key3": "5qxVr8YKCDSbpzH5XRkTZ3Cho4u2jhxehrUrMvhXzbrj8Z8tZRUdzb4onjbmNkizktbTcc1YjQyJ7MtnBySWAPzg",
  "key4": "sc2SzUFoiurx8Ht6fLcNbT6CzEFYicK6h3xR1Ty95gNEx8eGmWzzDieV6nj8GjtjFz6hN4MVopnwJQoqjVqG6Km",
  "key5": "3Jgrp38wM1UKMmMhbMtBbmwGYoSxSQowthr3qXprmcCLVs5YL5vZn9f9QAfj88mFtbxYxEiWEJdDCRbm7dM8GP2x",
  "key6": "4FKVSRoviXVzHbPJGABLS1p9k68VcyLd13FRgsXvvMkh49Y1SALxgRChR7BSQHgwqDWkizSbCSdm5ictH7xk8ibU",
  "key7": "5KQ3XyEvozWGsg1MHiQvMy1caMoiecwFJbRW2hU1csqEU25zMHr9k9BWYi777pGhXu4p4RjEW1CnDAj7cPGZGPGw",
  "key8": "43mLPDCPEepXpE9uLUJ7oyk6irxapT2UDP8iq22d3gzyz83zyhzM8MksTCYp1923SnEfpYiL8ZmunKTSGe83Ervy",
  "key9": "368A76Ld9i1nCtV5g4tM6F3eZuwCEynFeCcUcL11tHuJyEwDxzxQJbW2ZcR13g1iKRfPdkMpjWgm8X7dyhmVdmy4",
  "key10": "5bUStCoZtcQeeXVhL2ixVzWdEFXid6Qc39RKJ51jcNgJVn1XF1RAjJm5V2Hm11THJnFxeXpp66ZfQuPgDiyhEtdJ",
  "key11": "483ZLcjEtiG7GHhmcGfy7XgsU2zBqCwwssq835TTdeSbgHtqbeT5iXn6Cz59WYzwdRcC3iQFHDQTSBUyEgDwThCo",
  "key12": "2sxhG5szPZGHLzwsXWRQKBowCEbLtq1ewQR6gSwWZrhVoAHxNw9J1WtVtsJ93JDxNu1wc5K8ZzLX8WcCBoVpGGEw",
  "key13": "3R2pjEh8bSZfZU2V47yLW2RjY8Fmdj2CTruXK4pMUtcmT2FsnxAy8WcSinh8BxA23VYhcQHMvMsrMg9sP55rr1sn",
  "key14": "2Z3k4zktHM7KqRRpN32HrwPAWBK5J9mJpPoiNykaRGs2ukbgBEonJZqhA7Do8CwLWwpqsyMm2gyukHvZqLJNsxMv",
  "key15": "26B21vrtKDxWtyKKE8aRg8u6ZuZocWa7nRso8u44VGh8r4m5dsSvU8mXodc8zmje6WGV7jjeYmeJzLTxBUDBgxfG",
  "key16": "4LEZ79RfXXr1hBejVhTMHqFLbYjkY7dXAjNNucBig3qAXDczCggy3zuVAH16NT2YNQMiQypLkWYMUnazyBAVWfpV",
  "key17": "4bBG3acKxveJBLpWyHQ5QbRiyLxLFL6duDqk1oQ1kkF8s9D94TGHN7UQGizR1WyZzveycpw4SFcyeqi1wjcyjgqD",
  "key18": "VJUdaKUEea7Fr6JagVVhrKSVKaicQ1NaBNAWGTnAmtNbe94EqKooaubS1KjMkkMETaEcASCPAQ9zF3QTZcSbSbP",
  "key19": "5WwqqvB99hzTm2zTcjSWu72pQpHgPP8NCxHqRv2CqEaGJ23nYXKa3qMsZS1taKELDnTYAy5ahAN26FLXaVEtZYyw",
  "key20": "3ULQGZ753E7NkJodbo9rafi6AMJ2WjcUJi49uMk5RCcFKXCKD2N5hcbs514hH5MBmYHZeTNXNZLiTYGKB8LUkEaN",
  "key21": "3PdBdEA4fJBgh2GTTstgMMhQBD1nrTyFvsV5gSqY964pkg2Y9wHnPxWNnDJdDF75pKV7Yr68r5Ex7EBTmoWDCSx6",
  "key22": "3aXLbJacUdVQoEPyhdT2FKbuWtiW973pshnrKoqYjRfX6pKUeKhzmVvzzo8DNeWtgFL4NAsCPnEzV9Qnk72mLUi3",
  "key23": "2uDHhGDV8HMqSdyvcxjvYVfRHvMZpxJJDXVaRq2gy7EA8wgCCyYv42Y1KJTAo5miFYBkNm2eLGXBNiGaD3qiY2ab",
  "key24": "j5P8P64H32E1tk21DMjvF84XSXxXYgwTvMX4UrW249PUWK47ASzFfXsGYkfLvGMaejmuFemUo2wyGhAJmhWu2YD",
  "key25": "36uFtJYp96S1eAeLADPEsasxELED5pQS2cxq32J5CQaeNJHPgrStfVgquJsiHDDs9gptSC9QEQTknT687Yor1y3L",
  "key26": "5Bt1VmJjmRuqN3sJDvZiuNMLw8y1We6STfARKrBSHctH3hyVq8wmkYK1PtpAxzGVbjWzg5vyjcFfW8DQgE9N4c2T",
  "key27": "EgVSHP4E96tDk6fGFcqteFTP9HURcLJmzcKPyBavD6qUfUhVWvsanfohPz6N1Ps21PGgsyukmBEdaKLEEZHTP2t",
  "key28": "4tkidyPZQ5DWVwtCvzqvbuGrEn1TpqYG7DbeUjAVMMSbtEZPaL4v59ZBxYi7pJxh6hqWiqDAQEXMLZYqr3tWya7f",
  "key29": "Usjq3BXidi6CwpgiR673yjtjAekZixZYjZfZ4SeaZHVZEsFGW1b8AsUqSSgYNM84jNTyLsMpQkGispwYydETNRY",
  "key30": "4ukNJqAu47RpKK5mC5WrasiTsjD1ykz2iEjD8Zncq41LRx6M5h7sicAk47ZDbLadoY2bsatB4PbT95Ww665EBq2B",
  "key31": "4HZGmuaq6Qf3JKzfb2PWmjcbcJ9mUxZ3hWK4h8rRWPtX8bKKwCvwXKEoLZ1fh7xrcFvv7R8MrK5RF4mHLBZbe4Ux",
  "key32": "2ocdR2j27Gzniovw6taDA4VGB1wCqs8e21xikXwMwztbVTeThjfNwkW1nECvUw4UbkvLMb1wNLcbh9jbqaMMuN1c",
  "key33": "5m9EYESEZnQQG7UL87Ln7w3mQ4LqWxuADAjSsjxtqi4azTafZqAHLHm2uDbXCh9aNNBseDf8hQ3dgKJJ9C9se4xM",
  "key34": "5HgWfRUY7B276DndzHqiLk3UPkjjEmWecTx8pUdBpQvKJPwjyRe54Hmk8pUzH95HhYuLzNj665S32LBvou9WwykB",
  "key35": "2a1XGeFLjGwXM2KX3D9odYGuPmwq7NEFNSGoEbVUmRtFhsgtRV1Nkfeaw7jgKnH5Mye4NBofkKVNFPq7NBGbdppv",
  "key36": "4dfYekqogUu51e29Cf1UycFjiHMhH9AdsMV5pJFjJduqUmGJQE2XJHvgsHvExCVXjUvq2XVoZkuxBz3kqpDXnFWq",
  "key37": "2poE6Zj1bdRgTp6tmghFKrsdhG331KG9XkySDUFDy4qSffcg66d3m9RjJgpLQqGhWLv96VLymTfpC9jCnnboXND3",
  "key38": "2XXiWvDzZvJNPQcWjsgw74XiWs9m77tp8Kv3bEeNMaSpp5nK6vr5R6apvDMavoRzRX2sfFK3kojB9kcq7oMeLUTt",
  "key39": "3svDyLuxPdkipJKYFPGbzYkfs9tXShvbG6DdWZ1JcABYpVVs5HjLernAX6yTiLVyN1d3YnbzJqbmCgWqaF36Wkrp",
  "key40": "2Ch8c8EvEnXiHFMzyY6C5khWMQDGWmhrRxhjX372QXBaRCoLqzVoAmwsqkE4BKu8QQhENh9fYKFRBiD4YPPrePNq",
  "key41": "5Ch4PnGWi9jyKP1SQubHLHbHrLJfEGW7LouYwK5SbR3KrMJPu47j8F7kL5V36c1zf5wF1yR1XvtJGzGxLEok163k",
  "key42": "2RLDpZhqa7f8HFqvhA2sh8EG6bMyr91fSXFM1Vdz6cGAtAzCZFPaxs2NmQudSvGhQPwdTn8Z27XKSA2CWPkL1X8J",
  "key43": "2oi261AA7Eb1LUCEucYZkyjG7xHxWFYKatRAS4Tn38hcDwp3N392oeEniNk6Amnc6hwEZEKVp7KNaV4XkxravSzs"
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
