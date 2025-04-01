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
    "NRCWP5jQ71JvkS9yBHB1JwPqcMZJ62J4LCiYQHBB3Lc2jQygEKeWEUb7TSDimUbCMWLrFYy16qQSyoFdmwfxLbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32eCHSuwUr9QDg5Zx3qNwhS5sz8ULXzdR9h8kX3zTamBcFVLLsAYwCYa5jeG56ySTS9b5WLTCgnoy5hPakuDnKEn",
  "key1": "YGBMR4vKJYnFyq4g3eEf5jEfxvrq6d7gyz3BD6jcmsq7NEZbYii8akFuddyVjUEGQzN4mwC8ZLH8Asvp2nbcCF1",
  "key2": "5Y1jrKCLdeeuQaRDWXy99ZyrZBm7MiGnxLCnkNzNv6HGHTQnExyEYz28rDgMHd1GGkiERtHhpWFEBG7rwixuq42C",
  "key3": "2iJ9ejHaWmsGwjrU3fXsNibgH48Ek31omdRqpDeyrYYJwQEkKBFED6rhRN5ebW2ZUmoVQmheiAUNrdBJ8EwJobRS",
  "key4": "5co5wz688VLpZ2Vc6sYusAGMHgLySKSchs54GrAeQ1B2E22jrg6Um4ojzXhNFRbzoU6KASMuTCGQsRTddr5A5zdM",
  "key5": "K1n7N6PGYxUHgmGkGZQnw1FjNPcJYt11WpyFH7GXiwBpZKuPcZuESRkwRtVjfsSMCiwB5imcxNK5Gs3eX6nsvHb",
  "key6": "3MU3ybEoAyikjJk2gwCgAYUPJxDFHs981pL45dUAeW9GpmfnW4qnay71DqE45me3NZbw61uzJXjLjDwMwFgvBNVR",
  "key7": "3cLiAmJoHc9jRHPi9rVVCMco4MDUswWzeG88B428qgMtWdj9N119veH6h8TiNDuffETbcPeVFWNdG2e2iHmXcWdp",
  "key8": "15WZFYRpsFktT4u5WDKc2zb8BoGUprFabPvN7iqZEen8me4nps2Fa5E7XVZjv2ADWMvZH7AbqjbWx7SyrnFnPC9",
  "key9": "4GZ5fHiRgodtgKtn2aUXJYvirTMqjnuiLJcBcpcd8FgFwuisRi2sgXPdSULcD2iGaGF91qxZsWkQcguVPH12sQEJ",
  "key10": "39PNeyiwzuJiUFaPT9Rh3jFoX9EwRNrWjn59ampwAgYKqh7uZkT4htS9HAm2rVm4k6HRJPf6KVkfq7hUYi3A1sPX",
  "key11": "5uwfDWmLwdxkQR48ZQUZsjr5gK7bZiGPmmrXv1dPJeYSQEHKcPhcFqHwfowGzsGXALu9aPeHaLYmf62uJAFHaYLZ",
  "key12": "gXdURtAU78XvLD6NaWyiiTXmEfp9CBxVXv2GwaifhRHT4rEG8nwKCoCJ3kPs3417SeHdU73tG4e4sBzoyVuNwdE",
  "key13": "4EMB3i4AoMXeKhgQNaRnVMcZBNun1RoQ3PZR216EiFBq8MwFSQSDsB7r1YohkgWswvPAPP12ivhnYyTjtcQoZnbw",
  "key14": "3y4vNdErshEDYTLoX1D35hDoCRmgkLPJHjL91x2ybsJkyuHpt8izKXFKeywqPdaxdL4dvv2zpqbMH8pGSpKHTPoW",
  "key15": "2z9ZJLj4yubU1f8fKAXGDWgm7UHG2pqE5y5zuRTAapPc5hV4JTTHS9f8VYgLFFjFVDaN7LTBA4msdreWyoxFiaKA",
  "key16": "WMuhFhjkbTQWo6aAqTpQiNeGoZkxauUkeMWivFcrgcCJu8UpMjLwayDnPrGRzxUNgGySvyBNAsuRieXXTZxVCSc",
  "key17": "2m2f7XUz7sMz1uZ1sR2niNhyYhhAWGM8KFQeTqjQkFUXndzMPq8BmSkL1Yh3sUuHqTkyg4E39dPmiU7XSk6pdmzb",
  "key18": "4xGU2cEHmxGjt3M6sp5kiqmcBiLkiUwFKRCiNe326QiqZwcMrgWqPiDM3c2A6BMw9AuJUuL39Ppq9ih6zbQSbrG4",
  "key19": "5JPJV8JkwuM3Y757PbTerGK15Gv1vRC85Knkh4b8uQkTpYoJyPdW7nPp6SVxi1HPqTDV8sVQX5NEXjgdZUPKdM3E",
  "key20": "2fXqrVuVt7LL56mxTPHMLAk26fMVSHJHCVLkQbfReh15nCyLhDr8o6XcuiYZJwehGMiNBwJmjEiQ1wG3VKvHAPPM",
  "key21": "3HyMJcYU1WPYCTzcKPVc5Qc3KjMfp4DKpF311GCYujQmjaQGkSzFcSBgzpCJcJKFRUgMQG2PGCWTcd7y6cYEXkmJ",
  "key22": "2Re3pwitKz3XfqtsF8Gyc6yYbYhgSrBdHKLtxdKSzPUHM7BLKoYvHYG7h4V2XkgZdMa7zZAP3NhVGR3GXaJiwwLa",
  "key23": "2nfmn5mkf6HDX3Q82ZzYCZmUV4xNaBXqB37L6uxXBaUsZPLzNZDHq6CiTetRS5NMbGQvtMhp5umQVs5K93rEsBbQ",
  "key24": "4cbxG2nyqLX7eYeptH3TtGfKGgDZqTFgdxo5fbfAM1qkn9dBiWgBhediN1Cr3ct1VdcbscjWwNP7Yzom12gmXQcN",
  "key25": "482gSh29Zho2uoweMTHPjMfynvn5u5kuhJ6DFKEbBW57BKbBNegVQHgC2o7dT9KhLapCRFsh1qgieMooGG9FQ8UT",
  "key26": "5MotB4qCmwGaR5q3LHuNDfuaDjLrq2B7GJSBvofCn4agWPs1eiQwaCFWJmy7RVaGd9LfSbbgSZGRd5nXphfmEvLk",
  "key27": "2HtMX6kWoCeNJP86Kyd2knAkgPoEio4n33u2NiB3qNuxaxEPSdFoD7MF8VJLhWAW8VFbGcZVqPwLwo9eN7oxGdrF",
  "key28": "eoqNpeH35stDx6EU155fw2eX4FTinAQVaZaPArKUkgf8ML4UpzZphKejd6dL9h178pGGPkTfQJbjuXH3ggTPhxy",
  "key29": "4DqTCmvfSaf5UYMNYLXagnBaWRws1FsXWwd8SiMVRaPphMpyK5pj21tPbF65bKHs4KyNkPJcSBRcnufv4Mp1uAMs"
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
