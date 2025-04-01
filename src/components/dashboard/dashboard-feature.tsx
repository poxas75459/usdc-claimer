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
    "4hMuqYEZbSGCPrtFPHhHDQ8a19xi18Pha9crwLX8u374TZDJ4j9TtZ6Jcfr5eZuqenUeXNVpfxhLrjd49xupjR3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNZcfzbUK6UAe3ragBWQCBrBkhExaLLYQ18QN4iidvAJRgufduEPGZvs9KXYoFN12jqssQJ1ZSJkG7Nf5y5MWR9",
  "key1": "CMsnBESBTSNPcTsEy8VUgsksKRrRWPgnYwTKoRN893cX7pMjHrqBus2FK7Y6jS2NqPQsUqDpWmzgjQfJgiVopuQ",
  "key2": "4LnzK3B7t1huLLWXG5mgpH94YSjwwVR8SWB5MvbofQYTTABurBS4RHfzVcTXfBjChfXnp7ahiPWhZLYzmiEDd41u",
  "key3": "2Ks9iJvimby9hnNwVeQCFJQrWmy4bQqwKtJv4ANqLT2eZjAxv45bbURgKyUfMJmrX4CWs4paJGkCJP7FtUSknMJJ",
  "key4": "4YTf6Cmd1mtfPgGkpnaffCV4V2BtDH62pTp3nGxHe7oM18zuWUXdSFb5G8qbzRhK7ZUEibmAv14kuBP6MQt8f75u",
  "key5": "5RirLUnW85QCbqV599dowYvEAFerScQ2BQwuCYF7vuRQKK7bQgjncgHae3Mi8ieJ15j416GxnBtoNPBYXVDTUUJi",
  "key6": "vb6FAmx5ZTcrZWyEg9ejpvqLpjJLdXmok2YF4v8AwDPV3y6dXJT8N32dHFnLzmK1wbzzG51kxfrbbGtetwqJyFg",
  "key7": "3BgJC5jxoNLvbK17EyqRVQrUHG999dPnjfNFjJ5jTPbHQCmDexnQinxxvNQkRHus3X6K9a8uiEfyPsbXjzvQ3rds",
  "key8": "5ueETDVYAiEMmRYLKms8XfijFtLEZ712ijrYvX5pKcFmT32PA4ZqZwM6odhiBgBJrw5oA2eSDh1gfBPYviL8xaDy",
  "key9": "3ZT3Tosi31Ctgra7mQ6aJXU4n6NF4NWuzSqezG5i7LkjKVEXpMuju8TjYWyPgadQjgbBcDc2QTAxWD1N1jvokwGp",
  "key10": "5Ym9Bd11uiv1WMjjkV2XvGQWn8u748WwWqjPkJtEmGoMm3ZByFrUQEpJjtociGkANrH88jLbak5mR3ar1gQPsRCb",
  "key11": "5b1ihWDzZTzbGWS5m1DajF9zzubPo5uuvKHznAjXcXA12r6WQikC9yno3NotPZmmUcbLQjj3h1RufijfUJ4wt4qQ",
  "key12": "5cT61hofeqnoXsz6yAqeSK772tgcKRdp356P3opmBn1RGaHrxHyaNuAvbqYsS5qwjUoEduiEpgeGei8jpVafAfAT",
  "key13": "5eKNUjbJbAVU3xhNnpQSUN6mD84fGdzjWn8Hx4SvaySjLftZ1SztNNQzgntWTVZ7UsmNZ3NRMvTKkTKN9Y9a8toi",
  "key14": "5NBBgADnYSk2SD84qMgL8Saz6b5jFiFMh88vDPdrBKA7GVa8DoAUDmXyk4YPgevSDLX97LCbJG5RmLACrgNuVQ8y",
  "key15": "3AM6ff9gkWLwP4sy1bFCY5UjWm9cN4CVSExV6BBgGe32nBio55sjzdvPeuAfDW7ufeGAyufYNTZ8ZmFf5eUZY3ao",
  "key16": "3GoksTkM3pFs5u8qG7bbPkpE44NhGAC8FP6J86yQcMCWFEpzoFYpsroUTEHScFPgfKMS2amPk7fEsZwfQr5KgxF2",
  "key17": "3viF5g99zwtECYu8t9shrQTxUjXhP79mxJMNrsso9SBuuczEWnndkFqgiu4uQG9msaqNVKtvgAM7UwcVKP5Hbg2g",
  "key18": "2Gkj8cn4ri85dXKak9mrLFdLKDCvMB1sFEQSdDCkJXDcczXYc3FALb1AxT1EDdmcHfjbg3R8V6YLfzGJXNdBa8yy",
  "key19": "4mTxeUo2z3p3AkF5QA8NyiPiiPngM1VYk2KaczNVqFmruB6HoVbfyWnog41iEa7G8ANU2pjJbyG3B7gaZm5yZYRC",
  "key20": "3DrTUEBSiiVAqm8TeaZd33ifrk1tFTM7F1eDpzqtsLcMqRVTdGcj1oURnKsH8qT2STVF9VUmwnrZ44YFkzsQo9Ff",
  "key21": "GrZW4VYu5w5aHdP8E1UMdjvi4QzWGaV9NPJwyVCY1r6kMJZrw6cuw7rc5qZBhjib2pCULvbK4dU76BkP6GDBerQ",
  "key22": "4aMzo9hY5a6kgHwtW96vsDF4ayBrJTKKYLG8cnqgH8KxBRDJYaEbYZtJxcud9QNXzchuhDaWzRWuEQD6TFL5EGZV",
  "key23": "4E2MZjx6ikZCmStfF5ZFwryHA31Uz2s3kkVGrUR7DmNMqWp4eKZ7g4Vw8zKEm8LCsJ7uMVfUCsjbu1UbVBE6xfEk",
  "key24": "3mW2ofLhcWQ9uoTffVxb9Nwh9kiMRdANSpRbfZ8bLtb7ShdPcbrQFTAjiueQTdkoaGPK2ACPipmvpUXJiNeStA5i",
  "key25": "5m1xWPRFKJUVj7EngeW2EBW8GaYNsRxHvRuaidDAuUkjycFh2gm4UKBMwPxp7g8up2b4SBsapK2xa2au1NgXi6JE",
  "key26": "4mhMktmqbDjjQkgkHYm3MC2oEza9UmcfMZL4ikenM6J3oAZfxSwNBcwcMDhBVyyBELWic2p2yeosntJwWkZ5DYvk",
  "key27": "4kKznvZkYvAQnx4MJK7N7p7VUd4fkr7K3kv8eoRNZVadP41CG6r7P1bMdtuvRTL4UTxYvTtKnUz721fameBFpYd8",
  "key28": "2WrHTHJJyN3ahLVYsZo6czS3aUcyneWW5tWXcV9hsxm8XpVJYkbpmXUZbkR9SffL6nBDktpdrvbvZzFsJww6hEjs",
  "key29": "57ft5HAVPgsUbwX123GAq87587eYByCBDW84avs5XxdeApnkJZuJyrixVk8mJET4CX9M6vV7vPPjujedvsdN6a6Y",
  "key30": "4y8bTjbRJTwUhzpMut7BQxFFU9BzSNtSfFAGHRus8MRKF1MEvCY98c4vNTYDSqC8F6Kjf8EqPs24u3aR1hFTjZL",
  "key31": "gviCiuP2Pv4ck6J37bm3NFW7up4tF1uTUWZM4jsnAUsKPrptzKGvD1wet3DGq2M4YBH8L9ZcCpodT7y8cWiGieX",
  "key32": "34JqD7M2VRvrDyL4A6JrzFhYbh3zSFHzBd8fqGnLUd6f1QMAE8L991d6gpfUHF3KcKxb4UvbMPeAquQNSgbYgAH7",
  "key33": "tauspjensPzmfBz2JP1EphQq2QRth5XKwcQZeWYESyLHjNdTn9MJm2Ymu6BK3i5SytCdUzpxAG3KYC1rsLtwAfZ",
  "key34": "Xj9VCqS2SXwUGr1Tzo9aAs6eHtxgkJPuBXY2vnosJhJjnCJ6mAjwTu3QQFeCYq34HymXdT3GcgnaeJRuFoDLnoy",
  "key35": "5kGB67hUn6WKoGo4a5XnmjaxoSEQrojrJPqPSWRcCMxZ8TS15vQYyfrmMSSSC9MMe9JQb7Q9N6f8qJsuRXYSEJnm",
  "key36": "5jyiqswdycRFwtzR8xcu9bK3yyHDx81CsSzDQozzAYwAyNLmr1FLwkHwpqzq76SwMx96CGKFnD7RzxNXkxeivWsU",
  "key37": "3h2jzsYa7QoV3uAcCMuTLPhavJ59jEtxsehGQfxxzhMYkoXrVcfkHMujGDSwTtKWspm9W7Luy7kngHS5bZEV84rr",
  "key38": "XzX532tyXbC38CFW4qyc7zNRGWVrz2Yh5JDea1eDoDmAoeYVaMchKTdBR235CMKfDVcyKGNDikGuqHxmZEGGuB2",
  "key39": "3XT9P7fjXupQjfG6rVnZofcu9QVAQTZAGXWknvfvBvZpbyEcqAqToLrcKzkGx2FiUKxkWMV2A3M6GnWgLoqnpNFq",
  "key40": "41XCqX1snkyjZj9vpaiQDh1w1UKw4wTQPgjxAYwFy5LsLk6FR3rKLJMkuMy2cJ9uSoz5sbvjfHgyT6rM42MMrV1j",
  "key41": "JFg1TRoNJ6siMsvPygNwLQm9utK33sHJP4a7TNV2WdwuVSvGNHE4NnmCz5tBsMTpzFgW9qxKC6nezE2nXpYvhUU"
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
