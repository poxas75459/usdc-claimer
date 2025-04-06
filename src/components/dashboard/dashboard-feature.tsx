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
    "3DctHnTBGq1ACshxdL8JGCLPnbx7DFg9gouWerLfwze4pL5Yt2SZFK7gZC5EuRjYqYstgoMwXdjGhd6RKCgmW5XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LUa1r3WxTGvf3W9FqXjLFrhmUHRA3Hs5Pzn2QDAcHYw8yZ6SieyfjFMWLZZr7zSC9Ve7yrLuPyChocu1Xd5wYCc",
  "key1": "28aEVo6cq3hxM86zYw4hAQLBHMudNfZFTbBBsTod8SMM396Mp58iD2ACEofacmjRQtGDr6duf8PPaJ7xVPgY3Z94",
  "key2": "HHFrraHqic3qf4EGwK1rbJjDSoYypcbQaAgGdoPAJFzKLQ6hxdJmsNgxerEkD2MGkaTASKXf8jRtmJJi5uF6CAk",
  "key3": "4L1KzUdFZ2jVpvxCFTPEy3ZXBxZrfUQ1vYgn8a2HVWPL25aEdVUZNbjpmNefrqwotWjoBGXhpJ7rhW3io8KThGMZ",
  "key4": "31DvTEVP4Y4thoBjYVCRCC6kSTc2kPAVe4ToLNWFEfwNMMJAFgpkhh8nVCuz5H9xiJtj96bbb8NeL7Qkr6tdczV1",
  "key5": "2jqUCtKWTEqR4uY8tQKbQVTZ21Fr5AcYxWruG67gF1JHzXFzWSCW6QokS3WXFEEhao4KhYuihvYLaJCt7idZxNct",
  "key6": "5PAdLsHQvHJHoFb14sDhFT5joUUirSkMLjWfppMXVPtxTozVMLzrXekGXpehfA43YGf3Bx5bpKBimw56cXvphBWg",
  "key7": "2g76rVwgwzfuLB38M14qkM2NtwVeQTaXZhaL5Wjw98Zc18Qym3goLzzkH88Fmks267LQnte3oYv6SwRUTFnLRw65",
  "key8": "3a4q9TnhnnwbHFRwKeB65kVLpAr9bx3Pm5MTrzJaee8341eGtVzPCQZJefWW3VcDCZAcok9ksdV7sbfRqsu9sqbk",
  "key9": "51aedEYYsfPopLMpU526813oYCgJDj2aCLbkLDJZzwWtAxu2fccZCss9TTL3DeeD8qpZDvE8jTESnY58dEM5vXt4",
  "key10": "2mCNhxTSSTtCQCzmgtkTE2e6GnFxWH7EZii97Ebf2sCGwNMFFXE5faG4SrThFQLrkPxjSYGRi2EaZVrso1NbNFnN",
  "key11": "3v5zuRrs8Sz1t1GHsAR7C6wL9gBBsYRMPYmmpV8AukoDjaqxsZUKKVq2jSZHK8RbgBfM4joM64vhufXuy5Wszxqh",
  "key12": "3fr9hNjVzoFbx9GupYSDrbfZ9CuDx6vfEaSCan3DY7ACJh6MD5hE4gh7KBMGgUkUmYtTzAzn71VxybGA9b9o4eXC",
  "key13": "5zVuP1sESt3XUX54kWtvxKc7jpBvKVzigEMjrh5gEPCtFG2CKkcEXZZoYHxqHZwHni9aH1am9KCHE1U83nynzFsX",
  "key14": "4HQWJHjrMVwrGXvvFdfRd7GdGoFMWiJ1vP9KtG8zd3WV8mvnJXPeSyxQYtakMvg68D2VSP5kD3eGwTtV5BwkEgLx",
  "key15": "NnQxvPbeJTWQVwUGcddsTPB1G9wcwbcx77oo67h9SCBXh7Z9PoDUMB8tuWrZ7YiYuCLsed3URjJEjdWGN2J363k",
  "key16": "24x4uWGTYTYPbiNxskqP1DvYWjcsN2KUtyNCBazVgVKf25GwpSjzViae9UYsDTJPtTAFSAP7JwmAp7QNGDdoSYv6",
  "key17": "4q9oCHbFnggNWSAJ3JmMxFV62Cdz1YAwCQEi5cp74q7wYPWsjgwgDGn1V1rKma2YMc7K6FQnQRJ9Kgktk8ufJ7m9",
  "key18": "4eiCT7j9z1ZgMJC29UZGtrJmvkqaRCR2En2bkdswrytRh78R9XsJVUAZ12WwRzBYd1wwRfuTbX38PgwmA517qXn6",
  "key19": "4rrcVjcE7xfXKQVySSD6hTVXMciK6w8VhEuCzYEB3WLk8tsiyiTEKFXc6d7GJsLrnSk5y6KSKsD5CSUx1Zhh1EvW",
  "key20": "3GUnP1UQPpLSXjXdNacJntb9ubk2uu2DRrp11o9MnV1aj63VFKCzKTjdWeetmek1WnXDrViJRvfJnw3xUvRoq9p",
  "key21": "4Njubg111sdpqSKP62dmVzbHetzaFiFV866EjxjrBdisr7HwHnYuQFJzYqcadkxjnc7EsxvMJux8ts1DT5vysBEN",
  "key22": "3i41bBTso7HEA5f58Xf2sb95VifGNtWpLPkt64KYt2rYrh3zu8xapBghukMRV1tqKA1KfuccJcCpJvcygM4p9wJi",
  "key23": "5zPgD6kYu1JfFvfk94X9Psgwp1zQJmHdR4grpmxidA8sJTPS1cdtKmfwy4L6vKdsPhupEF4qk4avA2KyNuML1g4L",
  "key24": "2hWw2j1UbcFxXVLBrGhSqzT7fdXpv4mWtbrqiSVFhddvKPDwijRJ1GmDUGByM7q8ZZ9qxxx5oocebFz9oaY4LaBh",
  "key25": "5NFLS4f7xY45kqzzL5hBXmXKLCtGGsLsLtuw3KZDqrbR1Vo95k2FAjQHWVrLtP5qw7dJY7FM6KV8JF7gTUR1An4E",
  "key26": "3bGkfKpqrEudbM5GUhGdEDhrEiLDf2iaJQuhDLiXxbf5KJp3iKb66hn7fehBPd4PB5Y94BqipzafShn1EsQnrpKm",
  "key27": "3JZizvViWr2RHifAPWYhh9wfoTXMiVNny6K7oDevnr8psYpDTuof9Aeg4WQzwjKtaGtwLp4uK1mwcDcqQmFAubwj",
  "key28": "5m1ceBTHzyGCfyc7vbyFMTXYUBtbbVSapbPu4CtXztfUX74o2g8ef2vRZeURwDCjq3xYYa2xbD4Q9RByTQ8wBcjx",
  "key29": "2DaMXRcwKScw7d3rC5QBTDSJn3bS8HfukgWmrhnebAEScQ9bw4McJX4aCLxqNbHfdcSb9WCzVgKDPW2kdeFJ6Csb",
  "key30": "4FWhgscdcRysoQqLyLrQyccyHEEgT4We5cU8RKSRineoVa9ZFWpQRG6LtuYY6S7R8kBhrbGwJ5mmyccKjYkddX5z",
  "key31": "3zSQx4iHLh1wh4gTLwkyHrsmgGrbXEHW1Hpc3a5fHxbczpGwpSr5Rt9pECwHF1Hpv1inv17oqNDoaYwQYLkMhui4",
  "key32": "2GsWR82yygGXZ4GdvALv5gd8UVhvAvKUW7LwBQk2wZuSPQ4QKBsyxrgCRP2b9monUWNHxcsxWgdXabL3iH78KtSW",
  "key33": "2h1orn8gJM3Ff79yoJmT7sbf4xqy2hSHM3t4wSGDbSS5f9LZKuePC75WjQw4zPTX4vg5f9H2rDX2Z5DLDZnxzBw2",
  "key34": "62xcLLz5gGrBdQeJspVLYXk89VShmAxaHgEcwFkuBfqtnjsr1PDnMvms6w83VufTnJSjCmk9rFSRjLTRwyBm3fmm",
  "key35": "2e4WxXnwTT7XoJ1eAy6DUn5oQBMzg88eycqcUSugFxcZHoaBexH6YXdQkpp7kFQgBxyGHX15dxReYCPXSnEzXEBh",
  "key36": "4oNgxkuuYfvLRdzA3Bxw6JTYe13huhtFACV6sxUqmFa5KU4FBsShduouPWnSgE34B7DN2mz5pJxAZHapXqShbVpy"
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
