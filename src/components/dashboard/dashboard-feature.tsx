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
    "5mnPbcEKcX2QEeGqM7MxHFuMZJwHtJYtx3oqH4QrwQ2SgF3XzxsvaejAir7pLxCS23reS7VGXk5zPhqKVqGmranW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5UbQLSUbA7qidvMfJ7mwBT4sLkEVs3WfuLLzrd1RCKTdjSVo8qFWpg6NEUYBB7cwc7xAqB9zmzqkpZgaceWLkB",
  "key1": "y9wT1Xj4XtJYn6WrxBasp486uowokUVszSGC7m3AuBKtEAqKgGRj9iHPqjjwbYPznngxSPSfMWFsatxF94jZziH",
  "key2": "2q4mqhd3H9bvB9tEHUw1SzxGbVaVrtoxJ1XXKA5ftGT2ChmorcU7VLmRBhuuykkqFyvBYsN2aLGFKbf6K2qkomsM",
  "key3": "4ftC4NXUCPdMaTSTLaHXBgZ27VGc6UVb1QGn1PugxjYsQAcvoLCYZdMEp6YgdWbz8aAQMYtDHCscuG2ZwpS1JZ5K",
  "key4": "5fqmJUc8ouWPEupnatSbAbXXSDUy7P9W9yQTbhMpfj5xHmodxCfGFcFfsa52zQ7KbcKosSaJkJh17SyQq8Z5CmEu",
  "key5": "yaQj4NPrPzZv9Dthz6fH6n7t7tA5MZH5EVJBfnBuRkJ3YFMqXga4ojBqWHfC5kwEvkCzow5EZCgxdixBAJrHjgr",
  "key6": "2yTRaFpmJUdwNu35NwXdMVEJMdTADMeo9n8xwBUPi6pXNYFgmsyH3w14LQhANyW28DX5aN1aQmZpcasLsDi4LmvJ",
  "key7": "59gfkBtutDS1HMN2btiZFRtqWwCSqWpkDr841Wran1nf9NMbPGjgN4n7yHUmbH1iDL44wRdkjQrarqD4d7G5Y5Cv",
  "key8": "ygspck8WzKcVv2rJp7v2r63nZhUhUVFNoqA32FtL9dMuPSPdb1P5mufdrofGnBAcxa86zMMpqeqfjvqMne5VDTA",
  "key9": "3MZr1iJQFb8dC6s6bQwfN5Z4Hf5Q4qVVs4C9n3zhbZYETcdbA1pQ9sq3qSaoaA6nYCHZzLwJ99i3VMtBxvdwvuWW",
  "key10": "3EMApaNtTtH4Rm9ghLiK2Rs6eWi82vRiDLfMwmY8awXt1rmzVuVt7RttB5BPwLLGHJde357mccsk1dy7eoHwGY4T",
  "key11": "5hxQu3EvF1spwtauo5rD27Y3hdqqqt7cvxjub3oj6CvXLkVaVspKhi6qGAAvuMSbiyZS3KNQMWSWx8P1bbhwcMKP",
  "key12": "5qRdhSKyNbrxrCYpr2x2M7Sh65aMzNosAAytN5KiqPYHxZuicexZkKS7GZpKcz43XGdsZzudjR1oaBAmRWAJc3QW",
  "key13": "5jhKNPR4r3SAoYdFDTuxN11exkTZ5PfgT4UpriFEECkB9MzDVomNthfqzw3NWpNgSUybu836PLJ73WKjXWLgtEuK",
  "key14": "2561PZ5iPUGtbkB4Xa95P5PWN5dgGBWgeHaS3mSCeHXfcwtKubEmtHQ6t6c4ywv7RkX2dwiukGPgBbqKAgakJ1Xb",
  "key15": "55YqDosfDZUDuNrMP2y3uETSqAqLKA53AyVup8H2Q7xQzRDsSRsSDZgSLTmkuaUNLxDUiseEnMKVpFSfBUbnpdp3",
  "key16": "4p8mtjejjDwReKqxTPcnCcmhk4B82WY87fXPDbbFgdvZ1xPXzjervtWht2jFFcshMCoZfgbrcxNWJvofJyxw2HQ3",
  "key17": "4ovcEtA6gyvixCLQreYxHadAyvq1Eo3fM3YGhcbywcTS1g4nbmzRsRDyr4rqmdGTWfyQZu1zci5sjd5VgMiVujLV",
  "key18": "3hTPpPqpJXFxq8STHVqVDxBXjJKc3ZYU6vxzYzDpQTynSAgndycW5bZWoSxvsFS4mEr8rGynA5dWaKzjcpwX7cgR",
  "key19": "2ztSwwFrpdV4ySkgzqUPg2MQgL9HTVfd1hQXsJv2Hv98gjegkjVfFUMuzurKUKJ8VrSZSa4tMmvS9qqCyGtWApNs",
  "key20": "3S5HffkFpK1myq55Q9GjEtFsTmEsfbbb5hjqo9zkryLPPbKKkMPFVTfzsmj6eMoKw4VE8QE3yC9kAxTHs4RohzDA",
  "key21": "9ZAbjB6nvW53xpt4b9neSFceJdnSgbmHfhAeo84u4T55gHrfrHhnGpRVa5Ps9a7ErAsaPA9NKSG3xWjdhomfDjp",
  "key22": "3ebuM8K5sQe1YJysyg6M6XMtGHnJj5vv13bnAkWEKAT7Gbn8mKWdrX5YYsu51YbvVZG1FSzgE9hLkRx6r8yDuH4e",
  "key23": "oAYk7h7ErirMpDGPSZohPGQ5viqc5b5ixwcFVMKv9DkzSnf6mg5ZtS69MVZ6o8DxZ3N1WYC2sAJ6NHVW3zEL7F5",
  "key24": "2ZAAd1DWZp71CJFNUoFSUAENeM1hfCQZwc8YyEtvN5EaERro86oBbUnAo1N8GS4Yrbxe3cBvGsDkMByY2P9MBuxC",
  "key25": "5pRPwKaNvWQi1fNABrms76qEVWyqYWakLd7BG27A9KYKTxQnq6vKYfEQDqkU7YadfnWXkwVro2V3aHaKrkWmHM44",
  "key26": "54mYXYERK9yMJy3GAiQJd8BY3MSPwACDszCWhZ4RUCNee4gz5S4ERjDe4DrpnChkNqtYX5iERbBMFHUgy4x5DvPS",
  "key27": "5JHw5fuGb3rb2gstrdaTudhyC21Vzktje9a7DR3MSt3kkZBoNRSWbVM4gF74bdMcP5jYzTysqZ5CLv4niwCibvLy"
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
