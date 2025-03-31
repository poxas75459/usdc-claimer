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
    "3jmhzFn2vwkRMTe5T3zcxe2BNCA8C9kK7iXrFcN2hRy7pdsgqZsy54VVM2NifCaFsTKnvCdUwoEWfxaCp7V1XfeT"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4uGg5Uncdf21VBpnhu2zcwFYafNH4PcVbnYz7BAJZxoD9R9jo5wzVqJ4XZ81G24MgbbSekKz7GDE63ecHwFm5WzM",
  "decoyKey1": "4LJUsVGN7c3wWZpSpvg5kuxnvJ9jfQE1PHpDvMZNePCmHfuxxsR8WVAyKFfeM2t3obQ9PhpGmgFUmjAWupF3ckr",
  "decoyKey2": "63Xs9zuJreobTbQem3iimW7MuUFBgFhu7Bn46W7TZkKivr2p2MfriCdWZDiph4jU1oCMz9nV6iKGhQ9NAwcSbTnj",
  "decoyKey3": "63V9WcHQCwN5Aj3teGDPeNQHgjQe5Jr2DJjuEQvc4rGmDk5jutTSiTBqwwMLFXPuP4ZKSgpQcBiN14RZJE7FnTZH",
  "decoyKey4": "4J5JAQPBHAc9G9mAnXSXedY1xjpYp7EuoCosUDRfeNKXbX1x5ma3GSqaEg5HAqyjSshduvooya2WpTEuMfBSyU25",
  "decoyKey5": "KVA9HZZnEwD1MorKUmxhKETjVZFHd2Kxk7dwEeDBZXQg4UgDYhhEMRXDrqV5KzN3LBtwJJEz2rJLi5avNzCfLA7",
  "decoyKey6": "4t4kM74XiF2UZFGTyhcBvVdptQkRGL66wcJtFahiETGSLDNEoahn7d93vGCdWBXXcFWsC4d8StbPugKVTMBGRSgt",
  "decoyKey7": "4ToEz6HRJEtJtvYKSfKG8ymj14Zv7e3eoixfUufuEVWwEXgUzxhhpjzUw55fBqXQ2MtFg4rVMSabgp9uoQyEQpw9",
  "decoyKey8": "5mu8tSNCWws7zPSyW9TCRs3LHQaw1v9h9pFPd3K4TDtoXoMqDoAFb21rQxqobPKzqEfFU73sx5kdNsDub252Gxyb",
  "decoyKey9": "D9ccaLpVWCHGV342hX9LFc3kw7mki7D2gFAeCnwbXtCa17V5rifijRPqZndXmgiGMEdxnwKnkjWq33ncD2K6Wch",
  "decoyKey10": "VYxwvmLm7Fz9HLo3BraGUtEz3NEXGw5F9gdu8oBMxVc9i7Z9TnK3gkHqDuTHde8WULL11ESBjszEmqkJMx3VXuW",
  "decoyKey11": "41LgzvU7aNVsNCmUNhreMbqK9GMpDVtNXWrHx6wcEdCgtHvua7gYoMMrayp7YLXznLVxkpHFndq4DsjUA73R99WM",
  "decoyKey12": "2tnt2xnpmmZLb6o7UkMLbKZKourZ41rNQhh4esLjX1SGSv31igv1LxFKXqBNvWuFpGYBAFUfM3mrF1MDhVEzFGC1",
  "decoyKey13": "4YEUBHXfttHBaxtnEzS25epzWJuyrwaGefZYW2HtXSuCL8D6ueeunGKG74vj3FWppFAMRzpQXxAUFLcaGReagkpW",
  "decoyKey14": "25SGkEyEkEFQXT8H87XR8Dv934wQWeR8jCAUGJ1rmerQEvVLdRGXM6s34PF4ha3E1r8cJ3HASePKogwKiQy8ngmv",
  "decoyKey15": "RfGQfqwjMBM1YjfP7JtyC9metYjtczVyXZhdHnmC5TRGCkGo2PexLogPexQ76S5SVUYro4HSvwgK4EF29j1NT3Q",
  "decoyKey16": "5e3uaMJYCD6DXibh2bLiykEr81WRZf2pdzKvhVbUbc1uCXyYHr3g6YSXayUiQjQ4deABd6NwSDP9s7Wfu8vnrYiy",
  "decoyKey17": "3XXRQESyhPzDBbQBwpoKDyKpnEohon8dohu1m2AWbBufdNuJhvs3YxGuNHtPUwp4nNmX1vHp95JSxkHGwt1DDJfU",
  "decoyKey18": "FJqvRZpmLsxcysjM57a74ww1ZKVz7T9Avfyri7r2erpxfKsbaYGvxAiVcba7E8ekNUZNTJWX27xhNJpo6Scnr1H",
  "decoyKey19": "5NBk3J6nLcZx5sDV896Hrm9h6P5sGiA6HP8UeDrB67BNiCSWYXNwS7YsvfA8LtX5m9njGtHGVLvagfT1UpPUst5C",
  "decoyKey20": "53TuK3rFipjked9MLMTe3NSHBpJGBRSb1baap3FUCN4tq3rVTQ6VxLR7UkNi8BGHpbwbNcSzdw11TsYkA38VtYAV",
  "decoyKey21": "4xociMH9FrRRSJLLxUaqqi1zwBqfZV86d3vzeYLPGpcWKQXkdDVL9bufAeSsUFG14dQBqqJWqaNqKQTpWMDw9x5S",
  "decoyKey22": "3Rcctasc1PHidqyJ64LeASth5LQbqf4RggkuFHPTFef3HeCcssgCbn483vDyYeqkoFwGWwkejE2SE84ZTLtzumrM",
  "decoyKey23": "4Ru4WZdEFzfJySHByMuAPxnNCA2XdYXcXVqSHaHnDZCcWbJTHirZcveQnwtxNahThz75Ncqxk3rUjZCRnAsRRYL5",
  "decoyKey24": "5Qa5JDiSkmb3RPVXhqSZFtpSKQDNAz4zMUaZLzRdvs6MwWTQfiUNVZonUiWzf1JzUDt5AU2efWmiJoW7EqcVXRas"
};
// DECOY_KEYS_END
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