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
    "eJnKd6fGD2S79FVGdpuLdrXjbDMyN81rN3CJzwLyDHCnL4q8SG3Rg1Ag1gw3zeYUZwj9RW82TMovvh8QtgbZxkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6eNAy7zMgf2x7GEpH2aH5reaEhoFaWySHuCFaa2BPGr1ZJXK9SbCAcLrCCpkuvE6GB64SGSg5tsKXhV5uQd7fu",
  "key1": "2kwt4SAUcYL8qXr1yx21PamsAuj8mJW1E7gGryFYFp7Ye4ieKSpb8nvm24pT5wu9M4ZpDznSRp8aYzjh4BpZm5PU",
  "key2": "33KkZ4iknHSPoaqNR7cTbVUhszci9LAtd6eDPuXcVomQ1jV2VH98gLiSBvb2LuF4kYpYnj5aWJUiw3DcmbtRiFdX",
  "key3": "4fdK3oCXnWZJcFuXXiS2x5JmimNckzcRS31DoC2LtBXqEhzU9Ng4V6zV7eeVB6E9EwLjdjQeg4WCmxYBAi9TxG1V",
  "key4": "296XhktFQi5z4A8sYefaj1hXZs6Do6yW3cKyPzaihZ2RxYJoEjtMo6FRSBURdRvKTZXrQsQtWTeA5SijNorDXawT",
  "key5": "3a69yec5PRAAAaSRqa9ZC8hS53w2z7dvdpDUBoWYPdUeJ2BLtYD9TiBVWAVpGkcZHZm1wxVhUhEdrBKf56CvQKJQ",
  "key6": "4JTS5NTsrRaWwqviN4C9seemkbvnsSKEVJaLZDszsj6MTYb4iDf53gBQfzJdsAudYZZLi47VSye5nddDvbTqeHqA",
  "key7": "3iCgskpgdHEVgop7AdvNbUvHMuiiaEQb1GgVu7swhHsZZhxtzQfe6Lf1rAd2uTADAPng5GsvkAuCB6nf2tYRUb5K",
  "key8": "2iUPJJNFizgGasGaeNkAJS8P4Apb7u2G9oyfBkUTxJpErXHoFsvDYj1KMUDnwhKXJE383JFCxv75gtiM9LXKjRQX",
  "key9": "QXRqpN7duURhnU1zAMCEtzJqhmFQSR3SzLiBjPSJGDjYoNYq1DhPT9vosHSecV7wM96a2WpSmo3WC2fzti9o4Lx",
  "key10": "3TCou9NsPux8mc921b2LceJSEb7xC3Ygpem2nv1xneTXmsdpvpmUje3aFAHjoEE3Wfi8FU3jkMid2VYBprJGCAD6",
  "key11": "2Nxki1Qq3aoHoLUrZxibcTwsPNUtqMCDX8vBarduwoUU5ifDzUvkzZTk4DzmgJihMWWXBEHn1xGNRqpAByHLiQFc",
  "key12": "2CazQmc67WDDKJCjE3S7mo1FZ4swSBcwsVibTaAvBsLtb2v1kSwVyYZQK8eZVyZqiH7jBDTHpiLQUHpqSyGkEJeq",
  "key13": "3tuus7qC2f2krxj9UhsAZyULzCjwPhvXq56vpJjR9CdSuKqUH8T8y5frAEfbwuKEBvsJrvu8Zs72VKoyKVgA8Doj",
  "key14": "Zng14Zha9L1rrNyS6jCiBNP3ni7zHi1xkJvFHuKy2mUM4rLBArNLd9oQ8WQMP6i7gK8mUxLbogHgy9YVvZ8Y6F5",
  "key15": "4mJ2p1JRjmj8BNxvWgCGxYrH8kJ5bQeNX3HVhihRUFayLsygmGuxLopFJLRDMksVasJbLKMH7LEjzmQRd7hAMppD",
  "key16": "2vXs2gs9cf6C8U8QFC2sCfhapCasW3DsXfPqE5wjFXDspSxsMz6wjLKD8CfVzp2MZjdWNFkxtz4qBpwtJots8rs8",
  "key17": "fxPpmc1ccHjaFLJEPdYTyCcfRaAdHvsfgt2YPUzohLsrxV9QvL72Ji15dS3QXxwGB4AAgcnanHLBEm4NikWt7G4",
  "key18": "2sknESv5Ftm1eVqff9HmY4dZrYtnoSDQ13EJFja4yi3u7wFiZuG3s64c6kH1bDYM5eiqb57q82P8AGuy4gWwerpW",
  "key19": "3e5irfFy3p1ertFU2hzAwJT19qBaaqQ8i53KGwj2y9DA3gx4qYrS7kCg4scJUTs2efWiLPwpCGmDbc2TUZwgiw6Y",
  "key20": "4LjAJawyhtkEnN3honCEQgFqj2TUaurJzTzBU9JYDutTQ3zhozA5kXxJDQrgHc88uv1AJorVHuE8uCth3nPqoire",
  "key21": "V2n4CKz3nybTjZKDb22L63mTuTkhJPReTRRP2DXMvHyDzQSjw62TH1e9yu9jvT9eaWTGxz2SvM4GVWG4snKLzmM",
  "key22": "qR1bVywbrxva9Rgnwm6gY5pYpGVHT37xaCsvJxvL73PXcyCGmyD4JGhx5fgMA56Tnp82vXWuGx2ffDeoyYc6WD8",
  "key23": "5ngLo3HjDzKQUtvv9QYx4VDb1u3xeAYQrAYffu8aeSqXQVJHcEVDPmQk8zPeRyzN1FwzUjXTUmi5QXvgPFFjR1Q8",
  "key24": "5f1qMyWh49iQaKH2ypXP1YiS5RkGLRNF2Hguo4KfbvVjUoyQUrqTD5LL3SQeVipNVCGyEknSf5nY8LpuARt37DhA",
  "key25": "73Xx8utA38dK8JnNDQjse7tXtJ4yJJN6QmavD78hFVYUCLK39bCFLfdXx5Beb546VJ2Dek7RTiRNkZ4DUGUXWzD",
  "key26": "F3Bnxj3MqJosUTp5ywjky7Fhhiz44CAiNkx2ze8wpvgmZJj6xmhZ1C8Hh1ySXUpqyzegMt2dBJNHqp8sULtFyrc",
  "key27": "23J4Ld2eTbowoBzNfXtQQCxKVzmxZW1BLnPZYWzLE7oY1AeS5Gvug2p7nPfnBYuwjNShMjbk9v9hY3xcUeFDLv8L",
  "key28": "J7JbT75NfzeSTZK4obG3fPfVCcecGhF23HNmAVdTo2TxCJgJrwhAKcQCTTUGshu4TfLMsCsttWLeDiFMEKJ5kDV",
  "key29": "4CpPy2EqP1vo6c32kS67Rn6FZJP1MadrnLfZfrpfTBQgDxzogopseRJmwRzhFmJFBNxJhbH95zzYHDYYLgyTXyfF",
  "key30": "4NbVhkqYGBsKQoqYqjRvsKBG47YZwnQYPYjiJu6opGNCzng4xM7xTQa7JnCPZNa4LCiVHye2qU3EZUi9hTHWts5m",
  "key31": "pfBSiJHwhX9JQyR2Yjb7tKfRS2vND4Hwt6rdr4T7ZS3hKhRLXXsW8ZrgMzahRwrtmG4DPi81WtjuyCuZdH3UaAr",
  "key32": "67dSqr8HaXH9EQKCiZmnNSf3hipRNkDwwDiWac88Jkc1kooYUU48j3BZWAsoNQZszGihCDtQc8CzgzUWr3uHN35X",
  "key33": "vqApKSDQeTQw38cTh3MeDt6UGpSjQWL7r6xWHj2VcqtxtxcqDzcoHCje67wJgwv9rUjZMktc1CMLQAzKzraLfFR",
  "key34": "2KUGLg3LNS1rt3xLwWquQiUZKSSxVRocCHRf5PosrRubLbi96TkEbsHhHV95XCRsbPSDSEspFuxfVPZwza22fpCA",
  "key35": "65wRpsK1RVvTqoFapwknQM3Cg9fYrBTYCSYJmjAcBXxcsZhv45aTNJhyy8MHMjyGcxu2scaSDfquFALqEb8ZXm14",
  "key36": "4tTdzTUwW33xDkkKJ5PPUXVTVXmtJu8wkcnUMGGuJGQhJ6zN9Af62MbwsxZQtk3VtKturEYTbcdYVBpR1kbZLfuB",
  "key37": "27auJZAQ77avVVGptJif85sFkZsWsMbskcZ6hDvRHqcBnzsdkyPaPyRx4u8SEBsB7QK31u3nssvS3ZkF5mtmP5pZ",
  "key38": "3AeCgPyg7WCtQQZb7EXW5kaKqsm2FtvVpCakbVjf7YBRBEcr83K7KvizZakKDuFoXRESTk1s1SRhVHkKH3uFu53Z",
  "key39": "2PRTuYbjJHSQokYXqLgok8FNLX81GUaPe12K441rUPrGs8r5HXhoaFGJpgDNHS8tWZEnc2NXuseZmNnDsVRA3Ao5",
  "key40": "29TzAGGuFZLeSYsuUttF9KVXH1Hp7HptxHN3oUFCDSNnsjt7q34TyVKVZZfi34qAoWzpYmPqM2R7uQ8wasB7EuCm",
  "key41": "4vN1izVFUdcN2TeKs5NoKq2MKXUctEiEyHipGLBL9gnkuJeFiFEMGsDrrZfnKpNjivV97dy15smaDBykyR6ZxDKP",
  "key42": "4bA3cCYKtXhm8Y9yXf3XotRGVGpHqtXWsG5Q1sFKLs3t3AqbDJE1Bc58SREYPufdaH8qUbjMfhJwjS7AcAcrs4M7",
  "key43": "3HuyPcnxrvZGkVCheKZXHfBJEYHmwS4mF2T5Nj2hfKMB8eb6WBTxoTeJhubZBxvNJQQkh3rPaYaDVqPgeeug6KhK"
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
