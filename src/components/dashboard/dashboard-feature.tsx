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
    "3soUFgJRhfpVekcpy21eKV7s6RmUpY22x4uVH1ABg1RkSGQsvq6RRBVvBYVcSq9YydVCx3gJVtByWbgfsRUmTN7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnoFAL4ntBHswcLx4PEJJb7pJuxvoKLPwgcFdY3j5bnfqDzpb98XyXWUT6UJMTfGCumpVraD4WnTu8RDVLHkixh",
  "key1": "2d2LnK5r7umsck4ZiS8bs9XcGbqJtaaWf6goXwd9nGBKwt2vcPB8v8wso9JhWbCwGtAWfL7JzqJRBKg5LTEzm4bT",
  "key2": "4ayZjBWTf2Sa9sGZK66Ev2Jo6UBqg57epTEKf19BJLtBz1qy8ws8FU87DpRbio2p569cvrHiSbsvYXqDg3wf49JK",
  "key3": "531myniZVipt8hgd4vYxuJgdGvKsk6ffron4JaTKaPpa8tpSxw5GMbD4kqpgEsgqjZaoAyGwaWWNLFp6RNjLPrK8",
  "key4": "25yh8c5xJazzBADcqmcEwsqkXE8GwRihcCDs4BvE8TrP3wAFdJURLo2bRNsMLh6A89cnD8iJeD4Hwc5fuE5DNEG2",
  "key5": "3kEKmCS5CELUWtAWaQ1zLdCPuPR2k61Cfxy6MoVL2JcZQZ8194eDLGC8EJ93YRp1ssY19pxojrbH65gGKnthQ5qJ",
  "key6": "3SCE3BqXKjGWd1Drd3Fq4HmD1TC7VaVcZbKFTGyA2ggDkYu2dJaRh66KAZA3ptYgZ1uKHyrdsYBQ4Wg1Mv7guWAr",
  "key7": "4LjhxovVXMuW28Hzo4VEvQQKDbxJXmGQ4SW9gyX1KXkZk5jstFgqSbQcosFmgcE3LYb1aWhdQMd7uHPcFhP1Z4zb",
  "key8": "YrSwHaZWGe3simN353Emba2zsWcVuy44uW1a8wCjVMFWmLKkp3yFk51267oEdZn1RuCGFTEB8KDJgouYatpFDai",
  "key9": "4qz4X7RKicfeAgqC6hmRaBrmAdwVpYCppWYfow7tRGmBSchxkNJWza3KBx2CBF5Q9bSKwbmGTXJMMc4QdLHYztDN",
  "key10": "db24V278LxiG1ETgRxJzfo1Me8TWdnB33i9X9qiMEXCfTGfhQrzjcC3sw1PzW7KdDx3oiC7hExEL8X1CQWVkBnd",
  "key11": "LVw151tqVThSeRLTxgUTrHjxSidj1SZiS6zrUwaqK1tuPacAQZcpXN9566MPLX26Qu24MhtNh2wCL5a4wBCKYfZ",
  "key12": "3JLHwQfqBUzVUat4oKLSCfKg7c6RRB8sSsHtz4k27wjK4xhYyt5WY7KSwnoPtXqAueDnQXp4pjhLBuHfgork2Mvh",
  "key13": "52QBBq8mGGkk3udtm3ZYByvB2et21zpfbyKNh4qmNJrCHJr5gvjjPVmta2i7pGJcbXpT7UV9HQuxgLT8hU342vkg",
  "key14": "2vwy9MdJhtY5tM9rSPk1T9sEHEJthZRfZdUc5Tc53P8T1ggNTBvAHSFxauA9HKmZyngasJK9jk1NBWkTMDzVBgGX",
  "key15": "4YMrdR63b15NVmajEdbM6fJnBsXKaGcessNSj3gDokBLei3jGpE1YnrVvydnnJHC9hQSa66yjo64UuBnvNgg42tD",
  "key16": "QCPpSALcjUBxNrXnEo3nFxoC6JSmdBkBWjinbfmYnZxPscKKPCvY4qLQN3617tNDR8RcCr1ENC5DuAfVsDi5Non",
  "key17": "5JCnFHbMrMvgxhu5UWW3yNbkfPqRhXY4pm7ycuZUSZMYpyAySS5C85apDh5VFiJAVQ5p7KjGuZv75fFJToH1FeC9",
  "key18": "K63J6LU5nQ4HyTmtwjWkv6rw5GH6mgT7hsLf88ePhksEuiG1MRePaxhv4bXWm7B5jABqY15qRuN2GqAB2CBCowg",
  "key19": "5nYh97Js3Jij3GKC9GePMVbpRuE22QeosfKck8w7NM1Vv1bjCvjGTEoJrBS1qdjjLo6q5eRncVhbAd9SZneVnaVc",
  "key20": "5ukvXFpjDm1jnQq5TsTfDqpeJApGw9pxAqhQhu1TVKpvSvgs7d521HrJRB2G4MoccN9f8EbmtS7PkL6BrWXgV8D3",
  "key21": "5ci4c8HmN6dqhirjSz4zCraYwwCNj1xva6DL1KX7WnXy7PMcnDcvZSnFJqUv2BBadYuR1CCwuFw2r1Vq4aRh2fT4",
  "key22": "5i8om7xk5MX8dSMAs2K7LTvzJXtXZrKoKe9Uc1XKV7KnqM5RCJchnCgPkUk5XQ5c9qArff2cWL3UJPMYjxe88k4T",
  "key23": "2W8PFz8wvMF3ANuetWo7N6MBwrZsnm3xnNshdzh17sdmRKmnEgKdygt2j1NdQ782r9KA12jffSYHTTVgA5JYCBm5",
  "key24": "2xeKT46aAVGuuxXjR3idP7sqd3pnQ3EG6s2KawVXNqhZx7HMeFjnhcjF9CC6FJbe2ety9gsP7pErJHtbYVkxGDSs",
  "key25": "2rdpwgEgVLTLZpAdFvtiQ4VqAkj39Cjhu2ZzKV6frja7rA6N3ep2CNtaQ3sftALua8PpBLsmEqYxj8a8R5wk9rob",
  "key26": "2s3ZbvqKz85rvo7pH4LLduga1a1qbF1gUBcicJYn6Szqd3FitrRPY4vpyZLn7Gn8Rrddvmh8gG9aSDcsqQnyKNde",
  "key27": "4KztmB8KUudCvGKaKN6R4tmdzA9FMmK7LeGKmAzoVbtduT8VVbdpeAckv2B1SodJ2Ftr8vigQuL2DX28RnvmhXEi",
  "key28": "N1aNh8u5rMwDDNXdNbhkjkz2z1t5PqhpgRHzFX1EnXeJ7xf5EL1bPn6QtLKuH3Qet3BRdPBEJhoHnEVPK562qpq",
  "key29": "BF6TXsQRFgYZN6fVZPt9RYxWBKyzWRrv4ewcVFFBmANUjLuJ8fT4FFBVUFFjZUh5Vobyj9muuEW2z6NMHavm1LL",
  "key30": "qiv3AU8ELaTUGYWNbkFyFnWpsRvHB9n5DhuYNphZyYoAQmzf7P3hZrYaB2A5Q2q9JWWPKmKX1h7pigvYzrhXzEw",
  "key31": "5cc3Qavx1YCGmPSgnhtTnPciGZkFHqho2CXNTTCVfLKHy3BPSXiQVfiQsvCumMnECKCG6W5RN7Ud2bzAYTYunQbr"
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
