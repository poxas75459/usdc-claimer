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
    "3Hn9eafM148HYbSKgoaX8y5SpgjzmLCpZ4cbVazMMmX8MUHgkWniF4er6VQ2zd5EuvsEsREpzdnukutiBE1CuajW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JSdpG3T87Hx3ZL5aX9YMTUvVE7AgTJ1grvWuxtL1crm3SW65hKu8UHarSmxisbquTkeQDWuY87UTDby66Hhzpdd",
  "key1": "5oHcQLyATK2caR9qhuESwv8JDTk35XDCyvBqqW1ckThweLy9EbqTpHLyE7Euz5yt3P7X47AH5DQVJa3ZmyKoML6",
  "key2": "3o5HrLsY55gvew34oRXvdUwYMVSgNge1oVQrE1Cy7QCEAAcyMRRjrZ2WDofVosVdYYF5xidSK77peomjQMGYDJT5",
  "key3": "5UgTxVzALSZsQhQwu31bDbj4sgSEcGJvtu9pnbSsAcQyby2oFPCV9pvYo21b5YSJALyNLSXLHGyLRMjNcNPczvR7",
  "key4": "5o61pD12gCS9T7n8R831tKKPB97LDz4sBFxpNHPNuG1TcVe7JVgmVh1wGDR1fG6YSWSLR26jZgi3cQTmmZtFj6Ny",
  "key5": "24zbtMvRQfaV2jszyhj513NCQYc3b8h4z9Tu9Veb3GBxy9qsRT9Q5Rwxg2zzHL5qyWPf6jQNtBAo1PirQUD1BCtN",
  "key6": "4GUdQqFAbTngFMae3kWWuc2MKhXk6dM2JJkaHeKb1mEnx9ntQBAX8T7XLk64xhujWJUK2YnT3HdBnPZULXznrvf3",
  "key7": "2DBPGjL2NPqqxapgnCQCVJQCs1x7nUQZt7vLyhttpwhmCJRKGjU9jdfXEWJhvBgPABrLJCAksr1fVENsdFWyk4Zv",
  "key8": "5RrnybzFmBC6e4WsC3n2WpE82JJ8aFhPUPzR19bm6AZjTFcdQSBM8ky5jQ1SPW1qgVdhzbtxkwS1CKekUErLn527",
  "key9": "BkgmxZgKDsbVBmaiTCaGbroba1amN56YXU3dP6z2usiCFp6ThVvAD6pvN4Y5UbK8HxzzPYmBZLJGoRn6dFE316w",
  "key10": "LuRjBSwkcRjFHMYJKFfziiGA159AKmbREaii7Lnb5HNcqiVWdssiKYLNEkBqAqys7jwXVnB2YrYtqUq6HwNFytg",
  "key11": "3yXYwNC1gNfDBWjNbjp2WQSsyv46NgfmqTdnU5khSdMpmiyMY97Pnj6X677BUpeztVspJTukWn7vppdS36rsV5rs",
  "key12": "41iKx1ML5aDFNHHnQQvutji3Sk4w4XQDyZP8G82imPDYLQmLEyup4ZKDhE1TtX7t7GWaGW5wCo179DxKLxbUt5ur",
  "key13": "fiKx81znHWZHwEfTKgsPU8QhNDpvERy2z8d18QKB5ispSALm9E44EE1zq7Fchzk8SdqaWQGZ7PbYbxsezY9qijZ",
  "key14": "4DA4h96uGRFhKaxngL4geMrbibuhCCsxb1Y3oFer93P3J6F7HnWqpe36JVhVahzxMU9JbnnjBhN8qjya6oKHeG1T",
  "key15": "63CXbRi7cR1ELC5zvM8FUbWrhUFFBSsAp2K338oJomPNnsdwdSAihgYHsktQCSiLiTMg13Bpve1ftdg5e3EdtBSE",
  "key16": "3WtZ5bf42eSSZYkFQic9ANFMoUdyAtE2kAq88e8H42VAgVcCmqCgTPgWuXqGA8Cm78LvZV2LSusPKdKpswJMXyHN",
  "key17": "2seAN51TDTwzSHGdBypPPF4rYrkPU3Ch5sNQ7AxgVMjRnipr8Z3ptJbzth8ijjmdkxCiEPncU8UbyarG1rEdvjXu",
  "key18": "4nb2mR5SquCrNupEzcXcTKfUsWxgVpGbSkn4weBnwebf8K4Z6bj81KzWDv8uwb5th4iDtTiK5qDpC6DYikUWpnj1",
  "key19": "MBMx5ryagicg6wLndy6UqCZRcQL3ZG8eWE7uTyvXsd5RkuxTetw7WjrPedNoHm7D9zJHLGS1cwhPeoFhxyynDdj",
  "key20": "2y6jhDuTAHrD1ZX4C4MNMT4QpPoaympt6tZbMkBc2G2j83kXua5sEUevVs5r8T8jLMhTmsptDXSbMtumyDbhPjjU",
  "key21": "7p9ouykbcrviDXfz7GfA4rJ3s1ssS3LQm5u1RXe6NDHzgXbJEMH4R6L3K8Hmgeh4m6Ros2VzPURHKFhNpdFSdRG",
  "key22": "3qxJBHopUi7ENrGGD5979C2SJS3YLdKCxsHifQR8iar4Gso5nx255Pq1JJfsT9WHDLuj56xY4QYksWJvdXpQmSo1",
  "key23": "25taAqzFcHTZTeXbiQS6sh7PtvFYJfmGGcvV4W34QKTZrautGQH9MYF3rbhrpSccpuUAf12PVCHZVyxKfWWwtjrW",
  "key24": "5zYKfgK7Pa8dmXxYLX8RP7V6ebSozK58F9LhM7VRU1hHNk72RWtwMcpN6gFSFQcSNqxCzzdbExmpS2G5GnUATvaS"
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
