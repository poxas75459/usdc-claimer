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
    "66gWvQSdbqYRhLYfJZk3ociFkYCeVWAfiHPgf37tRnCyByYkJP53hSfkPSZT6mV6XcXniVcF4cydS4BZHrdnLyzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cX8qUDT6tXFd6RjthhQWYu9WQz6MD6do9kuXToH8itiSby5a8bHGrTav2kpotgFCgTvsUZD5e2pXRGW77LFi5t6",
  "key1": "HQWrEy66vNXXzoDv5VUEKtBxVfcHDH9QLgtnFx2ByDB4uzWNYNWsr2sgVRM7VCZ1iEdXc5j7CsUjxhKCA3essP6",
  "key2": "4KwLmydfb69iMu3mZtgA6exsRoegKhHqsoUsa2iDavQPUeTq5uPGPW2qvJgib5h6upYaN4zhcmsyGuUptrCf1mqC",
  "key3": "3W2xab8YJPpzb7ghfrRprqNRqj7YCxti92Dafqu6qFusBcHAz3rjgSMVktDM1tJfM2oXEGWKGQWBvpmdtwYthdJA",
  "key4": "28rrr3VCa4bX6VyKLwFr8gVmCXY5XrWDUFh6FZ2dMpX9MFvhXxcoCSfmDifJLSNE8EUMcFMg8ajM5Ptw6Nz35QzS",
  "key5": "2PQjEFzcu8xvskpHMBoPHGcVzXSNsGhTzCgyDLv13PmgJYAMgdFdViUDbV9vybXL7SgwNPvQSrrLqfXKddk86EU3",
  "key6": "5h2z6epRhAUGpNpfmst9BBZTnm7kKukrS7ha9kuapbYVLtNEtF5YN6mp4E4WBg2r3HM3pM4wv3YJwCyXD9YL6pFH",
  "key7": "5J9iBHhPkHZEzDrZ13qyhGxgAPwBhimpZVc2VajkAo4toTZq1U97UBrHnJWEbszqRSHEQTHmcUBtyTJv44kzjo5u",
  "key8": "3nWxEqnDdcz95tu7cAsengo982z4gfDxn2imUZhyi7s5s49qHJzajy7fuZCV86KoQTmg82B3nY5Nsx7MtH7eXYHF",
  "key9": "2wXSE1S5m36YdQSocUUC36ANTxunzg3uTbmDNerUAw5hgmbPg88YfcmTgFeMQ3348yBzYhqwoCugVa7UAxPKmUQ6",
  "key10": "3JsjUKGc2DgfHjgXhSkX5wxvwJHQ86mQka51VCcMoT2agNmBTKncs9KKYLH2PunqY2ytZyJjYtKqovHZGms2DaGy",
  "key11": "h7arSSRrSxp6FjPaRc6bjEP5wPR4oVAW1TQWUUVBS2juXRv5WGtj9Z3pvCLLY58drZoZuqvfde494gKModf4G89",
  "key12": "3AMj6FBHGca9eZLCpNaGez1KG8ZqEkYsEjtNduGzz6GwJTz7mC3yh61wTUQk7YZnCHP9fapwFVTZzKzcTwjfPU76",
  "key13": "5BjqH32KQdusqsTQqveNBJJbgrfPsxCbvuG31qUfQcuEF6i9hiAEwt8KL6LBJhoNP3VMJZ2DyrUNBSsF1a8yaFGc",
  "key14": "5aWSoaCaJzLPe9iuoLj59ofeBiWGpk8JFuGpPmraeTefW4XLobfwuEhGuhTk2175f8DqnyuLyKXkZDz4iCT7cELW",
  "key15": "4XtPvqSyj2L3UTy4J39s6k1SEejcEAo6dLQQ5UtrmfR8dBoSujWCQjmfM9gb7AEPNdCdkz28rGSTj6DBJ55At9Bm",
  "key16": "6DbFE297QzWXqsbY8ggefiMcSGNJhDdzy5rL3ayF8kN1dTxG7xyoSeeZVFgJLxjeG3ESScJp4f5KGhXd6rhbyAR",
  "key17": "3TKZxJ2AhCZeP9RMfapJgGfr2QxD3EByhLrEu7CZ4y92P2duLc4E2p6tp2YGkJdxuy6qiPE6J1ADhdXSPfmNMFQ",
  "key18": "44rBKWDfmPDWJv3sDpnSYouJSPSLfsBW8F4XC2o4Dan9b92hKjBTGZtuHa86Y66x6jW2FmdnnhrhmHmoeRhExk6o",
  "key19": "4PhiKe7XLupmE3jNhG9Eb3DrLamYc7o6ngdWCZzKvTtxH3m2ckqouCegcqBwRTxg62AHwt9BkF77zWchLNNrr1Mu",
  "key20": "4fFHsH5pZHeRmWHaP25PmzUYQwsn6VAP7yWiZaYwrfLqufG8r7YFbs9cBeqDfqNif8Ag1tYtgBhhjU5cC3T34UXs",
  "key21": "2ToY2esDYFcPtYbBkGAhyt6zQLZMqA6dy9jCqrXwqaeskjZeVr2wZ3keqjysRd3XimdVt4KxgaoEx2PgVa5sVKB6",
  "key22": "3541ydWXQ82iXP3dTwHhAWQieqFf7GqqvV3bXFCiftGwyqrVyMdWmiMSGmT6gWi8KurYWZJDHg7N3URZVjebduwL",
  "key23": "W6CGDUnbpwKbFSvnXab4uXJNZRC8261AuRDw86CBXgMyK6u6TCcWDS9JyTcVe7iBhN1JtUDkbrYxvb8Li1ABnpB",
  "key24": "v3uRnEyrk481zjb1EK4EE4yTvAkwGF2GmA6Q3JPYbaA2w2NwpKnLcwMf8U5yNmg28oxgW5hi1cXbwqgivtR1pG8",
  "key25": "5jYq9uKtM7hMUAgZFKfUPXGbYTyH147Nj8G8JNN79PVubADxbK8yphcGRPeFTgGGrmPe44XfdZkdZveTVdU1TAQH",
  "key26": "3DYypCa7K7nMGCTB6tBNYjyw6ZfsomjdmsoA1szhNzKVYBUj3QWiZcXP7fmKhfE2x6GqxVmQYejurF59TxXVDPP7",
  "key27": "2szh8Upi5QbULjXthFZee57oGPiGKVLocK1fxCzzu2RAsGKvHz84uXK7jEb4hEUqRma9Re1vCD6tstnhuxu2ndK4",
  "key28": "2CfUy7wKg7VLpKBdYBZUGPNW3LWRomzNc4QF6zm8tBWCzhCWhMsa98auERrLYDxwoz2djTq5ypae26TgNVpukVx7",
  "key29": "zFJo2hW2Y6hLtkgHuH955nM4tDRCWjSxPyTjG2AHM7f2hWyGfotTvq3enHinkrh8LLZH3gRHrP4Gscj1S5Cwy6r",
  "key30": "4rDuZrAqdkpWkQbRmiRbGc5YQGbNYecwvzkufQV9vvmR645gw8T8yDZY62RR3mrTULV3jGmNLSz9uxxfUAkFkVzq",
  "key31": "5PdVyKcghFohkZsxPMWWoDF6mKTeujbyRXVtkrR2FG19WLZBHGLmCS6fMRWbYyX1VkzdSdKLMwbbRcmSZoZMYv3N",
  "key32": "3AyGRgVN7uUCoyFZESBgHexsk21vqVZmtGhNG6i3hT9zDMZrGb6NSuJDUBQhFdQBzLz3dxGD6CAs2e5Bs9Xzmaz1",
  "key33": "3UwcMWnFCx3MQU59YZHFHHQphcBwDxQ7Z5VGm8kEFQNQYcE7PEsgKYFfM1eD223Ji3Zr6jqhsNdAKGqFUE88hEKT",
  "key34": "371wkUg3TiMMF7mWCF4X7xyJGjVx4Dh3G9wd9oH8ZWTDasYsALjp6R1su7inxjJiqQLsaDPQGoUbWDRaatHPJAce",
  "key35": "g65j5Unkh55GCjVcbzPK15ygZuvaLC3qVz4EjfKW2yv7QFg1bqM7gnPyzR8aqGPWaxJyXmRHfJKxdDcyqcrFt4W",
  "key36": "u6w6vk5x1YBZyvefu9ZcksojQvhzvR4UM5c5khhoxyn5obQ8wLENc6mRc5WNXxomeNo5nagkBBuVSDBkMycdPjg",
  "key37": "4Wcm9fxv7b3Uep6qymXEyM7YxiLRVSXTnUu4arPvVMut7Am1zLXbxH73vZ6SjZRNntcCy1R3N5y41PiH8rYNd2Tq",
  "key38": "4hjpCWGjKbNVndpHfe2RiJ1AKYpRnZUZsguZhXroNKFAWWMu92r1rdhYyNQZxU5eDiUBG5EUTtMYskjsz4R8gdC1",
  "key39": "9rSayP6VR7zvwUqkJXeZiNq1uR7CJdRAmnVKZd4St6RsbP53EGjJedqob6duXV2phAPdDs2aV3C2U7mj5MaFFAF",
  "key40": "3KYcrzEPJMffcwhsXYEfJuDkeWgVTPN5ks396S79wUKeCrjEgnbDuWGn9W9rwhVSJrhvfmGPpNQjgshrqQSoX7AD",
  "key41": "2GnrAX2rAy3bS2vjREgjRiFZCaPw9EVCBn2oYaMxAWVAECjoKxZi41bhFGQrT1R5rz4UWMnyuvvQqDTPojGaChH1",
  "key42": "ydnECwZGEY1AQv9R81XnwFkPj1ivCbg8NXBeqSLXb3ZDzNtR74EkDq5RX2dPMEZdWcghoNBui5RaqyKdEY2h3DE",
  "key43": "4X3MUZo79JtHhpxbdkeueK8KFsHkipHMFbT6ya4GYRMrSRZuzKFJ153ScjK6iwUMjK7KYw85Z3rgreBNZnYWBGi6",
  "key44": "4mUUtguTgEe5Q8bkGugzTPfLjhJKZpGP3DXs3qRx4sTt4sr3sKndz4TvhPuUBwySS6vjxJSLncYk3GFEGfWpFf5N",
  "key45": "27YiwvPLExiKwP32eDkzuFMgN31DmEMUskbEWv8ywkKsjheLLPWTrZ7dquUFMoyxQaVDuZk4CnPxxQhVFJWDRpMU",
  "key46": "qqhkbFCEeb3t9tuT5WhEbFTCHuNecs94CydfzYT8vA5wfHPLzapecuhPfx7YWPxVSYhQ7ThLjhZFQX8mam9bgXx",
  "key47": "5tYDuqTunU62kQYQ3dstF7Q7xnoHZsdXXUmBU4z4J6b1xKPU1TQRHnPg7pJ5QkVA8Xdij5EKbSF7H3hfHhQYAUgz",
  "key48": "KKNcUbeSY13aCH9MQUXsnfNCKgF6mdkgEzgmAeMs3yPddJvuVwDzRWr6CKXtyqoYrAnWsQoVGgeJDvWUNkWeS1U",
  "key49": "35FhnVNSGBCqtJ6SE686jfq1YsCs4jwHow4vdeqjkgoqnf55gNeutPRiB6gXiGYgcqbrSHU9oh2ukC4JiMZA6nSe"
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
