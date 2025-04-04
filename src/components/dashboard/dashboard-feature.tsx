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
    "2zEAi52W2YYhF6rBz1TXwVxggm1gGXPDEhgt8QqtfoVs7CvrbesiakLv5w6u1BUnGnP2N3rtLHwkSGVzFM3vucx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31QnsZYpRpUQ2JErvzZuHLokt9hw5R3xYdNM79SkfV3oauqDiakopbQLUgeN51wZSdCDNaVW8j2Qvv7CMAyqeyKp",
  "key1": "4C55hvgWF76zPCD6NPioqL1HJPjRuUcAqWX6h7EZPNWDDHMXhQDGCgQ9SgohvyAkxTL1sk6RaNVk7BeXLtg5UmvW",
  "key2": "7YQWb8KPvaijzzznhrd1YevBj5vAba2vKMJjzCHfgSAMiVnchqt1zkEPKdaedSLFU2JZJY4rdZ16UdhycnREiUP",
  "key3": "4EiDbPYYenA7anidX362CykgxGTmpXjFdxoRj8mzVeEXgDxQgYJDTFFFuZsRfY64V9S1ZFK9MMVG49a96GLbd1XM",
  "key4": "5EhF6TE8HR1fm5Wf9rLUWYCBkdRkWMNJ6epAwz61BjrwHkaB9PkpD5QjAHRV16KuUpJsLWQCtYeGZ2wuQ2oMbsXa",
  "key5": "41MWNgcfLdtS67vUur5jCqbtzeuiPNeMMqeiZA5Jnw3paHMjr3KDnUGFBAfkN9c2r7cXPFTbkpCnZ314xeYFUACE",
  "key6": "552GyZeo1tKuybUi5BRoQPyiZNwdifMiJtcKnH1xQSxurf9ueNaye7CBXiykbEpM7vHUxccLzTNGFzxegR27KLSk",
  "key7": "2DtXoGPD7YMiqqX9q7bb7Ux3pjBf99aHieoCKhUE8BbDXgra5RRLCG14FjhBmZsjkv3Ssm2wAee34edxDciJsJFA",
  "key8": "3EV5GekRLH2NW1TBAdbYV9WFHzVLM7eoAsnWTxDMJshzxjm8nRrtpDNvFWPPir2YAb68iqSjkMmgfJzJTmRPAmhm",
  "key9": "66G2b6zoCN9WeKJF5oL7PGfiop5WMu948HtmasQFWs3Qr6cGH7KNiV2HjUqixsDdqUL3uSKKrUWQtp1rzwEY6zfR",
  "key10": "2rE3Yk4espBJMsFihJHo58vSpr9PsnpzWUNTZCjpT3QeMp4NBb2VNkqhU6kZSLyX2xDjXfrSGe2zFNYxQKC3pjmx",
  "key11": "5Lgx2F8oyS1zyC8bnK7sdmZBEjU3Ez6HBSZ67FfrH9WyB4jY1FCaAxP2mkGZTHr9iSp1tx96mCqA8co3EtsNfEyH",
  "key12": "4p8httJ9DZLM4h2pS3DJH8oyGQecqEtpX5pKFkcJyVwq6ZshVkvgqme9papAdye5QfFLAsg6NN4qXh8uYmiSA22B",
  "key13": "2Vrt54hmdfhatBKHSWdZffeuJXA3RLHD2H4ZPbUV69y16pP6PuZBXt8iV9nyi3XvkWCv6s7eppwdqpgd3ihKCMsf",
  "key14": "2xACKPRFq4aLSDH85B7cemRY2Sx2Sc28nSzScaxXEkDFyGrZyZpFn38Px9Fu7E2AL6SkiqW1qYQVyLJr37eEbqe9",
  "key15": "4hnUpbkCJuAcDXbxStcKbpUUBmqiMGijRuDwMXiGnWJLZTnfsDJ5M1o9xYtfZTVNqv9hsoqSq913w27F5qGbMMek",
  "key16": "4dx1YJY7SaADtUuh9vtz3xreSrXzEJEPMA2AjZez8T3VNK5crpLLyRZjPeeXDasHKs1s58kXg6WDZkBNxYBfMvRk",
  "key17": "3GRCxHr1sDWNTdSfGDMn8TNx31JEQ6Bn2mqu6133gDgKbKT2gh8wgBRfc99L4qHf1BTug66K8yDPKFG3uL1puCKc",
  "key18": "PtvLF6xCezdShXDUbKsSqxcVkpVWQ6aQQt4J2VGD1Ctv4d3qXS6LRE938WBj3Qs8cVw3qSwAeAuwJJDjzizop7X",
  "key19": "4HccYBB3VzS6F73mssDkR2fgB9EBHPQzLJDxs9Hv4YbfKSxdknxsYqSDd4Qx9n2KK8YUHkyuyP5CXGoPQUGJJK8z",
  "key20": "31xQEE9aqm31QPrFbBqvmFq3FsUXXumyVhvA1KcwGfby34C1ianhAxsyDX27PEpuHjmJfwDpXUDXT1mRpoWE6hJM",
  "key21": "2c39Zsg2RVqhPzJ9YWcdoa3tNeSS6hvujn85CCaNwUe1RUWoBCVrRZQFPDXqJSvCZjcHMoN6cSLs5pCAnyBzDKjj",
  "key22": "mu7d23VXAJT8ENeWoExHNu1poVR2gKQu7dmq66Us1XHEBdfZsttB8J3iwPyzD37NZ2w9VMbBUqX2cbBiRTCUrZa",
  "key23": "3V8Q3WkHyMxt2YCK9PwYtUGepySVJq2wddGAHzDzYf46dyawtMCDnR9wMgybjYwY2Cn1HbR8Dgygnff22RJzAhJh",
  "key24": "2VzbJRKh831GU3ymtnmhYuq8zSK7JXGTNSDD281zz8bWzUxjhU7vY45zh4JshJUyzpBkd8B1Zz7RRi84YVyKXak9",
  "key25": "4zBBcEQrGKSi1hc8A54j7XcUxSXDYaAc5ZSJbzkzqCAbS6iHsex4Wiutn6iikcVi3MSA1Y5USbVgqUc6uh9FxbfR",
  "key26": "3ZAXX8Wa7DS6VSS8hoeVP5BMqXXeduxZPWrNRJYuay9B2wd8K2CneGLwd4qmKCHH6TioSfrK7ufCAckrDXMAFPgb",
  "key27": "5xnJMrV4re4HWY4pjL5cMDBWWijkj8uj7u95eMJUhykJVLYWR4fvKEBEv6TJZhzDXwPqTugBCff1JaAo2DSVxRAE",
  "key28": "5d4qBiziEjjurk1k77TfyFc2maoAL2qcdH88HVzkW9WTF5k11faydJ2Q8gKXJwoiX8UMkevdBTMtCCPfvzGVcA8E",
  "key29": "67VxnoJSstv2bG5Mm9LwWvQahKVfAQPRm72wBK72fnGahEyLxab7CieD9hr1KV81wTTxeZs3YMzaaqAvjGAxb4cg",
  "key30": "51w8C7DJBY9TSHMHHqTg6JYyenAhVajiso8f4evcdw7rT2x12dJyb8m7wohAq81WsUuxRz31UV2xNgdnLVmvwjXY"
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
