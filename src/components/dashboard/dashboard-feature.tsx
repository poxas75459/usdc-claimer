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
    "65XnTUAQy2WYqfgNVsqLQvdk6LG2q6myaC9e4wAu4HoktTHA9xZHK4PpTzqTEWmbw4j5SzZnAMWNi4qARDrwm83N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L34fW5FUXH8RibRa8TvH9QDwtHDeHH3cce9EwJWRWn9e5vzE1GBui6MyqpQ9DEtx2UreZM9SQeLn3TG1tEafuGf",
  "key1": "3e5cWYvsqpaK7BZb3zgCe875YbU6iJgcRTQw1TCdjbJD9gYJ9JLNSFaiZfwZzSfsLPZVR1yD8bvL9o167itC97ZA",
  "key2": "sTsrJKktJNWZvvdYdrJn54c5JJ9hACRv2koWbah58PK65NHZV7Pffts23gEGmMFEg2CYjWktouVkTrVYJJypSTi",
  "key3": "2UYrJa34bGCyXYvehAaxZQ9g3fTxy5PZurHNzSVtu2feYFkmggrKJvg3jTxJ6kaQvU8XHyDtRX9vPVc7t782rxit",
  "key4": "4sEgiXGWsqkKzzrSa2kn3537xpNzEGaJPkZrJTePLzYNjnkBixp7qjFdFtNNjsRwo6K9SKVkE3PZtZzjHZxafsrw",
  "key5": "nxah8FzLhHPHtoBnM44McSqsLdEpHNQkBPSCvk8b733cWaLm2tc3BuqrPgHScgGxkxyGTGs7rawbi9pSbMm4Az9",
  "key6": "2FWoaBrq6DPczhgLstUt9kDZ9hU7U2ZMoHj8wpzxYbLgpQnAmW9Wysa63huSDVn21BioNpMawMvypMQht5DeYPhK",
  "key7": "29BVfFV6th7qiq6suLy6HV2ww1C61kbYS3R9nTx3wRCz7g5zSCjDFznMf9VPCCifAXpzF8VfaNPDvJHeqAFjkfnu",
  "key8": "4n2MZeRpAkLRsK6BShWWRTPWmWyCDyfMG4FWXak5Rufz1UpYL4v95q3uaeeBfuxtuEB68pRWxh42wFxu5vGDeY3F",
  "key9": "3K8eTvaqm4tLPQkWKPwUYqLxvoEPyn6SdCFcC4Y1gUswCQTb6Grf153fRAuSRVDtpPQgReLn2THPpdThC8oQicy2",
  "key10": "5ox6M7m3veh5dKTTX12reXjLjU7noRikAanGFmy45XSHSozrWn37ypfJQbRqbLWeKBxiNWdSPsuDhJFY63KcUNNK",
  "key11": "2p4sMM5pH9E7sjLJSkL45wFsRp2tJv2r86MCBuC43pvM3LjoudoAgDFi5VTKoXyrJnVdcggWUtjL9bQ1XdPHkbUZ",
  "key12": "3j2D4mWyGuPuV5RnJZgsFx8pNsntUrxnmTtUGUmzJrRhcax9QafahRwC3p42VXwjELi81WkjShEZvVBkgTF11DS",
  "key13": "5TeSRyVEKUhPwtSTcmGRzjFTvA5medjW4nBRpYfad4xAocSYsLYJws7EFkSW4BrX1CSoi36t9Q1Y5uYomYYGX4c",
  "key14": "2Z2KVFFJa2fmB85p7MJGhjKspanmJ6PLBkZSfXq1tvrSCzUFq5A9PiKP2xPQsF2gnXeZdVZWjzJqfWVQwDsn8tYB",
  "key15": "5u8RcFnVKNRw91XtxWMwLuGC6bvCuZbE7T92QE3BMuKiYr7kKZfRfcNoPT67MHqQoUcT8F1oea21Thnd2RFSejox",
  "key16": "3nB1se97u2ChEvy9v9KUcPcFWYUTEpCVQ24TPv37SzjmRzG7xdYn1X9mMnvB1WWYp9E5no5ZfyhBcFqs5rxshqEg",
  "key17": "3TRJBL69eJiHbPHYFubhQQqpwrZWpFywN2PFgUW92QtZJXcWjvitdZj1YK6rPAHaNJH71bxdRw1n1ZHtFsfQV5E2",
  "key18": "3UKf1kzRvAraMkNEHNNbday7wZTzRtzZfxTybsUJucf4E9o1NT382yvLf1fc4nDLhGtFAEqjsq8sr8wVqoGFLPsa",
  "key19": "6pvG7DCjzR7o1fPFaEaf5ZYQV4wTPVdfdma86s1xsVg6gr3mj273eWNDfpZAFrVoeEBT9FNQXAMHorNg1pokz2h",
  "key20": "2Af352QxLi5HczobwTHWgDqy5T5BsKfc7i43UrBuqSRhr197U1D4MRchw34QxCDZEdhc8orVWFUnx5P8y4NJkhSE",
  "key21": "64TXsLAksRk2SYg8QVLszmEqhq9AdDvfR6rixW4kZWHLXhoSixAWiKJtce5KeDtJTnVjdd9cHWCmd8sojV6rWZ61",
  "key22": "4TmMAagJG7rwm3r1yTSB99DrfdS97LfMoYvXPkC6mySsLyEYuYrqaez9WfJCFKm4gZmHnp2fh7dDobWRLkY8wnER",
  "key23": "5AVfcdc7Q7KeuY5hF9Z9b468L43eHy49fK2Y52VSZ1671qzFvbWrzzWpZBjFrAJV6EKXypwb2Q8RLYzab1FczvYg",
  "key24": "MBb6kVCdA2uPZWZcfRG7eqZCpKJC6WKZvWrqjZLCBU4uBPRT3NPjQcXmPeGEAoreGpHgUgm8d6mfaVmADQCiWsi",
  "key25": "gyQW9o8JdHv6RUAKe4tUQaiFNFSNc1WaXhrPXLJDaNby9kpnJy6EnrvTPKL7Yp9txQK49c7UnHWEFfAqxYzo5Xn",
  "key26": "4K1AVZaeneUxENwC7wps8on2qyySoiQnpbofovRdN5X78LDtm6sq7Uo1i4fMHuYQ47BBzoS71Ws3aJ2ipDHVMc5t",
  "key27": "4AuQpwzTLch367LMX6AhbA22atbRe7Rur9xahEy35eXBPUTtmDJGHwrn21JfZZiy4MbX9GsfmW93iBP7ASoXXCDN",
  "key28": "3aXL9qFUkGpd4J7CGp1i1uKSV7wGm2u7u8yPyNywB7TpEBbJbyPGkkCMM4tyRDhkurz2qYFdNWM3hDNNxtxA771J",
  "key29": "5vXjogXFNyWAkSf5mNUgVxjpwikMB9aKGnQCWw36FLa5DYikZ4LWmnQqDKfJLfETNrW3pKXTXJbG5AhxuyEnS2cZ",
  "key30": "3Xk84P2C4k3rKPLCVdMpg3tWZHs6XDYiRD8CVWtQaaTk7MJhX21NFTnbTPjmrfQA2uWiU6TyhseueB7LaJSxcVHr"
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
