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
    "5tG5VDnwEHNNwxWxtRQhqUP8uyGhpNQYRjexrY2u6Z9smBQdkoVz79kJWvD8YvurpHrbCgCsHhFFfY4PZTkdYiiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p9uiWt9HgECfvmKL39qMgduEqECYNKK39XB8R3mKb3gwEtnPHFoKh328zGaGWVQEqVnL8qqjrL365eZajYNmKDG",
  "key1": "5WxUPV4V5U2LvdmkBkX8bciWrvzeYkKv3uidc7QYBogpcD6H81bPjWS7JnXsTpannCyRcGz8BicZktTyiGUb48na",
  "key2": "5FTAFzayzY2c7eeoK5uoBDpw2YB3YMFQK6Fig2unF2jxNdktbmVSRvJMw1MpWK59UsrF2yaSdvxj1dRHKRvL4QxV",
  "key3": "hVvj7xvvK1RzZLzbaUJgeWJRmgfweDXFFiE3vtsm6pRzGwKC3gHRDTk8y7GucJ3ry4WZZm7w4DaGDKmH91XWWuz",
  "key4": "3n7xUHHVy9wMPnGV5C6Sh7LEWidr2xJ6v8ZXuN4V11oespVqKJAekqgaCcUewmKGbSHjLJYyB4vfBggG3PjVTbZK",
  "key5": "qL5BDXrCy6BQjSVBXQR5dxwe4rbf9xggsGC7gESGrdK329X47ARsBdPEDLCYWXAkSHv7byiJkRJtqyrQLEEa4pP",
  "key6": "41EdwLC1GAS64Xcgx7i8poRU3cugoGkZtBKnNZkrujzctLNebTLSZa9kezg9FxfY3dSPGrvq9zkUbUABBW1keM2q",
  "key7": "66c3tX69EnCeLT9HvSSdv4wSQPCZQyM1B5XAN2U6NsXrbLz9XvNxVdwAdp1V1xK2esEanYP4vAe6qrWvqACmVyqn",
  "key8": "4YXJP6PiUfJQcHA9em1ET7mv9F1gywgpXMcmypdV44ihDVC4WAcTGx6rPBgnX453xuLd2VV7bNW558KB9jQEUuZp",
  "key9": "5RKEqtXA9VGqx8qKt2ye9ybenXFa4tQungK3vDbAtqikwro5aAHddyMknYSpUvQuCJWN3JWstibrkwhXMQ2dNKaW",
  "key10": "4Ko46y8eeE1pgnSm4etz7oHVae7WsXxJ8v9NiqoEFo8LEe5UuBNX9BP5Z2GF27JHsdtTLNasNppYc1bqUxYBwGU5",
  "key11": "2i1zBCXymTqZJHLYfbtWNAgB9rG89pxj5rpf27eCnvx6L5vT9xt8c1umSAE7sX1S5Kw4LKDqJ9ajtgzTMQVnzfA1",
  "key12": "54pXetngvNPJ7FEAnihJ1W63pFQH9za2SM2kxsb4WaKMCmrcFvZVWagtbqK5aYzX7nYDjMSmXmwNyBhk1xneY8Ag",
  "key13": "3T6LoHxCBY31fnfiTGrRRwr6vRUbyDjYuJdDYg6swjdJx91ZjTyt2h9sRFYkidYepCjV8a8JpM6jCZVGbAd5UzXm",
  "key14": "5rvpsjLoDoUh28Nz4pbgN1qk9T6FyhSLYxzuSVv3XRixHVKRTnTWLnZ1J31EEyvqsFwaFuLJznGQp6wzjLpuCiGS",
  "key15": "5t5ESfadwGzvgb7k46AmpaoGbWzYoqAjTVt6FDhsGbDX5MT6czYqVnutkhNWhCTaokqurEMDviqBKcoEcjwgzBah",
  "key16": "8SQMxdrAzffHAnfaL72JZn3tT3BQHW5KSUGHSTbGYQRF6cg9TuJ5YLpFNU9CvwzDsp6c8gPaWE41YKRJEPwXStp",
  "key17": "2Jc9vvNdmb9Gs1pH5yGKn7Yz4AyHjeUmBgQx57J6saggoapWEY2y1uq3f4wL391befmqjsPh2GKvM56ot7HDwJzo",
  "key18": "4xgmFvYehpqWJ5fhFun5NjzJqtU8t5CrXx7CrcnUjsespzqCbu7spEnyrGN8hZhmB8BsYmk8KtVJmRz4H8fvEDiu",
  "key19": "2demHHrmJHPKtxoeTdb9ZKhHPipYBnDRXb7tY7tCkg395dEWnQDYnykMFB6WLqKVQGMN12jH4irpQGgeB9LmXWJ2",
  "key20": "Xat7Tr5MYnPz1Us5Y4bcuBCJA6FZo9GBxRYPKJqKsnWqQwjQzj4DD3iFzqp36fuGv8seTQwFBSbs5Ve7pHcYRzy",
  "key21": "4cQHYrykKATgUFi3sB1J6h2pW9V9gji8kGVfFExapWTU9V39b72Y7iragBtU1BzMuDdUPieyHDvA6S2cyYZbEQ8f",
  "key22": "nwHGypeeZjnrXBapJMRR7djuiiJDg3V1Xd583HazEZ55qCJC93ePC7HVz6p5jRKLa9yWrGXdTsw9biPKjeNjoME",
  "key23": "qjJMDAWv5PuZbFS8iwXgcXKKzZN7A8xYpnGaeDr4B9Vmge3EWk7nqBfQykY7nDZJKw1uBLhQMcp4vdFY18XjwYN",
  "key24": "2dUo9HXEWx3noKxDNgmLaj1Uzcyckp1omzDpVQwgoQ1CGJYpgHGVnRw6aYehJNaC2bN2sYhzhhTpHV6vfc7FdTvG",
  "key25": "4S4YkBW27osabJQTeTVHxx8wE5ndbfQeRocvNdWbydQjrUVaXkbCDf1bExQe4XoDKSgCg7KdHXHtnTdftDVqf2Yr",
  "key26": "3r8s7bnhVp1jwhyHc31HFyuJYVsNQw26bBZrb2GPM1fAmw6e9ENWUcNFTqYVB9xtLi3BRnpWWQDq8Nq3wuGv8ZKo",
  "key27": "zLJ9M7QEHMeJ86a9XtCqoKVZtvvRVuiKVXMU4tfcUPBRgWV3LUVd32CTC9zx6o55NLHve5gZHxQVxJNPN2XJQ2s",
  "key28": "4q4E14b6anv2UmL21VUiQrAzppWMaTh6PWuNcFnXzCtoNa3W1Fi1pnUhXA8wspSezsPvFvqM27N56eHdBW4QYwfL",
  "key29": "3Jh4wmPxK2LnuMYVW1kk6YPhZi63W4N8rvKCmf9Fsk59CHjoNdryzjn5P7FEzTSoCEnkB6bCPMjmZFRH2mzZtTDb",
  "key30": "4TZNyXyLpkw8oBV1RgyPMZP5hDREffnxezR5Xt9JPXovsNm2awNKYJP5SpZhcHAWBjkp8Bp6g3sDDA6oDJ7YrPbi",
  "key31": "2aGsE63xxXrfXiJDq7nJHc5DYb9rjGjnr7oFPUbSzoWiL8HNYioc2u4AvKHZaU7sm7SG4xXvfVUovpsQ83hhvFFs",
  "key32": "4WfiAdLs1akyVhHpaCqtYkcME4sBN581kBwHDGHZHSWCXVfUt3GFNTkK9ZopXUg9eaWWYoJZDsFmXqP74z7UbWkK",
  "key33": "2Dgg45QrdCNyGzDtKX5QK4ocV9JCnZKXbtBHUWvjMwdfApPssRrovEafDNo4YphtgYkrECY7WGX8GAaLySM7jc1T",
  "key34": "m1khe6rTLfdnEAeJAWF2GtgNCw5ibqfBmTmpcapbmG1bVRRBvnTGxD2UXVfFv5darpLLVa5bEbkTz1yaCdJgijw",
  "key35": "4DpcYEez4g41gFDeLkQo9aBihJBZJUygFmLp1S8CBW3fXoq4pFyPLWPUCSND4t8rnJ2ew9JMnQvkiXe1FDJDCfL8",
  "key36": "NfkbkZbQ5KPwQHs4JuKJodAaECP2HvhewzLrPjDpVuhBHtTgKZZ16Z4VNS33AxC8MTpvxBPNce1PeAa8kEPPmb4",
  "key37": "twY4iWaRhMmJQcXSxKAuutGo1qTaUDpfbrNRpUX7Yge44DZw3mDFJyBmEXzku4FTsoVckxF7mxLZZ3b22FsU1S5",
  "key38": "3jk21UACu2WPFDwNiuf4dsXRoCAd3TEif6xtEFH56ijrQG41ZRUsdLNyeoQhbtSbv4cAMZ3Kj4dit2SpiEDzXVU9",
  "key39": "48FUAtuP9u1aAnEnuP8EXU4HFDHx6K3FLgoPi5oTJgTczYpL4boaD7dWc19kiXk9K9knCDvsBW6WufxhTXxd2iWR",
  "key40": "4Sv65w45P8WePdaPiFYJ3G7dMkziTbUmhzRwRkZdYPNkVnqEMrHuvt9opvvGFuR5eAGzpDWrtm9NZRGU3d1M6sfd",
  "key41": "2BGva3C9Kvg2dyTwCcNLzfPdRcBVURU6wiY9EvyXX23jy8aUmaLKgazzCL6W2E7Fh77rgLbgfVaDzZZAk1Ty31Rt",
  "key42": "5fsXF1HzCs7d27AfZXrRVBr8vG8brMPYATamPiJSekurGtcSMuEoKpmQLDciv9hAWAZGKP2EkyHZ9mFHcxgWyj59",
  "key43": "1uRWrFQuZsirz5HWPpuvQh3PRzFxD5jf7by9DcvEQSf37v3DG2iNRDkZ9mvufe5A5BHUBctVeoNXKb25qhK5xq",
  "key44": "4g8FVe9Qt4DTMtGaispaaV9eiaNZmk5B2ooQMSsL7Kh2iHxuHeB6TMPDMhCuZiYiTNH1xrM15rdqKgqmNskNyQYN"
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
