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
    "psTTWtTMKw86C35HnaHoYhSLa3aJxFqcL3dCbujk4znaC6wKwdBknnAJuvUbgbS6GECcUxdE1YGWPz1XU1n3kfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGPv6e7w7avV1q95ELqSvxFqsdeMLcZGPdUwRzeqPoJ7E9TNopakp6dPYxW5rUyVPLBRufyY8TiW5Y5crUrB182",
  "key1": "PYXYLKJNZaaLzwkMPmV5xfYsyV28s63wfoVzumiBcPmV6PRsNVrq6FeaTCPMhYoDpZjG82YYTrbrzkJ3t71qjA9",
  "key2": "ZXVU3C41XxWyHr6uTqa2R4xtGnWgMzcskXaTYLGD8ddE7G45G9ENjJzy5K3pfUrAbPRTSMs6rWmYsXz2uhH6J84",
  "key3": "5aHc8tnuw2QrjgavVP5wnQGD25jQ8mLZcaDbJDk4SHeu1kbkEfc3AFgyxGLc2wGxDtAb3GhUHamHZ3fgqvYreB57",
  "key4": "53YKhefKVJEqkgb1Gp7mJDjdEo9CMi3M3LtUYfN7XoYYypkd4y1DPc4YeyE2fbRi5SGXoW5Wr9kmQaoDYcYfoPCM",
  "key5": "3oJwyTxRu5TwgZ4ioeP7VBzuXFKiaySuG2J1H7K8GJYtMZub4jexym6Dr4eL4k1UMDxjkXh22771d6tXa27qSXbq",
  "key6": "f2bRbj6Ww59AkAciYVu4bJkBTMDxFf9Zkc6GDHmAtr5WQ92sZiiPZyzPz6An8UdTczLvAaMknUPCBid54X3vztt",
  "key7": "5hVw6qyVEaUEGmpAamZdvjoPbWMxG1SugMX419M2QcMSw95X8KymNibvvujeG9iXvce7zfBa9XNsLAfxA3jxBNb3",
  "key8": "2SF5juUNVX8WjiwUYrNPC42ikx5Uw7kgjvP8B9bTRhDDgNuiKDqBo11RnFYJmh9hpCPgCAKKGeKugQH3uX1SJiuP",
  "key9": "2bak8udpByGUzdZwpXWZPygmwkn8xCFwjJtvZkSssKR3wrEGs9K2wVk5ECbLGyu2YkHQTnYMrREL8uCL36wBDxnV",
  "key10": "4wC1tpRB71szwJczAVbbPVE86wbWz8MMgdjAguAi1fV3NbRSygC2BxxNKzwd7uTp7RfK7QxeywKWnAsRkVEn93B6",
  "key11": "3V1NWjB3aH7gy3BhMuz8cMDgNBxZPFbi78cEYdU7oaHHBrnmLLcrn1MbpK95FtTpxJwiDkZgQq9eozdGm3NBJz4q",
  "key12": "4y8G6FTavq4Y7WD1mdNaUMfh27RhpE6JEmC8zJjaBkXyUZwYjgn5N1qTj9ZtJLQntfxQtf6N6qhoDLhCNKSN1uew",
  "key13": "5okrBe38g7nQLGUqauo2KMLacKziK5aCuaSuzJoDp6ZP3ytiU4Xxf9tCXUyfUxuBk54mrQXFPY4FAFU88EjBYykq",
  "key14": "2UGdSMo6Xxy6RZ9yR5uTZBwS6oJpnESqtCmbr1T52rbkkipJwL7BEvy1Su72yrFqGRncdoC74pKUfMZmyzRnTEfx",
  "key15": "5WaeNXyHuzQKAMYmq4c6kBuWNcqFJfHRKMCxKxu9LKEvJKQnuuZD95sdcon8jbVXXftnYN25XFQ6H8AA5D5TCji4",
  "key16": "hNatyFRkQKnosLFPd15THQ8JcoYKtxQ8iiBdsmwj3iBACQi1fSFXPpb2yk1vAcSZwbWTrNCvva6GZSfJdd3oeRM",
  "key17": "WbufitUc7zDQDycAbzuxCaJ8soLCjZJruapb64FKXZXsRWKAC7Emwbt4gecYDEhNASvV1tWFz2aaUcD2qYzaV1y",
  "key18": "5KfzALQmDM89ULNFj4v9SMJpHp2fcgjQSpp1HnD1patvzvZAoaS4yjsuFmrR2vQCN81Bu6obRBgofoL6p4tPmoD9",
  "key19": "2UJZKhXdwUmhNnpwxNoiN1Vqq4HjkrHFSC6w5RHsvc4n8E1tPQPapbhKvRGMfSraTXVStYSiYJa1qNLsmGoVUd3o",
  "key20": "NC1useAXgpn76RdALeoUK37KbyAC1kxQX5tt7P16pEkyBS2K59PRXhRx4tw177tkMTvQqhGaKtHvZfTFXSHNUPn",
  "key21": "3WpynpvfVbVhfgujbDus6RbfYwMuENKJiFtgM5G9faqJzDbbmYQWUNpjs9yebpzGtXGRwGTYctFfatigHTW9f8gj",
  "key22": "5zvFQR5Ry3aoWCLMFjwdhxWRh8Jd4F1UDiY2rTy8RxUjunS7nZZ87oiKWD4sSeEGTNUtDM6mYrxiYcgEW38HEsHE",
  "key23": "2BCNY8TAw4LL1i4uCjVj89uACi7dEd3N6roVpnyiZF53B9dYHDncdwCisCVjaD5NeeMfd6ufjKJfqT34GyToKFcw",
  "key24": "32F9CDGsbBMy2UF8stbCAwAEDJqjq5wTJuoC7DGh2QqhWivjRnV18UE1EWvbHh9ivuigYRcYLAkf4qepFCxUEuPk",
  "key25": "sAt25gNrdVVxNySjfa7akKUJpJibBf1Qyf8mCmH4YrZDrFxwvD46PQmRgp8KWV7ozKnmtwCFU6TXqAXzjtvEgqq",
  "key26": "34NEMTQo4Ampvbw6tJLTKnL1Ni9QXpHr19VUBpWuZPrqaUtWWC4HZPguDs2gD532jKASqo7vj1iojNoxkFAQQacJ",
  "key27": "2niXbsrseY9uGPmxrH49W8mJqqk6NfGH2yX8MnxoeoB71LmUzBa6rGLzKNBgTfj3Nm6YQdUHrQePVyMfDM3trtfA",
  "key28": "5TYthFs54L4TWcQQgSQv4Gu4EGYFdKjGkTs4yDkMcSx8mUSYw1gi43WWpJvWtcVUaDhJPGkRam6YKUw3hdPsKE58",
  "key29": "3kA2sxfQE7TcAyKAFxu9peo98JfduSWXnog92YENjQYQQZEdvb4BxALFAiCA5XS51jdQYggxLwMrrG2xt4Q6rKja",
  "key30": "uXKoiFrWGdbqYzRmx8W5FFp7nifMuKVs2tUDzHUQQvsSkU15Nn4cAiyXN9SUuqBvYyphxXAZFCMD7TR7GdgA62s",
  "key31": "3R2nDhXdDqHShKejpvWvwudsXzLAHhSqscj3pC5vgfaoMZMoJF2Ltev91PWgCvt8mx5wxPBdV5ssefzXwf5MDm93"
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
