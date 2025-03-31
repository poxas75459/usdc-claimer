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
    "4jyLdF6sqWsrPf8YbSC8ob5iHzPG6zMnaoZK1VfeX3eJbW4Cz7zuDdZM7wEuxHUzqNPy6U9eSKeJHxCeaW1P9WLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H4TcvUoULDmEA8bBAsqbKqbY4CNACRcySxjCgEzAU6MYaLcQmhFEPertDKAinh23utPnmovkXkZdvGZQTHf5qyK",
  "key1": "2DdcTqJ8mBn29ZsKH7mmNzaJw36b9yFSVUhyK8bzysyEWcNvGcXGPCSEA4wfEhD7HM3FDDYUvmRWyEnjgUSrRiGk",
  "key2": "22nJbTtgHxtamJUUYn6YCkFKM8Q5V9SveMkuDTHmjuCQv6ySnnwgdA9cRyrdtWeqkXJtaZPxKs1dbCtMTRE9Zhs9",
  "key3": "5xpcrQXw6oZ8e7chiZgdhLUgPUZCii2TuaqeF6nwGa3QW55d4Xv511KP2ofDpVufdWGexFpjmfLqUxNJ8CQv4pv8",
  "key4": "3n7FLF4RzBgdi8TufAe73yZvua1GdvZ5t1AvSG7cHAmcsF4sTzzMwmHFKeVfTSSzAFcL1WZs9XpMX2y5HAeY3JiC",
  "key5": "2nPK8gUrgd9vPqEiz2zBPPkxCRSiP5Fx7ue3gvVEcoap9eTvRX9M1P4ogByWVcimw28WtfYvpnCYaoS4NCMW173y",
  "key6": "3CzTXBV4DqpcbsdCS4R7sfa6ZTp3Y5L6dyBrMxWmS1Y8nN5Mm515GbZCnqMysKpEG2ypHpoiCQaBWnEVaN5BzHxM",
  "key7": "Rq8c555idnNz9KBJyqGE2BngUmSu2Z4Rhuf3aJcCc8X4MVVicN2ghgui4pCTTnkv3b2BQcJLCMWGwUZzpEbE1Ui",
  "key8": "2HGJNAg6ztEfboM9XtfvFYWwJp187SsEd9cw3imL6CfEg6nC2MYaaSooiEkYSa9UYjAs3qBdeMYBraovArEX9yyM",
  "key9": "4pFsdh5AeEw2bBqVjrKEpcHFKhFHdh9XV7FUU8TsarpiKoMQCWevC32QTNxZWqs5xkGWDvuoF1QxgdSKb7NAZLdu",
  "key10": "2RWAA6TxFYwMkzBSL47A27wnyCLxBQEVauhfSaZgrZSjZJ8zRGrj52CzrojJVyFTvwvKm4t31JnSk31MCTveqyM8",
  "key11": "4CEaS8pUfKHpkfP6mrWjbXsg1NS6V9x5ii3uTJ2t2S8jxaG9eMJ2hj512bnkabCAmvFKEVxz25xeg3T2SN2NUHhy",
  "key12": "2zp8pbVE6wb1yXNH75rEYh1xYbPAccph5WxQnLAikyBBoWfc1i2NRJrGaWc1oZ5vCiWHPUDV8TeFbq33y9MSMUyC",
  "key13": "3DwQxyoLvC61mZ5uZAoGpbZ2jQPRQVgfq19WR9b46h2YpVerdXfPisNB64QuYgBL7K58jcTY6pCrjCGKnr39uByK",
  "key14": "4WmY6W9PzeveW3fkoXZeVm8x12QdeZkmZnZXhDEzhJCTC5iV8rCE4Awg9UHhVg6fFkVWqDnuJ41L3TkXUHvMGca1",
  "key15": "5dA5wJYi4UQaC1nG51zuVWYk5sxWWgyN6bL3uASYmHBbehwuexfAGnJ4SRjZf5NkvCGAEMUs4GjUxJ9KLsRdEurw",
  "key16": "3Yavh4Bze8m4fndp64f8BhM5WpqNjieS5BPuQM1WriNbJ9j16TpVZHYuBY5G4mViQjfJxZMQzxVyvtgKgFp8wgdP",
  "key17": "4LGaCBz8F28t9UgxHi1vF3CwwDxL82wASMSLkPsSfrSrJAvQfH3GosAqbJ3jkTBGTLDp8xKXHESiLLdcSbYroqwV",
  "key18": "TeWBDJmUwHv6GFBi1sKxKNaBFsVras2G1yAFe7SB6XaFZuwvjLEZCAgpDkoi4xfv2YZNybm8n9UjPyQdDudThk1",
  "key19": "5PDFVuty8GS7gkAdnL7q8LGEAmtFg9CQVsDC29hsJPYEAf73i5KomNsRaWFrKmMuRqoRokUAntCJ4a9nJSby7mbQ",
  "key20": "4F5YpshKpqrcY9VpTE6U44dsRZGcLLwg2tH8VFQNh8gpsY9mukCV2Qebcmp4yGvDxEg5iwAPbyn1M4LW5SUTvkk4",
  "key21": "5FUPDji273HQ4TSDnQPhSSPJXdkncSbvS5JD6Uuz3ZqNNXG6hQJGzKu1wsZUgp1oa9nyxCkeEVmC8B9zNzEVCgFm",
  "key22": "4u8EsYo17CarbTCdfpPEeBNpTC9oGHgRgoUccXcuAhmwp9Q9P5mh23PWcukZfHobd36VNjebqBnjs1MMD9TGN5wT",
  "key23": "5i3yLTSf7qFaA62e4JNL5pqi1Uq2T1UbSAM19ws4JpyzuHrVU9no9SNC3g4sQj9R46DFGaqjSGQYDxZj42FmMFgJ",
  "key24": "3Avx6Viq6GVd8pCHQMpFhuAV5vfPjQMg5gGNxVDFdP34giuYKqbL5z9oMrkwtXiavq8J4wJorLv17hxcC7R8TsyF",
  "key25": "3146fUoKXYgtNtkws8DLv3SgWqGSnjxYRRaJ92uqH9cqvpSNRAjyXVjn8bpxQ9Tdjeg7Umj1yMT7gLA5Ykds1xKp"
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
