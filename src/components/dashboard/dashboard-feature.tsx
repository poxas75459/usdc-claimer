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
    "21HegwB4aYeaEvCqUYY4vG9vz5NLDkEXA5vBrFLWD5cQwqUZCs5pnJmxDnSqV9Cs4EmCJH8ooVqK55Ekj9t5Nehr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqrVgkpLP7zPnDvLbE8sZwSAaGYAnPCw4arKiCnyDcg5JejKFdydpL1ytxCTPQJ5r6gDfXjQFSWQoPKkzZr5BY2",
  "key1": "4EUoa1Ca9VHgxMWBRYvoCxPjguPPgSis73ed3efEc6iCRtBtWQyYVzHHRQZVt83vCArZbYFxZmVTgthYwxwKPLku",
  "key2": "48gVN9dQ45ao18dyBk8mQjGx1KLEAf9q1BksfLNVdSBksVtMpxZCkc6berhpHUKcXU6ccyjGUNoPL5kVmvvMiYqR",
  "key3": "2AobvRw4EnemuL6dnaoYYLFxURCkwC59AGA5SpPQynpgxWfSfnsjtvRBcAX9HcdC6ssu6YBw5sWLRKxdGi4CLS4Q",
  "key4": "4QjcVzqEgpgK9fqVECBF1Sq2csXX3XpY8ji6SeeHP4SrGG2kZK71eDTLniTMZ2KTEY5dJBepbtPZwMKNL9Dewam1",
  "key5": "2nn5QXkAN124CUqWKpi2nTy7h5HCNNicBWgZgEuES1HJLjx18o5bi7oAdiHTq1P7eh1dSrwmka1BUWEzikdrT7hu",
  "key6": "52Q2pf1V4wLN5YTgkWjo7WP7dWpXrxw3srWxeLyRj4FQeDPtciV3i6T8AureazALHGwtUuL33r8Wqkun6BNLS6vf",
  "key7": "3Xb2Dqxo2uToeXEim7JYHE8Efg4Hv53pz5AhvMpQfHeVXkunMFqfRGWayMSCLx96FZi6eXkKT9yZLcgHaRXBtAeX",
  "key8": "4GRC6HtAYNdeTwE9xKSQTXnpfDdFXaz6s4af1Em9D7w4NXyyce2jLYYjrRDaFK7mETD27ka4kmGZbGRtJKcR221m",
  "key9": "3eNg19GYGmvv2exr2YYHqkd6FYXZfTUrGBiqrrB2n4pgYshMs9QuNyWihxvGyMxm11ACK6YCvpmVSK34VrsZEL35",
  "key10": "3YDhLgE3R7S5F4k7SJ1TdTov82Sui7y6sKVPTkAgmN3bWBN38AfDnAFBHi2wX1XtpmywanKY31yJmv3LFdr1go2F",
  "key11": "55NVzQt6PEwBYW33K2MQKf2SUhHftxbfJjXLQotJF14CmrszacfPGEq9ZFeuHZjsKA1xtwN7k3C3SWpAgwP7qWJx",
  "key12": "sgb2mBMaVb9ngsreZLugAHFiaL9ASGLnBvhmQRqW7PZ7s2BwN8yvjUXX9LqPVSqAxCxTSNKFGRioBbehB2ef6ug",
  "key13": "5X6ghqKebMwP8GgJNGfmq1JvDCUTtCd1L62a4Epi2q6L3ZU3UQKYgjrdDX4riaxk62ppyow6JeD5smhT5w9uH591",
  "key14": "BEcwKQPGFCowoRnsvzC1QKLUeewvK8Keam1xY7MeiM69afCQVoDUJqc5qrSPErjUQq9bqk9MP9GweHG62yk8ydU",
  "key15": "5423TWoerg3TxV93B2eWPR8F2BYsGdpN2Zpfc72JP1eW8hCWBFjuuiL9bWds64588ctxkJi2CyjqbmU8MuuycTsn",
  "key16": "3Wft7hRLM2vThi3Aow2UKYuXYLKu63xgETmx5MWkK4kLLvgyNn1ess29iSKYcYEtE4qPWac8kRevyzYpbB81CreR",
  "key17": "4J5p31mr7NwZuTJgzcV7kbaqA8H8ChRcjbaxpsNhpi6GBtmp9FfE6Ez7Cd3kBpZBA8PZW99HpnczCBBWB2gXdLyR",
  "key18": "2D4RQMuAkrHLEFBcqNqkiQQ4objChGi26jEF6YPnwKjxvq4xPXNocVo9ceKj4JshFzapgiu3kWig6TcdgPYUftEK",
  "key19": "3qK9FMfYLA7ew88BmwgrcKzudeJALRkxi8uVfmthW25sz5eAdqEZzrxrD5Kd35TukvMR9XQedu8hvKsQ8wJNC8Wc",
  "key20": "4JxkPowsdPSKvGzwE3i4EDPiphGRf1LkRHEErzZBP9byUNWT4n6ZcRZUzAdFMnbqP5e9KZYvECvKMAVRN8VS5dvN",
  "key21": "2h3Xf1sC12xAoBmjUZ2ES86QRw5fXmN1NDXjY5qxy1Yi5BTfhWmRtiAFqzyBixs7MUmSLevpqvjHXEt5fsF4jihx",
  "key22": "5VxoN1NXRyBFo9ZBW8CGECAsAwdtYAwhFjA5VkAeaH12NEVckFsUQeAWKWB9KeCUPLi3tJSfLoX3tW4c7cNBdqNw",
  "key23": "E7dgQ9VSzUmQ3WGwkWSjbryp6ug4FMiQ4Y5snbdkeTy2VE8xz4SaxfTt4cYBEMRDBUsEDsoCYNFWjghTSxRcT2B",
  "key24": "5CGTtrV4XmscmuPjZuEhqf533HHYqyWX64KixGr5HV1AAZc86iGy9ZcrX6EY6eWjgpP51X78sFck5V9RHpghnp1N",
  "key25": "61ufVjNzPGHuZiomcnT4gqEUPQCyoHznQ9TqBW4wfDSrED47zcainAprRwQnQtsjHBioDqjCQu8Wko2j5gPmCSM6",
  "key26": "4hHZ4JVprAQGuEczKd929rW575vtA1G5W97nCQo4Pv15dwLD8HqFkFSGDmErXdaDQLMv9DcYi89R6dbscTq6KAEx",
  "key27": "2cB6b7dw3QTVmDdrvSiLvD3fFPq6aAWJzrdYzJdqdaKAgRfWJzeRs3GxjBD5qEgsoHfi8muuXhqmTCjrRPJZ25jL",
  "key28": "V8xgUoGtwStaiYZxjnREaV4M3j1LNmXb77zZ3H9k2FS9igA2FJod6Hr7ssa9jV8heRcujs7Lsr8aXeHiTxJpNpe",
  "key29": "cFzEXMqttR69Th9HrHpsDkrBR6uDZT87NocVVP1w3SAbW4MBS1ws7w3ZGLHvoenWUkUTJMCpwHGu8BdnuFWRWk8",
  "key30": "5Z1iWSocoFMeWW94r11yBhxBD2dSRJ12Z7bVQ1zHeWteW8VDDKNgurScqjnciRmChwHYZAcZizSHRExoQe6SVrkf",
  "key31": "5smAScLumpYNGj8GtoppfSMmLWKiyx4fJobBZTgEq5R6mS1V1DA11NnQJvKPtRDADKWdmarRpoMF9swUZLLthUEq",
  "key32": "5s66N33KMf1oNj7GWPv11CD6itbPpuXPndJQ6cKmPj85FXyvJvFmYappAChZNU9u1yqVg6958mntB37FR9Gf1uwq"
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
