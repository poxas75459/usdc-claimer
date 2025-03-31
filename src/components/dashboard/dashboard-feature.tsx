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
    "5KMc5JySAzxKK2EGjUGj5M3ukjyfHj7NqMeSQvrqfdCpWXhjguqi7XQmm2ihg45GF2La4KivSGSmAxhcGwQV1hj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42UMY1pbvKEdPgPJZY6i1yoW5oPagp3vxDoQFUJ2kcmYdVmW8wPsQhL6AJrtdSYjzCfPyXBmqAEJGreX2Vw2warU",
  "key1": "Q7mPDPYzJn983FqD2bFWRUD7VirRAj72fGdHSphSVo6Lj8fyBwthUSDvvq16TVV6XRFpS4zz4hMiN2vdPnBjbbB",
  "key2": "3Eb2TYXuhHJ9vrRCnd7bhbQVKrgoiQmS95xH8vGQLnT4o8RKMVhDmdtKnCGnCGesooxjoad78jVmgCxmTqxSMxhB",
  "key3": "4vWgwr2sWNbvjFxPpTr83eAJgMTn1voqutodQK7XDffjv4t4BM45TSgggZX6ba5tppU5uftPNoFp7MnXdVRMM4qJ",
  "key4": "4FoBoxnK3jd64V7DWrpyp96Kkb6HJrvtF2TpXZbVteS3Y1WAmsrpiH3eW2pXqA4k6qq9iW3WXcB2P2CYNMBjpwHb",
  "key5": "42S3up6xZ8xc55K1zmW4TRoyvWgsTqfmxAwGxf6tjz2NxGMqBAAytJ2u8cW2V3btgEetTeguzk39SXfBvLfikptq",
  "key6": "3jRscs1LwBjtJSTsuBKrKsYBxqAeWZgLgAhzCNQGjCeSEVMjQj3J1vUQj64DmXLMgXVL7ciYaGiryTS2KkRRXZn3",
  "key7": "2Yd5d4QToWswmiQYhWcwsC4SrRm13bHZc7YBnMUFgzXii6NdhBYa56w99uaRJ9sxEf5ZxdiCHGTzbQhr4puWm8Us",
  "key8": "5yHuWTGUwpzhgR5sQYQZMhk7HqTTpx8wURdoZ6kESWWtLdqAUzo52uNr9HDhjiPmDkNjttMp37xfwU4gcHRttwTV",
  "key9": "2fyeDssZwVTMGc49kRVUyp7gZJBvNkTUVyo1RySgcZHUPTKu3stogeGBNvnZg3dxW8YN9crEWijSYtezp892xcSx",
  "key10": "2vpnhAmnfAeT5TDBJn2aPW5UY9TBVj9K79ZeDSc1V75y88SMREdz6c3Ept5vx1rRsBW8SaYYTB1ibdnaMLBLe7FF",
  "key11": "63sRsnj9Srms9abp81vtuEVdjz3BThnVchq7vvqjLubajuPhJzPdZzXA5iDvdCu7BbcUG4KeqL2qkkhgfv3k9ALY",
  "key12": "36JB1iSwyJ7Mg9S8BKuZFPuwekrkEfYxinpXmUffpC1QzpJTkcDP7t4di6pWK8mD3Qoizj6Mxwwsqxf9zHcoHrKk",
  "key13": "Ym3QREiLVwSPZZVgt1wKE1guDikJZfMRqfkUL34LCYBEaZ4mxYR7VnBvhiKXLxd5KfaA36KBjkeseFBJgVdMkcf",
  "key14": "21MiBm6NxmBFsDx2YiXHHTbaBh8V2r7Y3NDgcZ4LrDNVJ4gZpVST4CPVLwuCNsD6taUDRcsBXBXJG5zNYYhyUxXP",
  "key15": "56SQbhSgkhuq14hnGcT4QoCRDXcE2zwaN7CzCxjVjnS1mrB6iVreytCFDGiWKu7Zx6rr4vQJUrfg3KZAdPRAhFck",
  "key16": "3uPH6zCD5WoyS26TSL7wGcHT5jw4knL8p9JSgYn1vLXHovwgHDJBb1xi6NGUvJoQad8uYYjJ7eaAzsMXxWih2J1Y",
  "key17": "46RRDh9uALMcQzkqV4NfwqJabppHzLg3BpiLQxtqCX3Zdhwp6xcDadhudBT1rsh3ygAkzs82mu6tRRLvGhgD5Ggv",
  "key18": "623oyp3Jbk6KvThGYU8ARFTajEGDhiotvac28W3ppXBV4px2RW4m7ogAATVBCwAKsGULY7KhzYEsMrByjW6F8vDr",
  "key19": "vPQciMU8ZF5qjHNdDynaDbut1J89juhDFS9Z9Q5UDg4nV2Ksk23Und1zAw5b2o6qB4WwjYgT9vbaDzdH9ZTBWgK",
  "key20": "6HvKrLLWU3FX7RgsmcCveVi9a7WPmyA3uEBjEnchAvmZLwgRC6hKgQtN1kWWCXMNVFhRfy8wKu5SWpytzBD7Ngj",
  "key21": "3YV5vZ2zSaCUdKjPMCCTEa6tqUH5W77z2k3yxyHsvWZBv6VbFoBEo3e69PbpAY2K8HtFhCGfj9dshM3ERQmBA3qt",
  "key22": "3SP2v1VtwSgs83ubm7ohF2VeQj1Gh4yJJFrBCWAQHXnwRXqd3WHitNUAB67MRauPnaiEiQqQ9nhau3wQBAVgfmqv",
  "key23": "3KRob7SYpSmg9HphZF5RqUc3BRC6nLrq5FCiqyRgdQpEvvyjowfxuvTqXEZmQ6wFFdJQGVy8nDeSfbSXDwoGKjh7",
  "key24": "65xfPib8kGrDXJNzxRkHBtUPqRHMPJ648q3rE4nTkvDrMenLDHucuteAKATXyeFhwjqb6FApcHNC4c39WuPbqg7t",
  "key25": "4zrzAg3kWFu8EoAj8s3tiK4HJEbKrCR5DVYVFemdFd7S6fZgS3H2FyCMAmiBkwcmEMr5jfdWJq6nEBABYgpZn77y",
  "key26": "3TQmAKqCSgGVW1AyYnsrYVfCBDFUV1gTDy2SygjM44iNxk5X6Ait9t7P6WtWZkEtQp6pyCrT3aGBF1adm8ydFKvh",
  "key27": "4Mq23nPq9XmmGiEu42wYUaqYzZ34miBCvn4XnEyGv7JL5M2NGoy8fkUY56KyqY9Rt2Yq1S83M4aku3Y6pCmzpfZc",
  "key28": "2MWDufgn4mqzdAmWes6sSouLgMv97GGDJkm5CoMGJC7pDMjj63PtaLKDyrKXmGWCM1V8efRCSYLpPa8FhZwLCTVB",
  "key29": "9nEqQctTa5L24irNUj3BUHmFQnHUjt9J28HEhX5eDLdT35Frz6wR2nbpJu2GSSR3fd2hdjVPefDHi56fjR7CaES",
  "key30": "3BwJAsUvgd3o1g5vonRf8z1EKLAqowspRrnygCHM16gqhCzcVe1L8SvMDgCUYH7tt6GvdTPxQLiVSjF9gRSZCcbD",
  "key31": "5yxpvEaH9LzHFDHgYTa29E6JZSEuFyWeRvWvVKTrzDMPEutrdzUxtUNwTTzHmHTfnMN6sRy3gyQJsVB4Y9LcdQu5",
  "key32": "58aL1bQ1YpouorgZdvZNEBkHkrbbghrb1kmpnpVaQMKhjour6gkiEDrqwYEWZKmjay5worwTJ64L8FcQ5EfBiWJs",
  "key33": "4x8eEA7RNWUus6PTm4yERarc94W8V28KX8gDTZD2yoGCoh7pUBswCqGZFQbcjmCrdBzyRjfLbPzfCBpWToSQSBZM",
  "key34": "4oVpdsn2DWCkFXXx1jfaAAVCrWPjMDNB7UqdaYgXiK1AREvxtUbJu4iXW46atMXXf9yBUB3BsqtMGq5zRpZCSi8C",
  "key35": "5ky7nJQXj7dafQWXcT9KBwPe3DedpnfdKtqfQZguoo3bqG5JddnnHo4xDu632f36US7oB4weHfg7KGX15BZXtH9D",
  "key36": "3JvZY4wvU77UQijMLgptMQELdjsjgrcE3KrS1W3L1cG4xNpFUKAiw7q2vFjmgtTVGrF7eFfoU2cEJUWQDS1sk78S",
  "key37": "31os6yAPZGpuSwYdBLKLxy8Q3pR6VXKQ4btf5V5dZ5RD4G8DdMqAGQhBGucY8mZ2tRrBnLw4paX3us6ayikSGUMB",
  "key38": "4BcihDPLCZDeVTQ6rYckdyWEBPGPqERZP1gRrDf9cvqERAATdAw4pqoYWJoLbyfoYN41ePkTDXk4YjrBLfaop6Zi",
  "key39": "5aj2QtcaWUQ3xUiTYd2CXMi3o8qwcF7jZ47SLt3WQAPAfiHZ7SCixKrPZbeyWKH527Dws9Mp8TEiNPkHBunFEj4n",
  "key40": "5nvUkrnw61EQQoUCHZE7nwZJ3QPqnSHoATGGgUBd8LhKXovLUtesuNRwxuPmSbuQgK1Ayj3VkBzj5Z84FcVQki6P",
  "key41": "2T9thYW7QzmECtdmLeyA4SefnVGXpwC2VxpFeKxv8vJhotxHiP4SYJYbaNBBAfKNDr7rgsxXEHUYYRViZhsRCof8",
  "key42": "2bs8Ny1R3UzWNSx8uRTocX2SMw9YHYKWE2PiHQXjEQHqPQzicnZCARSXJAmxu8JuryqqcnmZoJ2EN78MjyKQFGDA",
  "key43": "62APCJZPb4tQMxFPzQ58RiJvWMV2vCRr5PV6tQMd1pNCJi1kHfcZu3QPaM9mHJ5GkF2ofk3nmBCDsW5V6jeSXj2C",
  "key44": "3xFQRJLYewpMjJ2SrEk2ZKvnKqrVwA49iuvTtTDoa5m1ftpVa6rQEucuBfuL5BWFP7NK272goH8fU5FLEaSGaJ7i",
  "key45": "5ykFXsmVCNXJxtNPfzGf2hUtfaHPh3wizifibeadijKQDJ9YucPKyE4sdXgBH3hBucY57DnjgNsUs5GAXyvtEWYz"
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
