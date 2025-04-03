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
    "Q7q356j6m2nuD6ta3UqUQpMYtW5nMPkEjR5FjLy5WCy8hwxmSiCAo56adgpHSKriECziAQCAzTLHsicjYiEfdND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5qPh6vrYNijaoiBXhsGzFHQ5anWViYdsQVqo95sMBPkZ84dxDvk2XUUiAUSRVpaVKvhpxrFvJM4HSMnRkUVvUW",
  "key1": "3JmifSE7ebtu84f7tT5snvxBvRsUXc7XJQkw43yCQzy3MFnx7GXkQh1hFSMz4qkD843RKvRJTznFX31u8AejpbWB",
  "key2": "w8PjQEfqgHtBGJN3z7JpdjTbr7Y2WfY6mjddBXyn8YxypoKgbxapq6VFgR6xJo4rnCBNq29apb19euR7msmd6mW",
  "key3": "65NsbjggikZmpmHsBGeuyViaP9rrCugvj4gsUYmt2FvYHnHpi2hyNbbDpk15piVS917C3vFjZvwckQYaGe5Z2xZw",
  "key4": "5i7D2v6g131znsbq9dkFCRdYJXJ9b9e6eNYdPwADsVJGPv6mNHkffJ27gMGsigYwVDMWPCHV7Uc6Sfo4HEmD6BCw",
  "key5": "4GemXdDU5ALK7sQD39vUwxnRacW5oM5tL6UBb3hL1a92FEffqZ1dd6YqnyWBPoTTDJzVmNoD7cmXFnARFNC9SwWz",
  "key6": "3Ag7Pzf5feRRSp5qHz6aBnkEHW58vV45x6frBVHFWbozaGrQPBASGcsemS5bZ2nbtp2ZDV97hFoNpex6s1urPBeQ",
  "key7": "5V47YtY7vNvZnFdNugW1RMLK3F4vKNK495AfrZ6Ky2JDdhPAkk82ScS7CpC5NvYE53bmFkT6Kbdd6vuwjHi7CJ2m",
  "key8": "2EBABYtC5GquMo7eJcEepaFE6JeCDg7HsnGo77c62iK5KVWw7gYawWvGHam8FFuyxBbVF72cU6oHW2hxKtvtLwtS",
  "key9": "3rx2arvETbskh8Jqy9kMcYvJLeCzPEEbQJFpAMeNcL8RaLy4yrp7JbjyhiRVLgYvyLujGbjmcnoGhxFShqsfPDce",
  "key10": "2db8bVSFuEaysJpmaWbtaQERCHMpkbkmaruXYWnyy9fz2SdNz4ZcHyRsheGWVsTsW2UnVgjeDaTTKdin3J8mwWN1",
  "key11": "4Wec8KZ8KfdRkyxbtYJJuKBZixbcQbBVeX22gC1z6AZRi7FF9mWXYeL84QVh7kYWaKsHPgr9soR2aa8SK8z1F7Vk",
  "key12": "4zQE3jLX7x3ARamVLmfYzwDXvimD8e9o5bTF2do4MaRebDhhi1PToJHPW4jiJeUdXthPW98C5vEPNwbjGEud9N8V",
  "key13": "2a6FHi3NnM7mboEeCAAFS2eXaDB6YFMmtkM6i6ish5hLx6pkZeZizfRGYCw4RvRsiEBEX7ZmvbMfqxLk2T6BiHsj",
  "key14": "2F2GiTydRxMpaUVKzPyFvxPQqx77WE6JbKSxS7MGJnZj4U1aRFdrNC8n2ivFoV7KraeWAVVj5CHNeeCqojEEpwEx",
  "key15": "2kt7iVMsMeiGhhsSaToN6wz5z8htWDkmiNEfhK59Z6yi1AGJneLKeDTsD9YQHWPFUWmb88jXbCSKSdwycMreNAVH",
  "key16": "sh9qK2CHSuScuvJ9Gzo1XVmzy8TYo9YQG1oa5TAHtaGtpsj1TSF7iFNCe2Hyay2khbQoEaTCmgimeRt9r88dt6T",
  "key17": "34SDLr2d3BJsokmU18GYEqCZ39FTMgD1Ka5BrVBWr6mZTDe8U5kPdnokZvxd7zLSexENdDG2b4EA8Z8QAeq7n9mC",
  "key18": "5q5JrX2fiExXdrH1vwpRqBVwCPNL2S89BRMvuKjvhMPjwMKqurrKb2HWaYMzgjk4HL5KR4nKV6NvVdUrDV9YjaDx",
  "key19": "TsQuxkPtun3b3MN2Sva8CXzbL2rgfKQkiRgavVvsTKbfY9UWgRhsaSZRY3x9kCLifvbfP7x6jg3NybEh21MwebD",
  "key20": "4gE3CiWij3kwXeCTHuJRyPehs5wh6KGykCiVd785T72hCWpKvQF2zqEZJxpT8ofYbqrBRLg7SXh6k6QgzA7G1k12",
  "key21": "5ntfnJUaKbqT8RK5doDqW6KjzRUxb5qP5DLjGrgVCiLr292pZiwUq1LoYjAQTsTAzGc8a3fipHPY8T8QGRiokG4X",
  "key22": "5HxsmYWPSXfYJdHyTUUft3T62Njr2UDcSWtv8TCTaY8rTZNW1roWutGtnpP4f1LdwXLxH9ZamooDjhEgGtqT7ENs",
  "key23": "49Lrv1jTx9bM63MeqoiyqDAkASWBkALLquLEbTvaBTJMsbM5f4bAujtYQa33aCCRqfekt6fzRuL6tG1G8Leff5FT",
  "key24": "5q5wMHY87X537RdqTwLpJDox3dy7mcnt7z4kjeCZ2CzBQa5Y3zLykUpAF7pGFrKa6KqsiDQJsP1mTvNWkFZZZPcV",
  "key25": "5E9hhNTY4MvMhVg5xKSpzD2dimQR1hHSHqg2cPHw9RoAnV2HZeDQ1i3zX7gkDomPz8N6AabUzFRmQZBB3kaFydgE",
  "key26": "3hMSuNQN1eWmmNENinfaVtojfeWp396rhY92iRYSPUveAo8t8WFbBMFJ4gk28ggE6urTy1ZYL3t9h8AQY5Hi7Bv8"
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
