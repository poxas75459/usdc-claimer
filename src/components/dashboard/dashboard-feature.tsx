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
    "2YgsDVp6zz1ks3JRbzstFZEEgfBUwP97ZBamyn6VVDcAsk13FV41xs7ReJzii9eXQG43SQ7zi6cAZNsgAfVna8nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gun6Rm16vCJmv6SojFF17RYafbys7Ps77XmBb46vXqVtd1rJp6WZaMiFRw2rP7DrNLJZN27nj1aQYHycYDRLqQ9",
  "key1": "33rRngwz8R4TD3Me3SmELGQuTpiYTj2PB9nMt9vPunDi93mX7sp86vbp9JXDX9VNZgapBLtbFATNvJdoEzzo1iHK",
  "key2": "2Aa1Sog7DNbTqhfXfYgFcDm7bHAYSzWzfaEemAahLDGvm4t1GjTpHpML1jNQQrJYWDJNuFFxtFF37XobpK6r8ZgD",
  "key3": "rcQWsgAGBuCJn5kuwZFf5JPZwj6xy6toofXw3R51XcgNpmzTSk4okLcei5CxeqXecyEmmTkMWG3WTmK1j7C27Xj",
  "key4": "Zrd8gFcNtbGH91MCcSwbPdbY6wdnwKpFk87oAhCA8QKBuWaAeRNuchabk1NPbk31R5cb1YV5PRXY1EDVJWyYHvZ",
  "key5": "45qgJxwxzXZzJz7s8MdsFPk1uukah7cJa3SBwo3nhwJeHDyWyKdq43kxrVxv2J5GyXuPdDsuhwYCUcpnD3kyzH7T",
  "key6": "2NfYbnPMrNuUuTw3unZNDifveRkiERqSauCyLSnYUF9dD98xinyKoeZdx6NdUowQ9rnip4ifuNf64u6B7ppQxSBz",
  "key7": "2HGXWUQSohuoCmTNqkUFVZG73NTZWugW2L94ntjDMSJCjCkHWjHVML6wnqZnQp3JNWns9TS7UdnAReNh3tEm7orD",
  "key8": "54vZKkMk3HdVjGKT6B7vJthmukoAn359Hqcv4294355K8K2ckigusSJncUuykxQ5AkmsRQWLubB3MhkLuxFY45gG",
  "key9": "z1yvgVATJRtdhoNApFoVCt4ZgaVRTNCqodEE5jirtJqFFHh5KdEp9M11hHpshnWKzoMxhhvZRXaPfEsHTExs5DW",
  "key10": "41fGQXYaUxjT4WE8b3kV6TMfrSHjLU96N8uMHyUM5J28VKYYoYPiUPYmXgcbU9ff4rwU5Yb2b2ovz8yb7P8EnFv1",
  "key11": "3uAUb75kpuT2AyBN1Mrp85fBiCqQKdahX6c2CejEwp9s7fX5BHZKJ5nZFHWyGdE6caGA6nUzn4vapfw4kvMaHfK1",
  "key12": "aZraiHegvk9jCKwRJUAgnjmxGP2MNRR2bZf26HhyTR9xmZoRwxaRR1ufcCMs9UeRB4h4cN64S3KC1Ppwbq368ia",
  "key13": "35Wk3svUzVSEwX9uh4XDMaXHhpHYxgMKuCza6YGfWnF5tzp4P1QAUAt2SnTGAty6dmKgk3zS1WqkknugUNombQKU",
  "key14": "2d2qsDGLJd635ctqPNUnt4VwJfFwnMgiwjSp9iMhzG3FFkPYd9nALrdjW25K1aeL1Rk9Hz7vaF5gWUjMpNLWMMGk",
  "key15": "3Ue5q9cqk7mdt9MZ4rWaP9AVaaszRFbM6QmoJZrBSgbUADj9yS3RPnrw4bJP6FgeyfQS4ve8JXBaknnP3XbGcnJE",
  "key16": "vUhseVKaSm3TjNp7qZ9PBFyGj6ctNB656r1aH5doDzgsSy5EFR6mLGeZd6t8ggoPcWMwpXDvQCcx9Dn6Wz5KPPH",
  "key17": "4sG52r2tPh1SoACHm6CVNQmXm6f1rZTmG2D6AutYQgttnALrRhLrSdRkMDGPSrAtEZ97jxRE4JYbzW9ip9zqWQW9",
  "key18": "4rRzmuVjtX4CWuQM6MbSdtfovtGcGWDiQHc4kfTNSZrBAbBsysgGLTLB4yb4wwbjnzEJFFCtjE8GgHnVqxpSYw2p",
  "key19": "2LqNQNLmrJ7dKkFpYeM1z9LggVmaoy6xJjBQmo3tHeq5rkCrwykzaqetPsWuDwA8rrfDgTNQ4xMr93DRE2KjWBet",
  "key20": "4yivJpndFNZg5d6VwfQqAfGh4CCTSUsRLcqnvg1YRGdWzM9o6Bb1QNzrn7uDwiWM4eMPxerYoePu53UMB5FS5zr4",
  "key21": "22Q8Bwfzp8bAg58TWpthnKPqT6j17YFbQTJpzH3ngBaSjfYo4qHMJYJEAGB6Z7rFEdJ4qEqtNJ1oTc8orb2Dp9oG",
  "key22": "5MibpU7R18e8kcCcrm4GFpCEun146r1Z6iA5vxhNhPKgBTNoiJ3ehiPjurNEvoGJ75c2z3GLc9gmyAmrC5oAWSuz",
  "key23": "3bQtosZeG2pEiFVocRkm4mEChTTMvbj4AWGP8mr3oNY3s2W4gtFXpUNQazFYFyFaHb1u4qe9bprYrfo7ewh4kcRn",
  "key24": "33WnrJ52e34HDwkqjf31MDR93ZBFefcXQYQav25SJ1Xcs7dwTPav2PycC2UmQev9qCUHprguRP7NV2nWDKbg4AQ4",
  "key25": "4KouavTD6JM9rUZat6Ga18yZJLjXnUxhWmfmCN79hdfwRuFw8vp2a443fNsd9f1sVVbfC9V4fpCutBvf62KAJVZ6",
  "key26": "2dcyzCyQkvgY2jLWie4tjyPf2J4BBod7qKaHAP7ezaj6eycrRejL4WGhvvBAxsvnx53rVFWc1EMJmeEC6EdgLYid",
  "key27": "pw3BLmnze8ftSGGyt9pQEqKVETYWhfzeP1CQjvQXwFcieVftLgaMLnaGXiFhVR5Y1kBHZUQMKmGRUegbGxtqrqc",
  "key28": "3aXUDyDcUbnJeB9u2ydccnwzPCLMpsegt5VjW56tewZBvygHi1H5Qp9hDcxzwSnAqBRkmbaLw9faxvtaxeLEGXiU",
  "key29": "5PgKj4QSrjudmahmSsU7hAgUot9trpzwDid9dorMFd7ZbW3HQRAUy2aeqXm6ABKiUyc4yoXkDPzsgHgCCQyG4CL",
  "key30": "2Mk9Z1FmuhC5PmAQqV4YZx9d94SDfMRWZt381qk5YD7vwL3d5EKCjLaQWfUwZiqtRPStMBsLQDupRgHAybi9bFRJ",
  "key31": "2ppQ47Xb3G41bJpSLmksLqf5bSknh78zcei7wRf2GyCuVPKrfK3HwR8H431PPzgaKxRfNFPJGauek2GRWWMJhpam",
  "key32": "iKEt7GLFg1MVAHKLgyTk44GZ5mkkjTjtB5dKwx9ewTwH4CxDFcstWixpbWJkfFs9gpeRNLUsfKPtn5sr1UDkGE1",
  "key33": "39Gr3VnpxTdLBRaLee9SMEvTyev7njWTa7mFRRFDjwUt2DcfCqh7can6kCQ9NriHW8MNjfXiPMB3DvFrbwBCt8vE",
  "key34": "372VpMfigvuen9QNscS1BHCd78XZwrsCWVrKZcMi8Uzyc12ttDH7jbBxmpcj6NRAmmLhjZGGhBVixnEK2aL8VDT8",
  "key35": "4pE2sCfsiXdzCV2EXdx3Gi3S5M3JJbg1P2dHZZx7JmDauSTHBdz2vfx2N8rjmV1YgndL39yytCLEtWuqySevDjxx",
  "key36": "4GUoW846F4TcHKohWDf6G8iJ7SZd23RPNNgznJwUckiajqB2zK9ShJBGq4Fz9VucX993PpG62bLuKHEJWJZMnLGN",
  "key37": "4qy6b1Ldot3k1GJJDdxkqAuoHWz2m1J2wgPqtrXV8AsdXfwGMzL8AbLpDnHJtcnPHSwye6yZmiCAsqRr8iUFt74X",
  "key38": "2dr8zN7LKPmJSmyaaFTJYUKgAfvEK5XuzPRWZUNPvLsU4q28LWWpc7XWs9ShATEiPi4vphb9v442cfsKyLdjkK26",
  "key39": "3zUaCEdw4wmmn5FLJLk1FVbpLxNDQtvBgTGBtWymVHVJa5RH7RhnhLeyx2FZ3ncQTZf28E86oHKEv1BnSNZaMcyH",
  "key40": "4QGn5yqu2srBNZoYdywrjnqD9hUD4y3dc8b48TFe41SsJ6JoqcF9jbgF9NXsFXXPVLomGFDntxPNUFTJtTWr5dYh",
  "key41": "2ExAZ8R7CWQfrkQmcViQr1TzDjFA8M1NvB1zZsrA5UsQhkdaPaNUMWTFJ2BWLwajLbYQHJgjafRJd6DLRZVbadp4",
  "key42": "1mPFDb874udf4bSUm32paSDjHNYYoLYK8t1aS4g3Lis1ShHvrJbEAG9awdeSrWxcDvoEGjnyb8EWcL2Ld3Txi7e",
  "key43": "2uP6cP4YZAwNvasxRTKvos3jDWKcCquY56BsuydTMajHYS8USEFWHbVewVaEnjKCN2F9LZDtxam2w71RshZCvdzp",
  "key44": "3iKaEg9AnaAxc64ZaBx3KDHXR1QZMdz9T2szXqUCZevsYAPFEwBdFVk6pydBg9BBmmHx49ZULEt6Lb1kBwV1gPdK",
  "key45": "41kU8nbo7gnddRKfnRHxoChxqtM6NWVfVXNZnVetwpjwycEKaU58AYod7e3jNC7X7N3JAf1BJ4wZvJd1nyGEZjy7",
  "key46": "5wFmipzeQXeReuZg9NM59gzribpTLFxeBX2WYDrkTjgepnX8Lf1fERHxTg9L12ye7PRWGozTGkSoigRDh2Wok1Jk",
  "key47": "448egAx4k5Umado1pH5NLyv17h3cSTqTgys6TtTcNG2FhhQQEuVqQ2okwCf5hrV2QSVA1NZ3QZDQZf6DBeaFDQFU",
  "key48": "3nZuEKpRu5NqPzdgBw8EFPFLnAxvjd75fDgEgciLzdm6HTT4mBeMf4MfDkN74cQNctBZweowdTfeqmo3P27duFuf",
  "key49": "5grFs11St9xbgC9bPyeU6Crxog2xVMcpjDC4nVWZT6ZTbGRiJJYHcsTUgovqa6JuaDmn2kKu6WSoVpG7AdVwXBYA"
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
