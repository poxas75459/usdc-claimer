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
    "5UAQyYi6AGEjYW2qsPU3f3SacaXpa5LNtq7Y3iypHn9ymC6dD4QK1qRwDPU29rm9YMFKPGin5rgos8VEHAUwZXYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52tpVAXtpw5QGaNihRUs6yBU5mdGqATe4v7UKPZXUffxzHr8EN1oPVPm3T4wZ9KuHUZLmCcFQG1LhgcMKarnTeJL",
  "key1": "227t3gtnSdUnoWPEGpXTBot7BnsJAKMrwboSa8ErhUyRxJmdu6A2E4Am68D2wQ4kafwMdrFTtyyzEwTi82UVyCkj",
  "key2": "4QTdjSY1P7ES3ZYH618zRb4bb5TbdrMA1Lw2igNj32qZXZ7dH3Pjw73aqAMxrbP2BkiC4SJ8SGQHC3WYvm1FueMy",
  "key3": "4utG5J8GqXCYtnsWHvZa7QDYowDLESa58esBgKaNtJ5ej3ZU62eZrnJFnJyGLqKHLWtSBBWkwSUncFPsLpPZ8RXi",
  "key4": "2wFsNq4FURPsEtExackAzPfcJu593DykZuVXed6JcsSShhAdCTF9z4gdmTxFmDbWgCVnGvwfqAaL2LsRTQxx59kX",
  "key5": "2nwWfdi7eWz77HZoZKBETLvrLfLniyav41myHuiV1iZgNF4LXLyTQnXJpT7udgc9pD4W2zNk5fJq94P6j1AKhgr8",
  "key6": "4jmiZA6U9FHpBdRa76zXpWB9w5vz7YrmdPZ9E2oHQZBj1H87WYBq58rcTHctbyoJa3fAtDAXWiP5ACUkdNTmjjbC",
  "key7": "7DEd6216oP9DgHv9wSiXEKRGWHuiRJdbZNWn17HEk8okC1z4FPduZBh64G2brEMjvrSNzcPrYtELmTz1wyn8vQB",
  "key8": "5RBAbxkhcqiL9yXFzHV2tt864Jv6gA8qHtAA3v3aEaKHvECfVHLi799ztX8FAWHYiCNUhN93WPHsaDp9NRm3WWdk",
  "key9": "4Fzh2BD9BdHRZqPkzUjJTpw634YWDZGdT7fgJua5k5v5YhjjwMPWZuG6BcBifx6PMAgGpBVmR4SiiqjRdtaiQFXP",
  "key10": "26JWpsnWijSfR816cBNZth1ziqWMotkPUbCWEoYeE2Aka1H7Dszw9z6a6Ayqh68cSYqizC8RCKxsfPEoK4FXc8DL",
  "key11": "62DFG6f3x7BR8z56NAvCVDRTspa713yMJjUqhD7RmLFTzVMEf8sJbeaQ2qM1Yay8YDXEfAtZEodZAfWuXpwDWm7Z",
  "key12": "4L4V2aKsfMsQHvq2tPvWVxYLdhgrS3oMq2EpthFDuPwFER69Sr8PAaQSJ3MDAGRSeyQVtnV5AjboedhSxU6ELHhg",
  "key13": "4HxaS2auy6JPANzNwjWXrY9yTWRuJx1BWQ9CTtWTS5XzKPT5UUxmAbbhqBxq1PuaQvGExwQiW5TVmgDpVasUrrDN",
  "key14": "BfMayfEQni9ieqQDyrwwfN713FovshGLo1zqBb4pLnekrCULe438wGKc78HNmMKUNQ6weJnhCnJiHCAuYNZUPKb",
  "key15": "3Gor2Yq33G5ZhS1DNaobsKofmuBTV4wP8ExcEMyUY1VGU9WAdtvHErcn9ZqsrZPs7vwQVvxeckC7wQnyJuM1tDWK",
  "key16": "Wke3KtzzewadCrmTMfo6Uuye1cr97sNnQh1z15Wq8SQahRBCMfmXyUwtu6ETR5VmxWFoYNZTCFL9eEBNH5bHByz",
  "key17": "4RuUscP8aHbEn7BQHbJXMdky6cBANXWgLwyGZpJtpJCREDqX5HLgutFKBrc5QuNa8F7Tv3LKAMZZpFnujVKsErHN",
  "key18": "2hoeW9ku7Ar2XcQvSMFwzF2TaYCypJLTMU55pMfaMmetHzzTPBSKiKDud9sE5N5xq7NtXdjti2BkXj6qPtia8MBY",
  "key19": "4L7FHWt99ei4D46FSQ2r17saS4U3bt9RkFzbWi6UPq1rvmb3GPvQhinMbm4Xrg1t1viJwMpWKL1Pve9GzNQXws3Z",
  "key20": "42W4guG9gwH5jVw6SbW5F1menBwgHPfRG3pWEpwogkS6Y9knpSpC9fYfyTzEBXsVanXxFqAJjs5LkGCaKu9LuMpm",
  "key21": "4EyysareKgJFUyaDaJJ4B7BJvAiCFjSm88bDVr4pcYrat1znx3h8QXMTn2BKLXzzApxPWcdMNYfJxuh5o8n4YeeX",
  "key22": "2i26yyvTA8NfKZLpC3NcFH59oxDDTL4NqyKErCoVsrYz4dr1PX5uZXyXaWbdgTGh4uf8mUGs5YgiPMk48HRRFfWF",
  "key23": "5Zc8WgGfM8H3RMit9AzmFr9yxSzRLbtb5mzp7h9EsTpuen26SzHfEz8d1Zhu84PnvRf6md4rCPs5ZZYr65Sjri4M",
  "key24": "4gS12DeGSHFX8Dx6BxZdhmn2egjRmgmQtXtr36v9FxnAREiNVgYjfwkdyXdpCPN2s5EaCjhE8BGr7rYUmEkGuYf3",
  "key25": "32UgrAcKViQiLn3H3eo5bbzri7tkjDSVQKR9Bc7NuVbD1zdcUGEL4qyxoiChRhvUxw1H7idXdn99gf7tQV7gR94y",
  "key26": "4FNXWdUjybjwhdo2afr6d3VHkTAy9mT9UuepYFp6a1xcWrbBjZim1aLDVc8TVpHtL6BXxGQfzt1od8jZ8o528t3s"
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
