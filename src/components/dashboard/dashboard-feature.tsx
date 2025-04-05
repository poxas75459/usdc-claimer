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
    "63VZeBvjKnJspBEw1Y4DE3vNBFujhPZERkNMtzRGfRfV8ondUpRsTvnTsn59CfLN29dzWHkATScHYcfARoYW29PX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J7sCBFVPnF2R5RXSsSrgTSBumFRU7K8sg8XGxLWPHse4tfaRg2iqXjkekfy8ERmHeUHEELvppx1ahyNo3E5hVK6",
  "key1": "5KZVnYPp9o9fSff1wiJrei2B9ydx41XuMoXiu2bhCmwfxaBDLCV9nUMicfUAnexyG7e2GK6XDtjnGSW3LnrUUGCi",
  "key2": "4Ww3XyxCqFcWvVQcYsV7cwc7c58mv8VeLL2QcU7h9dsRVXJrQMaTCocHn8TCoDkF2KtZomZyf12NbH5rVEvQEoxx",
  "key3": "2BwDwu37mkWhmjCLoPugrSp9vi1MXsuPPKDDEzuFyKx5gq1nVF3BbW8LQ3LTrAF97JKG5oUGzoYU4mGKT5VF4ooc",
  "key4": "YuUBsLyiy8gAiXa3T2DJjpiZsyNLGXbguwQcYdoLacetkeJQ35bUha8M7b4E6kvtwKzpwCwj7u6txEZeFFSWJmE",
  "key5": "5WMN54bmB5ZRptZKJ4348ga6nfvahcsFXrUH3UYQPoxMUYQXc8bJe54YtFZz5RDqZJhzwJ4PQcNRTMLTcvyFeM8i",
  "key6": "Zpy4a2pbux97L7ihsHruUXLk6dTc44p9YhUQZn64RuzFKPU2kSsC5H8sHmnXja6DNWpQQgMdKoPfisFyvrRBZuF",
  "key7": "4qSPRxtiQK874uC6ZXFyf5iW45ckLgVpwLA5J2uG8EUfPyhkFsjCxFCixv86kmYWds8Ybj5b6BiieSs2KF8EQvG8",
  "key8": "5GgwJ2tAVBAYpsvJgJGEHbBpF7835Ayot1VmxzGngv7virtSJNq52freTUdEMpUSNG2LymbhzfE5GezKssCyPurq",
  "key9": "5QnoeSnV5yeU71tABis3EfHGEna6XmgvMgYYWnVkEYmi3QzueyLRKkPD3Ptf8T9rcs4hMMRCUmx9zGB98AkYq17R",
  "key10": "4vA5J4m6qnEoEAWDxLqSbT6Ho1ye9GFwrdzLY34emggr5KYQ2qvWA6Z9ctB9UL1nxQgHHFUrdk3LJmUryKKL45f6",
  "key11": "36SPhrwjo7bjvSwNJsQZLVL2CF3HkhHmMUANai55bJ4dJhvUokcjEGm2PMx6pujmL1sA1qJWVxYXtpjR7B8wsLXf",
  "key12": "5TJNJSXEtbAfEHupBv7Qv3JQ7t2m4iq1HBRGLjXCnhkbAF6Bd6UZWDJkGYvwBYx3kBtT7HM1anhxRQaBAGe5KD3e",
  "key13": "3Qc8taWzH6MfNAWNzsMVSkEjUJqiL25NT9aSZQM9NWa9CCgoS5Z3Bk54kf9LVKXN5FaoGBSv39QnL5FDgVQdfwMT",
  "key14": "3aRZgCQXZo7iJQq18EZ85NRMrdrZ2LMU5EssVsV5kryseWZpeLeNfwuPZD5VoPTAJmMLJMTpMiSuoDKzJePyEt7e",
  "key15": "3jf7JZDs3yo2zdyyqdJ47EKQS721jjNi5pbrbpTEUGfj9RJaP9xwNHAT27qQjKdcXejRh9iv1VYSwagGCYJnxzJa",
  "key16": "48xLh5titXKKTFBjadwXA2y1A8qnHzAERQUG1vf3dGa2a4iduWYwuDaraVX3U84vkegooF34ojPVgqPusoYnK2dd",
  "key17": "4R2DjBcdRFN8Lb8J1NeYZV4kTpX5zyNuufp5tQvWkAHo5oMaZaAmQusFpjeEnhMhPC96ELQ36zFSdrT4yGixJ3f",
  "key18": "529AoqH18Kb56bGxYNoN772n2DqG559NVPpn3KvtenGZQmYWsAWLEkZFPAvVeAB9J6FDZUMgCJFuH7W9zgkq8BKC",
  "key19": "2d4jnkzdrCao6mpFoZDmzfrixswHMGdzFG7TsPQg9AvuJV3CxkvsfrbGj6AQpv3wkAkWRXyFBaDRSaP9khwHMVhv",
  "key20": "x2XRNFzZ1attGM4LJWTsgKQPGeDn3bsV65D8ge3JKB4fE8zKSUfhgXRGWD1NJJyuPNXZR9VYZAwKxVnZaSWwh5e",
  "key21": "4ArpBALwCBATzed6WfSeQhA9GuQowg5EPn3R2TX2Eg3YGCR6atCZ8o5kXyXSxMvK4aaCJ1mkAR8Qw74aL3yVQwnL",
  "key22": "4yXpT2s9q7imEKZVTop7KquCXM8Ypx9aKwVHe2LvBQsi4Vy1sExNua6BxoDNc8JMzjDXwQ7pezfGKUFXwwxCZyvQ",
  "key23": "TWnWTYgoixpLaUTuUUsWHFdq5FZjy41BGsk2jFzRzVe3iCt2P6hkGKop88E5QKE5sDrQn1RJxhdKBiYyrUgKcqY",
  "key24": "y5apbrTrGuLJA7iZCKeQ5kyzRgzVvPwbRMR4np2n44DmHCCkU7qPngyKVtJgK9fJKEE6Advsn7NmyoPWRUp2cph",
  "key25": "2r5MFkiB9gH5gAxGAAjKVkFd9CecUMmV8vzVDU6pibUvcZ9MpKftfE6KsMTRyzxjm3R24mBK6XvbJ8Gsz7SWdrcG",
  "key26": "2ngirJUQfY7Q8MBcQL5BJJZhNqrr9pHU4QVssmjrYzSeDHeGJcNBhd3iSLcibSTqGB8q3KsMaPAdC9i7YZyHiCoP",
  "key27": "42voBgcovUSQfdQ7Sy3wAWQ62NFExEeqJAtLnUf9pNhVAX6i6VprwUUfhUZGRoG1jNkJBkMHsfGfEe2m4yFmELXD",
  "key28": "4hBbWgvGybpppPWANGNdCdJjNkzivna67N5MimMzrWkpPoRaGA4q7mqBz85xBETvyNFrVWAA1dvetEkDBgcsACye",
  "key29": "3fY1YfdY7jWVtR5vaJq9iRoF4daQWgcqqkqYt9iAYykqC56YFshu8NH7vfUzd1W12xt8kpEonpH7GKJKjoTMCir2",
  "key30": "KX3WWgvDgBAtJ1bmHwkPhoejuBjnLi2gkYF7m4W4RT4v3rYqR2tJjfsBJ3AyaWSM41TPgoy6mPEnfSeD5B6eNBS",
  "key31": "3paVWJgdBDxjt187CcZ2MwCXsSZgL3e62zMUTs9aGv9jupndE9XqZQkfjsjC7GukBuxgE9RSkdwsCbrt5966bUoo",
  "key32": "3eW8E5uKV81eib7edgmTnxg1ZjJLnFQRt5MracHzNsQZJNTvfcx41MRpKvqUC9js1G55NhteRCvqSEDMjJXqTnmU",
  "key33": "3RKya7ShzwAraoPXYfepRpQT7g3RUbRTd8MfHsTu4c2ka7tYCgX3e7DDreutXs8ga1nsT6rEK8DgnGV5TuqPQgd9",
  "key34": "Gc14PXRY1agqaYwbv1TK4jr9cmfgNUNJ7mayWvf2X3ZzR7T29KpxfPq1s5GjhFktt9Zmi9NuzCmCqRHPUMnN2rC",
  "key35": "56xBQjb7mdVoTDu2cYMxzvBYp11WeN2NnSpPjSsHQ7kt88qbSiqyrtsboX1uUC5mv8mJKwoigYz8Eshy3KTVPcTX",
  "key36": "55KFoBNtk9GF8KzdanCpRB4J6m7UmunZSwLgrXmvDGhHDT6Ruzvyn7ZVcw6SEZWRizwrNE1Wrb6LV5WGnUcmhWhj",
  "key37": "2mcWoHqTbwnVCVHMCinCYDQSP49UFYDvDANT8L5jmiWrVXyjLcKKTALYW5GafGikB4BeWrQj7H5mNSMGJpHN96qs",
  "key38": "2jbMujaRqee9tQanCNpUnE7g1ki6caYJ5ekkFdQjfP5uM9FzUbQVZ7f3qxjut54iKATrVbyXFASAwu6cqENq3dAG",
  "key39": "2QEfHfR1iMxDqRrN5CLmAx61BCsdHHShogtJtmqo5q9JLiYGK7g23SmsBfAReANH6zJQkCXm9x2HZWTAxq5RAGTD",
  "key40": "iGdg4Qi2kkPpr4Np5xvR6CGFWXPB2Gx6gjaH5GcbcYemL48Cc3jgSjiuNFGdPGEo6HH6TiBSJu5gaMTcrKXXQoh",
  "key41": "5JuGLUnKB3aCpzvTm8qyY4eT9t9mApdoqmmWj4RfxKDWy6X65iwQRNv5UxuZ26qc1xgZejh3mCVVEZBoRKdYKVxv",
  "key42": "4XEP652a5Y77MqFtDHove6jPQANPyVuzztjwEABZPoS3jcfV6w7aXu1uAXjnQ1XVAtKhiCpvGkLpbpiEreaTs9t6",
  "key43": "4p1TnDKwp4EuN2PhqVCXXpewF2wbaXExigxF6Qp92Q251yBiZGkSGtGoBYfpt9BJ8tpPKuYg9KCF2J4DGexGFdPF",
  "key44": "2wUHe7X4USZEqaHScffdFV2ngLz1MmLGqzusruBBWePXbK4Sk689qb5KxXmhoaaZdjqUWdGGGazCSSpSt59k13M4",
  "key45": "5V5qsRJgbPfDFnccnJ3jkFB1JPrn1URpULHY1JXY2X8PoSANMe9RsZM7dD7DgbaT8Wgkz4MNtnQ8AMNqjUW92CXe",
  "key46": "2rGphXPvkUpT6mYVTL2qfLyff2FTfDfsQpDf5rX32niAC668U2wDRA425FSarXb7bzTGRfMXgkjzcF7a4xZT5xqy",
  "key47": "rZf9qPUqJ9hM2mbo5bYshWJRuc7oDPRMtUgNt2dMKZYMw2ys5EbbYkRCi5ik6adRPaoQyaPkYLKX6zcv9aGXvFd"
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
