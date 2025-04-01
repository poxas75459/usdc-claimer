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
    "2AJ56bTJNAnhGdbJd8qZntPTNPz1BqPVoUbrRNzH5H14suGhqLZi7y6EdJYXzwvUMzj23zPVwfDmBD7dmK4HTm2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24WfZdZ6pvG9jh2eRJTejAG6DqqaBjBwfjoz5u5nsDc48SZLVjdPoRmd1mYB3cmfa57HPCRTUkREzc622bsLwEz3",
  "key1": "4TDPzmi4TsK9PmmYDkrSRM9HVGZXq5hGaShVBTzcoAbuY6qGTdoY6LDLcBosFyZuxXrWybEKghiE2WRQsXdqzshd",
  "key2": "iNKTfc8m4HvA8kyCQJAB9XPLNrzsBtrtRfjHoSo5koGYYeGndCiKvK9nJwFZQjRXeYvB3N9FAE9QsDawDVPE6YM",
  "key3": "2s4iBramgTphavLwZmbxRTEqxUCSYLBcLLBtxRq3Jsd7DCh76XuBMsErM5J2Goiiz78xUH6tc7uh8odvpM4cDYXy",
  "key4": "2tbjHtmCVWK1xWewz855VeLTxua8s66QZJ1C5TwKYmJzTKziaNfFagN4E38y1VopWLaizo8N6RbPHF4FH7mr6xP",
  "key5": "2kyxzhwny3gGvJsbsnNQwnFZMAv5f5N8eCCpLBKkej6ovfVtStybp1QsvKLyDxVpvc741vqw3meDegYsFXM27Hfm",
  "key6": "37GKfMUhrbu8K4RcSCwsxUqsmjCyPtg61zDrCwdQYFdu2YMFvxNGmYx3SJjuammUCEfmipMz2oe7wUegUfYie6gS",
  "key7": "5G8t7gkpdHoXfh2jk9mDeFvaXXQnpU5PtonEcwyfTfZ1aa5cr8kcg6omsaPFpkcVhwfj66CEoJt3uWZV9inDij8y",
  "key8": "3tYttXCZ7YWqzVkcL1LRXgDLBPGqVAj6xf3iiuwLUbQGhNhyPAD4kU8DaUioJxQBcskYonWkCgypvS36QFqKF1mC",
  "key9": "32YuH42Seakeh3rsyc1BxJ611vt4fbMuWtoVHS2a5PWMiipbZYLQSMa86KShWpxKoeDTjqYjJtNQ8ktEVE4Y2aWo",
  "key10": "2fBKCXgahAWwi9xKZX59cESzRdk84tkjc1ckYhbrYp5HYVh7R8376pY3zjzUQvEUgK3EHCcyV6fJU3LZS1R8Liyc",
  "key11": "29XXxFZsNCH1hv1MohcZfvhFDNpG72Jye9i1YwHx747a1ruUQJK66hqsdDakC7vCPnXmw2RYxhMqj3G3jCsJq6q4",
  "key12": "Sfqja5tEXT51rZX9ExEHZA754Je1kb4eoKH473mRXhDFtT6jdkPTWk1ucmFcYfCWoJBMC2weSbwsTnyyGA8hauo",
  "key13": "2P8Ud5nTJAeFwkQYTuNGN2rWxLGqLMrQreBzcc7QTAsRHZBS5CF6g1D94zwiFgGQeUonAHNp26p1HLqn2UYpGhvK",
  "key14": "52uid81naofU9pN4fVEELLhtoYSLSDCfDQqb1viVAzW1PbxSMEMkjdTRMthCZbC3RFA4HaYAJoVTUHaegim8ABXL",
  "key15": "2Ym8WtBhroudkJGGT4VNFTAWJaTAwFy9o5mXCMpC9tyPmJZ7H6Fghh3TaZ1JGsSMLmAmENqa2Hw1p3GM2GcrdrUN",
  "key16": "kbH8NkcZtjyLKwpo8EH5bmD5gaewV6XfhwYKQXnW2mta75wxo65QkmZExzhSKcKAU62DhnhokmZMsAgG55QfKSj",
  "key17": "2ipuPQ3F4LDQHsnebnYwxxwo7HFxxKCCsTyY2HU9BtEkfHhEb7um4V2uecxn4m8WTeXJv2yGUuU3grGUpq4De4MH",
  "key18": "PVRogSF4XS2etT6aEPnL5gmQ1EX9acjAs4kFsynn5rYdWmpTaQn5RiRkFjQXzmppkJgPqvFScwZFLCYq2L9FxXM",
  "key19": "3JDwRHAZQmXHjETpTiBGJXKpuZmHWMzMcP4aBFchBRY47S8jYrdYVo5fsr8EPNHMc64xo8WnVVh2kfJwAPRRuweZ",
  "key20": "24co8WHd42aYcmEiHXuSW2d4Bh9qUEAYtCGj6hPnJUjb6qjgreKYjxq6NJesxTFySXq98xwovNb9hyk8f5nRizwS",
  "key21": "3LUz14RvjBBTiuHCZKofgcsxCcLgLhawEDescGwzDJ2uh45nAfEnYNVuSscjoKoTibdDQ9csaXLdcXG5rb7EXsbp",
  "key22": "wsiEmTQ2TMmHUmnT2WuQRa2euSqHw9qmPgMMGhdaKc5oBVY4uHho6ayZs2d1kuxdptu4abuQMRtJiVnbDnEiCkS",
  "key23": "4B3AJW5xpikoXhYnZmmdcMDtibijzqS2GboZCwhLMwThXieMDommTAYLic9XMyQyYnwktFfdAZSqUiVZkJM9Pj5K",
  "key24": "2v3zWYXy53sRbmEegHdTPutJPgmg73RGsX9pEybyRX6hRZ7gBXzuqTNgAK5DTYa7Qias2FkUYm84cHfYz7GxAn4X",
  "key25": "22YusimfttbXoK1puVsMeDVqdYPnaA3VsQGsmqAXn2xjAZVTm4AQU96uYi7hVqtGoANgqyMiMCgKzWUbH76G7f61",
  "key26": "2HuB6cYw17sD7tVYY3gLUtJ44NqBCL67N5xRHeWhB7cA4DvRvDW6jCxnq6G9qZyEy15J3NbieatWHYiQSCarLgeb",
  "key27": "2SX49dfz6ca9QsDgt1uLWTxpCKVnKLJNRHuwU7Gn4Z64jScVdfA2n4Lbha46xRwT1Gy1sF8Zu7Mj1wSyanu5TNhw",
  "key28": "3FCXRNbexPZxb2sow4e1dGP7yyvrNUx1NwZW799td1Yffcz78Et622b8Lg71tY27m2nKxrZmBikwSaR3RFh93JD1",
  "key29": "BpZdFRcFzuYo9qcWwD4k7KBh13LcJuqsG83SCJxwtiCTajnE4YGCTq8xWtNEh6Pm2VpDU68ECu8VVkiUKRyDQTM"
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
