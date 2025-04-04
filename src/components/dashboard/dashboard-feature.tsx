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
    "5WU6HEZjkhrDCzrb9vj7xk1EuQTPziBfJYBNoL8VdxiFodLeoFPcQrwZGjv64n4V5i8CEwc9MLuiAhALyGpQK2eE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WzDo7YYuro7B3jaMVD1JyHP4CBJeNW6ef2HM4TVTXT9VE34FHFSqh7JswSXdjkMhDj5sifJetXDyNVBp8xiJvRU",
  "key1": "4UQvpS5x1cnE6ey79r61Sy3HahuCEceESLsPcBXzkco6CVGJ3K6rNu4ye7u8VMZkLuXyDguKU7JtYJQnuBd2J7K8",
  "key2": "2qEZM854bZoGRCXhsWsyGu7yNxdspbTnCe34YTf9utQp1eH4CfkjnBjqUyvLoUwgHvGxh3T4XkuMybvc7reyHdLy",
  "key3": "3QnsuWHbHGY94bzLVmMnwtZdBKH1U7BxEW5Ne7JgYZvRhYr4RcSohH5wWnZt5cUhiEaocCNczeXvW2nYgvA9Bv3P",
  "key4": "649qmREukQKizDMt9XfEvukM2UtCoBPMmfByfLPvyh1hHQX4ucfamxLnAnbmDZXsFUMg94oKfhPGHhergXT5cc71",
  "key5": "4TkhnZxbocK4WisrZ2iyhxjWiSFcgNtHk1bXCB3mJXtwo5sqgepw2g3fzELka76kozXrunp7VH6odUo9BXA7FjC2",
  "key6": "34QKficPMAgXscgoSH7fGNkmTBFn58TYvCypZCKMyWwN1DrNHHw1AHv5xjQSbNoa9oKLMBGX5Sd2MFUbezVRfyGy",
  "key7": "5Mt9m3zAYJsTHNnwi1Dffcu6nt887WH8PYzDCe3L4kX5wcU4nd65swfRWFdBeQNR9mhn33PeiJZeNErEjwZkTSwE",
  "key8": "JXhE1y7m7JQzjMTb9k1xdTsCmAppsXE3zx2zz1dAVDVoreQK1W7e3oN6XsWhQvhRvwFtX9PN2Sm7AkyrExkTriy",
  "key9": "yxiYm7EwQD4fNSg4GALA91f3CtEMYoXxhDe3Xr4t89iCzwPzYQqeYA98Fdfda8pfoPjXCt6V1ok5oqm3Qdp8ZEV",
  "key10": "3jco9ZJXn7gk6NhNZJxUTEPcg9PdY6yhkNowz4t1h7NMM3drEi8KtBD31AsjXaS9UrMPetcao9UcDAgQ1aLk54DP",
  "key11": "34Qs61E4tnxKydsEiELzmrKTgWvrpPEbKWpQQsVecJ2n2pTMAMkUQfxECYNEpouhDznz6bsts9RWVnGGWvzvcVTu",
  "key12": "3VbR6aZ7gjzd848f9WhVx9rJbgjxemXHckD7N6RGbjBipiX1NaVAQfnmbAco5eAhKqF8ExSTNhMi77AKC3odgPsQ",
  "key13": "rEr1xAVR7SKzTvKkbWpZ2Kwxh9QZDhD2ykQkUbyi8PQB4QBmiiYF2AMJe6b4LvfW2A4VJkiGjShNAs6Bmp5dPGP",
  "key14": "HF8cZwLSFXFoA4S4TU4WuCwbuwcDpByJjaJ9baAgDqbrDM7gYSmWWzqrbu4UYUAA8Hd8PyLaw4gR6iByhpDh3wR",
  "key15": "Wjz9TXXTTGdkURrhVK5ZWWhQKJV9Zh2XP5ZbLNLi5qb1fFrPrqvYoqZY1s8STfVtwNkRsVr5yxjMW6w5A2ZgBsV",
  "key16": "4BcZmGN7wjr9nfwxCTjEKDXNdkixMhJCNN1v5DcG1Yw7GcmonJHVBDXXQ41eJhrty3VcGBsSVV1DMsNQSZzctv66",
  "key17": "3hbydq4QayPFn8Th89z9BARo6FG3mk2BeLSVv9HsjD31ugaDG2UwEajVMAcN6EYU23bUxUYirvb3r3Yd6iNCRmF2",
  "key18": "T6C6Ch8cxgTGJYWcarajmyrWwapaHCULG2152H9diCFZevfLfsxCQHJhW6ohgaoMqUTDeNH5eonVPxt8PxE7JxB",
  "key19": "2XoFTb9BT24uPKb6xq1VRrTCwxpXLTYG1K7TMDhxEaD9zt8gRfmjAD8mmLoCC2xoZN53wrQgV2oG53NDySopjC4Q",
  "key20": "4b6oE6Z2if9JWKpVT9Q3dAgnZs7kKoPQWHfehULvX1qkU4GC1FjuYhrzyt7WUgr1UqqxBq854CHfQ4ePfAR6Nb3D",
  "key21": "2wu2fZXXHvtQzR3X7gknDy3rnK8HNihbbEdLjni9bPBodGZv7KHjRBSGSTHafwfL4cx39dr6dNNS4bxJwD2o1qLB",
  "key22": "3H1zctTEZ36shuFQfdDuppKCM6eyVjHpu7fgBxKY32oiwzvgXSkSRKd6f1MSGEFQQbvr7wWLBWGNBYggMyHiJR9F",
  "key23": "34EyyK1vxCZfPFA1hsDvUB7qtQt33uazYN86hXiL7tv2swbFPtvYfjVrRbUQXgGxssVN24hdTv4ncYiHjWmUJeTb",
  "key24": "4YaXNSBrgW5kgHrdWbPMsuZqnUfn6FF6U1TvmMz4X8PFFQfxp6GcnqyqeKWv7gxuRPraDHPc2Uc92HtgwE61HyvX",
  "key25": "F7QS55VwozTSeSeARtPz7vp99miMCcE8pkUvRGzcH2gVTfCx9HRFuz1FdwHkax1hKnoGmi2adzQT7ZUdY9ktLLD",
  "key26": "3vaJ6GFba2HfnKknQ8mPHyi9dzGqJZRrBbh8mDLjLyswduR3EdCbTkj3dfRKUeHiTrgSQ4SfsZZx4r3oYPZiizNm",
  "key27": "2pdaS4eb1cr5PXt3eMpqgM6fBRvhQZzRENdmHBkwUwD59sywu3xEGd1nPZEESBkU5XihmVkGdvEf9TitjarkTGLA",
  "key28": "a729nTzkhWx2FvfxSaQKJHZF8YwiTeRBc7je8LpjYPAnMGehGPQ4kpvSc4VJzfXUnEs8rqbSpLGXRT5awsJVyYj",
  "key29": "2ewhvWy1eZxjPG1xJCr12fU1H8U1Rc7awTEEXEMVt9YhgD37h8MP8MLx3o92nRa8qQx6StjabFoNBdzuo8PA9dmc"
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
