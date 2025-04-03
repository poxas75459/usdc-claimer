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
    "5MVzDrUCxdUM5xZjvULwUWqkg6YtmJw9EDYE8hqoP4751CWQRnZbp2hAEu8H8bMAa66FJgT9axTmvbpkPkaKPzVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SW8TQHrNJ9c7NSoTtWELgo1Xz7o33oqV1ETfn7CAqfZJQhXM8GbxNzu6UrCozyZXQZM6J9XCEWTRcTHtbdQ53KE",
  "key1": "29FzsHchHYD23fyfPuEBBhecBbmNbC9P4Z56vuqS7q4mCVGLtnfBjDwyf2WASQAKbEfD2yV5gYDcm3cdmArE5NN4",
  "key2": "514zJFY2aG37qHsJcUdce1zG7j5JVFhb3vh4hErCh7qgVQMj3hGCqhBjWdTaWjzLEVHQ2rWKfNX3a1xLg4SWB4Hz",
  "key3": "2nzTgKJ3nz8GAbsbCEAmTQ1QpDVmBfbu876bfM2qExvXc7ginuadYyoqFRczuGZdfiiLUSciFeEVALRTM1omtCT6",
  "key4": "41SDLJSzpBMf8CepbPy5F9No5QkrrawUvCGRSzhGiyubMgBSRgeQDuEPUPYrnbs1NYdbNHqyJ5UE7hNn2TbLPCWW",
  "key5": "3KysaG5JPNhk7xG5uf8ggRf3UwKzcNvs8uvAz2hEWHUSscTvqFL39atA4Cd9pJYynQ1sDkQQXrkAofsPdbxcPq7Q",
  "key6": "64Ght2sHnAR9MK4qR78qbQJph22Tw6XDQ7LUzTbPmUVf8WxNpAmmkjFLc3LYCCHR7cxQN94ZNSPE5Wvs5uTTjPM5",
  "key7": "4hR2PBzZ5V123RCAknQUm32JCqP4SJwNs9q35EmtK2tfUPT6RE2wFtyvPSg6SZr2ia5JQHoHp8ctvQ1p7fLTS3NC",
  "key8": "AFKVVLsGmj4mgsVo9fpGAtkBs4NswBnbvxidtGLB4bkPszc1E6iENJzQCQQxqn5oAarz7g37SWijvcjz14kgp1U",
  "key9": "3excpY4KgFjx37bdoanKo7xwjPetHr4fVAWKRBhBH2UgXJbhv2WXZAsY8AQhQkXJSK6ebbqayd2Dn4vsfvawu21x",
  "key10": "3SQLVsvsYj2HVruiLiTe1QQLKvm25PqBhiUdoJGYEMX6tQJbA4DsT7vQML4vvk7SM6frAWobab7NGRshQiXDyA9",
  "key11": "2bxvm7x7ufpM9uGQAtavyesW2Uudw3joBpHR7FRbjC729rp5dW7AA3ksmRaZeMkQ969P17VizAhwB3pL97a1yMr5",
  "key12": "5vzLd7cVyTa3Ln9gW199zCUQE2RLXuCDrmt4kAATNf471QBfeEdJGTRJr4EDRpE8QyvTTghyx6ENrqYwizKwHGQN",
  "key13": "2MzbxQsvgMpNd5oRZHs7GYqL9tPjjz5yMytkyfjBoQdnysCu268KSHYM6BNcyPCdqCB7E9nZ88t7aXSWEToC7KTY",
  "key14": "2E2QNcUDWmMQw1wwRCPvvV318Nd1fwJXJDRFyqjEb4s3w4iYoztrZZ8QDVFaeJzj7Wj7KM9XbAkgav8FcaUYs1ZE",
  "key15": "4hvqyUnEdfTCbvaEwg7Lm61hVxgLvpBvg7uRibKqnatMWLvDvaXNtf8jxiwQ1nZAkW55g7Mk7wFx3vApH2vVfogi",
  "key16": "4861ucFokpecSatoygaZDVuz2SSFcJsx56JiNF8pVD36MXvT7ngobNKwWBTkZ4KtxipxFUFtG9YwS4CJB6dq79TD",
  "key17": "3YsXTWCwDFGu9QXtzxky6RfuhpKGYW5XCFxyrzPSUNkT22BssRiR3bYmmXskA3fdsQYKkBBqXhDuKBmihmjjuaCp",
  "key18": "g1LLi8NfHsFsqLmBpndEsskbGTCuXW6tbgX1qpiiUSX6mzVU5Q9Cuve3S5747jGMziaZSEwwhsNCyJNBwrQNQYS",
  "key19": "32Q7YC4Vtwc5zQ63JcCt9HPrh2416CfXiLeGh9gvRCEtGSkkdAHrXB56KE56Yc7TdZUu7CrymqHiwH7QxdrtXa8z",
  "key20": "4Q5D6XdBAuL1xUF5A1YLMoYAFvtrzgJ3XgkuLbQBm5pD7gEqMFWvkjMjicGNRysGxoYDSkwNXFobRKoyKF3eYXct",
  "key21": "5f783MkhM45QaHrPDGX8Dcd8K7Qmc9RurUCnQGS3ReHmDyTftRgw16EXkpPee2BnW5aGd7sYvaWRVkQRUzAMqLgb",
  "key22": "3mmFfxPFaA6rAXjwjsKjuu1cvYfahVZxyvNv5cciSkLRnPYabCajjJh9QUgAz3Q9FsChQLYwX1z7a7BK4D8AX6oZ",
  "key23": "5FQULM4YdNEdVdBvL4wfmdgN5kcKvPRj3sqAsQrV1yjgHtTp8LNJFf3wW5uLfSCRhXA7qAUfkke6YZs1UcrHQjFT",
  "key24": "4MiEqQtxr8NxA2YSQwimoLLcNf3U5bLetExVa8XpRq1nLrzYvMKeygWM37pgjs4WNF6PGhTV1U6ZTrpYJL8nB21o",
  "key25": "4SgcaqkxZ6UVKM8cuX5KfQuqnMph4UiorH4JWCCXFowyDb7b3WrKFSfCegiHzgndQGUYEBe5bhV4LGSpkM7GD8mP",
  "key26": "MZ5YLsybrpcECLZCqWwA9wcYpPpN8HPpPxd4biPbKRg6SZR1ccZFWZcGwov5QTmT8e3KRFT8VuQKzf2XzaUphD9",
  "key27": "5E3E6b9kYzUFfnwcoc5ekUbBTyBp2iUstENMjQjcohtnbFSPtmzNSSYMW77kigwri4FYmvGPDrFVP4sKSgXp4YLw",
  "key28": "5oMTuqoDymdjnzvUkqYJHKsvxYRAUXtJyDiaBfcuicXd5kadV4b6NAfXXUYffB8uqPMhJG6KzeRDEVHESeTAppM",
  "key29": "5k1YauN4LJV5x3FvS2s4DCsM848bUNMiR1B8tXc5f4uzpQLzqY8jVQbNb1skAbnBHtndm6bqi97DKV3it3i8927L",
  "key30": "5CQCkzFb18du96GwCZY4ibcFdrtpPciNKygdz9jeuZ3wpiqtZteCetck1E2cCouxNwYM9rVemyF49K9rKvCSgHhp",
  "key31": "u2as6nMAnc9EsB5zhD6tqdQKAAHughZwkK7BreiM5vU3s1aoLNx6jsVzqujV3AvNgw3zQoc9ajWyhTVXwkndcPT",
  "key32": "99tyDiDSMTY1EftxrdH7ucvSGyUYgqUZ4pyGYe9A7k1ghiQi3djpaJaUhYUvJcy16Q5b7F1RCawCdPeVoZdKTWG",
  "key33": "53jpDEW8T6MJYm12nLSpFN4La3q4LvEJEFBevAKjURaxjEiUNq51uKXij2b9NqFUKaZy88r9aykun6u3xCtD5hmK",
  "key34": "Q17Qxr4qZFrqKoUchvtNn4XVvqYr5QafxdE1zR7x9ni2MV3R2JVEVB8SUH8nea897pLh4hb7CYZQpX2ARBMQt8J",
  "key35": "qFvZswuu2pziXJHJgmHnPiN4ja7PT6qsimQDRNaf3AC9n1sfXLSJLTCDFuMHraZoCr24E7CXmjRcKVdCMfjpR66",
  "key36": "3rezGSb1KyJQrYMiAAtSwhxxU9ocXBdYLx1538P3CdUE6bdBieNDcJygFMCAe6thHpQTKm1RcEbqCVxHPBviSzY1",
  "key37": "4yQ3dLEaRhLqG9uhs3tQaytjYoG6jpiWQvb4syftDjHy1GCmRFdM3Se4QHCwdL3xAwxyTk9MZRh8hePQXmyNEKRk",
  "key38": "PTENcK46Cib8C6h8eMPB5ZCehAvRmcwcLeXNVtfiTQyKwCmdExL9WoZ4cEsfLasQ78kEdBP3idpnVvfauqAFLHE",
  "key39": "2BdmUzfSqFcbeLRQhQ4zARgpSTsKA7Ac23eFapuqPNe9wEbLSqwDdKadfFfQypaHuDAHb6CAGLdhj96rJWbmQ95r",
  "key40": "3Nr4RBpKtQYRvr6Xd9G6QG95uNDrZ3ioziPiUtkv5y593p3bCYQeKDisW4zr4PcTY8hMMNAJz9Q35EQ8cpPhshZc",
  "key41": "4qU55UDTS7PypWUnutBLdZ654tQtKptx8zULbx5XGJUkXiDfZhUb9yodBpRwermL2PtNMC3Y7RDssbJr4uAxoKLK",
  "key42": "4REepPjL2xyMM3u3kZCC7HCLsqJyhdmA9sp8czbMH1BK2F8ncq4FHdKFJ8WKyPdh8EVtdxdzCxJqmGEn5rzSnAgm",
  "key43": "5kkL4Xbd9PfcRkYTmcYaagW3nBTjFzYiyomx3UHcCp4NadwfHrzDWmkv18zoTKCeV1EQ6GxEUmJBkpfmE3BBJWWg",
  "key44": "2gmWPqXBeLzX6h75gUiRvb9s5jcuvhv7cZfhXrjBZfSCCWiBSVZJ9EHBdQfTUjYXSvSayzt5YBrnEcmPr93T1PDY",
  "key45": "3Pb5TFgXWHUJGbK2M5YxLcRFgHoHttXjJwVr7qL3uPuKMxt6PrFUpxwrXsik9Z9VDUMt9TDjkTjgZ5dMMkpiD3zc",
  "key46": "2DrXZEieU3DDi8pujRSaXqCZwbVDPyVBUdQbWADQ3i4dqSgUovw28YxU3JDtRc2aresc6weztZcErSbxddmzv1Ps",
  "key47": "584kL5vomGidBCzyZ4F9N6rtEik5oRyiU4wYgShymsnKcW38D6F4MF6brbXET5MCb6nuRQHvzTQAtEMT5GVtwRuF",
  "key48": "zBxCoAbk1Nu8NfPWkdHrYSSH1TvgeRiWRER5UarVZBzp1HfLVSvw7cZGsypCDPWFvBEY5Eea2BQbGFTjMtooWYK"
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
