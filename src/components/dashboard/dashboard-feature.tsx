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
    "5HAEaTUHKsUyNYzU3TcH8Xkt5K5EzajCpxGBdxw7qYv92gtUAH4kDVxXJWTmvmb6ygWMi8Ha6fhgVRh43uVvogwh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BrjiP7KiqTy3882VrmGQ3qDmsWj9XvrYG32ZAFPfEcpfFMBrDTJfViSy2nD2UZc8ZUz4RchsLNhXewMNLQYgozr",
  "key1": "43ErWVZ9HEK3UjRQougyt2W1u3Rpgpy68EfF9tWpmwCxWWvrds5JtsCkWNLbnFtYftposmMm3sEDbiRwr5uisqE1",
  "key2": "5b4wTUQ5QdTEHUYLhj446bcdjYh2Vic1eHUf8ZaBEQdB3cwreNu1MYTDuAdNAfzVPda4V6UHgYwMyZB3Ei44Rzjt",
  "key3": "36CLY9TucSRRa2JuxXmPh81qjBB4eGyoWsZprHupgmxENhsde29mw2RbcENg5v4uRVB5MXummvaB6fdda4RMdjAb",
  "key4": "SXFqobVBjzxeD9ogV4eUmEDihwCv2x17HzJDUWvyZRs17UvLnw55Lq9Apx531qWHUYHU1hbzt17q2E46UEFgH1P",
  "key5": "dL6RRuyzQbq1oagJWWMmJSY4AFDfFirkD7TQ7SdVu1mza5tSZkHjoe5NiqoJJdZ8QrJdxcUHFZWR6nSLDEDZbE5",
  "key6": "2LG1Yni9jV9M7HzyM1ZCZg8G4qm5QGZXzxSx56ac5SApFBY5176ZMWvVW9LCBmaheRQPjEoYHWvRHUWDBQTPTPSM",
  "key7": "KN3wfqhwn3bHEtgZR7e87wc7XxjoVBcUDn4k9N6SwB4kxd5cWYKH9Q4HbETJAvptaMtrGQ2L4a8LrEaZsSBCoh6",
  "key8": "2cH5zRLeabEapz1En36FwwYdmktm4LpSFf7sd8vw1jX17jHuQQMfgfsGirjkE7yS1AHK4u7Eh4Jqgzk1pkz67LGx",
  "key9": "5JpwHG1Tc49GETwPWdLZwz2EehvamM1vFYTM5TS43heAjF87idgiunJkGyjLCVdX93TBcJB83WSb9kkc5w4seoBR",
  "key10": "5fyqwzks6486H9WZYGiaJVC17BUntawQwAAmYbDCpAVvp7vduhwM47g5oqNJnZswjLr1tN7p4jkbiJKwW1NVEk84",
  "key11": "3oSo2DTFpoLCMtJMZ1329hfC8CFNadN9KXrfK3oTsvqRvuM2ZtQGyVZJ8zL2ptLbM3pzit5TEdGYGTXjrZ8HWZpN",
  "key12": "65zakhCNTRZ5TcHfAx4KMRFBGtHU2ayfQHaxqYVtRCs7RnNbnjotrNfSrsJGfCVWDx32fiirEfdJpwwsyWH42BzC",
  "key13": "K4DFnQv1qUqTJcCChMaktodqFQ5xAh44pxtc1rnb4yRAZna251XTXzm3joLbN5z1p4YCMyy8NaX6wLDj1t6YVFE",
  "key14": "iDaJcXX7p2RcJCgperqPXqSD6Q5CE61xrUHEipt8Zza2e4iD7xsVt9i2yd4uStcDtPN85kX6cE19xxbmM6hBHBp",
  "key15": "1iNZVc3meMP13rh7C2PnV5puDrvqSU6G6pBtaZLQDZPNYJbAmNH4daAUDcMyPvXDL7t5Ya6KfT5WYCFMTgS2yQG",
  "key16": "48xM5TsvtMc1WHqxG9nvRPoYA9XeoqbcokmBB9q1sDP4KpxiVJ87vZicmLaKPh2ZBaG2VZ95oWczAVc85GWLoprd",
  "key17": "5aLgmHQHBM9ZCKktAA6beTsN3NHULoEDY3QMNwJFRuFuiEg22FjuDh8cgbXt1zvkwtRbn7cwfP4b9KMc67CjF6V1",
  "key18": "4droXyCSVffiq5uzTZH3Rf3FqpmTKb8DeRkouo4CfjKdPzxTDkpic1wajk6Muk5f5ohfLeR6ySGZxtKq2EfSZFLU",
  "key19": "3wx1VeTs8wQYkNwuJ4FzmzkzRrsMDEWLRTGG88fJrXmKyQ4KXdPk2bEbJEStcjDnHy9fAW3HQiYbyT5rqpbp74wW",
  "key20": "34jPNxbd572XssmWgTqxmqLsEaQwAWxghhV3Rp3qoXSFgUYfVfCoQafMEG6F9qQdHpKnFNbDejy8V4ZXEyiAmMzr",
  "key21": "5bGUWq8GJorvGERt2YeqgRStmVG3yfyAW6CKUuN1s7kQQyRknfK3KhLMkNXUe7kxWsG6QpUBtryAmrrPeETWQDCi",
  "key22": "4iNtbJCHdqXsDbeBfA74rfnK6Gw7ChsjsTaZqjJsJ4EVXFzWKM29ruPwmiLsYgwojevcGdBw1egvNPJymATYhFBx",
  "key23": "3mwGNXPZ7vCdzScArkBnR9Hs828oB8txkx7J8cqJ3wqae1AgfcZsEKmguapSMoKgqZ6tNVsCGNvYt62nZ5EUZ3Ly",
  "key24": "5P4fNJ1uNKHUrQGjbNaAY3jJkwyKLA8MeKeHpDK6LBCA9rnxqMgs3Kwwtxe5HV5uDHLFtx7E2tjuGVgGCU9Zpi7y",
  "key25": "rJ6oC2sfA2BBJf9ohLh463vb8KbPLn3dUghYWLdFmfhdhCrRtNntsr27fSCdZM9TVqkUrYzJEQRRz3TgEJ2gcEv",
  "key26": "3c4EBs6qbJXUa3kiRtByjVjyk5aYsqnQEgjxNL6a6hJAHZCnyQNyFuuX8wLqfaJkEWuWWmVDvhCrdhKXjQ1BAqx8",
  "key27": "5q8DakFj6xJKCFnpireZbfymPyVExMvxTJjC2cGpxhKvSwNnqviAynQcZhPgUb65oTJT3qiURYccrtiwUwBRbKBJ",
  "key28": "5AZ75nDHjJxxay8EKREN3KuQ9ZWTFRrK8TexjAVGnLenbg2hSkcFZ6hgVXTAEPbcS8sDoZ8KBGnJ2sLLRoSdwoTG"
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
