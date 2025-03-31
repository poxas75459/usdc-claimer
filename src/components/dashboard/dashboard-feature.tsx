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
    "4Hu9RwGe7scBrBcp7dkjZazZDE8dHE3zUPanRgzPCUGFWNBhkietXVTZKfz38RYq6ipTFy83HNyoZwL2mbQdrNVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F2wBzGtGYbvh3EJsEJjjMy8ELyF6ESLygJkjhQ9fWm14Gw6UeMgrLWJjwUSrdVmPG8ofQv8DZMsxrqEG7dQ3opH",
  "key1": "4qdaSeSGRBsVPRopE7hCBvMAffgAWg32Zuimeegb1jKNp6EkdKDQbKbf4v27UvQwwE5Kd1Eq7T7AyxTQLMzpyBRa",
  "key2": "5GChio3dBdGM6Xmv6FrBtQU52fBVEKELvbguUP2QEf5ad59UDpFz6ek58hef1dkcRmfYa7E2weyTevSPdtsv4e5m",
  "key3": "5e88hN7yz3CvNRnRCc9brGBzEyWvM5jsnxo9metF4TSxB1LrUEmJ1KMvQvYDowmAWMq8jwcWYYXPYZy1mHiJZvRZ",
  "key4": "3Sz6k9a7kCviSkMkpwb8W7XcvYHxuErCmJ2GsgtCmd9eDadmLFaztgQiwvybFDhZZ5oaT67JMpwm8fyJMEZhLWvo",
  "key5": "5qH29NXC7UYLPtL7JMcEiUFRzoKMQLrAGnVoyH94ve7NUjz72Y87FsXn1LY3vrPzV6KSeTYsvyxGFKoGN8fwPwxM",
  "key6": "4G73bzEvRx9AS8kSstvPQLMkmBV5JFKtDgCoqeFPZLGt33FZPNZTRBAH5tLeyB9V4vwEqjnb2TC86jLLtYARDjhT",
  "key7": "sLRN3XnBZkW7fA6Mu3xrzdVzmfFjF2yZS6TLpRKojk2FYa3RgmHs8amfTp95q7oM9d4EzymagAC3Q4D3X8fzBAY",
  "key8": "57Mrj7ySrrsPRFG3kDbioWpkgjWPmEZGhEdFmFmK7ocCZLN3JcdFANk6yL63CEMuXPbcYhSj62wfjZFDL1Gsx9rk",
  "key9": "3ts6vCkBAo6DsWaTz3Dp57Mc45KjBUAB7wjxwNa5KApfBLaTK7r9L316qjr4bqDG862ksszg9Ftqrxebsw2Wa4F5",
  "key10": "47EN1VnugSSHwom1Phxhv66iPZDJKCPkpyJt2MusPAZ8pwFHmXmnrp24VpkgoCmYVcFUW1Ju1PiR1h588Ne2KusY",
  "key11": "4kvLNmbZHAcBE1CR4UiY6BX4rHBZ6FgLoJM1Jf9eenzkCBguqjyDaKZuyCinCfmro991XMgFE2VJmTC7bvpnzBvm",
  "key12": "5u4bWXWqnxVNmeyQzm5hsCiqWLXTUbQGngQKMn29ePmt5oCbxzWFCEy31sGMFSpL6upfSqKK79qDVRwLskezSe7b",
  "key13": "3x3xbLnbKc1pyYViTEsNwb4pbEn62LiP3VadVgx3UfBJuqxFpwfwwnvJh5eQHL84Sfmfz75X4WxPjBR9tu7cGv1x",
  "key14": "4QTHTeuwEVVQP6x5QGTQfmx7fsAsFr9XTiwry9r26akDEyANCSvtrYRKUQFy8JWWRhPpitihCFK3GQzPT1pfwbUJ",
  "key15": "5MNJzAnuje2EtG5HA7RzTzBKXA11fQNtK4SJeTc9Ttcck5v7CBNTkPByv2auTLXv2YXgcjmsyER9vx1ZoSEsHaHf",
  "key16": "GNXTHedZNMrKigsc6JCcjwJdPiocJaYcKXWs9fEKsiiR3d4cDCkLoJefavtCJ2atrcmA4ibYV64UozvtQpT2DER",
  "key17": "4BKP4Xg2LWh99sLQT6gD4iDneUo1mKHx9cXbg7X1fJuPeu8TnwFRM3Tppj5sfbLyt2avRVGNLXFvkNYV7rJcQgQG",
  "key18": "2Ji5Prpv5EnSMFq2qA7eZC336tzCJkzLJzQ2U9ePCXVNHN4tX33oMY4MRTeo41aeBcBFamAC8uTKSMScfMDWP8qn",
  "key19": "qbTszWP4nj6HZfqeTPbcMSMzCSiJQKaH5C7bUYL8mxYGWrxTBsupngVDqpp2Mt17Lqgh8jxENWv6QNo5Cg6DaiY",
  "key20": "Qn5LpVwcC9dtftimBDrTcQ2471hkAeLmNSRRvigrVY86k2j4jQ62ZyzUUZ9FPyqbeoariiptmsHUk7JdKxRa5wh",
  "key21": "pCFqs57MMKfU8V2i7UEFHo7hMuAXUqa5su7BPqAcW4y81VgwtpvSv13qfuoGeTG7jwJKzHJZ79sPSCFcn2Ejxnv",
  "key22": "2rE3eoUuGv6XUuEDHkHB9c79QmoKpvuLXmCp5QWwUr742zEoapUQaxJ8iKdgPfjKqpTWfaCn4qj7Uq3pAsmtpvao",
  "key23": "22vnUnJSbP5sVUdyA598tGaJXVYCeMqQxzYBHDgPsFVVB2HpQb1ZoPWBKDAhxZMXxxLe93C1TSzpDywaZhick4F7",
  "key24": "2ZoRoNoj3hR5QFonxSDhb4mpuZQoRWKVE978fR8W9RFxoFp9t8nPhiPaAyhDQ4KgT5u7Do52aPE7vXwKVteUVxC9",
  "key25": "2VgTU6zri8PqzxZgsk3JLj25jpCfiCukAk8rWV8r21bshzXML7cz6373xazB7AEcPurnEupB8oGtqXKQxnPLqVhg",
  "key26": "BbVV1UCftc7JcryqZxFgYguh5uo4sYdh8HjGg1Cj4A5Uwp8Fkq5T54dwokTNwiUbzoVHb7uCz4M7dxp1vnEPMdC",
  "key27": "FAFmXGVdqf3bjrT51czpakj5NT7rpyf7DAEoGvi7rZUBxxq3fbkJ6SoV2PxoE6stbZs56ydrgCvKg9aVqi9JzEv",
  "key28": "63krwuwT7wM3PuLyGQQwJoSoFqkFkF1L367rLkmKdBgnoFeyqpN52T2dGD6UmBD6gJM8vwGzW1JJVuzvSKXZBuYh",
  "key29": "59eLAGo77rdMU5kuFUGUPZgQUS9e1EXswKpzV6kL4cwYxQVtGLAX55dezWfYUdPXT5dYL1pBHqfEZuKVBvKizSMe",
  "key30": "4rBBbrkHkRQwe212ogA7Gf4R238c4NDwQsmNtua1A4ax24zrzZJnF4CCVWpq4vfMRnbstA1jiuYT2NM7pPWipmpK",
  "key31": "4YAR2a9v49GCzE4B5ziY3y8xLW9LTxVMi9bkS7nZAgHj5Y2YdHEVAdsZFXYfbJz3H1EoGkvTZ14gkitXzqNL7Swp",
  "key32": "uB7YoB7gjhmb2GppRrB1fnCXuM4VwMUC2V1dtiF8KNsEBQxPnwbn8PGLAhpNhMBdfH3aiJi1RtFNoZ6BsLc13BM"
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
