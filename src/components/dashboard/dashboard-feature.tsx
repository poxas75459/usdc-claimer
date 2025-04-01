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
    "GVRjdNLTD7TacRLQ7Hj1u3F8m25CTKYKNjFNUNkYuxk4uk35EE6nDeyZM3yE4y59jhCcm3Sd3QMLePSRxyqibn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WwoRURQ8PGFTH945FXuDgdSKX4VmFCThi8j5tFsKRau9ciqiaP38nM554ZiDWBwS2dNY1CpPjcxEnpPsY2U5QEu",
  "key1": "3JSRMwgmi8rr5PTHmgF1wSDuapfsCgHNvhqV1ArC5oTAsuHpuXpRDiadBLTFHLrhsebEqB696iqb7gWrP7Si6ZvV",
  "key2": "4CXX3EPGxjfD6Ah6anjCQG1k67PN35JXPzuSPxBDefCWdfBLsxvviCfev2ssd2ztNrZ3wCv6KHimKp4hpNK6sZMr",
  "key3": "4qtS6aNDgvExmpEdUH7S46ntqEDoGej3PaytQYSN7Nntd5hzEdf9HytsacgZWQbeKbWnBDvscjrj3F5ywpo7NpM7",
  "key4": "3UvpY2yYYPnXWBDtTfJbZ9Uo8RQnXSacA1e9hTfRDxKHLVr7mk4iKTnfGTTV14i1uX4Rg6x9BrUeJRJjiHx3VnzK",
  "key5": "4599HRZbiyPqE7Se1i6PyrUQv8X9DVAFMNtc6Gf5jwsrb4CwseqGkKSN1AzWgyGngAR5X9DpZZn4mN6YUWYcZmAn",
  "key6": "YLH35J5JWEuHyr4643VAQQh8enKDYwnb11SSFvtYF5bGaiYYix5Dz1HCPCN9phHvBgomuK46MCih82nUH9zRe5h",
  "key7": "4XuUeXqWaCcazSBGdc7oLUddW1c6KZCsaLqv6M7pm3xt3qCkeuwk2TQnNDq5xp5PY9TGPi9js3dGwqZNz2KtNh6s",
  "key8": "5Jy1vnhLLaExVj5BWR43NGmLJobBXQnZ1QXJ9PKh6DTcs74WEukqCX2XRLVWzfYVujx4nzvc7fLCVPFHTvFPvHH2",
  "key9": "5syQRNfgfTfXMPCZNjWCWUSEdY6Qy4a7h6C69sWHXgYBXEVcdRRQHYiD2skkF6gFH1NXBUZPW7GARoy76pfoJ7Co",
  "key10": "4sqm6QyfHnLgmtE9aGW4XqXrjnLqkRCqovyywVgoxgXmsBzGxkwzrsGDzDWSj9TBWSqfX4MBbT7bHjfYH3pCjNXK",
  "key11": "5LZMujk1JxLZjZ8UBE9CskwxSTf2hWGsFZPMbtYTF4Rt1EtKvgczbr2t65CNvxn28YuVcwD7eUZT5pwvBLxjNNTP",
  "key12": "EnST7NAD841JUQjE1Cotd8oDZ4kYR9j1sbFkDDrerPR64zCB97Y5XBXBsT511JDmmzsKJmYyEojkwtarSXix4dL",
  "key13": "2ZgV4kT3LzCmTNzfKNWdNBYTjFZAK9kebdy1cRQvTWgtSGQ66tsqJEuFQajDkQ1KLeUngjDivUX8etaCxMCYSCaQ",
  "key14": "3p7mirikNZwtyu2idRmabs1wY3WNYt6w1qzfa8KMSrK4eRiVjsRnp1sQgeE7gWmBxYzxj7erUtPraZHjMGxrzUJ",
  "key15": "5hJrKQUdEF57qdnPFmont58LatbYFjfL9ic452LQaiZHeGviv8NSooMNZbjyaJZwNtKK8EyjmvyAHsEUv6BtcRhS",
  "key16": "5qyAwoNaZ48hYvcpdbT8tDu6vhoG1CW9jG5sKdPTs2ZCYAeiBK5N9sA3oTFWz3V5AxyZox2nLUfKk6bmgMFbVwci",
  "key17": "2dEygPoCDdSmnNMUphnuxF7aJFYSUS9ZaWS62aPCfuW8toiLDAR5gMU4iCwr1gHwBNaLVphtDEvKSLt57T9F6cFC",
  "key18": "2TJVATvcruP7dvBWJR9tM8LCCrazR8MFJgKnAxhzNJjW5UwkxcpTGU3HsUgye7qp4mpqSLUQbJYSJm6VoLDDhVgZ",
  "key19": "2LzwhSuEFgEGcnpr2Hx7XmWa4BPeneqmwvGx3wR8orMpoC5qVEMoNnMazjkDW4J8e3zz5MKK4HQ1m6na39NNGz2X",
  "key20": "e1roouyUE7AdNAF4HjWPd1cWGKrGGeLXEekXYKDVrYPRhwVrpXwvZYAAqyPWzj7T2eNok38qzoYyHwF1oQUdBu6",
  "key21": "62yghxfbp1z9Zv94YxawNBcrDqGrrSE8pb9cSj8wkpMiQJumrDXFUCHo2q8fuPkLUEj6jeyoWZUjBosjnhXwELPC",
  "key22": "3T7gDRnvi89s8ZDUMhW9R52bP8zH71yg1r5fmtW2qYAncRhKDwD7LS7dGdPb2s8rTL7GGNMnqEXnwY61PzNA9zm5",
  "key23": "38zjNRt8fWG4DLPChCKvVZdNFVikofJzcTsnVLFQjPEQ9Z7dyCPTVBQatcTxDfuEPvm6K25d1DBH9uczuW4ekjgB",
  "key24": "UWXUctsoSFr22k6rFVASc9Qw9Ft8whDwu29hW3gpAzF4cdF1cJDWxwzFx4kVt3xUEAAKDimLTAREbeBZN17qnwH",
  "key25": "5ELKy9q9H4CusReyZYWzs1WsDwhVFRpun6Fzz1Y5w9JBrBRsxFXRmwAnvZCt9Lq8F2iVoFNBq8JbEEV8qZwRSF9e",
  "key26": "fthwTikLxscY4AfsAeQFtzzkVJ7ifBSWm53R7FwQMSGRzzt8ZVrZ3XJRpRUnDS2wqkHuHXaheDt4VDdETEVqDHU",
  "key27": "4SpRhDu3bALVRCgAHA5D9KYAzDX4GP3749M3EfGGBe34YPzEtc74qF8ZJb6w6tY6aAPLFA5mGuN2dAGuZauxcD8T",
  "key28": "4oDZf1CSXr6yc5LQoVakAk3bbezdN7XXhBLSvwfvMYR4qzdY1oRBb2pG86zxBBXuwConJyMxmwwwPHFFTf3QitDP",
  "key29": "4MjoXJeLnDcwq7VArB7fBAW8F6F2NmjEDxpT7ncPvrftVcwFZnTeVQsqRtLRZPsSqQSPydE9NM3b9hACUeTP2cSX",
  "key30": "1BtoH7jThvBt51fSL7kRWG6x3dm8k4JFU4xHsDyPtoXwoUHpAjEuYJYwcLfnjcfTrZqRSbT5mc77CKdPXuqsX8V",
  "key31": "S4DqQWDc9amsZ6SzcB8EBRFwvpV8LHHatoBeeTmzL2dcvN6j6HbxWtfF2oKoxmXkRA12NHdD2nmED9LHDqRCr93",
  "key32": "2Qn8pCyTiB7R9FCCxo4kFfdQJzPBo1bFcZbsrpzHGQC7APqt9MQqhnzVoEYD63JgpsND8HZzsMGH8Wi6uuuT72Ue",
  "key33": "5oXm21m9FGibpTUQMRn1AeAqpub5Cy6UHuiYpudDGZTBmJMStznN9NnMERCepxTbyyDrgYaJQXc8t1tAa4fj4BtH"
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
