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
    "3A5esd4e1nTWXYEpofvgTojALXDMPdqWE8meT9adXtq65TBRfYNaRheqmH4ubaxzqsbWHgviDnRgAgvojBmYPFDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2feRRzRGofDGpiWwZesdPQQmdPyL31whEo3CRXcWJ4QyrkAKvsQf2jrofLvubumiYJkzwYf58tTVXw2MmhCwkMC4",
  "key1": "24JBU8avmz1ntJsxkiWy8JLHRZ1Umupb22b9ZXXcggD4TEHp3tPFg1DByg7fQoEdDDsR8D49mNSH7JXWxPwPG7w9",
  "key2": "5u9MaNg8M2gQSz683pGHGbiiAqR1AsmbeScCyF7xHVojXU4oDjrVZbuU9AYUWpJhP58hiDtxZgEaqTn3LqdsNGU7",
  "key3": "358ruCae4uotPK2TsNhYFdHtVPqtZWC99xTGohhf784mkSYs3WR5H7yZgx9HVaxMHpDZTg2hwKqR7YeAGaGjN6Sq",
  "key4": "4CA1p6bJVRy28kHTVAzTVsz4837qz78w2BxE47v5zfrSUB94n6u5h4VCSTWpMFmg6iuZkNub5YDx6uUP44qa3LdZ",
  "key5": "4RMVaha2Wdwe4CAufsXPAVX1dPAFeqRv9gQcqu2z29tm5ZgrzjJ4X1xYX3VSCKJFpFGPqf5TSfxieUyT4zTb5bP2",
  "key6": "4SUE1ozFr8nbEuaE8LhWXZChvxxnvpi9RD4SkkbAHCbqoXubJYQi14p1kXx7Bd1pEX47DZoEzkmRxC1kz74KgKG8",
  "key7": "4BvbqCMZsDwRjtnKZaQyXYYrMeBA31GQLDxtZkjznseRFFggGzyPtpGsZT7VMhf64WJMG8VMFY99yyiGdRQNe68h",
  "key8": "22GtvByRsGrZSSdbcoDWnwUYXFKjrTLDoVXhskuSFLNdQ7Xueiuik1PPTBR7NarMEo9rqbKpvHBSzxqKciTV5y8Z",
  "key9": "BuZjVsAqHg9qGzjwMnoLbkaChe6Sv4mpYUn5PiidpzLPwkuuSUzvEJRFFpmNFSruNtz83XHZM2wYvf3TeNCm4dj",
  "key10": "5uNVXTHHHovhWwGkvSp7EQnLn5V2WRYZD4gowYS7RRu3hzCAAzEQz96Zks6zPRWTDrzTiYkxcyav2iF2v2tZqHGX",
  "key11": "JW84RJa6mYxi2o5RA5NBQkjXmGBZHzcKi9BrFwWVz2KLVaxRNtW3FaoeQAjrebfXWJA1hEZpAi7ApQufUPhAkgH",
  "key12": "5BrLePGiK2ASuzLJFqgXqQDAExCaVGxyuJTuSNmzddNkdVdrBqGFGDutFVdvUhLwL6KAVreddhp23GkB7VN7PCAM",
  "key13": "22g4oZhdQBDJ49M3zmMTDdDMvdmj3ipJsoe21zYJuZxYA8tweVX2EgxnFRQMhYPtQXzAiJQTSZavryjRhymStxWf",
  "key14": "5zso4QQfzW3cSb1vcS16TLkWUCiWencKvWLdPTjviKcMB8nStLHPKhf2egfMX4gVFQEwmjQH9XShZ4wWYvfLkEk3",
  "key15": "4AEo1L4acDSfPgh14RE4N5zWqTfG97uQQG3fdn1vDVtqtF55G35orPrdSJPjAVgowQTg8kQKBJwTJ8pekHGxoSyJ",
  "key16": "3XFWKKFS37em4oA6ZzauD6YfNV5kv6n55n6X4PxxQa6cXLKj6un24c3CkvLJaVRYYfLQeWQCFjykZmC1ohXdDqvV",
  "key17": "2XRX1exkJLtJx7JdXb4z2SdCbCwVWfJM67AEYAPnptx83MDNZf92CwwfCfKmxUJQ8wKELLdkjp1ai6uYQPUHMJqq",
  "key18": "3YjyGirvN59cXeHqkTxib1aadDSgvyKwe5aZoUYvAk7qmaMenmr3PgAGfod1pfhKEesDpyXSTS1jidA1hCVtwgGk",
  "key19": "2xyEvYh8iHjTXCzVcj3GdDQZgt7peFNJwbaecJU6671S2uUEPvoDY1T6N23k3BTjY9HccK8UPJ6dnJoSrPojUmi4",
  "key20": "35NgdhpTmbrqtKQN7sG94hHMf9kNwpzPGTMrZzoANLPQBGBoL7cjjd6rQfN6ZSC5ijJh4Qi3CjuTRJKtNkbWCK8q",
  "key21": "64F6Zm5EbBdkewyLGUiKStdMsc1hBDZsoueEZQ6e4a3HNMvkLq1uXW8ErJ9BN6b4ZuKKnQWhy2frhtPgMjpKhEv3",
  "key22": "5yGmGboFTSD1AULZiHVeMaJYiqVoWCsgKme2FVTT5D155LTPWo43DmUfCBHqQRMYSCWkU1gHGaBaFm267RmAYcCM",
  "key23": "3wFQi9y4uHJg9ifoYfcdUmnzPJfKRBXgmvwxLREMNH5BzVGr8HV1Q9MSia9Cwjhnvv6fCUuKUyoE7VFUp7ETRX2Y",
  "key24": "uYSyHbx9AAqQPEb1VbBzdKQJGAcjZHNBBDR4TmkAA2jNNjuHMMfCqmUVijULVdAJmDbr6QKXM83B14s4ueDadYN",
  "key25": "zSXHsysiLE7u6zn4KuSHSJj6owzyRtJ45XT1SNoRsbqoxFECd5QTv7fEGjveQ6GVhwRz8j8hSeLJNSVU42ps1GV",
  "key26": "2uyCE8g6EHVojrxPEbqFZkFTxsRAMtqkLHygBpkiv3JuF91o4FmbrBgg2aLDJ9x8XHo6rz7Yg2aGNtbTgMAvn3JV"
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
