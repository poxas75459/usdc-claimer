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
    "gLbnubXZMxovYvTHULkmph34L85yXxjr6yLhxnt8TLNDuuWKY1ZDyAVo5nLbexL5yKryaPkhMSzFgB79nGJc7Ao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MeG8AUvsyQDA2rLU9SDdtb1w9ZF5MNirMXrEjDuKugEn77rmgY28kBoY2sR4QTnuNe4m2LW6d8tQ7kgBCbVSLha",
  "key1": "3YBa9T7KAe3CHzSnmV9RNducXx69GD6dwoCpgdp4k8o93bDRabuJ2hjFtfNZvwVWybU1PN8TDevc99cavnpb4SgF",
  "key2": "ckDaKxnB4kaKn5ZYYrKR9SU5nY4D85rWjnEwcv8uPsu4C65ucChJTNX7YPm7gV28U9BMeMy6omMyya82pX4t1aC",
  "key3": "3k9L9oLgVRxGShpgtLkPoU2ffFuLgYKbhWPGfexQU4YPHsfqGLHYyyfCu6ZmfXKrduBPfrr6kYQBgPXgioagMwzG",
  "key4": "43p1YhHNSFTySWcVycxgTVHnEvjuXpDYWYUwcc94z1URmRgytiFg6CgpKnV1JYkWn4rPiTFNvUcE5mHRQZJyAstx",
  "key5": "gRjiCtgNe55WJJsgW7tWXf9ioTBzJ6oj21LbKgkuYXR8kBDzkFtBzSdACRVnxwYRtA9xFiFwrTpTogFKwkwfaAC",
  "key6": "3rXSZ3NTuptnkfXpmLxXWipLY6xPx59yM3NsSSFHMKfiBHHQiVSVP3zV8wbEYzizgseznahRzmt5fC9gTKFbSX8P",
  "key7": "29RJTxwVaXrZvLojVV7kK2PWcxGnQJzZnAVrHAftpVwVuARaHayRxV783VF1yDfd5T9T6xit7Y6ebo1siE5E8UWw",
  "key8": "3yt6ETBSc2JXPiXksMQQvM7oowK2D2DDhqUe1vMXyat1DPfQGEkwnu35W8yaYn861HDDB9tP4BKGkk78sqjgmbcV",
  "key9": "5ATCRGu55p9MHPtSHZNg922tx24fTFpFb6yQEJHoFiHMPnH3Ub12GdN67tenvMY5u63jGNvH24kEqunYRVEKuXox",
  "key10": "4jQdFeeDX3gCkn7ELiCMa3SXyAKrXzjPotCFWsRrADruEThEPE5gsE3uTc8prjNQLd667HwVFjgaprggAjUMwkFb",
  "key11": "DiDXcUeH6jmHxs519Fq4PrXBt3ySCDLJJ9SxANFMLFjeU4Jrk91MrEnSg3qw8Y1XiuEroPzfU32msbxzz1Y4nEE",
  "key12": "v4SZ6Jh7dfpwFU9EU4di7Z66oh68ifZDfsPb4XEiiwGqjVgSjZmf3Pt84aQBoT7KCM1ZDnVAMtBd3kdzmAcZoQY",
  "key13": "5ZZo5wTm4wb1mGGuPozCTZjbG8m1pbzoD1SqWoBNmJLuoskQaTeTV6frt9NMtuDWV5XLqNxGpT84EpDXx4dZA5gF",
  "key14": "2GZQuS3NHwxfDGgWboKrfav2fHvWjhLHuJ5kqYDZF8fyAbDgMGTjYKjfWGyuw5wV1kbNbMMGmAmkXWAuiykb2Man",
  "key15": "5u2LU5xYngr5opWdfjaeXyQftrE8ZJHMrNkXrz6BUyrxdSkg2q3shorRD5wptNU8C1MKV2LGbzLQHf4ks5h2ygho",
  "key16": "4QdDrfGhgmDChuAoQDu8v9jrn7Cfbwhng2Fx9DkgpVHqJSPScUq4gY7Xw6HEj811LdrvXPc9TP4vTtFv7LyCDpU8",
  "key17": "5ykL2pvtz88UrXUjSn4mDCpDkEPjueX9k7wGt4htwSQcDtSB7uwUVxUBJs9vjERTxydwMnnEoBEagZH2aR7CVCKR",
  "key18": "ShSqkYZU5vabCvYkiZuZm34aFTCF3saAtHi27cVKAXZzfpSD4NgoskL5PGKZyEigBujSwyU2fGixWp7b2YPFnS3",
  "key19": "3caMrP1tvrJ2BdZbPPdnvmBXnWbNUBBpGcp6a8LDuHLaKQGUaA7uYMFf4GPVCwZk9e1cWmr5uw7Gg7Xn1caB8TG9",
  "key20": "4YzVYvidKUnRDVPB9MwxvrLB63B8DC9x93vmM9GKae7ZGyhtNVajb8sGRurKsRm24iKiPgA4gTrNHDdDMYaNfw1k",
  "key21": "UbM4Ytg5NiNGBdsxerDcVpkpCDGmiqXRX6zkaJVb3nAZPWHcXci8SZZaPbdATq6ENhNfaX2BC4xWdpuFWQPWohe",
  "key22": "3NgUrq1uSMK6P7iKGoXHaU1F6zteHt7m3aMM8Ry4trmgXebqUPGKCmUfvkhxri4KoEMFB85PvShRX5bPjJKv8BC2",
  "key23": "J4feJwPD9L271MjPWQ5eGhRPxasjuLcvHsCHc11TNAJFfTYeuyTXbwG3zuSUCheWiQVSztZqfmMhMBoETUe9oY3",
  "key24": "4nqxD1CgvKbhefhhPUuqxGh9YAoC5aBKCtG9ww5V7RLqvpzcynwFadFQKsVccCpXGwuJo7w5tyfewtmBLQdoNpNX",
  "key25": "3VXjWoEnmxWaeBxJk7uNnMkV5dhFyMpXQBcV8H3aD7zRft2EjJgKwrEaNERe7HhvmbcUvqEHcvoK1LaPkDE1ksRD",
  "key26": "uSHVwiJoNAkEPkak9wpPz2syHLzkeYJQD9gyiQePX79oPc2dHBhTWtNMDNfU8K23k6YCDuv7oQBd6zNoKZotYUJ",
  "key27": "3V76Sjz9SMjN5wp2wCmV9ti8ehzAfurRx6523rvvAGJRQWxeVf4KBGqQgVjSJTuLrReMdcnt6pJ5iwysNvuiDb6H",
  "key28": "3enA9SgHDQTkemoJxirB6g5ty6H5T4vLDFeiBbUAYDd95JJsJLekWatfZBwu2TrJMhuTm6RT54Ae2DJWCiqraR7Q",
  "key29": "3po4GPg2A2DKy21dUgmTun4DsU2kxv5TinkuZSE4icbP9ayQTntmzKzGiehJexZ4tsp44kNqTUmm86HPzfLEG7EP",
  "key30": "2zdsK8Ed9naizrGHvwJeU1RJy4U1VDNdd9pVGQXTcnCrNQbtrsdVFUVgGsVVHnimxKJY61sdQMXRhbdbtmhcheDd",
  "key31": "3TJQwchxSMWxMw3XfQ1GPRLDWW8617Xm6rP57omyhmBgKPtJShjj7vbEFNX662RcFzLWtwYMUEQgYi5xZWKbG7Ep"
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
