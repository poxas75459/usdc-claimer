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
    "4eDqQgG6qtuxrbb36okx98k9LUMz2gJsgsy71ToVvYctJj2AxkTfWpxU6NR7QrfsmYYjWNry6aB9JgtR8oRz2zE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55u7FRK3oLE45dawrsp7LbSpCBFsyQYWhCFyEBLnMxiJJbhiESB7qm6GApXptMC4aTdti1NE3LapAcBPuEMQt1ii",
  "key1": "i351YihAdD23pTQsPyuZjRoXtiKC8kadVd56uU27bUvM36u5DwMk4ssfp7aDXowUq84XxJYod5CNjveeqwvK6iW",
  "key2": "26kPXYER3AFTY41bG5ruV3f9TGp9yLjRcf5UqvMvPkz3eYseRvzC3wKmFFnzEMqGQbhfpBAavx9Yb4iEStubXJg1",
  "key3": "5AdwZKFKN2ipC4QVXubHikMLSFbtmiFTSj6yjDoFMh8Jquonj6PkP9oBBhakpWpLhUMvtGe8aaCQg7JdngV8oF42",
  "key4": "8F9PSJ9xXvzz91aK7EBvEHmGEmm8hiEiN4A25hDWvTM6nBeXMXPEBLXj2v9q1qQhtzCvc6cc5ZnQie6VFvYgrpz",
  "key5": "393S3yCjHgoZpyYsoDU4vnnf6nMyAjX7HZXmHEoMNteyLygcHRseQb4tFdS75etKhTDZRmfeTWcjpNhnb9oaoTRE",
  "key6": "4Y2CfkK4R1UAhTNTx7WASvfqN27Fn8g9ATkm9Gnc6jhGRZXyfpMc8A64w82TQEVDCEwSYVVLA6A25MfKdsz64z1E",
  "key7": "2RqHiLfny9D1VzStBGXsLtz4uZVVE6mx3Ap5o4xKzctqPNw6kuYHoxwu565vJpTmY4q7Dof9JX4znBYnNeagqpgv",
  "key8": "48iUDzz74Mjh5p5KzTPSMDPRCvYYSVG3ZnMVcnndyKKhMPfMNVLcVczrooURxP94dYtXVNbQdrGsN9QdjHbvnaXK",
  "key9": "5nGcASL34gBW58TmAftjWA5CiS98xdK7hAapUSNs61wxEzDMBGe9Hf2uBujsxe79pa3PrvtYeXgYwejXfLPptZYv",
  "key10": "35NBGFqnsjTdkgTBHWHB8mJYvomWBcDDEJbpVEEHdr6fKBQxnQwymaQNQMtNN2z3xvkes2pNxofmBSAwgRLD3CDE",
  "key11": "28n9VnSi868X1dg9qNgCic6HwCr8oogNicTpxnzJ5VM6Bvs2QxpYT64atvyeMNrPb6Scb3gKohdHJtNTpx6UizWf",
  "key12": "5PN9wGmhamw6ibbn2vEXG4VN5Qv8L66eurmtP2j51vyvLPtQTrUULeT51b3qPPsoyQPEJ1HbiMJzRSsWi5zZfe5d",
  "key13": "5tK8yN6rzaWaKQpbRQ5rDWoYtmu4QtmryZNjhSZ3uQDa3qWEAiT5HdbQFJo6Qn3m3S1SE2DLDFjWUPVqNw1vhv7j",
  "key14": "2fbf3bsMrrv4U6ARpTDBft2RskQ9r7HtdSxda74afNJPparE9jTedGugEv7KgfkrKWBjoaeQuocZybTnJTB3YAcd",
  "key15": "4N4nesLRSEz2B37q1pU7rYEp1pZfQj5ECupp7v6EHy5nxxuCFjgr6zJ9d2AUzVyGUsJqTXhFYU4dS6TVi3z8FnoQ",
  "key16": "34jr7JMoqkcYrYvccR2jvVKdrx8gHwhk9TVHRP5xxoxpbbb8FX2FdUHF5FP48n1hAtYMNVdtxUPCwxSdMmwxv3PP",
  "key17": "SkFYSu5WdJav6XfNCxhWepCbWTMWYNJ5rwX4RtVBBD8VcYshe4Z5omtbe8kACNviao3durwRt8MKubdgzYAJBUm",
  "key18": "qSsQ9xK3Q2Zj3SaThurRaij6Ru7BELbtFxiCsX22HqBQy3CUDCBY59gH5UjrHq993HQihfEf3q9HnP1YLF1Ueiq",
  "key19": "2sPqYvXfFAMUZxyNn1peRraYaLELZnsVgkYpj9P7EAncmvL6RMKW9VGXrvgU2JGhYjk6fnvXzdmveudCG8V9T9tr",
  "key20": "43544JfV4Ft5WjHDCj8JBhAR6xntG91v6rRviTiDLxTMUbHtg6KVbEojvgoEyv3ryvV99JX9kh6fo8BCSJmYsa2m",
  "key21": "t7hWDJeAhTakHdozzV82meFNK177hfPu3Sem43vNgjKhiHDvqqQEtzciLse2D9dnhnosQJoGBSvQB3iaS2FqtAf",
  "key22": "2SukTB93o8HzhqRZqwhjaZYmGUwy69QZF24aeYSCQhHZpgQejiEPPMxm92w8zwcJV4fRvD6cC5LAUira9JXnncAq",
  "key23": "36fiKBMhUVFgZLdJPkBzrMXDbTPGfD5BJnMZkJRMnp6AYgpNyoCppL2q7y83xYCcpbYu3d3WdD1P1rNhZFUjmRxp",
  "key24": "62np9ELgWfPpx1b2wsWog53YuBmhxjpfiBz2KTf8jScENN4TpsL5UjAE7ALjWF1fxanVTgfREuJxWkWyStYZPMsU",
  "key25": "44NRS9buuWf9BNC2TpLK75iNhA9TykD8XTKznX4b866PGEJ5xk1eJv3YGYtTFH1WvgJFPwvgBLmvvEea1Lt7LhxX",
  "key26": "QcjjodXaSzR8qYkfyeLNMXHiPnzdHASQGcQyM5fmyp8T8eGbg5SjaVWN2W85f6vmPGZvQFLUbEJyHi3D6pbsiVv",
  "key27": "5jpUdu1QaKme3SnKMGQQzMwS6kjqGFMSNURg1dyMuK2cCjvWNBDyGWeJcsPCeUaurkLvdFFw8NzQe4DPT8Ms2Pot",
  "key28": "3w73ADX9hqc5x1cWcBQcwSzmw6S1u2HQYdDWEXCRHcxphYcDpGrrW6kaTWKPQpJ34WVk5awmfW7oMtvxoHYSYXF8",
  "key29": "5Hf3imMui7mwoNEZ9w8F8kBRdvYj6fTUoEtvuUMMdT4xTGGTzFjv1ZB7p8ohsXhdmY9RjTDYjTGn8ixqYUFdAtRh",
  "key30": "3TUwZThYnMWM1irRwKJoRABDkwUTgWo2qKdtsB4TMBNBBcQ3qp7z1xjZ7U1mq2Dt31adBhMMsU4VBZYWCnVSdApF",
  "key31": "657TfiTHUhjkz7m5W5QFKvdgqvn7eQFBEqegywde2HYNFBdp8ByxPWFCp5Sr7QGqEKMfmR8QmSsSPu4bsV8ipcBN",
  "key32": "38JTn5WdPFCuuRFU6qq3iSGAmB4VBgvbsxr2BoJjmwCxC5JijJ5zJ9WsVCJQax9oddtPDgHsZnqhTx5kA3geQjS6",
  "key33": "4H6bsQVkbNHsubb1b3Lj3SgUoFFDHzxj5TrvuaENjYMY5FojsL9iigXeBQvDesbVXeUh2d5tX6t1EGzf25uSq2E2",
  "key34": "5n2Q1mjy4WMqr7Q815vVCokpFxVuQkcp8mC5oJNybgoxBCwAodcwsZrrZC3xFnU7ZmYwdENek36zcJT3zqQaRbrx",
  "key35": "4hm5CMe2SfGvihZctQtr14h4NG4JENmthXZujehPCLPiwVt5Rba37CHBVeQ2EnYGx3Vg2j87bfXiDwk9YCUt3dMF",
  "key36": "4ZXvhjxKvxC716QVT6ebzV3e52m7xp9utsxcJDApygPn7BY1A6tfooX6uy8DjzZnqsekdxD3ALSvzcmZATRx1771"
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
