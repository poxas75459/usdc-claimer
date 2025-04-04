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
    "63E9TmsrnUMawhULT3WsgqxesooBMzHpGe2oxF9vQKTPEUoDAg6kqEnefDAYDZTaQiABUvFCJG7kqeoB48nspwkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cg9fwf9zadoP76N5CUhRgBaGTDPS18dbaicdaN2hTs29MAkD3v6YgGan732aryxMQVv9ARsmgzB6w5yeghNrdAY",
  "key1": "3mUJrYiDNwhXbhz2ng93qLdY5CLxZNk4xJxjBeV1Xc9d1fkkNtHjX77kAuNeDz6NFnAhbJMNk8v47hAQJeHXKbHM",
  "key2": "2WqTe8cRBioaDrT28ugYJHDsYK8fd6WzpDkTivDaZhqEkstvvmKJkGo5swHYc9Zq8EdF8wADvW5xUADfa5DchHDC",
  "key3": "5xNcM3W7RxF55EPRyFF8KFyadfXc5rxH5noqgc29E7mrWNZCv1HKV4ZqqrZWgGcF62y9AcB9QykmW9fchYioEAD8",
  "key4": "2rhNisR2kE6VmUUizKtgxd3EbbDEv6XaWLcAkzR9c3UPUTXwiE9rkWEwwtepSJs8prdNqdd42MQks4tnBaR7LPnj",
  "key5": "2MWsw1FSXz4yDAYppi1jFiiBN5zmnZ8NXrRZGVmUp6VU9ZPmnNEKYhzUNXWvDkCXR84NG4KQi51tpbXs3KpZVJQV",
  "key6": "62soWsHDPctNPgQVuHs5sA612w2Z1VeK7Y16qzs7RZQ8XrYgEioSoozAouyESbgsoioxUWmFMMhzcs4zLv99XRaf",
  "key7": "HtfJvWkcM2wjmffgE7PHqKzyFBJXzmV12Drop5UqA6bKfHsxaotsHft5aMh4NgMBT3uckF795zrXeh4FTg453yM",
  "key8": "269LAoha6ZXqJkz8WuGsRiqm7cJPUhew5kZmG4DJbMEygUq55zvEXL6u2dhHF4isbKDitiKxKKVfpz1KuwyFZD5a",
  "key9": "2GceqSHgmax3fk7N1bqftSdhbFjJ3PShS3xgKWtLZ624Rk8UqMcBu5ugHPD88Skj834Go8Y5d5RE8jFwpGPHjv7m",
  "key10": "2uWL4U4dhHVHTi5mNkixT1w8A9tjZsFFHFapS6eq6nhappYFs5LAoDDyRnuQuitfModV6vvSoxWeMnwHH1g81S1K",
  "key11": "3NuuTZJuYcvPBxdAQkDqLSxpJDd7K2Uma3smJyMKtG93mGUJitXrKL23hdvZUWgyqbngWn6YUy9gW8Z9VDmeNNrD",
  "key12": "2SeDzGxbMGZ3qSkfndgcCcThbBt6E26kmLN46STTWYz1ZrQYcoLDrwHJkPk4se3bCfj6FS1pNodMdHuK2b7ytn8M",
  "key13": "4KEMeNRhKuibwdHaY3mKM2Ty5cTmrrnQ5oBeSg4Smhcr1JsGxJ89LwGk9YmgWETgGtHULZjpogM3vgbHpDUvwrDq",
  "key14": "4ekwbKDFeMTw6c5DqMikqX1TxJBB5h8wU2wy7X5M1czXgFVa9cVcXQGc6pyuurytmjRbbJCctR3iUCjpMFCTxkgQ",
  "key15": "4yYZMZyTGJK2zYpneEVE2WLAoz8rEtRMvBVpQkhbQvuaqqoFmvnBKchzm5JKx47jecC2X2xEeUoFFX1SedER1DGS",
  "key16": "XdbBWtvyAwnvJnYxozZeV4sjaktjNEQaxyPBWhLi76HW1SsbTWAEYUFTyLfqrwC9pWwL5szyRdnspGckLa9eLTt",
  "key17": "5mCh77Ff4DAqvMDJS7Qjqj66AdyPew47sAF4W23hfeYokMS4FNxzkskvsipWvHjucaxghz4TGagV2XrwCgbdFrvB",
  "key18": "3vREzCYSAQEktcj31WGvLrtWdUuXg7w4TsnLAH8GtqMvrtGncurBB25AC5NXcPTKtXRPE9YHq1kMxTbBJqHucCcz",
  "key19": "5Bbj2BQ62jisGp5jGYPLac7Dm2ASjBNTp1YwvTpK8d72goNESvtvKYi8mxaVWcyvXgBP3c9xdG1EeTGAw2SyQp1F",
  "key20": "3yXCZ121y6oz6nbMackg7CBvX6fHHL9odZZt5yrUGmTvKvpXGcdH6YuD4LbsZoEQW8RVb5HV927QMoxTcQni1KUG",
  "key21": "gzD8BD31t8FBwvLxB3zoMkwjKcfjKAVFwCFwtJvZ8SWQABnGdKQssonrx2aU1DuJ4BtaAWBcB1T7G9GrKtzNBkd",
  "key22": "5SK8rhrc1o6R2C1ksrtCR9eCpcCJCpdEUZJh1n8ZzSsRoa3jt6cF3ETL6cFpwJJFv1iLDcJ4hrQJXWMiC7KMQd2Q",
  "key23": "41soXqQSpftErG1QWaUrpMp1YvovVn6F8ATZKoa8nmBYEu8qPPxYmzvd4D5stqhm62J3NXPAp4BKPANwBjm64ZPx",
  "key24": "zf3wNfuWuVEjmGQY1xvE8rXFzopfSEyLD3wgrvE2gL3Cug6wXeudBed88T3uMioZ8NEsd3ZXbZqHW5KG5CXmR5A",
  "key25": "3M9kvNRRNE3apG9hTXZYf8Xv4zKqKenGDhBk7btYbasd8edpYKDcYhLThTuBQ7VzGvRwgbhHHEoDPChdV51Bdbqq",
  "key26": "24opQJ6pxBkfNPGgTUB1bup44Sh35qTkGkNpdCL7ZYRUA8hDaKKDTWVsq9tsiB4PxawxvQvNq5uiXfbyJq28RTFN",
  "key27": "2cDFJVY8qj9Nyfk8F6ApeLcEP6eqcgnLiW7rcqFdzLSNsqmVV2YFLwWyh6xdHXg6onvGnphP4iwysJ2UdsY8DHfw",
  "key28": "1VTwHtmC19TTNjcvuLHZsfWJn7E2Jvdd3TCJTHdPWXKxJ5GKdBiXqh8zaXbujNVW4UADWwZqK6yddDpKycyRj5r",
  "key29": "56XFk6B7mdQxb27NBiNDP7qyK7e9t82dV6DEDWiV34YChoSg8TA44oigFtv4py5N52TinMQDpNnxUSpTacp4HxrT",
  "key30": "3VmPa8vLTc1XWmZXXWiRJ2HwiC7cGWYbsb1Zzujf3MCzaie6CneUbBehGxVZBhkn6CvMGKucVgd2zMoGirXhtRZh",
  "key31": "3gw51Se4dNLe5SpnaaAJbWM4MpGYZnYxJUDaaZdiDzkf5KjEpg5qvyHDAZorjx1E1VeTG9RGjwpUqoTkgYporhZ1",
  "key32": "5GHYmcPvTp1uFTdZPmx72SUB3JPB9vbZKFGH8U4EamaGNd54TzJ5fX5osn7P2eKMuzevW7NN8eWVU2NSiCDwAxS7",
  "key33": "2yKJzYETAi5ikgJhZsf8FqjQis3XoUXGct8cRGuz8QcXaFzgELuE4ZiV8n17tTnQqCTHd7fo1efHUFJk6mkp67eS",
  "key34": "2YEqm3GhyRWmm9w2fGFXfAwNGH6yu7zsnPt5cT2EEshzDNh4odAk1vteFyfsUVbj614mSkPEZwvJmMv8AWV6Hgn8",
  "key35": "59SezxXmphSBu2ewQLcB8FsZ1boKwTgJofGJU4C2r76xnN7onb4Mvhz65R59ZcR6JWFmmwKzjzAiivdUTa5pxDjC",
  "key36": "sChGtxhnb4PocpARB1QPHJ1zhTKMj78ttVsnxGMeuZSniK5RvVMjqNmg6A34UQTezbQHvbik5UJcgGtZwNz8e5A",
  "key37": "5WssDUsZXMCNnVNPEfH8C41cxybAWLdWxFCpnJoxfN6YF5JYC96UYKP58RLZwdh7uuXXiGWiVMYHymnZ9jB5rsy7",
  "key38": "3FNd9LBE6NnVX2n3sVHVWocmkbv9rNFbv1NPN35YbYrJL7gVqBu3vnxVzWN5HPzAfdbxg6qoEuPBbpkPH82CtVtR",
  "key39": "3HKGYRcY88hc7ajhZMGSsBFJee9s7wT7MHRuHWarQbhVWPb9B3gBf7jQXu11q6J1toDHfTBy1yVLbUjRU6g4q7PQ",
  "key40": "2sDnupoMkP126fCDDtmYuhBnKQhYjHtN5unQCEpe6iqg5pRNLZbhiVDyErUboUFwvd3tgP3pPfrYxv531BteeGho",
  "key41": "j6RBXHrQy9qQbfBn2D8ihYM7o3dgy2b9QHi26UnLhGx6wCWEUxQXNTDufVAhFWP1CAd6RcWMPi9mnoniDGDH74o",
  "key42": "2EZ8YdKSrHkGq88FczdAdGBtPgcpG1G1kMpiiuwrcehH3k2uYUDf8JVht17pjR4LHPv4fVV4t2W27fTdLAsCdoi4",
  "key43": "3th5GGxrMHiLi4rhDaqRo2oqqbMN4jZf8VZzz229SQXxcoooobGAD96bpfNntHtjnvanCKvS4df2DCbaLos1uPUK",
  "key44": "4ny3ragLHoDDFwZFBB22BZbUNuYuHGyacUMrS4UMdcGRiEsYj3oCTi4oBLN7vfi2bUaGMNQDawvS2drjbFKXwsXZ",
  "key45": "2ntfX2LNJzzi5i7VKzVqhQWS7bKWxk12jgnjKpckeWMT6LTrQ2XPyP2zmReciCBDor5k86jicTHCm4Wt9WfT4JEB",
  "key46": "5iBDk5tLgS7BVSZGZDq7cUaDi5HVugWtUTGpwLbH4C993KXy9UQJ5B8tjCVPAL4xYSYLU83ZYvXnuXuZKCv8KV5P",
  "key47": "3eeSmtgZ7yXC78Y4FuPk6ooAhdxBHzMFohV6bQnB9YXa953iYJFysubUDhBoWBwFaex2eJ1Bd8M5T9Mb3Fsd8ZUN",
  "key48": "UriRFGqyZCRsTq81tNwdQMt4ToxFpQ2gs6p9rnWqfgeDm7A5iqPwtT1LNvUDFo8ppBSrGDQV8fzCAZQUs3RhFp8"
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
