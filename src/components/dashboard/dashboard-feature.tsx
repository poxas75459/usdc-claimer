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
    "F9VNp1dsnZkFG6Z3FEDby82mY7L1p1kMcgq2bVRKA9Ebzkk5SyFMNZDgEPdFrdgZPSdX1B7dxUhW81z9tcnWFrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQ7X1LYx2DSBNigENnJmNi99TSoC46BqwNoiHpPdWEZ9vAdbcptSvjtr9a3aaA3oFPQaScZc8BwiuTv884yt2bL",
  "key1": "aToTQYFbjfQndQskVpZQoZCpXWWwNg2XqQP2JfXLBkjDQjrB8suf3JyL4pNwgPf33zkcSJKk7CAccUJC6xx6J82",
  "key2": "5DhgocFwd664Rmt8u9uUdXbFzhsboAsQ7WgDVnPLJZEnuPnWQoM47Fw8wUdbKFJ6J4Q1mk2r2tXN4RyuZTcpK2ZX",
  "key3": "GT9ZThLm8tcuJi61UA2LRkaXWqQ4NizfqPVHduQqagghD9fDTMCzTg8A6W8XNvvGTWRnNuYKxyVhKUq29cywP2C",
  "key4": "33dhzyZoLDBBJ3ZAtpRFBrxNeKji3Br2wpPPXUqYqSYHGbfZsNMoZKkqgKHuCkmbNsoG4PNzrQMJV4MU6S2gQY6q",
  "key5": "4NMi3QLh4M6SWvnHkmgNd3qqrrwA3XqorD5oLyRYcS6SvW9WmxDgoKCf9QZgzoPyozZgFeMjqEKrzkvdksS6fQWX",
  "key6": "pYDP86iWkJGsbpHgdXhiaspm5TuxmXtSzzc6nf52tdSqHwXUpsNb8hHahnsTuCL4egtoHV4T6UGVf86dnDMVVyK",
  "key7": "daibi1yCGD9BPuEAXTkP6HyJ4E6aiyHFQzw31P7694CyEYfitft6FZQxGSEjVLUdwwMv7CjA1EkF8a9TmiMQomD",
  "key8": "2qDJ53FxrDzFEmr969aeFsJRt8iYQrPY6eH8KcDKsRNCxYJmh4bdZesLeRqQmrgtS3PmVGFhZeLBwK6B2jaWehEr",
  "key9": "3d2Gw693xQqVEj7kwBi3JnLcXKRNjHKjJ2xUydvocBZMTkXQbDFFbKWxMajSKjbtAX8RL6Z9qqia4RYDVWRN2u1n",
  "key10": "5ZvbWRbXHaaAJxXA9uMWn8WckDjLZ3eFXZ2SnrYTjqsaJBH5UyB9tGwT46S9aQKFGXfpi7f8gXeRPeBXyTBAGktA",
  "key11": "KeSWCLiHtMSCahHmhSfCSzQvARFnLpSrvqHfjaNkCxJCFPg9KzH5hr977AQsUo6GN4kRe48aHbCV9RWkftZugnq",
  "key12": "3DN5J4Tesrhos3s5WXrNUUHvS5bq9Qwqsv3gTScfa6wtL89BNbWgWV975yrqNRpb1fisAq4SFsMkkQ12fmfp4mZR",
  "key13": "2HoghfBizBmuD5UxZ8RPxb1s52kRsEwMQCwDy5jxegBSdagX6Si4Hk697cmYWydKZWqHSjRGBtFy7UV3rgVkUmZK",
  "key14": "43beYEiYm4fwVN2xH3DcAiGL5btmrxNghC1ciaUzXtp627BsURXpNm3GhtRTovQbFbiPSJsm3hZnxr76ak7X7fZq",
  "key15": "2n5muPp7AZ9NhkXnb5HpcMYBTaFwFrh7qJKTE8zaTmhrpTqTSEByL5xixAXDcZnw2VsRjLG73KKepakQhU4WqHxv",
  "key16": "rPT321LXdTYcZT4QdxdpYothbmARkJVqT71PSbyb3pHtoFpYwESbnZ36bFkZPdmMYf6nGhsjoqjADhoJQiQptKZ",
  "key17": "Ue7cVzGrbaKXpa25PmEqcEaSJStzHJ9Zw8kUYZa37RtgpoHdRHfeYWA49cBhPCWiwjppSjh2eMwMxMkJ2mh69DY",
  "key18": "5YRBD79bL7ftD2g1bTo5ptH9ZpBb7VAmhwGeSPsCZpfFqzPogBiUUGBq3XRw7o8ksbzdDVt4oZWnLaowm3eCqnE8",
  "key19": "3TCx7iUAH4P4e9StidEEjheC6LBaXiPk7DuDDnnKLhQhZidD15FyHLVcqkgVjMxzzzgasoBzDbigm3JQBfGdyuAe",
  "key20": "63RZL3SyS4ePWsEMkv5SEyb21ZKgJzbamyePwFPib7w9Qd1JDuLY5uFYVeV9kd8JtD1NfdQHf8eiPuWMs6rrHFMz",
  "key21": "2stp2MiqEVa4EPoV8BPQs18neFH9r9H9GC58orPhc4cu6uGUtnS9qvS1tXLxFNDhjpU8DcBNWiXxHU1pCC2asGzu",
  "key22": "2T1VXSsW4xCBvEpYZWi1x1YwALmkBrQPcRdeSZXLPVKDAYnfyAbJnhhSpLT1NiKK7y8DnJRfzmyBrk39mbv4bYor",
  "key23": "3dWvVhoAQqnLNzFRu99rDkw2svGVsGUEV4XN6kMjt8Y4TQYdwozk5qYLs5Nf125MCBkGK6nTPbik5APns2rHuBBa",
  "key24": "4M6uzPzSYCvMMU3ieMgiZHv88whWJ6GcxonfB7QC5mEjnQzAcL6aJQDoWTaSBMRdrnYPQDupQpmyPrZfkhMgmjq",
  "key25": "4XWH5EVUbaQ47hjCFqyoAc5dTeNqw2wcufmBuC9Wxa8WDYQNTpp3wzc7gZL6uJTviUB7y77Q8K4ThiBu1ziUNghC",
  "key26": "3Ho5vLc3qXCFpAQ7RZFc9pBXg6y8NZspMfcqtLyvVaaa4wSt6F8ySPX2WWEEU66KAAPbNWfrX2Z8SGacS6k8beab",
  "key27": "14EPiNikgoxkcDz8tC3s87SuDetJ2GGzFu67nDXm44VTJeLgQweUDeEkFX1CrCzMxjnCmT95NkwuQm6sYtnhsit",
  "key28": "5u7qVB6ecbuEhCuF8N7d93oaHNuEr6WAmsg9nriHcH96HTt14H7ykWjYKjmwaUY9xusK3cmHHGyE3VbjxAoPv2it",
  "key29": "4TqWgLwAa2Uxa5HQUD7RZ7pSR9qjNnqkm7HfRA9Hg8yNj72RdHdXvGtQwwG6pp4u35bWT3mAEBsF9qc4nxWBXBAU",
  "key30": "4f6cwaPnGypTs4hXoki2Sfp6YBATWfpegztKdHELkZGERnuGkcidHQn1YrtoURwoxqGdWnfhojDup8hLrHSEFnmu",
  "key31": "2ddjg21JBdYcD83fqSPiaxVPbYTDWKmAqgupTLEiZHpnBQxxpoPKGAQb11ffiyy2wcB4atrBpDU4kh3DhsgZgmTd"
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
