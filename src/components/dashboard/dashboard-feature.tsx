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
    "Sn6Q4M2Durj1Ctvy4C9xVeERwh7AFnFyBdXRZH5q7yHCq4YDyCR6daRqvB2G1PV3y8aYKMPzcHaunCKW9rWVisx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1dTg49QGw8wf68JoGWGZ3u38zf8DkhutszFf2BaqgBAj45LAQYgXD3PmWXx58bLJHvWixzEC4925Xdkat1WiMz",
  "key1": "3vg5KUJHXTXki3kdnr3KK5Zgwiq6p9p8dwJyp5JzvERHCJ868eJs9viazHKXhaqdVq37VSBHvpgQpcduZ5zPdE5G",
  "key2": "bET7eSjVL3JEcz1BASKuMXvGiJESNHFmNFxijxYP1sgcJBhrJCUsQ8gzxTksxT3hZLderpWjHJ3osiQygGfbAof",
  "key3": "3vsPsZ2NCwqde9sMS98XvsLYGDg11ifBBJ3HM8mtqJkoGAFkztooiyZBK7cu7wc2he2nemjc7k74ThGyTd7DTKug",
  "key4": "63HQ14qMxs4actckQiaGYVKy4sTtcftr5DE6aDRr2QESeEULZvrKMDXj83YYn3tAFFs7L56nYr4S1k3uZ2qDjk7m",
  "key5": "3ixXNqmFgM2AZpTSKRhXjhizw3VHxfdEWiUyGssvikfaNrRmSQ5bijsxM7BjXJyhJJeNwPQwURzw6xsQq8TQtVbQ",
  "key6": "655C2rjuaQ8zrPChU6UvF93UovaDJcS1tiNKyCsWgc3r1BYjVruf3cJ9RpNR3QtzMLcjos74qsVK3mdMB5hgUGCr",
  "key7": "cdM8qrEXLxo7gxMHZZK4zKEAhfRMLyjKgv6sSQoRqt5ZM8fwGMkTtdubLeYtBLgAjRpUm8dm6DwG7m98EAy5WwG",
  "key8": "E6hBSREmzQDZqpYLAXhrNrfpzhhPYbZdKtNJ88QcAcHRe8kE1QPCLEAh4fsHn7CFY9rWh78uwaVuB8aEKDWRZvJ",
  "key9": "64XCoYzao21Np8dYodHXrYAs8uPD6GqeRqY1v1HV32X1Q7r9Gu68wJeytVVhH3HdhGh51PNe51oLa8hzz4s6Z8tt",
  "key10": "5Swpqqx2NeMRdnAfbLYQr5DCV6bBrLKnmbGgFX5Rws4Ty9eAsi6G4xSyxLBs3Ygx6RXhVy94TG77SGDkAexiYRCR",
  "key11": "4Bz1PcSPVTU78nxNxXZo29X3K9VnwjuJRDph5NvXNnM5u1igXr8AtEQd33bXnWvKGX1kcWekAVt4QZr2whxBnLjj",
  "key12": "3i8JtiyvvbvmMrmp3rd7fuu5EQf8D38Fw7NPCAetf7HkfxAwwmz28ymrfBETiXpwWoS9UCFzr5KLtJNpzAd1y1jy",
  "key13": "35UxTpbdwTzunJGpHrJRf5B9sDgg2deuUh19MakJzZTMMwcuNvftK5UByCd6kCXtgx2YhbG5uNep7gXye3U3gsnf",
  "key14": "5L2wCvqNFSNKAMwYWABzeiQAwyGPsCrC37uS318JkYTFFqpFvHPdwW62Wwwmm4dXtNLqJV9Ubk4wdJiCykzypX74",
  "key15": "4Yat3AZTETDXqrTW2H98XB5H3uQwWgywdZ3SzGeUBqSbKVerS513CJD3csCL3NZmc6nfExweQni7zzsKTcNaddPU",
  "key16": "2dSSt7EHB3WQXaR1XV5ecqWkB8SkiQoPKpQjehjj52uCiS4BtPyLLi7N7U2C3fPASWPnHfvKFtdW5iLJdHth1fTV",
  "key17": "ZdPkifaFrCCJwyfN5V7CZVJ5hP1iMZUfA4EiET2ScjxNnyW4dHuzjHaNks9W6JznjDmU9MzwWXuoxXm5goHGCBf",
  "key18": "5of8bzUfMdhd3sVfKcs3B5udKhxva4AjyjAbekPZoB3oEms56npT27kPPoyG3LeaZUH7oq3qpESfbsjqWM7ym61L",
  "key19": "5QeVn3ZkcQeuyckhEwDRGYZsVf8uiknTSxypMuw1anm4wrcEQoFSBfEqrs1TPvbkH4CdrRSWzN9zKBo8cqWifgUc",
  "key20": "52qedZR2UPZERYRuwL5YyP1e8tDbY8g1fkaFwrhpLcHxomVQigswi4eBc8dcucqJjiHFiAG7QtCSxa7ZAGGTtVE9",
  "key21": "5Ro7uWEngCVriRbm4SstjqaCt4VvnzuRMdDgUHvUrVkge37GBRbxEjQEpDvzvpcFM74kfqY77Dwsg9YosudUpiUX",
  "key22": "W3C6CLqU92NQe7q4NfbQZERcNYL4U3tWHHG6RYQD9jEk8ra36VTPon3BFBsYX4pNm2ncYXmMipmXaBxoMqEFmBy",
  "key23": "3mfVrwirW8QusErQA17T4SuWto458FuxpdM3cpMziuJhfhZSps8QiqULiCrefQrVMpucNjrJWqrogouEyQFKJ8LX",
  "key24": "2qdX47LMfgf9QzWGwPw6PCNhLhq3jA4mHNrkNPqt5rLPm4U143jtxL6mU4F8ifkjCTmvtNdweRSuzbiPscXJgSWC",
  "key25": "3ZQVMUDdYZ5jQfFFzSrLpfCG5TmDSAatPuZBthtB4EwpgMcCWznfgVaTzjgsNZqthYUNmmjbLU5RnzxYtG9hKJVJ",
  "key26": "incabgL2ad9476oGpAqto52EWCFJ5eb9i3x9o1GtizB8dJaMKjKtagYb6N4kagbepruScU6ntSwc9fdA9cCuBmh"
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
