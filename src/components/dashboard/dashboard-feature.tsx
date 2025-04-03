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
    "23ntfdV5JSUoB6QA27okMU18SzGqgpQWZSnhSwFCC38KWrFpNUMhSaAJLLPA4KRPRfnEc98xEh9JPodGz1JR12fB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iR1E5CeQZUnr4gAbDCXF6jcMCQTURkasymfzYpx39ML9HysoSgr9zi6NevJxKgghM35YtJjTHfCwuKzNKhAMVkK",
  "key1": "n8ZN2DAxwpCTKcSPX8fBx2rUFA3cQRNoaCuaMfnsSTeb4ra9hbHJEjY3Ht2MUuQ6B919nav5i2HtmpCMoCV3KuP",
  "key2": "2y3eWj3BK9XMmq5vxpRtGsPpasq4nzmZvY3B8spj17A9XB3xFpB7KYKAyH2PqQdAe9qfgCwr3CsDNg6R7drzpSAY",
  "key3": "5Lhtcyqp9ia413m3RNik82zGLkqfAuWT5gnTkp74Y6hJFjHdzDRZQLySrx8KoxrQiM4eHNEfr74afxkM1AQFyAr1",
  "key4": "UguFWj9bG9oqFvbkQZibYPyk7zYYjU1xG39ALYb4ER2v4bnVZtESjhrKBLeiajzyCM4TMBzdWS1ynEVRYqaTqCB",
  "key5": "35d9BaaZfiXxU7ubMar4hv9JCUYGEu4a51Zr6ZBSYkdxXw42gtwqxJjwg8kWd8eZc2M62PSMQngcQkqfCfDQntUa",
  "key6": "3zdkT9qQJZZc7qsSDXkAcW4wQuMJsgSzgQvshzGpsKmXaAGUxGAjzRpzPJkD22kBkNEDf7P41hMWUYZxEWpHFs3c",
  "key7": "4u5ivmA1DYV3RMHN3SH318aLR5HR5q4r4ZFPMPzQcZpfYCcXJzrVyAnDdTXARJe2G2h8qkwR6yx1tJQjtHsEZXJB",
  "key8": "3wpwBZh2bfog32fr2C5NJ6ixfkRAJdTpUfq3rWdbWcdu2BwBf5ckuxKnvRgSuhG7oxHDKPWbjkUovgwe2Q9z7C1b",
  "key9": "387oKThoYGAbwFi3LgxTWqDk97LFNhM7kRmwB8FV4mamTCgiko1A7eKacD5c13uZ8fMN39mKtN5JDAmDyMtdz7rv",
  "key10": "2NmyQkxb9GcT18R3r3XTqc4mFh7uToty2XFxLvydaDC9isbmkqkV3i6x66DPuv5p9LBD3hWkesJLHjd7FNWmb8Ag",
  "key11": "4v7rFi64EfNJU3HnaUijBNDcKsbdxiYBeGJPeuRvksAcMufPyfPEXiCw8YGcnNZbJC4jJ69FZfmAbEZ5fCua6YpB",
  "key12": "5TxZtkk3CDNfYjcXL4VHD5CXB8fV3xvhceRwdPTeS4oc5NRzGRmxVXFBxQtmcihm4uMZcscE9jzk2ez1TDsEx5q5",
  "key13": "2eAdLoB8tF9ySBKazquDVdBB4EMb2HoVVVvt7wB85z5yA6gEBFXBV6MgwDuNz36QWxhdfqd2QvcZpJu3wxvfCMMm",
  "key14": "ZfGKBcqe2pqY1hMNAqB4HHmpSJkpSPcWx6Kr6QS1vYk3afJgoJEJAzgLB9UyPbRTLZVNjHfUW8WLPoVP3hWbGsc",
  "key15": "5mdKML73qcBc2AvHEEtPXmrLzAqKX1wHqLLZz8Kz8YgKKJgdVoo6xAbMbxGrYG59SZKc9LtMgwn86ksYdbn87NKk",
  "key16": "2PWYURyEeRNmQSYCYzBSRgfVx44LuyotFbFrHce2ugB6he7BJC8Dubk8HjrjqBNi2PN3HPJfTYsqZirz5PDGwZFb",
  "key17": "3BtGtBQLrNYGkRksefQZkJhT6qXwiqmDj6PuTU6LokdbQo5pvxN286ioZgjJMY4yRaD9VsK8THTLEDsFQz6ZdwxD",
  "key18": "5HytQwMHn9AujXwKquuBa9XaSgi42X6Lrmhe9UnDufyp3DAm86HkxjfJUBihvD5NM9BqurUHSgFhKErLU8KgGsgf",
  "key19": "2CMxFLH3yAJGSnN6QXNYeZTmrow6JEr7n9CEro3bBWfgHr1QyUMZ53SRNXX18ja1aYTpGz1b2r6hQfpv7gTjqTak",
  "key20": "5VAa3u4EioEkstE2S95GMk79GpCjJevCkaizxYRNrKQV8DA87K8WLfsfzSw8Zv8EY6jq5wzQ7YMU724rLVeLEij1",
  "key21": "5eDCXWX2J6hrhP4KFXeSpAHiPBN7ktt1CQZzugrhVpbLvS2KRD7UVjE3Mva9bZsvxqhkEPL9kKuDPbUiphX7geUF",
  "key22": "3VGMxaPJSK1wtyptWqMkE7GKTDg7iNCDgGYPkiRqfJd52nQFABo5YzQrX58ZoCmLD1WpeByT9oqE1xsXXbPQd6gY",
  "key23": "3LQK5rH8oDf1mND47rr2bMs4dsTE5Z5sd2xcaYCAb125t3G2Y2xNqPCMxs7Yfj9bv7VcECCmY8i2CgpkDzDYbmZD",
  "key24": "22N1dYGCsAieBWRfgC63EBFyrueyVaLKUayArLtz8GAohScyZeekh7erMbZzzWjqDWyizLj9JH7on1oQbYp5oPEK",
  "key25": "2yZTmEt7pBzuas76tSZz16mcvvMq64RFTZAcqaBvhX59eys65u4N5Vvq69o91v6t4S93EG7UEMd9HxNgxLyzWoud",
  "key26": "5WZg8jL8N7hETgWwESPCBQ5CTHfkjSU4KtdECtRvrzAiKN57WbQrhgN6jPjQ3wNDQPh9LKmuoqCikUqhaoCm5LKS",
  "key27": "4yMf1T7sM1THSt1foYm5ovstqdQb9rUGTGzYkUMEbMBtSnU5msMQfvD6tgPxm4w5Jsq9PWRuouX6R3VybgM8rzxm",
  "key28": "57DXaaoNUdNXodyyv38tJSEjSyqfT827fJXJUJvdFhinJq63vD6QkjkHfSMK2Y4Yvpr1GYMzT94PZbFR7ddFEJP5",
  "key29": "2Wqvf8YVHakBWpH9fZ6FcETfoJ38HECuxfTCm9MdqpazQZbSW2zzbcHyH6tABrGTFjkx5gFQfVidkaZ2g8vDwtKg",
  "key30": "5S5sRPPL7Kybu8tw7o1wL6Y1ozBFG3zUYca46tRHACZC44aMfFEygs1AfmX1dkkaMhSYiZLhN51SfSP3sXJwdtm7",
  "key31": "58P6HWwYEjhFZiyUWvnvpUXAf5xSUDPoRS2K4EeJ8wXDpp2Gbrtyx13dwLdJE8NTUvfvbuMKdnnd7TFXSRwrBSbC"
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
