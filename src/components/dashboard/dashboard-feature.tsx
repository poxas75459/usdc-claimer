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
    "33BF57sX5BARJLufgudN2QKCpXe4ce2svwNFw4mCtKKW3FqSrZJ14zWzTysiQ66HgBiabqpWjr8DbH29oBauBj2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55MSg45kQ7ifQjxj3DKeTWdDur5sQSiFTTkmNkaCswUiWyk6ewjwbbzGuyMqYjtNm5u7jmY1tNSJEuGddP6WAbG",
  "key1": "2r5RoCja4xjiQkbWQG1fT9rEqm8f7fEytW89d1gVaAZ9w83tLgXquh9zpJvggjWoBGaX8LaFdenNHmVmaUK6XP1s",
  "key2": "3ES6imiAWkpxfmcw6upZTbcGfvkujxr3epDT4wDKr1JAchpwAYPG1UBUKFqoUeK3bZJH48X9YYPUxSjnA7QSuFis",
  "key3": "CwaWywaeUfvv7n3yY9tVwScUsRci9mPrYbcZGZkxXX18wd13awKNpih2jB39Yzy4CdkvqNDod2W335yszbLVvmH",
  "key4": "34FkSkVBaNyX9nTWDVxBmHmpUUagGhJsYGf7tMgcpExR6tYBMh5pXjJLxTcGtLiYUzG4YyUL1ENL7rz2jmr3s4a8",
  "key5": "2xWgys1wjBARt1A4V42DqRqwVp3bcwrRQ1QRWeLxs3FFYVjy7MVHkEEZaoRg1qSyPLSNYttd7RC9Nkfou1aChAL8",
  "key6": "6256ges7jrwaAFokfAdBgRxG9Ndb2uk1oTWznD6PgtpeC5QmuDD68jPkDtH52CgB7weUcGWg1edG3hfdNes3NSD2",
  "key7": "4c46sJqmHDbsB3pApBdcv2Kxiv1e3bja1JZP1TYgWqmEyTW4vqPbQidRiY12zWm4PKpgMTjgnGNdV83NRahmGZNY",
  "key8": "2N4QqxV8XrX826ZVEfZbBxn8xDVxCNhWirdBaapz2VQvx47NpY78wwS998nfZzB5XfuUzESLZH9iQ87pxazf7huy",
  "key9": "5vNrfgaxC9qtXebaT553sPgMkVfXHnWiS1xDWvGbsYQqLdr3q4C7dyc8qHopUgGu9kBdoJU594pHBd4QUdc3BbCz",
  "key10": "2QBbQAPuBTS5XT6UN4b92LdCv2f9Kk43vWpeeBCKeHcmJ2oKNcvctyP3pR848hBGBQCkgrSmikaCU5X4x4hiPepe",
  "key11": "4ZT9H5nSDKJRdkgvAjiAnKjSMDHHDJR8K3fk12X7KE9TjKugwL21wMobgiKawRrsgncbTJsbFaqXr2RdYW3Dcva8",
  "key12": "3a9ka66qY6Xm6VwVtq44161DhjyEnWrPRsR75xt8doH1v6FocudRQ3dAcbzPPzwjDh8v7fUHFhiSb44gBRo3jiDf",
  "key13": "ovVdHn1vZtRtJPoEQMhWQAfjct5PsY61TJg824DZS4U8HAw6D71cZ1JQoLGRWUUsWaR2oLne9S1xxEYspuqUdVD",
  "key14": "26ZLUzbYWwPStQrj9xa6VuzgKtBnKbz2xenRfnXSZQmCFdTeb9LVa79Cj1UTRwPJVSn2vf3TdYQvBAqnogKAhY35",
  "key15": "5KcrP85oPSxNzQM5EETiTcDR1nFdpMAmoMyrdXQ467B1KQxB63gZi9KRucaRjF9R3Vzgvv3bWtsG6UAJgcgAbUgU",
  "key16": "yE89b39PstjmFarZjoYvTW2XT8RUddSj2wsJGG1cUBGxmRGRZxZt7QTPVRCcKT2Edf3jzUxapVtPVWHSSDQP1YR",
  "key17": "5LoFipr6WnhmXerMEN4rQWoD4vca3evnZGQfaFm3XQZcNxCnEDbuyJdnGccMzxTEseETVwPGrXHdUxR5bkKuANbA",
  "key18": "5ai4JAd2cQvof2u7HXS4bJrqaH52yzDfbAFHxVGvqia8U8mAN5SGV4wSfppuNgA6p7oS6KLkNhQNVWhNuqNbZNi1",
  "key19": "3j9bQ9mb4ymNWDg4HaJcRqmTAHLMEKmXM8FJwC3EksJCtMSLj77orzUwmyyS91GRfRiLudaFoyt1tj8LNrTJ6uQo",
  "key20": "4bEiRhTGqjByR3BkypKD39SCvez1nhESRh2MT6SP5UB35PM8vBy7xMrR3ajpmN2pYBRJ49JcpZ3PT8JzpD5Wd127",
  "key21": "2X3pDCkGeRKhdR6Sx4esmRkYSbh3CJBucwEKJ23xQdskwSAd5LKxrFrt2f8qtCbHNgM3s3pNEoyYciCxEDGR4dDT",
  "key22": "3NMfPBez3VwJ2v5z3ApNRJ666esAdibiAitrZDWBBHcmLqAcBCPZpyoMyKoB2mmDBX8H1aX4jGD4e7eR9DU91RE3",
  "key23": "ie18nZY2nwdvDEJ8HS9m48Y96w1QnGg1wMjc69aJygLZB6cXNouokFyQNywQFnsDTHpm6qmUPhhTavKcosLWT6i",
  "key24": "61eCc9yuYqX7aPDMtuM5B8pqpJBvsyrGj4yVGPJmrUKP85uwMA2YkzH5XCaGZhFQaGwMZpiEhFhDzd5ML44VQ5Q4",
  "key25": "2aAQHFsKTrBbYzyUx23ZVtiXGQrzkKMbeguqaCEhXMkj2W8G8JxK4KJ6qythnSMVzpV211chDJCqPBptAzkvFZ63",
  "key26": "4EEQDYmfQve4aMQkm3ot8e3vZd1vtyyTzCG49aUWj2P5S8youN3mP26o5VBuHUo9FyrPARVCDdLhKAeKba2c1LxG",
  "key27": "2ANveK1ThnMkD9ui8F6vkEf7vDQHtb1qzU2oYZsHgXntsHzgYx8H8cBnE2CxBmg3xGHyN49XFGcPCj4yLFNSorLq",
  "key28": "5aaY3kAv7JYsykqFb4K9NSWfJ3rRZHBuEqdbDQYNmU8SHZAnDTuhdDAULQjXLLAAJxsnsDHPTBsGKfKMDcGLFsbB",
  "key29": "4ozEErLK7NhzwRFwTWrVk1xkBirG8XDB9x8esJVAktcuSiJupnV4x6UFPriR5uLSsTvY19Gv2iZqrKkPCsArpZ3C",
  "key30": "4zZrcyrwuCjpUo9CKFFLzC45m5tqdtRcNrX6DK8MXiSdm1oneRVoVGLf7BsjKdPFMVKTYZHEManj418PWPeyuNHW",
  "key31": "2oRwVUSV3aTt3RL8dmKxMDYPP6cYFA8q1jygTjupwaxrvwPjgimKiJXjMtL7Lsfq5dKHQ81bueye9Tf1gzLr1hDq"
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
