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
    "4DKFoMH5ZB2y3MkDZcUXnSZEnVxbTPa7uqPAK7NiJBkayZmtYuoMVhQU4V8CrSgxUCPv3dpNs3dDWeZNrJ1wGd4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xde7JdczzTkR93okgKaj4J4pSapDKnJCYis7BYh6aj5yd8gN8a2gEVdPK68sWmrjfkU6pUfU76G7jfzq89vVgwQ",
  "key1": "64NMjkpDoGcGSkPSALAeLEDXyP8R59HcdmDoQLRAgfy6NyyXmzVK86ng7NGReYNyQf2VAsZC2SDhpJQ73iDUkJQP",
  "key2": "4wKRrcbRNFr8AwAvZKE7K3Jzeh7mCBERZ97caX78i3GgCvMcefb4KvhKs7TaVwPP6xeSW1QnDhsFCnJsNV3PYF1F",
  "key3": "35nXWdQTwFssUog1WQ7zZPrBXysSWLbWgNg1omz9bXJVACbD2efCvjzS7ME3mm8phe83eKjjGQRLD55q6jfXnZPE",
  "key4": "4WsopiTResA2dz5rUjQjwKmq44CJU1HhtBdfYuygVyecpeWCXWvxwDP2Upm6qHrsMKUDmfMMq6vvhnqttRZWRMTr",
  "key5": "5kTJBxSFYWBodkrJ9rApQjVQmRX3YeDD2Jw1bDCFwr8TeKkNXY5eCXrsMs3CGdMiWj8yCXJQpsTFE9BcorKsgXB2",
  "key6": "5sF7Z3HA297W2HeGdMPXAFLKbawq8JRxEMqJg5uNVEDi1pQcMGq2ziVK4DsEaMEZ65C2bCusxnL6gNU25LdHb1ki",
  "key7": "3YNYZC7UdryegDtBoZFnL7J4x56ERtJLEjLaEwrrSUuLLHcXq9WHVCvJLpSPDdQGNbmhr2mgC2rWM7CatBpHvnH",
  "key8": "5wWeycEq6GhuxuvTswGBaCAfqgsyvaCVZoBHJGYeHAhMpZEvE9k18WBLYFUNDZF4MzaZchAemXPGTrV5qWaZuvaX",
  "key9": "66yJiE2rg81HHDaPoCFNAyeLPRyBPhjJS3tDK3LTg3u6XMVy2gczZgEiY2ZXtm9mhiTf7covKmfdtSEFnkZaQeZ9",
  "key10": "4QrtN5sN5YtjRhcmuMpEnfcmcG3j43Jo7PvCNtCXcUiUgQXdqp5hHFbxodTXBzwTv5iAa7Rg432QdYRa1HchfQLq",
  "key11": "J2bTcJakWjjBRNDfWBJcTavW7X2x7gnXaGiUEHNSBqaCiTRkULiBQcmbHScJEVEk9CrUAjMQ6RNh5oMU4uuWXFn",
  "key12": "3h6T3z92QBcpR9n6NaFjEw835gTEiBnZyHi7djSbxfjvy8j8NxTaCAyumAre2i8S9DmGkvKwriJwDFXihcibJC6h",
  "key13": "2TQh8tCeyagw25BpQ6ZaSG5MghB9PRNVDTtHwCpYWaaLVyAb4jsQH6rrHAeD53sSgucqam1v2PXH5cF6vMEXsNwB",
  "key14": "3SCuwihRGW9piK513rYyiT2TZjAhaU5svAoupixaGtp69x3Qx1LKeURoXyW5q5MQi5aFuQNK3ycMNfUoyFv5JUhh",
  "key15": "4PBigGGdkevx6xEwukgqPqm2npLGi1WpcDztrTjZCYXphquye95RqaAqnDiFijRt4SkHWp4hT4TpVvJaQhGcwriu",
  "key16": "VDkjNzp4FwFvzuAvdjorpxEQQBXKMFskTR5Qetzq7Q3oJ5vHtcBf61Fh14DrrwK1MyHtChiy5S6bHp8pacFuXT2",
  "key17": "3mTsy69eDhXAxMJ4CBN3rZcp2h5pJ5mn9DF2r5aSqqW94sebCFTrud6XFUtM7j7h8YCm2wA7B8VpeYpfwuGFeGjy",
  "key18": "64EiYND9knC8gZf47ypdiVgpqYn42HxJW79ftmBFsysMviPw3pfyUG46HGMuMRt6s5QKHrugndaFR4fvhnngq9dN",
  "key19": "4bLZKhRW68j1q6rfqaWyKE9QACU2MLkhavGi77ap9QfKcovEvzPugjNcxqmsy3rK7gW7CEAtvnAC9FCGY1GZM2fb",
  "key20": "28eWF3Btj6NtVvXAKmx4eioKjivGFKG9iTqPqH6pdKpSMh3DcY3YmTY6rxMGnpaL5KHaYao4ALy8k9KEi2oGNhCf",
  "key21": "3hGMfzcDurPJdhGwvhY4RUNGw4P8EsPj1Zc4D8jqLVfj5g8UjspT7JLuzTwvYtQ6DDWd3rRGSDEuLDL5omeEiWZ2",
  "key22": "32WkkBihMBhNQSGfRsntNsNA52aHJzSEKZhrbEb11W33Uv5KaSe8ajTbGEhE2nERFkCoMuDYVTJEziki7uddyr81",
  "key23": "3ovfTMwrXY2ydozsJFgRa2qo138hmZNYB4dpK3XQgBhuBsLekUdPruWuXnQ49J27cAK7VPFM3FEgaKP7SH2vEBMK",
  "key24": "63ftUuNhBxRheF1vXYzAVt3ZemdD1qNtHNEBYavfTeUCBK4WKe7aUB18cunp8dPr64RGPAySQLDSwNwLYvitSiMs",
  "key25": "vibCbfAdyrr1gk52HyFb9TEBAAaDbWb5gEMD7KYNivRxgaiVicZtW3rRpd8w1mfCxHUXdWuVspemGc1HnZCC28T"
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
