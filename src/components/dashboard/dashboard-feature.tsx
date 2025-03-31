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
    "iS5jCoLZVdDNBefDpAMCg4VhCPm6g7q452k4mcF96NYku9U6k4ezLzJZPEn161mMmSizMEJQCeSfSJdwuYiGpRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pyQoEt449J1V6ELNs6zx5CzYE1Lm8KZxEpMM2P3Q1bDUeRbJHiF1syMXgBmtAwj5gsMpp7FGX4Begr7Pe5LZwJ1",
  "key1": "3JRf34AfXcUM6oYn6uBWZKmmTnPBDZ1dguxwrtasCNbZ85Yjia2RbZ4TQLCDEw8uSfW2HRV74dsV49dvh5Q8rycF",
  "key2": "5ujnEGiiRckosWniXC8V71wW3rRyKF72V28tXXS4SnZe3SvgPMAap4rYKu1Z17oxyEHNW4YBpuiW7yACxCWk6YAq",
  "key3": "4Sz3ZE2dgqKz41PeahRjxgVLmh9XduZcPu54gCtRrXbWazxx7aW2ipnBfYVscnX3rB37gChjV3YiGyegEN5mFBGv",
  "key4": "2jwMjeKc5GwBSxadx5N8GjLJxpkYAxHkvCK7vWMK5FgYzLsWMh74CF6MeqJRVvhQ5nCGfutCVGgPkB3VK79xCh3o",
  "key5": "4BZfBVyJjmHbxFboR2vPxJTCAhBryMn1tHFbmVUSRM8LXBYZLvCrENUTF3oSCFQ8tNG4Cw4m4vL4Qpz8zBecqy4Z",
  "key6": "4c1ph1QDF6xkphxejwMwG1djkLfGYriGbof8vjWocScksy5XuUdQxSEBRkjGD2ENzMZC4nKZuDmrqvaDcwLhVLSt",
  "key7": "tMtUB31tjPPNUoNc1gUMNaoPwcrMCaK8XNzda4QsL61Sd6w4gwwXqvCiMzeXUQn5K8ANGbHtog9WF8vcWVCqnBK",
  "key8": "2NngytNDZymEpkTY4U3V6PuYbht8PKczT8PbXXhzDrzwt7n8L6auELu62RvUdPfqCE38ty2bcrL7MrJ5NLaWh56R",
  "key9": "3CmfznRU2c5ztUewdQ72tpoVGqSsA3EFhrZWykH9tLrunVFMi9kY2a73BBY4DxjKqa954ZTsaeQWpX8UjwnjLGjG",
  "key10": "34NR7RfEPBKWnww5Ksoz1FDEQKAADJd7yc3H3H89ggoevCkkmrsSRRJLH2Uha1JB6cMKfRngKw5y5xq1gCfSC6pX",
  "key11": "hGhF1ZeYMiFJKA3LoGTY7hMnGHQQroKqwe1Ji9Puy1491exFEjxD9GhwzBHUvdw4R57JzR2ZsRur9YjRVXYmgN2",
  "key12": "4k1ofHTFYjAcaeiQ7jwD7iq3NUsJKHyns4kPr4Aboqc183sEz8CV3vfUaAA8iBgD3pfz1vmG2b1TEEyREVLUkB2x",
  "key13": "45nZuRTjCKRwemaCt7GowVM9p1b5xC1LAeCcPvWBzATmHYuzPrWtp8mixsooGqsQ2pyHFcpE8yfRZm5fwYj3KJ5E",
  "key14": "21hmAh9sZQAtbhVvrJmLt6nbn2iuRPq626CAUd5SyN4ciZfGuohUSR7GQa5RfojhGNSXhgfKwbFt1EsjBiZKiQ5H",
  "key15": "34Y5MDKkzX9oJMYLqourPD2d9qczohSxkV7p24zd5w8MrBTFZdVpjLGrqiLEE6roCVWK71xcSasBEGyWvex3jHi6",
  "key16": "59QjSSmwZMLeoQZyaHQUF8fhLKkRBH6ZkeuoJgDoCb1GYLhWsoMbWVxZDg5P7mfkKkxKaXYyotvo9Gd4pKpaEQvN",
  "key17": "ZzNPheVjCzhwTQa8W9fRNVBtEmJxrhvburwbgJkReefRSWbCF3itFNsgMfQwUSWL6BjmvKe3yQrwZuxDvqTNHwu",
  "key18": "4QwWtSRpj6x8KVuscfMpmDcaF4PWyiSDoXFqjtREZdvebtsmyMcv8d9N2SStb22YroizEY5dGE6hTtasHgnvpmbH",
  "key19": "2KdbuWCp4kGJ13ZnnHdBAsd5NeimaCiVDLzRUGN5sd89XkBSUbk9uohSg4fsnUCVqcdhwk7Hu77Vc22ji5q8vEtu",
  "key20": "1GDoDnHHXK6MeSZveKybP84PqNkafUgUZCdDtHhbVGEBiNsAFtsQzAwHcqoYagqrzRb2V3mDmoRg9W8FM1KkUGF",
  "key21": "4tt5ii3dt12ArVEPsr7yP2cwUbpZ37jYGWX6uPBqEE388TnTMkxrRUxTXny1nuSsH58pVL496kkuFzS1KNYyLmj2",
  "key22": "ziJsZaGXYYjjczUoL3c9bafa5eyqrxwFK4phL3GW4Qfe3BRQARRNnd25GHvXPMambwvHw8eiDPNi5MPR9qDWXBg",
  "key23": "2h48xLYgcwt2PQgFkVRoRsYghbT16RMkAM5qBHRYPAdb87d9N9JzofCrHvNRVBc8xym1DTQmM3cjefjPxajn4h57",
  "key24": "24aDyBGeeWxnHfpnj2dS6ixQGaHAQChVANZ6B8H2NeFdwRmongSGGKZUvgHVXPr7UhEC5L4ntJeTaSabwee7C4xC",
  "key25": "4AtA5kzjgtd4mS7m7RfuAMDHoVw41fKvMNce7wCrmaYP7JV6puWeXdMnPn26re7vzBxGX5QATXKDRvgYtXNp6Ppo",
  "key26": "5VumhTSoUgQ27UdmJQj3ZBKhDQ6hffrA3MBfbkucB1xiSc3tJ7SpDYU7rNzwZUDVcGREfC7BHAYMjXhDRJ1iyRPk",
  "key27": "6DG63mjogo92cJQyvFeU8vTYSemayA52QbWR2eELWah2WG2vnfbyyU7fYG578x1fQ4d2YHfQ1zqQyCEzv8LhawR",
  "key28": "3u3yrAktWGZumdAx3qiKE3hbRs4UeX33hPNzCDkmfPrVH7C35V4UFxuatSuF9NdDmEoMz7v1jL1B6KcUPZFaU9zd",
  "key29": "48i8G6yVTDMWxmCv2EC9Yt85SbtH7ZLcbcz42gdGyftD49RR6iTKdTrvAM2M2vBKSuBPwXpjneHFPSXpivdsUoUp",
  "key30": "4bYmwTd3RUipCMwwnvpRdzULzE9r1JoBwd9F25dg6zJSE5fj2ZSySEjYt81zuqw3BEkaz24njkcaYLQLjk93nSbA",
  "key31": "5uizTiCgWMGaa7k6akrsjFBCqWpGbWq6jwApUjegCqLPd8KUwt33tJjBggBhMD2vTWr8qfs8fD3uKLbkzVmwKcX9",
  "key32": "3mxerGJmtcSGKEdRCoVQhpAZN7DeswNeMEqhzVxcf5pji8B8d3WhHoETyFsatqp2JZTrSPGEE2K4a5znXR5dRMTd",
  "key33": "2yNgiDSa6QEhpEV3c1PrRU62AvCssoBPBPibqmv6ws1Jv6zk1Eoh36x2Ui6m7a5x72YRHeyfnPuifJUZYp1N7wxB",
  "key34": "2gfzabr3C7dLJkzc9NcRonTns5pu5YYj3S4AuXm5vFrkJ8pLm5hB8KaKraE6mPR5p2bGNPAhJt1xujgGHYPZAXca",
  "key35": "2XXFNCou3jGjwKRMeWuaCEWtjTFehAU75iiqN9XHAfr2By43qsXBFgVpePt9QuHDDMszkzGedx9HeMSqS2JyahCT",
  "key36": "4Zt8tkLnKSCYZ9D38fKDF2crzcPQ5aEdYiXXAxsoT4mwmV1biLiDhTfGzg4FJc5fNtq8e4PktWuFFdd4N2vcpk7m",
  "key37": "2fb2r1rnwhUrv3xCC6T1ro6gGUJYmZYLuA7dvEZ1rfwsUqS8q8gJYGqFhtWFZT1rABBobS1DFnscBkNwaNifN6o1",
  "key38": "5W7eEW2UCB9LKujpepAVpqznKaFLwbWDaMpUqNsjGeE8teLtdmCoWAkNZBUgRtgcGW3QgC1osTDt1X61dWuo31CH",
  "key39": "2m3zbVcWwqtGD8gpgPkrhikjSx7CAGEJzTHA3ju4tex1VNJDW6o18rTv2e5oPKzwDa36drBx197cmd7KZz4MKP3o"
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
