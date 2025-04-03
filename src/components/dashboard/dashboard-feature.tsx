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
    "ZAsKmt7xa4SdFRqoZjUT5mRoVKHtEAEZLNxD6MXY4LYAr4L9fB2YeVNCuxfbhGbEpcSTCx1ya6JoquydBR8wcq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZVw2nYUT4wm3uu9wkxVftekDmFAtZXkoCkkVBfe1m9yNv6NHF2irHx7xdHjXJFZbDvWZ26ZKnk2QiQJtTSQGux",
  "key1": "2R3E5UrVeydTpjjzsakF1qFSPn9dkHcTsQaRgg81HxQwV636ZGHDXdQXd1jqgvPhuVTYNQ9iz3TZasTyfRCAkbdb",
  "key2": "TvJD4apVJ2DuLrFcxtDf9XB2u4hESE38oMX4gRCTfukCqnBpVxBbAC5MhoFjiqtee2damEQdwiLEHQ2VYjg6gTV",
  "key3": "2nUyY4ZDXxLR4Q7KL1QbQNhQFTX1h26GARvEPeKNcSvnvXv9SUjbHpUEJTSkvFQMp3sTMmhjrpHt2FTUb3hkqG9C",
  "key4": "2aFoB17Q9FTEP2b6okB3wENm9NTewYVoCWwCnUs9FiEcPdstRrZz4caPcKZisAvVkmE6rS1D3z1s2iYQTcBh1YUx",
  "key5": "2CHjvGGQJKGQP9pDw7VpCkeuc2jv9f6qEsjKLuqj64VYfTN7fM7MqgoyYooEbPHyLVwCdZGooKE2THHAhQ5ubgaB",
  "key6": "3nQ8K9xTQMoVcGdXHtM9dWCVm5PBSPBnRSmC6z5YfsZf4aqCBhJdaEJJF53N6TVfcKR3LFuipu6grdoRLdZ88UC9",
  "key7": "32cec3oR7gtZaRhFynrC6H1119mDfiK4TPHDC7nTgELMnYUhQ6Z8ewZAaBEpB21zjSKTXQ47at63WFHvFN7KEBb9",
  "key8": "C8PpTpqapfGdu7aa89e7ECYPgviNbyJLTuVWLfGRNn6ivciFLrqAaiHoZ2LG6tsNHWwvPtgBkPBjCnV6aZQ3gNz",
  "key9": "NaKGeyj4hY6hGAicsB5NfDgRFH9XcFuC2fCQJJfbKpvGX5LVF7Pm6gcmjXJtzBWWg4XtiBrhduCofg34MxFdpTX",
  "key10": "2Muu1boeFCkCZCqjEEzH2PKyLBeMpijYmhYvvdLFZTRWcjFwQ8WeuCQ3fpjsEbuRCXfCKpfMzXA4t3CDG5gEuSjF",
  "key11": "5ifZb6RhD3dVnxPpvaSSPM1fua4AHuP7gHYKcJdBm94L9avH5uEzLqEqorBLR64W1KxkbA9rtrabHVbJwrVcdtSJ",
  "key12": "3sqz2vY6Wsxu8jNNuv4jynqbe6jwojRZR3x6sfNrqVDCWQGYmB5soG4i3KkNHXSQ2iWmvU4UWojrvdtN4ZrssHmt",
  "key13": "3pWiECYFa8rtfbiYcQJcU8ARTmVEdixqdSy8pFxycJGmpPqMmANnWXDGJWj492sJ7QVdkrsnShSL5CyNJNfWsoGt",
  "key14": "236WuJGwtk2dWmSkY29WQWdP5J9waBrQM5fuEDhKgzzJQCRrULKQ3RRxKFPfadkitCxuCp95BkEvrzKgJQCdn6JU",
  "key15": "4Fp7mdsfRKFQFXwKbggDWSLBhhHDEM6uircQDBS3b1zgudPrrkByN1gXoVGHgkwkHpr6FLXRR9TPmes3s2JEtJ9a",
  "key16": "2e1Deu74kVPTnwP5DZr71keynxwG5KEgQFtZaYkj5m4TEDG2LFUCijGDa25WfdKifzYBwdEA1ptjfTNG437cW3To",
  "key17": "5y85foFoxKAMQb89pLah2aHhhEysnHy5dLjbtZ847YasCVbfYdwL4E1H4WPPdXdUbtSFzTqCNnpCLE1PqsGiRzTW",
  "key18": "4L9LGyymiSzczMC6TvxBsxrKbiL7fKuvsAo7W1NdVAaCnBbiXpkHiBAQzwGP1wFxofVK8NpPFzbvt7i8Ku7BhZmj",
  "key19": "3Yur3dbpov6zQWnYyH8tiNjPcg89ZSqKTJ6G6tkRWpa2WT4YF7LPgvLcwYJyCximuzGyCdEFJFZUHQiUWVVLaHTA",
  "key20": "5SFNzsTRc86migLT6oXXJAqA3tvVkXQeMwstxdV4nJieuA6LvBZyYkLg6NJQHWVHtv2W157LgjwWSMJJrrsVsGyY",
  "key21": "3b89uMTimRCRkwwu7eEjXnoHQPzAA4oHq2msSJXqqo1CEK9ZpDFd8hYTVfUFomZmtqnkPnUtE9kHLBgjSzVvYgKh",
  "key22": "4VdV2bv1Scv4eA7zHEwM63oLzLNwry1sqsP4FjHmSqXmKL4CbigTF9URtw946CVAh5bQKRerETcGZy8ZZTa3dS5R",
  "key23": "5M5R6dDd4JG6wGLhraDVrRKmm6armTSYiLFVppv4G5X8PBEhhtxnWsHHRVs129uAdezYrA9DZR4eDt4PorFyYfyA",
  "key24": "5gZ6NCeiMzgFf8Y2dM1uJudrXhw5Q7tEBAaoyWvYAsfp6wD32Zt1tjiyqaj9KZpTYKm1nf4NLkT6DPuroezY9cZq",
  "key25": "4YuHYR7MNjCEABLzXzgbCsXmNtB3ih71zeBL9JtxyrKXMUwEPgtE8CFW1RaEwCQ6efcZzq6K8vCH72bEK6svrBte",
  "key26": "3vEvmPLv2vMAVfjmRNu58cupkgZc7hz88DYPsS8BYWSj2ERZQYq1NW88NLCMh83hc8M5CbqiuSERGHSe8r8b8mCB",
  "key27": "3UT69e1xy3AY8asy3vkRmwbwS79iwqcLHgB9Nyadpdq8H8ogjn1XcBLcboDahvZyPKVpzP6PFD4m3Rf8QvmkBDjE",
  "key28": "5TbPjxNbYf4TwP4CvZN14FqymPjhLvUHZ3SvVdQou1DsHsL43FWyqiPeL69C3ovouTJrP9mnzJxrKLPiTRC5EoeZ",
  "key29": "4varaydzm7qJ1XrPmDM3s1o6zAm2DDWshqttN1Wfbyd3joJmPqFUozLdsRWjRf7TLwREpZRgeGQB8bHJ2mSnp1fX",
  "key30": "472J3jsqgKZrZyyXNNgimx8zgti6LuYSuhe9MaZ1vkeqtXpvRRHf5JA92uoK6YNBR1fwibKxw6De73KbgNPpGTEW",
  "key31": "38xVQ7yK1PSfWSRRdhsbDeAu2YB2QFXzzETNHgeYqbMrTur3mvuCcW8fLyz5qQFmaqh5Q7aXAUFu9C1QDP6wutFW",
  "key32": "5Gjus8FuG5L1GFTcWnZ2cFYvLx96hrfuFBAvcv4cA2hXPkVNGoePwp5khgoT79FEBH8bKJEuQ51hkWuBqZCFWaET",
  "key33": "5iPRQebHKin4VtrQDkdPDsEvJ6HejMBmhfBRjpijBQsMr3KByHTF1eRmRcuDuS7YHc5p1YVapeoKqcUCM5sCnsK",
  "key34": "kJfkVXYicJPHSHDEAAnb4oK5CUXMH2V2hcjXzNumJ86RewqrvKq9qm88cS5JRGcYhQTLwZ6mQuztwS6XBzRXDvk"
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
