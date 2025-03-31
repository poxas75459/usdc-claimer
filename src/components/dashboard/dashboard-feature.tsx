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
    "mAwtwK8xpSZGtLXgcgYCLtbfKPgqbF3VyKXzcnGiPHY5R9NFNA4Vhwp3nEKz2wcFau9WhBPxNrRppMdP68mPqR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HayU8jnCKbYw4ciqQiMEKmeipRxVyFfZ6qiLgNGh6YzNc8MXY3j49i99oD6NnwBpvRxUTZdqwFR7KLP2jXNRt9u",
  "key1": "38VYV7df3RHDB2bQJCjfCgBBzvTbSj7jm1xx9u1JNLk44YwJ969Mcga1okBPQENQMtsxT22iLfMuBabZjd751Aox",
  "key2": "5uCVRn8mevHWMkYJ2DVmjEf5KtyA1iFBDDzkkNbVoRAmQYwRJ49j3MytA3b49azGdjwUExXyTnyStbav7SzTSXF9",
  "key3": "2YDXpemkF3zd7A2rfUzAtP8bmHzEL9KpN4KfUkaRTtCrHUbh7KAP9Sxd2tiRkKkHXmWvd4kYXob4Gi18gREjzpZn",
  "key4": "aG4DXzoaHtMgT1qgPpXTkjjZayzodMrSwPsCFAomGHwJ7NGUqWxetz5quEAGSUHpKZ2AiBAoTqEsq11YzgSbZFk",
  "key5": "Q1aen3uTckN5svLT4neHvYxStgxEKHnzy1Btr5b16g4sVkAUmxpDzF2JwBmm6eFa3Z1nt5nG61ntMaoL6yxLoqq",
  "key6": "2g7BQtEr8HRuwose2S21QKFNK8EVT3Y8aMUXQntnQJ88dcfHjRMy1AVxst3DsBpgkfwS2XQCWgNoNT5T8abYJupS",
  "key7": "z8EadXfRfKAWZp7NkqY93baX8BtVjNv4krwe7QiT3McxWvCwVrzCB36vpUAGr1BuYNSDvKJn6sJyY9i4Bgrr53i",
  "key8": "NfCLQzSQwbYvpqsKu9N7RewR5M1K4WWwYC2wpXmfRofrB6siojVuE4KQEqYJpAtB4YgYShPMgScxCU4Sd92umgW",
  "key9": "5yEgr24f36ff4zhyhss1seGJkwa4zuxJim9B8eAUp9B3Dv47vZ5rExiNcYUGWRED4upcXjH3cM8eBwhKH9fWExyz",
  "key10": "2SHfQW326GtWW2kb6ePe2wteXYdXQ74Z5tDzarUvqETnz5mua6ePd2k4ZxDQHtaMVbptGaP1xruoPf8nkM6P3Npp",
  "key11": "TP7ijTJRznxVeVtktNQvskT9WqugsyD1tDH51W85uSmR7uhKfK9vC3KWLNwbGGHT44EAHCJ339gwD8yFHwREmWi",
  "key12": "5fSJaoaERf8pL1iee5TNSgZ2quATyRhYEfYXYDojoBwiryRKuwfQ6ASLLuF9xSofGRyrrxc2NpzywNNoV8a1qvjt",
  "key13": "3FVbrxytWbUbeiUHwH79KANy7c7mM1frBEiqDx1ks2aztoMjQANPBA24b7HgtHox9Lfs3gXjeTbCdDcNYpKXjQsQ",
  "key14": "5vVVC5JS6Vzmy9kbLAPTd48bonWPy9mFBkpyFnBSmyGBifWuqRkD5zcgFWg5FJLk7rvGy7RNVEvD9VfkmL8GxLQM",
  "key15": "3SLV2Lgz1xqDXnesqcbMGUxCoeBmNed8NWNo4PxPqTo8493UQmzRNqFag9iybyWCn6nGHN1hQh27BK2g2EHatbqn",
  "key16": "53hammoWebqwEc9aNJ9MsQiagGAeQbTUD7t8hcFYvDPHLiBuxaxfwWpNx2DaniDneL66Eo8tCAMkDfDLJvaNCvx4",
  "key17": "XzBKaXUWiDJb1dPYvTfqf7YcqBHqqKLhP8Fj9ivmDiqsRHcSyTC46idaaYdSwBgcxQdGnJtTC9g4xW729rb1yPT",
  "key18": "2pToRg4yfjJ5MrEF3gTeR2by1TFeErLR5NHtdh69nksQfGg2ybaN66mtaUXmgZvia7BeD13tUfDCRRM9GJZvLn2h",
  "key19": "3RwYDJL1CKqaagASLLptCGE2Aa5dN7K68LmnR1FNmVTzYffh2bneFvHpW9tBd5D9NEgvyTmZbgvo9aQukxV896yQ",
  "key20": "2o4wuzu284dsvrHJ95aA8EfVm28D2hqb6ZuG6UzQTwXBS6z9dSAwm3wXni95hzt48iMEFpGMt1mfJ9gsRyqX1HiZ",
  "key21": "4LicV44GJCxFL42VcC2E22636fXXedLj1QPssWsYydzqZMDsaUmWGgYDPFBy13cejJcqcqshKWGvyvab1e4zeLzT",
  "key22": "5Q8tHWyVyjo9eJ888fxPuA5grFDsujrJrGpqTYMN89ZeFN5WcMZNQTV24U65ZBqGqGbfCc4EMyNGDqT6rGrrAM1M",
  "key23": "342D8xnFMbbYFonuVmC5L9w4oqF47ziymJ5yPD9W2HiJMgxDxH4yHUAyzmJ88SNPeEgx93aTUvK8QVkvh6uGABdq",
  "key24": "2ZBbeKUH22b6gLeqhmHpLzpK8tzfPwtRNSKaX6PKwbNWAHeQEvBT4HccxjdWAJh8U1DUafMHCZHejc3aEab2Wcpk",
  "key25": "4z9iYqhJavVwxgjV6o6EnfhizcQNsgrbYc1P2FWdCSN7mx7oFaE7fTccfR2Xedzm92mSjEPE5QfBq5hWTSeVjzwm",
  "key26": "5U7f1SygrEeWaYG5rPtyDoizyLXqp7Cup5jfbRhWqS68tTqEBAeHpShdkpgdQT8WJu4ZzmH11tZFxSLNKegVhyjq",
  "key27": "5j6NxGnazQKfZRDWJGnUEm3kqYRfa3VANZr6jzJEpnAKm2gAuo1dHBikxKe5GNsb9y1v36r524b29BwiDAGt1Bux",
  "key28": "5cARfGjEvW4yMy5UmGpAnEsyK3XzidKWX3EusEZyJHutLJqD2Qyv5KsxQVoyN8RhfhiWKtiTkVMY94fQqvdwiRYu",
  "key29": "CddbCZAemu47L1Cx1yyBztbqNrChghyZLqTrGnyTm2p4rwZAoQYZpVX5GhateXbr8SvbFZJj3ex1fMEzwMkv3r9",
  "key30": "F96XiphDA3ArcYVWJjWn6SJ2ThigijFCdEgrrKnMiyAMy9UNKye1hoTsPWvJaHxzVL87aZttzA1Ndf9vMvBxqdR",
  "key31": "LYjsKPEMoS7YRkZMci6RWyRoUPztfKswdoJ54kPMK4LmMESHA9hW3BfRixFX58W4tCJWyxZAgcy1T2dJLoqbR3Q",
  "key32": "3JmqzX4ADqtJwzBkYFJ9gWaTWm9moL9RAbxH1qQLUFrMtuoumwKUbmiT19HYFSbQLWEcKiTSDgwzsUz6eE3oGUST",
  "key33": "5qHeB9Djjd6oT7kJHCQsDtCdm4g1ffGZ4G7sXTCUiQhqQrj8x8CjFFPpxn3KideMRij4FbeWAeYFp4C1jRrmFaR1",
  "key34": "5bhoJdm6NrQVbum7ZdSzYQEqmwiq3Ui9K2MF7KDLP7hrcHAoU1gaYbNG6dHrDFLqux5FvwbaT1FMrEWrffCTUp7v",
  "key35": "3RMATn6C13RkgTz2N1RxZb3hNsMGRCvjR98jMi3tFgtjiCuH9YUcTy5f4X5S4fCGYXQTJ96JE92qej2rb715AUR5",
  "key36": "5W7e4y1K7ars29naZQxRQCzMVt5f6JTuGQxxz9FSUnMs5sCbEcsrbprVbXYyW8HpLT9wMXKrT2sPhw8MraXCT1MG",
  "key37": "UxC7HL7wuQ7Rk8bN5hcTVUbsb8po9hrgGmKVhLLwhkHEkdsvZgf1L34L9BZeqVQoGfffP6QJjmvRvwqeqAXN2vB",
  "key38": "4cmu753rDMTpofZSyC5DZHMYnHvS8REJ5FGEcMDHerkNskbdN1hKkQU8fJLCz7f4D5Ki7mx58MwpZp9QXzY2EbTH",
  "key39": "3Nk1Kwzu2YNpg6AZBU63SGxtzwPYbArHsxhijgGbE9oYfCPmQaE7UJVZhMzmPAK7qH9FvKHBEZerQskvMzFD9rRh",
  "key40": "5mhYMtRMxcuZZ1PSsVcJRXAjfqQiXWTJavFUy591Q4J1TYHS5CeXUMtDqeQhfjhahoQSCYyfNEGCJ9yKvReyDZH8"
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
