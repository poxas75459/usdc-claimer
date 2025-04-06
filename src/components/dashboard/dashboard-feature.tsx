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
    "5jsHtfufcayHqHHT84aCxgmevtYPEcSEv77Rm7eEzUrgi64xExx1ekBaE9gCdVd4i7RRaSeNGuSufVNMkjwxvDiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z1W8tDpYQj4MZCVAKZbsqoTZ2Vw48Kdkwc29kuczNodxBwkW3Ct6xThbXjqtQovuC36LT9r5tZ9mgBNWMjJFt8S",
  "key1": "5vwMLT3HDTpZdretq3U4pvVsjtQWRn4qVtYS61cPMr9M11LAHYz4SJbAxQJE1NLQLvV24DTAMniZ9Uwf7MA1hU2t",
  "key2": "3c6j1cD37sL9CWWzahrYM78XaBKzC5eCpW3MmkMuzat4b56EjAEAMkFzRnxL6RdamHvnXMNevF5AaCmUdsjDiuTM",
  "key3": "2p7cLdwrRyE2a5e9bSA12pXpDHfqhf8t8uuUneHxbuAXrN6wZ736cY1Dw7KWH2dDYDMxZnycAmegn6p82rEaJUgb",
  "key4": "3YPVRHbztuDVscr4c65ZjKwPCcGDC4NXbHzA47sppqSr5oiZnwBbHgguAV1wNEPtFKTRqjYfS3cvPy8YnecnMywa",
  "key5": "2QvsQEvQQEtGQ41r9HAKfLHAkmG25STtSrVgSwq1emrPi8BqBy4TC2dWAasZpBLXnkoUMeDhEwzLKmtaCmSy5iqY",
  "key6": "2TsfEEoafxMEfzpNgujEqbBMNHbtVV2J2gCfbH2xsWLoKE9ZF5vc3uuPmyMgxRbkb8uaeaF6epnRKeyh9tEHY8Vq",
  "key7": "2ssTtm4HU2BQqpE6RBkyTLR5DPkbRYCC1suZWtqUsH69jKkqab4ChogQnukoHwcg59YkGzHDYCeu8Gwc2GJGQm8h",
  "key8": "26vpq9Mnmf4VPGQyAVSgH8ADeY98aTuQsg9ahXabmnRStLYinnTk7iKRyhbiiiuq5ywGFccDZMG6gmHgKtcN8FVS",
  "key9": "7KoWGcjJJpkis6Z5Tmhqwy8BgnX2tsFfN5QJgd9JmD7T11iZt4Cq4LYrpsrz99JRvR7RGVTG4eKqkEMzekQGZvN",
  "key10": "2SGsR4kfbqaBTycGCtjzLW5DAHD4TNSp17odhiktj9HLpzGN3XBDdXJJTSJh7jPv8AgvhVR3r6QZ7fBLjSVUsY2A",
  "key11": "chSiFza9pG5cczv9NVJE4YkxZYwLib8Fg36TMMgsFB5in3xxkqz3AHHtGQyrYpVkco5oRj9Zrenf6G6ant4s44G",
  "key12": "3M3VW241UUEEyRxi8WEFQtwh6onCfHGUa3gJrHfc1HwzBwofESS9SzMVBwnZgzMJmFUL9ytonKUdtkzVjAyQwrz4",
  "key13": "26E3o1i3AdgLFYWC6DWTxdCkT1R49xv9wcQ3jVpU9TAyfJLkTKiAHYpdS2Hhs5orori7Cbd8YjZTRy2QjcTv7Dsv",
  "key14": "2t35E14YtT9vzWVyh2sZbfJfe1YK9dTewcsSZT3bX4ABY1SwYwgry9VkXuiruYjxpcLbwD9j3CA7zihLonSe4YZM",
  "key15": "5GdygharTJGhncpAFtiycCY6VDkRzRDMSWywsCkYtosMaSANAG8NFxrcLF4EhqTJfvoXujZk6VtcBkaDM2GhrXSi",
  "key16": "EzFvLgs7sE18YP5C5mGh46RddYNzxUPwUn9dtWaThdHKe3X4xvxq79F6aaZKxvCxc58kz9AYVmrpuvkwMDcFJS3",
  "key17": "5EJn63nk96ufyZKxLG16682wuP93uN6C8qRnYm6dteSGwmDEPfz3WKc1ZmGWaUDgPp3jarnzhamP8NV1gvZQVvJH",
  "key18": "4kUDemz4YtPWkXSbovuEFXidcoCGa2nUBL6c9xYbN4PayCWSmMZUnr68HgunYNsNF9HiaYbR7hx159gJmbazcvUR",
  "key19": "4yocBZZTe6Li2rKNKWHgwDngMFxNZDZXfoUi25ZKywT1e86TGj1yTuU5k2HZAhQMExcPfYsWKp4MZDuPgAnSRm6E",
  "key20": "fzbyghruNe8z6qQgL8rQimYmCqWiK1cQmzUCqshdBZNJAkaZjdPCx4rQFpEJxmvZ1mvG2JxdqsJLGHevDvfn7yh",
  "key21": "2e9SUjqxrUzpm9aPfZn8SQ6b69JYuuGY3Sou2PcNda8fwRHsEaL8LFw13sMMGWhFNhVYjCMi2UZg1iY3DSByvszr",
  "key22": "3biLXTNGQgLLno4h5uBypnjgqdsHxjHPnKPmYRdm1q87ViBFRdFQ1DhJZiDRKv9MZbFMpQBDKqLVXAbUvEXkGm9r",
  "key23": "gKNkeDDW73UVhZH6fcoW7sEE8roX5HapJFin5mfNE1NVhY8YCUJJn5xpRSae68G9ui2rYBKV3G1G6mpcDET5APZ",
  "key24": "Z2q9uhcyJKaT1KcXqYVcDPfMDmZjui1MJNrqdLCLjZpjQFe43EHz8Q8dn9yLb6TVUqeWLVSPime1kUrTskbtTBx",
  "key25": "626wtAiWHSAAAmUbcGqWyMfeSt37yLp6NtHeEqfNNLyHRDNgv82dSioiDtcHiAj4NU1DXs3PUGmXZXp7sdr9E9qj",
  "key26": "3R9XGzwBhuBX6SJQgar85WLubu5iY7YfauYFEiL3ZcwXQyTydXPtSWtBVYn4R51wJ9QPQkS4YcDHCPBhpBwGxZAS",
  "key27": "4eYtixdB39c1sRtYjzdYV8hib7Jps1V64qdnHgmbbg33TtxrLB3S2FXybBy5s5jFD23z2zkrZb65DWhjHcWwRd5c",
  "key28": "4nPmYUboscMwfwrSoz1Qr9Eg6Tb3y8283qkRonFJz4FtbjUPy6YfkTyp9rdg7LbGWTQBWQV1WzxJ7CVaxNmtc35B",
  "key29": "5sYo5QDrcAe5bh6JF9hbwUFcpLa55hLMyKyav1dZtAasiN48DYUqp1imxdbNYQ8ezBJt4xcfqDnno88s9kTrgXDy",
  "key30": "5Qj1x5AYmis8H4qv9WtvSVVMqiq96T97G4b3o3y2JP8Cg8ZdRGVZu63T9X7AqM9GgRGJepKysjLyB1f4WSfrjHaW",
  "key31": "2aHdTAfRJWLbRfgJA2iVqcRMfTowxEqL39qJuyYYPiVXskYLJU7oXRUnjLfTQ45MTyGxZzPJdU6LsxTQgQTxCMMi",
  "key32": "3pxw5EdsLVeBcnbfchDtdjSXLWXovRGecEHX3UevV46muKtAgWY4BSG3PEgBY375DUTU9vQQMyhEMs54NZ8pQiew",
  "key33": "QTGQbaxC5HPnaQ6e7Yr2A9dhLVvM6KzKJxj9ZrwCLkZpRVEXBTqmQqQnaC937XvZmetS7qReLjeUsAZ8o34eoxV"
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
