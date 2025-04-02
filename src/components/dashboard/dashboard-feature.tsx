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
    "2HMCsJKA4wNPrYrjvERq6kqtuk7Hgy1tuCeYbzFWQU4Zb91xDjbrPKmLdLzD2TFRAeCkDcuLyq6chF7hQ7DSvgCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QDRuwvd9zMMqMfMa8MYPbgp2ShUPC8qo32LZYAgqJDrXrrYHvNjvioeg2Ja6oGa5e6uTKKjoFKpTzTzwk5RvHPz",
  "key1": "K3G9TvQQtLb6HmMGUDZzvAoHivE8wRFCm8CAvghhavUoCVqGwnV8QJbx6z3GXjkRYudYD9bF1i7GdQvUioGfP7Z",
  "key2": "3Z3N48pXsmWKCwdAd3Np93Nf5GJmZjkzcL97STKnFqVDTXN4hLEfs9h8S91WnqqicLUUgpy3VJJMsWwkKkMAqZ9L",
  "key3": "2sTpzjCAR6CYaY29paYfdDLhEM5Eg4qUAaQfupWE4sN3jyaXjpM28AXdRnX2YQFYZKpwJoe9PXNFL2AQjD37nedu",
  "key4": "5QqtovvQR5CDATLHb6fZdcQtZgcJQcymneP4BH6LUc1K8fKZdahWPmKcAhFHWAcARdfNeX7rpM7Lqp2EB9ATGfpU",
  "key5": "4UWEEPWRWCHyHXeSRdgxxe3E4hj4osS8G7ubiaYXo4VWcKxB8etz5Gts7FzoLEpSzZnsoaopFiGQysDGKWPbYR6J",
  "key6": "5AYNiqa9QNyMorJBY2Z32RZ4ErWaD27WzQZyckPYpHqAHKWeNKBoC5WHBzcfMR7pEWhjrjqFBM1aLuNminU5UGBF",
  "key7": "5S1veWUBzU7vBuqwQiHxAYrgbFrjhF1usdyQhSDG8CQ1h9UmRp14krVpiZmimSCJcoicQpAdA52yJh6Pnv9neLsk",
  "key8": "oC1z8WNT9V3wqAzKJYkskokkC6jZXmmqCywnKMp5r5PkSq3oqAoYJggwL2pAbuLeN7SoT6HbGSrGbD1xk5Gc26N",
  "key9": "3JUnXnCFNcpLsJnqxjDgDsa9G8irPco4FRs6wbKZ6NFDjoUD5PkosPLtuNumgLdoo2xjGKFCZwr6SQ8rT98iARXc",
  "key10": "5wGL8mM7QGLuoHDfHh26zTgT5LwCp5Z27YLfGBR5sgQSssrur6yKn7R5gT4ZQexTrumLWTq6oC3Bv7dFkdVjJ3bp",
  "key11": "61dBmuq87qmweJosEXWr3UGdXRnms4W53JFkPGDNsFYnRCcD28bDYdDmjLuk3XSnN9mCL28nxmahzr2V7BVBaoZF",
  "key12": "66VcbpYGA8tWDDbdp3cncPgtNyTbs3pBEFjxn4aynEqYiYZYaujNwxkyQ5gb91XmnJigUUZ5jwY8Fn2g9oncTzXF",
  "key13": "3eVdwUCKZkXeEjBWd4271BhDnEQV49mbpzpKLLzoxmaZUjCg6wyJSzeSMqRA82YFsVtc4Y6DCKxixmhSmnSuMxFY",
  "key14": "3QNVBgQ7tFa7nYngQdtLMVLQ48ZaBRz6SwwdUFhDZ7hXYJcQ5mqaTzaXG7NvFkEWPX87k5SVrPuSaZV4uuCSqYih",
  "key15": "4p6Efu7xt84BwG57BtkFeBAJVrMhAK3heG8qJWNeLnezgFbvBRGokZP1kfmgYoZLeS33g9Dwo1kR5B6ta3xGAxnk",
  "key16": "3zn4L4QyteK32vukgWiBBYozEQXUaKtWX6XZU6xqPonPNrjGCUPn7VP2hBK2EZWcgX7XycmU3U9FLLHwFwfimQcJ",
  "key17": "2RdS1rfpCDD98Kf8VBhCjAHcXVoFfB2QEtPFcHYKWkMBUZDuZMSKedRsNHiZTiFrJk9aHUosqfx7wqXBCb2k2H3C",
  "key18": "3FCyZhHBmAbiXj3NN5FGSKVk3MmPUb9X12jjfArMmiJUXyMLFE1nBnL1cjpNJcBMbAkPKqm3k5itNwD7jruwi6gb",
  "key19": "4EbxAmzjhsEafu6T2PFwp6PW2gHC5ESxQWquY3FiaHGfnFqr4hckBtJW8wwU9eA5S9uJeR9cqZ3yfrvyjmyBDNaV",
  "key20": "3wcyR6hKStw9iwt49dtW9xsNNZXSb8wsiwMfnVcv4eSKVg2Neb3JHgpUyDrMuL1fsqL2HJsChtgr5M7a4P6SpdFU",
  "key21": "4TDWLqB7xfjDvm5sJGsdRCDsNXtwo6QbWfKRAcWrfyRr1APKDZd1TGhXbfqmSRC8465nxYJnfrXtU2bVWfcV7zdf",
  "key22": "4VxxB2aNvB3gqL5iSJgabLavmRTejj562dZ7XNL7frX5hUGvbjwx42vQPXX9SUwDhXAhmFjoLJMoyDTtjVnDMJws",
  "key23": "552g4KTbiKDHfTLdbwL58mxmX1ARYjKNRSfMWDbwg1XBEGvkxvHp3WbWxK8UJZK1rDt1WWyR4UU1h9M6Tw3XH2fL",
  "key24": "3H7uAdVRhwo8y2Bty6sfjw2zZNv3HvH5nUWNwA3fohR8hxQWLwDNCdMLFduQ6guzcjWTNLeRnEQ1bkqrLC1qLv6y",
  "key25": "4DGtLYpRxiUo48qXwnxTiJkUpcSBNWMvHJTPzhr4EnsVHdHGKgo8kLX3ALCZMn6HKhbD2TXJr8bJWf1mvk3vei5Q",
  "key26": "2vdUSX44FcWHDw6EYSx8EavY64C8Vo82brqT1zLLkiyhzg2QiGUB7v5yvU32r7U15nAc8b3ukcTf7DEqkJfDhXYP",
  "key27": "HfSeLjYA5zhV6t3PcskU9wrY8z2L4gXEnbYVsGM4SSwbeS8b75VD6ZC8kaTfRc1WkShEg5B3e71tiGrb52cPg9z",
  "key28": "4UTLteQfNgPvzzskdhr5LDxF3DvYC5XQLW4ayspkdfAUcEXDAKPSk6NMT2ABkonmJukpQs18Z6z3t1mghw3Y98yh",
  "key29": "3eNav9gKzLV6kLGdFNe3bKcnfUPHGxcKrwVrEfPGLzJQtLkN87iYVhbSVWVbaQTwPqqLvatvgnEzBCxYvn923SVF",
  "key30": "2uNBNChDhqjo8229k7nmWw1TyFgsYyNaSBi9VeHuDm6McHicqund2Q3fpxTJEPnzkL2RyKETqkNFCyKBPDF1oNAD",
  "key31": "4xQ7cXMn9ruxapp8PoLCMpumS68y8ao98vM1EB8RE3yznnEuWNAW7kVaLzSV7bZ6fozcLaSceVvzQBaCfsoF2mKh",
  "key32": "2JXz7cMCsJ6D2zme2ocJ9CoSMfw6M7jDfzMqwT6h1mvQy8bcx4t3z18F5kQJtSGJSsqMgtsdxWwDZL51arsy2Dah",
  "key33": "ByqZiCfRYmZbDf1VNTA2zKdDXnXD9gJAQT9TEE25hv7gQgM5j5rG8JuKsayFajKtweXfvzk4HvFSXesdFCR5KwZ",
  "key34": "Q4hSkzyEH3vtCdL5eFVzW1vbHbPJM2owxwB1tXo1DRmiZRyvimeJSZ7yPvoNjPyXTjrCuDo8WBMrBbtsADGP7Ds",
  "key35": "3F6Ki1wbMw1Ds7vyNd3juDzGXvjKAi86CcRj8jnJxfXDsoXBZiXgS1JjdX6nR1D2RLpA8mCsd9g2KKVghPoqK2xz",
  "key36": "JNcKwFWXXzBeBafofq32djm1MjxQM83NFChVtc7pEj5hA25qmtJXka2focAe64zXs3ok55uB9RiNLZhh3UZa5zT",
  "key37": "47Euzpju5agVvuPsJ9XetXBrUgCPhHVquQmsT8T1foFrWZjWrFLaoNfn98HRW8SYaZ7Esfuy4YEdsXQEDHhnF5mj",
  "key38": "5E4SU6o9DTirE8CgirPFnjShrezy7MqpY9Q8w5AaYMWs9rgrrfJn9sZfBaBgVya19An5tBvqcEKzyK2XpkE4QjJ3",
  "key39": "3UZiCBVEBMd1bGj3FhHmx4irtisa8764mAoRz9WykckfNGf7XPm5omTQW78v93k1b7mqwpEjVxCVCBf28yydbJuv",
  "key40": "55my3rZRANf4dCTsD5HFsyn4qCV3XFDSky2uNGyuspatvEusUWFk1fppK9pxRWnKfpvZJHX7nY8i7ZG4UfAEnaaL",
  "key41": "4V5evdjnCZvwHeFQhuGSxrtDqxYQVJVUSJj6cWnto4yVGhf1YRiXCMkDg7Je97Uk3Qn4kdRPzpdUjYs4Zc1vcFBZ",
  "key42": "8RqCud8y3oQM5b1eMMT93zbsa6V5Gxri1ZngDCJ9RrBu5UfCLdtHT9QykMdJ2XVNN7WG9UP3qYdGDx7up84xs8X"
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
