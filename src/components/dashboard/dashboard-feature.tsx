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
    "63ozvd1MPEdfZUhDNw1o5gMWRc216kQRj7Aqbm6VuPJvowRq2HACW74EVMjuhQ5zEENQXVfZuRkxKiLjZVCG4LK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Bf6L33FgsopoAtrRPAwtaszBEYbpBKSpA5JBBXur2WbQ3Zmo4fsbe4oa1A2V1guK8bTXEP459C2m9qSX8922ic",
  "key1": "3ZSuu4Pj7JAthkxdRcdUMWNxW2ivbp4AusxuE18tU71AoY4JnoGP9JUS3p7EzRW3MN2HiT4j26f8dEHeNUQgrTkM",
  "key2": "4KyN6KNWoP3gavdihXgFfY4pWGJExN3CALVXSBf7FdE4D1BkxfzYb6VKsiM1NFzE6XdiFm9B3RN4jtFyfozDfEeU",
  "key3": "4agAHfAmyPFaiP4HKfwaPCGqJQem23yvvtpMi225dm8ojvwkhPuWMu57msbW4zYALUV2tCQkGHq6iLt8cDEfEsij",
  "key4": "571pnmswmzogbUmUmp6vn18MN4JBP6gML7taNS99g5TCukEkbV8HuJiQ4kmTopDve7YusYUaKRpsNEXdg26Su1kS",
  "key5": "4bNoQG5L8aS97iJvkWn8QfQzzf1irkuooB8CR9jVVnuaqGmQgPUzBu7wp2QWPJH5ucrkdFgv2wCRUV24BmWKsWD5",
  "key6": "5GurSY2HSpURmhRh7jxkS2rKbJLNRAWS8gZUmSuhwxFhgQhpT5JaRJqq4UiomBk6TT23n1R92U4RaEFLbcwYwZPZ",
  "key7": "mopZ3jNtryh2nX2a1inP1HqXD96eox67NYxFAXy6RbJWHRJ52XtJGmr1aZXULEMuEUGpdu5YMgCaDPJVLCLCyMP",
  "key8": "jpGFEpHu8v8rZMfG7MzUgwdjWbrXGb68F1rtEcYWwW43yJzxYK1QzQbPo95AjryEiyanomKVgVgvba3MkVtw7DS",
  "key9": "tp4EiQfQmTYK3eeqLLZwum43fsm5uhkyperVWM7bffFR9ed79ZFNLxBW3aj2NETwnB8Wwm4fCVDushg9okLFyGP",
  "key10": "56oySFGcL5ucYdpKRgXwt8v7Ux6CwzeN3WQ1cSiAWomZHBVFkzyryoagJhX5377WEmgLvUYcYBknnwrgMk1Ydvbv",
  "key11": "bFhFArzKwS7PriaSUd3uzFPtqLSx4KnreaeVgCVzi9ziws6gj1jZ4qfoFHmu3ApjWWHPdMbZitA7yvWwZwHC1zf",
  "key12": "51yPUbqAVVu9nwZpK7hUbDM2Kq4XUdcpgpRMqfGqkRivY8XsXwaUa4PFTUoDpzRW7ZF9wP6ZdgE2YP3QefzzK53c",
  "key13": "31Q3KdUnsK5UFeWLtNDzgLw5v71ZbCnWo6qs2avBvAtzU9nkBxr9S8K7QhfBt4vHBbJch8gPkYyeNew3G3R1bPuS",
  "key14": "36tBVh1o61oYAgmSGpzCSxN8TBR91euDgvTjJkGZ7Pk4bHYrgQKsoJQZ1wpaC81E6vwRwkFKXKUxYft987KTbiwD",
  "key15": "4sY2jrRADvFos6NG4HzqshRW2Bf7TwYjn94EKsY8s1ZoKqWBGZaNqVjmgsXCUMSWgTREeo21FdGNJ2znzT8T5yJh",
  "key16": "3tdzFwvDWsnqSYLRnsYMLCHy4bviqygvav8kVrvkjjhtYmJdtqbuCsTKcvmhqFHsjX5GfnAqphjjd8TgQkt5ZW6u",
  "key17": "4jKFGMXjBDnFaJFvFuczPb7ARh4D7hcAmqbrYuvURPdshuaTvdxxH4KwtDhvnoh5seVNv7dAwg8woexFwRC3DT4T",
  "key18": "HPvztGoNBgr78DH48LWHp8fLmVYZUrbmSuEzWfqgbB3AmraiDjHHFC4EZ9GwdgWg51kvvDeNezfgJdDr5KrrnDy",
  "key19": "h2XhLcWW227LvPRbURKPA8cK8MDajrgxAX1AZ1DzxMNmkq4SwbGAMAcG2S7BAf9UD3DUuAEMUKpv6eSznFpfSti",
  "key20": "4VsYKzTeiLZzihB7D14yoZNNdq9H6raPLPjuDcCU6MyPV9J5g6J4uGjMRpJjuVgfNBgJh2o8CBRz76Gk2NHtgRpi",
  "key21": "41xxp9zjzt5ixBiBwAsYvkHajRxAfbrFDWWj29SoMoKN9G4xkfaFrraGxgZ8WMNYU6JgxEacVfPB33Ay77zjzwc2",
  "key22": "5mTAzt8Y9ATd9ZeixF85pqayPuwo5F6csVJcFBraneta64EnnNFU5MthJaufiaXhDzyq3cAkCKSEKgijyWYHDmdb",
  "key23": "3aKeGmMMV7WRLoRMtoS53XfyyFBmh53N8gRdq3PyLw7YHskjhpRehExGkhp95XCQhSQ2J2rLRStSuNtWt5y7qmqW",
  "key24": "4NEwSC4gXYLqpZ6Lo3Bjpyoe6smSbqYNqVQF4CghqKDaVJHVWfKF2BLpJQQ43Cpc5nLrggY35cwT5DdVifuZd2h5",
  "key25": "4rr41KGqCH4XFS3dhFkKhB54EQUke9mtz3s55VwQpjd2htBt6dsK2z3mtywUQr3wwQiSNurNjAhSNyynaK3YMpMJ",
  "key26": "4zGHDpEADZyzE9DmAn8KGpAawVhTviSZwFcVM28yHE9TnHWgm6uggW9Smev3E5agxXwhteMaGAqnP2ghcN87Mh7f",
  "key27": "3avHDedxNYmTQvJXDXau2XQi3hYjFFQw3C3JegwKNzpPr3w6nUF2qjeQBDZaxszq4Worp3tVoFNKBLtEP4w8AbX4",
  "key28": "2mJWb1pLG5f6c9p7txVvHsCSUQyJryr9qwQ53VccB6JEA2dwrToNtJi6mQ7MT5xcZauVFJ8XxmiuhhcAhorAGr81"
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
