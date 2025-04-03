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
    "2zyPHqbfvQxhrVdyaYraAsgbN1NnU3DF7uxKuSr9ZRJvxLk5ECkVUC8QwEBomsNiBB4aPAVpTvzVLxd6ahyxcUB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gdXpLsfmMYiMw67fVxtJ3btqBxLgLqYwFXknUQU6svnwkKok7bxBbpawJqoTy8ZvdBhsv1oR4JCgSe69vNXngJZ",
  "key1": "iyLg6SrsaA2CSfuNBafhcM852A5YmLdD42aBGKsQDtr7TjbrWeiFg6yU1ihZMAPn8doF8wMdUgbePXeAGEMVvsz",
  "key2": "jUPDt2bTs9FmbQxGDdjdCYc8ooaPNR2evGNtjsv32Z7G7VLcbUtuB3euwRzLVHTxBFyATN13d8pQCDYawHGP2S5",
  "key3": "392dwT9sgs5EAK3ykjJPvpcdPtVcBoM6wu33WqtWXTLkQxrw3HcoqAuWhA2iNj29MUehy5tu6WhYHwYxteGE9XbB",
  "key4": "5VGa549rAvGM64vFSXgMRMvHv4R2Mb8J4qrVVQ5vfiNM4aAHAw3Tfo61u7yXXcVpWt2W9ViJLHzu8oJnNDG51h4E",
  "key5": "5LdDGnwbYfwurBET2nK21rM8yq9uS5Hef2NrUHhyow3a2XSgshvQ14YycEwNGyNjrynfqagTvQcdF8vkii2mWpHk",
  "key6": "djaS7xgdzgX9BkHJ8CvQ4u9cwnc3kHPJVrZHqUKGeeggC35nhWgTREeexJLYZmHSCe35MvH4Wut2SGFbNyqtwS9",
  "key7": "4KkRCexe2bgYhsnQqaHZAM7Y4gq9sccuM9pPU7bZkH3CKen5ThMSiGNBC7jur3krwVPn77f9i9bDMD7DVZkgzAKF",
  "key8": "5Trobh5QJLvwV2BJEMMZ7DEGqn22cNPfF6WwNXeD5ytEbsCqRxT2heu6QfjxQ8Ar8RDNciD3SqT7QnA2QWPrTpjD",
  "key9": "3PRhTERH6dTpCtrZQ4r5ThDs1JcLpm3pUaGCB44RcYWJnQVWg2QEhMLoukh3KRQ61JkzTSqSusAPHk1jvSDkf7x3",
  "key10": "4o63VrXzgChU4fsCMc2ymxr1KCFomApFnwSzHozUmzgHr2AuGjDNznazEd3sshnhaBEoMiXyikXQhgRqrxDBrpWT",
  "key11": "4H2hzMP9PxaUH2B6XVR6TARAeT9sDEkTLZqZfNmsL4r9wU5xJZB8dPcavAXk7yput92zzTt78BMLZVUbHuxaEM4X",
  "key12": "3gLYD5W87N99PgzFGGEwh2upNA5NHp7ecxahKRwCLDR7Rgbhnu1GG2vGGCuPdtv8kVg9kX8C3GHC8pHgLcVfaHxF",
  "key13": "296msWGzYtcsbm8cso5HK8QZzrN5u81G4M8uZudCZu3S3ovzNpmkaceKdE41vHe47MKwmTRZffXHBNdQwezxj8dP",
  "key14": "2VRN8Hkiib2cqwEkWi9zWHRZAfmbWWd7J1i6hijG4UKfYZpSYswyn2UkXkgPELYUMCritUAcFd7szH8p5zsvdpiy",
  "key15": "2sSiL7mdyRNSennFF9tH55GREKcroKckzdu73WtGVTnPjvUAtSwtvpDgSjU4sijkg1wz3RDqA3yTxXWWurfYy2NN",
  "key16": "58cKgjtDPRXNSDoSBnmgU2suXaLAzSUjiiJjk8kPdXoA2vjPU3i7DdRoTfYgHeJU6jFLptnBBcQCdaBYCpiyv8T4",
  "key17": "46xSKyjnxzizfpSofaadCYSwvgNtdTS3SiykEuenPBzrH2Z1xScXdTSv3FFXHLQntawAAekJ4g9VZ2mqwvUCMz2E",
  "key18": "5swn1ESis986tAXZPztxnihNy4xShHxxjoaQXRmixCsvCorUvgLUdqpp3F1n9tR436wuJNWpZvc5Z2EMkdy1aNwG",
  "key19": "iHdMydaooiq3wJD2qM2b8rprv1zddDrDXfdB9ArEmCr8N8zTK8bCkAnGgNSPocGSTKihMteVbjtwqRpvrjUwpZ9",
  "key20": "3cnrSpWadUj7GJBsRYhbE1ZsTy67AkYbsQVTcZEpWi6pdThPCivRjgp75kEthkoGWR8z5Tvz6EMWSd5uFUvaeJbe",
  "key21": "2bQGQMSZDGArPFocgPAcQCdNNbd8huL88p9rE12vzhR9ignuUMeePovHsHPsKveo2GwfukDwpLbyJo3U27KWkZ8K",
  "key22": "48BaKERoXphA1pfyLxh5eG6DmR9x6VpnxtzBMpSz5DcySbep7FeRk6Zhe5cGfwZ3NrD2FRSymAfam8JFvLqArVEH",
  "key23": "28bFb28FjeFaEDCjmXQS1oSZjEvH343ZjJEMiDcsTU94R3YtERLqb35p7beoP4Rt3aHkWb6UC4Bp7L8XyQa78Sa8",
  "key24": "2JifB15XwuPsqojZT9zATi4XQVZgZPKVjaUum4edAGt6VTyGo7NKQ9QeZ4TGH3EPPQoKXJiC5eELxPjZd9gFpGQH",
  "key25": "2TUCEQ4cDNpvKg1MoGetMyPSYUHTfGHKz7Mu5HKqBWUHSoj8Lk1PpanVsH6BXugCfrXdxgPj7YZARym5xQYiKUYb",
  "key26": "3qPDYVbQZDs634jneU5BHsmXSdCLHnjDY2S3yeVLpbVA9rGCQUN1TYENThJkQYfkbp4Fz74xu99owZFb7fRn99oK",
  "key27": "4TebGYZ8ffQSuPmAioYGX3VuNCcpBNNSjDdPSpRVrgDLXN8HDpwSQwSAkDXtRNYQJEf6mQqtbqcxezJTw1vs9PMN",
  "key28": "3ZW4hdCCNLVSMntVpHmbaUf6VViFJ7CHSaSxtiqDcDFj8AykjCDyyiJAE9ug9Y5SstyPRW41Nd1rrDnXY2ePRGkf",
  "key29": "4nJv9ep3xta4VpGmAcqVwpRLELosRQHnz3dPFPUQLbPQSaE73Lc6XSUoehxzdkoLCsuDTkFBtKvpRVd2nZPy1xcY"
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
