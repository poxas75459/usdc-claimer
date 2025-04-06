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
    "2NNajgT23TwVyhxCpM1BAk5YDCCtbca3hLJ5yb2VxBE5sTZnojYPrAsMqNTNCy6DmE7vnoTCuPWRAtNToj8JSkEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mBk3TXsXHM7zeqMBp2e8SRkCBUMYRSEbxpUnna1swF6ASGJmDiZihAP3nWVNCuJqWyH1ixkbBwFCevFMmr9bcs",
  "key1": "3xFNeZDegkpb8vAJNGkXLtFhrJUAYPcpodTufVsbFeswkd6DE5cxJ2uVNqUqk5oFaURcSin88brvixh1DJp7oTP3",
  "key2": "61faiLmNqvnPWC9EEEAzyKvMjqAjWMKvQfUfc5Pp1fWSFeh1wgdLAUR67BCUWNKULp9UGp8brXoqE6SSfcVqo4mn",
  "key3": "5yhDr3sR3eqTi55G4NWEjQbbkKjGDaZ1KH2rkFraniCoPrhBaVizmchviFDLfD2ronMtPHyG2VeASBpZce9DHVtV",
  "key4": "4uus4YW9bTZwZ9XkdMsYbUhV2cETsLVwBHahhY1xGW82rXVjgi9W5YRuanf2eNuoQPMiFEL6bsrMLtiSsfTdtQTW",
  "key5": "wXteay4MTCF77EbVuwr6TvWopp2aAbQw6Tp3R92ZtMZK2sPwtnwSnAZv3srHNZLu7KYa4M2RJdq4LGAj9dKRgHY",
  "key6": "4sFyyPAjGtj9znxnrsbtSu1pA88vjSAuChJrWFN4tpHBMUPnKH6qFFvmgi3Rug9ou4DktUu4nJTf8F3Us4ZHHW4q",
  "key7": "n48JLwwxHGS73wW2rG44LMuF66aV6K353qWtoRbekLJZmrpUuRRz1BVBsSKJiBQYZBHo9DSG8hiNuYURNsdsWYi",
  "key8": "iFWHWjwFjogFaiCiat9ANh3VutTSsZD8Qg8sKNK1H8EPGLEMrVcZjPUZqLwnQruc1edz7iaEDgAPeZGz63ehUuf",
  "key9": "3o9iFYrnHvXWYC7C2bkKWrSChY7vA1LmXeYYPaxXjt62fNVonbJqYWJgxZ377JyK6x88aCRu9c2axFwSJKGRid8L",
  "key10": "64gNKZ82fpFq47T8FaUafBFtpx3BjFpe59HBwMGRZKHo7r2Hro8e32AkXKLZ9ZtMyhQxn2s2wTrs8H6Rao98VYU4",
  "key11": "3ekx8ZN4yRHznABze55LCMWNXeJLTaEA8JU4uHo2wi9Ea7CihZgm6a7fM9ZhXSuLEdQxLvw58AQ3D2TV5fBUBTM2",
  "key12": "gJLUr1dVvzfjUFZgAuEWSiYMS5RvD5pESg8tLtGQW424nRWAVfEbjaFGB2JdNNrqx15QDTxc5RmjeDGibudwGUC",
  "key13": "2e4RtCu4ad6MRfyBDTRkSaxPVknkQpNXHuuPcWX7BxcbSLHpYu8zL1Cmm5Nu44pTuCTeYakRnF4ucwMPNQou8eLE",
  "key14": "s7LGGQsj2EwXwdXAaeMXyEr2ishrXhxm1eggAUSW4sD3oesm2Ban7myjXiCFSN41XGG4TqN2EVgBJcz2vRPC3ry",
  "key15": "3nuUoT9WT2ftNdExEsMtZRXpo2ynrUAKjBdKT5PfPycw7nwZ2aoKkM3kCj8xXGnzAdBBiG7X9mgPyoF5d7MgmTaa",
  "key16": "4MDWQnMZJajQxsmUxXNRcH4QzP7wfo2jsc9S6sWgrzztw69xiM7FPZSWrMe1NqmyCEiCpkpFrC2BkmC8uFk6JqBj",
  "key17": "3EtZCcz3QPN7RPC5BLmMiJbXzqaRcgmzMybEX4FSDTQ7H1qXpTsfonomGA4sC7m49WAF3dbaxafM3EuczmAe9w6Q",
  "key18": "w3RsKEqVp5YkBZwRPzA97BmptukYygoNzaKTVVGF77AHR4rPq4zxduVyBr7RVW1aQSqGcXnZFTE8pcYQxoTzPdG",
  "key19": "2sDiBgCuJr3iXASqUvMQSoC7vniRAwL3HJ1dwh4uXz2sf4V8jwpMSsakPH4YpsfrYPuY4YRW2zh9DMpzFQQPvQcm",
  "key20": "3fcCudYuhHxbyw8n8mkbxWxM4kJm5GYNWDZ54SNe2jARVWAWxV2xsTjD1SQHN7JrkBhQ6KheaRXLd4a146qhHSVW",
  "key21": "4U3D19qdy3XczwYT1BFexdqJHWWtBA4w3MMUacCTxGCm3kaYiEyV1nRdxiUFA3nWhwF2eMak5eYwzddpCc6872z3",
  "key22": "4uaPXmr7n4jXyAo8ZmWwibyaqgcKhEEHEDcTcSxNtTufVBKTTKKqxQdRcuatN3gpf8YKrBLbfAqh1pc7hP7wnYsy",
  "key23": "3154QjFJbuvAncMb7SbTFSW7ahv4PXhNVeyAeh8SfBYPHcZBFNniGgXsxF6Me3QMfD1FTRi67Pye3bWj4S4JXEAt",
  "key24": "5quytHfQPoXqso1Rt8RTzP2jr2qp1kmDEsWTCYTbZtim3ULtsiZ8K6Yt7qmMa4ooCVao9r2GKQU7bQhxgsxv4ovA",
  "key25": "4r94G7Cua6Pc8kYh8BhTQ9G6zARAoRS7EYpKV1V74bnxSRgcubFr9E4eFPgDNtUZ4fAtgQciNLcge41qdM2yR7iy",
  "key26": "3a7vio8vQ5L9xjqS1GTbTajqUp7mBJmM3LRFFRzSbhyz3tU4AE3tG74LSPrtPktaqsoMvh8EdEXXiivCfmsPruYZ",
  "key27": "22DLWHGY5TT6dZpVeXoiBzv4SmUTrkaQeEAVdeReydmvvijFBC16QRAgx1jCeXEwa49E3Ss7uu8HdWrcBGPvkphr",
  "key28": "3pFzRXKysdvq5fD5C4Z3bR5vuEqzMqt3ptHZwhys8A5cSggnF2NJD5bP6ZdJbL4RHZ7Xgm97fMZSVonPUsTRjpvA",
  "key29": "66kpjL54rSM77YrTrJEtA9BSH94RZa3xH3cfWjWvRsKL5ko9Kcdfhw2VM1bFnTTZUfrzgvDxn1ccTs5ZbQ6SmZmu",
  "key30": "4YXzWvVww9YcWJiEVP9URQ6nAMHHKjsJZSnbkNRE4GfCTSNgW99v8LtePhcJLkaJQHHp5uVPdooee57nGwHdLLR",
  "key31": "5rzSVJswSRZJfkgNKgv1q3NedXNv5Pc5tJK2r65Tn8Wqn8tnume3aiUD2jmT6HWttpiTbazdPwNB8ewTJX26htAP",
  "key32": "4psfhvKtmqcQHUUTdvWG3WzYUH8SpiQ85Uyt4gLRmqqPxBaJDadGqDNc7rgPsq8KCnhHFFnDLqgVRV9H3tnsTo96",
  "key33": "5VdC9pwBc4tRm5y3XKp3KLEwGLgR2UZLoXhkTuqVmsvHWehc1qfoQvbSCrHxW4s47Dc2JgnqH774tqa2eSwvSEp9",
  "key34": "2MqYnPrHaoBnhRoscHJHygtDHA8q6AGAQn7ZJHauKkjk9D11ZG4HeaCycbTwFhEkWhLWjsZs2ikQzF96qmdEQyLn",
  "key35": "4kpYo7BuyWbDYzLGWLzKm28gEy67QBHkizheAdkVdrk8Xg2YoSm96kByBnQmgZZ3B1VUAMnXemDDSY2VXX7hwaAF",
  "key36": "2NU6BsUGrwKczGDb1Eh8UvdEDiHvQQYiNKsqJJBiTZLmXPng7zZdNY4qy3KQ7huvEQFiHJFcQiZK4c7ojxS2Pp9G",
  "key37": "4DXV5pXzfDg6HbrscS3CWPwwMJALCQ4VHTY3kFCAGh4DYR3BQn3P74pHXYBB8YUJUyoqbWis9FXjg98TiGjdhLN2",
  "key38": "2XnDivpWGroz2qjfJG7u7pTvTcV9CPB9XgdETb4ksL1s7Gw9BGCFaPvKuHvpm2vXW8XT78NTCRuQ2b2RQXn3TXee",
  "key39": "38LniUv3xKAw6d2JwwNUthUXDy8pP3oMzzoaCaBGB1L6sDZMkcrt5SphsojoJKggjYKQxTL2Dpj6H4ngHkpXi8Dt",
  "key40": "25VQ6Zo13jcNdFopCxPs6owPL9xdEr9v3m3nog3zN4srve1SahoT3783yab6o6Xz2NqezoLggYdSkxifDJGB48WD"
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
