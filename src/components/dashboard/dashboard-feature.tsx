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
    "5QU7eyNf78o2q1uhVptsDXT3NNGmJjLuB58d6JBxoch7rWL3WT1TfVh1EZA88QWjGCUXhQVwvPL9Xo5BjbY99sDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qdB3VMDSL5n8rQQgDYSZkivhh2N6ozBrrEzkb9FnrWpM8yuEnGgytF7KUrSKk4tv4vjsRwfw2pmhZU8LV5ETe2",
  "key1": "2cxpBUTkyEcM9sXFmT4m8S9PJejymmdM9fvnWpoEekx3AqZ51zUG4UHdStPdetPyvdbvK4otLkfW8DAdnwu7KW33",
  "key2": "3uAgtxJoC8wAnYua7QziRxobCg8DXtyVvhv7MQ84mxSGTiijLqWEGYzQNYvMWkuPDzxUD38JMu4GWdXdWiWybhxa",
  "key3": "3BaYJuq18da7voqTjZjAR6nZq2grqEjtUdkmnhKj3rDVQo2bJBA3MNBWWyD59Ck1qQQ9hdcgmq3xAf5DTxzRQEND",
  "key4": "5vc5D1kja9betVQjEccENc4mAZCFjpgQjPZuCphs1HLwxEiMxUrtr2QFs8jrHNic78bJvRb1TZ7fxrSw2z6rWpPC",
  "key5": "3xjpdvBFEC5qSEEjEpcLfzws3shT8Ww5qNhMMKDAc8U8TtJDfLn2DXCS712E1Wj1Q1GvVUqBYcmsiHGB4Q13fMzH",
  "key6": "2xu55jyycZnAwUCu5a5bzSNGSURvcsANPE1zjLdmVW2puHRafUwvQ19ZAdH1yaUP8h4cWYp2aE6Wvw2cvzzPeuUE",
  "key7": "2dqee1rD34Q17GQYc8gqTs97ki8TXXERdW2MfDv4TrE6g1TnuzRUaPobfDYG2hjvuAbG14CsoiVLhAp58cjw5jHK",
  "key8": "5nzreKRVJ2fCQ5cjkG14MVK32iU6NhDMMup3ZJuBKp6HA91H6NAHJPirUPnDg25cwxqQXGPqSHAT5AdmtXUt3YhG",
  "key9": "2p88mB1HyUDyFAYJgXG8okw2JyP8omTuLBc4pWLqBnKBzuU31VjonqhNfpEn9hCBqwCLKLvmxNc3q7PTbmKJt197",
  "key10": "27HJPwJs8f83JAHdMLPAXYVV6R7VLv8RnMMpahnawx3xibuwLzdMXFgmV9exs99WyPKZrNkhMArqWEwnaQQ9daeX",
  "key11": "7afFFcqfKPCpvAsyxkSPvxqTtuoe3hAS8DyRUME5Ec5mrva4HQxotwmRWjZvk3DzfE46PPLLGKwzePfQZTxVzU3",
  "key12": "3J1rRKhzVMJaXenRBDJrKvyAbr2Y9zZBCivUrJN7ZxrjqdNFD4eeLuErcQZZznd77Zx9sv29yX7qXmd1W9R4zpe9",
  "key13": "2T83L1A7GmZsEP69fCm9iuZzeRkzxzpccsdQyLMDkDixfi3QuqaAY7Yq7EKDhVPxwXBRXW54ELh44BzhVXSLbr9U",
  "key14": "4hJ3U1omXsJGwPqVsicEMZpFztRapp5BtEBUVA3wCyAvzKVZL5GQuahzs2bnDSuvMQtdZfwgpTPqsdLTPd5QTtNg",
  "key15": "3wv6Rf2im385BHTns94iCFNg9vsZV24mZMVeqjcAE846cCydL821UdEGBTv2kxJahqri8oExNReS4Wr8NFG9ftDH",
  "key16": "3Lq2qmWE9NqHfVWTp3spVxtLECgW2v7PhAhf2B3HmWbdvibjLGz3kiYMCR67H6qUtQyHMedWmrbZ7JXoBUedspBG",
  "key17": "46uvGZjZwcV2ikvL3RarVwtxdguPHkU8yUNHM2grMtyZzW7mBvfo5qotzvjv1aQq8Nkw3bxzJcFsWWj1LcD6VLSU",
  "key18": "53Ak49QaahxAri4ToVHtRUjJBTt9R9m2unZeumY51frhxaoCpJCUFaqfWPS1ELWva9TbQhs6A7jJfx7jS98Lx7g7",
  "key19": "4H5wWLHKmo1d5dVjZRgAJ1jdmS4VMpQqdipegLMqS5NPL3SHBTwxz1TaCyaBpVj43BjnicPSRro9NkukVAXso5wS",
  "key20": "34Af9xAsHQCSPxmxVanoGXT15hG4GVADMJiyKS79LyCDkKKnUNondmBzUGFWEqPxdgGcxm92SYBokBG1rwZNA6T5",
  "key21": "5NncVXPoWwVXrWTSLGGMMMfDG4645oMKbo7Hzf7KDiKx9vZ8fmZ5ST9oPjWHBN7VN12kTNSd1cYHQmCSL31JnYUE",
  "key22": "48xKRY5ZyvUyNxKjbizNFXbjdpERNhjcS4Vx6YTQrnvVHireJoeRspjNWyZJVXS9VUxmK8X4HUAtB4c3UkgGQmv6",
  "key23": "4gaHv2nq1wA2xKyQ5sQKVVX5GTdq4xKAKkRQwwTdFJ8cXq65SespjDVkwf96UNZEcpQvt8C396e7FurGsFZd6guh",
  "key24": "njMEPqYhAnYz1cHDNxMnRkdK9bXAYWBKa9xyiYbNyeiEBPjtiLzYvnAgNPuaWMhVEGe4CUz6No3kJnhxc5PXpyK",
  "key25": "66f7EZDBZEHmvsV8Lip11xSwq9nmSpMfVkMAnPxdrL69kXKCAAdKAsdphL5B6PGKEoVxeSA2E4aRQPnCbhG8GNAS",
  "key26": "5WC5EtkyYaAaomCJr2EyEt9seruSwPqwH5dxmJvPQ3uVTWBNsv2pg9RQdZLasa3F8H5SQT4TMyfniZyAJQNbWHdd",
  "key27": "5BdhcN82Q5Q8NwppLvy4v8jEKad3L68BXpeMkAyt3zvspGFFW2uSrbVTRapV61JxtMPVCYDFzJwq2cL9NgMwqDAn",
  "key28": "RLENViY2e1uAWRE9aNuULAMoamSgCee1e6RxKBGCaMQecFNdrvrLJDaBhSpZKf8wDQgGAhi6itDvCndA96Du1Lb",
  "key29": "2RMdqV9KLJ6g1CxsKpEJCso618EyN4ZSAN2ZLnwVjpL2Q6kyPt1re6oGhnhS9RT9Ee4vqj23jZmEw4kfiXNCDMke"
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
