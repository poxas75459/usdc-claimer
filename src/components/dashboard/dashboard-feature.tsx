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
    "3DT6qqLy72H4Tc4tUn1wW612namcLSSG5heaSeiQMxh52UZWpye9D6Udu2RTcmpqPynKFjHFiRw3aCbTaYxoHoLC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hQ7XXnPBvoRY7u1LNtVFBmf9AGoZzLP6TYD5BGoLPo7H1YHnAWz6jHZe9Jf8QC5gLDePuhwn1PCqaBgLmquMvix",
  "key1": "2SXMsH3dSekTGF3BHVswQdJ8k3KhVWLcvvu35J1pyFSrdcY4RxG7T1oc7iQVQhcaBRpqz19GNqMQb9yTphbYj2zj",
  "key2": "59Wjic8bx6YkyZjxarKZZzmGukiiGrqKSz3kHkqXahxPeJftUhpgiU9pxYXa2Z8qPpTpnzWHLbzSMkDiQrkDx5Aw",
  "key3": "3Uwf945sKxFMobw3z8bf3MoaEmwhHtGPpUQXN7LPZLVvL4bqMSPRbz5K1yjDptbymaoPAJiM8hVFUS1e63qwMqz8",
  "key4": "5osNei7dhYELCPauaUgVRyskD7nXuYLw47QSQkkRE6YWxpNHmh69nfXVDt74CkQgUXL56cAhdcFBxfYe5gcePcRg",
  "key5": "3g3fEYssBSJv9r3jJf63njvDDJSkUgzBW2SP1pYqDzc58aYYAvjDoNZzkpMtCR5GC7oVuj289j9roWkrgRDbTvJz",
  "key6": "Namx7poReWraZuC9tyMhC8JNByQ4GcEUjS228u4KT4PaexAsbpjUHECoCjb2NNayL6eKUCmdEezsAxtV54iZCqb",
  "key7": "YnPyiWoadvSKaqdt31E1q261mBd5W7zk56NAY89oXXFBNhahCHsUfRQiFZSzAZknnYZGvHGD4orrWXwV2pybF6D",
  "key8": "53u3sszjGctAMFkbPca17Q2JdUdLeuGzYiWGeBxeqToC4XqQjeSJT44YXnN81LkT5FXA7aeAH1kTw3Bg2geJjUVR",
  "key9": "3agd7APDfqkkR5SnaSDvG47vwpT9xUF5HsWyYvT14kVwBnpYMiihQUsAsxs4MDL7KvRQpVTyRXhwDKRwMs7dkBmV",
  "key10": "2zprmWHNFDyvEEhbR9Tiy49KoN7diym67F9GnnfcqKHN95U7QgX8ajzAgLAv5YAndbTb3jWamTvhQkSdJmEpJQi4",
  "key11": "NwSR5K8DZu9BhrF1fPGgycYkR8MDPgz2mhyhsuJ3BwtLnxVJZo7BHTzi4eBrgsWjgGSYsFbz693oJnECEYPAmSv",
  "key12": "24r1oKBJKcCNUHzb1wSwZi5k6ixtn6JEHMp6EKH3nkVW2WwyNPvC5YpCtinDUMLMpYFztzu9eBL5idn7Tqeso7eM",
  "key13": "3DEckf8AujGxsD7B8qyzHvauKESLTnwhfcf9x7QqFsG6TCYcnCbRCiBDpmLd7akmTUS3s9A4mZKzD7FVD59EpMht",
  "key14": "qhMmQsF4Gn7GKRsCdHNvSrw2a46oKB3B6GFdAx64VxX98sLzCSCNMzf67r4ukccfTMfAeGB75eHCcFNai8aNZhd",
  "key15": "wk5rE6PZspQUVob4NTcEKmwJ9gNLfzVxbRHD8q84kfEmCJfYZx3TdKjQ7mCE3Lia4GJG7LND8TFdwptaYkg73FR",
  "key16": "5W2rozVxRccvX3bUzmGtLSBfAcTp92s7hrHAJkDy864TMdYwKTtZiuBrpKetWTwgW3TFHq65RfEGLYfJN6cwzVAk",
  "key17": "5pjuA3ZNpYVBhC1xV6VVUJ3EJa4WpqR4JnQnBiroxdfBjRhA8tEdnZDP1K23oD5BgRfsvp3dbCdiytE3xBjYGeR2",
  "key18": "3cSmnjeKtS9tXCJvGdqPAh1t8wQ8HW3ckCdcEyfmKCU6Zzz7hUUgSgGEq7DJJ58wvi4vfRWVgXMGUGDeGR6SvQXW",
  "key19": "4WZxwEL8jVEsCDZuTsKUvuVhj1J36KEQCjGELjSM54NDuP4rcnTCz9puFY2cayJRtodXyhfsFfszW7exYQetyRSm",
  "key20": "218ZeWNSRmdqpTUvJZ4LZxZnpXf6LjZ96qHeBqwN6h7fyHpN4nRQTcgR9Ku6fBEUTt5yShfdyjGGwCvH5RjxCbbX",
  "key21": "5WXPbZuVEUodPXkd1h1tQyCHt3w3x6gQNFaCH4JFyHYZMq6jVixeotu7gYDP4V2Xcw1qm9AsKzZdSCU1benb7MCS",
  "key22": "4Xn8gSwJi6xEUzR1cYE4dVzzmaLoLsUpwkrrrSJfEmUTBLAajpqUL4u2SngB7kvTPBC95n3VASTUcmqn9ePxp7Cp",
  "key23": "3ynQGGq2jdkz6ZBpZHXYm1jdJZNzQTsuoKWwBuhtowFwfF4LR5mw3VciYevFXwbH14SjKgUswSHyMQax39BNEj7e",
  "key24": "VPzA6dqCTmy8RPamYQaEVsMRf8tSAzVkYtmqXFdSoRYKQpLwgvoH7N8GiYVtDBoHszG6GayKYDDtVAVFQ8aorWn",
  "key25": "3PThNqwMHHtoEdsmxVpaWnseQKujEzvRGPVtSidxP1KU2nc8LBzsBNgCqJmcBLj3TwRgjf8oTQaTgU8puD8yd8WS",
  "key26": "2TVCMAaiZW5GZqdKpG5A1TPjYQETKUEXLpSqQdFmmWob7F7ynH2gTZYzWgMQFP52v7uRgG11MQAM6mj9h8dJMhm3",
  "key27": "TgSKkcoxJjwQv563rVTQApgfqgMcRsdazSViH8UnEwCMVkUYzat5xhGhQvGSRzm3eivPkXuhfagbkwynDpFfmWW",
  "key28": "ucxfznFRg7Qd8czVxf5a2rVFeJsAzBrm4KFYW6z4Fhxg1hVBnpfaKF6xbt4n58q5c5BX2BWJBfKrPL6qfXNMiZj",
  "key29": "2NTo1sYBdAsSPRUW3iZperoqUfYozgtLPKrk6sHayKsd8FVwDzZrssaERKrCDcYsBYZuxTzujDXScfbDczdHCrFN",
  "key30": "275KH39k2DkruLsBtUm4VcJcgPxHYPzW4s5xC6pBqzeyBsfoyZEQr26tYUAtb8y2vEhtSTi6LoB2R1UT79H9c9GK",
  "key31": "fC2o5mTCndVUGHcrFEdUn8Pn9VYdnA9VKp5jA9GuJdkoLtJhVTKMejLzmEFtpSoqJ4Q8hLhZUWQpWVFgrxyd351",
  "key32": "RQn5fRWBca8gCuUWds3UR5htPMwunwCFJEppio6NgAw4oT76Qb2tYGc3qFu9sS5CAK79RcF41NvXVMZKDaczq8U",
  "key33": "3vZfTQDTBiLENEbwzx6s4fNynoNNasxAtFmF9Y8hFdDSgZdKinv3su2ssKHWCwcMsiS41xx6heqnTtbnpXra8ZFZ",
  "key34": "3s78tMKZiart1Cq1sp9ZzBKaUr2ByZcRzvEJgvFtv6bvW7ra5gPgjo1KK93d4cR52S45cPBHntdiETaW1MRUNJ74",
  "key35": "62URiB1d93dAmu2XqoSxgeAyEJYwaTqhfFFCJMaAAeCLut8bXeNEGM41Je3aJWPpqduowQLwpRH5JrUH34bwXgge",
  "key36": "4Px6LXuQmatszb8DdjTDKgjy95BQczpw9wzauNUGrCea4e5NQTSHRQRym35dhnNoLWK8ZgKSjD8SK48UbzdafRTY",
  "key37": "3GUyHEdZx8yCxRKSEe1LQviECfitaKyuGDZ1UjTLVLWp1aJTnBdVhzbiktQScmgxNhjn6VR7hqAiFpkpGeAVahA7",
  "key38": "4qaJubWMiTM6nEymLcc6Kgy2oaDs1R8o8tAm1iX4c1QzikZgw7SBHhehgdvhdYKoqpbCTMSNWhAjcChR48Zry355",
  "key39": "26RQjPYK3DDJhEDHNYoi92MwnXfZnu7D71Kheu8XtonBfBj7wzR4Euqm6KCKsUadmpwNHyf8JaBqCf4VJf93YaoT"
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
