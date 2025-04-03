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
    "ENajnifN87zexCTRX6MmA9PFCGsfoDtPWRB4D8mXWE2Tm5rrRu5aYD8kGKE99ceQ19zuys4g2v2KFHALvjw6c3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxP5YPtD9sWLoSKmAFCqWe4qJKZbkQQ5N75rjkGzkWcjifvXTxTMsNzDUzj94U71owUHMyWB71Wt2kL1uJXekZz",
  "key1": "24jToVuxqhkSX4xZPa7bfg5Z9zE97WxcUwkgbHXXPk94ryY9vUnLSPKVn5YgGgWS8WthWUw5hyj46ZFGJHpdsjTF",
  "key2": "5igBbeCbq9rYHTV5KywptUBnFofAGgCy85zdYdyamA5Ev1Qpe4RNb3CVduEAMpyptQ4DeeDcMkWdompDf8NQr9Wk",
  "key3": "cHE4Lq3NF9Jjj7LictfHpj9RXDUWQkhgvGwyKYoU5WvfYcU57YBTMNkE5xgphrxbUvYNhSAdecaSsGuXpN6BTfD",
  "key4": "cLAe2cvaGNjoWtjdBQ2ro29hEjStwFcZgbevMPibkYCTbUvYxDZBsSaRwQvQXASYZtCZyt6dAL6dn5L1SAo47Tm",
  "key5": "38DsajppQ4Qfdw37S9cxvjTX1gA7ceDsNy8g5D5MpekFB2ikPzPfPCXhgaT5Qq8fSH3oxdqHz1MAtf8w3LbA2W2M",
  "key6": "3wWYj3VnhFsSJh3ZkZQyACFZ1CZNVQJENu5SLWSGwqKGD7BvYSy6t8iKx7N4ebNm72rcg8YcP4jeSgxUjCn9M2DH",
  "key7": "3mm7Y4hDysSNzkafW4bMF1G2wuxg9L2qenxiJTUBFE3Uzu6He87LwPN12C8NhYSgj5Suf72zPSeKUk3hcFX6AtCp",
  "key8": "Kb4tpgweor7QfHARTjxoTSsW9ZCt5U3aaAuJvnwkEBLnjtPspWVfXzSpn1pW2rWytFT6QXc25UwArNjMMMcxUHa",
  "key9": "2SN3Zv8KjhX1YxY16VcurqQo6zouM3DUF3y25eDh13KVqxJ877ha1Lft1ia1DogbDD87JNZTA6GEzwvQxVFUvUK7",
  "key10": "Ue7uQEGEpRxtN3nmbjwN9rULY3btdxbnPNmve5TTyUPpae1pEnTYJfBqtMN3rp3kDn99fRA3qwe4ekDdcnpTu6V",
  "key11": "33koUnwNUbQ5KScFXtRRWTEvTgBtcJd7BMbvf5yDvFk4sKnbfDVHnrJbX3UEVvVrURGzVyHNn6wHmDXWBL9SqCKk",
  "key12": "4FWFUTG7ynHuxCW5h9xGytzzi91Nrf2qptLwHB2LcUNBpv4658RyxhxZU1wsQvAmdrqYB45XBk7T4EQYZqdvs7m",
  "key13": "4KoYqCJ8RpU5EpV8N31ZTRh1wRH1Qp5DJZfHjH8i2WVMqVzHuWwzhFnNWjAqHwjoyf4M9mJWxAEESyido9PVShQE",
  "key14": "4hjTaBxa7KjckTUGgQUFVJwumegv9tUqeYXeexug6HDj8HG5shfLRYe1m6fnfJnCyygHYpQxdwmMvzvKL4gRqqav",
  "key15": "2Mox5xbU4kpFEBhouMMiVzTHKrx61tdv1DnG1EsVVLZgk3sjZNLsttpv3LwP5tLUQsAamv3abngkhab6eeyF3yUo",
  "key16": "2Cn2rirv8Rsiy41zaFbfUtVQTWLhcHCrmKU1NxEFNcx6zsxPdmNv6A1UZx2DRAHvjktQCwVxxWhNsN7sALoY91gc",
  "key17": "kNSk32ZqBrx38DLsjCvt2HcWnVnSKDBa1zBHP8ps3gkt6ZWg9AemtCqPM1r5FcE7Cx9saAejWwskYjQ29Fk7na3",
  "key18": "5zR2ie1FzoxH8jeS1cQbsPZjH2p658zS2JKjmNnc1c8RzpbNqNjKfVs3aZb4PwNReCvw6z9CqdfNio1duaoBQDfw",
  "key19": "38ETPFQALB1efy6RgyUWbBdPuQoaZMEEUco6Tmq6E2zevGhZ2dW5yDw8opAMPZ4GZLkFdcHWebokgBrLUfWTu8W2",
  "key20": "26jrXnPm8jScpTDC2Q4ss4wNVXCvKUvk9BReicQ49nrV91cznNBppzhzuFAn2CPqJ9VLfWMkShYUb1pURHd3FeJx",
  "key21": "5HTn4BUniCyJdKPHcwCrffgdZ2ssQ1pfTxbfRuvorJWbwvUy1CpmZn7FGSZNb7Jhdy751qWpkJw6G3DEVZksQCFX",
  "key22": "3ch5x27ppADvbxPNycdp4rBaXgQGXpBooKTDQ4D9uQNRbKcP6XddFuWvyc2TuZvqKkchxLE1YPDdJ76d971GF8kR",
  "key23": "5xafBYgTEgrvL8yCHcYmsMzdH7yxasEdiKmhsFYf9eUVrpXm7abaLRxavxfgrRiebwTzGLKotugVsnG6EZwqNCmJ",
  "key24": "3zw8FY1dzCC63cntDU8b6MoVgyhW4seSoBrZEJZp5phR1H2zSDuTgTQtTZ1sc56vV4VUD4Dqv7vYeuCJvaRpePpY",
  "key25": "2JNJ77m1mAyw62ssvzzFAGbiS74heK83VcoXwgetWk9tMwM7PpLbxEt8vRhiqpH8g7obdJJCcBXWeQXTTGxSAiiu",
  "key26": "35MPMCMSL4JFQfnpiXtpFGDQRALwJMhKyJCnqdkFFz2ahofDF9J2u4uuseSDmJareixTYEJSBAJrTnq2jbGrWJNF",
  "key27": "4pjgJ9sRKPfU8qMgwJMovde6erWSY1z3HzfqzQpxZgzoGR5zKVKkqwPJqzCfL6pn3efYK6uiB9Fx8DTQhbGGuRdp",
  "key28": "4PrcUTXqBBc8BmfkbqmPkeXpKgzfXeVek8ryPAPKpFZ3Hwk9psdao4hU5HMKQVvK8X9TwmSiovzdYuN1EpUJdxGu",
  "key29": "37i9v4cFcLZwMwBfrhotQ8r7R7KXmwxGpHte7BjjoXwxGe4SUstCEHJaeoDrZvsFNswzFfwnUeBgVTuHGycEdjHf",
  "key30": "5ZkbrxxYKW31iT1ubS3N2wfTnEAp3bBeX82TrB9b5uC4VVKaZJ6SefdpEWKvFRCGCbavhzUuizRyYS6zbuetfQ5T",
  "key31": "3ZByCCWd4wVpu1MRqpP1LncYwnWnLheYZit2oLXn2Uc52Ymy5yCdwzdwvF7pKfonYUqneQPq1Dvrv54HVDTVD9oj",
  "key32": "4UPxYLJ3qc1BbvD3VXVvapxsYtDM6LvPZ3pfn1TjWNThzuZZ9GkZUQmQeTjFg3x1jgb7G1nutZ1bYJoaVgqUdbme",
  "key33": "3Rq69sX6qAfB3Evkk5kxBbEWpbCgFVcYCymAVYyHXgJBYV1CsKG8vKJq1acYqJhWafoUKmtYgfPjTzahv94pEfEH",
  "key34": "qQmkBKNVomEe19BeNo8dHtL938yQ3gwsr1aqpBZ4vFCCUrDW4auWtRwpiZYsbBFnWes9dwAhXHijTdMNFBeib8P",
  "key35": "4v4ttA4aSz92bNr1JYGwsSJBsT1jEy8UDXVjHf6VctqMXnePqUAoB9PmpfdPpYHTMaPDtmkrasch9We1WKww1RQv",
  "key36": "4R6hNwNhnKmErdpG2s7MmGM3Qnq4pTyKfyRkLRkpE531PTEoE3Eja9axW6dRenXjmnJi2z3biQUyU1BuEiyGWtq",
  "key37": "3hNYFx8eJHunJt1oqzLdKBsCDkEZd4AcMaJ8mriT4ZuievWvSqfTG93Aexv1KCyT2PZrhPce1Bwuh662nMKgQkZi",
  "key38": "AMdt8kaNuvzUH2VQVRQywmz1JKfyQYsyuQVkj6gohtqbm329eaaSKS8FuapcjBav6AprS6uzy9KSAT7zA9gLYi9"
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
