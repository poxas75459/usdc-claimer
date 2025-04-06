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
    "PqZfuyt4ZmsiKguRkHjTyPt4Q4TXJE3Bi65bDU4CeXJsWTDatDaSVkM4mivbsTbJ6GpEpL3GnbDwymsavhBaPhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22i34Q3KhCferftGMYu9BHkdXah7hxo8v4z4dzKjaun1h5i6NhR3BAUKfdUUDecYGab61SQv4ctRtGazDiud7Fkp",
  "key1": "4P5BXXbFCKA3vWKGxkEhwkSgis6JY155zxzcypL1o4FbxLHpfkSqjpz7BSh6mx45R2d8e23aL9pdjBf2RQaKiUKT",
  "key2": "2B6bcJ6He6awvnbc12raPk61f9URmayUqik7UcWc1GxmixVbdnVHPMLLBCLTFxEW6NonyYuyF1DEz1RSFt6isoY9",
  "key3": "2udKQfFeZmc9QFsixpaXrxR1fR7u6stcyoqmPMwtwHMdiMpiCqw7cJquGTyzqDE2u2PsgwmLSDA4HR5vPA7mbaTq",
  "key4": "4HZ51GN8m79imhUqESjLTduce6xpLcBWDBueKFmS9NfPQQg9jsztwMiYZiaL9ra2WViirFU27SC9KqpUZ8n5NYLp",
  "key5": "2mCBPMFbEwHc4tdoWiLq1eHz2493zj5YdTZg57zT7rzSZWEGRDcL9JQWEeFCA4fh9wrVFe3oGaBSN52MnZVR222V",
  "key6": "3WGeVzhesn7myV2VjoLWvpNBYdcPfyLdeXtpAEpfkeooxbdPmtEu3u4m5KSp47oQNS7GY3L9yCS2YuLQxe8s5TtK",
  "key7": "2ZRMCys1kUikL6gtJGzHHZrWaWmMEzs1cPAQ1WmwvqLzJqUmYp4prRiU7eoGRP1AAGwjvZPFEYeBSibZZ6AbSXzP",
  "key8": "d2egVQK9m4axQGF68VRLkyFJ3FevNGAEQiJztgMBV5LznJsBfmu7mod4DZUfGpsTd56YhA74A4bTHSywsQjy13T",
  "key9": "4LQ1HfcqmooB8sQueKkZHy94BPnBmPweqz8C1QdLCTNepy8JSAE68y64WMmtRXHmSwBJGHnxrJrb88jXyzQJQVVH",
  "key10": "5aLeWrk5SUcrUfvxsSetuMxeNBAasyQPmpDNjAQurqzeon39Z9yQRST83Re7oc4DKrHhFGGz7k6iXF7EAwyp2aPm",
  "key11": "4t41tGNgdX4YUWkp76jM21QHYhbLqJgNJV7Cz4LEdmMeLx6im6NLeUe7VxdKrQK8pk9YBSKc77SBhfK8DaDWgsEh",
  "key12": "2odYSpQ7hMqLbeQaqTsafgosj2KCPvV1USZ7TJ6WvS4WC6ZweGEh6Q8dGptczVSSzyWQpGHBUFzxz2wSp7oK6sqK",
  "key13": "5mrPnuXvMUx7NqAavyrKtNunPb7mxBTsc7WTNQXFcwd5EtS3Hc2n7eo8gsCx1czbPsQaUrMHDBh1ezgCHBQhA3iN",
  "key14": "3cC1nM7BuWQ2fpn5zNiASc9AkVQGwBtePWfDLZMC3HkYf8kpnCgcM3qrqPavzmtwd4o7vUs42SSMxQ6zjA4zCsSc",
  "key15": "FyudWwSiyfKXfty849UaV7mC6v62bM9C2XAa2fTFzRpL3PecRkHph8KqjCSEQ7ZCNebNqFYsz7vQshVzR95XQXY",
  "key16": "2qHLe8FkoMx2GeknRt4HiVyTL4U1dFha95jJ5PDgfSwJLvq66CCu7ECF3vxQ92uYCmHXELGZ8fATXVa1LESHbbfE",
  "key17": "5dVT8XJpUm7BFbPvboafP1eFQv6G5hytjiKQF5dSjZ338CTs7h9iSuzj7EtUhrxk5YikCZnke6h1un9CxUMfNoQZ",
  "key18": "4cVHejwNXCRicrFcj1o1iW9VXYPxeWWCYpMrryMhVaaLo9icXs9GswLtXCcswgDoomUtJ26dtUH5Cf6uHEs5ipSA",
  "key19": "XNMaMMLdxBdVQAp6DRsdAkyp3sCDJQYLKFLKBoP47p2SczBAoyhBdvpyjB7UhLoDSUMMimaB3SAk7PHPD85Aej6",
  "key20": "yjsUbPTm1cgGaZ74s47os3w5ZKLMvC5ASF5qgDE5JTTpS9WykBywbKUsCmzn4gN5RfoWAmgLMAw3hqWJL9d2zPY",
  "key21": "5dQpF8uCkyvw9ZY6nKGKytWBDBPKh43DBz1rSkRNpV89cucJTNsyStuZQDDWCZKuAEESMX99CokmiKue5wvayyXx",
  "key22": "5dYQVtztpvUEhbrY6X4J1F94hWQtZYJ9SuzQwCvXSxEcRnfDQ768yqKif2SGDmEzvCTQhZiLPs1iB644aQJPzT9B",
  "key23": "55WdjRYG3YsSe7Zu4681M5nPdjnjKoohuyRj6FFxfBqeEarAVjqJJyAq6eWS4m8tLV1854EPLrJfBuFRaHxtGXCW",
  "key24": "4c8egVfyz8XvXRi1oJqrtJGtfmviSkxY6ufFmcyjzB74Ke6nniGBEG7EcbnwaUArQ7fcuVvXrV1jcCDeZTBc2qm1",
  "key25": "65xCh7xvLVzXi7tYzz64YvDFpHc97eaN15aPSCEHanGGsrELz7YRBcrnQCMtT3XXzUZ2HUjWNYWxRpfU8G8BUwdP",
  "key26": "2UXYqGwQZkCx9eadTJUU6wAufV2o3HoTRi4HSR5de6qWmNwLKEdbWaaUkypUbcJWyNoN8KULmF6Wag9UJg6ap2xU",
  "key27": "5abDACScfvzgtv9Dacj71vL39F1uNtuNjh2MBSxsWVs4CFWaEEw9CH9GFFS6jxmnzRByVb8Fu6P5qVmWCxubY2MM",
  "key28": "3D29LoTbfSndzAL2KmetJnEQobEtoj6oozE3Go3SDjXWvtkXgYn33nzCBM2ouL8NS3xa3jeC1FfHvEiFhEms4Xez",
  "key29": "4dTP1AkrsYVd9QRPSTJUUksBBzwvWpW2Wkpqkcr1KM5X5VjetWgqm7hDZtNqKC68khZekGdkFpJtaK2jfuCMDPnG",
  "key30": "4GRcLwGNuAYJy3kfNCy4BNrrPJz5JFDTsKXLcpwuCma3EbmHEXB2iLMnM4Xsz2fLhgfxiUgnEXvRSTKG5k5e9rMx",
  "key31": "5tJ5GFMYTtVCdVwq55C3QQo8Pp7uJbA5WaDiDSrrc8JRV5izuEEhxrK9KXr1CEuycy8UBBvwsRon8CxAg5c2UEz2",
  "key32": "4pxo4djo3zjmrx4gUQ6jpxVB1jfLrYQFNrCskMifdA9WYh6DtMB54yKr8wE7KcCy2BtkpshVsK1SXTKreikLEZnz",
  "key33": "4uaMKygoRo5sdkx9DfH7HpenciaKi8Tj12E55m7jn1EjkGL6S9Tof5SR1SEH6k6MtWrJyZ4ujcQKBT2Th4rweDz9",
  "key34": "2om2En3Pze3DugeNQwSycktQAC4j9j3CfjH3vpHgR9y2RMzneasZrbAp4M11xdoaTZNPE735zbjMFT9BqZMt16cV",
  "key35": "2Rp7M3UUprt5PahPsFi7FUS1U49iA7AL6DunbGesSmqMnBAwC4Df1EcUZxURexv5GSBP7QPMUuv6BzUFEjjxnm9a",
  "key36": "3Qj3ft5U1cPmZTWBHw9dw12gdjhDSGGJirM19WRsXRjBumE9duoZVfYChMbk9syhoq41qF3m1pGLkRxAgvrCoMZf",
  "key37": "5idyLfAquziGTV7Qf6Ajn5F9BnbH5ho9YDtm2WetLt3Dwyatbvmwft7EsGEQFk8x7bPTggqWeUg1BtBUT1MBW2eW",
  "key38": "pnAuY8h4yYRw25Q1NFTtDixwc7rGp6NLFx4BVUGS8JXnK1MaXvJVAjrV9y8vNiCR57DHPCUtPvF6M6zsvWfdjwT",
  "key39": "4fQSZnk9pyLEaKR6CWgc7MMTK5iy3j1b9b9GhvxZUtNJ9cN3MbvVn1F93nrhyLwzqz4mEm7Fx162TKLv6kNPpq81"
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
