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
    "vBdpyrKK4cXAm7CU1efeETXtAL11HZwmobBChW6TUWZ8uu9aqBqFY4gdMxCEUKbaCrpJ3A47kpYvsWkPQQjNaTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gYMGm648ZND1tDKiq7NbJr6BJmjdBD31YnFqtRd1vdV2kyrSFDvpNoqYbTESKAuLDgL2w1bwVqmTuUp3uG6prrx",
  "key1": "4g8vhzE5s9jikCqKfYdm4KZ2ktT2uKFwT4kEJ5tQJ4SBxyNMWvy2ZL9TvzWpP9rgcPMJwUQJPtd7KeMoNYxWWgAU",
  "key2": "QKy9fxMoGN2EaqUwGS2FxfHUC8JxRm1jUBFFryGebi4N1awt75W6vrRW4TF41DstFsM89KjrfXCck5N9Mxsmh1S",
  "key3": "5nE3GjY743Z3qtj4GpXVSKXE4N26tXf9zFYsZtxhDpoA1NpBu1xhuCT1zSkNKHRkdDN1DgjtUh7g83JDG1PqMExr",
  "key4": "4X3Yg1i9aq5MfLQkih8iuhFzdhbsWEuHxVh8th6cJ8EYu6Ke5pFVVyHfpNxTWJqBCCzTtk3Z9MTwqW8Gho2pqkD4",
  "key5": "43UGECeg2XkZEmzd5qthTTFPPb3GyM6AeX7XDVaMT6xoC9TJCvj79WfuFbxJ7sUwdMzsnqyR3dj5odC1f6jzKQB8",
  "key6": "5sqVTv65aDYabwi413rT7d1HseqGhrfJip4RPPTWeuP4bkiAS8fPeeKqBxRokS16Hq8GBhDUvrF2FyHYxmpLqmYb",
  "key7": "3RBKHnnZiYm34gQZjDvK87QtCicSQfTGuJwogavei4MvG9Qwodj4ysvrgdKjZmqT7iKQ9Gdgx3e869Qw8NQdPuyR",
  "key8": "4bCRKT2LVYC5u5QtCv682rDAokGUaBLfxXdFSGy2mF4477F9NH9kUDYa2SfMNK2zqHf7CJDstXtAS58TegsgwVkJ",
  "key9": "rUQUDt8L4v9D2zgNtTt4Ekr4PxKy6hJbC8ZvUKr4EWCVTjdmQ57La5F9qXeaopBUxumF11TL6Jez3t9dZDdpdWr",
  "key10": "3p7qxpEtfs2iBTtTnsDCLWyMhCADVBJ4pf76UqWVh4a825SBTuaHPJz7suQFj99sCSPq3scQEiUoN9jAXxD8dGab",
  "key11": "4SXzr7TxXUN8QWMicCg15GEBismZG9KH3673j19HUP5aTX45eJ3rSLZtbwQ1xWkWh9cZKFvnkTEehJSn8MRdDuj1",
  "key12": "4Mvs4SCe9ur8auH4FN3ySQXZxMiMDZPZbBteFVFSdXQuX6WzpCE3zj5hV6PSXjpDVnuAZERpge965tVoKefBjmgT",
  "key13": "4P5JYRAhvTmWMKt8a6a6fZBcmv14M7FgvCe3BEJZPkV1dyZUyRsp4e1gN3PoQgsKP1rjw8EjXYb44RGzDzT69hBd",
  "key14": "h9aLWk6qVg6VsuSdMZinbeV1ZBYeajfAiXCE2P1ZnUFwMtEGeQ1UxkEgjihuxTEGfn1o16trPPThm9VVHj38bEh",
  "key15": "2zoyFMBgLscN7dSJxwm3iwaz9YmhTLJz4HyXB3iWZsz6KeUXFEgqeH3LrK2widvFUwaiHehYQdKPqFTABwgpSTPs",
  "key16": "4ZYBRtct73b9en81J5gMEvixAnBSvxqYqR5WCGDapcAsPNUJRhpxpxkcutYLHciCnpV2hhxY5xRiVYsQ3t5wAtLy",
  "key17": "63PCVa2cV951TerLVSBs8NcVYHb9WntBY6v3C7nV5p8qh2PU15UeqXEEg4C9hofm8PjPV2z85thi233MwFSp9z1e",
  "key18": "4ofNkJAUgif8RCEqbsrsouUMz9KsmbpJFifquLY3PyKYsxp3kbYjWWNExkRDujjy3evfKrvx1pRbTAGyGeh61xnc",
  "key19": "5XVBqe8hyPPpemUtCrvWFqxSZEGpFzuCdm4gUbk6XJSBYkWqs57ekvDRdqTYsdsYMbd8JFuQuYGyj8xXDizpJuJM",
  "key20": "2VFmQZsa6mBnnmVjJuaoQ5pRp52b8GT1kziLjx9Y4wXZMJ5FEq1HCzyEw5HASarBFWpovKjsMjBG1sZy4uYMNc4y",
  "key21": "2XUYvuhomBhRxBTJ9zREZ8he9n91zvQpWEqrXkpEGxNatny6z31KeBLNtvxiAZB4TZcjkozqCgFkj1FVquqnBVFS",
  "key22": "31JNjPZvEq11PySRcq1SWooXDRAkP7rnABXqiSa5E6ZdtdS1eL6v7UeU6KSYgQBt63P2X2uFNVrPfDLCYguxGzdK",
  "key23": "4jbqJwdcuEk8c51QJGi8m3Figgwyn3EhmYFgKnTt8FeBXPxmMfYXK8fj42BRWvjX5XKXRiskU2k6oRX3L3TiH1i9",
  "key24": "55kmQXo6cAnJNpSmFGHXtSzZkKkeWpmbK6ghP9MWzJW27y6R6MLf51kYvdhsnPNk1eZiPgjwPW1Lw22F2UUhxWt2",
  "key25": "3EKaWzqgsW1pdGSd43XKb43iH3csKGGp859P7V5yyutk2ARnKmUy9uer5hY1cmDcsg9A3pTkrPo9eStzWiTqiv3f"
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
