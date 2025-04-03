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
    "6334fQtgC52svg9ZZzNCvBwJjLX1WegbEygE2FjSmLKVRwJVk15zGsELp2DEz3TAmsR8iJDmCayTkqSQJgCiWfsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvfgmNMzPbNUTsbYycBU7J15YfzmowGqiYy9v93kz39NCAjwcr2cJRRSDxcERM7KLCdsZRPeaTt2u9kP6XkJVqB",
  "key1": "4KbLe3VEZvLrWzqmfdrcckh7ZairexS7mrNjCqRFsNUbhabyveZXQpzgRCrwogycFe7r11ifguAdcUdpDgX5hyVd",
  "key2": "4KpXa8EqLtvfwf17ZbzQ3uFhfhuFxGWkjgNxrc21xNsuSHE3X8xSZjuTFGNcWfy2wXEtweja5K7Gv8eFQguGcFua",
  "key3": "4N8x1kEYRHaTCgYmRjRXiQfKeBesjWM1DCKFKbAF24QRuiqqmCYKMdfZ5MiMfJUyvcHH5pH3rjTQ11cB4tkcfL1c",
  "key4": "5vhBgkEn7Y1R25U6VNUgYCXV62Rt5hdTLfy7zcYSqFXzPwzpvdcyBQ8iddM88Bybm6ek3YmFvWUhet8jkRX978od",
  "key5": "3KKHp1TCeiAbXy35E5Q3SDqqky3G7uKEwZiZGo7Bpa2wvebBq3qjH1dTbbyxurVqa6kaFsPctw1wsaqJmSCEYwbx",
  "key6": "5AYviz1YkSX3vio5LbNhGQ4UTYvBMamdfwUktAMAPCRZAH6DpmdEAASmTbEVP7uVanCgzyq16srnP8ve8WBtry5b",
  "key7": "3mkAH16kPwUHNsQCR23oLKCjbAYv8Hr7TZJEiWv9RxywD7NjyzkkRE7WcSkGPa5bTRxr2J9fE7i15CzRumq2wT7k",
  "key8": "vRY3yZ3Yd76n5pZGXrQHS2qFoHPh2Qmf3XLR3FCHHbtzkk2FNiEf2WTx5EgSEqzoLNXr6nDD83GK5fadWCisT2e",
  "key9": "32ZBDW4UhhAP6cdFSbQxeUzGRRAgvVA53rwxhEV3FMYLU7y5PJBwZgxYMSZqCmHhDb3ZnAgDocG35o1pX9F7dSFK",
  "key10": "2nkkxkmj2T2iYGopNzn321BVLsfVirCSDTojb34RNF6p9EGUdfhGHhvQtYZ6DRZGo74TfiH96UQkis8mPSFUXLHN",
  "key11": "535eKndr9gBfGaRCcAkh6aB5bV5rkSwTGqEz3JCwsgAdAiP8qg6Jx5Teg2Czqt7QpBaBbUkTsa2eigNHCoX4u9az",
  "key12": "3td3jeZKcB7QzL4ebcfoiJttymjbQMNno8ZtXcZSEELLsCYKmJ9sGAGjrnt2LXjWg4hdkKtkLKo9SRxjJCKGr7pj",
  "key13": "2kwcpYWX3rcWd78Jg2a8qFbieeKC4KCSnLU5wteoq3C8PMHRweLZXyCTHyutHWB4Vn5TCQAbBtSi75MwGYeiVK6V",
  "key14": "5V8DyFuQFnKtvumjenwyHcyGdccPPt7zDtQAgh21oYrn9hXczqNQ6fKuPf1nSGQkHaTtKLzVYe7Ufqtrvbdn7vxL",
  "key15": "2muNttq8gsKehvccSqB48RkS5soLdLa9BWhYw56gognfCRfnfrVP8FVSVaf6TbMbTbHH2xbh6xbpbQbEq5TqaqfQ",
  "key16": "4AR4pJ9Jh1rDxyE4ZUunzYKbiV7azXFLLE2DPWMwdoiPDo5yAFTuReRScYnUZDo1NZaQtxri1sYV7HjLeqH3Lw34",
  "key17": "5JMct81rxEygkHDwppFf3jfMKMWy8yDAXPsE6j6ZQDPPe6XihVZv6k3iuBDNSJLcyP6YY9RDWP3rssjhGA5JXtBC",
  "key18": "5uXwvctLyZgdNsvB2A26WF4W7mshRq9dxkJZcmv9qr5fbL2MFJ34q7pvKfyyzjztCwLfUeqJGfm678pH1udUV7xb",
  "key19": "25PgUK1pWqwhLEQBCQLm8VNv94u1TjjuSeaud5pzdfcY4mWKdJeFAm2JdtavvgPTP4k7aaUCWwTLsiZ4JKnCbxge",
  "key20": "4ccoLPPX9D98to6yCRWQB9ZHGoZNvA8Lrhk4KqcZduWZVDvRdz9AbsXLoH3exmQ34jJzsM45aqRYW3PePFvnR8aj",
  "key21": "2367jDDhCrwPjwAGt5QAU7Z7TPjUPMtzwDkeWyCLfwbDwH1xSBtQppYKvKpUQeoUDBN246m526jTkb3EAJ7xfZmC",
  "key22": "3h86vsox9SjpvAdEKknEHg9idg5mHLnpqJNmGSZgPY4exikaoCb4TyQ2CHkebcNwUn55nMeTFkT9mvWBkstDFQQS",
  "key23": "2bMwqGEz8epxLhXVhkQkqRUi4pUoVVyAksC2cS6Wq4aNpdyzz6pQwQu3ZaKDLpxRZuzcjgJr33pPR6EamWzraQ5i",
  "key24": "5fJpNAMKN3HoWYvuDE958FYNmEFd74q73XaDXqASbrqbNxSoNoXDHEXJQbhpPWAZMJHoiwZA6puMcwMEhYHDZsYv",
  "key25": "5KNatxjfcqyC9AoM4Wx3jvVQG1wGRWDhHkQC69uAxqmFv6begR3Y5DM9aJpjZyN3c8G83MsRYwKcNxbmjWjtWNF4",
  "key26": "v6vSpx4QJj9wvuyYJcpbiu4weVZgeBtDjtHg55EBaeNbJmt1mhjCbdmrAuWpAKFGij9EVsNGF3HhdyiomsZ76qH",
  "key27": "5Bf24QmdUvwoQva6sHt7vSFWL4kx8ocqXZiWsdFuSqYPXbTykmTASfBz7XvvRr8aqajRK9HRERxaHKJdu1fqbxDw"
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
