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
    "Z8BEBfRG6iVH9mPNRBdSGcNe13y6cFY9dMvXrSKC8rYh33ksajmU3MLfNuNX77NCnro73UW1dGuAz46DJrvHvpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJkU7etCQ5agHF2ShfBpWsd8CJpp5fTsp8wdCbbRnVoFFVjiUg7fFDnwijXBtuLk5SnF5595yq1mPrRhgPTXpoB",
  "key1": "3cxatsesgHJpr9DuX4unAfGVBY4PhM7Xby3v9RWxvcZgym9SCdEG7yXQqkE1DGCRgwbgPgCApuMz12GVPudVVpKC",
  "key2": "3g2xSwEcYeVML4t2VJnD5XQz1WoU7DwT1iRACNAkKmGmnCmQHzo4w7mwQNuHqqGUNeBtJ6qmuVUD7xksrsY3CDC3",
  "key3": "3fWEypSPqvaaJC9r4g7WPaHsqSR9y8y92VtAyxnTww6pkE7iZMdvp3pC9nxV8p4tPdeaRS3mdy8NLNYacjAoHazp",
  "key4": "5ULRbE373vuo9U37Yy1RWJ5fXGVJPAdFjFPqqnKPMAJ5zAfzuL12Jj2Uw4X9wyao1brgCgo3UAkdYkmoFip8YGes",
  "key5": "2V4uFr1oMps6GcmifQ713cTuCqSkg21t3EaEf2kPMmzGkzRpv2ypEjsjb5Jm2wb32GXJyPvxS4DTFxxLxru6Ydau",
  "key6": "4iwJCCUCzRz85SSHNWp9vbbanwGRMVXQSnseKrFAUXC17xHGyPpQN9747sGrX8qXwTqDVH1cfogDJcZNXFq7GdTR",
  "key7": "5nyouds51LdQEMhDvrU8KdnN2E56nF3JSUSAZgGot5Qj4gEeK4TFbhDc8mLGL8BrGXi453v84aLnQTA9LW3ogpDr",
  "key8": "379bkC8Wj6Zgt57rrcdCMhDi5863cDM33wzsjsqaurWxCnYA6FLPpH1yqfcYQJZ6WpUdmo87KUbpi5QJBVLywkoA",
  "key9": "3rjXMynpkFBCmQP6GtJ6iixaWW1xK7h2SjxzNcCVjZokHNZs8uCVV3FkZ71TFnAnfM2S7VvUntT2dNktXbMmGy24",
  "key10": "29fUDb8BydL58PXuX4HR8HP6st6h9QsRu5biM1PqxaJgELnKWUzPzwsM8RgZy62W4rMLd2thAEePqJeELJfPcPCf",
  "key11": "56CYDzBb6ADjBwrKLhgvyXShrcLTxVNA11tbhjXQfk3BsNKpk1DtbtnvDFxBhjY67qRDJK7uf3Mbpa3q7TX8yAzq",
  "key12": "hZ2HQb4Y3sxpawsUiJ6HWSiXPGTkZ2aSpkySqLxAiQvUahXRyPHbnxxNikrEULXWjG75CPrisZ1GV4CB7u7KuPb",
  "key13": "33AgR9wtTu7VsPigYp7ZqLtJAfjYvuurdaZbTezztKqLcF5oUQXmSjYX52kQrE9Dq9J2qpdLBigMCGWZZFt3KLo1",
  "key14": "33d2xUCt9X2NUKYyQAehzBLCH7RVUHiyh13cLHZSFJ2GW9nBDpCGjvDC6fTeNUQEpSoTjzpMfiA591vzAVdgyD6r",
  "key15": "29xnRBDrgXZd8Jyu16PP3K3vBeJn4Jc2rZV3BuMFTJjdvs3vQ82tMUG9uLr8g4quk8QVLxxnRK5XHU4fBmJ2StAz",
  "key16": "5mLpju7y9Y7RnQ5rGwKYMYe71a5M2Nxn2cWR6KmqyhqpkfLodsB3nACAHfApmbqbEd9wA5v4TBWjS5C5xfzFXK68",
  "key17": "eC2mzGGxnSUVcZbSAdVNYmeqcX9P9r6nvxppDvYFqx8UJoCkyJC39fgyfBbJkb7ZYoTHJ19owvf3k3QnfJjrk9E",
  "key18": "3oS8iU1bbafD7a3pDDL43vGGjwhM3J3QvB2SYKJDPMYKkHqFu9V5AemwsPZSCqGbnwsbnXF2n23XkEgA5oLiitEb",
  "key19": "4dUbAEv4B1V44S19aik1LhEGPqe8CVBboP5QpwwP6pCRNYnveAtDbESEcz3QucVwwitJ7pFFa2DoSyQk9SWRUx22",
  "key20": "QqWiyhw2eoJ2KXPo2PVZnttQjV9FoKht5YLPUbenyX3pQxn9JLqNgh41Awy9UUuP3TcswtQpd68hSzh7xRx21c8",
  "key21": "5Baj66aL5qw6Vx29qbZoKT9vKDNewMLfda66eVrgEdAutdVC13eCPyTZ73ygtfqcDKwCWkZJ5WZiCcPikhxfqGbS",
  "key22": "5HbhADkLoAGtrk6AomuZj4Pzci8PAgidk3XpaFb15rGjgiTa4fYmXp9TPiamZ2LzbLoUCRz3hfUcWoBqWzpcsQH5",
  "key23": "4Bj8HNa2wN3gNQX4KhPkap586wH73Rk1djf8fjeRDcY4na5QgDvX9mJa1fmJjeBUxw6YwBJUZ5CCk53gJ8weThm8",
  "key24": "5Jk8Zez2aqXK6T4kMuQo9HFQChnctgzXWSNugYCfeEYzyeay3zw7YKftKwUPzPa5B74SekFYnhUXUuL1nVkVxZuJ",
  "key25": "2PaxfevS2jZwmznYDk8ipiVBJRG2cU1ozzLwtPWkhiTGPpZsFpEMr5VEMiNvrKn7ve1oU7YbPpmBwzwpAFZEbw84",
  "key26": "3FyQZXiFTkZF7CXDQXRrBBCEY3mr9ehqgiw26yUae1pcj6rqaSF8ePz5oPB6nR74KJNGFYrwW3fqrCxHkc8B1FfK",
  "key27": "5UzaHN4agtNc6twtCkgUbYkr9eYcS4ypmuAB61MD4M3C6Tc7hrFypQhmJq827bZS6BAGjkJQZKXmRGGvKMReBCux",
  "key28": "5NEbLXcdBZgzYWBgc44YnbCbh2TsNrA9r2bvsMYcSUK9sY1VZ2A49FwLHB8CLFXgkgyW4oMaV7n3Cuzb3XdDSmt9"
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
