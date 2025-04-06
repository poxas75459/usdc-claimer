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
    "3786BkxrHCXUL3EfRJFXyWfbETHPAGq4i34ZBqvUpg53x1Q35rz2Nm7MX69h7Us1f5UT4MFcxsP9osVPpSWRi34N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BEB6NEST7CFJXKVw1KCLTgXJGC68PwLWeVTtBBT1aRNCejWuQLNZMaerfDiY7zinJwvLjPqHB1pz2obK6bpKkv",
  "key1": "4r31uyYfVvSTuEHaENj8x8NNitrotYSx7zSv4tzo5otQRHz5ZCs6J63Q4B39djyjbVP4JFvYFLXzCnm7qgAk7rhY",
  "key2": "5jcts6x2Ex9tRXk6NJm1Fq4doLcB8mdnT82sNTnrLWQ71bmKmj9NBpPXvHg5pcVTk7pTeYJbHvzJH9MzZWvMqhnv",
  "key3": "pviZbAhTfpADsuRyjP7AkfJ2NjiXR4RBvtkXpFcpH5mK94qMNnCmh6QTak5z1qu189wvRWmqGnoUSfWYJDnuvnm",
  "key4": "qbDGkHi783P1q9Ep6EKmvwW8ZYZwpjNvgfEhaS4q3TWmxgHQuSuMYXBtish691j8nciSxhYGY3pJ7mCVxELZ9CU",
  "key5": "5Es5XeWdiw6EunKbGxuKJ2WFZva8NitmTh8gZidkTWayZu6DWMVuWNqQJ3SEz3yYKNszf21VUhDGKaAzSbRMcMJ7",
  "key6": "3wFCsoJfRSLiemjpj3EPAYS5T6rToEbhhaXN14kzAT7dNfeua7SjQ91ZBFH15opDfbQ2dK7KWtT34xwiGtdJZydA",
  "key7": "iFuBtDUrTmwx2oz1TjHXtHKpvnYDPp4nVd2gihXVcHst7bAge7YddDeXjZirxbFrU9X6j3GDyGgW39Wx62jeZnL",
  "key8": "2T5uodWp9FEdc1VHiLKMuQTdDHYrjtYH13LbNyNUWkaPafrPhrfH7mJsSwa2fSx2Sy4B4oqmKyzfURMnMa8ST2Zt",
  "key9": "2WgZqMQR3WqNNN5oMhTFx6FWVNQT2omUA7d55FNvgJYBnELvPhaQ8v6yNb9wFPpYntA6ZST12dvtt5ncbuzRfs9M",
  "key10": "4BYzAet5btVXUMt2gsihV2HELzEAWZpF9JGYogfu9osPUWtcDb3HTTum3HF1hNGJ215DvqcobhM21wAT7dfEJQNs",
  "key11": "smLP76mAYhTLXvcznwv2u6YQr81nhgMy9ox1Le3vv6bkDd1hWxhXLGjNG2nEj3uVCToPii4LbHcQVKkdUY57jpz",
  "key12": "5jGHwUAkdUeeFfVVhycU8EeQgY9Ed4vkuNxD3kTAy73kJ3aEcAyBuRPn2ySBwcYQAcwixS5NFVZFvEMF2XtKBknP",
  "key13": "4yrLYJpCb4DqdbZiLCwksGAMbD2hyGeXwHJDmLWbCWagGHDt11b4inWrtdfoq9GHN1Ay43nWzUUPPMVVuBiBj7RK",
  "key14": "4eZjGKb8NB5UgByAjAnksN1MxravpNRqmRLSAe72z7FEz3Z1fmZmzCDpXvdDw2s5Lxo8abRZaBqNizYW5qwYKXRP",
  "key15": "3dgxH9WNjGmKH1ZS77ACSSfDBukY8rsbsvMvsyv7feLtSHhrMCxR5dsb4jZkUCGrJG3GjP5VW1XZPh3i4yjTj6Qo",
  "key16": "34UUbUbUXGaSSjX6ZxGaJLPnSGrdBbsNPf3GGGQpnK89tLiUGqgRp6PmMDYZUfFwkHET7ZXQyWK52dGWrR5D9hL8",
  "key17": "5b9xTHqHXKdpUm1CsfrcpqtBRpr8nQvoJR4467RKptQVQ24wAMs3G3LFLb3Rd7N63XDocViDmxgTXxdN4c1n6LU4",
  "key18": "CGDuL7dnjUCGfhdyDsFSkb4x4ebq8Bex88nSLPQp2FDS6SC2Z85CbJS4gYFn8kwX5Q9M4pG47Xgnu6DNZhGVtg4",
  "key19": "29Xm3T4drhH7MprvJRTWPXiYKzg9a83RPXGFjfCb3BbVqyqdhdtjozgB3mfTD2VQSD5sKzR65efUEcqjrrVKb9mQ",
  "key20": "5trcbmThegpfBGqAMw2nYR7JkWfPREcMGWfoc8Xm6QfcJagnGkFiMsjPFUwox6BNqrRyYrR7aph8vDwkUHsqbaYo",
  "key21": "57vg4pmkDsURBHecmja7aZ6yg9cKRkGrCca9UePo1sFK4jnZdEun77XszcNS6bvrXbx6nsnaVnqUFUG12rpZZv4B",
  "key22": "5pRYSATTJ2J2SWxYwaSCHnE3jwnjVaaY48HBqWajzbThv12n8rYmsqX9381NDkMccwt75ztzf9Befgmam1aiQpss",
  "key23": "4mBESawf5G7RMzXF8dBZzq4C2fBpqTBzTa3Pybjz3wWcSPrsjphsjmw6Ch1AkNCQgCY7tUC7GFS31HhafXGRcdBt",
  "key24": "47wC4VdCfwNsGLdDgBXSk6qoH9KWoAjUPvgDyhJBbG5EvQBUH4QXDZvPD5UaJR8roRDsp6k8SN2wBupNJWJdRef5",
  "key25": "xejMSdFxYbY8dX5c8gioCgVEyX1D3BrzLyMPiSTZ93EzvhWEAxTM5mVBYEU5P6yj5uUBoJew83sh3cgbK7keP7y",
  "key26": "4vdGtnsjpbpXraPfM9dEMC4jDyraHuveM6uXy1JmqMJQAhwAgekPNzKv7A4CvoPceLWa6mH8g54XbBXBkfR8Qh3J",
  "key27": "4KBdCMosUNoRMddVrzwVpaDpMXUZLHzgq44sQCeoXC5w13RoBqSTmuAQDzWR6AV2eMvePCotQentZz4jPdxfXr1R",
  "key28": "3ZrWYtMhAjd58ZuSNWgybkZQqTmbofABHnspS1qkHjZozE8TsLPG1gS4gzVSL8DGYu98uNPrWQeTeFcFX7eQNMQm",
  "key29": "33P38ZuuDsCKKnvFqtAAZLjFCkqS5JHGQNsx9g96CfhXudK3sjA54mSpoGvVQVjg4tnbVJdV3Sr9kEE9Fb2qqcY1",
  "key30": "P1UsRUVhyiigkNKqUeXHgFnYZNyzNNSZDmxckCvKcHp6MT3hGo6KbRGRaqpV6UerrB7wU3fi38WjKYaEcYkF4RV",
  "key31": "4jS1Veq2z77cPE8ScjcJA2uhSUUXxA5Vxbp51sHohc5VhiqTgYUWNN4dzXmi7z9b7EweKSZGCsvx4UitUWK8n9qQ",
  "key32": "4HRDN5ffEdCo1o2tTYsSBZ1H5iU5JTHvogvwk4BqJhxuwY7U68k6scUjv7PzgSe5ABVYX8LwnWqdHP2BoCbn3Woh",
  "key33": "3GHPDw9tNGnBXwLB2g1vLqZCEh5MHbGYRW5EHYtv7yaDP3Jte66KgTRC2JKypcyxW8NqB3bDvipHoVQTJsb98HpB",
  "key34": "4QehVXwnFVD4S15uEBi9nAQLb9jBgMgttC4ikjyR9vofJ5oyFRkcL7ruvXvNSPpgk7iDdYeLWx5MX2c5Qv3ciG6p",
  "key35": "4a83sxqMyudwAmmos7fNGScT21LdRcyvF1H5n9ry6mrDde1vXdFXYbmu9vawsEFJRor5swDs6XzCUan6eKtYyXe8",
  "key36": "4UkkddeaPQ3skyneFmG3EjuMeakqnjAVRzwqxMwfX1m36YQJp8wGLtYYRvAJsdvctN8Syf4wX4A3NZ7xLqH2igeb",
  "key37": "3aM3uqPiMDXhPL4hiGSBsEr4yMFGDCzbmbsmWEhfnbMLHqakNrZrYdeMr2uL4pp2dGEHhXdBcY9JWHbV3EKsdEaB",
  "key38": "5S9hM338JwMd24Js687xqrCMRfpbWnfuyLjdZU1UL9phPDCx3DRkfqz7Y7B8DGjespDR91HsM2Wq4JDCcHStoybh",
  "key39": "52MbE9Ce2LqrQgjqhfLumErFyEESYUe1sh2kssgJjakiHzcnpvsGnj2BSG6Rp1v7GKXoNWd3kYhtjfKWn2bsN97u",
  "key40": "vEMBTbJ7qHoRtBo22fg4GBDFG2x7A6uPLqDJPUbMu1oQEiZCTJ4XktFtcPJhNMaYrkcXqqadQrT4yeb8uFM5u64",
  "key41": "gaispjaNoU3foZkzK3qn5axQ9k7VspkBXhRdfHfzHykdHL8tTMy7MDbhWntMund7ori8o4H72cTGVAezQD1qHAB",
  "key42": "4bxZ4K8sB9Fwr22uhYK7T5eZjxPKiHXwJzSn2uVjDBrnJszCarKaPrurQDBnbjHLEHdQtBPH43xG6oYdNj2kfWC"
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
