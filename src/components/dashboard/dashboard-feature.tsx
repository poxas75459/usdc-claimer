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
    "2Fb1WTCKYNpSEc6MtX9uzzwFCT2eUZqsn4WGM1sZk1nDoANRGcc1XZPdUuzenmTKJmEdKxZmyE8GhmDfQBtBjAca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C3sTHoxtFcN266L4js5DDwntUjvDTTK5eFkRMZdoWfuPaD3qEfRjJ1192JguUYKbWJGWQ2QpysuxrQCXy5H8rtz",
  "key1": "5mNutB1z9pw4VA38LYseY7ss8V9uKCvxebauVLZXncvLjh1Tiy6QWSAPmeoXNEJEv78NaC1fe8MfyxNVzznhy4dy",
  "key2": "53tKEhbbLkFUjuba6HvkrnEHJbFnqTCaLgRnniMdAYy5xGAvk1CpeNLmLet4XP3pgz3uAVwF3bMEH4xUs6Fx4Ji4",
  "key3": "389jtkpky1cNc9HHTUhob2WrZQ5ZeptTfkGw3Hg1yXtWvHC879b7NCyrY8p1E3MAYwR4j7oLGmVa1Xc8MDPV3cSs",
  "key4": "EjeUKE92z3ib4CC1VY3hrEhRjKk14fyPii8BUzvzcWj6AWL3KzcdcbQxm1pRnYLF8bnUupHmggrZQM47PAwFLco",
  "key5": "2wtEv3pyyDnWUTv1W9BEkKsMnThqJAUVLJfKF3CtGVFFSNRrHPtv458hLLSMJiW7oFjiGC88VhA2pU3zf2L5hK16",
  "key6": "5vFkEgG6Eav6xo4Ewd6UHrapVDd2yHCeSgqwK9sXTTYiHj93zJnTCko8LAywNr4wrBsUcNbvRLSwTk7sqmT5oNYC",
  "key7": "5eU7eMapjPN7nrHNh8ApCzrKodsz9MZ1DBFd7eVyTB6TpA7c5JJ3UngnAzap27t9oJjVi61WXcoBQ2JBzCRKByF1",
  "key8": "2GgPoEG8pVGdH3faCCD5riXShynMYQpexSqYKyaQFB9eKqV8VvgDRcyG2KyYMEUZKycZQgEqhcyD3L8f6HKb7hgt",
  "key9": "5ehmUDFSFLiTRXXHFW183inT82gSruKn3vFFSmLhRXe5xBqzh3sHVByFAoiV4VBoCJCXfQGUrEhNbAhDZDiReBzk",
  "key10": "6x46tbuYh4JQFLJiXMtja9hcsMQwz4TptdfvqZtHLFB4r3vxtx6VvFiFoG9iLPudL2eNxp67v6vQvMbuJ5D64FB",
  "key11": "4mcauJrSJN2WzHfJXTSpXGoDemTcJfs3ddtL1XDH2YLp8n6F31mbHmR2wW1NsEnZykimPEGM5aC2KbE5B5di3cTT",
  "key12": "wheEdi2sG4uUYexGt3DmevnYUnaKtaLtFp12weH77HhHu2BvoXyZPPvBKLpJvE9BoPkzZsiGoA6SoF6LBnwENNC",
  "key13": "5vFccQLP7FwkgH2Jogg3gXY4TgdD8qCU8f9mmdtEPoSe25bjRiDJJwrXX9YnfGSx94B7rzogRkJBCi9CrqbFpHz9",
  "key14": "4CJyKX1pHPQ81oYms5nTZTDiVF5Sz3sVDCGJdmWtp3zpSZT5bNGmsFYvLFoxUXqRHveQme3TPZi8TRFdVESxiPtT",
  "key15": "zkUsYPTY5v1gZDrMwrcn6JrCtEminqeK95NrZ7dL5RxjrNkTAGuWEX2Qw3hh9AnH8hGiaAZYwkVaCbBKZkPykrg",
  "key16": "2U4McYFGVGozE14UXQbCBewxSVSiyyXLcMaWHu2ScDhsa6WKWwC8LDkadN8NnyCXVxXTMx68e6Z4TSPw6AeVLH1U",
  "key17": "x2DVpdUcLAMbbfHtrXTBa9fckgtKw8rJU4kZwmCHjTabEYca1tx9Yp8HbGSZUtQsF1YU31Gx6oqHb6aHvgx3o3J",
  "key18": "3FvQNmWzorFUnc9QxFc3CKhDYA2YHQ7KBC9uNftKWXZGUWZP6vWnniHhFsyoBXW7kTE5ooxeM1ATbVts9U1mpSnv",
  "key19": "52pwSqSCZRktUW3MdvvQAjhJWzFaVnnqn6bDLMdXRMforik4kiLav4eMPC4J4qLEED9mnVb4mTqSCBeaQeCCAru2",
  "key20": "4Su1V23bHn2Yq3FJUm9FFMShj6VvmxieMycE4g7E5RGjnPshG5KmFXoJwPMcBzauNWmiNhpazeXS2vb42ZQfN1DE",
  "key21": "3hDTPsW7keWJEXsHBVkP93RsK88DKwXVMDU7p1XJG3rUMg7TFyiEEKUoxPkrC2VNzPUFruZpeWQz68mV6gn79ARc",
  "key22": "2TM1vWDAaEXdngJhMWhYSSJZPfW4z4Ay8u74p1SBiXWuqY6XcTARUaL7TFyCzZ5RYRGjrQKz9bsK5CwzAeT36XAe",
  "key23": "2frjVQu5yXyNGeUHdvRa1Du8YNcT8adh2fG92gRr2KyRozQmNnkEPeTnT1Rr9obNeBhZunbEqENHSXyJUE4hmnxG",
  "key24": "65E6QacTbUrgowd9DsZm59rUtxx2wEg3t71yD6BuqcqMoho1nE4rpMtd8GdH3143LHg9hxYw9zTf9v7mBRj4itey",
  "key25": "24cZR9hoWkMi7zEQq3LtMkunbbcdM7bEz5FSa8bC7U7tNpT9EAaG17ERfEZ24KWi1ZTSy7G5dZYbuEM4iqok4RNL",
  "key26": "2pLwYzWcroMAYFcsxjTG2QQUSUc3RPofiscrRjzVwMZFXPuh1YvD97QNUede6Ec7p4bsv8C6f2qNhDLcMjer24q9",
  "key27": "5mLic98xQQoJvGe8uJSTkJzMGtX5DUN3FKjGa4oP77cwnprhzMLXBwomdPQkCN499LgNVaBSLHzpvgbYgicVZJi4",
  "key28": "2UuAqB7TdaBsx9aFSUDUer8T68ZEURixQCGbLsf38keLmU4dqqexpnHAvwCzbSabTUmVF5tXMxNwPVX9dkTJ389A",
  "key29": "4gNyjP7FfL3PfDUsqceWQXfXsGRkUzhtt3jrn46TTZRkbG6k6TniRN2bXd1cGGfvPAtSA3m874xHpgA8Jygcuzae",
  "key30": "5CRPAZh5VtK61WkgsGBBCb4YahD4R7EEiZ3bg7Sf8WbTwLt8MkpTxdb5yWvCeY2cUpnDRaGppHtTQswTGUX3xPRC",
  "key31": "2AZNHvn94LaNkDaAvKgg4CYdLMXJ5QZCGv6HE7XfoK29xF2Yg4fw7qMZ11eCzUZb4RacP5nmrDHdVyAW2kzdcPU3",
  "key32": "5UQQwiTjtUAk2nndJU6SUWjZkTqFEs6ndcPGrmtgK8uHdxLyB7XY7VvjFeDdXi1QJm8zHayNTqmqKfMW6HWH85EM",
  "key33": "5gSA51dJn8ZeBc4rB1A5G6rtTgGpFsVkpoFeaoem5LrQGBtZxVg5wntrNDqPPakbDPRghm4RAmeLQ2h9hhYSmYj8",
  "key34": "3FrsPwFZkwk5j7ssBMZ2Rnv9xSciGbxwjNSUNms77psatFQYMju8KgoQN3M3hNN7ZDzJaRG3vSJxhREPZej4pffW",
  "key35": "aQHRMBFGfaM4d5S8teLuRxrPzWai21TuNvU29Zg6qZKtgBxgwTMe8n7zSng3q5Mpj9igCUjQtoaJeFd88AKuhdE",
  "key36": "2yfKLadPLvK1VqvyumauCZ6hioRPVZ6TALTa6odzcsHPzmZ6S5V5HajZYRbE74YTbrscMg2rsFJF1hn5youCkdVH",
  "key37": "5XFgVKcLWQi1NJnVo5o3PxRtnbjRSk35rmQawYpAYmPyVHc3DdLZpe8WDcVXcik5R8KGooxj7aKZ4uWxX9ZB8d4d",
  "key38": "2JDvZci7mfdfqebtJ9BqdGjFKUNaxr8MSfWi6mmJ9XRUv81hefXNsWoBCJHo2LxPDLTAYcMfHWF9guPFq4Dzstdx"
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
