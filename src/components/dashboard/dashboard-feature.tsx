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
    "3bvMfMiP8VdtZ64gDvcPUgdd1yjJtPW1sAi7gA5fkH9QLRRz8DDD9ckpC1PPbT4vjuhhJnW4WtBQCxpsNDAABN3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KCrfSiCs6xjDip2JVCNke3eU2rdVNLNVoJrsUd7724GpRwdyvpv2zY1FgQFPRPTgiojhRezaa7v6w5o94MXod8R",
  "key1": "5MmoJ4ydDWfZSsUEv2kvL1Mkwg3R4EmGZnjccxoLdmh9dwnoCjEBLiB2KNKCc5avyytMzcdUyPi71qtxa6eZniWy",
  "key2": "5suWFDgxr2mmK95mn4w7memaLL7KLLwFiHH4ZUTxsiX5dWzphJwjdTyT2WubNWVUDjAi1vrkLDz4MCDBmx4xzzyc",
  "key3": "5N27H8ZAtvA4rcqZCFSEU5UB4UFoW6gdRrvZFwwqLm4mxyTiNfsu8ocw35A8RQhZMsogdz4rLHToiF1opjBSqxvd",
  "key4": "2PnR9DJevAP7FpmshPL6e2bxZ8UZZeA1UPtWaAxF6XYsSgr5ZjVBUzLShZXt7V358khVwKmJCRFKesW2hMvhLUJd",
  "key5": "2pxmfMxT61nrNY7P3ezVu1WfGYSPwAjnKyofCSRyThS1hbHXXM2DXHVicjTPuFDyUr9QE36kMUFo6QJjpFzDiN64",
  "key6": "2xXpxhv7MgeoxT2Z7gQhitSSRR74xaKK8LX6HvXN34bDtYv85jUMhXdzYLbyA75bevfWWH1TGJJdcJUJSYGkpxkR",
  "key7": "23tiHudLNwKAEud9ZCi9WqMAg9HpuHcgPdjK6J2xjAS3Fesm3RnW3eA2iG1f7vpc86V4Dx5RCYEgSDeVt7JvNWKJ",
  "key8": "3RxRPEb28eYFEAV9GW2efJDFQJUDK8QZmPZ97PRAsqVnKHZRekcvNsbdz7ajqxWi1ZoeKtsBdXwPXBG4XvJqTN3r",
  "key9": "2Byk3aPFc3khCCD2RjKFajxWqg4UYLBpPMM474wYLTVUamPnkmd6EWUrmomKySN13AYegVHFiwmYx4WMZdagGEDa",
  "key10": "4r2PCDXpbcTBb19bx3647yvoTAWjjUMpzMPmbZ9r7riZKoPkUtbMwEowTWqu4BeHwgU3ALwBFCB19oZCkQ5Zn8rJ",
  "key11": "oB198akQCRAjfCe7VACsMG9qgwR6SgvDdTbbEfMrxXBQZSg5SdGLeJsJRrR5CHnSFgf8WNv5afbExNFWH1nh1JY",
  "key12": "5K4T9WobgFkoVRQhutRj17HZ6YsJNS7V3iAEznyUP9gd8a3afLAJgxjAaMYQSFVPwoae9UDaRTZ44HqJSa9GbGQT",
  "key13": "5RqfQdrmJgXTJipFXuDhw9raw5a7H4nxUEksNsFskwYpAKa2Ud2uTYHbsiRPQr9rN92v1QxzA8SRRnGuPzKDEjfA",
  "key14": "44ZES4bZu9j6g8vztU52UHGoyrNgYS2jDfHiLZX4apXRnYbykxUfvQ5myrko1kD7VKHgwiuPMZwpBpCdyYGGMiQo",
  "key15": "4S2U73diDhSFct7Q5Sp63Aca42uUjrYc5oC9VmEzg4d1tFvNfvKnEdT5WMpdo3rNVfjN9gi7ngwqr67eFmWVHvp7",
  "key16": "5ePKXtHgwxmYGpTRVg5jo5fbokzxe7v1ctxbyKRXzXfZdZWiRNpnmyV7h7YXxo9W5vDst7z9c1dVkxNebbXK4BZE",
  "key17": "3oejHvy65WNucBhXR2uiLM8ifD3ZnhQs8hAJJfPYssUnjV2CsDAKRF81NoGaNpUG5MjUee6MopFZstQDEcjmvzMH",
  "key18": "2ZnwgBB5SgVzdutDo3agNxMbSSCkHeK5JwF8UyyfsBfvJ15sKHggQU4og1muRHzF5JXNsYqa4HQiq6Y9tBij7qNM",
  "key19": "2FaXpVTYtEg7Mj6G934mzXhQu7aiPSvueezMF3QRteyhruVHeyJGzky89wdA13nAKMMB41YXexicPsTR8cUP45oG",
  "key20": "aBCZmkWVbXbKXZqqmRXy9R28FyDQz66bW1dM9keeapv7gobUReoC8Bt2oLAJDnnMs9meMbo3pYWjZFzCJRWpifw",
  "key21": "3BaoT8qAUwgbvjFxQ5rqh4Yyhqmmx4nsCAZV8eUfMUkXyFmpDMPNRy68USyXtiZDZu2ykAvrNpNgSNNsUQ7eFox5",
  "key22": "3iXLkA3Jx16qEEXJMsVdkSqQLqzze1L4eymVSa2GLNyE3KZTBykPC9jMaqcUUuBK8PXgJ14jeeQut2D4wRASNmF",
  "key23": "38t6qpLuNrf3jWN7qaKT3QjEqytq5UE3N6jfXZGGTvKnfYnRBYWgYBf7P5tHhwMwVedqgik2YqxQ8BXVHX4bSkfu",
  "key24": "xZoNbyoKsUbLUDZrjaGcY2TCsgjFBNJPP3UPh2S7iz96BosCtNQFmw3RxjtPR7BcvX9riRrhCPLnVncZXgF8agn",
  "key25": "2ZLrB87Uf3qJEhJ8ZasbXwQeGH2CsAxDoPt2mf1cdaH5hjk8E32k9TeAQKSorKu2auTNAmhaUkfdBcRHk24b3yjh",
  "key26": "21YPprd2ofRN2pag1JmibXAUPrZJuSYZL2gfmuGxNgftJwLga6jSEceroGS1Rf8UKSSbRE9eZ1EccPkXpKupd6vF",
  "key27": "hWRHeKNPodnRUZ3J74T9ja8nEHBMAcyBYfr9Kxfb3wZCj68HXJbthKMT5L7WskReoAGqut5QrX5ABs8MuGZP27Q",
  "key28": "2rXxULti6eeCg4FGP5uAiGVK91hNbqGtRpPFid2UDx1PyxWw4iRvf9Zov4TDuSchBuuoJ2zz3oxRF21dAV1RS9nX",
  "key29": "5iPee9oPzk1qF7gYqhRovBT1tWFY3t2Q9E2U6djEPKEg9cJbU7w5KjNstuYJFbhNWxgGcChNK3rpYPDUehz8uxf9",
  "key30": "5Q2JPV5kk7jPrq7n3CNc9MfNt8PnS3RSRCdJEkxdkuFwPRWW9v4E9ShNkW5n2cRqLVEmXH3d1ijxnxxNU1CoR47K",
  "key31": "4QuUZH68y8FhzoKtWfqVhi1FSn1MwuZTYgCeEgXdEVFgxZ4k5bGWwCLSwChi89B1yyQQFHQiwqurF67WmuLTsgrM",
  "key32": "5VdnX45FouzonZNXBpCNQJ4FK2Lvqxnj4BpRfV9dLGSkrfpVMCVXLKpstjznNPmUM2VkVjYMXJypFV1ZxuKmpTpz",
  "key33": "5vC8u3HaqNoXAtGPtcHLboMMcS71evzGjTb7nuicWKLmwSYLYJDPXU5S1U7ZoEPuhLpyBc6ExubXETb3wpiRTSm5"
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
