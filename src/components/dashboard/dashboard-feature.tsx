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
    "3fSaHJsCZUsFe52L8yKfFYDtyVc1CSrHJpG3xytCdkZMGph6e9rtcxcqJFJhGxmMi8BJE4hepzUJNYrJDK9fDMJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KCy6MJ8o1rcZ6AWqGSoQJoYtQFCdX3Bd5edfV6PbHgwbxGGuYbtTG8rEEmimhMboXa3y79NbTyJWPxieo8tZYe2",
  "key1": "5x5v1MNYPdmPjkqUrBLvEzBZvzRPSWXtsbrFxsGb4cqLVGAPKFDCTQwGVZCzWJUYyE9TSaBAGCmEU56wVPrbUB29",
  "key2": "5ZVpUubb1aX2A8RDgAEdKfDtRkmRL7ZNvzcQQ9pYNccxQPgWJmLzjUUw6KtmxzEPv3YUtpM9bn7YfABJwVYkwxZe",
  "key3": "jPmwdQYNoifs6nh51ZhJMBBE1ASHE4AXdbAu7R3rGW2Rfbmkz3dc8rfLZ9NLiTAh2y71ZpAXajTaHRcRxtHyoqk",
  "key4": "eKbnqT83UpCmUyXXGmdnSBDEQCB1n1Wwzz2ZwJhcsMcamUxNbcpCvRnn3dTzNAPyfi4UJi1WrcTYEZRiiynXBAj",
  "key5": "2Y2PuhKGum75JsTBkCHNf3CLKcmvZrwP6CgZ3zz8CAXjEmtGyqvCggm4BivZzQpiN4xYAypVzXmrXJvEiGnpMdjb",
  "key6": "2uSUzMRf2ZZmF8QRavijKuRvrCLonfEkgohbdn2XtQzGewTVYfnmXruHCmiozkUNGZiBoaLa34hytYvFFkLrrn9T",
  "key7": "3491D9EFGZ7yvGRyTFDtdyk5uixasQU2K4oRMoB3T35iGLe9eWEuMGPNAiSqy2fvNWd9AxcisEg2mWkCXoBEMpn5",
  "key8": "6whcYpjnJhtxxkVcHHX2ir1ywSnstaQKiseRTcd1G3LseRurevh5ypCQxhsZi9EDp7FpKYMUf3CvYWBM5T36ek9",
  "key9": "4vwR7N9EVRT48oAKwgM8itpFabGZg6ST9AKNZgadU2WtaZfG9UCkMWgeCMFXDJ6E6vqvyzBmtKipgxAuRhSJxv48",
  "key10": "26khtipPbn2eBdchS948HixYcYfcxC8FSQJ2oDkf3wdjhMJZ6Uk4w1kjJUZK9cSUTNABmmF9WtwcNhkS8kyUqeLp",
  "key11": "5tBQsoc94DekHKGWnt5C5XbKPGuZXBXUYdThu5ZtGDMsvhDL466XtxSYpguK9k8pw1hPDEXurf47RJUS3NwdqgJ3",
  "key12": "2irtQmHwcFx1X1m3Wti9Q1jz3HaPcQGXS6TRooXjXyQVSmqzubtFC7NwV2JrT6NcrC85deqpe38YMRqefM6XeyaQ",
  "key13": "3eH89BUYS61dgTP5wsqynqX8xdoyjUFu8XkQEDaxBHkyTDL2qSMeJ9tYXpLnFv3kv5dJzgL7ErvPZoYABLqNkquK",
  "key14": "3QwWjT9CV8YWTgDCJkHvNbAEKCMZadgaz1tjz781ia4EARX5SaKXeSMKb2Lvd2C3cpqn916RvLae286FcFCQ9xnc",
  "key15": "2rKXWCnQVj98PCYvmndD5eSDrsVv1CYgucdcEtbDwREneJtHEWaAkqvLbdwoiNTNmNBovNfv49fznvUvMfz7eC4Z",
  "key16": "3Y6MPBf1r5FYr8ZRA1MmC599hCKkrnBBqvWE9xqFADJYYPEyujYChWpVdXBgqw3XusDxRSbn29zezRxx9ToRkbuf",
  "key17": "5s4dQcAbWezfQbUcxKCwX5vhf7yHrYbLXrG6HteeayuUMPb548gT12oyxPQwayJSBtFWXsZ7F8N2JzRdWLGHhWFd",
  "key18": "2HBWJ5eFhzU4DS8AJoiZsiqP6btH71RyoCnoTy74sYFrJ8AMqYLjb94DEnd67z5YE5jDnaiDWrbzzeSiya8Ecfeb",
  "key19": "jHEbXhmEATtL3DxwJkDVMq7vVaCmLyskAyHJJArBYAWYezCW8JR3Q6BCr55NpngQsjdPPyFAktfjNnJT9LKaRuD",
  "key20": "3maF2ktarFrUDJrtpcfAeVRtaVpCxrZrmMbJSUXxPmbvEqpiV1zeQx1MtwLnHn9WW6RPysSCsDFD2H56K7V2Q4mL",
  "key21": "5NEfUiHEHSncRFD2LS6gmNERM5NSg8ypu28jeFheAUG5EcUAu98UbvBTbq35kJo8qEnmHXYbpwpihmENkaL3jnQU",
  "key22": "5fUGvhfgvHvPkiphVv4w2W6uLCfF8js2jeiuGZMCW1PzNqZMVHct59TqiCV5atTpy5U7xqeM6koTZ1JZmAgg4K59",
  "key23": "3R7nG87cYBUsEjGqTQgZtVajfzKjFH24YwAYRkmtgbjbCrrXX9YA3tyqPM3dxPLyDxQQkRdVy2DsQYpqqGYibu1L",
  "key24": "2J5VBSKCw2WT7FzrzSEY12bRAJohwk2mV4FLivZQT1J1CVMDgB6usJru94SHeZnBg4UhSXS9XioxBWpNaDBq1KNV",
  "key25": "3x99Kb2aehpfz1UWCBmWZGMQ7nvZQPSsYvvfbha9NA7HQfdtUhA5JpWKkKPPNvyZLDrRXwb7hxMvPFQNyGWdkkJ9",
  "key26": "ofZ54hntsY6Rjc5UuGRyWGthzV5DEzAtvBW4GoG2ksrXgXrLdBugWPzRsXYKvCPzkbwhheisd36iUaJgLhQPoxs",
  "key27": "4W9g4EwkjtiSYmQRAQuGnkSgRnchkyTmeWqcbQJidu6473agFTZS58rwY1kpYLHt8ZjDgV1s9q239e5K9LsV727H",
  "key28": "pgEwhzbRHtLjwLtQxX6RNcAytFtH5Ajx3GvgfsP8tvpC8vHASKruvUa3SB6v1gZCzoYcxXCGrWv3paMAXx7JZGg",
  "key29": "5tYXLob463Cm2NdcPDuDoRJvu1UpsXpX4uP6x3yXNcrhWe8NDMjXRPj75phXzWxUZKhnrMEuiAWxfz3DEe7NcFwD",
  "key30": "2bJJqjndnnPHQCZSfXNxyHWCAgXKybAe5ACQieegDKE4SxkdGcFZ4f1Nfk5B1TFYecX1xSiXopLyeaRSEVLsRtoF",
  "key31": "4s4cEdzGjCZrtVLd2ABBFCuVses28P8wn2jdjaYZDf8m2k6pFNpKqJezXC8HeN7bbgT22qoi1XMLwFRrD9tSpzEi",
  "key32": "4mEJ7KcQC5q8y3P64A9HBAheNoFDGxaFcxz3HtjAzcNDjaxErZDQN7UyWbitv7a9wptY8fzz5EJxMdX7uEbBexYu",
  "key33": "4LKoA3Zp6USykwSsnKoQhSqsex8vQ1e4Fkgza5k7kk9Wn6CKtayD6LFvYdH7xWpqdFNGjrFvzoxunSrX7cjH7foY",
  "key34": "5tGLtWUcva3n7eFVE5V1FmmHLjgXqWJtJPd7raxeUNLkhcGcBAi2Baff82kjDfMdjY76qDidocnqXqCrJwQKGRYq",
  "key35": "jwwk3AycZCkrzMHNckkyuzQaHJgDEjgHpSpd5g11hYrgyauECXaRzR13cxuaJwxzHAP3E5KshX8gwJSiL9PmZAG",
  "key36": "2RFmWyXzZoUGFLTBDrScaaHkfCpuTM8PSynXapseM44DTbCNYSVeyB6LMwUBwyraCDRQ5MS3qRc5A9CiSZ4z7JaP",
  "key37": "4eRsoiPeJcZ2MCdxsjpF7CBtRZ2BDSZKxPgJvuEAwrDYxR11DF1iFHy6Z7eq6KGqoy4KXVfhDdoKiNZo1zYpu4m4",
  "key38": "Rg6YeiCRJUpSFov7MLT34tVVDogVU4KE6JErTm787vtZ5mUt6ekK6zohhE1MnwXDGK89FfdGkHsTnqJySwQfju7",
  "key39": "5xuvpwemSZZJiAjLjdv4dzZ5wPoAQ6kNqkHpAyj1BCnY77qbkiCSAx3L2CTHzzTdShc4PN4c1ofmhXRb2dHVAeQF",
  "key40": "KWDNZSkbN9C5ED1hiTUYH4sTbyyxcxoVrk3LpxMBiJr4MD3ZgyFEWn8BQUVQo3Ag1jdXMrpB7s96beepnQiuoHJ",
  "key41": "22H9EgGVdiH6akgu8qD5Nqju1izSrk54CvqDCzUcu9W9WUzQNr48Xp6F4hYb32nXEMgET6TvawVNNwbrA5wLoVWP",
  "key42": "eMc1gEbUW7XykbXbKmFPafML9xojPfdFvjZoyYA9dTyzPKSwm3zUVg52QE1QV8NrrqAdQzneCRzQBn3MBb41iNS",
  "key43": "47HMkLvJ1n2pab7zZkCNST2bdsgp2LEnzDFhPQBMTW2zN9Upgv7FdTr6BqHv3mQcLoxUpzLB4E9Nba2rNhDhADu1",
  "key44": "2w4qGc2fjLEmtu97US6BBYHypxKPqUSL5RDmvVmdJqagSYxMt7bvtcJK3JCuj6x5PmWq9eTWf84ySmBYyHgHjMEm",
  "key45": "34mruhFeRj4xrV4FRwuQjnxkgSY5CnXo1o4TnSgPxjxzo6CTMhiy4sZnDizHgEgHfqQ53ST2WJDJPg6jtYpPRgnG",
  "key46": "5dZHVYAHmSncC6ZRAoVMzttVxqaZRWHfnSjaKSBYgH2UaqisgChAE7ndpUnWk3QAQ8oyAUV34Rc1FvnfnhFnqRPA"
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
