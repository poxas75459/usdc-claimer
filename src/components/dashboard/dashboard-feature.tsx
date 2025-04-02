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
    "4NXwsb8v9t8fyPNSvs6kV2Why7ddmUy5rRiHexSWY8Au3d7wELhZnsZJSatHirKXqWtLpc9ZtwKNmnY9ms7XoeYm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39goz9YTCkjqwSVKLP2fJUXj9xbviPBGfWaeWP5y5BknX4mr8TEoPGMcYnVyGcsyFrKPPScPJSzbc4i2DTTXck32",
  "key1": "5de8wCFXxG3WNrUMts8f9SFRo6EdZCPuWq7AwzhBfNai7namfiUrnkyrxEQyCdWfdbS2LK5LJGXcP2weEsZYp4Zr",
  "key2": "3xDCgWfr7ECrAEkMozafRtPTZTdJW5Lzz5dkrfm9s7bW6ibdLhhuaQdGCytHiymaf9CQcXFsN7UnBo9ycS8d6YBc",
  "key3": "64PbMBYRAN7Jw9Uhp4djJPv8UeSNumKzNWAJE9Eo8RPudKNVQh2fR6ejA6HfhC2TQaehpiLSFafY3oFWNEfzohUt",
  "key4": "27XE46TDpFfNcnu5t2dVgh8G7PjBTB95HgQow7ng7G9XKaE1bq2RGMDDKogSHRZvKT4EJdykX8c8gNohz8VgNp7Q",
  "key5": "2W6iuGEi1WbrBLNtfzNuPE6WissBkcMtcoRnpcKxaH2y9zMWu21LDVWr7WDNXASaPr8uaqKSY5m3zMPDM4wSzpzj",
  "key6": "3j1EC3ZYKmVMeVwB25bHCTgp3f5H5p15gkD4sYYLSB99GV8pEt9xXGF9HopEM1QzKnKJEVGqEBhu8MSfjnCAyYVi",
  "key7": "5yEqf5Z2gNruD4ZUZqYRM9kmjMQHkvn4NQyBtPA9g2iwvckksGPPyHLq8pGzwg6V9MkbdzL5jAzxuarcnC7L4itz",
  "key8": "4qWceMtpTeMKT8ZAQUBNFRF5uss3u3QeSiKTiGMDDayj6sfLcGQGyFaybWezT89G18ZHhKMhx6gvh12Qs7keW8mb",
  "key9": "5qPH1y8gvMbLHkacmSBanhPvJnZ1yT1c2UNs1kpqieE19ZRLTTmyJm3TG2CVAJFMZEzQBk5ot2z3ggXMQBvbB4GE",
  "key10": "5aKfteSC6rMVs5h3M7brfzQrXyBoPYfNaxQ5g9EcY6eAX2xvUebJ2own611uuYbndmAn76ArLrrCx7rvZsiVJMzb",
  "key11": "4ozg3HKX1hYp47V8ckuw1hwz5g2PdL6LhciBA5YmXaKFTAKoWtAidBK5JihPYwLhvqCzZqoWHx1DWC5xHgJpyGx6",
  "key12": "38qE2jay4pBF7FZDPL2TNEXr5QKseHsJrHuH7etQz9JrG49aDNRiAAhTGtRxAz71ho2Ed36wup8A3sEojuuZGYd7",
  "key13": "4h9oGLbuN1sR7pAmLwayErA4aHFXEfqpibEFDMW1BdWfKJY8qtF4vbupsgszATx1mfWGoebXnJBic29NkvUA38LW",
  "key14": "2hjj5yJQ8skyhF41VmYKGuGMxcQv1zh4CRfgiYrcZMH5zH71oTJ9wZKzVGaX4FJJ67jZXXbEABWkiWUWa73iFsg6",
  "key15": "CfimPakk7TgG4Cys9LF2yYe31xZAbU41Z77kpaRTTsYiZp2SwSN68YMrpdxYJ6aNUEytTLPHtiQnZjNXREizg8h",
  "key16": "3xnrQDgcBPNtMkcqM1J6JKFXxDpFm8WT3nNMTWpUwyNswB4mEfYhBxC9WzXVWNbgRbZj7PS4sK47yCBND3AsLX5i",
  "key17": "4S8GarBk1YidXbfao7oBRLgHxAMQZveHHakjvQpvmnM7rumQGdVSiMfe3VNmrqrfuR7xtg6FT7Dre272LyhJXD6q",
  "key18": "4QzXQtp82MRTq4tTm82BnE3y6TNTc8oedGZ8ir2NgUsVEVr5ngEnDdoixfTfGiWXLxYicrr5VER5Lz1utkLZWfoT",
  "key19": "55NjvBiMjJkUCnroFWV1Jo3Tkwaj45TfSVJyw1YeoemG96uveNbtzsH796v1RsMMAsYRZv76svP4aJHrmDDtc6DU",
  "key20": "492cbp2z9mh7uCUuH1CQ3VntQxPQw8WrcvC6T7LnDJ4H48waqUA4t6QUg1EnVLQ3XKP7MNZ2H8A895e3ajBx2R2W",
  "key21": "5hWBbp887gvkSBiJwJPuNk3EZS6LMzZwKRQCqsEonnpXEZJQ4CTBKUfRsYBwciVvvUodySijNigExdEJFJ6MhjFh",
  "key22": "4eaUsDUZNBWWYqQ9HENqZRC9kSiGkL2Ct7kfkw7hjDitfLGUkXjKujgnzj5kNJgAk23qkkrnhak24ESYTpQbmfhx",
  "key23": "yYEZVCVaXavTXoeNjM5pEDwoxhsQxdrnyWcSXM5iQb1vepB2ba46D6AS7z2thEe6oDqm9UsuR9223WNrXfXXhbY",
  "key24": "3oWjdEuhuLLZ9YB8eyCCgSA1gFTTgWhzh8oe76Ry7nhFDBTzX6ZmhhspD8LJx2ANTUQDCArg58i68ALvPdHaitHW",
  "key25": "58QvecLBJEE9W9BogAk89syUMbpoYGk4AU5fjpfDcY1uvqz5whqWhAXsxMitjFU1zNfag8rkimZcd7nYD4LKM3hy",
  "key26": "pv3f9CebStdXAmaywQHNdde7J2yH84EztzWuph7QRCHE7Sn8pvcjrRWdgZ9oi8X84TLKRVGMp5eXpuxGyHbdDJj"
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
