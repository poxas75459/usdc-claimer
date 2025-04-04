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
    "3FGf3ewYhKwJXJuZJR586tznwQ2cCk4dcqLZ5wLHrfdFUmrSA5SkTTzEtkguGGoJ1iRQs4uYBMMrPM6ey6W4CiW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21qrXM2AQb2mL1DBJVUVvFyxRcCwNLweyoWMmEJqC5EcgXKtuzMxFYNQYLoGAR9WvZeVudEJSGVb6Qh6omcteJpr",
  "key1": "341Gk9L3Tnx277vuKRrv8NhV1K955eWoBn8rJz4J2SvYhVxGAjaGYTEu5U829N8PHC1CsJPeiMkr2sUyKSMbaKdu",
  "key2": "24URzQVvFVzfpQm9C9v2aS4uhRXkMx2jPDAtkbKmshDRLkuMphJpC6uP75CCxpq5yZQ1KX6L36jHeTVXUkFmaZze",
  "key3": "2RHr5Aef2kp8Mz2htzQAEt98xrRfEkzLeva8tkUasQfbHgLyDxoARpQaKya5xrkZqSGDg6MqSDUhWzq87UzsMZWt",
  "key4": "2NFQJVuyStY8MnajjMNAkaLjs8wzdoxqBaeNBKiWp15duwUhA4oM6UJBMhFdUHz7SAUrCZLbaeSdvDBaKNMzq6bC",
  "key5": "5ALuLz63GP7Sobuxm1fbA4Em5PnZyX8r9gZSbFjToDhfRi351x58JR5yaf39uGkfxCXEtkM8KWbL4LoWJ3rQfag2",
  "key6": "4PZe9KY35T4Rr9WKCyp3bfhG9VHLjq9GHeq3uSy9iD8s9zDj3bzMLXi9Dwsvd3UEpv6ZHCqbCPV5oJy4t94ygFJC",
  "key7": "59bbi555wWJo5tdYdNWptPjMYWbpEVfxeY5e5YUkSysk9bX28m5NjN3SfRdrMvEiYpaDgjx9cMUX1qw1T1Ugroag",
  "key8": "64NPddgwmBSHWfUyUR6cqbrPpoE4ovvH5vsRBH67apg9eppXJ9AUeh4w5PaKCWzKtqJb5icHyUJGrXtWQzVy2Gmp",
  "key9": "4uM68ZduYaLQDK8NecNGYCJ3TxocpAbr8BuKyqyYkjfgeBVs7XF83rpDFXaPqCTSh7QEcMU8441NTnFVSQZ1fueq",
  "key10": "63cTw4wpr1JzcJzgYeLMpYhKSHatLKHRDS6ECHxqhJqtqYPvEgqKrH2Bx6UtQT3xveXzcTPdVjR12buDii9nkRdr",
  "key11": "2U1Y5p7eA4aYNU9Jx91h8X6NfkyQib6neTM1u3pViwkidUMrwDZzS1C4JwrbokNfuteRwtZ3RAARAeiQHQQXPyB1",
  "key12": "3JDB1BEzmUAC8iDBgXWSDprBkmwvQRxKTWZsNTCeJV6oyaPdFYcmRqR2Tj5t954u2wyP9JWHC4rfL4bd9r8LxvtG",
  "key13": "aVCzyExL87cgrW6iYKRtdWQyveCcwJ8ToV8Nk44nokn2nUArZjZKKNn1F9H73f2hJqXqrCTvQAWBZi2ccBLSfh8",
  "key14": "4PCxK7yy4JeBW6uQZy86bH9SQGfoTQhCDhFWG7oEKgfLKMLUUJzjeZHnUPAaY6q8XdRsgDtsMHWuxSKUGnjxngho",
  "key15": "2CSxjwop7t9H68RdNYmFgmEGDAgxdpyT6hMdDBDiHy8XERc9mKKTQGBK6uFELq9Y6qj2bHhYaDBWCF8G652TCpbE",
  "key16": "4AnSWDscQZMi5j1tkPpiQKxN4m1639ZJY7pcGHxjnibhDJ1nLKKU4YdZHCAhAKgKnu9KuHjk1dmKJM9btvFgSE7Q",
  "key17": "4aXaftVXHfVMVTNQaQ6rRZSkgfnq8oCnkY5mRjWmpWwCNEeoYvfdvvhPJoD6AYRjBPcb2zfEgs6fk4CJAnqE8tPf",
  "key18": "2WUZ6TpFh5xm4kT8Lk7KvRKCmjXQsu81xeUWuGRx3KWrgoET21bpepYZzExPCjeC64qp2kq343847ttXqygjrXGR",
  "key19": "3rntFWxVFJAeZBeLbSoB6HYRTPKuDa2bnExP8EnLmEzNEWeJ7S2DiAt2w2UhscNsgvDy2JEMHYe92V71vLBKLCoD",
  "key20": "2dYgaKh69AWfBckmz85VK9w4ZJzPecy7Wa2vDu5WSN95DCt2edkHzo1oPLz6hZkUgtTpMvx7WYgRiqpgt8BSMhgS",
  "key21": "2DQXrefpzHrBL1PAUHAgm34Kda8gA8ghM4yb2CV6JNx3pJkbxDGSQvThJXzH3GY2PnmZnCtXbM61UWw3zM3ukmYs",
  "key22": "Z2cibWxQ1Jy8SB8Z7WtHPCP6Cv2kyu84Kuf2W7xAGt6MNdnKx7coSzyrr3nuXUhP93FEFFRkAb9L2L6acR7K3bz",
  "key23": "44ppJsK916fLKgMm2B436ZysoZ9tdXNXX82HQFru7JK4zkw362buzwy89yhCfQzwtvV2UFSv9ht8ZFntYcgQkr73",
  "key24": "4GM6tuA38HJJQoS6c1cFfCtH9WxHnNem194FcEPKcchdDfXYY9z5Y6gq1JsZenPVZFTZWHLN7T9eY3iW3baP4mXT",
  "key25": "2qDXngXUikGh4Hax2t5WQbfqK7HmU35zRFmiDL5yi4JjPGAmfkEUbHpbFYDNJMubfV8Xm9J6U1pwhPuLJnkZ6jMo",
  "key26": "4GWPAYzFm9Me9riEdBQ56UBSb7r5rTCGfbkCUpwUDYqKqfwbekb7qtwNBXQSZd6yAbqmWuAVEfo1c4L4fjwYmKt9",
  "key27": "GVSvPzM5HRq7dWb8CdEjanXYDLEPt6Zg8vRbhVpT2Z6M9Mv9kJeZK1T98aAyewJaeuChuxsjdcnFJcKSobBidnn",
  "key28": "Sy98zV5Q6PwP5bVLUEwTEVUvCDkdNbP7u6omqYb3FXMU4k6jtKWL2jLrhjgjvA5hvHMDumWeuXAR3oSpiakYJk1",
  "key29": "5zGGpKqGDWEsDwcPvp4tw2tMeVwYgyJLHXxrhHXoYioksBxSP6VpYgHqU2pPm47PPdwwehJrm45vGVdaFj7n7899",
  "key30": "37jnLMYQht5kLPif5LpjMKubx5SDRtkE45S5puLhnsG3iYksFj7uQL74rqQ2kCrryhhJxEuxDbns4pFKKKc4NBdJ",
  "key31": "gnjK8PrLzjpoAcy19Jm9nkyokVzc7z1K1CjLFtNvr44dVw6P8j1z3VtuVjHEtNkxJ96MDMun2mZaKA7NE4J5xyx",
  "key32": "mj9oy73SDHjXv3wB2VrytNYccpeA8hpSkHxjTB6i7scHq457pg3HNuVUuvVfxxZ1EzA9WW5XU5n5w5SbYv8YGpV"
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
