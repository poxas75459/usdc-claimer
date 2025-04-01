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
    "3fvDWQamE2ADEvLPFicyjEHvAesHMKhY1TFpyEdDKN3qWC2Rc2YQ98HmDvtyBmkVyDq9xQGC8dZgzxw6sTfrd583"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wnz5nSG19FXerposogHUi2FpoTHHQKSDJkQ1N4mqqnytfHYgUmLnfNM3UEeGfcrciZ45DhLVCVuickc8ykpv8p",
  "key1": "Lf6SDjuperzQ2nxGYK2saHNV33vdwgVjdFxd9tPJxB3rJy8onG3WZzoX16H9ZozHHj4QZCD1e4xMtTUea3VwSoK",
  "key2": "4JfhJvUoE8TveRuADT9YihJUkiKbmhn1dyFQrZLLvStd2Mxq5iK6r4ZwoGyBcnGQbYjmfzHVxFEqscMpd91AzPRh",
  "key3": "3AkBT3BtA8wVAseABgZNiff9YsLPs3cDQME6ddLeKaiJQG8cSPkAzidP9NhwABAXxGHqAoHhwST96nXNSuhqwWyK",
  "key4": "56AGnRBAhWhTBiLXvy83zo7gLai8QtrBq2ZhUDVUf3gRCtB5j26J8qGxpKNQFHdTXFmDwcRerJBVvYDVhNCyXZva",
  "key5": "Fi4J9tCfNDeTmiLwJ7StNT5AysaLc3CRtU8uf3DrUZqYNkeT3spYTsutA4n6aa6aio76439HPeVjSBXFJMfbfht",
  "key6": "5eCEe2cpNf2GF8SW5HgAYW7H3PQELxoA8Me2gbHi8HsahX7nooSgPeYVHf3CNBkmwcyn5FGvhWSqpesoTv25MdRB",
  "key7": "2pn5YJ34GFG1aVsenDwNMCVLKgV8z6p3R8NqvKScjcL1Zjz15ecJ3SgcCG69NXiscyyF1Z9ituz5mW4M7zWtbqRL",
  "key8": "2JZRMLYztAGXM15XufqcWKAmaJYn1ZTqnW6eMUe3ZufAFZp68y1BCXqps1QdmABqaH66juybCisk8x2jrfRmPmjY",
  "key9": "Mj4yGjaNsDcFF5AtCgbKiXQ8LpMkGwLFDiEjQCP2rAHxNj698TM5F8hwT7sapE6KuF5XQpv37SqQHW3cVkfMh2g",
  "key10": "35KYYjjUZiV2N9FGyPNfY8b75WZyQ6ypntVFsAqoK6t1LoLYD26EERvwWXxdqpYCbxvw79iGc1ebsTJPNYVTyGX6",
  "key11": "2Hg5hxGFcbtFubEXTmTpjhpX6gDneUBizFhTzgyTbQGJkS5s33K8sUnwRFnzbyrfYZGPTnym1Xc39vaEtvpK8p7Z",
  "key12": "R7pc2U9McvKbYdivacgWHRD4pjVjdfrJtZUxXxX1jjB8hKZPu2vJwavvNjiGWq4BKCbxDMMrp4pmuoqtEZ4fs77",
  "key13": "2gCAyF3YiyLuKBrdTRqJnjTXkj7ztwfvEcLMFrPoWP7acJLjAihzamtuabqL8dHWtpyHgvrzb4MY6Kdh8x3jtLQf",
  "key14": "2LJVePQsqFhU5yjKajsQKGypxZ3az3R8Z1wrdCWeVkHeTAqktgEW4Fx5URarqSngdofJKCTheW3Fbo17H9QN8Cpd",
  "key15": "4MpxiywsUTGtNkzhtVmy4Lii6euS4rLJrroZ5g7P4LurcvC3wnkUXd8kbr3bjFtNNFWHU1M3yj1Wn9vdSbhc127H",
  "key16": "ocjiruysMWqGFVGzjVBZNYZNP4EiXgMwGCuT15dCskRQNaq5FhJinHvUQjzFyygWRGNNPWa7BLoAoZWzCMUPAqn",
  "key17": "358dJbitKw9KFKQiH4pAU2fdbca2Qob5RmQ2RvybtjyMDuLJWmRNJuaQt52enDRU4S7BNS34Cuyc8qvNihQba8om",
  "key18": "4Xu9QbH9pQJo3nCbJboQyYSpdb5uXd9BGJX2wDWWjP6qJCxoTp8x1ArgN6MLsNSQRUrTqHQ1PjizkUeXXj1YigiH",
  "key19": "3y9K5NHhpW2bBCPX4toLGE3YcGTWFoqvdyNkSxUpp3Cs1vwULwgEsuwm9rw9spiHPGY6MbW9QoBC6JLceyY5Z97w",
  "key20": "5HzDMhywi1iMATCrVPDfzC9cQ1JjVUMFDV6ZZcZgfN6D3abjr2RSJ4omALbHN88uVwGNxmnFp3tXzoQucTi3pspM",
  "key21": "rk5dPSa3zpJFm13Jy9auAdY97PcaEPDEqQvsXc4pJ6kDPLCVMemXTr4Gbd8iL2w2j5FQ91rBUAiwaBmrXNxDxDm",
  "key22": "4VZonrTNeUcWWrF53NJnVH5wq3GA9o98VJrZDV8gZ7mXQn5JnRgVewMWuLgtn2MKVaZhCXqmBDn3Vo9hcnUvBVE9",
  "key23": "3dLcYSi2xXzWsX2Vk58YZ5TXd6yekpamoq5ErQfi5xUMZcBn8FNzvPZ7h1ebMLHZEVUbLh3N4kiQc9tWBYDoLjYT",
  "key24": "3LtHFBtPzr7S9brRKiDdLAXm6WiKJUs4tKmxAEy6BMpC3BPXLg4qZeKAzmoUvzrdR3jXQ1uEgcimJodYRgPTfaxP",
  "key25": "3GKVLv1t8gMPgo1dFCqK5thAaxcXmaxE3rveWtBe7GHYyZZey4GQisjJn7ijWCE1qh288XBcHEththMPomSr6bZ1",
  "key26": "659TdApM78YoitmGeBoXtwZND7MzjWaWqcLKGZzNBzyAJXD3rXY2b7nLrbAQSAoa5qWJJiDE2GaF5u7Rw4X9j4Bw"
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
