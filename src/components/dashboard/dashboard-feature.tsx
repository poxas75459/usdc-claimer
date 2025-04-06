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
    "3S8cnrHKqsfpHprZ4UfKjWWmfweb7Y2Gn3dRUsgbTgJ9P3sqzW7LXGWr1YULNyduEbw4kvpqeoZ6TpE2kvBq5yR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAxFqErWzRhgz2QqUFnU2oRecJngTEpwMpj9hxrgSpS1mFxCgvqdCFaeiZRRgWojWEB7C7y1LMY1wfx5aSegQ1J",
  "key1": "5fbVQvCUTkgvsP7jG29ucCzRYoRMRZXTCJyC9YJGg5kYriWzc1apH529hWFNpxUK4D9RM61eaiUKjFRgrhZ6j4hh",
  "key2": "4hkZZ3UEbvi4FmxdFPwTFN6vZp7Gw8gHjveqxSgWtnQkkZF67mkeboSTA4qdz7gWaLLcYXVD77q2yimr7mqihRR2",
  "key3": "4UFScqYE7jKdeuWhqBVCzshtjSRhKJ29mbbghjvhAmiEBM5fNMekGAzKcoJBA9d97qcX4yMsvd8K5FY6Q3CFxK2g",
  "key4": "4Z9zFwE1ykS5KWhx5o4MEYA1kK5PP7JKPAL72c9j1QmnrwbJquYzgcsP1zbN2NcNfDMeQc5Fa2aQLpstvd8inaxX",
  "key5": "3ncD7tqKdbqmA9e46FTqtN2As52Yf6zwbSPT6tVkNHfTyJvGS6xdLJobwEQsLJJ8RJRgEcyBEBLQ4g3eq9US7Juc",
  "key6": "3sgyfVsJMtj6keqsFDg3PhfrWm6RmUgZ9pGbkm2jiDRvftG8EL6quKqZ6Wy3xDHR6ejrm3yJPfxKmcpG7sGhscbe",
  "key7": "49Q8nwNoKfQXkTjF3zSgNjjxLi6nZr4MA2t7siLrEbvGCGEBun4E9EGGvzX1DwJVTx22P9LuJuh8rM7CfgdaY8eq",
  "key8": "61gZSewrojYbPsc6kpj4uegWuxsRd9vGbutZazWE6YCe4Q6oNJhwFwuKc54bKjvK9DMXB6Mfp3dAoQc3G2gVP73H",
  "key9": "2v3Ltk5z7zhVuMkQfG1hdY4hUt6sVi7C3Dso2nh2vuTqK5TeGzuxUaz8urYeCmsSzP7vx15dcwA7U4UJt1Q2SQGS",
  "key10": "48hmqSdDePymG9sXg5nr5PvGzGBXmhLkN5XtS1F24tjLDEXfan4sQSFnwUNkWiqpACpen3qZV5Y8Eikj61RdT3w",
  "key11": "4hDaHpH9M2beq6vtMRUWu1y2wqEd8inc6gGby3MQ92eSLNKxGY6BD94KFGtjwxF4372iJAMwgK9VVjgbGup5Aq4T",
  "key12": "2qWCveVyW8QXfnJbaoeWKZe2MbYzgh9BsaFGWVxcedC6AyA1W5fwcCgh53onfekh7TNFb7S7hE2sF9gUTev47cbE",
  "key13": "5ic39LTAH5jYn6xWWpNueQMDYdE1sFvT2WKUJtFRy6F9QX3vvuBivsUk91j8e9KzSNcHxcQbxn9qxfWX7FQtsRUr",
  "key14": "4wcYiAFseVSnXfvivMEqt8KamPrgdDXdZFEyDhxCWFARy1EdUzsCaSzXD6nVs4Gozxnwqf16EewudZqdfhkZbAuT",
  "key15": "5UqQY3HeV11aqNY2mezMgyPe1ECUny34YAyVqxf9bE327bdB7aPLmTgiePwP9khxrdpxxop32At3sYqkJi1ExGBv",
  "key16": "5BN1znVQY7gW3AHVGqa6mRaJh2ERJQ369kqjbJA9MHhM1GEzTy5nWRz6d8pXCDyDyvryWXAtiNhDZqzRHbrvKdX4",
  "key17": "4EE2Yf2UQisNvdKkf7nNqnQxkgBBWt2A5Z2rk4ACeiH5rfktTA7Yy8xQebLy3Ci5PXofXxoZECzD98KEq5q9pTsf",
  "key18": "3EUF8iZHQy1j6nQVanoaw5VPHdV9utfWfa9uheohLcaN7iedzkkqFA1CS8LPtLHAR1wFX2wSMTpnkoFaXRrGtn4o",
  "key19": "2ZBStwyix891an9JuxW1Q1TmVWLnbCJRyE9sdvw1fwnxzpQiQiL4SZ85e2J7tcorvDyBy4rTCLm3D7FRQTN98wQZ",
  "key20": "4RUn3SJerRMgH7F2DJDJJPQ6fWQZGk94YfJppfddBNtA5tzLUFrTRVbHzoN7mCfq2pTmDDsqcGh53YtGrMPZp28g",
  "key21": "4SNLJdyCJTTyj29HqpDRhezsJXFmW6DnUgdvh5VHgQHLKZDBbVPifXf96zbgfDyskFrHXtKNyaUqVSv56A8y9qBM",
  "key22": "5KVNdgjyvT796wCkuRxtdk57QdHDofHwefsTb8ehWMhpEThyag1h657Y2cnfvfeQYkiMU2jNBTLbJuSr15zrjRHy",
  "key23": "pCH2Yr7KqRkrFh77apu54H6KpMCTYEhMXcSMnC9hVRhfnUYX4vf5ptWigMWaKsGbENZWkYWVdjB9G3DSXvbCJac",
  "key24": "5MLWt98RTsEhFEtZ2czH6Z4j62XhDCXQnQ2uuK7Ky6SWLXULYLma2GBJg5BwU6p1py2i3MmqTLHMRJLebvPXQL9t",
  "key25": "4Wxt6cAcoAnp44jvBzLBFJoSt4J5AmqJzRVQyWw5ZBnXXxPs2HbYxGMm5fbFmJBnP1Wn1Tkfn8CnwbZzsSqKdnd6",
  "key26": "5rkZ14DdkJpBMkmBryp6ts8VuyX5EGA3FMogqVmgJUz9kCA4DvuprZBrGpJFHWQLcKx9h7274haMRvJuTqVQhM7e",
  "key27": "2a9Atzo83ukb8JPaCwA6m81bPWd4eR58TNKH3qXremWSDJqJvHLT4apqZf5H78Z1ibT1RtnPXyqjCPKtQaDW6Am7",
  "key28": "2DrBEeRmkmABqk1GEKka5RaL4g1znMxZr5fdWjLhHuyEeciHvK5pgUZW6HJrZG5t2nL1iNDpt3YqU3LG1cDqNmFP",
  "key29": "aVS1xYtcgbKjGeNG7Lrc1NcJ2KEBtuCyC72aouwRu3Ms5TziVS9ZUqeV27HeoaLxTxGgaMtxvRs1dbwZnm3m46x",
  "key30": "KU4mnBr1ApvhVafTWWFrmqqZ3hx1zp59v6ebUho29jaJMVjs28bAjdBjDQs7Vzhff87MfdxXUyS6MXYHz7dQW9t",
  "key31": "4nqJ5tWQ7Z9mSVbR4fMVEnQrWxNVJuMbT5ANCWv1es4QmUP1EmYm9b6tfQ1WgWZfAWwxY4Ybq34GQvGUFm1kHbMP",
  "key32": "67YjnYwD6CFMHbK1PC9YE849aTDgutYnVvxBHmcT12ktSDdkzVAtoESv5VMbHCsSpQHC5pFMCSMMn7hMs9P7tNRh",
  "key33": "4jbWKBDjzXYthwA43StWTZdxFL6Nf5usAvjK5QL4CXKCrAkWnXbhkRTKFxaFMkyTvZ6hsRgJVJ6W252RgaBijjcH",
  "key34": "4LrgXhrDW2uReY17gkVgZ9WXXvQcbRymqTjLugPuKf3WwzpitpDUBv3R5kx36p4CAugbW1jWq7GvN9XCxVMGedoG",
  "key35": "3KYkQ6pPEaT1kTMDv8Qdf351sXmwhJy2K2VqjsngZpAPQYgHfDAqbRsVKVzEYJ7Rf82JjHuJJ8jpL9WCvFhhkg7d",
  "key36": "3cyiJoUeS6yxcjBf7x2V2KNs7dfLrebzDKgbgfs2pZVBhSYQ2oRjUp8EGqAhzbEP1u7jWEurtYj3iru5DeDSQ1i9",
  "key37": "4gGWak1pH8eg9R8Q2ZfDzLfA3jXAYvbNHDvgBnfZGbMnrAdxu91KihWpyqsmrLFrbyynjcgavbncyQUwXpheRCB",
  "key38": "5pG1WHaArVGTmZn8thtEz1XY1Y1eQweXa2udZftgggTdVscXwjQsAPbXAiffxVsxV4XS7kJCoAXV1H6kTe3hSBUb",
  "key39": "2Qf3WULUsYiNzFfziwRqd8d83QhDMNUu7MM4sE4UXXR5vbPDYFRQmNGVjefL4gp6fmH3JB7xjmuvVXc2NyS1Nezh",
  "key40": "3ECvyNBhdqggdKe45PREGNR9MP6QTnEKkQTivdQ5YriUmsQAegnPFAeB3andVuMKkLhaLqwHZT6iDXZVLL4v7jb5",
  "key41": "2oiadqf7A5qXn8rocfaXwx7MuZmdt4sGH5di1v6DbdL18aHtFWFmkJs4ku21SmcSMTn4yyyWzCF27yqnYeLp1jQT",
  "key42": "5QeetjycXXMPvVUgqaVHJAk1UajCHZpUHSiot9tbTA38Zhy8ykyRMBucaizpf2mevARo16BGAAS7dgAKisEyhfRp",
  "key43": "2r65pqB6aKvDd8oQYh1evoaoCAsNw4gJd55C2Wo3CBY4U7W3DqDZWwRcioyPKfQTKdJT5NPfFYnLFoV4X2Ta1RP5",
  "key44": "3DqqXSKpaLAs5VQDsspq2pjcxBbSENz6AxcXTENjZpDgJbqd3ZcckNqsB6w1YDfCj6ZSih8h9Sr5yqR5qDbaemdC",
  "key45": "3doHAR43habbJVrdcEh1eNN8zuCT61HWs62x5BDS2yGs57JLjbLwXAQDHVeWLUCiKJRpj2dZd91ercpuhpbsujfa",
  "key46": "5fN59wCohD6zwF62DR6VMA97emsiV1BTAhqEWmZ9C5kqKzXRMchTpxPvL6XrCnYJKNL62Evo5Fp96WtMsxZEW9n1",
  "key47": "5WnLagJc4DajCNBTzDZXgegKvq3pNXW2TGN8egbGxz6emgyfwPvfWAeU4Y11o35PTuRu51fYqcbpyxP7YHnYzPq4",
  "key48": "PFpsvow8KUmmzefij768SWxHtyqNFB8DkdEpsVT9tG18BLAx2LTPFtfJn7TwSmGn5W4MVLofS9Bzmna7Jy93s9E"
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
