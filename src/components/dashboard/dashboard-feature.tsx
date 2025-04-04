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
    "5nYmXoAqJshpayAvra2nCRkg1A3WAtDLhJgQM6nfH5KEV5htZdX8uFq8R1PwTDWznKLbERAFZ6fGZevo6b4q2oNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RpHqvMpehgzkqay43z7oxVkoWfw77RX5gfxmHaPw5xnT8kW2YYeW42FaDcr8dJXvuV3iU9EeqBYJQHEvCLysGMy",
  "key1": "58xr33mYgoMjHEU2qwn3ZJhjmTpk6r2CJzQyAsuWZkByeWhATpuy4vk6e8GgHM1yX3K18YCoFmf19xsVYwBZ3tfg",
  "key2": "2eWc79t5af9oXZvbnVj5kv6JHNF4LVxawn1nkPioWwTNgtiYwJgdjADRf18mCpvrhTowwZaSLju3CbkQRv7Tgnm8",
  "key3": "3PkoCLynUESM4mebX1f956C6S7jaVdfWNG2n2t9FbrrwptFPHLNcf3QvwZfbqee4C6gC6wEmuZiTp8hvs7zdiCyx",
  "key4": "31hCy7wQmUxgYMcunEDjwYEW2vL3fSR3eV41Ljj1o2zoiu2jhxPrSf5jUNYKLG4rgS1qeNmox2bSf3QYcxVQe67K",
  "key5": "3gyHL95NndR3PZ89oU2PMviTUX9fvN6jJGDa7hdmU5rsrj8j9kaJ86qudZh7er1WYUJrzmKPQKTAkGzNsztsBaBD",
  "key6": "2oAVvMnWMQnYjauDaxS9GMzFQhihTCnwoZ9EzLX3q7h78ZABiGLeN5Wj894oUkLU3REqHmCmsDJP1Kn4QTBi67Cj",
  "key7": "FhBtyB4aMXBuiD44D2oot55ZmtfSNaHWFPZNdK8dEbUBfqd7xQ2JD4oiqsYs5BtzWpDNFVPnX2gAzLiFXMnp78s",
  "key8": "5VG93rUuSWBesCc3jvSq7qmxJQXRWqHZoSdATwoQgH5Wtg8eB9cJbaVFnCHL3paxMZqov5eXaCophkkR1PG8mjg2",
  "key9": "49oXMNk8J95aq7GuMgyHeTxVcMXdjogRgzRNs4eotMbDveVuzfYGc9fidRg2A7c9VCDKWdtaM7wQSYUNxebkTooh",
  "key10": "8YsKT77NBqJG2JZmXfo2ahbN8aVoTQfZegD9mr7d5hikhA5Fr5qnTLt9W7rsipJ1NTWQjB2MB2uY3NB3R1dwZ1y",
  "key11": "5n7zXgJNFhcYY2F2kqZ6uC93UjUttRuE6oaSWR6fGbdhhEDQNUMbdpzmDLwaNtYe1nLip2GHj2AZEtxGqpZVfCwD",
  "key12": "22hqaGTTatd84BSRzqwXCoqSUYUrymG1e7uXpiMVz26y8f77sMDwY9uHNErKuHEPe8Wh3jrjkETz52JU7tpcnCha",
  "key13": "4ED7kkRjXHEMuevpFgXavJhgr1EgY2wEBARWM5mzcj7aKNxSNLnJVvjugyoTNpTmLxNrkQcd4SLxUGs6rH8iwa4e",
  "key14": "4He6xvRnre4Hr2y831EUZodeZruF2tMjVNygPe2cS1vVT9bhjKNKeBAvJyE5uSj9MjMupbH1pV2GmKa8ALrjNxEL",
  "key15": "2o9qgTVMzSmAuaujbcJmxyKxpnndgfSWovrd84f9He93dYNvE3yCkDxYU33VHt8TdJ9fGqRUUqhLqkKorakBHjNo",
  "key16": "4xQrFNSegHVgjFxgAmvM9pHswXiHPNkM2Zjy1suLx3bFW4SeH5pseLhu8aEu3MVUw7pQmYjn8tZE7qAeQQgJBgoL",
  "key17": "4L4fSeiCWr7d92JMhqMwW1fuMspEjJ1SfNUDq4GiBBMYrXCXvbqJp7hZwWgj8GAbxQwvzCLvvMiXfkysd4k84G2S",
  "key18": "2T1rdSCMYArGYYPyosTHxD9rSgm5tWZ5beK2WFpaWmyDKYGhcua8wJjmETHbY5Scksch2dB1gcm9hVG5vFnzB56w",
  "key19": "2too6vgp2cKuJZ285YguAYvPBe8qwwnKMjp4EX5XzehpYuB6yhHpPBKUDoJuLemNZpC5scghsPM5PML3jH764Edh",
  "key20": "5Uix8YZ2NsywnYz7tvAguhP1g2Dv2xu3dMw1E4qvDVMgco3MpNZTYt8MEpNax5xb9USkRyFwUZ4M5ajQDpXTLxsz",
  "key21": "4L8AXhJcbNypKkQss7TVRWgqugTdB6xKCtxQSBNiwvnZPPQqv3X9RpXL7Ycvz8BFAeUVtko97A2vhiEuXGtdbiKq",
  "key22": "4vppAJtMGwucqAuY9rifap7KSV66LT4iMXSt6eTB1W1KrPxxgfKbwLm5voqZGtxtma1kbpCyPeGu7AzE3dwFYEmv",
  "key23": "4HjQ8KcFQgdFjXTM21HwFri1RLbHd1qSo6ApPiXZPncg8z2ZV9EFTahc2SiVy6Re5EiffrySom2njR9FJxjJQn5n",
  "key24": "24LV7NC1eRwiTsQHWaxPoiyGzLmjwwdTfEji2h4P5EQeZrWd4ryTymbpXmjLg8bjhZmG8tVeZR3QmBDYFHKQdRtM",
  "key25": "3Cz7F4BmeNuvGZKgSpPAFyMQCDc4CkcBNdxi68e6eH7tcCjeMg4q2qgDG2qhcmWtLbNE9V4VYb3zLxoiqXDUKyr1",
  "key26": "kzyvnu3NG7XauR4PpqDvpfHvikbq2Cft1b9hKu4H3MyKJHSybyzbUGCuYR1oAc6r4ZdJ8e7DgFUraQpawmCz1Dm",
  "key27": "iTqaLEiQhhKuWmRUGw4aqh931QC71MozNss1GjvJJ3xdpvA8r9NmRDirMKRzt9mfJJQA8qiDvTXd3P9PPTbxzWA",
  "key28": "2XoqDm6Dv5gvaHk8fEv3uM6kYFdAEqwhpgfmnx1pjvyGA3D9yQDshb8TitYW5c7TfuY966NxCy1h8vC8cKUrZMDm"
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
