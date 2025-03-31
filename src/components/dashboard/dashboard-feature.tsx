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
    "S23vTGDrNwDRsTVeoek82y9Q1z4thpPqU5nqjmdNbiHzEeVvKzqc73gzZJ84vE3angVn2EUrBvs541Jc5zDPio6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zfakqH4szLruUAom4nuKpP2kuQ2uuftpFGFhZterNQRjsYFUH3YsgLp7Nj3vJJsCi1QVht4tM2ouPR1xcBk4TBB",
  "key1": "2VksTcRrMVtLiDXdha9EhKedzLR4QcHieKbaNpgrVYKTsVRQf1ExJmiTqJWvp1WN2G5RctH9wNAGnefoA7TY3XzM",
  "key2": "49Djr79zXrjMiJjddqdp8ZYyzBNkPx4E97z6w26sqtA9iqDJhDpYX7L9qSzAGcF55SnrTp3NtzekkF6g4ToVRhgD",
  "key3": "qZ4zVcs71Px6MQAy5MAJcafb5mkCnwivzXrtD7QAvaMLbYN1iwirM9Gq2GhCtyZgAXEpGfohf97eVuRSJf8m9NV",
  "key4": "49UWaQF5zU4api4pTzAigQvXbbGhXmqA4sjivH8HHDx5vpYyoF9GVt2qWuUDJGnoWFgFb4AHeS9XmsxbkVWPGMqP",
  "key5": "2bet1Wwhg8Di7H6wUFJWrNqtKEzETjg5ZgHCSg3S7sB4zACHmmaQ44o4otNk6Fe1r4hiKRrcqV9r6VCqaacpQNCf",
  "key6": "3BnLJFzSnh3Tgvmoga7PGnr14CBJDwtbG2o1EGZVYWMaSBRCSnun9MoYusf63vWJWA9PXT42R7R7rR8YTU19H2p5",
  "key7": "4NpHJjyjFN94obSLRPB5oWe8A8cBnDAiCU11zpyNwaNqH7iCFiwRcbuAD1xBAhRQ7rjf9J1coozdSbtUkvGUU8zq",
  "key8": "2r52C6mUSCRd3EqjdK7DGsCcDo3XgjfRVqgRK3H5GAPiv9ekPQhxpN4geJY5e1i4pT1VKbmSgo9rkyNifxvy2u2Z",
  "key9": "64dKhLZY5FY4dLZSh2FBFtQuzsWCQrWaFKRdLMqLpk4rc4LQwa3A5N9eEjEG9Usx7Y4bbRJzZ7wUjZLyUQdSdKqv",
  "key10": "4S4tiE63iCQMs12rRoeLGAD7NnmE51zkZmDT2hD4455cPLvDuCVbD1tZKidxqjNTRaGYaHLm6HjiYeQyxQXBg2GG",
  "key11": "5RFsuhY66rWELrGDGUFGdq649niygxtFSE3NtHWRs7E8yuZQ5DnJ6yaqUseWZvUFBjRbpTBZioXMfzkthtW9CSUy",
  "key12": "61uy5q6Go1pRQNRvWbiNemEb7jNA8vQ5oWyjmsqzEd3YBWjU2yvs5PeXXNtq6bib6u7TLRY5pBKUgbECur1Bdhca",
  "key13": "2JaFKhWTv8g7R26o4zBvCvJH8tJp4vAnQbtx2QiNuNqgBGKm5rKZ4E3p7dR17eWWyhbFuyoHtauYr35vQAzXPyd5",
  "key14": "DeozLw5jyVrTYnej4CtPnmQZgA3bCuAc3SE6nkmixVfpNtaEy6p3CZGxHCQK3hz9Geau4AerGhvq1PJNcR6vsZJ",
  "key15": "3mzLb5vnq92ZhvF1DVJTSrW4tNmiYiFyarPZnVtHAQ6B9viPoFGqMF8QBRZK7FJksoa1a7EaDr64zHvApFTodXHL",
  "key16": "3yQbunYz3Q5BPvGMmwxTkUwLE1iKKhtuZqcbeAnkizW13VpunyWY9h5k2DKBFiThazWHrDoYhVjTVk1zUxL68Wux",
  "key17": "3Nn1mg6k8gucvps5fdz1owJ1aLeGetk5B8tGEc1xqZGZHxe3yNaHt8jNqX5dwwcCcy5UYkUvRfYSzYBvEMShJHze",
  "key18": "63tDPCfbfg3dv19XQrjYLzvgPyZ57RNmURbJwCCK2dWSsn8vsJcjLJnX7JAD4TUK94HzeavRrgt8PFqvh9ddvBaj",
  "key19": "3PTr4BnrZT4L2a5qbxXQhWCSfR41CEnWNwwkcfLL5axLoedkURj26TCm1B3jKJGCsVK5PnJaafrAkuTfzvWXeTG",
  "key20": "ignAtobmUVeaDY9F4ta9Cq2LzGozsx8GRJfAEt3ifibcL6gTaJCNLFprXQjm84GmwdcqpmqpJh6MF3xxM44eeJV",
  "key21": "65D38mbKtGEniFbKAYRPHBztgxWMRfsrtLWLooP75k7YBGeT4GRKjCwVnEDXzkYb8c3z32RAZfJsceR8iH4eMpqu",
  "key22": "29JR4D11zUDLSGJsYEM54PKZ4zswm8Qkcug9VK4abfNTvEF75kRGNUct5JuLv6HLeyE7XASLzhdn5EwQLCq5xt3B",
  "key23": "3dm2sCULHEmQJLHgE3g7ru4grr5Fr9oyayS3C6EPzZ7BQVKT5aqepak6AaqE11ee3vQUy1KWzagsinvB1b5W4SqR",
  "key24": "gJX8WvBuVQBHBkYivay2iEPiRh2t2C2DvG3GhEp9RJpKfXyQbrg8uhMVjcxEz5tznYXrUspnqhPcgADwUVFS9Bp"
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
