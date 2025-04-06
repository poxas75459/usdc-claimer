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
    "3FxpMtniAC6vXtxeatqZfuovKj1pdRaPjFjwwxAhHTxmyfrbJP668kkoZBb8RkFyhcagHhbrNn1SoTqfhXwic74K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XY94rt31pEVygtEdFgZNafRDAJ9WVHi4Q6ik9HcvLfJo6MnnoaZcz1qwHJxNa1VAbwBNXRYpFpQoijn6riazuFt",
  "key1": "3utcVaVw2yFhboekUkxM3C3AcAeM7m7aV1wKXhScozuJGnUiXWSNixF5pgJbrywrW59LKZNke7V5nyymwzJRmAcT",
  "key2": "545GyAkdAp5UZnmMcdg1JtsgubgcXYNqywJi7qjkjRuHrLGRnVh4iedN1Tj64QAkYQv9hnBv4iMRfja4CtVkmDK8",
  "key3": "4rEovBbgwCEWmuQi7FQU3Kwyqt7ENWHksZ3roRDk9zsRf6MdsWqCybDNXVuatX2uTN5sFVgHmFs97reFypiHQRa7",
  "key4": "3wTKmrrEPWyqiVh5pqQioHJwRorJ1RPk7G2mSqbex4LvxtceCkSdH6RFN7E4ePmGDGjDtquXMtorVtZs66KhTkb5",
  "key5": "3Pz3xawKidrrGNjQLB6U3fCrwpaF7MNGQ9F8fTyzHdvF9FKqMXGafQT1PZJ6momsATJyogLnKDb8R3FRR4qccXH6",
  "key6": "mWpykepHTxDkFQamAVgNQCDnVDUiwzuPabFou9ih6NqcbfoXYsRrCShooe1zN5MknrLPqSBgEwAXAr1ww3dbhiu",
  "key7": "9xBCkJS7Y2ASXr8S9fxqyuQktECE86prceGGjSp4kfPDVRnQ57NoiopxhqaG1tZeHJWv6pRpdHkxK3usNNQQjhT",
  "key8": "6TYF2QKas9gonNXzw5PrnqKy14VnEpRLuL55FjB7wE3pacx1jcpe3zvn4TdZmM1QatUG3Gafs3abuwzwNZFKDDx",
  "key9": "5kXXozZ9oLVxdhrvPQJ6GciTsJQTwZfvf2QLZcVKvwwGXGdPU2v6hZURHgEiB3UAofTEttFRDLxrzFrhBYuPk2B9",
  "key10": "4LzZU92nrMmxDbe5QHk1rse3og5z6iZftucsrvAw8WU7JeoV7CRdW8Nv1jMvKoz3LDvpqWQuiyuwfdfWA1LNprTi",
  "key11": "KCnPbsD4ejAbwfR49eHQBZbwGkcg3jGfWRAQ4yYjp9aiK5Zc4yXBzqLNH1jZfSdYTtitzWaWsQXDWWzY3iif3mm",
  "key12": "5uJTaAato3RFXZag2SzafA5MXbq5GYV3rSEZHiyDVtNQoufXDY8YDuXXNmhHSso3HsbVDAhtvtBWNV5d8x7WDedd",
  "key13": "3EpkjmkpKVvuNb6Y9GhoPprQbfeNomuMQuQh7q2yGZaJhFAcwbuXoEUh8rhNku5fCqP5ujnrKAeyz8DmvXNFC7VZ",
  "key14": "2NsuXgabZcStq7eUscDaaVzLh7udrQa91xX8CtX6XtRmRxekCCeU25ZFNzMxbPqxaUX6iZKgUxd4k6LR41BH1ZSo",
  "key15": "3fBgN4zvEWgs5LTT1Zmfa3HcsgNn32QCv3DYffKGKd5MpujcVZwrnGJDfvyKSBoUcp9HsqDYJT5uEMG48Gw8KzuA",
  "key16": "3GF1Xdy6mFWLfpb4HJd6GcaZ6E2ogrGwPiknUFtXfDWshRW8YbqmW4g86rxmmfLzEbtPySLmbRQgxfCTNMLbSzbL",
  "key17": "4UGmx4W2KhiCthc1yu9FkkzdSt6Hg23doJxhu2W2K2C6FoRz3ZC7tgyKSMGd7Hdz4MPY9LTnptjnxMEmjuFTAH4B",
  "key18": "5fduD12JSR9xBMfDw4HhY3ShnXVDndyHCDjazULJ9D1YMM7eK6yRujXoX7Jm6M3Rdv9uPDhNypZU8D5UvzMw7tf1",
  "key19": "4F3w9zAWVCzAkSE76MeoRAujfuBfaGrgFKH9abt7TjA34mr7xKv1J9tCp6YyViQDVafXA9zFzFfzuRnWxit53p6Z",
  "key20": "3MghyJLNePcy6FjQQKq2vN4aKiX9cLyVXEkz12c6rEM7FuaVpL1knnPPVdTWzt5297RJSC6GyRuwcRaLDAfuK1hX",
  "key21": "2AdSszHXTHnbhXrTZZnHJZoAA7YCtJfaHqNJUTPP35FZZPcQCrgQWbM7nHhF1CmVHknorGzD6voVYgAXHA5X16tQ",
  "key22": "4A64EA9w9R4tFC9iuLY2b5wDCtz7Bp1i9Z1gKuCjzThvf2a8vpgEm12gghiawSQs3XJW5JB2sVnuJ6KXhETJLv8A",
  "key23": "5S1HcHP217bYqTrgxkTop1kXxToK89D1138LuXxfhzVZFkA7VobJ2tDcrhKjLVKLPFuRvVQoGd7gkaQiWc54BiH5",
  "key24": "4tyEoimgSE7sZbtQ5vZgpbDE1kSJLZuvRWA6pEKKYVqX99SfQGWmP4az9Mnn4WUUffGknWzswBCEq4k5WHHnKE1o",
  "key25": "sa2191d37avkD1UfdwvwpBNTX9jyG7QGBgKN9y2AMm3u92eZaAuTbp7NnMPSbR9Bjnx5CM5TxZ1BNZEFQ2C91bk",
  "key26": "8SZxG99VXHe6AHY9WUFtrnY4ZETra2dNSe1bdyW2z3VYoGRKdfkxbDM6oeFrfM8de9NRC68Vr197dDLM3q6dn7G",
  "key27": "3MPrjMLMrFFjqDowaMzyvnFH9h4L25Xm1DCRXawY26cS8trjzgVrQc3Nu672EoqVv9KwpFTgmANVSNRchoia65Yc",
  "key28": "2sCvVzdphLzJvBvMFFtrmoRbxBTCQwFTdKrcBy6HY1KkMtRQ7z56JWiVHaRZ9vrinccZSmKnLkGuimdA3WkpaKo9",
  "key29": "4ZTkSFvDDUD4G44DmUayXLFq3pGbRkwygMxqXMuZuqSLbucd7Jxb7bo9n7s3VhbHVFy7djzCUur4brZiq8EUogwc",
  "key30": "4U1ynjNxeFMYV1Pyai4e1ofNHcyEF9NnxdDjryEyPtHbuw7uDCDC3XE91mkBBgQeejXRU9dTkq8hAAuGvVQSS4CP",
  "key31": "fRj3PMUwwVeeopLsuyuLnShwYFAmydH7EjeX39mwcojMYoU9wpdehBsxdLbwP8vN9FDBNM1sA62fvnbbkS92HP3"
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
