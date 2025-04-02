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
    "3YNRtD7DL6L1wkx6y9snbWjDBWVurFqFP36UZqFwEjyhcbQLvyjsmYzuCJztgnVLsXY9QHK6xffbymLtzMfaXAPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jcFd6CThr5SnuM4XqfmhhYEbwHGviRKaGPZTRzRwvfsooi9aRo5VESvwEdHxP2DFi93Dpq2uQt78j4ZYjWi9jYd",
  "key1": "3qJAcwxreVBSbZ8iSGw8KWRonXLAXxVQb9QTUBQfWtvGJaiWhqtappWCNnBReibXrxFybifmDtb1MCFhGJS8QpgM",
  "key2": "xiq23LWruDR2W7R4X5so2F5i1Qh2uKVSkuWiCQTFdpHhR5WnQKarg2wRbtB5J61usWmwoSrTGrreMb1Vs88GXv6",
  "key3": "RETKWigmGtf7AaGzUWHja1238fx5Ueuv63KJfEwQVpqNuGUPsSeAgwxrXUcKVHTFQhjPp4VF2ZkGHPk3WX6XkFx",
  "key4": "53VYjHnMTpXN85A236s76DNVQLdBRLDMA6ea96epknLi42N33jqXjXNtRSEKqzQkZjpqakUYGYygDUmLa9Buriks",
  "key5": "5Mononm5vNbvkEN99eBKUHx8N8kWwsgxrB7oCeKBjrQPjk4jcqdnKSHVGWKiMzeCAcHt4TSjoSEHbsQsFeVJJuWX",
  "key6": "5WKrXMmrmLPm99R5UBue1gW1L8P5F4ZLLPAgT6gYpLdLXLRJN7u4P6AteaESZRqehywFW214NwfH1DfjUCDAfs8h",
  "key7": "2ZsBfbkLLQvMgf9qDB3eXbvT8kR8yUjm9i3Ci21i13GuUTcbrERkDPc91sSPcTpFfsDUzipAncq4J6Zqp7scbVEX",
  "key8": "4Crc5QxzATyVNCdRJ1ft17QvqAZ51no6sqP14dPks2EtGyEMLnbeFFaiWKuJ8HHXHrU3yLT4yfc6sCzvH2GvYet",
  "key9": "2zNkXCQHuYTzNUw2RB2hWhGhqELT7fmQKH84ww7N7nGPDW67MCvGBFNvHkFvXLfy3FnrpmQHMkxPeSQ8Jz4QkBNb",
  "key10": "3wCTA9S5Cp9NkEDRGET5aaqnMeeqV7yZ39Txm9K6VgWLmYRU2uAuo83eJK71tyW7GGqXXEQKPtu4V3KFeDHXSCF8",
  "key11": "4GDn9num8GN3zCdphbPyEXdGnU8rRYKcZsSHrcmPEjbfFu9xduTc6PdW3HQuLzboV1CHh8fhMUmAdo5n8HggdL3c",
  "key12": "1aCBtz42h2KoNE1Qx6PeVby39VHn5Ype48He5L6zPoj3PzkJUVBytW29mHa1eW3UiruoJtG6W25NX14uQromcMD",
  "key13": "4T4kcFmdjsnWzi5GagpUSFErrYgrb4v6isDWYVwQrB6PEWNZE8VHoPDBa7w1HLy676UvFLUFYtthvUx7Kmv34qhm",
  "key14": "22txo9YuKpD2wYK6HTVVtfhsSeEYZ2UKWiT3eoZx3316HA1cnDmr3qodT3k5XPWCDcSLUVTTvv47d7WTNVzpFndq",
  "key15": "3JtGaLRCA1qg1VpmLLPw145bnvFNKEqdpHHxuL92aSsQHKbjjb8GmpPAc3dEF2UyXFNkSwFc2oJS3RTabQWkyK7F",
  "key16": "2HNkgXdYZodb3C6as44baBavmbNbMEfu4bdyrM9M9hSGirGxm2u3DEDmeXsLRoBD9a3YNHHNcMF1ZNceKUpdtrCo",
  "key17": "5xqM5wGk5ahN2M8GZ9V4nF87C2sQGyrqv9A6M9FpoS73QDxC4LkmyYBEb4icMVPsYGvu3pFhxYz8EvQ5JZ8ybwHA",
  "key18": "4SDF4A5neUf738o3mtGunDnZeD1vJw5qVgsQ872vpJ4j4VLWmrFJwKL1RGvxrRPy6wivQMHu9vuDBrE8pRsHmVPQ",
  "key19": "PREwc8Whmri9Y1Yh6hU5oLPkpD1xrzn2Ce2tAwbtTKEHqpUvP14HHkJTEgduUCp3HyAjuHc6w3NJtgCzoCmj3wC",
  "key20": "4iMkJ68TJAG8n8WpmRXfEqnbCAyBnNtV8GcFi3WpXyYciJpbCQu8PKZATUV7RhkAs3nvpiga5FfsryrGwEjC5ga4",
  "key21": "239fRgoeouoa2ASYwRRvntEwqkJsTU2xgQQ5WfLStSX7Ka6tVZfmXyMqYqDpDahkX6PcucmsKAimtStiGPFa6o13",
  "key22": "2dbjzH4AHyu8a9EDvCUiG9wy1ZpeSajVbER7X41tiuCnU1ocpdLynqC1mLr3vNy9C9pN3u4Up3xWxmRyk6TjDYA2",
  "key23": "2joMSViVV9B8RcV7RwVKmtt7faf3tEGEx1Qh3xqToHLL7Mn1kztjXQ7rnmStzwgLZKuiYuEyTxvtkVy9XNmWn7qF",
  "key24": "4YnQwBHGLyDKhRHPrtYcUfKKZazY32ruRXCzKZYxKmQRhcJV41t38Ztk4fuoFBUJ9tbdD5szHBFx7qfSgQdJvCH6",
  "key25": "a4g52UNs2jtPRoVeCrr9Z47QwPE7LaDNJanfZ3k89UZHimTSmwjapNDHDFxqYqt5FLzu5LjD6JL118ikt4KXKgn",
  "key26": "4HdgP4TQGsrWLu2q6fWhXdf8S8bPCKRB9QQfDoVFNBpwNVv7f3aAUTqRAv5qwkkhdJr1C1iaaoidkfahuAQvqxhz",
  "key27": "YYAAhAYxpeg3mYE35akGKdfneWkxRPX4Mz9bsqvxJfmbNoC4Sy3T55fREEoKoVZsHALSEze1v7ENbbXaTA9BipH",
  "key28": "456AJU4cnsrUeEocdPbPxy5zmj2tJmGRWNdbFeZddgdwdznfZ9TZiY6RGqMxEoNsroRP1ZctVorUww2rX5Usr148",
  "key29": "47b1MLwFxSoRTQ5FNdWGWd5gqELMTmNrat6v8eskynRaFeVog4TFJZqRRhPcH7QpHTCtDuDQzUUQRHH41aAQSJDa",
  "key30": "3bFkMMrBy3RTz5TjUuXaXtxkYEAXXXNndc7AapNZvhe4vvRpqx1oYVKAgEFzmnaA7PCMvBzZzUamx8h4gHQ8S7aZ",
  "key31": "ZsmS8VD7Y1ufe5A3zFiSeYR1LsQBksp2LeCtjQq4a2fq6EWXis6woFaRz21LPJaaGq6xtCBViW9w67VDVsTikXN",
  "key32": "2YApNJJP8P8FmaLt9dyQCm3882xPswodSDdUvhF3Z4qBFqATy8T923YK7jNgzQurBuUqQDz8vypj8jsQpKvDncYv",
  "key33": "37f2H2JNiBkTMAwH6un7RGAeMET87YAN14RyK9DKPcEveCDwiyMGYtF5JZ7yQDAkUoxv3ZZmeXGRBYbez7g6xnkr",
  "key34": "4u3g552AoTUk6cuvCZt4sLc6Yzs6TCkA4ciMBJ4aqr6xBLQRYQ7qXhGPHC53ssNoKmsPwBPrv66tTB4ptVqg6zJP",
  "key35": "2FHAJsKnNvFbGVRdtCB5cquz4ocsZSLjZW6S756XZf7eHAAZX7jZztfKog8W2xzsihvQJKNe7vLwBkuBXEzMtF9u",
  "key36": "3U7kbEQaqNBuB4t5f6QxsVXbk6xT3sNMcxdKdH67icQ8toHnak4wVzw2P8FSq2sqwUi1UYC4PGudXMb6yvfTvU1S",
  "key37": "54G1iXkKjFVp9oaQhG6KYeatjdWqB1LqZ2t3kJky4Vsy7GZvardH21iCJpV6kEmju8d863DQm2rZFts8MKEAfxYv"
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
