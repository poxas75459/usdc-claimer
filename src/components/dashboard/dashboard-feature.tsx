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
    "2Frwimt3RYDcLmSSKYwf6TiutmgdmaT3mVrkQ2UwMaeaWvGYqhZB7hCzyatLyrfi8CezmJZQTEWd6xryzgGD68nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rahmiaFUAbAAcMQ8XoWMXxDZAw11A44mRfnti2rEKe4CBFsamQqnzjw2RaknZSpet43dsLYbV2u4QgqWPHMZZRE",
  "key1": "Mh6dnNu6Waubs3QhFtiG3oq2wxn65k7yZm4Vjs4qNx5NPJAqz8CN6Z4xrWAAFcuB6MaDkRuwuU5Bmnqsa22aw8v",
  "key2": "4fgXgNr2SRzhRtS42H5NaUECqg5GeUA2pWACZBmbsBARp4v4mxumzowDF4NEpRX6ViFxjBjFP7qK8fsCi6tzW6yD",
  "key3": "3Je8WaQ4NfCfxSNv1aaVAeJ5EfzY9iUVuwcA6StbS76moGJQntCgsZt84YztqJizAytvBVULLvTtjuGZxQyHT2SG",
  "key4": "3eAdAzr43dZdRqGSCjB3QUa5ATmWMpaJcFaPkEqeQDFAZvJK1krdMwq83huyQUK9h1Jm6e3w4MZy58T4HWagA9Rq",
  "key5": "nYJipwtFrNQPwFcnTWnAPceYbcACo8usjJA6cHK2u7r4NrwX7YCmihYB5CuTA2HvifMTgPE6e4nmyedvRU6cusQ",
  "key6": "33MTTZDe7VQnWcnV5f6gpMRhYKqEMhmuHbyD2hXqpy2RWsMCkDrex1CGXZcZsBdt9eYQBZGkAsted3aGc85SfpRV",
  "key7": "5cscWftLz5mengWEo4oqjZubX88nULTjyTDZoX8SuWciUDn6i1R9gGEJfkovWWLJmmCcaxNfNb9xPQH9cHwuTGWf",
  "key8": "2peDiFE47WJhcWAiKe9Z4sQYe1ffUfTd1yg3jHVmrTLsXaj667BwEe61mdoGi6pBm3mWyvXfXmujpGpoyvpWysbN",
  "key9": "3Q6fgNQgc7LfLmgzrJcao1VfwVj5kJET14quezaUvPq8SuDx6YwoYjvoA86VHQpUX1oNmBkxSipVn1BRAaXWNU9q",
  "key10": "4CNDXMjfqa25qZA2td4hKT7WrLfLspnodhDFTUouvCmP9joa8TRNpSvturvBRpku5A9jxh5ftFg2HP29r4uJ2tKj",
  "key11": "3ZQmfDwERrpRwDRp12kUtvmqrP57wdCdvqkcAxKQGuQ6xcJAA2t5CW43yHgQMaYwJQR1EQYkd79UYBtBdV4JhiEs",
  "key12": "57Fcete5tNz7L29FXVcth4HfGrZ6C8V8CvqupjLTzcqcvCaQY2ePoB2do7oqDkQpidbWX4u26t4cKx1X34YaujVY",
  "key13": "2y5HTYY1qz382P6hB8QvHoajoYAp59V67t3A2mhi3n9o8L1iwFcFwjgMGGqD1m3a4Cfs63ipkyandBDtDnwyUQVR",
  "key14": "5XzGVHHHDgQf3PZZKZLHVnb5CVBzYUuZc58p6nGb7chLehJzcsQsiri3XzE22nzV9hhkSzizMPv9zbjmb8tF4f59",
  "key15": "2idYKsRRrnG4nceg7Pu7KT3Tx3TD5d6aQ4TXXmwA1V1XvuLCYhJFC4Dap3S2tNwMHiYxKRBu66EPmvFmfQC9cEZw",
  "key16": "6bpkerVgk39jbXR5gNbywhQaaX8kMUSEy8s3YstiN3eRyctUEXsu2Hhu8CXqzcBNbbBg8iFu3k5TNECgFBrepmF",
  "key17": "48rEXzoycogCYuG1XUCwRj2fPxfJWffiVhoM6xVxey3dw5Jajfdqqx3eGp5GGAE8erpyd8Kvn4BqEBZsrsJjy5bu",
  "key18": "36nB3DTWwYPw6EHw9TN8m6arAN7sjVemnL3ts6DHDnaQFm8q7eXjHPctEmYviBJMCkUpa2urhSnVSssrvsS9m8RF",
  "key19": "4tmP4PxwjXpNSYHU1UhwQx2wK3gdNHdAM1uxHZxFdVhEhPFEo7BNe667ySvYrnkrUoa4Guq5eBSn6Zg9eMU9ZKg5",
  "key20": "TJFcYkB41GVZVZh4U57iBH7SfwLEYfqpwH5LLRikgAG7eSsYSN51EAXva5L7Q3VMViosL3KFxdBfeR1FKBjm327",
  "key21": "3Pp2oiC8P53X6zeCCNQU7Wkg5QNbY1RK9qYsTYxHjoPmP9soJ1tkDmdgKNVs9s8oaM5wJAAX6FK1KspU2vyN8aV1",
  "key22": "3Nja4WfDrbnqymwotcfzpJo6DzQdo7GKxg26WPFmN3JtAtzqtatvqYr9CxLB36uq6jCTBMWQQ2rLpZuvpEgn8gTu",
  "key23": "rzC9rBoasY6jr58dboT6NarpE5utrGS9q348Q9eBGMxhyzrVzRhQMHtzrh6mjym6ECxL5CsckxC8siJXGojpLCd",
  "key24": "4SCSfjVkDDQf7hrYSzFNL5bgzJVx74rD9hN93UUUsfDAA1Kz3TdsmejgyqZEiYdsQ1ofGM9q3pdWxK7FPmGgUwdB"
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
