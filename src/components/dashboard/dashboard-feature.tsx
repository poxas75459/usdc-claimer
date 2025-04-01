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
    "5NkFZSNHg74iouuQqMyGQwEXE6cNopsugJRZUSVwf2Mj2fKHtRhMRw34ZZiaeDuDjavNA6gdXfrPRdVmrXVUBdd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dasYcTrgFMjA162rc8bpREGy2XMmXdbsLN4Rmw6vRvoCfeeg9NicvNspoomWViJ9tKbvdRCvn9N6JJYhq1bG6AN",
  "key1": "5cNBJn1JsPQBdUJvN1Y3Fh13YAjnHBXSLywyHrtHsUdiNwzGtYALoKepYYfNieKuhQxcKBB1uiKC4jEWwgwkGmAe",
  "key2": "4CdbGsAyNRnRdFy24A8zYKTT2JKkugtGAkTZHQTpMwjuYCkuKtgxtH7BWtEdAjc6dfVLe7cu8DnjWNdZd8VjKKmY",
  "key3": "J6WgyMHGWoGvmzQYstbSn9XG7XRJ3sxrrrySHBtrxE2y8c4KUX76hGBFVVxFXx5GkwaSn9iCvNwE3QsTdTMagaf",
  "key4": "4hzeDhMZLHGDxuTKyDnxAewmba4mC9WpkPjahDjoSK5WuC8fGZxBnYYHDpHnpDtGpKRUWTPmujqMsuGBsynZRbtc",
  "key5": "2yaDTQXnETNHpPa2eTsNgA7VtNK4xkjMZSuQCne6tWoL4rV9mxDiKvg7Ue5KoHRWkmMLEGEMBxjZJXJetgzr6QPH",
  "key6": "2pQmzsF47CAJgBTii1mMV6Aj9fW8daDLDT8taXi7Lmb4L8nLaVCQ1nR8eg9a45tc1FV1m9JwFM7hZW311u7WYm94",
  "key7": "iFnGmjYM4dgufaPVxnbxCwGKqFBXKk5asEW4VMjBh5gF8yCDE4ZZYUKrP5bw325qNrxeJM3N8JoZeNt8r4JHTSc",
  "key8": "5o8ABCVvXT27uK6qFUUKVwZpdkuVmxhZbo25NxySDLC7qynG4qup7mYTz4179k7dUEbssAMXutvPX3x4wDvGw2xC",
  "key9": "2Y3edXU6HMgtefQcaHCtiGdBmyZkU4esu12pUNWTNsw6SMK5cGzDJrwfCT1JxovvA2PK7sM85xxJxqpx6RUeUcNT",
  "key10": "4XTAmvFz9zFfJwLeA289y8SkqmrvXLRt5Ek8cnLnmyFLGn2bMBBcECkarXDj3KSyehCcd2orJGzsrZX38qWB4bgt",
  "key11": "4qzed8po3r98W8ocVJuhRyPspns4Widxip1LEkYRDZLikcC4XjAxPCtnt3gPkvmCtQmXrRzpjihbJszNfQTTpdTM",
  "key12": "3vTm786q53rGp9KZrFACgDcZChsMWYSBa6wnx8L7nPygsYCiMRrwF5uVTo4fRmumQRZAqt1HztPMCJW6v9jRZ8Tu",
  "key13": "4S9pQEtmyPYY7TBCc9ps26SqpPcSiQWVcHDt8TyVrG2EQuukPd8bLWrEZ1WBGhU7c9weJ67wYEDZZ9aTRLD7d7Jt",
  "key14": "3Wsq2Mqe557yk6cVzQT42xNTVVSfej95JXsumsdYJkjXjqNigmejpBTbL3aTLLNrSbw6ExASi7LF6E9KhXK23XqY",
  "key15": "2BuJv7iS9PcSzGQz5SFFrasGSgR6eEvDKK2YoZDn37HiUe4rJ3kogwEom8xG5fM8paUMCMbQJqh2JVpiEFP3trsF",
  "key16": "34XXtijwMEaGZb41xWqCJ7FqyhusbtVTmq7ZcoqQoaAFbidctNyZYJpk1GP1Af3JFi7LCCbJV1bBgUEW2zXcFXdZ",
  "key17": "5gwwZTWsGXybgr3CdTj8f9xxBFNgNkkdEhvFgXC4TzhuzMwR7CAucahAHLt2zcXdYcn1Jxwt3hioXrU9pfFYNDe",
  "key18": "5FMz8dK7Tyfs5DkznWgqGc338Djxg9rDSh9aRJn39dFdsyDqx4NKRw7waGtq3CWwzg6YdiPWAbgsXi2LGaLixeGa",
  "key19": "5neKDJmBBnm77fZWG8LcNRLYWDZnoAmbEy4LAr5rVLqrr9QYiRBSKnxaWMTX9q3mJRzn8tYP1E3KnURH3DVoipyg",
  "key20": "3Gd4wswvzhpfMdpX1TSLWCreXBWmtWgE7giSuZv2iniGV3Apqkc5WzX7GjhDAiecCLaUzywDKcMqAU7VLwnYAoSf",
  "key21": "61YEYb2dYchS3FwMauyxCkXGfQxnQwXmCF39EMDaMH2BozVsVDzGeaJzcV2vnTRUicgRgwPk26E499C5zDSpLy2m",
  "key22": "5jPvriLCheyB9KucojgnDahn4WJ5UC7FJCi1repu6pUPtPP8uBCcJAJe2PbqZUfV5ZSSt41rjrYUdNSAfGAq7RDG",
  "key23": "tuozGeKHQbU7ki3JA9Py3rHqi1BUBs6HvpupovQLgNq4n2zQ8a2NJ4bfjKvGwibvYiKyR86QqGswSc1HmZpckaA",
  "key24": "5immQf889NxzizXFCNn2h6u5bgiMNrHxv4T9mw539x7R8wheq4W9CxT92Fo6PfuPJN8JwYDixP6Def4z317KQ5Ln",
  "key25": "5ETgEHhb8BqTdUHCsjYC96ewHJF456yvzad1vFDNeFf4FBGKKWCe1T8VG5GZntUVTD3D3CqtnSaXznSySgZrsgzS",
  "key26": "5LGVCorfbpDaDrjqYXCYU5urgiAHbBfEepQvskFHuW11RF7Ypsc1e7GB8y9F2YRsk9AQEpV3aTESG3G8wa8Y5BAU",
  "key27": "3HNgutdLkZKX1pyF5zBnTtJtnFo3CJ5z57bEbGSzT6NpJa13mRLHPD3vm77RLsUXxPKEYztYp3bKXRXdy9zFT3ai",
  "key28": "nhQBB6jZriEU4VrGo7H2WUazVKqGrwFjNxBAxdWKKuoyCfevsjjGKoQovdjLXyCy8co1vybXhjz9mgbxZ1CsgUY",
  "key29": "5WwinEL43TkGwDSwMJ6TshBiZB8EtoDA5osMABzKdaBVJc1gwzEzqLarCkeSxJ5tAwZLZqUxjeUKXCCygEvcAwHK",
  "key30": "drc5o6bwoi2Uos8cxdzCZjU9SSn1xuBKBnsEMR1KVmi5GuAJuoTq6muBjaf6cBTGp4yuegkiR59R7eUzRXsef33",
  "key31": "ZyhbLLA84DmrG3tBmk2633E1FPhMokW82ygBU3s3dHBCiSNFMXDSiFPQKeNfsTMoeBYsVspHLs4NJQVKYTpmJ6j"
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
