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
    "oV5bHUaq6LbuvWr2LVLPzpCP1y1GqHsj8WXP4rSUVDhHNJCkwrPVFdcVQ2DcwmEBJnvgN8yaggrPHe3ZTWguXga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLUBJuNmk2mQEyEJ51BHXwUjTcJcQqqLw9ugDybXprA2HXmBE7AkXxCYfwmT6fef41UbMFY7uYkuCHoSU9azfiM",
  "key1": "3ewhWYfqLANsuSLYAYdMp4pTh7yMWdk8Mq2M7k6pEQjAPBFUsLCUChP3R7GLmHxMdGdpD4eVZgEUCRjRbStWJMZ4",
  "key2": "2QYkoZ7x9Quk8d5V2AMUMbpZdePGRGA7BEtXneraskZeRKcBfifRFqgmAPNtDCk8PUF46MNLJbXyehjnSSKnfU8F",
  "key3": "4wTgpJsCA2neNFXH5jMfGK5d9LtGHSQ8hsDTJjq6yN2oipqabj8N1XVaFJxWx74zA5dR1D92VPrbCTC2eYwEdW2T",
  "key4": "BFjmuYuZejLB6tH5dXnSYkL7V1MtEvts1NegNahXkQyJZKJshWQhYQekEmMGkADuA4chtWbKEa4ZrhLk8exPgeK",
  "key5": "461dzhTtwDW8kb6WXCKBUKSXKHRTpYxdiF5K2yWPLR6mzpzrVbbqBGNnE4o8vGJnAehQYMdmWRsPpbkXkTNHPHEw",
  "key6": "4ULjB2gxg6M3CMhsZV6D8BedQt6aAFj9nsdZcJe2o92cbQD5MothGn2D6HW71wAonWNe1y9sBaqsczvAk3AV2Z3z",
  "key7": "2pFsrkDAuuMgtWJR91hLYzYvk1pTcwajJKpUHqMKsLvrkfmUEeGHPdC6MKFQWRPgwAzfYHDynjM8KheCwz7Rgb8Q",
  "key8": "5FhmYpeHckvTFo2LEFzdY9rdog8xdf1pudhEdQCMwT2C3rnFsf5GViFxpqvYMnm8yVujdMExwwQQbnKX6tjrrysN",
  "key9": "4L8XMJNHtXQPrvGTKnGZ2GUAUuqKr6EMN31sUJKJsNBPbgqCkKsEE8Vg31Vh6Ge4L8XpaqtxTvRmuTMBwWdXXFYU",
  "key10": "77bMUGeEE1fxqbDodEFbNFft78GdBSQHVjE5aUFJxXh3vhHkaSzBkCEquCjm1RAmHks11tBn1ewNChEJGf49aih",
  "key11": "2bYg7P9RWqkjxCkaBez7iHpGjsXL5pvKKaUft6tCfA7XRqCokLxYyk7tTDxcjoxfVLdKxTKcUco85ZxoytcpPkby",
  "key12": "2NGXmHwwSGMqbR7Xq7M52srb6bcbnXdkAtvKyuHpdmCTgQ5NH5EfmdK4kNXVGDsyNei6Lz8RMyZvbg2Ygp79DQym",
  "key13": "QYF3X8FTEJ9RCywdGHQ4G63H1FpuPagL3wareJoh1KJE1PzwxfdWsBeHQAzeuuBP6GkT2FDpu9ftQyxoaz2YJZW",
  "key14": "33W6ckAkkSUuNLeJhtqWuTNuWDv2SwSKneYGm6zykzeHNYMURPwcTcfe2W2qUxLFhRuJRqidf58xZ32J1TkDaTKs",
  "key15": "4t3SDFQdUNDBdLzbATJ3e2nhzyjhgkTzUgdXJamVRyqQTDA1uis4rxwXcVQAo6fTJ7k5adpaZcpQQ7UHv9irVCqP",
  "key16": "5Hd4eE8zhTbbMB4sXS2yuCY64uKq4FwwUGzBCBJzQpMadVZqWixdriSbuJwDeMNmDtdUxU5U8Y9ZQgGPmpazd2W",
  "key17": "5VqD2DXF11NAfBxGyskQ8J8DyvnNnKDvG7YZASg1WUzipfjY7EzwU5KccKRwox841ALNXeQ7jmefxHFKyNvJwM5y",
  "key18": "52y32EdWxSgGGdAgBJwQeRrmpG2WETBinnvMnjkjKjPhUoJiqgXj2kafH3jVqfBpaaNdA4neWvYipmjkNRjeuVyn",
  "key19": "5nkiaCT42pGLurYwAL3dTpLXGa1P8ccZLWYWkZCZwryFmAhS37YwzzyaTpBooBzy62iVZ1MGkRdPVtmwwbPcuZFD",
  "key20": "2N7vdAiq2AfbWVGihV3GPRL1ZyptHYndUwUFVjKe5mi8DCEpCGToXRqAiQSTCxVqgZiKBmvpV3BAU2ST1ALq4o5E",
  "key21": "3HseP4jD6oZingHT2jpT7RdbfXYYgCaraZf62415KPgDGkj1H49oufEbgfua23SvTjaxJuxTpf2quChP6mdwFjLS",
  "key22": "4gW6mF4xKNUd2i7DziBjAnXsPcMhp4aHy7tdyFefcCvpxaVjJmW1pEk99vqkxzqyr82D6qbsCKfcn518bdwrpqGs",
  "key23": "EzPrn7XYDrWJ8oeJeGJ5Rs98cBt8fH3eJZHk14g4voWABHiQbnHHu7cQgJADpn9e7uKkHA64QV5Rc3cP34LSjXt",
  "key24": "4WST4BvCscPviVNidjpj5aBL4tuwYnHivwPnj8niH7KUkrrT9QGU1HHWDZz2uNqR31U2FDhoNm2KervYSyE71Kjp",
  "key25": "3pEkq1kVWZvuPShmWo7QuvJskVSWq67YWQTiPMJ15jENeg1epSAxcbojzJdfx1rdubwwXAmy6iFzafSzCyFTGhc2",
  "key26": "55pihGtwtxD4YeVhauvr828ov7DzoLRtH8gED3np5sPweP1obFUng2iq8Fz6P2rmSvJdP2WXecRcoemfW62Eud9T",
  "key27": "5tF9PzWFEubFTb2kXrCAxnDWsArsgiC5kQNLLfiAPWVQbQUbwLAFPCGubkRbqBLFGYxNj7RtDqKK879jFtDWz1AA",
  "key28": "658uqXeYqrDpvFXnaoSq4c7AEw88C9F3sBsUK3GhcLgNWvaa6MBhxx7w6861WvjLqFtD1uFreG7ryeAeSQ3r8wRC"
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
