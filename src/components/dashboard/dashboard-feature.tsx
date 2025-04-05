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
    "5yK6DtQJBXCzdWq5wpwRMG7r1ZmVnYUA7tZkqaGTEkEJxrBNAfuGriKZkyTtDRgjkPqWN88EewuKDxACRj7TxBvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aVzM49A3b7Bqb3DYTFzZTLUNdK6hVCZom4Q4dEqnnFnKq39LXdfgiNVFiCTwmy5SSZwQBvD9cUMsz48bp1UabHr",
  "key1": "2M7gfoUVEAVd8ZuRh7KtPooMCsL8FKaUAjeh5wZGBugkDUT1yvCg9BkP8PK1GcidH3B7R7WxNRoud5z3bpCZsssR",
  "key2": "5tzQ1c9sLH7WewnBUz7rHJ1hY4yKJY95pPmpjnw8k3dU3V65XWoAv3Nx3xp3ZiGxe7gFhem9cuvQwk8T3aDD2nEu",
  "key3": "4E6NnGYcth2tCpg1dv8w5URpAijxENVhVPZLDxxw2jzt4jVhxHE2xF4YBWG9uEvysZV6p7g1SEGmfm7ZiL6CMuxJ",
  "key4": "52pC5Cj8k6C7qSXFngnCfsJoDeytZRqigp5HhH41bcUPauAQistX2XephGJG7HTJ6z9E7qVFhTaXQDSrWAUnx8qa",
  "key5": "3A7YQdd6DuetSsHewdNqrC54RVhdi5yo3j5xgzwVGabEPcRTDLB5gTcby56eVX3LRMHQwNyjr7EXYkUbJFouvT79",
  "key6": "3KyYiM7opEYkCgYvCGTsvCd7Td22KZbkFhFJWTMZkgcnC2uozSMr24XNkBeHiAPqQsKJNU4rD6S5PRZEKHYekMqh",
  "key7": "3hKKmcGf93ftMEthkugkR6889wHpbxTsKfaBt513p9T4M6oMFxD6QwgCzMUKXwsvey9YLDgouZQxGz2RadZXKQ3T",
  "key8": "677fTTAy8SGVyw7Ai5XbEtdtcUpRQzjjovEjaaBYR3tfviXUppsRyM3rRBN3FWucreJ7VFLTPGZdhCqN72jjJJPa",
  "key9": "31FVD2Z5EuWSxft3ymzQ3oCWeA9X4ftEezT1wePXZk2Hj4ABAXurzznXd9Re2xtUK83nVTgR8UpDjB9JDd1nRFMY",
  "key10": "X7SQ7ZcYjNEFxdkdZtUxq9SBtmsj5xmXcoQjLds7rhHf6n4ymRfGeJRQQZVfTtCw4YK4HnETCCBezzYqqkmfxDd",
  "key11": "4VgGkdQPYtE8knZzpiCG7NCjxuJfUKcTaFNJWYGtACru66fJQdTVr7oN1VNSyoWQGVj5aJiwnHkRX6qREKe37WBT",
  "key12": "3qmzsCpTfEtD6Gc5dVg7deHD6rCyVLELwJDmfBnLv7QqnBRqqLeUoL9ZD5dxGUEnj22kMWxVEKd2kEj466gYZWJs",
  "key13": "36vJZb4cnE1635qAqwXoqr68ZcaGNCocLFM5Y7YirQSSrwYrCSCgdKGg595AMFHpsbb9VuKzpwEQe2ZeRWCjfq6r",
  "key14": "46DtnaPKsACBfFJXNH9oQ8DFskDgVpqxSQz6mdLQ5ZirqdrizFSuwDXhZKqpxA5vTjMr8qsAG2hNQAXEP3QPWmmA",
  "key15": "83CBw1WBsEtWEX33FJAxbVLeeUd8d7mmzTk29N3cikpVi2jh54fipVTPZVz8L71iFGeZbj3S3JfYhfdQRWm3ME6",
  "key16": "4ET4UmsTBZ6p7EUagZuKLTq5FjPdP6boPkmfN6h1XsFxM1LUCbNkLjcsCnZxSCyhVbPQDyS4QGPHUuDoZxYLV1vA",
  "key17": "55cx7mB6tGBzJ4Cy3HF8fktALwkuemiTRSdP7gcBh1Mc9boW8yoEG9SvM28graKHsupMHs6X9zmFucsh659vrZVT",
  "key18": "3DbfGBFWiQc6xJbaUSEMyU4VJDJjZ1n4ABEvog6wMMeKS6ZKGB2NUMUX8zvtWXCFetTBCvk5tRuUUiA2x6M9ejtx",
  "key19": "5ERc6qYHpgPAQM5rgc7VTLuJTPQ6h5Vccg2PFjToSsC2Yfi2G5VrLD2Sh8UVVUr1oZhYoRTpAjaTmaEzvym5ETV8",
  "key20": "2huVs9giVZ6BpP9ZyYaEgtJvaXqtCGKKcUhmTndwFLwkYgTMQhcaPQ1VarLm6NMHWK77H115dmWmjknX6r66ANQW",
  "key21": "Vgim7ZL5yBRN3r9cAoXmJ6tDbNQgXbeHuhHb2kfozpz7YH9PBaMtvvK4Cj8b8DmFe8HqMdZC9evxKZwMRuAeEE5",
  "key22": "2RRVtrfhE3noMzmzRxPCPv3TmBJdW1hBFhcYfbn8Fs9R69xpanMtt2ZDmTX8e3tsS41koK4MonZgZGxwcCrNYAWX",
  "key23": "5RPQEHKNdjjWhnhXDKRhF91WZXczv32b9BrPD4JGzbhVmSnQCBTxG9rBaCg7UCHbnMC475tNQpZcsZggjqQuwM1i",
  "key24": "3mvuXV6Z31hwmvS3pjBdzpzjqExbqxd3KqP39YdqsPAwyenfmfM9tT6acp8ay7kNSVFesporSA24WCzzDe37LmJL",
  "key25": "vrSfvaGLSUCs5Z4vcZHYWqBaPu4KhhnQLERH5m5DmEMGwFwosgedUNeSKnoSvgcEkVpugP48f3LvRjNpcABUCEz",
  "key26": "5poA1uHusoZcM8vbKYnY7PjRCugpkzm8cmJTLmBDNiL8DXwC7Zou313UWrTXqkEL2abezpkcZnE97tLKow8ubU7u",
  "key27": "2cvHAkZkuNrnsSctxZMe825jnzE8ZBEc1j9zn7e8NAAT7go2J5EKjgiNAhv2Nphi8xMGyHpYg9ipx7Bbh1HfoKUG",
  "key28": "36JX6bJuNdsm1R9Sqay4zUqr2fAGqjLSGXU7mo95QaSSpu8U7bdKBrgQeoCKQvDtZsX3cM3UqZf5nrVvnFWQHLr6",
  "key29": "365EvTTekkQs7BLrYSqQ1UaaCCUAVdXk3FJeby32xypfcVLBjhHwn1KUS6Y8iSGnWdtS2t5LPocaLYKJaWnx71rB",
  "key30": "eDYcbmZxxnjvPeZAgr5wESoCNeWDa2sm7bJagm5MgnU8xePkXvPp1MSFyrcvwQPHSC7o9fm4LnD2bNwz4Tm9GvG",
  "key31": "5u1bTd1LovKtCMPevsVfLkHjYPNQrWZwzDjF3MWxKru4X7pFdQvkMwdCNL2PEyQr2JWxU8tsLzBNcP36Gn6ZuGEJ",
  "key32": "4QstmwLHxSczqJWByx1EhcDY7gV34kCTfLB6ZceC7z4RycngqjuBbpoYKCfsApHFRrsnvWVZkvfBkUAujhhcnKvW"
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
