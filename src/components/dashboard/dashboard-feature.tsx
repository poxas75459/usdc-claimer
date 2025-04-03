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
    "4g1rcB2AGMuVNhHmjRWfkMehx43VMZ92L43ARon1HVzs6UDLFzfdpLT9EKbcDNLmuGUwjXo5B6grruWWiU5jjmW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srbeoaCC23XBbpnQeMftzn8yTQn78zDPXpRH5uWtQjThma6XbPYhHndGNMcfMzM2boyLGSoUmmSy1VqdoniSTDC",
  "key1": "3T7u7GfTutFnfA2pEsfUKezsMEyVfdnRVga8xXTp2tTtxLpbeL524V6brY7ymjWdzoUdihTy42gP1vzpnkN5CNVt",
  "key2": "wW7V1NT29Uca1rnkDctdaiBUfqvBqRHVWGKYw3GTcXMJxNrNtv6am9QBR2Ky52hFcr3V5FKdf7LjKXxJ9UEH49B",
  "key3": "2YXkAjSFkM5SX3ntQchoyrr9sprZA8YxxRjYPbiNiqHqY8Vz3mHX4KSqFaJq1L6SuDoPNDP1fNFxiSgR4eDXpURW",
  "key4": "2LzUQPW4y3pEYSBwggBqNRX3WnuXPK7tLnJBWnxCyxj86pXN4cDFxTztEDs66Xe1iKnypZ2hZJ6tdf85Wg8v7gqP",
  "key5": "5vaUNUwQsD1Kstqk282KnjZASHZPco38i4h5KQQ9VDS5kaFJuNxphhHWcM2Zpr1Tr87AchXof42zXtPT2qiC1ncr",
  "key6": "4t26W1Sdn76Lhrpe1bb9edB3PsxjgBC6z2LfjHRcZaCnfPqzXUFkvVp8pKKqRKwSyZdRxhS8Bd1S8PeHf7ZrpQta",
  "key7": "3UoPT2QM6Rx8nobU3X4bwGTFdkRh49A6vZSPVrfFft9cxYnSvFseBp1baDijcCphaprddKxRyvDp4Arw6KtTurnP",
  "key8": "5qvWqc5WJL1XjKuZnpT4mmHCKq4KiFhaRtTWK7SFUF9iTcemv3kLcAX8vX4asYwDpUKQe3RpU63DHgsStFUcCGie",
  "key9": "5uJ2eHU6iX9oNDcEZ39ENBYVUBs6oqKK8im37vmef4rUHCJJHjbfUw7xvJmnYJhRda6vXSSfjwGEhh6xKuGp56RR",
  "key10": "3YoED7s8tpwZnq2FHzLkCZSWDDnZEtqzJ1WUBtR9wdLLc4UmSWxxeGY2SawPdPL7GCQLTBbBNgQj6vPohJj9RhjZ",
  "key11": "5dwW6ZSoFTKsEEdCxkAMoeL6o8TfzkTv3ntdYFnw6oaVcHhG9XPzdve6MdkxhNmKQV1dD9LrxUbaRBgR7nC3qVKT",
  "key12": "5Yni6WSqtLLQyUXysDcYg4BiTxrd2Qsy6BEAZE3wkADYN7u26HSpnZm1aAMFADa7VZGDMwaM4qyk8ozdyhT241M8",
  "key13": "1ZXSQZVnkq5K6fvc89xajeKwoePbGCN8vQkW12uXM1uyvJLRyyyDG5JYoGpSsyG6siFd9KAZW9GdSG8Xkajb3Qr",
  "key14": "5r2vFwgoTGw4WFVA5BM1fZq2qf4siBUKMZXkXcUddXsaxDhRQYAXPrG9hVFV6BFbpMB28WpnqbN4smwxvLJoNqrQ",
  "key15": "5DN8x4zCSve77s81tcqsd6xry1bbFVN7rvT3C1nMGsai3Ns9PqH19v7m2BdnZdJweED2r1YWseWZqA2Sk3pmgvcj",
  "key16": "fLYySkRgaSJscN7iQescwwFAjEWwGex2HhyfcFwBQUGdqVXoz35A8s8udaWtWx7oMZQB3r4nEsKgFxnk298zarP",
  "key17": "bqgjfq1ptQWz34YMdqiuKtkhypy15rNrd1tZwQTnfBLiSuM1KvW3m7LGEaZUr1hLeaUzhd6xmuJC5RDkPoane18",
  "key18": "45CxdCDTqn6hDpFWjFccuWaimReDiJVJLGsuJPRAktJm3rb1sQJy4pdQuy591FsF9vhApfsPjkysMYUtM9Y1qiZa",
  "key19": "2C2cmrjQpxRjZjhcma9AvoBLuZBVSrajAm8yoEWhTHZRRZBDZXqMWK6FYmgV9cpU493V4zASwafqP1KffP5hdqQs",
  "key20": "4B47THrMkirKNGuajDCShRyLdBDfhzqssZvZfbsErBiQE1iGjqXBwKFNK21JQygN2ofQnPGNqfzBqWWwjp7bEsoT",
  "key21": "5i2uajt7gzNwHeoK52syhLNfuSByzmmKtEPKVLYHUMMNGwRdh9UvCdGNCSbUd9KCx7pLEFDG1pJiwGpf8fwkk5MA",
  "key22": "Rx35fMCCkt1Gi2LFL7TRVFsHtvTTj2eVekxedhkd1dD6BRNX7CQnhuQLPHovYGuiNsAgDDDMPXCdcu76RnaKev7",
  "key23": "FdMvzgcfcUyaa9fWW33RiUA5RFZ86gAFve95ZSeKhz4UWnoc7GdvHQcHuT52MST8nZ5my3gSfZtgZBKemmZynan",
  "key24": "aaj1Biew3QJXKQzY1KNJJpoR5mvKE9tYFhaaH4e1vkSifn4iYnVWCGhLmsTRSATqesWTRYHcRkSmayHBp2Huodu",
  "key25": "5JkL3Ke7gqT6yR4unenpPfNjict2zDkQco2n5R7sHaHd2JsMVP4rZPWPBjBPJC8HvALhZHvtCCB2fk2uzzCJZ4Hp",
  "key26": "5kurcJvcTTEaHYNZQMYQg3vZQu9brYDMcnpZSwAEvrgAzMoi95S37PNiN6WmnHz7CPt8dMVHK9QWsNmpjrRi4X9",
  "key27": "3d63Qr3nmqsUi7pDxPLXPjacy8BPsbfeXCohCLwqWG5UATpy1KUoRCxCrDSvPYWQqwExAt9jQtptWuqjcw5i7BcC",
  "key28": "5HdZMDCxHXXiK2EoWD8wnjzWbgrijMt57LZ8rtZg9D8h1YKyyPWJx5MW1xPHDbsiMKZH6LHhTyXHdXojeznJcepA",
  "key29": "66RqHLpatBLwPcK4tLesKkLEsEYEZJucvxzZb6L1FapCoCMDAszjT59kHhq1e5P2GYXE7ZpuSM5JttQk3u886AVZ",
  "key30": "2Yv2m8N4K4E2XMK4fqj66dtPwuV1HMXMLMy6BKrHPDSXdUVuZvERAZQokg8JSiNEay3mNzNeVwgm9A4wLoy2B1HZ"
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
