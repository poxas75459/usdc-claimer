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
    "5auxwPLhWTg9K3ooiC8E6d8cyvXzpR8hZ1VVhX4kpmWTd5FEG1fRDJAyavpobCU7YdtKv6yrnrC7NrwfqVNKjVVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zjHgGhaDXrQXDYBS28BYXM8mJ2AxAsWiYZAhLkNQWNCyrzCoxBT7De7s1asvKQ4DTeGExLhjWQbQADU88BSzYx1",
  "key1": "5uHCaxnCf5mtJGVxcEDtbLL81B3CAy2Xq72uvgwQVjG22THPoKBqsAHSM46D4MA3Ku8ezmdAdYxXvvqTDDuJX4ry",
  "key2": "3q7Pgu3Lix2WsHnJvpqUZnSeoasKBZYvuQDPBprDXgBRdkeCMWJKudRbofuwyz74Tpcr28mcZpeqXoY4SVDZCmEi",
  "key3": "4s8xrcAP2XePuAHJS1EnuN8W2izWqHBRqWgg1kQAwueB9eV1PoUbS9hDkcqHqcaB9xLUEm9Eyd6tXMUeuD1w7nHF",
  "key4": "53RFes98XyAAgQYeMv9MZFfBbtmBGKpjxg4PZ1Ki1SdHLL1v8sL1DGCNonfnd3YD5hP8cnr7ZGt2pqbPwujPpjB9",
  "key5": "39pDK4M4zU1F8hxPHbEviW7b4Vu1dFMcvERSvafHcQ1SnQFxBxjPUgfs5KxuxwX9qctLAqMtyku6HPs26oN2VHaV",
  "key6": "zFf9cvBCzBgV4WVFdxGVdkFKyCKWgEkpXRapKm8wZxidB5uqfCkTT8paXZCQsbP8YbuhGr7UovKr52danVNteQ5",
  "key7": "5auLbsdF9c3DDp72whUWfyXZGeeazDgXsjxMwqWvTeBXiXFEKPVn2MN6ChkhcKCsQMfLoXm1dWQPAqR7non2WPnU",
  "key8": "5fF8rsYzXip6CbVzGdZGyHT8HBKEdmm3MqjvrpSTg2DxgAhZHBTKWLGo7Me1ZAe5guWswhsaodwMkShdHN6MCDru",
  "key9": "iYnvc3HwawVFNJPjuEu9t8QdMQPybxJjYNy1WGreJqaZ2JMZykbyDMP8amtSKYXyBh84Ci8Dc7BtoCqc5VCHrKW",
  "key10": "53Y9do7hzkdMJ1XMr6VvanCWyiwn3sAEFqm369DfEtHNmqEfZkcqeTaT8ai5a1NE6D26fRwYc6aNdaWBcYeDRARG",
  "key11": "2NkYqDhCj89jiAXYN1evnyz3JNwhMUsztf6U57ZMhDdm1UGwd9A3YnVX8UUAW4GFDHVkmNbdGQjhTprRCsf8Da8x",
  "key12": "3eQJoRqSSMsDSXqWjYQWNtVCrThmeH6c7GQLEHE1ubwmUNjEM1sodch5AZHPMichUyQdCyKMndRCxcsZCwW1KMx1",
  "key13": "t5gEiKd5xxbq8DkxnkkysoBQkRkPa34yrLZn7JXhPFyzgx94EJTbeAvxMKtpTS8a7NPEuCrFW7qndQr9fe2H2Cd",
  "key14": "4n4oSzYf2igNERzW9cogvjdFFjvt3PkbPPMsQbZy6hL4JjCMLPBi2NfNaUKTJMTDTWuXSsBam3FPXbF9RVSKkB63",
  "key15": "2yCti2eKothuNkMG4uqTQ3n428dfNegrdNnZ6jZzwqqsSSp2kpqmWPRYaaG1oYzMhJ9bD8u7BV8qMxRaSSECbopV",
  "key16": "58jodJ9JmqNoq9f4UZLSP7akRxsFoghJpfhnzejaAjvLv7v5sDyBSBu3RjDC8Ceh3N88HwLw3iSdXoy7FciEiKA",
  "key17": "3erM5U718TdLqtvsoJfXMFgaKYAxuy5MFcqKEzduhsoFJnp8cB8MUBhZVvxA55KVfhje75EfRQgZTWk9TwYFRbWF",
  "key18": "4bZWdd3RHLAjG4a1LF1cCDo2qZ1xQUGVxxnss2hKNA7n2TXFkyF85bBGFXXiSSEhxXNnMVVwoTxHejYaRKjSu78M",
  "key19": "5yVhWT8d1oB5xAEiNNZg6qoQ9ULESWkJGDYnVEtBZvoyK9JcTVQHkaBp5hYT7JJ1AhyH3GPhaJv5nyfwmcmmtqVv",
  "key20": "uYmCTmffH4rVXHU7viUDpdSpmh46dRLVV5g3Z7kHPdbxvSTP6XUqMWUCxnoJQE7iqHmr2py7qsA8eX42pPTzVB4",
  "key21": "66wh3T3AjgS2239qGN2z5DZR5GzGZ91GTDTC1xoZp9aSSx7QentMzLa1xdBchm8ixdi8U44YpC6Qp1trLad3NUNA",
  "key22": "3wwRG7jLZUWaA4zx38f4KbTuDByVwfMhuQMDP2mPBgW4PKSWp69fLtommQeBPsF5L6aUEnUiZkFtHwYcRWf1KDrn",
  "key23": "3RPqFyMq4qWbmeuPzyJjpFKJEGsLWbQF6wMqYr5k4Ds7HJaa7F4yZrPG5dHEnrXUxdeXQLqpKNCxdhQ29nDwBgxK",
  "key24": "3J97cGKbHPjt38MVtBjQ5AJrYs8DZTAEZCX21MWUoXCWuvRqwNxtoiGJecUXLV5TXiYp9W1tuZpnZEhvaxtvVVfk",
  "key25": "nd4zuqFoFtDCaCc7KiKswhgGW5kuy8GyZC21F3UFbGZwF6HoFSRYH6sfSfvFiFuBiU9Ai6qqmBBjs7PWCoJuVsp",
  "key26": "4ARoMHd5Ly26ZMBc8C4D46zbrHE8caCPqXnmJX9fVYLJ1CPoKn8dsxT5Q7XHKJ6FfRpdTyo7NkJFLHJ8NSS76Ufr",
  "key27": "5yPVb1W5m2rBbkNBhT1FNhj1LbLxandKdWCGFpiCoM7QjctT8VQ62doP7nE4EF4BHCg3pizNvmoJsNzuPYwE1LAW",
  "key28": "4UE3ETs7ze4tc8jjo8F47DroAuTG4fdfZfuXHdXdjDyoqRkuBpdu1LFMVAwoaMPpFdWjhDBiJbF6pMH5EGpddzUb",
  "key29": "ZmULJfF1ZjhCrQwX9Nop75i83DmSFBmZo7YEcCStBypVtre5AL5UQqwffnkw9RwvRJVHGzVfgdGdHYaxJDkVqjv",
  "key30": "5k4jAmwnRVSskv44gqiMuczp27WZ8usQEwSCHf8ZskEudvWPx57RT92GoicC5cDeyQyhr7YXMNx1V6wYZxTykrry",
  "key31": "4BM795Wxv5GoA3E7eyFkZXGMqoT2orZmgxueGmtUkdyWzMMrms3onkyVtShkcBqCHv3zSmpP4Fpd67t9fhPkARYc",
  "key32": "5visvxWzusJYn99uucRL1AcfncWEEy2oR4MFZ3C5HzQcRazjcer9tkCV5P5Y4NcjRWndmtBK3SJgeTSt5at4sEgz",
  "key33": "qu72KWRQc9td6JNCeuc8S9ZZeemUm5NVvjaM5u3rv7zYZSZj8RZXCtcaSFEkxXWXMthLUeoexrqhezCv8dvtMm3",
  "key34": "jRqVQBModcfP3X3mQoox1PtwTdfUyd2e55QTiks2TzLAdRQDyBHpAkAcUcPZ1zfimQWUzX6LkCa54FcVyKXNZzK",
  "key35": "3pf5K8CEhDazZFhjNHrvsz6fsrjYZFcPAmorVQBmqKG7xS76S3c65tg1BHTHYHFSFRNUceSZzdivGfWtUr8MVphr",
  "key36": "2spMTFKwLqC9xgcJ4AsjE5EpuBJzbXN6Vk6A8LCh88EgfMQWSpYrHyDxJr4G5DG9UD6gMrupAcRvYGyt94Fi7JGN",
  "key37": "5iYQCmPwKDQBwi9CVpPTs1VAuKSgHfXbFvPWPHaMaWtWcnhJZxTE5jkS2q5cfj45qf9E1W3zvWKNmeFttDBMUdk3",
  "key38": "63sFFmKyv6Uz2B5iCmjwG6fQmxoYjry6FbtKZb938EEfouWKTLV8Yj9bJHPPk35awmqrHazfehvJ5UxFXGL5GAur",
  "key39": "64c8PgTq1D5cmNtBS8wgxprXicq9yrPcXS5ET3BS7YP3n3BPqJuz2RseoWBFAhAWJDMmKFFGDwqbPLV3NETYX3c",
  "key40": "z467mWZ3CuTPyy8XrVwie4uRAz6o8UMgWNLfGQGr8pkgHVAeSwWW97w9d4VugMnx6VLUZBMHMKg3a1gxirdATxg"
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
