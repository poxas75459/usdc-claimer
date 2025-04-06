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
    "2nEkgvNcLftYVHmmauKvpJQ1stR6ZUdwcUoxH8KDZW8ojFhvoe2zFv6LCyaKfdKxom2LqnQaLrfGjAF4CgiUdf1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bnFrnFknT5UNo5G64j3yaGX3EawNddcEf6koQhJvzuEXpsWNAvHqapZ7wWuP8MTxEe2nK6VK8GEWHwBXGDnDMur",
  "key1": "2sifbeFyEbRQd1CYb17s9JqqhLFa5W7wHwjTMavLEDdTHyGxRhBYxo586vcnQB5CFRNCxdhzUnRvKxQCbCZ89soP",
  "key2": "tWhj7ZVF9CZ4VEEckYc2fHyeVDxjcoHqBgcodw9X2Mh3LFtZPjbjP2G79rrdf8aXBiL78sB78tGhnRE6yDrXEBV",
  "key3": "5kVmvJrC8Q6ZEvJGNZk2MMcQGkiEMCLtRNrLc29VuqTAjuvGWLxUUA1meY4iuCEpU64bKYsemxK94S43Gxnhtykd",
  "key4": "3KnpFEs1gFsVQZ5Gr1J5y915A3nuBpmYuUUid68GseAu8RGzRXfJ81dHE5ZYc7tsC5xRk85vpS4ymKBKpLEhbWmj",
  "key5": "4PghUX9nfsrrJ8YBe1n3rQRSSLCnm1ooF1iGidTwNe7WeafTxkdCLvCuAUHcV65aBVqYyjDDskbApL5Xvz1yn279",
  "key6": "4k8aD9sdL6hahoSkrnYVN7ihQAPD7mm1U5JrszYGSiBDF5nbuTkZEBHvZ4ufcf8pDNJriP6yhR5zC6KUpixq93jf",
  "key7": "2w3Xty8UCa31YgWv7cuU2hhuJZXGZ25LPxBkPUT1EUNo4y2VsMafP8zkVcErgZbkX5M31Y32a4XpzssZ4fPcFEzB",
  "key8": "2rG8NVni8KPvFELrSaUv9uD4NdKgBTfhDyyZCaDBBNVkkQYVvWdsVVqqo43tdLm2PuwocrmSm8KwoiTD8tD2gupd",
  "key9": "5MmNFnSdx9A9Z1sFnn2XhjEnyP8Nm8yvsYp13BQCzWs33Bw9q7BuZ6i454v7YD1n6ScX6mpBypybYxAkueVHzgzM",
  "key10": "3cKjRJWKtNeeZSJcB5Th9Ruz4Vx68pEMcE5127BQvpgsxwYduAb8sHVrZ9GGKWRHYtgj7XrVF11ThNcsDpeSEtea",
  "key11": "5f3WdPMZvdP2p7SYxVo3ZHGDQGKiADuAtSpjutSzCJp2fg1GoskAGfgXNqz2j9Raj3tqcakSgRg3s4DmvFneTm7h",
  "key12": "55jC1jKjBxweSMXXvG9ocgeihZvigqCHNDkgTGu3ewxFdzzv4gFpLvC1UsdHTGdfsvgRzD66gFgnVx3VerU2uTPt",
  "key13": "4jDXxnimsB484H82fYCSbUBUQUt9dLLJLjPeVyaSrmQU6BuX33fQr4gLXsjybzNUkQM3fv2aXYhfHM21xQVG2JrH",
  "key14": "5uTGy3cozmQwiKGhX6We67Lqk3iBEa6McxdgssV3uGJcQen3RB7ZUKiwQXz4aSgLC8TG7jPr3ZibVwXhXrxgQkZf",
  "key15": "cepBNhbrqpwSn1iHpKLQaZ37NMvFyPZB31HGsxHJAG5oK8v5UN2Ch6aSAmpR89TXMUhao3zcwvQPpWyAVJak3HY",
  "key16": "HztV1gUm3jTtQzqWEyLHHz6KqwkpcQZ11Jv6MXAuw9ang4gLyVkT4SYoitbMRzc4CPfmxPBe4XBJokeAozgsu8o",
  "key17": "5KkUZBTsfLj44i3hBhigNpPdCPt3PbEdFHE6H4M2NbSXZ1nQFoJ8J5Lhfpk9DtC3dxq6xohTCVbUxWZpfkjRcHbd",
  "key18": "52MTaZz1AKxMMWAgCTaV5qDPo4QGnoJU9vHSMmwBuymR2nvU6d7XGJECQsWcvC6oE6X1qsGtHY1o8WYcVhhaysHp",
  "key19": "TU35RASmWPR2anHTi4c26DH7WJn8ZiX9WBmAvqgCxouiksbScJwybVqQUse9qDe74cZQjiqWCwW8ChhwAcPaYwb",
  "key20": "4huQPckzHHsrqBponu5z8c7X4TtELhcTh38kX7yJhj84mwYL2DTgnPBjLuC4EzpUw8gXEnYzTYQysMBibmu1z5Ys",
  "key21": "3HDw7yA3FWgYEZkrwFfCddfg344Rvk8NLvAK74ziJPpAa7wgherYDzLzULhuEwG9ZGU5MMmwgHeaPjVidU45uPdY",
  "key22": "1jKsxzWYSYgYqSCvYj7WnfPTPRjPnrAhRd4LbN48MCegT2e2EYezejn9eDkiogGQfxfk7VNMu823NYWrmdGT4mE",
  "key23": "5nKXeunLRXPLmninvuQbFVvd1xFEzEnsYPSEkSrVdsdE6khJ5TKwjgFdKn4MASaphxLpb5ACgpKw5ryRbE9XvuU5",
  "key24": "RHime4cMFW2RfaDi5pszPfkNUNHTrhsYqQSGxgAAvKzLLTLD3kpRUd31uBstPB6ph4TCo42T6tsQYQ1vRH3TLpY",
  "key25": "2Dsqgq777H13BZgnK8SMKQScVg7nsWnr4EyfJfD7JbTJLZc6prNt4N4RppXKh5kudX32iLgQ4DcGEKzi9iasxNuk",
  "key26": "5CHnKduUgCJ7qAXEm6DwqSCnFMdoBaho2iuKvJRD7cbfEE1wiSkrD7jr6Ryr8pc6GiYXGRT1BjD3N8nHfurK8QdF",
  "key27": "75wHGDBoxZkskAnrEgGBiVNeiFyUsTPStna2dqo1BYJvVQuM3u8x713Aonvj3Q1xbMa7LbWPCaiezU5T3yxY4wV",
  "key28": "2KafN3SHecaHJWaGMW8tqodvxfpUVDHZKncysC57cH3K73iiyUVMU934y8kZkRozQQUpxxvPVUGiU9NnLhbRnSFx",
  "key29": "5qrgyofvA63XEHAV25UoCJWZg95V3c3Ctk2k9U7Q8Z5bpzZPUwr36ZYnpnecNKy8KerPJSSQaeXrmKgHivFxHaoW",
  "key30": "2NCLBT8Sy1qLCXF1r8whKnzUePt1rFeshTApVjAiyEaSwFrAJ6myvt4k4fbFppCY1s7SX6qdSoiqZCCjNd9CeEqp",
  "key31": "5fkY46hpQwLGZDzG3RF24sm7m1P7tXqy4fuQTDgu3cUQ43XRk9nS2r25X95xVn6HfAYygVLFvWTFNgxYfAdRDiDf",
  "key32": "4iQFFryVWcpN19NQMYEyDogVRxLuZGAojSzzdmSkzQQGJ1UQajqVgFw5BUbNQTpnUYpJKKMv48hTuM6c2TtvSopU",
  "key33": "2JRzJkBD9QWsfPp2roTkjX8ErC1uxqF9eiN2cHWkxT4JAx4yrjjXZsmUzyB2xHAhC1vVX2x74RbW7gydUYsiikKN",
  "key34": "46MJohtrtQ2whJ5t2f29wwLvwu5mz8Szx2PUi4XYyR1Sb6xcEKzS8VQWLbc93gEGEMMzARKnuobWvu7ABTwVyoPA",
  "key35": "4MZfyqutnwPZa87oxmQSMb6YZjXJURrFwQ2s2n6YqU7JA5ojV3y5ru6Q2UrDz5RhgWtJGTupn5qdihvZZX7PqgBm",
  "key36": "4frRZa3w23fnLavkT1gAtMkd1SbhtZTPPLe778ut2W1xNgcU3qHFPzR5aWjk9zHZnFiC3TEPixezdNQ5fmz2Zmfx",
  "key37": "24Wzv7XpKiBbVyzxd3x2UHPQfocEYzPr3GKaTwkrHJUw4Ak5zMVcUYU9HfKRyL6xVUeZKHmLGcraiQ1AzDgC51jr",
  "key38": "4v1rpTiYw1RVAoiraDco4dTT7m8AwcCoYjHsdzbkSCWD7SfwkK4h3Z2YjrW57fAQBN54MQ13GSLTz5pRdk9eFNKV",
  "key39": "fVFffDiDyeG3Ue4nTEE1avGeLcfgt3MAePMH48YKteNGpCEzUkC6FYLEMTw8wouK9Xc8DbtCg4yS2RdCmM2Au1W",
  "key40": "3C4mPsEBpqVcZ7142kDFAN3p683mpCfdnteZB8JA9BxTXmTeHQza6CamPq6HnWKsuDmxHXn3Z1aRZHD6QNq8KJxt"
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
