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
    "2vhMvGP5Vwcaer6KiYL9iQKnqRKdmJeuQGMMJL1ggiYuvSr6P5qrGESZzo5uGe3wXtiD1adttZyBWwRTj6MJNYUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWHfHMbUsvjKd77amkqzkFibTLbUT2jJxHb52aPGAyuBtgcUorqq5gUNFw2xweidnV2faC3qWJMgcHrcJHs1XE",
  "key1": "2bHEP5UoACosMZmg5Lfb8geHLShd8HpL7vCsLPYqEoCEtot4cdCFTE4qkMqg2AvCWFt8dWyUafqnWzKEFyiyhkG3",
  "key2": "5xwiD7CvPKFgZTAWroJDVPUBVuhLWiHLgA1ojAw3Ln6VyU3dtdpTVBd4YeY1jWaMixfhLCYdr7CQDSjYdiLoHs18",
  "key3": "4EY49jn8JomFABXceu1Wqu7JcRqzhrfPic4jq3UPbqi16dFuhnshp5pBYU3LXChvDrS5DYKLVWWq1prLZaPzPayx",
  "key4": "5Y4o53Mez4adxnR5n6czFgwqhobzAfdfHWXFN8c3yRvFt4L8MudHpdXhWFeP1hcsLtCHEZhQPybBbmcNr8puqwjr",
  "key5": "493CNj6oY8QWPavxCXRX6ZUWP4oE7NGYfYetvdsXcaBNcTTCFGZjDnfFFbPDUTVGjc3wKA3kFVniFpoy39YqJjVV",
  "key6": "wEMKawiJaeuuZwbchW6ZT4f2piEVud6g95eLZFFqdjbSfHfcmK8aJQiANnkVPGnuYn1uRKyoSufxACgQBen8qrs",
  "key7": "42mxjJhc6gj2Dj7Sjm8rYsL7XwWe5gR5aguUtLZFuTo3vhG3g5GFKpiHuLsyxBGffDiedJdW4jsZ6dCfjrFbFsdG",
  "key8": "E1Wxmcn8WL2oLrUozBoMpv6eQmRgtPhk3ikzmoYLGgj63NirzTSdnVCpJtxujdsaJSSKacykZo9PMnUrXVKozcd",
  "key9": "4XQVyJA3FqyRAZqqb5sEFsuZ49HFqwqqEk9KH9VEPLBTnmN2c3EeRSbySJtddwGD8aANcyCHmV2foYiW7JhV5xnz",
  "key10": "2AB1Grx3j4Jhr7hincMPKgQ1esrJg2sKLja7S6nSwNYv5BU1f5qQNCBwcTET8z6MrKGG6suDE9Zgkdx4VV66Leff",
  "key11": "3CPKC7BLtb9cZrA9esUY6yiJ3hWbyaqLGYr8p27qeGp74mZd4UXDuk9q3FnueQaMCoYUM1hqMxfiAmqHsVgep3mK",
  "key12": "46FuPRdhyXHyzajqvrwgGkLmRP36x8rd6AwePgjqNjkeTkjTZxWzfyssrXiF3s53mkcoXeL2sUVBpFunS5XbRC5Z",
  "key13": "29uheLYkttDq7RvJyEFfXEhwop5KpBZYD132XeLj5UUZcUnvJewkHXv9iA8f8iby6W9sMxSEzXUgL33CxLnLKSuy",
  "key14": "411FmSNZNNETrk2d5J9ymWxGoFin2iqj9ahwgovXrQJUQiguJ1W3NHXWpPZASjBU5qb9H48YjTiM3FHREEczL7J7",
  "key15": "5q1T5SER6H966b3EVho2muXJ3cQwZ62PYYpzUgdHgjJmhYocC6QPyykaRq3fUWXcTZfvhMDW9whcFFseRXyyUaVT",
  "key16": "5JZH2gun8bJhe1m7y6NTxFBYKTbcHn32QWyY83h9xPsCdf4FPEvRKUNqcGTcgGQqEGQSQRp31zK9f1PnFxyxT6ut",
  "key17": "4BvC5Xod5nLZBjeywqV8H69PiQqqw2UBhLCpgL6RaVGk5TFMNYkM9FAhZP6PoNmzReVqgQVX6qvSsdZMpEJuLDWD",
  "key18": "3ynTUyfGrf7SeizbtDKq1BLD3CVJTVHStVQsifNRLgYicUdydAw7PdUrZnPDJFSxVsnVrwMdBaTTxbuAQsix1adN",
  "key19": "63UCqVMJzQpEHgFYaaKZT6u2pEyuhvnQcssDxGQGJywhCFo5NgjPwxn65TH44aPgFKptcP1MDXsS251xtHzTtwYa",
  "key20": "b43tuu9VNnVnbqAY4XqrFWQMmnwyakAGstgXwWr6gB6chXjkbEmcKez72Q2EpPirkSnJUnxe6NdEwKbTNgZbJVs",
  "key21": "38AR4Rb7tiobAswTUiYkrUbB6vSK1TFTgUEvwuh5kw39Vaukk1FXCUq7g6m6kYRsYUEfFGhqTN4bi2bN3T7BtJCb",
  "key22": "3xT3omjSuomoK1e3zb7WEjrx5QcMH4Xm6caLrQAXsYZFKKsq54en8HrBK4rwbx3JCFmJDJMkAZHbP4orpGSCHrBF",
  "key23": "2TucxNcdehwy8diQuHfd64FWdUUo2hkDFUtmB2wGL6VNVNLujiUhMNqbcbCqTd4ANQk2ghaqwvTbEDF8fE2Ni7nR",
  "key24": "3hRYkkh1wtPVwuxMbCo2AuSFBLES2BEtPurBpTUzhyyoG8mnw5i6YAxGFWCrJJtJCeXNt1vhXs9g5PSH1dUTzduN",
  "key25": "Q6scmoZkvDsPyw9mQurML4NwQBJv43pCmNofMtpH1jUsooJPeYqcGDBZJE4387tPCoQBb3exvNeffAKsdTSPXdc",
  "key26": "4RWLnkUTpSkbdWbNoP1LMg46dzKzXMqtVAXQoqrzVjSNWbzH3Hm7sJBBXNnc2oCSueG1TbN2yrUpwBRmDZS99DEZ",
  "key27": "21zzg5aH27oMudmGD6puG9L8GTZb3oSNAxNG3b77XbZY31xuXRjJ8BHGuJo4V7vM1yvXQbpJ8kxeax4ARMpD87kq",
  "key28": "4NeRgNQuwUhymFqLabzY3bmSE1MmGT5prRzGe7kGqhJD43SFgT5ZrX9FoJygh2KHFFrdmUc31x3HPyHvXHxB8ZSc",
  "key29": "2jkL17aCRbhHXZG4kK2aCiqVY3VPbcpse9fE9KQF9hbCPG1BgKLCAr5mLuNLrrmcrYVdrY3M3MBcwrqnEyg1mkWk",
  "key30": "23xEUbsVkhTzVeBdVfbEzhk73T5qUH8oK1MWf11me71PMiFeWfqE96Dk1oPZCwAWwuUwPsNj3PkKWFRroMh2UYrp",
  "key31": "3axaenxDKF1syRnHxSDkGoJHwzL2JT99gJM3REpzR7rksJBoG9oeCHgUbPSrStateJceV6ThC6tUrMUYMkdCBDEP",
  "key32": "2gv8K3HTCHYQT8kMVDM52hH8ykBcScm8a7zpgXeCww6jgzWZFDEbqZKCNxw7jT4Ma3iSn1cfcVozMpvoigy5VrCK",
  "key33": "3hjsk8V5cGjBjVQ8zy3vHZM3JsEAF37Gwsg5Yhxyugs2FnFoSwh6m1v3qHodP8VGxaAJLscdCXxuyRcb6ZEtn7jS",
  "key34": "4W5RuqDnWoEMh4j9nLYUUWfrBGTxMxLpXCaBydqnfYDYusAXbDbfdk7jfYRUEn8ZnyBSw8HxJ4Hs9Fmw1xRowBhY",
  "key35": "66Gg3msoUK8o57T4wdPxetJd88anPc1nVA9JgX2YugS3U1am1wyu43yZEukAKLsQiyDfBGhA5x5eK9Ey7Naoj6AC",
  "key36": "4CiYmbGE4GpfrZoAUn3XjwBYvBwoffCz9ajEV781ZocLeAxmFGpxvxPRDgLm8p8BsQbeiyxHmJ3TvByeZ7meDdS6",
  "key37": "2JriMCehfEZBSQ1ntYcQXjPXe3f8WPRa33AADcYwaLtjN6puaijyzfkGkvLTVWCgVjh1y5XFADJot5k2mnM1xakD",
  "key38": "65wzqRCUGqi3vVkj1Ki7tpYKcFquNZLE25UQnfqzbJCJiLCG8UCKcHJSWGdv14EYzCgbN7AUSywqTHG1EcS8YewG",
  "key39": "CytHuNNaqAjr3pKFxNRwnJi1U1Nzr16rFJx83fdhjnsCtMdinJGcAMLyxDwAGxSQbTwewKLXzEige9eg4gNrSv8",
  "key40": "vfe58MoWA4V7LCJrhxuLMfAYc9WsLDUnzBgW78Hs3iSvCauizKczecRGThoKzpKjGhPms2cihPcB1DwPeHBxPct",
  "key41": "3kLPSwNoTWkto5mFpFCTM5yfSRLNwvPbJnTF6GKdUmd5e9T6kTeqbqfBahYdToRYKkfkmgxvyFFzknaoP2JmWa2R"
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
