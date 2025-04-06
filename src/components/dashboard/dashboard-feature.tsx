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
    "4uisMgPEt1MsBkDAgV6kfSRkPZZujNGXNu6jGpxwYGMChedJ9grWZnosvSCJsedXyZNFPxFUwj4S1ZuyhHpRzzFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MaHAQXjZzAFQCrJShrQaGeauJLZjWSy9wk3vTE8gQLbG7yFaXMRnm3aq95D91kpzhFR95GG9hF9MB9eALfdP7t2",
  "key1": "4YE9uqKEmKeL3FVrnX9whjLeVpNPSF7Z7jYorJYJ1WWgb3jVbLc2iiXPcUYVXdKcT8uPMBViRuXrnN6yFKG3EKZP",
  "key2": "3pXG6ENQMCGFkeihqScF1cxNbUDSLmsrRfWe9WSPHrGNbZUF5f2skrtB7uk3k9vuDyo2vwkM4wSVoCnYbHrYNoMK",
  "key3": "21AC5CdeCice49ih6vc5B3J6ceEFtWFhAsrVD5uPzCV8U5VSrNZiAWSQ1aAEkY6HYbYAbiaDSvENAGUkwYYaXxmN",
  "key4": "4d3akN2JdNP1r6W26YL6wyVbyUthbHUyrQWmn6skBcCBpiWtBzzQnA75o6MmQZYtCgbHMpzJue3nABKBk1bBQoAQ",
  "key5": "29JzDqoF2hskpnYYsjYUFKsSiq16NGv4wzJw7p4vLUVrZW2GRf9mzBBtMx7w2EHJKUdNcoCmB3DS7j9XeLEGpY4X",
  "key6": "5vbbsxsWnabRQyQ7YyhwtfQLBKvKWZ4wjzxN3dZtxB4yaFUUmVeLL9KYnTCKLyTeLKCxe7RS7Rc7HiHKcvVWkD2y",
  "key7": "3n3hkmN7vwjTFeTvjoSa2MCW7y2HyYt37raE91Ese5tmtEHvQ5hqLr2fNq8eW2JjVNKNvorF6wYC8DUczRE5yhN4",
  "key8": "2MaHzxbDNdBevrpjwCmo2ntt7bzd9khacmXMbXHbaUbGmhpGctQkfZPV9Sfy23bZi99BDwPmKgqCXKJPZXJthfsH",
  "key9": "4QCXnkSr3vMp79HodaLEahnyEY1TX3f2JEK2Sn5PJtYTLhyFdKWoHwcBNnLYuFespjHcNgEJTi53qP9iKnugfKGS",
  "key10": "DRCr4ux3imKSaTkbYRLwouvXwu58CEuroPeu2amxDVV2tx21XtQyTS5Gqs7A1dSi2LqB8WxGYpvwJ7z81X8x8rp",
  "key11": "2sc6HrXsoEVbXwMsbgyfoymA2PgAyFU4T1soe1q88fiEsKBKD94uvf6ZXnnjdhrBn6AcvYJZM62XgF8S6Hvcdyz8",
  "key12": "3FuzDCDNNEqa6wF5RzhTSdyKsSt6XF2ioEvSQbvbJuE49t7xorP85nJiqaeDwozxNuktBXUiCWqdAmsAG2kZsG82",
  "key13": "2yLttGBpNrr5jcaScpbPX5Rgh1Nu6ANM3VUtDTBnNhYuJb4HjN2CbNAsH75GyVAdkyja2mXpaisFxSwT3PYJtht8",
  "key14": "4gNsJv29ywJHxLEsCAa6KhgEJ558mYdwYiQ5pC3Nw8cXGh1V2sSteXrnptAWBTdVSWJMzzeVA7Gavdc86R4pQYXz",
  "key15": "4ZFE4YjHJB2AXoiLGwtLAMKojjuaeZZ9Z8C6Nt7a3gWDEfHSuZbij2QmB5X31xeezU35AbcLz7HQTHaWo4v5aFwb",
  "key16": "2iBbGBo7dbr2WH533umPxGk4dcPam3pBXFo8aHrbLrVwTjGhdckkKVQ5u9wfhLLeUNozzkhM19Y9CuX5xCu23KtV",
  "key17": "5HNiDRQVarkjBK6G29tinbUvjmiSK35izXRwaXv21epT7W1hv9xuyibxo7oWC5fXCtK4crgw9B9FYnv2x5ZSB9ku",
  "key18": "5JAhpTjLLkC98xzrHxnLKe3w5qK1KXJ539fXbAxJiD7HMrGSN6oEqMcGRT7CcHJjB8nxgdUmUMkR85gn1a1y15QV",
  "key19": "2D5pLL3t8FBFMooRpeBj58YPnpWpC9o33RTtXZ3fiRzcTcRSWKPtkUgNzL1QmaNH3MRdvrp96tPtMXqryC5XE3M1",
  "key20": "2GdY9MLUSM28JZoRHZ9fkNxGasZwTHZBkhyKFjF4HcwBfCFijAdVWGDXFoZMGyEVZAamgxmT3ar3UXVp9BZWFE5X",
  "key21": "2GXrjXbdC6DnZHAZUb7QriqzjnpBzsGXBvhmUenhScv6cNGC1skRE1tRK7MZs4Msxb3BbJtipK4p87XKdVonasrH",
  "key22": "2UPc1zkJSBvfbuPYo19muvCYTMHsovkii3BrbVzrK1y2zzQPeuiuUQGuPvFATEx8KyVR8opDR7XQ4ygTaPP1Qk1L",
  "key23": "24QqZpiEX2WAxjBTDpbvpzHfFFhguq2vpXVHWLbshiuvVrvzUJi6wcdqk9dbKQ1Lscqab7kvNVd4xHWSnYSe5KED",
  "key24": "2DvDffQT5cdj6YTEZwp4RLi518mt9yQ3ns4To3TyZ1ajGb4eecqUNrr5X4Zos3hG4NiLjH58xMYm7NyjTpWb8S32",
  "key25": "MymjwWF6wWBESqh4izcMojKSLtMpd7199j9ZY3tSZygCaM16r6AFZKVVNcr8pQF3mXU17MEW2oA87CVEdqFQVes",
  "key26": "6aSu6PV3DwodELESbn2vtwFn4Tz3FsEo44SWnK2DmAQnvdZ6wZXof7A29UgQjuTn5ttX83qN7XNZ7JAMgppSVdR",
  "key27": "b8ehTtXxAy4PscfskohWpEk3eac5n7kWCLMoQxNAFF5WGspqB5ZyfMbPD8YWmbg3UTVmPWvM55GdxND8kfcooLc",
  "key28": "29jgPrnRRKdrA9waTvYRVVXmpUvaWuSyryzNah6A4C9m1Q4LwBbi5dMvcD7VTPehaFabzYVQb8QHqyrN7NX9sRHT",
  "key29": "2ddhHjS5A1bDE3byS7s2M68nMM3Vr72s7YizfLLuE5ufYxC6FkZofmdgK8KSbCa7jZFRYswpQnBQCK9DYRGUL8Ly",
  "key30": "gAdPaWV5h3v6e1fUz7bQXrdTVwe9YnTPijSvaZhDaZ3cTE2j6nPU5eWvgjy73SoX1T4pkKGGSwynHuCoNuc5apP",
  "key31": "4AqPU5TCioo14gmXHuooS8bg9cn3yErR6i6na4jV9xT2UgZDahxMVFFeC1rCQFPWiEqCCvZ2N37E9UcsFTJSBCwn",
  "key32": "5zNBCLwS52tV3Phcg19764L74wTAWsybBwPnduGoGm43hR486huBHayxXQ5z8KQDTbFxoYWjMwp3nabWFDt8Zq9X",
  "key33": "3cSpzsMHrJCDeHwDNxd8KvpzzCx41TN5JKgqSUvWjMM5MDb8HzqPAWnh7GAy2krmm7ECVG1Ena8HFCeKb6EJRXBe",
  "key34": "2eJXykMAxbKeM73FUrwwgFVVCdW3b9pFLLpq43bYfy4XzMUozFWGhn9JwFX4HCRL4DumLxzjKmJbJpTGWa6VrNeN",
  "key35": "4B6FHvhKDiaU2DFDjcQ3pS5buVBB2fUuMYwEyBqjyMLvFhC43sJ9kD5CYrrgBDHFRj2e96rA3RiaRV5dEzTRB2kw",
  "key36": "5WnfZwfy8v8n5U6m312R2H1Qp29g8pDzK2xqtpbtFESnLiUm6n61L9PkBtMeZfTwKmt9G5A8bK9hsdgXtQ3Wp9Tk",
  "key37": "MGSaRRxAAC6ndfLTNBDbVNdc7wCxAQrxNChJxrLRCoo57Jj6bZ1zTFGgjBLt8B7zWqjTGUnP2G6fYGCGh3xopw4",
  "key38": "2an57GuXkdTnzESejuCRQZGFe79nnqiqoZ4AFcrAgY54NUNavAaHL16y84HLbqD8nGurnvzLf9s8k7Qab1AV6VnY",
  "key39": "4btGU6rqTFYD71ziqqLmRXLytnPMnx5qiGEMzYEVSn4rRg4C8HtUZg8RdLTGXEJqD77u1XcaGZS7PaxJfAA9izQf",
  "key40": "Vgxi4Lx9V2S9itLpxFBvkFFGpNbMFoBA1s4wV4Hpr8e4VuMMD71RNPHH9ffHvMZq5UqQvpYo94Lu8krkzd8nCLD",
  "key41": "5o71BJJpNeoRqcwfMopU5HXjXuewR11EjRCH53DBABxZbqB3LDgZoj4Qr6mLa6Gz1KYD4iS8XMDAeutuB49oefVU",
  "key42": "5f4fwaGXUjcVnZVsBZf96wymQCG5wAxu886W8Tfpfe5zJQn6Zm5NpRWRZmLxK4fTeWRE8Knue295vfkowq3UCGra",
  "key43": "59HQS1EGqkiQyy1VG9mEK3z32TYFsARxdeEfk2xMm75kwW4rdExRKk1UT1D5Skqu5ZTNeUJQvHDqVC8kddDGy5V8",
  "key44": "4yzyrMC7bguMDfLfqPdDQUYCr6RMxowtoNgBDvH5HrXquRLV9wbxAN81waWQuW59oB7vanFxjvditccZooSyvL51",
  "key45": "4y9ynE6sjztoaTMvALKDMvZSxtTPafjnPhHPSQpsMxbSMTJfb6suxSEwSgnonnEz479oNCSMErT4gj5GYGvupUFw",
  "key46": "5Qwh3qsqCEvsgryQcmT1Vv8zw2cNXNCQWiXRqLEqSy1XGmQ9JMuJohNNuvdqTZh8KeCQEaXD986WLmGtjYGpSroQ",
  "key47": "2vFar29cc5hHCLA5JWcF3KocuvmrTRdARY54EGDkJQ1Ew4sBEdtR3uda8JzKwecFTCpkqdut8HhDj7L3mhXPYyed",
  "key48": "2miQi2zvgNgJDGQqmgwjVrCqB2L21JZGXRrRXAQgutfoauHWftCiixtAmoqMt8kEPpJUqFb9QW63BuXHmNzE6wM5"
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
