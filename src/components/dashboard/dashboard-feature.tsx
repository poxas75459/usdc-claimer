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
    "5Qk8RaDhqjPZhv5GbiYzihTEDryXjhMo755iEjnvGhndmmeCWhFfuvgaM2qiicuUZGuG7e7LpWCf6hBvwr4FiTpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGLZaMyguJXotfVewRst3z1gdkmkkr3ppNMibaFH3gXcG37TJsGyPLmzi2JK3fEjdUBcQEvE2WnozSC5wDbWWyf",
  "key1": "ffWRPnGuNqZ43HSHVsrJmyCKmwJD59Z4sfR5x1hfukP3XVkuVhsCDQiSuCh9T8HYs1X4QcFZxYHyJVLKExpdTdT",
  "key2": "v7gMB8Rtnu6Bhii5UP7vqFRD1qvWGpYDyHjBkJEmjfBdMjhoBDvjzUBuvKHDUAnwLnwBiwCFd3A7qMKoxcVpDG2",
  "key3": "3KndwgFZ1HymPC48jDRufsMfhGpAZ4KQAy59EF3Y8NUxkNwD7ec4P7uQZPgb96NVQTJHe4GySsuAxgKPe6CttPH9",
  "key4": "5cZfZ1gwJVffJ6ygoqVNqLxPpAQk8CkE6hsSYRZGfaMicgdvRG3pTRE2k8PJpCE29j7gGfumEcNx8UDJDkw2DfZA",
  "key5": "58Ce3MCxH71vtfHejUWNemWaBDrKDw3ixDpNwiKf8tD7D1ybfQrDp8MvGDoLE23LYJHTiC13pJpJT3Tm97eAiH9P",
  "key6": "25KQnH4jcHwKgPqUzLDcJKw3hua5YP3i4KXLYtZU5Ad7SqKQ45iXfTLFgjksPAtK9SdKph1UV18p9Fhoac64u71h",
  "key7": "5Rr2GqgnK5XsoSbeNpoCEVYYW4cZwF2wqU7NxK185oSY3JhNabYfWud88FGRvvbifnCTHVcnLx6g6y5pxf3Xmnn5",
  "key8": "sTuzowzsymve7kywKqbBwpNv5ZJSy7hH6YwHKe5kqqpEbBdvPyyemN8ERDYVugctefZpwPwtEkujx2e1MnvhHQr",
  "key9": "4CDBKorE4GAWePfTS8GSCb74YRPF7edongEPjQUkNufDC9YCppcNCabgmJbtVwFq32L126TFvR1UPgu9d1hWC5xx",
  "key10": "36HTgNQrxWx8cKC5eUFBjRCt4cuWq4t6gWiRFchxqqVogCcaGtKA1ZhuRwfho8WH3v2KaC4BvbMnc6m8k3oN47hB",
  "key11": "5KYCJz1W8ukFa37QFe3EmPQQndEwCqi6HLRRjxGgE59SKgA2N7MQyTMnGUSkxLj78Vr9kyqYsk4Z4pw5U34K8Bo9",
  "key12": "4yHrX8GRKzHaGSmjY4DvBFeLSo6bwriVTMcd3mKqepJbJyvLFTi6MHuW31pZq4RexM47kzEU5UX98xShtLcv4coq",
  "key13": "48avbBzwddngy8nJwPzNChnSUSXPVdtHRfgx2pjkZqeXTE4RuNtKZDvwMZfWLD258Dpu2eg86YCTFqVpzBrFY6Aj",
  "key14": "2VSuBoBpzScs1h9oghGhwCjT4RYrjDv92cxMEyNTF4gvYDYgZspEYT5YdHsZDm62VbJ1RXQYngMuE4uQvBoBJtMx",
  "key15": "2EX1itzEkYRmP86NmAVngT9eYLFkHGxxYMwaX2fgDFto7gtdxyK85wYTg7TNLtBjf1CYGocdXDmzmmCQH8ZComQH",
  "key16": "5FMvjseKncducaWtKyzHAQFpmH5TRHdMrnpu9ByaHPViW2fjDaU9LU23rRTEuJsBPK74mDP2nzNJvTGkuwKRexP4",
  "key17": "XFs9sRsAbU8Eohusy2X96uV6zc5jDZhY3K2ghAiT6RhrNpdJ8istAQM9yZtXR1GM8mbSECrXjniu8kgVxqVJv2q",
  "key18": "5ZTJCFnoTM1BU63FqCeiAcqyFmPdoVhxo6K8miUZRqrZx7Svg6hyVWoRV4e6fWdKtwzTAh27XiPh5tdDFo3W5NAw",
  "key19": "49z633Xy5CdKY8EqtP58k85UvBKkk7ZDVNzBRQN5PDpV7HcyDhArYvBk3eCvJNV9VAmxuxhvcsfCJ42EvsmVozKg",
  "key20": "3L8YMmXhFV2FDMu1QZA1rEFBZjL9tpHnjwSoTVHevk5YyMx6AtgbyrX3aCy8o3zZnWGt1gb5p76rVydmfV2BRuXT",
  "key21": "5wRCLwiEUg6fTfG5qbc6S63DSurjHH4yEm9mQvvz747goNaov3vEExdA86VEgh95qwYm4htYYMdcchx3YpBnqziv",
  "key22": "4u5bQY8Nmpdv5BptQHaXsNqrS3WZuT9GJVVWWLn1izQuDJjC9AHUiHqWRBZ87rGrJXGzGkoQCjzB6xYbLULTTLUE",
  "key23": "3A7X7fcqcYiBoZ5fFwfQGFk54UxBh2zefNdFYCpbaTxdZSbERjm8sH6ykEAyJ9uZ1Ga4UdwKsWRxTfivFjsvVb2Y",
  "key24": "4xv1mZUwEaPViKoYgn3iyoZxdGv8bWiBrqfokcGdfhRt3rsqJEazL7WgM8ZVUgurWPmQerhDUaQ1XxFMDxFajsHY",
  "key25": "4aH7Xkfk3KootAoFfN6Jhn5BcwCadcbuv9V6m3Z6CyFL1aaDCSArDDfZccjdi8mnCp6TQtuXYnjB3fPG18RLmVLj",
  "key26": "5Tf6GWHXiaKkFPFmcNYtWuB7iPnAj4nGcJNY1CxDWcvTvfzt4cxYMG1pYahex9eH8chgENGue4NuPN8TFEvBaC5D",
  "key27": "3sAVCCd1DpCSHLtEV9PEBGGy6Q8LCvy2fRzZULdeGVQdWw72jMNbsXrAPJB8mtbVdxXh3FRdDLKNwDcJZirrg6aK",
  "key28": "4ajByp2mJzdQVTZU8tVUZNVs5ikfFbVRRF1sHZ9rZnN3FNZfB2XBgGexb8KZyDNVhd4QjToyvrrVBcEV5KncZKKB",
  "key29": "61TZ6wpmV9CKoMSKGzdyEyEJmxrjPM5bAFqHNNqQzfVN3n4Pwdmgyqgzq2rNS97j3LRAtrB2GNkheLDEgDp3CepT",
  "key30": "4sxtfH2ASRyLzpGiCZXLLBW7CCYNHXrJYLjcRkrsveLZXCpeeqdaLMTYHWkW4gqoEY4YGSycm7aohY7rBZtxgZYz",
  "key31": "41ycNN3SsRA7JEevRagYn1axoUGYg8xxLiYwcB7eNYSA32F7vg776uLpQkBaDEyRWdexnA33E1TJXFvmhK5YDSRr",
  "key32": "eiZpMDXdRBSGgMXLcnePUnXTu5y7oVM2NVogES6ZgZu5emaNSiza9ZvcFrQ899rjKTBMFucnWyboGTTcY6MNdLA",
  "key33": "2d1YCPEJiWuy68bWHA5A2VEto2Wf6QwFuvKTSG6YXZX7QUQ7a7hVZEZ43rfpfADn8uH1Ff7ZxJv7xaNwrTcxsxxf",
  "key34": "5WcgMyJsUH237jmgDc1uwDLx6MHpvsjmwDhYWvYtDU9nLLAw6N3bysohDEshMYqSQQRG947i8QRmsz48EnbaXsLf",
  "key35": "5T8aWQX49F8APU9Kyi9W6dUJ6CoyxnXvEJ3xxGc6LkMAY9C8ebV6utELuvFheVNcTQggNpwfcQp1ZG64FhjyCdZD",
  "key36": "2PF68zNv5sf3gZnJbgHtjX9dpjscEkGgcr6WoMesrunoKXLNSxpYJXpQ2KfgnXKJvSF2oDkr5AJG6qimnKxpggem",
  "key37": "LdeTdzv2S5sdjxmC8ChEaMDTJJWTWa1WQ7cWD8gRKYkWTve9nvbyp5x2YpneUUkE4M3dxsbJzjW8K7raLRdqvTj",
  "key38": "3LmojKmpC8ettBYMuN5WiSj5xJGwYNuwDyEACW1BfvufaVrkNVcdvXW1X9tJscqyxmWGGz9Pozh1Dwn4eFy8atVK",
  "key39": "2EMmT34WEx3KFSmuVHZjAUWkNjLvywqoVEiu5rB3k8unL5vJcrVCiiYDxay7GeNd5joyryPN7Zr7XbKTVnS3LSxV",
  "key40": "5r3wj3hC8iy4JM9jx7nDhtP8KZmiyRstzwi99R1pXCKAmEKxLzXsLdcc76wrZZHznmW2qvP8FQSA5AwaLCXhWeYs",
  "key41": "3RoaFD2RUKxWUoZSpEDL6fBK3k7YT91j8832DK1NBcr3EdujMUGgAsPGCM4eYjdnFAisFHhSPGV527VeWT5gEFYA",
  "key42": "4Lsxgw8zsbBu83qFtgVvr5sVv6TS3jGU6VaaYp4mxPvdRg4nGD9M4DuHymEo9nxjj3NfdpuEGNAZwCradDBSeQrG",
  "key43": "26jMbZ1Zrsd6vGpYtBnuY3ybzB7rMFugVckBt9WVZUGnDsvda5TqBxiiJ9xtQcStmDvhi1Lu5u7sKU52JTS8MyJs",
  "key44": "2WVMLuqgxzt3uiBYotnv9zjVPcf2WzeRGPh5M1REhrKi8M5mdbdV3vmftnaA1NFtCur6usWUBfSjpABbCb43tjjE",
  "key45": "4fNw5griFXs2SrhKFEcN36Vzs4nVir3EPVbDZLKJ2g5ui2PYCY2Tj3hxGMDZkMHNrTgoEaUc59C47gFtKH8yNyV3",
  "key46": "4iQvdRrJQqr1Whb7non4aKxHVxy38AuPDcZFYJghLMDCrXoYEuvbDrZgaqUp6GLe8gPUfuK2oN1prFXbUUUwnJAe",
  "key47": "24gQuBj3t7ZsPTem7DHuA1MFG61pfcChNcZXUY3HgvKXdGrHXLZnrEdTKWG6bmdQznR8rtzr76dvAnbjhX4ofx9e",
  "key48": "3SFAnth28RykukYdsWaM2wdipZkWxAt6GYEeT96euDR8YBwpih6D8RZGqrx37dx19WmoxSAHAGQ2TZfJms39j61u"
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
