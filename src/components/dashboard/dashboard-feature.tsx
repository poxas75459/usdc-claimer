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
    "JudHN6rNSSYzjUfFi6LFnKyr7Z7DJ9ZRd52WvuVNS1ncY8tRHNypAeQWRb762M25HoicKXAuoWjwRo35JhFZVSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GHSJ2Yp84bnf4c8QLL8AXuk5dGwK7uj2cyhfphnKdxudRetmpf4s7MEnBkPKPbZoMcQmt21f3NcsUZXGdihbDJC",
  "key1": "2H4RSKUf8VUaHE8bfZy7wK49UbqGKSHG4U5ccpny47m7kqF1LhiWkEkSeRbkZGGjNG5JZyZT2symw2P4eSLP5Yqk",
  "key2": "3Tr7JpC8Y2XaJikFjJ9JZDhUVLRnSfqb6Vs1B8Hx2oB6kfDVQLgbD1xoWEYhvJmsLB3Ta6qUWn6Ad66jzJHGfYaP",
  "key3": "3N9Ge9ogrmDAZCajJHtQohCSjjap5X7utyKSgSpeVdTBbZj2XktegeiJG3r7a8bPDA5abDxgU9b2NZkWtJWwkNHq",
  "key4": "JBVhWH3Ruwgu1x2JPC5e4vVRhMwJsRE24w7GHAYe2JUiJerLjCMtDCTz8Tfg7ANozQDDcWfxigBnizpmLi9PxXb",
  "key5": "4uW3pUc6UoQrPjpnJE1P71uRfMYuL2B8ZVXKucsGhU1syramrBrYvD621pRDLgkPko8d2TLFcoH7m7oGmx2oeeQM",
  "key6": "4AVfBenyZud4ZV6eCieZPRcRKQatNF1APTaxYbQ28F81vEXWpNFPLSTwfsbZKXrcVy2tmDvrpc6E96JMfg2v6xCx",
  "key7": "5p87NAqyUtAjBFWyFVhQgtDhqrz9XCpRK2bG7J7CZ4eMbBq4pm1PeyGssD9pwKxFQG3vZ1JXMkkms1Z6heQhbw8k",
  "key8": "4j2yMKinrHubVTwqKr65VVWa4cxz9u4cbFVwzsyRqBAxUF1vJnD1UQWZZhLoofVU5isTVhm5b3T7ne5ekVvEWTmJ",
  "key9": "35NqnXSQMrZmArrsXygdxLFyCZkQyHRC77r4AgefPhaZRKy8eEXD2FMpnhdrdGksEiZjeeR7EXsVWXkWpbjZW72t",
  "key10": "2JxYFv3LcRzG6iJwpjhSKZtpTAgsQNyqmMBYR4KNPgDWjPvtTL2jgK94Zz2FAFsjvJPPR72snrt88MwYHtXVxEzW",
  "key11": "2V8oPnTHZaKLjXTfPTwR196FkTndbMuK6mR9ReMxoEt5sebZPCbPVbmSGbH4XtEFtHvC2XmMCQDGdn2tYhYvZvda",
  "key12": "TTGtznAHVgGoYkiyEgxmmkMmS1FJtuU8LUEaevhTrphcktuk6sYNwqH2vii7wWnR8dAwyHSgx5x8WbXvGEgHzAn",
  "key13": "5Vp7DtZNJgWYgtWvMTtKSPbEQ3pgCDJccc8RBLQcDhyFuqhBMS6J7sdsbW71asg3dWMmHoEaLgedkYUMcfsEdkHJ",
  "key14": "FEW47F7rysPJH233yeJjCdiP8P9KQxaaEPfgLKuXtehjCXCrxp5F2guDtW18k4sCGh2YWw6xKAUs5kFr9mWYEE3",
  "key15": "5ijJGC4kiRxya6wBDYinUJQyi9g4bhLJcuaJypVZCU6v374Z9qxmeB2R97RbXCPJHtakEtUjWDHUMVNRg2EQv6CP",
  "key16": "2XhD32EP3zmAsL64mMu2Xo3h4VGt7uJhJEXgLmid9DLp83XmL139s6ZSoMjPMVa7P1xvqBvjvz99RWifzpkrCcSz",
  "key17": "3hDS8kghzFP7PbTAhA1F1eEXryZcQUdPoo3kGpS2zLxAW2emfQM4wc6kBzsFh54o3qsAS4gS9hk1aMkZXeMPvd98",
  "key18": "4pbYPwgnfaBPideMbEurbY2ZiHWNUkyCamZg77ot6BFwcXeaBuWcbTHWF9JabfsMSjcxYSyyw8GwAfocgY8kEaXd",
  "key19": "5Z7JyrB4vzcdsuqdBeTx1LemgHabzXiH8xBnCjzL8dMvUVcMMhGENj3QYKV94DJT63u54rpPY6gzwMdD2TzvvDzz",
  "key20": "2v4yWSxa6ZNTGjQmKNSusqcVhaeMPYw2VzYb7mrzyQANWadKymV33eyLTKCnx922nfVz5MEELhcSC2yWAQ92aBZQ",
  "key21": "5GFfkmeM4yFbzot7yiprv8FWCMuAzUZTngkb1WDbC8JHCUAWp7L4bjK2imre6HtU35ESnzbz4cWJcc63k9Ef7E32",
  "key22": "QdSoKv5FFG4Afu6Xd48cn2ekKh8F9zPLWJBrNHhHWddxGgU8gXuoK7AJ8bmCHnZ66WBR7qA3Ak5dEynrfk5bqP6",
  "key23": "4Gk2Wm7sRmn1NHnxDCupCkv9GQQxzLpwHq1p9A16o9dPxiVRdbMTAhMSW2wgpcHXgYHcYvmaHXEoCQ7Ed1FpsVok",
  "key24": "63EaDhDJdHgjfd8NvPGtfSmLNWg4B7pXSa3vBdfEqieBM78rAn5ogauDNxuaprQQxfZabRQMrBjBMJzbpU5rJ57X",
  "key25": "65fVAdemjxcxURqsawpmjFzkR87Vxe5Lzr5thhVbuz21WoXCjWRQrv8scuzi7wJfaXjN1Yx9WDsy5XALPMEEQbyt"
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
