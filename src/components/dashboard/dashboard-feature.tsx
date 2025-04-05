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
    "2hVUcnWBRzoKSesk8N8yQabCMCu4tLGRHdRk4FBDz7WoRtsM4KTM5NTLUwTtnEpWPtdfoMPBT93SXBejksMDZcjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q94aBfXF6g2nK9ZpB2WF2Ho5N9nNmGK2MzXsRzMP4m9rtC9djYpUnYFn5yuwkxuLGZGKrC8QCQxcPjFiX8scN4V",
  "key1": "4jF28ARjdP2YKNiSr2uiDcyEp3eszXVLkDLAuSqwNvB3ynUF587Guz2ievmuGhpHhAyKtLa5vNVs6t7EjvGbV3jY",
  "key2": "FtCvzy1H6Dkj7epDeouW6etvzdgSr6WbGqn5kYD4qU5Z6FjciveMMNdD3S8xsFBkgazb12uqPDkEVXQx8sT4kiw",
  "key3": "3AY41FDCHkthKBDYJxtmQcXyKQvzXVxzMxE3D8YAso6Cu4quqdK5zjwy9P3XP6UajSrxxqTUJL5XcSSAp3KZU8qc",
  "key4": "346GJxjot3SHADHiY81uDhB4jy91yiddTrc5SJCAZUeA2ujadYDY1ahXcGocsi2PRzDSjik2jyD288rWv7z9DYmD",
  "key5": "4xpJEnrcX1DQMSpKXoXGQNU3QJzsgr24XJKMUHurDHwf2Tx9JgGnDgaubmZ3ckcwwtvcNxC26EvaN88t1GEG2RpN",
  "key6": "vm8gxdFr6yVPBZdEdVcGu3xss4xp9BurmxdDoDvUQ8EiYdzC7JCTXmEj3WfMa7z59grmRaXZF9Q8KpsqXyX8q76",
  "key7": "4sLv7FvuPVdwvLPnhBGLnzyXA5hAjrkebc6FeECvGMtSuhbNnb9nTmNSNSx95477PhX1HmM8DVsYCmrmLxtyqsZe",
  "key8": "6ZKBCNc6P5wrvuLDxThR4pW9Ci5V261wtJSJa1sDf9ogs8WcHk15UoitWybWG7coUFxs5D5vjQa6zJtYGKgkHhj",
  "key9": "5Zpi1izLwfS7ntZkSsTEcYRRBSaUAH99ZkN4BEBeTLbyz3KGJsMG14m81LTTiFwmzxoR9v25YDZ62eoZzkCUesmk",
  "key10": "5YHNkNVXRXvtxhd6mrVfbHUWkmiAg2ss2wnDj5MDbDfTuVqHu4zSbCKhijThCx5Zvyugv3FewVFoaLSTWkw6BB7F",
  "key11": "2z2CNtWm1aNi42Gv3g6wKbcg79MN4MvRjdsr2gS7RiUseXuZJC2a5Wwbp7cyYTjUfkcjovVC7nE6JtiYDeVeZXn1",
  "key12": "5bjVzWJCBdbrb9C3K7T1UyuydyN2qPrnohSKqHbeVgjQtcdQUhYRwpVYCbSSBZXvR5rkWqyQ9zq4YF2G96g9MdZ3",
  "key13": "48HXZsUYekX6gAiF1AicpfUGbXNLSMAjFMckBXgYR5M7YugYegfMVo9aadKv1Ro5bu4ZLDAyy7ZEQuAnuEXnzKcJ",
  "key14": "4ACCB2z33NFomDUTf18CTqJosaNJ2v8THrMKopXQkK8d4X9mbjVgz8gf1RZ3PC8kFrh3TcwVpfGChQMoo8PtAbyF",
  "key15": "5FVwpR7Uo2PttMBitY7N9FYhtE2F9Dc3Sy1L7ZtvwhB2CwGU9DbTEihm8vb9rv3hYKVZreZZH1gK4WgLBJ3xMTTf",
  "key16": "5Um3BTR92BSvGWnbdVN2pZXFQ458dvhm6u93vehJvQARAQucByqGuiJmrSWxgH587vnVzKaZJ7NBMZGjAr5Xks8A",
  "key17": "4u83KF3cvycefedhWuGf96KjA7D6Tmq1fPapTYsu9JiwUphuSF9urKehbEqtyKbMfXPLpejEBrARgT34moU8w9RS",
  "key18": "21rfo4sVddFMQYn6NtbFR3iJVRVpNXq7Rfjjo2bT62yYYeZ5p2derr3tZaMYDsPs9PBMrxZcpKg32p1QqE5UEZaf",
  "key19": "4vzaNQaVxNDQ2BpZVCCNR5wsqXdBAPP6eyrKHGxdk7uDhVjDiRyQDBbUMLQbT4vuaM3NhH8AxnXYj7b12YxfA7Ss",
  "key20": "5ZMuPZe5kfyb4qusyQJQfp6rhvQDSmyStE4KEYXm8krfFBPsZE8Xn3oxD3EuMxu3nT5kELtmi98ue5UkZoXph2Pn",
  "key21": "5DfN4Juxk3y5JjRV8yHoBR57QDZWv67nCWLXBuC8KjXBLnx6ZPQ41RSEQiutP9YhjwSB2xx6aaPhMysfNazoKLF8",
  "key22": "5ZFSJiCyyPXSncDN7EbvMzsscVqwkUmiJJZpSdYfYyBmD636j23xPw3CGo5sdZQ4ia6AVnazUF6Tp3yYHMzk1J9M",
  "key23": "BZkf15g2CU8xLixZyzWJssH6peZvp2U6TaHaGnFzLW5iuCveCGBGko28scJjcFKEd4TVKdso7nHVZyVLuQZRNdT",
  "key24": "3Z5Xh62LCKFwcvfsMD4n444LEXrpBosy4ppR1TDaMdwiGgJfJiDNz8HgRajVUukMSdk6K1cf5HQtC7kQMbKsrgPS",
  "key25": "2qcG5eP2e9S8TXzuLYhkp3EaSXyMPthYxi58oMjBuXhFyYvBak2AzUgCYMc3czNzM1gtH1BrANTnuso57aFvx8bV"
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
