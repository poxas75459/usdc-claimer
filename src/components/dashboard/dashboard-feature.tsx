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
    "21hRxvX4CegUh6BCPmb9sSRmaTxKnURyzpk636YNmLc26VCCrzZygrzhqCPm3RT6p7nkkqwxKEm2wLddEcYgkXum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bKnYFb9W6JXPbBNS9y9QTxrhm1jRa8gYM3NeikWpHzL4VFnKHL8Bpsfe3m717di2qsYSvUZaooLBwQJfbA1k1uU",
  "key1": "DWgAVuWw8zy83RSnr5xG6vdQTYXBph9BCixbRFM6zwJ55PBzYAHQQ3YWqjrTop4KgPid4upYGFUgD94n5Fn1nd6",
  "key2": "44NmoeXUSYQEYRQsz89q6K9YEfTH3tPK78snw433uL3fTWrDD3UJ2W24mvqFvMH8bdiHZ4fkjB3TfnCgHWfmCUfo",
  "key3": "3H3mjws7mwYA1ni4dWdHtnT6UoWeeebiYRPPzaSdyUWoxFdqB5paPDgJFpAYJc3vvDJVod2D92Nf1Kn13GYe4utn",
  "key4": "29xmS8jdH26gKoKdxbGcoA8p4FUkmSRuBCi7F7j5hzttVdrHaAKumXL2UJbVJkJyK4kXUb8TxYuLhpWDv1A1vEA5",
  "key5": "4XpEM1VRsLwL1ZZ5CgWNP7MG1GNwh9odw6JLaFrPric9fLyEoDvnN4EKfPQVZ2y5aHbuCxBvidHZ2AcZKuZpiKJx",
  "key6": "4oPLESQgmYTWeJDUEEBT3V3wSTcJ5wAMG6j64aAEv6dJpvHinoRh4LnTAuAaVTmvDN4zyrhyAkGMAz6nydetMDtL",
  "key7": "5zy44zUft6ytXYkNX6gPRq6j4nNjyySvPMs7YCYAcYCcPjGGrhhNc9uAGAXyjZDZE3MaRW3APJULhv6XjQi6Cx1G",
  "key8": "4E4EdGEzLJsoNoPn2io56mBb6DNEg6RzL8NhvEjip4JXcBEvk7esV13fmsmbyoZnZkKo6fuVDnHvZsN8oKopbFYd",
  "key9": "4kcxzbrTTvWhB1n38HfYMgQB7Hjx39JWqEfo6sQSqvEVDzcRzkDPpW2Nxb6x8cY1BGGSWmRQPfBGQaoB7DpYRoaL",
  "key10": "5LpZcZmjTgmNpM4CEbK96xtqobhryC4WEK36ZKmnZtT1DRqRYtpo9pGYHADyXYf2We6aH1TKjsBhmMssQEiBFZ6x",
  "key11": "4Ui5noi26RLtcS5Fx2iqgruUBcY4h1QofE1EYof7VQKPLY4K7e9JegpeHVzigdhCSqWZfkgwemFsK3YbW6kXzdkS",
  "key12": "5YiVvJ43WnJZqwRrvwTHXhNmd6kmgAsk7y7wnyXET92EDhDTtqr6uFujeLYF8ipgRrXqgMMB68assXvCWGDtwwW",
  "key13": "z8ThaSEc12h41pk9RLjn9Sts5c2g5U4zHa8wGph6j3XibmRjaGeKUnATeLXegMCT42ANrhihFWp1MorEeZ3R62w",
  "key14": "2vrXheyLLvbtqk13GzDr1sVvGoPwtVchdseqN6ePCV3RPkNrk8tCRVwu9giwvn4jTMZaiFYwNwZcKE89Q8WESWEr",
  "key15": "4zbXJ5MaJHgwb7RPZbCYeSfQx7Jrfk8uvutnjj5DAcfvARpzek2237PQeTWtZX7pcWhBWMvBjrMGWdhspWnWfzoX",
  "key16": "5iaBCF1uHnQW5fHZpbYBR9eTewovz1qEiWnZM3JPJfLHA3RUBTfWqCkwq19LhAVZSXAnbjci2i8FMR64rhNnmdmn",
  "key17": "4kPmqGcrGKJjhQ6D8tBUWGGE55CmPSx71kSRaWyjPukkVqnDGF85HTMwEd5jMHXHNSJmjztsxiu2mPc5CnjfSDzy",
  "key18": "2SowvtdS7oDh6E2hNVBK3qTgXwQPB77JsQU9aKqZZpeY5AroexH9CNSkpNzM9KBb6fwMc85uwooFAH8rR1dmZae7",
  "key19": "9BqmMw6yXzcA9VxbngLt4wM9oxF4zmdBTjWUn8RUZoFUKSBEGiQWGyThRypJWGkeCyYLaGB8HdQHzf9imDoc2iw",
  "key20": "2GpXoxnBz891oi8supo8u4jBakr28HfKLQWbnvT7PFo9ribRVoLQ2C4DcRPW34XDxrYLD228g81HRRbwfr9kjSzU",
  "key21": "3tvrCqKP9Me1Aeaw5h4DsyMUX6yuoQiWp2VJnBtBvx2CSZumBFSsyKn2ULeFUg61gtgZKb2nC2NyRJedKy5dzwA",
  "key22": "5JwR7mjSJdrahYWQywrmG4xVJrVbgYkjAqmQEdHPJgQmn9ZUK8CrXeL26Gd5RbWxKp1CzqVFCDKZ1oCybzP7Ag8i",
  "key23": "3kbr39v2NFbnithY3HDrX28gAbmuLX9QoCuVifW1w3Qxwq3gUxSyYq4rTW7tEGtoTiCDT1bRoACf1QYUHZHcXHw2",
  "key24": "48Sw5Rp4pbVUJoDinMamKvzgFMqK3jUcChKFFGqDG9KGdTxLWbF9YoqbSNDpKrTkwYpYtEs6Q2BsBJuApUvD96w7",
  "key25": "qyPzPysgfWQu3wRWPpGmxirx3Lid58BDRvRnw8cR2mLyrzTqzf7q8yHPfSAG2DYCvW3NSQMF3R8yPTpeBPtNhJT",
  "key26": "5Wxqgd35jNNMYWjMAek7w7EGqjNE6Z9nJhJu1w3Vgd1a3rMoM8DPfoMb3DYGRDet2vDL4zbCcocVuMCPTvXbpx8H",
  "key27": "63LHC8tC4rEEMvecPzogYcnDjdMe1EPQ5B3XvfjPB14vaT47FTD5Mt5FdomUebHHwF85nS1Vs9aWKpmQXt7PHqBb"
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
