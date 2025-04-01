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
    "5Hfu7DSzEebt2eXLnYrG2bnwzokVcKUxWsWmWySXxcutCtVb2eh26cF9TNhpNqizr47JX4Mikv52otW7e2KgUqE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUcdww4bo8j4EampAjt5eecgbhjEgJz6LrAQFTmZAgdWRnrQh3qey6eQGjNiamMr7CdbG4Tn5DpW28K1JFaz6b1",
  "key1": "kHbiQiusmTUnMNpXT5SW2vc16onb7gt8eQfakvCmrPwc43shpQNMgcEfacTQadjCY6Ra7CHorBHCBmzFGi5UzB2",
  "key2": "5aQ4aC9jUPzbz6qQR2CKp6EZYVn61BUmRCLQPp1F5LTtfCNjTPRBbgNVeDNV4nQJUt6v72jJWoPRSob2F2hijdT1",
  "key3": "XVJBu4AszaJm17GFM6TC2mhk5GW6nZHRMyZqJ7NE8RgoCysjc47mMyAYV7LWwDVqkTW5QguCqYTXpTrbrNffNjF",
  "key4": "4USbciJLQpBnpgAcp5knggJcJLzw1MGxgr3dJPfcUUaV3dAYMZnFQ5p4QCwXuHMNLApBRUQtytWbLZAko7xMjiCW",
  "key5": "KFWiNWZC6EtavK3nDumdn9LujWLrd7Dgkg5HV9sUsbkVKpkt8153ynP2FJCfTEzMRNS6sMWPwRXG1kYV1KCmek7",
  "key6": "3LXadmztnekD9uefWipuvLh3SQNgCsqPV6eECHYap1tB8WsKZvmVXW1zcBjHr2qYuvRiqPvGPbGvN6H7uwHo3rBd",
  "key7": "5MgkW4YbU1KLJ7t1STUFrWo83kK8a2mdr4pvFXd3zs8AGF78qrD6pKQctiMUbSWSgq3qYZZaCAgojeJU9uMEeeK1",
  "key8": "5ntWBztb7AT4xh853hLgbypWQgQigqnG3KtyLDAcLLSnpYvAWXWHxhYsHLaoF3ccnvaFRAjyLy5oai8jRS84MzMz",
  "key9": "2ZAhmqfZfJL4ovb2pwfrEW2wPzfFmuTkhMyHyK26m2CSYeY1t2r5cnmAT16ebfYEGpeT8pa3cxZp6xb1S1A2hdsA",
  "key10": "4NWe34FXdjZbqar3Qi3ESPPVPHwKNdtsFz7nHC6UkUpiogdLg3NgHv2PFqRYxv1DTYUxnRNYtoymJfrWDsekrh8c",
  "key11": "2UBovCKrGRZfEbCKrLu6wBQDhTVpZrx8iozQRsFH7JooLbi3zR3WJJGnCmH7EYeXRZLLHEgUU4WMwCao2Wh3Y1vU",
  "key12": "2jnY1ikZmJL52eRUZpMjtqzuyAhAafyTPcPVtjxcHRh9gQjTr9EVLVMFsCegTGqiAQcHxeVy2msd4Z9hTKzB6pEm",
  "key13": "3jSGWXXceVije9JnUvsPK92UWxLqLPQrSM82anyfGiYij8p1H2nvxRTxmUSnySXjQGuTBebmz2BJTMdW4V3qf1kp",
  "key14": "5d99tNfUkNrN4XdJMoC8CgKLbdbUsCmb7udMGNhQKUTJfJqbWirn4VqeQRxSCnTNJho3R4su49pCztXfgfud4p1H",
  "key15": "4MDTDNn6KsyXdaQYq8rEF4crmcGpmMMA6frMr4aTgYaUSrPnK6dsvgd2jecL57WTWS4WKJeLPTu17AfiQ1qhy9W8",
  "key16": "42ZdmhnSZiCfqACWhTUFcHKSfPANCRkB39vShuQWSWDHcJeyCARChizr1KjLRUzP4vRe5d53fWSEfaLZ3wT5KHiq",
  "key17": "64y89AxEKDJWGNaH2tgz39kbLJFJXuLdAqhjSTKupcDbxvtyF3H5XpNw4vrX4tPJGAgstH7JFXVqREetozbkkh4n",
  "key18": "TY3L7s5uRrHu88Bg9BYeaf8DoVRVpsYoVMspJx9aiU2ftTSd9YB1k75pRahugh8XLtrk2rDXjM4VieMdK6h1bPN",
  "key19": "4RLMtbWKzJUTJ6j8MLDtVwNbFZg82UehhHGJSSw3Hcs6fTcu8WPEE3itHR27YriLmF6987o556C49QqPqYxKRn7Q",
  "key20": "3nGV22GKa7iDhqBRgehtexhkALFV9jG3afJyke8jDvVjkBVXv2KecCxkNQztjEnEYTdEc78cjDkYFVK16RY9zPYy",
  "key21": "2jv1EwAQh2BJZPTdsQQzrepf3vnyRc3JwozdjSyXHa1cjBZy94JwdhqfDG8ondhjgQfjTrrLy1RGxwzG11QC8AfE",
  "key22": "2iwcqPfE5pKsTod3KHzi3aHU1Xn6rLSyz2oFxuAKDHawekRsP4RPzgqbrz4AB66yd7r5JuEUcSYeSvW6ytRYFj9X",
  "key23": "5tnzVawCidu4UZuZd1QVgbtFqs3FSgv83YLDHJV9DMEpBkGk3n4k9wUsfpuGrrNu8CvmzQqZi6BrAkVSZ9wtEVtv",
  "key24": "5ZB249Lu8UwyugxwTqv2RpZs6LZJjqE9SdTjV6aurP9CZD9UPQ6HnrfHhqBBoAvRWr9KLGjetNiKD9wgbZbG2Km1",
  "key25": "5iqrBXbmMpKfm6oLk2LCVFxayinNzFiyGskvVqT2p87MtsguUVwNqAkYjRVk6KLfLMxELAKVspkh8Aubs86vqePz",
  "key26": "3rLCNLuUukHspxeGpYXDEn3EFzQZx4QZCjEQFH1RNh6ogks2PwwUthohaKrwVEJ4AxjnNKLQ8oxUz7ThXvFZUvyG",
  "key27": "3dMw6kQ9YsuLodP6TKMpjQm9WDreJ2hFSvCv8szVj7xZLyAVGMTfbLYpenakRQpWpGjqSnHoD21ECzMidHH9WEK1",
  "key28": "5STgt6eKVZgycJZQCBixVLkEf4F2rFpuAviRAn2K5jj2kK1V7a7QpinhU6VC3srdBSU2NCXYgdjLhAQX3Ajawr4B",
  "key29": "3VzTU7jnF13YykVPrRXoNyZX6DujLh5RpGofKJtkvBVgjzCopcmbaS7TVjdi6jvTnATz4SLN7Lb789Ku8LqshTAa",
  "key30": "5jbcFGovqH4mQZfn9tuH8CmFfdxefpWGFSrHocK7ELHhCEHwgmDRF2X5BGLkQmLeTfbHefovUjB88yedZTp1dbu7",
  "key31": "4FaUd853vFeg68WeT6YZLYS6UFDFbUbA5Pz6JbWZG9XyYqw1PsvYZvTjQsztHB91VEtAmAbpfx41ZLpmd3peHNvm",
  "key32": "yZZSJghTVRMmwxQRXLBNWLQNi1hTBXQnvr14CKV3E7KX3o6WGAJusxSEzKXkeDxsBEFAHTtgAgJj6vwnmR2sdMR",
  "key33": "5o6Xs4czr6za3AAbfMQu1XNP4UVXnbuXj75SjNSw8YNp6dHvUpgJ7ySiiL1LLdRiwx7s9KNR2BzJHUYNG4tUpKoX",
  "key34": "EH34S5SbBFLxf9cPVzvvcCsgsfk9ZEVxT3VJmTpwU4c93udtt2JPUV3AnSJASpwepUtUWiPjxEouzUZAZMSoNgb",
  "key35": "4yxgV1z7MNFXVg6zddT9t6kNRLB1mXLjyZRMP1umkeeWi3nwfcd3jnpjp183sx8yrsiAsD7VHpRW6TM6LBUjFoAi",
  "key36": "5tkTPa6e6UtcXEZVrt14q2osa6Q7QjQtQYQpbzhAYkgRYHNn6nR6kKCfPMZhi9RkRPuDZQfD8dGDfa8wR5zhcMdr",
  "key37": "5VABEgZJaGhKk8VjJArdBS4euzokhQ3SHc6kdiaHZ9fwR2EA4bwsmVG8VTgHKrSrpiGoi9XGNSNvqGKPTcnZ21wt",
  "key38": "3wMvQjGBDyhaVeQ5EqRmzqFfnifuswWq9iXeU2VTdY48VmqqzMpFKHV6EqRGtVnpdPTuxdcxgsT5dowszvvjTYn3",
  "key39": "3T8fpUZGqPtjvdDvwLmLztTLmoxoApShH8Eq26uHRU9L2EF2YTMMx7ZDUyvXoywHzQvX8cNLALmc2XM8wXWQrLDz",
  "key40": "3Y2iCcwrpdsdKtEzvte7EpcC3sArEnskaTyKzSdBkA3wXk6ysCtgE2bkJ4UTX1jDYetQuPYz8UTqeW2z5nykDZtU",
  "key41": "4ikZ4kRj4YwpeZmdhfhZqWfagZ9G4CUiYnD2vrYfdZgQ22L9f6scHi9Gsx6VU6wSp2jzc1EB68mtakdNongaPina"
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
