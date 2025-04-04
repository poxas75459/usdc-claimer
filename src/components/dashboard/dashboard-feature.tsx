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
    "4ordpx8Mqtu8YkFWV4KFigAN4aymPAjvy5EpCU5FVwA57Cx5QJB8rKBKGHeC6vLQ45YSPeFJaKRiZ3K7vZauDiKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fb2CvSbeCRuQcThuF3NWrZTJPYwg9p5NAxJMNimxxpdjcFV9bbQLd4jvdAWToVgdqx3DrDvAvhWMKq9rp5dq4yx",
  "key1": "51jTP4W4iNw5MVELdrqZa3aTxeELVw2xLUMgYcDtKtxC8qmMu13h7d1jc14dPMTGtjSexiAuJy7AEdoP7bZy86vQ",
  "key2": "4eEzZFHyiJE4umaCaZPcCFKZNHeM1rtM1FgEmnugUb16nbV9fd8EhLf2BmTGA8mCmJHcUcUqs8aMFjmQyBQpxrgF",
  "key3": "MkVwFgcMFRigeHbYNarssTSz9kUuNFUrrLoGcvNQctx31nBHfu31AVG4dfgkyY3n8afoNXP1AfpgbMqPqfcsDzE",
  "key4": "9J2kuNd8bjxabH3eKsJwGQrq6Shj8WjS7Tk2Kr9JDo7fwX8gG3wi93xzH558x8AmAsbf256cLrtRZNPStYA5fV7",
  "key5": "3qgiUDvSE9LixPsi3gSjhYDcuQMLvSFQdGDc8CBXr1XTGz89kpFWReyhCCJDRsCNgTkbpRD3k8YjGUoJdxLmr7RA",
  "key6": "66M1gWd7A3kDBRE5UTi9cwUHwDMmjtAgp9s4mtZzX7Z39tSEZt6Bmtuv5fBTAV7FqAE9fJZEZwiMFhGMzPdkDABL",
  "key7": "46ktzFuy57GmMN2e3qGzZkZfKnpKKLG6QjqdaLnaqfV2FjLbnStrs8SLDaeCyDX3hG7jQA8p8wzt84CL2TNNRViY",
  "key8": "5KNLX9KNrqgGmT6B2gc47xKBXe68NjvqF3Zf8HJbK5uxi3SuSN66tbKi4Tn4UHvSFfV3XGbCmEL7mbK1rkP7Ah24",
  "key9": "4K197cARDPkVaaNzaVfhkeiN1qfuvJ2yhQ9upmYn5e8vNoP8zPUTXXxVKN4HXCxq6sy4KhYuubb8zwSMUj6zicFo",
  "key10": "45PZsJLUEuFedTGtwUFR7bvd5igVhmmBYX1Y2S2P3Gz1aNSt9PutiJpVbFwe7TigS9KGEPFaL9gauHcjcKVksDyh",
  "key11": "5A6Pz81rkzGRmVfiE7LugNYWNWhAqVyTUy242RffmMkabZKwUYAjz11TWJXd5qqW3BcotjFoNerTvX6iKdLS4NMa",
  "key12": "3Vyd4tePuHkFPXro827mfD4nZq2AS66Emp5LbRmv8SPnY2oMYVXetZHKHiAq9sPRQbTyMicxx4YwQGNWZpnnDz5X",
  "key13": "2pi5dX2Cv7au2jqiebHnJYVXZ62Vot29H9h4vc2hcv2xMLEZiqLSJnasphBRVihEAMBQU3j4hxMhm9mywkh5aDUR",
  "key14": "yUsWf45QM5BRqWFXCNU2KXvJ13bY9Doad9XBpnDab8t3LZQ3AYWSWKEzgTZoPxLZiHqKwzHGxq2iSoUU5HqV7MU",
  "key15": "5muzKuvuZY3of8h7Nb6X3jVsBUHvsWLsQxw6suXobb7qe7i7EmywV5mPq7ukn6ZAbUsW398PPM4aHpVcYJd3hDRz",
  "key16": "4VnbQU8bunjsC7PeuxQ7gowKZE8pQRBJHcEPnSjQfkKugdtfPaD7EdBopQUZqj3GBC5ZDUL6gmSoesEQkfS2ZgFh",
  "key17": "45xaGpykrYyU7iEi5J3fUeGiVtZeknMgE43UoMywAUoAugUAdeCuexKcuEA7nf3bVafWSutvj8vjoe5Rebj799zo",
  "key18": "3PykU3ec6G3svwRxXPtHpPRHqxL5Etg9WGbM1m6Y1ryjkTAV1qTF4hcAF7bg17k1DJ6cM2RAF4ZubAWxSJG5u1S1",
  "key19": "evKt3yhhJJWFV8BGbMFvKUkcpxo78bf4U7441pBxnfY8qMTgJPcKgvDhUzWexaHQAdsyoy5JmRCeUbDspwiey8W",
  "key20": "43RFURmJytK27QavSDYXuaTF7D6hyKKePF5oUYEU6rneEJrYAxcTpcG7TmJiDwCo9iahngEADWJXyuSLK7JrMwGW",
  "key21": "2ru3pZY6nEhcgDaNF2WgYYK6yx8usDaTLnFUkRHDiDJ4pex49qRwU3vDCy8dVitd2nhNqZRCB3MXeERssLTgeQGB",
  "key22": "23bZPYME9GumBnkvgJ7EBHFZJmyUHyR8skDgUxuWh72sQkMsD5kDyS5WaY5cV1bgpBaSEPKXzcWvXVmyHXbfqPUD",
  "key23": "421STwpwMrDk6eKTYZxrC2V9xaWRrJh3WLYd53pV2aJJQT2xTUMZ8Vh4iwceg5poEWHuzY2a3RnZNCRnxhhrs8h8",
  "key24": "3UWWcoqjJQoVsPokGKKkWfJQ3MUzVPs5KhGjwUpSpjophB71rGxcEUnHMya6XdatxFkPaCL6RKBg8F3DJHt3uwJw",
  "key25": "3YrPrTboHGhUjFo9SSERgsT4Z6HZCv1FAziATryGhMueTMkE93gqJnw33SsWZDUKh3GQmfWTvZYPh82rwzzcDLS6",
  "key26": "5mdcCnaXNXy5DfCFHLS3vmENQFwMepzqiiqdzb9qUVXFCBq7MQFN6qY63kza6cxCRw8jTjioy9YgSgka87a7Yhqr",
  "key27": "3LvGBYmAEKZyRBCMJBcxV5HrhBNUchyCzvRfpFHaGLJ87bijXvJ1cGLGYKRoq4XzjrpHPCWiu5Q1kGDPyad481er",
  "key28": "5wa7z3V8fp8yybYo4JmEoL4x2JkmC5fLENJfKsWfo7dDQxqTepC9nTZ3mj76JutVURH1JSYBqb3Vw5KQaQ6GuQth",
  "key29": "5RbsH8KN92ZeMx463WCMKwgSBEuCXUfxgWtkKjZGSNadeZKfUjPkw48SGH4hvD7hRppSvNHYeUCSNVi3wGaQFtjz",
  "key30": "5domkHtGTfew87ApVcrsHTaxvNTaEgdCJ1D1oQXwoRt8fWB9ZzXJ5v4UmqJV1EDFSDGMza1rQ1moj8KWmn41faGB"
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
