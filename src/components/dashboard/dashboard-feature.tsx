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
    "3hUoemGsEJfDVtTs1qhVqRfQQUaT1MCBpWngyCQLeCS1dVdWqLKgTkHuD7d8TR3Fzo9pd4eei699KYFdvQU2nWQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpeme4KhhWVY1MSg1XTeoFEe38steX3ePm5GJ5LEWJkEfbosk5rNrmNmYKNmFCKQDQ1NF8h9c2kijD4G2V9VzqM",
  "key1": "5T7dgCNTLFXx3YmkDPDR7UPtXyejd7FcY82wQdVuJWbRmL5xZxdKKBXHpA69rogztwC8eZJ951Nof3Kgzh3djQTU",
  "key2": "3XqFYcR6S6fbwnA2PgA4NmBSJnarBAssTLn9Aa1B3wpCdUEbvmqdzWKSpLCsB7dT3niA3kzgrnBGH13SNUJUgRnu",
  "key3": "K7pyxK7otNa18GaEz9Xd8sZrHikkatq1pqcUSKDJgbA4KXHPSYJogYNczcruKzzNXrwJmUREf7TejEeLwK4ooN7",
  "key4": "4RmWMSy6sKBNXGyyqCPboRzFbGZgoB2uY8biLRiiJFMfGcPwhRznR5BRGwnFnx8YuKeqEmHBXh33aYnvJMnM4K4C",
  "key5": "33uyPRHgTqXeuPWsJfoRBUtTmpNpfbbXBE67xvRLdQSbodTZHZhdFbpz3qi4kmUz66SFhE6JwYt42pSCz4zmf82q",
  "key6": "4zkeeRjG5kV3C5o4RgshTxPosQf1qsMv3Z1PbSHpdjxYAuCpGYTBD7Py8v2izUeJ84YwUXiekcRMgRwt9qSSUC3i",
  "key7": "ENJrYgTUPAhtNKirC7wZLJgi3BcsWY5BEY1XN1iRukkD9FrMCx8WH1aAmA3aZhp5SaufZKjwY8oH8uywAqoDqud",
  "key8": "4h3aMBh3hoYtrG85xevqTptRn7RFLhjq8tTaeA7PoveEb2gZFzuGfwaBhSJdgtDqMEjWgCLQJPijxBiPpFoZJa7B",
  "key9": "CKuxRNqT1rigqRMBUjj6EEEgJYL2NC7HSXAtX2JSMrMJBGThj8T2frxcDAs7L1G7m1DDvwxXgpc66k2TjzBXFXD",
  "key10": "5Zg5Zrkzytqzx4cxWd2znNy1S9xNraZygdsxzyZ3LCq6gtsHNepVaY85aRFd5LdWuPs8RFQoMZs7jVY4GsJRM6Gs",
  "key11": "34CG2hTy5CChjvjEkzPSn4UqLgYMi7Kf85bNbgn5x87Br1s3Xt2288Szrff4KX3XEc49vnNXv3Yqh2x1MPEFzfGp",
  "key12": "t3LfwuHHSKfurz8DSjoSHCGVuvdsdkqgj7afA2rqSHdvc2yBKdwsoYS4MB1ya9e6tek9DdmUGBiGZXiy9H7VgD5",
  "key13": "2xz8rLAwqFNBcyBUo1rMnWAb2QamRoHYjjcBa4ZfsMVbqyoF7ndhaiB69qVQ95annZmeZWpppDvujXRcEwgwa3EB",
  "key14": "5j53u6AG9gcarkVNvW17kzWB2nChsTjT5nVLVJzE8N7kc8FVA7NcRpWGaApS243gaKUDrdh1mbErBgX2q328EfRH",
  "key15": "5ccH2TzPJ7XRSQf5ooqm6VbH93xKEByC5RLsvi7TBQjLLraK4KcdGwN5fe8JidFvVYt84UztuAZ6owWyGW65Z5kQ",
  "key16": "3GfYzbQg592SYQzxnJB7dyw7H5exfnLuXeozkJc1Xp6t7MGwGPjvo9MUbKMkQtfmXgWyv9gcaBMrSYdtobfVVoz7",
  "key17": "vG3TJdGU9vVmYC6TtARAFDVZvKKZE6mdaUeFp6G4Z31AAFFZGAPcoHrK7rz2Y3hdeCGHuxLGjyWRVxNVDQyrWgo",
  "key18": "5C7bmZDUN9FjEm1wiT5a6hTKD5Hx92G2xGXCoQwm9EvsmSbLYNgzSPQDNhELHD1eG4JvwLkXSWMxdg2HTEh1QLAy",
  "key19": "39BvWkrRAtr6Vp79b5282CWusAQ4iySFqQUQ4NYEwDfgjx9m4i5ZAdh6LePcSzSbZam4ZjmtoZg2Hn5ykbDn6me9",
  "key20": "2UnK25imonaLhwZMiVGX7YWU7SKdq75gSfT8oM3LeTR96swwmiU7dTwMtSe8m7zyMERitSLx6z6eDiYbggmWEday",
  "key21": "2N7SLUkF6XzLXCjGkM24Uh43oskzTPBT2QykABUjGj29tmoZBmLMgLZTWtzuhEc9q97Kk7LUAdixtd3BNEQMyimA",
  "key22": "4JHWUEmvpE3WxeLLaN1LemSQaxinQKw4rBvrSEsGdskbM6mNBwFs7mvva1iVjEAsXeAvUfseWLi4nTKjMujsizAa",
  "key23": "3jjtVhNmVQgAnKxqo1fSgoMGaUDFdG256AWKDR3ptd2V2gcqfFYNYexVWvsHDKbsGbKk18SvY5vfLj9mJ9CXEcEN",
  "key24": "5pP6BbCLd79NtBdV6wcBhjgzvHdHLvh7BmYRvM6vt2epF12p24eve3TtnpsbKBsmd29P2d82mtZiVnMZixqpHd7e",
  "key25": "3jKBX4CaZPERRWovtgEegdWzCKtTK84FGtRw2x24AjVaG3VTdgHTFLy6ubotcJ4tyENPwMbqd7QmSwfVbx694dGR",
  "key26": "Ps1PLP1xPd1CgQfvwR6XJxqJuuxsiUfm6LGzEYccPny2SYbCoqWtGYg55c118AnuS1dDFe72dFp86TaQGGonJPH",
  "key27": "3qoNqstKUyTccd3y27NRa2JusZFEfdAdu6QWhhgqn2osrDmLvkHWUtqkTYWJ4BivaxWc2mpAVKwiaK8PgShKk3GS",
  "key28": "5SyCKxV2Ah67nwsD8QfTcGEdokpoAwqZtqmyyjYHbxG7rvnGZNoeqBDuU9mT153yi8B5CMMskRkEPyAsCQ2WYshR",
  "key29": "5R2YHgdcAxbQx1WzF4NoT1n7ZPpEEeZC7jh3oayn5t9GTNLpKB8zYrzS9fDGSvuBPnbUcHPeTGz5NpVM5e1r9knX",
  "key30": "4mgTK7UN4B4jMyWgch2tUjQdZdMbvcTUvk4cTZ8QUrhr4N24Qd6Ryz6FR3C1NyGB8etxDJQtBMWN7s7ugMXkRnaM",
  "key31": "4C4m7eL7xZxVzsWrzWEKP5PbJURge6XSSbFrChWJDjqtGjeDbeDSFH63RgW8eC4Re8JEF8dWkqr6hP6hvpCpvF1o",
  "key32": "5rkbDAZdQiMEtRdyqo9VAXH8LaFp7TzNPugXuvnGkz7SbKN9y2bd2gfzeoBXqRKF5UVyaT8tSenYXLzCKd2GLmCv",
  "key33": "mffycJPdHwgtTjABtXm3rULNZainJUjuP2BqJbb4Y1kK79fac3vxUaHcdPAnCYwDpcBfaxFvWtNrGLpDkgbN74y",
  "key34": "3f9LFpuGPis4ZkG5VVjPMcSyaoULBKofuA2PJimUu3Tq78JUANYSDhtM11uQ8J7f1H4PDj4rSDH3V8jKENiVpgZv",
  "key35": "5sQfAjCXh59yrtbWwCXkmDCYNHCFYxYF2wFiwLhv4nXwGZXggeBAd3XK5iy6SmPeZWVVbdusYZhC78F9Ver8Aa38",
  "key36": "5VRUMstJ6ByY1KumHsCFFDnVk3coa1eunxBxkPhu5MeX26ozVcbeX3QKZcF6gkiLWK2ZyKX6NL1ZerLsb1GZTRZb",
  "key37": "4YqJfQ7g1UNZGaCGQgxXCpETtDGam9Eo2LAWH4Zsta3r6aEsHyidUFhCfjMs1BftVjgtJrCn6fENo7RPpy3znYtC",
  "key38": "5u6XtztsRr6N1Pqu9Z1VUU4hUU3h8nuqYbEfPgnJeao4W7u3oR6DsfCxDk4hBnttAYqkWANfjg6tHN6XHEMV6rex",
  "key39": "eP7KeyQwzw5pphnHuic1HWRMZoYkTMRkTHFrENGWWuNJ5mzjzDzfHxSzJcKyt99xbcLydhm6jSTtYEgt2abm5f4",
  "key40": "5vLLW8wYmRfY5S5HqEiZycYJLtKpPvvtZXMiGvwRVumxH9U23AeqSrk7mSbLQ2GoSiFFQKxRwTV9MQQ8scUzyhnF",
  "key41": "5mAM8DQod1uTUap6MFaiKiZy5pryGNro5fwHy7ZMF6u1AdNR8D1oZB9nbH3aTBfX7hZT9qbTQ4FDKLUg2ECYfg9m",
  "key42": "3ekJsfUPw3vEtrGAgSWFz4SN4jriTaus8rUHcEQcw5vYs61tWYFVYRtaj6ZnMW2wLKuK8LwuCaH9Hq82QzekUQP9",
  "key43": "2eQr4Fn2pRQYVW9CMQBdqfkLQUWhBX3qniuhT52Sh2g7xo7sCRBqH1bKhLEAo4ugVsKYHjccJxTBxw6JvfSwUQ7p"
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
