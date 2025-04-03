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
    "mNJ4XZudrZc9fZX5ruPVVhz2eryfSHkNKytfGiNdrGWp7Uw3uVvG1UVwmRdrv8ruR2bU7kH7YaJfynRZRBVaew7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zL4G4HthFmaAWNvynLLB5W9Se2BnHYet1ws4xwhnNvGbiKtoB3SZLj8tMBqSpvcHzFvmLa4pNiU4sapKNpJK31j",
  "key1": "3ZY7aGdbNbtAzUhW3dGWvxr3RPvFFr5oLUUHbxEgUYuEEtKQgKjseWFn9ruGsZ88WjRb3u3RQKZ8RGmYUzM8mRTe",
  "key2": "3iF7jiMrrxdtagzwTF2wuG7SGQcpP4Qu9pDiQ26AWwUJxKnteE3s5u9RvdZpNBFz4b9fAXh6VgjnifGatk6CZ7sF",
  "key3": "38t9Kk78HjPsc13ev2ihw2fcA1jzXpoqLybqexaiAoWwD4udPHG5F1LA5x8eztmeX5tef9crR6UvLTHDPK1tLFbk",
  "key4": "4LmoR4j4DbP1ZB32qSwinJLdGKP86W7RXco47qXnYjAeEtrArJdpJiRYvAc1Ah6scT5s9N16SByBciA9Ybzebk5Q",
  "key5": "2p99RRt8ioTqrcLNUJpauwEbGxGqgZQCGFHoSung58sptEbhNSpqqJrTriv7fWKvoU3kxvLJ4fnfyCPS328d9yTQ",
  "key6": "3F59MAWXuyuPZarQ11fxxpJVt1dvjL8fQuSuze7CnFMwo2sQsGSqLLdA11zbN8Xxd3GShryURqGmnBtEC2Nxb4FM",
  "key7": "4gxptuLZLRFKM4DS2LbnU92BZbZdoteV7xMx2qbazPpQJ5rLLmBL8zqMETWYc6sdHu6JWPLGXNqoqSRTfEPFUf4M",
  "key8": "G9vDyEf5DGXBDUt6NywB7LH9UtFbAB2xn7YhCaBXHrCPhmpGYXuzeCFwBfgNu96q3jozvSdwDXTpa6av8gS3smv",
  "key9": "4bxCFrrFvL157NypoyWa5h2pKLKgpQAZdAxNZn5w78jZAuyX3hVtpEmpS8x88LZtVNL3oDbvpbzwrJE7FWmAG3kN",
  "key10": "4d77YynrX49WHrZDLa6D18Eur1Q1poX6iaSLNQYVkpeiKwgykQFcVg5m1KDfLk4f9yf8jKWqoGroasVE9V6rnHqf",
  "key11": "kmZ7uF9QZfMK9UhXK32oFUfPduPz1qZiegH37YU275WtH2GNa8HST321Bh3RZnXA2GuBKsw9Ti7oKEFUqd4AnHi",
  "key12": "2VCUdYRQZrWABGaS5ETov21Dj5Fj5nm7LakAF1bPaZRKguXpeyEmqEj7AnY1i7zAWCHNZjDd9aD37kVtSg9D8C7u",
  "key13": "oJoJDn4GQVeK9uNADf2ixLDzoVUN6mAiYNRZbaW3zG9H9PXELrPdPDuPJCHT2QN6JK96bpsL4dt7JhkehD7hFUS",
  "key14": "2NDe958Ui5bDbsJVw5wwR8z2ucvmehQGnmpPUtDpcdTbPJpcoCaafYi6vvfV5wA7iBm1bXoGdZgUEnxP8HpYijUu",
  "key15": "5YJGi2ycyi5ehXQXjmkzYBKUQHxP4mCLjXhyHp2BaXPSFZY6GTYPmp284oAZvDgbh2SW3pBkrKc1WLWV4FngK5Co",
  "key16": "3UPJpTuYVgy6BRQbEiF3MDrCqsCXckuxxor6LzaC296KkLKSgjALgpuBfGNU78drMg4GpLSXp9FzRLzrxgUsEBxp",
  "key17": "DoCFqq1ZDbjEPs6i3jPJGifnqVZZ4qMspSWdTFS4ZP4WdGzyowsGWEQtNjTYD8WgTkRSdZkNzwa17CtzoNceYXh",
  "key18": "Z1x2mujYQoB9UE3QkrAMqwVWByxmt5VLsWScrKwBU4BCZkonGMkcHPAwBgXsBy6QFWtstkfnveCVVinsSzZvU1m",
  "key19": "4v2FFR7YXmr5uC2bjbtz9fqwxq5hm37gy5o96pahcaZGiehhLLGzEXWqz5bF71MS98q8yGdGnq3w73RaQiW69qZH",
  "key20": "4xsxsrEKcojzCP4GSg9Vb6XJ36am4tPpC7WGmmbmJWM5GytAt4yKnX2M9yQ4fapZWXBdCXoK8eD1z5dFnJUbQGq3",
  "key21": "2ooBos4kpsPpS3tfxDPaEdPpTHFxmGiDAPYA1U1rn9LVj212D2p8fiiAKtSUTGrppN5gfctWs8SjQgFe6QXwWFJa",
  "key22": "8zp76u3RpF15KgjA4MaRF67npD1V1VHmVBawKn8WkTV5MJ3TUQub61uojA32ZbxiquwzGF9YjqqWwRiqAwyWZJ7",
  "key23": "Q3BTeeLe28y42YCUEh1uaPA7RwfVPbZGPFX2Xau8tqeDg5TXxLq2AiyET3DDQGCLatVtdSEq8URAoykJ2SEiW9V",
  "key24": "3aDRhegAspwcJfxue77DykqR26VggfxAYRh16BhCZ4XmaEX6EV8YZg7MBbhyad8zmfk6n5FhYHEnG8T2SHX23T2e",
  "key25": "2ACYGgBqRNc75ZSorE6dHTP7K4EC3kXKvXrHse3cqkBKzcAGKS2nBCWjyiCDkpSmAmC68SaVXvSDpgRCSRBvPFPR"
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
