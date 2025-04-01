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
    "5kZ6z4ZpE9Hwxk6py8WoaBzNGdxSJTE9LsFshoJfVyXW9s47EfPdobxCa1QNfamuUPKwu6yCtHc3JQWs2iFf5QnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5abvV5LLqgr2QUTYsK5F96EK2avGayB6iqaHjEgNVCEYDMCavivnysDuqg3PXHyoj55e9tQE3NMVDxzVydrzQa6K",
  "key1": "4hYxP27sJBj7h3Fwe7zHHaYjbYvE184THv6JFZ7W9WnsQvezuMJL8AVJGvK9nNjN53rmANMVV2dEYberEc21WPYS",
  "key2": "583LiXeHA7HGdVfhyBvCeXrbyc4yiPxkgre2kyUa3BEsemURTz3yYHq14tqFYxtGBCovJ436t662dUjkQt1ha8Xq",
  "key3": "dHGjsEpkJ6GyPA7J8bi7DcxSZt8Q4mCsCwfK8C2KnhSNJ2FnPQBP9r86ZnBBA1ZZGYNTjjyottwNRS9cvXVrzK6",
  "key4": "br4q945aYxNoDLgtcwoDtKvNmeNspSgTd6hZoHHvJHShN2yNwFQoQVEhfHzxt6Q1NUur1w7PjQiJYcfY6Sjy9Np",
  "key5": "2M9YE5X68koypvir9FC7vyUGdGcXcFdXESt2oNYo8MYYwWSc65Pjy1Gv2EwaQWFXdVJGjiWju5yHo8k8nHukXvjQ",
  "key6": "2m1B4sFwDPjSJyWH7kebVXg7SwdyQZgzFziHcd6Ap9k5nuRtyaMxboyNKeTx4rf4veWPxtmc6gLWfr7hTDoGSnR7",
  "key7": "3USvhcPyApEchAQVnWpXrS6Nocp9aCW7V76sca7Jw9RV4N8vmY9RM4UMBTjuEYEUK46RGoGi2HnVZR2xJHxPu2f2",
  "key8": "61HMf1CmAWZahoDCY48jnStZs7jdjDCbsGXKD3pC2gwKPPziu7wUo2SgRBjF94aXSEyry1rh9HGeHb6Hmu56mCUY",
  "key9": "2E7RuYqaUFZT8dXmFPzjrnRyfzg2RBy6eqAUTagTF9ZynoEv4f7y17TgTWpvLnmTMfb88CFDDPWPBbSyiBnfJP8v",
  "key10": "4HtsJa2pX75tr2GyGR8R3YWrX4YiEYWsHa5LX7NPCMMjffdabj3CR3oRYpo8KYu1ZRUGYdn4inDiNtr5ekKRmbk4",
  "key11": "5VFgPMFpQy8Y2WDBr35iqabioiPCgfmMAjmefoXe67ocv1VjsBTvWeyYTiY5ctrjUpui9tVL31bvAkYe1pKQzeVm",
  "key12": "2FHmBKRYU3kxTUybC2KCVfGia2AP77joPaX4Kae9q22tV2ibez8sgGWjWuqXvVB2WazqBJGxuiZXrHu9KkJnSCVt",
  "key13": "4zFGTvF7nfNz7mSQeAKf5MpinwuA45CwMmdzrbjq8fPSXdZEya3b1NMzpA9AkMYnKe2dSeKU3XRHvx9qC3XvyaeW",
  "key14": "rF2GzND2maKxF4K5agnmCB1ngRDbEfeVijF9dDeTdbeZfB2MQWnuQbQbekSRxqUhdRyX7194vBo991Nb2JLEPSH",
  "key15": "5WbStcqLuHVZD1XCEGDAV33WJ5QDTAF3gvEmgxp6WrDQBGQQfck2i4ZtcF4MTG7J1HsoZpyqEbYKSibdp9VrMb79",
  "key16": "2ccRREpyWZdi8AfKwGxGbbrx15FUzJBKPKFZ7oev6qKrPzmyskJNcb3YrGQfm9x9gicsZaKYJYrzeESNk2rZuoKy",
  "key17": "23Z5KUGBRUcbnowiPpwmbdDv1bni5ANCRhyfNEFzZiZMcaSq32A1KV9jse4zfxLzQdiPg77imPS1KsKJMQYiSKDX",
  "key18": "4i3HSpqsnw1afnDy1inKA7nni95RY5uDFJTU2d33g9emggrriuxb8oUd3drLtYbEj9oDJc5MnrHGRr1qPohQKZbp",
  "key19": "2r6srm7TCMJ3zN6Rf4Xcm6PJNPePipod52tTXbTBTn6sfhUkAcUHgw8j6rRNi3VrdGh6KTfkSvAMSeWr41JC3SHv",
  "key20": "4bPZxTQaHph6jAWLsPm854mFUkuFLsTefysoe9rGqEhJXRX53wnRk9i3aiN7QbiaxigoTF8vaMEdhD8zwVrTGMwS",
  "key21": "5efeNrkKQqGEseDFZNpDQYG2vaSDaySLvJhCt8RtM8yJwdYqe2aXEhc3ftbtFckDVLzwnxGV5Vs5ptFNSh3c5rmH",
  "key22": "2kRVrjF9Hq7PevDAD9L3qMpbgYvo9ZjumabK3omHa9XXXTb1fF6nyYvthhJeTSxJyxM1UnTWVsGQyo8e5oNqjjZ2",
  "key23": "5dx9DwoCBYBaYJZXGfPN16fqbNKfyoaXeCDvfZwJEfbHucY86KzJfq4YVjpchycj2bkVhvK9mXCdWsY5FohWjgwJ",
  "key24": "2At8CMex29Yuh21SjkoTR58RN6HGDD7pspowxYUXtc2eeWoaJE8kWTUAKHQXgHunFamu32P5hYN2Nz94NnV2oHnc",
  "key25": "3S8rYPof1vYrS33y1t5bBA8aKrwbG3Xbemg6ZUwcpG1f7RTRttTZxoXxWZqdZXyd9wY5Zxdd1bFqkWFoq5eq6bzh",
  "key26": "3xmqVeYUJjhnbPYJSYzd9SKNdM9u4nrjz8RD85yRsddgBjtTpCPkHcXc2SY3WqkfSrQmBA9jtFQuxGSuAJ23CWSf",
  "key27": "znac4wjY5PmRzyfcawU82tr3QhXgzTNWAHRwfAWy7hSeB7hg6MJCmXijzL6vwKwPFkM1G52oPWUeqYqN17Gj4aj",
  "key28": "54k4teRCTcMJEfbnVtah5cN8tQfBdC3h62Va2tWspu6QEw6rpP2Q4V72PgwVv4arbe2E73bbz9UjzByUg27JTGfZ",
  "key29": "2ySHrJ8dpZteZKXm34A8BTPWW5xuPnjmB1sYLWnvxCZnDaC6x7fwxd5bf7SuH6t8EqXfNY5KshJ1jf7AxbPqdWSS",
  "key30": "2MdU9CuZFMhKnEztgYy9eziscwBttsHtrURdkW6eocX6Lcrf9bmfXpKGbJc4vL4MTu9wRY8UMQPePUeRomwgxbAW",
  "key31": "2gUwWhDvQVfUGt6TpkWSj6ZwUyeFqxDEij36gCjqMEuKmBUHzHpQyRxojG46EZK4P4MWnbWffgs8LhaEijKnF9jx",
  "key32": "3bKNusbLddvSKRZXjT7ch8K76ESyWcUhg3QzdYQAL5yDU1zQ57sp9azg98jTtf4vNaQaycR8DQ2y9SvpzqDRJUof",
  "key33": "5moSFqNpcCd3ZXM6kPNjWRMULF32qmpSvohUBm2HRWQbiPETzZ4UDWRFHqeNbDiF29GYBWRWT4chVaFnbr1nXVee",
  "key34": "2yDYRF8i91Tu2ozU3wgssCEXJPaChMtoD1v4S2voqwcpfUFAgYWXavC3AgneH6QVcPJxvb9UBkjdkizSm6ijCX9c",
  "key35": "5nTy4Pr3WoxU8hXHdG8LmStBTu8ZSMFAe9WQZjEZpj2ZoLwZXKbsJWrd3fv63sZBsf8nycNDQ9QdA2kK9bbxDt3B",
  "key36": "5oyLJcU7hofMUN6NemT8C8DFN4rvEMY6Hg4fT8ugwQvMTApmx1HznmfDuynKSJ4Y9U1nkkQ1RVFNNkJNUavcdMmR",
  "key37": "5FyjH9heKapeFEaz75r6F7fGxJh9zhWPbwrsYENNC3c9gbvvkWgcAtRYWMztAMqt7niRFmEpBVRCnuxjuVe3EbAP",
  "key38": "363pEVAxXJAfZptUSvfWtGuSLif86BHzAvZu96ujonY4pSFam5nSuAqPSrbbDJUKeVExozPFz4v4Rbi8mkqeomAP",
  "key39": "2XgQSCSdKCpimPcozpFAW1cwcJ7iFr8agAaV4zuKjAEim2WRGLstvuLWkLwq3tv4qXHPeFWxT4zAoAFg8YfGSn3j",
  "key40": "3QZgAyk9BxFGSgVT883nttLWKQ5dqEZFyAc2Nuo8xJe1CfT8BzuGmhRFms7dAiZpmdX9aMjMpbzeZtFNjU6ddbtY",
  "key41": "dQsqDKuh4mfWLBQVjRfV1hZfRZt2eqCQetcRV482W1JybF8LZji6HAmYyCkYzMG7Qrcba5iiDLgNxGQhdpQZj4P",
  "key42": "2mNNGf5t7eJt4D6EbB1kHVJMV7FfncdFAGqiKhRmWyab5orZhqNoYJSLZwhWeeCijNJFFiKa7RHVmHrxJ5zTjUTs",
  "key43": "3M4rmbDTkLNo4N1sDaSwBRJLQ8R5mAoUHut5DJQXAVdJ2jSaLMhN7VJJYe3iECASkRGCGDYR2NTyYqpLnMv3T3r8",
  "key44": "3DBhkrd581VkT49U7c3MN3pDL55ZwCt9twyNRPF5NxDV9mReDXULsJASiqxGPih37pNKhkyvFyKiip3osMMphiSR",
  "key45": "2vm1TNW1gvasKCN9YZsAvtA5CRtRXXRDHmEMr27WTXZBbZy4LmBh2pf76g3zZPvP95249j6wUYEU3epZheuUQBKo",
  "key46": "2SvZs6Ue71gEjL9ZH2mBij4aptaPPPeyoACcVHkr2JE3VvTZQYTexzvEhnPfU4hkqGHVJZ2suPeXVkkzRWY3U4Ju"
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
