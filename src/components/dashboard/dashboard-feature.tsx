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
    "67m2PnqckBB8s3xKh6oRzs1YGxUiWPeMtr4MU6x1cQHuSGDSvDgHGxu9CG1igfjs1qZdscV7z1TG6uiaA1ne3M6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LotbzzfBR2ZkurR9ru5tJ9e7moUyqGLQPXkS9bSuULUgWQwiZTWqPiv6E9QAEMrExGu6BhwnEkGASoWb5zCpD4k",
  "key1": "5it8si35u2oCqC4fmjjLccXQaTXcdDvhrX9PcsaKLMnahbGahR5TvYvoFfdDsoM88UhGWYxwdbQ9vKE6nHY63Yi6",
  "key2": "R6nZsLsVjWJnU66Gg13mV8fnY2topYbYb8XjEmhbDvqVkWLTPDKZM8XdSC2vzg6tfYwZcBdztSdT1CfNti33LdU",
  "key3": "4vQe9aL5EQCiyJT6EwsUJphaLKjLYNt4xpoziU5jbz7Xm5vD9b3pABsWzX7MtscgAyFKWKncRzJjhnFc83Pam7Vu",
  "key4": "4MhJ9UmumxNunhHLVKn5X9zhoG4GnxgTsbh7JqspWTFrM5vCXMdksiiTHs934bBXSFHomwLoCvtFdJTwrvbLPa6",
  "key5": "2Nc4S4bFSQeiv1TzAWbbNfSyCFSnFRHWzpMqesUoxargmjwJtiTEV2ZZ1UVEd5NQxvoJWNNw55pen8Jhr8i2nxA8",
  "key6": "cmriQ5WRvcgUziCdUw7HTEJf7Zi9Kxm8LzfceCKdSNaHpqsSTteCFV2eVbkd6bQnwSQG237GKRyoUVPfMg4Khj2",
  "key7": "3zd7QgqQJKibR8m67WxKNxMsB2JgEALk4tb4hya4uE3DDsFuu6TwsExbsvq59L2ui1EyZkpaMgxYv1sxkw9DGKao",
  "key8": "3dHK78HhcioeJpQp2czpGYbi3jTNSwBt579bCS5Vv4boMZGdrnN9CdH9ubgVMBRcEsTVwXqs8WCD944gAhk9CDR",
  "key9": "66NiMGQwAFe8LV2jcMNXeffekPQohoX1rK5C3q5FJRoV7732HNEKsVP6Bh4zMsQTrtMFjbdcwitBQVh5uBAhA8J2",
  "key10": "WZUVrUrTyVBzGuH6JepUesmNzGqkurFkvxvg7Tc286JvASKAfsbcapTNi5y1RTiMBgXY9MnZxWrJz4wxR2E3J7s",
  "key11": "29HfguYo7UeU5S2MUdkYLVKg1cJmfWPNb3NWrpPV9P8gCdNjXbEyKym6iYeHG3ucPDXFBjwuSnopNE6AY2SfiShv",
  "key12": "FqFqju3ApeQ7F9rpV7TH6UYtw23WVpPAPvBYMy5JT15hrUhbjabPptwMWkRY1HfDWWJ4ZtCFaTFjZDLw6EUetrj",
  "key13": "2MnxLy7JV2V5vCPX5ZJwpexusup1QaaKLuUef4nA1t3maK7Ekfe7cLbxGQhr9YP3QiiR4t54SDCrYFDbnemjgFu8",
  "key14": "3nsQEEuoB4vPtczEwbPtGCsxfcDTRe5WA1CsvsxRUBboXztixc1AHMNyqt6Fq1tJYK91McGU4fcx8dCgYaE4yc97",
  "key15": "3dTmcZTMHsorRo3tHbW6vNaJkceEkAqaywivwS919fuUuUu2FffJfpck2sotcCF61Ex11d5qCyLVogimUv8aJPvS",
  "key16": "35d4bGk5kJuc1Rt5h9b1GWQWXDEtAzkWrHmj1c1zmeH1wxNCd5KBdPKD1Mpdv2gELP3LT9d9QvbgkfngrWCBKd77",
  "key17": "3Mt8NGCPUbf3YjzZzWo2KNxXCqHPc1YTrFgD4gB8GhHkEPTMnxEsg4WFQexJcE7p9WxeVpHSPJRqYw9LHvyWteVV",
  "key18": "3r9Uebvp61JBi3RgLM9WD2FwC784BBnRahbcSUvVX7SuiWEx9BNZNbiMsQCQzK6wCBkVuU86GxumRzr7nXm6nBDF",
  "key19": "5s7e9Z6GsVqNUP33aeC2i2naky1hBdJmcsPG9ihaYH1UD8ttbpQ2qsxuLLbr7vpQQkWaxx5GKgWCrjBcXqRds6kM",
  "key20": "4T5iems48LudkQ1v4NEUaRCVFZzkaXcKNDxTE1NKUvPHnPVwPpVHSoE1wThz8bJX3DcaCpvDu59FkPLg69TVV4v6",
  "key21": "5a3ZaiSpXzocpuGaTsx8anu5xkRme3kBWkCWyDjbmjixw2aKmFqvK7kymG2GhnELKGMTaQTcXQuvNn886gDDT7bo",
  "key22": "4xwK7hZ7d7T3UQe89YiUk9Y4zbuSzozYxicU3zVEJW9BpUNydnRuJhJMDiLpuZuSEAU16oPUptXAVruEaq78CJjz",
  "key23": "31rk3Y5H5G6jhfMVxhtRX3MWksK8NootjtB37e7tX3Gowomrm3H3AGZqyWxRyPLABcrR2N8bBTAnfQRehmcgUYoV",
  "key24": "2cM5fJ2B6xTdpPaFdK4pbCMSmAf69TjJhg4QMKPZtxPZbYPTpZWVa9o899hixB1fkdqMdKL45LDZc1SFTKZQA3qA",
  "key25": "4Hqd7fwZ5WvsED2qGV7EerX7hRjRDZpvG64cDt6pcLPdCxaZe7ibMpkbiZouWUhWq4zx1unbFt4ZhUp1vZfmqBub",
  "key26": "cnLBrb2HoVbXF7GTuuAR7ZVKoQJWEDfFHopCxx8ReNa4rjruNsSVnxwFhZUNsdYcDWjXRpQnoasnVjsDZLT6cz3"
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
