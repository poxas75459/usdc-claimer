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
    "5rhTybYBdWmjfEQwrwa2XMRVcuuHQ21C2xDMpTyRoM9YBNPQqV7RbdTjdgySaF4TMnodMiU4rdZgRxpZe2fEbcHq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjMx9B1uRyD77yKTCfYS1Vv22CyspzgmCQBd2qSvXeXuz7DWeEyzEnuPTkpYaB6kDMceMCSZZvsozDqDbnEHvPq",
  "key1": "5EBYcjHDSrBfQiHHurRdrpQU5q5jqAC3PtySzuWjUz54wPuGwGJcXEJKBLwTaQhC5pe5SQgHYxgshqsj2qv3CxxL",
  "key2": "5ucVFgtQeiHnkM939GMgPsryve2QzYFuVC4kQy9DJFWR79VkPmVk21PRoceLXT1U22B5AQ9GRWo7S1pPdM6zUNhy",
  "key3": "5CVYS5wjpAUNYtALNTaSSJSMbP1KbatQ1ktisUFDUQJsuVBRKP8qzAz3y63QGDNCZp8YTjF9ZrQrZRXWfgFUSwtD",
  "key4": "3aSH7zcek1BZ4cuu3unHEic8CWCEXCFsdN1cTme1etZWbJ55yGXvYLwrGrQagYjnj21pzRWfDan6hVpsCxhMmH4U",
  "key5": "41x9YgzopEjZKViqX4GetpHS616Wnc45Nv81TVFKQ1AhmZ4ssRrbJYxT9Cv3ETXYXWc6iGD1aotnGPa2yJYb13Vh",
  "key6": "5DDHYPahV4qZNrLgruKUhLUvCDY2Ba8h3LiqyLLnVvH36yEyJVNcciM7f9Ac3vTQYaVbaBLvofa23zTzZxvHPyRz",
  "key7": "2dvn6TWY7LwLxaPc8ZrFSSWqRxGCrTwfAh4vcrTDboREBWRmaEAPN1HyuTtmsioYrDRw96kesnSXVpjCxtZvkJtD",
  "key8": "YK3abJzVPMhTH1QsVKgXExpMSdSPuGpUhQFhT6LNAJkcPSD9GDSfPjhDefX21NrPdrWuB9ujGFqg5TEuJrUdfvd",
  "key9": "2C2EqUsk5hG8PGmmqFwtZjNoyrCK9ujDynRGPmW97GmPLiseG7iMjz4E3yuhT8ubY2orEoTFZM1HnvWg41xyVMc5",
  "key10": "3EnTiqjbYqVp96gY923oFXeZh3t6be85jeJFuTPYch6NzD5dMVuZTja7gMFxeDHSL3FjVCPozRgwSHKMzWAGVw4y",
  "key11": "3qXU1acrHLPE9ryzMZkVUgGWZcEfwZB5J9Gert3x5v8vFdX6huhxxnWVdAcayEgFNBodQbTFCGXdTyCf48qJYYZ7",
  "key12": "5NiTaFjbppFCoUMfnDKStPANfx3m8w8t5dnpZ8QS5ThLXNneGmRH87M85ZCwuGcFjf3wRLzQtDMo2cv3rpRLLidR",
  "key13": "5XgmgFDY9HYvGLAj2hLfhmeDVwmMxewWZi6gLnK7RhCj33jcVNqUyzmwyczSWSPqiZWvJo1aS4C8mKFpG3bGhWAg",
  "key14": "2vayKo76DC94N5xQB4A4MpqXmftor2tDry966Yde1fiye87dt8xTs38peMScmcVpn581V9vAS91JMJgmrhR73y6C",
  "key15": "4nmgRtBjTQu1ntnNxpR8d3xtCFuyePJ7YWw96AnZfho4eFRSakZYhcSCedh7rqakRKEvjbfz4WjgVo35DaZnCFfu",
  "key16": "3cnbqXJ3rD9gb9GQD4y6GvmdPGCEtvHGqr1E45ShEzBjyfyqzkTuzwfPD9viqqsUWFbRQshtP5ZNvxo5Hpt6tpCr",
  "key17": "5p1NTx7U3i5HS4PCn9vbwEsCaR7xdQQbaYav9kJPe4HFSECJto1JhtsLd4cBo5T1KHh98wDQ8RCNyqY6zAf7y2xA",
  "key18": "Q2CTZzdRfvMvvEE7vB6aA6xzvMJnQxgCYyd1Dkxwf8ZoN4355tjinoPnr57Et4ctGyNfaaMiFwx7kXE6fSktCLb",
  "key19": "5xmTAhk6Pae1cEazkcpVRs8GLZhCBdJVwSufanvhHRNY4d7DPiVojVv1QSrSAQ4nXoY6gA68MQj8XqrxJHQLuYL9",
  "key20": "2W8f3FLKbziyZLVPrpB3Bjxm2cUXqE2e8V47FqCgkDmGv3q3VpooyEaY6svN7Kk24YQXDUAR6SnazFXUCGAZHnh4",
  "key21": "3jAkYNwbarehH3vUWHiGbS9qX4bMjf4F5Q2e5w4amRmVw9JUQocpL9tNsqqRuHRYVEoLxBRxsmy9y9zRvU8suJrn",
  "key22": "eB3pqR4EfeXUPieiZzfYMe3HF7CXTNHwPd53VHuEH4kfpRRUk7tGmZ2bapBmLskWnsz6b1VfVkpwUNXaZnJgNrR",
  "key23": "5eubMvX2ntgUxKFia1sLEf7gM1jSPK96CdqQtrsJMV86jyBUV3ehGLhH81XQK1zBJtdnKu8q6z1bqkGrtrfZYcZP",
  "key24": "3vweypYv6ipPfeFhBjKwp2u8huErTK1nxMzJjGpjFm5QaVZWFx7KnuNuormCUd7Je9mFQ4mMHEY2kc7QLjaVQsY6",
  "key25": "2y66pBKsNB7ZZswKLwUkJqeHAtBswUfKztJPbsVcazVbc7X23mgV8a6esmavuwjR8X9dNaweqXcGMzWQbXaGsdz3",
  "key26": "3jPgmaJfgGJ6kjscL9yb9bmP2S7RQjcXG4nUUrVAv6RSf3SGzUmxzTQgP6hju7eiUQ4JuDnP5yeJHS27cNwHyovh",
  "key27": "3hHGBTq7usG2RmhTLTHupdmRwUUZNVKPNaDfJjjk8idaysBy9xwA4frP6ifFtLnDWodAtR6hRPDw1ch8aVmtss9b",
  "key28": "65V7Jmh4jNzMrX5MBbgZdYEYUsuPjACMVUYjv2y1VvkLMi3SjzgMm9JEHaWbtmK5hhb1drvAY9wwoyvpKv9rQV2b",
  "key29": "3ULEY2twNWcSRPYSKjsxCAgFfVxVRefDUHHbufvAphz3HTm9jDp2kNfYx49VMGCpxD3X2G2Abib9tqDc2iFfuZTJ"
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
