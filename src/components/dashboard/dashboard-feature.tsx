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
    "4j6F7NKJRq294KsCqicYACpox6ScWLzfvescpVGjyKTDPWwwri7iDnM5c6vxg2wdDHbHNSWwf2Jd9muQ9sN8MVM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Go3bhEzn8mbuD2ypoqxrjQi7AHF4VMgUdsdq4WUCPX1APh9ZxEWGmjueWDSXPC9hP7eSDGyVsXhXKEhXHiLFZmx",
  "key1": "67DhRVFuoUaAQsXSNWxu2rBFtWH4Mp3aV7XnEeg2FCJbpVugsDsCNcu4NXrmWw6i9DsyF4ReU9V1EeDnJysVbJrR",
  "key2": "5Ro4gqwUJFM71WPiftMPTLMkQF3cVCFxMviV7jDg5JaFUC1wY3g5p1sF661PGF8q5rY6HcYLho6qbhHa7LaN3gsH",
  "key3": "3QL7WJyEPAQ4eXyFiDjJKbKXBkFAW7ADS1i5Pcu7xWVRH16aMMkmT9BNe6ZiaRaqrFgqghwAbYUvCawZzPTQ4CRt",
  "key4": "3fzahpmAYrxB8bZcCFumr4DYsbdNkK4ruyZqfGHs8pebM4NwoTsecBGqY3MjyVoHttekuffT8SpJNSu51Ti18Kx",
  "key5": "55xzRhuYN5aankboaP24FgogMYuoQdESVJ9M7HUHUbXKKJFuL9sGE9goFMU2C1peCn1FpVJmkS2tr2MdKUtKJvr8",
  "key6": "2QaVYP5SqFfgryv4fjDpqjPtzo3bM23tufhwoQ1Up2JicAMv5bNQvi8oFLSV2vnzRhnbKXnVADaBo4MRqLq9zzDq",
  "key7": "5BQ5m75f7dt58f2WScXotcwUNnMyAQSccn7N5EtZVMKLtk1U2DzZWEvAr6QnMsmkoAzzDrREMbXB1DZdrBnrV5Ri",
  "key8": "122TxHPL1ht2sBsA2XSYMXfj31jhotMBnAXf8EzbhEASbd3xtzLvQHQ6iSTftEkWn4NtZCo6jVKRS3Srv4bHawdQ",
  "key9": "5BQs68mcqwR2Lza3Q3rSYUb2jvNzZkHTDijeY4rxEwfvjCnJHFxzzEyfwnF9KXomesjPZf3HiEFWSf1bpqiPAN3N",
  "key10": "5uidCKY14LSPGiVF8FHxQE2A1w3WSgKvj4DuAoPMzJaSAejULPqzWprLVinwCvktasbJ6ybJn72YBNYNZaL2KHr",
  "key11": "4tkK4y9Br6YNbexw5o2nzE6HZCnRDMenYhvC6UFQozLAdJNGDJ25ccsKmrzVeuym8y6B8bzw75H5ybVcMoiUqW94",
  "key12": "5GpzZUhWpDGgETdu1efV9oshbNgK6FsNCnHTndmRn1G1KKkWypf4Asn6YbtxkwuczaEwUjTLzqLaLUdeiyMvfXHe",
  "key13": "3m2LpS1HuX4NjZimu7kJU86qVXHAvrydYV7y7RaCQPyTZa2ft5sNF8gCZc8G68mNBuwQSBTJZtyVbyhhaHpXid4T",
  "key14": "4pgLE14hGbNsgdERdJvxhvG2noLWCa4XheR3LMJoDVhbQ21LMas94cStAWiV1sU4T4tUfSmkDCRvnHtnDyDWXuLZ",
  "key15": "2HBi4DkoBrSRTeKwGVrtNnii7ypQEZuEsm2prSZqZE8EdtiL82RtjbPeakF58AEdD9CgCicJDAk7Z9c944ucF85b",
  "key16": "2XcMi9Ss6mnaQsdbaknKUnx7C7a56NQjszsLeyQP8qG2ftan7pfVW55yrg3rgJwDtbrFeW5KdBhnz3z5HHnn19QS",
  "key17": "5TDaRyoUFFHCJmwiPHmQyYcXvJgWPHdoMnMSgLcJ7ksPyqiDmvLtnKKxGiUR8hgQoJRLXA2C1HxigGjj35cQ6ABA",
  "key18": "5jenCx89Qj1FVDBZytko5SD1sXBcwpHKUietecND6F9gXqpS86xKvS3JAzyuaWjPofCnJLcyHdy3Wb5Hp3z72Xbb",
  "key19": "5YD84cEoMLDie1XDUdmEYt3S1kAcBqJJKpiRWFdQsdk3d5nwqQ6ntohGkKRgLE35WNTgAVgzeiHGq2fhGu3A4gmX",
  "key20": "MfBfrAgfrbYHqqDfNhhMfkEr3CKHKKpw13bQDV3Y9hmu68wtTxX3i6ZhKsS587Q2foVdtDv3GzCdr9teedKNLaq",
  "key21": "4AUtqkbDiwjXFyD7mCZvnRjSUdbGGKK3UpG9c15WtMK34mTRBuEFiXG2Y77KUD5DhfA1FUTqZZkD9agDt5qQno2m",
  "key22": "2thv3jUF94B4HdccxVypEogVicvVH9kPSauz4yJS1R88Pj7qieBhgwaVmmJLy8fJyYy4cpjjZ25LngE7dSpef9n",
  "key23": "2waRgHTpGiJBohQ56gBnvdxqch837rqj88UrsyzEdcx35sxWffzec6dBYCT8mPtAiaBgpMk5n6dmdTKwjhBWepbR",
  "key24": "nxebEgRUnHMBmYJixCRuqTdS8FaMMH7uuQU2JLFhsTCaidZdi29vZee7A2umwk3pVgDYzXgo15JknqQd9rrdzX8",
  "key25": "2Ao9wRnQwP2ugaRmNYYQwdRnA2tB9VfLeHuvuRNnARTJCpWLjxPSoJYT69gdaYTJGJZiqydziUGm4ZM8tnSyXbpn",
  "key26": "5LAkNv8WCwj6Dx5A1Sd1PjAv5VHVeemAvkN4MGi4SsrSPb7XdPf8DM53m3R752uvdkrYfLpcaa8QbzM8gN7iRzxG",
  "key27": "3v5AFaok4ykVyBjzLTQ8VSu2chkHd6ouzifb9BcgtF5xX6QBLg1kFT26M62h7v7EWp8amAXWC3LRZ4Uv1AZcad6k",
  "key28": "3KqSGqyNkdmQLyJCXH4tw5LoGKQRQAGkFmabCK2mT87osu3FHBwW6J5xQu9GeG5QRTVTxuJzjHryfzKi5262Cn6m",
  "key29": "2D5xzMsgXEqgDKcMDbZK9tAzL3FggSGRrus34csCtrohampLaZwfMEhvz1akyqmVsJrrqLH6ZdZb56RQMF9YN5YL",
  "key30": "4JkFWh3t6bEeMGxqVVv7DJDppLnnktZA6wmyfq2JF7KpSVhx55BKehd7fnHkWPpaJjWyheTa9MhmyhvegtcWfqjt",
  "key31": "3znZpkyPddsyVnTcFPGxeGJHLauAbHWkbMnp5nY7vxSL9MvufyRkb4VaAvLufmPaRsDN2QT4CVhtE3VDT55ribeY",
  "key32": "4cCwd5tzRUEsCjCyjsRgYH2xL2dqDxukEm7EHLMBVMTet3dLuFCRQM3ypivaesxJ1nY2kdw1rUNgBqV2Hqr9ZxzC"
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
