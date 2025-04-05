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
    "3181apDrVT7JNw2zE3aCwLkF3TudMZEcXirx2yP2aHnSieJsFQAqhoQbQwprS2AkQq7oxTYbBwakJyYyJNp5X4k8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yhAYc6Fw6P2w5Vc1exT8bTjJFF8tM7x9Pand4RrYDtaMTzdSgy3zjFvxuSDbaQcJVJ87ST9hL6UcbxwpRRcqWcL",
  "key1": "53yTCXwUmRE9TD8aM6qxEv3LTKtppEmr644ASqG9Gr6BhKMEvu6CoUdb713xpRwPaUcBUUsLA1P3quZwQhV6Mo7H",
  "key2": "2Sv4a5Th4nJLX59BrgvRx3dxagS71mxhdr6BfiitZDDBiXB99tkhMoKJ2zpCpraQs3DJgpB6wiWfrkKaPxJhuvXS",
  "key3": "43knfvb8sG9kJvpkcGXzGmZheZrSmYeMUestdJJa1mmhepomqDpiuhgnQycPw2mEKLQkSRhmA67KmTjyHgpyYFWD",
  "key4": "3kZLgPSiYpDZXBcT7RVQ6EzV7UyZsNQkffy75xzMcXpPCeQv1SSNqhdMrJHo4mM4ZXUmAyk2PvkCWKEGWiLFJrZr",
  "key5": "2tkhoeCAZks69qDayun31wRYy4NUx9EpL8nfG2RreU6sJveLpX2nf52z3Ya49M52kfRFSQGwvrQE2CNSJCTS2zEq",
  "key6": "GU24DS9q5SnPyEW5owHmQ8sxYSFwbPwvs3xH8eT8Hmyyt6sea9VYREfdqdWvfDjAeXYoznTxVYEMetNaT4rMr7x",
  "key7": "52feS2Rqu56RCU7RStNtZsr1i47KKAv9PN3xNSiaYtipX6YCUHPDVzzwWsJvjuNMBC7YQUfoVS4sEXU3TDCvaik1",
  "key8": "2f7uYRxDVvqrsovMs6fQyEveM1WsojfSMu29X2pwXNg61mSfV6vy9SMzC7G8XstGFufXTy4WP2EkwY3iqtzG9VUp",
  "key9": "2d11nywNbCYwobpod3QrKNYRKZgx7xjztJn63fk3vbsyNayM4QkFKsivxU8eZXoEQwYckzMQoiFNGN4sJquPStUN",
  "key10": "3xxqiAp64PBhcsD65CJEXtwFbEYpYvKn5jrhcZEEMfKetZbupBazbTPgND5ZbW6ZZ1JkzfmGMh2QJ1z4bvGGLUDb",
  "key11": "54fWDLDjiE5H7xhajasRpbKqbchk8k5DpriJ43ewSY3AtNvwMGH75VsWxnKvTsajBtnWngePPSA3TbUNpbvj7XQv",
  "key12": "4wW4274WUaTSV1bQSv3VTu2uxTKzk83vD5PNDTmQd7M3Yhb4DLQZwb2AzemhqfP8xsmnwNL1xwfA2tPPJe2PYhiJ",
  "key13": "5P7HphM8Eb9oASuKtEVXNDECy4V7QxHTnbDeVuoCfCyApUpGYgj2F4HSzwHQhdjZjp2V5kDskgFaDMtKu5ctqE8k",
  "key14": "32NQzLa1t43GCjXUR86bfKrmDTMmzoWXmxEpTfVPHsnnTu6JoFati6U2eWFE2iNpp4VtnLQEPz4hKcMR9otSmrwz",
  "key15": "4nk3LjpaY4xU7FfS2PWDJhFmPpqXGgoRwNtJoVsiai3KziiCfSRhyUdWff8bf8LCVUw6vtguUrw8No4VYqrxed4b",
  "key16": "25ARYGenaywfsMDzV8dkN6MedBy2zXC83uU7MDMSfb9LYqfEkk2NqZBT3PBdXjHixQQGozNvCGAtZrd9G4MfL6R6",
  "key17": "3JB696XefWJBTiYTwikHMV38NpBLxcEscjt9K6oqiW3jfMdRRJkcDpLAwPwx5AzuNrApi7VuLLmaeUGEX9HLwaVg",
  "key18": "4aCwKgERkMTLQsBsxr8SYzwC57FuFsRiHpjUmYgpEqF9Fnw3RjEcnjTAvww2AEDTEm1rWHxdDU9hwXTxCoVNGQEP",
  "key19": "4nJL9y9Hdp8Qktd9YPGXtU2sjrkABPPhT4bcJv5En2GUdPpLneuwu3hYy4YP48QuyPQTdx2VZ5bsa5e8hJTKiTGK",
  "key20": "gZXa8eQgHWXJBxMPR5Ebdj4D3UCDaBxaKqkc6R6o2VBEo5ZJ5dtcvGa8PSyqod1xHu6KMpvYP5PPBxckebFnDPA",
  "key21": "4AthzpyJUYMEHmW8Qfh5csCgz5pKz5k7FFNcUm9QD4QFyRxchbTTaVMpBMjwg2PMWwrWLSXBVfhqkDwizaXTTv1B",
  "key22": "233Fu3HryoZ5qtuuL7ccDnGYXppUBKmqsr5r7ouSB4mrL4NZv8unD8ZYyrkFFBnBpmy7y7cgfxQYZ36aZVnT9Rpw",
  "key23": "2A1511dKPoU2Cr7aeHwfCHwsEt24Adt1rwXzEguwaosfNKZ5tnpzxZ21Wa7pELvXChVQTvMXW7Kwbs6WXiw1xYb4",
  "key24": "5EWFYMKasXrR6yzUbvq8NyYjhtfMTUfMkKhKkXJPjFzwaiXAe1PAwdJoDVMSKVPVQts1ohLNkVt6QYruGLTTy3XM",
  "key25": "2MqaHuokxC4RJtD73HkakVW8VXmNGg4rhEvKEeGR7ePZAaQmbScBMkEE66XajMSXedhKfD7ghXaqw7QQ5WdvJsRP",
  "key26": "28CyjjY3RfabQFx5GdtZkapzYG9Wt9drN8w9aABAMGUbUcAiqXj1RhMojZC7SSEQFcdg2aeBCQXufdxjVCJVi9JK",
  "key27": "5CsQTV6M1CLCeGWH53sZSb9C1dzQM1eamo7i4NwaMS2Nj6LRAhxtgSN9nsfjwFN881KgDRj3H1nKy1kYjCQi4Gko",
  "key28": "2X1KyUv2QDwTbRwBThSJ3f1gezX1EpTVeyVhfDeN9Y8hHa8RAhwyNRXzjmh5VfxAwoAu23DjFBuL3LjjiZb3VWkc",
  "key29": "4YNugFWGN4Zxnmz32qfAeGeeenJKmDHZbE5PjJADuFA4vVAe27ZwSgYtBkDSY7C8YN7D91Snd1eUdPAmwhsD3ffo",
  "key30": "2XpdFE6EQje2fJiBbebwmWWWDMpDSBAuhn5RPxSuDvrNVHmHN8fXjqRUraBvoq5sJND1ZYqKK6Wppcmw4G3NDcGr",
  "key31": "5nMYYYLx77eDDsgLeMSuZi6yLa4FTwpMhuzqQcduL75iiix4DWfDWWG8ZCvMsfi2fVF7rbjkrXcYodgYBUd6ka2D",
  "key32": "56kFWmnuGFMqLNksHFBSUBTUsEVA2AbfwLCZbrtmCqtjjFqmnhqtdccfshG8CyneMhDtvRa9EXWnYbHc9iLz5T2V",
  "key33": "29fUaZZJJrgjT1vadfLkKj2ReMqDpiLzKA5wES2mzZpVFRzjgBADzA2MhcSQof2SE5o8xWyfiDeeArWqVTPTtia9"
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
