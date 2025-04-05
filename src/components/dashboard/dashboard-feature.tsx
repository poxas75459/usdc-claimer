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
    "Gp4LFFWJcQUrLLm1ptfeKF7riAHnxuAvujs4QhQadyvjtFFDosDt8R2SAftXAJ7PaPCbTFGr5pHSxXAuU56hh89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64ZoBC1ntN7UrBt4vGbiU21GNgqJPhkiyVvtBUQ4nRCwA2mrKFkf6mD65wEfXASEKeQTNtKgstreuQX7xtYXuDXB",
  "key1": "59aCebyvzLgzdtCdznjGVaVy52KMCQAgZ8pzr8Pm9714WHssgdzhRyKiRAbm8Bj4cH2J7QgkWxNMw1Vv7ngGy63U",
  "key2": "Gf3ES6rCfinLQEf2BWLFXL6tBzMgMxPQq56CWPNND1G1bmJcPdqmL2M6rs924umqcNEqmzPdiaY4TTxoWroTbED",
  "key3": "QZD636eYZdPmABfVm1geT4rygNjfKDLJZZtYfUgb9cMeJiAWamFdKZeiEate1vcg1nhcf3X5ScckM9qVTBKzCjE",
  "key4": "X8WEBiPnddbvFLpwU5tBFZD3EhrUYZ9XtH9FefaCAJxa9cMm5wZ1BWiZpYG7u2T35AztYCL2gwDAQo2XgBB8559",
  "key5": "3kDMPzqtH9bnFpyXAevMB65osbTfZikzeyWTt7BZt9CSuArTQWGN7C1CVJX5CqMLM6bntw7T2UxQKDRTQmDMV11G",
  "key6": "5fByzaES4MWj5iGTEHsDJo97bibMtYoJRP4UiT7EFmoLWjfcxVW1Bricn4xXeJThhsnDsWerzEqJ7cmtDK6wzNrF",
  "key7": "4bwXnFUsXofjt3YiJE9oeoqoEd65AZSkbiDPyLCYSyuM7qUHWhPjQnnro4L7VYgZTameNvSY8mYzkZheqLvXuw1v",
  "key8": "3VD56uVPMEwfLyY4Yh8EauuNcNbBv7p8TT9cjvq6pMHSHShKJ3KjhtTD2jBojhfWRCCXKkXZvaF3SSq4o1en1yBL",
  "key9": "jq2oYdLGB2eSBJv22Jhxvq6WdEievKv1rErUVN1cj12iLmvQMWqrXzs9Up6A5p36BLUXPZQjTtDgneMz7o9aTNM",
  "key10": "3H5NE9EHMcJgaShse5Qb6iA4THJRfFYFAUUNHzMV4dZHSdbdGEssvHyjN8iaPnU8VL4u6ZsuCovAPhMSifZAWULh",
  "key11": "JYdZZ2FNf86imCXbvsDFESDvfbSEb4fRojniZLS4kqscacpTmkhDhzywcKK8mHJcfKqR6FiEZmo5Ad3vCSPggjt",
  "key12": "E1AzJM5RPKdwrZ6qtNC8VfJrrRuvgH1TzRk3kNBXHQcHTQFwkzQqbtjYJz3aopNDsFDCHFCGnvHq4N3qks1nh3m",
  "key13": "vwJsvAsg1pSPVYX2RfqeTo5WSRMkwWZi2TBLH83CA1XCriZmpR1ACjcsE7VRfoomDB9cK2f1NGYhpQtXdsn19Z9",
  "key14": "2DyfYJVwnn7Za4bXoTnNdFVVBFRxdFyuGCtGbMM9AD9jmm2vuUAukpk5Frm7txsH3WBniRjCtQXn1rV6gQLq7XxL",
  "key15": "4MigfgZYFqGBmX5pndWcW5MzGhzcbTCcc6Ps54seMMutGb2NVgNUWH5eTGnu5up7166sxGUxBhg5i8DL4kYHngBz",
  "key16": "2NiVRzW8uff8wbvdfCq74JE9M9Dx7g7pPwYZ2f2dUvQ1qrfjnAbfgihpZTUDorap8Rz6WpUxMh7EKakyNScGjsch",
  "key17": "5azdUjux4XpdwNFYYSqBWaD4nLKXomir52g7L2kpgWMyG9cqKoVToh3buU3Zrn51ZwxWcRHyGJDFsYSe7jyytAeS",
  "key18": "3ULzPnFEs46StLpw8MAjL9vRa9ZAv2T5gVn4k6mgqE3CD7VBfLDqCUJQg7Twd4pidVtMfFwEsMwJ97hCMS8w4Kvm",
  "key19": "5Kna8dMMuM5vhg8M28yacFhHcxx4Vx7oorAwJG2DqNp3ps5g2LKPZ5afEjNJf1356ptgtjdToufiAbiDrmz5TsKY",
  "key20": "2WRscuVLUmVCDLtjRNsJZxdp9pYcXZKiBz5EA47XiZbkUAktTsepVQ7GiRWExsD1Wz52UAHFsspFPx729nKz482a",
  "key21": "TA2FgsJkgW45xaRzHLajC81Sn7nYdEGmCg2uSwLxabrAog38iQNp8rjLnXr8vegEFveS9xVLxAFJqRSQuVceJSM",
  "key22": "4wAmYSCL7sEM2gggA6LtNaWyntZSLzi1gySeVgz2a3KkXwN7rRJaynpH6nYTZhTkyUfqmfQh1Yf3ZVktVtNBxr8G",
  "key23": "2BUVc9pG9rA8Ybytz4BjX1XKnFRUF2i1JcUNRYQY23XryH5TReBDpTvyYEBqXCbmeBt2U9gyHAgyVVNEMynz4sEc",
  "key24": "2Y1BB7aUnHvS9nZkRjpEnuZtNtfg8CnxA6cKLsJFjzjgxqzPzsnDYqEN7DZwikdk1ouR3etGSJUgfzeTYEjMjh6Q",
  "key25": "3cMKFVTwuHeuvW4fkuEieqdZKc3ju5GoeFCpXcKbpZoDfwYdQyy1xDXdd6HpzzyaPTXTGgY3WUTRiFWiLRettHSd",
  "key26": "4tBcJ25NjX6Q9XAhQTmkXuRVpTJWVYLRSqPQDdvk3CxgVyYKUYYxMz62trJvjwx4EDjxMZC7TgobYhsduWU7jgif",
  "key27": "uao1Ynu4GyMpGqTxQM2ENU6r4Szhbdai5jiz52fZctYZEZ11pM5YGy9tYcesZdL51dDH8Kh3dX5Pf1MuK5M5J7t",
  "key28": "33JWYXhGJN1BVM8tN1B1KjNKMUVREGeCM77Va7MLvLRNkkr9dgx76NEUvu47tup6W8rHbxwFG9D8MjtgRtwD5eAL",
  "key29": "4BnxMGECamGYZ3DfqYLLc1EgqASfNQatRPJkb9uwT7C8H2TD3YWHHWfXqnhV8ANAYSSvQ6XQAbzLnM11zVWghMoY",
  "key30": "wdtdLUmyPquqs2uRjd8UiJ733bBBkcHMwT56CjJS256ZQqfupx57nE3cPCJGRCs5pFhfN78KnVpAV5XGMFBXnXz",
  "key31": "2ADNsYWfRBn1p31VvA9H45skkzDm8KKErzdrmmVJ3GZMyB3xBb7fn7392FVmSacKiRdwMFWDmsUgewqiChBfbJCb",
  "key32": "5LR1LFXSQDuzFZMBKeBtLuy1BFKUzFQ4k28eKhbZZhfr8mPMGMDyZ4p2787gGT9YpMM8EP2fFc9ukurVy75sLrFy",
  "key33": "5cDChN77mxPuJcRZNthu7gTRpUktiNWoSTHPHqL2HyBdMphgW9d2Hkj1TTufxqtCPuCqRM17PKAAezBjN6rSU2eB",
  "key34": "2U5LKskJXgwjJQsSVvZo7vTkBX6XaArVQtGoiwuDoH9tQwbxxMfmvCxjUnPypxH5vP7MT4v8U8TyRHe9vZ4ixNdM",
  "key35": "4WFqcnJSL4LiwXRFj8yNr7YAi8dqcepnLhr9xySkhn4rG18EnstcbTbMfKhTXiptt9ZHd4qFvejuhCvjz6J575mM",
  "key36": "Hfp5WFNVNCLD1b6utLgQkzTV7prx3eDqN1Q2PNgbNAWTg6GrhEcVmmWDf4V6vdiAaYLhVsnKr4j8NjdyhYnQB8c",
  "key37": "4GSV9xf636zjZ9wuQzxyRoCcZNU1u7iqfL8KMSFNxqsMebEGtfTyMJ2vLxCx2Xwdy1pyr2Th7pWdVtzHMANTH6LN",
  "key38": "3uRfSHRqTdnbJSrsBqGxofZN9BxyfLvRsyy6YymxFJDcHkUzqUGQSa9h2nmDZxsNnaoYBDGZHh7fi9ZGj1RUwoaC",
  "key39": "8aFiU3jhSmXS9tBbqnVgPV7i7jAC2QBpREXBh162ZehAvoEvjwhcNPnrvVqH9QYSvromdayxJq2SRmgKbaVA2R6",
  "key40": "HEHZzbqJHj5FBL6uRh3XM5nhbBVpd7Yeu3g8GJ8NgWXG5C6MKutUVYMV14t4n4URqok7j86WQtRQtz2LxYt85Lx",
  "key41": "2spirSvMspK4oBBVG1JpzuU5C7kGtu9jMBifUXEBgSDkLiyGdEZLNVhEZ5gbZKyUDGagx9C375UTbG2KqpAcCckg",
  "key42": "5gPAfSAQwdwofNbtSKpWSzHd8V1nBGxWMxLmngWbUiTBxc2ECUB29BNSXisnxFYgNgtvMLgHQSzrjB6X8fZFLH5S",
  "key43": "35bWpD5vA8cbc35ageVTZSRwqRw52j2EbxP6WrVZ9aHtSHj8davFjVM14nH1kSYT1mHP7zKMqpqCAMc6XkPXxNjx",
  "key44": "4kzF415kf8UGpdzfUdkfEmS5EGL8nGyJoMywJjArL7U9uiCwNhmsRLfpqqXQY8KAnJKBfUkadh8se1tL7uPbWQTx",
  "key45": "fYmVHUjNCavM29uLY8U3qGmEAueffvbQKTGq8dvdqVR1KTvRzc3cjD5a7mcpsvKYnj7gBmsZEEw9awexfDJjonR"
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
