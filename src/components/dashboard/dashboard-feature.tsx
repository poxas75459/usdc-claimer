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
    "3YvhsbqeEhgPxd7vTUY8HpnFfVkqhb85Rn256BwfeqdJRX4mUE2hxGSkiEcMz2msaeo9nSmi5NDsRtvUSgS5ajop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ekmy4Bokyba5jeYGxALkYQgAqZnMokn9ktTdt15BiQeBM1C2RNNQrdtmntrLq7XqR4Qy4p15dUYiQrECsqj3jkb",
  "key1": "5GDw9zZHhmu22LMeRj9Mye3Y12GNoATqdvdyZ7oMmahidruwx1LfHHGR7LuSZpEN5613WeQLw44ZAon2Mf4dBFGA",
  "key2": "2oaSiFyjzhfuNgyrm53ZzcnochHM1Ca1k8EntoFCuiZh2GNFztfCGpiDanBeQhorndNKbVP72qnKam7Zj4j8oVW4",
  "key3": "2FcHujExbhaQL3AQaG3epRYKaTxKAQtAmBbtchADwJJfRZfCn34tsxnmojaXHcDvjdkwKZU2QXZvwCTzvx2eWF6F",
  "key4": "ezbruq2r5TED6WedeiDevFq6aeCm2TCTr4ggNGjK3VQggCCyTU655o7WDHw8Z7kA8qrojWki78nnhNoDkJ8CLAw",
  "key5": "4QGPVqJuKXY4KoreBVYW8JFtU2vBEtt1cfvwbpxVK66tcpEWBQiG2XpXPrXstCrTvfdgtYzzJhijBNcnisYo2H1A",
  "key6": "2HCmqK9M2bXajvfAdyjWYES4jXQ2QjmoGWxtZMQe29UjPNL37jesvJJ5RrJsu5urYQUzw4mEqKuFyTMmqRT2eiQZ",
  "key7": "2FPnGE1tEN6GdGLriMcTfaAZw3CZeyCsKd1VaDcfVYEiotULrcVsDFDjtwW93LEtXftCJT6uJDdamGaVQwzA4BV3",
  "key8": "3KN65kyXXiGdD2pRh7fU1h7vjxVPfMrK67R8ecJv6G2Rj8QoF1dF6zvSfzj7Yonp8Q5AG6ERRo81X7dFmm3vBVzQ",
  "key9": "2x2VbCoDPQjoyi5PyESsdn51SQ64EJrTJdq5gmqDgsCsHmFyWFC9N5L7LVZamJ3VrgUmQVxL7pjuNgXvL11i177A",
  "key10": "xB9JDPEP89rv84EMSH7U9nw6P1q8T1sNyLGCCr1YRqjn8TVXDmJwcDME6dbmtZB8C7Gh2g9KnjFW1EbwAF8DJtJ",
  "key11": "62HevZuwFCA6DvZXkJW1P1YxXMwvgp9paggTbLr1BAYDPR6rYv3i4bJMb8yAmhDLBXZu2JHNY9BBqq534d9CZHhP",
  "key12": "5sXC4YYyrkh7Kjz4CkP2evEo3d8akh9H3aD3KPKacvenncxAet2DEyAzr5ookKqssHezZLJ6QtSTAjAtJFVGV9t1",
  "key13": "4YULHCawku1TWsvnMpTgp2PngdmWD561yvj8ZqRq9UAeuAfH5x4ZZoZQUkiDYvcwhwE8N2yVik1Y3h5ByEuc3fHw",
  "key14": "3hy85LBkPcYpzaV9T3xBBXUp2c9MFkFSRjaNriatDvJC1VbqUheuV9mQnvH7AdFWVhgQXzr8TAEahMF9qbPqbj5z",
  "key15": "5vJHRoQvZ42x8aMcaJHmvwrYGeHyc8WY3uLRXMWBLk1YFhyxnH6xFGH4stZjg5gREXdQYJEzpPvLRPsgWyW79fEb",
  "key16": "v4ZxBbVog29qCpGHtoimfE5mCunXA8fhaokzMnQNxyhaRmdyGELVAaU7wY6QSm8xXSmqDyXQLaawRRnZBNGKLZr",
  "key17": "5gVuhFyRVUFA1kTFdeeUp1eNUDEvm24MiySL5bgRHwwD3zzdu7kRcMhnRgYJLPiSySkXPkt93mEskYmhPXr7LLv1",
  "key18": "5SFqkvuoQ5gJFuQz1rzKQ4wFDZngQjbymENiuDMv9HN4m4Lz8co3YzCSw46bkgoxvJ33pq9cmnBpUmQmHR4tQK7T",
  "key19": "28NEDJTgRS9yVzqGvNsuU3obhqDQk7af41zRP6Q6WySH9ZygyaN12E8ZNQJMwN3UG8TAacEiSQtQLqipFcajKwQp",
  "key20": "aXFxot4MB5KibJxx4u5mFTBEd5XuYrfhyPddtfWYHugNYfzVRmzwBnEUkjC8zFqCRKykhrmKrgqdYoPmjrvy3gL",
  "key21": "4Bg2Kqiq6YBsanvwdskhzLxoi5yR4xtidaKf2Jby1jdnJe4uph7CRJMyjhmRc9StNWtkvMEoHgzpJhrTpmVSHgyu",
  "key22": "5K3cVkfY5iAMCVa1cizo4UtVL6eVEFutNaZeSH83QEGSLvBQdcVjJMQaKeRZf9n8BAykTz1B5thC6wtNbXig4DVU",
  "key23": "2iURxaHbq72cyogs25PEig4m7VWh6kRAb4q3Em4p9YBryPiqzqMNyanTZyooncawibom6H8NJqB9DQ7iHZXgmWoz",
  "key24": "5gX5kGYoERSVDtc9b4vFS5LiB3X9S3YEsUq5bBBTkuxRhKB2U6MdCK2NWoKRDybmaoZBqYPrgd4URtj6J5kkDQ1W",
  "key25": "52ogtWgiBLNSYoRMiu4tKkUkhowkfoTpLp5paDjzNtYPWh3haSaSmJJ6tQapiDsH3fx7BkfvXsDrB4xJksBE2oAT"
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
