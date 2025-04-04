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
    "5ENmfgS7xYZy4NLSshbVuqx1GsXRh8XCmBw9vwjnbEDc26AeydX1U2HibLnMTMokvX3Li7UA3qDSBj3SqyQw3NYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wCmTHNpBDuw7bnZu9wwpabRWDuZUG5M4aVhi8eqYH2WXD19VZKvzHkSjWF3xa5LGH4gcoyFvR9MMjF8598AXAsW",
  "key1": "5dxkZMbXjFSpc1KrBSqssJWtcrSgnPFmSqg91F6RPha95PriNmtHsVnp8ikjUcH3s3L2tX4hQiwr3ysycGaTLe34",
  "key2": "akVUjJaocedzWdgCciYNKnjuZ3pYzrdjfQoPJMeKatnE9eTo5UTYWbwARcbBP2deZCPpqB7qmodAnme6w6PfJXe",
  "key3": "3dgErErVmfJxgn7qfRjM1pQ7oTmJosVK24tgBAURhWyWXJEJK6x8w2G5rPK1amzsVQUNWW23S4DwgZdJEEkeLwko",
  "key4": "3GHpRVScgqANwDCxigFBidhtxnvQYVf7pj5R6AuRMEoNhXQCB2uX3G4xdQNfkSnoNGGigL6zdY23uGtpJh7hEvUn",
  "key5": "2XPEpzV6JSzzhVggzKWcRvTSMwKmddeuDKDqMvMKTEwNkCaAXcGP7gwzSd1J5jydmHhNVE1xoMER68cgzBxEV3L",
  "key6": "iNtMqTCZDBsF4rj8n6doZQa9FfnsjWiG5JcyMp2Qy848CZgX8MuLpZ5VYc4YKfxsMLsDUuWHPbLMvQMNSo4trwf",
  "key7": "3QruB1UpTgSXStoToQ1xkpKty9yirhes1n39xgtbLqCvM95VsPLhaoqWXbzQ6WUmS4xEMsXiwd62LzbLdMJrCGLR",
  "key8": "joERNFoKRUS2nBQy4ynuTRmshcaXo3E7DfG9rXbA4AdVUmCiA2u4ZedUyjThbKJs7TeqRVrcT8dRFxoJDpqwJRr",
  "key9": "4mbJzBQTq3x98Jd2dtoMaxACG1ktLXD5J4o5gpovFeXara1TdfzGAoBUbgMqjDvVx8mE3PVoUPZcrMDthGrbxWQU",
  "key10": "5szThhTWCygHZumQY8ZyaTKpPUpHHvK5HL2pBgqiBaSDfvUsuf6nbexBeSovmWWc8XkbPvo7FzzW5MyYCZG65Ufi",
  "key11": "5go5byQQw23RRbwkKTGJryBuakRqgdriSpNv9xJN85m72iXKSDHu6vCKXBjPLMxgHbuHf37RUQGCTftRZqNAuN3U",
  "key12": "3pSKapwUoVKDLwQpw17J5FFtitQq7hBNQByDn5QxwPFGmGTDq2URM59msPd6yPejM2Q8rr4AMrNivuBYHdzzXD6Y",
  "key13": "42hseGmkM3w6SKGm5MCnNJwwfNqDmLX34DCExdPFefRUdc9JxtzNTac2BBvUUs91PJ5EnVytw53cXPKNvE333SVt",
  "key14": "2Xwp3zM7v48r35t749Kn9sHHhRWgMDdbseLPSoRAcTDphMRXSUqaWKAzE8kaLGuJPr78f8CL24BLdNL8VD1ZNYQD",
  "key15": "4rjoAhYHGVdwbaBupQCawZ3hv7cUTCUJFpkVSJ1ABQSFEKueMnheCbNajBKMDUL7byeUKijPKKLybMHuHdjQGWPD",
  "key16": "3nu3Ah3WGdqFewnrQf2pXkLA5yvMEDrMEd5wzonf1odjVA7y7TnzeK8QNYexNP7PhgQojgEhi1YPpeLb9vdSTbMu",
  "key17": "2xbJxYW7p1C7WmRKGuBgMgjSZ9fe1KiP8WacWWzE2ntUPztqc43PnKpGVo8fDJtAiVmLqxRLMSkkJQWLtdHHvbq",
  "key18": "5wtopYwxpDXuAfUfCuYAAFZZcd6KCR195D1M6ASf1FkBPfAtdiXXb1dcgs7KU1g3mRKMym4P5wMDepw2ug3Mjhz4",
  "key19": "2rKSiEsfqT3D3Brfw3SuYxpTVJfSNJLkTw6Uj9x17fWgm5oAs37kXEQRptCBdx9qAiFVXQDtK38b1kEd4Mn64rzq",
  "key20": "33oA1tPS2YT8z4dm5rfW4a6fBXHmm2f3Mpk5g5GG4ZVmputvNV1Y71tFUs3ApJk4PmbvozJsCoGBGhAw3uYyQh3a",
  "key21": "3GZ6XTXsf4HpRT2BrMeTZn8oFiUW6AXE42rDmXJ1THAMYAhYheu2P2Bj1FBjNHu5cYaFVBAPCPPusUPnsZVecpzT",
  "key22": "5ed8m8Ckz9A6VXWNiiUebTwt7xrQZSVkzGrg1roUX8eLoDNnVr3XZnZTGPa2ran74hVuJDyzmeBwqJN9BgeFsnwK",
  "key23": "2hiKPmVajz6DPTGeC5AFMPgCLNiZQbexgh1wnpLUKFUG1S3nP2H345Jcvb56jLDpqxx7dESVU1amUMNzf725sTJV",
  "key24": "41Aq6CPSCCiyPKmrfwmQguBXgNtpnDaUUTbc4CmLZF6v8ni6TsnVZyJ67NCph9XDzYeDh3PeZnNpmUUCgwvk4xMS",
  "key25": "3sebc49hNcXMMezXczC9Yw5irzgaZG6hgWrSKBEM1BfuGCYVHqi14DYDVSBHuKAAz8mcjCWP9AE1MLLML4iJQ4iz",
  "key26": "4FKZb7n25bFRfazJuttr4W18iSHbVW3GhRLdAHDeWkMAB3y35hubQVvD5AY95ozweQYmc4dyfzkaNnoswXhFJRhe",
  "key27": "4vRMPNSdSGfyRBhikGaK7BhChBJVStbmkRxtWP4xJK5LSoEDaJHeCSB5DRtLxewyJ66Hrr3drZN4NRYxsyMv6Mw6",
  "key28": "4sQ84JnRvNcbzTLvuVuVcvkSgupXMLiXKySjPWLZM5NuSB5sWGWRQpwfcPXpyuNtQVwJAoHdeLvHLT3iYVmynJjx",
  "key29": "5bbEdx3SpDZtTPC3kBKGepoiQMUQbZRyPNcmFvX5MGstCrmhPV59idamBK9LupjFC31jUxjwrUt1NQP2TqVX4mFG",
  "key30": "24v8ZGpoBnaFMWpxyzUdKs8MenRVq44HbyTkeNzxsjUXZTXXcP79dhMvNFY6FSW1mmo9uao46fX2ZcfWc3q1Zz9y"
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
