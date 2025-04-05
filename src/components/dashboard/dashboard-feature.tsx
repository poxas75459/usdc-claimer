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
    "5uwxLdDirHmbM1nFdbsMJVhWK4xzmwFR3M3UXwWhuneMGUAb4WnWYuwsSKBfcgbvtG6tyJYEH6YyjLKiEVxrPuBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xUCyk1TbagrGfZ3PVBurBdb2vZp1c6bWcK1B3x4YYhwTyMuizaPVuENMbihuWmrseznmi9tGR8ES7QWnoDm9B5W",
  "key1": "3UW4duNSjoWGQAksQKNJZ65SAkssBwiLAuePAeYzEstf7N4yWPoKGfqmeB38hiRR4uEMcjfC1uWcXJoXoTM6mywj",
  "key2": "4uQVMabcM2NKFQTndbDs14uJdWTBGdh8G6H2CYCp6iLfRE3UAVsXWpcqoyKFc7ENWwdPBTgBnFvhMqqfXvZ5NQoU",
  "key3": "4aaAzQaNE6KFZo2RqPCwKGTXfZwCRdtLpXKiS62FqnHvBnFronVidomw7aemv94NNU9Auwucf4phsi6gNZrHvBZB",
  "key4": "4raxnAJJyapJ2kiznKJ7H4Ror4bbTD5i5FCm5wG3iBGECADNBsa43DoQwT9yLMqZSnNLApTJjUdo2gW8PREmqonS",
  "key5": "55PVW1e3g2UmHPWHS8S6GN1yQgzmcmUGmuvKqYJ9zAGppdAkWbiNjavHWWCp6hPSaf3epqEyVihuinq5MMg3SRsu",
  "key6": "5C4zfZWxFfoCAmiVw31AiDVDau3H35iphCuSs76Wa8uSUfu6isEJoctCEchncLN66QfKrBREyANrvMLxN9zGHp3J",
  "key7": "25toFdJj3SbRbASdz8NGNa15XNqX7pP8NUPWtMrvVtcMw35VvaLfaCUPe9xKZWWrMphfi2US3QgJUbjiWyp2W6wZ",
  "key8": "2zhELv5A99JauQtDj4jH3bJ1gx9S7naygwNuxDxo1TgXixLSbYK938DQGgHqe4D84L2QwvbuQhXmFiVtx9AtaBeW",
  "key9": "C2PjDQpyDk8ZotQPjTmQtBeHNWFNHKQLyz3R77dnxHy29ZLBbpwWrXXu2k5LWN8YPsgDVThXgE9KxdQkdShGPq6",
  "key10": "2qWGLkhAsE89ru9QqykDpSDFzFPkbf8545MRP3kfT2Qj1kBoKHCKJtgQYmFJGuxXA2TLszTHKS11v9ae4jdFxQ3G",
  "key11": "2bE4jESNLnw18zLcgrQLTZbPHxui5DbiWGtUoTipghHukRLgqBbUXLd7hRk3v8EgShrr8SXMryifttxYUadBJR7S",
  "key12": "5BbJEyiqeGx4ZhtwSM5k9QJV7pTXfAtod1vt1MRwuzbKTWf59qCQ4GC4EKoLpTJS7c836nKGdHqnqgypbXsAJPqj",
  "key13": "3wAYguGaw6ZfE4jY39BQG7WMatYhjJovg5JEAoT2U6RRbNqpsSztT8Tc7teRBZqdtDn3bckPE2yUpZQRhBjy5jDb",
  "key14": "2DHyjQui6WmC44J1pi1fpQF9PX6UkfGaR84bY6wEuHfEnthvmqRix5ukMBVXYxe6adLEtSfTpMwk9LH1Qc562Zvz",
  "key15": "3PWx83ndMmf3owNhYb2V9Xp2GaUAKZLfPt88MuTJYXYsDo3G3LmTDnx4Wf8ES59eHZRgBiReDre5dSbNerxyCc3T",
  "key16": "2CDMEjLH9pGxyerZfUjKKiGfeLuWBi1Zu42znNPZhLHybVTB8r9oLCZc28ckqaGQbhWsr3FHD9Wxo6VSVv16hFvN",
  "key17": "4m6qPgu2obZsknG5zvNLXHLwAzWohRCQhgc4BemecNVxf2JCtsbxbPv2n5oReLtw5WFU5s3XyVnomPTFVGhcqkR2",
  "key18": "239qzb91i61nY9E84B4RDDhMjyVMiaDHFVY93R1AgstyHyPPhiyALt7QsUAJGDe1TVfPUDdx8CeTSNxoF3eebbYM",
  "key19": "5hZkG7MN9svjuRmpid8psJ4ttjJPUztAT4LdFoGzGwLZBiw3xedArTaScWUt8LvryEzqFsrGPJJC1JPcWFVyGHpw",
  "key20": "28Qe7V1hNREHvdRkd5jypbPHi4cvRqWj2ifB3xjMidXrWxLTZXdXm3bDTzkDdw5RYM4xRV4T7kfVU4b4ipVvwCmU",
  "key21": "2Ljsbx8epVE4pps3st5yte5MmmkfNMuEAexcWABt9PPJknZFEyPP2scPAswXf9vpbAb2YmamGadsVumMtf6iDW9",
  "key22": "5xzsSZusmFmdUbWeQZwa8rTtPCE1NrKbu8h7x5EbsM8abmJ61LEczFYoaeApo9KNxqq33S7zuCWaHxh6PJ7rjUWD",
  "key23": "5SWkudxzh8cnb2gR8hadP81TeL2uSKtEqrm3LghPLcSo3oYWjuGTUpaTPBxZjHSAaw8dkWVLe7xn2ZvMifopfkA5",
  "key24": "4qH8rnkL5sbpXSoHqKyCZHxM48E9zxQY8K4K37yCE7TZc4SvABDM9yRwy3m4GdEPa62ongcTDBjEHo8KCFHcMGPQ",
  "key25": "59xfA1HAraVepAmJnmkwVXrktxEqLhCnK8oB75QySRaGTcAHusVSAd1hb33JjDcfUVKVTyXRvJF1SnyphaujgTjo",
  "key26": "56TZ5pUJmqPp9d9ECzB7AzhaevB6MDXXQ4TwjFJjXmkGQf7KMKVPEnKzAV1riJ6jcseVf7yg5dVyxXdG9hwLYo38",
  "key27": "2g3Eq5T7F1rXmvC2YJQjZV3hJqDjgSNrZ3B33qwmfvDxxQA9NGvR2Qqh8UxbiHQatsnPg8mEvRBcg9ruJBKMNPFa",
  "key28": "5o5ZcqDK55i2eEC4WwtWrFnH8FJN9RWmwrJxLozYDdxJdd84w2E7LPusaKAL3pRucqkRaV9kXboVchJaryTVQxrU",
  "key29": "2iiSJNS3iU9h5qENxcPbgoEkubh2iacYpdxv5wHFysrWEV4jFf488LigpeNKer4PUYADq6SY6RSvGjx3n4qsUgyv",
  "key30": "39AxUEspkWGvRPNwAazMAzqHzrukX8vLjGr4ngcD2upq1TXhoNaSJsPuWB5NjP1H1Nfoxt78GD4haM36MQGReu8X",
  "key31": "4szHL4k4qrmu16fEv1B1PPD8e13rV2qMjFwU6ToKuC61jANMKa8BEbK26bicEwsRf1XWWqKZ7yBJsx2sB8sNDeiJ",
  "key32": "3JkWpUxYtvnSarN1hLcYA3KU2gfHCPDsKUsSL1xKcP2t3GDKEyh59agdS5pzbrqtuCBsRLu2Xj6sduorQQAFz1Kh"
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
