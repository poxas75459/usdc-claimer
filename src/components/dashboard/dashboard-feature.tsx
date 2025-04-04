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
    "2CGhFHu2Ak9ypJTr8murTQb7CtKigxXPNuqRj66To1MUgi8peKY5K3bKmS7aLGrRXDnWJjXqXvMfiLU3g8SXee7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQDv4U7bgCYuJxzEwDTvVzYDtdqSSZAxMHLMkyVhfBC3g81WKksg1JUceQr4f9Tqcs2Fvq6P4Kab6tMF1ApzXb",
  "key1": "36ouUtpfLvCthbgwC4kNX8jmCgTyjr2TaV6DwA4QoLZDfRFnWYG9nxWczFuAemHnbijBXJ3oXQoUENpgvjcAfuJH",
  "key2": "96CjPnHE6n3pZGT4P668ZHpJsqWKPRE4RgVbSUpGRSN94gNQpmJhWcLaW4WPTEgURc2hF68pQnNZ2qpeKcr5LM4",
  "key3": "XbbDcTdhVHvSk8EeJigaV8uRFZm8PMVTwfsxZhsXb6dB2ShPGucCgtsw3ogqi1dcySMxspqFeN5Boh1XchsStTH",
  "key4": "46eSLRXvB8ft3tABKq2W5MaYWC1u2UsJao5vZJN3WaksgiD8qUMV2UrgKrb2qWRTKbHWYpHDHYcA3zvnsV2yC2w8",
  "key5": "2zYBASsgTKwUgwTBmzBo9G19Pat9dwQZqe1quENCo85V6ZgFAbDTQHetPMsDvixNMNyrc6b4aGjWfe5DoMgcWUhD",
  "key6": "4Hfh8erCadxMENsBBHA62SZxmG3TiKX6FaKM5E29n9iVUEFYyF77LgAzVzYMMeo2tsy9RCNhzkhwDLC8yr1FthHP",
  "key7": "5X2bmShG6yguovoLxnaPWBRvuPQQigR5zSBxwMVRbaneGjpUcvfkP9CXWY26cQcMAFuYRGpNrz8DF3PZDPkwiRzh",
  "key8": "41ahQwLqtfZQ7PZQkM2JgyzhkRtv5kjx8wZaRMkmqsyT5KtThVRyVSHSqUWokfASZCaZUH3RgMRKkv9tdWo5NhEJ",
  "key9": "5wJ8XyHUr3JkwfWw2cx4hdZCtiLgCunk2jkDPJvrHmxVb6Ze6M5osLm78TS6PMCHiuLeESgFqnmzfxS1hdrPC3dN",
  "key10": "4H5wGS9XVmBjXJErc5AZNkB7cdWWiZavRHCKdDvGAfLFfc96i7BiFttwJfnheVREt74grELC1R47Xj41CRdrhb5E",
  "key11": "3SPdMxaGgMzmeFriBZjs7zWUoJMPiLmcb4PFKvSjfEqbAQ5gteCuomsfaHbS1cy8nLhafzgy2dytgBFmngy2Dhsw",
  "key12": "5Hv7gAhdc95GX5n4dAqRcCGfcnJFomjF59Pca6U8xWsmkFrUuKocxcsJMkMQg8JARhbksPonCNJ1Hskio79mEtan",
  "key13": "3F9bDg2GJ3vAr4TQMUHydxnE2Wn5TFQKEPemChpde18dfhxfMpJU9aA5Fc7VDnkxhPgXhU9BzbzzRD6zqSfvLjfB",
  "key14": "37KEcye9nijC734VTCaA5EiiMTvXh4JSQvxSbzNFimWE5bAYoVLsgCvUh1DtDpNSEA1KevgkbAVoKK6FcbZkQtQ",
  "key15": "212hcrPJ4urXcbqmdDVEAS3cTrUb5LWPxjMDF83LpPfpEasRZXwArRLsSVfj1HeZJZMz5nq3b75ee83dGjtNyET3",
  "key16": "2MeVodsSQWYnUaWAR6iYRUnorG2Xsv2G16HQ8pEK9sptHJ2wUZoYe5fR2fDMcytLkPC2kornxsf8sU4thzvQErD9",
  "key17": "2znrb2P4KhDJeZ8vEFhQ24Nxy2hnZzD4Trj1QRGr2Q1LsqAx4kZoHZWuYsQ251szJvKdZnJ9XdbFPsMf6iREtJse",
  "key18": "26wqgArZKJgYZv9vu8nbGoGHTemMZZtLQrAN8ziLgTTmzjtoBycTELmhCg2P3Hrvd2NLu8GoyBmAk9gBuu4UwfeG",
  "key19": "24EdpewoTGfu4f5Z7yQBTKjXKWJjBiB57AcVYRcbHYnQhQgtafWUkVbTvFTMYJ7d7eryZEGkf9fwgpeTdKH23Mjd",
  "key20": "2czDuV8rjKWW4DgkWFQiESeDAwg3VJ86cNEa7GuJjk2FUeLB3wjRGX51ANTSEKekTEBzrHBaK579ZZxSBb6Mgbuq",
  "key21": "5KZmrcXmwgQkfgp9zdprHvEjnHmqEZpy4tGSdJproTDj3R7RPYGCVLnwvSmCcTV1T8cJBzHEtpkus1eNPLa7XJ3a",
  "key22": "4Us1mWzbkUSsDhfjNDDenyS2Xcy9CLubXrZSAkn1y3DAHGUtmNtBZUivNy5kkUYFirUfWqEEHws2kcwj6Kocut4f",
  "key23": "Wv6x39hTRs2Cxfa8RFWNrcY7mgLBVbFufwKXwhDpPmHZyGfATAhikdEFwVYCcbMcyAciBG2Jj5CGALCaPZB2tGd",
  "key24": "3yvGZjAwka92oU821zuUuVkiC7kjYakwJ8AqNctX9tKjskokfBMRT767t747W2o9wq7Sic3siA6TLKTFmpFE7trP",
  "key25": "2NCE1pubD9J5YFa35UpEb7rsRoc9YTYBgCT5E5s4btSUW5T8pV3fftmrUn4gTeRMYPjJQeFiGkjgMGrsj1eUkW5t",
  "key26": "4HVL4uLAFy7nSdTjfaMDM9BBQQy2nngbk2Qi7yAfBX5wKuhD3j3vRdACSPtr3zVRBKqmgCKwEeJyPv5RnhcKr1fZ",
  "key27": "44UMGkQzESutU2U13Dp1DwxT1LsxKrquzVe3c4xdbdqkPZFnX4eoQLY9mNFN9pSqAJu17REx2NqeGduyR4aXyUQD",
  "key28": "2299T8RY8ZS9ec81JakFiBx4zVyt3SN8ryrgaR1stdGJ35BkDsiQcXcBWg76wVxzZXENztGUZxMHcyqzc6h4ibwn",
  "key29": "5GxPPY6UEuQGxeifLRFLQuFVzGdn8GGqBd3afT2o542nb586Ckq3gEWnow3BUYzSP5bQXcNZanWbFbExDs88x5tv",
  "key30": "53BdJKpTXLDxzxEu8Nip3JMDE3H6dnCBfzbhv3PXf96H4cYev6SkP6iZv8zsTzTSPZbfAPoAQE5TmCb4wF7xevzf",
  "key31": "5DpqUtJzJLfiRdAvQjaRrfUGCRcFoR2c9x49KzedtF52SrZGNESzJcJYHYHdGop7EdieM2pa4YSqeNTuoooVEyKH",
  "key32": "59WRU2hPZdQQxBJBFaPgP5sf8D9EQNfzpGZUMYNKsz4BXzF616BAke4zNcUX3uZuHq5wXwcQtevPuD5v8SCkLrvu",
  "key33": "4XvaaNrg2epwHf85CWzTvRFnnSgP3hh3rkHd7WD6jXbNcmNEGyEkeLZUw8CHa5tH7YQvqtm5eSntY3N6jcrbxWiM",
  "key34": "3kXSNAhSvphEzhtVvujizW2TFWWoWEVx9K8avXQivCCdqzKEKiiZ3vFcKqMvhBoFCrXst61Ym5TxAgPQLAdaCERR",
  "key35": "5tsvRJpaYz7zZP4HgDPtvXxCZkMV1YnZrpFGnbtcSBQwweX1AQCEyuy8Bkh48282VniCVvMcNKxYuFStjhaybWS"
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
