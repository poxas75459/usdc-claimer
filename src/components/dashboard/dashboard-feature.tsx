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
    "5DZ6EXZmr6bwPrFvxttgGniMQT7kWAByyFoXTj5KZWSnLJyczqd8WsCnrcfR2aFgnSeKe3V84fJuuhET2kB2yUNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssQMHZRxeEo8p588462ntmhbYk2hn1wzhGKYmdSKRMbPZvdu99kzftBo8JUYCw1rSR3WvyWkyY3GyZNHvB1NRdh",
  "key1": "2PYVL8K1U2owEikKNRtMQNZ7AF11GRhAaefH6ML13vKpet4LtRXEBgzCiqFPWpJeEDb4VB5vCmQWtFCDz9dJJJmM",
  "key2": "4UN5qk7qidbBLAPGuxcx4wtE44LmMcTPwMXH5rUXi5kREtvwJjwGaMnvdkwTc3JVixMxykKdYngDtN5KN7965fXN",
  "key3": "3XdGGj6WctTeErGw9M2155cwHCrh7ya5eUJbG4frSnrpzS26Vr8P16bQ4dLSJaGzTN9vzQp2kw6b6g3BYV6M1TVL",
  "key4": "w9JzKGVuA6MotBtP3JWczDsicUWzohNkaD6rQH32gbgF8Yd4WQVuFNMGQGgsFbymaLei6fNwAdeRuBQXLF7WqBo",
  "key5": "5vpAP3ZnXNRPKZdcjEH2CfujjLS3nbTNgoEQNT4ieTLTRBgfhS6KQqDJEepiR3yn2nG3a68rmQ9ShHL6fmN6stET",
  "key6": "GSvPWvEkBQ4WsZxf3QrXQAEwfeX1uUz6bGWUmoHiuMzVxZHx2BmBFWYEa2dXt5ibagHHK6fGoTagxatYhFh213u",
  "key7": "4hZHVKMq48TKVWymnZ4at6VkRXguNSeJZBJKt5WytV6dFYSX9z6CmyXGeTxhU7QAdups2pRe276LSfD5GYWbcxbz",
  "key8": "gKmmyb7dehP8EE8LyoYBT7yukpvggzEvitm9NgtALFULuDERVFQvjd9v9FGW3R98BfRKpfk4tUH5NARiuw5TsZE",
  "key9": "43RrcWNR33RDh95aLeRE5n2mpe2xonvNgMnhP9mnnksibVDS45t2aF6DttksfxGyxVwhzB76vXcuUmyyTwcUeKFZ",
  "key10": "5UyKgwQjwQgoL4xFiiMzc71oRqvT7JXZLW2b5GvxfRFNJBroUC85GymcyvjVVdAmPFH8E3PpXR3eV7bH8jegyynd",
  "key11": "25QDGZh2x9WR4PjM6Hz9YJT4x37ynWkNx9dG34KqiX8P3Vd45i2qfsG6bVprpY4SJenanQoDB9LYjt3xUN1wh4Eg",
  "key12": "hAuMXdfa8TKY41Xere9dzZ1g8Hg5PiTuW1cPLmhPLCqLbKuhHJqKAKLDSERniD2h2UBA64gTfQuyLYRpeTw3GDU",
  "key13": "2xfHhXiykAJWqMoZdzbvcJZZy2U2EH8S7CtvfWwiSddd4fvkGhZTHiu1CgQ9rfqVersr55nWZ6Q6FAiNRnEr4BYp",
  "key14": "maPJUaXuRAuk2kPwgAuxHs9tb34QsBycWmUSCv4UsYbNUf451NS8eqVdePrgSMtFX3Mekt2T6EfyGR6ePmEJms4",
  "key15": "3T7Ty1wpkkv97bvaC9tsb8nLWpvwZv82zkMzR9TB2VE6xtmGTGZgxSokCo1mwtVSeKDWCqLmiP2NFn1CdS4uSqe5",
  "key16": "5B7yMSRB7TqDcuyiF3r46mMFA3WXJhfBMpA179mgyAhsWZ7BD5k7HJc4o45aC1ei2h3MJnvc2MTY3VHR98PTT5jN",
  "key17": "5wajtv1UrVPqybwRW6hLt1qA5THiyvHphD9h9oybF2LoAQW9RLLeA1nQYQgQKL55ZyJh7FxDCG6SyJGZyQtXWJxB",
  "key18": "3HdcQ6rKBww6kPmKaUEN1PcowJ92vzNYjWXNT18g3vQ3j2cgFTcVMmpVjmjrWy6KqsQhcGTTa1pk1zr32nFo7wD5",
  "key19": "3gyThdcciVvb56jkyNjQBUXDziXu85nJNMpULQXJCDCDWrVRyfexKN2ZiUVukjxPNU4w7YFw1Qv61LrqVMq9Qz8r",
  "key20": "37zNJQP9DNt51PXHpo9dcmG76RpBLNKWq6vVrQRmzybYMVy8ES6ahWdGHx9Pd4PHUa5GnmdwntvTbVuzY7WXJjD3",
  "key21": "F7nCgSrGjMt4ZVUQTHLaocqwmJgVAQFVRTSmbJ9ieY37P6P9kWuyJDs3VedBCbxjF8yNLBnxhL7EvgditXwSzqW",
  "key22": "n1yX53badLRofTD6tTNCsq945EmzU9TPaPjV72hUzLpakEmBs27FmDuRNY1FA414rUfFn2e4aPkPC2zZ9FYnmCG",
  "key23": "gWLYesrPdvdzrbR6DahK4ezSQgMoJeVrECsEz7SQ3bv4T9duztS1imbJYGsKXYZ6jp9431KkDgrHtRezBDJCgSH",
  "key24": "51MC7YzdJjc3i3fNoSmwKheTFGtPSQReEBdk6hgR5QHyocQTEBpqHxbCWFeJr9go1DMFLot29cG1YZqxnQJv9oji",
  "key25": "4HJ1i57dJSADrWpSziGZhg5wNdzSUbMXhc4WPE8JtakuxNWdFG33GPxc7MoFisssUAA92jRkxR8hUfw6JPVxCUMg",
  "key26": "65ecoDkz9AiNryAiTyCutRXVwuRRTKSsdBmEhjY97RcobUUCScouYSuN7k8zrQaEyBgn1giWcu2YPAHKf99DusaX",
  "key27": "5yFKHhTM7dA95ZDtZVfdKfMGjR2FGKVUCYsGJY2R1FiNzxNLSgu99VqoZ3yKWZmmCZdUKuj5uiC3saL3sG1gYZ2H",
  "key28": "3bve1dgmJd8VUVq97u43mBVeJ5KhUFEy4fq15Vc12fd95YKFbU9psPQytSHGyBs3nd8mSGG2fbQY1rAz29H1LVxi",
  "key29": "5unYLUfR8mfoGHMwzH59fjB1DGZvUkFd8rLBv63qB7LvToZ2ea9sgoAEPMeHwo5gzbfJzuZoZSCdkurDhYzSN1HV",
  "key30": "5cDeb359nBJuvGVvLF69dhEeE2yXucNegzBW7HxUbEpE7c8srrGiJkeUDvnPM1SnNmJdCA8wd9YMJ6RQeSbLrT64",
  "key31": "25DgdD2vNzc5L85Ctftwi6H4gXDQ7Cbk5BmYNfTuQKG2sQvZwpY2fRBYLR8eyD3xZVeV5mWc6Qd8PHiynE7H4d59",
  "key32": "4FSK6MyEd5v11PrYNRPYv4AuBPXU5EkUbCWqQnVuy2C1o7X7LvbusUtHwUrgi8DNa5bYW2b732bT4jMrcu591kbG"
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
