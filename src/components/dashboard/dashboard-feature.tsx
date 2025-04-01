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
    "42syuHbeomrhwQwgCFeHTu4dqtVQUAt4nzN3WzLv57jLotJVtBufT889qLjdFeKe11p8P4HKU8zThdJbdqFwp6NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2evBAUScir2MjLnYNwoPqqSKK57TBZiJ7XSSVK1doHgsqiz65NdM75nUMVgKTpCbNdqA5HUHcM4KdE3z26SUoGrK",
  "key1": "4QTe5D6vFxEQkPL15QWKeUVrVC6KyAE6nVkGwqjc7fazRYapeEbodTyUknao4FdWnB2ghModsE7AtsF8z94o74q",
  "key2": "98xEdzaav9WnUW5sKFFjXwBUUrZS7oGtkTjnqXuiKpaQwx3p3h9MQNcZ2TDAax3in511gjAeCgouAuYF15unMLv",
  "key3": "DHRmv1iYr5NB2bQqx7BZjQ33LywnmYTsEK8wdGvBV8P4Guh1xhm4jWGQ488BjLGx6K96PB3cMLp5U1uZXB9kJ7n",
  "key4": "4mErw9FvKjsJCAMvnSwwY2brfVDYw9ngXL5ydRULHSmy2LtgMv1wjV63hAAEMqc1ZeKuLHd3vPupSqPhX4jcouZc",
  "key5": "2YqznQjctE72JDJghhZBTLoNuy8bBW3kTwM5XSQijGf8cPGydhUKZnX64u16eQrXoezZujR7uJBGheX758ZBZeoS",
  "key6": "3prUZdGAvPkZTrigYxudq7DL4ZeV1dX3wbn45cstFfyoH9ssoj2FWbyhsEZ4zgxZQ5R5m5tSHG6DtUsrZz41Z2mV",
  "key7": "3brGbWZjCmU2Z75w9tLTd4sQAcVbZzFMm9H2Upugs3XHEdovar1DPZnQioujFNYLHsvJEGY4iKfGcvpBuGpcnkYi",
  "key8": "pRzVuWVGcQcTSjkus4dMMYtrML5Bx5fkeqgD5H3ginWCHPruJQEF9KVXjDobkeVJGqKsm2VPzBnuUzCE5HWtU6S",
  "key9": "4t3vttGiPq7LfUoGecav44DECSzakZ3W3wnW6x8XAZXihxiUDPRQUXfPUgd8PK3svtgo2xN6HjurytC6TkQYwB17",
  "key10": "f9txAnJieAV3sDB5ay7UMXcr2pRYZTDgCtMBhuHQwDMg6mmUEjXHAwxmMWGkqcZ7LAoPeRfytb71V2HPvs8gaNk",
  "key11": "57FCRumPJfEHFp6FNrfYdVjf5YwXwhQfi8xzrtQ9WFPnCcCzKWPuNT1cZPrQsUfiedqQTtxGMBF2kXySEEggxRjt",
  "key12": "5EEE77nBAe5EhhoBFPZLB8uXw1i5ZDpJc4PUMZmq42mP8TcQUh7JLiu99AbrHXf4pXEwS52YT8RERGp6J4uSEtMQ",
  "key13": "2VBXrgm3j3vY62F3PjNuRnK9mQcfEofT6f8M1nUTtnBR7bMh991VPg2ARfrkmne1kwTbAz2JdUerxvM31zJwKept",
  "key14": "5rGu39Y2z2KgYWSsrPyVfWoU7DpkKC6Y937tMUSSCgyMziMmbUY6Q5vN873hYvGmLUGfmBDkN5ch4VsJ5K9eDi4S",
  "key15": "2FyrKHsX3frkxCEGv6N9YX133y3hftD5RiJqgvxyqWdpCGQUeZe5YJoLadAZsSKZG2AejVd3KpRBzA1zAUg5zhap",
  "key16": "5bALxXvKFLMsQQrZidpcbCo7g9WAxFVLvnUK5BRVaX2itsaLrb9NrrPVxjDaEw9rZXe9Y8HTiXwFmvv5VX4FFf9o",
  "key17": "PX3qcN3EVBDTBnPpjs82PsjMMbRTrbDZuGPHFydDSmJ47htwb3AhHckqVFDNREfz6J4h4JEmUH6PoehEkhmVusR",
  "key18": "5XJu2n5pJbb5wdFfXiLK5WWFz5d7UkJqdbV29QxMUDyLGzGBU6QyUmvGwsvQwumhrmicrAhJ6kDAJgGMBFLJVKq9",
  "key19": "5rmjg68h4GiY3Ch4VFgJQeLd8xPwYGhcTwuajPB24oVavwC4hxHH1gpv1kJHT2tPhZBh5Gu9P6po1KkguN2ZjqZp",
  "key20": "2bMuwJotThJvVmB7nqYtHhDZSXWvgwy9NP2HH67hXtaM7SPvfzDzx71eC38r4jSEmHi4na5QE5JNSssToExheAPL",
  "key21": "3aGj2HtytZKtsqqaZVMLop7WoWohjnucbFzon5ZDywzP1SM5LbthHmBQop8pxY1juQLcqSiviELUGSaQ1cG6FppA",
  "key22": "5jAcF6tnJ82dCFYvQx5KiHt82xtJtrUDQ5bMJLqhrArpybemVSZVvSAjrzpXWYmyk3ro7dNkNNsatVfVS5Q9K98B",
  "key23": "ZevxjNWjyVpEeM3vq3vT9ZpH9RZhyrDrJyC1i3D3kcGkxZ3ApKvzcPTiw2A65sY9CE6nbP3cLzYvKFN5RPo2eTa",
  "key24": "227RLCM9yNd39XpfWGTWFT89ApA4pi9UnqrjAgeUTR9ttvdHjXn2KNxa6Y2UqSQ5cZqLZEPzuod2AmXdHAwoxzN9",
  "key25": "o1xByg5PxcNygX3CnHix9rtKyDYjrB6wXsZXjCABmqqnvQtcBdTPQ1gZ2FzBz38PRgqFW4tdCMovVRyeLaWegSB",
  "key26": "6twxMsKiNMzwfwWMmyNdbNe8NGKDqpqC8yyQQTw6tzT7u8QFyZLknQR1jxiGSPKn2jZ21uJuruiMTYQTjrhkdhW",
  "key27": "5FNuSgscTcxBk3FVo1cu2FHyAfM8Zk6WmkkPX9qFsLgp8GC98V7MqN8u3zMKfwQtzUi37A7VNeyTuQuE4wk1z8Wr",
  "key28": "2EF4K28oSX6NLtXb56ZrhYLTWAon4Hy16fqMqFejLzL4JHf9qVquchbySrxDBR75Bc2w5oAa9Pen1nuUVmPyXLs2",
  "key29": "3VgwcL1PjARyp1PiyxoKzd37bxAvdwgYQLDbz78vQymZeGb9DpF9WQQgGcd2Y1VYv9Uu9fBx2ni2ZB7CtSPRjd5V",
  "key30": "3LRhQt5CiXU8ENaZMbbBspky1i2nqmMzDKaozuoKoeuiPkusdQCCUwfSCH7PHhcA1hZcpzqXidj7wnzQjS2vmqTC",
  "key31": "7QVsmN2P2sqxFpHY7feoSXT2G4qvGRuFjM9GqwemCvcrLybuJR59iiaGvXxuk7buCiLbsDGEfYWz7xu5H4Khbcg",
  "key32": "4yjgz9dhaQY5paRG6FHzcX4LJprLk4qKq5BLDSvcS344LAF8xryB3z6rcpuYyN17yAAG7KwFUSzDgqVzRQHzBCxR",
  "key33": "3AhDJMGtheCfaKTGySGypkRyZuX1byqhzzNRux3huMGGknXWHCtomQism3moZbYPBUAuf3RFUtzdqjwiNpKmVA7e",
  "key34": "3xQ2aRbdjpCpUus4ZL7aX1w9i2SUs4J9dASpXNBaSsW69p3N7ZwdxJHRogmUQPxgfTfqxiwuAw5KUFA2FRaWPXhL"
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
