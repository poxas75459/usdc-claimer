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
    "3vBAzQUwDnVhNCqonSfkVH2Be5WuyLkWtECW38wuJZcN3CkwprhQU5zAT75Vx7n6moXPQKanZbaJCcAamk1JUreQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cJozH7auwGtg7VDGr66jsESrn1EamaXWDwHDVhFquMmprPBTea9CWcMbr1MexLv5JD1Psjj4ozCCtwd8VfLx9v",
  "key1": "48bfSEmbHxcvAovMCy7tzJMdb22YZKoK2vGmkq832ZYkm4FdLfZLVeStWuYt529KekSLf94hSDTVZEns3m4mdTXQ",
  "key2": "5BGKVR2S9ARhdNpVcqbmAfystNufvGQVT4ANAKyR4BvjN8CrSmvK3xahuqVrwAFNoAfGM4o7tvYVKALRGrwX7fTW",
  "key3": "LprZc17mcKWomHuMXfGPWkLBhaGAGevq8Q75XsgEDP1gn5jv6JYVzAhaYxCDuVZTNU5L2whCsxGQghvZyq9dRvv",
  "key4": "5AfXbQR6PkDxMrGAZ8Ke1JDfv3VzM8gQFdFtn8EeN497R8NoCrbSNJmtjBePMSDNvNV6C8ZRHA4idnP9NXcnXkgn",
  "key5": "28BCGwAT2WLKPgbB1dTMLwQzsxwgm6daan13QbGkJseHRzjnoosKrKEpCH4pV3jjNfvEthfpYh3gVjMVbHZw7jPZ",
  "key6": "2VxTi2dQY5ea161dtmPW1aL42AX6oLa1NGgDo1V3syUf4cv9vFMn2NyFn9SvXUMyiEHBGa6MgYWqj9PrGw6pMkU4",
  "key7": "8SvwaqXLRsnKj7ispyFyNLhSqsog9ex1sTk81VcfpNNxFzJvJDqb41TxbDUAZrK6RnPc3oUPr4VzUC2MEUaKxqC",
  "key8": "3hNBSuvrNNEjPG18easiUobGqNymHnTBY5WNNwph4utrGsg4VjGuJQQJb2nt8fPyiqD9iEwcEgrhDd6zYQPaWxJS",
  "key9": "FEqPXjntEL3cHkYjGyUfueDk3BAUExhec65KbnKGveFe6ro17FLX6yVUAnFQhuhE5Fs2WJU9Q3fbK3Pe7U7Erk9",
  "key10": "4LhvrtWyVQwBGC5koZvVKUpnnFU7Avdx5bdf7bP1oETsakv2h9VGc859CnTHyAdJGL3Gk2skxeHfkMncWpjzRL1h",
  "key11": "35XrdeTeYmAKuYQDzRxRPNPpJcGUSfa9EPtX1PtwFZpSBfztw4xW91hQYBvP1o4MH8LU61EWB6GoLmwTSe4G2aqa",
  "key12": "4G8KH1ExFDfwhQwNdfV3jbcUYfptt39sY9YRgnWpodMAAkqp85MBhNNQgrmjyfT48pWWMkGuGuRZ5bw7Kr7EhWGu",
  "key13": "2EW25Nj21Lbofxp6HHDnNYsBE7EewqZBfuqXyUuMbDdy1rxmdfYf1QSR2iT959uaym7QxbXGLnBEUPCvB8stkyYL",
  "key14": "2J6V9RmQxnPWJszfmytCaMCnigkYKUzThGVcmYZpmvbCt3zbTHp8SiiwR2hiLEjaWWVSj7orHkxGyFt6zQtV7Y4q",
  "key15": "tWnpMReJXGE4Xq21wAibjzM6efuR1cSiWnJj3p7VoNidxdBvsLgjvzqrRHYt3Ns8tqdchBkCoCTTxK8kGBTfBB2",
  "key16": "ZwFbubeFoeJs3tWifzxj5hREUH6uTWmECg9u3rWKLpJpk7b8bEbJpXQxuSN6EoeEXkVcT2iN6X83DPCV3Skcu3H",
  "key17": "5MMBaxdZaEWszt8wHPtHc6BdjxTLsuDjJXex3j9nf7WmnmecSby4Lvi6Zpzn7JbLnLLRaCgtgBjPZAYGSyxschdF",
  "key18": "24z5NLVkR29PxVV83TMaNQNphFvB38pZonmL7UsrN8cnRoZYSyn5Gh4rzcA5MjSzTXtToBN8ruYxbu6mxC658B7N",
  "key19": "4Et51nMQQVW28PJW5eizJCXXV2jQ5S2N7LB4Yv8QLAkNcpKfFzpUzaVj1MUuspe45Sroq8Pg4Z4YSx3Bofv2K7HP",
  "key20": "4HrGpn5mrpf9oQTDdx2Kc5CaewTkW573KNdnoSbNrzPDfYY5YM3phYamrrvkhZYeUX4Sqc93dWJSFtBivQxD6ybJ",
  "key21": "37MWKmtNMfS64VtHDFjTFzzA3ecVyjyGur7GqdevGqZKiBHxXVHrwBwSRMWZwkjk4q22SmcEF7HkG8SnRxEXqWqi",
  "key22": "3i9KUyPPu4ws5zq6AUaVVo7Aow5aCX2PLEM8FxFGDZAQkbgywPtvFikxR3aN5E3KRZDKJviwVFvNwtZhbP9cCep6",
  "key23": "5hnKzHXh1iLEmcg5AC5g2yYFyT6FXxPFFoJunkkaQrQEFU89nPEmgLkdoBRcbnnYyHVcNRnx5DW5UujykkHqQtj",
  "key24": "2dEf8WbXPKRrhNfcCZmASu3pNENf5mfLu8qRNRgeb2sCH4G5JgEk3NLMRYkPvzgoFRYYzbV2zLRMPkUCffCMjHmT",
  "key25": "U92U2BmaFU7TVHfQ9eBD4dLVr9asGwNsBFNsbvybQkZFXAtfdqSiLqBffVsFwkMMMPnYpnxN5b2oj8mFvRwbHCu",
  "key26": "3zcX67sN6Gk5j2hrrThWXYJPXTE8sAQ8CH16ocCPVoKiQFSK8xMZkNkQPDfoubnou6pdkcTRQ2kE2jiBCFA18tS2",
  "key27": "4EnH5TcMKVxvEZhxJur8s3X8JK6WmBRfKSxu7BbXnGaM8Vz2Y3NSQetJFuRRdBNrP28ohGb7masDEjDrqvXHD27F",
  "key28": "3RyjEgVM4KXuX4ccxKUtC9BJPx4WA3mstFpYf6JU7bGJkvbyhQCopsaM45Nz3KrEhN5aPRYYDhNVzeX1VA9iZuoP",
  "key29": "49cR1Ev6LzsHDfYbo3ZtP9e8Vz5PYE9oiZcQNqcfXCboF7dPmWZgaogjBRAsxziYZQSp388dDN9EBoPwiH6LQ1C1",
  "key30": "2THoAxNnenYsLqT9gbZXnwNnPvGSF6rST63Fijk8A73qVdVN8223sEGXNx1Yiva15dp3znSLSSBMpFpGajAAEmme",
  "key31": "2AJei1UK4Czqp7bEnYTZ5HafutghqLMNL8cMWzRyyvc52i1LkVgnb7mauTCmakXNQQsiF3J3tEQj8ApSqacFaAdP",
  "key32": "nC54h9KF6bfpJZFHX6C8DSDLL7vHhJqkFBWCtAjUKBNai3gcZxjsJLeWvhKkLtQBSBDDq95Xd3nHHv4hXb6Fs7b",
  "key33": "5cm6KvSgKmSXvzxyehn5y5B7V8WBes8UHjMZrMMtSghMYgbRhPnMuXgCtXYpbYgwD6Qt8dDQk6ZuSambW6TSNKwv",
  "key34": "588ETSVdq6xKNNH4HxhJM4eRrvmGKs62Kxewe9yFAXjjdFfxU6yRwYVndhs5fATqDLvDniGgjCXqpLZa3N8PHECX",
  "key35": "3UgUhzMQ63cRrBNeFyJe4Hnyp3gv2EnoUdrPJ3LTUmYdNvo2QfjbJo56sAekPs6ZpTZ12p9PxdfWp8JmLy4N9WM6",
  "key36": "3Xt67KXebbaqvk191huaA3DmUgE78Cmm4D19Ks8dqtQ42CFuxcR6UaNpFb9DvLZGfgsxc3UPBY6j4cisUREGUEsX",
  "key37": "2du5mCbLR7GdnqJh7REPnbRoXYuTLMdo1K46fA8qnVub2S3qLVr9hsFdez3HSobjr5gbfJBu9w4VFJ7D38eUkjJt",
  "key38": "2nkf21egJ97by3T3w8PKXUJefvjim4nizoEG2GokivtBTPJCUt1CDNQtzaF6kL1GVpaWzNkLbKKAmPqrUZed6onQ",
  "key39": "4mYRbiUKaXcAsTh5CpfUE2apLxREygRdcjZDgrN3ab9tiwY87B31j5xE9uVRV54AcHFAGr8DW1yFLwGhoy3HVPH4",
  "key40": "4mm31vJaRP5pF9NDW6Mt9nrCFinvw53ZXbFsY2REiWGA7HWq6JTqb9f1H3dfCpxwMLwnTLe1nQYvMx9fygRf1eDh",
  "key41": "3m3ijyJWtGgoSqMDWnxgXwoiuwE1Hzx4EqAyJVGga1yj1ghupu2A4wwp3xvHKTt9Cqk6tJFhsUgQPsk37mgRfSmD",
  "key42": "4LUh1yt2A6Ce9Wm1nRjeudSbV7U2Mpkk23Qt7aXsivmaEZMems7kUCgoNfNENB585Toatpi6HkGqan3XnTS8fecx",
  "key43": "388etQRcAr2HMBDfGrDtESRNd7SfcfvQnTC6LQ2QhPC1QwD2wTjf9yidBoRsXt7TbGrypjyg3Z16pMLVC5rK29NR",
  "key44": "5RW2CyMRe9R9JSc4vY5iJSHywigXjtEhHAHMbvAjj5ojtbRbNkCJ7v3VQcKHJ9tmygPcxj27gsCpuA18nTqW45tY",
  "key45": "4Xzy9KpmVMTVaKURoEhouztVFxDTpkwTKQUXf5Q6bEUG4hBG4ZtJbD2AaW6sHBu1RwthS2L4GP6WXWqyAo5oisC7",
  "key46": "5a2wGzcs8BJYnzzpsVcvuoVgeKB3z27DbXjb8hJQMjeXyK7KabLVMAZc1ZzfHwJNV9vfaUiCTzNtgMD3kawNqNP4",
  "key47": "42XYec5STB8gqGpgebxXMVk741fzEmBAdam4RJLdcFdu4r575Fqj7gcXkFJ2J6MqwSG8KBcRN9mD2kNJjPMpdLj9",
  "key48": "2E7QY18tmSWmAFaxwWoiWwHs1VEedStkkxGdJMbFRpNdvUjGTZndNPim6fBC8mRPTLKfu2ZCXE9DzQ5GyW8aYmjf"
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
