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
    "4K7QPHAhRo2wui6NVcKq5tR17m5iNjREYCz2xggnTZWdXorBVZ27KAdUBQpwhXmxeZTPpgvwgKviV7xY3Qc2NX3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S1ozzEvaL5qEsmig72icbFxKGEtE2w4k6qapKEiuutM1Mpqjp4pT9gGbccR2WsUpFEJ4A2SjLkcsgtFrE5Sd6ky",
  "key1": "euCkU8oX3cVrdW4dcdFy7cBTpswobkMPN9pjKFwXktDXp9YauWWSYG6kSYGDHxet5GXKy7NGPsdDouBT3uDG1e1",
  "key2": "5VU7cr2FKsVWRYz8Y3JrVu3suUBsm6ep7kyraqEyivZvCmrTSxz38HhUoEMiKJPiGUUf1CPdbnCMuTRy6YneLptq",
  "key3": "2xhoWXT3sU9H6DRZv3yMgv8AsCvtHCcaoFrypbx6ho9WCzMGxaNxyrex8hnQyvcaBAizPy2zh6BFExZm4gkEvDZy",
  "key4": "3BMqoJVDodAFCfVrqhBE1uDTmFKQ3Ay82ymNP6a25Ebf5g96CP9HJsFrLx8bUnTQWV2TCRK4XesYz1z8NH3AU89S",
  "key5": "4HqZKovpzbD1ZAB471U3udv4BTSwVmWQW8hGsAusE8tURm7gMYdWkf1ThjFyA9k98sxtZH1PvoupRfmhcLR822Uh",
  "key6": "3CZoN5B43Y7dMmEvTaSbkYj7WYUb3eUErYRXdnuc2PHuEMSvsZmdVds6n54Zfh8iqhsUi1BKmYCoNrRXGMcECz8p",
  "key7": "4YSx7YHw6nRYjLZmHRFTpPYGuwTBwSi19gE34XPmBhmfwBeAfqZbyCfCa28knW8t7d26uc6ioY9qjFShWoBgxNVF",
  "key8": "4qo2RWQMoqDUqbpzfzjhcJ8tzUG4WC2evQQFicELzaDEZrDKrj9UWiFAYnfZfhWL6FueonU8hbsuFUqBkLSMN7V3",
  "key9": "uh5ZQJT8BbkUjaeTJ75WCcXHGZqY7CbwhMZjPRoxveHMs9eHiNVXnZL5cGVMTpDSqFbiGtizBjVSSeLfaL57sSb",
  "key10": "pwjoUPuA7GMsxM9BGWhhw2a15BYYFkLuo3TPyCoskLT4Qn54F3iLTN138qgDJvF1DGHMymRbiAJJoPbHuNRr3Gb",
  "key11": "3xS9JhScBA1CFYRY1dmumspZ3yN2YxgF6Y7cbnco7v1iAJz4F1GRth6jvEdCxqUdXcg2aWxeMFT4QMtrGHGJJxwc",
  "key12": "4cMa87tPziWAYWBuinWfN44GUguyNAL2y26pGofmMbw3fYFMC8tbjQD1bcfrrBfaMT9xW5VaMtLRBVpbkX7vPM8",
  "key13": "4mJvoAuCY7bcWeWLo9adFgJS83ENqQyCpPTx5bFmbvEM9HBb9saor37HCxWEq2agrn5CnDHMSzBmoVJLxgrpZgnC",
  "key14": "5Ch5gj7VK5Cc8krHU9ddYntEDqW8J52pgkhCgVyvjW2UatnzpzmVyRDBebFV7hBvxnGhEgKzzFvaJ1MCTbLW8gXd",
  "key15": "5rxVEo8boBvEeQeeWzoPzu6jPGdibVkYHRfp87JGp1Zfu32aeiEYchbRSAsbCwwqRULZH5UeLGcCdPfxSfaAYts7",
  "key16": "2JCzmoGV4pYV484xfa9hB5aBsgkaABxbBnt7BAHFHQbKrBKhR2enXtQUZahp8gzr6sRVe3m5shyiKi4rYuaVEXFs",
  "key17": "4CjMKy1FasEcj4REY278PQawZNRyaxWNSiMwNBsHumnhK7Ljtmpa5uP4aNrZLVWw7Hf6v4puAmZeVsrs6tZz9ERR",
  "key18": "58JKRzHmQi9CwSNUumLw4K1C52Z9PvF4qJh7Fr3M7Z1v2WSNT8wmE92D8xviZBah1uW3QsfjNxMgiZ5QWGRunCd3",
  "key19": "5ERsAbr9bNKWwXCE4JDyiXFj9829fGUdqVBkMZAS1f3RQNc3P8osD1hmM2KtapJ3Dd48kDGjm2sWr7WhQpEFXUW",
  "key20": "3uYPzDEbP6yxK15ZqQH6dpBPF694KyJEYituntAHbm7z34Cd5z8LgGFiQNaRj4BgabXgi8uJ53WCyy98RhdkSXVf",
  "key21": "59DahxEesy8mHieW9kqQAH4uRozifimKx95ChC4LFv8Ft5thpNtCRUG8LtiF6GQE9g5kvWCxJK7wHsVEckQpnqcr",
  "key22": "3uUK88xvidrkPypv2nmUczfz9e2E7ytvze83Dv44BqLK4981s2VJzabVHuN3ZB6HxjWS5VLFjpujzx6LbgzHP1fm",
  "key23": "wCdqWJLQhiHBQaUpQtT2t32X5wGrcWTwE6H5RX7sJYjZbYmyVDcrJd45xzqNexisZkuaQLKWMZ2ArUarorVZYcM",
  "key24": "QC4uMF5iLmshaCULFSqEVvXUBqKexYM5Kzv7MrnVAJpEcdxNJinRZCqwk16nd53zGzLLyM4KHhgjiTcjubL9yrY",
  "key25": "2qynNqXN6pR9pYEs7xPYYerfPfYgMbXa7PdDj6YgMVju5h8FQJxqPJuFFAkt1WUo2pdmzjSyfewD6S6RFpsRYgWi",
  "key26": "3okWxn9PZnUijbVqp3JwtSaZrj7SFDLKmeM4vUV9ZZJz6xdfgmRDBfv4Qn9BgVXqv9WZkDZt7t9S2iaPjMaMD2H",
  "key27": "56JBMT3o3yTvjq6Q8xGWHAdsrwB9NXykJH9YavGt5DWqoVymYMDB13B4doPKhyEMd3LKt1jVECDkvNbaga1U6GSp",
  "key28": "4szFgK7hfiDdtHkeS1eBWbtHF6uoqLq6Xe73yuuvfsomwJLy6MwSvEEcAdt8Y2Np1vx8LodepJmYZkZcZt5pUZoH",
  "key29": "3dnzd7abm39pyt5DLsNHn1wuWMBFfQzzchiUEDDFF36aLm7EFrnzwF7t9SLmWNToMgwPWtimoWgpM2C5T7PCWKQ5",
  "key30": "2PVjPTLkbtMmBkXZn5RnAgD4CEsdgTfd2SYw1TdcJkDYMSyHdp61HcES9z6dR2rWFVPJFmx2Vck8zbBdmCeYSZdr",
  "key31": "2LpzCHjqoWEs98NpPVzKuxsmW9qxZLRGxbJPbVERSMQHq2irizMeQRYd9LfJhgXegCz8aH3YiRVPDstxtU9e8pBV",
  "key32": "KxccSze49UW1mYodkokxVeS2BmJLLkhYJNs63FuYLsMLy4cBQaCYUrJh2B6nb9pzpe5oJFLsCMXchK9iowMd1b2",
  "key33": "44FhHkmTbnfsKPYJbUHUKyiUwPTaERMTo34tLpVz4fB7itqyL93h5q1NosVq5rg9EaaoUEBuLPGo92YYnoY479HS",
  "key34": "U1H564JSn6b84Qy9vZh3aGtEMwPAtBgUuhECGirV5hWi5LRauFgjnjNvz4xRLbQmFSwe8aWXbxsUSGv9y7DrNQe",
  "key35": "39ctFMA9sEUhvo5ArQwuJ3KP6RAf3jbQnF7WufF4E2XCNKrMBqV5oLCFX1RDawMG8DxN4BbtiAzUPfTuMYaskMYV",
  "key36": "3btRR7oQgYzh8usz6JRByG9c8jYcf8FjRxzWRaUK1Cm9qYZiqkY3vgCMv2he9hhDzfJ5dxNRaYfzr8mzTotn39v1",
  "key37": "3AGUqTbmSfr3D3c12NqPgaa5S7FTS99585NJ4WBQ9dkAPJU7SCKSYuDnRctX6y8bwnk21AqFyW8SG8Sc8BeCviC8",
  "key38": "5bgjMNfoCaL2SAzJpTvqpxBt1d3dVDKZe5ogvcJSYTmExev2yZvw3kP3NauWwbJdzvPsf7Axt74PFuUZsE7fws4S",
  "key39": "2WvriKMcaFzbz2MN5H9Wa5CF2BqrBu9Je9tDrZEz2AHt4cVxBLammeKDo8xzzYTSiSH4CbBPfiv4DoM3vtKsTMZ8",
  "key40": "5KFRgbkLDoUABcUR2SqcmHVA1KXKE6DufJi6ifMGrjitucbYCUCC4GAHVVorsBSeBisQ8GYv66B6Kk7ToAMh3h4u"
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
