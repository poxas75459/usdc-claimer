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
    "4DymX59ZqNu1u1QQrfMhvm2ZgkwVXJi3bdmaUug5oWvHjYGEe2d6eaYan6yQ1fLiMzhpgto7j2q5dUEbTDMGiZHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bu9PeywGns4b5NkDxpYrhHQjtngqv3xexEeUsS6Utx2jAGvm6JCEjoNddQJcGyFyy2U6XFwTiV6gMm6YLSc185f",
  "key1": "49CRqdJTiVGE9borGTwZA1mnvrX3F6Q8Qi4zeatWS2FWKsQ64QnFvqVwe8UpSJ4Kyg6cyJgVzZrHhNqRxjSbvSgM",
  "key2": "CuWARqREPWzGySaTc9dC33J32QmgopYYJ3X9ofCJNKURPeePkMV1sshsU8roM5Yq7tugVsAvsxux5F7rtF4X8M2",
  "key3": "21Y2tDXJHTbQ4yjzdAuLss6gQkfGZkhKnJYPavq7izMJN4Fg8vgd88aubsEJapSoUwBCrUA57dD4GQGn432SmYne",
  "key4": "3n5QkvTzRAzvPsLDCCwWx1UJQn21FJTvGkqLuDXz125FTyYMW9HCtD8eULNQrJJb9NjpWgmbqd5KJBoC7FvF8reE",
  "key5": "cQJheovZNfxqvDYiR6ekfFR5P1zvQFt8wRxTKTgApsNCFZ7vrfaQCFRPBm6U3gUhf1avoZmtPrEotrgJPJkwG3M",
  "key6": "4TaTx5Yu4v43ktWyAAT7Vm2ob67i1f5bGrvWffHyrg2dmiB7Pypke55LvjUu6LEhTh6MVwynt2fQ6HNbL3iZ3fk4",
  "key7": "22f8tJa7tNK2tAh23EQ7cAXHcxzfMYadbkpypQyifWWdTgCmYDSdeVvFXweY7Gd4mdHURpMVEFDCudjuxRNGmR4U",
  "key8": "RekX7Mr12bt7SGj2feMEdms4RCdXTC5V7oDzugC57wrL26PmK9RKu6n8gBcKbHPkkHiPzRYRiG3X7htcdEEx2Ri",
  "key9": "39QZB6UEtQNuxJLMWpbuzVNXv4K2NFtbQRddB9xePnebkwwxAWEpyd2xQ5mymy5CVzaZiL19KJ7goX16zG785LBE",
  "key10": "268cMKcZEacNbU5UyQxw3QcrGG2QHrtX8PwXi8AAHseyxhdep2H7qW3JKHg7HkhysiDfg9cxQ1nn9PBqEZ12Addv",
  "key11": "39vyvVt8voXBGL21iawYoNnHoBCXSLY6qrec34mjF8FVG14YYvky3TNnPV2zCsgqq555XXDrn8fzQjAhXfXcmks",
  "key12": "2iAk4jV8eNA5x99raNg2Mk6fR86Q9ZXyJKm94t9AhB6HEWUBmUJotxqP666fh2krYbSgucQ2H4PjTabg3nvZeSfS",
  "key13": "5pstwUSmjNVjD3N2HW981n2iaqhfTbNM96EpZuGtpic1ppKccwQRaC7RiLSEtCRrGwAjB6ZPJXxDtuuJt84Dfk8v",
  "key14": "4Nf9dVqk6Z8Zhuuii3LbLsaNkSCWE8KW3KmPQ7WBfANdjCTsSYprMBe8P9LiQ8FaVnAuYqXNY2NzDpo5hbWZgQJf",
  "key15": "S6CQcBYX3QaYwmFM9AjBKgbVC7fiNKKGuz6fTsQ8hPtw9PNL27Gmm8pd1rG2E4Wf3eCv25F65EhFiehia2wgRia",
  "key16": "4kppX5MVX7YhvgMat2yyRqHSGJK3ytUamAoBguZ7tGgmzWJnAAqcmjiEKc6GAh81dKKyqWFw2R2iJT4pyhFFaEnj",
  "key17": "5KAXjKYySTAdHRJg3a4mwfftTb2suEZwrSWhnpBK3nXgeAVosTWk2W2bXmcX9w8AFiNooru58jqpLKeBKXXhHC7V",
  "key18": "55xHtZiridKL2a8VvJF9NDQkJ1yh8XJCpEMpxYsj1HZtVv8iNADA3HP3mYB84AqL2rWPyGSmKEnSrZyQwYsDTrNx",
  "key19": "2X9GTtwTvP6DiyakFB8qQrskWkujqYbkJdvRzuNbiDEHa6jwW7q8vA9h3KWFcAswSrL3nj1m2sW6rLjGyXtjKASP",
  "key20": "2KQPshtpPrG9SWp4TwmiC6XqURhSKZ3P2wFMfvE6iSBVyK3BnrsNmA2a9Bn8U7y4RRa31PiZENrGSgL6fo8BDhMT",
  "key21": "4um2PwQZxXRGfnLLvH2DwegtwVS8rWCVwUKxhypnybw7KCbFbcx3kw52MjMdn6emX8jiYLeRnPuvFbJCrmyxYuh",
  "key22": "MWwd3RkS9bnAWLpFZU2sqSyRwKFxecRe8TbdHiMkc4aVogrUNvbYQ4nLJaBjyLTXytr2auFAtzphivfRJaMXqHh",
  "key23": "5fTgQ3vkkMT25rbU8MADYnkghX9hhRXqbez8rvQoPwn9s2nE9Bv15g1hPDieHaoytmyrAGtTP3ppek5CuKB64Bsd",
  "key24": "3ZNUgzwUniTaeVTHWiGaF8fHUi5X6R8TbKdQ616DixoCUGHdFPnkqfBRx8mvymJZcSsVkMrEoFR4qiZhB1Rh1cLj",
  "key25": "1KpeyEDV1CbUbdhtaUGHmRnk1yXKvbnFEq1gYJyc8UKDTYcRA3vjBisFnRp8TwVh2SMZoJLjWHyRD8sNoU1vYWD",
  "key26": "5JyWtebWfgq4m9XtCTWTfeXfkg5BzXwcjVrAifNX4XMfJGyNM5TfxMWNF2FzADQYYQgztJLNXvUeGMA71Nou76VX",
  "key27": "3PnJ9HYfvoN2PW37vE4UX7B5cBH4KsDq9h4NHUwho1jTztHEUxi8TnAvnC42Uye9GgxGZjjti7BGvQk6vD2PDYH2",
  "key28": "3EHdwgugzs3WbDGgKErnxSUNr2gEwQQBMG4pzqZdAyPvijrmMtABDjpHxhmDx8fPiPEswJeuVXikC9xA5MnCu4jd",
  "key29": "5EKtKRJxKPUF8MvcPkjyLgxK5JDv1FeRAuCFaza35UwX9Vf5EX7kWfiazxzCdFHzGYfZpnBPpGF5NWMC2y2zvNbA",
  "key30": "5RpvPooduiNrXPvaPK7uZnpyyBHixGEY18CErxV3iPiuKmW3AoW3cmzWeKX6XsaCzXg5v5HxsDmjyJSm8veh3yny",
  "key31": "5Lq4CbMHZwqc9vMnQqmf4JLPhhdQ61EoRVuHpLwFjZm8Bf7s4MxiDbwooZHQBm1FxcmoMNRwfEkThh6frrCxy3ME",
  "key32": "47hZdd2YRmqcM2kMD5JLK1Z3en843bXnG3agrJKzwtax34BNfA6jZ9xYXDciCYwUMj6JDXisLKCp3FExctXQjwh",
  "key33": "3mDEzECNcWJtsApnoN96Wq4Z3omGQ3mPRcaYwMMEAYEb34GAm2uayTeZzaVuwtbSp8gs3LqHHaZGF622Y7czAnbe"
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
