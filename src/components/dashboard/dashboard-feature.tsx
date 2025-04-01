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
    "32ghDzrz6Qva2RbqbXebYtgyhwJxAbiYUDxcvSKAZkZPJAnKgikJB6T5LEf5cod2wKDpeH8nPa3isnK7oigMa49b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JUjBz2goEwpH2BSR9WMVjJtNgPF1qsnhqvVaUstVxT89Gbpo7BxYKAx16Jow7ayVyBN4PthxLhzPSn6rqjmcVQK",
  "key1": "5XuCKg9Da5oa7iFCDDWUiU3jDykymvjCm1JAZFELQa3mbBeGiws7jPoXGMnzZBjPFZxSUQ8tGSmYfQXD75jVt37E",
  "key2": "26W2hLtL6ZmDVu2MVNgC2Jn2MWUi2nuhpLha3WWtxgEAGXugA5aCWiW6Md17x6YKDsCsmDSWxaRxLL1Yck8Emk5B",
  "key3": "57hMgHqPGeTA7Gg4qH7Tz7zARBJT1RpZVgysqrNsAgjojivu4FNmAWdpm14CxM3U31BvyutGg7BK8ucpfCsFaKqN",
  "key4": "4h147UidMy2JLttfBArK74vSx89pXdjb2UuHFBGB2BZFGx4gZYTctV9X47QkXxFAS5SavYhKshcXEDrWcLPeUu5s",
  "key5": "2wyW3keSGtFQqibwyQunmhRXTkVB6CqhCsbBXm9PHZMzB93hdabdVzV2Vqo38sZcuqK3yb1vV2Uxdu9TfeVa1JQY",
  "key6": "3ybP4eMEdVWFwkvtcj4ZuLPUoayJcT3UysQbDyPTFGuqhapRsDnagaqQLm5yvrQrbc7BA8buHqGjEgDwC9CKshfU",
  "key7": "3wHiqNCTMaHaHJ1to2bwrnjXW9VKJ3dZzLPQ99pYkAAe8BDZJ4DycAPeqLtuFHdpxWGf8U1pxsyGuLaBCmUKbDky",
  "key8": "SDUXW6iCz9Z4pAA9P6bB48616WT16Aj3G6ZGnZkfpgsPZpkbSsxtA8n6B6sTsGuDSoHfsCj5Tx2n9oGDYBQ3N3R",
  "key9": "Hvy2AbuyBQZu7Y2YLbL4nb73JT45XdaEu4Z2tvyMKupt7kiX4X1eHZGuDYuMpRN7Cq6HJPKMhCKE4WQ4uirDYRh",
  "key10": "2insT61kLV7DdmR5cM1msy4mW7YJQSW2hsUjMd9FEQWZ55fafgAvQjcaeW8vG1BFSSM5vQmnBGTps1ZXJVzmpX6e",
  "key11": "2R6U2JLeaFGTBdwP712aT2fd49nq6t8VBtJRcFJ5BjWNy12NSNJXuDMR4qjBmhDQN2Ku5TeXDugLWy5cfocqdzn4",
  "key12": "46g5An6UXTivPrxdMiqj2aMw5GCdTBTM5AY4XEjHVayMgkjBHEACFWMRKQ1j5YzfjepTz4KgKkFgscvkBpG7C9Mu",
  "key13": "2bVs1Bnxcjjd13GeXDZDosEVHvKTrnc5AK1HknFFC4taEKaVJdVJKeodPo5Asjt9181qDNuVqtHAXi3H6cYzKffZ",
  "key14": "3id5kh61mw83Q7W1UzfbxafAFViDkkTbCU5aE2siEDup5dSmgmsJtr2zC55pdRFUToMkW1ndjP9vYWdRWGUxpSDr",
  "key15": "33u4jLcKWDN4YJKsAAXN1cEgg1asUxwBQXu1ns21G9iExJbQWN7UFX5R1899tmqLu15CgyBUKSb2Ho57GjXnZ4dX",
  "key16": "3VpvaLdfqtnT8Dz4ata17nQfVM3doQ2FhMk9XTu4NRAM214qTPRVY8gk2h8VuFdGfqtWgLNtEJnyddXU6DVEaxpT",
  "key17": "scUCnHnzj4A8N6yVBVTtQQBjuAhtE9abcy7nouB37HH2ymnshQEWpgbtoddWQtktcsxvjPF8AEQyvgzyHqd9MNK",
  "key18": "5DfE4JyczFRHBe4oQHknw6cQeUZDphuzHd9hjGcfiV5gmCGeawkMDu7Y2g2ejCiYtkximXKf4yZpLaKauJfH46zs",
  "key19": "3b3v8LpJMEHAV6vqauK787cGwHtxLnjZynbwhiyo96ARCs5mT876AHsU9LCY5y7nLo2nVSbheBzxzvEotyhXhDiU",
  "key20": "51UZs9BNN7hC4x9GAkm2qvUJtk7JQs2LzTwUvoSWMydfkyJgQc12pirD4Dd1ePoLMPWuhZtgR5cj8MABSyiZLY2i",
  "key21": "BLVPH52xwVm4jPLGj3tn8WWXgFfMyWFqaDzDrw2feXWMReKPihhA9H67yp5LtihqEsc5DUMdtrD76UjvcUSpwyw",
  "key22": "P14FLMndoXshHTocs9jdULS9PmQTYEpA63RBtLBSA9Gk1UKtjhduo3mC47K3mYxZAG8Keq61ZAUTrt75LjtNJx6",
  "key23": "5MsqdhPGCV8nDSFNwCvrirzRALP4sE12yXSraFJt4P4sBywTxy54Zd6BWb3sDxaM8Y6D4T4EohM1WBG9twWsFbL2",
  "key24": "2e5qyRJLk56LN8vK27LcMPZZ1CZbgms9AfZG27AWmPU6B8Ar5j3aaDJRDBBAowsyLop48hhh1JceBk9cQPNWut3y",
  "key25": "qwgGE9fYQWj1ojxazfMb7CJnekCG1yYGWidHpFBQ2khpJjpvmJjQ5beRMYjExQjSj7ftdHz2sbjk5hR4H3H8wdA",
  "key26": "3kWBniTWCmG2jq6H9HwTqd7vm2eG1EGaC2TiH4QikV7q8DZ2igmbn98ar2gRQnnGgxHdkRL84Fn2Xk2wZJNKZkUS",
  "key27": "5aoYpf9qVCypSKGxTCyadsVV3ocA6BJq5y3irkEWworMMmadyEf8Rxd8hwV11LHLQDRofmDnk44Q4PH9VvjsQWez",
  "key28": "2jN1xLjnPAiR1ipwot4mdF9vFe2XaqavRYsU7FAsoePUyJS4CL8UCDFGQisoKAMyZvpHP8jGW35rTvpU52YNPH2r",
  "key29": "4R67QbRQeM8BXrFvmjjctN6hvgNtHC9o68xxQjrYTygDBmenmCkLt7Ap5wKtZ8yHsiwTpAnTiBRfMPGytAWXH1mQ",
  "key30": "63MdjqLGdXX2oRtq9bGGGptYdjbzZneRhgAMFKAGK71ipfJyMCuGLngdcoDB1ZFfzKhmq3KzVBmKjdPJrBjhMFqJ",
  "key31": "35YNkEoJU82jyJAsoK76R94poXKUXsv75B4kw8YctLDycdSCciumj1zQ8XJnGJZxGmsM4QB74Vu7Tbk2vJAAqxCr",
  "key32": "5rsNjN5SLCr2mFRadpYGNdWc3ubSuaKdWwf1R4D4gkUN3iJm6zePTDnM9DbKyAspK7NhDiHD4cbqSnh28GL4PHoH",
  "key33": "G6JVAeqKwXMK8FsBLAhxY6kBHBAGNwGg1weBNsrY3WJ2d8ekoynbSRfcuZhbywqGq8UzXE6BiNNmsSSxGGFpBs1",
  "key34": "2GmsX3RjyUHhePTLPnpBKCTAmxMSJdw5bPBL9MCqX6n5PfiPZja1ysjnDn3i1rCbW4dxmH8xBgwn7MFq4JbBQijY",
  "key35": "4aYkoUeuwZ2W5oqByweweN9sBgzivkK6UWjFKCbCU4kjZLksdarwMpW4uFH8cZuuf5hFbXhjLM8mM6hC4ReqQuzg",
  "key36": "4izKqaGskwBBw7s4BB3eJBwxkAeBmPaWEeCGWimZ2yVv72RZBNbSRnMoqrksSiPLfg6rgaXQLmMysrxBvcvr3fJa",
  "key37": "5nQfbPG34eaurWEm3HTMvyDWhvASABSA65VZSvHHAJkDgx85jt5HN6HvTb5L1p9UxKmY7xMtmGXVFPyepdMvb1PA",
  "key38": "2B4CnTCS5FfW4BXiLWXPQuWLwvLxV6dBYja9aFMvvnsEhzT9k27uGaAf8dFMqqr52ac82CZDXyArPYDaZ1ZqMvLm",
  "key39": "SJFiZ8WAEfjAhKQcuK98kFTkDHWfefK4SsfKKeSoyvaX1jEWmEaWxJejAF8JqQDRDoNARqckSydCnqJeoaK83pb",
  "key40": "XFCCYfmDUQe9xzQ7uCwTpMCKM1KK8Fg5ZMjUoqVbNfwLw2qCSUkiYtzjgfs8bcaL8dCZoDUQ3fHD4HqkWVPBCeg",
  "key41": "4ePTje9Uh7BdVKjJJjxR4MvVmivjwrAw9R1FkSfpU37Uj85vJGztrbUp77eyH4DvJ8hQhSNDGCfwy12L3uGCpEhX",
  "key42": "DXGVSszwhXSLEKir72H3zCMg3oHjSkzCN1s8Une6ZbGGWBZUpkHggSjzYHXz1ypr1YQbsZ6gHG8cnPwsgFuidP2",
  "key43": "3moN8AgJBLE4KXxq4CJDtzi22uEu2BPipGRN1jvEB86KvJdp1xAS7nfPXGN479v4WmERB9ar5jmnetmA8tUqJ1m5",
  "key44": "2Bjj5W9eoBQikv9zkutffwrY5MtAZSsKEi7ydf2WwQwL3UjbPhKW3iGEgk3CaExsJbcy7EwwRdWrq2U3gJ2W5ppS",
  "key45": "2N7BABFTBM8UtbfRd442EKoFnEdLrtzUJ4wmfmvxwPmJuzu1sVjZF7rxb66rbjqbeE2551dstGRVm7RWD2F57xTs",
  "key46": "2dXnrsbdg29vTc3CTTb7UKXcPUFDFqf9pXDsVvLsx9bVkgc1zcy4bUewxEnihP5AvJcjwAQaQZHWVHpnsQjhJ82V"
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
