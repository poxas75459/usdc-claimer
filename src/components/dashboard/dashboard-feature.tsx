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
    "3MSzJkHNEwyp2ZTzEtPpKgLvxkUS3XtmcqgHoyjWpvksqvp3E85gTXQJo6csvGvesRWVVHKQwdo25xhQxJ62Stgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUJhZn67MaqmgmWRTSjvHt5H6NtetSi1DQMPjfpGNjSuiw8D3PMbtXHDyFAukryYZEFWL6BT7M6YtaWw6mGoDEn",
  "key1": "5kdENJPTDJUModiR5AZJyCEdsQUwsNCEXQLgQJZDzfJfy8XdtRErx6msanoha8XsUY8xawN7GHoJkZwinFHmwDZ8",
  "key2": "3Mf9YaPguaLaxpwiF98fKpfr4Gc1bJPARnLvjs9hoCKbYJvojfzhwHcroui3p9ovuwKnQoMcUTJtua5ET3kw3KTP",
  "key3": "3un8p9oJTDSwicydmyqfRjiGCeqQFra9WxVbhFQXSaqnifYSDURPXLA8TG8NgfAHSPp6buLADyAqD7FaT6xALnrq",
  "key4": "3TtwexyVCe7GJQqCvkTeURk9CzpFj5VkYYu3CReBAe3yxPh9BsAhEcq76hLgCiLk5iVPeFRVeZvtUQN5MX6n9aCQ",
  "key5": "46C3kMH586mVGXig9ezEKU7GCV7ujtLguXGwwXuQia9aVZoYwcn4zjDRucm6ruGgTR56qL59mqxHSAVajENo7taz",
  "key6": "58642qL6ENvGK1dzNDAg1qsL5DW8UPjVzW2Xytf16p73dVh4QLw9UGx1c9jxoWgVsJGWuCzGnt22GgNKrevWG9BG",
  "key7": "5TMxhYwGrtRgh9jJNEfecUBLpW8yrLDq3hZmgnLTN2ATY7Rjue6Jypcs5fQNnUucgDUafPgWa68Wau9NcTgMutLp",
  "key8": "S1FmXHpuyAAdxCAyDduVfVmd7oPb7qnZvkBYhk5px4ymgPes5ybyGmcLpj5hpsSiTsjLnkzrfpSd73C6ZtYdDEx",
  "key9": "3BVziPGstvzbJSDKLRq8nzMcL21bYiLnTkg1Ad4KzNM9udEPJLpW8Xsih3J2gdWDnNNo1cXd3AKWv9NUNopXCiAE",
  "key10": "54Nt9MEmk11wLy1h1BzC3rTwsjVbXgaR14Vr7itXWSmM7f93R5N3joKR3j6VEWS9kWWVNqnQ5jDASCheBXUc6sUN",
  "key11": "2EQ6YN5yHJ7yYktPinbRgcMt4q1FPW2VmSLvKJmkXCCw7r7uhAKFEwRbr74z6DPGrBbv46uxK4XCJGRZECFpREiQ",
  "key12": "3bF2NYXSrqqys5YU1C6Ltx5UdT4L8L9driiZYRw58TJV4CfQ8VepwdqTY4UknnDnAKHxKWEdiN45B7jqSmQ3rAJe",
  "key13": "4w5uK71QgrAjzbvL3d8YXrZgR1qcQWrfLJu439UuCntXN7Cs9dLGS7cteXudEngjqmT412hYhbgbDEJwBzrj5VR4",
  "key14": "5iFrgMk61YMaA9GfWgZax4mRSo5zHcPbyYq2kTei3A7Z5WjQi1CMFezGMM8AkBFNSyPavere2YPTEesXvcgr4ACq",
  "key15": "4gFhRNsy7EvWVCXSMn1e6nGfRsGD51iqhTq9UKBjXXiCNAgizg4jxifS8FmNDHubVTZHuxxAmtubjQdFXc7yFvXs",
  "key16": "5XJ7uwckRAbPVLBLaQxeFd1CTEnkLFT2pkRRbx7Eqj7YHQnXghu7Rzt5hJ5Y45wEKUL5SaYJ9okcbksi7YibZHky",
  "key17": "FRejxvPJw3BeA7Ruvhit4bqtdozh6u2QEgM9gBi5KV2eBDEUmmwABTNYsmStSkkYxXPvUzpnDfyWNbugMavJwY4",
  "key18": "5xBF9fb4DTTVEHe5v5tcpjEwKvELH9PsBFf3dw89bX3ZotP1togmDrzt1NMUjmVnH9PzjioAVdzFkqMtpMWYtg5U",
  "key19": "4NPGmL392DsXRajpzahh6tkDTCd4nEZNGEoU5wyY4qoJphq6g3YxSPzTSkXw5s1RnrbWW21SsjfiQBFkaqq8kdYV",
  "key20": "3AjMK7Cqdp1wZPWHBfyeK4ShMo2scYSExt8kumUhBwQidMhLRqbCwnuUEsSD5MbMC76Pjjm4sgr247N9nJeQmCWG",
  "key21": "543P6ik6f3CMxmZCmgfxUbWQjoi9CQ4h71TFsF5nASuv5XgrBgnzdTpSFZY4pMKCWZsGasPgDM7C4t7KsqvxLKMq",
  "key22": "4rvSJiRQtbFi3KznbMZRLNe6ripNfAGRrghZc6LLRbGeAi1FibQd7w1EaYXCiZL8yvvSNQmYqkj9UryPe9sBVVSk",
  "key23": "2gikKMci2wk6U28xpnKehZKRq1f43W2codNT2ocL3L2rZ6dNxyWpkuC5N6c4BEoCFxHH78fH72qZneth88mjZZUH",
  "key24": "2rsTBXEEYPQk1m15ZTETTdfbi3vVF5FGpzWdmS7Z2iSncFEidtLmWZ9usjTpHxau2sqErLLE7MdgzyJuUHFQmA2A",
  "key25": "5GGFdiyZkjkHDpLWVkvzdEuri2iZJBZnLc16DvpiCcN2193VJqu8DgUg7wrWHfxtDLhwinjbWag44CgakC5fqtVY",
  "key26": "4refckEA8qvzUMDb3B18Hp3BsHxPFUmh7rtVkU88EwtgSW8MukMHaJzSwEjk3SNWpK36aJCL3H2aXQC4N3VXZ8se"
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
