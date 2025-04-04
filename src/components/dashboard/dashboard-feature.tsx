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
    "4h8E9NG1XuDBb1Hf7m1gQtF8L1kTVPPQBoWWPe5rzXeT7zBDT1RaPyRjVWV3KgEDGqyicUFGyxqBeRGUqd1FMBih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511wUnVxTJeb9yev4HxFW2Z5p4PE9nS7SUipbnGEHKSFFeqPm4i5b3AA9UJure4aqpZGjbqPLxFn2umSrqFLa9DN",
  "key1": "3jxMdmgZ2hNzQ7Tng4Nf1xtprPoS5Ph8x6u7VhAJSyYrcNg1GKwut5gk9gtJb81Qpq9jw97ZCP7TZw2zUbsU5Jbs",
  "key2": "5vyNK8MzDuRCuNgwqM2BpUtDHF2exHXmMUQbyc1ocFwVba6ZWyMwEDnQ6499zxjkQPCnmxYC7KeksDENJeye5BUh",
  "key3": "2TywYsUdPDpFDNKsq8JtWREBhigYXzFcAwUQF2ygm6U2w1mPazABdam3k9p47e23U2bq97ivKXfHPYiv3VXtc9th",
  "key4": "3y3SYmKQZHSkE5Ld1iz1tN7fjwVtigPUD1sAQUP3AXpmfmrwKFNUnDQDfYgyqyBQnPWHkMj381H6uiYAGZy6vHtA",
  "key5": "w78vv32jahhR6V37i5xFSygA9Qir3AZcQQuBYHCyuBfxeYVUQcGE7XHtTQqTx6KijrdfTrXUJDsR9PjVgTtnCGj",
  "key6": "3AqZNAfeDz9CLMGi88JNgbELUnBCLb1rBYhN92dnFY2wpej91CqGfP7ZFns3YtWWT9u1hC4H6QSVrQpoRQRDiSrN",
  "key7": "6374ozpZNGM5CAgACbWkGyc9RmsrafkAHifL5kiM7mWqVgaurTuR6Q3uUp7cLBceR9jN6GcgZ1p1w7BK1pmi2LWy",
  "key8": "4BHFb46J2bsvz4s5J2CfN8dGqLvf15b5jf1TG92CJaY3Uh5Pv9acW34AteNSVRR2bZbYMee7rbLxFABp1j7dtMBS",
  "key9": "2hozZixRqQiGpLKPJW2ErVTFpVnGCGHtyGtzX2AE5jbpYohfVAkAXUFjrnDxuXFVZ8zfhQ3CYbUunKbZ59YNngiP",
  "key10": "4ixTBymtSRGQDd2VCLkS2MW9kj8bxbcJMEQJ5F6WCXwY8M9FwCZQuqY9mgZKifNEYHRK52BY5QEH6ayNSk9VLC7B",
  "key11": "2yiPeJnCeoVwcAuyPhbCGvKtBUHLuZqXZfKVkixQfKyJtnXsFvDxsdefJX3Cu5Kw8XBndavPUU7Le7J1P94g7RWL",
  "key12": "4m2WG1t2p6cAVBRfaTKwGTXvVPavmaJcyxtdSTvCpUHe6QV1Dgnn7G5Psja1yhrQnBuLzG1F9YqtubS3YQYCpQFn",
  "key13": "qJoLGpy4LRjbUS6AjP76BM9puTCdZ7WoVTGFyBhibitD9hw7gUtHV5kDcNKRJgHdK3Q1ig5yPkL1VKzmUQrXK1g",
  "key14": "5b7deyBA7fhuyzvGYi99usM8R7sHVQDTZCoRk2sWsmSByBcfV4xZRf3RFugLQT2oDVFWWAroKPFDuLF5MM5CcQ9B",
  "key15": "53H8gBvhM5BM3V36Vrz7HzGWZXwLQMrejfXsWP77eWic2urLJdCgeY5L212VxMnG6pu4nyvBdxSQNc7su1m6cQ1G",
  "key16": "41P6gy3w8mChcKakwrM8mvuZsfs1xz3zcPyPwCAeHQpUEu7QmkGKR3u5RsLfXQByuriVyUtDqppuRj3tyQfZ4qK4",
  "key17": "oENzREHJNji8QSSY2ppcTY2ZTaACf5ipArM83zSRrH4SVCwKKXZ5L6EMfmWMY1A7qwSie3Hzb8XDH5iAh1ZQ4eT",
  "key18": "4R1cgftk8y9FhPS3RY9aBE4mdUoSCy2ZZUV3s53uEDkGbZ1DxLaK7VaT3JszB6N89YmS51joT6bKbJWCfiy4BSfz",
  "key19": "4M2ykaH8XFg53SnutSfxzxjBGdHfV8AYi4FY2m1mxeUpo6bvGVeE1Hp3yvMfc3fcXWXkfea3EzVs9QW8qJnaUKdU",
  "key20": "2Dt7Tt5aGGcdjcrKCgr37DQQ1XBzGaJt6QZjgjUYormezsibgzJfj8SqCNqtDwRV8NBcSvT7x3yvh2ZKEjUbomSz",
  "key21": "4MousyuU15g38PbwbmnhXqCxPUvcJHSaK7swnPAu6wZFSRGhy9mx53Zy2X6spJEyV1UchaAp2D45kSndu98xmXHd",
  "key22": "3z8EBPHKeT1wazePbVmScwbZnMNaA4N7irAugZ2ndLubJTk4LygmLPjVh5G5sANrSe6p6KkcVt1oSu9LGEA4UoKx",
  "key23": "4uZCCnLGRYfsyrhKv2ynb59kLAXXGhpkkb9KgT5EhjRBZuFK1LdqkNUWTMpgGQT7SKgHfTvw8fCXGYFtZQumjzsb",
  "key24": "gTQgHbJ7EkMz2phyMUkZ6f7QW7HTMcXUuRftokLY3YXkH86jP6AU3ZQGyUHSrMkXJzaEP6zz5nQK8vSFfVtyXFE",
  "key25": "5Tp7ynFpNDVPtTn2jKT3Y22B5qEW8P9BPGVcbiCRb4YgrWDkLQKoCQn7iqRWQmw2okYhC9pvmFSuQCrGXgt7MXGy",
  "key26": "553oaWRGd4bmjRLKZdwVCB4AENzpCPZHa4LN4DimCEjeyQxPXRXVqQxpWyBeqGm8YtDqWfDQKLyhDVdLsrKU68gz",
  "key27": "5RUNjCFthdauFCzBUVkJkUAHYYCdGx4tjrZtsUoGCtYzz8uio2VUF6yGm5M7dpuBeUkD3rPkaQxSZD1DWhUxMd4Q",
  "key28": "4cuKb7Ars5v6rL9eG53NQhwHMq2Jr3a2FSbegk6PXJbBgFgk5rJZ6bZEaC4J1PEpTH9Kgb6msVvdnS3imU5SNfQC",
  "key29": "3FQ5hMCTpBnqzToPiymutmaZGFHB5MixSSRV9F9QdGexaFy2uSK25UmA3EA61hixp85nyeU6L2WdfTmf2EwA8KHS",
  "key30": "4pLaSUWUVVi1zgMwMwWCTaMQAXPcNMiPfLkG87P7eyp6e1gUDuhWjtioSPpugvKcaKrnC92ma5aesHvHn6Qx8nRi",
  "key31": "5FvFxkn244rabcwkKESvMDucrJ4tH2zV2F6VmLe59yenKR48dMYuBdpX1bFHRHTqkZHffAUrTqXRfceCzCRPZJXs"
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
