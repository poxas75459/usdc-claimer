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
    "5zLzs6uWr6R2SMxJJF9nA9fBxXyKdoRdFrTrStue1nuPrKAho9zSKSoX2BaSvSTxgKqZr1AUJeHhV4fHd5nBdEft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mE8FQgwUV37eLSjxYJXZKkzPAwANy1F8Fjvja8ZNoii13tAsJyEGQzHS4VoYWo9fVZbypVD6XGHRMHiAJtcnYwF",
  "key1": "5friuExwfuDcPRGh8SnrEU1zbxbcXRCA7cGUs1eoSPjqZZRbZ76JShtR61HKistfbfjnxuQFAJ8mjQeP74fPLi1s",
  "key2": "5auEUz3P3ppcBTKSpVPbZ6qXFR24YXqGrnunwphXdJ3wCwvD53NfZ8gpGFxNn1VYuutJ1MhgRV4fNuQ72Hg1c5oj",
  "key3": "4CubxXhAq9iq2LaWxiA54KUCA8KoqtWbK54GZp2PhUeqdF7kaZzS2RQd9c9f7GkKZWM8o4wvC3GvjoKF1r7k7Zdb",
  "key4": "4smBHtnHrsWG96uZnks83TUuDLvULsZDD7Tvs44TUaUf8Dey1D1LnJEBrEuXikaLUvoH7kYP7AJFNFDAN2uf9XcE",
  "key5": "HqvCnotgmbedC3oyobn6nwpgiELjQy5GovgS8BrjNLLrem4LFXzQZJmKdENHEBD5VyNhPV28tvyvcurdQHpWGFj",
  "key6": "5qCzNKat47g1oLrtzRYLSDcB7hBydwJQJenAsiWcYbB5WZi2sQBu6Mq6Rocz3CDB1fgkfEPRCVCSDYoRZfynzsK3",
  "key7": "2SbMJJKzejHGL1r8whL9mYjYF7eYKhtPFVk9MXNtMNJaeWCbXL78YNP2oL3qgRU594gNN8uFKVURovDyTnB4iMmS",
  "key8": "2WzaA6xrWixEGU3qinM8mTfeMgDNsoHbAYE6XUL6U4yRzyGTszaaacwBr7mJyFBHQi6XMWTugb7v47q4nkHqDZ1N",
  "key9": "3CBKFtMS53rspVXmQ5Uuo86QUmKdBL286eoCRYQrc8EVorzmKqrj5itCXaBb7HCVQvTZrdkMcohmEwVD87mvs5QH",
  "key10": "5ZjbfEjMRStLCJYvuqQqHL1f8AqieroRtwraQWZ25ekCaDeqCLQvBPxFe24MjuCmfGmfxXaL5imTEytnCxygqpmX",
  "key11": "4dfNVseeqYwZX2B8gkTbWc5T7Ly7sNmUC5ENnE2TxtXTZNBW942Gt7gGGiFzjcZ8GZtz22xQ2u2tJKTtymS1Wbug",
  "key12": "3D7uhVoPPWiH5zoePDquDY9h78k3iaz6twX1H7QHsjigMpDVSA4TJJXDrZ7oFjaJCZGRtT5eyBrcfCVdyzscqWjd",
  "key13": "56kqggxwAnmRFQ6Epd4zLQPjGDS28iqjMWmFoVVsSUoLecjPefM3Y17qd7wnrywme4briLc1u7Lh4J5wa5Yk3Qj1",
  "key14": "26v5otGnCHSkMAXuAKiPSBSs5xNa9u3FuTbk2RJVM8Tn3LpnXYng1j83wveiiFa2rUALr8x7o5z2a4xvyuZFozoM",
  "key15": "38qM2yJpd8urRq7iVagvezpVxXyds9cBToXAVr3vxzhjdj9FXrAJL6BrMFcfd7SufpFLHLRRc2nTT9SQAyAzGJQn",
  "key16": "3MWy3JK9qW8aSGRLPPsurbV6w9NN5x1e2GhCBugxVoiGY4TbpdPxxfeoCSt7TDqT8pHWd9QjNEtuxcPriMyHDcN3",
  "key17": "2BffJt2x2asxFBtst4HyjBAsQBwZUPwnP7vaHHHeK5U56ZdKykKKEjKnavGwhU6sDVue4pcEdZxTavAj46PfEEhh",
  "key18": "3b3ABt5xomAhrh1zbVyJeBQ7VkeMy6HYQtcKDUaecZTRMxAcNoniiH9SLjLy1Mij2CPF5hyUn2BkhKe1X1pcYosK",
  "key19": "4E6XQ7w24P81B9qyP8ArTerTuThonWJ3xcyYNEwzhcFdCtCpkALxVMTzdEtXW9U4WQ4cP1RLMCj3anuDQZhhQZcX",
  "key20": "2j2b11TghWfjctroevYUt2MkaV3dXn8ZVvuVhvZtcoMh7qqni3HiSajuvaVsNYj6ttX5EGt9yoKQRr5TfMWWDakv",
  "key21": "4n8A92aZwEjFQy1eLpTAfqGdqtTDbT1JhunfbUtJhx4d2u9csZQeNcT3yAbXvstsfpSigXK3yCtR7rP6fPZRuYU5",
  "key22": "4AfZgpiwAm2BAzeeYBJwWTBLMumfgrUrvGEU3HpwX6kmwmaqqmLxzKBdNBq1T2Mez95CbcxMFArUju5odWi1KGm2",
  "key23": "4W9GAaWXdXKAqHH8mgSU7um3iPt9xSFDBRnUwiMs8zmKZXFWg4aeqRggaQMzh8381VbXDtj56jRKAFQVbkR5NABw",
  "key24": "5tse1TZJpFHKBApRngaBrLrjmDmTxHaafacxshWrtieUknZdnVgk5WyhTsFiSTWiAz2UzpeMPcRybyq3jaVxAQhW",
  "key25": "FCbTc95ZkMt8aTtnoSwBfwmokTfg2Az9VS3rkBbxAdX3TZbQ3F2y36WozgZf6zutX1eSpjaajXdX3e9ZLwtu2PM",
  "key26": "4g8Bcd3MaGq4sCznXoKyrQhxKAYkGarLKDRt4KQA2PrtJXy67aBpAZoQYE6h1h8NtDAKNW6JvJPauvBvWw84w56z",
  "key27": "4NR8XaGz1w3MA6fN1wipfN5ddKX5JG5FSU3GdAScjBpix8uDtQXFZUXds6vnPDDpkSPCBwhXE9LC38VDr5MXA6Pk",
  "key28": "67GJyLp5CBBTuvLnpu3J6bPEpEPMko4XKFJAxTJwu4yfmDeFVNAbmYKsFZsGBuGAfNoi2E9ogwvajkbJrZqC4Vzy",
  "key29": "55cgiTe7jpH8VXLM2w9gPPPxtX2gudmoMLq6hm8p5LnqFMAxCrdeN52UfrhR1SochJGeTH3nkU8eCU8ki7LLEVNd",
  "key30": "58CkLNPLcwKJGUGw7jg264Xy4117bUsY5Qx8htpfsZ5gPk6nChuiBG73GQiZNLZ6aZCkDPh6ndqhXex2USJrci38",
  "key31": "AbUxco16gzBB6EYKt3eqYHu3kpeRHp5QeEURtknFxKWVVBJ1VSfq9tqJUNU2MWag8YLw6RAbox7VhgqGFyG2ygR",
  "key32": "4v2yckiBufF4CrP9fRJiCe5o2Z6XkJzMZ8r3MYDaWWTkNMGbJRRVeEG2coNvFLtd38oo4Hc39rDBPotSAN91Mk3S",
  "key33": "31jvZY3TVfPJfqEZiQUn9pNvPKVB4V13x7cYJiaNzpEUno9HwL8KbmfFC4oUUnw4QvkVmcsbzFenwbyL6mW5Lp7X",
  "key34": "4V3ewTnWBoeMm55WdBd8G1bbe4yFutGHM6iVxUCerZLVwhvpzsnwmKPSdbAgQJcDo1R4hx1MFWnRqmWe2BRMLr1D",
  "key35": "5h4A4QQxtswcCjVadrzVbaXbTvR3wFcFXXH2EQFuZU4DTQ3f49rSk4DaWEqowmje6mFpdJdDHHmnS39EzFhxViZq",
  "key36": "4y7RiPCnEWvdkhrwfBkWUdPWorFcNnM7K7tPAoKj6a2pYSdpNzYcxM8uBzHUnYFd3bpB9MES32gGdUd7vUgRWTpS",
  "key37": "292gULcETkb4SeFNwBgxuvozXwCpHwwWdtMkYwgvYaAaq4qudG6dncaSH8D96aEq1BeHDmv8S7PKMiMeY9DWnjzW",
  "key38": "2wj6Kj6Lfesegd4ekcY5KxZevxyx3GgJxqrN9n7TaBmXmVCen7Qw6HfTnuPs7gKqJRkud3Frhf84GXyxZEGQPGnX",
  "key39": "666Cboufb7Y2suE5zvW5YYcPNVMd2SfL2MKHNdoYr2gSUSi8Yy8DmFsUwhwciE5qacgZUBbKB8zNDRUpa69cNPLZ",
  "key40": "672x4WvYEfqaQnaZ7gVjqNetw8neo81ZL9J82hrYfT6Y2U1qkr2ZbNHUDJ4TWsAxRZTpVsvpbwLKPooZ9GZF2XD3",
  "key41": "35bRAZn59Muim6rThk4FBYyxo1gCnqdUT15Crsi7eV3uBsZUkjT3aVZnK5EfbfYZnz6QYFsLyw8NiT2txp6dmT5Z"
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
