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
    "37d6e7m987vVMkHSvmS2WLchxkgLRz4wSSb98kwtRCfDfdTNfPkJywi7hwWdsCyevu76yua5AMvtvuNForosM2jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PfjY6DQKUWUQYPi3qrBbo47ZRuqvphwFw8X2MBtDDfzLwEn6LNGPUZVm9qTk19ZpQ2Yb4j6iTnnUxKVEdurY4hW",
  "key1": "8VwLWS2PD4r5XeQhm9kUk36iTwPhNh76awzr4qr2xRsg78CGDFkFPnYWQdJHxqmpPSYzoDysAYyBaUBBffTSHHV",
  "key2": "tbUwP3Hj5MfoH3zwz4f1UU1rk7koqWGMzX7JWAamKCCSQZTQcCBhN4fh37PgEHqufRJZw6fHXirtg9DZpNkocYJ",
  "key3": "2TaGuPmxdAN6x2uXgAB6A4R6vJgNFLm75jLS2kWFgPxDpiLuQqxwqeMMB6EojpGcCBv4zDibsBRh67SJ91SLHnYK",
  "key4": "3T2scAWH2Wbrgv5Sar68W24xt9Cm8VmVDpa289rH1iwedjv8v5kwt75n7yv16PFwa5ACQMqDMzPNnegmVhKhhQPY",
  "key5": "3TMHBk4JkezXH7A2j6FB6ASMCDsnyra6LmnbGxfyQ6VzC1AQKJeHufn1euAAw5Y6SGvKwCsR1GPp3hYYLZfW5BSh",
  "key6": "3Nm2aGvDee4yuWa5Lsj3Cg2jDVmrXS1PGbySGV4GivVso7cyRgjeoE2vHLHCZLnyEkDwVxVCbFEQhH66pBYyT8WA",
  "key7": "2FPtyaUTxpUwvuRcxb8Qcb9bBhsj6MsAAxEX5BMarFJknF9kPDaNPhujjXYWXiJ14zQGmKq6wp8ENbkpDifJr6f5",
  "key8": "38Vgrsk373eFwGtHjGC3Uz7ak3vKwyXWSHWmxbqtfEsyVvxm65LhA5MPSNERtkr8btEY67QKN8YmF6dwSeeDGJXD",
  "key9": "2FMz3QL8gAgQQsF3LH7NKGcVAscTJzBmU3J9zAaZupbzGjb5KCtGFiateV1NV96G3mvLUcN1ijbanQ8rFqBwSb5Z",
  "key10": "2HzmaCYuCNSKbmGgc67K8Sp9jtscWQQnPm39oghSUKJ3sUaHwRi5Y8zvTxbV84ZQmtLDNBAjQ5m7Wgj2ewY3agUe",
  "key11": "3WZ9dz5jFsXBo6PKEN7WmZj6t5bpWSbp87HNR79Cwqf6dZTW3YYoMpg3u5T5eEHu47Knp97w3wJnd69kVXmQTGjc",
  "key12": "4DLALAsBAZh3ePu7xtR1rSVXvWaWRUqXikUJG3kx3xrx6rsLxRzzzLxH6f8kvedWF1VXViSYrvjq1kEA5tiKh6Va",
  "key13": "3YLgrC1VoZWtU1auSBjoFvRLdf8ZGCdem1fCrLGwGwpAV9eD41T1KNEAs2uqMrEvS4KyTUpddnA1ZoLF5B77seyn",
  "key14": "1gVexN4bAwNNmKqfeAvffxikE9BtUojeBdupk44XFa8CRVx82GFrzHMvts7t1r6WZ1HsDEBoJSwTP1jpuXYiCsL",
  "key15": "3E3GrMngJ2DNdkkipA77VBGeebVUCE3xYbeyj7YWKKFHxwm8iGkoWvEnAWWtvRk3CLRrzUg75GF3ypMTnZN9jMQE",
  "key16": "2znL2mzrwZbXA2Dy4t7Etkvt3aKD5n2BKveD5nN6uTwGNHowYZ2aWNGaHkYmxQ9KLpF7coZZa9rN92Dvei7UiGGK",
  "key17": "5kEH1h6jKgEnSWvXEbhiEDimTo4qfchCF33T5R4KYEiQgCyEJxXNevRpFtXZJcJN1dh248dajn1yTMitezdyZ2WY",
  "key18": "2UVRJFvzJeTBgw4A4LwKrPsKUd7CasrHEJgMLQzXHwiEeGJtwcAC5HVgmbepLwzkjYdoCpkDgHBxo3huS67fLm4T",
  "key19": "56qgo1eAdbr8wvaWBFECivVen3aEhBmzRFUo87D3iporBBAvyVv78iAM6JEMQDofEGeDsbHo4APpfj8KGCLG5m9A",
  "key20": "5f396SMea5wPsX4AeH6NQUrndQ81U4GWJPMA9YCsk3UusCfijigaK8Gmnr25rV51z5LzhmCawPxoPwEDqBsnER2Q",
  "key21": "gQbDvcEJf5HQYjJhpvyBPCsKc9H8B88JLW6GGEMJxL8Vz84onsMxA3ZjrKYGtPopftpJRMUnSokJJxi48ZzuEyi",
  "key22": "4d39xL7RAXhzPxo9QxYPaCfdPfx5VJTYWBYEVfiFxrGXK7eFB3tsEt4bvVDkJ3ddXZMNUy39KwWbTKawRFrE6iyv",
  "key23": "BYUvR22w5FS6P3W4p7fxxtnedm4FceaPBpYH7qN7TQDAvsNAHDyFGyMPnYpQNqqop1VR6ek8LbUi9oAkbpTS62E",
  "key24": "4yZxV7zgKT1855igGiU7pQmb5XtoYSRkps6CQ9SyqAgrqePo9Chmc49yUUgECoag8F4XEW9vfEUpaUwAPZR9smn3",
  "key25": "3oHH9LiMe7eg8KSBXn3jriysurwKHZpP8dSYPmGDUYmvW9N1mpVGeWCFWRedo4TY545RdwJF3oyGghK1qfpgbDU8",
  "key26": "4W8sGAZYnsFrRGeSaz1LTKd5J8kBFE8q7JkuXDJ9vvfKNRtLxuPy3DsHMcFvXZt7jkExKPghDZPD72TsFxmPyf1P",
  "key27": "5pTibDjPg6gwbw1LWXndfTtsGb2Qu1pyjka3hWa12pGt32bZv5roCpqvxsBV4TPBCxUrsSJSmzeMKLW4ns6PCFuP",
  "key28": "2deeqAWSHHYPWv3fn86fxZu24Spsj3dsLPR29hj35T9j9CWexng32yPuccaKxkahZGUdNmRTotMcJJG3ce2Kxtc6",
  "key29": "5WqeU8qwA3GfKj3yN2t16kouZBU7E7eU3QJPhojgnfsxDw3Em7HraZYgcGB7WTwZyYPsjtwRD49fwLq9VHLrT2jv",
  "key30": "23B9X4FSZzDPjmw4Zau7zmL89SPBJr5y7iJnZgArvg1bnSBjtULvVqoc5qPn8WKTAmZLow6FSdn94aKUiuubdKvZ"
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
