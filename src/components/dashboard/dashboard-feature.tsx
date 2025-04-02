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
    "3HFSk9uXTswE7hqNCXVovNLVYBworRMjcgNJWcZrEcu3Zi4Sy9HAcMuQbdKVQ5ybc3zCvUQdnpdqQGTxhhALFF8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTjLE5oWmveZyHWi1UxjSgCdDqTx9T1yKPX3RD1WLTaKjzjGJNr6A3ma9JYTZ2JT1PT1WvRy2SQNajeSJ5cE5XR",
  "key1": "XEYWFToojhf3nBifgsDQ1s6Ri5mf1wjXud8eLghEMvx8Rj6aghayhKc82p1fghN2rkpRguTutice5cDw4C31YMA",
  "key2": "5jA3ogfPYuKKZtnRQJgSktrV5SG9ASkjZ1krnyCYcQfDLLwX47kLbQoFrcNa6vohkUtEPciXm7DMj8WrWjbJ8WHt",
  "key3": "63JQPZNYkCqZXmTEinJfjuxD16KN3M2g4EfKNENDyifJUQtdooLsknxgxSePyc26dbxAaouuknF4Bao1qDgPZiTt",
  "key4": "4tBLa4obSHPMdCGuMofHGscN9aizmcF6N56WQxKAcNZvyqLhDd9hv2UZ4jWKdMAFRug8QWvssLJVbMivEmY7qZBg",
  "key5": "5HtvJeSSEGcWWFKaGJXXugdmtNs792HEp96m7Fu59kp4ykJyesdyMLoLCzmzT7Uq1kV6ZiDoysLnbR2nqjR9m62",
  "key6": "36CAmzozTzWTc2zMHuPBsqrKXyV1QMxAjnU2pPS3nH5Ca387F1oVvyfcj5Rom3iK4TBaSxKT4ay9cjyYvnqKuGri",
  "key7": "2FUHwWDSjbdNxjuBvWN2BajZwrZia6hWrdBmkit3wgSKPxgTS6MhfcoigAFQNZzofmZo7z6ywWBtoLDFv78kawvX",
  "key8": "43kuezG1qA9MkTLYFJWojBXTL8dPAGe9c9P5xBuvxLKkgyWvNHtGkSDhbVp3ubKq4p3XV5pzWqbgaNYpNP79EMpn",
  "key9": "UVCKM168z61VJFjhi4wJFn7ahQVjsuGYsNbYjX3zhrXQMc3pdNinAS8C7MVFsTZjm2qoJtBEyGUVNfg7XEaVVt3",
  "key10": "3V4Ens27tzeM3jfhkNmfgmpBK9MHFbSmrK4TmKHa4aMYeZd2K6usuDkkwqh64RDfveAiPAC3LsGsevz655gQqVGv",
  "key11": "2hBpuYGqdtxyUSk9ucUqTosRdifQmGHXzGBoeuEmXB5N4HtxaKgW1f7PnRqF9EqxSx644ayyN1LGFxSZJpTgETok",
  "key12": "3maKwpgJxAoQpy9YCPhKzmQa8fSC2xkijtxatSzZKBceaFXnEto9VjEsKU3xNbh9HTJ6jsfZ5huofaSwmLr1c7Jt",
  "key13": "639kgAYu7rP7U9Yz8r15CiHNgb7xjGR2PZZHg999kp5zQWbVzNXRZScEJkmw22F865naQ7rJw1biGHqN8vhZ5jsV",
  "key14": "26YtygnHWjhkCat92w1149TUG6XsnP4zJiwsFQUD8hAotjDii2YGBtmchaZDsE57DTBSHJJWqEiLztuuxMvg21Kc",
  "key15": "E2BnvMACraKe1f8qBiTYgZBwcSkCLkNs2MCfNy2jNdgdrfWCmW6vkCkiyMHmBVGe5TRf9Xk5GPDYQbrq53HJEa1",
  "key16": "3vCkWwz4jMqAU6FQ5dGtutGzYJCTm7SbUyVY8rVATgHX29PpPLor36KWi8bwN4NxgjesugZMAv7qpjVnjxRHzcqg",
  "key17": "2ze8qkYWUdr6qPeBGE4vvD7Snx8FS2Dan1u8h5SS9yo4eRP2x4899s6R9ryFQnBfidFD6xwFsr9gNu8KaNmNdYwX",
  "key18": "3bJPR5ThniToRpyy61AjpHQ5AsmYmcazs59UeYbLpfCBRGpbmBi94bmtS4xWpuUujvu2k2ixY71LEC8v2HV8ehNJ",
  "key19": "5DWXHA43qxuzfq2rZJBMpjajB27LFoSyrBGFZ5qRs7tm8e1m498nbJhhM4MP5PxG9ZsHso5G7uR1yzpdoqaF5i1p",
  "key20": "d6N6JATZbEKfDxovrta3XUu7i3y7hCfgvU72kLWrYWctxfZavvf1KzSKqEHMomMHrysj6GNFfopor93AYwGfK63",
  "key21": "4wjeuRq4iQj9BYcH2YLMDN1QYa1dEEuphAZocWWs2kXuJWLGBPpMCgCY85jiZpgqEJYbnZCZXH3E2CDTkEz5XEzC",
  "key22": "3Rojvqf4mGxRDwffkmsZAPLxJPrz2X7nV3Punp86YZZVhBgnoJFGtE83NGbNe6MPDarwjPySoH95vtdTCKixHVmA",
  "key23": "WqFwNCqFETPHFoeR3WiC46CZ29ewwznK8BjdSpfH123yQYLQ4iNWQeHEdUAbiF8mPLrYsYX2wsH3FCGq3PeJUvk",
  "key24": "3Gr99fTA4ZbsGUdXfBZiYXzVJvHYxFpCvkfxUzGnL2XcghPvriHvttfwqXSq2aehpi3GMFLruvmDyD2HLzVxrZ8k",
  "key25": "FLneTViZC34z9dK7jYcy2UdRoxTFB44VDqeysZ8uf2NVrFNRgjPA8dT1M4AmXjteba5pUZAqDha6uHUJtocXq6V",
  "key26": "2gwQzZAHbiJaaZ7T4tS9bwk2T67veUHFTXbmkpsXySPRuvyFaUsd55JHGaLqf5wxqh1G4KE4h9imZoxABoG1UMn7",
  "key27": "23Fey3fxWYNsuvNia4qEAn3h2TUgAr2nS6pJFYpUAcM1812rw3GquPLbvvTw9P6zMzsww6KtuGPSymYoZLtmgXuc",
  "key28": "4qd3kPhkZV8qV8vW1xfCYK5s7XrFRDLRtk9HcjpkcP7UUe7jSJRbe4x9EzEkCnwb3uPVibuPSHCHDrm5st8J8vkn",
  "key29": "62sat7tXitYSWjWPEAwJAr8JRmozVgJySiRMtbPoWvpmE7iJzyPcPfk41YW8pRZwbHBiFdBPmVsuuCJTL8oTEDAB",
  "key30": "3xHfbuuoZ8yS8iajq8moUVkKFdP77aYnAUroePWNx617NvjdPN7Q2H92PTATFqatxaYpZ3DSSZTdxuTRJQG1GB71",
  "key31": "3EDPJa6P5v2k8UBeSUMnPAHGu31nUh6M16Raxc4EK1au3NYcNnPqFgnTiXey7PhWkRuHmaufAdLAuy4P6mdijrBM",
  "key32": "4tQzi9Eyr3eeBvbr6WCQvq8JEwpEu7hDqAm6LV7WMxjQxjPS326W9t4rBhxY74vbFm5XZyBnziLHxKLcZxZ22vH8",
  "key33": "4TbyHsAsnjJmkxogUZ4MhteSE7nChxJKYdKo8MQpTrAkUM6tLd1dKBWosRnTnTPX4LvuMpAi1yLzPW9yg417p4yw",
  "key34": "3fRYV9maDX59RR5d1Fjjgn53GgajriSH4bJWw9eoUHPLT5sw2513QUnH6fndCt5hHfPuXeeimVQUfrnr2VkXS3zs",
  "key35": "3T6LunFPqH9dq4WpP6p5ryHXgXEeyxCEnKftoh16sFbrggNKDagHs1Zbmeq6oALSfNbtCsZ9AAYLKtPVDoRAvhtv",
  "key36": "hcJ4HuRNynZbhGfTXWA8iRH24e5TDZpU2aHo6L5TZY32UCtMXxkB1BBd6UFVLYrwWLWQKgdhwTCD1x8W21n7AJY",
  "key37": "3J42vjxohSHhM9HaaaMtySqM6h8sAjsnmcD2XDp9iUQ4hfP8xwnkny63fJXW4yTJhnXbPKsVUtLmeZ7c4iS1AV9E",
  "key38": "2dqvP6yYCSnt9gJ9BSCdwxJoA2kVGxyLhu9LpScaErwMWJbFDzkpGyZKtR5QH5Z5csNTK7KTDjXatWY9d9CMckqk",
  "key39": "5RXB6DWB7YbGsMupLzaRHjmbHWKoRvkyjDRxopzvaLWWDztPNDyLHTV3w878x27zaJHV6ctN75BKzcjASwZ8HWgz",
  "key40": "54hMygsHP6QB9Zt3LgNmgVLRhJuEvZFf6A3fjdLRKZKmrF1nNTEx9XNFzAcDyu2kC2UfyoU3pkVtBSDGa5uuijoU",
  "key41": "5Av5RLDRdt6AtyMCyakFWYzDrERQ2L3MtKkQeKag21JCdbwh6rwdPagMx9QpnFt8EhPWJBSRugvGm25cu1ifSpKs"
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
