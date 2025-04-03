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
    "2M72HkHGAmjrYvcQ1Cp4SvmStmCdRQ4X8WpvuFTjBhQW7W4gnStsHJacGM18tpVHnhMb6HTMd7QVrnNrL2jvju82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sS3ei3SuZCYevPnbARR6ViRqQsaTiHNBe4BcNTqbgmeincnu2X62FSjcqLaZWFmxeGhkwBkP76v1h7oxjbFgRer",
  "key1": "5BqC8sff1hA9t4vPRR54Lvtezk91i9HQgjBCE1YNANiuFFRMj7JboCSaFdg7yGB4VKG731dudJRSEqEcEE1YmpeW",
  "key2": "WGrMnYprKdZR8TTwAYUpnGLGgERKEHMxQNZ5qp8yXLtdug8BALvzbzy8tgaphjMfP4jA3WPDkkc8P1FCcj26oVv",
  "key3": "2tno3U3Lp7bzNNBHfsh1pQjDNtr6fqDtkweEWDhN99ZeJke9RaMY6VPonPSd1DJ2fK6cEgDRoumbLWGLdjiC5mom",
  "key4": "4LuETaKJcukiPKT5kAhZpz7tfPLgT2BZPNz3U3AAXXZ2CU52Hd3tfJfETyhrh7V3eDDLvMP7y2KGKPKnW6GZnuui",
  "key5": "5wME9derEDT8knq3zMpzhJEtbFAy7zE19Jc9Dz6axzmK1QaAKq3kSnMa7sgZ4bFMHUZHsPdfN73wLiLVe8v4yeq2",
  "key6": "5CuUMUJD28gzVHypaHnGJWQueNjbaemTid7Zh58wYVuX4D7h3Az2uTQBPB22iBcY15TibdFCQLiyh8Ftp7CDcS1V",
  "key7": "2KJ1w2zCoSmrf5Pwve14T6AGbHBDxDArB8hCDCKBxM7eA59UbHMSf6bDVTHA85YQKpnNydLT79W9VzwkwoxesD24",
  "key8": "5Fm6uHby2yqFFLVxQTPSGto32p1Xg6vbEw14DJDm1p8WDm9yezcZDPzvhfxZYZt8ASWp4ajFKDiCdseZP6m7P1ah",
  "key9": "4YgEAM67kaTKMYnEtZhvxu5VTPudQcj5eQUCagToX4BGjMXs5Sn3auHKP8rjwebby3cBTQjtsWwKciktVcsmh6uQ",
  "key10": "2u3gR4KeGApPKtTqhGq8DX9KtSauvJcS4TkMzvdViGqESmqHo5gzF8Mpq5U6DAgkPbGrGZeiafX6ikuzyTyZV354",
  "key11": "47yLAi1uWUGdks6gDwTM2FtghErUbMJXsHtGxs2entcgJjzBaErMXSQPccC52Tbze9sk9XsB6WdfoRnrA9Ujwmmf",
  "key12": "6qa5H9JcEDsXTF2Moe9KSB6p5THF6Z12on3gTwYRWk7o8NwVgsEcUs1izeWmaKdDFmkruZ3CVYy91vqHyeCPJsj",
  "key13": "4GpykHtzEcBf1jbptbrS4cS3sNiFXGxr7h1eT238m4hvm5EE7U8fA44WXxFpGAR7AtFWraDUAVv16VXQ6dRJsX7s",
  "key14": "zna9wdUbLtqNVvp1hmdHGUmAWDRvy7H3s9CverhvsaFyD4s9BBnZnRZY6LRYN8MarxnpThtV9WrUFQiK8KhHhNo",
  "key15": "4fV7Ahtjj7Yyra4gfJu8FPcPUALNV4eMge18nGQ5exVHM4r2RQYFUy1w25ZvTwFEhnGnbWoL2Aqk9mCyQ5BdvLGi",
  "key16": "5zDv6AdrALLwdk5Bw5DUZNAhvhk39FahMZVn6Ch98yFgnBm5Ze4eAF1UTiYBfq2DBPyh3TfZk9yrAPkGK96sXvRN",
  "key17": "4G5DNjekds1kKdSdLftJcQ9TRzSPfySj2G7M1FkR91vBNntqUFFGs6Y3ZFo7tGDdLCNg3ZUB2PtmBbpSuf1tcFd1",
  "key18": "3BwfhhwNTSrCJdgvDHiKD8HGGDjxSi9WUBNL97uhjU4A1Qjvp2rWJ65Pe7xNQDNDdpZk7ch9VrL8DVNfdgNoC4vv",
  "key19": "hbR9bw6hzSvz9gurp8k8xaZyFKGdLEyirA4fJNJK43h6hAc7ofzmUC5Y5t9hpa1Ft6fnQebabh26KXHDQdEymJq",
  "key20": "41BY7nk18xSuW21odF2wGu31Nrmgoz1fwLKN6YiFYMFv9voYKqkbFPXkGfqdzfoyeLv9Z4rhxCJiBbtTsxbKy5cN",
  "key21": "5NTVidhnoB2chusgTVM2d3Q8tNLeEhgLfRk3z9Vb8uPosgQ1xtxox9vgraeYRkPncGo8hW68itoNzkHphrA3etZD",
  "key22": "3fAyP3HdXZGn6hBxkGFYvdWWGaxKvGgs687kakuYq79BtvGCk4HgaJGMxPN8SwKF5iHJo22RNt82peW8ZD2izceU",
  "key23": "LaZ9NmTHLtornHTiABTDAcKEnpv5Xosn5svY4TE9uzEYLwXhAoFvBTAEeTT6kiKG7FWJrTtAiUWHxCYXb1B4dbi",
  "key24": "f8eC8iRQDtBa1qoygJrjPcSgZnBGSZC2HTabb8RDTEQ9g95vD7swEy1ZjUNJZuDdvCZiVP5KZSK93Wn8psu6DEs",
  "key25": "4c3jKMwAVTXtfdessWXoSnNBox1ufFK6dPJr56z4nkUdUiR1QY1j7FyCR2qZrWZKjJv2fkjSySCBgwAvoiRwZbAH",
  "key26": "2VJ6ViPs9yANnkPtnyb3PQkdhkaoZBhR1jRo8bvj2eHn8jYKPvLq2iPb9PFMXVK5VnJk7V8U45d5RNkBqn3p1U2k",
  "key27": "3a89SrnVpgKQruUphzYNM8EeFWf4J7SGkGmr2maYQQLpopdM1aQcyGyFgRmwBA4zjNphseU6tT9QtnacwXMU5Txe",
  "key28": "5Tq9Z4PzCA9biamoYscwuiLyqrvEdEK5dwGpG6JcpMg2W9cA1V3hAyGHETYxB1CXVQZZB2aVhuSPNNb7E23xT3Y2",
  "key29": "4L7hQcaEeScGeKgGr7sFpVrv3bTcZtw6tFKsVWajuiDA8ktNQ1ZPjuiCRGdgQNVCWo98PHomjc81ULkVGwHDTisi",
  "key30": "33zpTnxg3wmxLPmzUKCLTQdHZ4oTxGocr4V7eUgqxKFvoAQ36Y5egwBmwDN8ZM1GXd553GiddanvmTmvuJrJQ5RM",
  "key31": "354SBfR6hEsdpLF3CabU3G6RtqsnoynePd6s6HpX2oPuNFC2MukcocAK76zicq6zqt9CQEz2Loozzs1jmSbEe8oB",
  "key32": "4uj4paV3yraiGBaNArfxfDbcVnzv7jRANgP4RL9cuDub1nvN1ndaXHkhmmQvkdo5jouXRfEGvF9VUWFv3t2Rvmhe",
  "key33": "GNUgozDqjhBTiMBvU92hjtFMgeeiBCevGnUUURNpfF4aCh24a9MawALjCnKH1c2nYb45D4qwNFggHg4dyAt4SWU",
  "key34": "4qR3vfdq8iRkhrzKgpvB29WgBPmyNuw4r6YBrKTFbTsbZWtFjLPsrXHQ1tQfkEEnJ5b9S8nRvEEeTUobysjqEHix",
  "key35": "2dV6TiZTsK3c1ogGmZFwF7ChkBVLLco1weKWKmu6B3BFeKFCjoVCU8Dy7kqaUEw9VZjRPpiYVy4dRQpdBP2m54zC",
  "key36": "evbmScPxuuYwKByiWMzZ6FgyGmaoHpRM2GapYhGwtFUSm4UmewKWbct4UwjzcR4SQr3sRRvyNXJ2daVEF2YsqK5"
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
