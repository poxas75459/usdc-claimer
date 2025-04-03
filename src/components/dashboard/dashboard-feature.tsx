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
    "3EUAS5Sj7aCMVacp9MjiLH5BBEtwgTg6MmYW9qVeLRqJKXQ6ZJyiQPsRRGAegBsfnLh2YSQon4FoY9iazMJ1aUXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HwZq2RdWviPv1E68Fi1p6bvRs3FoJJGkjfPphJSkFVzFdZ8XajTxXsjuCERTrJWBpEtZxmgCMeTqi7n2CPbA9J6",
  "key1": "AGodr59rwbNeDFEdDbFRb7db9e5JKm2eu7nMsnTtqRRyPBwGFq7ZTeh9tEkAGpdphgT65arwng5i1kr4x1et6yE",
  "key2": "2QFRsMgpRE6peuAFS4FywkRb7DqYH3eg5NVtp5ESC9SxpoWiFSewMtAqDe3aFiroHzLcVHQEBsB8CvZvXLit9c62",
  "key3": "4hNtDstrVuL7ab7p4MByu8Z7RYLpqpbp6qDpohnKBFvWEnoMMKgZVCYkFTZR2BenD9c83aeczUZBjphaibfE4rBP",
  "key4": "4NadC4B92UVGKuvcjLz7bU1aoVawWxVP5MNL5Jh3kauXxcdq6ZsPqnG9s2H5RgLU9yyTV83BcPELziWrnHdvow9i",
  "key5": "HD7vVjgvbP1tpkF81ptGGh4H4LH8exHVex43T3C3wwpcXDnGUTmLWiSeKqosXctYhDkkD8twkcqWpZDC4FMdT9Y",
  "key6": "2DqC94Vqm9qBzxats8AJccmBWfb3v2mrjniHjNuh6ovStSRaRAupiZA5GUEjdMtuAwMMMkrhwA74XZysw2KwZNnL",
  "key7": "5KratksQPM5szLcWZuSHf7amwyD8dm5RgcLMi5KMm3jYqtmcVw4QxxzcfWpJ9511MK6FN9adxfK2W5BpdEqdbY4k",
  "key8": "5e3XLGhtu9RXETJkRBr63Pk6on1t2nRGokB9XLJtihhkwhkKyZbzam8T3Au1Dzhd378m94KeUB6xtmiHMCV8SMN4",
  "key9": "4hhkbYSPGRmZWqo2o38xCVuSgXdz1gc5XiB7GXw6yLt1f6U6CdJYk2nUnUWU5sBWDPkW3Ah4heT3T2ogZ58xSZGM",
  "key10": "2f6utLVz33pg5mpACprXC5nWBD4tHnDu4xy9E4jRyh71QaMwdFgsrquzesUw8SzDn5utvyZNhyWZryJLWQjEMsq7",
  "key11": "2jQCXWAif9whTKPmfrHeuXQguFAmwFGfNwPzBCjvc2aBM2bW6rPifvJmUCUZSGQbXcr2nnRtBdJq2YGdyG4Xf9yz",
  "key12": "B8ty64yPEsCFtbdqZnRgkTzUYm7ATkjvCoPQpwe64pk7xGhsWwDBuG71BYb1jCSEV6nRMXWjeoVfn2yUbpbEK8y",
  "key13": "46PL8EMCDUtGqJs8c5ooUyHAmg5siMDdeXsHzQ5nK1ZS78Mhvwj83Jx7LU3ZqJ7absmspSXnhSdgveTNrhJNgbHB",
  "key14": "5kz1UMxRjGR637z4x3cQ6ssCSwnjXirKarV7XzZhchJ7tksYXvgGCxbj7zBtFwHFbGTWK3ncCJoaSXCc5VEPHqhy",
  "key15": "S9pWwLzSS7uU1FwRnFpWMYmjTDy4qbu9zfw3o2iggzF4NmwuM47Y2bphmyxeh4cLHoXgDET5EjPZdm7EDXYBULV",
  "key16": "4k5WEtwkA33zDbKzKLDJcr7aVzyhEEuCuxWjQRRpcXBRKc92zNYeAkz3juV37hicxQNjKYNz4ratemTxRwmLcF8s",
  "key17": "2F1hhWNEBBkUd22qubR1FJ36W1VxmZYQd9ramF2TZseb4kginmsf5p6XZnKineVi3a4bCTHt34A4TNymNEkJQb4n",
  "key18": "4yGfnrMb1Xixjw94CNeMrMxZMY3bspGT9AVQWsEe4fdK27Y1afKe2VpxJL1WsFHTEcwvUKumEJwVW7L92NLruqyU",
  "key19": "2bnxW1DEMxP6RUgTW4iwpHWDyCvKq9kRq3weUKQaSGf1qnd1RcrYaPGKxg9gEVmnPKKXp9uuPHrVHdNNUQCXwh2B",
  "key20": "3qQ1pGNAUgwG3gfgtqxZY6Ze8ptgXcVAuobKKte5n3tVpmosAYYqstWL48vP7JDQC2mjVt5L1dBCW644qZ7c1WgZ",
  "key21": "41kVAD9Zen7UyGRN4pkdJ6LnbiuxA4Cjo8XJN5eL77y7KBrGJ93VNM54KqZw3pJCYZdW6sARjdePSgPFwpav3m1J",
  "key22": "5W8L8TyKTQZs6n3K9N5jJZsqR4eQbCTz4Cr8Et2PS8QYDWe5zvAZtCJfpgUiq5DTHBXZumNNLsBnaw11oz934G5K",
  "key23": "5VUERDnfsq8pEfD96EChLg44sZkrBywYupN3SkrGyr9SPdrLXqGoeSuwe6HACQ3kwCn2ctCJi1LRu41BH5QRawJX",
  "key24": "4A18kabvHokv75CUQV5drFDYKS4NeKfcLm5XxWWttrSmyFsgiQC6EWP3Fb9KGyT8M1z2HnXcct4bVX2iVR3piBTe",
  "key25": "4QWDHeBGPbw6xegYhwwVqFr5aRb2DebxSxUk4sAieHQk4HMhRGcMKTnEptnRmWXApvu8FyUCbWUb5KsgzTZkpL9z",
  "key26": "46y4yKtH48qWKwoYQdfXSnvgzXxbfcoXsoksuRwJuEGFNa75ubd2PVCGmM3v5G8X4MTUCVRsE2TV7PWmGkUAXNxK",
  "key27": "5Year4sNCaia7nMh7oSG6pse5488HiFoRdJDG79edD6zbGNwCJsmUuRCe9wKYy2BJnWPXhYNU4Rcmv2TZQykYws5",
  "key28": "31sVPy6VezLEmM1W7xGRzjsv6YuVhjSg1BYMCQiCJ1GpPJ9DicCRcDotC28r3pVLgH2hoPAbxmH5nhttVhgXkDmL",
  "key29": "5j5gbM4PiLjne9geSoyRncWG8Uoj7kQoGxZponi4WcbMekvMd2y5S7kW9Ju9C5it7R3dm7gHQBS7DPceb37c9Lng",
  "key30": "4n1eGJ8wsRE8yCxwsp73LLdVWDGxrJvaaxxB2omCxXxgSzNQdqDDDkhbAPwqNvuCAtJoeQkM2o8gRgsECvYxawSY",
  "key31": "3ci9SQdASzkB6rM9Xj3DhEmQ1b3EJKMRjWVzWaSDfEjQYrFnp6332ZQjD5ct7TjNegMBiyS6DGGx5VQyNqmiLG7d",
  "key32": "2Hr2yc59DZVJUPz5PRnGEaQM9sSE2xjRGQ5Ei98EamZchwCK6FFQvLPRaooEAHutU7HUzyzyPJZSoRxinYMTWCVj",
  "key33": "PTwcpoK6PC3VBr6v8EEb4PgAPLbFKKy9qRfBQRDc7z6KeUWUnuU6EGcexEGmJ3MCXBMPpPzrfEPkyhT6fcfFoMn",
  "key34": "JadwV68beTmGtMT5WTApWXJ5Yu2sAESvoHbdTRaECgyNpFivgHEBUMbEAzQcUpfM627SbS1m9iCjmxW34jNRwST",
  "key35": "3mLHpFaMteotVUqjuS3ZcGtd27DPtuwZtfWuMrB661XdwaummLrYoeV2AFmkQoLcarSrxp9VqbuUN5rgBzy31c2F",
  "key36": "2iAd3nTLZABzvSYvs2xNuWpv7CipYqPT2w8pXaKhNWLwNnKMLLrdWPiruWgw6cCykL66xXkan4QQxU3BySbMd73i",
  "key37": "2MCCWDZyWtaMYTwi1DP1985Y4MZ6PgQh87ZtgAnqWns6KR6zTCN3D1quYY44uQf2sTmQbhfVZMwjpvt8r3Abu77Q",
  "key38": "3p447m2z2f4UMxyRTw1PRJQTRDmMRcmtqCA9pUnfzYRLET5qi8GYY9Lk4Ag3shFbUaFZYmkHS2Kt7k711aMM6nYC",
  "key39": "4BjZ7PxifXqKUyJHTJxia4Ur7wCVGRQQx9s7qW7SSfTVdEqfFUnRPT4wwWr8M6FuaRdkkGu8sHtWohr38AmroYQ3",
  "key40": "C5dYp9tsmuKmb5rCQZvEMEY5fbSJ5FcE8u6G7BAqiJ4r4XFQLkS56BFMoegnSWqQGnh1CUBDN294KoE9jTZG3Qv"
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
