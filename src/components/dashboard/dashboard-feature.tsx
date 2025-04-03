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
    "3VAxmTXDWZfJuTrzfzdKSSCuuVKR1em4wc7F2Bg95Tbf3z4E7pz2xeRzghrKhDtUmCfC3S2oVaUrM5v3up4unY2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VTPiVuWmcShgkkKeGpoFQK5TZ7g7aDCi35CfB6wpWbaDxC3WQnCBcW6jjRuebrVFCwmEEob7bEsjDiR9BERroKq",
  "key1": "3H82uGYP8258zsF9y4G4Jr4gZKTKxuNjMwnUGiLEvZpPTZVeb8UKBoduzjydCBnGfK6KAUTDg9fXWhiDksE43TKK",
  "key2": "2fgjmxgGjNDwMJrs1dQpwEoEJJCLoMwkvP5yLJneNNFFc13CDN2Fzkd6M7SfBEwTKYSr9vKetrAJvrSbXWZr7xRn",
  "key3": "4UH2rKkYV8mXUaCvTFkTJd6tpTzggvkEHVLiqKQnDdbW5DEYm4XKTkPH2wvMXyFn8jJcxyFD9LAautCTd38Md3Z5",
  "key4": "2Y6Cterc2PFkXYFhcejRer9F652p6DKuLvYKfcgtyDsBEqZWzNASGbBwRE1ccSYAG3dukVjtpo6N5nqjz7ovLJAF",
  "key5": "43Pa9TetmVWjq1747jqdybPBfQvVM8s7aUS3NJ5qKLsbiiW8K2nrK3NcpjVuwcwEQGQqWrBgqk9n6LBpKtnBN3ND",
  "key6": "4t49ZjevkGy81VfczwtE4br3doS1YjyAHP5QiT13SMMhd4LGA1HHBV317yPpDXQEgSZMCKJyRr5SxcqM7Bx4uedq",
  "key7": "qrfNvdcEF69CDE6Wupwv1TJLov445dWN5dyXa93FXThDHyXjEYRbWPfmhTzSwd4dCL7krJvgaW3XhgwyiQshfqS",
  "key8": "4U7RK61ca1MCV6VPHQVesLUcissq1vVVGGjHZAn1oRTohm9cLmriH3JBrkj4KDbobhwrGDuBkURhhSdxFJu1QFmw",
  "key9": "3QoYMBxVPijQ6ZrKU56Gtd4PXodv6Rnozq9iEg1MbrCGeckc6fk9ctW8Xfavd3w1Z3ejSqmMNvsjSGKG19wiPXZn",
  "key10": "jCcK3pAWdhSWmsJHeHxrKbfjwLYsDWf9xtA5PkxajYyck3w9STVpsp32NnQRY5r2WE1sVJfbgo6VaHqjE4uxSdy",
  "key11": "5iH6KrMGPRHrSbwYqMcMZaFJmiREaHeFNcQk6Wy5cQhAJk3FsjcTZZeyXwEvpetDYF53fiRmstPTHpc4yuw2yroF",
  "key12": "3aYVMFDtwNnMGyC7gsnKFG48Lj3uQtaukr9xGzSfK9G9Vv7zo1NzDhLfG6hjkJ35W8BNkn4fVsPX5c6zjwKYs9T9",
  "key13": "KYSrvZVuLfD8Q9WpavoFoPQMpVynpB4X58rgEqkbH1QMBGVGEu6ivr8gSiYSuipFKVgjUaTzHuY7ZHXbmmoz8bS",
  "key14": "aJZLjQqYN8TN9iwWHHpPnjEWirvRF4gVvz8gHfRcvp1c1em3t4DyueKrjpgBqNPMcW116mVA7Jk1aUcu1KYLZAz",
  "key15": "33EeFKUpG87RRmRtqVG81mQmKFQ9bDTWnnwyEbVmr4bsks7H4q5KvVyhESiZ8hzpuHxUcemqaSvkDZqLzmEGD1zw",
  "key16": "669wv1tPWvHgu9wgbmgJjXVLh4TinqtLF2FEGsvBVvL26pPkf4139eoQaGeeZFgMrPptPyqoL2hkTHQnMrPVbvTV",
  "key17": "62m94Gc284iF3y2veni4eM8miShkHQnNfo3V6Jtu9mmdM5tbNxMSVMtvwAwDHnpV3EL8hELHAWcYPUFaXrC82uGm",
  "key18": "5BSi1ugWyNVLy1GVz3SP1T2GD4abaunEWFfEATFgbBYeWJvaMibazs8Us8hXpKapvc8yzqf5ysFaYtxigYov39VC",
  "key19": "4JJpp2Xtyk9FRNsAaSxFbNMdfgoTNg7jhnbKdZCm1KwW2o6vJgCdakcuaUWLXPT45fdkvFjvnA9zT2hvQJALqRh2",
  "key20": "42HPH7JyAPg4a4NnG1FnKVqA5pg94iNHx213YtSHdAwHAru3w4vba2ntEoAcznch8uyS5H4JiZtaKm5WeWup6iu6",
  "key21": "4NDT5b1z6i5ASNnF1HCQttiFAW7wVwxJeivM6p6sMicHj9b1SS13a8zeyHpe1xx8DTKYc8mqzETKshLfH9T4uBoQ",
  "key22": "5xtVDHbivbuhuzz6u55DTNhxbyXb2ThqbZp3hQGwLTkxEPXJBNPrdTd4MPKnBTefKBxNemCR4ebDnBx2pkfH5HL8",
  "key23": "3uiw2Zr5Lf6ABczKA1wyhSHRep6bgCoQMBaG7Uy1bXAWCwtiWEBnPrs5cBnEWMhPsZge6JVYrCA76DK2e9fPAPWc",
  "key24": "4tnTUV5aTTVpdC95RkygQHYpC1qgA5ZnCmxXmdVUK9zjiV82yFCVYdbg33EdCUY1VB4YikLoJ9Hi1dunBsdDJXhi",
  "key25": "5HTznKj8znNghwqZr24aw29xVteHQv6pfuR1599VmNXUU1pZK7vrf7Hik9fhNiGinzJqCNDHSaGJibGKYus6KCV8",
  "key26": "4umYJUEX6mXy3iUdHVvGEyafKyHqtm5GH3QPUbjyWmqcTbkAU2b7zuW3WGzEgkTB1qGBPJftpeoyAa11vaMuJHHR",
  "key27": "5QCVqsXrNxXHddRMewmeZBZaWnCCqx1whm4VPBBKMrRHnY9GT2THNM8gQCy2xEH8eJMsShzi5vfKs9fgRz4fYNFH",
  "key28": "BnKAb7TVdafu6geL1Lf55FGc1DRHrvt4fqncNzmbyWs8veB2nuiZoAaagx4jscVPXpoGjisohqQL4W3n2q3qnqj",
  "key29": "2qSFr6FoReoMV9W82ZpuapBgGACWAhEszebr1UKm6PMeK9TLMHPyZKLa12oxokyY6ER2cXAAb7MzgQdgx9p2RyAM",
  "key30": "HVJtNWgFPiU5vMcAd8KG2uNr2sH5yZcstHjkADtBXpFFeNJHX86W1PCNi6Q9ry78MUCsmZ7qaezsCWAytH3AioK",
  "key31": "5rSDdTY3fsBw1jVykhCArkjiCVvV3gRWYNvmNWeH8tbqA1GHEwqs9TEHkGkrJKBUcBej8tNAxg3hF87Lf3oC4HTd",
  "key32": "2H7tsN8DHnpY2LPkAg6vmZ1cxHXynVffwA3tszvHwPPksKZ93WVkaPM1t3nLRmbGvKJcStev4jveg3HzsGkddoz4",
  "key33": "7hZh6WRi1EE43uuDqBFvMAAEfznPq1UPiw52oLgMhJv77RNeJFaeev8uXgb2UhhHrj5EtXwhVGpRj521UX51ewj",
  "key34": "51rrKoLqiD4iKF8orv1b5kRyqb6Whf2r41jvweB8pGpommxoXUknziVVuqv2zVwGhBw8F7vjVLiguaSDQhwGELkT",
  "key35": "5VHDRfdiLuWA78YSizFjzkaD98gU2hviHgT3CESaKHQf7WEAoCzRqutCZgawwyifsRoqdEFM6BDBag195mVwJPRc"
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
