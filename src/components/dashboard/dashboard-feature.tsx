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
    "3JFpq2k83cVohyVkviwcnZ6mbkKKHLWdkncJADvhNFGsp8YoPsGmAgqgWASv6jbRHS6vhwXakfG5JXQXZYPyiKuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FHukmf8H9c7BzwzT4KZp8vieSCVYSywsZVtMh4THT5L8ckyqpz63nBCwcECK6E4C9qkK1sVxHmVV7uJxyQC8haH",
  "key1": "3gDFFJjE2tzS5PjJpwJ4BjNzAQP3UqXA4no7fas3nyJ5uQMhdsL2QeoCBZvnkEDMHYFgLX5EQY4Bok24X17kxks2",
  "key2": "3BXjPU3vrdYY6ZUPEQ5sEcEGvXYJfgMJwWk5qW2fRYEci8sA79zh1cf3msi6ZAKpDR8Y8gMFdfnk61AAKw1mte99",
  "key3": "ejgEtZs2hutgSABoP27Jx7TQZXyupKvEttneZsKgJnfjvhm4jq3DnMWHZiG6dTe1m6PM6LmycFnAas2CFU66wkP",
  "key4": "3xcp4oQzoPvN9Hg6HPtPPMo4jqgDAFphzXAW6gAfgizB48ah18Px4LgF9jGsdHz4A14UVrWyK43xDXT1JNqrFheZ",
  "key5": "2LNcza27tiussazU2zsNfR5vPFNMbqshjjKy6XrXF7Vwuj4rjZ8PVfuA6qsmx8quzUUSZqSQsAqNgYqkXdG7LZMs",
  "key6": "3SYP326nR9KytScGBdmZFtKpvuBPy2jHLJ8gLm2krmwukXenxhUf5UXihXxbFz1bihE1ubQa515XUvxh2zS8rDsL",
  "key7": "4NdTYzn1CEC5BUZxHzFt8ov6BKef5iQpebhCvK7qfkBxfexxxNSfRTHGvD7xdLJUebZPPPYDVeAmZRYDBVR7udnd",
  "key8": "4GFQXt1Rdf6PfAfdN1mmNMgv7ayyeyCvda386Hx7ruWG2Lp34jPW9841AhhCS2XCrb19yPiWRbUD15rVCxsfkQKM",
  "key9": "38gSzJm3ivTbpGzYXrYzGDGZmKATepfx7srWWqnxt4vqCk6GH4d38nSXQCXNjAgRoFFYjPGkkBeTyfNM7dfp2G6H",
  "key10": "coUSy3KRpT8MyPxavFbzTFSj7RUn5eLeFSt15v2BDcNDRSuwR5FgxaiwtAkCN8TBPh5mmE8n2inXA8doSRGo8Wu",
  "key11": "3eDa6PDM4DE628yUBsT9WCfAtiy2kQNbToRco8CnwQqUkYDquZqeNBNnuCayM8DgRpUkp5boAgYV5oE6PxN4tDEQ",
  "key12": "4T6H55kgqj6Aq1aNHw5XAPp2pMqGAYBX3AK2gjUXxkNKWStwL1V9kVy5KZzeMp4jX9NgpXL6goYw715eEpoukjNo",
  "key13": "556XNYeiffNUABHfaJnGtpPoDMkBWhVCVpnRkfXEdAgPxGdK2BrdCiSZMfG1DEeZZY9kKExy9h6X1QQcWi7HDqwc",
  "key14": "oWZv93i1ofJDxJ6BbFX5yosFV7Qz4zBiuaAcpQf43kmuePUEp6CNEjNE1ueXfYVGwgqZRzSCntWeg4uMh3vV2yY",
  "key15": "59JvYBcjC8tpaCX28WnpqY1jnJ7bvxAPJjizU6LhkEA7TTSeMRzPeagbLdQLoWB9WgTLSEpV5Uy7yeTZuTRBM81u",
  "key16": "3Lbdbuw5bYg1aYQy6zNzABf7zNdA1xjqdRk9yES8daXyvnS7HrBtb9Um4MKHbdanVqz68Ngn67xvHQyXpqPsXTD1",
  "key17": "4pwLJdwpzCop7JHoEde6HbBgSKdwvDwHovCPh6tq8yW5Ukqu2SUfmUXE8x5ipjRYCKk7RfaPxN6hfw62r7VYef5w",
  "key18": "253rVNBffBtkBNqbzXV8pjq3nBbLwr1XUddL3qGxgFZpGRZdcLQkzM4Adrmn7z8CBtVjPSoDZfBPjQUbj2T5LP47",
  "key19": "4M8QaWrMUGAU3K9MbbvJnXSzsp1ntgaLAB2xzRsS1qPnsLMkbBYsxVY2eh6UPKckqwNLSjePtMqY8vwXv8tZ9h41",
  "key20": "5o1Vj1Ps6dqQ7VEuNc4pSgm1hUEGEJov42qPH9E8PBYVBsfK6j4zeVhyrHzCasfJxBXKvNwdgzdcoEsfyQwffEz7",
  "key21": "5oddGnxtckjdtv6u48EBZDnpyDjZCJztQxZ7v66ghVTus74LCopk7U2K34onXjNwpDK4G3T2c8aswYDaoz2eAz71",
  "key22": "36YeLm3oLy7gyyGCdKfGj37GoTpE7wnPpBPr9YUehaiy7yYboFK4fW7z8FwjaRPMpaqvMFzwoLcp3wXqqnWmTGJn",
  "key23": "5Ji8FJz62SG99UEWqi1XNCGMFaCXaZvHDUxvr8XWMN2LNtVG4TAFyei1E2iurx2u45SSdqVuvg8wRjFAjxJDTd8D",
  "key24": "2R7sqRGpVfLf9mT9UYJLVxaYbUzGNtRU5MnveStb4sxyQX5ys6u1e6LpLoUe5v3L9KyeFzfHZXod7zv3tyj67zii",
  "key25": "wTNXaBMCFVU9mQHLGfQfjedRUm8XffnueSLSYGJFELZYtw2m2kXBghTLrvXtXuv3tCy1HMqGzUnyWSvx37bMick",
  "key26": "5L9ZxWUyDajX1oCYm1431JgPUv1KjtUi48GhiZUSDQdULWBhhqz3DX6zxhhw1pLerpUKERecmzCskjcXLBzhM6W7",
  "key27": "3WFZamqCt9ZnRRs6v5SgjXYmM2XhaUVKjAsmhqxDXFwDqn7dsXyoKx8h1k7sMiFcHE5xhLacgWpwhqFVCvDaVP2j",
  "key28": "Ei5GcHbtT7eVRY4jcEwX84TBzM9huDbjNcEJwYNSeob4NzgAG1D3fchf6Fnkgq1dBEtp8HEvbLvkQaYMmufN2uf",
  "key29": "WtJ9wmR4VMwFp7WJC5NgqY8M3ttsa8n4guBKZ5pyH2gzjG1vzBNAJ5g1RchsaokTEoXYXvNw4fve1VWU6Fi5rsE",
  "key30": "5GdxaWg4iCEo96jYiQGUP6oSaEhg6pBVwamzv9vZRyHKS6KiH9VRyjFp4FXNvZb63gJ8WK8qQyNfmtGKj9wRP7kW",
  "key31": "3XVxHHxanXdNbtphPw9bAEinVuM79BoVmuKaQqZ27SkGgCUNj6eaPWqVtprSwMJAdrqcNQWA8TGHGvWobVrBCUs4",
  "key32": "4GCoBLTtPdg36mcsDkyQWNeLaZSQSZw3wra6Y52iK824nBFcghpnkadXvb8YjeaTgSYHxAuim3Dorr1gH2eb85yz",
  "key33": "4LXT6VHo6f23JfwAmaM5Dd95c79yrrPJtGh94vnEgteWqP91swm8SJvaFMCb37BdtnkdGTPkFebXuGwWruyCvZd",
  "key34": "4QocTDiRdACZFj5RjZ6oGZacmKrz4d43jKbNHUuA1K7HWurPxbB6nJr856bY89uznYZ6cHXnYoXpZYcSDmnph2Cy",
  "key35": "2b5SkBiekT6G22x2f773Gc9Eu8dy8RuNSdmKmJKHF3jBzbenypfPYrrKwoKatWZZX9xNSbYYeEJmE9YbdVb8Vk5T",
  "key36": "3Q1Fk1upZJ7RsHJVAHZ9PcYAMijEv6MBZtMQvdLNBZLq2FkZEtpDHJTpdBYyiA4wY3dhCedtoup5yVxMYr2KdHaC",
  "key37": "3ak42cxmacX5ApPerjSQ7uNe3M8GMUiM8RsqGCLb3gUHQ9QunhgHEu4DcH4bAi3BKMgx8weV1ncohrVA7vnsTyPM",
  "key38": "31y1p9HEbYiC5pX7Yvtmdrg2R2KmApw9xm9okpjqWUMxLzbjJzru6Dgkik9bhwrRUQ22EgcCGQHGiS1nQUfuz1k5"
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
