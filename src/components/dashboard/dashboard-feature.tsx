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
    "4zKBMMPKjpToiy7BnzJ13ivuPSMNw6xF3PUds7jV4uGcNeV1YtQoFaTx24Evevwo82vJkRgzJ9kmWUeEZywMqra3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EtAY1dEMVLM32jLdaBzk3zjv4gkzjW7ofhofcS3ZU8dzfQYt3LQbhuH55EvSCpa4mhHCTLfVKvV9WToGaAZsA4A",
  "key1": "3hR1PxYJkj8xefnisspAAhkAHGxftuhvjem6t6NsvyxmqDzyDfeGY3VQCSmYRAsNKQpvSNxUAwe9RqNnazJ7VDcV",
  "key2": "5C1JYJ5pv8XBGNjxCqSVvHzfXBDe4NvLS5ebo9web5XuEwiVL59jNmZUNatAfzodTPhkmuLiLQKhEbqdCRDgvgnG",
  "key3": "bnd9juQRkuh4KoAjRtkmGoLP1HVzAxdgjzXeq8MFktJBuT4byhgUfkFiFbGUqcEZxK7NfnkNeonrgyEnZAjcRB8",
  "key4": "2cmoGLemQxYMLKz8kFqsDVUhxyd96aDCx3yPG38wmF24hi7M8vf1XvHyQdzsUctTtnZYPGxUjSxpYuzKDhVnPtew",
  "key5": "jLPsf8x5Wmu8mKipGgxfr7pJL6gajdyjZTUSyrQxZcRTWkWnzhLv2UK4BqtaSY8ndGJ7qS9NemaX1UE4PB41uwV",
  "key6": "5httUs88L5kqsTqB2vgD8aHAidzE1Uw4oxDTtVZH3fUUNuC5m2Mqg4rjmTU6TquHi7fLhF5nXG2rrE4sH6RJsYF9",
  "key7": "4CyR9zmB9YsWbgKVP6LtUmLbpGKMJW6HzADxQ3aFsdSVR5u6L36T6dZdNSCpjoLvGj333A3EaFS8F2JXNdk67Z3S",
  "key8": "3VUbLLHqBkQpKY2Hd1VwohNJ2kkR3Xx24H5kW97tpoH3UvAdaYwHmse4kcKJ2vfb4Q6gvEUpQUamnupgZQRkvmtH",
  "key9": "48JPbF2YDh6aXufjLTSNsHVzd8sQ6AkbhKGnUAuFiuTbpTiE2g7HN76FPWZpzk9XpFDqGFogVidAyTWeXjbXqMMh",
  "key10": "2h3HJsvFJu2MPgnVia2FDxafcnp6BTedsWjmmM28i6wPGSLNtRzndtZGSJPWezEHW3rhysMcJUJBjG7yfvJR1rAN",
  "key11": "3yFciSKgCekVDayKJ6BviFXCPXxDWRPwNmosKiwZwhbS6QK6UBCPcTyyaxJSNYuFYTMWtxPpj7pQftH3VVzGVyB9",
  "key12": "658QEt3UEzi5AfzmbR7TKzMu6XTrMG1HH7wqRuxaMPt6QQwjXx7KDR1rUfSBGGj6TyZfDKAP2JQbJc52EkjhP2P6",
  "key13": "3vZC2z6ogWDyPpBjpTrPS1XNi7xHrMsnDA14qwa9piX7Ucws4hv3f8sBLsruBKbR71DM8XtmxaJ2PKFtgd8Bus7V",
  "key14": "oBcPRwYcnzE3JSURkgkr7tQn4EKYYWDUWAYDXdxTUmLDVopa7p9DtpvttJkshrQPYqVAXomf8ro6gGWCACvMUAX",
  "key15": "48GzAgiY8MZht4p6buDiBRhfPF13UxnrbzskH3qDAiA52DorsCV3fTtur7mdNmjq1PF2GBzAJfoBQ96V9aPvuWCh",
  "key16": "3JySUShY7m2Fda5wYVP7S61DG41tebDjzDMisWPVWUKUuBDvA48f8CC36uhmjhstctYkpgVhpEAJ2UowKswRvbgB",
  "key17": "3B8FjJKckiqeEYha475nijf9XtFMUEJfEuNHgVh81i716Zp7hFeiCW4VZrUggkC5TemB2fJmhjX9p3PL7SrsBNQK",
  "key18": "KGe8PMXpBMuyJHB4CPMKf9e8JqJCfZ4HR1FVmGZuMEKCKn2x47HFSDLW7nKt1K2U3RR2GRQaphxnFZATR2WPH6y",
  "key19": "3aKEUEyj4WGjzE6AbtZHhPNCNfatfi9bBYnwxevsjTiG6s6fm626k1TtGSnJTswczYMHf1WZCWKAtCWWDyPj14w1",
  "key20": "36qrwNmuFfZVkwB3x3Y9KNUs6wwn57Tj2PTHqqvnt38TPQPbapdF5nvw2rUzjiBzp5u9iU7Mv6aARuyCGT98YPiV",
  "key21": "2UiuWVzVgyUZ2UvAADDGP1ZTnkqFYxSLFeDYyhgHTm2fVZo5YQREWqqMmtXNrKenxDTi1pVGbFryAfd62JoEf9Ph",
  "key22": "yBiZwsvPkYc8iiJsDcRwr3rcd952waURniemp13ipuqmeKDznpHJ1eQ2GADKj7VXJnxUEzHpHDk7ZQgvGYBvHDR",
  "key23": "2d8vkCmsJNnoijmYEXVhENV7oBzbnjZsKWNnfHSGjNuu8DvYpsUZ2w1uCqUbJERNSL58Jn4tZQEiaAsYV2vENebU",
  "key24": "2YKwFWL4GbDFV2uWdDaqM1sQMXQbJFSmSbLz2UQGvYmc45FzT5AhcdCBvnMDSpHnGhNC7YooGhaaz3deUxTnNMy5",
  "key25": "3AKKDJrXD6G8bJCf3b32g8UJHo2FJ7r3Wz1g9F79KnCbR5H7wMnVKFXGqaBprcTfXsSujs2wrxKUXd7FEBAgYYDq",
  "key26": "3wo6kyRZMapp9r6D4iZYc3Js89hmERbTcF57KaqLDz18Hzq9qMuYxoFhMkFdfRbEvXXr4qsjihbnGCoJHPyQSFm1",
  "key27": "3KEFpToPZ3Q3cNMgnPJJ81ziJXCnfZCAXqYVitDDXQrUypvA3EguGmgmLknUZUz5TgKhB8iGidH9x5CapUV8XvWj",
  "key28": "4mbv6amQWGDZJ21qa123QvBE8zXU4WVpsEmHsNhZieor3Jy9uaw7QUNcaPGGq8XT4PRtHBkyqGbXHW1ajZ8SvJXK",
  "key29": "2uCkGPXG6SxneHjqhuLh1JBzo5HorChN6rp76PCEBsdNyaHHCBb7sANaJvaGCYjY2LA8gSU1J6WhZ2MNmdVSLLqU",
  "key30": "5c5kc9gjZMjvRGA7VchKuYAJ2DfBLBvM2VfjAwcH8JRnZ4inaAzky6RvN7Bzt6uAMPYS2x6EQLx11d6iXu2Rr4kb",
  "key31": "5dbhqN5w4Wkjzy2tSDRhDARjpKrZgz5FYqGYYkT4A4vWwkiqfNbHM9zXqF8F7qCjdePd6ZK1QRFbWLButWgBtDHP",
  "key32": "HhdoXnG5igtcx6KNBFLmRmLrsdUkFyuUZUrGFqXpQ1LNoLXHp5o6DkLnEFxS2SgcWJQmz63piYjHmEMQ6xRwEvj",
  "key33": "4BUuhBMXX9bnUb9KiNj7J15WAZsipLP5bqTggaTdtNq6QewGSrVGEiNjtVvHh5WzVBtPXoZWGP3Lf1ZkX3ZzoJPt",
  "key34": "3E5yPnpXigZRZZNQDqkbWYAfjvBd6oAK6p6bLCzREs3oTnbHvqhehCpC35Ad9y3oykD2sjk4AEuAHQLX3b99P3HW",
  "key35": "2R3qenhrcKroCdNrLkjKetoYicsErVpcsdZXBAofnNHNThpV2cMLGCWps2zKA2vU8X5QCVYfSkvcha6pKDAYv8cR",
  "key36": "3MxZp1sdbjzQPMQGw8XP54ACnCWdz89mmc6MNNyEinJFi332TBEBWz8cGt3KvGRwuzFDyoJRCQq4KE2QQ5kyW9dK",
  "key37": "2vu9j4iqbirLJsDJHgbrZQBM3dZYqEpvH8MAvDEw1cg8gvu5E2hNSjH574ys8kZrJ1pGMMhptoX4wRu2m5Zi3351",
  "key38": "3qyK4rubPpRKX6QZJFkixkmtTe2ELZmgif7vX5FzBqzxHmwgEHhGSSfFXCY3AmoXZrGtdGohQfEhFSThJnrMHZpq",
  "key39": "2PfZyVvuhYdC2tNm4SNmrg4rb1gufAdkQzDc3dkdQHcJabAbqaJjypHdyMbZiwkw24q5Yrs8EJsn8CoFjDbTg9mm"
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
