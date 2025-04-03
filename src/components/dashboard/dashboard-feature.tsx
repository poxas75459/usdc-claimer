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
    "3DpCkwDzvDaRPr22fMc93ThTvrTu5RhQvS9PrruQs1AmJwApJbqN5X8HQ5KQt1PFg2UfBHHLhUokfEabiTY7kkvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UiJLuZUujKrvR7J7HEjoz1JhNBcoJHvQ1g2yTqGQMVEjCPYXmLb41WTtKztiMgnt69Xub3st2u9YrRdioedFBdy",
  "key1": "4JPx7aztr5fiZ6hmuhTdqjtb1bABCiwZLeToGSkAfZCs9pgUa1bzEHHALWFKh9pcyPuBdKmL2zMBJQSDp5ibWLZP",
  "key2": "5PzzRk8fSKxbWaQEnp3FxGpteVNFsYs2P1q6sKm8okZiCqBf8P78JafWYktgyWJt3RXrfd1GyiTpx4iVpoHDo7sQ",
  "key3": "MvK7HWE3QwTynqGrPrLzXEM9YCuM68udjUq6MGeZaBqsA9ESnDh3U2oimdoGiZpqTBKsvNHPj3oQrht5paqCwtM",
  "key4": "8ci9NhcLcVLV44m9JzEsh8RbzaEpZViahqo7L1JuVtDa7bpf3xQkCuuzTtxZZCdTwtZxLtPDuANgMZ1ANYjCtd6",
  "key5": "44f2pWfmcRAtWWe4Fg2LUumNb5QJALsSWasdb3GK48Qi8exv4hqkH1AJN1JucdpfPqN7H6G7hQjPtWovAMnEXB1a",
  "key6": "34ChuPowFK27GmvYp2obRtTH97BNtKokdjv5i2frxetYkxx7Qg4SGCsVDiK1ZzJqNUiWpELxzTqKGPEyHmvmehqS",
  "key7": "4os8S4djEEQd5YEuTt4jQ22neHmzjRygpCg5ndRcdNF88NHUX6jNhzohq9fNNv9JcpEoLAZSpUM6C4nrKF6TYQdU",
  "key8": "4PfDBnnYhMeyoAQVLkAYpyCCxKHrLQZn7G9od7JyrHtgHwqjmXbe91UXjQjg1hJrSLrHnj2izjx68ghcucerEyx8",
  "key9": "47KJhRtT2aWY1Nykzrad4RprYosWtWRsg38hHNj8m27XjRt3zdULfB88wtiSJR1hrxZzSYd63NSWkrJJyxMwH1Ur",
  "key10": "3JA6d6nJws5LasQLkEFPFeVrKoMTGk3pxnAprUhcY8rKmnKqttBCDvJHeqUvBHWNWGtmarUTAa9i1aAvAdmBJs5X",
  "key11": "65WA4ZzVzojhVWC9uP2ibfGiWpZpLhB3DvJtLdtGoCY342idnvdMjPvANx9B2j7MDNNis1kB6PNpR5ijbgzPtWeQ",
  "key12": "UhGPQxTcbyoHa9ffFm3BgcDZTs5Z4g9PcEizXSLUz676mKSmpcLAfgMssb3N6PsVhMZjWtQZA6i9uynnQbEyYVe",
  "key13": "2DrmPccdhVDrz3nSUmhVG9uAspeKi593jHuc55dSsCHY4BHnsVkspL6Py8DQ75SChGmqQAhHJJqngjQxr34qRskW",
  "key14": "3oBVFKQsQh6nry7YLFVoLTntDksG2cMafMSQ9uQpbQq2W7EXhuicpBoLbfPFB2oWWbf4oQ5yv4je1andY537gHPK",
  "key15": "5yjK58z8dMiut1uXJaj6wnd4gmm6E249eLGssXjZLvQgt9jxGzCm8a49gnPuvr2q3NueBnU6XgKG2MYYKZqfzX2N",
  "key16": "282VDNW2e8gpv9PLVYUggtGFNbu292ibYx2oYxd5LNkqsnydhuYqbPw9zmtp5jLjXAzFhhH35Rqo6y942RiHptoi",
  "key17": "63A8ksAdnzizscuqZbnMmyDd1oa2CA9jeHS2vAen1gzR7ft6c8v8YRxtECxDWBtRGEMTvKNTvPTXtWSHHLK7WR3q",
  "key18": "3iXUWjjvtEWn1ThFKkmti34EA1CsrwodSFDaZvno6bt7bk9xJi4iaQCKXqwrQJDAQgyfTbuoSyTfxq64s1icNY9k",
  "key19": "3NGw7kssMZFCFMmbftYXZFVSksrBp8gSPMRPKGqYCqUpRimzMJCaNDyXVi6e2APoMPiVjsgEsHy7yXAqAqhQj5My",
  "key20": "5mJBNAye7aWFKSZw1LQFEyZqZR9WUYh1zp6s7qhwYmdzkCcsXNxHEMPzT4sBZ7Gu1v87yidku3JWhuYd2er21Raw",
  "key21": "pNjmLzjzgo3EQVnbjvdBYKMkwcFaPTzXEpctA72egYiphriCt5yTU7SeRgKQ5ER6p7uGZpvixAvHXHHfiQctZDG",
  "key22": "31CDfieFkuhuCkhSx8r5nqZ3nduTLavAtK2JLB37cvFZtQxZWNCLmuXoNbdBPyu2Bo8weJKobwsYgEQZzTNKmEKW",
  "key23": "5fwvAxSQ7qBTom72YrRRo33RRbYBxuPEdMsa9rgTu1YCqT41SDLugQGET79uRgF3FHBjuz8eeFM3gBEqgHs5PqNd",
  "key24": "3WkdUjbm61vyU5vrrhkajZpdCQd5N3kfDze9P8WSQudChavGcbHAA9EmNqtwtSH63XUXEeG6r13npLz3fu76gvu",
  "key25": "LRxYGcadqSYGKmvbHFGbA39jtWLmkMSnfwzKLSJVq6xqB4YtYykd71aet83tNkY5LM5SF4dXZJtMGrEefdBHriK"
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
