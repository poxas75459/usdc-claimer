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
    "2feyjnMbaWKYuH5ZBTa5ZyyPJ5PDoNKti5p34P8xjueoPpcDtnpWXw8scLX5P1NcC7s5i5FK6AgsFczZou1KRxYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQX3teEVC15tVyPc2FEsa7GnfGdF6vYMccsUmNnoXHdK47JXLodVBLNq3XcpxuL5cUcUrrjNquSBkQpaJ5Ngo54",
  "key1": "5bvmZArjQhKrfESbnWftsZisYxkvAXq3hePJiu1nRTPfNdCqyQExJAGosFCwoPbQnaswgEDLPnsn1qcW3B7L8n4V",
  "key2": "7gtWcaCycDf2qKv6eyrrtjMiAa1WjuD3mfiartAxe14orMAzoN7Fp36STxiuanrGyS21qQ4nnGH4xCknxygWt7t",
  "key3": "itJ7vJyke6ks5VTR7ivHt7rxi57wzsfCYhPUXjpAPn7EHYhf1hgyq7b5qbwSqfkG8Jpo79X8eG8hmyCJCM3vJWQ",
  "key4": "vvFdQke1ZekMPBSAaq72JtQgzbgWveNV31hW5yAkm9o9CC7mgXEHrBWzT9Eh4i6Vx9xkGR5ESe65mQSxqhQJ7Ag",
  "key5": "4uEmi9M8N28yALTrDa38mraBMZceTvDdxDBEfYtqRD2NdDryriMCSsRhT6rc6PjgUeK2UGePxW67Goguiis1zWvj",
  "key6": "2TzRAC7rNvGnQkNy89dd3LWyUJMzw87qEpPnB9dn19ECF1PphRpAWJZrxADWagSQAbgmd7fkNyuXAunNeFjVvx72",
  "key7": "37j8byyQBZN3MgwFukAVkDFi4hJaD1eL1YHoWJT6y723Ux6ngMQyKJTwu7sRCjFd1qAoaTrTgwUHkssz62fs6qbP",
  "key8": "4YW4VeNCExHAvkK6cRCFxtn3nJFZhFJRWn9FQkoyrPn6DowK6ZzbifS5zkea7WV4nQnM8WrjzjPQUiNkpW1o3kHk",
  "key9": "81kG32g7RfGBddt8PsenSW72opfPHE4YwPBa3A3JVAJjyQ16bGb5f1KSkANP6GgdFxBx7CAeBfhGV8dNWz47AsJ",
  "key10": "5pcHEVj8D8Za2VKh8h9PmahQK8384fKYr7E84XVUAuJcUnXCgHj1w6ZtgwV6wCsebfdKxq7DbhNNdCUV9Le1beyN",
  "key11": "HY1zPv3aUUhUn8g1f2eBoy6Wa93jsvLcgobx7xmWzVdZzEL1tzWzHYp85achvPeiRtQidyFiAHCgrRMnM5ETnbp",
  "key12": "5GujyCKpnV3AXw97C8dt3GkaQRV8yNzdMRny9rG3a8Xtk9kN9uMoti3FdGYuaQYrh78gvDPdKratJCwLRSkXdM9L",
  "key13": "3wyLgEAESBWZ7N2yE1jr1fhNBwTzz9SdLdwcckbJtZyV3y5hm6jZKjscQoZAhW3ywqyhZa42JT17iiTiudSiENHL",
  "key14": "43szc5KfRLy4XiNfVsqt6fQ9piq7NFwBrmMvyVVuYBvHKLaMShbKyXWEoE5oX29aBfZu98V3thFBg3pYZpKv1LwP",
  "key15": "8f31bgo4nE9LtKp2EXLSTH5V48nb5NtYRwmV7b1nL75dqF8HgJf7njAWGAWWkWKP3NWYeSnxrq2uUTGdFTPhRr2",
  "key16": "4m2QR2eXbLHZxaRftsyQbWpqnWMBfEFV811AXGFLXZgwDofKkiAzBPLap5Mt1VVTPDshjqzrfJ4dFfq6KbSMtU84",
  "key17": "5wxfus8cS6kgxiHVWbmxMwYP2vELDHMVdFrDDWe8H6N3pbQM97XjjftQnUdiGbfkrv2AnZHRKzpXEnfgAfY15zk2",
  "key18": "5SVQ3uDgMTM4GPgF5SwUAG4AXeueJJQZf58phkRi5LQGRtEpcHA67VQvw52ehxACTSLpcDKAt4X9sigmxYCqEBpS",
  "key19": "61wq48TnupHHJfCh3srHQYvP16LneK6qDxGBdz2M6DdYrW81W7dNmdZmuhRF2RQH2eUPmcYAv3N5sDreNzFgpYiQ",
  "key20": "5e7Mvh1wZmC3puLkxgdVDpVqo18V1RhGhubChzPe4dRMrLg289ubBN3ojKFJW2PKyLj1qDzUkFHTCuFo9CMu2bgw",
  "key21": "3uPvrodLfgDMgxUTjfUgJfbWhvtqNgmFqe9AKLBpoeW4fQqes2eko6tSay5qDdMXxsDKm3qzG5FtPuAPnFZm8vxH",
  "key22": "4TXPGy2Q4PDbXN229Tf29dyqdHK2aN5tSaESJVbCskQfMRKKwFVwQRXK81qrpWm6mEZ9UGKnim8TZeotdcr6sUrD",
  "key23": "25LyDPLCiFzXfVy62pVjhXce2qirm7rt7X21C1vL67kLioQrVnwpVeRBo949F5tu5hNua5Nh5oGDD1PGQ5QwUJ8V",
  "key24": "SbcLKmurwgYqWcn9MUnUkccoRqUqyHS2R8jsPmPk8X6so2syDwrCYr8B58hruYiwLfU2u13eFerRy2EdSFNLPLH",
  "key25": "3yrMgtksEWLGi4dGCxen1edvPcme7ymuHR3YGMjc4uUPtCynPA5QSZEvTTmynWrPbyvcuXZiYoBVaisDhLPoWjZV",
  "key26": "2zFXofeP4geHGvcxvw1ep9TgucjxXTN9rrVamsYxVginDqEqD6DDv6TAWJwwcPL8UwZobUiRUvJ2HNq8S5tk66zo",
  "key27": "5nn1RB2d3yHddpGQ2uGwg3wz5zgWqgGcQ8tgjzYVoYo57bRSNvZvdXM3CeetJw3Eng46BR75FvdR4hQEzSNyFcAp",
  "key28": "4UV7E2FYv4pFTk2Lfb1a1M5fZfGcwbUe79S9BDfGNyToUhbEGdJpX6k27wyuG1m9WnzFAy3hiZ49HtXFVVzotVxs"
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
