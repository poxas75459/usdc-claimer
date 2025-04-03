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
    "2cDbxUH5mVbeakqkXDVeGCUP9sTBsYwMadHgL2zUioUHpmiHZZihK3y68w6TTdTTbDKnvDjDVix6xabtVhBzBdDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cp9iAUSy8gSchjcvYnHmr4572E9gfedn2AAbnzxLx1HKzE7pusdAPDk9QdLnq8pKuwfgna9Mn3HGPGiA3VJAmjB",
  "key1": "2TuGKWqUXGhn9ZwjD7MdNk3rMTuPBDx2tfbgKYK7Df5GpmR7XRk1q1dQHt95fHEcCAQt5hUmdVCj9ijY7XJDjdw6",
  "key2": "4rjikkH2m6HJgyNceDVctkC1EzmngsV5iWqxcfjtuW98FEgfQMMPc3J73ZWJZYLXpk8Jft7EDMS6YKnT55C64weT",
  "key3": "nMQBZ19BiXCyonPbMueHWXVscCCt3RBfYPv5rsaX2zfAAgDr1i7v6FM7X65ibTBntLAfoXhiBdKrFgkeS9YsCag",
  "key4": "4TneXko92PWLohgCY8RWGAcwmGJvAzHFw27hYwK5YRn3YqBr2uCAhk7ZzSxWsjxNArdZZSM3Q3Yfwt7tGR9vLPKH",
  "key5": "2nbd8DdNB54RKJDg2asrNU6jpk8YFNhcwoQdsgCaFiESA2fmchcf7e2MnGA6NN77vqZpo2K2BCxXuwL8p2Gdf7ha",
  "key6": "31dxgkcow4nYiahaza5QgbTPRpEkvTapE2raJ72Vc718SPA6bpo2LMcU4LfbgEPvB9XzQHMZypZXMHWMwbD2JEap",
  "key7": "xBTNze9WT6T11Y133pFqJcqskBL8EDBSV25qexWB8wRy3GSNwTQZ71cgaFnG6X2DHCi5bdy89CFdTaWefBHppkt",
  "key8": "GMTNV1qePk1ygf6afihFQTa6LiToETTCbreRKQMsNMheaJbefKF1ZaSwQcKTN9iCC6RCT2XxZdC9mcLt8TeijJk",
  "key9": "61z68GwUjL3JNms1TNhw5FpUcedLbXNWTczv5HhgxFKNg2KQTT9R5ntLHo8cvnJqmttTvuMcRtdbyqQdbaniwQeX",
  "key10": "35HVsuEYd326p2DpRfNRFuVcfEypk38WD2eHvd4HSokNJToa8r2h3QCXgg9ZX4TRnLPUzvT7bJKwvxefTuFNK3AQ",
  "key11": "26atXkwSTv3yMNm6C9GupkaVskGbXsVeWVK6ch2iTpCymM46s1Do9iUjwfTziyCfg8ZLQueT3xn8sWmcH96bWD8N",
  "key12": "4sxP9WhKxpNCirbxzffChwPgJ6iLw4Kq68JrynFU9U17nQtfeneUvuDnnFBbKJMDSagJ2kTrA7yXAUPDXQ3wmwoj",
  "key13": "4G7C1hkCGb4TUfh9gGeqkCgmZyWm4aY431aszS7F48Fn3HvniEqwk5gRrGAiSca3ynaUiuYUR4KjGGDZbzfTtuKX",
  "key14": "5F7KqBZjFXGTbJcSf81QAoN6zMHnKQd7CD4AJSSkqgCG12eVPeqwYBWkzvCfbz7UjwBdgAUgS52i1yqSLmzrpWpe",
  "key15": "cBJ9cSbyGyGdqCcvYSjSTVHnwv8ioxH2PadGWBeHmbjFd2E13B7n3wZzYviu1WfJKNYjj7yfhxhG1hBCdibXpR2",
  "key16": "6HaAqsyGDgTw5kXouxE45tizQsESNovQCQzfgUNHc7UZDt8KAVUL7NP7piz5khqNinMAfkqnfwUeqUs1MznonXB",
  "key17": "C645rpRKGG3SbHhExcUFrdGFHNGoEUGsiNZ7WbwnsTwYnmSAvF4mmCfrrUkrFGP3uZtcwpAPSAHpD8of5NC7Wr6",
  "key18": "2CK9rvXZJmrkEf6PEdPacJu2dkJJdFvN13BKvanTNWug2rKdutWrv4n5F4pvt5VSf3HKgpKVz144aHmiyuLQMFrL",
  "key19": "8id9XydpSxgPukgCmASihTsTP46yMmKHJEFfW7UsaVF6g5ShfnuBjJbLUQ83gBGoAxQutWJfoXv1oupctrePGha",
  "key20": "3JjDRBiCzkh148FbwgTsSzXyEffihHuP1YRUcxbkvChrC3iSRTZe7n1mCnYT3wDgsAAHkgVFpb47fUNDiK9tt4Zt",
  "key21": "4RCS4mktM63mNTi716xudxt98LjTr65WZniB7qEdoZ1JdHVVJa8hpWz4sdRr4UuDYBjoYvbdg842P8v4zJFwXCBa",
  "key22": "3DTEr5dX1YAbyTwAcjRdzN4awZBZhx2k4dQUtSZp4dBLoShh7vW5Tj5Vu7QgnDGZ4V8mSJNfFy8NXWMN3RCTNtnr",
  "key23": "5LqFV5kR1uECkBncmzkQ9CcxvtidphZETfRvkRurvEiJsV2kJUQVXdPunPvxoU44GBS8LH7nqooagWr3o5cLkwDe",
  "key24": "3RabixfiuZZTXWKTSg84PGfFcVvjU4qY2MHiugv4mYnS7vR4TCGxQLnHGue15qyq4Kxw91mmAS7dd4112D9YsUHQ",
  "key25": "3PDDC9UMMzMajfD3ivUXVKTp7983YgZxwPszykNmUZkeSqmmuB2SynBUzzWjz9QknNtJ8nehRFjWHgfbWenhx1bg",
  "key26": "2CR1mvxpg5izgZkSvMAifmjBqdgNz9GR1bTu5XYpoymta1raqS4vaFr3LtQuxnTK6XFFuL9MvhVSewBHmLjPgsd3",
  "key27": "2vTSkHjASqfaxaBBFsuDGCPYEaNzc2byXF39DXD85JkiYiWEtSC3iRecNuQ8Y4VVFTCP54T5M47ReeJpR4W5KyAs",
  "key28": "5hG9bS1n46crZaCYTsNDNq8sT8NuhyCsAUtCPF6G1ayEvJzAkvNDkye1R3d5WNgSHYm6JaCVY7DDruthhpmBzdRT",
  "key29": "4Y6g1SgF6FHzUycXe1zwuC8miMBxBvtbVM1kCgXdegnkuxmUeAHStd96sMWZj4KEw8geFRCqv8gGdoEmKZvMcgKV",
  "key30": "ogQSZuLKM6iYE6TjkngfPxk1fTLeRiLytXcPf6Lf19mgFEZvUxr1ZgpPkVVZKucoArS8P5UqRpVYXbtzg8Tz8Ad",
  "key31": "2kgXZHKsdNmKivP2J1hJfETeivYbwRfHqpJvnAPwwW4MygJaNMcXrQMA271UuUMTayPGq9Rx51tMpez3co7JoDcF"
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
