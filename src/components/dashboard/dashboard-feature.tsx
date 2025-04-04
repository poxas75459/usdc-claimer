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
    "gN8qoCnrGvwEik6Co1Jhe4P6bWH7o2u9dUcHhXZAry6WwmnBVd53sT9r25CSkUQ58RfAxKSQbnVB6L9fenqrQKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xRXpc8KFNMopm4ofk3vBytGFJN1zmAsyimWMy3hS2vtSiJWsEa22Z4Kvt6nAHb8Fc6DAkbqt39TW3xtV7ZJEEd",
  "key1": "Zj6usbUhpRnXQcKfUDDia2xNGwf7kSVPCh7hN892HdP2EN2Rry7x7DXNUKW6ijTum6Ct4U3xYqKTt9BcvGTmNBb",
  "key2": "5GcGEhToytBJS3NpXNQJCnBXJMkSJaHgqNGKRpjtaNgrVZ3qo9Goj3EWFHWWXb5YgrjVAKjegzgBq1NvcRdE5iWA",
  "key3": "31zyAVQnzoRMEB3FSUbCGvx1Xm26uQMdfXxwkKvHzVHKg4wzDaVvkf7dzVQ4oHMSDhocdJ31r4UcCorzXfingZKr",
  "key4": "2sEEYjyrpA6wYYfZJHreiB6kYFPBoPdrjkWHC8qAafawe8WoNRUnWPRsAbs6C5zg3LqudgtG6rAr4JNDujGw3QhL",
  "key5": "273S6CEYY54XBuuHMiwqsUGWm6YBh8zSj83xPedPYN7HV7yEjZ79RvXWUa39fQVxMjECkwjZ3LkLAQhvKoidUAnK",
  "key6": "5NM7kVmcemfFmk4jEsa9Q3ELuJnCZJV6sY8YpDEuKrTT73DaHaoThRgDSJzEK2NtnUaGwoBBRnUE7R6fx94xYhMw",
  "key7": "4s6vrBqbjiUuroraaT7EUJsNbpovDMExJyCqfvEoEi3tXvHLakPuau1HawEGUxX35eVvmHhhgHch686hYBCFME3K",
  "key8": "35QtUS4Mccdt9T918ESQupTDutsdQyKJ6jPfqw3AzuyMNbPKZ2bhxd4HiZAfGVPyDh8tkXyp5xPCUoBHahRgPdDA",
  "key9": "22Je8EAa11dTK6xVXznZbpi9ncgSyB5J7LX47tgqsDi19iEHWHq3T5pDKYUZBE5CYAKMVPNPtPhH8i83ujqHd4xM",
  "key10": "3LemfqvaErNtS95VrUFLkGwFX3BjEGJUqiPDeo1neYYVNRXm9xpCsvV13HLVnYyAbQJVfRct73eZcu2nc6xoVMQx",
  "key11": "B1PpLPhMJHz5kYYdAaYtZu5D4GbH2kgoV3ysZJv3P1PLFCkcTSExGcnABLB1UP7qS8JDnYqYNteTgpVAVPwBovv",
  "key12": "5W4PVsxzaspA1kcAdqzDXJqkvm8J3sqX7D1KxkbZFNtFm9Q7r1aMLbJWDzddPnunyMsBm8SDPR4RXgN6pJPji2P7",
  "key13": "3xQBKq2RQZNjXLVXnstqisXFxZ2hCwpukc9N47UDSgNscbYdAi1sLUfXXcafEmToJeFso5MwW2s3LHzMUQtDmmr",
  "key14": "4T9yWf3j61oESnSmhgsNcMYpHNfEHx5JJAgwQPbhYZhv8taoGd8FdhbTzRDAw5ZpSfJM84XL8nsX5LjfSqaKb5rg",
  "key15": "3tr6gq9gYURRHWFZJjNLQGA6He9NrzxqWSHeDTfqJmXzw4wSRZdjQi4d2Y3uSHy1vhFdQRPXbGQqVgiXCFUWYgfJ",
  "key16": "3nJth8gesCHvzKGdATjWg8vZdCKz5GqTe5y7NHSGMBFVYxUVF7Ct4sndXfwWqNein1kPoMtmrAtWKEzZgic8isEV",
  "key17": "4BizKpU8tkpLjfbbW4RM8UPNtWRiZArTTQoBvEEWrsgRXdPUYCoQwRtUbuHzE1xiX8ZfBGFWaHv6GEwaPNVyxGht",
  "key18": "5NgQxDp9hFeSScsTdC8aVDYPHaKS7aZMjTZTXJjZpdZ5NNVQufAwaroTZQMrErBmCzmVDoQta9gva3vELrBQ8RZy",
  "key19": "bt6uZKJ54tyJtRTdjKe6J8VRETAS6Vp76jQiX9BmmhSEERnPmqLYGENyesiiMZghamNhtAq9GkSdvnKkw1uwAFu",
  "key20": "5zuyPXrqKbwqXVF2ZrFbLPeyL5Au7HSoEWJ3m4AixQFqfA6aTTXdwN9qMkhuyTRpotrxt6ouM7ghriQW2PMRJ4aa",
  "key21": "2rY5dQE5KTuewtUD8DoVMgLDQHAGSfvoYWrezag2mKiDCJeY6iNNqeT8gCQqeZKwx9yk8pkohZirxj1mSbYR4atV",
  "key22": "5ZmiEYpy6Bo87Y5mWAE2u5m6ETt7jwj7v3vUBjKZQWS69Qv2KuhcbRUA2VWD1cv8GGqnWn6KKp696Ez2wKnVepgm",
  "key23": "rnaQvYiZutfNmqfxKykfLpfbbj88AnSAboYRybsWZBWzTPHAen5FE13TPfcAkEXNsvRr2ddXnSFANyj22AHgKtD",
  "key24": "2expjtQn47T4e4gnFNpJUFKyy7JkFbWnGuY8nv2p1SugXXfKxRcf44cuuL6jSHwV384hX1UwcUf5ayqnKNt4QiFP",
  "key25": "2ktrwAbBVrEMS8jyKFxAEMmRpuzkCGAPUB8z72EfEwQHL5ARijS9HwY71kHysA7GXzgnAWg71R55hhpyysWQ6RJX",
  "key26": "4u6995BuwB8otrcuiz4g2zx5wXX724MwWuWK4DierCYX71dhxHYgwgG2Lyk2ph3DsnsyWRPLzXk8EwY3KmV8Me7E",
  "key27": "26kUpVrNPkQy5ePiUAqDhUKSGzeyAxqtYojETwE7oQQdg4mDav9nf61jazn3Un4mYM2PTRgmf9sT5yfZXEEMYsHy",
  "key28": "3TvHk6EmTXxjiAbEr8SqS3XGfYzeDDcy5C1Z4XL2GNukVFz4zeoj4jMWb1CiSx49fyvcb7t75A34dS6bUxprSJp2",
  "key29": "3PHQcKy25ntmV8wXNMpiSzkMqhufs8Ap11vEy5VrsYULPHZavpmLcMDhRKKEj1Nz2zSNGAoDtxyMrARLpGggem4q",
  "key30": "3u84AHVScYoY5TLrsaDfzg8BzZZLieUzwuDWeoSK78GzRtixWWzumXi1bAzG7BWg6TUM6BAYCsP4JgJC6oVHKxzF",
  "key31": "5VMVfJDXhw7x1oVmPSjtWk1Bxo1RXWn2JwECwRTwXTwdWqJSUsaDCkVSAxEy3XBmXnBgFv2yJWvwW6EmD3RSJWFp",
  "key32": "2aGq8mwaxNkiSX86ERxCKADE45wdzqV61gjDCjFTZSFQSas8RGddL2Dahfb4WuyQkjReYYrVEUf48JwzQ69Go83q"
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
