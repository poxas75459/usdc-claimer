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
    "MJNpYwz4mmLkMu619JcP1gob5ekYs8bjuQKWgDqXQGPuy85Meq7d361dcGGd2UGK355t9tpfs8Eds4HvzZYiP8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNwGkax7obm4gZ1x57MLoh58ooPogFFms9eFCo7weMbdPKetW9XdrgPJwnBLxbzDSWZcJ5erjLAHkTySwujq2M2",
  "key1": "2LPeLZSMSXZ7S42qHjSZFZfrCzgr8Q5q6UuELMENkiz4u6BkYiEtfUjZXTkSvK3qMWW1RuEVvuv77VzjfmUgoFBj",
  "key2": "36vtD3LBiet2F1DG6qTmGXzLZvVHg24RakxT46FuWxTm5jRhdJWW5uajrKhpPi1EYTaaLrDAkwrCq6osGi9jfnRy",
  "key3": "4co6SNoNQFwoU11juc6E4XZLDfvukQwUoKQVMSR9eukJRnymhRN4p6ymeV81Giub7ckGx5p6aZYoT1prJSWcjvPx",
  "key4": "5n7quY6EU4fBHNSNMgnZnVVh3jwbBSTt8rxmsN4RsLtG5L1tZekaCPXmsmiCQhimArweNKYq6hfYK7XBUNgWcEJW",
  "key5": "Sfn5uVr22rEb7HBFyPhZf9s8pPNhKGaqJuQB7Yo1vBTgweb7Jij7vr8yd5yJFHBsxtb6fLL7fDrFNTrd1hNKUtq",
  "key6": "4AzgTABFQimJM4JbW1VBKbMofPPL87wQvFtZLr6F3ducB1abnfPtmFMZRTh7Vh3v3HFZBkz3e6R7PvwCdoZGTtrz",
  "key7": "2ZCH97mtwY3uHQ9JwJDTuFGxBQyMhdysqNdhQvxymcELzKLHNgKDg9c6Mx1BS4GY7Hu6gDCNSyTz34pKy6mdnJdy",
  "key8": "2ptPxd8ecHF637poXUg7MPoQ8kcafsoVUj6m9q3qj5ZXorRGheJzc52cL7vchX6RwEGP8P9SU5Y1BigCGzKybAeH",
  "key9": "5NiTQiioUFJVah7tJBBwsSQ9vc8jqi2F3NGF6NPGtrF1DKREZqTiMMWEE4C5C6mZBnvMVFaJ7ogpV1LnYKqurva1",
  "key10": "4HgdWfUPwypiej8PmexJzUjS9iPtLnKQUSEForHFsJ7rDtYC3ZPBQ6avZ4zB5AfUCZ5FHFR5HKxzKpuaGGCVRyzJ",
  "key11": "64KzxdpUFgZ8eiEBSdrfLPq6ULjwRPQsobonKBErxdTxLc2PoujpccbtVsXtqarjfLK4Vi6QBDH2DpBEoU7CH35S",
  "key12": "2JXPUq9ze1zYkPvBKZnWy1hvWf62TkXB7R1w2opC17bxxkeraQM4mHr4hyqro1iWpnC3hreNX1ZSfG67bQwe4xUj",
  "key13": "3bcLomc8hTgkL2S6NAqTQ2fDR7Dp9C3oGFva1FpAchbX1vvkCK6sCRhtcFakxeN4ens2CRCCiuy3hAkE1Ws2wcmH",
  "key14": "4d5hfFuVyFqiqNzWqRfpfyotBVdPL9wymeG4B2BEWkGZfnN1MBsGpKKEm6g4WVCJBeTC66cGEeX1cKdj2e9ZaZR7",
  "key15": "47ACtbUCXL8tbrapFBRsbvgv76UFfti8YVwyX5bMdm5EGmbSKiwZv6Ru1ugAobyocfeQK9RQwg1H6G8Minjfso3M",
  "key16": "5SqEcy1BVZFbxCPihPMxtzsg5zjrbCfXNfYhWmibMRFxjy9H9ScmtCAZyBdo9QWYWNKkRWj9BDNW2HNZ47rcjTkP",
  "key17": "L9HBvxKNxmrqnHktH8PmVLdRUJWHXdD7wshCgQ5nFEknDfDgC2JGXFZqND3XzBaMNvLWTsqDzxiEt9kS2T6i8N1",
  "key18": "3M5hv8PQyECGhKayWpokx7MkGreUqA7wFcxHD3U5zxTRKHoASzjQdtNXg1A4jz5PLgF8mzG9ozo5AKVPCfSufZGz",
  "key19": "2MNQ8yRzvx4aPqGQ9ADYhfveBHWkJ8KE2L1n7u9WirsusErG5TooSARmRqaSFHVDa1DtpGz8m9QFUowzur2u7QZe",
  "key20": "3Hfz3MFXHemnU7KmEzuegxTaH8iiaeyP4tVzXKHkn7EEdpjLdbePqajoXa3wpBPHVM752Yj1vWQxqJ8sXh8qLFuo",
  "key21": "463hwfWVw6y4sskra6zUYMC9x2o5EzwwaXGdwxmAiQqnXCsCmxbBB4f5tDzVLapTufhRrYzog6M8R9AUQcNPxo1J",
  "key22": "2UGUkCsrxnxpN7PuGHywvvpXxAdHWYUett8WePZZGNM6ux4kQw6aCdhP933a5syQgwi8vN2VkUm6GvUirsXsy5Ce",
  "key23": "2SEWF9j2VGWRBAJAnksZaqFa2Ks2RzziTcA5xSX61tREeJDc71YeF4npZY6dKy2e2aBoMJjPM17wLh8MqV81wnpS",
  "key24": "4651kwRjY6skia6mYAs72dLHsbZz4ynbgKGarixaPaDHmR3RUqDzX8sDoRC1x2ghi3M2kuUAnsEtAjspMthNfMXF",
  "key25": "3iBMFRETbW8sQW9pCujxbWGmyMQ3GgTbPjJGPp6Cz24R1bsDxYouDQNk2H3iFD3tVmuXdBrubfSCFVfLPPtxaJSK",
  "key26": "5jmGug1zQdKuZByLzdjFMfXqZ1sKdzZab6HimrsoA5L5f5ZGfXAGYrCQTRSXYzJkwQWWSj81tdZo5dF7oW1na4Gg",
  "key27": "39FRkgKt7T4Cu4FM633JPdWqxFR8vf1E22hhB7HWFSavwewgCczV2oj4mPgoJbB5rQav5rEK7XccJNDjvqt5Pdit",
  "key28": "u1RQGzQ1JDwp3HcjdSv8HLofxfB1PdSeSyRXgjvdTpyY8ZDY1zATAiCA54cRJc3471TNKn4C64MMScPJnj6YThH"
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
