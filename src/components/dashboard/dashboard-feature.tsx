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
    "4pky5Qrf1vaaebg7DVAXRNkiswpSDRFciTBSAnKHifVqMDwKueWQW8Dicy3ZAQBhaix8KfypMovtYvzHZ3oS9pZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aettFvdMgp2iQbeEt6PMQSNE5YshQpfb22wtoB16u592Rctj2hN3DjSwsXU8xC3X5bgCXkinqRwdKFRL6RQiSKG",
  "key1": "aPvnunizXA7wQWK7GNJarZrRG2AgwhjfpTEGRYLvopQymeRzTjshGz4L3yUQbc38LAc96kDYGANcfbaHQBe5wY9",
  "key2": "2WxdxW2rMrVdyAAdTUpjR1ZjXFsaJ87sssDgj43JoMsdahX1E3RY4BcYYit66xpdTbypF9xGGTWwRWFLtnZ7kNs1",
  "key3": "49jE2v6yV45weWmjPQZ78kY5TufJfDHvpYrzXYjrsVRHzqes8vjUpZxD9pX7f1KezeLmAfhpJ5MrRdVeReZXbxgn",
  "key4": "62AQCCmUquzRBAzPVb3mbmTXMnM1nPtwVcLrEjtp1HU58jHADor7KP6DEtinza2naaA5aYfjsU989Ea4ygfMi47k",
  "key5": "56mxLK59ng6jy8bDU1gxjE8G9radcbjC8V3Su6n9bJYo1C9nYxSP3AjzdWBQWfL1aSHFc5sP1pq4kN3U5fwx8PGi",
  "key6": "3Cdaokpkw6wUTfGuPJDhRB3nP1Z9TjNWA6wtF4X2tonstoYfnW6RZ9vhaBpTgFoB24K6QoFDiUYoZabS91DdzLFN",
  "key7": "21ov2bY7Hq2qfKMR8H2MU3SGUgJq3SNfDcHyoNkuyGneZNqAkDffH2X1n1UvssYWgAebPhFs3gMeoqMKSu75Xzt5",
  "key8": "3BDfrpFonb64GwUwYHTcy5xoYgX8byVyaUAAujk8FB8s62CaQSY5obyptuHnEmbMUoVzZxsfEmTmH37sf83vpAdT",
  "key9": "3kgasUpB3xY66payGNJEQbWecpUXjrAKS9UZnKPUczMGsSb5ADYx2XnWqhyzte8462wPFavmhgdoUpJ1a5msU36h",
  "key10": "5ganncRxFj1MGrAci8GvbTdZrsMeoLJdiUH4ST9gF3GYyYbWoYiYbHa6KXvgzGivQiz1BcKvJkArXRgzbQmQHKzs",
  "key11": "2BtYffY6JBbw3iD7WwejCZYBsQPgFC3oL1iCMrxUvB5es8zR5FQXcMcYxSV27LVSgZrLgcuQRQqbHsjRcYmr3qq6",
  "key12": "5ZuiyuSRntaF2RXETsZG9zs6pxHRq1sesaRZphGUQQXDD9FrfnXagmSTXysofz96Za9Y16QZ5CiAHGKd5m9Wuqjy",
  "key13": "32zUFuNTXwNSixXs4VNkH3aHrB3ggv7VJRyTnP7gW54n2wivjj9MbEYVGmP1ee8YcrdHTSpqYDe18H9ubpN7tg9w",
  "key14": "2EK4QdLV56o1g7XS5x5gxW1VxdT97mc7wPsnPBdzLjFX2SM9iYd4NThC1STAqiSGt6tGSfFCzLAZzvPGAFpH3c9N",
  "key15": "P4XSGgMLGRj9F9MyFAYGy7EwToRwMq2oBe4FBRcTokPcQSzE92KfAmAmKdV2mh3utQS2UBabcdKRteSpbHm4EL3",
  "key16": "KsAVrtFBbedYvk2kSi8b69PTTFEPKMJHGpiyFpbe4UymcZ9grHsjSTdU29752JYn9GqkVAsonLm3M81WMaioBf9",
  "key17": "2cxWaLmJE6FYVmZojPpUT9rbmEBLz8H3D7aCSNuVUSjKG7Ry84nPyUPJFVnBqxTuo7agQE5ZJ5v46e1FEaPcKQss",
  "key18": "r3ccY4WXDw7wEwSABii18zPwMQQ4Qrcu5Z3XBJ5EUccpZni1XQYaA7qvNekKB6joa5WmB6fW1VcGDAiidEcadXf",
  "key19": "5YSLa3ojsnSKUe6Xn3BzgBogDk6bwkGeV7SkrbVDGWaVPhEf8MJkKfPTjChnPDwKE9JYnZA2tW4LtRcyp7MCNonN",
  "key20": "4ni4aGgjhTfFVBJR4LdqDFRBVAc3f4Cq7pYA62WuFdcSpkD37Np1Dm9QeumQgJjLDLy1JEajQBmL5uuWBn971wRH",
  "key21": "22jPJHkGibENNzgipQiQ1wto7HdV6scXywGS3awnauXs6htm9fMmJ9C9nYfSPozeSwYCJXCdMBHP99ttKbvKFxae",
  "key22": "5ZhsgUCbVruuZG99uNF4xLejupsGC1cRaSjzrdR3d8a49aLGxAkXzq85MY38XCRbHjWZQWN6tjQfJ72h6rnahuPi",
  "key23": "63ricQgRW7EZxPrK36FoTotgRJNk1wJe2M9iC9mPbQUvmqKzWYWBh5Cmhxx5NET7j3xXzEh46LYTAHkTkwidFLQ7",
  "key24": "63hJPoqiiuo2nbsVrww78yThzd1wJoAWRNK3jFfwUSQbzp8BXzXoHc4W2UpFEKau5MooB3ghtVyvDJXQp4avHbKj",
  "key25": "nsyvBKK7JbXmWLzfQ5cPtpF6XRhLJnr6jNhaSV7gqyFt4UguHX9ht7zPxLWBsdkabnzCZmHKekwpZ9LULHurodK",
  "key26": "5ZVKyPASWpyGd4YZh5uGc4SEoZC4HL6xBByTSUeJNbQyXuUxMmQLMRR3HHh3qSuTMaMJ1EEyYyv2rcsKyJwiuhLP",
  "key27": "2YrnFmyMEnb2R8jYgXGDRinbU9LE8w49sQia4Y4JycVFPniPPU2qbs31Yc9YwEXjzunaZExdqZ1uMTuxa73UAMjU",
  "key28": "3YMxbK7XHCEMZhY11oRghV6bqHrWpNgDo2uadmfqZDMHzF64EqHC5GCw9MDQgC5vTLdrrTN4mx9yKZMXgYrzdRXx",
  "key29": "61Gh9GmGH9N5sh5BFkPZK42z5ymqwo6cd39xStQDBGVmVGjjbPGFBusPzpYt7pj5oRyTtBMvmjsXPYBnnzT6TuZ9",
  "key30": "4jZ9sJPcrBXAaC989Y8LQLw7KrgwMyf256HWA6ANobxxcbXp39AjnUNA9vFi2fZWJg8QVYdrq5fjg9KYksjAvbwT",
  "key31": "53iQ1pRLCMg6fr5RAX8vVuYhsCcpTxqPj4eCs2L2c2W7PqfS32jv1WRDnQKtr89veHNgwghEKfKk1FYrQG9fM4yg",
  "key32": "2fDxS1nm7pANhv7bgUYmiW7riGbSy8gn8Cv57AfwB5WyPttC4Hrg2UfHpDksL2agqCGyc6oCkphVH9bjqpANxSNa",
  "key33": "478LJF8dWudK2utTqWQ8YJaZVuh8AiEo69QrNsr3r4zNT4cfuYnQikJ71XG3429N89H4zVt3AreDUAJsUrqJcUzM",
  "key34": "29WH3B3gRU6jioFPhJKG1ZqXfmWFrHct7S8bd7yJSyPnchKdRa8c3GWgNxepHhdnHafzMCyvpzd5JrEQ11Hwa25c",
  "key35": "7WnXs3SGEmz27P4HLUvsniBZHMo2XrGCsTeD9omDygXWDHFxo3j3rF7iwdVGpzhUjL4qkfT8HrFUvFW6QNd8Ubh",
  "key36": "bAh8YFNtonrLck4wkBd3YTexoNxWir6CKgztBNitBjijjcJTvssierimpvVn8fEZwwWKUdFmi6d4wCeF8ig3xo7",
  "key37": "3DGcb2txtsckv3jyYBCK7X9tdB6z3CsgMQoj62kq5S4xobaZy9Snd6FqR2AUzCqZinC3S8u65FKvdYEBeJAK8NmP",
  "key38": "3ZQVXu7f4A6yNrqGQJKAe3hdFRcbdvwtKym1wD27tSqyyYNctKzRSPr8bZ6pVC8jDJfeTsHZ7nMFxM6uk4RbcwDQ",
  "key39": "2UBh3TWC8FSE8kGoKCvXtRtzhAnhkjRVaLye8pzBzmmhkzyWJtiQHDfUNDWwM4s7fJXUHYVxv4kH8Vf3q4TH5eMC",
  "key40": "3spMasLctLmHXBaZzmYuPByJoABD2gJEbgDrBf2zDJwoKeovcsVA58U5Ao1hjnshgTo3sfNXtU9rpvC1AUUT8TQz",
  "key41": "433t76jas2nxN8nKKnAqgUfJcPaMF8fbKc6o7Ja4fiZrw6z5TT4GxZwHfRQbwxMFEvWzG4TcNCzwhehVPisYGd26",
  "key42": "2wQyTw2UHNiQxMUMZo5qb9pY7KVJeQsS97wLCAW4SYcYPnF8vtgBcm1a6MTbfKQV8ZCFsFfTissL4sjNNxy1dF2Q",
  "key43": "32xxYhKX6ZzRiYTasmQxJWro4zviT9jLWmVhkPn1FunkGh7NZ3A4j3mEtwFV6wY2p9FUYXFCxcfy8g5QJmHhVaM",
  "key44": "5YSVtiqfGMjyQBs5hPpYkBNCPVYmzWjMG6oLgSTjsCBraLy1ReCzbqiJSWkviq9rdTbtH4jbGCRpFC1G5fVgpWRc",
  "key45": "3qorD48kc6B9yGebwFRZjtrk8YxXJTVM4Seu7rPy9D7536Bm4QFKSZKoRPhjEuf6tk2Rrmkho1TxBke1Dthc6BHA"
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
