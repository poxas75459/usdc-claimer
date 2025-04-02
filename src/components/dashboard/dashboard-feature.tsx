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
    "42pKi2k7cGYS9Pb7cXhrKCJp2HqaQebJHcUztwaXUcrpRFWnrGDE5kE8GUzFpW75fhLo4dhSZwNvKAusXJZhJBRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q2ZoRWB22AdMLvh1dAVcjVCjb6wvTQqCYQySj4LVPhXC427BxRegiH6FgHkkJhgRKVMSpDbUY42a2bADjTJwWVH",
  "key1": "5w5eKgBWG7KJErSrBAANmX9xtx9nnGbqqFuYQYSSt2NYfKK9UrHh58Q9KKGkSEGC6ikD6Kd5cb38nW6g34eznE12",
  "key2": "65QVaJJbRimo9jNiqNEfiPr6SpUQBtobtDGoGCEX8Pe8k5paBRyR2RSECPRCnsWnjQj81EV5TGz6TXUx9KrZAuya",
  "key3": "2ohyCJmKLwQb9WtEyXuWJDKRYccHMpi8PSztiGxv1ha8JiEHsBZZh1b1RUFwGHZyBUpqq1EvY5583f2arLQehK1K",
  "key4": "5nNf3MaUmhmbZSCFvYeg8zUdHgasHvZmMGMJRZYPEqx5eED1C5mFvtx7ySYUcRDTywNU1dKB3FvkXVxSiNfHeHru",
  "key5": "5tcUREMvjNzJGwnMEBQhAX9rU1BYBsaozrFfV1mkFSYE8AAtsftZaCV4krVyQESPD2DAR43TmNcJBmFSJc8WVMN2",
  "key6": "rXNWB26aUNrbub9ARwHFG2LGSBuTRbpRBv59wBDkmknENJa3xiKvnqefQMzdbZWpyfRuBqnfP9ZcBo2f7RyohQ5",
  "key7": "2LAv1QXEcbCkBB8sQRsg3wYhrMWCQLKQSWPGxBLU6jnrRaQ3rQuVjSqfCvntvHwZMNktprfQnduMsTwCEgh1WfXR",
  "key8": "66tb8KzwRyzDfMnJTPJGxkr3iuKnQhqR6bzzNHdeFSfVcMj6rk6Dutmg1X5y4FkAZpDcAXefwECV97Sw9NP6x3id",
  "key9": "2iEhrTACxrDemxKGhhF9bzqnvs5Tw4femDfjJ7TG8jATpLfFFBwN1oC77oxij22C5VLnuShr21AYPcLc5fWks1kv",
  "key10": "4WVbCmSHqXomE1bvPQsG9J6p8gDqTpPAz6AG3puyScnQdnm3WgEXe6zs8vzEg1nsXyRCxE7Lj1RSKzeeYXiKqJZP",
  "key11": "z2jAS58S9HbCwS1N6brgqJWXWDjKRxzRJiLgKnJ1p3RsRTB914wdrfY6muYg2FLK423iBQ4TcpTd2gqeabGF3LE",
  "key12": "5h5JeuxbhStMUVKacdvsAZcVG8zCKBkeYSZrez6t9MVPzZQXvNHrnDtuN39cAcWPk4kFwaAGoojUVqwRazN1EDmo",
  "key13": "3WrxbKZs38fJRtiRChPFrUDGvQMTJi9Q3yMvVyx4mJkHwvPYjchf9cejAT9D35s6CWHCm8rXXeNBd85KNXuvtMUi",
  "key14": "4xUpMzMJybCJBQ7Fex5f4gSRdNRN3wBuGXHbB1XksHawP1x62Y6tJ2dyw38uNDk9MHooUt6gfQpeGj7DnFX5wzzi",
  "key15": "2yLq7rUDbfB3bowfdskevRZDgPV3uCy9QSHnnhmz5TaQGeyHQgMmYKwgaL2ip4H8F5mNjB697sMgUPy7AW9ycTHQ",
  "key16": "37ZhsBtpokx6bXXHKvhxvuAFHi8KtFTuAMiqMa52F4fqFbcQKcaProFy1xE2MwouVsCMqDDLwBCRvFek2RcHJrv9",
  "key17": "5bhcVqWkVfhLSZqdDknUJL1JfJPpz1ha9inMcCpi6NHs56MKSS4fBjrLTnDtFZfN3NaTehJXmKBghyjZnrboWiKj",
  "key18": "5eY3rNje1Si528SdFdcsvQtrM9wB7v3yXuCwKW7MwwGPPgAAvYp7SdTTmB8kxNykFgQAyRTBQshC18CE73jYqb3G",
  "key19": "4A3kKrgT7nBKNd1p1FDw6kKW9reLReQNMtTPqFWVcmWppU3UEbtxwnX3FvLSAFpAYQNxgsThmNYgdhHfWZ8MyjUY",
  "key20": "3PVEfqZRfXPzVZXdsjecNQCBYJFxtEU4fYoSSXNKMLEPkpriUncberP4mo5sWLdLoMKyW9thCeKqP7cM2RgPTxLh",
  "key21": "3P4gyi2R2jqPh17j13J58at37H2dYiG7TNR71kBwS2ffUk9pVYdGEmt89XBX5HXRHoRrAnqPW969JUVDgYtknZ6z",
  "key22": "4mz46XmihMNtJkfwVfbXLe6JrdEnTEZT4YZLVXs3YhExrkTELfDSaEyeAvqU6wz5R7zgqKzg3Zp71GChi29m8giZ",
  "key23": "4EjoXSXhL6LsHCrjfYnHLdSkf9sDr94HwkvCgsc2rf5tRAqN4Gv8NnoCoEujRbqCMxifbiDmbXkbicAFYQymUNMY",
  "key24": "4vj6kDPiRpKsUivXJbsq469koH4YGbP1wVUjxyGb4GH3z7cS2KWvXvGkYNLaeZcRVywd37nZTYiHU48VRwKYGCcd",
  "key25": "5VyahCgLFRcEAJvEmZkctJBkVVFc8FPo4asQGiavd8qKJBgBdvaQ1FK19fZ1uQ2qGqFqpmD1yfhU4zafmV7XKcku",
  "key26": "2wHNooArBkAwGCuMRDBmVFz1pnPujUUnAK3xPMnuB5aUEo7NdgV8YpVEFA9ViZVeDGsuUwkBCFpEZmsh5o963FbB"
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
