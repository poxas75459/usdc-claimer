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
    "2RDFpxETXeoiQ4jZFfbGRAsmQXkwxw6BK3kPziEHYWUx3Cu7GqBHZdamM249rDxqo9P8n6vvQMFMD7WdDAucioaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xT3sdBrsoyM3LukTkuaoiHyw7eABUru64TRZocwb8eiUTDNajYXjYn5NgyFPZaw9f5xa3L4DU5B7zFF1idoems8",
  "key1": "56ji57tyW7qfzKuZSTx4KrPNPG5MdNAksjeZKFiDcznYkeH4h3G1Q8Xnv7wDZ7knN4Jxz4HPbdfq8ecFAx5okogP",
  "key2": "2bWVAAchiuHi3eu8BkoahDgGuJGEKAV6k7v97ZQVhSS5yJAdGCn1d6QTJQhAmteof9QXdHCJRXEssKCtkQ8bHHLv",
  "key3": "2qDbjFAHPxWfQUyUnPsA9CA5yRRZ1crdLvU99RAJCUQJgzVsBZwkjNHL4P4Y17J6VsVLRND3HmEKvgGmgHcocWNn",
  "key4": "tdpEzaKoCFTAvLxA55FzRLUgpkLRK8xkYYhPcCb7kCvi6PQx1xvnBVB572JdGiYz3WhqbkkeKU89krqmSKgrPEY",
  "key5": "5Kax2mr8ERQu3yTHGusX24Jw8R5bQEgPKz8HrQ6UwSL9WxXDEumocNnZKqqZ5jjrPn5jYw7boBkx7oe4z1W2PWEQ",
  "key6": "5ezcwtCdJcgnkSfY7gSdusikFD4mG5CPx91QXT4z2J2Z9ymR762YKhWvHSCtrkjDy3oCfMbxgRV1yGFg5vYQ4og8",
  "key7": "3bpzDqd4pK89Bimdm2YSEnpAshm4onTkuEwAAq5i2nUeQF1o2yuwNVi7y9qAsh1wyRq7uY9sN3Th2yQwCfm7gXbx",
  "key8": "5Hcs7bm9rgzSQzSCdSbibD2Timd8bQEoZNkGAWHn6Eb6KsaiKu9zoRpneazcUXEenE81yBx6ryVCWpRiT7Dx3ewB",
  "key9": "62smfZGC3CBcq3k5J6SCWJqbqag7r5cePVbYJzkdQAZsubSnDfxchjJViRMyeKgjEZM4URCCk7d3ekBPintdnh7c",
  "key10": "3mL1RxX6do21o9NL9HWatSKCi3So6JtcMEDK7mupKLyX918z36uxRCTtvwD7oWHmBM3i37EvRRhz7MFF6VGSTa3q",
  "key11": "5z8oiB5Px9YP7e74B29xGQdApvjpazrJ65CzRAYZQ1ZJyX9sPPWXpPDQYPDuttZkGUsF7nqaxM1X5AKZ67b2VUCc",
  "key12": "3Hc66LBrqPRQ8hGZ5LGBYAeGqiKAZgbyjRD1fXgrnWHZ9qEMeCvuBq9kgPyi1ZAyKwUGGiRxtgviEt7wufb7Wtkw",
  "key13": "36swtd3ii43St1wZQDYScAsSJ298jkNN8SQQLcXuJTfYt8UNf2iG9ee7qxyAPUaC43p2SV7dCmLYyWqDvSbudTdY",
  "key14": "4v432wjEhnNFsKDZokPLLAe2R1DG8HQXw5D1wLqcPxALv7c5uXmEJVgv5dPdcVhtKUePEikzo1wZNvYxpUdDdDVG",
  "key15": "2ZxgguGoa4fwSPH4TXZCoByGin4tdgL8PCpN4UkYXhNYFY5oxC8QVghGNAoG4B2E1vUxhRh8BRpXkiHoow126w8a",
  "key16": "8bXnQ66ssC9tG9STqfetMD9YEBe4LGPGzFnngujLvYD4HVNQWpi5rPug6chjBZcriLmeygzFFfHgKN4TPmJNzj5",
  "key17": "3gL3ms8z4qguRMPA7rYk5UoqEvJvByt1HWmSAfUJzap4BZPRbndsFLXvcd4LUDg8aN57kFUZyYJZZsBXiFt7Y69z",
  "key18": "jNdATVDDiQkXiDb7gFgX2h5wYKFa3vaPHtQ38mndKRjfL4EbBMufwYnJT5xoM9cGw1Pf2hbEtYBe8s9ChPuGeAg",
  "key19": "3cY6AydscHUZt85UnRkZ1fSnyyBfoUz59J6bKS6DMZkbkdL5QgdCkca88zrRL8zAg1D6wdYYxYMgcLWCpNpdTH3A",
  "key20": "4uvzykWPvcjS21BGzGeXtKDMyWyBtbjFMobzWzURBYkhwMhuijRczrYuQpStxNaXTdM9EmLyXL76UpieX5aer6rz",
  "key21": "5K6cqy82g2hriN9QYSJx6gcYvsen2FEuDnT4HxBDVEJqDriEontCquPYuSagErV5XKtNtbygZHHNpnujmqGB1DKX",
  "key22": "5Kt2X3nRpBev8wpNoc5ouxJzB1ewkJoDXCWJ6NW5iKFotbgZV8ZfuxqeUYTYcSqu4kNew5PdX4at9DZxdBzeVs6g",
  "key23": "52fjnw9C9BBgNLFA2Lc9B993AEaTojom2mgezLQzTnnFqVAmYG5bkttqnXJHeLbsubXC9gatZEKyuBY924i9TySQ",
  "key24": "5cJ1UnKcasM3PyGVXXMpNedkjuQV1pET1EHpECEpubjfdsrMZ9w4iu22tD73Vqnsgg2TvbAxtQadTSQ3LjotUCe1",
  "key25": "2a2PpQzombsXLcq7g56Y9ZF4SA7N7Xn8mxd6F3LBzUuEaxQRSsRBdQWmbquPRAoY3t4mv55RGuS5wXxrSaAqKLyu",
  "key26": "DkP1FLyDRDebKFVe3TZEUWA8gPZkqHuXUtusXHB42GG7ZFJCjzWSTtLPnnqdVqeiecwKtmTc7U52MD8YDrmCzDY"
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
