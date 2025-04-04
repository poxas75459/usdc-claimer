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
    "37kLxJrDYJfsmTJ7xc5KaTRwwSDqNPEBoKAjhRLpXLnLYRSTyiTA2Q3oXSYNh67QtRi79PfJErwFiqzdAo4L38h7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "253rNHYbuo3fp4WPHiH8W4U4BKHgzccndaTAZyzWhRA9W9ieFCsuENGoM1C6U42a9VJdSk6LkUnQbxCbSgMi3Lsh",
  "key1": "5h3Toq7d9RdBBupyA1RaFdr3Wh2JDwGj5GP98vNSFcTUWo7K9P9dKGiTV8ttXDpgCWdesHD21YhmF961MaT27Kwm",
  "key2": "57cNXwsbpvT21tfuDdFQgCEzLsercyqz4E2roftBd3V25jJMe2jAoLqjKbJHTEWbLC278WxRWKyneB2QA2B645Qw",
  "key3": "5kt3Bt5mJSzySC1yFQMK49Y6cfTyxrAV7A75gdVLfpTuojT9PUNS5psF8Jh5sDVkYfKN8CGdqQWcfbtUTQPKgY4T",
  "key4": "5U8JZLhi7yGzVU1EwDvg3Sd6ZUizAf64Urv8iPHYomKM3SsdP32qDNbMo3KCbCYXzCsPpdzo8RP5aTfXsgo7fTTQ",
  "key5": "3DxWtcAPKG2xe5UHW9oSpqqjRKGHMGYitmvBZjXHZay3x8dzZ8WE1YuAz32HexefhQEabttGoowpxK5AfhyZKJmP",
  "key6": "3VXPAXTYwgmQd7F6ow3HtHZPhykrFt6pp6WbWXjt6cVi3Fgt83bCoiNPfUoQegf97DBZcfxzwK1gzrY6Ep3ip1LT",
  "key7": "5vMQEb7hQJ7HY7z2UEqLJUB9eCWGZ6KG8rzM7mqCjQGhN9aqmidtukhceBXh32mp1dHF4TwhDA89nftm2cSNuqpT",
  "key8": "BKPrZuxGhkfDcpCr3eWSUsVvq4TSu6Vvd1HbfXU6KYLx6nW66xtEARZ9DL4ZcPqHyk26F7iyH5nJ3QbG3BqmdJh",
  "key9": "2wsFNeCm8zpDtz4Gb7Qkfc1CbkoQ7QAvKnmHaGpkDddwKKsS4vtwURi92fHeU42GFPtRBcSdT5xkEHsCH4Qbcjoj",
  "key10": "2Hf15gSqS6uF2hJKHSNCC1fyc9dZatM952Nyd9F7EKNczKiyT8mJ1wUeRMrUUhhzCDf4KU47iaQqesSudnbdp5CL",
  "key11": "3UbqER1N3jfTT82Eeqynj9LPwSVsS6MRTVCjdRPgSZ378yauMWFtMWmJkoCgmovZdx8i8Z8n9wnYbaoqahtDtNcG",
  "key12": "4uC7QNUZoGvioGaAHFpXefheBsRNpsErV46KYNofCJaTZo3EiCH5coSF9vtrZW58CJTz9tg1iHh5oY5TxHvPWY3M",
  "key13": "5dLJmcwjaaRWcgUwUshRVa8K9JjapJjm7VtHrmRL3NZxQHdkSPYbCCkNz4gNtxpHL4SqRVvjK4y5J2t35qSiaiNB",
  "key14": "3jsrfRdimJ4wyisXgVdB2HAwNWC6scPvkjV6rua5e2VqZ1KvwqnaHxo76nS7r5fMzeCkQwHYdwppjYVMd1ZW9TQ9",
  "key15": "5R7BCHUkYwbYGEfhemve3BgyAM7re59BHBHM9uCNU9UKHUxpjoh1cYVY6hARhmvt2NFUD9TDf5TT3HrQswi6re1a",
  "key16": "21JB4Exo4kbxcu2bL6McAZYcK5w94F6owkqd1ph62Nazn4VGAX7U3FyHkr9UVuUQ6Acc9edZa4H9XJVgvBpqFeMf",
  "key17": "2gkvmobj4ADVadkp831ZfNDwVfvo9g1CYFnft9Xh1EtY93Mh7Lpszu9aXze4AoNDXfJhWmLi9bCgi3Z7KbriCMba",
  "key18": "TzW3X65ThYvMZv87kMEnYgfXcHjtdCKtLAqEuHXJsRtTVsDJHWfTmf1Htui6ir9o65iNNcmcaYQYP75VH8Yr8nz",
  "key19": "61niF9wfwRYT5QkcYLaLxZGS5SakqYKLhcHQWbDzyEJHS9QhYqrZhK9PRhYANm47gAcchDXD3gBXRL4f8Jk7v7Hn",
  "key20": "2XURiabe8Bqr1bpmGFDFwNo3vaU3MBooYmDL6fcyKAHNAwWHTugRR9ARuqY91ArbLvZKtqsRNARHL9vCoqQPGRFK",
  "key21": "5w2n6qaUYoZFDKidNupDXPFsg7CtzeD91FWFbtwmpDb6hwQaYXqnafTRhASy4NtWmjFWiZJHRwQ39jQYoJVXecp5",
  "key22": "62fgqLZwYeYRaELBtNQZjdsf2TsjVabG8TjXDCjqKZsbSRAZxddyKNH4ReM1KkUSKFqf8gsjWRJyvXWKFwizCF8w",
  "key23": "4a5C2btDHKe4niHNcPD4FytXfrLNbcwCYjnX21QkwAw8FmHX9L9JWqhKWj5KYGwN6YDh32sCTXjVbsfKKwFwsG5L",
  "key24": "3NtEzrnRCeDbDMDG8nTpwoBggmP6g8SmWohqVhb4BPiA4hsSqCMDkRXFzHV8iPhoRFDVpu7sYSgN51W8FZCiQ7sy",
  "key25": "4qBuzSyWvdoC7t8hC1imYq6KzBDkQw8eakE6tkXm6STMHfu1BiMBoLb597bMYJoXZrWgu3foQC3mEWwSDyCt9op8",
  "key26": "w48g8Dnaq5woLJ2Hywn3jUfqWGh2i2N997JciM4d1FTskTtFyCt3pfHkSFBsBAJt1jrrDXgMTyWoPNx8qv7wxWn",
  "key27": "4V5HRGF2vFy1wKPQGdj43NAaqBSqgQWakqyzhizoyDWucDva9jgAPMBi8MA6NZRo9LWgoyfye2zh72nQvcYWLLW6",
  "key28": "hdo3n7SojRCsjp5umTkSAwt9eWiHmigTueWhwmCa3eugtb2S2KnbTPCN5nphhjbKD2H6gx9s6AVp1JK3Q6mAcdL",
  "key29": "6r4mv84is6xnPhD5DFpkPEgdRdoY2M8PSMCbHkM3KRzuJReBBnwNnuhUb66GXGHDvZdGZ9Cvhw85niRHtb38BFE",
  "key30": "3eE7MQX2ai3ZWkUFy4d9kgvcznT9fbvoUyhUe8cEqLpFyVSX4Vgvmv99sevrAnJ7TsrL7CnUazkBWjwKCQ5MsR4H"
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
