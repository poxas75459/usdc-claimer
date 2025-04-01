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
    "Eok9ViigfgKMQZsNJRULV9mCPWPq6FB6iMrGGtizGyXkxCG5UgtmYa7gm43ex14jNxtGTeVpHmEPr1ABdzs5B98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vByMdTJ8wuyA2n47W5PGgELh8hsTCL1q1YTgqkZp8FJL1scsuVQbDXoDbf6KZ2u21eB7JkuJGqij4UiPgkp59As",
  "key1": "5Xx1miGbTbmBaPiX4QCSobM4czQJzzzV4MaPi49hmKLva6EXvxJXLJibxXZnYxKBPQj5UUGvUctTxp22en2CR93V",
  "key2": "4qb7hxAffLgpem7jzFe9Fc2GqPAJa53dAK3k63bPF2Q3GbLX9jrvoHtf8DkF5zv8E2y9FCmTXV5kAVyQFCkBSggz",
  "key3": "31xJjvop4UYf7PCjeJXt6jpS3aaniTmNcRFXaMkD3Z9t27xMHPMzVMArGyt6n1gYaXstYzQZ98TGju3QqHSq1AGA",
  "key4": "5ZZYSvABfyidVCmRtZ4Q2qqKeuM6hxXdfjVaezTUFZbVLfM2F1zauBMWic6bFcqkmgPgwqWEz9uJkL85nFh8tSKB",
  "key5": "5GANyf6WUFr4spTT17SXAHaA986o7xRoBCsBY6Gk9aXoqq19yiMKbnHbxbXhZy37sH9SAdeqg3FKa4bEYaes5xYz",
  "key6": "3y22cnrFW7VDh8QCseZia1Z6VU3crHZADgaexE3C6dbSj7KuqSPefpmxinQxfWY4TMJWmE8aQ9jhneTbzH3Geedr",
  "key7": "2fRzrms9juQYgoBbBPbuHGSGNxoaBomduGNdkbMhfGESRwi513PmE4bkSC9ycSJnSLC5FbhRbPrmV5RcrVN5GVsn",
  "key8": "4rv3Pe2dWTQjBcemzt91QUPREhsemQBUdsxzQ9wahDbqbMRiiFynWhaBSwCTqQ9w54LqoZ5pNFmLjCKZEWGNdPmo",
  "key9": "3vbtKrM16HujdN2R3Jovqqyx2vf4L7WfEwaqErjZQ9nXJKdBbn64QmugjcT3TLi51aVZ4DjBS469ZVtccDzvFhGV",
  "key10": "gXBmBjUXpHRoTHw2jgAQ5wXxNqEnGTPB1mr8oqVkTcSPuaBJyK2d4Kcbq6P3zrJxfCLbCGxsQkugdF7LGv2ggNu",
  "key11": "2TifUWamj6GE2V8g1QkcG2RWMfVPjXKGh4kTMUqedTA1NeqccJDVPuoQjsw7MAPGF8thRnfhsafw2NNg6n6s9uQR",
  "key12": "22nBmRiNR7z5ELUpfDJvbRSwHEqNTWFXavJS9qcv3Kdbipjkniw72wW6UHXC6pbjAmWJkgoEncX12LfNLY72VD3Y",
  "key13": "5EgwXcEHnj5qcvDrm4dJrAzGtXcHdEFwjYQ1FYxWsSyDZaM98z5wKFZVZqYymADBsrW23dbdYfARPj7g8xi1vSCt",
  "key14": "dY6M61eZBAXE6LGqcbeBpiSys3QaPsbjA7NiAXkzp1f5EP5VzeLWoMe8bYwb4m47RMcWtweucLJFD5rmmEBtENQ",
  "key15": "45smYQQDdE6P5T8QjZT9nAG9n1BWkFX4esprSiWv58csvzQhiKnZzqvx1urM4CpL5Jk6xZr5UJCHQYjyZqMtPAeu",
  "key16": "3ArFZ4V3GKqXnb7Kc1pGcWo2AabhQDvo4Q3peEn3JZLbWMHXYbNNWCCxVyCwzqaqyKgChQxcm7xhrNVe11dkK7Mt",
  "key17": "57HEQPKhMXTyVedTD3yEUrzjDmJKsKZorsjXQeE9QdMkRW6Yr5Jurq5wsrDjY8FmTgvsqV15U6hSfiUnV6uw6PF9",
  "key18": "4MMKD5k7HacPMRhWnpQDRP7SkXLQW7StDgLKiSyT3o9LYSYdtivocpqPtDkfajM6p54YJ7wTBEps6bMtCGRtcugK",
  "key19": "5byoAAn2y8PfLW9waJ2MJd5ja5f584oK8dHCjVrdwS9TsDkvGavDYPg2k4gx6d5YCzy3JFqx1jxgQ7TaR8EXTZ4y",
  "key20": "5Ke6MUr3VRPKjJfiM9Cixr1jrQMtsreLFyXoqSRYXDUT1xqNnfnbc9aJ6bq72UwbhKZvR4VZNMhGzHPEqBiqoMRD",
  "key21": "5oCkzNiTH3dLjUPWgcnYPCGsvkQMdVE7toDaj1FRNo73TfzmBT3yqTHewiaHQCLjL1h3Hw3YX2CnUAzJY1rJmNLz",
  "key22": "4B1e3s9kEYLKBjjBtRT14ULsYrVMAFXspodN7L5N5JPE2YDuKn64ku4DeRRjXF7xoqCAqWSB9eeoLn29kYmeHG3x",
  "key23": "3QBbhxS5DKtXhfMuzWUiftcoRYH9k9jREy5ab56GmT1WYvWFjScwgXd4JKSm8JJY7fDwMyJrQAUMN3QnphbR2dAV",
  "key24": "kCpqBvzPCG1QQJz8FWQZWA9yxT8mkGEwRdyzXCrqK7sLgdeptw3EoK66Rm5HQExozoCtDaPwsN6SUz28ZpGYf71",
  "key25": "43hUZa1vUh2EW7LQtUZGWf91t7WE1DGTQnDigsJcdP2RNhaLQAmpsh7GENu2XuY3mWRVqbjC4ANehUmpGM8cRZuu",
  "key26": "3R5zybFSrz5vnbM7kERYLwdfvLxhsEPiBiFHM2PbdGWMVvGz2VeaCt4Yz19LKav4vf5Vtif8JV7hpk6v35GpYEA6",
  "key27": "4XuRk1W7kwMbMZXdVWRhmFdHrWaMXRZqYaFRvrQVFPAfNZxBwPWdr5z6YPdxLtfr3KBL7vQi5j34RQjeogCGDh2p"
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
