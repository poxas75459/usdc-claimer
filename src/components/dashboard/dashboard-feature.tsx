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
    "4QHpjcgLEdjSqBZKePa8vZWJwyyafCjNCKUpkHyRe4SzibgSBDwJDMVCo3anTfSGjfjEa2qWeKjKCg1aAXNephFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZQFsyA8NZYhHQ5wbDjJwkRUe8ywH4MdrpWH38mhkjXa3bTepMv7yQpCEX9qCX46B2qggWzrBVXqg47tv4D85Wh",
  "key1": "naJQkygtJZB7GNncy2C3aVaJboTxxfi5LGV9PY7dsjW9LrjagdUZabPD2NEAR2qiev8k33sMRqeJMYyfzqn6P5B",
  "key2": "2Ty5gveMkffnzpGUQXcqSaMwfyzTemQgjDRTXiYovkuVSxaH4Ka8E4p3pc2qoPW2Ks51XdWQFMAtVAL16yu5gkR7",
  "key3": "2jDMhagBnXNGPoyuxj9QPZfQeSSw52H2G2hzBXaHeeGqxxPmMfQQvZbzzSMcBB5bZXgBR4yMFQu4Hkopr86ZBe4x",
  "key4": "55C9yphDNHum6bZbmiXE4TiaArBdXTQLUdYYfiSroD6L7XeXrcN1D7uyPCStCbPNj8xm4HhLfYJbXHHHGfk82S77",
  "key5": "4WY21FLvT5quiuyoy3EdZ24TKXhjXkM6zdg2ZfNaZRxtsH2HbLgvBkAH6MyfKyShioQ8nRLQzMnNa9FQeXCBjyQZ",
  "key6": "5JCA7Bw5LUcdPukDARx16DAVt79r9JJHiNd3XK1wYhNtykWj8aAcycQHvwHhX9kotrKSbNc5H8wrtVEp4g5mY4zD",
  "key7": "445d3VVP1zJ9Gd1MjLPG2CtSqprQYpfp9Gwo3CxxFHeKcKKthXn8q6MekBV19ukfzXdRRoBFZSvSE71Myp8r6xCf",
  "key8": "5Da896aR1t7TeH3VG3Txcm5GhhDKmfT1GcG57GZ8QKURYbvFt1BWjEmCyXSGiqRqJPKbXFCoDbY8J6PvozYquoyR",
  "key9": "3k8i3nCwJUUhbf45YrybanSahL7hK7NrzwC1uBFtLSVFsXJdK9CZWgJHwqT1USjaqCapbv5KgF4NToN2mxpYqtSU",
  "key10": "623d3Q9wtGg1oieLspxa6tz1xNMDvVGsHNKjgdpEcpjBkZiMVTsQxHNsquikbXChYHJQfkVV13hWWwVUiMqNK6s6",
  "key11": "5HXuVi7SGbgcgoCVi4KEvcM7DRiJzvthphhvbpgMQuWEH2tBnqTSQgp4zqJxECYGCyRG9airWwbW6M4HwTFL2fyg",
  "key12": "5fPGm7wcTkWZGLH4yFunxWzpQtJ8h6c8icpFeuyg5Z9CZk6PeNmevhVdTj2n4spV7qANv7JPJ3NX5JabuNUWfjvq",
  "key13": "3DJ6VRpKUu4ApX2px9vBAp4tFAcc8aokcn1MppTpwEpAvrkJpoXovjYSJHpP3MUc5yoMCx1hPRGVSHCC6faQ18mQ",
  "key14": "3sXDDfTKEriiGpKztCiAaQg6rNPqqZ949GScrr7SNmqjdYJ84RkvTbYn1VYdMyPpqdck1FtVqVVbhchWAHxngvnT",
  "key15": "5TspmA6sgQf8cGoCc2kpaBSA1PDo13WUMac4ajG3WdnJaeb7BDYP4teCJ7TnYbUZP8UzfRZVGDH6W168vf9N2Ev6",
  "key16": "5JtMUygkYAr2u9uxzoc25faZmWdPM6Js5qVZGSDvGfzxjiHyqKrrCTF2isLViZ97kgMwzeEfBxofuZroYQ9L1Eav",
  "key17": "ipyZnULHhug5igbvKvL7766NXusmpZRWhzX9ZXFqz4PEJP9tR9ERkrdru6KirBVdiQgs1Pm5FSTBfYeN6mtBadC",
  "key18": "3bcCPDqLyXkai19GVMxeeUjv29uJb296SSySqYhpDmpn9PMZRKyYrfw4JUFF5T5Lw4x8KkKfqVW7aTt7Yh2ta8ga",
  "key19": "4HaQvDZCMm8jSjYQSJjJhdD47bhxb5bkKhicMpeXyd88SSyPfpne8rhjA3Yhfgxn4GY8qWwwBDXd5a1vpBqx8CCv",
  "key20": "UhFWDRTd3skF2DDbTUfTGpUJsL3iRuWeQhrEgXBXF8gfmoChMfb2UPYeqYQrgiaxnxCysWiQXsX4Agf2gDe4Tx8",
  "key21": "2mkF4KyqVQif3PuZzWWtQ8vvL5RRCvTMbAWZ96L5zMgtTg6gP3chhnatyVtAfyu1XpFpw8U7MTvQyKfyWEJGzYfs",
  "key22": "5RucBPwGgjPDBGq2tCG2FVprv34EfqcffzcyKsPZSzi9961kXnwRyfuh4Fkfe2f2STwwGXz6EutJnucFkbx1N7HS",
  "key23": "p6PbDGeqG6FvrFs2Fi9gLrCf2WzzJwK94BzRDY7xwwTQnMyJcjtJLvf3tPR8CR7pddzrD9faVogsFYnhQ4Ukr5A",
  "key24": "4EsYAKHsLwzUa75GhxNXVErHh1b2ct4mV7LvLzrB84GZMSqQWgCuDJHxZ2rh5xqfkx8TtKfUZEs2xATAfJY4R5r5",
  "key25": "5MAtSohENiZH5ahjhc1VasAj27ZRUwC9NTr7auvtmYcKkjTiGovd6fN23hZcxsiUKxK7S3EbDZaB23e28u6c7fCC",
  "key26": "4ke8FnyJPBeXZ5yvkYCMb2s6v6C4inwQX9Tzsq3n9EL7VsCPanYtG2hvuG4re4Sv4XbDxvJq7gSVfqMyPcL4S4Wc",
  "key27": "iukS7SAjVZAA78QKa9fbFPE5VmTKzhttiTtZNHG3FMSEqZHrdV7tvqxdQMFKBH7pa21t8VeK8qmar8urkRFTEcp",
  "key28": "31joXi4qgVzJYnuyVvzqyefZGEkDBbt6seWaL3jKe9GGPP8WCJXijUZ2djeh68bjYyGdeSPLYypmxMVhYxGuYgFr",
  "key29": "3SVvLmGBZdcns8QkSDyqnZ7wwiXdAYrkLYNNupskNEgEgDSwwU1XnGmRXr1zGFKLxG1RXuw5W7acZ2SnZsAmrY1B",
  "key30": "29ENFkMSvwfyDFHVsc5vKjgZKrjM8NnB3gbfxeFbUbSPGMeeG9dRhiNyBwjHE1YYD3Jsh7X57PXgjfuDuDWkMo11"
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
