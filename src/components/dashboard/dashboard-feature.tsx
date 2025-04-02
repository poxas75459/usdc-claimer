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
    "mgZQWQesss9K88tQYujCdncwRZU51yhb516e7MHaBvFcGsrGQSFmGALc7EmmJpuG4oGd4C8ZXjbR5FddDDYe2pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AEHGgXy1GEzS4exeG65xJyoZbTq9vtnbvC8Cpw6LaBTZ3B3vNiGAPLYwMXGAFqmT9uNCvsKrSZqNvjcaBJLdrjq",
  "key1": "2QDhZsVrmZoREJLTVbWcxWvPcdE1XGPt6R5oS4URWPhVKQk388nZBYPUZvj7AWZWYZ2LTTX4jH4EFkaPBFn3GC63",
  "key2": "63Hn3eS6ty2XbhA8LLT5BSJyRcRnAzJv9sqUw2bDTRyFQJ12hBfTjd8xqVuNi2uE9zLukbsq4sbYu5s2PBqcvbNy",
  "key3": "GbUv2bH3xSHFG3jY6hD3YatSpa31eziEgfz1dTYwFK2UMBUxxZB6Brmbid11uXgW1gJHgB9qDbZ6ps4q74fVYcr",
  "key4": "2WWGVGGMmv7xFxssPpzhJvdmUcvb18EXN5ZQYuP1KZsU7JVeciDfS6kbLditMyZLkzBL7bp7K7Q16w7HEStpmCh2",
  "key5": "urBx4YKTM6FHF7aWNu7KMGJ7hf6zbVjZhkTSN7z8vfkfoFL4vPskT2ikeUU7kdYu1ZKbweSVVoRdaxoVcANThRB",
  "key6": "4qWXfsbk7H2cxNtjmMmhJHkQE8PxTph7ijV4bDqwZyPoipKFf2Ff9TVUaytjdYXXuy13e2sNa7pQJJjfMmbspT5a",
  "key7": "JAkSuZo5KPeYoNTBB6as8HSwPksmSJmzt9f9rvQiVntRLdYfD4MpN8VAAZ7nq73sCjr2cMGx76F5aRLTcpzzzu9",
  "key8": "2wy3TwiSiBA7VCtCNYk1H834Nk8m14exr5HRGxQPbRzevS84AYcUC6pmGhpb2Um22KbYcSd4G2hDpGF3SLYQErtL",
  "key9": "3VkMczm8FPRUoszb88JDejHfkY7rR4fqTQoxh5jwJ3S6Jc5KtRreqFMAi3RpRue1ixhcLfEArhUMw1bcMcT9ehzo",
  "key10": "3J5PDj4x64snzksGqGPeFht2E3Pt3h9pbzRFcCwiNsDwUxoG1i3xguNKcisKs2MtfXLoJLKGtipsku2Hkf4YGDaQ",
  "key11": "2UJ3L1WkBF6R5XTtXinKa4JMEneomahLcKqZxDw1U1UNrLCwRrgHED7JToxZPQWQvQvGJNuPWp6EntzUeWxFkVjg",
  "key12": "2GJQNug7wv8179FiGWgVcoJceA8c5hVKNrSGKJfHvdNU7NfGpujbfk9su5wTGCFcjD42VJzPExQjsce1B5rNpKvx",
  "key13": "3J9EdUBDE4NQ6mTpnegMKPeU4u5d4G8dDjHJERV6ASak8UznhPdbin86Qv1mtbp2GpuuKGwxDGbrPYqhG3D7tmZP",
  "key14": "4gEQTfkVSCAFyvZrWWZfn6HA41J2J1CjeUxBdmYkNAJnqBrf3yAwRHsGZmr9D2s2nTKf21Ccwv9vc5pVxNAkYPna",
  "key15": "3MiPqok1TZw9ZsYqcYgXb6JxYUTYvxXrqpNgqyEWbjNbvXTS5GdxoYkoiT9itTtQ3UmJxjvnJCaWM4DTHnYjKaw3",
  "key16": "3HhXDTGtvxdkGwT3HVjL3ZLCVAq6E4D6CcrV2Ctp7ppsAp5AkBYDumm8ddPPvSDnnAoCyTt8NTWbwHvvg8pL5BDe",
  "key17": "2EdQTHufEmqYUS3V1YWK7e7YUmLnMFVtA86r6u81ECBKB6GfW3iRtjvKevWrE69YC9cbyqqsCArs8ofzuMVqEcaf",
  "key18": "5eYWzC7zkhbuufYMLgMD7ggU2XDujmoPWbBM4TAosL3Vmc1rEQeH5T6Ji29UEx5uVqJnzkSvnqeuL78UTxGkEERG",
  "key19": "3k7pWKMJVNMbhCUTgYoeCJmeTA7unb6n29vxFpQZ7vKUtjoknBaxsXUWzKnYBSWS7T8LnbrGjrm7fURdccgYi48e",
  "key20": "3sJwfpZhhHACirF1rXFSnGt13M49N6HZ5LKzaqSCk7AUT4z4d3XjPpRDD5uuGL5XFF7Q75fwwRC8eDL5fkAgQzN4",
  "key21": "HkS4JQ4FwNtx8ahaKY884TfBtGcpawWWL8mpsJLDTB6WDTGxxH3BfZcySeYt2WZpmXwCMwxQwWQERug5xirPfnK",
  "key22": "zQFw2qSWSnaQohKz3gf9g9jpnD4JHSRqero6xVmrYs59SrpDjRYZRkU7XGFk4hAbBz3xFHAJ8VoWwTcXczqFrb3",
  "key23": "jxTMy7XEPeEmpP9AicBdSZ2NcPQPjisSvHHjsyDQzSJ7atttNZ2wnWrvtenEKtjS8eEMyrmVT7t5pDAhV5ZkPZS",
  "key24": "4y9exS9XA2jxgrxoLc84w2FeyHnGsbE1TZQiiEXVbmiahJhLLC2znZwK6F9fhLwytiVcj7HnV4udwzX3x1L77ugp",
  "key25": "538HrGq1FgSLaa2bDykPxLYzxGCNvFXD5Kiq3i5WPmTWzfNAuM6xB1SuxqhvHKm3Vjt376wGaJwQDDFHrLEGnXXB",
  "key26": "3QCYXXGizPJaJcp1nD2zxNT8QFmv2rpw3rnEmaNa6zSijSkE9qSVWQ7zVRjGHc9NS6F1fRcH4E2bSDGCzzCKrFJP",
  "key27": "3NFuwXiVoSzfVjfTaB8gHm9NkUpE1F6PGWrtkEyrn678FGwVe7afsDkzWuyyCVXPosryQNcj7KBQ42RRZCLJVKSH",
  "key28": "4kbyPLYFcVqnt3oCkBedRgj266HNaCHxgxZMcjfnwts2boCAoSrQLR2zC1QdFysXj4bBDRGR2ZcTJPVri2McxbpC",
  "key29": "5mTLXu2C5uKaDuLRfSQSbygsKbZxLQSR3jEuP86kqS4LTMMDqvrrbiPf5Ltid193PYobasyHQcnUgaMb2B6eJuge",
  "key30": "35Ca178jvATnPi9r25RTSMEJAr11MQfgFEbCEeXisXb5w95munMicLnic6s6McMD5sW2KgZVGxb2CDWtvtdZXCmR",
  "key31": "49AYvuVYAqMGuUrfFg2ux5aymUQrzbCNPZvJuH99BkYbexiUFC6hwmCoMLAo4P32MF96XL2NvJENC4oAj2YDY3u8",
  "key32": "29S2vjWJfC9yDSH4awN6Le2njmu2bQd8jZgN82wQPEn37uknCfvyXto8Yajx4tswRSzfQQn6pViHbSSUedSgx3Fv",
  "key33": "4ZqDVEpqFXoyvY5mh5C46P6NVK75XzDFtJwFJL9PsskLKzYJ9KxjYQtyXtUmoJvEues6v7QBZMkM3ZZ68gvgMUbN",
  "key34": "3iAVxaN5p6Qv2SjUsjg46BJFmfTuhfZ5mnzGQpPMj2VxHDqSbsLwh1U2RsiHy3pBJCmqL3izGAWH5pUGBA5cShU6",
  "key35": "5Xbkq8pSPs5Nkp3YZZwPeGW7RG82ABTyJ9utKRrGzaPkuask2tCgRk4o7jTDbhcWrzuvmgUEhEap4JpG7WMUDnSp",
  "key36": "26iFMYZf2iGm2hMfriKoahLrx5tWS7xKnNMu2rvhhmzNbigY8ESg71LZXAmxSJg29XN2vT3gx3Apra2Un5uAJCPp",
  "key37": "4tNen9h5Y3N6g45Mf3VAhTQenfvvDuUV9zCrAqNy4sGCEt75PTr3BdWeutWqwiwj5hqj7n7k6xwTFbiq3VkeQhMX"
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
