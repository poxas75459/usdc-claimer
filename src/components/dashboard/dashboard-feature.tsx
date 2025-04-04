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
    "39sBpFRb3CBMvBmNCqsWhjf5Mw8sNr5pXUfri61J9GewsCAG2sMnvZ3ovbYzqnP7URx1zJoyorDaMexnXwCxX7vR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygDxpBEtusWi2Ub2YignfxbthKb7Z3PTe8XcCgErxAjMzSqs6wV87UeY1t8o7nELYnjZi6Hun8BhrS3GTuVkx5D",
  "key1": "4o9E1FZPcbrc5Y4WQ9jLEDPs758N2Lh9BGFMaVpu6Xo1PhnQfgmam1NiFPpBzfEaHATWK1n9LZFth2ZTPw1dkL3f",
  "key2": "2EtA3gXsmTzxTRbooMDDXmve5wVikUQ88kv9k8En35RsJ6Y9uVKhPptCyAnL47MnCsgPaquudstyxP1jcttav7Z1",
  "key3": "X1nR8QnrYTCmoYD3Gvxq2cyxxYaFjdcfk8FzbUZDtj4pqri64ycCqcBUTm1R3dgceBj15BPha8pyLntJo3ButuR",
  "key4": "R5xV9YyKMAsqKDnMqLmzFjY6hvgbajbdeL6AJg7K4i6awW9G2vwWk15H8entvbCYba3fjXzNLXeyLGQ5RRZinVE",
  "key5": "5CfvbByVrE8yyNS7Mq4JhyhwkGzte8abwsT9mRnUGodK7N1X7wAwqKyeqS6GM2C34rp92D5nvJqLBq6aPcCPw4zr",
  "key6": "5Tz2BcxwPNjdZXS8tUsbiMpFVoSLPZJGYAjHz35dtNmb2KXTHCBo283ujcEK7awTqcP4Xar3TXrFHXeM2aRsFfCo",
  "key7": "5qjzfevuNNzFoYmFpB5SA7TVrFVUpBBfT2Yc6pFcEskUMqF7KhUuP7UL4kN7w34UCYtHoac1tLMTjFeFZwnw2nqC",
  "key8": "fNuA7qEXY2dAbQtMRv7AZNSn6txfh4CK97bww4tzi5FWgH5shAM2vhva4TXiRdeBQ77kXyXBQZfyvNBig8Gs47p",
  "key9": "5DhNBhZzr8PHdYnaS7sjKrtwRCYJgR3qqfDtwymrY6Edqs1ehNYmXBi1ezHbfEsu8Axt9sQZJyi524ov6MPyi2GK",
  "key10": "5nYeSkRWtkp3tQNPYeN1d1u1YTUBfVtcrpgn3YbQMND29qRxMWP27RHvmVpzeWhb3QV6zGmbryQPAz6eaxT55tfN",
  "key11": "5U7nNBWVuwQi44wdRP6SwN28i1Uyh92DexWT81SJ9Zm11bb6Y3tKhuChRnjGD35zD9MKd3BzxQnzDt7AuKP3JZRZ",
  "key12": "3bCjkUxjLX1mTXfNz5JpQsXzDSj1X6wdhatY9wawf9Syb8k6zpMiwe6XnKfh1pq9X2yNs3cM7ErJC3ntEe6MapwP",
  "key13": "2etecmESDghScCkzshWPuYSwAtKwphgdGENNoxNtn6Ea7kabc7kgVQJ5zZYvx8cLSzdUnvfHARNJG1asdoEvo7oY",
  "key14": "nDkXxCtjS96HFRQtvEdcRcLnyTqoymyjjb3s7aaKGDWduKzTjJwcWLzcCjpBSKZrCUGKr2L7iUXgod8QtjurR5R",
  "key15": "4DpWKpndG7v9iQVWhdSGntWtXo8K3zvLW9T2WiBidjFLF8iJNUwihiqAtuYd6XDXQAHTyXGAXiWsStW12bJfJPbb",
  "key16": "2VWaFeednV2nY8rFeTe6zCQ3mCoXhaiCmdHVSTNKm7BibYULcEenPVEqQM9d1ULMfPUBKATtRULKoxReRq5WZZEx",
  "key17": "3j9PtsYRTAnNfjiwp6gsVAbVUp2jG8Fr27HmMh9uDzAJwPuhSkbaB6BV2KxMnCF7AroRVS7LEBtnMDmx9eDvwnT3",
  "key18": "yfshqFo2YndMMhSewRXF7PkqtYL3o8xkrtkryorMtSXz9Y7QG2FYM7Doabzx9fbyA6F7S6TH4RBqVxRdSW45Ff4",
  "key19": "faDa5N6cKQNpTkHnSnLR4KBwy2Q37wh9KsimsCkjwgE1W6Px31YW8sP6Mu65uh3GAMKgMiP16HU9FVPMPmaJPNk",
  "key20": "4s5d7xn9iXDzmXoQ5B5xjFKjci8AQAuWVaGt5Jyhe2BDmarMnfvWRQaWVdTDeijq59qStifEJdPhfNoiC1xZF3NP",
  "key21": "3DkKHVDnynBZ7Nu9MS5nCdFEZ1Tr6RYHR9987YkhR28889zT7iLQVwuRy3k7ckYNMbAeepxpRbCpAKHGBhAQjGRV",
  "key22": "5fQdXPiiZkm13XDAPyXAr5wmwA1UQRSKMA2aHcm8EafTNjjije1TjrGpHjjpnbyv3uaGVGDAtqxeASN5ncwMBTHr",
  "key23": "3MzZcW6HpUy5xL5j6MAJg8pkKBEhXiHETzGCEViXb1bDvMRZoSnsWMsQyA4KhqsX4FqS9TGcwYJZwGoWj34rxN1R",
  "key24": "3wdY51PvcCLY9iRFusF14uAa88Cydd8qPuTA1JKK2PECRQqfYHGrBQm1XVWkfB4KfaFPQrwSBK2bd16LcbJS3WLM",
  "key25": "4oVr2LDqM7V4iddPJcvQAEkUYDeidwrhg6Cq4xdxKZafdU48h1xj1fzyFxB3Bux9SmSpdPu3xHptDqHnADPRZXd6",
  "key26": "62dg3gphrgwPkPJv5adsmA5CC53t6iu8aNNXc4Erwof9yL2xSQgNNdj4KQKTSkwDxUEWXxwfqkJo1htBE9xYjpsp",
  "key27": "4wVizkfkiFY3crE677w9swn7zfoG5xNsRK2tzLSSoo22NkWj2fJxEU1MfmDSv3t8mZLRRAfZpsa3ace9aSzVQucc",
  "key28": "4Cw87R8db9TPdombLTcqQvVyrFcjvgBsWdjGJ9fE4XM4CmjGcTfeTf2yG8u3qAFWzUkAEczof1QudVaxosCCTATz",
  "key29": "4webQyidwWefaceu7TYXungkTG9Z6MQRqVJro1hRaySt1SCqw4VHzyoQDFpLLujFzR4cEABaLEFBCvBuZdxx8Kbt",
  "key30": "93gT8QBw9wccDGuD8ksBDjDSdiNDjU2rSU8v3D2bLJ3nV3z6BJCymkbm2EG62PZ3xj7RN4FHRdfbeiRB2EiXedB",
  "key31": "56DXWzdg68FUiXw7PALxYeP5x7U7GxymbVujz7kFqK29oSr3GdMsVHJRwFkyqBUNJCACbYM5ySKfPiSnnXAt2wmj",
  "key32": "36KPTf7xDR9hHd3SYsRtPTiabm3vJKudA3WDGFV4NxfHHTnzm9LYKAsMDjfHzRkRunaTKntQ21pXrrXviHp4vSgp",
  "key33": "5sHbedHg2g57nVyT7fwn6LsBsFWP4Lg9KznniE6D8NfGeiaVd3Hn7evVKYZ7Jjqp2uZqgZ8gV79AusYLncan1goS",
  "key34": "5JDZp6Gk1QhArkKHAjc2Y2BrRC6CEQN3Aq7BZoEbHqtBtL2bw68AAUJGWjn5HZLUmoVwNMdfTiW9Bj9RUdQ7Ziqy",
  "key35": "4cZvptKGVoLnHGN1jut5ensmB7HKWcJVTxkQmLbJseSJpAnpwbTTf3FZFHRi15icV5pnti9Q192diZkBJjHcif6S",
  "key36": "4uiD9FC2iHFnxyN4316BbSc3psN2qhExUupai918j8PajtC2CuMXkGh2uopAMbei9ypKQ1Pk9jtzHQNKoj2eAAHv",
  "key37": "AkFYaxbQkiiVSa2A78bPJcn56mdgZ6aoFtgE2mrXy5GXt8uVmQXLPCc77QEfcQWasXDaM3XMdz5bwJoR52rCuNS",
  "key38": "yXpY61eNivSKqUt91D3ueYN84bqDaDX8jxXQFc1BNitxu3CdobGaELEWvzLx2TsLjLrV2UjcCfGBxjca3kCu1HE",
  "key39": "M2BEmrTUpgGPt2jy2cCyT4sBmSF9pMMuTLS2v5kXLCz7eHGJNbRpkNxbLdg5yQnbwjW2vhhVo1zDG3J3kBxQEDK",
  "key40": "3L8JCPrbpoVmCFKzdU52JwPZfYe81kiBojX4oWCPcASwtvYd94qaa1PSmjKitBxt8ycJeHU9Pnuf1w4U12vLSruL",
  "key41": "4tUEYvj3QQXrVxZ884ZkkcL911Zo8DDqyosV1BawHEUoiNvNTQ9XWwHjF7eEVfRhHfM9KiSxhrfkzgEUch1JQZJP",
  "key42": "tVAPL2BTVkKT4WFkrxG89sBxCjvSXWc1c2s2gf9vCZvNLSXfXRuDTWg5Zds2CHbkGBXL9b9on4xcy5LRYWvpAUY",
  "key43": "4wSz8AqUkWhmxiC4nUyz2a2LuD4Ds7qvbj6XQiiK14CM4pQxUx1bJQjNUbtqceQ55Rf3dWqqNJd1JKFEhe68Zfrt",
  "key44": "2oLEpPbrjVAV2cZ299RjYhy5TEcC3mAcmdsCg6B1nv2qHTEPvnBqfyMt77CL67TDYxkLhBM9HsFFZJgsSrXDA9yF",
  "key45": "NCAQ3P6NH3DaCgX9YxjNS3zHoDtY9cXie5FkpBm9Wm7b7aBJs8aDEPyPQyXfzuMVJyGM176qbYYY8Y84VqSRqcb",
  "key46": "3o9hwK5MKdUQYs79P6VhWJYcCPb8e47iCq85eMEuvdq1LnCmvKZ3jAp2kMaDkTHXLrYViwx7LFbpKPxVgVemVuqT",
  "key47": "36j9Sw9jLAZRws19vMFGW49tw9N74nq3XWfNmhpFvgxkbSTMURHDhQb6eTk7PzHow9SWnx7DgwQohM5QVx4xxfFS",
  "key48": "3rXPPC3yzscrfTgXoc2pMtHBouWPooN4cWyf3Q8DSh1PtPZqtdZ7QXGDEhQyJ7AwuxuLreMjM14K7vFm5Ly99rdw"
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
