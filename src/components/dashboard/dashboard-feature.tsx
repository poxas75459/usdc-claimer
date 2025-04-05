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
    "3ncxAkXYiiNRd8yc2EzPTnE2uufb1QCAWg3PU6TMLXZZSazV5GcMntjYQgfhCLZEpsgXbNCVAstmQtkWnjHpotMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23kkhFJeyeetM8ELw3nP8FiD9irLG1Uv1PDCq7HsaBjLr7Ue8p58sKEKkPmwPrx3cYmMB8WgExEMuX5F9BHHjPMd",
  "key1": "5YzgsNbmFDfor8DmgGpLDnkpK5PwvxR72afFbDuWP1eRVedb3tZeqDYLEahKpwvDT7WmyhPmYbgJwoSrenXRsaY1",
  "key2": "2Bh65u8TgYPnkL9hw2bLGYB16XQk2CFFbJ4co9faoLsghconH75CULQNgVU6esZwuLAEENiWQAnsqinFeQFyKgHz",
  "key3": "3CAoHN6ntE2wajKwS5Dj166XgTh3cNyNcnfvDc1K5Fh4giuhtb4R8NtJYqBooRJzBBJazyejR5UrfVZWM4FEkvLe",
  "key4": "2nKE2FFgHF4bvk9envxPEchuUneuaSSu9S2QQo1gUBaym9DgqPnkZPSRWrAPyCuvZzhDKky4efPU2h1UAZ9B3hdE",
  "key5": "2XDkXLoKhpm5KhqXU51UR2md5mtpjGs3YaqJanifjAFFDQBybJtoiYcNMJ8TpTt6BpkmqPuanYVUGo3wEyznhpKb",
  "key6": "4biYWcMFdrhNfP79KCnzJ7WZNhdN5Q2YxGSComf5Ufdyftw6w6UadBUG8hqokzSjLQ5uTtaHj3xjqKHRCkS37E5b",
  "key7": "3LCkN5d1X5orj7b5VHVt7CBtEUaBrMMmtgJmGDmnQ1PoQGdmRvFLRWPRF89GPAA9Q1u99DG9Sh978DywGbDU9MzF",
  "key8": "57gu6x8wDGLKT82oWfTdQF37SQbrCrsvSiEg3hupaX7JWQtomCrH4aWMSEyCaVYK7RRXygRCPwNhfR7MhioSY8yt",
  "key9": "64kpQe4idVf5K4yCvS9kYePhfpYsaGTZJCqvUBLViFjrNHPRKtsfejamuziLMBp4RdTdS33JiumqXnjMj8ETkKJm",
  "key10": "4YXA6zVw2wCXegbJ8rs4E6mHEtMATf544epV9ZvwBsyiemeHRJgkBsAECXQkxqLFTenKehREX3c99RBpUEZpNKQt",
  "key11": "5DJsX5e6fnbZSLdms98uHT4nzQVMX6AH8T1zXv6QiQHfX6w6XzQGiMKtMH1BRfiCURPVfrdpdPw8VB9NZG9kuERS",
  "key12": "wUByGEW6hohDSXqQd7tt2KUU6nD3RVtkxybiRnDq95pqxmqnQRbu5kLdnRgmV8bzJp9YnwytfSejC1RtBvDqqYg",
  "key13": "5PiGoaT5rEEC8p98aWxvGDRoPcCoYKXRLw6kn3BuTEL9RMKmcmAUzA8MfJBxaUogrZraNpUWXQEeuQbD4j6B9kcX",
  "key14": "45foWFi5cfnxEGdXqAex8vuNNS2tRNYRRQvaNyy17hdDcDJb6f1xudu3TPw5Y7kekyZBAcKLwojwQzZvYo6FLvme",
  "key15": "2tKHD1yFyPXntFkg2wFyjMZG766H3F1MYrzpnVgKbLgN1b6zWYtu4bmaVjsaKNiojak2tTPGmvtXj77AJqJk1mgN",
  "key16": "4Co7gP2WdDVDVjA74KVw6UMsFSCaX3FoMDwgB7hHusychzZLtUr7G2Dh3xit66xPzqZnKDZvPp8GxoLkzk2VYvRr",
  "key17": "38JLufpvWUcZBiEoq9pAhW1Vs8P96FohfVDUUgqoxdduYSQqAFR8Wa2wJUcqL8Y83ounWMXFP8QjAdaYFq7FEz1F",
  "key18": "3JKsT1jK8iW34Cgjr1PNCg512jQ5KKAL7BAwZ5fxQ73A3nw8zxWEy5WGozxHfxcXoWjbUD52i2X7vkpBhS3M3rVo",
  "key19": "3HxmqjhzCPFnkoLtN2ZPrtEmnPuwWYsJ82mw883XRguHukwNTo5dTPAGLyoNZTUu2L2JQahUfoCFy8FgRJ8uHAYz",
  "key20": "5LjZYNjrfKSxLXPyxqX9JRcv7Xnmpqzb41Zam4VB3PtUE58YN552joQVS19BZbiK5YPctaMPYxYV5qruh23btqE4",
  "key21": "65jHSFTz7VUuqnD2KGuTEPub2WD5iPAYMnGGVAgn4JoomXKNqfgxGRKufNM9nVwL11iJ5itKuodGxPFXB8HoRsQ9",
  "key22": "2EyFMxvafEmMCVSifqCD5kwrwFUq5eK4Y5qBqctE1Ro912XxMNeuxhMACuhKYfmFRAujbm2Qm1iw96vWKH61YcDk",
  "key23": "3Qso3ZcR9UgrPfJEFJcHjreXSjuFNoQCFgi2wRrnEYkELuEgmeeUMLvS2HkoP1qQvZJJgZWuhyQ7PKgnXyyhMqUi",
  "key24": "2LNagcmRntQXrGy31vcwNZxXNEsYDDmdfqYvx2LKdCQp5W1Fsdf5giyxKbdvcwj73QRNXipCkL6pdAupTpE2dynD",
  "key25": "4hdCLApusxPrdemtc8NCHXR1PPZMBWGXULPSh7kRUstbTg2SGn7Vc7va2QbPRhhkGAdGihTSrfqmR5Ng8S6MJuRp",
  "key26": "5cTdG5Rc9ttmJMQxwQDTk9Fjyi76JxAeCGbJJLmkz8AMshJjapjcMxLyxb5RNDWwNg5w6KQHVyAiepAUE5jxJtjy",
  "key27": "3d4Ly5RMJ1E148T65BDjQb1LmgqhpK1usXJMUPHJHRpyrfRCvmDSNnekwVLsvi6JznfeSMiDqtr7gZqgCytJgrFW",
  "key28": "5oTiY7hFkoY1pG6b6osXh3znUkWeMRRGUccNe3P4nT3v3bewHro8FDJytdwaHQE7EX2gorxFo6JjFQfyNXYvGtCm",
  "key29": "2VsT2YG7F5WZxpwBxzLbJVgmJDRwVsoBu6C8p7zNqkrmshZomLC19pVcjZx6Nfxw2pG3RYui5WwpSui6cwdvBdUn",
  "key30": "5HLqurHBdRpNx4XdNDaLsaMEGhe7QqQaquQEvgAqPm4gM27Mxhjyw2vzuE4Eubp1V2AoBrJQZQ3a8ijvCRRmMatj",
  "key31": "4Qp7JJMEjQfUCACod9E5oKxU6xa9DuENX3ZzpQRnUNjzFxnrhy9GEFYGB9LUUwNaQwU5L2BuhSr7PUJg49jePtJx",
  "key32": "66A6WPMUiQDft1iD4m5CFMupmr6F3SiRpqqpq9EPZZEQbbfJva38VVgicncKMBdxb239Zk3NLXG3wNLcejwPSDK",
  "key33": "3Q7XnSnMQR6Cjev1GjJxCAAuKwt3pjvcHsvTx112imR1CxqrxNZH7fDqwCVdhTvURVZr5C21CiwYYZ3DqK4nEB24",
  "key34": "2FhUX3KoDQ5ifsrmxGVqQnWdCDjhaBHkmvLAYKh9JhCn3JM844tAssZGrW4ZKgkSk84Sm78tWgSqYwGk4DAdn23u",
  "key35": "36gmzpNLx1eMX498pZBurNJ72DgfswAHGQk78nM8dCYiLV587ztiEYEnhbMiN369D3Cq8Z8L9d9wbUcSKm7Zxtmw",
  "key36": "3CAMdieVRuzz7vGutBtzT4YXPvUe8tkwitGgkaLtifq7u7aGjuitKmY5J65EpQ9mWbvW4yXMFXxGoTYNAe4jxRyx",
  "key37": "24HSTzNLQDpNPhd2h7Lxd29x7Z3rRChBAtKuEKueypRZwmLZHTq4LMT6pzzXw2hB9qDB4ofGeNmacsf3h3pCtRzu"
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
