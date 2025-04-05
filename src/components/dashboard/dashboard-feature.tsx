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
    "4xABjx4gmM8Z24GGEaTK4qnQTHnooXrfhCW9haeoVmZ2Tkr7uBZuDqkDTbXhG1g9QJ4qFHZ3GPgoMkTSQvoSW2RJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YfishEYk67831UaJCEMccpFgwFhjkXaadLzmydVJcznHZpVSukqyLhvKC1yFMg3way9NcfsdEdehAoyPzfyVjAJ",
  "key1": "pFutQaaPFWn8iYkWA9wTCVZGxqkXejoCu162L2J92wxTNuMdxfsM5KmBindXnYv6S25xnswQVuF11CqF849A1BA",
  "key2": "5NRJmQgZrwZEUKxDxjTduETTtkeUHSdy6GcGeUsm7pNuASLkAbzM4ynhGSLUottk4My6ayHo6LyoDSLZrk2jHsse",
  "key3": "3jnRapnPGhzX22Lw8ztcq1ceToqnVHwzsUhPiCvX5N2RLzhKbtvwWGBusiXYirRVmjA7jjomHEkT7AekfbTJYY8a",
  "key4": "4ht6BFWFhap5pRtvTcr2uzYWPbnsmV1K4yQzmWXGjWyECffojre4gNNgBHbS5kDMKmdVexu3zupNBT3dJ3mKTzhs",
  "key5": "5EqDpeyV4xKP5a3qoYTxcAiFSh8G8oTLramLARq8MXjgU3gbY9byCMh73zoBuXKbsTZQ2dpU8diXDenC4fAfzG72",
  "key6": "3XLYTHoonhREu8JhSwmoc9GXmUtkWGqy3PEqKdQNwviT7TDxmQwTiw58R5TpL6o31nHbDiyRJNhCgBqS8vAnEf7K",
  "key7": "3wd2tNNhcNoSEBWmTqyQjm9uHD69J1fdeCp6GvFvH7MiMmneByDdwdmULkMNzZC9ELLZXKqnU7rULW2pMo1jznF8",
  "key8": "2mfXqJYuPhcYd3RAu9J5qAkDcVPCaV6115b9D8eue1Ktr4jL2Ue7ceYxw2Px269fnwZ9SrAagfm2dxNk9inwDoF7",
  "key9": "iq6ruFxUoQykgwV3dwxb8Pw9vfciCAsddY6J4jJaUWbXvz8YBSkFyaLAr3wZ7iKruv5t9sZRKxnYR6V69Wh4nsf",
  "key10": "238gmnb74HGhbuiomN23TMMWyHGSejbvKPVz52AFhFXDqb8VdfzyVdybH7LoMic8nXMGisqXt53ruf5Em9GvKSuK",
  "key11": "2nK1nxJcnNw3vHrp81HVywP2oEvn8xZ4YtG9AwGi9DjFv7pcA3ezLZtzgjcEWB3QbB1AQ9x3JCv6SNWh1Jyu2cVG",
  "key12": "63Xg1hTxBJRNPb8oWGwDkcSURi7WVXjJRZrXPJtCTyXzCfUyER5NcEByiYkMNrzfhCTjbLgojhZTXgMVBkFbKxsu",
  "key13": "5JMFnYuq2j3Lb3VnNa4nhYy9aRoDQgmSAWve5DxT5uzV4ZBrK9jaCehMs8ZvBGTY6kP6EHjwH4D1Kz4WiFVH3b2L",
  "key14": "3RgVcacVStpJr5n16n6HD1FWkNdJDiuarT8NVueetJMngNfQSbockVxGSd2hDCJ2hZZb5s2Mqnv52ScAQCfzuK35",
  "key15": "3Gcv8WtmFUMyqLup2YYPjYdCNUrfS7pCxYdkTbNz1Pp5FSfVbfBmSk1yrE87xyuz3PZ4RG3q8xajFjvYB4qyTbFF",
  "key16": "2khscjXw6t1tPZ9rithiwd9jPuaDGkTbBtKmvtkyQWYhjz5VidTUvpmXSbAskbQ61HPc7kSRfuP79SnajLz1syWX",
  "key17": "2Tg5GNzW22pZ8yaMXnEBiJUNcNwBYP4YFHdRWyfAiDXXYudP6kvYcD4uJcwpah5nHwkRfuGMw4sL9nHUy9wPK2VG",
  "key18": "5FcnT3MQSSZFUfCbfJYqgLBAC7xKmGMC48mSDdF4rFue2Gk73DQP4CiyXLJDZzwxBNC9kxxpmvWNZ9DS9bDMc6zX",
  "key19": "5GMuko4oNTNdUFRNK615mzDD89usCHXaCzYsSAJUPRusWDDv34KXna6DHdfYDyVnDp7hPbjYvmQ95oeRNL88uXUj",
  "key20": "4LvERMiZtjJVD15rQMzKr1SHhz52TREujR5zLX9pPrEXmEXrvRrSFDtcbec61jNa5npdZ4JF9VaEHsUUKsbDqEJ4",
  "key21": "4W2qpXJyogRB8gQkeaisqMWWWAHTw1MYWJmGTiTsMivEtG5GUzuJh6YdNa7Ra2cYzWNjQe6v4gQ9RHrr23eF4U5w",
  "key22": "2godKNwdXmgznPzaXnoLTxDdBxEnmAW5QRB9YiH4uguvFBmpp8MRr3tk1qa76B8ZNXwg66rq3s699tMLD1pEi8bH",
  "key23": "2xSEXJzrKnpr23Vy5jZe6r4CDK8P1b3E5FrndW8BVgNSm5QiCjaxiNAdeLVdxPphGcFdhhisK2D36Eejdtm3qkWX",
  "key24": "jvsUDcJM7RwHyug57vj3e34aJe43ACegX1pfVou9SBodyTQtcHQka7goeXjj1T8nRNbuAPSgYUsJYx3KdQTizVj",
  "key25": "34gUbVva3AKZ98AAXh1ZMEaajsdCNuQBsYLmXDXRuGuj4ancfYqebny5vA2Gr9MCeHmpcg3Z2K9thpgJ7ifXJE1m",
  "key26": "yNQQH56JNCXx9mJWsb5Lx3fDYhvsKPcPELWtDhGGW88A3y2dnkC3eaavRyP6MZt741SdXqMDhxrSnbv31ooX18L",
  "key27": "Sj2NYw7jinodbx7CbSEvWJNtgbhuvg81jQBRF3PEn1esVdhN9gVoTkwfjmkGRZiucpo5qLzDWpHdbnL1km1A7JW",
  "key28": "4hggXakVUNtajE6A8KicSo164jH7bYnqdCFcK1LQqpMVJWkgTTy74XtGqWVwt9VkVjHUb47BJtQXwiCWMyHRWzBL",
  "key29": "uNheFty5LYG4dW7bbeYpvqmpxTr2RjLwDjQsDR99C3cuDuSEpGtTJ7zxuVia3vD581i2WSvNkmaMxjyH2CSBfFs",
  "key30": "54tV6QabB9qbDrDUFBUpMSFnoS3zj7HtgE8eQCtCNe3TnnKP25RDTuEqQ4Fu7PMnwHTRY1PMZzq13rZfjrpztEDi",
  "key31": "2su1rZXnWeMnN3pDpUXk7YK6yN4ESq2cdWTFgmKSdqRbG6ur35npnd4NJibAGgrhdAeAdsKDuqm4CCQ34L4yh89u",
  "key32": "5aHfQqEXHTKt8pmSmPKqCGLeKp1AGvTfkz6tib6PY8nkExb7J8h3Hqsj6cSBTem79Pren8AWzzaLAqwGJknnJfJM",
  "key33": "51JTPaq5AxjHmpV2pR4q5AF1nzhey34K4BrXiR1KrQCQJACTaBKzNF24CPEbPgy9SDyzP8LagAG3EV1DVLhckxS5",
  "key34": "5D7ssxjwBwnkMGDx3PDA5GoUot9pZgyj46C51Tt7XtvtZpuuMR8Swcv7Ku98mPoETnA5cqBNJaCpRjewy8AZ9MRy",
  "key35": "5uxdHib22TWo59AeoL7EaUgftL9CWv35quDEhoB3NzGQMSwAboKWc8Q5K8p4WzTEr4yPaUawiRedtHqeH6BnZJZT",
  "key36": "2PYRFk9x8uG9AiBLcQHHVvxuWhFBXb2LfpJawUDLGxfBFmDqjdy6o8Zx1FQJpbfMr9YrD5dZjpD5TRoBb2JAvYyg",
  "key37": "2tJMmYdneHQx1BWJc4rcosP5sLHZ3tcGar5X6rvf2rjcL2vpC6WyUNMJjLVuLRC4wAXtCHD3eNbzqUwBaGBZWQRb",
  "key38": "4DqQrmbSbFqxzcTRRwUTLyhoFw7Xwcxu4pVBWD9gvarGTZVizu6bcsJaY987szb9LFRfT6n1oJuDu4pjiHgj7A6B",
  "key39": "2py9mRBfuiRmEn2mer3FgWiWQhe3edzgd7oY6drntZtb28HgnobYGHWZjYc3jSNUtHmpKwzyKUaA9xtGdD5iZ2CY"
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
