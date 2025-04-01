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
    "u7yhqMrHD4C6iz9qQi3YRgyC4pDF6fQJYbH1EB3L2kCteu23PaFHiyMVgbNf8VkuMrddxahUs4ZK9DGTbrrHebg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMhaFHeqoCHVFRZ8abfdx6tmMZcp7tpwazPaoJ1Cyckh3tpA7XitqcPUZ1cFZcqg1hruDdUA7Gikf3WNnLhJHGa",
  "key1": "3MxdVpzhSdsewFRok2ABsqoPB858sk3q6k4D1sV4crH61FSRbTudoowVvuPGHnT4bYAEomnaCN2Af5DFaTZDNkBq",
  "key2": "22KmPZeX5crhVZ9DEQzh7ojm8Frbms6V8sGuCNMxfHnjDNnC9CY4NMF1BCg38AfXFxXZ8t4LN2zoavMbFyEfkwLr",
  "key3": "5agpizzJwfTBWCzEMGf6rzFXkGfZYcR5vvZBNk2arHNJADQWTpXtCviz5re7yctRuWZmebxABwVTSuwcHYDRjDxX",
  "key4": "2N9HimUTaEpy2r3ycssMw5sevYHG6EAGt2sCNSLpbFdMZHoNCK4tj8WZmJgtZnw2spMJfvWyR7fapEx8May6Vkkt",
  "key5": "5Q4etJE9MnpuafKN6vvviMqi9fQ1DBATRY8kGXX93EE2UQ8Lb3FSMvzotjDVdvdU35HJUoqVkxVx6kgFPRQX4Tqp",
  "key6": "RUaMafn9ovjBv5p36BNgTouPGdPk2UukWqxAHY826DU5Cy7xeCKyGi8bdgKEDhL49suqMec3AaNF8DcxNGoXnuL",
  "key7": "VSj1cNwacCecsH41yXUCaXV6QRWWYqYQDTcUYdexZoZGkLVUwRrb7957AC9FkBKdPcojwCHFymJddkNcPsyAipP",
  "key8": "2DnK6Rkr9crmpJB9m8UEqQjLdktws2vSooBfjJatB948Z4shF3Lfjjcyqz3gwNqqNmejhD4ATYkpWrjLyNuj15vb",
  "key9": "2VTw6ZUiM92Z2MPraSjsPWg5Tgev5ygVj5rDExZMGfzUnKPLcvtoJhaZ9E2pdYjWGK2WP262T7j8CRNZBB9HuqpA",
  "key10": "oMz2hwivNF4RBMdw1E2h6j6ykwXtPH9Pe2KQvEaDkdkrjhyjfAu3dKGTJMUsnvURe48V5ZNijxoXK3ecLPG3it4",
  "key11": "nSU5FnhDbCKxWjvEhbTMjjpZhxMqz7LfUXYruFDsMLgrnJMDVKybb1GccPcQ9fDkUV1FZLuaGhvRCgQJunnzraZ",
  "key12": "5h2fQALpYAR9C5WQqRg2dRwMGZuEKuLG6HLaiVPWHF3zrMagQTCU8y4rS3MVQMsXmzRaNriC6eTq5J34utHXW2Md",
  "key13": "3832rQEDUDZ5Mgb9yshDLQvJMfv9eHdSZTJXJLHJKCbfgRg67vcQMev1Z2gbKCAaurWrXXW1PrrSLHvvTsFRUA9f",
  "key14": "5CXTKKGq8SFfrCifFY3ktRvaMynBjXtfboq3VoRHQDAgHccuxZCEnFgUALAwJUNBGtxuERFUsQPmYLBwRH8ZJjs7",
  "key15": "JvDSpUcMb7osGrvppShS4A8UUkDUA7hGuGZ3QcSs5niy7AA1spZxqsPxDjXfvwBAiqiM7eFu65oZEGNfhk4wYJN",
  "key16": "3Fannp7egHTqJgeku7dH2tfeGx7bSgVcegTrAskVNPwuQfDpNxwJ8pRTFwYsVWCK8fRrUtDB4KVJ6Kd4C1yTwBuZ",
  "key17": "2ijQnGQ5R8GwdoJrxbro6apSf2EajEUQ8P6noP7gv1xEXwHPbSGWFK9stKq4HCvwgifoR7fmHU1fRazXQHXiTZK4",
  "key18": "3X3wPDTPRzm3UxnoV3Jmc5gyWLEnKJaZDv2h1xR1hm9buiehCH5jPpMaeYDPpqqumHzgmbV6idAXGfha17MD6hvm",
  "key19": "4ohNV6NAtgdM8QxnHBEwmW9QoZh5ksz5AUdSPLim8UZZ647WJVhHvjRdwKBDGGwUmthjgiqM93GrMDFGRn2vLM6s",
  "key20": "45smejkQu5BGtwGvPtCKegHvcCCoyeptCiEYM4KxxM5BuFNKhfHsWV6TqW4hvYRWx7PcTJYff1ae8Wwg2TFhZCQ2",
  "key21": "2FbGU27ddneU487W5SuHh4PNCBb6tAWi8MCt6QPM1D94AsskLH53SMBNbP5oisfUg4no8sQFKceN52MC9ZzxYNvH",
  "key22": "2J6DgEudXJP2fhuSAWUcaem37osRbmMSPjFyB6k2R3qNyNHZS3MYd2ZdoNayeZLYTkorb4FMt5YWNTYvkz6Vypb3",
  "key23": "4xgbAkoMdt83QfaWPLf11vusdCifVgQXjqhtABcvJLDKX56UPNXiiTfgmsh9D75JaWzyHSSjV4jt3hHBBXijGMBt",
  "key24": "4tXyFYni5hWe6XeMA5iXcsEZiaS1G6ixquT7xyCMM4XygFpa8Tqm9Fa7bSf9grupZEwzbKgTDpvPCYhE7AXvsGdb",
  "key25": "4gYeDFcfAa69D9uLtcgvmWV6KFqAG4AdQFuiJUgW9rEmyRnQASSiyap2XPzzKoUsA2goB7vYyBwJbNL1reL9foGA",
  "key26": "5VTv2R1J73chNXLkG7xPSbhMDhJdDYa7BNobbpjnzN2phBFcYYTFGHcS7h7zZfhK2iqDVreWzRXNpPjaKzY5imQ6",
  "key27": "fdCwdHXevUjQLThFGYvmQTygXTCJbpd7P4UYcLSvuq2gMipeyZ6QmukFjBMjQRZTmyCmMkq6PPXwXvBg7RGb6rx",
  "key28": "4R6hxLygU3AwNXPEYe8FkxjTXMozjgGRCsFwZ2qLj6JyRSCo5n3pr9aSFJPtwFggNdrCvdTxSwoUyZpb8Y7JCoVP",
  "key29": "2KdZUkZjJA2bquRrqcfcQCwX5VCg3mz6RhF4noY4Xmn4x6m6coarVWv9JbnEqaHGgnxfAkeuW9X1MWfqecjorSZd",
  "key30": "4L2wivtHJse4DReyYk2JzVV7FnMNRMnTYDF5wNZKUGaCr4AE3ZPPJNp8L98hsAeWkKBm7vLeGTr3RoFD9ENtKk1J",
  "key31": "4Z6JRyH9Fq8Sr6cYmUijGzLHNJvjrp9gysU4LADJKBTyJ4zTuzph1sA1rHthfQ8yYBrV7k4ECp76zc1kEVT6maay",
  "key32": "x1sNbEcBxwb3GjWth6MjkoMd4QH6eWSaznm2d7LSrDt96UMXf1HU2BtKhKgba4RtmxKoEtb64xwA4UN5uAFXx1h",
  "key33": "26zt3hN6AyNMXpvbui1rDyjRhHjnp8RmrU99uCUh8hWmk2w6MwFkc3nLYzs5VEhsZZQdrHqJRxHn7JkqdqpWdq71",
  "key34": "4pFS7XokKzKRGTJm7vhPnyp5DxoV8ETb8j9MJX5gAsEQzk5nWnFYABMBzCqMKfQynre6io9DAjVy3ofi31FMSs4Z",
  "key35": "5g9Rk8njSFqcrq78Fbs7hME5dWmgPBtKWVgZma6Ajqiu7sitiFX3J6zM9pxC9gNHQkGgCGv9LDHLkkBAG9Wt7Kmu",
  "key36": "3JurKhi3xHS9vVCnr4F1f4xqRUgFrNgNmFH3jLvQ5S9d4hyMD8N67g7XevFhkivC87TSHWmfWkY85yM9UyfshUtf"
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
