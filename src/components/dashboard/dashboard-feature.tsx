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
    "4hmKvSttFaGi48iG5QyU1qAZqwgfCfd33ukxV2HQPZWcc2VCGwSfxZ8n7nLVLz4HRLfUXCgZKyhh7DvRy2QgBGRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ojeK6vpHwXMseCMNvV7FNZM2PypKCkLH16b4YYcfzv3qpcpk1tVhi9p9sWd9duAv4NDiVV3gD83BSq8siTj9nx",
  "key1": "2qKzDWdKR4WN3D6zguDv7JuX5aKxisntPriNLXFYwDkF59h1DzwLFAqenEqrjLdAVbdSKn62uToXFkUz5R8ZQ5MB",
  "key2": "4PRH6XuAqq5QbUQCEdsN1iaCHrMY52Hqqz7grhBky4rjSoFsRd66nNLY1jUwijNmojizRWWjEeYUCH9F92ZLNoKh",
  "key3": "3g6D57KwCNjgYBbq9U1emb5wV1y9dq63R4TayBhETHxmk8rJQJiraJ2QmBgCHTcQUiLGkmGRoU8fsLGq6Beq2RrB",
  "key4": "5MimdyrRu6jS9pqHdUdJqmMrHwusebUE5dC9BESDo9UEiPYRaF6423vpkUTJdjFX7Bg63Mub1x6MbeSucPTRhpZm",
  "key5": "hLLFmCvUYPkP2dTxAjEoVg25rwqtfaSqtfCu6V7t5cwDiwboEXDPvBkSfnZVzsCtmRvkhk9GyQcgALhn4AMVxHT",
  "key6": "21V3tWGBhy9jpZTBXxMtEFaWymKEWzJhTq4UpcP7Fc2mLEyRsKdPkyrh98JqcZswVe7Sswg7Wr5JEWkf9H4G4Xbj",
  "key7": "xrYBqA7vBGeLhAUS8uZPKNocmDTchUndLhpvN4Wgd92mwdGasyskZExRzfXPCg2RVNCTFELELH6nMigCpvou8Mp",
  "key8": "5sm76ksJfnD9Bzn5zPu6CxrgWFPi9AEc5tQ43oFXW1dZEuA2mCx2Gqck92Y1UDWhX9RGBph7QtrTtjxexY7BuZNE",
  "key9": "2o9taqesi43YCCzNsSWHyewfMxSG1ByVhpJWgHJgm9yhHNrHYaibkdjswKS6HTuP6v5tntEkgctjjKgcZvNQ1PbD",
  "key10": "4ux7H3LhZyFvLUnyyJ5uk6bWfCGqn8gSeRapqrunFvVJm8AQa5gwFc9hSCzvphxL63vbwuYC97sqhm9pKBYXVrgw",
  "key11": "3YGFrsVVPAtRij6stp5sujzxqBqS31zYpkD54QfwAbfVSjRwdvCrCwuoSGKdNgtTU9BtY8D861gUVzH9yezt7LFp",
  "key12": "5sft9QBrmgrxT6ECV9seLVneoAhZN58KxPxhLfbAtcgKr6qnsAiiU8AkNJDq8s7o2D4brGYF4ckjr5GgTCQi4XBM",
  "key13": "2mGok17pubWuyvwMeZNTnERqhffVqAeS3Ky2EZKMuCd6vrK9UXx2dg5dq3mrhH5FvLJcv6Bv1DZsPhhNkiJFGK5d",
  "key14": "5FYx7JLgLiPTHypEqZF1ZexUd8B8Jz7JjSLX6HicdtqFcxLjsaSDvghCNPs9ZzWXR17pNRcJAWGh8R4QdeJdactn",
  "key15": "2VAZKxhSXCV1ugXUQ73dJvD5DqPfP4Z9qyT1SgRHcbuDAAXxiyQoGkwAP4VxFFwrbEjZrrrAkn3neS7vzUnFq77k",
  "key16": "43h7LCwZxrarMH9ZgUDGUdbgKT9uhCap89LYUxYUfbJPi16gGRCPuchXt2xf9T2gvhAV7X16rjYYk5UipHNiU9oy",
  "key17": "2KviRVfqcG644hhuRTs9TEupWFRhGsf7J2qrCaHm8URTf6PeykGKQee9Sdyfbq37caigTtHrPSD7SmCfkbBnGirJ",
  "key18": "3f5A8YoigtkdhKMTRyzM3fPydyT3W9avtFZmp7GoUnqZLB398HiENdbAzERMtroS2DCMvemYy6qAw6fyDEhMZmSu",
  "key19": "4D1EdfkoxMw7toQKTP5DwMnwzSY8JXv1cZN5wgJGW6wvAn164zXuDKHAEDBZiaK3wo2mAPzAgrhgcZ2HUrw5QmGq",
  "key20": "2FcEGZh75UN5tYVs1RS6sdyQ8gHbTd3JDPeSo4tLcX2aPeQVHynsyFswxrXGYG5x2cTgSBJoufEtHy1PiUccFKYm",
  "key21": "3q6u8uTtWtdY1w4pre2MbRrntPYuzvX2EjSQgK7VU5bccqFbLkHL8aW3X4KTJt4SND9j5NYkCpxznu6hZVdGpQqt",
  "key22": "4GPbeU6wBimhaV8wdbm9XxjoVQoxLpWcurfTQJF5iTLTKhpm3aMnb56RwvooHUjL2ugLJ2QNWaCcCjQht65A4nEN",
  "key23": "2K25Me7AR3s4kQySSW1WU5ac8dqBv6gfDKXdi74Zr82m26Jt6qrmQpSKevopJxWsDKePAiG39v9QbVCrRiRKN6mT",
  "key24": "5pczpnhwq84TWPtCnNaJMPDwT6fgz5KxreYpAFDaxiyadfeCUmLqxMcpmjfa7BJ9BSgyU2D36oye1zG2TiH8B5aw",
  "key25": "77KJzyJgzSUYAf7rDgiJvR5YjGV9te2GuGozWF6ceqCTusL13YPhVp55Q5aepwT8PFXFbx3QYVaD7Fp8xiS3bUe",
  "key26": "7mPDqMujQAznpPjFMmM7o2eMKdvrzZPZMnRYpxkgLPKt4g4dQraT14FosRFerFf2LQD3npQyoTZVnoPP5CDDQzE",
  "key27": "FtiHYnoCaPymYvgPcwwGoqMk54GZY6QJ89JPStTkcnVGLqGvLcfwD3ZbrnLxKVBWg8AEofPhKRf8XS9q8MEdGH3",
  "key28": "539sQni9UpZ6ZaSJeVmwSZ4mF5aPqC7EG6upyZkHozEe1K92ThVP7jR6HEivq46s2g4knEYYVoQpB4yBMgerrypx",
  "key29": "2D8ijrU8aiKfm3QH1cdqjHbW6sciFFw3pWSqH28z9uRvws2Fkk5y25ohsZwsdsnMzQhX1fKhgLdi5B5R9Mgx4EkP",
  "key30": "629AxEqzXLJMb9szukt5JzmbSN7eAprdSWPV6ERxJYrU6nPvZg4YU33t8ekmzKdtPZsW3xEH5vGY9wcoitMRtyDV",
  "key31": "4n2jr2bn7c2W3nvX6Uq53LsA5Hb6uMTkE6efR1aqt4CvTqfrHVXo23g2a5a3wU2soi9cTPdKkbBmehj2rPXTtLDu",
  "key32": "Z6gsCKtFmBaY7dxxDyzSBEdc4jteaDTMFzfPVKiVuNnds9Vabg97VDBaq3LkCEmzvEBXTzLXnvuTZkyPcV4dkkP",
  "key33": "24bkUpBhuhs6iZzVskLwH8MJkUQPZgdZMLbBz1W7UGZa4nRgjaAw7YmKmpiPruqRzJw7hmebYgLFBAAKcQJZa9Di",
  "key34": "6m2YPig9qB7ZNJG5jaY9QMmhu2CJRy2CCMHTuHMKjy4xBy7SvY8wnMBrv348Hh1FtDYSBESJwZ3QFEKHxEYM3dU",
  "key35": "2KPSMpWgGvv2uGyNkwZqH6izfkqa5WbgRPTMjjGYutAdV1R5jJhGn6jvYoQQK8TJJWtW9FCbwh5kMb2rLGUGPeHM",
  "key36": "8WbzLdHoQFyBk6No7RhnswajGgwCjBHBpp3mdN2mjJPzsEQhCaGE4XubffoLG9UETbCZVKc9zhXhx9hZx7HhxhW",
  "key37": "5tgv21udoSQXveeCRtiY5w58NDV7qDSaecbLEP1brSw8daqKXXeJScsymqAshwpN4ho9cAKubzJ9wt4vfDVvLhnG",
  "key38": "5dEhMYP5AjwPPaTUxwYkWKyF43PyiHvMp2ZQU9QHh7jdC9snpaM5ZLDyKGnfncouA1FdfSyJag5F2MytwjeM2sgt",
  "key39": "3cTpbpvFjwuC74SZU9noai6rrydZThWa66T19GAFU6sWd7igQunZUh8iXtgNerCMs9Rg9bPRkykgVDYxCRbm4Sxd",
  "key40": "2NnyjisTkgcfJ1gsnSa1puwSMPb8wLXh2sApY7ZVqVAb1P85d17X1s8kp69wSXrvx6dtjJ9neFGtMMeHQBbRRtJn",
  "key41": "UTRzzhqwJXJJgfiL43XyysyRc4mTbJB91BhCSrDAHC7fHPXkpYA1JXjDu4zAW2b93fDGtd8nnb69kx3eqZ3P9rm"
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
