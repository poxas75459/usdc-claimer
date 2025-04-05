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
    "yi852KrC2ZYkppjL6Px7TXcFUsyidTvfWKJPzB5XA9VfkA2fq8tXtZu6jE6YZPqPN6FCStY2CzmcWGDDDh28dsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48qRqvphiRBgLTp7vFzNSN3LyRmK2WixkqTdmwUNinFPvvUgkNpZao3Uj6QcQon1gPbaefqpm5JL7AxLPTfQmHLD",
  "key1": "WL9evVxAjabQoUnJPsaJi1hYFjgdLm2Vc6AV6LxVTzXNYj8ryryVaJ8QB6BL7wxSoL6fTGj4nkaeT5wyZyV3eLe",
  "key2": "546c9Bnz1An979dFEqf5aJWdiU4ssjHZ88awNmxLDSQ7sfDRBvdo6ijFXEbDY2YfnKqFLBJRPz43wDy54J7xsV1H",
  "key3": "3yh8MnGHoyTB6433TujB2Jh7JN7zNU3Ky6Xxz4FzgUQ9NM5XZMdjZhCWRUawTXeApKVHHYEHa2kFq2xbgR6Uh9EP",
  "key4": "4CXHhpsb36jzKKzmaNNMPseiRqPjcnZ7EgbuCEPMmbWkuifKb2qLPL2fRqd4gabDtviKEbtPXMK9AZHUQ22t6SDn",
  "key5": "51tFnN2reLexJkbq4GMvjxbqCUW1iSq8p9Ch6ovzdWWrDcZDphk3uX1EaCr1GqyTLNoUhDsqKooRzRHPBjZVTUQn",
  "key6": "bMVUPPGXbvS74yJXzeu8aXiKyA7KDUa77gmBVjYV1i9xZk5hk3V8digsER2eV2bgpYTqhbD1PDS5Cyd1BnQkGNk",
  "key7": "5cxAQx3H68bW465weCju8vnWnUR3ci4X6Uypfq79x3aGymmVATHuCDgStnSC2BmMiosaCRvwTQd93twQkGnX8UzA",
  "key8": "3uDzUXogGk362kfDDUEHYQgzjQYu2qKsoDJC1tEsMzNnwehLd1mhHXkcir7JrUMtkB1sVfDfGbQy5RXLFvQ81KGX",
  "key9": "3khprWQEq2hJcKfbCzRV2VeN81GmKTgBoDHQRodSV6SwX2HMhFLeE6diRwABqsBpEQALdScqBTwUVuVwvkaY22Lh",
  "key10": "2fL9EN9VUA3KxgaSEiP3RouRAwBc8DJkRygCGy5KgdNtePXoVBjFXs9uvy86dhdX3e8URQyKzabRNSQtLDQX6D6w",
  "key11": "wijk8cmapzQg9FYMwajkMQvkoi7rYXdrV3cP2CYNWRodEDZ3P4Z6tKxbcR4UWjjZRCVKs1GBYJxV3Y5vWtoaNzZ",
  "key12": "23q5A9uThmPatyoYGc7Mg8Ga94Vi7RxkCSMNhkbpnKP1ndeEzqLVkgHaPnFWKEJytYYdXz9UofzCcyhQQKGUAzUH",
  "key13": "4XXc2VEb9wgjq4zCCRQWRMmJhT7mCXc26fdLqG6DhgoFu7W4XmbX2V9yf9UjT8VUKYQiLrNm14vRSsFoadAT15Ta",
  "key14": "iDuZyE7ACcfM63hAmJ9fu4oN7MbnvetDJY5zumhpYJmQB8Fsh8YFGNJtBvpdYWRFSPqXvzkXcAviUwTjfvHe5w5",
  "key15": "5ynefc8WRTVQouz1knKUBzNNNKuZfSCiUdk23DzcEctRzZtbh5qrq4mXu5SBjxZ3TMjuJcKxVQSouzWLZ7Ud1rdP",
  "key16": "4W2Bd1AVuZUqHRBGXLcvMRsnc4q8w22h3ppPDV1tZzmvwontSTGTMfSPkpGpBuxFpQDBUk5vLjReFQas5qxGbAMP",
  "key17": "3wJtf2mJKrabgQJMED114ZzhHiftoCc3VLAid4UipmkPqHvoYxguNyVmtqLZi1rbhEEaWyofao1fZd4KB7uwVVZJ",
  "key18": "2dh6Njgb1TUGGLginAQDjzxugbTvxKxsphjWmbrhuzRJ4xXNfC5BvtNVEJcL9GfcVxH9Yb4M3gkawajrow92Rpbf",
  "key19": "3EwrA7UwW58kiYSdUabh1XNBygPwHKDGBjitCTunQ6bibaHg5fhYgWHfFm6DcFrNrbEdLQi5qKGgf9fU8B1GBYmA",
  "key20": "26XawPteFtRWRJMdX9zRJk3ksFWUbdsGMJpitLGtKwmczERjJJV9YrtbcyswkereThKyPZgx6rQDURqS4YuWBM6h",
  "key21": "2bMR7hHVsLC9aMj4urE8Srq8d4qSaaGvFTQFV1wtedGFDAZhiVEK7By237kcAsFyFdKrGoUtVtiHbDSUGr6A5eS9",
  "key22": "678hs7vJTJWHNYxjb424jBB3dK3eCgJpEyRjNTyMnC4HbYNCGmfjCqPHRXS2YV6dP9pTzVXJhXLpmLKhAHGdtPt7",
  "key23": "YEjZhS3EZap7gGyo6aXkthtx1YnUyuRycgHptDj4iEHAWmRkKwyc9Z4f4gN4cTgnz31Aw5bpGrcmtUJJkveAuKg",
  "key24": "4YgVT5zUpZiFBrUSM8LWj57nZ8VUZKif7WA2b3EBG1yyoRVBLtSQ6E2izT9Vj8gUvkAdvi3nQFHsndzrDezeoRzy",
  "key25": "2USY9BMLEyADdBbAowmX8Qfq7P8oFPoDFyJxn5E5Fb2EnocSAdLed2acNEtiK5ysSw6EiYRCR7xy899YDqPhh47p",
  "key26": "2bKeno4ZFWtDrtzn99MexkEnE2ji3XKs7UhQD7N3PEnmkpW45bStpynoKS9uNhCEaw1GjW97PDAb9bxsQi7dWmvr",
  "key27": "2XZ7kP2CoPp3PPiGucJ29u5J2y42nmsaMknxcWuBT88yu33KFtyK8KWw9fChWsSC683eQTkErr1N8fFNzzZkkRRn",
  "key28": "2ZbvN6AG9mAvAeKa5knGiUTo8C1wzWzqjYXWX5wGt4hnuo1wvJHnFGy2GNifmDJ4ymBn63J4ztGZD4GWhUvr5Dgi",
  "key29": "4hYc2NdgUt2hjpBZyhJAfHQBW3Pydt5wEd2Lnq9Bh2nTFjNd4dRafmJ24kSTKv45MQASzB288RsojLRiz9ZyzD3G",
  "key30": "wnCr4VaEMbTMdESjDaxLdwfmcabS6tYX2firyvuBEjoa6fawUfMLHhrGr2Ks7tiDwVdwkhDDCcqnSHZGgpVVm4A",
  "key31": "5wrJxuWmQpViG9wEQ2HfqZCDworvam8ELT6V8RezP6wZeMKuzvZUQkkSFMsCixFLNvsss4vhBQb2rv2FoCWoMwAj",
  "key32": "9jVwNPejmnEvfArwuvAgNiJsu3jxZt9kqzSSXzUyLCTFRNi6RS5jzQR32JHjUeCHL6oaKrtDBQRKZ7SANxFW44L",
  "key33": "4FiMcRxFuG7c1u1fKDkkw8t8G2CdntN5sCZnA1Q4RZDhdRXc4oUpM1UNLjLCiBLxWFHYW5L57YPGdMVDDwaVrdM4",
  "key34": "5EHSVrAGzFy6MakLW8Nb1Bv4Gqa8DHueyjU7Vjhh1rG1YTwh8ntt47YTYYFydzm9Cr3C3HA13siUmPo1AutfgYmx",
  "key35": "3heiovyGvfcYwJJtwN4Q1V7TJ8wUBSze1X173rXaBmXX4zBmvcj1JZ4Vt12aAGmrMEJasLUVqkiZtULj2Q9gne7Z",
  "key36": "3yoQ3JjhVoH4PgtAi35hXppzr8PV8krRPBToBLSayym4k5fwkeb2N4A4HqnHB5PjsULgCqoayvPMYLKFDXSe2GzH",
  "key37": "4zquWAUgk6wfFxJa56g4RMXF8fPeh76ueBmuaPxtUDUKuPTAVShZhXB3jn7gAzZBva2uiZredGx4Q7Ct8RrmDmVz",
  "key38": "5BetHBr4ektyWC3vYR9Ju7vYdaefQjnGcGCRD9GbK4ku2jqyiDaSM1CnihXnHRRdpzXGZF56NaYX9qrdGjAuHK3T",
  "key39": "44khE569pyk6ofrFMtmVnL1L9sht86SNZC7vHuQ3tWk4EnmuK3yK5oCv5h5yEbt2FBFHnqHj8FPrfXz8e2EbqRnp",
  "key40": "4XBapoeTbdgwnYdZnyQe5hkqhBChxeJB54JZuiKYnB3mRB1r6skGoL3zs2M664P5CEKeBT5bquaQymB9bnmsXqZb",
  "key41": "3uQExsEvxZACh774gUaTaAf6YquLajYTYSNu3wWVqN1R34ZWhfvbPQNTc4bkCs6EmPkk5fynxqHJufom24huPDtW",
  "key42": "4CBqbTPdhG8xFha8VzwWkqGA1hXsWaBHoEXeUpf9h6NXcgCzNLXaZN4B1bGM8VyCC7A7SyNXZddm91ERS927LLuS",
  "key43": "3VfymFYgtRbMkLAvDkhwbUtrsBm1ZBhvKAfY3rvi3Dwe43BRKjeg8ekzi7nr9yXwyTtc5o4U5XJwtsrNJW29R2ns",
  "key44": "211gEN7b312Xsi5KPRX3qrahrED36tfwbdrKA3Ura7NJyKPKHv5hXBpwLHfDKrcsTHsNPi6nBTFSFvyN4tU16n5M",
  "key45": "2CQWsMhrzKNp7h9kaTpGF4SsghkDwCJC3WoD8u8XAH76ff5DdhchdNPo6dTV17pfWqRR2CpkpQUT5VgdVt1D8wN5",
  "key46": "5riTJ5bFt6HY5qx5CW7g57ewPfQKVAunZTsVvJoH6BPTeCbyEdGEArmtmgrjgGv4DpPM5bmyCsnRjkedGv676qu1",
  "key47": "5ruSAW1FoU2W17mRaWJeaRL6jMjKX8ds7dYk1N5s4nUxVozHcWRSyafumzjtPvhSptd6dJs1CxSMDWteghyJCNBZ"
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
