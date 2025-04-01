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
    "WhDhH9MQCPuuEbzr6a8guq5AqPfdTvjKZhed64EoeGwyDYFFMBqGYA2Mw77qUzU4pZ47BBgRZfEEhfJLZEGiT3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jm9v1U3DrFA7T49Znes1Te1SJtqsJWiswvBcLnNozCvdUiZqmuWWvFE8tAH6dw9BJkZZkemkkEJ6mmcr35s8i8N",
  "key1": "4fFGSU8LkqhcZ1DAj6iQz9QC1QoRdEJP72rdc23MoKXxR7oR7SBioK1VCpfu9RdmjQ1X6qUWnujYMvepEwMvHwL1",
  "key2": "2ttkbbUnMpGz6Kkp84sbCbS2e99VLMvb1RewPSEypk9ZMy2HBxURSxPZGzhsSfYeMJRSUvPr353VneQv8Veiqtpw",
  "key3": "4QPjF6xLAU5HFY6Y8BTHBnCZJgmXjkmoUfKVodvwB3iBG1K3vVA5yWfek3QpoYinMBksjKwYz5Ju3h8kmnPaSj4b",
  "key4": "67oXfSvPM2CteVwvW1rmyiAi4xAmcBmeuHLMfrHkDyRV1mTdhMrXYugrVR4gue1VapSQyVqgGixyo5GCZVAkwmSp",
  "key5": "dxkze35Zbk8aZ54PHQgdcpkdFtbQitK4cjKrL7tKXTVD7YLCngWEu4uDjSnBU142PrnenpzJ1uhrf2JyfAgCNR5",
  "key6": "5n81bqN7xqPq5LZtK5swBqciBRrGs5urHdEQ5ZtX51ytfwDq4eAYvzWBW3f9k7VnYMa4BGebMAURxWAonvsMUbsy",
  "key7": "3xWyPXoHy1JiUNgSEuHAoRy7a2YYu1KCUjXoTstZ77dFnNFcX8qr3oTzEkcTnTvtLoC4GGcaauD67Vq5FjfQeRd2",
  "key8": "347pRWNoyKd8611REQg4F26RkPngz7PzwhraKGuU1XZ5J7xxfC2o7S7n8PHbwBzG9d6zEdEqqsCTEE5gquFaSpgG",
  "key9": "48VAzQHV5xDdCRq2msV6U5KFRz8yhWY2wcArEFMuMVMFRKPoFidcGqzAZnYmeSqf7PBGcq4CBs6dhPzatwEKNy34",
  "key10": "4wVQUwfs7jZF5TgTiTjXXtNVUKUUjNpfcChcewGcTMisXGBm12zXdxj9z9kSfw1KKc7jvZgK18B7CoTTdw2c2tL2",
  "key11": "5kws9htLu85XtkRLSbqhdhaKuGqu8y66b4HkBCAU7N7JoGjNiq6nSjZumAabiSKKjLs16H5ykNmW5GB4jzoxADUd",
  "key12": "3z2ZdMYptNEr9W8ALQugwGsuVhMCwDasEnPBUdqoEtb1D2MrGRQvjiBiSsiLaVgQJt1Dkd3cmDbevupDPEtUVZbC",
  "key13": "4rzjpGivSFttwiCPAcBHGmCqa1dVnpdKN4sdazwyFZtMmjFhex964GoVPMWCtcR8uJmrYjubskyk6m7zqFhZWPWk",
  "key14": "5WJeXMpesgJPEcxUniavsQArkZJoHn7gT7GnjaeNXKuzWCTtbGbrFpVKGyNDn5gX3t1cw22vTDv1yf61ZVxSCqPE",
  "key15": "4t7ibmiUTYtYtm1c3HzSwCTZykaKaXAhrciukGMTrsz57jsN7grQbhWKAuU67EAueuZoRcaV3nV9AEZpx81Eq7Y7",
  "key16": "vWb4qMKeyWHtf7gMKuHgPENQRwqVvQgqBTnpMikYS1AKqYtWVDC1GgVPDucXSpQHnjKZp7FGoU8bjd3FkRvHxc5",
  "key17": "4cpi6amnh5GvVxYiAGjxqGmTJAvsgqE3DmRHQ21sHu6ahTNdznJ7D9Vtgq8sQa2KAaeZLdQGg37NeW59mRhUUoTy",
  "key18": "4iwYNoTECvNqdoMtLSiXkT8iqAeHDY521t4VnvJG3TGPdZwWLohD8vLeLBLgFC5AmMa33Ak32PboEnNJq4M1SbkL",
  "key19": "LcSTrHe9tTT8HFxKYgSC836EZdLcSuikw9RbUau6brWWC9Gpk6gkKQkVvjkBAtM6H7oYTeFckrxVSzoWjdXheLA",
  "key20": "2rNbieRFNp7i3djGicdR5tEE56vagZkSFpXL5MUK4zr35nEYZGzxGjxgyiWVSfVsJ92S2h6MvHW4tVwjHWh6aWAf",
  "key21": "5RvZ7phdyTQbR8VJ93gPgHyRL85Tggqd1HX1pRxTsT5es7UwpTiuRYhRqTGfc6LF1mjGVv7ztkpLtgtJbrUgFCkH",
  "key22": "61YetwYxh21JJ3rxwFm9LQA2Pn5H3SBbGePzntKP9Xk6whPuMgu6gSWWYpjx5F51SiNAZqibXtuZ5wnewvNuXZ43",
  "key23": "5xzAwm1b2NJmsVacRgqmcH3zzSvsPJYyNCZoonDckZUwB5X1DYDSCsH7a8XagEamgbhExzcJu6Qdyd39qg7E14eT",
  "key24": "rbi2t9ybcovT7ntLaYtGhFqmSNvcZjZv2y7eDia9kpkhwYiBrMx48Xj8iznP98G1GwBSgwaz41xt9RiiAFpiwH5",
  "key25": "61FAunkSd4DpjhyVqWpXGGPiaiCG4T2pVx48vuDS7Qhc42rDrCk8XW51EZTmdqAUChGio1PUaqzWm4ZdUw9NZfCF",
  "key26": "4SoXiDeLGZmWJ6M3ebWvnA16YhcfQyiymMES8GwDWXjBAxsFDbqh8hjDeoRfv8CrK8wWH51QhvNENbUhKyZYe1kH",
  "key27": "457dPvxiJq3JEArofRjZUT9GXvnCvkMikP7RbKhbpUgCRyYfBtEp2A8Xk5owTt4VCsQCnrMPg9L817uJhWpxdgFD",
  "key28": "DpfaFbpGut93mJpvVMoALojZRaLFoG936UM7znHAxBgPscphhjiKKA2Rp1jADECh5kdaLC9xhsTruD6Cs77dzrz",
  "key29": "37rnGUNfij493F7vpR1kpSqZ8nRvR2h6177fiKnxLQJLJfghCEhv7WKQFG3bSxCk79iNuFWQGHAVyLP3top8cBuS",
  "key30": "3CE7oFyWxJcBiDZuCEufequM4uiovcFgzvcWDNRJTSC4rbUNcFm5jksEjic6NE6ZAd4Tz6pjjVWd6yKFSxHPndtw",
  "key31": "4ULz6QzzNgKcHoNBSKgQmMsmu8bm8UphALPPssWzbPh6Q6vi76y7HQAdb9tcRY2FdRaTFz5sFTui5JShLXYERzZf",
  "key32": "hXkh1s2QgMjEYhJ2afKxJZt99adUTwXcWvXkbhAohGcJBwccVtLRuvqBcCKrSmwtbCfH34sN6JgzkRraj2YL8WF",
  "key33": "5LhfYCJv4P6JCtgNU3v1Dm1rBixz4i6GhFNs8BBuLqxskVTMc4Z892TSG25tDfevgxoMoNCTknkF2JRGGUdyYqBG"
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
