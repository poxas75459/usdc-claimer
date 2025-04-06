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
    "mEnv6WNWVU9obQdZtmn2wCYLwtV1KfifGsSUvb6fc7PFoub6zCDVcQxp8kLKsJSDKZ5W43bVmf2kuogCseqbnfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3yHEf59ZQJvvMZRJJubeVGsAmKqtL9HERWqbh5RqZJkBTjWavK8T8PjKMSXGZ1GgHhrFg24RB3jGvPH4bD25zh",
  "key1": "iyuzeFrXc23PMu4iGhqrRiHv4M8HdgXJ5D6phBds4dtJtHRx2ex6SVPGPiHTDMrenSZoo5YC9gbJ1M5fiw7Px7L",
  "key2": "55RVYRHtpuhJQwxmAY7JoaaHGvVSY6dXYFH1YSvmPnvagZUqZAfMP7aFV6X27vXnAwcizPZeb7PE9MtCcmFSBKcN",
  "key3": "3SMyZt96LiGTyZMVfBUXtP1edCAa1zj6JSfwY1DLsiQHu5yfGCVUAuupJw2bhzVM1Q1dhCzmxD1Qqikm26Ux5g1u",
  "key4": "55WaFNVpV2EMxQktsNaSACwi32ScSbQ2zF281gC4qLpigcmGFsqBfiEFmDboiqhmJqyzx2u67z4kvioxRG7TWNZo",
  "key5": "5G82ybZoZtPccxYWfNP6vgcmnqVYhzLS14sJR16MM3MS77sJSybvzf8Br4tW2jojMmZbPwwESXAAnNMt5vWqX9qx",
  "key6": "4e996P9ci69A1SqhaRzGCmEBsbbXPHFKrGVFs4RHKNU42xbwCwUmYKKVLw6oCSomNCwexqVZkiAy5QtajQxeBaHJ",
  "key7": "2XeydEkL2rce6jRt5N4G2SWhkNRyHdVo13tFrGCZkEnhVJdXMvQVBaG8ch3a8cKucSXR8Gw4bQbkrhxrPZFVRCRX",
  "key8": "CRoqgBRj5DA9gAKCY8sAMxcGAPWQAJAwmtc4Lj1sSE1jM9WPYSVNiFdVyZF2S1E1wxHbJv5wGrQSzcUaRuems1D",
  "key9": "4GGFdbXk4zwQBoFa1n3ywunnucNQkFnnWVbNYPT6zMu6R76CFRyMhRUT9Vgn9qaWNhwJLFAe2vAKd2fkZishXdBD",
  "key10": "P77Q7aYWoV9bqfZP1dH183wFdNbURBLtjGoz21ysopdoGWar3nuTnjkVvEWHGLW7jj8kkQSqhiLMwkFQZdSqSy9",
  "key11": "2Ut7cJ1woKeewsLyc6e7bRcMU1MdrSAA41DuWMYKSJK7mVZzh5H3nRjnsrQi2oJoqHJc2QwXyot2ggMwnWJdnK71",
  "key12": "5E52mg5oYxfGT7nE2iHYuuHrB3dkgFkKnPkvuZcJVAANAXYCLYcy3EDS4uPuGCVkgdzptzFBb7Ys6bZdAK8on5x3",
  "key13": "429ZptBULh2MFk73oQU9GjFVmaHk4snZSBBvZ8MmbUCBeNJWGVFgQfM8e3hp9jhdfdBa5oNNw4WHhGQNYqEmDQFx",
  "key14": "3t121KNrntaPZ5QvekvVQsQgSmzFFZDE1K8M357syBdVs1XBQ4AprV4YTQr7g2nbJRm2GeKPjVoQ1AFrtTbyUZSc",
  "key15": "5R7WzuGPUDSr3MSV8C2Hn6xcPkgs2ZHYLyx8ympY5fhVw9EDmvEUji1E2mqK14jFypobK3GmCogzkNFw99gnehDX",
  "key16": "5y2uGLsZKG6CWWdqfUVscXgqzkYd2dAusn2npsDTSvEGvM4FRW3HFEdmXmo8uZaGYZAw7KzFNaxFnbZA5PSvPx9t",
  "key17": "3eJSu9yR5uhXRUsEc91Uaiui5tEn5EdCQMMGLmwRxMCpo1gUtmWbhZUwiP9jrjRtsZBvtVN4VzZF1wKY4e1b7PU9",
  "key18": "256AMUjmawWHSgCP3VvLQFwzFz8dD6wpeaYByb8i1GfuwuPei5C3x7dAVsHJtnLPvwDRJxzmMCtWnEUd9YmN3DcH",
  "key19": "4SQC4pBchqeYmWNRwQW4o1kgXi2keZiXwbo7GK1pBpoWvuqR7Z88qyhYeS5U6QNLNPHv28C3prxEuXfBSrf3oUsS",
  "key20": "3Zcg96bkNmRyLJLHcgCvUnEXC9HNkFdShWkENcDDKuCRAnWJAdN45hz2g39e4vykjUtkQi8RE7NcvrGWbE4vFY4V",
  "key21": "5h8i4tPW9rxrftrE4C6Y1nmxF44PVc1vspjw5j39WjfzfaPZmh4BQtUTLSZ7MEjv29SoxLHpWkDFWdF4Q7CNWqsE",
  "key22": "2xEzUWxedqZAtw9EtzerAGnvBNdQnzAcTFhmF64W1pXMtWhgrJuuQHaJBBiL9MsqeB86dtc3Zt3uNCZjkaebNM1c",
  "key23": "33x3VE7QH1B291yjuP2im2Z9t8zHiFXoB5YmbkdXF4ojThLoNWCyuAxtXmgL1zTPB8LiZccAYUcYpTycnSfP13MQ",
  "key24": "fynN82PgGj6S55fpgCabZnRf6ReYikoRduRfk2XuaHvSyA8gW51Tm3Dytmf2YCBkFzdwmy2FiM7Lh1J5Nv6pGxt",
  "key25": "5d2ji3rkbxV6rQBQomFhGdSzE4Y1AbshozczWvTYERznuMA3cqBAB1qdKcMTNxqLwnVmFw79QLU8CUPbEYc7goLm",
  "key26": "4b1NvAPSPznuRTBvD7ruLixSY4YGHU3Cu6i16yT6Ea283jxT1HNHQJxecCuGnQ2UqCiQwPRNNjHoUKrvYRk1YcES",
  "key27": "5qNTCzHqbFRkfxDj9brCCThHndFx4qdnMSNLPntv95zoaVwJw6kTLs1CJcEsmfM2aB3Qb9hXf3S9bDs1Y9xRMYuW",
  "key28": "2PaiGSBPCdGNDn4r7Pvdth73WE8mqXhWGnBLDmTUGCJcLJi3ci347rZPwCFPjD8KxqJ2rSWvwmq1RkaaFjSfCjtX",
  "key29": "63qdhDCxRomnXzUjMzUKwL7gautHCAoxeDjfYQJucKRCeaLo4cotnWDrb2FYYsGPf8vX9MNaFvA9V7JUNPD2k1xP",
  "key30": "2LRMkzGWMEMeUbJDKBJ1oQP4jUUK5tJtBSvEu7YRZunv3rZtnRik3vu7wwyJL1qbKp1LfX6KXjL23qroQbhweF7z"
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
