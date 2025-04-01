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
    "3JudVBTxyWJjD36Pkau7ir3g442Q8uAi58RHcUi8K9Lx4dNvS5ZqKvpE6SvisBPXLSGbFCfTViCxrxnP6C59yzFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LZ3Fyqq4ik5sS3NAMRAB33L5vor4p7nUA3Mu9FvAhysj2dQgEZQg89jhfh1BUN9LiaZRavRu9LQToyWpxpb1Kxm",
  "key1": "6MGDxtDRj2VGooF42yoSQsmf7y7Zip6WszRWKjychucU8cpi4wc3pj4d56huA1K1PK2dKJ69pLctVu9eugu5fD5",
  "key2": "gKmQdkdaUUDdSMgKXnEv9nEzNm29uYPbvEUxodxWmyGKyA4fQek1EUnqrUhLCs8nNonUtokCPQG5PpACTsKr4tF",
  "key3": "4Tb8asnzTpRMzWn4eBjUkQEui1AK7YrY5AdYqMv6zggdPBpXDzDrtd62ZPCWGBJhnLBiRCF6ihCrGg7oHN1scaHm",
  "key4": "2wvWHCPpuPisAcJtUsv1R3saPhX7fJ8mW7MiZ7et7KYFHsq7hCo3hYySWwydTFmcaoAotbgweQ4432ciVL86Fmwh",
  "key5": "3FF5nivHvJUTwxChhAkpbTBGB44QWMnZxaJq188bfR4VPrsMoTvE3cH8L4qVZ3CmyjNSSz3kyEVEY3vwZoQTpgMj",
  "key6": "2kBjaRgH7NQTS3KNFo76tkVxgPpJGrgWkXh8BV8r2nn2mLEaBhhgHsi2u5PbLXMa2wJvjzKjr6RMmNK3ZkSLLUAz",
  "key7": "5DGDRWZJ9hX3LntyVLthJ3ppQLQdPEPv8hEeaxnJw36VGnPaDffD77LkZcEtQDUVGzPrfKkFK88av3mbPXfrjJat",
  "key8": "2YwbSZXegndS6mReJB4RLYrsr8aaXFa25v9mZBHke7mRUm3ufQnqSW1ZuWmH8pb1UNemmyfkrpJNY9kHtV6RWcVh",
  "key9": "3TeqWJL5ATig1koQ9FVBRSu8vut1HTFwT6V2iKsaMi3kueY2yRdjNMTFoXfA8PkvERZ94PGqR8AVQuJ1t1nMtbmk",
  "key10": "Ya4JEqaRBxLp3vt8PHaa7Lq4H7ow2BeK5jGo79w2ASV9kuZLDVbRqXqMpA66mPZuhZLpaYwJwtxHTwMG4ATUM6w",
  "key11": "2UMLjAvTEQzzbVxjJf4oFVp51ue7gZM7VpWKfP1Me39v79ynFVz4spqV4sxUY9b7e2oyQoa92mu1n9QsVaeDZNqe",
  "key12": "2mUMFo8mhuYvfGmLJN6Kq9voNBPz6hkfGYm8NkQanpDMe5wRzfZTYqpyktk7B3jr5VNhePLzLtSoCxTpVpRftBiW",
  "key13": "5sFAckiVNVSca8WZDaVDeEk2sSMqeZ8JtV7fXEherA22Lop5Q9Hvs3iwpekNjns1pvEURHSUjXz4jaUFbU9pNUzD",
  "key14": "39Dnu6MCb5uZKGTcSuPy47MWT13BzFvuUgAGyjz4eN5yERvQ49QkDyWJoXd1LQ5PCP1VNqRcBfYrpEg73tv9rUJQ",
  "key15": "JrK47XvetLUsBxzMNXfiJHR2E5j7y5BVEr9WoKij6JySa3siNiznEzEw76Z632f3tokX8T2uzDSLC3dUAh6eLCN",
  "key16": "37xbp2Cjfgr6wDrCjUUt4SZEfYR7cCT9Jpz3yHpRRg1YrFDweC4FjtfxjfQLPY3x2h8q6mB38QFo4Pd4ZHnLrnsG",
  "key17": "5L6zNdSBG5gigAbjoyAMFNMNLhw3JSzdshneBvNnGU2mM4UkVSEfiMShrY5GaYLCUybD1Xkh9cqtki98QoBcZFTD",
  "key18": "52uv7WCbC5cNSVJoFt1MJYZtd9x8Wzg5PKUFUwSMCMmXG9NU6HKZJsJwJfbV8Q87KXYnJJihEHQkFDE4DU2FSH8J",
  "key19": "4iZSZyTnUh6FBZZ6oC6KfPDzi3v3PZrjWhUqcSiDcn2yWTZqQSx6so7QZRJZxnRFAopTifgQGL3TXzXrfXyp7nu1",
  "key20": "46H3LrAEeaQsFiqe9Nwhu3oPwZ4BdnjzpMQZ4oiXS7rvSzaS33ck6rKCaNoNqiCkMgSAmwXDRNvfPQ8SkxsumNnt",
  "key21": "34WTbAiGk5De99eeyzuRsE8gLnoCQV6MivsHCXjxyfQfqPs2S1t8dRVE4or1FoaX3KcKSvDZj6jw44HsBEyeLs5a",
  "key22": "NyButmkvd4HtQb7NtYhpmNd82FoBD62Fa8zU54MpSb3V4BBUL1HMwbp5qgXGerpmdiypMcRKmzFzHGGhgvvR1DU",
  "key23": "5WDAFtaA5jWYzdn8s5JTYBWUuegRigvibdgFDe4wDrLw1qtQSkTYyNrWcALLMpzFtkAYksUcjiDZtcVb379jLH4P",
  "key24": "5oWXZWGTPuzPc5mkaUkkRpWDvsmeoTJCMuJUCwMzbirLipbWpYUcPU78DRjUV8m7rxmTWNoN993rQphveHgSDe56",
  "key25": "4D9AJ7omkRVqavQp1YDhTJFCpNh5WA74moqyzsRr7Vz91paEjePHMqP4PCHBGFiLeSvFZ2Y643tGipURAVH8Ddop",
  "key26": "3ZCRDHRvW8rPjKxRv6BHMPTJgfTWxRNw2FLYdbH7jFrcwVdpVxB4kwf98jyB9zv1mQ77yM7319tLeEeyaR1xA8Be",
  "key27": "4jaCVaZm3Nq3LNP9DDuAgpkGLnBKQkQ8eKPVnwPdC7SSXCtAxFfPP6JWXJLy5GwE29zGd2eD4GvBMVjteVdiQwJx",
  "key28": "3xgM9qx8BV7wnYfww92PwFGDat5rwJyiWt8mvE6vjp8YrTS8GJ6rzaw22hG7FpDaHivZkdhEJ14xNv1mJGAGDUny",
  "key29": "5CfG2k1SkdtG3wdS4cHK2onTYaR1ULQHB37eVvFDWhhUZjJcG3Fn4jBRwwb3iCwZo3CdjFxADv3gD87xdWtmDbib",
  "key30": "4vNHiPhyQWBVsBZ5EhwCSd8Wp16iywcEiMHTPcD9F3bSfWWbpRHijv5GHw8TakTGFAK5L7pNh4bptGohxPknaPmA",
  "key31": "zcBdwHBXh35RYVwq4AuytywKuCD1trXi2RV8t2WKkaZ1UZhDTLqc9KVNDeebdeuhHbVrEj3thYe3qK1ASpiyEDA",
  "key32": "3sLQoxCt1tq8h2Mw7eeEijxPvbHqUuiALhxq2p1A5P16CrDELxnRNihkq5WKnHU8EKPuj2G2mXbCg5hAtz3AFJis",
  "key33": "eRMmGwKk7vTZxkProoFpk82CuHBjhD4SxK9GxQp4GUTHiZzrDbJLo9QdtSUer3Y35QvVDuqSnTqnVSmSeAYeFCQ",
  "key34": "4xsrw3yXQ8wVHLb4MoYVvp1wQMHsKc6pJgvsYy5mJ6ck21dthG6Sn4pLKnzfZ2ByeXQjZS5bLUJAR3YbdmwuwC8n",
  "key35": "3enVy8v8h7CkUUUDJCCKR1bME2fHZ9B4JhxUL34FmgLMrUm3iJC9YBL4N1R3pP4PLM38JSytxQsfgrL3J2xjES8V",
  "key36": "3toKMEGxMHkgAFh1bWK1SCXA7Psh7xDEuKZtbMB5yiyMUBeMCbQp8zkTQeKskH6Bue69ecWDbanv3ENN3WNsxp8N",
  "key37": "3PdhF3WGdFH2sxB2v2zbpHkh2naiZVKzY9tRh2GYFvtATgQoG63qTYPAksZbxvpMLPVstwb2BqbTmpcNZkkJMhK6",
  "key38": "3WJ6StuYmREdB1F9K76ZbTw6V4mBq7NwxjMLXkUXjfsq45jsekXUMXaqCNURm37pAZ5EAbBKhEyGVWWyYUgorFR6",
  "key39": "w6Fe4ZpYzseDDZXZh2Fn6bb83DkUsEzfeDSAHW8fnwRXd48FTsYSALRJibEhEJPb5YcaTkLsGdMgPmN3zmUBpHd",
  "key40": "2jFxhfZrGWeyMTTv8kQh4yehrb2xNKgEiZF4achHvPn23UP8ozDFU2BPSyiC55hVJ7NGwxQrQZ2YK8jNAi8vs989",
  "key41": "3yAVSWt4HX4unr3y4fCiKUN21NRkoBztttuSqeEogGmrtvSuvYZuaV5AE8gEVQXZsVjeVUM5bbaQL9GNjm5h85QU",
  "key42": "3vg564QPeCFp5PbYTriS88UU2RiLF5ne2BvzKBzFTognCkRPKRBj4zkcyqNzspQ7NK1Ve8Si94Rnv4spPMDyLpzx",
  "key43": "572ruhWcvrhKqZES5tgpWhjrP7JJpA6kjoxKiwxZnquD4eQzU7Pn11d4EPK6pzvSUZGzUYB6MnjGKDhGD7cP5LcZ",
  "key44": "5ArqKjsALGCAGCpVRnhvdJGHp4tfn5W545yRyEHMW2qBgQoBup4FVKA9ZN84Mp95SRHTM8G47eVUgSCXtTe1g2vt",
  "key45": "2ST5iNJdNEufckCgdGP591ZiXCJr9Xvthdo7r7C1Yp8L3Mn1mfEEGPN5TmoFHM4xKqQ3Z3zMdqbDCN8Nidv65CVN"
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
