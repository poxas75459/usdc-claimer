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
    "5px137jF4wMUovikJr6P4bMHykyniXZrQY6ikKyskansoZvLzkPZ51d6ckbmW1sqcMMyG3FuE584B9m67R8HBjSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vp9zQy98bfbDFGQGHZzaN3XSvZvsswkLvqqbtU6iYLCXRxwnNwdSGx7tz3pB3WdYgAEH9TSK752sTFbCizCHNGW",
  "key1": "2f453LR1mvqjrGyb4QJpF8R95p2UKcyHTmbmZdrnbsCy8uDvn2FqTrDquw57sbvnfL1HEzak5nTLfoXTWgqZUHbq",
  "key2": "5qtV9TjpLnF2sAVeY8yLAX7pkXhoBS4Cvfc344yUjWuFSEvYz6GgfPs6ctrafSy8iRQDMZw21uW6W51LJZdY1LXY",
  "key3": "5eXGTEt6yNS6HHtewJh2ovtcVatMKWwscC572CBPzVCd15NWgzZDpTPoeDKjUZY3EgGWUyRNXL3bxNZPUK3kLasa",
  "key4": "5t9vRY61hq9JusHdQdeLmfBoPQ37ah9xD5BSrkzt9SQDXWL3nuosBGr5xXftkZT2S4sR6xUVsUkLw6NEU5KQeD8R",
  "key5": "4MXzrb4bRdmxK7MRBcJqjVaF4DQDJbCWPWyjUC1RW6LYtyK12tfPbKrfRe9Rg2FWvSBxNm75AxEtGw6gyhZHgRms",
  "key6": "31yCSoCQG7xFdkLiPEZPaJQRei4iny7GDEVwW1a6sBhT2z1E89zsJnxCjLd3Rmkb1ceGv3knx6mfp5NiFKotA8Ad",
  "key7": "4jbepUQ3juQxo7diBEkTFgPJKTWxAC3DbiMykzgAh3VcYgzftFSSQib7Y9sqjgouAWQ3EQbpSB8h3yHV2wpjrp3L",
  "key8": "2wvBdapPWtNWB2ZjfPNoNxJvdBfQFg4sujXRSqHEnGkjeXei6EhjsV9bTK7rCSkNTg5tQro4sFvxEMGeDcZGmF9F",
  "key9": "4u2aWhEbKZUMXFGmggSYzdcogh7QY2mF7mC3jLmLT9MBDJrWUHFwri1KqTjzdoi9opdakJsXipAgKcrtwAdeUBGT",
  "key10": "2VZL1RrRb59VBjzAFVi1HhQ7QWCgDU7wzFhzyvYqGMBSYNxwTFvVvGCCNLj8jGYE3gTVsZW5zJonw58NXZevNXSb",
  "key11": "349nngtqkDAmgQt3cpFSbnLwLUFg6dBZ5ZxXU8cBrtyFdM3TeWpifmPHaN9onrTB8p4pdseXfqN8aGnD4XPnepjF",
  "key12": "3teRA1eWUAtUVAczoKhkV13Zq2thLrAq9UewXr379tbJPeSC5mhqfNDxnGWErdLJt2XntWsrKRBHHrE4M7yrVBWN",
  "key13": "3RoVV1Mrjyrqh8AutVW8zQSq2rm3QAicLoyEPaqdACLzq4ks5wwu9ZhikEtyQMVXdfAKqwqymwAr9TaK2rZW8Qzc",
  "key14": "FfebeBWZSCrRFcN26QxpZEwg5Dkp6LJ8vURPPwMpc7P9akpigE9CM78ePuJdPfhDogPx3p5LQdwc88PSccefqiN",
  "key15": "2fjiLZmSEoMbbraXsq2jcGe68jKispGSwzdcTg4tsdG46B4iWTnxserQ3P9udFBn2B3MhcN3UVS81Qyq711djUHW",
  "key16": "3ebPfposqdJudzXw2TQaQecTjKYXEUhjzjWAeuuGw9hnR7yum33KsoHdGG2v2Ypa8PPP2vT9ftZTFJ7ACxBLX9to",
  "key17": "2Ymj6TAr6DwdwkEdbBbpN5B9Zn8o7kGMaRA4ze9pppfoBg7fExGsogC69nzbezh4hgre8ArwNoBjus4opEwfj8FW",
  "key18": "4JonHiFjkRsTS7x2csjLrouZM5DVq6cy2rYBcirc1nMkniuAjsW27tFTjBNAccDHVEqEP6GJZUWG1v8c7TNtEzPh",
  "key19": "2Fyox2m63kiWQegT3QPZkx6nWBS8gsgNVZhTiBLK3LQxDwpxrqruPjWPf39Xqa5Ye5MZmQgfvuQvtxSDeLDgBAZB",
  "key20": "eoWMQznVGbQe1kd57jf2uX5VCxdeJ6tTFTjBneARMk4EVD3ygUrnDmLyTQLtLxwN6vSgywMUKRVXB3dAetMGHG1",
  "key21": "3Sqorn25rLY18FSut5ezyFjvKkejtaaTHx28JaLM1EdC8tUA1eHdwc2nGxZXgEHRGAuZdsEbwL6GZsKNA6neapJG",
  "key22": "5U1thePUojei8rN7ohdpXVjfbif3EoCMYHjdk6UzfvKjLLs64rdppncSJQHde6n5nwAMa5BVXopyVcC49Boay436",
  "key23": "pmknQBmUi4bNQRJu8QvByg7WcnZr8uD4vmD4a2cYYbp5g2PuSxdgXJVQqPw1q4X7sRHA9EgbiCQ8mmvt6SG27hq",
  "key24": "5QhJTNc4vQzA7syvKugwVS4EoacY6ecCSTFmvexrqAFbFfhnxAHA2Gi6b9Tsq8Gy7J9hyEu5bp1e1ZEcyWmMDtdp",
  "key25": "6x4aZE8aMcYbXBsvhx9gmUjQf6SmAGcdLkUQAmHfDLF825obdmEt5zZHJ3hMBZnjnahodx9DkKKXonXrHhgumaH",
  "key26": "31cJFgN4SSaE8FoZZFJogqZJpYve4uYur8Afnctuqz2tgAmmjai4UVaY9dLrioHjUi8THgv3wFfprfn44pQEzCNk"
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
