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
    "2qD3KFaiLq1HPFWxb9vpoqZzuJNEe2o8o9XY589zXHi57hqxDx85peBewRxka1KSz1AxjuEQctq4tP1KACZfiq1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1g1Hc4619421hJqcd8xPpcgcUgE8q3zUcQji68rE4r2EtV17spKsRitc2bP5jSiBNVyFbAUtde28dTSzGcrNkL",
  "key1": "33gqN9qbFxadnKxcm2FPr5gdpvGLAcMf1PKYPCQPSqkrmACTUUwiemzfhc1czeZ9fEGc9swnWCZy28V4hznKSXj8",
  "key2": "238ia1WkESe1heUhEgk5NEKHmCoZtXousnWZdAetLW9C1SbAsveMMBRWggoV1zydxPZj3BpooZ98ErZLKRkKdKY8",
  "key3": "Y6DYwUhtx2Z4SJ7n5BS8MrTsxkMiYEdaSJNw1fdx4j89rCuzvHPn4QcASAwCpRGkKnjAJFKLRhmTcUuw1FKzfie",
  "key4": "5nDkqgUxaMQMfWYaw3GetFCUiXnRsvJ8UbqfCx1sM1dmhxBqx2YS5QxHUNDRdBpr6zPZhJieYm5XNDrvi7VzHL1Q",
  "key5": "2jRPiHuCxeGyydoh68Up6HWSheRvRbffYcMmYkcLEjnhkbSRCW1XftgpmCnK49xPdL1G7okTdPnZckwkWv3BVSh9",
  "key6": "4oY2Jr6SeWAH7WS84JSJpnX3fUxGVPEHefNxor2MBPzt1jTCcGWnderGSesy1gv2Q5oh3sp3SWuFFyGhZtVfKiuY",
  "key7": "PYbkdYdx6RoecWN7iiJZL6u6PnczSobWihYnKsA1jWT2zmFdziwERnjj4M6H9mUCPPD5sLtVRKxzGum9DdVesUv",
  "key8": "3Mi9ibXCoAyedEiFPN8BvMtsnBHWHuWFN7M4fwUbdZuPzkcA5SvG9ySAEDuBtY5mw7AjnAg1SM9ntmvzwNiQ41H7",
  "key9": "3ryv7PfjcMT6GJnweZDDuTGqGU1SvHCJpPmQ3an8w8dS6SzqKqqbB2CZuqDYQH3wkA3WGN2pk2RSGJL3eLKwxAQT",
  "key10": "2bs4etxFWKRGp7qaqvoVDciqoAPzLnGV55hi6V34iEpdgvj8uRNjBQiSmrddbyaNKUP8323Eu3pLSXp2sPzTJuHb",
  "key11": "4vJHS9XYDjzkYiG4XSTaHaKfsvaoZ7YkMVgUAuxKoJsHjCfr6PHPeiEPnMuEztXxKuCMngbaY716gLxam26ugaNm",
  "key12": "NMCBksCPqhPRdEpC6VrhaGw5HGtQoSB9oSCMknHe3jG7JSNUTn2DC4diWe11jnLhp2Jo3HYqjtzdFLHvzFyLJhT",
  "key13": "2FAiGgMb4ocAMijdLD68pGraq4PiuH1GNzdrGCCPkJj2LwpmnQUu44KDD9VQkeeAncAMYvM7tRb5qYH6jQRUq5CV",
  "key14": "2V7UJvJU9QTNnzjXww7Ceg3vR2v15DrXDpmkvKQNZApX1B8MBXrrxEQVNhDCvgRPDmb7yS4RMyjzi8GBe7CUnJNG",
  "key15": "DQhuQGCVGYh2qf6c6zTcgtxQwu2PFGbf3ZgiLQY7cxn361hwPEsjmYEsksmFhZYW4rxdqrZgNS6seg1k1MhUyWH",
  "key16": "41igh7tAoh3qY1aQvRE8ygQ5ZF8XemdCBambcbAugMey2MKA3K8nPdPstKHSFY8kt8sv3PUJavvUx1TLfdCcKPwd",
  "key17": "4fYGBhBaXud21wH5dSRLnwemrX2WkA3bcqby1VxJfvAyHG2JHfMTwD6CYrVoTtnPWgMqBSu8NarkrQ5kv1MeJeWt",
  "key18": "2mGh7nBPasE7WyHSAteFShejKvy1aWhbXdgGJeLhbbyM9d9rBSfvfieSR6J9qqNmNecbrc2fKnJ47PSa3R6WSJrb",
  "key19": "2pNh1rSnHtpjeBcYY6LdR2m4HGyQvjAgyihem1FYZ7sR8ZhffpxcjMhcN7NZkvsnz3iRaSuoKM2ttemrs8azohuR",
  "key20": "5PHU2FDdCJEg2Vimwt1nwvHrh79Q79EBQvQ28YzcsRV39aM9BVZ63cXgniNtS5zdVghZbQ7BM7VSD4SScknMZin5",
  "key21": "2bwHNaN7PrpdBSF14XDqm5e9TbKqCVWF7Rrii51fviTuWuwqWBdvCgc8sBjn5Si94dam2ZazZS2cmbzKMjeADsYs",
  "key22": "L1xQvJuHt98iVdL8o6AKFjxT7fGTP5phG1x2Pn7tDGfTkUhZvkzo42EK9UHx9B6gbTioCWAnLxPHmZxCLz2cG4c",
  "key23": "32sgSw7aQEsCt2abMGzvrwy8SLAJcYicLpHpvHAW38DAKUKj7t1ct6fTBYe4BJy7kpuccuLNb56fj6YLECK8qe1a",
  "key24": "5bqig6ojNpjgUWr7vqCZ22GdNHMG3FckSHtRPNBX2pvy2DNMMGdQaqqggAsnVPxYCfE8D6tD81VgjmPm7o1BdUEs",
  "key25": "2sbraFjv81RdFq3Ps7TpN6PwNFEc1vupFD883NHnTno4ftdGTVdne7PDRdN1p4hDdeY3X1fM7uJnLNogtXeAJMAu",
  "key26": "5EUtGtVVFHVzDXRZwSmvrqzTUbtRVN57xzFFL8jxm3usUEe4dseLjZNp1s24YNPcttJuB5wDBSDQaBfoEMLFLUmd",
  "key27": "2ttjBo6PMSvn9eyVivwaMxuKfWG8PmXfH4Zdq4SngiURka4dUxmZKJsR1AqZrUzigS1CikdMhVG1YfXpTdXFM3b2",
  "key28": "kEpeESLYAAcphzhypLqNRFuFKTSyhgKD4WfJHL9xT9624S6F5QjxgDHjYnueKKBCj3Gf1NhEGCAAjbNUtLYU6KW",
  "key29": "uwS733DVhZ3J3ahsYiR62QzkGedshU29Rr44ezjiodn3xRY1GcdWNkD8dR3ix2Th3QUD6mkgiKbWrjwnU8EdU78",
  "key30": "32PQtcv113e3LzqZQpP3Fw6FjiTd5SFBo6NHJQeXAsR8dKP7iFX15boZrBRg1EqWLhvf2twaK4yo6gLK6HpTjyQF",
  "key31": "52PirYVrLWH9bnwA3b5ennQn4rc2X2e4GuxXYRT87cQaBX3zWpUavM9ganffQUFyxPvQG8hj3STqhhvf6LNDrfZA",
  "key32": "3QEmyMhvWnywuurrgbVuQDXGx1rKzd7jEvWRBU1WiaZs9j9PecTmFATRfYsHxXWeSxFDubz1bfVVpbpHdKUVhfyS",
  "key33": "pynXxXE7kuRqdbit8HgmbAMu1WijpqX7dho928NFrqgPYcPg6BFAwzTKHq5xW13KEjFWjknkaZPA6iUTfPCJAi9",
  "key34": "5Ru3RKXnYjcjXMiuVCoNCeigMf5JdpphVBMkG99fhagAaJbDdh8NkayU3wX5KLFb7xSBPEZbpfS1EeBQpoAxHuBa",
  "key35": "3UFo3Tp4U5ZDcpo7uar3XuDGoErS4gj285J8KdqJCpqSoQK84XH2A7cZUYT4fZwMvKXyx6FbSWnVkDWz2zYRy2eH",
  "key36": "2KsqQQQYUkE7K1X32bAQZHYPdpDrRdwEBdkZJvvBdBYVX3yUEwHmcFQ2irh6hHYn7Y2rvSHQAA5Dsg4SWwtPBaGY"
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
