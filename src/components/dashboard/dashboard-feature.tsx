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
    "2CxCRQYJX9W49RZ3Zkbh6Q1M19d49SSoZoB12T14px3EqwzDdaeveYa5jbHNyu2HNtfxw2td69e1ee6QTKJMDRQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RPVQTHLaoSbjq3kTfhv9f4Krweb61N9bb39mgMfWHRwUvxQhmcrp8wJ9GMdE4rdEEMii31K2ypCgDwRhEZ5rFgJ",
  "key1": "2mbSKq35tz12sepc2hFc3byJKVghgk4ArydMTk5FMm4nBpRXhiJdz3fBMyfSADQDNQchAqV1uwS14ah1ogw2TRgm",
  "key2": "5kLes5nipwtopb7ecd5maBtCQVKdwLomn3XR1XKQFjWeEWZ2cAfMkqrwdWZJ5xkwsqECJErH2YajWaohnV1TkRLS",
  "key3": "34VPv4fYbfVkoksDcho4cC3BYViJ9e3p4JV53Xm5QAN6jMWP9722hrAPE2GSYruEKqyqWC5X1WKmrovazcwhdh4h",
  "key4": "3N6opZz2wEKVkSTzcwP1fCBGSsWG2KPajHUAYawEPVFpLo3f3e7k2aNX3VyCT87FewWSBspP23EEPLDv6hWHkjtD",
  "key5": "2MMr2qso1UzgH8xuyeCaqyGB6eYZ72K3aaxZudeTNUyn7tu5a95CtbbbEdSJoNhg5YU1YN4GoC8RToRLqJS9t4YS",
  "key6": "TTZraCkSGgCVoJqyZ3CvuMEPpbGJVxHi9cbLuYCYdpM3JxRxKGUEmeDse1Z1GFFdErhUA5Yhrk66dVpj8X1M9Zx",
  "key7": "3BMsBhgnpiREvHTubnpQFgeaRi7VbyB6163zdmfL4Pa74zzoAt2bKfJx65aj8nobPHNiMyPnPCeuWSK3gxyPyjgg",
  "key8": "5eeUwqyJyesBFcP4JFsyxjv2xVP3QeYkYTtp17RbqTRwp9MT6rPvkBkeXTnCagX7WWPr7uLgdRPVFeb6fhYEwbPn",
  "key9": "445ymjrqJhiHLVL6WTR7SLfMJhEA1KWivgU5vZQBjuksm1X3wDYGPggP574zJJELK3FccMPsE9JW3FM6bRpeEYZR",
  "key10": "2nDnwHSnRPejpnjX6eQk3CoDGFxW6nVAvLMHwsg9bd2KZfJsgciZ4L631fC1a4wAL7WJjbLBFg1mMCT4SzHhhNeA",
  "key11": "2LMZ13VaLob6fJZkjF1ab59XwdtAkNRmU5Kz1QBYeLEucjoeuZjwdQP2JZPm8oNLMQF6kVPtkPMFH1CYzYbudr8V",
  "key12": "3q1ydGPk6shxQxCuJu7TevtDoMF7xpjcrbiBDJc1NztXBgF9RcvJahwxEywwiiYH8JKpybnFrUwpWaXXbKwSYPkL",
  "key13": "4hrKp8AwrgeXGbknSoXLurCYH4tQrY1PDtGNg94xxLjVGXZUdHgpfLHhBHNFf1WC7zufubkvqxHoGzBSEZN2F1Zy",
  "key14": "3HdPqtSCw3e3JYxL3GDvkJ5C2arFs9B4Db2mCxTNS6AdmtvbjpQBQagWRinQMcyHuxusknXz955QWuTsFaQ7YSqN",
  "key15": "2cTpFazTzdgDtR2vkwjefnV64pcwwAYW5Z4wEYCqWYtqxAJh85jbyzWxsyWf7UmJjW3gcc3EMEGa6nSt1PVz7BfR",
  "key16": "42iCaNdxR6FSQCBXEeYRGUi3cbvPVdQ6gysUMiXgq8zvCnts1sWJFngENmLWA9QxhkxM3Mo7CsL4nofwyf19MTcZ",
  "key17": "bTscJ97Qof6wDfNLYEBieLwVoMWEgxps4FoGWQpqHQwgmsQ4Axxh7UHp8E6jmFPgGT1eAuseExbactCZGVA6yYc",
  "key18": "3MFGerB6q8wFyThJtBbYkzGFR3hBX9LaGZXsxBGQRbFDGX78tffqeHBJ4i6kNS6KbgdmmhVvEHHKu9TQgsnXymgS",
  "key19": "3wJDoYVAtFKfSFwSvC3dmhDbdBQNrgap45o7GBbLGNgtxX3fT6nrgtoh6BnmrjQWR5xStxSjhCc6rqNE6FTz3zFo",
  "key20": "2sLSNUAwA98UTi1EgJcVDpyFf9kshW4gBa2eghQmt22SfHxqPfw5eCMVuR8j3RTzfVoaUw7ZFndbfGTRLJCHcFXL",
  "key21": "4USq6RsaUfQjfXkzFR4fssnRjdfM7QQD5PwPLF91GfyaLDvXM4nYQerivN3MjZwjDhyrFVXrNrKLUgFxVj5a8qvG",
  "key22": "GPx5fkP5iCaK1K6Zu1wwRwkyb8ccWWxBEeF9dWPi7Ckfwu6wHG56iiz5iLyqSfEf4Fq8awMuLfpHivGLcPcTt1B",
  "key23": "5bhPKqsxnz3Cxe988RkD7y8PbpySjn9ghLsfRdmzAHzUt4SBAoom27Ec7qRK5pkRKTFMUXwNZqLsh3R9wB7wY77d",
  "key24": "52xS4uhSMNuVfLUJEKFEshh1NBm6Wwxr9GyCymZraTDr3VityfZEJgedu6vNtFQdmPrM4au57tjngJC2soa1p7nC"
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
