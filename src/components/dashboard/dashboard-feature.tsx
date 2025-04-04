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
    "3T8kcbp4yBxoK13QKY4uiUnSMHDabjuWiCvrDsatKkmcgF19NWtnfjHfL7qVAEsmzj4fSmKM1e33mEV48kM9c3gH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Jd1XtdBAwdk8uJ7SUyJYjuG2pydjptiuAZAytMrK1rjaxpnFdvHLNaiMvd6Uj9ZARDSH1V8Rny2Fh19go5zmda",
  "key1": "5F8xAqEUinBeBqQLaVHdBw4a28hCaytWJn513n22DwrPHdQvfUQQYkNtJiskY8P3JyiXEHZkZpxBXp6H4a3GTEPR",
  "key2": "2qHkj5etiYZcnapv1hZDih1cULCucGhSZAbpsYp9RnCJ5qM8TBzXbfJiYY8cjfCkj8xzPspWdnkhw5oYjZkoCwVp",
  "key3": "2R2oNnV2yHNkQ6CiJEM3SH1WUVDJtfUg2jW7FrREm7MCNtfKdEXuwtSwbvxPo7gCPiqmSCKTgW2puaAZQgkn3igs",
  "key4": "5yArcex3DUwN3CzGYnXZ5ATBPkptm7KjkPrvyMhGCbmhJeBWYvngp4dgwwCfL87L9DELTyRWE5GTcR1JtmdjuLNb",
  "key5": "3ANcjaAtGgSmtLrQgxHH4U84Lb3DUPQuyeYfavmJcH6ZRFkrHdxujWT2viaXXqQhdiqeGh4AAStWuMsuHTBUZNAX",
  "key6": "aSBDST1hhNFDqZJrm8y6f8gEVENCF5nZhZKxwz6qXa91mjDqaLS4Le4TsiLGf8L3sq574TJBvGC4tYFBa7aZ1AP",
  "key7": "2tnMLEDQHsANAApxK5MpkPdzYwLdRy9wMEeE1ysiKHzNERfGzdytnemjQ7Bxvb5xAe3DyLrHRgaN6nL7EJuvcPFW",
  "key8": "2PRfh2AjjxyAXoWinLoeC1Rpu8RQ5xoSLWCyV4Ha9YH5UgrWTP5HowJSyDK9ni3Kqu2s7UEBiafCXodNBt3bFhY9",
  "key9": "3wU57CeHuon38XESxB8H3HdNvgi2SS6WM7DVqg3rFeGVbYjiWb2tuUawL4asRM34xErWWm2fEKYHpywMYJci6DFT",
  "key10": "3tiKnqLAWG2MzPj3txfAtFE6gqYnAyyqRT4VzzhANFq9i7E6Wgggzm68MwwbSEF5U4oLfsTaEksgWMWzb7naLdNW",
  "key11": "3y7cVyev4Vj3eKNWsQXvJPzH67ZiorybTnL7AZxY1DDCvw2P99p59mCPFueiYATU83UprUuuccgw3KQ3F7eqN5DY",
  "key12": "3of4wSNfWPJ3N5uNEmJpSZeuVkFF7ELpsts6yY3L5MdtKWoMeyXTSfpaqfTcYRuesoWbMkx9foLdfHaSyCd8xf7x",
  "key13": "2VmaB7SMTxETw988UUWkS9LVRJNVJupm4jdBeuiTwcyR4jyxfSu8dtR8dS4xiqMY6pHHHa3mZ8fm53SLNMmSfag2",
  "key14": "5QjMyi1riHvn2G6829X3f2Wva7xqAViTpJ4DgvRj32aWQT4tmEwzTDKpXA3mAKRGXCT5p3yhwS6q7M2PF2D89Dhi",
  "key15": "G9yoPufV5DH9dEeqFpm9HvQTVJYfApfsa6TjVbzJGkPFCHuKfz2ykqqhCrTbdYecNQiTbazEop9KESN9mSGti3B",
  "key16": "3w8UQ2iL4Z6mkgd67aVXKtLB63yiMsw53DBHokKRTYXSykNLFHLAmVYdYUnqzX35MvMUgDxxBJWYZw8tgtysL2uM",
  "key17": "faXdfFmTMR8f4V5gpSim6WzuK9ULi9QDtaPVy9PGWGdgLsXEgpfHNQKesnGN1VJ9ix8Tr5Arsdjq63h64j9FuYK",
  "key18": "4VxrdAYvkLQkKU21Wu49K8SokbDLiGnBbgdLVEApTJB868iLpKS8ERa5A4rKJmZN1ytkY1FeQBW4Ej8wHByK9k4w",
  "key19": "4qxYQdYDndWLFr5Q5JwKGiS2GTGEPSLkW9agYetFtMYnQ9cNpTRGvsdY4eZiVbnYVQ9mJZc8wpmu6RdMMyCbbvMK",
  "key20": "3q7VB5zuuCZuhgVPeYZqkRYmdVS6p4NrDPQiiG6KuEvdMAaherKPQEUzHDpLkNgoqnDZh5RvcrNXomMEmTTkBLjN",
  "key21": "4DwepfrEeJ5kib3bzKhSV38YNA1Jm6BEgSM5JQQLi3PiNPSPiojiWE6CQxmxw4fWSjiGvLPshm9um6cnRb7jw7tA",
  "key22": "5MFhQzSQBwQAn3e5PNRJz4C4fPtBCMCumXyFcD15wJSDn83T4CdknHKepVyJdTQy9fq78bY4jAbP5UVYAQkdnRSF",
  "key23": "5hYcGEjm5yWCbSYah1t1zbwmzEQS2rG565ymy1FLvTVsq4E1frnZ4X5F7tkMvRBcDxNwmZZ9fJBrrv7Bm5aioDPK",
  "key24": "Z3BbN3QSc2wZ8RK5RjpS8MRYhnT9eiJZec3XGSwmuf6kLF6GaFwgwHSpMyDUozS1GbZfZyDo1Jqq1eKUGewSx46",
  "key25": "rVxS6B3oFopYoCWmd5ACdzYm8PGESabwhagSKPPih8hU2BoiR7ytcxPGriGwRzfkMUzVejXuCzSrHdsDfYeAQA3",
  "key26": "2qFLRMXPKEpuLrcxRXhmTwPJTWtNXWdgdE2LdEMK2jvwCddFUk1WxBfdbrLcEL5xAFsCGq1ADLqfX6DZeLWQW17B",
  "key27": "2DmYqiadXBqGQK2f5wQxUfYzjp1kebrYkZQGhNPnTm6TENGod83WK2KwmzZBxe4qHkUUn5rqs8WNFfch2vD5f875",
  "key28": "4ga8p5qb6j62J6UxBQZjuswx3RskW4g2sCzzJbdSTti5eDSV9QAh73yjXJzH3TddGsTDYkDy4ii33fg6SGUcCTQF",
  "key29": "4jheACVxwfe3GhQcZ3Ek1Qt6oXW8kGNHjxNGJhY2ztdBYhRKTgpUVMnZoy6gYiyUgkbgSsvGr3hASuXaTHR3Rjgj",
  "key30": "4ZBGNokhpQvC1zSfSXg1yyUsGBHJf5XXADHVZ8tiuEPrJoLrbpCTrHB2ouKu7XSYXLKX5Jq4pkKVyA4NKXDwbHLT",
  "key31": "5Z1tvdTL39HDR7iRk2kbbK4hRcYXCtzqLiT2uu1726iCp85iSuDCbocuaCZpujbkfw621DxFEJxGd6m1s5dvyHSY",
  "key32": "2CrdbwnXXLriLibgWT2m4QfHRFVZfyznMaDyLbkvTfEcEx5EjFtHJe2TETBXieYH2mCYm8uVzmfh7H9gHsueXYcj",
  "key33": "2exsJZdB3Y28rE3qXNAwx2KzJ29XoAkG1DweFxR51eeMUsNKZDHqFZJ4sLbRCcc5cG85JtMcZo1YphiWRe7DfAB8"
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
