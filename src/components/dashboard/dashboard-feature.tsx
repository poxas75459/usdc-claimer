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
    "5UBeyE9KgduDf9Evz32xzqjMArQUpzVi3qLn5yrzdQajz53Y6k6zjjq3ZMnJanGuyetvii5HDTM1W9aUv3hmj8Pf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gswcJAPo9u9pH9nheieE1TJPiFEhDzfYygmQtwJ1AwFpZatLoXbP6aWKY5TxYSw1bZS2w5H2X9SfXYVs2Q5ki3q",
  "key1": "3pH3zESpFTvFsCxZKWZaa4Ey7LPFnSJ4BZ9Dd3Uf3jbftYJ6SHVtXtoVv6D23ExPM9PywQdgNcDPQ4XGT628xyTi",
  "key2": "3dMByytNFr1X2PsGEfdKBXbnLJMj41JoGe7rEmZ85nk8z9ofDLgpmdMKAV3MskTkrtNJnzzJ7Q1cjzJ9MqmNu7SF",
  "key3": "513mG42KjzZ66GGEgp75PJ7zpUhihXDZAx8sUR1wNng3xsRYuMvzVE9xkMNKTgh7vytNkeGK91zWwXQuHiVTNQfW",
  "key4": "MLrmye3B2qbjPY9t16RXm37NVndctUwpmHskBC878j6irtHemdUjd6AJZve94Q4hTFNNrrnVwQTBtxi4n4xfFeb",
  "key5": "4BTABMakEL53x5DMuCLBBEbfkQPiHUVsr3xp6QgNDhTkaPdR8oBqQNvgHXVLKUc5roS7Mf8erjHvPnoMhLstZ723",
  "key6": "5PtaL8ufT5uPEG5LMCdFshipa3qNMsagb9UGVvKxsS98NBcwc1PcTjG1oDPzLpcfUT7GM1JJp7ydgHwDbUnq2QqQ",
  "key7": "xzYK8h3ncsDp6M5QQKwuUJuRsLY6pktMGq4yX5WPjQKqxwRripNhEfLzwCrhYZgf4BG99P5VaVjSqVm1FFfjPJc",
  "key8": "125xfcX7qkuzUswM4btDUHuX6kn3gjWWfpmnKr5Rpgk4VfUotWjTQ7xKNp5Rx9tsRBdRTkkNkYxsxsi9ab6Kw6YY",
  "key9": "4P7K7d4uLGw8dWNzvBfCJBtFbojWzQrziyKPQCFmdJY59Au6CqSsR5zyP6HqgjPoxdxHzBJnhX4ZqkT3mhhyRCnF",
  "key10": "48awETmtVXzpjZdTSzDpkZmMpaRTxfVmyixCrZv7LZ12FKYzqn4FCkYFTkbtAn1rMsSPWPFLHiXjPfGiUZyLodtU",
  "key11": "4dd1Sei1XFfoiC79mNs7wLBTcDMPsFNsaScNaiYxSQbrbMWMb5zqmHM5cWnnZTeBueksopoqudk5mEjH237LGkFD",
  "key12": "4X5uWt5AVE4pZVCR9XC64PmTcP5ubmdF1z7kAWnF7WDyQWQiGHkmK9aVPGYaHnjUjLddrrXXkQTYmqGQxozsum5H",
  "key13": "2o1YypGDoXbCGjoeLveqaoFxXE43onXMpjJNHTNwrD8StmDrWPsWo9SmPx3nUK4yKPT71y2XLZVV8WWzguXDyvBX",
  "key14": "2HEyEQv6QSbHduNcq2U9MuK71wc194oYBRMts36HxUgppNuEy9Z17tvaVnbQwTBXKbJzyhTrqsHoJ3N5NBpG1qB9",
  "key15": "fchp4CsVeAgsdXQvo9WUvDz3B883STacNhXE55nZdZ4XXsx5GbxdUCfcbekyZwzFpPXCSxbe9sDEszJSwkESrD7",
  "key16": "2Z2YBgz81tLaQ3fKQmLSWWu7w9KYNQdRi2EGQgyQqDpAi6QLPV4P42uBUh3Hd7ALa6yVD1ckjYtXigm4Word6X2K",
  "key17": "NesEhRFkkZRgM3hbX4CyB1EQtNKu6YrtsXQpZC4teajxPa8skYmxXDktCYkyT1UfZJMNrK6yABybXedxseucTB1",
  "key18": "SPv5f5HVyNZ4PyP5fY2o71Aqvg3PmUk8gy2wRBNxew9XswTHeaT76BwkAnX6QN9e69NrbXLT9DaTkNLBco1wEKz",
  "key19": "3dJ9oeEPSaepBDmnRyCDbH9mMwxm6zXsQFMYxhxGLEYRYPj8fkiWWwsooaZmuxAdcZp7HEvFwjVNvuDeZXBXwTzv",
  "key20": "3V1G6EJ4QMYT2ZoeHqTXYLnoPBKRTdUfPgBSucvYARMeSzLGDye6qUbuUazcEumvUQSvYNrF1F3dwQmGrQF7aRuH",
  "key21": "48W2kWqUkNTwf85N5tnofH1UekX58Sd98gywKHNSvgebaswz5rS54AuYUcgnNnyomWkhNtgsWZLCKEBnv5W662Gy",
  "key22": "3KMzvoUjvycbqg5pCRwTiahsawtsDQ3hJwdCVWRYXEMq8y3PPAMNxNvBDWyAyBhXHpXPf3vqwrxqMPpnuwuYqkfX",
  "key23": "2QhGjJZDbxum8ZB3j1wHmxh5vYbyoiBw37eQwHuupizyxDG82d4eWvjq2cWu7fyqZeypWQhV9symRRak2QeXVjMA",
  "key24": "54cRrDPjRKCGysgYvcgJ3KVbzQ3uTgQ9RNXDVoTJcNtV5UNASj96FCpFw4nJ8zzsaVLWSVvdKeBH3v2PAHxVZBuA",
  "key25": "3Xbq8uPh5ApmhfaZX3JoTXfNpoZ7EacWD3guUW4cATZ75GiV2tfSQh6LWSYuqEXi5TBjuwVptkfq2Hi3xRh8dHDk",
  "key26": "5ZwLrohDscF368rJWgbiiSQeMWy1Hj5eZFGBSwfSy7yExtzeMFaeHgPMgGduykrkoDahKsUthPWNvqq85u6qe9XP",
  "key27": "3Sd6qiUurQTLXmLjExRyZ5VoUr6WbcvtLMU3ZmtebSsdqZ3seLZAB7NzAiRQcbRNGrJNNJa18UCY6UirSVMBdCvT",
  "key28": "5AABciBrDM4i3XFCff1yc77AHTuepV5ANGzNP1U8TGUJc99Dh3eeciwSZj38P8GqcASTB7wxm6XbAZseNkRPaWsc",
  "key29": "2tGHckQki5RCwKuKLDX4YQjQA6XjYRugwQGAXhfpt7PQwAE8saBBWVK9nscTcYyZeGkn5grnH4tqKdEX7QdTqwuk",
  "key30": "3UqqGbA1cwwATkVPnb7UBmQBi1m8qCdKBrdoFTc3o32NJstjMycBpN9114eFeNm9uviHwLY9ytA1kaGA9qXm8SJT",
  "key31": "5euXGkqiArhLW2oBbGASrrVjJmHhdn64aqTJoURh9u5fZqXGqEruQeJ5vZRT6zigdP9UGn4nEih6Fn1MrimbKuEy"
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
