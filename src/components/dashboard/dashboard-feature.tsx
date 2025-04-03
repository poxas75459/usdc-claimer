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
    "59aVhxeVzn7rztroPrXV7DmKoiuEqBUUfBR4yGZ9xi2ubnceyBbRK5GrwsedcdYGysB59xPRhP8WLnK1GQ5EvC5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SectW2nXhY8Gw2yZ1hrBwJbarNuR2cKjYh82nuiwoHFBcBBHsgs9WVWyXdzH7X4eZwnR7EN1FsAi6qkJ4if5tXN",
  "key1": "2iMLFbLihrYcxXAhF1hZqf4wVPTiEUr3mLC9tH77Pukv8JsxofnNdwyHzQVaaHgYidvJxdwwwgV2Z6L5PbydAbgb",
  "key2": "5ExzUWxWqVHNZ4ipo28H5EZUaL2ePt7mda9KfY4eQcEQsLGF2H2csR6LKCfqRJeJzMuGHjeQ4Y9DVzeh7STwaRH5",
  "key3": "9QCNY7ARHRY8qtbux3PFD4UBHwpJEeXcFfwcUA9TJgdvDLnvrsDvdM1SdQRY9DKLKKBZovjENTNUodRyZWd8v4s",
  "key4": "yfpApasTx7Ueotidx9K2N6FoTsX8UrTrkpSBd4ne18jywkrdjWGS589D6tM4Z3CHjSzrPUYFNUjot6QfSW6Y5Xn",
  "key5": "4Q36NbZ1xMdWsMkJna9VDTh177hbyVvMDm7VcUbDRuBCLs2TejtzKukPCYoj8wAubrcc8Mgy9LUmaAThxwkkG2Xy",
  "key6": "3252NzFYewc48gduKSfpFJWGUc1tZv16Px4G5ZNaPRMssZQ4b9dBukoLBxji8bDhWB638uv3v5o8AnnkE6vFxpxJ",
  "key7": "3oGiE8Bj2VKvjLLFCQRaQ7M2QRTSEyeTppwMc9zbf3LC3RCjSWqmvEL4bnqytZhwKkrzPJd9RennXWahyJFAQfK4",
  "key8": "3VJK8baS4scH6ztA5i3K8kqm8QJjtGsUqmsM8iVbkehNsYLTZRX2y7QCFA9L9QF1V4A6FRAtoi7mi3xpCK83gho",
  "key9": "51pyEYFdGdBJggWprh7aM9DuZnZVPBRvvAfo4XVpmfFFqTcsfn5DQQR8TzjC6YJ5V8iMspLwgU3XH4sv9evc9ewk",
  "key10": "64kD8KbkajXjvjfRw8xxmioZpiJXMbhH1A31W5VHCLEimM4M2H7iFDTqWzzd6MgZqcJ51HsQrBiapgBqZzBc8p5g",
  "key11": "3WCw7SLTGKw2TnpkcVqvrkEe83HbYdaNJ8XkGTLNedtbjcquDPsTH2hGDhfU9P87zvXfFHNH9UFiMztBNmATHGK7",
  "key12": "4ezc4QPauFuMMaepitF31taZZwYjAJehEj5TZFb1tboxUnK5CKyEJKhqTyhAWB5HrEPC8MWqbZFzQJBk4FRG3v5T",
  "key13": "59wQgzW9UhyQT3D1nUVU4MzwCpUGvCwaPJVfdMmW5ycJd2piQcHHaaQrXH61LiABYHTpTtJMNyCXzk45wNVSERuy",
  "key14": "5SdX8oPh9g1o4ZknKzNRNrd67m5xCRhmm3A7JPwFxCJidA29vPYM4rw5LDEAx4VceJTQAKd4WoHWvbzR4Jbratar",
  "key15": "4R1hBxF2Wk23jVDVEvJvFqbrsoBxd82CSZbU4FBbEjEiYq1t7mDi99vGYec9QXuT2T4kvpF3iakzDFGtt6d6uvyN",
  "key16": "5pXvaRZEnRg1i4JbC9QReFNkD2rgqd6Zu6HS5bfa39H8bZ4FXAJAZrdRDzRLPL9XVqeZhiETVgUusabNmXZdceaG",
  "key17": "4mt6aCf6twuDvDcTqKLLYMCp3RhMWBtqmeiCAc55XK8VSTc3fq6XSZU9riD9zEEW4o6WLHdp7yKzzviotH9mnqHz",
  "key18": "2Ab5pQXSMwLo1sjTKrZpDJ4kTVxM4AXN4ffQ9m8ZpXbHXGXa1mCuVLAvvT8Zqqs4vJSHLP5842kig1sQaieVGZGC",
  "key19": "4canhXWUFVz5cN52soS4aiFa3S12EJ5LP7zDd1EgbZXvJDE1arq166MBAcQwPYqsA2VGZGVhxsCSGwShhpGvL6Ji",
  "key20": "3Qo5z5tp1G3pXQSSzaVdc6RkWzZY8dYyBYzRmY4B46qgsfLhPR5pHUJiWtA5m6boUirMbDNpkLDUiJ7jDzM2NbNB",
  "key21": "4NLJ2RksWsiSWDnDx6UvaJYAFmNoZXeWTiyyPJD21qyyLeuUuE1gNas1F123Ltyx92Td3BocQ8JqKKMSeFjWp6vE",
  "key22": "4ZszRQYPQSpD815p393cTaKh3obTScw286U1ACCHTteamJyTL12Rf39kiAoouwNayVD2GB6ZMtVZt3nLwk3o6fjs",
  "key23": "5irErJHC1z3ayfRwsCYHJ6JkSN6dkp8QCeMMpG4jf9iM2Fv6gU7bXJmPd1h1BrZPSdBLM9Z9HhorcfCfg2w1A48F",
  "key24": "54T3r9DpjYg5NJvfWRehH2aQJuuyyZ5bTZLFdmt8o8eykXUoEQqbdbWxRb8KakE9Ayz4aZzDRLZp1hqwmiF1VofW",
  "key25": "5BFh3t7EvneC91J31RaV2b2Hz3b5L9tXPqqYShvpqzAdDWUTwXCMd5FHfxAnbAq8H5ApFutD22MvfvXwVdEzcb1b",
  "key26": "kAEafNmxAEk8n8pQwArXyga4ckoiJsfWQk3mTKAe7ZDGEi5JYYbHuDFeFZUuYf5gRbde9h4YjZPywJB2i9go9bW",
  "key27": "3RyrUeF9wunGnUks8JrvxRW8dZ7aYP9n2EhxKk3tndgs1CUBnN85U6e4RkvUmkgxkaceYzDiE6GTJyamUT4hzFid",
  "key28": "2KLZuqcoCGC3UE2pVESoRQRo7y5aifyV7tY8XyW4znbN4zQ2jiTWuMftdQ1mJSvM9H5Vxgb1wVmB31PD95zqsEU8",
  "key29": "4fpffgGsPFaNqpUoMiStmSBT2icnmqSmMPnBtsikG1YMntK544uc2yaGbyiA9oxiuoZctNzi1qvtcggw512jVCUf",
  "key30": "4cocVTpj1bSP4hEdgPgR4nyMy2pQUEER1tNpfN6gPL71MKYcivHvznfUJm36GjqWqBAT9aK9QFr6nmvygosAjnfQ",
  "key31": "5NMASLeugsXM38FZtZkeDRZkvv5R33ZjSpSHiXv2DBzfyi5SNQHhpaKSxgNmn5ToVBCiV9sg6nasvECRuTNkgK9r",
  "key32": "4XeQo9MwFpHLSa6DN5sHgYMwtNL8zUWEbDZ35GW6XLNeSn2W4D7QsF1S38R2ApiBHHuHkcbHGBkuxwFCsn8VKEcZ",
  "key33": "sdwDy4ZfRycyNA19qubt1MuLorBbKGqLbsJw7TNLNgZW5JM25TrzmX29qqx42SQQkp7po33Jvc7qYCvQeG98nrj",
  "key34": "JRYf4mc1by9DThqpcY49aPo6reerkKhEJ9NCisGd7L8bc7HNN9ZMYkQ7ZRPAN3HvemVeRr2S2J7V7AFB51kpvSo",
  "key35": "3JLizbmf8wATakDLvPQsnUNFdMTCXM3QmJXDWKzVZKXZ5dG8HYREkG96p4Zi57cmU8bFbvtDX22J86iqUWBW3cZs",
  "key36": "5cGtqz9aV6D6zPsfY7iHs3ZqPNeqA6XeReY7YpNfUxNihdjAFrzcuG8ppELwXyJW9VxZWyBLqcvW1Wy51HoiFxPE",
  "key37": "UGKaCEdYnG3eGKtNWhwQGUobBSywuqwt1WsqAquzuzX84G94xT1qNSMB3GxbZGT7mNT42AfgZMet2YwgD5BS788",
  "key38": "2Su1u29pFuC7Me8XwhdFgjjGYjkRYhqR4AQo1pT9vS7aFgWxAJzQwoxjyScW8wjJCMfdBCafohMX3iB64iKWs74T",
  "key39": "5trcmscjc42aYucv5ziG8kmYTax7U4AVYvh3SvefcnEBJz6uRQGSUqmjVrQcq5APBu9gbgtPQJJLZBPqmQCMaQh2"
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
