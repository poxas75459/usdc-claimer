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
    "44JmbTf8MQudvqF1U9kTfeG3585fDqgS7fx1TkLeCMrYmPpVii8ze8uPUM9hRBq3pNoSVY2XJVJtc2oz2g1atAmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51g1Br3uQqp9pmUbzYoHKu5WtDWWuJNKF9vfoiXQht3iUdDqb2NBVjuKQ9yHU2yzwKWVCnfmsvrFNzUk13NB7PUY",
  "key1": "4wswMPDRX7N21HxhpfFRcnuNDwM3fvppMTgE4JEc7MU6P9QfNtZhWvNQsB1J6giGh6rhrwHgJKottbojwpRud4o",
  "key2": "5F58Yk5Xj5jFtASGRxUFnwfWVPxL55Q5J4UEq3zcvoh7TYNgChn8guPmwG9mmc2YMFpVBQZDZ7PeY9DkF4H4A5hD",
  "key3": "4SfkL3uVWjWg7ico78Y3buTpK8S27KAfbrzB6ujB9WpEeb7iqCn1CpmNqYpvafVyYKVBi82XUrw1qdac1brPFYwy",
  "key4": "2MYxKorDqBjXMmdsgRb2Q3z8M9tR6oeY9AG3VncXMbE5FPSvaA8YZFJp4WDtsGNAqT6aQN2jUwPHo7kACRPShBXU",
  "key5": "5mDJC489QFwEj7J3w6vF5n5vnpiYxkzfQqLGefXgpVS5ARdsFmGTKjXmMcJRCVw6Jk4C5X6FZodNxZiiPGpCec5G",
  "key6": "3mD8TSjVmKzQASe4YMTrfULLw9pNzWA3fC7gbemaWfRWP7KHNW5LxzNmZcwitPp3KcLixaEAmmZwQwMfVitQUvRG",
  "key7": "57Asr4F1U9YhdwrxvyQpYTRUMppfJrg7a86L3UTwMKeDTEXJNX9xmVG9FayuFeDvR162GXsw5utoPRQKn8q4HH7E",
  "key8": "35BAmY7rZeuo1QtJfuyZbqPhngk8vtuKxWfhATUWFsFtQGfoJsNjc9xFWiBUgfipfU92BW8ezm5F4vWvHspo8sL2",
  "key9": "23gtwypfZphp4eLUbeZZknZVD4aEiL7GW4saikAvDkU4eoNxif1jcNBSpGkvTbSryyW1G25HVj6XP9b8cNiKcRcs",
  "key10": "2m4C3fzzM8LHak8rAxRLqRKmNebY4fM4mQQVmFXWSuo7xvuUeHskfPsPcToN8cDP2fF4veEKVvy8NLZfiEhpk7Pd",
  "key11": "4qLJS2QYmwDhamJW92EypK16jw76cWTUaaS5WSAGBdSCRRYps4yk4UMddbaJ9KnbvD8e32kV7poqEDM9djcGeHqQ",
  "key12": "43ufH6SaZR7vvp4hWp6exZoEfU4gZrJZp6CohSadGKnsiv4pbXCHhNxvYHThy9AeHoNJuMi7GRLHWXW7nfQBkRr7",
  "key13": "FSARRJxPv9kZ4DBx7e7t8xdx46jmsK6MR1M4iExgspBZwtMngVhs6A9nsnXANoqU8VqFUFNdHNFCWkjZNG29HyG",
  "key14": "3zKs1wqmip4sy261VgGN6wZibHSzd5xvtVwnEhpTHDDXGFaxDnZfgVgxeCwCesfxvwxGiDtC9jZsBPVx3UbxWAtm",
  "key15": "PzNHTvjyjvN2qqJ24Fd87z7SGc8W4j3rC4HuQXwqVDZ9wsfWcD41jGT2r2d1exLAwRphYWnR4jeaSUuEoibdSA7",
  "key16": "TCuNWyfZwTy3vrJLVVLjZsU372hPqShWAYZBmVB7hC5qb2dGqKyHcwzagCJb1R1etBCb7qnymTZ87gpG4prgfwb",
  "key17": "2aTzygstoT5qZSXybpiMLyCnrB4VRmzFZjXJscoaW2iWqHGEaKcbTPXX6bH97ahUv76aqACYzf21Kc3NtEbNZy9i",
  "key18": "25RdGqU8gRTqijHUN37UQxchyHtFgSCkHTe68qgfXe5vp2nG2gC42ut38bvD4yy44qsP1wfi4fexxoFu1kAQKGT4",
  "key19": "4Jk6b5o8BkgCPjD6qW6qmcsrHC4MaaNUWYWZhX1uMuA7JMrLrZtiX2LpzzkKJymMtdw9fNtUrUs6xhj33uXZp1wS",
  "key20": "3fVKfMAhUMghgoSTBnwefhwYnZCaZTFz6gJiZfAnZ1XxYuWHKPkdT2kRRYicq4D4ntEBjqDd8bgGHYTj3be4adPK",
  "key21": "3z6C3gbGU7m8hhGadt9L227jV3Rx1dDNRwBXGEJD916QQ7ocGti5CBUUtYr1NogiMs5jjGPkpu3VbWn9EMHBd8Kf",
  "key22": "5yKYGH2pusTttefVj3Py1Ee49gd4qHkMXHUFsjEZqGaBsu2Nb8Mm8UhaUo3aQXTZAhQg1Txm5pVJsxYE6FAvXUvs",
  "key23": "24LHEKkszqaMV8dRgTJxaY6B6v964bvA6rfnrHohQEkzbhaktptoZ6TrqTHjfjdioeYyHrrd5aaq9LZCopSVaPNZ",
  "key24": "4g717rttPVVxopuhoBcvfvcs26W43VcWhgG7MvuLuL2eaJS59v64JSD5GuZtrjZGnWpj7J9cf7nn22qNmKKYwSSj",
  "key25": "N9pkZ6WeCEN3Fsf8qmGBhEBV2JCfS3sETE9EsmwW7FC3dAzu1fK2R9zWEz3NdpcBkGavQGciXFFyaVpKwwF8CR1"
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
