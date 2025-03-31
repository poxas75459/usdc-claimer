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
    "3yYpdcxMTVUEg8Ys3idvPrrzyKn8w9kavoBp5rNx4QtqEboaGST5bw5pR8664m3FTy9z7Kk3btF3f9FRi8G7PD6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fs8g4XMHARLhhXFU5Zy4HyTuuAZeg9cqbZtHbZCfDjYMFfWW43Vi23EfXC4fuZmFfgio4FFBL1hCPeDnxz7poJN",
  "key1": "BVUVVneo9MKHkwoxxFKfQt5ub2xQqFysXG1CCrWbutYQXegbycuiTsBRFzMBejPczt14Zw5xWRicsjL5Jqqx82i",
  "key2": "4idsFwKZgYcpXD52kMDZ1J44rpsm8GnigZKa7MWcYRR2vcZiap5PRNokkfQurCQMbwJgjz3aEof3zcZquQzpr42Z",
  "key3": "3sgeUeHVpXWVuRQRdL2JXGqzUNc6XjXJg1z5PEqAf4oX1HXA8oqnpjrrHeeYRLtwzXobpywu1gm9CT8JuFpZL81t",
  "key4": "57dAWar4k9eKJpAK9S91uFCTW1DFCraczg3EBMGG2ShBSKjomrnZAA3rEWGkmJoyXLXT3x3iVtmu2Vn5SxVc7ioN",
  "key5": "4BmtXkDiuJASPNKLgrgqRPuDALk7H7Yvp4HR3YGCHEQT1tw8b5rLNc9UTkZtr5DG7tNm2UYpatmGxg7pwFS54Snu",
  "key6": "4MScJEqthdVAoS8J4zA4pxZxErhfRjJ9QrCJtFsgSMSvQWt8HUbzmiLXJN6FUhHaAzEGhZiSvEGUKzcZdVqqiobQ",
  "key7": "VAUjPsAAwv7xibgbSFJmA4N4txaMpcUYzRUBfYaLcioMnQuJ9ChzrAF1y8mhf9xMFt1fzc35Ag8LYs5sCu3Div2",
  "key8": "3UNHuzZa8sceyY2ggr56GW4D7pTdg1SqAVh4jzNy3xLsHHGzffpPet2xv2iBLEqEtBiXW1wfhh8bppSVdocSM2bv",
  "key9": "5fzdnF4EVecYLG7TUy8vZwxG7G2eSYhgQDyJvQ7AbRqMs5mmAEeaR7NREzPjSRLuKrqT6zyy3kFXK2eMP9LeewKu",
  "key10": "5sJByamy92D8SSGiHdPcFjhwfu75FRg5isbDGwAjX9jTNVRuJ343RcVQitNYarvMTW5vH8v5TxLfvbfo3yRjh6mo",
  "key11": "HCVmt9Uw6NCYAdc77ga5TUXskyhx6fH6qcYZiTpyTvgK7MJH48Z88wWzobjYTCgbcr1EyTJcEDGWvC9pJHGj29a",
  "key12": "51zgdhvYfj1mTkxxwinE5NBgogvPvz3MkeJbUyR8vftxnsjVBqZyspJ2BcbWRDLEDGRBxuTRmFa4ZVRcg5XfktDV",
  "key13": "4uZ4bKRaMaarPCKJc8RRxqgHeFAgaPA5ySiYe5fh6feCcHgP44RLAQZQTW1iNB5y1sEERpMEjeZfarLLeVXCA2pi",
  "key14": "4Dd5nucGEH7upDwV9b2Yons4KYjLBppv5fPb6t5FLWiZUC1C3HgXoxTjEVdwT9QLMEgYT936WDnfuE3vFnFbjoAA",
  "key15": "3U2KaJ8jfKg954n41K2KuceP4SL9DBfkjNf417jpmxnD2tWby8wZu5gWydiaDeAr3RGzMTHtFyd35shhHzNTFEVg",
  "key16": "3Hky3tCqLsPR6DYVi6h1yrs9QL2NYt8hnXPKPoNahBqso7JZ3fwZZjYjcDYx8o6ER86w9xyjJpVtESqJZymLNnqN",
  "key17": "24NTas6mz55JT3aPzAKBo28shtD5ZoFN2mwGKDZ4zztnmmNdwvxndKkkv9qE64iosTza8rbn6BxpgZ2kEZ8Xvhxb",
  "key18": "v352UDcK1jG8rJZ6XX3KY95zfsPzNgjyu5UVDwysPNeJk3eQgp2m85phGPecDcXtQEAzmJVBsu6z5eESmKTbrnn",
  "key19": "2hFnE9BMWQs77U5gR3ziAiFwtzRC6qQWQLye9pNL8EDFugFHNAeT23UHAGJNN29hcW4kaSxtTNrD39eA77Jomijt",
  "key20": "2wCmvTY4C8y2fPKU6BXR34wJoJ9UiuAjWQ6Jw2rgMsGn49F8dKb9YurKnYHxeFytLtYPAXptsX2KjYbD67S1SNdb",
  "key21": "2FQBygjoc3Y86Cthi7Sxq7ZLY21s4YrwFWVymF4u7246MMNSUw2cquxepauakZMX3Kn4F6fU4JyiLTNm6HgNHGVM",
  "key22": "3Ge1qsrC7yfPo9xYzBveLAGdkUThi31Ld498kvHGp7WkwVJqdHNc4spSoAhRb3ew9RaznyaaTPt8BcgoeRfT4TgN",
  "key23": "2M6vU8mLAZRiKHgTUP66ubQw9XCvqc4Z6T93qLMBBuersHrtkTVLugAiwPKPEbQaNyisFfgoYPymuUFj7Knip2z9",
  "key24": "4fuKbakV5ocT35zvCayk1bsbZeyDbQjG2Wzsq18sGUuCy3UmzAf4yPmvWRGeM7b3qrqk9AReXkQCUk9M5qntDymn",
  "key25": "wrVXvLd4UcEJZP2AUKMLnqEE5N712wVUSq4Twj8atRj4wtgYiKVTACLK3BWQCwbUWL4um1Q43Dm5NiviYv8KzuA",
  "key26": "GP47yZo4VfLgz8sEqbZ5bY96HXxJYJ8JkyaR5kTmFoodtrwcGLTE8xxrLqT5nnjNK6eUWPXKEeZuqR1M14Kq3gy",
  "key27": "4DYHxW7r5dQS8psVR8jo6LQmLpxJuRT6WWucvi1eqDBCrZfrxa6Dk61p6rvTv3FcgH2b766YQGuyoukRA8dezecB",
  "key28": "2X8jFuNFjVNL62YWbp7GUx5UEHYsh9kmtvNkdicumEqnUpgQKsTaejr5VNchfo3wyHib6k6Qtod1Pn44vJ92r92A",
  "key29": "5TbsytpwTBminAskifs9ZsLk1ccWYK9acPG5f5uujpLMz9MsPtoh24MnUUSRDsmGZqangz7SomHp58p8ACSvB3PS",
  "key30": "42KPf79i2M9bvq3KTRxz1MwEu86x9BMjQoK7fveCzKu4yCGrjCdRug9mXwWCU1UvyDuHpaCKKM7Mdgp2VhdW48xS",
  "key31": "488XV3CN3SBj5LXsh3pb8BYDX7rascfZzLvzqFcBxHEmAmgpqzwfLJhmP6AqEqxMZ9xKyiCHUT7tdwPQaTTYX1to",
  "key32": "4yEBKGnbHHX2rmfJuozebF2co9pz7sLu2caiC44SYBGJRBdtbvkCAP17s6WgzACf2jvbNWH7fK5Cm7d62acapPwh",
  "key33": "4S5pAzrB1SZ8GtvsY9Qe8XFGa5QkWRUJyiDwLMyfVmimxi8vqPeQu3AWFwFMVaBUffsLv6z8FUeMFsJVsPGHU82P",
  "key34": "4A95HTRQQVw1BCDDiEEggSRYUXfbQe58Hn8eAiKTdNatF6HFzmmVkQTHRX16NofcXgTEwSz2oQ1KNMk6NswtASyB",
  "key35": "2Qt4Kz9aN35Rf15RnDR9ZEu4kjPG7vnuXwEPqsQSCaFWCnrNvnnpiix7dZn8B1PTgTSWLBgkiK7pXXgKUipLZTzR",
  "key36": "3HF5k5YoCQMZ893Bw8gjY54zrYT3wXCgHYoVz37kS3bHncmFxYrK4mjSrZ5E5xPMpJcuWJsucNaD2vhyRgh6GMW",
  "key37": "3tZ411bzS9uPJmPdVo8nRzz6zU2zKN65TQqYFHq8Tjuv33HD5rNiNrntu4FP1hbVnY9VFqAV4oj7biZCgHSvS9Lk",
  "key38": "PKmUn4yx4Y1khbMNwtbH9o5uW9yXZR4GD9J4aCAhhNdnGivA5tWd8VmnGcgi2EmzsartbstJPpZQ7QN381aCMhe",
  "key39": "5N4SWoioGEtwexTbrpjYaLby2uVqgfofVkUDNiSbo5dxRxUszuBTXrX2DJJo3ooeh2cFqqJd1rkjeTXJga2RZwG5"
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
