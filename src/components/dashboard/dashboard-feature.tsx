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
    "SjpXUh3A1YYkAhdhEM2uTLjVAixXmTHWDMrpv4BWSMtP6Bb5PryZcLkagPRCduVJrgYxNrzS6czWSBQqyt8AqCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WqN4zPZiYGxRfthdjAweWRfDEgkZbBbCPvq982wLKoKvrgS7uQfqZbVm83uTGkbmE1A1fgX9xwteHzHPpmk39Pw",
  "key1": "536vX6WTYJXzgibFhyi1kf65cjZT2dNb67E6afstPt8mxFrDLpZXw2vRMWJc5i6QxKAH1twbRKWtXcujnL7VF36Z",
  "key2": "4SRGNm1r5L3ivJSjYwiymCpoX2QdZXLMZVjKYEAfK1NBC7HNB71uiz1RLqqRZzAqv9rxC8gmgsD9fRC9D5jxENwp",
  "key3": "2VJ6idPC1sK3pAQmv6s4HjQM4dvehXNNZUHpXDqp5hVpHJ2dneGoevNKyoQASumAVqMPaLYc3NW3UXpioZnqjsou",
  "key4": "3PvTCS4M1bTMSLZCUNKgmvHuyfDVVCwq6qgmjov9AygAEwewdAffTSEvbviEt9Y5oLFr2o95s1GuFFQ2thXrenC8",
  "key5": "3i8tdsPVEbFGH3UfQbW4TuoUXFVNxfRsNkU1tPp3jFgZ5qvnXY477xaum6hFu2v9qA6DybUG6bpEu3fEd4UCqwrF",
  "key6": "29EFty4nAreJ4LJWopHvE29wZQKyYVBgjPELQeab6GJXtgjdRd7xdZ99oAiEBNRyFAGJLNGUEsf3jd9nQSp7XQ9w",
  "key7": "65aJbENh3JhTP4PHER3dHBnV9nhSV6dy8aPsNqifBzWtTffxvWmYsQjxWWMtkzMMGd6oj3WdK84u84jrzTCH4s4K",
  "key8": "5fNPgD6ZzX9fGcc7sEiMudWpPjGkh1bGPMyEvZTxJdwFEQ1oZACQkzmt4dZ4FgGCDjfNQ45dgF7WuadBSMdcGYZv",
  "key9": "5aL1WBUVXTNgd6RLbHZs1j26RRsUY1xUBe6UcQuUaqMb4h6tg8JN7bYAvP3ggeqSJsb1H5oYSV31AJpSfhQAaeDU",
  "key10": "4BpXFHJEMiyLTNjnKmXL3M3Pwtn4GZzQRz6YeDu3hKkjqTxBUBvcVX5juS3vBR2JuTAQmFgPZPj6zhQQvnFDEzG7",
  "key11": "2C8p7jqmXhDGTF9HKuyBcT3Pk2Tw3DtTqvd72RRnP5PdVDtYbTrWcUqgoPDGEptCc4T6HkgEvA3VwHN241Z5tAoA",
  "key12": "b63nDzAiKX47WHHLxKrevidgAz3iKu6X5uZPu15NYY65ZYSyP4NxiUXetmKKnMHjjD9SDS8qHesNoYDQX1miVvn",
  "key13": "3xQ1sd36EbXFAPAfmTxpt4B6HvWV2WXccAoWYKwr44akrZrM14zsHHTSgF2WcSgdeVYZoF9T4Dr46GpPcFFaGDxq",
  "key14": "4RoebwtEc6oyrFr1M3rH7DfBLFZhguhf1jduyGPrDp1a1jshpqDhkXHKrvQZQCuL5oHkxYxYZzFVG3DJY1hMvyGB",
  "key15": "4LVG9bczVdYvzbtuvJCvYTqLchTnbMCZtKLueeKXbJN9L3VZepjyppP1Ccf233GLbgAChAkAAUmstPUDWuJYLiXa",
  "key16": "4ZhpW3ZLx6bedYMsokPin6yE6TkSRUxP1rVWB7m2RShLfjJ8FhEyYhKc46DUebhaNs7ZZ6rFJLe597XMWsBT8Fb",
  "key17": "5Z8CD4D4iEa9aURtzAuxucjZbYnFm4wSYBir2h5iDdcv8XU4WnZrCxHxkoQLLN14stjdj7o1Wq9KKSQ37UXw4NjT",
  "key18": "4MXAgViRzvnDBELMrEp2GmcaSbrWXJH4Lvy6LDQrLTUYfP6JSL3qBJShcDfQao9y46cLXM1jJLYXmmucoGNpYL5p",
  "key19": "326GGJikj673QHzBYdA4xXAABBiUG46r3BVE4F9Ajo6qokPyHnNWV7tkecPg3sHMif8KSn71JhpNsdhcnMXu9izh",
  "key20": "5abaAvQMRRUtpoYjYHDYzgDgnu3wdT8CUtMtTZHfQMF6ZDTTpRCgtu988ngBv3Pcuhn8ENcM4qCT5ik8kG2MyLsm",
  "key21": "5axSWwUDRf1pvAWnw66336qBh4UUPgjXP9GP9LBiDSr4bUsTpfxQMzgpvwdcRU3pcEhDYxZAKVK4g7bWh1vbwVHA",
  "key22": "XeDpFb5BCayiAzCKMRaAqn9DSEHnbswQY5xtmVQ7cSFbw2e2aBf3fB4RtRnYgqfBS7yeuS6cvHAec1HbgwYvtpS",
  "key23": "3nxXzeAFk4pSZpgff7CYJ6HZeQUkKq8n2ruXaa5wJDpyQ9BGk3NKHrsGFM28FSNwWCghTH1eAP3Nbcxm9XTBjfzp",
  "key24": "3BuTU4LBoQv5tjmgH1TRtCuYqtNs67M7q4ZpjEBArfeGKkkAXtqKvpbVDuBREDSU8KtfdPPcVXp2dczuqbfVmxc6",
  "key25": "t1h3mBEmpNhst8YiqHGJCk4yMD3o371ZCWwFvNdgWzZb6EkqqMHNiWpKz53sjMxitirgaE6TwtCxnaD7XWCBXCS",
  "key26": "5pEAPLH8928gRqTV49ttHNdNtuVfkpKavsChm76zgmaNYjiLs9ooJQnQWKNnNvhUtrskCjZFWEErwVoXMT6sfp8v"
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
