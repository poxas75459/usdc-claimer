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
    "4ScMYih8Pe4dDm7XUU6M7ueVxpFyTytorhsTT1Ppw9EGV6kA936wvH7wqtAnaU3Kb4eLKPPpb4pGL3HbMHiShAp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFUSfcqSKofU1nansgwdcwFsGX6jL5jt5dB5SXvfQVoK4QN7WDA5CXkRhY5YQyGcjFspP4g8wSUGBPie7DRe76r",
  "key1": "YBmeSwL6JjLWjKbBCDeKbh5LfQUYDGjYAXG1UNcEHpSXDEL23P5MHH4RkmBeSjwRSsqFWfZnRHJ8FDWpNz6Q8ZV",
  "key2": "4jiU5iB91UhzPVZfN8nCBXpZiRjeiF5c6VZkJRGvnz2oNhj856FsVbiiJ5xyUoFzJ4JQbZqdvhEgEX97RrEAwoBU",
  "key3": "5dUitqdZxUx9jAt7ACLoc7aLAkjmgPc6sSi1wENkQ6mBwt1XNb5KVZchx7DW7wA5KQPyTPbePbe5NxsBj7F46Ddo",
  "key4": "3oyCgShfkF3kovhWVF4Nk2wHmyL2toiyTUvknNoKLGsA4trKKZmyuFKvk2pxoHprW2iXdhfuzgxPT6ktU2oaJL9g",
  "key5": "3EMs8ZyebZJat7kyTwSf1FQ9r8Qzgsi2pZ2FuDrzEjUXPPax7dLmBHjuMwYdej76JdiDY5fjwSfpdRCstXigPyBq",
  "key6": "61LcJsjoUUKAtcHBSabi5BZJFyNWx9R4m1FBpRMrDJw2pg4H2Sn3raQHatcoGjTTm9jB1FnCyR2SJ4zznzZbDiVW",
  "key7": "JU9pudEziutb1WkbjDGVDSHMc6T9nJM8tnCmUW9CyaDWcN4SGD384FTDjPLTf5qUsqbAJKkPD9DwNzhbJWJGTP7",
  "key8": "4yVBLr5M4wDGq94xHr6Zudxw4aHpeR8hNS7nFfGn8AcwVkCXwjwtbiQ8JgTyUpN6Ab8mUZK2KL6LwE6oZohCiZeo",
  "key9": "4bVrPV1qR5PXfsqvn9ACPdMm17EA7PqVZ1wnv6JC6UoDr2i6DMbZr5pruaWHf9a6EKnPtNpjTdYcpPUWeupK8iam",
  "key10": "RWPy1b1fpkDkerjCdgN8cnWUb3heRA7ixnKS8DdM9QwWqLRBAnpzLfW2zqK8bQ9xZobn2KjgxtZ6GGGiSNTypaJ",
  "key11": "51xyxUdxYH2TcNhQgWLNTarW4r4yXAJTAwy2qrqDiTJbnWS7xTrL4U16wtPhFSZu59ohZQqzG2rH4oSpTX2xGLf5",
  "key12": "61urkjVZK5SS3ToYZdLtRMRCwVmp3j59g1Njg754a9v1M5LTFDbrxrBUtJ6acmdoJip4ZCfzGbSbr3fnyQtT5pxe",
  "key13": "4PFfGiGFqpU9S6whvbmihmbnnAJYZfxAyxjqt5Zbw5gGqT12gbumTcHCz6SsnDe3GUgdkJ3JGZ7yWFcKXFzksbVW",
  "key14": "4bv9JH7zZVjPge6gr1Qke6kEKAof1Ye1cz461H5ortrphR8J433t4AYHxK546bGTtzSzgcfRvimaAmN6Qc8G4KHB",
  "key15": "5ee4aJ1uHBRU5zkWW3YuUMXhh1jnxLQT5rFDEHiFAAhvmxRYWCT2tNGK54BJzi74TMVbtFRdyacE2HCgToNpHEbh",
  "key16": "5v2hwVo45juWyujDTwogwD1KxZxAHd437KNg4sQvvqcUNjQ44vPvct3wTAH1277q6dBKaGAMawQAUewSESko32RP",
  "key17": "5jbn1Asb7d4Na5zzWmfGbo23eW3gZKAvEc5udgkZFGQddBFKSgW8f2hjcMGkPBEG2S5GUwQMBrhNLVVMtQmRWQU3",
  "key18": "HsJmkRNyA2r7PTERXKNa97EmQSrkGhaZz94onXTcQ27LJ72N4tfye4KYS8wraQQmuLMJUoVfRwpbzdWZAZCh2zk",
  "key19": "3eHntVJg3SPQLXwhkSmcALA1CgYF8RbPQXYjTXGseBcoSv7uptQ8gqc5qzvyiEgKQYVV3A7hfiwkY9fzLaLwWCzH",
  "key20": "4kC5gHXfr3cs4aeAhvrtrSG7ZX6N35mw8P5fVcw99iHKoXQ9ebPyaAcdQ1fzQTpRqbqD3hc3CEhths3mao3mwvza",
  "key21": "22FvRhamLtGWDwvyGcSJfrqdBhx6KQvtxLMkiou3NF7MJPdcXuuohjGKzqEjTuVUxcrqiAg5qXyzMTn9GA1QMQXX",
  "key22": "4TwHDFhuDDa3jYjdjRkJCiWkFhXTZwULi2Ymg3G4wQQptr85bgj3YditJCLGYqsrNoJNSMc173i6wVYyT3EZcXhD",
  "key23": "o3uUM1FTg4zeeMP8bSMR6dtWrEvLJ9P6BSTxixCYXNTjaFAKELkuAgxjWVmayd4EYKRL9maC4LXyLqzYtr46EFR",
  "key24": "SgQqwH9MBXy9LDeNfVpMGoZeTXRAQ7vBWxT3BQbNxswRUfaA9zqvCFLTqTawfUTrHi3tybz3WBjKyuBtJyf4WPy",
  "key25": "4eVbm1yn7KbDSxYe2fkGMHLvww3zt1oi4kcu6wXSJSFnPACPdMA4XrPYWprNsmWj1ETjRUGP9YMyBDvmY7DhfCSQ",
  "key26": "2aM3vUMFwQcRMj4U45Bh8f4tWXiBt3ymZ6nzjexVS9PGLwEPoz1PnXPoNauah2AcUbCVab2624CYrcgGsg8Uq1qg",
  "key27": "k7kEdGsb96yd2GjXgm68ZdPVK8XjkrhGXQaptqmPmFjfzeBuz7ddwMsvZDjWSxEehCVcSTJ3xGWKvCHoct38QeP",
  "key28": "5Qph3nCHqhapKbknChvSQjoKS5LizACi36vtM6rQ3tcouWUv15sG8DdkYbqqGRdmtcnN4AKJ5YYzJe2E23MzFTfV",
  "key29": "1cBPtaTSdHvaABkQVVhLdYpR6FC83sSKCTj3Cwiiag3PR3WHsmFCouzRy3HtaN7KCTvsZz3Nyknr5Npsykmxysd",
  "key30": "2jgQB4UcUXWxMTejh9eFjyGK4PvYb5RMPcVNRug4KkVi1KqEhSeRNJq1RvwpFfMrggtCBpK71k6wqTZ1kmkWJn5A",
  "key31": "4pGy4EKC76FhQr7vEva9HBhwSJTVa8aaz9ZwMpawbWgfqndGvMXaWVTfRN6E4DtgmAUzfxAoa9iXUhpw64ifEGtg",
  "key32": "4ctYeE4rCvG4StdkeB65BbAg9GNDL4BYUmo7eZxfSXrxymA7wZTxZngNky7rq2z7svy64YEam11Jg21WsVLk5t6x",
  "key33": "3eJ5daS2td2YaQXgxdyPGwfmyxamWs4rqtRVuw6Hvwa8dvb3X7g32U4ypidDXzZzHBRxB3Tugy2KgANMoZj1e9QM",
  "key34": "2GGR1fqca7L2nv7bK6oafWnBwzZXXPPFsXxFVgWZTLAjNdHo82KUXoBNeiW76HUYwzS5NFAk5cA8zvmP6zW1NjCP",
  "key35": "3r5bLFJMnT2S61BCcjnWvEAxyFpm78VWg6iut4Gajr4p7DNJRNJDyLmx4S7PtcGM4WYF6VXGTED537FXBWQhUKpX",
  "key36": "3thU2EZkEH6CgMjZ5eE4ju9mfWPNhuHdh3eEyDi519aZDreJ7SZVKeffe4do9NLimuU746uPuCEYZP1i7EFJSQrs",
  "key37": "4G7sM9AX8zxdyfK6cgV2djXuh7LPHH97TgggdeTmmX3XSj7hjcYoiv1kxHTbSr2t3LUqX4Ypp4mCKmqxu7B9ScbV",
  "key38": "3VBhroVDC1PBB17sKDtX177B9PRAgz6Fv9KBbiakvy7koTnYM5bNAv8cJkB9Zscz6ULyph9ddSDDjthPhhmfbjvy",
  "key39": "2MFuyYstYsBEFxXyMpmYPPazqVFEJNwVM5Uhbq5dK4SWon8hYdq7c58SYp9ofpnaE39YaVbH2ZvD1S2xMrEfNHGG",
  "key40": "ecay8hB1YmYJW9faE6tNCSsW8trFzzzTQtJ78Rz8qsqcMda2wxWqkbsS2iSj8GR3EFvDAHXCP6c1Gp6CRi2BkRf",
  "key41": "5DfRZwsZUhtCmkVacF9C6JAWJ6w5qBgu5pxHvPxMLPxcb7tMx9JMs9NGpnUZD2sGNLz3DuqdUmSxy2uzY5pATdqS",
  "key42": "4jwwWqeg6r5jowyHZ4YbmyrLbyyr4JAn5xMcbyM67uwgRvZ8bMXBvsAtzwfEz7kXcnPqcQeyQ9Yhj8Tx3do7waWL",
  "key43": "2M2toPZgJBn27NXgL7GHXZVHaVtJcBcF6b3UDwNk3cWXXC2R9hHzsW11iV9tnMjNzY6RvQrichC3ixkETzTvjXpW",
  "key44": "2mKf7XgVWzB21VFNtwVbh5czEYm3Lj27xTSE3qqafUGzS6CmdMxYiPf32ZLvWH3dbtWHGHcuFPRheccyDKQonYYF",
  "key45": "3XLVSHULrxUjL2eJDb2fLkHCvCvbxnVjfjg3auc8G3jxvrRf1npAVb1Gt1Ah13ZhUdKQLrqngBBgvH7HMuC6Anp1",
  "key46": "4BEo2gsNME7sChzMzkfBTikjvRuyRumecyjqApyntvbPk1rabiC9rGyCTU7FVpCYGadRZcbwJJxU8GuW6SCZpv17",
  "key47": "3SW6bpSTjxtPj1Ld3FbJ3ZZMBB6cEBtXQJNEGsFtKwpbRVgApQmMTnY2TUMjsjqPdby5Q7xsyWC4gyWAtmDcYkYa"
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
