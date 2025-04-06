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
    "3N9CX4UNT8iYssCh5yc8ibkEmoKm5heg8hnd1muqbS8R9EZVEfvdifE1FZou46SkE5SAxiMW8rKweQh919Uz98T3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pEwp4JSHpVoTDpsvsyBpTVR1DLpEzueZYgNTnBpmxH1fHunTvaDd4xNisEtbdZY2cgpddTLjJtqVARSQ91fY3Ew",
  "key1": "4w9Ve4iddBqnDgjkJGWdrvjxTqbZVoY4b3tpzFPEFdYSS7KnakWyLZXFCkxSsid2xVtdq8jCVcgbnMyjvKBJxC7e",
  "key2": "3moUonphEbHo5M9inp39uo3FXA7u5cxwMc4rY2HcdNUAwUPyKxxdQtCShcEFuGCfKcrLn7diBJp2VXHkp8cE1KvD",
  "key3": "5QuqxkY8AyJN8kSyWENKtcYXUEMTHCs1qVnyHoZTyo5R1mez5tQ1xSZJtD8Tvfeo6Pgw8z4Bbtrt8HtU8VpnWhRi",
  "key4": "41cXMusSmBe1Xizi6BWUQQq3HdywnGceY4XEm9SMi4oeib3sPv3QKR61DMHLGBuYSJMSGBpwQcLVg1LVd4im1o4x",
  "key5": "65Ut7fgXNYCxrfD7GCJmbmgJEoCGSV9qdscU1QG5AgCMBzZKqSrMApwK25kNL4C7PX3RoerQg51NJzXxb3rPoyDS",
  "key6": "jUbpDiG5NPS2ycAkgJN3fG4GGadLhvyzxAU1SqWAtNnq4eBDhE7cHYGpvXzA32pF5Com8bGrLwMKt34sSttzvme",
  "key7": "34jWw1GhMyXLvd2V6vCNx6iEFz2ciMsBTnoo62tf4qwNkUeQnctEePq6n44ByNtwWADtKy8RCEtABhxTEANkq1yG",
  "key8": "5TSKAwWFGVEGTcybapa9C9Tgm2z8zNCjrMtoeEWAkh6217So53BWVZe7F3dokTaVmrZ6PCZNEN8GQW8jtSU3gmxu",
  "key9": "67BU4xcCPRWtoPLJupUtj5EGsrCG7WmykkLuR4HhpgGFRDBBzxtujtAaVoD3NTLBkQkeoF6jwuWZw5AWULW9X2J5",
  "key10": "5BQ1vv1r6g5J3GjQyk25hbfiGHBVuvZtz3R3Gek9SwasKHmgoXyDxg6V9JxefYQnsgZnuKcmAfPJvgLFBWvCPeTn",
  "key11": "3x3mvVqUbpnLdjFqRHPoU2mC8zHEyEYptuRZ8LHxBLVdVFKV24P1yWhjUHkcvFc5NboaUkubvZ3LYVmHxASUDYo9",
  "key12": "3MHWc1Pc6qt45BP8WLFfywqSMhxwFBQunTDVFwFjxpitADNqSMFpVGSrZPgwrjaFeENecYQXhkQubDV2uTTu1wx5",
  "key13": "5HPn9XuBHeKYrrRZRLg2Cq8DnPDJDYEe5KuYZtmeTHyi41bYb7i9mGYDz7We141YbrpbpbEcXBWcGsnqPmW8SVE8",
  "key14": "2LrrXtiwhgbhsqY37S46D12Bti7Hz2a9rmdEerWYDrFv9a8k8tnWW9xR2rHShVHfeoYkPJqek1JqxuZaR2uRNshS",
  "key15": "5suZnekmhbeHCVZo3rzqzA6RLUVPbDpPRvQnvPBrxcTsFGYNQA8jy7hieZRT7cc4ueJuBvqR1ZdAQcYXQ8GUTCBV",
  "key16": "5WXDFkCkeaQCUy57QmZzdh53HEBkTLx7uU79wUmtdcoAit4pnbDa4JbCHzK8Cr4nnj9JgDKxvadJujXn1Adfg54F",
  "key17": "53jxSiZ7bdoSyHBQF6U9F2zcgYZJjhScotm58YeaGwDMyo9JfvQYPacRYjGNQkWSjcWMwS8imae9aUShVVxBQ1ev",
  "key18": "3kn6vqpmj4S73mv11QbgsjcsCNdLWkjzRoi2Xgxjus2LhKB45FSEsM43Fb7ZMHz9xoFc8s8eURyio7CW36iNL4mM",
  "key19": "5STonY6X7C4UNga3dpYh6gSrEvMwMBZ5JeNP5KTUZVrYqxQea4Nhg7ZKxKKSnysyonHzWjnKn8mgjMJC7gBy3Mo",
  "key20": "3xYWbRyaA46nyZmmfoSvVogDJ9xmXjFB6gknKCqy21X8GsoT4wquuLUz9yo7Hqs5e4Kskk6cZQEczTAeRE2EBefh",
  "key21": "4irwGv9yUEXBL6nqzJjFSdeNbnVP22wtR1WxpBwrf73t8QLZciXddyrjPP9wuhCwCiphs7P1oF1THzbfpKqNxYpV",
  "key22": "2Bg9dyqjNJxus98QAuh8Fy4gVGUPsxhPUZyfJCosZUuxsAWZ1sb4kkRUCoZXxuMsvuW4NnTZ6ZxXyo2q9sNLJtLL",
  "key23": "3sfd2ugSVXKYtgVWvWcbsHsK5EC1rX3MCkmpvDjJXouZdyGfnEhK6jqZVTjuRe76FcGTGmCaoQcqfLYYMsk4PUxQ",
  "key24": "4FvXf6UNvo6fcA4GVRUUMiAcxGnsNBzbq8XnYYn6Xh4jDivr9c6oo4zKPph2NYb7HEuxikc9Hd6oP1YLkq3KrMcS",
  "key25": "2uzJSuG69aEGCmVEehPrqxifx8bPu9uTGGiLp1s3VaF5n9CWZcef18wKNAkWZtigpVRDtdhaJivWzHc1xo33g9wS",
  "key26": "Tor7yoH1Z7FPnTUWHioxbgSyetUNXEX61s3hQisvbQMWMYTwvQMDNnW6vvHPcFQF4evEohgiP6PjLpRgdQ3Fs4c"
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
