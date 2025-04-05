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
    "5117pRUxcUiWSeF77oHUZRGkWbn5bMibUWtddqRFCYM2r5yVgtyE6j7hacTdhp82GH4nuE1RHz5VoWYpXzpo6iqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxg2vW6bucrjaEKSPXnitH8vtyAxbQ2HcZBGhaJX1McBnhCDiLCgZujaHubwPGXKJMuZnwZUqLiSTwRBmoDughL",
  "key1": "Pu4vnkctxSGJJyKFDkk7AEVCD39MD1VYPdFf7EoZ43HEnQLiSkxEL2gKXvZEz37Wjg9o5akWMW1E4xJXiyeugv3",
  "key2": "9ypvzduzJGq6Fa1YUxag7FvmaEhwd9xEfo3yvsje96QM9kmQ7yxwku9RZwQYzi1m9GNz9rZ15skpyJBNjVwdsLr",
  "key3": "L7F4ARXpDZZoyRqQ7miUW1VAD2U4uDe91CkVrYMRdvuWuRG7aqCshMZR6NsmpCMghqkSXyCm47A1nBaZ2dcMbmz",
  "key4": "4TSc31urrJbPWpMMpX9pWoV94TZ4RNXvk5P3v5bmT8wmRZZi9WjR4AtfLH5aNVcLHdSMKK4gqGf7Am82dZQwxUKz",
  "key5": "3SWCaAdzfMtAUo2muyXLyoKw8G6QZmZS2Nj8XuyQJsJXSDth2meDURgHDhg7mE6t5dJ2DfhqK6tSv4hd5q33GjnY",
  "key6": "4qffUa3P9srhgssUnNjuPoEY9YYrb234dRs6ANS4ZsKS7wWXwKYgssd4iWib9GmS4xEPMSdpZgg11RY9fXgvMMpc",
  "key7": "5QP2pU6FwCdmPyudpbhin54PqY4UM5SkHVY8fPSGXnUTS7HuFMDJ9USSPALXtD3P6wVu1JxjQfiic3iPfWoYpZp4",
  "key8": "5QW2VGNx2YYMCtRhKwUTxr3XnM44JfVu8vT4wBCGQzCvQjXGCpPcqhuGSUHHFJygKTURbNGjPxYoNK1gP5en6xer",
  "key9": "2hJdwoiP7p55zBNJM1kxUQJoHMHTZB5cM8ApKYFAQ28hfNaUX3QawxrpxRw9AxBjxnj75iQb1vqqRRx8r9M6WBj9",
  "key10": "24wy3KGuH98MUw69SJD8Bvg8AuCgARJaSqc12N3EeHju1aa1RQwTJkq6ge2rem7D37ZAtZMBhwetLgUUCLYeJKP6",
  "key11": "34FcrgfokyoHQTw8HNum9i2yfPPg8UpnPXru6YSPHMUotMqGWLzN579SEF5UQc6dtjNxuuiVGA2DHSE5CTknymFQ",
  "key12": "4eVsvWYDbxA4we7bM8RMFTvoqGRkFx84J1UinsKdn2XkBGTu8opTp5pyA7kzLcENgMQzonqqDWshURTXWjjJGjbF",
  "key13": "4vShadEVHP7pkKBU2URrHHcwQXQZQ18jBBW6fg9DhnaMZYFKQt18FYfV4N13bkF4JEVZpWSdsZAK6nQAkz6UyfiJ",
  "key14": "USh4DF9tyf5HMXWG3ibSnD69WQdGLNJF48XtLDE4AVR4othpYGVqVZfK29h5ntngccC6ALGvB1FikaxivfXzwTg",
  "key15": "4cyeSUDFRJVLQptuY5Umb91uigkPx2LQd45dTKLxbpjZf5GQn4r2oN8PBptSgmcfDUdkDCVA67XryC8TgUWXMkmh",
  "key16": "5XFfpBqsRzRsWyLdECVCDjxGvsJSY9q3g9fNKCsmiWhYVyCtm1u4RqPafTrJE3Na8WB1UDYJESskVeHBx3rTbaPD",
  "key17": "4ZafAzdhGzoFyQJ53v2thwP5fshAagN6rmLqKdrn5mS28NKkT9Vb7U7wHhcwhzijUEKnzQw5pAZzhs1U7fwGZ9mZ",
  "key18": "5Wu3ANXgcpLftYT4wEwNcnmysXdxGovN5Z1DQaTrnS5k8yk42heRbjMwzM2MJwfMRZNhEdUzjL5Xo7VvcB6ppqQ9",
  "key19": "KacKf9AxKeV2N4ZxR1HoJ4KnkQ3pNBtMZPGpZXYmudtnvgyVzpf7fmpHiLuv8EF1M5ufwgAZKjxEYNKp2KsTKCR",
  "key20": "2ujmrcBgpcUkZtzcghPWurASB9PYMdY5RN7jdVJ8SWME2uYbnvQnGBwB6v69sPvDFuQswSdtcsWormqAWMPezR7f",
  "key21": "4FHZ6MNRrL4eugTJcGUTXhsToWBky6MevbmB48jEpSxzXtHEX3bm6TdskNDrLUYymBBFcjzEKCbJhbAfhiLoeFHz",
  "key22": "24UF3bHkLJFaaX8TBN4WRUMVRpBLPpP8H1HU5mW5owveadSWQzcep6cCh9b1eMRq9xv5sTYcJAJWqAKHSqhQnkaQ",
  "key23": "3mfVzLV7pf6zwu51BVPHhe4Ert2TC6SJwFtdFStvzKmFnWK8BNn7Q2yGL2V1qKZ1NsKtkezd4jKGmEcnXhdGRpvo",
  "key24": "55YQ1avrcQ5jHpnaMnTyW1gDLMZx5kkzUdP8yiCDYLPJzCktfnVyBE3j2Dzz4S1sCx5VZfeUUk16CcpRAVH8fJJn",
  "key25": "8LX2oK72wkwGzE8XKWJSqnkFVNHU5vuh1FohWgy7cJkpMYUyUUMutwVEDiaEShsCS8JrTJWC5ddACfBcJdkWe37",
  "key26": "4WAHQvUkmZPWFFdtisZ65jRTyBfB6pAaysj57pgyPJfnvZ7t4KcrqZixMoUFkLaAnGdEjdNoNKAC4AYzpDs7WQKL",
  "key27": "3BKxEegRUr3DxUN5yDN26LZvHEXaH6mDZ87jcE2xahKRXfYuG9r6TQU3KmX7ur9TodWsRZxuxMB3PZENV2jE7sTA",
  "key28": "5fE7JodfrGaNiJgDrMosKX8pmvrbfLfoirRozybXD1v28h89FMaeWLxXhMxsWj5NDZkbzQJC2S8Cx1jRtR2aoQ1T",
  "key29": "3yXTJEZZQCW1QQjMyRZh7nAa1ea85iB7DsTVGEWorxvPbeV5TQvwKpHvimwSrST3r4DhnWbTocVMKPjEJJG5UZjS",
  "key30": "2LBx9gTpNsLZpqYxZapBHJqHKx23Pm3bq2SJHoWBo7V2fEMPr3G7Sw9hhEGbXRtVz1rxZu1i3PP7br62Jp9iqL2D",
  "key31": "2tjrD2sqgVS4Dwuciq1p2MDPyZx9SaTHhHjTjY8Lg2DpASbHN39Jq6WiUrkE2eeVR8ZHRXmeQZgZfMN7CjD12tdA",
  "key32": "4nY41MhXMWp2wUQSvU4Xgf5hvv6GkUHr3FMNqkEHgMidWhVbp1ekaio5bYiG4Q7Mij4j2s7kMuoE2D6V8buEGxED",
  "key33": "4cLAdtA23iePTQpFayyqqxfBHkHYFyCGvTgYjGUabVXYeQAkZGKqQ9owkiEbPNLXtMJYC9s6uWhjzpLN3ag9Us4g",
  "key34": "4GNRk5ALxmaE6DRcTZaRptP3bZHbPxJXkbRjgeNaJRLLYbTLZDVaD2XXjxZv2ujpHVSjBDELucoRzo3wZ3oqNKfr",
  "key35": "3575NvLSVfaequQ1KyZm87p26mQtfDj349xH8fLLDD4x2aWQtybNfn1tkig5sQx1EYrqCtWZZfG9ErjfJMwqfjJf"
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
