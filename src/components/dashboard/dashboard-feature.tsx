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
    "57bNBoCoCF1tJy1j4ujFhuGywNXq7M4RSXEVPcARaNRFhmbBNkTNRjhMAi4DTDTVpipZcVTrZZVEZFMDuXBw9wVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MvNKQTz3FDX1EMWirUgKDqDYbaztp72mV55g6ZMSrs6wLwLXSjFKPiDCjETg5ihDftxZJqcfFncbwvaB5NdcDCh",
  "key1": "5keLFgtzAMagLNnkrvzPMQFNkiRWeA3WPnR5hM84WDMigdJFouXKQhN8wFBtoj9uWo8oECQDmCQyxoCTvB2UE7ow",
  "key2": "65mEghe8Xt1Lvq1DbsRvLJFryBjS7EzQacMnHThiB6JS3635wpgR8VuzUNZixRWSDLg37aKTU9pnDyE9PYwtPi5k",
  "key3": "2mQS1CYkh8AprbhWRWMB22fxnk5vwcJqat2kU6PuRv8ipFJpvN2s4vDydQfanMd5cJKEyiGB5Pj2e3Ljq3ncFJKC",
  "key4": "4GGFBixXGU6DEESSuVLAaCUFxhUJSiK3BmxHU1djFXMyY664VijnmYVC6smhdTQmbxqZGiLVSN9WnxLXc8tUM65R",
  "key5": "26JRkEr1R45p4qMA6nwYe3zoc46NwDUAutUEfqfSVhFi96ugWgbKQB5t4kk6Arxk6duCizYR7NFsyiJDi14dSmQw",
  "key6": "548tE4Y2F6ZATNTz8Zoc2KPLX8xP6f61dNDXcpC9gEGKmXz5KouyGJBmHePpNUcNk5X26Wk2BuaPiQvQeAu4fJ1m",
  "key7": "45Hg7tGU5wB3RGbcpm1DhE7W4Ldn7RDDJvhYHDNS38BUxs6gFPqsKmVFJZPNzVnv8EDEwnvmJTcrXWZcYUf1R9UQ",
  "key8": "3RqUXHwSo1qtvJvqmfXUeW7MYRZSbQm5HxwChB6c1fHSw1keZ8SYu9w84edUfxnDZCsUz8bGVhVyDfuEbS4TmQy9",
  "key9": "NaLkLRhaNJNEosidJC5dWPp99qfMg15muJAV7dfyk1a8hriZ9xXGzqsxp5TewaBwASk62JmdKQNbh524Qu7Bt2t",
  "key10": "4u8XAsK7cZkghLxNsJoDSoermT5r2UBA27uiYALHTnqNu3CiNdPM4HKje6HHpaRrgdJ56JevnWUh1N5RR8oknoQH",
  "key11": "3KwZKpuS5Z8sCCVS7iX4hXQqiS4Nw9xevt5UpL16ZoYN1eaY9z8CNFK1JYY7nfUaD6vELXCWy1iJWCMgFhVokvc6",
  "key12": "3tiprmpqNafQbCdn6TqAsgypnrFZMMANAjW6wgRMLrviggd92Fo47SWHKFo57c8TEnxtCZDBAigaN4diJjtUAZQx",
  "key13": "3Zp6rhoyMi5Ccvun1FMuTHAaz5Eoe1ybiujeT5MMYpyuPb9EAi1FbWAF8EzoSUFmUWywN7zYiW5pLdKzLjKBGCMq",
  "key14": "2muGmEV5cQ5dwH81tAMVQi5S69iZpMm4fYfMJEDU2EFEoL9J7M7QR1J9cgHvm6RuG1ZNRb97aAyV5wgsLsVvXzgN",
  "key15": "uVHkgWfKwKfgC2FEpzzzZKRogPR67PmbXDZwanTXCUcRbFGsbrhNLu6CXQNaYcssyrP5j9T7dShidgVJDnnXo4n",
  "key16": "64sRRUtEDP5vubV6fTSHrDcZZ9oQu2PhNrHNFV4tXbhMSJRFepBwKnMNpEc86CkUkUb3QvswPG49UGSdY2fzuvUK",
  "key17": "4YwvK3kZsKvBDbZEhrgJpLe4nzqRxRLiFiykNy4QJ9MLzJsu1VSrxp9K1pSf3ASgzGFNDhJ3RcR7z5FYF5ZQJPRA",
  "key18": "5Gxt5xjZHp9XkbWLVcLD1S9jAd1zkbKk5xx8MstLyYBgTNDDzAYvqPGHSprCoSnoTj1XcnxS81ddAtVX1V6cCT8v",
  "key19": "4CfXnJeEEX52w4p5okeyjk3CNWWN2NexG8eJbYK8xUbKAhKYTcijoBTKXyBFNL5nN4Juxs9G2F5fVjDjaHrjD1By",
  "key20": "F1wpYGaZsPd2Lc2s6xBsSC765tvmWcsqw5HMprnujTjnPzFtRFqRz16ao7T2g4bZcxFU58e2VPUsoLehCCnDB5a",
  "key21": "54PgWMZV4tetbgTqeJiaRwciJftY47bJ55jrK7o6oj4JJaGJggxAqyoj1wUqZ3FiUKAzv7oTNCuuzXtfeCwTvwm5",
  "key22": "USkj1DCpSAFT6TLqbbDtrL9mCMq7UKSrP8jWGPNz5BaXbx5b21RztLW41xz8MHrEoNPTfbhxZCe5wo29B9Ugkxc",
  "key23": "5bxoE59hS2E1pmDdwScDvxAsDdHY2jrryr7drFjQywtorq1UNacm8jQ8rZmA6HQbsgTrH5tAA3uJbQQP4ycEtq9M",
  "key24": "5aEoyS2vvq3p7AyFbMwkuDV5vCt3Q1qnHgYyec8grp5dhRMNkPFJu17cXQ5c9QCvwVVgfqw64jZT865LKUXrhbx9",
  "key25": "zhhSVmyuL8gz8ngYHvQYeU9CkLAxirRFqHWp1PnogY2XdnPgQSBWRJTYUR5VC9mhm7sMjvoi1uD2iXnR7kQtAF4",
  "key26": "2S87hqY5mo1jJDG1mJTcYAKjtCac2Be7K9bSCzfGyMVK65fCtYSky3dxqyfwYMWdXAMkaqd71LDK2xVuS7B2AXGN",
  "key27": "554gnKLnWMtWWyPXgnAhJCApD4jq2wuHeMpkjJ7aoWcN4fey4gKRf5Vhur5kSUwc615knReKpFwfV6Tq72RbrfZp",
  "key28": "2SgR5ho7XWLFpNAnAUCdQ7y7idQYLxHHN3XgUj9GMtpXYiGWG2ygSfrRL3LHVBjLgGmePTYhqCpDQj6ptU7NFHrc",
  "key29": "5ThzvovXdpf1FKD6LTNqDUUfMM3vdpA9GgVhUAWNPkCp4KW8okUKYro1AeENX3iLecFiX6e5QfSbChxCQVMdVh3m",
  "key30": "5xQYeuq9QLDicMJ9UEHNzu8hcccsrvNFe2cCqhHGwnFVrEeCmED74ubAXAYkpc5tnqDsiGphydktXj7sT9CgZWZa",
  "key31": "22RXGt6a26JmycHD9C5ttMCBEfFPZJQR3JWhELVNzcE7Tf9igzL6pM1rgfJwQHNutjdD6iq2hodNoTwJLELEdzSG",
  "key32": "3ALj1AxeVX9AAorrvuthGDzZeoCH5ux1DjX44PFf4iqtmS5h7QVDfoimPeaQ7PUEcAUC4xQHrMJuqH5zbjcomRjZ",
  "key33": "2nZ7vEFpt6cqWHyp6E9RncLqMBCSxPwVwN2ooF69VLhikyAhUzR4KK7eL7tcpXQ71vA2NjNoRAxG1iX3mJVF5qj9"
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
