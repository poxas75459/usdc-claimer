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
    "5rJjw4ynkahN252rst6si2NaanS3ymkG8KmNiohrCdkfNPKnM8JnuvP3EzLwhPGzHC1hd88rej5LvthiASESNues"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VSSLNRmNKirw5Sk1svutzPPa4dXv8ESgtEywik4kvPyxpTbHhvGWD2vqHp5RrhgKv515xF8ZnXFai6gPULjYXAz",
  "key1": "5v6XKWFD83EHuoy1rrQeaypthE3RGyWtqBMtuDjgnQaTpGyi8DxAjdo1W7Js1nbRTQm3bh8NiqhYrN63Nrf3Kc9b",
  "key2": "5Sob82Nd7y43Q83e9W7Xb7EaYpuLcViD88Fd9aLVfRbLtvPLRKf1XrFzW5MVMaTCSytpd5Ts9zpdX568jJycZgsF",
  "key3": "46ne8EjNhmWXu6GUvvkGndNCSiYGcVK74qgTqm1EwmStYvJ7YjMnm1MtJz5QRpjAjiLdx6Jrn62oJYNKFLifZ7a4",
  "key4": "62614dWK7Y1YfdVxLeMJLdEXMc5q2N1yiNLeHNXv1v9dHf3TwT8vRM5UwGigZF41p3fDsJiiY7gDQMaU4t9ZHFEJ",
  "key5": "3r4Kz7q87bvj1s3nhhkZ6MbhDjSWpsTeyrUWXDRjyCWmosTQXk3DR1y9EAdDgKYy4wLxkCRTpjbYnZheSg97v7xn",
  "key6": "2qLf6hCQe81NYzdy752sc74ykWQCuNDAK8p4bAwUMjFLffGMqdoKsEGg7PRxBbRJYx6iLxv2u5GbrsStSnxpDYoi",
  "key7": "5i2A6UqHRqYpF2LTPLhQLuwJfANgCpCGcdSFxgoufcadC4HepGqZuxHSNnuZYFKfkddV6Qruv5xKfmEbjFujxNgg",
  "key8": "5MvkrQ943vihszexfJ2RLZLHJFhdctuLFUsPZQmmggw2qx44gzELBj4onSsQsLMvf1KUjbMC7tq1sEjhVnSYkYhu",
  "key9": "6xmtUBTdyDKsMLNyqLGTuPmxfoArocqpgJUh8343bUUN2XFc1PgjVrDDqSgsyHn8WuvfoXA2sjngehw5b8Lxf5N",
  "key10": "57GADAV2Lni3Z6fAU8BtMrH6S3uZNCrw52SXYsHabcNyPpycdTpPsD3DY5bLDhPfQwtky8gobSi1E5Y4Puz1RwX7",
  "key11": "2UvKJkPQRR4KpSktFYNkSeaNxpvBmwadwXseTfMDs2soaugkzh9Mcm9KzNKCSbpsXDDiBorUB1go9GTpYVPALVbr",
  "key12": "5bhqDMQvAJDsFz34hFXWBucthRkMLz8i6GFrHepsfjQ3aDD4sPZ8CfKVMKJoj9G6tRmwfzCLzfgu3NXTJB78QJyZ",
  "key13": "27Sybanz6LTi7Eb4Xhsg3zBo2zstsd6qpToj6Mpr4LstuCf8ZwF3mEpdZpCYzgzMycAHomZrxLjXHecHzodJvYRc",
  "key14": "3pWzBTNbk5SbFmpf4mQJZSCeFh8DtuVP2zcnzzLtCAEeGD3tYS7TZFxMcmFN3eK2umDNdzzBX7JjphjVLsqRzgRe",
  "key15": "3Hdq4HD5ucVWkkKFvm26TYHafqrhYSKkms5mvB1UXJRK6BC8SNpGBpGJFUrTAHhrprxBnsJDwJ7tUZS4GdsaNuez",
  "key16": "Atu5cTocYBVmzpZwEyiSSSxMeuFumzL8LJY87bEHGZtr8fYwQ2wb95thtKBAsMSfedZWUFXvmsqkwa6zX9ivcNq",
  "key17": "4ZLcauywzsmq5YXA23WjgH6WHikuy8XCUnghdesfrhf9qQCFmYR3bHCKcNucZEBtBC6QsEWGzj1RwoVhx5EehauB",
  "key18": "2hyRbvjfX4GkUpt6mLL5V96sWz1XbAXj2xqTY7FVrM7fPdbn3jWWcVqnHfaLzLpPcEVC5AJqybaYRAfPnCAf9z44",
  "key19": "3tAq55mzxSPmFA4zeuZgb6rfbhETBqPdoVtkHqoQNB3PyHWsvuMx3MhQysrJeKhkV9MRYbr1qdtnYv6vtFiZvJ2X",
  "key20": "5zMut3q8EvrAu2Einz7GLwhFUp7afqNrmaZTx36NQtXVZQUVBNzWdKjtGQf3q5nF8cdtTvGmMSqavVoVg5ewExnA",
  "key21": "484q3DLdyNq6jfXx49TVK8NT3prAfrPpeVPLB73sYzD5soLgE9R3QLsGb181RpFctrVgvTwWhrvBgZdLGtGBqNqn",
  "key22": "5vC9XVdVB6pArdpFQcRDZhJzSVCmTvTh4NcgNyp2PwY7rdLr9SiveMayjRXLHhZvVvZabL8gsiprEkKhG4beBZ3E",
  "key23": "5bVRnzASoTHTzHs93hC5imY1MMBJVp79s8piQgWPFcVHPmDai5g8j2x81gU3mf95W2YstaGtktZXJeoTCEUkNod9",
  "key24": "4K88NSWGUdTmz5PhQH8NZfsH9t3TU9s86vUhYGidPBHdGfNZxZLxy2sn3Jj9hHZanw2xubibUExvKD8Euh1JrARE",
  "key25": "5QqNuH4bhcxrNUjZNA48FqiMqYn9vQ2bMkLwyNx24XhtMaJ74e6svBhq9qAmEoT49Fbc6LrAkoeCewqU9KHREKNT",
  "key26": "31BakVCmG9VRn6hFKRHtsx1djdZPz21WrbuVoF4tR2P7aXVoQ7J6ZeE7cBwrnBfScstkvRGfWWiAWJmKmwxNnmo4",
  "key27": "3p5DpKnXRNr1NXqFMTGU9yjo9UWEG7FVaQwr9cLLro88DX5Dvgmqz4wPenjY9W75sdGrtBD5WksQJ25q6FVZd9Z1",
  "key28": "3f95Efz44XxqNr5WchZ1ZESSf5RJ47mE8MRGnTFsjBNDUZNfQCSr3t7mXVnP7pfPGbok23ExeCAZJcGTUATuioGw",
  "key29": "2ZixKRVCpmHe83gbuvJDHUxydL6zNbagqQXVNKUTJqwa4XXLQa2hSCDUAx7maE1CzSsaRESEfJFhrzSanS4yjrbX",
  "key30": "2cCdmcYxUqPnFUR6J1WwmBs59Vmb9oC2fN4mpJBvpJaqWZ7JXFY5oUGdUvg6k1ZZR83xMPsikmkcFMcmhY2z37o2",
  "key31": "6XcDhjb4v6ufjbdt1GRJYifbr8XYVgor8k5pQN7vRAwPF1DeDHYCMzt6YpnvZ2FeT5nmtnqND2fjdAMptGKWm4Z",
  "key32": "4cUYBnzkKfaMEz8AoFrgu9oSY6DSk2vPhNUaVcTPzPYsQKmKYoEjnBytmvEkeFPWux9JiRcgEerVxKiPvEs3ShBR"
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
