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
    "3gbbQdxxiKtiPsUBG5ctdUJKGB47QEQY4MB5RjkSw9BBRhDTKJwGZNLRh894TieFGRVddiQE4qWofuDMbfQCLnmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouaWpW6oJMkSxJnhNnfa1oqY12GNde8g9tfcDtcxVLLshS9Gi7dqc7CMvjMoWv58fxG74QJuQYSuAG6oZ3FGjgd",
  "key1": "3PrFNwSL2vtVKw1ysQ4BJber2PrjPkuiZbmwNQC9GfAcuxKjUB2wZJkLDq5h4bNoA84tjjZHPuaKyNzYuM7iA2iD",
  "key2": "4T6qeQmQXWBD4JfWRSwMaPbZ7Mf4FioooH1YrWGaudCfED3yTn9npUqY6ZV5NTBoPdV9HoYFgxs3suhYzF81u4mU",
  "key3": "2rtLCwDJz3pAea16nzp7GBFUb7UUNiTcTyDPLeFu7f9SbGg2v3uEM1YXaBNHKRi59ZwkFgDB1ya9vLynTcm87v7",
  "key4": "22J1tfCEzqUM1KRkXeZQKQkGrFVRLqHRLU25VSmpsDmPvf519dfdntLxqn8GKkGvvPF2a3qzn3oeTmrLBFYCFMGm",
  "key5": "64bW2o374kvHz76MV8dxhZrPBkfpmzm1zNWZNTeSVdQdLAP7j7TbNyCEd3iepySPZAsyK8wnL3coqK8WY5AzVd66",
  "key6": "52Tsos4jowV3X8SaBoxXSCwSEteg5amV8izgAAhbr5Bqae5gYhhuc3EiuwSQPQSJC7wP5bKmCg6t2Pqe8QxQzT8m",
  "key7": "4E7JNosyg4QVnAcnVJaw85tx2uiG8c36q23b46bGayZwEuZp5xE29sCQz9ZjSdS9QjqoTNzsjWjwgY1E89KwKDQJ",
  "key8": "4ruF45uq4FygrNcwqHuWpu5boYaNo6H8S4uZxuFxjy1jB7pXzyipq53zsXC3p5oAHj1BWFc8PPAbPjzWSkXFi7m3",
  "key9": "5iQLKRpfQq18rMKgNK19iKdtcmLFDJapYpXdgY76nM1FwUtwQKM3PDiUSFJAPg6tYvPjJ2Mbmpr3GKZ348wwsNzb",
  "key10": "25WomQ9dFnBEkwTaypwq2cSCV2682Z17xBGnHnAm1yQWtQRLVzFzzzdhZWczf7q9XpB8AiQLaHGtkFqFpkXD31XR",
  "key11": "XDZhpcNCfK6SFFYNwKjHauQCxK1SXcpVEMhnvKx6zjHYD5wFtR7D5UZYfLNJ2HnafQ4bo9dWHMJTXvBzR7DdYTH",
  "key12": "4oNLWDafPMJs5PTBmN31ZJ41vgnbB9TsyKePQeeeJsazK6zD8eGNMS67NY8R2X7Nh9zm22YmvJM9AeAiihjDAVjh",
  "key13": "rdN8u7UDn4LPre83SVXYEfZXSyWrxPsRvMPXSDMtSThBYHj7qm39fGbsyyaezhzYaE2WjrgsAQC75fkzFppp4Dj",
  "key14": "4zM6HLBqsnyY3p2xkczbAJr9n9TZTedBoJe66LoSnvJ81hzFrnFYhPGLpzqDexaF17Y1Nix7UQE7s2VLZeSdFSao",
  "key15": "nFLcs7UNEPLuiHq3M2tZXKS7sD4Z46uSYr3k1XLuPjooPriPs7Td78Ry7EVzkpakMazTEzRBwvLjc24UMg8Bh44",
  "key16": "4j9vDU4H2j1J1xdrpEaZUpKc6LCqWcCx1HBgGVqga4UWCZGouFmbpG5jomhMkSooQztsee64smcHVamBVJdgWfZJ",
  "key17": "UFjQanTpGQ22NPMBDbNieMQJrsMDgVqcgDg439MNxuL7NEammgVyEMKWVEZxBNXDHmx8EBnZi9piBhVdZbiVpZ1",
  "key18": "2u1uWGQKrJ4BVibPFh6qnjZ3AehNzv6g1sxqPZuAiZB14KuT9WyHvGHrb8rkcM8nhwvvhmj3cv3QGGNEHsgD2Saq",
  "key19": "4u6yHctoNJn5zhipk2EpPxyKfWyoThR6vbX8xMNdNBzpkVu6btiKTXWZKFt9pAnxssePDzdCw5wBTa4HRrAybF9N",
  "key20": "iJ16efFSaBxVrjizYjeuoEABfwpjPJgdEJmRQVxrHj4fKXvVMEemCURGkuZmLeSZrH7h8Gg4FcGvut6UEu7Vkbt",
  "key21": "5qfgPHRcu88ZjRQfQCGuz9PSsNHcXSPnHZJjYh7qMWvnrj75E4wTGkPXu3FcDfG1s8WKftAwyp8KtfTJhHJT39oq",
  "key22": "3CRGiWRqaqE7uXca2ihmn9VZSMBieX5qABrKbNbHFZJ1bf51HrspKmK1sFJDiGtEuMUGZfSZ3LpzGFLqSdqebzsd",
  "key23": "5yEKEA8ffFr71RiWjWDXepTmGcDV1chbAY47weDnXR7of6ryRtTkrPPMsZHy17Ck7tMXS6ouCDdW4jsp3pzMBvvb",
  "key24": "2znKRUSq4qv7o947FrqKxhH3B5eTwVowYMFmuh6kHoN9jtjngGX2wbWKJh5ueXC38S4KSd34ttgmGyx8aLg8k8WC",
  "key25": "ethNsFQb4NKo7iu6h8AzB9xnezuHK5mvFC4W6EUnV6o1hPEaMpuMFQb7g1vnMfDDmDPCCe3YQLu3GFJFaXedqnh"
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
