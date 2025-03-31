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
    "5ukHUwdEoEPqkdwF1RXWNYdtPqTAhdqUbV927PhEabbF8PoXuBQwmUFsK7r7iX7VWLw63H8aQXQNcWfgdW4KDyYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sTtrJb3ki9fxafCCYwoAVGgadi5RHWh6Xudw2zKbX21jLBisfpCp2PN7ZmwyMAW756gA94YxZjbWEbxXrRRkv22",
  "key1": "crHZJGJ6crXWvPtGctP48WeApexionZ1fySg2TsCJ3bimSTi4tZEzeTjcgHHEWhn1gQ6Srx6xFrAaCQomw8YK3t",
  "key2": "2PquBwRgjv2BaAY2T66ToGaNX29LcL7roLe5L78phYa39BsDWsuYgB6AfjVeurAtXcNEvQW3kgwAny1aoSfAzYNE",
  "key3": "4Z9gRntB6GgGAUTRqizVFyLTbrmmHDuSubLa8sHV9y39HfF32LLHHtQC4Dj7cSZv3VBy8uHffT5JAFzyFUY7AnqZ",
  "key4": "5bnsifh8hLJtHr6MHcR75DR2ENqUYyfqqi3KEvawyAJFh2boFGSViSpVKwHMEFD7FWFdwqX7uSPumpCFPC9ejy5m",
  "key5": "2TggyTUMEZCsYc8BUQe1QAB7P3JhLLayZy2minXSXiuNMGB5zJFZeYtSWni7Su8zYaoMQQc9jMwpa5cb7cLsUdJB",
  "key6": "3YM9a4EboGxXtBCuCyB3quFeQjMuiF6Rnve3XitpL1jbCP7SyyptvAqbaVVupYsc8Yc7TBBLVfeBHsnyaRymYosQ",
  "key7": "2awDXV83qK6GfpfMvbk5MqnzBFRSoaRzeZLnmgDWW4bZUSnHUrynqbPne1X3RMHNcZeVATpnMGUvc5Np7DGwaW4B",
  "key8": "45KNNNjPsnankAtrRSXwRm2aPyBeTxn1x3AiH6ScE7nEN1cmnW4aJNrgR3PpV81avo7CzfMWVnCSVC4LyTRRZF1Q",
  "key9": "5YvmbqWa58TQwH5CzJ7fE8DQvTp1h65PpnUVq7kGuibwQT3kfRnTiLXokEBSk2Gb8MKfgPvko9xLiJwUBUXXooUX",
  "key10": "3oMjPzCjb6M7MNYdeKRz6mczRhYLBEsv3AEMcU3ePZuF2Kvkhz78GUkyXrCUkAEXFTU71fw6DTXxeKSp5VSaABJZ",
  "key11": "2n8A6qZRZSHrwfzdmNjMvFSSnySqB6gJFYEgtzzJH7N8Y6ooLtNxhTd5sTvPynqfzUDHRJZ9VAGT4JARP64ajq5q",
  "key12": "4Kn2C8TthCJRtTxyY19fbVdmMWLz27bv99LMDf54g4JTXg1mfiWmUKYn2AamoyJB1rGe1rQU2tQY4prLSExbnNnP",
  "key13": "4LJtJa9oJ5ZHuQF3Db1rHoe5fhKU2CKHmShdEQzV3ovfmy6mvYnb5EzXPi1riS91vyTm3pdq6WVa5g5PDgXng8q5",
  "key14": "4oK9F27h73pLQE1FAE4KEiHVKacD98UKUjhQKhm6oBsHhrETA9iBHygDK3NJHdhiSheWmcZ6TJ3b2UH1aF5qcbEf",
  "key15": "4A1ziSMUxn3GLhGEo5yAZi4q3Mr4m4MQf45NZE3MEJTruzLF5NRpdPZJ9zEUFtaVH4yxgqSCN9Uy4PeaHUgpDNk3",
  "key16": "5zbs88uCT7NE93z6ALMddkFbqosbZ13HvpL6yeiFLXSJ4Jdm7HaJXTLRsrF4GjMT8faiGXqetbxCGTPMPoV6WLqr",
  "key17": "8ueAoVGvtAS1r2cBbtTbYYb9MVCTyfHjCHi2gzRZGNwsKVCfYzVRf4XsjejBBkMFBT1xczAuqMq9Xz1gCCdw4hC",
  "key18": "mL4Yaqj8bcKr46aA2T9NHrHUDWJhWunMrHszUWZZkmUfqJJwGZAKNQDYKCMNbSZNE3xhhb63gASNsHxeM2CNP6G",
  "key19": "3nZCjAmR9v5H5MK4zgD8vVTKv8hpmdVK289tvj7azrQdLrSgXaa4HTeRZjFhkFt3BgZXm8pp933a8kFU2ZYgWbUX",
  "key20": "3TEux6pMbMKGYzBck3DNPcrT7KH3NZVVMRiAoJQwT3Xcx3xEj54WcmHGumVwQeML8hv9ENQS1kzkv1F7f4LW6C7G",
  "key21": "Md7vSykihirCKkfyRY7AxJNGjLFunsRUhnQMACzWkriHAamUxpBQhm87gSTz7ynqNvgwQYq57ZXro6eiW1rGirW",
  "key22": "Dmihgoe1Ao384kLQMatYtPqJAtmEVmvJvwDVoEsAUrJX78U54nMCa4bmVCDBqADxuLPH2qsYn5QggM6vpKfxzuv",
  "key23": "rtA9LxdpEEP6mSEusAmANxVnWcDhBAoZx3em2nJZ454Mk2bhkQ5LjvfCogsezH76gbViT8iHhLWZPjfMBE22Usn",
  "key24": "2ear7s2FAyJen3RkRcZqW1GgizdmBBAmnPVvvgewsezpHqo9dtyydWeYzvWJs9fDN3wE5qkTPfc931Ci7vxrkNni",
  "key25": "3sMHmR6GnMeptrQRUJm5mmC1YhKPJV9D9KoYYT3NZ2udmEd9rCAndeZ4yDu7NEe1U6SgHoM3RPiSa4hs5qYaXFCr",
  "key26": "2PzWKQZBzJH6fTHQFpjfj2siyyv7nhm8opzZsP6KqRZyUxLDGfXBqjHjrqqfPQpc1pS99u4UG3rgKkF6m3scJBNS",
  "key27": "GnYEyhrNoZzrqDRqcgJ86KDA2anSssEWAiBwjPAcGpUBRhjKLiMFDNxwa5jwZxaxNMbdjyREfKDyrcGQJJPbEfx",
  "key28": "4RT7k3T6wcqUBUF1jHGscJ3rfX7uFmCdwnajWdKMzsHZGNz9SJdHD2mExiEvDJCARB6hrU1wjF5N1oc8kkTvZEVd",
  "key29": "2yPaVgSq5362A97ubdZHLfj8VBeHHK6TSpQftH3br9Yyoh4iHAm79LyNWM8EeerARewNCUS57ZqSmWEf9rAanUqn",
  "key30": "N7BMe77fC3cXxDLEoSRvTfF2RxFBVgTa8tUa4wkchbwSZWMscyMQxQGCNDW9kXucbFXYEhAbEurZPBcyT9dYnUv",
  "key31": "fV5AUFWdiP8jKVSPsZZpgvxFog9DsKE4KUEasEMLeGfwDTfaikMucP2J5MNzxtaY8sgoiQoJXyGsFgQ9DEnGcad"
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
