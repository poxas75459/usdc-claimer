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
    "2ry5SXbBU5ikcNSkKU7eDZ2AxepueYQK5vZou1Wf8FdGw7Aksj87fLrz9sDugFaUoRBekRVoqwv1AUu9MMCM4cuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gt91LNaCE92jfzbpo8v6yStGALory8fsv1FH4jFBdAmgF2xG65i7uwo6g9Rued45aN9J7HoWJXdpFyydxdWHVWu",
  "key1": "4JhvtSbkCYWL6vzJdjTzMWQQLGtPpiKy8ECN6iooQ5NizUNEuBxk9znL8BXf3jsWQsTZLKyZNn3twYRDmHLthkqz",
  "key2": "5ZtskWNdZ253yHerNnXBo9ynfxARFKZdgtfxTGJaVjgTAEJJ2bcHXKvkE4CUfH9BiN9YMkbasV6AaxMS7he3De7i",
  "key3": "4fGYhv4KVVxZ4jRwc763wRNVczctHeo6vDDvS8rDfoT43GnYct2dEvaEGPAT1Q4g5pUPvteWCe5heQH2MghBE6nU",
  "key4": "4jKfj9XPgitgG1PAR8WvCjzF96E8UYkPDgCD7sLAiDaDxCXFDVWsSDdxLMPiWHaG7ohjAB9gYkXWfbKTo6Zbe6TH",
  "key5": "2d1xNRrRQFwHUBoUcwzRG3GWQ7caTCULakUZgavcGQMKr1r3ZPR5he3yVsbW5WqhpyhdW24zCpjxMNxEnZetEDLp",
  "key6": "3UCGuXa5VQySpeSsRgQqD3XchKsE7Z2KLoGRN9RYwDCZ1VT3F9K3usJJFxDsG2QCpNA6d7yJw1MMLM6ZoFPDmxoH",
  "key7": "25umevn43TEzYngTuWdKs6hjC2JamZa1gPUxyRXLkM6k3DoaJ4NZMqhuZ1HZ7kbnr7TS5tybS6CMTs8hkWe7hC1z",
  "key8": "487Bkkcrp99EwBRvMCTCKHSqGtskNFj49PudfAizJucR5QMepUux9pEMvwse9jh9sUDw3GarcMhR2XbChk5fqhMM",
  "key9": "67JAeABrYch1xpS3Ld5MSHSL5chvVhT4xfwHMhvPDoBzuMENL1jvasQ8JFCcmDri7YhxSPqL2GrBo8SwRgA791B6",
  "key10": "5WrRa1Nq3KaavzBDvTTsyoXyFhAjX5MK2uc7iNc6CRr7c9ui2aTr5CPi9vLNEbPBdQtWwNmQnPox4FaDdeBDzSTq",
  "key11": "2WKf9EhFk5jd4MTwYCBasCjn2sizHS5hGMz8MLWzzBHbBVFUVWzjVo7JTNB6YMmLCPtXP8AHD4jYqcezMLEzW69S",
  "key12": "67f8mStfez9Lfbohg3FkS4UDo8CBMyzerMaL866JpiC4oWoeBgw5tVu13KrX3QmY8cC83ArKJJGdko5y74p2XXb2",
  "key13": "4PYjdV5EqsMiwRa2BqDhXAneV5NUtwG6KjaBH48FDBp9r8m1qXiPdStZA3TFjuDhgn5iZnvhuU2F4wQ8oomYZGb4",
  "key14": "PHv5dek2NQY4jTPTqqUKXJHxD8cu33YF9WEvkGPqGHMHwvqKyB1Qoc8JWgiZomTBEmM32YVSumwVzEfVh7GEmPq",
  "key15": "aekQYZZGG38cfCkFJxBrkJsjp8diaz3Sz52LVrJpV3Md7MFwwbFgU6bGGFRAsjG9t7i1qiMuaJD5qUATAwDckYe",
  "key16": "3ZJbjza532fzTvmJACstWEaCcg7Z2rsdDVTtp2XUe5mmtJMBmsdKsVJ4JUyVdEazEsKwxrJth6QzhE82ZPZ5PUW5",
  "key17": "3jkkVQMxXF45QfThsyb9EtYVK1ZqRxrpxmWRwuSYpQBEJNoEqQsjj7Vt452HBwEA1aZtkEfiDHcRuPRasFWsZ4KS",
  "key18": "55aHsRTJkQ8XFTgd9KNNQdtaXoWQzrkjL9k4ruhyKkJBj5mUE4wJYnpXGhYmgyYGwRRJXuhS8MWWxQ1cGyqVCuhq",
  "key19": "i5aaL7uxiDSGZJPai4kdqwy4ugQEK6fWHdiHbffkX7xs6Dg9Wuw5toEMJNnTjEcLMnVHgHpdyekkfSgaLrNuC5k",
  "key20": "26CQzSwn6kDmUntd5EGxbKYPMQQeFfkRU3KxQ1q31nrWWESYFvsYnHimBt75j5qaDupTadWcnu2qh6BmyVLK2jSJ",
  "key21": "35oKov9ZmYR3LiTvUn3fBtHWFEVnzaZTXTPfqxLFtmBmE5rLmupehBYknJgjubcFE2LEV71CRXSWFt5yvmvx6R3X",
  "key22": "yQU9hGScE4pPXVa5z1qiF7WVVJ9n4xY7AN1SuZtZzywTAJmtfzmfgupRcLrvsXB8QWLW2wY65ZBEjMhFYJ6CFKu",
  "key23": "4AFEz7kbcp6XngTNfSLbSRxpyb8bxU6eEKMA452CQXSdkTk4YNNDSBeJ32xpuDSN8wAK3MV1qKwq9T9jZXu4JRVD",
  "key24": "4s5vTh9SwvdnPcHoDrpavjnenGM7STNCCQRcmPHACLzCDxmhZKJuktaMe3bzkTBTwQt1jP5SMSFsBmdtJh3dB6hQ",
  "key25": "KLwr26c1ZTPeuebLQYQzGM9vyZdzY8CCQauEJDg4vpdJU21sL2TwXR83i9xuf5puGwGsDqL8eLotCd4MRGRPaDw",
  "key26": "2TqbhBTi2GkUMfE8n1NQaLRD97pMHq4vvSG8FZghK9JPMRKsPrjro8QEfJxqA2Ba9NFL8yQLqJSi2NpRPPVQqneD",
  "key27": "3mhezTbMWhEqgTyyRg9kSVuL19wbeN9fRJs9qKkhint4oCyKsroFm2tDmT1N3ifGZn8bpbeXjh9HjewVTmUJyLS7",
  "key28": "4qHc6sK3n657itsRaCWNswS4xjs15vxRYGzqGfqTVzhT1U6ESKeanGSFkxr3asSVeSf7w7qqB2Tq3X1jBGh8Y2mr",
  "key29": "2TrwoT536kkxPH17WWVziNCbeS1PFQ6ggRPcb4G4PotysJaCe9X9uRGByiw8EDDaP7thKucwM1oQaG6g6HvPcWKC",
  "key30": "2gBobuaMqk9P4i6jdPMFpmzAfMs9tFKs1LTgpfXghtWtbK45xM6VvvmTw4msaUEmRTRxxaRcc367abejQvF7RZjg"
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
