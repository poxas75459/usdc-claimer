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
    "3tkd6Eo6qcx4gtr3dk5GJM3kDxbZMb3Vsx2sguiWurX2iYEFTfxerHTkC5wHhEa2RFPVJq8pEf81aVF6QbVweUXz"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4vCy9Buat2rAnr8vKphLVCHhAkL1Mnmyi2UHxaiqjcxxYmpw3aDN6sVRHk8Keeo1DmHHqfWQLL63f4TdfJ8CoyaM",
  "decoyKey1": "3tyDPd1E1Fajv4Q2Ju9KUTmHXDH6nKiu8eXMRcxV3SVbZf9AE1EvWoWbeJJhdkzjJ2kh2UCiCWTE6Azv5eQV1RL6",
  "decoyKey2": "2LUZEJ8fZRXpuTQiVjd3Y2buCuQPRqceonobpfuE3EgfwgxjWo8Wa8vuZfRgWMZ6fmuAptiQi7vqYiNxNZS5s2xo",
  "decoyKey3": "45fxkoVTjYnehw3WNwCj1iw8FMyoT8LWixZzB5banfUduDdfFtdb8Pn6gqbKNTmov8P9DrbeFbA7u1KnaRSwyZfT",
  "decoyKey4": "2p5xTF6nHQvGVTi7XE64b6zr23EWireMJB6pJhpvoUrfkVGTcEhXdGcQueeBzHNnAc5CwQZtk5KmLdEbMKBGU8FC",
  "decoyKey5": "4eezPrxqc2M5ynV8umauDu6aspwCSFAski7J88a8PnfGCrqHE7ztxFCkE4CfotaBiKjcXXD3X8TfNLD45QnFwz9R",
  "decoyKey6": "2ShSHv6NT1egs8VjMpxCQNjHchE1quurizXCKkHkuTNXta16f11NpWVUbzbSKVaCpXqncspHyBUFmQKByrz8qVEe",
  "decoyKey7": "461SnXRLTc6iCXVxMy2HWWHFvLaN1eQAPwtBRa4pQia6tMirQmVjNGywYLdWFBQNHKa8QbfrcWTPhwqETkHEf2YL",
  "decoyKey8": "3WquRyvUB5BqJYtrjysmkx5RXp5JeTQGzRsYTF8jfEm5YsabQvNQuesh6YtdWxGuzBgd6jgiqqCK26gYmxMQszaR",
  "decoyKey9": "5zwzsxKjrFMf9ya9Xh7zfuuQLuXH27A35Qa923FBpyeS9Ky92soGzgTp2ksFy6z9KAxFBEpwGWkiJ6jS5x84Varf",
  "decoyKey10": "5jUQDd2SzQPETVxUv5GN5pMQW7tAmP6iMD7TF131Q27Bts1HJ1U1uD2SX8aLK5JNpv3fxU5omBwCEcMWPizq1TcL",
  "decoyKey11": "5DNqWxX4pUhzormjpQdshGoWJd2wKkDq1ThKHzh6wVuP2jmKLvW8hTz2LFB6jTkT2xHdUP47HLJyCff2SZRq3zF5",
  "decoyKey12": "5c9f1pM9WKqySHBiCGWSjJYrWMaP122TsSYYvwDUa7TQDk3qMbcWUoc7QqW6pGvn2NG6jcgAS46v1cpMHVhARu9a",
  "decoyKey13": "54uZwtA3fZYtc2zLjy5E5iuzvLtieft9mr4GUPjZECCRvtHZ1kxYuXUsrxziywXFsDWFtBio6q8fEdjuEziVwmZ",
  "decoyKey14": "5Q5NhoKsr7rozvHZBqCVhZYiQCTb6kZF1KAmm1DD7YSYf5JVe39hFGHzm2WuVbcRHSG1TyoZKsAfPBbYAztUPkQi",
  "decoyKey15": "5AqQtiPEX5tCMpkNCR5xjQv1dfezrJJ9nD7eCQ7VAE1mXzByZcpxXtnfBS5U6WTHvcy1pk2SJpdfEwnR6h7AcjNG",
  "decoyKey16": "66q69pBKeA3rWPcqN7bNDpWB7mjxETYn3rFW3UJpS1F16V5rWo9Tty5SrbD91BtJuj3eGjFCkeS7MSPDMFWv437S",
  "decoyKey17": "5crbbGKaJfsrZK2NW8iJTbLtXewnUZMwUtViA3hU4Dn7c9nm7FYqE8TUNGvaXXWL1EubWnSBfeifU83YcFCS4dBi",
  "decoyKey18": "6bPK7gK51M4BugzHPhU7QfFsRdsKTUNKXkeLJXznSFH4j4MocXaoFV7NQCXBnyZvAEGBMA65iVFicaatAd28bEf",
  "decoyKey19": "5ivnFz9zQ7irj1fnErcHpAeeVn8AijZe49RVnw9QkvnQXk51ZBYUzXNAtk4bwRPy7PSDd2FeaSkS4bwNgtQKF6Ks",
  "decoyKey20": "3coLP6rAgCyPeMMmgucvRHQJxsZ3pxYwLAh3sk7UaeVPvywkNQZKxdAnYVBDECdq5typTYDXbeEhsz6b5J2TSte5",
  "decoyKey21": "5tGm1E6LBTxJJ6VvL6TCTC62TUfW5MoM7aDsznt6bLgYYHkUa72gwWgZBHsUHjGYFWDH4NDVo3CG2VG2PdKAYUtE",
  "decoyKey22": "3e3urmr76sCSTuMf1NXqgji5ycGm99T4NET766oUUAsQPtaUGpJoPTgwiPzDcWWjfLpfHooJdZ9MzGLn6Eh6QGEv",
  "decoyKey23": "2ELRWvJRcizdX9tXrzDZ5mbsadS5drSBc8y6Wy7WbhVL6cdmFacut3HyzbeU1MppoFy1kmFd42KN55jTv8oPi49P",
  "decoyKey24": "n45kR9GaqzskUKxymM6cga2MqYauqRGTyrFEZKeJNzGA4VLHpReffLsQs5xLoqR2CBc8xyGDsD1SDmtSwthPsQK",
  "decoyKey25": "4PaEsVt4muQHdY6Bv3J52xkrsBmNoHCQGqdouwfmaj9Ha2o69V55jMVs38ZzYJqVFzdQQf8oXyVZhKs8UzASTNes",
  "decoyKey26": "2JZC7tBpaSR7mYjgJ6AHeWhrmUbh5rCg9y9gaCoBVrg2ZrsAnsP8BQQ9hJ2C5RoANvC9nsS31ibeqZMwXmLtHyDs",
  "decoyKey27": "461V9RW727m6qLAsjU4nqmAZ9QtXd15D1259CBdmvcga2tLdQpeRFqxQqibKp3R26uGfySQphnfxy9Gh6ornwKxd",
  "decoyKey28": "3jkRjLFKXozvLLUn1LXqLWxhgGNHE3ZK8sqihrbXvhyvEc1XkVfYYJQV468Ro7vvxFXk6aBPSY5PdeobiU1pUEgR",
  "decoyKey29": "3n4R2L881sogcQLvox6Fyr6qkiRG6aKo8tGQ1YFdazDgTWx2wSbhSSPmSx9jepdjBAFgAtw4q1yipRkAFP3MJ3r1",
  "decoyKey30": "58BAwv5LHJBPjaaHCbcPubxtHyNbTRMucWJ9ws4Zeaj2gZEHMM5EFX79CvDeaMnVskHMfyrsTX3CavJLi2xnCzWD",
  "decoyKey31": "3AoNRZR5y51A2fET7de8HVKb6kqZ8KVtGj895Tuj7zL5TLHDVWzrZmpfrmiYAtLcY93zfWWXK91V6jQN9exLry8c",
  "decoyKey32": "61hUKVbYWCAiZbChq1Xkhzkhzax37KPL9BCSNUgwCZZif1MPUx4MUU8f2goxbkwgLiT316bLVtoijaGB7cARheG2",
  "decoyKey33": "43QnkhsJFNR71YnUCKSXQTnnCkzaAbywScJLgUg9DwT5gxhpBxAdozmfLntHNwt51hnP3rvFCY5twfAg1NdZbEf",
  "decoyKey34": "2xSREXXMMQYxu1mN77VxKXTqb7guynf2u6118rKm9HDf4cYBtXKJYgr7gV7ZEGQKDL8XFxhbSAB8xuq2rYcZKH5y",
  "decoyKey35": "2hpFjXURXPSTL8CYuAaBD3UyFNyGCTMb3gLuL9ebojQYmixnrS48qLgxeKybcKfNGfkr9sig1yDHFuRQuwV4S2s9",
  "decoyKey36": "5rZNu17bFZfGrPZmw5hdaxUfE2oudJW15MRWnEPxq8UVAqczKoVYsBwSwXXQgrwS3qSGHjhG6WdMTPt8eMW6m9mV",
  "decoyKey37": "4BS56tHFhtyCeYnKDWgAMotCHnMr5PJQf8AX9HfetokdW43gTNhKndes9dt2enmidN1Ti2ij3CqR9StoSr64wVBX",
  "decoyKey38": "5nrHP6eNfvxpwkwp3XQNoLhXDeH6KEDWgfTcBe3d7CA6xusq37xBg3t6Yw8UR7FwG81M4yndvv8hGpicRBqNH8sr",
  "decoyKey39": "4rery4KUeHrzC74opoKkve7xyUiXrcZXPYnBwYrC5L9Yr76wH9Cv4KxDRdJjDpZRnWsBRm82i6PX89oRhuetDoey"
};
// DECOY_KEYS_END
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