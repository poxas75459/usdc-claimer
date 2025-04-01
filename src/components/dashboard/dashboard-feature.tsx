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
    "2xxsDrbJJpEhYEFuvDFgnEi5ioyAohGz9XfA4zWZsbYNVYCPeonxPHsxgU9fFScfPPj5teioYGs3jy3RBJkAzsoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1Woa86oYvN33C57SEEGpXKZoaADkeXgynQga8aExdnaZsbndXnRLirbd2q2m64oo5Etz3TDCuMjAExkFqyzKbr",
  "key1": "3gpeTF3WyfGVDRTiVKoXQw4gbLioFtaKTx8MvTD8nwD2QW6ceki4c9wsMSZ9HoBE2SLTrZpLr5Q5eehz5UMqdNbL",
  "key2": "Pukd4ovgJEHMh4vSevf9qazE97bywVFYQkddKZy1geSh5FfYMTMaMGGMTxrqhEEqqDzHjhdevZ3WurNAbUyofxE",
  "key3": "2x2X8fXN6ducaZgKWNRqsHkyJGHjGBR1RqyyZPVFJYvdqi6jEGruD76jw8W9LfeRmEGPiQeNBMNG4asG1tiRFztj",
  "key4": "4dRSwuLViCni9f3e3tbZKqgso3CbGkXiLsZz59EG5C2EdVcbDer2Sow4WxrKBnc4JSFa9FuLuoJMGTP8DDmuKdBh",
  "key5": "4guSnMnG44SPixnZkySWfdcvd2v5V29LhJsrZULFJay5V3C7vxMhYiLSWw2LmRTXJCCJy4bcfMe3AYekYS5Etyh2",
  "key6": "4xAYwdYqgvhjbnsPRX3H7cXCqXtNkkWzqRG2Dknb1AjDAuJPBzNjGX8FVCWwEZxmsJXRazBx2P2zBnRKJAZjpsLH",
  "key7": "62RrqB5UoXLuspLoMT9eD8psQu1ja9aok4Z3ko2HjGGwkDSkk8eJzbx3wbhwYwGFyNbU8Zo4WseKVnyAtsLoxT1i",
  "key8": "3kdmw8MsEMNdL3B691nsJTNXjBeCay1synB1mPoCm5Xg9PKewfxWeuYd4shTn2X2GHdZxyMhimmj3UXtB6GFfYWm",
  "key9": "64WXswZfN73Qksrs5jwdRyXWAkCEQa4z2atNMXyLx8hxKW7G8kEKBxV98KqC2dT5D3GqNougrvgzosyLMT6b4jTp",
  "key10": "ty9rHYmxkKzeGRuY1KYdS8M9XAsWcSZj6KpSpr153WgTUSJmN2EwJ3NxgNEVpbJa2NZFznsaPqPN4RMoYhwwxkX",
  "key11": "4MRcCtXmo3bhF16owexebMXZNkb4YzVPZsukDBCj4S4KAhQaXLZNAmaecgwe6LBHH9gZjf4MaQZ2AVCvR6tYaWaz",
  "key12": "3BvYhEy5EPMM1KJ6i6729TKMgk2nd1qcRMGgw6d23MsGNqQ58pBXkmcbvQgfVwrtQuY3veQUTiQP7Fi41K6hLkXg",
  "key13": "25RTMWbfkAtUVNTWhrBPj1Cp9eN5nG3xBqEh1ZR7YFumGVCCrDRSPx7RDphy7hyissZwiY5qHWzc6eqt9ncchnu8",
  "key14": "5nChbup7LyhygrDy3k68hKpdwFFuqRzv5VDRWLxrueEoN4zPgJA1u87YZrusUkpqCLg6atdosTbbWYcP4iri3wk5",
  "key15": "4J75wWyF13H2fp9M5kfudTAN2LiFEVoVC68cZDQdLeYdQxEbdJMuXcGqumBLvYi2tBPZG4msUofd1293bKtgSgB4",
  "key16": "3eFZrGhoENyYcQnjjr426CzDLhQFUaqzurj4gQzM5BKJ1or4pdScNMvCf7ikoQJ7BKHRhd2CowunGxrV2Qtb1skD",
  "key17": "41poQ72XGXfxay3R8SF5E2zSq11NeKt1cYQC1v86so4yk73qiieQLZvCfvNXdHgx6oQQHz3wkbDpndo7Y1FzZ4d6",
  "key18": "5Y9NPL1Zqwpk2dS8v2YCC9yTfxnnQEtryjpNReLCG8FmxNov9yJQzUzNoAhsUB2FrabSwZNgmFczCZUCpyZRDvAU",
  "key19": "sAYA9BJumWWa1PU6QFqwsERWkpCsC3kkQNh2Reh9P3baHD6i3Gq4eDYb8CfEaJdDLTG1ai5Kx3GSV2G7LZQzuYp",
  "key20": "37SLUtqz7A12VfRyn6bBtJnE3amCfGMyw84eJx5BisAxtUrcj1txP35A78YWGNuPbU8zdaMSssCLyyd5dPAkdXhw",
  "key21": "5owfLfqqFEgjvLwJVvGF8jrmVJ4rV2FJ1kA7ZJqzBofj82DjnsRpTCzt2AjvnqhYq2uQXB52TUVpaX8cCBV4ygD3",
  "key22": "5DeabAtGS4hRNCMvSAVdKQryVZ714AyYyBawCW8qfMsdFFxjw4oiJqNKKgCoEHvYSScv2QTfkNWCLqkxtYnVJaGg",
  "key23": "28U8e3b72WpAfS22RYtMpoNVyjkcT7mR7feo8MaDodhxHDB6sbHeFn1kNrKKJAXq7RcK9HRyZXcccFFzeGKKJNSa",
  "key24": "oY76dMnWdHtwnF3GQZrZErHxDyvPQjLMFvxXFtVxZHmVSVF18ZkuZ9jX7sGCpFpP7b21xbYZmuYVUXAz69V4e1E",
  "key25": "3S1d2svGyi9C6ducDC4xDpKcHChJ8q6G8k8dXccA67Qfvjdq1yNfkHKLtLLGm3HokUgsWZDhHJwPMTZTn3FjTjXu",
  "key26": "5XxsRvAnEHoLjBaZu5fhoeRXCKAnMfyWgRMUUARjcG6RnUbbgfj22YuNi3W3DFJhxGHCwaYwapqQ9AqgXLtQzzFu",
  "key27": "3zfkvpZhY6DQHv1VZSbBRG1oYyBwydJM5FGEeGoTtuvxZkdVKTXPwqWDLHHp69SShjDapH9LMPTk8rxDhbdoWBfx",
  "key28": "65Z5Z4Ckd4PcYZ6mZk5qw2k6pd9Qdhtq6YQMuFQzyAt23aY5x9VVyf1UjDqDrq18o3yDRBqujaqmFxgh7aVFyJzj",
  "key29": "4jbgjsEMXYon2xjXcEjAyhmBvQ36WVPiGXakDD9zqU5CXtnY4q2oorFRkzDm3T389aCPuX84GNHU6fF3bUuTCmD2",
  "key30": "2PJRVUC72oN3a4R6AEV4Ezf51eT5KbV4AypQ5Dnqh1B1BgoSVd4nebJq8i4prR1pPtUKhwUTS6qkt4rKzGx8WSGT",
  "key31": "4pPJsvQHJWte5CmTx3D2RhgrDUPJPPY32qP4buGGwuokYuZngy5kArKkZorHcbAywYKpcjJN48icAaj6rdsqvSrv",
  "key32": "3vS61rwYN7BGnAhsMGpSDs2rg84zYNd83fEA5TSWNW1cnUzw7QQH74hXA9Um6fwmz6c3CVzPZ4E8JZHdYLmYQR62",
  "key33": "48GvTEygFP16688WSNteuh83TSWcRRRT2akCZtmcSPWNL9mMBsYjru8eAe7hbHaP6hQfhKdLTHZShW2fRnLhhah5",
  "key34": "4yT4w99fmiATUsENaTqoyd9R2Fd7U18S6wsYaKMzpUK3s28YkFq3W43mhGbzRf1cwetLvqWCVAvw5uQnjDY3vZUG",
  "key35": "hyQ6tATXtHtsLPqHTwACrHKGPJDP6KVtG4nwu8qZnjwVSuhYV9hefbfX5bXkQNBkiQrqyAGkqHtRbLFWU3Uz99L",
  "key36": "3AGw3Cfj4sRSVhC9rRQvkYJwHw8mbDY6Mn4LEikeHUhiB2GFsetBiCFBgMnZG2tHsWhT4tzq7JPPjbGc4yNU1SbY",
  "key37": "4f6N2NirGyKcrtLsyn9u4LF4UZ4JntLkrdaJLMsckFgzuoGgRLX7t3cgLeyFkRyGAqJwBF6fGeW6DQANHnxEo8Lt",
  "key38": "4fz2cL32roLq8hsNXK4W3X2cZXa3ACbmtmtJfwMq6vKDJPSfuiFmGyg8rYiC9tn3ojeif8P33q6jjNVshybox1TT",
  "key39": "4WLRFpHU4pciACeocipzbQafcqp4ErwbcRZkk2DE26tttLyYtFEPSP5itLwUW4oPS7sT1EkUggRVRjV8iTKQCXni",
  "key40": "5XWpwDezhm6krm44Tcm38pQeuvB57xBM1WWPpCFv3XxqwmNMJDZzNdCGWE7bs47vTYecDBkM7pNRP3L225VvU4cS",
  "key41": "4kcB7gjpSgGReXC5bFeSj6sQBAd9EodCsuWrDtQ7gTQTAaL9v843hhFuJZgBhZdAWTpExM5udXjJQLBsrKrSqVQm",
  "key42": "3Na5XQRE9jLa6s3UECnjoUfzhLdFx38ZFZ3Aec9GzKoB8BHLp31aJNZdyG1jwbew5XCjiwNrfH6zgYG1cVZb8TUJ",
  "key43": "5hPzQjhE3Foogxm8k3zdhwQNCA7LE93LMop957tcaqnJYLVJzZopKsKuBjZcRsUfQAxBZT8jzNpNirszqV1EgVuc"
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
