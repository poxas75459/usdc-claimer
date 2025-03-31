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
    "4gaAoetytRt5zipSdTMVmo6K8CYA8WVxeFYyTXMErFpV881gABsDyEBNy8bFUg7X6vUrSZxhFruEPHCmxqK1AbAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUUvrTDzagb7x2hKdHbGuCiHsFuNrbhvuNiXiadUrQpjAZJnC44v6uYjiR5H3LCr7NBomUdFS1yf51cncT9y5sK",
  "key1": "3tskDRrA4AdvfADYAcchfAbuab8RXBmD8SMqwvnXpgS3e8FuEN31Yb2MThFZMUFxrEvsdrhiGMAmPhPA8wz4JaaR",
  "key2": "3purEysiDH82z632uc2998gTeJBeFbcZvHPik2BZxL1gYgTR9vCXUDJZTNHcMNandw4z5rKUSoDyD71Mpj15bEUG",
  "key3": "47Lf2DbsBKV4tir5eqfnQVDeFANyCKQTbDSvGv941PMRB9V8FNCViboKbH5jdMN9Df4WEKVkmZhRkcXWohS8B9ab",
  "key4": "4PWmKhjkd1hi76KHL9dA9rPkaswDwHvxrQToDGQyv51qvjsEDKm2JYF1w48u7WYk9CVShTT7zzSiHJMvqE5Ba9Jn",
  "key5": "2kuuY5f9p2Gxc2CfZ7DSpVCVvYoXUK9xeVZpa1bKR3cVRADKv85reLmQnyXQg51VAhGd8MmW4Vnz9qCs6StaEpgm",
  "key6": "4PdALYJqCuXVfNssb35NfyBB5qG9HhFBPv5swrLWNoKLWchxM2kf2C9jMn7o9iFFpZeu39TTDF9egnQhtMCuLuVL",
  "key7": "41RYLJtqHMaT53ogHSY337KAfzZCnGNfbF8dsQrmC3aiaZbxorygzAhuiGLbeWk5hWxZPzytYxgNXu6Hkz5FgSGr",
  "key8": "2kbqFtJc1qv4WgYZhuBukzMjXfDp8djdQJYNTKdJy9tjREzjXTKQXKwrCGpDAnr72jpnAQdeEV2t8JtVdVPVFLTb",
  "key9": "9fXJGTRLQvpnDL3WaLvN9Lck8Kzjw1JJ7177SnCGgLkT78Po9omPUKHo4uPAZLLS2w6jQid6Df8AmqV3Fa3tsnQ",
  "key10": "4U2GzgvY9zEmgLXpPE3L3itjxBpcTQxCfsrTYPT6SQb5CVLxH29VuuqiCQBCBLo6fCkJg2Ab1duJmE6DaQu9cB5j",
  "key11": "3g5VZqLxroTyv3PJveR5cJ7jepG8zjCbNbZy6RPv2dempndZ8RKuyYkJ7geP2S2x3asWb85LrPG9RDKZcZ4Vzpmq",
  "key12": "5Ykp2fDbdAxNXZSa2ncZqDe2AZ5gB6Sux7GPensQqiTae5ksiZZDsnqjS4FZ8wkvUGu3RjmSKkdPCrTMNf6HUZhv",
  "key13": "3GrRTaAY9MxRxiP8ZCCRTHLRhezy5wfFVfoYkSdyut1afmRikcZd8mt1Y3WkVBmmUWbLUktnscNXrqx6JhB37mKH",
  "key14": "3baseoPiPc3MyxpAtNZzto4okxVojg4TFzKrNrNavaHnfyMbwHJAM4w1zgm3yDU5NgLFyXptoCF3Rdmp7kQ74CTk",
  "key15": "28kueCdXcJacUUqRr9UzYsj8voPeBA9ThannQKNnWUZQpvZt427reityr7cJbmJ81PikGRgjgAVHKiiY2J8cZQrP",
  "key16": "2WXGVxVJeev1gj9KDSpqFmCEmQoPWV6zPNGfGtjgffX1pbL3H4sHj8xnxFs1Q78JTKR5fXPasV5VjLtYmtXFrPAC",
  "key17": "a8Wh9JTXDYdDbvj3eod3gRKFMNK6z1SqRKqUS6LDcu1KVVcaNJF9L1yeG2yi9b9qRRXko7n3M1dzMzbKttLo5oX",
  "key18": "3dufddLH56HU3FyUiUKT2hd3usDHuRj6mbW8Z9KNhEtsCdT9h9GoL7sa4Hc8qvh7g1aTx1m8cC5h8P9kUKPAjzRG",
  "key19": "gcqhG6NWQUFJrAczUMs2QAuZpStK8fbWm7WBPD1WyD9L83GQJCnojRxAVJdbT2md7bx55NDafNCdmXY3HHvkKDh",
  "key20": "3E8mB3hKbWMDKYqstqYRRreK8xqn1eH95jQLXfHzN4NLwisG7cPnCXt1irs8v7dDt2heJqdDCLUcZBXJPkxmZif",
  "key21": "vmbwsowvLo64Xor1jxqUa4SRC48qLuxtVz3hdVpc4BR5Ch1FspV2NzmoeCfVxFd53ZsRPfRZJzzCrNkQXwoZuFJ",
  "key22": "4LmKrrM6QPGbnXyEFKBFtdEDfz9R2twP8fGbhmWADoHAMfoM5nskSJ7qNU9Fajz2YnQLCpKn6cs7nrqQz17xPQEz",
  "key23": "ezTT2rYNjZUhqUAQgVQbNudCsdNewvpdYY5VeVCfXUcnppq38RDo6S3RfS3PGdwuAniMed44cb4w1V5V2qCY8cS",
  "key24": "3iJG4svvxEncHA3JKPscUnMcnsRyh73Tb9f2Bve7vFNVjszHMHazpA1MKdHMjwtjHEZJa3RQEL6V3Aie6VQS1ded",
  "key25": "614vRadgL1VAgyy53yVFsmt44cXgMgk9ikwYGMnWy8yCFeHiwUKPAcSd9dTthZrYrz1DHpzaKgo3G6BQzXTj1r13",
  "key26": "3kYEifxDheeukXWgAitcbNiFmwWX4K5CiQBRoKotexUjEXWmdgxZrUnpeMH1m6uJAGXPeBUJo5SrWBAYgx7tK1fi",
  "key27": "3Xk37ETMq9czofpBx3m3gyoNdLP8Zwobs3EC2ckUN9sAB1T4TNALPPJBLwPcj8Vn3P9H8zR8qAyVyXweuZ9f7d2y",
  "key28": "kvZyfFEfAxKLetELgraN9vecPiadjiBpqZkucs5ShmVwd6W3M7Fk85b2Q9qjTBRensPaTPJAp22w1tYAdvi2MjW",
  "key29": "3jFLap6YvyKsk88ArFp29WZUjPs6uT4fw81fqWQfXAP9J7Aw3RvdktxrHGqAegtmsFnL1jKvHRMSaUYovSx8Hcsw",
  "key30": "4ohRPuoRqmXJUb4WDG6EAeKeNAsC44mVWqmgTzgBeQeZ3v3nsA3XuruGacwu57f3Nu8Tc4WgK3jcb5fEa9MzoGRv",
  "key31": "31L3qmPG7SzqtMBzJrBKkEL7xdP4TsSZFNxvWLdnsKWb8XM6n9T87TuPz6oveX2rxj9uhE1rvEGeeUtivHGTcQQA",
  "key32": "WdW7uEnmsmEct1rMiMnzKpf3KW94HxDZXS7P763kgWJtzVDR3VmE3LDYgt58fGCnw1VoaNKjXJ7ywRfYmw5YbKL",
  "key33": "TWRCUi7KfWoji8jhULwgSrEriPYi3rTsLnftU33pe3esFJXMtz7ApbBjb1PUnks9CT7Cb5vr9ffuP55PLq85Sjc",
  "key34": "5RJTPSqL9e8tLxR678wGyjaCJygXsNxMJhVdKNV7ar362H7kFZJmwxGZSQPHMuhemKhxZuR88EsrESSBNgZgvcoF",
  "key35": "26Q3hM6VsRgAWjKk5rdxVeFKooTmvQSS89yQd65mmrVFRKxR6nbBNvZ2fGCQGinWHLUhHBFr8rc8Sce8jqwy2Sqn",
  "key36": "62yh37ex8KxGBteQUHyrinspvd2ucXoMeU7dZqWDGtPEEDiTfS8Ro8FHGowHzvvSwLL1yzLrdmJuKqDEjKs6N5zF",
  "key37": "4ht6P3XYmxpv1gjmcnLtk6k59REnd8GntbG6zXdasCQgmXNxhN6V7ZbzD74sP7BM4R11XvTi5EGPreStgWC9JaiB",
  "key38": "3bc4AY2SMUbiWTmAYx4qcpLWw7GCvQtH6LqfNo76YH2mk32zzYxxTcTMe43nCAjppgwwyd6xfrgYkFbPrnNTdXis",
  "key39": "5FWaaQbg8uc7f39u635RYjTcKkmQt3dMnuFz8V4Gv32ZFUQTNdcRcRtEDdE1m1Miu6o4JAMfjxeBRgirbznCJgMr",
  "key40": "4LZpCH8d5X8BMVWbsL25K8VcpmEMv9SfNLYEH1Gm1vmnopYoSkTLDaCARGRiaq9nJS4zMNwMWFnqp316zweMLhU8"
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
