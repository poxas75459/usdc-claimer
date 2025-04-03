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
    "5kdXLZiknSdPnKjaR9diY3ppXaM93DMN59Eqv592dJm7DHzy5xj1njiRSRzqWJyWgHuPBAsvYcHnxqwMFo5zBVXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykisWzfCZZD6pv3ruNdunLznTc3cWFfahxpWjJmy86C7QaGt4mNaYbUDknLUkqkyUmTiccSwvJkkeRNSwuT3Mrt",
  "key1": "2Hk8QrofQ7VQxPP2AYS19VYuykofZQMQVw81mLzQF5b1XRYH3no2Djw8kuda5d8ZtUge4mY15car5heu5H9zhs3Y",
  "key2": "5imuVXX4M9CGDczHJi4Q5z6Uyvciu6SWJtEUU8y6JV6tmWpRi9aoDinG7ohAbHSbxo56UwyaHP5qAaKJqFbE59Lj",
  "key3": "5BGyEF9AhysJwAo1Kd4L38uqrCp4kFsFpcfYhnhztFBag14VPxus1RXdyHoHaBQGyZhjURkfMZGmchL8LspJJGb3",
  "key4": "Ki7PhkEHmj5B9RXA7RVG3BMVU9xPu4ABaKfS7LPYySq1pnMBxdZCxdMG5eV7WDRxNdh5P9GP2H8zvmKwE9TA8RQ",
  "key5": "pkFJQqi3oDLTw1LdUUZyKhSk4pPuwKthDuvAVFXKT8bCUGZ5MFAqnTjmnATokxs95j15kC1ZVTgfe2kpoeLkmxA",
  "key6": "beLWzXAwMdkv5jxsdAJHTiW5DFviqeTLFJ2uadkHoQN4GbsYwwzdTUChWP7cv6TLwzVm2KZmtptvXTzgG3dWktw",
  "key7": "24g6iSNjpTVsozy3yw8b9sNZZCmVWaXh6coPJwMpSaikwoxrysC3XkJnUTQAMzwHaEEt6YNvJjw13uBWU4X6hNFp",
  "key8": "RLV2YTrNCQgp44ZkronmcWKzpxyWtgn4NrkDHi3FZt9694pfLxYHLWkEz3PGpGbGypM2xbkR7KRQnQGSFWZ7keT",
  "key9": "5FuyxBGPbMRJFPHKx43yToTXRi6HSSCL1cRDwS4K8FRsLGa7d8EtSvN3qv8KkNiVfSpwUnWvzCTVtq3kmjwqcSSs",
  "key10": "4dYQhCa1h4DMGG9TgfkUPngN4rEJ9wMuYeUi4Z5fNWit1LEXcnMpbphYsaNmmkrWUNtGBj4iFyWuYKQn1w7ZA5oE",
  "key11": "4pkGmg1WAjudxSjTJyGpqmyLfAi7m9kgHnn9ZEZx7nP8sMqCRpuap3TWwKKo22N1rggvyQC4qnntTXKDjrRt6Ux7",
  "key12": "2da1p47TapVkv8Fg3Sar1MMYVNqqfTGXWWvJ7daJTVmAoifznbkZ5YBCAKxK42haDaW6gFdENXN39FFJQgRnYmKA",
  "key13": "4uL1NqJuLz6o1zToaKYSviqwWZfwk2s7jCzek6NMS8vftZabRhnSVyt53va2DQqm8GprvWXQL1ibdLuKEMLonpiN",
  "key14": "521Px4EEUU6LgaBnJivYZbFj9a3qJ92yC7mKVtHHjqpFDudheAc5b9tYkuCfzKm27J9D6Xr7249174QfahUEY9b2",
  "key15": "2vrRRXopq2DgeMXhkUkeKqKfzYPyvkPCW33wLdDqmJttBK6QeCrNxdFHtj3JkoUHyvyY4szubtPoSqJR2rRvFEBG",
  "key16": "5WZr9ETqCxKuGCy63wZwiokA6fkg1JUiiaAQdCaYvpgFcSKYhRfBRdsrhfZ151MD5NkouFsWcNRaRcDzg8DUaiBo",
  "key17": "3CLjdh42i5YDgyYzBXn1CGV3yd5JZ9VrZsLFqt8PUmgjPP9UG5kjuLGjTMNz4gn26CnqwUuS2kBTmU7DbRM6pKgq",
  "key18": "2bWCw2xM2sADZUHtm6jCVrHHbEbrKM5ku7C4kDcr8kat1QMeV1qUX7byXcnxEBL8sqRFDMTxbavXJPePP1VqfTyX",
  "key19": "4vnPi972QQxm5tgTwViXcfETEUDh3Ct7ikF4d2TncuhvApqFhFJsmCrdD7uLeJe8uFMHhopn63p4z6DogdJrjDFd",
  "key20": "2uNPNWGNGsPiF5Xpsi8qEaXWGARbYDVQGLLoKPjwehhoRR2noLbwY9EBKeKak8SKAqhTUz9xEPYenyxzqrZbFPBB",
  "key21": "4q81Ayx73A7u32qhPVKABfW5ZASm2dekjkJmp1yy8cK2aGyRKzLHNiQ6E5UtJwkGH2S2hSKPgyTfudAeU91AiJxz",
  "key22": "4BPiUQ5FPCzk2BpmH1eX2Ja7J2T1mFfQtEJQSGoQJFk1mLU86aP3VZJMa6rSKJGTCo4mmmYLvgoG3MK4nSd1QrCo",
  "key23": "y66U78zwCsNj49Qygxf8j7VJ3LELUP7AG9zvWGTW47FMh5pj8LkuBniPDigV7GcjDsJrxT2Eun1KWt7PWPpcNAm",
  "key24": "3EJRgLFYp3Fy42Tm2Us3SJVHgmYnFMBjwZTGSeGkEPhPnmgCf9Y3kjc1m2vEbuSHXUFY12RkLEDP1nhcBgcvX37v",
  "key25": "3gzqXDuSASvw2EyQewYkv5dHDaTyBnL1EidKeMTP5VRpNRRf13y56o9gjzJfQd9HKLjUnspntHVkYwLDZq7pPQtj",
  "key26": "5qy9bAHkdvE9Hx8Vm6tWV5cX8vgUkczA5j7ug9uqur4FixDeRjMmaTWo9LA35fSxBboZ5kyJd5cXCQJ2ewMYDkJK",
  "key27": "3P49PZoGwCVnWd22yZsRpFvdP8spqgm3h3MNAkBxVd3gTpFCBJb2fEvik8AMA18ipbCfJiDQPBeT96Ho94N5naJb",
  "key28": "4544nMNn6bDzofKhiFGL2d56ifYJpXGGvcMQcB38McJN4fDxyruJsjQR8bRGo3yVpB9QaMbUiHRdJpqyrY2GFowC",
  "key29": "3ktKZM18QB35y6y9nnDKYxNjejNxcyQA1CV2RevsHZfm1BWZw3S37mihqe1z1AFLrPN6DdgUCwBaHBfEkSN1kCF2",
  "key30": "39BrpNNyMnbNbpPL7bjCMFSPXyekWT37Qc6SeAyTgaPCvp9CHzPiJoTaL4GcS4qcxKDkACHouNx3kKpdtuSHqqcA"
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
