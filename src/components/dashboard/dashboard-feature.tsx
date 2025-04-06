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
    "4grkKPZwcpJG7uMUgma9NdfpTwaHhiRyZXLN8tazgEP8MYrCE7GtQnfegetKwWAiSK7AoiHQNNtzbNkmxHntKgZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56putCPc9Dp3TNA8jA1bZFEUyuJ5vWWrpb3f6f5riSfTtBXzceoY9JKkYhxU5fhxeeRMTk1tiuUBjPCRYV9WtNHv",
  "key1": "4XDQxfRBGLxmSuhoajoZJSwWQt2imzcW5iHmr3cVjZh65s8bGpQWvLExFUhic9vFcRQ8bkS5x4he8aiUK1F5cCKK",
  "key2": "3WGsxUSkNYiS1tj58MiRTb1BxAiFrW6r5DeGiyQ6yk7mkcRBuc3w5S9bZCvYc6vFvDCfdcB3yC11LG6X4R6mjptx",
  "key3": "47Rb3KrPxrsUAnvxFhqBdPmK27x6mVX1i9yLUJdn3u5A6vJhDEBkRExtZaFZAnYhv1ip2oUPdJZjUz7n4drmohRB",
  "key4": "2RLDLNoACR4RxmKkYFjoiMULx5WJfwt4wEvkGQGPruWYPo1ddExGPsYbfy2BtNeYbjVEk7Hb8Fbhv6GP6Hspkf6q",
  "key5": "3M5bqTZSQ5St41jgNeyqDphfFo4z6QZ5Bw6HqrAYRL1HD4zt6KrDXJKQZL32c1MnsANm2MZpRJ69fV4Kve8TgLLu",
  "key6": "5TDoDiNdWMNpX3HijGMLyCamcibMyZynRGUeJHhMatNzdMTx3mh4Tab84p3pMWwZbigtoMEAg8jYaok7nc1qnthv",
  "key7": "3sVV5f1gEFxAmqEkVAgA9vVAz4UVFkzpYafYotG5qvghn5ggWYKTwvUeJ4YwLSbGr9RaoendzvfuGsr9EKCbU531",
  "key8": "3CSLsF1Td9Axc9P3f9uyGB9GW9dveg9uesusNsjXurmx8RCACyFQ8KZENz42FGisJc6xmuk1dkaVrQzwnBKxb6dJ",
  "key9": "3Da8EyMuvUSBkUCeyau7ZAxMyRMvKDrRqhdXA2UM2x3prQqDhXPX2pZqbgv3TFFHWj1vatbD8vgghgXfd3PxfNSL",
  "key10": "2NdDFF9FKXirVnPjiarDHppQxKi8rPXM5z7HgENyXB6PdPciT1yiPxC2LLFewnCBu1VzpjejtHKuPA3xjJbGfCW6",
  "key11": "3vRDtAytAUUv8jsGN5jKNoNtAGahgzkk2HFM7FgaAZkAhpdRXW65qTCvs5CGGVGFo2EriHHgqHX8YNYcfQaU4v34",
  "key12": "5EBJJtWsWeS5kzSt9s9nHZbs9JUm7Bs323z9bmdaUoEVx1pgup7Eyrv9Ycnu49h78Fs98X2cKDUMaizUDAM9NbPL",
  "key13": "3hTuj9cHat12VmJoxpQzeBAW7mpts5Lxvbnv5QS2HKKgQr5cZrBbsXf6gSYwc67s1DWgF2FYqvxD87KFnn2extVL",
  "key14": "64U57Eons2qohgSXt6PFjsHe9Pg1xPc6AaCcoEHbyRyfb72ekGJdgTrZ8Mke4u5nWriNXZ1LkjSSwXnehgwacAdU",
  "key15": "5FwzKdQgAMpY62Ur2N2wJJngdQjnKAKhghQBUSvTMdZqE4ANLtP4PwnMkxpEpzV9WaVZRDoMfJb8XpYbhdhVoEDd",
  "key16": "59MfsjULS5hatPJX5aFrsm1ZL8851QyXTqqL82xrKqcdMYBt3farWjVZg4qWQhJC9hY4PQQFMAd6x27vHU5dwtB5",
  "key17": "3YwKb77nvJ75ML4UaRBCQ3Javjpk888ZLDS6nXWrDfKbTzCbg2oUGkMmnxPbv6KNosT6UFcjovmF7cttuzrGZHCx",
  "key18": "62vWXUHbEeGvZsyLgJXFmM3jUCLDHF22xGqL66pyQiY6RHzYHhWcC1zYujzdwAnWm4KcGN2HoVAzajKZkjTymfdm",
  "key19": "327xUKQwCr3bmKBzzdVSreHmN2XxGThviGASd9bhvU2a417xVxRJRWrCDRX8P5tm5soYm63aYw5wRQPCKkZGnYzR",
  "key20": "3Qda9JoSsmbgtn6EWBezXKZ89oQztw2kg5EEFcky3HuzkXFGz2wZPFvBpzXfvdYGMVrdo4eWv1E5xVVzudRJjZx8",
  "key21": "4NtacRvG6qsF6SYWPxiMkmrh5tc9RC3wL1gpwTBryLPv5Jn7NSN9aCkMCReHJkbopjLmsp4NxzTGsu5ZKabvcutF",
  "key22": "4QkXLU3KCdy4pWy2N7ZW6bkUQMakKHsRDRpS8NYHz9HAW3DrviEQzSrCUQkATft15XRDh7e9rg3ZF6uhMNzUUXzk",
  "key23": "5QeAAdCrRuMTcMXG4gy2gtTV4P2JxcubUycMz47e5bqDrufYfrMhSMJSVQzVez6owxPut18E7mcUWjT4U13nSfdJ",
  "key24": "2X4NsW3sXcZpyCfJvjMgrRd4MhhYKVBcepkCYXoeouG1u1rm8Gsp12p68bhTvrfSzd7FmL9N8z7avsVHRtWj3r7A",
  "key25": "2XjLjnFWyHJ1TxAn33pLXYQ5TH5PKuoKPJoXdyF7iWAsn5FHNopqLruR6ippgwjJKMW9LoXQXKJ1qfxbip1zEvwV",
  "key26": "rSDJeboQuyTR7mBgqaAy4fGZUBYGf2h4yLUiq2cQXKrj6LFZeANi2yKyFfBQQkVmmrsDTB9SaBpUpBvMGb4r9ts",
  "key27": "2USX3kon3EJf6QbpVqpxvrVrMYhf7cUaxFkcGUNc8kPtsJwWERxYJRLhe38nRRcBiBtXHhjsEQ4hqR96tPwkprb",
  "key28": "5eWzwGhoGLMLyvRtUK7URVHq8eC7Py8mzCEm4zxwpmta86ttxWd4zmPqhfwH83DKkto4Zc4PdPiVqh6WFqzoL4Pd",
  "key29": "5spJsNrj1KJimLaTd6TcrxaacFhnmceGMWiG2BwBmz2kaM4mAUfYwESQZUb5g8pHFmaVyBUnQhP1RMZ88j9BRgYP",
  "key30": "6k4DuAeqRufwGpw74sMP8cUh94rm8o6sBax729zFbRmq4RKYZQpkxSFXABYgArraNgJyAm8bhbaiKafGCKXSBDT"
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
