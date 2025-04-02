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
    "59ju9GvSafuJm7cjE8ix9ozkpnkdaLXY3amGpPtwxg1peQHyc6gQ3MS9Ecqsy2UrTDksNtF6sQmyJrGDEigVm8Wi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oWDTdU6Y3Hwc2zBKBcg9HKsZWCMJmgz6e7jLVNK2bjy4abMibGH8kMLxK2ZNz4Sj5nRZrPPj6huKeW2ZsdRfq1z",
  "key1": "3dK7x1EUaVv1EvjCY12PfUiWmy47oHoWhLZiySrzPhuYGmfSAFnAXQQ6byqJ3gDbLtZ3iW6pvW6EfYvAykXd8tkV",
  "key2": "5GqjAaUmf91GgwMEn9vNS5NkrHvRpjz4BBCbEqgVgP486WhD65SRg9pUL2gGHV9jbFjTmK6rfjvH8it88RBvW3Lt",
  "key3": "5Bn7Z4XNQfP7pCLzzrioRMGR15JLt76nE3wqM3q4MF6qWAaUenwrhDCrMtGUMiNjPznEReLhBPBfByFXKYbXhfks",
  "key4": "Yr4uZFfjwdHEFkP7L1ktTUcNnoJYUKCCm1iFTbFvAazqFSABDYFN4Wfe8goMGYGm39hiiduRtv2esUe91C7oPzo",
  "key5": "2SotLUAWzCGd36UNYm8e3bV2Vs58oBsQSVAh4viry3Hneuv1Lsugmv9kY82y91CDbDBDoXaMUjtWkqeGVATPyS5h",
  "key6": "2a8kSzz49Hw11Wwg3KMwiA3vx6o1taGkZHjaTEZj1xA4RTSV2xq2BtNRoXU8DnUnKSZYEYPhcDurABw8sxVe7Hke",
  "key7": "55kYiUVaVDNzbmPkexQPJdx61c2VdGER78fT1XAvkEu8TKaXRJC1aeB1nWoYJEbGNNqAhV6N9YJidhkJTuQ9qtoG",
  "key8": "3EVhwjDN23v7j3XJG98pypbNsBih2V85EV3TC46nZvUjsbDLrZk8U8yzk2WLgt9JX54UMfAwMDM5vGfenSimX4ox",
  "key9": "2h3w87fBXqPyJqCEwDW81bo9kZJczfViuzmhsRraHFGXHXaFJ5yWLqvrj5XKCCEAiYRwjwLY6jYhSWaXLFW53RJc",
  "key10": "2WiY6fZcb2hbYojJJPAqR7zVixbDs327dym7KN545BkoVp6Cu1p8wVR6h6wVSLahyVqceuZNCuurjpQrMhozfEU1",
  "key11": "Uc2ZV7Yt5ebwGoLCPLggnKekgHBrgmePGqK47W7zSZ7Q1oDvce1zB7s9KjCvnwv1F4UefN85x7X3QHCGcrsU8g2",
  "key12": "3Sb6DJQNVogDd3T6VAorosW87gvG76gxNjdFvAAaG6zt7NgGAT3e2jRbhmemfv44xf7WPDgYkYii2FgKGtknUHZV",
  "key13": "5GoeaJaHhNqhmsryjs48cQMBAf9mY2nhbUWxTEuCHhNbFifpRRfvUo93jbT8QkESf7Nk9dr4ENLr62qPKJbeboUj",
  "key14": "6C2wRB1nNbU7Bze3dLHknjAkKjQsbF4RDNJhMTwigkQQjqpwAUez1Yx51FvPFBbYoJSjRDaphAsmMx13uswepDF",
  "key15": "v474oSHvnaW9XXmpNpSdNWjxPRiMhN9bJWkH4ntQWmVsV5fc1ghjV1sfZ9KcBPq7v7J6KPsnjYQb8wSYAWExQmk",
  "key16": "4Pf2XKWFZueYAkbZYr44Bncq6Zjrn6sTu9gr8P7aqQFmDZcJmfqECQngh11NcNFbizD1w8Wvx7NHdWTgPykgzJL7",
  "key17": "xm9CnCSGgeLgVGq5vZ2zJbDYsH8uQsWL7vZppeJpxWR4H33nEH8SFxCCFUHx5qEeB2obiEKkeNXLXtFShsCTnX5",
  "key18": "4n9h9WV2asUZU5g8rq6ZAab11vYtAiw8ynakeHTDMN8WhiruH8FvoxM5FvXiSbbdbDmJVckEjKwcgVoGcbc5RFF2",
  "key19": "4Nxf3pVJRZtvEAVQ27ZwJC6Sxb33B2T1vxqgJCoLRC1Tz3ki9PLNAitwzH7wuVrD9xYurQPrdjR43tYTtZX46zvM",
  "key20": "5jjckxbCH5AsLpXcMcJEjA2u2nLTEDGyj5fzQ2DtYaC9pBmF8DGwPSFLT9RVPDR4EJN5qw3EVbGkX9hyzmwwpHTv",
  "key21": "2e2cPTnHcqwUNyNDu5paJr93msw14qRRahtQLP7mP6mP7QyAF5LaP4R69BVZN3J9vMrAxTgdbLMwanqi1T7B9jxG",
  "key22": "5jDY9dmacCRWQqtsCHM2x2dNXDU58JbFqcaehwmQ5bpNTc7a16S1gkFfsy9EzNQSVujhX5ccBsVhMvx7YMKPUXuH",
  "key23": "3nkFDTgheRxrPCDieU6cfbFteRXQ3nUj1MUCtEksykp7fjrCGKQzpzrcwUjinAZrZnxkxQPBojCzqcf2ZdVm4Wu3",
  "key24": "6qW32R3TmUCUi8s97X5yJ21RmMoQdsYDQnYLv3XKk4RAUXfbxuq9eVaK69WLEsjF6fgeCnQ4PnYhEFkGz6X5BPL",
  "key25": "29cVVcCrxN21fwfLrJJVtvF6zvgEaivo36ZycLCdyqVVEXBrpN1JkkgvnYQv81upTdYjRK98QwnCiupHLagTXJVk",
  "key26": "5HFsE4Qk9QnPvowxXUduAQGTHA8eYH8NTVVDcArTUXrykQxTAmEkgBWSv6tXjBbS9ybXNRRowYyDNpSEi7Zv3hfU",
  "key27": "4Ckxk7cggcfKVXJPc1EzfRn99WDyFCCMQC4yQBrdbe4HKN7SKnipUWVjnmV1m1p6SqEf7PqinNpJVXrmYLte24oj",
  "key28": "2MFwJysQ2zdawpupMKVWYPxs3GRXJeBDDCtVpvCjfKjBUHkzeE1z7pzSXtnEurVePnrhCYwAevefAEmDGgHX4FJQ",
  "key29": "24vxM9MmnbJZfPSJySGjBeZc5zcsTu7B3cfUJAkGe4Lwx3XB2piRKP3w44iM3FriJQZP12hkmsWfzHwoAuZwtttA",
  "key30": "HxsfDzgPG1KZHaGivJ7YsC77pJgZCwgHask5Yy2oo4Utr2Xbf11XsnuXn3XRPQvqmzpZmFWXQqjSVhJ4MF1oN62",
  "key31": "5S4DRkNBYtp8QTbp4mcvs2gbKSRbcQQ3gffz3P93X6dn8i5ygo4EuCrHUsnW7f3Tyi2XmKhVfvc3gKhGSgXtfzvF",
  "key32": "5cvfGapopnVtkGVcrydJVaqvke5Hn2DQJUuaZ5SVquRctXs2tvek7K1zo4VwZSzJp6E5kXScGRUXum7NmSWM94zP",
  "key33": "3Nk3WXzcG4aFoEeDL4MGdfP1JBX5xNay9ZTy7tjPsJetbkPKuWpsTMZJvZwppSWZBuRbHJs7Civ51kwP3rQf9bdX",
  "key34": "4ZQgEK73pQZpRm9vpdu7dLDsH5xt8FKdwCKyoyGM3wfAuw26quwYQqcgNz5qCJvXeEntoKn3q3HsfN4gJ4jAGLZK",
  "key35": "5DTCbYAf8gz7982KQCZZ3ZweXZJktj5iz4EJvnoY9H7dYXrHymKxQiBMeZFDGFCr7wcb2dJq1uKci6cCEo2p1M3N",
  "key36": "5yBxHACUP1san1mMySbK2D9K29cRXQd79aQtMPYHS1kkQi18Pt1cKKbBLvh5LMSiDSREvanCvfdHEDqBk7AGPSij"
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
