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
    "41YPWKZDSBgjMGvwoQX98fQwy5Y63C5arC3GqbmzgL7JxWyyiDipnRZiRSuebBpQugLXF6DDCDdM46fS7CBmYRxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tg4gdNdmg8mCPipCLtgF75LAs1rLGzuvDohU14MtkiDqcfi6gqdQ33GSWfRFsfQLxS4Q6e5LutfDejkWFGskuf7",
  "key1": "9gdB1zeJoHRjq7cCdDq2LoPprCCAT6AJxs5U5KphAZ8MzFwKZeDeDGwtaSriQghhLpbpK8VJNrndT8c3dB8sAtT",
  "key2": "2zsXSFfpz2TVgh4278iQf2nFw2n62DhpSkedLrgAkmL79dN85nv1GPvxsTcBMmHNc3B5UkFrUM8y277P31tKcnJE",
  "key3": "3vmx2pwRpim7EK6rrLbgVuWqU7U8Bra69hymd9Cr8m5tPLzHLvRnbUFdtdcn96Djr5iPjBqBvKqHRAc1N9V6R1Ty",
  "key4": "3qm7jpmDpkfQnWSyX22CsVzYkARe5pGh5HqMLtPEdt3RzGYk9texb6rXMQhKsmoZ9M6qufvWSJ6Z6eF53cC4jfx5",
  "key5": "x3GQoBQ6SG6q2ACoYbeCN57PMH1tpSTZBm5NFGPAph2demCiH14ZYtnzP41vvxJMDanAg5b6nViKMjxHqqbP6wf",
  "key6": "3CVNnAHXfDUTot9xAT8ktX3e8DMpQtQT4VEvYJkLvqK4wXJkz9g6Xkpn9dDkvGiM8pRPaPoBVEifHR1MZrNH5TzP",
  "key7": "2GW99bTR2pnKVxRrdagWwRjT6MV4ZQ6UqYpb5fhANSDjWa8Bc7kNJozdt7BZLGChrrmtBTbMf6m3RkAaJ4wvTh6c",
  "key8": "5DDyhgG9Bco4Zme1CvAvNyZ5HQjg696isCyGfVT2otFY59P9jHUb1iPCk8vq3n46BFwLvThu6Q3PWsqXoreovSSF",
  "key9": "5ZkL3GYT3Bub4uySejdhiyzcTDXzEehp3hJAgGRqrESF2gsXsmRhGS7aFvGQJE41VECKLL2BQriXbHCCvXhU6fhp",
  "key10": "2TLTdQJw2Qad2MNKpVLzELb2LvFe14B7qySsPaCht8i2EkGAZkRFtYzBWrAFrUoXHN46D8f4CoP1vf2aVk5wrruo",
  "key11": "5Dhh5W8Gn5H2DHPjEbQTL9GcZmQ42p3LeE8QAbtrnUraAT3AWpXT82vTZvb32BevLvDnqBTSZBoFDSk6jehrQ6U5",
  "key12": "4SAo1rrR5ta2GFafg6p3vWtq46jejSx5cX1RmTajyaQp3i5x1WMqAG3argcAEpSVG2WbWkAx6AT8aAjD8UAYPCYp",
  "key13": "2XLgpgD29r3iTEnVF7TqbZTFErooQDzCcwhKnQnrQYFuFRYM8afnZoikWfTJW4kbfM1jN4jmN4mAQXNmuUSfMrKV",
  "key14": "3fB4m3nR2EHgtC3qYcEPDuezK7jJUqVjgNYfquFVyNjdW7HsJxz19BTYmtvkj4ejY1ztz2XN7Xth173UEYNxVWvd",
  "key15": "XZj3MFWk2jUWEK4UYV7bwPG35WFbNQGNoe5CJEWbGUeUPSAchAn78qH9Hcq6izwGpfW24TM7QCXCW3v1aDeWyqE",
  "key16": "h1eN3DL5UAsnswxSJDxpPDU3VYUaV5Tnh1H5stNtY8rtxw6BR3XR6zv4CDrjLN9m3MYHMovMZ2SGYHDT2hF3KGD",
  "key17": "4aiXF6M3PDkKi3QuehShzmwF8ygdNvE2ygSKCEg9ceUZy2aa7Fkpit1AkQ9QgdgiZd14eo1eZT6toudCTNAaUhQq",
  "key18": "5rHUw3Fnx2yc6vemiCPQt1m3J37tMJ7AA3EwJdtowEZAqT7Lf5THjKkc6f99LUoLw5eboDr7MhprD4HVhJraPiEa",
  "key19": "2FhpDSribHWdVBCW7X6CnhbiK61JmGMxQAyAKeCgzSUn5E4gVhv5de7Ai15xGtrfUQ6QXWos2X4ALweb5xRUUWFQ",
  "key20": "49n3Ax939HwKNHdFMr2YQMYxp5bTLhBxkXnwh1tBVRmv86D5hEa8CmxrEdHs9WnafSBNrnUGWtc6mZBLzBCUU6DV",
  "key21": "2vmdm44mALcJrwhejKupsQoh3fM6HeALwVPpW1jsuR99MA3YCEUq3Vx53T7nhqoQSVGxQZEyxXqbBCdyCS9otm69",
  "key22": "3pQrJ9gFEQFqtfipv1UEnShUhoAyXwyNjeHMuUHircB6pjNJKR8dYtoZh6Jab9dxgVSBAwBnNxqJrMcxaVmacu7V",
  "key23": "PMKRxsnCkJpQu4iZYut5WdmWDSoasXQFwx7zHN8cvCMuLJMr2TKjuZfUsM5eExzxjpgPX9Mj7CspgzAZJfbsWJw",
  "key24": "ZDk5qciNqA2T9YPSXrm8TdyrPgx89FTYYJqx7UqpV2Kd6Yn6pBGByFyDkycVtxqNR1CrhrNVot5mN1A4KezkuHH",
  "key25": "2dfvwYPieYWRv3a7uYCYx6LUVohFnmhYPRE4ihpdBPuicX2NnzMgtwpkjsE8Rx3aWK5772jXUawmVgCSKWhiJbKJ",
  "key26": "2U7syXPgjHnNrFwg8jyTVR4mUZofcoxrtsFeQF5N1YFNSUjL6pRjDbzoeUyXqMExCRi6kUABEkJvXvgQuDQ5gzMV",
  "key27": "2PVn6zRiaf8SDH1bPvWyYPxuaDF7WcsbuLzPJitosRt8G9eJnLmzdAynWff2KYFWL9iGwyhNu2bKVHoNw4W8AP9j",
  "key28": "djm9fS93npqxKrXycjshT4QG5oQmWJbDWXkEhQzPgvtePcqkAreuUx1uwVt95HXW4ZcWcZKgLPytsywszknGsTG",
  "key29": "3Sw4yXFn5GGueWD4vGyaupmdeBD4L7nei2e8PsixVTWn84mUptmjRDkZUs5wobKgQAzC4S3pjJWTYd1hgx56sreP",
  "key30": "3JgUDy6U1wagDn4kS27fXHsDjssJC6DX53wiopfAzuNQhbYRDb3EKB3zVBb6A4vrw2K8q185jCvmHkT8nxG177bz",
  "key31": "38Jivv7f18cHZtWMnPU7NDsGEi7tg1tZbZSbX3SMqgVrinKWBtGCcD3uZ6nvw3YLYJhL4oMDz1DQAm5rmTySmRRC",
  "key32": "231UTbtThaWioPzHWY8BvLoyqTwsLEVMqmKwiVpx53vcaLBgw76JAUccCFqQy1vGk1cztkf5Rj5UwEyqu9991FAB",
  "key33": "5Lx2b89zW1HP16vNTYPssGv8wGzkKPgsKit3ZmehhcC1mqsXHmrLDn6TDe16ZHnmHhZaYRN4TTMvmzdeSH1dbgYT",
  "key34": "4Yt2qkBtCpveTjtVsG2fAfo3o6WP8rooKahrgHetb6h9CTiJdPK2a3eSymbJXUo9XDw8TjMqdriDgkitxdpNNdEv",
  "key35": "3QBq1sBVi1CUnfmeQcgDde6muQKtcPJJvmfavMEibdsWQxNrLQFPaDquxHrY3GzJUKaLADkoetuTUu1dr1F6sbfP",
  "key36": "5K8D5JDGyr1q4CKYaB99a2RgsAN2cer3av1kC73BN9cZSaauez8u6kpaDEyn2cyahoVhfw2gYjnDZrnJPeryuASb",
  "key37": "4bceksFrkjyURYBnVtJE9PXJHFeXnsvJHJA6iF5Xes2MAJYyhjLkxwsLc3yoojiVpx5ijDWsVrMhtb1unyN8JdFY"
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
