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
    "4kcH1fQ1ZBBaGEUNsxNrgEP7bWzJDZ3SrhgMkHivz6crQjCK9ugjiWoN6vbTwRd7UTNKgUwbw2ni21464bXzJm2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dV9b5RrhP3rpoJ3ntzW4ZSLUtfE9AzynKDRQ4HDrYEnq5ri5oh1skc6Jk7DKzGy5inkfcZw3ByGXHjidGevZX1V",
  "key1": "4VYX3nmjS47eGxwJGRUz3dhCQ2cukHdacw2hJyf8AXAU7mY7p7R96tSVdEBgmztVPsvzXM6RZzX9t1zkNUNdAyVK",
  "key2": "3VKqNY5ejLTdpXkPvkNdCGXCZQU5D9waJAhiQ2aRDFVTeG9wdqNQSRnKxxuF6XaNQroRhuWzCH2hdT578v43Xskw",
  "key3": "2taWrj87HFVNQWKVDEsEtuAGcxbfWBJNctcrrKubd188mbqYUFq594f6G9RCDTQYf5FRAUSFtLtMGd7kigbyF63H",
  "key4": "2BsMJ4uQhUVaTkwwJDGLURaHYAP3RrRdhEAehQx5vE8y3tktemjc133EDQuUjrANhPaJnG2Wfj8FS6EsQZ6SPW6S",
  "key5": "5kaUmmpn9gBjtcJwxSUpUatojNphqege9XkNqXXYWUfcZ9H7GttYub5drSGpyWGSh1xLPdEi5UAqhkNdkGH1qp5S",
  "key6": "5RaSnDVpbTdfgCVab1iwgXcFthiis91g4zfAm3ZmngxayMRRhrD78JKGY9nx3m2pQNupy1xog1ho9J2sJeL1M9Eq",
  "key7": "29KcN9vjwbxE3HgjSFJhHxez2qpSFxJFnUxYuJkYDHz3h3cjbQtbH55sQWZ53UJsmakfTnztnvMDNXqtXat7yduA",
  "key8": "3kfCgnd4R5H4yRfZBCqQ6xfbtgyqwY6xntJ21LvxwegMEAJmwr7RKS8AiNpoQatTgk13MEisxEk6g3dwCreLokpk",
  "key9": "NDQvqipFLUgLata8oHBPC5Xen7BZCk57LJsvYAZETUSs84n1GWPH9mJCvXGButhsaZ4K55ocoYfevKVdWLofzTM",
  "key10": "4yRquaSg21Kt21bZSQFka6JbrShU6RHf6L2Mn4v6vipizXAtsUesKSbjXHBbTVQe2QePjDSHLPCtDZ2BDPd5JXFB",
  "key11": "5h6T2nHcSzFqwFe6Uazv1MKidinXPTgf3qpuksSdzoLMAJBoZiNysQmcNFdAcTLAaE6BP81MXUi4rPaUXGdazr6c",
  "key12": "5tybJDPzWucDKsNvJVgqZ2w2duhnem9hmVyThgtzvpa42UuLpEce9UX5Z7Ub4Vwvy8oH7MD3q7TAa8Rt2fBeXJqh",
  "key13": "5nVnmcRor3D2tk1MEpskyFaF6JNzPmUzTuR9NcWa6cw2Hcxuv1gPJR6uhBsiJRzXymWPyE6YSfEiY2b3BJps44BX",
  "key14": "4MP52rfncuK4FF1kpqBwquGqneXK3q696goKyaeqRxhJnCeEL6F7waUZHHbuRGeDftgDZr1uLgskKujdgJwF4MS5",
  "key15": "2MuoZAM6pgsy6CgCY4816kb55S2wy7i3W8HRx2BCTkUgk2QjYsHP96rbb7Arufyt3v97wnbh6g9RGVA9z74MLhHK",
  "key16": "64xaTumnTpVcVmnvdqRTiH93ybnn84ut8g48wawdYXrBhtwxxLUFiErw168Bx5R6wfhFSn6FH2qp7xj8ysPx2Tfq",
  "key17": "3fH7UG8Po9A7edftvS5Z7HiomQGsA9k8i2kyRTBPJECNkMTkDhR5AjFtebkqwijJNehHNpBmzrw8cELFAPtw191F",
  "key18": "B1WbmqFATxPxqGKq6pnfF8hQeCPgAgBB4J2qSpUbo9KSspRTbam1GHmDWp6zJpFJEeCAyeMNj1p24zWUQNyrQg1",
  "key19": "2SScyvDyuzc1zMzt9mqobPCiHVVvdXaMiskr7xLyYFQyDJMYcaynR7a7xG5zFV1LNwzxi9tuU2WfhAinQN9HAX8X",
  "key20": "m2bN9edE6tYiKHo7CyPNhk9bN12HxGT7EfgkGniZ9faCdFgThCDoR5NoCFE2xTJZdEUUmcjM7LbRpp5eUYu9ba1",
  "key21": "4nY9agJQnGd5xrqmGHwvQfHjC6jkATxPJjDCc5oAiu2ph2WcoGh1VDDGdF9YCRdtLSqdcWxT3HR1QhYyxSTDzfNK",
  "key22": "54pPkgcVkMUGTfYzz7jEmU7JCHsxjsa93ZQd5hP9R5u3sKZQEVTmnkqwyAoRNRtCHrAdaSQLxf8gCePNY7vvG3YX",
  "key23": "4quGmB4JkMiu7YMGwcqdBAtxLmcWYuFSTNvJAmaiPhrbvytECoRY1nCuVoTB4R7JjC2tLJcDoZNosWbCPow3M6Qy",
  "key24": "3RyZjh7SswFnZLzvZZr4pus3TcNrspcgnoxygF89jaYE1QLaUQodKUz9sf7RC1B9WF6E9bjapTVUboc3KBxAQUWe",
  "key25": "3Wic7P8gfDc4r28V5XcmvpjDFwabJ3t3yRtKwJFYWP5gYhEMBGe7hc6qNE3Rvz3WY9A3r8UXyjDpYESswSbEo1Zw",
  "key26": "MmmZRxrLQy57ehB9NpGEPk4eh2X1WCzQgaFiZE3viYgaJiX4NYPcvdXhTP5QTTeDThMbe7cyghHsDb4C8hnHbCf",
  "key27": "5qe51tUn9fzSSZzTZi94iq277TL9JidGLSbf4pTTPjeHTDre4h5JoW1nrh9kdHZy4ieGQdCdxoMAxYZea5Q84UWq",
  "key28": "5fPzzgLbvXm4qexiZREmb9KetWvYgDrEoNXaiC1DBcMSPTrh8DfBoSse8UJqGWRPABD8xaqUqUYxKX5XYcS5FLgA",
  "key29": "3unWTNYmKg9LjGzE39uKiYCb48F548eLSy1wgJHV7dMWUZsKAWw3hmHSrmiZ74fdMKP9sK9UiZD4GiqAXCUzgkow",
  "key30": "GUYcW7jh8hp7Nm7bQssm5mo8yjnoWsPu47UFeb1sC5qxGvNzeTmckpMDioX8tRCegW9MnMkP4P4UNC6DzowtCq6",
  "key31": "5N7XU2htwAxX3RrcudLmbjj94RPqUZqAb3M9i1ZApF7FAo9n1Xcpd7XtVHhtTX5AxKwaki5FDYeEekyE44bg1Q1Q",
  "key32": "62b2zDG43VgcamnRahwtZNawZybXaVjA7LATvkmbiFoPZY37tVaucWz8Ld62TXfw7yeeVvg7WgFUKo9GykK3PYFX",
  "key33": "52sAvC6A1yGy1nSca1Bg6B3DiXvH7uAMawzmLFJFeL88aR41pCykCSKP4ZXcU7UpxapXBvbQRGSwv2RTP8odEJCt",
  "key34": "2FpBbw8SBRoYFXMXpWTYxFN28RAxueNmHcB6s5Fm8ck4fKsPVMtpZKwct7aP7S8r4sVuM511MZ9TVjab88BqYd8V",
  "key35": "icUERaiyEyS1A4PSHacjHRXcG3KAcQ1ojQshdgxbR8XWgRo3yyYw8HhLsic8xFCWsgWKFVHZLbztNR58tYcXpBQ",
  "key36": "D8sdiazCARTf6uu5t7HGiqboJYSoZYr9kaCdBQqoJfpJEJ43rhAZeNyY6TkUvYrja7cKFW6RaYfTDzoWye7JnwA",
  "key37": "4cptAoUfeVmh32yEfz3SrGa1FgGbjYZWu6FMcdazttRvwfQsgg8sSPttimH6f8dLDhuVmkSdBFpiJC8LFGYK29A9",
  "key38": "37VMLQTdwD1wRjqGhwMgHSsBT2Z6rdC3n6JwmfRjTZ9KJ8RqvEkzTfE5EoeAEjCpYVPtbYTLSzw23XhmVsRc5djV",
  "key39": "42Yq5DDNHwMiSmCuMsqqMfbkeTXu2y85n1R81X9cSN5KNhYRUHUJk3SERP9r2XBm5KYwEJMQk3RR2qkHBNg9u8Lo"
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
