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
    "2CTyq5Uo7q77DX6kLniNSVwDrU8XJ4mEEKNR3JTzG2X2JBdZAxq1NPoNC3JQJC96aPpoKyPSJBtjaKqaiB8gyMQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pwD9YsMpdoVg3EqUX3mVQh3Paaedb2u9o3CBm2ucAHp1GNLSUrfttFUABDxFB19iCb2fG19RuQmjWiA5tsev9eF",
  "key1": "2sfLxeuG851bRPrih76LJ7uxQKBNtkjpXwuDzXYaf1vnyByi83xu3KzsfmFSNBi9ufFLGPApv7ppcfT4gxCKNbZ3",
  "key2": "4LxjbKpZWe3ozXtEYMR1Fh5NxcAkuNpRc4Fuou6Lo3yZXcAD648AegexX8Yw24FvCAh147ECgEzpXGaoMxkRGqSC",
  "key3": "4CEDGfviRXYXBix7eMqh462jqbm87pXBFSbk8aGgvPKGWAaYgjUbj8cXAWCppyh3vhEfAkLnwsEhcMJyaaU3CPs6",
  "key4": "2ZS7JAkFHfdWLz9i9vM1AsrsyMWFGQGzKnhm4eaCKdpnvy2XVKmtKgzwVGJWXM7TaPh5qoZLFCmvJn1gsTYzhL5p",
  "key5": "4tJxLu2QyRNisFDDSNZQQ61wSCaKnnoCtML69Nk621NdWKzENyoT97nVcdZ97x14kv9GVBAUuXmS53zbtk1kr8ps",
  "key6": "48r5AGkvfbj3iivyYrPWeomSrVdxrjqVN2PaxM33kbCseyGsuLhcDMEgwbgg69peCa3PMG35i6JMMFwLmpMiin5A",
  "key7": "3Qo72K982RW4LajUvCTWSPzHyRJjXKrzNHrM2hecYmFPZcuY8BRjU3MSjp4gxUhAQmXhrLERLQpfZB6T48nTjkyd",
  "key8": "yVDKrycpbnsBEQU3pJvhj9qmg7h5Qv9PziKsNokp2f8P1r44NwFr2YbntUR3ciaerreH3hXJaccQTcZdtDfE7Fd",
  "key9": "2naSHPXoCabZvq89NPAHmNKHrrPuHKCnyk6avBnbGMQzsCTxeXgDZN51zcg3jqwjUMWViVKz6BDM2hjehySSa8k8",
  "key10": "649yCLxKq6pTQZCRFFBNiesa1UYtTakjPE3bveD8tMyzaZgnjoyAp3aqqqfCVUAcdh9Nn5BvskZ6iRfScxVdLPPZ",
  "key11": "kLDf3sWYSW7itU25jPtbxoES76XSw4Tech5meqhYJNbKy1NHiLVsrRaBsBpct12XWiULTteiqpg6PZBwcVukafU",
  "key12": "5jY9x5izuTmwbCv3Fk4d4gTuGheM1H2t3SZ5Rb7PZx8ZZeENAeRN8T8K4HpbgApG9Rny1fFEuaM6BBqDQK6oT7Q5",
  "key13": "5PEFKQvRjfJHDuKMxssm31L3WFDbJCZw5f2mzxHqBTcP47reDjBXBXxitNFqVJJPhM5Z9hZ2NwjF4FKcYMmLQBsd",
  "key14": "31idLpVmQeckSTb3xRyUqToH6fzcQp5DDEvrebBF2giXKEfmW1FBpeabTJLFtBMwGhwwEwqYTbP4q2cFQsU8VH2y",
  "key15": "2D3UVwEkmwnPs1GTUt36c4ZnzZx5gwquR8x7kfXbcB7rZLPdoE8EWaoUAqeUEhFDFLzExpee2Cn2VDG8DVziyj2c",
  "key16": "2DS6nXUhzm3BP6aHGwJopqh7Ek6qBRsF6m153Pxbz7akCLQ6QNY5J9sXks2VQLE2BGfLKUs4xVoov7AWUMWUiVA",
  "key17": "5MmPJvRDjL5EQz6NdjMoX8bHSTh8dB6csnrhkDhoPYE6S4XWgVrxz1Zii7DTTKLXQqKqeVYqNjTJAQiQTgx86vSS",
  "key18": "5ztSdiTHpLUiUogwff1dm9mfiAzrCL41XvQtFLCbBQFaoyZuckdKMWJiHZ4fvwMqdxajGG2Zim5pSfvSofCk7j6n",
  "key19": "57emma1xAURkTj78jyT1dRpaf2sxhtffTvy2LidNqwfqvAXcV7p87XaMxrrRc4ULRm8QwGEaK8XE5tugH7GUAVU9",
  "key20": "3SP9gxXhGy59NuSadqxXxPMpEEcwz8zDrSm9MFEvGi45tGmPMxRi8LRJBq3rfDKGp5jzDnPq83iZCqzLttpSxunq",
  "key21": "64MQrMiKa1nMXj4R6EWzmhxKkrd2Ku1YmNPr8zCQidydQJh15ivKnrhYrd3CdBacyHfcvpSQ61ASAsa7qwb2SjPU",
  "key22": "2N1Trpyo2Syzy3FdYQJMNno5rMS2aE2fmrCiuEH5bsKxJKdhjVcJyyfZqegy22RRmJRGStauSvrMKfgNinmdnBTd",
  "key23": "4xG9WYasdmFLCAqFsimJSbGdtcZ3kFtaQZRyWg5HcnRPnVnrzTKnCaGitKpmyTun9bRukkDn841YBNaM6VyAGfZ6",
  "key24": "CQTPkR3S6Zi68K3G6Zze2pfVFEKdFAEqkKLWkPQMMWGLDQ7tHFaYQPFD2MC5u9pJwPwtpcDsAe1XM86PVi6hX4d",
  "key25": "5bdMHmKxHi2ChYNdKXqvfVCxwfn7XAr4TntmMxzapk9SMa64K7ATp7NF5q6ovNWPrYSDZM6MdP8UEd4R9mn8xj8W",
  "key26": "5Liwjyffhfqn6cLzTiUZwk2BCycRGMVgZBxxB2FQbBSK1AAWqqh3Kgz5W4VSc2eJK6fHWT2go5YcxG3Ebdg5ofdc",
  "key27": "4Gm2ascpAq1HThrosWLNft7uyASnJuxZPjEKD2kdMvrCkxB1Szz5Wid1H2DUTiJfsB7KJz8cJiTZ1KDEbNmFESk5",
  "key28": "5c7oZDFq1kA6K8kuoZ6jX8Uh6mm1Se5TFWUD5mWQzm3e89YJLAnDDFUTsamgLEtctxeUvpSoBQricXU7FmXWepae",
  "key29": "2QWp9oSh1rLBtwkpbbRRZQ7Q22Cs7HEFwhLEHr55vgtQCae88q4azjwULyVLWoMJfNEvyRvdsXDw2HK3YMZfyGho",
  "key30": "44Faw1Z1tgY7imKXEjjQiLobqPFPjtHP4sTvbY6D4X9zT9AR6FyCcz3Wnp1XBk2hTPm8bqoDL38jYKnWD5JJjTvB",
  "key31": "3GWmZs6sTeqEd1upmJpisoJfL9ZkrT22g3JdbYFkMrU2ZMEs7j7BRKpMqMtPBnpGfdYsG4x1LKTCmgJtthfAN6bo",
  "key32": "3AYNmw2feJpYKTdf4bpBCb9CXdbFDjYv6JtvLe3bE5iUbYYg2RPUqCKJBaMuv3FUV3fpER6yko3CMqpQ1bPryLWP",
  "key33": "5ypTWs1k38NFXiKaaDRoyjtxMtuL7ftEZtechTMdNEmy9JXFcLEMeP3hWqusYiZWkxf7Dn2reaSx2K1Wa6aTob7B",
  "key34": "4qYjbhVw4CAi4SMtVLeQ1G6DWzfWUVYMPJXjZhAWi747BqrNYY2WNETEW2xUyvcpxYMMWVBA7hQTN9WG3SAQbGZj"
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
