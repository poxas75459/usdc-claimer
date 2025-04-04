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
    "2HVCUABMdwZZ5TGVgKksH3kBuSUxWkzqRykvzfm4tsHksXm3KxG6mearTCLJowL8aibpT4HPzbTKB38FW256fVyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gSLaiBGv23hjCf8fdghRe42RNrEAx2uv9uTTkfmgm8rCWMVQW1JEtJjT1M5deotd19YviiCsngcj8ZmoiPZjWMi",
  "key1": "2QTHeSKs1qS8JRnjUiTHfnzPszE84kwZVKyuyRQqCW33aybLb2C4Y6myycqsFQqwjWwHPvzL2dTMGnTAqDX9BTUW",
  "key2": "7fVLM6s6GKGFUWr4Y81jU3qH9RAdV15JBCdLq13nC9EuPtpgLVkARpMuMyY5Q1hbU4CdmaKhfVjnDksePjfHw5w",
  "key3": "2rPz4Lpjxkq2RJQWesB6MFJ3Fxi94rUaywJeB3okrtStMWEQxpn5HWKNog8wtKYYujFBwjF2ay2nJpKtrBjNhj5X",
  "key4": "3KDJvSUbfqSvJweumAgn6MNZqKCRy68cR3r8F2GRQC5QfMrEmUoFYog8sbvAe2fNAdo5Vqwpd4ZQ9K4DHDTwyFPh",
  "key5": "5kbECEy4F6d5NMk3vPQWqbAsy4zejTUQCWMj1AfRWXDXwRpyUe6BQfeboRyMGHK9CCcoi7UVxt3Q1Hv23r2m7XfL",
  "key6": "3z7mr8FdjxsDjSS5JT9MjKbGpZutxdVTXDVeKvzwaGn3YWfLDCbG1DanQj2xScVSNKxMrs7jVZNtB49nifEh37Sx",
  "key7": "5b67mmto5YyG38Kcgr3p7aQ3LiVsDneKTJfaDPFZKYECj7aPpLWeCcrLtaPyFJBKQCPkbpjuH7UoZNtLhwCnZuir",
  "key8": "5Woi3ie717rQxv7CqavWYz2r4fbfPn5qW1MAhbc5DpM85qzPjeo9MGHnfLknBjC9YyqjHHQwvSxZm6AqDuWrMda6",
  "key9": "4RsUGRJLPPnKuS5A6c2mxGVVvytg3LewW1diEHfZN6vjgQZBCkNBtftfLvKxjZ9CphpnLSLuqFoe92Chf8bnxtW2",
  "key10": "336M5B3Pkm4BeBgJ6xuW85Biu7HurnArx9YREqE4EKYQG9FyarvtQVReYU48xxBx3X3CiYEcqcJeDqcZQwH2dHV3",
  "key11": "NYRng3M9CAhLmSz9o4MLU2jbAhcgVECbBey8xnst2MLQiXuCzJ21jdDsLtwffDkQfhPCj2ykTAuUWcgmxSvdSve",
  "key12": "4zh1mLQqZBvseTNrj8FCSLt2gyhwfKRKNtFyD4imkDhHt3qrHpJFwkaKsikh38kGbbBYedKi8eqD9UQB1FR64iRX",
  "key13": "ZabyNzrF6SA3PiVuNMEh26Q5VNVtULqn8o2sCqmZYcDPasJhwtKWLrPWtbCAypzUHzsvidWAt46T9eH8H5LG6Np",
  "key14": "cd89de7vMooWbHYX2JubLQTbTqWNtVmXqRsyvH1zhah34UYhb5jokEkNRsmLQRTfbPUZYbiy8sKEradCCJJQt8y",
  "key15": "2jN7GffyF2srMr7nQYUZmuHnKojyMAWkSyEbaudtWyfL4mw5MamCD983KKrob1tAZuPkB1JbmGmxCdij7c9nqD9b",
  "key16": "4MPH2TLG5GgNmea3eaKYWZ27Bvq7coH8WTs1yzZwBkK8hJcQB9RUXssD7sLXTCRhrBuMadYWjAwaserx3vcb5FAV",
  "key17": "4ngyLGAwwWNHZgnpYRHvEt1WwxgiCtDv8D2goHF69JYwVHunCntLKXhFvLNcWSPbwBMRMMwyyDvj82SndpqUF4p1",
  "key18": "54Q1G5NroMPEsvKaeBDkGJaJSNfsPXJM4oMNvEaQGHaFX6dxrD6RTBEi1VZcMxL1zorX3DsHGWfhXEeAhKfZy6eY",
  "key19": "5M7h9FiFpWAVMgv4onrqMxZ5P5sSN4zrszJUsRRtoXfw14ZtLPf47DVYpPYYyX7wVE6LowBWbXgshUdC57oVdWum",
  "key20": "37AZj6rqJCJ9n4TAP6nBWmcuF3crLnRfE3jD3gsiMjFuuK6yFiyE7Rt5fRS7GPhi7xZ8iYdFuVz4H4nWSb82mcHk",
  "key21": "2jHDLnkCFSoXZ38bH57Q475P7vy5Cyd7R164UoM6DEsZ983QFXpT2XuD7X2tnE7KSHjQHvd819GoJNWrWvoSFSdU",
  "key22": "3CP1v6vqE4nzxVQbM4DSygEh2YcejQ2QFJQznpGNxk41TjqAei3UnSvBpGDhwzW6HPVs6ZvV1kfN5kXG9MukoYTs",
  "key23": "2YWSGSbgSBNMi9JAyt9HuNkXMnPYFCtbxvo7caGUnQA2kJ5tLUQAvpVQvT2ZGeFCddG9rfXziVxY4gBJuaUrmcqp",
  "key24": "45RBwadk78PHtYz7DdDQku2pqR2KC2vNN7AwkdhaaP35Qza6hUZ8UQgLXmYKYDNX9vZpvFvYTY4NbWur5HQc1yv3",
  "key25": "1wByNLbULQb7oewCKzjjBYm1ksb3i4Ssi6M4YsdLu24uzmTSZz11RFNU6qjHV3Jxap2EmGcYHtwzGbc2YRLEWad",
  "key26": "4GTZA9WBzNoAhyyb8bW5NzDh4P7idE24iBGQn4myjAQpCWSrygWh4HPRkwBQX7N8Kzmh5BbCQ3ki49XNNVMdmcza",
  "key27": "37NtXgBQKn3cnKhmkJCLmEyKGNFna7gpS2zbrPkdZmjasfcoP8vq7xEFLUKqXYfr2YaEGd34c4kJJ2LovCe7wGsR",
  "key28": "HQzEAJ2xLz822K8rNWkGWbz4W2J9cdVWKUAZLJ9sevkMkFqLBRtcfSzoQ6mhZeRzcpevrtEPkvJd91waa17vdg5",
  "key29": "5prqjrVmR7NeXfX3kVRg45pXxvuhVSVFD3CfgjFRMf8bfaNKXSSgm3u2j5a7a2oa6YCUcsUpZDnwTvQ1bPEeERAU",
  "key30": "672ocBsWvmu3Tx49rSQS5RQSjERZGQeCZ5fayPgYqofQzfM8j8awy32bStq96AmYyfjG4A1u1zh9KQ33QiFLw57D"
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
