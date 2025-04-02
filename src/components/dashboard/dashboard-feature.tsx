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
    "42kCzwLaMv6AW1w9ed6JVC9W8TvomndZVTgVyXaKkKxFRJvpKKXMu3H4YefxFpRtQP7SU233QpngjPfDmHvce8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFK8A69tMLSwDVdkWykPg3ypBoUnEgPJhTSQmR3uyMMyw7qhgFSqhQ3HsLHc8FdHBfJazREn3LWwZxmSy7kvkRV",
  "key1": "3NkwXmMC6woHgzKkBNC6cEGpVW9uQQXeosawr2jgHeyqPmXDUALq3P4rEYCSytEw9iX26W8LEoFTcQgpA1gxa6ED",
  "key2": "4muuY19kJF7K3xFYyeGtZHrSYsBRf7y2JMkMCA41YMTmNWpNinSmGHSwJRYPHw5Z91WevX3G8HnMCC2ACzwjVzv4",
  "key3": "2AdUYXLfdCf822Adavtr7JpDnMxjc3q7tP2Z7Mnfs6jCxGaHeSjRPhRAfgj7tTmDXVmvc74hSNPgcoeysMRnuHtx",
  "key4": "3ei9tYxheVoLJLSjr8TLDjXJAs4V5Ym3MQxp4FbnVeLJ8eMisrkB2Rm79rDwxTGGBn8Eb1yvd7KZCcvX8A251TW6",
  "key5": "45zg94R4awZYvLvB86P8LiH2oLocnyX47F5WSGTBgzZGPDHQ4xcRyEm458p5FLsQsXJR7JUgLuXQ91jVawEVs6b9",
  "key6": "4HhwSRqWmcAJ4oGZuMpjEfey21QPJ1kQWpsxcyUR3qtCC3MBMZHLFTawAgELWBJvTia3qoaZKSyPNQkX4nktKqMS",
  "key7": "3v5nqiTJTcAknqgrmfhAQ28qTn2rwjJKUA6cpcKojUA7T6Dz4RJFHm1rKE9tZJYgVdueoWwRuhTERxBeCAJnUrKi",
  "key8": "4XGM8wEJoYf2vAiCdcj8dUQTAe32Njqb1J27thhGvMWbNqw8EVHmCNUMhoozwjBiT5H7V1EAT3kgQ3wNWqFrk72T",
  "key9": "b9Aym6SeLWDSaoedjnj52cn8FwG9BHoWzyCtK8Vqto76fRtV8c2tski5wSPUDeNwgh9GoDsz2C3trFuwMMZ3PHJ",
  "key10": "QMEmfhHtzZqygMbTPVTXK3MzqFhQo7Hc2ctQ5G2NdXJiskfGnoKfMP6jNq1Nis9NfkBHmRbQBizQLB5XM2fWoJW",
  "key11": "5t5AFfnEaPL5LJjDuSj452ix2YejXHFmsyakTbu3EeFhd4U1NGcq7VQfY93xodvAAhDHXJYQE1bF16Wzz2FVL4b4",
  "key12": "67bcVqhNEGM8cJL8t2nkf3tbxsJwdFCsJb7rmSjzLcpoQaHE6wuGHYrkZBRtdHRBiinTTVFUQsQugJrXUN7jee7T",
  "key13": "58q7obwmTLmCSho8PTEAJirmg88GnSibwXA68b1Z7g6tgh4hFek9AmqyC8wL8ptJsgwhQXHY1gMg6JpEe6aNER4H",
  "key14": "2sd4jGDbsvafyiS4BbP958AKCHaTLVvs2BGamsYzjpZe1tnAiuGBhGLCof3R8ZnLVp2WeQY8QXyqcbo679Gop7Y8",
  "key15": "3DfzjoM875TVZABiKcbw9EX3HVLxoB8nKu4EpcrksNMrUa4awu3wwiexyUgYHDmZ65QDgi8SgvqrJcm4ytB93Ud3",
  "key16": "37ZFSARAbDp8UQzdmCSzYnrT9cv7t8vFQaa8bMr3HQGY1uwyN4hUNX2QW3mjGfU7gfaXJe8x5551jaPWUKd6qMgB",
  "key17": "3V96VBH2oWZikiM1NKSZZ3Pk4QxQCAKAQWpmA2WVmLuJCVjeDwaYt868bEdpaZ3h5JRSMifEMDU5BcpWyKTmjg9K",
  "key18": "5UrRk1SJFRpgekizDH23dYgQtyJ6aZwdegrdyFVLivJW67euDghb55S3UkaSS2PPDc2ZFDBuqwJMaiaxeUcG7GNm",
  "key19": "48WKXZNFTS2MTpTPVgftuq544iVPKceGiEHgF4iP1DfpFuAi4TsKFEhAFSQvw2zUhDrqgaY3twZS8fUjrQcEF6Cj",
  "key20": "2SeJHtBfD17MCmSs6z7dFryq2Crup3zEUEp9ofgExVhSbuCJyAD7SEJhAfG2Pb66jz9KcYZqgpteWveMdGLMTVXh",
  "key21": "3fyJLuc2G6yxQmQfi5j5zHNpLNCmoTXQN7RPfLofRjtaJBAXEQ46GybwXEENjNpLv6ifiVE1rKEtD7HdKsKzH578",
  "key22": "3fMzABLfeEJLHUMPjgnuc8EqVQgk1qFf2pPNndCptUCNE9oEnYMynD2exzprpgkXsHhQckcfnvgvD3uuREZewR2Y",
  "key23": "5Wm74LAnBwbt1c2mrqEcSV33PE97EKR1vb4U3ufbx8rjBLUsoHahLW83sFY2KboSBZmPAq3pHLUxr9E35VJoEXmE",
  "key24": "4RUpE8NSJdn2i9NKE4sMisPoPjB1TNDKk761jYfXoPXFXTMZ36sAJXhWthVwMYsnqmMLSXSffmHeCPxAo7YnRMjF",
  "key25": "24aPVCET8bgh1k1bung3zxhJ8ShXnQGJLtZPERXYSGdEVafDHnGNcGo4YDabzL2igqiJv8PL9PEedmpS3vLhH67L",
  "key26": "4um7yqwVs35ceFN2KWiUDEuYYBakg9puwUre9g5aznB4LG3Lp1tXR6N8qEn2vPbuMv3pcxpfY7Jsx2j8nHXFHaWt",
  "key27": "4wzPV4KmMcD9AVBFcb73Em22kXobRa7gC951KqRnG8HqhqCVd7dJdKFN8joB24U6WQJ6WuZrdSJx7PXfjcoQyQy8",
  "key28": "3UWc6tNZwepsAMCtAE5gQyWHVWtU9irponZrNugCfWGbGzYNpobBMe42t6guLGzyyxXrQCrvRi4Q9ubHi5ySAA3N"
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
