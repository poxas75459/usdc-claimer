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
    "ZEixrYY73kn9tZKcHALweBZZKoxVGUK9gXX1QYSN4pkErJ1XSyt8gA6XuiJPC6MknH3fYDAYgeQqbebDwTx1V7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wDvSaEYLNu4AoUYqWfjnRUV5f3RgJ4cMLMdPMshG5mtswqGqaz6kEkY1MMSeYEEPo3BCRFwoD9jy7D4LMLZ88E7",
  "key1": "4FZ8Uvf162RUy4gqu2v7Xtq3ihtmgX2BmoYuGUHaaWyt8RTZtzCiMvrkmjZ2Q1m2SLPQpFfkuGsb5PXwjzmz3Ykm",
  "key2": "3cZiephz5xZ45oRJg7qvDieMiQKmGHZgT2aC3FJamRZaLEaUQDdqjsbFBKzuZRZVw724VUXvN98odnyYSkZQd17J",
  "key3": "4QxuLejFdDRrqRsC9RmoG7XmHstuYcd3nNA5A2wXTToiwEcfB11cajdxaC2UxzsdzWeZ69SPBCnhNPtLwsTukrF5",
  "key4": "44iieStHZ6V4ibM7FEVdZhXNLgoQF4fFNJSvLTJKFMiryhcgUuERBWd466FUTX9bxKkWwYjwM9HiXyPbfTBYZmhM",
  "key5": "5jLu8MyAG2Ythn45akiai3otz7oSrVMot5267mit9bwYzCRxzN8w3Fs3h9tWp1c2irS5Ny2RDDxXdXkD7gHtSBkg",
  "key6": "379T7ndgFsSbjkEuBK3aTBad1cjTsTiYVRrkaWFYmx7UGPW4tnLCP8FYmuipcrWUiHA4SVPYX1SgMVXJVaV1T87",
  "key7": "4w5XEnKDAEvZTHLwtugP6sE53gCrnMRuCBSSWef2658sCKU74XW33msMPjitG1cNwTvfqFP3YyYt3KVx6CpBoFUv",
  "key8": "5D43tQssTrJLHdGr3LUwikyD86spHfhDmbTj8fk6G5J2ihYzzftjEHmUF3nPkGf7JywqkwcE8UmuF3yHuRsdWQXP",
  "key9": "hsZget4R51n5n6BZhnPrAJL9oQZMTqTfkqhq3yyTYDhyjhZVZGLm2yYstCcZm3A2gri1s2LS9eykaBpzC1HGpD4",
  "key10": "jwLhVXagNYGaGvTNouNP8B5tiYgaCX6CkWEH8ZZgRD7hqrSUmGE4FaXzxnuVUedWAkW38udVHzK6r38keVkNS6t",
  "key11": "3me5QF9mb4eEomdiATjZ8LM5c3VineFZoRVZ1EikytECe97Pbyzf3yHcQwqJwEMFJUkNDFXvEh8wePVatmvQmjxW",
  "key12": "4DoHryxm8p1bJeWW3GZycXRzwoeV6H4Z4AXZBjmDEyNdttdMrmwM3vzu2f1mVUnN19vFsvCFAsm4VK51z8yqe3av",
  "key13": "661FYWznGWe28MzvmkKRsCAknBjAQBvua6uZWXE8BKaEKj92V2Xazjw37Jtz37kwX6RMfH6LhqTiVRrz3fRjYxkh",
  "key14": "3tYe4he82cfa1ERFghuQtwiwVC79ip5oEk15XrSfKM5UU9gjWS1NEQEkxhL4ysjNsthYX6cg34EQPeCNzA6LZxHL",
  "key15": "2F7FT6Wvv6suZDc72dh6u4ZzbR9nUh7Xwn5243EAkFQcHvE2Y1PcmqYtx2eEzCGdZL3aDw8C4FKMUgkoi5h6oqK6",
  "key16": "4Vk5RXfXziqM4EsQoGZbGZtKozoQof7ifevoub93iBVq1ECZyZGUzmEeWTjLvnjXDL9UC4UU4dWfqyiw4bhbTqUS",
  "key17": "65qZLgLcgiWJBQ9565TeyrFaC6iRqNUhg1z3iaoRbDgqf7rvKC4sWpTDLuV38rQWMkYk3xjhDYJC27sAZuYCBfPc",
  "key18": "2yrnEHa98JGhSFzYj7LHH6yXKGo2GJVgweMNDCKtSnNwzyvKN1QEhE14cwK5H5TL4GVLzRSc3QmLzLcazRniFU9X",
  "key19": "4vapHiBzbgksHg9FopuwgB1VgL1ftPHvzm3g4GJgVYEnJD8YyA6xbvmDBRZoCYFhynjqa9vvno62WJeKNNmSpxRv",
  "key20": "4MrCvdtY5Fc6rBG9QAEd4oUdQRpDSW3kytsh41zs1LZ7DYVFEAof6B4uEoH3ntoGhhiaU3G6vEHdCN2QXmoiFxgQ",
  "key21": "2TUkYSnhBaCVtf864aGBqorHxhXVRGBudAePtR8THhKHrPB7LSirWd35F9hL4Mou6Ze5VqppFCGYwePxVxyyk2ds",
  "key22": "3eDZkAYBRP7BsrmAS9qwFj5LHSTBxTPL2GnyjaDNEMqfwgNxKGXhwfF7jixzzQZ72MNZLw8TJ9yh78KiCPMHPdEL",
  "key23": "3mNj85VUiAeffFMsySPS3xCsbTDWQnrAtfTJ6QgPXQFshjGfXwoQ5Wh7dgbq8Mt3rdUqV5By2XdhtpkC8fsT7x9N",
  "key24": "VTWetVaA2FZSAFXWstpwX5HcJNZXAtAv2boxu22Kg6y352TGpr7ciZPz9b8JS9uzy27iWCeHyQPBpHP84pN9hu6",
  "key25": "5fw4iq63mAViEcscgrPq6N63fz32A77nb7FtWaTH1G8cwnSJGCQiEqJ3Rt9jGD4mpCXSKzHhsV7dHq7CP92NqxkX",
  "key26": "5oJ6vfqLn5K6yV27QjzRWmSQCXRo5def5tB6TnH3LuqUXytp5AvygSdVBYufKSyEbbwbT8zLKNxvYb1A6SoGB8Sv",
  "key27": "5VwavYCNM2Mo33jqYpRajzTpdTNybe1HRptZ5b1ob4SbuVmCaYSTQPtkEUVKcJM7wvwt2ce9wdsfqMUS1TwiWCYm",
  "key28": "5wzuDiDuU3ZJL6iacUyB7byYXHqTBURXPEPggNDbyQakqDGVxNtXYeqDE5M1HCaNUvzLLsnNhinfR7KsGCtHfNkH",
  "key29": "5uh1y27b2SUmoNEDMMpCmcTCx5XNk56NzeZfRLipSfz2yyVHaV4JXH1PRPnnzaApSHS8nznogijSdXH9xgHLQBUM",
  "key30": "yy2gju8r4TAgRwqzzcaFc1CKPfDp29dbibvv52jtRRF5KR9qvS6efHovDUZYqTR9nmA4DfBda899HUk8XRqDPPC",
  "key31": "49t81WQgVriHVbwJ93h2Bzipf4Yrwu2tZT8WJwr1aiAaev7z553BJAr5GD98CayNFoFnNET2UhVreVCtGHvQCzGs",
  "key32": "4HCFffz1d1TKNNF26xce9PVp6ucSL2fnuKxY5tokgEtQKK3bA1UoAsmtACKik97Ld4PzoHPqaEg7gRUQkEhca54R"
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
