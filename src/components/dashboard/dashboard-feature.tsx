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
    "4YK1o6untyryQb7tdyKGjBgP4XZ8dxGtgRQnKkDECLoLiKtRmqnWHEymjBEN8RRohAy65NtNCBKMXC6zBQBgAxLW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o4HEyrTtGfudHtmxemn7uTKbZcKn3zLS57GJwkqH11fhicJpDg8pGTwPcXtc6hJso8VTVe629qeMQr2aLj7kpro",
  "key1": "5w8CzHJKQXsAhonAbRX4DiujHobBWtYFGSuEKiEYAjhKi337Q2QzN7qERwyhgLG61nC3awiz4pCbVhqnS5SXWssK",
  "key2": "33CUncrgCU8xNntpYVHuPEMhvUJ83qSV2s45T7adPWERFVHzJiGo7Ri17i13DKFWd6s1Tz1qfEFBzifaBrCG7R63",
  "key3": "62jhWu7F6YCzbUvFHcdLi7iP2tXchowY74H8EjeZXdMARyEnVDAQvz3YUkHtiAg6ghToiJE4DRDvizYWiGnJBU1S",
  "key4": "3d3tYAquM4jhEVxr4U49XpV6JQDhp4TJFsauzYiPUZpQDES7TvK9XYASa3S9DfwrUwShYaU4KANG1DksGJQMN5Wc",
  "key5": "3rvi2J3SyuLgvbrGDjrfxagtAXqfG4NREEvfKqeGUrxSWodpEv7gFnToyuKuYa8Yeyxs8axd1mjbQSeF4mYACrLt",
  "key6": "3dHQD2dEDnAUwWGtRfZFYZGu566WQ8AJmFE72gCkUugahSMSz9TQcZ7u72s2A335FxLSvr6ScjYi98fDzvsPSyHP",
  "key7": "29iYrbJiym8xJ8o1qDHpG6iKSrKeYHd2vX95PdW5fpZzerAqqyFWDrciN5Nq3Bnp9bByYe2GBGGi2pudHopwZaq9",
  "key8": "3Cj8Ja9txi1bngdfX1zEerypEpgnhhRt63huUNkvcRLr5v9XvsuKZtwCf97hGzEBvcHTCm8U352tEiVjFsZskb2B",
  "key9": "4VCgYfkwuC1XHSta5sVoGtrX4Bx276bLk31vkMDTGBjChw8F62xpqVU53Bm5iR5sRpdB7QHUGTBsoh4B5dVy6PT4",
  "key10": "674yoWNeG47RmZn8gyMuFL3HeeDNWnx7hDXk9DAWvwLyiU7jvePo7XCNLZzcTBVQGpq4LNSu44TDD2vC72RYkVqk",
  "key11": "Muw18FCD19tFwYFgSDTnaTdQh2orrmBAW1zMckzf9FU9J2WsuWnDxMfRDCieLRL6Nz6ytV4QUEDfTetGB3FZYL1",
  "key12": "2URwCoco3Ciu9SX2Djugo8nPX4PcvVKskfVwf9chumREcXvBjv7yjcjqge7wQfdtxyiVibJ93JPtgyGQaweQuFGc",
  "key13": "2F9xcDqBZwFCLCMXhiG7cSkqsrBAui55Tsf3xay8dP5ZUabv5VARfodxUawEYSkxwYHFKVQ7uF4DTb14w7vxJ9TZ",
  "key14": "2YhvNREjkbgnGF6X14iQnupVFF9HYRPbjFMsY4jik6AjykzpacZDx3tzEwwfPdZrPH5DnrSJ7RcosZ9u744vaaKH",
  "key15": "3qJ5NNpo7rmYoZbc6veZeKsHXSwubhb71SCiQzQbhPKUPNXqxGDo2hwtJRzNn5ZKLNDHWJWDZ2AGasSyNJo2YwGJ",
  "key16": "4LHEZSGoSDn2az1ttmwZYc2KGUFtcPbBtqse59LWprBzADEmch1ymDNNGmfNoAeriTxgpJHFSxGRsYmFis59uYWm",
  "key17": "3RdPgQjkEZUQMF564dPwGbC6mGr83pu9Dg6JGzYXPACs19eFXLykQureWDj5naY54vasp8wKoKQu9Z6YygfMXVvJ",
  "key18": "37EPzR1yYhtFqDvLc22RJX6Qfr9cfPJRFn2SELNFyoHUGSxgaoUHMLexWKWhCJdgFj7c1mu59ao2qw4KNmDKQqhz",
  "key19": "kJ28UZrM9EFfiNgBxYQye7fMbfHhmofxcpRou4cRmQNDU1ENyr7QRbNismyvUjDAWWqBN89dadtHYpNSYX5sScV",
  "key20": "36TtxmyWzrGCVb8gursXXYTopA5o1KgSAH2ZpiYgKJg36uje6Gd1My4tXPm3NGRpdYAVFk6heLb9Cyyi4fX7Uk9E",
  "key21": "3d61wd9r58zJqwuDQQZrwnxsAxzA5AAWkgyDE7T28SXrjqHevcNoejxbEyBdiDMzLRnzTRJNzHJPuJVGpsUYv8wx",
  "key22": "5dUMs7FtPYtKYBeWi4k3aXHgykCZUDkJxdSYUHbQsSWSuJrcjqiNrxP3qPS5ggGzWedZnP9L9WReF2JRLrivvi3H",
  "key23": "27Z5kjQtHL3WjFMHg6j1U5zS2Sp1kzYDztZnDtLUxtUPf2J5H75tqvmBsAnonP4PfehEiP855c7AkM5FANBE4JrZ",
  "key24": "4AqZQNAzjWQXw1NfaGXK38tbYQQ9jDAT1XVV2iLhXJhxDyXQmD93A84ZsZnBYzvwDros1rfCLhXTRNDG2M4UrSA1",
  "key25": "3qj9ZSwmK24vaTgqp9nbcrqYhAfWLyXysX4JHQsqLcj9mcnRdEZvQsJNBwj3Z1MWxfAe8kk2xUcdgH9ZbGRwJhos",
  "key26": "CcEgWymhLpyUDyxqGJ3tuvio6ifFpUUKth3woBAgMqFH8PbgEyv4LieKKRYjzdY237jY1ACSsjy4rAi3z3LH6s4",
  "key27": "B2p86rwaG7uvLJ4SWwmqp4UigRJeB235CWdCEAvT3BzZr6ESC1Ae2k9L3fsQuGNgcj24E9fm3xvS9cBSnxYzGST",
  "key28": "NKfwPdhLR9CyKkejpondiWiauTkNWGH17WfnEcSmZiTWsDvF6TzbU4ewUhxq4sXuQciSWp1nhhwYWXyYUweF9j5",
  "key29": "bGAq1K6gBMrTsK7GsByRuXPNAAuKx5vdx2MXM1iQCP1DT1iE1wBgbX2tAVxs82USxzMqDchjmGfKAUK2mMWyTHP",
  "key30": "3db9YvMZECJ1qY83xmWwhoHzTVXNPLWasJpAWyhd8keFpDJQDR8gmGdrX1pH3tbvJen5ziALAStE4iDpsCacMJY7",
  "key31": "4KB524dZM4EwYgx2QkZHC1dNQvbpiHof2aeshumWRxyhcvKJnjCxi8gYmWbZRmD83P7Wecna4dnqB35s1q5jxNh9",
  "key32": "2pF7XVx82KBvu7zeMmqE68YaXzNAVCkfgPdVgqLsvvBL6WaRgBrKGFCF94LM3w7a6LndzgeJVH3SHtUJ2qtgjZ1Z",
  "key33": "59qS3dt7xrFPY3dbT3tUDq9CfzcLqZaEumSWCYavWY4SysGJeM5L6cqo7DhgFNaKaQDZqSsiEUnq1Wk9G8FhNnyq",
  "key34": "GVN9WWs6rJavNbgfP7v289YMBAJt2XpHBVfBgzjwHXWvnDiYn2Mq86yxuhYqSmQQ9bcLPzSA7PGq76DrCcsFSD3",
  "key35": "5hpNB5iRzvZuqnakCZVwruLKbDBDPek1FtkapMPYXogV9oxQqtcaYweopwX4MKwn9DAH9XznBKxdbygN33rqjVcN",
  "key36": "Uok5Sm9g3v56hYwoQadSDmUpvacyfmZ3opNwukbdLvc1SdCZ4sDgCsSkz5TPxTYPsnhXN95xAuY4QvzmvdXUJ4a",
  "key37": "66UJEsuUJb7G6Vdu2Z3GtVenQy3q3tK4nxWwNGt6bLoBZpkRW4EjCiGnpNBt5Cxq98HqPxqfsfSQH9M9koPZmbQM",
  "key38": "5LaLaXMVNjQpSHza3cb8bBJpvuuhb4m62tWD3tLSRLgLWktZF1eGiBhoqs4RtiF3ACsAvjMZww6Z5dniyz2Ev3jm",
  "key39": "3KjebfLnSLoYBehhwftYekdSrde9ogk1ErvcrSPyPiJWyvwxgqbCkQyej2rNYuHTsDL9MK1bMd4Pvs7Ljq7xNtjo",
  "key40": "2hwYqiyoAU2evZNWdTkPHTXLf6cN9vFNdh2nHPHWJB2BD2kHBagUhxfXeKYgURbh2VYw3joLfhQQnk4Kf1c5HVoF",
  "key41": "4wgwaPqsShvNwRc4DTB1RiNTeYC84XJYpG8eRttG9M7Zhwf8PDvsJyVUMS5DfwYBkYXfeShbTb4jLyRiAzjyBSw2",
  "key42": "3ENXPzyrB13LAT8X9tpWvTsARwAXnCT7AjgQ7ejbYKNRxk97iVkEMymAx5z2X4P6VsaSNUgH3fQUQDUKgig1EpJL",
  "key43": "4BwKhQRwqmNwPpxCcjKwL9sh39Bzi7UFWXQTjzdh6Jfj1t5zkCoPdNg5cUyUtvNGHhPNkmTp9P6Yp4DR5wfwBwuN",
  "key44": "5GeotAThsphoxyhnHteqrQVxaoCzvvmamtXi6vbuemDXMZmjH1nTXSNKKGWwsNrGqjWvShYV3Q1Hum4ZA8vnqBkf",
  "key45": "6vncjhzEtwcohhfCgZEK71xMPaKSWYhXiP19y7iUQRPyDrvLstchdzKAaXdgdzU5oazC9KMJwKnPy9oLmRvMExD"
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
