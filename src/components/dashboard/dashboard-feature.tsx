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
    "2C7vMBjSrfDVw73f3cBb5r1DYZ2uSoqoPAvrHU8FDXXo8jGQd4PSZ8zDfUe6CtLSBTax3inAh43eDNWHZFFshp4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G39DhtdCAnoPkTPTYbiYJPNyBHHQUpEsVSmj4hCbAihK6s4mUSCHYG3XnD6Lxe6haj8UUubKWrADi5Aj9aTufYc",
  "key1": "2oBxwie6dfzCwcuwMXaLECuVKiadmARRqZqqf6ZUZPpzY8dh21ec6uLxVe2cyLGHWvAQaRqf1awqAwcnW3tgkoQg",
  "key2": "3pbddzGw8MY7YYxTgLnAdM3Tm6UvPpWAQWoMDoesZtZYkLkxtdMbMh7iVmnyjS8oA3fP4DK65HsBj8jRapruhpce",
  "key3": "2sTCa7YpUraxL4t237JQk1VacMpjZvn1dZXY1oC2fsYfYmrP6AhW23nZmeA7d1dv3Lx2Lu7pCp6dfpD3dyku143k",
  "key4": "ZvFpdsFxpUUethhXdbi6W8qTD8WHbS5STrVnWbQYhMxbwEumguxrpw8AeT1WQFsbZPtFJ8bfQSepReDuwECqdmn",
  "key5": "P3hPTKznDR9LR48QbAM9XjM3ZTpwzjrobxjCtyStkPTXS9Uj4YEPUh69w4jrGMFgRhQ9xMhJKYpJfCTXytLfR1Q",
  "key6": "4rwQ4N2RvJihH7KFLGFD5Vw6f1EJkbjetPa7CRPFhq6qDa9LZoWH2MyjXqU2C8noL547FaphRWVBmhc5HZSpKryd",
  "key7": "Nyk7ehUFSPKYXP8f7rDybYm6GQZWcGZzo6rryPJMS3782nstxxTQigF241yWZrrCYFvS1rHjUHzQpiB2hsXAwAc",
  "key8": "4uCoTkBAT2532vV5hPwBqKZChkpJdhNtyRin7d5EmmvG6Ygb5asEhgNWwW9vsGdJtkug83MuHr3vj5Up1k4k5Nk7",
  "key9": "2tdMpfSd3iNDca7LsPSwqTNDGMDNyCe4nJMadgHdRKSgpqeDMHbJBeXXRbWbghf31oN7bw9D5puoRiEFeiaJcNP3",
  "key10": "3ihnWbsHB7jmtC3mJB8YBLpZgCMT4SsE1V7CxvYo8UtNWXNuWQy9nYApDAm4hpksgyFAszmJbwZHm94Jj5zBMHbM",
  "key11": "2S61ZUvAeyzvfegpwBMNpFdxo2zoyozBxgSPNsA2XxdEoTnMBR4gc6RikcoKLShbxo3dP4BChcSuqZDjmyXtECGW",
  "key12": "5N3fwRtEKC9PPymYXvm9fymuTqnY7VxfsbFpiL61YSab9dqCYZkP7qHBrLBcnmBGTk4gq1SCHt7KF5SqNGVjTDNZ",
  "key13": "5EvZgpsAqtJBPhq2P2ENUKzyT4gGHCaSSRxFJC9d9uxTCujNxDtMN2RZPzxGmUy2arNmBbdfFNXd2JVsfJQKdLPD",
  "key14": "51eVjUMjR51j5TpVfCCzE6vUsJXuBxu9BB6n1vZ5BCBuQMDHk8eLopfJ1nv3oSFYJ8phXkHpoS1YrKSrs1MGs8b2",
  "key15": "3dzFsJC4Kjdyp4KsKJUmP1LqnAoK5W83rNibFD4LmYzmNyBfCaifWU26goew7DUJmfLMb8LQnRQFy37jc7tSGVvJ",
  "key16": "5SJPqLky4Yq6g2gcFG4qpMbdiM1j8idY2LKnF1LyX7DGq6niUTEsBVL8VWUkik3ZG5AqtPZHQzFjLpaar5E97zcu",
  "key17": "4KesXXX6KLCHJ2XgynmN4bkC1YYgivX52Ai4Z15yv4YFaBgsE6AL3ADq8aw9diKzGK5q2bZQ5Pk988BGBxbK1Sd6",
  "key18": "asgdDBm9F8F72CvrhiBo6vtwEnY9f1oarVqQxWWRvJjdCE2KKiXuSnAXKCbNfkU8RfaWwFdnmAJ9yxbLMTVv2gq",
  "key19": "xgN15MPWZA3bqR4rrymtnZHcNPC5oayJctZbEbnio6JKnCEcDZoR2NTBfwxWgGs7dMh6Gfnph5iNHCErZBQTxiV",
  "key20": "4BzPpkfapRjRf7Xy9K9XfJKKxvFhxsbN1ZGuG4V9txtoi4QbSrRC91W3qqKDgFrsjNZW2NpZSHNZ6a2KJpLxCk1v",
  "key21": "61wHbDFfzNTKwmopgUueaaqNn3YHDs33PTN98bvzaDKYyCh5z7Vm51jxc7RXkwftmicYqcUv7MFXDzK5F7YEXLmx",
  "key22": "nHCmph5cZe9Am5naY4QxgBsRccgnuVjUD7jqCYoG3x8Kxc3wfVbxsPwFEeHKNhpeLMwCPgQW6eisTVMb3RFJm36",
  "key23": "3yaTUrbCSXzPQoTXYyhCzkDpaXFtYQ6b6PqvFuqorTy6ZezSE9DRMtMkLEKoyjRAZBZfx4sapLSxzqdajGmUhPAt",
  "key24": "5QX6QtiZ8FU2b6PkojUTHcuSqeUCQg1rLkemhi3FPUXxy7AG3apEXWZSfLbjoVzTDydGmaizGdywh33YJ5SqTcFm",
  "key25": "3vtZPtzz1zZuo142juuFUDXrkDmj2YKT1ydJdCeBnw8PtwgPSk5TiiZt6UBTwBrkapcBkzBfGnbXxgUFZRs78tRr",
  "key26": "39Qigm3q6xG2LdAN8i1XKJ9sTN4GHNNBESMenS8QdCcuka9qdKD5a6qbSeCrxb491sq9eEhLcfVS3GucqfvKeq5E",
  "key27": "4sQkZS7jvFtLf5coYXX4GQW7PfprbYc18ivThgoYD5Sc3eodtMwmHB2UdMz4DeeDJe6azLmnT7MVcWaCJ3eahnmE",
  "key28": "XS9Cyhdt4PAQYeJwTXtNUcayf3jwmCCnuQYBQV8mSKjRemEhg13w5wybfbdeBUnGy7atc9B65aGxLbeDiSANcJz",
  "key29": "2A8LNaSugV7TdZ9DEypLyp6TKW363nsS8Z8zzERrhRtHdoHnwFJurZ5jyFQrPJuh68euRf8ngkBvWWayUGNkajGr",
  "key30": "5u56iN6S3yFo6mtWhEA9gDSJT9fAosbaKVgyDnbCekQiS72XiyE3geZ7o3i1NPSMMbzVkNjHzxcifrsHfbz1ndUA",
  "key31": "3PZGuFaqsY66bLjm36vg8rTyDaRaVWWx1vqqcfdXWdG25JTuGAL6GDsMua15LJPVYwN62YAMir3JJPPahFWXhK7q",
  "key32": "4cbSLVJGS1u6xDV4PUbpkSXwbmWhdaeFCFA6UYJw7vNxdQMwRkyhUXS2U2fSxkM8xdBeS3ATT1D4Ko2GaV6adnB5",
  "key33": "4mWrWNxFpBeR1oFsdGmG8rpRZXRFt8bG3EA94NdT3JfV7o8Rc3Lz5kZd84a8n6u9ETqRdkW6XgSCH6B1AhCSpbYv",
  "key34": "2aCikxkzRvzUyLgjTVLdE4ziakB612edDhT78qjgfi2gFYXTrbQgxzHJukbk1KZpnYtifqkEYatmbEizwNaHf78c",
  "key35": "2KuipQBWDyyw2kuUAyYobXkdcGYq29NXhHz3RS4SpRRaQANKzh5J2AmcH1azzBMs9oMP9aDnoR1rf3esfgkvwMbm"
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
