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
    "3KRjybeA3rH3aWbzJw94niwv3MqMKo3weY6AsiD7miHwPhTmsox59ZMsjzVi35D7dRh9Cazsgqz1rHpHEUjqr7n6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2of6aS9zPBvPLLm84Q6CZkyFLAh814ysKBkA8Smbnpe5gd3WH6Dd9VKUgqdTpxkapBUsMbkAhCgoAA6uXQn3YbcH",
  "key1": "2dkWi8DPyzPmAeobb29hq16nAxkDPLvtVqUNrwTryCsK4t16LcwD7pG7UP3SqWmL5MdGFSqAbtYGJKfXvydPsGQ3",
  "key2": "2SCM9KLWjFNjUQWfWHEBUcJ2dHU237iAbtHRWcfe8G2yDCzoZfGVpvEAuA17tuySjiSqiaKvAXjLirdyGSnV2nFt",
  "key3": "2LqqCQLnNrBhjqawGUJYg7fD286tr5SCLRvVafAihoo38oneVesAMrWRXuoPdHcCTrzVgVsTgLW6KvjWhcrNeytA",
  "key4": "67JDXj1thx2JAGPqDLJLoGnNCpjHw3FKZzeziQ5hkQe2B2tQc5REnUuXXeo2tM2KJBZeuHvCtnU6PHjjw5kFEKwJ",
  "key5": "2m8sgTHYk3xK2bHWo8MtYvyBqZUNPsyQBhQ4HcVkdTtBh29Y55mMih8pBqCfRpMEQXxW6c3qit7XAqkrAU76VmtJ",
  "key6": "2NBPbFxzWd4HqEdV8dTjPKcbXt4ZYV2LwMqTQZcvHJtG5ksEu64DwXhvFzU2Ltf4hKbHnKRDWzyB76vfWxsHAqv3",
  "key7": "WT95cnn7QrrjNZsvByRpPFjwuHMQ7hyDkmukBTMzQ7uc7V5C6ycGrN5p7GyTkj5XVXoXqqi86V5TznDwtCRd7Zo",
  "key8": "5dWhh72WPTDAYSzYoo3D5GCyMnQtJTk9nSVfsYiNB6juG1kK3hjCTvRdnuEMAoDSUMftp8bheX1a3E9cpfv9sNcA",
  "key9": "4GvKSS8Cd7oDNuuf9viCwSfmKR8DFGr5pyWYShGejJX4JMoU1w1nrYhdV25AH9fxNvi3kYudtyTrJwVVUtaMgsq6",
  "key10": "33qM5UBx5Kyk49gAdsZ2N2Nr3e88QNjiJSAPCZdj7Hg8LTsVynqtxUd1sqkQZDTgEwMa2yumA81TVCmLJp4NQWBJ",
  "key11": "3JZTLwb8qBCYQkLsu3TZ6Nufs8tzD1YhgMd9MgRjg1a5KZ9dqKPEUQRBr9iBCdqYs75pmAxmpkBacfScPVPCXmcZ",
  "key12": "2WhgH8UmWfzxXJH2XCAhdvRPf794hk4MrXe3Tuwk7v6Gsi3erfsiGfzNctvWr3rL5WwfKQwntkv4qyjZRzfDrANM",
  "key13": "dHPYwfttXk4ofEccdkYh28V7dXRQ4rRHi3n93h3XmZZY4VQRc1C2YDRgGW7cWxtcprXEFkyyKd841QY3VL1m47L",
  "key14": "DyATdHzQrkvv1sjpJp2CJwSUNUMWym8doYw2QmGQef5fZQz1eztFrUXncmGfHtNEv9qRAhEiExC1Yj1uFVqfHWF",
  "key15": "38FSRA8YQcAt2JfBFBwXkj9wDEPULrBPB3CQu7cuYjkda8S8nPf8D5Y3HamdxftFb7C4hR9P3JBouMizJaeSgJ2G",
  "key16": "N2Sg9LWSzKNXcuzwGdpXpi8YJoREF5veQVmcJyi8V4U6AK3k8ypheFsJqcvzKGTryxLasLTpLyjiWR5gyjwJp7r",
  "key17": "6tLn7W2NFAnPyJQYXtPihkzbLEc7RHhiCQ1kssKQLJYkfKf7N9pACCvppadX8Cb25jKsMj1572XhLtppv3zWUif",
  "key18": "3r1Arr6x3DvSvLooRmGQTcmuzH7HfifoVjXwYu7gDBJBJ51oVs6YcRvnAkoV1JjykZHhBc5vWe62fKHsTRtPjMY5",
  "key19": "5HpFpjuz5P66DmeSQA5zoQ3J4DKH4zsSEnaYjj8zu6Gap2oC7RXXtCSJqKKfaVQVyE7VVaLKgtxJFB6Xs26sdMkT",
  "key20": "3cpyfbGGKeFztSUFaLNN87bV1oW38ybZiNwjkH8rC2cMepq9FiCF7kYG76VW8woayfHdbN7AiivDaxAvQmJCyFHe",
  "key21": "zouEduU8f9rsrtDQhzA7ofh82gdxtvEp2RUPTeodiAzV6e96Fcgzp5em89pVgBoHS7uMD2eJPtd1zTQzRjtvBDY",
  "key22": "3ukvJfhmm6N9s75Hs3gJ9NnCwgJGJFwLREL8tHTu3HZywjmcAkZiL8ocj3xRVsg8VBavmyURuBTKUQbav4EufrHo",
  "key23": "5cNnjZeauV1mNMbsp71ukCuLEHYK48JwuqZSbVRnQ2rabJAWu7KWyTHK8otG9NoanYxzJutFeJo576MgAamNViSZ",
  "key24": "2CAnX1sNpG6a1qTWZ6rqzYkJJHx6v4tLYc7dutj1CkYdGT1a9g8W8XFc4HMvo23F3LpciEkUTDBbfR6TGXZJX7xe",
  "key25": "4L6GmmDtkransoFrSFYh9aSShHGsQt5L2aZf285qT25Fc46AnbDJqRwk8hDjgatZHUSu8obVbPPwTLA6ZGjouazs",
  "key26": "4mAuw6s4JSFWAvVx59wwt1hUvHXrvCWQF3TB6HNxUzRWndk9UGUYjoqC61wNJupANbLpsm5RDoPsnBicL4MpeyZp",
  "key27": "2rpAJsckTQPBVyS6pWw5REqgESHpN9MvZdfJ1z99bPQneh1LxHT4rfEud5jnLXYb9AcJvGjWShMLPFK1caqRQ3Hm",
  "key28": "34dsuM7wJaJw6ozj7wfGMqWY98aHJL58K8NKuY9VhNeVQvMBuixYQiUDrsYJozsfuNyNQCn67r6zCc6JbgDAQLgv",
  "key29": "2hw74KGHSjowLAR975xVm2gatbdevEirDUgymx9io4B8g1QBps4p4CGkTMkMJ3Nc3SarHvkifBqoF2T2goKSeaZc",
  "key30": "Z6h9hVVKTfNEUeuEYJ8VmCAZawYAYQedCbAgPQBuFx81CieHgVDPpWs5CM6rtFC5jUMYyZksZ3sf2yqR9BpF3ct",
  "key31": "2UQtsQnKrvmE5a4GuGkKReEhcjhTnRHr6G5KeRczwkzMfr6XhtKzWkGAuH9iRV6KfpSgtQBj3yRofrfWrt7uFUbR",
  "key32": "4eVALu55Rb4sRdQnypkahQjMfarKVDjqXft9shxKQFcvHFrSV1ftqNwNXJ44V55pQrJBsKQtrVyMLKWZq4izNQ8C",
  "key33": "NDiS9YxKhs85YLkoaYd7kxud5isdnKjWRXdBF3nhvU41xz3qKzgXWgrf5LJ1523CDdh2n17oR8J3bsUao4McF4M",
  "key34": "5dApRKmm8GL3S62QmNABny8nWHDJcmtjuXi2HaVKLzRfgo6L2pjLeMFdvjRS7qe6qoCLCT9XH3doQPY2Sqom9QnA",
  "key35": "3Lxyz784JneZA3W815aFRrwcF94eC7rzPjeCM6esxrXsMNQYh3p3oEsfM2waDiqqCNJRU5nWVpWZz9zVbz7mGuV3",
  "key36": "5emCz1PBNjrhtVtDXwSrMSMKDmQnBau752JgqbKbNhe9suxrZfBF5N4po6aPqATHZ3dMfJ3pREArfn7UAgz17x6W",
  "key37": "66MWCJR9Gc678A5vDcri4tmaKiphxiFsRZUg1S2NFVGDSsWfRpxgaDtsLACCq3LzYiZcUb4znxiUUG9jDEBbNFXa",
  "key38": "3f89HGRPYdxwQVnjSgo7ovHRKzwZqLdPVaLFQZ1sW4MoWEtZJpzhXAWfmAKuxSTPnKAXi5SdwwFRvjNbH1BbS14m",
  "key39": "332Z9kCykXrJK2cj754GVX4KNp7NBYCKXo2QGpKhTQY9hXwBiMV8eotvs4eNAV5463bvzwpKF8gc6MwHVmpP4C4L",
  "key40": "3oE9wVrtxh9VVei7DRTEPazHpUcY9cGgYafdrL9AcmXf2bvsF5fBMFLNMRyuAK3xcaUHwcajejVFh4zuekzH3PxC",
  "key41": "4XJ53S9ckdmqvkQpQ4VK9ivLe6vuHBWZ4pAmutHGmWDybFMhHTUwrbymyxhzDHEXGPuQzjwJbbkyBAa3aA4oeeYy",
  "key42": "3S4w6iWAf6vh4AsyrSefbsht4tVygspEF6XxDM2AX2NBugAhpAu7sfqY8HAQz1R2aNj4Npm2LPfFvynXCjDNhBRZ",
  "key43": "aTsLQteFPtVry4eSu2SuTGN9BdXSq2KRcREo9J2FVjEHMpg58UR2DmJPeGwgE9vESf3xwNz196JfAS2zGgSJHPt",
  "key44": "2bXWPB49yrbuzFtVWAGkP5sXWuFVrzUThMmnydHNyLKWNK8pRpRXqCV3DWszS3HwUvd2pstXgwVyKXNLnp74PwBZ",
  "key45": "D23kof4gaQEHYLTWpGv5NGgfo5oSkinUitijSafkkYCy2qb5DiKGLX4AK82cuLasfTsU5GrFrmyd4nj9rucKVfy"
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
