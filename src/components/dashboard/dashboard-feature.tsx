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
    "5f36VsJs4D3NmGhr3nFNoVByzfbGuNeragxKSPoPrGhvkSnXvLLThCGCTJh2V4krKVYPE4bTKJwFvXDfoFp7D1Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcpQYrkFpWFm9YZ7oGyjUzxs4xtWp4DWQnw1mWExPpFQRhXozgTo4w3GYa3eN6xrJjuWSaZjkrxvLitS8NB5Ayr",
  "key1": "3PkAr61EQqqqebGwR5GJCnmXsY385Ztv4Va4HZNkbCpQQK7d1bpf7tPT5AD4jz9U122qGdLb9y1rUA3p7gwzJWmz",
  "key2": "65iQ1frNTLB93chCxDzSiH1wvWgLHU8rVoWcDaaPVLEyxyuU5qYmySTYZu9wuH3PaAdfNwEW3D4awGe9Grh73pgd",
  "key3": "43zNba4WSeApbpQmXRvjKDsn5YUdk4CkZ5MngPtajW12Krxgz6q8HTHdS686ZkdqNJ4NCRVh7Lg454UirZ9zpfDo",
  "key4": "5vjEjeUMyHFbwAuQJFSqseiwrzQoMsyCRRqsCxBRrq5FX95YckXVDbHegwoQJUEsEEjLHPWviqdd8G7inHvXBmhc",
  "key5": "52WexDvAq2S18rXmv7V5qzZu1n3jBv9QKshNJvqiqHvQBK1d4gtqXjtaeqZVNNuw1fBAkNDKsSake2MfYTtXXgwa",
  "key6": "4ho5cksJAJpYq7BnRmB6Dm3oV2gTMF9hqTfqwMQr11x1kuiiqgS2fKFD76NnxDv8mJ8s4JN1xVUTMkK2WQvnVRq8",
  "key7": "4aaXjFS5MtgT4ThA5qCWgCwxS4pqzB8AdNAzvZmh3wGC1NehJF2rfqKv2E1gWmWTaC64Q5tpPEcc2AfyzMXcPyzD",
  "key8": "o3vDmRdL1H8cvjPXo4HdpMLebYLLJQNoJZXSUmm99VzMMwWP686ZU4NHrpjmhb7VSFwmduT7Ta7wY7Y47emfvD5",
  "key9": "32yjhDufqpagRE3PKH6WJFc37Z9zRWJSohWBpi6yUA4masVuB2nBmHt432Yr86YknRFXmHAUyem8aAeMth2YzKFE",
  "key10": "5zCm7m6ybXVPUkkTxV6LwfdoPTY59z5GC78ux8GDpbhV27kYy9hQVBMGUVxZksry8BThz3dAT4VAhXKx42Dgpiy1",
  "key11": "2VBahhhHMcSrXDoLSwPVjLJjrvU4uxXqVJhDqLfKqcSh4bjo6AR3n1vZunotm8RKZNd6daqpJpzZE1cuB86sLtiE",
  "key12": "3ezpPT2RpjpmNQFqnrgyMAsA53StBVgHb5cLrW1efNzrpxbFJwgSptYg7f9wcQqoHoHP22xLLSDrQiuNWsaXxkBJ",
  "key13": "3qN28s4gNKjqN2Vn5V5mCKp19pefWtwYVfuwcG2VPREs18SAAQmiBSnUnhwpi2x8AV7TaTCKgVeCzosJCnK5b8GT",
  "key14": "KoZQF2qjYnjDXT7W1SJqc7wL3GHRdjgRKdaUqsM93k4R6qnTjNRPkqtsHVvQuExsHP5wrpfG4r1a7qUjH2YLekn",
  "key15": "5gkmTLFfbdR7QxHKJ5G6Ahs9uPDEmzZdr2kYYf6diJsSegfxBcWMsVAxfRjNFgDLdTDjCQmnVv4qY7NTh8pcPHkw",
  "key16": "5DbxxYgLtVJj4HSPFpd3qjTMEZaF7kzWmBHcfbvug3UvRfptXkNHKDqLUfHffSDKKrdaCx26WyJJmdRgP2vkqQY9",
  "key17": "3thnAobfpvk7JmESdzA8K4V3Qp6rybrNjytjKMnTXdaCbNfwGKMZtUQu17TLSNeoCMZAR9qvBxYdJVScFFzHzz6x",
  "key18": "5KuNvLvhi8rK8bFSsDNssbzBeJRJvEyhKtovAJys5cE2yyYEHqoZHNW7jYgQ5W4CszytLW3JN8kLi82EhByAuEsp",
  "key19": "5qNBeXqYnu2i2SKz5a9XbYVgq2QZLJ9bPZMSj886Dzi5kto9zSaj2Y111CEyznCBfCdj7FFY8CZo4RtEZzbqNCoE",
  "key20": "5aVJxge6d7raGA86c2k3hZGg6q2xGodwD8r7d1qTKAoSTH1VKnU1VShfiXw3BzhQ1BGczznQ34pzUkQAQiPUzP9d",
  "key21": "c9kjQ6vdgntdFJ4UQ5N92rDCXsg5ChjfEToSrbQa5F9BXBGN56Ro7VTqXMNbztosQcRb94FFyDjpWhUDUmpNs6g",
  "key22": "2hekbbtPaBZajjwK9EoeJMPnewk4Ev2tGUMGwA5VJHw4X6zKzcRU1gX1uCxZHAZnAF2ec5hev49nE47jggXVrDCn",
  "key23": "WViLSY8n3MpgpFc3vD1rRK9vS1YAiZGn1DLFjQL8wkELBey52YWPq37b783RXuQ6RCmqoNmDnC1W26ZHM8xjX4V",
  "key24": "5WEtsiSuLxXq2u6mCSXq4fh1teX6M37VAREiUwnnDsCxZKn6dtBgBq8uCX5BV9ydUoG1UdYU6JB8sXe2kvrHwqJi",
  "key25": "QLGAFDQDwDcydtXBRyZqfprrMRJ2Fspcv9yCYXdJnGuUzCVgFHqHTZY9VUVLrkuXQsxheB9BpCKHuGvmCbWjU8h",
  "key26": "5UAbp4fTVooLV7Lr3azmdhBYPNb8t9uMTosRYu9X5sAfhm23R7H5ma1KK16bXj1LTkPsaRbBebhepRr855R5wuGt",
  "key27": "4SVJDxQ6RwcVwZf3ECPkhmhiYprjrxciVRsJUgiJymXaUw4jDQNZGFa2AuCSGuSLFrjc8eoSB8QRZGnWxHbJPPKX",
  "key28": "3342q6R7YcrfNKmBHmjfzWGUnH8wQbVHgG6Php5mCM93kG5LrPKzUA3ssnHgoiyqisKh8PygXo2G65X1Yv23pwLn",
  "key29": "5hMdtj88Wwp5WyVTM2jqJFmomJLtE3GSLXYGd1pK2TpBZtmbh61a8u7hjZpyXgP3kxM3WZF7WFiLcvoAUi1AcmqY",
  "key30": "47Z5jjbyrHLxQNoZzBtZ2UruC7q6p64TLS7ZF6PvFpRrpNvKLAu22WheefUMhH5hXagwpkx83UUpcU43e9X1c5g4",
  "key31": "2KuVxafaxavZDDnvuGntDTNViSrHqQdBrsmyCYxF1TZmciUDREcAZZb5i22g5C8G4QAmLsL23AWoKEehZ7bkydka",
  "key32": "2rhipsxh8QXKhbDEjNf1ET4jL5pMRwGtYZ643ifXmk8dKdwB9VMg8x9z3MFzmNNwiBMnd5Z11nLX8U7ugMzfAJA8",
  "key33": "5qNBaYpYZNZZZh1KJiNg5c7ShDxiS8gxNruTCnLBGAZN8CYqVYFbD53jzNWZPY6KR8Y6kNp7Ny9nn15vEp9zh59s",
  "key34": "5aWF6uuiRo76qEo8yCwKU7LkaL2EyPwmzVWpnp7Jr8QDsf5oa1nxVi86kQCmZ1kefy5pwDwopv9aUb1kFVZdVRZr",
  "key35": "2tW9cLz7mKbirVG1Cb8kbmrWFPx2ZHDqkXdV9JBai1s2XgKbUdeB1Q5uruTRhSxSaLFt1VzkrBj353CBW5mzKeDb",
  "key36": "4p2o5SkBP2hHrB2uZUgddFxhdDKUoYzDPCMEJZXJNSMtGPC8AbnbKNUfp9eMe6KU7UXkeWrN8XUc6qPdfMEWCQd2",
  "key37": "4sEWZqRcrf4jDZfAq6cCtxHJvMhLt9XVHQEqeUdNJMcLumeTeqxNfKPude24f6syayfqYKujeqBTogXaLoHq6hPM",
  "key38": "4318SJC1oTc9XRJr6aJESKQQVJQCxZfwJd4CxDRSa4jb3UXQQi2g4s1vhxpLjE9mt9MkrAQCLyP6uwgsyaTuuGz5",
  "key39": "4NjkPjuRrDW82GCk4sjTuUrGfs8eULKTv3XNqsYpsuzqvkkzbXfAWz5jui6tCSBt2FnVAsZ6fEJBJYeWi8jXi3Yy",
  "key40": "EWo8spA66SgWWc7YKid3wSYUHJqYecT7QGcmTg6ZCoMAzm7voSoe5q7XujWTLHPAz81UZV9Gi7V95gGYexxNuAX",
  "key41": "4CDDEeHYVNpPGCLr2tdyAp5fvAMBw4ZRZHAxUmUFaKWZ9N1ADtNgZeHCtkmbdKY8v31AKzmfYhpxPSrDY5HMkZd6"
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
