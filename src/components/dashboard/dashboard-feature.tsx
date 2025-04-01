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
    "2AvGcowuuZ3mYT3nVgzh2HKsB58GbQJ2X9Kw3VntdXyNoEQ62fE2gop8AJrT61mZYiCvxJv2Hav6a4QDih4GbZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ko8ZeEHUrJYf55k35bxiEGJc5HtxeRmzWzoiiyi2mAozKqv2NBh2gXPUL91oc6nEyDimzZqNNfwrNaLQpwrMLdS",
  "key1": "63rAF9A6FBi9LLRVvbMoKa3A6XSw3xLNtn5V93Sbf8B9gxiszRHbVGZyrSL5XN6HNZw7H8CXsbvJEEsmU7wRHCgU",
  "key2": "45C8Z3FVSc3n6VNpMR6P7DdrVyDCxpCeeHkzcNhb1eXuJwd2z9BBKsa8iX9jw8s9pLceb5LmsrsXDNxDJvKABD2s",
  "key3": "5jPs1HTPnrGyQRexGYgqMsLRnTYszgHx5majTVnR4RKEm3KFS9URd1U3dCVi2WNPy5npcFoZEWGrW8F36ahBYf8X",
  "key4": "pwLvsAVRxoe62JBxKRmCsLDv52ZhFs7YWpkNHFJCM1LKwc6nxuh3XYN6Ln47hrUU9i2cTSU9K4YtLgSDSwEB7CG",
  "key5": "bQsX56uy7jZSH7Qy8X6W9TfxGurq3HojmWD628LqSaQ6PX7odchkDzpFz1uJkPAweNRYBHJDYE5XFtjFNbetcgJ",
  "key6": "dsfkcUSd5Qf7G4swtjFK5ewBDyyRHDYsCHqA46M8edaEY576bPF2a3nBK5hvZtLMY3g1fAt6sTxEwLmmVG3Dn69",
  "key7": "4yoxUyF5SbPzJiszGMn22SxAQBFujpnqjzrETQhho8wSzua2gFtZcgioKuypfV4mkKoLb6cHUgGzY5qXQNd4EkAb",
  "key8": "5WMzCm4JgfMMxfbhwHXqB7YDnTK4wqsNNnaPpVpybnnwU8McVK7n3Kv1T9cdaH8NSqwPMJ9vmC4j9nLd4ZSgQBeX",
  "key9": "5g6Mp1n4QMcf9JRLRt3W8PxKhm4rkJALkYpAqZUHFC7wwY4KVfsk5hUTJZGJQh2ZRgqwV7KzB5EWNWyMwfE5UDcd",
  "key10": "5euB2CnthyngjoSvGw6kBJn4amYGZTYRwLymdKoaJbx16fjLWJKPEotxva6aYct3BZVT59FYpdLWAdvBAenB9Dqb",
  "key11": "2GxE9w5WhU6Wjk2BEN2X1cWqYx11vFkXUiMajmTMn7Ki3Gahx7oFTUXsfoCEBctDZFvfr6uuvQiJLiEzwsfdzgQu",
  "key12": "5vRi6amAvSko9TRuNTaydLU1JBHmnYhRBDg5fxAK4YsoXb1vRdUsgfgE1zB4dx1mJncmaetQ8eDcwY3x4X1qBU8n",
  "key13": "37kMno4BZrFJa3dTTqFifdD2Csirhvsk4HU6eNfZdQjFUsXgmZy2FWMmDoCWVkEtNgcD9YFBEUqf8aNzEgEXmU56",
  "key14": "vyXj6NjZg9vSFNHtUYtE1uyzQykuqAagjkUUjKpd6nAsrTqPsSP1onbAzL7YamoSfYk2mkPddgENT341pAFDVe7",
  "key15": "sSHNa68RpDm3hjYLtEHuxs7umvsyDebecwuA2p2t4QVrbzG1FUyx5A4pzDMYamUQQqDCw4nTooS2YE6hDVVqbBu",
  "key16": "UgFPY2yFXvMY3F95TUDA1WjyfvZ88uJ1uvjU4hnxKGCAuS5pzdKH6XXzdsLmD3x7PfwyE99wZSPyXB9u9zo24Ac",
  "key17": "2K69PyH5Up5td4xvEEeDkfuQ2ZePcDwZSneQ9F4mvrDrLcNPeNCTXyK6KSXAtDpC18PtR7XXHgEK42GpKU74nSi9",
  "key18": "2rZQzBRYm6YSYDW6Y9WNoDUa3UsqtrWtR7WTRydisdvgo96YzCf1xJTwVUnecQHyUccrwnH8QE56N1cQ4VYf6tDX",
  "key19": "2S7PNYvNEhAQamTPY2UXskdJjpb2sYt4eAvvx4zvtuvNyvCYSZY6V5tT9HYFH5o2SJsPJMT3pBgyNKGigJtL2q6c",
  "key20": "4q5DLc6WHndFLoU8ee11kDN2c9QpY3Fhmtiu2UmEQaPbb2ck2gio7a9iAr3tRKp5kKJC3zFnaSheFh86sD8hdKUL",
  "key21": "2oRvxM1Fkd4nh7ZS17Bki1iqPVdj1Tj1KppkMbNmpfMXJ31bCRLAQ78ThbVJsrEy8NfrFc3SQpGxddKFrG3Qd7L8",
  "key22": "2D7gKdhoxTEedRA9LgrEV9xVVVktuqWLVborwAXT2HeDZ6ckeaoQ8nou4VDn2Em1yLHchxswdxe7Yg8WLjHpdpWN",
  "key23": "52g5CEFErvgC8AJ1qvBRRqdQqigi19Ak3PimJTzpzgCPHAhqAMUUmZ9FPKFz337fhMwg3wRaCjDef97KFTTKSfe2",
  "key24": "515XFehBHgrqVBNwvk9MxgbiLAx7f6mqh5MyJNCPPnaRzLUDnp8NTJ5PZ9SKB2HUMGjRQ4Apj5fcticFQ59YsVXq",
  "key25": "4Np7DVbUAHAz9uFxNPj32XEeZwiVH6ANbmoS595rvtZ55MEmNgWfi3iGNVrnopcfPKFqAAHWfXta4dWH7M7Wujeu",
  "key26": "57SmyyccPfz7N2LNswV6cFB7hDsLXFspBzTwX6ufKq2uBzM1iEpxodUK7hpNK8Jjp9RiviHZin8rNp1rGqwixs8y",
  "key27": "3Rxpi9PgGcCSpzm1HHoGQws4E7tgCoxvecdFotq9weNogxaw6HgZufeJ4heXVgzs5uqVwZtnVBJgCJA8oiBZXBzT",
  "key28": "57SZDfmAs2L1yGPPeLptbucKuYqGd9rf2kLhmwEPaYfbUTp2jWVHaduGDn9QYQ8edQmGQzVvbokeu6q1JnEVEamZ",
  "key29": "38tK6fYdb5Xhb1dA1bVzEGve3VQugHGbtxrSKo6ZTwy34FBGkYbgLmULyr3Yqdj5wUow5VCRS6uKwznyomsrPaec",
  "key30": "2dvhcZYapLrFPSTZZVTzKAfcEkFgAsaH4wQ4cVNkYpv8AAg5o9YVZkSNTFmFSTAqYecT1zR7ExX1wedw6nkdfJt"
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
