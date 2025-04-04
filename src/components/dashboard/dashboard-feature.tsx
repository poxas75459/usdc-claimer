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
    "34iEQnQX1ePGXkrRbvffeuu3ZpPjbT45PJYyqFGexbXdMnATib5het9WgixKdMBcJFyfwZHHX6BhNCp9TwiDmGDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2ybp5kZ2kWneQ8mGCDxckoWs5tJsemjz4sxkHq2gRHVnqQhETERsjWsCneWQSDuvbEKtCDqtPnLoyByaKdCtdh",
  "key1": "2dMfjEMKfaJJjSQrJRgncxuArv6mCJ2k2Xmq6pzL1JSyxJSePSeAM4eGT2YVou9bKHNR6FQWSi8eYHvAPTQL3EHZ",
  "key2": "5xeA1KxqH9ooAaj7rp1jPuwwirQvnFYdnLwA8XLxnrwNezGKiFD3ceVTc6ikQdyQox365MWsooWBw2vG2RcvVdcB",
  "key3": "41b1e2xqyY6BG1QsKGe86hkpP5BDCrHTBW76yrd6zpfSxfjgfaejxVvQUw32DCQZiD2yTGU5iNLeawcg199XKXhf",
  "key4": "5NNRnmDFEU97bEy3wUnWgmokG6zZDK7qRP6vxmKowEmRwCJmKKXDH8ECQwC17B8ucudE67DgUF2KHrMFSuDh6y5d",
  "key5": "5W4iWy4KwVJ3TDZ8mqNz1UBRCYduLvFd9WbmDhYuDhKLUrTcpizYekAcVRPnjLmNanKHpDA17Q6kCYFJ5DbTiUZT",
  "key6": "4HqJ4t2ZmqgHQxCGgYCJVFH6gX8iPcN1DBqnKS8xGGFnYQbrp2oRG7SeDsnfuusscK7RZFfaLHtJSjiBeg4qSMhc",
  "key7": "2gTp1KjZHLjBuRLuZqorHmJ3xR6XWQESJAURLCbwHTYn1hFqqd8Y2n8EjK9bFbJZnmpSjGGNbT2iWpA6MvV8cQ4S",
  "key8": "5Zwc6QPDZ8pt8X6CYyEYzMwoCwKPaAqpXdVuiAghAzDiRKu6va75wj9E7pdLqD8rBwvjsyUWYGZsPEncYJ4BM2Zt",
  "key9": "5Vx4vtmqL8kjbjR71SZqpiHY3pUtgrkf1ZrUkkxNWsN8tTuRcJTXPyuNUwYHnYNrcJcrhnnsneUmsiU4nhLmosby",
  "key10": "z6P1jv88ophbLFUaahBzDecHMJZX2pC8nA667RR7hmSdwS28vRaZK1SNgT8qAPU4XLpnr5H4ssZv8bpcg483C74",
  "key11": "5k82tKa4G7Hegjzbx9gouwthc1nHfpKkE11geem3NR1XzApuq6pM4KEzRM5HTzwDfiXweZXwVsu7hP8AxLskPiDe",
  "key12": "5v8oHPhZFJ4PBjcjoxbngZ3axEMMo7yBgTxbmiBqm81uJ2WJFfPqP8d6QEBLRb2xoZcXi5PtJyDpfUJyvqBLpKPT",
  "key13": "3UEhUeCAjfjqfmm4EvUjvTkbetQNgjoEkYCBp4DEA7Kri6rCGSbed6RtJp6JyVTdPfSD5YUbYCVVu1jWZm8VfiEY",
  "key14": "vV2buNfW2hsBaG3Wt5NiKhYrcxYz26U1Aw5URFa8cT7Rnm9UK291GFfFcYdZJCu6h32k8DRCmeysjKZdVPwmtLW",
  "key15": "2XH5iVk56DPtJmjiwjMu8H5hzP3EFDyhXLSe7QG5o5FATkg3H9KKLSRhw1Jw3CzNaEQBoVuUWJ5MWCePTvGHxtva",
  "key16": "4xzoNs8cDpSxJWjFn6p3EpgiGTKQFUr2FUdPrZ3CzVzFckHPTe8Pq5BssfzUba58xgV5tDGHMGFUmDUpCeduY52h",
  "key17": "45FzKMGoMdbxroqv9ppLBdrzo6UjiZ9vckGKXs79nsx8s3y9dFprbpVkq3eC6ryjARkabGgJxdYsBPVzsrXB1M1J",
  "key18": "39y9dgoo2uzaN56eGrs2vBP82BNo7UP3pjSjvcGvALedtjJoShoi95qxG5VENg4UvsncdumzYBWByCk7kjfVfodr",
  "key19": "337wW1qUx4DKmg3A9TBbMtztQHnpFYozmdWW9riouDLFi9VJtzoi4d7iqY525tEuSnXrKTF7NNibxasSHpj3QJtw",
  "key20": "4qAya9g2Bz2stgvn8H3UbMCx76qjarhaEH1m1bjaow16DmjqTV1v97Dq8kxTJeEFNFcJ6CtMU9WxMvkzBTfbnCvP",
  "key21": "3MEC9i1rbRKwLq37xX92RC5s5fTX9WApeUbDw9JANdWz98qgHXzKzooF5N2nobKocuZaR8GHQ1RdXoWvFN5wa5Qn",
  "key22": "5t2do5LUJBeE8JeDZdGnHvGhTaCcrnNRjUEds1MLu7HvRadmDwXevuGjAX1UgWVbkXaGHeCZmgZa8THbJwb37LXz",
  "key23": "2AWcj46mdSxEnzxWzyvns2ALWkDVZ2v7rjYCHFDxb2LpTm5eAm4h6rVjhhDSytEz6Z5Db1fsTgHaCcZX9FP5dM6b",
  "key24": "2vSpnRZEjyxg9Juje3cW8BCRQhfHBSfctteJ2mEHykuMAUnk6n1aCbRm5SjZQuqK5zH8emfZr83Bw8phTCLpLdj3",
  "key25": "3yfk73Sx7DF9UexQ3tRpUMAqAU7Py7T24AQvzBjqthFPrUiaaGidsu7s2C47svkRExhrhnJRLXoG5Hg1tPpKtihw",
  "key26": "4vmZAS46dB96ejuT4kpuNuwpC1C8JaPARV2G54hmHehwh4bw21jnq9yJxXxMUqcbn5ufi8uHUhvawyPjsTfvGeN6"
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
