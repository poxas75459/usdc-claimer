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
    "2x82m76npEL8gNmY5E71gAtU3aqEiUbQo5cgrMNWyDcnzsLXfB2o3G9NG3eV3bL9K6Ry6pYCcxXoLafY2sSfWkNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AyNy3zNUEivTZEEGBe12EKMmhBigEd62pAxyBA7zDERnVUy4nF2oFdRy8exUUznWEihHMNud1CH9xigJe8iQ8zL",
  "key1": "3sVHxaB95ihmH1fVXZ8BrhqU4wLzvW5jBR26GwuNckHDghe7BDGmVxfqZL9noV9Qi5Lk6t1iXgr98pBrUYAZaVoc",
  "key2": "3Fxgibg2nn3K2AoK1if7djtEfNtP5wLRVjjqUQTnwdJbmBvDwtkXmnoCZXZc2YbhBnVLnjcPKTaE7DFvL5G94HPi",
  "key3": "52MLLxG1EN2BRq82HdeqeJB9jCzqhkd72opwBsiQY4MHtge12PWD3ydRzGAJjA6t6ayiuYN9VNtmptmsNjNBVcvT",
  "key4": "2M2oDBAfn3WJ7zsErt8PC42gsm6cBm4AUbSTFGgfUNu3b7LCyuLp9mFPxamiped6iHt3L2yVFSNonjFtJ9BCqbyg",
  "key5": "CBnPucseKLPRUCeV7CDBjcCHWnPHETXqEfj56YywToGbEP5BgrHmDqCuALtNXqNN1s5qo4rbfmuYyVXPAE4jnEC",
  "key6": "61y9ty1E5MdQn2bYxwkesgjTsbQcu3nfcUK7mbxPdsThqp7pBmMFsHrG1fMokXmyHcEVLyPiPsKbSEedxKvCu4fN",
  "key7": "5PoXugEBQpKm5tTp2srVPexSR3nxy4mYG8xgDCML3ZkfPqEwKyyesLcr2Sy4Cs9QNZrNxoLg3LnF92TLVg18k2th",
  "key8": "48tvrogMKMCtyWbR1T5NvdutvttpFx94fpfY9L4RQSVcyrZeJfGLhRJ5ZACKV8pCNRnD5yD2fk7MToe2jGXutbQH",
  "key9": "rNVS5KRbFbCTvZs2ubbFcfSVXZqZBRZm13CrMFeDH7HvcReX2pM27J3pViJpHhdud9ysLUXWSEwbUfE6TFVuzUF",
  "key10": "51AGmpcTLKB2dzW7mhEGjozpWfNsMCuuHQNyzd3SmieP7mZQn7nL5MbtF2E79uPZUT5KpgMhfpVtVCmkxgZS6p4q",
  "key11": "oB2oM6S8wMQcFhiuuu8ysSuyTHN8KBHggdLhsT7c2oWmvvTLMKPRudqG7DPWaSnXjcPoY6vz9iEK5Q2mWKzqx8H",
  "key12": "4ngp79rAZUb7pTpaqMSuxYweFQcHYCh5hH4Kon8GRkAVLcUCJGLCikwHtuftiYEbvgEiroyP2wGiKk87nB9EUf8Z",
  "key13": "CEs9aLmK4bxNZyfx3h6hdJV5jUKz64Zi388BdzCBadADETZ7Vk2afPPkfpEmY81jfr7ZhnDq2LQ8gM8ncT3kmrt",
  "key14": "2S2z3M3QswKK65SrqL3hbwWFgbHUcjWYbCw62oPPVBcMEAhVz36Jp59G1JjXtDS874qmyFu3kKSQ2cLQFQZY9hP3",
  "key15": "2xHp7u5ZawWN6vnWZpYwR44eDbP7iCV8wvHjLLGm9QNwVYh7U8bGT5oQKmHo5RqbEcZLJ8q2e4cmZuR83cCHCkrY",
  "key16": "5iAY1wgirej9n2jcgZFou5Fpiiuxc1yfqbJHM4CDuXwhpFgUtfmQAiuM5LVfbfgooWtCW6vP3fR1iJ8BwPWpJgYZ",
  "key17": "25Y9kzjMkEjy9TeM7zgLQzs4EkneiJe2aSeZeh32Wjp96SGxoRhHcXupv8oN3S2X8uLgw3ffg3GzjLBXsCY1k7Qa",
  "key18": "5fV1YP5qYFo1h2jUHKdsWoW1hMLAuhwfLBWdq8qCpy3LynKqeAt82jaJ5cJ48ByqrHbaqTTWJnM9fBRvpsFRULC8",
  "key19": "HNFXaf5K65pRybLV5CVd2YKf6y35YCM7ApNqsAu6vA6yi6ZZZM16WCGUYSwSR3UaTBL9KLxJpjF5qezwrtihXcw",
  "key20": "2HigF8dBJK6uUJuZuQk1Y2DD5Vw1in6f4arhjuqSvTn2SVqHEdY6KMFMvP5JEPpBuNM6xxV1DUhGXoeTg6rkZAhn",
  "key21": "4zKdPxEktdoHFebX23YZ3yQvU9hXjGtYteDF85FgGvecz4t3Fc2qddzCfF6uW3yJxpT9ZgHe5keiaj6fGQT8WDyD",
  "key22": "BKDLi328fLq72YHGGTXaYy97bY6zeEaynFwYDYtSZrASrLkK75zWbq34VXzC4G3BpwG9VcnbMLMwz9Vwy3jL72a",
  "key23": "4yDfRnADUGJzFLsYNUaugsRMUmnMobCA5Fbi5sRxgcgqLjQ5AjBdjipKQ81nLyCpWVJGaUqXtE9FbN5zHLs17vYy",
  "key24": "3mGaB6u24cjC2dPSBQhLC3MX1ZG2PQo5bJZfY3xhtxPALA129EV53vyPWXnjrh6VFTsUHV9bzQs9WgB22gVY6YFe",
  "key25": "3kNBiT9Jdw5bwXhxMpuNw2DtckdczEcVovbEqzmwDDoc6iK9WERvF9YDMgezRrbLVKD7poX3QHKvwzYozNSkRGp8",
  "key26": "3xD7jv29iqNGmGjiQoG3YkcSbgo3DZjnpPBWGFUBwBHHpXmDPe5MPdE8T33KHiFSXrWdUd3GBMrGddWJzczkSjqG",
  "key27": "3esmqQPzqZAXxhgVo2jh6Too6ayr11proaFgi8nYXFoSr1r9Zup9P7rGfnGFPrhvNV2EujoAg4H78C6GXDqGU7S",
  "key28": "3qaagWLUfPks5DPqkrH4i7G9jxoPCGYw6Lsb7khKvECpSJYGbvUWVdxLZrzD8Aw2R2E9GBKi1jsSvHLYrw8gErpP",
  "key29": "3JC9wuoD4EPwKYiZNfifUugdPyJJ4KdiT3EgxQhfuZJNjCDMamtRFxk5C9PSqbVSrk48eXrdosHtjVxQvthy8Xp9",
  "key30": "2Ribum1LwxztDMK9d7V7FavyQw9BX2t8Y1xGHhrkhitHghmcQSQ7Mvv5vHpmcqk9RfcBU98J54BatSgpVqqiBtTK",
  "key31": "5zAzvT5xYULrSXSfw5v2n4zBcNkgTX77rHBDw4mVMhcuVkbAF6UbFEtfgfzYKurC64SFWp6C8ARCeRR72K9mxxkF",
  "key32": "5JvESJwdvYBQuJGvU9e9rNGM4NQh3bLuGf25jHGKRaHzwaJZAEhLZJBk7SDUpCmFK2JT2ReLEenLSbbxZoTMSTDa",
  "key33": "5zrZeaqotisHVuwTbQQdm8AUM3ByWzCZWBS8rMFGCmAbWTD9yiaRNSAzzjKKTLWgaLmdHqenFSqsuB41f1MLGCjy",
  "key34": "2SwGtvvpSpA4xLuf5oSxQQMRBmtkJryQBVBSrBoDJNAvDdhd8wjhoreosW8tKqi2otdpr8bLuvZDvbHnQw7W7pWx",
  "key35": "5Ak8yevGXryBDAWXBiHfF7GhXkouUsrVKEqf82gDhDK1BZPXoviANCiJ65Ldjf3L3xLhbPJVmi1tTQeUiWLYQ58V",
  "key36": "3UCb4ANLvd3yeE8DLi6PX1z7sXDiNZGcWwVHhFvchEzyjmkHBQYKWUhNWL5SVrf3xyHDDVmMQ5U9dM7HfVSCS5s8",
  "key37": "33mHCTyThxvSdRkP6mh2QngSchvxnoewjNrQu2QthjXWfRHYpJisy4hsfR9RBp8zXqgUc4BVHt2PJDUKJwp2zUea",
  "key38": "3cxuMCEHzDxNFLQYaC6qoWcDnuH4KhEdtLc54qqoq8D9f1edUHEUfxpbdqMW5f5rpi9B7da6gDYKZHFU553E8ASE",
  "key39": "2bevtt9G1Gfob7ovBZ5S6NYfEP3pYk83NgXPnP9BaotFCjeXzUeBvW46NKihLDStcHVjtsJpXMwcsGCNU5Khdzem",
  "key40": "3U1fHtat1ntVbWtd9xFxhuPoWGTsa8eEiqboAQkbfAF6zimTD5xrTF5kRWvRRXCukhLASpt9oPhozvHDPTRavVgX",
  "key41": "2eKV9mkCKwfRfvLEG8rFcSX4xEuWtLTxZJe6CKUFWJy98Hi2QfbscqyHQtCjRLvrviGbuX1E9TBB1o23BQCqy73e",
  "key42": "d2SYCMneBcyZPW4CvPVaRa44Df3WxcT2mKWsH9G6iicNyotRtcjfM6UmiHKdzHXtEpCeBJr8ihjkBQMBD2Tprdr",
  "key43": "2ouygEZjkFmUcVAFDyX4iuRDd6Fvv95kso7zatC2Pqg35LTLbnnP5UvyYhG2U8GT5PeM4m28q3j3bSQuHS1pNokG",
  "key44": "5PgXnCExG2JrUwMXz7TCegkHViNrN6zRcMdqk5G3Bmuq2MKHHHWcVzjqYncyYjyYC9skpRt243iVt4Z9Zdump3iA",
  "key45": "3RikSmua9AaACeq7dKv63BZgk6k4RdowgC6G7wSr3ND9yLgxUH6We7GUjnQVtycPGYCpuYH9jZkZKytCATgaa2xK",
  "key46": "59hBBXFByUQFeGpXfGBnGJc1AG3Mp2LnifQbuPjiyePQEX1GKwMdWx9DTrxX1N2eWgxCnSYXA7L5f1s2mLQGuPWT"
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
