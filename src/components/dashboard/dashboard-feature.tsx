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
    "27bEgMHmifsnioGGP3zZDx2FoRZbe4ZsF9Bw9o7Avyw6Zd8fP34cNu8JjGWN3uwaBXh1dKAcmDKmqv93g8HYmfpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458GQjSEyuFntGsGhMgU65JaJcyYnouRvZucFifRw9sqSMa7GYtisiyzjBEeKjdwEAbkp8qxDqaAi172KJcocVg9",
  "key1": "5qpbw1sssDExQACfy5bpmfJqKb29HZormRtKkET9nwDBpwohKxZ6fW7s15hztgFVUxwfwpM9EkDJNe7ghNyTgjgd",
  "key2": "25AUq9ipNvwcDDjDmn6wps9usRc9AdhRdFeJxP521w5hRFLAoE32CcLsqSoCMj48DBH2gYA5pgTJQjY6F4dj87Sx",
  "key3": "5eHFSVpKaVCb9fMU9hRm5DAJvedMqqk4NLqPcAe1d55m6FnSC29NfL3Ac45bGiewaethJy1PCkQzUsPtn1FogxU6",
  "key4": "usWHG14P6KY85UL2eSyMbEF1TiACtmwemJhGAQsrmcWUmpQGmLBJgWzfyqMTAeLft1kS9tZuDorEiDBrPX4Wtht",
  "key5": "TsdYpRjbPn8Lo1VMyyGLXdzzTnuYFgCEdo78wpZL3LJgX25ZPrc9XWe86Vc6ADE29xQS2qEnJvzxLR4UgE4Y2sY",
  "key6": "u2P7xbKDt1jV2mvg4j3P7QoS58iXUgbEoiS4en4kLb8uHQsNuX5xUQda2uAtGWAvnKo9z4nda2YMVcWpDQSPjCp",
  "key7": "F4JArFfE5P3p5fCoXRfTAxtyZWXNmYdxvLNxNLMD8X6FATvni7bCaKZ8gbBK8iyev5oiitwZY3T2H1upF1EH6Zo",
  "key8": "3YwnDrZJGGPHnhEi3HoEMTLUryGDVYLw8cH9U6ZHrh5PSzpwsZabXY6RDTTgVJn4ZHqpVrTpjEkz1NJx3QeTJfcd",
  "key9": "2b1h5qDkHMYQRxHnEp44MtwDzn4uNQFLpGTfLm94XFL8i7a3JF136ndcsZ9fYAqtFPfrZgusi5pR5j4KvhTcpxxQ",
  "key10": "yoUJMMTjPV2yotbsYcQoaVwGXZDSHXUoUKqe4PBjv6pK3rojT2V2vtZ2vTykQnxMt8KaAT86sQJDwegciworouN",
  "key11": "5Gd34vctmEXvGC9PexV76FcMBvUpvwciCQCdjwTKVwumsaUtqfACWj3U7ZowCREhAMsYdJWu9ziyX35tqdXdwEdn",
  "key12": "G5TYG1ECbFqdT1mi8dQkuA5M1CcUot4FvCHLHNMMeNw9BGjc8Wui4HA2rD55dZjsLHuePcjzKDhQPk7U7iZQvH4",
  "key13": "4csE8K48qh6hGLKSZ1LjjRuMbovRLBXL7MgPgBN4E8dXiXBWXw1B4Hv9WA4XGmAYWQ3PDaMyAaMRHe67MVgnJsP1",
  "key14": "33TksMoiV99xj5UNyCDPizDq9X3Ua3hSUrkfhcGzYWUgUb83RsFoZaLbNvHTHb8uUWGg7i1T3s3uio224FaaiazT",
  "key15": "CDSQJvChJFtmwW1985F7TokKszZ1AXcoyE7LQAG4UesHRgtUNu2haZcddSqeyXwn7tGJBGrpJhxxiVTBvpQqYDv",
  "key16": "p38UaAm6T1BD9BGpqdbFDD3U1PfNBJovYaCMoPCyYAcc71jDbM5cnfNhQ4pwSB35afNaYpy4YybqwXEVMpU9Pgy",
  "key17": "2MmYZhZeS3bdNuqg96sEM4hmBjAeZ6Y3KWV6dNjhwyAazurmiPDcuLK8hAiHnr2LcgmWzrmrwLSnUdDP34HZ8k6K",
  "key18": "27V6AkRG2q4q8oTa5QJtXp1PxJnpGRWVnbuqPob1LHijKc6g9MiAR5bfrGpXmTpmucuqVm3G8ADGi4qQ1V6uwihi",
  "key19": "u4dM3sJT9Bn47WZZSqwv5PtrFFgPJeSqjbTZ4MmbE7y6K5Maso9g8Re7ZgrzxeZUTvsnNbcS49GAhdaHgkSyqq4",
  "key20": "3su3Pnoy1nfrXXK6fYrv2oe7TEGXzDqypmxkz3iwEprWZYXfwfa8makbsQvjh7G42w55zBVBJp4dY95ApJEdmSVp",
  "key21": "66drRdYjKdhRTViGwxZwZzbAfW8XotxSjwGRZsporJCcAKhu7wKMxvD8aK7HahwEzaSJnyYZhUShAUQzjKEwDdzq",
  "key22": "3Nx76SBPFX3YqHyDxVmrvzWddgP2Ky7xXoRkAxJfSzTA5Z7C2kjrEvjekDbiKij92w4kxvrSDdK1imZvvpoapXpJ",
  "key23": "3erPDY9LkYYTFiZKf7LrpisaTVFGMnPgSsYkFW3q9JREtKkb2ZqZsrEqTfikK9hPyrCovNRwkkh7GX5j1wDUDCE2",
  "key24": "5k4qFdQWGjgG6ExGykGxNz9pfycPSMdZmqQh8yt118qXych29LAXnYfa5z7R6Z85s2bT3JH41WHAQcqxveppgpRE",
  "key25": "3vjPP85v5atPSqvyKzHHf2ds8UiS7RqJBaaiqL7wb19PF5JexJHcUpfkoKpMw9MPDa1X15Tk29qUjFefHPVD6SwF",
  "key26": "461sdbmJTuRzkXsj4i9BkWhosM3FTek1Qc8s73g9MeybxTYzUXpXSpVBbD3uZtdFgDZjp6wFdA32Sd4panM1Ukp9",
  "key27": "3HAqPUDQtZzFDUqkMFMXZy3wVMHEW8pBhySCEZgoG7moNuFYTa5DJWy1DnzGubu5BhnrVZHdYZ3fJn1pEZP5ThGs",
  "key28": "5ouCuqVoFprJfvUrqgfK6vcYyedsYhnq4JS94Ap3Gz19RpPQKskwxjXHPkm7YRYJuyxNE4u82xE1Abe2ySLoBXye",
  "key29": "37WssBSDHszVN2PFDAwd8oq3VsBKsP71JrNjjT7sjJkPPhe7WdmNgck82qtHtBm8KrCpNd1UYtfryuxsmB4pttfs",
  "key30": "2rmm7FUDNLv34wK34BXKMoLxeyTemSuSXhdpXQyis1EyoG2cZX7WKVz2g7xRw61X6RHdkPA999CU4AEN4qyTqGCg",
  "key31": "2ojGKqdfg6mPGfKa1PWokDSQSRfV4bzFuN3TYMQsa82V2ZbB5ZL1aFZKYF67TKiCoWRZuqtstbsvFKw7dwzo8kDB",
  "key32": "3phcDUtqJwy63ERYYU8eSZH6Zee1HAHFZy59unMtjtPFnkMXRv6BhAAvsnQWRk5wFbU3UegPqJnvc8SEhDAzUrZY",
  "key33": "3kah4bXtYfV6hgBjeQBjeFv3qY9kQ7jCG5F2JHKcTzcDasu9nPtQ93MKBKboX4FMZSJPaa29oTXD6RmKCMHXfZWC"
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
