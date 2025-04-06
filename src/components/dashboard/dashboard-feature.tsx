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
    "4bYxFwMS2s8ZBaffLmkQkyFac4tSsMdKoZQKkNP38yjqQvRUFuwPDu1o3Y6Fk7oTDjmEoEowFxbhehj8vMkhmaQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wGUung75tNJLWPSPCrnBntqhHBihuQHra4V9N7DoHT8tK9e87nv1vDinBt93MWPiB8bLw373J9AHyi7ktNtw2Kc",
  "key1": "3QrXC2u2XwBGErAbqBqLDptcrtTdQ1fAqswawp3FLpoZdKCtuPzL8JEMq9ffz1vj8CiFKXUkva1yiqNGZHRrTtgV",
  "key2": "2iMzPzkE6VhGRcqvFiEMoypFqsuPxv4CsC9Nx8Y4XBPb3cHtmHCkDCWruec7LiV97jcG1vM3yPKhSjj78kQHcsPU",
  "key3": "3PJ4xKEKmFf8WvEhA3DhQCz89zC3vKAMvTTBeJgPQEc5GTWb1apoTxZjDb9K91uAvtaigqWNkJtHyZkRdVNpe7xe",
  "key4": "bWTzRRWyb1GZ4GRCru9YNir1kv284bFDsSx4Pz1qMYu5vGPkvBLVaWkYwy9PR6RksUHBuk46rdzbkjEQuyifcko",
  "key5": "5Du2ojtcVx9vAQVGq9L9VL2AdZHfnrrKrcTHF68RmkQkhVn1uybT3Noy1XtwRNkcdd5ydyAw1okKNUdmecPsi5Bp",
  "key6": "3qW97hYQVT7GR1ag3E9jVj7hBjP3BJKzbYxmZcrPTKhb4AgV5DiDwHYN8AqpJqGLqLxUtCCkBguWZymxDqSePtKe",
  "key7": "4tw5xJoncmTGkZyCZdodLkxKhdvwbNTVfftmtrMnsgrDs36RTLt3cPTaYRVxkK7E77g5sHJ7JpSqVXVvddaU3g8k",
  "key8": "5cibuse5JCbQgB4Xst8uJFdiV4dL56JawmVSUS6tT5eRZLq7KsTnGHskyRnwz6PD1RtcjPSFXQ2Gb2wDvg8W1GxY",
  "key9": "4sHyyi6cRDZ3zsWT6fq3P2AXBk5YajvvPwoZ9nQeoD5ig6z9VTcF5XdzHsNoKXGNhzmWrpcqjEbEajRHpyNLxnZf",
  "key10": "4svAh1wxP4ARBgBXgn4QkLEwt75RYAhDG6JuJqo7spCoXu893rJ6g7iahW5tthEngtTsYPgR96poV5qmUzCueLiV",
  "key11": "5qYE1pVr1fnJuXYgEiZphyyKBP7rcMLHdizcBhZKgzekRYedkQt63wLR3dfdSNuABLBpBPocBKxe6pzbFeXZpM9D",
  "key12": "2ggxaCdF7GqhsPJCW1XudtwMxu7est2MB2XXaJ6uug18K69kYQqGDYdvjhXCN77Wx9tpiUjG6hhJs1u8TKCY9Ny8",
  "key13": "2H4nJoLcYCCtwfB1XeHKhcx8bh5JGodL6SUVJ2xrX4ocHzBWFRFtTxWtZ9DyrzHdXJRG2epYhXfPNBt5fEMv5jB6",
  "key14": "4YQDtV9WYTdXS1dYxMJsSxdchtRLwfoNJr6kqAWDqwcgTdFebNTyPoJr59EoP2iqr1rGftryARfENUGHuEMFyVBs",
  "key15": "255qWD8XNDWG3BVKTiLwah2tXj61aS2gxrQnw3RWjPt9KKwUh92ntXDGgeFTX7jpC6RNXUQdeE3SHzGbS9RLUkr3",
  "key16": "2NSk8T25NiMMAUCtC5qXQ4KwmDj8n9hYTjCUDeHKrAayT8mbBy3beaJn9f7hwM97D61bAegaXGQspLfvCM8Fbb9d",
  "key17": "5MK9mSf3cqNiTtURgQo9JGeu8G9yhbKHB46ZLDGpnbzjbgkGPbHP3qkYjVVsx7u3DG9ANhPKeN9edWJeieA2GWGD",
  "key18": "2mNxd2HANV2tKK8wbkGVTuhMZQqrt9B1L15TSbHeoK6TUGi2EAUkE3Bc4cAQCPxxyFXeTe1avg96ADUBjK5NsMKK",
  "key19": "644yxKgQyKTbQ9XEMVcH3MAAk1nVK4zetKsL6gK2NMdvNGM37t1signb5rmKm95zPEF8VdPsZE2T3U86Q78Cze3",
  "key20": "3pr5Hr2WrLzVNLBKkWH19G5bMZPD6CwEMorbgN1gFGFBwpbn6faYmuANni3W5tHG4mXeFyX5fEsqY1QbGeSfBP3x",
  "key21": "4zFkP4bxZwHGXko4trTY5y6ueTFwR1uEKi57nw6n1SZJTAaWSt17aAKvtCk2p1aL9ymuTv8grg6pa3ifFAFiCwoR",
  "key22": "5Dga3W7uT3ZKKp8Mdo9dtnn6Hsf7cejGeF3brv9Uk6fLsuCFV1FQRtgxiAfPQu1norjkxKZDy45sfR4jYCn1typ3",
  "key23": "2tY1XL6bbcT4Tb6vE83DRP7YwKmLXNwovV9A2tzEkdSWc2nbvxmTm1gL8YiTozJcXuMHu4FBKCQioA7Ct3tireu5",
  "key24": "61RaSSfoP9zwBdjBgrT3ujaAbYo1ByUXcCqcSK4REVFR3QDvgjFQQsP9CQgAyuLj8knMw63TUPCdW1qf611yNsSz",
  "key25": "4HUfa4YSfSruVjZh31cx45W6hhvCB7WeXYCznFFaymokRNBTS3JPovBRzo12hb8AEmUVQMv9yLWRd9sTKiThFdQm",
  "key26": "3NjUeekYtSu6CXEbMZVUkNkcoDTNf3DMe6z9ku239isTFrU74PaHnyL7hwRzphJiGerB8u9u793zVmf3HLaQYwsN",
  "key27": "24sm7NT5YtKe8izfxFPE4hUoqzFzsxRRvsRejwDVuQTfexEEUx3uqGKgnvnbnn1ukwnAptEgWeB6aiG3HoUeB9C5",
  "key28": "5F9YhPAPixPC9CzfF7R12ifSRqpDa2u45SxaixAp5dLB2wHVNtyM9fxAKcQ8LgQN94Qfd2moDh2mttsnrFgoJCcf",
  "key29": "4DqBrf7czCsmPPyd7zBi4qiSRXRnCBgjm672dqPFNXy5biHACqTnjRkjyYDTmPUBhW6rSxoRoxfBmjJfYtPneTD4",
  "key30": "42MikxUZno1ymrTsuVSrzuzcXkFpNSLTgYRPEKFErmvwM9KnrcKErnw64QkF6L1w7tD7oJ1zJKPMtxyXZEgPgDGM",
  "key31": "22wMBEkuHm1W9Lv8vsesVStf3NcXqDa2RWdgxqzLAHL2Ext3CNhXPfWXZeK26jGVKiyptzS2zzWtjirYc2VMqF7N",
  "key32": "3p6ZCUXoADGCBTes3523oy8zW9pCkFj3qHWxBGgS6ktkhp8LVYtGRx6KwD88m3XR1sAQuPCbi5xCyDEPtojS9rMs",
  "key33": "8UFLB3S7Y4Zy76f1aYz9fA7YnmNS6Y2AHpdZHxnGcLVfiEpnhpJ8TmHTX5oC2WQ6BJLjEGrJ7UY7yEvYci68E6u",
  "key34": "5L2KLP9WCnqbuPeSjtv3ptWynQc3i3e2cX58i5AJgE9Fcoo2kzVvYdj3SmqKF1nLn1f31uPqo78zzc7SrN1gzYRk",
  "key35": "5KUN64cxZeyFYjarFGYXgnvpTxk4xXVgwBJQhBWBGpjoY1C8qSqTbqv7RzmtXLkxygQpDFMTAd9AkHnZDeTmnWPd",
  "key36": "2N9MowobcnfD4F8HnvLkdUGtDHpyvhZxB46P6NXAoT9gBaC4nsiqpY9rB4y12ei5uDz4YiyWtTaw8TKBwn4YnZ5H",
  "key37": "MhjsnrZocprZGgx9vGGkzmABPLarfrfGZDjtuZA49NqsdTswWSB4huPdWhYirAQQKXk8PGf1cgmRTEpX8Yicmxh",
  "key38": "4ix8tTBaBMHy67ysZQufJhfWUUmxgVUa5668KzNxHCcMrb2FD1p8BSu2JH7Ja1NWPoLVGVJfnVUdQU4QxMBNT3ci",
  "key39": "ZFJnWU9QgALa3YQAfq5Ba8H3DEWdLeM2thCkEpRS2AWkDtKH3UmQE9G4wP58tp8mqLxn3DExVRdM3Xd1Z6HDrk6",
  "key40": "pFrq81RqvfNPFwJJV8QyJgxtCugAMVL1n9JNsJWcdPkjv6ZkpV6RqziQ7bRYnKqCbxJeZAKiWkB3fQbiRQij944",
  "key41": "iQy7URS6o4z7HNGg3gZQjg4JHrDhLKom2LDZQzHLhYpnQB5QtCL9N2cUY1N7J7XWH7PvPy6mJ1o1iC723yPE9oL",
  "key42": "ecPUwZNvvdNiMXbGKm7EbCMr7dEtFiZuM3pxzz3iFBTCikkNzR6ouenWttKEbe6nnLVk3zadT5b5Wqiw5Rg4KeW"
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
