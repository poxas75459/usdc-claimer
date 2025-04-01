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
    "2rkQFUarX28dgi2PQc8gaUUhXikqhDfiejPUpUjVANzYNKvMmUBThn93BUgZV6XFAC7emHkSgGgzLXGHAw6EhrUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46WAZGzyQC83Q2ourFErQEwZzysCSrKFUmUbTEpjxszDV9LDVyiUbfsY5bjAaxLhKui9RWqm5RtGdci8Jy6HxXn6",
  "key1": "5XePHTE5EcMDPJg2L62AwvsjuM8ioPubftD6HzpRH36qc66y5sLebGUqCDVmEY7cWaXq9uhZ7xMzC2bNCh1xMpWc",
  "key2": "4ueVFX1hqNr4kAPF42KuNqBGYYvZz14ztyD6iAmLS7hGxChu6kMffkH1vdjTE8XzhMdu2EHHZU5h8CrghZgzWBsQ",
  "key3": "2kxUuvaxw4figRezAv4q7uXUHZZVBzZkxh7V9Xq6hafuwmiPipXtGkwUDjPbm61QVjhva1uscdBgGqNy438tweuc",
  "key4": "3S3wSZrwRV2mTjK89nEnPyLXSbFKdAyg4YrXS2iEGyiB1zRHPQY9F3orik17mWinr2QUHkJfUb5uvBZxY3Vn3iVc",
  "key5": "4QmM6WGNMpczroLvQh7WEK4V7LjJBufAEZAmEyw9KCV5TR6pAPzpQnQHo2J9SsBUwy27tXgoqjaaP6D7ZK62hfcJ",
  "key6": "5u8w4YvZnyTvkzEr6xh4dJDhaicLRcQvWq2hPrBDrLyPiMVLRzN1GNqbrWxkmsXGGiMujzfKwFASNL61U1dLeN8f",
  "key7": "aSdZc6DTT6deP2t3j8JLPhks4daZi4vSLhLDCgdCwKoowT3yQd867KHQXZXihFNjUrKhmxuzx8wVB1YWmFp2nwN",
  "key8": "3fnYxf5UVuz3Y2y96pzwzDGMEk3wn3kBF8LDse44eJyWHGYYQninD3hkpxy1da5ShZyuCdttVwTBLc7KnXhmR3Xn",
  "key9": "tYpPjAUvCiRFdiZWHF4zy97T3QWgudwbAcDTEKKFBBoNWDzJGvxceRAqv9bzmHpPfB7bzTEkS6JEFY3Cdf6vqxE",
  "key10": "4fqz6RQf3HMomT71kpqowNFJXHGM1gsZ6NZCE2xUPRej8Xq7erCN5V673n3L4RL7pMPuUZ2yYE5CMdx9Vhw72VL8",
  "key11": "2Fwt3rXZaYByzpYStEmYFQAN26qhRqCMBs3RfchLSFB9Wc455QGQag5mXFd4QoAYG269n8g3YALMWKfo5NZqAD4N",
  "key12": "TEEawqCVBWH8Gga465rgrT4uBhq8AWuvaMACaePDALpAcQ2EzqHVmmuBNm3edqA88F8Wuw4S5A5puVWYjNpU2yP",
  "key13": "1ErQ3ZgWkZMpKbhLWWwQ8naiQDbGEvs7QAovxzLtguHQcpzFLqk5DTE46HFmMMp6KtijVX3EJsD5Ls7J99QRH9e",
  "key14": "4x9GBudgXEq1UzBhMyyyCE2HUqVQW8RcraeMk3CSSwzcDvarj8GANpTnY4i2VNWLHjdpMVqXvorYPNq72xsTyumP",
  "key15": "4GkWpAe2u25Ucu3TKJG8P3W5s18LTuq3c13x5mFaPtsvZqVMunMu3VoXuQM7u8GnoCH1AwgAxngj4QsyMWH9TGnb",
  "key16": "fdaMeSg2TXKwDn6Au2DPQqtYY3kHFXSQWCjTZWU5j2R14nm6SPTA6C4HoXxcQm7ZAMNP79HDm3f7YkxaRnVjbyT",
  "key17": "65oaVtc1mdPauWorJsQ7Fr5gAdzgijhMVwCufjdEwRVX82HJxPw6NpaQxYbzHUeVQSmfNJ6wgLEaUnFxm4orzkLe",
  "key18": "2WfxNkMyK3f5VK4c8YZdMNSHFSxVs7MTwk2kpohzPtvqJCFY2u3rt4zSKfS1FxA2jNuCcNf3Rm1Atbnp3Q6QE2Wo",
  "key19": "4JQnzkEwbRiEGt38roU1Pu6AA7qBHv7A3gA5ueeRn44FQW2XYpcmMCHULeDdtTPMtmeVjRJ8EEVeDzcrn1vVjnLC",
  "key20": "c59b2tSwS4akUSyqP6ZbQQ6WtpLWJbZkhofdMwRxkARTW5pZznoegVg11nvKh9KE8TJCZCSdhbQXJ43CKkW14St",
  "key21": "Gr7Gd5xNNJVftrT2hD3Tw9eyNjHNWdguN6PBk7uMVHF9hDJ1N8yuJTudk1bUb13YTBzamRqs3h8gAs31JpECPED",
  "key22": "2w3tyjW8kKnzopQwV4aF3c8r6ZGwZb633mKW5xuPkxrDDqRVmp7cJ9Sxd21w5r7ZA8n9n28UMaRDDRWftebNQmqy",
  "key23": "5y323n8FyQ7BxH4UwptZ3kqFZ1jVVasrqLmDfSU11xDV4D148rkAJ32WGhwzhi5dt9SMGBqE5jzEUxVJjLQYGXiD",
  "key24": "35hQ8uowc9mWDpah4GDGFJ8PboVxDGGR61BymyKFGCq8cKFtcNfop1hLuK7vFxnw2K9mNPahaFD8hyfN4t9KP5xu"
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
