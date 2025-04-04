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
    "5LuTott69XQhvUs381ngN3b9hPAMkBoYG3NcEhotEJJNhaiJqgfyN55NjrkQiQ8QLcqTpTtFbuvMcRt2HWrTkCZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEBFrxNAn3Vex8FcGnrcsrfHXuQqgxJiLaBXAAd8FiRuzNS7MmAaPkpH6EzKrVvjo1fLS6dmLm6UwMmcuN5ubFk",
  "key1": "yun2BAZKnsecWGjoN8BMsf93j3vWgSKQsCjDZWRWHALV9TjQm7WadRNzEpEHXnrCxAth8YNc8a1VwrCpxjcavKo",
  "key2": "LvpqzHkBsQPu2csF8qM6gLzr7yE4Lpom6W9NNbzr2kP5hK4c6YPxGMPkzoXoLY7cizfFxNFdjj8S2Dyio1kshDd",
  "key3": "iMtLoLun6hmDLwPLjqJpsoZAtPNmFDZNsJrxJkpbmts6FwYBiw5KnhgfcZghLtoKgNepQDWLUUdyMfPENKCLgSk",
  "key4": "4jAXU79jquvKfPobvKAzJi3JBkMom8Fo6x8fkPei4on1aHH5aZyqGi4ZZhJhTeJ94VS1SwKb7aAnHQDHowxGmqMV",
  "key5": "6mmqBpUbKDrHGHW4bz6J9hMcTA8BFEcWf3mfTxQTJppzBoyq5hMX475kr9e65byaLWyHtLx9fTjQfe4JYdthwwE",
  "key6": "5VzoURfxyq5SikQb4pKDWdJT1ByPL6kwKhf4wFyF4B5fX8np8TEFiQVbVvRzzWDKxAqRYVaHwsq9erL2E6U8WbuR",
  "key7": "EnC3BtRgwX9h1heJKYpUt771E8dEHigX23vT1oUPYQ9xGYaiZTbW15B5uFoREwVCAYhGf4XYVRoh1ryqy2n5Fz5",
  "key8": "4CydhyFotZQUqzDYSE4BksiCLZ3WLRjfcZiTXV2ZXrvdJsQuxLzvLeXmoZzbQior6c41KSoTWwBufmZ7amK4teaK",
  "key9": "5n5hpi5g7gaG7HipQD5W3H3QXBRkbQ9XSEmVskE44MiEMndZJ6Vumh2wV2ACtqB91MBcALg3sFh3zkjk1izYXYU6",
  "key10": "4wRMf5gDHptK7zmXXsZY5QDUh5TvHtqDvRaXs4PfjkfSr1KQUBqoSPdc9neoaPk3c9AQq9BEyhYXt9JezEaj4PLs",
  "key11": "SDfyyWLZn3TPXpWoWoT18PHoqXsdxkvAdQ6aUVw88PE598K9C6nWCiUBffRUPuuy56etkPAnaRL9jNZR34qTxG2",
  "key12": "64WKifFq8TCHaanhmTifsVj56hJ5BuDGJNMQzeWNjRsvcnfjP1vA4T9tzYNyKbzbKu7GDkGYF9jpLJvKbhvPKC7J",
  "key13": "3CPbQ5qZCHBoWnbNLoBnzULpefZGco7uFc2Q5Gg5wSCZkqyb8RxMvGGnw29yLVwXiVfwh1Sx11VHs2MpdjcYCFeR",
  "key14": "2bboeHPqQXMG7aFjVXKCCpSSZhszJyJkzrqT3jtw2A6f5kGr3EW6Vfbr2UManL93PHWPfLcYdxZrCVJusG1UMTav",
  "key15": "dT9y261WkFsjr8aLeGoTAtrUNBLomqFqHrba3Uf2zrbTEgfsDDSuyQzYT86NnCNmk612WyZs96PGPhY1VM4h8rK",
  "key16": "2bxhQAo8SNdReHLaZTtwM8SByGXjEnm5r3Zm6eJyqNVxnBUxMHhSKQBoyqJvyFkr7WeEyRnDJ5ipHGAEV2pxf6uS",
  "key17": "4mh2dQtWv6nJn7VqyRTDWL7WyZ1yNt6njwkHmkRvQFF1YHp5GipVgec5Jf376GbqSruAAL6J3y5TJtkBT1mgZXJL",
  "key18": "5bB4TjBcbSpL5dQ2wojMpx8CHGYZXUPhDWFoZqarDw8XWxU68AzobvH554yWs1FppqLLnnANXtZmoq99oRPfaQZF",
  "key19": "3eFxHBFT278aGh2utU3nz3fpYDBKmp2MgVYNoFtaSQr9pz53DJp9ZnvQURxj1sFgfCx9YTxxFnKGeR6GDU9ZXL3H",
  "key20": "5LJKQHkJvD4kSMsQ4s2RT5wUEMQ7qGc8aP6evvUfric6cCyWZfUTbBRiJGNRXf1832iF8yTLjweqD71sHfhu3Hj",
  "key21": "4NHm6ibehNBgSepb48PShRB4VUepiNJLLq3s4MRhVPYpAq9m7a1jxMnCHqu8EGnvhJ8HeALv4WQwXvg1R1jb9UcT",
  "key22": "2ZDBFRLVoFQBmba6QSd3bDksDgMpXCaDyCM5otzeXsbUnbxoe817EGx5kNMBuJQ3RdykKAYL1uUJMkTDdCQrC6bz",
  "key23": "5ftXsjiGX85GxMCtWrZcgM8ndgaRJQtmwvXb6KgKmuddXv62AbwJs4GV6QpX8pXz4etS8dqsRidQiwfiirhyroRm",
  "key24": "3iGxX4H6gDn2HYjS77Jq4KbMRb1M6QD7ZcecWdwRrDiDn3rNqyc8N2yJZ4nF2VodwVkCxvCRwZevheeBZ7RvNkxw",
  "key25": "3222teUaxWsfux4jCcbxfqJw8S3kAqDYMfKrtffKBfPE7vSzW6e9CZ9WgE37ERKNwHF7cTrJ14ELZkjuxcazutqV",
  "key26": "3nZjQ5FHPou1XsqcYCDT2wGGoZsn8opfd9CUQYcCuxWMETgG1kTxK7JayVRUY6RcwQC5NM4cJRTDaj76RLEVgEFz",
  "key27": "Guv5debkaQfq5YkKb6wNpzDzUmJZKjn9QRzqunz2Y9xTc53kEUsTxfHK9xSEg9ULPJjSVTFd5KiHZ8TgT3sTvGv",
  "key28": "Xwof79ZCiVbZW3vhQNfmfkQcH2eTbbXVBi6vjjJcmvopt8qLoRvbQGHXFH2U6WMYtthEuWYtfAHj91NS9P5FwUb",
  "key29": "2NBaR2HR76RkrUQgDiNWTRhBjpRguihNoLUfCv5eCAys3RuCxofHzWC6cY1qwQHsknpDReGFK5QEcNGq25uJiEN5",
  "key30": "5heUZPiSFbNJc41VdgFEv9wVUKiT75LdDgjbq77ibytDgba2UjvK6v8AAjfo5BZjJJqSe3gqk6yHzd2t21x3i85B"
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
