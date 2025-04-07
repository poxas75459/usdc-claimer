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
    "2NViCZ2k5B6tHVnZN6gpGP3zHEpFd4w5PwbvpsvWRQ7BuWmYYS7fQdnyAkvQ8mrq3PM34aWjAWAjoPKRAEKba1m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UGhnmCaoSkhEpJQWQCssSpB4g1PqEjnUT9eG1JZByVPAP1agULLhKNEe37EnNbnUYpcDZeXLnYjWVUa1cQPqXHT",
  "key1": "5TeGqFsTy2Ea6QbfcLUR4ytNRXceUDhW1pp2YQrZExeKHmeYMQxGrLBZy58q6zA8SPrRJ8qPJkvHP5UGrcKceU5j",
  "key2": "3doeLY4A1MNYuXwYMqKKa9Py1HZxT7rgnhRZbXJXxa2EiG9QVoHfFjqvePNGpEYkJdiB6bkYcM2yzdnonXE9KLT8",
  "key3": "4CujyuSsTcf9KS6TpiGq5kf4SWUEPkd33yNFqK2oGJa8PEpVHReMiDmFLHwkV57ZhuRZSk43d5MZG3AQyXCiAXhM",
  "key4": "31pJmqZMsk4HvgrvW6rCH15F468JDZ8n2BQdRgD9k7Bne6TAnDfAD1hPzEsJb3SiRgTbjyUUUw8sx3B3dGUrHEjs",
  "key5": "5UsC21ZEVaGdTjUYyUUVKPGfw725RKqe2AeKCDZmYVSyzhgU65Zu6uxBhxFGrMb1Eb7SLfLrvpdzSVVJcqAR4eRi",
  "key6": "4jjC35gX5cexbYVuWET9kDouHamodcaLkPuN23hjyovE7wScGBn3bQK5Ht791a1tKPSuy7VTJ1b5Sttp82z4MSEL",
  "key7": "4vdjzFawMj9T27jjs1s4PZT4ZUqHiAj1MsBj7e9CvomTkXCtBrreS7RyCCozkVuAavExVuz27FeDYPGrQWBrBwUR",
  "key8": "2i9BWdR9UyLj3mA8z8gve2zqPt2r96mcVr4HZQ6tdcL1Kjdb3pfFSJSMMb33nQNa6koRC5yfBiz74hnajYvMYFAa",
  "key9": "4k79BvYhZ2urEMoGHzueqBHDdqn2QKQkDSmFZfrW7Yz8uSEtXtu8ZRfZ9a6CqWNB27cHYyH1T5kH9MAMzUMUQnYa",
  "key10": "39n6DYqRQa84wiU3DntR4AkbpHMc55jY3prfVtMs1vHkBydJUPcGL7MaQG8J3i2Ve32826kf6Avopfit9TF3WSzU",
  "key11": "svcKUvShQjo7SEKsfViuECdcedGoFD4SvYiiTTFLzFfvBdG5ytubYuU7VgDx2fyaqF9PoU3nHAGfu2oMXVqTFdW",
  "key12": "LWzz1PWExL3K3gQdY8cP2YzLpK8X74kkphbDpQcb2ybx3VgTWfKVT1DefErkPPsRHe4FLxTjB5K3t1JhiT4EbDp",
  "key13": "4hzVKAELctYtj8AGhEQG8ZHAdht3ycHHLUgbHK3XWjAZZH6zzq1KGx2xhXFbGGhZYyB72B4cLmTzjkxFCgU1QAAw",
  "key14": "LdmUkkFhemiWnJgjGULE1kt4ASqyTa9zWEit4irHtTkdekjdxE4K6mTiXJC47xPT29XGPajrnHae821gg1LJhJz",
  "key15": "4GsW8k1UE7Pcr5nHZkTvMKdKxnLfkRQMt3YBAC6TMNkTTP9fWBVJcZyMVjAc2WvRd7YYcU5mfy1VyZNpJtVgJEgH",
  "key16": "2SCGu96LdPTqS5MPbLfghUcBBDJkVHEMD4XfFpd4wi5zCZjVPw5GaZz3KvMPwp3zqVkxFyj8GrWZw3KzoXZQm37A",
  "key17": "osz9mP3mGYjzjLsnqxVr2aiG7tqdm8s7mYbHYB8pEC6GozN5qnpDybjk2AxBefKLTqvYMSCbFvkcM62MHwb9JQF",
  "key18": "2P4noEkQWUfHJqcwudj8Q2BuE5EiL4i2ooDARFcoqPcPRs1ukPRsfWhswufbcAw9uwLhDGweMSmZSDT3NSSXWTXQ",
  "key19": "222WyuqZPbH96kKCX2tzySM4fBU3p5TKfQVzrnr4xfDeZFB4v2CeCos5p4K3bTj2uMHr7QsXk7gJcw24r2HGEoys",
  "key20": "oLAFXJbz95dUtvtQQxPpH9E4k18ABD9D4vJ6SzLKonons28QCKjb3cM6gkSHR7kDhA6fjyzXj2xV6YFML6yWTPo",
  "key21": "yAv7wgajeED95GCELc8asRmSxb7rUEnctz4pkxddp9AwgA3c1UYipMDyRz7WmgE3BWeU6BSbiuiKTdRmZZxWXJx",
  "key22": "3QVoWUvETHE1YL2w3VVSdRz4yEgXXiWRho9FoTGLcg1B7u8axL5QYR3WfP2vkX2anPT6beVdJ25md53WudybxpmJ",
  "key23": "48PuCujcyL78rZZ36xmGHAN2JyC47Dkwj6tqTKpQ3KZN8ZwzRnHnwgdZT9PXnYAKSKqh9mtrcDfFVJgDkC6x8No",
  "key24": "4o5gwsnRA3ZFRSAwbiyJCQfN8sZzcWAGdJqgC2sZUwWfebfsiEqxFpCKzShwKSsikXzsnxk75R4vEjhx1QTgNPBH",
  "key25": "3Gzo3etL1TBqQpuXuujVpQ1EPeaKNtEG15wztkqUNwQT9uy5RZ9Pbmp7ByhENpaZeCLnaGG4ywuQ4qKS6JUj7Q31",
  "key26": "319cbQP1hSxLuKuy4RnAgKpWWyxbsS6cp1dMVvNGU4Se3h7n7LvHN8Ro7vj1r9QdeSRHyoycR1oczGMeu2tipe9i"
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
