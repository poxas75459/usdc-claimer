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
    "3uduBUU1gz2o92MpJZZkDMffV7b7oAyxTVXvDjfvvfx7vAi2WDAK1tYXy7HoV1wyrAYoYvihs4dXGQV5WP5ck4nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmMnkbsy2kGeoUP4RsFgFzwKtSwBda5uQSKQTbn8tJCQjNpJd9ya96PdPAnpVp6kaCC9s3mwoDg44JMhRULpdH5",
  "key1": "cLeNi7dn9bHz5d3ggYrHNxN96WCNZesGNsiJLt8cxyNZDhBf2aJLZa64YsWUXJD5du4MMaEk8Rk6WPPEhqkyCnt",
  "key2": "sMLG9wMxN4cGBp9WjfUZviNBs9WH4mEqzW3cQ7EUtW7UAKiAsDivfsXzqujG68N4re1CegxebTuo4jqrudPgUxo",
  "key3": "3MwADVKmtPqhW7zNkDtYphhGzkgAT8kpLmZPqGFanPXSm9cVjT1kCzgyfXPvx62yxejjWcEtfyFEvDhXCLVnsb2e",
  "key4": "4EshLw5dEMt6qrzf3jKwPZCHhT27RybvHQarFzNAYhG73zLguoaFyt5nQhzfg62QjMWbpd8PbxH2JESeCorpnKyu",
  "key5": "4PGazbjiLdKxkF4uA1ZReMccB4fr43BW4qsm5FutLJxb3ya8qQXEzabscxxKrNGoT7x4zXfwT4BWzY8yiFhZenbx",
  "key6": "2bAEJzTWy4ZamM59PFu4Ty6s793394CjGLtjFNDNztwPQuW21djUqQyYwgMq5rLuxu6mqoEhYHWux1JxHusZyYvJ",
  "key7": "5wvNBx9nQQLALtACtocYMv9Y7GCrJUR83GkfHMbquWTLmVV65vXHyevMqgbiUKuVGyc3jVM1SjkURFbNCbkdW6R1",
  "key8": "3B42QTXtZkdkdWD7CKNyUJzB2PnibNRfT1gY8t64P4mMRoNu2wH1vcrqQ4vrAgTXzoLW8NNh4dDUFTvit2nyVcQU",
  "key9": "3RKJinke3D5GZ9sdKB5e5zR6BRnhaeFzErfMAEk8UfFd7eFEar71HDrcvnAK3s9Bs96NmZjYtrgwJa4BGRLvKu8w",
  "key10": "5d3xdXnXYQGJhQbmWcX4YHKYvonWV8MS8BKEoMfpWXsvpBZUn1nP1FPPUZCyvghce4Jpsvf44iasn8GaQCHi4UKz",
  "key11": "4mR25pBdckDw3vGjXHi8v21Uxo7KERzC2CwYGMJqVPBf22EwrnsUDFrK8Lm7RE5RrkNga7xV9Af3c8NNyuJ1YZgt",
  "key12": "4nijicdVqFoB7GvjHMe18WDy7979kD9Drep6Y7tncQL5YN6vf7ryrGzY7h5zYycME1cbETF4rFq5UnQxkFP7xq6p",
  "key13": "4mAM4j7nUKyiLouqnmPGpoRJMwaDpWikzMXwCfxcqAUmbyaYTmSWvjuTzYqGxTY5MPgqdS9kxsJHF8aN14it5cHV",
  "key14": "5nc5z2TYFxn8F2JVzZAY5aia8exe5UdEmBNHEHpzdXMMNHJFZbaQK9o2VAJwe1hQFW6Wm1t5Woi1iVZFnErKHobq",
  "key15": "53FysVsbA8bPDmzv3ZJXRRzm8EzQQN562NncFnja4AxXuWY2jn7o9AFcaiXqRHjjKS1gKgv5XLRcF5zF43bEZhQE",
  "key16": "4s5M8aa1fydXWTezFL9KZgMPwL2Wxg2mWX8AxDbdHdTMbgmtJ5nFG8WrYQ2RJNC73zN3u1ApAsN1eLAe1FZYqybc",
  "key17": "LqNX1xW5dVRpAFasLJvJNPpPZqpDSX7p5QcBGCgzUJQNuj3s5Qe8jKJqrZ1Zxb8myZLCDK34bqDPG2VyV4edzWb",
  "key18": "22oweDVm7QcvGyk9nM4k4tZjrjUtyGsm7pFDgpYnLC1cvQgiqryQ2WpgLxbcWRqCDyZECn3YsEHV58v2EVkXmoN8",
  "key19": "mjbbWkPUv4na9fam2Dcs2ioDkab7NcPFvogUS63YPTiH4BQmHT77ohdGPwYvhQzu6YL6X7zB37wgxLE4sChgGyT",
  "key20": "5A6DXGx2JUvzHHhKf7KvzXqcgZG8u7kd7MaojzRh1gafsneJidTQoSufNdu5std88kyXLdb8r4hVJ5mHtWvRctHv",
  "key21": "5iWP5Y9wSELfbad6Ya9Xnxkymc2FDGiwRtcD1uwxwL2sdmiSY8SH91GM21dGjpK2HBBQX6aRRKKdCvaHqSBSaoRj",
  "key22": "4awu8bRNKWyrTwqAdo1VQMn6SKh4iLnDSoayfi1G1riUA5hUeHj8Fe6Mqs7Cus4vVYG3SxNxA3F7R1U6sEvUxE4K",
  "key23": "5XbrgUHtKwdByf8fLCJofef6qrucacH9VcVxDPGj5dzMrrKQnnhNhXfp7sdn1Q4vrSKFxMr6CFh3yYtS14SbAqp3",
  "key24": "4tEGsphEYeNuqQVG4nb3V1s4RRCxhiLktN3qtmBN9faF6FWwf4cLpsxyRifKTL1nAP9v7ntHbU7qMSRqM9u6eQuH",
  "key25": "49hgzh51W6JgMepiePYAAbvYrMWGqCkmGcgFK4Tt58r23zQUCLys1V1GcGwdbXufMV4aqdL5FPmjVwCf8yHLuc3p"
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
