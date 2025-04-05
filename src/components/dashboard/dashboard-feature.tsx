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
    "4RntGmwMkhhHkQmPkWHLkquttma9gGQtdzi7Gn8665PpK9DkF42XUTFGzhdqnFyFAoVJGC5kbcu5G7ZTnjX3yKic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LtkZvBoeQWh9bPXgcZ9rkehkodzXC3JdteNsjBPHRR389hsepz51ZqtcEGswVC8CK4ASBSvSEBSQ7ZHabUMgU2z",
  "key1": "4wFkx667tBc9R2UtagYdRPnZxkUwadmfCtSNZLDo9x3cJ7oC7SF6DJMyhUQcrWwWVfysTEdqJvVusDtrCPY7i9oN",
  "key2": "jJfZQ11DwUf7WCuzcacmBZLjy6Sk68ysspGvdZiUsVhWCiJz4WZeZZn4RbqacW7A9Y4dgakQ1MAUaxicoMfdQUb",
  "key3": "41n53BAiG1ii8WGpVELxxLTfbsLKeUfFWAVj5tAebmWtrrHuEKtyeGtZhYwJw4FBgsnkusQrCzfCXReUbdLF6ewV",
  "key4": "iqVNR41noNnWGdRPn6bzanvNWtmYV5AAZVRU65gupQdaKeTw6pM6L5bZtM7zvJ5XyMMiQbwJPb7hTsznuQrAzV6",
  "key5": "5DvVF62H8V74XNzyjYedAXxfeXrZCBtZgcNj4aVbfs2EsVZ95gtgHKMhfeArphmStNh8SVcoxbRJMwNk6DTLX2co",
  "key6": "3udYJQNR52dSdsRZwLEni7VhdRZFkEcy646pQJ2mFkm9Bc578XhBHGgwRPBjEDHwEqNNcGmq1KDuzjFK3rzF3eec",
  "key7": "4jStBbjHjscH9CX3EArmtpbgqZGmocJWHVVyueVz7DyZzqegdrnbBJHdtiVT5Lkc1XCiP62NoSFzWRWtQd9sGPHA",
  "key8": "3z8gX5bcve9X3pb12Pw2sX7gCPYXoWvUcDawmHgtDVdeYbiqfUKvaC8VUMpXkgde85k63zdzDyi4TA7qqMTaAYMD",
  "key9": "2PGY78c3V5tqcNS8KRpwoQBC3EfknMCUSZYHvbqaHbiBSE9Jfp12jYBdAufZzYcTpC5Jinpv5PTRTBDNqmgN27Bp",
  "key10": "5X3xDiB9K8MPX7C4VxW899SXnXWQKnUHxeHAiKVLzWkAgDDtm58rybmUEp2uiAhwpDaQDarTpW65RaJZnagDLBuu",
  "key11": "4m68zG675ANsfEgWwrZFURJ9EMc3kyMhZYcVPJM4aGwCezuRLCWs8nj9c3DMfS3Mfna33dT1EE9KgRfpE5fiR2Gu",
  "key12": "5h3VDKAskrRDpjvGhdaM3he9rDpiCbzgMc4oCQPfJrknY1nGJjFpZsKENojDn6s1HoGMpRuRniCeAhXvoeavgsAv",
  "key13": "2BncfQJj7BSJB9kxXdwebcZf6dzaVbp5nXoSGj3mD6kRMcSBui2r22JphBf8q65hk4rBuwFVzkZc3uVuAEsaQeue",
  "key14": "4HHnvWfc1AkrRBGPvJY3ZcbaRFFdmzBzNoURz9VxnZ7h2j8E779NKU5E9QQ1Yswb7mCKYEYewxk1tBKK9xfXnxRK",
  "key15": "MuGdYx1jLMUhrkoaBrzzqiJKEfbM9c7cXy1k4sUqpGqesjBJjDZm7E8MGpYMPksMMNgzeTEizaNiKpJKdeykixS",
  "key16": "5ZHDdiK8RcQvUJAjJFL7JpMXk4YYzJdvPWJihazLMxAKkFfJiwP7Hpz5KW1EwJoxnDfRiu63pCqYW881iLodT3SN",
  "key17": "4Ng9UdHZXnji2ngPTdt6kTpGHGueCvAes2GWoM2kz2WjZqDMGW92Mn1CntUWndkiyX6avprdiHjWJdFoDwHhuYKq",
  "key18": "2pAvvBN2kjmfMqzb3mqu4QLCLzc5qphCz2PAUmxpY5AmwTSs5gyWhAWvX2e1767WpTbzC1QfHgWrH8v7ossGhSGq",
  "key19": "4vND8kETUKmUcnanaaoA3vXypQgGyEhsgFtXfFo7TATsFp4UyC6YjTu7WjZw41DvrTCKp5Fq7ruFragVpu52Mb89",
  "key20": "5YFtwu6uaWt7LgAcDEazmMaF4B7F2QQ7kBdR1SDzBojVWo7eUyJprMUq1qawS8t9qSFtWDPHGgDiqmMg1UqgUeaN",
  "key21": "oBLuA9ms8eQnyaxbprZuPeQRDmLZSFk8EaQL9Vdodn34rwv4BGkwquzjyEepv5m9A48SEzxso5sEvagY9bbyZyK",
  "key22": "3JTDRUZsVzutFy46RnwJHnTU4BTjxcDVY2oqRSctjq4cTteN9784VikNetp89jfZgocznmorfcfQhWHGTSCNkG7R",
  "key23": "K6FokVyqqXxf4F7Kb1ZiZRyUaLGtV8q54WHXQeqei8jYDcocnk9kTrMrNrFajboFTx5CLHVFHkoTgMGMpv5j4M3",
  "key24": "4iPdMs2D6qfqaDEQAnAQEYWWiNheXmbUg1qmS3hPuNyGUAnVHsUBccSqtrmgitvrDrGzio2Z8CgZkL63wQYrPkjm"
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
