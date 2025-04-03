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
    "fhw9NK7fDLqZJCCQQiqN5F4fEGGLzzSDkVCfXc9EGdr9ALsLF5qq5ciq7CiqHmkNvKJGUwhQWpBDQYoZoP6kL4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Z2ravsHmWEP1HQLeCPCCnmnbmgSCidYhs3LMcj8Mr37HLprgFvJU1rjKXC6orj6MNAsyG8jdNMEeKu66HoJqVS",
  "key1": "ERFyC9tZfLahSGA9mFbXuo2LnvMisfbzkYEr1654FqFFDpobo1NNNReUVTGwDQmNRiViSjBfMpw6m3uvQRJJyuZ",
  "key2": "S3nvggcvP5ydEUCJBmzGMYE4tEuJxbK8aFXHyuyLvQY5tcCRirU9YKTM2emFxqs98KHYM52fM9QpXxQHzfCUPfU",
  "key3": "3BHPbno27eK6QUXSMsVTgFi5H8C4LMLMJvaAYQfxZMTg2UNKnRTQbbeicsKvyTZUNjTRa5RqEdFCvbaZ7ZVBYdvH",
  "key4": "5PXb9CYwVN8X1aeade2YoEeBLDqDq9qVPCnPjVJaUU8p311voN2g7nLeKs6LmypRmuQasNL1QxLpVHdnnatX7NU",
  "key5": "4MJHN98XYbvJANfSN4mPphZeLArSeCa5fJzbzz3vvuiDy6RSgmFn58P4yiiae6BYQveF1Z5H3oqirjegnNu7nL3H",
  "key6": "2ryGp3ZZg8U5F27fDJeLRHNJUrRD5zQqEUDWcpPRau4cuVd6oNc2LNwSKqPs82eKJP5MXV6cUjtqsYG6b3HiQjMM",
  "key7": "5vAJWavG1VSs3EpRiaqAAZHwAaRz7Dx584kDyZQcWySz9UJnU9wvAfCDnoE2qkUhQZVQXF9VGt9rqWXvXL6Kdzua",
  "key8": "SAUCGy6X6zWUeoZCRfHogueL67sHxfvkWb9TpDahXsbfHyR2TH6M3kKe22BKJzvtCZ2Bn3sRRfjYh831LCi4pcJ",
  "key9": "3w1pNQbiFStYwTqvA7CzMwFctePXzhjRhJeCmy6ekhcfaAbRy8YsVKQeh577yYg1g3CP3qfAJnye3sXuELS1EAht",
  "key10": "egoofcut3tCdjWRqwcFd4pbZxUuvLpWBVJPpTuaRAfMvKVBcjMRAvaEXcrRPipQW34Eq9bKmAvTu9S1f77ASzSM",
  "key11": "4UScGSKNTLUojWdKPSMFGuv5vh5gi8QEXoH5wLekr5hswewcfwxJ4nCQBFJEDYBxAHHg7qp3JRYbeciWJXkQ5fkb",
  "key12": "5zxRnW1S8pgV5tYiCZZk5pMBebZFp9nsczfQaUAVK8SssTWh7rhPpvv2UzzpNyeEgYtYib3njZRyj7kLnrEyosU9",
  "key13": "2mgku1fzczKwuzfBB39CkGP65GzBJn3SMnre4yVzn8PKF8RshcJYiLGkZJVdHNhkQf55LDU4XvZYLjNR6V1ZjuPG",
  "key14": "3ssfgF6U9TKKdxYqVh7oxES4Hq4n17Pa9zA9ny6AU1brHg4cJDPPJT67bLjamGavoxqQpMqLkfDiExw8NXELxMRA",
  "key15": "3nyCya3ywQZgbqh1PsEqp8QbiQQW3pJPV3rsLeVZdvE1P51SQiAbCYX1bVBZgGymPcbUDys3pf6ZWnWYJy4xfXzn",
  "key16": "3m7rgnq8o9J3S6u4118zuffTpYrJVQRb4pKLUyKozbfii5SpXpmMxTPKCCkfqfYoRxnBhoFGrJayUdEiGia5kRxm",
  "key17": "4NCX6Wx5FJxrk7uQ3mXNDtSYGgd8gez8fYvhXByCXf9vA31arKcmEoZhZZWEURdySFqr6PcaYe5Lw53B4x4hc9sx",
  "key18": "5S2tHAVCmSXUKjoSxUjFJ7xu7b4hgutA1EtsyDAks6BD26SNNRXeLfmdFaAPeGMFV4QEjPesG4ZtkKX7wcpD7wBe",
  "key19": "kbCWohiCPSQynJsiT1GVg3sCRL8q8ynpcny2NKGtoyFs74j7Xkety2JCxsRJK14vF8NA8HmoMNxkQAqPfazDbUz",
  "key20": "JqiVhdkPDUwWEGEopVM8jEN2ofcC3gWxurz5mGATBoPd3hnEJu81fSxxK78b7pwThzNt6VwZB7BMRDcVX6q7jRm",
  "key21": "1AYai726vGjF5Pp1ALtFQvoiJmkSqMBtmXRuPeKZwsneTaakVGgKwFR2aEFAcMoeMBr5ByMFTAXimi94732tMj3",
  "key22": "4iV4VnyFyXwShF6BbezNwb3u16E4aLAEUcymZDB7HSqH9k77xa5SWvvGkXomVyw9o4zSTy75hZhYwN79wdbFbv99",
  "key23": "3p9EBsgMTK9yFCdvMnMN8FQAvtayUWEERE7hNM5QJBykBYvLor889e4qfwmuGsm3z5PggPQdL4YadASmvwVEDTXy",
  "key24": "5vcPzp4upCgtjmhFDE6cbJXG4YPGN4v3quRT3oYJuPBBVXaz1ApypGuAtZnoTBUmLJscf4NcdjJar1f8YJhXPS6d",
  "key25": "5qmtKUrnykcMp1Y5f414EJ1Pa4T5W5e4iKWs6yGA9LWCNe6cwchMrQqUQZUvtktFGRFEYaMYKSf9vcdWgHLBqoG4",
  "key26": "3yfnKzWw6LLAL13L5g38AEVYnrcgHrbGnBMwkKJAp8HCFGHk2FGMfqeAN2xBxhRuc9WyiTabVmENSbS1P2T8h8qD",
  "key27": "411HxWd6jBwWSw6GkgT4c6KjSADcjXbuJvBPRfzg81joda96qSLz2MTG13EQzNacsGJpM5Kd74BmqNBw4Xy5x8QW",
  "key28": "41rKraL7Kpcsgr5LcRA3bHhDD3oGKPMsE6nzD8tK12oj3t2ztWbW3wJEBVhbmzmxXcNgwhTwt2ApeAmStyQPBFFX",
  "key29": "4YafRWij41JYkRBiirrBGazYwjcVzqKY6qBXiXxf6nAaALVg85Mo9Z6VDkRrd9XtXe2tsaNF3kqFER4awmN3JM4h",
  "key30": "4kTyRyxokkKrm4jfUDAZAEDw8BhaAivfUHHWiJ4LMDpbjJdmHnUgBnx1E2BaSczSNQXnFcK143eY2nGsKw3i3Buo",
  "key31": "2zEVEUK5xEd46jtuFzSdY6DHckreAxBzMhvU91mr8MwkCk8F6sW3z7pv14ijjB3cuzY9Yriwt6eRPyGHBjKxLnsj",
  "key32": "5NFY33vYebHJJ5VEmzvo5Up3RLwXkGtiG6rDVNxLS6nqC3DHAehWtWNAo9qSy1jiBYonz41QhWxy25wFcBYm93xZ",
  "key33": "3pEyB56CPoPK5evWWfV6DJyhsVTUkG3BAFjRKreo7RmkwSkM3LetTbkWbVjgVrmcyAJSkfVSjp29mqzAw1phCD5x",
  "key34": "vWRLYyGYkipP7mBJZvv1G6utJ1p68wtRnVBkKjCjQ6XT1hijN9U4sErDqwFEzQX4bnomFA5PKPPYiP3VfLPMFQ5",
  "key35": "26mQRQyYGQ9MSKECteVZqsa2W1EdNMvKi7c724F5vtgZBMmuddjX2WqsRqpBme1mdvx5qZBS1wRsDCE1fshiFzNF",
  "key36": "zQMue4T9vXhCfUPRYJkB3EhcrEoagXcEDXJECvjL2Pg3DfqEdP1TRwp9KGwHe5p1tXkmVuDFjxkeSsdQSc2XKKB",
  "key37": "4126aKxdLxsYX1ttjwoWDtXayD3kPdLrQtCB97P9FqvznqHXBKPDvSfA4KYwXfhnPFSwjoQkrdosSVLMnLNRXLY2",
  "key38": "BwvPDPQbiGV1rTqPY6MoCUgrZLchtz7kTn9YBrgpE8hX2cFtMTx8DsoA4Dj7yDWcoT6X4VZkucNBjn2WSo15ey7",
  "key39": "4XWvP9fzNSvUyjv8Q1Jjt1Z4kaAJNzBRSRGr9eynJkwQNDGCh6NafWVRcaKSKXvUB7TvAja4hikyPPrSad2tLsiV"
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
