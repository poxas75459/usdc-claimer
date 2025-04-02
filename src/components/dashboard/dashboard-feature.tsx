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
    "4fijyYmV1fKJNBpgiyrLpPj7DT1uZrhwe6tFXMZ9tHqhF9S7UAgVtHfWWqze8ysKGWQpD5sR2VUJp4SvUzqB7P6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rPicD2fZxDujrGvdxEd68bkTZQQsyqaAC5FRBA9jtmj6Sn1ffyzSLsY8uG7xZnt6VexFrPY6xSgGmQKG1mMxwgk",
  "key1": "6Bnh8FD6UP5qaL6QVZ8Ls8h3MsVZsczVZ65z7gzo14fTaA25T7v511DfUDrwV3bmuZFJU3sE8BmzT2F9nMshTN7",
  "key2": "5BxDMoLE3Mrx8cyfW4dDPPZ11CqqCRtY2Hg3wAuzvVXLnJmdsy5ny2Sx9w3Sht9Jxvbet6ALLAdakfeKzKucJsVf",
  "key3": "2a1G4uAR5F8S7PZ41yPcMfufcN3KxzmLXRMfCqRHbUu6KpnVKmyX1ZZibbEoPnfi4SAkP4tQLw8sSU8GR3dEwu3Z",
  "key4": "5Bu7ktaMKBVtm8sTtJicUF8VCGpJyYLKAxjTKvwkKCgADWno81PppHCkrWkZNwgKRbLY6UvNm9YntpfUEM6mwHkG",
  "key5": "xzB57uiPkndP412eMn6SQFajYPjSpM7SN8mGRqxMm51EV9qxB3cGEH7ef6zGPkXsDLJPtnkPC971M7yxEqqhX5u",
  "key6": "4zNkk2cepbB4dRC4maQCPsUqEEg1SscmiHd56kKpZNC3QXQWc7bkhGycE2PY3MLhKm87sDyTHmKhBdHrYru1okky",
  "key7": "3xv5F5wKVvgV7XfDR6NXo21KJhBEXmKaj6xkL2KzHdAWFN98VnEHhPnntvSwZ8m7PECtUuqqsQanyk6CYidaQxaK",
  "key8": "5JPFAfAuv9KKKEGTPqzA8yXjkUM1RXNV5guo2cyqu9mwcRBPWwyntoPGYd1ixWA7FUR2vPVrL3tBSNfaDcg5xRhi",
  "key9": "4wjZtKqZvLYbHJBP4RJqgafaK2U7RfNCDW6TpPUNfuoJAm3xzjr8iXrxTff3CMc3AQzHpur2DbrJ6uHmVTqgd4x7",
  "key10": "4pQ8gJ9vTCktnpAxBi5qMBi9qH8dAJvdu5b4X55giVwengENyYEPSAW8Nznbfmq8CX2j1VpuTuFJprgiaUeeT3Qb",
  "key11": "65G9CefXVQUpFkhFkBdaxANHq2CWHbwbiUP1QpjahjUmmTfEhZSpJETJEsbPWdwxKZtdvV4MYhGhNDJrhnCStHAZ",
  "key12": "2t9629iXTvPzoBcS7TqXUtPPCD3v2booBvAFv15qqdgVt9RXYemq5QCZSgUWmWBBa1VSwSCmUsHatbaUXfg4aPwu",
  "key13": "2yqt2d2DSAKJQCBCemdmj9uqjtXHRdtDB585AkU2ku9oRKDLXCxMNdeMgkzby9yZ2robKbzLaLCfvTBUX4rnehP9",
  "key14": "2SaPJ5LRgoQTEmHthpEnA7tWzSYq3RuWxiBvX19kEaMZwsG6cwdC4TPV3GdtHYZBTWNL7GumxfCGgRoY1EPYD3yX",
  "key15": "4B26jAH3KozQfbrq5VLsp7gTdsuYwRg6jTbZopJPz6fhTT3tJYgNYu8kMppVBU32HFwXmojeGsrj5vsQaot6iFHB",
  "key16": "2CxdRoS9Laj7jtQdrtxPHtCYqiV6ZQH1RVDCHiPzKxFUmKDb9rgbpATMq3e25QwrwNttNiXMLg8gENEaLE9qJJvR",
  "key17": "36xuZoH9LTdUqNYdeYjprgyAfvz7Wdv5KRtCtnHQDkPiSUQRz9H1F9QvP7opwMDH3Ni2Zrux5gYSLGbMUfMsJpuk",
  "key18": "2VGjwxAEGBnhPQFCTvrpMRZ7WqcwU72EF7dRKffeb8FsXNUhJ6vfKH6rpg8kWRCkHKMN6oNbHW4baZTnnib3VmaK",
  "key19": "xzsPd6u45AgrbZBjzDA1LzMqjsoBp7i5sgD54sAYTeXnHroTZGU7gAmWtcRaZagvFYDXWPFjKBRuFLcpC6Hbpaz",
  "key20": "3yFd4GWcKmHpbLsDLsFmyAguXG1zXtbpoVUj8DEC5jdzmYkdAa6AynNaRrrxFiH8LAhbiqoNTrTs6VFNJbHjzw39",
  "key21": "Y8JH9hym67vVLUVZ4N2pBm54dNM5JG4Wq5xbnVRqRtMQHQKtdphuxKJVkFEvrTvoqPUVtKorVx5MdFJe78BWoJx",
  "key22": "3qUeF72Ky4VyiSRLejma5Dkv9BHABK5YduXJUvgUSMd6AiHQ3V4LqBumNtjmYZJQ5D4oWq38xrdwpGCto3qaNdgX",
  "key23": "HR3gYPyhr6QQtirknVxSq3qTUYm8NGSPdwCWUUDrGRKMey88qPSdqGTmrWeYPxxBXRHdQR58oJryKCmQMQhT8N9",
  "key24": "op8fipRbpP9iyAfureyuXAZnvFXpakyzirEnFxXsgwZn8vDhXfBcJ4BrGeM3o6vkzP5JtzsnVAeQsiMEwHptfpa",
  "key25": "tZapbpjx7Kc1wsMako8b9WvDbLWE8sHCiwakXNup3hmiZDey8GgUWw1jQkqxhRkg5dJLtieZAqCX9wEYjzJ7sSt",
  "key26": "Pf3B2XYofG6SVM1CtA7WayG5V3PFtgpZxKV9ZQdG3moZV3ciNjLtaNayG9r26tdWBJkPa1YgkzHngVYCnmzghpN",
  "key27": "3DXJ3JZDsSK4GyVRUs9Ewghc4bhhD6i8kmqQxNYj5SswE6jMekPwSdZSY24A6M4PjYic9GwC8s7sUw9yPcmGvDfi",
  "key28": "5k7tASBUThXnSxFXgWRG8wGsHd7qnTowiJeh8uUXT7SNdzrz3DhwysQawAg4Eq3uWStjstZv7HSQzBkx9xdqfbpb",
  "key29": "5sqMYVgnZ5YMMtYaU1SWJWPE6sL1BJ4vNxDS3JRaXCAS5Xd2iE44Yk63b7k2YvJHgTNRGYUSKxJtq1PFsQ4KRb5u",
  "key30": "9qG9bChp6NogDcxqP7XfdVcjtxhosQuVWzLnU8HCqQPkyuSP9DFxoXaexeoQudniHaiqYV1qi8RERoEEmtbkxVk",
  "key31": "3mcobC7DagDCpZHn4wmjSxxwkeFrFEEYEKEPfXXjtyb2XDtmmAJk189RRZyGPwJ2kLBxy8ZdyG9DxHErrBHN3LyM",
  "key32": "5YvCUvjaV7w8TmMqXs2nizghqyB8rzYk2gkYvqCkQXwS9Tp9Q758GAhcEF6Yb12MSU4G6F2FL8MVvnPRd5mJ1C86",
  "key33": "3fwpWUoYaj1U7wJrP9J7vAqKeCtj9x3EaPHHCejALmEpBdYXnuWvKN45bxf5ZKf1G6Hv3bamvge5jdxGSfr7bU7D",
  "key34": "SQsJKy7p4yZdVghf7ECqABnRT3LRpYx17YGAB3tjUEhf32fjDBPtnNZvxEehmrQneD97WB8JA4sKCahG9KzMtwZ",
  "key35": "2nebRKaSeuBKnCghmaibG3BXLKooP6tU8yPQfAcH542X5F6LBCu2D3huTkT5bJNFT9VvqsFuoyhFJ4cf2VEb5dfa",
  "key36": "pzJmJNqSxLcyxKrsAag1mz6x8jJzgkAuqsQKDdzT9SgtXmEpLiY3TdY6oKDpwUw8DmXq5c5XLeBHxJUkgzHGzm8",
  "key37": "4EKYUs7BtMkeBCULhA45rE5Dp7MpkUuBgUPm2GfmDtVYX3sZyUhsuXctZDqtci8Pbm4mFZx5DpmPPyrRHDPkqS87",
  "key38": "5Bre2jnidBTeb1xkgG6ASQjxQxYK3eawEL2c2o2GJiV8G2K8euFxUUhePhcsxCsVF8fgJcp1kWunYLBJRtbgDu6v"
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
