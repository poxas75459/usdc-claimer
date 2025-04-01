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
    "b52VXqH3gmwMqGMjMnmtiVZasme13qUaLCR7DpzgaryrtU3F9BAkRfjY85P9p69rmRo3gv8jovcBfN294nq8vbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53uNHFgWFagzWrqmtzEKFQVM9DKZknJJHNj6CVMG1apiuztku8ydU2hQje9T6zX2gLfjFAPcm4K8zGxAxvZb1Z7B",
  "key1": "3LtWFUfwP849eKQudghJHFoTcT62XyDE3g8js88ypucABX8tMChpPy6pXpR6pSiWoaF2cXU3aT39Mgf3NANF9WSG",
  "key2": "5uaGiFGCrAPuhvgQsvbCzz1EZ2o6m1Me1V4FsKMzbAyZHU66pVo7a7eRpcDC7fY1AhzuBHHBduds3x7Y7fAJ94x1",
  "key3": "4zd68Zg42k4sPmLXnpDEJCRWcYLGoucPRm741U7dFiYUtaMemMgttBzwNzjqxyNmnjkqZYKNUqmwoQSeuYZd4gdV",
  "key4": "7Jsk5oE4KriJ1XXg4wNqVMt5G91Byn39QK4SX9cTsUDvGKz4ZxEgUPhitPD1TbKn8BMbw5vVKMY7x6bvnZBQC4Y",
  "key5": "2ZC3isX9RkNmoQFfnGYarmERRcYUBx9ZBRwPsRop6ZhXc8UMsRvbNjfgZjXVWuc1iriTHPRoAFMvqwamgpY1VaPc",
  "key6": "5WMqzh8gfv7Pv1mBJdtUaNxw4kDL1736xoNr58vt3daaLKZUtsPai4kk4pLMxBHV6ZBCJpchspfmpGB3bUR3dCe",
  "key7": "5W2rvx5YPRdSn4ELgF3UrM67XZmSVRuwxStxSZXxVQbCeGfn6ppFhCnjuGKBdFdb7cGTRmvUW5iPkPwLbgios2Ld",
  "key8": "2yfA63aVF2Q4nh1yRxSMTZCStcVpidZ2UztJKmA11cpkWXvJa3FNdzYKefFYrG7Kt4AubSDXx5VykNy1GPuSReNx",
  "key9": "26Pj9QFqX4sysmx7EE1r1a6voiD3YDBnoawdNfRwoUSwfdukt1HfXt95Mr6mmFZ61AKnbhmfPFpSC1sAmahcet8u",
  "key10": "4Fa5NTk7UhvfGQuC73ie6XyQdvsY2oq3kiFNUKTw4otvgXdPr1G56bh6y6UcPcd3twHSWmtLvh8Em2yumtY6XteC",
  "key11": "59z1opBbYPVRbAK1CotRQ439UFbEVnFto72zuQ8NXoEJkgrPieuPXVnzJ5yVUCFBfGmRPiciHyukfvGgys5pVBz9",
  "key12": "619K9KFto2czdcSRCqMAG4twt9QhMDyxTMFGsYqJCBte8h2oEEL3S5T4Lnf22frNpw94sqTFewVTSNVQMLbwgF8N",
  "key13": "SWHrsyXH98dYk9SdNNe1tPgq77WBgpeKPSiCn7U6CDCqpAruTnuYLSSugCVYTSSvuo6rUX3qKJDc4BdpskBijs7",
  "key14": "5z2pdKdVcTUehRZKtXff4zivGNikt291pbasoZxqtso7PwvLWmtbvVHscbtUXzkih5ktDBd7XAXHA26XKw96y1Vv",
  "key15": "HZyTjptRiGGMPyP3aGLAxs4so71mxFWkBnRsfy8QS7r9otE912b6EDCjhXYBageQ4VZb97jTa56Q4mqMbu6mz5S",
  "key16": "3aXts9U5YAcSDjJShwanXnRKCNiGP9h6XK95S3TGEg7wGSpDduqcjEm88iNpmksNSFfcv8wXp3eB1RneEfKEaTD6",
  "key17": "2uj9ThYywvzPj1oaA4ZNtyxiz7StWBz1FMhFBJaY6tJVHZFtyPzM4fVg7Z1snHKRRwSwrCC8yJuJoBtK9366mbr3",
  "key18": "2cKg1jCDeVraAFdDHDxcYnCY5k3KpAtPRfMWCiCw9xnyqJN6TwQ8jBSssEDXomJEmzxLpsGiNCgcvQuw6xm2hARC",
  "key19": "N6HX3iaygrDkD56oKCPkARqWJGdLTdiCnry6AdHxgR3ygbTrVabvGDbyKa42R7Q7prkCrRoskVefGTzfWA1pzjV",
  "key20": "4hi9kQoEFVs33SSfDxR94KHq8uAi3gLgAa8Zrdp5h3MFBQkYdKFA8mxhSqyhVe1VqZ7ddykG3hu3CJ7XSP8XqKZm",
  "key21": "4mksUEVg6svuWh1pzrqCd1xo8sDX1sFZRgJXWNLYKdVkyU1YCCYe9jLfGwjeRZUtHBR8RurifnJxf1rq9pyPgFad",
  "key22": "X2cKeggKVFdUZcVPrw61S5Cu7PszDM8N2N9nuMU5oRVcVjUU5YVrR2rmgCWtJU8w2q3YsGAG9PLdX4XKrHGftx3",
  "key23": "bqRi74FExsMr8WpmRgbprjT3akK7wCN8h2RckVibAQyCyrdxMNeFZh97phWrmuPbdnomS8S195RUYtPaRwo46at",
  "key24": "3N7qJSV75zbB8zxP6t6m2b1VWSne166XsCNh3Q6JhbFddsupmaGia57jaV6LBGfb8RaDcJctNqVx3qZ5hc5K37nq",
  "key25": "3AorsB3LJUu7L74rdV75eDrsH3kNMx1FrddRyF4xLjB9DQe2G131JZ5tXKMuHrUFm1RiWVMi4c8osfvo5Zq1RhV8",
  "key26": "5xhejzsfoY9WVQ2p9dh3SPq4mt9uD6CG435K5SBtWShqedx9zLPE9kwpQFf4PMPehxy3UfpZ2svmQs4dFbMWe88J",
  "key27": "DLjkX6dYz8G2fpKvsaVYRaXhg49cmFSfLqkYAvjHTBJoEQJPB5qoJyTPF9wxPmiKHoVKgxacBa4KQzXrCeth8Qy",
  "key28": "4j1Tb9en7iQutZwq5HBJTHgsFik95EFVa1nAuoESeTemkCWWNFvSuysKh7KWRiYMN5ePwjWMhz3XY8izuN2y5KNr",
  "key29": "2LhN8XV1jRdsKD5QD1imVxSMDFc9Uhm2gCfUmQbKDiHMCyHF31DY3CWVknwFaLbJFXyeu9xsXHaHGutq8rTD4Mes",
  "key30": "5LUoVtBZHmhWzAU2pgFaRZKGZ9oSxf9f9e8rWj88qS9WSTmh8JEDgs5MhzZdCBkAiVzA5ey9F3yQyUKLMecEg3Qq",
  "key31": "5GorBXLyMsy9J3KTfA7G8MjX7JAEJbToPPyjP3NHcxj113Akv3A9E95v4aa2agVWDGAmdoPzjaKejEk7xUBz81Tq",
  "key32": "2Vp2yzwhDPMGaxFC8s6NbJikr3PEUthknJ6gUw6HyFvJAs3n4Sh8LfxCAWDkcFSQ4Wn6uMKpXXLbjEQK2M7qEAtQ",
  "key33": "52seQLw7RpBfV8dEbkoBetMQjgM1yx2qETCaKuQckRRQuUFzDeXXPQqmNUtcQa2b4FhCaQU2bBcuUcdqQRJUzJto",
  "key34": "4S8ZfxfdGTGCyewSrsp9XqPnpA6Tf4eKKuNriqW525cC7XtF5bnpjXMdTcZzW9GZc7xaYWYmsWdakfQEQ6xucTx9"
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
