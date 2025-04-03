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
    "5KTeAry7vrzmZYqNeuSpKKBPRbeWnGGgMpousbmVXxB1PVrqtNk5SHnxAgdeqLFq8J3deAKs48jHYGYm7aSbKH8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBSp2Aa2i548FPwdC1afc6FsVZ42EJtyza8iDVW9GChj3RyER9M7NxsWcZ8An87umLSZKX7F7wbCf6KyFvHeT5G",
  "key1": "3GoeKpVcmbVQU58C64kd7kFCkq95RSqHmgTFEwvkAUm5bKo6o7JZbfmdxZr7jrv9JZvy5aji8hZ5vhCmPXXGN942",
  "key2": "59JdPQoJkPG71jwZdUcE6HEP7vvrFh4H38uEaEEwHpKYLe6haiZZcd582XDgXvERXUzvwi23ZcwT8CJMsZrjNuMj",
  "key3": "4BhSwC31rdn1Ezh1AYPrEDJkWCBWfuJNPFkDgvMNebSQJPCioejTCDuR79MiJJwbphLBRaFTiZHhLQKmYRVuT4u2",
  "key4": "299vGWiFKxGeH7oRWDM1ifx9qj5XytBeK16wG2jbkS7rDpn5SXsTPEnWgoyvqFkjfJGpXoYnaJErsNpeJPSkDQAG",
  "key5": "3nzw8nx4ze4UiZVyHmTkPusUCA9Sqyc73bD9JnfMBTgSPvuV7KY5PahH6dNLEouTXQMcvFzLCg3WF3hZECUKMCZw",
  "key6": "3digjSRqcj14hLSn4P8mYKrpve8nbryD74gVDLg6XgvgvA2gpQrqctd2KDS7SgzntrbyMvcpYWoVHQBEumbWCvky",
  "key7": "5WipgbrfwLjbq1mAQHNL23B6AKg1WMAAhzQqHL7s8zrqfg5iwGC7Si4LFgGZV5hsdyrvwkviacg3CJQTa91k5raJ",
  "key8": "2jP5cfiokrhxX71VnSdahhnqUTM9Nw4VVkWghQGXvNZQD9gDq4cibymHwvEM3WT7a3oR75sEnjuhFQAYN9V1Z4Xj",
  "key9": "3m4B4snWqaHLKDa72dVyWaUayBHcXsVJJzuM7hLXS4kxpCRHoCsoCJxKekd3ooC4gT86c58Y5cNDk2gKe71LataQ",
  "key10": "2AVhL5qYeE77SD6u9Nhr8exmTPCAnPke6WQWmnouHnPB6haruYWzkoMpTczZDLHyMMn1VGhicAL9ArbqyWFGThg8",
  "key11": "4nS4Bd7wadUwACQiGXVnjaPg2KpXDdzdGSmJLA27La47G45DM13swTSoWcAW3kwE79oExdJkYYH9TuP2oXYGndPL",
  "key12": "5H8Ez4RkkaBnKif2ixo2beGMb4gQ1CYSe5Rt4nQTrbYCwK8JcY7iUCmNYbt1Ea7Gdk5DMGGwRQuKPmZcNwetTYH7",
  "key13": "vcjKuGKeQ9hz9fNCL2vk4zCRmevTHPjmcGUGdg8tcoJrbSZvJjpfKzsFjysKGPaEvpFAcXMEFxw2aoCGVehcFSh",
  "key14": "5SpAcr8EFaRkdriM2HEhuLtRYdJnvJt8FU9E2xLbaRnoesVeLAqDg6w3y69HqXAcAjSzpZTmCi9KDwkqHKayDvvz",
  "key15": "4F2sAB9sacKJBpArzGMAxYRWUprYL3qhuehUdB1ERbU87KcVgwfFSXxj4PoVKnfBZCUJE7UJcWuyjSaWUvqH531j",
  "key16": "2ggsvzmtucigipMCpZDQZFNE21KKxCJBMFLN2expxUF43Kc4TsiecYJ9q51yTqkckN4yFSZ4zLawLN1C2NNRd4dh",
  "key17": "8q6KeDqAK8Ac7mhBJThJBgywN33dKCDhumTZe7qhbtfcFQzn1S8ahVt8nUpgSRjWV6vvUwR3o4zoeUU2veL9o4V",
  "key18": "2Ds579F4gcgwzjaws7ZRLRuQQADu9CZJjYUUk4usyWUNZWQcoMqPHfvPNsGDHL1AcYuaMZJetKwi813KBytHLbiB",
  "key19": "4MwXNnT9J445pjn26p9KjS2QMNSLtydNgtDBe1jojynDtPawHGfrXLwBPW2sk328yRXwaCFZHxERRPHQUq9W1qxZ",
  "key20": "2MfxDMYpAMCGrqSuXZG3xfswExhQdh1kjveWJx6LY5zjRteNqpiU34jQ92keQrj6EHyYHsd6nQiTv494nHvzK8Ka",
  "key21": "4mzt3kQKBUg5QoqsewcaSJ17e5zweDQWrk7AqYARNxeam5JZzvE4QRUXdqdmXUbzcVSDgcPmwhoTZDCDeC3fr8NA",
  "key22": "PBG1bdjpBTri9XQtHkJe4TW3JZKHViHHGZbjNTm88DZKkiT6zKV9kyWNgmg7iRijUtPmDaBt92HRRb7LNBFGZac",
  "key23": "2TqP6RZPC74S4TQbB8fBqCJCSbP8YX9vzCzK7b3DHREXGQ8CuFWxguWmdJEzyYetfm2AuGDSFBhbQxd8bPRHch7u",
  "key24": "4DDsUzyaTcAJuvn7JMYRgoS75HTnMqf9dEX3k1NbkB6Y5T1nJEhSqx8AQ3e65KWR5vcjkSLQucdRijKrNen9NFRE",
  "key25": "YcQkNUKuUFBeyQ2EV9MVphVt6Bhr976ttcxy7THcD3uHuFrvymHvU9W3Sd9QgF8fbcbEWTEcExWY5ien8qpLQBf",
  "key26": "5yFCuMBeMNzqXTGsa2qkDZ4qacUgk5Ztk8N7vo8gV3F2NqNE5B5p9gyWF8h3UfRytWXH4sC44UegS1CgoW9WsoSS"
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
