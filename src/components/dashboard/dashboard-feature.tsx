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
    "2jSCS245SBddTvBm9agfqUTr1KH9GbLuahg8GugFwkzvAMnJ62GDH6yWGgozq6i1uzfeXkTiVQ1FMRwQquYGmyZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3grhrpSduJ68P2dtc7vvgZxQnNoogAkvqsLVMTNJZPKHcj7MvouFgdVmKoa599fDShPBAiS4hqov51gXKW4z14pa",
  "key1": "s7puAU2KeFkKXdm2BXrWtRsxkMZoLmaowXrKgZEqN43MHGcRanRpPasjunrPZYeeoYiDDcH8ADnAp4XBARSVAKY",
  "key2": "GKTvTTFPUGmzDftonA27xSBGppcqAWu4xG7GKtwzbAejQaDosFmuT7Wf1GpJhU9MTZMnAEy6Ei4BtVZsgSxrmgh",
  "key3": "37cx4rCUg5Lv9ywVkCyuRJfNi44pmfUgP2NWgzdNcSKAacxxyLVaZ3MYbgs94QqEAX1kGhbh7xQzmCpZMhpF2t9G",
  "key4": "poZRWWoFM7sKMirvWUicr2bod7252vd2RrP2aiWHB275Vs5W157sp7jV9x8o6DUq4Y2twXQsnEEXyEiCcK2GgM9",
  "key5": "3cvMi4FbfoDijaDrT727n5fgYVutNsiEkbptxGvWZPofHy8FLf8Ejf7x4ebkrewZH1MCCBVrcUCRxjqfwziaqrbC",
  "key6": "3Ly2qTJ3wVLYKTa7tJRLHexiqTs95ckhr3Wv9UDEK1dZrPKSuhiaWCP1pmDLbAaDVhYJan7x8MPryg5wTgwmv8uN",
  "key7": "ZCNS5HN5SVXpLKmfctmNkXvaY5eV9HM8fY2AwLsKunBePJ5bFkQ62dfYwsuRH9zG2X9JiKDXxr1V3xoB4fY4BUD",
  "key8": "62qmZBPShD78bzsE7yBXtE3QUG2jTkFRvGXqgjxjuwshmidz9QEKnYQyu1xjSiZiVz5UJw8NWZTAsLQfG8RRNbVd",
  "key9": "3QmkyTQENkZiZrVgmpZhiYbZUoVhypa4xbimzt3eKzF8owgWA26h3ozAym2UnXwyaqF7N2acUna7zsBa89TYbqMK",
  "key10": "2DRaN5SRiCU49Fi5NNzpyoZxPJ6A5CFnbPD2yZPuTzcUHkaFbFCzFwEHC9vY5T8e4YFavd1RyQ93wPc9fi84N2xf",
  "key11": "5TcNcyCBcLRaReh9C2vvrQfvMmfXtsTqSZW3HqvCb72762FDcEHiEswnCB51fnKop8VCr9ywfRNk5LhLrGVCYYaL",
  "key12": "3GgQHg8J8ZWcTs38AxZL3jfNNPa3Lzr46iXCe5kZgZAM5uM2ztBp6dRnn1X4bgoa1bqwaCFmbDt93YFCaWUd5cFP",
  "key13": "2bxfm1BXuVXFT6jH6xY1AWQyfV9Do57oq9zkddJk2swgxsWHZ1bWtXa7Yk5fDnj1shbcVrepAZRPJwYNrfSRhBLt",
  "key14": "3jabB841yGUK5gL1tG3qeGKPvzeWQH6jZEgtoMU9vLupot2yA5cCDmqK6rkxqZSx5FMomKNJZshtGD8UaTK5qgHB",
  "key15": "2rpo2m6gQo78PL7tgytRKUPt2Ap2fLw8At9w1YJ7PD6dz4rwh2G8b2sxqmtzuQWivULxPBVTsWP9v85g59vzj7sp",
  "key16": "3nuJSVpVY2F4sUorE8Ci4yfN9YP9poX6YaAHoB4wamVRJE3HKkPSXNdEtpV217b2Wnx3StXEsXRTiUtFDx9RyVXn",
  "key17": "5EuEbeifT59PXbpbVv8MjRSwPRhqHG23kZo1TGnJHnzhxDrTbpvcBwK3BeykiFFrrjPhMuS23UqYD8LTLpbwkCD4",
  "key18": "5qzETqW9SyL9baRXJrzK1sdhRWe3AmG3J9wkvE7xXe3CEdcn3sCZmKvCFcptMcrh98k3bjHJqyBrouKCWkSP1LPP",
  "key19": "2nD5mEBkXfkvvuhx1HK8hEDDTzcMJsuAVF6SQjwXfNbMonYSj7iAqfiD8btM6MoDx8GSM1LezBxZUmATJoakbpK5",
  "key20": "4NinQhRHPv2wRTjampbtcgJWpGDWV7WoGvvcD98mCPsgtmmqT5cjowScigfZASH6D995iTLe1i7rYXa7z4LLQBPN",
  "key21": "27oV3k4Eme7s2DyxaUC4NrNj2ZdiNAqUEx3k9QCfrnt2sb2rjAtP3NqQtasBxaUdYiARPcY4nZEqi7ZHFZmTkmYd",
  "key22": "4fqrM5neY8aC5rFNFRNPi1H9zmQiXRRrMuzDCnsMqoUpT4mYJPGrVearFzmhhhJExMNs3JFuknH7jKtNFSaxSyDk",
  "key23": "449sJDhiEoJbCPQuqnPCFr6iPm9rker1VMt3hBmiwkr7gg7xrszgBHe2DmbWCqYym8DC1jAuRh1LgYL4a4uE7ELG",
  "key24": "26kgmQVshvRoaVHUgGHTW5byypvaY2jX3TJgnyMCb6yruFiFNnEHpxvVnyW62cg9WjXG1C5isK3dcQyAXztMHfoK",
  "key25": "2D4UVzrwHBL1YDD24bhjbr2nUZ3yFei8SZwJ29c8a5vwKkaFTMY4YMKCeVXsi8Cp1atQ6UupHDUdrXCDdpUxQTSL",
  "key26": "5iRASCWfhuP6RYbt7fv5KaJp5oVU7MenhYrEWbyiqdET9DEH88mY61Htp9ajaQrHnVHinM2GNauPLRoF8ANccFLX",
  "key27": "NHrSkXtYK1NtncGo9sTYFh5WcmPtLg464vhaJ3FrSjGhDbmNvWE9fJPibU89PxNYmVahqnDJTeKEBCTqLSRFvU3",
  "key28": "bCP8DMgmeu9H8PABUoFcZWQFLo75tWkGDL43yDQqbGjzP5eM9pUdJo6N73zcWH6qaX2cW7kN7vEsXtZ3h4zaTk2"
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
