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
    "4bkFJVdfECLQRNbbB8L4KMzk8jMLoXVSsozFrRGLNRUEp38vri9CGTZRZ2SaK4EU821WWcALrfW8p8QQE3eExR3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FewtweiH82QDwAumJXJnv1ALxXfrate3BEpNRdxDim1ch8D9s72b1BMzzGqd9LmVciVyunbUC6FZDQjNDgRmcqx",
  "key1": "53Gh8QibpvS6BZhJdgdMhwWBqb2HYy6RP5jLrFCTwQVDtmg5EnGFHZHuu8GofJKYnAq1JHMoBY2KzMDeNVuR7ZmK",
  "key2": "2Lp6s8nibDrw1Hucdxp9eJx9Wt8ibTetQL1WbHCHfxNQjXwNcQArfW4zASLV7XHknTdAMnTRhpyVKJTEUVcVzqGw",
  "key3": "4Xc2gRLaEMpFKPmzLbQeBr6Twk2hTq2DUP1cnKUboUjhSLUk4fYJMHpnMtPYoKCDASZ3CLwYcmyi4x3ZXDqEMA5Q",
  "key4": "29fUPBMa9CWfYQ4RbEpnYhyqdwTiigyQPh7CqReDFGgCCvHmja358Uur6rZ5sD1rtTaqG5kBLyFuxQMUq5K2pu54",
  "key5": "2JZoqPvPaRtaSFeNhpwibf47yKfNJCDq5267UBGH58AXMe1ajZaS4yyX8h5RexzUuqchmVeasTkG7nby1rsN2edY",
  "key6": "2PG7yBBHavvGqZX25Uj2yScEALSrvu5KdHZdMD1we4LpC2Bn32hGp9CecwkB5hSiGK1zRXahTELWhjZvCq4kWmm",
  "key7": "o6eAHhWSnh8uJXYFZu2rDVbSyMTrLV9uLnngzkpUL9MbdZCojwdMtz4qKwdkdGyW5pYaeLb2JNTbWUgDjknDJQw",
  "key8": "4sg4tEf6oDuTRUBYJxFxxehfnCSdgM6xt3E282Rza3DPmu3Cmfp6iEtQry5RVuNyG9Ycha6uPrAkJ4MXujCgiYH6",
  "key9": "VSZtr37TyLt2AECkacDBjc3uvb5shZyQ2omzusjY8VyBwwSQ2hbijhGwHkUiHgN2sj1tre9u5n9cGYPXUK49uBF",
  "key10": "4RGjxtMsaUQFnCmKbcW3TD1dxkREiM7oHQGweDvdAxmGBRwTUMxtYkWEAD93PfyWAs7obRbETL4ivAs19bToGzxs",
  "key11": "2NT5eadKu34ewamHguPcSYdC19LXn165ZMtWFyUCLMiEq3LEiHSt95Jvikfg6pBTDds7op1z8qh4wjR2CHfUmv3e",
  "key12": "4q3uwAjtF9Xp9rnTezHh3tZZAw81fQYgLokj2j6oXBciffeqGUzhTh5W591cdgef1oeyonevoAb79vaLBjfVxsMo",
  "key13": "iL5bxsPpoZgrVJ6cErXQQJyDC8QZ7cJ6zRLiHVAvqwnkW5KrDyNg8ab4G39Pkt6MTWw27bKKzDHkDkvAW1fFij7",
  "key14": "5HCM8UWbviVUJhFAmmTqBAMeanV2mWrQpHvCi43eT8DbmJSNySDraab7stYXfrqBofS22ehwEsTng9EhBrWB4BAS",
  "key15": "5Hm3PKQd1Cga7DkaxgFwANZjQd8C9t1ABNzbGLojj8kLdGzeysZz4JnN3fVKg23wdQ6sqPDLd7PAaA9ZaDUBuPQD",
  "key16": "2fcr72AAZU4M84cAEvLaJiYCJuZqgcS6oRfUTLigfAqZGw6jAYtUTpQMb3yonucZeDbpaSNLCyQrgj2wkkDzoqZn",
  "key17": "eYy8dV7LKaZh5uCKTBUohbCec7b69aKgLGEmXQNh5VEjFu4b6t1VpKZLaXLSdM1szcrkGiDy1Vcw9JjMp6mwzq4",
  "key18": "5SXfQG4YreXbxBE8vWQdNr88K4ixtXtVL3vnEG6oZK8xfJ1imVCEF3sN4xaU1JH5gxGaPASZv3DvAxtsxXMo3Ds5",
  "key19": "2nJu66NDtYTweefWpkb3fjwr7j9BSv8xMvVsKwn3YC6Fh48XL41QmnXth6b7htV4WRV8bBaqgZohcKNuuAsWmcBg",
  "key20": "66acVqRHcHN4yC8oxUmiRavxK1bhazx3Q1EC5pFCuGkqdDDwMr5Xk2Jj6iMioz8SYpYWUUBfPMRAVLTnxcortcmc",
  "key21": "5GxoSRdA8V1Rh2tL4hwwXVZQhQMtKqdzpFUrpzYjBcLx7tVC22cAC8rcoqXVPpbsF6aWEioBRbSExhpZWPBTYaMw",
  "key22": "Gsza4jULE7ND974v24cwaAyH1qD1FLjB2T1VRRy7ocR4DgPSwYMYewD6U3kBqp3F4cseahULA3s4qc7LpxnD128",
  "key23": "5LCKTM4B5nSg6vVD2om6cFgGoYi741ztbNhz6vYcV7PhFenqVTCk5z9ZicDahX5PMQU2ShkpPykaEDmeFu9Yaf2M",
  "key24": "3HydDHCVaTxc6L9j37w4xmemaU57sHheatUSD2mVRUopZjPRwZbzejw1pB1pXKSgx2B9r6FVsVBGCQuBqLWTXexF",
  "key25": "5RVKexCSM6TtgUTQzieAaPsD6jKbFmJC9Rq6pBZruWNaKjnFx8XMYnXCDRainLy4M8ovCr2vNoftiVuSNHUYNDiQ"
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
