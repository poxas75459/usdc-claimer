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
    "3RUBxtndWbb4Ash2cLsNqN7mvEnhxCP8x1CsENwiRHbdncwRzRu9JkDoMyVwBjtBRNsXAGgkL2Zw3jNtCdmQurPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AcG9qgZKg7U7oWo23FrxPvFVWEnADLzSRpbz7CB2TqDKYJjUkMduLrMY7LTeHsm5yawui3o93J3a5Y6CJmorTWg",
  "key1": "G2AC2bofvJykwMrNcYLVX1K9Auu4MYVAACiTD2mUubV4gVSpfmuNRjsfSpC4sgK64Bo8Nr4pA7ShvfoumbhpSks",
  "key2": "3cYiAKfn3ZEnJndg8qKNBFLa71Uhr17cW4xgL852YJszSKVUDLZhQY2NMLwTc2hscbbUNScHkpPQ8RVBPjjnoDxC",
  "key3": "2K4VZZyBGSuab6uX2wsyZjxpA3KtSo9zJmKDSyjQqb41wZDASPGrg97YDTKfkzkXkkitWTTf24tbEo4LSDi1b5pt",
  "key4": "5SH1RQe1JWuKwGMuZQMChq17UM2CpgiAgnySnhc8nLfUR4rMwNPNHnavWQiwvaG63TM2378vF1dX56Uw7ScZHpo1",
  "key5": "ne2T8Ys51uhxZoB6szViKfW6YFNMyxAtjBj3vTrQ9EDZFfyK174NJznBBJafXkDtK3aJNESo6D5aHkyjxCrmRdq",
  "key6": "4SaZ5rpu9BqAvaVwvE2SpQ3cVQT8DpGKLb72SaYcw9oowb3ov2StSxCuMcRgmhESMye49oRAYJqBhBhAruwePpNV",
  "key7": "2J5wzXMT8wiEz42kNvRuxx2idcV2NsB2WSkKe5t6BccWJgM97W7jyUGdowQ6Lad3kcrjVGhgBMeZvzGnY8DozEDP",
  "key8": "26oLAVV8CY1fz8bdYVZ3tFTC1trJcozgW8BKa9rn4YkFDKWwQADs3nuxb2JYyEDaBXNoozKbB4grp1iScqNtpq26",
  "key9": "56kKpV1akkgqhHRAfkELCxWxu8DowQWidz7iWdN1LcqHvh8JAvvMARE7RvKzXNTeQfQPFWMhGXeZdG4K2QE2DBUv",
  "key10": "h8t5CZJGVdobnjE5z6JU1gBmMuuf7Pura856PT9RtcV15NLVkZ2UHdhLxPK9YKkjgHwHHToqHQeNY3k4pFrDn1g",
  "key11": "2jX6daX7TMLKZyvmuqfLRRAfqNci3rhHK52Ce8XVScwkAHfTsLBVp6i2AhQJc8Vdx54V4ePXtiXx4htJQYEEwR3V",
  "key12": "ZPzT9nhLDCcRXri7WZm9WvXBri1vSSxke2kNvivEm8KbYUdwPXYKVnTVgQXppuJA9Z93n5jE8AKvXtQwnxK8bh2",
  "key13": "3yE8bKKjAAfWJDcBJvaqWTXwRS6x49BkScj8siyM1hgFAqFJGyio1sMhUV5d5mL5kHDLm3y77Q2M5n3QvnK6Qreh",
  "key14": "htcLLnhRyXxex8b53XFY98hDKzg5fHSXMSfdUPNSravtd3MoQvM8UacpGb49DE6zprJZhXTZS76n5tmEDuq3Pii",
  "key15": "DsXjLehHG1k4SACSWY8EauqJgnuqeFFvqEPpzcYmLYMTWTMgyyiV4LMJ1wbVsiTuksijHzhuGqa52kRrQzaYx9b",
  "key16": "4buA449srPo9eeWPCrhBHRHyi17ybLVNX1yMp4X6EYSVWu344Lhfk2i7qx9VUd5rZqB12QeiyhHxR4SQSwUNtGuq",
  "key17": "QUxzaDUNbSe6oPojVGk2JoFKG4TdjotQeCYp75rq91TziF3jdqynH2d4oArbGcGxAt121VC8GLzTm31VPj3NGKs",
  "key18": "2GHQQfN7X3RN6MTYi7wNobUJvoVD4kQVV3v4cmx7ZYfMtQrLgY5bnmDCtiMYBKUeeKWkBKBfY9aH3dV29y7WhHJJ",
  "key19": "36AH9zonugcnvv3ifKXdoS1NsnKG5UpRa2VjGgYmQzaVWMucxDQiLrg6tgij8DqAdwBPDUWuA5E9UZ9yLkpDLpxw",
  "key20": "214oQp2aB6zcXq87J2JERf8f8iaaxa1zkBVeedwYRPwBUknF8ina5FrMi4KqDiAxSbefN8kLeUiT4UAYkPtWg9vy",
  "key21": "5dV4WJsoTVg2jTq17NHJy5jZUpSGxxApgVA3xCuqd7LT9XBg7uhF9EwZgJEaWr3TwqPewMJyv2u4v1NbVXDWZZYS",
  "key22": "3mAJDHaE8ZeAmvRi4LbYjuy7gyPCxSqsbfMguUqsMHs3m3ASb8Zw5VUtbt7nTiSGfFnz7JT3J1JzbAyNnGets93V",
  "key23": "5s6JUZcusijqKUkAYAZV4XDJpLLoaB8nP5unFFGHhy48DF4S2a8CmXKvwfq4i2NHPjDe829U4nYH5V1LgEBcH8sm",
  "key24": "AgRpCNThGvXMdTes3bkKyEor4YgUsCkhoXxVTNfW3rg55TKTbBKfSJD9JbrPvW8nmotcQTmJGhMx1eSYJ6yRA16",
  "key25": "449a8GiTRnBS69VW3rQhBC5pAb1kLHnLtKthyWhTRJrxVLwpEaTt1CJC6m9yStmJmd9LDQ4EmGyuWcV575YTLjqs",
  "key26": "5zesj8PE9njiQvkXtWEDSfhmsgFbm3f8AEVDW6m2SH4uDyP2oNAzZV2conFVCJUF6GQKKv7yZ5NSiis4zFqWg8px",
  "key27": "3pPbsfyr8QWJWsqYQSoG74oT4GUiHucVNTQfgd14Qd2h7cpWfjbTHHppQgJEfcsxM5JReumkdQywJmJjqxi9MC4P"
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
