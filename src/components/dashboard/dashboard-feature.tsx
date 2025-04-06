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
    "5TWTCKXkcdY952XSHiUNPBsVviv1N1x7dXi1KziNGEV8AQ8zyns46y2aS14dvgPDyt5AW7ofRLi91rH5xy2p7REW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rEFviFew4aEHddqZ8p6X1oiE8AHnfr9oJkTNGXzEry68wb7gbeB6MWGkjvreKzGQBQ9dMJWqnbzf57C8ReUYgN3",
  "key1": "26VSFZN8sJqCaJqJdc5e8QfR1BFSVDc9sJJB3Vxq9VziNMua6gKaG17Hr41tUakLg4SmkbbUhbwhahfGePyyYn5x",
  "key2": "eqKzx3wnc58Uvn9wpN7EhQAHSw39mx8g2cWCuqE89xNEVZ87DUnnHGxuH75EqzUTTJixMafVU5Am4FteebbGwdv",
  "key3": "3expej7oBS74e6FBsJr1RazojH7a4QMAvFcq2LraW9m2TFoUKqp5g9dvLP3TkuvzMikgt5djLAihZQ5P8Sg5v2bG",
  "key4": "jb4zbQHm7tfnBGyMzSCSZbiqp1uLt1Ni2n8ueKx7KTE4mNm45tVDuN89F64KC5GWL7VsKxm13rEFEc4VReoeywf",
  "key5": "5jMaQGWM7nscb9LuCAfAW9NuVNwcqA76AukrqibDpZP9n1Zvjg3gJ69uyBhYaZJmErLsTJumNezs9JfARLdCMJwt",
  "key6": "x65KCEEqJuDLU2CPiwz7PrivyGQnS2sCM2ZqksKVxxBS17dhSFZL6kLWtc8EM7B4tCMTYSCYhQwxzay686esv6e",
  "key7": "22mz6BFNxvCtGurcEVeqgAyZpR3Qqqqk5iHsYLQBcktgvcxuhoBt87TYY5cziuFnNoeFcqpYQbhweY59FtTNtP3L",
  "key8": "3RfX3HsqFhW9bQrUEnaura4BnDH2tVGS2Upyr8ztcjhkyYQEb3MSwJcn95zSA4p7oKCpp5P4H8bmAeditZFt4bK2",
  "key9": "5LSVGuxQ4UwyNkQsQn5HxL6ycQvRaDo6Zzztkow3Hx69WjVNt9GXmXsD9ZuRccYa75NCwrmfjtZtveKVC8HKsGA7",
  "key10": "3XN88xJ2vpRxjdjBJz6sLCxW4wpPff6P9Eq7EDR7rEa3e2LaSwiqKcmeiZmrf9oDWxRCp7NjCwsrs6FFhwmLeQuT",
  "key11": "2UQeh9q6HDmfPRWbeS2WwLJZGtY6UyXBNLsgyHD6T8ebnPJUkoXVWbsxoFCU9Ttg5jEViwwc6s1rJNLpBBD7Qktj",
  "key12": "rKw4zNCBtgpvDqBvw5AeoKb5W1itw1hHnqx3oLTuX9Jg5H32F2UYJmMbA5Wc9J8YHPUhf5htai8LFmtPQeRWJBQ",
  "key13": "5EVPjnFKGpFmdi6T6uFLQnsK9CKW1GZuTprkzdfPVycfbFQJakMK2CdQVy4bHYVE6F74bgYkbgaeFigiY1UNevjn",
  "key14": "3NGf7rFiZ8AN94xd9fsP49g9bSGHyv53MQ34MACEjhygW42Z6xKXUMiYVz3yYZ4xLCPcrZL9HSuuW94HVeTTtEgm",
  "key15": "gqrQyw2VDUf2TqLN2F5oXMTPrVXv7SZCBXQJSkpoNHwkHFPAWVU72ErntVpR4fhqnWaiEMjfgdxGui8n7UgD4xr",
  "key16": "7f4avuN1RhWt6r7WcVbotW6fJP5snmGkzupnd6EQzSmixx4xYqeayFobZVHNRkvVBQKiRBmoTLfu7edaXANyMXj",
  "key17": "3ajUZgVuhmegkThjucbRDDacRK1s3yK1Uw7pj2KhEGnxPnLdEvnEwEdvSPALb6XVWQNaYXXV9LqFp1H7mSP4yyPc",
  "key18": "3Nvnzkdfmma3ZknyhD9n3V9WH8o9us6WfZUyHPRHTfeNKBVwJDjPr39o17sUkhBzXytw9fK6FLur2g9heSSoaEB8",
  "key19": "mjpSbF61NQM9Aoq6SeFYVY37Tk5g6zRgPuEv3d557FtjaFDaMDrfjWodxdTcsbz8BcKjTtvL1YE7SviypUBEde6",
  "key20": "2GNLj6aHkrjr85y6VKf8NiVq3jLHHauYM9e7xt2ZFxroxt3uGcpQXfbkeaF7chF8LecG4KUoY4KkZMd4aE2WWu7F",
  "key21": "rvRCDVBaSunJoUFR7Ao5bjvVamqD2317W4rtLWsuUFe5BgCPQsbtpH4QdJQtpMKRvf8bD3gP54JM9GyASmUmREC",
  "key22": "22gZ85uabpYyGjXLpkHuoLf2A9Vu16PdY4ifKQUZcZnHbs8gQsgq55A36JfF5bSqm7bztVbQKcN97bgZ7Jeyq8kx",
  "key23": "2B7rpFrgw5tHL2W6m8cQVH6P762YabeQNgVHf7K42k23oKxip6dtvmQjQ1XW2REDaAqdXeKVqUMzEqi6CQcpofSD",
  "key24": "3VtAWQd5oGfxMkXnMRjJNhAskLtYWFmfmGGKudcL3nrkS5TAQR5pTZPVApPvnvorZUoMZqNeXWxUfPe8AAuGuHph",
  "key25": "wUtXqjx9Fi1Y5cH2Ny52j2EccZ6Ypeirk39vz9wPjCwSLn9mBViDWbzQVv7W1sGiYmeoKCx95a5EUko9RVEF5Ty",
  "key26": "5HcoCqk9q9T3NBeKmzEjbof23nuiwXdKvWtp5qbrLf3uhMiRghdy9FAVEBSEbU5kj92PHCWnKUzAF1j91d3EJNnD",
  "key27": "3HaZp2jEX3s9ZcJnwe5BR5MokAtAtF2oU3ppSDNkHRVfE5X16KQ5iueF9pM1Mo6yZDnKEAnLsjUir7nZoVDz7r5B",
  "key28": "5ic7XM5hQ8qLaoXH32UiMLudUP5bphsgyWQZkSobo938k6bRcqDjtF5PgKefnSmRGnALU25EB4YcFZkwbtmJvGy8",
  "key29": "2LnGEUpqLMJ6K17z3W5AErP7jF7KEssjsCpdGQpBbKq6zQwmLUYYXYVcatnAsZ98fRDBxFm5eLJKUQi2LqZnZWgs",
  "key30": "65FCGyqeDrz2kmyndrKtWyCdx3Zj3f5RjaxSDDXkPZYPdb5167nF8dzc19stkzSaaAqnJnxUEYsVyU6oCBs7dbAo",
  "key31": "1wu2oAvBXf3KG1iySmDXCsuUitFTHFmNvKPgoSiQjPExqtVg8hgxnXsNnWhsVEEEsXRfzceL3c87r9vATCvethX"
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
