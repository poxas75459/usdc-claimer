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
    "3KgtQqGobSkcfveHXZ7VzAHcMotvFVEvbFy7styz84Wtg534JPcw9gWpGWMHNKqLEB3CVzmV68Sz38MxFVWUj6Pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HLH7hv4XchciBb3WBU9rqt5gjdA4sEjfNbyLqRCfw9tUn259492acRBaAeEAzaAzEGrQ4yM4go1dC5yH398jH2g",
  "key1": "4SxUhHJGgrUxiZ3m8GfLuTkWVMnzwBbo3JT75vQSyLh8eWjqLD3GQR8My7RfSy4syk7ycDQQcy97zTKUNN9LkdaA",
  "key2": "4MbbsVMZB8BjUJEVKmbtayAZxUKuvSZtiFUBiR7Bcackdn2QFp4B173Aq8VAvRbx1s8mu6p7K8rrA4aZQXuXBnnQ",
  "key3": "2qW2bqNz4uinizUYagwLKsKPSmFMSfM1xLmCxFa9LKmY6mX4CkRkPY12W2MVmyE3iCPGWt1vHmHdKKVYMy4zYCSH",
  "key4": "5emwNWZsmRHxueiZZaZuaYwwMLSH84qrF4Gt7LWLwBWTsbjpiu4DUyb4LGBwnyRUFQrWyzbsBumP13azGSoEvZRD",
  "key5": "3J3En5nSJiEWPdAjAik8vmDqddKt856qb9ios9zz2Uji7HJc6fJcg6E1uG82UxSj1CXhg1Kw2xA2pm68DQc4pMY",
  "key6": "37AAFrs3d5NjfHUyPJUcMDk72QngjW2HPzQL4GSjXKMoCBYSAMKSbmXmrMbehVu44pbDGDCTWmTXAjije1M9qukJ",
  "key7": "2sPWcWYg5T6ArDok6NkrvFkRHqVuKBFns7wXGVhi7RaqN1CXiV75XbXgevxrYvvvdKdXnrvfpJtnYzNQ3gRH1edz",
  "key8": "3dRhqU7jTZyNCVgbm1mt4yfiLP7n4AGKTwyV79uDgfsUN3G1HNjmAPnA81NcE9xRo9JQexbN3or1acMcs3MoEJSA",
  "key9": "2nUj6zs8bC6PzzD5hz5RtiMhaUEb5Nsm9NHFVLdZRQ1RqFHdypjBLtDwsr9Mn1fPJfNtDp2vNjNhshrGeNrToUrV",
  "key10": "2XFGmokFeRvLfizBmit2GnWP1KsfpWQpUfUoFKt3gkuca5nKw5kJNGWErf386FahWnjq2KSXDL8ny3Wwbt7keSRL",
  "key11": "539NFfr4DQgTRMBHrfyTrKqrR4JPrdAaB3yCFGRaF1hYiqyxcz8DsfBuD3hLQgPmpv171gaM7Gshj9NpmPmfKdRh",
  "key12": "4uLhuG3QRGdQUVJuqMhnV3F3Fr6arfTAPd3SVoZoccgvzupSSBJQxxcvKF8k5AZZ3sA4Y1miWT5LtN5eQHzAi6qC",
  "key13": "fy2P7EXUeU2GEcLmUw7DQpitkA8EwD8Vf8txhsYRZUf5Adtp8gx584EmsbKHQvRAKnFSgzVxMMEi9WGpSYh6EiM",
  "key14": "36z5TpyguQNCANft22tFqhdjPX34sYBZit1jS5ZXW8pKMew6mWynfMh5KzotsjhaSGnRYeiJj5rXCGNZnYfb6867",
  "key15": "5r68n7HUd13UvZLLZVyh1FpjLQ2jQggZkeockLFbkcao8CrGkBhNedSL5VRpCSB7k9hq8yrfwMvW9fPtHh8nPmdJ",
  "key16": "mExvVx3Znuhga1Gn6toGVHMU2Bs1aAuT7WqAYfFaWhAEyNb3T1sDzU8mkYj8y5f4eqMjbR5rwG2tbgvf8pk1p7M",
  "key17": "5qg4NMtQbf9BgXvkwz75ReVC2NeeQjb8sfTJcXh68C9bfsUtSHuQtPn1d7fbXhTvjZPyswoiPaqfEynHxZ47ZHmH",
  "key18": "3RYLTLMQ1bE5qMP4ycoYVQCKxFmkhntchLhEz1VmtgAuWmsPJpuUiZ4FZms2J2g8mCbkLfmPAhdsNZUtYrsX1a3N",
  "key19": "ZXsiMo69K65HBhGs8PanwpXhS4Q8i4hU3F7NB5FhA7seMaN8vkKddCZEvSJpyHcsuZwSPaqCzxWDStdeueZPtCK",
  "key20": "3N2M4HPDLsnzrj59hWj8BS3RYfuC824isjL3GU6DhheFibGXkGS4C8dikq3aebBbxyypzF7JMETaE5rSbErpqsFr",
  "key21": "38ona8JmoLBtZDUTwPg8WvXAGtoGmCNeino2BAWCUce7QvxuRKeZmTPpyLqKP8shzBvqQXQP7r6Xxv7CDgD6m6RU",
  "key22": "4FVDRvNWddDpP1oyKQADUjaHDVSaSvrJ1EUtWpbuJXRzed7bKpJXBdmByj2fJ9FrExWyxpUehH5hmoKfmJ9M8FWU",
  "key23": "7wB4MhgoBtiZm9uCJuDCynB8odetxVN4AcLn82HCAJ1ysEX2EHPYESHnb2y7spi5j5NWPmKrcs1aQsMNHfGRB6t",
  "key24": "3T2cU3At7YtZEng8cvg6BnLmnN5VnqSrNCWHq5uSjWwKiPk8pBiKNwnB9gqDHg6oSRR9mUWBDLVXQWDjr9K1VwsP",
  "key25": "dhMTarHwASVGqn4QhQsxqi9dG8EVpBGaT3KajVGjemVLToG5cgevHCNNuL7WmjsXPB3TBHFiBdyrSvC4F4KZjyj",
  "key26": "2rn19GGWmgt5jWnimAKwg3GaMD2t5Gxnb6th1TjQAYLE74ZVLGNeBogQE3JnvJcTmkdT7MQjXgz8wKnyFre2N4tL",
  "key27": "67XXCnMiTcQhXiJ2Zr8eyT4r8QmSzeajMb4m6aMsDFRDF2djV3rkjGnytV5m2QK9adfCiZThvWcGyzFE2CJaaJwW",
  "key28": "36FNyXPrzoJ7nEBFhqzRVQR3gkWSLPceLdzQTYFsK8kftLnQzVWZnzGLC5rW2fM9jDK8K32epVF7EVLANgY5cnpx",
  "key29": "2WgNhcvorF8xvPYLes44xBbQZwyo57ETrmpPJpQdYB6f5stCwK79WQfRtUdCmPZjURDuxy5KAyqqvAhswLwPo9AA",
  "key30": "33oAk9u3c4V8NGDyENbD3awbQ5hrUeSfMBhrAA1gVqvgJ22pdUR8RDKQGQEuper7z2o1r2ykJfy1i7rNqDi3hWHn",
  "key31": "2C2J6qVZJeK9EiUgW4j1cpQZMECrsx4dJNbcipWkx4pTmWNpVBdm7smz5VGfNh6PSg71qmSVwfs3Tq7hhVf5umKx",
  "key32": "4qMRbkqvkvkd2gXFy8puATXfmLJZXpByC2ssswkwgZBeyh7xqVf3RfgGd4jU5PVv3d8qCgE3fkJg8K4B9Prod4Uk",
  "key33": "5AS6QGChcsaH2uxuqjQvEMCKG2dk6pUQT34oSG5YRVZedh8B2qASEYTabskHb9VWzFNn547Zqi8nHaJ5DgBUTJfF",
  "key34": "2JnYdHUF9j5VfLPFRnLSqYe9bs5tCyoVFBQQPb3i5rPP4cK4rMXPssbQRyVUQGP2ch1iRwCpum5Qgy4Ndz5SGsg5",
  "key35": "5WbXr3J71BraBvgQHqgwc3KnFM8WzYGmi1n7MZUovCQsnhgLJ7hjj5T3a34gSxbqfiVGx2xxDzZMFGhVCPSpqXwy",
  "key36": "4WpMDosqYsGTtNntkUqopavDCUxnVZE5yR462CQkip6dqBP6ShjMydjAe9kedpFp6CFftJtFvztPBG7295XoHoWo",
  "key37": "2xfer2G7BypmUttCZBzwRXh7gL3micareTtCHti5De6cMnZ4USGWyJKFw3VbempPSkpQwh1MmLWsRSCQDtaLzjyP",
  "key38": "4Mna9Yu1Sc3f3EWYuxqkgG4PxRZpw2imi3fPGhPAAw9fjQUjDou23KUX1nsshMaU21zxtdVhUXrbkRkgU8dJzGSR",
  "key39": "3YdCHmerFKyZqTRJp3psHBVq3zLyX3EbRcUyu7TqSsEvZMBN6BmQPxYudfdAgcrZCj3wTZveaLrQZMR9rheUP5o5",
  "key40": "4xHmejVv7KpRHjwm2UzFmKPuWnFbw2ATxRdCcTT3DV7fpYV4SkMFuerEyFhJSwWDC8zhZF99HbXKBPR7KNxScRAg",
  "key41": "2rreha2YFs1NyrzGnDfv2QZ7LuCm87ievt24xjjxsspa2HhBdJj599aBbqFwfqfQs5ZX4pFnXvHKb5QnXFFh4P7H",
  "key42": "2YtL1iZcZdU1CfnQ6dUwrsB8eGcyoFU6KuRhiFZkD6Bg7cdVPH3mFo7TwxonoydDGZF5Wf7xbXGWY2zDJL2W1aUz"
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
