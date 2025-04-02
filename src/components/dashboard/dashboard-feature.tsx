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
    "SHnbygku67zthMvoksejPfkxcaeipDYZMTsfWP6awUt3stgxTTLsnFCwydi2t5g8tjzSKTFxL9egCKXT4eWpHL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sCGtM2aBj5MLYzBkdnj4uJZ3kVg2XdKs9aWuxytLNygvmksBSxuS6Fdd6ZrVPFLPVDhNYPVUTYFsndD232PBoG8",
  "key1": "2yC59wYidBfFGSC9paeXwS6c9ADhP97rnE6DbARbHtpZN3L34CKaixtJLBkuFNs3N8D4Vf1J9p2JsGAP61iLexMj",
  "key2": "41xwxrGL9q5KZhbxo4Q8qWx5X49d9R69KmQxNNJJZKFn46eKE3Yx8KjSyWn73NwSxFPWwSgQjRrmcEBcMnv1h8pd",
  "key3": "P1KHechU9vVbRygcyKZP2SZBP6wp1ozDachvXwpmaq2rVJpGcpHMqqTJ27HZFuckEqXUAmBjCN73AMrvJeH9mnF",
  "key4": "chEVhAh35WTf5V1LGtnQ4Lh62pkvi1PyUmvZKd4c6RgM62yqHHwdg9UXH8A882RuQeSWpWR2Vve3aEiBbeWnwfq",
  "key5": "5A7KN8JkUPR3GJn5eCB6APDWgPBUdXbz2dNFhZ55HhdstPEcmd2DZFEJYMV1k2wqVEPCuv2RjaKqmfSDMkKi3WSD",
  "key6": "4oouEwvyeZywNmCsBiYU6P5JjdNYXK2UdAZ6y9MowikkpzWs9cjbAsXXPXqKHUp71KYXdGyY2PG8mb4p4dfjE4Jk",
  "key7": "4cgBbQpV6TdWJD719PfGr3xqKJ6ecWG6KAhmmYTsdHEoABzGP4xtKXCJRUziX7Hd2Yb3uxzM3Dib4Q7WVrFWRbHX",
  "key8": "5NFBbjNDYrdY3ENvT2TpHhQkU8rZY5RsS8gPjVBEb7tbAu7dNNsVeyaGw2cN7E2YhknwmsMRnDjC7hqm2YKt4d8R",
  "key9": "4GJMTjCUjG1viVKbrYTQRTHvrKUCryLwDuucLVLUTX8HN8m3SQoyR7XR6MG7cQr6TpTaEWj1RGaRkDNeZ95ccr42",
  "key10": "3c8K5pdpLk7LJUbX7FUn1CR9iH6ZiYbGRvXytwsC7DuMYYPtEqRzUHLmyUjmnZ525PuqXp78t9brAqPuPz7yTAU",
  "key11": "3LQKCP3veeTvNA3WMhpqpJnQ54zGgraL8wR6S9eA8DLfTKippeE7v5a5HHGnwR5aJyU5ZeHF7Mfb8N63NDSoP2n7",
  "key12": "bQvbd9eN6YXdRYBDFgXjg4gpPpewneqeudqGYHLcNrhwPd2xZj5LKPmCEctQCJET17bGbHLZ47bWYwdRJtwAueu",
  "key13": "275FUJYAcyUcnzMvspCuNvEFdoo8FFp67ftD5P6SeKJXxpRL1p9TLaP794sJsu9yik2p38ozMQaaVPDGKHpmaJWj",
  "key14": "3gEhLn9vHB3YNpH897cuEULACTHYhof2qBVLQrpJ7t7uUw2Ap6JhiY8k84NRpAtgrTtEpeD7cNgSswEg3cjQHG25",
  "key15": "NZTAR92zTfH8FryU91HPixrDviPw8mCZefTRZKxfdYYeeANWoEDe1k1aoNM7fRfQfreMQJBkc7FKesHzvUBNEjp",
  "key16": "5fZkGmnXmCGQmSVfevZZV1d9WrqZkGhaWXitJSwgd1igvSc5WQ7grRMRGpYQ6NohgaoedTET71xogZGacwaKQnfo",
  "key17": "AQgbfbUKcRQgd6yhvdHG5eeYCvUw5mGp5TpUQMh6oDX4hdRbkwU3nWVwMSYodmiaCTG8Wju3ZiYm22de5cE5CYk",
  "key18": "3iUovbk6Xi4xv3pbNL4Agrh6DCsb5jM3GpoVYoUZnAnEpaV26D1Yt4uooGZePz6y7hPV44RKGaoLTjii8jdWVgna",
  "key19": "2nynzB8UiAWC8kxZaS3PmVCE5RoiY1jt8ybXioBLJ5EpoSgjkff9MgvaJB93C7315biZGUgkJpsje3VFQnE4hCih",
  "key20": "3dxoVw6AGzxrwujRYJ88G8SNP2yuHf6Pu2cqbbg4pwiidnPQo4cB1x1HQhvtUh1grjEfC8bjHSutupTLS6txPMWS",
  "key21": "35Hx4Kr2wkxd4p3NgdiGejddx1MCNHoErmAnxdi2uHVvvKB1vDjNcFgEfSGAKn4XgQLqAkGcaGDEyUFjRpsTzauN",
  "key22": "3qjboaTgScfGTzigm3qMek87pXgj6kjgHeDEZxC6RC1kgFWf3829spAbzNKnJNV4LDjKFjVxdNBxamJXKmHSRy4u",
  "key23": "43ZpwKy72FLwvNZiWhQJBDc4ZrMdgcfgryvPVTP6KKwnFiBQrA92giTef3NNLyTf3R5kNVx6MGX8EBwqbKp6QeUk",
  "key24": "2cTBzGM6826uoXUrQTEHcpNffQ3BUngZFAMtTkBwm1ZT5Sv1odzLa8WXy2pTKgrB1YeJzAz6uXmxYgPaAwq9TnnR",
  "key25": "1o9bNZ89HEQF95m6T8AxzPaXdbDpHwd5zZRqqeyV2q9e93UFhgKtXYnTQytqrgXxtz74SsGre4ZgX1FhJArzCV5",
  "key26": "4FJqHJaMMQbqKb1i741dQzWukhb9m6Ls2vagWZmwyx89KFR46CGZ5PkWShPVJySGJiuwEi6UPh4LTrkrRqTwGN8m",
  "key27": "7YJ9SW6EH4mJHRQWTZ2zmpPkqLoEwoSU9aWHoXjKYtUTt11t2d1p9BLQT9RMVnGVEBmr7LcxLrV6W3A72tczQMb",
  "key28": "NDhijtHXpwQCFHyCmkyekAfDMgoDA85zcvLdFBudGnfLUhmTWokddoNZ2gw7UogWq3Sci5ATi3a7kze1SjuQsq5",
  "key29": "FGy2c1ZkjuSXnQhKX7XLK82ZgpaugtnupzLZRnWh5ZJah5mj4GmXaMXxsBn768aDzwZGDdcm4ch8A1PVfNuAbSE",
  "key30": "2wpSKgDp9bFcZJccpw89qKneBPjk3N8nd8MQjRhU3DZiimcXDXPXw2hqRLFdhhMgSZdJsArVHvbujuRxcN7DPjed",
  "key31": "2fm2JAgFLv1EyPjZmEhyEHVzWBuM3YWaCJfGCUYj43eMkSfjSXtqgY4s3MkepyB9eMZd4NSWM6oFuKFbfcGJ1Hc3",
  "key32": "yipYWGkRVd4kpEwDqfuL37DySZSDqbJDMcbkiZF4oNBSp85SHbukdA1F2yir7JWCH6GbSpZG5JHLF6dgfJ65nWi",
  "key33": "52ftK62KecUEUgDjwq7Tzkr8ULtvUQS6yosjDQckyH1utmHsJzQRJdVfVaB3NLiAEggnYufACzZde4ckdVn34eue",
  "key34": "5sXmZURQAMQqY9KPk91fqbAmixS8p2ziUrXD2ExfCNtrSdMa3zHB4cgzbJo1Lh3oZ4gGRWLERg9NwXg3hD2HyT2L",
  "key35": "2sV6QoWrNyPGTVY52aGU7Zy7PFezrnQKBvRToEvUTzz6SVUHiDsZdic56gfk9AHvQHwTJet8NgY1JhkZXQ6QpDHs",
  "key36": "5mwxQfpeWkutEv9DgUdAtWBACtC5UP6128nS3AVJNEJCfw2e6sGtDpFz1Y3co2HR8NGRqstiDUpFPKgKeQKjRw2G",
  "key37": "3Z6KPzxx55EFXyp3Es1jgHEVxUyxi5j3BiZkBmm4Jrn2kNQtWn4NTeZbnCSGKgXFHB1rtYFBz5GA88yqSJ7dscDL",
  "key38": "2XKqWrv2nhH67fXCR1JNKovfK7vjVawvWbN8Zi16fhgQ7gjNj1e2G11hvzH2EWHHZr2kB2Rs6ow7gWccCvy2WGdy",
  "key39": "4KUAaNjarXp8NtwYVsRs9KZWpV5qHGnS8g1Cz8Fooj8LrxHutpMjNp3MC3fnUqBhZxLZQQRnue61AiYtyVYcETA1",
  "key40": "3f7Li73J9Lj9Rqer1EZB2d61rhNZY2riHbKtMw4VcJa84gSqy4ZrZJRX8CpHPFngYJCYs4iRc4shBXeSCSQr8ggB",
  "key41": "2NXGubP2BV5qkLeBFAvgu5gkvuuBXXm7bqZp1zCZDQ5TVFhExLkih7BDiSQMwaQc6c8b3aJWyAM7qWjGWKtrJ7tt",
  "key42": "5x6gipS3uU9aCgQsGipBUJ3YYUf3bfgrnVCHMEHya8CWjSATzPRk8L53JoDbanUpkD1uNadsAp13ahXggGrWM2bv"
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
