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
    "3a2kUJGnsx83mqcmhNemWXpnFVYWu61ZnamEj7HxFvbdjpQ2J8npUGp9TpmF7yd9qxb31WnExdQRw91civTRCJZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6megGatJ6bWkfWuf5puB5J3VAj1jywLn8mmM2H38XXacDNz2cACGJVxgGy4KDzUyf8QsTux3BeBvEft7xntfWvV",
  "key1": "2zNzpAcaAttEqHk3k7xyHiBDoEXUmx1gkrEtMNWwwGAJy5ceq2avL4dFLavvFvoZRe1y9jwu1jhPyyfP93n8JkmY",
  "key2": "3ybAFnMrQqBLzGyJKjNY9givxe2yh1yxWBJLqfX6Hrsxv6L9hD87WWuSTq43nJwSxo5gcaHpPRwMK8LvYyLibwj6",
  "key3": "3m9yBuguHVTsFaWHfpMxR3Vx5QLBLcvjDuaYfKq2ceheVaoxonAUn6xLdZKw5gRTUbw198SjDKTnMAfXSA3Km2xE",
  "key4": "4x9fAwRAMt2nZgGgHvyZzsLXxRbMEfxrrz9132E9a6frJMgCsm3zeBZQmMr7hApiyPQ5E57FtFNXCR3z1sKxgGBq",
  "key5": "3qgV1hT5nfaNJWxgHbVvuADL5qJFDVXw2KLXWWcxqrL7rREpWANZh7iBdvVD6ne1MCttnwAFap1A4cEXPhcWgJhk",
  "key6": "24jErj6cwLJ5HD8yNc2u8HUTk24vC59L3JigLEPQLuwS7zVQfGamaTBFNVfJNMYKL1bd9yaJfQYMjdGtYdsdysjV",
  "key7": "2XzSqAdR8tQvJc5nqY5JhdYkRPLXMSxkHh4qy4RLZ1JsXMV49bm144Pa5nsJPB2d1ZWxDPTSJc6HFwBAn6FMZcpY",
  "key8": "3qQxafNRAweQPkzwYScuRY3bLLDqsnJCazVMaPi7qZdQ4tPdvTnZHX2YURTnXobou8RNqyTuGVD9SJDqJMvAtuU2",
  "key9": "4UrcKWjNNBPmsVnFUAvJdR2JQHm9mbmK8XCWaXpaFTxyQLuSZTcKtgeoXxqknyjLH2Cp9wLWCWdn7UtAuTo9bMLC",
  "key10": "2qcJNSopXAmUrQpact3v8Au8bKYBvFPBXwbkqYHA9PqWmYN47DC7DWXMRfXTmQodQVSvuXwKb93j2gpStJHQ3eSj",
  "key11": "3ksZyZMBNPgk7ZY9LDJVN6MtSZ4ADVaLzdLzdHQ8W8x8DNhAmeDmcykppg2vV81ng1YmHmMAWsXbyF1d2ntGXV8s",
  "key12": "64tUv9iwt8nL5KcdRGeBLJ7jfzkmZAtHFZNv62dy4KDeTvgQNi22kWQDq2nK8x2y6Uub1EAjKxt7qAMTyDN5Q6sN",
  "key13": "4gGFYbUe6DdsZhNJZys74jVrqeAUpsDvh5mmRNthpy6nuBuXBD1vr3xdf3ZsLNd4NKL2bXJX76BRsXZcXvQaqesZ",
  "key14": "4c2y13JhDfaLbL18ztBRvKEq1qDkWYhWRQM2CWwbe9kHHjbyURpg5jDKPDPBMi2KyQkTE8A5mVTiTZfoAmoG5rc",
  "key15": "dKmdpTe7x9CoSCFNv4Mpx6jXbR3dP7B82pSMhM2pyAfWChbb9phLu7GjJB4e7bRe9y2HuQ4VtgAwiGq3KDxNk4R",
  "key16": "3JSZZLroLHv2H6KCDaNC5f7GaPEpsHNtx45B5hgFA2PrK73jrHsw4fbkrHe9s1Vn5vk7eaNuLZZdL1yn3qJ2zaFE",
  "key17": "3NgAkJeALHknPFPi8p6ei7eZMJP4MDTu9ZbXqzjfqYxRQuEGregYCt4Yi5nBmXmVh7DuAga8vFU94o2CDyG8CNa5",
  "key18": "5A4gSzo1Co8y97xwk7GJ9c1gUmvohJba3uhdLe6FL5SbbynQ4XWM9nJUfPSWqNhWjFCpVeXortx1YETcy6awWLBY",
  "key19": "29WZsSfje3gnwARmMKu3x46kKrn7QBx4LgeJh191DybsUvzJnf6nGj2Ep2K3kqtB5NMyHB4HyWAw5DD8ZxAHbhjy",
  "key20": "35U9a78Jh7Nn2e6kE2u3YUdkAQ9xMP4ENWQjnAkoED2pRHXCLNfZfj9eBCjKTCyiyPvnQnqY9KJYrc6HwvsnWQ7y",
  "key21": "35FNsLynb1ZHc8gjjgzS9qbjczXK3v3Z4SN6uRy8krEm72L9PGfdm3GZjDpeF7hpvoDrRbaEjA8ivNVuYCzwb4B3",
  "key22": "2qdbNxeudoaq2rgUypD6wDvuG9757gK8muYz7oK2o4acAiuYsXGrRCCUrLEm1d6uxCubRNsS8zEKGbYrwd94nZa8",
  "key23": "66qtYwRdcLQEYresoV8Mvrfe4uUeT4ZWYaDXXZbhNiZRkyoviTssJYt7akdfGUPty6kHw69auUTss1g4yJzfoBsF",
  "key24": "1BY4XMp66YXCK5spp4CwFb44DvXR9Ns5jP1MUCLjS3LKwYm9FJbVHvVuZz817YCRX44H94X2Zzw5kbGcLsXZSn4",
  "key25": "3vdkFK9Z8x6R5uYijKPFomotCyjhcZKRfhCkXd8Eg5WEHruZrAhFNTPomVNStx4QvnXktXpgvHJHQxJABJqAnrNj",
  "key26": "5dt2auDfBSFStMbzBfN22afdDkRNzyMQ4U9eGGrgtwtn6VAMvaWrEDjpgYCcrShpBZUKGJkAHnibtraS1XQC5KXa",
  "key27": "3zo8JMWQ6iqdQ6pdSsETYrJxfkFEqjkTjZSe4tqJSvv4K5fwHiJtJ9ETemu11Pepaihk4cqAEci6ntm8HM8Hyiyz",
  "key28": "4q7vASKyCjJR9zApAs1T26ypTHF8JqVPy2Eude5SFERJppqBQZNPL1DKVX9eNXXtbkvT6vewd3D65jZzJQK8cVU1",
  "key29": "61huWVJ72yQnQ95cY7CwauEK9y4DdfFLoRRGHf6ywgwWxaEHrp1qYugKg8FtEUV7xXYWhnAisTcVBrQRF9SrbCzW",
  "key30": "2SqdiogFiS3mtAaTvyHNnx9EXnxfqHLMeeKww5GwtndSiCEZBruSokiVy78PF9trPkQJpCFLM2s1d8B44FYvpZXC",
  "key31": "xGAaUCUvTLr5wjVZxAarPgUDZ5xXQcsVNQu6wrbDD9GgW1hdvPixRh6bGUBnFFJKVFDDywgyjdtPWg1dcLfcvKy",
  "key32": "45jQJQJVvTRapGK437WSwraaxmeDkBT8MKv67kmvJ3B4hx5j77MqL5B2XTguhAS1UaAZMv17HPgvAuBLppxMSAEp",
  "key33": "eoYApm6My8febXf5z2fAybn2gh7gLJp5XHimFSPceYa2KDKSjKLqnL2yCUofLekipxV2yDQkn8VxNggyojYYNos",
  "key34": "qHdz6LbgdF6Vi1oJbSZwcrdmH6aG1RCAJCRrrhUk7PbxGv2RfWHUk8nK1tPrqjp4SfeRRUe4UQ1Hcbn5QYPiZny",
  "key35": "3wqQQmUBgW4ttCZtzacaq9JCRygPgpQYK4QKrpBrqmp2SvTLfkmLpLzhsdNWF5wf6B1v4XsGnZu49gJPLSaP4cWP",
  "key36": "4gwTgo3ydk65hbrjPRVevcwU81MTkkmpQq5cEAtPQUsMxD452E4bffjKFVuGxFoDphynG2kcsdecqUyyEbaB7cM1",
  "key37": "3EpzzoFbJTc1X1tDQ6fRqotp2PPZzvojqvBig4pMp3s78UA8bsHgbz1MahEwhGbJYpYxDgwDc8coGw2BvZGZ75DU",
  "key38": "5wUwybLK33cmYDPPAqLxukF29JfMESs4L3A5a3AJRDtr2F2Lxvcf84jj6wGduMp6AQExrasyTYhBZvrhe6wmtqRR",
  "key39": "5ZEXrFZgP3iixJmUJhdfVGsk1J4X6RHRMEAMuxpMFCmnuU8HfViJMikAcEKVcMx1f24tFYFRPrNHwkXPkTAt2THQ",
  "key40": "29fXiPieLozz2T5GcAz8FRCvrN6CGcSoZXvY5Qfah1xBRcs2Td9a7aQf7ed6GPchGCv6BoUppiBzhA8TQ8D7SxYh",
  "key41": "4M3z5pANCoowjfXTjNuN2FUYYGTEQtE7szHJWDnySXd2GsEWrr2fbBdEbsMb9t1JSFVcLHHr27TYUyvKKXbHi5n",
  "key42": "3qSmW5xhHA1KjG4Fs83XZADWT22zVdzYFEX1MP1HzbPeqRRyXXdJdkprKDG7XfPtCPJSTuCsihjGBudZMsryHsii",
  "key43": "34UucjSZ7ufoCFKxhvn58EQzqstaS3X4Dm4WHf8hJmxDuknr8SweAh4HcrHqU7m9pmgbcZLHDMNQnaRXj4MFviJa",
  "key44": "5Kue2N49q58MfoqYxK3NDHWZBxDyJJ5apH4kFaka9XrsCDec48W5dScvuA9DSp9Vv7D74y7zAvn7fKAAmBv4ZLfL",
  "key45": "iFD1zanEhfMnCKRe6MQ82xoB7wk6251GnxkvqyxS5oPYNH6nYhRjnPe2mpxZUDjgXjyid3XvRwxXEhm4XpAsZSN"
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
