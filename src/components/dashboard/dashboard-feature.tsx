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
    "3aXffcfenPW3QYunEbdCx2CWgSQhTnPdoVgeLYBZzfxf3beYUuxfyi2HpBQfB7uzRGoA4U1qQcSneXgqA3DPUbp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qmXsjKhywd8FiRvnjjcBkARD9XbG2Nrgo3GyzFi8jYLBAb49GkTY4KJBAWXXUEsjTKMBX3xSKVja66duowggCEe",
  "key1": "52wRGe66M96cqkbADBfv3cZkf3Q9DUXfJfozFt7bBjsoKaM6533diXz5UAh6BMVXiJAiKaVTd3joj5Z4FFcjr81A",
  "key2": "2oi55wTG6epweYi2xWX8KuCfpaoAP9Z2qtfrQDSrRNBGoYKaE1GoMLWzyNdu4U7sG6tCzPnKTQmWu9kLMbaPz4cA",
  "key3": "4VX8w7AaSaxgwHx4gZPQuwdDHhy8BGRmm93ChABWnqUtQqaLQBpWYhNKgYaKAtPafsAgoiModCdZSKAhuEfzuYUg",
  "key4": "5CD81ajknoo6Rrh2hDYdXnTYvtCrLft2bCJAu3nH6Hgvg4zu1Ru1ZRiyXzJi3ZhGxmB5qqDycubcLcE89sD2Lein",
  "key5": "MLNUQ1mz1H7st1QZ3j6JvRk8KhhomVLwGGkdRryba1feQPi3yDdaffsA4SXDxfURqkLaqQni5GQChDQbzjqn8SD",
  "key6": "59PKg8AMesnuo1Z6TG8DkrKqxo8WQ6Hy5wKf1rYdoGUW8Y4cmK5qpu4CTtr4GC3Twc516TzRHV7advywBjeRgGQP",
  "key7": "2gKuehiJhAqjNjXWbEFTRU3UamysUoZvCaxqmtHu8kA8yHFxGcbSw1TQRH5Gvcu8JhfZECY2S2tSXXXrcgaaVKqu",
  "key8": "3gPBqa724mDquFeLi7NgoNxWpLMxceZejQsHZNvvVRV7i6EhrsnbBWz9jJJSSwmNbfrGpe7Hekeg98QcJ7MZ6N43",
  "key9": "biGbULABAMPVUCxQBTAgxRkx6Sp3D6JW7mdFpMmQGAADgcbmX8JHiRQX5xxocbW5rPHTqMv9jFYzJdztizCXTHS",
  "key10": "4vzjdxV2UF6sRxx2kXV2DxrTyj3wGt53cJnixsAgjmBveWvLTocq8YvDREzeeyRAvWj7dSy2q3VLbFhoLxySDxw2",
  "key11": "8QeCXupTTC5JkhRmUjuRvyrnBDnPKDEMjkP2rkkc5RJ1eE9kXetaW2vTyMqCr7PGCvhmnLnfmQnFtRLaxA6PnnT",
  "key12": "36N1WYvAkfScL5E4LUc3FC7xRiZQN8UtjopUpcW7MjsChmXJQwb12biBimyKSmFcXguZAR69U21ZcuqgBAvksXjn",
  "key13": "2uag5wfY22Rtqh8PGeTQUoEExKV4CcLobxsysTjc1xYx4wrBGyco7wzKvMfvCercBSPq56vSGdt5Sw8mVHBssi2E",
  "key14": "5Zkc3PHonGjWJ4EK6P5QkhQtgA1eBYNBc6jLSCh4F4W77vBg6ALNABELi3xd32iArxt8edXZFwAw1B6nXS5srYXj",
  "key15": "2Kj9v1cfMXKENrfCxXhsmN6UG9UDr1E8dRWK77ZEDHbwLEET6JxvaKWudtVPc5KNMycqtZ91R4jP9k1JVoaaobta",
  "key16": "3YXEVZdcZZsSVdBx3J3BkxNAA7MrW8MjB1uAS32sRh7qvUJzjQmJo9n8wpepwPBzASHjjsTYkW3mrzoFrY5stK3d",
  "key17": "ijxyui2UzCmJvKRMHkK4ZM1ccnk3NYuJvAajxxECgA19d19byf9RvYtCfiAYnSXBj797Wr9ye7U6vqdRTa5oRmG",
  "key18": "5SMZ4adfiLUgtsjuTvEwANFwxBLN1APJbP62WpBAnEBSjR3wuYm36nC8zQS8U4PdvbJrn85LDzFo4u3WYcFEdhvZ",
  "key19": "2EJZm5R4uehEXmzDAwrHLqXFTQc6pWdF2anv7cb5gz2g99vifNtdrkTWe881kcAQusbzZC7rCQhLUtWJf23YMuzU",
  "key20": "242x75fPzm8FAHdb4twaiq5t3pQ5BdhdKmcvr6ZRQGJYsoAyMPduKhuF16WSyBjcRpos3aAQn7qdpZhGbb18xF1m",
  "key21": "2qNkbgnFokxY6QeNZLhje2jwTELWCztBNj4apa7Nti6DRV7jdkUEeLwVas8zadfLqDQ2npgywXsBZx7pRj61Kx3v",
  "key22": "iFv263DbqzfX6MNdjm2kjAPdEB7GNU6MijtPbWisb1sY2AuhH42ji1dkiiEDH1nQu8Sxp2UjAYE4QQ9KHgFq7aR",
  "key23": "3ULnTfSRGi5EHkPb1d1kYGnc9qDiFjPqAJpB8LaoFK4ZoeP2fbCJP6niJEku9APyuRTrRN93secsShv2nKGaMnFM",
  "key24": "49TWkzVTbD5xozyksqik2xQNE4GW3yqQGJpKUvZdcQsFVYLVkrauk6BPhSQiP5BrdsZR7XVQ9oJSw3BUGPFuniks",
  "key25": "4bQvcqdUdRMfh94J2qYqmiaSLpyhwLDkBRMLfS9yCFXF8dSse9WPip1vTCYb18ZhPrwugh5wg8CkV9m1yvpDGMtU",
  "key26": "46Lrobd6Myf8p3i7vR7MDYe4AvWAUFS7GEWA32pugmPeMVqP1BecaSBbzmWFM5AUtwVqw6DCpW5K1n4bbGuB4fAz",
  "key27": "5cWW7HExKVE6ZUEGkVwD6JZQd2xY7jGeSXiPZ2QT819EtinbZmgq8xhqy7WzvGy7rbGf67x4GP2smrFZM2mMfcVs",
  "key28": "2VBSLYzTyqE6k3C17ijevSqu5UbZLH77iJBLuQgdBxJTmUYZRzZVEkLXhwouWYeAA3ccHmV1195S6mVooftoWJXT",
  "key29": "5ptwhAbSzDzY1foxHcwCujEorXcYwwdBazCVGtvH7AABusEZb8KQJGUxcRnNX2ZNnrZkbwqyTEbQiwUpf9Wc4Yz6",
  "key30": "kyAEQonbjZP7WJPydzzvqppi4pbWhHV6QxJZig5pHb7VPpmUE4L8vbZsAx1dHKAwnguKWreGraEZV7mQhcMvptD",
  "key31": "56N2nbFRtGBiZuAinXRPm6i6EcmuYmp1WpjHiojMcfrPQYuo6LJx4qg9mDGhFfLPEKdaKuNVSyZXDhmPTJ8u7Ccq",
  "key32": "59XTiqXsYFToWSgdXVRs53gqom6PM5aTetV7kNfLKGotML5VHvNuPV7w1iBvXVJ4Bg1NzFmSFWGSdf1MH6gUa41u"
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
