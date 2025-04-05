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
    "3W57BT18Y4Rcg1jFEPbZbznJvYqy4aA7FDveB9MuGJac1wAhnoyvayeX2ufewQWMpfinMsTfvFcKuPQrtpk5sPmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJj2Spu2FnTzhcgiZDN2dYYBxDGVofnXtFAWxK2nztNan5PpVxVSHJNJpwGmFmhRcHNhMkFveECdnrVvsg2SDke",
  "key1": "3MzgqzqUDbuoYLqab1X5PkKcrjTfcRVihGUHj7DprHbWWiHkhBATW4mGAw7X8s7BBcQzRKq2Q1a1724tQPnhjMwh",
  "key2": "6KQEEgZNr36hFmXjWQUu6cJzdxKrVE9yUMTLq3nWy7RmwX56pAA6FcUCCBxP3pmp2sQiKq3XXbmrL7BP9GpddA5",
  "key3": "2GmWXJdnrEbsCiHQ6jHrvPqdAQkQT1zvN8v1KWnpbaXDN4kNU4kzECXS4RBA4shsmPjRp4ch1q3CGQNqgEnJPhjb",
  "key4": "54QbG9Ek7br5JxDnNzArL11RdNxEHRo4b3N1VEeWo7KDMrFg3NqWzZqm2tb5yPMLxHzXwjkZC53rG9zkLnw641yr",
  "key5": "36nN5NaR6J2AGSWgqZ51LEJnvfEFd9Kq1sFnrv2mhD88RFAPYM662JUQLA6roTTgZwZfhcjsgGsFjBTg2js41r3W",
  "key6": "2LW2GPZCpQ7ph49THgXpgAwe4PU68CjLrB4a6LHBS83tYfiMKCGDpaDafCAV1FPJpt61nNAjMUBvXGnkc7Gp4rkj",
  "key7": "3GR8f64ohVPkXSA6pNSjX6aW7t889faXwGiVUmsgYeR4ULJUEQnsgJr3vcrdK8gq5nZJDBxMjst6tinNw3dax6hF",
  "key8": "31s1YTNYZJT6iLSV8KGDXHjAVPSV6hsjEeH2pyYs7RPirusYUBSuTkEh5mEKFacCcxbHky62R7hQiv8zP5NAw2Us",
  "key9": "rjxwpbr5hHoRAXA1djC4sJqsTvZwbviAgL4HViw1HXkYgvVNVWAZn1fSWfpczZw17g82ATvnv8qXZX4XyPyjmNj",
  "key10": "5apcPwi58HAtWYDLfCSvgU1p81T6MuRRSA6yACnPLLzaXwRRJBCwyepii3YPQ4rxdFgNxacPK3dFBiEwhGDn2Pr5",
  "key11": "3STpWT54YUAuzYd1RueEu5JMuH2Wta6CjqJT38g2BkrrCZin2pwbNVeksCXKkwx9Zh5vRejuSshNNBdQYpmw8pU8",
  "key12": "6Zdy62HAfRokiRcRP64zZ48FwGextSMvWM21AzYDqRi2ycbXs3DU9HBoH5e4CnbbkCygZrxXjMyJWtypsBRMt2T",
  "key13": "5A5K1owEqgSpSRAx7foEaHyVzozrehrHMWZHdcEfSKr8hW4nv5McnX2rkJ5vFfFGt1NAbsAMTwJfyGTpEyzMZ5Nm",
  "key14": "2f6kXCn5A61csJDkoQBmHPJo12mNvFGXgzNja5mRYnjSirzdjf8wG9QNux58gbUBmxbUU6nERxCyLKyPBviobZia",
  "key15": "3oBmfmSz5iHcpdPhAJZ1PLLUhSuPGuZSvv6vnpgX5YW6VBMdmyw4U3upsFAWuYmF8pvAcTNhUQuVg6NnHad5MeAs",
  "key16": "65A2FdRZcye7QiWtKtKM9qBuTPKqELQvfaFtXyAcvpKxNC6uYyJZJNReC9VMQz5op8zm8Kd9wpJHbDCiaihRnz3a",
  "key17": "JsiWnEhprbKp7rjCeDWUDEo9t8ieKXW6cxRtpPh6v8fGGKN6BDpxRqf5MnfXTpM1g96g4sXossHhpTTGVNmy1ZT",
  "key18": "5EtpRSvykoFWU54s1SCJ21hEMoG4eWsAmRztk3UDSR9YqSkqQ35xPnzi69NkdZqSfWHC7sPdnL2qbihopRSh3QjL",
  "key19": "57qLK89R73xogj9gngeVWVLgiuhyHCKGDHFkrQF8AN41nQhfcVR21a79rANLMsQTAiva9AUQMtBLNmyGUDufZX7e",
  "key20": "4FXJwr8FTecNN2jFsbfWisdKWihVhzUP5Qr7yExE1HXSc43yyiF8N9ybfPJTq1VMe96B7bUfgQFo36EJALrp4yPe",
  "key21": "MyahnkN1nwuSRBn7eWHCNtKeLkP6qfF6pKnNHDZa8tcEVLJC8puzvdSXNiBL7XVYYDLXSnYhHpBKMY4SBttduMZ",
  "key22": "2887iNVszCNqFxdKY7ThwDEfnVvXn1KpoUDvRCccnMCgSjvdigeauYJCTvAG3UvbS9ZwstXkqwBeMSRo5Z8ioqGV",
  "key23": "4sZaeiDwojTMr7Tq9B1Wj9QR7xZoLh3zTUaecmJjztfzybm1sHk3dbAWeYMLLva8nbZYrDNg57Pui7npz5pf76Un",
  "key24": "PHaKUJ9m6sMMReQr2yJB4oewdcRzfeBsRvwmvYXPh8DKg88YJzEkRRyjVRPiZnpp7viSP4e89EGU5YV3QFxDeoX",
  "key25": "3GXs7AJr1AnkwNSq1q9RFF3DoLzQpA5adJ95TiacVE1UwJFmPmjaNTYuboBNYGi4XjyaXSAfGagSea31H5AeoM8v"
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
