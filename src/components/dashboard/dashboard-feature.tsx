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
    "yud6DakZ3K7MTXfu6JcPNVaWBcZJ71UqTZexJoKp6GYTouY7c2cRouWGLR9FRfxnc1T57P3qHdEwk7MA95tKEaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuqjcRGffvH6mDqAaGkjaXCvmx5uYkvCMQxyKNjFqvqhscG7gixTf46k4YZxF4Xof13EbLAkjmTGWpKpwRJrbgH",
  "key1": "255Af5TuVmiq9cRTF2gBQMXTXu8nR7c9rH1xmUagog1X1MhX61fBk3QTaSMF53hq42yPwuD8U6dhTM2AEVWcsHUv",
  "key2": "27MroVE31PVLt7LW2EjrTUTnCF5g3p4zqqdczGQc7J93TsWuCoKJLnJKNS2Sht7YfFCHNLs2n3ynWhPVsFqZft5r",
  "key3": "66mHy5Leewpwf4tA4ZhGMZ3UFCwFjDTYnmnSmevyCvPegji1pAdsHxR6AtLsvisVv33CjJPogaEHXMnNVGqaoHuC",
  "key4": "2Zk1yvfkNouN5YE9hXZqXn8BJELbLm7mQ7bnQqasKVUxgsHrh7oPhABtWXPyKgEnigDV1H26ZQb3PhkgRKHiAkYi",
  "key5": "qrtY69HHMnfFpTKYds2wZ1QM793NyhwwcVFax9tUwtMwaufB7mRHAgh8ReKpuvfkjFbrtZ7MN4r6HfcCvJ6iAMv",
  "key6": "2GQrk5vLfhU4y63GG1MDihnWhH8xrqzNofvBmHkqznXoReyepmPVSYoQt37WD5CKNojQcWZZARCSXaWU7N6zekBA",
  "key7": "36Zbr5JkrRNjQrr4BftUzZeTXgGDPuM53GfhRLP9HML7eYi8ZVSLwANZyPS9sj5euNrP9BHj7W53nnK6NMrwr5Xp",
  "key8": "2agEk5octpZDhZuzCKXdnGqSBGGWHBeVGQy8cPVmg2So6MjeeKiqdSVFC8iuzb1vp8pJ4xgsSFLVtjryXnaLec5i",
  "key9": "GMho4gL6JLDtcQ9KhzjnkKEtXuLsRuLQ27fh6Vjtcp7VHqeizVf1hECuXtzyimj8xerpwGkUBMtnUTsSbpVZgNp",
  "key10": "5wVvvLB6m4vdRtNRzRvouVNC3T4PDiRfEhmh6Zb6idB4krdHfwD7wL9TLTtvqv4s1RJHSTYzWFKZDqxzgT278XCs",
  "key11": "2cgbDcPTBtnF5vE1SHt9DQU5nM2PYWaDMmA41sCN3vMmdfzcY5m82QA3q6z6bSTtNtpbZaQFkL6viKjcr2tMVu8R",
  "key12": "t5wybd162kAFfafBFwwx7NQ9ge7p6TBZ4GAgors7yMHFVBB5PH5m4fPkRixMxhAAA1qLnfSyomvdKr4vSpXvAnb",
  "key13": "5FgN1t7gAQXaKhr2kfnQM8edyqz6viLB8UmiJq4YNAfLsWuvPrDtib6g9D6SBtFuE8CdDJTh4B8kjcNNBJ9EjEzV",
  "key14": "65TEbytD6TSbERzwh6X7BuQxq9ueSRSi4Tsreax5KSm8tZWKSwwNZFWDnFpoPVaVW9BCamn66QtsYzqrfevpRoL9",
  "key15": "4rGfd2VansSbLF8sV3idKraXrRYngcj7L5m1HDTadWzFbYuwZNe7LwyFegZKU9x2Gu6x5NEEzwpAmdsMNT7pYtkD",
  "key16": "5iHRCf6JWKvMJCoyGZhc4Ah1waYyjzkiUkC7ig3CJXjyX3rrsmTUCre7YkNsxC8JcLJPdQU4fyiK3G9g7rCPt42f",
  "key17": "3GrCaxYgviAGwMHHKz9HFSFJ4tfdaZZMyPSZ6QnSvLMHiG4MsWCutEA5bdd3eDBXqvhHRoqvz9YmRKVAdgXBE1RF",
  "key18": "uYhqJVCztyTNwEnUMoK2PghfRtbsJLvFMev8K6WC1NtDupCrnjaCgyuu3Kag8gNfHR5X3kZtrKGCA1UXSv3hQGh",
  "key19": "3vAsZkux6zkwLbzfT2QJ8XkmSAHHxL1T4iNdDGEEESQ7Ed1i2Vn9KNSFm1JLnjaQWkcqeaSiWhazQJeaizHuC2U9",
  "key20": "2Qzn9BWSQwgzbJ3o9r6SYYgtMaFpgLFPpQyGrE8TEC6Z3fWDs3gzt56zSVnZNKvixigoB7dCBjbMoPxaswXT1Y2V",
  "key21": "5UnkKdAjWXSCH35o3FVSorDxcqnHvrW48EAyMbKJFcE4xbyBQugifNaoBHeKvrB9Z8SMqZXiHpfHfJ6sq4TXTpjC",
  "key22": "2diWWKbk48PvYy83NbLjL1qvyBg4hpqzQFPivUDyoJzDvgdxEpQLVASgPA44giqck52mA8FAVwCiF5bZ1oP3jwZ5",
  "key23": "41rZSfejsPfnhjNQRCBLWGmeuGiNEg5ZmzC8FgTsiCmzvJUQBMwgQwHgh55g7xv2VEVhGwcPjzEUh2dSsD3xX2o9",
  "key24": "4ktCAPek6joVk5Vi8a9UHTkDq2Un6hpeymUmo1CJQff9fk9sDPttiykRQgmSb1NaskBdTNhM8vqMx7r3KjYRdR8y",
  "key25": "5hk6kPh1rynWPR6BGnzJvJ6gN1pvLbDHwBnqERob8CaFMP4sT6o79rVEM6bMdqtnMhdJNtCQTiLXgrmCiDREkQzL",
  "key26": "3zZeukYGBJCemvtghqc6tEhXgY5dY5XGPHgy8vauoqMqwxbuoX22CgQY4YS4pCFP1wwmzYhyzyf2MAbfnNKztJFy"
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
