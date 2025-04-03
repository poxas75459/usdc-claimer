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
    "2VFHbqUQrr76FfUAGKxg2hcBpXCs5GiHBhPBaM45umMsW1VtuwAGfJ9UkZn5trvfXidRaAD5jWt9e8NatZyoyNpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFozT2j9sGcBEo3gQ2NCiu8kSwzm8ZDfNAVsQ7A2t6irWrb7akGijQSziQ1upAE691tYnjBVvdAA8gP7iSCt9oX",
  "key1": "5H2zd6KbeBeYwnYbjAryzencmHcyJre6mELeXBLKazvKjVbzpdW9JwqSJnYtT3SemqBwsM5mPijEGyPqniQgUpEZ",
  "key2": "5nbcoLygPhs6mQDyQYEpVVFWccEpLZ4HgcnebMpfunSJR26TaEmKdnXb9xaqnw8Kx3T3pce2zhGRtg4UVLSEJTVy",
  "key3": "3bq7t6SCMEAEyysZtzxHvoZ1Eg5p7iGUZG4qf8P6hThdLtotFDVsMTHaPRpKZau8dDaNSnknBxRV422wqx6XcufT",
  "key4": "5iaL6hNWPq2oC4phEJRWRu6ywHnANoNKr5nkdZuCmSDueGuCyQoj7pfh3Edp89M6PzpM8evuc1KmGreDR9Qe118b",
  "key5": "5TFrraUYxuPojtopNopUHms8z95zygT24kxLg1wuq8qPFKBUyGpUEvqU1M9eNCCzMfhSH6YeMwKs4HXcWnxHAk3P",
  "key6": "3oAgbnRZoQLST2a8QpY6NoFTmVSKPoy5qLjMYCJxCvNjKatQDkUXsqbBUnBZ1BMYz3cPrVKRPuaGNwmZvFBiuMAF",
  "key7": "42WaARtjsnpCfF2FY4zKE6roikdkkXMH7STATwe9nbu6aR9yydNb57pG8mwagUXC8DoTwpe5sTEU7YFa1vHX1QqB",
  "key8": "2ZoSqvZ7Vh866N9YdDRt2AnfgudbnHBk46mw29r5wjsaDhXpHbk9YFPkVnkEuPRHACLJ8JA37r2uTJ3vi8JBR65r",
  "key9": "36TEWU1Svax714VaciqKTYN2ofzBRj25ZsbUXScGQyoQjJQa9W1af4KeaA1cAx5bRKdka98cRhYtrCuhUpqsbBud",
  "key10": "HUtDB3vL91uHMFpkfhqs9pKZ6KwvdYWN6RV9G7TJiiaiYL5CZzTZznU1irKHWiE2rVxfrz8ChNHhbcAPfqakmWX",
  "key11": "4dj6W7QLjK8XKZjtphRsQHebs79WnCGo2re5vnjSxgk4GVkhigTKBV9HXJ9L5sMDZ4ohizzmeq8tVJbLXkk6yT8M",
  "key12": "58xRpQFCU1bz5TMzxA2Z7F7mFEnPhZtEwanzVEwUtb574BVBFqR1FnRxGEkEVX9HqoYVy7nr4LH5vAkMdofhWY8h",
  "key13": "5YKUuXNPiN99QBdNRosZo9XTqQYb3PKAZyd9BPJFo6h5j96zamvi7H6pZfi22E64XUsr8Por7MV9U3LSUfwvPjsK",
  "key14": "4Zw1ZBHd7Ar6iso7n4aD2rbYRNGUL1UYVciWW3NaaJnGcYAZa2xEUPnzTULu9skAFq35b8P6TZxaiU99PcYoeTgA",
  "key15": "4G6egpQfVyHnSU61p6eiPTLGUyeUjc1ui6iKJQaaWmVQJYxmMESbnguKs6mrFdsRz9KeuSX8dV6r3e848yMjDEKJ",
  "key16": "5caTBieXDVAQUdhyBNy2eHp2J6h5k59oyxxq8LqioP4bTQHvFqeXfUwBrtV2d2bVVCSw6H5PEnah1gWMb78zyp71",
  "key17": "2XCffapbv3DqeyMuf46Kqx3Q755bZLiEJnxw5JGnZ72QPy5ovnxYHYntpxCu59AcJ9ANzZFD1Y4BtM1DkAqnFdM3",
  "key18": "2Snfk1HbhGnwTdGRuhuiK5mCW9Co7BwJnnMwCd8kHQYiGjn4F9V6419JC8hfzCc1xSpJste7Zj5Hzf5CjaNvr1GN",
  "key19": "4fdCyqEqFmy81kJWiH4jN9jj5yzGPnbkLa492CxKxtPyUKgkA7JRBL5u4q5PnvuBYV31PbTqrgT7GtAxcwzT9jsC",
  "key20": "tvC8LTpD5Jh5GSQe8g7Y6u4yAaQPkQpggurCxANNBAF82BhJkjtSjDtwQgXQWvAXLGRXAQcKmDaTyEnaFYcovrX",
  "key21": "crQciNiGyeXHponFCeLcqrfypDcvLudg1f8ELGQ9Efh6oi4qzjmVqZQf6UF6ee5cEtQr4hojX1RtC894G5Tqhjo",
  "key22": "5tTgXpfan64LWxtSFWDjcWWGX4YjBDdtNhRLTXTVKQ5HscwjPmq9JuviH5HE1yzQYUf57XjBZrR9oQHMYgTS4tDD",
  "key23": "3ic7QZb4pVnmvFuqQcJgguQcJxpKKJZiQ1bAG1R9FyfzgRKFJNsWW5Fw9puyQ76M2CpAWxGLhLAAbNVPnm18UjRm",
  "key24": "4dyq6WQ4gHppuhDQH1WdMk63FaSnPdCivWMoHmzi4QX9v5LeUMc2P4uTDrxJZEksKbTkh9nqw9jDTWk5FnB3wQSq",
  "key25": "nGzy8vvARvZfAGndFMcDfWHGRNmN9W3VyizPpxPmVqd5fPMVfGSQUGEE9GrmWMCcW9ArQhiMCD8c5njr3MfzsCk",
  "key26": "5r3umM4quivPCDNKL9zbuhUTSZy9qzG68EVnt6WKFS6go16qd3nJ6fzVkxm5tpV6fkaoSGoUFw2ezEhtmx3PhZoz",
  "key27": "3aVY8qmN8XYeoVBvSNtVuMa1SyuGzC7ffWaxsctP3UCRJ2w7cxAykD5Ppc3J7PyS7WguyW7xkLDcqQ6FAfzc223S",
  "key28": "6VKXXUAAtni94YmjL8SwRjLfgZg8q59GJZVEqyNv86RfGD2QyLCVvVUAVF2GZLwYR5HrXdSn8aSvaYQyABSSsf4",
  "key29": "451EeEufBnyFrHP1qaZVpUjKLd3r9HLG91aMSudWyrgLAoTZ8JDn6BAMyeKXf3MKwkdqSGei3JCj5mM6MF81oByq",
  "key30": "59Qe9vhCWwJHSN8fgNp5mFFK5JAGGVwyTnWdDLAsXRwZDHLRr9ZsiNvJGZKHd5hWTxXJNJh61s2qTwMcVcGzpEJ7",
  "key31": "b541bs2jXMA7qKMQ4wmVmuzpSHan4x9niVzoVYNEQ7Jjaisaw6LmDTee9cFWg6J5UTtRAMep8hhD7thH7ybqqiS",
  "key32": "zKL9kCG2jwyjyr6dip8KAVH3mVPwXWZDBRVEm1qRFTRqUUdA76w5fvTrSNRCtJvuwBbhK7XRPhtD5AzMWifBkY9",
  "key33": "4RXDcgj8MsCXY9cqTmkGf8xyDNDAnwxYsPV8am5twtcbKLpLH8FujfUrxd7ZK7ALYSDpLW5GHrx4o384VYV5fgaK",
  "key34": "2d5gKVEgEt3xeZj13mSCUXYAL91NQF1Dg3HYUUERYkaCsbegm8oB6i83j138mo1UQSUjrB8s1QFnEU3VV7CrWn3P",
  "key35": "mWVpqyjqZGurzJ2XU57gJGJZBTjLxQ8ZWoSM2vmFpMJ12vQqfCmALcCxV6uinZmnhC4eNJZenyDBWkiUaFNtUaY",
  "key36": "SfE3SgcwtLZztrz9b3P39Zxuzjw8XoeZQkPAbMCrQDwpUDax3uDHyTnY4bJZP4YDUEfYqnHoym1PEbhjq66Spvg",
  "key37": "4wwjEf4TKMTvJ8E9jM4dGcsFqxnRF3j2JBtaSyCJijMXL5MGsTb8GoBiBRGFPvebU3QBXcd9ModAQUuB15hDUsPb",
  "key38": "2RLsiVHnw2Z4dFiky8Mkcw5FktZSuQuKhGv2zCEA3tZG3fVnyST8HinYDyUsSqtcLsk4LuKbshbPcGeLPeFEBpzQ",
  "key39": "5XXtpf83co7LyJpYNG6VKq5BGpZTK43iij4QSK3J2g7BVY96Hi4EnFHXXsKiwAxAbbbt3yKNAMFYZHLJxTBUMUEj"
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
