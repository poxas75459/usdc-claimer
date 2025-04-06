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
    "PtqM1Jyg1a5XG1GGTwbMbnJw5sJHXH8FdM7QRVZfQveVZukFL69687Vyz9vFZK5m6JW1NCKrAqyAJsUMR14uhPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w7DWoa3sBc29BnuiGWD88jMmwYiVNSvjmyXs4A13GLRpFZHbACbgYmtji2hbmX2ygRzJnT5feyjvUDSmAmL9nz",
  "key1": "4z7RMZgbwLvkEGrGHBGTWwAtPLVqWX38tgiT4sDrh38DyExy58DuFaDMRBfP3xQ6LdQpBpTPhNSytSQbqTPMW7TH",
  "key2": "iDAvA1FvaPUGVbHWgQEYzdnJm7RfCaNEkBQs8K15GsApjvmKt4e4zX7RLsxL32vzat2LgjdCHtnHX2rKPfuyBbH",
  "key3": "2txZsVRvtPjWMkLWP9PNSoJiWFeusfMVegNRHwkgx59gqKhBMXE1AB9bTm43kPFv1WM3Buid63Jc4DJPwhNEL2CU",
  "key4": "5rZiH21uUq88A6HRSduN3u8iMW1CLUrNKLzxf4Rqu2Hk1PtzyGFxWRJpPxmMDMdbq5Xs8cGDXG5Hmyim8wXSs5fR",
  "key5": "5FWiUPv9St23ddmEVi8MacQyFUU1cm2PC52p6N6q34jr3UFzLtE47GJGrwn9UBmuW7ve3eJNy22nbo2CJRvHFyY1",
  "key6": "12535FjBiSj82jCqZTpp2Bp8HoPxkQPBr9KycEQ7toJnzhxNYrz4eHzH9GNwM13qHQkWFzM9ALocfd6pYt3zooyR",
  "key7": "Dnyn2623HJXRgCKpE1iHpiJPe2rRjgNWNAoM7C5cWtFkAxiaKVQ6GGsqyvftG9mBoNb7wk5bgWvYCxCfXxyLnQJ",
  "key8": "jJg7jDKZQfv7ap2Ee2ERQRdkoyk15ENMFiE7q6g3jPk2SETYNZRedYd9xt7HQEKcLehNVJZJCv8BymVvbTZMcW4",
  "key9": "3XeAFfU9cLUB93mWcxh5KYDgg4E99zYsi7LGX7MekCe5CShvsLqZ2BUrad5saaAUitFtuJzJBuD7iBVxjqtoxXRZ",
  "key10": "2r63sipem3Jo85wsscpiuG5wZrkDAKo1buHA8LX9EofaTQQ4qdBTfMEusEWUYKePV6Z9apGmYCiLrw9PT1qAucC2",
  "key11": "5yoS8PgEn5LDmTqEAa3WdzHHD9xBh7e9jsnLWDA6eLpMocvKPc1ojoZ5CmUyX5CQzrkqmJuWJTh7LQWxfVtuMzcb",
  "key12": "5W6cFw9fTk9FWYYJu7k1xPr7vsDDvqUAE4r1JDYEj7bi7uG8h9j1S1tSFE5gkn4cfVA7YCtUg6FEtUeaRBX9Lz1N",
  "key13": "FnTKaYC6iXEZCLBC2AH51mdrqUNzAzTKrReeFDeUVAQ93daJ9rxxPWJAEJHneNLgdbN2fDMEFxtWY5Qc2yH51hT",
  "key14": "2FuN9FpetrUd84GUy6XkeNhjLTZo9n4SxdJUtvT2NS82Q6SmvFkZN3hkHC6Vtx4KyPN5zi6XV2sTmtPSkNZEe9iy",
  "key15": "kvYJ8x3q329JxH2Vbi9FQf2bmLMTXQqQ9b6UL1TPnBjJSRUbLShkyGi14PJrooAbnaWxu8uz7m2LyKHdEYNHPsW",
  "key16": "2MQZTwZdD3tvXSCR7buYgKQDrB3si5PtbEFKnaKrnHkiMgrDQiZ5P5Sxg7fjVKck7KSckYNpT2UAiPsYXhjsnYfc",
  "key17": "xHQhtaBjfBxoXMDDmF6MiwPDpxChEDfghjv1boLUV2ycZdRNvxQW5b4GuGVBZH6iF9YXRo9wiT5wXoRiS9m8ZUJ",
  "key18": "54V9E3tDC4vv4Qer8o4E9sJQFBdTeBB2Z5a9tE5B4bSJnDSd5sjBtNikqVUtY3y2KuRB56EKQeVsxadqRARVq4jX",
  "key19": "2wfHUwpzr6i5mvCodwkVujdmvkauYj3NHMuz5XvGJ1arUBqPrySrvSTp8ta7nXuFcQDSjGA2C5a4S8umj6KHLAQV",
  "key20": "5VKcf1n8Y7oVUqVX2QU68LqeAU8TQWKw2kmubHaNFTMdjdJeJ7rY8BodYQ2uw9QePPHwRjRFk5SGoisP1h6Qcy8A",
  "key21": "5Be8TUDfnXtAm7JJwLKx5fDa9yxxdWcEc9vtkEGummikeC5NYdxAb9sWafYDqG6RApb3LBy3yxvGVbfPDidxr8uo",
  "key22": "3fj3wuhMQsbMCCVJ2Rrs8hvn4DQnFdDhmEJUCUpJQzVF6g7mdpiAchViEC5Am5RP4WVhyp7izKsAhMbRXbuci5B3",
  "key23": "37iFMYR524eRBoDrnuEYGNEvWBni6MUP1xGdZNQik5nzufMqukTi3VRXdJjZH4b9eQjhYjiHdfs2vdy2ikmcriT",
  "key24": "5f6h8mL8TAgRdqb28D1ASGGL9mtXDgZwTX8gkJEvCf975AHbzLiTfjG6rbBCzEagdd4j1uKqiHpyouxY5zfehJN4",
  "key25": "46y9eA8Bca792vYZJJUwUmUXMtETzhW1bYYzB2YUdRnmPPu9PQVDMbqvoCe135TCkAGNnu258VwHcZjmTt9igRXJ",
  "key26": "4Nuvyg6vAw9fAHrQDAjjnkhYwAncsqJKt9HPGpqahea8Dfi8Q9ob6jibuoF2jDAtwWrCWh2S6QW5QxdMQ99tZomB",
  "key27": "4B21ge3dm4MpjMFmuCx4TYZ1xm61c7WVF7ui9LeHBWCyynCAn7aJCppv9LVJ7a4FT5n3tYZUiFf3Rd21JEVp263o",
  "key28": "3JxQumxCqaVVgsneZVvWrfKz8nsxpb3jGATeZq4zGjFFdN3MDeQCPdeWNVfDd7esZLULpHA2am6a5upZvmQkRfjx",
  "key29": "37dhiFW4HpcddUYkME9iiEK4xy1JzYgJFjLQ74CUTB1MEMyR2euQSVem9MmQVjbtfJj6A1zDqpHcwCcGUzygKad4",
  "key30": "3RcDrABsCVBrnT4J2errvAtuBoeTA7oqoNyc7CJTTpmY5tWGyzFq4dL3RVboCffiopyxh91dWw72QaA9XFJADJXV",
  "key31": "4aFtHqbJuJe8KdS4zmiakXemWXr9CK2CgbRoz81TFhS8DxRAbtsAQssSvY5j1dai5EZWMiwmwoaYYYUiiRSyGSH",
  "key32": "4PvLs2FHRKX6UiWnxcUpoxYKNQ1qzwiFvZr2ATGNMorut9PJQqoAJSLzVFP57apkwCUWw3Z9oeKQkK89dTFSVr6B",
  "key33": "3Uz9N4FSHrPZYbYhdMNRkpJQQaG3GzpdSrTnYb2VEVKfarBaE4c4YdAvhJhhx7Y5Sf9hVgbMzoYNhsHcbequV43J",
  "key34": "55RjFtD67tryMijkJqPg1aGbw5NqNWvc55Bnmf2D4b3NDPQ2yWwC2YSpUau1YfstFXK5mtWrFJzTk5Zbcp2oUtEm",
  "key35": "3SAgZzUggDgMBkWEXYwJmjjoCBAFUxovCzM1x4Q7qmSqAfmraogxYMzqV4yLyErjbvRe1YDQxFZXwTsznNRB4oPW",
  "key36": "4JDWhTnU2U27z3iCCUnPwYNZQwEztFf5BbBzLCBZjFEuPqpQwhPTokPcVM1ZosCYnoiXMUJpH2QreQyPtZAjwzny",
  "key37": "2Z4oTHcun3ho8pVMa6da63CgpaxPLQzhjJEDwEgYWJhLa4ZYiWuE8FV2FYzsz4E9Ezk2MGjje6rYefQ6vPzLzjMP",
  "key38": "3juex2VF4XnsfHzrUirrC1wRMadwpD2yWBs8RvWy9Q7uyrxzUWUMtQUxcgQyoEJWCLyzvPoRcQ3tVzwUyhmafHBa",
  "key39": "2EiJ1UtNbtAAWT446W2jXmRcEfTNiFqNurXENHJnULtzgHnNhhhPcSUoRyWAGUW1djnxtjiv4jhhoi7hRSkDte3q",
  "key40": "4UWA4oJxABLF1Ep3zd2z1kWYjPVR3RHtW9hiBeRoEAERiXmaSjdEG7kcjsKJqUCcUQxWHz3t38acFFD8EMyX3rwp",
  "key41": "5FJinXcF7H9DHvUtdXnmwpeg5UQJeqVX7Bhdm6Wk4Sj5RyNheb1t3dPCcc4qqpTZccVYQyFS3YBLJFHqVqebPUKN",
  "key42": "4hkMUnsDt1surhnJcGinUsbFFKK4Tc6GziEqHDtJWWC3rE3ya1f52FMZTgiw9nsXpHRqit86iJKMqC4BW41REqEg",
  "key43": "52EgePSwub7YF4uCwfmrEE9UpirokM5QrM5ngQrg6kkPejtGrcJaGkComdxusMkJwL5bGRPRCXuCgnzikfYGjp67",
  "key44": "3CRWToRzzhTfyZYpgrPHFc86HoUNJDZ72qrsyiqW9LBTD9UYaw1ryzWLNQ2wNQ8vfyN9uY38EKGHmoAbzzSq6XSm",
  "key45": "2KEZhzqoqu8jXyfRhw4uM19AxM199BMgDbaVTe7pkc9ZCwMfW5azKkjF3jhG4S9pK5QjDvY5Ho3wxX7Q4vZbrTv"
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
