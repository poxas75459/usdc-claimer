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
    "2jyYBKm2W4DrYETVyj6BjxYGKG3npJzjPvdCDPcKHSXFzz7rZgE971MeR9RWJy6rutxnVQbnRThuCzTnSdU7Gd3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Moex4HGFP664umFtDtHeavQ6PjnB3b6CGnpD1UnEGmAhz5sqmboXZzrxY6DjJMS3xs1Ah5JswMJTRsH1NkY3r4F",
  "key1": "kcLFRypQr6BLeYrvFSBQy2CvBv1NiFoE2U2zA76Md5rZRLxjEpmFkTLuYgx7WnKy2BSTbKRXNHjSJhkYcQvYnDL",
  "key2": "3byhwgtxDEt2jCc7fKbWNJQJGjdSd28zPVfXWjF1CDnCuoMtVWhQgomvuR8TApLryaLfxykopSAKLtnDp39C97gj",
  "key3": "t6QzmV6FkTj4yWQj22H5potsZFa3PW9oVAhBNUfREmjcdn3kUcMMbe6Zzd8sBKEDh4rPCgN4vNV2W1YqkcANadU",
  "key4": "4wuLRhXUeymDtwJpRFNNBh7nHe6sUNK5BpbLvc111dCPAHRV5SWu7xhW9mgfDsEjXwGhL4Bo4GYtEvmEkL2VnDTm",
  "key5": "2WPg83xLF6RPoGk1xTdLjvz9kKLHeb7tTN1FKZrExvpNmFP3Du59kR4NizZZ2BrkGkvaJgzR2gUvTGx9yB78t3E4",
  "key6": "4aBFiEPZqKmbtnNiq8vCMzmcsoBUDChanxPKH5GzBDZaaK8N2xDcZFoAx6uhQ6epPUevUdS16GryxoWGKKPvUZfb",
  "key7": "2DiDEzRZCstpwvaKhB4KT8uhQSikXnRBcKNeDmnp1nRgq9WmGa65f9uhfhkAuAJgSwA5cm1RUno2acDHcGmb3gzz",
  "key8": "4Z28HrYZwU1PnLPfXFMAZ19wcstCuwHJ5eN2yaB4FAUKXLDS6FMgjuq2hByD6mYBvNVXGpTCztTGBk9Xc91t7gPE",
  "key9": "4vUUFY3vCRnRdhn2sCqVq54CkLq6WRs73jdd6kBbUjrSnCTJy5515YEHY5ER6qSVsAVunLNrt779pwzV8tY6pBx7",
  "key10": "3sFvG7bnCbdQNxYterhcmH7jAcmP1CH1heJmhgShWokyk6WSZG2u7LeCnc4cJEi6UhcM22E47DHLXaG7LecnaoCH",
  "key11": "4DQG9VKEmBSHA47XaR2cDPQErgryKusFCVzF9ynEfUb9GMQ8K5pGuCYRnRcjsA4bW1NxxRBXe8xVF24hP3gt2K2J",
  "key12": "2S94Tv2R9wtytzxweLXdXKLzoP7z5kcy3DH11Kq1FSQ5VuCYdjfUR6GWrgMoVVNDTxwL2gocsBCB9BMz6wsjUYM5",
  "key13": "db4h7fp7mynvc9V3zShnQxDgJoKDMzDeyft5Hyv3M2aRSXPQ5hCXzSudkuffYbWXNkYhbD6195rhvm41HBcpxBs",
  "key14": "2i3Hw2tbDomfTQULv6Kowvp5Ks1U6RKdNjDbPRi1XC3cX7cXJCN3hYFsMbyFPXpcrbw2uJNaGgBhApNfm4Rn7sgV",
  "key15": "3mqu9BA49Xy5VKdYwsK2YvnaP1kRj97feS9XkTmHeiVBvuqzbqsfcMJJzuZyLoqyn7Jf4JJn1kE8XR9GPAGsJSC6",
  "key16": "3TLoDGFDYbL1KKtL9JdDGEcMoTwE6cpTHYsd6Cc62m56vjjqkjtV2jRh7J4vtAuhCASkvJ7sZxQt3LnoYbnvcZ7v",
  "key17": "5gsSMGSpm2yh8gYWYSQJLcEtdCHrsD8SYSRoaZBrxeASb9r9RphyY1BDQ26ykM1kFmDXw1BcTkimc8tXAeUFDC6r",
  "key18": "3xqDYrN1Ujmh2F9TYPVt1wEe8BGR4YEMZ2SngJSVgT6FWYdKXJdrGABZBDvdYZbDmHyRYyKr3JHUwhJx4MEZeEfb",
  "key19": "4NLamg4r1zHbv4fAzGSHE98e574X7urFJdpNqBJyH8px45n6k4e8omsk78xr4sesXUekXAT91bJBqujJHLii4KWr",
  "key20": "5sEafVdfbyKzSydLC9qcQ8UgaWTCdYALkp6zCUwEXXsHSfc5JaJfriVEjEsBHMfqvvAEUTC1m6oAnF5H7USctwqW",
  "key21": "21WmVjZkriiqnaLAmFH78m3oFictimdWMSUjWB9f6GhMzkBMKGYQsFspVdaNQW7JJm1bTA8ZnXBpgHz3iE9zX6NW",
  "key22": "ijbZP5DfqEmUgrknYMrgZJdwkf4JbbvsqDTA8p95abS8FEpdcKJBi4eRgD7mvBYHszq5yu1VcEp5p1dC3fRCyAX",
  "key23": "63zEJyRZWAKPJWHDxFyokiXfqKmKJukRPWrtEAiDVgBEjJQ4mQkohKSfQx3u4KyLuaVP8V5wjjQPErkwWT9eBwRM",
  "key24": "25M3uomhbA8wap62GBJtMExhq2hc3Py3Rhm3oK7H4XabnqshojTpd3wabGzuS9ujzyAL2eVCAw3qpwtWHKJTFFAo",
  "key25": "64BQYV15NhAc7PDso5DY5Mf3A3Con3b2kbZNmUSEXGwkH33SZrSgYyRDmniRcv4Kc3thBdmBL4fZLEw4zRH9ztSp",
  "key26": "2gm6rR9Rj6XiRm6gPeCu2GCJZRHjLw2BdHbSgwvWycArLvkJysvAD7vWXB8oqT58LP8PLbcMiNYb7DyKYiB7tmst",
  "key27": "2ic5mrP4GsQeByQubDH8vesYKznwUjrYknnCtiv2siEakf4rM8wbTdduZWwvbNhUQhgafPYW4zLgdH6dWw3XA9YZ",
  "key28": "epLaKgzvMPx5rmyTGUXuBAbAy9PMbwj3oozY2hnGg7mhcBAe65VWDQ3nGUKiEWCQR5Lek1ADg4o5oVLA1cFAgoD",
  "key29": "4yfzKsP8kGLaU2dQ7Ggd5sZAxNuuMaC4sZCnDy3mUXeQWakniAHqauQ3igMdVDczFcmrcQGkorVmem3RHT7H2aMr",
  "key30": "2JBprphnycbL2BkB57fzaKbEpK6c4U3QrDpXge8YLpPV5CqcFvQtYNbcSgXfb8xQMjJLfys2J3ixMZdkszEtHNkB",
  "key31": "oh9LtShBjcjThDsxfcMBdKxBNtXQwtPchcbszrUyGPdvzop7dZuiujFgAQpg3PZWWWXPM1YM3MPaQ2mEJows2Sn",
  "key32": "4W6q9d4a8vC5gTuMT7DYaJPRanfW5kafRrjbSLbXoB7udBtbFP2idKcx6qypVoSsyhzYMtJcGAUzjqmgTreJQfcf",
  "key33": "2bnQqGdM61bpTEdc5JnHbkhTsTomqVUcuezGwwuwkFuve5ZvVcNEFfroHzW5s8xGT85JoUgGq8b3E8xTySD1r5U2",
  "key34": "427fffkHWkgpx8kSzPCxmgGBiGH3zGqKR95HKtQEv3y1yq89e9tEECMUFDTU28yTN27hajd8eyxwdtodLs8SHj3Y",
  "key35": "2mSmYD6smukxrn3Xy3XAvuujB682GUTw2eniHizfxBPhPiRz8yvXf6ZKYPp51m7hfwkxVomqWMjbBjQntQSKSYcQ"
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
