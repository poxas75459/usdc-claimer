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
    "3VCmgeJK9ArvAERZdqSg6bjiSRBH8Cnc6hhAvpLRbMDZT9CvZbGe3TPeKWcw7kLRr395EJ6d3uWmLxgbj2LPB49N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jog8vdFFh34SA551L7t549nhmrYR3L72R82Gktut2eft8dWVuQKKZ2YfxR4mWgadpzeycorKFQMbvRgAihN7YZ",
  "key1": "3PzJSpSBFwGKkTAFZHNFPUQgg9H5DM23rqHboiTc5vbKjtK2acgYqCfov9DoeBs9KPGsiN4aYXL2oRbp2EEmMqa9",
  "key2": "jXTVvGBeL5W6CczjGB8w2nvpJZ9QzeieqdfAWevbXkfemgExuAEeEcyKtWFcoGris3AeaSnxQvgFu2vJ1rMfswp",
  "key3": "5Ha2VZsKCQCPpF73RuB2bcoABCy1HATT1CyzqpWJ1Ht2dMmdpcmwKtkaFhfQ4A33f6hKNGifSGapF5DvgcBkBn5y",
  "key4": "axekFk49zcyRcmhTRbJ5LtQGZ762u5dufXRsbcYkC519VwVXG8GMH3PScmmCXVNXt3HbxbhRmprTb8eAdVaeic6",
  "key5": "JMFJ88s2mPnrGANBQiWsQdBaEv5wGdvBGmwQ7MGbgTQosxnpibpa9QBBFucUdjMnwT7RkxT6eKsRqPYQNW1uH9R",
  "key6": "4WcMt4TmejXuze3MUd7chQia7VqQs8Avy3DKY4pZah9kTt5EwS512ygSy8ya7pVBBP1hpc8ochu8cFGiSn3cBXHE",
  "key7": "31r2Cwj3AkLrYRUqPGW2LFFRzoKb7DiotbZgcoP8nRy26hg4VYmYWNWeW69vfeWk6CSBDK2MKFxxK66ENmHyMJ7c",
  "key8": "3h9Wo7AmTyeyrQaqVYs7EUStkWotEvADrvx3c8esAU9aqC4CJhnPhuBphVzFuq1Dtjhdfq7HWfB1EyiQKBh6Msxt",
  "key9": "3RHRzLLh2sE4MKZT2F8DqTUgbe6Wji9FfQ348daw3QMqF1siUFe1wGhP4A2ZAjdStiHAkLwEaRGpAMQ2kh26z8QP",
  "key10": "3AsfmgLiHG4PTohkYN47VJvd231iSWeUTp8x25KTEfVr6N8rg9G5Tcaer49kPqdG1S5rKcWTwBHgsmhV2yHjHAyq",
  "key11": "idLfWdyJCXbTLtyHMyPNJhruLQFzSyrX4PaRyVfGZhpcABBAAyXXXfComGCmqD1MHz9hsk4AiPbFb7DE5s2RGa3",
  "key12": "4MRwBda3s3jFuxbtSrXbCbcZyQvLGCP36jsL1rf86Y1wpppqpW3Vwm5G8AXYpsiszt4rftEhovZyvZCRaDJrgAVj",
  "key13": "S2gB7VNPfSPNgvGoXfanFFGyLh2p7s89RaggdiGekSeurUA2EoM3FmafQ6qGzcrd5drLskRnBDdZpYsQp4Sor4n",
  "key14": "nSV93MbSznL32v6gtVBagK876qvG4BfLzLK168hC6oZW6zR1Vbeq6Zpb52pSVm5WbippM7BUgGuymQBXW1kNSgW",
  "key15": "3eyREo3gZWC3YHUFuXZqkYw4MKjgyjEqLFQQV7h3g6Y3iBECBr4cZNwXZGnsW1GzEiLz63A9nfVJHxo5cPZmhobn",
  "key16": "4XBxUVW8aA2rcMbfqnfqjCqHrqJFMHofwoHzi6fRyUrTpAupB82ioMEyhmQFgmvALWHjT8LzVzx3K6pStcN5Dpga",
  "key17": "3cBH17iMBW1nGxmxCGGQWrDTVsxUDne4aogJ2dHTRMFq9EiLu91cwwsBVf1AhExV4QAnWc78PC76zqFuF96cjEtX",
  "key18": "4QnjPG94LauueDBPFzsKRvrYm8XJrrVdj2keAengh6Gyv4rBuX7FCd3edU2bArLuQbP95BnwS3YPgf96T7ZEQQVF",
  "key19": "2WBESU4P1PwB9K76SUB1shjTQwL95fhbVUdmRFV1TvLiL4gqmT92MtuLX8njysggwcCtjgmfdFrV1HBiszWGZ4Rj",
  "key20": "bVtteo3G2zT8wheiWgucsCM55d6gE9CJe4wyzmtAQfhtDCH81TDyveMZYsQ6kpqjAx1H2HBd2gxcz5LboNG7ePh",
  "key21": "4RVLb2X9j9bn5kQwwfQzG9gfLF7HKmb9AgNUNDqXU9oFfza5zLiDGBgHVxK65MszDV8KYV8prZYmBpUhEefsD3dZ",
  "key22": "5KZmGnz1sfDEsTbT1xMcMacAs4Y3Vip51ndf5UtwWXw5gdKdAhTfNNVg58xpqbkWMKjfnxkbDKekmu5cJeLYVnyV",
  "key23": "UKBn7LbpdyBiDbgeTsMXo5SnoLgS7H7bAXp83B3L8rsMuwSyY6TYStZNYGTkLTfLju73bZiiauksZKjKC9LvU2m",
  "key24": "5AFw7rTXJN8MR3n6fojGUd7jFNzhbDPgTt7dht2SCUYfWT5miFF8yQ84uf7pjUrQJZGGZygneBHX2bsmbLkLGVTT",
  "key25": "Fk2Ri6jec3gHXMPujXmwKEchbrAfimNJzEPk2GRK2482gB4H8whmbncoSbKZrm3jPqP5gqq8vksv7BnRfc2NAHN",
  "key26": "2FMz7v2VHGYUyj4RVtwc9wg1NkMZUpTy2hVhTpubKYa3adUwJpTLwfFvadxrRe1Sujw662NfriWC8g3HHHhdjzhp",
  "key27": "dkhYG5GBYvq7pZYkEqezoNuaeHiYGy5ZviC3mS3p1Br4dfSeaCytPa6VxMUtd97QRa7qtqCgY7dBK8WMki6QMzw",
  "key28": "KKojfQTkAtR3CjGinh9FzDHQwm5peTsm5w7uAhdtoNyHMQ2ycCgy2D3MtwhqfBYFVHKhFw3BNtDBn4i6xkQyJH4"
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
