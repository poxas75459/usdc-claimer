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
    "2G5s44rUghuUuBmr68DK3iZGoS2C7nNazupJW8rGiXdsR1Kw3ws1LWs4SZnuEjN9pt4oQV91df6VdM2X23CkAjs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JPWT2JvvNsX6pQQ74Vw65mWyvEZeN5MPuckQE9K5LnEjT11BkaKmNtA3DbZxH3jE6UJRuWtq1Jg1b3fnsu94fNH",
  "key1": "23pbpGiSdVgKfdqcau6TtVtdUC19zG5P9aLpTqqJjZoGBvT86h1rbFy5GSVJUnUNfQh5Enbc1nLRdnizS2UusXWf",
  "key2": "59MWugfjMhb2FGRyKfyZrhpW1NGVQNnvdDQuBfjXscem7jtZm1n7EGoHZufYJGxcHxZRhHbeY355BQk7igByd5ug",
  "key3": "64oJp5FRufF9H7DAfM9MofRksiDU7RKbcrHjwjgZWnA6q6Sk84UZe4iXqZ4R1G3kJon8xmiVkcepNqt2PyU19qpG",
  "key4": "4UG29XJarFh6wDJitAGKqzwHvpwSrNrTfgKddTTmbbq8rdUhwqRNVC7c1roZtGWvMR8xMXQw4LeCkmRR8dL7hdhN",
  "key5": "3NQZoJPe6eqeGJ9KA5k8L2NxN6kLuBgaUDDkkUXbQSkhqPffNzm4YonyqvKY1SKPvBXz9NKsWUSpXdEKeWhjds1T",
  "key6": "3mW99nEH9Y7bfPgrxuXQK5MiLqtDUxoLHPA3YHwippzujNPvrCmb14eQjEW9XaorjjmpkTaEYbq4XT4EkLGi6a8W",
  "key7": "3raxLsMqUzv6Xx2WZG5rZ3CRmFoGFWiugkmecFBjr5idcjrBqaEDGcKHNgXdpV1TC5jiGEBELgsNWgAWJo8Bo4Ct",
  "key8": "44ZwaAMMfaFunpjNQKsrDykEYn1LsE3vbzFz4Am2rsCosrcze1nt3ThvjwQzaKiBLvRed3z6ct6uMDAcbpBmdFj1",
  "key9": "4XXU6XgVSKKypiAmcVArBT1MWXPxKs3Wf1hUjbJzUNBaFMdXcbEUoUhEetky3n6Zu5whdeCVvNVvMijDEHoQ4wmJ",
  "key10": "2TucxwFbrRcsEQUSMKXvZBLqeRfyfgHtWXAPAUYP2LG3qaeiWP7yhVJJ4QyUaU1PqwRg1sdj4yUJgQqWAvV5yTCN",
  "key11": "3kBu7SvVdVWC6XSKgdEuDCairS7YbtgW5dhjzQJkUFjk3Qf1gPaiduQir1foYzX3tChQ3e2TZX3qM1DHkjrABcvh",
  "key12": "4gB6LgSMp74obfeh54eaf5a6Gi3U2W8Tuqh1g2LjVQktcqzhk73ip3iU1XZEvUpvweaguaCkSmR9eCfGronvXrnZ",
  "key13": "33rSXJCxXqG5aY3hjNHK99jJnoKfcYDb7cigAUeqacD3UZgjyKkUyEJRVRSJeB3Fua4W2nthtJgAucVJz4gU7wik",
  "key14": "2mJkNftH3Wh5Z4h4VpwPJhK4t8HbaphfcytzX5jeePAK2bUvVVMM9LaKCEhfefxoRKb52YPEKL8R2XS53AvdWRxq",
  "key15": "2cqZJDUXBeSoqY57Xf6oyohfRmHKvpk4joMV5rGnEZLgSxoCH4LWwAs62AjkSWfbDr6xTDmTdp4Q1KHr9WjHUv3V",
  "key16": "35rx3Zjj5ZiQLw1QW72VWtkWAnHKD9iatoVPrxtg3QmEJ7jT3JuUrTsBnRMbWnuieRpNDjDy6jUgktzonwkYbz3y",
  "key17": "439eGfXYU6MhqfPjQoceaYmsUvdqLcNxfRVT638zNindMFfasEXWaKgfnXaWtoaLLWJeT6AMJ5Cvq9ssTMqtVenZ",
  "key18": "3CaMUxUnyVKsYCBuoJcfn3DeEvHCtgJ5o5v1eiVzYokuuiZZKqaDDbxUkXFMdtz8JQg4reTZsoQMvbEFW8kLzx97",
  "key19": "27UaW95iWQPDKMs5y5g26WeJWnX5acD5Vpa6QycBkzhpATPbrWF8NhBkVfucQzYVxK8pasiSnkd2nZfPwKo4yiJJ",
  "key20": "65Kr5sUKnM83kXbHJeswo1n4F9HCfsxgf8CcdiyDuBjENReNQd42CB2K5XWxpbQAxYa16mpcEmknyTGTePEifzbX",
  "key21": "2KwCHAis7AzKmknNJXdGCsZRe7ftVepJq2toTSgVE2quZXarXoQdaBP7mUVTxdyGLpTgxZgW1tP2PYDLSm2wDUH",
  "key22": "2QY2oYzLx8UvnmKqkoC1VWPWmjDY6NnW173oRB7cm2E8WCc6tomb4hPe398RmEUf7iiq9qou343v8XPPnQbzBokZ",
  "key23": "21K4ujJ3RhMonzf6CgS6noUqm56UkpwTMN9dkQEM5ug6mAQyrQrJZAPWwQop8qyz4oU1t5e5TQKNcfQufKGacYVm",
  "key24": "5HtSFn98ekrugp4YQ1ZybUN2RmopWQ81CbL6xDkXweQRMvNY7CoA7pLvF3fdEAhvE5GZZKuBz4bZ5xqgWEKH7tLf",
  "key25": "5HVgnb5Lpy72ZnQF7fGiXHqYrWFrHc1tzbep7j8x8tQD3cmhn2MjzJ8AdMLJgcHMSFHCZpdGf8XNfeakDr8JpER8",
  "key26": "2YiCjHHueN3jvPfvEVwxeCfXacHX3eF9J3JmYptoV5vdtug7fWhLPRxt22VCQjtmp9jgK8EYLAC6PwiidpE6SPsq",
  "key27": "aay81Xex5PA4sbPtAvPZMLcMNhKTYtKWWFG3aiHGBH8vxJM8RJcTPEuLXbKHtUXiDXxrAFV9f7BpWi8JL23SA1x",
  "key28": "47NRivEiZqdDmpu3D2Jeb9UH6VxiM3hLqo9GRt3pHaffwvpwfs2VNFHz4umEBwFpnUWti1aqgQJHDTZz3rUN92rk",
  "key29": "3CGjJUu6rkfntEkH6LBnZzNLeb3vqpjGPdivVP61AFHLPE3j2rPDNw7BcgQnUpUGbeQiGiSybMQAwTH2jvffswS5",
  "key30": "4sthgks2gvAJgJmVezsWNMhomnK3Bbs7Rq2AXrCS6FAiw7Nfbf5cWbPjrR973dr6VVwf8MEDsuxcD29P1Y6HdMdN",
  "key31": "Hp8mGyUAo4KURZMthJjDXu4z9jzjH6oxKGvXdWJfuHqbFFHKfmbDqp3jFoYjzWTvgV9XoPrK5wqkJoeXgVMJVh2",
  "key32": "5uZDyyoecHfYJfdBbTR4c24H7FiDbZTLyxsz5G2tiPeSSx63otUVPSp2b6v6YBuoqAyRpnZA8MGfEm84i2dxXmKk",
  "key33": "36rVcKa7WT4n55b9ZzNJBkZznNfRkWyVrrKZ6wyAdxoiaaRwYvnEos9bnwKbWbVcDpNvvTbrWsM8yPM4PoinnpWP",
  "key34": "64mvfx2FXiatQZBH5a2Wrcw56TZWouA7oYBoi7YiDLFLPdVkkn3gzuUotwBRZnN35t6XGJ1714ZzFbRpDLnv5kbi",
  "key35": "34gVZQ9UBryp55fE1U4xA5WQVC8zLh1ZRgpPYqAJKSDawB2KjUonHEhTa7Q8AKkB7mwry9Ua2umCkkdwumL9sYDd",
  "key36": "3BnWoioGiqrWLapu54dXpk3CNrKxSvGvkfz9USHwBfSNP3ASRooHpNJYvQA95Le9UBCoN5yDF8XKupLVkZPbLQdu",
  "key37": "RMgY6e1x14MdFX9uMwCaZyCKpdS4biSv2uY3kxfBm9iXuh4ZZL5dFMrCozYgivrpFjiY2vFJNCLS5qc4e9NVr9V",
  "key38": "41QdRusGyEa7UpfsrFW8TgBeC4BTE4TBUnkTo5h7q85S2G33M6W1YgXkWhKRoU1xRPF6GyZAW1HKoj6JwrfPkfaJ",
  "key39": "4m9cVNtRtPUnnGW6Uf4cRPn8Ka7BP3sgC8ptVUi77AV43YHVNpG3kqJvavwioQxDQwtcz4fVbkc3Daaapfwb6rBz"
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
