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
    "2NNFaZHrDzPGeTCx9F1fnvqni9gmvQPzPfBFtJ6XkempBFWNLGtBwKrEPjZ1yavgnkfZaLS4DbRH13dGeBXBRu9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p4rMNgbSeJvibpd23iGo2dXpShtPeTwVijmB1zRUrDkPYjBafyxCAzscLYKMugad9Rw3jxkDeGbt1ze1Td5ki9f",
  "key1": "5NMkBFCNwNSNzkWbUz9ov1ofXWWe4p3kd83gPirwWvkQR31VEpApCptGBy74SSfKEmh9feb4syHE6aGs3H7of8iC",
  "key2": "49FeqMFqQyWp2qw2L8qYWCNGuenH5ih214xVKydtfyQnr3NkZKS2KdjwuT9mM8aScVBMNNRJ7XT5D6xxZbBiynRH",
  "key3": "264XGiNjnJ9fpoorKiTuyTM37d5qdy2ZuJ1gkZAT5ZUJYLQn2YVf1Qm8vhHkKeVwk4nNoxV3ZRUAY7Jj1QM94tmm",
  "key4": "3sHr533zV84E6bDjnXkpUJcKnbQMM8bLRjYTQ6TNDxgxGHyGZSwcXD3FFJgLP8PhmPRQMqwEBbvSiQqisbquMoq",
  "key5": "5dUJaQvUWXv2Xc6Ueuoz3rfhitfvSBzaJiZCEEBW9kbNAc6e17kgE5gGUSM4icWtq4PU2a9t8xi5GYJaZyJaJA2A",
  "key6": "2PgVKzsj94oFdFMq9QymVsbAycDxuCUVhMbiwaxmDSTJiwFH1zvuK2hnUjidV3JKRydLJwLRPgCyDRRgZVY6PsL7",
  "key7": "31vSbDrAHgGaQnipkaTsFLgSgu8y4NvDRGWWbSZBjBrz7FezCmfs5Ad3PGKRvM17HZbYhwTJTsiZQ6bjSSFgpktL",
  "key8": "km5B6rQe5iS3gBMFTsQmmtuk2uvXJ21bsXWUHQegVjx6eiSaZB9zd573a8UAivjVvG9E61bdPuCfiRJ8E25dXkG",
  "key9": "3pjrCBuXZ43wT5euQbaJVxNj6xJYQXgM7P9ySFDmPe49wjB8nUwuLkzRMNFDpAmdjNK18qvFc4RrXvKt9ZyiHr2C",
  "key10": "WcKHDc4pGwByTx9iqNDBKUhGQCRa9BCMeNcGFBs3nLpNortmasHZp4E3unTewxckaijh7ZJHFbTvXud8W56XBtY",
  "key11": "3PPYH4uwYk9REPVqF17uxubvnT6JyVWx8UYiqvAG7KUXr2eJjFVrbbWJHWG2BkYf8AARhvL32QANbCNw4wFGZk9S",
  "key12": "3R52adQgSXg5sRi8qeqVpmfGHf6zT6Ybome93ihKoT4NsLSoQ3ABiEZ4rLo9zm7fvqRug4rxyEJjUuoPifFr2AJb",
  "key13": "3QENQ1WSwXD79HtzCWwHhPngXVje4xZs3kNxiVm94SoyhYZvzF8fwvbycFEYFuyeRaohjjoDWGAu74AzcDW1tdQE",
  "key14": "3RHov8nKsoT7LKSoZk4v4HwNd2oV1LFmUQ4pnrJyot3rmGvb28X5QAWjqEzJsJGwQuWhktYRzg5T8VCW3xV5N1to",
  "key15": "3CF7jCeXfW6auG23SALbNY8CJFhk4Bj2Na4xTY1gdVuxeK4at6NdoJoHNQU98sJDtktXXmMzYufzCwVp7TUttjHW",
  "key16": "2BHi2fWCpx8N4YveScWvYHFKCeeWANHPt51XCVPQFpo6Bf9zR6WKcDkXVy9ZDyedRbUXiVgBaVvetjA6yM5ZQMt9",
  "key17": "2EiMaEoqDZFsFKKmnooc3s14nHvTcNWeWNXw59Cqu3LuAUND4Truee3jQyRCstpGTbhrbGJej9NkxNKntkD1pFK",
  "key18": "2bkRsgUi6kcGSVTTRwWwEbW3swzobP18QCcyNxEz9mJJCHoVNWw2Yt6B2EHiKUygPNKbEbjEWRP1yzXYb7gQT7bj",
  "key19": "ygVymRNaGLvLjAcuU9gk2225XE2KMcmwkustp58FqzREuPHZgM2dC4k4AC2V3BTkWMhGSVWsq9aWcSopmv5V3fw",
  "key20": "5FmczFjrAbd6que56k86yo5Wd3PBaoY3Stpnof7e5GeJaVqLWHoxzahcKePLPkDSBvqanpYQZKHkDKSZi6u81Jkn",
  "key21": "3S3MmecWEuCmKp8Rs8TVrxtw7XmqiNHVrivCPXYNyoqi3muvtbjAW1oAf6YmsdZsWaaakroSfFpPqsaDNDehzBFk",
  "key22": "4CaL21rppXBsM62euPs3Wq2ZDuPHqcefgiNbhws6SfHdAtPnBtyNZ3pqaxsPxTGE9sUeinDWaquFeEzwc4EjrjLK",
  "key23": "5YjfTLSEPPoCJCruz6QVZALNdgjRr4fDNGXvP3WVnwcwFCPEUVF7TVGPMMhSEdQqaaBRuTtxb3XzS39chAen5ipQ",
  "key24": "4X2oUNXVHzrpVZUXbN4y23wTZH49YENtYCEW9DK4ie5SZrDAd4AM1vr1GTpppLD76zhQWHJULfbogo5NZ4BiM3PJ"
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
