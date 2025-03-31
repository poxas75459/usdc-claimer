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
    "2xRUvKpGdRzz4AJpKRVyusYLjTFZbfsx4mdZW5zahyh8npXVUtjfLq7QuKdkyEGYWj991vtAT4J8eventVdQrsqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PowJU2Stg32ATSAeowMWhZ8yGiicofCWL2VMVqs71q3L9eEqTzj4JMhabwTgrroEJQSaJE9kDTfsXULQBCCPzTt",
  "key1": "2Bwva4thrZwSRL8iRKZrD4MScXTbYJWVLrU1QmTC1tbM7jDcohu1xwRie3epFD85kKLUVaKxwHy6W4dSsnsWEsa4",
  "key2": "2Kz1XwaU2jAriodArYhb4hot3Lu7JJVQ7AwSsAjwP9ABfrwoop2ncTu91HNRV4rjp4c9uBa4GdeNzRkt2fR1Dsto",
  "key3": "2r86fa8MiLEfAcrc26LDHzQC8gkMFsZ85nrAcRRsRpmPD4A2fHNuTLUNuXndVzTQWnaVPbPMK1hAxZWiuapAiLqi",
  "key4": "5wgv7ufL9gU7TqSP5roEvvUM3PjNpRVNzrfrDRqCNH58KnMkV619TftzhttsZfLFAPrPqeAEbmN2MBSBYSr9XKNQ",
  "key5": "4WV1d8mesyTgKMJeDhQAw855XJbUmWwqdwHpHuvBQiRvEncrAAYewS4V6htg4Ui8Tkp7zdCBq5YAFs5dqz5VJ7E6",
  "key6": "5cWCXzmihRjifoVP4RLJxGG9C5u2G5bjD1uVXUboQzWzi8x6BcT1EUCP6ajksV5zMGhCXAq5XUXWrAdJpb8YQt2y",
  "key7": "4hGzt1wak8geVZ7rvEGdwsHApQFK3mhsSFHFjxvKpLTaAQUm5gQosoteF15cE7Y5NUvCdpH4XhzUr1BNKwmy4xHR",
  "key8": "3gP7BrBNcjVgcY9e2WcYXRYb25qv6J7nWBx7K7dCVYAThtrYmPdE2X85sbvLH1bTK235fgoEhmzu1RYok8sKjFd9",
  "key9": "BNaUDjEjEMemKocx8JMmTFXWx5YdBUsCGtZpn29Tn6ZAanVbYVBiugjRE8dNBhGnupSnSpkRH9UCky3KVnqtizu",
  "key10": "XJfvGuemFHSZcHD6uw28nW5xZ59w1xPnT5GcfhkrNBbRt831y5Y1bGEjQ5xfRixKiLpszuY8aaqsffs9MpsoWTL",
  "key11": "5TRDkd8bocBwdfENaUNYpXm3AcrzWmRGTWGgbuJ2i722ddXjynw3H6SX45YdgunvPV2oD8LRjMzbDpL74Ktkz4uD",
  "key12": "2o5NmEx5ytCmy8GzG45q9THHrdjF88hwT95wAihwHrhWz2gFwVZh1YnomFm67e7mk3em2md9fNun3RCE9mb4FJUV",
  "key13": "3WFAPMtaG3oXrivEcPFem2VEEunXDTizm7JpAAutpycHvDMD1J3hij5LLBwdejAY561RF468gsgB7Pok6TPjSV49",
  "key14": "5Yj5UiHx8GP7tiEWwbmfK1m7VxL1rRfVv5Dnwy9JBTmeEbnRWoSQDMFNLCQkm4ALmadQpXmbJD8ocnyfVpZUNXXS",
  "key15": "XHD5gBm6c7dt2xykc3gcCPVELHvPK2t4EGDjQcjRC6yVWGNurxaByst7Gh66XAKAiUrfxuJr4igBB1cPoxeUi4f",
  "key16": "5RZspyQdZYEAxFayhH7rmoX46eYPfbHg3jFh1aA9xCyWWR4Fmrsoa5VAvCxczr2p822Rvoey21aPziofSv8AzSgE",
  "key17": "5yCQiJbmHPWRX5EzDK1hWoCBqGUAeYQ9d2Yf7y3oYVn99Y9PGTovwEDWhbNJJVgHyihtNw6dSKvcEEaZGaBUuLRU",
  "key18": "5NGpzQWNeueu7cdyibXNznbtmGPz2ahws9HFwhEjvSLCjmbXQxUzs9syQsrpixZjtNoupXaJ1mKF3wZdjPc7ZzfP",
  "key19": "b92FgwRTmh5gSfzLXqzpbAH4JMCbkAVSDwvskZ3VCeMVkQ7W1LHYhRue34CfMj63UVN8BypoUnbs2pARLsaCpYe",
  "key20": "33Z1GRDHqQLJtqBadQcpFP2UhWBFtZDDUVk92wagtSxheUyyKMNYUUP7A7jKHvuPf1eQchVCKuqHmhN4uUak3REW",
  "key21": "3KH26T5idySMJBe1CjNMntnyqErxnw3dXkX7MbV1Pfa5AneKnmo3MQPNeVAA3ZcewHz2cxD3k2bwpeaBxigj4XHb",
  "key22": "4LURdKJX2wGSQEAmrr7XBrSvscBBoeD2mE8T9SN3apsD6y92MPTcFdqp61i4XAUFkZT9myVdDAEGSKExKVqDwjVE",
  "key23": "2k6Myk71FVsDpwL7nzwq5gsngGbbuvHnU4fHrcjssnpj9E1DJFdzm4C2TuDvnSqqRNrwRt5QUEEPbzGmYcFhwZrs",
  "key24": "2v1P7q3uuCTPaQmSLpuVtex7u3uhBfcDRe6gGqCmmiomi16NMF8Va6JfiX7y5yGbNvY1zBJypDUtFWagDNDP3a4y",
  "key25": "4k3Gs6v8xXpxsEFoFoT3c1R8txunrTt1vXZoTk2ZPRayGeTPDsQyC237vWgRRMzSBY9Zzj74jmfdaxwNuYChARto",
  "key26": "5w8ErGsqpnN9sqGgZUh68bL3YNCCJvYRcRGHFGNT56YMpKSpJaXzab4ao9CcCAqKXQDgstdMq73ibcBzS6tjPjqn",
  "key27": "2x4yw3LgmZur8wsdcwrCEA8q4feV5zZzTkotgDqhJnXN9iMMjKhbgqrRzhPPPKdKTjnKnt5eWNNtdco6uzZ4476G",
  "key28": "2qDgXMHbJerPtv1kLzNY35ouHxtiWK3y7UvKRsohDrHnjBVrkNhKaZuRk7hPwuBCU1S6ywzos5uUGY4dwLn2JF4P",
  "key29": "7q1qwjdUgNYUZLb1qGRvQ26gMuGmkZ6G63abimuX3ebQBcfuBxQ3zDNHyVvzap8nGrpGx247GpkmrJiRdvHxHJG"
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
