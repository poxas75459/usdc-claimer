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
    "2rg1zjXKEoCLFJWBbWsTjJ2QGMobbJ5U6Ru3UzqQXiQ1g94ugpsqLqFdm6NLbAfQwZhyCVbi1AsxFUSQdwPxkwt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kw7fxELcznwjuCK4hqNozUAugtbpbBspSMgxWyJszmd5LZvmZMZzJPhTMfyVeyQRPXkBX6P2nFWPEipYx38ASVn",
  "key1": "3fGENsi2KqxzaegCZEr94nYYXzDZmXtuu3KGitzY9gtPxWcpv2Ydbg2mnEToteJKVvsCnWG8vDY15up7pBRoqGrD",
  "key2": "2n3VvNqcQ5QstEYkxwKeHAynpY2pXxmsb3sEuGAo26VU7MDCiuggGvMzcEyhYpqPBB1jY7j69ARVBFD1Kk4a5zZv",
  "key3": "4fJA7CBiYkEv7twdqAukRCCfdQ2UXTJYSV2tm45sNpxLsQfye8hedeooMJcZC7jmN2PdWogB9WMEbuVzpL9mpCLm",
  "key4": "3iPXD1FVEQCpMMGaW8CMdijKZ9QQZg4zpfWjYrHsBmkPcJthKozodTwV4VSkDSPqpAxuPxMNea9U7oxZXsCXGQC5",
  "key5": "3eDk2VJpNa2mv56jr4YVGsPNFmBHm5zoVjgytfDwhYc8ghTsaccrZy8nHE3HmBfQj42y6gXKJWsp3GyJZK4HwNpE",
  "key6": "2Ei74J3PJQDerHDvMkcuhvuU8q4eDziQMnbRWCLj2QrdpZmJibF6Lhocdhv6cFQo2928v8NKA1L5tyaoJPHH8t8",
  "key7": "288wjwrXWQGtA6o8f9dDeM3CiSQvY1KbiiY7Xvd6GcJCccJjcTT4EbCMsZg3dgYkjLdhEVp3VKTqh73gF5WqSUuB",
  "key8": "7hHCr1Xs5DWqkdmZWcUumPVQyAtZHx5oMyw2DXJyWaHDCXUTJ9iz6joCEmEECAi67zdDUV4k9depQAhAGFsKtCp",
  "key9": "2ZvviDbV3sAqZJ79zZyW4vF5CbZZSu3beEReczy9RYtQMP4L8GR2h9kbQps7eUWr4aKi7b2LVdiqn5AvUjwzNCpf",
  "key10": "4xES3iqwByivMA2KipACgeVJTei9SC2vMJYof7k7pBw1cYJZnJgNrK5nHyw7qiAhjtK7ZZVdCJt4NuvtxS99hZMQ",
  "key11": "62gcMzEfyFF7Y5r23ZputFDasiDEPtpQScqgDoW3J4m4qGD5puDt9aMchBrvA8EzLr9dZ3kMyRdnfHNiti3XTR1w",
  "key12": "5sqWyfn8kCaXSQ94x2R4Wp7a7sHXkH2ALH2waRiTPzaX5mZeNoaTLGdfScJHA33SsEhxqDQm2PegWXsfJ5J47a5Z",
  "key13": "4zoxX2BXexGrcRztJXShiPCTuKjZvzfgPsbVq2r6aGAipTBPjjKLwyYK8dauEnzo7FcfxhLzdtqgXb3MFUpJpx7g",
  "key14": "317PJDQz3RkafNo8WN2Xy6HKPu441KvbCmTnVeigRZ834BTb9NFzthTjfmsLedZXPG3cUo2uZMn7jKHnopaYiorm",
  "key15": "66zUqaaYR9Yqi1T3BdkEH6caQi1ZktynQMWg8xzd1j1DhgRE9qS1pXC9iNsgNnnr9BL27zekncK8Dm82UhCNkp7u",
  "key16": "44HbdJSjd9bfH9yqT7nDQSspD88ssdJTijH2qomQVWrnjaT6fge1VS7cgZocJ8JioNnDSVCminQoCwPjyzPwu4ih",
  "key17": "5z3R5cUNj5dn2hcNhJxTFj6hsH6XonPt1kZGhvC7ztrtrWCLAVubwQtwUHq8nQEMQKcGH3vyaQCobgxab8vJvSNV",
  "key18": "3x39sSWumRDKsSDpk1Nd1q1qPDAqQNqCcu6w32D5XzPJsdr8LoKSEFZW1nBedjoZTYzEk56BnzpxidpGDrZhTMCG",
  "key19": "mW3UugzyEvo3iB67kXg7HPweL77seh7Xgt93LT3j1ijBCuQz6jh4eZSx3BCy44gTxbqokWwfeTuSCTKppyBtfQT",
  "key20": "5Pu2Tv9yrVK6hbLmvUci2ZcySTffKhEchCWMwcn34awWYpURi8t4Af2So5pmzFWtDjdged8PgMCwwXsKG5uvM4T7",
  "key21": "3MJ6p5PnQGzspConjwBP8gpSumeVHQ6hh3Wg14upXybuQG9axxaxTjt7kYvStpudSkY9GT85FeukubT17Y6wGwCB",
  "key22": "2Sefdpo7beDsN2MKMcQFrS3G7ggLZ2ZoGehRAemFaYUxnRMZe8LfcJvbVLq499UxhxJWtxYGFvTmLp8kM1kt788V",
  "key23": "3Re9VXzvgish71vcWm6gvFNJFaNs1dHVNt6rxv3nCRkQCUQh3d3MAHMHFtkUinbF8Y3br2Cr6dLTBfpuDi6bDYJ",
  "key24": "5HZ65TXmv3Dn3UwbZTMEJAHshFsDFru46phxtag2iaoR9P6koyoNyKP3aDn41AzeaqzMorfnvRbactSJEPw2D6pJ"
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
