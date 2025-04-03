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
    "28sWNzCE6JNR9ZwEgN7R55HaXfFdYJ15sBWLE7pDrGGVBodNoMkLSnrjB7fNYXt2XoRkS38qqRfPPuhPSk8Wcruc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGP4cZAMXYcqsnwDK9XZz2DJt7nYbHECXUa4gwRTWLQeCs5E7DmzP4WbYBdhHo5B8u5gULWziLtULS8TiBVJXje",
  "key1": "55E2Mnmhqo28vwTgy142Du8WcvdmsDNYrfQJavYazTZVWGugS25djH8hiVs99obhYbvBW51UzruWx1JFFNhidU39",
  "key2": "4DP7Q6TPBEEoWUrB1yF81vJcWrjKpsAJab7nWvr6wRs717C621ZNhJryVVvTyD3szAssKUQEpSsY6dpwZz8doHYT",
  "key3": "4WUC4o88gBABFxDXXM4MwArkvmxaAsCV295sTwaJBS7iBfh95aN7t8xma69kigcKGf9BQWRSdSYGezK8hJgybgjR",
  "key4": "5mS1V9gyyEnmpXkSsVmHqLS27Cnrx7f5xNGkx3qindLh5Su6ZU4AHSWArxrQvMrUdnHxvjp29uYMr5TftQ54Dxpc",
  "key5": "4RJ1NsRGSubBPAwB4gtviwjontrc4d3V4imZS2RUz5iKWDEVQLmJ2hDycfagYYNPQpXE5hM3TNm8eHf3pDEMkwSZ",
  "key6": "3Y6zbnHUGnzU33krrHVURyXDQxMtfmZVWoejw96MDQTKpCJ22d93y2fuY3or1ACRusgyjWa6tJ5UiC8x1pqZv8Ck",
  "key7": "2NsdxGeML6gVDpJsQ5WXxzMfyjTqu9S4sgXUbb7e4sttJ9dQLcbLeLt3x3HVqSL2noPr3CWCxHsD16rdzBSd6Fdu",
  "key8": "PmY3EzMu6ypV5K8av2mqJ9LQ1i5YfiZsMFCmphkGMd4WkGoWBwUeSVPzyiPsdt71VkHJUwxHvgzentVHvxWQBSX",
  "key9": "2xifTrpJdEcvNVScXAQSAYeDehMoMmqAwPNmweokTSQfNQTfrSKAWhRqiswzNGTtMrk8wSuiMEjSJDF9PLRicwF2",
  "key10": "5jL3EgLGShuapggxz5Ycgiq5cwrKJFTnwbpDZzgJKR1EXNsD8U54U1dY3AkzQxtFzivg174dd1aV6tcwj4pR9FdA",
  "key11": "2qRzihyeMZeiUQDArmE6WA8ZzMKQkvppmmtLybK7VdWYimH2abAN8CVKy8dWXye2J38MMhaayKimXWRaGHS5a2D9",
  "key12": "Z1hbRLD2eu2VRRYB5kUh58guGNJsRmn3oJcd9fLQfMDrHwuWYsUnupEF773e8bUUiguLiqKVZCAuX6eZ6Vh6csA",
  "key13": "9jSXRkGDmEkEwceQLTERX3rW1xCJnsTxv7E3a8fYFtZNVxzQxTJrKnfzrodEXhYLuKwS6TpUEZL8xhoBUePBhkL",
  "key14": "5kKaJCRi7NG8dPiRiksAuXkZj7UoERMaUGdrXbiTK7oeBuCRjNhyhir1HepnvsASokbtegQRaX3TkWGNWqVWV5wa",
  "key15": "3u7JoXoa1L6dLdtVBeKTqJq12mgUjUZSbcDBTc1zrifmwscLmgpLzhNCqPiWn5EFaM85rkheSFwfwKg1NoVo2PRw",
  "key16": "3B8GV43U5ntewSN4cch5EzdWaGcrUcjQeiWFCcknd4CbF8RrQpAJ7Y9BTH9L6ZYmsmUwxuzYgc8NKftvipJqrza5",
  "key17": "AzH4s5GT3yreYBJDRdT8r3dq65hhHLMAcs7UKimaBkJxkvzJZpHNxqiKo1HGFRQzs931pGxwEUTBx6sXgaM2VtX",
  "key18": "PkZhdRdWRqBUpHWeijKHPQhUufgjVx58zgZz8TQ9LXw4wAKYVgmjz2z7xAU4w3zf3yeHxprC7tvoTwFiXmhHTbi",
  "key19": "2thMuf279D5mZT355YUpimPpakofkMWoGt3Q6XVkqrk79Smscg6t7AT5TmHPpcgbsuNXLPN9x9cGc1VY6n9151MC",
  "key20": "3WGb3LnpYgmKV5ftVCu36ND5pnMPCBPsZ9metk3AeowHHZ4FinSXEQ3bTPG4od2yddGgKvkbNMM8vJk1kc2Rozq8",
  "key21": "2Se1MZkEAiLVQ3xt2yef3XFNoYmr2w2qwN1wDLS38QYURgaezDVfi6z9XaQ6VMosNBNPVy3zoEDz4BRynwS5NJSG",
  "key22": "6e4yBWkBnt2repmnPwc62qEkTWydZan4SXdLkZqeJnJUV6MnuepmrbrAuFcY5VtHNxyxTDG2Dsay95MeEGJc64J",
  "key23": "5fAbVzAq7zyVakkhwjdi1fMFkg4zTcpBF3WXxZ7DmDtr8pBsTea2NPXRVRnkoDtXcxG1RxJ8DudZrnKkPoqo7fuy",
  "key24": "HoN21LcdmTAGeFVgRwD1KnLL2X8y954ZWJrmd5d7yXa4omZzduFC1pkQH5Y9ontb3LsgrRbhmxSYDEBs3uagof7",
  "key25": "4pNySsihyrLUNJZ3v1XhMTV9tgyATo4NWENRfvj2WWeUq2AvUQ3ojATVyuPM37aM6aYTtT61aZSEjjotZNvvAUc8",
  "key26": "5b5snTLuRFyVehaP7zQnfvXTDXHoqXxMfNW8dKjjYkgXUPcQfAkonMeHLwSTvUkeutMkpVsY3jS1XnWhPdy5KBt3",
  "key27": "4Y7Jm3AFN99AV9W72YLBdh1qDw8ZHjz25AKwyFDpbFYR4oLdAPNVVkwaYEQq5ngejBn7nkurvuxWcJvBwH4nBcMU",
  "key28": "5cNkzLS8UB1pvqxA4Lgy2HAiHY52nAfGnwXUufVjHeidivSnBX1Z3MT8FZs3E7oQBLTAJaf21Xms9u4yzJpshG4J",
  "key29": "3BiXVZ5jCFsWL74dPvWjCsv7FMCJ59MFzPJ4my1sqKkBALHoKypAmmGXUiheVNhK8PVNobFTRHwLyJVrVk6TAsWc",
  "key30": "4LexVLS7bruG3VsSLR9tdM8zgcFyVFcUr32cADWrjjEYhCjzAqSdqmKa9KzERRyHnXKhExo8Jwedmkqtsjjq69Z9",
  "key31": "2BiPHhsBHm4RAcu84XYjrXLrv6TtBTGAPBGKJ9e7xfihL9CupwNtiY8XUxZpDDPTLsacnnzUzD5xMa4L834u5F6s",
  "key32": "5xBTjssQ6qgJ7Pe3ZDCkkmoiAXCR2YHjtuhokiTHQcKTvsXySYBpuGvTBcFa9F9FHihQYoBwk77YScrKFh9kLLGA",
  "key33": "SGJtFDX3yxQdW7N1rKKDGnEJ6XN3keX9GQbHvamq9aY9mwfbpraFCcEZachvfftaV5wDus3BAXoJML5jg3PvW9D",
  "key34": "4VpyUeK5eXoW5boy49BLpzWmnXkaDutxG4FapPmSUxZt6o4SMdBkV3uhEhoC9qs1KZpBmw8YFbPPqDuiLERDUETU"
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
