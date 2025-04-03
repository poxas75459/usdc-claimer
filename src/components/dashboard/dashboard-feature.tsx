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
    "xW31sB38RozfxQZDGiu4mVgvdp1HY13TZhrBE49QMDZXrt1pkcjm5qR5QZccXXvgp35TpDrBEdgT59HSQGJMAb7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xqg2Q8dNpu1yhygu1GmUTGWj5sT3K9yFLF5P8jDWogA8mrjiz3HPbab8S8qpcx3ckm43NuZfaxR2cp6n9s7k2hg",
  "key1": "4eqbDQsKk5sBEy3ZNkU3jWccqV1TNk2DDgkD53HAxVPDSYATrN8XRFDmmU8gNLABXzwzU28mAZF2CGUE84eAnxkU",
  "key2": "2Ems7b7gSjZ7SUT8GZYUAR8rTeBkt5qe6eibvUQJf4w44FVX88DWVnYCFVzqdWyfw8tmDCi9kcgWqPLqaytZ4DvT",
  "key3": "63TxFxG1oGk4A6tWhEG6CU6eeppFPZXfnNe68byfQ6grNhqB7hnLSVoczFat1CcrcQ4fm9tswk9A5m4uDuFk21kB",
  "key4": "3cdcUi6LhtQovWe6cXCeb5ySTAgs1T5fbkotPKT9RrcQ8xqcaAgCDM9gD7QMHPC5w1ibgUfEgHPyX2skq5bbv45h",
  "key5": "2XN2tUf7nZDQiLPgk4Uugcjthjc6huRZHAhagud3Anuy7tyqy78h9wfkW1pNvA5pvmxXs3CFNbFNDspVcUDN6FFq",
  "key6": "5iWJQVBRZyFtmNFgXPkQUmzAb3oXmAqf7GWcaFX4SJwndJ8seAS7gNGZhozFJPbFkMYyYZYRunvLM1VtVuaBdsvS",
  "key7": "LpKwHusEECasSnNmHjbVqHvBkm36jtuJZCAGLWzdadiv7cGiwLMDu9917G4NGd4bP21UojNyaRwwruGQugmxm3R",
  "key8": "36wV4RPAdC2buozaeRLCR2GXHhLQJnCgKtqi5F8U8xHexwoEh7GNKy9WyBihRgqWpL3JP23NJP5A3BdubaDppChi",
  "key9": "2HBgDS46fHktkxNFpE5ZeYiRdC7D7bGwARPeanaikzoF2iRgxwcN7LatvAfnMjKbNkZKGt5YZQYbERSFQE8NF79v",
  "key10": "9LbqR3sr6mi2iwPpPy49Z8cARe3ZRCfwpUv1CAPHxGD13XUXpYSMZNpW2XY2CjRt7kvbAeXwDchq4pEtcNiJaHC",
  "key11": "4Zj5XNnX8Lp8SGDW1JkC591Q8cHmcnKyytaRBnFzn3Kpn1Ce1wmwaEP5LDUVZbGU7Xhc9Vq1VKakfUD8mvfxCfRZ",
  "key12": "3FJrgxAuiEyZrieiV1g1UhfVA8DHqYktCrKjnaPz1SjbnM5aYv228DoR17nDpy9i7xRnDf1MDYydJdw8tJ1gjXAc",
  "key13": "4cEB8GBCR8YpJxvZbh6m71B9XmHPbFsAD5743mMx8qPpa5RQuqgAF6hgmaUqpxVjGMwgGZJVcijrfsr7S81DvV5q",
  "key14": "4tUn2BNKVFcSrLeuSgkxDVyykGy3Pj8XAardjt4PADHXPojXrNjU7xazD3UUhe8NcBbnsZDZAkVriKjaLPbRq53o",
  "key15": "31QyHHqECcxFpUDeEkRqjdhpuR6ny6t8zFHjQVeiZviqGwfhG9HqH4CtMtNcYS2jZDsYLxqdu62heeKzfChY11Ai",
  "key16": "3yxtq2RpF9n2gj2dGKNkRbSzxZGLbiotwxsNrCnm8zzbv9y5S8JDx95H6HqdVknCz4i4Qvn3kaRTQb56D8HY249A",
  "key17": "4tgkRzJ8V4RXKSHQ86tLK9DzpE1yPhNvbyGbu1bqGdicEMDVqZQLRb8aYdoMR8wgHZEVfNv4Zq6s1WEnf9dZTC9y",
  "key18": "3MHB88WBxajmCNr1RvfEhb6ni1xiETsTY4oZrFQv8tn1TeYmRyAWhHuWx7PF6xHQ1GqhWWUa5LvvKDXh3ec7HRcB",
  "key19": "28wnPVRdxeqRmerM9cQL4TKnV9eoWcNbPDFqbKt1qMYVND4WgGN1NaqJhVV6c93B996df2raCga1E2o16eFnLgPS",
  "key20": "67qpuh9ymhWVW6n2ybnxgbqNuuhtrpUnN64Ns2n77q51obDgqo5mFHQT9JWdp1qouGBVLaa1BUkAe7ebgpT3Mitm",
  "key21": "5A5DiJ3f9gMLbVB2YtKZgLEkZvPjJyK92tgdLbpUVrnCPW2tgPMxB6JWh1YtY3Eb6qouJwWdZ2bDEiSw4jRF9Qmn",
  "key22": "2RwrdKJSYFb8iq9hrumwNvd6gwQEH4Ncumvn9ZJrjofR8pZ9aoXxEBecKim53FvufvrMSkSuZdWsm3GpMCHXkN2W",
  "key23": "5RXoEWNkbbQLS7SpDEWquHnCdkcHUxzMSS9ye3umwnnK3eXQyveSHPQTuoxf6vNUHHTjfB2bdNLcFV7b6EksXbjS",
  "key24": "2tXkZqDCvNek51kDPtNmDQ6ndKDajDvpZgsU8BPRcdwgPBFAkguctDYFtobt8tumYqeG7BpJaHGwcuufcmZSaeys",
  "key25": "51DotCnWTKoxRegrB11giVVakMP6AZRsqeXbnM95VxNzCEi7WNkCjpB4WvoncxDf7ZvBB8qMZTUq1LHZTK8KAZrG",
  "key26": "2cLraD33t94qVM7sHgXY3u5ycJhWkTjRh3RRD3VbGLNZz2NUqzZdvv63r99339sid3tgC3STPLMnzhc9HSLhFVKG",
  "key27": "31NSBq4dKFzo1Q2uiCjSPSdwjThRoF44sbGREpddjVpDPZCk5dViWFi85B9J5XbwVGbS9m2yFejCpkVLU4kme7ap",
  "key28": "5jrYKH37NcVhN4b9qpi7iDRPX9zys7X5G1p7aRkk25J6NnYy8mZC3d66zRZv9Bf8WXSNNq24pn82CGqRZosqnu2P",
  "key29": "KDJ5u7MiaeYhqpxjxQByJcqUj8nK2LYWdehQJ28PE3N4KaftXYLTVzHJtPeU2sKXeAtczfXUxqsKVAicWkmYtBg"
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
