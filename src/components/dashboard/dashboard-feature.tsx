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
    "2uUJqQYt1RLdFz1iYE8zirwFWQS1VwhjenNTYr3fx4uL1vcYaFpWA7B1xtpRe82oyYpVWtEXxy8UD6snFG3e6dKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WzW1ga1AVHj7Dmn5dQcAj968AgKNYM6oT3JuFn1K8d5ps9dUfHnDCX5wKbZSn6zAM5fRj6d1BfENas7EN8iNrLJ",
  "key1": "2etSkrz1bZP9DibspqiKsESY84T6ciN9t1eNwaxabd3keaSR4NHT2iFQ6f94uVLqtfBg9Mv7GvoPhMnyXq8RBPCg",
  "key2": "8aTod2NE1sQk7C6efaUVP3TfAXbgoCp41FnjmHRYFoRowksEu3s34UKSGTEtqUZYkHbt4otLmhNT8ms38qem1Gz",
  "key3": "4CVT29kbSZcwafCw6bPTGCggCq5sJhXfmzEeFATULMubSz5oxowv4kbbisixCQMdN2DVZisaxbMnRzSyzEo9kB4S",
  "key4": "2DZhGGa3DjUmg64EWJ6MyFKwPGj52SPW1gy2R6bT8qbqemiENHJYnk6AkwgBEJ7uERafvUwbgk8TspnjTVZNCACV",
  "key5": "2hNweEJt6m1bYpNhddDWG38b2Wa96Vfj5aWupwmdV7LcMva6nVbhEA3D8d8jRjPqC4yF8NoUeNHrzb47BPp15dAC",
  "key6": "yuzj2f4sYE2rwCgDosgEbrwDPJ8Kg3YVEMM8wjNHKj9JHHjaXumK2bBGzM5jcURLhrqgQygbHazCTggZkCWFt7g",
  "key7": "5CVfpKPZPXG7SSAJcXrEBGmdJamuugBHdS8PVbLq1ZRzqZzV7zb8xSbaggV9NNJB93D2GTcXfavbvWzSQqqrid9W",
  "key8": "34g3u3LfKzdDL1113ntBzv5s6HP6GZ7kGbmwznvDJobRTjxagGUdNWJv7x3gz5Up54SQztoc2Wjajfh77cD6ZoBb",
  "key9": "T2KXdvKXhsKjXRNkZoyDEGuZTKFcir7jd5ZfroBQy5MADKAEDh7rhqPb2Pv8YvgrF7wiBjH7caauCygzbR1CG1C",
  "key10": "2WNZQTznk48jXgXtbNqrd5jVnArHNWtZLDvZ3JbcGaFWdqTA34nSmyyEQVH6APPwUqRhZdwbAJcuKW1EME1cT9Ek",
  "key11": "3f8ug4K4kjMNHSF2Z524hmL9tBi68VwYWvDYWe7qdG5F4ms5mQucm122MwPCvmVEcotTGJg6KGGnVgymcmNF8s5k",
  "key12": "5uaokkzYBYSFqQK7G7DwNjjpZuFbrVS7jDqXPxyw8U4radzk9HPEXiux81jhaFPHmZNdwXZgwuw5GxX1WMYHdiD8",
  "key13": "4tzXhCacBfQLCK6r5zu5EdMf7EcXd7vC1JiwNYhPtLxjU4Nrwb3D4GeB6BYjEuqMuo2U3kcKqjo4raUg64HvdVfi",
  "key14": "5DfHNU4ggf1qg9ss8dV7tSYow5VtixdLjJwf8uNo87Seyw4rsD5nrviMQJ3DDdBtm3d5rXtHZdjpr8YMPNNA37Kg",
  "key15": "ZhbRTQM8PM5xvRYrcQ7Rbarq3eNz28RuNfsNn9aNaTM2k1mjE9nqcTC7soVZindKm6buRCj6fTkwoQYbNUD6JuP",
  "key16": "34PVrGH5yMwC3hZYhtSHd5BWEfLsHYb9ZhfzVsXcDZXkubpA5FgrNsB7ULWZfdms3mzx4hypv2fhqpqQuDTtKSPB",
  "key17": "4h23rncc4RdgszkELGQEwAWdDo6E2cUqwmXMQ1jLQ2a7CjDv8mfFWvoUYFBdX75SMpiWTgKeMSkEU8TmoKHtzPNV",
  "key18": "5NESrGhCRYWMDKpFUsaWYvCWnezqJBsAJ9WtzCEuaZ32NCGifLHWAsX5uiWsDNoZHmpLUqCQuFwBdad8Rt5jSzsi",
  "key19": "4UhxJzWbyJJCxieCTCr7tSNHaXgDWHvXrpHGGvF8ta5U19gWgkwC4wfazSMDH5i7X8kckhnipua7ukJtVMFzvuPZ",
  "key20": "3JeNgVavTikRxbLMgQk99TTeZETgPPVXRtdAP8kzUy3eEZQ4jHfne2aU3aw8G4k4oETxtAiZm6Rk4Y1uXNiymaHB",
  "key21": "mYPb7q5BxVBaSDZFeUG7JYeQ6BbiKaMWFtoCCfmcAk69dPiVxZKicr8Ecrrc7Fzz5s9uYVhQNWmPE1FuQ2eQ6FC",
  "key22": "4HN1VD6w3Rxqi6otRBrk4kHwZtiFwe7jEhpVEve9DkdZxLxaZAQBv2tgtRU49RUXVb44gFigu5mWQW2BhqFrJTU8",
  "key23": "5eZX5Lpu3icchdntMkChpFbLksa13pjidAsAZCj8VLtM8ekLbrbFF8GKf9p2idTiFqFAzcUd7KK3ECDH9RYWHApE",
  "key24": "5xuwjLrwM4bTErca3xVkHfZBS7CYgSjsxFt8PztYGZigABDMh5UiA5dW2ffwfZ9uAcKq7zLVfv5vXZ7cJPfF6h4w",
  "key25": "2m9TtECfsjuBqoo5ajhgr7VUPRmgrGQ4f3fH6UfCZ5GNqyHc8BzWmdyNd49AqrRuywbGjVqPAP9dwgMTXK471QYd",
  "key26": "5Jvi2ad5HdmGsvuxRnYB3BMGqX48SEKNRruNvscVEtVpidSU1rft8DaVstLP3qYCW8gm2Ay2KKGqLLDrazsVbxpy",
  "key27": "3gMoWVzHPXFkfW7BEExmRWS2tNKbx2yuBhnthtLN6fUN75jGFxMGBsF1JC5HtBPsFjiJJuogWq9VRjKARzN8Qrt8",
  "key28": "5DCBGmyboZ8X1YvN8YxkNn6ms2CmGXE4QSAzqVNkEFQW3jgpgAJA7ZrTc2egR7ZzUtfMeKbbJCZMNSPBokxnwdHg",
  "key29": "4zRZGJdt5m26VBmBHuoJvy7uu9hzje5HEP63Lx6PUN8Q7dZwVU6ePuPEk6TS81dacUVppaJKSPhA7jgT2ceb6fjP",
  "key30": "4oTtPYbeLgevhnivW18byBJY2RzMnNANKw8uiMgqdR6LmPRHgbmgby1ubUCms9RR62Sut8rcQ1oYnBWzjw6fF7Lv",
  "key31": "4NUvc96DxsvorhqRp1rqfVXDugLn7QFfokCnxxeChEFzoP7151wxDvEJKE6RWfbHtQCop6mm6uncgEs2wSvmVZct",
  "key32": "5vTpAajqpbLBqwRe3sitiFGtozpVJV3x6b37Vq2UMvkRnRUqnwUTc1Ya76Q3a9H5sMq8NNKBynTSTEdnuy7EHfT3",
  "key33": "5EtmJzDMd7hB33PByGVgc5BJcnFSwzEvfXaHxEWYiCZcQNaGgEnp6Ttth9V9zrf65RJosi6NBGueSBR6xJzWTYXL",
  "key34": "L6syw9x7jx8UGxMT5ceWBdVmRCvS6H296xzg7EKTgeqJjDQ6tRynWnyvZ9sy7cS5WrPc1ZTeKECu5zQjCVGp9NN",
  "key35": "533XZLhe8WQj7qNvoERBsnhAnQAmDFBTdVbcDSM87vf2zEgdaxt1aCnWqCZDWxzt2pj56m3rpNNbjW2QmGi7Hafw",
  "key36": "3g1UNrL4XNKqNAEsUPZxSTh1uebWueKHzkz9ELRESKuWkpStEDVQCUsgaDeGjuFHB7u2qsQztSwKz8h3VKWynbEM",
  "key37": "5FVKH9hw3Zpg5NtL2XaubrifZ3VVSDrEBfgrw7mUh1FLgZttrUo6ZnuwTryacGz6yGPgAJWR3E1KdYVp8E5afDHy",
  "key38": "5W6p3G7t9HXBdN4EGXt8Jpm3qayz22TQebo1n8spQpC8nre3PpAu8V1VJRW81kAUCP9i7hftma9wD3oqWs7qsTFN",
  "key39": "4PTZHVZaJrkZo8iFsuqRPkGMtAEC9peC7AuoLSFM1opA5Zxf1VyuNq6QXLXwGsP77fzjJPS9TYAE4ypmqejtDJzu",
  "key40": "4pQLRRr1e1r8bPTPRTTLGuzeyczDgc5eAbCzpHQTi84pgqEHoByBWva7gABBWBeZQKUEg1Pb2uQbf2HEK1NYHsYH",
  "key41": "4p6KdAUVERayR1MXEaGagSvMVpYf3GL5WZzxHk577qwsV9GLLZkVzyBgqD9pXNS54VSR7n7ZYYXD9HbR3WUGVmXo",
  "key42": "657PqSbpKyQZjicunekSMhuLG6DqrPQ2htoGUwPN5vdwQNG35waU8zFWKs2NVs3TUSqfTjRvVXznP8eHpceUHrDu",
  "key43": "62W3YHVn7uyuujLFxziXQ7d8qMU1nCeBrgGzeZ8sjTi4P7M2mUvU4UPSBBeLReSTfVH4af8Hkj7iftq3RkiUFnkS",
  "key44": "2iZC9jw5RJXdBkyqAXTLx6zmTYrJZAT6p3TixDhrcRx8FXSyAyP4zvoT1Z5V1UgvuhDpzhde1wTcVeKrgfcMa1y5",
  "key45": "2DZSM68Fq6wPZMYP8k87sEbjjnVQSxJnQWfa3tTtZYJSqsBxwacEDQCmgCNiXJMJJK36YvCAwjsEkDAsX4Ux9S66"
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
