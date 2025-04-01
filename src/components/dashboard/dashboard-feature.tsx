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
    "5jP9wLqromN8ByvfHuK2PVXB5fTNvADbQqysvniM6Jvg9ZK33nEx3eX3kkGhQxpNZ1KNY6CWiaQWNRVf1qPBjSGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKLnQDMQGXhZdkgKxvJGwbir911MDh75GqPxdxVdnnrMj1QKDdjuaainbxWmX9Y2o821gHmqXNHoe2BHnWvc3AN",
  "key1": "4ehYnKv3MNcU4aYa66h85dn3LP7xuC2hSvqPxNwj878Jzr51iJb4UDAR5LXmAiEhi1YX23Sb6SRagzAnVWiHZnMA",
  "key2": "3Y8GUudRsg5mmU35YutVt5V2aH5BqAu1QkRwpa3DwiauQxmtVn2rwxTduVg1at5Z8qoSnZwpn9Uk2yjnSR4So5Sh",
  "key3": "2JpJzZccE5mxbDwweo8z8Y4s6cmyA4ZdxT5Cc7tB3Vh6WvVbvgmiigHfmc4996czsrBDqpXMcKgCoidfCsapZNrz",
  "key4": "4c6HPkwSLT8dzwi2N3bcaPr7LaBZZZ5T22zojjAwvntDJnRirqysWQDDkWKCGoosKNiNS3Q6vYUFzuFxPj5Xmu3X",
  "key5": "2BcNpcY3nMRUA9Nt8cLFtcZ1TDPHkxKsiKD3J6HCdzgYpAEqJM4QbQC1bcTFGAjmNbUVn5MoAjdX7xVhPLwCP47w",
  "key6": "3e8QMLwBVyGWZsKKNWS3y43Qk1FteN4UrYDLitZ4VjksrttmDCBd5aYFLxFKy24sNp5A2yK4Fu3sD1oDAdjGwZ1M",
  "key7": "4psh1GPh6Wt8SUbZp9BvsfsKwptmk4wnuFoLgGrpnxSJugSuFFhDYhyrTaVphtSApvWJTZN4aNhuDU8suwpig7zS",
  "key8": "43ZeJtHbDMX4rVyA8LPej38vpCctbX5qqYwC2Kh3AeV91Q155WewCbn9as6H9AeULs2x4atgADQ5He7vb7sDTGww",
  "key9": "4vfUnsM9TdCyaqDr8e9FWys23xMasThM99eMWwL6Kgd3bMjA3W1jqLX7Bt1ESXyMy52WJCMsLZ1i1iSkugSpvbYn",
  "key10": "m3ELsnWQWJ6cRBmvBfaBQyuK3csXn8jSSrZSbC2PgiSqHcoYEEvanBGPwyWeVfYMAr8Gkpgh5Ff16v2MjGrEHXn",
  "key11": "3knRCzZdYfC7pqKMsdAd9nt5QskBeeF3LVWDrSawvBacC2BoEiBfeFiJ6N2z557xAZQWRL54ea6Bt9HRzqNKqDc2",
  "key12": "5kqbL7H8mhC848zDjrWnKcJLsusCsLyyZPuRqRgQY7iEgquVjMssjX4Em1kwGmtp5bpDY7PuCSHx4VMqtrcL4mvb",
  "key13": "2w5sy6RV86CkzseSAQkk2PdmZ6jtXYJR8VUTqRpx4sQtTwKJ48h3J6qA3qqEhkde6ShDpX8f4f93mpbxH6kgbZaB",
  "key14": "49Gb6PNS1ftBthUaqsv4i1MdGvxBx2Vmjo697F9Pix9JLQJS4bPFCzk5CesRCCb7mb57TUtkjgGfvusXUFMLR3Fg",
  "key15": "2qb88tJUN4jk4HA6wCPT7yt1eY5ne1Zc2A8LNkwtVNBA1ozcx6XGghBg8dub9nC4KWWj7QiLHnkecKkTcVEywYpw",
  "key16": "2bRgswKLX2izVNASUJFdyFZdMoCBao6fy2zYmydNM19tNAt39LAEkXkHi5ykj4N5AGqtPiFAiWXYVa3CDVmTtMVP",
  "key17": "27eqid9bvjToWd1NiDnvu6eWbxSSj5XzcpaMjA6Jaby3s9JFnHHy6Psjdt1wtpygVdT6jUJzsSxh3DLjHctbufLL",
  "key18": "4YK9op8YAMNztmRJypq7teNJPJEdwaoqC1u7sFgXXfKDnqJZJTp4si6FCH7QA9gUQr2T8eEaj9FFLqL3vQEXPPmV",
  "key19": "4rGDkqUGQ4SExGKXqtPem5W5XiyCnHBXMxEed9GyHVrsbxN6AHCFEjgZAa5TogaJyhjnZ3Aybcate4BMGDtcgey",
  "key20": "Dx895vwQ3WRwvYyS5BMEhzdUNHnoVFNUFNnm91ao8zGLgNKQir9rYb7h9oa2DpTGKgErjFHT6SNmTXyH4D3Tme3",
  "key21": "4CniZXRPHvgaQH9GVx2MDdqf1RefW5773bcktoNnC9V85uCzM7dnmyNfKgSnCs7Z23Tc9U9d8qQ7SJtQr1xc7nxN",
  "key22": "2a8TcKShaWn3T573andYrtm2J7sriwLheLLVhTn99auf7dqWa9q4zS4gjHhRfEnerGe4UoRpKb1PWcqLXgt5nECX",
  "key23": "2oxyQW2vTCvLVaBMBgCywepmh7nJSWiGbVGE9ShKai8aVPZXa2j8dU2e5FW9RBt532jSVL1zRKfwHr3m2cxDNmgY",
  "key24": "Pc2o2RHH8nMBwiWwGApN4gSkhxkgRja9A6ZWo581ha42V6igtkRTpLPzWLuw1q4AgJKVLrVEqPFkfA47yuaCb5t",
  "key25": "mKK8rL2x7fiSELp6UmNSpHBiED5LdT5qdw7fL8db7PvJuJGfge8fnqeksVKUsTAU7dnJVmQWx9jHiSc5TtAQkvw",
  "key26": "5LS6f8e5B1WM2EUe9fQB8cFrtQDbxXUn7SJASUPFQBmS7EY3E7adcjHaM4jRG6rNkpMELCuw2GBoZKb5ZmqtAEzm",
  "key27": "3cPV1qzMqAUb2rarf8tJeKLNvbdf6y2xiLg1gPB2fDK4XL1vBYWwtZzU5z1dCWeuDQXzs25jH9AMhdYjTFcxNQYs",
  "key28": "3YpbvMVC5vN9uh6FhsWCxdnfBDiMzqvWr8PwxHAKWnZ6FAehxgBEZSz1k2s7byT8nzs3xkbkVKvYo7Jvb49yniDe",
  "key29": "4J7WrNi5szCknVgzbRhS8t8S1MvkKL1ypgAMj7j2SB17mqy3MLsSYg3rUHFtnExsp6dG6iz6DYmXYkGdRzo4wDTx",
  "key30": "w5vrEZKu7Z7nBGyb3EEvGa8GAdqtdMW937qTyApih4dFbHkMNLMPzaJRuD9hBWPjAhDiZDKjwgdbC74VDWdqiS3",
  "key31": "sxF1WEkJH9zijXoSumZssYmQvGuavR1wW2HUqPSECscscKHGycTR6aMwHht2wtsrmmf6ZuZCp5CAQn8KKgXGvAH",
  "key32": "AYPnLfThmHfEBsLaQLKWy7xvEa3ACfaCWPyUKB3YCBruxRbvnNaPzMnNy9jYqsEZKCwLQ3ZFsJ7o5nbHwmKmmSu",
  "key33": "2FMrBPjuFoqyrrfiTP1FGBaNJb3CZSg7f1rowA3xrcWYzt1TpxbL8e4TAGHDdGUvzJDANtGnJ4xzTwHVtoFmXTFr",
  "key34": "5AvrbY6ehkKNNmffpsHm6hzp1MHmopfBBmXGYCzJUzdnBEG6MnCkTEFjEivpFXx2WDhaTcAUGur1bbHeEYyAJwkk"
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
