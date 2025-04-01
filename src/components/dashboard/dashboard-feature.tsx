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
    "3btBmkm6H2i5ygDHDZBCbjFZAuV7gitg7pCgTPsfQRyF5Jn7t5V9g59ac2PYUeJKuSszxqJpfMN2RJDzMrfrVFbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HEsUGxyapWsabjeQgxFwyHExHYxpPEXAEmX3CB5aWuLXT51oK6mXomoS7PWGtEDXhXWyUiPUPUzi45pNtumLm4f",
  "key1": "3pnggAcxfG8mwXo8MYitSuSuDi18VU81iVcnKs9iuds4EeAAXgPgxZrSfSoT9Y9F6Wor4vFm74QDQTphsY8so9Yb",
  "key2": "4LPFycq72tBqwgFCU9U18mRYoBmih6YzSRd7SJwk28seVWv6n7ZyBxxkhYR2rZshMEtf7twWBZiLkrr6iKqnrKvG",
  "key3": "r2nym98JSYr9Jac6F5cnRSTNYorCWvPnPD4XQBafBxX6Rs2pCzdz23bg5imS3xQME5NxgJaa7gHNcGVpZLdeWhG",
  "key4": "363b6YaCUi2w5oxoLQea5wfZ8XmVfRwMfSY2iSFU5Qp1hSwnzwWpanmQexbxUkLhBjXuxRmASqnP2MCDdSoA3hts",
  "key5": "db3TcBsV2z8Sr38CvFnceALuYsVXirnS878uU4gpoM3edkWBJQ3cihqNMz5LZ3JdkbBpNSDndssRvduS9ZjzLy7",
  "key6": "57ChrdRXharmJDXxgxxK3dpmpR7G6Z6Ajz4gfiP3ufwdeaTdY9NGvcZrcN3qzfKpNS68DBu3B6M5Nw2Ztr8VHVAT",
  "key7": "64gnVKpBLgsw27Vf1FTmBdEPjRPm74tcn4CFwBHaa89sXnuG1EvAcwK5PcE4jnd3G8k9s2XAjyCYQZiaU7yA6PR5",
  "key8": "YtN4gLMnaE4p1oZzBLnKknXHczKJij7sJHnVqPEQ2E6NYQCm7wNVeSxXXrU6TDkzLxTDrr6NyMpHKYff2bjkDeL",
  "key9": "3Z1BoHaQ9mdKcDRESw52Hj2qDfGTKkjRGBJGAbCeZN8NaCyCmfbrmTVwWHN4bpEPjmNXfkwUH9g3bmKGze7RrPni",
  "key10": "3bAbNuYpr4ggYZ88oJNxq9ttCHTqveA4ZXn3vVbegE4FeThoAoo7qfqCgUvdX7ego3H1xDvECPhasUGmYShgy1Rw",
  "key11": "5LBtAVkgJ5DHuxMfCH9DpCKyN3NbhM9Xr4sfiDvimKeaq6mutM6XyXERgmBu2gikFo6XZQEnsUdyTH1wFHPUFjys",
  "key12": "5n95tbvGXambmTwSutiupGK1k61ejUsnSoWJGU7aZ9JKAmd9zhYcyKaFCwTnRJkTQVSj5dgbySCM9ah6fXtT5yyj",
  "key13": "3V8BeEqUMXM5KjdxEmVma27vKb4wM1wdxQKWzh88VrJnuu7phmRHS1PuRyQhVdsgTKcswoF2joK7HHhM6xLJE84d",
  "key14": "4qfzdxU6zDFSuEWHSJM8b7oEyeKV1zafjvZ9rysc7JWZ7LHNpRxatEpEgfAfq4ddTqMMqVLybZWFwyczaqrWaLZJ",
  "key15": "WwU3VHny2izFPKdUYdSGMY6PXgouJ7MVx5QnasUtkADtGBsiZ6ZxAmgcETK4pLyCgcBitTizJFCFDipbM7TKVMy",
  "key16": "5RD4VPELX1schGVCgfi7JYf7ozDojexY8EcwdKUxX52XgARHpykZE1gNgLeMm4h99UXTJKfRWPoVnmuPNegkvgtG",
  "key17": "4fwFQtAGNePeL3EYfvtGhQHb2fjL3eh8yuGy6jFWEGhUaMKNmD7pYF6W2Hjg9R4UAQrPN52nNrKv4JE8b4qDPDkm",
  "key18": "44SyqYQgQUt1xannXowKeLN1QxXmkx9DCrHtm2SBLnYPgg4tZmkgW9eWgYky3Gob5xoxsMXvi1w5jkoXc1whTVET",
  "key19": "4qmfFUaesTiEsXR3eGqrWbBcsq2qc1tVnzAH6NZU1QTNq4YuTsQq3du9URRvobRxcG9TsfAiGqKUPWGBRDkToi31",
  "key20": "NmAEgEgSq5WqdNm3JbPSvvxBUCgcRGuAuPeDMtdjQimyXH9mxfMqrv8b4pLijZZsW1gb6T4AHXz9FvMg3NC5EV5",
  "key21": "28jnueNnWDSgyVQS3D6KjfYqPm8dNrn663aUsc17LSjrscQ4k1W3hP8gJvLntxb7uNtZZNnKvD1ZN7786iD2kyH2",
  "key22": "4ptWd6u266NmNSNWeRPG4tPhmJFkCxeeNCQHg3XhZUJKsccw5LXs2y1DRRFknLXYeyDc2qfTYyRrSVmE2ShVg7Ee",
  "key23": "59D1iHCLvbAdxoMKzTTzGwWTwENAmxxmgE6iDE2nub3CCmLiN2nig1yCgkfb2PqMk2e3npJVxhTvMTjWGqLtxRrz",
  "key24": "XAGoKJRBxuewgRxZb5EUKFQCuQRGC3AyC8pS2ScPMnXyxAMQPhzBhqvr2bgTZtYjTv3f1JKVsYbvx72uXm4hnYh",
  "key25": "2r5FeLKFiriykhTsjca4WbEUj2X21hvAJmVoqzs6sTjZA9Zamwqa6nTZTccNRudGR5Twu8m42mCpLSjjJtoYpgwK",
  "key26": "4drsR5zYrM35fjxp9D5J511zs7m8ZkKm5hiWjq7FY5sNy9DjSZg22asJs1xAhkmTFd68uChWhtShqQaF4SKiGq8L",
  "key27": "5z29AXhtBUhZkQT2pkPNiYJFLvxCh4nEBXqDPX84doLW5mhqgCVW1wg1i3ecmjj3ezLEefHK6jYB2Dj86nmU8RKj",
  "key28": "66RMm1cndPozcUG139BfPY4VK6VZ3RSMLCcXXoKPbNwMyGkNtCSTqZjYXQxeKXvEkw6hbfsRyVDbBBtsxSJKZCpM",
  "key29": "2VQinDkqdWMR7Li7mGioQEvPaoEVrCpKKB9eAixCHD6NjJzmNt6renfHemzAaNPVbhBG1Xzy7j4eyRkBbEG1qNyt",
  "key30": "cGMM4ci8GAHeqkX94bWzRCvdjqwoGAvRMAfsAGRVMnkVuGiF35sd45tgBQzxR7znqyCj7CqUDncepEmxpuExaKJ",
  "key31": "59K8KnCYeZgpTZs7iPyNQJNn3KQMkyB4NavT9AwVFyD4HwQDNRE6YixGGNqwpRFGxXDTsZU9UeiByFFbpqjfeaHB",
  "key32": "5h1rBBEd2fbAexKQnpT1mXGP5uJRyvZLi6nkmGSGbmQW27WJov3bHv4FX6GAK9mYJSCAJZ4ULW1U51oz9iD23KzP",
  "key33": "4KvxJNKMzKCHSBbvk7GFkfiSnNb1Zr6H7gc6H37QUuGpRBYy5xB3834W2PAEEmfS2AgfRPYkmQ5tLk7bpg2vs6V8",
  "key34": "5xva9H6AM2ppBaR56zXdB8AytYUnh28kdq7sZdNNT2Ycg8P9LvbsMtPq7sHp1haa628VdUbN5HiugHfge1dvek9M",
  "key35": "NEz1GAwMvSwb7y11jW5dRKj1uUSQJMCDsm4H8f7HMDzNbeGGgKHp9nc85PnXgav6vnF2bfZPaQiWXhpPWQgNGrd",
  "key36": "4mECaVRTw4xHzYoBFfQZSFiYY9N5YnzR3WjLp3xaSkvfJmhJT37Sdt9mb95zH8CiBurkH4zrWRoQrNcJ7DgTZ72Q",
  "key37": "3YF9ALuX73FddiFes2e9mM3i9xX8FFS1ymkfVwyLhyDBYrdxkFzgk15R4hhyG9gemeQgKP2jZC7CDewwyXumssEk",
  "key38": "2gWyXL4gDUdkNoVL1iubSYd3kRBPGkTB99kgBy4jbEEVoLuaKZuxnuzAJ566JBi5bvgWuDCrK9MrsDr7ZT9eXgGA",
  "key39": "3xCgPYEWbA51zKp4EmtbtuK9AhUG71s2A5dcy9rYHWcLJJaKUtGNNHhRP1UxFnbGvvY4mGYASbTDviM64xW2CLWY",
  "key40": "3hb1v9Wok5F9MJjWvyFMYQs3yh5f1fgSbZvRxVGkNG1uUqWWayqa2Nqo3HRFT3nwA6ZUGnwfKGVjHAis61ihUJYb",
  "key41": "WTeodG78uRLDhs9KdEfXopdYhcH6Pqh9Dbknavu9GkAXoxkTUVMQGnMHcFpyx2ggTYipmqLigC1tYJ5YffHZ94s",
  "key42": "5UhpdS9xZuYdy85TYc6hPyjCgTPg7qgPnRPL6BTMZhesyW1QUGaLQ1TGnHCKSdQfMe5UrmfoS9J47bwqjpi6xhDw",
  "key43": "5B3Kkf7cR6qmzk1ohwHugc7D67syHv34Rj4SrWpNvqPNFVUhhiN9spRF7o9X2oJNDWaLEBS7ehiEJ49nA1xKJsc2",
  "key44": "5ZSqz2Bi5yyCHKuoe2ps2fHdQZM4QmortBWDK6WtZqGV4JF7z487SXUHeXKP45VD2v4Qai2W4eWgZcW9wWDSgzv6",
  "key45": "4pt13FTF7zYsQ3eZsN8yFFbp3KVD7XWL23ANMFDyBKeqyRy44ZQykn6x8kyv8VbQtT2cmgbGpkgjhnp6HS7DVUkM",
  "key46": "5wE9SnhfS3inqwpKpznmPY5LAv85xkM8uWsoZ1gVXZjfL5V9SLhrU931EG3b3DJDrp1qJuzZCTH59Db7xKEdrLkm"
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
