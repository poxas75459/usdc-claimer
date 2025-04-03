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
    "3GGiRGyn8bJxuuzhUbzm6mzQB1HfRcbe9ycGwfpZ2npjtxaP4R8Z6CAUKUb11V7w7cBrRan5fuufgFwetXSZyDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhjaGVcTLmUsufKv3aRRxTJZZanZknwNRg3XXq6epveH14ZDCUT5znYTyPGm8PUBLPk6xdV1yLQ98k9LDpczwdk",
  "key1": "e5hecmJ3yaK8cVxUYhu5AXX51ews96nrHtoRmmQCnAuPS8DTu8Fyq83cyzEW8LokchGtMkM5fiVqAPz8UWZZWXa",
  "key2": "5GbKgL7bGtnNZSBxwWaAf2eukvinNPcg3JhbJ3PH3oC5WkEv5tDYJ8G81mvu1tChqG4x4DNJeDEvGTu5e5VqSNm5",
  "key3": "26TvAgVnmwnZdSVs1YzPoPKY78dVv8ZHjJgEnsvz7hrgWY18m4LUpVZZ9DLBD4ZFFS3Gvi6BrsBZnC6WCwv2XVRu",
  "key4": "4ixsuATLBhcrop8HEXYjEeq3sK8djPXuEmmfWH7maMRUEUoTgyW3nq1pXZ1aH9rWXwyV9u2jFZmGZidzdbLH9T3M",
  "key5": "26d4u2bGnpSBvLAv42ZhcHLmhCQ5yq9e7LFVgmUXin2EmLcD7VSTeFeVh1se3HKskuEGdF15eL4aNUcF32KFRnf3",
  "key6": "3wTkHMPv3UUQdgGu9ZTbspBeKGoETYSsjoE2myU1tVvj6ZdAzVKsTDNGJeWg12xqsCpzSpnatM8YTYmZuCN2weJE",
  "key7": "2YaDqaobNtd991csmkQEYTyqbHBnABqxyTWfr96QD8HKHKUAtmk9SUHgdKvv7XVf7HSNLCQbQBfmqfPy9J5Q9p5V",
  "key8": "32yepSPt8TKqoWb5Kt6G8iLppviy321MUb6pCeyoQp1wqKhVnwzCyGPAL5B6SNZJYfsZdpo8G2n9aH4Wd3EJeU8D",
  "key9": "5KdixTkKmJRySan4s2txr6sMst1CKwMEyyRsw7LPpCp8oBwUSZPdMy5eTxZZzbubzPCUkqrrsibPjyVLjC4z86sN",
  "key10": "53XMT6G897HexL7RwSrjfotELqrFTrsbgLGjAqzTkFvAiCKctwk31XLy2quW8b6dtomLuagMM94d6UZZ6xQnrL2V",
  "key11": "62KyMfffyNhKZ6dcjzpt7BL76b6rQrJghH3F85emAn4UqVF4Zgvcmhz3PMmcuNhWcy6PkYgs3ESqGy4hcw17JAG9",
  "key12": "4pWKGqJw33SULGermNEXQLMFPKTU26esvfsYew3iuMKHHAna4fMsTThcPXtMV46ihstjSpZ9nehWogphZJMmTBL7",
  "key13": "3NQJmngdce658Y4JVV9T7vy93dcBFzyCYgbiqa4Q6dKmPiAQuZ3PuV1yEiaXSEJW5V1DeVE9g1Q6W8iqrgX6Lnak",
  "key14": "JQuacX4pCwokjijkYegZKcJQyVbzVA4ezDCadL4MY2MmpnT3aZqf39XVuDxwhfUNrcR4Z5boNnfV7He2kwwfK2Q",
  "key15": "5Gn38gFdudKZM3ioxSKZekK6VXBGnzMnevCyeu9SQw5d9tMUpqaFvKr7EqZHSx7m25SE9UmLJoynxgCjQ9pgZ6qG",
  "key16": "2zdw3oudRDrVRZnNAHQ1hcqq2oKSgkEhuedrL7voXxhT4xBdkbX21JDRb7s2pdRLVtkf3vG8Hwbt19MjLNvsMC4D",
  "key17": "3Fu2T1kRB1XoUhiGV21gfmcq88tasVxoBXyvg8eczbi12VhtN6CjJAfPuQwCbxWXBuhBZ9szwQPQtL2QiAvfEbUH",
  "key18": "4KGVWvrM3BYpVTxXZb8bQVzuZbt7ZVyrrWCnre7NPPRUAeTu95sCxMSnS7JAxoCcjhHQvpnKoaKfWJfbRrBXyxWu",
  "key19": "2oEyiiGYwBqxCTE7uGnNqU1ptnPQHsaafzzybLRCVKkzz2VXbAWZmQ8RC1aApBJLuf8b32P4Jic2cadUCfrvRsUF",
  "key20": "5wmfhUYjGnhK1VDXAP9WjF3AbLnNGasBKZjAz9CzbvvCeR1rJPsEVen2ZGuvr8qwbr4iKDEJVH5bdfuxhzePLfH1",
  "key21": "2SAYW3dW7LiCkhHiXyJ1yZNZKr968ri78oTVc9ri96GtZhzeBxuHusJvwNdbn5azSQW7dk7Z7vZeX7sWoAziyDna",
  "key22": "4dwX3BB2KzqX29mEpFrYNHzYNxtsczzZoNwVJP976jj8avNsd6E6e3J4ga5pt9kDe3fDm2kTpb823NXXZxVGerjE",
  "key23": "hKykZzFoMjLDiHyW6y84UMF1rUSqvzrb4PdzqMuHSwUkM7ni9jxed1Pq2f1sr9gwAqTWBHyLhM4dKMGd4A3eNyP",
  "key24": "rF534oHActCmwB7xV3RtLDN9W3Wzx8nrqF5u6qCuMR9Siaj5ZC6zVdYM9Pa9RA3HgdST4JyV7SCBgqxirCx2Dsq",
  "key25": "5AABE1w6ujhx8a6sSpxBShFH9susa1BpWMKxgCSQ8zMSoKxfDrXkmuQdnkv7TUpf4nyrczCzZVVQoQxGYUhuZ9gC",
  "key26": "aKtHLWfHqNtZXN1WhqvSVHnGZaxBN9YPwioHy8XePnk7BMWdHakHHVGXxZeMR5nSwQDMsodHF3zWsum5ApmfM7Y",
  "key27": "28Dw8vPM1q7WJvXKRRM5ZMfcjedfuwbgcy8ZJLB5MKzdq9BTBphhv47ERs31W7ZSEsL45XLXNfRacFf1bn74m5rF",
  "key28": "3XctRe3uoZY7L3mHfVG2j7cfgxw9yNdJz2BiKCrXqrBB7yVynKDQ1fK8DbJ9bJQBznaqyFgLXRWHysot5mQsgxxw",
  "key29": "3G3LAJFLinBGtriQLeDpTRP9ehbrPz1MSgSE82a5TJopEzdHbhoewhey7aytU2zufLtUwuZfvrBA5jEdycS4EssK",
  "key30": "29xW572orZFsPbA3WzV1mfWkATbyBYEfbDpnCRVM1uuJALkvpzwyGmzsfMfCPmmsUaiWEeDT4wnHFUW13kFj7M9G",
  "key31": "5PGqRSDpZpkyY8FV7hkhZpwbFbkZiZSkakRrKqG8A3Hd4WSfXPoGf4BytWW1gvU31q8XNhvxNewEZ1tzVdmXm4we",
  "key32": "2Nu7V73ZVYv8xD93tBexzXP3PCv5YuBxd9txM55ZkGQGUFkub8djEP2r8yVneuMwqg3FyYgYNjdJqJ5r1uBU1waB",
  "key33": "D8YUqLrbSTzymsm79QPj9KHgvPqFZTTXowUtv4D2Wx3CyDCbn2sQavCQfH68oZCeXhCkXHvmxNcbq5guWxJn2AR",
  "key34": "4SKy8teK8RuZCW1jjQYtFTpqz3qwBrirdmHRUpSpXfc9ZA1fr3uHEnk86SD4a5WXUwAdyHwKStVyatmwueQ4o577",
  "key35": "4CBNpRxBdxNDSsZXWRdFF2cZRYpSsPmXmSJg1YMpo5QnN2pk8LdV121dSKPphmXq8rk37iEhcVb4ZKsRaLWSxEkF",
  "key36": "3euZbX2nEchqDiXTZFbqZkx8KBuedXXYb1BFtmz7UpMjNdiNkmH1ns2xF5vaGkdjQV28wLXNNS3Fj9r2xteaHqNq",
  "key37": "3KFGLPiHgPa6TJYAVmWPJCi1Z1SMzgZusa33rtwDhjmQD8UvFNqQBD5kcEiRADfvcsdCLDVHzqLZqh5Ufb61su82",
  "key38": "3i5BVFCpsc9gHhfCF4h6DvHCTsvq57W4iDGhhoU8CWhJYhjaQrk5kbMjkPiaRZ7FK6wnt2UzBb96M8qAu1rpJ5H9"
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
