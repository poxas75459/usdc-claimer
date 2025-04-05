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
    "4Svk28YRa37XsWvMCinaT8LS8YHEQ2HtDFXgBJndrYQWprcTf3GQkMBjAdmLfUvTrVuVdjEgc5cgnfriPPEFE1Tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AgwaJwHn89LqVv7kfAXKV7o6mzz9AZwPdb1a4b2PvyBxVMbWM8GRJyyQNtmmcnBAkAPuuS7KqfM7EE7ebtgopur",
  "key1": "2i4FniwGBY5Jz6djSnGZjzwLHUKo4idUCCNfTdmZiTox6P7vBXYzptfTGu3nfYzooR9wgAxb9pWDYgBTGSh2SJF4",
  "key2": "4YirGShw2dJHDM24jYqrQ5gMxypmm4Yu5F3P9xFzsHch2556iz6gCTyK9r9QtkardqFxZMdWLxZtFeYkCas3QBFp",
  "key3": "47Nn74tjFGGZcb3s2DWdfUfwDVSzXQhiFHnWqpPowDs8KbPM3R9LGJC3MhvYxA4jmk8D7PwnDH2TjomaWTc3Rqdu",
  "key4": "9ttoScyUGXqR6BWhTWnbEJ7C8U95Eh63ZVUanSdFmPzUxyZj2DLtoBwRY2yjFzWBa4ntYMxyxWwRvaDz5S8QLD1",
  "key5": "3fjxVJiK2G2BaQjhFJgYzp4eJWLw6pE8Maqi5nEyv3hdnDor5wLTC5ft5mp9avuF8pZfedZmrUYuC2SUCeg4aTBt",
  "key6": "1HLxLmb2h33er3RMpxyYjRSHD4vQahpvEUwBtdEew3wC2SCTf3g1ZLSnnMCoUv8EvA9mqRpNz3AhVosRgwZKEL",
  "key7": "mxNNTWva2hAxVF7FcaUibBuTZ1kyt69UQ8on8hXdLPSt1XkrhHGJFruNoHD7vqwkqJ836AEwp1hYc7SyqPMVxp3",
  "key8": "4JWCunDET6L1ndEUZdwiZX7NKATUG2B6XpcL8mhcqK3ciwuFY7V7oSB8JKcPc7fm34jm3vr2T3LkaTUYpKM1N6y3",
  "key9": "eZ9mwDVfw72z1UNdpjZfvJ12CJg4bdgSwXrVMJAYZjPTSisfC3b2PJ5uvNb4An6BA5XTcEihewRoZ16Y7X5BHe1",
  "key10": "2qYteJBPSkdnWS47P14zbeedq8hGnRP6eiywrEAG65reDVXT78Eokpp65Ghb1PqdLMtpFxQghjqYAxW51KADponj",
  "key11": "3wBNjiKxBmF4WERn9eTdnh3HMfBGYLWQtVKsaDCb1NKQUFjWY9R3xeZEMjzbxZgXhAH7Uo4f2ww1LGGP5zyVtRBF",
  "key12": "eZM98s9NaXbz4gbUk3oUEekkzHEa2dp1ATbzPT9LrwR3QSWkjZMDqPe92hkEgpN2wjnFFrfbVW4b1fe1TaH146R",
  "key13": "589ZetUMZgPCy7PVtbAWb4Y1gxc3zj9ZrBhMP7kDwJQmscHLjo6fWgdsDf2ysCi4KERn1TJ1tybDpVuAeMPVhMD9",
  "key14": "4jPu3cjMB2NMXRqmdtTGBB9JCTqVumxU9QwEViw2tQJnhBadY9WpvLtNhb1Y4eKngGQvDRj8HkFdSoDZNm7cwXTn",
  "key15": "pZcbDd39nuuc9Hwpv15McYxgK9uTtKt6z39UEitQhaPACfRMNrV5XHcitjp1GXBGeLVN792gjs9j4PiRKeFSnhx",
  "key16": "2TrcL36VTJZr4rFiGYAy4F7H9rbgAGrBTFGwsn1ShB9YUAX3xS6sPgpae7DiTXDKvJSy9fHUU8H1FiAZ7eDWmfyV",
  "key17": "3UZKkcjvy6aLYsfvriiRdBS6ADsceAmb4faVUE9LP1spETbne6V2qfbwfgwd9rnYhb5MUotDmZCA72rVruYWLhVX",
  "key18": "3oPfpg4e6m9ziCnQyFhzRbmSmsrJXU6yvKZ4Hbi68yfY2fuy1EfDVjU2REBpvUjTopkTWTGQBWnbFx7MSkowEohh",
  "key19": "52WJ1QG7d3CwdV5eqepsPeGBVfEofR2zaz3EFG9uLnD6z35rEUuG98kuuY3CYE52gexYKKcEsosAKsRGHaAEq6PG",
  "key20": "5KuS8Xom7j12Piyd4ttegARFpJzpc448TZaWaq6C7KcweVPgPfeewYRbm4PXRn7SmZdJfcQFsPHSNiXpTVe41ma3",
  "key21": "v8Uw9ePXUYgkkQpfEak7rLFCKTTxqvZGoR4zgUyJP3CM1domLGumJf5DJVtxzgVkKHoay8EqHLsB678bC52aBVS",
  "key22": "4jhCqQpYkEjiRC1mhuXn3RyqqXiniv6Ep2m1X9o7hFiT8wqqfC2a7oZTFxvitBzgt6FVqzGxp49amVxue34tez7j",
  "key23": "2aMf9TP6QBVhkBAr9DeQ4U1sgFqVD8i9XpdWsbUa6BRRQzhrd2UDZfMGTuG2xExbfTgKs7WmbXCKVC16AZR4Z2Uj",
  "key24": "4ExG5wZVhx7aVGdnhRHyC92X99yfDnCrZ5DvqnNxwJNUxwtYkKG1VdNivn1WKsRCjSG9MC7MpLs2eH9xpJ4eRmNh",
  "key25": "4hLx8qrT9DQkRTHSqL4HJhPnhtGJGsjLRHa84yPAcrv71rYpSAigSUbpY8Z4AbBrHN685Xk4BTKcbaQ6DrogRhy3",
  "key26": "3ChbEgobx44JVxMfQpcYAeTcgUQQV18EA8cRLejSUyKdbopT97DkcvCQepCVAico7yk5zcv6a1744wXM1QRGo1na",
  "key27": "5C2Z4qU1FuGqeKncZkfUW7RgcZKuH9YPhJL85W8J9CLQap6jMpVdWoBcKMfkPTATARSBatFLZ3jQMqh2T8YHS7SH",
  "key28": "5MDYkYoh7Spi8YYVTUpbnRPzCKh5PPEzvMprn5J9jDk8XVR5f61jR3KPP6aKSsre4benUoD2KrN5Y86SQiZbf13G",
  "key29": "dP117BnmvawkfSsNT2G1CkJyr5GRu2F5DY1rhDPUkVaVvpt6wwUNZw5NmCPfHNikokWQsm5umAjSDBF19ZReaYT",
  "key30": "4WarMevyAZrAY435RE8ZmnqAxHuaiDzvL8d5cYG3fZpX6rVY5r68o2eSw4eKj3b3fkJx4sXbouBdYrv78mmkfVNK",
  "key31": "2c8jMfyUrAPysHb1QN9jNFv2Tobk8fBRzjbZ6fS6MS4c1CTQPnZzRSX2gNf1GuSxES5gUt1UupwZmLuWfjkLyRFZ",
  "key32": "D6z1Z7a1aT5ud3dbFkSGoUTYFnJ5cHogqXTgMp5bQdB634N4UcNMELQ6j1uFLp9MTUR8FsSRraYg4xNXQTG6wQd",
  "key33": "Fa6fMe6ysHiQ8SJMkYijVZKpKB9kSa7q9FvGY4gu2AU7Xojy8SqgzqEzk4mYmANcYKaSvNyMTmn1PH6gWz5DqLq",
  "key34": "3wUYzJ3HzmocQegRjRkSQHrwwF6ckPp6MXwFbBHHTDLxZ8MqtHQoraq1SCHLbfgvFxSPMPDpviL2nCL73njd4qYc",
  "key35": "4r8DJucvngCZadBUrf9r8vdQKYoQWhN84krMCeXnRKLLZ8Yrdz2xU9Cz9GgJKVDXZp8kWoRTae2RotZbhrwEfqQS",
  "key36": "hQuxGkm35HKTT9sUYKEV3q527HcCHYBueRMHr6awiWrMyxMbKNeMrDmYqE4TJGGRcVvVeDMGVkuSnyQdnVd4Fb2"
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
