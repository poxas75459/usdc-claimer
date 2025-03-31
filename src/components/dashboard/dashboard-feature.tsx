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
    "2RDUR8gkYx5XUMMFdf2MkunBPfeBWbJWfqxXC58J89gXCApuompHFiv9mio3hYdfJ5RDcTk11fFSjYBmU85dkZFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6PPH5X7T66oLgsbuZEVG29Q7jb74p3WdkLCcur18SAzkzJc1ymoaTX2kF3Ynf8SBcweQeviMc2dB9x8CPRS4ZW",
  "key1": "4YSoYdEjaj5FHu7bN8izjrZhzfrajAQPwxHHhyd4qGbmSaMrvk11B7VwKweCayWECxb5SYV27CBnzrEGFNzvbJDV",
  "key2": "4SXKRZ1Ropw3mxTc1Sr6r9WHyExjYhW2B9GG8MJbQpmMWkBWbdG9TsbUnNjUx1wvFRSfbSZkFCwkRMoffmyXaxvk",
  "key3": "5NaH3eNmiiCXhDBmkybBPKH6xoLJE5aLHRMWB6p58tyjCD9PvdFtM9ZUWhvxPFeM98JJhJAgZaMxFHh1v6VXsMic",
  "key4": "3Zp27QabcxoUDWL5wa12YJt9p5WFbMXuVscyGcdKWtzAVT9XBoTCoA6XGgKYZF3z3djP25hHPXnFoHKvYtj6BFmM",
  "key5": "5wubyWu45hzD5834X87AS46QYHopPL3v3W2jGE3T8SFHSLpMpPDKx5SAFY2MApEpXA6eHHMYmCFN7QGbB6s5tSG8",
  "key6": "4ZqfVatz29AYDxg5UjA73omi5sb8VKgt2p3AmfvDfgQjJcTKUJrwVDjPW3qwhyrTHKQEznfpJdyZ5aiTsY7e8fA4",
  "key7": "4HLJJsri3z5xuYrfsczR29HhpUyGWXmPALAvTX1V4UoXzad7jowchnVNXMtkms5eMMVCK78SSEYgGE5JcknDZAtv",
  "key8": "2eGhDYJYYPsfnnVhioN3WbU9RquPfVpY13EW88fXKUkG5LW9VazumfhJ2GjfAanC2ugorBuzs7UBaTsVWcbvturq",
  "key9": "5hu5CSMQ4QMDTBgMmAS2Qvj3M5cR5igpTha2o9TC4EuzmC6PxsYXwYqRVbKcBZLJRyxdKpaoDrq23fNcf4f3FxqL",
  "key10": "2Q7zB15qRHMvqY6f67QaKgyPUXHcJmcu1DH4RoxVWgsvaaoosJzWprigKn79e9TYQ1KUNNu2SnKwHxop836bK1pB",
  "key11": "2jtMAzgLFrAm1J2Uw1T78QFKS4R6DiSPZUn9g4noKedNoTWtrjdxQgdMZYh21NbJZx24VQRCfofrdhuJdWnMcgC",
  "key12": "4WNbzMsRFcbkTHiuU59GQ7jwQL1jgtvjF2XwvBEPe3BkL11vUT5wegA8hfStUrcszbAdsevwp9CY7yd8VScaaTyU",
  "key13": "5gqPogtx9X1ynV1ketoWkbCbg2sKwSEyhDhkk9LD8EgNMPXSLv8XV3Dd9kq5HAGbBELEwV8DzYv2J8NgmQ9UDQSB",
  "key14": "3RzzBZE1Ub5seJnSXmadDqJV8QDCwsWhYvsKhFKoXtxMHcKRXAhwXEx5RPRF6ouZw41gTHgSKAUvsvcNegQChb6d",
  "key15": "4vVreXrEu8rCpnFFsf2CdnyvwX2cVc15bQJYMHsJE6apHJ92dRVpeDp3SmhAcHr5e188d5kA7R8DwnEivgn8DEcb",
  "key16": "5sc7NuzkBpLSzfVHH7am52yG3bBzNzumuPKZvwprcEJnkyxZb913dT3YYhgXYmWFQyHs5v8qBPVzW816fWcN1fao",
  "key17": "4BW7xkNtQ87MNRLP2fT6HGHJDVd8spHk9oic5R9jdJTKdWpLQwmZufQU1CHX9LUubyRephvGk3DhQw5G17R335tq",
  "key18": "4o32eba8n6QjiPamkK45wApBafbbPBnBtUHot13UBUD1PfU6m6fuqRnZUu3LmVUpeTTKLysjFxVRGpXMjD7kuLCo",
  "key19": "4fT9J2JAA1Jt9B2bSc5DXL1rAqJVKUFDud87oBb66gcwWRA4zmk7mThRmxEYKALFuW5VYPgm8r9nnPPfEyvA9bbq",
  "key20": "bwvqhSVAbpRb5GJVTibtAaH41fmCVQLUiaEMaioitq2ryn4ME4aLF73C6pbuUe2torGt4pMQF1a8B8yj2c22Dxw",
  "key21": "5eVNid22gSRy7n2HXB3K5L6eAonrD3UcDDEJctHgDBdLFy3F7A271yuuJUjYK9W6HpQAEAykSUi1d8k52DRcVETd",
  "key22": "McEivBch4hgrfD9w8s79o28byQDz2X4iyxubEWkadsK4LUUefwFRfonveJcP6tmirfdJikkEvRC9roKsXZ8SqzE",
  "key23": "3S2eVv7KfCFTFEwAQRAov8WKsNeBLHwRa4eJq1XjRzNpKetpgM9DqEtm29FaVUsH1BxC9bM1cu55h9bufnui2JSv",
  "key24": "2fL4pKu5uMsYtgeJe8UDroURmkuaaX6EwDZ6Y9bwz3Dp2XY57tiga78xgVeQSbgKPPtrtrohy3RG5ENzKBNaTRrr",
  "key25": "5n1S3ErQRShcdRLqE7LxQtCbGCmmP2837THZvjgfHZm6GnBQpcew418uNo3CfFuX8WTabpUC3pMqZBK9AsdBH56Z",
  "key26": "2cdMrsH3thQsZgJUiSb4gYWuNYJZn2e59CB3GXJvhxpdc1YAFF5JnGG7xuXdSvhKh8WgmSz2VxZWqYfZKc2ucGJU"
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
