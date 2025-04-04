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
    "5UCWYE2jpMj2cvE35sU4ZjDcvMSS76Ts6ghJucSDDq36evpMcoowRTe3qiQiXgVu1i5z62McQJ6RyfmN1PxzXfFC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45n5LszjXMBiECqcU2Gq8BPmmVrtgvVcBBvm5M7BaBCdZAQYJ7aR18DhV6y58b7yVvF9SzViXPvTFnH8t1Hoabxh",
  "key1": "3uuNh4M23nR8hwHKy3CkamxZVUTeco1vqwdqKYaM2tWf7hsHkN1nziFn8Aj3mWDzPcGJ5F2aLQSMEKpovyBBw4fh",
  "key2": "5kDt5S2idvKwjRmexaP9ADWmhpnxh3ZR7bDyDAWPcWCPLAYcSwk127q74GyEmkXGTpLqkctZ3gBjn9WurxWBLQB5",
  "key3": "2mnKAfnLjdsRZATaHRQX6GoXEDzZ7XcdEQ3qEamuQ7kHWNWJJTnB46jXktm21mpsMEoinNrBNsggwwqYuX4reaug",
  "key4": "5CXmBihsZx2rR3FeVyKhHw77cdCqvkNUTSPj5Yne7FRpYxYyKAqyMPMmPdzn8a8paeBQQfiH9nih3LGm1pY4FuxE",
  "key5": "4bvxaNzPHWVd77aCmEUfhrU6LbzDG2qLXGf7Pz7tfto5LvMmBsMSJDZhbAqJ4bvTkjtg4NA8MHTQd1qXfWCMBU7i",
  "key6": "4MSdDHi2gEzdyTt389dDr8EAnxxJxUmXcPiWSWMFD6fVhs4rZ4wyzpJ3GRjfY4aiQ3AN4y6XDiWb1wGMtCu6k8N3",
  "key7": "5B7MkR2huNDDJQSV7nYEmMq8YWDGF15SRTXbuEamUKf78fFDsdjjdwvR5PKimmL6Vd5BPuikgC26CTrUAfwUxUmT",
  "key8": "3tmF2JWqPEmmSj77kZkDxkDca3oQQTwQ4c7zQiw7wF5ubhgVb7y4P5gcxGTmoHoVCXLNge7DT4A6acgNX2oG4PyV",
  "key9": "3bRnNzXyBaWafNwc4XiKK3fzRTcPnFgrTuVHEpzSRrZfgKPFTVvAPQXsfoBHD9cq3aerjEnXsa3qveNoHwAfEtBV",
  "key10": "2K8PizGLzZF9MAKXK86FicjTv76yabvMq7DuQqpETK8TyKEjLNMmmdNgU47QhurGyedpFn6Q95R479H7BWpSD5Yz",
  "key11": "3bFh6iDU2GdJ9sRiTKLhzFY27wyJrRxZ5DXTJ5Yr7CT1FoLG6wzhAfyCvwc8sMUSYrtVdNsxTrZCAfZ7P5QthA5X",
  "key12": "4wTMXtWKFDxFq71VW1qNUax169R2qdQJwPZzwLzELuM1wnJcFju8Cpz5V9X2MmhhJ1cwe8UU8XF6mjQJzDTtgDPW",
  "key13": "3vHEwQGou2EYJ3BjfMKBZvaadptmXtqeDke1L2gHnbq4P94GYsNZUxz8FE6AtuKVF7GudTLgWHL3WgyhVamaF5Mi",
  "key14": "318aHzJ1bDVD3pgGFMEZ3xZfop3484jwFe7rZCbPEQttmEDGCXTmtK7nfzmVQRLH7tjGC8RHfJcFptyZuSetD7ZD",
  "key15": "9kDHAzWPknoAzjKb7u1ocZekZ2zxhKESBfhXZpcUQCkMBqq6JZgaGKisV97DwimH7FhJU4g9jrMHu1qkW6UTDr2",
  "key16": "2A6mQ5aaCmdHL6zeZWhahAPh18rYLyyPacBVuTtZAbgR9fx4cNJayMsW68RQ6dd7uDRyuXLSRUzsD2rwdReBBZme",
  "key17": "4YGqEQALcuyRF3NSDiKy3QM8it6fvyCetQANheYVfsVkEXNV5YiDBekBKXBr7APwN1wmWFuMma7zajugqUGRNST4",
  "key18": "4picfKaKrgLMmarzZCpgByUoLeimidTYzsj5VqmVcnrtRjSjAs5CX1qY3ooYobegYXwDVR9QAfeWwJJ8agtwk5F1",
  "key19": "4r5tfjY3TqwkPpczK4cU3ZGfZpBYxoxn29Q6vmmJoAqfcEs4YDrbp6X1yHbeiR9GahCXVHwfHU69mbpkoT7vU58u",
  "key20": "38b5XEAtDCRqHLqtg24S46Uux4qaQ7LN1RZEN6NKSZ5VwFgtqc7C9fPhJfvRYwUEdNUswZbNKAsi6V4Yy8zn1dT7",
  "key21": "5qtxGnjYW1jRSbtUgTM1ihusxy7JBT3v1qiH6CZMhg6LuYYUYymmksuBJ988QRggG1Tsn71hF7CBHE87HmmUQ8sK",
  "key22": "5qFb1Mg8yWXCugkcSaryYwbRUaurmAUs6raVc3N33EDETCHQx2nRj8iPY3YbXuYAdJJfTppfkHX2S1iV8XUqhBJR",
  "key23": "5V6hKm2sK8qdJnFF8JVH1fVyMTEbTTYn6N7aFDjZ9fP4uoC1ptTVh5tiYanKx5JzTeeTr26Q9hj6bttkQ6DpVaFi",
  "key24": "5pAM45F8yKSpyarqJQUxcKjEhqfaLWvSeAZkF7BoeZiKSUGPBJBrSKeYzYA2h5ra1ZMdNFmhKwKGJKbphjfuDTUt",
  "key25": "5NhDXpvPNbhKd8arKqwuYwrGv2hZ5Twrn83L3FCzmz7hGMcwzB8Qaxe1rcV9KEGELYBfw1A5jyEmLemBHNVbbn4X",
  "key26": "2Z3pXkQaYJgoAuhzA3Hr2bdr1UEA3NEkqECj9pa7zECkXijZkWeTVLexxPNq4NBjAbCDv8Ey4xzSa4NfBQnZy2x3",
  "key27": "4Lofcp87B1hvuFVSkpHG2WQzTNgDa59YKFA2d2dEdyyzZf7vUkc1ubV3rrbSYHKka6D1u49c8mb8sS6LBBthsfqy",
  "key28": "5M9wnjX2ELUYueaKCsvnJswEEvGRd1apbvqp2zQhSTFGDuzdM6KyMgn1YBmcm2xNwFC7ygJuXgek5vVkKVJSZcVk",
  "key29": "4N9NzPujmwHmL34tvMCsHZ7dZf9PTYJgphabJK2f9UFYLcBfx8nEtcu43rKaxJFAFski8YKW5WXT58AJHMche6W6",
  "key30": "uTinxZkra332LRwYURwPcdu4bAAVu5x4GQQFyiPteibQEYbZiHdgt9xSTqvgEwgbWnJrf3JMzfWij1H97G75STW",
  "key31": "3FYz9P995cey3D9YUuGZYQrc3kpwQ54QzvZ9ZRmzzZytMHJGDhfjnRRtj7op7rMv1W4kHEL71cnDgNhBnUnFRfWw",
  "key32": "4WaB3m7oxSD8SSibUco84Xji6WcQvMVT3d3cmKeNsGBJTtrdWPCUu8guVo5WmWBVN6tEqNThZ5vHfWJ3qxAf4aCF",
  "key33": "5xFZyjMv9fePsA4fFpeTwhRbS7wgQWeBgQKA5BuPXqcuPu8MyG4ukaQx57PaN3iBW7UfGMu7jy2HfzfjsujSnyan",
  "key34": "3HprrsABjUcHwjg29ZqnnS4BT3xuzZVWj4gfEobZNvCSHoWCeJorsT2M2n7wqTGKhCeNQ9x2MVAaLHRbUyXuHieT",
  "key35": "46rpVimpUNAVrjv7jDYJY8GChgeSnTXB6YV1j2KucHzuTo7S1JiQxtKvKvRNX2bo4fjaXSYnCuCNjzGp7dMHYUUZ",
  "key36": "2ZtmiE9apr95BYB7HboRfbi3zXkBQeka4TiJzzrCvNXSTBpeRen3Wv6q4uD9qW331gjuF8MyLmnnmeo34obSCUHq"
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
