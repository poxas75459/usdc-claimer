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
    "2mwSiVtTcJzM3rJSSeGAsqY1W5x7RqU4ww9QnShWJgMH13PmNaoijCugSHa7zu4s6KB5WYyVvwKfBxXbp8FwHBtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "549tzKNyUsYMjghVYLoCdCZHwxGWdNSkZMS3aPQKdJqP36vc2fexpccZ4YaMHs1VEXZdtULh3A5qBtfX8Y1YAWKQ",
  "key1": "2XUasDCFL2Jj28pP7Mvxo8u8UJpTnoyvU7EHp6B4DREg5vVVErp7yHY2AXK8TwgUyPuDQAayFuhGRNiHj9VhKvXb",
  "key2": "3TsCtbiKvTLLgeC4VJ7sVAdymVBk9h4ixY3ZtcYR7MB6XfGhpDc4ZbYYSJHMBzk48WgV8c6vJLUkmDavcB8yNJ1t",
  "key3": "3Yse4yz3phJVBQVtM4W519AbsdS3Rvy2PmGW9hrUkSoiCyeQPyjfArcEwV7dvHGLt86EDFdB9jCg4fcq7BkcMSHV",
  "key4": "5f7yp8e7uHamEgqvdm66CDSPs9kyyY3qdC3h3vcZYEZCT8LtiMABv6srUej3dxymn3RszpCcopA3CNTZv5oxzZqt",
  "key5": "43QbRh3ChhgTg2tqoUfiLhbRYkfpadV77Drexixd8ktrzvsMpcYvcdc8WUHscxBgN7DkEF73MyRAvJD39284ERHX",
  "key6": "c2VnZGAjTocwMWWmB4XPyz3fC7tbcHkf4T8Uc9V4rCrYi39yGn8sTrtAuxdv72ErXzYBBpYXUiq5toG28h3Uskn",
  "key7": "5jQmH19wYZ65nhsr82RZqjD68M7xtLGvgTXPx68SyBKJwUSX9YafTTusCPRztX7au6XHxmuEFSBcZtQbQYierknM",
  "key8": "4ptmFcxwvDGvU4UAnhdPE34ApTN4p1RHgsB1thzWy3LuBe2ctsc4wGjpgooLYGTgYFCipQ6qHs5ivgaJQquUmPck",
  "key9": "5ZxHskqktqZ4AN7oEPAcowbm1S992aaBsu4cgj7N41aCi9GLj9KFDT9yVJucs7G3FyVMpVhUy8aaCNffyPLnNUTj",
  "key10": "2aVcU2dWGT1prYmcCdCsyUDM8naNdVJavLzFX3kLtXMm8TTBbQfSB9kNMXB3m8i2trwZFEyanJtnXFx6YXETtziA",
  "key11": "4T1LTU4Bhk11mKd3DvrrR4yPE5hkfdbAC7bpR6RiEuvgZCpZ65UnYtEQWCWTJXpd5UW5tEvkkqV95h4aaGhcYpZX",
  "key12": "565RhicbQiKyfH6S3sAEV5AX6LuRDaeKMGno4A8Mey8ggorYyMfkUaz59xLd8aAcsGe7AdFsYgHJcpnGTXNK6C2M",
  "key13": "oUawr38DArFjT9jh4D1EJfGEbZt2ggGecg19GzsQMk9XyMCHQmRpyYoQDg4tznKJRkQM71tUviPQTT2bahuSy19",
  "key14": "6jpZ1WDg6FW9XwGYCzyPA7XsbUVieoQRKPab1aZeCSXJJnx7TyAhyDeGAzEuJFV2ByGmh8fQHekZqffaTs6c6u4",
  "key15": "5ism9jND2mgWCrMYv38PyAeLbz5kmiUDGPjMqejnEXuG3tEZgT3MecQ6oc42ds4k1Y4vxdfpVEbmNQceY8q4ycL",
  "key16": "2BHnpQc9FksjxcVAPmPMmXL1bcbSkDXkQQzJTWE9zAZjh5o5nMBnZTisrEfdPgCvPSeBhNufhNVdJGNcYsEGgxdH",
  "key17": "39LTJMTiGEFKF4qja5ziZSECX9NX1hdgnyVPD1bWWfk9ztkWEXUdtW1YoLzGnmGP1N1NpxCXL3KTfQZFAcsy8s3G",
  "key18": "4ZTMSsQHQTLQbQdFJMs87yz4e4k1Jp3yU3gufRBHwcrvrbiDntSg5nwK47f5PDnmDtptSKqX1p5uxXx2ZjDh9BP",
  "key19": "2WtyzjpUFJcfescPKunmWXCYXVGy2YtLZRkogSGXMLxy6bC7Cqmx5TdK3SCRif9XDBYqv6w8riTQRH8rFFvu4K52",
  "key20": "va5P26X6EDL8aAkT2bPwT3y7s4Yh6fXsWNeFuFkm8YBpaMZdvtBKaCAr6NuKpHxJhFnajmG4HHVpmNnEVk3FBcn",
  "key21": "3tVqKFcaDMemxs9g5qVrWhBgiLQJJARQRxyHcE8BpNf8F2giAbtzUGm4cXmxES6eibjATLjuUhrGq6HxuxmpsPQf",
  "key22": "3U81x2XhPYhmRJSKvRXYmjkKn2TrsmLXGGeL4FLZ81orkxYDtMYhu92SgJCa7bvyDNB2yYqu8RLNQufjMgGsZ3JY",
  "key23": "4KoinRowdEY4EpcpefJSUrpNLaPnCNRNQQLRuXc5oFVeUKqFuQwvoFgmypEhnvuAh9P7GpmRaMjjyKBvjRsoLwBv",
  "key24": "5MDoeTwzvRB5BHtVYDNeX41npcWpPagPcUjXgsWdCi2jdCWYmJFkF1w3ntGXB1S7p8PZTrb4GVzynvErNFUxELuY",
  "key25": "4Qbdp786wtQEKPa6aWzFpbhZ4TomUdsod2fZSXguHBB3AjR6ujfFKuVKsBJcdVeg8GveYTqpZ6EQesthuQcqXeFw",
  "key26": "2btBoHZCGonJgSQPeFQNyfFGLDska9EAu5gu1QQU3hBJh5643PqkNTheGqonRjke1Yk7CjVu3HNSvsfhnjd6MPWy",
  "key27": "5WbjkzrtamKemx52Vvkyfr6Mthee9UX71QPLBKq9ta9bd2ZSCLE8tAW33pvJSwP2iDQwZ3QEu6sce5oJ5UrnszRp",
  "key28": "4pghxP86Frqn65ZRgcj1kNcp2qMmryKB7A2qYAjZn4XrHT27ffJeZ9P6Gv1YtiR86yFYT2Do8ukzrCD7MaM2EUrU"
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
