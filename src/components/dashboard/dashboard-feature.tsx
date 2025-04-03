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
    "5jeUctWdn6G5YMEBSTr7BNqRasB8SLJisXWBfk7r8DXQvLzJPEGetwS8YNcX4p6kC9UuCYdq7dFcyKQCwT8vcUmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uuREdPQaJyEJoBP8m1dDKgiiPHoD1yfZ1JEuKbExPr45sVeJ4J2WqpxaEMob82hsnqcvVmb8VCGnrUPjWCw2aRb",
  "key1": "3qXwiE6TsAQJWbcHP2NX1aEf3xBs6mAY3FLvSu6bLWjCqo3sSSzYPHDakVG7rbNwbhJgC11Ye2e5dcHAgBn3gA6r",
  "key2": "3EUtkcL1Wg2dNPuUQxnr1G73YauwYE91k36Sv9iKDUyAVUyaWmkrgnrHEjjzny289AG1hbC6YNJakCfPk3Bdagsq",
  "key3": "2n5kASXQMynWydqL8foioc2PYSiN6JFX5gxMFyzY2UjyiqBAeifmMsPTpfAg6sZRbDWsarAiFFm35yq5SQmuV1cE",
  "key4": "4jgsw3dVsBKAMKae4u9yXht1QUwFjFF6XTVyPPk7DLaGWa7QuEuZQxc9gdXhS6x82XSsiFftpLgCogLoP6Xy6sLg",
  "key5": "2xB99xsqjZK11TuzuXmYbjr3EJjrkzZVffja97xzxs5Vt4r4eeixjvDKdVyZ2pMpVL4ztxB8XGH7ukyaJxxYMcsx",
  "key6": "oy39s3x3ejivF64xE4aXVYpdYYaoTMgNZijkh7oNUWZGfSBow9eY1KWLRLrGEEcw7DyBk2b75zVtmqeKrAuL3H7",
  "key7": "3JJmi6jA3Zq7YzUCFL5v1P5dzMXePsXouU1UdG5RC31CZ19cP9jkb1Y9Lgs4Ey4KHTADHyFNCpEX378BSLXCe1mg",
  "key8": "4Usms6VuR4ptmXMsNDxEZbFY34Uqj6CrLeHeiqC3uUKo26Mpy7y4WF9ZLKit2n21LqQRS7n4wNoDE45xfiTpDRGz",
  "key9": "2U9i2pBDWyQSWC5TLEWhhRhEzWg3QqMBpxCXwyUvCjw6HDukTTXMzQArBMnWGEzvecnKHDxnDD6cb9YFhwLAw9u1",
  "key10": "9NpgGScdB8wJKQFoymRWPhzqmXcezivMXj9Y74AXckRshgPTFJAtdKAZBpJKoAfaEgpULtxAgrcNRYSXqte9fxV",
  "key11": "5L9hs4a4q361uLGFTg2SrLXfkDzqFihPqyTW6w6bHXZsDzXdXhBBnzv2APmA8VtEf3e2RvsYrwb4GJjTjdw2u6nX",
  "key12": "55JhC1aZWr3ARb4GmGEK6TzxudLrftEvJAXyakHArd1BijJnWYXmJwQDWKkC9ZRWqWnD16iG6nCrjXnTgESBnnoW",
  "key13": "prNJtRjE6WQHNaQhshMXcqSi6ZYq7jdGdhDv8pAEsVmjyzAqvWbi2z557T4fPwiw48eNaVjEEmKknjH2Wk6JDK2",
  "key14": "3Be8oBDvRktuMbjX5GkzXhCU5odTb5fqDM3Hgxoo1MRkgsXiPyQwhBhFiYAMi8t2kjppr2gubbENefLJDKBQ8nne",
  "key15": "2RxVR8JVqBmjtzkCr4zYzFmDdyeMyN3PuBdqUAXAP2r8CaHXNm1ory5YURQVHYVNPqQ93nmBSpJd2hZLLRvG5Vtp",
  "key16": "4yQaGoj5tnAXvhS3GpUvUj4sQ56woEJLRPd8c69oZmfKKmNTRr6u5D5W7UbHosc27z9mzjKMLe4Vh2kHU9q38dMi",
  "key17": "4zmY5RBhpDW3DCHFU7LrSTkuhGyhLpsuw1y9SV7Q6qEua6pTX916KyPXrJXAwVzyuFgpnX3rpJnuagtpEJJvc8aq",
  "key18": "45CuqnNcoeCPUb4UyghveYuMmMZm1v6MMZP9yC5BqjDKs2Eax7EjkQutvhhKBQ2uwPEyq4QcNvg9VBPAdLQ2c4nd",
  "key19": "5KPnqMc9fnN3aJWUmkUcreB1gHbzGMMguPQinVVANUQU9zAfsANdZQSmKEPNK81hvueDDpG9UEngDNvVqMn9LzG5",
  "key20": "5EEFFDJ4aAs5mHk2UGXZ1e7HETkL9z7uqUpH8GoXHSUB6rd4YZUr326aDJZsMCWoFwHenfm1zXEpu4wisVhWwbnt",
  "key21": "385qfhTqj9ZWc2YtAaWTy87PuYJzaSz6my58MVVr8ptZ5hdVpHSBTKBSRGC5hCjfMYpdzT8GvgMTbW47zPxN5WEH",
  "key22": "4S92kMZN1c1JjWusVW7nxHkiNhq7hHZixBRZRn9G63YQfoH6KPeFdTezkjHuxB6BQhejDedQnGAgTPMANerGAcNs",
  "key23": "5gMPakssy19aFfxZVdtCiLxq7LfDQi7Q4Ewm4qBvAy9q6T3AjjtddNXrzEfhQGBPWd9Du1JejFTEN5LWhVmnbewe",
  "key24": "fukugUfe1iRF7pqdUWMWpgx1pTEKismQ5pQLjhoD7zz2dwKM33reQchvHzy2xEzSrmmkGpHCCDdpw26FdihdjU5",
  "key25": "nqA9Dv8zuRu92pPcN7vc37tUJqaik6U73gyp4UMpapqSWw93hdGA4wVe8FneP1qP5TJMa7rttBJXAgyFLxPM2yZ",
  "key26": "Mo5uNhRM2ZSVLS8B9YGfJZnneygxD8qcmdHTpgEFQE7rP1iKPSo3KTFz8VwJTvMedPzbjSKStbZyjPHeoecbuun",
  "key27": "2ZqpetKeVGvUvLKYsSeajC7C4MGuD8cQJ1JFvfc7bnJWfvtEwVsMrzxhstEJ75Z7qWAWQBfVvjHDF7zNAcUuDM6r",
  "key28": "4drVHW8NqeQfbmyaWNwZxzcFNjp8TyJgCZ2ESf5pXrP4g7nRwQEQFZdXob9vTZPNF9Rab6Hdjj56QSnKMqg52cYD",
  "key29": "4Bsc8jnBHCKuwrQC33239uUj83q2ioeB9ZYmqKoNJYCGewBvXnj7nzgiEbqvRV4KPLDvDvr4BnjPJDzWJE617Yx",
  "key30": "CzbfhMHPtDcPx8Q5ZEz14Ekq6PK7XTHRX5Z6SkxDbNCkW4C5xVkDvnt1poa6d4VNpB2fNHE3nmse9MAUvY1yyeG",
  "key31": "4DX8xtJxagiMeBDVSJ21QsD3tRQKDnRFCoHoaqoNKZ1obDrhRaFprZWAjwGnjzMYgePXN5eU5T13BcptZ2U6mPkN",
  "key32": "5o5em99dWdqFhTT8ZhrTndRspTodJPefq1xfMY6CNU4PZBmbf2XuKxyUj4vxJLpHDrqofRDyoPaUKh4KeZyHjUSe",
  "key33": "2tSGLWfNXVt45GdMMLtj3htfFEzkAwmGrN4m3S7FAhx11qbLYPnJXX2S1U1UHMevcqM5Kbovq4tGpwGTmvKpWHcz",
  "key34": "MDLCTdHMsdvg447EZt1ZeWjnELbZVsMqJ6fHaXhV6nSrB3XWUrQafLCFU3zsfk48oe7JhGfV23rJXsm8KXkSdgP",
  "key35": "5ruCVEx4jnkmCtj5itZyCBaMKifSbz5hm4TNpr69zbeF2zb6CPkrytnsF2YirbQzckPRavn9ZGJvP91Yih6douLd",
  "key36": "3TP2z9TaWJhWGjFBpemcn7KPcH4oiHnR6TdNkigT7EuTF8SCEAzL8oJoWjLabcDKRAEywtMStFVyp83nMzgigHf",
  "key37": "5hfJXruyB9TaMaLPAF7JWxvmsXfF6bG8wdokgNUpceCRXKV8aFp3t2qQZAkJPYWGhVGEjrB4SDvaqhXAbjw37gWK",
  "key38": "5QSzgVcPGAuMToGJWkrQmfzo8GCBUkFYZ4muA2xB6xq913UtB1vGm9VjXerH6xq3GcD19yjtSTPZr5XQNnW58wQ5",
  "key39": "5786oa9hQ7HPHfuoQKMjnxooJeXqvgqzNiiS86UEpkWtYcs5W2oyEUwKbxaTAB4QsEh5kynErZdofiE5fgJc15Br",
  "key40": "5jhDVZ3U7jTpUnZE2g29W9eV67UoXzDTiBsd3MRsEUFzFCeTwEVs5z18ctcoKgVhU7f4kivN9CNpbFEcC4CLTpgi"
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
