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
    "3cmkuDEjgXKT5GXrdjUsmPRUH8hYuzEPdMBAvc7d8A427RWcEHYtoNHQB9fH84MfLb7CTUyNTx4GF8Vpk5HSNQxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67bi96QZ9fXUeaGKRs1UUnTmuYRdj51RJYTgQYa2R8skWsBYaXKhxQDtHzczyLRPsf4MBz7X6WFLyMiWnpyzSTrf",
  "key1": "66HWfggzAny15zWezdjSK9fFRZQQi5YZzAi6U4qiCDK4PMJ7L4moubiDFzr7t7qM6X97w2khgMio9UrnCCSk4TnZ",
  "key2": "2WnvuDWnwCNjJFQZK3dz9P4vnVJHEEXMktPvgFonwB5JyCuAmGrBmQooHQLRXF95Em58bV8osZpvK1CKoBEZJt4V",
  "key3": "4UdVS9399TNpW1bC6Vny5dTgz7Zcv3Jm5qRgUmaHECzP3LPP5JJecXLaRMDFDaDm4V7nATN239o85R7ctdEBM39V",
  "key4": "5GNbCDozDc8W91c43kzdphTPiJZaeXjsu9Nnte1DtHFx8H1gJBvPJyHqiQ7Jb7eDZe9hz8j66jKYLz5ig3as37uZ",
  "key5": "jFzozNn1czMSXokSxgK6uafn5fWFQLnHzGJ7kpAYAWtE4oPBC4g4uDEbrHisMFTE5kmocjbNa3r5dEigkmrpy7U",
  "key6": "hszY2eCSXkfyznQmP6KfucrxU9jUQWmWamQ6YqZ24pbBcz42vE79hvoSK1szh4wMyDGDzcMysLyXnhxTpa9CWJR",
  "key7": "2MyP6omyCiRCVxdocopBei2wdLxcjminNEXzdD5Dv8ShmSLGRqMUmS3Ss6FVGpQoLFM1Lew9NAjqZ7akiP6YcAtz",
  "key8": "63fd14Nc5F8AoYXMExXBXqeALHsN7aiEfHECeq8f6KfT4J6papQNQxXEPHscsGDfjkVUSvFaB5nSgG6MBrhbEPPB",
  "key9": "5Ek973TpAA4RWug4bAUcV5JZpcTMr2KS4HMfhMFWrNLMA5EkfsV796AXkG1AasMABuhbce1TYGbj2tbkJnoxr5jQ",
  "key10": "4jDKQKNa1kmf5XsNeuTqj7HevRX9KAcF3nLaNvunz8eaHPCi7TcLguxq556AwzBm2pSNh7FGU9Hyb8cBsdjwySmi",
  "key11": "3sfrpn7craXHkiTdzN1tp62BcBwBdTBUYNwz5Ja3F6whjjS3FDiaY7Q5gP6cmT7ybdQhqcu3ogiLaVc11jQFsnqq",
  "key12": "46MCGV3hPXyhBtLfDKpKmHwLKtpg5wh3NmLm4FJuJVfqv8dy2bcdTyrbKm4eMRHv3XhRq7C96XmW9PRWV1pdaQc8",
  "key13": "4q6g9VZeJa1uVUDF2v4oAT6RtGqTNoQUbWFcvqpSvhP1vLGBB2AhQtPgvXMzjaPxvxRzRYpMVJH5bNAQe3qoe7GP",
  "key14": "49J6B9nhnHxebJ5swENmAbGsNB2vyGpvfhLwxrkVuqFt4kyeEpsi9Kv71KxpMBXKqSVnRDpwcGDs2ZPx1NNX853T",
  "key15": "5LmhAMMEQNMqt6VVeJQhq1dveBUREnhPRSS5ANBDUsE7o5oBC31AiDANZAeUhRmzaoF19snGzkYMneE7yQFDHFcW",
  "key16": "5cakoVJUbh68A7KAjQrxn9TN25qQJHcVdKZAE1o7HgDNqycBoovq9n6eTynLDadqCQgHzEu1WFfV8LTgScG8oVgw",
  "key17": "5jPw7De9Z1X6gHDpC5RU3Y5Km8X41GhSfod7sS6jY2xhKmXX5A3nnH7AiGWR3L8x2wSsa4ansdFbnaxEyuY7e432",
  "key18": "5NttRHNEqzHHdb2pJ3C5LaMCZuQriWvT5sSdHYEDhK4Jwecv96J2CD513EzHU89EmHotboBzXrVdTauPdndh3HWS",
  "key19": "5HA13g2P1Ye2kA6aUUGsf9HbMX5igFx3FZg3vyJLWS4kZGY6qfnzQgNFx5936p7SMn34JbQyQW39DssW74SNTmB1",
  "key20": "4ZduyTjGCvpGF8UhHmD3G3Sc9pEqrEtURdXT1A125PPojyyPWRMjPqBk7XqfmcGtaq39Gm5rRhA76h7iR5Ka2Jz1",
  "key21": "2jS2uWkosLjRqP7QdjsX2XgEF2NXPQU6sd8mbjadahvXQbM79iX3fNmEAqgAc1NtmqJgg83p3iQ8Addd2wMjySfg",
  "key22": "3pmQ9oDJjAdfyv3A5krA3tYtd2Uj5YLQJsviwQJwo8sqwwrL5KuY4riGavd3XijWDtgxLZA5gLT5oMMGPLjEVs5j",
  "key23": "wRMgaoCYzoTuMuTwLtNSU8FGLrrkqeYAaJtGDUQEpJ2frddDXSn5uLqRZkLT74YJmQUMyGMtfBhePVSi7AixYPv",
  "key24": "5zuo7xZP3sF23psPon84c7GogCz6bhkJbBzNGThcah6e23WhaD4af5qHRoF2mcPFqC4HuYYtwwmpqCFKcpofro5t",
  "key25": "4tS4tr4w9Mf4gpzSBGiinZCMyDfMdt85VxpChzt8gHsuFrGBzpm4EJQbc8vh4tP4xC2PkhoSNuD47Zvi7WYfDHHB",
  "key26": "2o2RAe1V9o9ozhn3kJWucGLpqo7tMVErYtxZT4WsxupzvqtZf8tkbf5XAs6WXSoj77KvCdgjmot7RjaovCFFBHN2",
  "key27": "53k8RguR11nfz3fmpn5QMa3TWFeZvGBM6BVz9xmgz9B2SCRQLDsc5K5WrSWqG1GUWVzefUG9pHpyUTNv6dJ2HNZv"
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
