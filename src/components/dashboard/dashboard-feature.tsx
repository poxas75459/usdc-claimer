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
    "3PTJ1DzGDQRFb2QA2oWUaBdqUpJe8cu5Yser7bbphD1pZnrHShv8AAv1tJQSKddR8ytFvrkBaLnFWWQgDF8oY3tv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35tRG7c73g4N67G6C5zzDjJyZjSu51k6Px9ftN2YJBpsEBT3RfFEs5Npys1HaiLQo3iZ4zw7wZYqcAzKRi936MdA",
  "key1": "5BHvE23J3VRN9AvWSZrMGwd3guxu75Qu6vFgu46M8KkCXwQLpBkKMTU8chF8kfqKjGjArDfiVsAg4wyBRmLXzT7T",
  "key2": "hcK6RTfZg5rqPFdCZVBNfJd1u85MPyN2NZ2ZWecRZfiGJWGj5s6SBdER5NsfE73yKsfTH7oUBbg9ZtCd8VcpLZ5",
  "key3": "2AAyZvGo4EdF1GYhCJd3BArZhnFGifg69ky1dMYJJUWfmz3pDc1oPjfL1WxHxhMrJBWXZHucB7W8TVMKqCSyvt3j",
  "key4": "4zP425tya36GR7spSz6kmnd6bVm1JqeM8B8pJYdf5HfxHvcVxvRrjrUPQbUo8cjkG2r1KDyHpLr1atqg7gwfLPTr",
  "key5": "2g39TVDg9VTiQ7HNbYEhXFcaZzDDiqmLBnz45f69g9VLmnU2j4bnmPUnwFfbDCop12hhEVr9u8d4kGFUo3DK7Ldp",
  "key6": "67pYsqYt1iSh6xn1prkL5E1Kpe6ZDz86qbRw7B6U7S9CJAZeFvxB7yWxCSVJcoTHAETYE5FigxH9ars8nRXh9JEu",
  "key7": "2FL3LRmdVnfddWSzDHwUytSQVTmHiRvagze1a84bttRBB8wsqp9i9hnJBdGVUFpcPqwmNb4kz2EG3ATgAYPEZR8D",
  "key8": "32S2AHiWF5kjPWeF6EM4NAYgqS4kxEcfbgyn842ohdvKkNxFpPKZj3wcpiwdodisBzUnUQq1tSdXmifw4LQzuVny",
  "key9": "3FEqx6rnQ3Laj2WrnETozHgQi3rqJGNsmDKzsEy9XHdcRJLt3mPaFBppGevqsAGPVrwfhbfwdbn5yM2NrQDVzKqs",
  "key10": "4M1yB11qrX21DGGYqBp16HZaR1Z5gNFsMdeH9G8QcSk7ZuoC5Pp6hA8op3oYQZ9C76SFap5m9Am63erd3oBaNThv",
  "key11": "2JY1jEiLPWwUrvqCeF9goKXkJGmiKv7U1gvBXAf1ZvHSiQ5iEMHaVt1vfb6YKQREizPgbHFyZeHgKbKfokfy4CAx",
  "key12": "2fBupsgAskTGZEoNzhts1HMzFNNM7fLx4NpZzFW1yEo1Pf224KJ2xDfdG6h4zHPxVLdZKxEvjnKM4UuDouBGnSuF",
  "key13": "37jHHtuB2ZnQU5nQzXWd6LWfo9uFWyE2Vf4rETCzQup1H4HaVtyYjaH49hX345mBf6iiXqFeEh5VtPQprUQrm7xv",
  "key14": "4uzfMtVzT1K95Ydf76M5GeB8HsYqj91YHmVZYKvKH3sVSThM6SuAtNHPQzvyanDYn26aXjcg1mEf3u3HbNa55cap",
  "key15": "4yPGssqgRPUhhCie5ARNkZjHb4P8ietaKuWPsYmTEwECjmwfTqev8ZRpWoGDw4TWKTjX4Su3ihFhhpn3KXVtz1dJ",
  "key16": "3idYYyt8je42rjcF3NBXTYWSfUHQJyxCZBEtQ8yus9WHdDv7JgMMBW6unDsLWvP1PzzVw99rsJPvR1aMoQZspr96",
  "key17": "3h3t6weNnR5sDUtBhh2hw6inLQdqURD7L7w5VH6QYVEp7CdWZJ1Vt8qB771YUCpYhmPS6GH8YYDTx3zeabdpCUSH",
  "key18": "2Ev6DEaXVoudEpZ4ta6Akzsyzsf7cVHWWMxKa5xkiFdjz36rCV3E9dmdW72yW68RbaZihC8uTtVXAyw3hHmEBPSa",
  "key19": "RNVWya9abm67dPLPAiNTbtJ21yQoVKSVUxbU5cmymkPwSApXc4jC5GTgU7TPenhxmXgEiTRAveGMHQuCs9zDNMB",
  "key20": "2W64wD1npaeXxra2oGrMUdP2nGER3DT9HzUQQ4h1ecccZgdxdSK9kr1phEgHvaJCgqNxRFof8LCWUvX616uhJyFp",
  "key21": "4wJd2Pd4Aqjh3JKTJNeEjNLjXnMgHTxmiq7yE48VoxtyqrhwhhWZDCEf7WwWjqbDfqfdT4x3QMXiagGXwCkJLT5M",
  "key22": "arPp6QfRVu4Y98FWtaGLFETZPeiQPpjhJPc8Kzzb3P9ygwUdpHp8V1eCHQpT1V3vNiFzSv8bg5DxYNXaroJ6mrW",
  "key23": "4DhnFSV653hH8SKmeqo9CZPTLg5zw1XCGvzuc97hAq4GkTcyygeGW92Hya151NaunC68iuUVzoQC7c4397GyBp27",
  "key24": "3fY9d55Cuq5V1P69ftkRyoMw1v5D74sqtzES5pMZ58JwFm6EqRZ8MMj48rQB2Rcghw8aHJ6WHCnH7tzJKHi9uBDU",
  "key25": "2qG76or4sFfn87EmoeBSriSrZefDksfRz54CRLwvqTAJepRjtWLbp1Jj723T3QYBzYgjdwmjZjqAHaD37Sw78zz1",
  "key26": "43VX47bm4FdVSTpdp3Hqup7S9SMNv5aNMsmRDahXgZ81D6Zxh6rcGeHdULMM8YS1jhSMAxzMbngqHrbRY14F8rov",
  "key27": "3L8boq5wqPg6LzVmwXZfkigvR2iRriVjXLNY5dHDgR9MYtUFYUGmwTZqicSq4PY8ETRcoVYzvLcQrxzqLNZEkkHM",
  "key28": "3Nn34CA1GZ1f6ZtB68Gjh2yi4QGjrzfp2spDDWRhXLiwmaeAEtvNHMiQY3ti7RkApfmpCEh1Gi6ik9o5YjPMCT8f",
  "key29": "CVmFWWfmYtZv6ECZQhrq896Wap5CfqKaJf7gcAh6viuJ6RPPdPnnpbfrcHd5P5K6X9znEkLf9fz7YWnwSp1892K",
  "key30": "2cUdq4b9mkwSWvvFk2kNHnr93FfiBPFQCdESLNwihLS5XDViP16jLvALtr6auMhFy6PSqQGJgaAUcghxTuXTcTGs",
  "key31": "vHNgbkmgLPcCMtuqbcAFRC8n94GgSmrjoZUuuiDJsi9N5m3ZxFb8JECe4zipkSdttAhCkeCU94XJWbfc3C9YReJ",
  "key32": "4UqUqT8FpJL2iBfCoEG2f6n5mHKSjdu5DByAK5JRLrNrE1VBxwQCUzENYpEG8S6a5FXMwiRNDfKukPtsd53SKYiH",
  "key33": "49cWZdJj7iD6r64T5FzxQ4uaJfPZnHhjtbgaas6L7jSiq1zD8w7F8b8ed8bTa6Mg4V175rHivUFpAwaEVCMQhUVw",
  "key34": "3sYyypADqKUNH6pQGzFP3eW55vDGUNSb7nBSMstnp86BeTppCxoiMvGJyMowJQQYvFuETbet9a8CXgWpt37qyPsq",
  "key35": "2MGhhExURhqwiXugGSx7eqxPf7VpxRLCAc3Lh1YhyKPQwxH2Jhu8XcfJj7KZauwh5ooSUcYaWYoveN6GHYhzQqJn",
  "key36": "W2FsgGsWt87vmiyk3AS4Q1gbDRLBFn24V32mqHNHJciiAmf6ubZg59xhcpvWgSfoVDs5KL8pnBCpbETVML2hPEp",
  "key37": "moLMde79A1Tr2qo94bWP8VUC1fteSTUXwAMih5hEAyEPHwpmDJrGHTW5JRN2pBMogUGaJnfvSsAKtV7fYtyGwLa",
  "key38": "AoDgHFQDntNTHvRknbjH6Y9WYQQbcmP6HriDwnTHLvovhYLXRc4u28teDQNyhsniuTzK3U6kov6gW8odgoZa28X",
  "key39": "55r8XrEYFbS66tuU3HamfK8ur27R1hPKrHXSxJQarpxhvCVwTDqGsjjavY3EEmzA9QqcoVDSKmTB6b6m4niurSLh",
  "key40": "6MtofutFEKVc8oaoMWkPHvMD8DSaGgYQw1jF9vPvzVh2Bu9JjP2dRwShMR2Dw1tmGgXVAenoVtTATW98QWDzfpW",
  "key41": "2ba9rN8jYuLmy81G7rMzMtR8rJho2dmcntYzw3nm62ApME7LmDpj6AE31M5bw1Pa8nojEiubdm3JjJJYRjEhufkK",
  "key42": "KtyCx7quMqiqz9LgbDF25vhea9JsbBZ2YQx6fYt47LBe2nKiKh75pJ5e5H6884L3jZTFdKcbxvBUrrUWZ6hJ93k",
  "key43": "4h5yyjPunpfmkyJwFLF9hkXXw6T4VZVgUJ9f4qSb92GYbj9cXr1ioJqEFFqdMS4rmRF752ELGZqP8GCUCeck2jba",
  "key44": "nvd5R4d54jdk6v5KaDNiqxrHmxfTkcMuDcmKo67RYu4zBsoLbCggDHYuHci9pVKA5k5gBQcAvNC5Mm3aj8NNXL5",
  "key45": "2FAGhg58oLMbsGKEkTN2bQpjkUZmpzjAAHCBg2s4Qm3CytxV5jYS7dnYE4MvFjxE5WQvJeyhBxbkSMH4TdsjYf92"
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
