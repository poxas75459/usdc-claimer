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
    "63Gi9TX4NJmZ47MZJEBEb8WML1wxw41RygyLVcUoEYiUYjRZqUYJn1BdzZg1i5XqrD1E7zdNLmg4JqhxJkkK4jrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dXPH76PER2F5DTJfhw6A8mpkr2CeB5t2GWhACdvUcaMkiXYi78VLD84AqHp498qmn8tP8zx32PsJzEzxsYKte6N",
  "key1": "38reDBQDAtM19ck38Ed7vB4rm32f6HThWmq5eVLtcdA6W16qgxtwp5hXWQZmfJgU4f2DATMYG6nYBSEXQFk6k55m",
  "key2": "2K3iAT3x7UnYbE6jdbX1nR7tCCPQN2w2AkTc9iANnP2qUHJZ8XoFTU1vWEXYykwt8yCDYFXH9ffCakn967VtXtSV",
  "key3": "2TVVETS4vmnKG5GbnrSsU7W1BFqQq3LWu1d7y5LH3tnuHfDven4D5uUjfNqL9Z5aAUemoVebka3ExbNovwtPMhMF",
  "key4": "3jkjumLutat3pgeLsnNfbbbsR8x8DJCWpdmg3b66FvkcJ7irBfKRHvispZf8kPVE2rHsc3QQiaJcmjhCRAcuwbtK",
  "key5": "Hjqfjh9rAeUWGwhmMsu6UEzGKte2dCjeEyD8QruTuKE9aaazVnFBP7CF2cvnn4pU5S8sWGnV719WcduxDfMe45Y",
  "key6": "5Go8aVUSW8rNh3q6ooDoodRJ9XHw8Bz1PXjiFsHDveXzdxW5TjhcA4upKwoXwhM65duthvcGSuSR1HBZYcoen7sM",
  "key7": "5kcfWkLz9oRssF4w28KQjnfSSAekBTc1wseKv9Aqmgrmb7omLyG2oAkdLZy8DBLvsBGN3e77MLumSX3WS54tJsGU",
  "key8": "3QnKpxqPFRhRYxdkQdF9aWZ891NcanvputGrdgQs6jajkTZJyLjTRsm41fqLSQ31ph7sYtE6wyUX3msugegGxpb",
  "key9": "9rDTuFvVTYxW53AWztQ5Xk3FzT4A4bkub2MX5qEAN8ZFvUc7VQ8uDbfUtXSCabGk4cJYvGKmFTLgSG9HbnF9ZQZ",
  "key10": "2WJNUDcLxgzxkxn7dRHYKCWACETNAF26rsCFSa1thjL5uacxx8zFZSjyxPMhQncoEWneQ3a89T82xjh15HoWpQJi",
  "key11": "oBa75vst1wRKHPEaVknTQSWGVyWwerHEQn4gtY2ADXobZBLago8sN14TTgCkWbpY3f1HeTBX4r9pUeZqghn7e7Y",
  "key12": "4iMoqfsPwwg9G1d55hSdMzBdM3MqmZsEWiHpSZaqAW1yXZar85smiMbeA96TJrvpzFdZTg5aPgfmr141L7ccRYyW",
  "key13": "4q49hftzfvm9hLNcKP1RoqkSoSrc9P1hWXWVjUyTmbxmdCUJqmUXQBQjQt8Rt5o7nhnJ1UmpfEigaBr3aPA5Ae1F",
  "key14": "4CjpS8HnGP6FYgabUoPDVTABqeGMJCHF3K8rzcVPYmY9D3hxUhpn8AGdXGn6LyTPCbaNGBeRktaPdn9Fnn7YkJ1x",
  "key15": "4qTNAP6qdMK9DhHhyjZgdy9rqyBmR4nok7vgN64jzyqUFrN9QNjkang1nXsCXSZTXfGixPeDntDjpbYvaqCQjKSS",
  "key16": "5bYfHLwTpnEQ1ET51y5JeYCiTnKcc2BrPbAmQfnD2irYSm6Pq4qESLaUdpSRTNCigX2m87VsAGgMwMEndoqS2k4X",
  "key17": "3SgL7aHkQ7QFPVW4n6HEVmTjY9JjY8TrQk7QtDrHWskmVpaoJQ1oQRxhGCXsigej5RXGwK7hHHYvgJ8rnb2QF7X",
  "key18": "3eDwfNX1L2gHgDwDgAsjhNpU9hU1Wai38Cz64WmwNHG3h2sbEe9SKZP1NWiGRkbxgSJ172Duv4zM3aidqnaX1NEu",
  "key19": "5ps6bLAzztdU9a3obNg2hCHN78EwXgkqLPJ7tCfS5RJ8qud9Hu896XSvuzUTGGieqPJo8WbSLwtj41ouqTbJPXzi",
  "key20": "w2jT4UhfMVFvAWAZu8PXhC4fpc47VefTnFqwTJcRKt9PFYdLTgm6NZ9sinFwpXrtobarKBNEuXvXWPXixmmBCCj",
  "key21": "5FzRXazhuvKiFCn43hk3g6XDb8uZbGfWsnGr7j3vfcXKyCqiAGEBYM3aWrbNERAQuNCHXM77R74zzwMesYnFVc6d",
  "key22": "TbpPzRdrYb5Eqq6V19BUFJA6cxT6tp6UJ7nk2RYDZAPTQUQWCitqZrkwhQM9Jz1L6k7FSXcn5Yoj5naAACMig1j",
  "key23": "4vmzLwdPnjmedGAJ3U61iKAgxiWyGMSLUB7RwRZ2CERRLwqyjL3PhTmb9jA6JCPfztaBjaDVrnB8Ka9wkYyd4pPg",
  "key24": "2oWGsuQLayErf3qEH8v3B1QrGe8Nx1GJB8cL98jawyJQnqppRkjTQEqLpnaniK7YRgysBntyHthdsXBVwXukEtWT",
  "key25": "4knLv3aCLSZysEPSQxZN7DrPqNFVewT68jUogeY4ZJRgqk5cDKXBcDGcuHGceTU4fYducJhuXeeGrmoSw1VDRCvc",
  "key26": "3UdoPnALkhK4qiVVXPBEh5d3DL6ddm9Z4ouKpyPGZoTUUs999i7QHLbGEcnnwoy8nZMoriTem5PHhYMSy8myhG2F",
  "key27": "BS6GKb4LLLNZP8AMYJL2QX6pKbwMf8L8gCfjFZoP6j2tSmVtJdpg2dVTjMKZ5jCNKoYBLQGEb2mspDwUz4PisGJ",
  "key28": "2E6AFKzcjGgaR6k58kMXMGatJf2GZjaDEyWnqBe125kkjN9a6hZHy1FKvxKrsDiZWdpaSYHypjWn2opVM8KcGALM",
  "key29": "2NFqGKN1N8uRfejqyEnPJkCGEMtnNkXwHEXVkrJMtA6cDZ9B2iANUc6FbqCMNMU83FdFPBrQsTFzhKdf9c1p1Hjt",
  "key30": "HGAUxPpjVwNaVsvHNMSgqnyvC4atXkYPsaFByiVfZsid6pQ19ZMUmqNe3qURMoacUPnv36Nyf2TQzhieaqXTEZt"
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
