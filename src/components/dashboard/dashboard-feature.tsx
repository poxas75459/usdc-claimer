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
    "3rrDnW8QiJCo5FavYYDoVm1P4Gw9CKGt7nAuze45iNvFUZCnKGuaFkuNUECnh11k2jDcogJLqwTxvGdfngk1ietN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YjuRcRgdYt4ZkxsajYDRFnetGrJmAKBy7qh4fYzPKCG7WRL5nPgzTpvBpUayyWAUs8oNbBCdZgAh5yLy9jTeNDm",
  "key1": "2ChwyQLDapYLipTSGzjgPRa71qBitHjBvVUCPG7wiXr24mj7bbt3iZxwAttG7DyzT17oaCUNAffgxf3gWuYzvppZ",
  "key2": "pV8DkmKoCTSBL2NRxmJoMNsjKr6VcbMKeMpN5ZMZoEhwsYJrAHJ5G3FRwb1LqnpsCLXWiJQpN4RCd9QrBD4hxpf",
  "key3": "n3X65gAPWMUCkJyLQCRES9QdNsMwFxdbo8nLygJCLBcE8WVYC5UiRmuLFg2o2MHph2HkdCyZz7LpKfNEVTfK1xf",
  "key4": "2DHTEJ2tB4E3Jv5cEekLGNKffkSSHfVJKyjkWyDAPBmRWH8kHYJdisu8PuEGDporEZ1hZuF3r8gwzrFHuCmU3g7b",
  "key5": "2Ub1XMaPVcvKsVDgiyS5K3BRdpj1ezST6J6jFCgvd8tkJqLsqCscfU3cgQBKPVpnYTK7jUeH2HcWnLp5aQ442qpQ",
  "key6": "Y3z5ZDEeFWYjCQXhEqw8uE4dzVAr1iQYfcStRLbD2QTMUFcHTrJAHfyrgMcUXtwNyduKq1Z3FBcqhRD3cx5pm9A",
  "key7": "31qQR7RfrygQDj4rya6yLbhd9KbL8Epja2E7xvaugzZ2epe8m3jm6gvrPRFwX6GvYhRaM5Ag59Nz79ACa9J1ucpy",
  "key8": "4Jo2MZGjHpjTGWgtkTM8bvMJhPCwG1cZzBrva7Mb2aLujAJMgmt4ajFWzmrXFTqrMyvaTpba26G5hdHCPXqKupdY",
  "key9": "5uX1CyugfwHRGcBpHk1kcda6YSv6cxbzAn4GMtp2Wao5btBCLoxfBQzc7GjPjoUFkyETKeTK9pS96dZRih4TNPUn",
  "key10": "5diXF7BN5HQa9Vap9YdSg4UzWnKsDHNYsQVL4euGcwGmWjPgNKjKM8Xt2NBCawcSnepWhP86kx1m7kSpRXKi42S8",
  "key11": "5j6EWWYFawqLRTjZhSZHfeKJngm1gwPRL7hJBDPgq4SFBss5R6aBsJUyYx7Ywn14UGYrHjkhmayV98pERgg4u3Bm",
  "key12": "4Mc5A4AdCEsQZ1D12whC63b8m5cBxmn5Rhp2bVAigfLPrivPTJNMQrSEjCZ8vsWqxH2rNL1XXVahZsaKNtM6Ga4A",
  "key13": "47s8QsRf8dM3Z2kFitSQ7szE2WqvP6qzPqZkUqFwS4j7L4JzcLiexRNN4P2Cp43AsUxJdWjDHqD93DSHSwxtT1DX",
  "key14": "2gMYAWm7upQyFyWS8FCYeFqMGeu2tgivufkgSqg36GXR6L4BjA1bjpip2gF7Pt6mJsE47JPrXLzpTabRWziSHCqh",
  "key15": "KdCjLE67WAuTGeQQyymNQYSDBnftkB7Zdfv2GPWXJN53KZkPk1sS5fLwnNWnQafP3Bi8g6GMFL1mmHsffByJheo",
  "key16": "SUh9B7D5RSGuaz5UDwvU2az3h3dacmuqoE6rbz25VwNgwNQiXXckqncULXnAKKcKZaAWeVnpawqaQEysnn5QByH",
  "key17": "xikLJr2CFqXgYCF8aeVp5pxGAGCriUTEGgF6WvNC2UasoHToydphc5xSz6NtYXNqjuKNc5zYEJBHmNkyM39ongS",
  "key18": "5kBXDx2wWcuhEq2y7X33aMtEUo4bzmi18FGP5E2JM1UuddnLUzpDG2eNmRZiecyj4resqmsQ1gL2JhkCnGx44K63",
  "key19": "JQhVZsLbdzK4dSPcMDsa9pXNEVTZQbecWwbFbdLUzNSNZp9P4sarcokFX9Yf3jwtxCgoJhXohPiKnjKruhvw1Dr",
  "key20": "2Fa6G1zzDaTUBjvJsb2c88Sc2WyZE6HQmpF5mFPdfSbmwHP848fXmvvwuqfGLnxYtPoLCqndychW2ENdCDGSrwAD",
  "key21": "28MjDpjZDfpimgy49pphcMV5iJCvbAXSXSxDNj5ZHLGipmW7rDhNBRJwKxZHk7R67Nqdx2uXqAomEnxTs2ZuEuYP",
  "key22": "2NxTtAmSmKeDwKLJrAXJcYX8Wq844utDPpLWCBUcmfSpgfSWWeDJyyfryqx5NruT9rH7MdEbvenrq2rNVoqqHHyy",
  "key23": "5bpZ3xAnu5h5rsMU2RWLisfbZwjEGm1uQc6beai54vMUWx7k3RA1DVmYTsivbA4akodFFPEi11yMK9FTaHzTN14Q",
  "key24": "4huTm3KLJmVZteabwVVKRpWJaBC4f2rLHGQ19oA2VweKEYbrJ6r6S9iu2GWzu7KEYkh6HnxQDnAihv6XMjkfPthz",
  "key25": "4FH3n8ZaUQkiTuaFonTL5YrGr4pUFmfzsTagKJa4r5ErUraRyTVfdnzc5dMpuovgLKg4BT48SchdGo2wgySsa2NU",
  "key26": "4L8YUogPp82SQQ6SGECERNQeeyvPbaX1ho3huJihWVqYXrN6px5C4mppQ7XPJAKHwVDxun6Awe7Q5aSr1YMTVkAU",
  "key27": "yaZ1J6CneEvfJ1XKpbg9en5pCJzuagPkUgyhKFRDR7em5aeAMTKNsBQVNQJvqFBY5Uzm4C193sVLvWJGEnd3mTM",
  "key28": "2hyejzZ1wVaqZuHxwQy2yCM9tQNjLuK7TzxbuStzWn1k8hFs3NAq4MTDCDdfvdwvy9rTeEh1MDpnm7C8eHFS9Ddz",
  "key29": "fksC5eUYXBwQsqa3sEQrhc7zBBjQxmgyntEkCzTw7UdCFP6Mesoy5QvoU32Y2pJWS6f3dWWdhRiZVHh3jyJaJea",
  "key30": "29TQ1xbtpxfCj85FZJGH6BpDKXrV9wTxLKLoHMyjHByJo5pX8Ny8MvMeWrgUzACzT8zCihM3PiMZPCxryjnZR57D",
  "key31": "5jB1iFu5xDYWXetq3veNf2e5rtYL7G5rje1KCWhtKEjqupdp6dtnbTSfcvG13RA5EYdp58WUe2LKw8gbRTULth5j",
  "key32": "5zDsT9okVn6UNLuU8emiXjqjEdZqbxrfaotFMKqMJnqbX71H4hNKcqEJZqxBki7rPhbuRTbxqDe2fgmq8Nevgc2F",
  "key33": "5b29TF5nWUPVFJ1zjUyvzSSNDTbRvyeza2aYYMDxQEptPFq9MR6wA3r4yMRkmdZKPx3tVVhUEQFG4Kf7XQRykYj",
  "key34": "3UsHuPtRyChX4ZXgzwLvRBLcwRvn3NiZ2Vw557pKBVmCvwAF3zqw5enwvHN34rUw69KBfPCQD65QwQsvy6XHCX3w",
  "key35": "2cvNi4L1XWn7QuGCp6PtPNPdqzVuaf1HmmnG3gk37E7xmFNB8i8HwHkNxYXQ6oA49JjdSxubTgdK8UssLgeYtjrG",
  "key36": "2hMoFLGLCwgKrRLSHQiYiA2eqdH5pxgVDBjpjkRp4dofTy6YpjvbLyFi3LhXm4Vgb5oL5FYmmJiL1pyfokVdZ44T"
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
