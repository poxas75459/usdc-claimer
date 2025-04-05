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
    "pUJL8F9MrWAmL686wqWU7dL1YF9sty4CZy92wAC8AGrYozhgGnJ8KseydARh8z7kPrGqjz8cpqiLaK5EEPrcraJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rDScZELtfokfqqQvbicva62dsqrNvpmXonrcCrA9xax3e92wdwk6o2vSe877mbcX4oB3H9pBfrrEyJEwg9PCyZ",
  "key1": "4GxwCE7HriwBJhc1ZqVBTmq2fWLSYGg86f11AtsHin6tKUqC34ArxzCgs9UakJu698zbfhqEBdBJMutcD5ULWQVm",
  "key2": "mwFefWVcRWXYpwieE2YgPU3egZoQvXRaatfzuuiTz3chC2ErGaMWBfuigZcVoJ4tfcrQw6BhiUjuFj472tKGF4s",
  "key3": "uqY9hvFGYXY24BNeBRSvZ3GbAwqmEeVXyinPf5NNMzD2JZpYvfjHv5pSACwMSf26iMR8pF9JkCS7rByiDH5eybw",
  "key4": "65J1rRyqZuYhC3J1z62fqCAw5w6qBDDbUfF57ajJdvmiCwScScuYfXSQb6sh2eDg6KS2iqeZsTYEJHv6H4mbshKK",
  "key5": "2edbLKjY2dUf3yzxkMAvt3TAiqFjVtypZKFoBk7sTAGkpqcXneMrzyAA7NwZhFjzq3qzaW4nbdvwZtxnV7tSNsAq",
  "key6": "4QTFgj9NuzggXwkhgrJ5rYwcbVUKzVLJimLEDhMvYbLsxGmDGQJrm2hoinmaH6Jc2zA9o1FqmwG4uxwYNnWeFmzB",
  "key7": "3JSKaLVTrgwYF19MFaqDhVNLn9NgE2d4knzfCKLHtbGBUPEqDsFqggoKk3nFBprA5uxZ5i7HjhvXVRfAnazZdSjc",
  "key8": "aiUXoSiEX65RiTjA3qKZAmwZV4HttQgWtLRt6youiSa5ymJN1xSNhfmSFbDkP5Fs61debqgWHYaXmUzAwcgMud7",
  "key9": "2FhdCB7691fGWuMPu7zbsDfXdyLS9UiKT74vD46RTPGTgiM5aNVa2MxLvpSpqyyX8RFdgt57y7T8shR2NniBF89x",
  "key10": "3kemNJ5PKZXAqFwcz34WPNerCSrs2idUTTD63yLokZdPSd59u98TgGwCn83eK2hy1g1Ds86Vu4ojAcybag4vDDq2",
  "key11": "4JSEWpnYX4tRvsbUxGKexFeyRNKWE6YXiDefzkLvQyY24KVgLpSrKgPdFoQzuyx8JDip2A8JjFiPuMZyt1mgbnSn",
  "key12": "4fqU1aP6zduqHB6AnnEZmY5wZYxy6bGAfTaTr3HeeFL26mJziYoSgSVjZ91aWpCKox2khpczRZ5wNUbKVpcHivtc",
  "key13": "4Qz6cRmiCtQ3mphYR8nRhTty5y8Ae8LFwpYCbyhwbKViqfCXQjsmWRKhVgLRb3QJZVttq4G8zkhs2n1EoRp3ZkL9",
  "key14": "23eQ484PZ8278JnWR7ZD6pPpC7bL1NMcD9cgvMWUzmzRxRF9gkVsCKCSMgpfjY9y3dVmCnz9eHtxmQLvE31J8UZF",
  "key15": "5fSQFgD4F6VHjJTwn3VXfwih5G3XyKAjiJ8UvZf49BQfJTf5fkyqJSdDx8S3n3kEDQLR3EFVhfj6Qb3mA3iA4Csf",
  "key16": "2Hj7mpqGBjHZFvA9HqSThRHVYDamNKU7v4bcVT6nRAqJ4vHw6dHKvjdoiEyezDJUXpS6dG7qdjm72yKxEJmKNkR3",
  "key17": "AoZUL1Uj3bV5nBdV9yqNDp6uDKG37ec1Kp7EXSE9WCVMSRie5cFbmcSshBjBx8oWfDz8QsXbEhVfqtmzVuaVzE7",
  "key18": "24EeFc8im8Husw2cTd273XdsoNeLWkV7P4P7K5iSec9ARrRWVzRS5vWyiWAywVbb6vjPwFrS7oP3zCPjAzZzVJLK",
  "key19": "8CoSi3EjvYJ2Zv2N5NWLS8tnRkMxBPjFJdgbLzpCGF9sEgSHWD1iHh7JHwPgw1BSDEz344Dw1Rz72DknMhh1PyN",
  "key20": "3dipPsLgVPe7c69GyKXQg4pHgMujWGjR9nfAZAcFPNhJkxbs18GNsG67kf2RycGX59hVJUUnzxnMv5UsUqeycESg",
  "key21": "2JVGqvvxrfAe3tC73HMmA5VvqbMQoh9jXVqFj1pjuXvMwpZaRtTjqjonnjG83VDG49E9vTbPLhmfMi1N8VTvgNYe",
  "key22": "2F6hQkf66hP66dMcFshdtAPKxgJXiaujR5pyhug66NtRcAQ4aFw3vr2q8JFLh3NZ4wyskQQPJ5xMtfW4GJT4vAP",
  "key23": "4KbQVTymGnebusUAmq6RzUjC3psNKAQp3agr54TohaGApdbhngkFtCqmc78e8vfKdCQSSfPJCZXtin728GHYTDGe",
  "key24": "5fxfTUVFLtCcbCfdTBjN3UDrfRoYF4UtZ7MfNBqpBXeMoUGMFnD1hoDptejy5w9deAgjbSneA8NndZv1xWV5xEtk",
  "key25": "4Xj3NpfCX44n1aBQTfwyoGvWVQmASWVVNxMhbeaiMFSWQBSSNe16PtPH9ycnoaePoXUsYbcuHAjzDWVk5X5Mj8pC",
  "key26": "5JVpGcA5pSp6kT27qkbKhFP3LksXHVSkGbYjR6C5qW3M4yxE8GEpDrGPnHiHc5DEPSMtqDy9bWAFJ41Fr1WaqXN2"
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
