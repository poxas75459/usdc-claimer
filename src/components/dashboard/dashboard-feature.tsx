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
    "4GBQCHveGjACuH8zFYymjMCJy2XSN8rcETKcVyMLWQM2YnshgFTTpV1d1NA8BBnXe4sDNeGeofCexDSFVBAo3gG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHFWNBKqrYovf7XieqYs69R1J37rSdoSbgqCF2oNAVtdSikMxVN8tYtru4AxXTfdR75MAejkuYVCjyNuDS9fxxS",
  "key1": "fKZgpfwki5SyjyLqDYKpxXRcAoCLwH7yh4UGwM9ePZaodTBtvxsfoEzA7tCLYaNzAxSLd1zuyHB1TCcHJ52Ju2M",
  "key2": "5YWvqU1uLgjbvoLBaaY12P8XLoemJPKHAc3ytJ1qw7uNvdJob11wKkDgsNwYAVf7d7ssxSaDBWnfLgBxYE9YfGdR",
  "key3": "GfULTWKJhcGf1eUfGpm4GE3VbA3vichhM12Qg68rjeWdJrprVrSWwvz4jbeEDS16EVTp4zHbgANUKRwCiU2rstU",
  "key4": "2vsP4eWW5p3sx9aGdEAxum44idexrHerYUpnyb3wB9KHzY8qHACAK5NXc1A3ZQaPCwyLvR6XVyqV7pzbsrhP9Qfs",
  "key5": "28iVcVuHLRRvzemLaMD1wyqQoCMuayg4B8G9p7oy34b2exqXG9t5R2n1HBmGv41uoJtAbm2Y3EhEu6NUHLTAa59C",
  "key6": "2T7CASMBGXwcdCSP5ecdBVkXs3EDRUVG5BWmQEARs5knbU4jgQUHovYXhgx7GjQgd6eEkpgWJRmV6RBK9SXgsJeq",
  "key7": "22Z6A3yTNgZoKi8kkYN8ujvN3z3e2WgKDw3SKA6GaCB9VnyhzR8VjULTqC65k9eJ2SiTkHr6czRKWf331Z5MNVyy",
  "key8": "3AKHhNn9G4k15UBPUTYsWC4GW4rmysm3FZuxZJL6wFzT5E8KMNst7obnRegzrBc5VykcBgmsyYUkZgCHAhMtfQGu",
  "key9": "5WK4Q3WwfedEt6RCoAyzVGm6CGne9vuQC4Bcdh411PdqLA473SHG5pvVrjNKYfvahUrw2uWD63FkQ4JwshzsgWHq",
  "key10": "5uKyqvgmGhDU58SK1FBNDtoH23Mt1N1HFMRFvA3AFi2CVM7MVAERzHmVmSyWmkytMNoXrQaTWbmcFhKSJBMfjzWK",
  "key11": "5Dd3QZuaqBj6SThQj27G5uWATyXNgGSYvvpSQdbDZjCAsdJGBErh3m39ewuhsRRJwX6Efzs6qwHXaRbciGDWk32J",
  "key12": "5pq3FdvkmoadT96mQS65NV4dVNQKX3mUXRxxkzyid8LA19yuiwnqRXVJNbB6Pdy3abBwXPfgQ5NGs32u5YNJoTdK",
  "key13": "4uSmBEChYWonHnrrZ1iyyxNgv2Eiy8YxyGheuioCcpn2mZbAnHUgpNyaPymvaUSXQVgRGAh2dZxKeeY89gnjWjDu",
  "key14": "3soDfN4gJe8zB4DLz8C4b3vMTqiy4BvdtdgYxny5JuoimGCajtRNtb5Ct7RLTAaVtuPPfuw3adzP6csS4K6GKa3u",
  "key15": "HcpMajztT2uDDkh3gEmQUzwWrySggVPF3LSt644gNu778719H5yHqAmYZBGvbMDjK5Mdkxu84JpqdS9VZm8GMNK",
  "key16": "PPNE8bEp3ADSpibuP9m8eXvJ5xZZc6A7g5SUzgUJ1acamypnjGZfRUFUoUqm6s4rs3RfBxtXRJPPWPBo7TtWw5S",
  "key17": "3oECdcdof2FvSSX1NvxszHyanrKsDXQfNrXJMQAiAnPb4djPFhMvkShkj789coNXcPnwaq3vYYVGSG9TVJKudhL5",
  "key18": "2fbNQUyGCppxvKkUBWxZ6uDXcDFNLdRjmSFTCbfgAjNakJtTTH6aKiJnbBtFCYMmoA81E59zqMihSJsH3fabk98x",
  "key19": "5PLyykpJcUS135X2chv6tgLREjonkbRtpCpHQSZhzrCcSH27ibwij7554fkvYLeY2MXA9j1HATwssEu3TyHsBqV9",
  "key20": "5YnWvcfYYa3sGKJbzy8EYoSEd9VGwAtz1yHsmXKjiuRxVFhXvMMe66vyoM2J5JtEnQq8rXT6Aq24dUckBSYdNKsD",
  "key21": "2YHmUYcR1JD7vFcbKA2etyeJojWSE67E3hjyuS4Kx2bmF6ts3GzLZgdvuh4R36C8DpBzM8NtxaNbH7thWoZsqi4M",
  "key22": "2tf1DZhvMVf1kxhdPrRRPFPiWfuTTKxL3TGEacYhA7uUTTZotUBePs3QksJPpb1D2AGNntdesRRFWkeTDRdjoHtV",
  "key23": "4EyfYogmemR9QiqENBNCw2x6xErPC8mMwgNjJwaXvFdyWnpXxCJqY8VPgPFM5yWkQJikgsY1sh8Yym5f9dJc1aPY",
  "key24": "3Zbt3aAJdoTEZV4P1ujKscu53d3AawroMDdyBdPKaLvpgT97xPkEEFqsniXC7kLYXkun6L7e4GMjogmMwAR2x5b",
  "key25": "htgoMs4AM8mdm3WTeaHMtY2Y53A7MJe8bMxsDe2NhZ84XupaASJPfh8MzVFpJrZ5Uboi1ajSjpGicRvdhqvmQNj",
  "key26": "4XbWfSFcRJfRMhQVv92G7J16fAMaDxe2FRmWUtmxQ7y5aMWXDnwQR1811rVDkeToM3UUsVfHMcrixvkNSK5BwiiZ",
  "key27": "4a7VJ7y4GPdssYcsMAatNoR78Qcwd11mTVMTHi2cnhYcxQu64G4Fos6PLG1gPdQTGPJBuFfAYzbhAUumu9wJ2rJz",
  "key28": "3mPAbRz5S7ZCTrUWHkfitXzoqPHAHhAZf6LNYFsGTJGvzY1PNDgskcw7bX5pWLS6Ga1c2c7C3v8GNpRxjHihCwa1",
  "key29": "4XFR9vMy4y3ccEH9UKUUKHxFpPuxH9o2iCya2gcsYURw9U9cv7XWALv7NSX8ufavqRNhWNjVdkJYcUbkPmYisBj7",
  "key30": "3Ux9fJyaXQRkCBFxUJcNHVBJCuq5vgwq49FpaYMwvFNqrqVTf4ut31y9BWqy5nm14wQv8u2QGWHTqyuqx74iX3SD",
  "key31": "4fXPMxsdBSbqtCum57sRqekAm7p7tjCVttALZGjzwCLdQVZWVRzEZm74GsB2kE8DsCeSeLc2ekcxUG1m2Nq5Ltpe",
  "key32": "3LB54zJUFaXbgadde2ZJAuKcfTvuEW3sipPcYjLpNaWfVkzbwfRbDuftfg3daiPKGBX4b8oQvU47n72QtvfneASP",
  "key33": "5JkZC97USZ7PZW8BeLn2oUWd7BNzLjotkJKW1yHzYGroRCWj9eaP2ZSaB4f492RJ5vhDwjUT2RWDVmJpE7v24x7k",
  "key34": "3nDL3JhPuriqXLPGFAsUYbwNBpWVQ2BoorBj3QarwhYMVn5NLxbwMLZZ8V4ognXpMcphCu1Psa1FLDH8nRD2mifa",
  "key35": "kFLGHFtE3tDQJTtzjd2bZWeHSKb2kAN6shZLDahZzkbnJSmdm2SXWhU4fGgqNep3E82qzSybqrH5KiAbgn8aLon",
  "key36": "38jwyqR7Xhs7QsSk2N9JFccAYMVLV1mazsoKXGAARe8jLGv7CqwpEVksDH2N8NeZ72F68GjcAJ3dLjd1Q1Vnpfcv",
  "key37": "125KHh87Z5tcTdsVsLM5qWA9R15ZAGXYzMWatwhxXQQkcF7maZVkGWErGzSNQUjM3ev3rjU31gXxNti2dPGtNsLK",
  "key38": "4o2jJegcot3zo9yQSKJRNLx7pBGQTfFeA4EtnS2TDACUcuk48x87Z5vuv1yRvP7SvxcmxDDPnGbUo1u5UHcAS4yt",
  "key39": "31KgVBBZuh9WHoMKAEHGphNvNocwKYnSAHFvnD6JZXQLKiGENdK4eSMPA5ewFPUYiBYrNZtYhCTfx2GnkYz6PnEN",
  "key40": "4xPSujeTqAS3EqFnDbCMddehqCpdVNTKVTJ2nMgLeDZtR5ZKCaRKYdaKj9n9sKHoVrmq2si1JAwyJAkjzTP2Zunm",
  "key41": "52oXwzabZeBvhus9JDgCN2H1jZaqiiCh5HPtqhvUPCTe6kT65nYCzKbZG8ybZSCvUETnaHyVWK1PdBw7r9ZhMxg8",
  "key42": "22H9S8y2LM4F2QXDqHrR6kr3WSVxb3NsQ5jJfo5JU25kvTCKJMP7y27SwoSQFZVJAEqWw2N5ESqY1Mng4Kwk6C8c",
  "key43": "4iDvLa2ptW1H9VGXdy1QDyKz77Kpep4FSyHW5cPzGmstEF5jCfQMte2rzFneUwgkTa9ysKCTLRJoB3dpoU9zEzdM",
  "key44": "59aomDPXH1Mm1fU1MNPNTVRb4L18pwaoujLs5u5YoXp6Na32RX8bm7U5jKgB6aF6bP8kXQCop9LGStaepdkbjtr3",
  "key45": "PxjSiPmWCysgpwvzHD9TRqxLwwsXJ52p35vmGif51HUf9cgfWBw8gNihupzLzL53aDLKdMZu7SFdu2raWLyx3PL",
  "key46": "7u8uyr5iqPSzXh4fB8NCjK8KW13hURfvmMLwPA3Qjra3jFXAYSFUTrcGZgKRRyATfNphbJpstV7Jz9mBxhd9h5C",
  "key47": "4hyecaYXgWNAQ8BnnLNWMjsDvVjRmf6X1BzSi6vzAnYFPfh3a3GmrQk3jtEbxbXJKv56X8RpWns7H5skd1XtkV1n",
  "key48": "RyzDgog1jPh83QVW34BwL96zLpv3qgDj5tQzbzRH9XMZJALMqGghgXfK7A1CHRQtCNGkoCKV93jLG7ddexeSzNW",
  "key49": "4EbBcrQtV5YsUbAPFVzuutL5SEfpmGM7FrpurX34SBgUc4QBZFhjjSeYDVprTW7a5VvU4QhA9LdsCEbRdzD7Pz8t"
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
