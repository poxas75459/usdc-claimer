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
    "2NR33TVAwtAH3J4J4w5WTgoNYJLWz73NUAbMm7Np3AYsdmGA6vckfkHR2CoSvGDgnP12bsjcmNCT9gY5QngqrbZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpwmsUtPodRKfRoiE9uV2tk8zES6ABVj99hSp9LWvBmyJbtbLTtKQhScrpvmfXPY4sLV59FGb7f44b92krLcf5B",
  "key1": "2haAtfV6EawUXJh2txsrwtJErhmCKEn6q1ixD8mzzdpNaTvyPEHdvASYsN3u9kdg5Tn3W7cwyEWz3jSRavTdWWuD",
  "key2": "3X3D3F7Bh3P4q1AoMHzu7xf1kRP3xnMP7hKGffPbaKPvjPbNTrPUrdbw8GJd3Q1HQnWKvcnjUWaMkANdH7KV8SFa",
  "key3": "5QwPXxknk2QVicPt8w8WCnkeHKBaLCafnHuFVB84Ty6ehDKLEdbkUeKcwAGZPh2RiCfn4MtJdXAFKN54zGBTcagw",
  "key4": "4ATAix57ssusgNppvNwU3J8R2MzYSmXEVKdk1piAqQ7cPgLFNtE9YpMJCUbNnt5cU6YmdPkdreNnZC9gKpQnxDDS",
  "key5": "4v8FVagZpcknjHbyTAS7PLWWFRwhqwm1Ms46Gma5nEzUY8Dpc9M4vZHgQpQsNaQaGyocB6udvwY2kqyCmavu2cbr",
  "key6": "4AjgchChJjSD6dw27yUzn6DSPHcs5jTfzcau4Quxu3cQiw9rWPvAScHvSkHseMyPUzZzXuRwX1oQikGi11wwVubM",
  "key7": "3TBebVzD1hb2zYYjYGjdp7Xe2DG3boMYi2Nzbn3AjnX4A88VssDwdhfUKRtJSafgDWmA23avjRfzcdEUNEzwJi8U",
  "key8": "4nNQFNy4hUCrSrdj9MuFwVscScCu8xNcmM7NXKaEQZ1w1p54xmrocCL72niacLzy4euUnxpTBDwatuaYd5XNP8AB",
  "key9": "333KJ7Fhx1gM2s3dqcxuLU751FH4n7uNvDYt11bGLCy7fTrBEcVfiZYnpsN5oW1K3HjK6CpKUkREmgh8tpBFMj7A",
  "key10": "6Pftr16cKso4PPBsT4NdQKLWt9zvSyAb97xzZotL4UhCBU1zU8HUZbLWP6ehsv4pf57gN5yQQefWZe2kwP4kNHt",
  "key11": "3MZu8th4gPBSJwFWtn282CjhptabXKsFtstShPzGavVi9D31bjAvY7edP2hBWLpyRzHTjxURnZkvFfpUL9BV7ZLJ",
  "key12": "4JvyDDuNaoeRamFvoeNRfDnTwCCC9uN8rAUgtBGPv78zk1y9Hc2ovW9T4mjfo66vPYCLup3K6YLWgEYAyhR4W5T5",
  "key13": "4Cfapdg1zW3GDiAyZTGPo89dvcU1zPP62gfkRnLcewqru38bAQSXtpikmv8L9UWer6HaWu9HcgS8vS344E7Cj3qT",
  "key14": "24uV3LaBrqPfeeTytbxoc9cMPt1Rjtpznkr8cJKswJtd7c7rbPpY5voingGp6ViekdG7EruVWU8NkYGQ1KPxWPTC",
  "key15": "4GvEcbJqNkQiG7WyJBh32eQoEkHm5vDTrzH4sEEFxthnbwEyiQfscSn9PXougwjovhrPDPuYUGewYTxh36ZBYXYs",
  "key16": "5J5AFdUmzRqGBm8PYN845DAdCRttjV8gAQ9jiysE4D7Ja1QidM6rGHuewaWcEK4ZkJzjd3ofFHXcRJWA1GrYqpNs",
  "key17": "4q9e3cKLiTWFD752WRLgPngEgjgyCeLMkTQojpVh3TUUHJo4yUJTrcvXD7aw4Q895vVHQrLXzC9FLG7rAvHHPWbw",
  "key18": "RyH1tZ1MZvVEAMZ87TzqXDNxRsdBwjuGFhP2qNW4sej2ydVC5ZG6Ai8k1GPnisNXqcdj6XsBfjycaLUad4Jk1cu",
  "key19": "wfS4AjqdaN2NMeNGxSWWNG3Lt9kYWppyDuirHoaLp1ji7ciLyUbCXFcqswEqcmkM2rPsGoH58nTdM6LXnN1EmGL",
  "key20": "4LU3LGS4c3PnYTvZQ1AQQDZftUv7nYrBtuWwixwvbS3imWbjL2pPNwJzvNDvWQTQKzQ7YvYd4D7HiMPTjfxuMgSn",
  "key21": "594btR6jBac6VuUbReBmGDuDboDJmCkZGzvAzY3cNdxkZFLGNZEq893t7Vu4dYXB2D4bq5qAExkYFbLo5H1rtYDb",
  "key22": "37HE6ca2ZvYuJxR3M7VKZ9kUbZqpe7BmbZeGBbhxYfEZwAv1P2sRDpwgHfdNLW8Q3H4qziDc86fAjatCSVdHk7L2",
  "key23": "4q7jQck82wSGq6EgZKYC3ReMFVdDxV3uZF5XBTNvFBwiLqBs37e9L33SsoLW4wpAuGfQytq9EHqhmi3dV6J36pKQ",
  "key24": "2KgoHM3FEfasYYfuYWkQvbwbrwZLdkheK3EWhTnqguGoSKSX3AU8Yq5QuiZf7vhnCZef9MP9RESFvBUBTgwudCqD",
  "key25": "4JAyYT7eWVvjrFJQQJpYmbEoLtX3Zpa8UeRAGCFe5eP42tHMv5M3zCL6hc6HjLf9czzmMpjYnnYBQoSkTuzADq9v",
  "key26": "3cHzDEK5tFFmuqBAs9LmxK64Takc5tW1qfWaFDaTjtHfGUfhpkebDQ6QeGGBw6Hrtjtj9cHLruVA4pNMBZJooErc",
  "key27": "2PAFYk9tRYcr8yRzHksYFf3kEv3knZvDvaQNvUUycZVHncN62D9jKk7bH7qX784fR8U9uYTFNZR6nUAcsn2KwCmp",
  "key28": "5z9yopY1TTZBnPPxnHRaQSjvWhVwBtKWx3cfZbvRJPK1jWqeg2KmVsB3hjDj2PtGcHzdej3w2TDz4Z7vYjwCJG5P",
  "key29": "6fEP9emau4T9eqszStFqgSQFaap1f7q5aP5bEcjZaLUmhExNPzXQQ48hDh3mT4DwJvEpU4cEy2G1qFCR81wExB5",
  "key30": "2auhjzqhTDEEsbFZW3meSKaJJ7eHePWbg33GpyUvCYFQc5BCFTgVWUyDPGSq8LT1CeqW3FucNS91hmJeBTtRLtSR",
  "key31": "3r7AQvwXrnseo5n9biHo8qmsXAJmE6jAiicnDFsDM51pXcWvbozzsieSdwUdj3dstFoxvLGMMvok9CwyMewgSxYQ",
  "key32": "21mP5sgC9NtkMUC4VcseXve1UhkdcjdqmBYehJ8zErHiwMBybCnQmnqam1gkvLcjcM48h4TFast44wGTbE1ZT31b",
  "key33": "5fPA5EBAAp1DPVgDL9XSngMupRFUvDo9wHN89z7FHMGSKr3jU824sZQgCbG9vJ9AwFQiWQnko8rdvB3x5D4TnVHw",
  "key34": "A8fJJDhfe8MLfkiuYe29CgDLNJ8AxK7797ZJ1G4vd4SCSP6vgXvmLQEyprQqu2Bd4uRW9hFbpcEbxUNmCjRsKyW",
  "key35": "5ogs26K6M4goVhn3p8tN3gEzWsMBYKxcs4Qw8ysc3nghHhvq2JZKZtCSZKss6XAvPyKWaPgisdqTmThvPL2Eq3Tz",
  "key36": "3qcGUS8sfmeZCtxEsA1gNhbjrmM6VSAYfTcX9mcwZfQUkDKVkotNErumeywAgRE8PF8RT4UBo9HYFFQmFXRUhvCb",
  "key37": "4TtGfcn8tFt6ryM9ido2ZeL7WWxyW3uqMZWbLcGirJuRdzzkb5auTeeEYkGbxKgZvnFre5tmf3MiSW6RVeSg4RBn",
  "key38": "2hYbod8SnArui7WYXATtZXRbZCpc1cVgTpkekC517wUfp3vm4bzHcPEQJzkFmi8QxDUmyQvY7AUECgfqfMgRYcsf",
  "key39": "4aDaqzvgHQeefiYBUKBK9Kp8bayGRUy3fY4WCXZ3WZAESu3A7noVWUKrGAcJQfewPqfSrE7kmhbcfT7hfQz2ZQum",
  "key40": "3qNDkicyyQLoxvnHUqpEayqHsTfGWCLHvBjckpzcGqT7EhsBJEuV1tANFGgrhiZ3cEbPBqRjJ8wzrTVPYk5zgmRK",
  "key41": "3CsxdhM4DZmKWuhT9v7UdowCiyhEXv4WciSqH2u9oKzLtmpbjEgYGEzPro2GRaowkXWKwyWJhFCUpSydiEhzyUcJ",
  "key42": "3UyNdfhdtC5VHSGycPgh4LYEu97oc6THaeiBWvhs8C8UWcudYHPCWG9FUCMMRUWEfrxxu6XurmPsV2dDM3qAtS2d"
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
