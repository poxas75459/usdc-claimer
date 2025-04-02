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
    "4WVGGpMSNq1gjXm9cid51oar8S27DRyMQgo1UGaC859RaX68CX6dFn8AAgRp3j6iNFXFTTQZkj1V6X8ygAW2mzXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XMRNYnTRbC3nDeRdeh6xQKxV223frmS2CmhwxQ4o8wgUTCjt32wXrB7tMutvsW1254xR7jT9JVYEf44FEmZRMY",
  "key1": "RrKVgDVHLh8eTneVDdLdFK4rCezmsgwBCPdkYGrBaL8q5p2bYteaq27Mjto2CzVpPx3vsgmdESKALgFyLeV56ks",
  "key2": "8Vwuh3zzmA82bxgHxrciegxUMCQYStrsvCjYLrZpdDaRjJR6TBEdSR8uVfcpUdUX3h4SYCBntngiJh1U6fqvV4R",
  "key3": "2BntUHUd16yrQQJiRc52PAQkC5fS26ZXPK4tGtheVaAWQpjdLKoevMGf57WGD3GwUKaAG2VpsYE2A3kFqba3a4so",
  "key4": "3bp2Q7qrm2hB1AvQgd49BFQK2GitKUDCkybkZqPWFdrHE3Vwoek9caMzMirMd73pcoekCdwyTnnnN1a4kmzyhfkb",
  "key5": "95KMNB6b4Z6ooM3H4BBahivbSLji4UCftypu7u5tz7NS3LjeXXzhcPQvM6Q6zuFyTSmsBUvjoFycSeoMrakw3yB",
  "key6": "5ZYhehpanmZA7nFaEv2xLuXmt7K7SoSipFEg9dyjyx7z2xnHsbJoyf5GkwYaXhuv8Kew5WYRhQTA7ic1vNTwGPwr",
  "key7": "58rQDDoS8aiCTvF977QnwFzuRxW7zFky5Uok36zUMfSjF5a2AaqifAKsuuGrvSqyyUTFhvGMVh7mzAD7rpXwppNx",
  "key8": "3hmJNodT5GwWTfCGvGVS9843j2T9b6xcMBHeGG3gngQPLK5JjRLs4obrwAqfVdj4eShacMXbarNgaWC8WmBB18JK",
  "key9": "5D9p9LVXxWW5jxmxWQWdjb1EgYkGCV4b6CiU2M4oXR1MxhUo7P1HJAAsNJVMUEV7sKAYQrzCQeywNUNYEYe2Z6jd",
  "key10": "3scB1ZoNxHwbaeKJfY9BCEZ6zMjuzTV1L7d5vSU91HBe9qCDCw2jXMKRGwuA8VqHsfXmy9rkND4Zjf74x3osspNL",
  "key11": "2bM5hBDUfs7kVgYrP53yvyxrEFCM2cGYycYS874uG4mar7EGyUegQgjdJEzVmKAaR9a5bei9AsGxzG1FFHcRRU5q",
  "key12": "4XFbLmAPTRuvGdTKFzqZ4xXMyQfhSFd7RNti5jiyr3e5MwjjhV7KvPZNUQG3Kej7Q7tqxh3Y8S46wAKuyE7smFF7",
  "key13": "EnNb3zXv3H7HpT433ZL7FtYamTaLLE64joNpRDKheHYh3XZNmtHRhQ6xk2WrvLtUM4dLepBwUABVCC9wu7soCb7",
  "key14": "4m6nDGSAdV71ZTMWGALxQGsgXa6cwY1dJTLRxf2PufZGmQpqqLQajQrBv4R5H65U7kb6BZPUwGCtxm7xU3rL4pqe",
  "key15": "5ngnLPc6zZ5khYokPV7cxUEAy3r57qxEuAkRmCMwHUVmxBySmrSB8d6bfZGsM9HMcPcVJqSTvNycZmwrQ8bnk6d6",
  "key16": "2Z1s92UoBhryyUfewgqRrqURj9MWnuJrHmtVaKyRH13gC5JTMYJUjtLEME1xspjeoaH95LBAEgZmzSKwjLEP69A9",
  "key17": "2KHHcAoVFhvchv11hSsp8bKfURxx6t8WKn7u4uJLWXcReib2xphQM8irrsWK3ipUsbnR7pVKGuPoi4xuqHAZFjpc",
  "key18": "37GFJFJ95HTNwZyZF9jFTAVrKwiepCiHsaxiUFeWd2VKDezAWAF1VTXUEMkdn9vYxQs1JGujTMgQwZCpwyaPmvu",
  "key19": "4ZQznXxryho8fpftBcuwhSvHkT5pPXNGWGVciQHFUqRxCcksRyzyuKL2V6zHFjBwL7Ndk1bw8yFETLLXTWThyxYe",
  "key20": "57aeNHNmpf7Da2nVML3roc2MjB38whcaZw8QqYfmX4rzHHya97nKLDqGi1YrAw7hviCk6kqhpZXDLWXVCp8rfBja",
  "key21": "3hNFiJqPKFtKhkHxoH6o3CEzKoxnDZCrZibnA3JnEHFVswBXcmuQMgU4LXp7GXEFQb7E5iuFgWGFJP2c1Xta9mnL",
  "key22": "5viFQRZqgxnnb33HJ9KS1pU58zddciwaadS3Gx6LguF2KWfzadp6CHNbzWsgjuKgxvUVZ5bCTRd891XDetmLhCxn",
  "key23": "56JHwjPJs1c7NJm6VZLbf8TsxUUKhBkUZdWTJNPWhpcTvhan6a9SHmhUZSRhhkhw9CHyWYrDRuj9QxZh4tYLRaWw",
  "key24": "4H6SLjC55fTAEGmbcGFnqrKVEGxzcemWQdLhqU14V8nV6iKwCw7WHVBhsW28gQwCkQ9NqscjBpvBD9EhmW8WjTjn",
  "key25": "B16YKVdWGSoJXqgjAPcJEbpUCqK5gfoejdyhg1npxekFE2ZDwoEpAvCbUd7ZmP6dwZXQChdxj8sEP5U1Ce3nzUp",
  "key26": "55AmFxNE7D3iE2Jxft4QS99gTdJV7o4uTJk3cCJzZdSHmraaoAPFGHKWB6P4REH2WSjeWQBPZ6BcTb3uhnNsTJmv",
  "key27": "kff34eWgiAhxck8kBFaviBW3P6BUJ1GAzKiaC6G4TWJNR4j9MSzM4GWW4xpdErgDUBYYp4dvvfVKrohxMoWtsUz",
  "key28": "3Q8xTc47efLwbY2zXivjGomDgyurp2xU5dY4uybjK9WxUXzevERPaVwH3zRTNDuRL3hxeb3AJAUoNHtaybTfe49D",
  "key29": "5j2okuxqeJsgHwU62rRR9ze5jKSCu6phCSov1zVGTrJzF5NtHX3ToQNsvsLPEXwk3iFRDzvu63rBKvdM6Sz7eWJu",
  "key30": "4y2qqY7pxHmi8CuGghdmfQVNo6foWpre3romKsLJyv8gBoEn4D8PcRUkgBqoQXZ7DcU2oTJTmSPiD3kwRvpyGZuS",
  "key31": "4AbYh66Z7U9WaMaeeCkuModrBuS6qQ7Zy2N3i1Xh7gFXxftxgLxnW2s8UXYkgv9RRnstJ5m3Vjg3wsy88ME7en5G",
  "key32": "3ZX76KBbrkWGirh7pBHgYaWV5BGPPmA7HHgNewUtkL4FcXBTjKp7x1NCFawr1WeZAaKkt8ygzWmuwuohNCyjkyV1",
  "key33": "mEJ4gMjzta1pXyMrub1Fx8ihgPksWb7gjfECgcVJq6M1L1uH7zUGTSMkD41xku7bsirEr2MJMCC6gF4Rpu6mTbN",
  "key34": "2yPTgahM8ix4d8gf4fmC7yb9k8NbTDw3zWJarZBWUPy714Wo73X4jC6tu2afLiEj1ct1n8jBTERYpTXAQYzrQGUB",
  "key35": "FztJz91FNLS7BrE9izkj4AL9FnT1tQNM6En7HaGpox9C5QMuY9NvF5D6RG1t4FY6rjJjAVojaVntyQoKeeCEAJN",
  "key36": "5yPPHEJVfzUGZFwoBXfCiCjtmDzpZzx4AzrUgwwmLeDwhLVDVSuCfJfjwbKxqpGRi3nhjmneiSK5MbLMst7Nrpbd",
  "key37": "ZPSAmuA3CanQ9M4E3tCxFf89oCMvibEnzXF8ZCqHNTcrYe9NBUHmy8PdLDPkg7vz1KHDjsc2ZnH1CMaBCswoSTu",
  "key38": "41nqHRS9QqHjojBiMsgrtavMa8HrZkAwtbGS7myz8kNEShJ4qWsCMZ3XSn9BybTDJxscM5H6EPJsMZtYC2WD48yj",
  "key39": "2HH2KxH8wXBpBQByBgNLwBRvKuj49fTdR7U5EHomn8PvfKQonf5eJwUuo66coTFzZsZyBKo1dEDd66vGgEtkQFGy",
  "key40": "5gybEoQ84szRiz9dXBbQdWtd2V1irbQ8NPkrgaLvgB3Q4s3wH6cTvjbdNSNmdaCAsrVkWAfVnZL3hhRT9PqEAisD",
  "key41": "3YfxyjVTWUPBQMhBFjQtaP5tGLi9d9iqUPpMepgaN9Y488Qb2cm157g6dok5CWhChTr5VE2USGiUTafiwqhn75Pr",
  "key42": "4Npv4cygaHMHzDt7DXiS73ozKhdwTYE3fwGPPfzuLkV1sPCMjbJJbYpdZN83DqyP1kToexc6LwAw1XHSJKcEt9zm",
  "key43": "MxX7B6hmSCcjXraudeyUf7tveaHcEzpsHwVJShM5giQyi84hgZqPtNpmrkNiPLqb3Dk4zGRo82sj9VtzsZAG6g9",
  "key44": "5jH4yyZVUEwfJxYuq78QY6Ca9oiXZ8SDTF1hSEMXG3PT6CSR4Hf3tjrForZGTU9RmybDot2QXGcMy8jFC4Ng1h4f",
  "key45": "2W84fv7gJJmuJQM54F9sq4qYJskHANCcTLwu9XzhYnvmHbuj8ejNSfdonJa4vvA8kiYMKscJvYcWtHXd7NMnmkhZ",
  "key46": "QCMYFynu7CiCqNdRaSqGDBxEFTVwi8ptuHKwe9xLQVSC5LuXfTvZKR9s1PeTt2UWrciJzWh1Eba2c2PocYTDPzg",
  "key47": "57UK4UBRF4iZpHrzGKnbky7DNBhsfFguJVuWvCrwUhEFeHZWgPemBFUo5YxUFUqwFH2U4YVfjyin58GFvLN5pqCT",
  "key48": "3ZU3F9yu97cnUiyz5vNqcj2Rv7Wj39UuRrbo6e56x62zpWhsvksFQTUJq85TKAT7aSHpbtDB3YiyCfQuZjdaZXuG",
  "key49": "5qKTcRbMKEiXdmYBbKLQmWAD5qBR7uY4pphJn9M9eNRSCL7a86XAd3MYn1tWAjfCRkzv3uWiN3hjBwsSjAY551qY"
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
