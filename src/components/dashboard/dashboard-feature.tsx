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
    "4Kp9PZH99DRT2AhHrULockxuaM6R4gBcShJrfCEukmayD1gAoUh7wPCYb8cXyVhAvVabPViEDfeo8bB9airupv3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55TWxnboBSQxk9nzSShnqNx92cqZEZKdpq9b6cEstvCVyHEppbSU42LyszFf5EgsypaS9yHrgytz822Mvaqs4WKa",
  "key1": "2xFyToQzfpicWYuWadBczYLped1Vbp7ALm9FTzm73hoWcMa6WQFb7PhrPGZuTtq3QSbLCx6WLT1bRem8Wp2prPiw",
  "key2": "2aVRyqfX3X5QvZy5Fzk5MDXZh6pMC5UHNAEBf5H3oPnkasSJGkfFBgLHer77c5FAKQgvbjkTWn3AiXYJZFRN9JMi",
  "key3": "2ctF44zhZ9KDLcSR8cRDUisuvLsxRR7BWhDe5EvfMoizwwreYLkndu5CX7HNbDJw4daSoxdRxye8Ns8WckzdjHD8",
  "key4": "3iBb3R37M6Rg9WdvDa2j7eLuLZ6LEJyVJMamzVZVJHLJmw2H7VrhqeF77ky5v1cuNbV1aHS2JmGNKha11fSn7aUE",
  "key5": "5HYye4ypdVx2Z7xFqDiYaE4tJYWBkWqDj8nskGYPQ1qPgW6XWLq6irABMcHxa6rZs5D9L3bA71rzmtMkUdDZa3a3",
  "key6": "3dc7P71ZpLMfh98AZafhrGZ7wBHvPmpHc4Uq7peMRU8zoLXLyj9JabrQdw9k3LTtupYiuRK2KS7KuiVPrZQ7Maox",
  "key7": "5BoqCNzAZRiLtnZ5fW49QTmN3P76MMT2eAJuhtXSd9JrrfnBbjE3eFUVDThLW5oFhPVep6UXePjscEYtsBaqdyo",
  "key8": "3kXu6xRPKBZUKgfyGH7v23CYuS98cgLa4AohrBTjxYSu1UwxBxyg8ECngKhACnCLde1HbpizGZoXSg7GYAxerrUy",
  "key9": "4Q3UtGrTpomnA9hAbhEUKNFZHbZcGiC1SJETWmecqsoJBjngsrZWKRfQy6wWKtyFTmg84ANkeg6mDJvpA5iD791h",
  "key10": "2Rn2nP2BjHgDM7MsVMPr1DTkyGvi12NByoKapBJVjRdeg3T7pnbpLmaTjTZPizzR5oD96m15UX3KbQJT5VqDmL1q",
  "key11": "4shYV9zmP6A6DxvwH755rsSaae5NK8wg3wAtx1TArV75jzk3Te1ZgKvbQguPdSyetDtyJBh6jcyFiGa2i8y1DrA8",
  "key12": "5Wg9dRRhzytGFcHwp86B32xHay2qB9TRrV5HbNQcBJwLzyaAmRq5zLUTGoUT4WhcGM5Nbr7EiazzLu6oku869nrr",
  "key13": "4Yo5sKk8NUoHM8hKy3KoVuLUsEVqHqrxyv3zfFfVSqCMVo5n1UNSofEzXxbc45erX2zSPEj5cY15XVDnN1HhpXYR",
  "key14": "3581V95Gt4vocnnAScPnHTWLwP1jLmWyxjurUtHTs2pyaiXqQXACJ8iSt2JXyg3gJAdRqDP9UbY46bXrKz9rsneV",
  "key15": "2qMgz2wsSw7nN1zXJjkrt8nkvmaxhcBrE6pNXjD4FJQJXLG1J3c1LUZE9hVQCwC3DrFK2T9ek5NcUHJWJKSpVrU3",
  "key16": "3FuJ7dQyyRTYXdKUP1WUYgaEHNREpqudR5LKJxXXmrvn76hZK2K3wozF5kLjHyL66NABc87qDtCntKWjHmv8vDLA",
  "key17": "2TasVRkVca5zZ667RfKkMXjkdkjuihSNrJi1daKkCs7397v7ZAqWSrhno8XT37cAnfL78wfFfLaeuBSuav6SRtDn",
  "key18": "5xkPz8tdCF5Rnk9tirmNB88pE81y29qhvMczUPmYgLUpVuEXKzN4h4swsXXYYsXkeMnV1xNRXTmpN1PatQNANwUS",
  "key19": "4vf7iJ7trXJkPZfhETRjL4YPz8q9j6VRRDSz5LSCY2xLUPamMbWX2wWsvMHPWnvNt59d6WaLmi72yhAoJvQiW7Db",
  "key20": "47MSKEtYpijbokqQSt7jqUij1nMkqtDNTMsBzxXfWZ1WBHRcoo6WLf5BeN6yuUhwMiE6gkv7m5e7e9RRMze7vg8T",
  "key21": "3fEMmU7xeQ7EzhJzSaRu59gp7HDb8Kwp7avoGC6fjP1aUZLc4XZk1SbmsJA76h6RhZi8LHgM2BVqo63pdMeKLy4Z",
  "key22": "4P8yzUpEGaSQYPW1e4iPmwjRn8kraaAnXDUapK8gisxt8YixFYkchZBSD33wKRn8ZppYS6DHKv9b6xXoYre7yEe3",
  "key23": "5A6d3m1U3t3x9ni7jQAjj6hFgVYze5YwGNgkGt2BqkdTsY4ApjssWwZ7Y5SHQ7ZRE1NBPs7sDCE6mutG4iXXdKwJ",
  "key24": "5ahxviDEJHRa1C8WMP9MV5Kx75EWbsYuiUmVDYqCWuesfER4GvorkkyucrhP6U6wSV3EvU5QomAXgdNBaU8PL8iT",
  "key25": "4jqWmAg18jHhSkM6zecpEGyaberFrTmUX6ftR2EvXT1WkXL9m63E7DxzYQsj23JX1uchmbpca6LHaVDcw29SxCV5",
  "key26": "5fpj39S6ie5ZQimTngWvWbwvZ7dsXfHH43hHbV7XjQUdikFL2RSuVCnQ9qZRLPcuFRBh46n4Ci1nJDc4b72TX7hR",
  "key27": "2bNUfoZFznkAkVyMUEW2wRy3G3TAvjqi1tYU1p7m9wods433Gc4knCpaBVMQxzNeMRakNdZF6LZTGKaq3iEwjsHi",
  "key28": "5Pb67pF5tf6sfX1xXnxFgoV3Q3Qb5gYpnZPcpkFQ8L9X3LaWe3WRTPgEXFNqqn9AQd8DphYaWNVdrReGaTB8eKKf",
  "key29": "yd46hX4rUkpUXeRdPbaZYEkzBNRNoSsk8KF1egZ6hegh3sGskrjY3BZSKypeYA4VD8FmZSqkBbceX45HB55SQM8",
  "key30": "SZcVdrCaLfVHkA3ovwARSDqvoC2PcjVJymPryKJpdDhgrJSK1bFtRUtJaAsR9UZAjcZv7G6fYCCainyY5jCFZRz",
  "key31": "53C9Tn3q7vb21iR5tJ52zCDFoYPq7Be68SiRV7bszEeHkJAYEQyesMUxEPKJ6sy9C8xcivXEPNVZ1VnjFF4NcVBK",
  "key32": "GrsJ3yynK4H2ouhsz8GJ9B7wjGuZx6zs5qZ37heDdNwn6eGy1hi33WQAtoCX4paQqoQYvSA4vKCjtPo1E7wHksm",
  "key33": "E6pcep3tKwRqDrQmLB4wMJ56bFYBK2WQUszjHQ8giTjr7uN5nL1dZuLe6FcBv7brL9WpawggjBhzJ9RHQTdCLyD",
  "key34": "4JHNyLAJ3Cchsdmj9XUnSXcgG585CWYqWWWKzUtteysKvFMmAWCtD5BbR9Sk4zvQGPBr5pZRibrvga3sqKe4aVZe",
  "key35": "2e6iRpXwQVqk3CcSmn3NbusC9N9Ah4KiN9Gk72gVgkWxtgpp6ow4GbawdiZHJmLTnS2KeyrzdNqrp4ST3GcJt6YG",
  "key36": "4LDfvtQHhTTLAM9QjnKpHMtMMcMtm8bp3hAanxAmT9i2nMkE7qJnB8ArQHYqYXR2juFqoHvuyCvuiqYffaEShfvr"
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
