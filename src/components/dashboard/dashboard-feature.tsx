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
    "3z8ovfvEigoYP2EdiALUxDaMYfeGZw5cz9TRNij75dk7jsAGmKBcRpsWS5T2Zi2Nr6K4urYgXuabhEbMAKmdhXLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJ26KLhZBtH9TXdLcUiKJnke9w1aYu5nMGtUxXAmCJCvzzQMLGkFPAX38iX9rhyEV5UQyvkbfNz5iSd9mpWLHK6",
  "key1": "38P1JaNvZ21ntKV7JvtF74cmKrgzZf6ffU54EQBaWmnhTy8PqCYC6LrXYnxeCySyqHKpbSJ1WUXFgHPytmyEuDB2",
  "key2": "5gnJvoHftsRBupac5ofZYxEpZohpg6M38Uu8qef36u1yu8dtP4gZLHTdULP4Jb7x7HBhwKDTsmCZ1jZ3Ryf3E5vW",
  "key3": "4tofvy8HyYVDiJXRs4YjEBrX34HufhXZus4CSTLodB8G7XpD61mtsYXMZZU6KbnuR2KaAH5gXur3nGyBKVoBNQgB",
  "key4": "7EvfDA1BwziLEjcKbcq1bAAA6rZZLEGxuiYz6chneTefFgeKziMy9JzUCeMg7oMmEnsTLuxi1kGzKMFhVxWAk6p",
  "key5": "qvGkwrgoneJPkx6RYWNeLS7WcHHwvyLgpaeZwT9Mq5xzzVREbyusKAnfGyikfHTyKLnmQbfFcBihVpSsJTcFr91",
  "key6": "3LZPzv5serat368qgxe2rBjb8JvF83LpPvcb3baVBGJRqByMAHAE1CrAo4MaPbHtRbmveJdbDXer5PFtx1EQTeJh",
  "key7": "X4kLhStr4qJ8xzRZDu1Ksng48px7rWqhmuFXp8Fvo1iGvf9ARdLh2CaRaWTueMHw64MspvuroMKjg8q8vfRXoqe",
  "key8": "3nXMHFpeqhFFSDYYjoe8ZecvDQ9gvtbTP35b8F66vk8vjkAc5R7pg5K1FMFRN61X3MyxkQde8N6dQYrvYgXG27cc",
  "key9": "5TVACs8U3Yijj6j6wH1DbmxBW2qhhWqV4PzDFtc5NQaxK92ynWSxBR4bVmrqquAuwNk6B3ponH8eYmZNpvET4JT5",
  "key10": "ek8SbJETA1jmjntmPwbkH6xmwbfJcgNvTHkLeL6kdcpAwPAsEiPQgDp8PaZZQRJYuVL7pukSJmXWhUCxGDTagku",
  "key11": "59dDY1kvmQwbZxAS1SUrrcPQtNmEgupouwPsmhbDGvDDJr4AMWdZh7y7sL7W5aBPS26t8F7Z5WSD2G7CGGTaBrvH",
  "key12": "4ryKpNvqizBAewSUv7p5yDwCJQHdohoy9J4Bv5EKznEURYS13qouSYZD1CWzVooeCCFcgudWqRkmJqTeU5EYJVsQ",
  "key13": "3uRnvLRmyyH6ooR7ePTttYQxdm6BW9fmREqfEW4QSugZqw7UoJdBTz4vGjoSfdFf9aSacgXeXGpbG1Nhubwh4eJh",
  "key14": "3aoRq3j98U4HePABXW6fMm8FGCnLVMDuBkUhidJ279ezKT5EjfNZb9ythvC69uZczFaXz3Z1GDS2zJsEJBdsNuWo",
  "key15": "4DjVcdWe1gGdwBhwmQp8iqxA1D1SawppHCntHTcSSXbb2a6eEy9WkXFbrhpDffxGMX6HbrTujVW5nsEA1GfCizEC",
  "key16": "2Rt61q2iV9iDuBE9UFSHfC1rkCtq5fQECKVpaQHrTpLqG21VTkBL2aogjuVXBnFxAPr2uzddd3yBfYM4vJqKCAP3",
  "key17": "5GTbjp27jX8sHkzUmMYpqRdyYWgCtDgExPwdbVE7z2GoPpxTq1BcRaEwXLM8JnCAA8dHFn93tVMPsT9REAx1MTZg",
  "key18": "3aESZTXxZiCRj7vjq8NAyC7s9h89Um7kuLKN8QdvKMCtp6FFc6EN4aRJhtTZF4sTqQhbx4wiQ9yFdSqCfsEsVbAH",
  "key19": "5ysNkQ5qp8su8Kg1EY3t4AaRi4q2dCXZvPPwEK3V6RyPLAq6uC6CTW8cnUDnTDDNgkMjwZZJEsLgFrEPZdndx3wU",
  "key20": "2feVs8NX1UPQhnn5Eb8yUuTRWYrKrxyEqAEutbFhiiDi2hgTHJLSdeJ13PzSHTdbG1Tnj88LUpXYuMF4qqM6XBbD",
  "key21": "2F4uM27FJbpXgps9zYbvKWRgr6RG8rC36gQMywBbfsYppXmYyp6zf21ZLkAuXVTkZ2fZdL2hBYE2aufZpMQhNAYF",
  "key22": "XwmUM2z9Fm8KLY4mdx6EhcpWHrod8i83TZUfykDRcSjqBywkPYqpAW58fHnzwx8xEaAfDaVjoMQaRDrd7u6Fygw",
  "key23": "5t2dLn9AYzm6F4yZt8NQnSFCwgjq3BmXhATPZ5T6EAtKa5jwWPgR8QTFLGN13HN7xLVs8rg3hQZWPXi4BKGmogfb",
  "key24": "2pjp9UB71Cdq2gFgzYLAVBhjHFnUvA5eNKdx5BGFUQeqdzosxG7SzZHufR3vwWheKwrbPw8dKSSeVNjEb82Zp6HH",
  "key25": "5F8BMCDNEVeHa1oV3mQvUNeWcjrFW1d3vjnekqZbqGWZuLnnpZXzeTLe1juXgxDERBHDJR7VwpPbMNpthbPYfJo6",
  "key26": "67fwafu6LmpNvnUMPWWyqBeD4XYJZh3AAU6KEYvrHtvZLxKoAvN7NCcopsam9mJBMzvxFp4wCUuorSnTR8Vn2AqC",
  "key27": "3zjBjLFFftVpASyWxd32PbkMTeJWkAqTfNwj89frybtRppYt2YpHYxjbsEViWFiYUMVpkFzB34zdV7e9LazZxKXa",
  "key28": "pXctZayetqjLu947PoxQn3zh6xfMDK4LNR3pm6TQLpL7GPbcF9Jpg37AtPckmXaXrMeh3izL77erQLrFfxyDLqp",
  "key29": "MyKA47UdJQ5AivQJhB6UFESJy7BKSx1tYrpuxmb5H9kB5SoCeYt63kYxhcTrAMWVJLC1r9YBVLfxZuuMEHGwDdX",
  "key30": "ArkPiYzi2DFv4Jq8bmoTAZmBssqgCJDD6gjR5R4x1ucrSGrnUqNoW3rrtc52GeRVwx6HASjh3n9XsHPD96k5ogd",
  "key31": "61Zx4C19iagZ6Kay18VKPeM89sfYAPaF6MdiUxbUitjDtsQi51Wa8gCytAgWPUEg9NXwcddytQQ3kyT2PZdCVWY9"
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
