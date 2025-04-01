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
    "3pyGbwwU8M3JBSR9w2QdVbs7yYzMiyWaFXTDCPJCQmSNTdtZrqvBhJMRJZjdCNW1qYD1dSFnNkDJXqk8DbRiqnRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55At31wBHSfgwCkLSkxHnrYphL3EYWE9XxuHgwHQV8xtjDfD9GjP3oarQKvjrsSQ92hTwm6agfpqyvX9WsDPypK2",
  "key1": "4DGHmaoD9U8NzB8TgfBUxzGcHKfp41yxPUvWw5rXdeoCvDVpjZrhBU45cABhr6bTCzu6qGnowAYCaUY6zY8YHgMA",
  "key2": "cZYPUC6H4afssmeTQ8Q2LLhDexQcPmetvbdosDLwzh1AZLinepVass67YQTHJMwhowfm7e6MZndktHSH1Nvwx2j",
  "key3": "4EEJMB13qaWV73VKeJz1m75C2iHW6oNxhAKKoj3HoPFLGdg89Kn9u8ZXVVwgF6uR8VRo51yt5XHfynvSue1RjCnw",
  "key4": "3yDmvfdn6BUsxwYLbNXBtUaxWCArbZen7TpSvcMq3VUbvuj1ZLyo7S2JMcmuvimwzek3txCf5ibq1fprpfS6w4KS",
  "key5": "3MMNXo12671DBkVDSfSTEmrrLe4MkWmLqjsHjRhViknPpXXSugDCYs8XT3eMU1eFudQivkop1bDYJ3zYwPcqyqfy",
  "key6": "5nJiLruaiqPtaAUAXJsYjZgAaVU9bta7mBiTN6ZceB7nxXiTuiVCJLxaF3nBEwsfR5crKuuC3sLXLXWa5ZJLq37F",
  "key7": "4jYDJ6VPPRNSieDB95rsTt9XxMmF3uLNikqrzA9bsK2XJtWpLiNvLgeoSfdncoghrurc16BsksiFtLV18dBcE4KS",
  "key8": "byT3RfsqM79DUuHBQ4KeKkY3VPu5kDFNprDJxEiwoQ1G3RtfxWTLPURAj3sP47AycjTh6KWWABf5vmhkkx2ZH1W",
  "key9": "29U2F8UBWiSGV2u1982TsEBRo4ruchDWimmAN4DKJGV9BCEpHacXS2N9Tz2kutNpeHvBuiNCVhLsXmsK486MfCoR",
  "key10": "48MmqFuKkE9JuYYTL6U78R84ZmB3u9kp7h21jmsW1DytH8cCjy3BWwCNLw1mXrPAdrS5SKHg8GChENgGrHmqU4vU",
  "key11": "59uLeyg22b27TBGntRpsUbfHv9BbL9VtAxZCYjfjxygUMAagggZkL6NadKyteqpEipi4sC3PiXTejifD8bowybqo",
  "key12": "53QWQyYBJ9nbJSZ3J3JzLxevhxmLYzFZdLa6odbuEARtu2qm4rHcXSMJuKzgJZDcecjQhQ9pkftnvLnJUgAnKmHU",
  "key13": "3uCA33AJzMJPQW3Kvz6U8nXqGxjVq58FRW1faPA5UKCvD7GzfEJkE4nfbL5v6cYmqs6X1wJWWME1sQrFbTJXwBtw",
  "key14": "46yMPbGGDPMiZELMqCKuGYjcnX7f8P1EzpdVhp9T3T6k8rkzUDTn2DxvkTjAjfaKYkSy8XnP1uDGi9yrQregysMg",
  "key15": "5NBj7SguWg6RnLFPYs3JC4AeRvjahkaTQiqGibufez5PXAjtyuvGwSYESDtsCCR3G1mrfas2ffbiQcGB4Cm3KyqT",
  "key16": "gbx2bUTAMhAa1faaJhx1VwkcAtMN7pB4rXcyouLjUJzD7ZeYZSEBbK7ThzD8W9r6QwMzu9NAH87Ck33WneMcPgD",
  "key17": "5vvGbHrVWpTaKfhBowhuPJ2eee86fmjASie4jQZqMcsUqkwCLH1CY34FmVkyZstdumW6pjCaPoDFTBy3KtTA2yCW",
  "key18": "4gWLF5hzjqxiWTdEHrsK4k61q1rDkoe8wg4bCb6RZrcdknNbuRDta9HkcETkhbZPXmGkkf5LUHUCeC2eWXTF9oim",
  "key19": "41AvGP5jzj76e9re6U5ym4hHjyC727jRKTjhfow2aLq73pkfoXyrJbuttrUGDqyEwESx6j2HuzqfTZrqy91iaAa5",
  "key20": "5NwAtZvMYmy2CdLcta2RVr8Wdf8Mm9CgXRfVMr1xL86Tqc2n3ZjAfXSdBrtJcpyZg2Avv1n7rEP4kAdFSmxaLaqB",
  "key21": "2dNEQ9gGmMvACGzMQHC1WinHqhN9hjaVPEN83E3qSs6mafkNVzxCgvsvF44GSWaA3Wen3BvRbw28DY5CCq1xKPWL",
  "key22": "5MU4ie2HNQDPQQN6hfGzZnZ4ReM2gRCfsfmya22LUqmdPSjKvNYsHAEYYvk7SSzNsmRge5ffpH1mg2LUrPUYARKp",
  "key23": "2gqHqDbKjH8i1px1v3bsTMRubbUnzSbN1aSRCVatQ4QPBrjSwTeLDs95AUPdBxVQb1pLhYkHNE9AdiLmzgj4Qydh",
  "key24": "2f41UMRjFtXLo3D9ojJjjVtdcvcgBsr5UGQ4tXH9J11kgxqGeeVmuAuxPPY9utqKEURcTvQdh9rJQ6zFKSADudxo",
  "key25": "2TN1repXjYgkyrk1XLmusbBgWVmkjY2p8QTTCq188ziXFyjCq9Q75w7J6jCrjmTso75VzNs9o78v6eDyHQYpNQCK",
  "key26": "5fr1qa6o2dAowwDvCexnnCMWe5NjQmt73spmUyUy9YqwToraWfWx2KAkEJUjreajM4uCnzXYqbS57uAjzyB5jPNV",
  "key27": "2pwbFxLfJyoPbbih5LttAocK3Gvy2h1ZKtzZb3YVTNfTbe5iDoTMYuCRuVdoZqJWbT8FuYxc4nBcUVx2aXDVFFg"
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
