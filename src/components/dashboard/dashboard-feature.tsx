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
    "3KuirLikLVUNNuJkndfAF96AkySaKsFQfEwXDxUMUaTydz75FNhChVrU3xbLAJBMdvvGwjuhxPQQFsoGkPopvni9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GASgkpVH3AeJea1Yx9ARh8BGFkfTHm8bZA5aT37JVt3iUTXHzgTWPji9mWHyhQCBiqQTuJZYqZ1NEWfywqkwQnP",
  "key1": "4uycDcxCxEM1uCRHp7D3jDbuMVyBswBAVw7FYd3hYFRUEHVkwTxVSY9tKZoxiZKenrLHLwsa2XtfAu2VTimKCqvd",
  "key2": "2n9rrpMELkoeDVLg9BSCG6tDwUDWKD8W8rug8xx6moQn4wsaGWpaZnTAXgXCweJ4zbaumLZXR8kyS3FXiZhkBr24",
  "key3": "3GymjdkW7tVuwH5u91JvZsUpwmgfqZpRxRGCR7h89cEJAR7vSyQ3X5PW7hzhtduVJJo7HY59L2KR5S3JBrysRQoC",
  "key4": "3mCRv15pfhxGxpq4akbfATMKu543LTQn47DXGPoCM9an2B98n12aDeB8vHbaqLpyHDzubHCC9zXpKhiAwnymY5tJ",
  "key5": "34mHj59pQxyBPAQLgEUAPoLLAtq91rxfDJv8LvJeU5TTYwSHYYUipnSy9FYsov9LAk4gTZCWxZ4UMu1zixGmze7Z",
  "key6": "35efkgNuQ7fnBsAKpXYmtoytsRYiVu2ZCyyPRQm6i2xaaz5ar2MLR8oKGwf23AgZy2RkM3rgZhuvDLe1QLqrB1D9",
  "key7": "3MAiB35VTu8bk1c4t1qvGC91nwnCqavss74BMSrBUx8jYAPgGENGJsULirKkW8LGXH72A45Ami5YCDxGUGhGYRCR",
  "key8": "4RVFpBEDB1hq7ucrTFLokw7b3QbZZzG1vCkoUkCbRmMiMps3yD5iLri8QvpHCQcB913p8NEuNyfo6fETpW5aMH9W",
  "key9": "civownXhUB9jRTk8zGpocACj4oFw7pnRzerCL1xFfCKPWDFeJ3aZMNBAjRhLJtQEbYQM17AVE4G1qa5AUBhaD8m",
  "key10": "4zX9hGmE8JZN76wK3btCz98ofbWKHJD4HJsEZpC9EE3c2sKW5UUhZgusuzwjm7irkLY8KW7MMd4QeiZEpYcXPbd7",
  "key11": "MCaU5HKE6x1FbgPFsUyA5vxzxTrGSGnmw7QXtwXoTqnrUTo7cKA13e9PDES4EHahY4vzM1f2Q6zj4zWfnauTfaC",
  "key12": "4Y2wxSGFGSKV2jg4262LdeSaxbbZiSpgokWANoeRPnFoDXKiCop2BjzEetU7kPPpqCuVqSbZpHrmkmeY786tvYuY",
  "key13": "5SznLM8GEG3uqDQeNYFzKQ5iLz1RqZCqqeGevsQwzEAwLN5pQXkoDWhM2ABhHAHnzdzAC4FXjkY5Vyk7HoTTrT3C",
  "key14": "2PSrhYbdZjLUDnnSytoCLycD27Ubcx9CLM5fvjAFzAHjSAEDmJQP5WcccXM6V42Sh5yGH3Xn4oqpR8wVcPNL69rt",
  "key15": "4qG5H5sJFhY53T5dpJSfoUu5MqrpZhSqsKhJp15jpPSPzUzZVh7UpdsMGkTkmfygFkYeNkJJANfLQezECkLcH2WY",
  "key16": "4oSnVmAWd5pdXxsPs1FDvU3xHccE6eRrvrneptnRParUe3oa1rcPpMWJdoU87ktuyy8WqChLn1ws2RLh6a2ovxMu",
  "key17": "3qJRJDvSh9mvAZoVMd7fNwred3J9nkxJo2K3YFwB9eKjtVSTuoz6RgfcExmnSd58QDUCFuAVyCzums5JmQn8tEmX",
  "key18": "4rrvQrHeqUC8UJundKrLciH64ZLTDNge8rdWbZVYjmmmN6eB4JsUjeCXBrNvJTTwLwYrdZq9UJN5QuLWVUdmesSd",
  "key19": "5a5dEF82ghchxSA46fo5ZiRGrfALrRuFPH1HWPRM5mjAaBrwpjVWp8u3JcKr7ueUEKwoJjEhHAn8HWq7xPRV93q",
  "key20": "5ffUvi1hD8JrptbAtTw265g9NFCiYZdLFnmBhv1QmfLve5ZDFGMinPjXUFTTRfgoUp6y8A3bSXn5WZ6quMZccazV",
  "key21": "3gLhMewxRjYEC1aatWdYiu6Fx87ty2LzEGBXkUDTjaLgYgWZHbZfe2Bv81pgeNKXiwYv7UMrR6HYgAtoB4KjDuYh",
  "key22": "2MjM2YoJUS769z6gXdsTZhtQg1z6oDBWk7g7zsEh8Bq8UmYBSy9jY2feCZHaxTD6zSWo3qm2o4idFot1XsBBeAar",
  "key23": "4KwTJRpnRRy4RyVb6dJbuRLqPGXdLUR582HKyo2H7HpfWw9ZYLiiZfQHgvpyiiTHvmQBcts3VjwCmnXpjeCthdYK",
  "key24": "9qtSJqBFLE8xrpEadTVKBG4jdZ6YnQhJREcnSXbnnCE8g7yuFLCdovDRfomHzRa7qxJYuNez4K4qXnd2obkZZEK",
  "key25": "2g14tAWhHmBTUotoDtWsKvrKuoXgCQznary5pYZZaFCYzdwszm9kvAGEdrWjGMbH2yBVgqMFfYPnpT4oASEXXpYL",
  "key26": "3p3gDdTrket1WdXyXSi8yQH5vC3Arsz6cUXqLT8rQdJKb8XaJtCVJHozH9zJGjRYcXMSyP3o7YHiYYYJwpsYwG5u",
  "key27": "5vFquQXpuUFFnYKyiwyQBQBwKULMF9CaJaVPywYcNqDpKxngSTY3X213dP7SznBZXxbG3ZheWR1A8Win7gzdaKcJ",
  "key28": "31HfNiuHARLKrJW1wdELCiL8YraH2Dm3Qv2BmAk9qvL8nCrHW51n74nWgwMda3Sge6ejhgJH58LiF8h3tmRgGEg3",
  "key29": "5nf4NEZjcfdJHrYToFjFf3KAR5gAPA5qn2W6tb8i6cnMvHwsSpZrqHeT27t7g7ohc7oCtFTyWCkaf1P1mHtWf6db",
  "key30": "4k31kQfBvXFCPMvAweLEFSp6saNXDW3NSkqPCPznUER4zQ1KpkN4LnVVYiSmBy8KYsWcTXxCmd4amEdvvJ2hBH5B",
  "key31": "ctnooNrys8W6n7QqXxCAWFq69Zhe6pj5NCuM4mbwxKgw8yg2dUy8vd3ZNEwS4FydzLbjd829FrJCdmEBTW7uz2a"
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
