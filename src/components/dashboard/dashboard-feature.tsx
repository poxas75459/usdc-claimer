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
    "5nfTV27HJyvUM5PkBgtA4GxNGdg3wS9423m226QcmaaTCDfQiHagM5kVH9eEuiumeLws9VpxFmqM5eKdwtnRQ88i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31cWKAHoJrFmXKKDgh7YyhW5mQJJ4n7ffDMUmUbJE6mtU8gS1APDErJ8NKuSwdma1U2SeTWtKmVhEfWL19PC2uuP",
  "key1": "Y4SS9YKx8qcZP1i9Y6kGsbEab2NKWDWXkb8Q1FKB1Engy73hWe4bSaQ7zxpCxiBWcNZdgGnE9mGDgyPTiHGL38f",
  "key2": "2VGVKPVGJSGeXhcWnu5Ayk5uTT5jJiHwhrLimhi7TD4JsCxZYXCmW8LqBuSthNcZh1CpwGojq2FGcun4UiR5gkoL",
  "key3": "4pS2vy6gcyJUxvw1n3KDVWfKimH2g93EX8aHbkDar2xm9F3aH4snynLGhFW242gW5e4HFUH2fS6BBpDB2q1g6qHf",
  "key4": "45e9fPGvUZe2W2Ptb2Dy4JoMBVUAEv4RuTGz17J8wi3PbNiUAqc4n5p1vCJaq4d2H8mBJZ5n4XoaGTP4nHP9C6gC",
  "key5": "5cEkMaXs5N7mLj4feMzpaYtaeArmXYNMy64A32fxSTFi2X1j2Qqbxd8R4EkJrCnsBVMUFY2HgVYxntCnCkbKguNQ",
  "key6": "5JgDPGyDfoE2zauYigND7FyQesVQWXCgSUPdjAKFjgPpRWAEwjY4v1XcNcawzFKPWRPufsxbsWEKiJw7RKBAg4Jq",
  "key7": "3jJ3F8HVxvhErVWNVHRCAt6N71uFM4yUziyktR5NtUDWojBp6Anfg9nhhZwBYp8rXhqYButyf6x6dATvatLr5uvV",
  "key8": "dCrgQsM2MVAidzpCZd9mrqn2cnp4bXXrJk5LWNNpXxF9NFbbRxQngt2sAdVjp3F7ZZBXBnQtN2zggrkt5qHBVsf",
  "key9": "2ebLqFFLCMgnRSX2KuqFyzae6pTXjenyzLeMst6SSANAUFZMPgHFJqRDb43QCKd54SZsPcu94meVDk9kW6GAufQp",
  "key10": "5g1qnzNtsbhcuMV5aGkf8axWGBmwQguynE8UhrKgsJ7nt8uCkjuPQpj5uPGyPjpTU2tRVcEthdRvzUmwL5VFJg9y",
  "key11": "2ypjRsDzMFdbwKwNrJokmMCCFWCuuGwoWPY8denqbzr3agqdFzwjgUp8dNLnY9KVFBGkfSZbYq7v5nQtGqAcucPo",
  "key12": "4j1QADmMgDqejkfBKrJCXAGFqqhNdu3vTV4F31mbhR8Xuk9Y4v2ciiYFba7sj6649wsuVxSKE1XKdyBPb6jG4BYj",
  "key13": "SnUPrWNWDz4kz3GZfKsCwf46cZYvF2uES1S9Xa7m1ACm4wZwiuq7iDJGyMHqhqqsTDh6VSeAxeFHKf5DwLkQc6w",
  "key14": "rn9nmC5KVkU8Gyk6pKfm344tR8J3AGnMVbACv521FXUQf2rUYbEVc1kB9msKYnxKkeLZmTEJLFwwKaDhf1rqe1V",
  "key15": "3exZbqX7Jq4VBrAwuMA2LQqTPQgQX86UGYpRHv3saxKg6RLBANGPvHmXcp6nJgNsucvM2ZFvmXfdY2pg2R3oriDC",
  "key16": "oSSZgaHjuKqgGDeXdc7BVzKmEq1oTsSCr67EHNHJE1FSs8brtdUQXzZREtvvkC3PmZUAT28krdtJHGRQKQoRete",
  "key17": "46nz2XFAPaUWosZgknUpNjcNLbHhJqMJTXhXBPJiW8Sh2HhYSLZCaDRrwy13qMKn53ytn9atpgJ1bspJhz5Wcdve",
  "key18": "4enGTzNhznHH9e9KgMu1BKZ1K4U2NvKuwVepVpZvDZ1UozxMrdzmJEQvKUbJFMj7hV1ZjMjGnYr9aRriM1bDaqqX",
  "key19": "2TwnwgRsUDF5aUM6KvSsyDqvZv66x6UkdztyLjh9iHSiUzp4ankTZ9dG6qLis7rHjkP3r1Ewuu5VQNgEP4oAybeo",
  "key20": "4bCUkAJNYmiME2ds8Low92YRMFLvC2E9BHKNfKRVCh1PD8jmsUcGugDdwftZP8RXxB5xZAsXXfRbh96XzAZdNmmK",
  "key21": "5Au5vgStiYzHaWHHDWjL77esvh1TZJjAq8R8pyTwmvDpgGfpfdvXWyv8bkwAcyhqBmDbe11pFcNCH1nynKnMTbov",
  "key22": "5kHJrSLXARAKm9eYB9Tj9vpShEBPfEdo1WYggZgw5gRiqezyLQTRqVqMeYwcvh5SEdSywxJeJA36gYRje3wppHNA",
  "key23": "5eXNEvQX45dDSaWA69uHqkediwTSpsF1wqqHb2pwjYy2zvtXeB3GGxuTnxppf8QWgidVCUAGVQAfpsycD9Fxy83W",
  "key24": "3vVeQ3e15MN1yxtfnNhHQS8qd7L8iNJcpcHZFNcRj6uRvnEYtfVKXXFpfJXoJnxpzBwu2vViKaEMTfmvtse5J3xr",
  "key25": "4PyC2CtZdV96C3mELyks5AGjAkoC5VC4VXvAipvE8oHo2v6ik5tuRVeh1EY85F4EMazVhSXd2rhYVwXqNV3Qiyhv"
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
