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
    "5nTm35ZA99eEFXF5Rwz2if9m4W2q7dxZNDAa9d6uE4dKU78GxNJyu91SrbqdJAoFHDHVz6S4K9sRa2yE3BWZdiv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxoGmdv8Qv8Pt7ZPXSd9jdujGKfYpQh1W7vLhhqnDf1bvyQ4UbAbUxbEaHsdewVy31hkxSyD6GLa4knZY5QtMTV",
  "key1": "pJAWKjb6U8xc8CWUAW3CGF2BioRXAtPWtEmLv2sX3WYjBDtKRHz6tR9tVYk8hcSVVMBiAZktkmmHTYYpXywAgKu",
  "key2": "4pwdCaAbBATMijtwimgR6zmZ2WQnJjXFww1RgwkVwU2xWES3S6ANFkvhGs6YZTDLhHBe6UUarek93Di4H1yWuamo",
  "key3": "4iaU68P1dYyCjGC6Kn1KyY3TcM7hqAEZJaaYXv7XbfGJzbpSwEfRHMp6H9qQVbVkwjJ3jfnSNFZ973z2xZpAqTHJ",
  "key4": "4aAmF66upVF9PzBEjttuJUSNi6azyBQGgQAKb1pBzwaNG94aSEoGKykVsrkA8Uz3vTy95JKPefjVhAWA5usKaK4W",
  "key5": "56yYKVkBgB4EBCe3fygrM2ZoFnphLEMBD2CHhCzyg4KpGtKMFBB1PL6NFD7hdLJe45q42MzxubqrgAB2KVnpPsdt",
  "key6": "BTMDu4n2E4CiFUSvzWfcWVUuzgWgrzUvnmnzutwaaEZPga6DS6WfVctnK8gJ41H4nvT3WigUdtB2pFPAmfHChvY",
  "key7": "2u45ZjXp9rbjZUYcKZXMmKNgFdeKfNMLgi9y3xkBrBCjPJ2ooNXjMSztRpfjqH4fs8YMrLJiMnK9rt3x3wx975yG",
  "key8": "34gDWLC68XfjAahKMiak5t7dt4ewAsgtHAsyCAkNtxuSYfQiieCH9UCjV7FGHoL49Jp71tZxMvwzpfaMV4fioJM8",
  "key9": "5ii64bUPxdUMorY3xezbPiUSx5QVdCKW8iFySbBa6xBqLGjePeANfNheCWCYGFCc4B1P9SRzfocPrsMFGgfL98C5",
  "key10": "4QVuo1auDi7bwNfeQH9qdBRVxenGywm4eGU7BsU9hMpfShp8Y3V7k4Ra956dTSGBakcc57Uubwkj3CrDdX2TSzss",
  "key11": "3YvE2E6w1DW8m2aWK5MoREq4LSKdRC5Tk5j7drCD1mprju1jRfRfoyoQME4o86C5tJNhaFvfCthYJqKZpkeavrBb",
  "key12": "4RtYUYRcJrApvMjN1kQ1znjfDqX33xDczvbgEixqGnkK5hEP6LnXMCBrtJofu9DR7qaWmxBhjXDv2fVb8FxerwW",
  "key13": "33kCZizRaDT4h96biYcE8QbGkmGEG9oXkY3ptcxGbJMZhtmRQPo8Xxmu3rfGNMUwyEjrhApo9faKmvVAd3hXD6Ve",
  "key14": "ujH2DivQ2oY2fQnVSjVWhDUhAAKjTi6CL9WSWxv4398NrH5fYwCxxCKfrtMHrVzdNR6rFsd2LiBETAyGP4sTrmm",
  "key15": "5Xjx5Cx9SCscJ7ShNYPV7y4zk6XRXcyMcCtpyWvzbfG5StwoMtxykxnpsCMrWArWYL7LUqk6vYe82xCNZj1hkonb",
  "key16": "3uzaajMEF1Qre1ozvsaiYoNNrZ3AhrxzvuqqNPniEMgTQDgWBAuVqw53AZSrGmkJq67RqbNsZU5cFwZ5pnHkbhU6",
  "key17": "4s9wjETEcFZXFJRvBU3JuW4VLVNV27ZjMNxDgTV5QFqkZYzLwPoMugNa9kUeE94sjdQNFxQ2GpouVzHUByv6EJCP",
  "key18": "5TMyeBLX6f8eBJ6c7SqsT1onUFYxXgU5ZacfZJNAq9cB1k6MzqhN6yMkVdzqMbs5zdPreRC7QnpUJD24aR2J2Vir",
  "key19": "3KnQk72rhSe5aR4jG7tdRYkETWYhMDwDpoQFtukjFB7nvQHdAAH5Coech4HNcryEoF3KLAxiSJdGC7FPqNyYpijM",
  "key20": "4yuXSk9eSttNvnhSsz82eLeL1TuQZ1rLwMJPXeseUJY4WjhmvzB3ymLEhP7EnNKSLSQ1kyQgb8fpRAGrFr2kab3s",
  "key21": "65jR2DxZipxS9PY1WhrE1bz4wG5VdhmoHUeaayQNut6D7GQiGv4HyDrgx2ZvhCFT7GnQA9ipBPHPCDLEsyMpBXJk",
  "key22": "25FA4hSjRds9EGeE5VVysarHFRWMJ3xUdrjouvLQwYjSUBwYhA9e2bRKKZctiTuGvH4sT2NzS9YckQTA4DKWxr52",
  "key23": "3zunmGHeu7xeL2b2vbGoJ8kTjexv6fa6Yj1aVXWwVUhd8bUGdTJeHFmWyZyiptpwnmiuNbW2Rf1gwyWETJR3Tzg2",
  "key24": "4C2o6aGuCpXhMWSHth8sUinFUU1zG3oYA3LYhRhYDCHJu9twBhmmazod6go4U5b15VKhzmrACh5btZDxuXhKVWSC",
  "key25": "5M1Y12A11pUEiQqEDQAaUh2Mmp8exyFdHGVRGtndRVGbfauVX3RVS9z66svsaFd5a1ZFjh9HrQQBYnoFhS2jj6VN",
  "key26": "PRxXdT1UPayDuVH6yPfKatTm2kxPVX7vCEqwUpgd6jTN1tribsuk3YSBLMpd7v2qnHMG8dHokeTsET1ji4qDCAw",
  "key27": "5XPf6am425C3gckRmzVeeDibAsyYgKu5RmgD7XMv25gYAB8UWBYX5Jpw9N7o8VT9z1pqBfPbeNQsQHmgvbAUvc3u",
  "key28": "5khgTbLNz7AumRqUQHsGgr8QeiATX2qMCcAtJpB1v9oNh2B5PJDzpxJYGtkjnzjdHF4DMAMr1ef9oAxt3FijHf6",
  "key29": "tXv31379fDmZSeHzmai3iR5Dr27SKyZNYkNrx5zQeQEggdoJypseyRcjohDNn4ctXpk69q4NBYSAAmEser3SXKX",
  "key30": "7baNa9nRx59GiHFmv56Er5oziyaJjuk2JsiPaCZiNX8dDWU4wDsgbGYBUwqsX3DXp3CSaKChmm4HfiW4935pQo6",
  "key31": "2fAYbZWrawCE2WV8iiiWFLdTvoowXRVA6eWFsXAgcLNnAMB7YDUBdGmwLgEqUfDnnACNkSF5uPXfXG6Xr9p4veJ1",
  "key32": "3M3jwndsPbrAXW11f7MwhPosKXks3aZgJRkhWNmjfSgzyqiDEjs4VGUvw6gdaLpGRcQc2i2FWdcVW2481TaUjhtt",
  "key33": "Tq2E4PTEq2EJ6aS4pRWUijUpTYtnnw6AxLnFXqtZp7Yc8gpSZj6MrkmQrUNAhuuwGjTRmKwVGEQiKQqtupjaKC1",
  "key34": "EQ8xj74f4nLNeLFqMy5Ydn65eCxjp8YYzvEYsSwRDRirXnh8r9CLc8jsL41HvbGRsh5MVueHF7S3nJB8UtCt1tj"
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
