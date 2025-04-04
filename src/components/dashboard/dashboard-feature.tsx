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
    "5ZvwbTr8SoURbGnJedT8a6kz9ASfS4KBHPhEiQwgVPSVtJWKswA9Vcuti4HcEvWL84Qcg3XUTkGh7dzM86HDeNBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FJCte5pE5Aspfv7CUzQH9LcgvToAxWnyArBzyG4EBXBfDbfLfeRGN4o3aGexMc63DGAYGaGD6ciif9hqddEh9kg",
  "key1": "xgkKh17xp9QoK5DWkWjFScQSoUu1ayGUvEfzQZLXKycbWwSzgM252T855ME7rc6ircTJpaUw18BAbg1jFyHLbDE",
  "key2": "2QXL7SWE89jyUbKXjFJbJ3kKjgfTqREnnu71vDNaYETmDpSyuw9wiAa8t6Tm79LmdhYSpziZ9Mko9B2C32bGnPGG",
  "key3": "3vCa91oQYQ8gbeEmBLJMyiNfQ92AThFHGoL5SK7vzBbqRGYmzCpAKmigJrEYtLB85iyjcs72DNJLvZc7hgLRNnLa",
  "key4": "2cSnDndshmhEUfvKCdj5MrGcwr8fUeruATWyhmpZ5iqXeiBaa1mBJoFZcwPFCqKkM1dD55SxA8jCni9S8ek6Ucn4",
  "key5": "91upwsw3fAm9SVZhC7RkVHbsHHiHEjrjhvi2AY2uD1eQxiEpzZ3ToUykqX9gtvSd761hqnkoGvih4rAs34Av2AK",
  "key6": "kWzwCeCK3eVc6C117z4uCYA83ZjbXcFHdwWtVNQ5yNMbx1f1wGDuVJafJ7jarvFruaXNeYYMrQDYFsxjJtf3Z8z",
  "key7": "5iueHkrGHodyT3y2eHe3gWR9F5sxfa4UxdWMhtweFS938sGBCkSjjqX6Fm8txSYptdpqJCcKysbziXTcwoqzV5md",
  "key8": "4SGUxpCcuyarc7wCEcyAEwpwgkSPTeyLNS71Hw6Pb1FdwUatBWqjUBxgTc62g2WM2hp255tX1zbKrS4H5MiPpg1q",
  "key9": "4kxjptbX7BVZyEyyh6A9F5GPwmV7Q7obpJESQXXxt5MWvHoswWfEcHXZVAa6zq61Um5hXwemxxwa3X1zHFgTGvtp",
  "key10": "1XUTRTmgdaKgi6N7vV5GJS3tBKMJfpM24YBTr8t15MgEXb5y5nxURPs6XvLEMJSiEn1hPswNthASDzvAmKDpK2K",
  "key11": "5GzypXHTTfLXnXdN72YJcsagx1xdgES93qq3eTeG3iVFx5cUn3sicZgiYq21ydP4rx7Mkoq55dp9e1eKH93er346",
  "key12": "4RFBWroJxkE2kz56YhbxBhHVNuGmrWoNWaenD9cdzs79FwMnMZ1YLWeaBUioy1t3eSnKLtYSWRue9SFXgGtPPrLb",
  "key13": "4HfU3Ev3HYWXq9jCvis58aWRe7sRGixhiEN4o34DQmKRufcvAp6ACfRYFQtFbqE8vDNCzaatCK68zt7EsZaYD7JZ",
  "key14": "3knGfQLmZKP4bqWfzFeAubD46P8Hjd9HpgQ9w4SNoBfP3E1ZTcPphaBSX9b7bxhwkfxHNYNURz8t7gSgUBi4aCG",
  "key15": "25UXg5PRLRjruuaG9vL6GunaWVsiufGJeJmjJXFoAYuF5V3ed6GrjGVJv1qHEXsKja9Anc8W2iSn9mun875d6B8n",
  "key16": "2VRZca8wF2HPTHkDks5gFat5RUoh5DrbUBM6bNoHVM4SPhJX3qqK3UoxdDoWqPThtvYGRRhU6ahUVvUyXVMprawz",
  "key17": "2F6rhP8mXU9fEN4arTjXojHB6nbEGaWBrncuixy22DMmQbLy2185saaLtqtBH1msW8nmxiXiMNGXd5LpGvcien7U",
  "key18": "4ZJJbkNgQdkmpLTwHi796ggxJUc6Fn4EAV8zFNLWKHKaKqWwf64r5owkd2mFXNEFwKBMUsQgfPC57zeG9afyjPFv",
  "key19": "cJdkeiNL3xvhvj5SSVcTUpTJ6xpWGk7pTSHdHqmmx13YMjXfzgyuP4TUJWSTuUrFp8MqWAV37cz1VteNmTckCj7",
  "key20": "5DDSi4CucpwZrA41UV9FJhagdZUJaEJYgexCUaKKRR8U7zMpWKe7KqZN7XZT4yBBgFjnU7PeW6fdwE6iRtGknZFT",
  "key21": "5fED5xA24YNdNksxwxEhEhJhYNMAaporZnDgfRPjtSL1YyXxJhvmw2KfMFDiuTjQoTnXP8uahaVmJzRMTRaTn4Mi",
  "key22": "52CDx2jxuXT78Dg7g6LSEG1fnw287J8F2B9kpSySLjDs2MMpgPvX3SrjNNVicF5ti2BUkQMQj6F2U9sc9PLNH34r",
  "key23": "2xBa8H2gquk94367xZBi2GDGnvi8uzAh64L2cBRNVHRE6GeJ3cavqfMr9MqAj6YTCG9AFkQY85yAAoa6p7VpJwYL",
  "key24": "2ufvpAeZRTPA85hVWmDHmnw3Cn47TsbSkceW23E9ZYVkDPYH2MKFBwvWJ21evM4ShtCxi1dav7MTeTG1P9Lx3T6e",
  "key25": "6LGe9USqpcpLGACckvMpHXMkbxpSAyGTzGLfSwZQJXgHxXtg51M4TNYXoRtxx5t1PRwe8cznruVYxJTt1JhSXxb",
  "key26": "36zouG5ZJM4Wgo8KqEpZEsMBQb1io31NGwp3cdrTtUf3Ty8a8vRTtWuMN6g729avuqbyQgRSYJLdwwauUFgydu4k",
  "key27": "2tkiJvEVSE6Pre29EaVu5PjLPdbfYWX1ePxvLmyPmm2KPqCgLhUR3j8Z7z4SQwC4dwLCxs715aMVkfjYReg2rzA",
  "key28": "4VekZ7AxYi8tpbhV7o4PVAq24NXSp532kFh5Y79pSG6kAFzt9p9Mqd3TpMuFKmnBJessZKhKxx8e5dHqDSNU4Y8y",
  "key29": "5jSpngh2mLqHRGbUmsZA7PRSHGAJxYhMK1K88cMhvgWuyvp15QfoZpjddeC4jRgyZWwXThZyZ8z9yZppzfahTGAN",
  "key30": "6KqJmVpFjiLnM56x5Q8kb3uuE7Cs4uTWfFx2RpbnE745scc6pUyUbdqqdhCwu1qA8uNDWHgBhmfj23KtYaM5voX",
  "key31": "2owmTc2SGtskKo2yaLisDAdAjtKwiy5Se1oeCxToa1SwM8dLttwNgVCAUHyD6pT641SLcD5ncbgpfnvA8v2LaXne",
  "key32": "5B7Z893xzcspgyK2MDBhTCe6Ubdc1Bm9AiVadu7e8cZssA5S7mHAb91KSH65vvSETQTwz8Udy6AGHox3tDNq3yej",
  "key33": "53wvmDw634HNRmZ2w3dcW5uwMRTreXT1ikC2GWGeVidkKpcUFxfeyHUQv1iMgEN96vXiYm5JTbJFfq6aRHCQx9WM",
  "key34": "DECKVimS9Y6uKGYvMWFwA43EKuvxLrdvB3y6aCXaZ1WqxCpf5VRnPjS4doAzYCsCSeUnmDkDwFY5xBzMLCqKFgg"
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
