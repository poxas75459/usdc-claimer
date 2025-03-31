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
    "Q5BLKGU6hcjyyb6n4Mo95XnR5DVwJAAr743XqRNvrxxUXEaLswQbpiiKBpy2tHoduEkbMZqgkwFh7wMdmfCaZgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58tSuVwCLSFJXzWN8BdrPyrBRwFYzYEVXFCTgofBdNmLaXY4AvZZ4fwSsyjjTD44peje4a4KYy1nvDB8zgZHZgJh",
  "key1": "PdfCPY2Q5NR8kgmMu9hHC9kgw7xGSDCM6DnwSk1GE4wd3mq4epVnD93jhP13U67Us6KqYQ6UeeAsta5Y1Ymr59f",
  "key2": "42tZVu5quZhLhF2brNs86ss9v1FgbPBcgwmCKA8monYLZcauW888W3CT6cF7YWoKVNJCG2ZZBzBrAHM9Azib8zZC",
  "key3": "5rvtvkwzefZQ95RktoJFhbwmfU9fYJTbfT3Hf1WxED7CR3CAgMkBkw3aYBa2WUK65A5Fh4KPYX8v8W7xMSoLRtFe",
  "key4": "67SVcEGsjyUHcaYCETkMRbgtaz46BAjJ67hN341EeZ6NWX7fSNKhsjgfrvYVCvSLtqAQ1dtCPxwDjgnJaRnuyAVg",
  "key5": "4N4kHWzXVNriGpchDGSZMiwfoHfNc7T6YFMr1tVnZsqRumeeLqcEf4EJBfGmyHV2mssuHC8V3DRMeTA4oE5zSqfR",
  "key6": "5uNkdRgyBPdwdfMLBDdBk5NL9i7XVKePKtrLLHVWb8QN17UXLANJEAwNoRfovjPD9tVYz4wsCVM9D6xhHryHxroK",
  "key7": "3mCseT6jEFDSEppqVnFxb92zenQHwh5WP8UzxzmBwAN3kXRyhmpfhCBAkR71VJohkrkQ31a1nBZb5GdYJExRPJPQ",
  "key8": "2LK8JAXiBtfXJPNzLBMCD3M24RVQ8Pdiqi1REcwehUGfg8WfjmaP2WCFFb1rnnzSeWiGCmXmFnMqQStJVqg3Q1e4",
  "key9": "2s5z4RQYyaWY6ufAUcxevvAHceNUJFxrjrRrvF4jHm3ZspdPCQtarm5nBKvGHijKqexq9xFQg3Vrsm13N3GS58be",
  "key10": "3gtpnZGkqGasYSPt7X7TUQoNdvaGMMdwYXQjEin5TjUm9ozfkk5i55Mna3P7JkbiB5ky9pXW3TfXtg8FepKWHCv9",
  "key11": "3id2cMQQAsXdPVWg2rPoXyYyxHub8xsAGYKSGUrKjT3BYefJfFnx15o8ejV8qisb5NGMNcyEintuEaXCBNrNNfLn",
  "key12": "2AzxCf5pZPb5arx4swYVTQbEu2EzbLjdkKa174ftz1HByizaAHC8DvRnQ61bgiSgjyPPJo97hGWAWqoSdqLr9R5J",
  "key13": "5scte7iZLhn21vBzxkQf9SPYtregwAggyLn94pgkWBQU6x4A5zGFtd6tLjkTAU3owdS1U9x7c5csRxDn7pvFhc5q",
  "key14": "3eVFTpQ5ybCkJ82XiA5Bwc3UjEVESeCDRfM7TvVYYFyEHntaaNARVANkNxdUcs4SBFpvAnwRUxA7xMKG8z24DVFJ",
  "key15": "5TmjY1RiNnz9FJMBatW6m7i4VhuU9mQqQiZXE9E6myMTgbzUGAn5Cv5UTci26e7ZefPXCPxWuxLUeKuLnLdYFZGU",
  "key16": "m4X1bbVTEGRszi1r9AkPMYWojdijCX4QBATgb6zT7Fk8GM64Qhya9HwsFfRE1bzRHRbEBSshtZj3mxNDV1RHeXV",
  "key17": "2GmmBJfu2pgPKUVAhDDHV11EVbPPd94K7D4cA2Z2YWbryYSeZnq7gJVAY8iTzf3V75va8Y35GZW9dzXkA4H72A2J",
  "key18": "XGHndE4pbL8xDRmE24gFHd5tN4vWSJVSefHJbNomkJTwfQLeuecDt1okWU8YrhmdCz4TZp6QmUgZcvDW2dSQ6b2",
  "key19": "2UfrX3sggLLVnmc2D9RXUMGsHVejm7wmNjqfQe2zeGeMEfcH6Qo3E6nWCiT9ZohqfrsNLsmWtS8WoZRPwg5Q2UR9",
  "key20": "21QnEBE5nYZGGeH5Qhx65ayfY7ftQjbutbeMrB8ASKbofAeTGyUMWcc1GFJ19DqbwY7vSGfQGi7gXidqaPKYoS8J",
  "key21": "5Ud8NoN8rrVVDQ3SGH2BVvjeTNzLX5QGu2zKjZYj8UavPU66WGVSVwoaa3CaV4DzFXSfpooRvipBf2B4TkvdKBmS",
  "key22": "47hi7cCGydCyg8fcW1KTsV4MD8Rsxj7e1g6TE3oxwv4J4UYbkWtaF71QFFGJDFsAgSspZh3rSxcyg9RFmUGic6eA",
  "key23": "62yZhdUbdFUCk4GJPtnXVe82DUT7B9AE4c97qNWGXkqGwdtQe2PzNNk6w68NBSRu7PyVZNptmoKAQGS78hxRPP4b",
  "key24": "5bNo4uj8yqkVgVQCZFShqUQVb8sUbrS7Ko9wUiGqGsHiqX8ZiaTQvaRufCNGnCyrKbnRYhu4dA4w4Rqkus1y4bmh",
  "key25": "5ev5iZ25cU1Ry42qv4HdguDAmwA4MhcbNKjuVuwZxF2N7uKVMgzFgeuz1hcicR66cZXNrGGje3acXCQf6or3jyRu",
  "key26": "hLVrGXbY9jgWSpSbjcvfu8TfXckzZM97TmQXU7ZtDA9GbLFg3vG5ii28J77Ee6pvGzbQrw1i8C3pceaBXw52gkg",
  "key27": "X19GLHNSjcTecS2UPzYd98oqvMpVsUi2sQMnKH12d3AwzazDuetKEpAyg38p1fMzczRDHAomzB7QyNFQKZYhCn2",
  "key28": "3j4jwNXxGxCXXBZDZNxUWTHCJcfHhXYssXPwk6zRQAsM3HAMbKkKckEDyAdQHinudH9KLsHZiKPBjPWhzcpFWKGG",
  "key29": "f3u5voTWmLoD5QKSgzGnHq6TJ2tmD6bHP3iHf5qN9C5q9bVRDMaiWCovbSnRZx6yt6fn9tktqyRKBvKsec9E4gR",
  "key30": "3o8h7Q9a1yJpsg3EM1NL3fy7g6YyDj9oUdEH8KVEaWuJNi9HdQewu74sgazw4DBKyWhUVFoofjyBVpEizBkjNGr5",
  "key31": "4PLQJasdDqe7VttA4bkTtTEFTsyq775HWQ96BArgv8CdNH2oa9h1S7BkkJ6rHhYoccGR5k1LcTD8w8i4YzT4wh4p",
  "key32": "3o3mBJ67s5V8JujdmC4erCg6dvX2spAou7FbF48R8rLQ92rivQjzEYVSs4qKGU5gdX1cnw8h35nhETzLwHgTvHkx",
  "key33": "48rDKsz6ifQuZLAGSCctqePbzN1nkikkr3gMbxkCn2FXPutyYtWCn6RXcwmzsVkb3ujcumjA7acNSHGeTkG6RCFw",
  "key34": "3wEJKAxuCwhrMPF5BQFJ9oSVF6i4JAfztG47rsjcjmL82JTmVd9dhbxxD5XteCYpQTDhABt8agkeoWPGNcxeQksz",
  "key35": "47CAF9NerpEPJjiZk3oo6s76wuWMLrXNuWWCmB56Tg2Z7GYRu3nsqMr7u2hwz1AoNf3dXsx72AXGrayDJJsArfkf",
  "key36": "KixsijzHp8pSDdpxcek2ZiEWHWoEfCBYzoDxTPBXkzTabyvxDuE5paRQxjaXFA5xgXjUum9rEKcw3pRSZqVxtCe"
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
