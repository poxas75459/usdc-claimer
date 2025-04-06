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
    "5H4U1ZKAojsF6W5CGeLhcBY1EnoJ9VRsMtCYzbGmfPebhnDnMicbjL8BAnYDdVaJrLhZzdMMd6hNifbuD9qyocRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35eAsaNXdJWAuasFLHWrrMDQSd6qXuKTa1vHSwCy14F1vdq8i7VCPRu6YEYVdhPtpRDeLnt6At3dQmzKDYSAxcS3",
  "key1": "2fd1sAvDxNzUzs2intHTx3V4E6d2NXjAoECZETcgbhMwC7sEvaGP83U5hbqcCpubdT2wi5Uaz5yr7wzx2AaE7VWP",
  "key2": "Bi3gWL99SrTEKnnTJ1qopD28C2kkMQQ56uiYSwLqXno8jtTwbGZ7yYKVQBe6TsiX3Kx83W42SfGbhJzoedZfeL7",
  "key3": "124MsuuPTZ9EQq8rfRxFS635vgcFFL8D9CzLPDdkd3M38VWwnmXsdrsRVGeRjVcdpFSpSwsEnXfiCzqqenizMb46",
  "key4": "soaXHfroCZviXwQRnAhAoPtoaSbZzRet5PknqxeXEPZFxVFdEhKeHdhvZUDwUTaHLkTpMXMipVHY4hpTEEzpbn1",
  "key5": "5zXnLvYLXKYUPtSHqBafSLV5RLQbrLRb2NcfRzCWW41LeJQqh6UNHFHq1NFYg8hL7veztJedvoYubU7wK64kSKaZ",
  "key6": "3P2DiYsFrGe2xtWTGyW5jczYpT94AY1JUMJ57KucytX1FNp1qaSMExx5we27Ywp7VUxLwQZs3u3A5nRHxZdw8f3K",
  "key7": "3pkN63nnFR45WDuKbyUkZt3Qv6mYxomsSYVxqmWi4JTZZnLidB2mLFAE7fLq5R2zD5GoZqF1MFWL4VBEt8PCQ1EF",
  "key8": "5sZujNakJCJk98guCD7xEKV3DchhB1KugsbJbFHKAQLdC3JLbB1TWA8c1wok3yWw9QkfeM7kGLsjEeFPkdZ95r8z",
  "key9": "3Ee3JycWG6JciTT4UsEzbXL7jAvFTvXPJNZ87g3TeGqA3VunkFksvpWNk3ZEb8WEB1rEmRAakxzUpqoJyVHRgbTE",
  "key10": "T52JjeMJcyd9LihVvB3MZQdrms5MihTDLfXtk7hHdreFoihZVwQTtSHQMZLk17FrYNdTtVb3AKGoXixoTBTQntk",
  "key11": "3PgUmmXMV3WAhhVquEBQi66fUDHNZCAeprbCpK58Ho4gjsCXE2yBv5DBY9rb3GHdFpnHvFfrdmtNrEdsZroPFAYm",
  "key12": "3cXV92jLY7kf9YeSTLdfuBNhwF67yUi9tBcNYVchSGHnJRTzBzWuAXkwVuQN652PrKsHNL7oXMKcHQ8qeyKKrfmA",
  "key13": "4YzPPp7XkNaPSf7MY9zfEK2XfrFodwNTBVkt2NvZvk6u8yJ1es2d7Bd768b16SD8RmUprfaaL4AGnt55CfxSNHpG",
  "key14": "2FNugjqLX5uqVbk7YwtfTgDTEvEWXWaiMmUHN45jNrezbRzguEQTP2WJQnimCZNHVQ1Vvvu7ZYKPEd74PFbsNsd",
  "key15": "2M3GNAbx3gmH9pjQCwf6JETQ1bqGgH8iZupEQQszdbxSbkGxmmDdiLPdE5aNcQgpPprmSzj4DZksdHy7WQe7bT7G",
  "key16": "2uRuqkpVUADkUA4gg5YeCBqrK1nm4n4EVwHvCvUY9Z532RFnPq8cJUgxwgzgXqtFDd7K54HAy5MmX6n5dUdhWGWo",
  "key17": "3T6eLQXKxWCEeQQBLGkH8TwaBLUjfBq5XFXyeUCDwPBk6CiP5aec2hEwt9qvLbvVfK41p8pz6eFmCrzBWugTs6g9",
  "key18": "kV8rXia3vLa9rBH5B8qYwuMqsFahhovi5N7hzFYmuPDCPHMQWbdfgYwN6sD2PMHMNjdebQzXzJsMGcjGTKgdYoY",
  "key19": "rFfFxKpbYWG2VUqbyv5kXP5MYV1huB1AyfKqpF8eVFxiAnPpx1tJM6USKVLg4C8ziWNbxLBxKtVmn2sCQYmxQ1u",
  "key20": "5g4m3GLpsqe9SjkWNDr8yHnjzn8Yp3UXFfCmNK2oZxsjPgBcCEMFt84PhYTtn4Uh57ecM66Aa5pDvfieDJpG3cui",
  "key21": "8DZYi1BQWMrS6FeKhH1ZGWoVYxixw6B1c5eK2Ds1F9GQZUkzdYw3xGXVdsnC9F96cJuSpVJMymusZvQZsVh6WyT",
  "key22": "5FxGAKE7DoZtDjwYfkry2bDMMvtgKGVEz3CWvuYpZM9SGJoU54X46c3mf5y5YD4ubfb5nXiToue9j4KmxtA6yrzn",
  "key23": "3M3RMUvrW4f13JxFtVtyjqPB1tkXkLsMEkuHA5AH6WRBFnBuTXRtXDASGxrMA2NjU9n48GtkFz7bqFzCHv4nfq2N",
  "key24": "3Mw8Vofm8KLGqXRCNgWswNtPE4wKKfbt8sAqNvPVpULdMYCcf72H8pozyZmyAjpzY35zWpamH3pJEnB8eeeg9G3H",
  "key25": "2pLXV82pnwV87AyhYmRWD8d8sAyMPsfFqZwkD4LboxyycUVRvfmEcgewLTAgPNa87CevEvFincaWjy9bJYr6678x",
  "key26": "kTHYP6bTTzzFPbzwNqSjHzYFJo2j3SZBgQ9mCHYSg2sAHjEvWV4NggphNedNkFRctLVMXGP6hkzvQCZM7scLzPE"
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
