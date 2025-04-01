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
    "58PtNpumWxna3kf36Nq712TWkiBoa4HxiSRYGo6CqWyUNrzodJknQ6HdhqVs7WDZaes2zBniPFkmNjzatsn93des"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327VdX5B3GSrajxYhJG2cfHz7sNAqhQmyr6WQvgoYiWqao6xaZnCnxpX7vftiqMHG4o56c23B2XykqRTvhEYRBCn",
  "key1": "419bhsE1UtomZ1bpJGsdjW2qLg9cDAiicxnWThBaurPcnZWehUbrKN7AW5mzrS4LBuZPG7Zi4eHYDaWMqYwr68zK",
  "key2": "3pp2Zexgg3KoJ3re1FwKWyiUvcXnZ5VHTEDMQZKjTtcZAkC8C1nGy8inCPinqw5K2NrWEU2qimavca9LRC8sSBcR",
  "key3": "26rZrxhAsXjJZ7HihYDximtkd9cdwLY445ZST7tr656rawiD4mHr78sPYfCyNQH5M8EvmDQDHuU5T2xbvoD2rip1",
  "key4": "3R2XnFWHKssb3MkUXGEqXZyYCMfY3vZiYEzXBDKVmSK8qt6tx2uVHwFfdEvjWVg1NxxcZYiGMDqeFnArbCnkVUNx",
  "key5": "3bUGBjCU24mTxDiqGrqYCQ4K5ea4iUxcBx951y8gNAM3iYnNjdiyJtKUX2hph1NkDNRwHJb5qaSmEhsHazdnu1vD",
  "key6": "36ME68GMua3kynoapvRoaoj4wHdifnkte3Y2jE4pufCpzAfxadK7u4Dq6ib2JJxsrEG1G6jFpn5Yc1Rr9GYSgWZf",
  "key7": "4wkGZEjWRAmB9toBWjGodwY38GCmgjSohNSGbFjtK21jDnviMWvpzqLhJjwwxZtShG9xap3PN1kwT1zd9iqbqymG",
  "key8": "4WiBZvZ6EC9U2XeCAoSLZM3Fg2yS9yGcb79EEG22tfPGj4N8xAjm4kYtYVJh6nty1emcUA44oRrWU5Df1acVoF6S",
  "key9": "3GMi6UL1gAcCkdJJkLEUyMzd53EEAKqefL4uxfWj2hp5jow6vXoQsgxqZrXDC8TJ3UZMQkz7w1yws3v12u5T4fDi",
  "key10": "h4EKipHtXupqAq1LNzgxbvAMo8v9ABiEERmncbCa1Y6KCJb3K8o95LRUXz3HGNfDZVg69nJ5oeeqnfQmRhVh1ni",
  "key11": "zQgSU5to1s6YZr5oA7a2Eh2Xaw5yTwieeJ5RUrmxBe3BTcRKgx1ffpBi4xw8gsaP9YTQLgk3kUU1KVMPQnPNZy4",
  "key12": "5LJMpCCRsJKMjz5LGQxHapQkwdmLvN11uGnjmY1jigJoQrwxtaq5XdiqRmZNKDAdviLWQXXAFenjayKbugmUiWEt",
  "key13": "32PDZi5uwRzw1hakGgLZ2m9ZhjwmGyiQiYbJqKeqz1UzJ6e1eQF6p1YWuddytbCTSsFxA3xJ5G9wuDt7Jd3vLxnM",
  "key14": "5FZ5V775stEFhADZvcWwLGKXNMmt6nVurcNQnyESTuWTR9kgrye9Pes7zKb6qK7iZ48qEyhEvobqLiW9gtUriib3",
  "key15": "2RHybH5agfvMH4M6ag9UvShXwnWSdY4oNbUr5JLXzKBRURpno3Wubgfb3HQbf6PrtkKk3AsmfDJy6iDYHfVLY76m",
  "key16": "51qBvjwZsxha9Guo5X1NAppwPDPQP7kKycCdKymNX1vFFfSxwtLvhmp8UQR7cenny3rHWSWP8RCqiVpPdhR6QzRR",
  "key17": "652FsMyvCiLB2QwCyGPuoz5wVCmxGUwWXpMFrCLkMiZZWXEMCQSwRk3GipKMSLngZyGvaUWstUXXscsRSGXQk43V",
  "key18": "25BFoDMKBpY1s2NAfrFJ1KNTSUZfeTpoSBhD9VS6UNhXMYSXTPMLGz7NxfXrczSABcoKFPwJAV3VFr4xQmfRTG2X",
  "key19": "3yzkdyb9b8VcHcJx7ZKWY22kpEXU8brQ36hAPS3dEMoJBUKu6Nyuxa4EGu75fHDJa3EUT9ePZ6ton8b2QHa2yToL",
  "key20": "56BDXHF2e536oDj5vQFzpbubaw5zGkXbd8Sr3EAk3scrZdJmVjpjPoimmFENUrLAkaFzUCEyTT3hwArVkaSsboP2",
  "key21": "4uipWqPaekagrT5oeXDu6uUvHS8AFenNsfYUNXhb3jLka4h6AK3kLnvx1S54QgSA8WaJbPpYtKz6XD3eJd9sBPtG",
  "key22": "2PaECNqvnGfDoiuj3it9hwCVzwaKFnLD6VxEuRghnFRpSz5BgwBwtFgkvCo4q2xpZ96cUs3kHVMudu2h5Dn4Qt7L",
  "key23": "591TBS5SwhXdWeF7grKTEySVZvpcqTiYvfw72xpnE6YSbimZj3m2D361DkV2PnLNyjoAEzVZCR9hwiMP9iUnLti3",
  "key24": "2zGtd574E3esq38b4Vpey9fMzPiYUN4k2LgRKy17W3gQvCT3iUTzSf3knYenQp7HpJMRySJcouActbrf6YJoXADP",
  "key25": "3DLiqbrWsUvhN4nnYy2wfRysjgfVWaXSwx2keQrYCmRCpeQ7Fq4JkMqP5GX5zvhhRtYi1uRK7vu9yAFYyJjzuAmF",
  "key26": "59veExnAFCjF4T5NJQW88McJ5J7sSuX8Qy9XScoh3VFBW48RjjtwJxgH92Evx57vfqpgkGP9u35XZu2HrW1nHbCP",
  "key27": "3f7js8kCNqwha4mt2SXU2cHuvBGSG2F4fDKw3GiK1hB5ZmCYLExtQ8YR9Gh4KvuNQuEofKGbQ4wEfrTAKpkxyxY",
  "key28": "39m9HcqFsDYXPXoCHDhtPuGSzXdqTP9KXuaRjnnWtxwpuhjJYbpFwLwaXrcn17ADwuAVG3dHNcy2ib8Jsg85v4H7",
  "key29": "4SHDHugnrvy1mefaoXHpVN9BZKkB9QVLKheCFsWLRRwkNtT7UCryHiNv34CwGvhBEjkngw6yKeq6b6PXXqUUeLpP",
  "key30": "3mjTLq7571Jy79sohQr6igangjqj5AcCEhZbbmKiHsbzWV8HGzwijtxnSgPKekxmMz5K8JAMAtGJyYAGbHZKHSw8",
  "key31": "K4CY36qp5h48Uyt8hAXMMroiHzSh4jZCXP9tub4BL1wbQE3g6PA37iVpTHrJsG4E52b3RsioPUpnM5kVto75jHH",
  "key32": "2njWWGppeFgsN5SVBQzHdiSzV6rcSTZAjDR8r8uudMzypFaffV1GqaT2QGfxbFMKRUyPg9Y9JVysKczVXQ9MZj6h",
  "key33": "e6a5H4sepgzWfPGSfe5todzT8nqypttyEStXwen9okL9tNAevUncns8H3YjoHYA3dKL6DFLLBBBfrfrw84H9Y9z",
  "key34": "5J3JKjXw4sPXCpBQbPBrU9anhSwuvi1HaC2YhUBttU878hJdooGCBdoEr9jq6Gq6MNft31CxkC6GdERaT4eiQz5Q",
  "key35": "28gNUVQBfPq421L4d8zva2aBDUi6dJdAa7LE1xe2GtzytJRbM79U57dYgy6wkHzDBjSFbaD2W3iQYiQRacQdraCQ",
  "key36": "3sqUMz2QAwyfLLXNsxzyQzMAA7ovdBsesCUrkDR4oNc31DQpo1vmqSwtRcB2y4hH93gutPDMrYqANhn14Z6iwKof",
  "key37": "4CZABx4aTp34k6hZV1RhKLCokVXTAi4KZpwJzZGYXKJQ7gMJSbZXcKBqfPV5NTgsqE3ofAZVXG8z5QEnDMudv6Yf",
  "key38": "5GyJHb1x7LKxhSMdj4wZd6ap2YzM1Y4bSymZeTK8GdqBcwwyJAZEHHG2V2hGrt8UHHBYeQ21ozmdYrwopJtcHJmg",
  "key39": "4bJB7vNZzv2z7JWwY7GVRgrCH518zkcPfAFXftw4izT6ZKFqN5FM1JYymciuVDZ3w1EooURhYLay7S9b6tL5Jg4w",
  "key40": "qXduQ17o6mT4K88juvTS1LD5m6k2nLfZkWKcU1ZVrsUJsUBrrRf5345J67eh4y4UqLfVLaazhBoNcq9ReWRgJkd",
  "key41": "sbw1Z5RC6tFFY8j4rsEptAMa3Ju39yw1NDRtm8eYijb9NmLLUmfbz6UP4m8PfqtQDiqznHesg46Daa4YNyuzFvL",
  "key42": "2UHvCZnd2n7u2UfD7Gf4VXySsMwBLkDk9scndbE1xLmeKGqb19JAyeg6RghWUBigNY3fZ77HwX7WYXMrFWuWpvsV",
  "key43": "4TSxG2LZtf8mLx3m1EUz4KPJHL6mo1nnSBXoQTY8QpQvB4CxsQrACEY2hJ6F8jEatrcb1jXxyfbbrrKHdG97Eyav",
  "key44": "4MKQnpdaD5HZXZfXn5NKgLL9KtbtwxRnkcvksF1xR3szgH8VioapB1j1vQQbdZhGMwLKpanFNH1cAFsL97duAskS",
  "key45": "5ELv6jrnshQGndALDxmfya4CTXhmVnuMaAdVDMS3tUd4xd7j3A1DyE63q2b5pizLUVQsJK1qxfJvPNXhQsju3xM5",
  "key46": "4xf1UaRg7Lnx5xgbQXwYDr4DucvU5jMBjMm26YWoPL2tpUbBd3AUY9WZgFY9q8G2KvbWsCqAFuztJM8JKf7pQG6p",
  "key47": "2gAwKgKPxWdzDnQg429vVW15ucErhcMpPgPxfBo7rKdXaCCbgXYDaraMUmyRYqyY8qj1xERShkJiqoLJXVX3LqZ2"
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
