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
    "4RgTomrAn6bDiPeiYykY4X44dDL9hDjLtXA8rt6o6fx44XiEwU9A9y5UnaB3EVsU7MafsxFTN452bRNnwPWDJQW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFihJG1NJdKxdefCLZd1NF7pX4ZTCjShJp2zmE6S6e87A7qMwpZzwAS45Yyo4RU7kFLg8LspqwGyaHNvv96jrVC",
  "key1": "2DRFVVQd7kwodbqt1GDEfLfXQcH6mH7Hs4NccADUmQifdVnL7Yto7Dv1T7uyo9jAYoqr3jUiRVhaEMHWKPtAPmSN",
  "key2": "2jpZWZKU3xKPwCzqFfYkbqCSzxDLib2ghyD7SomJkFcym2GbiGWZMSzmvy9dX8JqN2ZvsbueJLC3QSgeubTmZ1Qz",
  "key3": "5YTtwnAx44H7mCMeWoBw7nfFTuefDmm3thnL8GyvZnmL9Fv87tDzYeuqdBvHggCDuMdxB1fbKsQh9CuxF3dpPPQH",
  "key4": "pMA95Vn5mXfXAdfBjb3ynrdkG6F298z2zargwqrmwioMTPYuYjuwg3YSdmnG642ZmSULLovhNS8irLcXMTynBYv",
  "key5": "2H8nX4RjsdcBKVRXYihmSN5yFTyUEpQCYU2kasg8rqqT3C7ShsBg4dTZaY5PVwX6By6RdqYd8CbNGAXiTtPfJpTT",
  "key6": "5FehtbpDxSutVvUTrAbyWvmY28vEtJ6oHFckjgv9hDPeYi9PhWQFDNkdoeQLTpghSx4i42tAqzUYfJ8Ft7XfP3Ni",
  "key7": "31WoesJwpEkD4dnAx84jme7HRAU7TZvv468NczX8vkKUdGZSFwfz9qqU8GFHnqfVoQKPgMuK5kHwXbcuQLVgBWmh",
  "key8": "EChEmjvHpGU2PKPMdWFFyVMeMLaZNrNJze2HS6JqnX41jVghU9PNGT2Kc3Pk87pt6WmrY81DrJd8DNmwNRm2cv7",
  "key9": "5FcZSyRUR3vSuQuwvbRfrCfSr17NfpMMkHbBEqPxUnpv8HFEdtaFEuuZxx7WkwvJbEfcvi7BbfjitdWvXJr6ycEG",
  "key10": "4ZeL8jaMTWhLviNq5udpRF2CmKexjKHRew9rENczEvpAGT2k9XmfPGs9zcq6z56Tsw9TdiQF1MhzbVzrgvLMUg7S",
  "key11": "tgj4SDUUbmrNai3B3aTfjMZq7zFcJv8bHHeRJUx5KyQ2fw3mZ2W3Vu95YwnS2Ktj6XfNsvC48uNJsfKReDuumsq",
  "key12": "3xkGxZoGPG5YUwQBHtA14qotNSGbYnQCqNAXYcVj6jLAKri7U1FwCPtoySP35PSRWFywwqCHixWXMt6AjirU3nwK",
  "key13": "3L2QNV9zEB7oWF28HFNLCXce8xaTTq1kGuQdFrRpqwxJQngbMKeZLptMGRs9ziCPpXUHRVSipFGY9DC1yZxMKomN",
  "key14": "3PGbFHyf2EimVYt1rkBerfNyAABJcR4frSmAg6yjVNiG8BY343QuBfCeRmjU4qgsvDZucjFpUrZL6b9oxLNVHCCh",
  "key15": "41ZmafSL3uunfHy7xV3ifQjAzXcx5LDykR4HhQ5L6K2Qw2SNJ7B4KH2YTrHR6zpXshVNoasr2z9aPWppK3rKo9Da",
  "key16": "59VDjW8dumzzzW3fvyt4bapytLbSfocXZMSVyMkYxA2i7YoAr3iTqrqHPag5JNxzpkbYRd7UaB6FD19fDLvuZ1xt",
  "key17": "53cuoKevdgUjzX5gpPG2tUofE6rfG8u1DqnXr2nyhuKhMm4ussSVUzv6PYquKeyZB6vkpgs7WmQEeSrvaJbuyfrL",
  "key18": "3NafPPRZ3jie9EMrSx8qXGSkupwNMZuuqYgSNQxqWzGVsbsLpFNuujxLn2ARefMwPSt8NEoJhY99pjcskKCokYyz",
  "key19": "4mW89AKswGem36f9fBkpfN4FM5pW4rHP5binTVK8YpBK6Huj22xDsSTggMsEafHmk5dxa4m18PzLsYRJUfjxNseY",
  "key20": "ys3b55bt64TE98aqaDXy2p3c1Bcn3n9eUMc7dZ56iTVGVX3u5K6QUr4dXEE8B2pBQBWm6ZLgJfNMYKEbH86oApd",
  "key21": "poYnbFp3NHxAiUAkAt7H6K2XorbiikKVHEepXN3p5RHtnaMbyerdvSzerwkNRGgQLcEFb7wsGpZrqxYxASHyAgb",
  "key22": "x5CTDXCg31h168vcK3WCNK66PKsHvrkbjMDdGkdZ8wBZBm1gVGatUmy46FfbVH8GbGF2XgZkrEsCFBvj6ymVib5",
  "key23": "4jArgFnYT7cAaWFoogdNYAMfXpg39MNGzCUdk3LuAY49ShXtKn3WLFNFV1oGjsD3XeuR5QjuEA3shVSdfgZaAevY",
  "key24": "XWsRHgZB6bF959QNSSAY6ST1PiTexybL6wm7Ppf8mT3gRcgAEHTdsSFXHhv4JkEpXQ6u4PDRGuTQEUyz3TUvsmP",
  "key25": "3AWm5n7UuGUr5x7w9UJTVGDGHQcFtmu67jGMY4weXSC4H7nbqMytfGX3z1GksBqPXMH21QmgqtSW5mLaayPiT6ia",
  "key26": "5V9GkumFZwTGxdh9ZuYwakDxaqBtfg2Z1VxWhTYWjGDPhxcJHQHtozhSXrmVbDkqM1F2TY5g9qc44ychN6cfuHxz",
  "key27": "4RSXrzhwpcHub8Rj6xVzEg2Dz4a3ex1pmtmyt2ixQWzhxj6NLU5emKCXaHzdgu8BtH6q1QfYK7MgS2d6fmUT5RDq",
  "key28": "2PUmwHh6ECx2Q8aJXhPwv55jrDYBR5r8LkcMXnK9YZsjsi5YG8ZS7EBQf4koEuewv2pnWUAUwkCH1SB6NKfcGjWF",
  "key29": "MMrWGtdhkX4RZ9Syst2LycaQLXeWCGWYUMvQjKwz6SwprrgqX6KsWxZZJ3QLDS4P4Zf1ghQvf1D7HQcfxpN2bB8",
  "key30": "43iC5YgFRXm2M2st24TcG3PabkHALp2g8aGBc2pxtD9RyPEB9Wg59mGgM3azZFKQfrkpJ1cZxXQLdNnddGTDehCC",
  "key31": "5KNLztyuo4xdVV4nxyWtQuijn77ctJvEagH66xghr7Sso5gcDLC1BQwxakT4s2pWu7siGUWkjzEjRQdfcm9g2F35",
  "key32": "5U8QW2Y9fj9WHg2c242SnnfbEb1EYFPV9aGcjL4ivQBmYRs4WjUGAJBnifqTTvjeufduzhf5QBke7yzgMLPhLtzg",
  "key33": "4UHiK68rf1YV9YZQ9VXob1cgJhVp3DMT7TEXfMdFiWfUQs2repN9tpnSC7tUsZ6KQWSHJQnXCiWbR1uvjVZoP3kb",
  "key34": "2sz2ar65u9kDbPAhga75p7UYtyx422z5f4C45NQWEjuTK3kiwRsr3CvnqSURmX5r5mJKrDt9XknYY9ZJuyYdi5MQ"
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
