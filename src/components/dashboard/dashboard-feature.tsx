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
    "4gh1qnVGRPyG8P9XZBxXLRcoay4xxdZKxyfNZk3cEvdiATyiCjVeezXQxeXmviACzUh5V8HPk7bhWa5QFerYZZyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N4gKkKtuSDJsKzkCSPYbvHMJq76QFuX2LAjoVYNjjESQCHg2MzZXb21GuAJsiTqqHcWJT7qmQTksWeKCbcZhx7M",
  "key1": "5yGfcYLcFykdVFxLh6XVxN9Gu83DucHNnu8fjUCNH5Z47RxZ59oYdbHfdY1WudbfFoA553EtMuKbMrX33qPY7k7j",
  "key2": "2jqF9jmR9RVWnWGuKVPPKXnifXKyE9M7PVUkRM6pBrupBwjtCw3p1jLnPhpCxaEhsS9TVJjnrknQ2Y1rVTMq8dPc",
  "key3": "4iibBUehgSESD7tBy8HRHKMEozJZPuF3THxra2pbvnREyEGnN9hu96WNdGGuUHsKfGzGAXFHFdTXpP3Ab9fqA6Pa",
  "key4": "ZxwtY7SKwh8gEyh3tU2PidBew2pxjq4mt9oHcmZcXzWu7AkJQ36nVXMG9n7S5WD5YmGk6hd2PtwFjA7gauiHxeF",
  "key5": "35ruLPHfXJox3ZT2bybPcyTYR1FCV7vUd9dtvWDxPzRCoSCS5vizNKxDEhHbAwBVTkXZpJmMBT66wZNsTu3AJvFr",
  "key6": "2rKr1W7e7fZH7Tm3dPvoUCpqR5YV53frvZQUdqaX8ttbXdu5rcKZRECUji3VoNKB7Lrhq9dBiwZYNLpzQsfapU9L",
  "key7": "4B4MuvDQF5BoC95yaMAQdBhsLEi4GgzLKUR7rSu2y1jsGFHGuH2YamLva6i7DUU4EgjWg2S8EBV1PVT76rao22HB",
  "key8": "4ddPZ2qHyvK646fU3SJxadaaAB4GZukgngg1GaPsLnnF2zU6hR1X1ZEp918c3vVdDAmvhDG7mHHUbFxHB5H5sEx5",
  "key9": "43gC1HrGHQkDFP2SMQQU17hEozrVQDonGWD36TcTaURDbr2LkkUxH41ACF4n88oZohyfKmJ5RL2cp5W2KDKSXTsU",
  "key10": "5atU1Gdwjms2ySQspBttUFLfRyxZzPFpKnngjdPyHZANoaRjbhBTTGBtLoh4yiuJGNwctjBCFSjAEoHA26F5g4Mb",
  "key11": "2HQFnqBHMP5VU69Qf8zJDsYsA17azJDzW2MNtB4LW1hSte1wokbmrhmV3apAVf2TbNVdoQPCsmzxyHYxeUDYoWXB",
  "key12": "4MCj59Gqne3HQHWYuqMjxmGKiDADXY9iEUBaVoQDdhMURui29z1gV7bM9Bh1yr8RDk4RMpsiTbwsDi2X16ZwkbzZ",
  "key13": "5ZcxT99YzL2htZjo3YqWhPHJg26JVBnXkDxRECKeJ5xYBgNWP5nDAEJohE4cYmBNfGG9VuZuU2aAvzkeVZ6iTU3w",
  "key14": "47LbdeHUDEY2BKcEu3kJPq6mdYFWUeNmmmzpf1wcHYn3PknaRuViTfEAAW6nhdmN1NHQhQFsoNRNJRK3UN5maTQi",
  "key15": "22vAFDX64gP2xroaPcACT6nTaZ4yfRKfc8Yvuh4dNMFU7mAmrjW9AvsAx2mfs2QaGf93LyfHriUB2So2xgKwfyjD",
  "key16": "5nNfbaC19b3wnkaJWNKwoPN5rT6EJMtwBZemyzrfUmSVSi4kgnwvYMVC5Xxf2XERVYfaBHgay4PyinxcTpmFyVpF",
  "key17": "5wUMM2LUzA4FmKasF2kqeMpb44pNjPRJh2B4tTqg5wov1HiCKhqv6dzJn2gyEGD9wtfto4vn7Jio8zisq7BK1DHj",
  "key18": "5Enkr2BpcXEsQHyp9NJHtjPdaELTzcHz5ahMWufcKr8mGhLZ2QxPRV8fARbjqhWLoNZNHGfP5CUA2bZiMemZPqNE",
  "key19": "4RyVxPw4KZdCNqB2fd5YX3fPv5h8qwmbkhyJ3xmqDcqdbcEXecPQkfbsKEwohWWKMuQHhWdDfm5Vdqo4Z53VgLPC",
  "key20": "2PwqdzcVcjb5qGua43kpY8KDAwqYUzZpAgM6kbGNaf7rAWwS6NTFB9buaGSQ6phbxyBqctw1C2S9CkHnLLv5QTqN",
  "key21": "4RKyqWWJ9eSE9tKgeZWqGJhvY14KaPYkyYPpHbdLxNxh39HaWTQHpJpSDbsGzwW4FR56KYJGQwhQrsX1PKPCwVDU",
  "key22": "Xu2WJC6YbBSEWvv5FkB9sL7rbR3g22geT1gbTueCw2mQb6gqNtn5dupjvQu8x2o3hANnf2ZpSMwkYhoqw2kv8Xq",
  "key23": "5skwRVjVESxtCiJkNkE1o2MnEaJuHJWvRAJ9qmUk7QGJNqjbpf3h2LZgcuRFDX48rUSRHK3iM4HqmwmFcNDN26Wb",
  "key24": "4q45aQPFZC3Ur1aez5oLZzy8Xra5YzGt7ZWz6hFBDqEJzjVGbdgfPe9dDYqDgfVCF8kze8vqGZUCnGXch4MBTmhD",
  "key25": "3FVZWYr7oE9hhEa9JikRBbg2gdqd3jeApnntwmp2tt3TN1rChkdcsoV4z9PuKW1xDXJijPMq2n9rb37XjCSyvZX6",
  "key26": "4Gmw4ZydXnzTBAbw6BAjcn7ukcVTFw6LXxTZAem4aqB7e6w7rCWFbu3fLPcdnC1bfWgX9RzB3SkzrBE4gUL3vgmR",
  "key27": "34MkRrQsmzqixhfXgKr8rZK1Mov417pbW4fRB76DWEoPEfanVPwcb3g5AebAU2kjsM9nmduEJ97idXZEeAkCbiwj",
  "key28": "2d7K3FxqeAZEx7osPLSAcVrcnmfpGrYLdmcEytcSbQ3TGJnMTyNWDdvsmARbNaeehYT4fJnBDZ74MqyNKDZstaxx",
  "key29": "283XZwzytocMbbhNhsnXjbK5HXSgH2nMEj9mjdCTYwgCyPNcJJxFdbyad5pGoBb28tCYk9GSLyjFLfgoARh3ZM47",
  "key30": "4YrK3NUikCPPqnSvJBhKiv5Zvj7zdiLydaJ4YRtjDJMsQgwhTzPmMboPLvnasnA2kEQoEbhtJdLb5qNBfjxTEeCg",
  "key31": "FKg4ivbN9nUU5F3tS6zyQSNuWfcx17A2HCR1xAAyKvLtA2yxKXeuG7LD3oJ1auUn3DGJtTqHQu1f9wu3PKXF2za",
  "key32": "5KXU4KDAaV3wQpq5QepR3NmPgbCUziyTtwoPVLNPYSqBFebndNb3yZcgfVmSgw3ovddgiucdoU7TiSmbmqp6pXYv",
  "key33": "31kQmWmE8htXF5f9B6ifv3QJKaLNLXkzFXV8fZx4wQpdk7s5fFLA3Q7YAyoSD9THb6de1VGqKr66wh5PEzxmFrHM",
  "key34": "2TYWLyyPqiYQq9Kzfeh5RT6wYqxnNU7JqCx3Nf2UxisgkwuvQ3hsCrJPueab874tajPHeqZt2oXe1inDo1bTuZm1",
  "key35": "3j9EyxhJpoJSwk9hZukz8mixCNMc34RHbYQXPNzgiamHHtEELDnqgCoXajX2eyiBSrR3Mn55MEbvCdFvHyP9jiF1",
  "key36": "3pGZUczo3CDpXg24bVHH1nydVcjM3q8g1cpJSxGuAWkZXAbmmNRTZFj2wJ4t67W7HAMpgoLRaeMSYqZCMZTvUfiT",
  "key37": "59VHZAaUbSXdEkCQodTkQoHGyDdzxS7xSxWTppM7ZnHj92o3kMwBuk5GKdNLmLmEAgqpAsocuXSyfxjE4LejZM44",
  "key38": "3x3qZ8Q9ZdzRoLA2gDPFCsQHLtn7Ravz8BwnwNfz8YkT7ok7gnih2kojy5VPuhfp6i4D5xgUqTE4yKbqwbtCLop4",
  "key39": "4vy57p3UDYnaJBueHJULYP4NZTQFegFP6W3gMRd6uXvhfehr6SZ8dM1FhuzRFAFsNQtv8cyLCrckLeL2i7j18ww5",
  "key40": "Av8zY8prnTem6zbSzectgoyWjeAZK2jgwoa8GycM5x5XAaGHd8TvSaoREQyfBYaRVKFtNRJV3AVkkTLftKS5kD8",
  "key41": "4FatdbQwVbbZuUTAUHGf5YfeLDypCqutrzfuU5WAHwFWttRrAji8QoD9edoCfJXqBYdTmr4WmiwiERJUq5rnbd71",
  "key42": "2nRzJsgUhg6aG3oMWo97YDBhLQSkA7NpUYtrsfm3kdvqKkuhJmwtLWEWQdXPFugJ3UwMJohH62cXuxb3EywZxQns"
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
