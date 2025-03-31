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
    "4FgxZ7StQtdV5e54gqpvwEedsa3mimo5H7jkWViXTnQVXDETNNDdbd9hkHXcbtKwEnibo8nDAaWoyM4x4YALzPhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QApawJ1M8ku4UT4g1c56DNxeNTRnX5CZHJ6B2TUUUsSPrjDXKwbdHbCkVpTVpmn2JPmZppWzCTfHjRBeU8Visdz",
  "key1": "4QeAGahzS5XrqtQL9AxYuifCgDngFCTgSiqKR8ziE7r4eFRticFqVBZWVKKKVA2qmteBgN6hbzfVDd8BNmbZ7G6J",
  "key2": "5twJCam4nVehkc4BeLop7JRPcLxQ8SVpB4MMkSqX3eTwJQ6GCvcnYFVfNm8L1PTmhDKSTSkFJKofJt2Apgf6hSLH",
  "key3": "4CDzuMkXNJLBMK4HHswxob843FSWWjBXudz9EWi1EV4wNAnb9M3o6zkgaHUXwoy2K4BqqE8AdrePcViwkFwnU4ii",
  "key4": "3Wng4aZSvM9QhhSzzuKiWEsFHxUrcwcNfE2mcWJbhX48xToMTmGZQ2ARvXYvps1FwdAHmTxjqKR2qQvhurNCJbck",
  "key5": "3FxEhrJ4pKXNnmco3P8tPp97LEiaiYU9kGrkk1QDPQ2ijzSLjjkawZd6zdDFzby81BwYwWQW5awkd3mwwFMhFzD6",
  "key6": "Utexs3CFi5H2v6EVXt11PE5hAmNCUhAbiqRyXf8rYACbzKepmb5Egb6ZqxqDu2YsKfGnBCGNz75zWvyEphVBgqf",
  "key7": "4PZn7U8LqDiuRwRqtvCW3aG5QjdDAEp9EE6UbsREu31jKkXPtVUq1NCpQE91rMknz3h2BVUPJYJfXQaCcHNG8DLk",
  "key8": "3bEVVFcCNoJAvrG1UpeFRWqPu7evzvUCnz4QxvLCGYAwv517zcqdzUgAkLs2kybt3NAd2Pj2hddCkH4N6rYncpsc",
  "key9": "3S6iGEwrqY8CSScNweypJekEiowuVfGm6WGSveAPiLVTc5wytPygtrMdCxjBwV7K72hugHn1Dwgu6366gS6guTjV",
  "key10": "3QFxvEVRL2doH9eo6emUbEdpoGGKMdV2LRT1YhWChR5vJ9gspotcHDrPbjDUFCRjoAY3xatJoXoH1Uo15YTkyWiE",
  "key11": "s6m2Q4L8TwocTHzRwQSHcPqFzJxBZWDdvigPCRUM9ANUoG8jHcQgXt3QAYwAE6fTsLSM1ZpKZXcX2VbbJWCgSUw",
  "key12": "36feLRYoKSJ6wG6Ny14jFgNQGFzQEoEQNeqZ6cbdGQYYuDcmjTBmPTu5WTX5hfrfjP9CrRJ83kkuTkfXcgLjqUAa",
  "key13": "3eUuH9P866TUF56hNdVTnFmepSWJ6JRmE4fK8HqunMHgvbH8aSUHnDkvJA47eWD5R7kD7CmN2XMTN8sUWFQHz4DC",
  "key14": "2RFK4HCj11BW2XFLoG4b83GHUueQpPuj6EFCQdi2pN6F3sZkfCWMnM9g4p1dfyyvfnmEh1bwo6synFZpEpyaBk11",
  "key15": "2ztTYooRkoD4eSvLq9fT61xCVy4CdgrVdokjPCDnxyY23UfTJTTW4LvahvRseDS46TBwHeSd8i8adwhaJa8BsECk",
  "key16": "3Ts5HugjBLexMBW4uFwg721XMJTrtgZumbPkXCLkATexXtoYkJyNKjAsFprhHKC2wCVTnzF3wGJpXZPZnioYFBKF",
  "key17": "5qNdREwjmLd6cfsFf89Htq8wpwMszpax98P4zZuaGHM1gPNbjpTP5FcK6F8LD7nzhQJyTXNb3AbMRXNsANXCw9Tb",
  "key18": "3vLR9bGuWi8LtP3NUoQ9ZecTTDoQ53D6C2NTryGtGQTPqDnayNRFi1fs7T5WAvLHZWsxKFkhFza78zevaNYyrPDV",
  "key19": "zA7yE4c6JrvKSCdZFfWPLcfjSKsxQEP9drW2c2iZiwCyorDwpAP4aPNhG8u6oAaXLErxjGYByU4hcWBUZYcTUa7",
  "key20": "3aSNJarddNaNus2GjMNrTYfMoJpwjVTPG4rU71BwauzJkfykyfrTPgv48a9RM4sCQaNVytcHA256sCXtyPXbnvq1",
  "key21": "3btmYRn1koMJmMsHBzEJ9tNXtj8reRec3yzhzppj9iCEV2a5UUysVMBTSCZ8vXH96k35CYhPNiC2tnHbKeHFPcL9",
  "key22": "88Du8T5xWyi8UJwfYkt2WxwBwrBDUsn33FqLBDAgtWVs3eycQXkdJCSpgPU2CSnX6B4gaJpn78RHVMT5SDKLkwD",
  "key23": "T9BriZQiAeDMTZsUQMqiedhhaWLKHbporH69qytqJNBugjcMeYQUooXDKPHAmCEVvTpEyoCwRJAkFu6fzG99rtt",
  "key24": "37X8e814mFE8PzUFNxDbLvsiB72MVstHY55xvX2SMP7eD1kvoD2SgSBu76REkjw3KTRcuhE1gwzj4sGrF4hFt8a2",
  "key25": "59jynY5MFFKYtqA9KoYyJ7CHtN5XxUgGPWWPJp5weoVLmEZ4LxsFdX1rMNg7owjVVTZ81xnJrNHcynYuFFtb9Pyo",
  "key26": "bkWTtav792xPv34yJeXpWofbX8SEQgio5vFGGa5L835en2dvq529v2HfddDUB6bffFk5kT9Bc2Zuhc64dhpu1bA",
  "key27": "52WwM4orztoqxHNjVp4NsM3no3ggsE7krXJzb1evasBXd4D9N1tCMcmmTM4f3fPUxfHVRq551JKByv94mePKhd8",
  "key28": "2DcgKuLmoGizzWSjL5wwUM6dMvYXihZJpXYHxnxbazPYypHqzzh5YC2ZDJtsVQo9n2FXD72DGULKcjooC9VEsQWg",
  "key29": "8et5tt2Czut5LFbs29WawRDFwTSKBwrdNsFd6nFsrqqTx9Sz1eWLQzMpGwDft9Rp1YZ5ADch8KP1yG72NLGpVqS",
  "key30": "3FT22TsHmBjjxc1A9P1EHKyPjsDXkBu6UcNjkiSRxQ7nrEzWkcxSk1w2Dbq6pZXjcfoF9Ta4kazfVYWF6iWp2Fdx",
  "key31": "632yC7E4HhypakeyrhAqxwB2RvfEgJ9cBpmw9VeiB9a9xKJ6YRzLVpBfmPnqfDTD7T52ejA6j9gMRwwEeyGY2S4u"
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
