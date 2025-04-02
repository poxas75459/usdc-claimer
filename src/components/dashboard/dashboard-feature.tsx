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
    "2hAs8YLVSaRNyL9R4FfnAxiicAEw43yeGysJ5mEmKrtfW1JFSWqZyeD8DrpnAGr9nYjzm6RiqTBvAVf8YPN2HDXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43yQJD4nRmgiAjFmGWtHA5RkEyXX5t7aHth2cECJQA7Je8ZBi4Vtb47YPhLydg2qMSSLRFmqcLfMLcDMcAZMCzdZ",
  "key1": "5HozLeQ5U8AVSGXRfPJubmmZceWk7ZAfkVPavYj95fqsMAiJvieCnYE6nfZxjBSo6pa9giwsWEmou5eMRmckCo6P",
  "key2": "4FZ2b6EPjMsbajjeQGEZme17tLB8rVQ27uycX3e3XqXKZ7JQkmuAWfD97pEdJ3GwQe4CsikFUPW8JTZQEia1ocpX",
  "key3": "5Mge8gfKZE5H3UjENENHe6DRxdXwFRbU3KhrSgdBRfiNyY71swa974h6GtgyBjXeqg4rNHKUKTC1U5oaRohKBaNa",
  "key4": "2njUHcDgrRAeT8uQYHVMcaxLLYdCHuJ3FVAbp1SdyGTidqB6icnpkefA8iM4pxq6UC5BEw1HqPBEKXCov98PAF4V",
  "key5": "31Hw2C12P7gMaijANFi2hAm5chWJvN8Jf7Tft76qR81AgrphihBaMdUy2xwR9NKdyK1f4Lo5j2LW4mS6T9Nmo2E",
  "key6": "5krRzmyBBoNDKmXUB59BMSENHQKwBQqQ7XqEG3zgDrEVc9Uyazmr5Pffbc3d6Y38SNos5fwC47jZVBEFfP2ci7QK",
  "key7": "2qZx9TLJ5Kqd72Gwo5EM5pNakGoUHX7cBK2PMiwj1HvzXFbxPqP9VWHFuEqpxgQsg4Cu6fWpmUQ9quWeDf4S8FYv",
  "key8": "4gfmtqCR6e8pgbr1NnYEQ9JYk5p2ipjBfXH9mzmTwB6sFZ8cx7C6CATgvEfnD2DEzo8cjGm2XPVKyj6j7NP4ExCT",
  "key9": "9UCMCis6M17fpWgZeNvkik1gMLAD5xWt2dq2yvFXYUxsjnnVhtWCdj2oEZbGTvKPHiu1EsiZ4ETmCFXJzMizPpN",
  "key10": "2G7fNohZunhhfmyoyx6wgcH1LPmyebTwEq8tTrjDorx6FUNkBA561TFrnzBE99T6rtP4LRnyjbGhnofuSYZ4x8Sz",
  "key11": "2oSxCrDXCCKUFGtD3DnLBRgUwg8biJSHty61am4rmGCRGoLSnCPCTFkUuZF2J2Gg6QseVQDLTbfmpZEbZeFmreqT",
  "key12": "3SQ6LiYMx8ZHRMguhP4JeBEkTALV3J8KRnjd493RF7g62WZ6ZnZLGhNCLkhoMgLfMyEUEkwLLHMiacBmzXXxHyn",
  "key13": "3zwJeH8MDTQz9728YqJDWLLsd9hDwZGtroZRKUyvFRGKkgWVoxPZcjT8gBTFbW2Np7qWozAoniMV6598oTEEfxfT",
  "key14": "2Jk13gU36mKgNjbCwWGdBF73FDFyj4JmD59yGdj6XZDjcYpkRUnzQhj33GS4Jw2qEbBnov1Gq5zyDacWe7YpdNRa",
  "key15": "QcnUMkezehtiB857NGsZ4Gh6SueuTkHwCqPz9UrePaNpKDyDW6hxtEpU8tndTqpwDgQLh16zwTRqiJnBvDaJcit",
  "key16": "5zFEoYTszyKtFVaboeArfudWfXp3d96oumXrvxquxTrU5RuH4SJPeXParyst98mmCKiT1zvxAmbP3o34fReW2a75",
  "key17": "3P3BQzVpSqSsmH8eQAi6NUNHxRMePWikeZBqbAA6VWyKj1LeCm4BigpSeMNjYAnoj5LBedG4zXQyZ2dmAEAVfsMG",
  "key18": "288jQb5WxWmdmF4ggkUiyzNYDimabCaYjPAvnRJfVDHMFxRW7jDTWsWb7iKQXcEhTdcfEfxoYWPXH3EDv8EdXmAg",
  "key19": "4YRjLQ6qHNCPxStJbbfytPZj6BQyrs97CxMuHfAzmnzjhRWbMTZPcBqZWCQAqW5A932qEmnes8w6g4fygfQsFXgN",
  "key20": "4YCi6YzrKhdaX8HJuTqxhNJBC9vdZrgKgAz2YL3PggfQBW1dxwMrsbVrntzHnF4aRyMaoJA6yet3qfqsnXjRMDT8",
  "key21": "2ZqJNZQNnwm5mEhfCEvNRLDthFDYxLvTYjqWyTUp8HUvbit9kk2GVz3HD7s3b6cmXptqty1EKDSADAfVgCa2d3Rf",
  "key22": "4WLPtFPkqtZMLv5az3gHNFze2HyjjQF8hCNEEwBsCy3kbmDsr3xeKCKHKZcQWsiWVVEw4yQ2SoZy7NLCfSVwU456",
  "key23": "2ExPFJBdtfxuTauodwfbmfHGvcpwhVj5iQVk62sBWSMDp1whbWHNeeggJDUaTU7k67McTvH6vKhkWu2K8MgtkqBf",
  "key24": "4HGVVDEptyYzLGw6D8QXCg7m4v1CwDtvJd74CdUB5YMG16FcaiJeGnTRdgzJCta6QBxrcTXYBG9vYRgsaLEg2ZG6",
  "key25": "5VKrkqevG8S1FZReJME5wJWtkJbKqbz7qCZ5FhKFrz549t8AASF4ALA4hs4Hfck9fFM5Lic1PDr8Zxw1PhwrBwnP",
  "key26": "4BtoiqBisj1DmHrLvyquUWqErdtCYhiYMLHR1ARcMS3VA27eTqyoxJmZG77eqdfNU9aLrM9DxGrFuSuAttxtjvvr",
  "key27": "4sJZkeEUSzh3XTCBuTvw4j7mYydpke5z8mB6kvdfkjfRmQ9kNyQprjsVzYBRnDTpEXH8vMcUjz4grzvwd8E3FYus",
  "key28": "2AgC57SHDCsFWvGtCNpM7udKBG3FTfmN15SsVMbj8MDSQbJVsnSLSRX5t4H6NcvSfaEmZagySbsYbhA3viwTKR7w",
  "key29": "3tACG1oKhQ6NbLKBsgCp9VQpvcXRvZVYxtCoePgQDkYv6XvqshZap5Ht14TispwiNaosuZNxCuka756pfhjN6ZW7",
  "key30": "2SgfxagDeBbwyDAiMxZv71xJvXdkhB5LPrVxhXMcPmeGV8As1RVFqVxQdNQiiofMXZXMjiRchNNMHRzp6qeCDWVo",
  "key31": "2687wpXh1pU4KGt9jJDkc2Tg65NhPnJxZZ93CXKHg8q1WFGKgHcGLpLebLAhSp1xJF3bi8hSwZa7DZe2XBhU8nbi",
  "key32": "3FiNAdUhr7Hx75eB4LFFzbCmCJr54muv2qvCSgRt7AJeHnTCWhm2nisVGuAGBuVfBbVZR5ArMbckibu6T7V2LGFR"
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
