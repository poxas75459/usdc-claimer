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
    "52WpTuYdFxVFi3LAjSqmtcQHv8PNttWCabpL3FshSm56YbVKqEaQoo5YbEExCCQF8T58VJXopEe3TCu5SmfZss46"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HRyPny8fTFPvxvAZbK9CDGMbofX58QxLkbnFMuqdesqntorAXSKQjEVkqRmaFjB75GSHULr4vXR4LpUceDLE4BJ",
  "key1": "2Cpa8Ao3swkxBrCMGwsVAyeh32Aa9Gt4MCGsJLjZG6uACSHfexFtJTi8zBbwvf3REzHoe9oqENkKpyea7D7QoQzA",
  "key2": "31Wp3JbhW2dFYqkTVrbUYoJ4QfLQmguSTAxnvcajxdtbEUshFpZiduma6i3pUpCmQWGTTMwYvzkjXR7FHx8PVGRQ",
  "key3": "3U16KuNJWXXrz3RHfgsoMmbwniE1DrHGjhLnyQ21KFpunbjjH4521kn1QyLA1P2QeewbhHZs3DhAJvjb5ThiF1tB",
  "key4": "57bjvmusCRAGbqLadVF88uaM3EvxAsWHaQAnAhUk8EWxNRNJeYdbCDB8Nz2zgM1k79HNyLSEjubV2Pi6zBCZPDke",
  "key5": "3YRmdrYsa2DzYkpjeNyrBTrV4GqXCYtfVZBfaUicqgVAZeWZxEcScR5CyAATcSJgJdi2RvrCkibwybET95Dt1W17",
  "key6": "3uK87mh8YcgTJqWFjWGKDYSGtPWkNjZEVV4sa3H9Lye3ApH5Mo6Vep6k4RqorbawLL8KnsmDvR64gHDmxXCzyUsa",
  "key7": "42abw9AkZcaQt5cQVTYwdXDmQezgejU5ai5tPhBUkUWBATcduZEEwxfAkJn4awXN5cvYmJnkkPNXnmjqwmwoBPZZ",
  "key8": "3MsfmJpm8r2BGw2uKFoFRa9FXmxJE4PVfht9XnDtx3ftXk9cq7nKY8VGEThLhbngvtmv8tYkityqyHrkGeUd9whw",
  "key9": "3NKCmpbHPeVH3rkE3iFc4TaQsQiiH76ojHiTEKoYAgfJsvv8SSppeeAnh3yDJWN5qHMXP6iXqu6rrdevwo5c3RzG",
  "key10": "3ukaoEMZCWGaTGD9HprWnPAM3agVLqgo2PfXrTwmDjH6o1ZesynNpqjqNj4hFzpneBvx6PaK6ghoDLy1gyVf7ziD",
  "key11": "5EWJKRsKczsGgjonnTQmgVxG8XdFtva4aXxNMSMiTt8LKovXgwHYdYc8vKjxqog161X55pSoPvnfg449DkXoCtS9",
  "key12": "3vsRagvVrmubTMpeWvYqfy9UBu8Luzak6LxrcJZEtLkAVYJBrYdDEkYBsWRATjKps5VGX2M4bewMCqRNDLycCAfL",
  "key13": "3CFrg9h5FwyjwvyHk7VfccTK4fcNL2AqKrG3WYV7WMFag4MuQY6miEwbnoTDAtAqXfhSQSeFZ96oFmSDkewrTx9n",
  "key14": "5hrm2rKfWZgVeXs5AmnQUbvzuDEYk1JpknLWwNy6VHSXgLDSMvhUuePqEvagV6FmD3Mb6w2VBZH1GJLtG9oCUxwU",
  "key15": "49TYdenQFwkQ5JukhPiPxJznmiiopYDTuUyBoU8YJjgVdQXU6T1oQPsbobTJQ3nHbMyZcc2jBLzZbDUFAj8VXRCj",
  "key16": "4GLJp8DknwtzJ9kpz6vaZNUWrhmNkH8C5tBouNcwcE6bMXtLRyhRLm4BUjTbCn6v8zSYjsz8EWMEc1X2dnKhugbE",
  "key17": "3te6ZhSL2yjiHXgeLe9KThsERu3ZH2oEcGzExzhQs3MzkzHejsd8UyBY9f7ccnJcYSFudyMgTggeS5zaYQQTsWUS",
  "key18": "5jjaDkeu4bUGu2vdyzQC36TZPFuu8AccXznY3uqGvfghUd9P4dhCPDxFwJJJEYNxD2PJFYGbkpXXrVVnXs8o3Mte",
  "key19": "vyEivoBmqEAwLhAhG5rnMAb8jrgLVKh2DCeY1He4mtffFcULiyd1tUg73epQLCkMji5pZvgWtSrAs4HUVFKrfwU",
  "key20": "2rGLvg94PHPFiP5ftY518NgFkPBgXVj61TtEMhY58cGmCNPLSLJ5Aeyps7p5kmiprrGQLMguW1grVGkBzZYMZVpZ",
  "key21": "tK7tCQAXo5TJNCvXevKyXS6ayR6cvsEnihdjgmQrgtY7hpkBcba2Fon74EvJeosnyk2fETuBqdDHmve1irGf5e7",
  "key22": "3nVRRBUJjtkQ74RwTdzoo8D3PbhLP4U4dmTauFgKdtryiUUpFG83EeKPz7i4dHWxk2KtJZQMvPb9zivzFWvgyKig",
  "key23": "64oXfRCAjrcteU9HUdUR8qWSqEwSf2B9HWR5nwxibkNjgFYg97jRPDrxC95XuFQFK6CegM12zcDoUHoLkaCmJbKX",
  "key24": "5J9p2q2nYo1d6Wd1PM78VSm8ZaaF4EiSoi2z1XYjHMsTUT53KmuhQWj7f1JZE5egvitRTDncrAAts4hJYgJWmqzJ",
  "key25": "4MtyEzCoRBhsY6cwLp3shUr3LrjQJyFk72TV78r1RS4mQPvu2F7gvXLxaqZvhAT53ubKQNoji51csPpXC9VpKSsU"
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
