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
    "4LSDHQRfzmCseb2743PqDxHUnpGX6CWTgDd7A4qUmpYiwuffEfggRUwy3HLjDqsKyiYxAdjnwmcM25pmyuBusNph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "igxXikDn6wMV9WxRyCveU6H34fwUJwJ9J1hjA3RYXzpUDzizW6goVYMiH9PnFNguNKDRYwdhQsrJ2gxe8DGMKZX",
  "key1": "3trqQqwJv9pgSc9DT6fFgSRA9fhXj33ZyFJpTrqX24wrGeUqjFvM3xuCBoAezmSEtaUFoYQbUTKf83Vnpc4S2bnE",
  "key2": "4WD9gYiKEk5peSK6LNrEnkHvZX7Mj4UKHNvagZCsYzFvicNkPtu4aBVjYVjCVWm1PfgDpEnqEy89Nsv3zb8zjabY",
  "key3": "3GRRvgLvU88Aqw6aQRHXPZweZPVWBQzcRP8yx69AdTD1XZtTar6jetCMte3rEUukmFuhQYXLetqtxr8e94rmrYRM",
  "key4": "3x2V8N7bewbo7DsbL6hcRBcquyZtqtvq3RvBZVZ8iJqSmPN7GjXT1VFabELPQUwgrNFKFmVtpkgqeFZcCGw42Cqt",
  "key5": "K3iaDy4teD8QeRoZ6tN8oLgztcuPb2HyAVBvprNtDkxJsXz9mBvMUDayrMQoaVf18tKnvnzu2P1gNSTCxUBd1vD",
  "key6": "neKde7RA8BUd5GfEqyfSVS7WCrwbrUbAGFqse9ne89syaCpjUEz2yoXTjgVTiW1jKhAzGcBVNDTMhxyxHXxsJFk",
  "key7": "4d2mNMs4jUAkoqY1SC2r6XssPFLYDQkY4gyRK1N2zvRnPmyCzdU8EGfGJWcTt9tTJebhtzKH1ja9DBmk4N7q2La7",
  "key8": "3raqN36tSJ5FRSjrSRPUtcaWu6rHivMo8Da142gwEngo7LH7bk7r4sQtBzZZug3n9am4BcZTGmzbck8HX1gB7P82",
  "key9": "UkVm8Gf6VrfSDjAyQu9vfDDyz4fXkneBUPXHmfJz9e5oz4A5PrSW7p9oWNLQhLkW2nqSUC6uQAaQfnydiivsTLY",
  "key10": "4cNU8KbsZ9eV9w6SECzkp8ZuKhGQiDecGGMmjWMbjLxspfDmrWvJychoYKHhiGEBGeoczDvL5vqtgZmXDuxS7vpU",
  "key11": "2QpmQcznetXPdo3FckPhRvJF716247bAJK6EAaxCesYeZuz3DPMbtaD413cGZ4wqXCD9DhabvuMeyTfAWF9sKWFR",
  "key12": "g9RWFApdJHjcfPssknLaDbhnJiy7i86wdeMXHA9uyo9kPsmXbdWrreJ9DhB6o9AQ8RqVYFtnrfZrvZs6QRNuEPf",
  "key13": "DSHqWd9d2hq2gZJwj4YRfr8hzQjRNWazbxZZQskdTQtk6mvaZYFqYVqxXNbvd2uL8S8bQozi3VWpjSBcjegrjJy",
  "key14": "3ZMSEp99qM2UMj6VkHcpceaKkQWxUgh5TzkghVDqcBahUkoBr14cGMWsC7BESVe711Tn6GXsm9yzaLLN9GmrL3bP",
  "key15": "ECotFAh8ugW7M1d3hfMq5dkchAXt7iaZB7ZnJH8YxkXtfz4kWEXoMvEMsUwkbT9uLEhZo5E7KbEyWKkvngB8WdW",
  "key16": "HYwpi1jwcfq4fZkD85JFybQV7aqijAcb7jETK6ykjbxa7yPYNRZVB3Xc4JEGFPBAatLvqqKK9UohiaVebu6AwdF",
  "key17": "4ZB19cSKudoxmp4oW3YUy8cyreteV6ssYYRYfWMZFGu7HfCJM51eWDdE6TKYa6HUcQCQt1WAVB1b7FvV5susg7Uh",
  "key18": "2Rchn4srimpPPdwV1YWPKrnxZPCpiEgh7ZU8zLAxDaauQuDiLSziC9c7Taca4uHvnc3kUNM4ADobR9EnW6GbGzsB",
  "key19": "24vFdBA5oxNYSar1vqzRmDaDiek3dWC9NUYBDouK8jpHjFNc3fXHgnL7p6xyjkyHKQDTNgfccq6G354KNnZMC9uD",
  "key20": "5xp8qzHTx2pj9bJyZ9TeVh5PoPCWFoXxqZCv3vke563kByaxMN2hY49R5MDKdR4BGhvoMviCAqLNBz4bsLboff5N",
  "key21": "2zSg4JkhwzaSXHe75KLZmRvWiFkoWuqXjYtmcYvDpVW1DR5xMaBLkPXoA347A7qGYahm4efQYs6rfZGhUdNNevwC",
  "key22": "5R65qSdDMf5Thg2fScKCuC4RjeYVFMiQLtTUiowHG1NDgdrYwREFbzCeBpbwW7VAQxdgSFTDmvZpXGoH8yMv48cf",
  "key23": "458b7sKqnMkxG3Nkteb7LNxrCuYTVQiuvrpa8dVo2xTeY3bNKYTsqrGAtEXmVQRQDD2FRgacq7ziF4Ah3yTR9Hi4",
  "key24": "5zChTJgiUpUkQwRztYpc1K7wpAVGqnYBNU4ntTn5zKa83osb7R7Y7ykC7Ee4fpDpL5G7pdWhwbwFHmTw8mKkoro5",
  "key25": "435xHq3n6Bp9jrQY1c8JwkqKpGVmmMzhRKgujYVJmzixJLrEa2AVrE4P5qVYGHr4sdUoWDz3HgfdPbWeWuEEmt5R",
  "key26": "3rxJceQKUHb7iRiz6aG3KfScZGx3r8xxg2aJMyR3f8mchUReYYDRMX9DBRLGKdtW7xrabZbFBtV1gJRnAVUmVnUi",
  "key27": "617GBjk9nGAqu3vUHL9hUAPGhUSSScyLsucNepZQG84ZY59znMojL7a7DrdJuKpn2eMvisL62gF4CVmPgZR9WiS1",
  "key28": "4M4ZEdHUNDfVpTziEdwZK7ERf9uvUnLPpL3S49Hgjrp7HnFiHGmD9go7mvRBHjpW8mfZ1vsa5PQp3As3xVtfNrjt",
  "key29": "2PubXBd5vFVULa1jbBaa2ihhF87JwRLJSaWJX1nhB4FYRZ72CJ6HVDT1P5biZQY7Yp5NotyVYPxiS9pjVraak9LY",
  "key30": "2mLouQuDh3d9KJWgut4AgYES5HXfJtpnn2PZkdCcjY9Yfazp92gDV789UYTgMarfQTJRU1QVfiuuCoKTMkEL2MiF",
  "key31": "wp9K8Tf5ptjoRAHYQSGpP6S9CRDERmwhEiQbtP8pLS3d4QXeq3y4LSoXhSK5UouiHACAaeokttArroiCruiCrGy",
  "key32": "34fWJaMvcWTgdS6cWRGf2MET6KDj4N1P6v7SYno7BufAF92HbpXo1e53v88hEbcWS7W6XK4v9S2hVSknwxHeDUgK",
  "key33": "4EhkZSHqCLzXNXdABFfXA4xS1hes1PgpFkFtF8ynyKrwe8kPuBCeashc1eaGcKJgJKqNLwrTs7kb8dDFm8kaVrMe",
  "key34": "3HF3qWHjmpbRBy7b8ZbJ7bFrJfWvBVKxvt9YR5repjUsYbtR2XN8g4nFArY6v3iHGNMLxBtX7cYT35KkKxHYVyEp",
  "key35": "56kXuMMZ8VutVBmtvHH1ofj9z8PU8Hmyqvep969EdRPoNivzLBup9TkZbRv7LKyxCcWZ4n8vt8WAVKu5sSrA4PyF",
  "key36": "53so1MZVrN28MWinsSRVj3VX7kBBNqXVPAgmTr1T8nriht7sPsdFpFiNe1JdL6TCeSn1a1tdDG1rH3ux3hLy6LTZ",
  "key37": "5DJLtpEM8LJnhxc64ymCLYL4N4TTJpChPdHcL7kBxhCjjxavLvfnsxE29NLTivvMQsMrpPBiiPxSZHB1HsQKKKa",
  "key38": "3pRw6gHtonA9i2MaHB3M7DYWxBbUHrcfK6DckdaaYdBdkTZLpyJESWXTsGheWgGcHYQk7XD7ymRkeA9bnaCXaooV"
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
