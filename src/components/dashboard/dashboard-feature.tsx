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
    "4PwcmsZR17Y9Hh3e3UrnTjQe3aydLbvTo6oZhEwcBeoRSej9XFojDDwEsjdgV4pJXALAo4FD6XuHLSeoSv32ScUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wr7TjDPTy7zXQt6CWqRVnp87YuWGRgFyFnxRrQztmCvErkp4FiJBE6qMpDvo2ep1mjc3bQg67fLYMeLSgyq8pMG",
  "key1": "5NNPTESPHJzs48beihJiEGoXcA6M7MK3pans2RTgFePLjc9TbsRupbUwmK7hUWHyUe7NR5Q854sSAYmufT1C87yH",
  "key2": "3L4xgYFyJvQSr92WR9Z3smRgVg97teJLYLE2HvkKjvLQ2uzZUHcvSC2uyqrycARJaKkVWPPwjrUNH1RaLPrCGd7W",
  "key3": "3a3fQJoiTEAV9x2bJ3JkVmepFoDcQz9zoLGKApZgKyn3qhmYt2JWzYfZx3YXoKFUjrtLrBEiE21iYBBS9eK5WMib",
  "key4": "3ak3VVkpxRcJmAvMwfnJS4UTcRKAyBF4vXFxwCCsW9ma3rVEPtV8kHinsZMM7Kspj5h4jdYh8VeNKVHn9FBbv62A",
  "key5": "4ov2GcAYLKhBYET2gMyUhraWRfLqSJ7e15gRNt5VMZcXGDRNMcveJb58w5tKJ4Hi8rs2Jp8bByAG9a7QWiA2xyzs",
  "key6": "2dvhh5ekpVkjmPEuoupwmk5jzhXptnZ6oxJ4BJLzFGiTg5y17z3UbozNyrKgF1zjuA5ccsdyTu38C225mpsYVn9T",
  "key7": "uRR4GWRjkYPYteEfcKJwotqZv4sks6HqNV153PqTLVegr4yY3NT8AyR2XkSRncsStcTWvnFbRMAvZorLjBKJ1Ph",
  "key8": "3D9txwK1RS7DZCPNsopf2fCpgRNJp7W5KSWYrx1GhkEdW2jyX6WDWJDdWh7ZhAytaAoCuWhNf8qMSQBhCDZFoEdZ",
  "key9": "4SXd7qe6X3p9wrdtkAMLQVMLh9wyX2V5VAmESGEg6otiyBEsqjJE23jpScakb73eYNhQMiWbTE1hjh8R2tmrDBHM",
  "key10": "g675pAiv1oEKKrLEU2gDPru7H6tT1XYsNmq7zM9o2qvk5mF2kjaRHvQHMMRYVsV44FvF652tEShzrvDdWqARSAD",
  "key11": "5jycEi6eqbvnCFMu3UkPGqsFHCiNy1fDmqs9HYfZBQAmtThx8TKoyoCN2UH7LcMG3uVoZw4xs1odTNRoA2AQXA1s",
  "key12": "3LDBs2DfbbfiRq1dqBZ1qop1CY221NQzp65VmsiyxywzFCra8AS6JqUUdBWo9fakbBye182EZZYCFMmDoQTmQJ6Q",
  "key13": "2QohLBSdfDLetrsRB31oUNWdPC8mVvyiYweSfGaQ4NcrLhpbjjqAr6LDRGpzksE557xLuBh38GsNS3aYjBYYoYSa",
  "key14": "2nB9rGwCGqUsTwuGtD1Nqy4LCPS9c2keqrrKnSnKqbqHRcGXhKWYBc7z25yfWV5dA4nrdp7BgSUTuLNMYj6pjurY",
  "key15": "2vjizf9o41YCc1NvsFJFho6qwLRyqkFfXz5bppwBwT3vFnPJabZwW1E58491nkTwJSSywUqWCAS3B7RKKokRSfG4",
  "key16": "2D8PdBW4qChyyYaB1SppZ9XxLmkBvrPeR93qBEhA1c44wtkkT5Jytnp5KsNcv5YC8zWetEQFZiCq815jAyYoNH9E",
  "key17": "5o2Kf1UiqyE9JMRkdTDur1pZPLwcHtZ8oLF9gtft9SvvomnF2CrS1oe2h9bnGz2WJDKUpXd5G6J8UiTXasCK9Ft9",
  "key18": "5DwJqRPZPYVFzaKfPGkGpgPskmRNMxk7VvG21Q797YmJVRqHVpd6o9xMu5E5z8rcAwkVdeAfZbbexJF9VA7EJaAY",
  "key19": "5rqq2KBt1kwRtTQ1QNWkUFnNagadUQYB5xkAeVXhMndHpDzamhxEufHHonYwMcv89BEgBt8tMn4npX21jLvjkS7h",
  "key20": "3WnyH9ws6Uc6UwwUFmh2bYUTftDNvk8r78asWqt8WYjUdn2FKuXPs25hEEqLzVT3ov2wFeJQnJo5bSWnJnP1F6fi",
  "key21": "5skU4Da2yG5DAS8LUCSSPrvTjyMkbhJuksCwVmYsiqnLHaVgMBzUi6gXmMgz4gCCVLxR67RTDCaiaymPyxk2dprw",
  "key22": "3Q1HWccJavKSgWvZDHfGgBfB6FnfrpuR5vzNx7x3UkVRrzCCbCekVRPkMRzQmCQvEAGDAb77q991Dm6D3qjirAtn",
  "key23": "5wEZ65iXDw4qmurtNqcPZRZmZjxsFPtLuoSWJk8bCk3J9r7Gq3toguM2FvjVVyzXQ9iviPoYJ6BqZcfPxEMpqBoA",
  "key24": "3na5SEo2nWd7LzHBtgzq4BbHk4Pv3YhWwr83at9unSnw9Tasme7Y49GTRPTchUB2vVeqDQ3gjiKmcRMzNcF5oAXD",
  "key25": "3yMexVQRWViXF7YBP7RCX5KiygMGRdn6pLYAsVcvpsyqmT8traJztwe3Z93hdD5TSQpoUwuChxccjtQC3gaGAzu8",
  "key26": "2Z3i1K3oiWt24vRQQeZ6xfGC1ovDSYqYUL8f9fyvyAh5Difc74Nhvopwk2JKMdjy29vyARBvqKSAbgXmdVipahjz",
  "key27": "5ow7m45TkSB6JYAB8bJLueo5rFkCCchRfo9byEgNKGLxmFWkSA3TDVbMVCVEhertmbuSvPkbc9M4DwoWtk188Z4B",
  "key28": "2LU29hAjLxErkQe1TRUw8mBhovnFX3mL2ZTkwSuWhheYPyoQG4uT7oKv5XFVMXZ5M2Hp2aRfhVzJrzZsZYG9SCqz",
  "key29": "5ghRsXyU8a7azDCGYqA3exLP6pQD2Q8KkLEwuHHg6Vkfvjk43mujrN4WSTRuiySoNJAtp11YGRuULXaF8A1134Zg",
  "key30": "4KK1TrijPgVuN2ChPqPgup4zk7YPw8qHxQpDxmdkEP944CHsce9J1RLgnNukbSk9Sv5Zh9jineESezt64YxvgyU1"
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
