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
    "4TJPWC7MGELYELmhGvQtv7mNo8Npfqbur38J2KymrTgZEdkhHBkLF3vgnw39oJMkvKoUVizFdZMBR5FHifrpWHyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZSdjyoy7KiQensmquPMd7eFUoJyooSiTLPL41m2QA1rvNDWFDEFFN3xyF5nP9N3oiicqmP4YUeJk5LQARSEnsGs",
  "key1": "3T1LFhiEB2QkdcNZeHnYio1BBFRM4cjTFJ6Ln1meWH5xdt29Xb9mmutQfvtDxkWhchN624N7QQmvDPskYyThra1y",
  "key2": "4acpgG2ea3P9QCFV6WLjv8pKsHCfQdUGvNZPiHRQBBYQHTZDUP3cn2Wkbao1ShgWNQQU9RciJhLYy43yzx9mDSVm",
  "key3": "4ngUb278uyEUu3DvQyi914ZEBoe25xycLgtS3Nm42WMtoTbcyQRDZUCZipA53mfbU7dVhK4VmnJR7G1BWrQEj1Wf",
  "key4": "3RX6Ms2PLFxCtWshBSkEXtE9Z3w74PpM4m2VNxquaxbHBD6vZRtW3QN2ViMBp6YMqa7GdAJmJKoXfJwZxZvTqeWt",
  "key5": "4Qtxo5RqbbZt61kzjxXDQeMTH2eC43vG4amLgRrmEMG7cTfR1PpV4mNYx9WB5gxqeC3yoAxfAfhPsv5Q75Q1sLTp",
  "key6": "29S3Nh8SR7W5iURzctFaZcn7xGEGk45vmisfHFJXcxQdjciRAH64FPxfTeT5hoqyFC5rF2cwHYtknRwwMfs27Pab",
  "key7": "3m3X31jkfb5Rn4nxWBurYYfCQpypxpJ97xeb4vEfnrzPARCi6q7S8c9LVVPaSL1S9ZUucWX8V9UYevhkCa8dqC47",
  "key8": "qCqhGBdeBejsiPK1LtNWAoaMU3atTtjf8TJpw4MEDVGc1n7GKhz9vFajLB8FuQ69MnBJsiyULpq7dPP5sfnGRWg",
  "key9": "2Cr7uw59t65M84Jj6n667NW7rYtkWWPxcN9JvjCpRo5TUxuBjU2F7L4eXugdXpfNAHfoJURAcEdcs1g8zFk5qZub",
  "key10": "3e8BCH1g5NtLuJruLE3HnVJBwyyvyNQR2NsKhbJJRBRKu9L4taxHbFVGVMLfyiiz5d6Jm8vJYbMcvTMeuXSp4hnc",
  "key11": "iVfZE79iXHnyoHBMBSFEfixYZoYdRv9quRFBMXPkyCZC2uiRbnDGxz4f1iZzPGC9cuJ2kFcx8b132svZbtLUu23",
  "key12": "5q3uoC63kKMB8rWoBrY3JyGt4adL3nJLLrzcteJpvuTSM1QzKxgsHoy9Dnxtcj7cfEKovPmV8ifjwSWzEqTBfahX",
  "key13": "28WvAA3d3QU1aEV9mTtU1jSARnh2WvZQkVf5FyeBXSxyjb3Hv4Af6JgAXDXpGbfqABzJsNkmjzTmx6k1oaEGZTY3",
  "key14": "5SANL1NTVzQc1Pf7QpDWE7zEEmVhrpT9w5wbxSwz5rXRxMyx35YbyKRjxHnibQTR4jqz66vvwH1yyzUJ4GmLmRUd",
  "key15": "QHtN3bsv3jHSY4iXULYYuZ9JoGN9e7k3RCMeS85SoYHtiPjupxc6xGr6iz94dNkUkCi45BdrhCw9pBcZhactKjE",
  "key16": "2NYVw8LXS5AgiGj7Pw758dem7FVgeSm31VwyRRYmDQya4E4dLXXMxMRQGZDjSgksQb98ww54ur42G32NXLYriY4u",
  "key17": "4zeNF3UysFFj8QsEfrcxRoghD9htexGowmbBGsL6xx69ee1Ay4RvnDGRk4pGbwZUmipunsPbwHEFwXz5VEBzFECr",
  "key18": "4FBUh2sr2mGs2PaYVy6ETbCWDRoPHYrAQ5vSx53x8XTEiJydRFoBGGCpS9Fm2WgYFNRgUXxMdUsYPAYvZS2pzPAj",
  "key19": "3cK2kMvrPRGbrCQpdcJQpH8a7wyo5qah9oEvZQGfDyhVNF7HpGkiKP1Gc24KtF5ncqUJqvJZpvtBsMncLy2cToiQ",
  "key20": "31Zd2T3kgvozcATgKQ1F1zhzLWrU3VMycmbcnFozqTWwA36JTBmHgNTwZGL6sftBRxpeDQb5ANSPVUFjGrpNs64Z",
  "key21": "5a7EaWnuZBjYeD1kSEw3gS5APi4zgZGzokYKhyzCmS7YHauBSmtJaYsS9akMcYQWynywWiWtNoL6cqkdL3FsidfH",
  "key22": "yoX52nh3NtYXzhSzwo4jq8JuCFdpQo5ToiiXn7nKhWWBepW6r5Y7eJ9hZ3hJfv7ECfTYDFZaaGwcJXWs25nsGAi",
  "key23": "4EP1ncAiHUAyqZZgnTyuhwMcGcVXMnXNUbB4hMFna7vFbzT5K7A2cRXVZZ5VhM183ZhKbcepnoC1z5H1kcFUscf",
  "key24": "2XhjZytRExs4GgbU6f1E8TbjTRJEStriqgGDWGgyEehPgtvawCNePsZLCrn7DG5ticVnVbKFYhwQCmcPPjcoGN9u",
  "key25": "2s8DsN52xdgw8Zd52Q54XvFqTywb2XzSmVsDJqGvoqsA4aNxZfJ6xTHGwEUvYDGoPT3aaNvt9Z8ScBdYvMcABD8w",
  "key26": "43fpDVbRGEV21F9y2HgMzLaD1K1AncTxRhiD3MYX5Z6KGsXDjJPsbywrJmv6Etb9a5ZFzC5rgcS83d45SU6zGKG4",
  "key27": "27zTK6divpugDq4mC466JySQzkiD8NRtiuoDSj5nYpdeXcaa5BC2KY4JdQ4bC9bchaRRxR43pwnkkAvgNfk6nMbB",
  "key28": "5PBGkjwvqLkYs8CFqky2rFmxWvczevuBZmReBtdvFJpEjS85UYU1MiEFVfqDCGErDwr2TRgf7oERG7N44B2MRVih",
  "key29": "2PLhTtYjX7pVEHKJWY9MXjtWHPnXjUXVyUVZBtUpEHmL9sY9dqLy3eXJYdwVeiyVc8TN7ScaM9jNUZZGUrr6BS1Z",
  "key30": "2GpxwA3WZ5n7qMhBwhypaP1bFogE6jZiij528LMMXRcMowiJfptZkTR8LEg53WEFM9NaGApfAVdG6GHcbRwK28Ca",
  "key31": "55feot9pMSuAeAgzSmSNKGzw8YH184VSnkYhBLvgRLRAsyyjE2gfQXeyWU7VpdQFRki1vbNfjcmAyFepLTWvjG2E",
  "key32": "2sJuwfh9hZNwF3MFK3oNs17xprc51PyuyXVi2DMZxEqRZjXMcNcHLt8ktoakadyezRpEqJuiWvN1rakudGxxb8Cm",
  "key33": "D7ZhyhNJHyp2h1W6skNY9DX82mKLyLimaDrXC9Z2RFeV4WXJ4a5Edn8QKciUesqnfSyzgdfq9H3kftzBmzBztoz",
  "key34": "5ccbQTw4MVjvXBAfog9UHz6dtPAxBWkSWETfc3QdbJuZXJF3jdesi8uU3ZrutCPdDyvLfj8fh62u5Q35oCFAHjLD",
  "key35": "2od46FezbieUc49wNR85vbqSNdez36Bx2X2n5b2MzwAyVwcp6VGW4gwuVBQWAu8TDYJQiFAwkzqFLnVvHwTNqxGx",
  "key36": "5p4y2GS8x2aL58pofrdeCdWuSgiyUedXDW67LrLoQr58E6SAVbvRQYzw9atQYd6VXYA2eB5d53UDxTrozJTFbV1K"
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
