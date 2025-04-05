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
    "3gxWpH9cMvJqzoV7NruWC4ZtYV6tQBBTNRzNrhN7bHbFRyADsjjjRTPykiU4FgUxTCXE84ifcUNvviAWCK4yPWcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jSRTzo8CmTd6GopypG1ysdJYDFNcWhgL5MdBBPLgsCHppLAX32Eh8tG2DiKBvFupAq12TwQ2Vb978QUyUj45rb7",
  "key1": "3x9ZqaG3BqgG2GQobG8H1hLgVwepQSLHqA4UjYvAuxXPSDsXynjeLPv7vkh73QcE9Dn7wJYCfZPwYDQNA3PXtMhf",
  "key2": "3RfwnuAoYvV8hgkTLVBqAL739TmSQjqLWh2JF75tPptM7CcrQyQwdHNFc7zTZJCghKTjrxe6XxvpLw14YHFLJFqK",
  "key3": "453vJStoH8qUySZjYAvfTCTzJWXzBKhKF1Ti5ArGS7jxnm6v5GCncPvjdjetkfrBuXNtm7AzYSxyn2r6sL7qnx9v",
  "key4": "5Hb9ZvEo62BCGT9krHqVSWiaJjQNxLQKm4D73qFHbkGpE1cnNNnDseMqnnj9owE66JMhzU8MXVJ7xWT2WfiEqNQb",
  "key5": "2bDTR1nWWxd9E1LptnNQTxHdQvH5pBQvzuZcZpfLwLWwbyHeAjFuQZk7Ntgc6EiXdKqG4tn4qqhQCMja7Zz4q59m",
  "key6": "3mjDJasPfz9QgN8xKxXywFqd75jS6kQUrHGcsaHD2eHjAYgNh6ZA6J84xPRX6iBTtmGU4GHBELcTmmzNh8aLuDkN",
  "key7": "5xYJyDQjUfvskLowha4crogkNTEXyeNUMsmJRiJ8g6PbTqgPbu6b8rFKa8DMdq8HoKV1J9HDSc58xwv6RjwpDiJh",
  "key8": "cMA34w8p8PJYLzVabzKb4xSREzcETpunUVTdRakffajHuPWdpuoWHUge6YzCyrw6exnDKUcov7zkHGbxfbgWLwz",
  "key9": "KHgusNCtTZpfyKXzUcxekmY4q7qR8ApxxCjrmwUsUrsQXpJshQkS3GLzqfBLiANXmHPKNdUJxykrD7mb3G2SeBH",
  "key10": "rFgFXpLNbrVN9YsiL7fnL9b3dayyXbpZvAtJmscjiShGa6tQTYpFBX7eruGwMfCqr6kNa7Ve9x1WzLpQ1LJWBqj",
  "key11": "58STEmfv6EL7Ju4BXBr3aLZBd2K8Ruc7ENcR8gUVBnXj3GK6TbXWp9YHC1roWirUnaSELEYx3TWZVNTmsRQtB5yL",
  "key12": "3GykNMZ14SrnVHC9G6wPAtjKnwmTcbsQezphYWueC9KhRQQF7XzBBtojQUvv6DCFMDZ7dfut2ZdQT96A6x1ZFtCC",
  "key13": "2sW7wKevKSbtKoyH1HLhEDdrjANLDh7jJxSZX4RH8Fpii6seQrW1sWsVcnMPUJFom84YQCgv5ayt811agZRb6dpC",
  "key14": "3iC35yTYSZa8J1NYgPLNbsCjoe9A5qoKNEbX7RvFjCYuegbeuw8f6zGHVvAPJ7zxDrMcPHyRgZ5mTiK9fpv4RXEt",
  "key15": "3qLbWUsht3syVVG4Ag1ttP1aCU4uPK3163x4K9sfehVWPTDyVMuNpHB6u7WXRcqjUdq2fQAuyXUwj4oLBhs9Lwof",
  "key16": "5oTtPxk1mY9cXKHTnMLr5R4t6ne6Wv5xSpZfjJg2kGmHxYDdygFwcLfA6t1MYqBzxaoEvycjuCEQSit8bREVzqTo",
  "key17": "3ENmSqzV9JZRg1tBoqzbuznqPh6QLRsYLZHyKh55TzKySQ5Uc3RUdcCa4Ss1MYHj7foW9TtGA7AkDoUGSxauXVpe",
  "key18": "4GGj9dQUSaPmpY9iohebBN4hA5N5egR1n9d68xNUWTGntvzw7cJzwFzmVrzLQTZdSst3VzfiRSkkQuysiMtkhsfj",
  "key19": "4nSexbBJJ2bDyyevs4ES11QAi2CUduRMNBaY2Sw6MSozLrmekmeSNjovcXbz2FwzcBNiDWAUSsEEfdHjEmruovgN",
  "key20": "3XspG1tNUmuDFJ1QNWcpPyCSCWyPffsDrvY869h6uay1EdFSwTkJrAj81d4AuchuqhCwG3m31pKjf912FaoDdvTV",
  "key21": "4LYc3NVqRm71k3bNYDD3LEuLXUrGuVNyQkcMKo6yZFMwYcQaBt99BxA8gCAyxkQxgDg7w33SGYjebU8fVx4Mmfka",
  "key22": "4qzG4SDXmnBJkGcDjSNAE4B2wXegm8YUe7UEwfjHQSZ9PvMcBSNA7Ks1ALJdPeQ4278AvEZmFrFTbuy4rAn8H9ks",
  "key23": "5gfJXKrJ6TYNuxy2r381XPPaMhgmoQYKsEKfG3pj5pP9fhdrv6RMMzNfSVrjZgntze9SG9ZhiUZwz3cWWXKNULnj",
  "key24": "n6uTSensFkMSELp9qDhSK9tayops3F6vPPsuEDpxzVj8aSp7Pb2m6jffdwAANSeFuvS2NuNiLTKcPiWr4uyu1nE",
  "key25": "2FmiQkiiT419EAgCFt6PA87DTiewrA36VPNrHQp7kGs8NDKwKp1KmmxLhTYz85vCsxN2R47negyfZqQarj6M4TVV",
  "key26": "4SEEvv7MzBkhuqos2MCXBxfrfkYmfrVtooB3Q6pHCmXwbH4PLTh19QpQtgHiRER6dTkYvuP3JpcQVXp4wJoRZ6eG",
  "key27": "3GACpLNEQhHoeZUbsbJN7wwpBvEKdZrAk8BJJJfVypNkHjrsie4NS1c2gwcpmkDL7VTrZz6Ky96JYo6ffBpkcg2q"
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
