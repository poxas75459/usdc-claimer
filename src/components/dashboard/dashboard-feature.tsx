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
    "4fLqLf2z6Hnfm1V9Sw4uzKeCtH2EBCoFQyfyfKdYesX7R3rPQmHF6QptC6BGurobzBFZ4FDpErsvJzUZB1NWDu6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k4kzns5pa66fDsFy1313tigXf7fqTjnkPwkKaELRzrVND328UxY64kJ8c9eGYHyBETDxZHrYRBJndyv4KsTBJyk",
  "key1": "2m4MqsJ6bMhFkEnyJJtHMiSK8K1ishV7y1UuY6QFJaWdgxsEsJ4fqBWnkAteNGboihdM2Q1XTgvxQMofNQhDDpk7",
  "key2": "3jkU8CK6RXmVqQToFf32oQ5xvq3gcgrJJwX7YeUdFr2STHU8aNbgSzoEZmphpyNMcdPEr9Zb1LjaTtgFuisQHuqQ",
  "key3": "124LmzneHikKBiuEvapAGaNkQhsgXZoRoLER4VvXT1HX2P54zS9CbHiKtTGm1jKF5gR2r1vfMUAhMvdrLtPHQYy",
  "key4": "5KS4hwxXesUrmR7s1Rw47JGA1sS43ixt3iPpyKUngCGJ7MMPgDi9M483gdh5jhJ9D41J6NkDSALujDzSbcuZavdg",
  "key5": "5FWCsTZXDp3tETAE27VVfFuKKVgd7RpcbPkoomqwgfdfA9HrPpFdvB6rTo7WEdnizoiTXJKRa91FdNXQTuXbtWJF",
  "key6": "34iTcpQYiNBnEWNGJGR929LrUZNWR7C3scnYQ5NofQeTZE5pAVC3XDgngUamPsT5uNuWGQPKbqpdg8DJopqWMpUw",
  "key7": "2orbBcehC7zDPMFJEuHbeKExLS7ZuRisZJuqvx6NkHqMnYwZbeuCwuiDuxiB44kGx9ZwAAQj2ZS1QyCdXt3zQ9g9",
  "key8": "4tTmCqg31wActTJmT81EuqEv4SxMusXS1BYAoJA95SNVq1Zox2pJFAXKjHvYGrq7owWqsW5g98oS4VqYLAyiEpbc",
  "key9": "4Hc7uDvjuz6eFkVkdxHgZvQMgN5HRSP8hR9seCWHPM13uxPK1hqohSqSckshCnQijmwyVZupuV9EirEVUAKCt3hd",
  "key10": "67MebMDdJhAxT35EZheELkVV7SypLfk6LVmT2JcdqDEW7ChBGdrzMBDHR87heNZ1aQwbW8tQeJxj8rd3UNSXGEEU",
  "key11": "5642Znhhia3gKDt9Tdnq7APMEiHmvUc9s2sFh41eNacsbuvTiLmZfUtF4nhUaoKmnAHZ49vD8uR3Az9kEojqR1i3",
  "key12": "2wr3CvZb9HJZ6BYU1YeXv9m9ukjiRPdPBhTRnRywrfegUWVzVVJf1TAbLpKJEwGdm1YcbEbVHmtqjeD2Pz2dyXWQ",
  "key13": "3L9rux4apyQT67TaYBN9ijQV8xdtfgG6Jwp5K4rj9v51aMujz8VygS6qhjad3HTatdF91n7bSM9nFP3rCdLMeDAb",
  "key14": "5sY4bdNq1VaRB1njmcYRYSZRM7b66jqXM4BVGbEK8LHShJGKpsDKp7rj7BrhqbQvsmLQZptMPa6v6hr7A9R4uXJE",
  "key15": "jfeQ7QgsvqxCJivAdUUmFAYaSVt2aioKiqqjL5zAw8Fjuq7y333prJCSAdziV6fUncJxrwJocEmgdJQbMmXcgP7",
  "key16": "5MD4FV5UDoJn5PaPruKQTjNAYNj6AKZX78oRfY3bcx5mpcFZxczuJpPxB5XyBfPE9YcHyfQYkVV4hY9e9CcMSSJb",
  "key17": "4CeorgzYyzg14Gm6dnSsr1ohMCXjh6pt9PB8znLtmGkMSbQh8Ygw6ayvqX2Lzf9yMqJnHS3kSvshdBCV2FFS88GL",
  "key18": "2Hq47BPM3TVoNCNjWbqjfad38UzRvvWYL2JY6Ep6bRrpw8xY6579U6rnpQ6vnBxEHQRoQ7udg1fTFn8FUZyvbE6r",
  "key19": "5gkpEixi1FxtQnf3J46FJXW1rduA1L5nMxGbvatzsYcJXk35Aho8dSU8ffDMrjuzTmbH8YBFbNhCgNBRJdZ2JZ1y",
  "key20": "283XQ8hKM4mTf5UfBaxuKoBgiQBiiwTd4ZRRkLEhsNmQ7DH8ofQj3ViNyceb9wDF9NiVMi6tvWfm75zLWtiuT5em",
  "key21": "3YcMbMD6tnrexT42h2dHxSwqQMNgQCHg35xYWR8dkwcFaNHq7LgWcXrqKFqPrc6J8UpWcsk7B19gHX1gERbMqiWX",
  "key22": "w8hRhSSTL51p99hKX4z9EUW8GHkErkpq7Ydrgp3wdKuTZxaJ593weFNaucJZXK4LWfqfF174o4cRZyj31pyyMT1",
  "key23": "4fUaLtFJAGfcX3ZzAobPrxRaTi6t7c2ev9mhHMY1YYC7km1xnZD5mnaNpkEWHkJmgmuJ9K2UBbS6WajBGw26spS3",
  "key24": "4YpiYVtZ6UciF1MpTFDjDyiwW6ir7P8JfoCWtARUomt3Rb5VhvytBwMvz2V8XCYx9EdhMXHVCyvx6inWMcuhrhdd",
  "key25": "4aZQ1sZSpAPQv2G5HDnnYrb3CqbEnC7FtGUUn22r8fhVQvCdqUnvAT4Gr7rKVxVUP2uVHodisRDbNfZwptiu3dQH",
  "key26": "2eMizz8VE4vnRxRa6XQsCCqov3FV4YqsZfm6Qo4NdkdhVoHCMM7s4E5jzBeM7xQLhEjyDCqT8q4AQdENTUTCyGkt",
  "key27": "3WTbwkMaJX37ZfUjkdyS9j7h975sNwmfCXZmTSrMdWYFJTCpCFUtpXCDBEzv73rmAWJGDbN52vRJxejQd7WB1DbM",
  "key28": "4nvukEobm4C95tFkhiKYPAgLXDnqdxTHCpFFaatu2o26sQZqsXFU8sLenSB6cEiCiDPeqw3rkxRmsvNJK9mtUtfY",
  "key29": "EpyAMozSHHoAwrU4NvqPqTKmvBuE9WWph8Wbo5J8hXxmFNVfPvW3fgky4bZgKg2QPtLtEMWeRzWHYjDkziCewiQ",
  "key30": "3MMwkfFrxrsAHgHoxbRQDpc6BTc4vsQRuz2yZSCE4Trv2Q4aR3qsE6fmb4tzaZMBydwLyRRejCTgikBWEVtEF2zh"
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
