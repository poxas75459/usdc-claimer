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
    "2qPGnxFujrfvZk3P4M49tbqhgrKUN9UQ1QzX3vTjkAPpNag5z3a644rTBUcXuVFrueFadnawyxynYV7GGS24gx8L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27eWHmZK37JzmLnEYFwuEie8E2nxQgbpNJ7xS4hJcZpd4YyWg5xHCzo3CT7bjWiKb3T1iQXhffZmbKBCW9H4Xfe5",
  "key1": "5s66Gpz29NGAKTYTxn9eLvv3FuzB1fz4RacHRNHetqnqiJzPffEirhWvFnuYed3ZV6mf7nxNnr425J4QBtwtJ1of",
  "key2": "v4eKhZMk5F8prn9ecdPT3xBYsAGBQos6JBwKGQNVyy5AWLQeaexfAPZUSJ8pQNTEzGaY4UWU5mVxpuK4HGwiekt",
  "key3": "j5yFk8kKwcapn1257MWth2uqfL7FRv1cq7KkgB6K6mqXJAF417uLkuLRHM7E737tysdr5tWKmDQxBhdFnVYofoG",
  "key4": "q2eZhBXzeKck7zirYsrLXRB36Y1z56TcvnAHBfG4gS4AJygwg32Hb1Zxz9YttemQFujmxvymhT5YHsvQLzABR8C",
  "key5": "3zHkJ8Wcw9tFguwtTgfPHFbhDdKb64BfYYo7g4vjwUggq5BuCTXvAMxxLSY8FX4MXqPiE1R5a4RC4yMdDugenfPJ",
  "key6": "4CPc1nRwa35K723bPTLP3YbV866kcBGmv74BABi8zFoRqdGxyA4uJQwT8pGEEGr37VHj1hffuo4riFufRq1cnno",
  "key7": "5feUQx3MPeQB6paiFozHV2wcquWBF5haZtnpCy9pxZ22EXfd2j6MK9XkFXAwT3PnjC46DJnGBbPM4JaFtiyiiwLP",
  "key8": "3kofYrPh5zunE7YMDm53r5hpTT6KZXYGdX6JvbQpXToh5o1cG2XL6dJeS2zEimK23DBBbLrKxwsxufBES2wZPrRd",
  "key9": "3Y4L6aXNPP8paqudBPdiUAXVBqYWgn1huEHRT8XNgpp3YSEqV77eJoPH3Q5GEPLFjpQUiUBfbKB3Bjt8trnGqnyz",
  "key10": "3ijN23e8HXvKG9Nq1MWzABDTa36vmb31zQUej13fQhbhb5QqHTeMD99r9RmSrSiiPGyesjfJ9VokacqZm1DiNAtE",
  "key11": "3EN7N9239BBrkcCRTtxXst515ovhKEZrXSXm8msmhLjajErc6iUeRWnngJq9K1qK4PtDPnnh4wJV1tzE7Nr6M3YJ",
  "key12": "4fsFYLeXaWyQWRFvXF75P4S7xCAYTSjLcRFqgPZRNMmqUVSbEhKnZqoMBg7w5mbjnJ6PExNbGW25UuGRyrknCnbQ",
  "key13": "P1FBNkEwxpds8iEHLyAcuPmcyiQ4AuacoJ6SDspwDvAH886iDRNEHcpPuGHfsNsuMzityTi6fFR9jC5Uufd8BC9",
  "key14": "3ZJDNDv3wf6Ugj913N6cRBdDfZ7Ekok7wBu4tdi6Jjt9kssbtZvGZiWKm73veSMKF3qxjwZY8L1sAL8rEt1QYsbp",
  "key15": "2hhjwSax1GonaeooSWPiUTjz7uhCy3WD3PddZqzK4YvZeHtGK9tMQn6LzkzuRJjAmbYrk32RtvdGsUbemVEYEmJU",
  "key16": "cw2twG4hmP4wCcndBBT4Qo181uprjmZyCapcgarQuybVBEHejwhuFAE3udkYeF8UZVZdbn5cDRiiaLjYMDpB1cm",
  "key17": "vv4LzuuPuMBtwB4J4ZWCUdLp69dEtjwkHbENrGA8Zc4eesRtmeiipitnR3HFQvsrnDAdJCs7z4zFUYgPvSAK6j6",
  "key18": "5axubcpTbDhG31G9aVxGyVTfVEVrhDDpKNMqhAYzzUm9tksREHEBFfXsn2Paaf1cExwaPAdiqRdNTaPvKB4tQE7J",
  "key19": "5HdXbzsbc6A4p8wL5rgZrpTCtdVEaRUxfStsX2qZEbvP7xQdgDN2Mv1Mz5b5vwJTHhuuanSMdhuobVTrfqX3cnXe",
  "key20": "2yRGnqpowcDkCcvoEQh5JcohdbHthbR6giWNY1k35Vp5ko8ZvhqBym9AqmjHjCzvquaRhnEpnxLdfsQ2aLv8t2Qr",
  "key21": "5ZuDLUvmUxKNuJDELsXJihAEZccsScXB4hW6nFTTcLcwQbBARbTxGJ37V56iTzp8LbT24QwY8DAuve5HKJ3rrDVm",
  "key22": "31TkvgEKqHzbQa4JyTz2mitT3x6Npcu13PQMqrdDGArKz5MT1JnXz5r3CW7QGhkQi68UHtS6cWAHMNZbwpiBtwhu",
  "key23": "45Wvb5kuodr135zS8u9xLR91b7zP5D4KEkCMihoPYpaX6yNuNiP7wkU6kRbBwyF5QCyGzoEhdrTHxFo2f1zvtsof",
  "key24": "4cz3oMtBDCuc8etSkTvMDseUsqVE7LpP1Um8XohEtprUUPWGdobWp9Boq2VvQS3kto9bQu6UZjbdHro65gwsNAGa",
  "key25": "3x1N1vgfFBxVSTBAmwj94ejnQX1wd38FPQqWZpC45eFxj1j7PFP9v9UtJKkQMpWsY6w6tWboRoJX7fRmBFnYzUb8",
  "key26": "42w4NmCYSVaLMqwdKHbaWejqiF5bBryLQNs7jyHzKsEXjiXM88XUH4aaeTXAM5G8aCEtkgyPgqLFzkBc6PgRbQp3",
  "key27": "4VVNnBpWcv4mrp6QHEMc4adN1hoSPAyyMYJBGKMECL8upqsCuVP2SSWEuLTNvbgPoJkCkuNYzLb87wcRA9H96BDd",
  "key28": "39wREKYk5bKHMSQk9mgsmshg3HDzv5sXewFvhgugpzo8YTP3jdy7Tse761nAKznY4P2EcdQtkokkcLn3Xysz62bG",
  "key29": "3oACULXZdfDHAxgM8i3aCHRmqXSRSLvoMzUz7Z8d6Lx7XTkmnjBjheAEAFHn84xS9oArkSbGS6S43LQXavoNiw4a",
  "key30": "26Ehnq5RJvikk3NXELvudvRrs5iPKKLNxUL3LKZZ91NziiE8GReYr368ebD9pNAuJD7C18Np8NejySmdeW2P8joG",
  "key31": "2bKMtReTP9ZdWmts5LaJbKN5BckRgwtqkNc1nCQ3C87vMZVTftcEpe1Usa1R7tfqceXHSTV1UBkJcndkG2rcCbdE",
  "key32": "2auH2cR6dZK1g4LqmQzP7Cwrs9ZdHEv9ZKp5JUrP4t93Vgs6ha4NunK4M1txDrRi2481Yntd3CgDKuMMMZVu5XxH",
  "key33": "5aDUXSfEUJAg4eLBJtSFrH6BkwgTUDWcnivwCcgFsyDhHDi3dFdqJo8wtjKoaZFYHEv5fa7gBZA8dF4onTrYejHQ",
  "key34": "5qTskM3LBDZiW3bXzBWtYj8hBjcFoZUjfhB3AkenD6LcZab626euSyjwefZFsNMJ826d2kFgRA72bhM4MHmRLxLb",
  "key35": "4Bg3tve4qdtw5XbY5hdhed6bFbaTfFoaVDXB8jF2qGb75rhNVyveEmQxSi98Uv8G6SByMX4GSFEP77x4Qpug6uEi",
  "key36": "4pkiBVFZhrpVGif6sssbxSHEQ1DssayNM7SXD1nf4BugBpzuxWcK8ipNutURHBUfVRCGKjhovaMTHH8XxyCEMvrL",
  "key37": "5QzYDZi9kDNeLoUQ7b9DGG2FRe863H4k7ff3r4uJxsnmSygJqxeGG8rjKnpZ6qgYQC2C1rrHofJghfXnPRAi73No",
  "key38": "2uNhK1sbGArTBP78tfZ4AotkHXvWvfbkwKv1x17vHGKVpW8vt8HYSqpXd8rPMv2mib497ptYwSKxmjzQJYcX9Vke"
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
