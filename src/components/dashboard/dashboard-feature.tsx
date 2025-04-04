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
    "AZDb4JoReFtNCrbVeeMBRDj3tGHH17dV53fkSbqgb6NrECAWVWSp7YcJ53ECSK6BgQFV2WSg7Baj8LLn5hxoisJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JYwEgPEyszfvSAbefWtUwZBc6pYmGtoC91tpJVyNctJkELspsSy1YfSV5bNwEHW7yxoQgjMVTVgrTVcuSgrn5ZA",
  "key1": "54kzQaK25pX1XT7WgBKGTatDzuvQVLQDvhDmmAdUgo2SyHRzwjZ8d7kXYucEU4MzzS4WneWoRBM6uNFLNPoiCe5M",
  "key2": "4xJnRWeSRVWWfwN5K1pNLzfRdWFA7L2vgYBK3NnVu6bPFy2BL43H28h7PjaH3xzgRea9y75JwbACKemLg2oXj49y",
  "key3": "o5ezRX21EDhmzMmTxRLgVpVNPjBYEg3CBxxwBqnoCMrXwk58D8BHxjLkgXDv3qtZCbFNnQ92ogdqNDzJPCfomqf",
  "key4": "4uVEodS5zdX2xLM9h74A3JHPw2vQGk8T4rVjQcUJ7ZC1S5BHaXryoKby4LCgGSrTuyPev3QAdaPWWPUQ1NFzvhcG",
  "key5": "2bRqo8WzYoWevGmbhtvmWQuEYD5JVBjBjWpPXCi66jyFLrfkdsF51jeNZnPvtF69Rb5jkfjGpxygBV8Xj9QAT4sH",
  "key6": "59SX5ZkDuVjsav9m6KCobABmAEnVKp5B6QmMk1BtQ4M1tTeEjBv3c5SSEd2ziwFUTC7ChKuEbiH8bhom9rihPh1J",
  "key7": "5Lo1hoha4FyaBf2njqoK4mN53HtVsbQzdz178ZG2xQCNzA6hTjU7DG8dYBupRNNy15WcM6MsaFckHSRu3NhjVH93",
  "key8": "41e9hxu2S2KQ7pvNgZfp1f98eobbSe4jSv99CyJcnc2nyGvYLCDS5YdUn9bRwfXUbHiBS3A5EwZeqhw3R7Cnnyvh",
  "key9": "2u9QcNMqh89xDoaKwy9FUSAuEtwkLq8pv5wX1VfRd9p9YTpkUZqrF6CnHGiTKCmJukwi8T8Z1PYhBqD9q2UzzwwK",
  "key10": "5kSYbYDJgJanDgAcERV6NWnh6zptHic86Wvshu8kWDdHnf63NTiFXJUdiRoFTdaGXniuKX9xtJPULsLSGGpyLjPg",
  "key11": "2nTirBXHxb34WHsD9ShRswPnqzZBUy5r73TTyCdRvyGb6on65eFfHhuR9K5aHo2hb5fxRz9RhXSBLDQdyurPwAd4",
  "key12": "536qJVmQqNgqq5FdSnbvg97FqcEh2Lzr3oKb93KGnvVzqMt4NQr5X5ZJHyin6rHUWA8BvbaBo2psckf9wNcgKLSi",
  "key13": "4AmJcN4XVxNzfM1L3JN5pt5sF1xKZsx2mXjHd5pnxgFBCehzHr4FzHFVrFo3MCMBffDZZ9Lu5TyEWADA9LdbrCGk",
  "key14": "5sav6MCfHy3BtN1xoJrnZarA72U8dgFN8JjxCyEfnraneFfyP24r63fhDKSzxLhY1EuZNBnxoXjdkLU69bRv9h2b",
  "key15": "39uH1ZKz6UaLRFx4xqS5Ck9CVdoMQ2nVLjkr1b3W6SUYZq4tdKZavCReLBP13ijxnPWbFB2GNDF5dvtAN4iNS7s9",
  "key16": "5ZZJsLn9K7JjTu4dKx1nPm9pcvB63oK34Dn6X8xGHLFGQmgjoDUBSfSBuC49b1N2pLE88cjEefs4kre689wdje4r",
  "key17": "XuS73spkoz1bvNsy87VPra8tQdpj6MjXLhV9z93UyyBY9yTgVvfz3GSMb5vzmJC9kwrzWwqto7FVczE43Cs4zea",
  "key18": "2YCCiYHZKRMU9uMYNJRGgDioVjbDfzaJDNXEm9JVdCUbH2ikzwsgeP8Vpwf5ZskPcYxgRzZSyroPKFdMyqWx2Tpi",
  "key19": "5jg9JCzW15YBw1ft7bWvqV4KPbCwss7CM9W6tzp8iPQZLRAadzjwZzjbYM2pcrzYLvEksPuVZYUNKZgy28hXSnWv",
  "key20": "4cS1bQnft7ASDKWBBFesEErcBbAW3YRNnCtGEtvhRkNz9VhLyBqko1JpNvoeTJ7ZsUf8Z9AZ7S7KUtKXg4vK5pfN",
  "key21": "MqoUWAGY7rbDj6CFCwEU2XMsV6RgvoZ8xUK8KfP2ZwYsvmHw2YbUvcFT9mpnr4UodBL6pJsfmqHEnzk6qGFkwqp",
  "key22": "2Cyn7CS8ttuajbGmuwwX8VxuEK4T7Wh4zxMyuMXYCowhfnG1YuXEQM52LJviTJbBgh4jizHYqbdmmyxjUnuw5Voz",
  "key23": "2SKPM8AnLv8ck1cPWQsawfC9eCVZoaBup7kLeyxYTudcN7WDvRjEtsMGTJHuFuTSN2Ucx3imRdN1WfZJdm4dj8Cn",
  "key24": "365zLKkJJgWxRK6h617UmaMvQgCBuZaSLrCMqoW4oTmgQz8Nx1PKTruLJbBePG3ZbJUpQuRmUSZmkAJPUcRibVdb",
  "key25": "2HwACwS5itVDYWo59Bi9uajG49Abho5zapccy7vzQ2cnqjoChLduvhdoBujLKxmvLjLR1cMFsFnthwFZ2qgjkK2z",
  "key26": "YKMNpDs8BatXE92EdsjR5h2AAsUkZNwr9ovTKRBJ547zBjUe5WtmS77SHdLDyvHNHQMqfPnUbBspWZnyEv1vh5Y",
  "key27": "5MNc6MTkNC4NRTAasigodL1xFcUroe1BTFV4j1M9mhkToV4D8FXw4e7GPpddk2M8cPZYcD1tgYK4oyUWjK3DgaEX",
  "key28": "knPmsG7e5vTNR52ZqAFXHho8q1prnMd8J13NR3bpTTNzFZmYd6gmPzrgg1UyVj6jZ6FeD2fSsRBRW6Tpe4KViem",
  "key29": "2fVXteVum391TgPCgfLcpYUmrNe5CS86CskMPnMB3L7LNLvvgqf7gt1Eg9ukHGLQVDHiyw3C9iYiFvbcmseEQ3hT",
  "key30": "m8MXEgB56HTQ6V3ziPCAJWoyzhRXvxxGSPRUKs3cc1fUKucVSVSa5o2KzDRm9FgB63RPi7bCua5HJiVUHV9eecr",
  "key31": "66KpvfhfY5Fc3EBefcUFypAu1tKWKyPT8zLMbeFCEJnzm9vbiy48ht6tYqMumjCLkdvDjaBC1XMqJnG9NY5kk2fq",
  "key32": "KnDLUvnfpp3dc2xMNpgyQbTkDwVNoZX5wVHQ4o95TCqJkBdc6JD92FSvxdMUsTk3jtASdPcdraPqzcQ58tzPCSc",
  "key33": "3wngW5ujgV36w7d9T2t7H8Uc76DJvQmQJu2YroihVMA9Jx7xNyHFxuMghKCEW6RFUjDNR4Ksr9ZeuwLEEQcJmDyr",
  "key34": "2iqR6tLgcwvVUSe4zYyBxh2nCw3d1DQphYYXURygonnPg5d5D778cgdxdy98dcXbcdTDmoExvsGGCBiLmu3oNYvh",
  "key35": "58TDrZcQHtrU15UqHLDtSd3wHgcJccCDWC5jo5bq8t5Ycu419aUDzk6WgVHYjmDMpthwGbg3soGBMxu6qv16qD87",
  "key36": "5dZhsJNV7Q9eXMPDJ1JHmLVeiQsY1kxuxDCGg7pFDeAYA1ppEZ9KvV9kcKbt17vxvhrFVdoU4ny9vdo4V7APxY5z"
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
