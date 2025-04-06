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
    "5ZRre2veKBze6zYBjkMrpbrLuuddmsoeNaV3YMmUJeeo37yZwgZXufT17oSwYYQqnURwhcK19backkbkWaBUr3rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWxKTXAn385eUEmXtxVypW7XBSBs26cmC7QQG5H6AJbfUCuoGFnxsvoJdF61icnS4nd1GMqeqCpk7ntroPuuDUw",
  "key1": "qzT3rKHrSM7AyfrGDzBebvguymSyyavMZUFDnZ4ovZFgb1DCMUM3gGUNp2j1pYbtFvM5u7Ux5VY2ktuwGWh24Rs",
  "key2": "4R3f1gLYkeranB55f622gpe2uxPzUW9J6QF4cjyVLxjcrT4bGRdXagpU6hsWTHBiqekSs4ebKAXMMiFefqAmCqiB",
  "key3": "E1G3vSEWn93gs49AdoWaARLuG6suoNV6hCcSPAB8wTdaPN97vSQddue8zwDYM1PaTpvW3VyUUaUZT7PvrNQWuP6",
  "key4": "3BhPkgX7frB7v6Z9MmJS7yazjkXeavxLN1TFEtteJKg1k9wnk1jiLjeXC3FY99GTUfNb64qWCTXGNosSWf2FjbRT",
  "key5": "521YDYTZjDgyCiPZAGJ7KaMr13qTRsDLFv36bMWH5yTKYRoqFqd1peKqhDyekFw9QgMGmSHrBnRtCzgcApfFcAU2",
  "key6": "ofR7jnyCyZ9QwNMxxBEzegFf9KbGv27M54jPR42Aj4zroPFdmHUz6XPEgGSHghWSky7Z5xPXxaUVvFMHUzUjTzv",
  "key7": "58LD239ckfpBpcpjzADFxyCeV4cHordAY3BFSaCpakK8PhSv4EBdkNnim5pmvfkdrTUHpeqJehpGCUuiF6KBvddS",
  "key8": "46537StbMzc2hp46E9cgn9LUApmHRqE3mK6EZXx7YUZLSAekY6r6tdrP5rRooybCd2UWUsc87o5fB3eCVirR8Fk2",
  "key9": "4NUDkV4o9pa3Xgb5tef99WZpGzaiwyawS1JCEajrsh6i6u66PgvhCqqFaGb8yx4kLF77uF1c2yiYmr7CSCQxCz5G",
  "key10": "5g18zuLnpSS5cjjbEGWSovci3yKGhkfa7BD8dGsAsLteQ78egmvgdpNAhVhgpSDXRN42cCw6Yj5urangYU7CjBEc",
  "key11": "4BfGLUuF7zNUkMDCrqi8NtVBCAPinfzsPZ9ED4VSviDvv7MpfhYbyjKzANc2aFiXrgrWH5eRT8vrcMsdQtiTkL7T",
  "key12": "4GzdmrED84jMwDyiEUkCcxbuBPs7QBpXBEhiokwanhrgRNCGxMV16iyH7p47Vt6j2jGwyGep4xuS8eh5WVmmCXZd",
  "key13": "5CcrHGHZmW1tTqEA45x9b1zLk7nR51ryeTXBvN1cYUtcy8PC893UDuputXAyZMrxdXmJiEiVxjxbviu1mZcXM5Su",
  "key14": "3xWfbbXdLnLJXc8twKJrzekcgJesooGAuyRRKAJTbrJyQJVoy9XJ88ox398XvPRF23rR7hiXe1fbCeNpz6bA6jX6",
  "key15": "3qWVKTFAjzSuNndstuNYYT5QjhYP4aGSx883gWmkbT6KMjYsaho8i5tmfzQGK2bWVcEUW8xc6UWwNxNSS5n3d9Ja",
  "key16": "4Ly3UWkhr4FCUVTrxr3HSTj3hne3PvvyFzcGRXT9Pvr59SsPhcqi24svQfShG5jk1xFJgWtNjsXci9KfGe3fHaTz",
  "key17": "57k8HN1GU27xhG71Nk7YvFdWhxGjiD2W5Zio6pUzn2NrKCYExLd7zCkqTiG5rsNYWLKrQmpLYPLKfV9zXw5Dnh7d",
  "key18": "2TxjHRaa8XFuZsQKxKdAaoWCNaRX95RfQP4GWNUnVcq8QTC5uaP128ioikb3FsTqP6mVhRHau4PBf9F3u2en4uZh",
  "key19": "52XcZdpdQAMMACkqxy71KFxcBaC3m3xwFYRonmcaK7PgeTgirHKmATY2rG9jM1DzrJ5yFKWej2qShhNRN57X7PHM",
  "key20": "3Kix4EfUxhg8NeaQ6JomrWXNQm4Dem8CzUUophtKiRrSevzXA9F8F3ZZu3vqptAAL2TFY64UzSsUurJJy7n8MLk",
  "key21": "3YhMbzMYfxnGe9nGPDPMD34rMLo7N1q1pFaW4JPJNZb2RecVNYFNMjjpknMS7s5b4TcaC2cg9UH3Qo5rPvjdnW4i",
  "key22": "5ogTrGbzyqwfAtoM2fkisewQuEGwXxMFCDuFc2xyLwwWBkZgWQ4jga4XuJojAV5kkM6vw5evZq8XJ3LZzMo291Lp",
  "key23": "CALWJZEuqCf18DJYvPJ7HtaumJz9md5eo4hJkwYRBvGKnbQpDE3kE6D3tbX8LoHKPG4TkCX1B5R6qYEkBrDKsCh",
  "key24": "3MAFu6sVYCEPQVUxHq8ootYYetxfgmhfXgY8mhRNLAgZa9epEhpow1eWV4QyVdsthv8AWdADLbHNq6uteP62xNDF",
  "key25": "36Jg6khXUVaPKugaRLRfY9FSSeWupYTjT5GrgDS4WRGVoKtaCtYu2vCZtnXS92YkrSHUm4kh2WTsACMFdkL1mRzQ",
  "key26": "3mPXWHoB2fngeSJs5ZYuUtESnNDPsLyXQx4w373vZEkUy2sLyV5HKy3ziXG4vwjCjHd9Vwyxi95muyG6sZNeRmnS",
  "key27": "3aPmVGWFTBaUnyxanTkdP9qMfL6K59TgEXwGkZPvHUVGRZnX6UDf7FjGWcDpQ2MhDe56oVCyNCtTz3abT3EHgdWQ",
  "key28": "2vFima3n9To98DRz8brohMm9btSj9qtf9i9ZHnN7A6m7aaavr85BsAUTVDDZLjH2cv1Nt2wWKowSSRfc5GwJQZWK",
  "key29": "3a7sPoUamgHzieMAFHEmzV1T4GRMtqNMqSoY3JF7XtHJYWAM9cTbLFuKYZK6i2CSG8ohTXbhWoFfBnrCQoJmA5Xg",
  "key30": "4Pzy6MZk6LJ7Rb5iiL2WiPwEE9Zh8RrpUVd6i8kuzD6JxMGZSa81AgnWotM6r7oBpdvprgotR6mmnEy2EfSF857f",
  "key31": "cgiE6Z6xxf4Lh9pzGB956LZPk3ZNrsBGFqvNdM9v5tuGbEkYfinYLXrv8ei58p2q7ywkZXm1ycn75veU4ga2PP6",
  "key32": "5Ye5AA1AU9EoTdcai74mfaHUxP8Tvdi9iFSexYSQy8HmnD9nkifxFmPWShqAJNTEyt9A3xgR9enUAmM5xDPvtpah",
  "key33": "28ozJXipqnqBvh3jgpBHaV8r4FB6gqvDjS4oNe676aiFaaCcP66AhMxh5RCquaDvJwUQFFZqJAx7EhbUEKUaJU9c",
  "key34": "5QgUtYY15mG5qrDmZTjUfsBFCU4HMBquZw4T7PnF1Jn4KkeAFJvmbH1p6GRrA6xKA6EVL72zVy3CJWYo4u2dqh5D",
  "key35": "4hxmjq1u4uUbbNpbwGEzsp6ADnAXc57ADHw96QB7z39VfHC4dMjtKkczx1iKLhNjweJuGmJN6diKa1ZvvYkJyPzR",
  "key36": "53ZiFMcxR9iaqafWw2NEZ3a865dhV2WvRDe92VnL47nXhEewVoSbZmF2DNtNuZVes82e8PAGfYd1rwUSxm4CgHoy",
  "key37": "2SWQPryHpRRLgMQpczkoVyamuyXSaxifB31wLQ8mBZYyQbgc4qcqJf1QqppDH2QREQvnPXd8kYFQ9E6YJbCHXoiQ",
  "key38": "E9Yk21DmBhhvDC1MRXT8shPkJkT9sUfbA3BYtCR5Ads5G7Pd28ALzhHg56L3v8Szrh78D9mW5AkEk77Ucww2dVR",
  "key39": "2v3FDLaR2pHSoUYheeaiNed1k3urMHgPXx3sWwZ2quQ87HNQwnBik5ShTng76wYvYd1YxEqHFdQ744G9qeeDY6JS",
  "key40": "2c6Z85Ut1KtCERskUPd8BtPJtu4PZ7CHjo4YzxdnJeLuAQkiZLdBCpndB8cVKU46u5Q4NBwDhVhevN7e3zTDixgx",
  "key41": "5VcCqvYB75ftAajfGGNZZmGJuWfT36aXax1n5Vyh7DdoV9FWCt1G88iU46nE7Bx5aMNRFYszHvcpQDVGy33jij9H"
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
