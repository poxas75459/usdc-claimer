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
    "4b8oZtGxvbqXGSRWy3nVHbCNsWjx4xRpkp7WaFC7cjNAiRGmLHuUjVTxbnDXbCgAwMLuK45ZvDRT11Dg1oeWCVgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRsDMJgtX9hM2q3XwXR93ZboAbn59bFVe9UTZy167mFwkftgNh3kjkJLDawea3UFw43dwCFknK58VgDyCYJKz19",
  "key1": "3Jjzc3st889ybs6xbfVkjT6dhz13yAjJtxR2h9BzMMWncYqN7AUERZgPToHXVZmCtru6275hejM8boYUz6tkphfY",
  "key2": "2N2ufc1hxB8rtRebD2LRMzZyX6Fg1xrXpc2TPg3LY76ef7uxNDeHBi95JUwcjTaWiZHYAosHCEe5LuTWGS1xuMhr",
  "key3": "3TKWCqxoRuNDX4AY7atzjVNjQEvdMhWDDDrsrAuEHvykdib1vNEdu4JpRcYRn39VDWFRk5kcqYg4J3B9VftSzSp",
  "key4": "5JQVzhJxzFd5oX1a1J1knXugeWst66ixVpSmNwRKFvKJY8tfsdHuLftmeJW61GohtkzjExt1cmFGMb9fPvvaegtE",
  "key5": "45Wx7c77Be7sLfazzJeLwS9diHQVRfFsFwyZeqgwErMAETRPT63jAetZxfMm2AryKGQCCLCV6Fptv9RMRZkyNDX9",
  "key6": "2oT3QhtGcLAhtPdoFQgudG1T84KSTs3UTfe5H9x8EawS6ZgxAzm2CMaCe8vfSBxKcdfi48QjhEzr49dAzhsUCDo",
  "key7": "2GPMmSm98TJubPfXYLjrmQFE51P5msSgpESRc1tYjJ3hxKpNyRRTtRKDADGFPcbYeQ7ChwbYUhairEetPBHdvYkT",
  "key8": "2Lx8EXkCY41bEFCaRqC7j14Ec9cdSdJe1C2XGnM6QMT6RZPcbHf2FFTz3hUBAJpdsehfpba92sbLhYYgQmhV6bhH",
  "key9": "4JMTg1StzfhegnKdBt6wS9n2hS1m89c1Pds5gt8msTTDcP4kBMUX6MwRjD6fK7JfkKCS185DKCftFX3GYuFP6CSU",
  "key10": "3w6UMe1bqMW8s36ZrhAgvr79zFaAbP4JGmpFQjvt8AFq6Wv9Yp2cidtUCfQ9aKCge5z8JwtSqWHFpUo2szLBAzkU",
  "key11": "5HpBhkQPVT88ZTdfvF824S17N8YGnuYTppvCWLy82m5h3K8AaY456piE9JrRqejd6uX71CoSoT2idi54pHewzXVU",
  "key12": "29E3Yjb9g7dRraQUdCjq1j7sbWoFsYkavWEWva6KLXF4xomfvuK2d9NtYhsehqJuDPoFg9kPdBd2CJFPm83ex3wu",
  "key13": "2JcsbK1qM6j4csgn7qugLiGBYzUSXtNrVNTVS8Y4uYHkR97xxdsjwbPf8LajnwedDtWTtQZ3C4tHgwH9v32VCNiN",
  "key14": "cLsL2mAWieiycQd7BfXGkZYAc9DgvKzWhPkCYB9CjCkKPpF2GW8Qoj2wsx1gNMMFBvZ288nZZHonpSxGpy7T4se",
  "key15": "2LsLN1VX6ABi999YXrRV8sT6NuUC32qgoVZVBs8dMYLRskyKcoekLJfMThFGt3GihMYeWwQtMU46qEBWiGumrWsF",
  "key16": "3RRoEokeQaCE2VJQ1P24CU6PapGd6W5zF1nXeDv5UsYwJTMSqKfn7cg8dvpk8pi45qvWB2gV7DDgpHpbmnr2WHn9",
  "key17": "5E9V18ANMw1kJk1bE1AAh2np3fWYj2YV5qisV5m5yBobh1HNCRZhDNsrAuMoHNY2EFPfdNRCJ4XgXgtwf27wsS7U",
  "key18": "tkiMvbkbCK62YhrT6xjR8pbf9UwnGSFsqPk3a5xgXSYDMyTUDidTqb2RxwcTuiQhSNasw47jdLAmu7wzi7dyBvh",
  "key19": "3GZBrK3WYaS9BRBy3udv2puZkMDtjzwb18vjGNnL5Yhvzj17jpFZXLbNBTZm6EEeH7P9kKKcU58vBsH5ZKNCS9k5",
  "key20": "22EbjqeGADpSwhj2UjCs3jy9AGjBjYCCUALng1LUTBc8u2hJrdK5Lhg34zNucyKXtYyrbtUrVMBFNoZ9xC5FiSHg",
  "key21": "3YKYMRg6VNf5K8pyoTnAYXdwadbg9k3kSmdqjZqvaZcetfpBHGdLiCRio1T3UrrB2XJFKDiX7yAbFwPGk4ZGAyHE",
  "key22": "f3jX5vTDDDzAs6Zb2D28m25afVDGD5yiG2qb8gNiuJb3LYQJpjhaX19Dz95PsY5DNwerbtdpZ1EXP23mDETSdH9",
  "key23": "iB8n4oKMYmQWGRX2CXdMwRroDi3rPF2XFkKVXEH67sZUUcuj2JK4Fj4UTNuh3enCzRv5J7wNcarmLm1H9N2udtE",
  "key24": "45vk1DPNrDcY4U9UrZdzXCXtNd3kHqYHUkRMEaojMoKSDnaXHY7EtnKXTrXMR2nox53fEk6wPWpj3ZmZouVFM1Zw",
  "key25": "45Dwsv71dg6x3ZXVtYwE33rGfm5BvGdAEFKMZ6B7mgcEjQhVD8Eppo2HX8NUc2bQuB6SQ3kqRUFodZ36YwbHkbab",
  "key26": "3pzwnQ9pZJZaU9KBZp9W4bQifdwfNFbUwiv9bsMyfJikXgyW9xjaVRgdcuC96pkjLsUCgJJvViKBfxSABGrgkafG"
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
