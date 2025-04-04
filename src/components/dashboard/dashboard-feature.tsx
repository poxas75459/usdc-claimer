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
    "4BGoWRjJx4YLnbrKUgdyMy56hQ4VR1swZ6mh6Vt3TE3yp2ErhiwwnnoDxaxr7Xgb824HLyr2gn9MnyAKzTxXrPNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Du3GMDuzCW4PqWeRd9SD3vrmurFSsBSHDAGN6amFQ1UsP4CcBSk52fdWWgeinvoRDE2uFR76ACUAwsGjCZvCdx",
  "key1": "3CqiEdViKFma9oMKnqZduyrmtrWk3pDrHHvAMjgDmzfYfihrUN3VVUHAtbJDmctTWric9s45sjfsgRiHp2F18Jhc",
  "key2": "3T5tG1CNNCCckst7Z8kQjRm9KtcCDwe4NvCvnKfsMiVSNCsq8jBjkbUF9MWAiq4L6VLJjmLwtcgzpu8SGgCt5w2u",
  "key3": "5YRh7N5efu9QWDPEz2yJFZ2qxRM1eYTgop5RQiuQ7a1vYCc7bx6MTLtjHNKPJDxjmQexYEW2wGFfQBGoY444L2AP",
  "key4": "52znknc7wcXcGvjLzJZNYY4eTgi9s9ytcD7eQWqJrgPeFdikyME7gQfdrdXpKvp1xHJ8ZQfXwMtgUPiYm5AbqWpL",
  "key5": "zriDFiSHUkRMfd4PPfmKGh7JWXBCE9TepZcutRkWzcGmti14sGp9tnzC9e5hzryKtUMBqK8A35kEoLiSPqyx7Hp",
  "key6": "5HCYwNDnH8Kp6kZ9SrSoKmAN2jPJyjFvTrazKLnYPx59Unv9MrzCB2KaqFD9khSzpn4MVYNFjd1A4XASfSZNEWye",
  "key7": "RUgn16AdFTgtpZ187VaB7SbSkrcnHc93DdxpHuwHPePMdFD7fZDsoytdzgvP3X93FekV2WKx9AmJygx4xU9ohct",
  "key8": "3nrjd2Eh3vDpYCHskTE6MYBQT8BTAWLp9bEuBbLdBeoextjuBPdWVwnpe4QqBGNZnMZgN6xfiXJoGkdEweoqb3P6",
  "key9": "wvtsFn91533Xa5riZXgqTdKfWwCTM7bsHPcPXVkjU25yDg6ZC7FfXGh6HgwN5h96jmFVqc4h7AXqKEQjzKkQvHS",
  "key10": "5vDSCTeKz1jM8R4bowDFDZvwAxoGaFxsRX9NRkuck2cpKZjkwhMjx9f4YJtCTVohPZP9rNUjxrKJsCwv6cGnaqUY",
  "key11": "Snehx3BNrcUe6ZuJ3SCnYa5VE5e1btG3CDXK7g7Ac93jLaPvMcCpW87rpUUcF6XuweCmn8PPvZ7Z6KMnx1nLZ1L",
  "key12": "3iSeV81zj32DfVVVUqVSjV77Cof6YD78BMk55KuGQtMSFEvywsqmYbDe13AmEaJAaHhGimzj1Ww36KLEn44uYihg",
  "key13": "47CxHL7C2FxU3AN4XN8EcdBasmWmLn83frN6EJYcY3gjUkw19a7hbqjuq6bzyWDQR4rUnFksjCYJZqRM8jS9LSW3",
  "key14": "4YL56SMfaVNj3fqyf3q37GsCoaS6saa5crHKzJ2sZixsExq1TTzu8tf5Tp4i8mAbiPAjLqB66PAbdCUEUVECZNWH",
  "key15": "RAmetvwfik6f8Kmm3fAtBMunKTmj7igarbEnLvHqNRewmG3zinzvVK2MC84irBFPxKRsGivzWucueefK5waRV4E",
  "key16": "27vfbt7VrK4vRoyxWoQQyE6mPdoau6qSAL9MMtif9nMfDVLDEbcLbyRpdeyj8tG4t6rYcKmFrJpbM1iasQwg8ymS",
  "key17": "4rccCddYgEge58sGpDxroyQoZS93iTa6iKZzkYEmo4JNgBv2xkNSPaSmRyJwZbbMY4AXuKFNRMYHdiA4g738Fwc7",
  "key18": "3xmqXQk1eRd3h7S9BHVZedjgVeP6RMNoyJQRsvR6N9862Ztb5BN1CwmoygBQtSo4ZSGSN3uMidcMBhfuJhpEDUpw",
  "key19": "5M6kqE8W244TqbhUDHzYeFtn4QUUF7xzyM4mCsxWPisgwgRBQPviDP8nXnkwGBfDBfLHLgRf8cLbWYycQjv41r4y",
  "key20": "2cd7Lvptj96vNDip6grgKg9S4ZwLcFA7NV6nCMrZJ3ZqP4xY7j3ac2NrncTV8DP8u9Mi4VCRPmFrb5YTByEr9xXL",
  "key21": "46bzXDyhvp2fytoeohjDcSE1jFRbrP98KqzKvjnwyAL1sU8SyJ9BiZtjwpA1ukL7bQ1FDWxZMBfumrDzoCJnTPyG",
  "key22": "3qwG6hXmUDAcMjFCEC5pRrkgJ1SNjrfdmGrkjbY68uusDiiejzjpLiVfLjJr4mnoy6PfJdXRqgGucoT4cUaaneiy",
  "key23": "3jsikySpGKM42sPAaKRbsPPs14mYCZ4WZYAvj3fNEK6GPBGvYtjVrS65HgH4sZi1vQKU8z11CVda3dwnvGFgVUAc",
  "key24": "5pvvvG8ixiAD9rYu9kiYsc1QTMsgzFYEDd9DirVAeo4JrHKqhP2SVVZFe1LVk4AjWNmJooGwtnHfXE1bEWAzBjyr",
  "key25": "4Q7icibueyTshD22sqHdx92HAGwXuSVV4ZxKorfDaPP6TGtNtXd6EGuUWZo8aJxXF7Xpc5wtrWZUuYBSzje5DGN2",
  "key26": "5b8ZUi7zQHGUMAicT8ufx3a2KL48MkxJ8FKTJn8HufWr3dwXen2r2YNdFuyodzgLBEZoXaqYisLcmArFCAcgh1U7",
  "key27": "4aDJjj9TE8ryJP67ktiYdXJQXQafWXuZmfK6ETktCnjK6oF9bsJgv2QZuEHZmY2Je6urrgVh3E3ajLKtJcob8Mhs",
  "key28": "5fmtXJbxJLvNbE5YCAiPYVMiPRw6jSWjGUrgC1LghhsPSD6W56EbbzdjQiGNEPghL1p9guaR48nG2qBpArdUuYY6",
  "key29": "2sNWe2juuqcysVWHsUJ5ERmEoCrhrXS9KC324oZo37TLKaut6Rh51kf2vm6KrMdeCr2Cbh7w9TAt1pd4rrkKTEmT",
  "key30": "3ysE3LzXn9ZaAy9Y4kYS9M9LAjLqSKFWnxGCs56ZFMqfJG5ULnhxFbY5KhBaTHE2oEhWNHiJBdLn9QewJrJJaVn",
  "key31": "2qpmWasEwK1A2gNYM3FuHe8BkodUBcgqkqsa5bkGGejexbHYPdJjuwSaH9QBTfdtpmxTUxYmUQhrkE4J3akePwe9",
  "key32": "4w8EBXSbcue3xi2zS2awihMVVEbTmVXRmYHXgKqME15x7LNmy2gqpgdtXGSuUFjHquDzURrvGw9WZqiZAPvBLi72",
  "key33": "LU4kZNAayVQqJDVwS5fvPGQBRYC1uBZzW9Y87DZXRi5K57wZPyGUrTdizJJB72C62wxZZKWjtwTaypNEQiEndp9",
  "key34": "5ssGjP9c93Upr7fEiB3NErkE8CivMUsDqsM3tN2Sf6mHpgcp99VFW1GBcnyZMSEzmEgXpdu8dqDJpRoyG1WJySs5",
  "key35": "5qhNcr1Ed7d2NujVYrjhoeTemwWeBYi6NdeGvsrJLqnhB87Y8QaHB5CnrQAiyVdN3G74y2bYFkS3UYbdtFhwMnCU",
  "key36": "3xHTM5YTBCM88KCurm2pVoi6QySxTr3FgULk4eistZ2jffw5TBFLJRZ6T4xAJu8NfSPBuH5cjGQWHqBayV6egMSf",
  "key37": "22neyqK3bzenfiRMqkFB7kRGW7ikTjZprg3g4wn3jGRWZCo5RboQmxFy6T1vyYBXzKEQibQsk6BfMrmgdRsAWLWS",
  "key38": "2ikvDfvkhkt3NDsxKoK9KWGykuBkcSKM3J45cqgSttCyRa44N6AJu4gzhaFCGpHD9dR5zZfARYZnzJV67aqhykyQ",
  "key39": "5gVgGdHexgt8p1BUwocEsfadJ34LkESRzr8KxVWem8vEDvwYbSVC51qhSnGFVT8AgQwBictW5HdqakPhvK4Mz55C",
  "key40": "KWcWmA4VVtjrb4HFCGHUdfMhLoCn1YuhRGi74SFoQpHdzoD4p1KngUb6VmZ6QkBdFTyh7vbU62sR6Wnhq896z3A",
  "key41": "4awY7d6qcTNGNgV238AACVmLPKdNkacyusSWpt2bZ1NNVPnCfukiw2kyKkzPXtMSVriSn26L8ghvC1wVpRJce8Ph",
  "key42": "3PjB3sXPLg2TK1VeBWjf2NPcfEAGjmj74DqPP5xVRydZ1Af9XKU4SsjaFCB2mq6BXqY6oBc5CS3q6bEjgA4x2Y4D",
  "key43": "5cg9VpcmfG8y2Ezj3xT71yNS1KCZU8eDU6inxZsKpUAnEDsShoZwfg4BWZPEm5ZgqkxknCBhymQXwwNd3PL5aN35",
  "key44": "2bUcVThgVBsKnEn5DczBALggZNb1YBVKY7nmN7yDQQnWyNnFdRTvHCG2qwzoC1Ke7naBPhpxVUuNCRW8gRtTmGQv",
  "key45": "5DEbFyF1VZmBab8hrXtFu4kGRVynVcjvw2i1ygxyvuxcpXtQG5JskgTbf5qLsZJadrcmq2ZkUQ5A9uWKBw94BP4v",
  "key46": "Sup54L8CvZuAMENDYmQ8S75tYauDDYzEzG4YqW3Ss2R1Ssr7LWxDUGshwg9Rbrz3VmfQdn7vxmgSUYWjVXEo1YB",
  "key47": "2GGntzs5JHRaNVERWQaG3gMbJygsfApCZ7vk1ckMXAPH7bsDYXNyo3P7uCktjCD6W7Rb8sWY5sqkuxVXo1yXPpBX",
  "key48": "3uW32b2qhQVguu5uRvgokqo9cyQBzx1aq85fULYDxnvJDySXqBCowQxs7nh6MiYgFmYJCYJkQEZXdg9MA3FndSo4"
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
