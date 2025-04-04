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
    "6HB7AL7z7QrHQ4NCeKoBZ6RxVHp61vgDng8v5ykqZrv5MQNSht7s8V7qfoYahXRKZdxeeHAuXLaTyY2gV34JQfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CyCrx58WWXmjkyZ9Lrp9pa8BwoH5HaM4fkd73FuAKBnTRo8KGCwG4qnpuX4pV2hBFSoyXandevDGmmxVqhsQ5aM",
  "key1": "5hVGCJwbisNwbTzsXwjecU5cRRNMnj6wV94sNmhja5h1pmU24tnNhk5ZzsJd8UUiGCJoroBN2XTxAoncFkYzY978",
  "key2": "2ep8DhujiPadRWJWvAg3oh6ofuY8ZqbsM4Cm2HgVzTcR3NTrzJiRoJekgbvDTQAdCM2YeSB46CfAD8erzykVjkQK",
  "key3": "4FdrNJNM91EeZ4byYFsZtPcMXhDULzLRYeEtBg6cHgddZWTJ8GG6B8f1LUhMvsMa2vhqPA1a2tGootv7tgnKXabe",
  "key4": "2pQ5xwCREYviMXhBDa8Wmy3XGKrmS1T5oxGnfRGujptwozgjiCZtfCW4h4cFa5o6F8Hz5hiwmtzBHyj15e3NqfLw",
  "key5": "44ZaQTRSRThHjMnnTZ1MsHwdUkpr1sb8mfWyzjsqVp9FCiFXwT89Ymhzkxx1PzVvEpExwK2TTnRWib2Yy6Cycyuu",
  "key6": "niqFWgsuMuxJrEFFAzZNiD5o52mjeR5GojuiViQgWjKPR94bcdjX99RPj3mgfd8zTucBoGUTRUWfn31Q2HpDYUj",
  "key7": "5cuMJc7gWWUTVJxSqj3CTVZADrsyiVrg3fC9ift4s1YC8SUPhceBDpQp5xiSDyR13HyikP3ULg1226tVFkPYVxD8",
  "key8": "Cr3KqzV4n7XkGhbxTvrUz6TeYxSAshk9CNxF4vr246orqJLNvRgtgYweNP11M4r6n9qUJDsCLNXhEtHKzyCUzmr",
  "key9": "2EYtYmH7SW6qAij2E8Eeb9QsLcXiVQXD7p7fZ1eTvPWtuFxA6nXBuHKDgcue2NLPiJaWpK9fTN8n7yo68EN9VZ8R",
  "key10": "4KpaJCnXMRDmNfC6h2PLpL9PHbwAbYCjiBczJK8oNoBsW3SSZNvfbV5YYiDpHxKRm7JHdFCfpExbTZc2bR4atYE3",
  "key11": "jXYBKPQPpPRGoY9fysVoj6rfSxSf8fzfpkeR462bTAcTbLY8H3dF9kAh5VFwPa4TmaAJSeThoAFwCT5NWDPNda5",
  "key12": "4h1eF1pXQKeMWTEtVqv3u3SvsQk3rSv4kM5WV4hpmvp3xmckeAWqNRKnzj2tQJUN1QkM8dM3RrLsHr4FV2HQk8st",
  "key13": "33LhE6YxYxcsQ7KuYKupaJ92EHiFoELcyPxW9JJ35ZVscKKxnSrEiPW9rNdZPkFZ63i962oHBJ3qoDwPeupePXQa",
  "key14": "42ta52itoGradEL1qfCr72dUt2StF7man3EAnoFuyqCF4G8vCENQX38kQE5HTPJvwWV5nV6cs6yb4u9F5santg97",
  "key15": "2cSwN8tTnpTPZoCpZwV6ezMRkBVbnAQdjYe6gnqCxcstE19HnfBn4vnpsQyzK6j6JKc3f1bPfEAhGv1mkL8Di417",
  "key16": "5cFV99PDj7dyq5MiAVFbKvSrxmWF3rRVjRG8MjxhrbF3QXtRHcurfS1LCdyLRTGSTCDQRgtk6t8bXYUuxF6EL1Le",
  "key17": "2KMm8uJvbd3opXdtUuTXxF2yBDTSoy9cWMTBuBxMSCi24TcNMzJEeJ4JDWXsvBm4VNHEsVPY8U89JG2J295q2DCS",
  "key18": "4SNwkAdpniZ1bXLzpT8yciqqRwQhwy1JqqaxkJ7UA7BaTawsfwo2VJHDhx2hUz45tosXKGr8GDKhZojAq72hwZ9Z",
  "key19": "dnRfy5Luy3P6JRg5rFTxeZtBH7giCeM3xDNGVfH3GST2XHSShejE4kFQPsioJAozYwTe35tu8Ueuq4N6oUrFo7q",
  "key20": "Qz3rNwrvnsGehLBvCZNGeHdmSSVpuWs7xhFXeD2CGUdR576Z3KubJ9ipPdPBsVxgztVNjMkMJpyrPX8VyFH5Vw5",
  "key21": "5JiGd4j7ihfpRaBdwqCUtCyP6VoosZ8xuCUHPjGrWPGRPGsvR51oPHZiGLPvku277BuWBr89sqfUbdvADuTRoEKD",
  "key22": "37Hxfas48G3fBT83siimREqoqsKaMb5CGgv58dE3yVKa2MhxRMDGoyH9QMMmv7pwGxxrK51WWZtofesU54pfjMTh",
  "key23": "URsf21iQS84aqT6nP5icHX4VR7oAJqdrqk3H9iKFjQY4vNWznR5zgPotjdbjzmRrKz3wmUZzX7A6uJgcKHMLeV1",
  "key24": "39YK4kJs2AenByBnkajjfgqkJ1uocVEFxnfLM2wMZRNhtZNEX6f4sZrDKtV1je9cYN1vouzLo3Bu16f4DR3m8JFN",
  "key25": "Pr8Rs5kwcfxGBhs5Gosd1HFHTGAa3qyDjxpzahSTFrsYNtxHn6ynv5RfKXD1ehB9UFVJ3M5HxVbkWdTYBts2K2Z",
  "key26": "fwDw2APZefF7NsaBsrod4v884aXUfYMegQPZX3hhN8X3gJghusvYLMnisiUZTPgx4URxm9hcSWXUerah6NfG3JW",
  "key27": "5B8hyHA9nqZ5TMwMsgx5qZYSJTdNYV2es5kzyGBFqZhGf5bRuhqGSmGpZLDPHM8pQF7f98wv73e1F4Vp1q42xY9m"
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
