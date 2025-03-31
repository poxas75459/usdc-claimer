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
    "3HzgpCtxvm6S5T8e72UAZ2x2bZVgDmTQin7V1iLPrUqhNGQbFY6vFhcNdAxZ2UuGX11asLBEKdzASUmEDL781rCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dyfWmTr6JT88HxYdJcLUjuZKb49gHBtfhyxMMp9wYXEMdeywkB9cxQHNhZW6bP99jfywH2Pukhc1FfF7SeGiTht",
  "key1": "2NtTtjNk5EVbTs8rETpf39rHGh8X1bH71vbcoB9KcnBjeP49tYaxTGqC5FcSM3vctQFUjzdsS519Fmp2VtVqQp3q",
  "key2": "5kwJTvdMe67xkVzMSdzhdc4TtntWn2Ltu2MkHjjPktTCtEHsmBHLLx2HEDLiToRFtqBKu4ofreYtCBb51kWmifBy",
  "key3": "4BMYTB1sqL7jxL3xyqzpmtmn9zKzCFxz7C6PbrGANAWnmTkWUzGPiekN7zusfzjHJDqWQ62Pm57SewmqzdKRjy6o",
  "key4": "27ijyH66XCkxMqLhrxaioD9domiog63xJKsUgf6PpJFnVhwtFys3sLkEgfAGZLXrmBju8FkeyJFmQWFiRnkpzibj",
  "key5": "3QPSE5JmGTSXVCM4xXrjfVpPcj75gPW61tACyXvifGyg2kYdyuc4Tiap5ME3iFfd7uVRoRZAXMfECJbZwBVM22u2",
  "key6": "4qVacQUHJQkS1JxykExJpuVFND29QMM5WqKryXttJojhrzNzVPuSBeUTNqbEKnC8Cyrq9XF6Ho8VsGS3ZjTi338b",
  "key7": "3TYL4AGp6jubv6zQMhAiGeXSaqRCYE9LoYjritue7SiN1WNGmEghwxmQcrwUUFrG77fpmCMkW9DMoy7wE3Vhr4uA",
  "key8": "5aLTMyuw9uMdtBjHEzb5V1ScmzMcNo86WJQ2iwQApb6EKa3xWYaAT6nkRTwFak9n3rDTiaZhAwQ88hj2FN11UDMY",
  "key9": "3dmGa5Fp5TdKrALLM9vCURHRfw8VP35gtSEZWd4cms7frwhm7gr1m5xxyUiteucbKTQaQU7k149bL39jSqVaAESJ",
  "key10": "2NgnGQjM2J8jCC22oyZEdN5QUT3kduMAQLFvYuwKQo4anDCkJ1vQs7sUAqLcFM7SQ81jpkhNkexMBLbkgQubfP6e",
  "key11": "rZtFCR7iFLnzWZrtdscxZPT7gRvx3bd8jui6G5nLrZS4YSqTat6sgvNH7qYYX3LYQreLLxawN4rafMcjZKWeocU",
  "key12": "66yKY8ybtq5pqqExC2teTdWt2joN2DVP8LxufVADdTkGag9Ww7ZcaQVsPQZuvyfVZN5jcHPi8ChHRvk4MRK6A4Je",
  "key13": "3qAY3sJv2dSyPZWtLwRPd35P5bHy65e9LsZz9Juo9LHb59PS35yEJLLhs3LqwpBE7Xxi731e1Whf3E3hj9bRUmPp",
  "key14": "5MQfcDWtWAMTfFt5CvuFPaWBgfRbCESKSNNRV8sTRAmZKWgGdNZmdsg6o7LDeA3ky5Wa7JoYn9BNZ47jRUz8ouXR",
  "key15": "MwprEXDUXS17XELRqKg1oSJQaLTYNPQ2nmyUjr1AKvMoUMQ7XYsBi4gDaHfQcSrQFhqW9CUuihW3XqjhC5ThVp7",
  "key16": "2GNYWQAomERDQgYC5exmHCdVnJiQD4k2FQjAAP6MEXSj8MQHoHczVqKuiEEnEhtwbbZVUzRytHUHL8tnRnBsBLQb",
  "key17": "2jwZsu7L4cbPxqwXd3sSkLkkZUTdUn5oR6VLbwkWPKCAZ4HpG3Tq4k9mTHdtkijLsqPzoffpkqP8e1A86v2N6Mbo",
  "key18": "3FWSmmADMwm36T7s8ZmarAeB35adLDrwJQJpkk1r5atA1Wfs9r6caqwScgU3fJi1wRmPKLZeG6Z6Pf2gXS8UFaR7",
  "key19": "23P46iAiH1ANo5tsHLpPHutjWFaEonfd35qAVkMHy7ftSUFdNxKwE7wc2hmy6jZZeqkeWiQb2dT6ziCRbesGTY48",
  "key20": "3WD4kPnssxbL44VDZCTtD7MYms9Lwq1Ga7d8rfC3kv5Qm7VKbV8MP8nyovCxkBWyQH3nXDbLi2kuBUwQnykfG5Gk",
  "key21": "3sBassBmoA42nHA4YLX3p9qQhEJxCnqNdrsia3VztTeWDBPJYw3u1oHMgoMzyc5ova9JoJDpmo5wRDTdGU49m6PL",
  "key22": "4RqizgGcSaKeniAsU773SKwtsLqbVQoxtaMCbq74DZaVzxahCjT4SkxyjsMxWLxjU3YYdRXpyss2qYCjCDixHyxk",
  "key23": "2yUzS4R9Y9HqzV9rcchHFEhc9zhEoxgcn8YMeLTuComCh5gzztmmvhacYUdnQK4sjy48jseHE9ydzDUkyt3fqv1y",
  "key24": "MawXXsQcW7KXGKUFGN9HRDDre1UCMcLmUMKBCkD1aggeB5VwFBUQCcms69Ga5Ycdq4Y8xMgSKcueaUyj52jgmZS",
  "key25": "hRrYo2ZMomQ9GPbkhQrbBStLuSB8dpDQmYxRobCJNGrAroQp5fr4mE6J3d6Kd2zdinScsmtpDHzYFRQpxhwA8AQ",
  "key26": "55mzp3wS2nVWhMTrpGpmkTySFp8PbvhG5otneMnqLUis3foTWqk8s7B9GX54FuzhrufrDFapku2vg7Gvw4gAUGw6",
  "key27": "uesV7TnERJrrPD6qkfXHAcdBZmAiXEE4aCGMzdzuBHmqqrbDnnAs4LFzSZz4qW1ARwJnZL7rYCPpnou2QEMcrXR"
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
