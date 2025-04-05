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
    "5SoMb5QccJb7LwDfR1e7KMPsye1FoaDfVmiMWvGRmhPEKCVeNnoQdFjQTE97XJPAQVBzhAG5DmBmCruhMjGo5fx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "342xMN1pnpSDbUhpQp3nMvEzuFca9D3JdyeMrZeXMttLaKibrTbYSNThd1zjbN9S9hv8aobv5shoUULXQjYURxLB",
  "key1": "2b2gXMFhTdRWJstyskVyDPpxKhHgnC5Tvwj3v9UDiYCzcSqYS3U4dbFQKEnLKMaec5SMZog4qrpUdBytLAhrWq5F",
  "key2": "3Qdp7N7AXtAuE94gXWM3qorSeSqQWSFvPX3N1bvFDvyUXAxc3DmdgnLfMEA5bgf8SmS4uTvDMvWmTwLzmcdHL42P",
  "key3": "2qyAMvQWya9N9VSkKaRYxp713X4BVUFbADfnQecr64F52kUJNWdt956dPJ313U4oEQvD4eDngGitUy8ZUemz5CVK",
  "key4": "sdjc2iJ3GR5cUhPrVB98S3ptg682cnbPsqVCaBF1EQABfmXNuo5wHY3xkAa4Pmeznknie2QRkkQpF9Ysha1QuZ1",
  "key5": "3PkVFPj8bXkXZVXgCYYtaSwx1mjAGvByaS1LQKHkFJKz7mMZy8AMn7R5nkD1Z8qhSXFtnCEEawprjrjJnM76gJ3v",
  "key6": "28DnEqDxkDhcngBEn23JMGArRCteXsJ5kFpC2gNtSWEG6QgJu2j3joZJE1JLf8sMz8ZoACzeXYE6vPeg3UNhcswQ",
  "key7": "5JHjgS9979WwmQq6nxYrNmHxmk8tkWiShDatFD24XDcwFuaWG77Uv3xsieoC1EwehRpFXMhZ1vWVh1zJhZSxhkC7",
  "key8": "5w1vpqnkNJZiTDtZNE7fsxpt6ij9pb21Mn2EsWRdo1Jm9nptFKCDptHxiyir5cKEApWKS4QxXohDNngiJaEATV45",
  "key9": "4UHk2SzzhLLAiQqMvPXuLvmNmBqDfN6aKNBv7dmJhihLNRHEhJiKo6GjSHSdpGwYSk43UER8Zqy9H2xd3G9xybkj",
  "key10": "4FxsgQzhwCr8mN5TBBW6vvu5pB9JsfPjaUHHQcKxaebv3wG2JkW317CNWEhZEnAm5nxtkAqaB17ejyaymH2Dk7zG",
  "key11": "2pBgGsCsN6Pv8pszR8SixhLj3c2UdQzr38j8U7DbySaLVHsz5Q6ixUtapErYGJ43qnKhGLajDd4fEUZyXsnjWfMg",
  "key12": "2w5JgRppMpUQMqhfFaNe9utLUwDU4d79KhkMc8kWmSYk7W4DJ7B9aU1ezgQ1s3Q6G8ofvMJW3TsEHRY43w69fKHc",
  "key13": "4mBp92r538GcGETq47YFW3g5crHHgo1pnZzjSN6PYvF4KSiuCY1UxFQRj9zN8we57hKAGaxmgk3h9o2LteCFwKYU",
  "key14": "3rCUwNFeHU1nvLpNC3CokZA11W74PzLLXLtciGQfEKz1TmgFFgbYzmJW8BFMh2mS37md5MRkWghya6mAKwb2ugv5",
  "key15": "B2tRvANpat43myG1S1N3CPYe6FCv5k5hFDYL5DhBga2JCE4hMhWoNrTb8r6X15t2ZAzsJNpYqJnspsVJ4k6a8an",
  "key16": "cmeQdE7W5W5ZtQHuEDdUBZtMwQwRwsQUYtCLQbMiKpwt2JvoUy4PzEfYJk6bcfPB4wuRMNmCa8D2JHdc19w2jj8",
  "key17": "5toVPC3JARKW9bG1hQapDucYSphSaZtGNwbJD229hxzrBozfjWQVodXjtLWhHuJiREzomh62SWeqLtNrxH7fdeZx",
  "key18": "Ep7SfjtKsDaSiByNMS6fb2Ewn2DTVZW5Fqnf3EuPAzLXrcQtJNvoti9nDaGSPvE91yAbQai9o8YHvGeCgZcCvBx",
  "key19": "5db112DLc8ke1Ch9JbfpNqtsGkrHxvoz3rW1W6qpGwxDJ2ccjULvjmQ5h7TkbCXH82xcuFyNpvEukEsjwbbzWzn3",
  "key20": "3tKQTxEfM2DhNrHRDQku5cvcD2r8h1UuLj6oEUS9bXY2vTP9DanvDwx6YM6iDLHuESAtjJzxbr3c6Djo7qUdP7i7",
  "key21": "4Cx1aNELbK5TYfxbkff6YUJUh3w9jANah9QH7vorEXmMLyBS7HvBHkzyBVr2A2FpVJi2JR1E5GGvFSVg8mDp7Soh",
  "key22": "34p6n43jKQYS2frpT5C1T3qs3uU3ywHoLZAkE4usm2GYANgxD7pS6Q1VenWUZYDDmyMSZDFrhPsvB3N9jqUgBrW7",
  "key23": "3cR4dnhwcmzCxbEtucFteTPzCvxJno9TuqXSbgYrMzugoQG76aY6dcaD6DzJKxdu5ps1bk3q8V1pfsbonpMQsU2i",
  "key24": "2enaRTPygyUrfavyDouTmJPK8aWXqbaeDgPGjJBGXVxZQfXiwrRBecq35dHj5BbeUfZyQ3xh1HHt3bHjeJFW6xJt",
  "key25": "66qUJE5oYkFdkhz1Ci3YGuRdmDrEwPmFAfhiBuPixWdvv7AjXDFdSgrAPCCvNF2yviyQS7ACBWKeqonw2WW5eZNB",
  "key26": "mW77hLdY2N1EhQ2oMcpnqjHP39kmGg4Mz52gKvJUvDkpQ2q5HonK1oMLhFMiwMikfNFH5PBpf99qYNqWrZYt1f1",
  "key27": "4xW5BMYG3uvdf6PXp1d8GyakLmGFxSEZVoQ4oKQXN2kTda3Bseoo5iBsxJ3RSR2pVPkZbTWyiLPE1xZWV4TAaXeb",
  "key28": "5c25m94UjEQrvZSQamXQYiCNB63RzQTt3EAqXTzi397VoaoX1LLgc7UR5igV3g8fHmq4kWQqdCPyCCaDDkYb7xQ7",
  "key29": "4dpTQXJjfjbgMKycMrEUVUoCqkUmtpyPGCeWyCUCf2HY2eHz1DJshqEUkBsuaHJnoqvuXGga8gHxkFkd1G8wmGb8",
  "key30": "2SbP1uBzsPhhLcB5Qi6LHdFZQdfW2DQkj9v4vvr5xwUyHhKNFtu2ALMmozzRkMkTi6gLac69GrudnxVczPsWo59W",
  "key31": "2GpzhxrXYcxJ9fgJfutLKt4gYh4X3ZfLnNegvYZart7KUW3mCeD3CsQpi9aCo7B6ufrfFwd5PemrLfdK3gnwb5t4",
  "key32": "2sqG2ZB25pYinbfLAjgncJuQvTEDzARW8ehxGTJvWz5S535VcAUS2647QHioiqnAfHdVHZ6AkfiYmdzvsX6pWBCN",
  "key33": "5kTd42ZyfJBwmXYNjpFB6NVuMdpQ7dsdsaxPtn8Q1Mz3w9QoMvy3dahgd3wf29M1RvP8AbQs4QpVkuPU1vNUPfU9",
  "key34": "2kredix87whueP7824qhRKnHaNtk8UTGSaiz2qytocBhU5gwm3djsYxHu3m6TJ9Hv2nUYkWi18ewpe1ABnRrrcVA",
  "key35": "4tHmn4uCitbCrFbwmru4cqmQAvmZzw62Q78q4hDaoXFzKfzkriQjTTpd66tKasbK1hEg6YxZ8FqCGqj7qjXRGiNQ",
  "key36": "3wEXzGQGGUqEDqWQP7tJtmdHd9ss2gf7aZ82pixWtduEUJJSJGbrRykDJHHQauX5agLtWDA5bxtXTo7vzviDxT6i",
  "key37": "4zgeCihCvpEPECqJ5ZjBrcGdM4gPnZ1Q5hfhQj4vZH1Hj1i1hVR5qatiUPV1jDbuJCyCakG1f62sW99GbcSmatC4",
  "key38": "25RLRt5pCZGJc59bHy7AhYArffCE4mLQc6B3tL4cBDPojb1usydsGDrnbxK2SruX43Qsba6iTu2H1o8X4iooLdit",
  "key39": "5jxxpJ6K9vySKuhkQFe4k9PyuDAi2RPQ2qexVuguokEAAGP8Nfg5L4NFy3D1aupRT65BPTfXUtsjoGFfx5vEonUb",
  "key40": "3d8RyqdpgqdeyqBderiobtK7giWoDAGDRyWuMmWzHHibhGaJX3PFEjgyazzadzyFGahRdfMVLvvwgxHrRaw3PLdP",
  "key41": "22SvTg1dpLDmgwFihgeJsXQqc8VEp6iqjVazWbxYo2q95BrrjnG6CvZgrUjZWfZMoS879xg2h2GhGyRqtJ7tipn8",
  "key42": "66Fjay751Ub1fuk5ig7rwZDPRUNMeqhJs86iNLBRT5HMWU7p1KR1o3VTCJB3vk6UVGt3kAfNuNkTYTtZJ4iof49u",
  "key43": "4tQJYbmuQ9zANiADKQ9Z2HJjDGLMtvZUi6ah3VcXCeJBWSAuxET8kAReCbP1g7FHk4TaUrnwZFdsdjZqQoC8ebcq",
  "key44": "43Vm4Q3mRicJWXMrRmu7fxuHmWS5ZAQfHEEWY7isRDtvzyLjD7FHVEZK8zKJPJeoGgRpDiem1zMLGw3LkAwmbMSF",
  "key45": "4KtJoKjq7ATQmbWtzKbStRRCjfKarrAV5CWwazsTwuSKqYRmt24Z3dgS89Z5XvidWKfrTbKYSpb3kiVj8K2E2Lu8"
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
