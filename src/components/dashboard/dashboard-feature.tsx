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
    "65kvtGibbFcEkkWXiWj4n1gVBLTDPvDF1H49rzuXk45FSeJQeBd4B7jt755UGCGBHARhPQbF7txybxy2AeLE2FaC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y29KNPxyruceRDZywcq8h9dQ2hWwAgYRLLdgsW7pYRW27yyxdNGjgxHZoBU1xPPEh56ncfAJc6Y7UExo4oqz8Bt",
  "key1": "3LrnQz98tMsCkQ21JQxjEbuonoBXrTY1UKDKWNVUd6V9NiLwkdaC412157JrseGhwW1q4MbHT1sxQjPTZhxRxPcV",
  "key2": "dP2fMS9LA7yddBJWxE819o6cPwu7A7TcDRJFWDNDAuoYVFaqC3u4V4MDK1Jfh8hYGYm3sDyBPYpQqpCgLwApEqg",
  "key3": "3eiaWyBQXCiR2MTGzs5tkLrqQ8inkQa6L1HvbmJ99gS1NcM89wgLjSog9SchtPZkpHMgbU664wV4Tg27sALR8PjV",
  "key4": "sUwSkg6Ca4eQgxkfmLzABkSArKeKcxHUY8w1PRRqsV5vysB4F6Wqn9wtiqJQMEurv9cHSZArcd2hpfV59bs86st",
  "key5": "5kb1sdgRxLrsJJee64avask7brxTCh5zJ6YEJpyKdxWQXjzBRPXY1KrHXUSnhv87pmP7tWicr9Ape3AaCWU1TQqQ",
  "key6": "dKUub9KCY7z2xih5qJwsu99TEVL31nT1qYYdN8aoYs2Yy9VnWsZJ4cbgLFVRc6MwuhuvGYooZE6nJKcZZvCikY3",
  "key7": "jh9KCdvmfEbLTaYY2S789jHRaj7QCSept8RkjFc2Si69ey5FJcdXUTPxouspStcN3yc2CVL46d2z6UHTsLCMRTQ",
  "key8": "4AWJ8RbQk5Zw3oh3XuBr5v7VjD3NfJvJ7NfHzqKF6RTaeLpFpKvJo2SoTpupHrQscBHpHZGwAe752boh6vCqtTqD",
  "key9": "d4i59T4ZMzRXap5XBBDe6LnYU1vXH7fMrwgtAmWg2iU37E7eHvH8uFDxfhdPd1k4AizZaaEikY1ahm946UM7uQT",
  "key10": "pnXWeVyQT38LneuM6LqHMcM9h8dhU72wWqX8cxiYN6V1Lbed3H31AcpdKETDu7Tqm4Um1ms69K8tzztU7xPz4KK",
  "key11": "3puKNBhrUJZyGjr6MLuvk4nV5HwvSpLvdPmVd84KRRg7v7HjPywNXYJ4PkpAb8DzVxifvRWtPC74AnHdTBicr9Tu",
  "key12": "3KH94zK6oVZGkUUzJA8oEH9s45SakNYvHAKVGpap4uMEX6HGVr6eSVASmgAZw5WYqD3MLWe9pAz4ByZXHuVgaZtk",
  "key13": "gtE2R1UMPRZeSLHkXZj2pACEBb1DppLoGkXFXctWKy5B3JPz2jxs5h9BcWq8vBAbrcZ6osUXwAY7oRNVx1qrVTu",
  "key14": "4ceDynmDWTm3NKA5kmcFyTujXFcRygj2iCwdPrEzRkc7HScNS2FqgR7ZpMgkg21CpdQRZkvEcNrxx6ySiNNegqsW",
  "key15": "5mzUjjtepJzcFma4LKX2uaQFM2KtKJbyM2iqnpX7qq4ZXtWMkZt3puhhoT54Hx4UftMKPWfEkc6WUKgSiWzWVVTG",
  "key16": "33nXLBjp4HcknUA2uQCQvohHCRkvujQYB855i7TnKz8JvP6i6nVaQUReBGdxNuPMYkpbZsCLcYrGMdpS4uv2s2oo",
  "key17": "5RsCTM346Gjutb9Lvob5EKoZ6QY9xKUBxnL1a4L81gi3DYabgGrdmxx3phsH1zusCMAewGKQtbjcrDnaRkMDfadT",
  "key18": "2mEv5u7MzyhGbxcBhoxVodDfzGEWTgsvnoc27Q3mAbsLsz9uggyDocRg457JvwSbSUqyc6mEAWFnPTFD4j1svhhZ",
  "key19": "2yDDideWiVLoJ14vsMW73cmmNT8gKy7nMsCk3oX3PSfNhob1iDgfibLYJV1vfXHrKXQMYEAGP4E69zarCGyiW2U7",
  "key20": "3avMdtSXCP8j13ZuHwiP9obEqpdsRx1Rs5jyZpMHo9zPg8MuatiqyVcikK7erATPt72ZA9abXvCxmzHPt6eYqPCV",
  "key21": "2AKbwS7xbXYaGxvuNo564DtsAckGkYjhgSVqvhozwzbvuYtZMYj1ko7paN8pvni9ydYqodtu1LcaXx7Q3GkVrapB",
  "key22": "64JTYEyAXAabpyvNLJk18nB4pic8dUX7a81BwDeFw1TcZKmFLiNfw1rcjm98Z2V8Zb2mh5Nd1QDoiS296SvWimWB",
  "key23": "3321QqoLomds4pUEBF1aS6yHdDCq1mqhWocYN5Lg3aAboi4qPBMUmLnozqzN7pzpJdcNEf79GHVxYKtT6MV7NW36",
  "key24": "3dLaBZcgypjMszNc8T21x43DMA67qfW2DQCZXhV4cxoamJ1AemSXLeyn1cfhkqV6uNM82nAe1WC4mnpLkbgtpkhW",
  "key25": "3wcSAFLrFweetVnk7R8Vo4BGxkUEVKGnnvXqQ6NuuvUKMHnKvJd8qajTamLKkiGrDdd6yHPSEbYMYGX3YRJbXYyZ",
  "key26": "4rAB4Fzt1gH5kdZ5MKCZAdhftxWTXrNktq77rHpwN427S9FWwyUKaVejU7pwSdPtSSjyy9dbaHq2WwvDBWdAGyLP",
  "key27": "9nmopLv6M9qgkrdJMvnEUt7EKXttRmGpVcvqKoMmEuH5jYF5Ee6vWFhik2sCB2uPdvbS3XRHzhM4BjxnV5kEX54"
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
