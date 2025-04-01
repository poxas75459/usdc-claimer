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
    "5nfxK4C9wiPzEeKoei2ZV8UWcrNBfaKF8YV9ADnupnHANcScbGH4TphY7Knkmbjuw7Usdf1N8dMSyyDjv5n51sHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7v2z7JTz9mJyJACYC8tQqHMQUDVQmU21tkA1mdpLGSFNVMYUtvNZF3TrBzKg9TN6DMWnqtfrnFLzLvtE3jen59",
  "key1": "5fD5LwSTkjFyQNXpYUffYLt5HAVv6BoK1zjoGxY1sqDV7W1a52akFLCsaeputVZ6rJ3G4mCAyeagioEJNXDAuhkC",
  "key2": "3bCqNvZRFUotWBmfiufcjArpdcohBeMnUYJv3iKmtHAR3XzDtBdcL3ryPP6RJjDLFA4W7QtX1jWumEp7Z8wkM2NK",
  "key3": "66rffqQQ2soPePDry1MwCPGyYTDbRNkHxdCCCTmWEy39j4rJyHjftk3tWe8fztNUva487aCZtHhHm7cLJqKsup3K",
  "key4": "hS1NKu7YuNhHmGemWSpWwHcMqvbxR6agEbS28NxYbSt4WD1K1yYfayq5rFYJgaABGFEYcGTfLJ2qeqPBWqVMMC3",
  "key5": "4Wmxm4XLG1yWss5PL5privBLV5eK83qWuTLErUk5GJU528rBPWG5TbgyJXu1GbLhEz6nW3U7gsdutHacZyCznH2r",
  "key6": "2pC7ZREnrCKG5rUszN7RCxU8fUuzhFJPYRvBVakV8TXCXsceCRr28Kh7Jnr5tQXqpHeCxYBULki6d7dKeqpMVsby",
  "key7": "4cx4ik1hupAuSKaMAH5Z2UcAE7QPeRjkT73cdQaVTwzJtogtC8HVo9AsVqwZMpSEkgWYuz1NaGQKVmve6ek5c8rM",
  "key8": "5pZGpKDSqseQ27JY1g9DemTgtTzu7VGNAynZWt3kmVbWh2z24rfgWJ4bdXtUrYDGSZdYQ5yhKUX68s3Nx1F5X3WJ",
  "key9": "14tNx2LEprto8aQ2XgsxqwdTdHthftz4Tp1MyzU6HPdPesDtvhgs3Fh4nxq4kqpqHxcHFUnZbV198oQmYm3GUJy",
  "key10": "24CKMQbfvfj9WWqw5LgUjQQcP9dYqHM4CrJyeVyzxg9juuziAP1b4pqJrwrxEv4S8knjinKqNnpnjZGAqTKVJcKH",
  "key11": "51dSQrPtzacgowGFZDW19XwEt6Y1XRTovKMjbsX4HCLq9dAgn4jpnXKRL34U6P6So1nGk9ehVymhPognCZZvzYUL",
  "key12": "4S3WBNWmvgtV2XbGzocGFNjDsdNsfi1QCR7onp69jNQHooRzpF7ccuDp66G97hQaR1Xq6o3V3YNyU3YdJYuPNHPt",
  "key13": "3pLvnh3XiQ45nV4ZTV1bDFhWMYBvfNFyEg9hKRXEEZVaCj8s41DWr2suJEVEweXThzJRCi1FN7Fxd6DecBVwBzKc",
  "key14": "MfmnkjPbLNfc8Rwg2WFGrWWtLMujN14j3ECzzBbaSiLDHLjRiaMk6f7vsYkskKmD3EyzuUWas2xPjBkKGGQgp2Y",
  "key15": "5dww5JvFxwrQvsSJdnpybAiP2LS8emCxPZXq6CDip7sdfUmdkkR5owAXYopReAjVa9DcAbQbWYMs2AvhJA5ooMnm",
  "key16": "4mJTY6MQsnKg8XfPNiHcSgW8cGLGTWwRpkkFYsWqUfFv7bqbLoysTR7N5iiYsPXw7fwYhJ2JU2YkcqR7hy6QT2sC",
  "key17": "3C2fh4Vjr6pXaxh4fegAML84zFdnuFTGaz6t843iHywmdacUMeXkoE2n9HTHKrLVXJw1zgfuiZ626tdkMzA3GC9y",
  "key18": "qjoNbCdbR8s6jxiTbdno5FeRxFkYbEJ5ygVxfvj4Dpy3acYsvDzq46pgSW5fApDuW72T2quVFPNNkAxpMQF5VD5",
  "key19": "3r81BQwnRuUo6ydSGNL9ckpGZ1bH2qwGdtauHhwBPQUqK94JkKGJRPUwn8kaafaeBGdRgSeXRSx8TAA2yYy6UDLY",
  "key20": "39YZnrJc3uPm41o4bZd81mLNos5n4JjAfDnGHgKrrkVs7KvZ4xb6ZwbAhFXjGNVDeo5nYFkUyf9a61mdSWZRBvQB",
  "key21": "4xULSe6PTtDKDrJ3x7q6V73ZPRgzZ9z2jxLje8dkV8juSLdGrfz8i2bpxnhFN8FXG4UcWanbxVqvQdwtN1vp6Vrw",
  "key22": "5fqs6Z6CDTE4iPb3v1weUXBjAtajMoxi38gmibZgvVbj7MEXXHFNEHDEvh2ftfFwJqgUVxaGK8GfX1YfAEEHi7FJ",
  "key23": "536NxjrFinMxCcAQaywV6sNpD8LGtY9N9fGiRdLfzEzT4yh3VGECVF3ny4k39FG4JwGRczVEf5KF3URsrvbXPdog",
  "key24": "4qpijme3CxzijY63cUahKuVKwPfw8U7jN8USwVAzPujdPD4o5SXrJ1UeeeUqoqJT2upvf9jmPwzswqpU6QM7Pbqx",
  "key25": "Rz3Pujjxp5MJT1DxfGMhKURbvs57nyesbGuu2JT1x9nfGsSQSbic8YRoMJHHM497mECNHpc5Y2gGiGuNeb5D8QU",
  "key26": "225DBLxUEtZnRR9qCNg2RomLvETyqFKmhUzHCVSqXa6VuNxmL8LDwhD4vzsFuZbLRoz9qdJfTSbhHMSVkXPFuF5A",
  "key27": "4idUsBLXtGKdcTGUoJHiPWJ9ZfS1KmizDs614ngLYGHU48T769anykARpUcuoAwbz2THWqXxL485jdqGKSnT2Q3k",
  "key28": "3mnzmj9jeLQ35S6ZFoCJbVYGPmsL9LmuVLxa3UZhQHkZS2h4MwZuH2AaSyHo2EDh5CbExUYY931u6zWRyxpGPnHZ",
  "key29": "26LYEAYjj1gqb7qPDr3G3cdLm75yoqWkb3e3ktVwApB8h95mB47kRN59f5eGmbCgvifJZ2qHdiaSozc3y4Hrrsde",
  "key30": "5VnEKWbc7Wm7EMUDvYiMxeeKKcfrQfB7MTQ1wCcpxtFJnr1mgXcvfmyMtVeLmxL6uMjFbNMMJ5GNmLtiTaMBV3Hx",
  "key31": "66JC4zpNyJ7iuaH5hnNNjxqhWGn1LD5uFYXFuxTGKqdxSM8JFaUkNAbWgq7DGbwRXznnRcASccLtLZ8G1B8YSiwX",
  "key32": "2s55JWmD9nmjj8HMPNXug6UtDs6Gpa7ekDW6Y1uYiHhdFkfzuZRcVLRyhHbMpK3LaZ5wnQCarJb2a4vDAMqXdPt",
  "key33": "2YjSLY9cEBraJ5uzpxbQUv3mQRHJ5iXLJ9WtG4vBn4g1djq24zGoHv1yWbs4thB4YyZWnpTHqBBtnZNZN369zHoA",
  "key34": "5gwcdKeewWWoh3rUqkbmteogGziGUhpLNkNbeyPPeBK9XC6LdN1LdwJ11Zd6Px3c2jmpFmcpdk55BgdtHzF196a7",
  "key35": "4NaL9f1wERLHSH1495U5gHLaEMMZVMb1PBjQZ4fhviqvphdWPy8uQv9EAhDg5aCjE92aQk8AyiF2LX6mRQmz3crh"
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
