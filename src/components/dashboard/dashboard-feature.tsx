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
    "nBULMTR3c99hqEgtZa9yEj2S6DexsYLhJir7V1ReTQ2NYy7W2nAxoKzmmNoTN9icVz5jZKWqTBStN5wM9x2oYaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRTMcV6cJvszjPV6XrmUmKMHKsFRLRsHH2N53fB2xHa3xGWxkMWZ4WYZjbd7CyesQ8jbneQCeKdPszVVZEFPcFD",
  "key1": "3gh1FgUS94N8yiP5YpGFzFEx9zPRUK4VTcpShTmsuVeya3QafGcmivte4z3t6N77uETs2YrTRjcYuh9YoZcSeQe1",
  "key2": "28opzsdnBrZSACbYrhJbewh9dj9f3J2CTZgyrT6TpTafmAjMQXWc1Ra1BACDVJ9YeoS6xDdK4u4H9KctR2G3K9Pm",
  "key3": "467fwgjfN7MKiNbZrpSGtQEgEnMvC95JYggPpXVCegMWmjd6AhfDciCg5PeuEuu6RRjSujcRLLAzd4M6bQFeMoCy",
  "key4": "5G5hyWSRv9QuzTx56M8neB8d5WPbVKs9V8MvKDbnYgUCeT2TDG6j7U8A8XdMTYzDk2eXvDCBi6WJQW1n6N2nwZsQ",
  "key5": "4qdP7MMwpjnnsBS2ebjN4nDq3nDHtEWbhLQEDkZh3cd9ivnEfBph54wPvuRErLRRvcS8q9pvd3SRZY9gGHjVArNd",
  "key6": "67cm7R31PUxHbGN9E3xXF5DhnprSZ2ADYJuw315Tnc35PjA1n85iLLqWJfF1xrgBgm9v1xu5noukx4LH3dzWgCZf",
  "key7": "2mkLezbwC8Qn3CypBFvdWxezXx2RtE7Ze3LFFxHM1ZjjzbDX7VfsXqXDHwD3brCgfoCW7Ay1QjxF3MyfXiwWUigV",
  "key8": "4QF1AWuwsiSnzRp7Nsi9nGtQUm6dEWZoTATXVorTiNb94gTsrnLV2Joo8KbAQ5gBmwUi8WkYdW3GikR5ecYRsqKq",
  "key9": "5xXnQn1Lh24pGQQfbiUpLDh2dUaN5aXwhnEJagdn8koTKVRoZF5kFxhucNgqCaa6hckaxkCxusiqpvMRbgy3KWZ6",
  "key10": "3rg8iifVfqMEGCYfga6WpK7iwffwEjuzM3vy5uGCNHC2bEsDLArkVHagrzeP6hXwq4VUeGXerZY3wpv5ag6aLEn8",
  "key11": "Gy8u6amgTJ2hhXDgenhV2BP34MrkSXAJerX8CyqQsoFSiGpC3Up9a1uVR4BrMbEuuAZFw16sVx6LYU6Feirsfwb",
  "key12": "5GhEy6s1ubfesNo43JNTB2rUNLWmdV2SXSwwcmEKBuwzjFoKkExk4QBbDD5txANxY9VV9M4HjCKGd7kmetcWwL2C",
  "key13": "2ZH4Vxbh1EwGoRfo6HX6xm93RLxqVSxJ7AFw7c63zCEd7iwRJijcQgsPu6CpeG4i2UeMkfCq7sdbLu6gkSMLpn16",
  "key14": "JME8QgELfxjGSBycrfJ2NfygMUaeHJGxWHAuqqwzwbr6P7uqCMSVnZe1G27xPU4SEUyrXEwqFe97RxqiqrLAogX",
  "key15": "3zGJmT325ZWWrHUhJNpds2TGsZYUDNzyBLorJNLMkSebUaUxmuCgs9QGTV14z7opArPeBAUu654HYJEfZk38X8xP",
  "key16": "AZDKoMEXgNnJPjM213wHud3XC5aCyrHqY6KkHS6PeuU49rxbU54ES683Ri9XeiagLUKCjaPupMo8GB4QRwkguBC",
  "key17": "NuD6DaoFe99VRQS8doAmT1is8oJRse33u7QMNzRLWcvLGALJJQYbsXUcnEvsmABS9MnqCYRKhs6av14N3yxnBYP",
  "key18": "3coXa584vUn8SRDFLEusb6ePedgjB9UedkHizZNs8njpSTSUuq3awja5nomETiaZuB3WpTKnyL88C75uMKGbAVLu",
  "key19": "2u8wqRQviQc4LRwQY9kEvacmWwSBBK9gRRA1Fr2G7VSfgLSgUPRAGiXRGWE2amkH3vjzzasDgNmL6uAsuTX7EF1w",
  "key20": "3tGp51PWcsarUGx9JG8bc1W4iH8YLfrxTrKNpPFXCrsUmQtS1DY7S7syBdaX744wqQL5WpX1pGn3eRyyHZa3Skpf",
  "key21": "2odKQGtyUCkDNBxhqsWydpEvKpmiLpxJMREeowHTCQFi7RR81pNTWumstzxUTLF1LpZ4SbyMSsG2eX1WCEP3FNEF",
  "key22": "2TBiHUEM8YrXxRkrogpPS5GxEX6UR1LFsRLMjGswyJMZz1Qwiu3LGyDeFrcJRadMgGGn9eoxVLT41feQ2ZpuzQBX",
  "key23": "5Kf76amxhh12JMUVQ3gEWPBAwmtTmo4z7QDdwMSqoQjEpQYRyjrR8rZo7SPrLPQMtM7e2G8gxjCkigujQM14HZCZ",
  "key24": "L7HFD7f5NNSTY9A73H9ErBLogGPiwYHmvbEwVLAnXYBH6YoF2FPmLET2PjhfhxCTL5LhKj2DECtyyNby2Ko5WN8",
  "key25": "5B35c7UmKe4D1E3Bhd4tpbaNgrJ2UKZs4fqqneSQiU8dz9rXqH6shZhQ4ZVoknq6FhfSVPGNMCZpGY3EMgvXRc4g",
  "key26": "2uMdTeqp3Y9LiaWMjGHWCDNfpbSRb1JAYwTx2bypueT4e6chHEbJPp22XeLZypvoic1Nd7CQKnKVrtGXN2pPjTZu",
  "key27": "3DiYPJzuyqvmiLwYR6Uq42m9bwiM9DXxQGMKBNGPSKsYsSPVJTxzpAN24ZxxA3pYzQRUSVVTTU2ZLsqoUscJ3EhC",
  "key28": "44BA9Ns8afFD3JbpYBMeSkZ2EyeCPFWZRa9NpVVyvxxmxnvUEpD5rucvS9nVFrECooRbKEAks8BPiFTwzEtSTVMz",
  "key29": "5rQ2c83U46K1tVFGU8neL8CKLp7npxYWCFgCmxZWF6wmD3YpDCYovKhNJGjoaK82oitEucRsXCqiJ7VtYTf54XcP",
  "key30": "3BYAFY5RpzQ5nui5F396dBnLPGLwLzwNL6sjWncEH4nBYc5817RgYVAqCwaj4P9kqx6h9YLozEj73ebojwmRzPN4",
  "key31": "5UaVJo8CK4nbPgHFhnaSAWiyHL7jiAeLUrn6HSEWHgbWcSLFD7Hw25HBKFrhJ39nZVq592CakzG7w8Jrk2shMPkU",
  "key32": "23DGqKg4TEDHGcsj1cEfgSuxaGfVAyn1BxsVaPrg3g9BSibFCp5F1ikr9bATM2SkneqVgF1bTuQiT3V9dTkgRpgY",
  "key33": "EyDud1mKJoKPVQWYfz1cLAU73y2rV3g8RQGqpR9x8VVfew11SA7tCUDiZSrqFHX4cwm5BXD3hCVqA1ahgf2vKUL",
  "key34": "2rLHa5dkvCizAqAKtr7TbwSePLKfg5WD3jSVKAAYdEwXDkZmvGHuciLHuSveo7znxELdqNdTX2y5iy8T1pE3agHS",
  "key35": "3f5GMFsragr4qMWE2m52Lpc9Lmnnbu9CkeTeaecLXipBakMgDvY67b7U1454Q7k61qHgRoSU6mbojqfhU9kt4evY",
  "key36": "4wuTPw93yDpmqPJyxqAyGpvsqC9juqJzkhjpoqYPpWrBnb6XbH4xRMxM8cGiAcawz4ErT38xjPGd5VcQrbPLFgff",
  "key37": "3j4oLfDrb7XCMh41X1fBgj4sZNo4KtYLe1TF1cyt4fpKCdshzYLtDzDR4wyRkg7LiQegZaSiBDdv666zi9BhYHuf",
  "key38": "2q8srZSLJUtCByvJXc9nfaGSm58grpHhvSnDabCq8kkFWNyQfyKaqxtgjM1LUthczEba9vV7dqJMBBYVRUo2mZ2g",
  "key39": "3K78aC8qqDWU2hoABonsMptouDMyn2TJoUt4X4Ag3ZEYef7kTNZe8Pv6h1ZbhWPfHZkiopTkpqfYAKubsYELDaXN",
  "key40": "44R5xKD9nqBu1Z8WWq2JmVJukpysqrrAXMzhnpxFAtHRBznRzAK9azdidpqjmcPcurXpaEjPAG8ZhCpmUXd71yx2",
  "key41": "23Mf9AnGNW1vyiPE9JoKFWsSq2awJmuy8TV4HQdyQEF784qDWaT2jZUksZ4za1hakCL2T9XtrZGsfATdcyp82qJj",
  "key42": "5Kg7HApVM79RM5k4rDdq3YEBs4hqB9mcJg67yHLCQNGsDE94VGCs1wiFqegdB47oVsoevzBReL1vhBYHi7qeVHgq",
  "key43": "5vgLaDoxEP8pNEWK829YYbxUBvMSZh1KiacX7TVE8gyiub9FqvExQawxot8eFsCNsUBxB4AedQtCWEs59sKFEMYZ"
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
