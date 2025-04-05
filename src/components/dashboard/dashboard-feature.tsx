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
    "5XEWvS26k2Y8yZmDxadLiNxKYawPZaVHF26erVVzCdoVNirGkvrpPX6K6rSnDfndUD844BqUbknGPHngFcZVzFSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5edcGWNoQL8xvBihFhSoeoJdA8FACcLdSd1B9kNq2Dhi5db9cAUPhzrCgMpq8nn1HMq5mDahko7TCKhmt6YAdVmR",
  "key1": "56gsQcaiPQXHbnE88BKUnC9u1iTAYiGbryvsTSo41jAqBJkLqaBuyGBZiyW17p9E5DLRv6JSrFfHodE3X7RVrFFk",
  "key2": "2eKosEhpPWa3rtpHZuFXnJCvQSdUSPfDp1YQS75hnp5HMc6QSzKF2EAX7rbuBLh8YSbkkC56cWXyZdyaCAVVHMF3",
  "key3": "3Jhjr7eA6WmMf4X77AygvE7o8NDWr94TuFR5Y141BHhmdqo3B2dBU7TcKq8FyiVbB5hebhjFmCFccoPGqFACvAey",
  "key4": "4gxQCUihPyGkLGyHt2Fg6bDsJ7nrq6hw3uabnfkygZgWTjZJ2w6qEF4xvHAonZRGk35PeFYfWwqq8Sb3Gcyf3SyK",
  "key5": "2LDRQVrTA7VPyyTYA68HWhW88pyxAD6Ehnm9yiEX777vPjUbP4spFdLSZi3nDzttvN3NwcA9KmhvVgSo8KqBGnJw",
  "key6": "5yWCNJigCKLhoGoiqWF5JJNnwMovaYa3t6qKCztwSWRKWYwF5ZazeRipeCybNJdWFpw1EHbrVMcBrsS7mWLsCzjy",
  "key7": "45yzK2oKyWbAYUXhcrbZU96zQ2X28PeEtKP2uFHkPNWKe5kAH9zT163bQSLNrCL8xkTbw1D2rv3wTdBgYQhMMGiq",
  "key8": "3Ds7PPZTNmB1mgU9TvN61ZGwe77aEnJKaFEnZhfDAFFFZ2WYeB4QoUnjEjxd995BH6kV4rDSi8fk3q3WLpYrp6kT",
  "key9": "4E5HbsMkHmkFMRyziXn3DWXKi28esU5gXinfRTagMrGHnMqEYMVRT9DdTJ48ievc9MYMv2j3oJyvJnfzTkiLV2Tq",
  "key10": "3mHJRf7UPvM1qJ4CbbYFmoEhWNnJZ7LKopJjwRHNYJtvKxoLTgMdxmLWEd5SSPhWXXaTmawQpDH5PKDf2CNcPGZm",
  "key11": "2rSBSa2nfjX2S5RRCngj1bLxDtUu5st3jkiFtU4htbf95QnKJwpoVDxrvcSR55c5e7jKDqktnp4LL6VaBeXtBhz9",
  "key12": "2MDoP93DLQ1dCP4gpLm7PsztJnCvXtpsUB29dtY8WfgQcWbUmmZietxaRPnyU3SWgV9PMzqRYL6CgKZyn3rkcxrK",
  "key13": "2sP2SZQ9UugbGdtBhXruxB3V8CT2mYmzTo3QdC6zUQbQYZZNQpZymXsuTM72Vuri9zv5p5pS8t5GGy9jWRrZ8JFp",
  "key14": "6534GLcCifp1Xt6BiNsyBkDwkQ1odVJ19CW18RiC8oeDhKJmRDdnWAejPywEzfs1cvFEDx8Dqzsdm1AiMoRhaCJj",
  "key15": "3JQ4EZzBUjwgKfvSerQkmaiykgjNFHFBT4oZgSLVwPFTkVRhoNs7XHPTnemoM4A8wePwVuzne6AckbzFRPwQug5n",
  "key16": "5erDbbcda6ujGMnMn9cSC82ZkjVGcD7ZPrJ6Hd77nXzN8rSjXgE2YNpChqkhEcFFuG12Mazq4EJY6VHDE5yTQz6p",
  "key17": "4XzTux8YHw3Sf8kaC84RGHp2e8P7TtPiK1T6kokx7xYerPyEeP4D6neZKecXG5XKe9A5pqR86nC61eGRpdaVb4pP",
  "key18": "3G7hSGfCd4v8KYwMyFLiHEtcJbJvEdSLs5qDqqALkaWe5k9QZ3siUNpdPDmrFu4GAyZdMTpRa4Kezj9GL6EicPQi",
  "key19": "QwVoQSQ1V2TFhvbo96kb2EMHMyksmTVdXaxDZC7thWwaaBwpgLKeTkU3yDweaxMyPuA6LJs73zpwkbvd99L3jAc",
  "key20": "k1JWHMxuG57BR4EskMMo1NadpH1WDa5x4Ttf88iJkuBozbfxoyt4BKHkiCtHy1HVXJyDNRuTXj2iXznwEn1YKGV",
  "key21": "dUJbDYQ2j82Gb3rMhkkbYPej3MfMoMgLn8DFeLgJ37nuJQLJvfMBjrvXKXDGQ5ofGP6Tfqurojb28frTvNY9ZWJ",
  "key22": "4P58TYnMvmEuGcGH6WQWGK9UfqhDvZ8k7nrvvAwVSWGEEg7o2C5zc6qj1719isyqMLE9chF3km7Dm8siNyqsEGub",
  "key23": "3YLGXDHc84tHiMsotAFBuVDnHt8rzCc1nMLM7xprYrJuCRraVk4UFyJmtinj4N2XwJ9hRn1yCPHBSZ61gc9UMNpE",
  "key24": "43z5ij1GhhfBeGjAwQ11hz7nskgfptKkAHYqd3phA4MrzoE9RdTS38LqYxo58644bkJbPPekXbiMF8SaqS4iGV24",
  "key25": "65zsekmwrTUF673sz9irovZsY4mFHCMcpETsjSViNJ7pL5k5WpiB2NLbPqbe1C89bTuUidsv96tXUNGfqbdk8FH6",
  "key26": "4pXqTGzNcTXT86kaa6E76DZ6iuZFhpQdwu8chHcRpA21S765wabi8Y5ZZpmMoNvULzwqhgwqy8MX4X2jeRRSinnr",
  "key27": "4NrkDbhsHD2PFJVJb67ZAaqwujhVRG2fAsfRNUp3edcJRmFShSEGhsDScGtkrEYGAbRZPRoUo1vWkQLs7Nzith5v",
  "key28": "5Y7HUFg1xZAyC5j1wYXuXiDBNR9LWpBJu4keyzmcECgyqdoBLeuEDUYKfcHpBFjyKWmAJBTKFKaG4yKC9eNsdTd3",
  "key29": "f1dF3RUfXLgajtS7sHBiZPUyca18cmWXtTatdXdKAjBGpeSvzhKbAyqN6P8qe47ju1P1vvN1Tf5zRRGvk2rzfG8"
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
