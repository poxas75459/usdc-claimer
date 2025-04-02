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
    "4aCKEW1Zk97ZrwTWCYqP7f7YzygdjSF4D3YgLaYQ5WHUcPJT6aso6pWjMYqtzSWVR9CjZ9H1zgrUyrQVaHsh6GzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xxxSrF9SLGa7QiCDBzrEUSDtkyoPDTyqfMWtXvyMd9mSCKPgUdoRWXvi3Q7LZgME77JXB6amFeYpMqmZ2pHvAm",
  "key1": "2A1YAaQPkyD5bkwu2edSxkgaqfyAxDMHWBRhNgaErAquUa1JSfoPnvy5nJPH6CPiUS5Xu2vwzF1iw9BgNQZLD1kK",
  "key2": "4M15T6u6aeywz38bWFuhy3LguowZbhFCRy11VyKRMpidUDEo5DuProfUGntCLr4qKej8qHCxsHsuqcnSR864ERHS",
  "key3": "4UEiJCfQtnbDVG7jkFoBo6DCed5pMXc7z8CSmWKLA3HsDT8paDCmnMCwov1CFsq66a8TpDsWcEedv25r5YGX6Wk1",
  "key4": "3pweDBoGnaHBbKCtXw4uaojtfeeHf2RyaQwx83ZNMTWxKUW567XhB5nPALLawvBUnmFnhsknrTp4Z1jka7gPCQwB",
  "key5": "4uC2FHzGLFuXtpww1ntTahtXaWAWDwyewxmfP85ogDhNT3HZmhrVFwDHkL5fREaS2DWzW69GLgTMraAAMm1h7HXC",
  "key6": "4cSnMUWmUp131F7881XesCoJpqjrqipZHnWM7vN2t5JzuwfYUy5JkmntCySKAGbfHkRAH82BBPmFKGALAhzCr634",
  "key7": "52We9hMMJeTGCK1VndXMEbn9Esg9JmNdPnhsnJinKzhRTWuoRXK2KR9hdTf8SczRaBVroF5EDDRUNuSfgAKoJ3RU",
  "key8": "Gvf7zWSjT57aiTYVmpAEF3UoDnP4vDqronAmH2zcFWgZJHR39mKTUsAGi3dCFzqZpr8ZUQz7Vm1dfJnymY31Pso",
  "key9": "5EWkLh2eNTeaa1KszDbg9tbbcDctrjxdwys4f49GvAWtxdBZLsadCztmuj9r2gGYBabuH3oA7XcCsWVWedx4JQZE",
  "key10": "2M3inSdq5fktqmKk27qaarR3seRNxribcnb2fgesutb7wQMYHnK4ZfuFkd2YYKNNLL22EyenxWbPeL9tjGxiQxSZ",
  "key11": "5RRzQxwNxYZywH6VMWzWAPtNWgKyXx11ZRuXR2e8TVu43fG3Rihr9nhdAGiZPGaUSU34uVJteLnooYktihei51tv",
  "key12": "1itqxaq5Log3AedJBab7AacTR86bd1nVW8t7DYQhJcVDTPsvSPphkPf2VxTo8cD3K3WZzGctt6xJuj18VXd9UdS",
  "key13": "3x9adH2kEzXwtQErfgU19KmZXvC7C73DTk5PwcgyQC4LRWVcEJV29qZJErMTFq7KoAB4WLD6AwUx2JFvZjj5xMqN",
  "key14": "3pdvAVe6bp6Yi4a6onCaBpHEmh239hGadG1ZLxbv93PMrvS4yAmYwCQANQ3t7WjExk3QW3jpREnLSewRCTJ3QRJC",
  "key15": "28bXYHQVRAnZpBeDeop4gk2zXXAUAeeUUUFJm7Gzs4uxirSyeq3HX1abqT6PxRRqmMvs2r6UhxjF7MRdX5nTV43j",
  "key16": "5dmdkK3vrWatZ9fZuL2LvDZxvz1PySeSWcFiVmq1JeYuQc1ELN87gdvZPXuahtEdGvSGWS2ehUzwM2h4wkGWcshj",
  "key17": "2J63VTz3Kqz8Km2EAWE8dNr6CETb5qyBxtLmKCejdSHEJKum8xaMud73md5Xk2gEu342M6sHGCPsDSsyZhPQa4Yj",
  "key18": "5m4bwyipYxpqEBAWRDFQcQE8kujvrLKMK7SRMWe14XGjKEU9HzMT6X64f4eiJb16HWVbCxEfmeuzPkREayELmDoS",
  "key19": "4nHv5Lo7SrMVnxPEEVw6SEWCQc1aZANZpp56KrbNgECCtCH8d1kqnGtTZY2hC3fsdccRYHV414sa3VLPpfyeATpS",
  "key20": "5cHN1kkUJwcbsvLdYyyMe5igQcpdZxwQhCR7qisfyhuVKtJ3uJh3CxrGL9ENteNzJfCZTVFvGUWL3x8AihGTEZo1",
  "key21": "2nRkVwMwG5nYzNoL7WrDoEk17AZn2W65hsruYSmWa8ucUZuAczG45dsoRN6UjdcAoU8cyYnrePJ484gkAKYgw3n5",
  "key22": "jffyA14289mcEzYSh4vRfnpMLP296egxXSgYHmp1FkYyXUeVwAkUR3YupYxe2LCFLkFbaYNWcXkXHLFWQWWz4cE",
  "key23": "2paLwuf8Jp8pV9vAD7Leqp7yegQofF7h3HVe8esC3RgYKSMoxuHGCTC63j71qeygQ3RJ9ZSqr3gN2DSikWBfmWnC",
  "key24": "5Q7A4syume6WHM1xccQ9G2SWFuoHkiiGxoHDZekxHFV9Lo4nVkBwzZdsGNsP2pzz7YwNvzU3CUdsmTG4Gmu51bTb",
  "key25": "Wiov6hYAZssYdtDh4UjBpgfzMyWDMfg1SCkGKzWy9sopgQwzjRuiav8S7Zc8kdaJzfKZiUDsgyFbsDAhAYejZ2E",
  "key26": "5VnQorQGLGoB1pcbA2xXmR3AVCqDyhpvA3N2BQmbhjzjFHBxDZFxgV1265YgcSJrUe7i91SJHAEzTavNaxezAevX",
  "key27": "3rHNu92fC73RzzNtEHibezjpvE2WmujNMTRr5zJWws7VMzpDTfaUjFvW1ruXi7kkxVzYXJrp179hg4b4SEnYFCCP",
  "key28": "5hZmpE7nRC5AevSscjHepXscWJReP7d7tfJvjCQYBVQpHRiVaWj3erA8rgHobqAzTN6h7RUjEwWs67qMn3LGEwiP",
  "key29": "4J9JfpKtJcHN9SYwQvxiekSAJ25iV8Vnf6n6fWvJjhVYTdd4ZHf8xeuV3xfaioGU8wG8HNab2Gp8HmY7iigVroyc",
  "key30": "4AnVG4cuAVuuYCUq3uos8qAsvQ6oZBnHvEpEUBWockzgKqni7Vm3qBM4jXJRsYcVJDRbRTStZV1C3ZEiqE9ZMq6v",
  "key31": "3qrhEfdozTStN7fCwTuPE6AuwTjrKnTih4UYs5sKH6MhwpV5xwjuw7SzS9vjACTTjtwhQkofhKrv4ajhzyH4PXK"
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
