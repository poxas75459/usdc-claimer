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
    "ZmWCw1pTz9DZVQT7MDhsWshc76F4JdZP2EGfDHeqfWHbyCboVdC1QyPgfk9U1gbtYK53C7T5czF2YBFokNwyNkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tYxpCQWqZvUrRWVh7agtz4oaK1kbUstzuTw7gR65wQa4emK8BoNu5DyeS8vFo7YvyZYUVY9uPSQhGAAN8S89WhQ",
  "key1": "5NoN3ZM3aPns6CjPyr8q2EuPsFoE727MTcuvdFNDrgPqkAXQXk6Aboo4Y6vXdTSXXe4VhrhbxPPVrJWigywCGeM1",
  "key2": "WiCcKbPzKqCAD9Nc4NMaNYzYtAJsDCMXcnChkimDneyxmTN89FLgT76r1cWLiqigWiarxKGE5hkfvHUs1y49wV1",
  "key3": "4o85yhPwaawPK4s6oXiPskd9ANRQLSphZzX27CoWhTJQ5Z5KpWEAb12sUy4AQL6S5aGWQHg588rBRxYxGuzx2sq6",
  "key4": "HDR3WzsQ178qjtEY25QwCQKXyFxcCL58jhthhK62MpjidsEf74npBuhCSj6FHjVGKCMxNYmKWaGnpVQzSGAE1ER",
  "key5": "2p1PcXP1nhLvgdnvbUtkgQfEf7XBCDkJsfhD3SWLiLzFTkPYTaUaX1u8VENAdyf8ZmBEp4qv4pR88Cp8srb4pQgG",
  "key6": "tQ1nEmHAwCtfEHo7ie39nfK2ApT5VD4JLgecERJZ6DngJFEVU786iWbXiL8QRR8L8qvbXZeQ5DDKha5A22UdowF",
  "key7": "2pdAv5gbX6Ahd6PTCoaHtbsr2gYVE73gD9RVaNGeY6cgTrgfQswZbkaTCvjdK3BNmWpDpz8R2Kfsr13DWFuCA7zq",
  "key8": "2CBGdVRLRpMVqDNy4NrLjbqaa3Cvyak83wY1XvwugFEgSPVZ9cfubQPr6MWpRwzWrTvT2oJHzdR84DXWrWk5oBGz",
  "key9": "5CcdvoqUkhX6pXqHbUkkvt6h5EizNGLWycb4nekZw1vsXCa82yBqtMC9vQPDQPrEX23QVkdWdCZXsubqpK8LgwJ",
  "key10": "67PUBBRzBBLe79wuzSK9gznQdvc1QpAfco8dqBa8hP4Lq38eTaiZsL1zVCTGCYSjde1VB6QvTKhpBj9mzyuh6SUo",
  "key11": "4eQ7nmSMXsjzw3C1kFg5dWNpc3WAjzdWWjyEbvcgAaQQCUtkPGLp1Fuxw2vMyjWasx9RH5zbfVdQ2weC6mnneoK8",
  "key12": "47aB7AcHhDJda5fxgtSm92cDPpHLYaBUpw2LnxvX32Yvu2pwceupZUH62G5jAnxH26JVu3SoMfRQmndNC5LgbAxa",
  "key13": "4T8YNF5XpxhEGSrLhRmbDHTdKaFwCKZzFv3XuQqUZ6s75piMXJPh2JHUMgCBqBhtqD1c5gsdaCJ4D5yuw7FddZUp",
  "key14": "5yUWsZzCLpSJ5WPYsz7hMrCaEDWA4882LCtH6nsw4kz6rnJNxadY4oH3eHFXmCr6bSDQPSvrRyzKhFhYTPiswcht",
  "key15": "5qVexhm9U8Bhx2Cj31p7xC6iWnv6KZ1FLjd15dTZTgPbcsESQG1BLRrhtD7WE466bvJJdvxtR2GaVbkP15tMtZVV",
  "key16": "3BXtZScxSnSCFGPj8h8Z1ZgnUd6utMKo12eQMxiP2FNyihD83QvpDJLxR89Dkv9tU5yLqaFco2vY2GhnzsZEh6wB",
  "key17": "4C6krSGzD17zZjKMf1c2gMXFZF3a1ZFBzvKg2o6VFRePyudUBkJ5XvsiufLuw5wDgkd783B2eZgkdBTPJc3Tdaby",
  "key18": "3QQVtTHCcrUdJ858eMVTUVs4KF3rvQKSRhFKvHcykZh6aVd8ZT8HVaNCBAhzyfmQ8jqntksbfUB9AqRbgiS2sJRT",
  "key19": "2HG81jEpt21Vnvfb2C4oneaxH3XXukuyAcAJY7Ev2DqCAth2Su5WcB6CtV9ieiaikKAYrBuMCRqP1tbfMKDpH2ix",
  "key20": "4AfdpjGGyK9QC9k5dnTSKBwreTnTreS6UPyShwVfYopNqSZYjMx3YtKbMKakz5jtZTcJrWL7VGBF6Mm9fpHtrV5P",
  "key21": "2FkpZjzA34tCvWeLust7tEH5X9Xpeu4ZQTwceHUmjNqmfw6tdLUXouC6iJvVRAVwA4xDtMurkowap8sBytRWWF51",
  "key22": "2b7rAPz9LtQhXJNEw6VZCQm1nF4ztthE99HsyWcPDdCBvkXm7WiiktnVt3waFUTr6E744eBj4pToC9pdMMqf4jbb",
  "key23": "bZn2zxJ8HYzBPYBFDHX36pYpWabNLF8x9z8pGZ8xTuvVd69PMSaVs5kmBJXMYq5fYz1das1t1ezAgUxyHPyGPZx",
  "key24": "3hGsQQTVyJUbqRPHC8m8WSh8AfwvjoGV8Q3Nh553HcvfKLDRt8XSJhsCUfoW8XsrHSDhByVxVQspX5MsFbWGoLBq",
  "key25": "5mRH4wZ47LGwPqGAKD2vqVkpsXaYUvQDytagrHoMCki7ZynnYNjHqtPuKwB32YRvwTciQ9Fw3mn3w455qBaui47Q",
  "key26": "4BzTUzqJ8djJR6FCd6xUUNkDAt5oqejUbxkUtTXzAhxzxCzKWjTaatpRgKXcF39kAjmhH2nVuGn8zPzPTVwirMW6",
  "key27": "45Hx29qDTbqMVyZTNGi164GTRMaXNskfbAkgFnmDrHkFPkvLvqetjxhjRFfeZRC97kWouq12vJcDYVzgk2FMK45A",
  "key28": "54PwwUAGQ97YuvQ2t6MYmEJEjKDtnrqcJJ17bkeMcJn4dRC4RV49RjiHdgkJhQtB9bz9ddgVBARtNEL3ixLJqy61",
  "key29": "qapcegSgBNQFsPVZMWdU7HUuiBLW7Tde1oLExbwji3eGkixFtw3Eo2ZHevHhrxWjSe6g7G1dZACS92G1nARh7VM",
  "key30": "ZRGAwztCiwLGfRzaYGgSe6JjX5PZXuQLuotiFUeGo3ddrhA63PbyXnLXFFQCzHNLkFdi9dJgScjVpeKmZ51cJMp",
  "key31": "3mj418vNwzBrmRjWUK3p7XH8KuEXh4R4KwGXDyNxrdd1Ttubk1CkcQXuC4bP4PDb4pFgk44TzkhgZsHcWNreiGRT",
  "key32": "5DxV7rpXe3KCWxZVUaarPYNJH5JxJaCHhY4yourdRYnBuekJMfmnHL4i3xWAoymVBBoV9hsBwxYNA92u5ud7ZZhK",
  "key33": "48ugqA7u8Z9rWwH6TDFhtvZFbJTSKJByEVn93Q8cBUBLLSBDNT7U9nBCgCLVoUyFtBffYD6FUZ2dt1LgPYe6dWUM",
  "key34": "49QYJPr5rS7ip9AmHSHjMUGgZMHzdMhuqdKVF9T4KvXuBVQMHMmMCfEeYbEs8CXx8NcXUPpRnhSXforoDV4he5Tb",
  "key35": "21Q3kWprEgDqbZ5qsxnRhVHhrv1bphetRK6qepxuqWMW8NSknhJASSqN8yJCmFKGN4C4uK9RufFXNzmFTYU5kJh6",
  "key36": "3RmwzPeo1bCvnhutNGLxZQakvRcSV3nVXhg2Yfz3Qw5LAZ2SM1yVcJP81WUBPhzch2ajrF1zdE2FgzrecNAJXy2s",
  "key37": "4skPAjxRk6CbPV3RqJm5BFsGYd1w3nmQKPU4sNefi56ocMWEsy9pXa3FxEJftVDo4UqzYcVUuRK4MKh7zefQUZX4",
  "key38": "y3mancsREEeu14UNmpgxbYuKPwn5TTFVzbffHJwgEeaHYDFxZaHLq3tm3QqHz22kWcwLWqVVE7JxZCqRu519kKi",
  "key39": "4sS3drWHHGFdjgTJUsb2fWV7p7MZqycmNvrr6rBffebKTNsTR1VAY6inidbqZM7a1ujkqnttAr9iahqHZ1BnqMqQ"
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
