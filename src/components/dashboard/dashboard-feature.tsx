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
    "22LBQbGxtCjFu7sFzYRo8YdpfBYhD2TrEPGjhL8fSbiKXRfJhQMy24yMEuJYdyCbJn2WD8uhnnSbGruyXjPA8K4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXMNsHjpJZBfPUcYLS4YBVPKGDWrvk8AwvHgUHAQT191tjscZStUtMM7XRSg7fWdQ5dHnJbt3yRut23CUSnnLnX",
  "key1": "3HYdTzYRwERJy5d9vvzvpXnkx3RM24B3VMp5oTnWBSpzkqLpGXQdJe3HCESkgmnTVE3urXiMSdNwGRomanj7MBsm",
  "key2": "63osnWgbuVzSGic1J7eDP4pod1CYLsvr5VEQaMBhz8EMkwijxVrXNa3nCHTtJeqaJjk5c5oKtcSYm2kDm8HaTaTA",
  "key3": "j6jQA5N7RvdxvTk9mwAgUA7A4ewcdx6rBuiNzEmckCz1GP8dcWKCrv26aMQiZK7XuhfVtWsypuFbmA9ty8rTXUw",
  "key4": "5tts4dzdVPJu58Gaorncqz9wx8GmmaxXrm4j7TyMMbRhTggBw5BRJWdM6ukniGCmLbCQVREpWfzRhXaPstJWe7hy",
  "key5": "2hmgTAUYG3Uz46jYWnTRMLijNLyHqjhWytoCyQzKoTPuDvDKVABRfsKHXMaRooAzDUdeuJkkphWb5Cb4V2Ea8XCt",
  "key6": "3QyASHWXeKujemQQfK4ibBv8iJN62BskxEkvhjvp5A3WdwmKuFjqfWvgrUL4BNAvLS3JrpWbmFs7xgJvQyxAbAFh",
  "key7": "5RMTDkonnKFYaMb5kPdgT4eGA1XBK9NFnUMA7TXhf1HYEM7YMqZfCsYs9zdpAytHyTyJUfotFQ3JnKZJ5th87nkr",
  "key8": "3NL4HdfRuSFg33Vxk8Kcw4Q8VHWe5yVhMSfkgHc4oGV6gecqZDd95X1LEPAmuoEC5G3HdzTyFaFiicSi4H4KUQXZ",
  "key9": "3xhhaNHvEPW3g6fFjKVSFZCxdQbPgRjyrUvzrvu8r5sZgqyTuFhCyWYPUv7DE99Nrzhi5V5Z8HV3WY5WfVTJVoX",
  "key10": "qDaHw4Whfb8quRhPowLccqvU4MsbmkwPzm44ZawtfnzzhEDhyGGQEo61aZRcGR6HEsU8MjHNoCgCuUaWJvKiKNU",
  "key11": "Gp1AokpbB5ioMaz4tkgBGRmVaxV3sdo1TFL3F3ok55JmsB9VPd4rE1yDGWDp2d8X1FSjtrTZP1dHo9hvicU2RJT",
  "key12": "3wiLQonrwc6kFGDMTwWRgfGrGnD1fadpLJwcEXSwKh9GaqVwuTU8jTNKjKAfry1yB7maAVrJRPjc8ZK2djCVDyHa",
  "key13": "2CQ4Zbc22Jk3UxGGic4QMTnuDhAt8jqKoVrB9TCHr1oPhw8iQKJ2Jc2UTHUo4BWY3WRxavQtrct8KDud86Eo9Zc6",
  "key14": "4egQ9zXJMiMCJLBm946orsbZinxbF2yvac77dBktRcLKnj4gGZWZLHMUCmuYgNVyezkWDkESJHKN1Q1WoWTGvK82",
  "key15": "3D6bPbepvWpve8FczkRbApx1ZaMJsSnXsU1MkTLFV2QMF8u63CKahftyhzc749NMKVNqq6kQhuRtatCAYsNFZfDF",
  "key16": "3e8ybXzfn6PbWbj2m2eEfBAeDvyf9fJqVrKohd6TivkBPFdKpqqGHAG1TUGbydKng9gkVQFkCCJgZ2cbix819KJt",
  "key17": "JzNFiBG2gzkfqPhbL7v7sd8bhGw1vQ9T5RoapcHDZ7Fox1cjzAhbemDWr4nXkGdLzXJoM3CKm4Y1hvM5Gq7wh6V",
  "key18": "DQnYsftVMdksoJ434xmb4d96hyC4k6VDi2hYHGFt5QvSSakrDbiSy5xq5adCbaawqE4btVqea996Wh6zsSwGTES",
  "key19": "Dvw4wPWqyQJgsKmUw3vmsjutKR9MRLUqpTmUAuuWAYsScVigwyFzHenp29D1ynRPzK454Ppr2LHt5UbYGFKoDv5",
  "key20": "Lq18FDg1CPVNm3LC8YvYNSzqVVaGEhdfyceRpzyzbBCk2xwejV65qurvoFheGnFTPZyay9nTNHcZio3BsN4wU4R",
  "key21": "vSFweVBKeW5L594Z3QKWHhNFAx8McFrxBAS6Cq3pru1qhAgnAmUXvgK1Qo71Z8PwAVbTfvpSLp6rtdKSEhZPgFM",
  "key22": "269mXnfQnM7aRHJjMqja3biKMwQoRzeogAiappkEpSFkjGYchufmq8fGdWTQRKC6YVenCeDkxSeupmHqszH3ZbBE",
  "key23": "2KLnxVQZmXxMfEVwdt6UhUBd8sVAYFNshoqNZ7XHmTbvRn8P4DXyFTXwfgw8jJ9jmRBXJoGSMWTYFDHCHFQTurU8",
  "key24": "2GGDGibHy7qVL8oaZe3m99LZAW48uuuxrpSdyKFzaY6oqHCieDiY4hGAsiAmk6tHhVoRqsbX5LwHhTgpkqPkxpxf",
  "key25": "4CWM4p2h56PcUTcRfkSfsrMwF3pWx4chMeBb3RZTesQVvWagsCRUyumbfmfcvL6e8knsgza9WnxuKv54rzthpwby",
  "key26": "48Vj7UutndjL3sDizykvqsQvz5rRuJw7jjigk8Qg7oX9eCWuVczkVpgJjyiNXF8HZaRnSJskSTd9s8YxFYs5Df3k",
  "key27": "4L2XjaqXhyYKJwmtQW5YVxkxUZquwMyy4MWjFamT3zCq3Baptm63XHCcbV3fABt8xuvQLvHFYA3f7Vvuj6NZaMHX",
  "key28": "4vWiHYLeotWjzBTwcdoU5PjSRBAtBmzXDCqVPCi6UBar3TMUXch8VYZXQ5ff1yWs8otq1shUoZjHGMjQ9bYEfZF4",
  "key29": "4Z7Eanex6iNDLSY1boEkBGawunbfTc4BnH7EN7uvjFBBaYvYNbicRGFkL1hKrHby8ig8zNUP2jLbwtGWomnC2zUb",
  "key30": "vQANEkQKFYNBTfBFo4xJRWx7rxZJquoJ2EKVEsG7UkQTQ3PanPbPeFDu9AB4DbEegGiVKUhbEjsZMBwZthAWo4e",
  "key31": "xkF4PmkTKaZBJYpeW7isWwe4xvbnMtQwwv7N4VBGiur1TRQRMKfkvNjXCcqXhhEXJuy39xpk4ofRQMDzGyns1EK",
  "key32": "5gdUzyYhDYQiL58hYTYNSuYTxuwpH6qDhEPTwQXYfn7We3GX4gq4S6HBayavBwLgSn5JwJCdFWaqRB57RuTa6E8H",
  "key33": "39RRzdFdqm1hZrtkiUYCk9wMxdbXiVJxxYZEM6minAzEVXuDmvdC6LuxWoj37C33YbfD9T9YNbZcy8hfrXTLp4bV",
  "key34": "3adbf3GaMRzYWcbYtW9NcWwBwg85hia2NKfuq6sLAPYqz7bdE1cpe8KhvDCGYxXoR4SR3N5ZXseuwtdDf5eiH2VX",
  "key35": "64LsP5jDXu2psQFtWKJaNiYeXHmft7gKxzEPShTSNjjYZfwSjMfwJG5dAzfkzu9v1ySXacBJYZvgyiKo75qrheeE",
  "key36": "3gjd3rjEsSmQdta3ARG9wLqUnNVoaTUFbV5sy86uSrMj7A3xcPxfBmM6HjypgCCp7rRjahp8KPG6Bt4FUSZvMJrq",
  "key37": "5ZQWnrZ7SVM1DHPW4LW1AAFmWSqg7j5Rc5BtUQjzArcn2M78Hh8D6FHq9MwZuyS2LAr5BXtk3p1rwSCnZMVWsT45",
  "key38": "64vDNAwEWcomV4C2MFx4k2VbzhYwDgBFq3GUrwEoP4k3CDecLJaLgojn5E2YvzihFEm4fu1Qr4cf6KRHhcVAE2kN",
  "key39": "3paiHCdo9jBuN5V9B8T4CwfpLC3qQZdZfsmgemy3QsyxJce8aBKdBhboJJzgh1kr37Dt2GyQ4ZbnZu58Eoxq222G",
  "key40": "2MFjpgTyWCDbnpp5zr87WYCyW1qaxjDTAZ4Ef45eBmXCbtdZCHDJmRyzc6RcNXmVWY3dybBwE7A3ucdeJipQTv2q",
  "key41": "4i2E6VwJGzZBiEk91cJTBmgvgzMUsp3uDcTKtBzWSXxvDLqZyFkABzGXtyWJ9DjGH8CRFdSewfYG6GJWep2YA7Lf",
  "key42": "39ocvyzNwjmKqQPYRBndefDhmLBLbhAT4Ku5ZBY3t6KM5wyABv8G2Dbc7J5xwhQrFxmELsf94JwQmT9c163Cgnnf",
  "key43": "5AHyYkn4rv5i2JzRDNVt7wVRFfqXPBvytWZBMdkmTM2oPovuu5QXYczEHMEMrVsWtSVQY1fXDqTvpqnrKgbFvs1b",
  "key44": "4mU3ajtYmk3HbBsezYHcSUN7fnPH9m2UBfbaiMushz6DaUyKjeqt9TwFus4vnJebjGu6oaKkJmdijoE2pTSPdXvw",
  "key45": "Hu6q4uKrGvaC6EhXZe9JqDnrgxEVwkztdtkEPr2pDCxM8S8hsghaUJd2VQ6Uri67xN3ZnRFXQTrmPY4MatkEHH4"
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
