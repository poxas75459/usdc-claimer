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
    "5nBQTwQR2bpvek1q84xL8A84TyZHyJfRzkFpLiscKS8JdK7DWUYo43x91xW4t6bcyLVkV1Fu8SepLA2NA2by43nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oEFoTRaAXaJCmXRc4SGGtNK55N1r5NpM83oK4n6S8VqBQbyBqEXZWw7RnPoxP2CDFMxZpZLrjf53BfzsxVCT5Qw",
  "key1": "jnv4NDpWgvDuQTcXdmfg2KjiTMcCvD3gFeQ7RJuAD6Z4hDzbj71zkrgRXWz98We6qKFDPG9hYdLWcXwFDmpme7z",
  "key2": "3DWB9DFgQenjtMDBGpHSsL4FzhSjjKasR8MCaXqvcFCnPrYW5m658GnfZAjESBURgoBG5dUYGcS64veA2ap3rjcs",
  "key3": "3Smgri7KNtfnxpu5vbgDiXmWq55ZJzRDdkUDr7EdfgRhSo85YxE9kpk1UBU9n4m52GcGCs8HgSD8V7RMy8JDhdf5",
  "key4": "5zTy8DhrdKN4jMjnJzmd4Qxx2y5unvx5Vzcvj6yAMQBpx95WcNy4VPPgg8pFg9hg2dePSRcwrPNGajX3vhApSvtV",
  "key5": "23ZumkryqUSLCGW23A67mhKzmLSgLZ7FRDtcemcBeYN7NKEQ4qQfqHUHctGzhmrCHg4TtGL9u11pbdkQCqSBZzqP",
  "key6": "3kMP8uHuLBqAUJd3iTEpQj8MrUXKF4VYxrVAjNPdqARbZRApmmdmXepVN9LtawDJCc9M4whQqvfZSyXW6NRJDV3D",
  "key7": "4gMRbfa46bHarXVsmATrL2DcXnuE1Vomg6HgGtKCd7eGdbphzNG9gVt64ygFXDEomQFukGCJ9g3SzZmHoAPi7QSd",
  "key8": "5XRxrY1V7ftpmkTVxrinD6zm8C9W2n1Ec4KoZts4j4xRZSbguGYkmPXYuuMdVTrGQHoB6LZKsfZGyKWnSz6jAQ3r",
  "key9": "EnPkTA91MNUGDJs8kjPaNdAqqTLb8LLQubCkRVQ8WtcNpXcDbwgz5CDNqkPrBA4pDzxFx7KnJV9ZLawxdqwfRp5",
  "key10": "PnW1vQ3u8PiA6VEE1ieXXhuxDWFsyQuZvLqqYGiitWzktrt2ZSpWarWUzq5GvxhhYDYg3P8RHWPoY6P4HiaVcsm",
  "key11": "qMcESSYwmFDDRaNzpoBTGz7os2RqZufqKmmNee5QU64YfKJNb1FmDB56uyLvjvvdcVA4ZVuyPZRXXKQSSHNd6XR",
  "key12": "2yLvBaCh8mPBMiLr5asKyVpEbiM2x3PziDw9QAW2arVTb1A2ufXdpS4KnKSa1Q97nWWdNaYaiZ46ckpFXb8kekod",
  "key13": "31gZuE3iNwqpSeXSWh6i9Kj2r1PFUWTG7gUNZHaUhz8H4H1RUbeGbjxCeKKWYhJNqffxG4Rodxz9uJhZWhsu5wDv",
  "key14": "5SBj9thbcrpnX1tPGVTNwz9Bv3ZCoFKk2hjfd93h22TUgfLA6s13NB41Pkqn6SC79C9g5YxG7yDVzLZc2qQnJHm9",
  "key15": "5gyY8qwHn2kdZLQLWgLNejaqaVUNZbBBuZsanAsYzRcMSzGW3wA14ASRifExAhhbYzpkCWPUS3rzm1sVjSquGJK8",
  "key16": "2CtqjEtvVQWVCdgCDeNXQZYf7nbkgNDtFP6rESiEkpQXnqiuE7en2ckX4Zi6LSGES7d8uMy8ozJEEh9fL8yTCu8D",
  "key17": "4CrY4wC7mw9QhVuP5Zm239CkttbnvUJGFNhTy1v9mzdPXWmVmnAxDUNQ715NonepErSMxG1XTwgWdjzb6EDpr6tx",
  "key18": "xemg937WBpNZmDWfgEiqYqm6sq2Q5SdKXArT8RbDjgMUWMRjjuKGfPynDbPdkXgkm5nDuAQhUAeGSJAYXQEduQf",
  "key19": "2gvBg72ZC4eN1oHVxjZnZP5h1ZC3sbanXU45SEJJ2QiBbnt4sF7KeCgdf3CCin2juj4G1Dve938UVpev6pnJL35F",
  "key20": "32HxqfC1pTxwMtTzT2gBq1NEMGrCVkfX146AXWsqUWxTYKSMcePhAy8dMwS8QKFfuxbaUg6f9KyDaQFXoXdMFdXu",
  "key21": "23m82foNxPeSfybF4AtSeKv3yFcBaf1wJHrRmZDPnPyuQ5StoqSfLQddhH7opyVSbLsK6BPMKthLgDWvJYknmeQQ",
  "key22": "5rMiFzrKrFUNZXSmtnXhiqFkyMMuvX89tfKtgQVjUwos198kh6VxrxpPrCqi1Gt9Wx9Wtr6DyH9rH4VLVAhpRMV3",
  "key23": "31E47wiVRnTnJcAtdenvHB53UNQg1KtgMWCubXuWFLyYm3KEh7tv7DFQiWEgwXGNnQFNAwTH9Vrpf4Cz5Xvytwua",
  "key24": "ShMPoMC1Wvj9kCH1HbXg1kxMPepL7m85CXeBQMnPu1CBuQmommnygUTsUFskFiCG1fcBRmQWyXryDQMJcFUcZ6m",
  "key25": "2nGXn6jYc2Z1AX3x2ajc3bq7h7dN99MK6CY9BQAFBEQGYKGojqCG4JwRstHm2WcpqueEoFsxadHJs9Kg5ujxun2Z",
  "key26": "4Wqp58P9mfGRHE33x8ApevM2vsdXouCBjyU8Sr4sYwm6doXYYTZ4L4Cejfe327zXC4JAvT96kJVFJDBdgXyDdx9X",
  "key27": "ssJiw32WvpguEH7rCYZPDH6rUxk5Y23BSdvNx34DcmUFGeHfcgqfds6nepBc5d9enwU5F63vMJPFgyeDiNokfjY",
  "key28": "3EjhTzDJuNWe8vM99DMkHi3qLi7Zzpxx4MkjjKfMEe819N3fcpao8oa5ghfJj5cEknqpH1bYdavCzBw8hapcKME2",
  "key29": "5pjnPsN37CwFvPL1WmCdposY9GXi4VaAq5DWoWhaXdytTnsA9PoJmqAdfghP86yyoaBfVWBbbd2avvZsWXVFuT7S",
  "key30": "425BvFM9GGZvYnftzWwtUkpuyvbD5gf6mzXipgeRU6Y26eTERZHBZLY5CFRLb3hNjvJJU5nweZ3f6U7kAsDbd36N",
  "key31": "3UpP7hFfjPxG5rpriyR6KGFjrC7nutf5MdiwNLTkGP6yJNMZJLVomdFoXRibGbrRV2Q5owJKKZmF8FFmvoy4MTFA",
  "key32": "4zMr63CsyKbX1FaAxYuGMKWUSjxhw2RAVbkcmZM1L1WPrtdFikwrcPjoY4bcz35bYdLq5Xcxxv3J3SGjaZiZ3Hqj",
  "key33": "4kttxRima41jsTBcLtWZkHpTbBp4yCJa8UJNckFWivcx5vod2DXV8Xiuzg4rzcXgCKcDPMpYdbwMbcjcVxTH9bgK",
  "key34": "N7hT6KFjZrB14geDFQtGd79LJQxetRWDCstxoNZjU4dMiLCtAfxChS7PTRwj4U2AEfw728fQMt8ZPCTWVttvpLN",
  "key35": "3zwCTrhvKBpjwBKSNATkQUA1WQdGgP49cAAvWynWj7iQwQyJhyVVPvRpSjFpiWvcxH6tCM6R9eotVJ6ymE3JeCr3",
  "key36": "5REooUxJYk2GxT2nzpyS2dB7HraiWf8SiXtZ5f5iaQhbkeYGFSJQhu3xsJnuVd8sEv4zMk83GMS8f3YwUHVttEQM",
  "key37": "3J4LNbuJ1Kzcrj8dN2MYnYFVqT3NJxq88or14aKKdgx7sQZ2h3jnTJtKRoxekGQJNh4TVvf1P4TJ9sxPab9EZ2cR",
  "key38": "3MDTKQ1NcGdYzH3pBPe51Q4bAxk12awjY6UxfzoUGQRstsBfJyEyqj2ipbpMw9hkYQ6Pd5BLZUqhbUNSoUGEuiP5",
  "key39": "5VUcTNtHx5tERbrsmqCF5vtvHES1xeSVVu2mwM5YV32DdQuRBf4eaNwS2PQbEUiGzxrxATR4GJshjhqmjgsR9oCH"
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
