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
    "27sNTwzbToW7gk6x4TCweRm3vw3JemLyu4JZU7RoSow3KSmUi727zd6RECT9p7CUEeV6zHdQRQSAh4Sn1oCPghfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oNxVhLpoMVw8M3LbPPM8wh2eCjhpkE3VhEwV1qLujM99kWzDu1LsDc4DTtaQuq25hjw6SvMT9w17AQT5QFqz5n3",
  "key1": "41aaH63oojg9iuQwwLhLgxTMaKCwUHgfcf4qBbLQPfDxU7wtFosZNeKxLENzbvnXD3aHzMKYhEp64kW8f6Z9ZnDA",
  "key2": "4dyrutZx976NL1JpxoYBGE74EqXMiqxRxRUC8mr2vY9rbw1rncNQ99qYtcmSA2nPiTGPnK4p8U9CM7JzS9vmmbru",
  "key3": "5xh1CqVzvxE9aAFvvJk8gcfVkjN57QQcTtp5u2cRYC5amGi8mFZ6J9kbPRxQh9Uvgp1WBSdQd4xoC6yVCn729a4t",
  "key4": "2W5rFkM4dXfDuuGTJbLKHBjE5yGpvdAxY8pRvPNVcygD7V5b5irTBsRa3KsrzJDTZ2T5PZkLUtsw1hsRZDPeGWdL",
  "key5": "5kPyaKWzMQxWmgmTFWG4Z3WH9UdyouDyaBJAANPsgQaWFwYBd7gnvSNGXokWwg8SHDLnDJPskCdBJaDEvcEdw9Pj",
  "key6": "VqBKSUMCCZD2bAWUwyxRpGZGVbsxDP9ztXjNMaJuX2nB5B9BdRMC6YWtUF6iaeCVtqXywMNZWv1gjqL6gUTTVND",
  "key7": "3ZkKuUgt7AvQjvGYn46HChnG9oe8pX1Fmt4my6ExfNTdg4rvq6zzBxKfFzD4WhEvEaZByrx9aUmB32TT8i12vhKV",
  "key8": "3pRtx7sVETy5dH4f4bdJZneFroXNo4of2tRFbHDXRaiEE1b9XBqhEy3TojUQEDXdgyMH6hdnZMmU222KcTWvt2xR",
  "key9": "5ZfD4BDpMQ84R4VhaDCgQ16PANnAYCJdMF1PLceznuY4kpABGZbk15SHxrdvGtDT18W76d36JJEPk22PvUqStmcE",
  "key10": "4UQWr3TudzNN7qg25MhUwrovpXtRsj4vHae7wEiAjCziwhNKpyNPNSo1wRvas9dQWCmgV7za2ZR4adP1ADPYahKn",
  "key11": "MUfBCdjC46EDwgUMZ3Eihor3nxW6kZK8P6AGdCChjAp7joUV2JjNsqAEjKPawhiWGy5XhH5HWKFi4qmziUXaH8F",
  "key12": "5vUaV5MvNHPsWzSbhMmRZistziMZSbgWi1mDRPMcbtyJJjcBpePe3bt7svTZm8LdVdL1B4CWuPnqyoj2zhVYZpJ5",
  "key13": "32gDAuik3pAYTNCCqDRvpP9E45hvTUcLaPDctLF5VswP78EvQKZWsMwM5WR2LRSUaik9PR5kcWqEEYK9SN4K8jJc",
  "key14": "5sd7Vscf65fpWTC72uwNPVDCNeuggYcaqxZokoRyYFr2HbQDqdzeCf2ZgoUC8YpnXLdZEyJq7QHYQfM59b3VNSbB",
  "key15": "2WuhVudYLj2XzMVZaW6zvvgwpZ1ebrh1P6VinUvdypcPnnvb7hMNR8iMrhn4CYjpJZFutxcAM7hnhyYra7EL6s2L",
  "key16": "42Z5dAW8Ge4TXRsokobmzfHo2YwhWEVpXABH3FzfEd3ifdehrUkszVCDunT4KxrfucFWyQdPeYjTNyDoSBszi2DH",
  "key17": "5RUgtZwvDVuZh7aepiYDwhpBXG3XjpqrfrRSgi5gXu6BcSHDHA8fnz4QRKrWKzgc34JXBpMR7J4hjetbvZZ4RdQV",
  "key18": "BonDKmuJc6bCxzvX4yBbED7g4CkCFnzvWGhrUNy5Bkgu5gJBMMgNEXua68kpNQP3cFpnSuTMKoAcrCpU9d14Yjn",
  "key19": "5mpY32uLdEbavsg8vc1mx6LHv5KJtkigFTdroUasj6doLvccgXbF2T3nXR6MhgdgGCzZrPBbLmSFMNDzeumxouCg",
  "key20": "2ni4FM3qsxSUFBZ7DLJbLyyqbn1aGeypwjv1BjXooiHy8wD23LsF2AoEQZqfTDmggTNSNaUDNqM29K6tDNV8y6vm",
  "key21": "3cEeKDmftPfnoaoMTb5ZaPJxY9Yjm8K7wug1xP3RSRE2GgfzgzJ1YunnQkAWRNu4GSiSooaay4pGcv4nYpyw8y9P",
  "key22": "rLWgbBfi48qG2LQodNq5vMtGHYRC8as3s12dDG9XL9gNtzHtAqJJeFN9VL2WnYjwVEnuknwyugkAApYQAAyE17M",
  "key23": "M2M989vzDQZ1oXNX2bNSuvERy4VFahPqcYXx5mCgbJLjDnNjW2vZLHns7zq7xwLkJ2S6d4w8nKa5ipBCByeago3",
  "key24": "212Q9JeHwpVgWhByXai2WctPEoE7zEKQAeD4Y39vWpFV3zAGhntEHbhbBz1e3jvcDrU7zhfJoy7Se1kXZkSeWCZF",
  "key25": "24iSTMswr4XPAZVQRpXmAKMQ6KFAPDLGygUH41N571H7nFLqYiUn9HZqK4nVLD54auFfza1ZjzYJmacP318CMqXF",
  "key26": "5spyjiV8RhuPedms67Sir2iWbWhfTLymHMDjD5uE35JtK6m4zboom8wMU9WwZCy4J3DzyPichYc6qYtjMupWwNYF",
  "key27": "3mAVDWdBHUY7nHprNn2U2jUyd3aTiAHa2Acwzb4zXj3EHny3XMv8aLdnemrs5J3RZHM13tkKB98E8uSTppSj5JL",
  "key28": "omac27rzGtV6hDr7s7BTRzfukh65zvsNwCBd2xAy2H2LFFTYB8Ju6SWA5FGkMjB8bwwVZ6jcfe8abPwH44YqDwy",
  "key29": "2SXhqTmnAju4WR4LjDUvRkTmFxSsDckuLjMxmJQLbLEwiDo6NnoUBehEpxP3yA74bUdPsYqR6Sx4mJrHvxNefFwW",
  "key30": "MeTFxXzQr3otyK3Ug39RZDG7dEMP6RTv32gkWLbBW2HHa9QmoZN6Af9vjCTcEzForGEqq152mbAaD2sdNMdGmqB",
  "key31": "2CfX6nv73au79bsKUo45p3J1hew6cRedHbM5vYUw9XGjZhgDscaRxcAtKpiH8jNVKNtnvGdcbpVuVVJ2Czre2JCu",
  "key32": "4D5K23trr2ZXcbvJiJgZqeNB15kyBQozkxAwwjEf3HcDDAEBVdUogtBuPZzDn3hMd5izo6buWY6Fu9Yegom3EN56",
  "key33": "2KzBVhKSvRu24HdY4y6MywPx51Z7VnZjAACgunzCdCJxq4eomo6KAYrVrTn2ygtCRm7njtQahGkx9u1pwZjs7ysx",
  "key34": "2iZhwp1XtVwDzGiNyk3YXcVv65oMLYsoi8AQk5H2jJwKWF2iBTZyRFe7boHs6wezwwwzZ8udrKJnfFZAD6yq2WVd",
  "key35": "CegQcZVFj6fLb2rcMfM5LJGAybPzxHNqoNtp2z3eMrEtvjjQmt4hmmMTENajWUoMkG2p3BFSDJZkmMyxgnTvgYT",
  "key36": "3rAcqz3786R9ohcsi9p5pYoAC2yrcsw3FZEvGzgPuF7GwUD6EvqPuUetwVr6BkHxvkiS9aE1uQK1wbaXsuyH5d81",
  "key37": "5RTC6G9KgTXPPnrqV52ktg4K1NCKztWp1Xib8WWGpeNtrVtDAFbEsZisu37mYw89rhnPgQNEpukcbJnM8Ev3Mwcc",
  "key38": "3AveE8Q4fLWe7YYn6Uehk42cQqdNsEJpbHKwWHoSZMELBog5GCXzm1PYSCuE8vTxsYs3K6u7EyJ7G8X4U1ESzXkB"
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
