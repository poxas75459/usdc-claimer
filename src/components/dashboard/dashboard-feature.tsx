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
    "5C64EZYUTzaAAunJRVBsrzqzg7XgcHgPNqPHGeMpZL2LwJoc8qgk1G8vxmUoq2dnL1Xgw5gtXmKSC2nhHFVxGQgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2ag5wahGa6NxTksGZpybbdcGyAeLAbDdKC8WnWx7c3G9zSRZGHLuPdoMXg318h4AkNQW4D5Py5EME2hiLiBegk",
  "key1": "37X2hH5EDG41LE1d7Veuct49wGjFfreQs5iJKPNPuf6mJzmdriAMYztVNb4KLwdTd5An49JQLdKEyS6VN8xiRFb4",
  "key2": "2T5estPYLSH26uwNyvn1YXCUYgzPomRmxJfq6NcJjVH8ZZYE6Bt8TK5NVFqAeZxB7oeBzDbQaSnSsNt4EnpYaRZz",
  "key3": "2bTUvS6dgJbZZW5pBekEFLxvkz5w1moMKbCx5FY6dzStk9i9dCfD1YK4oMFdQoSWkRcmqmXWNA2tM1QAHtF7EhiU",
  "key4": "3Hew2TL9RKeEgaUuAV6soos4HQV9fLCzFCZNXhpR3EkzAsyPKV7mbh21Gy4VqfmuxRGp52FaosZWPvdMHpvaq85Y",
  "key5": "4uQvqZxCBTxMRdKXZCwCDXggabeeEW1tuxHd9p9W8Yy6XDSqzt1BTmkAKYpp99zvqZsb2LTKwjgxJPERzztywoU6",
  "key6": "2kko9p32r3TwzyF3roXy4YwjpFEcaj741Kyp8EyxEghDn1WqAGJzABWThv4yZ9YPPjWvzjB1gEBsUK81bahahiX8",
  "key7": "4AYSZ7jrhpkwCKs5UpdVtC56bnBxxpapYTGccPPMKv3MqiPEtvwosggNnPQrzFo8qBpFaeJLf27Kj8h8PkGRFRiX",
  "key8": "2mb7jino6ATnfp8wKmswk9f8zeS2egdCFksdSkQwtWAnVLU1tGG25jku3YzyoadGYfakLLax5a6tjXVCQpgjLsK9",
  "key9": "4j1W6fBVYdRCz3AiJ4ZAf8MEgbGsbfv6KfGL9Uig34iCwwyRoMPXXbGipZc4TjnNxTfXdmWPg3j1D1RfDJzCcuPf",
  "key10": "jXfZMJMLB9T2cerep6ztQG3TQXf4LRmmX9JMRxSHeB87x67vAoMoBqntbovMKHWxfu3YVrGZ41VZrtRnxAgH1YG",
  "key11": "ucosV5dm8Vf3RAA24iZEwHGxuCxpgJyieyG1hqtvwidbwnfddRBUeDS6hPnq7N2imj1a4eNcEFY7CuqfMAybyMC",
  "key12": "rQ5pKC9DpjTYZngVCQtYPU8iVU7fyrasqgm4Q1BoYUJ8ZFQKwqpVQ4WXG4uyEYYiEMSEqXEmZVJC3x2BBC4DwrX",
  "key13": "56p7P6F7DCy8ejVj8BfcAJSthWtbF7u5u3obVaScxNU2mwhpfowbKY6vVt887s1njXDEufNNQ9bZp8W97oA1k66v",
  "key14": "5sXrDRiKP84rwofMMrfEVie68PmGW38BsTHji4zVKRja85zgG9KRD3dSDWxqmatqJgeRYXJnFDmJ2ABpj3VKyzkR",
  "key15": "2Rv9Q3cAhT4KrqMX13jEgsNBs28CaHHaFqVeaMdQe4yhi9adUwWduBRbFKNg4c1JQzc6YYZzhFFsZ6XVm5AJbrW5",
  "key16": "5QBg4VHQmLJvqZeYxmEFFN4fy3pdMpvemhij1QPfeSfVmKqZGAw53uBybyRu4EpmkFUwTeMDMtkt97JKejaeRUy4",
  "key17": "22F3G9MDyAvoWhk1mMJiFbS4d3caCYksmoTF8k3aJfpJwpr99q8VW7oUtKY9aDveiNt4x4dQkvVFtvfiJY8P6wK7",
  "key18": "3mrJCQg5UaoxpCkGXewJm9yjoxqVc1963tF411CH329A5RK6FWJh2jeBGbV2XBuMMZ6iLWC8DsWKTBV5FZgH3JAQ",
  "key19": "4ukvygGsn3FDVTQQAypiRpUVp3rYTAFS7G7h3XsgwEEezc1272nAhivazPMrAx6gqgGpxMBGgofcrcmqdYjXYq6j",
  "key20": "5sfQWiKDUbNyZV8tkmk6p59mGHhbFdPjaPaymdZL51Qufn7L23r78xjf4krFb8fht767sY3LU6giL3LvPXVMFfMc",
  "key21": "5mBfnvEvKXcob2DvX9VLxZrQjkhojWd7XbpTeX4UD6mcFF3agvZav4yKBmujE91ewG3PPkF2nyLuQF9b5cfgY46o",
  "key22": "EBvi4ygJzJ3darVKYkanZBYZKsqxfi8J4hc2gJph4mB4mgmf9NukzLrzv8kHibq4txGoyxFoeEiUt48Rud8M9vV",
  "key23": "rLuJEmsJU6HXgwwqA2a3Ma2DphFpixG6aG9pH6voFwyMX17ZWhaVfUPRnXZahuqe9MLZGJE45Dx3e6caxPiXYS3",
  "key24": "58gsPq6Kkyse4C8xvXuA5MYbGNjDvE6uChBELNnCffs7SLYPeHNsSCRDWo61k6k5pYyeosbcrpTNw1bAdcsnbJdy",
  "key25": "3uZityMqJNjB8JycQ3b2igzDGVNycuqSirmVPJoWj2PDNWcNvvXQs5BAHWDCXQDe4c3jt5MwzDqiwWiD9eN2qboV",
  "key26": "2ZADhei45uGcxPGkjb9WyTcc2fbg7rPzJUjgTRWk7AGxgcW667wfhp8vgbJvWNevXraFcLYeTJaxHv5wps6opRY7",
  "key27": "37hfRXESonF1ZK6dgdhCRyHbhAudMQB4Sv6SxwGpu76HjELFyxshM4m3roSDe7D27DbhbsbspsLavCW8b5cpY6VG"
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
