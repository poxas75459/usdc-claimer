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
    "52QR4WQxLBTA2rXAAiwXUS8buHNoJzX7qb4FR5gew1VQXhUZGjbgksaYMAQ93RxoWvwHoaPG9YyGb4ksmpS223KC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257cLh47LMMSqkfnaGMayaWKKrXhCoPMa7WBLNsy2RJF3idVhjSUXsQbXvTrGMWJ6gTj1kgc5YKCg3Ev8EboHqvP",
  "key1": "5tY3hnJSxumSBD9h4w1BKDzD7ppSeUW4gTrV59VdaQtCTRNGuBkRfY9R7njm4r2zhSdPB7zRMKqUo9mQxWJ6DqgD",
  "key2": "GYbhwE2u3nh6LyUCspbdwnnppAuN18dGKEjCRszytPmniPpSWETUbTyD6LNtCchAJ1cY5vZETAN59CYrxgHvwd7",
  "key3": "NKCrFoiUXoifr67N6uP4GZSc6FRBe8CgcKscDSq5zgHjr5pP4aPJAoyJfWKFHdubxc5ZL7jx4Yzmy4EpJgGTeCJ",
  "key4": "a8heg3fzo7v77Bj8A7CxZsnMYLmG4Ai6WnmyAuWiXyR465o3j7VbQ4see76GBjPrWfoVd5SF89UjELCpzUweqpV",
  "key5": "5SkgVBu2nN4wHPR3ic14DZg5L1AsBK3CKn3f8S3oDKefUmx2HGewT7tPNQ7a3x2WTYnyJBSbu4k2PEzYH4dVrDhM",
  "key6": "2mAnt5nzrR7n1MAjZAaTq4ryMyPe4NSf5iN1gbzK1idrFx14uPEyXTPo2mJtCjo92Y4B8JZKsYG5haZKPwi5vR68",
  "key7": "59tSBk6zhh2em87Hvd7ewtNpPMuyyfMw5Ukq1cLgWp4fvzS8xJ8MCVEdvueCVXBvFAt5cknZkdcjLabRPeBqaw55",
  "key8": "DGjJUayJ24tSmYtC8Wd1gSTeMBn9UCybovCiQCVAS3J5B4KM5GVXYpyfrZ5QnN1N9MfpAApMmGNZNvZagXgvg56",
  "key9": "2NC2o29w5xB5UeG8kpFg6sL7YxoSPLVo29PbkH7De83LCojJDC8hLoSgawYcM9qTcD3bWcotV8n65zcW8cSSo8Dz",
  "key10": "431JUaKGBgDvoN9My36KmtUt3HjD2YhxMqU7fYcciuQWFddY7XEkHj8sWDeYYtq4Y3Q7Y5DmBHc9FbmL1qE8cKm",
  "key11": "hPEn8h1fMapL7xPuEjaGdgzXLuUssCB8Svubp5NtcfJyC9Rqu6NTNoG721CL7PzjLb3wBt7ZnVPypCVoVEudwkE",
  "key12": "37nSu32tEJ3L3zEZtbph6Hzrk9vRJ7EHiBwhDtL6B5cKUW1P2LytvViYfFX2o8mct3zfB5pd4Xw5e2XNcseDEdcM",
  "key13": "34kZzeomUZ75jqDdJDcpbE7M6YU5veEcUBzsvPSbacHFnjNMhGW2h6Uxx84yX1troSWqMsuJmbwf6uWZivLHrC87",
  "key14": "vfatjvP4imUc8CoWou2qya4tvc2GHju1kGDdWpHoiMYNZ4raZqY1f7WYxz7Qh7uXgtP74gh9hwBaJpqrW4XSiEa",
  "key15": "3euxWhvU2BE88B3F865a62Jt5by8PfwuonCqotuM6j9EgD5W6vWTeMoRfKVZRbnKCMzwRnEounT4RSA6wVtZezAP",
  "key16": "svskgr2913ph3TegExFVQgAqFk6kifnn44zgAnBJCkeDFgJbwW6PrebV6abHSJW1tsudo5oab5kXC8caxMegVkn",
  "key17": "2qw27uchh9MZ6UCdEWA8ucNftmsCRL1S9xaNJhpvNnyiHR2y3nfTgYG3Pi4visLqEPLU2WfGPJkRGYeEBJhvvNWa",
  "key18": "2bQyUhaknPr7girC5Eb3Zuv7ASCV7xtNrRkpRS4zfXyPHtL2ibCEuH7u6xsFN4bYihvVEZyraPpy1vKHAynBpcWZ",
  "key19": "3bLZrT5FEP3o5dQdARzkbPjCozpuoq7MKTGAEt7waQKVW4afWoqQypkFiYGPTyhKBGAV4xHxFmV6S6Jud85hH657",
  "key20": "2GGyw1QnHE2phnAkqU1xFUets1LrF6FkhNkudFq4F78J3YFznNzd2m1MgJfPuRTRT2M15ybFmJ89irxD6puicco1",
  "key21": "5QcrAFBhV7jiEDcvVU9ACDeX7bKCdE87mu2gr1xBgVMb5x5ZMyEqAMbxWVEHbMXEouy9jd71cTdUe5g9tJPtYPaG",
  "key22": "vnBJH4iafVMHn3TqLKeiLKzuHkHsi4gzgxVfNEpx1fq6Boxpf4eUW16Y1wefX2sYidKUaQoLviXAn6yrGp5X7HP",
  "key23": "3MaQ53gaqbJYm6XdnFxkT7Cdb57jqZUhqdGMTjMwEeujpEtebhtdRNEmYNnbC6KXGQgjjMZdKCi9R5x41CUf9sKk",
  "key24": "qYE9dtZPCnq5WLEZTG4Zu2F6sTNY9tpBmRtszsD5YX7GGzwdYQxyJpU8XBEFKscL7kt4zqTtknE27mTuTQwGsVA",
  "key25": "4meMnQxiTS2oA1nwczLefNXpmu69W85cqf15XFom1MEwiaR62nVVJJwHv6kVcviwTNoTXEbomQZaKkLvkPWsnh4Z",
  "key26": "4x7aU4rixCZ8q9Jvs3oTTneAjmyBMNimVyxz6UrNkarVduGGQmDHB9CAKRAu7uUHBrrdyav9iGWvXqKLdWwuiTRs",
  "key27": "5PZ5bzdSqVCU5i1Pu16nhpDsi23YD8NwojiP6mG6j8mj7kHaz5WXmxmPxDptjtcfj9Q9LcYoGzzUv6UDoj8qDd9h",
  "key28": "655BfSXwfwHiUabxPgCXCfc6tZykQKJu29qRXwfH8CqPB4PFyMMA4MLX3DNwb2WF4BqaTNN3hsRQhHpCfnroDMzn",
  "key29": "5GWmWL1AMQudxNb5YqoLH8iwukfKBmSgejcjWpjx7W4oe4vwuj1wzZnN8sx3Upuwvk4stvbpXaHnoexy4YJr6RXt",
  "key30": "ZEtSibbGBTFFmeW7qH8Umz43TG9BRN1sGVBPhxXcTgDxuCez94vxGRupZcemgtNkJ2avrGY19kVNTojbZoM8Ac9",
  "key31": "27Y6D2fBsEwsDm4tPGAF7GBRU5VAddFApe4NKaCnsLphSEuSsv9MAoeWoMFXum9W7SqbD6FgUQckoK9d6UAeNcuN",
  "key32": "2CQzbRe3QitTCLuQduVyvtMJnYovnMRR5Xj2HFHT7qJg6yPG44if1XtJHG5vfa5kxFAAeJLnMDMHEDxCWsiKkWxk",
  "key33": "51NgXDLZyGM4jTiRzUUN9tvo21S6AQEF48M8dcfvJHuncLgWqt2xfvsbjfwBkmrGnJqxbH442rDkEZJonZ33LFYL"
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
