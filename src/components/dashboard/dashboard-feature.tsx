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
    "3T4ARBX8CWveo8HLQYhzsr99ZywqfB6urXLvX8JpUdgXH9Y68vXHsR8tv1LXioWxCzc1CfLjpcSwXa4CqssFGphe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MjxoMshQ3mkcsLXd1jLUWyafDKUCxoNRjcjYj6kMX33yge9sTTSymPiG7nceykrGxuDYHyoy7CpqnAppDCvJqer",
  "key1": "3qGgTVVVx94C3Wh7T7cQxE3dUWZfJ8YjtFDdscN9VeSdgvFkT8VHjxfUBRYHK4MZPX4tYds8nqZqBtUfwJPDG8K8",
  "key2": "448exf7PsnRKRX6bUTU8RmZYAY63mvwG6WFxHwP4D4B1GzjysZDtBA7zpm3AM762k7wSy8EpZwW9VwrkQfZwo48S",
  "key3": "5tt2S3d8ToBirZZuFehnn11PyZoadBpxSugLmJmbs18AWR6EiNw2dLn4Tm6qbGNApxNMN8Ae9KV9usrozqxuKhej",
  "key4": "Kon1RtAjRoNE6KF1iB2NqLEprpahPeaX3yEBEhrasuWsRshjpRwkrsCcVJcdS62xohYnAei8VAfWEo2X2xNijHa",
  "key5": "2tRqw6vjj6eKFLwDxXPsyNBjSMc5742ETUoiv1PfBWXxB76MZSA9SvkgXyGBgzXcRhQy6Ha7MGo88jvtA4q6RFtt",
  "key6": "PrxGCazaCYdjbsCBdq5JQrXytHm1VVaPyvKnQqgAztkUm5D7U27NmzCf31CiSdLZVAbFzxqHYcBdnA3LbMFB9tb",
  "key7": "2VZteEx62Q3kVxYtxokPHAF7PcWNr4byCc6HoeFQQbR1Y8QDbzq8JoMVMxpymZvfVvwyQEdNYJxkDMr6KuNYtZv5",
  "key8": "36QhfdAGDGfUfts8UVQxBsu2RjTv5We3GnHir5nU743vMojqQDV9yoxHfV6P6zAkdP73mjZtb9DbuwMmym3uY27F",
  "key9": "4jTCNHqhuEH7re9BbpXjw1xMnAs4wf9fDBNTFDHh9RvhVAFMSTcM5km4kgaEEt5k12U12fKLGGP8auHjRTcW2bFr",
  "key10": "TMSRbsu1X1PeKvneSVqWiEhnWgPrQvi6LNqAZoyQyonVBs2vf7zseCEeMnxHJtTPs2etv3gWFkdTyjJr5TGQEyy",
  "key11": "2eAUgFjSMJuHNQ6aJQQHc5CCRJp2PaHoLBPB7AqbRDa1yteFpUXP1eXNr2kLNUcbC3XGzsRUeS68PYJQaWUPtzMF",
  "key12": "4RCVjRephD5fpTFSRMyQpDNYqG8GvFVTTKmtJePqVAobwvVyDe4eZ1Ei5NUSvYTSsmRNzMqM5cUgB7ZRX6XeMC3r",
  "key13": "sm5LH6TgemLjLDjjNpvSSvFX89WG3XN1D8QAZzqGzV5rDJhNCW543EFTH1myLXdG8vpZuPjyryBrA1vAXmg4YEr",
  "key14": "21ExqZVazQA94hZPk1ywYM5SL5GnQAPWKi2iCtthpPvjqDYjJWmSQmDoGQr8vcka7L5FVtJWmC5DbMa18W5rVEe6",
  "key15": "5HJZn3YY8VzAL8zKuVYg3QqMW1tyYXtCTP7KBZqhyAb2dkcE22rEtVvzLPP1jJo1sf3XnYddCbnpXCMUYuBru2UQ",
  "key16": "5cmtVmdoKBPYyDfU9qe7fwDgGiwVkQpfECrJRDK9wegUsPr5eggRgYkpXowvBYn2yRHhKLEVifLPQLL9WFALGBcu",
  "key17": "2WDoCNtJ2eJwT8cjRuGXX1vtJ1uC1RSoeH7uDVDEpFRBQG5HvNBE4HjhbdoR41y6vFdtQ4nDBKgYUKh95BManatN",
  "key18": "67haLVsNYh8e2v7m6xSXPi9YSA1KRdoKJLxX4A1VN85Up3HQcULd1qnU1BmQwfUkhsxohX3UYmzAa2gMwXJF7swz",
  "key19": "4frz57DiEcA7jbcswJBJqzxDSqsm6vQi2MzDi19FmtyG6ci5Q3eVBRvjrqCJ9kPehaFty9skmAQz9B4G8nv6vYoy",
  "key20": "5B9shKJipFsoBzVKknzphYAEoQjkdBM2UPQbScMZCEXhBtysB4tpy9UD4tyjR5nvi2M5VAPVFYepsU3Rz9xWkvrk",
  "key21": "D1qqek31pBZ5ZPNnyNUqpJ265GZfyYXzRMt2fxp4jpkUoF58ojDjmXmGvyfMnAE7rxuPMr85xtVMwPrdT9ffJW1",
  "key22": "58v3yeCRWyoK5W5Htz8Y24asmbTz7METmfCBaC8Cfon5HpYtXpg8PQAHfuDMz3voB31sshcQB9EqKwzfA5G2VcRk",
  "key23": "57rzfChnA1ZzuUYNZuXyMF2UE61rnHT8tYkrxbEjdryhA3UQws6ti2KkDvDEoUmkEhxraBw9k9c93rCdJ9Wz8oQd",
  "key24": "5T8gTRPSm6K9XwhMAbn9ayij17zkwUjMcwbQVwRz3wEHPCFQ2y956mWAxDc9F7urR6bj74rU2RatD7ajgrTTPLP4",
  "key25": "4V24H9FsJEh82dz95mr88i4HHGNLFvno5KpH6pgBnv4jA4Gw4z67WoVturPNsvNgdGzKL8LmUH7abbTvZrmQQe5h",
  "key26": "5HtvVHysYcYuTy7FztpoTAWMYMeq3eNkAsExwGGYr3VhuEEaENKnPCFUYM7E6k1H55EUwpfH5uMqXUcKRCLBQgJB",
  "key27": "3WzMwrXXs45J6kn54Qv9qoMQU3pDGbbF6FZugKKECENUSbAbe6E2gw3vbdyw9cB6G3VpKX3ctzfGcDdM7Q4pvE26"
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
