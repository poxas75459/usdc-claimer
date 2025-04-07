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
    "43C32TruA9wX5DqhDiT9WXzyBzDaGXVf6EV3LAY8EHfEQQPBvG7gQ1CXgynM9g8MKaQVXs4Xdm666My71t56oL9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jSZCDmofat3DH7tQMA9879nkuDy5MABr5P3RQQw89ozHBLvp8ezLZ82NdJpdYYJxueBueZLUt3cz9JJki5iQcc6",
  "key1": "26LUrJHH5cLdSQra4fwuXJ2Jq4acf6Pyxf6VgHLDZas3HXKHxgun95q4vopdbqnTKu2JgcqXPkv4rGiYVycscsk7",
  "key2": "373kVX9JKb3DY6Y12rAozfaGAR9SGHU4Y8gYUyKoCTAMoYBnUvFzAa9m3GvH1nd5FgNfBbZKhnjYS51ZBcmM7j8q",
  "key3": "3Vfn7eSWEW6ZXrvJksiZ4cqkkdkcpiH61b7sjVU6KsDLPNyJteeaxhaetgP58RjNEBHa5GUn6aELafxFZiguNpiL",
  "key4": "228tPUDAipv5b8bFsvdJKYDH9WWsD1U635Z2dApiRqpJrcvEeztcXd8DqjcJTDUpcnP2fKYXwfs6DYBtB6TLu4We",
  "key5": "5pa96p75TLLNCy2E7JEiPEWjJTQbQWkrZjEnLHJWYoR7UhfsjC6zgZy7dUUryiHcm3qHSdQGUYU2HKkcCt2aaSch",
  "key6": "Tu4N42otTJrpdLUS9FGXfDMpCowmpti9q2a69BjbdfcVBy4o6Ka9Txy4JDnBrSYnwFj2YapaYpEDiRBi66Yn5E7",
  "key7": "3bdeFYM38vrKMxnDevpMaEeMaGH4qxJoTDMFEY6euBsX3BYkRXPPrgVSX5Lc4AsZh9BDD2TovSWqv1Dumt5cj7qS",
  "key8": "3QJDd76fGj6NaAR41xtPCwL1KKb4jhKLfd2mWDpvZviNKVYC1TNLdZKsx5meqf7ypLQAcmt4XDkbTZhq9o2LAwwr",
  "key9": "63C5pkVdSW22oMtGBgDRZ3SB1uJLeTZci89tARdUCB3LTdqqbgcSw9u1WAnY3tZSxQ3utjfYCC8woDCnQfiWKjEz",
  "key10": "4y5KqqVDvjZ795MMGuniyG61A4NWisfeZpy5iGZ8gFgJxmjhj5uz5YbgPpNWoE7XEEWH2wt94wZ29rWZsL54245v",
  "key11": "5vK4uUaB2SBcusUaDspR1zJFUFDyNWb9iC5avkbQtBMvuyv4Yvzy9zWYPNnttxZyd1qXtbfDhzeWdxwnXLeXK2V1",
  "key12": "TBEy6qqhYwgcHkfA1sbXTJ5xXaCWeiF4Gsy52kz1Q7UGh6e1oh4TgXmsQriE2FDVQ3N9YFLrcrUWQFp6QSgZ14L",
  "key13": "4qaTPio321TsixjsUzFJyK8ZiAKNSPVMuonWc5aAofgdVDArnzgBY8YvZCgQQVvmcb1NVxKTAvuKdXwYHQDf7Srd",
  "key14": "3WpVu9iRfSijkuj9hT4DuszK8YMjSDWDjTLtBMp9kk34YqWmmTDqgAMnc8dip4Y8Z6V36zgPdheRbzHzcJkzHW4X",
  "key15": "5XRHxwqEA2ZDSrZhDhyXdHa4xyFSGLgfuBReFXkDSAfP68VDYCPirVXFCbZ3LdnQnwbS9bukMYP9dNLuccAdKjbP",
  "key16": "5VLNWuch95CCxvKhGUP2hwfesmhVoGgGrAR4ErfLhtaWm5KWfQR2omDribM7CzNptDy6qd67KtuX1Hd7DgB5oo7H",
  "key17": "4zG62kDwP3Kd5UnvVtg6YMhjr4pAdTygHpDNeR1wFaxdV1HL45hvVH5RVkECEh475vZt7va1gtcjce7oxZqMUvsv",
  "key18": "3tmpGxNMrYn7aBEXHQktNpdrjzoaksDPiF3AWeY6wYYNG2iZDWyDF14ki4C2DBGtGZNKJnCQaV95V5MejtkZWLRZ",
  "key19": "4ZceUWMttae9zZVZo3oqfKCBkEtrX8KVhBVoR7JJ3CKi58iKuivfXrNWAxSF3X9Q1bZmWZcHMt3wvtsybbqKJDwx",
  "key20": "2VJ1Wb1DciQLmcPwj2KddektaimJumwAgMtpEYNzAC6gy2Fr3JFaYP3ixxQhVEqEib8Y2R44r4HbmwkKZtZS3qM",
  "key21": "34pwmodmppTJyWLfYyC1Nott622vSpJcsey7giwNQd1s5ydygJCQ8nxPZghjY8iUPFWcXx88ZzozJrw4kjb5gv88",
  "key22": "1VHPmb3gNvM4K1X5bzFWHcXaNpfdjyqvpJy2p6yFKqWFJtw2L1hBErpgpPpTUQdZYEyzSXrpuQfrwNY1ahkwUEr",
  "key23": "5WChgfNXxBDva7GuiqdeW34i4AzUjWLz2tSfTw3HBvS2z6AeuGb9yWzYNj7rig1tVhj3L31uGRwxiNfGhUDMXGHj",
  "key24": "43aceG6bHLXxA4GQEL1yk2iY7Evf84qTCLapec3moHej2hgKTYaPnAkucFo9XpeccBNt6Xgocs3NJFfntQAAGHAw",
  "key25": "zqKVkiN2KtQkt67cDxufSQ7KSRHi7ZqXpFUo4s35GtryksJhbKPqK5rTUUpekpjHeKpXKGGfXKhvzLKNsm6NcYs",
  "key26": "5giY94J1D1YBndayE39dmKoHFTn2waEKQ7BXQFQPfbxHnauTUWuBn1K5YZhuU7gaTPunVaK4idHy7rH7spQ3Sjq9",
  "key27": "5VgYfYx1N2Mo14HTmgjsCv2wFQaKWrEav7aQnmvxoYhpBeQAxsr4vx12193xi8RSZKHEP9KtscX5jERhTS21pKmq",
  "key28": "4U9a6GiBYsgRmrexZdYiyNUUUk6eNWh9oJ37JGvkEYTMmR8yk7htGTfApbLUYCHC8rVGvQcZYjRLvS9RUuY7jTWP",
  "key29": "3qqbz3yqgXBzet9UYFXCBRbEbaTDbR6ztt4HzAmTAS6f9SrVFfBHpfYKY5RHm4g5GzPvxZMePjyjmP3CWndgXJsK",
  "key30": "5ztWaUKXiUQUwpjwGYwiiw6L5SCiZcAt2AEkE6teDhwqEqcqzAovLxj9ByrT2q84UeDoLEEN1P8cL2uWN437oMYD",
  "key31": "55Crha4AkwUf266tMZ39DS53D3iRTfQv7biVmS3HRdhkYFPiS2ycLWGejwpHD21WQH2oHafhyBgtJPL1t8bSjKV3",
  "key32": "3ywdjGwUDEtAo3WQbcsmM6LKabJpHxeKansuX7ufoQz4crBEmfe6b4Xj21CEixCyPpLEN3JhPvZazZmpsUBWebYc",
  "key33": "TmeoN5digc5bYgyFiPFFycVBH2pzBhgg1Ct9ng9MWqKjX2ujSBYZcAgzcM3nWvsuHBS7LyWoKHe9mtq9SLWtU6N",
  "key34": "3LrrTKCFBFopxZAj6DGGrGvMFcgEXKPvizVJeuqK2sVJbP7WaEaxLvLek4pjQ3hf1rn2yy2qhczSXyUrzyP1a46j"
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
