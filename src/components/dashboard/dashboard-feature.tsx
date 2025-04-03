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
    "413jucDWHEj53X7UKRrMARFV7Jc5D54HpFuEm6RLk3GGWCGp7i8RTgLkFqPetuwvcApgcma26a9iiXm6irHFFwsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yePme7kNnYyPEN5HAY6bLNrczebY19mzievs5gXBPHC1pcb96CGDhEc3dtX3mmPUnW4TWYQ6i7SSLLkKCkSCbNT",
  "key1": "2PktMLSn4PhK4oNFkcWr2TJKKAYNUnADHBKonyoVxai5Mio4VTZfgYccvi3SRPLFqo63JdHMe6FV5vzN3RNzV2NK",
  "key2": "23VaYwTjNsKuMmmHum9LJZXTmq4dvQLWF4hM68NdUrZciXFBqM2vjLhQy7u52ABzrV3j6gAsXZf8WXkH4RdsLMbd",
  "key3": "2CJwKta3qbHdVNRPzkfFAHwn48tXFYWvJAuN1GWz9nYtiUbXfVfvHnPw9w5SMUdP9SWiS97xthAtppb87QVdZ3qa",
  "key4": "2k9jz7VUhv4rsVigv7RqG5YWYuGN7jAactJfxu57DjCYXSoNhJkveKQs188jNnMZCDyAudJRUGm1iQc9EFEnZPnP",
  "key5": "44a12yNpmR9uKEDoF7KG1Q7Eoq3XFGA9qpv56ZCRgU7jBYSkkauLtramHUtHYNwfqXHp6FtaoQprAgHKnWrpASwd",
  "key6": "pHVpgsGF3vHxxm5wUfsBp54vaFJMfubco5qzuGvoE19uk4832rqNsyScXBfrg7ReBJWVosVKuRreChVaDjFJe2Y",
  "key7": "31fu3LH373LFJ5VbzEqp1tQxUceaNF4Wz1tfvGeQ4LapvGgtgzb7k4XpGgukb42Aor818DN8kaYoRTKqmRGKDqpY",
  "key8": "5R5GqTLwmukatuqkWyMo9Vei1u7FnKnNiaWNBFD26G8vH2p4SSQN9ajsYYMqmYcW1R2r8xGMLfZz1xQoGw3YcuP7",
  "key9": "2AMkkfMiN7GuPmnAa5vkiiR2dSADUQwiHZwQyQGPKYJWg5aWfcAo2QpmrCxGDdezJeVFY62hkamTzcoj54CX4aTc",
  "key10": "5nfnXD13YZu6WEz9pwDESd97bnrqZ2qFHBGhrn73eVUJMnLDwUDM8voovcwXnVLcnso4UoCqHD2TMpynwt83EnwF",
  "key11": "2vFYGotjdXfSCjGqWqdePW7BR5fDozc1pyd3dQ7ApuP3LWMjHGA6zLJFL1hRFDy9DtA7GNLu447sdddPFtzGnYCG",
  "key12": "2nuQ4QrVcdid2jD6pRjNmaVu3SJ8iEFrM7cobAT366BLGJM3jJH2F11bgquYHbqP2DNY8cTrUxYoU7stcYUW8rhc",
  "key13": "47KwMQVW1GP2As9bV9JzBHWsDkFYAxcqKSWXfNG12Ju1QGHp1q9YXVPo6AamtHCZHYxLB8mPrs5mDQcVsaEkUcg7",
  "key14": "4GPRXt8a9uzhR2eXTNA5v1oa32ej2DvapsjNudSEHv85eVD7oL4HFobvNuVdiNepJNdxVPhjUWEWx6vrtBhyqBsf",
  "key15": "4xGzNcSDEFmJooZVm1M46oqPQem2CLnPejhfZhUaTP2SyaKrqLNTuT4EXS3YZLTsDotTRrD4GzP19FhTTqRKCMSV",
  "key16": "2JWgx2Dgi5fPA6uRuYsZrspcKtEZYFMBLq9qiBxQG1XE5W6y9aEDVUJmkHkQeCNEF2xwkhEnfEVy2JtpSyCrLaZA",
  "key17": "2Exzfg28JuJ348EiSbt1W9H9j3aRAMZEDW94usUH3o9mVDjKH4LhzLCWhospFwPxGXwC8nNtQ43vh1kHJsCVZJb7",
  "key18": "3igcq2J5HeuGcDtHtZ9o4f8hmpiZm8nknsCEFHmJr46HEbBi6BzGSayUzPKikUcLY7ZMzWUtzmcWF3P5hX277V34",
  "key19": "5M79YrKZ1QjmJAiZTfgGqDAAznSNYM2KGTcCmsF4drBKim9yUwN7Wbhf5yi1pqzGeGqhpWHNb2b8B49MefeP8vVp",
  "key20": "3mNgo3ZXPnjEXyA2PiqFzFDSd9TjzTSwACsKpYmN4U2BmSQFDxeoUKJ1LnpVLcsRngN3EiFGTprT4uobwAkEon4C",
  "key21": "zWsMDDJ98BiHqR9yXhhtL9VW8F22WLXZXNcepGf9w9WxaJ3qikdgFDuC9Q9C196MdgubvTmA4zc6HZd7C7jDwy5",
  "key22": "2Wpr4KyGT477NWsZ5CU9N3eUkYgJwM5JqNpLqm7b1bR6oGfnMZawFRgnqJd28an9UXLh54dWy3Xtmd6wxExnYpR7",
  "key23": "48Mr2f18SMuT4hvKxUaP7BtqzBBuQpvgNk9DEhqUNwU9RCvdmhkddgApA5QZ4VWnmXRNZccZc3iqrY7KABkEzgny",
  "key24": "4EPf1USfZ1WJccdadmpPoBGAcuv5W1UpxhhtxfkoPCGVjjQCahv93H6uRUfWrCjsvyeX2VKqZ1Gqp9twRodZzgqB",
  "key25": "5idvyMkSYKiDFR3XzFgaEGDAwBDbcCHg16zyZLwqH13djMbAYEHZRQH8VtuTXF5VKX9jv3Lidoc4sbD5sCxqYPYr",
  "key26": "4KqxA1RDWS8TbzD9CfZK3Kzg3xmtzARz3xEP7AGyhdbNr14QfjWGQ6hBMGkkRMkezJBxFSYWZUi6k8gzLtKa8gkV",
  "key27": "36qiKQhxjAE1WyEqnivqM5oM14xnXZXL8uP153AqEwvFYdwpYJ5HBgBJND5Xjm5PkEEzUq6s3JN5K4JXgRTDgSRq",
  "key28": "2Bi8eH8QJGkkkRYAEE4Br9vQLvpPfCtxin5jruwzuo49FefRCRmmLqGXNz8XwZsSYhoX5SXumSrc9ZJNiM26cFro",
  "key29": "EowU4DYqfJPL7nF5spfSw8VJS6GWw2wFb9WxssZnC7hu8TPTcJbtDYgBbhJuTuizX2qVzUNR37Az4K1C2S8rhpE",
  "key30": "WMyRPtACZCQV5aP8M1vR99PCXfJPBbYECBoSRvXBHBae3pKFBRPnyVs2MiozsKkYongjENdApWmWPvwk2JUeFZ9",
  "key31": "q3ASj9jwxjgm1cwM2cE4tBaH8kKqVb4mTFtFRwQwEjKpk2LcF9ydNrhD3rK3PmBXkjoBUBq4Kb21CLNW1KNeZBz",
  "key32": "4xZxgGsD7niAS9oqQb6ZyVVw8hdNfR8Edbtfbs7JRZnPrRfeUD1UMGuwjRNTXE4xXqPRj6aTrLVUR1eSVfJTo8BD",
  "key33": "24BJyA3EqWJNN7ehx5Jq52HNM4uSCkSxFtJNoZCqyuHiPcVXQuR4F5eVXspBEPfbfgBwpGRSkm53g5P7HJF8Ro29",
  "key34": "5Y82FMLPqDLtBhx5zMbiYNnzgC2rjgLYpaPGXnnPMk5U9bN5RZR5N9JzY8pFpBcJFtK8Yir3RN9mk8zt9o7PQ3Yq",
  "key35": "3FWMzXSQoHLTpewoRADf53tVmBPCeu8YKvLXdYi3m4N9ip5rFw8ZUFKAEaAxHAAqHuuzuoBbMSgP7HU6EYWYDD9S"
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
