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
    "47Z88YRLV4PfgF6VuoQ7NkgKS1RaBzSVpi1C4c7qdEHSHo7mSAXgAGhVkejJkjnFXWHahgH1SedGxUF8xUX9fCeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kWo1w4QbtFkW2FKMRazb3VnM31toJqNLBNqVbHLLFeUaPy4SJZhehXq45BhsgoLXPqi6fztBe394Eu6APzmBtF2",
  "key1": "2dioqxUZAPWSxKCXdVzwaydwnu7eWBtRT6YYrteUHCRcABgTgsU5kkgutiCqpjGQ9YATH3hyxZeujefwC455kvLc",
  "key2": "3Ut27Bv2ZEorqsffRadPFMGyWzE6Pz7nfJ14V1zNDY5YseTGPLc2f8PF48MR4apPw1gmwVB7WeTdNKKAAzwhaxTJ",
  "key3": "4zbap24hzxvsr18JeiKBeNvFFcZawXr4rdWE9pEAgsXDkddPadxHvU8Qjis1ifrjQWgn1YKGajVMpxA5iGp6qCq4",
  "key4": "3UTNa2eoor1xa2d4QDDNXFf83NXaS1fisHxC4Wb9GTW9CG9QXFY5H2bnq1T5WzDiXA5U3WWYveH7YTj4zPRLmbDo",
  "key5": "5yjoNsb5T9bVgJ47NKbAcGUsu3uahwpWoWFYkdo95rB8Lh4PQLHFtNqkPb6a7JXfm56qj9a98a5XJ43MHkn8B8wJ",
  "key6": "xGK2SQVHu9mCujr9x8fuwtTjXztiGviEB8GdyobgTDYrv4FaeXfz2Smbp7d1kdybGUgDsmzQnJf3azRFxPzmT7V",
  "key7": "5e3GZZ4NfAdxvGQN3k8CTUBrgJeVP4smnYshdnVjMS4Bqn3JkFSDPgVKEFL17KW3GqbaY23sfBxcV4dcdbiNeSkG",
  "key8": "2JwZDLC3bNh55ubpZgCauRELg6fCx6McQtumpMqprWWK27HWhSbrZ74QYuJcKMV32PFMTmGKGGm1P7Ya8PfHgZ3a",
  "key9": "5bw5qfFePLEP5UnfCngd5tjPhi4cotSKtGtdM6LwU2uxZ3aoCDvK8KL22D26WWHpeJCdoyk83Zscg2kFTLek7zeW",
  "key10": "1z3KF22YppKpsiZW72BzDFgAvDPeFPAXKqtsBFdjSNNxMDLRF2KRJg6wnX3uZrLSFAWbVFz9yJsvZfBwp2hkmgo",
  "key11": "5cuEEQzBZHM9P19UziXY6VvsXDNyz4hUkHq4kWW8HULdZDmpXo9NbtEaKCgRDJzGyvcL5aCCzDTLnXJwbmtu1Wr",
  "key12": "3fDHxjZA27uysqjBVpHsyxFRwNFit6VPWctbRybw62qDZ6PuFgz1MrSgtK1WnFs24ewdVRg1HUYPq7LFn5grcvYa",
  "key13": "4zQFbj6tVv9L7nnoSVdXJDqSMxDRvcyVoNSvZFsuDo5xfqboqAmTQd1ScwKLXiT646v2YfMHMHEZtqTuo53X2qTi",
  "key14": "zF4TmVs9XPvjptfKQjfHkD198JNJGQ8WAFmJvxpY4dc9Rq5vcvwiDwLxaDQAojrK6bqCq7k8v56Yokr7zh3kZy6",
  "key15": "4WZNDtYvTPNF5CQbZLPvgp21CCWLHAC9D1AYwf9mCdZ3Q4Vn5A5nmksATYdGqmiBJmSWBV6qL4ABuBYiXYhDuR4b",
  "key16": "47apcxvPB1YxBmU5XfUsGEfm1RXRRTtN1oP7QpikJjwqEnFhGgeQzgAzg3nNKboJu4CoRCBXbKpZcoYFyKNaNod9",
  "key17": "5H6BYqt5eLNuNrJEKVJvsFhfNGUHiUREN3wU3F8pFSnYTArX67AKu9KVvoqJ6ekPMza4nHZdydD24LemJHKA5L21",
  "key18": "rm2hMv8pZNPvPpXYKdKk8s9fhmSVuKd39y2QRGn3ce4zisNrMm5LE9V72kUWVkWL3ZUhKn595ARPbjPPpvenasD",
  "key19": "4frBiDhJoQ4BgVtA1GLuy4w2PNpvJZjeXay2osd7oYnw4CSeH5Kz64HMTnWeEZp9CqksatyqW9vzrT4TDEidfiam",
  "key20": "3trMjxYs71XkGmrc41tvQGABYnAfioKAGuWfzuEhLD3AYTppr5XF8ij64ZG2uYZxKWyA5GrVocrZMXPJ73dMrBFq",
  "key21": "4aY4tHK1SvhS6VZWx2QjeGLNJtPKBJPjsXFeTQiRrcFx1Lk8whER3ZLfJjwrRAR5qzTBUxf3R7fUW25aE7CdFZmn",
  "key22": "243EvSNCAyGiSKitZgpZV2s1ZswrhhDjngp2tt5Ao1S4A3p3mPDCUSLKfffffcvd3xaE3XXUZQaaoSWBufWPUrxK",
  "key23": "2AGwTUrZU7AUpnQ9pdMcsRPAbyALpRPyHc6MWpgQkFeUYCNbG1F83FGXF2GLkbVVGfejJBK3Xtf7n74tKTn4hamW",
  "key24": "4AGmfinVgRH7iFHWk9U9wPRYHEorYB9heJi7FW4GuWRbKNS4uarGbWM7w7pwtMxPsN53cpY1mWfkbwZVpuQUrB7S",
  "key25": "324GRNyDgTd1cY4PA9sMoZsKTHjER47Nx64A9zRhGfVZv8zbAocjHzeMiuEJrYcDtm1Jw6zPxPTgpxEzHfVDLoUm",
  "key26": "3XSgHmvz5ivkarA1dx1a1TMDWKy6LARftucUBZ1LUjMCFQSR5gtioMUXCjF4nuPQs43QFPqeCoHyYtkJ1Rh1znAV",
  "key27": "smoGax8QkJvoCV2cuPxHGaj2Rwf6vANh26eUYyeACfeg6KWVejXCmJCeasWriKLs1VS5uT2fm8nX8AZtvEurUWf",
  "key28": "4pNJvepSxf9htfocfFUGUp2yxWZe94QwkFat85UkZDuNDjMo9dPPNkRURswxuZ8shbWwk1ibjNUZ7hLyGcbev2Ce",
  "key29": "3vwWCKPc7gfKm7gqNTveFDGV2fRwT685Ptkc5hmYd6sR18tgJri4USMU2seB3iGbN67ctehNZsCpWHT6qy2FZddg",
  "key30": "5QBvdUsQKcbhkpCkmnUr7ErsLDySea9ermX226HoyZGaf6hT96dAfjKWWc4Jg9XVvRqhoZLiCXK9KfVayzNAZ8u3",
  "key31": "67n3W4TiLidAiHok9BrhbDAiw3LmCMopDK57wVWGCR5yKyU7WXXNeEyjkWubSC3DgnHcDENTerSaBsn2pNwz8YXL",
  "key32": "Mi1LSDMCztH6YKXsBtPNhjbgtTNi4jbJoVQo9jFX9o7xEpLUgdX5EJYKTxuaNaqLZW3b898rqgxHgqanVfLSDzW",
  "key33": "saexKJBrD2aNCg2bJSm6zRbdTAbWw66PBXRAQdJcdd7rM4bEt5EBXWa1hsvmsrtw2pA4MSPzjRwKCaRPuGgWURr",
  "key34": "3o2yABSkSbWpxAPtpNfVtG57Q3FpQh6y1uTVVN6pn4dzDPYRmRDyUDMtHJ1S7ooK6RXRmHpqcv1HsLTEEqRA5yHe",
  "key35": "VZnjbSQKYFcpWAfwaYTkrxf3PgkNFj2Nh88Qnb1ik3Kq8CxVsSH1E5Ei3brzYNbKoHYHzkCYkV9rT5rnc8bKVTr",
  "key36": "mskzMnSC4YpxUcDxcqBWUirCa56cfHcV4n1X9TajQjKwEBZ4DYhy7tie1oBUGw6T29pBMYCPkifhme7oTi8sPrg",
  "key37": "4qZHk1f4Xg3LAJBaPocprKBzQjYs6FX1de6CwrNRvvcmMDbBg9fk6984CxtYqZqYYXd9TbujNaMR3dCi49BfpieM",
  "key38": "3bqo482W9rjrKTcgkCp7M4cecjxnfh7AGbsPh6WXonmXD77NQVU6S1JYyxcTnAtXqZD5sEgRrYvZrSVCCHHr6WJT",
  "key39": "vG3SDaVijGdhqYLaC4tingy91VjY1NkurQWgLp4mwTYKA4cEGDBXeysB8Nk3iEFe5Cd5zffHVvV26WhD4c9ALLy",
  "key40": "4wuMpjB1BF1TVDrtY1zidzdLaPG44B17T7KLW7CE1o8JXRtGGuXsBucpF4CKGUp37h23D4ogLUVd9tiknHKPVNim",
  "key41": "3n189yaDJt2i7y5JX4p7DWjuH4qiMJ7CdXBacH1cGSK5tZjLPYaQ35bWDcmApdxzec7wvabyMfZhkfFNqsvfnBX9",
  "key42": "3vK8NhN3wu5weYZZodiSqBhgzvajdY7kYXnA9Te4VaiSVeruxkVvGvtBmQQb6ScKsVjxX912kMqbibcsYewVoymH",
  "key43": "z3wtA7x8Jo1Jn4KMC1Y7H8GWE4b2XUWoa21GYEF29X6eVbM5E517AoAQQ6ZzQWwTmGd78gY4NY1M7GsFFrV69it",
  "key44": "55qeKgdFXrPGcqRR2RP82Dvwzq72KB5gipgtB1ACBJvSMt1fNN3ctAJ2Lkwf9ox4k5sxr3vF76yoSJPmm5QbvAT9",
  "key45": "9mxwWtz7rmAPD2MqfkAK3FnEqM9M1PdBqWgLd8scsvuRnWnCvTuUU4RTDNxsvrQhyBn2B1UyoWqxijcoXPRQZAu",
  "key46": "2hw7HJNzAMW7YvqCSvZB3Rwg16zRAxek1XWbeXxMGxVW3Z72HbwAmUwXr1LSKLaRMxH6tvcWxyijc48c55CJdHTj"
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
