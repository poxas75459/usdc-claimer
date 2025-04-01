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
    "3n8Nkj2oPQK6MCKFcpVkSP5eC7YPbCCsSFy18wENwb615KMxWG8ukZQPxC1dk1zQTHkh2dJDetJLEftESvURzg6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FfGZbcbPqcqkAds82TVT2u7cu9bqFWuvE7PxzGxwAE6kNqT3sYe6Hb148QqqYNWsK6jWrVFjNk6dvu53NYeZVWm",
  "key1": "4VW4pmkLr14qZzZ9jKctQMnqr179z25QttU4H4GaqeLVQ6fyXNG7A2s1rm3FuFT4qc4HAc4q93TxiJdRWjCt6tW1",
  "key2": "5c6VWoWg9mei59C78zrHCFYKBX5US5hNTnJD48M63vKuimuAUnXu9fDkCcpCvuBWAs7LJd9xCJmtGwYqgD9r3oQD",
  "key3": "imwwSNtVwHGzDFwVWYC9e849EGKrMCcLoQpicPuekB3wayE5bcnszvq3rMCxyL2bP3aPsQgjKCC6RXj5q6rdmhh",
  "key4": "5yPB21i4HpzfaGzksP7TsxnbVCgVVcPWJj3oNDRNnGXh6Jq3iG3ZFG6VoA6v51URpkDWTH2vx2zwH6eEKEJ6Agc4",
  "key5": "5S2Sv8UgpdntcqT3sZoLFBRWPvyQ8WniLuJySFqD5AtRoP4wphXGcT1Wd7kzRYV2qvkhSH33mtUxcxVaTinp43yY",
  "key6": "2sq7gHuhWR3swPHdtqS32F8KDJsrp7jkjveQKGifyGJsXk8vfzZtrGTkC2GoueqYZCBojsibFFv9rwSJCFzo7AbX",
  "key7": "5TYnS45Tu4CiEsymtpeyemaeTXeDK8o34orFkYf6FAeZa6juEcpQ9b12Uwvr7sDdtufvkEySmPMJL9avMFE75NvG",
  "key8": "xyB1R7dzauxzkpWz5xErRSh6N6BjChq6eLQi4DJYhCDddeWegEr6tvrTqLYDYT3qGrjNzQfVPXUtN7GHcwHJbnF",
  "key9": "3YbZNFMLjU3pkakddT4ZPp9PrBLBPbeEVihCmWangjV9CBUMgkwhQFEiTUZvgjkGUSeU5SUsie4YtchMC4e91MVV",
  "key10": "4MKrgiyE1yVKp88xCqPvQxyYKBaFyFCk6tFDGBueqL5km6iFwAEgRpnbh5r8W8d4PuAsk4DbpdGtKobLNFw4PmQ3",
  "key11": "2BC96AW7FkW5uH5bua9GMf8vZ5ZJbMWCx12vkDoWxfdEv7Eq6P73Z9BMn1evQwNTsfm5BmN3jy3ovYLDhMtYAF64",
  "key12": "BMpfPU5kdNahVaqGiqHjp45UdMKueHyFfS12qBNgbHgRg1zVr6yWxRso2H6FbwvcRZ1puY3mrr6QTW9BNRrUHED",
  "key13": "3knabcHnbxCa8w4vdVXN8cVEYWEbfhGQixfUD3eyNbTXmHUUqUDitZPcBJeCxmVjvjsLKHcrSs1YcKyPkmPHTafo",
  "key14": "54hbDNij1hcSQ3Y7JLitnAHusvmgQH1H9xCNq92VJNteq9Fi9Jqzg5EtKV3TLodzLxvBefTUhzexQP3tjW8GRsDp",
  "key15": "2ZBosyntQv4emkbDhTCyXQzZUatxsCfbMrx6CUQxUfQwvGtTEUC6rPNAnacGkvYAJKWfYedJNLuGfjNDWBko14qf",
  "key16": "3qeXaGYi65MrwvZoBzh9TBVfzDR9krTJg6FUe1AqVgDSaGSPeTuaMGozd21gzSGhvMuZ456qhQPwWWxc32WpDKjm",
  "key17": "9ZNJhSq5LiLjNonUFUrEUMZXrHNt7iz2d3HkcEYMZjgWVnEjUH4cTMSkFJAmSo6sebrpoxjfFB34NSgkjKQhHo7",
  "key18": "5rEQ74kj8sgDLdWrC28iVNZJkQo33y2aEAWX34sFVXjUSQzELY7VMG9owbK4sMrPL7fCywSV6dUykkgu1SURHs7c",
  "key19": "2kXm6PMKMjfLHcVae5L73JHzRNaE6rfNqGRU6Qi4U98guifv5ednzLsXvAZwj1Mqh4RNSjukKbHhR8cQe8gmmZKy",
  "key20": "5AjqC4xKf1pbFh2EvWRRkwLbPdF11rGdN7X5CqM1sn8Z5tGiCCdTk8A7wDHQahfxz4pUwmSm3v6ibPSziNi2zrME",
  "key21": "5V8HNn85Vf8zFHh8sxzdiynio91T19q651Bj6QrjLpeJ9REMVSGbemXsueZs1o6YDkBYfooQPSaWu7AcuywdZWKX",
  "key22": "2T4y5YiZQ4NTdWVkGPvHBNyXEgcYZfXcqa52rZ6QhD3xpWcjDc1oUecfXYbh9PfZDAnQcnqt9txjSrPKwStoZbCH",
  "key23": "5g17CSmCYKMWnLpfZgQeuYf1r1KcyWUU7e4wrXqPsTz1zaN2uVD4Hd73rgxfZAv3CuraFxjsgVZtwdtPHUQftSZb",
  "key24": "4hTyNEMz3tMQPrHrqTbbVvzqdLToiN4bBEWuHfVXxif1MVTDkBfZ7ZcFz16d4DwSjXYggif8djxdcxd2XVaCcjQZ",
  "key25": "5RcuQqakwsrckPjZFufMAJPpSHAAGEtjUTNCfKvnmmDCZXYSsNLntyGxwLMnmoqg2z39othSap8VeGWnXqj89R6h",
  "key26": "5sfyazTSv49eLNTTbHBJBMk8ojRboYjurWjqFSPL5VNpc6HhTTqVj2UkbhDH72H998ikSY7oRFaeEAPLUzruPUuv",
  "key27": "2YUYMah3da69U8psYiySLMk9aY1eK8itEkLFzwgXEEDr3dpwycKGn54JLPJ6riuoVRUrekDTcYdqx5jKuPHw4o6Z",
  "key28": "3BdCd96nyNGxNqRV4xiWtsSG1bbCEzYptUq63T3jT6HyCsiBYxm3ySYsNyhycoVBDQzEqdaGTBPBC6dvMNk8Z2Sw",
  "key29": "4o2xqToshw3oE7CY5RGt2zFyznZMToaeKHoDz3FAeFqmhrNwUFdx8LboknAb74UwmpgS2hZ3yRErb46whth6fBWa",
  "key30": "2EvQUrsy2jcCu9PeKdEpWfYGc92ebsgidXXTaBY9df1gyfKdTLWuQ3nqgjPvy16e2qa1VzxE91kdegBQxtfrWtYA",
  "key31": "LQHFM9QAjdTMCBeXjrQLgAYNzWppe9V8dqKDqZRezQRygEDCNya34LoM71UJndPNwNXm8BKpMcmxB9tgqPeuqwJ",
  "key32": "5w6uvSqGJZ8TRCT5WqjLfAnpgLhQcHdS8r167QaroUhTa9oEty2K6nwie2DoUUQUyUD5SEE9WDx388VzSRJzXwEj",
  "key33": "qZz6pJSqSofkUBDFixZXgu8o5LMkiq52XGSCeWmhTr2TUkLG42TWEuYPmfkSb5cRWGKbi6rE1dJg3Xz73qebx23"
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
