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
    "4aToQfU5wpbsvjx29r3b9J8WKrEiXZ42KgwMPqgGZeGs9x2JJPz3tVqmyzf6kVAps45hurAbj93pmtRQKcsrsTHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MUZSKAcMWQKUHwqonLYPkWzZXjshKKyMdVfBtBHEFoPs4jGoHDxwnzeLuGWXhLpc1vc3cTnUMYM5w8dh9USSjf",
  "key1": "2n7DqxFr9D83Ugs8nRsHbMHjKAK18VxJxzGKAxXR2MPZHVpGNFeCpqzQqmvvfauiW7HEBZvXShppSE3SeBaGdYZ8",
  "key2": "4UkLmm2msfac8iPdurdVRbVTUxWW8AF9rStcpuPCFuP75gVgsQBcgf6Bb9wQSc352GZCrrvWf9qsYXdHmEW91Egq",
  "key3": "48fnaDkKkbjqDGqPyi8vqXFfgCpMrYd4zPfAmrEkpHuqCydpnZBqgA4PCYzRyGGVE47H59xNrRJ3w3N9KGZ458Tm",
  "key4": "3Hq6YYHMtkMyXapxfMrxNBEGPWg2AtMbJDWa5RhUzWVeWTgT89QkGgaJqPVriTW5SsG9fwyXHtpwhMAh59bzmz5b",
  "key5": "5Bg3U2ALPqMHKTTcjx4bkk1Yx9jNSRNaGhXC7Wu7uB2yYLbzzFMm2yUKVTukym3jL5VMSJTQbPUgBCGyfb91bK6P",
  "key6": "5p8Rybqeob6HS2WnaPJLKKRSUXRwzptJTrLEdeHvMXgMq4FQguveFQHfiMrHYe2qJBrXad7uXj45GuQPQSUoQ5mG",
  "key7": "3nxU3gH1EoHeo1La2LrPNuxG9uaKMQd3e3rmjXAwpHA1X4YDTjvpRiWcxWLiQB9AxRjfB1RzFyd9TkCkzhXUoziK",
  "key8": "2oL21dgxrtSHcPVw5ETMACe3qa7k8v9vvcurgkhYfWBnAAeaqb4YgUQisDHNo43A947Z1Trtv1oY8FEbzukwKdTe",
  "key9": "5T9aopu78z65eUYqfJFtpQZtHkK53UoweVWw5NjwtvqiKFMBHzwzhYKQpqRHrxrwD3ABBxTUY1L7TvcSSA7AUZ8V",
  "key10": "5zRqunywMaBA9VZNxu4AjYsyd2Fnh4U64MrdBALz3MvbxHs2bbu9Hzs95wcf5CDnEQTmPm4AX9wTuc3Rv6VBfQ8t",
  "key11": "4LioxLdKhd2yZY5BSBBU6yqdid6tTQngpziAoyJwqiz5E3LuXkYiHFTwdPoCcWuELwuJqxNc7NDiYuVJ8TFkQwdj",
  "key12": "2zWxFS3Y6Zb6DVaWpT5PpqmXGHTGeWULJSp7Cp1PUt6cPuLeuMdQkRXkV63Z3kBzxptk4zoZx3eQ2yBxVKwPL6PT",
  "key13": "5EHLcpoWrcynpXYJMp4iJdr2z2T1SpBerDUFxeEEqd4UKmyo52VBdD2sLeowZcndS68GB7XN57Qfeja3Hy4m3Apr",
  "key14": "Bcoc4KyMQAYQAkq5dhcn2f5JfKc8G3Va5BxBuhZJiGhqj9U88yasXgckdz34n4vnNiSHMEeqa7Qj1Y4Ru1E2nqW",
  "key15": "4Sj9V9P9eDHSRo2yKf7AkQ1sYh2bVLfzD5dhDmQaw3paxyoRQo66uNeYTYMiJArBpk6qCQwjsNdPCm8o3haLJVL8",
  "key16": "5hLCahyCzKiiwnxc3QaCdXmqDpkuFSvM7f1gZKo2k9ngJ67kUyiKUPbF4fD7i7SSZawWoiFA83ixhDMFCzZbtofh",
  "key17": "5gqdXQi6V5DH8ke3QgPH7n8VnsSvbNFtvUgTxmnxY45axJmDwxr4ChG4YGdyuRHvFVpAL8CBzMQkFhrhVQzcHXsA",
  "key18": "2xvzraZroPP5Etd17LgXSf4XaxBbCMd1SDwpfMnZMviAznAyfhn3wPN1EoQuhR8otPdwM1pVyCZjkZN16ztEwint",
  "key19": "LZe64CqEC2x79voJN6Aj5ibPvTrYdMZaehrnVync5sKRiTtooUzghr4Ne63fkaQH7vJWudpn5Lw7LxZj1Bw65df",
  "key20": "5wJn2v8NpiNAmAZsLTynAb6jktRR3KwVXfVTSCMZyVjgUwaM6cpkLjcaGq5b5M1FYNpSDfkupC8Eibfxs1F82Zjm",
  "key21": "4zBhAN8Axhindp1E1pmwEH3FEJnaqZEud7LLdahZSKFXF2ofxLbZJ1qxokDaTNoYP2FSQJ3bHnAY4bbLH4gDSvQx",
  "key22": "y2R5CFzAiaQcwYAdoaZ4bGRx3bCw4Kw7Fs7dxnJTcJec9EbcTaYkfwzeRHQBU9EadhvJYceCykZvf6rCPX9okxi",
  "key23": "2rN3fwo2HNQHo75qiFWHmxmRtG8xnckbYiiRjGpmewnFUZ4d39bPhEJiQThT4kuMiZ8dZ24KjbXvo1JCa2tnyJ6f",
  "key24": "4WncirLT6CHDxxVvkx7bwRWYUJ6stNS1RDuoaJARJb2m4qUbsyof3eheFB1z7AEZkQ11xMQEKSHR6JMP7sxuxpJU",
  "key25": "5RvMLdsAg2qZhVDWx8AtM16wwy4i2Bp2bqyaJbafVjxBkJV2kC33sNLTTyUL7tSGgqbdTsG74ZFZzg4N3Dgj76uN",
  "key26": "54cB6pVChjen59tkjntY55K9yrqDycmGphMc7XEjs1rYH1SsfT7jhP67vyLLjaupogv4YAbwbQH7EXR5EcHD8wHB",
  "key27": "WhqyWyGpqK4BDp17wSvQ2Wk8nQHLXXus5bbRL5uA2mNdQuoPcPqHtqXxNwYeMGEQgeKXuxUNxzk7t8p8PexhxQY",
  "key28": "51mQwdy31VUXj6GPvJrJmc7pAPPxu4BZvccfAeWmepayy757pEsebgUYX5k3u2pA9NYdyDvq95bvnrkzBpsrLG36",
  "key29": "3Gp4PLYVi8BwZ9q4M51QaLofixDmXz7gGP9ZiJKSyyZVBKNNxm8HFXrGGLZdewpc1b6FKHdtrh9tjMkfBpGS94Ut",
  "key30": "eH5MgvWHeK7kvVGL9FcWMZWY3i1AYB4nJKmVLg2wvNP9RGRNA4ej3MhQqmhT4q6ysscGT7po8tgGZzu1WaxDNt8",
  "key31": "5ooe5U4HDLNgitYnCkNd4He355rrgcHSgryAn9eZ5FhEJYXczHzzseujZkxpnrpTqQw61BerNZvC9T9SVrAQneaa",
  "key32": "49amGe2VavejWr9HwX3VYsYyeH1Cq9f65CCreBwr7quPK7HVisYHpnSP6QkksYdkTaCpMUHxjswiDZAAFHrq3p3H",
  "key33": "5EL9sPstu3e4Ld25XAAkDvUzwy6caAGQf6QX7grfACj34m1yHVrtrQnYZoKRsjsxk2PkbzPJTeHR1yr8QyGzmxXn",
  "key34": "3w6aum86PCuXV2yqYFfaQbkBbKPWUFdPTXjgsQNe9hvdCLmr5vuApLDdG4N9ZCsESe4wDiwogNKYBweqohX2nq2h",
  "key35": "31XDXR7yPP5DYPYGdiH78aJ57Q8ZBhWNppBUxdtbjH5R2BpwAMMzjCuNnMyFzLXgnA6pRb41r7PmKjzDey8TnZhn",
  "key36": "5wqC1vvGBtfYiJijzXf4wp2SzGGihE4J8SYHhRgq88eg574AYHz3JwBdL3TdgsTYFjxM5zFf2VWPXWxqUvR3ykbD",
  "key37": "66TVdrFdEU4K8FiedeqTq1ZxJ2buFXc6Vsc2j546MYgeS6fuxcuXCe23fda462qV6GFKy3syZzr49da8aS2vroX9",
  "key38": "2gBkSyDtziy8ah7EHnLucjov8waEkwKdK41u52Vm2negHjr6P2pNQo96gxwoNAGJG5B3naUaThPjwndneucG1pn9",
  "key39": "3GLKY3wvixDedaLbevWiZMrdMpq7MpGwJXR69ZHxHBpz4p2jZvUxWyTq4ZeMscmCeQt7qu6jw62i4LYZYCNbW5nH",
  "key40": "48Xi1cntaTnQRBeN4aC9itdveyAYCe4EvriPuSgNrJpExfeMSSqzYMnHjd8rJBJZJApb38wqndNS8rCUpKrX2EQH",
  "key41": "5VCmEDTDz52v9mXafSKGWwPFUm7T5Uj1YgKX9FBbn9awAkwP7S9zwKkMN4f364iLJoaSm4H24xiSyB9EoyZzmaXu",
  "key42": "2rHQcteXsDuk4Ek3U8KhvrZeSWhXqJ21nyL3GBJYxmvREciyXJ8TdUS7YrxqhpdDX3s2qrS7vvjYrKLBdBtc5dDr",
  "key43": "ReFhn2sBLJvyJVvH8EJ1jNhjDyVSNUEJFKoWQUVUABHn3rBG9XJNR7ZniFEtxpPqq2QEooUMBw8aPrZB2JdGGuL",
  "key44": "4mVZKQ3FaKuwUY7YxM57AfdUQB2H9syirhiQTd7QsfP7SvGp97sRq8sTykHAXk941DcsCTcZ8VyenCb3LQtW85Wp",
  "key45": "2jyGzfgAeF4aJ2qmH5zZf8b6jMXaq2E9FD2tZj8xBNx68ZSTrZdwrXq4jE3otuNTYuYyG1ZtyqxZoktEK2uScCxM",
  "key46": "fACpcZGvdYxz2Ddo31isdoTca582nE7SVaJV58fqpCLBYh76adg5LLmCF5aasb7x4RHkFtgUDYbfpe8UBKE6cjc",
  "key47": "5hejWqXLzLZ5wETz2z3j5sz7QQqXx4ybGSEW5zkt7YSrLojqtpkCszUJQ4TtEyCw9Cge7ZwtVA7UeitKoL3zpadR"
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
