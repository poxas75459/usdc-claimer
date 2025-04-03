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
    "2hzBRn7Fpt74qEKAmewTHLfdpuRBH1jrEYC966dHNqifhmqGzeoNzaH3uosDzPycfNpss6k25vau2qtEgT6RSDm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TLvVtQRg21yXbFFcM9pnJgCxcyhVeQwx9bJdJt9w9SDEcjA4ggrTGBugk4zr4PcnTPh7F3rJyHpDLT7rTTtJW6",
  "key1": "46uQauHQwDXwzYb5JZ6r2qxxkd6YcfTNWr8iNxXgR1dbGus4UsDdLsytW3XfKfd87vWFyC6RfPZZBDSQGd7ngHqL",
  "key2": "5GWA791KSFQj3GE4HZiF9qWXq72BraJYuRuA1dT3pb9qcbThUTQJc3z7HM6AEmBXG3VLSLwVCAys93xaEwtWgbq5",
  "key3": "4A6b66fP5MJc4M8kJ6GWVRrwi1Nyax1Bjd2Jz2P2U3de865t941TVa5JeuMVePty1HmUGTLbvD4rxfVozHURAKtA",
  "key4": "25kjomxH7X6ujfdNVxmKvLByaDtCEhLqC9kuKGDMxe1yettSN7ZBQXyzx1JjJSgiRJ5xyuPjx41e7WonY9A3UV8c",
  "key5": "3qAN3kBa6Apc4kVhN7cLKQN82WAfBjhSEmRSBF5B3ausv7zZeAzB1CfKbpiMx29o6v2tqFwTHg8NbEUVNhnWswEU",
  "key6": "4THQXPh5n7B2hdk7MDuVZEooP44ZSgUP9KyFAX6K7UnsVZS2RCemNu8ZWk3jeAC5JfGh9t3HbLnLs2AvixW712bP",
  "key7": "4cmSkYNxf4a5v5U6LK7s6aiF2gMRFhewY9fjUdPsqQv7AMJDhDyfT7D4znQnhTNBUCP7bahFHydunHDYpK6pDVdd",
  "key8": "hZHmi4C3P3pWCPtP7hATJaVPKFNw5azXsNohcfqr4y8vyViTe4shvChgVpbkJfgT97ewaSj2WKwAhvoh4qYqxJ6",
  "key9": "5JWnoBTbmjyc5jCUWoaouNwhXn5BbW26d82GpYx6VikU7Tet3TyFKE7uZ8De8SeYh4e8uXLQwuMfG99WPKMKdoXt",
  "key10": "44XQ3SR53LTdW5U95Ehxq2B6VmdkvxGmabQR78k48tnBdmKAqLpJoR6WbMcCBivDQ4ZfczLW9TX4bqwWL5nsFVmB",
  "key11": "4SLD4NAr4SsmPLKrAhawqkaDrWKpignQyh8wZshKzFywxpx872HZSNxCfHwgacC6TxqgJHdjwWzxa5uiUgokbXL5",
  "key12": "2c5kGaXimfPK1WgEJueTdEFgQGqjGh8jDRJP9mrXso6yZ2Bm7jDsG7nAUBLyrKgS787Sa9u3iofrPTnnPjoW2auV",
  "key13": "2ZH5HqjA8mZFf8bvp9t9PbeTqMjEQAjEfYsK3Jtt4ep6447rm5ACCfuaZkTJtFG329VgZmZyz2kPrCfEdSvV8DoH",
  "key14": "2Yt2mWpNGMTU1JGNT4ef6FBg3r6U8DgMTfXSfTXpVUWfk5L5mjMSXrYQRt3WAhMrxrakQxDP9P3NpQi4jvcXFZ5u",
  "key15": "4gHtFC642cqMdCpj4mdZiuo6LpFDzJVqB56cpDJtwfciQmUecBRQNbpkvCmx7vsRoHPjX25rfMU1LhPYMQ7PLXMN",
  "key16": "5iA9txjWYPQLxqZiYNEYY1J26G9roAns6FWbFzzAKgGBqAEA3ErG3z8EC5aFCiTE1agmvNqghkPrBFPKdRpPD7BF",
  "key17": "WufLHqByavjZ192JraoEgK8mUAwuEb3rkv7TDkRfUSTE3bBV4zeZQna896RcCS7jCzAH4YNKULSAC9pp3J9aU4T",
  "key18": "2BpnZvt1sdFtyPxkoshaotxrrCKLJLdXoNVbzgG4DJbKAEiG8zddUbyUcMZc6Uz8VPTP6MDcMViU2iopjWZwUpo5",
  "key19": "newUAaUP9avVRePbzrfuBYjjHLoCqWKuKEJpCunpxmnx1YtENN5nr4fh6iLCsCCepBAm5ReRK2V9FvRpT2Q68x5",
  "key20": "b3ARiccm3XmGYpxenRD2XrLyQTqU9EYQirykXZCYuSKfLmEZ2bSeLbkqsr9VHx5zCMZH2m5XGynxmLPGsdn1qEx",
  "key21": "3T6mrBd3mbaxUHSHLN2fsUc2muvZFSQhzNaRJLdwTQ6eXoHfH54WxojiQZmY979odVBrzcuk9gJ331T9omxZBvKZ",
  "key22": "4M95t6ydfsLrKdPVWcgqaVWpfYX9YahCXUGN4r6uozveuGnnyEXPEqwcZWn7gTr52LpqEtNVFfZVCRNCmw6WXTwZ",
  "key23": "3r3ptp2nJaQdAVJvjdCRhjH6i7BLg2fRMAaoMD8rDUFdvnaQpxwiHBv8wymoDSauLdzHP7iFimDnQNGW4VU3heCY",
  "key24": "29thCD48KJ7oX58A9V2f6Z5kfoadWFu2RaiAPiYBZur6VLi4f47vX26PYNKAmwNZyMD9pJ2wi3uVNC4YDkTVeUh9",
  "key25": "Qv5oLJGyV5C7NMFc6kGEGERduKq559oiFgFAbiK9HHAayrHULMKrzBPehNzRDKHEx7Zn7iWr6ejEcqWyzv9byhD",
  "key26": "qm9y6roYqmc7jVj2ND4N9hbhdPbsNRcrnH6LrdQbhEMSDiSfauFWgvjRwKMFnRedjWXgSVKJQdEhTkgwk8zP9xb",
  "key27": "59p2QoYuFgdmR9haQANMxJ2tA7teFgb8GsufcktosMsrypzEz8EacYV23HQ7XHjQFfnsBeLNfCHLADtJbmiHGees",
  "key28": "3CYmhrR911m7dMpKaVRX4QkD4UTVbZox3UBsG8JEmpsoZ1CxYKYoxjQHkmx9mJmh6xE3hePv2JgMtn14SfVfT9Kx",
  "key29": "4qZ2jm5CZ9fCxc8bH6tQftq9Njbx2jMYt6GJKskN9yJoZDDWqUBnbBWGWNNRaXotQ1xjTxyd5J25ixYpk5A2zWLA",
  "key30": "2JaoQgvx3ANQdkwXVFHqFqTMdSmDGdAjzBT2piNc3EvvxZCK6LVdp13FxURAz37V2n98SLTVM1EUqh8U6w43qqhi",
  "key31": "2SukMi6p8T8x81SSXrjpEqquJ3WkRSQwnrtRVuomS3i97HaTKskyigXA43bnujmWYMPJpUqsEnYY4nXspruFfgsu",
  "key32": "QeLiFnyJpb4JW88nYHj4AFgYSJyBhY4oLzAgpsxvpeoJfYvSJTB62XT1U89bzaFDtjcH9vAghydEjvd538a813M",
  "key33": "2on51Q5RYritm2iuavkrqTdfnLnb5MoShJVZnKpr5ZyfUBSmkwokSAYHP7J5kqAZvVtVaHrXoHVthZnKiLmMpuGF",
  "key34": "4v776TdnKugCYe52c7BiZXwPdTY2FXVgYCr9pBs7vEeH1Sg77RJCziu6vn2W5JXnF98dKumDywxewoc2ioWbCvv4",
  "key35": "YjPanHqG6bAknd6pxGz4XT3HRkjYG5sAscqcgMDzzt9Ph2WoKVFpsHv1icQa8jYBB3T4Mqj5KDwz49rgU7xLXHU",
  "key36": "Qjgxp6n3FYdYLvDKfv4VE2ViX7Ejxf31EFmnaMvFRNqN4FdwThvkX3fqND79Wx5knXDb7Uqv5JGKdjqQFe3KLKj",
  "key37": "3ozyaes9JWfC3K5swNHNKLKNriR4JZDkbboos8cWW2VZxbyH13rTo3cyHM62X2CdLeByqedj4fnngzN4GzcjHwm7",
  "key38": "LYAHrFgcaseSq7e5bmrgXHYgAVZgWBEMUqrEgjk9SUU5N2TdsCYJJySSrckCjCMunJmvozj52YzcNJaA7NeVVoK",
  "key39": "5oVgJjjP6yXijsS3k7LW6QvrfvgJQXtziGHKZb2ZdYJCbub1GCLYhT44W2LKdFbZMiThmWwPTCuaybv34PawFLmn",
  "key40": "5EFSFhtjzVdGtssxmFqSxYhScjdftmkg4wc7hWm6UyjJyaYPuDCkpf3LNzdbNAfdgQMHWWkLjRLjPp3MBvqHHnrG",
  "key41": "2FQaBwXnjsCjRHChzYSpc2PCD52ygooyRZCH4mCPHWh4QNf6NdUKYrMsRWAo51iwVMZ7oitoSAeeQWLGgPfPAEC3",
  "key42": "5MCUY1mweo5q28uQyrsDZNu4ynodB3oKqbwJLg3VtBB53PPLdgxgAPJURroqpuV4B4WBxhWRKLq8PisyZGtTBZpb",
  "key43": "3gf4nogXVSE8YYjUa4DrAEPAcCuLrFQL2p2f3L2LNQr8UEAowkbpwNETiCpWPszSh6DwRDcAF175BAX2aa2DCfp1"
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
