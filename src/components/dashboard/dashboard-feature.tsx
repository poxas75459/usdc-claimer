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
    "4KqGg6QV1SvRo8hPv4JEj7GdJc5QKai24uDPAQazq2F9uKt1bQg2B46CkqoUuexjm786fUYWRPi2y9eV3P1rANLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iwe6LMNF1a2gSPGy7v2Mom6hzwLAgDNkecwViszg6jxhgh6a358qRRJ82Akn1oBMf2ALsQRMNVu5qdMTgFa7eCe",
  "key1": "3NvKKTktWujEfKAFGgtUed2r9cb9E2b9PFPoP2Aa2yGLBfvYWbgTD1EeR5UcuG32qNKhDfXpG6nGeT96kMehtJTk",
  "key2": "5T8EqBCVqq58ucmuZ3CA7wAwjsMXYcuvTqZjvpN7BTueHjnGbA3dzUdkpAa67mNBph8b2pDZHQ3UmpXqQEgRfgaA",
  "key3": "2YCqUXMo4YeV1pzHtjRDrf6gnWqfbeut3K97kDzBH5gBEtWfSkdWaTsFY9s1EJm2A7xGrQoDL4GWLyfnWGgsET2N",
  "key4": "4gpiAZuEC9RxfALdweMo7uJCPZMk8e2GdebK3xznD61putx9GZez7KzMK9qriLnDwsR8tdLhq2ZtFk7Chdy25FBg",
  "key5": "3BNUhiUtnwWqRCpG3hkDFLXWv7N8S9De9D25XCTJidCEHkUFiupUHHGTgWPQxqzZaobCJNSX3C9Z5sHYJ7piffjo",
  "key6": "5i367oHwiLYZAipZ79im7EKHJajEVixcKek5PmAGpx7jCLxeuPRbHPQd6hgY6ts4AS2CkdXXyX5U42cUCJsHJN7n",
  "key7": "2KWBznXcoL4FiMvounpokWg7wHmguThmerVWJJWeKPHSEVFc9p3jyzUK6A3UWSwdAQQDgMLLGEd2GYVhRvsLe7nx",
  "key8": "4ceZoRd72i1TPp8SDWs9EMEwx4wCVZY4nBytX1ckEJLxkDvqp1LjqMri2WhEuS2Yg7vhMUoygCBZRqvTt4JKYA2L",
  "key9": "3McuCgP5urrMnFopTEtkSfEWpfo3Waci5ow7H7qjWL8LjydsFZjBGguX215uh8Swg1AW7k1kjV289aPYN1y7R9Da",
  "key10": "5QPXH5QNk9B3iD6Sh6B6vhdZzqvUjeJBxVsPdPkQiSUsEmZfNwpfXb9Xddt3Me896No3fizF5Sx5LatCQtdPjtM",
  "key11": "2gW8166MuEZChQvQvgrmfYzxmHT7nyzaBaePTwtmjCNurmoFfDvkNPn9wahKzNanHvKgxJJiCcmQbg4HbVY2oXsP",
  "key12": "5rKfAqkFPSLRFhDUQ1dYRY7C7xsApJu2gUhRDP6Eb7MUVUnAnnzDiHXeBwdH8yw2XAGV2rMWtbBzz3EAFWbVDTRJ",
  "key13": "apbUdYcFFZaABp4MkdAMgrKZBPRWCbjvTEBxjVNEnKhk4pHCSUXpwPDzPqNq9y1HgsC4YsfSQTFmqvx7dwzyT8J",
  "key14": "4ptgMiUUstSSD6P945L3KVW8CEdSJBaPZbLBVGQpaYoT1fApQjjBsyYkQhi9i6RRG5TfRLf6FtTpbsRfncj7waEU",
  "key15": "kBHo1niMbathwgiaJ7foaCBiF1At8NW2oZnNY5XAs13L2UMjgP1o9dSv4iR1aYxyDpGHu6MafsA5b8RewEji4fL",
  "key16": "2MwTSzGHMqZkLHY1mqxppEzYU8k8qsiRMnDkgAo3zx6aZZHfXgjMhJxhZyube7JVmikxsR9HhLnZonBaPYSdmWwW",
  "key17": "43Yxb9rHmMj8pTH9QUT88dQ3LLMFN3KfaDTKvCkVJHt3bXsbjv4vsTK4Zn9vY5DfVV13eEwY5kaxoEwQUzDkV3V6",
  "key18": "2qpjFGDk77cFazc6rvkRHRmVk9PrKyoriFaKDDVGx2U6JYhs4vBegVqtaCQj6tYwo2pRjXkDii3DEpb2yseN3SE9",
  "key19": "2vRcCp2wemvTRTVPVCozjpzrpke1ubAzGcgHtNty3E82Db24DBQzGjXtBzBMHMGok3RZeKLGL1LX1uGiAb1wjiDx",
  "key20": "5vr2FpwXaHtdjZpuJveQD8eXa6yEx5aU3ZKb41q2FdkqwkMsDwjBCdFhzXHiKGhZjS58LSiJ66WsnkCTcA6uUFyu",
  "key21": "2gMgogqUoepqg6qEfj3CfHGfYUJpzNnfrKTBbkK4Ab5V6F1ARN6bpsNCAa2T6KpsgQFeXN8aPGY7D66wNSZL8iPQ",
  "key22": "22wQgBT3UWmPDNGWXjyAzDgGM5UuFXttALKLhnoj9GR24RsB5wYeiTX1DtkuZScTYuMNPkvk2xJ1CPEQ2tmeRiwE",
  "key23": "qkDYyJsebB25FMm2aB3gbto9m7dHse1djHmAE97CTq381ZPAYA6TSc35wLkLz8kS3nfH9f8jAXtey7G6YRmbn2N",
  "key24": "4gqD1VqYyDp9jPVNEDqHGArTrvqL6aP7dhrtkNKopxP2viDEYg2knPWeSe4VxsNs6ggzdU4CJBsJyYEvbqSHHNdn",
  "key25": "2WUuHauNgTnyLYWnHs1vniBZwwR7t5CYiWF3KXhwiu1BDuqbVAYYqzpyS6LENWc1g58LASUh4qYVktEh9RhoY6sJ",
  "key26": "4asvdqZyPNDWKrfXXiYn2sC2Qa19PgJ6DVenBkuz1nri9RC3Dus3TNHuXEf4knj6txsh6PFpQ1yAJRonV4p17zux",
  "key27": "VJDuf8Uu1dtH6SYxai1Ke7oy9E5Gg6UcV6FupkTYn1D8yJwC8YrvhBWxZ6HzWvBzmeCkQUW8m6UBK5MdNeQVCZp",
  "key28": "36xaZ8wFg2htW54mQnQSq96HUfzd1B9CAR5reWV55cc158sBqDki31Pzsu4ifSmjfxTWwhHRVgqT7HThwkXP3TaS",
  "key29": "4ZKa78EwUyWu9defHxzYyKpySX6WbHSGgzzQJKWLQSnf9ernnATKUQGRy3tTApRwzZFYUoGDoQu2nLPoAk7puGH9",
  "key30": "3JHQvvUJXRJKwGhSW4KcEifchjS3pXwdpxFXeDvRi1LZNT1FHtagQeaVvPemdkqze5JB1qEJeGmPsEtqseYZC4sA",
  "key31": "FZZipioaqAgfBooaYyenNoFC1uy5XtBZe5PzvjPaZYLyoqTtwZ8bS9pxWtUDFc4Mv5dbrMSV5nH5fwpU7NBcpPa",
  "key32": "2kJh7yDJLDFyue88WRNq2yaUfk2njxn8Nit5D1pHQDnF3PVD4jQXU4RNK5wj7bKDETvE9kJ6RYm3Lp39ic5bGq7F",
  "key33": "PUYq54WkMQSuYdzJkDQMcuiX39Qgn2mpc4oUuVZPJSKGHydWPxixYhjaWCsRBgXMHDG9trTUkSuEm1Wjnuk7P6a",
  "key34": "2HvuCXStHbxv2ZypnQSMPFnScm7Vk5XZ65WFyppcFfbEQ9QeqHWcSn8LavG8tAo68pASvyo6Js2M3qenRQLw2oQL",
  "key35": "4UMmRjyXSZrj3CCgok2zBRAf6JYKzWEcQ6RXT2nNj3G84WYLomWzhpqAsKLxBrHoFdNnYYbueXjUeKZPMrHzb8jJ",
  "key36": "5r4gFtdhw4UGtfiJmotugBoneKFej8JnFgrhsipvJ6YerzXKLSwTpgiAVTwaKaaYz8HpjSWKeZSCV75tmGsMXJ4S",
  "key37": "4rmpUEq2sZydhba8mFEYsGgpfzduSbp4PFn43zYB6L1afD4tUf63swvUFzccnaxt8EX5mB2vVPaaGHjWsU1btJU7",
  "key38": "XxpuxuWZwK3594vdQRUmFfvUafvBNLExFQ5FiiBdrx2W68SRMgKCrfyCnCKwiLuHf57C8aa4fKmq8oG1VzBzfDo",
  "key39": "mCgJTtpgFuAHNya5ZXXSU6vzwBYMxGDizp9BAVHLDetem8qyfRpuMCxFDaLsvqbu91ww7ZHGC6vCETGSqmSQ79K",
  "key40": "5QtN9tAwxbh8sF82StbVdnHajCqUQXxh4NgcEh6nKn5HjbZqzZ1Xc3tkm2LCv6h9RbGWJg6K5vqcNt9Liv26aEvH",
  "key41": "3hXYfHexfMsFdeGCBDGWwKZDD2Z414o9H1BZviy2kUntM2vh6hGMnQiTzMph6wzCBZvbHdSQa6WxJ5sGc3vCdEu7",
  "key42": "zFWUaB9hzsXyKbN4Saa5Fj6RStF7BoL8Z7yrscUgQRL2LYJZEM5RVBDADKViigR1PAakw2d4DNA2mTKPehJGRgi"
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
