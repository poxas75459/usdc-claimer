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
    "424qjDaCkeBq89gmZBxDusMpqxHbUcPKNQq6216pTJTPR2GtFagEznZs1dhAFLYRwe8nUkttyWGKM7BUFVZMRst5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anErKuSKtXxc2ephFVq4TqLfy4PfkY6MFL5aHzXZLuP64hG5eL4wpEeb1jfc2ZimGhb4EmF87KJzENEfikQuRNQ",
  "key1": "4vmLoVP46zE8aCmCoTEzYtRL7nceax7gP5o9D9T4bo1asyot88kwPcJa7uP6cJmrtLZo77vvS1qnwbsvzrRZG8xc",
  "key2": "2mgEL36z1e1VcZeDuAEtkcx4ZohHRP7GHMxGdRkyQfmiK9bXA7EVPgUmBEsr7DVJTeasRxt2wbCvpaE8qfNJcTPs",
  "key3": "2vBtTGpEwigyj7EJVb1mfVUyeeVAU2jNCfYMgMPmRZLcs5JkB9cY4bDiZV9zpSTgn8QQddVcau74hgfPBNpUm5WR",
  "key4": "4P9zdn97D8o3c7QyCAHGAv2vZz1ZVbm4wVmESdZ52Suft9er8rfimLsNbnf5uzyzzt6NfDp8LwgPLbBqms1E2Sa4",
  "key5": "3JgCYsBcp2evpuWZ5sb8vZWKjx3o2nPUzXqXhbrt9TdKGZkjX3yEnUCMXZcgEiAaQXj2c9mCRaHGDynyxYvLFypP",
  "key6": "66yXMwr6qo4Mut58w2HXw5PTPorRRvoo8dWz98DYvWjR55LjYhTeB2WwVJKctyjZZF8CehFu284TBfke48icAdoM",
  "key7": "2HdS3fZJosvBDSCiejuX7bEfv8b3Azw98JxkMfwspjhY9a4ZupuuPSk8fug1fanDCdwdppweLr6QxtGek5AxgXaC",
  "key8": "4APFLU5Ctcp6RnNwgYL5rmcmtsvxviFzfsZCD8dPQzbGD9z45yjtTFbv1Dgj2jqCKSYV8PvGFyFocMxfF8hTxdwN",
  "key9": "JiCkceVKKJ7HgePmzKeoPj2VBumiZZjfoCop4yWJVJ19xR5B3hkg3uCVoHk4HFYpWSo6LKGwjPWXrRv9Y7gubyx",
  "key10": "4HG8BFA7kWeQRxdNjZdmfz5dYA4Nn9ayBXXo3NyC16mY5cVvPCxxcADoiU91av5cUUMTyeFP3CufUwZLKg1sZugf",
  "key11": "3sXGHyXsAJxS7aNMgnwZajhQuLihkWgBZYGZ2wxkZphTFvNCAVP1MuUEWb2J31jihtGESXsBUtxToayRp8n117Wx",
  "key12": "21bBNMEaoc4g6wnFBYCgw4KUZKudGGVoL1jwHgS9CjXB54GmrV5ZQYbozoqCYv5eBNViFvYDfgtiLt4D4YcuFsN6",
  "key13": "5K5QmdKWASrav3qZt2djGh6T2wVWGb7w7iKjjLyUsdjpRfNqfckbHWYGHzMWo2N69YLmdwxJejtZ4nCruzwuPJE7",
  "key14": "5cnUzMNkP1Zpydc8F7rYHSSxjhwKzQSwod8EpWhgeWt1fkkYUxcYQfocZ3qm5hac4jeDL1SNZZMmdVs4f2P1FYQq",
  "key15": "3FZ1jNFCZs8X6A3RiyiyBWokiwjrE6i62LUrM9Ru3pVr98HEnV1V1LryXqCFqbTqDasNkPMGKffYDtmhKtJhUDPH",
  "key16": "2Rc6PRafdHFeDyjwr4fybiagDER1zrNqikMgepJuDnaSLmRzzoCZw7szMJpNGM53tzUYxsvkEcDzSFDRjRvLNuPd",
  "key17": "66rTt485LZZwz685Vsc5kPCeCxki9c8G7wVz22kn3ZniqrUdB1wHarLWLfSEFShvqX9roKvpmFxy9fka5iGTnsUH",
  "key18": "2wh7F7sCkhfvAaLcALnpwHnTK96YtMru9msBpZGq7R2qiQPpbAJYNooxLPjd1nKhC9aVJdnKRzCtDWF46rbEt3Wn",
  "key19": "FWiR12DnGePk65hv7G6qwkgkuAdYSYQUzyrbgJY7jVWVz9yg5Dfi8vnLsjqLob6feMnPnpMzxYUwipnTS3iy7VN",
  "key20": "3xpXPowqJrSEzBagdJTkmukuofQgb64fhetfirGYV3B6Lt3YBv54GHQZKqMY8KbjjnP6mpVDGa71a6Kg4gr96Ky6",
  "key21": "2NE96qrHvtMEGVNaCWnhQ6QemSmwPkASZLVFsufVW6ZJdfaEC79z87BrX547Jo4EDbgGVj6qc2Lto32bEgRaiCjn",
  "key22": "5RPQ1QTx2qDRYNSFcbbGHTaCT64rJVoUeXANrtEoB6z7qKj62xHnFYNgbNDnbtsxcLaFTKNNLrF5oj638we5LsPL",
  "key23": "5bVtBwYiUyFwbdRsbC3izDbUub125uHK7vAhyEsYydTZzPVZ4zfWgBpmHp4tN8AkbS5k2JJsdgg5FZ8PXz4Y9zQb",
  "key24": "3f8veYYLxSq4mZZRY36YAoGQnCRfS9oK3bV7UEHWtwCbM83C6aC2DxYVSDUcbxZQjS3tpxN9BcRCDYAsUG4ocFCd",
  "key25": "4ko45r3zoJfcQRTAmeUw4YQHYmQB1UuGUKXinGX5Vv5zi9jMxHjq4U8mbWGnB63xPVwL4fEa9sSY31gAYZsLJzeD",
  "key26": "4MUdeYTLUSsR8s7A496KKp3oHEbK5i3pBWoGisM91F6jcqWPhP6N52k7zwEMn8YGQRPPGdv5rqJ8LCNmdqU7hev",
  "key27": "Gcb8L63aYzwEoF23Lf4Ur3wvVa9CA7Y2JqwbxH8bQL8EAofn36hbJdqie3W2uxo9SpYqa3VkyzTjjXUwoDeTUgj",
  "key28": "5DSEJeB8LEQKCLvPMJw3W1TLbDTcVvF6Vz8tqGDwMFvArbQdTWE8CHGGKWzfjNruxy6RtF9tcPZGSu5MT3exbzDF",
  "key29": "5YaLzqNbmWNF5tDr88SsxnbjL2eUiEQTrFnccBdkw1vxU8MfaP7sHHb5R4ufqRJN9jLNbtJVERBsqiX8CSXNffag",
  "key30": "5KTg3A5yQeQwEeWAAXNdUSmeEPWk3jq2R2SrjC6A8PRToGPB14oKMdZzDU4P79Z9yX6wWAPqRK5yujNyNFRa2zhu",
  "key31": "8ofmanxzpA9c13LdJLrNLbjfHGm2qBPkcLDPgpsKGjxnfDXx2rEGK9U4G6b1AQ3DEKCdENNLcDmkD6BvA9vcPMb",
  "key32": "4UUhdWNmPiZ4qQdGXNhGxZE69Gx7SiCYEdymgfE6EmtnuGmLG8qoWc4bR5Veyh61uk6UWP83Hfyxj3Lsoppucsu4",
  "key33": "PQhRGTFsbQ8CcyKDP1f2tZry6doSLDqbyTQ5HDRTGfNH9RuCKiEbedBZ3AokdvB4W2Hfh1UddTdWH8zwKAN7dBV",
  "key34": "5JNbdJ9ycfiAkZX2wEEfxMeb2z76znmuhFT9Yb4QKgeXjnKdkivxC6QRMDErU9K6nhG5YJ9PHiLQkAm6zKTbkY1R",
  "key35": "o6aLKgUN3K9daCbPxpK197vNNbrWivwGTtikJvjwh8iTfF2vgj1FqfY9JZHQ24inbuBNuwku3H6FPJRLZ8Wg19M"
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
