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
    "5PSpsi8uwRugxYvAXYxBHpFBaj7LQbapZUBk1A26AjEowuiCazTKFMeD2Hz4rCpqa6xoC8kGyaGeJRX7aNqS17AP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCBToPucTaf58thbQhnX9NZVTEMmV6SU2Qeat8WbfVcehAp8Vo9f2oDThWfVqXM7uXb9WpXp5vaAG7d6iDGkwc9",
  "key1": "5vSGGDW1CWvv5MzPUc8qEmqhum3jfSjusnFQn3EYk8BGW9TebSaFmhKkCP4DBJrFVrtm42579or4fw18gUt1xQ4m",
  "key2": "5b5iFpMMLqRcfdsPaoqPpdhqUGqNLz6ArBai4LQuij5aQQhZPYda25kjytJWiUXdrYHWm52dMNG8fWPkKcXM8HGp",
  "key3": "2kaeG7jAhMJSrTcaVoCKaHMmzokay83W1y1xZ6pNNFDfqtQ33MZ8gemQcGYS97YpR7cMekxTHFoWou9JU2Re6d2x",
  "key4": "2Yaozce625pwZPH7mBupKmtaE4vMd55gxfAgoWdseBZUrpZqhvyCt7Af8XgvDDbV2YLdEWztNvwCr1MVEy7a9FNo",
  "key5": "6So5Ad3MZLbPVnPFtsMpUNrzQbteNUHNTBiU9gWUdjLkWyuz29rDYFCqgXwN43pEaEnuqwS5YpG9ay3w8UP17Qt",
  "key6": "5WvKzPh8WxupVMKgdHD5XCs4dDcfqKvXzRb3jmVdwJQPsgFwDAj5btBkCXL67wkGaQtY3ybw7RnSHXPRD3bWQ3yF",
  "key7": "5oQKbrk8apRmJCUW9oqob6ix7JsRt4Qh5W8F2VqEZ7n6KMyX9pbimSS5gFTHX6VCeBsgmRmhps87qH8H7NeUQ2Sj",
  "key8": "2h3RciNDQSQ7CH38frRMtdtQJkDgmJbY7yBWnbkd4xPgg6ih76EZsbKtGTqEE7osahq9VNYBqQpCicob6ZFRAzRf",
  "key9": "JwTUbw8BhWc31cmvQAZF22UxZLUp3fKkDswNDRUpp6pmiXzcaDNTBZ4DtQJ5oJJujDt8Bvj4h19nDki98N23GUu",
  "key10": "2d2vjcM3Tmqz27g1Eauq1dn6hMyaYn2wLHzavU9yYTi1YAx2Vj6VFnggXwNzSju9oD3hwvnm5DBfoDGkZitAZPir",
  "key11": "UtanuH3WXp1X997r3CpNxewcL8t3TxcmBLjGH2v9AZuP3fbLLhsaJkN9ot9DJRmsk2Kwb4EDPVQ1ye6EYNT6NTW",
  "key12": "5cUn5npjHqZtw69QLMP2vzuRn5fhXaWJYRQceJpbCEkBgDePpxxz7XxaP6ddi79CyfFsDtYDVqLEBgeDzDaSMuZq",
  "key13": "22QnKW8M49GAKkpGGokwitsL9bgw1yYshAFZYy2sUsfxNRu2tCqVVTxBErtrAtuUV37hjciRnpAqNC9yUpDTcvPM",
  "key14": "3UBFAjWZJBTvXpt42D5X49BskjtwSBFQhSddmpvBUdQD3AFr4GFnwoK3VfkHtFJ6EjApCMm33S4YfZ1av8w6S8uE",
  "key15": "3LdJe7fQeUc63wz8NEEahnSWZS4f26KSBRGUz1JmXGPjay4qWdW6TBeM51ivymjB8cngHhUKi4osWuYzUsSyFBdA",
  "key16": "3nGRXdvqqmkLWY7J4juBePTRyMLV6bhL2bpkYopcxrREU26pfXQjektZ82Tqqx7ZtfziHANvq9Ao7wAMnZx7WCRn",
  "key17": "4KjvujeYKg8X5VqewmNQdwHSMS7FHpgbiZ1LwMJrSDgrMh9H7KfX5Bfmb9wdBrm83ayeUrq6R2wo1zvgjJHqKV24",
  "key18": "5RnrDJRoGkFURrLVeBbZmix23cGZXjb6K5zJLc4HzfxTPxy5Qjx4wbxZuk33dGu8MSdoSC7BN8s2LnsX381qm2uu",
  "key19": "3K2NJScCbqy1EUhSA3jDCH6vor4BcynyS5wQATGty96GfQH1W4BCxJuDDNEqwjEk8dR92r3a6bT4D4zy6ERTAdew",
  "key20": "MQ3b1VR5yQMsjj74ccHjDECxYwfKsL9713ZLrhFJjeULEPSZGEWe1uNu7zi4AAqXBFcptwk9VsxvY8qyLdDoyUA",
  "key21": "MkrDBz7xPbMMEZMTfd8Xg9puhnufi3kv4bJanucbRvuEYcDLPeomh5TCuRPmYMj62PzPQiQYB9zTPZa5htcb9CX",
  "key22": "2kCY96R2xCV2AU7dMPTULbTG6mavYuguKcEjW7RT72cXaYB9KuhDK9We4rjTxXd1E8rpvz9PBmkV8hTesXFB9wKX",
  "key23": "4EAWTwUyUXANqiQE5DkMciwuX7DCYKy9SQwSoDHMxWveyAvBcnHaf4NoeuXEPWeFFysoZzcKc5mmjR2VqWg4xWMD",
  "key24": "5YvKJN9n1oMR4jYWuamSasQWGQ7Yjo2RofXQQVdUgXgobVNFvfWUhakxeT3VAzekYJ8uygk4C3khjd64qPFgdzWC",
  "key25": "WfbWqY9PxJhNK6ne9VyfYDRsFa9KL5YtnWcqYnhLffbt2cXkGcKNJodSaG5nuJiqSU4mW8uiJMfWFeGYhHBAVqt",
  "key26": "2pD8jQc8xK3LfmTs7mgCsHQa1Ri3ccfJjREaHwqzeUwbz4rWEmYGMjcsZrpSMVpN7iCqs7zDZtcXcirx7cPzgHCe",
  "key27": "3QBcN4caysn9izfpFg9XnAYQMPJg52X3fickKdKPeEk2zc2ur5pHn9EavTHPS71BtTJgbCLFVBHtberZRuoEfXBj",
  "key28": "21eLDyJ6fp69ERa3ufPBUn7V9uiEyQ3sQUVcH9zi8vQE6i1n9im6vHQBs4EUfSQpegRrbSb9z1ZLKuy68hpc5iFc",
  "key29": "3prN6R6eLmDJ3ZnuVPXxFwLYmXRaFbnZRAgCDxD5j8D9jmM91tChdNcVAms8GtsFT47VrpUZjeYXMU8LDrPcfSzB",
  "key30": "55rP4vJqBQPSwYykK1yDbtRaYyR8c7mX2FgZmfdgdAsEbDeKynAVuzwueG5NZrMJdaMBreP7uVVjD2DJYdX4Mvwk",
  "key31": "3JcmTWCwAw8DpKaPcscMEWUrz7RjSZUghmM6DZTnjcu7t2rCZhEur2QskXqU3t8iXMM2Zs3fgWZUHd6TKxw1bmJo",
  "key32": "5PnJYW3T9YtND4NyWtquzvqEbvpuT56bdHhHmt8enpqJKKSxic8Y3MStQzMuNX2QKMquZNkcdhtcag97Uf9fkSHW",
  "key33": "2g7n2drbWWbvAdKRcWXKZKr1rDApDW7BYHSevBAYUQXud6pMayGVuKryLkeLfBm67ZYxREpLHQK5Dg52U5BmXHeA",
  "key34": "2U4M9UFD8pkcUS15BgZ1eku7mo9oxVhvQYNQ6tRS2u2QJXbDPrhYUVu4FiL6MWyFmbW2eiAQBKdM66zc4NXA6x2L",
  "key35": "h8B17X2B4atWmNuqfWuV6FkE9RgWZCdHHhKsQUit1C22cS98Pz9oqtssRtFFigXtmCcWf6pwqtmDpZzekiq38Bw"
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
