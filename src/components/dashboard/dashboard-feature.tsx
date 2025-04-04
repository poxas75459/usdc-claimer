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
    "63CPSHAwuGuD2W6ArYLeF6MEdrJdk1fkxfEtC6qBhkvTP98jdCyP9V93RkqVP4zAAQ7nSZ1b8c3VgEoMhAksZzSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dqstvydKHbzzJYWr87qao1FUHUNDNwjtLUXjUfnFgLwR1wSpvZMZpMGJWPZymMUfoqoZ9sCfpjwWSa66jEsjfs",
  "key1": "n8B3BAj2VQKGv5UZFXx4VatvgyUmj5d77YKFLPTVpGycCr6VjXfwD9o2TGy1UfowKKRBB9gTEhW8yJU8NAsbLw7",
  "key2": "5WCrma7QmJmpEiWxrDt2YGZgj1eXxBR8GZmg3euHjH81ykhubdmn7UDgqMQeeK9Gg1tSCXYeJvFdeeNnwe7hLZuN",
  "key3": "2nHcJKDYDYgLhTt8oKMX4vM9AhRayDXCbpU42yeefL3sEyRs3ZZSgGxKu9yfYyZXa3RNkeqju7kAWexz64LNFqTu",
  "key4": "45buobnzqgcBoUpi4oBLH6BAT2P6RtAGaMY6UHfuvh44f3baswfZVKkSX6kDuqed4CCB3UoSXD8pbhbLj629UgCV",
  "key5": "4XphLVWvJgNcYbYP6d653yLQosy9mThVwr84yx7PFapvA2HLq1snKTcBqfjNjvPxUqx1WrbvMMRDmk3bhbmbnTrs",
  "key6": "2RQyoUmLpSWbMdY5qadafHeXoqXjPxwXYN2PdefyvaRrzknjkjpg7bg8mfT9pqP1u24G5hmdapMQwS8P6g5iyRyp",
  "key7": "5ZRq1PhfPjkjX7Fo32HxGWRNxJ33AR7hd1TDG12R2hoh2PkVU5d9qbmYoNHUJqcEuE3Ehv2PbYodevi8o4zuAj4q",
  "key8": "2XveVh5QF2r7rNp3HAqr8N6vb37JEuJZZdoBJ5fxQ7BR65cjdpv2ZuoYkudF1PVu4bL6mWx91KAruusH5NQyGKAY",
  "key9": "4yUCqUeY3QUKxnkEAQ93DLHYDyTsn8MgMCSbN9oXGMt6pdMMNAk5jbuJjiH8ev3w93NCpWf9mC7va2oAiec7ssSP",
  "key10": "3HookaUK2E7uzcyd3W7hk1WmsA5FfM272nqf6Df5vQx1n4T5GHndZmz6Q2m2oPdCZKqDycm4QjNyF6KhJ2ErXJh5",
  "key11": "2rRZqcd5MULHCUMz9f3nn59jNejQEp3ViaXj6vihi8JRuKLHC5ehdYFL9whfNodLXCbyZZXFk1RUPFBVCosKYGLR",
  "key12": "5JnZ49hvtNmLumTHS2BMJcQAdUk4K8UDNfVYKXDq9Vd8ujQa8u5xPqvbL5LUHZyPenbdbhTR15X6rjztucxbXG46",
  "key13": "zaJhMr23xNnGiPB4a2aWThimuo6keymsu6Pvo71fxZsyfNdA7XtKWSQoMw7udYbW775vL54mqddSQzUFuY4MuSD",
  "key14": "3eCqS7yk4tmCBFbQhrTmzUm8pryEPnfevyAXgWuit3NkMwZCtNGTbFdmrpphGGp4FTCQcgWP75bdoX5RaL19caNH",
  "key15": "4cHaic3Wgpo8eCTmgaQYXjTpbCUQxaPZ7oMpn4YSaHVZ7THUc38w1tv84F49wQwZb7r8NCZV1qK3MLyx5j8kkKUq",
  "key16": "3Nt4GBa8tEfjS5MzSjVF4UkHBzqbtLdW9p3AVtyiXBgAXMYbnrrnMmB5sQXxQqviQ3YYJ15s72181nC4FphyqcRv",
  "key17": "2c5kqwpGRzhy5QaEeBNy4Uc4ofzQgU8bPdw2ekTHrhRWELG2PHiHAY1LF8FQnBFVQGVsSnY4oUeWhZ79G9ftZXYH",
  "key18": "5w8d5AgDsXHn5yhSwf5SNYGV2Yt9kB1dkdFzV8JA7TYXws4tCqEekAzgQHDewAWgm69AXx5mpBP7kfoLJX5hkqAd",
  "key19": "DL5m5RHbHrprxnYhgLLCQvboy9kqEpdhhYV6neiiWPEwi4GEa6C8UPMKNjU6fRDuZ8jTh9wqHvhu3a5qZsJ13Bq",
  "key20": "2UEnmoSR6KFFAVpZsuxjSJTdhhtRdYcShQJUz9qKQob6b7qWMTxP46ZUf9LQVRJWwoSpKC6QdHt5Am76kUpdENaJ",
  "key21": "61bTSXRoGDzPe6WTeGPRWBk1ZAd3HuzKpmCCvSmAPA1xPpxbRdrQVm2PmECUuQuBAotXWorf8NC9qF5LDtvJFPmd",
  "key22": "5ihHSc6RQwbendLz7yVZhZdXayM7DtPx3gfS6Mg4ZMXEgE6KHnRX1WJwyyFuErzJ4tAEThqK3KawTiCknJK6t5QQ",
  "key23": "4Yw5fPa3YgQocca8zvmHFN72EVF7Ee5LP2ygqebinvPvMMZqtLh7FUaJejfzfmfdtyqQ5Q81Zaxs5PeAiuCeSRpy",
  "key24": "AFEWzdseii4jbZXWBNJcUXyDUoMznjm1TqDyJqqMgPgmNPkUHavjwYgKdGonmioVtVfEowvHCW54TTxticdHsii",
  "key25": "32cu5cf55j3ZrUev8owGBFTVQ2hWFzbvppcP7nckjHEdgdUZG56kUQB42MQs7WXMLdkuq6F6UH5683dHDP76ZLhz",
  "key26": "5HNs2zrcb1nsYeBRaKWc3a9qmcUHQNaWbPKPCnmu4o9a7jS8Rm4KReKbb1ZbitmxTVW3nNqzo3Z61CTiVWGuuQ8v",
  "key27": "3ivvybYWgxFRrMP6iuQ2CSNadEGez2fgKhi3FsMf3UHuM1hAYEqBmoXDytCDdcQiV6mE2jVWnerXuNsSoGtENFzk",
  "key28": "49R9mepFiUvZoGP6AeH3o2p6PZ3pcAaU2RNRBsBXPkWxnyerbGymhY9LgzT4qjPdxaHTcbS6oqvywVt4u83j6vNz",
  "key29": "4gf72uMLKodxMoQfEqaS1ACab6JhEzvpqhwCjVqjZW7v7SsJMNKwQYsfbuGmTaLAGHTmXRDyXgbFv22fqZD7YcuM",
  "key30": "UhxsDxQc8kXGBQGnUjo7xUQRsWZpRq8oQSNm57sRnt3q2bSK5RQASpcq1Ff96JCLoPyFoWEtq6w96bpmzHZLrej",
  "key31": "2oybYiwV2UzC8PME1Yr3zUqFUMUsmgpP5q21yjd1JLyhZqUy2q6itir9eydQLdhpoxPm2j7Z3kcZgMXk1n2BVzZ8",
  "key32": "Rk7EcqH48gahKm5cKth4roX4YQcNkkn5hHgyc9u35LmBdnbLLBs3bpAKsdZYzszVNT5vYSZsGH87byMvVTEfHHU",
  "key33": "5vCQKuhYwNyzUV8P5QeUdBQv2Q2yGcdcxqdwyvkksJrPF6aH7vBaEgRDBppks4CdozQ1qnpVCcE5ur9WDDCcJocC",
  "key34": "4V69DytMGEgxDuAa6nzwHjjF9T2hPVPv75QNN2RnbcoLrUZqtFBMu2kaaQZdCXvnbLsupqSg4KUmrUsDP8fnHY4B",
  "key35": "3ph9m8xjMDKvBkVk8YHoStj3cY17jRVqRfwe8gNxiqDAMQ8jMLLzWxdCezQ3h7sVt2EmLaUUha2URLaRtSC2BSAg",
  "key36": "4Uv98zoa6VRuC3DXL8rLBkGpPDwF9MvignuyqhQPLBa1eaMvJ9aYfvw78zZwivhANJtiCfyC4XSPummfTs1LuSkt",
  "key37": "5XX5bNoqoLtimFE1pqDx15bbkgKmZYouYD1b8LAJb7CKixspKED3gr1grXxeZ3vvqzJpvX623ZC64ZSeNze85huk",
  "key38": "46BhYAgodMGRqQ9ynEAoj9tWu6yQocyqso3nmiB3u8xXMCeXeHLcsbHLFVUVkvJJnZjvThRy2C8JDGwudgfYnjQ1"
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
