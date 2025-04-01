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
    "3xRi3jyNCntj7Q8p3ZUNGhW4HP2FcaYEFTLZPSCCLGToCqamrogfLqEfi4TcpMB6JhRqWkNzUBJDQzMT4bhmq7oJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LpHVx3FYWTPfTZiBYsYFsFoHWKS4ppQLkK65SBVcnd2Cz9cKcvQy2yfZ6oRp3M8chkYY5oMqvEaWNpuMsvQhtbJ",
  "key1": "1XZstR5CTWLKyku445PqyT8ETwWf4WDJNae9FwcwxCvr2LPMXM9DXfoTrZhQJhaE5kDfr7eyc9C1x69JdpBQt8s",
  "key2": "4A1dHX73xKNENWjWFBnobkc21BiMuY4N5pLSTqoi2XUXvxJ9SUY7PfBzkmGrDp3hJdAoKGpZVcCD7BThp4buNA3Z",
  "key3": "sZAzQvUHwi1pCTCuJZc7UWLwvQcLphDUgACGE6Qj3cNung3DCpakW7R5MgX7S6EyhXJD9Vw6LG9Dx6RXVQbxZdU",
  "key4": "r8pWjPYZvWdoYh8j8oDxWbNzLTH1jd6dB57H1sXS48MVihyaKYf8eo1kZidfjZ3UGVDtu2a1PTWh6a581Qbchkk",
  "key5": "5GKeY8Dyn8G54co91tqMiipjGRwm32Tdhkw92y42RQ4TDRp6TCR1ZGBwZwmxdowk8oKZrwXMuKcMGrHDtwhtwMgQ",
  "key6": "DrtVoARaT8FHk3KPz3EaW7JcVUef9ZuacUnHfgbR1NvwVqGsg21PUedT6gQ8jmETg54gJrKfQjDkk7iY9vsBLDV",
  "key7": "2uRTtn2a8PuovJGF1xBAM8rquw1UAy1nhuH6iYAUsYwiohmJGkwM2zH19hZ6C8JXizhnK8UNWRyawq3hirasAnSe",
  "key8": "4TmiJnoAHaNEUDoFV16ahf47N1f1CprcCTuSSzizoZhnwFLMu1KjmC9W9MbwagTj4o4wQDTZKDGG5xrx7eHfKLcE",
  "key9": "26A5r5H6VfWuN22pngdMHWDft1DQuV3nL3j1uBg5M8gUBmKZN7jgAkHFZuoAomP2M8FhByZoMnBRdRwhdPFti2Th",
  "key10": "4qP7s3oYJmE52a2gB3PUkbnVdWfjE7MfL2NoeU5bme7PHhgpd5fNvPSonvtRTU7ijVuvQKUxUTPdttMgzXo6phxE",
  "key11": "3VJFbZ6WFs4sj7p9VhfUeV72ZTzT2GD3ZGmwa4yKfyLo1hgLVgPnwxPouY4sosey2k5H3aeWkX6ivUgbpjQ8Zzbm",
  "key12": "EJdEfkappdNYLX1udj4Z4G9WkBVrxjNAafpt2cffPc1z4du3pkSCZXchCm5HF6d2YHkf6CEJu1TVvLy4ctTGtGx",
  "key13": "2oL56oFUZKWLRCAvckxhdZTrFCBVyQRYiJe5Tco5HbwXxKNFHWJ3f3yn3AzxiDug4s1UVbCPhpP7xKaKEQBx6DjA",
  "key14": "zpcsFY9KrHvftCwYC9aL6QyiAUgxpt3GTiL446YqaSqCC5KMftVPtoBb9RirkpNPmCaBbvizA5nEUzKHS5iSWiR",
  "key15": "gcD5jugW3xMjphu8Sazs3ABbBtyNdxKqXsEJjwzUZSNGY3oQhHfPxxFyQnYFsU8Es8iS6xFNd4bVs6fqEK8gQao",
  "key16": "3rUDDZkiXHSwnF5LkBr9GrEtYApFtEzYDvX1DZYcFQQiAg1jHyMqa2Eb1f5Ka5PQ7XvRtwytFu4EcnRmN5urf1hL",
  "key17": "4sPYsygFy5GqG5LkDXHYtgjBcr4Q42ng6rVjpX5wQp5YdMX7tr6G8AZ9yBWTQz7VevDifc9UeLG37fgcq5nXfTGD",
  "key18": "3psHG5tuEg1eBeY2Mu6AXFZLWhVFEgz7EWxrHH1oUhMiGJsy3yfG5rrYn1SE7gD5aHm1E2w6rytHL7kVh9te6GHs",
  "key19": "34SUvv9cwvnDuqcSKwZeD7F4AEyZsNpCTDfvwsGRZVN5RyY2G6ETPGnDivxg222w4YiHNgq6jJtDsEcgvyZxYkSY",
  "key20": "4C4qACYfmEdQHJcsn5aGrJFMM7HGGoPhnbpJHNKYszmYgqN4pnNMbiBWvKisvaq9J2C8ztaBQR46jYLpjp4Zuiqu",
  "key21": "4yhapSHFW7uZsYG4meVK1VSe8zbcU8CvetBCiJvfnvr73YdQEhCDu4jLscZ9ke2fNfdjzV4sU7yshz16PKvq4EMg",
  "key22": "343dmcthKi8nQMsay5YhrRuiGEqd1hCCkjYaDG64vgeUPgEz9XNqQ3vxwtWHwA7YspGcLJJi3jDoXUyUgAevnETP",
  "key23": "5B44drFPbZCbtL1ACFwgiYKBbLuiSbPPzKFjqoofCuM2SgxCwqTuxKJCAFhJMGaeHRib4upJccFJsrJfMFurbDCw",
  "key24": "4UGUcbBZHUmf5ugJ4FwqSMqv7s9pFooPDTnyrpWc6eKuYhDkVGmtjHyxuccUEFuDWP5bPJQQgygGoutrxNrZ1cop",
  "key25": "5AGiBoL77sb5iEpYnZ1YDL5WE4GZGVN4XBBD25rRALUE6YHa8Qeb6QMFAvTkopTAw2Jf9YPrWiePyHxw6dA3V4ew",
  "key26": "4uEvWf5UQ2vUZ7DyimP7rEj1PawJerR4bv684THaLprGyArWnRKS7RSe2jmiZq2Up31frcoghPScP4WqudaRbkxk",
  "key27": "3nTUg1hNjRLsS1WjYR3ZjH6btjqKgDazLHaHtn5FhQDvMtBLHmcTEbqpMUycAJV6tu6u4NEcJRxaWT443fNEMeVs",
  "key28": "5oWQrTXynL1F9K3SgBACrS9c85bzWuGNpQ7NXfNFQXdS1wPGaUzDaFt3Pzn81r4dUWz9D3VeV2WXgMr6z7h6JNPK",
  "key29": "5X2Hbywtb2QSZiKVoCFv1poVxzepdfGVZmthoKvb16zms23xFCwm6ARbWkjAm2ABDbe3TWVB6rc7fgAHS2NtAJ7D",
  "key30": "4gz2Z8omFEf8gTfqzoKfWJ76JKHQp3WCh4yvBgw5uJYqbM45xncGaBM73HqTcLiEcqTuafY7eTZKJ17fFvgZYogs",
  "key31": "3hw488x4VPKMd3kcPBBjJiSys2LZgee1kbMXEHN1VfWRvVW4NyeJoaD5ygwQEEsE3ZRDQF8d8UF6cKkpuLjQzbyF",
  "key32": "oL1RwawhieRJJGvEh62huPEav5TPRx3WVSnHbvvqpDHAcWTKUKXWFNGzKheUUQGZ3DcsbS8PA31tETwVHcwcejC",
  "key33": "BAvUW8URAHRggEy1ZctQyuXfxYHpBkmmGMQCovN5KVThE8kPgexSsKz58WCJ59gxmp5XDhbtrrMsrpcNoLGAAev",
  "key34": "4uFquLaVaQhitfAvLxmRK8anj83q6E3bcARjxo9T15NXUipDgMpeHq78roBtFEntS1e3VxUQeBVFLaNpGvrd7fRf",
  "key35": "2T1yAcMvj8aeGM519XoepqNsfqC3hiwvSmqp9dqXtEt6z1WYKEzJbNbrwyRKFBaexSFkNEnX1FqWpaagZhGJNJCg",
  "key36": "Lf11aZGL1LUGymyfmZF67Hss7nGxQ5pjZQNmgaf1RC8wgPHtaCHXV6Cb6Xj7tLgkwxzaNPyjvFxX94EiRe3UxJP",
  "key37": "4qYDLsJ4nRTiRLgCjZzDxaWgturxPgzZ3rgYo52g8jVVNR5dVR8jzSLjf2JbH1sbJrGASWDDF1qjWYSWSVx4fnJW",
  "key38": "3hhutResnXAmxj5YfDgs1GwwewxVMTQY25iZjwujUmRgHiU4rcrniCjQQqkSCQumDA9m7W5ViVbcA8ZnzS3UeZ2M",
  "key39": "hNsPPh8ahbo4WKeimGSnbvrWayrQfcevcmfFatuG3aFTfgUB6hStztjhF7iqdqxnNzMVN4v9oZc8wEw2uZGBRZD",
  "key40": "2gGL4EynH6JQfkvj4q3fqMprsN6a4cNwCqbvR472F7Mz9i3HRVGNdjKSzJ4u4vqwSq4KTEEnhitGsiiN58TS8dem",
  "key41": "2ChTYts9CTTKri8x27x9gbxc8oB1Rn1HQRNmgLWp9Nu7JpZsRHPXCSgxSSbbxakMj2vnNXysYR7mhFJ1mgeKNf1b",
  "key42": "4hq4XmG58u3WkAQxKx2BxxTQVdw85raqijbkwDWyZb9JBKkg3PpZSYAnwCjviDRadCkM2SnYPhUs9nN8c6NyYAgR",
  "key43": "2JFzZ6YYcKX7GpcKhUfHsSQfureazed8bGdnwhJKvPWBvBCpMXGTuxCX8qJtUoxUmBEGr6oeekZAQcQvUhnEJru3",
  "key44": "A7uECFShxYMAWrSp4TX5pcxwzxzP3agkGePkrdepdixW6hKaxAnoKfejhvjs4Sn596hqGxz8Y8mUmyUvJM9KF8P"
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
