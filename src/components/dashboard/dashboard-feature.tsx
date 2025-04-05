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
    "2sj1XGHe9N6jpcgEgDPo7UksXWKkZ66ShjJ5taVY4KpimMjMKU3Bk1YXCBcYxohmm4GZ4PvyPfKc6ptdFjVXwyrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5uM4Ud83LLnc4f3LJG7Crtbyvfu1Kn7hYivMenwV6EkqXUrK2x4sQrHGAUmCyqHcYbPZdd5N5cjTJWLLcVWsep",
  "key1": "4T9Yfqenuo9QjPomamcYCUD7bXD4DDyvQaKpH61gAZdxPwCt7jk5SsFG3no7mvAbdk13rxzoS35eMjtYSvCWozCE",
  "key2": "3gL9uhz64YiecPWiL3RFWSsasMEaNiEQ4JHJK3wudWrrZebBirmkHGvUZZHpBdkDdVyJXmFgtAoUTryetMkfKf6b",
  "key3": "EG2At85S1vyJpjuWaoKuLJmn7qQyAAqzeMQ26M9bn5tUAvjugtCsmkvzhydUXPRZLj1zaGQcr1zYXu3PJ75Kry2",
  "key4": "k1vVJU5TU9miLWNMeDWb8h3QGg8hgMAU8WsZHEBwCCWAGMBwo2Giuya6ucKVWxEpUS5z7hEHr8AFbtHQMcofrpG",
  "key5": "59RcndmFZdzdnH2NP6mxZYmE7SjJBrNrAFG3mPpTY9XNctzCZ2J1jtkio5hMYQthP41Wpo4oMzD9t5qsBQ8erDm7",
  "key6": "5pMBFVwEBR58HLJatCQwdiwKctreNdTgmtJvdmpeGJVgb6uVnacYHfxuCH3Z8R34bNpjnSZiKTn4waTP3kKsHwXi",
  "key7": "5sfFNoAYauWE6QAq9amAWaNWnauBny5i9EcsRykjuBFMzKaptYPUMVTbc7TZkz3bSETRzTxUbykND8dhBMGFvvZK",
  "key8": "VMoiTGtCVNA8Zc5WjHAkUyDnU3GHJsWDKJnaNKeuqXyWDpWeNg6qfP9jRrBxqmjW2hni7mtT1exygMhX1M6N9jc",
  "key9": "5zBNBF3NW97zoZkTwD3VmpHybKCrCT9y2DcqZfXAw62JSQA1B6JhDokj6iX5uB9KBpxA2Vi5SuM44driRXmUHso5",
  "key10": "5t46oUpzEQnuvBgJN4apkPyMt9HA8ULb2HiLLe3FPATBDrGJAJKpEigJoRPM8tpipc1WgZciyfrGYpUErqza4rHF",
  "key11": "31TedBhLtTvEhykCqDDXFCzGNawZNhJ6NnwkkzhX19SGqPpbTnQE1mMfSffavfwS3eVApLEVFGb2HNojVBwDpBMh",
  "key12": "59Yo3fgSdTZCNs8nJehyotNq6TbSXSLJeLDNz28c2XrTMnkHskYzFxdWXo2WDGVjFQRaaFQJN54FdEuJet6tk7fR",
  "key13": "5uaD9kEVDgbmH5RGhXfKywZbA6PnSicXN7Nm6NjcRJyKA4NAP38gEiGEmmiXuBa8nLZ6YKYrV7srYF2HfNHUvfkx",
  "key14": "4N3myYq7DYMhXVtYEcTq6Qmw47rcfKWfZUXWH2UKGddqKRC4qkhLBezR2JUX7GgaMdQqY6AVmZ2N8DF531N1d2Rn",
  "key15": "3hpaERVw2LYmVxPNkTvUtz7tQfpB8ukhmhQqm8vTonFeQDNEducxyGXrYdxD6Yfo2fGMnfigQ5Cy9KFRmq3Vhs1T",
  "key16": "3tTPbJGwFdiDiMbwWGoAuSvTfoTiPZ8tLEURTVDoPa9FDhbyZiaDTPNuaqyeMw18hYq3nm5AQJEt8SmkuW2ATc3E",
  "key17": "2dotMHJC2PuhmzwmBo4FtocQ1dLnov8oDWswXpUwwWt63mPMBMa9mQHhAHhfbL23QpGSMmCyGdETMwcsvaBrbhhc",
  "key18": "4AtXAVbxZ9m78RLeYhogJJWFWy433RnYMcLsRQvvqPQ5RG3ArAfopgg5t1jo67VYC5DDzoUn3vyMkWy8jBzqaAEg",
  "key19": "2tGVmD8fAVSKe1Av9i583QayHNQXyMyEZdANqmWUnM9M1qe3sB8NzFvqg72R53xytR5SvDAdQxhnGWmwyJvYXhqE",
  "key20": "2tkCU9Qk8Mf9V9iyd1C1YnKnH2B9J6bMLhjY8JUjsckfbshyB9x2MZbMBqoMudr9ZjDUKw7QqsWrg7rWdhHGFpHX",
  "key21": "ooXSZxutN3PKsEaUi2LAGPBvvBmMExudFJe2RUC8bVFhuFnaMhU8f3ZNohHNWHTdauTJpSxonfA3q6ZQekEMaog",
  "key22": "3KyXV2sc1btpwMcEriXwKG7RBWq725sS5hn68wjYwuhF1NT2aJs8zmn7dy1svaD6PrkSLcU446MkCqkiK6h9SGBu",
  "key23": "dCsBMNPsUJzt1AzAsdTz2aSSC8DMtwRv3VEvZ73hLoneKJ5UbADmPAbxQbeM3VekVYFRoecKNNERBAUTmG6ai8s",
  "key24": "4aAnL2XTcsgDhEMZR1HHPCTKYP97Xadw6cvsWz1n3ypcHa5Wcvt6p7YXfbFNS6t6wGgz1VyQhYKBvnvpXcVMMaAw",
  "key25": "26hcsEwasM2sqzAAa6aPYJim9Dc6rfcHazWfkQzRYrcaQqTH8ujDjKvJoiF2xo2ZFhiZxJDP2fNtg3z14eQUEksx",
  "key26": "33cMx5qub47hJgxmC2NF4EF1o2SMHpMppsHzsBKAacA2jgbvqKYdxJNsZhdNRWGyFcHYhjNhUJAfdwTRZbucPpnX",
  "key27": "5Dx6ii8ouQikyDGkPpiiWmJGj3MFeLM1H47nvSs6rpNAMr9qTNsGFuBkLsqfxSb6Uur9d2w67jzS92niQ8E8ogUm",
  "key28": "4FFB8mMGxnJu6hqgw2VBHfvNBNe7Xaoqg6sa4pyYL2PY1MLwtiKuowN7x22xw7a8EF7qdz4UVUz8xe6ikDemzabd",
  "key29": "3fQqUwHdGznzrJa66GmBL4wW71dsqKPQ6mpuvEbF3XSbVq4NKdLWTfKUzjmF5B5J25qHBcSgtnLWvqPhUgXNLnKM",
  "key30": "29cqyM4FrcnyMUNwf5YHT16z115Duo9CY4TkYkJcAKFsXCPD9AEPoJoQv8U8QcddPGdQYr7Ekk7yJUZM358KCjWo",
  "key31": "3knFUvPejeySMSwtz4ipiHmiYdthdAynQL8Jc1vqWe72WS165q9VoA8H4eVVquobZPrwgCQvL9aV4ZsYzqBPaH5o",
  "key32": "64gf87uiKk6xcqoRCKtEb5MMxzd6m4qmXRWWiVempc6xuBEHyfR54fxmM7J6XxcgYXt39p6SGSPkqmuXygQmPVYR",
  "key33": "4oKWmtBSPwLcsgNhszXVVvN2ZDWokJzbmchWP2nN2ZzsjUftgmwbTivfbC8rbGueMvgmEqkhxudsehjh7g7txQRw"
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
