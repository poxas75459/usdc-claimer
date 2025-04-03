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
    "XVQrc8zKsYd5VHjbY6jMhn5RHjmEkUkgCWpievcyHmBEQ3EDKVo5JV1gXyGHv1U87UEQQPE1daQgRY5w8YbGgkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3MmWWGBtGkPFYof9i3QXL88wyDkhk98KLDQjFQRteevU9F1PSHMQuHWZBAuJMes9iwM61gfPoHLXQu2wRdYw1N",
  "key1": "4yCmr8VWc5HTjFGqJ5nVBEjmzn7Vv9yFYXCMK7Kqwq36jXB89GjrZh4gTv7cMqMJGYVDsyz9bSg1PaVdRByWhv5f",
  "key2": "41vSmBG7sZeZbfBeVHWmsQ1ZKNa17GmJp59nz7cXgSg9tGv1NTFnWpx8rw1ww9y9bx6g22iFs3Rk1BNpD8MS96Hq",
  "key3": "3Hs8oaCWdJhfYPKjRWhGgQnoouvfZNv6BKdMVZ9W2yYiLGVB8v2DyrAK8zkYU7irk4xbhcaiyxPVfV6bendtgPV5",
  "key4": "5AiGNC43FqEUweFrwTnX2RJbhnYm9Uxm4uxXn24d6o163ifCTwGqegXKEvCrSW3PKKLHU2UZ7st5vHvUfHC9gP78",
  "key5": "5LYwHvMWBi7Xd9ZHBgrPxvbETGDnQAdvZmBb19wXfzL7DaHhmL6iJsyVviByun4hHPrCyzwwyWujWc2kZ6gE7UTJ",
  "key6": "4k2wT59dPXpZK4ePuxRxCzt1cqcTpV3m27JmtEWtk9AR3uYX3sNyHuKAZwD5P2qNdkaYQXZnKFaTjydBwLCv5cdq",
  "key7": "4ihPpgJX2ap8RV86HpRUYvHKVTSJV2aQqKxg8spaDFkLZqa3Y5PT1ytWaLEH3cXyNAT7nEKEESoenMY2BY8ynid3",
  "key8": "3SBP4BMjAJELY8Cq8Z6LWaUPFYa51SGbQ7nxB3ZHi1mDXgo8xEGji9TZkq8tJtEVHSUeFvy6BDNrXV9CMEyL1q11",
  "key9": "4ZkdnRFRQST3hWfL5FxfS4i6uMhnHNz7EN3uXqr7ngq3vDC1kfCkMWphAHfXQWkC7bEXvHmA41LnvVEExZoqHaFQ",
  "key10": "4ff8akR9GwdLPJRWXSBrPCkuWztZon9siwGowXYFUQy7X8A3KrDAPGUeStmoU3bZpxostoxHELienJHsGHMxDFFf",
  "key11": "5d8mPwPRENGGQivjiY7rhQN6G9BNPMPW2w6mLiAGwooRVmCSByjSgsWptbsMXS6rZYTJsRBGjPx6rH7nSfuDqmh7",
  "key12": "2mthu5iu2JoEmYETXnBQjFhHA6ondsf1p3n44bcUSKWNKR9E76eHty9XDAwv4EqCV6JE6RGebcmFB11AxqzBrKcw",
  "key13": "5ZM2X7RUjrJ4bwEhvrjTZCS6kvUPd1PiWC7tbzfEABmmTCD11gyq61EqBudUHVH9G8naQjDRxosGApjYvdXV1whg",
  "key14": "4Sx1DJHM9L21HqhpJxAxq5bCA3v4jMVLJZw9xP9an9gtMbMbnxQCjMJWDs1zDsCiUzL6iRjBGYAkzMaYwwpf3jw6",
  "key15": "5VVwxeJgynjgZJU5cZuy1VKffRc4kDGLFuUhinBFZdEmfN9kxSnAZicqGYjHmiTe3d6JF5WmKDWgnNtM91GDB1Z4",
  "key16": "3RQW3UukqdQReh7ZKrB8ZNG8Xfc4HiRYLKMHQt3Fk8dk9kYQV6HwF83uf1xUpfSPWUUk9xRNKttBuu3QLzERnqD2",
  "key17": "2oCQ8jPGKwPpJWar1PJUtHTCwscYu5Y68AjCporveTgas7bv8TwDvhcXEgBzHAAABhrqW9HVA2yLx67gB6YdE28E",
  "key18": "iKkFsR3V772MrHrafkXRngsVvAoXiRjb6byjDHANEjdzWPn27hALRG6W7D65RoFeLW7X8h4vYjCHway83Qdbd9K",
  "key19": "5H9W1p8b2TfPigtnTWfry2sfHi7qFLvcXdZ4mPqmYTBARqYSiUCNb9nauTb3fXYP8MFQdnYFoWzNmvESLtsh6uqu",
  "key20": "2ZP2y8ipR99UehoXujGyke9XNxiehbgz9qDGbLHqVFYY75cUtN54mjyNf3u7rNFZdJ6eg6iFmHfywviMcfa8vNaF",
  "key21": "54Qv7jTwzcYKiEu9h9U4sEkZCXW1ApYP4UQLHcG4esBwwqcjMfaXau11KGMGGvPY4diBA2oJfhiJSe23629Jsapg",
  "key22": "FC3UfPWrxWZfum8RRGc1QqpWeoPbXsVLVUH49AS7gX4Sje9urHt1xKAmF1Bo3X9WU21SWQicFWSmVmdw55GXtFz",
  "key23": "4uTQsX1Jh7yGR6ve8Sz8gv4vbSCW6jEqX2hgpCiVk9YQfBE8pbLvq5zUddaj1of9inZEcdEF7nW7dVcWoUoRKTyx",
  "key24": "MdZqCCj2UrAAYW2CFGFA95LTaaUd9pUdFBXyais9dsovRCdrP2aDV5yr8T4UXEBB9BGsTFY4o2QHbnSTHc34Wih",
  "key25": "3pLeZChs5s64pDSj6H5Jebxf3tfRYJm7kzSHnKkLHdAHUdNv5PuJsxNwVGVVj8N89ky1dsvwqyEdczcXS7pWdF9P",
  "key26": "3zA4t7ZvGbzxwmpw3zqCP42VKWi3MDMVLTJVLKQvidczbZBg1ZHTKXuK4zPm25Rt2jCiSbQhN5JEvy7ztQU8vitf",
  "key27": "4uq2KZ6WJp5RKqYPvsjh1JiZkyHFn71xWGLpauDTQvTNaEmSRrWgHoJXVGi3sAAj8GG6nsFwdXFpshfptCW63cyK",
  "key28": "4Ak8v9KwzzxYk1uc1TkPxhp1vH1q5hMcaEzYviHh4UBcrMkY4KsbPrj6UdBaYyPj3dpW5ZennUN4AUvckJPi7oyP",
  "key29": "2X6YkTQTmWmhC5eF7GZnKSVf1vsLpecq5PwCrRNugNtJpo7cV89QYUrN7gGh1JNbg7jXCBfqunPJbbLeAh61ou6q",
  "key30": "5bjbbcs55FbjZfdcyzTrc2CdnnGb1RKLW5C6VTjZ2vycgSkCy5kKZSay8XjjMa2Hax3EXrcBU3qa2YPyarhBSKRp"
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
